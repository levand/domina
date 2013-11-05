(ns domina-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom]
            [domina.fixture :as fix]
            [domina.xpath :as xp]))

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
             nil (dom/nodes #{}))))
    (testing "Standard Cases\n"
      (testing "(nodes content)"
        (are [expected actual] (= expected actual)
             3 (count (dom/nodes (xp/xpath "//p")))
             1 (count (dom/nodes (xp/xpath "//div[@class='d1']"))))))))

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
             nil (dom/single-node #{}))))
    (testing "Standard Cases\n"
      (testing "(single-node node)"
        (are [expected actual] (= expected actual)
             false (nil? (dom/single-node (xp/xpath "//p")))
             false (nil? (dom/single-node (dom/by-class "p1")))
             false (nil? (dom/single-node (dom/by-id "id1"))))))))

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
             nil (dom/by-id " "))))
    (testing "Standard Cases\n"
      (testing "(by-id id)"
        (are [expected actual] (= expected actual)
             false (nil? (dom/by-id "id1")))))))

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
             nil (dom/by-class "not existent class"))))
    (testing "Standard Cases\n"
      (testing "(by-class css-class)"
        (are [expected actual] (= expected actual)
             1 (count (dom/by-class "d1"))
             2 (count (dom/by-class "p1"))
             0 (count (dom/by-class "p2")))))))

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
             () (dom/children (dom/append! (dom/by-class "p1") #{})))))
    (testing "Standard Cases\n"
      (testing "(append! single-parent single-child)"
        (are [expected actual] (= expected actual)
             1 (count (dom/children (dom/append! (dom/by-id "id1")
                                                 "<span>text</span>")))))
      (testing "Standard Cases\n"
        (testing "(append! multiple-parent single-child)"
          (are [expected actual] (= expected actual)
               2 (count (dom/children (dom/append! (dom/by-class "p1")
                                                   "<span>text</span>")))))
        (testing "(append! multiple-parent multiple-children)"
          (are [expected actual] (= expected actual)
               6 (count (dom/children (dom/append! (dom/by-class "p1")
                                                   "<p>text</p><span>text</span>")))))))))

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
             '(nil) (dom/detach! "not existent parent"))))
    (testing "Standard Cases\n"
        (testing "(detach! content)"
          (are [expected actual] (= expected actual)
               2 (count (dom/detach! (dom/by-class "p1"))))))))

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
             () (dom/children "not existent parent"))))
    (testing "Standard Cases\n"
        (testing "(children content)"
          (are [expected actual] (= expected actual)
               3 (count (dom/children (xp/xpath "//div")))
               0 (count (dom/children (xp/xpath "//div/p"))))))))

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
             nil (dom/destroy! #{}))))
    (testing "Standard Cases\n"
        (testing "(destroy! single-node)"
          (are [expected actual] (= expected actual)
               0 (do (dom/append! (xp/xpath "//body") "<p class='appended1'>app1</p>")
                     (dom/destroy! (xp/xpath "//body/p[@class='appended1']"))
                     (count (dom/nodes (xp/xpath "//body/p[@class='appended1']"))))))
        (testing "(destroy! multiple-nodes)"
          (are [expected actual] (= expected actual)
               0 (do (dom/append! (xp/xpath "//body")
                              "<p class='appended2'>app1</p><p class='appended2'>app2</p>")
                     (dom/destroy! (xp/xpath "//body/p[@class='appended2']"))
                     (count (dom/nodes (xp/xpath "//body/p[@class='appended2']")))))))))

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
