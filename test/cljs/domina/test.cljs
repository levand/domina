(ns domina.test
  (:use [domina :only [nodes single-node by-id by-class children
                       common-ancestor ancestor? clone append!
                       prepend! detach!  destroy!  destroy-children!
                       insert!  insert-before!  insert-after!
                       swap-content!  style attr set-style! set-attr!
                       styles attrs remove-attr!  set-styles!
                       set-attrs! has-class?  add-class! toggle-class!
                       remove-class!  classes set-classes!  text
                       set-text! value set-value! html set-html!
                       set-data! get-data log-debug log]]
        [domina.xpath :only [xpath]]
        [domina.css :only [sel]]
        [domina.events :only [listen! capture! listen-once! capture-once!
                              unlisten! dispatch-event! dispatch! unlisten-by-key!
                              get-listeners prevent-default stop-propagation
                              target current-target event-type raw-event]])
  (:require [goog.events :as events]
            ; [clojure.browser.repl :as repl]
            ))

;(repl/connect "http://localhost:9000/repl")

(js* "
  window['tryfn'] = function(f) {
    try {
      return f.call();
    } catch (e) {
      if(e == \"fail hard\") {
          throw e;
      } else {
          return e;
      }
    }
  };")

(def tests (atom []))

(defn add-test [name testfn]
  (swap! tests conj [name testfn]))

(defn run-test [testfn]
  (js/tryfn testfn))

(defn run-named [n]
  (map (fn [[name testfn]]
         [name (run-test testfn)])
       (filter (fn [[name _]] (= name n))
               @tests)))

(defn run-tests []
  (map (fn [[name testfn]]
         [name (run-test testfn)])
       @tests))

(defn reset
  "resets the page"
  []
  (destroy! (xpath "//body/*"))
  (unlisten! (xpath "//*")))

(defn standard-fixture
  "Standard fixture html"
  []
  (append! (xpath "//body")
           "<div class='d1'><p class='p1'>P1</p><p class='p2'>P2</p>
<p id='id1' class='p3'>P3</p>"))


;;;;;; CSS selection tests

(add-test "basic CSS selection"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (nodes (sel "p")))))))

(add-test "basic CSS selection (single node)"
          #(do (reset)
               (standard-fixture)
               (assert (not (nil? (single-node (sel "p")))))))

(add-test "CSS selection with class specification"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (nodes (sel ".d1")))))))

(add-test "a relative CSS selector"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (nodes (-> (sel ".d1")
                                              (sel "p"))))))))

(add-test "extended CSS chaining"
          #(do (reset)
               (append! (sel "body")
                        "<div><p><span>some text</span></p><p><span>more text</span></p></div>")
               (assert (= 2 (count (nodes (-> (sel "body")
                                              (sel "div")
                                              (sel "p")
                                              (sel "span"))))))))

;;;;;; DOM Manipulation Tests

(add-test "basic xpath selection"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (nodes (xpath "//p")))))))

(add-test "basic xpath selection (single node)"
          #(do (reset)
               (standard-fixture)
               (assert (not (nil? (single-node (xpath "//p")))))))

(add-test "xpath selection with class specification"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (nodes (xpath "//div[@class='d1']")))))))

(add-test "a relative xpath expression"
          #(do (reset)
               (standard-fixture)
               (assert (= 3 (count (nodes (-> (xpath "//body/div[@class='d1']")
                                              (xpath "p"))))))))

(add-test "extended selection chaining"
          #(do (reset)
               (append! (xpath "//body")
                        "<div><p><span>some text</span></p><p><span>more text</span></p></div>")
               (assert (= 2 (count (nodes (-> (xpath "//body")
                                              (xpath "./div")
                                              (xpath "./p")
                                              (xpath "./span"))))))))
(add-test "advanced xpath"
          #(do (reset)
               (standard-fixture)
               (assert (= 2 (count (nodes (xpath "//p[following-sibling::p[@class='p3']]")))))))

(add-test "look up node by id"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (nodes (by-id "id1")))))))

(add-test "look up node by id with context"
          #(do (reset)
               (append! (sel "body")
                        "<div><p><span>some text</span></p><p><span>more text</span></p></div>")
               (assert (= 2 (count (nodes (-> (sel "body")
                                              (sel "div")
                                              (sel "p")
                                              (sel "span"))))))))

(add-test "look up nodes by class"
          #(do (reset)
               (standard-fixture)
               (assert (= 1 (count (nodes (by-class "p3")))))))

(add-test "look up multiple nodes by class"
          #(do (reset)
               (append! (xpath "//body") "<p class='tc'>test1</p><p class='tc'>test2</p>")
               (assert (= 2 (count (nodes (by-class "tc")))))))

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
               (append! (xpath "//body") "<p class='appended1'>test</p>")
               (assert (= 1 (count (nodes (xpath "//body/p[@class='appended1']")))))))

