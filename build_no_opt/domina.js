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
if(cljs.core.truth_((function (){var and__3546__auto____15826 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15826))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15826;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15830 = content;

if(cljs.core.truth_(and__3546__auto____15830))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15830;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15831 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15831))
{return or__3548__auto____15831;
} else
{var or__3548__auto____15832 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15832))
{return or__3548__auto____15832;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15833 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15833))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15833;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15835 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15835))
{return or__3548__auto____15835;
} else
{var or__3548__auto____15837 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15837))
{return or__3548__auto____15837;
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
if(cljs.core.truth_((void 0 === domina.t15846)))
{
/**
* @constructor
*/
domina.t15846 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15846.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15846");
});
domina.t15846.prototype.domina$DomContent$ = true;
domina.t15846.prototype.domina$DomContent$nodes = (function (_){
var this__15886 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15886.class_name));
});
domina.t15846.prototype.domina$DomContent$single_node = (function (_){
var this__15888 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15888.class_name));
});
domina.t15846.prototype.cljs$core$IMeta$ = true;
domina.t15846.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15889 = this;
return this__15889.__meta;
});
domina.t15846.prototype.cljs$core$IWithMeta$ = true;
domina.t15846.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15890 = this;
return (new domina.t15846(this__15890.class_name,this__15890.by_class,__meta));
});
domina.t15846;
} else
{}
return (new domina.t15846(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15900_SHARP_){
return p1__15900_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15922_SHARP_,p2__15923_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15922_SHARP_,p2__15923_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15931_SHARP_,p2__15929_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15929_SHARP_,p1__15931_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15946_SHARP_,p2__15945_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15945_SHARP_,p1__15946_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15950_SHARP_,p2__15949_SHARP_){
return goog.dom.replaceNode.call(null,p2__15949_SHARP_,p1__15950_SHARP_);
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
var s__16024 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16024))))
{return s__16024;
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
var G__16189__16192 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16189__16192))
{var n__16196 = cljs.core.first.call(null,G__16189__16192);
var G__16189__16197 = G__16189__16192;

while(true){
goog.style.setStyle.call(null,n__16196,cljs.core.name.call(null,name),value);
var temp__3698__auto____16200 = cljs.core.next.call(null,G__16189__16197);

if(cljs.core.truth_(temp__3698__auto____16200))
{var G__16189__16201 = temp__3698__auto____16200;

{
var G__16204 = cljs.core.first.call(null,G__16189__16201);
var G__16205 = G__16189__16201;
n__16196 = G__16204;
G__16189__16197 = G__16205;
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
var G__16212__16213 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16212__16213))
{var n__16214 = cljs.core.first.call(null,G__16212__16213);
var G__16212__16215 = G__16212__16213;

while(true){
n__16214.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16222 = cljs.core.next.call(null,G__16212__16215);

if(cljs.core.truth_(temp__3698__auto____16222))
{var G__16212__16223 = temp__3698__auto____16222;

{
var G__16226 = cljs.core.first.call(null,G__16212__16223);
var G__16227 = G__16212__16223;
n__16214 = G__16226;
G__16212__16215 = G__16227;
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
var vec__16238__16239 = pair.split(/\s*:\s*/);
var k__16240 = cljs.core.nth.call(null,vec__16238__16239,0,null);
var v__16241 = cljs.core.nth.call(null,vec__16238__16239,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16242 = k__16240;

if(cljs.core.truth_(and__3546__auto____16242))
{return v__16241;
} else
{return and__3546__auto____16242;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16240.toLowerCase()),v__16241);
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
var node__16266 = domina.single_node.call(null,content);
var attrs__16267 = node__16266.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16259_SHARP_){
var attr__16268 = attrs__16267.item(p1__16259_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16268.nodeName.toLowerCase())],[attr__16268.nodeValue]);
}),cljs.core.range.call(null,attrs__16267.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16276__16277 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16276__16277))
{var G__16279__16281 = cljs.core.first.call(null,G__16276__16277);
var vec__16280__16282 = G__16279__16281;
var name__16283 = cljs.core.nth.call(null,vec__16280__16282,0,null);
var value__16284 = cljs.core.nth.call(null,vec__16280__16282,1,null);
var G__16276__16285 = G__16276__16277;

var G__16279__16286 = G__16279__16281;
var G__16276__16287 = G__16276__16285;

while(true){
var vec__16288__16289 = G__16279__16286;
var name__16290 = cljs.core.nth.call(null,vec__16288__16289,0,null);
var value__16291 = cljs.core.nth.call(null,vec__16288__16289,1,null);
var G__16276__16292 = G__16276__16287;

domina.set_style_BANG_.call(null,content,name__16290,value__16291);
var temp__3698__auto____16293 = cljs.core.next.call(null,G__16276__16292);

if(cljs.core.truth_(temp__3698__auto____16293))
{var G__16276__16295 = temp__3698__auto____16293;

{
var G__16297 = cljs.core.first.call(null,G__16276__16295);
var G__16298 = G__16276__16295;
G__16279__16286 = G__16297;
G__16276__16287 = G__16298;
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
var G__16359__16360 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16359__16360))
{var G__16362__16364 = cljs.core.first.call(null,G__16359__16360);
var vec__16363__16365 = G__16362__16364;
var name__16366 = cljs.core.nth.call(null,vec__16363__16365,0,null);
var value__16367 = cljs.core.nth.call(null,vec__16363__16365,1,null);
var G__16359__16368 = G__16359__16360;

var G__16362__16370 = G__16362__16364;
var G__16359__16371 = G__16359__16368;

while(true){
var vec__16372__16373 = G__16362__16370;
var name__16374 = cljs.core.nth.call(null,vec__16372__16373,0,null);
var value__16375 = cljs.core.nth.call(null,vec__16372__16373,1,null);
var G__16359__16376 = G__16359__16371;

domina.set_attr_BANG_.call(null,content,name__16374,value__16375);
var temp__3698__auto____16377 = cljs.core.next.call(null,G__16359__16376);

if(cljs.core.truth_(temp__3698__auto____16377))
{var G__16359__16378 = temp__3698__auto____16377;

{
var G__16379 = cljs.core.first.call(null,G__16359__16378);
var G__16380 = G__16359__16378;
G__16362__16370 = G__16379;
G__16359__16371 = G__16380;
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
var G__16381__16382 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16381__16382))
{var node__16383 = cljs.core.first.call(null,G__16381__16382);
var G__16381__16384 = G__16381__16382;

while(true){
goog.dom.classes.add.call(null,node__16383,class$);
var temp__3698__auto____16385 = cljs.core.next.call(null,G__16381__16384);

if(cljs.core.truth_(temp__3698__auto____16385))
{var G__16381__16386 = temp__3698__auto____16385;

{
var G__16387 = cljs.core.first.call(null,G__16381__16386);
var G__16388 = G__16381__16386;
node__16383 = G__16387;
G__16381__16384 = G__16388;
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
var G__16389__16390 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16389__16390))
{var node__16391 = cljs.core.first.call(null,G__16389__16390);
var G__16389__16392 = G__16389__16390;

while(true){
goog.dom.classes.remove.call(null,node__16391,class$);
var temp__3698__auto____16393 = cljs.core.next.call(null,G__16389__16392);

if(cljs.core.truth_(temp__3698__auto____16393))
{var G__16389__16394 = temp__3698__auto____16393;

{
var G__16395 = cljs.core.first.call(null,G__16389__16394);
var G__16396 = G__16389__16394;
node__16391 = G__16395;
G__16389__16392 = G__16396;
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
var text__16397 = (function (content){
return text.call(null,content,true);
});
var text__16398 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16397.call(this,content);
case  2 :
return text__16398.call(this,content,normalize);
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
var G__16407__16408 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16407__16408))
{var node__16410 = cljs.core.first.call(null,G__16407__16408);
var G__16407__16411 = G__16407__16408;

while(true){
goog.dom.setTextContent.call(null,node__16410,value);
var temp__3698__auto____16413 = cljs.core.next.call(null,G__16407__16411);

if(cljs.core.truth_(temp__3698__auto____16413))
{var G__16407__16414 = temp__3698__auto____16413;

{
var G__16417 = cljs.core.first.call(null,G__16407__16414);
var G__16418 = G__16407__16414;
node__16410 = G__16417;
G__16407__16411 = G__16418;
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
var G__16419__16420 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16419__16420))
{var node__16424 = cljs.core.first.call(null,G__16419__16420);
var G__16419__16425 = G__16419__16420;

while(true){
goog.dom.forms.setValue.call(null,node__16424,value);
var temp__3698__auto____16426 = cljs.core.next.call(null,G__16419__16425);

if(cljs.core.truth_(temp__3698__auto____16426))
{var G__16419__16427 = temp__3698__auto____16426;

{
var G__16428 = cljs.core.first.call(null,G__16419__16427);
var G__16429 = G__16419__16427;
node__16424 = G__16428;
G__16419__16425 = G__16429;
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
var G__16432__16433 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16432__16433))
{var node__16434 = cljs.core.first.call(null,G__16432__16433);
var G__16432__16435 = G__16432__16433;

while(true){
node__16434.innerHTML = value;
var temp__3698__auto____16436 = cljs.core.next.call(null,G__16432__16435);

if(cljs.core.truth_(temp__3698__auto____16436))
{var G__16432__16437 = temp__3698__auto____16436;

{
var G__16438 = cljs.core.first.call(null,G__16432__16437);
var G__16439 = G__16432__16437;
node__16434 = G__16438;
G__16432__16435 = G__16439;
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
var parents__16440 = domina.nodes.call(null,parent_content);
var children__16441 = domina.nodes.call(null,child_content);
var first_child__16451 = (function (){var frag__16443 = document.createDocumentFragment();

var G__16445__16446 = cljs.core.seq.call(null,children__16441);

if(cljs.core.truth_(G__16445__16446))
{var child__16447 = cljs.core.first.call(null,G__16445__16446);
var G__16445__16448 = G__16445__16446;

while(true){
frag__16443.appendChild(child__16447);
var temp__3698__auto____16449 = cljs.core.next.call(null,G__16445__16448);

if(cljs.core.truth_(temp__3698__auto____16449))
{var G__16445__16450 = temp__3698__auto____16449;

{
var G__16459 = cljs.core.first.call(null,G__16445__16450);
var G__16460 = G__16445__16450;
child__16447 = G__16459;
G__16445__16448 = G__16460;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16443;
})();
var other_children__16453 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16440) - 1),(function (){
return first_child__16451.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16440)))
{f.call(null,cljs.core.first.call(null,parents__16440),first_child__16451);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16430_SHARP_,p2__16431_SHARP_){
return f.call(null,p1__16430_SHARP_,p2__16431_SHARP_);
}),cljs.core.rest.call(null,parents__16440),other_children__16453));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16467 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16468 = (function (nl,n){
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
return lazy_nodelist__16467.call(this,nl);
case  2 :
return lazy_nodelist__16468.call(this,nl,n);
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
return wrapper.removeChild(wrapper.firstChild);
} else
{return wrapper.innerHTML = content;
}
});
domina.extract_wrapper_dom = (function extract_wrapper_dom(wrapper,table_level){
var inner_wrapper__16470 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16471 = cljs.core.seq.call(null,inner_wrapper__16470.childNodes);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16471),1)))
{return inner_wrapper__16470.removeChild(inner_wrapper__16470.firstChild);
} else
{return children__16471;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16472__16473 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16474 = cljs.core.nth.call(null,vec__16472__16473,0,null);
var table_level__16479 = cljs.core.nth.call(null,vec__16472__16473,1,null);
var ___16480 = cljs.core.nthnext.call(null,vec__16472__16473,2);
var wrapper__16481 = domina.create_wrapper.call(null,table_level__16479);

domina.set_wrapper_html_BANG_.call(null,wrapper__16481,content);
return domina.extract_wrapper_dom.call(null,wrapper__16481,table_level__16479);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16486 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16487 = x__445__auto____16486;

if(cljs.core.truth_(and__3546__auto____16487))
{var and__3546__auto____16492 = x__445__auto____16486.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16492))
{return cljs.core.not.call(null,x__445__auto____16486.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16492;
}
} else
{return and__3546__auto____16487;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16486);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16495 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16496 = x__445__auto____16495;

if(cljs.core.truth_(and__3546__auto____16496))
{var and__3546__auto____16497 = x__445__auto____16495.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16497))
{return cljs.core.not.call(null,x__445__auto____16495.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16497;
}
} else
{return and__3546__auto____16496;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16495);
}
})()))
{return cljs.core.first.call(null,content);
} else
{return content;
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return domina.nodes.call(null,domina.string_to_dom.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16498 = null;
var G__16498__16499 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16498__16500 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16498 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16498__16499.call(this,nodelist,n);
case  3 :
return G__16498__16500.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16498;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16502 = null;
var G__16502__16503 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16502__16504 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16502 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16502__16503.call(this,nodelist,n);
case  3 :
return G__16502__16504.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16502;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16511 = null;
var G__16511__16512 = (function (coll,n){
return coll.item(n);
});
var G__16511__16513 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16511 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16511__16512.call(this,coll,n);
case  3 :
return G__16511__16513.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16511;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
