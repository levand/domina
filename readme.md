# What is Domina?

Domina is a jQuery inspired DOM manipulation library for ClojureScript. It provides a functional, idiomatic Clojure interface to the DOM manipulation facilities provided by the Google Closure library.

**Warning**: Domina is still beta-level software. Everything *should*  work, but there may still be bugs, browser incompatibility or performance issues. Please report them!

Pull requests are extremely welcome.

You can obtain Domina by pulling from Clojars: `[domina "1.0.0-beta1]`.

## Rationale

Previously, there was no straightforward way to do DOM manipulation in ClojureScript. The Google Closure library is available, but it does not represent a fluid, functional approach to DOM manipulation that users of libraries such as jQuery are accustomed to. jQuery itself, as well as other DOM manipulation libraries, are not easy to use with ClojureScript due to incompatibilities with the advanced mode compiler.

However, a jQuery-esqe, functional approach to DOM manipulation is extremely well suited to ClojureScript. Domina, while it does not provide any innovations, attempts to provide a basic functional interface to DOM manipulation that feels natural in ClojureScript. For a good library that takes a novel, alternative approach to DOM manipulation inspired by Clojure's Enlive, consider [Enfocus](https://github.com/ckirkendall/enfocus).

## Key Concepts

### Content
Most of Domina's functions accept or return *content*, an abstraction that represents one or more DOM nodes, rather than DOM nodes themselves. Content is implemented as a protocol (`DomContent`) which responds to two methods, `nodes` and `single-node`. `nodes` returns a sequence of DOM nodes, `single-node` returns a single DOM node (usually the first one), if the content contains multiple nodes.

Entities which implement `DomContent` include:

* Individual nodes
* Sequences of nodes
* Built-in HTML node collections such as `NodeList`
* Strings (which are parsed into one or more nodes)
* Selectors (such as `xpath`) create reified `DomContent` objects directly

### Selectors

Selector functions take a string and return a `DomContent` representing matching nodes. For example, the `xpath` function in the `domina.xpath` namespace:

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

The `sel` function in the `domina.css` namespace works the same way for CSS selectors:

```clojure
(sel ".my-class")
```

```clojure
(sel "#my-id")
```

```clojure
(-> (sel "body")
    (sel "div")
    (sel "p")
    (sel "span"))
```

```clojure
(sel "body > div > p > span")
```

Other selector functions include the core functions `by-id` and `by-class` which return a `DomContent` based on node id and node class, respectively.

## Examples

Append a `<div>` to the body element:

```clojure
(append! (xpath "//body") "<div>Hello world!</div>")
```

Move a `<div>` from the end of the document to the beginning:

```clojure
(prepend! (xpath "//body") 
         (detach! (xpath "//body/div[last()]")))
```

Add a CSS class on a node with a particular id:

```clojure
(add-class! (by-id "foobar") "baz")
```

Delete all nodes of a given class:

```clojure
(delete! (by-class "foo"))
```

Set some colors on all child nodes of `<div>` elements with a class of 'foo':

```clojure
(set-styles! (xpath "//div[@class='foo']/*")
            {:background-color "black"
             :color "white"})
```

Set the text content of a node:

```clojure
(set-text! (by-id "foobar") "Lorem ipsum...")
```

Get the values of all `<input>` elements on the page:

```clojure
(map value (nodes (xpath "//input")))
```

For examples of every currently implemented function, see the `test.cljs` file in the code repository, which exercises each function in unit tests against a DOM page. The `test.html` file loads and runs `test.cljs` in the context of the DOM.

## Important note on browser XPath compatibility (IE and Android).

Internet Explorer does not support DOM Level 3 XPath selectors. In order to utilize the `domina.xpath` namespace, you will need to include a pure-javascript XPath DOM Level 3 implementation.

A fast implementation known to work is provided by Cybozu Labs at <http://coderepos.org/share/wiki/JavaScript-XPath>. It is ignored on all browssers which already have native XPath support.

To include it on your page, enter the following line in your `head` element, *before* you reference any ClojureScript scripts.

```html
    <script type="text/javascript" src="cybozu-xpath.js"></script>
```

#### Android

The situation with the Android browser (version 2.x, it is fixed in version 3) is even worse. The browser does not support XPath, but erroneously reports that it does. To make Domina's XPath support work on an Android device, you must include the following code snippet on your HTML page before including the `cybozu-xpath.js` file:

```html
    <script type="text/javascript">
      /* Android 2.x claims XPath support, but has none.  Force non-native
         XPath implementation in this case */
      if (document.implementation
           && document.implementation.hasFeature
           && document.implementation.hasFeature("XPath",null)
           && !document.evaluate) {
        window.jsxpath = {
          targetFrame: undefined,
          exportInstaller: false,
          useNative: false, /* force non-native implementation */
          useInnerText: true
        };
      }
    </script>
    <script type="text/javascript" src="xpath.js"></script>
```

This script checks that if the browser claims XPath support, if it actually *has* it (via the presence of the `document.evaluate`function) and if not, sets a flag that tells Cybozu's XPath implementation to override native support.

If you're using a different XPath implementation, you'll need to use whatever means it provides to override native XPath handling.

We decided *not* to compile this functionality directly into Domina for two reasons:

- Potential licensing issues
- Reduced code size. With some server side conditions, it is possible to avoid downloading the script altogether for browsers which support XPath natively, which is obviously not possible to determine at compile-time.

## Todo

See the projects [Trello page](https://trello.com/board/domina/4f1f09c9ffa52a1e570372eb)

If you'd like to participate, please just let me know and I'll add you.
