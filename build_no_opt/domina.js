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
var opt_wrapper__15974 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15975 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15976 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15975,"caption":table_section_wrapper__15975,"optgroup":opt_wrapper__15974,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15976,"thead":table_section_wrapper__15975,"th":cell_wrapper__15976,"option":opt_wrapper__15974,"tbody":table_section_wrapper__15975,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15975});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15987 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__16023 = (cljs.core.truth_((function (){var and__3546__auto____15988 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15988))
{return no_tbody_QMARK___15987;
} else
{return and__3546__auto____15988;
}
})())?(function (){var and__3546__auto____15991 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15991))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15991;
}
})():(cljs.core.truth_((function (){var and__3546__auto____16017 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____16017))
{return no_tbody_QMARK___15987;
} else
{return and__3546__auto____16017;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__16024__16026 = cljs.core.seq.call(null,tbody__16023);

if(cljs.core.truth_(G__16024__16026))
{var child__16030 = cljs.core.first.call(null,G__16024__16026);
var G__16024__16031 = G__16024__16026;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____16035 = cljs.core._EQ_.call(null,child__16030.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____16035))
{return cljs.core._EQ_.call(null,child__16030.childNodes.length,0);
} else
{return and__3546__auto____16035;
}
})()))
{child__16030.parentNode.removeChild(child__16030);
} else
{}
var temp__3698__auto____16036 = cljs.core.next.call(null,G__16024__16031);

if(cljs.core.truth_(temp__3698__auto____16036))
{var G__16024__16037 = temp__3698__auto____16036;

{
var G__16042 = cljs.core.first.call(null,G__16024__16037);
var G__16043 = G__16024__16037;
child__16030 = G__16042;
G__16024__16031 = G__16043;
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
var html__16048 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__16049 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__16048))).toLowerCase();
var vec__16047__16050 = cljs.core.get.call(null,domina.wrap_map,tag_name__16049,"﷐'default".call(null,domina.wrap_map));
var depth__16051 = cljs.core.nth.call(null,vec__16047__16050,0,null);
var start_wrap__16052 = cljs.core.nth.call(null,vec__16047__16050,1,null);
var end_wrap__16053 = cljs.core.nth.call(null,vec__16047__16050,2,null);
var div__16063 = (function (){var wrapper__16058 = (function (){var div__16055 = document.createElement("div");

div__16055.innerHTML = cljs.core.str.call(null,start_wrap__16052,html__16048,end_wrap__16053);
return div__16055;
})();
var level__16059 = depth__16051;

while(true){
if(cljs.core.truth_((level__16059 > 0)))
{{
var G__16069 = wrapper__16058.lastChild;
var G__16070 = (level__16059 - 1);
wrapper__16058 = G__16069;
level__16059 = G__16070;
continue;
}
} else
{return wrapper__16058;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16063,html__16048);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16065 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16065))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__16048);
} else
{return and__3546__auto____16065;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16063,html__16048);
} else
{}
return div__16063.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16095 = content;

