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
var opt_wrapper__16265 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__16266 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__16268 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__16266,"caption":table_section_wrapper__16266,"optgroup":opt_wrapper__16265,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__16268,"thead":table_section_wrapper__16266,"th":cell_wrapper__16268,"option":opt_wrapper__16265,"tbody":table_section_wrapper__16266,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__16266});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___16284 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__16304 = (cljs.core.truth_((function (){var and__3546__auto____16288 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____16288))
{return no_tbody_QMARK___16284;
} else
{return and__3546__auto____16288;
}
})())?(function (){var and__3546__auto____16292 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____16292))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____16292;
}
})():(cljs.core.truth_((function (){var and__3546__auto____16300 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____16300))
{return no_tbody_QMARK___16284;
} else
{return and__3546__auto____16300;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__16305__16306 = cljs.core.seq.call(null,tbody__16304);

if(cljs.core.truth_(G__16305__16306))
{var child__16309 = cljs.core.first.call(null,G__16305__16306);
var G__16305__16311 = G__16305__16306;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____16313 = cljs.core._EQ_.call(null,child__16309.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____16313))
{return cljs.core._EQ_.call(null,child__16309.childNodes.length,0);
} else
{return and__3546__auto____16313;
}
})()))
{child__16309.parentNode.removeChild(child__16309);
} else
{}
var temp__3698__auto____16314 = cljs.core.next.call(null,G__16305__16311);

if(cljs.core.truth_(temp__3698__auto____16314))
{var G__16305__16315 = temp__3698__auto____16314;

{
var G__16321 = cljs.core.first.call(null,G__16305__16315);
var G__16322 = G__16305__16315;
child__16309 = G__16321;
G__16305__16311 = G__16322;
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
var html__16333 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__16334 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__16333))).toLowerCase();
var vec__16331__16335 = cljs.core.get.call(null,domina.wrap_map,tag_name__16334,"﷐'default".call(null,domina.wrap_map));
var depth__16336 = cljs.core.nth.call(null,vec__16331__16335,0,null);
var start_wrap__16337 = cljs.core.nth.call(null,vec__16331__16335,1,null);
var end_wrap__16338 = cljs.core.nth.call(null,vec__16331__16335,2,null);
var div__16342 = (function (){var wrapper__16340 = (function (){var div__16339 = document.createElement("div");

div__16339.innerHTML = cljs.core.str.call(null,start_wrap__16337,html__16333,end_wrap__16338);
return div__16339;
})();
var level__16341 = depth__16336;

while(true){
if(cljs.core.truth_((level__16341 > 0)))
{{
var G__16344 = wrapper__16340.lastChild;
var G__16345 = (level__16341 - 1);
wrapper__16340 = G__16344;
level__16341 = G__16345;
continue;
}
} else
{return wrapper__16340;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__16342,html__16333);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____16343 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____16343))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__16333);
} else
{return and__3546__auto____16343;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__16342,html__16333);
} else
{}
return div__16342.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____16350 = content;

