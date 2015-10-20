(ns domina.css-standard-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are use-fixtures)]
                   [domina.macros :as dm]
                   [hiccups.core :as hm])
  (:require [cemerick.cljs.test :as t]
            [domina.core :as dom :refer (nodes append!)]
            [domina.css :as css :refer (sel)]
            [domina.fixtures :as fix :refer (base-fixture)]
            [hiccups.runtime :as hrt]))

(use-fixtures :each base-fixture)

;;; sel
(deftest  sel-test
  (testing "Unit Testing for (sel css-expr)\n"
    (testing "Standard Cases\n"
      (are [expected actual] (= expected actual)
           3 (count (nodes (sel "p")))
           1 (count (nodes (sel ".d1")))
           1 (count (nodes (sel "#id1")))
           3 (count (nodes (-> (sel ".d1")
                               (sel "p"))))
           3 (count (nodes (sel ".d1 > p")))
           2 (do (append! (sel "body")
                          (hm/html [:div
                                    [:p [:span "some text"]]
                                    [:p [:span "more text"]]]))
                 (count (nodes (-> (sel "body")
                                   (sel "div")
                                   (sel "p")
                                   (sel "span")))))))))
