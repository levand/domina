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
if(cljs.core.truth_((function (){var and__3546__auto____2588 = content;

if(cljs.core.truth_(and__3546__auto____2588))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____2588;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____2589 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____2589))
{return or__3548__auto____2589;
} else
{var or__3548__auto____2590 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____2590))
{return or__3548__auto____2590;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____2591 = nodeseq;

if(cljs.core.truth_(and__3546__auto____2591))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____2591;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____2592 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____2592))
{return or__3548__auto____2592;
} else
{var or__3548__auto____2593 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____2593))
{return or__3548__auto____2593;
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2594)))
{
/**
* @constructor
*/
domina.t2594 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t2594.prototype.domina$DomContent$ = true;
domina.t2594.prototype.domina$DomContent$nodes = (function (_){
var this__2595 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__2595.class_name));
});
domina.t2594.prototype.domina$DomContent$single_node = (function (_){
var this__2596 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__2596.class_name));
});
} else
{}
return (new domina.t2594(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__2597_SHARP_){
return p1__2597_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__2598_SHARP_,p2__2599_SHARP_){
return goog.dom.insertChildAt.call(null,p1__2598_SHARP_,p2__2599_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__2601_SHARP_,p2__2600_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__2600_SHARP_,p1__2601_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2603_SHARP_,p2__2602_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__2602_SHARP_,p1__2603_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2605_SHARP_,p2__2604_SHARP_){
return goog.dom.replaceNode.call(null,p2__2604_SHARP_,p1__2605_SHARP_);
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
var s__2606 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__2606))))
{return s__2606;
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
var G__2607__2608 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2607__2608))
{var n__2609 = cljs.core.first.call(null,G__2607__2608);
var G__2607__2610 = G__2607__2608;

while(true){
goog.style.setStyle.call(null,n__2609,cljs.core.name.call(null,name),value);
var temp__3698__auto____2611 = cljs.core.next.call(null,G__2607__2610);

if(cljs.core.truth_(temp__3698__auto____2611))
{var G__2607__2612 = temp__3698__auto____2611;

{
var G__2613 = cljs.core.first.call(null,G__2607__2612);
var G__2614 = G__2607__2612;
n__2609 = G__2613;
G__2607__2610 = G__2614;
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
var G__2615__2616 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2615__2616))
{var n__2617 = cljs.core.first.call(null,G__2615__2616);
var G__2615__2618 = G__2615__2616;

while(true){
n__2617.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____2619 = cljs.core.next.call(null,G__2615__2618);

if(cljs.core.truth_(temp__3698__auto____2619))
{var G__2615__2620 = temp__3698__auto____2619;

{
var G__2621 = cljs.core.first.call(null,G__2615__2620);
var G__2622 = G__2615__2620;
n__2617 = G__2621;
G__2615__2618 = G__2622;
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
var vec__2623__2624 = pair.split(/\s*:\s*/);
var k__2625 = cljs.core.nth.call(null,vec__2623__2624,0,null);
var v__2626 = cljs.core.nth.call(null,vec__2623__2624,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____2627 = k__2625;

if(cljs.core.truth_(and__3546__auto____2627))
{return v__2626;
} else
{return and__3546__auto____2627;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__2625.toLowerCase()),v__2626);
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
var node__2629 = domina.single_node.call(null,content);
var attrs__2630 = node__2629.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__2628_SHARP_){
var attr__2631 = attrs__2630.item(p1__2628_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__2631.nodeName.toLowerCase())],[attr__2631.nodeValue]);
}),cljs.core.range.call(null,attrs__2630.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__2632__2633 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__2632__2633))
{var G__2635__2637 = cljs.core.first.call(null,G__2632__2633);
var vec__2636__2638 = G__2635__2637;
var name__2639 = cljs.core.nth.call(null,vec__2636__2638,0,null);
var value__2640 = cljs.core.nth.call(null,vec__2636__2638,1,null);
var G__2632__2641 = G__2632__2633;

var G__2635__2642 = G__2635__2637;
var G__2632__2643 = G__2632__2641;

while(true){
var vec__2644__2645 = G__2635__2642;
var name__2646 = cljs.core.nth.call(null,vec__2644__2645,0,null);
var value__2647 = cljs.core.nth.call(null,vec__2644__2645,1,null);
var G__2632__2648 = G__2632__2643;

domina.set_style_BANG_.call(null,content,name__2646,value__2647);
var temp__3698__auto____2649 = cljs.core.next.call(null,G__2632__2648);

if(cljs.core.truth_(temp__3698__auto____2649))
{var G__2632__2650 = temp__3698__auto____2649;

{
var G__2651 = cljs.core.first.call(null,G__2632__2650);
var G__2652 = G__2632__2650;
G__2635__2642 = G__2651;
G__2632__2643 = G__2652;
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
var G__2653__2654 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2653__2654))
{var G__2656__2658 = cljs.core.first.call(null,G__2653__2654);
var vec__2657__2659 = G__2656__2658;
var name__2660 = cljs.core.nth.call(null,vec__2657__2659,0,null);
var value__2661 = cljs.core.nth.call(null,vec__2657__2659,1,null);
var G__2653__2662 = G__2653__2654;

var G__2656__2663 = G__2656__2658;
var G__2653__2664 = G__2653__2662;

while(true){
var vec__2665__2666 = G__2656__2663;
var name__2667 = cljs.core.nth.call(null,vec__2665__2666,0,null);
var value__2668 = cljs.core.nth.call(null,vec__2665__2666,1,null);
var G__2653__2669 = G__2653__2664;

domina.set_attr_BANG_.call(null,content,name__2667,value__2668);
var temp__3698__auto____2670 = cljs.core.next.call(null,G__2653__2669);

if(cljs.core.truth_(temp__3698__auto____2670))
{var G__2653__2671 = temp__3698__auto____2670;

{
var G__2672 = cljs.core.first.call(null,G__2653__2671);
var G__2673 = G__2653__2671;
G__2656__2663 = G__2672;
G__2653__2664 = G__2673;
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
var G__2674__2675 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2674__2675))
{var node__2676 = cljs.core.first.call(null,G__2674__2675);
var G__2674__2677 = G__2674__2675;

while(true){
goog.dom.classes.add.call(null,node__2676,class$);
var temp__3698__auto____2678 = cljs.core.next.call(null,G__2674__2677);

if(cljs.core.truth_(temp__3698__auto____2678))
{var G__2674__2679 = temp__3698__auto____2678;

{
var G__2680 = cljs.core.first.call(null,G__2674__2679);
var G__2681 = G__2674__2679;
node__2676 = G__2680;
G__2674__2677 = G__2681;
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
var G__2682__2683 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2682__2683))
{var node__2684 = cljs.core.first.call(null,G__2682__2683);
var G__2682__2685 = G__2682__2683;

while(true){
goog.dom.classes.remove.call(null,node__2684,class$);
var temp__3698__auto____2686 = cljs.core.next.call(null,G__2682__2685);

if(cljs.core.truth_(temp__3698__auto____2686))
{var G__2682__2687 = temp__3698__auto____2686;

{
var G__2688 = cljs.core.first.call(null,G__2682__2687);
var G__2689 = G__2682__2687;
node__2684 = G__2688;
G__2682__2685 = G__2689;
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
var text__2690 = (function (content){
return text.call(null,content,true);
});
var text__2691 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__2690.call(this,content);
case  2 :
return text__2691.call(this,content,normalize);
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
var G__2693__2694 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2693__2694))
{var node__2695 = cljs.core.first.call(null,G__2693__2694);
var G__2693__2696 = G__2693__2694;

while(true){
goog.dom.setTextContent.call(null,node__2695,value);
var temp__3698__auto____2697 = cljs.core.next.call(null,G__2693__2696);

if(cljs.core.truth_(temp__3698__auto____2697))
{var G__2693__2698 = temp__3698__auto____2697;

{
var G__2699 = cljs.core.first.call(null,G__2693__2698);
var G__2700 = G__2693__2698;
node__2695 = G__2699;
G__2693__2696 = G__2700;
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
var G__2701__2702 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2701__2702))
{var node__2703 = cljs.core.first.call(null,G__2701__2702);
var G__2701__2704 = G__2701__2702;

while(true){
goog.dom.forms.setValue.call(null,node__2703,value);
var temp__3698__auto____2705 = cljs.core.next.call(null,G__2701__2704);

if(cljs.core.truth_(temp__3698__auto____2705))
{var G__2701__2706 = temp__3698__auto____2705;

{
var G__2707 = cljs.core.first.call(null,G__2701__2706);
var G__2708 = G__2701__2706;
node__2703 = G__2707;
G__2701__2704 = G__2708;
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
var G__2709__2710 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2709__2710))
{var node__2711 = cljs.core.first.call(null,G__2709__2710);
var G__2709__2712 = G__2709__2710;

while(true){
node__2711.innerHTML = value;
var temp__3698__auto____2713 = cljs.core.next.call(null,G__2709__2712);

if(cljs.core.truth_(temp__3698__auto____2713))
{var G__2709__2714 = temp__3698__auto____2713;

{
var G__2715 = cljs.core.first.call(null,G__2709__2714);
var G__2716 = G__2709__2714;
node__2711 = G__2715;
G__2709__2712 = G__2716;
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
var parents__2717 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__2717))))
{var G__2718__2719 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__2718__2719))
{var child__2720 = cljs.core.first.call(null,G__2718__2719);
var G__2718__2721 = G__2718__2719;

while(true){
f.call(null,cljs.core.first.call(null,parents__2717),child__2720);
var temp__3698__auto____2722 = cljs.core.next.call(null,G__2718__2721);

if(cljs.core.truth_(temp__3698__auto____2722))
{var G__2718__2723 = temp__3698__auto____2722;

{
var G__2736 = cljs.core.first.call(null,G__2718__2723);
var G__2737 = G__2718__2723;
child__2720 = G__2736;
G__2718__2721 = G__2737;
continue;
}
} else
{}
break;
}
} else
{}
var G__2724__2726 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__2717));

if(cljs.core.truth_(G__2724__2726))
{var parent__2727 = cljs.core.first.call(null,G__2724__2726);
var G__2724__2728 = G__2724__2726;

while(true){
var G__2725__2729 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__2725__2729))
{var child__2730 = cljs.core.first.call(null,G__2725__2729);
var G__2725__2731 = G__2725__2729;

while(true){
f.call(null,parent__2727,child__2730);
var temp__3698__auto____2732 = cljs.core.next.call(null,G__2725__2731);

if(cljs.core.truth_(temp__3698__auto____2732))
{var G__2725__2733 = temp__3698__auto____2732;

{
var G__2738 = cljs.core.first.call(null,G__2725__2733);
var G__2739 = G__2725__2733;
child__2730 = G__2738;
G__2725__2731 = G__2739;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2734 = cljs.core.next.call(null,G__2724__2728);

if(cljs.core.truth_(temp__3698__auto____2734))
{var G__2724__2735 = temp__3698__auto____2734;

{
var G__2740 = cljs.core.first.call(null,G__2724__2735);
var G__2741 = G__2724__2735;
parent__2727 = G__2740;
G__2724__2728 = G__2741;
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
var lazy_nodelist__2742 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2743 = (function (nl,n){
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
return lazy_nodelist__2742.call(this,nl);
case  2 :
return lazy_nodelist__2743.call(this,nl,n);
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
var G__2745 = null;
var G__2745__2746 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2745__2747 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2745 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2745__2746.call(this,nodelist,n);
case  3 :
return G__2745__2747.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2745;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2749 = null;
var G__2749__2750 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2749__2751 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2749 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2749__2750.call(this,nodelist,n);
case  3 :
return G__2749__2751.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2749;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2753 = null;
var G__2753__2754 = (function (coll,n){
return coll.item(n);
});
var G__2753__2755 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__2753 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2753__2754.call(this,coll,n);
case  3 :
return G__2753__2755.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2753;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
