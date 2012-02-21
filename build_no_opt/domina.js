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
var opt_wrapper__16000 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__16001 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__16002 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__16001,"caption":table_section_wrapper__16001,"optgroup":opt_wrapper__16000,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__16002,"thead":table_section_wrapper__16001,"th":cell_wrapper__16002,"option":opt_wrapper__16000,"tbody":table_section_wrapper__16001,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__16001});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___16006 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__16010 = (cljs.core.truth_((function (){var and__3546__auto____16007 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____16007))
{return no_tbody_QMARK___16006;
} else
{return and__3546__auto____16007;
}
})())?(function (){var and__3546__auto____16008 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____16008))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____16008;
}
})():(cljs.core.truth_((function (){var and__3546__auto____16009 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____16009))
{return no_tbody_QMARK___16006;
} else
{return and__3546__auto____16009;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__16011__16012 = cljs.core.seq.call(null,tbody__16010);

if(cljs.core.truth_(G__16011__16012))
{var child__16023 = cljs.core.first.call(null,G__16011__16012);
var G__16011__16024 = G__16011__16012;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____16089 = cljs.core._EQ_.call(null,child__16023.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____16089))
{return cljs.core._EQ_.call(null,child__16023.childNodes.length,0);
} else
{return and__3546__auto____16089;
}
})()))
{child__16023.parentNode.removeChild(child__16023);
} else
{}
var temp__3698__auto____16090 = cljs.core.next.call(null,G__16011__16024);

if(cljs.core.truth_(temp__3698__auto____16090))
{var G__16011__16091 = temp__3698__auto____16090;

{
var G__16107 = cljs.core.first.call(null,G__16011__16091);
var G__16109 = G__16011__16091;
child__16023 = G__16107;
G__16011__16024 = G__16109;
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
var html__16115 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__16116 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__16115))).toLowerCase();
var vec__16114__16117 = cljs.core.get.call(null,domina.wrap_map,tag_name__16116,"﷐'default".call(null,domina.wrap_map));
var depth__16118 = cljs.core.nth.call(null,vec__16114__16117,0,null);
var start_wrap__16120 = cljs.core.nth.call(null,vec__16114__16117,1,null);
var end_wrap__16122 = cljs.core.nth.call(null,vec__16114__16117,2,null);
var div__16126 = (function (){var wrapper__16124 = (function (){var div__16123 = document.createElement("div");

div__16123.innerHTML = cljs.core.str.call(null,start_wrap__16120,html__16115,end_wrap__16122);
return div__16123;
})();
var level__16125 = depth__16118;

while(true){
if(cljs.core.truth_((level__16125 > 0)))
{{
var G__16128 = wrapper__16124.lastChild;
var G__16129 = (level__16125 - 1);
wrapper__16124 = G__16128;
level__16125 = G__16129;
continue;
}
} else
{return wrapper__16124;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16126,html__16115);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16127 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16127))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__16115);
} else
{return and__3546__auto____16127;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16126,html__16115);
} else
{}
return div__16126.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16130 = content;

