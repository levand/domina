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
var opt_wrapper__20767 = cljs.core.PersistentVector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__20768 = cljs.core.PersistentVector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__20769 = cljs.core.PersistentVector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","\uFDD0'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.PersistentVector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"\uFDD0'default":cljs.core.PersistentVector.fromArray([0,"",""]),"tfoot":table_section_wrapper__20768,"caption":table_section_wrapper__20768,"optgroup":opt_wrapper__20767,"legend":cljs.core.PersistentVector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.PersistentVector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__20769,"thead":table_section_wrapper__20768,"th":cell_wrapper__20769,"option":opt_wrapper__20767,"tbody":table_section_wrapper__20768,"tr":cljs.core.PersistentVector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__20768});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___20780 = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody__20785 = (((function (){var and__3546__auto____20781 = cljs.core._EQ_.__2(domina.tag_name,"table");

if((and__3546__auto____20781))
{return no_tbody_QMARK___20780;
} else
{return and__3546__auto____20781;
}
})())?(function (){var and__3546__auto____20783 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____20783))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____20783;
}
})():(((function (){var and__3546__auto____20784 = cljs.core._EQ_.__2(domina.start_wrap,"<table>");

if((and__3546__auto____20784))
{return no_tbody_QMARK___20780;
} else
{return and__3546__auto____20784;
}
})())?div.childNodes:cljs.core.PersistentVector.fromArray([])));

var G__20786__20787 = cljs.core.seq(tbody__20785);

