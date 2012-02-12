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
if(cljs.core.truth_((function (){var and__3546__auto____15878 = content;

if(cljs.core.truth_(and__3546__auto____15878))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15878;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15881 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15881))
{return or__3548__auto____15881;
} else
{var or__3548__auto____15883 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15883))
{return or__3548__auto____15883;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15886 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15886))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15886;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15892 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15892))
{return or__3548__auto____15892;
} else
{var or__3548__auto____15893 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15893))
{return or__3548__auto____15893;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15899 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15899))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15899;
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
if(cljs.core.truth_((void 0 === domina.t15940)))
{
/**
* @constructor
*/
domina.t15940 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15940.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15940");
});
domina.t15940.prototype.domina$DomContent$ = true;
domina.t15940.prototype.domina$DomContent$nodes = (function (_){
var this__15946 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15946.class_name)));
});
domina.t15940.prototype.domina$DomContent$single_node = (function (_){
var this__15947 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15947.class_name)));
});
domina.t15940.prototype.cljs$core$IMeta$ = true;
domina.t15940.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15949 = this;
return this__15949.__meta;
});
domina.t15940.prototype.cljs$core$IWithMeta$ = true;
domina.t15940.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15952 = this;
return (new domina.t15940(this__15952.class_name,this__15952.by_class,__meta));
});
domina.t15940;
} else
{}
return (new domina.t15940(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15964_SHARP_){
return p1__15964_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15981_SHARP_,p2__15982_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15981_SHARP_,p2__15982_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15991_SHARP_,p2__15990_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15990_SHARP_,p1__15991_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15997_SHARP_,p2__15995_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15995_SHARP_,p1__15997_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16015_SHARP_,p2__16013_SHARP_){
return goog.dom.replaceNode.call(null,p2__16013_SHARP_,p1__16015_SHARP_);
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
var s__16049 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16049))))
{return s__16049;
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
var G__16073__16074 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16073__16074))
{var n__16077 = cljs.core.first.call(null,G__16073__16074);
var G__16073__16078 = G__16073__16074;

while(true){
goog.style.setStyle.call(null,n__16077,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16080 = cljs.core.next.call(null,G__16073__16078);

if(cljs.core.truth_(temp__3698__auto____16080))
{var G__16073__16082 = temp__3698__auto____16080;

{
var G__16100 = cljs.core.first.call(null,G__16073__16082);
var G__16101 = G__16073__16082;
n__16077 = G__16100;
G__16073__16078 = G__16101;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16102){
var content = cljs.core.first(arglist__16102);
var name = cljs.core.first(cljs.core.next(arglist__16102));
var value = cljs.core.rest(cljs.core.next(arglist__16102));
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
var G__16103__16106 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16103__16106))
{var n__16108 = cljs.core.first.call(null,G__16103__16106);
var G__16103__16109 = G__16103__16106;

while(true){
n__16108.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16111 = cljs.core.next.call(null,G__16103__16109);

if(cljs.core.truth_(temp__3698__auto____16111))
{var G__16103__16112 = temp__3698__auto____16111;

{
var G__16120 = cljs.core.first.call(null,G__16103__16112);
var G__16121 = G__16103__16112;
n__16108 = G__16120;
G__16103__16109 = G__16121;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16124){
var content = cljs.core.first(arglist__16124);
var name = cljs.core.first(cljs.core.next(arglist__16124));
var value = cljs.core.rest(cljs.core.next(arglist__16124));
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
var vec__16126__16127 = pair.split(/\s*:\s*/);
var k__16128 = cljs.core.nth.call(null,vec__16126__16127,0,null);
var v__16129 = cljs.core.nth.call(null,vec__16126__16127,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16130 = k__16128;

if(cljs.core.truth_(and__3546__auto____16130))
{return v__16129;
} else
{return and__3546__auto____16130;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16128.toLowerCase()),v__16129);
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
var node__16143 = domina.single_node.call(null,content);
var attrs__16144 = node__16143.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16140_SHARP_){
var attr__16145 = attrs__16144.item(p1__16140_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16145.nodeName.toLowerCase())],[attr__16145.nodeValue]);
}),cljs.core.range.call(null,attrs__16144.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16149__16150 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16149__16150))
{var G__16153__16156 = cljs.core.first.call(null,G__16149__16150);
var vec__16154__16157 = G__16153__16156;
var name__16158 = cljs.core.nth.call(null,vec__16154__16157,0,null);
var value__16162 = cljs.core.nth.call(null,vec__16154__16157,1,null);
var G__16149__16163 = G__16149__16150;

var G__16153__16165 = G__16153__16156;
var G__16149__16166 = G__16149__16163;

while(true){
var vec__16167__16168 = G__16153__16165;
var name__16170 = cljs.core.nth.call(null,vec__16167__16168,0,null);
var value__16171 = cljs.core.nth.call(null,vec__16167__16168,1,null);
var G__16149__16174 = G__16149__16166;

domina.set_style_BANG_.call(null,content,name__16170,value__16171);
var temp__3698__auto____16176 = cljs.core.next.call(null,G__16149__16174);

if(cljs.core.truth_(temp__3698__auto____16176))
{var G__16149__16179 = temp__3698__auto____16176;

{
var G__16185 = cljs.core.first.call(null,G__16149__16179);
var G__16186 = G__16149__16179;
G__16153__16165 = G__16185;
G__16149__16166 = G__16186;
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
var G__16188__16190 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16188__16190))
{var G__16192__16195 = cljs.core.first.call(null,G__16188__16190);
var vec__16194__16196 = G__16192__16195;
var name__16197 = cljs.core.nth.call(null,vec__16194__16196,0,null);
var value__16199 = cljs.core.nth.call(null,vec__16194__16196,1,null);
var G__16188__16200 = G__16188__16190;

var G__16192__16201 = G__16192__16195;
var G__16188__16203 = G__16188__16200;

while(true){
var vec__16205__16206 = G__16192__16201;
var name__16208 = cljs.core.nth.call(null,vec__16205__16206,0,null);
var value__16209 = cljs.core.nth.call(null,vec__16205__16206,1,null);
var G__16188__16210 = G__16188__16203;

domina.set_attr_BANG_.call(null,content,name__16208,value__16209);
var temp__3698__auto____16214 = cljs.core.next.call(null,G__16188__16210);

if(cljs.core.truth_(temp__3698__auto____16214))
{var G__16188__16215 = temp__3698__auto____16214;

{
var G__16233 = cljs.core.first.call(null,G__16188__16215);
var G__16234 = G__16188__16215;
G__16192__16201 = G__16233;
G__16188__16203 = G__16234;
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
var G__16239__16244 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16239__16244))
{var node__16247 = cljs.core.first.call(null,G__16239__16244);
var G__16239__16248 = G__16239__16244;

while(true){
goog.dom.classes.add.call(null,node__16247,class$);
var temp__3698__auto____16250 = cljs.core.next.call(null,G__16239__16248);

if(cljs.core.truth_(temp__3698__auto____16250))
{var G__16239__16251 = temp__3698__auto____16250;

{
var G__16278 = cljs.core.first.call(null,G__16239__16251);
var G__16279 = G__16239__16251;
node__16247 = G__16278;
G__16239__16248 = G__16279;
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
var G__16283__16288 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16283__16288))
{var node__16289 = cljs.core.first.call(null,G__16283__16288);
var G__16283__16290 = G__16283__16288;

while(true){
goog.dom.classes.remove.call(null,node__16289,class$);
var temp__3698__auto____16301 = cljs.core.next.call(null,G__16283__16290);

if(cljs.core.truth_(temp__3698__auto____16301))
{var G__16283__16302 = temp__3698__auto____16301;

{
var G__16303 = cljs.core.first.call(null,G__16283__16302);
var G__16304 = G__16283__16302;
node__16289 = G__16303;
G__16283__16290 = G__16304;
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
var text__16312 = (function (content){
return text.call(null,content,true);
});
var text__16313 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16312.call(this,content);
case  2 :
return text__16313.call(this,content,normalize);
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
var G__16317__16318 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16317__16318))
{var node__16344 = cljs.core.first.call(null,G__16317__16318);
var G__16317__16345 = G__16317__16318;

while(true){
goog.dom.setTextContent.call(null,node__16344,value);
var temp__3698__auto____16347 = cljs.core.next.call(null,G__16317__16345);

if(cljs.core.truth_(temp__3698__auto____16347))
{var G__16317__16348 = temp__3698__auto____16347;

{
var G__16349 = cljs.core.first.call(null,G__16317__16348);
var G__16350 = G__16317__16348;
node__16344 = G__16349;
G__16317__16345 = G__16350;
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
var G__16351__16352 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16351__16352))
{var node__16353 = cljs.core.first.call(null,G__16351__16352);
var G__16351__16354 = G__16351__16352;

while(true){
goog.dom.forms.setValue.call(null,node__16353,value);
var temp__3698__auto____16355 = cljs.core.next.call(null,G__16351__16354);

if(cljs.core.truth_(temp__3698__auto____16355))
{var G__16351__16356 = temp__3698__auto____16355;

{
var G__16361 = cljs.core.first.call(null,G__16351__16356);
var G__16362 = G__16351__16356;
node__16353 = G__16361;
G__16351__16354 = G__16362;
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
var G__16377__16383 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16377__16383))
{var node__16384 = cljs.core.first.call(null,G__16377__16383);
var G__16377__16385 = G__16377__16383;

while(true){
node__16384.innerHTML = value;
var temp__3698__auto____16386 = cljs.core.next.call(null,G__16377__16385);

if(cljs.core.truth_(temp__3698__auto____16386))
{var G__16377__16387 = temp__3698__auto____16386;

{
var G__16390 = cljs.core.first.call(null,G__16377__16387);
var G__16392 = G__16377__16387;
node__16384 = G__16390;
G__16377__16385 = G__16392;
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
var parents__16394 = domina.nodes.call(null,parent_content);
var children__16395 = domina.nodes.call(null,child_content);
var first_child__16408 = (function (){var frag__16396 = document.createDocumentFragment();

var G__16397__16400 = cljs.core.seq.call(null,children__16395);

if(cljs.core.truth_(G__16397__16400))
{var child__16402 = cljs.core.first.call(null,G__16397__16400);
var G__16397__16403 = G__16397__16400;

while(true){
frag__16396.appendChild(child__16402);
var temp__3698__auto____16404 = cljs.core.next.call(null,G__16397__16403);

if(cljs.core.truth_(temp__3698__auto____16404))
{var G__16397__16405 = temp__3698__auto____16404;

{
var G__16417 = cljs.core.first.call(null,G__16397__16405);
var G__16418 = G__16397__16405;
child__16402 = G__16417;
G__16397__16403 = G__16418;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16396;
})();
var other_children__16410 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16394) - 1),(function (){
return first_child__16408.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16394)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16395)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16394)))
{f.call(null,cljs.core.first.call(null,parents__16394),first_child__16408);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16374_SHARP_,p2__16375_SHARP_){
return f.call(null,p1__16374_SHARP_,p2__16375_SHARP_);
}),cljs.core.rest.call(null,parents__16394),other_children__16410));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16426 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16427 = (function (nl,n){
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
return lazy_nodelist__16426.call(this,nl);
case  2 :
return lazy_nodelist__16427.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6757__auto____16431 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16432 = x__6757__auto____16431;

if(cljs.core.truth_(and__3546__auto____16432))
{var and__3546__auto____16433 = x__6757__auto____16431.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16433))
{var and__3546__auto____16434 = x__6757__auto____16431.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16434))
{return cljs.core.not.call(null,x__6757__auto____16431.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16434;
}
} else
{return and__3546__auto____16433;
}
} else
{return and__3546__auto____16432;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16431);
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
var inner_wrapper__16458 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16460 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16458));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16460),1)))
{return inner_wrapper__16458.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16458));
} else
{return children__16460;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16461__16462 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16463 = cljs.core.nth.call(null,vec__16461__16462,0,null);
var table_level__16464 = cljs.core.nth.call(null,vec__16461__16462,1,null);
var ___16465 = cljs.core.nthnext.call(null,vec__16461__16462,2);
var wrapper__16466 = domina.create_wrapper.call(null,table_level__16464);

domina.set_wrapper_html_BANG_.call(null,wrapper__16466,content);
return domina.extract_wrapper_dom.call(null,wrapper__16466,table_level__16464);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6757__auto____16469 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16470 = x__6757__auto____16469;

if(cljs.core.truth_(and__3546__auto____16470))
{var and__3546__auto____16471 = x__6757__auto____16469.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16471))
{var and__3546__auto____16472 = x__6757__auto____16469.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16472))
{return cljs.core.not.call(null,x__6757__auto____16469.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16472;
}
} else
{return and__3546__auto____16471;
}
} else
{return and__3546__auto____16470;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16469);
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
if(cljs.core.truth_((function (){var x__6757__auto____16476 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16477 = x__6757__auto____16476;

if(cljs.core.truth_(and__3546__auto____16477))
{var and__3546__auto____16478 = x__6757__auto____16476.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16478))
{var and__3546__auto____16479 = x__6757__auto____16476.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16479))
{return cljs.core.not.call(null,x__6757__auto____16476.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16479;
}
} else
{return and__3546__auto____16478;
}
} else
{return and__3546__auto____16477;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16476);
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
var G__16487 = null;
var G__16487__16488 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16487__16489 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16487 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16487__16488.call(this,nodelist,n);
case  3 :
return G__16487__16489.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16487;
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
var G__16510 = null;
var G__16510__16511 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16510__16512 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16510 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16510__16511.call(this,nodelist,n);
case  3 :
return G__16510__16512.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16510;
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
var G__16514 = null;
var G__16514__16515 = (function (coll,n){
return coll.item(n);
});
var G__16514__16516 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16514 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16514__16515.call(this,coll,n);
case  3 :
return G__16514__16516.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16514;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
