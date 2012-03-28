(ns domina.macros
  (:refer-clojure :exclude [satisfies?]))

(defmacro defined? [x]
  (list 'js* "(typeof ~{} != 'undefined')" x))

(defn- protocol-prefix [psym]
  (str (.replace (str psym) \. \$) "$"))

(defmacro satisfies?
  "Returns true if x satisfies the protocol. This is entirely a copy of the default satisfies implementation, except that it checks if the invokee has the 'hasOwnProperty' method: some JS objects, particularly in older browsers, don't."
  [psym x]
  (let [p (:name (cljs.compiler/resolve-var (dissoc &env :locals) psym))
        prefix (protocol-prefix p)]
    `(let [x# ~x]
       (if (and x#
                (. x# ~(symbol (str "-" prefix)))        ;; Need prop lookup here
                (and (. x# ~'-hasOwnProperty)
                     (not (. x# (~'hasOwnProperty ~prefix)))))
	 true
	 (cljs.core/type_satisfies_ ~psym x#)))))