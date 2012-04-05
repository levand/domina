(ns domina.events
  (:require [domina :as domina]
            [goog.events :as events]))

;; Restatement of the the GClosure Event API.
(defprotocol Event
  (prevent-default [evt] "Prevents the default action, for example a link redirecting to a URL")
  (stop-propagation [evt] "Stops event propagation")
  (target [evt] "Returns the target of the event")
  (current-target [evt] "Returns the object that had the listener attached")
  (type [evt] "Returns the type of the the event")
  (raw-event [evt] "Returns the original GClosure event"))

(defn- find-builtin-type
  [evt-type]
  (aget events/EventType (.toUpperCase (name evt-type))))

(defn- clojure-to-camelcase
  [identifier]
  (let [matches (re-seq #"-\w")
        replacements (map #(str ))
        ])
)

(defn- create-listener-function
  [f]
  (fn [evt]
    (f (reify
         Event
         (prevent-default [_] (.preventDefault evt))
         (stop-propagation [_] (.stopPropagation evt))
         (target [_] (.-target evt))
         (current-target [_] (.-currentTarget evt))
         (type [_] (.-type evt))
         (raw-event [_] evt)
         ILookup
         (-lookup
           ([o k]   )
           ([o k not-found] ))
       ))
    )
  
  f)

(defn- listen-internal!
  [content type listener capture once]
  (let [f (create-listener-function listener)
        t (find-builtin-type type)]
    (doseq [node (domina/nodes content)]
      (if once
        (events/listenOnce node t f capture)
        (events/listen node t f capture)))))

(defn listen!
  "Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a listener key."
  [content type listener]
  (listen-internal! content type listener false false))

(defn capture!
  "Add an event listener to each node in a DomContent. Listens for events during the capture phase. Returns a listener key."
  [content type listener]
  (listen-internal! content type listener true false))

(defn listen-once!
  "Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked. Returns a listener key."
  [content type listener]
  (listen-internal! content type listener false true))

(defn capture-once!
  "Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked. Returns a listener key."
  [content type listener]
  (listen-internal! content type listener true true))

(defn unlisten!
  "Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type."
  ([content]
     (doseq [node (domina/nodes content)]
       (events/removeAll node)))
  ([content type]
     (let [type (when type (or (find-builtin-type type) type))]
       (events/removeAll node type))))

(defn unlisten-by-key!
  "Given a listener key, removes the listener."
  [key]
  (events/unlistenByKey key))

(defn get-listeners
  "Returns a sequence of event listeners for all the nodes in the
content. If given a type, only returns listeners of that type."
  ([content]
     (mapcat #(events/getListeners %) (domina/nodes content)))
  ([content type]
     (let [type (when type (or (find-builtin-type type) type))]
       (mapcat #(events/getListeners % type) (domina/nodes content)))))

(comment
;;;;;;;;;;;;;;;;;;; Event Wrappers ;;;;;;;;;;;;;;;;

(defn child-of?
  "returns true if the node(child) is a child of parent"
  [parent child]
  (cond
    (not child) false
    (identical? parent child) false
    (identical? (.-parentNode child) parent) true
    :else (recur parent (.-parentNode child))))

(defn- mouse-enter-leave
  "this is used to build cross browser versions of :mouseenter and :mouseleave events"
  [func]
  (fn [e]
    (let [re (.-relatedTarget e)
          this (.-currentTarget e)]
      (when (and
              (not (identical? re this))
              (not (child-of? this re)))
        (func e)))))


(defn- gen-wrapper
  "Generic event wrapper that handles listening and cleanup of wrapped events"
  [event-key wrapped-key wrapper-func]
  (let [obj (new js/Object)
        wevent (name wrapped-key)
        event (name event-key)]
    (set! (.-wrapped-event obj) wevent)
    (set! (.-event obj) event)
    (set! (.-listen obj)
          (fn [elm func capture opt-scope opt-handler]
            (let [callback (wrapper-func func)]
              (set! (.-listen callback) func)
              (set! (.-scope callback) opt-scope)
              (set! (.-event callback) event)
              (set! (.-capture callback) capture)
              (if op-handler
                (.listen opt-handler elm wevent callback capture)
                (events/listen elm wevent callback capture)))))
    (set! (.-unlisten obj)
          (fn [elm func capture opt-scope opt-handler]
            (let [listeners (if (= capture js/undefined)
                              (concat (events/getListeners elm wevent false)
                                      (events/getListeners elm wevent true))
                              (events/getListeners elm wevent capture))]
              (dorun
                (map (fn [obj]
                       (let[listener (.-listener obj)
                            lfunc (.-listen listener)
                            scope (.-scope listener)
                            capture (.-capture listener)]
                         (when (and (or (not func) (= lfunc func))
                                    (or (not opt-scope) (= scope opt-scope)))
                           (if opt-handler
                             (.unlisten opt-handler elm wevent listener capture)
                             (events/unlisten elm wevent listener capture))))) listeners)))))
    obj))

(def wrapper-register (atom {}))

;;;;;;;;;;;;;;;;;;; Public API ;;;;;;;;;;;;;;;;;

(defn reg-event-wrapper! [event-key wrapped-key wrapper-func]
  (swap! wrapper-register assoc event-key (gen-wrapper event-key wrapped-key wrapper-func)))


(defn listen!
  "adding an event to the selected nodes"
  ([nds event func] (listen! nds event func false))
  ([nds event func capture]
    (let [wrapper (@wrapper-register event)]
      (doseq [node (domina/nodes nds)]
        (if (nil? wrapper)
          (events/listen node (name event) func capture)
          (events/listenWithWrapper node wrapper func capture))))))

(defn unlisten!
  "removing a specific event from the selected nodes"
  ([nds event func] (unlisten! nds event func false))
  ([nds event func capture]
    (let [wrapper (@wrapper-register event)]
      (doseq [node (domina/nodes nds)]
        (if (nil? wrapper)
          (events/unlisten node (name event) func capture)
          (.unlisten wrapper node func capture))))))

(defn remove-listeners!
  "removes all listeners for a given set of events on the selected nodes"
  [nds & event-list]
  (doseq [node (domina/nodes nds)]
    (let [map-func #(let [wrapper (@wrapper-register %)]
                      (if wrapper
                        (.unlisten wrapper node)
                        (events/removeAll node (name %))))]
      (doall (map map-func event-list)))))

(defn fire-listeners!
  "fires the listeners attached to a set of nodes"
  [nds event capture event-map]
  (let [wrapper (@wrapper-register event)
        nevent (if wrapper (.-wrapped-event wrapper) (name event))
        event-obj (goog.events.Event. (event-map :type) (event-map :target))]
    (set! (.-relatedTarget event-obj) (event-map :related-target))
    (doseq [node (domina/nodes nds)]
      (events/fireListeners node nevent capture event-obj))))


;;;;;;;;;;;;;;;;;;; Initialization ;;;;;;;;;;;;;;;;;
(reg-event-wrapper! :mouseenter :mouseover mouse-enter-leave)
(reg-event-wrapper! :mouseleave :mouseout mouse-enter-leave)
)