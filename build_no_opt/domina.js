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
var opt_wrapper__15750 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15751 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15752 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15751,"caption":table_section_wrapper__15751,"optgroup":opt_wrapper__15750,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15752,"thead":table_section_wrapper__15751,"th":cell_wrapper__15752,"option":opt_wrapper__15750,"tbody":table_section_wrapper__15751,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15751});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15757 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15761 = (cljs.core.truth_((function (){var and__3546__auto____15758 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15758))
{return no_tbody_QMARK___15757;
} else
{return and__3546__auto____15758;
}
})())?(function (){var and__3546__auto____15759 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15759))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15759;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15760 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15760))
{return no_tbody_QMARK___15757;
} else
{return and__3546__auto____15760;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15762__15763 = cljs.core.seq.call(null,tbody__15761);

if(cljs.core.truth_(G__15762__15763))
{var child__15764 = cljs.core.first.call(null,G__15762__15763);
var G__15762__15765 = G__15762__15763;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15766 = cljs.core._EQ_.call(null,child__15764.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15766))
{return cljs.core._EQ_.call(null,child__15764.childNodes.length,0);
} else
{return and__3546__auto____15766;
}
})()))
{child__15764.parentNode.removeChild(child__15764);
} else
{}
var temp__3698__auto____15767 = cljs.core.next.call(null,G__15762__15765);

if(cljs.core.truth_(temp__3698__auto____15767))
{var G__15762__15768 = temp__3698__auto____15767;

{
var G__15769 = cljs.core.first.call(null,G__15762__15768);
var G__15770 = G__15762__15768;
child__15764 = G__15769;
G__15762__15765 = G__15770;
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
var html__15772 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15773 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15772))).toLowerCase();
var vec__15771__15774 = cljs.core.get.call(null,domina.wrap_map,tag_name__15773,"﷐'default".call(null,domina.wrap_map));
var depth__15775 = cljs.core.nth.call(null,vec__15771__15774,0,null);
var start_wrap__15776 = cljs.core.nth.call(null,vec__15771__15774,1,null);
var end_wrap__15777 = cljs.core.nth.call(null,vec__15771__15774,2,null);
var div__15781 = (function (){var wrapper__15779 = (function (){var div__15778 = document.createElement("div");

div__15778.innerHTML = cljs.core.str.call(null,start_wrap__15776,html__15772,end_wrap__15777);
return div__15778;
})();
var level__15780 = depth__15775;

while(true){
if(cljs.core.truth_((level__15780 > 0)))
{{
var G__15799 = wrapper__15779.lastChild;
var G__15800 = (level__15780 - 1);
wrapper__15779 = G__15799;
level__15780 = G__15800;
continue;
}
} else
{return wrapper__15779;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__15781,html__15772);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____15782 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____15782))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15772);
} else
{return and__3546__auto____15782;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__15781,html__15772);
} else
{}
return div__15781.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____15820 = content;

