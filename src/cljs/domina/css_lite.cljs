(ns domina.css-lite
  (:require [domina :as domina]
            [goog.dom :as dom]))

(defn- root-element
  []
  (aget (dom/getElementsByTagNameAndClass "html") 0))


(defn sel
  "Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base."
  ([expr] (sel (root-element) expr))
  ([base expr]
     (let [query (fn [element]
                   (domina/normalize-seq (.querySelectorAll element expr)))]
       (reify domina/DomContent
         (nodes [_] (mapcat query
                            (domina/nodes base)))
         (single-node [_] (first (filter
                                  (complement nil?)
                                  (mapcat query
                                          (domina/nodes base)))))))))
