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
var opt_wrapper__15811 = cljs.core.Vector.fromArray([1,"<select multiple='multiple'>","</select>"]);
var table_section_wrapper__15812 = cljs.core.Vector.fromArray([1,"<table>","</table>"]);
var cell_wrapper__15815 = cljs.core.Vector.fromArray([3,"<table><tbody><tr>","</tr></tbody></table>"]);

domina.wrap_map = cljs.core.ObjMap.fromObject(["col","﷐'default","tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],{"col":cljs.core.Vector.fromArray([2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]),"﷐'default":cljs.core.Vector.fromArray([0,"",""]),"tfoot":table_section_wrapper__15812,"caption":table_section_wrapper__15812,"optgroup":opt_wrapper__15811,"legend":cljs.core.Vector.fromArray([1,"<fieldset>","</fieldset>"]),"area":cljs.core.Vector.fromArray([1,"<map>","</map>"]),"td":cell_wrapper__15815,"thead":table_section_wrapper__15812,"th":cell_wrapper__15815,"option":opt_wrapper__15811,"tbody":table_section_wrapper__15812,"tr":cljs.core.Vector.fromArray([2,"<table><tbody>","</tbody></table>"]),"colgroup":table_section_wrapper__15812});
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html){
var no_tbody_QMARK___15842 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody__15853 = (cljs.core.truth_((function (){var and__3546__auto____15845 = cljs.core._EQ_.call(null,domina.tag_name,"table");

if(cljs.core.truth_(and__3546__auto____15845))
{return no_tbody_QMARK___15842;
} else
{return and__3546__auto____15845;
}
})())?(function (){var and__3546__auto____15847 = div.firstChild;

if(cljs.core.truth_(and__3546__auto____15847))
{return div.firstChild.childNodes;
} else
{return and__3546__auto____15847;
}
})():(cljs.core.truth_((function (){var and__3546__auto____15852 = cljs.core._EQ_.call(null,domina.start_wrap,"<table>");

if(cljs.core.truth_(and__3546__auto____15852))
{return no_tbody_QMARK___15842;
} else
{return and__3546__auto____15852;
}
})())?div.childNodes:cljs.core.Vector.fromArray([])));

var G__15854__15857 = cljs.core.seq.call(null,tbody__15853);

if(cljs.core.truth_(G__15854__15857))
{var child__15858 = cljs.core.first.call(null,G__15854__15857);
var G__15854__15869 = G__15854__15857;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____15870 = cljs.core._EQ_.call(null,child__15858.nodeName,"tbody");

if(cljs.core.truth_(and__3546__auto____15870))
{return cljs.core._EQ_.call(null,child__15858.childNodes.length,0);
} else
{return and__3546__auto____15870;
}
})()))
{child__15858.parentNode.removeChild(child__15858);
} else
{}
var temp__3698__auto____15873 = cljs.core.next.call(null,G__15854__15869);

if(cljs.core.truth_(temp__3698__auto____15873))
{var G__15854__15874 = temp__3698__auto____15873;

{
var G__15875 = cljs.core.first.call(null,G__15854__15874);
var G__15876 = G__15854__15874;
child__15858 = G__15875;
G__15854__15869 = G__15876;
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
var html__15880 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name__15881 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__15880))).toLowerCase();
var vec__15879__15882 = cljs.core.get.call(null,domina.wrap_map,tag_name__15881,"﷐'default".call(null,domina.wrap_map));
var depth__15883 = cljs.core.nth.call(null,vec__15879__15882,0,null);
var start_wrap__15885 = cljs.core.nth.call(null,vec__15879__15882,1,null);
var end_wrap__15886 = cljs.core.nth.call(null,vec__15879__15882,2,null);
var div__15890 = (function (){var wrapper__15888 = (function (){var div__15887 = document.createElement("div");

div__15887.innerHTML = cljs.core.str.call(null,start_wrap__15885,html__15880,end_wrap__15886);
return div__15887;
})();
var level__15889 = depth__15883;

while(true){
if(cljs.core.truth_((level__15889 > 0)))
{{
var G__15917 = wrapper__15888.lastChild;
var G__15918 = (level__15889 - 1);
wrapper__15888 = G__15917;
level__15889 = G__15918;
continue;
}
} else
{return wrapper__15888;
}
break;
}
})();

