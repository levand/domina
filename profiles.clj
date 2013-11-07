{:dev {:test-paths ["test/cljs"]
       :dependencies [[hiccups "0.2.0"]]
       :plugins [[com.cemerick/clojurescript.test "0.2.0"]]
       :cljsbuild {:builds {:none
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :pretty-print true
                                         :optimizations :none
                                         :output-to "dev-resources/public/js/none.js"}}
                            :whitespace
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :whitespace
                                         :pretty-print true
                                         :output-to "dev-resources/public/js/whitespace.js"}}
                            :simple
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :simple
                                         :pretty-print true
                                         :output-to "dev-resources/public/js/simple.js"}}
                            :advanced
                            {:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :advanced
                                         :pretty-print true
                                         :output-to "dev-resources/public/js/advanced.js"}}}
                   :test-commands {"whitespace"
                                   ["phantomjs" :runner "dev-resources/public/js/whitespace.js"]

                                   "simple"
                                   ["phantomjs" :runner "dev-resources/public/js/simple.js"]

                                   "advanced"
                                   ["phantomjs" :runner "dev-resources/public/js/advanced.js"]}}}}
