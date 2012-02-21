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
var opt_wrapper__15944 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15946 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15947 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15946,"caption":table_section_wrapper__15946,"optgroup":opt_wrapper__15944,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15947,"thead":table_section_wrapper__15946,"th":cell_wrapper__15947,"option":opt_wrapper__15944,"tbody":table_section_wrapper__15946,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15946});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15949 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15954 = (cljs.core.truth_((function (){var and__3546__auto____15951 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15951))
{return no_tbody_QMARK___15949;
} else
{return and__3546__auto____15951;
}
})())?(function (){var and__3546__auto____15952 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15952))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15952;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15953 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15953))
{return no_tbody_QMARK___15949;
} else
{return and__3546__auto____15953;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15955__15956 = cljs.core.seq.call(null,tbody__15954);

if(cljs.core.truth_(G__15955__15956))
{var child__15958 = cljs.core.first.call(null,G__15955__15956);
var G__15955__15959 = G__15955__15956;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15964 = cljs.core._EQ_.call(null,child__15958.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15964))
{return cljs.core._EQ_.call(null,child__15958.childNodes.length,0);
} else
{return and__3546__auto____15964;
}
})()))
{child__15958.parentNode.removeChild(child__15958);
} else
{}
var temp__3698__auto____15969 = cljs.core.next.call(null,G__15955__15959);

if(cljs.core.truth_(temp__3698__auto____15969))
{var G__15955__15970 = temp__3698__auto____15969;

{
var G__15975 = cljs.core.first.call(null,G__15955__15970);
var G__15976 = G__15955__15970;
child__15958 = G__15975;
G__15955__15959 = G__15976;
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
var html__15986 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15990 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15986))).toLowerCase();
var vec__15985__15991 = cljs.core.get.call(null,domina.wrap_map,tag_name__15990,"﷐'default".call(null,domina.wrap_map));
var depth__15992 = cljs.core.nth.call(null,vec__15985__15991,0,null);
var start_wrap__15993 = cljs.core.nth.call(null,vec__15985__15991,1,null);
var end_wrap__15994 = cljs.core.nth.call(null,vec__15985__15991,2,null);
var div__16009 = (function (){var wrapper__16007 = (function (){var div__15996 = document.createElement("div");

div__15996.innerHTML = cljs.core.str.call(null,start_wrap__15993,html__15986,end_wrap__15994);
return div__15996;
})();
var level__16008 = depth__15992;

while(true){
if(cljs.core.truth_((level__16008 > 0)))
{{
var G__16011 = wrapper__16007.lastChild;
var G__16012 = (level__16008 - 1);
wrapper__16007 = G__16011;
level__16008 = G__16012;
continue;
}
} else
{return wrapper__16007;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16009,html__15986);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16010 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16010))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15986);
} else
{return and__3546__auto____16010;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16009,html__15986);
} else
{}
return div__16009.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16017 = content;