(add-test "append multiple children to a single parent"
          #(do (reset)
               (append! (xpath "//body")
                        "<p class='appended2'>test2-1</p><p class='appended2'>test2-2</p>")
               (assert (= 2 (count (nodes (xpath "//body/p[@class='appended2']")))))))

(add-test "append a single child to multiple parents"
          #(do (reset)
               (standard-fixture)
               (append! (xpath "//body/div/p")
                        "<span>!!</span>")
               (assert (= 3 (count (nodes (xpath "//div/p/span")))))))

(add-test "append multiple children to multiple parents"
          #(do (reset)
               (standard-fixture)
               (append! (xpath "//body/div/p")
                        "some <span class='foo'>more</span> text")
               (assert (= 3 (count (nodes (xpath "//div/p/span[@class='foo']")))))))

(add-test "prepend a single child to a single parent"
          #(do (reset)
               (append! (xpath "//body") "<div>2</div><div>3</div>")
               (prepend! (xpath "//body") "<div>1</div>")
               (assert (= "1" (text (xpath "//body/div[1]"))))
               (assert (= "2" (text (xpath "//body/div[2]"))))
               (assert (= "3" (text (xpath "//body/div[3]"))))))

(add-test "prepend a single child to multiple parents"
          #(do (reset)
               (append! (xpath "//body") "<div><p>2</p></div><div><p>2</p></div>")
               (prepend! (xpath "//body/div") "<p>1</p>")
               (assert (= 2 (count (nodes (xpath "//body/div/p[text()='2']")))))))

(add-test "Insert a single child to a single parent"
          #(do (reset)
               (append! (xpath "//body")
                        "<div class='testInserts'></div>")
               (append! (xpath "//div[@class='testInserts']")
                        "<p class='i1'></p>")
               (append! (xpath "//div[@class='testInserts']")
                        "<p class='i3'></p>")
               (insert! (xpath "//div[@class='testInserts']")
                        "<p class='i2'></p>" 1)
               (assert (= 3 (count (nodes (xpath "//div[@class='testInserts']/p")))))
               (assert (= 1 (count (nodes (xpath "//p[@class='i2']/preceding-sibling::*")))))
               (assert (= 1 (count (nodes (xpath "//p[@class='i2']/following-sibling::*")))))))

(add-test "Insert a single child to multiple parents"
          #(do (reset)
               (append! (xpath "//body")
                        "<div class='testInserts' id='testInsert1'></div>")
               (append! (xpath "//body")
                        "<div class='testInserts' id='testInsert2'></div>")
               (append! (xpath "//div[@class='testInserts']")
                        "<p class='i1'></p>")
               (append! (xpath "//div[@class='testInserts']")
                        "<p class='i3'></p>")
               (insert! (xpath "//div[@class='testInserts']")
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
               (append! (xpath "//body") "<p class='appended1'>app1</p>")
               (assert (= 1 (count (nodes (xpath "//body/p[@class='appended1']")))))
               (destroy! (xpath "//body/p[@class='appended1']"))
               (assert (= 0 (count (nodes (xpath "//body/p[@class='appended1']")))))))

(add-test "destroy multiple nodes"
          #(do (reset)
               (append! (xpath "//body")
                        "<p class='appended2'>app1</p><p class='appended2'>app2</p>")
               (assert (= 2 (count (nodes (xpath "//body/p[@class='appended2']")))))
               (destroy! (xpath "//body/p[@class='appended2']"))
               (assert (= 0 (count (nodes (xpath "//body/p[@class='appended2']")))))))

(add-test "detach and reattach a single node"
          #(do (reset)
               (standard-fixture)
               (let [n (detach! (xpath "//p[@class='p3']"))]
                 (assert (= 0 (count (nodes (xpath "//p[@class='p3']")))))
                 (append! (xpath "//div[@class='d1']") n)
                 (assert (= 1 (count (nodes (xpath "//p[@class='p3']"))))))))

(add-test "detach and reattach multiple nodes"
          #(do (reset)
               (standard-fixture)
               (let [n (detach! (xpath "//div[@class='d1']/p"))]
                 (assert (= 0 (count (nodes (xpath "//div[@class='d1']/p")))))
                 (append! (xpath "//div[@class='d1']") n)
                 (assert (= 3 (count (nodes (xpath "//div[@class='d1']/p"))))))))

(add-test "detach child nodes"
          #(do (reset)
               (standard-fixture)
               (let [parent (xpath "//div[@class='d1']")
                     detached-children (detach! (children parent))]
                 (assert (= 0 (count (nodes (xpath "//div[@class='d1']/p")))))
                 (assert (= 3 (count detached-children))))))

(add-test "clear a node's contents"
          #(do (reset)
               (standard-fixture)
               (destroy-children! (xpath "//div[@class='d1']"))
               (assert (= 1 (count (nodes (xpath "//div[@class='d1']")))))
               (assert (= 0 (count (nodes (xpath "//div[@class='d1']/*")))))))