if(cljs.core.truth_(and__3546__auto____15820))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15820;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15824 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15824))
{return or__3548__auto____15824;
} else
{var or__3548__auto____15825 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15825))
{return or__3548__auto____15825;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15827 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15827))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15827;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15828 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15828))
{return or__3548__auto____15828;
} else
{var or__3548__auto____15829 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15829))
{return or__3548__auto____15829;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15833 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15833))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15833;
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
if(cljs.core.truth_((void 0 === domina.t15837)))
{
/**
* @constructor
*/
domina.t15837 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15837.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15837");
});
domina.t15837.prototype.domina$DomContent$ = true;
domina.t15837.prototype.domina$DomContent$nodes = (function (_){
var this__15850 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15850.class_name)));
});
domina.t15837.prototype.domina$DomContent$single_node = (function (_){
var this__15852 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15852.class_name)));
});
domina.t15837.prototype.cljs$core$IMeta$ = true;
domina.t15837.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15856 = this;
return this__15856.__meta;
});
domina.t15837.prototype.cljs$core$IWithMeta$ = true;
domina.t15837.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15862 = this;
return (new domina.t15837(this__15862.class_name,this__15862.by_class,__meta));
});
domina.t15837;
} else
{}
return (new domina.t15837(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15871_SHARP_){
return p1__15871_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15928_SHARP_,p2__15929_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15928_SHARP_,p2__15929_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15936_SHARP_,p2__15934_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15934_SHARP_,p1__15936_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15940_SHARP_,p2__15939_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15939_SHARP_,p1__15940_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15943_SHARP_,p2__15942_SHARP_){
return goog.dom.replaceNode.call(null,p2__15942_SHARP_,p1__15943_SHARP_);
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
var s__15954 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__15954)))
{return null;
} else
{return s__15954;
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
var G__15963__15964 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15963__15964))
{var n__15966 = cljs.core.first.call(null,G__15963__15964);
var G__15963__15968 = G__15963__15964;

while(true){
goog.style.setStyle.call(null,n__15966,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15970 = cljs.core.next.call(null,G__15963__15968);

if(cljs.core.truth_(temp__3698__auto____15970))
{var G__15963__15971 = temp__3698__auto____15970;

{
var G__15975 = cljs.core.first.call(null,G__15963__15971);
var G__15976 = G__15963__15971;
n__15966 = G__15975;
G__15963__15968 = G__15976;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15977){
var content = cljs.core.first(arglist__15977);
var name = cljs.core.first(cljs.core.next(arglist__15977));
var value = cljs.core.rest(cljs.core.next(arglist__15977));
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
var G__15982__15983 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15982__15983))
{var n__15984 = cljs.core.first.call(null,G__15982__15983);
var G__15982__15985 = G__15982__15983;

while(true){
n__15984.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15988 = cljs.core.next.call(null,G__15982__15985);

if(cljs.core.truth_(temp__3698__auto____15988))
{var G__15982__15989 = temp__3698__auto____15988;

{
var G__16027 = cljs.core.first.call(null,G__15982__15989);
var G__16028 = G__15982__15989;
n__15984 = G__16027;
G__15982__15985 = G__16028;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16037){
var content = cljs.core.first(arglist__16037);
var name = cljs.core.first(cljs.core.next(arglist__16037));
var value = cljs.core.rest(cljs.core.next(arglist__16037));
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
var vec__16040__16041 = pair.split(/\s*:\s*/);
var k__16042 = cljs.core.nth.call(null,vec__16040__16041,0,null);
var v__16043 = cljs.core.nth.call(null,vec__16040__16041,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16044 = k__16042;

if(cljs.core.truth_(and__3546__auto____16044))
{return v__16043;
} else
{return and__3546__auto____16044;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16042.toLowerCase()),v__16043);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16050 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16050)))
{return domina.parse_style_attributes.call(null,style__16050);
} else
{if(cljs.core.truth_(style__16050.cssText))
{return domina.parse_style_attributes.call(null,style__16050.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16051 = domina.single_node.call(null,content);
var attrs__16052 = node__16051.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16048_SHARP_){
var attr__16053 = attrs__16052.item(p1__16048_SHARP_);
var value__16054 = attr__16053.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16055 = cljs.core.not_EQ_.call(null,null,value__16054);

if(cljs.core.truth_(and__3546__auto____16055))
{return cljs.core.not_EQ_.call(null,"",value__16054);
} else
{return and__3546__auto____16055;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16053.nodeName.toLowerCase())],[attr__16053.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16052.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16056__16057 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16056__16057))
{var G__16059__16061 = cljs.core.first.call(null,G__16056__16057);
var vec__16060__16062 = G__16059__16061;
var name__16063 = cljs.core.nth.call(null,vec__16060__16062,0,null);
var value__16064 = cljs.core.nth.call(null,vec__16060__16062,1,null);
var G__16056__16065 = G__16056__16057;

var G__16059__16066 = G__16059__16061;
var G__16056__16067 = G__16056__16065;

while(true){
var vec__16068__16069 = G__16059__16066;
var name__16070 = cljs.core.nth.call(null,vec__16068__16069,0,null);
var value__16071 = cljs.core.nth.call(null,vec__16068__16069,1,null);
var G__16056__16072 = G__16056__16067;

domina.set_style_BANG_.call(null,content,name__16070,value__16071);
var temp__3698__auto____16073 = cljs.core.next.call(null,G__16056__16072);

if(cljs.core.truth_(temp__3698__auto____16073))
{var G__16056__16074 = temp__3698__auto____16073;

{
var G__16086 = cljs.core.first.call(null,G__16056__16074);
var G__16087 = G__16056__16074;
G__16059__16066 = G__16086;
G__16056__16067 = G__16087;
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
var G__16089__16090 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16089__16090))
{var G__16093__16095 = cljs.core.first.call(null,G__16089__16090);
var vec__16094__16096 = G__16093__16095;
var name__16097 = cljs.core.nth.call(null,vec__16094__16096,0,null);
var value__16098 = cljs.core.nth.call(null,vec__16094__16096,1,null);
var G__16089__16099 = G__16089__16090;

var G__16093__16100 = G__16093__16095;
var G__16089__16101 = G__16089__16099;

while(true){
var vec__16102__16103 = G__16093__16100;
var name__16104 = cljs.core.nth.call(null,vec__16102__16103,0,null);
var value__16105 = cljs.core.nth.call(null,vec__16102__16103,1,null);
var G__16089__16106 = G__16089__16101;

domina.set_attr_BANG_.call(null,content,name__16104,value__16105);
var temp__3698__auto____16109 = cljs.core.next.call(null,G__16089__16106);

if(cljs.core.truth_(temp__3698__auto____16109))
{var G__16089__16110 = temp__3698__auto____16109;

{
var G__16114 = cljs.core.first.call(null,G__16089__16110);
var G__16115 = G__16089__16110;
G__16093__16100 = G__16114;
G__16089__16101 = G__16115;
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
var G__16202__16203 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16202__16203))
{var node__16204 = cljs.core.first.call(null,G__16202__16203);
var G__16202__16205 = G__16202__16203;

while(true){
goog.dom.classes.add.call(null,node__16204,class$);
var temp__3698__auto____16206 = cljs.core.next.call(null,G__16202__16205);

if(cljs.core.truth_(temp__3698__auto____16206))
{var G__16202__16207 = temp__3698__auto____16206;

{
var G__16212 = cljs.core.first.call(null,G__16202__16207);
var G__16213 = G__16202__16207;
node__16204 = G__16212;
G__16202__16205 = G__16213;
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
var G__16216__16217 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16216__16217))
{var node__16218 = cljs.core.first.call(null,G__16216__16217);
var G__16216__16219 = G__16216__16217;

while(true){
goog.dom.classes.remove.call(null,node__16218,class$);
var temp__3698__auto____16222 = cljs.core.next.call(null,G__16216__16219);

if(cljs.core.truth_(temp__3698__auto____16222))
{var G__16216__16223 = temp__3698__auto____16222;

{
var G__16228 = cljs.core.first.call(null,G__16216__16223);
var G__16229 = G__16216__16223;
node__16218 = G__16228;
G__16216__16219 = G__16229;
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
var text__16235 = (function (content){
return text.call(null,content,true);
});
var text__16236 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16235.call(this,content);
case  2 :
return text__16236.call(this,content,normalize);
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
var G__16238__16239 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16238__16239))
{var node__16240 = cljs.core.first.call(null,G__16238__16239);
var G__16238__16241 = G__16238__16239;

while(true){
goog.dom.setTextContent.call(null,node__16240,value);
var temp__3698__auto____16242 = cljs.core.next.call(null,G__16238__16241);

if(cljs.core.truth_(temp__3698__auto____16242))
{var G__16238__16243 = temp__3698__auto____16242;

{
var G__16244 = cljs.core.first.call(null,G__16238__16243);
var G__16245 = G__16238__16243;
node__16240 = G__16244;
G__16238__16241 = G__16245;
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
var G__16247__16249 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16247__16249))
{var node__16250 = cljs.core.first.call(null,G__16247__16249);
var G__16247__16251 = G__16247__16249;

while(true){
goog.dom.forms.setValue.call(null,node__16250,value);
var temp__3698__auto____16252 = cljs.core.next.call(null,G__16247__16251);

if(cljs.core.truth_(temp__3698__auto____16252))
{var G__16247__16253 = temp__3698__auto____16252;

{
var G__16254 = cljs.core.first.call(null,G__16247__16253);
var G__16255 = G__16247__16253;
node__16250 = G__16254;
G__16247__16251 = G__16255;
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
var allows_inner_html_QMARK___16273 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16305 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16306 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16307 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16306);
var fallback__16310 = (function (p1__16261_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16261_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16311 = allows_inner_html_QMARK___16273;

if(cljs.core.truth_(and__3546__auto____16311))
{var and__3546__auto____16338 = (function (){var or__3548__auto____16337 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16337))
{return or__3548__auto____16337;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16305);
}
})();

if(cljs.core.truth_(and__3546__auto____16338))
{return cljs.core.not.call(null,special_tag_QMARK___16307);
} else
{return and__3546__auto____16338;
}
} else
{return and__3546__auto____16311;
}
})()))
{var value__16355 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16358__16359 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16358__16359))
{var node__16361 = cljs.core.first.call(null,G__16358__16359);
var G__16358__16363 = G__16358__16359;

while(true){
goog.events.removeAll.call(null,node__16361);
node__16361.innerHTML = value__16355;
var temp__3698__auto____16367 = cljs.core.next.call(null,G__16358__16363);

if(cljs.core.truth_(temp__3698__auto____16367))
{var G__16358__16379 = temp__3698__auto____16367;

{
var G__16440 = cljs.core.first.call(null,G__16358__16379);
var G__16441 = G__16358__16379;
node__16361 = G__16440;
G__16358__16363 = G__16441;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16356){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16356)))
{var e__16357 = e16356;

fallback__16310.call(null,value__16355);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16356;
} else
{}
}
}} else
{fallback__16310.call(null,html_string);
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
var parents__16452 = domina.nodes.call(null,parent_content);
var children__16453 = domina.nodes.call(null,child_content);
var first_child__16467 = (function (){var frag__16454 = document.createDocumentFragment();

var G__16455__16456 = cljs.core.seq.call(null,children__16453);

if(cljs.core.truth_(G__16455__16456))
{var child__16459 = cljs.core.first.call(null,G__16455__16456);
var G__16455__16460 = G__16455__16456;

while(true){
frag__16454.appendChild(child__16459);
var temp__3698__auto____16462 = cljs.core.next.call(null,G__16455__16460);

if(cljs.core.truth_(temp__3698__auto____16462))
{var G__16455__16463 = temp__3698__auto____16462;

{
var G__16482 = cljs.core.first.call(null,G__16455__16463);
var G__16501 = G__16455__16463;
child__16459 = G__16482;
G__16455__16460 = G__16501;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16454;
})();
var other_children__16470 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16452) - 1),(function (){
return first_child__16467.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16452)))
{f.call(null,cljs.core.first.call(null,parents__16452),first_child__16467);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16270_SHARP_,p2__16271_SHARP_){
return f.call(null,p1__16270_SHARP_,p2__16271_SHARP_);
}),cljs.core.rest.call(null,parents__16452),other_children__16470));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16563 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16564 = (function (nl,n){
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
return lazy_nl_via_item__16563.call(this,nl);
case  2 :
return lazy_nl_via_item__16564.call(this,nl,n);
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
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,list_thing)))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.truth_((function (){var x__6773__auto____16603 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16605 = x__6773__auto____16603;

if(cljs.core.truth_(and__3546__auto____16605))
{var and__3546__auto____16608 = x__6773__auto____16603.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16608))
{var and__3546__auto____16610 = x__6773__auto____16603.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16610))
{return cljs.core.not.call(null,x__6773__auto____16603.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16610;
}
} else
{return and__3546__auto____16608;
}
} else
{return and__3546__auto____16605;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6773__auto____16603);
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
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,content)))
{return cljs.core.List.EMPTY;
} else
{if(cljs.core.truth_((function (){var x__6773__auto____16623 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16625 = x__6773__auto____16623;

if(cljs.core.truth_(and__3546__auto____16625))
{var and__3546__auto____16626 = x__6773__auto____16623.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16626))
{var and__3546__auto____16627 = x__6773__auto____16623.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16627))
{return cljs.core.not.call(null,x__6773__auto____16623.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16627;
}
} else
{return and__3546__auto____16626;
}
} else
{return and__3546__auto____16625;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6773__auto____16623);
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
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,content)))
{return null;
} else
{if(cljs.core.truth_((function (){var x__6773__auto____16645 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16646 = x__6773__auto____16645;

if(cljs.core.truth_(and__3546__auto____16646))
{var and__3546__auto____16649 = x__6773__auto____16645.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16649))
{var and__3546__auto____16650 = x__6773__auto____16645.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16650))
{return cljs.core.not.call(null,x__6773__auto____16645.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16650;
}
} else
{return and__3546__auto____16649;
}
} else
{return and__3546__auto____16646;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6773__auto____16645);
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
var G__16683 = null;
var G__16683__16684 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16683__16685 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16683 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16683__16684.call(this,nodelist,n);
case  3 :
return G__16683__16685.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16683;
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
var G__16717 = null;
var G__16717__16718 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16717__16719 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16717 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16717__16718.call(this,nodelist,n);
case  3 :
return G__16717__16719.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16717;
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
var G__16721 = null;
var G__16721__16722 = (function (coll,n){
return coll.item(n);
});
var G__16721__16723 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16721 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16721__16722.call(this,coll,n);
case  3 :
return G__16721__16723.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16721;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
