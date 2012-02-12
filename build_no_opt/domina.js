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
if(cljs.core.truth_((function (){var and__3546__auto____16165 = content;

if(cljs.core.truth_(and__3546__auto____16165))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16165;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16168 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16168))
{return or__3548__auto____16168;
} else
{var or__3548__auto____16171 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16171))
{return or__3548__auto____16171;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16179 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16179))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16179;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16181 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16181))
{return or__3548__auto____16181;
} else
{var or__3548__auto____16182 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16182))
{return or__3548__auto____16182;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16197 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16197))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16197;
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
if(cljs.core.truth_((void 0 === domina.t16222)))
{
/**
* @constructor
*/
domina.t16222 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16222.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16222");
});
domina.t16222.prototype.domina$DomContent$ = true;
domina.t16222.prototype.domina$DomContent$nodes = (function (_){
var this__16235 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16235.class_name)));
});
domina.t16222.prototype.domina$DomContent$single_node = (function (_){
var this__16239 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16239.class_name)));
});
domina.t16222.prototype.cljs$core$IMeta$ = true;
domina.t16222.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16317 = this;
return this__16317.__meta;
});
domina.t16222.prototype.cljs$core$IWithMeta$ = true;
domina.t16222.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16321 = this;
return (new domina.t16222(this__16321.class_name,this__16321.by_class,__meta));
});
domina.t16222;
} else
{}
return (new domina.t16222(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16336_SHARP_){
return p1__16336_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16344_SHARP_,p2__16346_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16344_SHARP_,p2__16346_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16354_SHARP_,p2__16352_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16352_SHARP_,p1__16354_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16359_SHARP_,p2__16358_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16358_SHARP_,p1__16359_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16361_SHARP_,p2__16360_SHARP_){
return goog.dom.replaceNode.call(null,p2__16360_SHARP_,p1__16361_SHARP_);
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
var s__16369 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16369))))
{return s__16369;
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
var G__16376__16378 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16376__16378))
{var n__16380 = cljs.core.first.call(null,G__16376__16378);
var G__16376__16382 = G__16376__16378;

while(true){
goog.style.setStyle.call(null,n__16380,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16383 = cljs.core.next.call(null,G__16376__16382);

if(cljs.core.truth_(temp__3698__auto____16383))
{var G__16376__16384 = temp__3698__auto____16383;

{
var G__16389 = cljs.core.first.call(null,G__16376__16384);
var G__16390 = G__16376__16384;
n__16380 = G__16389;
G__16376__16382 = G__16390;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16391){
var content = cljs.core.first(arglist__16391);
var name = cljs.core.first(cljs.core.next(arglist__16391));
var value = cljs.core.rest(cljs.core.next(arglist__16391));
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
var G__16392__16393 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16392__16393))
{var n__16394 = cljs.core.first.call(null,G__16392__16393);
var G__16392__16395 = G__16392__16393;

while(true){
n__16394.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16396 = cljs.core.next.call(null,G__16392__16395);

if(cljs.core.truth_(temp__3698__auto____16396))
{var G__16392__16397 = temp__3698__auto____16396;

{
var G__16402 = cljs.core.first.call(null,G__16392__16397);
var G__16403 = G__16392__16397;
n__16394 = G__16402;
G__16392__16395 = G__16403;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16404){
var content = cljs.core.first(arglist__16404);
var name = cljs.core.first(cljs.core.next(arglist__16404));
var value = cljs.core.rest(cljs.core.next(arglist__16404));
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
var vec__16411__16412 = pair.split(/\s*:\s*/);
var k__16413 = cljs.core.nth.call(null,vec__16411__16412,0,null);
var v__16414 = cljs.core.nth.call(null,vec__16411__16412,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16415 = k__16413;

if(cljs.core.truth_(and__3546__auto____16415))
{return v__16414;
} else
{return and__3546__auto____16415;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16413.toLowerCase()),v__16414);
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
var node__16426 = domina.single_node.call(null,content);
var attrs__16427 = node__16426.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16422_SHARP_){
var attr__16428 = attrs__16427.item(p1__16422_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16428.nodeName.toLowerCase())],[attr__16428.nodeValue]);
}),cljs.core.range.call(null,attrs__16427.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16438__16439 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16438__16439))
{var G__16441__16443 = cljs.core.first.call(null,G__16438__16439);
var vec__16442__16444 = G__16441__16443;
var name__16445 = cljs.core.nth.call(null,vec__16442__16444,0,null);
var value__16446 = cljs.core.nth.call(null,vec__16442__16444,1,null);
var G__16438__16447 = G__16438__16439;

var G__16441__16448 = G__16441__16443;
var G__16438__16449 = G__16438__16447;

while(true){
var vec__16450__16451 = G__16441__16448;
var name__16452 = cljs.core.nth.call(null,vec__16450__16451,0,null);
var value__16453 = cljs.core.nth.call(null,vec__16450__16451,1,null);
var G__16438__16454 = G__16438__16449;

domina.set_style_BANG_.call(null,content,name__16452,value__16453);
var temp__3698__auto____16455 = cljs.core.next.call(null,G__16438__16454);

if(cljs.core.truth_(temp__3698__auto____16455))
{var G__16438__16457 = temp__3698__auto____16455;

{
var G__16461 = cljs.core.first.call(null,G__16438__16457);
var G__16462 = G__16438__16457;
G__16441__16448 = G__16461;
G__16438__16449 = G__16462;
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
var G__16469__16470 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16469__16470))
{var G__16472__16474 = cljs.core.first.call(null,G__16469__16470);
var vec__16473__16475 = G__16472__16474;
var name__16476 = cljs.core.nth.call(null,vec__16473__16475,0,null);
var value__16477 = cljs.core.nth.call(null,vec__16473__16475,1,null);
var G__16469__16478 = G__16469__16470;

var G__16472__16479 = G__16472__16474;
var G__16469__16480 = G__16469__16478;

while(true){
var vec__16481__16482 = G__16472__16479;
var name__16483 = cljs.core.nth.call(null,vec__16481__16482,0,null);
var value__16484 = cljs.core.nth.call(null,vec__16481__16482,1,null);
var G__16469__16485 = G__16469__16480;

domina.set_attr_BANG_.call(null,content,name__16483,value__16484);
var temp__3698__auto____16486 = cljs.core.next.call(null,G__16469__16485);

if(cljs.core.truth_(temp__3698__auto____16486))
{var G__16469__16487 = temp__3698__auto____16486;

{
var G__16492 = cljs.core.first.call(null,G__16469__16487);
var G__16493 = G__16469__16487;
G__16472__16479 = G__16492;
G__16469__16480 = G__16493;
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
var G__16504 = cljs.core.first.call(null,G__16498__16503);
var G__16505 = G__16498__16503;
node__16500 = G__16504;
G__16498__16501 = G__16505;
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
var G__16506__16507 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16506__16507))
{var node__16508 = cljs.core.first.call(null,G__16506__16507);
var G__16506__16509 = G__16506__16507;

while(true){
goog.dom.classes.remove.call(null,node__16508,class$);
var temp__3698__auto____16510 = cljs.core.next.call(null,G__16506__16509);

if(cljs.core.truth_(temp__3698__auto____16510))
{var G__16506__16511 = temp__3698__auto____16510;

{
var G__16512 = cljs.core.first.call(null,G__16506__16511);
var G__16513 = G__16506__16511;
node__16508 = G__16512;
G__16506__16509 = G__16513;
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
var text__16514 = (function (content){
return text.call(null,content,true);
});
var text__16515 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16514.call(this,content);
case  2 :
return text__16515.call(this,content,normalize);
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
var G__16523__16524 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16523__16524))
{var node__16525 = cljs.core.first.call(null,G__16523__16524);
var G__16523__16526 = G__16523__16524;

while(true){
goog.dom.setTextContent.call(null,node__16525,value);
var temp__3698__auto____16527 = cljs.core.next.call(null,G__16523__16526);

if(cljs.core.truth_(temp__3698__auto____16527))
{var G__16523__16528 = temp__3698__auto____16527;

{
var G__16530 = cljs.core.first.call(null,G__16523__16528);
var G__16531 = G__16523__16528;
node__16525 = G__16530;
G__16523__16526 = G__16531;
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
var G__16534__16535 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16534__16535))
{var node__16536 = cljs.core.first.call(null,G__16534__16535);
var G__16534__16546 = G__16534__16535;

while(true){
goog.dom.forms.setValue.call(null,node__16536,value);
var temp__3698__auto____16547 = cljs.core.next.call(null,G__16534__16546);

if(cljs.core.truth_(temp__3698__auto____16547))
{var G__16534__16548 = temp__3698__auto____16547;

{
var G__16553 = cljs.core.first.call(null,G__16534__16548);
var G__16554 = G__16534__16548;
node__16536 = G__16553;
G__16534__16546 = G__16554;
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
var G__16557__16558 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16557__16558))
{var node__16559 = cljs.core.first.call(null,G__16557__16558);
var G__16557__16560 = G__16557__16558;

while(true){
node__16559.innerHTML = value;
var temp__3698__auto____16561 = cljs.core.next.call(null,G__16557__16560);

if(cljs.core.truth_(temp__3698__auto____16561))
{var G__16557__16562 = temp__3698__auto____16561;

{
var G__16565 = cljs.core.first.call(null,G__16557__16562);
var G__16566 = G__16557__16562;
node__16559 = G__16565;
G__16557__16560 = G__16566;
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
var parents__16568 = domina.nodes.call(null,parent_content);
var children__16569 = domina.nodes.call(null,child_content);
var first_child__16578 = (function (){var frag__16570 = document.createDocumentFragment();

var G__16571__16572 = cljs.core.seq.call(null,children__16569);

if(cljs.core.truth_(G__16571__16572))
{var child__16573 = cljs.core.first.call(null,G__16571__16572);
var G__16571__16574 = G__16571__16572;

while(true){
frag__16570.appendChild(child__16573);
var temp__3698__auto____16575 = cljs.core.next.call(null,G__16571__16574);

if(cljs.core.truth_(temp__3698__auto____16575))
{var G__16571__16576 = temp__3698__auto____16575;

{
var G__16586 = cljs.core.first.call(null,G__16571__16576);
var G__16587 = G__16571__16576;
child__16573 = G__16586;
G__16571__16574 = G__16587;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16570;
})();
var other_children__16580 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16568) - 1),(function (){
return first_child__16578.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16568)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16569)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16568)))
{f.call(null,cljs.core.first.call(null,parents__16568),first_child__16578);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16555_SHARP_,p2__16556_SHARP_){
return f.call(null,p1__16555_SHARP_,p2__16556_SHARP_);
}),cljs.core.rest.call(null,parents__16568),other_children__16580));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16588 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16589 = (function (nl,n){
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
return lazy_nodelist__16588.call(this,nl);
case  2 :
return lazy_nodelist__16589.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16591 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16592 = x__6743__auto____16591;

if(cljs.core.truth_(and__3546__auto____16592))
{var and__3546__auto____16593 = x__6743__auto____16591.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16593))
{var and__3546__auto____16594 = x__6743__auto____16591.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16594))
{return cljs.core.not.call(null,x__6743__auto____16591.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16594;
}
} else
{return and__3546__auto____16593;
}
} else
{return and__3546__auto____16592;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16591);
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
var inner_wrapper__16595 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16596 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16595));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16596),1)))
{return inner_wrapper__16595.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16595));
} else
{return children__16596;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16597__16598 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16599 = cljs.core.nth.call(null,vec__16597__16598,0,null);
var table_level__16600 = cljs.core.nth.call(null,vec__16597__16598,1,null);
var ___16601 = cljs.core.nthnext.call(null,vec__16597__16598,2);
var wrapper__16602 = domina.create_wrapper.call(null,table_level__16600);

domina.set_wrapper_html_BANG_.call(null,wrapper__16602,content);
return domina.extract_wrapper_dom.call(null,wrapper__16602,table_level__16600);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16603 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16604 = x__6743__auto____16603;

if(cljs.core.truth_(and__3546__auto____16604))
{var and__3546__auto____16605 = x__6743__auto____16603.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16605))
{var and__3546__auto____16606 = x__6743__auto____16603.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16606))
{return cljs.core.not.call(null,x__6743__auto____16603.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16606;
}
} else
{return and__3546__auto____16605;
}
} else
{return and__3546__auto____16604;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16603);
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
if(cljs.core.truth_((function (){var x__6743__auto____16607 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16608 = x__6743__auto____16607;

if(cljs.core.truth_(and__3546__auto____16608))
{var and__3546__auto____16609 = x__6743__auto____16607.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16609))
{var and__3546__auto____16610 = x__6743__auto____16607.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16610))
{return cljs.core.not.call(null,x__6743__auto____16607.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16610;
}
} else
{return and__3546__auto____16609;
}
} else
{return and__3546__auto____16608;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16607);
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
var G__16611 = null;
var G__16611__16612 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16611__16613 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16611 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16611__16612.call(this,nodelist,n);
case  3 :
return G__16611__16613.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16611;
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
var G__16615 = null;
var G__16615__16616 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16615__16617 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16615 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16615__16616.call(this,nodelist,n);
case  3 :
return G__16615__16617.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16615;
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
var G__16619 = null;
var G__16619__16620 = (function (coll,n){
return coll.item(n);
});
var G__16619__16621 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16619 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16619__16620.call(this,coll,n);
case  3 :
return G__16619__16621.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16619;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
