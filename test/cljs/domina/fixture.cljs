(ns domina.fixture)

(defn each-fixture [f]
  ;; initialize
  (let [div (.createElement js/document "div")
        p1 (.createElement js/document "p")
        p2 (.createElement js/document "p")
        p3 (.createElement js/document "p")]
    ;; div
    (.setAttribute div "class" "d1")
    ;; p1
    (.setAttribute p1 "class" "p1")
    (set! (.-innerHTML p1) "P1")
    ;; p2
    (.setAttribute p2 "class" "p1")
    (set! (.-innerHTML p2) "P2")
    ;; P3
    (.setAttribute p3 "class" "p3")
    (.setAttribute p3 "id" "id1")
    (set! (.-innerHTML p3) "P3")
    ;; append
    (.appendChild div p1)
    (.appendChild div p2)
    (.appendChild div p3)
    (.appendChild (.-body js/document) div)
    ;; execute
    (f)
  ;; reset
    (.removeChild (.-body js/document) div)))
