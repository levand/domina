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
var opt_wrapper__15816 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15817 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15818 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15817,"caption":table_section_wrapper__15817,"optgroup":opt_wrapper__15816,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15818,"thead":table_section_wrapper__15817,"th":cell_wrapper__15818,"option":opt_wrapper__15816,"tbody":table_section_wrapper__15817,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15817});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15826 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15835 = (cljs.core.truth_((function (){var and__3546__auto____15827 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15827))
{return no_tbody_QMARK___15826;
} else
{return and__3546__auto____15827;
}
})())?(function (){var and__3546__auto____15830 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15830))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15830;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15834 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15834))
{return no_tbody_QMARK___15826;
} else
{return and__3546__auto____15834;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15836__15837 = cljs.core.seq.call(null,tbody__15835);

if(cljs.core.truth_(G__15836__15837))
{var child__15838 = cljs.core.first.call(null,G__15836__15837);
var G__15836__15839 = G__15836__15837;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15840 = cljs.core._EQ_.call(null,child__15838.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15840))
{return cljs.core._EQ_.call(null,child__15838.childNodes.length,0);
} else
{return and__3546__auto____15840;
}
})()))
{child__15838.parentNode.removeChild(child__15838);
} else
{}
var temp__3698__auto____15843 = cljs.core.next.call(null,G__15836__15839);

if(cljs.core.truth_(temp__3698__auto____15843))
{var G__15836__15844 = temp__3698__auto____15843;

{
var G__15854 = cljs.core.first.call(null,G__15836__15844);
var G__15855 = G__15836__15844;
child__15838 = G__15854;
G__15836__15839 = G__15855;
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
var html__15876 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15877 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15876))).toLowerCase();
var vec__15875__15878 = cljs.core.get.call(null,domina.wrap_map,tag_name__15877,"﷐'default".call(null,domina.wrap_map));
var depth__15879 = cljs.core.nth.call(null,vec__15875__15878,0,null);
var start_wrap__15883 = cljs.core.nth.call(null,vec__15875__15878,1,null);
var end_wrap__15884 = cljs.core.nth.call(null,vec__15875__15878,2,null);
var div__15892 = (function (){var wrapper__15887 = (function (){var div__15885 = document.createElement("div");

div__15885.innerHTML = cljs.core.str.call(null,start_wrap__15883,html__15876,end_wrap__15884);
return div__15885;
})();
var level__15888 = depth__15879;

while(true){
if(cljs.core.truth_((level__15888 > 0)))
{{
var G__15900 = wrapper__15887.lastChild;
var G__15901 = (level__15888 - 1);
wrapper__15887 = G__15900;
level__15888 = G__15901;
continue;
}
} else
{return wrapper__15887;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__15892,html__15876);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____15893 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____15893))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15876);
} else
{return and__3546__auto____15893;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__15892,html__15876);
} else
{}
return div__15892.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____15909 = content;

