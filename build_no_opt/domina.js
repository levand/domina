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
var opt_wrapper__16014 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__16015 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__16016 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__16015,"caption":table_section_wrapper__16015,"optgroup":opt_wrapper__16014,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__16016,"thead":table_section_wrapper__16015,"th":cell_wrapper__16016,"option":opt_wrapper__16014,"tbody":table_section_wrapper__16015,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__16015});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___16018 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__16077 = (cljs.core.truth_((function (){var and__3546__auto____16019 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____16019))
{return no_tbody_QMARK___16018;
} else
{return and__3546__auto____16019;
}
})())?(function (){var and__3546__auto____16020 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____16020))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____16020;
}
})():(cljs.core.truth_((function (){var and__3546__auto____16021 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____16021))
{return no_tbody_QMARK___16018;
} else
{return and__3546__auto____16021;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__16078__16079 = cljs.core.seq.call(null,tbody__16077);

if(cljs.core.truth_(G__16078__16079))
{var child__16080 = cljs.core.first.call(null,G__16078__16079);
var G__16078__16081 = G__16078__16079;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____16082 = cljs.core._EQ_.call(null,child__16080.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____16082))
{return cljs.core._EQ_.call(null,child__16080.childNodes.length,0);
} else
{return and__3546__auto____16082;
}
})()))
{child__16080.parentNode.removeChild(child__16080);
} else
{}
var temp__3698__auto____16083 = cljs.core.next.call(null,G__16078__16081);

if(cljs.core.truth_(temp__3698__auto____16083))
{var G__16078__16084 = temp__3698__auto____16083;

{
var G__16087 = cljs.core.first.call(null,G__16078__16084);
var G__16088 = G__16078__16084;
child__16080 = G__16087;
G__16078__16081 = G__16088;
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
var html__16091 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__16092 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__16091))).toLowerCase();
var vec__16090__16093 = cljs.core.get.call(null,domina.wrap_map,tag_name__16092,"﷐'default".call(null,domina.wrap_map));
var depth__16094 = cljs.core.nth.call(null,vec__16090__16093,0,null);
var start_wrap__16095 = cljs.core.nth.call(null,vec__16090__16093,1,null);
var end_wrap__16097 = cljs.core.nth.call(null,vec__16090__16093,2,null);
var div__16104 = (function (){var wrapper__16101 = (function (){var div__16099 = document.createElement("div");

div__16099.innerHTML = cljs.core.str.call(null,start_wrap__16095,html__16091,end_wrap__16097);
return div__16099;
})();
var level__16102 = depth__16094;

while(true){
if(cljs.core.truth_((level__16102 > 0)))
{{
var G__16107 = wrapper__16101.lastChild;
var G__16108 = (level__16102 - 1);
wrapper__16101 = G__16107;
level__16102 = G__16108;
continue;
}
} else
{return wrapper__16101;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16104,html__16091);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16106 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16106))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__16091);
} else
{return and__3546__auto____16106;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16104,html__16091);
} else
{}
return div__16104.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16114 = content;