if(cljs.core.truth_(and__3546__auto____16130))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16130;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16131 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16131))
{return or__3548__auto____16131;
} else
{var or__3548__auto____16132 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16132))
{return or__3548__auto____16132;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16133 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16133))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16133;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16134 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16134))
{return or__3548__auto____16134;
} else
{var or__3548__auto____16135 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16135))
{return or__3548__auto____16135;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16136 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16136))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16136;
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
if(cljs.core.truth_((void 0 === domina.t16137)))
{
/**
* @constructor
*/
domina.t16137 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16137.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16137");
});
domina.t16137.prototype.domina$DomContent$ = true;
domina.t16137.prototype.domina$DomContent$nodes = (function (_){
var this__16140 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16140.class_name)));
});
domina.t16137.prototype.domina$DomContent$single_node = (function (_){
var this__16141 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16141.class_name)));
});
domina.t16137.prototype.cljs$core$IMeta$ = true;
domina.t16137.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16145 = this;
return this__16145.__meta;
});
domina.t16137.prototype.cljs$core$IWithMeta$ = true;
domina.t16137.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16147 = this;
return (new domina.t16137(this__16147.class_name,this__16147.by_class,__meta));
});
domina.t16137;
} else
{}
return (new domina.t16137(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16152_SHARP_){
return p1__16152_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16153_SHARP_,p2__16154_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16153_SHARP_,p2__16154_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16162_SHARP_,p2__16161_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16161_SHARP_,p1__16162_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16167_SHARP_,p2__16166_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16166_SHARP_,p1__16167_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16176_SHARP_,p2__16175_SHARP_){
return goog.dom.replaceNode.call(null,p2__16175_SHARP_,p1__16176_SHARP_);
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
var s__16300 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16300)))
{return null;
} else
{return s__16300;
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
var G__16306__16308 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16306__16308))
{var n__16309 = cljs.core.first.call(null,G__16306__16308);
var G__16306__16310 = G__16306__16308;

while(true){
goog.style.setStyle.call(null,n__16309,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16311 = cljs.core.next.call(null,G__16306__16310);

if(cljs.core.truth_(temp__3698__auto____16311))
{var G__16306__16315 = temp__3698__auto____16311;

{
var G__16320 = cljs.core.first.call(null,G__16306__16315);
var G__16321 = G__16306__16315;
n__16309 = G__16320;
G__16306__16310 = G__16321;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16324){
var content = cljs.core.first(arglist__16324);
var name = cljs.core.first(cljs.core.next(arglist__16324));
var value = cljs.core.rest(cljs.core.next(arglist__16324));
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
var G__16327__16328 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16327__16328))
{var n__16329 = cljs.core.first.call(null,G__16327__16328);
var G__16327__16330 = G__16327__16328;

while(true){
n__16329.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16331 = cljs.core.next.call(null,G__16327__16330);

if(cljs.core.truth_(temp__3698__auto____16331))
{var G__16327__16332 = temp__3698__auto____16331;

{
var G__16333 = cljs.core.first.call(null,G__16327__16332);
var G__16334 = G__16327__16332;
n__16329 = G__16333;
G__16327__16330 = G__16334;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16335){
var content = cljs.core.first(arglist__16335);
var name = cljs.core.first(cljs.core.next(arglist__16335));
var value = cljs.core.rest(cljs.core.next(arglist__16335));
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
var vec__16336__16338 = pair.split(/\s*:\s*/);
var k__16339 = cljs.core.nth.call(null,vec__16336__16338,0,null);
var v__16340 = cljs.core.nth.call(null,vec__16336__16338,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16341 = k__16339;

if(cljs.core.truth_(and__3546__auto____16341))
{return v__16340;
} else
{return and__3546__auto____16341;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16339.toLowerCase()),v__16340);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16463 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16463)))
{return domina.parse_style_attributes.call(null,style__16463);
} else
{if(cljs.core.truth_(style__16463.cssText))
{return domina.parse_style_attributes.call(null,style__16463.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16464 = domina.single_node.call(null,content);
var attrs__16465 = node__16464.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16379_SHARP_){
var attr__16466 = attrs__16465.item(p1__16379_SHARP_);
var value__16468 = attr__16466.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16469 = cljs.core.not_EQ_.call(null,null,value__16468);

if(cljs.core.truth_(and__3546__auto____16469))
{return cljs.core.not_EQ_.call(null,"",value__16468);
} else
{return and__3546__auto____16469;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16466.nodeName.toLowerCase())],[attr__16466.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16465.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16473__16476 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16473__16476))
{var G__16479__16481 = cljs.core.first.call(null,G__16473__16476);
var vec__16480__16482 = G__16479__16481;
var name__16483 = cljs.core.nth.call(null,vec__16480__16482,0,null);
var value__16484 = cljs.core.nth.call(null,vec__16480__16482,1,null);
var G__16473__16485 = G__16473__16476;

var G__16479__16486 = G__16479__16481;
var G__16473__16487 = G__16473__16485;

while(true){
var vec__16488__16489 = G__16479__16486;
var name__16490 = cljs.core.nth.call(null,vec__16488__16489,0,null);
var value__16491 = cljs.core.nth.call(null,vec__16488__16489,1,null);
var G__16473__16492 = G__16473__16487;

domina.set_style_BANG_.call(null,content,name__16490,value__16491);
var temp__3698__auto____16493 = cljs.core.next.call(null,G__16473__16492);

if(cljs.core.truth_(temp__3698__auto____16493))
{var G__16473__16494 = temp__3698__auto____16493;

{
var G__16498 = cljs.core.first.call(null,G__16473__16494);
var G__16499 = G__16473__16494;
G__16479__16486 = G__16498;
G__16473__16487 = G__16499;
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
var G__16502__16503 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16502__16503))
{var G__16505__16507 = cljs.core.first.call(null,G__16502__16503);
var vec__16506__16508 = G__16505__16507;
var name__16509 = cljs.core.nth.call(null,vec__16506__16508,0,null);
var value__16510 = cljs.core.nth.call(null,vec__16506__16508,1,null);
var G__16502__16511 = G__16502__16503;

var G__16505__16512 = G__16505__16507;
var G__16502__16513 = G__16502__16511;

while(true){
var vec__16514__16515 = G__16505__16512;
var name__16516 = cljs.core.nth.call(null,vec__16514__16515,0,null);
var value__16529 = cljs.core.nth.call(null,vec__16514__16515,1,null);
var G__16502__16530 = G__16502__16513;

domina.set_attr_BANG_.call(null,content,name__16516,value__16529);
var temp__3698__auto____16531 = cljs.core.next.call(null,G__16502__16530);

if(cljs.core.truth_(temp__3698__auto____16531))
{var G__16502__16532 = temp__3698__auto____16531;

{
var G__16544 = cljs.core.first.call(null,G__16502__16532);
var G__16545 = G__16502__16532;
G__16505__16512 = G__16544;
G__16502__16513 = G__16545;
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
var G__16550__16557 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16550__16557))
{var node__16558 = cljs.core.first.call(null,G__16550__16557);
var G__16550__16560 = G__16550__16557;

while(true){
goog.dom.classes.add.call(null,node__16558,class$);
var temp__3698__auto____16562 = cljs.core.next.call(null,G__16550__16560);

if(cljs.core.truth_(temp__3698__auto____16562))
{var G__16550__16564 = temp__3698__auto____16562;

{
var G__16566 = cljs.core.first.call(null,G__16550__16564);
var G__16567 = G__16550__16564;
node__16558 = G__16566;
G__16550__16560 = G__16567;
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
var G__16570__16571 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16570__16571))
{var node__16573 = cljs.core.first.call(null,G__16570__16571);
var G__16570__16575 = G__16570__16571;

while(true){
goog.dom.classes.remove.call(null,node__16573,class$);
var temp__3698__auto____16581 = cljs.core.next.call(null,G__16570__16575);

if(cljs.core.truth_(temp__3698__auto____16581))
{var G__16570__16587 = temp__3698__auto____16581;

{
var G__16601 = cljs.core.first.call(null,G__16570__16587);
var G__16602 = G__16570__16587;
node__16573 = G__16601;
G__16570__16575 = G__16602;
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
var text__16606 = (function (content){
return text.call(null,content,true);
});
var text__16607 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16606.call(this,content);
case  2 :
return text__16607.call(this,content,normalize);
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
var G__16613__16616 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16613__16616))
{var node__16619 = cljs.core.first.call(null,G__16613__16616);
var G__16613__16620 = G__16613__16616;

while(true){
goog.dom.setTextContent.call(null,node__16619,value);
var temp__3698__auto____16622 = cljs.core.next.call(null,G__16613__16620);

if(cljs.core.truth_(temp__3698__auto____16622))
{var G__16613__16624 = temp__3698__auto____16622;

{
var G__16627 = cljs.core.first.call(null,G__16613__16624);
var G__16630 = G__16613__16624;
node__16619 = G__16627;
G__16613__16620 = G__16630;
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
var G__16638__16640 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16638__16640))
{var node__16641 = cljs.core.first.call(null,G__16638__16640);
var G__16638__16642 = G__16638__16640;

while(true){
goog.dom.forms.setValue.call(null,node__16641,value);
var temp__3698__auto____16643 = cljs.core.next.call(null,G__16638__16642);

if(cljs.core.truth_(temp__3698__auto____16643))
{var G__16638__16644 = temp__3698__auto____16643;

{
var G__16706 = cljs.core.first.call(null,G__16638__16644);
var G__16707 = G__16638__16644;
node__16641 = G__16706;
G__16638__16642 = G__16707;
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
var allows_inner_html_QMARK___16716 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16717 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16719 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16723 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16719);
var fallback__16724 = (function (p1__16713_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16713_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16725 = allows_inner_html_QMARK___16716;

if(cljs.core.truth_(and__3546__auto____16725))
{var and__3546__auto____16727 = (function (){var or__3548__auto____16726 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16726))
{return or__3548__auto____16726;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16717);
}
})();

if(cljs.core.truth_(and__3546__auto____16727))
{return cljs.core.not.call(null,special_tag_QMARK___16723);
} else
{return and__3546__auto____16727;
}
} else
{return and__3546__auto____16725;
}
})()))
{var value__16728 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16731__16732 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16731__16732))
{var node__16733 = cljs.core.first.call(null,G__16731__16732);
var G__16731__16734 = G__16731__16732;

while(true){
goog.events.removeAll.call(null,node__16733);
node__16733.innerHTML = value__16728;
var temp__3698__auto____16735 = cljs.core.next.call(null,G__16731__16734);

if(cljs.core.truth_(temp__3698__auto____16735))
{var G__16731__16736 = temp__3698__auto____16735;

{
var G__16739 = cljs.core.first.call(null,G__16731__16736);
var G__16740 = G__16731__16736;
node__16733 = G__16739;
G__16731__16734 = G__16740;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16729){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16729)))
{var e__16730 = e16729;

fallback__16724.call(null,value__16728);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16729;
} else
{}
}
}} else
{fallback__16724.call(null,html_string);
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
var parents__16743 = domina.nodes.call(null,parent_content);
var children__16744 = domina.nodes.call(null,child_content);
var first_child__16754 = (function (){var frag__16746 = document.createDocumentFragment();

var G__16747__16749 = cljs.core.seq.call(null,children__16744);

if(cljs.core.truth_(G__16747__16749))
{var child__16750 = cljs.core.first.call(null,G__16747__16749);
var G__16747__16751 = G__16747__16749;

while(true){
frag__16746.appendChild(child__16750);
var temp__3698__auto____16752 = cljs.core.next.call(null,G__16747__16751);

if(cljs.core.truth_(temp__3698__auto____16752))
{var G__16747__16753 = temp__3698__auto____16752;

{
var G__16760 = cljs.core.first.call(null,G__16747__16753);
var G__16761 = G__16747__16753;
child__16750 = G__16760;
G__16747__16751 = G__16761;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16746;
})();
var other_children__16758 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16743) - 1),(function (){
return first_child__16754.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16743)))
{f.call(null,cljs.core.first.call(null,parents__16743),first_child__16754);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16714_SHARP_,p2__16715_SHARP_){
return f.call(null,p1__16714_SHARP_,p2__16715_SHARP_);
}),cljs.core.rest.call(null,parents__16743),other_children__16758));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16762 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16763 = (function (nl,n){
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
return lazy_nl_via_item__16762.call(this,nl);
case  2 :
return lazy_nl_via_item__16763.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16786 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16787 = (function (nl,n){
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
return lazy_nl_via_array_ref__16786.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16787.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6778__auto____16795 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16796 = x__6778__auto____16795;

if(cljs.core.truth_(and__3546__auto____16796))
{var and__3546__auto____16798 = x__6778__auto____16795.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16798))
{var and__3546__auto____16800 = x__6778__auto____16795.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16800))
{return cljs.core.not.call(null,x__6778__auto____16795.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16800;
}
} else
{return and__3546__auto____16798;
}
} else
{return and__3546__auto____16796;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6778__auto____16795);
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
if(cljs.core.truth_((function (){var x__6778__auto____16804 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16805 = x__6778__auto____16804;

if(cljs.core.truth_(and__3546__auto____16805))
{var and__3546__auto____16806 = x__6778__auto____16804.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16806))
{var and__3546__auto____16807 = x__6778__auto____16804.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16807))
{return cljs.core.not.call(null,x__6778__auto____16804.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16807;
}
} else
{return and__3546__auto____16806;
}
} else
{return and__3546__auto____16805;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6778__auto____16804);
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
if(cljs.core.truth_((function (){var x__6778__auto____16811 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16812 = x__6778__auto____16811;

if(cljs.core.truth_(and__3546__auto____16812))
{var and__3546__auto____16813 = x__6778__auto____16811.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16813))
{var and__3546__auto____16814 = x__6778__auto____16811.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16814))
{return cljs.core.not.call(null,x__6778__auto____16811.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16814;
}
} else
{return and__3546__auto____16813;
}
} else
{return and__3546__auto____16812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6778__auto____16811);
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
var G__16834 = null;
var G__16834__16836 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16834__16838 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16834 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16834__16836.call(this,nodelist,n);
case  3 :
return G__16834__16838.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16834;
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
var G__16841 = null;
var G__16841__16842 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16841__16843 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16841 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16841__16842.call(this,nodelist,n);
case  3 :
return G__16841__16843.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16841;
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
var G__16847 = null;
var G__16847__16848 = (function (coll,n){
return coll.item(n);
});
var G__16847__16849 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16847 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16847__16848.call(this,coll,n);
case  3 :
return G__16847__16849.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16847;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
