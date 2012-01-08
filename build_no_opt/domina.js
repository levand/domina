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
if(cljs.core.truth_((function (){var and__3546__auto____2583 = content;

if(cljs.core.truth_(and__3546__auto____2583))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____2583;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____2584 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____2584))
{return or__3548__auto____2584;
} else
{var or__3548__auto____2585 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____2585))
{return or__3548__auto____2585;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____2586 = nodeseq;

if(cljs.core.truth_(and__3546__auto____2586))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____2586;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____2587 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____2587))
{return or__3548__auto____2587;
} else
{var or__3548__auto____2588 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____2588))
{return or__3548__auto____2588;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2589)))
{
/**
* @constructor
*/
domina.t2589 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t2589.prototype.domina$DomContent$ = true;
domina.t2589.prototype.domina$DomContent$nodes = (function (_){
var this__2590 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__2590.class_name));
});
domina.t2589.prototype.domina$DomContent$single_node = (function (_){
var this__2591 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__2591.class_name));
});
} else
{}
return (new domina.t2589(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__2592_SHARP_){
return p1__2592_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__2593_SHARP_,p2__2594_SHARP_){
return goog.dom.insertChildAt.call(null,p1__2593_SHARP_,p2__2594_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__2596_SHARP_,p2__2595_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__2595_SHARP_,p1__2596_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2598_SHARP_,p2__2597_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__2597_SHARP_,p1__2598_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2600_SHARP_,p2__2599_SHARP_){
return goog.dom.replaceNode.call(null,p2__2599_SHARP_,p1__2600_SHARP_);
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
var s__2601 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__2601))))
{return s__2601;
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
var G__2602__2603 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2602__2603))
{var n__2604 = cljs.core.first.call(null,G__2602__2603);
var G__2602__2605 = G__2602__2603;

while(true){
goog.style.setStyle.call(null,n__2604,cljs.core.name.call(null,name),value);
var temp__3698__auto____2606 = cljs.core.next.call(null,G__2602__2605);

if(cljs.core.truth_(temp__3698__auto____2606))
{var G__2602__2607 = temp__3698__auto____2606;

{
var G__2608 = cljs.core.first.call(null,G__2602__2607);
var G__2609 = G__2602__2607;
n__2604 = G__2608;
G__2602__2605 = G__2609;
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
var G__2610__2611 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2610__2611))
{var n__2612 = cljs.core.first.call(null,G__2610__2611);
var G__2610__2613 = G__2610__2611;

while(true){
n__2612.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____2614 = cljs.core.next.call(null,G__2610__2613);

if(cljs.core.truth_(temp__3698__auto____2614))
{var G__2610__2615 = temp__3698__auto____2614;

{
var G__2616 = cljs.core.first.call(null,G__2610__2615);
var G__2617 = G__2610__2615;
n__2612 = G__2616;
G__2610__2613 = G__2617;
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
var vec__2618__2619 = pair.split(/\s*:\s*/);
var k__2620 = cljs.core.nth.call(null,vec__2618__2619,0,null);
var v__2621 = cljs.core.nth.call(null,vec__2618__2619,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____2622 = k__2620;

if(cljs.core.truth_(and__3546__auto____2622))
{return v__2621;
} else
{return and__3546__auto____2622;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__2620.toLowerCase()),v__2621);
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
var node__2624 = domina.single_node.call(null,content);
var attrs__2625 = node__2624.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__2623_SHARP_){
var attr__2626 = attrs__2625.item(p1__2623_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__2626.nodeName.toLowerCase())],[attr__2626.nodeValue]);
}),cljs.core.range.call(null,attrs__2625.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__2627__2628 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__2627__2628))
{var G__2630__2632 = cljs.core.first.call(null,G__2627__2628);
var vec__2631__2633 = G__2630__2632;
var name__2634 = cljs.core.nth.call(null,vec__2631__2633,0,null);
var value__2635 = cljs.core.nth.call(null,vec__2631__2633,1,null);
var G__2627__2636 = G__2627__2628;

var G__2630__2637 = G__2630__2632;
var G__2627__2638 = G__2627__2636;

while(true){
var vec__2639__2640 = G__2630__2637;
var name__2641 = cljs.core.nth.call(null,vec__2639__2640,0,null);
var value__2642 = cljs.core.nth.call(null,vec__2639__2640,1,null);
var G__2627__2643 = G__2627__2638;

domina.set_style_BANG_.call(null,content,name__2641,value__2642);
var temp__3698__auto____2644 = cljs.core.next.call(null,G__2627__2643);

if(cljs.core.truth_(temp__3698__auto____2644))
{var G__2627__2645 = temp__3698__auto____2644;

{
var G__2646 = cljs.core.first.call(null,G__2627__2645);
var G__2647 = G__2627__2645;
G__2630__2637 = G__2646;
G__2627__2638 = G__2647;
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
var G__2648__2649 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2648__2649))
{var G__2651__2653 = cljs.core.first.call(null,G__2648__2649);
var vec__2652__2654 = G__2651__2653;
var name__2655 = cljs.core.nth.call(null,vec__2652__2654,0,null);
var value__2656 = cljs.core.nth.call(null,vec__2652__2654,1,null);
var G__2648__2657 = G__2648__2649;

var G__2651__2658 = G__2651__2653;
var G__2648__2659 = G__2648__2657;

while(true){
var vec__2660__2661 = G__2651__2658;
var name__2662 = cljs.core.nth.call(null,vec__2660__2661,0,null);
var value__2663 = cljs.core.nth.call(null,vec__2660__2661,1,null);
var G__2648__2664 = G__2648__2659;

domina.set_attr_BANG_.call(null,content,name__2662,value__2663);
var temp__3698__auto____2665 = cljs.core.next.call(null,G__2648__2664);

if(cljs.core.truth_(temp__3698__auto____2665))
{var G__2648__2666 = temp__3698__auto____2665;

{
var G__2667 = cljs.core.first.call(null,G__2648__2666);
var G__2668 = G__2648__2666;
G__2651__2658 = G__2667;
G__2648__2659 = G__2668;
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
var G__2669__2670 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2669__2670))
{var node__2671 = cljs.core.first.call(null,G__2669__2670);
var G__2669__2672 = G__2669__2670;

while(true){
goog.dom.classes.add.call(null,node__2671,class$);
var temp__3698__auto____2673 = cljs.core.next.call(null,G__2669__2672);

if(cljs.core.truth_(temp__3698__auto____2673))
{var G__2669__2674 = temp__3698__auto____2673;

{
var G__2675 = cljs.core.first.call(null,G__2669__2674);
var G__2676 = G__2669__2674;
node__2671 = G__2675;
G__2669__2672 = G__2676;
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
var G__2677__2678 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2677__2678))
{var node__2679 = cljs.core.first.call(null,G__2677__2678);
var G__2677__2680 = G__2677__2678;

while(true){
goog.dom.classes.remove.call(null,node__2679,class$);
var temp__3698__auto____2681 = cljs.core.next.call(null,G__2677__2680);

if(cljs.core.truth_(temp__3698__auto____2681))
{var G__2677__2682 = temp__3698__auto____2681;

{
var G__2683 = cljs.core.first.call(null,G__2677__2682);
var G__2684 = G__2677__2682;
node__2679 = G__2683;
G__2677__2680 = G__2684;
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
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__2685 = (function (content){
return text.call(null,content,true);
});
var text__2686 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__2685.call(this,content);
case  2 :
return text__2686.call(this,content,normalize);
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
var G__2688__2689 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2688__2689))
{var node__2690 = cljs.core.first.call(null,G__2688__2689);
var G__2688__2691 = G__2688__2689;

while(true){
goog.dom.setTextContent.call(null,node__2690,value);
var temp__3698__auto____2692 = cljs.core.next.call(null,G__2688__2691);

if(cljs.core.truth_(temp__3698__auto____2692))
{var G__2688__2693 = temp__3698__auto____2692;

{
var G__2694 = cljs.core.first.call(null,G__2688__2693);
var G__2695 = G__2688__2693;
node__2690 = G__2694;
G__2688__2691 = G__2695;
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
var G__2696__2697 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2696__2697))
{var node__2698 = cljs.core.first.call(null,G__2696__2697);
var G__2696__2699 = G__2696__2697;

while(true){
goog.dom.forms.setValue.call(null,node__2698,value);
var temp__3698__auto____2700 = cljs.core.next.call(null,G__2696__2699);

if(cljs.core.truth_(temp__3698__auto____2700))
{var G__2696__2701 = temp__3698__auto____2700;

{
var G__2702 = cljs.core.first.call(null,G__2696__2701);
var G__2703 = G__2696__2701;
node__2698 = G__2702;
G__2696__2699 = G__2703;
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
var G__2704__2705 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2704__2705))
{var node__2706 = cljs.core.first.call(null,G__2704__2705);
var G__2704__2707 = G__2704__2705;

while(true){
node__2706.innerHTML = value;
var temp__3698__auto____2708 = cljs.core.next.call(null,G__2704__2707);

if(cljs.core.truth_(temp__3698__auto____2708))
{var G__2704__2709 = temp__3698__auto____2708;

{
var G__2710 = cljs.core.first.call(null,G__2704__2709);
var G__2711 = G__2704__2709;
node__2706 = G__2710;
G__2704__2707 = G__2711;
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
var parents__2712 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__2712))))
{var G__2713__2714 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__2713__2714))
{var child__2715 = cljs.core.first.call(null,G__2713__2714);
var G__2713__2716 = G__2713__2714;

while(true){
f.call(null,cljs.core.first.call(null,parents__2712),child__2715);
var temp__3698__auto____2717 = cljs.core.next.call(null,G__2713__2716);

if(cljs.core.truth_(temp__3698__auto____2717))
{var G__2713__2718 = temp__3698__auto____2717;

{
var G__2731 = cljs.core.first.call(null,G__2713__2718);
var G__2732 = G__2713__2718;
child__2715 = G__2731;
G__2713__2716 = G__2732;
continue;
}
} else
{}
break;
}
} else
{}
var G__2719__2721 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__2712));

if(cljs.core.truth_(G__2719__2721))
{var parent__2722 = cljs.core.first.call(null,G__2719__2721);
var G__2719__2723 = G__2719__2721;

while(true){
var G__2720__2724 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__2720__2724))
{var child__2725 = cljs.core.first.call(null,G__2720__2724);
var G__2720__2726 = G__2720__2724;

while(true){
f.call(null,parent__2722,child__2725);
var temp__3698__auto____2727 = cljs.core.next.call(null,G__2720__2726);

if(cljs.core.truth_(temp__3698__auto____2727))
{var G__2720__2728 = temp__3698__auto____2727;

{
var G__2733 = cljs.core.first.call(null,G__2720__2728);
var G__2734 = G__2720__2728;
child__2725 = G__2733;
G__2720__2726 = G__2734;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2729 = cljs.core.next.call(null,G__2719__2723);

if(cljs.core.truth_(temp__3698__auto____2729))
{var G__2719__2730 = temp__3698__auto____2729;

{
var G__2735 = cljs.core.first.call(null,G__2719__2730);
var G__2736 = G__2719__2730;
parent__2722 = G__2735;
G__2719__2723 = G__2736;
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
var lazy_nodelist__2737 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2738 = (function (nl,n){
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
return lazy_nodelist__2737.call(this,nl);
case  2 :
return lazy_nodelist__2738.call(this,nl,n);
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
Element.prototype.domina$DomContent$ = true;
Element.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
Element.prototype.domina$DomContent$single_node = (function (content){
return content;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.cons.call(null,goog.dom.htmlToDocumentFragment.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return goog.dom.htmlToDocumentFragment.call(null,s);
}));
domina.nodelist_icounted_impl = cljs.core.ObjMap.fromObject(["﷐'-count"],{"﷐'-count":(function nodelist_icounted_impl(nodelist){
return nodelist.length;
})});
domina.nodelist_iindexed_impl = cljs.core.ObjMap.fromObject(["﷐'-nth"],{"﷐'-nth":(function() {
var nodelist_iindexed_impl = null;
var nodelist_iindexed_impl__2740 = (function (nodelist,n){
return nodelist.item(n);
});
var nodelist_iindexed_impl__2741 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
nodelist_iindexed_impl = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return nodelist_iindexed_impl__2740.call(this,nodelist,n);
case  3 :
return nodelist_iindexed_impl__2741.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nodelist_iindexed_impl;
})()
});
domina.nodelist_iseqable_impl = cljs.core.ObjMap.fromObject(["﷐'-seq"],{"﷐'-seq":(function nodelist_iseqable_impl(nodelist){
return domina.lazy_nodelist.call(null,nodelist);
})});
NodeList.prototype.domina$nodelist_isequable_impl$ = true;
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.domina$nodelist_iindexed_impl$ = true;
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.domina$nodelist_icounted_impl$ = true;
NodeList.prototype.cljs$core$ICounted$ = true;
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.domina$nodelist_isequable_impl$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.domina$nodelist_iindexed_impl$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.domina$nodelist_icounted_impl$ = true;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2743 = null;
var G__2743__2744 = (function (coll,n){
return coll.item(n);
});
var G__2743__2745 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__2743 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2743__2744.call(this,coll,n);
case  3 :
return G__2743__2745.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2743;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