if(cljs.core.truth_(and__3546__auto____16114))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16114;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16115 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16115))
{return or__3548__auto____16115;
} else
{var or__3548__auto____16117 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16117))
{return or__3548__auto____16117;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16122 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16122))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16122;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16123 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16123))
{return or__3548__auto____16123;
} else
{var or__3548__auto____16124 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16124))
{return or__3548__auto____16124;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16134 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16134))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16134;
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
if(cljs.core.truth_((void 0 === domina.t16144)))
{
/**
* @constructor
*/
domina.t16144 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16144.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16144");
});
domina.t16144.prototype.domina$DomContent$ = true;
domina.t16144.prototype.domina$DomContent$nodes = (function (_){
var this__16155 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16155.class_name)));
});
domina.t16144.prototype.domina$DomContent$single_node = (function (_){
var this__16156 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16156.class_name)));
});
domina.t16144.prototype.cljs$core$IMeta$ = true;
domina.t16144.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16157 = this;
return this__16157.__meta;
});
domina.t16144.prototype.cljs$core$IWithMeta$ = true;
domina.t16144.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16158 = this;
return (new domina.t16144(this__16158.class_name,this__16158.by_class,__meta));
});
domina.t16144;
} else
{}
return (new domina.t16144(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16163_SHARP_){
return p1__16163_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16170_SHARP_,p2__16171_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16170_SHARP_,p2__16171_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16185_SHARP_,p2__16184_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16184_SHARP_,p1__16185_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16192_SHARP_,p2__16191_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16191_SHARP_,p1__16192_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16223_SHARP_,p2__16222_SHARP_){
return goog.dom.replaceNode.call(null,p2__16222_SHARP_,p1__16223_SHARP_);
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
var s__16233 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16233)))
{return null;
} else
{return s__16233;
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
var G__16235__16237 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16235__16237))
{var n__16240 = cljs.core.first.call(null,G__16235__16237);
var G__16235__16241 = G__16235__16237;

while(true){
goog.style.setStyle.call(null,n__16240,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16246 = cljs.core.next.call(null,G__16235__16241);

if(cljs.core.truth_(temp__3698__auto____16246))
{var G__16235__16249 = temp__3698__auto____16246;

{
var G__16260 = cljs.core.first.call(null,G__16235__16249);
var G__16261 = G__16235__16249;
n__16240 = G__16260;
G__16235__16241 = G__16261;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16262){
var content = cljs.core.first(arglist__16262);
var name = cljs.core.first(cljs.core.next(arglist__16262));
var value = cljs.core.rest(cljs.core.next(arglist__16262));
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
var G__16265__16267 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16265__16267))
{var n__16269 = cljs.core.first.call(null,G__16265__16267);
var G__16265__16270 = G__16265__16267;

while(true){
n__16269.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16278 = cljs.core.next.call(null,G__16265__16270);

if(cljs.core.truth_(temp__3698__auto____16278))
{var G__16265__16282 = temp__3698__auto____16278;

{
var G__16294 = cljs.core.first.call(null,G__16265__16282);
var G__16295 = G__16265__16282;
n__16269 = G__16294;
G__16265__16270 = G__16295;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16296){
var content = cljs.core.first(arglist__16296);
var name = cljs.core.first(cljs.core.next(arglist__16296));
var value = cljs.core.rest(cljs.core.next(arglist__16296));
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
var vec__16299__16300 = pair.split(/\s*:\s*/);
var k__16301 = cljs.core.nth.call(null,vec__16299__16300,0,null);
var v__16302 = cljs.core.nth.call(null,vec__16299__16300,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16365 = k__16301;

if(cljs.core.truth_(and__3546__auto____16365))
{return v__16302;
} else
{return and__3546__auto____16365;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16301.toLowerCase()),v__16302);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16404 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16404)))
{return domina.parse_style_attributes.call(null,style__16404);
} else
{if(cljs.core.truth_(style__16404.cssText))
{return domina.parse_style_attributes.call(null,style__16404.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16409 = domina.single_node.call(null,content);
var attrs__16410 = node__16409.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16399_SHARP_){
var attr__16411 = attrs__16410.item(p1__16399_SHARP_);
var value__16412 = attr__16411.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16413 = cljs.core.not_EQ_.call(null,null,value__16412);

if(cljs.core.truth_(and__3546__auto____16413))
{return cljs.core.not_EQ_.call(null,"",value__16412);
} else
{return and__3546__auto____16413;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16411.nodeName.toLowerCase())],[attr__16411.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16410.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16429__16433 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16429__16433))
{var G__16437__16441 = cljs.core.first.call(null,G__16429__16433);
var vec__16439__16443 = G__16437__16441;
var name__16446 = cljs.core.nth.call(null,vec__16439__16443,0,null);
var value__16447 = cljs.core.nth.call(null,vec__16439__16443,1,null);
var G__16429__16448 = G__16429__16433;

var G__16437__16452 = G__16437__16441;
var G__16429__16453 = G__16429__16448;

while(true){
var vec__16454__16456 = G__16437__16452;
var name__16459 = cljs.core.nth.call(null,vec__16454__16456,0,null);
var value__16460 = cljs.core.nth.call(null,vec__16454__16456,1,null);
var G__16429__16461 = G__16429__16453;

domina.set_style_BANG_.call(null,content,name__16459,value__16460);
var temp__3698__auto____16465 = cljs.core.next.call(null,G__16429__16461);

if(cljs.core.truth_(temp__3698__auto____16465))
{var G__16429__16466 = temp__3698__auto____16465;

{
var G__16471 = cljs.core.first.call(null,G__16429__16466);
var G__16472 = G__16429__16466;
G__16437__16452 = G__16471;
G__16429__16453 = G__16472;
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
var G__16473__16474 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16473__16474))
{var G__16476__16478 = cljs.core.first.call(null,G__16473__16474);
var vec__16477__16479 = G__16476__16478;
var name__16480 = cljs.core.nth.call(null,vec__16477__16479,0,null);
var value__16481 = cljs.core.nth.call(null,vec__16477__16479,1,null);
var G__16473__16482 = G__16473__16474;

var G__16476__16485 = G__16476__16478;
var G__16473__16488 = G__16473__16482;

while(true){
var vec__16491__16492 = G__16476__16485;
var name__16493 = cljs.core.nth.call(null,vec__16491__16492,0,null);
var value__16494 = cljs.core.nth.call(null,vec__16491__16492,1,null);
var G__16473__16495 = G__16473__16488;

domina.set_attr_BANG_.call(null,content,name__16493,value__16494);
var temp__3698__auto____16496 = cljs.core.next.call(null,G__16473__16495);

if(cljs.core.truth_(temp__3698__auto____16496))
{var G__16473__16497 = temp__3698__auto____16496;

{
var G__16510 = cljs.core.first.call(null,G__16473__16497);
var G__16511 = G__16473__16497;
G__16476__16485 = G__16510;
G__16473__16488 = G__16511;
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
var G__16514__16515 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16514__16515))
{var node__16516 = cljs.core.first.call(null,G__16514__16515);
var G__16514__16517 = G__16514__16515;

while(true){
goog.dom.classes.add.call(null,node__16516,class$);
var temp__3698__auto____16519 = cljs.core.next.call(null,G__16514__16517);

if(cljs.core.truth_(temp__3698__auto____16519))
{var G__16514__16521 = temp__3698__auto____16519;

{
var G__16528 = cljs.core.first.call(null,G__16514__16521);
var G__16529 = G__16514__16521;
node__16516 = G__16528;
G__16514__16517 = G__16529;
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
var G__16531__16535 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16531__16535))
{var node__16537 = cljs.core.first.call(null,G__16531__16535);
var G__16531__16539 = G__16531__16535;

while(true){
goog.dom.classes.remove.call(null,node__16537,class$);
var temp__3698__auto____16594 = cljs.core.next.call(null,G__16531__16539);

if(cljs.core.truth_(temp__3698__auto____16594))
{var G__16531__16598 = temp__3698__auto____16594;

{
var G__16609 = cljs.core.first.call(null,G__16531__16598);
var G__16610 = G__16531__16598;
node__16537 = G__16609;
G__16531__16539 = G__16610;
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
var text__16622 = (function (content){
return text.call(null,content,true);
});
var text__16623 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16622.call(this,content);
case  2 :
return text__16623.call(this,content,normalize);
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
var G__16636__16638 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16636__16638))
{var node__16645 = cljs.core.first.call(null,G__16636__16638);
var G__16636__16646 = G__16636__16638;

while(true){
goog.dom.setTextContent.call(null,node__16645,value);
var temp__3698__auto____16650 = cljs.core.next.call(null,G__16636__16646);

if(cljs.core.truth_(temp__3698__auto____16650))
{var G__16636__16651 = temp__3698__auto____16650;

{
var G__16701 = cljs.core.first.call(null,G__16636__16651);
var G__16702 = G__16636__16651;
node__16645 = G__16701;
G__16636__16646 = G__16702;
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
var G__16706__16707 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16706__16707))
{var node__16710 = cljs.core.first.call(null,G__16706__16707);
var G__16706__16711 = G__16706__16707;

while(true){
goog.dom.forms.setValue.call(null,node__16710,value);
var temp__3698__auto____16713 = cljs.core.next.call(null,G__16706__16711);

if(cljs.core.truth_(temp__3698__auto____16713))
{var G__16706__16714 = temp__3698__auto____16713;

{
var G__16721 = cljs.core.first.call(null,G__16706__16714);
var G__16722 = G__16706__16714;
node__16710 = G__16721;
G__16706__16711 = G__16722;
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
var allows_inner_html_QMARK___16728 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16729 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16730 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16731 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16730);
var fallback__16734 = (function (p1__16723_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16723_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16735 = allows_inner_html_QMARK___16728;

if(cljs.core.truth_(and__3546__auto____16735))
{var and__3546__auto____16739 = (function (){var or__3548__auto____16737 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16737))
{return or__3548__auto____16737;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16729);
}
})();

if(cljs.core.truth_(and__3546__auto____16739))
{return cljs.core.not.call(null,special_tag_QMARK___16731);
} else
{return and__3546__auto____16739;
}
} else
{return and__3546__auto____16735;
}
})()))
{var value__16740 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16743__16744 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16743__16744))
{var node__16745 = cljs.core.first.call(null,G__16743__16744);
var G__16743__16746 = G__16743__16744;

while(true){
goog.events.removeAll.call(null,node__16745);
node__16745.innerHTML = value__16740;
var temp__3698__auto____16747 = cljs.core.next.call(null,G__16743__16746);

if(cljs.core.truth_(temp__3698__auto____16747))
{var G__16743__16748 = temp__3698__auto____16747;

{
var G__16753 = cljs.core.first.call(null,G__16743__16748);
var G__16754 = G__16743__16748;
node__16745 = G__16753;
G__16743__16746 = G__16754;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16741){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16741)))
{var e__16742 = e16741;

fallback__16734.call(null,value__16740);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16741;
} else
{}
}
}} else
{fallback__16734.call(null,html_string);
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
var parents__16759 = domina.nodes.call(null,parent_content);
var children__16760 = domina.nodes.call(null,child_content);
var first_child__16768 = (function (){var frag__16761 = document.createDocumentFragment();

var G__16762__16763 = cljs.core.seq.call(null,children__16760);

if(cljs.core.truth_(G__16762__16763))
{var child__16764 = cljs.core.first.call(null,G__16762__16763);
var G__16762__16765 = G__16762__16763;

while(true){
frag__16761.appendChild(child__16764);
var temp__3698__auto____16766 = cljs.core.next.call(null,G__16762__16765);

if(cljs.core.truth_(temp__3698__auto____16766))
{var G__16762__16767 = temp__3698__auto____16766;

{
var G__16774 = cljs.core.first.call(null,G__16762__16767);
var G__16775 = G__16762__16767;
child__16764 = G__16774;
G__16762__16765 = G__16775;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16761;
})();
var other_children__16769 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16759) - 1),(function (){
return first_child__16768.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16759)))
{f.call(null,cljs.core.first.call(null,parents__16759),first_child__16768);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16724_SHARP_,p2__16725_SHARP_){
return f.call(null,p1__16724_SHARP_,p2__16725_SHARP_);
}),cljs.core.rest.call(null,parents__16759),other_children__16769));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16819 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16820 = (function (nl,n){
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
return lazy_nl_via_item__16819.call(this,nl);
case  2 :
return lazy_nl_via_item__16820.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16826 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16827 = (function (nl,n){
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
return lazy_nl_via_array_ref__16826.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16827.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6763__auto____16837 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16838 = x__6763__auto____16837;

if(cljs.core.truth_(and__3546__auto____16838))
{var and__3546__auto____16842 = x__6763__auto____16837.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16842))
{var and__3546__auto____16843 = x__6763__auto____16837.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16843))
{return cljs.core.not.call(null,x__6763__auto____16837.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16843;
}
} else
{return and__3546__auto____16842;
}
} else
{return and__3546__auto____16838;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16837);
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
if(cljs.core.truth_((function (){var x__6763__auto____16844 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16845 = x__6763__auto____16844;

if(cljs.core.truth_(and__3546__auto____16845))
{var and__3546__auto____16846 = x__6763__auto____16844.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16846))
{var and__3546__auto____16847 = x__6763__auto____16844.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16847))
{return cljs.core.not.call(null,x__6763__auto____16844.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16847;
}
} else
{return and__3546__auto____16846;
}
} else
{return and__3546__auto____16845;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16844);
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
if(cljs.core.truth_((function (){var x__6763__auto____16849 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16852 = x__6763__auto____16849;

if(cljs.core.truth_(and__3546__auto____16852))
{var and__3546__auto____16853 = x__6763__auto____16849.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16853))
{var and__3546__auto____16856 = x__6763__auto____16849.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16856))
{return cljs.core.not.call(null,x__6763__auto____16849.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16856;
}
} else
{return and__3546__auto____16853;
}
} else
{return and__3546__auto____16852;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16849);
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
var G__16898 = null;
var G__16898__16899 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16898__16900 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16898 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16898__16899.call(this,nodelist,n);
case  3 :
return G__16898__16900.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16898;
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
var G__16905 = null;
var G__16905__16906 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16905__16907 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16905 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16905__16906.call(this,nodelist,n);
case  3 :
return G__16905__16907.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16905;
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
var G__16924 = null;
var G__16924__16925 = (function (coll,n){
return coll.item(n);
});
var G__16924__16926 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16924 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16924__16925.call(this,coll,n);
case  3 :
return G__16924__16926.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16924;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
