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
var opt_wrapper__15949 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15950 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15952 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15950,"caption":table_section_wrapper__15950,"optgroup":opt_wrapper__15949,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15952,"thead":table_section_wrapper__15950,"th":cell_wrapper__15952,"option":opt_wrapper__15949,"tbody":table_section_wrapper__15950,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15950});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15961 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15967 = (cljs.core.truth_((function (){var and__3546__auto____15962 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15962))
{return no_tbody_QMARK___15961;
} else
{return and__3546__auto____15962;
}
})())?(function (){var and__3546__auto____15964 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15964))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15964;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15966 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15966))
{return no_tbody_QMARK___15961;
} else
{return and__3546__auto____15966;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15969__15971 = cljs.core.seq.call(null,tbody__15967);

if(cljs.core.truth_(G__15969__15971))
{var child__15975 = cljs.core.first.call(null,G__15969__15971);
var G__15969__15976 = G__15969__15971;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15978 = cljs.core._EQ_.call(null,child__15975.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15978))
{return cljs.core._EQ_.call(null,child__15975.childNodes.length,0);
} else
{return and__3546__auto____15978;
}
})()))
{child__15975.parentNode.removeChild(child__15975);
} else
{}
var temp__3698__auto____15980 = cljs.core.next.call(null,G__15969__15976);

if(cljs.core.truth_(temp__3698__auto____15980))
{var G__15969__15983 = temp__3698__auto____15980;

{
var G__15994 = cljs.core.first.call(null,G__15969__15983);
var G__15995 = G__15969__15983;
child__15975 = G__15994;
G__15969__15976 = G__15995;
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
var html__16001 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__16002 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__16001))).toLowerCase();
var vec__16000__16003 = cljs.core.get.call(null,domina.wrap_map,tag_name__16002,"﷐'default".call(null,domina.wrap_map));
var depth__16005 = cljs.core.nth.call(null,vec__16000__16003,0,null);
var start_wrap__16006 = cljs.core.nth.call(null,vec__16000__16003,1,null);
var end_wrap__16007 = cljs.core.nth.call(null,vec__16000__16003,2,null);
var div__16011 = (function (){var wrapper__16009 = (function (){var div__16008 = document.createElement("div");

div__16008.innerHTML = cljs.core.str.call(null,start_wrap__16006,html__16001,end_wrap__16007);
return div__16008;
})();
var level__16010 = depth__16005;

while(true){
if(cljs.core.truth_((level__16010 > 0)))
{{
var G__16016 = wrapper__16009.lastChild;
var G__16017 = (level__16010 - 1);
wrapper__16009 = G__16016;
level__16010 = G__16017;
continue;
}
} else
{return wrapper__16009;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16011,html__16001);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16014 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16014))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__16001);
} else
{return and__3546__auto____16014;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16011,html__16001);
} else
{}
return div__16011.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16022 = content;

