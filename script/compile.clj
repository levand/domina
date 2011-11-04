(use 'cljs.closure)


(build "src/cljs"
       { ;; :optimizations :whitespace
        :pretty-print true
        :output-dir "build"
        :output-to "main.js"})

(comment
  
  (do
    (require '[cljs.repl :as repl])
    (require '[cljs.repl.browser :as browser])
    (def env (browser/repl-env))
    (repl/repl env))
  
  )