(add-test "insert-before! with a single reference and single new node"
          #(do (reset)
               (append! (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-before! (nodes (by-id "ref")) "<p>before</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before']")))))))

(add-test "insert-before! with a single reference and multiple new nodes"
          #(do (reset)
               (append! (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-before! (nodes (by-id "ref")) "<p>before1</p><p>before2</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before2' and position()=1]")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/preceding-sibling::*[text()='before1' and position()=2]")))))))

(add-test "insert-before! with multiple reference nodes and a single new node"
          #(do (reset)
               (append! (xpath "//body") "<div class='ref' id='ref1'>content1</div>")
               (append! (xpath "//body") "<div class='ref' id='ref2'>content2</div>")
               (insert-before! (nodes (by-class "ref")) "<p>before</p>")
               (assert (= 2 (count (nodes (xpath "//p")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref1']/preceding-sibling::p")))))
               (assert (= 2 (count (nodes (xpath "//div[@id='ref2']/preceding-sibling::p")))))))

(add-test "insert-after! with a single reference and single new node"
          #(do (reset)
               (append! (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-after! (nodes (by-id "ref")) "<p>after</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/following-sibling::*[text()='after']")))))))

(add-test "insert-after! with a single reference and multiple new nodes"
          #(do (reset)
               (append! (xpath "//body") "<div id='ref'>Some content</div>")
               (insert-after! (nodes (by-id "ref")) "<p>after1</p><p>after2</p>")
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/following-sibling::*[text()='after1' and position()=1]")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref']/following-sibling::*[text()='after2' and position()=2]")))))))

(add-test "insert-after! with multiple reference nodes and a single new node"
          #(do (reset)
               (append! (xpath "//body") "<div class='ref' id='ref1'>content1</div>")
               (append! (xpath "//body") "<div class='ref' id='ref2'>content2</div>")
               (insert-after! (nodes (by-class "ref")) "<p>after</p>")
               (assert (= 2 (count (nodes (xpath "//p")))))
               (assert (= 2 (count (nodes (xpath "//div[@id='ref1']/following-sibling::p")))))
               (assert (= 1 (count (nodes (xpath "//div[@id='ref2']/following-sibling::p")))))))

(add-test "swap-content! with a single reference node and a single new node"
          #(do (reset)
               (append! (xpath "//body") "<div><p id='before'>TYPO</p></div>")
               (swap-content! (xpath "//p[@id='before']") "<p id='after'>fixed</p>")
               (assert (= 0 (count (nodes (xpath "//p[@id='before']")))))
               (assert (= 1 (count (nodes (xpath "//p[@id='after']")))))))

(add-test "swap-content! with a single reference node and multiple new nodes"
          #(do (reset)
               (append! (xpath "//body") "<div><p id='before'>TYPO</p></div>")
               (swap-content! (xpath "//p[@id='before']") "<p class='after'>fixed1</p><p class='after'>fixed2</p>")
               (assert (= 0 (count (nodes (xpath "//p[@id='before']")))))
               (assert (= 2 (count (nodes (xpath "//p[@class='after']")))))))

(add-test "swap-content! with multiple reference nodes and multiple new nodes"
          #(do (reset)
               (append! (xpath "//body") "<div><p class='before'>TYPO-1</p></div>")
               (append! (xpath "//body") "<div><p class='before'>TYPO-2</p></div>")
               (swap-content! (xpath "//p[@class='before']") "<p class='after'>fixed1</p><p class='after'>fixed2</p>")
               (assert (= 0 (count (nodes (xpath "//p[@class='before']")))))
               (assert (= 4 (count (nodes (xpath "//p[@class='after']")))))))

;;;;;; Style / Attribute tests

(add-test "can retrieve a css property value"
          #(do (reset)
               (append! (xpath "//body") "<div style=\"background-color: maroon;\">Test</div>")
               (assert (= "maroon" (style (xpath "//div") "background-color")))
               (assert (= "maroon" (style (xpath "//div") :background-color)))
               (assert (nil? (style (xpath "//div") :no-such-style)))))

(add-test "can retrieve an HTML attribute value"
          #(do (reset)
               (append! (xpath "//body") "<div height=\"42\">Content!</div>")
               (assert (= "42" (attr (xpath "//div") "height")))
               (assert (= "42" (attr (xpath "//div") :height)))
               (assert (nil? (attr (xpath "//div") :no-such-attr:c)))))

(add-test "can set a css property on a single node"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (set-style! (xpath "//div[1]") "background-color" "red")
               (set-style! (xpath "//div[2]") :background-color "green")
               (assert (= "red" (style (xpath "//div[1]") "background-color")))
               (assert (= "green" (style (xpath "//div[2]") "background-color")))))

