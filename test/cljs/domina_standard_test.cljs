(ns domina-standard-test
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
    (testing "Standard Cases\n"
      (testing "(nodes content)"
        (are [expected actual] (= expected actual)
             1 (count (dom/nodes (xp/xpath "//body")))
             2 (count (dom/nodes (xp/xpath "//body/div")))
             1 (count (dom/nodes (xp/xpath "//div[@class='d1']"))))))))

;;; single-node
(deftest  single-node-test
  (testing "Unit Testing for (single-node node)\n"
    (testing "Standard Cases\n"
      (testing "(single-node node)"
        (are [expected actual] (= expected actual)
             false (nil? (dom/single-node (xp/xpath "//p")))
             false (nil? (dom/single-node (dom/by-class "p1")))
             false (nil? (dom/single-node (dom/by-id "id1"))))))))

;;; by-id
(deftest  by-id-test
  (testing "Unit Testing for (by-id id)\n"
    (testing "Standard Cases\n"
      (testing "(by-id id)"
        (are [expected actual] (= expected actual)
             false (nil? (dom/by-id "id1")))))))

;;; by-class
(deftest  by-class-test
  (testing "Unit Testing for (by-class css-class)\n"
    (testing "Standard Cases\n"
      (testing "(by-class css-class)"
        (are [expected actual] (= expected actual)
             1 (count (dom/by-class "d1"))
             2 (count (dom/by-class "p1"))
             0 (count (dom/by-class "p2")))))))

;;; append!
(deftest  append!-test
  (testing "Unit Testing for (append! parent-content child-content)\n"
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
    (testing "Standard Cases\n"
        (testing "(detach! content)"
          (are [expected actual] (= expected actual)
               2 (count (dom/detach! (dom/by-class "p1"))))))))

(deftest  children-test
  (testing "Unit Testing for (children content)\n"
    (testing "Standard Cases\n"
        (testing "(children content)"
          (are [expected actual] (= expected actual)
               5 (count (dom/children (xp/xpath "//div")))
               2 (count (dom/children (xp/xpath "//div/p"))))))))

(deftest  destroy!-test
  (testing "Unit Testing for (destroy! content)\n"
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

;;; style / attribute tests

(deftest  style-test
  (testing "Unit Testing for (style content name)\n"
    (testing "Standard Cases\n"
      (testing "(style content name)"
        (are [expected actual] (= expected actual)
             true false)))))

;;; value
(deftest  value-test
  (testing "Unit Testing for (value content)\n"
    (testing "Standard Cases\n"
      (testing "(value content)"
        (are [expected actual] (= expected actual)
             true false)))))
