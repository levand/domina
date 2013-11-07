(ns domina-standard-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm]
                   [hiccups.core :as hm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom :refer (nodes
                                    single-node
                                    by-id
                                    by-class
                                    append!
                                    clone
                                    detach!
                                    destroy!
                                    destroy-children!
                                    children
                                    insert-before!
                                    prepend!
                                    text)]
            [domina.fixtures :as fix :refer (base-fixture)]
            [domina.xpath :as xp :refer (xpath)]
            [hiccups.runtime :as hrt]))

(use-fixtures :each base-fixture)

;;; nodes
(deftest  nodes-test
  (testing "Unit Testing for (nodes content)\n"
    (testing "Standard Cases\n"
      (testing "(nodes content)"
        (are [expected actual] (= expected actual)
             1 (count (nodes (xpath "//body")))
             1 (count (nodes (xpath "//body/div")))
             1 (count (nodes (xpath "//div[@class='d1']"))))))))

;;; single-node
(deftest  single-node-test
  (testing "Unit Testing for (single-node node)\n"
    (testing "Standard Cases\n"
      (testing "(single-node node)"
        (are [expected actual] (= expected actual)
             false (nil? (single-node (xpath "//p")))
             false (nil? (single-node (by-class "p1")))
             false (nil? (single-node (by-id "id1"))))))))

;;; by-id
(deftest  by-id-test
  (testing "Unit Testing for (by-id id)\n"
    (testing "Standard Cases\n"
      (testing "(by-id id)"
        (are [expected actual] (= expected actual)
             false (nil? (by-id "id1")))))))

;;; by-class
(deftest  by-class-test
  (testing "Unit Testing for (by-class css-class)\n"
    (testing "Standard Cases\n"
      (testing "(by-class css-class)"
        (are [expected actual] (= expected actual)
             1 (count (by-class "p3"))
             2 (do
                 (append! (xpath "//body")
                          (hm/html [:p.tc "test1"]
                                   [:p.tc "test2"]))
                 (count (nodes (by-class "tc")))))))))

;;; append!
(deftest  append!-test
  (testing "Unit Testing for (append! parent-content child-content)\n"
    (testing "Standard Cases\n"
      (testing "(append! single-parent single-child)"
        (are [expected actual] (= expected actual)
             1 (do
                 (children (append! (xpath "//body")
                                    (hm/html [:p.appended1 "test"])))
                 (count (nodes (xpath "//body/p[@class='appended1']"))))))
      (testing "Standard Cases\n"
        (testing "(append! single-parent children)"
          (are [expected actual] (= expected actual)
               2 (do
                   (append! (xpath "//body")
                            (hm/html [:p.appended2 "test2-1"]
                                     [:p.appended2 "test2-2"]))
                   (count (nodes (xpath "//body/p[@class='appended2']"))))))
        (testing "(append! multiple-parent single-child)"
          (are [expected actual] (= expected actual)
               3 (do
                   (append! (xpath "//body/div/p")
                            (hm/html [:span "!!"]))
                   (count (nodes (xpath "//div/p/span"))))))
        (testing "(append! multiple-parent children)"
          (are [expected actual] (= expected actual)
               3 (do
                   (append! (xpath "//body/div/p")
                            (hm/html ["some " [:span.foo "more"] "text"]))
                   (count (nodes (xpath "//div/p/span[@class='foo']"))))))))))

;;; detach!
(deftest  detach!-test
  (testing "Unit Testing for (detach! content)\n"
    (testing "Standard Cases\n"
        (testing "(detach! single-node)"
          (are [expected actual] (= expected actual)
               0 (do
                   (detach! (xpath "//p[@class='p3']"))
                   (count (nodes (xpath "//p[@class='p3']"))))))
        (testing "(detach! multiple-nodes)"
          (are [expected actual] (= expected actual)
               0 (do
                   (detach! (xpath "//div[@class='d1']/p"))
                   (count (nodes (xpath "//div[@class='d1']/p"))))
               0 (do
                   (detach! (children "//div[@class='d1']"))
                   (count (children "//div[@class='d1']"))))))))