(add-test "can set a css property on multiple nodes"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (set-style! (xpath "//div") "color" "red")
               (assert (= "red" (style (xpath "//div[1]") "color")))
               (assert (= "red" (style (xpath "//div[2]") "color")))))

(add-test "can set a html attribute on a single node"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (set-attr! (xpath "//div[1]") "width" 42)
               (set-attr! (xpath "//div[2]") :width 42)
               (assert (= "42" (attr (xpath "//div[1]") "width")))
               (assert (= "42" (attr (xpath "//div[2]") "width")))))

(add-test "can remove an html attribute from a single node"
          #(do (reset)
               (append! (xpath "//body") "<div width='42'>1</div><div width='42'>2</div>")
               (remove-attr! (xpath "//div[1]") "width")
               (remove-attr! (xpath "//div[2]") :width)
               (assert (nil? (attr (xpath "//div[1]") "width")))
               (assert (nil? (attr (xpath "//div[2]") "width")))))

(add-test "can remove an html attribute from multiple nodes"
          #(do (reset)
               (append! (xpath "//body") "<div width='42'>1</div><div width='42'>2</div>")
               (remove-attr! (xpath "//div") "width")
               (assert (nil? (attr (xpath "//div[1]") "width")))
               (assert (nil? (attr (xpath "//div[2]") "width")))))

(add-test "can get multiple CSS styles from a single node."
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (set-style! (xpath "//div") "color" "red")
               (set-style! (xpath "//div") "background-color" "black")
               (assert (= {:color "red" :background-color "black"}
                          (styles (xpath "//div"))))))

(add-test "can get blank CSS styles from a single node."
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (assert (= {}
                          (styles (xpath "//div"))))))

(add-test "can get CSS styles with ':' in property from a single node."
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (set-style! (xpath "//div") "background-image" "url(http://www.some-site.com:8088/image.jpg)")
               (set-style! (xpath "//div") "background-color" "black")
               (assert (= {:background-image "url(http://www.some-site.com:8088/image.jpg)" :background-color "black"}
                          (styles (xpath "//div"))))))

(add-test "can get multiple HTML attributes from a single node."
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (set-attr! (xpath "//div") "width" 42)
               (set-attr! (xpath "//div") "height" 24)
               (let [attributes (attrs (xpath "//div"))]
                 (assert (= "42" (:width attributes)))
                 (assert (= "24" (:height attributes))))))

(add-test "can set multiple CSS styles on a single node"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (set-styles! (xpath "//div") {:color "red"
                                             :background-color "black"})
               (assert (= "black" (style (xpath "//div") "background-color")))
               (assert (= "red" (style (xpath "//div") "color")))))

(add-test "can set multiple CSS styles on multiple nodes"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (set-styles! (xpath "//div") {:color "red"
                                             :background-color "black"})
               (assert (= "black" (style (xpath "//div[1]") "background-color")))
               (assert (= "red" (style (xpath "//div[1]") "color")))
               (assert (= "black" (style (xpath "//div[2]") "background-color")))
               (assert (= "red" (style (xpath "//div[2]") "color")))))

(add-test "can set multiple HTML attributes on a single node"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (set-attrs! (xpath "//div") {:width 42
                                            :height 24})
               (assert (= "42" (attr (xpath "//div") "width")))
               (assert (= "24" (attr (xpath "//div") "height")))))

(add-test "can set multiple CSS styles on multiple nodes"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (set-attrs! (xpath "//div") {:width 42
                                            :height 24})
               (assert (= "42" (attr (xpath "//div[1]") "width")))
               (assert (= "24" (attr (xpath "//div[1]") "height")))
               (assert (= "42" (attr (xpath "//div[2]") "width")))
               (assert (= "24" (attr (xpath "//div[2]") "height")))))

(add-test "test the has-class? function"
          #(do (reset)
               (append! (xpath "//body") "<div class='class1'>1</div>")
               (append! (xpath "//body") "<div class='class2'>2</div>")
               (assert (= true (has-class? (xpath "//div[1]") "class1")))
               (assert (= true (has-class? (xpath "//div[2]") "class2")))
               (assert (= false (has-class? (xpath "//div[1]") "class2")))
               (assert (= false (has-class? (xpath "//div[2]") "class1")))))

(add-test "can add a CSS class to a single node"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (add-class! (xpath "//div") "class1")
               (add-class! (xpath "//div") "class2")
               (assert (= true (has-class? (xpath "//div") "class1")))
               (assert (= true (has-class? (xpath "//div") "class2")))))

(add-test "can add a CSS class to multiple nodes"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (add-class! (xpath "//div") "class1")
               (add-class! (xpath "//div") "class2")
               (assert (= true (has-class? (xpath "//div[1]") "class1")))
               (assert (= true (has-class? (xpath "//div[2]") "class1")))
               (assert (= true (has-class? (xpath "//div[1]") "class2")))
               (assert (= true (has-class? (xpath "//div[2]") "class2")))))

