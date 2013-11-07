(ns domina.xpath-standard-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm]
                   [hiccups.core :as hm])
  (:require [cemerick.cljs.test :as t]
            [domina :as dom :refer (nodes single-node append!)]
            [domina.xpath :as css :refer (xpath)]
            [domina.fixtures :as fix :refer (base-fixture)]
            [hiccups.runtime :as hrt]))

(use-fixtures :each base-fixture)

;;; xpath
(deftest  xpath-test
  (testing "Unit Testing for (xpath xpath-expr)\n"
    (testing "Standard Cases\n"
      (are [expected actual] (= expected actual)
           3 (count (nodes (xpath "//p")))
           false (nil? (single-node (xpath "//p")))
           1 (count (nodes (xpath "//div[@class='d1']")))
           3 (count (nodes (-> (xpath "//body/div[@class='d1']")
                               (xpath "p"))))
           2 (do
               (append! (xpath "//body")
                        (hm/html [:div
                                  [:p [:span "some text"]]
                                  [:p [:span "more text"]]]))
               (count (nodes (-> (xpath "//body")
                                 (xpath "./div")
                                 (xpath "./p")
                                 (xpath "./span")))))
           2 (count (nodes (xpath "//p[following-sibling::p[@class='p3']]")))))))
