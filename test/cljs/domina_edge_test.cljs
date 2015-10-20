(ns domina-edge-test.test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina.core :as dom :refer (nodes
                                         single-node
                                         by-class
                                         by-id
                                         append!
                                         prepend!
                                         clone
                                         ancestor?
                                         common-ancestor
                                         children
                                         detach!
                                         destroy!
                                         destroy-children!
                                         has-class?
                                         value)]
            [domina.xpath :as xp :refer (xpath)]
            [domina.fixtures :as fix :refer (base-fixture)]))

(use-fixtures :each base-fixture)

;;; nodes
(deftest  nodes-test
  (testing "Unit Testing for (nodes content)\n"
    (testing "Edge Cases\n"
      (testing "(nodes content)"
        (are [expected actual] (= expected actual)
             () (nodes nil)
             false (nil? (nodes ""))
             false  (nil? (nodes " "))
             false (nil? (nodes (by-id "not-an-existent-id")))
             nil (nodes ())
             nil (nodes [])
             nil (nodes {})
             nil (nodes #{}))))))

;;; single-node
(deftest  single-node-test
  (testing "Unit Testing for (single-node node)\n"
    (testing "Edge Cases\n"
      (testing "(single-node node)"
        (are [expected actual] (= expected actual)
             nil (single-node nil)
             false (nil? (single-node ""))
             false (nil? (single-node " "))
             true (nil? (single-node (by-class "not-a-class")))
             true (nil? (single-node (by-id "not-an-id")))
             nil (single-node ())
             nil (single-node [])
             nil (single-node {})
             nil (single-node #{}))))))

;;; by-id
(deftest  by-id-test
  (testing "Unit Testing for (by-id id)\n"
    (testing "Edge Cases\n"
      (testing "(by-id s)"
        (are [expected actual] (= expected actual)
             "Error" (try
                       (by-id nil)
                       (catch js/Error e
                         "Error"))
             nil (by-id "")
             nil (by-id "not-existent-id")
             nil (by-id " "))))))

;;; by-class
(deftest  by-class-test
  (testing "Unit Testing for (by-class css-class)\n"
    (testing "Edge Cases\n"
      (testing "(by-class css-class)"
        (are [expected actual] (= expected actual)
             "Error" (try
                       (by-class nil)
                       (catch js/Error e
                         "Error"))
             ;nil (by-class "")
             ;nil (by-class " ")
             nil (by-class "not-existent-class"))))))

;;; append!
(deftest  append!-test
  (testing "Unit Testing for (append! parent-content child-content)\n"
    (testing "Edge Cases\n"
      (testing "(append! single-parent single-child)"
        (are [expected actual] (= expected actual)
             nil (append! nil nil)
             () (children (append! (by-id "id1") nil))
             () (children (append! (by-id "id1") ""))
             () (children (append! (by-id "id1") " "))
             nil (append! nil "<div></div>")))
      (testing "(append! multiple-parent child-content)"
        (are [expected actual] (= expected actual)
             () (children (append! (by-class "p1") nil))
             () (children (append! (by-class "p1") ""))
             () (children (append! (by-class "p1") " "))
             () (children (append! (by-class "p1") ()))
             () (children (append! (by-class "p1") []))
             () (children (append! (by-class "p1") {}))
             () (children (append! (by-class "p1") #{})))))))

;;; detach
(deftest  detach!-test
  (testing "Unit Testing for (detach! content)\n"
    (testing "Edge Cases\n"
      (testing "(detach! content)"
        (are [expected actual] (= expected actual)
             () (detach! nil)
             '(nil) (detach! "")
             '(nil) (detach! " ")
             () (detach! ())
             () (detach! [])
             () (detach! {})
             () (detach! #{})
             () (detach! (by-class "not-a-class"))
             () (detach! (by-id "not-an-id")))))))

;;; children
(deftest  children-test
  (testing "Unit Testing for (children content)\n"
    (testing "Edge Cases\n"
      (testing "(children content)"
        (are [expected actual] (= expected actual)
             () (children nil)
             () (children "")
             () (children " ")
             () (children ())
             () (children [])
             () (children {})
             () (children #{})
             () (children "not-existent-parent")
             () (children "not existent parent"))))))

;;; destroy
(deftest  destroy!-test
  (testing "Unit Testing for (destroy! content)\n"
    (testing "Edge Cases\n"
      (testing "(destroy! content)"
        (are [expected actual] (= expected actual)
             nil (destroy! nil)
             nil (destroy! "")
             nil (destroy! " ")
             nil (destroy! "not-a-content")
             nil (destroy! "not a content")
             nil (destroy! ())
             nil (destroy! [])
             nil (destroy! {})
             nil (destroy! #{}))))))

;;; common-ancestor
(deftest  common-ancestor-test
  (testing "Unit Testing for (common-ancestor &contents)\n"
    (testing "Edge Cases\n"
      (testing "(common-ancestor node-a)"
        (are [expected actual] (= expected actual)
             nil (common-ancestor nil)))
      (testing "(common-ancestor node-a node-b)"
        (are [expected actual] (= expected actual)
             nil (common-ancestor nil nil)
             nil (common-ancestor nil (by-id "id1"))
             nil (common-ancestor (by-id "id1") nil)))
      (testing "(common-ancestor node-a node-b node-c)"
        (are [expected actual] (= expected actual)
             nil (common-ancestor nil nil nil)
             nil (common-ancestor nil (by-id "id1") nil)
             nil (common-ancestor nil nil (by-id "id1"))
             nil (common-ancestor (by-id "id1") nil nil))))))

;;; ancestor?
(deftest  ancestor?-test
  (testing "Unit Testing for (ancestor? ancestor-node descendant-node)\n"
    (testing "Edge Cases\n"
      (testing "(ancestor? ancestor descendant)"
        (are [expected actual] (= expected actual)
             true (ancestor? nil nil)
             true (ancestor? nil (by-id "id1"))
             false (ancestor? (by-id "id1") nil)

             true (ancestor? () ())
             true (ancestor? nil ())
             true (ancestor? () nil)

             true (ancestor? [] [])
             true (ancestor? nil [])
             true (ancestor? [] nil)

             true (ancestor? {} {})
             true (ancestor? nil {})
             true (ancestor? {} nil)

             true (ancestor? #{} #{})
             true (ancestor? nil #{})
             true (ancestor? #{} nil))))))

;;; clone
(deftest clone-test
  (testing "Unit Testing for (clone node)\n"
    (testing "Edge Cases\n"
      (testing "(clone node)"
        (are [expected actual] (= expected actual)
             () (clone nil)
             () (clone ())
             () (clone [])
             () (clone {})
             () (clone #{}))))))

;;; has-class?
(deftest has-class?-test
  (testing "Unit Testing for (has-class? content class)\n"
    (testing "Edge Cases\n"
      (testing "(has-class? content class)"
        (are [expected actual] (= expected actual)
             "Error" (try
                       (has-class? nil nil)
                       (catch js/Error e
                         "Error"))
             "Error" (try
                       (has-class? nil "p1")
                       (catch js/Error e
                         "Error"))
             false (has-class? (by-id "id1") nil))))))

;;; value
(deftest  value-test
  (testing "Unit Testing for (value content)\n"
    (testing "Edge Cases\n"
      (testing "(value single-node)"
        (are [expected actual] (= expected actual)
             "Error" (try
                       (value (by-id nil))
                       (catch js/Error e
                         "Error"))
             "Error" (try
                       (value (by-id ""))
                       (catch js/Error e
                         "Error"))
             "Error" (try
                       (value (by-id " "))
                       (catch js/Error e
                         "Error"))
             "Error" (try
                       (value (by-id "not-existent-id"))
                       (catch js/Error e
                         "Error")))))))