(add-test "can remove a CSS class from a single node"
          #(do (reset)
               (append! (xpath "//body") "<div class='class1 class2'>1</div>")
               (remove-class! (xpath "//div") "class1")
               (assert (= false (has-class? (xpath "//div") "class1")))
               (assert (= true (has-class? (xpath "//div") "class2")))))

(add-test "can remove a CSS class from a multiple nodes"
          #(do (reset)
               (append! (xpath "//body") "<div class='class1 class2'>1</div><div class='class1 class2'>2</div>")
               (remove-class! (xpath "//div") "class1")
               (assert (= false (has-class? (xpath "//div[1]") "class1")))
               (assert (= true (has-class? (xpath "//div[1]") "class2")))
               (assert (= false (has-class? (xpath "//div[2]") "class1")))
               (assert (= true (has-class? (xpath "//div[2]") "class2")))))

(add-test "can toggle a CSS class from a single node"
         #(do (reset)
              (append! (xpath "//body") "<div class='class1 class2'>1</div>")
              (toggle-class! (xpath "//div") "class1")
              (assert (= false (has-class? (xpath "//div") "class1")))
              (assert (= true (has-class? (xpath "//div") "class2")))
              (toggle-class! (xpath "//div") "class1")
              (assert (= true (has-class? (xpath "//div") "class1")))
              (assert (= true (has-class? (xpath "//div") "class2")))))

(add-test "can toggle a CSS class from a multiple nodes"
         #(do (reset)
              (append! (xpath "//body") "<div class='class1 class2'>1</div><div class='class1 class2'>2</div>")
              (toggle-class! (xpath "//div") "class1")
              (assert (= false (has-class? (xpath "//div[1]") "class1")))
              (assert (= true (has-class? (xpath "//div[1]") "class2")))
              (assert (= false (has-class? (xpath "//div[2]") "class1")))
              (assert (= true (has-class? (xpath "//div[2]") "class2")))
              (toggle-class! (xpath "//div") "class1")
              (assert (= true (has-class? (xpath "//div[1]") "class1")))
              (assert (= true (has-class? (xpath "//div[1]") "class2")))
              (assert (= true (has-class? (xpath "//div[2]") "class1")))
              (assert (= true (has-class? (xpath "//div[2]") "class2")))))

(add-test "can get a list of all css classes for a node"
          #(do (reset)
               (append! (xpath "//body") "<div class='class1 class2 class3'>1</div>")
               (assert (= ["class1" "class2" "class3"] (classes (xpath "//div"))))))

(add-test "can set the css classes for a node from a list"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (set-classes! (xpath "//div") ["class1" "class2" "class3"])
               (assert (= ["class1" "class2" "class3"] (classes (xpath "//div"))))))

(add-test "can set the css classes for multiple nodes from a list"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (set-classes! (xpath "//div") ["class1" "class2" "class3"])
               (assert (= ["class1" "class2" "class3"] (classes (xpath "//div[1]"))))
               (assert (= ["class1" "class2" "class3"] (classes (xpath "//div[2]"))))))

(add-test "can set the css classes for a node from a string"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div>")
               (set-classes! (xpath "//div") "class1 class2 class3")
               (assert (= ["class1" "class2" "class3"] (classes (xpath "//div"))))))

(add-test "can set the css classes for multiple nodes from a string"
          #(do (reset)
               (append! (xpath "//body") "<div>1</div><div>2</div>")
               (set-classes! (xpath "//div") "class1 class2 class3")
               (assert (= ["class1" "class2" "class3"] (classes (xpath "//div[1]"))))
               (assert (= ["class1" "class2" "class3"] (classes (xpath "//div[2]"))))))

(add-test "can retrieve the text value of a node with normalization."
          #(do (reset)
               (append! (xpath "//body") "<p>\n\n   Some text.  \n  </p>")
               (assert (= "Some text." (text (xpath "//p"))))))

(add-test "can set text on a single node"
          #(do (reset)
               (append! (xpath "//body") "<p></p>")
               (set-text! (xpath "//p") "Hello world!")
               (assert (= "Hello world!" (text (xpath "//p"))))))

(add-test "can set text on a multiple nodes"
          #(do (reset)
               (append! (xpath "//body") "<p></p><p></p>")
               (set-text! (xpath "//p") "Hello world!")
               (assert (= "Hello world!" (text (xpath "//p[1]"))))
               (assert (= "Hello world!" (text (xpath "//p[2]"))))))

(add-test "can get a form field value"
          #(do (reset)
               (append! (xpath "//body") "<form><input type='text' name='test' value='Test Value'></input></form>")
               (assert (= "Test Value" (value (xpath "//input"))))))

