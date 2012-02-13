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
if(cljs.core.truth_((function (){var and__3546__auto____15739 = content;

if(cljs.core.truth_(and__3546__auto____15739))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15739;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15740 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15740))
{return or__3548__auto____15740;
} else
{var or__3548__auto____15741 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15741))
{return or__3548__auto____15741;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15742 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15742))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15742;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15743 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15743))
{return or__3548__auto____15743;
} else
{var or__3548__auto____15746 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15746))
{return or__3548__auto____15746;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15749 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15749))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15749;
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
if(cljs.core.truth_((void 0 === domina.t15752)))
{
/**
* @constructor
*/
domina.t15752 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15752.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15752");
});
domina.t15752.prototype.domina$DomContent$ = true;
domina.t15752.prototype.domina$DomContent$nodes = (function (_){
var this__15753 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15753.class_name)));
});
domina.t15752.prototype.domina$DomContent$single_node = (function (_){
var this__15754 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15754.class_name)));
});
domina.t15752.prototype.cljs$core$IMeta$ = true;
domina.t15752.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15755 = this;
return this__15755.__meta;
});
domina.t15752.prototype.cljs$core$IWithMeta$ = true;
domina.t15752.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15756 = this;
return (new domina.t15752(this__15756.class_name,this__15756.by_class,__meta));
});
domina.t15752;
} else
{}
return (new domina.t15752(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15762_SHARP_){
return p1__15762_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15765_SHARP_,p2__15766_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15765_SHARP_,p2__15766_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15793_SHARP_,p2__15792_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15792_SHARP_,p1__15793_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15795_SHARP_,p2__15794_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15794_SHARP_,p1__15795_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15797_SHARP_,p2__15796_SHARP_){
return goog.dom.replaceNode.call(null,p2__15796_SHARP_,p1__15797_SHARP_);
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
var s__15816 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15816))))
{return s__15816;
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
var G__15825__15826 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15825__15826))
{var n__15827 = cljs.core.first.call(null,G__15825__15826);
var G__15825__15828 = G__15825__15826;

while(true){
goog.style.setStyle.call(null,n__15827,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15831 = cljs.core.next.call(null,G__15825__15828);

if(cljs.core.truth_(temp__3698__auto____15831))
{var G__15825__15833 = temp__3698__auto____15831;

{
var G__15838 = cljs.core.first.call(null,G__15825__15833);
var G__15839 = G__15825__15833;
n__15827 = G__15838;
G__15825__15828 = G__15839;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15840){
var content = cljs.core.first(arglist__15840);
var name = cljs.core.first(cljs.core.next(arglist__15840));
var value = cljs.core.rest(cljs.core.next(arglist__15840));
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
var G__15846__15849 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15846__15849))
{var n__15852 = cljs.core.first.call(null,G__15846__15849);
var G__15846__15854 = G__15846__15849;

while(true){
n__15852.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15859 = cljs.core.next.call(null,G__15846__15854);

if(cljs.core.truth_(temp__3698__auto____15859))
{var G__15846__15862 = temp__3698__auto____15859;

{
var G__15873 = cljs.core.first.call(null,G__15846__15862);
var G__15875 = G__15846__15862;
n__15852 = G__15873;
G__15846__15854 = G__15875;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15878){
var content = cljs.core.first(arglist__15878);
var name = cljs.core.first(cljs.core.next(arglist__15878));
var value = cljs.core.rest(cljs.core.next(arglist__15878));
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
var vec__15882__15884 = pair.split(/\s*:\s*/);
var k__15886 = cljs.core.nth.call(null,vec__15882__15884,0,null);
var v__15888 = cljs.core.nth.call(null,vec__15882__15884,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15908 = k__15886;

if(cljs.core.truth_(and__3546__auto____15908))
{return v__15888;
} else
{return and__3546__auto____15908;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15886.toLowerCase()),v__15888);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__15916 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__15916)))
{return domina.parse_style_attributes.call(null,style__15916);
} else
{if(cljs.core.truth_(style__15916.cssText))
{return domina.parse_style_attributes.call(null,style__15916.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__15923 = domina.single_node.call(null,content);
var attrs__15924 = node__15923.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15913_SHARP_){
var attr__15928 = attrs__15924.item(p1__15913_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15928.nodeName.toLowerCase())],[attr__15928.nodeValue]);
}),cljs.core.range.call(null,attrs__15924.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15934__15936 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15934__15936))
{var G__15941__15947 = cljs.core.first.call(null,G__15934__15936);
var vec__15943__15954 = G__15941__15947;
var name__15955 = cljs.core.nth.call(null,vec__15943__15954,0,null);
var value__15956 = cljs.core.nth.call(null,vec__15943__15954,1,null);
var G__15934__15957 = G__15934__15936;

var G__15941__15959 = G__15941__15947;
var G__15934__15960 = G__15934__15957;

while(true){
var vec__15961__15962 = G__15941__15959;
var name__15965 = cljs.core.nth.call(null,vec__15961__15962,0,null);
var value__15968 = cljs.core.nth.call(null,vec__15961__15962,1,null);
var G__15934__15969 = G__15934__15960;

domina.set_style_BANG_.call(null,content,name__15965,value__15968);
var temp__3698__auto____15970 = cljs.core.next.call(null,G__15934__15969);

if(cljs.core.truth_(temp__3698__auto____15970))
{var G__15934__15971 = temp__3698__auto____15970;

{
var G__15991 = cljs.core.first.call(null,G__15934__15971);
var G__15992 = G__15934__15971;
G__15941__15959 = G__15991;
G__15934__15960 = G__15992;
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
var G__15998__15999 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15998__15999))
{var G__16001__16003 = cljs.core.first.call(null,G__15998__15999);
var vec__16002__16006 = G__16001__16003;
var name__16007 = cljs.core.nth.call(null,vec__16002__16006,0,null);
var value__16008 = cljs.core.nth.call(null,vec__16002__16006,1,null);
var G__15998__16009 = G__15998__15999;

var G__16001__16010 = G__16001__16003;
var G__15998__16013 = G__15998__16009;

while(true){
var vec__16014__16015 = G__16001__16010;
var name__16016 = cljs.core.nth.call(null,vec__16014__16015,0,null);
var value__16017 = cljs.core.nth.call(null,vec__16014__16015,1,null);
var G__15998__16018 = G__15998__16013;

domina.set_attr_BANG_.call(null,content,name__16016,value__16017);
var temp__3698__auto____16022 = cljs.core.next.call(null,G__15998__16018);

if(cljs.core.truth_(temp__3698__auto____16022))
{var G__15998__16024 = temp__3698__auto____16022;

{
var G__16028 = cljs.core.first.call(null,G__15998__16024);
var G__16029 = G__15998__16024;
G__16001__16010 = G__16028;
G__15998__16013 = G__16029;
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
var G__16035__16036 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16035__16036))
{var node__16038 = cljs.core.first.call(null,G__16035__16036);
var G__16035__16040 = G__16035__16036;

while(true){
goog.dom.classes.add.call(null,node__16038,class$);
var temp__3698__auto____16045 = cljs.core.next.call(null,G__16035__16040);

if(cljs.core.truth_(temp__3698__auto____16045))
{var G__16035__16046 = temp__3698__auto____16045;

{
var G__16051 = cljs.core.first.call(null,G__16035__16046);
var G__16052 = G__16035__16046;
node__16038 = G__16051;
G__16035__16040 = G__16052;
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
var G__16056__16061 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16056__16061))
{var node__16063 = cljs.core.first.call(null,G__16056__16061);
var G__16056__16064 = G__16056__16061;

while(true){
goog.dom.classes.remove.call(null,node__16063,class$);
var temp__3698__auto____16067 = cljs.core.next.call(null,G__16056__16064);

if(cljs.core.truth_(temp__3698__auto____16067))
{var G__16056__16073 = temp__3698__auto____16067;

{
var G__16075 = cljs.core.first.call(null,G__16056__16073);
var G__16076 = G__16056__16073;
node__16063 = G__16075;
G__16056__16064 = G__16076;
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
var text__16078 = (function (content){
return text.call(null,content,true);
});
var text__16079 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16078.call(this,content);
case  2 :
return text__16079.call(this,content,normalize);
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
var G__16083__16086 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16083__16086))
{var node__16089 = cljs.core.first.call(null,G__16083__16086);
var G__16083__16090 = G__16083__16086;

while(true){
goog.dom.setTextContent.call(null,node__16089,value);
var temp__3698__auto____16093 = cljs.core.next.call(null,G__16083__16090);

if(cljs.core.truth_(temp__3698__auto____16093))
{var G__16083__16095 = temp__3698__auto____16093;

{
var G__16098 = cljs.core.first.call(null,G__16083__16095);
var G__16099 = G__16083__16095;
node__16089 = G__16098;
G__16083__16090 = G__16099;
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
var G__16106__16107 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16106__16107))
{var node__16109 = cljs.core.first.call(null,G__16106__16107);
var G__16106__16110 = G__16106__16107;

while(true){
goog.dom.forms.setValue.call(null,node__16109,value);
var temp__3698__auto____16111 = cljs.core.next.call(null,G__16106__16110);

if(cljs.core.truth_(temp__3698__auto____16111))
{var G__16106__16115 = temp__3698__auto____16111;

{
var G__16118 = cljs.core.first.call(null,G__16106__16115);
var G__16119 = G__16106__16115;
node__16109 = G__16118;
G__16106__16110 = G__16119;
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
var G__16129__16132 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16129__16132))
{var node__16133 = cljs.core.first.call(null,G__16129__16132);
var G__16129__16134 = G__16129__16132;

while(true){
node__16133.innerHTML = value;
var temp__3698__auto____16135 = cljs.core.next.call(null,G__16129__16134);

if(cljs.core.truth_(temp__3698__auto____16135))
{var G__16129__16136 = temp__3698__auto____16135;

{
var G__16140 = cljs.core.first.call(null,G__16129__16136);
var G__16141 = G__16129__16136;
node__16133 = G__16140;
G__16129__16134 = G__16141;
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
var parents__16147 = domina.nodes.call(null,parent_content);
var children__16148 = domina.nodes.call(null,child_content);
var first_child__16159 = (function (){var frag__16150 = document.createDocumentFragment();

var G__16151__16152 = cljs.core.seq.call(null,children__16148);

if(cljs.core.truth_(G__16151__16152))
{var child__16153 = cljs.core.first.call(null,G__16151__16152);
var G__16151__16154 = G__16151__16152;

while(true){
frag__16150.appendChild(child__16153);
var temp__3698__auto____16155 = cljs.core.next.call(null,G__16151__16154);

if(cljs.core.truth_(temp__3698__auto____16155))
{var G__16151__16158 = temp__3698__auto____16155;

{
var G__16231 = cljs.core.first.call(null,G__16151__16158);
var G__16233 = G__16151__16158;
child__16153 = G__16231;
G__16151__16154 = G__16233;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16150;
})();
var other_children__16161 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16147) - 1),(function (){
return first_child__16159.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16147)))
{f.call(null,cljs.core.first.call(null,parents__16147),first_child__16159);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16126_SHARP_,p2__16127_SHARP_){
return f.call(null,p1__16126_SHARP_,p2__16127_SHARP_);
}),cljs.core.rest.call(null,parents__16147),other_children__16161));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16251 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16253 = (function (nl,n){
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
return lazy_nl_via_item__16251.call(this,nl);
case  2 :
return lazy_nl_via_item__16253.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16261 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16263 = (function (nl,n){
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
return lazy_nl_via_array_ref__16261.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16263.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6777__auto____16273 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16275 = x__6777__auto____16273;

if(cljs.core.truth_(and__3546__auto____16275))
{var and__3546__auto____16276 = x__6777__auto____16273.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16276))
{var and__3546__auto____16277 = x__6777__auto____16273.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16277))
{return cljs.core.not.call(null,x__6777__auto____16273.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16277;
}
} else
{return and__3546__auto____16276;
}
} else
{return and__3546__auto____16275;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6777__auto____16273);
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
var inner_wrapper__16308 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16310 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16308));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16310),1)))
{return inner_wrapper__16308.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16308));
} else
{return children__16310;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16322__16325 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16328 = cljs.core.nth.call(null,vec__16322__16325,0,null);
var table_level__16329 = cljs.core.nth.call(null,vec__16322__16325,1,null);
var ___16330 = cljs.core.nthnext.call(null,vec__16322__16325,2);
var wrapper__16356 = domina.create_wrapper.call(null,table_level__16329);

domina.set_wrapper_html_BANG_.call(null,wrapper__16356,content);
return domina.extract_wrapper_dom.call(null,wrapper__16356,table_level__16329);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6777__auto____16362 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16363 = x__6777__auto____16362;

if(cljs.core.truth_(and__3546__auto____16363))
{var and__3546__auto____16368 = x__6777__auto____16362.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16368))
{var and__3546__auto____16395 = x__6777__auto____16362.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16395))
{return cljs.core.not.call(null,x__6777__auto____16362.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16395;
}
} else
{return and__3546__auto____16368;
}
} else
{return and__3546__auto____16363;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6777__auto____16362);
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
if(cljs.core.truth_((function (){var x__6777__auto____16409 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16412 = x__6777__auto____16409;

if(cljs.core.truth_(and__3546__auto____16412))
{var and__3546__auto____16413 = x__6777__auto____16409.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16413))
{var and__3546__auto____16414 = x__6777__auto____16409.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16414))
{return cljs.core.not.call(null,x__6777__auto____16409.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16414;
}
} else
{return and__3546__auto____16413;
}
} else
{return and__3546__auto____16412;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6777__auto____16409);
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
var G__16441 = null;
var G__16441__16442 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16441__16443 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16441 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16441__16442.call(this,nodelist,n);
case  3 :
return G__16441__16443.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16441;
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
var G__16462 = null;
var G__16462__16463 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16462__16464 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16462 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16462__16463.call(this,nodelist,n);
case  3 :
return G__16462__16464.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16462;
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
var G__16471 = null;
var G__16471__16472 = (function (coll,n){
return coll.item(n);
});
var G__16471__16473 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16471 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16471__16472.call(this,coll,n);
case  3 :
return G__16471__16473.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16471;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
