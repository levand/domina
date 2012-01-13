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
if(cljs.core.truth_((function (){var and__3546__auto____2657 = content;

if(cljs.core.truth_(and__3546__auto____2657))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____2657;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____2658 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____2658))
{return or__3548__auto____2658;
} else
{var or__3548__auto____2659 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____2659))
{return or__3548__auto____2659;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____2660 = nodeseq;

if(cljs.core.truth_(and__3546__auto____2660))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____2660;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____2661 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____2661))
{return or__3548__auto____2661;
} else
{var or__3548__auto____2662 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____2662))
{return or__3548__auto____2662;
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t2663)))
{
/**
* @constructor
*/
domina.t2663 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t2663.prototype.domina$DomContent$ = true;
domina.t2663.prototype.domina$DomContent$nodes = (function (_){
var this__2664 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__2664.class_name));
});
domina.t2663.prototype.domina$DomContent$single_node = (function (_){
var this__2665 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__2665.class_name));
});
} else
{}
return (new domina.t2663(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__2666_SHARP_){
return p1__2666_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__2667_SHARP_,p2__2668_SHARP_){
return goog.dom.insertChildAt.call(null,p1__2667_SHARP_,p2__2668_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__2670_SHARP_,p2__2669_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__2669_SHARP_,p1__2670_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2672_SHARP_,p2__2671_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__2671_SHARP_,p1__2672_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__2674_SHARP_,p2__2673_SHARP_){
return goog.dom.replaceNode.call(null,p2__2673_SHARP_,p1__2674_SHARP_);
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
var s__2675 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__2675))))
{return s__2675;
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
var G__2676__2677 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2676__2677))
{var n__2678 = cljs.core.first.call(null,G__2676__2677);
var G__2676__2679 = G__2676__2677;

while(true){
goog.style.setStyle.call(null,n__2678,cljs.core.name.call(null,name),value);
var temp__3698__auto____2680 = cljs.core.next.call(null,G__2676__2679);

if(cljs.core.truth_(temp__3698__auto____2680))
{var G__2676__2681 = temp__3698__auto____2680;

{
var G__2682 = cljs.core.first.call(null,G__2676__2681);
var G__2683 = G__2676__2681;
n__2678 = G__2682;
G__2676__2679 = G__2683;
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
var G__2684__2685 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2684__2685))
{var n__2686 = cljs.core.first.call(null,G__2684__2685);
var G__2684__2687 = G__2684__2685;

while(true){
n__2686.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____2688 = cljs.core.next.call(null,G__2684__2687);

if(cljs.core.truth_(temp__3698__auto____2688))
{var G__2684__2689 = temp__3698__auto____2688;

{
var G__2690 = cljs.core.first.call(null,G__2684__2689);
var G__2691 = G__2684__2689;
n__2686 = G__2690;
G__2684__2687 = G__2691;
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
var vec__2692__2693 = pair.split(/\s*:\s*/);
var k__2694 = cljs.core.nth.call(null,vec__2692__2693,0,null);
var v__2695 = cljs.core.nth.call(null,vec__2692__2693,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____2696 = k__2694;

if(cljs.core.truth_(and__3546__auto____2696))
{return v__2695;
} else
{return and__3546__auto____2696;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__2694.toLowerCase()),v__2695);
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
var node__2698 = domina.single_node.call(null,content);
var attrs__2699 = node__2698.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__2697_SHARP_){
var attr__2700 = attrs__2699.item(p1__2697_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__2700.nodeName.toLowerCase())],[attr__2700.nodeValue]);
}),cljs.core.range.call(null,attrs__2699.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__2701__2702 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__2701__2702))
{var G__2704__2706 = cljs.core.first.call(null,G__2701__2702);
var vec__2705__2707 = G__2704__2706;
var name__2708 = cljs.core.nth.call(null,vec__2705__2707,0,null);
var value__2709 = cljs.core.nth.call(null,vec__2705__2707,1,null);
var G__2701__2710 = G__2701__2702;

var G__2704__2711 = G__2704__2706;
var G__2701__2712 = G__2701__2710;

while(true){
var vec__2713__2714 = G__2704__2711;
var name__2715 = cljs.core.nth.call(null,vec__2713__2714,0,null);
var value__2716 = cljs.core.nth.call(null,vec__2713__2714,1,null);
var G__2701__2717 = G__2701__2712;

domina.set_style_BANG_.call(null,content,name__2715,value__2716);
var temp__3698__auto____2718 = cljs.core.next.call(null,G__2701__2717);

if(cljs.core.truth_(temp__3698__auto____2718))
{var G__2701__2719 = temp__3698__auto____2718;

{
var G__2720 = cljs.core.first.call(null,G__2701__2719);
var G__2721 = G__2701__2719;
G__2704__2711 = G__2720;
G__2701__2712 = G__2721;
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
var G__2722__2723 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__2722__2723))
{var G__2725__2727 = cljs.core.first.call(null,G__2722__2723);
var vec__2726__2728 = G__2725__2727;
var name__2729 = cljs.core.nth.call(null,vec__2726__2728,0,null);
var value__2730 = cljs.core.nth.call(null,vec__2726__2728,1,null);
var G__2722__2731 = G__2722__2723;

var G__2725__2732 = G__2725__2727;
var G__2722__2733 = G__2722__2731;

while(true){
var vec__2734__2735 = G__2725__2732;
var name__2736 = cljs.core.nth.call(null,vec__2734__2735,0,null);
var value__2737 = cljs.core.nth.call(null,vec__2734__2735,1,null);
var G__2722__2738 = G__2722__2733;

domina.set_attr_BANG_.call(null,content,name__2736,value__2737);
var temp__3698__auto____2739 = cljs.core.next.call(null,G__2722__2738);

if(cljs.core.truth_(temp__3698__auto____2739))
{var G__2722__2740 = temp__3698__auto____2739;

{
var G__2741 = cljs.core.first.call(null,G__2722__2740);
var G__2742 = G__2722__2740;
G__2725__2732 = G__2741;
G__2722__2733 = G__2742;
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
var G__2743__2744 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2743__2744))
{var node__2745 = cljs.core.first.call(null,G__2743__2744);
var G__2743__2746 = G__2743__2744;

while(true){
goog.dom.classes.add.call(null,node__2745,class$);
var temp__3698__auto____2747 = cljs.core.next.call(null,G__2743__2746);

if(cljs.core.truth_(temp__3698__auto____2747))
{var G__2743__2748 = temp__3698__auto____2747;

{
var G__2749 = cljs.core.first.call(null,G__2743__2748);
var G__2750 = G__2743__2748;
node__2745 = G__2749;
G__2743__2746 = G__2750;
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
var G__2751__2752 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2751__2752))
{var node__2753 = cljs.core.first.call(null,G__2751__2752);
var G__2751__2754 = G__2751__2752;

while(true){
goog.dom.classes.remove.call(null,node__2753,class$);
var temp__3698__auto____2755 = cljs.core.next.call(null,G__2751__2754);

if(cljs.core.truth_(temp__3698__auto____2755))
{var G__2751__2756 = temp__3698__auto____2755;

{
var G__2757 = cljs.core.first.call(null,G__2751__2756);
var G__2758 = G__2751__2756;
node__2753 = G__2757;
G__2751__2754 = G__2758;
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
var text__2759 = (function (content){
return text.call(null,content,true);
});
var text__2760 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__2759.call(this,content);
case  2 :
return text__2760.call(this,content,normalize);
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
var G__2762__2763 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2762__2763))
{var node__2764 = cljs.core.first.call(null,G__2762__2763);
var G__2762__2765 = G__2762__2763;

while(true){
goog.dom.setTextContent.call(null,node__2764,value);
var temp__3698__auto____2766 = cljs.core.next.call(null,G__2762__2765);

if(cljs.core.truth_(temp__3698__auto____2766))
{var G__2762__2767 = temp__3698__auto____2766;

{
var G__2768 = cljs.core.first.call(null,G__2762__2767);
var G__2769 = G__2762__2767;
node__2764 = G__2768;
G__2762__2765 = G__2769;
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
var G__2770__2771 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2770__2771))
{var node__2772 = cljs.core.first.call(null,G__2770__2771);
var G__2770__2773 = G__2770__2771;

while(true){
goog.dom.forms.setValue.call(null,node__2772,value);
var temp__3698__auto____2774 = cljs.core.next.call(null,G__2770__2773);

if(cljs.core.truth_(temp__3698__auto____2774))
{var G__2770__2775 = temp__3698__auto____2774;

{
var G__2776 = cljs.core.first.call(null,G__2770__2775);
var G__2777 = G__2770__2775;
node__2772 = G__2776;
G__2770__2773 = G__2777;
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
var G__2778__2779 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__2778__2779))
{var node__2780 = cljs.core.first.call(null,G__2778__2779);
var G__2778__2781 = G__2778__2779;

while(true){
node__2780.innerHTML = value;
var temp__3698__auto____2782 = cljs.core.next.call(null,G__2778__2781);

if(cljs.core.truth_(temp__3698__auto____2782))
{var G__2778__2783 = temp__3698__auto____2782;

{
var G__2784 = cljs.core.first.call(null,G__2778__2783);
var G__2785 = G__2778__2783;
node__2780 = G__2784;
G__2778__2781 = G__2785;
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
var parents__2786 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__2786))))
{var G__2787__2788 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__2787__2788))
{var child__2789 = cljs.core.first.call(null,G__2787__2788);
var G__2787__2790 = G__2787__2788;

while(true){
f.call(null,cljs.core.first.call(null,parents__2786),child__2789);
var temp__3698__auto____2791 = cljs.core.next.call(null,G__2787__2790);

if(cljs.core.truth_(temp__3698__auto____2791))
{var G__2787__2792 = temp__3698__auto____2791;

{
var G__2805 = cljs.core.first.call(null,G__2787__2792);
var G__2806 = G__2787__2792;
child__2789 = G__2805;
G__2787__2790 = G__2806;
continue;
}
} else
{}
break;
}
} else
{}
var G__2793__2795 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__2786));

if(cljs.core.truth_(G__2793__2795))
{var parent__2796 = cljs.core.first.call(null,G__2793__2795);
var G__2793__2797 = G__2793__2795;

while(true){
var G__2794__2798 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__2794__2798))
{var child__2799 = cljs.core.first.call(null,G__2794__2798);
var G__2794__2800 = G__2794__2798;

while(true){
f.call(null,parent__2796,child__2799);
var temp__3698__auto____2801 = cljs.core.next.call(null,G__2794__2800);

if(cljs.core.truth_(temp__3698__auto____2801))
{var G__2794__2802 = temp__3698__auto____2801;

{
var G__2807 = cljs.core.first.call(null,G__2794__2802);
var G__2808 = G__2794__2802;
child__2799 = G__2807;
G__2794__2800 = G__2808;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____2803 = cljs.core.next.call(null,G__2793__2797);

if(cljs.core.truth_(temp__3698__auto____2803))
{var G__2793__2804 = temp__3698__auto____2803;

{
var G__2809 = cljs.core.first.call(null,G__2793__2804);
var G__2810 = G__2793__2804;
parent__2796 = G__2809;
G__2793__2797 = G__2810;
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
var lazy_nodelist__2811 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__2812 = (function (nl,n){
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
return lazy_nodelist__2811.call(this,nl);
case  2 :
return lazy_nodelist__2812.call(this,nl,n);
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
var G__2814 = null;
var G__2814__2815 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2814__2816 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2814 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2814__2815.call(this,nodelist,n);
case  3 :
return G__2814__2816.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2814;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2818 = null;
var G__2818__2819 = (function (nodelist,n){
return nodelist.item(n);
});
var G__2818__2820 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__2818 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__2818__2819.call(this,nodelist,n);
case  3 :
return G__2818__2820.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2818;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2822 = null;
var G__2822__2823 = (function (coll,n){
return coll.item(n);
});
var G__2822__2824 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__2822 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2822__2823.call(this,coll,n);
case  3 :
return G__2822__2824.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2822;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
