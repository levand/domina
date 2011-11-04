(ns domina.test
  (:require [domina :as dom]
            [clojure.browser.repl :as repl]))

(repl/connect "http://localhost:9000/repl")

(defn log [& args]
  (. js/console (log (apply str args))))

(log "Everything seems to have worked..")