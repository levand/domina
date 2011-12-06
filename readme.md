# What is Domina?

Domina is a jQuery inspired DOM manipulation library for ClojureScript. It provides a functional, idiomatic Clojure interface to the DOM manipulation facilities provided by the Google Closure library.

**Warning**: Domina is still alpha-level software and is currently public only for testing and feedback. See the 'todo' section below for a list of known caveats and deficiencies.

Pull requests are extremely welcome!

## Rationale

Previously, there was no straightforward way to do DOM manipulation in ClojureScript. The Google Closure library is available, but it does not represent a fluid, functional approach to DOM manipulation that users of libraries such as jQuery are accustomed to. jQuery itself, as well as other DOM manipulation libraries, are not easy to use with ClojureScript due to incompatibilities with the advanced mode compiler.

However, a jQuery-esqe, functional approach to DOM manipulation is extremely well suited to ClojureScript. Domina, while it does not provide any innovations, attempts to provide a basic functional interface to DOM manipulation that feels natural in ClojureScript.

## Key Concepts

### Content
Most of Domina's functions accept or return *content*, an abstraction that represents one or more DOM nodes, rather than DOM nodes themselves. Content is implemented as a protocol (`DomContent`) which responds to two methods, `nodes` and `single-node`. `nodes` returns a sequence of DOM nodes, `single-node` returns a single DOM node (usually the first one, if the content contains multiple nodes.

Entities which implement `DomContent` include:

* Individual nodes
* Sequences of nodes
* Built-in HTML node collections such as `NodeList`
* HTML `DocumentFragment` objects.
* Strings (which are parsed into a `DocumentFragment` object)
* Selectors (such as `xpath`) create reified `DomContent` objects directly

### Selectors

Selector functions take a string and return a `DomContent` representing matching nodes. For example:

```clojure
(xpath "//div[@class='foo']/p[2]")
```

This epxression returns a content containing all the paragraph elements in a document  which are the second children of divs with an class of 'foo'.

The `xpath` function also takes an optional first argument (which can be any `DomContent`) representing the context node(s) from which XPath evaluation will start. This allows selectors to be chained:

```clojure
(-> (xpath "//body")
    (xpath "div")
    (xpath "p")
    (xpath "span"))
```

Other selector functions include `by-id` and `by-class` which return a `DomContent` based on node id and node class, respectively.

## Examples

Append a `<div>` to the body element:

```clojure
(append (xpath "//body") "<div>Hello world!</div>")
```

Move a `<div>` from the end of the document to the beginning:

```clojure
(prepend (xpath "//body") 
         (detach (xpath "//body/div[last()]")))
```

Add a CSS class on a node with a particular id:

```clojure
(add-class (by-id "foobar")
```

Delete all nodes of a given class:

```clojure
(delete (by-class "foo"))
```

Set some colors on all child nodes of `<div>` elements with a class of 'foo':

```clojure
(set-styles (xpath "//div[@class='foo']/*")
            {:background-color "black"
             :color "white})
```

Set the text content of a node:

```clojure
(set-text (by-id "foobar") "Lorem ipsum...")
```

Get the values of all `<input>` elements on the page:

```clojure
(map value (nodes (xpath "//input")))
```

For examples of every currently implemented function, see the `test.cljs` file in the code repository, which exercises each function in unit tests against a DOM page. The `test.html` file loads and runs `test.cljs` in the context of the DOM.

## Todo

There's still a lot of work to be done:

* Repackage for easier distribution
* Comprehensive browser/OS testing (currently only tested against the latest Firefox and Chrome on MacOS 10.6.
* Performance profiling and analysis.
* Implement a css selector function.