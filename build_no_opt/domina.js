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
if(cljs.core.truth_((function (){var and__3546__auto____14833 = domina.debug;

if(cljs.core.truth_(and__3546__auto____14833))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____14833;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____14836 = content;

if(cljs.core.truth_(and__3546__auto____14836))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____14836;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____14837 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____14837))
{return or__3548__auto____14837;
} else
{var or__3548__auto____14838 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____14838))
{return or__3548__auto____14838;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____14881 = nodeseq;

if(cljs.core.truth_(and__3546__auto____14881))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____14881;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____14884 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____14884))
{return or__3548__auto____14884;
} else
{var or__3548__auto____14885 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____14885))
{return or__3548__auto____14885;
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
if(cljs.core.truth_((void 0 === domina.t14891)))
{
/**
* @constructor
*/
domina.t14891 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t14891.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t14891");
});
domina.t14891.prototype.domina$DomContent$ = true;
domina.t14891.prototype.domina$DomContent$nodes = (function (_){
var this__14892 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__14892.class_name));
});
domina.t14891.prototype.domina$DomContent$single_node = (function (_){
var this__14893 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__14893.class_name));
});
domina.t14891.prototype.cljs$core$IMeta$ = true;
domina.t14891.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14902 = this;
return this__14902.__meta;
});
domina.t14891.prototype.cljs$core$IWithMeta$ = true;
domina.t14891.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14905 = this;
return (new domina.t14891(this__14905.class_name,this__14905.by_class,__meta));
});
domina.t14891;
} else
{}
return (new domina.t14891(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__14908_SHARP_){
return p1__14908_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__14919_SHARP_,p2__14920_SHARP_){
return goog.dom.insertChildAt.call(null,p1__14919_SHARP_,p2__14920_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__14972_SHARP_,p2__14971_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__14971_SHARP_,p1__14972_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14976_SHARP_,p2__14975_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__14975_SHARP_,p1__14976_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14986_SHARP_,p2__14984_SHARP_){
return goog.dom.replaceNode.call(null,p2__14984_SHARP_,p1__14986_SHARP_);
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
var s__15071 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15071))))
{return s__15071;
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
var G__15073__15074 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15073__15074))
{var n__15255 = cljs.core.first.call(null,G__15073__15074);
var G__15073__15280 = G__15073__15074;

while(true){
goog.style.setStyle.call(null,n__15255,cljs.core.name.call(null,name),value);
var temp__3698__auto____15281 = cljs.core.next.call(null,G__15073__15280);

if(cljs.core.truth_(temp__3698__auto____15281))
{var G__15073__15282 = temp__3698__auto____15281;

{
var G__15294 = cljs.core.first.call(null,G__15073__15282);
var G__15295 = G__15073__15282;
n__15255 = G__15294;
G__15073__15280 = G__15295;
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
var G__15299__15301 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15299__15301))
{var n__15303 = cljs.core.first.call(null,G__15299__15301);
var G__15299__15304 = G__15299__15301;

while(true){
n__15303.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15307 = cljs.core.next.call(null,G__15299__15304);

if(cljs.core.truth_(temp__3698__auto____15307))
{var G__15299__15320 = temp__3698__auto____15307;

{
var G__15325 = cljs.core.first.call(null,G__15299__15320);
var G__15326 = G__15299__15320;
n__15303 = G__15325;
G__15299__15304 = G__15326;
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
var vec__15348__15354 = pair.split(/\s*:\s*/);
var k__15356 = cljs.core.nth.call(null,vec__15348__15354,0,null);
var v__15357 = cljs.core.nth.call(null,vec__15348__15354,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15358 = k__15356;

if(cljs.core.truth_(and__3546__auto____15358))
{return v__15357;
} else
{return and__3546__auto____15358;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15356.toLowerCase()),v__15357);
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
var node__15370 = domina.single_node.call(null,content);
var attrs__15371 = node__15370.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15362_SHARP_){
var attr__15373 = attrs__15371.item(p1__15362_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15373.nodeName.toLowerCase())],[attr__15373.nodeValue]);
}),cljs.core.range.call(null,attrs__15371.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15397__15398 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15397__15398))
{var G__15401__15404 = cljs.core.first.call(null,G__15397__15398);
var vec__15403__15405 = G__15401__15404;
var name__15406 = cljs.core.nth.call(null,vec__15403__15405,0,null);
var value__15407 = cljs.core.nth.call(null,vec__15403__15405,1,null);
var G__15397__15408 = G__15397__15398;

var G__15401__15409 = G__15401__15404;
var G__15397__15410 = G__15397__15408;

while(true){
var vec__15411__15412 = G__15401__15409;
var name__15413 = cljs.core.nth.call(null,vec__15411__15412,0,null);
var value__15414 = cljs.core.nth.call(null,vec__15411__15412,1,null);
var G__15397__15415 = G__15397__15410;

domina.set_style_BANG_.call(null,content,name__15413,value__15414);
var temp__3698__auto____15419 = cljs.core.next.call(null,G__15397__15415);

if(cljs.core.truth_(temp__3698__auto____15419))
{var G__15397__15420 = temp__3698__auto____15419;

{
var G__15425 = cljs.core.first.call(null,G__15397__15420);
var G__15426 = G__15397__15420;
G__15401__15409 = G__15425;
G__15397__15410 = G__15426;
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
var G__15428__15429 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15428__15429))
{var G__15450__15452 = cljs.core.first.call(null,G__15428__15429);
var vec__15451__15453 = G__15450__15452;
var name__15454 = cljs.core.nth.call(null,vec__15451__15453,0,null);
var value__15455 = cljs.core.nth.call(null,vec__15451__15453,1,null);
var G__15428__15456 = G__15428__15429;

var G__15450__15457 = G__15450__15452;
var G__15428__15458 = G__15428__15456;

while(true){
var vec__15459__15460 = G__15450__15457;
var name__15461 = cljs.core.nth.call(null,vec__15459__15460,0,null);
var value__15462 = cljs.core.nth.call(null,vec__15459__15460,1,null);
var G__15428__15464 = G__15428__15458;

domina.set_attr_BANG_.call(null,content,name__15461,value__15462);
var temp__3698__auto____15467 = cljs.core.next.call(null,G__15428__15464);

if(cljs.core.truth_(temp__3698__auto____15467))
{var G__15428__15468 = temp__3698__auto____15467;

{
var G__15477 = cljs.core.first.call(null,G__15428__15468);
var G__15478 = G__15428__15468;
G__15450__15457 = G__15477;
G__15428__15458 = G__15478;
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
var G__15483__15486 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15483__15486))
{var node__15490 = cljs.core.first.call(null,G__15483__15486);
var G__15483__15491 = G__15483__15486;

while(true){
goog.dom.classes.add.call(null,node__15490,class$);
var temp__3698__auto____15493 = cljs.core.next.call(null,G__15483__15491);

if(cljs.core.truth_(temp__3698__auto____15493))
{var G__15483__15495 = temp__3698__auto____15493;

{
var G__15500 = cljs.core.first.call(null,G__15483__15495);
var G__15501 = G__15483__15495;
node__15490 = G__15500;
G__15483__15491 = G__15501;
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
var G__15502__15503 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15502__15503))
{var node__15505 = cljs.core.first.call(null,G__15502__15503);
var G__15502__15506 = G__15502__15503;

while(true){
goog.dom.classes.remove.call(null,node__15505,class$);
var temp__3698__auto____15508 = cljs.core.next.call(null,G__15502__15506);

if(cljs.core.truth_(temp__3698__auto____15508))
{var G__15502__15510 = temp__3698__auto____15508;

{
var G__15518 = cljs.core.first.call(null,G__15502__15510);
var G__15519 = G__15502__15510;
node__15505 = G__15518;
G__15502__15506 = G__15519;
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
var text__15559 = (function (content){
return text.call(null,content,true);
});
var text__15560 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15559.call(this,content);
case  2 :
return text__15560.call(this,content,normalize);
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
var G__15568__15569 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15568__15569))
{var node__15570 = cljs.core.first.call(null,G__15568__15569);
var G__15568__15571 = G__15568__15569;

while(true){
goog.dom.setTextContent.call(null,node__15570,value);
var temp__3698__auto____15572 = cljs.core.next.call(null,G__15568__15571);

if(cljs.core.truth_(temp__3698__auto____15572))
{var G__15568__15573 = temp__3698__auto____15572;

{
var G__15576 = cljs.core.first.call(null,G__15568__15573);
var G__15577 = G__15568__15573;
node__15570 = G__15576;
G__15568__15571 = G__15577;
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
var G__15586__15588 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15586__15588))
{var node__15590 = cljs.core.first.call(null,G__15586__15588);
var G__15586__15591 = G__15586__15588;

while(true){
goog.dom.forms.setValue.call(null,node__15590,value);
var temp__3698__auto____15592 = cljs.core.next.call(null,G__15586__15591);

if(cljs.core.truth_(temp__3698__auto____15592))
{var G__15586__15593 = temp__3698__auto____15592;

{
var G__15594 = cljs.core.first.call(null,G__15586__15593);
var G__15595 = G__15586__15593;
node__15590 = G__15594;
G__15586__15591 = G__15595;
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
var G__15602__15603 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15602__15603))
{var node__15604 = cljs.core.first.call(null,G__15602__15603);
var G__15602__15605 = G__15602__15603;

while(true){
node__15604.innerHTML = value;
var temp__3698__auto____15606 = cljs.core.next.call(null,G__15602__15605);

if(cljs.core.truth_(temp__3698__auto____15606))
{var G__15602__15607 = temp__3698__auto____15606;

{
var G__15616 = cljs.core.first.call(null,G__15602__15607);
var G__15617 = G__15602__15607;
node__15604 = G__15616;
G__15602__15605 = G__15617;
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
var parents__15618 = domina.nodes.call(null,parent_content);
var children__15619 = domina.nodes.call(null,child_content);
var first_child__15627 = (function (){var frag__15620 = document.createDocumentFragment();

var G__15621__15622 = cljs.core.seq.call(null,children__15619);

if(cljs.core.truth_(G__15621__15622))
{var child__15623 = cljs.core.first.call(null,G__15621__15622);
var G__15621__15624 = G__15621__15622;

while(true){
frag__15620.appendChild(child__15623);
var temp__3698__auto____15625 = cljs.core.next.call(null,G__15621__15624);

if(cljs.core.truth_(temp__3698__auto____15625))
{var G__15621__15626 = temp__3698__auto____15625;

{
var G__15647 = cljs.core.first.call(null,G__15621__15626);
var G__15648 = G__15621__15626;
child__15623 = G__15647;
G__15621__15624 = G__15648;
continue;
}
} else
{}
break;
}
} else
{}
return frag__15620;
})();
var other_children__15642 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__15618) - 1),(function (){
return first_child__15627.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__15618)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__15619)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__15618)))
{f.call(null,cljs.core.first.call(null,parents__15618),first_child__15627);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15600_SHARP_,p2__15601_SHARP_){
return f.call(null,p1__15600_SHARP_,p2__15601_SHARP_);
}),cljs.core.rest.call(null,parents__15618),other_children__15642));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__15649 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__15650 = (function (nl,n){
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
return lazy_nodelist__15649.call(this,nl);
case  2 :
return lazy_nodelist__15650.call(this,nl,n);
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
var inner_wrapper__15652 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__15653 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__15652));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__15653),1)))
{return inner_wrapper__15652.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__15652));
} else
{return children__15653;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__15664__15665 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___15666 = cljs.core.nth.call(null,vec__15664__15665,0,null);
var table_level__15667 = cljs.core.nth.call(null,vec__15664__15665,1,null);
var ___15668 = cljs.core.nthnext.call(null,vec__15664__15665,2);
var wrapper__15669 = domina.create_wrapper.call(null,table_level__15667);

domina.set_wrapper_html_BANG_.call(null,wrapper__15669,content);
return domina.extract_wrapper_dom.call(null,wrapper__15669,table_level__15667);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5935__auto____15670 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15671 = x__5935__auto____15670;

if(cljs.core.truth_(and__3546__auto____15671))
{var and__3546__auto____15672 = x__5935__auto____15670.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15672))
{var and__3546__auto____15673 = x__5935__auto____15670.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15673))
{return cljs.core.not.call(null,x__5935__auto____15670.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15673;
}
} else
{return and__3546__auto____15672;
}
} else
{return and__3546__auto____15671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5935__auto____15670);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5935__auto____15674 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15675 = x__5935__auto____15674;

if(cljs.core.truth_(and__3546__auto____15675))
{var and__3546__auto____15676 = x__5935__auto____15674.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15676))
{var and__3546__auto____15677 = x__5935__auto____15674.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15677))
{return cljs.core.not.call(null,x__5935__auto____15674.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15677;
}
} else
{return and__3546__auto____15676;
}
} else
{return and__3546__auto____15675;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5935__auto____15674);
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
var G__15678 = null;
var G__15678__15679 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15678__15680 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15678 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15678__15679.call(this,nodelist,n);
case  3 :
return G__15678__15680.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15678;
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
var G__15682 = null;
var G__15682__15683 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15682__15684 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15682 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15682__15683.call(this,nodelist,n);
case  3 :
return G__15682__15684.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15682;
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
var G__15686 = null;
var G__15686__15687 = (function (coll,n){
return coll.item(n);
});
var G__15686__15688 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__15686 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15686__15687.call(this,coll,n);
case  3 :
return G__15686__15688.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15686;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
