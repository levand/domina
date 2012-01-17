(ns domina.events
  (:require [domina :as domina]
            [goog.events :as events]))

;;;;;;;;;;;;;;;;;;; Event Wrappers ;;;;;;;;;;;;;;;;;

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
        wevent (name wrapped-event)
        event (name event-key)]
    (set! (.-wrapped-event wevent))
    (set! (.-event event))
    (set! (.-listen obj) 
          (fn [elm func capture opt-scope opt-handler]
            (let [callback (wrapper-func func)]
              (set! (.-listen callback) func)
              (set! (.-scope callback) opt-scope)
              (set! (.-event callback) event)
              (if op-handler
                (.listen opt-handler elm wevent callback capture)
                (events/listen elm wevent callback capture)))))
    (set! (.-unlisten obj)
          (fn [elm func capture opt-scope opt-handler]
            (let [listeners (events/getListeners elm (name event) capture)]
              (dorun 
                (map (fn [obj]
                       (let[listener (.-listener obj)]
                         (when (and (or (not func) (= (.-listen listener) func))
                                    (or (not opt-scope) (= (.-scope listener) opt-scope)))
                           (if opt-handler
                             (.unlisten opt-handler elm wevent listener)
                             (events/unlisten elm wevent listener))))) listeners)))))
    obj))

(defn- remove-wrapped-listeners 
  "similar to goog.events.removeAll but handles only wrapped events"
  [node wrapper]
  (let [listeners (events/getListeners node (.-wrapped-event wrapper)  capture)
        event (.event wrapper)]
    (dorun
      (map (fn [obj]
             (let[listener (.-listener obj)
                  listen-f (.-listen listerner)
                  capture (.-capture listener)]
               (when (= (.-event listener) event)
                 (events/unlisten node wevent listen-f capture))) listeners)))))

(def wrapper-register (atom {}))

;;;;;;;;;;;;;;;;;;; Public API ;;;;;;;;;;;;;;;;;

(defn reg-event-wrapper! [event-key wrapped-key wrapper-func]
  (swap! wrapper-register assoc event-key (gen-wrapper event-key wrapped-key wrapper-func)))


(defn listen!
  "adding an event to the selected nodes"
  ([nds event func] (listen nds event func false))
  ([nds event func capture]
    (let [wrapper (wrapper-register event)]
      (doseq [node (domina/nodes nds)]
        (if (nil? wrapper)
          (events/listen node (name event) func capture)
          (events/listenWithWrapper node wrapper func capture))))))

(defn unlisten! 
  "removing a specific event from the selected nodes"
  ([nds event func] (unlisten nds event func false))
  ([nds event func capture]
    (let [wrapper (wrapper-register event)]
      (doseq [node (domina/nodes nds)]
        (if (nil? wrapper) 
          (events/unlisten node (name event) func capture)
          (events/unlistenWithWrapper node wrapper func capture))))))
  
(defn remove-listeners! 
  "removes all listeners for a given set of events on the selected nodes"
  [nds & event-list]
  (doseq [node (domina/nodes nds)
          map-func #(let [wrapper (wrapper-register (name %))] 
                      (if wrapper 
                        (remove-wrapped-listeners node wrapper)
                        (events/removeAll node (name %))))]
      (if wrapper
        (doall (map map-func event-list)))))

;;;;;;;;;;;;;;;;;;; Initialization ;;;;;;;;;;;;;;;;;
(reg-event-wrapper! :mouseenter :mouseover mouse-enter-leave)
(reg-event-wrapper! :mouseleave :mouseout mouse-enter-leave)
