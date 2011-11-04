(ns domina
  (:require [goog.dom :as dom]
            [goog.dom.xml :as xml]
            [clojure.browser.repl :as repl]))

;; Selecting (xpath, nodelist* -> nodelist) == traversing
;; Manipulating
;; - Creating (parentless)
;; - Inserting
;; - Deleting

;; Attributes
;; - getting
;; - setting


(defn sel
  "Given an xpath expression and an optional base node (or seq of nodes),
returns a seq of matching nodes."
  ([xpath] (sel js/document xpath))
  ([base xpath] (if (seq? base)
                  (mapcat #(xml/selectNodes % xpath) base)
                  (seq (xml/selectNodes base xpath)))))

(defn sel-one
  "Given an xpath expression and an optional base node (or seq of nodes),
returns the first matching node"
  ([xpath] (sel-one js/document xpath))
  ([base xpath] (if (seq? base)
                  (first (filter (complement nil?)
                                 (map #(xml/selectSingleNode % xpath) base)))
                  (xml/selectSingleNode base xpath))))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;




(comment

  (def test (sel "//div[@class='level1']"))
  (def te (sel-one "//div[@class='level2']"))
  (def level2s (sel "//div[@class='level2']"))

  (def level3s (sel level2s "div[@class='level3']"))

  (mapcat #(sel % "div[@class='level3']") level2s)
  
  (for [e level2s]
    (sel e ))
  
  (sel level2s "div[@class='level3']")
  
  (sel level)
  )

