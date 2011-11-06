(ns domina
  (:require [goog.dom :as dom]
            [goog.dom.xml :as xml]
            [clojure.browser.repl :as repl]))

;;;;;;;;;;;;;;;;;;; Protocols ;;;;;;;;;;;;;;;;;

(defprotocol DomContent
  (nodes [content] "Returns the content as a sequence of nodes.")
  (single-node [nodeseq] "Returns the content as a single node (the first node, if the content contains more than one"))

;;;;;;;;;;;;;;;;;;; Public API ;;;;;;;;;;;;;;;;;

(defn xpath
  "Gets a DomContent from an xpath expression. Takes an optional DomContent as a base; if none is given, uses js/document as a base."
  ([expr] (xpath js/document expr))
  ([base expr] (reify DomContent
                      (nodes [_] (mapcat #(xml/selectNodes % expr) (nodes base)))
                      (single-node [_] (first (filter (complement nil?)
                                                       (map #(xml/selectSingleNode % expr)
                                                            (nodes base))))))))

(defn children
  "Gets all the children of a DomContent. Same as (xpath content '*') but more efficient."
  [content]
  (mapcat dom/getChildren (nodes content)))

(defn clone
  "Returns a deep clone of DOM content."
  [content]
  (map #(. % (cloneNode true)) (nodes content)))

(declare apply-parent-child-with-cloning)

(defn append
  "Given a parent and child DomContents, appends each of the children to all of the parents. If there is more than one parent, clones the children for the additional parents. Returns the parent."
  [parent-content child-content]
  (apply-parent-child-with-cloning dom/appendChild parent-content child-content))

(defn detach
  "Removes all the nodes in a DomContent from the DOM and returns them."
  [content]
  (doall (map dom/removeNode (nodes content))))

(defn destroy
  "Removes all the nodes in a DomContent from the DOM. Returns nil."
  [content]
  (dorun (map dom/removeNode (nodes content))))

(defn destroy-children
  "Removes all the child nodes in a DomContent from the DOM. Returns the original DomContent."
  [content]
  (dorun (map dom/removeChildren (nodes content)))
  content)

;;;;;;;;;;;;;;;;;;; TODO ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Manipulation
(defn prepend [parent-content child-content])
(defn insert-before [content new-content])
(defn insert-after [content new-cntent])
(defn replace [old-content new-content])
(defn wrap [content wrapping-content])
(defn unwrap [content])

;; Attributes, classes & styles
(defn style ([content property]) ([content property value]))
(defn attr ([content attribute]) ([content attribute value]))
(defn styles ([content]) ([content style-map]))
(defn attrs ([content]) ([content attr-map]))
(defn has-class [content])
(defn add-class [content class])
(defn remove-class [content class])

;; Contents
(defn text ([content]) ([content text]))
(defn value ([content]) ([content value]))
(defn html ([content]) ([content html]))

;; Display
(defn offset ([content]) ([content value]))
(defn position ([content]) ([content value]))
(defn width ([content]) ([content value]))
(defn height ([content] ([content value])))

;;;;;;;;;;;;;;;;;;; private helper functions ;;;;;;;;;;;;;;;;;

(defn- apply-parent-child-with-cloning
  "Takes a two-arg function, a parent DomContent and a child DomContent. Applies the function for each parent / child combination. Uses clones of the children for each additional parent after the first."
  [f parent-content child-content]
  (let [parents (nodes parent-content)]
    (when (not (empty? parents))
      (doseq [child (nodes child-content)]
          (f (first parents) child))
      (doseq [parent (rest parents)
              child (nodes (clone child-content))]
        (f parent child)))))

(defn- lazy-nodelist
  "A lazy seq view of a js/NodeList"
  ([nl] (lazy-nodelist nl 0))
  ([nl n] (when (< n (. nl length))
            (lazy-seq
             (cons (. nl (item n))
                   (lazy-nodelist nl (inc n)))))))

;;;;;;;;;;;;;;;;;;; Protocol Implementations ;;;;;;;;;;;;;;;;;

(extend-protocol DomContent

  string
  (nodes [s] (cons (dom/htmlToDocumentFragment s)))
  (single-node [s] (dom/htmlToDocumentFragment s))

  js/Node
  (nodes [content] (cons content))
  (single-node [content] content)

  default
  (nodes [content] (seq content))
  (single-node [content] (first content)))

(extend-type js/NodeList
  ICounted
  (-count [nodelist] (. nodelist length))

  IIndexed
  (-nth ([nodelist n] (. nodelist (item n)))
        ([nodelist n not-found] (if (<= (. nodelist length) n)
                                  not-found
                                  (nth nodelist n))))
  ISeqable
  (-seq [nodelist] (lazy-nodelist nodelist)))

(extend-type js/HTMLCollection
  ICounted
  (-count [coll] (. coll length))

  IIndexed
  (-nth ([coll n] (. coll (item n)))
        ([coll n not-found] (if (<= (. coll length) n)
                                  not-found
                                  (nth coll n))))
  ISeqable
  (-seq [coll] (lazy-nodelist coll)))

