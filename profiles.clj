{:dev {:clean-targets ["out"]
       :test-paths ["dev-resources/tools/http" 
                    "test/cljs" 
                    "dev-resources/tools/repl"]
       
       :resources-paths ["dev-resources"]
       
       :dependencies [[com.cemerick/piggieback "0.1.0"]
                      [ring "1.2.0"]
                      [compojure "1.1.5"]]
       
       :plugins [[com.cemerick/clojurescript.test "0.1.0"]]
       
       :cljsbuild
       {:builds {:whitespace
                 {:source-paths ["src/cljs" "test/cljs" "dev-resources/tools/repl"]
                  :compiler  {:optimizations :whitespace
                              :pretty-print true
                              :output-to "dev-resources/public/js/whitespace.js"}}
                 
                 :simple
                 {:source-paths ["src/cljs" "test/cljs"]
                  :compiler  {:optimizations :simple
                              :pretty-print false
                              :output-to "dev-resources/public/js/simple.js"}}
                 
                 :advanced
                 {:source-paths ["src/cljs" "test/cljs"]
                  :compiler  {:optimizations :advanced
                              :pretty-print false
                              :output-to "dev-resources/public/js/advanced.js"}}}
        
        :test-commands {"whitespace"
                        ["phantomjs" :runner "dev-resources/public/js/whitespace.js"]
                        
                        "simple" ["phantomjs" :runner "dev-resources/public/js/simple.js"]
                        
                        "advanced" ["phantomjs" :runner "dev-resources/public/js/advanced.js"]}}

       :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
       :injections [(require '[cljs.repl.browser :as brepl]
                             '[cemerick.piggieback :as pb])
                    (defn browser-repl []
                      (pb/cljs-repl :repl-env
                                    (brepl/repl-env :port 9000)))]}}
