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
var opt_wrapper__16043 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__16044 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__16045 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__16044,"caption":table_section_wrapper__16044,"optgroup":opt_wrapper__16043,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__16045,"thead":table_section_wrapper__16044,"th":cell_wrapper__16045,"option":opt_wrapper__16043,"tbody":table_section_wrapper__16044,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__16044});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___16060 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__16066 = (cljs.core.truth_((function (){var and__3546__auto____16061 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____16061))
{return no_tbody_QMARK___16060;
} else
{return and__3546__auto____16061;
}
})())?(function (){var and__3546__auto____16063 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____16063))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____16063;
}
})():(cljs.core.truth_((function (){var and__3546__auto____16065 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____16065))
{return no_tbody_QMARK___16060;
} else
{return and__3546__auto____16065;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__16067__16068 = cljs.core.seq.call(null,tbody__16066);

if(cljs.core.truth_(G__16067__16068))
{var child__16069 = cljs.core.first.call(null,G__16067__16068);
var G__16067__16070 = G__16067__16068;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____16071 = cljs.core._EQ_.call(null,child__16069.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____16071))
{return cljs.core._EQ_.call(null,child__16069.childNodes.length,0);
} else
{return and__3546__auto____16071;
}
})()))
{child__16069.parentNode.removeChild(child__16069);
} else
{}
var temp__3698__auto____16072 = cljs.core.next.call(null,G__16067__16070);

if(cljs.core.truth_(temp__3698__auto____16072))
{var G__16067__16074 = temp__3698__auto____16072;

{
var G__16076 = cljs.core.first.call(null,G__16067__16074);
var G__16077 = G__16067__16074;
child__16069 = G__16076;
G__16067__16070 = G__16077;
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
var html__16081 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__16084 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__16081))).toLowerCase();
var vec__16080__16085 = cljs.core.get.call(null,domina.wrap_map,tag_name__16084,"﷐'default".call(null,domina.wrap_map));
var depth__16087 = cljs.core.nth.call(null,vec__16080__16085,0,null);
var start_wrap__16088 = cljs.core.nth.call(null,vec__16080__16085,1,null);
var end_wrap__16090 = cljs.core.nth.call(null,vec__16080__16085,2,null);
var div__16096 = (function (){var wrapper__16092 = (function (){var div__16091 = document.createElement("div");

div__16091.innerHTML = cljs.core.str.call(null,start_wrap__16088,html__16081,end_wrap__16090);
return div__16091;
})();
var level__16093 = depth__16087;

while(true){
if(cljs.core.truth_((level__16093 > 0)))
{{
var G__16105 = wrapper__16092.lastChild;
var G__16106 = (level__16093 - 1);
wrapper__16092 = G__16105;
level__16093 = G__16106;
continue;
}
} else
{return wrapper__16092;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16096,html__16081);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16099 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16099))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__16081);
} else
{return and__3546__auto____16099;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16096,html__16081);
} else
{}
return div__16096.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16118 = content;