if(cljs.core.truth_(G__20786__20787))
{var child__20788 = cljs.core.first(G__20786__20787);
var G__20786__20789 = G__20786__20787;

while(true){
if(((function (){var and__3546__auto____20790 = cljs.core._EQ_.__2(child__20788.nodeName,"tbody");

if((and__3546__auto____20790))
{return cljs.core._EQ_.__2(child__20788.childNodes.length,0);
} else
{return and__3546__auto____20790;
}
})()))
{child__20788.parentNode.removeChild(child__20788);
} else
{}
var temp__3698__auto____20900 = cljs.core.next(G__20786__20789);

if(cljs.core.truth_(temp__3698__auto____20900))
{var G__20786__20901 = temp__3698__auto____20900;

{
var G__20909 = cljs.core.first(G__20786__20901);
var G__20910 = G__20786__20901;
child__20788 = G__20909;
G__20786__20789 = G__20910;
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
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
domina.html_to_dom = (function html_to_dom(html){
var html__20912 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__20913 = cljs.core.str.__1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__20912))).toLowerCase();
var vec__20911__20914 = cljs.core.get.__3(domina.wrap_map,tag_name__20913,"\uFDD0'default".call(null,domina.wrap_map));
var depth__20915 = cljs.core.nth.__3(vec__20911__20914,0,null);
var start_wrap__20916 = cljs.core.nth.__3(vec__20911__20914,1,null);
var end_wrap__20917 = cljs.core.nth.__3(vec__20911__20914,2,null);
var div__20921 = (function (){var wrapper__20919 = (function (){var div__20918 = document.createElement("div");

div__20918.innerHTML = cljs.core.str(start_wrap__20916,html__20912,end_wrap__20917);
return div__20918;
})();
var level__20920 = depth__20915;

while(true){
if(((level__20920 > 0)))
{{
var G__20924 = wrapper__20919.lastChild;
var G__20925 = (level__20920 - 1);
wrapper__20919 = G__20924;
level__20920 = G__20925;
continue;
}
} else
{return wrapper__20919;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div__20921,html__20912);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____20922 = cljs.core.not(domina.support.leading_whitespace_QMARK_);

if((and__3546__auto____20922))
{return cljs.core.re_find(domina.re_leading_whitespace,html__20912);
} else
{return and__3546__auto____20922;
}
})()))
{domina.restore_leading_whitespace_BANG_(div__20921,html__20912);
} else
{}
return div__20921.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
void 0;
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(((function (){var and__3546__auto____20930 = content;

if((and__3546__auto____20930))
{return content.domina$DomContent$nodes__1;
} else
{return and__3546__auto____20930;
}
})()))
{return content.domina$DomContent$nodes__1(content);
} else
{return (function (){var or__3548__auto____20931 = (domina.nodes[goog.typeOf.call(null,content)]);

if((or__3548__auto____20931))
{return or__3548__auto____20931;
} else
{var or__3548__auto____20932 = (domina.nodes["_"]);

if((or__3548__auto____20932))
{return or__3548__auto____20932;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(((function (){var and__3546__auto____20933 = nodeseq;

if((and__3546__auto____20933))
{return nodeseq.domina$DomContent$single_node__1;
} else
{return and__3546__auto____20933;
}
})()))
{return nodeseq.domina$DomContent$single_node__1(nodeseq);
} else
{return (function (){var or__3548__auto____20934 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if((or__3548__auto____20934))
{return or__3548__auto____20934;
} else
{var or__3548__auto____20935 = (domina.single_node["_"]);

if((or__3548__auto____20935))
{return or__3548__auto____20935;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
void 0;
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____20985 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____20985))
{return cljs.core.not(cljs.core._EQ_.__2(window.console,undefined));
} else
{return and__3546__auto____20985;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.log = (function log(mesg){
if(cljs.core.truth_(window.console))
{return console.log(mesg);
} else
{return null;
}
});
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){
return goog.dom.getElement.call(null,cljs.core.name(id));
});
void 0;
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){
if(((void 0 === domina.t21031)))
{
/**
* @constructor
*/
domina.t21031 = (function (class_name,by_class,__meta__321__auto__){
this.class_name = class_name;
this.by_class = by_class;
this.__meta__321__auto__ = __meta__321__auto__;
})
domina.t21031.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("domina.t21031");
});
domina.t21031.prototype.domina$DomContent$ = true;
domina.t21031.prototype.domina$DomContent$nodes__1 = (function (_){
var this__21033 = this;
return domina.normalize_seq(goog.dom.getElementsByClass.call(null,cljs.core.name(this__21033.class_name)));
});
domina.t21031.prototype.domina$DomContent$single_node__1 = (function (_){
var this__21035 = this;
return domina.normalize_seq(goog.dom.getElementByClass.call(null,cljs.core.name(this__21035.class_name)));
});
domina.t21031.prototype.cljs$core$IMeta$ = true;
domina.t21031.prototype.cljs$core$IMeta$_meta__1 = (function (___322__auto__){
var this__21037 = this;
return this__21037.__meta__321__auto__;
});
domina.t21031.prototype.cljs$core$IWithMeta$ = true;
domina.t21031.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (___322__auto__,__meta__321__auto__){
var this__21039 = this;
return (new domina.t21031(this__21039.class_name,this__21039.by_class,__meta__321__auto__));
});
domina.t21031;
} else
{}
return (new domina.t21031(class_name,by_class,null));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){
return cljs.core.mapcat.__2(goog.dom.getChildren,domina.nodes(content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){
return cljs.core.map.__2((function (p1__21048_SHARP_){
return p1__21048_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
void 0;
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){
domina.apply_with_cloning(goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning((function (p1__21056_SHARP_,p2__21058_SHARP_){
return goog.dom.insertChildAt.call(null,p1__21056_SHARP_,p2__21058_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){
domina.apply_with_cloning((function (p1__21079_SHARP_,p2__21078_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__21078_SHARP_,p1__21079_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning((function (p1__21081_SHARP_,p2__21080_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__21080_SHARP_,p1__21081_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning((function (p1__21109_SHARP_,p2__21107_SHARP_){
return goog.dom.replaceNode.call(null,p2__21107_SHARP_,p1__21109_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){
return cljs.core.doall.__1(cljs.core.map.__2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){
return cljs.core.dorun.__1(cljs.core.map.__2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){
cljs.core.dorun.__1(cljs.core.map.__2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){
var s__21112 = goog.style.getStyle.call(null,domina.single_node(content),cljs.core.name(name));

if(cljs.core.truth_(clojure.string.blank_QMARK_(s__21112)))
{return null;
} else
{return s__21112;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__21116__21117 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21116__21117))
{var n__21118 = cljs.core.first(G__21116__21117);
var G__21116__21119 = G__21116__21117;

while(true){
goog.style.setStyle.call(null,n__21118,cljs.core.name(name),cljs.core.apply.__2(cljs.core.str,value));
var temp__3698__auto____21120 = cljs.core.next(G__21116__21119);

if(cljs.core.truth_(temp__3698__auto____21120))
{var G__21116__21121 = temp__3698__auto____21120;

{
var G__21127 = cljs.core.first(G__21116__21121);
var G__21128 = G__21116__21121;
n__21118 = G__21127;
G__21116__21119 = G__21128;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__21129){
var content = cljs.core.first(arglist__21129);
var name = cljs.core.first(cljs.core.next(arglist__21129));
var value = cljs.core.rest(cljs.core.next(arglist__21129));
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
var G__21130__21131 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21130__21131))
{var n__21132 = cljs.core.first(G__21130__21131);
var G__21130__21133 = G__21130__21131;

while(true){
n__21132.setAttribute(cljs.core.name(name),cljs.core.apply.__2(cljs.core.str,value));
var temp__3698__auto____21134 = cljs.core.next(G__21130__21133);

if(cljs.core.truth_(temp__3698__auto____21134))
{var G__21130__21135 = temp__3698__auto____21134;

{
var G__21139 = cljs.core.first(G__21130__21135);
var G__21140 = G__21130__21135;
n__21132 = G__21139;
G__21130__21133 = G__21140;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__21142){
var content = cljs.core.first(arglist__21142);
var name = cljs.core.first(cljs.core.next(arglist__21142));
var value = cljs.core.rest(cljs.core.next(arglist__21142));
return set_attr_BANG___delegate.call(this, content, name, value);
});
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){
var G__21144__21145 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21144__21145))
{var n__21146 = cljs.core.first(G__21144__21145);
var G__21144__21147 = G__21144__21145;

while(true){
n__21146.removeAttribute(cljs.core.name(name));
var temp__3698__auto____21151 = cljs.core.next(G__21144__21147);

if(cljs.core.truth_(temp__3698__auto____21151))
{var G__21144__21152 = temp__3698__auto____21151;

{
var G__21158 = cljs.core.first(G__21144__21152);
var G__21159 = G__21144__21152;
n__21146 = G__21158;
G__21144__21147 = G__21159;
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
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.__3((function (acc,pair){
var vec__21166__21167 = pair.split(/\s*:\s*/);
var k__21168 = cljs.core.nth.__3(vec__21166__21167,0,null);
var v__21169 = cljs.core.nth.__3(vec__21166__21167,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____21170 = k__21168;

if(cljs.core.truth_(and__3546__auto____21170))
{return v__21169;
} else
{return and__3546__auto____21170;
}
})()))
{return cljs.core.assoc.__3(acc,cljs.core.keyword.__1(k__21168.toLowerCase()),v__21169);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__21174 = domina.attr(content,"style");

if((cljs.core.string_QMARK_(style__21174)))
{return domina.parse_style_attributes(style__21174);
} else
{if(cljs.core.truth_(style__21174.cssText))
{return domina.parse_style_attributes(style__21174.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__21188 = domina.single_node(content);
var attrs__21189 = node__21188.attributes;

return cljs.core.reduce.__2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.__2((function (p1__21173_SHARP_){
var attr__21191 = attrs__21189.item(p1__21173_SHARP_);
var value__21193 = attr__21191.nodeValue;

if(((function (){var and__3546__auto____21196 = cljs.core.not_EQ_.__2(null,value__21193);

if((and__3546__auto____21196))
{return cljs.core.not_EQ_.__2("",value__21193);
} else
{return and__3546__auto____21196;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.__1(attr__21191.nodeName.toLowerCase())],[attr__21191.nodeValue]);
} else
{return null;
}
}),cljs.core.range.__1(attrs__21189.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__21206__21208 = cljs.core.seq(styles);

if(cljs.core.truth_(G__21206__21208))
{var G__21211__21213 = cljs.core.first(G__21206__21208);
var vec__21212__21214 = G__21211__21213;
var name__21215 = cljs.core.nth.__3(vec__21212__21214,0,null);
var value__21216 = cljs.core.nth.__3(vec__21212__21214,1,null);
var G__21206__21217 = G__21206__21208;

var G__21211__21218 = G__21211__21213;
var G__21206__21219 = G__21206__21217;

while(true){
var vec__21220__21221 = G__21211__21218;
var name__21222 = cljs.core.nth.__3(vec__21220__21221,0,null);
var value__21223 = cljs.core.nth.__3(vec__21220__21221,1,null);
var G__21206__21224 = G__21206__21219;

domina.set_style_BANG_(content,name__21222,value__21223);
var temp__3698__auto____21227 = cljs.core.next(G__21206__21224);

if(cljs.core.truth_(temp__3698__auto____21227))
{var G__21206__21228 = temp__3698__auto____21227;

{
var G__21233 = cljs.core.first(G__21206__21228);
var G__21234 = G__21206__21228;
G__21211__21218 = G__21233;
G__21206__21219 = G__21234;
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
var G__21235__21236 = cljs.core.seq(attrs);

if(cljs.core.truth_(G__21235__21236))
{var G__21238__21240 = cljs.core.first(G__21235__21236);
var vec__21239__21241 = G__21238__21240;
var name__21242 = cljs.core.nth.__3(vec__21239__21241,0,null);
var value__21243 = cljs.core.nth.__3(vec__21239__21241,1,null);
var G__21235__21244 = G__21235__21236;

var G__21238__21245 = G__21238__21240;
var G__21235__21246 = G__21235__21244;

while(true){
var vec__21247__21248 = G__21238__21245;
var name__21249 = cljs.core.nth.__3(vec__21247__21248,0,null);
var value__21250 = cljs.core.nth.__3(vec__21247__21248,1,null);
var G__21235__21251 = G__21235__21246;

domina.set_attr_BANG_(content,name__21249,value__21250);
var temp__3698__auto____21252 = cljs.core.next(G__21235__21251);

if(cljs.core.truth_(temp__3698__auto____21252))
{var G__21235__21253 = temp__3698__auto____21252;

{
var G__21256 = cljs.core.first(G__21235__21253);
var G__21257 = G__21235__21253;
G__21238__21245 = G__21256;
G__21235__21246 = G__21257;
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
return goog.dom.classes.has.call(null,domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){
var G__21262__21264 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21262__21264))
{var node__21266 = cljs.core.first(G__21262__21264);
var G__21262__21267 = G__21262__21264;

while(true){
goog.dom.classes.add.call(null,node__21266,class$);
var temp__3698__auto____21282 = cljs.core.next(G__21262__21267);

if(cljs.core.truth_(temp__3698__auto____21282))
{var G__21262__21283 = temp__3698__auto____21282;

{
var G__21286 = cljs.core.first(G__21262__21283);
var G__21287 = G__21262__21283;
node__21266 = G__21286;
G__21262__21267 = G__21287;
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
var G__21288__21289 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21288__21289))
{var node__21290 = cljs.core.first(G__21288__21289);
var G__21288__21291 = G__21288__21289;

while(true){
goog.dom.classes.remove.call(null,node__21290,class$);
var temp__3698__auto____21292 = cljs.core.next(G__21288__21291);

if(cljs.core.truth_(temp__3698__auto____21292))
{var G__21288__21293 = temp__3698__auto____21292;

{
var G__21296 = cljs.core.first(G__21288__21293);
var G__21297 = G__21288__21293;
node__21290 = G__21296;
G__21288__21291 = G__21297;
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
return cljs.core.seq(goog.dom.classes.get.call(null,domina.single_node(content)));
});
/**
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace, normalize line breaks and trim (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__1 = (function (content){
return text.call(null,content,true);
});
var text__2 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node(content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node(content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__1.call(this,content);
case  2 :
return text__2.call(this,content,normalize);
}
throw('Invalid arity: ' + arguments.length);
};
text.__1 = text__1;
text.__2 = text__2;
return text;
})()
;
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){
var G__21300__21310 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21300__21310))
{var node__21311 = cljs.core.first(G__21300__21310);
var G__21300__21312 = G__21300__21310;

while(true){
goog.dom.setTextContent.call(null,node__21311,value);
var temp__3698__auto____21313 = cljs.core.next(G__21300__21312);

if(cljs.core.truth_(temp__3698__auto____21313))
{var G__21300__21314 = temp__3698__auto____21313;

{
var G__21320 = cljs.core.first(G__21300__21314);
var G__21321 = G__21300__21314;
node__21311 = G__21320;
G__21300__21312 = G__21321;
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
return goog.dom.forms.getValue.call(null,domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){
var G__21327__21329 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21327__21329))
{var node__21330 = cljs.core.first(G__21327__21329);
var G__21327__21331 = G__21327__21329;

while(true){
goog.dom.forms.setValue.call(null,node__21330,value);
var temp__3698__auto____21332 = cljs.core.next(G__21327__21331);

if(cljs.core.truth_(temp__3698__auto____21332))
{var G__21327__21333 = temp__3698__auto____21332;

{
var G__21336 = cljs.core.first(G__21327__21333);
var G__21337 = G__21327__21333;
node__21330 = G__21336;
G__21327__21331 = G__21337;
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
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK___21341 = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___21342 = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name__21343 = cljs.core.str.__1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___21344 = cljs.core.contains_QMARK_(domina.wrap_map,tag_name__21343);

if(cljs.core.truth_((function (){var and__3546__auto____21345 = allows_inner_html_QMARK___21341;

if(cljs.core.truth_(and__3546__auto____21345))
{var and__3546__auto____21347 = (function (){var or__3548__auto____21346 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____21346))
{return or__3548__auto____21346;
} else
{return cljs.core.not(leading_whitespace_QMARK___21342);
}
})();

if(cljs.core.truth_(and__3546__auto____21347))
{return cljs.core.not(special_tag_QMARK___21344);
} else
{return and__3546__auto____21347;
}
} else
{return and__3546__auto____21345;
}
})()))
{var value__21348 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__21351__21352 = cljs.core.seq(domina.nodes(content));

if(cljs.core.truth_(G__21351__21352))
{var node__21353 = cljs.core.first(G__21351__21352);
var G__21351__21354 = G__21351__21352;

while(true){
goog.events.removeAll.call(null,node__21353);
node__21353.innerHTML = value__21348;
var temp__3698__auto____21355 = cljs.core.next(G__21351__21354);

if(cljs.core.truth_(temp__3698__auto____21355))
{var G__21351__21356 = temp__3698__auto____21355;

{
var G__21363 = cljs.core.first(G__21351__21356);
var G__21364 = G__21351__21356;
node__21353 = G__21363;
G__21351__21354 = G__21364;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e21349){if((cljs.core.instance_QMARK_(domina.Exception,e21349)))
{var e__21350 = e21349;

domina.replace_children_BANG_(content,value__21348);
} else
{if(("\uFDD0'else"))
{throw e21349;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){
if((cljs.core.string_QMARK_(inner_content)))
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){
return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){
var m__21368 = domina.single_node(node).__domina_data;
var value__21369 = (cljs.core.truth_(m__21368)?cljs.core.get.__2(m__21368,key):null);

if(cljs.core.truth_((function (){var and__3546__auto____21370 = bubble;

if(cljs.core.truth_(and__3546__auto____21370))
{return (value__21369 === null);
} else
{return and__3546__auto____21370;
}
})()))
{var temp__3698__auto____21371 = domina.single_node(node).parentNode;

if(cljs.core.truth_(temp__3698__auto____21371))
{var parent__21378 = temp__3698__auto____21371;

return get_data.call(null,parent__21378,key,true);
} else
{return null;
}
} else
{return value__21369;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case  2 :
return get_data__2.call(this,node,key);
case  3 :
return get_data__3.call(this,node,key,bubble);
}
throw('Invalid arity: ' + arguments.length);
};
get_data.__2 = get_data__2;
get_data.__3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){
var m__21387 = (function (){var or__3548__auto____21386 = domina.single_node(node).__domina_data;

if(cljs.core.truth_(or__3548__auto____21386))
{return or__3548__auto____21386;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})();

return domina.single_node(node).__domina_data = cljs.core.assoc.__3(m__21387,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__21389 = domina.nodes(parent_content);
var children__21390 = domina.nodes(child_content);
var first_child__21398 = (function (){var frag__21391 = document.createDocumentFragment();

var G__21392__21393 = cljs.core.seq(children__21390);

if(cljs.core.truth_(G__21392__21393))
{var child__21394 = cljs.core.first(G__21392__21393);
var G__21392__21395 = G__21392__21393;

while(true){
frag__21391.appendChild(child__21394);
var temp__3698__auto____21396 = cljs.core.next(G__21392__21395);

if(cljs.core.truth_(temp__3698__auto____21396))
{var G__21392__21397 = temp__3698__auto____21396;

{
var G__21402 = cljs.core.first(G__21392__21397);
var G__21403 = G__21392__21397;
child__21394 = G__21402;
G__21392__21395 = G__21403;
continue;
}
} else
{}
break;
}
} else
{}
return frag__21391;
})();
var other_children__21399 = cljs.core.doall.__1(cljs.core.repeatedly.__2((cljs.core.count(parents__21389) - 1),(function (){
return first_child__21398.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq(parents__21389)))
{f.call(null,cljs.core.first(parents__21389),first_child__21398);
return cljs.core.doall.__1(cljs.core.map.__3((function (p1__21384_SHARP_,p2__21385_SHARP_){
return f.call(null,p1__21384_SHARP_,p2__21385_SHARP_);
}),cljs.core.rest(parents__21389),other_children__21399));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){
if(((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons(nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_item__1.call(this,nl);
case  2 :
return lazy_nl_via_item__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_item.__1 = lazy_nl_via_item__1;
lazy_nl_via_item.__2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){
if(((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_array_ref__1.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
lazy_nl_via_array_ref.__1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.__2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.__1(nl);
} else
{return domina.lazy_nl_via_array_ref.__1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){
var and__3546__auto____21408 = obj;

if(cljs.core.truth_(and__3546__auto____21408))
{var and__3546__auto____21409 = obj.length;

if(cljs.core.truth_(and__3546__auto____21409))
{var or__3548__auto____21410 = obj.indexOf;

if(cljs.core.truth_(or__3548__auto____21410))
{return or__3548__auto____21410;
} else
{return obj.item;
}
} else
{return and__3546__auto____21409;
}
} else
{return and__3546__auto____21408;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(((list_thing === null)))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.truth_((function (){var x__7979__auto____21414 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____21415 = x__7979__auto____21414;

if(cljs.core.truth_(and__3546__auto____21415))
{var and__3546__auto____21416 = x__7979__auto____21414.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____21416))
{var and__3546__auto____21417 = x__7979__auto____21414.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____21417))
{return cljs.core.not(x__7979__auto____21414.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____21417;
}
} else
{return and__3546__auto____21416;
}
} else
{return and__3546__auto____21415;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,x__7979__auto____21414);
}
})()))
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(("\uFDD0'default"))
{return cljs.core.cons(list_thing);
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(((content === null)))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.truth_((function (){var x__7979__auto____21426 = content;

if(cljs.core.truth_((function (){var and__3546__auto____21427 = x__7979__auto____21426;

if(cljs.core.truth_(and__3546__auto____21427))
{var and__3546__auto____21428 = x__7979__auto____21426.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____21428))
{var and__3546__auto____21429 = x__7979__auto____21426.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____21429))
{return cljs.core.not(x__7979__auto____21426.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____21429;
}
} else
{return and__3546__auto____21428;
}
} else
{return and__3546__auto____21427;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,x__7979__auto____21426);
}
})()))
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(("\uFDD0'default"))
{return cljs.core.cons(content);
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){
if(((content === null)))
{return null;
} else
{if(cljs.core.truth_((function (){var x__7979__auto____21430 = content;

if(cljs.core.truth_((function (){var and__3546__auto____21431 = x__7979__auto____21430;

if(cljs.core.truth_(and__3546__auto____21431))
{var and__3546__auto____21432 = x__7979__auto____21430.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____21432))
{var and__3546__auto____21433 = x__7979__auto____21430.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____21433))
{return cljs.core.not(x__7979__auto____21430.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____21433;
}
} else
{return and__3546__auto____21432;
}
} else
{return and__3546__auto____21431;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_(cljs.core.ISeqable,x__7979__auto____21430);
}
})()))
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(("\uFDD0'default"))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.doall.__1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq__1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth__2 = (function (nodelist,n){
return nodelist.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth__3 = (function (nodelist,n,not_found){
if(((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.__2(nodelist,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count__1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq__1 = (function (nodelist){
return domina.lazy_nodelist(nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth__2 = (function (nodelist,n){
return nodelist.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth__3 = (function (nodelist,n,not_found){
if(((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.__2(nodelist,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count__1 = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq__1 = (function (coll){
return domina.lazy_nodelist(coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth__2 = (function (coll,n){
return coll.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth__3 = (function (coll,n,not_found){
if(((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.__2(coll,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count__1 = (function (coll){
return coll.length;
});
} else
{}
