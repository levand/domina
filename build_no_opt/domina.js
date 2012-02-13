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
if(cljs.core.truth_((function (){var and__3546__auto____16384 = content;

if(cljs.core.truth_(and__3546__auto____16384))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16384;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16385 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16385))
{return or__3548__auto____16385;
} else
{var or__3548__auto____16386 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16386))
{return or__3548__auto____16386;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16387 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16387))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16387;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16388 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16388))
{return or__3548__auto____16388;
} else
{var or__3548__auto____16389 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16389))
{return or__3548__auto____16389;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16390 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16390))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16390;
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
if(cljs.core.truth_((void 0 === domina.t16393)))
{
/**
* @constructor
*/
domina.t16393 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16393.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16393");
});
domina.t16393.prototype.domina$DomContent$ = true;
domina.t16393.prototype.domina$DomContent$nodes = (function (_){
var this__16394 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16394.class_name)));
});
domina.t16393.prototype.domina$DomContent$single_node = (function (_){
var this__16395 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16395.class_name)));
});
domina.t16393.prototype.cljs$core$IMeta$ = true;
domina.t16393.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16396 = this;
return this__16396.__meta;
});
domina.t16393.prototype.cljs$core$IWithMeta$ = true;
domina.t16393.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16397 = this;
return (new domina.t16393(this__16397.class_name,this__16397.by_class,__meta));
});
domina.t16393;
} else
{}
return (new domina.t16393(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16400_SHARP_){
return p1__16400_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16404_SHARP_,p2__16405_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16404_SHARP_,p2__16405_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16411_SHARP_,p2__16410_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16410_SHARP_,p1__16411_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16415_SHARP_,p2__16414_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16414_SHARP_,p1__16415_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16420_SHARP_,p2__16418_SHARP_){
return goog.dom.replaceNode.call(null,p2__16418_SHARP_,p1__16420_SHARP_);
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
var s__16433 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16433))))
{return s__16433;
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
var G__16438__16441 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16438__16441))
{var n__16444 = cljs.core.first.call(null,G__16438__16441);
var G__16438__16445 = G__16438__16441;

while(true){
goog.style.setStyle.call(null,n__16444,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16446 = cljs.core.next.call(null,G__16438__16445);

if(cljs.core.truth_(temp__3698__auto____16446))
{var G__16438__16447 = temp__3698__auto____16446;

{
var G__16450 = cljs.core.first.call(null,G__16438__16447);
var G__16451 = G__16438__16447;
n__16444 = G__16450;
G__16438__16445 = G__16451;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16453){
var content = cljs.core.first(arglist__16453);
var name = cljs.core.first(cljs.core.next(arglist__16453));
var value = cljs.core.rest(cljs.core.next(arglist__16453));
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
var G__16457__16458 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16457__16458))
{var n__16459 = cljs.core.first.call(null,G__16457__16458);
var G__16457__16460 = G__16457__16458;

while(true){
n__16459.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16461 = cljs.core.next.call(null,G__16457__16460);

if(cljs.core.truth_(temp__3698__auto____16461))
{var G__16457__16462 = temp__3698__auto____16461;

{
var G__16466 = cljs.core.first.call(null,G__16457__16462);
var G__16467 = G__16457__16462;
n__16459 = G__16466;
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
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16468){
var content = cljs.core.first(arglist__16468);
var name = cljs.core.first(cljs.core.next(arglist__16468));
var value = cljs.core.rest(cljs.core.next(arglist__16468));
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
var vec__16485__16486 = pair.split(/\s*:\s*/);
var k__16487 = cljs.core.nth.call(null,vec__16485__16486,0,null);
var v__16488 = cljs.core.nth.call(null,vec__16485__16486,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16489 = k__16487;

if(cljs.core.truth_(and__3546__auto____16489))
{return v__16488;
} else
{return and__3546__auto____16489;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16487.toLowerCase()),v__16488);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16491 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16491)))
{return domina.parse_style_attributes.call(null,style__16491);
} else
{if(cljs.core.truth_(style__16491.cssText))
{return domina.parse_style_attributes.call(null,style__16491.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16492 = domina.single_node.call(null,content);
var attrs__16493 = node__16492.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16490_SHARP_){
var attr__16494 = attrs__16493.item(p1__16490_SHARP_);
var value__16495 = attr__16494.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16496 = cljs.core.not_EQ_.call(null,null,value__16495);

if(cljs.core.truth_(and__3546__auto____16496))
{return cljs.core.not_EQ_.call(null,"",value__16495);
} else
{return and__3546__auto____16496;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16494.nodeName.toLowerCase())],[attr__16494.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16493.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16497__16498 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16497__16498))
{var G__16500__16502 = cljs.core.first.call(null,G__16497__16498);
var vec__16501__16503 = G__16500__16502;
var name__16504 = cljs.core.nth.call(null,vec__16501__16503,0,null);
var value__16505 = cljs.core.nth.call(null,vec__16501__16503,1,null);
var G__16497__16506 = G__16497__16498;

var G__16500__16507 = G__16500__16502;
var G__16497__16508 = G__16497__16506;

while(true){
var vec__16509__16510 = G__16500__16507;
var name__16511 = cljs.core.nth.call(null,vec__16509__16510,0,null);
var value__16512 = cljs.core.nth.call(null,vec__16509__16510,1,null);
var G__16497__16513 = G__16497__16508;

domina.set_style_BANG_.call(null,content,name__16511,value__16512);
var temp__3698__auto____16514 = cljs.core.next.call(null,G__16497__16513);

if(cljs.core.truth_(temp__3698__auto____16514))
{var G__16497__16515 = temp__3698__auto____16514;

{
var G__16516 = cljs.core.first.call(null,G__16497__16515);
var G__16517 = G__16497__16515;
G__16500__16507 = G__16516;
G__16497__16508 = G__16517;
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
var G__16518__16519 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16518__16519))
{var G__16521__16523 = cljs.core.first.call(null,G__16518__16519);
var vec__16522__16524 = G__16521__16523;
var name__16525 = cljs.core.nth.call(null,vec__16522__16524,0,null);
var value__16526 = cljs.core.nth.call(null,vec__16522__16524,1,null);
var G__16518__16527 = G__16518__16519;

var G__16521__16528 = G__16521__16523;
var G__16518__16529 = G__16518__16527;

while(true){
var vec__16530__16531 = G__16521__16528;
var name__16532 = cljs.core.nth.call(null,vec__16530__16531,0,null);
var value__16533 = cljs.core.nth.call(null,vec__16530__16531,1,null);
var G__16518__16534 = G__16518__16529;

domina.set_attr_BANG_.call(null,content,name__16532,value__16533);
var temp__3698__auto____16535 = cljs.core.next.call(null,G__16518__16534);

if(cljs.core.truth_(temp__3698__auto____16535))
{var G__16518__16536 = temp__3698__auto____16535;

{
var G__16537 = cljs.core.first.call(null,G__16518__16536);
var G__16538 = G__16518__16536;
G__16521__16528 = G__16537;
G__16518__16529 = G__16538;
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
var G__16539__16540 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16539__16540))
{var node__16541 = cljs.core.first.call(null,G__16539__16540);
var G__16539__16542 = G__16539__16540;

while(true){
goog.dom.classes.add.call(null,node__16541,class$);
var temp__3698__auto____16543 = cljs.core.next.call(null,G__16539__16542);

if(cljs.core.truth_(temp__3698__auto____16543))
{var G__16539__16544 = temp__3698__auto____16543;

{
var G__16545 = cljs.core.first.call(null,G__16539__16544);
var G__16546 = G__16539__16544;
node__16541 = G__16545;
G__16539__16542 = G__16546;
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
var G__16547__16548 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16547__16548))
{var node__16549 = cljs.core.first.call(null,G__16547__16548);
var G__16547__16550 = G__16547__16548;

while(true){
goog.dom.classes.remove.call(null,node__16549,class$);
var temp__3698__auto____16551 = cljs.core.next.call(null,G__16547__16550);

if(cljs.core.truth_(temp__3698__auto____16551))
{var G__16547__16552 = temp__3698__auto____16551;

{
var G__16557 = cljs.core.first.call(null,G__16547__16552);
var G__16558 = G__16547__16552;
node__16549 = G__16557;
G__16547__16550 = G__16558;
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
var text__16559 = (function (content){
return text.call(null,content,true);
});
var text__16560 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16559.call(this,content);
case  2 :
return text__16560.call(this,content,normalize);
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
var G__16566__16567 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16566__16567))
{var node__16568 = cljs.core.first.call(null,G__16566__16567);
var G__16566__16569 = G__16566__16567;

while(true){
goog.dom.setTextContent.call(null,node__16568,value);
var temp__3698__auto____16570 = cljs.core.next.call(null,G__16566__16569);

if(cljs.core.truth_(temp__3698__auto____16570))
{var G__16566__16571 = temp__3698__auto____16570;

{
var G__16572 = cljs.core.first.call(null,G__16566__16571);
var G__16573 = G__16566__16571;
node__16568 = G__16572;
G__16566__16569 = G__16573;
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
var G__16578__16579 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16578__16579))
{var node__16580 = cljs.core.first.call(null,G__16578__16579);
var G__16578__16581 = G__16578__16579;

while(true){
goog.dom.forms.setValue.call(null,node__16580,value);
var temp__3698__auto____16582 = cljs.core.next.call(null,G__16578__16581);

if(cljs.core.truth_(temp__3698__auto____16582))
{var G__16578__16583 = temp__3698__auto____16582;

{
var G__16584 = cljs.core.first.call(null,G__16578__16583);
var G__16585 = G__16578__16583;
node__16580 = G__16584;
G__16578__16581 = G__16585;
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
var G__16590__16591 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16590__16591))
{var node__16592 = cljs.core.first.call(null,G__16590__16591);
var G__16590__16593 = G__16590__16591;

while(true){
node__16592.innerHTML = value;
var temp__3698__auto____16595 = cljs.core.next.call(null,G__16590__16593);

if(cljs.core.truth_(temp__3698__auto____16595))
{var G__16590__16596 = temp__3698__auto____16595;

{
var G__16604 = cljs.core.first.call(null,G__16590__16596);
var G__16605 = G__16590__16596;
node__16592 = G__16604;
G__16590__16593 = G__16605;
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
var parents__16606 = domina.nodes.call(null,parent_content);
var children__16607 = domina.nodes.call(null,child_content);
var first_child__16615 = (function (){var frag__16608 = document.createDocumentFragment();

var G__16609__16610 = cljs.core.seq.call(null,children__16607);

if(cljs.core.truth_(G__16609__16610))
{var child__16611 = cljs.core.first.call(null,G__16609__16610);
var G__16609__16612 = G__16609__16610;

while(true){
frag__16608.appendChild(child__16611);
var temp__3698__auto____16613 = cljs.core.next.call(null,G__16609__16612);

if(cljs.core.truth_(temp__3698__auto____16613))
{var G__16609__16614 = temp__3698__auto____16613;

{
var G__16617 = cljs.core.first.call(null,G__16609__16614);
var G__16618 = G__16609__16614;
child__16611 = G__16617;
G__16609__16612 = G__16618;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16608;
})();
var other_children__16616 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16606) - 1),(function (){
return first_child__16615.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16606)))
{f.call(null,cljs.core.first.call(null,parents__16606),first_child__16615);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16588_SHARP_,p2__16589_SHARP_){
return f.call(null,p1__16588_SHARP_,p2__16589_SHARP_);
}),cljs.core.rest.call(null,parents__16606),other_children__16616));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16619 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16620 = (function (nl,n){
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
return lazy_nl_via_item__16619.call(this,nl);
case  2 :
return lazy_nl_via_item__16620.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16622 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16623 = (function (nl,n){
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
return lazy_nl_via_array_ref__16622.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16623.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6763__auto____16625 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16626 = x__6763__auto____16625;

if(cljs.core.truth_(and__3546__auto____16626))
{var and__3546__auto____16627 = x__6763__auto____16625.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16627))
{var and__3546__auto____16628 = x__6763__auto____16625.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16628))
{return cljs.core.not.call(null,x__6763__auto____16625.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16628;
}
} else
{return and__3546__auto____16627;
}
} else
{return and__3546__auto____16626;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16625);
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
var inner_wrapper__16629 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16630 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16629));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16630),1)))
{return inner_wrapper__16629.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16629));
} else
{return children__16630;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16631__16632 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16633 = cljs.core.nth.call(null,vec__16631__16632,0,null);
var table_level__16634 = cljs.core.nth.call(null,vec__16631__16632,1,null);
var ___16635 = cljs.core.nthnext.call(null,vec__16631__16632,2);
var wrapper__16636 = domina.create_wrapper.call(null,table_level__16634);

domina.set_wrapper_html_BANG_.call(null,wrapper__16636,content);
return domina.extract_wrapper_dom.call(null,wrapper__16636,table_level__16634);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6763__auto____16637 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16638 = x__6763__auto____16637;

if(cljs.core.truth_(and__3546__auto____16638))
{var and__3546__auto____16639 = x__6763__auto____16637.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16639))
{var and__3546__auto____16640 = x__6763__auto____16637.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16640))
{return cljs.core.not.call(null,x__6763__auto____16637.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16640;
}
} else
{return and__3546__auto____16639;
}
} else
{return and__3546__auto____16638;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16637);
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
if(cljs.core.truth_((function (){var x__6763__auto____16641 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16642 = x__6763__auto____16641;

if(cljs.core.truth_(and__3546__auto____16642))
{var and__3546__auto____16643 = x__6763__auto____16641.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16643))
{var and__3546__auto____16644 = x__6763__auto____16641.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16644))
{return cljs.core.not.call(null,x__6763__auto____16641.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16644;
}
} else
{return and__3546__auto____16643;
}
} else
{return and__3546__auto____16642;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16641);
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
var G__16645 = null;
var G__16645__16646 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16645__16647 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16645 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16645__16646.call(this,nodelist,n);
case  3 :
return G__16645__16647.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16645;
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
var G__16649 = null;
var G__16649__16650 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16649__16651 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16649 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16649__16650.call(this,nodelist,n);
case  3 :
return G__16649__16651.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16649;
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
var G__16653 = null;
var G__16653__16654 = (function (coll,n){
return coll.item(n);
});
var G__16653__16655 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16653 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16653__16654.call(this,coll,n);
case  3 :
return G__16653__16655.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16653;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
