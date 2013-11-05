(ns domina.css-standard-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom]
            [domina.css :as css]
            [domina.fixture :as fix]))

(use-fixtures :each fix/each-fixture)

;;; sel
(deftest  sel-test
  (testing "Unit Testing for (sel css-expr)\n"
    (testing "Standard Cases\n"
      (are [expected actual] (= expected actual)
           3 (count (dom/nodes (css/sel "p")))
           1 (count (dom/nodes (css/sel ".d1")))
           1 (count (dom/nodes (css/sel "#id1")))
           3 (count (dom/nodes (-> (css/sel ".d1")
                                   (css/sel "p"))))
           3 (count (dom/nodes (css/sel ".d1 > p")))
           2 (do (dom/append! (css/sel "body")
                              "<div><p><span>some text</span></p><p><span>more text</span></p></div>")
                 (count (dom/nodes (-> (css/sel "body")
                                       (css/sel "div")
                                       (css/sel "p")
                                       (css/sel "span")))))))))
