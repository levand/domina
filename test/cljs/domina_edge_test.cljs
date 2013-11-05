(ns domina-edge-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom]
            [domina.fixture :as fix]))

(use-fixtures :each fix/each-fixture)

;;; nodes
(deftest  nodes-test
  (testing "Unit Testing for (nodes content)\n"
    (testing "Edge Cases\n"
      (testing "(nodes content)"
        (are [expected actual] (= expected actual)
             nil (dom/nodes nil)
             nil (dom/nodes "")
             nil (dom/nodes " ")
             false (nil? (dom/nodes "not-a-content"))
             false (nil? (dom/nodes "not a content"))
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
             false (nil? (dom/single-node "not-a-node"))
             false (nil? (dom/single-node "not a node"))
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
  (testing "Unit Testing for (by-class css-class)\n"
    (testing "Edge Cases\n"
      (testing "(by-class css-class)"
        (are [expected actual] (= expected actual)
             nil (dom/by-class nil)
             nil (dom/by-class "")
             nil (dom/by-class " ")
             nil (dom/by-class "not-existent-class")
             nil (dom/by-class "not existent class"))))))

;;; append!
(deftest  append!-test
  (testing "Unit Testing for (append! parent-content child-content)\n"
    (testing "Edge Cases\n"
      (testing "(append! single-parent single-child)"
        (are [expected actual] (= expected actual)
             nil (dom/append! nil nil)
             () (dom/children (dom/append! (dom/by-id "id1") nil))
             () (dom/children (dom/append! (dom/by-id "id1") ""))
             () (dom/children (dom/append! (dom/by-id "id1") " "))
             nil (dom/append! nil "<div></div>")))
      (testing "(append! multiple-parent child-content)"
        (are [expected actual] (= expected actual)
             () (dom/children (dom/append! (dom/by-class "p1") nil))
             () (dom/children (dom/append! (dom/by-class "p1") ""))
             () (dom/children (dom/append! (dom/by-class "p1") " "))
             () (dom/children (dom/append! (dom/by-class "p1") ()))
             () (dom/children (dom/append! (dom/by-class "p1") []))
             () (dom/children (dom/append! (dom/by-class "p1") {}))
             () (dom/children (dom/append! (dom/by-class "p1") #{})))))))

;;; detach
(deftest  detach!-test
  (testing "Unit Testing for (detach! content)\n"
    (testing "Edge Cases\n"
      (testing "(detach! content)"
        (are [expected actual] (= expected actual)
             nil (dom/detach! nil)
             () (dom/detach! "")
             () (dom/detach! " ")
             () (dom/detach! ())
             () (dom/detach! [])
             () (dom/detach! {})
             () (dom/detach! #{})
             ;; I don't like at all the following two results. In my
             ;; opinion they should both return ()
             '(nil) (dom/detach! "not-existent-parent")
             '(nil) (dom/detach! "not existent parent"))))))

;;; children
(deftest  children-test
  (testing "Unit Testing for (children content)\n"
    (testing "Edge Cases\n"
      (testing "(children content)"
        (are [expected actual] (= expected actual)
             nil (dom/children nil)
             () (dom/children "")
             () (dom/children " ")
             () (dom/children ())
             () (dom/children [])
             () (dom/children {})
             () (dom/children #{})
             () (dom/children "not-existent-parent")
             () (dom/children "not existent parent"))))))

;;; destroy
(deftest  destroy!-test
  (testing "Unit Testing for (destroy! content)\n"
    (testing "Edge Cases\n"
      (testing "(destroy! content)"
        (are [expected actual] (= expected actual)
             nil (dom/destroy! nil)
             nil (dom/destroy! "")
             nil (dom/destroy! " ")
             nil (dom/destroy! "not-a-content")
             nil (dom/destroy! "not a content")
             nil (dom/destroy! ())
             nil (dom/destroy! [])
             nil (dom/destroy! {})
             nil (dom/destroy! #{}))))))

;;; common-ancestor
(deftest  common-ancestor-test
  (testing "Unit Testing for (common-ancestor &contents)\n"
    (testing "Edge Cases\n"
      (testing "(common-ancestor node-a)"
        (are [expected actual] (= expected actual)
             nil (dom/common-ancestor nil)))
      (testing "(common-ancestor node-a node-b)"
        (are [expected actual] (= expected actual)
             nil (dom/common-ancestor nil nil)
             nil (dom/common-ancestor nil (dom/by-id "id1"))
             nil (dom/common-ancestor (dom/by-id "id1") nil)))
      (testing "(common-ancestor node-a node-b node-c)"
        (are [expected actual] (= expected actual)
             nil (dom/common-ancestor nil nil nil)
             nil (dom/common-ancestor nil (dom/by-id "id1") nil)
             nil (dom/common-ancestor nil nil (dom/by-id "id1"))
             nil (dom/common-ancestor (dom/by-id "id1") nil nil))))))

;;; ancestor?
(deftest  ancestor?-test
  (testing "Unit Testing for (ancestor? ancestor-node descendant-node)\n"
    (testing "Edge Cases\n"
      (testing "(ancestor? ancestor descendant)"
        (are [expected actual] (= expected actual)
             nil (dom/ancestor? nil nil)
             nil (dom/ancestor? nil (dom/by-id "id1"))
             nil (dom/ancestor? (dom/by-id "id1") nil)

             nil (dom/ancestor? () ())
             nil (dom/ancestor? nil ())
             nil (dom/ancestor? () nil)

             nil (dom/ancestor? [] [])
             nil (dom/ancestor? nil [])
             nil (dom/ancestor? [] nil)

             nil (dom/ancestor? {} {})
             nil (dom/ancestor? nil {})
             nil (dom/ancestor? {} nil)

             nil (dom/ancestor? #{} #{})
             nil (dom/ancestor? nil #{})
             nil (dom/ancestor? #{} nil))))))

;;; clone
(deftest clone-test
  (testing "Unit Testing for (clone node)\n"
    (testing "Edge Cases\n"
      (testing "(clone node)"
        (are [expected actual] (= expected actual)
             nil (dom/clone nil)
             () (dom/clone ())
             () (dom/clone [])
             () (dom/clone {})
             () (dom/clone #{}))))))

;;; prepend!
(deftest  prepend!-test
  (testing "Unit Testing for (prepend! parent child)\n"
    (testing "Edge Cases\n"
      (testing "(prepend! parent child)"
        (are [expected actual] (= expected actual)
             true false)))))

;;; destroy-children!
(deftest  destroy-children!-test
  (testing "Unit Testing for (destroy-children!)\n"
    (testing "Edge Cases\n"
      (testing "(destroy-children!)"
        (are [expected actual] (= expected actual)
             true false)))))

;;; style
(deftest  style-test
  (testing "Unit Testing for (style content name)\n"
    (testing "Edge Cases\n"
      (testing "(style content name)"
        (are [expected actual] (= expected actual)
             true false)))))

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
