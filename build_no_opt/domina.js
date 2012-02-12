goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15772 = content;

if(cljs.core.truth_(and__3546__auto____15772))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15772;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15773 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15773))
{return or__3548__auto____15773;
} else
{var or__3548__auto____15774 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15774))
{return or__3548__auto____15774;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15775 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15775))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15775;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15778 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15778))
{return or__3548__auto____15778;
} else
{var or__3548__auto____15779 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15779))
{return or__3548__auto____15779;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15783 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15783))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15783;
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
if(cljs.core.truth_((void 0 === domina.t15788)))
{
/**
* @constructor
*/
domina.t15788 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15788.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15788");
});
domina.t15788.prototype.domina$DomContent$ = true;
domina.t15788.prototype.domina$DomContent$nodes = (function (_){
var this__15796 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15796.class_name)));
});
domina.t15788.prototype.domina$DomContent$single_node = (function (_){
var this__15797 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15797.class_name)));
});
domina.t15788.prototype.cljs$core$IMeta$ = true;
domina.t15788.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15801 = this;
return this__15801.__meta;
});
domina.t15788.prototype.cljs$core$IWithMeta$ = true;
domina.t15788.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15802 = this;
return (new domina.t15788(this__15802.class_name,this__15802.by_class,__meta));
});
domina.t15788;
} else
{}
return (new domina.t15788(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15812_SHARP_){
return p1__15812_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15819_SHARP_,p2__15820_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15819_SHARP_,p2__15820_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15836_SHARP_,p2__15835_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15835_SHARP_,p1__15836_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15841_SHARP_,p2__15840_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15840_SHARP_,p1__15841_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15846_SHARP_,p2__15845_SHARP_){
return goog.dom.replaceNode.call(null,p2__15845_SHARP_,p1__15846_SHARP_);
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
var s__15861 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15861))))
{return s__15861;
} else
{return null;
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
var G__15875__15876 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15875__15876))
{var n__15879 = cljs.core.first.call(null,G__15875__15876);
var G__15875__15880 = G__15875__15876;

while(true){
goog.style.setStyle.call(null,n__15879,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15882 = cljs.core.next.call(null,G__15875__15880);

if(cljs.core.truth_(temp__3698__auto____15882))
{var G__15875__15883 = temp__3698__auto____15882;

{
var G__15914 = cljs.core.first.call(null,G__15875__15883);
var G__15915 = G__15875__15883;
n__15879 = G__15914;
G__15875__15880 = G__15915;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15916){
var content = cljs.core.first(arglist__15916);
var name = cljs.core.first(cljs.core.next(arglist__15916));
var value = cljs.core.rest(cljs.core.next(arglist__15916));
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
var G__15919__15920 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15919__15920))
{var n__15922 = cljs.core.first.call(null,G__15919__15920);
var G__15919__15923 = G__15919__15920;

while(true){
n__15922.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15924 = cljs.core.next.call(null,G__15919__15923);

if(cljs.core.truth_(temp__3698__auto____15924))
{var G__15919__15925 = temp__3698__auto____15924;

{
var G__15926 = cljs.core.first.call(null,G__15919__15925);
var G__15928 = G__15919__15925;
n__15922 = G__15926;
G__15919__15923 = G__15928;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15931){
var content = cljs.core.first(arglist__15931);
var name = cljs.core.first(cljs.core.next(arglist__15931));
var value = cljs.core.rest(cljs.core.next(arglist__15931));
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
var vec__15932__15934 = pair.split(/\s*:\s*/);
var k__15935 = cljs.core.nth.call(null,vec__15932__15934,0,null);
var v__15936 = cljs.core.nth.call(null,vec__15932__15934,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15937 = k__15935;

if(cljs.core.truth_(and__3546__auto____15937))
{return v__15936;
} else
{return and__3546__auto____15937;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15935.toLowerCase()),v__15936);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
return domina.parse_style_attributes.call(null,domina.attr.call(null,content,"style"));
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__15946 = domina.single_node.call(null,content);
var attrs__15947 = node__15946.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15939_SHARP_){
var attr__15959 = attrs__15947.item(p1__15939_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15959.nodeName.toLowerCase())],[attr__15959.nodeValue]);
}),cljs.core.range.call(null,attrs__15947.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15968__15969 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15968__15969))
{var G__15971__15973 = cljs.core.first.call(null,G__15968__15969);
var vec__15972__15974 = G__15971__15973;
var name__15976 = cljs.core.nth.call(null,vec__15972__15974,0,null);
var value__15977 = cljs.core.nth.call(null,vec__15972__15974,1,null);
var G__15968__15978 = G__15968__15969;

var G__15971__15980 = G__15971__15973;
var G__15968__15981 = G__15968__15978;

while(true){
var vec__15982__15983 = G__15971__15980;
var name__15985 = cljs.core.nth.call(null,vec__15982__15983,0,null);
var value__15986 = cljs.core.nth.call(null,vec__15982__15983,1,null);
var G__15968__15987 = G__15968__15981;

domina.set_style_BANG_.call(null,content,name__15985,value__15986);
var temp__3698__auto____15989 = cljs.core.next.call(null,G__15968__15987);

if(cljs.core.truth_(temp__3698__auto____15989))
{var G__15968__15990 = temp__3698__auto____15989;

{
var G__15992 = cljs.core.first.call(null,G__15968__15990);
var G__15993 = G__15968__15990;
G__15971__15980 = G__15992;
G__15968__15981 = G__15993;
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
var G__15995__15996 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15995__15996))
{var G__15998__16000 = cljs.core.first.call(null,G__15995__15996);
var vec__15999__16001 = G__15998__16000;
var name__16002 = cljs.core.nth.call(null,vec__15999__16001,0,null);
var value__16004 = cljs.core.nth.call(null,vec__15999__16001,1,null);
var G__15995__16006 = G__15995__15996;

var G__15998__16007 = G__15998__16000;
var G__15995__16008 = G__15995__16006;

while(true){
var vec__16012__16013 = G__15998__16007;
var name__16014 = cljs.core.nth.call(null,vec__16012__16013,0,null);
var value__16015 = cljs.core.nth.call(null,vec__16012__16013,1,null);
var G__15995__16016 = G__15995__16008;

domina.set_attr_BANG_.call(null,content,name__16014,value__16015);
var temp__3698__auto____16017 = cljs.core.next.call(null,G__15995__16016);

if(cljs.core.truth_(temp__3698__auto____16017))
{var G__15995__16018 = temp__3698__auto____16017;

{
var G__16024 = cljs.core.first.call(null,G__15995__16018);
var G__16025 = G__15995__16018;
G__15998__16007 = G__16024;
G__15995__16008 = G__16025;
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
var G__16035__16038 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16035__16038))
{var node__16039 = cljs.core.first.call(null,G__16035__16038);
var G__16035__16040 = G__16035__16038;

while(true){
goog.dom.classes.add.call(null,node__16039,class$);
var temp__3698__auto____16041 = cljs.core.next.call(null,G__16035__16040);

if(cljs.core.truth_(temp__3698__auto____16041))
{var G__16035__16042 = temp__3698__auto____16041;

{
var G__16051 = cljs.core.first.call(null,G__16035__16042);
var G__16053 = G__16035__16042;
node__16039 = G__16051;
G__16035__16040 = G__16053;
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
var G__16064__16065 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16064__16065))
{var node__16067 = cljs.core.first.call(null,G__16064__16065);
var G__16064__16068 = G__16064__16065;

while(true){
goog.dom.classes.remove.call(null,node__16067,class$);
var temp__3698__auto____16070 = cljs.core.next.call(null,G__16064__16068);

if(cljs.core.truth_(temp__3698__auto____16070))
{var G__16064__16071 = temp__3698__auto____16070;

{
var G__16072 = cljs.core.first.call(null,G__16064__16071);
var G__16073 = G__16064__16071;
node__16067 = G__16072;
G__16064__16068 = G__16073;
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
var text__16095 = (function (content){
return text.call(null,content,true);
});
var text__16097 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16095.call(this,content);
case  2 :
return text__16097.call(this,content,normalize);
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
var G__16099__16100 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16099__16100))
{var node__16102 = cljs.core.first.call(null,G__16099__16100);
var G__16099__16103 = G__16099__16100;

while(true){
goog.dom.setTextContent.call(null,node__16102,value);
var temp__3698__auto____16106 = cljs.core.next.call(null,G__16099__16103);

if(cljs.core.truth_(temp__3698__auto____16106))
{var G__16099__16107 = temp__3698__auto____16106;

{
var G__16112 = cljs.core.first.call(null,G__16099__16107);
var G__16113 = G__16099__16107;
node__16102 = G__16112;
G__16099__16103 = G__16113;
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
var G__16126__16130 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16126__16130))
{var node__16132 = cljs.core.first.call(null,G__16126__16130);
var G__16126__16133 = G__16126__16130;

while(true){
goog.dom.forms.setValue.call(null,node__16132,value);
var temp__3698__auto____16137 = cljs.core.next.call(null,G__16126__16133);

if(cljs.core.truth_(temp__3698__auto____16137))
{var G__16126__16138 = temp__3698__auto____16137;

{
var G__16150 = cljs.core.first.call(null,G__16126__16138);
var G__16151 = G__16126__16138;
node__16132 = G__16150;
G__16126__16133 = G__16151;
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
domina.set_html_BANG_ = (function set_html_BANG_(content,value){
var G__16187__16189 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16187__16189))
{var node__16191 = cljs.core.first.call(null,G__16187__16189);
var G__16187__16192 = G__16187__16189;

while(true){
node__16191.innerHTML = value;
var temp__3698__auto____16194 = cljs.core.next.call(null,G__16187__16192);

if(cljs.core.truth_(temp__3698__auto____16194))
{var G__16187__16195 = temp__3698__auto____16194;

{
var G__16203 = cljs.core.first.call(null,G__16187__16195);
var G__16204 = G__16187__16195;
node__16191 = G__16203;
G__16187__16192 = G__16204;
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
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__16209 = domina.nodes.call(null,parent_content);
var children__16210 = domina.nodes.call(null,child_content);
var first_child__16239 = (function (){var frag__16215 = document.createDocumentFragment();

var G__16216__16222 = cljs.core.seq.call(null,children__16210);

if(cljs.core.truth_(G__16216__16222))
{var child__16228 = cljs.core.first.call(null,G__16216__16222);
var G__16216__16229 = G__16216__16222;

while(true){
frag__16215.appendChild(child__16228);
var temp__3698__auto____16235 = cljs.core.next.call(null,G__16216__16229);

if(cljs.core.truth_(temp__3698__auto____16235))
{var G__16216__16237 = temp__3698__auto____16235;

{
var G__16261 = cljs.core.first.call(null,G__16216__16237);
var G__16262 = G__16216__16237;
child__16228 = G__16261;
G__16216__16229 = G__16262;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16215;
})();
var other_children__16242 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16209) - 1),(function (){
return first_child__16239.cloneNode(true);
})));

throw "lolwhut";
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16209)))
{f.call(null,cljs.core.first.call(null,parents__16209),first_child__16239);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16183_SHARP_,p2__16184_SHARP_){
return f.call(null,p1__16183_SHARP_,p2__16184_SHARP_);
}),cljs.core.rest.call(null,parents__16209),other_children__16242));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16282 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16283 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nodelist.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nodelist = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nodelist__16282.call(this,nl);
case  2 :
return lazy_nodelist__16283.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
/**
* Early versions of IE have things which are like arrays in that they
* respond to .length and .item, but are not arrays. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(cljs.core.truth_((function (){var x__6771__auto____16295 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16297 = x__6771__auto____16295;

if(cljs.core.truth_(and__3546__auto____16297))
{var and__3546__auto____16298 = x__6771__auto____16295.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16298))
{var and__3546__auto____16299 = x__6771__auto____16295.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16299))
{return cljs.core.not.call(null,x__6771__auto____16295.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16299;
}
} else
{return and__3546__auto____16298;
}
} else
{return and__3546__auto____16297;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16295);
}
})()))
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(list_thing.item))
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
domina.create_wrapper = (function create_wrapper(table_level){
return document.createElement((cljs.core.truth_(table_level)?(cljs.core.truth_(cljs.core.set(["td","th"]).call(null,table_level))?"tr":"table"):"div"));
});
domina.set_wrapper_html_BANG_ = (function set_wrapper_html_BANG_(wrapper,content){
if(cljs.core.truth_(goog.dom.BrowserFeature.INNER_HTML_NEEDS_SCOPED_ELEMENT))
{wrapper.innerHTML = cljs.core.str.call(null,"<br>",content);
return wrapper.removeChild(goog.dom.getFirstElementChild.call(null,wrapper));
} else
{return wrapper.innerHTML = content;
}
});
domina.extract_wrapper_dom = (function extract_wrapper_dom(wrapper,table_level){
var inner_wrapper__16340 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16341 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16340));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16341),1)))
{return inner_wrapper__16340.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16340));
} else
{return children__16341;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16355__16356 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16358 = cljs.core.nth.call(null,vec__16355__16356,0,null);
var table_level__16360 = cljs.core.nth.call(null,vec__16355__16356,1,null);
var ___16361 = cljs.core.nthnext.call(null,vec__16355__16356,2);
var wrapper__16362 = domina.create_wrapper.call(null,table_level__16360);

domina.set_wrapper_html_BANG_.call(null,wrapper__16362,content);
return domina.extract_wrapper_dom.call(null,wrapper__16362,table_level__16360);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6771__auto____16365 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16366 = x__6771__auto____16365;

if(cljs.core.truth_(and__3546__auto____16366))
{var and__3546__auto____16367 = x__6771__auto____16365.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16367))
{var and__3546__auto____16369 = x__6771__auto____16365.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16369))
{return cljs.core.not.call(null,x__6771__auto____16365.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16369;
}
} else
{return and__3546__auto____16367;
}
} else
{return and__3546__auto____16366;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16365);
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
if(cljs.core.truth_((function (){var x__6771__auto____16375 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16376 = x__6771__auto____16375;

if(cljs.core.truth_(and__3546__auto____16376))
{var and__3546__auto____16377 = x__6771__auto____16375.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16377))
{var and__3546__auto____16378 = x__6771__auto____16375.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16378))
{return cljs.core.not.call(null,x__6771__auto____16375.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16378;
}
} else
{return and__3546__auto____16377;
}
} else
{return and__3546__auto____16376;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16375);
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
return domina.nodes.call(null,domina.string_to_dom.call(null,s));
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
var G__16425 = null;
var G__16425__16428 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16425__16429 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16425 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16425__16428.call(this,nodelist,n);
case  3 :
return G__16425__16429.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16425;
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
var G__16443 = null;
var G__16443__16444 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16443__16446 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16443 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16443__16444.call(this,nodelist,n);
case  3 :
return G__16443__16446.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16443;
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
var G__16460 = null;
var G__16460__16462 = (function (coll,n){
return coll.item(n);
});
var G__16460__16463 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16460 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16460__16462.call(this,coll,n);
case  3 :
return G__16460__16463.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16460;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
