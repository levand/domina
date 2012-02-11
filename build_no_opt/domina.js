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
if(cljs.core.truth_((function (){var and__3546__auto____16180 = domina.debug;

if(cljs.core.truth_(and__3546__auto____16180))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16180;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____16189 = content;

if(cljs.core.truth_(and__3546__auto____16189))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16189;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16190 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16190))
{return or__3548__auto____16190;
} else
{var or__3548__auto____16193 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16193))
{return or__3548__auto____16193;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16194 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16194))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16194;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16195 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16195))
{return or__3548__auto____16195;
} else
{var or__3548__auto____16196 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16196))
{return or__3548__auto____16196;
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
if(cljs.core.truth_((void 0 === domina.t16210)))
{
/**
* @constructor
*/
domina.t16210 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16210.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16210");
});
domina.t16210.prototype.domina$DomContent$ = true;
domina.t16210.prototype.domina$DomContent$nodes = (function (_){
var this__16215 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16215.class_name));
});
domina.t16210.prototype.domina$DomContent$single_node = (function (_){
var this__16218 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16218.class_name));
});
domina.t16210.prototype.cljs$core$IMeta$ = true;
domina.t16210.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16220 = this;
return this__16220.__meta;
});
domina.t16210.prototype.cljs$core$IWithMeta$ = true;
domina.t16210.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16274 = this;
return (new domina.t16210(this__16274.class_name,this__16274.by_class,__meta));
});
domina.t16210;
} else
{}
return (new domina.t16210(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16291_SHARP_){
return p1__16291_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16306_SHARP_,p2__16307_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16306_SHARP_,p2__16307_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16311_SHARP_,p2__16310_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16310_SHARP_,p1__16311_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16314_SHARP_,p2__16313_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16313_SHARP_,p1__16314_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16319_SHARP_,p2__16318_SHARP_){
return goog.dom.replaceNode.call(null,p2__16318_SHARP_,p1__16319_SHARP_);
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
var s__16325 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16325))))
{return s__16325;
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
var G__16336__16337 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16336__16337))
{var n__16340 = cljs.core.first.call(null,G__16336__16337);
var G__16336__16341 = G__16336__16337;

while(true){
goog.style.setStyle.call(null,n__16340,cljs.core.name.call(null,name),value);
var temp__3698__auto____16345 = cljs.core.next.call(null,G__16336__16341);

if(cljs.core.truth_(temp__3698__auto____16345))
{var G__16336__16350 = temp__3698__auto____16345;

{
var G__16357 = cljs.core.first.call(null,G__16336__16350);
var G__16358 = G__16336__16350;
n__16340 = G__16357;
G__16336__16341 = G__16358;
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
var G__16364__16367 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16364__16367))
{var n__16369 = cljs.core.first.call(null,G__16364__16367);
var G__16364__16370 = G__16364__16367;

while(true){
n__16369.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16371 = cljs.core.next.call(null,G__16364__16370);

if(cljs.core.truth_(temp__3698__auto____16371))
{var G__16364__16372 = temp__3698__auto____16371;

{
var G__16373 = cljs.core.first.call(null,G__16364__16372);
var G__16374 = G__16364__16372;
n__16369 = G__16373;
G__16364__16370 = G__16374;
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
var vec__16376__16378 = pair.split(/\s*:\s*/);
var k__16379 = cljs.core.nth.call(null,vec__16376__16378,0,null);
var v__16380 = cljs.core.nth.call(null,vec__16376__16378,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16381 = k__16379;

if(cljs.core.truth_(and__3546__auto____16381))
{return v__16380;
} else
{return and__3546__auto____16381;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16379.toLowerCase()),v__16380);
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
var node__16389 = domina.single_node.call(null,content);
var attrs__16390 = node__16389.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16383_SHARP_){
var attr__16392 = attrs__16390.item(p1__16383_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16392.nodeName.toLowerCase())],[attr__16392.nodeValue]);
}),cljs.core.range.call(null,attrs__16390.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16399__16400 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16399__16400))
{var G__16402__16404 = cljs.core.first.call(null,G__16399__16400);
var vec__16403__16405 = G__16402__16404;
var name__16406 = cljs.core.nth.call(null,vec__16403__16405,0,null);
var value__16407 = cljs.core.nth.call(null,vec__16403__16405,1,null);
var G__16399__16408 = G__16399__16400;

var G__16402__16409 = G__16402__16404;
var G__16399__16410 = G__16399__16408;

while(true){
var vec__16411__16412 = G__16402__16409;
var name__16413 = cljs.core.nth.call(null,vec__16411__16412,0,null);
var value__16414 = cljs.core.nth.call(null,vec__16411__16412,1,null);
var G__16399__16415 = G__16399__16410;

domina.set_style_BANG_.call(null,content,name__16413,value__16414);
var temp__3698__auto____16416 = cljs.core.next.call(null,G__16399__16415);

if(cljs.core.truth_(temp__3698__auto____16416))
{var G__16399__16417 = temp__3698__auto____16416;

{
var G__16421 = cljs.core.first.call(null,G__16399__16417);
var G__16422 = G__16399__16417;
G__16402__16409 = G__16421;
G__16399__16410 = G__16422;
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
var G__16423__16424 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16423__16424))
{var G__16426__16428 = cljs.core.first.call(null,G__16423__16424);
var vec__16427__16429 = G__16426__16428;
var name__16430 = cljs.core.nth.call(null,vec__16427__16429,0,null);
var value__16431 = cljs.core.nth.call(null,vec__16427__16429,1,null);
var G__16423__16432 = G__16423__16424;

var G__16426__16433 = G__16426__16428;
var G__16423__16434 = G__16423__16432;

while(true){
var vec__16435__16436 = G__16426__16433;
var name__16437 = cljs.core.nth.call(null,vec__16435__16436,0,null);
var value__16438 = cljs.core.nth.call(null,vec__16435__16436,1,null);
var G__16423__16439 = G__16423__16434;

domina.set_attr_BANG_.call(null,content,name__16437,value__16438);
var temp__3698__auto____16440 = cljs.core.next.call(null,G__16423__16439);

if(cljs.core.truth_(temp__3698__auto____16440))
{var G__16423__16441 = temp__3698__auto____16440;

{
var G__16444 = cljs.core.first.call(null,G__16423__16441);
var G__16445 = G__16423__16441;
G__16426__16433 = G__16444;
G__16423__16434 = G__16445;
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
var G__16447__16451 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16447__16451))
{var node__16454 = cljs.core.first.call(null,G__16447__16451);
var G__16447__16455 = G__16447__16451;

while(true){
goog.dom.classes.add.call(null,node__16454,class$);
var temp__3698__auto____16456 = cljs.core.next.call(null,G__16447__16455);

if(cljs.core.truth_(temp__3698__auto____16456))
{var G__16447__16457 = temp__3698__auto____16456;

{
var G__16458 = cljs.core.first.call(null,G__16447__16457);
var G__16459 = G__16447__16457;
node__16454 = G__16458;
G__16447__16455 = G__16459;
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
var G__16461__16463 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16461__16463))
{var node__16465 = cljs.core.first.call(null,G__16461__16463);
var G__16461__16466 = G__16461__16463;

while(true){
goog.dom.classes.remove.call(null,node__16465,class$);
var temp__3698__auto____16468 = cljs.core.next.call(null,G__16461__16466);

if(cljs.core.truth_(temp__3698__auto____16468))
{var G__16461__16469 = temp__3698__auto____16468;

{
var G__16473 = cljs.core.first.call(null,G__16461__16469);
var G__16474 = G__16461__16469;
node__16465 = G__16473;
G__16461__16466 = G__16474;
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
var text__16476 = (function (content){
return text.call(null,content,true);
});
var text__16477 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16476.call(this,content);
case  2 :
return text__16477.call(this,content,normalize);
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
var G__16479__16480 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16479__16480))
{var node__16481 = cljs.core.first.call(null,G__16479__16480);
var G__16479__16482 = G__16479__16480;

while(true){
goog.dom.setTextContent.call(null,node__16481,value);
var temp__3698__auto____16483 = cljs.core.next.call(null,G__16479__16482);

if(cljs.core.truth_(temp__3698__auto____16483))
{var G__16479__16484 = temp__3698__auto____16483;

{
var G__16489 = cljs.core.first.call(null,G__16479__16484);
var G__16490 = G__16479__16484;
node__16481 = G__16489;
G__16479__16482 = G__16490;
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
var G__16491__16492 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16491__16492))
{var node__16493 = cljs.core.first.call(null,G__16491__16492);
var G__16491__16494 = G__16491__16492;

while(true){
goog.dom.forms.setValue.call(null,node__16493,value);
var temp__3698__auto____16495 = cljs.core.next.call(null,G__16491__16494);

if(cljs.core.truth_(temp__3698__auto____16495))
{var G__16491__16496 = temp__3698__auto____16495;

{
var G__16497 = cljs.core.first.call(null,G__16491__16496);
var G__16498 = G__16491__16496;
node__16493 = G__16497;
G__16491__16494 = G__16498;
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
var G__16505__16506 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16505__16506))
{var node__16507 = cljs.core.first.call(null,G__16505__16506);
var G__16505__16508 = G__16505__16506;

while(true){
node__16507.innerHTML = value;
var temp__3698__auto____16509 = cljs.core.next.call(null,G__16505__16508);

if(cljs.core.truth_(temp__3698__auto____16509))
{var G__16505__16510 = temp__3698__auto____16509;

{
var G__16515 = cljs.core.first.call(null,G__16505__16510);
var G__16516 = G__16505__16510;
node__16507 = G__16515;
G__16505__16508 = G__16516;
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
var parents__16517 = domina.nodes.call(null,parent_content);
var children__16518 = domina.nodes.call(null,child_content);
var first_child__16526 = (function (){var frag__16519 = document.createDocumentFragment();

var G__16520__16521 = cljs.core.seq.call(null,children__16518);

if(cljs.core.truth_(G__16520__16521))
{var child__16522 = cljs.core.first.call(null,G__16520__16521);
var G__16520__16523 = G__16520__16521;

while(true){
frag__16519.appendChild(child__16522);
var temp__3698__auto____16524 = cljs.core.next.call(null,G__16520__16523);

if(cljs.core.truth_(temp__3698__auto____16524))
{var G__16520__16525 = temp__3698__auto____16524;

{
var G__16532 = cljs.core.first.call(null,G__16520__16525);
var G__16533 = G__16520__16525;
child__16522 = G__16532;
G__16520__16523 = G__16533;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16519;
})();
var other_children__16530 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16517) - 1),(function (){
return first_child__16526.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16517)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16518)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16517)))
{f.call(null,cljs.core.first.call(null,parents__16517),first_child__16526);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16503_SHARP_,p2__16504_SHARP_){
return f.call(null,p1__16503_SHARP_,p2__16504_SHARP_);
}),cljs.core.rest.call(null,parents__16517),other_children__16530));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16537 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16538 = (function (nl,n){
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
return lazy_nodelist__16537.call(this,nl);
case  2 :
return lazy_nodelist__16538.call(this,nl,n);
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
var inner_wrapper__16546 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16547 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16546));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16547),1)))
{return inner_wrapper__16546.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16546));
} else
{return children__16547;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16552__16553 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16554 = cljs.core.nth.call(null,vec__16552__16553,0,null);
var table_level__16555 = cljs.core.nth.call(null,vec__16552__16553,1,null);
var ___16556 = cljs.core.nthnext.call(null,vec__16552__16553,2);
var wrapper__16557 = domina.create_wrapper.call(null,table_level__16555);

domina.set_wrapper_html_BANG_.call(null,wrapper__16557,content);
return domina.extract_wrapper_dom.call(null,wrapper__16557,table_level__16555);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,typeof content);
if(cljs.core.truth_((function (){var x__6751__auto____16558 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16559 = x__6751__auto____16558;

if(cljs.core.truth_(and__3546__auto____16559))
{var and__3546__auto____16560 = x__6751__auto____16558.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16560))
{var and__3546__auto____16561 = x__6751__auto____16558.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16561))
{return cljs.core.not.call(null,x__6751__auto____16558.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16561;
}
} else
{return and__3546__auto____16560;
}
} else
{return and__3546__auto____16559;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16558);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6751__auto____16563 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16565 = x__6751__auto____16563;

if(cljs.core.truth_(and__3546__auto____16565))
{var and__3546__auto____16566 = x__6751__auto____16563.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16566))
{var and__3546__auto____16567 = x__6751__auto____16563.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16567))
{return cljs.core.not.call(null,x__6751__auto____16563.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16567;
}
} else
{return and__3546__auto____16566;
}
} else
{return and__3546__auto____16565;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16563);
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
var G__16581 = null;
var G__16581__16582 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16581__16583 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16581 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16581__16582.call(this,nodelist,n);
case  3 :
return G__16581__16583.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16581;
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
var G__16585 = null;
var G__16585__16586 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16585__16587 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16585 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16585__16586.call(this,nodelist,n);
case  3 :
return G__16585__16587.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16585;
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
var G__16589 = null;
var G__16589__16590 = (function (coll,n){
return coll.item(n);
});
var G__16589__16591 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16589 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16589__16590.call(this,coll,n);
case  3 :
return G__16589__16591.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16589;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
