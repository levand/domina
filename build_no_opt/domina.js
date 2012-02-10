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
if(cljs.core.truth_((function (){var and__3546__auto____16010 = domina.debug;

if(cljs.core.truth_(and__3546__auto____16010))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16010;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____16029 = content;

if(cljs.core.truth_(and__3546__auto____16029))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____16029;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____16030 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____16030))
{return or__3548__auto____16030;
} else
{var or__3548__auto____16031 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____16031))
{return or__3548__auto____16031;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____16032 = nodeseq;

if(cljs.core.truth_(and__3546__auto____16032))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____16032;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16035 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16035))
{return or__3548__auto____16035;
} else
{var or__3548__auto____16036 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16036))
{return or__3548__auto____16036;
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
if(cljs.core.truth_((void 0 === domina.t16045)))
{
/**
* @constructor
*/
domina.t16045 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16045.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16045");
});
domina.t16045.prototype.domina$DomContent$ = true;
domina.t16045.prototype.domina$DomContent$nodes = (function (_){
var this__16054 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16054.class_name));
});
domina.t16045.prototype.domina$DomContent$single_node = (function (_){
var this__16055 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16055.class_name));
});
domina.t16045.prototype.cljs$core$IMeta$ = true;
domina.t16045.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16058 = this;
return this__16058.__meta;
});
domina.t16045.prototype.cljs$core$IWithMeta$ = true;
domina.t16045.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16059 = this;
return (new domina.t16045(this__16059.class_name,this__16059.by_class,__meta));
});
domina.t16045;
} else
{}
return (new domina.t16045(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16068_SHARP_){
return p1__16068_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16069_SHARP_,p2__16070_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16069_SHARP_,p2__16070_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16075_SHARP_,p2__16074_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16074_SHARP_,p1__16075_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16081_SHARP_,p2__16080_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16080_SHARP_,p1__16081_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16085_SHARP_,p2__16084_SHARP_){
return goog.dom.replaceNode.call(null,p2__16084_SHARP_,p1__16085_SHARP_);
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
var s__16096 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16096))))
{return s__16096;
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
var G__16113__16114 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16113__16114))
{var n__16115 = cljs.core.first.call(null,G__16113__16114);
var G__16113__16116 = G__16113__16114;

while(true){
goog.style.setStyle.call(null,n__16115,cljs.core.name.call(null,name),value);
var temp__3698__auto____16215 = cljs.core.next.call(null,G__16113__16116);

if(cljs.core.truth_(temp__3698__auto____16215))
{var G__16113__16216 = temp__3698__auto____16215;

{
var G__16217 = cljs.core.first.call(null,G__16113__16216);
var G__16218 = G__16113__16216;
n__16115 = G__16217;
G__16113__16116 = G__16218;
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
var G__16219__16220 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16219__16220))
{var n__16221 = cljs.core.first.call(null,G__16219__16220);
var G__16219__16222 = G__16219__16220;

while(true){
n__16221.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16223 = cljs.core.next.call(null,G__16219__16222);

if(cljs.core.truth_(temp__3698__auto____16223))
{var G__16219__16224 = temp__3698__auto____16223;

{
var G__16227 = cljs.core.first.call(null,G__16219__16224);
var G__16228 = G__16219__16224;
n__16221 = G__16227;
G__16219__16222 = G__16228;
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
var vec__16229__16230 = pair.split(/\s*:\s*/);
var k__16231 = cljs.core.nth.call(null,vec__16229__16230,0,null);
var v__16232 = cljs.core.nth.call(null,vec__16229__16230,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16236 = k__16231;

if(cljs.core.truth_(and__3546__auto____16236))
{return v__16232;
} else
{return and__3546__auto____16236;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16231.toLowerCase()),v__16232);
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
var node__16238 = domina.single_node.call(null,content);
var attrs__16239 = node__16238.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16237_SHARP_){
var attr__16240 = attrs__16239.item(p1__16237_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16240.nodeName.toLowerCase())],[attr__16240.nodeValue]);
}),cljs.core.range.call(null,attrs__16239.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16245__16246 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16245__16246))
{var G__16248__16250 = cljs.core.first.call(null,G__16245__16246);
var vec__16249__16251 = G__16248__16250;
var name__16252 = cljs.core.nth.call(null,vec__16249__16251,0,null);
var value__16253 = cljs.core.nth.call(null,vec__16249__16251,1,null);
var G__16245__16254 = G__16245__16246;

var G__16248__16255 = G__16248__16250;
var G__16245__16256 = G__16245__16254;

while(true){
var vec__16257__16258 = G__16248__16255;
var name__16259 = cljs.core.nth.call(null,vec__16257__16258,0,null);
var value__16260 = cljs.core.nth.call(null,vec__16257__16258,1,null);
var G__16245__16261 = G__16245__16256;

domina.set_style_BANG_.call(null,content,name__16259,value__16260);
var temp__3698__auto____16266 = cljs.core.next.call(null,G__16245__16261);

if(cljs.core.truth_(temp__3698__auto____16266))
{var G__16245__16267 = temp__3698__auto____16266;

{
var G__16268 = cljs.core.first.call(null,G__16245__16267);
var G__16269 = G__16245__16267;
G__16248__16255 = G__16268;
G__16245__16256 = G__16269;
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
var G__16270__16271 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16270__16271))
{var G__16277__16279 = cljs.core.first.call(null,G__16270__16271);
var vec__16278__16280 = G__16277__16279;
var name__16281 = cljs.core.nth.call(null,vec__16278__16280,0,null);
var value__16282 = cljs.core.nth.call(null,vec__16278__16280,1,null);
var G__16270__16283 = G__16270__16271;

var G__16277__16284 = G__16277__16279;
var G__16270__16285 = G__16270__16283;

while(true){
var vec__16286__16287 = G__16277__16284;
var name__16288 = cljs.core.nth.call(null,vec__16286__16287,0,null);
var value__16289 = cljs.core.nth.call(null,vec__16286__16287,1,null);
var G__16270__16290 = G__16270__16285;

domina.set_attr_BANG_.call(null,content,name__16288,value__16289);
var temp__3698__auto____16291 = cljs.core.next.call(null,G__16270__16290);

if(cljs.core.truth_(temp__3698__auto____16291))
{var G__16270__16292 = temp__3698__auto____16291;

{
var G__16293 = cljs.core.first.call(null,G__16270__16292);
var G__16294 = G__16270__16292;
G__16277__16284 = G__16293;
G__16270__16285 = G__16294;
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
var G__16296__16297 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16296__16297))
{var node__16299 = cljs.core.first.call(null,G__16296__16297);
var G__16296__16301 = G__16296__16297;

while(true){
goog.dom.classes.add.call(null,node__16299,class$);
var temp__3698__auto____16303 = cljs.core.next.call(null,G__16296__16301);

if(cljs.core.truth_(temp__3698__auto____16303))
{var G__16296__16305 = temp__3698__auto____16303;

{
var G__16307 = cljs.core.first.call(null,G__16296__16305);
var G__16308 = G__16296__16305;
node__16299 = G__16307;
G__16296__16301 = G__16308;
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
var G__16311__16371 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16311__16371))
{var node__16373 = cljs.core.first.call(null,G__16311__16371);
var G__16311__16374 = G__16311__16371;

while(true){
goog.dom.classes.remove.call(null,node__16373,class$);
var temp__3698__auto____16378 = cljs.core.next.call(null,G__16311__16374);

if(cljs.core.truth_(temp__3698__auto____16378))
{var G__16311__16379 = temp__3698__auto____16378;

{
var G__16382 = cljs.core.first.call(null,G__16311__16379);
var G__16383 = G__16311__16379;
node__16373 = G__16382;
G__16311__16374 = G__16383;
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
var text__16387 = (function (content){
return text.call(null,content,true);
});
var text__16388 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16387.call(this,content);
case  2 :
return text__16388.call(this,content,normalize);
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
var G__16390__16392 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16390__16392))
{var node__16393 = cljs.core.first.call(null,G__16390__16392);
var G__16390__16394 = G__16390__16392;

while(true){
goog.dom.setTextContent.call(null,node__16393,value);
var temp__3698__auto____16395 = cljs.core.next.call(null,G__16390__16394);

if(cljs.core.truth_(temp__3698__auto____16395))
{var G__16390__16396 = temp__3698__auto____16395;

{
var G__16400 = cljs.core.first.call(null,G__16390__16396);
var G__16401 = G__16390__16396;
node__16393 = G__16400;
G__16390__16394 = G__16401;
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
var G__16402__16403 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16402__16403))
{var node__16404 = cljs.core.first.call(null,G__16402__16403);
var G__16402__16405 = G__16402__16403;

while(true){
goog.dom.forms.setValue.call(null,node__16404,value);
var temp__3698__auto____16406 = cljs.core.next.call(null,G__16402__16405);

if(cljs.core.truth_(temp__3698__auto____16406))
{var G__16402__16407 = temp__3698__auto____16406;

{
var G__16410 = cljs.core.first.call(null,G__16402__16407);
var G__16411 = G__16402__16407;
node__16404 = G__16410;
G__16402__16405 = G__16411;
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
var G__16415__16416 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16415__16416))
{var node__16417 = cljs.core.first.call(null,G__16415__16416);
var G__16415__16418 = G__16415__16416;

while(true){
node__16417.innerHTML = value;
var temp__3698__auto____16419 = cljs.core.next.call(null,G__16415__16418);

if(cljs.core.truth_(temp__3698__auto____16419))
{var G__16415__16420 = temp__3698__auto____16419;

{
var G__16426 = cljs.core.first.call(null,G__16415__16420);
var G__16427 = G__16415__16420;
node__16417 = G__16426;
G__16415__16418 = G__16427;
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
var parents__16431 = domina.nodes.call(null,parent_content);
var children__16432 = domina.nodes.call(null,child_content);
var first_child__16441 = (function (){var frag__16433 = document.createDocumentFragment();

var G__16434__16435 = cljs.core.seq.call(null,children__16432);

if(cljs.core.truth_(G__16434__16435))
{var child__16436 = cljs.core.first.call(null,G__16434__16435);
var G__16434__16438 = G__16434__16435;

while(true){
frag__16433.appendChild(child__16436);
var temp__3698__auto____16439 = cljs.core.next.call(null,G__16434__16438);

if(cljs.core.truth_(temp__3698__auto____16439))
{var G__16434__16440 = temp__3698__auto____16439;

{
var G__16446 = cljs.core.first.call(null,G__16434__16440);
var G__16448 = G__16434__16440;
child__16436 = G__16446;
G__16434__16438 = G__16448;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16433;
})();
var other_children__16444 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16431) - 1),(function (){
return first_child__16441.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16431)))
{f.call(null,cljs.core.first.call(null,parents__16431),first_child__16441);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16413_SHARP_,p2__16414_SHARP_){
return f.call(null,p1__16413_SHARP_,p2__16414_SHARP_);
}),cljs.core.rest.call(null,parents__16431),other_children__16444));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16454 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16455 = (function (nl,n){
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
return lazy_nodelist__16454.call(this,nl);
case  2 :
return lazy_nodelist__16455.call(this,nl,n);
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
var inner_wrapper__16484 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16485 = cljs.core.seq.call(null,inner_wrapper__16484.childNodes);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16485),1)))
{return inner_wrapper__16484.removeChild(inner_wrapper__16484.firstChild);
} else
{return children__16485;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16500__16501 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16502 = cljs.core.nth.call(null,vec__16500__16501,0,null);
var table_level__16503 = cljs.core.nth.call(null,vec__16500__16501,1,null);
var ___16504 = cljs.core.nthnext.call(null,vec__16500__16501,2);
var wrapper__16505 = domina.create_wrapper.call(null,table_level__16503);

domina.set_wrapper_html_BANG_.call(null,wrapper__16505,content);
return domina.extract_wrapper_dom.call(null,wrapper__16505,table_level__16503);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16506 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16507 = x__445__auto____16506;

if(cljs.core.truth_(and__3546__auto____16507))
{var and__3546__auto____16508 = x__445__auto____16506.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16508))
{return cljs.core.not.call(null,x__445__auto____16506.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16508;
}
} else
{return and__3546__auto____16507;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16506);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16509 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16510 = x__445__auto____16509;

if(cljs.core.truth_(and__3546__auto____16510))
{var and__3546__auto____16511 = x__445__auto____16509.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16511))
{return cljs.core.not.call(null,x__445__auto____16509.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16511;
}
} else
{return and__3546__auto____16510;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16509);
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
var G__16515 = null;
var G__16515__16516 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16515__16517 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16515 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16515__16516.call(this,nodelist,n);
case  3 :
return G__16515__16517.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16515;
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
var G__16537 = null;
var G__16537__16538 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16537__16539 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16537 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16537__16538.call(this,nodelist,n);
case  3 :
return G__16537__16539.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16537;
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
var G__16553 = null;
var G__16553__16554 = (function (coll,n){
return coll.item(n);
});
var G__16553__16555 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16553 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16553__16554.call(this,coll,n);
case  3 :
return G__16553__16555.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16553;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
