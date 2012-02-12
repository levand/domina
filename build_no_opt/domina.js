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
if(cljs.core.truth_((function (){var and__3546__auto____15987 = content;

if(cljs.core.truth_(and__3546__auto____15987))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15987;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15990 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15990))
{return or__3548__auto____15990;
} else
{var or__3548__auto____15991 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15991))
{return or__3548__auto____15991;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15998 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15998))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15998;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15999 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15999))
{return or__3548__auto____15999;
} else
{var or__3548__auto____16001 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16001))
{return or__3548__auto____16001;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16054 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16054))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16054;
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
if(cljs.core.truth_((void 0 === domina.t16065)))
{
/**
* @constructor
*/
domina.t16065 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16065.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16065");
});
domina.t16065.prototype.domina$DomContent$ = true;
domina.t16065.prototype.domina$DomContent$nodes = (function (_){
var this__16077 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16077.class_name)));
});
domina.t16065.prototype.domina$DomContent$single_node = (function (_){
var this__16080 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16080.class_name)));
});
domina.t16065.prototype.cljs$core$IMeta$ = true;
domina.t16065.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16081 = this;
return this__16081.__meta;
});
domina.t16065.prototype.cljs$core$IWithMeta$ = true;
domina.t16065.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16084 = this;
return (new domina.t16065(this__16084.class_name,this__16084.by_class,__meta));
});
domina.t16065;
} else
{}
return (new domina.t16065(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16102_SHARP_){
return p1__16102_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16108_SHARP_,p2__16109_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16108_SHARP_,p2__16109_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16144_SHARP_,p2__16143_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16143_SHARP_,p1__16144_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16156_SHARP_,p2__16147_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16147_SHARP_,p1__16156_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16161_SHARP_,p2__16160_SHARP_){
return goog.dom.replaceNode.call(null,p2__16160_SHARP_,p1__16161_SHARP_);
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
var s__16189 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16189))))
{return s__16189;
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
var G__16204__16206 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16204__16206))
{var n__16207 = cljs.core.first.call(null,G__16204__16206);
var G__16204__16208 = G__16204__16206;

while(true){
goog.style.setStyle.call(null,n__16207,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16209 = cljs.core.next.call(null,G__16204__16208);

if(cljs.core.truth_(temp__3698__auto____16209))
{var G__16204__16210 = temp__3698__auto____16209;

{
var G__16213 = cljs.core.first.call(null,G__16204__16210);
var G__16214 = G__16204__16210;
n__16207 = G__16213;
G__16204__16208 = G__16214;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16215){
var content = cljs.core.first(arglist__16215);
var name = cljs.core.first(cljs.core.next(arglist__16215));
var value = cljs.core.rest(cljs.core.next(arglist__16215));
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
var G__16216__16221 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16216__16221))
{var n__16222 = cljs.core.first.call(null,G__16216__16221);
var G__16216__16223 = G__16216__16221;

while(true){
n__16222.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16224 = cljs.core.next.call(null,G__16216__16223);

if(cljs.core.truth_(temp__3698__auto____16224))
{var G__16216__16225 = temp__3698__auto____16224;

{
var G__16234 = cljs.core.first.call(null,G__16216__16225);
var G__16235 = G__16216__16225;
n__16222 = G__16234;
G__16216__16223 = G__16235;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16236){
var content = cljs.core.first(arglist__16236);
var name = cljs.core.first(cljs.core.next(arglist__16236));
var value = cljs.core.rest(cljs.core.next(arglist__16236));
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
var vec__16239__16240 = pair.split(/\s*:\s*/);
var k__16241 = cljs.core.nth.call(null,vec__16239__16240,0,null);
var v__16242 = cljs.core.nth.call(null,vec__16239__16240,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16243 = k__16241;

if(cljs.core.truth_(and__3546__auto____16243))
{return v__16242;
} else
{return and__3546__auto____16243;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16241.toLowerCase()),v__16242);
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
var node__16259 = domina.single_node.call(null,content);
var attrs__16260 = node__16259.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16250_SHARP_){
var attr__16261 = attrs__16260.item(p1__16250_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16261.nodeName.toLowerCase())],[attr__16261.nodeValue]);
}),cljs.core.range.call(null,attrs__16260.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16267__16269 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16267__16269))
{var G__16272__16276 = cljs.core.first.call(null,G__16267__16269);
var vec__16273__16277 = G__16272__16276;
var name__16278 = cljs.core.nth.call(null,vec__16273__16277,0,null);
var value__16279 = cljs.core.nth.call(null,vec__16273__16277,1,null);
var G__16267__16280 = G__16267__16269;

var G__16272__16281 = G__16272__16276;
var G__16267__16283 = G__16267__16280;

while(true){
var vec__16284__16286 = G__16272__16281;
var name__16287 = cljs.core.nth.call(null,vec__16284__16286,0,null);
var value__16288 = cljs.core.nth.call(null,vec__16284__16286,1,null);
var G__16267__16289 = G__16267__16283;

domina.set_style_BANG_.call(null,content,name__16287,value__16288);
var temp__3698__auto____16291 = cljs.core.next.call(null,G__16267__16289);

if(cljs.core.truth_(temp__3698__auto____16291))
{var G__16267__16292 = temp__3698__auto____16291;

{
var G__16300 = cljs.core.first.call(null,G__16267__16292);
var G__16301 = G__16267__16292;
G__16272__16281 = G__16300;
G__16267__16283 = G__16301;
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
var G__16308__16311 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16308__16311))
{var G__16314__16316 = cljs.core.first.call(null,G__16308__16311);
var vec__16315__16317 = G__16314__16316;
var name__16318 = cljs.core.nth.call(null,vec__16315__16317,0,null);
var value__16320 = cljs.core.nth.call(null,vec__16315__16317,1,null);
var G__16308__16321 = G__16308__16311;

var G__16314__16322 = G__16314__16316;
var G__16308__16323 = G__16308__16321;

while(true){
var vec__16324__16325 = G__16314__16322;
var name__16326 = cljs.core.nth.call(null,vec__16324__16325,0,null);
var value__16327 = cljs.core.nth.call(null,vec__16324__16325,1,null);
var G__16308__16328 = G__16308__16323;

domina.set_attr_BANG_.call(null,content,name__16326,value__16327);
var temp__3698__auto____16329 = cljs.core.next.call(null,G__16308__16328);

if(cljs.core.truth_(temp__3698__auto____16329))
{var G__16308__16330 = temp__3698__auto____16329;

{
var G__16332 = cljs.core.first.call(null,G__16308__16330);
var G__16333 = G__16308__16330;
G__16314__16322 = G__16332;
G__16308__16323 = G__16333;
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
var G__16336__16337 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16336__16337))
{var node__16338 = cljs.core.first.call(null,G__16336__16337);
var G__16336__16339 = G__16336__16337;

while(true){
goog.dom.classes.add.call(null,node__16338,class$);
var temp__3698__auto____16340 = cljs.core.next.call(null,G__16336__16339);

if(cljs.core.truth_(temp__3698__auto____16340))
{var G__16336__16341 = temp__3698__auto____16340;

{
var G__16342 = cljs.core.first.call(null,G__16336__16341);
var G__16343 = G__16336__16341;
node__16338 = G__16342;
G__16336__16339 = G__16343;
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
var G__16344__16345 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16344__16345))
{var node__16346 = cljs.core.first.call(null,G__16344__16345);
var G__16344__16347 = G__16344__16345;

while(true){
goog.dom.classes.remove.call(null,node__16346,class$);
var temp__3698__auto____16348 = cljs.core.next.call(null,G__16344__16347);

if(cljs.core.truth_(temp__3698__auto____16348))
{var G__16344__16349 = temp__3698__auto____16348;

{
var G__16357 = cljs.core.first.call(null,G__16344__16349);
var G__16358 = G__16344__16349;
node__16346 = G__16357;
G__16344__16347 = G__16358;
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
var text__16363 = (function (content){
return text.call(null,content,true);
});
var text__16364 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16363.call(this,content);
case  2 :
return text__16364.call(this,content,normalize);
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
var G__16370__16371 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16370__16371))
{var node__16372 = cljs.core.first.call(null,G__16370__16371);
var G__16370__16373 = G__16370__16371;

while(true){
goog.dom.setTextContent.call(null,node__16372,value);
var temp__3698__auto____16374 = cljs.core.next.call(null,G__16370__16373);

if(cljs.core.truth_(temp__3698__auto____16374))
{var G__16370__16375 = temp__3698__auto____16374;

{
var G__16376 = cljs.core.first.call(null,G__16370__16375);
var G__16377 = G__16370__16375;
node__16372 = G__16376;
G__16370__16373 = G__16377;
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
var G__16382__16383 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16382__16383))
{var node__16384 = cljs.core.first.call(null,G__16382__16383);
var G__16382__16385 = G__16382__16383;

while(true){
goog.dom.forms.setValue.call(null,node__16384,value);
var temp__3698__auto____16386 = cljs.core.next.call(null,G__16382__16385);

if(cljs.core.truth_(temp__3698__auto____16386))
{var G__16382__16387 = temp__3698__auto____16386;

{
var G__16388 = cljs.core.first.call(null,G__16382__16387);
var G__16389 = G__16382__16387;
node__16384 = G__16388;
G__16382__16385 = G__16389;
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
var G__16396__16398 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16396__16398))
{var node__16401 = cljs.core.first.call(null,G__16396__16398);
var G__16396__16402 = G__16396__16398;

while(true){
node__16401.innerHTML = value;
var temp__3698__auto____16406 = cljs.core.next.call(null,G__16396__16402);

if(cljs.core.truth_(temp__3698__auto____16406))
{var G__16396__16407 = temp__3698__auto____16406;

{
var G__16410 = cljs.core.first.call(null,G__16396__16407);
var G__16411 = G__16396__16407;
node__16401 = G__16410;
G__16396__16402 = G__16411;
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
var parents__16416 = domina.nodes.call(null,parent_content);
var children__16417 = domina.nodes.call(null,child_content);
var first_child__16429 = (function (){var frag__16419 = document.createDocumentFragment();

var G__16420__16422 = cljs.core.seq.call(null,children__16417);

if(cljs.core.truth_(G__16420__16422))
{var child__16423 = cljs.core.first.call(null,G__16420__16422);
var G__16420__16424 = G__16420__16422;

while(true){
frag__16419.appendChild(child__16423);
var temp__3698__auto____16425 = cljs.core.next.call(null,G__16420__16424);

if(cljs.core.truth_(temp__3698__auto____16425))
{var G__16420__16428 = temp__3698__auto____16425;

{
var G__16435 = cljs.core.first.call(null,G__16420__16428);
var G__16436 = G__16420__16428;
child__16423 = G__16435;
G__16420__16424 = G__16436;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16419;
})();
var other_children__16432 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16416) - 1),(function (){
return first_child__16429.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16416)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16417)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16416)))
{f.call(null,cljs.core.first.call(null,parents__16416),first_child__16429);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16394_SHARP_,p2__16395_SHARP_){
return f.call(null,p1__16394_SHARP_,p2__16395_SHARP_);
}),cljs.core.rest.call(null,parents__16416),other_children__16432));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16437 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16438 = (function (nl,n){
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
return lazy_nodelist__16437.call(this,nl);
case  2 :
return lazy_nodelist__16438.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6646__auto____16441 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16442 = x__6646__auto____16441;

if(cljs.core.truth_(and__3546__auto____16442))
{var and__3546__auto____16443 = x__6646__auto____16441.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16443))
{var and__3546__auto____16444 = x__6646__auto____16441.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16444))
{return cljs.core.not.call(null,x__6646__auto____16441.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16444;
}
} else
{return and__3546__auto____16443;
}
} else
{return and__3546__auto____16442;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6646__auto____16441);
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
var inner_wrapper__16491 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16492 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16491));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16492),1)))
{return inner_wrapper__16491.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16491));
} else
{return children__16492;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16507__16508 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16509 = cljs.core.nth.call(null,vec__16507__16508,0,null);
var table_level__16512 = cljs.core.nth.call(null,vec__16507__16508,1,null);
var ___16513 = cljs.core.nthnext.call(null,vec__16507__16508,2);
var wrapper__16514 = domina.create_wrapper.call(null,table_level__16512);

domina.set_wrapper_html_BANG_.call(null,wrapper__16514,content);
return domina.extract_wrapper_dom.call(null,wrapper__16514,table_level__16512);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6646__auto____16530 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16532 = x__6646__auto____16530;

if(cljs.core.truth_(and__3546__auto____16532))
{var and__3546__auto____16533 = x__6646__auto____16530.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16533))
{var and__3546__auto____16534 = x__6646__auto____16530.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16534))
{return cljs.core.not.call(null,x__6646__auto____16530.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16534;
}
} else
{return and__3546__auto____16533;
}
} else
{return and__3546__auto____16532;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6646__auto____16530);
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
if(cljs.core.truth_((function (){var x__6646__auto____16535 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16536 = x__6646__auto____16535;

if(cljs.core.truth_(and__3546__auto____16536))
{var and__3546__auto____16537 = x__6646__auto____16535.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16537))
{var and__3546__auto____16538 = x__6646__auto____16535.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16538))
{return cljs.core.not.call(null,x__6646__auto____16535.hasOwnProperty("cljs$core$ISeqable$"));
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
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6646__auto____16535);
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
var G__16539 = null;
var G__16539__16540 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16539__16541 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16539 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16539__16540.call(this,nodelist,n);
case  3 :
return G__16539__16541.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16539;
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
var G__16564 = null;
var G__16564__16565 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16564__16566 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16564 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16564__16565.call(this,nodelist,n);
case  3 :
return G__16564__16566.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16564;
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
var G__16568 = null;
var G__16568__16569 = (function (coll,n){
return coll.item(n);
});
var G__16568__16570 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16568 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16568__16569.call(this,coll,n);
case  3 :
return G__16568__16570.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16568;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
