(defproject domina "1.0.3-SNAPSHOT"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"
  :source-paths ["src/clj" "src/cljs"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1847"]]
  :plugins [[lein-cljsbuild "0.3.2"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds [{:compiler {:libs ["goog/dom/query.js"]
                                   :pretty-print true
                                   :output-dir ".cljsbuild/domina"
                                   :output-to "public/domina.js"}}
                       {:source-paths ["test/cljs"]
                        :compiler  {:libs ["goog/dom/query.js"]
                                    :pretty-print true
                                    :optimizations :none
                                    :output-dir "public/build_no_opt"
                                    :output-to "public/test_no_opt.js"}}
                       {:source-paths ["test/cljs"]
                        :compiler  {:libs ["goog/dom/query.js"]
                                    :optimizations :whitespace
                                    :pretty-print true
                                    :output-dir ".cljsbuild/whitespace"
                                    :output-to "public/test_whitespace.js"}}
                       {:source-paths ["test/cljs"]
                        :compiler  {:libs ["goog/dom/query.js"]
                                    :optimizations :simple
                                    :pretty-print true
                                    :output-dir ".cljsbuild/simple"
                                    :output-to "public/test_simple.js"}}
                       {:source-paths ["test/cljs"]
                        :compiler  {:libs ["goog/dom/query.js"]
                                    :optimizations :advanced
                                    :pretty-print true
                                    :output-dir ".cljsbuild/advanced"
                                    :output-to "public/test_advanced.js"}}]})
