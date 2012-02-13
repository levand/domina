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
if(cljs.core.truth_((function (){var and__3546__auto____14075 = content;

if(cljs.core.truth_(and__3546__auto____14075))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____14075;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____14076 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____14076))
{return or__3548__auto____14076;
} else
{var or__3548__auto____14077 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____14077))
{return or__3548__auto____14077;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____14080 = nodeseq;

if(cljs.core.truth_(and__3546__auto____14080))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____14080;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____14081 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____14081))
{return or__3548__auto____14081;
} else
{var or__3548__auto____14082 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____14082))
{return or__3548__auto____14082;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____14090 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____14090))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____14090;
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
if(cljs.core.truth_((void 0 === domina.t14099)))
{
/**
* @constructor
*/
domina.t14099 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t14099.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t14099");
});
domina.t14099.prototype.domina$DomContent$ = true;
domina.t14099.prototype.domina$DomContent$nodes = (function (_){
var this__14102 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__14102.class_name)));
});
domina.t14099.prototype.domina$DomContent$single_node = (function (_){
var this__14103 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__14103.class_name)));
});
domina.t14099.prototype.cljs$core$IMeta$ = true;
domina.t14099.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14107 = this;
return this__14107.__meta;
});
domina.t14099.prototype.cljs$core$IWithMeta$ = true;
domina.t14099.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14110 = this;
return (new domina.t14099(this__14110.class_name,this__14110.by_class,__meta));
});
domina.t14099;
} else
{}
return (new domina.t14099(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__14112_SHARP_){
return p1__14112_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__14117_SHARP_,p2__14118_SHARP_){
return goog.dom.insertChildAt.call(null,p1__14117_SHARP_,p2__14118_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__14181_SHARP_,p2__14180_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__14180_SHARP_,p1__14181_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14183_SHARP_,p2__14182_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__14182_SHARP_,p1__14183_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14186_SHARP_,p2__14185_SHARP_){
return goog.dom.replaceNode.call(null,p2__14185_SHARP_,p1__14186_SHARP_);
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
var s__14198 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__14198))))
{return s__14198;
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
var G__14200__14201 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14200__14201))
{var n__14204 = cljs.core.first.call(null,G__14200__14201);
var G__14200__14205 = G__14200__14201;

while(true){
goog.style.setStyle.call(null,n__14204,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____14206 = cljs.core.next.call(null,G__14200__14205);

if(cljs.core.truth_(temp__3698__auto____14206))
{var G__14200__14207 = temp__3698__auto____14206;

{
var G__14210 = cljs.core.first.call(null,G__14200__14207);
var G__14211 = G__14200__14207;
n__14204 = G__14210;
G__14200__14205 = G__14211;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__14212){
var content = cljs.core.first(arglist__14212);
var name = cljs.core.first(cljs.core.next(arglist__14212));
var value = cljs.core.rest(cljs.core.next(arglist__14212));
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
var G__14216__14217 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14216__14217))
{var n__14219 = cljs.core.first.call(null,G__14216__14217);
var G__14216__14220 = G__14216__14217;

while(true){
n__14219.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____14226 = cljs.core.next.call(null,G__14216__14220);

if(cljs.core.truth_(temp__3698__auto____14226))
{var G__14216__14227 = temp__3698__auto____14226;

{
var G__14232 = cljs.core.first.call(null,G__14216__14227);
var G__14233 = G__14216__14227;
n__14219 = G__14232;
G__14216__14220 = G__14233;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__14236){
var content = cljs.core.first(arglist__14236);
var name = cljs.core.first(cljs.core.next(arglist__14236));
var value = cljs.core.rest(cljs.core.next(arglist__14236));
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
var vec__14239__14240 = pair.split(/\s*:\s*/);
var k__14241 = cljs.core.nth.call(null,vec__14239__14240,0,null);
var v__14242 = cljs.core.nth.call(null,vec__14239__14240,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____14243 = k__14241;

if(cljs.core.truth_(and__3546__auto____14243))
{return v__14242;
} else
{return and__3546__auto____14243;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__14241.toLowerCase()),v__14242);
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
var node__14271 = domina.single_node.call(null,content);
var attrs__14272 = node__14271.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14269_SHARP_){
var attr__14273 = attrs__14272.item(p1__14269_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__14273.nodeName.toLowerCase())],[attr__14273.nodeValue]);
}),cljs.core.range.call(null,attrs__14272.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__14278__14279 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__14278__14279))
{var G__14281__14283 = cljs.core.first.call(null,G__14278__14279);
var vec__14282__14284 = G__14281__14283;
var name__14285 = cljs.core.nth.call(null,vec__14282__14284,0,null);
var value__14286 = cljs.core.nth.call(null,vec__14282__14284,1,null);
var G__14278__14287 = G__14278__14279;

var G__14281__14288 = G__14281__14283;
var G__14278__14289 = G__14278__14287;

while(true){
var vec__14290__14291 = G__14281__14288;
var name__14292 = cljs.core.nth.call(null,vec__14290__14291,0,null);
var value__14293 = cljs.core.nth.call(null,vec__14290__14291,1,null);
var G__14278__14294 = G__14278__14289;

domina.set_style_BANG_.call(null,content,name__14292,value__14293);
var temp__3698__auto____14295 = cljs.core.next.call(null,G__14278__14294);

if(cljs.core.truth_(temp__3698__auto____14295))
{var G__14278__14296 = temp__3698__auto____14295;

{
var G__14298 = cljs.core.first.call(null,G__14278__14296);
var G__14299 = G__14278__14296;
G__14281__14288 = G__14298;
G__14278__14289 = G__14299;
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
var G__14300__14301 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__14300__14301))
{var G__14343__14346 = cljs.core.first.call(null,G__14300__14301);
var vec__14344__14347 = G__14343__14346;
var name__14349 = cljs.core.nth.call(null,vec__14344__14347,0,null);
var value__14351 = cljs.core.nth.call(null,vec__14344__14347,1,null);
var G__14300__14352 = G__14300__14301;

var G__14343__14354 = G__14343__14346;
var G__14300__14355 = G__14300__14352;

while(true){
var vec__14357__14358 = G__14343__14354;
var name__14359 = cljs.core.nth.call(null,vec__14357__14358,0,null);
var value__14360 = cljs.core.nth.call(null,vec__14357__14358,1,null);
var G__14300__14361 = G__14300__14355;

domina.set_attr_BANG_.call(null,content,name__14359,value__14360);
var temp__3698__auto____14362 = cljs.core.next.call(null,G__14300__14361);

if(cljs.core.truth_(temp__3698__auto____14362))
{var G__14300__14363 = temp__3698__auto____14362;

{
var G__14367 = cljs.core.first.call(null,G__14300__14363);
var G__14368 = G__14300__14363;
G__14343__14354 = G__14367;
G__14300__14355 = G__14368;
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
var G__14371__14374 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14371__14374))
{var node__14376 = cljs.core.first.call(null,G__14371__14374);
var G__14371__14377 = G__14371__14374;

while(true){
goog.dom.classes.add.call(null,node__14376,class$);
var temp__3698__auto____14378 = cljs.core.next.call(null,G__14371__14377);

if(cljs.core.truth_(temp__3698__auto____14378))
{var G__14371__14379 = temp__3698__auto____14378;

{
var G__14380 = cljs.core.first.call(null,G__14371__14379);
var G__14381 = G__14371__14379;
node__14376 = G__14380;
G__14371__14377 = G__14381;
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
var G__14384__14388 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14384__14388))
{var node__14392 = cljs.core.first.call(null,G__14384__14388);
var G__14384__14394 = G__14384__14388;

while(true){
goog.dom.classes.remove.call(null,node__14392,class$);
var temp__3698__auto____14402 = cljs.core.next.call(null,G__14384__14394);

if(cljs.core.truth_(temp__3698__auto____14402))
{var G__14384__14404 = temp__3698__auto____14402;

{
var G__14413 = cljs.core.first.call(null,G__14384__14404);
var G__14414 = G__14384__14404;
node__14392 = G__14413;
G__14384__14394 = G__14414;
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
var text__14431 = (function (content){
return text.call(null,content,true);
});
var text__14433 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__14431.call(this,content);
case  2 :
return text__14433.call(this,content,normalize);
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
var G__14448__14450 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14448__14450))
{var node__14451 = cljs.core.first.call(null,G__14448__14450);
var G__14448__14452 = G__14448__14450;

while(true){
goog.dom.setTextContent.call(null,node__14451,value);
var temp__3698__auto____14453 = cljs.core.next.call(null,G__14448__14452);

if(cljs.core.truth_(temp__3698__auto____14453))
{var G__14448__14454 = temp__3698__auto____14453;

{
var G__14460 = cljs.core.first.call(null,G__14448__14454);
var G__14461 = G__14448__14454;
node__14451 = G__14460;
G__14448__14452 = G__14461;
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
var G__14470__14472 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14470__14472))
{var node__14475 = cljs.core.first.call(null,G__14470__14472);
var G__14470__14476 = G__14470__14472;

while(true){
goog.dom.forms.setValue.call(null,node__14475,value);
var temp__3698__auto____14478 = cljs.core.next.call(null,G__14470__14476);

if(cljs.core.truth_(temp__3698__auto____14478))
{var G__14470__14480 = temp__3698__auto____14478;

{
var G__14487 = cljs.core.first.call(null,G__14470__14480);
var G__14490 = G__14470__14480;
node__14475 = G__14487;
G__14470__14476 = G__14490;
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
var G__14499__14500 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14499__14500))
{var node__14501 = cljs.core.first.call(null,G__14499__14500);
var G__14499__14502 = G__14499__14500;

while(true){
node__14501.innerHTML = value;
var temp__3698__auto____14506 = cljs.core.next.call(null,G__14499__14502);

if(cljs.core.truth_(temp__3698__auto____14506))
{var G__14499__14507 = temp__3698__auto____14506;

{
var G__14511 = cljs.core.first.call(null,G__14499__14507);
var G__14512 = G__14499__14507;
node__14501 = G__14511;
G__14499__14502 = G__14512;
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
var parents__14515 = domina.nodes.call(null,parent_content);
var children__14516 = domina.nodes.call(null,child_content);
var first_child__14541 = (function (){var frag__14521 = document.createDocumentFragment();

var G__14522__14524 = cljs.core.seq.call(null,children__14516);

if(cljs.core.truth_(G__14522__14524))
{var child__14525 = cljs.core.first.call(null,G__14522__14524);
var G__14522__14526 = G__14522__14524;

while(true){
frag__14521.appendChild(child__14525);
var temp__3698__auto____14538 = cljs.core.next.call(null,G__14522__14526);

if(cljs.core.truth_(temp__3698__auto____14538))
{var G__14522__14539 = temp__3698__auto____14538;

{
var G__14547 = cljs.core.first.call(null,G__14522__14539);
var G__14548 = G__14522__14539;
child__14525 = G__14547;
G__14522__14526 = G__14548;
continue;
}
} else
{}
break;
}
} else
{}
return frag__14521;
})();
var other_children__14542 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__14515) - 1),(function (){
return first_child__14541.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__14515)))
{f.call(null,cljs.core.first.call(null,parents__14515),first_child__14541);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__14497_SHARP_,p2__14498_SHARP_){
return f.call(null,p1__14497_SHARP_,p2__14498_SHARP_);
}),cljs.core.rest.call(null,parents__14515),other_children__14542));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__14568 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__14569 = (function (nl,n){
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
return lazy_nl_via_item__14568.call(this,nl);
case  2 :
return lazy_nl_via_item__14569.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__14576 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__14578 = (function (nl,n){
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
return lazy_nl_via_array_ref__14576.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__14578.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__5114__auto____14584 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____14586 = x__5114__auto____14584;

if(cljs.core.truth_(and__3546__auto____14586))
{var and__3546__auto____14587 = x__5114__auto____14584.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____14587))
{var and__3546__auto____14589 = x__5114__auto____14584.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____14589))
{return cljs.core.not.call(null,x__5114__auto____14584.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____14589;
}
} else
{return and__3546__auto____14587;
}
} else
{return and__3546__auto____14586;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5114__auto____14584);
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
var inner_wrapper__14608 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__14609 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__14608));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__14609),1)))
{return inner_wrapper__14608.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__14608));
} else
{return children__14609;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__14615__14616 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___14617 = cljs.core.nth.call(null,vec__14615__14616,0,null);
var table_level__14646 = cljs.core.nth.call(null,vec__14615__14616,1,null);
var ___14648 = cljs.core.nthnext.call(null,vec__14615__14616,2);
var wrapper__14649 = domina.create_wrapper.call(null,table_level__14646);

domina.set_wrapper_html_BANG_.call(null,wrapper__14649,content);
return domina.extract_wrapper_dom.call(null,wrapper__14649,table_level__14646);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5114__auto____14654 = content;

if(cljs.core.truth_((function (){var and__3546__auto____14655 = x__5114__auto____14654;

if(cljs.core.truth_(and__3546__auto____14655))
{var and__3546__auto____14656 = x__5114__auto____14654.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____14656))
{var and__3546__auto____14657 = x__5114__auto____14654.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____14657))
{return cljs.core.not.call(null,x__5114__auto____14654.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____14657;
}
} else
{return and__3546__auto____14656;
}
} else
{return and__3546__auto____14655;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5114__auto____14654);
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
if(cljs.core.truth_((function (){var x__5114__auto____14658 = content;

if(cljs.core.truth_((function (){var and__3546__auto____14659 = x__5114__auto____14658;

if(cljs.core.truth_(and__3546__auto____14659))
{var and__3546__auto____14660 = x__5114__auto____14658.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____14660))
{var and__3546__auto____14661 = x__5114__auto____14658.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____14661))
{return cljs.core.not.call(null,x__5114__auto____14658.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____14661;
}
} else
{return and__3546__auto____14660;
}
} else
{return and__3546__auto____14659;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5114__auto____14658);
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
var G__14680 = null;
var G__14680__14681 = (function (nodelist,n){
return nodelist.item(n);
});
var G__14680__14748 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__14680 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__14680__14681.call(this,nodelist,n);
case  3 :
return G__14680__14748.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14680;
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
var G__14755 = null;
var G__14755__14756 = (function (nodelist,n){
return nodelist.item(n);
});
var G__14755__14757 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__14755 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__14755__14756.call(this,nodelist,n);
case  3 :
return G__14755__14757.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14755;
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
var G__14772 = null;
var G__14772__14773 = (function (coll,n){
return coll.item(n);
});
var G__14772__14774 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__14772 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__14772__14773.call(this,coll,n);
case  3 :
return G__14772__14774.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14772;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
