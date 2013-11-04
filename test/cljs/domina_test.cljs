(ns domina-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom]))

(deftest nodes-test
  (testing "Unit Testing for (nodes content)\n"
    (testing "Edge Cases\n"
      (testing "(nodes str)"
        (are [expected actual] (= expected actual)
             true false)))
    (testing "Standard cases\n"
      (are [expected actual] (= expected actual)
           true false))))

(deftest single-node-test
  (testing "Unit Testing for (single-node node)\n"
    (testing "Edge Cases\n"
      (testing "(single-node str)"
        (are [expected actual] (= expected actual)
             true false)))
    (testing "Standard cases\n"
      (are [expected actual] (= expected actual)
           true false))))

(deftest by-id-test
  (testing "Unit Testing for (by-id id)\n"
    (testing "Edge Cases\n"
      (testing "(by-id s)"
        (are [expected actual] (= expected actual)
             nil (dom/by-id nil)
             nil (dom/by-id "")
             nil (dom/by-id "not-existent-id")
             nil (dom/by-id "not existent id")
             nil (dom/by-id " "))))
    (testing "Standard cases\n"
      (are [expected actual] (= expected actual)
           true false))))

(deftest by-class-test
  (testing "Unit Testing for (by-class class-name)\n"
    (testing "Edge Cases\n"
      (testing "(by-class css-class)"
        (are [expected actual] (= expected actual)
             nil (dom/by-class nil)
             nil (dom/by-class "")
             nil (dom/by-class " ")
             nil (dom/by-class "not-existent-class")
             nil (dom/by-class "not existent class"))))
    (testing "Standard cases\n"
      (are [expected actual] (= expected actual)
           true false))))
