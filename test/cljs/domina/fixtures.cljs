(ns domina.fixtures
  (:require-macros [domina.macros :as dm]
                   [hiccups.core :as hm])
  (:require [domina :as dom :refer (append! destroy!)]
            [hiccups.runtime :as hrt]
            [domina.xpath :as css :refer (xpath)]
            [domina.events :as de :refer (unlisten!)]))

(defn- initialize []
  (append! (xpath "//body")
           (hm/html [:div.d1
                     [:p.p1 "P1"]
                     [:p.p2 "P2"]
                     [:p#id1.p3 "P3"]])))
(defn- reset[]
  (destroy! (xpath "//body/*"))
  (unlisten! (xpath "//*")))

(defn base-fixture [f]
  (initialize)
  (f)
  (reset))
