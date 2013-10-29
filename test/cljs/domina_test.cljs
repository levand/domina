(ns domina-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom]))

(deftest single-node-test
  (testing "Unit Testing for (single-node node)\n"
    (testing "Edge cases\n"
      (testing "(single-node str)"
        (are [expected actual] (= expected actual)
             true nil)))))
