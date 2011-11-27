(ns domina.test
  (:use [domina :only [nodes single-node xpath id class children clone append
                       detach destroy destroy-children insert]])
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

(def tests (atom []))

(defn add-test [name testfn]
  (swap! tests conj [name testfn]))

(defn run-test [testfn]
  (js/tryfn testfn))

(defn run-tests []
  (map (fn [[name testfn]]
         [name (run-test testfn)])
       @tests))

(defn reset
  "resets the page"
  []
  (destroy (xpath "//body/*")))

(defn standard-fixture
  "Standard fixture html"
  []
  (append (xpath "//body")
          "<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>
<p id='id1' class='p3'>P3</p>"))

(add-test "basic xpath selection"
          #(do (reset)
               (standard-fixture)
               (assert (== 3 (count (nodes (xpath "//p")))))))

(add-test "basic xpath selection (single node)"
          #(do (reset)
               (standard-fixture)
               (assert (instance? js/Element (single-node (xpath "//p"))))))

(add-test "xpath selection with class specification"
          #(do (reset)
               (standard-fixture)
               (assert (== 1 (count (nodes (xpath "//div[@class='d1']")))))))

(add-test "a relative xpath expression"
          #(do (reset)
               (standard-fixture)
               (assert (== 3 (count (nodes (-> (xpath "//body/div[@class='d1']")
                                               (xpath "p"))))))))
(add-test "advanced xpath"
          #(do (reset)
               (standard-fixture)
               (assert (== 2 (count (nodes (xpath "//p[following-sibling::p[@class='p3']]")))))))

(add-test "look up node by id"
          #(do (reset)
               (standard-fixture)
               (assert (== 1 (count (nodes (id "id1")))))))

(add-test "look up nodes by class"
          #(do (reset)
               (standard-fixture)
               (assert (== 1 (count (nodes (class "p3")))))))

(add-test "child selection"
          #(do (reset)
               (standard-fixture)
               (assert (== 3 (count (children (xpath "//div[@class='d1']")))))))

(add-test "clone a single node"
          #(do (reset)
               (standard-fixture)
               (assert (== 1 (count (clone (single-node (xpath "//p"))))))))

(add-test "clone multiple nodes"
          #(do (reset)
               (standard-fixture)
               (assert (== 3 (count (clone (nodes (xpath "//p"))))))))


(add-test "append a single child to a single parent"
          #(do (reset)
               (append (xpath "//body") "<p class='appended1'>test</p>")
               (assert (== 1 (count (nodes (xpath "//body/p[@class='appended1']")))))))

(add-test "append multiple children to a single parent"
          #(do (reset)
               (append (xpath "//body")
                       "<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>")
               (assert (== 2 (count (nodes (xpath "//body/p[@class='appended2']")))))))

(add-test "append a single child to multiple parents"
          #(do (reset)
               (standard-fixture)
               (append (xpath "//body/div/p")
                       "<span>!!</span>")
               (assert (== 3 (count (nodes (xpath "//div/p/span")))))))

(add-test "append multiple children to multiple parents"
          #(do (reset)
               (standard-fixture)
               (append (xpath "//body/div/p")
                       "some <span class='foo'>more</span> text")
               (assert (== 3 (count (nodes (xpath "//div/p/span[@class='foo']")))))
               (assert (== 9 (count (nodes (xpath "//div/p/text()")))))))

(add-test "Insert a single child to a single parent"
          #(do (reset)
               (append (xpath "//body")
                       "<div class='testInserts'></div>")
               (append (xpath "//div[@class='testInserts']")
                       "<p class='i1'></p>")
               (append (xpath "//div[@class='testInserts']")
                       "<p class='i3'></p>")
               (insert (xpath "//div[@class='testInserts']")
                       "<p class='i2'></p>" 1)
               (assert (== 3 (count (nodes (xpath "//div[@class='testInserts']/p")))))
               (assert (== 1 (count (nodes (xpath "//p[@class='i2']/preceding-sibling::*")))))
               (assert (== 1 (count (nodes (xpath "//p[@class='i2']/following-sibling::*")))))))

(add-test "Insert a single child to multiple parents"
          #(do (reset)
               (append (xpath "//body")
                       "<div class='testInserts' id='testInsert1'></div>")
               (append (xpath "//body")
                       "<div class='testInserts' id='testInsert2'></div>")
               (append (xpath "//div[@class='testInserts']")
                       "<p class='i1'></p>")
               (append (xpath "//div[@class='testInserts']")
                       "<p class='i3'></p>")
               (insert (xpath "//div[@class='testInserts']")
                       "<p class='i2'></p>" 1)
               (doseq [children [(xpath "//div[@id='testInsert1']")
                                 (xpath "//div[@id='testInsert2']")]]
                 (assert (== 3 (count (nodes (xpath children "p")))))
                 (assert (== 1 (count (nodes (xpath children
                                                    "p[@class='i2']/preceding-sibling::*")))))
                 (assert (== 1 (count (nodes (xpath children
                                                    "p[@class='i2']/following-sibling::*"))))))))

(add-test "destroy a single node"
          #(do (reset)
               (append (xpath "//body") "<p class='appended1'>app1</p>")
               (assert (== 1 (count (nodes (xpath "//body/p[@class='appended1']")))))
               (destroy (xpath "//body/p[@class='appended1']"))
               (assert (== 0 (count (nodes (xpath "//body/p[@class='appended1']")))))))

(add-test "destroy multiple nodes"
          #(do (reset)
               (append (xpath "//body")
                       "<p class='appended2'>app1</p><p class='appended2'>app2</p>")
               (assert (== 2 (count (nodes (xpath "//body/p[@class='appended2']")))))
               (destroy (xpath "//body/p[@class='appended2']"))
               (assert (== 0 (count (nodes (xpath "//body/p[@class='appended2']")))))))

(add-test "detach and reattach a single node"
          #(do (reset)
               (standard-fixture)
               (let [n (detach (xpath "//p[@class='p3']"))]
                 (assert (== 0 (count (nodes (xpath "//p[@class='p3']")))))
                 (append (xpath "//div[@class='d1']") n)
                 (assert (== 1 (count (nodes (xpath "//p[@class='p3']"))))))))

(add-test "detach and reattach multiple nodes"
          #(do (reset)
               (standard-fixture)
               (let [n (detach (xpath "//div[@class='d1']/p"))]
                 (assert (== 0 (count (nodes (xpath "//div[@class='d1']/p")))))
                 (append (xpath "//div[@class='d1']") n)
                 (assert (== 3 (count (nodes (xpath "//div[@class='d1']/p"))))))))

(add-test "clear a node's contents"
          #(do (reset)
               (standard-fixture)
               (destroy-children (xpath "//div[@class='d1']"))
               (assert (== 1 (count (nodes (xpath "//div[@class='d1']")))))
               (assert (== 0 (count (nodes (xpath "//div[@class='d1']/*")))))))

(doseq [[name result] (run-tests)]
  (if (not (== result nil))
    (js/alert (str "Test \"" name "\" failed with error: [" result "]"))))

(js/alert "Tests completed.")