if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div__15890,html__15880);
} else
{}
if(cljs.core.truth_((function (){var and__3546__auto____15891 = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);

if(cljs.core.truth_(and__3546__auto____15891))
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__15880);
} else
{return and__3546__auto____15891;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div__15890,html__15880);
} else
{}
return div__15890.childNodes;
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
if(cljs.core.truth_((function (){var and__3546__auto____15921 = content;

if(cljs.core.truth_(and__3546__auto____15921))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15921;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15932 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15932))
{return or__3548__auto____15932;
} else
{var or__3548__auto____15933 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15933))
{return or__3548__auto____15933;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15934 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15934))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15934;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15935 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15935))
{return or__3548__auto____15935;
} else
{var or__3548__auto____15936 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15936))
{return or__3548__auto____15936;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15940 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15940))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15940;
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
if(cljs.core.truth_((void 0 === domina.t15955)))
{
/**
* @constructor
*/
domina.t15955 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15955.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15955");
});
domina.t15955.prototype.domina$DomContent$ = true;
domina.t15955.prototype.domina$DomContent$nodes = (function (_){
var this__15965 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15965.class_name)));
});
domina.t15955.prototype.domina$DomContent$single_node = (function (_){
var this__15970 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15970.class_name)));
});
domina.t15955.prototype.cljs$core$IMeta$ = true;
domina.t15955.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15976 = this;
return this__15976.__meta;
});
domina.t15955.prototype.cljs$core$IWithMeta$ = true;
domina.t15955.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15978 = this;
return (new domina.t15955(this__15978.class_name,this__15978.by_class,__meta));
});
domina.t15955;
} else
{}
return (new domina.t15955(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15991_SHARP_){
return p1__15991_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15993_SHARP_,p2__15994_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15993_SHARP_,p2__15994_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15998_SHARP_,p2__15997_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15997_SHARP_,p1__15998_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16011_SHARP_,p2__16010_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16010_SHARP_,p1__16011_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16013_SHARP_,p2__16012_SHARP_){
return goog.dom.replaceNode.call(null,p2__16012_SHARP_,p1__16013_SHARP_);
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
var s__16026 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s__16026)))
{return null;
} else
{return s__16026;
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
var G__16037__16038 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16037__16038))
{var n__16039 = cljs.core.first.call(null,G__16037__16038);
var G__16037__16040 = G__16037__16038;

while(true){
goog.style.setStyle.call(null,n__16039,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16041 = cljs.core.next.call(null,G__16037__16040);

if(cljs.core.truth_(temp__3698__auto____16041))
{var G__16037__16042 = temp__3698__auto____16041;

{
var G__16043 = cljs.core.first.call(null,G__16037__16042);
var G__16044 = G__16037__16042;
n__16039 = G__16043;
G__16037__16040 = G__16044;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16045){
var content = cljs.core.first(arglist__16045);
var name = cljs.core.first(cljs.core.next(arglist__16045));
var value = cljs.core.rest(cljs.core.next(arglist__16045));
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
var G__16046__16047 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16046__16047))
{var n__16048 = cljs.core.first.call(null,G__16046__16047);
var G__16046__16049 = G__16046__16047;

while(true){
n__16048.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16050 = cljs.core.next.call(null,G__16046__16049);

if(cljs.core.truth_(temp__3698__auto____16050))
{var G__16046__16051 = temp__3698__auto____16050;

{
var G__16059 = cljs.core.first.call(null,G__16046__16051);
var G__16060 = G__16046__16051;
n__16048 = G__16059;
G__16046__16049 = G__16060;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16061){
var content = cljs.core.first(arglist__16061);
var name = cljs.core.first(cljs.core.next(arglist__16061));
var value = cljs.core.rest(cljs.core.next(arglist__16061));
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
var vec__16067__16068 = pair.split(/\s*:\s*/);
var k__16069 = cljs.core.nth.call(null,vec__16067__16068,0,null);
var v__16070 = cljs.core.nth.call(null,vec__16067__16068,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16071 = k__16069;

if(cljs.core.truth_(and__3546__auto____16071))
{return v__16070;
} else
{return and__3546__auto____16071;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16069.toLowerCase()),v__16070);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16115 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16115)))
{return domina.parse_style_attributes.call(null,style__16115);
} else
{if(cljs.core.truth_(style__16115.cssText))
{return domina.parse_style_attributes.call(null,style__16115.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16120 = domina.single_node.call(null,content);
var attrs__16121 = node__16120.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16114_SHARP_){
var attr__16123 = attrs__16121.item(p1__16114_SHARP_);
var value__16124 = attr__16123.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16126 = cljs.core.not_EQ_.call(null,null,value__16124);

if(cljs.core.truth_(and__3546__auto____16126))
{return cljs.core.not_EQ_.call(null,"",value__16124);
} else
{return and__3546__auto____16126;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16123.nodeName.toLowerCase())],[attr__16123.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16121.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16136__16139 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16136__16139))
{var G__16141__16144 = cljs.core.first.call(null,G__16136__16139);
var vec__16143__16145 = G__16141__16144;
var name__16146 = cljs.core.nth.call(null,vec__16143__16145,0,null);
var value__16147 = cljs.core.nth.call(null,vec__16143__16145,1,null);
var G__16136__16148 = G__16136__16139;

var G__16141__16149 = G__16141__16144;
var G__16136__16150 = G__16136__16148;

while(true){
var vec__16151__16152 = G__16141__16149;
var name__16154 = cljs.core.nth.call(null,vec__16151__16152,0,null);
var value__16155 = cljs.core.nth.call(null,vec__16151__16152,1,null);
var G__16136__16156 = G__16136__16150;

domina.set_style_BANG_.call(null,content,name__16154,value__16155);
var temp__3698__auto____16160 = cljs.core.next.call(null,G__16136__16156);

if(cljs.core.truth_(temp__3698__auto____16160))
{var G__16136__16162 = temp__3698__auto____16160;

{
var G__16163 = cljs.core.first.call(null,G__16136__16162);
var G__16164 = G__16136__16162;
G__16141__16149 = G__16163;
G__16136__16150 = G__16164;
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
var G__16166__16167 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16166__16167))
{var G__16171__16173 = cljs.core.first.call(null,G__16166__16167);
var vec__16172__16174 = G__16171__16173;
var name__16175 = cljs.core.nth.call(null,vec__16172__16174,0,null);
var value__16176 = cljs.core.nth.call(null,vec__16172__16174,1,null);
var G__16166__16177 = G__16166__16167;

var G__16171__16178 = G__16171__16173;
var G__16166__16179 = G__16166__16177;

while(true){
var vec__16180__16181 = G__16171__16178;
var name__16182 = cljs.core.nth.call(null,vec__16180__16181,0,null);
var value__16183 = cljs.core.nth.call(null,vec__16180__16181,1,null);
var G__16166__16184 = G__16166__16179;

domina.set_attr_BANG_.call(null,content,name__16182,value__16183);
var temp__3698__auto____16185 = cljs.core.next.call(null,G__16166__16184);

if(cljs.core.truth_(temp__3698__auto____16185))
{var G__16166__16186 = temp__3698__auto____16185;

{
var G__16193 = cljs.core.first.call(null,G__16166__16186);
var G__16194 = G__16166__16186;
G__16171__16178 = G__16193;
G__16166__16179 = G__16194;
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
var G__16207__16209 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16207__16209))
{var node__16210 = cljs.core.first.call(null,G__16207__16209);
var G__16207__16211 = G__16207__16209;

while(true){
goog.dom.classes.add.call(null,node__16210,class$);
var temp__3698__auto____16213 = cljs.core.next.call(null,G__16207__16211);

if(cljs.core.truth_(temp__3698__auto____16213))
{var G__16207__16214 = temp__3698__auto____16213;

{
var G__16217 = cljs.core.first.call(null,G__16207__16214);
var G__16218 = G__16207__16214;
node__16210 = G__16217;
G__16207__16211 = G__16218;
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
var G__16224__16226 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16224__16226))
{var node__16229 = cljs.core.first.call(null,G__16224__16226);
var G__16224__16230 = G__16224__16226;

while(true){
goog.dom.classes.remove.call(null,node__16229,class$);
var temp__3698__auto____16234 = cljs.core.next.call(null,G__16224__16230);

if(cljs.core.truth_(temp__3698__auto____16234))
{var G__16224__16238 = temp__3698__auto____16234;

{
var G__16244 = cljs.core.first.call(null,G__16224__16238);
var G__16245 = G__16224__16238;
node__16229 = G__16244;
G__16224__16230 = G__16245;
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
var text__16248 = (function (content){
return text.call(null,content,true);
});
var text__16249 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16248.call(this,content);
case  2 :
return text__16249.call(this,content,normalize);
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
var G__16251__16252 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16251__16252))
{var node__16253 = cljs.core.first.call(null,G__16251__16252);
var G__16251__16254 = G__16251__16252;

while(true){
goog.dom.setTextContent.call(null,node__16253,value);
var temp__3698__auto____16255 = cljs.core.next.call(null,G__16251__16254);

if(cljs.core.truth_(temp__3698__auto____16255))
{var G__16251__16257 = temp__3698__auto____16255;

{
var G__16259 = cljs.core.first.call(null,G__16251__16257);
var G__16260 = G__16251__16257;
node__16253 = G__16259;
G__16251__16254 = G__16260;
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
var G__16264__16266 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16264__16266))
{var node__16268 = cljs.core.first.call(null,G__16264__16266);
var G__16264__16270 = G__16264__16266;

while(true){
goog.dom.forms.setValue.call(null,node__16268,value);
var temp__3698__auto____16272 = cljs.core.next.call(null,G__16264__16270);

if(cljs.core.truth_(temp__3698__auto____16272))
{var G__16264__16273 = temp__3698__auto____16272;

{
var G__16279 = cljs.core.first.call(null,G__16264__16273);
var G__16280 = G__16264__16273;
node__16268 = G__16279;
G__16264__16270 = G__16280;
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
var allows_inner_html_QMARK___16287 = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK___16288 = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name__16289 = cljs.core.str.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK___16290 = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name__16289);
var fallback__16291 = (function (p1__16282_SHARP_){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),p1__16282_SHARP_);
});

if(cljs.core.truth_((function (){var and__3546__auto____16292 = allows_inner_html_QMARK___16287;

if(cljs.core.truth_(and__3546__auto____16292))
{var and__3546__auto____16294 = (function (){var or__3548__auto____16293 = domina.support.leading_whitespace_QMARK_;

if(cljs.core.truth_(or__3548__auto____16293))
{return or__3548__auto____16293;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK___16288);
}
})();

if(cljs.core.truth_(and__3546__auto____16294))
{return cljs.core.not.call(null,special_tag_QMARK___16290);
} else
{return and__3546__auto____16294;
}
} else
{return and__3546__auto____16292;
}
})()))
{var value__16295 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");

try{var G__16298__16299 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16298__16299))
{var node__16300 = cljs.core.first.call(null,G__16298__16299);
var G__16298__16301 = G__16298__16299;

while(true){
goog.events.removeAll.call(null,node__16300);
node__16300.innerHTML = value__16295;
var temp__3698__auto____16302 = cljs.core.next.call(null,G__16298__16301);

if(cljs.core.truth_(temp__3698__auto____16302))
{var G__16298__16303 = temp__3698__auto____16302;

{
var G__16305 = cljs.core.first.call(null,G__16298__16303);
var G__16306 = G__16298__16303;
node__16300 = G__16305;
G__16298__16301 = G__16306;
continue;
}
} else
{}
break;
}
} else
{}
}catch (e16296){if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,domina.Exception,e16296)))
{var e__16297 = e16296;

fallback__16291.call(null,value__16295);
} else
{if(cljs.core.truth_("﷐'else"))
{throw e16296;
} else
{}
}
}} else
{fallback__16291.call(null,html_string);
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
var parents__16308 = domina.nodes.call(null,parent_content);
var children__16309 = domina.nodes.call(null,child_content);
var first_child__16317 = (function (){var frag__16310 = document.createDocumentFragment();

var G__16311__16312 = cljs.core.seq.call(null,children__16309);

if(cljs.core.truth_(G__16311__16312))
{var child__16313 = cljs.core.first.call(null,G__16311__16312);
var G__16311__16314 = G__16311__16312;

while(true){
frag__16310.appendChild(child__16313);
var temp__3698__auto____16315 = cljs.core.next.call(null,G__16311__16314);

if(cljs.core.truth_(temp__3698__auto____16315))
{var G__16311__16316 = temp__3698__auto____16315;

{
var G__16324 = cljs.core.first.call(null,G__16311__16316);
var G__16325 = G__16311__16316;
child__16313 = G__16324;
G__16311__16314 = G__16325;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16310;
})();
var other_children__16319 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16308) - 1),(function (){
return first_child__16317.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16308)))
{f.call(null,cljs.core.first.call(null,parents__16308),first_child__16317);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16285_SHARP_,p2__16286_SHARP_){
return f.call(null,p1__16285_SHARP_,p2__16286_SHARP_);
}),cljs.core.rest.call(null,parents__16308),other_children__16319));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16332 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16333 = (function (nl,n){
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
return lazy_nl_via_item__16332.call(this,nl);
case  2 :
return lazy_nl_via_item__16333.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16340 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16341 = (function (nl,n){
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
return lazy_nl_via_array_ref__16340.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16341.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6765__auto____16356 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16358 = x__6765__auto____16356;

if(cljs.core.truth_(and__3546__auto____16358))
{var and__3546__auto____16360 = x__6765__auto____16356.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16360))
{var and__3546__auto____16361 = x__6765__auto____16356.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16361))
{return cljs.core.not.call(null,x__6765__auto____16356.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16361;
}
} else
{return and__3546__auto____16360;
}
} else
{return and__3546__auto____16358;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16356);
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
if(cljs.core.truth_((function (){var x__6765__auto____16370 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16371 = x__6765__auto____16370;

if(cljs.core.truth_(and__3546__auto____16371))
{var and__3546__auto____16372 = x__6765__auto____16370.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16372))
{var and__3546__auto____16373 = x__6765__auto____16370.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16373))
{return cljs.core.not.call(null,x__6765__auto____16370.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16373;
}
} else
{return and__3546__auto____16372;
}
} else
{return and__3546__auto____16371;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16370);
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
if(cljs.core.truth_((function (){var x__6765__auto____16378 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16379 = x__6765__auto____16378;

if(cljs.core.truth_(and__3546__auto____16379))
{var and__3546__auto____16380 = x__6765__auto____16378.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16380))
{var and__3546__auto____16403 = x__6765__auto____16378.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16403))
{return cljs.core.not.call(null,x__6765__auto____16378.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16403;
}
} else
{return and__3546__auto____16380;
}
} else
{return and__3546__auto____16379;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16378);
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
var G__16545 = null;
var G__16545__16546 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16545__16548 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16545 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16545__16546.call(this,nodelist,n);
case  3 :
return G__16545__16548.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16545;
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
var G__16554 = null;
var G__16554__16555 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16554__16557 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16554 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16554__16555.call(this,nodelist,n);
case  3 :
return G__16554__16557.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16554;
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
var G__16565 = null;
var G__16565__16567 = (function (coll,n){
return coll.item(n);
});
var G__16565__16568 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16565 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16565__16567.call(this,coll,n);
case  3 :
return G__16565__16568.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16565;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