(add-test "can set a form field value"
          #(do (reset)
               (append! (xpath "//body") "<form><input type='text' name='test'></input></form>")
               (set-value! (xpath "//input") "Test Value")
               (assert (= "Test Value" (value (xpath "//input"))))))

(add-test "can set multiple form field values"
          #(do (reset)
               (append! (xpath "//body") "<form><input type='text' name='test'></input><input type='text' name='test'></input></form>")
               (set-value! (xpath "//input") "Test Value")
               (assert (= "Test Value" (value (xpath "//input[1]"))))
               (assert (= "Test Value" (value (xpath "//input[2]"))))))

;; IE <= 8 innerHTML returns capitalized node names and no quotes around classes. Sigh.
(add-test "can get a node's innerHTML"
          #(do (reset)
               (append! (xpath "//body")"<div><p class='foobar'>some text</p></div>")
               (assert (or (= "<p class=\"foobar\">some text</p>" (html (xpath "//div")))
                           (= "<P class=foobar>some text</P>" (html (xpath "//div")))))))

(add-test "can set a node's innerHTML"
          #(do (reset)
               (append! (xpath "//body") "<div></div>")
               (set-html! (xpath "//div") "<p class='foobar'>some text</p>")
               (assert (= 1 (count (nodes (xpath "//body/div/p[@class='foobar']")))))))

(add-test "can set a node's innerHTML to non-string content"
          #(do (reset)
               (append! (xpath "//body") "<div></div>")
               (set-html! (xpath "//div") (nodes "<p class='foobar'>some text</p>"))
               (assert (= 1 (count (nodes (xpath "//body/div/p[@class='foobar']")))))))

(add-test "can set multiple nodes' innerHTML"
          #(do (reset)
               (append! (xpath "//body") "<div></div><div></div>")
               (set-html! (xpath "//div") "<p class='foobar'>some text</p>")
               (assert (= 2 (count (nodes (xpath "//body/div/p[@class='foobar']")))))))

(add-test "can set multiple nodes' innerHTML to non-string content"
          #(do (reset)
               (append! (xpath "//body") "<div></div><div></div>")
               (set-html! (xpath "//div") (nodes "<p class='foobar'>some text</p>"))
               (assert (= 2 (count (nodes (xpath "//body/div/p[@class='foobar']")))))))

(add-test "can set a table's innerHTML"
          #(do (reset)
               (append! (xpath "//body") "<table></table>")
               (set-html! (xpath "//table") "<tr class='foobar'><th>some</th><td>text</td></tr>")
               (assert (= 1 (count (nodes (xpath "//body/table/tr[@class='foobar']")))))))

(add-test "can set multiple tables' innerHTML"
          #(do (reset)
               (append! (xpath "//body") "<table></table><table></table>")
               (set-html! (xpath "//table") "<tr class='foobar'><th>some</th><td>text</td></tr>")
               (assert (= 2 (count (nodes (xpath "//body/table/tr[@class='foobar']")))))))

(add-test "can get nodes from strings containing cell-level table fragments"
          #(do (reset)
               (let [n (nodes "<td>Cell</td><th>Header</th>")]
                 (assert (= (count n) 2))
                 (assert (= "TD" (. (first n) -tagName)))
                 (assert (= "TH" (. (second n) -tagName))))))

(add-test "can get nodes from strings containing row-level table fragments"
          #(do (reset)
               (let [n (nodes "<tr><td>Cell</td><th>Header</th></tr><tr><td>Another</td><th>Row</th></tr>")]
                 (assert (= (count n) 2))
                 (assert (= "TR" (. (first n) -tagName)))
                 (assert (= "TR" (. (second n) -tagName))))))

(add-test "can get nodes from strings containing section-level table fragments"
          #(do (reset)
               (let [n (nodes "<thead><tr><td>Cell</td><th>Header</th></tr></thead><tbody><tr><td>Another</td><th>Row</th></tr></tbody>")]
                 (assert (= (count n) 2))
                 (assert (= "THEAD" (. (first n) -tagName)))
                 (assert (= "TBODY" (. (second n) -tagName))))))

;; Events

(add-test "can add and retrieve a listener"
          (fn []
            (reset)
            (append! (xpath "//body") "<button id='mybutton'>Text</button>")
            (listen! (sel "#mybutton") :click (fn [e] nil))
            (assert (= 1 (count (get-listeners (sel "#mybutton") :click))))))

(defn simulate-click-event
  "Doesn't use GClosure, to be more realistic"
  [el]
  (let [el (single-node el)
        document (.-document js/window)]
    (cond
     (.-click el) (.click el)
     (.-createEvent document) (let [e (.createEvent document "MouseEvents")]
                                (.initMouseEvent e "click" true true
                                                 js/window 0 0 0 0 0
                                                 false false false false 0 nil)
                                (.dispatchEvent el e))
     :default (throw "Unable to simulate click event"))))

