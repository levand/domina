{:dev {:resource-paths ["dev-resources"]
       :test-paths ["dev-resources/clj" "test/cljs" "dev-resources/cljs"]
       :dependencies [[hiccups "0.2.0"]
                      [ring "1.2.1"]
                      [compojure "1.1.6"]
                      [enlive "1.1.4"]]
       :plugins [[com.cemerick/clojurescript.test "0.2.1"]
                 [com.cemerick/austin "0.1.3"]]
       :cljsbuild {:builds {#_:none
                            #_{:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :pretty-print true
                                         :optimizations :none
                                         :output-to "dev-resources/public/js/none.js"}}
                            :whitespace
                            {:source-paths ["src/cljs" "test/cljs" "dev-resources/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :whitespace
                                         :pretty-print true
                                         :output-to "dev-resources/public/js/whitespace.js"}}
                            #_:simple
                            #_{:source-paths ["src/cljs" "test/cljs"]
                               :compiler  {:libs ["goog/dom/query.js"]
                                           :optimizations :simple
                                           :pretty-print true
                                           :output-to "dev-resources/public/js/simple.js"}}
                            #_:advanced
                            #_{:source-paths ["src/cljs" "test/cljs"]
                             :compiler  {:libs ["goog/dom/query.js"]
                                         :optimizations :advanced
                                         :pretty-print true
                                         :output-to "dev-resources/public/js/advanced.js"}}}
                   :test-commands {"whitespace"
                                   ["phantomjs" :runner "dev-resources/public/js/whitespace.js"]

                                   #_"simple"
                                   #_["phantomjs" :runner "dev-resources/public/js/simple.js"]

                                   #_"advanced"
                                   #_["phantomjs" :runner "dev-resources/public/js/advanced.js"]}}
       :injections [(require '[ring.server :as http :refer [run]]
                             'cemerick.austin.repls)
                    (defn browser-repl []
                      (cemerick.austin.repls/cljs-repl (reset! cemerick.austin.repls/browser-repl-env
                                                               (cemerick.austin/repl-env))))]}}
