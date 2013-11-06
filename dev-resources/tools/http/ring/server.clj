(ns ring.server
  (:require [compojure.core :refer (GET defroutes)]
            [compojure.route :refer  (resources not-found)]
            [ring.util.response :refer (redirect)]
            [ring.adapter.jetty :as jetty]))

;; defroutes macro defines a function that chains individual route
;; functions together. The request map is passed to each function in
;; turn, until a non-nil response is returned.
(defroutes site
  ; to serve document root address
  (GET "/" [] (redirect "/index.html"))
  ; to serve static pages saved in dev-resources/public directory
  (resources "/")
  ; if page is not found
  (not-found "Page not found"))

(defn run
  []
  (defonce server
    (jetty/run-jetty #'site {:port 3000 :join? false}))
  server)