(add-test "can listen for a browser event"
          (fn []
            (reset)
            (append! (xpath "//body") "<button id='mybutton'>Text</button>")
            (let [clicked (atom false)]
              (listen! (sel "#mybutton") :click (fn [e]
                                                  (reset! clicked true)))
              (simulate-click-event (sel "#mybutton"))
              (assert @clicked))))

(add-test "can listen for a browser event and stop propagation"
          (fn []
            (reset)
            (append! (xpath "//body") "<div id='mydiv'>Text</div>")
            (append! (sel "#mydiv") "<div id='internal'>Inner Stuff</div>")
            (let [clicked (atom false)]
              (listen! (sel "#internal") :click (fn [e] (stop-propagation e)))
              (listen! (sel "#mydiv") :click (fn [e] (reset! clicked true)))
              ; using the same dispatch! a user would use
              (dispatch! (single-node (sel "#internal")) :click {})
              (assert (not @clicked)))))

(add-test "can extract string keys from an event using keyword accessors"
          (fn []
            (reset)
            (append! (xpath "//body") "<button id='mybutton'>Text</button>")
            (let [coords (atom nil)]
              (listen! (sel "#mybutton") :foobar (fn [e]
                                                   (reset! coords
                                                           [(:clientX e)
                                                            (:clientY e)])))
              (dispatch! (sel "#mybutton") :foobar {"clientX" 42
                                                    "clientY" 42})
              (assert (= [42 42] @coords)))))


(add-test "can dispatch an event, execute default action is true"
          (fn []
            (reset)
            (append! (xpath "//body") "<button id='mybutton'>Text</button>")
            (let [clicked (atom false)]
              (listen! (sel "#mybutton") :click (fn [e]
                                                  (reset! clicked true)))
              (let [default (dispatch! (sel "#mybutton") "click" {})]
                (assert @clicked)
                (assert default)))))

(add-test "can prevent the default action on an event"
          (fn []
            (reset)
            (append! (xpath "//body") "<button id='mybutton'>Text</button>")
            (listen! (sel "#mybutton") :click (fn [e]
                                                (prevent-default e)))
            (assert (not (dispatch! (sel "#mybutton") "click" {})))))

(add-test "capture and bubble listeners are triggered in the correct order."
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom [])]
              (listen! (sel "body") :click #(swap! clicked conj :listened))
              (capture! (sel "body") :click #(swap! clicked conj :captured))
              (simulate-click-event (sel "#mybutton"))
              (assert (= [:captured :listened] @clicked)))))

(add-test "current-target is correct when capturing custom events"
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [actual-elements (atom [])
                  body (domina/single-node (sel "body"))
                  button (domina/single-node (sel "button"))]
              (listen! (sel "body") :foobar #(swap! actual-elements conj
                                                    (current-target %)))
              (listen! (sel "button") :foobar #(swap! actual-elements conj
                                                      (current-target %)))
              (dispatch! (sel "#mybutton") :foobar {:some "data"})
              (assert (= [button body] @actual-elements)))))

(add-test "target is correct when capturing custom events"
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [actual-elements (atom [])
                  body (domina/single-node (sel "body"))
                  button (domina/single-node (sel "button"))]
              (listen! (sel "body") :foobar #(swap! actual-elements conj
                                                    (target %)))
              (listen! (sel "button") :foobar #(swap! actual-elements conj
                                                      (target %)))
              (dispatch! (sel "#mybutton") :foobar {:some "data"})
              (assert (= [button button] @actual-elements)))))

(add-test "can stop event propagation in the capture phase."
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom false)]
              (capture! (sel "div") :click #(stop-propagation %))
              (listen! (sel "#mybutton") :click #(reset! clicked true))
              (simulate-click-event (sel "#mybutton"))
              (assert (not @clicked)))))

(add-test "can stop event propagation in the bubble phase."
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom false)]
              (listen! (sel "body") :click (fn [e]
                                             (reset! clicked true)))
              (listen! (sel "#mybutton") :click (fn [e]
                                                  (stop-propagation e)))
              (simulate-click-event (sel "#mybutton"))
              (assert (not @clicked)))))

(add-test "listen-once triggers only once"
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom 0)]
              (listen-once! (sel "body") :click #(swap! clicked inc))
              (simulate-click-event (sel "#mybutton"))
              (simulate-click-event (sel "#mybutton"))
              (assert (= 1 @clicked)))))

(add-test "listen-once triggers only once"
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom 0)]
              (listen-once! (sel "body") :click #(swap! clicked inc))
              (simulate-click-event (sel "#mybutton"))
              (simulate-click-event (sel "#mybutton"))
              (assert (= 1 @clicked)))))

(add-test "can unlisten generically"
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom 0)]
              (listen! (sel "body") :click #(swap! clicked inc))
              (simulate-click-event (sel "#mybutton"))
              (unlisten! (sel "body"))
              (simulate-click-event (sel "#mybutton"))
              (assert (= 1 @clicked)))))