if(cljs.core.truth_(and__3546__auto____15909))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15909;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15910 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15910))
{return or__3548__auto____15910;
} else
{var or__3548__auto____15911 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15911))
{return or__3548__auto____15911;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15914 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15914))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15914;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15916 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15916))
{return or__3548__auto____15916;
} else
{var or__3548__auto____15917 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15917))
{return or__3548__auto____15917;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15925 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15925))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15925;
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
if(cljs.core.truth_((void 0 === domina.t15935)))
{
/**
* @constructor
*/
domina.t15935 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15935.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15935");
});
domina.t15935.prototype.domina$DomContent$ = true;
domina.t15935.prototype.domina$DomContent$nodes = (function (_){
var this__15944 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15944.class_name)));
});
domina.t15935.prototype.domina$DomContent$single_node = (function (_){
var this__15948 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15948.class_name)));
});
domina.t15935.prototype.cljs$core$IMeta$ = true;
domina.t15935.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15949 = this;
return this__15949.__meta;
});
domina.t15935.prototype.cljs$core$IWithMeta$ = true;
domina.t15935.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15950 = this;
return (new domina.t15935(this__15950.class_name,this__15950.by_class,__meta));
});
domina.t15935;
} else
{}
return (new domina.t15935(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15951_SHARP_){
return p1__15951_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15952_SHARP_,p2__15974_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15952_SHARP_,p2__15974_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15983_SHARP_,p2__15982_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15982_SHARP_,p1__15983_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15985_SHARP_,p2__15984_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15984_SHARP_,p1__15985_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15990_SHARP_,p2__15989_SHARP_){
return goog.dom.replaceNode.call(null,p2__15989_SHARP_,p1__15990_SHARP_);
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
var s__16002 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16002)))
{return null;
} else
{return s__16002;
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
var G__16019__16021 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16019__16021))
{var n__16023 = cljs.core.first.call(null,G__16019__16021);
var G__16019__16024 = G__16019__16021;

while(true){
goog.style.setStyle.call(null,n__16023,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16026 = cljs.core.next.call(null,G__16019__16024);

if(cljs.core.truth_(temp__3698__auto____16026))
{var G__16019__16028 = temp__3698__auto____16026;

{
var G__16038 = cljs.core.first.call(null,G__16019__16028);
var G__16039 = G__16019__16028;
n__16023 = G__16038;
G__16019__16024 = G__16039;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16043){
var content = cljs.core.first(arglist__16043);
var name = cljs.core.first(cljs.core.next(arglist__16043));
var value = cljs.core.rest(cljs.core.next(arglist__16043));
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
var G__16052__16054 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16052__16054))
{var n__16055 = cljs.core.first.call(null,G__16052__16054);
var G__16052__16056 = G__16052__16054;

while(true){
n__16055.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16058 = cljs.core.next.call(null,G__16052__16056);

if(cljs.core.truth_(temp__3698__auto____16058))
{var G__16052__16060 = temp__3698__auto____16058;

{
var G__16063 = cljs.core.first.call(null,G__16052__16060);
var G__16064 = G__16052__16060;
n__16055 = G__16063;
G__16052__16056 = G__16064;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16066){
var content = cljs.core.first(arglist__16066);
var name = cljs.core.first(cljs.core.next(arglist__16066));
var value = cljs.core.rest(cljs.core.next(arglist__16066));
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
var vec__16070__16071 = pair.split(/\s*:\s*/);
var k__16073 = cljs.core.nth.call(null,vec__16070__16071,0,null);
var v__16074 = cljs.core.nth.call(null,vec__16070__16071,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16075 = k__16073;

if(cljs.core.truth_(and__3546__auto____16075))
{return v__16074;
} else
{return and__3546__auto____16075;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16073.toLowerCase()),v__16074);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16097 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16097)))
{return domina.parse_style_attributes.call(null,style__16097);
} else
{if(cljs.core.truth_(style__16097.cssText))
{return domina.parse_style_attributes.call(null,style__16097.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16101 = domina.single_node.call(null,content);
var attrs__16102 = node__16101.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16095_SHARP_){
var attr__16135 = attrs__16102.item(p1__16095_SHARP_);
var value__16136 = attr__16135.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16137 = cljs.core.not_EQ_.call(null,null,value__16136);

if(cljs.core.truth_(and__3546__auto____16137))
{return cljs.core.not_EQ_.call(null,"",value__16136);
} else
{return and__3546__auto____16137;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16135.nodeName.toLowerCase())],[attr__16135.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16102.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16142__16144 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16142__16144))
{var G__16147__16149 = cljs.core.first.call(null,G__16142__16144);
var vec__16148__16150 = G__16147__16149;
var name__16151 = cljs.core.nth.call(null,vec__16148__16150,0,null);
var value__16152 = cljs.core.nth.call(null,vec__16148__16150,1,null);
var G__16142__16154 = G__16142__16144;

var G__16147__16155 = G__16147__16149;
var G__16142__16156 = G__16142__16154;

while(true){
var vec__16158__16160 = G__16147__16155;
var name__16161 = cljs.core.nth.call(null,vec__16158__16160,0,null);
var value__16163 = cljs.core.nth.call(null,vec__16158__16160,1,null);
var G__16142__16164 = G__16142__16156;

domina.set_style_BANG_.call(null,content,name__16161,value__16163);
var temp__3698__auto____16167 = cljs.core.next.call(null,G__16142__16164);

if(cljs.core.truth_(temp__3698__auto____16167))
{var G__16142__16169 = temp__3698__auto____16167;

{
var G__16177 = cljs.core.first.call(null,G__16142__16169);
var G__16178 = G__16142__16169;
G__16147__16155 = G__16177;
G__16142__16156 = G__16178;
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
var G__16180__16181 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16180__16181))
{var G__16183__16186 = cljs.core.first.call(null,G__16180__16181);
var vec__16184__16187 = G__16183__16186;
var name__16188 = cljs.core.nth.call(null,vec__16184__16187,0,null);
var value__16189 = cljs.core.nth.call(null,vec__16184__16187,1,null);
var G__16180__16191 = G__16180__16181;

var G__16183__16192 = G__16183__16186;
var G__16180__16193 = G__16180__16191;

while(true){
var vec__16195__16198 = G__16183__16192;
var name__16200 = cljs.core.nth.call(null,vec__16195__16198,0,null);
var value__16202 = cljs.core.nth.call(null,vec__16195__16198,1,null);
var G__16180__16203 = G__16180__16193;

domina.set_attr_BANG_.call(null,content,name__16200,value__16202);
var temp__3698__auto____16205 = cljs.core.next.call(null,G__16180__16203);

if(cljs.core.truth_(temp__3698__auto____16205))
{var G__16180__16207 = temp__3698__auto____16205;

{
var G__16211 = cljs.core.first.call(null,G__16180__16207);
var G__16212 = G__16180__16207;
G__16183__16192 = G__16211;
G__16180__16193 = G__16212;
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
var G__16215__16219 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16215__16219))
{var node__16222 = cljs.core.first.call(null,G__16215__16219);
var G__16215__16223 = G__16215__16219;

while(true){
goog.dom.classes.add.call(null,node__16222,class$);
var temp__3698__auto____16226 = cljs.core.next.call(null,G__16215__16223);

if(cljs.core.truth_(temp__3698__auto____16226))
{var G__16215__16228 = temp__3698__auto____16226;

{
var G__16230 = cljs.core.first.call(null,G__16215__16228);
var G__16231 = G__16215__16228;
node__16222 = G__16230;
G__16215__16223 = G__16231;
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
var G__16233__16234 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16233__16234))
{var node__16236 = cljs.core.first.call(null,G__16233__16234);
var G__16233__16237 = G__16233__16234;

while(true){
goog.dom.classes.remove.call(null,node__16236,class$);
var temp__3698__auto____16238 = cljs.core.next.call(null,G__16233__16237);

if(cljs.core.truth_(temp__3698__auto____16238))
{var G__16233__16239 = temp__3698__auto____16238;

{
var G__16241 = cljs.core.first.call(null,G__16233__16239);
var G__16242 = G__16233__16239;
node__16236 = G__16241;
G__16233__16237 = G__16242;
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
var text__16274 = (function (content){
return text.call(null,content,true);
});
var text__16275 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16274.call(this,content);
case  2 :
return text__16275.call(this,content,normalize);
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
var G__16280__16282 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16280__16282))
{var node__16285 = cljs.core.first.call(null,G__16280__16282);
var G__16280__16286 = G__16280__16282;

while(true){
goog.dom.setTextContent.call(null,node__16285,value);
var temp__3698__auto____16290 = cljs.core.next.call(null,G__16280__16286);

if(cljs.core.truth_(temp__3698__auto____16290))
{var G__16280__16294 = temp__3698__auto____16290;

{
var G__16304 = cljs.core.first.call(null,G__16280__16294);
var G__16305 = G__16280__16294;
node__16285 = G__16304;
G__16280__16286 = G__16305;
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
var G__16307__16308 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16307__16308))
{var node__16311 = cljs.core.first.call(null,G__16307__16308);
var G__16307__16312 = G__16307__16308;

while(true){
goog.dom.forms.setValue.call(null,node__16311,value);
var temp__3698__auto____16313 = cljs.core.next.call(null,G__16307__16312);

if(cljs.core.truth_(temp__3698__auto____16313))
{var G__16307__16314 = temp__3698__auto____16313;

{
var G__16315 = cljs.core.first.call(null,G__16307__16314);
var G__16317 = G__16307__16314;
node__16311 = G__16315;
G__16307__16312 = G__16317;
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
var allows_inner_html_QMARK___16333 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16364 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16365 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16366 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16365);
var fallback__16367 = (function (p1__16321_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16321_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16368 = allows_inner_html_QMARK___16333;

if(cljs.core.truth_(and__3546__auto____16368))
{var and__3546__auto____16370 = (function (){var or__3548__auto____16369 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16369))
{return or__3548__auto____16369;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16364);
}
})();

if(cljs.core.truth_(and__3546__auto____16370))
{return cljs.core.not.call(null,special_tag_QMARK___16366);
} else
{return and__3546__auto____16370;
}
} else
{return and__3546__auto____16368;
}
})()))
{var value__16371 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16421__16424 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16421__16424))
{var node__16427 = cljs.core.first.call(null,G__16421__16424);
var G__16421__16428 = G__16421__16424;

while(true){
goog.events.removeAll.call(null,node__16427);
node__16427.innerHTML = value__16371;
var temp__3698__auto____16431 = cljs.core.next.call(null,G__16421__16428);

if(cljs.core.truth_(temp__3698__auto____16431))
{var G__16421__16433 = temp__3698__auto____16431;

{
var G__16444 = cljs.core.first.call(null,G__16421__16433);
var G__16445 = G__16421__16433;
node__16427 = G__16444;
G__16421__16428 = G__16445;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16372){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16372)))
{var e__16374 = e16372;

fallback__16367.call(null,value__16371);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16372;
} else
{}
}
}} else
{fallback__16367.call(null,html_string);
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
var parents__16447 = domina.nodes.call(null,parent_content);
var children__16448 = domina.nodes.call(null,child_content);
var first_child__16476 = (function (){var frag__16449 = document.createDocumentFragment();

var G__16450__16453 = cljs.core.seq.call(null,children__16448);

if(cljs.core.truth_(G__16450__16453))
{var child__16460 = cljs.core.first.call(null,G__16450__16453);
var G__16450__16461 = G__16450__16453;

while(true){
frag__16449.appendChild(child__16460);
var temp__3698__auto____16467 = cljs.core.next.call(null,G__16450__16461);

if(cljs.core.truth_(temp__3698__auto____16467))
{var G__16450__16472 = temp__3698__auto____16467;

{
var G__16509 = cljs.core.first.call(null,G__16450__16472);
var G__16510 = G__16450__16472;
child__16460 = G__16509;
G__16450__16461 = G__16510;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16449;
})();
var other_children__16480 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16447) - 1),(function (){
return first_child__16476.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16447)))
{f.call(null,cljs.core.first.call(null,parents__16447),first_child__16476);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16327_SHARP_,p2__16328_SHARP_){
return f.call(null,p1__16327_SHARP_,p2__16328_SHARP_);
}),cljs.core.rest.call(null,parents__16447),other_children__16480));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16530 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16531 = (function (nl,n){
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
return lazy_nl_via_item__16530.call(this,nl);
case  2 :
return lazy_nl_via_item__16531.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16538 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16539 = (function (nl,n){
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
return lazy_nl_via_array_ref__16538.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16539.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6776__auto____16569 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16573 = x__6776__auto____16569;

if(cljs.core.truth_(and__3546__auto____16573))
{var and__3546__auto____16578 = x__6776__auto____16569.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16578))
{var and__3546__auto____16582 = x__6776__auto____16569.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16582))
{return cljs.core.not.call(null,x__6776__auto____16569.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16582;
}
} else
{return and__3546__auto____16578;
}
} else
{return and__3546__auto____16573;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6776__auto____16569);
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
if(cljs.core.truth_((function (){var x__6776__auto____16599 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16600 = x__6776__auto____16599;

if(cljs.core.truth_(and__3546__auto____16600))
{var and__3546__auto____16601 = x__6776__auto____16599.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16601))
{var and__3546__auto____16605 = x__6776__auto____16599.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16605))
{return cljs.core.not.call(null,x__6776__auto____16599.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16605;
}
} else
{return and__3546__auto____16601;
}
} else
{return and__3546__auto____16600;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6776__auto____16599);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_((cljs.core.truth_(content.length)?null:null)))
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
if(cljs.core.truth_((function (){var x__6776__auto____16615 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16616 = x__6776__auto____16615;

if(cljs.core.truth_(and__3546__auto____16616))
{var and__3546__auto____16619 = x__6776__auto____16615.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16619))
{var and__3546__auto____16621 = x__6776__auto____16615.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16621))
{return cljs.core.not.call(null,x__6776__auto____16615.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16621;
}
} else
{return and__3546__auto____16619;
}
} else
{return and__3546__auto____16616;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6776__auto____16615);
}
})()))
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_((cljs.core.truth_(content.length)?null:null)))
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
var G__16685 = null;
var G__16685__16686 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16685__16687 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16685 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16685__16686.call(this,nodelist,n);
case  3 :
return G__16685__16687.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16685;
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
var G__16711 = null;
var G__16711__16712 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16711__16714 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16711 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16711__16712.call(this,nodelist,n);
case  3 :
return G__16711__16714.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16711;
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
var G__16724 = null;
var G__16724__16725 = (function (coll,n){
return coll.item(n);
});
var G__16724__16726 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16724 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16724__16725.call(this,coll,n);
case  3 :
return G__16724__16726.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16724;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