if(cljs.core.truth_(and__3546__auto____16118))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16118;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16121 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16121))
{return or__3548__auto____16121;
} else
{var or__3548__auto____16124 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16124))
{return or__3548__auto____16124;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16127 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16127))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16127;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16128 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16128))
{return or__3548__auto____16128;
} else
{var or__3548__auto____16129 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16129))
{return or__3548__auto____16129;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16133 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16133))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16133;
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
if(cljs.core.truth_((void 0 === domina.t16141)))
{
/**
* @constructor
*/
domina.t16141 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16141.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16141");
});
domina.t16141.prototype.domina$DomContent$ = true;
domina.t16141.prototype.domina$DomContent$nodes = (function (_){
var this__16150 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16150.class_name)));
});
domina.t16141.prototype.domina$DomContent$single_node = (function (_){
var this__16158 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16158.class_name)));
});
domina.t16141.prototype.cljs$core$IMeta$ = true;
domina.t16141.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16163 = this;
return this__16163.__meta;
});
domina.t16141.prototype.cljs$core$IWithMeta$ = true;
domina.t16141.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16165 = this;
return (new domina.t16141(this__16165.class_name,this__16165.by_class,__meta));
});
domina.t16141;
} else
{}
return (new domina.t16141(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16173_SHARP_){
return p1__16173_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16198_SHARP_,p2__16199_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16198_SHARP_,p2__16199_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16207_SHARP_,p2__16206_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16206_SHARP_,p1__16207_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16209_SHARP_,p2__16208_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16208_SHARP_,p1__16209_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16217_SHARP_,p2__16216_SHARP_){
return goog.dom.replaceNode.call(null,p2__16216_SHARP_,p1__16217_SHARP_);
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
var s__16238 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16238)))
{return null;
} else
{return s__16238;
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
var G__16245__16247 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16245__16247))
{var n__16301 = cljs.core.first.call(null,G__16245__16247);
var G__16245__16303 = G__16245__16247;

while(true){
goog.style.setStyle.call(null,n__16301,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16305 = cljs.core.next.call(null,G__16245__16303);

if(cljs.core.truth_(temp__3698__auto____16305))
{var G__16245__16306 = temp__3698__auto____16305;

{
var G__16307 = cljs.core.first.call(null,G__16245__16306);
var G__16308 = G__16245__16306;
n__16301 = G__16307;
G__16245__16303 = G__16308;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16310){
var content = cljs.core.first(arglist__16310);
var name = cljs.core.first(cljs.core.next(arglist__16310));
var value = cljs.core.rest(cljs.core.next(arglist__16310));
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
var G__16316__16317 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16316__16317))
{var n__16329 = cljs.core.first.call(null,G__16316__16317);
var G__16316__16331 = G__16316__16317;

while(true){
n__16329.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16335 = cljs.core.next.call(null,G__16316__16331);

if(cljs.core.truth_(temp__3698__auto____16335))
{var G__16316__16336 = temp__3698__auto____16335;

{
var G__16342 = cljs.core.first.call(null,G__16316__16336);
var G__16343 = G__16316__16336;
n__16329 = G__16342;
G__16316__16331 = G__16343;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16346){
var content = cljs.core.first(arglist__16346);
var name = cljs.core.first(cljs.core.next(arglist__16346));
var value = cljs.core.rest(cljs.core.next(arglist__16346));
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
var vec__16351__16354 = pair.split(/\s*:\s*/);
var k__16355 = cljs.core.nth.call(null,vec__16351__16354,0,null);
var v__16356 = cljs.core.nth.call(null,vec__16351__16354,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16358 = k__16355;

if(cljs.core.truth_(and__3546__auto____16358))
{return v__16356;
} else
{return and__3546__auto____16358;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16355.toLowerCase()),v__16356);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16371 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16371)))
{return domina.parse_style_attributes.call(null,style__16371);
} else
{if(cljs.core.truth_(style__16371.cssText))
{return domina.parse_style_attributes.call(null,style__16371.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16379 = domina.single_node.call(null,content);
var attrs__16380 = node__16379.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16370_SHARP_){
var attr__16386 = attrs__16380.item(p1__16370_SHARP_);
var value__16389 = attr__16386.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16395 = cljs.core.not_EQ_.call(null,null,value__16389);

if(cljs.core.truth_(and__3546__auto____16395))
{return cljs.core.not_EQ_.call(null,"",value__16389);
} else
{return and__3546__auto____16395;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16386.nodeName.toLowerCase())],[attr__16386.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16380.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16410__16411 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16410__16411))
{var G__16413__16415 = cljs.core.first.call(null,G__16410__16411);
var vec__16414__16416 = G__16413__16415;
var name__16417 = cljs.core.nth.call(null,vec__16414__16416,0,null);
var value__16418 = cljs.core.nth.call(null,vec__16414__16416,1,null);
var G__16410__16419 = G__16410__16411;

var G__16413__16420 = G__16413__16415;
var G__16410__16421 = G__16410__16419;

while(true){
var vec__16422__16423 = G__16413__16420;
var name__16424 = cljs.core.nth.call(null,vec__16422__16423,0,null);
var value__16425 = cljs.core.nth.call(null,vec__16422__16423,1,null);
var G__16410__16426 = G__16410__16421;

domina.set_style_BANG_.call(null,content,name__16424,value__16425);
var temp__3698__auto____16427 = cljs.core.next.call(null,G__16410__16426);

if(cljs.core.truth_(temp__3698__auto____16427))
{var G__16410__16430 = temp__3698__auto____16427;

{
var G__16452 = cljs.core.first.call(null,G__16410__16430);
var G__16453 = G__16410__16430;
G__16413__16420 = G__16452;
G__16410__16421 = G__16453;
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
var G__16465__16468 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16465__16468))
{var G__16482__16484 = cljs.core.first.call(null,G__16465__16468);
var vec__16483__16485 = G__16482__16484;
var name__16486 = cljs.core.nth.call(null,vec__16483__16485,0,null);
var value__16487 = cljs.core.nth.call(null,vec__16483__16485,1,null);
var G__16465__16488 = G__16465__16468;

var G__16482__16489 = G__16482__16484;
var G__16465__16490 = G__16465__16488;

while(true){
var vec__16491__16492 = G__16482__16489;
var name__16493 = cljs.core.nth.call(null,vec__16491__16492,0,null);
var value__16494 = cljs.core.nth.call(null,vec__16491__16492,1,null);
var G__16465__16495 = G__16465__16490;

domina.set_attr_BANG_.call(null,content,name__16493,value__16494);
var temp__3698__auto____16498 = cljs.core.next.call(null,G__16465__16495);

if(cljs.core.truth_(temp__3698__auto____16498))
{var G__16465__16499 = temp__3698__auto____16498;

{
var G__16504 = cljs.core.first.call(null,G__16465__16499);
var G__16505 = G__16465__16499;
G__16482__16489 = G__16504;
G__16465__16490 = G__16505;
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
var G__16508__16510 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16508__16510))
{var node__16513 = cljs.core.first.call(null,G__16508__16510);
var G__16508__16514 = G__16508__16510;

while(true){
goog.dom.classes.add.call(null,node__16513,class$);
var temp__3698__auto____16521 = cljs.core.next.call(null,G__16508__16514);

if(cljs.core.truth_(temp__3698__auto____16521))
{var G__16508__16523 = temp__3698__auto____16521;

{
var G__16524 = cljs.core.first.call(null,G__16508__16523);
var G__16526 = G__16508__16523;
node__16513 = G__16524;
G__16508__16514 = G__16526;
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
var G__16528__16531 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16528__16531))
{var node__16532 = cljs.core.first.call(null,G__16528__16531);
var G__16528__16535 = G__16528__16531;

while(true){
goog.dom.classes.remove.call(null,node__16532,class$);
var temp__3698__auto____16536 = cljs.core.next.call(null,G__16528__16535);

if(cljs.core.truth_(temp__3698__auto____16536))
{var G__16528__16539 = temp__3698__auto____16536;

{
var G__16546 = cljs.core.first.call(null,G__16528__16539);
var G__16547 = G__16528__16539;
node__16532 = G__16546;
G__16528__16535 = G__16547;
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
var text__16576 = (function (content){
return text.call(null,content,true);
});
var text__16577 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16576.call(this,content);
case  2 :
return text__16577.call(this,content,normalize);
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
var G__16583__16586 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16583__16586))
{var node__16588 = cljs.core.first.call(null,G__16583__16586);
var G__16583__16589 = G__16583__16586;

while(true){
goog.dom.setTextContent.call(null,node__16588,value);
var temp__3698__auto____16592 = cljs.core.next.call(null,G__16583__16589);

if(cljs.core.truth_(temp__3698__auto____16592))
{var G__16583__16593 = temp__3698__auto____16592;

{
var G__16597 = cljs.core.first.call(null,G__16583__16593);
var G__16599 = G__16583__16593;
node__16588 = G__16597;
G__16583__16589 = G__16599;
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
var G__16607__16609 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16607__16609))
{var node__16610 = cljs.core.first.call(null,G__16607__16609);
var G__16607__16611 = G__16607__16609;

while(true){
goog.dom.forms.setValue.call(null,node__16610,value);
var temp__3698__auto____16612 = cljs.core.next.call(null,G__16607__16611);

if(cljs.core.truth_(temp__3698__auto____16612))
{var G__16607__16613 = temp__3698__auto____16612;

{
var G__16616 = cljs.core.first.call(null,G__16607__16613);
var G__16617 = G__16607__16613;
node__16610 = G__16616;
G__16607__16611 = G__16617;
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
var allows_inner_html_QMARK___16625 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16626 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16628 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16631 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16628);
var fallback__16633 = (function (p1__16618_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16618_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16635 = allows_inner_html_QMARK___16625;

if(cljs.core.truth_(and__3546__auto____16635))
{var and__3546__auto____16637 = (function (){var or__3548__auto____16636 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16636))
{return or__3548__auto____16636;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16626);
}
})();

if(cljs.core.truth_(and__3546__auto____16637))
{return cljs.core.not.call(null,special_tag_QMARK___16631);
} else
{return and__3546__auto____16637;
}
} else
{return and__3546__auto____16635;
}
})()))
{var value__16638 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16643__16644 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16643__16644))
{var node__16645 = cljs.core.first.call(null,G__16643__16644);
var G__16643__16646 = G__16643__16644;

while(true){
goog.events.removeAll.call(null,node__16645);
node__16645.innerHTML = value__16638;
var temp__3698__auto____16647 = cljs.core.next.call(null,G__16643__16646);

if(cljs.core.truth_(temp__3698__auto____16647))
{var G__16643__16648 = temp__3698__auto____16647;

{
var G__16656 = cljs.core.first.call(null,G__16643__16648);
var G__16657 = G__16643__16648;
node__16645 = G__16656;
G__16643__16646 = G__16657;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16639){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16639)))
{var e__16642 = e16639;

fallback__16633.call(null,value__16638);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16639;
} else
{}
}
}} else
{fallback__16633.call(null,html_string);
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
var parents__16659 = domina.nodes.call(null,parent_content);
var children__16660 = domina.nodes.call(null,child_content);
var first_child__16668 = (function (){var frag__16661 = document.createDocumentFragment();

var G__16662__16663 = cljs.core.seq.call(null,children__16660);

if(cljs.core.truth_(G__16662__16663))
{var child__16664 = cljs.core.first.call(null,G__16662__16663);
var G__16662__16665 = G__16662__16663;

while(true){
frag__16661.appendChild(child__16664);
var temp__3698__auto____16666 = cljs.core.next.call(null,G__16662__16665);

if(cljs.core.truth_(temp__3698__auto____16666))
{var G__16662__16667 = temp__3698__auto____16666;

{
var G__16747 = cljs.core.first.call(null,G__16662__16667);
var G__16748 = G__16662__16667;
child__16664 = G__16747;
G__16662__16665 = G__16748;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16661;
})();
var other_children__16669 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16659) - 1),(function (){
return first_child__16668.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16659)))
{f.call(null,cljs.core.first.call(null,parents__16659),first_child__16668);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16622_SHARP_,p2__16623_SHARP_){
return f.call(null,p1__16622_SHARP_,p2__16623_SHARP_);
}),cljs.core.rest.call(null,parents__16659),other_children__16669));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16750 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16751 = (function (nl,n){
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
return lazy_nl_via_item__16750.call(this,nl);
case  2 :
return lazy_nl_via_item__16751.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16755 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16756 = (function (nl,n){
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
return lazy_nl_via_array_ref__16755.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16756.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6763__auto____16764 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16765 = x__6763__auto____16764;

if(cljs.core.truth_(and__3546__auto____16765))
{var and__3546__auto____16766 = x__6763__auto____16764.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16766))
{var and__3546__auto____16770 = x__6763__auto____16764.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16770))
{return cljs.core.not.call(null,x__6763__auto____16764.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16770;
}
} else
{return and__3546__auto____16766;
}
} else
{return and__3546__auto____16765;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16764);
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
if(cljs.core.truth_((function (){var x__6763__auto____16780 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16781 = x__6763__auto____16780;

if(cljs.core.truth_(and__3546__auto____16781))
{var and__3546__auto____16782 = x__6763__auto____16780.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16782))
{var and__3546__auto____16783 = x__6763__auto____16780.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16783))
{return cljs.core.not.call(null,x__6763__auto____16780.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16783;
}
} else
{return and__3546__auto____16782;
}
} else
{return and__3546__auto____16781;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16780);
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
if(cljs.core.truth_((function (){var x__6763__auto____16784 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16785 = x__6763__auto____16784;

if(cljs.core.truth_(and__3546__auto____16785))
{var and__3546__auto____16786 = x__6763__auto____16784.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16786))
{var and__3546__auto____16787 = x__6763__auto____16784.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16787))
{return cljs.core.not.call(null,x__6763__auto____16784.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16787;
}
} else
{return and__3546__auto____16786;
}
} else
{return and__3546__auto____16785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16784);
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
var G__16802 = null;
var G__16802__16803 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16802__16804 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16802 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16802__16803.call(this,nodelist,n);
case  3 :
return G__16802__16804.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16802;
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
var G__16806 = null;
var G__16806__16807 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16806__16812 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16806 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16806__16807.call(this,nodelist,n);
case  3 :
return G__16806__16812.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16806;
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
var G__16818 = null;
var G__16818__16819 = (function (coll,n){
return coll.item(n);
});
var G__16818__16820 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16818 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16818__16819.call(this,coll,n);
case  3 :
return G__16818__16820.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16818;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
