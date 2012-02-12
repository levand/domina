goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.debug = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15992 = domina.debug;

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
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15998 = content;

if(cljs.core.truth_(and__3546__auto____15998))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15998;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16001 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16001))
{return or__3548__auto____16001;
} else
{var or__3548__auto____16002 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16002))
{return or__3548__auto____16002;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16006 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16006))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16006;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16007 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16007))
{return or__3548__auto____16007;
} else
{var or__3548__auto____16008 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16008))
{return or__3548__auto____16008;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
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
if(cljs.core.truth_((void 0 === domina.t16016)))
{
/**
* @constructor
*/
domina.t16016 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16016.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16016");
});
domina.t16016.prototype.domina$DomContent$ = true;
domina.t16016.prototype.domina$DomContent$nodes = (function (_){
var this__16020 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16020.class_name));
});
domina.t16016.prototype.domina$DomContent$single_node = (function (_){
var this__16021 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16021.class_name));
});
domina.t16016.prototype.cljs$core$IMeta$ = true;
domina.t16016.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16024 = this;
return this__16024.__meta;
});
domina.t16016.prototype.cljs$core$IWithMeta$ = true;
domina.t16016.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16027 = this;
return (new domina.t16016(this__16027.class_name,this__16027.by_class,__meta));
});
domina.t16016;
} else
{}
return (new domina.t16016(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16036_SHARP_){
return p1__16036_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16045_SHARP_,p2__16046_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16045_SHARP_,p2__16046_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16074_SHARP_,p2__16053_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16053_SHARP_,p1__16074_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16086_SHARP_,p2__16084_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16084_SHARP_,p1__16086_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16134_SHARP_,p2__16133_SHARP_){
return goog.dom.replaceNode.call(null,p2__16133_SHARP_,p1__16134_SHARP_);
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
var s__16183 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16183))))
{return s__16183;
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
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword.
*/
domina.set_style_BANG_ = (function set_style_BANG_(content,name,value){
var G__16190__16191 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16190__16191))
{var n__16194 = cljs.core.first.call(null,G__16190__16191);
var G__16190__16195 = G__16190__16191;

while(true){
goog.style.setStyle.call(null,n__16194,cljs.core.name.call(null,name),value);
var temp__3698__auto____16201 = cljs.core.next.call(null,G__16190__16195);

if(cljs.core.truth_(temp__3698__auto____16201))
{var G__16190__16203 = temp__3698__auto____16201;

{
var G__16217 = cljs.core.first.call(null,G__16190__16203);
var G__16218 = G__16190__16203;
n__16194 = G__16217;
G__16190__16195 = G__16218;
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
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword.
*/
domina.set_attr_BANG_ = (function set_attr_BANG_(content,name,value){
var G__16220__16221 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16220__16221))
{var n__16222 = cljs.core.first.call(null,G__16220__16221);
var G__16220__16223 = G__16220__16221;

while(true){
n__16222.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16226 = cljs.core.next.call(null,G__16220__16223);

if(cljs.core.truth_(temp__3698__auto____16226))
{var G__16220__16227 = temp__3698__auto____16226;

{
var G__16232 = cljs.core.first.call(null,G__16220__16227);
var G__16233 = G__16220__16227;
n__16222 = G__16232;
G__16220__16223 = G__16233;
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
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__16241__16243 = pair.split(/\s*:\s*/);
var k__16244 = cljs.core.nth.call(null,vec__16241__16243,0,null);
var v__16245 = cljs.core.nth.call(null,vec__16241__16243,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16246 = k__16244;

if(cljs.core.truth_(and__3546__auto____16246))
{return v__16245;
} else
{return and__3546__auto____16246;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16244.toLowerCase()),v__16245);
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
var node__16261 = domina.single_node.call(null,content);
var attrs__16262 = node__16261.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16252_SHARP_){
var attr__16266 = attrs__16262.item(p1__16252_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16266.nodeName.toLowerCase())],[attr__16266.nodeValue]);
}),cljs.core.range.call(null,attrs__16262.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16275__16276 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16275__16276))
{var G__16280__16284 = cljs.core.first.call(null,G__16275__16276);
var vec__16282__16285 = G__16280__16284;
var name__16286 = cljs.core.nth.call(null,vec__16282__16285,0,null);
var value__16288 = cljs.core.nth.call(null,vec__16282__16285,1,null);
var G__16275__16289 = G__16275__16276;

var G__16280__16290 = G__16280__16284;
var G__16275__16292 = G__16275__16289;

while(true){
var vec__16293__16294 = G__16280__16290;
var name__16297 = cljs.core.nth.call(null,vec__16293__16294,0,null);
var value__16298 = cljs.core.nth.call(null,vec__16293__16294,1,null);
var G__16275__16299 = G__16275__16292;

domina.set_style_BANG_.call(null,content,name__16297,value__16298);
var temp__3698__auto____16301 = cljs.core.next.call(null,G__16275__16299);

if(cljs.core.truth_(temp__3698__auto____16301))
{var G__16275__16304 = temp__3698__auto____16301;

{
var G__16323 = cljs.core.first.call(null,G__16275__16304);
var G__16324 = G__16275__16304;
G__16280__16290 = G__16323;
G__16275__16292 = G__16324;
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
var G__16328__16330 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16328__16330))
{var G__16332__16334 = cljs.core.first.call(null,G__16328__16330);
var vec__16333__16335 = G__16332__16334;
var name__16336 = cljs.core.nth.call(null,vec__16333__16335,0,null);
var value__16337 = cljs.core.nth.call(null,vec__16333__16335,1,null);
var G__16328__16338 = G__16328__16330;

var G__16332__16339 = G__16332__16334;
var G__16328__16340 = G__16328__16338;

while(true){
var vec__16341__16342 = G__16332__16339;
var name__16345 = cljs.core.nth.call(null,vec__16341__16342,0,null);
var value__16346 = cljs.core.nth.call(null,vec__16341__16342,1,null);
var G__16328__16347 = G__16328__16340;

domina.set_attr_BANG_.call(null,content,name__16345,value__16346);
var temp__3698__auto____16348 = cljs.core.next.call(null,G__16328__16347);

if(cljs.core.truth_(temp__3698__auto____16348))
{var G__16328__16349 = temp__3698__auto____16348;

{
var G__16353 = cljs.core.first.call(null,G__16328__16349);
var G__16354 = G__16328__16349;
G__16332__16339 = G__16353;
G__16328__16340 = G__16354;
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
var G__16357__16359 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16357__16359))
{var node__16361 = cljs.core.first.call(null,G__16357__16359);
var G__16357__16364 = G__16357__16359;

while(true){
goog.dom.classes.add.call(null,node__16361,class$);
var temp__3698__auto____16405 = cljs.core.next.call(null,G__16357__16364);

if(cljs.core.truth_(temp__3698__auto____16405))
{var G__16357__16406 = temp__3698__auto____16405;

{
var G__16407 = cljs.core.first.call(null,G__16357__16406);
var G__16408 = G__16357__16406;
node__16361 = G__16407;
G__16357__16364 = G__16408;
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
var G__16417__16419 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16417__16419))
{var node__16422 = cljs.core.first.call(null,G__16417__16419);
var G__16417__16423 = G__16417__16419;

while(true){
goog.dom.classes.remove.call(null,node__16422,class$);
var temp__3698__auto____16427 = cljs.core.next.call(null,G__16417__16423);

if(cljs.core.truth_(temp__3698__auto____16427))
{var G__16417__16428 = temp__3698__auto____16427;

{
var G__16433 = cljs.core.first.call(null,G__16417__16428);
var G__16434 = G__16417__16428;
node__16422 = G__16433;
G__16417__16423 = G__16434;
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
var text__16441 = (function (content){
return text.call(null,content,true);
});
var text__16442 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16441.call(this,content);
case  2 :
return text__16442.call(this,content,normalize);
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
var G__16446__16447 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16446__16447))
{var node__16448 = cljs.core.first.call(null,G__16446__16447);
var G__16446__16449 = G__16446__16447;

while(true){
goog.dom.setTextContent.call(null,node__16448,value);
var temp__3698__auto____16450 = cljs.core.next.call(null,G__16446__16449);

if(cljs.core.truth_(temp__3698__auto____16450))
{var G__16446__16451 = temp__3698__auto____16450;

{
var G__16454 = cljs.core.first.call(null,G__16446__16451);
var G__16455 = G__16446__16451;
node__16448 = G__16454;
G__16446__16449 = G__16455;
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
var G__16457__16458 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16457__16458))
{var node__16459 = cljs.core.first.call(null,G__16457__16458);
var G__16457__16460 = G__16457__16458;

while(true){
goog.dom.forms.setValue.call(null,node__16459,value);
var temp__3698__auto____16461 = cljs.core.next.call(null,G__16457__16460);

if(cljs.core.truth_(temp__3698__auto____16461))
{var G__16457__16463 = temp__3698__auto____16461;

{
var G__16465 = cljs.core.first.call(null,G__16457__16463);
var G__16466 = G__16457__16463;
node__16459 = G__16465;
G__16457__16460 = G__16466;
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
var G__16478__16479 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16478__16479))
{var node__16480 = cljs.core.first.call(null,G__16478__16479);
var G__16478__16481 = G__16478__16479;

while(true){
node__16480.innerHTML = value;
var temp__3698__auto____16482 = cljs.core.next.call(null,G__16478__16481);

if(cljs.core.truth_(temp__3698__auto____16482))
{var G__16478__16483 = temp__3698__auto____16482;

{
var G__16488 = cljs.core.first.call(null,G__16478__16483);
var G__16489 = G__16478__16483;
node__16480 = G__16488;
G__16478__16481 = G__16489;
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
var parents__16490 = domina.nodes.call(null,parent_content);
var children__16510 = domina.nodes.call(null,child_content);
var first_child__16520 = (function (){var frag__16511 = document.createDocumentFragment();

var G__16512__16513 = cljs.core.seq.call(null,children__16510);

if(cljs.core.truth_(G__16512__16513))
{var child__16514 = cljs.core.first.call(null,G__16512__16513);
var G__16512__16515 = G__16512__16513;

while(true){
frag__16511.appendChild(child__16514);
var temp__3698__auto____16518 = cljs.core.next.call(null,G__16512__16515);

if(cljs.core.truth_(temp__3698__auto____16518))
{var G__16512__16519 = temp__3698__auto____16518;

{
var G__16524 = cljs.core.first.call(null,G__16512__16519);
var G__16525 = G__16512__16519;
child__16514 = G__16524;
G__16512__16515 = G__16525;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16511;
})();
var other_children__16521 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16490) - 1),(function (){
return first_child__16520.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16490)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16510)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16490)))
{f.call(null,cljs.core.first.call(null,parents__16490),first_child__16520);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16476_SHARP_,p2__16477_SHARP_){
return f.call(null,p1__16476_SHARP_,p2__16477_SHARP_);
}),cljs.core.rest.call(null,parents__16490),other_children__16521));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList or other array-like javascript thing.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16536 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16537 = (function (nl,n){
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
return lazy_nodelist__16536.call(this,nl);
case  2 :
return lazy_nodelist__16537.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
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
var inner_wrapper__16545 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16546 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16545));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16546),1)))
{return inner_wrapper__16545.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16545));
} else
{return children__16546;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16547__16548 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16549 = cljs.core.nth.call(null,vec__16547__16548,0,null);
var table_level__16550 = cljs.core.nth.call(null,vec__16547__16548,1,null);
var ___16551 = cljs.core.nthnext.call(null,vec__16547__16548,2);
var wrapper__16552 = domina.create_wrapper.call(null,table_level__16550);

domina.set_wrapper_html_BANG_.call(null,wrapper__16552,content);
return domina.extract_wrapper_dom.call(null,wrapper__16552,table_level__16550);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6767__auto____16565 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16566 = x__6767__auto____16565;

if(cljs.core.truth_(and__3546__auto____16566))
{var and__3546__auto____16567 = x__6767__auto____16565.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16567))
{var and__3546__auto____16568 = x__6767__auto____16565.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16568))
{return cljs.core.not.call(null,x__6767__auto____16565.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16568;
}
} else
{return and__3546__auto____16567;
}
} else
{return and__3546__auto____16566;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16565);
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
if(cljs.core.truth_((function (){var x__6767__auto____16569 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16570 = x__6767__auto____16569;

if(cljs.core.truth_(and__3546__auto____16570))
{var and__3546__auto____16571 = x__6767__auto____16569.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16571))
{var and__3546__auto____16572 = x__6767__auto____16569.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16572))
{return cljs.core.not.call(null,x__6767__auto____16569.hasOwnProperty("cljs$core$ISeqable$"));
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
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16569);
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
var G__16589 = null;
var G__16589__16590 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16589__16591 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16589 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16589__16590.call(this,nodelist,n);
case  3 :
return G__16589__16591.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16589;
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
var G__16597 = null;
var G__16597__16598 = (function (coll,n){
return coll.item(n);
});
var G__16597__16599 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16597 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16597__16598.call(this,coll,n);
case  3 :
return G__16597__16599.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16597;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
