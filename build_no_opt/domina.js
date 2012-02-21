goog.provide('domina');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('cljs.core');
domina.debug = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15905 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15905))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15905;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper__15914 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15915 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15916 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15915,"caption":table_section_wrapper__15915,"optgroup":opt_wrapper__15914,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15916,"thead":table_section_wrapper__15915,"th":cell_wrapper__15916,"option":opt_wrapper__15914,"tbody":table_section_wrapper__15915,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15915});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15923 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15936 = (cljs.core.truth_((function (){var and__3546__auto____15925 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15925))
{return no_tbody_QMARK___15923;
} else
{return and__3546__auto____15925;
}
})())?(function (){var and__3546__auto____15930 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15930))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15930;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15933 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15933))
{return no_tbody_QMARK___15923;
} else
{return and__3546__auto____15933;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15937__15940 = cljs.core.seq.call(null,tbody__15936);

if(cljs.core.truth_(G__15937__15940))
{var child__15943 = cljs.core.first.call(null,G__15937__15940);
var G__15937__15944 = G__15937__15940;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15945 = cljs.core._EQ_.call(null,child__15943.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15945))
{return cljs.core._EQ_.call(null,child__15943.childNodes.length,0);
} else
{return and__3546__auto____15945;
}
})()))
{child__15943.parentNode.removeChild(child__15943);
} else
{}
var temp__3698__auto____15946 = cljs.core.next.call(null,G__15937__15944);

if(cljs.core.truth_(temp__3698__auto____15946))
{var G__15937__15947 = temp__3698__auto____15946;

{
var G__15950 = cljs.core.first.call(null,G__15937__15947);
var G__15951 = G__15937__15947;
child__15943 = G__15950;
G__15937__15944 = G__15951;
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
var html__15958 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15963 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15958))).toLowerCase();
var vec__15957__15964 = cljs.core.get.call(null,domina.wrap_map,tag_name__15963,"﷐'default".call(null,domina.wrap_map));
var depth__15966 = cljs.core.nth.call(null,vec__15957__15964,0,null);
var start_wrap__15967 = cljs.core.nth.call(null,vec__15957__15964,1,null);
var end_wrap__15969 = cljs.core.nth.call(null,vec__15957__15964,2,null);
var div__15974 = (function (){var wrapper__15972 = (function (){var div__15971 = document.createElement("div");

div__15971.innerHTML = cljs.core.str.call(null,start_wrap__15967,html__15958,end_wrap__15969);
return div__15971;
})();
var level__15973 = depth__15966;

while(true){
if(cljs.core.truth_((level__15973 > 0)))
{{
var G__15980 = wrapper__15972.lastChild;
var G__15981 = (level__15973 - 1);
wrapper__15972 = G__15980;
level__15973 = G__15981;
continue;
}
} else
{return wrapper__15972;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__15974,html__15958);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____15975 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____15975))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15958);
} else
{return and__3546__auto____15975;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__15974,html__15958);
} else
{}
return div__15974.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____15988 = content;

