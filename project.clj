(defproject domina "1.0.4-SNAPSHOT"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2030"]]
  :plugins [[lein-cljsbuild "1.0.0-alpha1"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds {:deploy
                       {:source-paths ["src/cljs"]
                        :compiler {:libs ["goog/dom/query.js"]
                                   :pretty-print true
                                   :output-dir ".cljsbuild/domina"
                                   :output-to "public/domina.js"}}}})
