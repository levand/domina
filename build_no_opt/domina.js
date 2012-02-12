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
if(cljs.core.truth_((function (){var and__3546__auto____15836 = content;

if(cljs.core.truth_(and__3546__auto____15836))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15836;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15837 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15837))
{return or__3548__auto____15837;
} else
{var or__3548__auto____15839 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15839))
{return or__3548__auto____15839;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15847 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15847))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15847;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15854 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15854))
{return or__3548__auto____15854;
} else
{var or__3548__auto____15856 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15856))
{return or__3548__auto____15856;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15890 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15890))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15890;
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
if(cljs.core.truth_((void 0 === domina.t15901)))
{
/**
* @constructor
*/
domina.t15901 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15901.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15901");
});
domina.t15901.prototype.domina$DomContent$ = true;
domina.t15901.prototype.domina$DomContent$nodes = (function (_){
var this__15905 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15905.class_name)));
});
domina.t15901.prototype.domina$DomContent$single_node = (function (_){
var this__15908 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15908.class_name)));
});
domina.t15901.prototype.cljs$core$IMeta$ = true;
domina.t15901.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15912 = this;
return this__15912.__meta;
});
domina.t15901.prototype.cljs$core$IWithMeta$ = true;
domina.t15901.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15913 = this;
return (new domina.t15901(this__15913.class_name,this__15913.by_class,__meta));
});
domina.t15901;
} else
{}
return (new domina.t15901(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15922_SHARP_){
return p1__15922_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15936_SHARP_,p2__15937_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15936_SHARP_,p2__15937_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15983_SHARP_,p2__15982_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15982_SHARP_,p1__15983_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15989_SHARP_,p2__15988_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15988_SHARP_,p1__15989_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15991_SHARP_,p2__15990_SHARP_){
return goog.dom.replaceNode.call(null,p2__15990_SHARP_,p1__15991_SHARP_);
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
var s__15998 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15998))))
{return s__15998;
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
var G__15999__16011 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15999__16011))
{var n__16012 = cljs.core.first.call(null,G__15999__16011);
var G__15999__16013 = G__15999__16011;

while(true){
goog.style.setStyle.call(null,n__16012,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16015 = cljs.core.next.call(null,G__15999__16013);

if(cljs.core.truth_(temp__3698__auto____16015))
{var G__15999__16017 = temp__3698__auto____16015;

{
var G__16018 = cljs.core.first.call(null,G__15999__16017);
var G__16019 = G__15999__16017;
n__16012 = G__16018;
G__15999__16013 = G__16019;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16020){
var content = cljs.core.first(arglist__16020);
var name = cljs.core.first(cljs.core.next(arglist__16020));
var value = cljs.core.rest(cljs.core.next(arglist__16020));
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
var G__16021__16023 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16021__16023))
{var n__16025 = cljs.core.first.call(null,G__16021__16023);
var G__16021__16026 = G__16021__16023;

while(true){
n__16025.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16028 = cljs.core.next.call(null,G__16021__16026);

if(cljs.core.truth_(temp__3698__auto____16028))
{var G__16021__16029 = temp__3698__auto____16028;

{
var G__16035 = cljs.core.first.call(null,G__16021__16029);
var G__16036 = G__16021__16029;
n__16025 = G__16035;
G__16021__16026 = G__16036;
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
var vec__16041__16042 = pair.split(/\s*:\s*/);
var k__16044 = cljs.core.nth.call(null,vec__16041__16042,0,null);
var v__16045 = cljs.core.nth.call(null,vec__16041__16042,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16046 = k__16044;

if(cljs.core.truth_(and__3546__auto____16046))
{return v__16045;
} else
{return and__3546__auto____16046;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16044.toLowerCase()),v__16045);
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
var node__16053 = domina.single_node.call(null,content);
var attrs__16054 = node__16053.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16049_SHARP_){
var attr__16056 = attrs__16054.item(p1__16049_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16056.nodeName.toLowerCase())],[attr__16056.nodeValue]);
}),cljs.core.range.call(null,attrs__16054.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16061__16062 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16061__16062))
{var G__16064__16066 = cljs.core.first.call(null,G__16061__16062);
var vec__16065__16067 = G__16064__16066;
var name__16068 = cljs.core.nth.call(null,vec__16065__16067,0,null);
var value__16069 = cljs.core.nth.call(null,vec__16065__16067,1,null);
var G__16061__16070 = G__16061__16062;

var G__16064__16071 = G__16064__16066;
var G__16061__16072 = G__16061__16070;

while(true){
var vec__16073__16074 = G__16064__16071;
var name__16075 = cljs.core.nth.call(null,vec__16073__16074,0,null);
var value__16076 = cljs.core.nth.call(null,vec__16073__16074,1,null);
var G__16061__16077 = G__16061__16072;

domina.set_style_BANG_.call(null,content,name__16075,value__16076);
var temp__3698__auto____16078 = cljs.core.next.call(null,G__16061__16077);

if(cljs.core.truth_(temp__3698__auto____16078))
{var G__16061__16079 = temp__3698__auto____16078;

{
var G__16081 = cljs.core.first.call(null,G__16061__16079);
var G__16082 = G__16061__16079;
G__16064__16071 = G__16081;
G__16061__16072 = G__16082;
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
var G__16119__16121 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16119__16121))
{var G__16123__16126 = cljs.core.first.call(null,G__16119__16121);
var vec__16124__16127 = G__16123__16126;
var name__16128 = cljs.core.nth.call(null,vec__16124__16127,0,null);
var value__16129 = cljs.core.nth.call(null,vec__16124__16127,1,null);
var G__16119__16130 = G__16119__16121;

var G__16123__16131 = G__16123__16126;
var G__16119__16132 = G__16119__16130;

while(true){
var vec__16133__16134 = G__16123__16131;
var name__16135 = cljs.core.nth.call(null,vec__16133__16134,0,null);
var value__16136 = cljs.core.nth.call(null,vec__16133__16134,1,null);
var G__16119__16137 = G__16119__16132;

domina.set_attr_BANG_.call(null,content,name__16135,value__16136);
var temp__3698__auto____16149 = cljs.core.next.call(null,G__16119__16137);

if(cljs.core.truth_(temp__3698__auto____16149))
{var G__16119__16150 = temp__3698__auto____16149;

{
var G__16151 = cljs.core.first.call(null,G__16119__16150);
var G__16152 = G__16119__16150;
G__16123__16131 = G__16151;
G__16119__16132 = G__16152;
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
var G__16153__16155 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16153__16155))
{var node__16157 = cljs.core.first.call(null,G__16153__16155);
var G__16153__16158 = G__16153__16155;

while(true){
goog.dom.classes.add.call(null,node__16157,class$);
var temp__3698__auto____16159 = cljs.core.next.call(null,G__16153__16158);

if(cljs.core.truth_(temp__3698__auto____16159))
{var G__16153__16162 = temp__3698__auto____16159;

{
var G__16167 = cljs.core.first.call(null,G__16153__16162);
var G__16168 = G__16153__16162;
node__16157 = G__16167;
G__16153__16158 = G__16168;
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
var G__16169__16170 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16169__16170))
{var node__16171 = cljs.core.first.call(null,G__16169__16170);
var G__16169__16172 = G__16169__16170;

while(true){
goog.dom.classes.remove.call(null,node__16171,class$);
var temp__3698__auto____16173 = cljs.core.next.call(null,G__16169__16172);

if(cljs.core.truth_(temp__3698__auto____16173))
{var G__16169__16174 = temp__3698__auto____16173;

{
var G__16176 = cljs.core.first.call(null,G__16169__16174);
var G__16177 = G__16169__16174;
node__16171 = G__16176;
G__16169__16172 = G__16177;
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
var text__16185 = (function (content){
return text.call(null,content,true);
});
var text__16186 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16185.call(this,content);
case  2 :
return text__16186.call(this,content,normalize);
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
var G__16190__16191 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16190__16191))
{var node__16193 = cljs.core.first.call(null,G__16190__16191);
var G__16190__16195 = G__16190__16191;

while(true){
goog.dom.setTextContent.call(null,node__16193,value);
var temp__3698__auto____16197 = cljs.core.next.call(null,G__16190__16195);

if(cljs.core.truth_(temp__3698__auto____16197))
{var G__16190__16199 = temp__3698__auto____16197;

{
var G__16202 = cljs.core.first.call(null,G__16190__16199);
var G__16224 = G__16190__16199;
node__16193 = G__16202;
G__16190__16195 = G__16224;
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
var G__16229__16232 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16229__16232))
{var node__16253 = cljs.core.first.call(null,G__16229__16232);
var G__16229__16254 = G__16229__16232;

while(true){
goog.dom.forms.setValue.call(null,node__16253,value);
var temp__3698__auto____16256 = cljs.core.next.call(null,G__16229__16254);

if(cljs.core.truth_(temp__3698__auto____16256))
{var G__16229__16258 = temp__3698__auto____16256;

{
var G__16259 = cljs.core.first.call(null,G__16229__16258);
var G__16260 = G__16229__16258;
node__16253 = G__16259;
G__16229__16254 = G__16260;
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
var G__16263__16264 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16263__16264))
{var node__16265 = cljs.core.first.call(null,G__16263__16264);
var G__16263__16266 = G__16263__16264;

while(true){
node__16265.innerHTML = value;
var temp__3698__auto____16267 = cljs.core.next.call(null,G__16263__16266);

if(cljs.core.truth_(temp__3698__auto____16267))
{var G__16263__16268 = temp__3698__auto____16267;

{
var G__16270 = cljs.core.first.call(null,G__16263__16268);
var G__16271 = G__16263__16268;
node__16265 = G__16270;
G__16263__16266 = G__16271;
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
var parents__16272 = domina.nodes.call(null,parent_content);
var children__16273 = domina.nodes.call(null,child_content);
var first_child__16282 = (function (){var frag__16274 = document.createDocumentFragment();

var G__16275__16276 = cljs.core.seq.call(null,children__16273);

if(cljs.core.truth_(G__16275__16276))
{var child__16277 = cljs.core.first.call(null,G__16275__16276);
var G__16275__16278 = G__16275__16276;

while(true){
frag__16274.appendChild(child__16277);
var temp__3698__auto____16279 = cljs.core.next.call(null,G__16275__16278);

if(cljs.core.truth_(temp__3698__auto____16279))
{var G__16275__16280 = temp__3698__auto____16279;

{
var G__16306 = cljs.core.first.call(null,G__16275__16280);
var G__16307 = G__16275__16280;
child__16277 = G__16306;
G__16275__16278 = G__16307;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16274;
})();
var other_children__16286 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16272) - 1),(function (){
return first_child__16282.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16272)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16273)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16272)))
{f.call(null,cljs.core.first.call(null,parents__16272),first_child__16282);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16261_SHARP_,p2__16262_SHARP_){
return f.call(null,p1__16261_SHARP_,p2__16262_SHARP_);
}),cljs.core.rest.call(null,parents__16272),other_children__16286));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16308 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16309 = (function (nl,n){
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
return lazy_nodelist__16308.call(this,nl);
case  2 :
return lazy_nodelist__16309.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6640__auto____16311 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16314 = x__6640__auto____16311;

if(cljs.core.truth_(and__3546__auto____16314))
{var and__3546__auto____16316 = x__6640__auto____16311.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16316))
{var and__3546__auto____16318 = x__6640__auto____16311.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16318))
{return cljs.core.not.call(null,x__6640__auto____16311.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16318;
}
} else
{return and__3546__auto____16316;
}
} else
{return and__3546__auto____16314;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6640__auto____16311);
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
var inner_wrapper__16321 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16322 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16321));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16322),1)))
{return inner_wrapper__16321.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16321));
} else
{return children__16322;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16323__16324 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16325 = cljs.core.nth.call(null,vec__16323__16324,0,null);
var table_level__16326 = cljs.core.nth.call(null,vec__16323__16324,1,null);
var ___16327 = cljs.core.nthnext.call(null,vec__16323__16324,2);
var wrapper__16328 = domina.create_wrapper.call(null,table_level__16326);

domina.set_wrapper_html_BANG_.call(null,wrapper__16328,content);
return domina.extract_wrapper_dom.call(null,wrapper__16328,table_level__16326);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6640__auto____16375 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16376 = x__6640__auto____16375;

if(cljs.core.truth_(and__3546__auto____16376))
{var and__3546__auto____16377 = x__6640__auto____16375.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16377))
{var and__3546__auto____16379 = x__6640__auto____16375.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16379))
{return cljs.core.not.call(null,x__6640__auto____16375.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16379;
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
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6640__auto____16375);
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
if(cljs.core.truth_((function (){var x__6640__auto____16382 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16383 = x__6640__auto____16382;

if(cljs.core.truth_(and__3546__auto____16383))
{var and__3546__auto____16384 = x__6640__auto____16382.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16384))
{var and__3546__auto____16385 = x__6640__auto____16382.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16385))
{return cljs.core.not.call(null,x__6640__auto____16382.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16385;
}
} else
{return and__3546__auto____16384;
}
} else
{return and__3546__auto____16383;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6640__auto____16382);
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
var G__16410 = null;
var G__16410__16411 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16410__16412 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16410 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16410__16411.call(this,nodelist,n);
case  3 :
return G__16410__16412.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16410;
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
var G__16427 = null;
var G__16427__16428 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16427__16430 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16427 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16427__16428.call(this,nodelist,n);
case  3 :
return G__16427__16430.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16427;
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
var G__16436 = null;
var G__16436__16437 = (function (coll,n){
return coll.item(n);
});
var G__16436__16438 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16436 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16436__16437.call(this,coll,n);
case  3 :
return G__16436__16438.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16436;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
