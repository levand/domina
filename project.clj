(defproject domina "0.1.0"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"
  :source-path "src/clj"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [goog-jar "1.0.0"]]
  :dev-dependencies [[lein-cljsbuild "0.0.11-SNAPSHOT"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild [{:source-path "src/cljs"
               :jar true
               :compiler {:libs ["goog/dom/query.js"]
                          :pretty-print true
                          :output-dir ".cljsbuild/domina"
                          :output-to "public/domina.js"}}
              {:source-path "test/cljs"
               :compiler  {:libs ["goog/dom/query.js"]
                           :pretty-print true
                           :output-dir "public/build_no_opt"
                           :output-to "public/test_no_opt.js"}}
              {:source-path "test/cljs"
               :compiler  {:libs ["goog/dom/query.js"]
                           :optimizations :whitespace
                           :pretty-print true
                           :output-dir ".cljsbuild/whitespace"
                           :output-to "public/test_whitespace.js"}}
              {:source-path "test/cljs"
               :compiler  {:libs ["goog/dom/query.js"]
                           :optimizations :simple
                           :pretty-print true
                           :output-dir ".cljsbuild/simple"
                           :output-to "public/test_simple.js"}}
              {:source-path "test/cljs"
               :compiler  {:libs ["goog/dom/query.js"]
                           :optimizations :advanced
                           :pretty-print false
                           :output-dir ".cljsbuild/advanced"
                           :output-to "public/test_advanced.js"}}])
