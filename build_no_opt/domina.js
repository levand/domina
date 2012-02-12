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
if(cljs.core.truth_((function (){var and__3546__auto____16005 = domina.debug;

if(cljs.core.truth_(and__3546__auto____16005))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16005;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____16010 = content;

if(cljs.core.truth_(and__3546__auto____16010))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16010;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16013 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16013))
{return or__3548__auto____16013;
} else
{var or__3548__auto____16014 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16014))
{return or__3548__auto____16014;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16015 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16015))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16015;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16018 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16018))
{return or__3548__auto____16018;
} else
{var or__3548__auto____16020 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16020))
{return or__3548__auto____16020;
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
if(cljs.core.truth_((void 0 === domina.t16028)))
{
/**
* @constructor
*/
domina.t16028 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16028.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16028");
});
domina.t16028.prototype.domina$DomContent$ = true;
domina.t16028.prototype.domina$DomContent$nodes = (function (_){
var this__16029 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16029.class_name));
});
domina.t16028.prototype.domina$DomContent$single_node = (function (_){
var this__16034 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16034.class_name));
});
domina.t16028.prototype.cljs$core$IMeta$ = true;
domina.t16028.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16037 = this;
return this__16037.__meta;
});
domina.t16028.prototype.cljs$core$IWithMeta$ = true;
domina.t16028.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16042 = this;
return (new domina.t16028(this__16042.class_name,this__16042.by_class,__meta));
});
domina.t16028;
} else
{}
return (new domina.t16028(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16058_SHARP_){
return p1__16058_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16069_SHARP_,p2__16071_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16069_SHARP_,p2__16071_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16087_SHARP_,p2__16085_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16085_SHARP_,p1__16087_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16093_SHARP_,p2__16091_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16091_SHARP_,p1__16093_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16100_SHARP_,p2__16099_SHARP_){
return goog.dom.replaceNode.call(null,p2__16099_SHARP_,p1__16100_SHARP_);
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
var s__16116 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16116))))
{return s__16116;
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
var G__16120__16122 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16120__16122))
{var n__16125 = cljs.core.first.call(null,G__16120__16122);
var G__16120__16126 = G__16120__16122;

while(true){
goog.style.setStyle.call(null,n__16125,cljs.core.name.call(null,name),value);
var temp__3698__auto____16134 = cljs.core.next.call(null,G__16120__16126);

if(cljs.core.truth_(temp__3698__auto____16134))
{var G__16120__16138 = temp__3698__auto____16134;

{
var G__16198 = cljs.core.first.call(null,G__16120__16138);
var G__16199 = G__16120__16138;
n__16125 = G__16198;
G__16120__16126 = G__16199;
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
var G__16202__16205 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16202__16205))
{var n__16207 = cljs.core.first.call(null,G__16202__16205);
var G__16202__16210 = G__16202__16205;

while(true){
n__16207.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16213 = cljs.core.next.call(null,G__16202__16210);

if(cljs.core.truth_(temp__3698__auto____16213))
{var G__16202__16215 = temp__3698__auto____16213;

{
var G__16221 = cljs.core.first.call(null,G__16202__16215);
var G__16222 = G__16202__16215;
n__16207 = G__16221;
G__16202__16210 = G__16222;
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
var vec__16230__16236 = pair.split(/\s*:\s*/);
var k__16239 = cljs.core.nth.call(null,vec__16230__16236,0,null);
var v__16260 = cljs.core.nth.call(null,vec__16230__16236,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16261 = k__16239;

if(cljs.core.truth_(and__3546__auto____16261))
{return v__16260;
} else
{return and__3546__auto____16261;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16239.toLowerCase()),v__16260);
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
var node__16288 = domina.single_node.call(null,content);
var attrs__16289 = node__16288.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16275_SHARP_){
var attr__16290 = attrs__16289.item(p1__16275_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16290.nodeName.toLowerCase())],[attr__16290.nodeValue]);
}),cljs.core.range.call(null,attrs__16289.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16296__16297 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16296__16297))
{var G__16299__16301 = cljs.core.first.call(null,G__16296__16297);
var vec__16300__16302 = G__16299__16301;
var name__16303 = cljs.core.nth.call(null,vec__16300__16302,0,null);
var value__16304 = cljs.core.nth.call(null,vec__16300__16302,1,null);
var G__16296__16305 = G__16296__16297;

var G__16299__16306 = G__16299__16301;
var G__16296__16307 = G__16296__16305;

while(true){
var vec__16308__16309 = G__16299__16306;
var name__16310 = cljs.core.nth.call(null,vec__16308__16309,0,null);
var value__16311 = cljs.core.nth.call(null,vec__16308__16309,1,null);
var G__16296__16312 = G__16296__16307;

domina.set_style_BANG_.call(null,content,name__16310,value__16311);
var temp__3698__auto____16313 = cljs.core.next.call(null,G__16296__16312);

if(cljs.core.truth_(temp__3698__auto____16313))
{var G__16296__16314 = temp__3698__auto____16313;

{
var G__16324 = cljs.core.first.call(null,G__16296__16314);
var G__16325 = G__16296__16314;
G__16299__16306 = G__16324;
G__16296__16307 = G__16325;
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
var G__16328__16329 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16328__16329))
{var G__16331__16333 = cljs.core.first.call(null,G__16328__16329);
var vec__16332__16334 = G__16331__16333;
var name__16335 = cljs.core.nth.call(null,vec__16332__16334,0,null);
var value__16336 = cljs.core.nth.call(null,vec__16332__16334,1,null);
var G__16328__16337 = G__16328__16329;

var G__16331__16338 = G__16331__16333;
var G__16328__16339 = G__16328__16337;

while(true){
var vec__16340__16341 = G__16331__16338;
var name__16342 = cljs.core.nth.call(null,vec__16340__16341,0,null);
var value__16343 = cljs.core.nth.call(null,vec__16340__16341,1,null);
var G__16328__16356 = G__16328__16339;

domina.set_attr_BANG_.call(null,content,name__16342,value__16343);
var temp__3698__auto____16359 = cljs.core.next.call(null,G__16328__16356);

if(cljs.core.truth_(temp__3698__auto____16359))
{var G__16328__16361 = temp__3698__auto____16359;

{
var G__16388 = cljs.core.first.call(null,G__16328__16361);
var G__16389 = G__16328__16361;
G__16331__16338 = G__16388;
G__16328__16339 = G__16389;
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
var G__16393__16395 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16393__16395))
{var node__16397 = cljs.core.first.call(null,G__16393__16395);
var G__16393__16399 = G__16393__16395;

while(true){
goog.dom.classes.add.call(null,node__16397,class$);
var temp__3698__auto____16401 = cljs.core.next.call(null,G__16393__16399);

if(cljs.core.truth_(temp__3698__auto____16401))
{var G__16393__16403 = temp__3698__auto____16401;

{
var G__16407 = cljs.core.first.call(null,G__16393__16403);
var G__16408 = G__16393__16403;
node__16397 = G__16407;
G__16393__16399 = G__16408;
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
var G__16409__16412 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16409__16412))
{var node__16413 = cljs.core.first.call(null,G__16409__16412);
var G__16409__16414 = G__16409__16412;

while(true){
goog.dom.classes.remove.call(null,node__16413,class$);
var temp__3698__auto____16415 = cljs.core.next.call(null,G__16409__16414);

if(cljs.core.truth_(temp__3698__auto____16415))
{var G__16409__16450 = temp__3698__auto____16415;

{
var G__16453 = cljs.core.first.call(null,G__16409__16450);
var G__16454 = G__16409__16450;
node__16413 = G__16453;
G__16409__16414 = G__16454;
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
var text__16464 = (function (content){
return text.call(null,content,true);
});
var text__16465 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16464.call(this,content);
case  2 :
return text__16465.call(this,content,normalize);
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
var G__16467__16468 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16467__16468))
{var node__16469 = cljs.core.first.call(null,G__16467__16468);
var G__16467__16470 = G__16467__16468;

while(true){
goog.dom.setTextContent.call(null,node__16469,value);
var temp__3698__auto____16471 = cljs.core.next.call(null,G__16467__16470);

if(cljs.core.truth_(temp__3698__auto____16471))
{var G__16467__16472 = temp__3698__auto____16471;

{
var G__16475 = cljs.core.first.call(null,G__16467__16472);
var G__16476 = G__16467__16472;
node__16469 = G__16475;
G__16467__16470 = G__16476;
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
var G__16477__16479 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16477__16479))
{var node__16482 = cljs.core.first.call(null,G__16477__16479);
var G__16477__16483 = G__16477__16479;

while(true){
goog.dom.forms.setValue.call(null,node__16482,value);
var temp__3698__auto____16487 = cljs.core.next.call(null,G__16477__16483);

if(cljs.core.truth_(temp__3698__auto____16487))
{var G__16477__16488 = temp__3698__auto____16487;

{
var G__16493 = cljs.core.first.call(null,G__16477__16488);
var G__16494 = G__16477__16488;
node__16482 = G__16493;
G__16477__16483 = G__16494;
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
var G__16505__16506 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16505__16506))
{var node__16508 = cljs.core.first.call(null,G__16505__16506);
var G__16505__16509 = G__16505__16506;

while(true){
node__16508.innerHTML = value;
var temp__3698__auto____16512 = cljs.core.next.call(null,G__16505__16509);

if(cljs.core.truth_(temp__3698__auto____16512))
{var G__16505__16514 = temp__3698__auto____16512;

{
var G__16515 = cljs.core.first.call(null,G__16505__16514);
var G__16516 = G__16505__16514;
node__16508 = G__16515;
G__16505__16509 = G__16516;
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
var first_child__16530 = (function (){var frag__16523 = document.createDocumentFragment();

var G__16524__16525 = cljs.core.seq.call(null,children__16522);

if(cljs.core.truth_(G__16524__16525))
{var child__16526 = cljs.core.first.call(null,G__16524__16525);
var G__16524__16527 = G__16524__16525;

while(true){
frag__16523.appendChild(child__16526);
var temp__3698__auto____16528 = cljs.core.next.call(null,G__16524__16527);

if(cljs.core.truth_(temp__3698__auto____16528))
{var G__16524__16529 = temp__3698__auto____16528;

{
var G__16532 = cljs.core.first.call(null,G__16524__16529);
var G__16533 = G__16524__16529;
child__16526 = G__16532;
G__16524__16527 = G__16533;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16523;
})();
var other_children__16531 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16521) - 1),(function (){
return first_child__16530.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16521)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16522)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16521)))
{f.call(null,cljs.core.first.call(null,parents__16521),first_child__16530);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16499_SHARP_,p2__16500_SHARP_){
return f.call(null,p1__16499_SHARP_,p2__16500_SHARP_);
}),cljs.core.rest.call(null,parents__16521),other_children__16531));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16538 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16539 = (function (nl,n){
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
return lazy_nodelist__16538.call(this,nl);
case  2 :
return lazy_nodelist__16539.call(this,nl,n);
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
var vec__16547__16552 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16553 = cljs.core.nth.call(null,vec__16547__16552,0,null);
var table_level__16554 = cljs.core.nth.call(null,vec__16547__16552,1,null);
var ___16555 = cljs.core.nthnext.call(null,vec__16547__16552,2);
var wrapper__16556 = domina.create_wrapper.call(null,table_level__16554);

domina.set_wrapper_html_BANG_.call(null,wrapper__16556,content);
return domina.extract_wrapper_dom.call(null,wrapper__16556,table_level__16554);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,cljs.core.str.call(null,"typof",goog.typeOf.call(null,content)));
domina.log_debug.call(null,cljs.core.str.call(null,"seq?",cljs.core.seq_QMARK_.call(null,content)));
if(cljs.core.truth_((function (){var x__6782__auto____16557 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16558 = x__6782__auto____16557;

if(cljs.core.truth_(and__3546__auto____16558))
{var and__3546__auto____16559 = x__6782__auto____16557.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16559))
{var and__3546__auto____16560 = x__6782__auto____16557.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16560))
{return cljs.core.not.call(null,x__6782__auto____16557.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16560;
}
} else
{return and__3546__auto____16559;
}
} else
{return and__3546__auto____16558;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6782__auto____16557);
}
})()))
{domina.log_debug.call(null,"sequing content");
return cljs.core.seq.call(null,content);
} else
{domina.log_debug.call(null,"consing content");
return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6782__auto____16561 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16562 = x__6782__auto____16561;

if(cljs.core.truth_(and__3546__auto____16562))
{var and__3546__auto____16563 = x__6782__auto____16561.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16563))
{var and__3546__auto____16564 = x__6782__auto____16561.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16564))
{return cljs.core.not.call(null,x__6782__auto____16561.hasOwnProperty("cljs$core$ISeqable$"));
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
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6782__auto____16561);
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
var G__16593 = null;
var G__16593__16594 = (function (coll,n){
return coll.item(n);
});
var G__16593__16595 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16593 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16593__16594.call(this,coll,n);
case  3 :
return G__16593__16595.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16593;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