if(cljs.core.truth_(and__3546__auto____16095))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16095;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16097 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16097))
{return or__3548__auto____16097;
} else
{var or__3548__auto____16098 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16098))
{return or__3548__auto____16098;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16100 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16100))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16100;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16104 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16104))
{return or__3548__auto____16104;
} else
{var or__3548__auto____16106 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16106))
{return or__3548__auto____16106;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16137 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16137))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16137;
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
if(cljs.core.truth_((void 0 === domina.t16172)))
{
/**
* @constructor
*/
domina.t16172 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16172.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16172");
});
domina.t16172.prototype.domina$DomContent$ = true;
domina.t16172.prototype.domina$DomContent$nodes = (function (_){
var this__16182 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16182.class_name)));
});
domina.t16172.prototype.domina$DomContent$single_node = (function (_){
var this__16189 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16189.class_name)));
});
domina.t16172.prototype.cljs$core$IMeta$ = true;
domina.t16172.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16192 = this;
return this__16192.__meta;
});
domina.t16172.prototype.cljs$core$IWithMeta$ = true;
domina.t16172.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16193 = this;
return (new domina.t16172(this__16193.class_name,this__16193.by_class,__meta));
});
domina.t16172;
} else
{}
return (new domina.t16172(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16201_SHARP_){
return p1__16201_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16218_SHARP_,p2__16219_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16218_SHARP_,p2__16219_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16230_SHARP_,p2__16229_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16229_SHARP_,p1__16230_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16238_SHARP_,p2__16236_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16236_SHARP_,p1__16238_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16246_SHARP_,p2__16245_SHARP_){
return goog.dom.replaceNode.call(null,p2__16245_SHARP_,p1__16246_SHARP_);
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
var s__16297 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16297)))
{return null;
} else
{return s__16297;
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
var G__16305__16306 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16305__16306))
{var n__16307 = cljs.core.first.call(null,G__16305__16306);
var G__16305__16308 = G__16305__16306;

while(true){
goog.style.setStyle.call(null,n__16307,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16310 = cljs.core.next.call(null,G__16305__16308);

if(cljs.core.truth_(temp__3698__auto____16310))
{var G__16305__16313 = temp__3698__auto____16310;

{
var G__16326 = cljs.core.first.call(null,G__16305__16313);
var G__16327 = G__16305__16313;
n__16307 = G__16326;
G__16305__16308 = G__16327;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16331){
var content = cljs.core.first(arglist__16331);
var name = cljs.core.first(cljs.core.next(arglist__16331));
var value = cljs.core.rest(cljs.core.next(arglist__16331));
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
var G__16337__16339 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16337__16339))
{var n__16341 = cljs.core.first.call(null,G__16337__16339);
var G__16337__16342 = G__16337__16339;

while(true){
n__16341.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16347 = cljs.core.next.call(null,G__16337__16342);

if(cljs.core.truth_(temp__3698__auto____16347))
{var G__16337__16351 = temp__3698__auto____16347;

{
var G__16356 = cljs.core.first.call(null,G__16337__16351);
var G__16357 = G__16337__16351;
n__16341 = G__16356;
G__16337__16342 = G__16357;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16358){
var content = cljs.core.first(arglist__16358);
var name = cljs.core.first(cljs.core.next(arglist__16358));
var value = cljs.core.rest(cljs.core.next(arglist__16358));
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
var vec__16360__16361 = pair.split(/\s*:\s*/);
var k__16364 = cljs.core.nth.call(null,vec__16360__16361,0,null);
var v__16367 = cljs.core.nth.call(null,vec__16360__16361,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16370 = k__16364;

if(cljs.core.truth_(and__3546__auto____16370))
{return v__16367;
} else
{return and__3546__auto____16370;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16364.toLowerCase()),v__16367);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16384 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16384)))
{return domina.parse_style_attributes.call(null,style__16384);
} else
{if(cljs.core.truth_(style__16384.cssText))
{return domina.parse_style_attributes.call(null,style__16384.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16389 = domina.single_node.call(null,content);
var attrs__16390 = node__16389.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16381_SHARP_){
var attr__16391 = attrs__16390.item(p1__16381_SHARP_);
var value__16403 = attr__16391.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16404 = cljs.core.not_EQ_.call(null,null,value__16403);

if(cljs.core.truth_(and__3546__auto____16404))
{return cljs.core.not_EQ_.call(null,"",value__16403);
} else
{return and__3546__auto____16404;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16391.nodeName.toLowerCase())],[attr__16391.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16390.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16430__16431 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16430__16431))
{var G__16435__16439 = cljs.core.first.call(null,G__16430__16431);
var vec__16437__16441 = G__16435__16439;
var name__16443 = cljs.core.nth.call(null,vec__16437__16441,0,null);
var value__16445 = cljs.core.nth.call(null,vec__16437__16441,1,null);
var G__16430__16447 = G__16430__16431;

var G__16435__16450 = G__16435__16439;
var G__16430__16452 = G__16430__16447;

while(true){
var vec__16455__16457 = G__16435__16450;
var name__16459 = cljs.core.nth.call(null,vec__16455__16457,0,null);
var value__16461 = cljs.core.nth.call(null,vec__16455__16457,1,null);
var G__16430__16463 = G__16430__16452;

domina.set_style_BANG_.call(null,content,name__16459,value__16461);
var temp__3698__auto____16467 = cljs.core.next.call(null,G__16430__16463);

if(cljs.core.truth_(temp__3698__auto____16467))
{var G__16430__16470 = temp__3698__auto____16467;

{
var G__16471 = cljs.core.first.call(null,G__16430__16470);
var G__16473 = G__16430__16470;
G__16435__16450 = G__16471;
G__16430__16452 = G__16473;
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
var G__16500__16501 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16500__16501))
{var G__16503__16505 = cljs.core.first.call(null,G__16500__16501);
var vec__16504__16506 = G__16503__16505;
var name__16507 = cljs.core.nth.call(null,vec__16504__16506,0,null);
var value__16508 = cljs.core.nth.call(null,vec__16504__16506,1,null);
var G__16500__16518 = G__16500__16501;

var G__16503__16519 = G__16503__16505;
var G__16500__16520 = G__16500__16518;

while(true){
var vec__16521__16523 = G__16503__16519;
var name__16525 = cljs.core.nth.call(null,vec__16521__16523,0,null);
var value__16526 = cljs.core.nth.call(null,vec__16521__16523,1,null);
var G__16500__16527 = G__16500__16520;

domina.set_attr_BANG_.call(null,content,name__16525,value__16526);
var temp__3698__auto____16528 = cljs.core.next.call(null,G__16500__16527);

if(cljs.core.truth_(temp__3698__auto____16528))
{var G__16500__16529 = temp__3698__auto____16528;

{
var G__16536 = cljs.core.first.call(null,G__16500__16529);
var G__16537 = G__16500__16529;
G__16503__16519 = G__16536;
G__16500__16520 = G__16537;
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
var G__16544__16546 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16544__16546))
{var node__16547 = cljs.core.first.call(null,G__16544__16546);
var G__16544__16548 = G__16544__16546;

while(true){
goog.dom.classes.add.call(null,node__16547,class$);
var temp__3698__auto____16549 = cljs.core.next.call(null,G__16544__16548);

if(cljs.core.truth_(temp__3698__auto____16549))
{var G__16544__16550 = temp__3698__auto____16549;

{
var G__16558 = cljs.core.first.call(null,G__16544__16550);
var G__16559 = G__16544__16550;
node__16547 = G__16558;
G__16544__16548 = G__16559;
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
var G__16563__16565 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16563__16565))
{var node__16578 = cljs.core.first.call(null,G__16563__16565);
var G__16563__16579 = G__16563__16565;

while(true){
goog.dom.classes.remove.call(null,node__16578,class$);
var temp__3698__auto____16580 = cljs.core.next.call(null,G__16563__16579);

if(cljs.core.truth_(temp__3698__auto____16580))
{var G__16563__16581 = temp__3698__auto____16580;

{
var G__16586 = cljs.core.first.call(null,G__16563__16581);
var G__16587 = G__16563__16581;
node__16578 = G__16586;
G__16563__16579 = G__16587;
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
var text__16594 = (function (content){
return text.call(null,content,true);
});
var text__16595 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16594.call(this,content);
case  2 :
return text__16595.call(this,content,normalize);
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
var G__16604__16607 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16604__16607))
{var node__16609 = cljs.core.first.call(null,G__16604__16607);
var G__16604__16612 = G__16604__16607;

while(true){
goog.dom.setTextContent.call(null,node__16609,value);
var temp__3698__auto____16613 = cljs.core.next.call(null,G__16604__16612);

if(cljs.core.truth_(temp__3698__auto____16613))
{var G__16604__16614 = temp__3698__auto____16613;

{
var G__16618 = cljs.core.first.call(null,G__16604__16614);
var G__16620 = G__16604__16614;
node__16609 = G__16618;
G__16604__16612 = G__16620;
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
var G__16621__16622 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16621__16622))
{var node__16623 = cljs.core.first.call(null,G__16621__16622);
var G__16621__16624 = G__16621__16622;

while(true){
goog.dom.forms.setValue.call(null,node__16623,value);
var temp__3698__auto____16625 = cljs.core.next.call(null,G__16621__16624);

if(cljs.core.truth_(temp__3698__auto____16625))
{var G__16621__16626 = temp__3698__auto____16625;

{
var G__16627 = cljs.core.first.call(null,G__16621__16626);
var G__16628 = G__16621__16626;
node__16623 = G__16627;
G__16621__16624 = G__16628;
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
var allows_inner_html_QMARK___16636 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16637 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16638 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16639 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16638);
var fallback__16640 = (function (p1__16629_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16629_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16641 = allows_inner_html_QMARK___16636;

if(cljs.core.truth_(and__3546__auto____16641))
{var and__3546__auto____16643 = (function (){var or__3548__auto____16642 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16642))
{return or__3548__auto____16642;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16637);
}
})();

if(cljs.core.truth_(and__3546__auto____16643))
{return cljs.core.not.call(null,special_tag_QMARK___16639);
} else
{return and__3546__auto____16643;
}
} else
{return and__3546__auto____16641;
}
})()))
{var value__16644 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16647__16648 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16647__16648))
{var node__16650 = cljs.core.first.call(null,G__16647__16648);
var G__16647__16651 = G__16647__16648;

while(true){
goog.events.removeAll.call(null,node__16650);
node__16650.innerHTML = value__16644;
var temp__3698__auto____16654 = cljs.core.next.call(null,G__16647__16651);

if(cljs.core.truth_(temp__3698__auto____16654))
{var G__16647__16655 = temp__3698__auto____16654;

{
var G__16660 = cljs.core.first.call(null,G__16647__16655);
var G__16661 = G__16647__16655;
node__16650 = G__16660;
G__16647__16651 = G__16661;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16645){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16645)))
{var e__16646 = e16645;

fallback__16640.call(null,value__16644);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16645;
} else
{}
}
}} else
{fallback__16640.call(null,html_string);
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
var parents__16662 = domina.nodes.call(null,parent_content);
var children__16663 = domina.nodes.call(null,child_content);
var first_child__16674 = (function (){var frag__16664 = document.createDocumentFragment();

var G__16665__16666 = cljs.core.seq.call(null,children__16663);

if(cljs.core.truth_(G__16665__16666))
{var child__16667 = cljs.core.first.call(null,G__16665__16666);
var G__16665__16669 = G__16665__16666;

while(true){
frag__16664.appendChild(child__16667);
var temp__3698__auto____16672 = cljs.core.next.call(null,G__16665__16669);

if(cljs.core.truth_(temp__3698__auto____16672))
{var G__16665__16673 = temp__3698__auto____16672;

{
var G__16679 = cljs.core.first.call(null,G__16665__16673);
var G__16680 = G__16665__16673;
child__16667 = G__16679;
G__16665__16669 = G__16680;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16664;
})();
var other_children__16675 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16662) - 1),(function (){
return first_child__16674.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16662)))
{f.call(null,cljs.core.first.call(null,parents__16662),first_child__16674);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16634_SHARP_,p2__16635_SHARP_){
return f.call(null,p1__16634_SHARP_,p2__16635_SHARP_);
}),cljs.core.rest.call(null,parents__16662),other_children__16675));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16683 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16685 = (function (nl,n){
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
return lazy_nl_via_item__16683.call(this,nl);
case  2 :
return lazy_nl_via_item__16685.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16688 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16689 = (function (nl,n){
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
return lazy_nl_via_array_ref__16688.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16689.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6751__auto____16699 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16700 = x__6751__auto____16699;

if(cljs.core.truth_(and__3546__auto____16700))
{var and__3546__auto____16701 = x__6751__auto____16699.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16701))
{var and__3546__auto____16702 = x__6751__auto____16699.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16702))
{return cljs.core.not.call(null,x__6751__auto____16699.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16702;
}
} else
{return and__3546__auto____16701;
}
} else
{return and__3546__auto____16700;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16699);
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
if(cljs.core.truth_((function (){var x__6751__auto____16707 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16708 = x__6751__auto____16707;

if(cljs.core.truth_(and__3546__auto____16708))
{var and__3546__auto____16709 = x__6751__auto____16707.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16709))
{var and__3546__auto____16710 = x__6751__auto____16707.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16710))
{return cljs.core.not.call(null,x__6751__auto____16707.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16710;
}
} else
{return and__3546__auto____16709;
}
} else
{return and__3546__auto____16708;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16707);
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
if(cljs.core.truth_((function (){var x__6751__auto____16711 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16712 = x__6751__auto____16711;

if(cljs.core.truth_(and__3546__auto____16712))
{var and__3546__auto____16717 = x__6751__auto____16711.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16717))
{var and__3546__auto____16718 = x__6751__auto____16711.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16718))
{return cljs.core.not.call(null,x__6751__auto____16711.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16718;
}
} else
{return and__3546__auto____16717;
}
} else
{return and__3546__auto____16712;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16711);
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
var G__16719 = null;
var G__16719__16720 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16719__16721 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16719 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16719__16720.call(this,nodelist,n);
case  3 :
return G__16719__16721.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16719;
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
var G__16723 = null;
var G__16723__16724 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16723__16725 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16723 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16723__16724.call(this,nodelist,n);
case  3 :
return G__16723__16725.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16723;
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
var G__16783 = null;
var G__16783__16784 = (function (coll,n){
return coll.item(n);
});
var G__16783__16785 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16783 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16783__16784.call(this,coll,n);
case  3 :
return G__16783__16785.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16783;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
