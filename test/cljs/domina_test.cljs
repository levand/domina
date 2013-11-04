(ns domina-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom]))

;;; nodes
(deftest  nodes-test
  (testing "Unit Testing for (nodes content)\n"
    (testing "Edge Cases\n"
      (testing "(nodes content)"
        (are [expected actual] (= expected actual)
             nil (dom/nodes nil)
             nil (dom/nodes "")
             nil (dom/nodes " ")
             '("not-a-content") (dom/nodes "not-a-content")
             '("not a content") (dom/nodes "not a content")
             nil (dom/nodes ())
             nil (dom/nodes [])
             nil (dom/nodes {})
             nil (dom/nodes #{}))))))

;;; single-node
(deftest  single-node-test
  (testing "Unit Testing for (single-node node)\n"
    (testing "Edge Cases\n"
      (testing "(single-node node)"
        (are [expected actual] (= expected actual)
             nil (dom/single-node nil)
             nil (dom/single-node "")
             nil (dom/single-node " ")
             "not-a-node" (dom/single-node "not-a-node")
             "not a node" (dom/single-node "not a node")
             nil (dom/single-node ())
             nil (dom/single-node [])
             nil (dom/single-node {})
             nil (dom/single-node #{}))))))

;;; by-id
(deftest  by-id-test
  (testing "Unit Testing for (by-id id)\n"
    (testing "Edge Cases\n"
      (testing "(by-id s)"
        (are [expected actual] (= expected actual)
             nil (dom/by-id nil)
             nil (dom/by-id "")
             nil (dom/by-id "not-existent-id")
             nil (dom/by-id "not existent id")
             nil (dom/by-id " "))))))

;;; by-class
(deftest  by-class-test
  (testing "Unit Testing for (by-class class-name)\n"
    (testing "Edge Cases\n"
      (testing "(by-class css-class)"
        (are [expected actual] (= expected actual)
             nil (dom/by-class nil)
             nil (dom/by-class "")
             nil (dom/by-class " ")
             nil (dom/by-class "not-existent-class")
             nil (dom/by-class "not existent class"))))))

;;; value
(deftest  value-test
  (testing "Unit Testing for (value content)\n"
    (testing "Edge Cases\n"
      (testing "(value single-node)"
        (are [expected actual] (= expected actual)
             nil (dom/value (dom/by-id nil))
             nil (dom/value (dom/by-id ""))
             nil (dom/value (dom/by-id " "))
             nil (dom/value (dom/by-id "not-existent-id"))
             nil (dom/value (dom/by-id "not existent id")))))))
