(use 'cljs.closure)

(def ^:dynamic *pretty-print* true)

(time
 (do
   (println "Compiling without any optimiizations...")
   (time
    (build "test/cljs"
           {:pretty-print *pretty-print*
            :output-dir "public/build_no_opt"
            :output-to "public/test_no_opt.js"}))
   (println "Compiling with whitespace optimizations...")
   (time
    (build "test/cljs"
           {:optimizations :whitespace
            :pretty-print *pretty-print*
            :output-dir "build/whitespace"
            :output-to "public/test_whitespace.js"}))
   (println "Compiling with simple optimizations...")
   (time
    (build "test/cljs"
           {:optimizations :simple
            :pretty-print *pretty-print*
            :output-dir "build/simple"
            :output-to "public/test_simple.js"}))
   (println "Compiling with advanced optimizations...")
   (time
    (build "test/cljs"
           {:optimizations :advanced
            :pretty-print *pretty-print*
            :output-dir "build/advanced"
            :output-to "public/test_advanced.js"}))
   (println "Compilation complete.")))

(comment
  (do
    (require '[cljs.repl :as repl])
    (require '[cljs.repl.browser :as browser])
    (def env (browser/repl-env))
    (repl/repl env)))
