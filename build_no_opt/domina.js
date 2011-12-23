goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____2457 = content;

if(cljs.core.truth_(and__3546__auto____2457))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____2457;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____2458 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____2458))
{return or__3548__auto____2458;
} else
{var or__3548__auto____2459 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____2459))
{return or__3548__auto____2459;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____2460 = nodeseq;

if(cljs.core.truth_(and__3546__auto____2460))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____2460;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____2461 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____2461))
{return or__3548__auto____2461;
} else
{var or__3548__auto____2462 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____2462))
{return or__3548__auto____2462;
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
var xpath__2466 = (function (expr){
return xpath.call(null,document,expr);
});
var xpath__2467 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2463)))
{
/**
* @constructor
*/
domina.t2463 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.t2463.prototype.domina$DomContent$ = true;
domina.t2463.prototype.domina$DomContent$nodes = (function (_){
var this__2464 = this;
return cljs.core.mapcat.call(null,(function (p1__2455_SHARP_){
return goog.dom.xml.selectNodes.call(null,p1__2455_SHARP_,this__2464.expr);
}),domina.nodes.call(null,this__2464.base));
});
domina.t2463.prototype.domina$DomContent$single_node = (function (_){
var this__2465 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__2456_SHARP_){
return goog.dom.xml.selectSingleNode.call(null,p1__2456_SHARP_,this__2465.expr);
}),domina.nodes.call(null,this__2465.base))));
});
} else
{}
return (new domina.t2463(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__2466.call(this,base);
case  2 :
return xpath__2467.call(this,base,expr);
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
return goog.dom.getElement.call(null,cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2469)))
{
/**
* @constructor
*/
domina.t2469 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t2469.prototype.domina$DomContent$ = true;
domina.t2469.prototype.domina$DomContent$nodes = (function (_){
var this__2470 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__2470.class_name));
});
domina.t2469.prototype.domina$DomContent$single_node = (function (_){
var this__2471 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__2471.class_name));
});
} else
{}
return (new domina.t2469(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__2472_SHARP_){
return p1__2472_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__2473_SHARP_,p2__2474_SHARP_){
return goog.dom.insertChildAt.call(null,p1__2473_SHARP_,p2__2474_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__2476_SHARP_,p2__2475_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__2475_SHARP_,p1__2476_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2478_SHARP_,p2__2477_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__2477_SHARP_,p1__2478_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2480_SHARP_,p2__2479_SHARP_){
return goog.dom.replaceNode.call(null,p2__2479_SHARP_,p1__2480_SHARP_);
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
var s__2481 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__2481))))
{return s__2481;
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
var G__2482__2483 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2482__2483))
{var n__2484 = cljs.core.first.call(null,G__2482__2483);
var G__2482__2485 = G__2482__2483;

while(true){
goog.style.setStyle.call(null,n__2484,cljs.core.name.call(null,name),value);
var temp__3698__auto____2486 = cljs.core.next.call(null,G__2482__2485);

if(cljs.core.truth_(temp__3698__auto____2486))
{var G__2482__2487 = temp__3698__auto____2486;

{
var G__2488 = cljs.core.first.call(null,G__2482__2487);
var G__2489 = G__2482__2487;
n__2484 = G__2488;
G__2482__2485 = G__2489;
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
var G__2490__2491 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2490__2491))
{var n__2492 = cljs.core.first.call(null,G__2490__2491);
var G__2490__2493 = G__2490__2491;

while(true){
n__2492.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____2494 = cljs.core.next.call(null,G__2490__2493);

if(cljs.core.truth_(temp__3698__auto____2494))
{var G__2490__2495 = temp__3698__auto____2494;

{
var G__2496 = cljs.core.first.call(null,G__2490__2495);
var G__2497 = G__2490__2495;
n__2492 = G__2496;
G__2490__2493 = G__2497;
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
var vec__2498__2499 = pair.split(/\s*:\s*/);
var k__2500 = cljs.core.nth.call(null,vec__2498__2499,0,null);
var v__2501 = cljs.core.nth.call(null,vec__2498__2499,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____2502 = k__2500;

if(cljs.core.truth_(and__3546__auto____2502))
{return v__2501;
} else
{return and__3546__auto____2502;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__2500.toLowerCase()),v__2501);
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
var node__2504 = domina.single_node.call(null,content);
var attrs__2505 = node__2504.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__2503_SHARP_){
var attr__2506 = attrs__2505.item(p1__2503_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__2506.nodeName.toLowerCase())],[attr__2506.nodeValue]);
}),cljs.core.range.call(null,attrs__2505.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__2507__2508 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__2507__2508))
{var G__2510__2512 = cljs.core.first.call(null,G__2507__2508);
var vec__2511__2513 = G__2510__2512;
var name__2514 = cljs.core.nth.call(null,vec__2511__2513,0,null);
var value__2515 = cljs.core.nth.call(null,vec__2511__2513,1,null);
var G__2507__2516 = G__2507__2508;

var G__2510__2517 = G__2510__2512;
var G__2507__2518 = G__2507__2516;

while(true){
var vec__2519__2520 = G__2510__2517;
var name__2521 = cljs.core.nth.call(null,vec__2519__2520,0,null);
var value__2522 = cljs.core.nth.call(null,vec__2519__2520,1,null);
var G__2507__2523 = G__2507__2518;

domina.set_style_BANG_.call(null,content,name__2521,value__2522);
var temp__3698__auto____2524 = cljs.core.next.call(null,G__2507__2523);

if(cljs.core.truth_(temp__3698__auto____2524))
{var G__2507__2525 = temp__3698__auto____2524;

{
var G__2526 = cljs.core.first.call(null,G__2507__2525);
var G__2527 = G__2507__2525;
G__2510__2517 = G__2526;
G__2507__2518 = G__2527;
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
var G__2528__2529 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2528__2529))
{var G__2531__2533 = cljs.core.first.call(null,G__2528__2529);
var vec__2532__2534 = G__2531__2533;
var name__2535 = cljs.core.nth.call(null,vec__2532__2534,0,null);
var value__2536 = cljs.core.nth.call(null,vec__2532__2534,1,null);
var G__2528__2537 = G__2528__2529;

var G__2531__2538 = G__2531__2533;
var G__2528__2539 = G__2528__2537;

while(true){
var vec__2540__2541 = G__2531__2538;
var name__2542 = cljs.core.nth.call(null,vec__2540__2541,0,null);
var value__2543 = cljs.core.nth.call(null,vec__2540__2541,1,null);
var G__2528__2544 = G__2528__2539;

domina.set_attr_BANG_.call(null,content,name__2542,value__2543);
var temp__3698__auto____2545 = cljs.core.next.call(null,G__2528__2544);

if(cljs.core.truth_(temp__3698__auto____2545))
{var G__2528__2546 = temp__3698__auto____2545;

{
var G__2547 = cljs.core.first.call(null,G__2528__2546);
var G__2548 = G__2528__2546;
G__2531__2538 = G__2547;
G__2528__2539 = G__2548;
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
var G__2549__2550 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2549__2550))
{var node__2551 = cljs.core.first.call(null,G__2549__2550);
var G__2549__2552 = G__2549__2550;

while(true){
goog.dom.classes.add.call(null,node__2551,class$);
var temp__3698__auto____2553 = cljs.core.next.call(null,G__2549__2552);

if(cljs.core.truth_(temp__3698__auto____2553))
{var G__2549__2554 = temp__3698__auto____2553;

{
var G__2555 = cljs.core.first.call(null,G__2549__2554);
var G__2556 = G__2549__2554;
node__2551 = G__2555;
G__2549__2552 = G__2556;
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
var G__2557__2558 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2557__2558))
{var node__2559 = cljs.core.first.call(null,G__2557__2558);
var G__2557__2560 = G__2557__2558;

while(true){
goog.dom.classes.remove.call(null,node__2559,class$);
var temp__3698__auto____2561 = cljs.core.next.call(null,G__2557__2560);

if(cljs.core.truth_(temp__3698__auto____2561))
{var G__2557__2562 = temp__3698__auto____2561;

{
var G__2563 = cljs.core.first.call(null,G__2557__2562);
var G__2564 = G__2557__2562;
node__2559 = G__2563;
G__2557__2560 = G__2564;
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
var text__2565 = (function (content){
return text.call(null,content,true);
});
var text__2566 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.dom.getTextContent.call(null,domina.single_node.call(null,content));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__2565.call(this,content);
case  2 :
return text__2566.call(this,content,normalize);
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
var G__2568__2569 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2568__2569))
{var node__2570 = cljs.core.first.call(null,G__2568__2569);
var G__2568__2571 = G__2568__2569;

while(true){
goog.dom.setTextContent.call(null,node__2570,value);
var temp__3698__auto____2572 = cljs.core.next.call(null,G__2568__2571);

if(cljs.core.truth_(temp__3698__auto____2572))
{var G__2568__2573 = temp__3698__auto____2572;

{
var G__2574 = cljs.core.first.call(null,G__2568__2573);
var G__2575 = G__2568__2573;
node__2570 = G__2574;
G__2568__2571 = G__2575;
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
var G__2576__2577 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2576__2577))
{var node__2578 = cljs.core.first.call(null,G__2576__2577);
var G__2576__2579 = G__2576__2577;

while(true){
goog.dom.forms.setValue.call(null,node__2578,value);
var temp__3698__auto____2580 = cljs.core.next.call(null,G__2576__2579);

if(cljs.core.truth_(temp__3698__auto____2580))
{var G__2576__2581 = temp__3698__auto____2580;

{
var G__2582 = cljs.core.first.call(null,G__2576__2581);
var G__2583 = G__2576__2581;
node__2578 = G__2582;
G__2576__2579 = G__2583;
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
var G__2584__2585 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2584__2585))
{var node__2586 = cljs.core.first.call(null,G__2584__2585);
var G__2584__2587 = G__2584__2585;

while(true){
node__2586.innerHTML = value;
var temp__3698__auto____2588 = cljs.core.next.call(null,G__2584__2587);

if(cljs.core.truth_(temp__3698__auto____2588))
{var G__2584__2589 = temp__3698__auto____2588;

{
var G__2590 = cljs.core.first.call(null,G__2584__2589);
var G__2591 = G__2584__2589;
node__2586 = G__2590;
G__2584__2587 = G__2591;
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
var parents__2592 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__2592))))
{var G__2593__2594 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__2593__2594))
{var child__2595 = cljs.core.first.call(null,G__2593__2594);
var G__2593__2596 = G__2593__2594;

while(true){
f.call(null,cljs.core.first.call(null,parents__2592),child__2595);
var temp__3698__auto____2597 = cljs.core.next.call(null,G__2593__2596);

if(cljs.core.truth_(temp__3698__auto____2597))
{var G__2593__2598 = temp__3698__auto____2597;

{
var G__2611 = cljs.core.first.call(null,G__2593__2598);
var G__2612 = G__2593__2598;
child__2595 = G__2611;
G__2593__2596 = G__2612;
continue;
}
} else
{}
break;
}
} else
{}
var G__2599__2601 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__2592));

if(cljs.core.truth_(G__2599__2601))
{var parent__2602 = cljs.core.first.call(null,G__2599__2601);
var G__2599__2603 = G__2599__2601;

while(true){
var G__2600__2604 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__2600__2604))
{var child__2605 = cljs.core.first.call(null,G__2600__2604);
var G__2600__2606 = G__2600__2604;

while(true){
f.call(null,parent__2602,child__2605);
var temp__3698__auto____2607 = cljs.core.next.call(null,G__2600__2606);

if(cljs.core.truth_(temp__3698__auto____2607))
{var G__2600__2608 = temp__3698__auto____2607;

{
var G__2613 = cljs.core.first.call(null,G__2600__2608);
var G__2614 = G__2600__2608;
child__2605 = G__2613;
G__2600__2606 = G__2614;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2609 = cljs.core.next.call(null,G__2599__2603);

if(cljs.core.truth_(temp__3698__auto____2609))
{var G__2599__2610 = temp__3698__auto____2609;

{
var G__2615 = cljs.core.first.call(null,G__2599__2610);
var G__2616 = G__2599__2610;
parent__2602 = G__2615;
G__2599__2603 = G__2616;
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
var lazy_nodelist__2617 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2618 = (function (nl,n){
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
return lazy_nodelist__2617.call(this,nl);
case  2 :
return lazy_nodelist__2618.call(this,nl,n);
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
var G__2620 = null;
var G__2620__2621 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2620__2622 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2620 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2620__2621.call(this,nodelist,n);
case  3 :
return G__2620__2622.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2620;
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
var G__2624 = null;
var G__2624__2625 = (function (coll,n){
return coll.item(n);
});
var G__2624__2626 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__2624 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2624__2625.call(this,coll,n);
case  3 :
return G__2624__2626.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2624;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
