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
if(cljs.core.truth_((function (){var and__3546__auto____14257 = domina.debug;

if(cljs.core.truth_(and__3546__auto____14257))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____14257;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____14264 = content;

if(cljs.core.truth_(and__3546__auto____14264))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____14264;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____14267 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____14267))
{return or__3548__auto____14267;
} else
{var or__3548__auto____14268 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____14268))
{return or__3548__auto____14268;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____14269 = nodeseq;

if(cljs.core.truth_(and__3546__auto____14269))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____14269;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____14271 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____14271))
{return or__3548__auto____14271;
} else
{var or__3548__auto____14273 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____14273))
{return or__3548__auto____14273;
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
if(cljs.core.truth_((void 0 === domina.t14282)))
{
/**
* @constructor
*/
domina.t14282 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t14282.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t14282");
});
domina.t14282.prototype.domina$DomContent$ = true;
domina.t14282.prototype.domina$DomContent$nodes = (function (_){
var this__14292 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__14292.class_name));
});
domina.t14282.prototype.domina$DomContent$single_node = (function (_){
var this__14294 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__14294.class_name));
});
domina.t14282.prototype.cljs$core$IMeta$ = true;
domina.t14282.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14296 = this;
return this__14296.__meta;
});
domina.t14282.prototype.cljs$core$IWithMeta$ = true;
domina.t14282.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14297 = this;
return (new domina.t14282(this__14297.class_name,this__14297.by_class,__meta));
});
domina.t14282;
} else
{}
return (new domina.t14282(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__14306_SHARP_){
return p1__14306_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__14307_SHARP_,p2__14308_SHARP_){
return goog.dom.insertChildAt.call(null,p1__14307_SHARP_,p2__14308_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__14310_SHARP_,p2__14309_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__14309_SHARP_,p1__14310_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14312_SHARP_,p2__14311_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__14311_SHARP_,p1__14312_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14314_SHARP_,p2__14313_SHARP_){
return goog.dom.replaceNode.call(null,p2__14313_SHARP_,p1__14314_SHARP_);
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
var s__14326 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__14326))))
{return s__14326;
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
var G__14327__14328 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14327__14328))
{var n__14329 = cljs.core.first.call(null,G__14327__14328);
var G__14327__14330 = G__14327__14328;

while(true){
goog.style.setStyle.call(null,n__14329,cljs.core.name.call(null,name),value);
var temp__3698__auto____14331 = cljs.core.next.call(null,G__14327__14330);

if(cljs.core.truth_(temp__3698__auto____14331))
{var G__14327__14332 = temp__3698__auto____14331;

{
var G__14354 = cljs.core.first.call(null,G__14327__14332);
var G__14355 = G__14327__14332;
n__14329 = G__14354;
G__14327__14330 = G__14355;
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
var G__14358__14359 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14358__14359))
{var n__14360 = cljs.core.first.call(null,G__14358__14359);
var G__14358__14361 = G__14358__14359;

while(true){
n__14360.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____14362 = cljs.core.next.call(null,G__14358__14361);

if(cljs.core.truth_(temp__3698__auto____14362))
{var G__14358__14363 = temp__3698__auto____14362;

{
var G__14367 = cljs.core.first.call(null,G__14358__14363);
var G__14368 = G__14358__14363;
n__14360 = G__14367;
G__14358__14361 = G__14368;
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
var vec__14369__14370 = pair.split(/\s*:\s*/);
var k__14371 = cljs.core.nth.call(null,vec__14369__14370,0,null);
var v__14372 = cljs.core.nth.call(null,vec__14369__14370,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____14373 = k__14371;

if(cljs.core.truth_(and__3546__auto____14373))
{return v__14372;
} else
{return and__3546__auto____14373;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__14371.toLowerCase()),v__14372);
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
var node__14375 = domina.single_node.call(null,content);
var attrs__14376 = node__14375.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14374_SHARP_){
var attr__14377 = attrs__14376.item(p1__14374_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__14377.nodeName.toLowerCase())],[attr__14377.nodeValue]);
}),cljs.core.range.call(null,attrs__14376.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__14378__14379 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__14378__14379))
{var G__14382__14386 = cljs.core.first.call(null,G__14378__14379);
var vec__14384__14388 = G__14382__14386;
var name__14390 = cljs.core.nth.call(null,vec__14384__14388,0,null);
var value__14391 = cljs.core.nth.call(null,vec__14384__14388,1,null);
var G__14378__14393 = G__14378__14379;

var G__14382__14394 = G__14382__14386;
var G__14378__14395 = G__14378__14393;

while(true){
var vec__14396__14397 = G__14382__14394;
var name__14398 = cljs.core.nth.call(null,vec__14396__14397,0,null);
var value__14399 = cljs.core.nth.call(null,vec__14396__14397,1,null);
var G__14378__14400 = G__14378__14395;

domina.set_style_BANG_.call(null,content,name__14398,value__14399);
var temp__3698__auto____14401 = cljs.core.next.call(null,G__14378__14400);

if(cljs.core.truth_(temp__3698__auto____14401))
{var G__14378__14402 = temp__3698__auto____14401;

{
var G__14411 = cljs.core.first.call(null,G__14378__14402);
var G__14412 = G__14378__14402;
G__14382__14394 = G__14411;
G__14378__14395 = G__14412;
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
var G__14413__14415 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__14413__14415))
{var G__14417__14419 = cljs.core.first.call(null,G__14413__14415);
var vec__14418__14420 = G__14417__14419;
var name__14421 = cljs.core.nth.call(null,vec__14418__14420,0,null);
var value__14422 = cljs.core.nth.call(null,vec__14418__14420,1,null);
var G__14413__14423 = G__14413__14415;

var G__14417__14424 = G__14417__14419;
var G__14413__14425 = G__14413__14423;

while(true){
var vec__14426__14427 = G__14417__14424;
var name__14428 = cljs.core.nth.call(null,vec__14426__14427,0,null);
var value__14430 = cljs.core.nth.call(null,vec__14426__14427,1,null);
var G__14413__14431 = G__14413__14425;

domina.set_attr_BANG_.call(null,content,name__14428,value__14430);
var temp__3698__auto____14434 = cljs.core.next.call(null,G__14413__14431);

if(cljs.core.truth_(temp__3698__auto____14434))
{var G__14413__14436 = temp__3698__auto____14434;

{
var G__14445 = cljs.core.first.call(null,G__14413__14436);
var G__14446 = G__14413__14436;
G__14417__14424 = G__14445;
G__14413__14425 = G__14446;
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
var G__14450__14451 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14450__14451))
{var node__14452 = cljs.core.first.call(null,G__14450__14451);
var G__14450__14453 = G__14450__14451;

while(true){
goog.dom.classes.add.call(null,node__14452,class$);
var temp__3698__auto____14454 = cljs.core.next.call(null,G__14450__14453);

if(cljs.core.truth_(temp__3698__auto____14454))
{var G__14450__14455 = temp__3698__auto____14454;

{
var G__14480 = cljs.core.first.call(null,G__14450__14455);
var G__14483 = G__14450__14455;
node__14452 = G__14480;
G__14450__14453 = G__14483;
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
var G__14484__14485 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14484__14485))
{var node__14486 = cljs.core.first.call(null,G__14484__14485);
var G__14484__14487 = G__14484__14485;

while(true){
goog.dom.classes.remove.call(null,node__14486,class$);
var temp__3698__auto____14492 = cljs.core.next.call(null,G__14484__14487);

if(cljs.core.truth_(temp__3698__auto____14492))
{var G__14484__14493 = temp__3698__auto____14492;

{
var G__14494 = cljs.core.first.call(null,G__14484__14493);
var G__14495 = G__14484__14493;
node__14486 = G__14494;
G__14484__14487 = G__14495;
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
var text__14505 = (function (content){
return text.call(null,content,true);
});
var text__14506 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__14505.call(this,content);
case  2 :
return text__14506.call(this,content,normalize);
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
var G__14508__14509 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14508__14509))
{var node__14510 = cljs.core.first.call(null,G__14508__14509);
var G__14508__14511 = G__14508__14509;

while(true){
goog.dom.setTextContent.call(null,node__14510,value);
var temp__3698__auto____14512 = cljs.core.next.call(null,G__14508__14511);

if(cljs.core.truth_(temp__3698__auto____14512))
{var G__14508__14513 = temp__3698__auto____14512;

{
var G__14519 = cljs.core.first.call(null,G__14508__14513);
var G__14520 = G__14508__14513;
node__14510 = G__14519;
G__14508__14511 = G__14520;
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
var G__14523__14525 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14523__14525))
{var node__14527 = cljs.core.first.call(null,G__14523__14525);
var G__14523__14528 = G__14523__14525;

while(true){
goog.dom.forms.setValue.call(null,node__14527,value);
var temp__3698__auto____14533 = cljs.core.next.call(null,G__14523__14528);

if(cljs.core.truth_(temp__3698__auto____14533))
{var G__14523__14534 = temp__3698__auto____14533;

{
var G__14537 = cljs.core.first.call(null,G__14523__14534);
var G__14538 = G__14523__14534;
node__14527 = G__14537;
G__14523__14528 = G__14538;
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
var G__14544__14545 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14544__14545))
{var node__14547 = cljs.core.first.call(null,G__14544__14545);
var G__14544__14548 = G__14544__14545;

while(true){
node__14547.innerHTML = value;
var temp__3698__auto____14553 = cljs.core.next.call(null,G__14544__14548);

if(cljs.core.truth_(temp__3698__auto____14553))
{var G__14544__14554 = temp__3698__auto____14553;

{
var G__14558 = cljs.core.first.call(null,G__14544__14554);
var G__14559 = G__14544__14554;
node__14547 = G__14558;
G__14544__14548 = G__14559;
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
var parents__14563 = domina.nodes.call(null,parent_content);
var children__14564 = domina.nodes.call(null,child_content);
var first_child__14578 = (function (){var frag__14567 = document.createDocumentFragment();

var G__14568__14569 = cljs.core.seq.call(null,children__14564);

if(cljs.core.truth_(G__14568__14569))
{var child__14571 = cljs.core.first.call(null,G__14568__14569);
var G__14568__14572 = G__14568__14569;

while(true){
frag__14567.appendChild(child__14571);
var temp__3698__auto____14575 = cljs.core.next.call(null,G__14568__14572);

if(cljs.core.truth_(temp__3698__auto____14575))
{var G__14568__14577 = temp__3698__auto____14575;

{
var G__14587 = cljs.core.first.call(null,G__14568__14577);
var G__14588 = G__14568__14577;
child__14571 = G__14587;
G__14568__14572 = G__14588;
continue;
}
} else
{}
break;
}
} else
{}
return frag__14567;
})();
var other_children__14580 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__14563) - 1),(function (){
return first_child__14578.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__14563)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__14564)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__14563)))
{f.call(null,cljs.core.first.call(null,parents__14563),first_child__14578);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14541_SHARP_,p2__14542_SHARP_){
return f.call(null,p1__14541_SHARP_,p2__14542_SHARP_);
}),cljs.core.rest.call(null,parents__14563),other_children__14580));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__14589 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__14590 = (function (nl,n){
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
return lazy_nodelist__14589.call(this,nl);
case  2 :
return lazy_nodelist__14590.call(this,nl,n);
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
var inner_wrapper__14592 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__14593 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__14592));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__14593),1)))
{return inner_wrapper__14592.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__14592));
} else
{return children__14593;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__14594__14595 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___14596 = cljs.core.nth.call(null,vec__14594__14595,0,null);
var table_level__14597 = cljs.core.nth.call(null,vec__14594__14595,1,null);
var ___14598 = cljs.core.nthnext.call(null,vec__14594__14595,2);
var wrapper__14599 = domina.create_wrapper.call(null,table_level__14597);

domina.set_wrapper_html_BANG_.call(null,wrapper__14599,content);
return domina.extract_wrapper_dom.call(null,wrapper__14599,table_level__14597);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,cljs.core.str.call(null,"typof",goog.typeOf.call(null,content)));
domina.log_debug.call(null,cljs.core.str.call(null,"seq?",cljs.core.seq_QMARK_.call(null,content)));
if(cljs.core.truth_((function (){var x__5111__auto____14600 = content;

if(cljs.core.truth_((function (){var and__3546__auto____14601 = x__5111__auto____14600;

if(cljs.core.truth_(and__3546__auto____14601))
{var and__3546__auto____14602 = x__5111__auto____14600.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____14602))
{var and__3546__auto____14603 = x__5111__auto____14600.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____14603))
{return cljs.core.not.call(null,x__5111__auto____14600.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____14603;
}
} else
{return and__3546__auto____14602;
}
} else
{return and__3546__auto____14601;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5111__auto____14600);
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
if(cljs.core.truth_((function (){var x__5111__auto____14604 = content;

if(cljs.core.truth_((function (){var and__3546__auto____14605 = x__5111__auto____14604;

if(cljs.core.truth_(and__3546__auto____14605))
{var and__3546__auto____14606 = x__5111__auto____14604.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____14606))
{var and__3546__auto____14607 = x__5111__auto____14604.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____14607))
{return cljs.core.not.call(null,x__5111__auto____14604.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____14607;
}
} else
{return and__3546__auto____14606;
}
} else
{return and__3546__auto____14605;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5111__auto____14604);
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
var G__14625 = null;
var G__14625__14626 = (function (nodelist,n){
return nodelist.item(n);
});
var G__14625__14627 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__14625 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__14625__14626.call(this,nodelist,n);
case  3 :
return G__14625__14627.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14625;
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
var G__14634 = null;
var G__14634__14635 = (function (nodelist,n){
return nodelist.item(n);
});
var G__14634__14636 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__14634 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__14634__14635.call(this,nodelist,n);
case  3 :
return G__14634__14636.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14634;
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
var G__14642 = null;
var G__14642__14643 = (function (coll,n){
return coll.item(n);
});
var G__14642__14644 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__14642 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__14642__14643.call(this,coll,n);
case  3 :
return G__14642__14644.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14642;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
