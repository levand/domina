(ns domina
  (:require [goog.dom :as dom]
            [goog.dom.xml :as xml]
            [goog.dom.classes :as classes]
            [goog.dom.forms :as forms]
            [goog.style :as style]
            [goog.string :as string]
            [cljs.core :as core]))
;;;;;;;;;;;;;;;;;;; Debug Log ;;;;;;;;;;;;;;;;;
(def debug true)
(defn log-debug [mesg]
  (when (and debug (not (= (.-console js/window) js/undefined)))
    (.log js/console mesg)))

;;;;;;;;;;;;;;;;;;; Protocols ;;;;;;;;;;;;;;;;;

(defprotocol DomContent
  (nodes [content] "Returns the content as a sequence of nodes.")
  (single-node [nodeseq] "Returns the content as a single node (the first node, if the content contains more than one"))

;;;;;;;;;;;;;;;;;;; Public API ;;;;;;;;;;;;;;;;;

(defn by-id
  "Returns content containing a single node by looking up the given ID"
  [id]
  (dom/getElement (core/name id)))

(defn by-class
  "Returns content containing nodes which have the specified CSS class."
  [class-name]
  (reify DomContent
    (nodes [_] (dom/getElementsByClass (core/name class-name)))
    (single-node [_] (dom/getElementByClass (core/name class-name)))))

(defn children
  "Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient."
  [content]
  (mapcat dom/getChildren (nodes content)))

