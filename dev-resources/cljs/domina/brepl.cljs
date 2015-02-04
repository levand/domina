(ns domina.brepl
  (:require [clojure.browser.repl]))

(defn whoami
  []
  (.-userAgent js/navigator))
