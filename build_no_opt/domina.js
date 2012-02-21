goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__15198 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15200 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15201 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15200,"caption":table_section_wrapper__15200,"optgroup":opt_wrapper__15198,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15201,"thead":table_section_wrapper__15200,"th":cell_wrapper__15201,"option":opt_wrapper__15198,"tbody":table_section_wrapper__15200,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15200});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15208 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15221 = (cljs.core.truth_((function (){var and__3546__auto____15210 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15210))
{return no_tbody_QMARK___15208;
} else
{return and__3546__auto____15210;
}
})())?(function (){var and__3546__auto____15214 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15214))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15214;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15218 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15218))
{return no_tbody_QMARK___15208;
} else
{return and__3546__auto____15218;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15223__15226 = cljs.core.seq.call(null,tbody__15221);

if(cljs.core.truth_(G__15223__15226))
{var child__15228 = cljs.core.first.call(null,G__15223__15226);
var G__15223__15229 = G__15223__15226;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15232 = cljs.core._EQ_.call(null,child__15228.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15232))
{return cljs.core._EQ_.call(null,child__15228.childNodes.length,0);
} else
{return and__3546__auto____15232;
}
})()))
{child__15228.parentNode.removeChild(child__15228);
} else
{}
var temp__3698__auto____15234 = cljs.core.next.call(null,G__15223__15229);

if(cljs.core.truth_(temp__3698__auto____15234))
{var G__15223__15236 = temp__3698__auto____15234;

{
var G__15242 = cljs.core.first.call(null,G__15223__15236);
var G__15243 = G__15223__15236;
child__15228 = G__15242;
G__15223__15229 = G__15243;
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
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__15263 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15290 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15263))).toLowerCase();
var vec__15261__15291 = cljs.core.get.call(null,domina.wrap_map,tag_name__15290,"﷐'default".call(null,domina.wrap_map));
var depth__15293 = cljs.core.nth.call(null,vec__15261__15291,0,null);
var start_wrap__15295 = cljs.core.nth.call(null,vec__15261__15291,1,null);
var end_wrap__15296 = cljs.core.nth.call(null,vec__15261__15291,2,null);
var div__15301 = (function (){var wrapper__15299 = (function (){var div__15298 = document.createElement("div");

div__15298.innerHTML = cljs.core.str.call(null,start_wrap__15295,html__15263,end_wrap__15296);
return div__15298;
})();
var level__15300 = depth__15293;

while(true){
if(cljs.core.truth_((level__15300 > 0)))
{{
var G__15315 = wrapper__15299.lastChild;
var G__15316 = (level__15300 - 1);
wrapper__15299 = G__15315;
level__15300 = G__15316;
continue;
}
} else
{return wrapper__15299;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__15301,html__15263);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____15302 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____15302))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15263);
} else
{return and__3546__auto____15302;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__15301,html__15263);
} else
{}
return div__15301.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15332 = content;

