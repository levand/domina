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
if(cljs.core.truth_((function (){var and__3546__auto____16213 = domina.debug;

if(cljs.core.truth_(and__3546__auto____16213))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16213;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____16241 = content;

if(cljs.core.truth_(and__3546__auto____16241))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16241;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16245 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16245))
{return or__3548__auto____16245;
} else
{var or__3548__auto____16247 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16247))
{return or__3548__auto____16247;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16252 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16252))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16252;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16255 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16255))
{return or__3548__auto____16255;
} else
{var or__3548__auto____16257 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16257))
{return or__3548__auto____16257;
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
if(cljs.core.truth_((void 0 === domina.t16272)))
{
/**
* @constructor
*/
domina.t16272 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16272.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16272");
});
domina.t16272.prototype.domina$DomContent$ = true;
domina.t16272.prototype.domina$DomContent$nodes = (function (_){
var this__16282 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16282.class_name));
});
domina.t16272.prototype.domina$DomContent$single_node = (function (_){
var this__16284 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16284.class_name));
});
domina.t16272.prototype.cljs$core$IMeta$ = true;
domina.t16272.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16287 = this;
return this__16287.__meta;
});
domina.t16272.prototype.cljs$core$IWithMeta$ = true;
domina.t16272.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16288 = this;
return (new domina.t16272(this__16288.class_name,this__16288.by_class,__meta));
});
domina.t16272;
} else
{}
return (new domina.t16272(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16294_SHARP_){
return p1__16294_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16295_SHARP_,p2__16296_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16295_SHARP_,p2__16296_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16308_SHARP_,p2__16307_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16307_SHARP_,p1__16308_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16310_SHARP_,p2__16309_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16309_SHARP_,p1__16310_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16324_SHARP_,p2__16323_SHARP_){
return goog.dom.replaceNode.call(null,p2__16323_SHARP_,p1__16324_SHARP_);
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
var s__16331 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16331))))
{return s__16331;
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
var G__16334__16337 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16334__16337))
{var n__16338 = cljs.core.first.call(null,G__16334__16337);
var G__16334__16339 = G__16334__16337;

while(true){
goog.style.setStyle.call(null,n__16338,cljs.core.name.call(null,name),value);
var temp__3698__auto____16380 = cljs.core.next.call(null,G__16334__16339);

if(cljs.core.truth_(temp__3698__auto____16380))
{var G__16334__16381 = temp__3698__auto____16380;

{
var G__16382 = cljs.core.first.call(null,G__16334__16381);
var G__16383 = G__16334__16381;
n__16338 = G__16382;
G__16334__16339 = G__16383;
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
var G__16384__16387 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16384__16387))
{var n__16388 = cljs.core.first.call(null,G__16384__16387);
var G__16384__16389 = G__16384__16387;

while(true){
n__16388.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16390 = cljs.core.next.call(null,G__16384__16389);

if(cljs.core.truth_(temp__3698__auto____16390))
{var G__16384__16391 = temp__3698__auto____16390;

{
var G__16402 = cljs.core.first.call(null,G__16384__16391);
var G__16403 = G__16384__16391;
n__16388 = G__16402;
G__16384__16389 = G__16403;
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
var vec__16404__16405 = pair.split(/\s*:\s*/);
var k__16406 = cljs.core.nth.call(null,vec__16404__16405,0,null);
var v__16407 = cljs.core.nth.call(null,vec__16404__16405,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16408 = k__16406;

if(cljs.core.truth_(and__3546__auto____16408))
{return v__16407;
} else
{return and__3546__auto____16408;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16406.toLowerCase()),v__16407);
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
var node__16419 = domina.single_node.call(null,content);
var attrs__16420 = node__16419.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16414_SHARP_){
var attr__16421 = attrs__16420.item(p1__16414_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16421.nodeName.toLowerCase())],[attr__16421.nodeValue]);
}),cljs.core.range.call(null,attrs__16420.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16426__16427 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16426__16427))
{var G__16429__16431 = cljs.core.first.call(null,G__16426__16427);
var vec__16430__16432 = G__16429__16431;
var name__16433 = cljs.core.nth.call(null,vec__16430__16432,0,null);
var value__16434 = cljs.core.nth.call(null,vec__16430__16432,1,null);
var G__16426__16435 = G__16426__16427;

var G__16429__16436 = G__16429__16431;
var G__16426__16437 = G__16426__16435;

while(true){
var vec__16442__16443 = G__16429__16436;
var name__16444 = cljs.core.nth.call(null,vec__16442__16443,0,null);
var value__16445 = cljs.core.nth.call(null,vec__16442__16443,1,null);
var G__16426__16446 = G__16426__16437;

domina.set_style_BANG_.call(null,content,name__16444,value__16445);
var temp__3698__auto____16447 = cljs.core.next.call(null,G__16426__16446);

if(cljs.core.truth_(temp__3698__auto____16447))
{var G__16426__16452 = temp__3698__auto____16447;

{
var G__16453 = cljs.core.first.call(null,G__16426__16452);
var G__16454 = G__16426__16452;
G__16429__16436 = G__16453;
G__16426__16437 = G__16454;
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
var G__16459__16460 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16459__16460))
{var G__16462__16464 = cljs.core.first.call(null,G__16459__16460);
var vec__16463__16465 = G__16462__16464;
var name__16466 = cljs.core.nth.call(null,vec__16463__16465,0,null);
var value__16467 = cljs.core.nth.call(null,vec__16463__16465,1,null);
var G__16459__16468 = G__16459__16460;

var G__16462__16469 = G__16462__16464;
var G__16459__16470 = G__16459__16468;

while(true){
var vec__16471__16472 = G__16462__16469;
var name__16473 = cljs.core.nth.call(null,vec__16471__16472,0,null);
var value__16475 = cljs.core.nth.call(null,vec__16471__16472,1,null);
var G__16459__16477 = G__16459__16470;

domina.set_attr_BANG_.call(null,content,name__16473,value__16475);
var temp__3698__auto____16485 = cljs.core.next.call(null,G__16459__16477);

if(cljs.core.truth_(temp__3698__auto____16485))
{var G__16459__16486 = temp__3698__auto____16485;

{
var G__16496 = cljs.core.first.call(null,G__16459__16486);
var G__16497 = G__16459__16486;
G__16462__16469 = G__16496;
G__16459__16470 = G__16497;
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
var G__16498__16499 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16498__16499))
{var node__16500 = cljs.core.first.call(null,G__16498__16499);
var G__16498__16501 = G__16498__16499;

while(true){
goog.dom.classes.add.call(null,node__16500,class$);
var temp__3698__auto____16502 = cljs.core.next.call(null,G__16498__16501);

if(cljs.core.truth_(temp__3698__auto____16502))
{var G__16498__16503 = temp__3698__auto____16502;

{
var G__16506 = cljs.core.first.call(null,G__16498__16503);
var G__16507 = G__16498__16503;
node__16500 = G__16506;
G__16498__16501 = G__16507;
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
var G__16508__16509 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16508__16509))
{var node__16511 = cljs.core.first.call(null,G__16508__16509);
var G__16508__16512 = G__16508__16509;

while(true){
goog.dom.classes.remove.call(null,node__16511,class$);
var temp__3698__auto____16513 = cljs.core.next.call(null,G__16508__16512);

if(cljs.core.truth_(temp__3698__auto____16513))
{var G__16508__16514 = temp__3698__auto____16513;

{
var G__16515 = cljs.core.first.call(null,G__16508__16514);
var G__16516 = G__16508__16514;
node__16511 = G__16515;
G__16508__16512 = G__16516;
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
var text__16519 = (function (content){
return text.call(null,content,true);
});
var text__16520 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16519.call(this,content);
case  2 :
return text__16520.call(this,content,normalize);
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
var G__16524__16525 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16524__16525))
{var node__16526 = cljs.core.first.call(null,G__16524__16525);
var G__16524__16527 = G__16524__16525;

while(true){
goog.dom.setTextContent.call(null,node__16526,value);
var temp__3698__auto____16528 = cljs.core.next.call(null,G__16524__16527);

if(cljs.core.truth_(temp__3698__auto____16528))
{var G__16524__16530 = temp__3698__auto____16528;

{
var G__16533 = cljs.core.first.call(null,G__16524__16530);
var G__16534 = G__16524__16530;
node__16526 = G__16533;
G__16524__16527 = G__16534;
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
var G__16535__16536 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16535__16536))
{var node__16537 = cljs.core.first.call(null,G__16535__16536);
var G__16535__16538 = G__16535__16536;

while(true){
goog.dom.forms.setValue.call(null,node__16537,value);
var temp__3698__auto____16539 = cljs.core.next.call(null,G__16535__16538);

if(cljs.core.truth_(temp__3698__auto____16539))
{var G__16535__16540 = temp__3698__auto____16539;

{
var G__16541 = cljs.core.first.call(null,G__16535__16540);
var G__16542 = G__16535__16540;
node__16537 = G__16541;
G__16535__16538 = G__16542;
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
var G__16545__16546 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16545__16546))
{var node__16547 = cljs.core.first.call(null,G__16545__16546);
var G__16545__16548 = G__16545__16546;

while(true){
node__16547.innerHTML = value;
var temp__3698__auto____16549 = cljs.core.next.call(null,G__16545__16548);

if(cljs.core.truth_(temp__3698__auto____16549))
{var G__16545__16550 = temp__3698__auto____16549;

{
var G__16551 = cljs.core.first.call(null,G__16545__16550);
var G__16552 = G__16545__16550;
node__16547 = G__16551;
G__16545__16548 = G__16552;
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
var parents__16553 = domina.nodes.call(null,parent_content);
var children__16554 = domina.nodes.call(null,child_content);
var first_child__16562 = (function (){var frag__16555 = document.createDocumentFragment();

var G__16556__16557 = cljs.core.seq.call(null,children__16554);

if(cljs.core.truth_(G__16556__16557))
{var child__16558 = cljs.core.first.call(null,G__16556__16557);
var G__16556__16559 = G__16556__16557;

while(true){
frag__16555.appendChild(child__16558);
var temp__3698__auto____16560 = cljs.core.next.call(null,G__16556__16559);

if(cljs.core.truth_(temp__3698__auto____16560))
{var G__16556__16561 = temp__3698__auto____16560;

{
var G__16564 = cljs.core.first.call(null,G__16556__16561);
var G__16565 = G__16556__16561;
child__16558 = G__16564;
G__16556__16559 = G__16565;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16555;
})();
var other_children__16563 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16553) - 1),(function (){
return first_child__16562.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16553)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16554)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16553)))
{f.call(null,cljs.core.first.call(null,parents__16553),first_child__16562);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16543_SHARP_,p2__16544_SHARP_){
return f.call(null,p1__16543_SHARP_,p2__16544_SHARP_);
}),cljs.core.rest.call(null,parents__16553),other_children__16563));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16566 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16567 = (function (nl,n){
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
return lazy_nodelist__16566.call(this,nl);
case  2 :
return lazy_nodelist__16567.call(this,nl,n);
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
var inner_wrapper__16569 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16570 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16569));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16570),1)))
{return inner_wrapper__16569.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16569));
} else
{return children__16570;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16571__16572 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16573 = cljs.core.nth.call(null,vec__16571__16572,0,null);
var table_level__16574 = cljs.core.nth.call(null,vec__16571__16572,1,null);
var ___16575 = cljs.core.nthnext.call(null,vec__16571__16572,2);
var wrapper__16576 = domina.create_wrapper.call(null,table_level__16574);

domina.set_wrapper_html_BANG_.call(null,wrapper__16576,content);
return domina.extract_wrapper_dom.call(null,wrapper__16576,table_level__16574);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.lot_debug.call(null,cljs.core.str.call(null,content));
if(cljs.core.truth_((function (){var or__3548__auto____16577 = cljs.core.seq_QMARK_.call(null,content);

if(cljs.core.truth_(or__3548__auto____16577))
{return or__3548__auto____16577;
} else
{var x__6759__auto____16578 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16579 = x__6759__auto____16578;

if(cljs.core.truth_(and__3546__auto____16579))
{var and__3546__auto____16580 = x__6759__auto____16578.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16580))
{var and__3546__auto____16581 = x__6759__auto____16578.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16581))
{return cljs.core.not.call(null,x__6759__auto____16578.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16581;
}
} else
{return and__3546__auto____16580;
}
} else
{return and__3546__auto____16579;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6759__auto____16578);
}
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6759__auto____16582 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16583 = x__6759__auto____16582;

if(cljs.core.truth_(and__3546__auto____16583))
{var and__3546__auto____16584 = x__6759__auto____16582.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16584))
{var and__3546__auto____16585 = x__6759__auto____16582.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16585))
{return cljs.core.not.call(null,x__6759__auto____16582.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16585;
}
} else
{return and__3546__auto____16584;
}
} else
{return and__3546__auto____16583;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6759__auto____16582);
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
var G__16586 = null;
var G__16586__16587 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16586__16588 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16586 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16586__16587.call(this,nodelist,n);
case  3 :
return G__16586__16588.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16586;
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
var G__16590 = null;
var G__16590__16591 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16590__16592 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16590 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16590__16591.call(this,nodelist,n);
case  3 :
return G__16590__16592.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16590;
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
var G__16594 = null;
var G__16594__16595 = (function (coll,n){
return coll.item(n);
});
var G__16594__16596 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16594 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16594__16595.call(this,coll,n);
case  3 :
return G__16594__16596.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16594;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
