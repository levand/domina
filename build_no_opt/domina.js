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
var opt_wrapper__15893 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15894 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15895 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15894,"caption":table_section_wrapper__15894,"optgroup":opt_wrapper__15893,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15895,"thead":table_section_wrapper__15894,"th":cell_wrapper__15895,"option":opt_wrapper__15893,"tbody":table_section_wrapper__15894,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15894});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15904 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15908 = (cljs.core.truth_((function (){var and__3546__auto____15905 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15905))
{return no_tbody_QMARK___15904;
} else
{return and__3546__auto____15905;
}
})())?(function (){var and__3546__auto____15906 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15906))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15906;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15907 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15907))
{return no_tbody_QMARK___15904;
} else
{return and__3546__auto____15907;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15909__15910 = cljs.core.seq.call(null,tbody__15908);

if(cljs.core.truth_(G__15909__15910))
{var child__15913 = cljs.core.first.call(null,G__15909__15910);
var G__15909__15914 = G__15909__15910;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15917 = cljs.core._EQ_.call(null,child__15913.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15917))
{return cljs.core._EQ_.call(null,child__15913.childNodes.length,0);
} else
{return and__3546__auto____15917;
}
})()))
{child__15913.parentNode.removeChild(child__15913);
} else
{}
var temp__3698__auto____15935 = cljs.core.next.call(null,G__15909__15914);

if(cljs.core.truth_(temp__3698__auto____15935))
{var G__15909__15936 = temp__3698__auto____15935;

{
var G__15984 = cljs.core.first.call(null,G__15909__15936);
var G__15985 = G__15909__15936;
child__15913 = G__15984;
G__15909__15914 = G__15985;
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
var html__15990 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15991 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15990))).toLowerCase();
var vec__15989__15992 = cljs.core.get.call(null,domina.wrap_map,tag_name__15991,"﷐'default".call(null,domina.wrap_map));
var depth__15993 = cljs.core.nth.call(null,vec__15989__15992,0,null);
var start_wrap__15994 = cljs.core.nth.call(null,vec__15989__15992,1,null);
var end_wrap__15995 = cljs.core.nth.call(null,vec__15989__15992,2,null);
var div__15999 = (function (){var wrapper__15997 = (function (){var div__15996 = document.createElement("div");

div__15996.innerHTML = cljs.core.str.call(null,start_wrap__15994,html__15990,end_wrap__15995);
return div__15996;
})();
var level__15998 = depth__15993;

while(true){
if(cljs.core.truth_((level__15998 > 0)))
{{
var G__16010 = wrapper__15997.lastChild;
var G__16011 = (level__15998 - 1);
wrapper__15997 = G__16010;
level__15998 = G__16011;
continue;
}
} else
{return wrapper__15997;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__15999,html__15990);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16001 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16001))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15990);
} else
{return and__3546__auto____16001;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__15999,html__15990);
} else
{}
return div__15999.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16025 = content;

