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
var opt_wrapper__15864 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15865 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15866 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15865,"caption":table_section_wrapper__15865,"optgroup":opt_wrapper__15864,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15866,"thead":table_section_wrapper__15865,"th":cell_wrapper__15866,"option":opt_wrapper__15864,"tbody":table_section_wrapper__15865,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15865});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15872 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15884 = (cljs.core.truth_((function (){var and__3546__auto____15875 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15875))
{return no_tbody_QMARK___15872;
} else
{return and__3546__auto____15875;
}
})())?(function (){var and__3546__auto____15879 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15879))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15879;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15883 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15883))
{return no_tbody_QMARK___15872;
} else
{return and__3546__auto____15883;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15885__15887 = cljs.core.seq.call(null,tbody__15884);

if(cljs.core.truth_(G__15885__15887))
{var child__15888 = cljs.core.first.call(null,G__15885__15887);
var G__15885__15889 = G__15885__15887;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15891 = cljs.core._EQ_.call(null,child__15888.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15891))
{return cljs.core._EQ_.call(null,child__15888.childNodes.length,0);
} else
{return and__3546__auto____15891;
}
})()))
{child__15888.parentNode.removeChild(child__15888);
} else
{}
var temp__3698__auto____15892 = cljs.core.next.call(null,G__15885__15889);

if(cljs.core.truth_(temp__3698__auto____15892))
{var G__15885__15893 = temp__3698__auto____15892;

{
var G__15896 = cljs.core.first.call(null,G__15885__15893);
var G__15897 = G__15885__15893;
child__15888 = G__15896;
G__15885__15889 = G__15897;
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
var html__15903 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15904 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15903))).toLowerCase();
var vec__15901__15905 = cljs.core.get.call(null,domina.wrap_map,tag_name__15904,"﷐'default".call(null,domina.wrap_map));
var depth__15908 = cljs.core.nth.call(null,vec__15901__15905,0,null);
var start_wrap__15909 = cljs.core.nth.call(null,vec__15901__15905,1,null);
var end_wrap__15910 = cljs.core.nth.call(null,vec__15901__15905,2,null);
var div__15914 = (function (){var wrapper__15912 = (function (){var div__15911 = document.createElement("div");

div__15911.innerHTML = cljs.core.str.call(null,start_wrap__15909,html__15903,end_wrap__15910);
return div__15911;
})();
var level__15913 = depth__15908;

while(true){
if(cljs.core.truth_((level__15913 > 0)))
{{
var G__15919 = wrapper__15912.lastChild;
var G__15920 = (level__15913 - 1);
wrapper__15912 = G__15919;
level__15913 = G__15920;
continue;
}
} else
{return wrapper__15912;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__15914,html__15903);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____15915 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____15915))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15903);
} else
{return and__3546__auto____15915;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__15914,html__15903);
} else
{}
return div__15914.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____15939 = content;