if(cljs.core.truth_(and__3546__auto____16022))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16022;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16023 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16023))
{return or__3548__auto____16023;
} else
{var or__3548__auto____16026 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16026))
{return or__3548__auto____16026;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16035 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16035))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16035;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16037 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16037))
{return or__3548__auto____16037;
} else
{var or__3548__auto____16038 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16038))
{return or__3548__auto____16038;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16049 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16049))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16049;
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
if(cljs.core.truth_((void 0 === domina.t16053)))
{
/**
* @constructor
*/
domina.t16053 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16053.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16053");
});
domina.t16053.prototype.domina$DomContent$ = true;
domina.t16053.prototype.domina$DomContent$nodes = (function (_){
var this__16057 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16057.class_name)));
});
domina.t16053.prototype.domina$DomContent$single_node = (function (_){
var this__16061 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16061.class_name)));
});
domina.t16053.prototype.cljs$core$IMeta$ = true;
domina.t16053.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16064 = this;
return this__16064.__meta;
});
domina.t16053.prototype.cljs$core$IWithMeta$ = true;
domina.t16053.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16066 = this;
return (new domina.t16053(this__16066.class_name,this__16066.by_class,__meta));
});
domina.t16053;
} else
{}
return (new domina.t16053(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16080_SHARP_){
return p1__16080_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16087_SHARP_,p2__16088_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16087_SHARP_,p2__16088_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16097_SHARP_,p2__16096_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16096_SHARP_,p1__16097_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16100_SHARP_,p2__16099_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16099_SHARP_,p1__16100_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16104_SHARP_,p2__16103_SHARP_){
return goog.dom.replaceNode.call(null,p2__16103_SHARP_,p1__16104_SHARP_);
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
var s__16155 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16155)))
{return null;
} else
{return s__16155;
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
var G__16158__16159 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16158__16159))
{var n__16160 = cljs.core.first.call(null,G__16158__16159);
var G__16158__16161 = G__16158__16159;

while(true){
goog.style.setStyle.call(null,n__16160,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16164 = cljs.core.next.call(null,G__16158__16161);

if(cljs.core.truth_(temp__3698__auto____16164))
{var G__16158__16168 = temp__3698__auto____16164;

{
var G__16177 = cljs.core.first.call(null,G__16158__16168);
var G__16178 = G__16158__16168;
n__16160 = G__16177;
G__16158__16161 = G__16178;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16179){
var content = cljs.core.first(arglist__16179);
var name = cljs.core.first(cljs.core.next(arglist__16179));
var value = cljs.core.rest(cljs.core.next(arglist__16179));
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
var G__16185__16186 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16185__16186))
{var n__16189 = cljs.core.first.call(null,G__16185__16186);
var G__16185__16190 = G__16185__16186;

while(true){
n__16189.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16197 = cljs.core.next.call(null,G__16185__16190);

if(cljs.core.truth_(temp__3698__auto____16197))
{var G__16185__16201 = temp__3698__auto____16197;

{
var G__16215 = cljs.core.first.call(null,G__16185__16201);
var G__16217 = G__16185__16201;
n__16189 = G__16215;
G__16185__16190 = G__16217;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16219){
var content = cljs.core.first(arglist__16219);
var name = cljs.core.first(cljs.core.next(arglist__16219));
var value = cljs.core.rest(cljs.core.next(arglist__16219));
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
var vec__16223__16225 = pair.split(/\s*:\s*/);
var k__16227 = cljs.core.nth.call(null,vec__16223__16225,0,null);
var v__16228 = cljs.core.nth.call(null,vec__16223__16225,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16231 = k__16227;

if(cljs.core.truth_(and__3546__auto____16231))
{return v__16228;
} else
{return and__3546__auto____16231;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16227.toLowerCase()),v__16228);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16257 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16257)))
{return domina.parse_style_attributes.call(null,style__16257);
} else
{if(cljs.core.truth_(style__16257.cssText))
{return domina.parse_style_attributes.call(null,style__16257.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16320 = domina.single_node.call(null,content);
var attrs__16321 = node__16320.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16253_SHARP_){
var attr__16328 = attrs__16321.item(p1__16253_SHARP_);
var value__16329 = attr__16328.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16330 = cljs.core.not_EQ_.call(null,null,value__16329);

if(cljs.core.truth_(and__3546__auto____16330))
{return cljs.core.not_EQ_.call(null,"",value__16329);
} else
{return and__3546__auto____16330;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16328.nodeName.toLowerCase())],[attr__16328.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16321.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16332__16333 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16332__16333))
{var G__16336__16339 = cljs.core.first.call(null,G__16332__16333);
var vec__16337__16340 = G__16336__16339;
var name__16341 = cljs.core.nth.call(null,vec__16337__16340,0,null);
var value__16344 = cljs.core.nth.call(null,vec__16337__16340,1,null);
var G__16332__16345 = G__16332__16333;

var G__16336__16346 = G__16336__16339;
var G__16332__16347 = G__16332__16345;

while(true){
var vec__16348__16349 = G__16336__16346;
var name__16351 = cljs.core.nth.call(null,vec__16348__16349,0,null);
var value__16352 = cljs.core.nth.call(null,vec__16348__16349,1,null);
var G__16332__16353 = G__16332__16347;

domina.set_style_BANG_.call(null,content,name__16351,value__16352);
var temp__3698__auto____16358 = cljs.core.next.call(null,G__16332__16353);

if(cljs.core.truth_(temp__3698__auto____16358))
{var G__16332__16360 = temp__3698__auto____16358;

{
var G__16371 = cljs.core.first.call(null,G__16332__16360);
var G__16372 = G__16332__16360;
G__16336__16346 = G__16371;
G__16332__16347 = G__16372;
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
var G__16377__16378 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16377__16378))
{var G__16380__16382 = cljs.core.first.call(null,G__16377__16378);
var vec__16381__16383 = G__16380__16382;
var name__16384 = cljs.core.nth.call(null,vec__16381__16383,0,null);
var value__16385 = cljs.core.nth.call(null,vec__16381__16383,1,null);
var G__16377__16388 = G__16377__16378;

var G__16380__16389 = G__16380__16382;
var G__16377__16390 = G__16377__16388;

while(true){
var vec__16391__16392 = G__16380__16389;
var name__16393 = cljs.core.nth.call(null,vec__16391__16392,0,null);
var value__16394 = cljs.core.nth.call(null,vec__16391__16392,1,null);
var G__16377__16395 = G__16377__16390;

domina.set_attr_BANG_.call(null,content,name__16393,value__16394);
var temp__3698__auto____16396 = cljs.core.next.call(null,G__16377__16395);

if(cljs.core.truth_(temp__3698__auto____16396))
{var G__16377__16397 = temp__3698__auto____16396;

{
var G__16402 = cljs.core.first.call(null,G__16377__16397);
var G__16403 = G__16377__16397;
G__16380__16389 = G__16402;
G__16377__16390 = G__16403;
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
var G__16410__16411 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16410__16411))
{var node__16412 = cljs.core.first.call(null,G__16410__16411);
var G__16410__16413 = G__16410__16411;

while(true){
goog.dom.classes.add.call(null,node__16412,class$);
var temp__3698__auto____16416 = cljs.core.next.call(null,G__16410__16413);

if(cljs.core.truth_(temp__3698__auto____16416))
{var G__16410__16419 = temp__3698__auto____16416;

{
var G__16423 = cljs.core.first.call(null,G__16410__16419);
var G__16424 = G__16410__16419;
node__16412 = G__16423;
G__16410__16413 = G__16424;
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
var G__16429__16430 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16429__16430))
{var node__16432 = cljs.core.first.call(null,G__16429__16430);
var G__16429__16434 = G__16429__16430;

while(true){
goog.dom.classes.remove.call(null,node__16432,class$);
var temp__3698__auto____16437 = cljs.core.next.call(null,G__16429__16434);

if(cljs.core.truth_(temp__3698__auto____16437))
{var G__16429__16438 = temp__3698__auto____16437;

{
var G__16445 = cljs.core.first.call(null,G__16429__16438);
var G__16446 = G__16429__16438;
node__16432 = G__16445;
G__16429__16434 = G__16446;
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
var text__16463 = (function (content){
return text.call(null,content,true);
});
var text__16464 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16463.call(this,content);
case  2 :
return text__16464.call(this,content,normalize);
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
var G__16473__16475 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16473__16475))
{var node__16477 = cljs.core.first.call(null,G__16473__16475);
var G__16473__16479 = G__16473__16475;

while(true){
goog.dom.setTextContent.call(null,node__16477,value);
var temp__3698__auto____16480 = cljs.core.next.call(null,G__16473__16479);

if(cljs.core.truth_(temp__3698__auto____16480))
{var G__16473__16482 = temp__3698__auto____16480;

{
var G__16490 = cljs.core.first.call(null,G__16473__16482);
var G__16491 = G__16473__16482;
node__16477 = G__16490;
G__16473__16479 = G__16491;
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
var G__16494__16497 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16494__16497))
{var node__16500 = cljs.core.first.call(null,G__16494__16497);
var G__16494__16501 = G__16494__16497;

while(true){
goog.dom.forms.setValue.call(null,node__16500,value);
var temp__3698__auto____16504 = cljs.core.next.call(null,G__16494__16501);

if(cljs.core.truth_(temp__3698__auto____16504))
{var G__16494__16505 = temp__3698__auto____16504;

{
var G__16510 = cljs.core.first.call(null,G__16494__16505);
var G__16511 = G__16494__16505;
node__16500 = G__16510;
G__16494__16501 = G__16511;
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
var allows_inner_html_QMARK___16538 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16540 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16541 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16542 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16541);
var fallback__16543 = (function (p1__16512_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16512_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16544 = allows_inner_html_QMARK___16538;

if(cljs.core.truth_(and__3546__auto____16544))
{var and__3546__auto____16638 = (function (){var or__3548__auto____16545 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16545))
{return or__3548__auto____16545;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16540);
}
})();

if(cljs.core.truth_(and__3546__auto____16638))
{return cljs.core.not.call(null,special_tag_QMARK___16542);
} else
{return and__3546__auto____16638;
}
} else
{return and__3546__auto____16544;
}
})()))
{var value__16639 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16642__16643 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16642__16643))
{var node__16644 = cljs.core.first.call(null,G__16642__16643);
var G__16642__16645 = G__16642__16643;

while(true){
goog.events.removeAll.call(null,node__16644);
node__16644.innerHTML = value__16639;
var temp__3698__auto____16646 = cljs.core.next.call(null,G__16642__16645);

if(cljs.core.truth_(temp__3698__auto____16646))
{var G__16642__16647 = temp__3698__auto____16646;

{
var G__16650 = cljs.core.first.call(null,G__16642__16647);
var G__16651 = G__16642__16647;
node__16644 = G__16650;
G__16642__16645 = G__16651;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16640){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16640)))
{var e__16641 = e16640;

fallback__16543.call(null,value__16639);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16640;
} else
{}
}
}} else
{fallback__16543.call(null,html_string);
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
var parents__16671 = domina.nodes.call(null,parent_content);
var children__16672 = domina.nodes.call(null,child_content);
var first_child__16680 = (function (){var frag__16673 = document.createDocumentFragment();

var G__16674__16675 = cljs.core.seq.call(null,children__16672);

if(cljs.core.truth_(G__16674__16675))
{var child__16676 = cljs.core.first.call(null,G__16674__16675);
var G__16674__16677 = G__16674__16675;

while(true){
frag__16673.appendChild(child__16676);
var temp__3698__auto____16678 = cljs.core.next.call(null,G__16674__16677);

if(cljs.core.truth_(temp__3698__auto____16678))
{var G__16674__16679 = temp__3698__auto____16678;

{
var G__16702 = cljs.core.first.call(null,G__16674__16679);
var G__16703 = G__16674__16679;
child__16676 = G__16702;
G__16674__16677 = G__16703;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16673;
})();
var other_children__16683 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16671) - 1),(function (){
return first_child__16680.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16671)))
{f.call(null,cljs.core.first.call(null,parents__16671),first_child__16680);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16519_SHARP_,p2__16520_SHARP_){
return f.call(null,p1__16519_SHARP_,p2__16520_SHARP_);
}),cljs.core.rest.call(null,parents__16671),other_children__16683));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16707 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16708 = (function (nl,n){
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
return lazy_nl_via_item__16707.call(this,nl);
case  2 :
return lazy_nl_via_item__16708.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16716 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16717 = (function (nl,n){
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
return lazy_nl_via_array_ref__16716.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16717.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6757__auto____16729 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16730 = x__6757__auto____16729;

if(cljs.core.truth_(and__3546__auto____16730))
{var and__3546__auto____16731 = x__6757__auto____16729.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16731))
{var and__3546__auto____16732 = x__6757__auto____16729.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16732))
{return cljs.core.not.call(null,x__6757__auto____16729.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16732;
}
} else
{return and__3546__auto____16731;
}
} else
{return and__3546__auto____16730;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16729);
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
if(cljs.core.truth_((function (){var x__6757__auto____16733 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16735 = x__6757__auto____16733;

if(cljs.core.truth_(and__3546__auto____16735))
{var and__3546__auto____16736 = x__6757__auto____16733.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16736))
{var and__3546__auto____16737 = x__6757__auto____16733.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16737))
{return cljs.core.not.call(null,x__6757__auto____16733.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16737;
}
} else
{return and__3546__auto____16736;
}
} else
{return and__3546__auto____16735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16733);
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
if(cljs.core.truth_((function (){var x__6757__auto____16741 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16742 = x__6757__auto____16741;

if(cljs.core.truth_(and__3546__auto____16742))
{var and__3546__auto____16743 = x__6757__auto____16741.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16743))
{var and__3546__auto____16744 = x__6757__auto____16741.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16744))
{return cljs.core.not.call(null,x__6757__auto____16741.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16744;
}
} else
{return and__3546__auto____16743;
}
} else
{return and__3546__auto____16742;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16741);
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
var G__16762 = null;
var G__16762__16763 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16762__16764 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16762 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16762__16763.call(this,nodelist,n);
case  3 :
return G__16762__16764.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16762;
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
var G__16773 = null;
var G__16773__16774 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16773__16775 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16773 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16773__16774.call(this,nodelist,n);
case  3 :
return G__16773__16775.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16773;
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
var G__16788 = null;
var G__16788__16789 = (function (coll,n){
return coll.item(n);
});
var G__16788__16790 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16788 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16788__16789.call(this,coll,n);
case  3 :
return G__16788__16790.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16788;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
