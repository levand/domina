(ns domina.css-edge-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom]
            [domina.css :as css]
            [domina.fixtures :as fix :refer (base-fixture)]))

(use-fixtures :each base-fixture)

;;; sel
#_(deftest  sel-test
  (testing "Unit Testing for (sel css-expr)\n"
    (testing "Edge Cases\n"
      (are [expected actual] (= expected actual)
           nil (css/sel nil)
           nil (css/sel "")
           nil (css/sel " ")
           0 (count (dom/nodes (css/sel ".not-existent-css-class")))
           0 (count (dom/nodes (css/sel "#not-existent-id")))
           0 (count (dom/nodes (css/sel ".not existent css class")))
           0 (count (dom/nodes (css/sel "#not existent css id")))))))