if(cljs.core.truth_(and__3546__auto____15988))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15988;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15989 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15989))
{return or__3548__auto____15989;
} else
{var or__3548__auto____15990 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15990))
{return or__3548__auto____15990;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15993 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15993))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15993;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15996 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15996))
{return or__3548__auto____15996;
} else
{var or__3548__auto____15999 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15999))
{return or__3548__auto____15999;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16019 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16019))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16019;
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
if(cljs.core.truth_((void 0 === domina.t16028)))
{
/**
* @constructor
*/
domina.t16028 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16028.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16028");
});
domina.t16028.prototype.domina$DomContent$ = true;
domina.t16028.prototype.domina$DomContent$nodes = (function (_){
var this__16038 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16038.class_name)));
});
domina.t16028.prototype.domina$DomContent$single_node = (function (_){
var this__16039 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16039.class_name)));
});
domina.t16028.prototype.cljs$core$IMeta$ = true;
domina.t16028.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16043 = this;
return this__16043.__meta;
});
domina.t16028.prototype.cljs$core$IWithMeta$ = true;
domina.t16028.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16044 = this;
return (new domina.t16028(this__16044.class_name,this__16044.by_class,__meta));
});
domina.t16028;
} else
{}
return (new domina.t16028(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16061_SHARP_){
return p1__16061_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16083_SHARP_,p2__16084_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16083_SHARP_,p2__16084_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16113_SHARP_,p2__16111_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16111_SHARP_,p1__16113_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16125_SHARP_,p2__16123_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16123_SHARP_,p1__16125_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16131_SHARP_,p2__16130_SHARP_){
return goog.dom.replaceNode.call(null,p2__16130_SHARP_,p1__16131_SHARP_);
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
var s__16168 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16168)))
{return null;
} else
{return s__16168;
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
var G__16177__16178 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16177__16178))
{var n__16179 = cljs.core.first.call(null,G__16177__16178);
var G__16177__16180 = G__16177__16178;

while(true){
goog.style.setStyle.call(null,n__16179,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16183 = cljs.core.next.call(null,G__16177__16180);

if(cljs.core.truth_(temp__3698__auto____16183))
{var G__16177__16184 = temp__3698__auto____16183;

{
var G__16191 = cljs.core.first.call(null,G__16177__16184);
var G__16192 = G__16177__16184;
n__16179 = G__16191;
G__16177__16180 = G__16192;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16195){
var content = cljs.core.first(arglist__16195);
var name = cljs.core.first(cljs.core.next(arglist__16195));
var value = cljs.core.rest(cljs.core.next(arglist__16195));
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
var G__16196__16197 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16196__16197))
{var n__16198 = cljs.core.first.call(null,G__16196__16197);
var G__16196__16199 = G__16196__16197;

while(true){
n__16198.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16204 = cljs.core.next.call(null,G__16196__16199);

if(cljs.core.truth_(temp__3698__auto____16204))
{var G__16196__16205 = temp__3698__auto____16204;

{
var G__16211 = cljs.core.first.call(null,G__16196__16205);
var G__16212 = G__16196__16205;
n__16198 = G__16211;
G__16196__16199 = G__16212;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16218){
var content = cljs.core.first(arglist__16218);
var name = cljs.core.first(cljs.core.next(arglist__16218));
var value = cljs.core.rest(cljs.core.next(arglist__16218));
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
var vec__16222__16225 = pair.split(/\s*:\s*/);
var k__16227 = cljs.core.nth.call(null,vec__16222__16225,0,null);
var v__16228 = cljs.core.nth.call(null,vec__16222__16225,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16230 = k__16227;

if(cljs.core.truth_(and__3546__auto____16230))
{return v__16228;
} else
{return and__3546__auto____16230;
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
var style__16236 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16236)))
{return domina.parse_style_attributes.call(null,style__16236);
} else
{if(cljs.core.truth_(style__16236.cssText))
{return domina.parse_style_attributes.call(null,style__16236.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16249 = domina.single_node.call(null,content);
var attrs__16250 = node__16249.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16232_SHARP_){
var attr__16251 = attrs__16250.item(p1__16232_SHARP_);
var value__16252 = attr__16251.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16254 = cljs.core.not_EQ_.call(null,null,value__16252);

if(cljs.core.truth_(and__3546__auto____16254))
{return cljs.core.not_EQ_.call(null,"",value__16252);
} else
{return and__3546__auto____16254;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16251.nodeName.toLowerCase())],[attr__16251.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16250.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16270__16271 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16270__16271))
{var G__16274__16278 = cljs.core.first.call(null,G__16270__16271);
var vec__16276__16279 = G__16274__16278;
var name__16281 = cljs.core.nth.call(null,vec__16276__16279,0,null);
var value__16283 = cljs.core.nth.call(null,vec__16276__16279,1,null);
var G__16270__16284 = G__16270__16271;

var G__16274__16285 = G__16274__16278;
var G__16270__16286 = G__16270__16284;

while(true){
var vec__16288__16293 = G__16274__16285;
var name__16296 = cljs.core.nth.call(null,vec__16288__16293,0,null);
var value__16298 = cljs.core.nth.call(null,vec__16288__16293,1,null);
var G__16270__16299 = G__16270__16286;

domina.set_style_BANG_.call(null,content,name__16296,value__16298);
var temp__3698__auto____16306 = cljs.core.next.call(null,G__16270__16299);

if(cljs.core.truth_(temp__3698__auto____16306))
{var G__16270__16308 = temp__3698__auto____16306;

{
var G__16313 = cljs.core.first.call(null,G__16270__16308);
var G__16314 = G__16270__16308;
G__16274__16285 = G__16313;
G__16270__16286 = G__16314;
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
var G__16317__16318 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16317__16318))
{var G__16321__16325 = cljs.core.first.call(null,G__16317__16318);
var vec__16322__16326 = G__16321__16325;
var name__16328 = cljs.core.nth.call(null,vec__16322__16326,0,null);
var value__16330 = cljs.core.nth.call(null,vec__16322__16326,1,null);
var G__16317__16331 = G__16317__16318;

var G__16321__16333 = G__16321__16325;
var G__16317__16335 = G__16317__16331;

while(true){
var vec__16337__16340 = G__16321__16333;
var name__16349 = cljs.core.nth.call(null,vec__16337__16340,0,null);
var value__16350 = cljs.core.nth.call(null,vec__16337__16340,1,null);
var G__16317__16351 = G__16317__16335;

domina.set_attr_BANG_.call(null,content,name__16349,value__16350);
var temp__3698__auto____16353 = cljs.core.next.call(null,G__16317__16351);

if(cljs.core.truth_(temp__3698__auto____16353))
{var G__16317__16354 = temp__3698__auto____16353;

{
var G__16358 = cljs.core.first.call(null,G__16317__16354);
var G__16359 = G__16317__16354;
G__16321__16333 = G__16358;
G__16317__16335 = G__16359;
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
var G__16360__16362 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16360__16362))
{var node__16364 = cljs.core.first.call(null,G__16360__16362);
var G__16360__16365 = G__16360__16362;

while(true){
goog.dom.classes.add.call(null,node__16364,class$);
var temp__3698__auto____16368 = cljs.core.next.call(null,G__16360__16365);

if(cljs.core.truth_(temp__3698__auto____16368))
{var G__16360__16370 = temp__3698__auto____16368;

{
var G__16375 = cljs.core.first.call(null,G__16360__16370);
var G__16376 = G__16360__16370;
node__16364 = G__16375;
G__16360__16365 = G__16376;
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
var G__16382__16383 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16382__16383))
{var node__16386 = cljs.core.first.call(null,G__16382__16383);
var G__16382__16387 = G__16382__16383;

while(true){
goog.dom.classes.remove.call(null,node__16386,class$);
var temp__3698__auto____16388 = cljs.core.next.call(null,G__16382__16387);

if(cljs.core.truth_(temp__3698__auto____16388))
{var G__16382__16389 = temp__3698__auto____16388;

{
var G__16390 = cljs.core.first.call(null,G__16382__16389);
var G__16392 = G__16382__16389;
node__16386 = G__16390;
G__16382__16387 = G__16392;
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
var text__16414 = (function (content){
return text.call(null,content,true);
});
var text__16415 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return clojure.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16414.call(this,content);
case  2 :
return text__16415.call(this,content,normalize);
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
var G__16425__16427 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16425__16427))
{var node__16429 = cljs.core.first.call(null,G__16425__16427);
var G__16425__16430 = G__16425__16427;

while(true){
goog.dom.setTextContent.call(null,node__16429,value);
var temp__3698__auto____16431 = cljs.core.next.call(null,G__16425__16430);

if(cljs.core.truth_(temp__3698__auto____16431))
{var G__16425__16432 = temp__3698__auto____16431;

{
var G__16449 = cljs.core.first.call(null,G__16425__16432);
var G__16450 = G__16425__16432;
node__16429 = G__16449;
G__16425__16430 = G__16450;
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
var G__16454__16455 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16454__16455))
{var node__16456 = cljs.core.first.call(null,G__16454__16455);
var G__16454__16457 = G__16454__16455;

while(true){
goog.dom.forms.setValue.call(null,node__16456,value);
var temp__3698__auto____16459 = cljs.core.next.call(null,G__16454__16457);

if(cljs.core.truth_(temp__3698__auto____16459))
{var G__16454__16461 = temp__3698__auto____16459;

{
var G__16464 = cljs.core.first.call(null,G__16454__16461);
var G__16465 = G__16454__16461;
node__16456 = G__16464;
G__16454__16457 = G__16465;
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
var allows_inner_html_QMARK___16488 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16489 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16491 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16492 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16491);
var fallback__16495 = (function (p1__16471_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16471_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16496 = allows_inner_html_QMARK___16488;

if(cljs.core.truth_(and__3546__auto____16496))
{var and__3546__auto____16498 = (function (){var or__3548__auto____16497 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16497))
{return or__3548__auto____16497;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16489);
}
})();

if(cljs.core.truth_(and__3546__auto____16498))
{return cljs.core.not.call(null,special_tag_QMARK___16492);
} else
{return and__3546__auto____16498;
}
} else
{return and__3546__auto____16496;
}
})()))
{var value__16500 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16506__16507 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16506__16507))
{var node__16508 = cljs.core.first.call(null,G__16506__16507);
var G__16506__16509 = G__16506__16507;

while(true){
goog.events.removeAll.call(null,node__16508);
node__16508.innerHTML = value__16500;
var temp__3698__auto____16510 = cljs.core.next.call(null,G__16506__16509);

if(cljs.core.truth_(temp__3698__auto____16510))
{var G__16506__16511 = temp__3698__auto____16510;

{
var G__16516 = cljs.core.first.call(null,G__16506__16511);
var G__16517 = G__16506__16511;
node__16508 = G__16516;
G__16506__16509 = G__16517;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16501){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16501)))
{var e__16505 = e16501;

fallback__16495.call(null,value__16500);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16501;
} else
{}
}
}} else
{fallback__16495.call(null,html_string);
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
var parents__16525 = domina.nodes.call(null,parent_content);
var children__16527 = domina.nodes.call(null,child_content);
var first_child__16540 = (function (){var frag__16529 = document.createDocumentFragment();

var G__16530__16532 = cljs.core.seq.call(null,children__16527);

if(cljs.core.truth_(G__16530__16532))
{var child__16534 = cljs.core.first.call(null,G__16530__16532);
var G__16530__16536 = G__16530__16532;

while(true){
frag__16529.appendChild(child__16534);
var temp__3698__auto____16538 = cljs.core.next.call(null,G__16530__16536);

if(cljs.core.truth_(temp__3698__auto____16538))
{var G__16530__16539 = temp__3698__auto____16538;

{
var G__16545 = cljs.core.first.call(null,G__16530__16539);
var G__16546 = G__16530__16539;
child__16534 = G__16545;
G__16530__16536 = G__16546;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16529;
})();
var other_children__16541 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16525) - 1),(function (){
return first_child__16540.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16525)))
{f.call(null,cljs.core.first.call(null,parents__16525),first_child__16540);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16482_SHARP_,p2__16483_SHARP_){
return f.call(null,p1__16482_SHARP_,p2__16483_SHARP_);
}),cljs.core.rest.call(null,parents__16525),other_children__16541));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16567 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16568 = (function (nl,n){
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
return lazy_nl_via_item__16567.call(this,nl);
case  2 :
return lazy_nl_via_item__16568.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16576 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16577 = (function (nl,n){
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
return lazy_nl_via_array_ref__16576.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16577.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6767__auto____16610 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16611 = x__6767__auto____16610;

if(cljs.core.truth_(and__3546__auto____16611))
{var and__3546__auto____16612 = x__6767__auto____16610.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16612))
{var and__3546__auto____16613 = x__6767__auto____16610.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16613))
{return cljs.core.not.call(null,x__6767__auto____16610.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16613;
}
} else
{return and__3546__auto____16612;
}
} else
{return and__3546__auto____16611;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16610);
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
if(cljs.core.truth_((function (){var x__6767__auto____16619 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16620 = x__6767__auto____16619;

if(cljs.core.truth_(and__3546__auto____16620))
{var and__3546__auto____16621 = x__6767__auto____16619.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16621))
{var and__3546__auto____16622 = x__6767__auto____16619.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16622))
{return cljs.core.not.call(null,x__6767__auto____16619.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16622;
}
} else
{return and__3546__auto____16621;
}
} else
{return and__3546__auto____16620;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16619);
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
if(cljs.core.truth_((function (){var x__6767__auto____16626 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16627 = x__6767__auto____16626;

if(cljs.core.truth_(and__3546__auto____16627))
{var and__3546__auto____16628 = x__6767__auto____16626.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16628))
{var and__3546__auto____16631 = x__6767__auto____16626.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16631))
{return cljs.core.not.call(null,x__6767__auto____16626.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16631;
}
} else
{return and__3546__auto____16628;
}
} else
{return and__3546__auto____16627;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16626);
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
var G__16679 = null;
var G__16679__16680 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16679__16681 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16679 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16679__16680.call(this,nodelist,n);
case  3 :
return G__16679__16681.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16679;
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
var G__16693 = null;
var G__16693__16695 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16693__16696 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16693 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16693__16695.call(this,nodelist,n);
case  3 :
return G__16693__16696.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16693;
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
var G__16712 = null;
var G__16712__16713 = (function (coll,n){
return coll.item(n);
});
var G__16712__16714 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16712 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16712__16713.call(this,coll,n);
case  3 :
return G__16712__16714.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16712;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
