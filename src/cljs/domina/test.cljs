(ns domina.test
  (:use [domina :only [nodes single-node xpath by-id by-class children clone append
                       detach destroy destroy-children insert insert-before
                       insert-after swap style attr set-style set-attr styles attrs]])
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

;;;;;; DOM Manipulation Tests

(add-test "basic xpath selection"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (nodes (xpath "//p")))))))

(add-test "basic xpath selection (single node)"
          #(do (reset)
               (standard-fixture)
               (assert (instance? js/Element (single-node (xpath "//p"))))))

(add-test "xpath selection with class specification"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (nodes (xpath "//div[@class='d1']")))))))

(add-test "a relative xpath expression"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (nodes (-> (xpath "//body/div[@class='d1']")
                                               (xpath "p"))))))))
(add-test "advanced xpath"
          #(do (reset)
               (standard-fixture)
               (assert (= 2 (count (nodes (xpath "//p[following-sibling::p[@class='p3']]")))))))

(add-test "look up node by id"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (nodes (by-id "id1")))))))

(add-test "look up nodes by class"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (nodes (by-class "p3")))))))

(add-test "child selection"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (children (xpath "//div[@class='d1']")))))))

(add-test "clone a single node"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (clone (single-node (xpath "//p"))))))))

(add-test "clone multiple nodes"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (clone (nodes (xpath "//p"))))))))


(add-test "append a single child to a single parent"
          #(do (reset)
               (append (xpath "//body") "<p class='appended1'>test</p>")
               (assert (= 1 (count (nodes (xpath "//body/p[@class='appended1']")))))))

(add-test "append multiple children to a single parent"
          #(do (reset)
               (append (xpath "//body")
                       "<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>")
               (assert (= 2 (count (nodes (xpath "//body/p[@class='appended2']")))))))

(add-test "append a single child to multiple parents"
          #(do (reset)
               (standard-fixture)
               (append (xpath "//body/div/p")
                       "<span>!!</span>")
               (assert (= 3 (count (nodes (xpath "//div/p/span")))))))

(add-test "append multiple children to multiple parents"
          #(do (reset)
               (standard-fixture)
               (append (xpath "//body/div/p")
                       "some <span class='foo'>more</span> text")
               (assert (= 3 (count (nodes (xpath "//div/p/span[@class='foo']")))))
               (assert (= 9 (count (nodes (xpath "//div/p/text()")))))))

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
               (assert (= 3 (count (nodes (xpath "//div[@class='testInserts']/p")))))
               (assert (= 1 (count (nodes (xpath "//p[@class='i2']/preceding-sibling::*")))))
               (assert (= 1 (count (nodes (xpath "//p[@class='i2']/following-sibling::*")))))))

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
                 (assert (= 3 (count (nodes (xpath children "p")))))
                 (assert (= 1 (count (nodes (xpath children
                                                    "p[@class='i2']/preceding-sibling::*")))))
                 (assert (= 1 (count (nodes (xpath children
                                                    "p[@class='i2']/following-sibling::*"))))))))

(add-test "destroy a single node"
          #(do (reset)
               (append (xpath "//body") "<p class='appended1'>app1</p>")
               (assert (= 1 (count (nodes (xpath "//body/p[@class='appended1']")))))
               (destroy (xpath "//body/p[@class='appended1']"))
               (assert (= 0 (count (nodes (xpath "//body/p[@class='appended1']")))))))

(add-test "destroy multiple nodes"
          #(do (reset)
               (append (xpath "//body")
                       "<p class='appended2'>app1</p><p class='appended2'>app2</p>")
               (assert (= 2 (count (nodes (xpath "//body/p[@class='appended2']")))))
               (destroy (xpath "//body/p[@class='appended2']"))
               (assert (= 0 (count (nodes (xpath "//body/p[@class='appended2']")))))))

(add-test "detach and reattach a single node"
          #(do (reset)
               (standard-fixture)
               (let [n (detach (xpath "//p[@class='p3']"))]
                 (assert (= 0 (count (nodes (xpath "//p[@class='p3']")))))
                 (append (xpath "//div[@class='d1']") n)
                 (assert (= 1 (count (nodes (xpath "//p[@class='p3']"))))))))

(add-test "detach and reattach multiple nodes"
          #(do (reset)
               (standard-fixture)
               (let [n (detach (xpath "//div[@class='d1']/p"))]
                 (assert (= 0 (count (nodes (xpath "//div[@class='d1']/p")))))
                 (append (xpath "//div[@class='d1']") n)
                 (assert (= 3 (count (nodes (xpath "//div[@class='d1']/p"))))))))

(add-test "clear a node's contents"
          #(do (reset)
               (standard-fixture)
               (destroy-children (xpath "//div[@class='d1']"))
               (assert (= 1 (count (nodes (xpath "//div[@class='d1']")))))
               (assert (= 0 (count (nodes (xpath "//div[@class='d1']/*")))))))

(add-test "insert-before with a single reference and single new node"
          #(do (reset)
               (append (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-before (nodes (by-id "ref")) "<p>before</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before']")))))))

(add-test "insert-before with a single reference and multiple new nodes"
          #(do (reset)
               (append (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-before (nodes (by-id "ref")) "<p>before1</p><p>before2</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]")))))))

