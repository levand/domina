(ns domina.test-ie
  (:use [domina :only [nodes single-node by-id by-class children clone append!
                       prepend! detach! destroy! destroy-children! insert! insert-before!
                       insert-after! swap-content! style attr set-style! set-attr! styles attrs
                       set-styles! set-attrs! has-class? add-class! remove-class! classes
                       text set-text! value set-value! html set-html!]]
        [domina.xpath :only [xpath]]))

(append! (xpath "//body") "<p>\n\n   Some text.  \n  </p>")

(def x (xpath "//p"))
(def n (single-node x))
(def t (text x))
(def t2 (text n))

(js/alert t)
(js/alert t2)


