(ns domina.css-edge-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina.core :as dom :refer (nodes)]
            [domina.css :as css :refer (sel)]
            [domina.fixtures :as fix :refer (base-fixture)]))

(use-fixtures :each base-fixture)

;;; sel
(deftest  sel-test
  (testing "Unit Testing for (sel css-expr)\n"
    (testing "Edge Cases\n"
      (are [expected actual] (= expected actual)
           false (nil? (sel nil))
           false (nil? (sel ""))
           false (nil? (sel " "))
           0 (count (nodes (sel ".not-existent-css-class")))
           0 (count (nodes (sel "#not-existent-css-id")))))))
