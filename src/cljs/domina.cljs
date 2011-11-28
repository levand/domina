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
  "Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base."
  ([expr] (xpath js/document expr))
  ([base expr] (reify DomContent
                      (nodes [_] (mapcat #(xml/selectNodes % expr) (nodes base)))
                      (single-node [_] (first (filter (complement nil?)
                                                       (map #(xml/selectSingleNode % expr)
                                                            (nodes base))))))))

(defn id
  "Returns content containing a single node by looking up the given ID"
  [id]
  (dom/getElement id))

(defn css-class
  "Returns content containing nodes which have the specified CSS class."
  [class-name]
  (reify DomContent
         (nodes [_] (dom/getElementsByClass class-name))
         (single-node [_] (dom/getElementByClass class-name))))

(defn children
  "Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient."
  [content]
  (mapcat dom/getChildren (nodes content)))

(defn clone
  "Returns a deep clone of content."
  [content]
  (map #(. % (cloneNode true)) (nodes content)))

(declare apply-with-cloning)

(defn append
  "Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content."
  [parent-content child-content]
  (apply-with-cloning dom/appendChild parent-content child-content))

(defn insert
  "Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content."
  [parent-content child-content idx]
  (apply-with-cloning #(dom/insertChildAt %1 %2 idx) parent-content child-content))

(defn prepend
  "Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content."
  [parent-content child-content]
  (insert parent-content child-content 0))

(defn insert-before
  "Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one."
  [content new-content]
  (apply-with-cloning #(dom/insertSiblingBefore %2 %1) content new-content))

(defn insert-after
  "Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one."
  [content new-content]
  (apply-with-cloning #(dom/insertSiblingAfter %2 %1) content new-content))

(defn swap
  "Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary."
  [old-content new-content]
  (apply-with-cloning #(dom/replaceNode %2 %1) old-content new-content))

(defn detach
  "Removes all the nodes in a content from the DOM and returns them."
  [content]
  (doall (map dom/removeNode (nodes content))))

(defn destroy
  "Removes all the nodes in a content from the DOM. Returns nil."
  [content]
  (dorun (map dom/removeNode (nodes content))))

(defn destroy-children
  "Removes all the child nodes in a content from the DOM. Returns the original content."
  [content]
  (dorun (map dom/removeChildren (nodes content)))
  content)

;;;;;;;;;;;;;;;;;;; TODO ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Manipulation

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

(defn- apply-with-cloning
  "Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first."
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

