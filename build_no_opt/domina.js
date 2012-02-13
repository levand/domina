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
if(cljs.core.truth_((function (){var and__3546__auto____15954 = content;

if(cljs.core.truth_(and__3546__auto____15954))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15954;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15960 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15960))
{return or__3548__auto____15960;
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
if(cljs.core.truth_((function (){var and__3546__auto____15977 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15977))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15977;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15980 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15980))
{return or__3548__auto____15980;
} else
{var or__3548__auto____15981 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15981))
{return or__3548__auto____15981;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15992 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15992))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15992;
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
if(cljs.core.truth_((void 0 === domina.t16007)))
{
/**
* @constructor
*/
domina.t16007 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16007.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16007");
});
domina.t16007.prototype.domina$DomContent$ = true;
domina.t16007.prototype.domina$DomContent$nodes = (function (_){
var this__16012 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16012.class_name)));
});
domina.t16007.prototype.domina$DomContent$single_node = (function (_){
var this__16018 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16018.class_name)));
});
domina.t16007.prototype.cljs$core$IMeta$ = true;
domina.t16007.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16023 = this;
return this__16023.__meta;
});
domina.t16007.prototype.cljs$core$IWithMeta$ = true;
domina.t16007.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16026 = this;
return (new domina.t16007(this__16026.class_name,this__16026.by_class,__meta));
});
domina.t16007;
} else
{}
return (new domina.t16007(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16039_SHARP_){
return p1__16039_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16046_SHARP_,p2__16047_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16046_SHARP_,p2__16047_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16069_SHARP_,p2__16068_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16068_SHARP_,p1__16069_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16073_SHARP_,p2__16072_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16072_SHARP_,p1__16073_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16080_SHARP_,p2__16079_SHARP_){
return goog.dom.replaceNode.call(null,p2__16079_SHARP_,p1__16080_SHARP_);
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
var s__16108 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16108))))
{return s__16108;
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
var G__16127__16129 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16127__16129))
{var n__16130 = cljs.core.first.call(null,G__16127__16129);
var G__16127__16131 = G__16127__16129;

while(true){
goog.style.setStyle.call(null,n__16130,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16135 = cljs.core.next.call(null,G__16127__16131);

if(cljs.core.truth_(temp__3698__auto____16135))
{var G__16127__16137 = temp__3698__auto____16135;

{
var G__16169 = cljs.core.first.call(null,G__16127__16137);
var G__16171 = G__16127__16137;
n__16130 = G__16169;
G__16127__16131 = G__16171;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16173){
var content = cljs.core.first(arglist__16173);
var name = cljs.core.first(cljs.core.next(arglist__16173));
var value = cljs.core.rest(cljs.core.next(arglist__16173));
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
var G__16176__16177 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16176__16177))
{var n__16180 = cljs.core.first.call(null,G__16176__16177);
var G__16176__16181 = G__16176__16177;

while(true){
n__16180.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16187 = cljs.core.next.call(null,G__16176__16181);

if(cljs.core.truth_(temp__3698__auto____16187))
{var G__16176__16190 = temp__3698__auto____16187;

{
var G__16212 = cljs.core.first.call(null,G__16176__16190);
var G__16213 = G__16176__16190;
n__16180 = G__16212;
G__16176__16181 = G__16213;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16216){
var content = cljs.core.first(arglist__16216);
var name = cljs.core.first(cljs.core.next(arglist__16216));
var value = cljs.core.rest(cljs.core.next(arglist__16216));
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
var vec__16217__16218 = pair.split(/\s*:\s*/);
var k__16219 = cljs.core.nth.call(null,vec__16217__16218,0,null);
var v__16220 = cljs.core.nth.call(null,vec__16217__16218,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16221 = k__16219;

if(cljs.core.truth_(and__3546__auto____16221))
{return v__16220;
} else
{return and__3546__auto____16221;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16219.toLowerCase()),v__16220);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16230 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16230)))
{return domina.parse_style_attributes.call(null,style__16230);
} else
{if(cljs.core.truth_(style__16230.cssText))
{return domina.parse_style_attributes.call(null,style__16230.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16235 = domina.single_node.call(null,content);
var attrs__16236 = node__16235.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16229_SHARP_){
var attr__16237 = attrs__16236.item(p1__16229_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16237.nodeName.toLowerCase())],[attr__16237.nodeValue]);
}),cljs.core.range.call(null,attrs__16236.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16250__16251 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16250__16251))
{var G__16253__16278 = cljs.core.first.call(null,G__16250__16251);
var vec__16254__16279 = G__16253__16278;
var name__16280 = cljs.core.nth.call(null,vec__16254__16279,0,null);
var value__16281 = cljs.core.nth.call(null,vec__16254__16279,1,null);
var G__16250__16282 = G__16250__16251;

var G__16253__16283 = G__16253__16278;
var G__16250__16284 = G__16250__16282;

while(true){
var vec__16285__16288 = G__16253__16283;
var name__16289 = cljs.core.nth.call(null,vec__16285__16288,0,null);
var value__16291 = cljs.core.nth.call(null,vec__16285__16288,1,null);
var G__16250__16292 = G__16250__16284;

domina.set_style_BANG_.call(null,content,name__16289,value__16291);
var temp__3698__auto____16295 = cljs.core.next.call(null,G__16250__16292);

if(cljs.core.truth_(temp__3698__auto____16295))
{var G__16250__16296 = temp__3698__auto____16295;

{
var G__16308 = cljs.core.first.call(null,G__16250__16296);
var G__16309 = G__16250__16296;
G__16253__16283 = G__16308;
G__16250__16284 = G__16309;
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
var G__16313__16314 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16313__16314))
{var G__16316__16318 = cljs.core.first.call(null,G__16313__16314);
var vec__16317__16319 = G__16316__16318;
var name__16321 = cljs.core.nth.call(null,vec__16317__16319,0,null);
var value__16349 = cljs.core.nth.call(null,vec__16317__16319,1,null);
var G__16313__16350 = G__16313__16314;

var G__16316__16351 = G__16316__16318;
var G__16313__16353 = G__16313__16350;

while(true){
var vec__16357__16358 = G__16316__16351;
var name__16359 = cljs.core.nth.call(null,vec__16357__16358,0,null);
var value__16360 = cljs.core.nth.call(null,vec__16357__16358,1,null);
var G__16313__16361 = G__16313__16353;

domina.set_attr_BANG_.call(null,content,name__16359,value__16360);
var temp__3698__auto____16362 = cljs.core.next.call(null,G__16313__16361);

if(cljs.core.truth_(temp__3698__auto____16362))
{var G__16313__16363 = temp__3698__auto____16362;

{
var G__16371 = cljs.core.first.call(null,G__16313__16363);
var G__16372 = G__16313__16363;
G__16316__16351 = G__16371;
G__16313__16353 = G__16372;
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
var G__16386__16387 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16386__16387))
{var node__16390 = cljs.core.first.call(null,G__16386__16387);
var G__16386__16391 = G__16386__16387;

while(true){
goog.dom.classes.add.call(null,node__16390,class$);
var temp__3698__auto____16395 = cljs.core.next.call(null,G__16386__16391);

if(cljs.core.truth_(temp__3698__auto____16395))
{var G__16386__16396 = temp__3698__auto____16395;

{
var G__16406 = cljs.core.first.call(null,G__16386__16396);
var G__16407 = G__16386__16396;
node__16390 = G__16406;
G__16386__16391 = G__16407;
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
var G__16412__16413 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16412__16413))
{var node__16414 = cljs.core.first.call(null,G__16412__16413);
var G__16412__16415 = G__16412__16413;

while(true){
goog.dom.classes.remove.call(null,node__16414,class$);
var temp__3698__auto____16417 = cljs.core.next.call(null,G__16412__16415);

if(cljs.core.truth_(temp__3698__auto____16417))
{var G__16412__16419 = temp__3698__auto____16417;

{
var G__16443 = cljs.core.first.call(null,G__16412__16419);
var G__16444 = G__16412__16419;
node__16414 = G__16443;
G__16412__16415 = G__16444;
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
var text__16450 = (function (content){
return text.call(null,content,true);
});
var text__16451 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16450.call(this,content);
case  2 :
return text__16451.call(this,content,normalize);
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
var G__16457__16459 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16457__16459))
{var node__16462 = cljs.core.first.call(null,G__16457__16459);
var G__16457__16464 = G__16457__16459;

while(true){
goog.dom.setTextContent.call(null,node__16462,value);
var temp__3698__auto____16466 = cljs.core.next.call(null,G__16457__16464);

if(cljs.core.truth_(temp__3698__auto____16466))
{var G__16457__16468 = temp__3698__auto____16466;

{
var G__16471 = cljs.core.first.call(null,G__16457__16468);
var G__16472 = G__16457__16468;
node__16462 = G__16471;
G__16457__16464 = G__16472;
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
var G__16476__16479 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16476__16479))
{var node__16482 = cljs.core.first.call(null,G__16476__16479);
var G__16476__16483 = G__16476__16479;

while(true){
goog.dom.forms.setValue.call(null,node__16482,value);
var temp__3698__auto____16485 = cljs.core.next.call(null,G__16476__16483);

if(cljs.core.truth_(temp__3698__auto____16485))
{var G__16476__16511 = temp__3698__auto____16485;

{
var G__16516 = cljs.core.first.call(null,G__16476__16511);
var G__16517 = G__16476__16511;
node__16482 = G__16516;
G__16476__16483 = G__16517;
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
var G__16528__16529 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16528__16529))
{var node__16530 = cljs.core.first.call(null,G__16528__16529);
var G__16528__16531 = G__16528__16529;

while(true){
node__16530.innerHTML = value;
var temp__3698__auto____16532 = cljs.core.next.call(null,G__16528__16531);

if(cljs.core.truth_(temp__3698__auto____16532))
{var G__16528__16533 = temp__3698__auto____16532;

{
var G__16534 = cljs.core.first.call(null,G__16528__16533);
var G__16535 = G__16528__16533;
node__16530 = G__16534;
G__16528__16531 = G__16535;
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
var parents__16536 = domina.nodes.call(null,parent_content);
var children__16537 = domina.nodes.call(null,child_content);
var first_child__16545 = (function (){var frag__16538 = document.createDocumentFragment();

var G__16539__16540 = cljs.core.seq.call(null,children__16537);

if(cljs.core.truth_(G__16539__16540))
{var child__16541 = cljs.core.first.call(null,G__16539__16540);
var G__16539__16542 = G__16539__16540;

while(true){
frag__16538.appendChild(child__16541);
var temp__3698__auto____16543 = cljs.core.next.call(null,G__16539__16542);

if(cljs.core.truth_(temp__3698__auto____16543))
{var G__16539__16544 = temp__3698__auto____16543;

{
var G__16557 = cljs.core.first.call(null,G__16539__16544);
var G__16558 = G__16539__16544;
child__16541 = G__16557;
G__16539__16542 = G__16558;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16538;
})();
var other_children__16550 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16536) - 1),(function (){
return first_child__16545.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16536)))
{f.call(null,cljs.core.first.call(null,parents__16536),first_child__16545);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16525_SHARP_,p2__16527_SHARP_){
return f.call(null,p1__16525_SHARP_,p2__16527_SHARP_);
}),cljs.core.rest.call(null,parents__16536),other_children__16550));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16565 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16570 = (function (nl,n){
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
return lazy_nl_via_item__16565.call(this,nl);
case  2 :
return lazy_nl_via_item__16570.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16572 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16573 = (function (nl,n){
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
return lazy_nl_via_array_ref__16572.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16573.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6779__auto____16577 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16579 = x__6779__auto____16577;

if(cljs.core.truth_(and__3546__auto____16579))
{var and__3546__auto____16580 = x__6779__auto____16577.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16580))
{var and__3546__auto____16581 = x__6779__auto____16577.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16581))
{return cljs.core.not.call(null,x__6779__auto____16577.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16581;
}
} else
{return and__3546__auto____16580;
}
} else
{return and__3546__auto____16579;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6779__auto____16577);
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
var inner_wrapper__16589 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16590 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16589));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16590),1)))
{return inner_wrapper__16589.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16589));
} else
{return children__16590;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16595__16596 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16597 = cljs.core.nth.call(null,vec__16595__16596,0,null);
var table_level__16598 = cljs.core.nth.call(null,vec__16595__16596,1,null);
var ___16599 = cljs.core.nthnext.call(null,vec__16595__16596,2);
var wrapper__16601 = domina.create_wrapper.call(null,table_level__16598);

domina.set_wrapper_html_BANG_.call(null,wrapper__16601,content);
return domina.extract_wrapper_dom.call(null,wrapper__16601,table_level__16598);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6779__auto____16604 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16605 = x__6779__auto____16604;

if(cljs.core.truth_(and__3546__auto____16605))
{var and__3546__auto____16606 = x__6779__auto____16604.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16606))
{var and__3546__auto____16607 = x__6779__auto____16604.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16607))
{return cljs.core.not.call(null,x__6779__auto____16604.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16607;
}
} else
{return and__3546__auto____16606;
}
} else
{return and__3546__auto____16605;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6779__auto____16604);
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
if(cljs.core.truth_((function (){var x__6779__auto____16608 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16609 = x__6779__auto____16608;

if(cljs.core.truth_(and__3546__auto____16609))
{var and__3546__auto____16610 = x__6779__auto____16608.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16610))
{var and__3546__auto____16611 = x__6779__auto____16608.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16611))
{return cljs.core.not.call(null,x__6779__auto____16608.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16611;
}
} else
{return and__3546__auto____16610;
}
} else
{return and__3546__auto____16609;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6779__auto____16608);
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
var G__16612 = null;
var G__16612__16613 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16612__16614 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16612 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16612__16613.call(this,nodelist,n);
case  3 :
return G__16612__16614.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16612;
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
var G__16617 = null;
var G__16617__16618 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16617__16619 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16617 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16617__16618.call(this,nodelist,n);
case  3 :
return G__16617__16619.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16617;
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
var G__16621 = null;
var G__16621__16622 = (function (coll,n){
return coll.item(n);
});
var G__16621__16623 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16621 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16621__16622.call(this,coll,n);
case  3 :
return G__16621__16623.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16621;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
