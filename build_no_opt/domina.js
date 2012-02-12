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
if(cljs.core.truth_((function (){var and__3546__auto____15137 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15137))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15137;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15145 = content;

if(cljs.core.truth_(and__3546__auto____15145))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15145;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15150 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15150))
{return or__3548__auto____15150;
} else
{var or__3548__auto____15152 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15152))
{return or__3548__auto____15152;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15160 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15160))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15160;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15162 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15162))
{return or__3548__auto____15162;
} else
{var or__3548__auto____15165 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15165))
{return or__3548__auto____15165;
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
if(cljs.core.truth_((void 0 === domina.t15198)))
{
/**
* @constructor
*/
domina.t15198 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15198.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15198");
});
domina.t15198.prototype.domina$DomContent$ = true;
domina.t15198.prototype.domina$DomContent$nodes = (function (_){
var this__15214 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15214.class_name));
});
domina.t15198.prototype.domina$DomContent$single_node = (function (_){
var this__15215 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15215.class_name));
});
domina.t15198.prototype.cljs$core$IMeta$ = true;
domina.t15198.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15220 = this;
return this__15220.__meta;
});
domina.t15198.prototype.cljs$core$IWithMeta$ = true;
domina.t15198.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15221 = this;
return (new domina.t15198(this__15221.class_name,this__15221.by_class,__meta));
});
domina.t15198;
} else
{}
return (new domina.t15198(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15229_SHARP_){
return p1__15229_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15237_SHARP_,p2__15240_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15237_SHARP_,p2__15240_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15252_SHARP_,p2__15250_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15250_SHARP_,p1__15252_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15259_SHARP_,p2__15257_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15257_SHARP_,p1__15259_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15263_SHARP_,p2__15262_SHARP_){
return goog.dom.replaceNode.call(null,p2__15262_SHARP_,p1__15263_SHARP_);
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
var s__15281 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15281))))
{return s__15281;
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
var G__15282__15283 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15282__15283))
{var n__15284 = cljs.core.first.call(null,G__15282__15283);
var G__15282__15285 = G__15282__15283;

while(true){
goog.style.setStyle.call(null,n__15284,cljs.core.name.call(null,name),value);
var temp__3698__auto____15290 = cljs.core.next.call(null,G__15282__15285);

if(cljs.core.truth_(temp__3698__auto____15290))
{var G__15282__15291 = temp__3698__auto____15290;

{
var G__15292 = cljs.core.first.call(null,G__15282__15291);
var G__15293 = G__15282__15291;
n__15284 = G__15292;
G__15282__15285 = G__15293;
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
var G__15295__15297 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15295__15297))
{var n__15298 = cljs.core.first.call(null,G__15295__15297);
var G__15295__15299 = G__15295__15297;

while(true){
n__15298.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15304 = cljs.core.next.call(null,G__15295__15299);

if(cljs.core.truth_(temp__3698__auto____15304))
{var G__15295__15305 = temp__3698__auto____15304;

{
var G__15306 = cljs.core.first.call(null,G__15295__15305);
var G__15307 = G__15295__15305;
n__15298 = G__15306;
G__15295__15299 = G__15307;
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
var vec__15308__15309 = pair.split(/\s*:\s*/);
var k__15310 = cljs.core.nth.call(null,vec__15308__15309,0,null);
var v__15311 = cljs.core.nth.call(null,vec__15308__15309,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15322 = k__15310;

if(cljs.core.truth_(and__3546__auto____15322))
{return v__15311;
} else
{return and__3546__auto____15322;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15310.toLowerCase()),v__15311);
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
var node__15340 = domina.single_node.call(null,content);
var attrs__15341 = node__15340.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15329_SHARP_){
var attr__15342 = attrs__15341.item(p1__15329_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15342.nodeName.toLowerCase())],[attr__15342.nodeValue]);
}),cljs.core.range.call(null,attrs__15341.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15356__15359 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15356__15359))
{var G__15363__15367 = cljs.core.first.call(null,G__15356__15359);
var vec__15364__15368 = G__15363__15367;
var name__15369 = cljs.core.nth.call(null,vec__15364__15368,0,null);
var value__15371 = cljs.core.nth.call(null,vec__15364__15368,1,null);
var G__15356__15372 = G__15356__15359;

var G__15363__15373 = G__15363__15367;
var G__15356__15374 = G__15356__15372;

while(true){
var vec__15376__15377 = G__15363__15373;
var name__15378 = cljs.core.nth.call(null,vec__15376__15377,0,null);
var value__15379 = cljs.core.nth.call(null,vec__15376__15377,1,null);
var G__15356__15380 = G__15356__15374;

domina.set_style_BANG_.call(null,content,name__15378,value__15379);
var temp__3698__auto____15382 = cljs.core.next.call(null,G__15356__15380);

if(cljs.core.truth_(temp__3698__auto____15382))
{var G__15356__15384 = temp__3698__auto____15382;

{
var G__15391 = cljs.core.first.call(null,G__15356__15384);
var G__15416 = G__15356__15384;
G__15363__15373 = G__15391;
G__15356__15374 = G__15416;
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
var G__15417__15418 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15417__15418))
{var G__15422__15424 = cljs.core.first.call(null,G__15417__15418);
var vec__15423__15425 = G__15422__15424;
var name__15431 = cljs.core.nth.call(null,vec__15423__15425,0,null);
var value__15432 = cljs.core.nth.call(null,vec__15423__15425,1,null);
var G__15417__15433 = G__15417__15418;

var G__15422__15434 = G__15422__15424;
var G__15417__15435 = G__15417__15433;

while(true){
var vec__15436__15437 = G__15422__15434;
var name__15438 = cljs.core.nth.call(null,vec__15436__15437,0,null);
var value__15439 = cljs.core.nth.call(null,vec__15436__15437,1,null);
var G__15417__15440 = G__15417__15435;

domina.set_attr_BANG_.call(null,content,name__15438,value__15439);
var temp__3698__auto____15455 = cljs.core.next.call(null,G__15417__15440);

if(cljs.core.truth_(temp__3698__auto____15455))
{var G__15417__15457 = temp__3698__auto____15455;

{
var G__15459 = cljs.core.first.call(null,G__15417__15457);
var G__15460 = G__15417__15457;
G__15422__15434 = G__15459;
G__15417__15435 = G__15460;
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
var G__15464__15467 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15464__15467))
{var node__15468 = cljs.core.first.call(null,G__15464__15467);
var G__15464__15470 = G__15464__15467;

while(true){
goog.dom.classes.add.call(null,node__15468,class$);
var temp__3698__auto____15472 = cljs.core.next.call(null,G__15464__15470);

if(cljs.core.truth_(temp__3698__auto____15472))
{var G__15464__15474 = temp__3698__auto____15472;

{
var G__15477 = cljs.core.first.call(null,G__15464__15474);
var G__15479 = G__15464__15474;
node__15468 = G__15477;
G__15464__15470 = G__15479;
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
var G__15480__15482 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15480__15482))
{var node__15483 = cljs.core.first.call(null,G__15480__15482);
var G__15480__15484 = G__15480__15482;

while(true){
goog.dom.classes.remove.call(null,node__15483,class$);
var temp__3698__auto____15485 = cljs.core.next.call(null,G__15480__15484);

if(cljs.core.truth_(temp__3698__auto____15485))
{var G__15480__15486 = temp__3698__auto____15485;

{
var G__15490 = cljs.core.first.call(null,G__15480__15486);
var G__15491 = G__15480__15486;
node__15483 = G__15490;
G__15480__15484 = G__15491;
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
var text__15496 = (function (content){
return text.call(null,content,true);
});
var text__15497 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15496.call(this,content);
case  2 :
return text__15497.call(this,content,normalize);
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
var G__15504__15505 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15504__15505))
{var node__15506 = cljs.core.first.call(null,G__15504__15505);
var G__15504__15507 = G__15504__15505;

while(true){
goog.dom.setTextContent.call(null,node__15506,value);
var temp__3698__auto____15508 = cljs.core.next.call(null,G__15504__15507);

if(cljs.core.truth_(temp__3698__auto____15508))
{var G__15504__15523 = temp__3698__auto____15508;

{
var G__15528 = cljs.core.first.call(null,G__15504__15523);
var G__15531 = G__15504__15523;
node__15506 = G__15528;
G__15504__15507 = G__15531;
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
var G__15536__15540 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15536__15540))
{var node__15542 = cljs.core.first.call(null,G__15536__15540);
var G__15536__15544 = G__15536__15540;

while(true){
goog.dom.forms.setValue.call(null,node__15542,value);
var temp__3698__auto____15546 = cljs.core.next.call(null,G__15536__15544);

if(cljs.core.truth_(temp__3698__auto____15546))
{var G__15536__15547 = temp__3698__auto____15546;

{
var G__15552 = cljs.core.first.call(null,G__15536__15547);
var G__15553 = G__15536__15547;
node__15542 = G__15552;
G__15536__15544 = G__15553;
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
var G__15563__15564 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15563__15564))
{var node__15565 = cljs.core.first.call(null,G__15563__15564);
var G__15563__15566 = G__15563__15564;

while(true){
node__15565.innerHTML = value;
var temp__3698__auto____15567 = cljs.core.next.call(null,G__15563__15566);

if(cljs.core.truth_(temp__3698__auto____15567))
{var G__15563__15568 = temp__3698__auto____15567;

{
var G__15573 = cljs.core.first.call(null,G__15563__15568);
var G__15574 = G__15563__15568;
node__15565 = G__15573;
G__15563__15566 = G__15574;
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
var parents__15576 = domina.nodes.call(null,parent_content);
var children__15577 = domina.nodes.call(null,child_content);
var first_child__15587 = (function (){var frag__15578 = document.createDocumentFragment();

var G__15579__15580 = cljs.core.seq.call(null,children__15577);

if(cljs.core.truth_(G__15579__15580))
{var child__15581 = cljs.core.first.call(null,G__15579__15580);
var G__15579__15582 = G__15579__15580;

while(true){
frag__15578.appendChild(child__15581);
var temp__3698__auto____15583 = cljs.core.next.call(null,G__15579__15582);

if(cljs.core.truth_(temp__3698__auto____15583))
{var G__15579__15586 = temp__3698__auto____15583;

{
var G__15600 = cljs.core.first.call(null,G__15579__15586);
var G__15601 = G__15579__15586;
child__15581 = G__15600;
G__15579__15582 = G__15601;
continue;
}
} else
{}
break;
}
} else
{}
return frag__15578;
})();
var other_children__15588 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__15576) - 1),(function (){
return first_child__15587.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__15576)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__15577)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__15576)))
{f.call(null,cljs.core.first.call(null,parents__15576),first_child__15587);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15560_SHARP_,p2__15561_SHARP_){
return f.call(null,p1__15560_SHARP_,p2__15561_SHARP_);
}),cljs.core.rest.call(null,parents__15576),other_children__15588));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__15608 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__15609 = (function (nl,n){
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
return lazy_nodelist__15608.call(this,nl);
case  2 :
return lazy_nodelist__15609.call(this,nl,n);
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
var inner_wrapper__15617 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__15618 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__15617));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__15618),1)))
{return inner_wrapper__15617.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__15617));
} else
{return children__15618;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__15622__15624 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___15625 = cljs.core.nth.call(null,vec__15622__15624,0,null);
var table_level__15626 = cljs.core.nth.call(null,vec__15622__15624,1,null);
var ___15627 = cljs.core.nthnext.call(null,vec__15622__15624,2);
var wrapper__15628 = domina.create_wrapper.call(null,table_level__15626);

domina.set_wrapper_html_BANG_.call(null,wrapper__15628,content);
return domina.extract_wrapper_dom.call(null,wrapper__15628,table_level__15626);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.lot_debug.call(null,cljs.core.str.call(null,content));
if(cljs.core.truth_((function (){var x__5936__auto____15640 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15641 = x__5936__auto____15640;

if(cljs.core.truth_(and__3546__auto____15641))
{var and__3546__auto____15642 = x__5936__auto____15640.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15642))
{var and__3546__auto____15644 = x__5936__auto____15640.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15644))
{return cljs.core.not.call(null,x__5936__auto____15640.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15644;
}
} else
{return and__3546__auto____15642;
}
} else
{return and__3546__auto____15641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5936__auto____15640);
}
})()))
{domina.log_debug.call(null,"sequing content");
return cljs.core.seq.call(null,content);
} else
{domina.log_debug.call(null,"consing content");
return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5936__auto____15648 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15649 = x__5936__auto____15648;

if(cljs.core.truth_(and__3546__auto____15649))
{var and__3546__auto____15650 = x__5936__auto____15648.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15650))
{var and__3546__auto____15653 = x__5936__auto____15648.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15653))
{return cljs.core.not.call(null,x__5936__auto____15648.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15653;
}
} else
{return and__3546__auto____15650;
}
} else
{return and__3546__auto____15649;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5936__auto____15648);
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
var G__15656 = null;
var G__15656__15659 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15656__15661 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15656 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15656__15659.call(this,nodelist,n);
case  3 :
return G__15656__15661.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15656;
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
var G__15665 = null;
var G__15665__15667 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15665__15669 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15665 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15665__15667.call(this,nodelist,n);
case  3 :
return G__15665__15669.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15665;
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
var G__15676 = null;
var G__15676__15677 = (function (coll,n){
return coll.item(n);
});
var G__15676__15678 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__15676 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15676__15677.call(this,coll,n);
case  3 :
return G__15676__15678.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15676;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
