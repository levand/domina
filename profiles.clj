{:dev {:test-paths ["test/cljs"]
       :plugins [[com.cemerick/clojurescript.test "0.1.0"]]
       :cljsbuild {:builds {:none
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :pretty-print true
                                         :optimizations :none
                                         :output-dir "public/build_no_opt"
                                         :output-to "public/test_no_opt.js"}}
                            :whitespace
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :whitespace
                                         :pretty-print true
                                         :output-dir ".cljsbuild/whitespace"
                                         :output-to "public/test_whitespace.js"}}
                            :simple
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :simple
                                         :pretty-print true
                                         :output-dir ".cljsbuild/simple"
                                         :output-to "public/test_simple.js"}}
                            :advanced
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :advanced
                                         :pretty-print true
                                         :output-dir ".cljsbuild/advanced"
                                         :output-to "public/test_advanced.js"}}}}}}
