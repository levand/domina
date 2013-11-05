(ns domina.css-test
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
    (testing "Edge Cases\n"
      (are [expected actual] (= expected actual)
             nil (css/sel nil)
             nil (css/sel "")
             nil (css/sel " ")
             0 (count (dom/nodes (css/sel ".not-existent-css-class")))
             0 (count (dom/nodes (css/sel "#not-existent-id")))
             0 (count (dom/nodes (css/sel ".not existent css class")))
             0 (count (dom/nodes (css/sel "#not existent css id")))))
    (testing "Standard Cases\n"
      (are [expected actual] (= expected actual)
           3 (count (dom/nodes (css/sel "p")))
           false (nil? (dom/single-node (css/sel "p")))
           1 (count (dom/nodes (css/sel ".d1")))
           1 (count (dom/nodes (css/sel "#id1")))
           3 (count (dom/nodes (-> (css/sel ".d1")
                                   (css/sel "p"))))
           3 (count (dom/nodes (css/sel ".d1 > p")))))))