(add-test "can unlisten narrowed by type"
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom 0)]
              (listen! (sel "body") :click #(swap! clicked inc))
              (simulate-click-event (sel "#mybutton"))
              (unlisten! (sel "body") :foobar)
              (simulate-click-event (sel "#mybutton"))
              (unlisten! (sel "body") :click)
              (simulate-click-event (sel "#mybutton"))
              (assert (= 2 @clicked)))))

(add-test "can unlisten by key"
          (fn []
            (reset)
            (append! (xpath "//body")
                     "<div><button id='mybutton'>Text</button></div>")
            (let [clicked (atom 0)
                  keys (listen! (sel "body") :click #(swap! clicked inc))]
              (simulate-click-event (sel "#mybutton"))
              (unlisten-by-key! (first keys))
              (simulate-click-event (sel "#mybutton"))
              (assert (= 1 @clicked)))))

(add-test "can send and listen for custom events with custom data"
          (fn []
            (reset)
            (let [worked (atom false)]
              (listen! :foobar (fn [evt]
                                 (if (= "data" (:some evt))
                                   (reset! worked true))))
              (dispatch! :foobar {:some "data"})
              (assert @worked))))

(add-test "doesn't clone unless necessary"
          #(do
             (reset)
             (let [child (single-node "<div>hello</div>")]
               (append! (xpath "//body") child)
               (assert (= child (single-node (xpath "//body/div")))))))

(add-test "test that data works"
          #(do
             (reset)
             (append! (xpath "//body") "<div id='testingdata'>hello</div>")
             (let [data {:some "complex data"}]
               (set-data! (by-id "testingdata") :my-impeccable-data data)
               (assert (= data (get-data (by-id "testingdata") :my-impeccable-data))))))

(add-test "test that data works with bubbling"
          #(do
             (reset)
             (append! (xpath "//body")
                      "<div id='outerdata'><div id='innerdata'>hello</div></div>")
             (let [data {:some "complex data"}]
               (set-data! (by-id "outerdata") :my-impeccable-data data)
               (assert (= data (get-data (by-id "innerdata") :my-impeccable-data true))))))

(add-test "common-ancestor works"
          #(do
             (reset)
             (append! (sel "body") "<div id='a1'/>")
             (append! (sel "#a1") "<div id='i1'/>")
             (append! (sel "#a1") "<div id='i2'/>")
             (append! (sel "#i1") "<div id='t1'/>")
             (append! (sel "#i2") "<div id='t2'/>")
             (assert (not (nil? (common-ancestor (sel "#t1") (sel "#t2")))))
             (assert (= (single-node (sel "#a1"))
                        (common-ancestor (sel "#t1") (sel "#t2"))))))

(add-test "ancestor? works"
          #(do
             (reset)
             (append! (sel "body") "<div id='a1'/>")
             (append! (sel "#a1") "<div id='i1'/>")
             (append! (sel "#a1") "<div id='i2'/>")
             (append! (sel "#i1") "<div id='t1'/>")
             (append! (sel "#i2") "<div id='t2'/>")
             (assert (ancestor? (sel "#a1") (sel "#t1")))
             (assert (ancestor? (sel "#a1") (sel "#i1")))
             (assert (ancestor? (sel "#a1") (sel "#a1")))
             (assert (not (ancestor? (sel "#t1") (sel "#t2"))))
             (assert (not (ancestor? (sel "#i1") (sel "#t2"))))))

(add-test "can add <option> elements to a <select> element."
          #(do
             (reset)
             (append! (sel "body")
                      "<select id='myselect'></select>")
             (append! (by-id "myselect") "<option value='foo'>bar</option>")
             (assert (= 1 (count (nodes (children (sel "#myselect"))))))))

(defn report
  [test-results]
  (reset)
  (doseq [[name result] test-results]
    (let [result-div (single-node "<div class='test-result'></div>")]
      (set-text! result-div name)
      (if (not (= result nil))
        (do
          (add-class! result-div "failed")
          (append! result-div (str "<div class='message'>" result "</div>")))
        (add-class! result-div "passed"))
      (append! (xpath "//body") result-div)))
  (prepend! (xpath "//body") "<div id='test-summary'>ran <span id='total-tests'></span> tests with <span id='total-failures'></span> failures")
  (set-text! (by-id "total-tests") (count test-results))
  (let [failure-count (count (filter (complement nil?) (map second test-results)))]
    (set-text! (by-id "total-failures") failure-count)
    (if (= 0 failure-count)
      (add-class! (by-id "test-summary") "passed")
      (add-class! (by-id "test-summary") "failed"))))

(def test-results (doall (run-tests)))
#_(def test-results (doall (run-named "can get multiple HTML attributes from a single node.")))
(report test-results)
