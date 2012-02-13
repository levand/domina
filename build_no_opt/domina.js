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
if(cljs.core.truth_((function (){var and__3546__auto____16009 = content;

if(cljs.core.truth_(and__3546__auto____16009))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16009;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16010 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16010))
{return or__3548__auto____16010;
} else
{var or__3548__auto____16011 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16011))
{return or__3548__auto____16011;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16114 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16114))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16114;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16115 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16115))
{return or__3548__auto____16115;
} else
{var or__3548__auto____16116 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16116))
{return or__3548__auto____16116;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16134 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16134))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16134;
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
if(cljs.core.truth_((void 0 === domina.t16148)))
{
/**
* @constructor
*/
domina.t16148 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16148.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16148");
});
domina.t16148.prototype.domina$DomContent$ = true;
domina.t16148.prototype.domina$DomContent$nodes = (function (_){
var this__16156 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16156.class_name)));
});
domina.t16148.prototype.domina$DomContent$single_node = (function (_){
var this__16164 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16164.class_name)));
});
domina.t16148.prototype.cljs$core$IMeta$ = true;
domina.t16148.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16165 = this;
return this__16165.__meta;
});
domina.t16148.prototype.cljs$core$IWithMeta$ = true;
domina.t16148.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16166 = this;
return (new domina.t16148(this__16166.class_name,this__16166.by_class,__meta));
});
domina.t16148;
} else
{}
return (new domina.t16148(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16175_SHARP_){
return p1__16175_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16183_SHARP_,p2__16184_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16183_SHARP_,p2__16184_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16196_SHARP_,p2__16195_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16195_SHARP_,p1__16196_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16200_SHARP_,p2__16199_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16199_SHARP_,p1__16200_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16207_SHARP_,p2__16206_SHARP_){
return goog.dom.replaceNode.call(null,p2__16206_SHARP_,p1__16207_SHARP_);
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
var s__16223 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16223))))
{return s__16223;
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
var G__16231__16232 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16231__16232))
{var n__16233 = cljs.core.first.call(null,G__16231__16232);
var G__16231__16234 = G__16231__16232;

while(true){
goog.style.setStyle.call(null,n__16233,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16235 = cljs.core.next.call(null,G__16231__16234);

if(cljs.core.truth_(temp__3698__auto____16235))
{var G__16231__16236 = temp__3698__auto____16235;

{
var G__16238 = cljs.core.first.call(null,G__16231__16236);
var G__16239 = G__16231__16236;
n__16233 = G__16238;
G__16231__16234 = G__16239;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16240){
var content = cljs.core.first(arglist__16240);
var name = cljs.core.first(cljs.core.next(arglist__16240));
var value = cljs.core.rest(cljs.core.next(arglist__16240));
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
var G__16241__16242 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16241__16242))
{var n__16244 = cljs.core.first.call(null,G__16241__16242);
var G__16241__16245 = G__16241__16242;

while(true){
n__16244.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16270 = cljs.core.next.call(null,G__16241__16245);

if(cljs.core.truth_(temp__3698__auto____16270))
{var G__16241__16272 = temp__3698__auto____16270;

{
var G__16278 = cljs.core.first.call(null,G__16241__16272);
var G__16279 = G__16241__16272;
n__16244 = G__16278;
G__16241__16245 = G__16279;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16280){
var content = cljs.core.first(arglist__16280);
var name = cljs.core.first(cljs.core.next(arglist__16280));
var value = cljs.core.rest(cljs.core.next(arglist__16280));
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
var vec__16286__16287 = pair.split(/\s*:\s*/);
var k__16288 = cljs.core.nth.call(null,vec__16286__16287,0,null);
var v__16289 = cljs.core.nth.call(null,vec__16286__16287,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16290 = k__16288;

if(cljs.core.truth_(and__3546__auto____16290))
{return v__16289;
} else
{return and__3546__auto____16290;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16288.toLowerCase()),v__16289);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16302 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16302)))
{return domina.parse_style_attributes.call(null,style__16302);
} else
{if(cljs.core.truth_(style__16302.cssText))
{return domina.parse_style_attributes.call(null,style__16302.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16311 = domina.single_node.call(null,content);
var attrs__16313 = node__16311.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16299_SHARP_){
var attr__16319 = attrs__16313.item(p1__16299_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16319.nodeName.toLowerCase())],[attr__16319.nodeValue]);
}),cljs.core.range.call(null,attrs__16313.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16332__16333 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16332__16333))
{var G__16335__16339 = cljs.core.first.call(null,G__16332__16333);
var vec__16337__16340 = G__16335__16339;
var name__16341 = cljs.core.nth.call(null,vec__16337__16340,0,null);
var value__16342 = cljs.core.nth.call(null,vec__16337__16340,1,null);
var G__16332__16345 = G__16332__16333;

var G__16335__16347 = G__16335__16339;
var G__16332__16348 = G__16332__16345;

while(true){
var vec__16349__16351 = G__16335__16347;
var name__16352 = cljs.core.nth.call(null,vec__16349__16351,0,null);
var value__16353 = cljs.core.nth.call(null,vec__16349__16351,1,null);
var G__16332__16354 = G__16332__16348;

domina.set_style_BANG_.call(null,content,name__16352,value__16353);
var temp__3698__auto____16356 = cljs.core.next.call(null,G__16332__16354);

if(cljs.core.truth_(temp__3698__auto____16356))
{var G__16332__16358 = temp__3698__auto____16356;

{
var G__16380 = cljs.core.first.call(null,G__16332__16358);
var G__16381 = G__16332__16358;
G__16335__16347 = G__16380;
G__16332__16348 = G__16381;
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
var G__16382__16383 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16382__16383))
{var G__16385__16387 = cljs.core.first.call(null,G__16382__16383);
var vec__16386__16388 = G__16385__16387;
var name__16391 = cljs.core.nth.call(null,vec__16386__16388,0,null);
var value__16392 = cljs.core.nth.call(null,vec__16386__16388,1,null);
var G__16382__16393 = G__16382__16383;

var G__16385__16394 = G__16385__16387;
var G__16382__16395 = G__16382__16393;

while(true){
var vec__16396__16397 = G__16385__16394;
var name__16398 = cljs.core.nth.call(null,vec__16396__16397,0,null);
var value__16399 = cljs.core.nth.call(null,vec__16396__16397,1,null);
var G__16382__16400 = G__16382__16395;

domina.set_attr_BANG_.call(null,content,name__16398,value__16399);
var temp__3698__auto____16401 = cljs.core.next.call(null,G__16382__16400);

if(cljs.core.truth_(temp__3698__auto____16401))
{var G__16382__16402 = temp__3698__auto____16401;

{
var G__16408 = cljs.core.first.call(null,G__16382__16402);
var G__16409 = G__16382__16402;
G__16385__16394 = G__16408;
G__16382__16395 = G__16409;
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
var G__16413__16415 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16413__16415))
{var node__16420 = cljs.core.first.call(null,G__16413__16415);
var G__16413__16421 = G__16413__16415;

while(true){
goog.dom.classes.add.call(null,node__16420,class$);
var temp__3698__auto____16423 = cljs.core.next.call(null,G__16413__16421);

if(cljs.core.truth_(temp__3698__auto____16423))
{var G__16413__16425 = temp__3698__auto____16423;

{
var G__16426 = cljs.core.first.call(null,G__16413__16425);
var G__16427 = G__16413__16425;
node__16420 = G__16426;
G__16413__16421 = G__16427;
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
var G__16430__16432 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16430__16432))
{var node__16433 = cljs.core.first.call(null,G__16430__16432);
var G__16430__16434 = G__16430__16432;

while(true){
goog.dom.classes.remove.call(null,node__16433,class$);
var temp__3698__auto____16435 = cljs.core.next.call(null,G__16430__16434);

if(cljs.core.truth_(temp__3698__auto____16435))
{var G__16430__16436 = temp__3698__auto____16435;

{
var G__16443 = cljs.core.first.call(null,G__16430__16436);
var G__16444 = G__16430__16436;
node__16433 = G__16443;
G__16430__16434 = G__16444;
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
var text__16451 = (function (content){
return text.call(null,content,true);
});
var text__16452 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16451.call(this,content);
case  2 :
return text__16452.call(this,content,normalize);
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
var G__16460__16461 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16460__16461))
{var node__16463 = cljs.core.first.call(null,G__16460__16461);
var G__16460__16464 = G__16460__16461;

while(true){
goog.dom.setTextContent.call(null,node__16463,value);
var temp__3698__auto____16465 = cljs.core.next.call(null,G__16460__16464);

if(cljs.core.truth_(temp__3698__auto____16465))
{var G__16460__16466 = temp__3698__auto____16465;

{
var G__16473 = cljs.core.first.call(null,G__16460__16466);
var G__16474 = G__16460__16466;
node__16463 = G__16473;
G__16460__16464 = G__16474;
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
var G__16478__16479 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16478__16479))
{var node__16480 = cljs.core.first.call(null,G__16478__16479);
var G__16478__16481 = G__16478__16479;

while(true){
goog.dom.forms.setValue.call(null,node__16480,value);
var temp__3698__auto____16482 = cljs.core.next.call(null,G__16478__16481);

if(cljs.core.truth_(temp__3698__auto____16482))
{var G__16478__16483 = temp__3698__auto____16482;

{
var G__16484 = cljs.core.first.call(null,G__16478__16483);
var G__16485 = G__16478__16483;
node__16480 = G__16484;
G__16478__16481 = G__16485;
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
var G__16490__16492 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16490__16492))
{var node__16493 = cljs.core.first.call(null,G__16490__16492);
var G__16490__16494 = G__16490__16492;

while(true){
node__16493.innerHTML = value;
var temp__3698__auto____16495 = cljs.core.next.call(null,G__16490__16494);

if(cljs.core.truth_(temp__3698__auto____16495))
{var G__16490__16496 = temp__3698__auto____16495;

{
var G__16498 = cljs.core.first.call(null,G__16490__16496);
var G__16499 = G__16490__16496;
node__16493 = G__16498;
G__16490__16494 = G__16499;
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
var parents__16501 = domina.nodes.call(null,parent_content);
var children__16509 = domina.nodes.call(null,child_content);
var first_child__16556 = (function (){var frag__16510 = document.createDocumentFragment();

var G__16511__16515 = cljs.core.seq.call(null,children__16509);

if(cljs.core.truth_(G__16511__16515))
{var child__16516 = cljs.core.first.call(null,G__16511__16515);
var G__16511__16517 = G__16511__16515;

while(true){
frag__16510.appendChild(child__16516);
var temp__3698__auto____16518 = cljs.core.next.call(null,G__16511__16517);

if(cljs.core.truth_(temp__3698__auto____16518))
{var G__16511__16555 = temp__3698__auto____16518;

{
var G__16573 = cljs.core.first.call(null,G__16511__16555);
var G__16574 = G__16511__16555;
child__16516 = G__16573;
G__16511__16517 = G__16574;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16510;
})();
var other_children__16566 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16501) - 1),(function (){
return first_child__16556.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16501)))
{f.call(null,cljs.core.first.call(null,parents__16501),first_child__16556);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16488_SHARP_,p2__16489_SHARP_){
return f.call(null,p1__16488_SHARP_,p2__16489_SHARP_);
}),cljs.core.rest.call(null,parents__16501),other_children__16566));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16579 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16580 = (function (nl,n){
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
return lazy_nl_via_item__16579.call(this,nl);
case  2 :
return lazy_nl_via_item__16580.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16586 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16587 = (function (nl,n){
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
return lazy_nl_via_array_ref__16586.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16587.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6755__auto____16589 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16590 = x__6755__auto____16589;

if(cljs.core.truth_(and__3546__auto____16590))
{var and__3546__auto____16591 = x__6755__auto____16589.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16591))
{var and__3546__auto____16592 = x__6755__auto____16589.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16592))
{return cljs.core.not.call(null,x__6755__auto____16589.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16592;
}
} else
{return and__3546__auto____16591;
}
} else
{return and__3546__auto____16590;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16589);
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
var inner_wrapper__16597 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16598 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16597));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16598),1)))
{return inner_wrapper__16597.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16597));
} else
{return children__16598;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16603__16604 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16605 = cljs.core.nth.call(null,vec__16603__16604,0,null);
var table_level__16608 = cljs.core.nth.call(null,vec__16603__16604,1,null);
var ___16609 = cljs.core.nthnext.call(null,vec__16603__16604,2);
var wrapper__16610 = domina.create_wrapper.call(null,table_level__16608);

domina.set_wrapper_html_BANG_.call(null,wrapper__16610,content);
return domina.extract_wrapper_dom.call(null,wrapper__16610,table_level__16608);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6755__auto____16611 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16614 = x__6755__auto____16611;

if(cljs.core.truth_(and__3546__auto____16614))
{var and__3546__auto____16615 = x__6755__auto____16611.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16615))
{var and__3546__auto____16616 = x__6755__auto____16611.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16616))
{return cljs.core.not.call(null,x__6755__auto____16611.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16616;
}
} else
{return and__3546__auto____16615;
}
} else
{return and__3546__auto____16614;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16611);
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
if(cljs.core.truth_((function (){var x__6755__auto____16617 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16618 = x__6755__auto____16617;

if(cljs.core.truth_(and__3546__auto____16618))
{var and__3546__auto____16619 = x__6755__auto____16617.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16619))
{var and__3546__auto____16620 = x__6755__auto____16617.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16620))
{return cljs.core.not.call(null,x__6755__auto____16617.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16620;
}
} else
{return and__3546__auto____16619;
}
} else
{return and__3546__auto____16618;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16617);
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
var G__16624 = null;
var G__16624__16625 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16624__16626 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16624 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16624__16625.call(this,nodelist,n);
case  3 :
return G__16624__16626.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16624;
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
var G__16635 = null;
var G__16635__16636 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16635__16637 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16635 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16635__16636.call(this,nodelist,n);
case  3 :
return G__16635__16637.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16635;
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
var G__16639 = null;
var G__16639__16640 = (function (coll,n){
return coll.item(n);
});
var G__16639__16641 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16639 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16639__16640.call(this,coll,n);
case  3 :
return G__16639__16641.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16639;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
