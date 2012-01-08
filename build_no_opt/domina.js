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
if(cljs.core.truth_((function (){var and__3546__auto____2601 = content;

if(cljs.core.truth_(and__3546__auto____2601))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____2601;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____2602 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____2602))
{return or__3548__auto____2602;
} else
{var or__3548__auto____2603 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____2603))
{return or__3548__auto____2603;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____2604 = nodeseq;

if(cljs.core.truth_(and__3546__auto____2604))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____2604;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____2605 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____2605))
{return or__3548__auto____2605;
} else
{var or__3548__auto____2606 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____2606))
{return or__3548__auto____2606;
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2607)))
{
/**
* @constructor
*/
domina.t2607 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t2607.prototype.domina$DomContent$ = true;
domina.t2607.prototype.domina$DomContent$nodes = (function (_){
var this__2608 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__2608.class_name));
});
domina.t2607.prototype.domina$DomContent$single_node = (function (_){
var this__2609 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__2609.class_name));
});
} else
{}
return (new domina.t2607(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__2610_SHARP_){
return p1__2610_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__2611_SHARP_,p2__2612_SHARP_){
return goog.dom.insertChildAt.call(null,p1__2611_SHARP_,p2__2612_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__2614_SHARP_,p2__2613_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__2613_SHARP_,p1__2614_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2616_SHARP_,p2__2615_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__2615_SHARP_,p1__2616_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2618_SHARP_,p2__2617_SHARP_){
return goog.dom.replaceNode.call(null,p2__2617_SHARP_,p1__2618_SHARP_);
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
var s__2619 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__2619))))
{return s__2619;
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
var G__2620__2621 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2620__2621))
{var n__2622 = cljs.core.first.call(null,G__2620__2621);
var G__2620__2623 = G__2620__2621;

while(true){
goog.style.setStyle.call(null,n__2622,cljs.core.name.call(null,name),value);
var temp__3698__auto____2624 = cljs.core.next.call(null,G__2620__2623);

if(cljs.core.truth_(temp__3698__auto____2624))
{var G__2620__2625 = temp__3698__auto____2624;

{
var G__2626 = cljs.core.first.call(null,G__2620__2625);
var G__2627 = G__2620__2625;
n__2622 = G__2626;
G__2620__2623 = G__2627;
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
var G__2628__2629 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2628__2629))
{var n__2630 = cljs.core.first.call(null,G__2628__2629);
var G__2628__2631 = G__2628__2629;

while(true){
n__2630.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____2632 = cljs.core.next.call(null,G__2628__2631);

if(cljs.core.truth_(temp__3698__auto____2632))
{var G__2628__2633 = temp__3698__auto____2632;

{
var G__2634 = cljs.core.first.call(null,G__2628__2633);
var G__2635 = G__2628__2633;
n__2630 = G__2634;
G__2628__2631 = G__2635;
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
var vec__2636__2637 = pair.split(/\s*:\s*/);
var k__2638 = cljs.core.nth.call(null,vec__2636__2637,0,null);
var v__2639 = cljs.core.nth.call(null,vec__2636__2637,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____2640 = k__2638;

if(cljs.core.truth_(and__3546__auto____2640))
{return v__2639;
} else
{return and__3546__auto____2640;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__2638.toLowerCase()),v__2639);
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
var node__2642 = domina.single_node.call(null,content);
var attrs__2643 = node__2642.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__2641_SHARP_){
var attr__2644 = attrs__2643.item(p1__2641_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__2644.nodeName.toLowerCase())],[attr__2644.nodeValue]);
}),cljs.core.range.call(null,attrs__2643.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__2645__2646 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__2645__2646))
{var G__2648__2650 = cljs.core.first.call(null,G__2645__2646);
var vec__2649__2651 = G__2648__2650;
var name__2652 = cljs.core.nth.call(null,vec__2649__2651,0,null);
var value__2653 = cljs.core.nth.call(null,vec__2649__2651,1,null);
var G__2645__2654 = G__2645__2646;

var G__2648__2655 = G__2648__2650;
var G__2645__2656 = G__2645__2654;

while(true){
var vec__2657__2658 = G__2648__2655;
var name__2659 = cljs.core.nth.call(null,vec__2657__2658,0,null);
var value__2660 = cljs.core.nth.call(null,vec__2657__2658,1,null);
var G__2645__2661 = G__2645__2656;

domina.set_style_BANG_.call(null,content,name__2659,value__2660);
var temp__3698__auto____2662 = cljs.core.next.call(null,G__2645__2661);

if(cljs.core.truth_(temp__3698__auto____2662))
{var G__2645__2663 = temp__3698__auto____2662;

{
var G__2664 = cljs.core.first.call(null,G__2645__2663);
var G__2665 = G__2645__2663;
G__2648__2655 = G__2664;
G__2645__2656 = G__2665;
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
var G__2666__2667 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2666__2667))
{var G__2669__2671 = cljs.core.first.call(null,G__2666__2667);
var vec__2670__2672 = G__2669__2671;
var name__2673 = cljs.core.nth.call(null,vec__2670__2672,0,null);
var value__2674 = cljs.core.nth.call(null,vec__2670__2672,1,null);
var G__2666__2675 = G__2666__2667;

var G__2669__2676 = G__2669__2671;
var G__2666__2677 = G__2666__2675;

while(true){
var vec__2678__2679 = G__2669__2676;
var name__2680 = cljs.core.nth.call(null,vec__2678__2679,0,null);
var value__2681 = cljs.core.nth.call(null,vec__2678__2679,1,null);
var G__2666__2682 = G__2666__2677;

domina.set_attr_BANG_.call(null,content,name__2680,value__2681);
var temp__3698__auto____2683 = cljs.core.next.call(null,G__2666__2682);

if(cljs.core.truth_(temp__3698__auto____2683))
{var G__2666__2684 = temp__3698__auto____2683;

{
var G__2685 = cljs.core.first.call(null,G__2666__2684);
var G__2686 = G__2666__2684;
G__2669__2676 = G__2685;
G__2666__2677 = G__2686;
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
var G__2687__2688 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2687__2688))
{var node__2689 = cljs.core.first.call(null,G__2687__2688);
var G__2687__2690 = G__2687__2688;

while(true){
goog.dom.classes.add.call(null,node__2689,class$);
var temp__3698__auto____2691 = cljs.core.next.call(null,G__2687__2690);

if(cljs.core.truth_(temp__3698__auto____2691))
{var G__2687__2692 = temp__3698__auto____2691;

{
var G__2693 = cljs.core.first.call(null,G__2687__2692);
var G__2694 = G__2687__2692;
node__2689 = G__2693;
G__2687__2690 = G__2694;
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
var G__2695__2696 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2695__2696))
{var node__2697 = cljs.core.first.call(null,G__2695__2696);
var G__2695__2698 = G__2695__2696;

while(true){
goog.dom.classes.remove.call(null,node__2697,class$);
var temp__3698__auto____2699 = cljs.core.next.call(null,G__2695__2698);

if(cljs.core.truth_(temp__3698__auto____2699))
{var G__2695__2700 = temp__3698__auto____2699;

{
var G__2701 = cljs.core.first.call(null,G__2695__2700);
var G__2702 = G__2695__2700;
node__2697 = G__2701;
G__2695__2698 = G__2702;
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
var text__2703 = (function (content){
return text.call(null,content,true);
});
var text__2704 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__2703.call(this,content);
case  2 :
return text__2704.call(this,content,normalize);
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
var G__2706__2707 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2706__2707))
{var node__2708 = cljs.core.first.call(null,G__2706__2707);
var G__2706__2709 = G__2706__2707;

while(true){
goog.dom.setTextContent.call(null,node__2708,value);
var temp__3698__auto____2710 = cljs.core.next.call(null,G__2706__2709);

if(cljs.core.truth_(temp__3698__auto____2710))
{var G__2706__2711 = temp__3698__auto____2710;

{
var G__2712 = cljs.core.first.call(null,G__2706__2711);
var G__2713 = G__2706__2711;
node__2708 = G__2712;
G__2706__2709 = G__2713;
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
var G__2714__2715 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2714__2715))
{var node__2716 = cljs.core.first.call(null,G__2714__2715);
var G__2714__2717 = G__2714__2715;

while(true){
goog.dom.forms.setValue.call(null,node__2716,value);
var temp__3698__auto____2718 = cljs.core.next.call(null,G__2714__2717);

if(cljs.core.truth_(temp__3698__auto____2718))
{var G__2714__2719 = temp__3698__auto____2718;

{
var G__2720 = cljs.core.first.call(null,G__2714__2719);
var G__2721 = G__2714__2719;
node__2716 = G__2720;
G__2714__2717 = G__2721;
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
var G__2722__2723 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2722__2723))
{var node__2724 = cljs.core.first.call(null,G__2722__2723);
var G__2722__2725 = G__2722__2723;

while(true){
node__2724.innerHTML = value;
var temp__3698__auto____2726 = cljs.core.next.call(null,G__2722__2725);

if(cljs.core.truth_(temp__3698__auto____2726))
{var G__2722__2727 = temp__3698__auto____2726;

{
var G__2728 = cljs.core.first.call(null,G__2722__2727);
var G__2729 = G__2722__2727;
node__2724 = G__2728;
G__2722__2725 = G__2729;
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
var parents__2730 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__2730))))
{var G__2731__2732 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__2731__2732))
{var child__2733 = cljs.core.first.call(null,G__2731__2732);
var G__2731__2734 = G__2731__2732;

while(true){
f.call(null,cljs.core.first.call(null,parents__2730),child__2733);
var temp__3698__auto____2735 = cljs.core.next.call(null,G__2731__2734);

if(cljs.core.truth_(temp__3698__auto____2735))
{var G__2731__2736 = temp__3698__auto____2735;

{
var G__2749 = cljs.core.first.call(null,G__2731__2736);
var G__2750 = G__2731__2736;
child__2733 = G__2749;
G__2731__2734 = G__2750;
continue;
}
} else
{}
break;
}
} else
{}
var G__2737__2739 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__2730));

if(cljs.core.truth_(G__2737__2739))
{var parent__2740 = cljs.core.first.call(null,G__2737__2739);
var G__2737__2741 = G__2737__2739;

while(true){
var G__2738__2742 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__2738__2742))
{var child__2743 = cljs.core.first.call(null,G__2738__2742);
var G__2738__2744 = G__2738__2742;

while(true){
f.call(null,parent__2740,child__2743);
var temp__3698__auto____2745 = cljs.core.next.call(null,G__2738__2744);

if(cljs.core.truth_(temp__3698__auto____2745))
{var G__2738__2746 = temp__3698__auto____2745;

{
var G__2751 = cljs.core.first.call(null,G__2738__2746);
var G__2752 = G__2738__2746;
child__2743 = G__2751;
G__2738__2744 = G__2752;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2747 = cljs.core.next.call(null,G__2737__2741);

if(cljs.core.truth_(temp__3698__auto____2747))
{var G__2737__2748 = temp__3698__auto____2747;

{
var G__2753 = cljs.core.first.call(null,G__2737__2748);
var G__2754 = G__2737__2748;
parent__2740 = G__2753;
G__2737__2741 = G__2754;
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
var lazy_nodelist__2755 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2756 = (function (nl,n){
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
return lazy_nodelist__2755.call(this,nl);
case  2 :
return lazy_nodelist__2756.call(this,nl,n);
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
var G__2758 = null;
var G__2758__2759 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2758__2760 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2758 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2758__2759.call(this,nodelist,n);
case  3 :
return G__2758__2760.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2758;
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
var G__2762 = null;
var G__2762__2763 = (function (coll,n){
return coll.item(n);
});
var G__2762__2764 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__2762 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2762__2763.call(this,coll,n);
case  3 :
return G__2762__2764.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2762;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