if(cljs.core.truth_(and__3546__auto____15939))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15939;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15941 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15941))
{return or__3548__auto____15941;
} else
{var or__3548__auto____15942 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15942))
{return or__3548__auto____15942;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15945 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15945))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15945;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15947 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15947))
{return or__3548__auto____15947;
} else
{var or__3548__auto____15949 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15949))
{return or__3548__auto____15949;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15956 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15956))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15956;
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
if(cljs.core.truth_((void 0 === domina.t15976)))
{
/**
* @constructor
*/
domina.t15976 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15976.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15976");
});
domina.t15976.prototype.domina$DomContent$ = true;
domina.t15976.prototype.domina$DomContent$nodes = (function (_){
var this__15983 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15983.class_name)));
});
domina.t15976.prototype.domina$DomContent$single_node = (function (_){
var this__15984 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15984.class_name)));
});
domina.t15976.prototype.cljs$core$IMeta$ = true;
domina.t15976.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15987 = this;
return this__15987.__meta;
});
domina.t15976.prototype.cljs$core$IWithMeta$ = true;
domina.t15976.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15991 = this;
return (new domina.t15976(this__15991.class_name,this__15991.by_class,__meta));
});
domina.t15976;
} else
{}
return (new domina.t15976(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15996_SHARP_){
return p1__15996_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15999_SHARP_,p2__16000_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15999_SHARP_,p2__16000_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16009_SHARP_,p2__16008_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16008_SHARP_,p1__16009_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16017_SHARP_,p2__16016_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16016_SHARP_,p1__16017_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16024_SHARP_,p2__16023_SHARP_){
return goog.dom.replaceNode.call(null,p2__16023_SHARP_,p1__16024_SHARP_);
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
var s__16081 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16081)))
{return null;
} else
{return s__16081;
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
var G__16090__16091 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16090__16091))
{var n__16092 = cljs.core.first.call(null,G__16090__16091);
var G__16090__16093 = G__16090__16091;

while(true){
goog.style.setStyle.call(null,n__16092,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16094 = cljs.core.next.call(null,G__16090__16093);

if(cljs.core.truth_(temp__3698__auto____16094))
{var G__16090__16095 = temp__3698__auto____16094;

{
var G__16098 = cljs.core.first.call(null,G__16090__16095);
var G__16099 = G__16090__16095;
n__16092 = G__16098;
G__16090__16093 = G__16099;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16100){
var content = cljs.core.first(arglist__16100);
var name = cljs.core.first(cljs.core.next(arglist__16100));
var value = cljs.core.rest(cljs.core.next(arglist__16100));
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
var G__16105__16107 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16105__16107))
{var n__16109 = cljs.core.first.call(null,G__16105__16107);
var G__16105__16110 = G__16105__16107;

while(true){
n__16109.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16111 = cljs.core.next.call(null,G__16105__16110);

if(cljs.core.truth_(temp__3698__auto____16111))
{var G__16105__16113 = temp__3698__auto____16111;

{
var G__16118 = cljs.core.first.call(null,G__16105__16113);
var G__16119 = G__16105__16113;
n__16109 = G__16118;
G__16105__16110 = G__16119;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16121){
var content = cljs.core.first(arglist__16121);
var name = cljs.core.first(cljs.core.next(arglist__16121));
var value = cljs.core.rest(cljs.core.next(arglist__16121));
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
var vec__16173__16174 = pair.split(/\s*:\s*/);
var k__16175 = cljs.core.nth.call(null,vec__16173__16174,0,null);
var v__16176 = cljs.core.nth.call(null,vec__16173__16174,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16177 = k__16175;

if(cljs.core.truth_(and__3546__auto____16177))
{return v__16176;
} else
{return and__3546__auto____16177;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16175.toLowerCase()),v__16176);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16184 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16184)))
{return domina.parse_style_attributes.call(null,style__16184);
} else
{if(cljs.core.truth_(style__16184.cssText))
{return domina.parse_style_attributes.call(null,style__16184.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16188 = domina.single_node.call(null,content);
var attrs__16189 = node__16188.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16183_SHARP_){
var attr__16191 = attrs__16189.item(p1__16183_SHARP_);
var value__16193 = attr__16191.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16194 = cljs.core.not_EQ_.call(null,null,value__16193);

if(cljs.core.truth_(and__3546__auto____16194))
{return cljs.core.not_EQ_.call(null,"",value__16193);
} else
{return and__3546__auto____16194;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16191.nodeName.toLowerCase())],[attr__16191.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16189.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16206__16207 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16206__16207))
{var G__16209__16214 = cljs.core.first.call(null,G__16206__16207);
var vec__16210__16215 = G__16209__16214;
var name__16216 = cljs.core.nth.call(null,vec__16210__16215,0,null);
var value__16217 = cljs.core.nth.call(null,vec__16210__16215,1,null);
var G__16206__16218 = G__16206__16207;

var G__16209__16219 = G__16209__16214;
var G__16206__16220 = G__16206__16218;

while(true){
var vec__16222__16223 = G__16209__16219;
var name__16226 = cljs.core.nth.call(null,vec__16222__16223,0,null);
var value__16228 = cljs.core.nth.call(null,vec__16222__16223,1,null);
var G__16206__16229 = G__16206__16220;

domina.set_style_BANG_.call(null,content,name__16226,value__16228);
var temp__3698__auto____16233 = cljs.core.next.call(null,G__16206__16229);

if(cljs.core.truth_(temp__3698__auto____16233))
{var G__16206__16234 = temp__3698__auto____16233;

{
var G__16241 = cljs.core.first.call(null,G__16206__16234);
var G__16242 = G__16206__16234;
G__16209__16219 = G__16241;
G__16206__16220 = G__16242;
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
var G__16243__16244 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16243__16244))
{var G__16246__16248 = cljs.core.first.call(null,G__16243__16244);
var vec__16247__16249 = G__16246__16248;
var name__16250 = cljs.core.nth.call(null,vec__16247__16249,0,null);
var value__16251 = cljs.core.nth.call(null,vec__16247__16249,1,null);
var G__16243__16252 = G__16243__16244;

var G__16246__16253 = G__16246__16248;
var G__16243__16254 = G__16243__16252;

while(true){
var vec__16303__16306 = G__16246__16253;
var name__16308 = cljs.core.nth.call(null,vec__16303__16306,0,null);
var value__16310 = cljs.core.nth.call(null,vec__16303__16306,1,null);
var G__16243__16313 = G__16243__16254;

domina.set_attr_BANG_.call(null,content,name__16308,value__16310);
var temp__3698__auto____16316 = cljs.core.next.call(null,G__16243__16313);

if(cljs.core.truth_(temp__3698__auto____16316))
{var G__16243__16318 = temp__3698__auto____16316;

{
var G__16328 = cljs.core.first.call(null,G__16243__16318);
var G__16329 = G__16243__16318;
G__16246__16253 = G__16328;
G__16243__16254 = G__16329;
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
var G__16345__16347 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16345__16347))
{var node__16348 = cljs.core.first.call(null,G__16345__16347);
var G__16345__16349 = G__16345__16347;

while(true){
goog.dom.classes.add.call(null,node__16348,class$);
var temp__3698__auto____16350 = cljs.core.next.call(null,G__16345__16349);

if(cljs.core.truth_(temp__3698__auto____16350))
{var G__16345__16351 = temp__3698__auto____16350;

{
var G__16356 = cljs.core.first.call(null,G__16345__16351);
var G__16357 = G__16345__16351;
node__16348 = G__16356;
G__16345__16349 = G__16357;
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
var G__16362__16363 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16362__16363))
{var node__16366 = cljs.core.first.call(null,G__16362__16363);
var G__16362__16367 = G__16362__16363;

while(true){
goog.dom.classes.remove.call(null,node__16366,class$);
var temp__3698__auto____16370 = cljs.core.next.call(null,G__16362__16367);

if(cljs.core.truth_(temp__3698__auto____16370))
{var G__16362__16372 = temp__3698__auto____16370;

{
var G__16391 = cljs.core.first.call(null,G__16362__16372);
var G__16392 = G__16362__16372;
node__16366 = G__16391;
G__16362__16367 = G__16392;
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
var text__16399 = (function (content){
return text.call(null,content,true);
});
var text__16400 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16399.call(this,content);
case  2 :
return text__16400.call(this,content,normalize);
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
var G__16404__16405 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16404__16405))
{var node__16406 = cljs.core.first.call(null,G__16404__16405);
var G__16404__16407 = G__16404__16405;

while(true){
goog.dom.setTextContent.call(null,node__16406,value);
var temp__3698__auto____16410 = cljs.core.next.call(null,G__16404__16407);

if(cljs.core.truth_(temp__3698__auto____16410))
{var G__16404__16413 = temp__3698__auto____16410;

{
var G__16427 = cljs.core.first.call(null,G__16404__16413);
var G__16428 = G__16404__16413;
node__16406 = G__16427;
G__16404__16407 = G__16428;
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
var G__16434__16435 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16434__16435))
{var node__16438 = cljs.core.first.call(null,G__16434__16435);
var G__16434__16439 = G__16434__16435;

while(true){
goog.dom.forms.setValue.call(null,node__16438,value);
var temp__3698__auto____16440 = cljs.core.next.call(null,G__16434__16439);

if(cljs.core.truth_(temp__3698__auto____16440))
{var G__16434__16443 = temp__3698__auto____16440;

{
var G__16449 = cljs.core.first.call(null,G__16434__16443);
var G__16450 = G__16434__16443;
node__16438 = G__16449;
G__16434__16439 = G__16450;
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
var allows_inner_html_QMARK___16461 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16462 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16463 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16464 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16463);
var fallback__16465 = (function (p1__16452_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16452_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16469 = allows_inner_html_QMARK___16461;

if(cljs.core.truth_(and__3546__auto____16469))
{var and__3546__auto____16471 = (function (){var or__3548__auto____16470 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16470))
{return or__3548__auto____16470;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16462);
}
})();

if(cljs.core.truth_(and__3546__auto____16471))
{return cljs.core.not.call(null,special_tag_QMARK___16464);
} else
{return and__3546__auto____16471;
}
} else
{return and__3546__auto____16469;
}
})()))
{var value__16472 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16476__16477 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16476__16477))
{var node__16479 = cljs.core.first.call(null,G__16476__16477);
var G__16476__16480 = G__16476__16477;

while(true){
goog.events.removeAll.call(null,node__16479);
node__16479.innerHTML = value__16472;
var temp__3698__auto____16482 = cljs.core.next.call(null,G__16476__16480);

if(cljs.core.truth_(temp__3698__auto____16482))
{var G__16476__16483 = temp__3698__auto____16482;

{
var G__16496 = cljs.core.first.call(null,G__16476__16483);
var G__16497 = G__16476__16483;
node__16479 = G__16496;
G__16476__16480 = G__16497;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16473){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16473)))
{var e__16474 = e16473;

fallback__16465.call(null,value__16472);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16473;
} else
{}
}
}} else
{fallback__16465.call(null,html_string);
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
var parents__16502 = domina.nodes.call(null,parent_content);
var children__16504 = domina.nodes.call(null,child_content);
var first_child__16516 = (function (){var frag__16505 = document.createDocumentFragment();

var G__16506__16507 = cljs.core.seq.call(null,children__16504);

if(cljs.core.truth_(G__16506__16507))
{var child__16508 = cljs.core.first.call(null,G__16506__16507);
var G__16506__16509 = G__16506__16507;

while(true){
frag__16505.appendChild(child__16508);
var temp__3698__auto____16512 = cljs.core.next.call(null,G__16506__16509);

if(cljs.core.truth_(temp__3698__auto____16512))
{var G__16506__16514 = temp__3698__auto____16512;

{
var G__16528 = cljs.core.first.call(null,G__16506__16514);
var G__16529 = G__16506__16514;
child__16508 = G__16528;
G__16506__16509 = G__16529;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16505;
})();
var other_children__16518 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16502) - 1),(function (){
return first_child__16516.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16502)))
{f.call(null,cljs.core.first.call(null,parents__16502),first_child__16516);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16457_SHARP_,p2__16458_SHARP_){
return f.call(null,p1__16457_SHARP_,p2__16458_SHARP_);
}),cljs.core.rest.call(null,parents__16502),other_children__16518));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16534 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16535 = (function (nl,n){
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
return lazy_nl_via_item__16534.call(this,nl);
case  2 :
return lazy_nl_via_item__16535.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16547 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16548 = (function (nl,n){
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
return lazy_nl_via_array_ref__16547.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16548.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6771__auto____16560 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16562 = x__6771__auto____16560;

if(cljs.core.truth_(and__3546__auto____16562))
{var and__3546__auto____16565 = x__6771__auto____16560.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16565))
{var and__3546__auto____16566 = x__6771__auto____16560.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16566))
{return cljs.core.not.call(null,x__6771__auto____16560.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16566;
}
} else
{return and__3546__auto____16565;
}
} else
{return and__3546__auto____16562;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16560);
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
if(cljs.core.truth_((function (){var x__6771__auto____16582 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16583 = x__6771__auto____16582;

if(cljs.core.truth_(and__3546__auto____16583))
{var and__3546__auto____16584 = x__6771__auto____16582.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16584))
{var and__3546__auto____16585 = x__6771__auto____16582.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16585))
{return cljs.core.not.call(null,x__6771__auto____16582.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16585;
}
} else
{return and__3546__auto____16584;
}
} else
{return and__3546__auto____16583;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16582);
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
if(cljs.core.truth_((function (){var x__6771__auto____16601 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16602 = x__6771__auto____16601;

if(cljs.core.truth_(and__3546__auto____16602))
{var and__3546__auto____16603 = x__6771__auto____16601.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16603))
{var and__3546__auto____16604 = x__6771__auto____16601.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16604))
{return cljs.core.not.call(null,x__6771__auto____16601.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16604;
}
} else
{return and__3546__auto____16603;
}
} else
{return and__3546__auto____16602;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16601);
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
var G__16626 = null;
var G__16626__16627 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16626__16628 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16626 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16626__16627.call(this,nodelist,n);
case  3 :
return G__16626__16628.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16626;
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
var G__16635 = null;
var G__16635__16636 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16635__16637 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16635 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16635__16636.call(this,nodelist,n);
case  3 :
return G__16635__16637.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16635;
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
var G__16639 = null;
var G__16639__16640 = (function (coll,n){
return coll.item(n);
});
var G__16639__16641 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16639 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16639__16640.call(this,coll,n);
case  3 :
return G__16639__16641.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16639;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
