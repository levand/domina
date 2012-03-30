(ns domina.events
  (:require [domina :as domina]
            [goog.events :as events]))




(comment
;;;;;;;;;;;;;;;;;;; Event Wrappers ;;;;;;;;;;;;;;;;;

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