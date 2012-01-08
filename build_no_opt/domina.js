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
if(cljs.core.truth_((function (){var and__3546__auto____2584 = content;

if(cljs.core.truth_(and__3546__auto____2584))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____2584;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____2585 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____2585))
{return or__3548__auto____2585;
} else
{var or__3548__auto____2586 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____2586))
{return or__3548__auto____2586;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____2587 = nodeseq;

if(cljs.core.truth_(and__3546__auto____2587))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____2587;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____2588 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____2588))
{return or__3548__auto____2588;
} else
{var or__3548__auto____2589 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____2589))
{return or__3548__auto____2589;
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2590)))
{
/**
* @constructor
*/
domina.t2590 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t2590.prototype.domina$DomContent$ = true;
domina.t2590.prototype.domina$DomContent$nodes = (function (_){
var this__2591 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__2591.class_name));
});
domina.t2590.prototype.domina$DomContent$single_node = (function (_){
var this__2592 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__2592.class_name));
});
} else
{}
return (new domina.t2590(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__2593_SHARP_){
return p1__2593_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__2594_SHARP_,p2__2595_SHARP_){
return goog.dom.insertChildAt.call(null,p1__2594_SHARP_,p2__2595_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__2597_SHARP_,p2__2596_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__2596_SHARP_,p1__2597_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2599_SHARP_,p2__2598_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__2598_SHARP_,p1__2599_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2601_SHARP_,p2__2600_SHARP_){
return goog.dom.replaceNode.call(null,p2__2600_SHARP_,p1__2601_SHARP_);
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
var s__2602 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__2602))))
{return s__2602;
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
var G__2603__2604 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2603__2604))
{var n__2605 = cljs.core.first.call(null,G__2603__2604);
var G__2603__2606 = G__2603__2604;

while(true){
goog.style.setStyle.call(null,n__2605,cljs.core.name.call(null,name),value);
var temp__3698__auto____2607 = cljs.core.next.call(null,G__2603__2606);

if(cljs.core.truth_(temp__3698__auto____2607))
{var G__2603__2608 = temp__3698__auto____2607;

{
var G__2609 = cljs.core.first.call(null,G__2603__2608);
var G__2610 = G__2603__2608;
n__2605 = G__2609;
G__2603__2606 = G__2610;
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
var G__2611__2612 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2611__2612))
{var n__2613 = cljs.core.first.call(null,G__2611__2612);
var G__2611__2614 = G__2611__2612;

while(true){
n__2613.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____2615 = cljs.core.next.call(null,G__2611__2614);

if(cljs.core.truth_(temp__3698__auto____2615))
{var G__2611__2616 = temp__3698__auto____2615;

{
var G__2617 = cljs.core.first.call(null,G__2611__2616);
var G__2618 = G__2611__2616;
n__2613 = G__2617;
G__2611__2614 = G__2618;
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
var vec__2619__2620 = pair.split(/\s*:\s*/);
var k__2621 = cljs.core.nth.call(null,vec__2619__2620,0,null);
var v__2622 = cljs.core.nth.call(null,vec__2619__2620,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____2623 = k__2621;

if(cljs.core.truth_(and__3546__auto____2623))
{return v__2622;
} else
{return and__3546__auto____2623;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__2621.toLowerCase()),v__2622);
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
var node__2625 = domina.single_node.call(null,content);
var attrs__2626 = node__2625.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__2624_SHARP_){
var attr__2627 = attrs__2626.item(p1__2624_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__2627.nodeName.toLowerCase())],[attr__2627.nodeValue]);
}),cljs.core.range.call(null,attrs__2626.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__2628__2629 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__2628__2629))
{var G__2631__2633 = cljs.core.first.call(null,G__2628__2629);
var vec__2632__2634 = G__2631__2633;
var name__2635 = cljs.core.nth.call(null,vec__2632__2634,0,null);
var value__2636 = cljs.core.nth.call(null,vec__2632__2634,1,null);
var G__2628__2637 = G__2628__2629;

var G__2631__2638 = G__2631__2633;
var G__2628__2639 = G__2628__2637;

while(true){
var vec__2640__2641 = G__2631__2638;
var name__2642 = cljs.core.nth.call(null,vec__2640__2641,0,null);
var value__2643 = cljs.core.nth.call(null,vec__2640__2641,1,null);
var G__2628__2644 = G__2628__2639;

domina.set_style_BANG_.call(null,content,name__2642,value__2643);
var temp__3698__auto____2645 = cljs.core.next.call(null,G__2628__2644);

if(cljs.core.truth_(temp__3698__auto____2645))
{var G__2628__2646 = temp__3698__auto____2645;

{
var G__2647 = cljs.core.first.call(null,G__2628__2646);
var G__2648 = G__2628__2646;
G__2631__2638 = G__2647;
G__2628__2639 = G__2648;
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
var G__2649__2650 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2649__2650))
{var G__2652__2654 = cljs.core.first.call(null,G__2649__2650);
var vec__2653__2655 = G__2652__2654;
var name__2656 = cljs.core.nth.call(null,vec__2653__2655,0,null);
var value__2657 = cljs.core.nth.call(null,vec__2653__2655,1,null);
var G__2649__2658 = G__2649__2650;

var G__2652__2659 = G__2652__2654;
var G__2649__2660 = G__2649__2658;

while(true){
var vec__2661__2662 = G__2652__2659;
var name__2663 = cljs.core.nth.call(null,vec__2661__2662,0,null);
var value__2664 = cljs.core.nth.call(null,vec__2661__2662,1,null);
var G__2649__2665 = G__2649__2660;

domina.set_attr_BANG_.call(null,content,name__2663,value__2664);
var temp__3698__auto____2666 = cljs.core.next.call(null,G__2649__2665);

if(cljs.core.truth_(temp__3698__auto____2666))
{var G__2649__2667 = temp__3698__auto____2666;

{
var G__2668 = cljs.core.first.call(null,G__2649__2667);
var G__2669 = G__2649__2667;
G__2652__2659 = G__2668;
G__2649__2660 = G__2669;
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
var G__2670__2671 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2670__2671))
{var node__2672 = cljs.core.first.call(null,G__2670__2671);
var G__2670__2673 = G__2670__2671;

while(true){
goog.dom.classes.add.call(null,node__2672,class$);
var temp__3698__auto____2674 = cljs.core.next.call(null,G__2670__2673);

if(cljs.core.truth_(temp__3698__auto____2674))
{var G__2670__2675 = temp__3698__auto____2674;

{
var G__2676 = cljs.core.first.call(null,G__2670__2675);
var G__2677 = G__2670__2675;
node__2672 = G__2676;
G__2670__2673 = G__2677;
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
var G__2678__2679 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2678__2679))
{var node__2680 = cljs.core.first.call(null,G__2678__2679);
var G__2678__2681 = G__2678__2679;

while(true){
goog.dom.classes.remove.call(null,node__2680,class$);
var temp__3698__auto____2682 = cljs.core.next.call(null,G__2678__2681);

if(cljs.core.truth_(temp__3698__auto____2682))
{var G__2678__2683 = temp__3698__auto____2682;

{
var G__2684 = cljs.core.first.call(null,G__2678__2683);
var G__2685 = G__2678__2683;
node__2680 = G__2684;
G__2678__2681 = G__2685;
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
var text__2686 = (function (content){
return text.call(null,content,true);
});
var text__2687 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__2686.call(this,content);
case  2 :
return text__2687.call(this,content,normalize);
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
var G__2689__2690 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2689__2690))
{var node__2691 = cljs.core.first.call(null,G__2689__2690);
var G__2689__2692 = G__2689__2690;

while(true){
goog.dom.setTextContent.call(null,node__2691,value);
var temp__3698__auto____2693 = cljs.core.next.call(null,G__2689__2692);

if(cljs.core.truth_(temp__3698__auto____2693))
{var G__2689__2694 = temp__3698__auto____2693;

{
var G__2695 = cljs.core.first.call(null,G__2689__2694);
var G__2696 = G__2689__2694;
node__2691 = G__2695;
G__2689__2692 = G__2696;
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
var G__2697__2698 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2697__2698))
{var node__2699 = cljs.core.first.call(null,G__2697__2698);
var G__2697__2700 = G__2697__2698;

while(true){
goog.dom.forms.setValue.call(null,node__2699,value);
var temp__3698__auto____2701 = cljs.core.next.call(null,G__2697__2700);

if(cljs.core.truth_(temp__3698__auto____2701))
{var G__2697__2702 = temp__3698__auto____2701;

{
var G__2703 = cljs.core.first.call(null,G__2697__2702);
var G__2704 = G__2697__2702;
node__2699 = G__2703;
G__2697__2700 = G__2704;
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
var G__2705__2706 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2705__2706))
{var node__2707 = cljs.core.first.call(null,G__2705__2706);
var G__2705__2708 = G__2705__2706;

while(true){
node__2707.innerHTML = value;
var temp__3698__auto____2709 = cljs.core.next.call(null,G__2705__2708);

if(cljs.core.truth_(temp__3698__auto____2709))
{var G__2705__2710 = temp__3698__auto____2709;

{
var G__2711 = cljs.core.first.call(null,G__2705__2710);
var G__2712 = G__2705__2710;
node__2707 = G__2711;
G__2705__2708 = G__2712;
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
var parents__2713 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__2713))))
{var G__2714__2715 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__2714__2715))
{var child__2716 = cljs.core.first.call(null,G__2714__2715);
var G__2714__2717 = G__2714__2715;

while(true){
f.call(null,cljs.core.first.call(null,parents__2713),child__2716);
var temp__3698__auto____2718 = cljs.core.next.call(null,G__2714__2717);

if(cljs.core.truth_(temp__3698__auto____2718))
{var G__2714__2719 = temp__3698__auto____2718;

{
var G__2732 = cljs.core.first.call(null,G__2714__2719);
var G__2733 = G__2714__2719;
child__2716 = G__2732;
G__2714__2717 = G__2733;
continue;
}
} else
{}
break;
}
} else
{}
var G__2720__2722 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__2713));

if(cljs.core.truth_(G__2720__2722))
{var parent__2723 = cljs.core.first.call(null,G__2720__2722);
var G__2720__2724 = G__2720__2722;

while(true){
var G__2721__2725 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__2721__2725))
{var child__2726 = cljs.core.first.call(null,G__2721__2725);
var G__2721__2727 = G__2721__2725;

while(true){
f.call(null,parent__2723,child__2726);
var temp__3698__auto____2728 = cljs.core.next.call(null,G__2721__2727);

if(cljs.core.truth_(temp__3698__auto____2728))
{var G__2721__2729 = temp__3698__auto____2728;

{
var G__2734 = cljs.core.first.call(null,G__2721__2729);
var G__2735 = G__2721__2729;
child__2726 = G__2734;
G__2721__2727 = G__2735;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2730 = cljs.core.next.call(null,G__2720__2724);

if(cljs.core.truth_(temp__3698__auto____2730))
{var G__2720__2731 = temp__3698__auto____2730;

{
var G__2736 = cljs.core.first.call(null,G__2720__2731);
var G__2737 = G__2720__2731;
parent__2723 = G__2736;
G__2720__2724 = G__2737;
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
var lazy_nodelist__2738 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2739 = (function (nl,n){
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
return lazy_nodelist__2738.call(this,nl);
case  2 :
return lazy_nodelist__2739.call(this,nl,n);
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
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2741 = null;
var G__2741__2742 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2741__2743 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2741 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2741__2742.call(this,nodelist,n);
case  3 :
return G__2741__2743.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2741;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{window.StaticNodeList.prototype = NodeList;
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2745 = null;
var G__2745__2746 = (function (coll,n){
return coll.item(n);
});
var G__2745__2747 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__2745 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2745__2746.call(this,coll,n);
case  3 :
return G__2745__2747.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2745;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