if(cljs.core.truth_(and__3546__auto____16025))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16025;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16030 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16030))
{return or__3548__auto____16030;
} else
{var or__3548__auto____16031 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16031))
{return or__3548__auto____16031;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16033 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16033))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16033;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16036 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16036))
{return or__3548__auto____16036;
} else
{var or__3548__auto____16037 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16037))
{return or__3548__auto____16037;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16046 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16046))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16046;
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
if(cljs.core.truth_((void 0 === domina.t16082)))
{
/**
* @constructor
*/
domina.t16082 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16082.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16082");
});
domina.t16082.prototype.domina$DomContent$ = true;
domina.t16082.prototype.domina$DomContent$nodes = (function (_){
var this__16098 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16098.class_name)));
});
domina.t16082.prototype.domina$DomContent$single_node = (function (_){
var this__16106 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16106.class_name)));
});
domina.t16082.prototype.cljs$core$IMeta$ = true;
domina.t16082.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16111 = this;
return this__16111.__meta;
});
domina.t16082.prototype.cljs$core$IWithMeta$ = true;
domina.t16082.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16113 = this;
return (new domina.t16082(this__16113.class_name,this__16113.by_class,__meta));
});
domina.t16082;
} else
{}
return (new domina.t16082(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16123_SHARP_){
return p1__16123_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16132_SHARP_,p2__16135_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16132_SHARP_,p2__16135_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16149_SHARP_,p2__16148_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16148_SHARP_,p1__16149_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16155_SHARP_,p2__16154_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16154_SHARP_,p1__16155_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16158_SHARP_,p2__16157_SHARP_){
return goog.dom.replaceNode.call(null,p2__16157_SHARP_,p1__16158_SHARP_);
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
var s__16184 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16184)))
{return null;
} else
{return s__16184;
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
var G__16208__16210 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16208__16210))
{var n__16213 = cljs.core.first.call(null,G__16208__16210);
var G__16208__16214 = G__16208__16210;

while(true){
goog.style.setStyle.call(null,n__16213,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16216 = cljs.core.next.call(null,G__16208__16214);

if(cljs.core.truth_(temp__3698__auto____16216))
{var G__16208__16218 = temp__3698__auto____16216;

{
var G__16228 = cljs.core.first.call(null,G__16208__16218);
var G__16229 = G__16208__16218;
n__16213 = G__16228;
G__16208__16214 = G__16229;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16232){
var content = cljs.core.first(arglist__16232);
var name = cljs.core.first(cljs.core.next(arglist__16232));
var value = cljs.core.rest(cljs.core.next(arglist__16232));
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
var G__16241__16242 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16241__16242))
{var n__16244 = cljs.core.first.call(null,G__16241__16242);
var G__16241__16246 = G__16241__16242;

while(true){
n__16244.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16250 = cljs.core.next.call(null,G__16241__16246);

if(cljs.core.truth_(temp__3698__auto____16250))
{var G__16241__16251 = temp__3698__auto____16250;

{
var G__16259 = cljs.core.first.call(null,G__16241__16251);
var G__16260 = G__16241__16251;
n__16244 = G__16259;
G__16241__16246 = G__16260;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16262){
var content = cljs.core.first(arglist__16262);
var name = cljs.core.first(cljs.core.next(arglist__16262));
var value = cljs.core.rest(cljs.core.next(arglist__16262));
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
var vec__16269__16271 = pair.split(/\s*:\s*/);
var k__16273 = cljs.core.nth.call(null,vec__16269__16271,0,null);
var v__16275 = cljs.core.nth.call(null,vec__16269__16271,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16278 = k__16273;

if(cljs.core.truth_(and__3546__auto____16278))
{return v__16275;
} else
{return and__3546__auto____16278;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16273.toLowerCase()),v__16275);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16283 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16283)))
{return domina.parse_style_attributes.call(null,style__16283);
} else
{if(cljs.core.truth_(style__16283.cssText))
{return domina.parse_style_attributes.call(null,style__16283.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16304 = domina.single_node.call(null,content);
var attrs__16306 = node__16304.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16279_SHARP_){
var attr__16309 = attrs__16306.item(p1__16279_SHARP_);
var value__16310 = attr__16309.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16314 = cljs.core.not_EQ_.call(null,null,value__16310);

if(cljs.core.truth_(and__3546__auto____16314))
{return cljs.core.not_EQ_.call(null,"",value__16310);
} else
{return and__3546__auto____16314;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16309.nodeName.toLowerCase())],[attr__16309.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16306.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16341__16345 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16341__16345))
{var G__16350__16357 = cljs.core.first.call(null,G__16341__16345);
var vec__16353__16358 = G__16350__16357;
var name__16359 = cljs.core.nth.call(null,vec__16353__16358,0,null);
var value__16362 = cljs.core.nth.call(null,vec__16353__16358,1,null);
var G__16341__16363 = G__16341__16345;

var G__16350__16365 = G__16350__16357;
var G__16341__16367 = G__16341__16363;

while(true){
var vec__16369__16370 = G__16350__16365;
var name__16371 = cljs.core.nth.call(null,vec__16369__16370,0,null);
var value__16372 = cljs.core.nth.call(null,vec__16369__16370,1,null);
var G__16341__16373 = G__16341__16367;

domina.set_style_BANG_.call(null,content,name__16371,value__16372);
var temp__3698__auto____16376 = cljs.core.next.call(null,G__16341__16373);

if(cljs.core.truth_(temp__3698__auto____16376))
{var G__16341__16378 = temp__3698__auto____16376;

{
var G__16388 = cljs.core.first.call(null,G__16341__16378);
var G__16389 = G__16341__16378;
G__16350__16365 = G__16388;
G__16341__16367 = G__16389;
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
var G__16419__16420 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16419__16420))
{var G__16422__16424 = cljs.core.first.call(null,G__16419__16420);
var vec__16423__16425 = G__16422__16424;
var name__16426 = cljs.core.nth.call(null,vec__16423__16425,0,null);
var value__16427 = cljs.core.nth.call(null,vec__16423__16425,1,null);
var G__16419__16489 = G__16419__16420;

var G__16422__16490 = G__16422__16424;
var G__16419__16491 = G__16419__16489;

while(true){
var vec__16493__16494 = G__16422__16490;
var name__16496 = cljs.core.nth.call(null,vec__16493__16494,0,null);
var value__16497 = cljs.core.nth.call(null,vec__16493__16494,1,null);
var G__16419__16498 = G__16419__16491;

domina.set_attr_BANG_.call(null,content,name__16496,value__16497);
var temp__3698__auto____16501 = cljs.core.next.call(null,G__16419__16498);

if(cljs.core.truth_(temp__3698__auto____16501))
{var G__16419__16502 = temp__3698__auto____16501;

{
var G__16505 = cljs.core.first.call(null,G__16419__16502);
var G__16506 = G__16419__16502;
G__16422__16490 = G__16505;
G__16419__16491 = G__16506;
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
var G__16512__16515 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16512__16515))
{var node__16516 = cljs.core.first.call(null,G__16512__16515);
var G__16512__16518 = G__16512__16515;

while(true){
goog.dom.classes.add.call(null,node__16516,class$);
var temp__3698__auto____16522 = cljs.core.next.call(null,G__16512__16518);

if(cljs.core.truth_(temp__3698__auto____16522))
{var G__16512__16525 = temp__3698__auto____16522;

{
var G__16531 = cljs.core.first.call(null,G__16512__16525);
var G__16533 = G__16512__16525;
node__16516 = G__16531;
G__16512__16518 = G__16533;
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
var G__16535__16536 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16535__16536))
{var node__16538 = cljs.core.first.call(null,G__16535__16536);
var G__16535__16539 = G__16535__16536;

while(true){
goog.dom.classes.remove.call(null,node__16538,class$);
var temp__3698__auto____16540 = cljs.core.next.call(null,G__16535__16539);

if(cljs.core.truth_(temp__3698__auto____16540))
{var G__16535__16541 = temp__3698__auto____16540;

{
var G__16543 = cljs.core.first.call(null,G__16535__16541);
var G__16544 = G__16535__16541;
node__16538 = G__16543;
G__16535__16539 = G__16544;
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
var text__16547 = (function (content){
return text.call(null,content,true);
});
var text__16548 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16547.call(this,content);
case  2 :
return text__16548.call(this,content,normalize);
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
var G__16550__16551 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16550__16551))
{var node__16552 = cljs.core.first.call(null,G__16550__16551);
var G__16550__16553 = G__16550__16551;

while(true){
goog.dom.setTextContent.call(null,node__16552,value);
var temp__3698__auto____16554 = cljs.core.next.call(null,G__16550__16553);

if(cljs.core.truth_(temp__3698__auto____16554))
{var G__16550__16555 = temp__3698__auto____16554;

{
var G__16556 = cljs.core.first.call(null,G__16550__16555);
var G__16557 = G__16550__16555;
node__16552 = G__16556;
G__16550__16553 = G__16557;
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
var G__16561__16562 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16561__16562))
{var node__16563 = cljs.core.first.call(null,G__16561__16562);
var G__16561__16564 = G__16561__16562;

while(true){
goog.dom.forms.setValue.call(null,node__16563,value);
var temp__3698__auto____16565 = cljs.core.next.call(null,G__16561__16564);

if(cljs.core.truth_(temp__3698__auto____16565))
{var G__16561__16566 = temp__3698__auto____16565;

{
var G__16567 = cljs.core.first.call(null,G__16561__16566);
var G__16568 = G__16561__16566;
node__16563 = G__16567;
G__16561__16564 = G__16568;
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
var allows_inner_html_QMARK___16639 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16640 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16641 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16642 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16641);
var fallback__16643 = (function (p1__16585_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16585_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16644 = allows_inner_html_QMARK___16639;

if(cljs.core.truth_(and__3546__auto____16644))
{var and__3546__auto____16646 = (function (){var or__3548__auto____16645 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16645))
{return or__3548__auto____16645;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16640);
}
})();

if(cljs.core.truth_(and__3546__auto____16646))
{return cljs.core.not.call(null,special_tag_QMARK___16642);
} else
{return and__3546__auto____16646;
}
} else
{return and__3546__auto____16644;
}
})()))
{var value__16651 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16656__16657 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16656__16657))
{var node__16658 = cljs.core.first.call(null,G__16656__16657);
var G__16656__16659 = G__16656__16657;

while(true){
goog.events.removeAll.call(null,node__16658);
node__16658.innerHTML = value__16651;
var temp__3698__auto____16660 = cljs.core.next.call(null,G__16656__16659);

if(cljs.core.truth_(temp__3698__auto____16660))
{var G__16656__16661 = temp__3698__auto____16660;

{
var G__16713 = cljs.core.first.call(null,G__16656__16661);
var G__16714 = G__16656__16661;
node__16658 = G__16713;
G__16656__16659 = G__16714;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16652){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16652)))
{var e__16655 = e16652;

fallback__16643.call(null,value__16651);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16652;
} else
{}
}
}} else
{fallback__16643.call(null,html_string);
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
var parents__16715 = domina.nodes.call(null,parent_content);
var children__16716 = domina.nodes.call(null,child_content);
var first_child__16724 = (function (){var frag__16717 = document.createDocumentFragment();

var G__16718__16719 = cljs.core.seq.call(null,children__16716);

if(cljs.core.truth_(G__16718__16719))
{var child__16720 = cljs.core.first.call(null,G__16718__16719);
var G__16718__16721 = G__16718__16719;

while(true){
frag__16717.appendChild(child__16720);
var temp__3698__auto____16722 = cljs.core.next.call(null,G__16718__16721);

if(cljs.core.truth_(temp__3698__auto____16722))
{var G__16718__16723 = temp__3698__auto____16722;

{
var G__16729 = cljs.core.first.call(null,G__16718__16723);
var G__16730 = G__16718__16723;
child__16720 = G__16729;
G__16718__16721 = G__16730;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16717;
})();
var other_children__16725 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16715) - 1),(function (){
return first_child__16724.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16715)))
{f.call(null,cljs.core.first.call(null,parents__16715),first_child__16724);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16598_SHARP_,p2__16638_SHARP_){
return f.call(null,p1__16598_SHARP_,p2__16638_SHARP_);
}),cljs.core.rest.call(null,parents__16715),other_children__16725));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16735 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16736 = (function (nl,n){
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
return lazy_nl_via_item__16735.call(this,nl);
case  2 :
return lazy_nl_via_item__16736.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16743 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16744 = (function (nl,n){
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
return lazy_nl_via_array_ref__16743.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16744.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6775__auto____16773 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16774 = x__6775__auto____16773;

if(cljs.core.truth_(and__3546__auto____16774))
{var and__3546__auto____16775 = x__6775__auto____16773.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16775))
{var and__3546__auto____16776 = x__6775__auto____16773.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16776))
{return cljs.core.not.call(null,x__6775__auto____16773.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16776;
}
} else
{return and__3546__auto____16775;
}
} else
{return and__3546__auto____16774;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6775__auto____16773);
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
if(cljs.core.truth_((function (){var x__6775__auto____16783 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16784 = x__6775__auto____16783;

if(cljs.core.truth_(and__3546__auto____16784))
{var and__3546__auto____16785 = x__6775__auto____16783.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16785))
{var and__3546__auto____16786 = x__6775__auto____16783.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16786))
{return cljs.core.not.call(null,x__6775__auto____16783.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16786;
}
} else
{return and__3546__auto____16785;
}
} else
{return and__3546__auto____16784;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6775__auto____16783);
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
if(cljs.core.truth_((function (){var x__6775__auto____16790 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16791 = x__6775__auto____16790;

if(cljs.core.truth_(and__3546__auto____16791))
{var and__3546__auto____16792 = x__6775__auto____16790.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16792))
{var and__3546__auto____16796 = x__6775__auto____16790.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16796))
{return cljs.core.not.call(null,x__6775__auto____16790.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16796;
}
} else
{return and__3546__auto____16792;
}
} else
{return and__3546__auto____16791;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6775__auto____16790);
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
var G__16797 = null;
var G__16797__16798 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16797__16799 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16797 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16797__16798.call(this,nodelist,n);
case  3 :
return G__16797__16799.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16797;
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
var G__16801 = null;
var G__16801__16802 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16801__16803 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16801 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16801__16802.call(this,nodelist,n);
case  3 :
return G__16801__16803.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16801;
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
var G__16808 = null;
var G__16808__16809 = (function (coll,n){
return coll.item(n);
});
var G__16808__16810 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16808 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16808__16809.call(this,coll,n);
case  3 :
return G__16808__16810.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16808;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
