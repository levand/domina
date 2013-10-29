(defproject domina "1.0.3-SNAPSHOT"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"

  :source-paths ["src/clj"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1978"]]

  :plugins [[lein-cljsbuild "0.3.4"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds {:deploy
            {:source-paths ["src/cljs"]
             :jar true
             :compiler
             {:output-to "dev-resources/public/js/deploy.js"
              :optimizations :whitespace
              :pretty-print true}}}})
