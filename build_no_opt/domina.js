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
if(cljs.core.truth_((function (){var and__3546__auto____15958 = content;

if(cljs.core.truth_(and__3546__auto____15958))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15958;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15962 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15962))
{return or__3548__auto____15962;
} else
{var or__3548__auto____15964 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15964))
{return or__3548__auto____15964;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15966 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15966))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15966;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15970 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15970))
{return or__3548__auto____15970;
} else
{var or__3548__auto____15971 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15971))
{return or__3548__auto____15971;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16018 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16018))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16018;
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
if(cljs.core.truth_((void 0 === domina.t16023)))
{
/**
* @constructor
*/
domina.t16023 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16023.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16023");
});
domina.t16023.prototype.domina$DomContent$ = true;
domina.t16023.prototype.domina$DomContent$nodes = (function (_){
var this__16081 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16081.class_name)));
});
domina.t16023.prototype.domina$DomContent$single_node = (function (_){
var this__16087 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16087.class_name)));
});
domina.t16023.prototype.cljs$core$IMeta$ = true;
domina.t16023.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16097 = this;
return this__16097.__meta;
});
domina.t16023.prototype.cljs$core$IWithMeta$ = true;
domina.t16023.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16100 = this;
return (new domina.t16023(this__16100.class_name,this__16100.by_class,__meta));
});
domina.t16023;
} else
{}
return (new domina.t16023(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16109_SHARP_){
return p1__16109_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16129_SHARP_,p2__16130_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16129_SHARP_,p2__16130_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16159_SHARP_,p2__16158_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16158_SHARP_,p1__16159_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16170_SHARP_,p2__16169_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16169_SHARP_,p1__16170_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16177_SHARP_,p2__16176_SHARP_){
return goog.dom.replaceNode.call(null,p2__16176_SHARP_,p1__16177_SHARP_);
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
var s__16231 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16231))))
{return s__16231;
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
var G__16256__16258 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16256__16258))
{var n__16260 = cljs.core.first.call(null,G__16256__16258);
var G__16256__16261 = G__16256__16258;

while(true){
goog.style.setStyle.call(null,n__16260,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16265 = cljs.core.next.call(null,G__16256__16261);

if(cljs.core.truth_(temp__3698__auto____16265))
{var G__16256__16268 = temp__3698__auto____16265;

{
var G__16270 = cljs.core.first.call(null,G__16256__16268);
var G__16271 = G__16256__16268;
n__16260 = G__16270;
G__16256__16261 = G__16271;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16272){
var content = cljs.core.first(arglist__16272);
var name = cljs.core.first(cljs.core.next(arglist__16272));
var value = cljs.core.rest(cljs.core.next(arglist__16272));
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
var G__16275__16276 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16275__16276))
{var n__16277 = cljs.core.first.call(null,G__16275__16276);
var G__16275__16278 = G__16275__16276;

while(true){
n__16277.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16282 = cljs.core.next.call(null,G__16275__16278);

if(cljs.core.truth_(temp__3698__auto____16282))
{var G__16275__16283 = temp__3698__auto____16282;

{
var G__16286 = cljs.core.first.call(null,G__16275__16283);
var G__16288 = G__16275__16283;
n__16277 = G__16286;
G__16275__16278 = G__16288;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16292){
var content = cljs.core.first(arglist__16292);
var name = cljs.core.first(cljs.core.next(arglist__16292));
var value = cljs.core.rest(cljs.core.next(arglist__16292));
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
var vec__16295__16296 = pair.split(/\s*:\s*/);
var k__16297 = cljs.core.nth.call(null,vec__16295__16296,0,null);
var v__16298 = cljs.core.nth.call(null,vec__16295__16296,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16299 = k__16297;

if(cljs.core.truth_(and__3546__auto____16299))
{return v__16298;
} else
{return and__3546__auto____16299;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16297.toLowerCase()),v__16298);
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
var node__16310 = domina.single_node.call(null,content);
var attrs__16311 = node__16310.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16302_SHARP_){
var attr__16314 = attrs__16311.item(p1__16302_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16314.nodeName.toLowerCase())],[attr__16314.nodeValue]);
}),cljs.core.range.call(null,attrs__16311.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16325__16340 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16325__16340))
{var G__16342__16344 = cljs.core.first.call(null,G__16325__16340);
var vec__16343__16345 = G__16342__16344;
var name__16346 = cljs.core.nth.call(null,vec__16343__16345,0,null);
var value__16347 = cljs.core.nth.call(null,vec__16343__16345,1,null);
var G__16325__16349 = G__16325__16340;

var G__16342__16351 = G__16342__16344;
var G__16325__16353 = G__16325__16349;

while(true){
var vec__16355__16356 = G__16342__16351;
var name__16357 = cljs.core.nth.call(null,vec__16355__16356,0,null);
var value__16358 = cljs.core.nth.call(null,vec__16355__16356,1,null);
var G__16325__16359 = G__16325__16353;

domina.set_style_BANG_.call(null,content,name__16357,value__16358);
var temp__3698__auto____16360 = cljs.core.next.call(null,G__16325__16359);

if(cljs.core.truth_(temp__3698__auto____16360))
{var G__16325__16363 = temp__3698__auto____16360;

{
var G__16393 = cljs.core.first.call(null,G__16325__16363);
var G__16395 = G__16325__16363;
G__16342__16351 = G__16393;
G__16325__16353 = G__16395;
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
var G__16397__16398 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16397__16398))
{var G__16400__16405 = cljs.core.first.call(null,G__16397__16398);
var vec__16404__16406 = G__16400__16405;
var name__16407 = cljs.core.nth.call(null,vec__16404__16406,0,null);
var value__16408 = cljs.core.nth.call(null,vec__16404__16406,1,null);
var G__16397__16409 = G__16397__16398;

var G__16400__16410 = G__16400__16405;
var G__16397__16411 = G__16397__16409;

while(true){
var vec__16412__16413 = G__16400__16410;
var name__16414 = cljs.core.nth.call(null,vec__16412__16413,0,null);
var value__16415 = cljs.core.nth.call(null,vec__16412__16413,1,null);
var G__16397__16416 = G__16397__16411;

domina.set_attr_BANG_.call(null,content,name__16414,value__16415);
var temp__3698__auto____16418 = cljs.core.next.call(null,G__16397__16416);

if(cljs.core.truth_(temp__3698__auto____16418))
{var G__16397__16421 = temp__3698__auto____16418;

{
var G__16428 = cljs.core.first.call(null,G__16397__16421);
var G__16429 = G__16397__16421;
G__16400__16410 = G__16428;
G__16397__16411 = G__16429;
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
var G__16430__16431 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16430__16431))
{var node__16436 = cljs.core.first.call(null,G__16430__16431);
var G__16430__16437 = G__16430__16431;

while(true){
goog.dom.classes.add.call(null,node__16436,class$);
var temp__3698__auto____16438 = cljs.core.next.call(null,G__16430__16437);

if(cljs.core.truth_(temp__3698__auto____16438))
{var G__16430__16439 = temp__3698__auto____16438;

{
var G__16440 = cljs.core.first.call(null,G__16430__16439);
var G__16441 = G__16430__16439;
node__16436 = G__16440;
G__16430__16437 = G__16441;
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
var G__16442__16443 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16442__16443))
{var node__16444 = cljs.core.first.call(null,G__16442__16443);
var G__16442__16446 = G__16442__16443;

while(true){
goog.dom.classes.remove.call(null,node__16444,class$);
var temp__3698__auto____16450 = cljs.core.next.call(null,G__16442__16446);

if(cljs.core.truth_(temp__3698__auto____16450))
{var G__16442__16451 = temp__3698__auto____16450;

{
var G__16452 = cljs.core.first.call(null,G__16442__16451);
var G__16453 = G__16442__16451;
node__16444 = G__16452;
G__16442__16446 = G__16453;
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
var text__16454 = (function (content){
return text.call(null,content,true);
});
var text__16455 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16454.call(this,content);
case  2 :
return text__16455.call(this,content,normalize);
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
var G__16457__16458 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16457__16458))
{var node__16461 = cljs.core.first.call(null,G__16457__16458);
var G__16457__16462 = G__16457__16458;

while(true){
goog.dom.setTextContent.call(null,node__16461,value);
var temp__3698__auto____16463 = cljs.core.next.call(null,G__16457__16462);

if(cljs.core.truth_(temp__3698__auto____16463))
{var G__16457__16464 = temp__3698__auto____16463;

{
var G__16466 = cljs.core.first.call(null,G__16457__16464);
var G__16467 = G__16457__16464;
node__16461 = G__16466;
G__16457__16462 = G__16467;
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
var G__16470__16472 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16470__16472))
{var node__16473 = cljs.core.first.call(null,G__16470__16472);
var G__16470__16474 = G__16470__16472;

while(true){
goog.dom.forms.setValue.call(null,node__16473,value);
var temp__3698__auto____16476 = cljs.core.next.call(null,G__16470__16474);

if(cljs.core.truth_(temp__3698__auto____16476))
{var G__16470__16477 = temp__3698__auto____16476;

{
var G__16481 = cljs.core.first.call(null,G__16470__16477);
var G__16482 = G__16470__16477;
node__16473 = G__16481;
G__16470__16474 = G__16482;
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
var G__16488__16489 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16488__16489))
{var node__16490 = cljs.core.first.call(null,G__16488__16489);
var G__16488__16491 = G__16488__16489;

while(true){
node__16490.innerHTML = value;
var temp__3698__auto____16492 = cljs.core.next.call(null,G__16488__16491);

if(cljs.core.truth_(temp__3698__auto____16492))
{var G__16488__16493 = temp__3698__auto____16492;

{
var G__16494 = cljs.core.first.call(null,G__16488__16493);
var G__16495 = G__16488__16493;
node__16490 = G__16494;
G__16488__16491 = G__16495;
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
var parents__16496 = domina.nodes.call(null,parent_content);
var children__16497 = domina.nodes.call(null,child_content);
var first_child__16509 = (function (){var frag__16498 = document.createDocumentFragment();

var G__16499__16500 = cljs.core.seq.call(null,children__16497);

if(cljs.core.truth_(G__16499__16500))
{var child__16501 = cljs.core.first.call(null,G__16499__16500);
var G__16499__16502 = G__16499__16500;

while(true){
frag__16498.appendChild(child__16501);
var temp__3698__auto____16505 = cljs.core.next.call(null,G__16499__16502);

if(cljs.core.truth_(temp__3698__auto____16505))
{var G__16499__16506 = temp__3698__auto____16505;

{
var G__16515 = cljs.core.first.call(null,G__16499__16506);
var G__16516 = G__16499__16506;
child__16501 = G__16515;
G__16499__16502 = G__16516;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16498;
})();
var other_children__16512 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16496) - 1),(function (){
return first_child__16509.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16496)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16497)));
throw "fail here";
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16496)))
{f.call(null,cljs.core.first.call(null,parents__16496),first_child__16509);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16486_SHARP_,p2__16487_SHARP_){
return f.call(null,p1__16486_SHARP_,p2__16487_SHARP_);
}),cljs.core.rest.call(null,parents__16496),other_children__16512));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16524 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16525 = (function (nl,n){
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
return lazy_nodelist__16524.call(this,nl);
case  2 :
return lazy_nodelist__16525.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6772__auto____16534 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16536 = x__6772__auto____16534;

if(cljs.core.truth_(and__3546__auto____16536))
{var and__3546__auto____16537 = x__6772__auto____16534.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16537))
{var and__3546__auto____16538 = x__6772__auto____16534.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16538))
{return cljs.core.not.call(null,x__6772__auto____16534.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16538;
}
} else
{return and__3546__auto____16537;
}
} else
{return and__3546__auto____16536;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6772__auto____16534);
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
var inner_wrapper__16550 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16551 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16550));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16551),1)))
{return inner_wrapper__16550.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16550));
} else
{return children__16551;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16552__16553 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16554 = cljs.core.nth.call(null,vec__16552__16553,0,null);
var table_level__16556 = cljs.core.nth.call(null,vec__16552__16553,1,null);
var ___16557 = cljs.core.nthnext.call(null,vec__16552__16553,2);
var wrapper__16558 = domina.create_wrapper.call(null,table_level__16556);

domina.set_wrapper_html_BANG_.call(null,wrapper__16558,content);
return domina.extract_wrapper_dom.call(null,wrapper__16558,table_level__16556);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6772__auto____16561 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16562 = x__6772__auto____16561;

if(cljs.core.truth_(and__3546__auto____16562))
{var and__3546__auto____16563 = x__6772__auto____16561.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16563))
{var and__3546__auto____16564 = x__6772__auto____16561.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16564))
{return cljs.core.not.call(null,x__6772__auto____16561.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16564;
}
} else
{return and__3546__auto____16563;
}
} else
{return and__3546__auto____16562;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6772__auto____16561);
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
if(cljs.core.truth_((function (){var x__6772__auto____16569 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16570 = x__6772__auto____16569;

if(cljs.core.truth_(and__3546__auto____16570))
{var and__3546__auto____16571 = x__6772__auto____16569.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16571))
{var and__3546__auto____16572 = x__6772__auto____16569.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16572))
{return cljs.core.not.call(null,x__6772__auto____16569.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16572;
}
} else
{return and__3546__auto____16571;
}
} else
{return and__3546__auto____16570;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6772__auto____16569);
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
var G__16573 = null;
var G__16573__16574 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16573__16575 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16573 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16573__16574.call(this,nodelist,n);
case  3 :
return G__16573__16575.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16573;
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
var G__16597 = null;
var G__16597__16598 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16597__16599 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16597 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16597__16598.call(this,nodelist,n);
case  3 :
return G__16597__16599.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16597;
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
var G__16605 = null;
var G__16605__16606 = (function (coll,n){
return coll.item(n);
});
var G__16605__16607 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16605 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16605__16606.call(this,coll,n);
case  3 :
return G__16605__16607.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16605;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
