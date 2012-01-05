(ns domina.xpath
  (:require [domina :as domina]
            [goog.dom :as dom]))

;; This file covers the same basic functionality as goog.dom.xml.
;; However, it does so in such a way that it can fall back to xpath support
;; provided by non-native XPath implementations (e.g, http://llamalab.com/js/xpath/
;; or http://mcc.id.au/xpathjs)

(defn- select-node*
  [path node technique-1 technique-2]
  (let [doc (dom/getOwnerDocument node)]
    (cond (and (. node selectSingleNode)
               (. doc setProperty))
          (do
            (.setProperty doc "SelectionLanguage" "XPath")
            (technique-1 node path))
          (and (. doc createNSResolver)
               (. doc evaluate))
          (let [resolver (.createNSResolver doc (. doc documentElement))]
            (technique-2 resolver doc node path))
          :else (throw (Error. "Could not find XPath support in this browser.")))))

(defn- select-node
  "Selects a single node using an XPath expression and a root node"
  [expr node]
  (select-node* expr node
                (fn [node expr]
                  (.selectSingleNode node expr))
                (fn [resolver doc node expr]
                  (let [result (.evaluate doc expr node resolver
                                          XPathResult/FIRST_ORDERED_NODE_TYPE nil)]
                    (. result singleNodeValue)))))

(defn- select-nodes
  "Selects multiple nodes using an XPath expression and a root node"
  [expr node]
  (select-node* expr node
                (fn [node expr]
                  (.selectNodes node expr))
                (fn [resolver doc node expr]
                  (let [result (.evaluate doc expr node resolver
                                          XPathResult/ORDERED_NODE_SNAPSHOT_TYPE nil)
                        num-results (.snapshotLength result)]
                    (loop [i 0 acc nil]
                      (if (< i num-results)
                        (recur (inc i) (cons (.snapshotItem result i) acc))
                        acc))))))

(defn xpath
  "Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base."
  ([expr] (xpath js/document expr))
  ([base expr] (reify domina/DomContent
                 (nodes [_] (mapcat (partial select-nodes expr) (domina/nodes base)))
                 (single-node [_] (first (filter (complement nil?)
                                                 (map (partial select-node expr)
                                                      (domina/nodes base))))))))