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
if(cljs.core.truth_((function (){var and__3546__auto____15975 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15975))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15975;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15985 = content;

if(cljs.core.truth_(and__3546__auto____15985))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15985;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15991 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15991))
{return or__3548__auto____15991;
} else
{var or__3548__auto____15993 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15993))
{return or__3548__auto____15993;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15997 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15997))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15997;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____16004 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____16004))
{return or__3548__auto____16004;
} else
{var or__3548__auto____16005 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____16005))
{return or__3548__auto____16005;
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
if(cljs.core.truth_((void 0 === domina.t16017)))
{
/**
* @constructor
*/
domina.t16017 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16017.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16017");
});
domina.t16017.prototype.domina$DomContent$ = true;
domina.t16017.prototype.domina$DomContent$nodes = (function (_){
var this__16027 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16027.class_name));
});
domina.t16017.prototype.domina$DomContent$single_node = (function (_){
var this__16028 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16028.class_name));
});
domina.t16017.prototype.cljs$core$IMeta$ = true;
domina.t16017.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16029 = this;
return this__16029.__meta;
});
domina.t16017.prototype.cljs$core$IWithMeta$ = true;
domina.t16017.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16034 = this;
return (new domina.t16017(this__16034.class_name,this__16034.by_class,__meta));
});
domina.t16017;
} else
{}
return (new domina.t16017(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16051_SHARP_){
return p1__16051_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16065_SHARP_,p2__16067_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16065_SHARP_,p2__16067_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16079_SHARP_,p2__16078_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16078_SHARP_,p1__16079_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16086_SHARP_,p2__16085_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16085_SHARP_,p1__16086_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16094_SHARP_,p2__16093_SHARP_){
return goog.dom.replaceNode.call(null,p2__16093_SHARP_,p1__16094_SHARP_);
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
var s__16139 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16139))))
{return s__16139;
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
var G__16149__16150 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16149__16150))
{var n__16151 = cljs.core.first.call(null,G__16149__16150);
var G__16149__16152 = G__16149__16150;

while(true){
goog.style.setStyle.call(null,n__16151,cljs.core.name.call(null,name),value);
var temp__3698__auto____16154 = cljs.core.next.call(null,G__16149__16152);

if(cljs.core.truth_(temp__3698__auto____16154))
{var G__16149__16157 = temp__3698__auto____16154;

{
var G__16163 = cljs.core.first.call(null,G__16149__16157);
var G__16164 = G__16149__16157;
n__16151 = G__16163;
G__16149__16152 = G__16164;
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
var G__16167__16170 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16167__16170))
{var n__16173 = cljs.core.first.call(null,G__16167__16170);
var G__16167__16174 = G__16167__16170;

while(true){
n__16173.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16177 = cljs.core.next.call(null,G__16167__16174);

if(cljs.core.truth_(temp__3698__auto____16177))
{var G__16167__16179 = temp__3698__auto____16177;

{
var G__16185 = cljs.core.first.call(null,G__16167__16179);
var G__16187 = G__16167__16179;
n__16173 = G__16185;
G__16167__16174 = G__16187;
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
var vec__16192__16194 = pair.split(/\s*:\s*/);
var k__16195 = cljs.core.nth.call(null,vec__16192__16194,0,null);
var v__16196 = cljs.core.nth.call(null,vec__16192__16194,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16199 = k__16195;

if(cljs.core.truth_(and__3546__auto____16199))
{return v__16196;
} else
{return and__3546__auto____16199;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16195.toLowerCase()),v__16196);
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
var node__16216 = domina.single_node.call(null,content);
var attrs__16218 = node__16216.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16208_SHARP_){
var attr__16223 = attrs__16218.item(p1__16208_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16223.nodeName.toLowerCase())],[attr__16223.nodeValue]);
}),cljs.core.range.call(null,attrs__16218.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16231__16232 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16231__16232))
{var G__16235__16237 = cljs.core.first.call(null,G__16231__16232);
var vec__16236__16238 = G__16235__16237;
var name__16239 = cljs.core.nth.call(null,vec__16236__16238,0,null);
var value__16240 = cljs.core.nth.call(null,vec__16236__16238,1,null);
var G__16231__16241 = G__16231__16232;

var G__16235__16242 = G__16235__16237;
var G__16231__16243 = G__16231__16241;

while(true){
var vec__16245__16247 = G__16235__16242;
var name__16248 = cljs.core.nth.call(null,vec__16245__16247,0,null);
var value__16249 = cljs.core.nth.call(null,vec__16245__16247,1,null);
var G__16231__16250 = G__16231__16243;

domina.set_style_BANG_.call(null,content,name__16248,value__16249);
var temp__3698__auto____16252 = cljs.core.next.call(null,G__16231__16250);

if(cljs.core.truth_(temp__3698__auto____16252))
{var G__16231__16256 = temp__3698__auto____16252;

{
var G__16262 = cljs.core.first.call(null,G__16231__16256);
var G__16264 = G__16231__16256;
G__16235__16242 = G__16262;
G__16231__16243 = G__16264;
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
var G__16266__16272 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16266__16272))
{var G__16278__16286 = cljs.core.first.call(null,G__16266__16272);
var vec__16282__16287 = G__16278__16286;
var name__16290 = cljs.core.nth.call(null,vec__16282__16287,0,null);
var value__16294 = cljs.core.nth.call(null,vec__16282__16287,1,null);
var G__16266__16296 = G__16266__16272;

var G__16278__16299 = G__16278__16286;
var G__16266__16300 = G__16266__16296;

while(true){
var vec__16302__16304 = G__16278__16299;
var name__16307 = cljs.core.nth.call(null,vec__16302__16304,0,null);
var value__16310 = cljs.core.nth.call(null,vec__16302__16304,1,null);
var G__16266__16312 = G__16266__16300;

domina.set_attr_BANG_.call(null,content,name__16307,value__16310);
var temp__3698__auto____16315 = cljs.core.next.call(null,G__16266__16312);

if(cljs.core.truth_(temp__3698__auto____16315))
{var G__16266__16317 = temp__3698__auto____16315;

{
var G__16325 = cljs.core.first.call(null,G__16266__16317);
var G__16326 = G__16266__16317;
G__16278__16299 = G__16325;
G__16266__16300 = G__16326;
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
var G__16337__16342 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16337__16342))
{var node__16345 = cljs.core.first.call(null,G__16337__16342);
var G__16337__16346 = G__16337__16342;

while(true){
goog.dom.classes.add.call(null,node__16345,class$);
var temp__3698__auto____16350 = cljs.core.next.call(null,G__16337__16346);

if(cljs.core.truth_(temp__3698__auto____16350))
{var G__16337__16351 = temp__3698__auto____16350;

{
var G__16360 = cljs.core.first.call(null,G__16337__16351);
var G__16362 = G__16337__16351;
node__16345 = G__16360;
G__16337__16346 = G__16362;
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
var G__16363__16365 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16363__16365))
{var node__16367 = cljs.core.first.call(null,G__16363__16365);
var G__16363__16368 = G__16363__16365;

while(true){
goog.dom.classes.remove.call(null,node__16367,class$);
var temp__3698__auto____16369 = cljs.core.next.call(null,G__16363__16368);

if(cljs.core.truth_(temp__3698__auto____16369))
{var G__16363__16370 = temp__3698__auto____16369;

{
var G__16373 = cljs.core.first.call(null,G__16363__16370);
var G__16374 = G__16363__16370;
node__16367 = G__16373;
G__16363__16368 = G__16374;
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
var text__16384 = (function (content){
return text.call(null,content,true);
});
var text__16385 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16384.call(this,content);
case  2 :
return text__16385.call(this,content,normalize);
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
var G__16389__16390 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16389__16390))
{var node__16391 = cljs.core.first.call(null,G__16389__16390);
var G__16389__16392 = G__16389__16390;

while(true){
goog.dom.setTextContent.call(null,node__16391,value);
var temp__3698__auto____16393 = cljs.core.next.call(null,G__16389__16392);

if(cljs.core.truth_(temp__3698__auto____16393))
{var G__16389__16394 = temp__3698__auto____16393;

{
var G__16398 = cljs.core.first.call(null,G__16389__16394);
var G__16399 = G__16389__16394;
node__16391 = G__16398;
G__16389__16392 = G__16399;
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
var G__16406__16407 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16406__16407))
{var node__16408 = cljs.core.first.call(null,G__16406__16407);
var G__16406__16409 = G__16406__16407;

while(true){
goog.dom.forms.setValue.call(null,node__16408,value);
var temp__3698__auto____16410 = cljs.core.next.call(null,G__16406__16409);

if(cljs.core.truth_(temp__3698__auto____16410))
{var G__16406__16411 = temp__3698__auto____16410;

{
var G__16418 = cljs.core.first.call(null,G__16406__16411);
var G__16419 = G__16406__16411;
node__16408 = G__16418;
G__16406__16409 = G__16419;
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
var G__16432__16434 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16432__16434))
{var node__16437 = cljs.core.first.call(null,G__16432__16434);
var G__16432__16438 = G__16432__16434;

while(true){
node__16437.innerHTML = value;
var temp__3698__auto____16439 = cljs.core.next.call(null,G__16432__16438);

if(cljs.core.truth_(temp__3698__auto____16439))
{var G__16432__16440 = temp__3698__auto____16439;

{
var G__16447 = cljs.core.first.call(null,G__16432__16440);
var G__16448 = G__16432__16440;
node__16437 = G__16447;
G__16432__16438 = G__16448;
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
var parents__16449 = domina.nodes.call(null,parent_content);
var children__16450 = domina.nodes.call(null,child_content);
var first_child__16464 = (function (){var frag__16452 = document.createDocumentFragment();

var G__16453__16455 = cljs.core.seq.call(null,children__16450);

if(cljs.core.truth_(G__16453__16455))
{var child__16458 = cljs.core.first.call(null,G__16453__16455);
var G__16453__16459 = G__16453__16455;

while(true){
frag__16452.appendChild(child__16458);
var temp__3698__auto____16461 = cljs.core.next.call(null,G__16453__16459);

if(cljs.core.truth_(temp__3698__auto____16461))
{var G__16453__16463 = temp__3698__auto____16461;

{
var G__16488 = cljs.core.first.call(null,G__16453__16463);
var G__16489 = G__16453__16463;
child__16458 = G__16488;
G__16453__16459 = G__16489;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16452;
})();
var other_children__16465 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16449) - 1),(function (){
return first_child__16464.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16449)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16450)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16449)))
{f.call(null,cljs.core.first.call(null,parents__16449),first_child__16464);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16425_SHARP_,p2__16426_SHARP_){
return f.call(null,p1__16425_SHARP_,p2__16426_SHARP_);
}),cljs.core.rest.call(null,parents__16449),other_children__16465));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16492 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16493 = (function (nl,n){
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
return lazy_nodelist__16492.call(this,nl);
case  2 :
return lazy_nodelist__16493.call(this,nl,n);
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
var inner_wrapper__16499 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16500 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16499));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16500),1)))
{return inner_wrapper__16499.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16499));
} else
{return children__16500;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16507__16508 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16509 = cljs.core.nth.call(null,vec__16507__16508,0,null);
var table_level__16510 = cljs.core.nth.call(null,vec__16507__16508,1,null);
var ___16511 = cljs.core.nthnext.call(null,vec__16507__16508,2);
var wrapper__16512 = domina.create_wrapper.call(null,table_level__16510);

domina.set_wrapper_html_BANG_.call(null,wrapper__16512,content);
return domina.extract_wrapper_dom.call(null,wrapper__16512,table_level__16510);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16515 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16516 = x__6749__auto____16515;

if(cljs.core.truth_(and__3546__auto____16516))
{var and__3546__auto____16517 = x__6749__auto____16515.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16517))
{var and__3546__auto____16518 = x__6749__auto____16515.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16518))
{return cljs.core.not.call(null,x__6749__auto____16515.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16518;
}
} else
{return and__3546__auto____16517;
}
} else
{return and__3546__auto____16516;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16515);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16519 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16520 = x__6749__auto____16519;

if(cljs.core.truth_(and__3546__auto____16520))
{var and__3546__auto____16521 = x__6749__auto____16519.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16521))
{var and__3546__auto____16522 = x__6749__auto____16519.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16522))
{return cljs.core.not.call(null,x__6749__auto____16519.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16522;
}
} else
{return and__3546__auto____16521;
}
} else
{return and__3546__auto____16520;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16519);
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
var G__16531 = null;
var G__16531__16532 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16531__16533 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16531 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16531__16532.call(this,nodelist,n);
case  3 :
return G__16531__16533.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16531;
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
var G__16541 = null;
var G__16541__16542 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16541__16543 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16541 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16541__16542.call(this,nodelist,n);
case  3 :
return G__16541__16543.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16541;
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
var G__16555 = null;
var G__16555__16556 = (function (coll,n){
return coll.item(n);
});
var G__16555__16557 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16555 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16555__16556.call(this,coll,n);
case  3 :
return G__16555__16557.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16555;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
