(defproject domina "1.0.4-SNAPSHOT"
  :description "A DOM manipulation library for ClojureScript inspired by JQuery"
  :source-paths ["src/cljs"]
  :dependencies [[org.clojure/clojure "1.4.0"]]
  :plugins [[lein-cljsbuild "0.3.0"]
            [lein-clojars "0.9.1"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild {:builds [{:jar true
                        :compiler {:libs ["goog/dom/query.js"]
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
                                    :output-to "public/test_advanced.js"}}]}
  :repositories {"sonatype-staging"
                 "https://oss.sonatype.org/content/groups/staging/"})

(comment
  (do
    (require '[cljs.repl :as repl])
    (require '[cljs.repl.browser :as browser])
    (def env (browser/repl-env))
    (repl/repl env))

  )
