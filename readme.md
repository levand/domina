# What is Domina?

Domina is a jQuery inspired DOM manipulation library for ClojureScript. It provides a functional, idiomatic Clojure interface to the DOM manipulation facilities provided by the Google Closure library.

**Warning**: Domina is still beta-level software. Everything *should*  work, but there may still be bugs, browser incompatibility or performance issues. Please report them!

Pull requests are extremely welcome.

You can obtain Domina by pulling from Clojars: `[domina "1.0.3"]`.

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

This expression returns a content containing all the paragraph elements in a document  which are the second children of divs with an class of 'foo'.

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
(destroy! (by-class "foo"))
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

For examples of every currently implemented function, see the `test.cljs` file in the code repository, which exercises each function in unit tests against a DOM page.

## Event Handling

Domina contains a robust event handling API that wraps the Google Closure event handling code, while exposing it in a idiomatic functional way.

### Event Propagation

In Domina, every event has a *target*. This is the DOM node that is logically "causing" the event. All events triggered by the browser (such as clicks or key presses) are associated with a node. User defined events must also specify a target node.

 Event listeners are also attached to nodes, and may trigger on either the *capture* or *bubble* phases of event propegation. The capture phase starts at the root node of the document, and successively fires any listeners on ancestors of the target node from the top down, down to the event target itself. In the bubble phase, the process is reversed, first firing listeners on the target node, then on each of its ancestors in succession back to the document root.

### Registering Event Listeners

Use the `listen!` function to register an event handler in the bubble phase, and `capture!` to register a handle for the capture phase. Both take similar argument: a Domina DomContent, the event type, and a listener function. They return a sequence of event handler keys (see section below on de-registering event handlers)

```clojure
(listen! (sel "button") :click (fn [evt] (log "button clicked!")))
```

This above snippet adds an event handler  to every `<button>` element on the page, which logs a message when the button is clicked.

Note that the content argument is optional: in this case, the listener is added to the root node of the document, and will catch all click events on the entire page.

```clojure
(listen! :click (fn [evt] (log "button clicked!")))
```

### Event Objects

When an event is triggered, it invokes the provided listener function, passing it an event object. The event object will implement ClojureScript's `ILookup` protocol, as well as the `domina.events.Event` protocol.

Implementing the `ILookup` protocol makes it easy to pull values from browser events using ClojureScript's built in lookup functions such as `get` and `contains?`, as well as using keywords in function position. Note that although native events only have string keys, Domina will attempt to translate keywords to strings for lookup purposes.

```clojure
(defn sample-click-handler [evt]
   (let [x (:clientX evt)
          y (:clientY evt)]
       (log (str "Click occurred at window coordinates " x "," y))))
```

The `domina.events.Event` protocol supports the following methods:

- `prevent-default`  Prevents the default action for an event from firing. For example, if you invoke `prevent-default` on a click event on a link, it will prevent the browser from navigating the browser as it normally would with a clicked link.
- `stop-propagation` Prevents all future event listeners (in both the bubble and capture phases) from recieving the event.
- `target`           Returns the target node of the event.
- `current-target`   Returns the current target of the event (the node to which the current listener was attached).
- `event-type`       Returns the type of the event.
- `raw-event`        Returns the underlying `goog.events.Event` object, rather than it's Domina wrapper.

### De-registering Event Handlers

There are several ways to de-register an event handler.

If you have the key returned by the registration function, you can de-register the handler by calling the `unlisten-by-key!` function, passing it the key as a single argument.

If you do not have the key in hand, you can remove all listeners from a node (or set of nodes) using the `unlisten!` function. It takes a DomContent, and an optional event type. If the event type is specified, it will only de-register handlers for that type, otherwise it will de-register everything from the specified node.

```clojure
(unlisten! (sel "button") :click)  ; removes all click event handlers from all button elements
(unlisten! (sel "button"))  ; removes all event handlers of any type  from all button elements
```

There are also `listen-once!` and `capture-once!` variants of `listen!` and `capture!` which de-register themselves after the first time they are triggered.

### Custom Events

In addition to native events dispatched by the browser, Domina allows you to create and dispatch arbitary events using the `dispatch!` function.

The `dispatch!` function takes an event target as a DomContent (assumed to be a single node), an event type, and an event map. Keys and values in the event map are merged in to the event object, and can be used to pass arbitrary data to event handlers.

```clojure
(dispatch! (by-id "evt-target") :my-event {:some-key "some value"})
```

The event will be propegated through the capture and bubble phases just like a browser event, and can be caught in the normal way:

```clojure
(listen! (by-id "evt-target") :my-event (fn [evt] (log (:some-key evt))))
```

Note that if you omit the event target when calling `dispatch!` (or when registering a listener), it will default to the root node of the document. This is often desirable when using custom application-wide events that have no logical mapping to any particular location in the DOM tree.

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

## Running the Tests

To execute the test suite ...

1. Run `lein cljsbuild test`. This will generate a suite of test HTML
   files in the `public` directory (e.g., `test_no_opt.html`,
   `test_advanced.html`, etc.). Each file runs `test.cljs` in the context
   of the DOM, and each file represents a different compiler optimization
   setting.
2. Open each of the `public/test_*.html` files in a browser and [verify
   that all the tests pass](https://skitch.com/jasonrudolph/85fga/domina-test-results).

## Todo

See the projects [Trello page](https://trello.com/board/domina/4f1f09c9ffa52a1e570372eb)

If you'd like to participate, please just let me know and I'll add you.

## License

Copyright © 2012 Luke VanderHart

Distributed under the Eclipse Public License, the same as Clojure.