(add-test "insert-before with multiple reference nodes and a single new node"
          #(do (reset)
               (append (xpath "//body") "<div class='ref' id='ref1'>content1</div>")
               (append (xpath "//body") "<div class='ref' id='ref2'>content2</div>")
               (insert-before (nodes (by-class "ref")) "<p>before</p>")
               (assert (= 2 (count (nodes (xpath "//p")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref1']/preceding-sibling::p")))))
               (assert (= 2 (count (nodes (xpath "//div[@id='ref2']/preceding-sibling::p")))))))


(add-test "insert-after with a single reference and single new node"
          #(do (reset)
               (append (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-after (nodes (by-id "ref")) "<p>after</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/following-sibling::*[text()='after']")))))))

(add-test "insert-after with a single reference and multiple new nodes"
          #(do (reset)
               (append (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-after (nodes (by-id "ref")) "<p>after1</p><p>after2</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]")))))))

(add-test "insert-after with multiple reference nodes and a single new node"
          #(do (reset)
               (append (xpath "//body") "<div class='ref' id='ref1'>content1</div>")
               (append (xpath "//body") "<div class='ref' id='ref2'>content2</div>")
               (insert-after (nodes (by-class "ref")) "<p>after</p>")
               (assert (= 2 (count (nodes (xpath "//p")))))
               (assert (= 2 (count (nodes (xpath "//div[@id='ref1']/following-sibling::p")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref2']/following-sibling::p")))))))

(add-test "swap with a single reference node and a single new node"
          #(do (reset)
               (append (xpath "//body") "<div><p id='before'>TYPO</p></div>")
               (swap (xpath "//p[@id='before']") "<p id='after'>fixed</p>")
               (assert (= 0 (count (nodes (xpath "//p[@id='before']")))))
               (assert (= 1 (count (nodes (xpath "//p[@id='after']")))))))

(add-test "swap with a single reference node and multiple new nodes"
          #(do (reset)
               (append (xpath "//body") "<div><p id='before'>TYPO</p></div>")
               (swap (xpath "//p[@id='before']") "<p class='after'>fixed1</p><p class='after'>fixed2</p>")
               (assert (= 0 (count (nodes (xpath "//p[@id='before']")))))
               (assert (= 2 (count (nodes (xpath "//p[@class='after']")))))))

(add-test "swap with multiple reference nodes and multiple new nodes"
          #(do (reset)
               (append (xpath "//body") "<div><p class='before'>TYPO-1</p></div>")
               (append (xpath "//body") "<div><p class='before'>TYPO-2</p></div>")
               (swap (xpath "//p[@class='before']") "<p class='after'>fixed1</p><p class='after'>fixed2</p>")
               (assert (= 0 (count (nodes (xpath "//p[@class='before']")))))
               (assert (= 4 (count (nodes (xpath "//p[@class='after']")))))))

;;;;;; Style / Attribute tests

(add-test "can retrieve a css property value"
            #(do (reset)
                 (append (xpath "//body") "<div style=\"background-color: maroon;\">Test</div>")
                 (assert (= "maroon" (style (xpath "//div") "background-color")))
                 (assert (= "maroon" (style (xpath "//div") :background-color)))
                 (assert (nil? (style (xpath "//div") :no-such-style)))))

(add-test "can retrieve an HTML attribute value"
            #(do (reset)
                 (append (xpath "//body") "<div height=\"42\">Content!</div>")
                 (assert (= "42" (attr (xpath "//div") "height")))
                 (assert (= "42" (attr (xpath "//div") :height)))
                 (assert (nil? (attr (xpath "//div") :no-such-attr:c)))))

(add-test "can set a css property on a single node"
          #(do (reset)
               (append (xpath "//body") "<div>1</div><div>2</div>")
               (set-style (xpath "//div[1]") "background-color" "red")
               (set-style (xpath "//div[2]") :background-color "green")
               (assert (= "red" (style (xpath "//div[1]") "background-color")))
               (assert (= "green" (style (xpath "//div[2]") "background-color")))))

(add-test "can set a css property on multiple nodes"
          #(do (reset)
               (append (xpath "//body") "<div>1</div><div>2</div>")
               (set-style (xpath "//div") "color" "red")
               (assert (= "red" (style (xpath "//div[1]") "color")))
               (assert (= "red" (style (xpath "//div[2]") "color")))))

(add-test "can set a html attribute on a single node"
          #(do (reset)
               (append (xpath "//body") "<div>1</div><div>2</div>")
               (set-attr (xpath "//div[1]") "width" 42)
               (set-attr (xpath "//div[2]") :width 42)
               (assert (= "42" (attr (xpath "//div[1]") "width")))
               (assert (= "42" (attr (xpath "//div[2]") "width")))))

(add-test "can set a html attribute on a single node"
          #(do (reset)
               (append (xpath "//body") "<div>1</div><div>2</div>")
               (set-attr (xpath "//div") "width" 42)
               (assert (= "42" (attr (xpath "//div[1]") "width")))
               (assert (= "42" (attr (xpath "//div[2]") "width")))))

(add-test "can get multiple CSS styles from a single node."
          #(do (reset)
               (append (xpath "//body") "<div>1</div>")
               (set-style (xpath "//div") "color" "red")
               (set-style (xpath "//div") "background-color" "black")
               (assert (= {:color "red" :background-color "black"}
                          (styles (xpath "//div"))))))

(add-test "can get multiple HTML attributes from a single node."
          #(do (reset)
               (append (xpath "//body") "<div>1</div>")
               (set-attr (xpath "//div") "width" 42)
               (set-attr (xpath "//div") "height" 24)
               (assert (= {:width "42" :height "24"}
                          (attrs (xpath "//div"))))))

(doseq [[name result] (run-tests)]
  (if (not (= result nil))
    (js/alert (str "Test \"" name "\" failed with error: [" result "]"))))

(js/alert "Tests completed.")

