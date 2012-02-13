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
if(cljs.core.truth_((function (){var and__3546__auto____16272 = content;

if(cljs.core.truth_(and__3546__auto____16272))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16272;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16277 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16277))
{return or__3548__auto____16277;
} else
{var or__3548__auto____16280 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16280))
{return or__3548__auto____16280;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16284 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16284))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16284;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16285 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16285))
{return or__3548__auto____16285;
} else
{var or__3548__auto____16288 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16288))
{return or__3548__auto____16288;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16292 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16292))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16292;
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
if(cljs.core.truth_((void 0 === domina.t16307)))
{
/**
* @constructor
*/
domina.t16307 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16307.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16307");
});
domina.t16307.prototype.domina$DomContent$ = true;
domina.t16307.prototype.domina$DomContent$nodes = (function (_){
var this__16310 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16310.class_name)));
});
domina.t16307.prototype.domina$DomContent$single_node = (function (_){
var this__16312 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16312.class_name)));
});
domina.t16307.prototype.cljs$core$IMeta$ = true;
domina.t16307.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16314 = this;
return this__16314.__meta;
});
domina.t16307.prototype.cljs$core$IWithMeta$ = true;
domina.t16307.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16315 = this;
return (new domina.t16307(this__16315.class_name,this__16315.by_class,__meta));
});
domina.t16307;
} else
{}
return (new domina.t16307(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16320_SHARP_){
return p1__16320_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16321_SHARP_,p2__16322_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16321_SHARP_,p2__16322_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16332_SHARP_,p2__16331_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16331_SHARP_,p1__16332_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16336_SHARP_,p2__16335_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16335_SHARP_,p1__16336_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16342_SHARP_,p2__16341_SHARP_){
return goog.dom.replaceNode.call(null,p2__16341_SHARP_,p1__16342_SHARP_);
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
var s__16346 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16346))))
{return s__16346;
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
var G__16353__16356 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16353__16356))
{var n__16357 = cljs.core.first.call(null,G__16353__16356);
var G__16353__16358 = G__16353__16356;

while(true){
goog.style.setStyle.call(null,n__16357,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16361 = cljs.core.next.call(null,G__16353__16358);

if(cljs.core.truth_(temp__3698__auto____16361))
{var G__16353__16362 = temp__3698__auto____16361;

{
var G__16396 = cljs.core.first.call(null,G__16353__16362);
var G__16397 = G__16353__16362;
n__16357 = G__16396;
G__16353__16358 = G__16397;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16401){
var content = cljs.core.first(arglist__16401);
var name = cljs.core.first(cljs.core.next(arglist__16401));
var value = cljs.core.rest(cljs.core.next(arglist__16401));
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
var G__16404__16412 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16404__16412))
{var n__16424 = cljs.core.first.call(null,G__16404__16412);
var G__16404__16425 = G__16404__16412;

while(true){
n__16424.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16426 = cljs.core.next.call(null,G__16404__16425);

if(cljs.core.truth_(temp__3698__auto____16426))
{var G__16404__16427 = temp__3698__auto____16426;

{
var G__16428 = cljs.core.first.call(null,G__16404__16427);
var G__16429 = G__16404__16427;
n__16424 = G__16428;
G__16404__16425 = G__16429;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16430){
var content = cljs.core.first(arglist__16430);
var name = cljs.core.first(cljs.core.next(arglist__16430));
var value = cljs.core.rest(cljs.core.next(arglist__16430));
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
var vec__16431__16432 = pair.split(/\s*:\s*/);
var k__16433 = cljs.core.nth.call(null,vec__16431__16432,0,null);
var v__16434 = cljs.core.nth.call(null,vec__16431__16432,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16435 = k__16433;

if(cljs.core.truth_(and__3546__auto____16435))
{return v__16434;
} else
{return and__3546__auto____16435;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16433.toLowerCase()),v__16434);
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
var node__16441 = domina.single_node.call(null,content);
var attrs__16442 = node__16441.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16440_SHARP_){
var attr__16443 = attrs__16442.item(p1__16440_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16443.nodeName.toLowerCase())],[attr__16443.nodeValue]);
}),cljs.core.range.call(null,attrs__16442.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16444__16445 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16444__16445))
{var G__16449__16451 = cljs.core.first.call(null,G__16444__16445);
var vec__16450__16452 = G__16449__16451;
var name__16453 = cljs.core.nth.call(null,vec__16450__16452,0,null);
var value__16454 = cljs.core.nth.call(null,vec__16450__16452,1,null);
var G__16444__16455 = G__16444__16445;

var G__16449__16456 = G__16449__16451;
var G__16444__16457 = G__16444__16455;

while(true){
var vec__16458__16459 = G__16449__16456;
var name__16460 = cljs.core.nth.call(null,vec__16458__16459,0,null);
var value__16461 = cljs.core.nth.call(null,vec__16458__16459,1,null);
var G__16444__16462 = G__16444__16457;

domina.set_style_BANG_.call(null,content,name__16460,value__16461);
var temp__3698__auto____16463 = cljs.core.next.call(null,G__16444__16462);

if(cljs.core.truth_(temp__3698__auto____16463))
{var G__16444__16464 = temp__3698__auto____16463;

{
var G__16471 = cljs.core.first.call(null,G__16444__16464);
var G__16472 = G__16444__16464;
G__16449__16456 = G__16471;
G__16444__16457 = G__16472;
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
var G__16473__16474 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16473__16474))
{var G__16478__16481 = cljs.core.first.call(null,G__16473__16474);
var vec__16480__16482 = G__16478__16481;
var name__16484 = cljs.core.nth.call(null,vec__16480__16482,0,null);
var value__16485 = cljs.core.nth.call(null,vec__16480__16482,1,null);
var G__16473__16486 = G__16473__16474;

var G__16478__16487 = G__16478__16481;
var G__16473__16488 = G__16473__16486;

while(true){
var vec__16489__16490 = G__16478__16487;
var name__16491 = cljs.core.nth.call(null,vec__16489__16490,0,null);
var value__16492 = cljs.core.nth.call(null,vec__16489__16490,1,null);
var G__16473__16493 = G__16473__16488;

domina.set_attr_BANG_.call(null,content,name__16491,value__16492);
var temp__3698__auto____16494 = cljs.core.next.call(null,G__16473__16493);

if(cljs.core.truth_(temp__3698__auto____16494))
{var G__16473__16496 = temp__3698__auto____16494;

{
var G__16500 = cljs.core.first.call(null,G__16473__16496);
var G__16501 = G__16473__16496;
G__16478__16487 = G__16500;
G__16473__16488 = G__16501;
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
var G__16502__16503 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16502__16503))
{var node__16504 = cljs.core.first.call(null,G__16502__16503);
var G__16502__16505 = G__16502__16503;

while(true){
goog.dom.classes.add.call(null,node__16504,class$);
var temp__3698__auto____16506 = cljs.core.next.call(null,G__16502__16505);

if(cljs.core.truth_(temp__3698__auto____16506))
{var G__16502__16507 = temp__3698__auto____16506;

{
var G__16508 = cljs.core.first.call(null,G__16502__16507);
var G__16509 = G__16502__16507;
node__16504 = G__16508;
G__16502__16505 = G__16509;
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
var G__16510__16511 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16510__16511))
{var node__16512 = cljs.core.first.call(null,G__16510__16511);
var G__16510__16513 = G__16510__16511;

while(true){
goog.dom.classes.remove.call(null,node__16512,class$);
var temp__3698__auto____16514 = cljs.core.next.call(null,G__16510__16513);

if(cljs.core.truth_(temp__3698__auto____16514))
{var G__16510__16515 = temp__3698__auto____16514;

{
var G__16516 = cljs.core.first.call(null,G__16510__16515);
var G__16517 = G__16510__16515;
node__16512 = G__16516;
G__16510__16513 = G__16517;
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
var text__16540 = (function (content){
return text.call(null,content,true);
});
var text__16541 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16540.call(this,content);
case  2 :
return text__16541.call(this,content,normalize);
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
var G__16546__16547 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16546__16547))
{var node__16548 = cljs.core.first.call(null,G__16546__16547);
var G__16546__16549 = G__16546__16547;

while(true){
goog.dom.setTextContent.call(null,node__16548,value);
var temp__3698__auto____16550 = cljs.core.next.call(null,G__16546__16549);

if(cljs.core.truth_(temp__3698__auto____16550))
{var G__16546__16551 = temp__3698__auto____16550;

{
var G__16554 = cljs.core.first.call(null,G__16546__16551);
var G__16555 = G__16546__16551;
node__16548 = G__16554;
G__16546__16549 = G__16555;
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
var G__16561__16562 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16561__16562))
{var node__16563 = cljs.core.first.call(null,G__16561__16562);
var G__16561__16564 = G__16561__16562;

while(true){
goog.dom.forms.setValue.call(null,node__16563,value);
var temp__3698__auto____16565 = cljs.core.next.call(null,G__16561__16564);

if(cljs.core.truth_(temp__3698__auto____16565))
{var G__16561__16566 = temp__3698__auto____16565;

{
var G__16567 = cljs.core.first.call(null,G__16561__16566);
var G__16568 = G__16561__16566;
node__16563 = G__16567;
G__16561__16564 = G__16568;
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
var G__16573__16574 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16573__16574))
{var node__16576 = cljs.core.first.call(null,G__16573__16574);
var G__16573__16577 = G__16573__16574;

while(true){
node__16576.innerHTML = value;
var temp__3698__auto____16578 = cljs.core.next.call(null,G__16573__16577);

if(cljs.core.truth_(temp__3698__auto____16578))
{var G__16573__16580 = temp__3698__auto____16578;

{
var G__16585 = cljs.core.first.call(null,G__16573__16580);
var G__16586 = G__16573__16580;
node__16576 = G__16585;
G__16573__16577 = G__16586;
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
var parents__16587 = domina.nodes.call(null,parent_content);
var children__16588 = domina.nodes.call(null,child_content);
var first_child__16596 = (function (){var frag__16589 = document.createDocumentFragment();

var G__16590__16591 = cljs.core.seq.call(null,children__16588);

if(cljs.core.truth_(G__16590__16591))
{var child__16592 = cljs.core.first.call(null,G__16590__16591);
var G__16590__16593 = G__16590__16591;

while(true){
frag__16589.appendChild(child__16592);
var temp__3698__auto____16594 = cljs.core.next.call(null,G__16590__16593);

if(cljs.core.truth_(temp__3698__auto____16594))
{var G__16590__16595 = temp__3698__auto____16594;

{
var G__16598 = cljs.core.first.call(null,G__16590__16595);
var G__16599 = G__16590__16595;
child__16592 = G__16598;
G__16590__16593 = G__16599;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16589;
})();
var other_children__16597 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16587) - 1),(function (){
return first_child__16596.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16587)))
{f.call(null,cljs.core.first.call(null,parents__16587),first_child__16596);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16570_SHARP_,p2__16571_SHARP_){
return f.call(null,p1__16570_SHARP_,p2__16571_SHARP_);
}),cljs.core.rest.call(null,parents__16587),other_children__16597));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16600 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16601 = (function (nl,n){
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
return lazy_nl_via_item__16600.call(this,nl);
case  2 :
return lazy_nl_via_item__16601.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16603 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16604 = (function (nl,n){
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
return lazy_nl_via_array_ref__16603.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16604.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6749__auto____16606 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16607 = x__6749__auto____16606;

if(cljs.core.truth_(and__3546__auto____16607))
{var and__3546__auto____16608 = x__6749__auto____16606.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16608))
{var and__3546__auto____16609 = x__6749__auto____16606.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16609))
{return cljs.core.not.call(null,x__6749__auto____16606.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16609;
}
} else
{return and__3546__auto____16608;
}
} else
{return and__3546__auto____16607;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16606);
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
var inner_wrapper__16610 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16611 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16610));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16611),1)))
{return inner_wrapper__16610.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16610));
} else
{return children__16611;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16612__16613 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16614 = cljs.core.nth.call(null,vec__16612__16613,0,null);
var table_level__16615 = cljs.core.nth.call(null,vec__16612__16613,1,null);
var ___16616 = cljs.core.nthnext.call(null,vec__16612__16613,2);
var wrapper__16617 = domina.create_wrapper.call(null,table_level__16615);

domina.set_wrapper_html_BANG_.call(null,wrapper__16617,content);
return domina.extract_wrapper_dom.call(null,wrapper__16617,table_level__16615);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16618 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16619 = x__6749__auto____16618;

if(cljs.core.truth_(and__3546__auto____16619))
{var and__3546__auto____16620 = x__6749__auto____16618.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16620))
{var and__3546__auto____16621 = x__6749__auto____16618.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16621))
{return cljs.core.not.call(null,x__6749__auto____16618.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16621;
}
} else
{return and__3546__auto____16620;
}
} else
{return and__3546__auto____16619;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16618);
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
if(cljs.core.truth_((function (){var x__6749__auto____16622 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16623 = x__6749__auto____16622;

if(cljs.core.truth_(and__3546__auto____16623))
{var and__3546__auto____16624 = x__6749__auto____16622.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16624))
{var and__3546__auto____16625 = x__6749__auto____16622.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16625))
{return cljs.core.not.call(null,x__6749__auto____16622.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16625;
}
} else
{return and__3546__auto____16624;
}
} else
{return and__3546__auto____16623;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16622);
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
var G__16626 = null;
var G__16626__16627 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16626__16628 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16626 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16626__16627.call(this,nodelist,n);
case  3 :
return G__16626__16628.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16626;
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
var G__16630 = null;
var G__16630__16631 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16630__16632 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16630 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16630__16631.call(this,nodelist,n);
case  3 :
return G__16630__16632.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16630;
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
var G__16634 = null;
var G__16634__16635 = (function (coll,n){
return coll.item(n);
});
var G__16634__16636 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16634 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16634__16635.call(this,coll,n);
case  3 :
return G__16634__16636.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16634;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
