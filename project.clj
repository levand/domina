(defproject domina "1.0.3-SNAPSHOT"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2030"]]
  :plugins [[lein-cljsbuild "1.0.0-alpha2"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds {:useless
                       {:source-paths ["src/cljs"]}}})