(defn clone
  "Returns a deep clone of content."
  [content]
  (map #(. % (cloneNode true)) (nodes content)))

(declare apply-with-cloning)

(defn append!
  "Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content."
  [parent-content child-content]
  (apply-with-cloning dom/appendChild parent-content child-content)
  parent-content)

(defn insert!
  "Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content."
  [parent-content child-content idx]
  (apply-with-cloning #(dom/insertChildAt %1 %2 idx) parent-content child-content)
  parent-content)

(defn prepend!
  "Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content."
  [parent-content child-content]
  (insert! parent-content child-content 0)
  parent-content)

(defn insert-before!
  "Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one."
  [content new-content]
  (apply-with-cloning #(dom/insertSiblingBefore %2 %1) content new-content)
  content)

(defn insert-after!
  "Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one."
  [content new-content]
  (apply-with-cloning #(dom/insertSiblingAfter %2 %1) content new-content)
  content)

(defn swap-content!
  "Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary."
  [old-content new-content]
  (apply-with-cloning #(dom/replaceNode %2 %1) old-content new-content)
  old-content)

(defn detach!
  "Removes all the nodes in a content from the DOM and returns them."
  [content]
  (doall (map dom/removeNode (nodes content))))

(defn destroy!
  "Removes all the nodes in a content from the DOM. Returns nil."
  [content]
  (dorun (map dom/removeNode (nodes content))))

(defn destroy-children!
  "Removes all the child nodes in a content from the DOM. Returns the original content."
  [content]
  (dorun (map dom/removeChildren (nodes content)))
  content)

;;;;;;;;;;;;;;;;;;; TODO ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; Attributes, classes & styles

(defn style
  "Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style."
  [content name]
  (let [s (style/getStyle (single-node content) (core/name name))]
    (if (not (string/isEmptySafe s)) s)))

(defn attr
  "Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style."
  [content name]
  (.getAttribute (single-node content) (core/name name)))

(defn set-style!
  "Sets the value of a CSS property for each node in the content. Name may be a string or keyword."
  [content name value]
  (doseq [n (nodes content)]
    (style/setStyle n (core/name name) value))
  content)

(defn set-attr!
  "Sets the value of an HTML property for each node in the content. Name may be a string or keyword."
  [content name value]
  (doseq [n (nodes content)]
    (.setAttribute n (core/name name) value))
  content)

;; We don't use the existing style/parseStyleAttributes because it camelcases everything.
;; This uses the same technique, however.
(defn parse-style-attributes
  "Parses a CSS style string and returns the properties as a map."
  [style]
  (reduce (fn [acc pair]
            (let [[k v] (. pair split #"\s*:\s*")]
              (if (and k v)
                (assoc acc (keyword (. k (toLowerCase))) v)
                acc)))
          {}
          (. style split #"\s*;\s*")))

(defn styles
  "Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords."
  [content]
  (parse-style-attributes (attr content "style")))

(defn attrs
  "Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords."
  [content]
  (let [node (single-node content)
        attrs (. node -attributes)]
    (reduce conj (map
                  #(let [attr (. attrs item %)]
                     {(keyword (.. attr -nodeName (toLowerCase)))
                      (. attr -nodeValue)})
                  (range (. attrs -length))))))

(defn set-styles!
  "Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings."
  [content styles]
  (doseq [[name value] styles]
    (set-style! content name value))
  content)

(defn set-attrs!
  "Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings."
  [content attrs]
  (doseq [[name value] attrs]
    (set-attr! content name value))
  content)

(defn has-class?
  "Returns true if the node has the specified CSS class. Assumes content is a single node."
  [content class]
  (classes/has (single-node content) class))

(defn add-class!
  "Adds the specified CSS class to each node in the content."
  [content class]
  (doseq [node (nodes content)]
    (classes/add node class))
  content)

(defn remove-class!
  "Removes the specified CSS class from each node in the content."
  [content class]
  (doseq [node (nodes content)]
    (classes/remove node class))
  content)

(defn classes
  "Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node."
  [content]
  (seq (classes/get (single-node content))))

;; Contents

(defn text
  "Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup."
  ([content] (text content true))
  ([content normalize]
     (if normalize
       (string/trim (dom/getTextContent (single-node content)))
       (dom/getRawTextContent (single-node content)))))

(defn set-text!
  "Sets the text value of all the nodes in the given content."
  [content value]
  (doseq [node (nodes content)]
    (dom/setTextContent node value))
  content)

(defn value
  "Returns the value of a node (presumably a form field). Assumes content is a single node."
  [content]
  (forms/getValue (single-node content)))

(defn set-value!
  "Sets the value of all the nodes (presumably form fields) in the given content."
  [content value]
  (doseq [node (nodes content)]
    (forms/setValue node value))
  content)

(defn html
  "Returns the innerHTML of a node. Assumes content is a single node."
  [content]
  (. (single-node content) -innerHTML))

(defn set-html!
  "Sets the innerHTML value for all the nodes in the given content."
  [content value]
  (doseq [node (nodes content)]
    (set! (. node -innerHTML) value))
  content)

;;;;;;;;;;;;;;;;;;; private helper functions ;;;;;;;;;;;;;;;;;

(defn- apply-with-cloning
  "Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first."
  [f parent-content child-content]
  (let [fragment (. js/document (createDocumentFragment))]
    (doseq [child (nodes (clone child-content))]
      (.appendChild fragment child))
    (doseq [parent (nodes parent-content)]
      (f parent (.cloneNode fragment true)))))

(defn- lazy-nodelist
  "A lazy seq view of a js/NodeList"
  ([nl] (lazy-nodelist nl 0))
  ([nl n] (when (< n (. nl -length))
            (lazy-seq
             (cons (. nl (item n))
                   (lazy-nodelist nl (inc n)))))))

;;;;;;;;;;;;;;;;;;; String to DOM ;;;;;;;;;;;;;;;;;;;;;;;;

(defn- create-wrapper
  [table-level]
  (.createElement
   js/document
   (if table-level
     (if (#{"td" "th"} table-level)
       "tr"
       "table")
     "div")))

(defn- set-wrapper-html!
  [wrapper content]
  (if (.-INNER_HTML_NEEDS_SCOPED_ELEMENT dom/BrowserFeature)
    (do
      (set! (.-innerHTML wrapper) (str "<br>" content))
      (.removeChild wrapper (.-firstChild wrapper)))
    (set! (.-innerHTML wrapper) content)))

(defn- extract-wrapper-dom
  [wrapper table-level]
  (let [inner-wrapper (if (= table-level "tr")
                        (first (dom/getElementsByTagNameAndClass "tbody" nil wrapper))
                        wrapper)
        children (.-childNodes inner-wrapper)]
    (if (= (.-length children) 1)
      (.removeChild inner-wrapper (.-firstChild inner-wrapper))
      children)))

(defn- string-to-dom
  [content]
  (let [[_ table-level & _] (re-find #"^<(t(head|body|foot|[rhd]))" content)
        wrapper (create-wrapper table-level)]
    (set-wrapper-html! wrapper content)
    (extract-wrapper-dom wrapper table-level)))

;;;;;;;;;;;;;;;;;;; Protocol Implementations ;;;;;;;;;;;;;;;;;

(extend-protocol DomContent
  string
  (nodes [s] (nodes (string-to-dom s)))
  (single-node [s] (single-node (string-to-dom s)))

  js/Element
  (nodes [content] (cons content))
  (single-node [content] content)

  default
  (nodes [content] (seq content))
  (single-node [content] (first content)))

(extend-type js/NodeList
  ICounted
  (-count [nodelist] (. nodelist -length))

  IIndexed
  (-nth ([nodelist n] (. nodelist (item n)))
    ([nodelist n not-found] (if (<= (. nodelist -length) n)
                              not-found
                              (nth nodelist n))))
  ISeqable
  (-seq [nodelist] (lazy-nodelist nodelist)))

;; StaticNodeList basically the same as NodeList, only present in IE8.
(if (. js/window -StaticNodeList)
  (extend-type js/StaticNodeList
    ICounted
    (-count [nodelist] (. nodelist -length))

    IIndexed
    (-nth
      ([nodelist n] (. nodelist (item n)))
      ([nodelist n not-found] (if (<= (. nodelist -length) n)
                                not-found
                                (nth nodelist n))))

    ISeqable
    (-seq [nodelist] (lazy-nodelist nodelist))))

(extend-type js/HTMLCollection
  ICounted
  (-count [coll] (. coll -length))

  IIndexed
  (-nth
    ([coll n] (. coll (item n)))
    ([coll n not-found] (if (<= (. coll -length) n)
                          not-found
                          (nth coll n))))

  ISeqable
  (-seq [coll] (lazy-nodelist coll)))
