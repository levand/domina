goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____2419 = content;

if(cljs.core.truth_(and__3546__auto____2419))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____2419;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____2420 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____2420))
{return or__3548__auto____2420;
} else
{var or__3548__auto____2421 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____2421))
{return or__3548__auto____2421;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____2422 = nodeseq;

if(cljs.core.truth_(and__3546__auto____2422))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____2422;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____2423 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____2423))
{return or__3548__auto____2423;
} else
{var or__3548__auto____2424 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____2424))
{return or__3548__auto____2424;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base.
*/
domina.xpath = (function() {
var xpath = null;
var xpath__2428 = (function (expr){
return xpath.call(null,document,expr);
});
var xpath__2429 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2425)))
{
/**
* @constructor
*/
domina.t2425 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.t2425.prototype.domina$DomContent$ = true;
domina.t2425.prototype.domina$DomContent$nodes = (function (_){
var this__2426 = this;
return cljs.core.mapcat.call(null,(function (p1__2417_SHARP_){
return goog.dom.xml.selectNodes.call(null,p1__2417_SHARP_,this__2426.expr);
}),domina.nodes.call(null,this__2426.base));
});
domina.t2425.prototype.domina$DomContent$single_node = (function (_){
var this__2427 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__2418_SHARP_){
return goog.dom.xml.selectSingleNode.call(null,p1__2418_SHARP_,this__2427.expr);
}),domina.nodes.call(null,this__2427.base))));
});
} else
{}
return (new domina.t2425(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__2428.call(this,base);
case  2 :
return xpath__2429.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement.call(null,id);
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2431)))
{
/**
* @constructor
*/
domina.t2431 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t2431.prototype.domina$DomContent$ = true;
domina.t2431.prototype.domina$DomContent$nodes = (function (_){
var this__2432 = this;
return goog.dom.getElementsByClass.call(null,this__2432.class_name);
});
domina.t2431.prototype.domina$DomContent$single_node = (function (_){
var this__2433 = this;
return goog.dom.getElementByClass.call(null,this__2433.class_name);
});
} else
{}
return (new domina.t2431(class_name,by_class));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.call(null,(function (p1__2434_SHARP_){
return p1__2434_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__2435_SHARP_,p2__2436_SHARP_){
return goog.dom.insertChildAt.call(null,p1__2435_SHARP_,p2__2436_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2438_SHARP_,p2__2437_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__2437_SHARP_,p1__2438_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2440_SHARP_,p2__2439_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__2439_SHARP_,p1__2440_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2442_SHARP_,p2__2441_SHARP_){
return goog.dom.replaceNode.call(null,p2__2441_SHARP_,p1__2442_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__2443 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__2443))))
{return s__2443;
} else
{return null;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){
var G__2444__2445 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2444__2445))
{var n__2446 = cljs.core.first.call(null,G__2444__2445);
var G__2444__2447 = G__2444__2445;

while(true){
goog.style.setStyle.call(null,n__2446,cljs.core.name.call(null,name),value);
var temp__3698__auto____2448 = cljs.core.next.call(null,G__2444__2447);

if(cljs.core.truth_(temp__3698__auto____2448))
{var G__2444__2449 = temp__3698__auto____2448;

{
var G__2450 = cljs.core.first.call(null,G__2444__2449);
var G__2451 = G__2444__2449;
n__2446 = G__2450;
G__2444__2447 = G__2451;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){
var G__2452__2453 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2452__2453))
{var n__2454 = cljs.core.first.call(null,G__2452__2453);
var G__2452__2455 = G__2452__2453;

while(true){
n__2454.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____2456 = cljs.core.next.call(null,G__2452__2455);

if(cljs.core.truth_(temp__3698__auto____2456))
{var G__2452__2457 = temp__3698__auto____2456;

{
var G__2458 = cljs.core.first.call(null,G__2452__2457);
var G__2459 = G__2452__2457;
n__2454 = G__2458;
G__2452__2455 = G__2459;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__2460__2461 = pair.split(/\s*:\s*/);
var k__2462 = cljs.core.nth.call(null,vec__2460__2461,0,null);
var v__2463 = cljs.core.nth.call(null,vec__2460__2461,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____2464 = k__2462;

if(cljs.core.truth_(and__3546__auto____2464))
{return v__2463;
} else
{return and__3546__auto____2464;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__2462.toLowerCase()),v__2463);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
return domina.parse_style_attributes.call(null,domina.attr.call(null,content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__2466 = domina.single_node.call(null,content);
var attrs__2467 = node__2466.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__2465_SHARP_){
var attr__2468 = attrs__2467.item(p1__2465_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__2468.nodeName.toLowerCase())],[attr__2468.nodeValue]);
}),cljs.core.range.call(null,attrs__2467.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__2469__2470 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__2469__2470))
{var G__2472__2474 = cljs.core.first.call(null,G__2469__2470);
var vec__2473__2475 = G__2472__2474;
var name__2476 = cljs.core.nth.call(null,vec__2473__2475,0,null);
var value__2477 = cljs.core.nth.call(null,vec__2473__2475,1,null);
var G__2469__2478 = G__2469__2470;

var G__2472__2479 = G__2472__2474;
var G__2469__2480 = G__2469__2478;

while(true){
var vec__2481__2482 = G__2472__2479;
var name__2483 = cljs.core.nth.call(null,vec__2481__2482,0,null);
var value__2484 = cljs.core.nth.call(null,vec__2481__2482,1,null);
var G__2469__2485 = G__2469__2480;

domina.set_style_BANG_.call(null,content,name__2483,value__2484);
var temp__3698__auto____2486 = cljs.core.next.call(null,G__2469__2485);

if(cljs.core.truth_(temp__3698__auto____2486))
{var G__2469__2487 = temp__3698__auto____2486;

{
var G__2488 = cljs.core.first.call(null,G__2469__2487);
var G__2489 = G__2469__2487;
G__2472__2479 = G__2488;
G__2469__2480 = G__2489;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Sets the specified CSS styles fpr each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){
var G__2490__2491 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2490__2491))
{var G__2493__2495 = cljs.core.first.call(null,G__2490__2491);
var vec__2494__2496 = G__2493__2495;
var name__2497 = cljs.core.nth.call(null,vec__2494__2496,0,null);
var value__2498 = cljs.core.nth.call(null,vec__2494__2496,1,null);
var G__2490__2499 = G__2490__2491;

var G__2493__2500 = G__2493__2495;
var G__2490__2501 = G__2490__2499;

while(true){
var vec__2502__2503 = G__2493__2500;
var name__2504 = cljs.core.nth.call(null,vec__2502__2503,0,null);
var value__2505 = cljs.core.nth.call(null,vec__2502__2503,1,null);
var G__2490__2506 = G__2490__2501;

domina.set_attr_BANG_.call(null,content,name__2504,value__2505);
var temp__3698__auto____2507 = cljs.core.next.call(null,G__2490__2506);

if(cljs.core.truth_(temp__3698__auto____2507))
{var G__2490__2508 = temp__3698__auto____2507;

{
var G__2509 = cljs.core.first.call(null,G__2490__2508);
var G__2510 = G__2490__2508;
G__2493__2500 = G__2509;
G__2490__2501 = G__2510;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){
return goog.dom.classes.has.call(null,domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__2511__2512 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2511__2512))
{var node__2513 = cljs.core.first.call(null,G__2511__2512);
var G__2511__2514 = G__2511__2512;

while(true){
goog.dom.classes.add.call(null,node__2513,class$);
var temp__3698__auto____2515 = cljs.core.next.call(null,G__2511__2514);

if(cljs.core.truth_(temp__3698__auto____2515))
{var G__2511__2516 = temp__3698__auto____2515;

{
var G__2517 = cljs.core.first.call(null,G__2511__2516);
var G__2518 = G__2511__2516;
node__2513 = G__2517;
G__2511__2514 = G__2518;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){
var G__2519__2520 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2519__2520))
{var node__2521 = cljs.core.first.call(null,G__2519__2520);
var G__2519__2522 = G__2519__2520;

while(true){
goog.dom.classes.remove.call(null,node__2521,class$);
var temp__3698__auto____2523 = cljs.core.next.call(null,G__2519__2522);

if(cljs.core.truth_(temp__3698__auto____2523))
{var G__2519__2524 = temp__3698__auto____2523;

{
var G__2525 = cljs.core.first.call(null,G__2519__2524);
var G__2526 = G__2519__2524;
node__2521 = G__2525;
G__2519__2522 = G__2526;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get.call(null,domina.single_node.call(null,content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace and normalize line breaks (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__2527 = (function (content){
return text.call(null,content,true);
});
var text__2528 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.dom.getTextContent.call(null,domina.single_node.call(null,content));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__2527.call(this,content);
case  2 :
return text__2528.call(this,content,normalize);
}
throw('Invalid arity: ' + arguments.length);
};
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__2530__2531 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2530__2531))
{var node__2532 = cljs.core.first.call(null,G__2530__2531);
var G__2530__2533 = G__2530__2531;

while(true){
goog.dom.setTextContent.call(null,node__2532,value);
var temp__3698__auto____2534 = cljs.core.next.call(null,G__2530__2533);

if(cljs.core.truth_(temp__3698__auto____2534))
{var G__2530__2535 = temp__3698__auto____2534;

{
var G__2536 = cljs.core.first.call(null,G__2530__2535);
var G__2537 = G__2530__2535;
node__2532 = G__2536;
G__2530__2533 = G__2537;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){
return goog.dom.forms.getValue.call(null,domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__2538__2539 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2538__2539))
{var node__2540 = cljs.core.first.call(null,G__2538__2539);
var G__2538__2541 = G__2538__2539;

while(true){
goog.dom.forms.setValue.call(null,node__2540,value);
var temp__3698__auto____2542 = cljs.core.next.call(null,G__2538__2541);

if(cljs.core.truth_(temp__3698__auto____2542))
{var G__2538__2543 = temp__3698__auto____2542;

{
var G__2544 = cljs.core.first.call(null,G__2538__2543);
var G__2545 = G__2538__2543;
node__2540 = G__2544;
G__2538__2541 = G__2545;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){
return domina.single_node.call(null,content).innerHTML;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,value){
var G__2546__2547 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2546__2547))
{var node__2548 = cljs.core.first.call(null,G__2546__2547);
var G__2546__2549 = G__2546__2547;

while(true){
node__2548.innerHTML = value;
var temp__3698__auto____2550 = cljs.core.next.call(null,G__2546__2549);

if(cljs.core.truth_(temp__3698__auto____2550))
{var G__2546__2551 = temp__3698__auto____2550;

{
var G__2552 = cljs.core.first.call(null,G__2546__2551);
var G__2553 = G__2546__2551;
node__2548 = G__2552;
G__2546__2549 = G__2553;
continue;
}
} else
{}
break;
}
} else
{}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__2554 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__2554))))
{var G__2555__2556 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__2555__2556))
{var child__2557 = cljs.core.first.call(null,G__2555__2556);
var G__2555__2558 = G__2555__2556;

while(true){
f.call(null,cljs.core.first.call(null,parents__2554),child__2557);
var temp__3698__auto____2559 = cljs.core.next.call(null,G__2555__2558);

if(cljs.core.truth_(temp__3698__auto____2559))
{var G__2555__2560 = temp__3698__auto____2559;

{
var G__2573 = cljs.core.first.call(null,G__2555__2560);
var G__2574 = G__2555__2560;
child__2557 = G__2573;
G__2555__2558 = G__2574;
continue;
}
} else
{}
break;
}
} else
{}
var G__2561__2563 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__2554));

if(cljs.core.truth_(G__2561__2563))
{var parent__2564 = cljs.core.first.call(null,G__2561__2563);
var G__2561__2565 = G__2561__2563;

while(true){
var G__2562__2566 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__2562__2566))
{var child__2567 = cljs.core.first.call(null,G__2562__2566);
var G__2562__2568 = G__2562__2566;

while(true){
f.call(null,parent__2564,child__2567);
var temp__3698__auto____2569 = cljs.core.next.call(null,G__2562__2568);

if(cljs.core.truth_(temp__3698__auto____2569))
{var G__2562__2570 = temp__3698__auto____2569;

{
var G__2575 = cljs.core.first.call(null,G__2562__2570);
var G__2576 = G__2562__2570;
child__2567 = G__2575;
G__2562__2568 = G__2576;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2571 = cljs.core.next.call(null,G__2561__2565);

if(cljs.core.truth_(temp__3698__auto____2571))
{var G__2561__2572 = temp__3698__auto____2571;

{
var G__2577 = cljs.core.first.call(null,G__2561__2572);
var G__2578 = G__2561__2572;
parent__2564 = G__2577;
G__2561__2565 = G__2578;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__2579 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2580 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nodelist.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nodelist__2579.call(this,nl);
case  2 :
return lazy_nodelist__2580.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
return cljs.core.seq.call(null,content);
}));
(domina.single_node["_"] = (function (content){
return cljs.core.first.call(null,content);
}));
Node.prototype.domina$DomContent$ = true;
Node.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
Node.prototype.domina$DomContent$single_node = (function (content){
return content;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.cons.call(null,goog.dom.htmlToDocumentFragment.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return goog.dom.htmlToDocumentFragment.call(null,s);
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2582 = null;
var G__2582__2583 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2582__2584 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2582 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2582__2583.call(this,nodelist,n);
case  3 :
return G__2582__2584.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2582;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2586 = null;
var G__2586__2587 = (function (coll,n){
return coll.item(n);
});
var G__2586__2588 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__2586 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2586__2587.call(this,coll,n);
case  3 :
return G__2586__2588.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2586;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
