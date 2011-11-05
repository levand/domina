(ns domina.test
  (:use [domina :only [nodes single-node xpath clone append]])
  (:require [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(js* "
  window.tryfn = function(f) {
    try {
      return f.call();
    } catch (e) {
      return e;
    }
  };")

(def tests (atom {}))

(defn add-test [name testfn expectation]
  (swap! tests assoc name [testfn expectation]))

(defn run-test [testfn]
  (js/tryfn testfn))

(defn run-tests []
  (into {} (map (fn [[name [testfn expectation]]]
                  [name [(run-test testfn) expectation]])
                @tests)))

(js/alert "Starting tests...")

(add-test "basic xpath selection"
          #(count (nodes (xpath "//p")))
          3)

(add-test "basic xpath selection (single node)"
          #(instance? js/Element (single-node (xpath "//p")))
          true)

(add-test "xpath selection with class specification"
          #(count (nodes (xpath "//div[@class='test1']")))
          1)

(add-test "advanced xpath"
          #(count (nodes (xpath "//p[following-sibling::p[@class='p3']]")))
          2)

(add-test "clone a single node"
          #(count (clone (single-node (xpath "//p"))))
          1)

(add-test "clone multiple nodes"
          #(count (clone (nodes (xpath "//p"))))
          3)

(add-test "append a single child to a single parent"
          #(do (append (xpath "//body") "<p class='appended1'>test</p>")
               (count (nodes (xpath "//body/p[@class='appended1']"))))
          1)


(doseq [[name [result expectation]] (run-tests)]
  (if (not (== result expectation))
    (js/alert (str "Test [" name "] failed. Expected [" expectation "], got [" result "]"))))