if(cljs.core.truth_(and__3546__auto____16350))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16350;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16351 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16351))
{return or__3548__auto____16351;
} else
{var or__3548__auto____16352 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16352))
{return or__3548__auto____16352;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16353 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16353))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16353;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16359 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16359))
{return or__3548__auto____16359;
} else
{var or__3548__auto____16361 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16361))
{return or__3548__auto____16361;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16374 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16374))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16374;
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
if(cljs.core.truth_((void 0 === domina.t16381)))
{
/**
* @constructor
*/
domina.t16381 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16381.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16381");
});
domina.t16381.prototype.domina$DomContent$ = true;
domina.t16381.prototype.domina$DomContent$nodes = (function (_){
var this__16382 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16382.class_name)));
});
domina.t16381.prototype.domina$DomContent$single_node = (function (_){
var this__16383 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16383.class_name)));
});
domina.t16381.prototype.cljs$core$IMeta$ = true;
domina.t16381.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16384 = this;
return this__16384.__meta;
});
domina.t16381.prototype.cljs$core$IWithMeta$ = true;
domina.t16381.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16385 = this;
return (new domina.t16381(this__16385.class_name,this__16385.by_class,__meta));
});
domina.t16381;
} else
{}
return (new domina.t16381(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16399_SHARP_){
return p1__16399_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16412_SHARP_,p2__16413_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16412_SHARP_,p2__16413_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16423_SHARP_,p2__16422_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16422_SHARP_,p1__16423_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16427_SHARP_,p2__16426_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16426_SHARP_,p1__16427_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16438_SHARP_,p2__16437_SHARP_){
return goog.dom.replaceNode.call(null,p2__16437_SHARP_,p1__16438_SHARP_);
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
var s__16467 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16467)))
{return null;
} else
{return s__16467;
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
var G__16474__16475 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16474__16475))
{var n__16476 = cljs.core.first.call(null,G__16474__16475);
var G__16474__16478 = G__16474__16475;

while(true){
goog.style.setStyle.call(null,n__16476,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16480 = cljs.core.next.call(null,G__16474__16478);

if(cljs.core.truth_(temp__3698__auto____16480))
{var G__16474__16481 = temp__3698__auto____16480;

{
var G__16482 = cljs.core.first.call(null,G__16474__16481);
var G__16483 = G__16474__16481;
n__16476 = G__16482;
G__16474__16478 = G__16483;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16484){
var content = cljs.core.first(arglist__16484);
var name = cljs.core.first(cljs.core.next(arglist__16484));
var value = cljs.core.rest(cljs.core.next(arglist__16484));
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
var G__16510__16515 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16510__16515))
{var n__16516 = cljs.core.first.call(null,G__16510__16515);
var G__16510__16517 = G__16510__16515;

while(true){
n__16516.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16520 = cljs.core.next.call(null,G__16510__16517);

if(cljs.core.truth_(temp__3698__auto____16520))
{var G__16510__16521 = temp__3698__auto____16520;

{
var G__16528 = cljs.core.first.call(null,G__16510__16521);
var G__16529 = G__16510__16521;
n__16516 = G__16528;
G__16510__16517 = G__16529;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16533){
var content = cljs.core.first(arglist__16533);
var name = cljs.core.first(cljs.core.next(arglist__16533));
var value = cljs.core.rest(cljs.core.next(arglist__16533));
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
var vec__16536__16538 = pair.split(/\s*:\s*/);
var k__16540 = cljs.core.nth.call(null,vec__16536__16538,0,null);
var v__16541 = cljs.core.nth.call(null,vec__16536__16538,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16543 = k__16540;

if(cljs.core.truth_(and__3546__auto____16543))
{return v__16541;
} else
{return and__3546__auto____16543;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16540.toLowerCase()),v__16541);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16547 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16547)))
{return domina.parse_style_attributes.call(null,style__16547);
} else
{if(cljs.core.truth_(style__16547.cssText))
{return domina.parse_style_attributes.call(null,style__16547.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16555 = domina.single_node.call(null,content);
var attrs__16558 = node__16555.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16545_SHARP_){
var attr__16559 = attrs__16558.item(p1__16545_SHARP_);
var value__16561 = attr__16559.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16563 = cljs.core.not_EQ_.call(null,null,value__16561);

if(cljs.core.truth_(and__3546__auto____16563))
{return cljs.core.not_EQ_.call(null,"",value__16561);
} else
{return and__3546__auto____16563;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16559.nodeName.toLowerCase())],[attr__16559.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16558.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16624__16625 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16624__16625))
{var G__16663__16666 = cljs.core.first.call(null,G__16624__16625);
var vec__16665__16667 = G__16663__16666;
var name__16668 = cljs.core.nth.call(null,vec__16665__16667,0,null);
var value__16669 = cljs.core.nth.call(null,vec__16665__16667,1,null);
var G__16624__16670 = G__16624__16625;

var G__16663__16671 = G__16663__16666;
var G__16624__16672 = G__16624__16670;

while(true){
var vec__16673__16674 = G__16663__16671;
var name__16675 = cljs.core.nth.call(null,vec__16673__16674,0,null);
var value__16676 = cljs.core.nth.call(null,vec__16673__16674,1,null);
var G__16624__16677 = G__16624__16672;

domina.set_style_BANG_.call(null,content,name__16675,value__16676);
var temp__3698__auto____16680 = cljs.core.next.call(null,G__16624__16677);

if(cljs.core.truth_(temp__3698__auto____16680))
{var G__16624__16681 = temp__3698__auto____16680;

{
var G__16683 = cljs.core.first.call(null,G__16624__16681);
var G__16684 = G__16624__16681;
G__16663__16671 = G__16683;
G__16624__16672 = G__16684;
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
var G__16688__16690 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16688__16690))
{var G__16693__16695 = cljs.core.first.call(null,G__16688__16690);
var vec__16694__16696 = G__16693__16695;
var name__16697 = cljs.core.nth.call(null,vec__16694__16696,0,null);
var value__16698 = cljs.core.nth.call(null,vec__16694__16696,1,null);
var G__16688__16699 = G__16688__16690;

var G__16693__16700 = G__16693__16695;
var G__16688__16701 = G__16688__16699;

while(true){
var vec__16702__16703 = G__16693__16700;
var name__16704 = cljs.core.nth.call(null,vec__16702__16703,0,null);
var value__16707 = cljs.core.nth.call(null,vec__16702__16703,1,null);
var G__16688__16708 = G__16688__16701;

domina.set_attr_BANG_.call(null,content,name__16704,value__16707);
var temp__3698__auto____16709 = cljs.core.next.call(null,G__16688__16708);

if(cljs.core.truth_(temp__3698__auto____16709))
{var G__16688__16710 = temp__3698__auto____16709;

{
var G__16712 = cljs.core.first.call(null,G__16688__16710);
var G__16713 = G__16688__16710;
G__16693__16700 = G__16712;
G__16688__16701 = G__16713;
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
var G__16716__16717 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16716__16717))
{var node__16718 = cljs.core.first.call(null,G__16716__16717);
var G__16716__16719 = G__16716__16717;

while(true){
goog.dom.classes.add.call(null,node__16718,class$);
var temp__3698__auto____16720 = cljs.core.next.call(null,G__16716__16719);

if(cljs.core.truth_(temp__3698__auto____16720))
{var G__16716__16721 = temp__3698__auto____16720;

{
var G__16725 = cljs.core.first.call(null,G__16716__16721);
var G__16726 = G__16716__16721;
node__16718 = G__16725;
G__16716__16719 = G__16726;
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
var G__16730__16732 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16730__16732))
{var node__16734 = cljs.core.first.call(null,G__16730__16732);
var G__16730__16735 = G__16730__16732;

while(true){
goog.dom.classes.remove.call(null,node__16734,class$);
var temp__3698__auto____16738 = cljs.core.next.call(null,G__16730__16735);

if(cljs.core.truth_(temp__3698__auto____16738))
{var G__16730__16739 = temp__3698__auto____16738;

{
var G__16744 = cljs.core.first.call(null,G__16730__16739);
var G__16745 = G__16730__16739;
node__16734 = G__16744;
G__16730__16735 = G__16745;
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
var text__16751 = (function (content){
return text.call(null,content,true);
});
var text__16752 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16751.call(this,content);
case  2 :
return text__16752.call(this,content,normalize);
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
var G__16754__16755 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16754__16755))
{var node__16756 = cljs.core.first.call(null,G__16754__16755);
var G__16754__16757 = G__16754__16755;

while(true){
goog.dom.setTextContent.call(null,node__16756,value);
var temp__3698__auto____16758 = cljs.core.next.call(null,G__16754__16757);

if(cljs.core.truth_(temp__3698__auto____16758))
{var G__16754__16759 = temp__3698__auto____16758;

{
var G__16762 = cljs.core.first.call(null,G__16754__16759);
var G__16763 = G__16754__16759;
node__16756 = G__16762;
G__16754__16757 = G__16763;
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
var G__16771__16772 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16771__16772))
{var node__16773 = cljs.core.first.call(null,G__16771__16772);
var G__16771__16774 = G__16771__16772;

while(true){
goog.dom.forms.setValue.call(null,node__16773,value);
var temp__3698__auto____16775 = cljs.core.next.call(null,G__16771__16774);

if(cljs.core.truth_(temp__3698__auto____16775))
{var G__16771__16776 = temp__3698__auto____16775;

{
var G__16777 = cljs.core.first.call(null,G__16771__16776);
var G__16778 = G__16771__16776;
node__16773 = G__16777;
G__16771__16774 = G__16778;
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
var allows_inner_html_QMARK___16787 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16788 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16795 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16798 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16795);
var fallback__16804 = (function (p1__16782_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16782_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16805 = allows_inner_html_QMARK___16787;

if(cljs.core.truth_(and__3546__auto____16805))
{var and__3546__auto____16810 = (function (){var or__3548__auto____16809 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16809))
{return or__3548__auto____16809;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16788);
}
})();

if(cljs.core.truth_(and__3546__auto____16810))
{return cljs.core.not.call(null,special_tag_QMARK___16798);
} else
{return and__3546__auto____16810;
}
} else
{return and__3546__auto____16805;
}
})()))
{var value__16814 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16846__16847 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16846__16847))
{var node__16848 = cljs.core.first.call(null,G__16846__16847);
var G__16846__16849 = G__16846__16847;

while(true){
goog.events.removeAll.call(null,node__16848);
node__16848.innerHTML = value__16814;
var temp__3698__auto____16850 = cljs.core.next.call(null,G__16846__16849);

if(cljs.core.truth_(temp__3698__auto____16850))
{var G__16846__16851 = temp__3698__auto____16850;

{
var G__16854 = cljs.core.first.call(null,G__16846__16851);
var G__16855 = G__16846__16851;
node__16848 = G__16854;
G__16846__16849 = G__16855;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16815){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16815)))
{var e__16819 = e16815;

fallback__16804.call(null,value__16814);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16815;
} else
{}
}
}} else
{fallback__16804.call(null,html_string);
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
var parents__16857 = domina.nodes.call(null,parent_content);
var children__16858 = domina.nodes.call(null,child_content);
var first_child__16872 = (function (){var frag__16859 = document.createDocumentFragment();

var G__16860__16861 = cljs.core.seq.call(null,children__16858);

if(cljs.core.truth_(G__16860__16861))
{var child__16862 = cljs.core.first.call(null,G__16860__16861);
var G__16860__16863 = G__16860__16861;

while(true){
frag__16859.appendChild(child__16862);
var temp__3698__auto____16867 = cljs.core.next.call(null,G__16860__16863);

if(cljs.core.truth_(temp__3698__auto____16867))
{var G__16860__16870 = temp__3698__auto____16867;

{
var G__16879 = cljs.core.first.call(null,G__16860__16870);
var G__16880 = G__16860__16870;
child__16862 = G__16879;
G__16860__16863 = G__16880;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16859;
})();
var other_children__16873 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16857) - 1),(function (){
return first_child__16872.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16857)))
{f.call(null,cljs.core.first.call(null,parents__16857),first_child__16872);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16785_SHARP_,p2__16786_SHARP_){
return f.call(null,p1__16785_SHARP_,p2__16786_SHARP_);
}),cljs.core.rest.call(null,parents__16857),other_children__16873));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16885 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16886 = (function (nl,n){
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
return lazy_nl_via_item__16885.call(this,nl);
case  2 :
return lazy_nl_via_item__16886.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16892 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16893 = (function (nl,n){
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
return lazy_nl_via_array_ref__16892.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16893.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6755__auto____16895 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16896 = x__6755__auto____16895;

if(cljs.core.truth_(and__3546__auto____16896))
{var and__3546__auto____16899 = x__6755__auto____16895.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16899))
{var and__3546__auto____16900 = x__6755__auto____16895.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16900))
{return cljs.core.not.call(null,x__6755__auto____16895.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16900;
}
} else
{return and__3546__auto____16899;
}
} else
{return and__3546__auto____16896;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16895);
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
if(cljs.core.truth_((function (){var x__6755__auto____16901 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16902 = x__6755__auto____16901;

if(cljs.core.truth_(and__3546__auto____16902))
{var and__3546__auto____16903 = x__6755__auto____16901.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16903))
{var and__3546__auto____16904 = x__6755__auto____16901.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16904))
{return cljs.core.not.call(null,x__6755__auto____16901.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16904;
}
} else
{return and__3546__auto____16903;
}
} else
{return and__3546__auto____16902;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16901);
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
if(cljs.core.truth_((function (){var x__6755__auto____16905 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16906 = x__6755__auto____16905;

if(cljs.core.truth_(and__3546__auto____16906))
{var and__3546__auto____16907 = x__6755__auto____16905.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16907))
{var and__3546__auto____16908 = x__6755__auto____16905.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16908))
{return cljs.core.not.call(null,x__6755__auto____16905.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16908;
}
} else
{return and__3546__auto____16907;
}
} else
{return and__3546__auto____16906;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16905);
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
var G__16909 = null;
var G__16909__16910 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16909__16911 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16909 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16909__16910.call(this,nodelist,n);
case  3 :
return G__16909__16911.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16909;
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
var G__16913 = null;
var G__16913__16914 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16913__16915 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16913 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16913__16914.call(this,nodelist,n);
case  3 :
return G__16913__16915.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16913;
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
var G__16920 = null;
var G__16920__16921 = (function (coll,n){
return coll.item(n);
});
var G__16920__16922 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16920 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16920__16921.call(this,coll,n);
case  3 :
return G__16920__16922.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16920;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