if(cljs.core.truth_(and__3546__auto____16017))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16017;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16018 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16018))
{return or__3548__auto____16018;
} else
{var or__3548__auto____16021 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16021))
{return or__3548__auto____16021;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16025 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16025))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16025;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16028 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16028))
{return or__3548__auto____16028;
} else
{var or__3548__auto____16031 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16031))
{return or__3548__auto____16031;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16053 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16053))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16053;
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
if(cljs.core.truth_((void 0 === domina.t16067)))
{
/**
* @constructor
*/
domina.t16067 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16067.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16067");
});
domina.t16067.prototype.domina$DomContent$ = true;
domina.t16067.prototype.domina$DomContent$nodes = (function (_){
var this__16076 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16076.class_name)));
});
domina.t16067.prototype.domina$DomContent$single_node = (function (_){
var this__16079 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16079.class_name)));
});
domina.t16067.prototype.cljs$core$IMeta$ = true;
domina.t16067.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16082 = this;
return this__16082.__meta;
});
domina.t16067.prototype.cljs$core$IWithMeta$ = true;
domina.t16067.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16104 = this;
return (new domina.t16067(this__16104.class_name,this__16104.by_class,__meta));
});
domina.t16067;
} else
{}
return (new domina.t16067(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16107_SHARP_){
return p1__16107_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16118_SHARP_,p2__16119_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16118_SHARP_,p2__16119_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16123_SHARP_,p2__16122_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16122_SHARP_,p1__16123_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16127_SHARP_,p2__16126_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16126_SHARP_,p1__16127_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16129_SHARP_,p2__16128_SHARP_){
return goog.dom.replaceNode.call(null,p2__16128_SHARP_,p1__16129_SHARP_);
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
var s__16147 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16147)))
{return null;
} else
{return s__16147;
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
var G__16162__16163 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16162__16163))
{var n__16199 = cljs.core.first.call(null,G__16162__16163);
var G__16162__16200 = G__16162__16163;

while(true){
goog.style.setStyle.call(null,n__16199,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16205 = cljs.core.next.call(null,G__16162__16200);

if(cljs.core.truth_(temp__3698__auto____16205))
{var G__16162__16208 = temp__3698__auto____16205;

{
var G__16210 = cljs.core.first.call(null,G__16162__16208);
var G__16211 = G__16162__16208;
n__16199 = G__16210;
G__16162__16200 = G__16211;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16216){
var content = cljs.core.first(arglist__16216);
var name = cljs.core.first(cljs.core.next(arglist__16216));
var value = cljs.core.rest(cljs.core.next(arglist__16216));
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
var G__16217__16220 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16217__16220))
{var n__16223 = cljs.core.first.call(null,G__16217__16220);
var G__16217__16225 = G__16217__16220;

while(true){
n__16223.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16229 = cljs.core.next.call(null,G__16217__16225);

if(cljs.core.truth_(temp__3698__auto____16229))
{var G__16217__16231 = temp__3698__auto____16229;

{
var G__16236 = cljs.core.first.call(null,G__16217__16231);
var G__16237 = G__16217__16231;
n__16223 = G__16236;
G__16217__16225 = G__16237;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16239){
var content = cljs.core.first(arglist__16239);
var name = cljs.core.first(cljs.core.next(arglist__16239));
var value = cljs.core.rest(cljs.core.next(arglist__16239));
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
var vec__16242__16243 = pair.split(/\s*:\s*/);
var k__16244 = cljs.core.nth.call(null,vec__16242__16243,0,null);
var v__16245 = cljs.core.nth.call(null,vec__16242__16243,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16246 = k__16244;

if(cljs.core.truth_(and__3546__auto____16246))
{return v__16245;
} else
{return and__3546__auto____16246;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16244.toLowerCase()),v__16245);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16253 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16253)))
{return domina.parse_style_attributes.call(null,style__16253);
} else
{if(cljs.core.truth_(style__16253.cssText))
{return domina.parse_style_attributes.call(null,style__16253.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16259 = domina.single_node.call(null,content);
var attrs__16260 = node__16259.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16252_SHARP_){
var attr__16263 = attrs__16260.item(p1__16252_SHARP_);
var value__16264 = attr__16263.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16266 = cljs.core.not_EQ_.call(null,null,value__16264);

if(cljs.core.truth_(and__3546__auto____16266))
{return cljs.core.not_EQ_.call(null,"",value__16264);
} else
{return and__3546__auto____16266;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16263.nodeName.toLowerCase())],[attr__16263.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16260.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16287__16288 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16287__16288))
{var G__16291__16302 = cljs.core.first.call(null,G__16287__16288);
var vec__16292__16303 = G__16291__16302;
var name__16304 = cljs.core.nth.call(null,vec__16292__16303,0,null);
var value__16305 = cljs.core.nth.call(null,vec__16292__16303,1,null);
var G__16287__16306 = G__16287__16288;

var G__16291__16307 = G__16291__16302;
var G__16287__16308 = G__16287__16306;

while(true){
var vec__16309__16310 = G__16291__16307;
var name__16311 = cljs.core.nth.call(null,vec__16309__16310,0,null);
var value__16312 = cljs.core.nth.call(null,vec__16309__16310,1,null);
var G__16287__16313 = G__16287__16308;

domina.set_style_BANG_.call(null,content,name__16311,value__16312);
var temp__3698__auto____16314 = cljs.core.next.call(null,G__16287__16313);

if(cljs.core.truth_(temp__3698__auto____16314))
{var G__16287__16315 = temp__3698__auto____16314;

{
var G__16319 = cljs.core.first.call(null,G__16287__16315);
var G__16320 = G__16287__16315;
G__16291__16307 = G__16319;
G__16287__16308 = G__16320;
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
var G__16327__16333 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16327__16333))
{var G__16335__16338 = cljs.core.first.call(null,G__16327__16333);
var vec__16336__16339 = G__16335__16338;
var name__16344 = cljs.core.nth.call(null,vec__16336__16339,0,null);
var value__16345 = cljs.core.nth.call(null,vec__16336__16339,1,null);
var G__16327__16346 = G__16327__16333;

var G__16335__16347 = G__16335__16338;
var G__16327__16348 = G__16327__16346;

while(true){
var vec__16351__16352 = G__16335__16347;
var name__16353 = cljs.core.nth.call(null,vec__16351__16352,0,null);
var value__16354 = cljs.core.nth.call(null,vec__16351__16352,1,null);
var G__16327__16355 = G__16327__16348;

domina.set_attr_BANG_.call(null,content,name__16353,value__16354);
var temp__3698__auto____16357 = cljs.core.next.call(null,G__16327__16355);

if(cljs.core.truth_(temp__3698__auto____16357))
{var G__16327__16359 = temp__3698__auto____16357;

{
var G__16365 = cljs.core.first.call(null,G__16327__16359);
var G__16366 = G__16327__16359;
G__16335__16347 = G__16365;
G__16327__16348 = G__16366;
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
var G__16372__16373 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16372__16373))
{var node__16376 = cljs.core.first.call(null,G__16372__16373);
var G__16372__16377 = G__16372__16373;

while(true){
goog.dom.classes.add.call(null,node__16376,class$);
var temp__3698__auto____16378 = cljs.core.next.call(null,G__16372__16377);

if(cljs.core.truth_(temp__3698__auto____16378))
{var G__16372__16380 = temp__3698__auto____16378;

{
var G__16386 = cljs.core.first.call(null,G__16372__16380);
var G__16387 = G__16372__16380;
node__16376 = G__16386;
G__16372__16377 = G__16387;
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
var G__16388__16389 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16388__16389))
{var node__16391 = cljs.core.first.call(null,G__16388__16389);
var G__16388__16392 = G__16388__16389;

while(true){
goog.dom.classes.remove.call(null,node__16391,class$);
var temp__3698__auto____16393 = cljs.core.next.call(null,G__16388__16392);

if(cljs.core.truth_(temp__3698__auto____16393))
{var G__16388__16395 = temp__3698__auto____16393;

{
var G__16396 = cljs.core.first.call(null,G__16388__16395);
var G__16397 = G__16388__16395;
node__16391 = G__16396;
G__16388__16392 = G__16397;
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
var text__16404 = (function (content){
return text.call(null,content,true);
});
var text__16405 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16404.call(this,content);
case  2 :
return text__16405.call(this,content,normalize);
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
var G__16411__16412 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16411__16412))
{var node__16415 = cljs.core.first.call(null,G__16411__16412);
var G__16411__16417 = G__16411__16412;

while(true){
goog.dom.setTextContent.call(null,node__16415,value);
var temp__3698__auto____16420 = cljs.core.next.call(null,G__16411__16417);

if(cljs.core.truth_(temp__3698__auto____16420))
{var G__16411__16423 = temp__3698__auto____16420;

{
var G__16439 = cljs.core.first.call(null,G__16411__16423);
var G__16440 = G__16411__16423;
node__16415 = G__16439;
G__16411__16417 = G__16440;
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
var G__16447__16448 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16447__16448))
{var node__16450 = cljs.core.first.call(null,G__16447__16448);
var G__16447__16451 = G__16447__16448;

while(true){
goog.dom.forms.setValue.call(null,node__16450,value);
var temp__3698__auto____16453 = cljs.core.next.call(null,G__16447__16451);

if(cljs.core.truth_(temp__3698__auto____16453))
{var G__16447__16454 = temp__3698__auto____16453;

{
var G__16457 = cljs.core.first.call(null,G__16447__16454);
var G__16458 = G__16447__16454;
node__16450 = G__16457;
G__16447__16451 = G__16458;
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
var allows_inner_html_QMARK___16469 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16470 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16471 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16472 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16471);
var fallback__16476 = (function (p1__16461_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16461_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16477 = allows_inner_html_QMARK___16469;

if(cljs.core.truth_(and__3546__auto____16477))
{var and__3546__auto____16480 = (function (){var or__3548__auto____16479 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16479))
{return or__3548__auto____16479;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16470);
}
})();

if(cljs.core.truth_(and__3546__auto____16480))
{return cljs.core.not.call(null,special_tag_QMARK___16472);
} else
{return and__3546__auto____16480;
}
} else
{return and__3546__auto____16477;
}
})()))
{var value__16482 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16485__16486 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16485__16486))
{var node__16490 = cljs.core.first.call(null,G__16485__16486);
var G__16485__16491 = G__16485__16486;

while(true){
goog.events.removeAll.call(null,node__16490);
node__16490.innerHTML = value__16482;
var temp__3698__auto____16492 = cljs.core.next.call(null,G__16485__16491);

if(cljs.core.truth_(temp__3698__auto____16492))
{var G__16485__16494 = temp__3698__auto____16492;

{
var G__16502 = cljs.core.first.call(null,G__16485__16494);
var G__16503 = G__16485__16494;
node__16490 = G__16502;
G__16485__16491 = G__16503;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16483){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16483)))
{var e__16484 = e16483;

fallback__16476.call(null,value__16482);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16483;
} else
{}
}
}} else
{fallback__16476.call(null,html_string);
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
var parents__16512 = domina.nodes.call(null,parent_content);
var children__16514 = domina.nodes.call(null,child_content);
var first_child__16528 = (function (){var frag__16517 = document.createDocumentFragment();

var G__16519__16522 = cljs.core.seq.call(null,children__16514);

if(cljs.core.truth_(G__16519__16522))
{var child__16524 = cljs.core.first.call(null,G__16519__16522);
var G__16519__16525 = G__16519__16522;

while(true){
frag__16517.appendChild(child__16524);
var temp__3698__auto____16526 = cljs.core.next.call(null,G__16519__16525);

if(cljs.core.truth_(temp__3698__auto____16526))
{var G__16519__16527 = temp__3698__auto____16526;

{
var G__16572 = cljs.core.first.call(null,G__16519__16527);
var G__16573 = G__16519__16527;
child__16524 = G__16572;
G__16519__16525 = G__16573;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16517;
})();
var other_children__16530 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16512) - 1),(function (){
return first_child__16528.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16512)))
{f.call(null,cljs.core.first.call(null,parents__16512),first_child__16528);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16467_SHARP_,p2__16468_SHARP_){
return f.call(null,p1__16467_SHARP_,p2__16468_SHARP_);
}),cljs.core.rest.call(null,parents__16512),other_children__16530));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16584 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16585 = (function (nl,n){
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
return lazy_nl_via_item__16584.call(this,nl);
case  2 :
return lazy_nl_via_item__16585.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16606 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16607 = (function (nl,n){
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
return lazy_nl_via_array_ref__16606.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16607.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6749__auto____16620 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16621 = x__6749__auto____16620;

if(cljs.core.truth_(and__3546__auto____16621))
{var and__3546__auto____16624 = x__6749__auto____16620.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16624))
{var and__3546__auto____16626 = x__6749__auto____16620.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16626))
{return cljs.core.not.call(null,x__6749__auto____16620.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16626;
}
} else
{return and__3546__auto____16624;
}
} else
{return and__3546__auto____16621;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16620);
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
if(cljs.core.truth_((function (){var x__6749__auto____16630 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16631 = x__6749__auto____16630;

if(cljs.core.truth_(and__3546__auto____16631))
{var and__3546__auto____16632 = x__6749__auto____16630.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16632))
{var and__3546__auto____16633 = x__6749__auto____16630.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16633))
{return cljs.core.not.call(null,x__6749__auto____16630.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16633;
}
} else
{return and__3546__auto____16632;
}
} else
{return and__3546__auto____16631;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16630);
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
if(cljs.core.truth_((function (){var x__6749__auto____16634 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16635 = x__6749__auto____16634;

if(cljs.core.truth_(and__3546__auto____16635))
{var and__3546__auto____16636 = x__6749__auto____16634.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16636))
{var and__3546__auto____16641 = x__6749__auto____16634.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16641))
{return cljs.core.not.call(null,x__6749__auto____16634.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16641;
}
} else
{return and__3546__auto____16636;
}
} else
{return and__3546__auto____16635;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16634);
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
var G__16677 = null;
var G__16677__16678 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16677__16679 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16677 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16677__16678.call(this,nodelist,n);
case  3 :
return G__16677__16679.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16677;
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
var G__16688 = null;
var G__16688__16689 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16688__16690 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16688 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16688__16689.call(this,nodelist,n);
case  3 :
return G__16688__16690.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16688;
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
var G__16697 = null;
var G__16697__16698 = (function (coll,n){
return coll.item(n);
});
var G__16697__16699 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16697 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16697__16698.call(this,coll,n);
case  3 :
return G__16697__16699.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16697;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