;;; children
(deftest  children-test
  (testing "Unit Testing for (children content)\n"
    (testing "Standard Cases\n"
        (testing "(children content)"
          (are [expected actual] (= expected actual)
               3 (count (children (xpath "//div[@class='d1']"))))))))

;;; clone
(deftest  clone-test
  (testing "Unit Testing for (clone single-node)\n"
    (testing "Standard Cases\n"
        (testing "(clone single-node)"
          (are [expected actual] (= expected actual)
               1 (count (clone (single-node (xpath "//p"))))))
        (testing "(clone multiple-nodes)"
          (are [expected actual] (= expected actual)
               3 (count (clone (nodes (xpath "//p")))))))))

;;; destroy!
(deftest  destroy!-test
  (testing "Unit Testing for (destroy! content)\n"
    (testing "Standard Cases\n"
        (testing "(destroy! single-node)"
          (are [expected actual] (= expected actual)
               0 (do (append! (xpath "//body")
                              (hm/html [:p.appended1 "app1"]))
                     (destroy! (xpath "//body/p[@class='appended1']"))
                     (count (nodes (xpath "//body/p[@class='appended1']"))))))
        (testing "(destroy! multiple-nodes)"
          (are [expected actual] (= expected actual)
               0 (do (append! (xpath "//body")
                              (hm/html [:p.appended2 "app1"]
                                       [:p.appended2 "app2"]))
                     (destroy! (xpath "//body/p[@class='appended2']"))
                     (count (nodes (xpath "//body/p[@class='appended2']")))))))))

;;; destroy-children!
(deftest  destroy-children!-test
  (testing "Unit Testing for (destroy-children! content)\n"
    (testing "Standard Cases\n"
        (testing "(destroy-children! single-node)"
          (are [expected actual] (= expected actual)
               0 (do
                   (destroy-children! (xpath "//div[@class='d1']"))
                   (count (nodes (xpath "//div[@class='d1']/*")))))))))

;;; insert-before!
(deftest  insert_before!-test
  (testing "Unit Testing for (insert-before! ref-nodes new-nodes)\n"
    (testing "Standard Cases\n"
        (testing "(insert-before! single-ref-node single-node)"
          (are [expected actual] (= expected actual)
               1 (do
                   (append! (xpath "//body")
                            (hm/html [:div#ref "Some Content"]))
                   (insert-before! (nodes (by-id "ref")) "<p>before</p>")
                   (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before']"))))))
        (testing "(insert-before! single-ref-node multiple-nodes)"
          (are [expected actual] (= expected actual)
               2 (do (append! (xpath "//body")
                              (hm/html [:div#ref "some content"]))
                     (insert-before! (nodes (by-id "ref"))
                                     (hm/html [:p "before1"]
                                              [:p "before2"]))
                     (+ (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]")))
                        (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]"))))))))))

;;; insert-before!
(deftest  insert_before!!-test
  (testing "Unit Testing for (insert-before! ref-nodes new-nodes)\n"
    (testing "Standard Cases\n"
      (testing "(insert-before! multiple-ref-nodes single-node)"
          (are [expected actual] (= expected actual)
               5 (do
                   (append! (xpath "//body") (hm/html [:div#ref1.ref "content1"]))
                   (append! (xpath "//body") (hm/html [:div#ref2.ref "content2"]))
                   (insert-before! (nodes (by-class "ref")) (hm/html [:p "before"]))
                   (+ (count (nodes (xpath "//div[@class='ref']")))
                      (count (nodes (xpath "//div[@id='ref1']/preceding-sibling::p")))
                      (count (nodes (xpath "//div[@id='ref2']/preceding-sibling::p"))))))))))

;;; prepend!
(deftest  prepend!-test
  (testing "Unit Testing for (prepend! parents children)\n"
    (testing "Standard Cases\n"
      (testing "(prepend! single-parent single-child)"
          (are [expected actual] (= expected actual)
               1 (do
                   (append! (xpath "//body") (hm/html [:div "2"] [:div "3"]))
                   (prepend! (xpath "//body") (hm/html [:div "1"]))
                   (count (+ (text (xpath "//body/div[1]"))
                             #_(text (xpath "//body/div[2]"))
                             #_(text (xpath "//body/div[3]"))))))))))
