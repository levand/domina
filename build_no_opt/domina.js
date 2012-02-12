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
if(cljs.core.truth_((function (){var and__3546__auto____16141 = content;

if(cljs.core.truth_(and__3546__auto____16141))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16141;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16145 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16145))
{return or__3548__auto____16145;
} else
{var or__3548__auto____16146 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16146))
{return or__3548__auto____16146;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16151 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16151))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16151;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16153 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16153))
{return or__3548__auto____16153;
} else
{var or__3548__auto____16154 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16154))
{return or__3548__auto____16154;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16167 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16167))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16167;
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
if(cljs.core.truth_((void 0 === domina.t16173)))
{
/**
* @constructor
*/
domina.t16173 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16173.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16173");
});
domina.t16173.prototype.domina$DomContent$ = true;
domina.t16173.prototype.domina$DomContent$nodes = (function (_){
var this__16179 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16179.class_name)));
});
domina.t16173.prototype.domina$DomContent$single_node = (function (_){
var this__16181 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16181.class_name)));
});
domina.t16173.prototype.cljs$core$IMeta$ = true;
domina.t16173.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16186 = this;
return this__16186.__meta;
});
domina.t16173.prototype.cljs$core$IWithMeta$ = true;
domina.t16173.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16190 = this;
return (new domina.t16173(this__16190.class_name,this__16190.by_class,__meta));
});
domina.t16173;
} else
{}
return (new domina.t16173(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16204_SHARP_){
return p1__16204_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16213_SHARP_,p2__16215_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16213_SHARP_,p2__16215_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16220_SHARP_,p2__16219_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16219_SHARP_,p1__16220_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16222_SHARP_,p2__16221_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16221_SHARP_,p1__16222_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16230_SHARP_,p2__16229_SHARP_){
return goog.dom.replaceNode.call(null,p2__16229_SHARP_,p1__16230_SHARP_);
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
var s__16248 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16248))))
{return s__16248;
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
var G__16255__16258 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16255__16258))
{var n__16259 = cljs.core.first.call(null,G__16255__16258);
var G__16255__16260 = G__16255__16258;

while(true){
goog.style.setStyle.call(null,n__16259,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16262 = cljs.core.next.call(null,G__16255__16260);

if(cljs.core.truth_(temp__3698__auto____16262))
{var G__16255__16263 = temp__3698__auto____16262;

{
var G__16296 = cljs.core.first.call(null,G__16255__16263);
var G__16297 = G__16255__16263;
n__16259 = G__16296;
G__16255__16260 = G__16297;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16299){
var content = cljs.core.first(arglist__16299);
var name = cljs.core.first(cljs.core.next(arglist__16299));
var value = cljs.core.rest(cljs.core.next(arglist__16299));
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
var G__16305__16306 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16305__16306))
{var n__16307 = cljs.core.first.call(null,G__16305__16306);
var G__16305__16308 = G__16305__16306;

while(true){
n__16307.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16309 = cljs.core.next.call(null,G__16305__16308);

if(cljs.core.truth_(temp__3698__auto____16309))
{var G__16305__16310 = temp__3698__auto____16309;

{
var G__16314 = cljs.core.first.call(null,G__16305__16310);
var G__16315 = G__16305__16310;
n__16307 = G__16314;
G__16305__16308 = G__16315;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16319){
var content = cljs.core.first(arglist__16319);
var name = cljs.core.first(cljs.core.next(arglist__16319));
var value = cljs.core.rest(cljs.core.next(arglist__16319));
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
var vec__16332__16334 = pair.split(/\s*:\s*/);
var k__16336 = cljs.core.nth.call(null,vec__16332__16334,0,null);
var v__16340 = cljs.core.nth.call(null,vec__16332__16334,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16341 = k__16336;

if(cljs.core.truth_(and__3546__auto____16341))
{return v__16340;
} else
{return and__3546__auto____16341;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16336.toLowerCase()),v__16340);
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
var node__16357 = domina.single_node.call(null,content);
var attrs__16358 = node__16357.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16347_SHARP_){
var attr__16359 = attrs__16358.item(p1__16347_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16359.nodeName.toLowerCase())],[attr__16359.nodeValue]);
}),cljs.core.range.call(null,attrs__16358.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16360__16361 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16360__16361))
{var G__16364__16367 = cljs.core.first.call(null,G__16360__16361);
var vec__16366__16368 = G__16364__16367;
var name__16369 = cljs.core.nth.call(null,vec__16366__16368,0,null);
var value__16370 = cljs.core.nth.call(null,vec__16366__16368,1,null);
var G__16360__16373 = G__16360__16361;

var G__16364__16376 = G__16364__16367;
var G__16360__16377 = G__16360__16373;

while(true){
var vec__16380__16381 = G__16364__16376;
var name__16383 = cljs.core.nth.call(null,vec__16380__16381,0,null);
var value__16385 = cljs.core.nth.call(null,vec__16380__16381,1,null);
var G__16360__16387 = G__16360__16377;

domina.set_style_BANG_.call(null,content,name__16383,value__16385);
var temp__3698__auto____16393 = cljs.core.next.call(null,G__16360__16387);

if(cljs.core.truth_(temp__3698__auto____16393))
{var G__16360__16396 = temp__3698__auto____16393;

{
var G__16402 = cljs.core.first.call(null,G__16360__16396);
var G__16403 = G__16360__16396;
G__16364__16376 = G__16402;
G__16360__16377 = G__16403;
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
var G__16406__16407 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16406__16407))
{var G__16409__16411 = cljs.core.first.call(null,G__16406__16407);
var vec__16410__16412 = G__16409__16411;
var name__16413 = cljs.core.nth.call(null,vec__16410__16412,0,null);
var value__16414 = cljs.core.nth.call(null,vec__16410__16412,1,null);
var G__16406__16415 = G__16406__16407;

var G__16409__16416 = G__16409__16411;
var G__16406__16417 = G__16406__16415;

while(true){
var vec__16418__16419 = G__16409__16416;
var name__16420 = cljs.core.nth.call(null,vec__16418__16419,0,null);
var value__16421 = cljs.core.nth.call(null,vec__16418__16419,1,null);
var G__16406__16422 = G__16406__16417;

domina.set_attr_BANG_.call(null,content,name__16420,value__16421);
var temp__3698__auto____16423 = cljs.core.next.call(null,G__16406__16422);

if(cljs.core.truth_(temp__3698__auto____16423))
{var G__16406__16425 = temp__3698__auto____16423;

{
var G__16430 = cljs.core.first.call(null,G__16406__16425);
var G__16431 = G__16406__16425;
G__16409__16416 = G__16430;
G__16406__16417 = G__16431;
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
var G__16435__16436 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16435__16436))
{var node__16437 = cljs.core.first.call(null,G__16435__16436);
var G__16435__16438 = G__16435__16436;

while(true){
goog.dom.classes.add.call(null,node__16437,class$);
var temp__3698__auto____16441 = cljs.core.next.call(null,G__16435__16438);

if(cljs.core.truth_(temp__3698__auto____16441))
{var G__16435__16442 = temp__3698__auto____16441;

{
var G__16447 = cljs.core.first.call(null,G__16435__16442);
var G__16448 = G__16435__16442;
node__16437 = G__16447;
G__16435__16438 = G__16448;
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
var G__16451__16452 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16451__16452))
{var node__16453 = cljs.core.first.call(null,G__16451__16452);
var G__16451__16454 = G__16451__16452;

while(true){
goog.dom.classes.remove.call(null,node__16453,class$);
var temp__3698__auto____16455 = cljs.core.next.call(null,G__16451__16454);

if(cljs.core.truth_(temp__3698__auto____16455))
{var G__16451__16456 = temp__3698__auto____16455;

{
var G__16457 = cljs.core.first.call(null,G__16451__16456);
var G__16458 = G__16451__16456;
node__16453 = G__16457;
G__16451__16454 = G__16458;
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
var text__16463 = (function (content){
return text.call(null,content,true);
});
var text__16464 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16463.call(this,content);
case  2 :
return text__16464.call(this,content,normalize);
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
var G__16471__16472 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16471__16472))
{var node__16473 = cljs.core.first.call(null,G__16471__16472);
var G__16471__16474 = G__16471__16472;

while(true){
goog.dom.setTextContent.call(null,node__16473,value);
var temp__3698__auto____16475 = cljs.core.next.call(null,G__16471__16474);

if(cljs.core.truth_(temp__3698__auto____16475))
{var G__16471__16476 = temp__3698__auto____16475;

{
var G__16479 = cljs.core.first.call(null,G__16471__16476);
var G__16480 = G__16471__16476;
node__16473 = G__16479;
G__16471__16474 = G__16480;
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
var G__16487__16488 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16487__16488))
{var node__16489 = cljs.core.first.call(null,G__16487__16488);
var G__16487__16490 = G__16487__16488;

while(true){
goog.dom.forms.setValue.call(null,node__16489,value);
var temp__3698__auto____16491 = cljs.core.next.call(null,G__16487__16490);

if(cljs.core.truth_(temp__3698__auto____16491))
{var G__16487__16494 = temp__3698__auto____16491;

{
var G__16495 = cljs.core.first.call(null,G__16487__16494);
var G__16496 = G__16487__16494;
node__16489 = G__16495;
G__16487__16490 = G__16496;
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
var G__16507__16508 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16507__16508))
{var node__16509 = cljs.core.first.call(null,G__16507__16508);
var G__16507__16510 = G__16507__16508;

while(true){
node__16509.innerHTML = value;
var temp__3698__auto____16511 = cljs.core.next.call(null,G__16507__16510);

if(cljs.core.truth_(temp__3698__auto____16511))
{var G__16507__16514 = temp__3698__auto____16511;

{
var G__16515 = cljs.core.first.call(null,G__16507__16514);
var G__16516 = G__16507__16514;
node__16509 = G__16515;
G__16507__16510 = G__16516;
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
var parents__16521 = domina.nodes.call(null,parent_content);
var children__16522 = domina.nodes.call(null,child_content);
var first_child__16536 = (function (){var frag__16524 = document.createDocumentFragment();

var G__16525__16528 = cljs.core.seq.call(null,children__16522);

if(cljs.core.truth_(G__16525__16528))
{var child__16529 = cljs.core.first.call(null,G__16525__16528);
var G__16525__16530 = G__16525__16528;

while(true){
frag__16524.appendChild(child__16529);
var temp__3698__auto____16532 = cljs.core.next.call(null,G__16525__16530);

if(cljs.core.truth_(temp__3698__auto____16532))
{var G__16525__16534 = temp__3698__auto____16532;

{
var G__16539 = cljs.core.first.call(null,G__16525__16534);
var G__16542 = G__16525__16534;
child__16529 = G__16539;
G__16525__16530 = G__16542;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16524;
})();
var other_children__16537 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16521) - 1),(function (){
return first_child__16536.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16521)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16522)));
throw "lolwhut";
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16521)))
{f.call(null,cljs.core.first.call(null,parents__16521),first_child__16536);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16503_SHARP_,p2__16505_SHARP_){
return f.call(null,p1__16503_SHARP_,p2__16505_SHARP_);
}),cljs.core.rest.call(null,parents__16521),other_children__16537));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16546 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16547 = (function (nl,n){
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
return lazy_nodelist__16546.call(this,nl);
case  2 :
return lazy_nodelist__16547.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6772__auto____16550 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16552 = x__6772__auto____16550;

if(cljs.core.truth_(and__3546__auto____16552))
{var and__3546__auto____16553 = x__6772__auto____16550.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16553))
{var and__3546__auto____16555 = x__6772__auto____16550.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16555))
{return cljs.core.not.call(null,x__6772__auto____16550.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16555;
}
} else
{return and__3546__auto____16553;
}
} else
{return and__3546__auto____16552;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6772__auto____16550);
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
var inner_wrapper__16557 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16558 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16557));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16558),1)))
{return inner_wrapper__16557.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16557));
} else
{return children__16558;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16561__16562 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16563 = cljs.core.nth.call(null,vec__16561__16562,0,null);
var table_level__16564 = cljs.core.nth.call(null,vec__16561__16562,1,null);
var ___16565 = cljs.core.nthnext.call(null,vec__16561__16562,2);
var wrapper__16566 = domina.create_wrapper.call(null,table_level__16564);

domina.set_wrapper_html_BANG_.call(null,wrapper__16566,content);
return domina.extract_wrapper_dom.call(null,wrapper__16566,table_level__16564);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6772__auto____16567 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16568 = x__6772__auto____16567;

if(cljs.core.truth_(and__3546__auto____16568))
{var and__3546__auto____16569 = x__6772__auto____16567.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16569))
{var and__3546__auto____16570 = x__6772__auto____16567.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16570))
{return cljs.core.not.call(null,x__6772__auto____16567.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16570;
}
} else
{return and__3546__auto____16569;
}
} else
{return and__3546__auto____16568;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6772__auto____16567);
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
if(cljs.core.truth_((function (){var x__6772__auto____16571 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16572 = x__6772__auto____16571;

if(cljs.core.truth_(and__3546__auto____16572))
{var and__3546__auto____16573 = x__6772__auto____16571.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16573))
{var and__3546__auto____16574 = x__6772__auto____16571.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16574))
{return cljs.core.not.call(null,x__6772__auto____16571.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16574;
}
} else
{return and__3546__auto____16573;
}
} else
{return and__3546__auto____16572;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6772__auto____16571);
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
var G__16593 = null;
var G__16593__16594 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16593__16595 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16593 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16593__16594.call(this,nodelist,n);
case  3 :
return G__16593__16595.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16593;
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
var G__16609 = null;
var G__16609__16610 = (function (coll,n){
return coll.item(n);
});
var G__16609__16611 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16609 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16609__16610.call(this,coll,n);
case  3 :
return G__16609__16611.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16609;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
