(defproject domina "1.0.3-SNAPSHOT"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"

  :source-paths ["src/clj" "src/cljs"]

  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1847"]]

  :plugins [[lein-cljsbuild "0.3.4"]]

  :hooks [leiningen.cljsbuild]

  :cljsbuild
  {:builds {:deploy
            {:source-paths ["src/cljs"]
             ;:jar true ; DON'T DO THIS ANYMORE
             :compiler
             {:output-to "dev-resources/public/js/deploy.js"
              :optimizations :none
              :pretty-print false}}}})