if(cljs.core.truth_(and__3546__auto____15332))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15332;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15340 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15340))
{return or__3548__auto____15340;
} else
{var or__3548__auto____15343 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15343))
{return or__3548__auto____15343;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15344 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15344))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15344;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15345 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15345))
{return or__3548__auto____15345;
} else
{var or__3548__auto____15346 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15346))
{return or__3548__auto____15346;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15371 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15371))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15371;
}
})()))
{return console.log(mesg);
} else
{return null;
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
if(cljs.core.truth_((void 0 === domina.t15379)))
{
/**
* @constructor
*/
domina.t15379 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15379.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15379");
});
domina.t15379.prototype.domina$DomContent$ = true;
domina.t15379.prototype.domina$DomContent$nodes = (function (_){
var this__15381 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15381.class_name)));
});
domina.t15379.prototype.domina$DomContent$single_node = (function (_){
var this__15386 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15386.class_name)));
});
domina.t15379.prototype.cljs$core$IMeta$ = true;
domina.t15379.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15387 = this;
return this__15387.__meta;
});
domina.t15379.prototype.cljs$core$IWithMeta$ = true;
domina.t15379.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15388 = this;
return (new domina.t15379(this__15388.class_name,this__15388.by_class,__meta));
});
domina.t15379;
} else
{}
return (new domina.t15379(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15405_SHARP_){
return p1__15405_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15421_SHARP_,p2__15423_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15421_SHARP_,p2__15423_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15458_SHARP_,p2__15457_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15457_SHARP_,p1__15458_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15464_SHARP_,p2__15463_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15463_SHARP_,p1__15464_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15470_SHARP_,p2__15469_SHARP_){
return goog.dom.replaceNode.call(null,p2__15469_SHARP_,p1__15470_SHARP_);
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
var s__15474 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__15474)))
{return null;
} else
{return s__15474;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__15484__15485 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15484__15485))
{var n__15488 = cljs.core.first.call(null,G__15484__15485);
var G__15484__15489 = G__15484__15485;

while(true){
goog.style.setStyle.call(null,n__15488,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15493 = cljs.core.next.call(null,G__15484__15489);

if(cljs.core.truth_(temp__3698__auto____15493))
{var G__15484__15494 = temp__3698__auto____15493;

{
var G__15547 = cljs.core.first.call(null,G__15484__15494);
var G__15548 = G__15484__15494;
n__15488 = G__15547;
G__15484__15489 = G__15548;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15549){
var content = cljs.core.first(arglist__15549);
var name = cljs.core.first(cljs.core.next(arglist__15549));
var value = cljs.core.rest(cljs.core.next(arglist__15549));
return set_style_BANG___delegate.call(this, content, name, value);
});
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__15557__15558 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15557__15558))
{var n__15560 = cljs.core.first.call(null,G__15557__15558);
var G__15557__15561 = G__15557__15558;

while(true){
n__15560.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15564 = cljs.core.next.call(null,G__15557__15561);

if(cljs.core.truth_(temp__3698__auto____15564))
{var G__15557__15565 = temp__3698__auto____15564;

{
var G__15570 = cljs.core.first.call(null,G__15557__15565);
var G__15571 = G__15557__15565;
n__15560 = G__15570;
G__15557__15561 = G__15571;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15572){
var content = cljs.core.first(arglist__15572);
var name = cljs.core.first(cljs.core.next(arglist__15572));
var value = cljs.core.rest(cljs.core.next(arglist__15572));
return set_attr_BANG___delegate.call(this, content, name, value);
});
return set_attr_BANG_;
})()
;
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__15577__15580 = pair.split(/\s*:\s*/);
var k__15581 = cljs.core.nth.call(null,vec__15577__15580,0,null);
var v__15582 = cljs.core.nth.call(null,vec__15577__15580,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15583 = k__15581;

if(cljs.core.truth_(and__3546__auto____15583))
{return v__15582;
} else
{return and__3546__auto____15583;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15581.toLowerCase()),v__15582);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__15591 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__15591)))
{return domina.parse_style_attributes.call(null,style__15591);
} else
{if(cljs.core.truth_(style__15591.cssText))
{return domina.parse_style_attributes.call(null,style__15591.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__15595 = domina.single_node.call(null,content);
var attrs__15597 = node__15595.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15589_SHARP_){
var attr__15603 = attrs__15597.item(p1__15589_SHARP_);
var value__15607 = attr__15603.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____15638 = cljs.core.not_EQ_.call(null,null,value__15607);

if(cljs.core.truth_(and__3546__auto____15638))
{return cljs.core.not_EQ_.call(null,"",value__15607);
} else
{return and__3546__auto____15638;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15603.nodeName.toLowerCase())],[attr__15603.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__15597.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15653__15654 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15653__15654))
{var G__15656__15658 = cljs.core.first.call(null,G__15653__15654);
var vec__15657__15659 = G__15656__15658;
var name__15660 = cljs.core.nth.call(null,vec__15657__15659,0,null);
var value__15661 = cljs.core.nth.call(null,vec__15657__15659,1,null);
var G__15653__15662 = G__15653__15654;

var G__15656__15663 = G__15656__15658;
var G__15653__15664 = G__15653__15662;

while(true){
var vec__15665__15666 = G__15656__15663;
var name__15667 = cljs.core.nth.call(null,vec__15665__15666,0,null);
var value__15668 = cljs.core.nth.call(null,vec__15665__15666,1,null);
var G__15653__15669 = G__15653__15664;

domina.set_style_BANG_.call(null,content,name__15667,value__15668);
var temp__3698__auto____15670 = cljs.core.next.call(null,G__15653__15669);

if(cljs.core.truth_(temp__3698__auto____15670))
{var G__15653__15671 = temp__3698__auto____15670;

{
var G__15676 = cljs.core.first.call(null,G__15653__15671);
var G__15677 = G__15653__15671;
G__15656__15663 = G__15676;
G__15653__15664 = G__15677;
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
var G__15682__15683 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15682__15683))
{var G__15687__15689 = cljs.core.first.call(null,G__15682__15683);
var vec__15688__15690 = G__15687__15689;
var name__15691 = cljs.core.nth.call(null,vec__15688__15690,0,null);
var value__15692 = cljs.core.nth.call(null,vec__15688__15690,1,null);
var G__15682__15694 = G__15682__15683;

var G__15687__15695 = G__15687__15689;
var G__15682__15696 = G__15682__15694;

while(true){
var vec__15697__15699 = G__15687__15695;
var name__15701 = cljs.core.nth.call(null,vec__15697__15699,0,null);
var value__15703 = cljs.core.nth.call(null,vec__15697__15699,1,null);
var G__15682__15704 = G__15682__15696;

domina.set_attr_BANG_.call(null,content,name__15701,value__15703);
var temp__3698__auto____15709 = cljs.core.next.call(null,G__15682__15704);

if(cljs.core.truth_(temp__3698__auto____15709))
{var G__15682__15712 = temp__3698__auto____15709;

{
var G__15728 = cljs.core.first.call(null,G__15682__15712);
var G__15729 = G__15682__15712;
G__15687__15695 = G__15728;
G__15682__15696 = G__15729;
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
var G__15732__15733 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15732__15733))
{var node__15734 = cljs.core.first.call(null,G__15732__15733);
var G__15732__15735 = G__15732__15733;

while(true){
goog.dom.classes.add.call(null,node__15734,class$);
var temp__3698__auto____15737 = cljs.core.next.call(null,G__15732__15735);

if(cljs.core.truth_(temp__3698__auto____15737))
{var G__15732__15739 = temp__3698__auto____15737;

{
var G__15746 = cljs.core.first.call(null,G__15732__15739);
var G__15747 = G__15732__15739;
node__15734 = G__15746;
G__15732__15735 = G__15747;
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
var G__15752__15753 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15752__15753))
{var node__15755 = cljs.core.first.call(null,G__15752__15753);
var G__15752__15756 = G__15752__15753;

while(true){
goog.dom.classes.remove.call(null,node__15755,class$);
var temp__3698__auto____15760 = cljs.core.next.call(null,G__15752__15756);

if(cljs.core.truth_(temp__3698__auto____15760))
{var G__15752__15761 = temp__3698__auto____15760;

{
var G__15782 = cljs.core.first.call(null,G__15752__15761);
var G__15783 = G__15752__15761;
node__15755 = G__15782;
G__15752__15756 = G__15783;
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
var text__15802 = (function (content){
return text.call(null,content,true);
});
var text__15803 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15802.call(this,content);
case  2 :
return text__15803.call(this,content,normalize);
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
var G__15808__15809 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15808__15809))
{var node__15810 = cljs.core.first.call(null,G__15808__15809);
var G__15808__15811 = G__15808__15809;

while(true){
goog.dom.setTextContent.call(null,node__15810,value);
var temp__3698__auto____15812 = cljs.core.next.call(null,G__15808__15811);

if(cljs.core.truth_(temp__3698__auto____15812))
{var G__15808__15813 = temp__3698__auto____15812;

{
var G__15816 = cljs.core.first.call(null,G__15808__15813);
var G__15817 = G__15808__15813;
node__15810 = G__15816;
G__15808__15811 = G__15817;
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
var G__15826__15829 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15826__15829))
{var node__15831 = cljs.core.first.call(null,G__15826__15829);
var G__15826__15832 = G__15826__15829;

while(true){
goog.dom.forms.setValue.call(null,node__15831,value);
var temp__3698__auto____15835 = cljs.core.next.call(null,G__15826__15832);

if(cljs.core.truth_(temp__3698__auto____15835))
{var G__15826__15836 = temp__3698__auto____15835;

{
var G__15843 = cljs.core.first.call(null,G__15826__15836);
var G__15844 = G__15826__15836;
node__15831 = G__15843;
G__15826__15832 = G__15844;
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
domina.set_html_BANG_ = (function set_html_BANG_(content,html_string){
var allows_inner_html_QMARK___15853 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___15855 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__15858 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___15859 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__15858);
var fallback__15862 = (function (p1__15847_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__15847_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____15864 = allows_inner_html_QMARK___15853;

if(cljs.core.truth_(and__3546__auto____15864))
{var and__3546__auto____15866 = (function (){var or__3548__auto____15865 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____15865))
{return or__3548__auto____15865;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___15855);
}
})();

if(cljs.core.truth_(and__3546__auto____15866))
{return cljs.core.not.call(null,special_tag_QMARK___15859);
} else
{return and__3546__auto____15866;
}
} else
{return and__3546__auto____15864;
}
})()))
{var value__15869 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__15872__15874 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15872__15874))
{var node__15876 = cljs.core.first.call(null,G__15872__15874);
var G__15872__15877 = G__15872__15874;

while(true){
goog.events.removeAll.call(null,node__15876);
node__15876.innerHTML = value__15869;
var temp__3698__auto____15881 = cljs.core.next.call(null,G__15872__15877);

if(cljs.core.truth_(temp__3698__auto____15881))
{var G__15872__15883 = temp__3698__auto____15881;

{
var G__15890 = cljs.core.first.call(null,G__15872__15883);
var G__15891 = G__15872__15883;
node__15876 = G__15890;
G__15872__15877 = G__15891;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e15870){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e15870)))
{var e__15871 = e15870;

fallback__15862.call(null,value__15869);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e15870;
} else
{}
}
}} else
{fallback__15862.call(null,html_string);
}
return content;
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__15892 = domina.nodes.call(null,parent_content);
var children__15893 = domina.nodes.call(null,child_content);
var first_child__15903 = (function (){var frag__15894 = document.createDocumentFragment();

var G__15895__15898 = cljs.core.seq.call(null,children__15893);

if(cljs.core.truth_(G__15895__15898))
{var child__15899 = cljs.core.first.call(null,G__15895__15898);
var G__15895__15900 = G__15895__15898;

while(true){
frag__15894.appendChild(child__15899);
var temp__3698__auto____15901 = cljs.core.next.call(null,G__15895__15900);

if(cljs.core.truth_(temp__3698__auto____15901))
{var G__15895__15902 = temp__3698__auto____15901;

{
var G__15908 = cljs.core.first.call(null,G__15895__15902);
var G__15909 = G__15895__15902;
child__15899 = G__15908;
G__15895__15900 = G__15909;
continue;
}
} else
{}
break;
}
} else
{}
return frag__15894;
})();
var other_children__15904 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__15892) - 1),(function (){
return first_child__15903.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__15892)))
{f.call(null,cljs.core.first.call(null,parents__15892),first_child__15903);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15851_SHARP_,p2__15852_SHARP_){
return f.call(null,p1__15851_SHARP_,p2__15852_SHARP_);
}),cljs.core.rest.call(null,parents__15892),other_children__15904));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__15913 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__15914 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_item__15913.call(this,nl);
case  2 :
return lazy_nl_via_item__15914.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__15916 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__15917 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_array_ref__15916.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__15917.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
/**
* Early versions of IE have things which are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(cljs.core.truth_((function (){var x__5944__auto____15936 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____15937 = x__5944__auto____15936;

if(cljs.core.truth_(and__3546__auto____15937))
{var and__3546__auto____15938 = x__5944__auto____15936.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15938))
{var and__3546__auto____15939 = x__5944__auto____15936.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15939))
{return cljs.core.not.call(null,x__5944__auto____15936.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15939;
}
} else
{return and__3546__auto____15938;
}
} else
{return and__3546__auto____15937;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5944__auto____15936);
}
})()))
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(list_thing.length))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(cljs.core.truth_("﷐'default"))
{return cljs.core.cons.call(null,list_thing);
} else
{return null;
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5944__auto____15945 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15946 = x__5944__auto____15945;

if(cljs.core.truth_(and__3546__auto____15946))
{var and__3546__auto____15950 = x__5944__auto____15945.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15950))
{var and__3546__auto____15951 = x__5944__auto____15945.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15951))
{return cljs.core.not.call(null,x__5944__auto____15945.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15951;
}
} else
{return and__3546__auto____15950;
}
} else
{return and__3546__auto____15946;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5944__auto____15945);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(content.length))
{return domina.lazy_nodelist.call(null,content);
} else
{if(cljs.core.truth_("﷐'default"))
{return cljs.core.cons.call(null,content);
} else
{return null;
}
}
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5944__auto____15956 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15957 = x__5944__auto____15956;

if(cljs.core.truth_(and__3546__auto____15957))
{var and__3546__auto____15958 = x__5944__auto____15956.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15958))
{var and__3546__auto____15959 = x__5944__auto____15956.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15959))
{return cljs.core.not.call(null,x__5944__auto____15956.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15959;
}
} else
{return and__3546__auto____15958;
}
} else
{return and__3546__auto____15957;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5944__auto____15956);
}
})()))
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(content.length))
{return content.item(0);
} else
{if(cljs.core.truth_("﷐'default"))
{return content;
} else
{return null;
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__15968 = null;
var G__15968__15969 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15968__15970 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15968 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15968__15969.call(this,nodelist,n);
case  3 :
return G__15968__15970.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15968;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__15972 = null;
var G__15972__15973 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15972__15974 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15972 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15972__15973.call(this,nodelist,n);
case  3 :
return G__15972__15974.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15972;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__15978 = null;
var G__15978__15979 = (function (coll,n){
return coll.item(n);
});
var G__15978__15980 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__15978 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15978__15979.call(this,coll,n);
case  3 :
return G__15978__15980.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15978;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
