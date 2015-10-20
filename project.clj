(defproject domina "1.0.3-SNAPSHOT"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "0.0-3308"]]
  :plugins [[lein-cljsbuild "1.1.0"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds {:useless
                       {:source-paths ["src/cljs"]}}}
  :clean-targets ^{:protect false} ["dev-resources/public/js" :target-path])
