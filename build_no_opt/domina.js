goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.debug = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15837 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15837))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15837;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15841 = content;

if(cljs.core.truth_(and__3546__auto____15841))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15841;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15842 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15842))
{return or__3548__auto____15842;
} else
{var or__3548__auto____15844 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15844))
{return or__3548__auto____15844;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15846 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15846))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15846;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15848 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15848))
{return or__3548__auto____15848;
} else
{var or__3548__auto____15849 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15849))
{return or__3548__auto____15849;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
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
if(cljs.core.truth_((void 0 === domina.t15854)))
{
/**
* @constructor
*/
domina.t15854 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15854.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15854");
});
domina.t15854.prototype.domina$DomContent$ = true;
domina.t15854.prototype.domina$DomContent$nodes = (function (_){
var this__15862 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15862.class_name));
});
domina.t15854.prototype.domina$DomContent$single_node = (function (_){
var this__15865 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15865.class_name));
});
domina.t15854.prototype.cljs$core$IMeta$ = true;
domina.t15854.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15869 = this;
return this__15869.__meta;
});
domina.t15854.prototype.cljs$core$IWithMeta$ = true;
domina.t15854.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15874 = this;
return (new domina.t15854(this__15874.class_name,this__15874.by_class,__meta));
});
domina.t15854;
} else
{}
return (new domina.t15854(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15896_SHARP_){
return p1__15896_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15918_SHARP_,p2__15919_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15918_SHARP_,p2__15919_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15939_SHARP_,p2__15936_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15936_SHARP_,p1__15939_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15948_SHARP_,p2__15946_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15946_SHARP_,p1__15948_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15954_SHARP_,p2__15953_SHARP_){
return goog.dom.replaceNode.call(null,p2__15953_SHARP_,p1__15954_SHARP_);
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
var s__16002 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16002))))
{return s__16002;
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
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){
var G__16056__16058 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16056__16058))
{var n__16059 = cljs.core.first.call(null,G__16056__16058);
var G__16056__16060 = G__16056__16058;

while(true){
goog.style.setStyle.call(null,n__16059,cljs.core.name.call(null,name),value);
var temp__3698__auto____16063 = cljs.core.next.call(null,G__16056__16060);

if(cljs.core.truth_(temp__3698__auto____16063))
{var G__16056__16064 = temp__3698__auto____16063;

{
var G__16086 = cljs.core.first.call(null,G__16056__16064);
var G__16087 = G__16056__16064;
n__16059 = G__16086;
G__16056__16060 = G__16087;
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
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){
var G__16089__16091 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16089__16091))
{var n__16094 = cljs.core.first.call(null,G__16089__16091);
var G__16089__16095 = G__16089__16091;

while(true){
n__16094.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16096 = cljs.core.next.call(null,G__16089__16095);

if(cljs.core.truth_(temp__3698__auto____16096))
{var G__16089__16097 = temp__3698__auto____16096;

{
var G__16107 = cljs.core.first.call(null,G__16089__16097);
var G__16108 = G__16089__16097;
n__16094 = G__16107;
G__16089__16095 = G__16108;
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
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__16109__16110 = pair.split(/\s*:\s*/);
var k__16112 = cljs.core.nth.call(null,vec__16109__16110,0,null);
var v__16113 = cljs.core.nth.call(null,vec__16109__16110,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16114 = k__16112;

if(cljs.core.truth_(and__3546__auto____16114))
{return v__16113;
} else
{return and__3546__auto____16114;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16112.toLowerCase()),v__16113);
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
var node__16139 = domina.single_node.call(null,content);
var attrs__16140 = node__16139.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16132_SHARP_){
var attr__16142 = attrs__16140.item(p1__16132_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16142.nodeName.toLowerCase())],[attr__16142.nodeValue]);
}),cljs.core.range.call(null,attrs__16140.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16157__16160 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16157__16160))
{var G__16164__16167 = cljs.core.first.call(null,G__16157__16160);
var vec__16166__16168 = G__16164__16167;
var name__16169 = cljs.core.nth.call(null,vec__16166__16168,0,null);
var value__16170 = cljs.core.nth.call(null,vec__16166__16168,1,null);
var G__16157__16171 = G__16157__16160;

var G__16164__16172 = G__16164__16167;
var G__16157__16262 = G__16157__16171;

while(true){
var vec__16263__16264 = G__16164__16172;
var name__16265 = cljs.core.nth.call(null,vec__16263__16264,0,null);
var value__16266 = cljs.core.nth.call(null,vec__16263__16264,1,null);
var G__16157__16267 = G__16157__16262;

domina.set_style_BANG_.call(null,content,name__16265,value__16266);
var temp__3698__auto____16268 = cljs.core.next.call(null,G__16157__16267);

if(cljs.core.truth_(temp__3698__auto____16268))
{var G__16157__16269 = temp__3698__auto____16268;

{
var G__16278 = cljs.core.first.call(null,G__16157__16269);
var G__16279 = G__16157__16269;
G__16164__16172 = G__16278;
G__16157__16262 = G__16279;
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
var G__16280__16282 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16280__16282))
{var G__16285__16288 = cljs.core.first.call(null,G__16280__16282);
var vec__16287__16289 = G__16285__16288;
var name__16290 = cljs.core.nth.call(null,vec__16287__16289,0,null);
var value__16294 = cljs.core.nth.call(null,vec__16287__16289,1,null);
var G__16280__16295 = G__16280__16282;

var G__16285__16296 = G__16285__16288;
var G__16280__16297 = G__16280__16295;

while(true){
var vec__16298__16299 = G__16285__16296;
var name__16300 = cljs.core.nth.call(null,vec__16298__16299,0,null);
var value__16301 = cljs.core.nth.call(null,vec__16298__16299,1,null);
var G__16280__16302 = G__16280__16297;

domina.set_attr_BANG_.call(null,content,name__16300,value__16301);
var temp__3698__auto____16306 = cljs.core.next.call(null,G__16280__16302);

if(cljs.core.truth_(temp__3698__auto____16306))
{var G__16280__16307 = temp__3698__auto____16306;

{
var G__16345 = cljs.core.first.call(null,G__16280__16307);
var G__16346 = G__16280__16307;
G__16285__16296 = G__16345;
G__16280__16297 = G__16346;
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
var G__16351__16354 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16351__16354))
{var node__16355 = cljs.core.first.call(null,G__16351__16354);
var G__16351__16356 = G__16351__16354;

while(true){
goog.dom.classes.add.call(null,node__16355,class$);
var temp__3698__auto____16359 = cljs.core.next.call(null,G__16351__16356);

if(cljs.core.truth_(temp__3698__auto____16359))
{var G__16351__16360 = temp__3698__auto____16359;

{
var G__16369 = cljs.core.first.call(null,G__16351__16360);
var G__16370 = G__16351__16360;
node__16355 = G__16369;
G__16351__16356 = G__16370;
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
var G__16373__16374 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16373__16374))
{var node__16375 = cljs.core.first.call(null,G__16373__16374);
var G__16373__16376 = G__16373__16374;

while(true){
goog.dom.classes.remove.call(null,node__16375,class$);
var temp__3698__auto____16377 = cljs.core.next.call(null,G__16373__16376);

if(cljs.core.truth_(temp__3698__auto____16377))
{var G__16373__16378 = temp__3698__auto____16377;

{
var G__16379 = cljs.core.first.call(null,G__16373__16378);
var G__16380 = G__16373__16378;
node__16375 = G__16379;
G__16373__16376 = G__16380;
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
var text__16382 = (function (content){
return text.call(null,content,true);
});
var text__16383 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16382.call(this,content);
case  2 :
return text__16383.call(this,content,normalize);
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
var G__16390__16392 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16390__16392))
{var node__16393 = cljs.core.first.call(null,G__16390__16392);
var G__16390__16394 = G__16390__16392;

while(true){
goog.dom.setTextContent.call(null,node__16393,value);
var temp__3698__auto____16395 = cljs.core.next.call(null,G__16390__16394);

if(cljs.core.truth_(temp__3698__auto____16395))
{var G__16390__16396 = temp__3698__auto____16395;

{
var G__16397 = cljs.core.first.call(null,G__16390__16396);
var G__16398 = G__16390__16396;
node__16393 = G__16397;
G__16390__16394 = G__16398;
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
var G__16419__16420 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16419__16420))
{var node__16421 = cljs.core.first.call(null,G__16419__16420);
var G__16419__16422 = G__16419__16420;

while(true){
goog.dom.forms.setValue.call(null,node__16421,value);
var temp__3698__auto____16423 = cljs.core.next.call(null,G__16419__16422);

if(cljs.core.truth_(temp__3698__auto____16423))
{var G__16419__16424 = temp__3698__auto____16423;

{
var G__16428 = cljs.core.first.call(null,G__16419__16424);
var G__16429 = G__16419__16424;
node__16421 = G__16428;
G__16419__16422 = G__16429;
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
var G__16457__16458 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16457__16458))
{var node__16459 = cljs.core.first.call(null,G__16457__16458);
var G__16457__16460 = G__16457__16458;

while(true){
node__16459.innerHTML = value;
var temp__3698__auto____16461 = cljs.core.next.call(null,G__16457__16460);

if(cljs.core.truth_(temp__3698__auto____16461))
{var G__16457__16462 = temp__3698__auto____16461;

{
var G__16465 = cljs.core.first.call(null,G__16457__16462);
var G__16467 = G__16457__16462;
node__16459 = G__16465;
G__16457__16460 = G__16467;
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
var parents__16469 = domina.nodes.call(null,parent_content);
var children__16470 = domina.nodes.call(null,child_content);
var first_child__16485 = (function (){var frag__16474 = document.createDocumentFragment();

var G__16475__16476 = cljs.core.seq.call(null,children__16470);

if(cljs.core.truth_(G__16475__16476))
{var child__16481 = cljs.core.first.call(null,G__16475__16476);
var G__16475__16482 = G__16475__16476;

while(true){
frag__16474.appendChild(child__16481);
var temp__3698__auto____16483 = cljs.core.next.call(null,G__16475__16482);

if(cljs.core.truth_(temp__3698__auto____16483))
{var G__16475__16484 = temp__3698__auto____16483;

{
var G__16487 = cljs.core.first.call(null,G__16475__16484);
var G__16488 = G__16475__16484;
child__16481 = G__16487;
G__16475__16482 = G__16488;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16474;
})();
var other_children__16486 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16469) - 1),(function (){
return first_child__16485.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16469)))
{f.call(null,cljs.core.first.call(null,parents__16469),first_child__16485);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16454_SHARP_,p2__16455_SHARP_){
return f.call(null,p1__16454_SHARP_,p2__16455_SHARP_);
}),cljs.core.rest.call(null,parents__16469),other_children__16486));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16489 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16490 = (function (nl,n){
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
return lazy_nodelist__16489.call(this,nl);
case  2 :
return lazy_nodelist__16490.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
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
var inner_wrapper__16496 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16497 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16496));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16497),1)))
{return inner_wrapper__16496.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16496));
} else
{return children__16497;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16502__16503 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16504 = cljs.core.nth.call(null,vec__16502__16503,0,null);
var table_level__16505 = cljs.core.nth.call(null,vec__16502__16503,1,null);
var ___16506 = cljs.core.nthnext.call(null,vec__16502__16503,2);
var wrapper__16507 = domina.create_wrapper.call(null,table_level__16505);

domina.set_wrapper_html_BANG_.call(null,wrapper__16507,content);
return domina.extract_wrapper_dom.call(null,wrapper__16507,table_level__16505);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16510 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16511 = x__445__auto____16510;

if(cljs.core.truth_(and__3546__auto____16511))
{var and__3546__auto____16512 = x__445__auto____16510.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16512))
{return cljs.core.not.call(null,x__445__auto____16510.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16512;
}
} else
{return and__3546__auto____16511;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16510);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16514 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16515 = x__445__auto____16514;

if(cljs.core.truth_(and__3546__auto____16515))
{var and__3546__auto____16516 = x__445__auto____16514.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16516))
{return cljs.core.not.call(null,x__445__auto____16514.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16516;
}
} else
{return and__3546__auto____16515;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16514);
}
})()))
{return cljs.core.first.call(null,content);
} else
{return content;
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
var G__16524 = null;
var G__16524__16525 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16524__16526 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16524 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16524__16525.call(this,nodelist,n);
case  3 :
return G__16524__16526.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16524;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{alert('extending StaticNodeList');
StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16528 = null;
var G__16528__16529 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16528__16530 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16528 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16528__16529.call(this,nodelist,n);
case  3 :
return G__16528__16530.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16528;
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
var G__16532 = null;
var G__16532__16533 = (function (coll,n){
return coll.item(n);
});
var G__16532__16534 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16532 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16532__16533.call(this,coll,n);
case  3 :
return G__16532__16534.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16532;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
