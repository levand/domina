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
if(cljs.core.truth_((function (){var and__3546__auto____16032 = content;

if(cljs.core.truth_(and__3546__auto____16032))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16032;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16033 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16033))
{return or__3548__auto____16033;
} else
{var or__3548__auto____16034 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16034))
{return or__3548__auto____16034;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16038 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16038))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16038;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16039 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16039))
{return or__3548__auto____16039;
} else
{var or__3548__auto____16040 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16040))
{return or__3548__auto____16040;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16060 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16060))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16060;
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
if(cljs.core.truth_((void 0 === domina.t16136)))
{
/**
* @constructor
*/
domina.t16136 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16136.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16136");
});
domina.t16136.prototype.domina$DomContent$ = true;
domina.t16136.prototype.domina$DomContent$nodes = (function (_){
var this__16146 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16146.class_name)));
});
domina.t16136.prototype.domina$DomContent$single_node = (function (_){
var this__16149 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16149.class_name)));
});
domina.t16136.prototype.cljs$core$IMeta$ = true;
domina.t16136.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16153 = this;
return this__16153.__meta;
});
domina.t16136.prototype.cljs$core$IWithMeta$ = true;
domina.t16136.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16156 = this;
return (new domina.t16136(this__16156.class_name,this__16156.by_class,__meta));
});
domina.t16136;
} else
{}
return (new domina.t16136(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16172_SHARP_){
return p1__16172_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16194_SHARP_,p2__16193_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16193_SHARP_,p1__16194_SHARP_);
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
domina.apply_with_cloning.call(null,(function (p1__16203_SHARP_,p2__16202_SHARP_){
return goog.dom.replaceNode.call(null,p2__16202_SHARP_,p1__16203_SHARP_);
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
var s__16218 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16218))))
{return s__16218;
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
var G__16236__16237 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16236__16237))
{var n__16238 = cljs.core.first.call(null,G__16236__16237);
var G__16236__16239 = G__16236__16237;

while(true){
goog.style.setStyle.call(null,n__16238,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16240 = cljs.core.next.call(null,G__16236__16239);

if(cljs.core.truth_(temp__3698__auto____16240))
{var G__16236__16242 = temp__3698__auto____16240;

{
var G__16257 = cljs.core.first.call(null,G__16236__16242);
var G__16258 = G__16236__16242;
n__16238 = G__16257;
G__16236__16239 = G__16258;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16268){
var content = cljs.core.first(arglist__16268);
var name = cljs.core.first(cljs.core.next(arglist__16268));
var value = cljs.core.rest(cljs.core.next(arglist__16268));
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
var G__16284__16286 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16284__16286))
{var n__16287 = cljs.core.first.call(null,G__16284__16286);
var G__16284__16288 = G__16284__16286;

while(true){
n__16287.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16289 = cljs.core.next.call(null,G__16284__16288);

if(cljs.core.truth_(temp__3698__auto____16289))
{var G__16284__16290 = temp__3698__auto____16289;

{
var G__16296 = cljs.core.first.call(null,G__16284__16290);
var G__16297 = G__16284__16290;
n__16287 = G__16296;
G__16284__16288 = G__16297;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16301){
var content = cljs.core.first(arglist__16301);
var name = cljs.core.first(cljs.core.next(arglist__16301));
var value = cljs.core.rest(cljs.core.next(arglist__16301));
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
var vec__16313__16316 = pair.split(/\s*:\s*/);
var k__16317 = cljs.core.nth.call(null,vec__16313__16316,0,null);
var v__16318 = cljs.core.nth.call(null,vec__16313__16316,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16320 = k__16317;

if(cljs.core.truth_(and__3546__auto____16320))
{return v__16318;
} else
{return and__3546__auto____16320;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16317.toLowerCase()),v__16318);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16328 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16328)))
{return domina.parse_style_attributes.call(null,style__16328);
} else
{if(cljs.core.truth_(style__16328.cssText))
{return domina.parse_style_attributes.call(null,style__16328.cssText);
} else
{throw (new Error("Could not find style string for object."));
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16337 = domina.single_node.call(null,content);
var attrs__16339 = node__16337.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16327_SHARP_){
var attr__16346 = attrs__16339.item(p1__16327_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16346.nodeName.toLowerCase())],[attr__16346.nodeValue]);
}),cljs.core.range.call(null,attrs__16339.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16351__16352 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16351__16352))
{var G__16354__16358 = cljs.core.first.call(null,G__16351__16352);
var vec__16355__16359 = G__16354__16358;
var name__16360 = cljs.core.nth.call(null,vec__16355__16359,0,null);
var value__16361 = cljs.core.nth.call(null,vec__16355__16359,1,null);
var G__16351__16362 = G__16351__16352;

var G__16354__16363 = G__16354__16358;
var G__16351__16366 = G__16351__16362;

while(true){
var vec__16367__16368 = G__16354__16363;
var name__16369 = cljs.core.nth.call(null,vec__16367__16368,0,null);
var value__16370 = cljs.core.nth.call(null,vec__16367__16368,1,null);
var G__16351__16371 = G__16351__16366;

domina.set_style_BANG_.call(null,content,name__16369,value__16370);
var temp__3698__auto____16373 = cljs.core.next.call(null,G__16351__16371);

if(cljs.core.truth_(temp__3698__auto____16373))
{var G__16351__16374 = temp__3698__auto____16373;

{
var G__16384 = cljs.core.first.call(null,G__16351__16374);
var G__16385 = G__16351__16374;
G__16354__16363 = G__16384;
G__16351__16366 = G__16385;
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
var G__16388__16389 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16388__16389))
{var G__16391__16393 = cljs.core.first.call(null,G__16388__16389);
var vec__16392__16394 = G__16391__16393;
var name__16395 = cljs.core.nth.call(null,vec__16392__16394,0,null);
var value__16396 = cljs.core.nth.call(null,vec__16392__16394,1,null);
var G__16388__16397 = G__16388__16389;

var G__16391__16398 = G__16391__16393;
var G__16388__16399 = G__16388__16397;

while(true){
var vec__16400__16401 = G__16391__16398;
var name__16402 = cljs.core.nth.call(null,vec__16400__16401,0,null);
var value__16403 = cljs.core.nth.call(null,vec__16400__16401,1,null);
var G__16388__16404 = G__16388__16399;

domina.set_attr_BANG_.call(null,content,name__16402,value__16403);
var temp__3698__auto____16412 = cljs.core.next.call(null,G__16388__16404);

if(cljs.core.truth_(temp__3698__auto____16412))
{var G__16388__16413 = temp__3698__auto____16412;

{
var G__16415 = cljs.core.first.call(null,G__16388__16413);
var G__16416 = G__16388__16413;
G__16391__16398 = G__16415;
G__16388__16399 = G__16416;
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
var G__16425__16426 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16425__16426))
{var node__16428 = cljs.core.first.call(null,G__16425__16426);
var G__16425__16429 = G__16425__16426;

while(true){
goog.dom.classes.add.call(null,node__16428,class$);
var temp__3698__auto____16435 = cljs.core.next.call(null,G__16425__16429);

if(cljs.core.truth_(temp__3698__auto____16435))
{var G__16425__16438 = temp__3698__auto____16435;

{
var G__16444 = cljs.core.first.call(null,G__16425__16438);
var G__16445 = G__16425__16438;
node__16428 = G__16444;
G__16425__16429 = G__16445;
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
var G__16449__16451 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16449__16451))
{var node__16454 = cljs.core.first.call(null,G__16449__16451);
var G__16449__16455 = G__16449__16451;

while(true){
goog.dom.classes.remove.call(null,node__16454,class$);
var temp__3698__auto____16458 = cljs.core.next.call(null,G__16449__16455);

if(cljs.core.truth_(temp__3698__auto____16458))
{var G__16449__16490 = temp__3698__auto____16458;

{
var G__16491 = cljs.core.first.call(null,G__16449__16490);
var G__16492 = G__16449__16490;
node__16454 = G__16491;
G__16449__16455 = G__16492;
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
var text__16497 = (function (content){
return text.call(null,content,true);
});
var text__16498 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16497.call(this,content);
case  2 :
return text__16498.call(this,content,normalize);
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
var G__16500__16501 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16500__16501))
{var node__16502 = cljs.core.first.call(null,G__16500__16501);
var G__16500__16503 = G__16500__16501;

while(true){
goog.dom.setTextContent.call(null,node__16502,value);
var temp__3698__auto____16504 = cljs.core.next.call(null,G__16500__16503);

if(cljs.core.truth_(temp__3698__auto____16504))
{var G__16500__16508 = temp__3698__auto____16504;

{
var G__16509 = cljs.core.first.call(null,G__16500__16508);
var G__16510 = G__16500__16508;
node__16502 = G__16509;
G__16500__16503 = G__16510;
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
var G__16514__16515 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16514__16515))
{var node__16516 = cljs.core.first.call(null,G__16514__16515);
var G__16514__16517 = G__16514__16515;

while(true){
goog.dom.forms.setValue.call(null,node__16516,value);
var temp__3698__auto____16518 = cljs.core.next.call(null,G__16514__16517);

if(cljs.core.truth_(temp__3698__auto____16518))
{var G__16514__16519 = temp__3698__auto____16518;

{
var G__16520 = cljs.core.first.call(null,G__16514__16519);
var G__16521 = G__16514__16519;
node__16516 = G__16520;
G__16514__16517 = G__16521;
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
var G__16527__16529 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16527__16529))
{var node__16530 = cljs.core.first.call(null,G__16527__16529);
var G__16527__16531 = G__16527__16529;

while(true){
node__16530.innerHTML = value;
var temp__3698__auto____16536 = cljs.core.next.call(null,G__16527__16531);

if(cljs.core.truth_(temp__3698__auto____16536))
{var G__16527__16537 = temp__3698__auto____16536;

{
var G__16538 = cljs.core.first.call(null,G__16527__16537);
var G__16539 = G__16527__16537;
node__16530 = G__16538;
G__16527__16531 = G__16539;
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
var parents__16540 = domina.nodes.call(null,parent_content);
var children__16541 = domina.nodes.call(null,child_content);
var first_child__16555 = (function (){var frag__16542 = document.createDocumentFragment();

var G__16543__16544 = cljs.core.seq.call(null,children__16541);

if(cljs.core.truth_(G__16543__16544))
{var child__16545 = cljs.core.first.call(null,G__16543__16544);
var G__16543__16546 = G__16543__16544;

while(true){
frag__16542.appendChild(child__16545);
var temp__3698__auto____16553 = cljs.core.next.call(null,G__16543__16546);

if(cljs.core.truth_(temp__3698__auto____16553))
{var G__16543__16554 = temp__3698__auto____16553;

{
var G__16585 = cljs.core.first.call(null,G__16543__16554);
var G__16586 = G__16543__16554;
child__16545 = G__16585;
G__16543__16546 = G__16586;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16542;
})();
var other_children__16556 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16540) - 1),(function (){
return first_child__16555.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16540)))
{f.call(null,cljs.core.first.call(null,parents__16540),first_child__16555);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16523_SHARP_,p2__16524_SHARP_){
return f.call(null,p1__16523_SHARP_,p2__16524_SHARP_);
}),cljs.core.rest.call(null,parents__16540),other_children__16556));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16591 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16592 = (function (nl,n){
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
return lazy_nl_via_item__16591.call(this,nl);
case  2 :
return lazy_nl_via_item__16592.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16594 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16595 = (function (nl,n){
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
return lazy_nl_via_array_ref__16594.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16595.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6749__auto____16601 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16602 = x__6749__auto____16601;

if(cljs.core.truth_(and__3546__auto____16602))
{var and__3546__auto____16603 = x__6749__auto____16601.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16603))
{var and__3546__auto____16604 = x__6749__auto____16601.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16604))
{return cljs.core.not.call(null,x__6749__auto____16601.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16604;
}
} else
{return and__3546__auto____16603;
}
} else
{return and__3546__auto____16602;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16601);
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
var inner_wrapper__16615 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16616 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16615));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16616),1)))
{return inner_wrapper__16615.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16615));
} else
{return children__16616;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16617__16618 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16619 = cljs.core.nth.call(null,vec__16617__16618,0,null);
var table_level__16620 = cljs.core.nth.call(null,vec__16617__16618,1,null);
var ___16621 = cljs.core.nthnext.call(null,vec__16617__16618,2);
var wrapper__16622 = domina.create_wrapper.call(null,table_level__16620);

domina.set_wrapper_html_BANG_.call(null,wrapper__16622,content);
return domina.extract_wrapper_dom.call(null,wrapper__16622,table_level__16620);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16623 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16624 = x__6749__auto____16623;

if(cljs.core.truth_(and__3546__auto____16624))
{var and__3546__auto____16625 = x__6749__auto____16623.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16625))
{var and__3546__auto____16626 = x__6749__auto____16623.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16626))
{return cljs.core.not.call(null,x__6749__auto____16623.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16626;
}
} else
{return and__3546__auto____16625;
}
} else
{return and__3546__auto____16624;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16623);
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
if(cljs.core.truth_((function (){var x__6749__auto____16627 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16628 = x__6749__auto____16627;

if(cljs.core.truth_(and__3546__auto____16628))
{var and__3546__auto____16629 = x__6749__auto____16627.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16629))
{var and__3546__auto____16630 = x__6749__auto____16627.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16630))
{return cljs.core.not.call(null,x__6749__auto____16627.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16630;
}
} else
{return and__3546__auto____16629;
}
} else
{return and__3546__auto____16628;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16627);
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
var G__16631 = null;
var G__16631__16632 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16631__16633 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16631 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16631__16632.call(this,nodelist,n);
case  3 :
return G__16631__16633.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16631;
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
