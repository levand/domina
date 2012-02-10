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
if(cljs.core.truth_((function (){var and__3546__auto____15901 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15901))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15901;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15907 = content;

if(cljs.core.truth_(and__3546__auto____15907))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15907;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15910 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15910))
{return or__3548__auto____15910;
} else
{var or__3548__auto____15912 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15912))
{return or__3548__auto____15912;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15917 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15917))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15917;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15921 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15921))
{return or__3548__auto____15921;
} else
{var or__3548__auto____15922 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15922))
{return or__3548__auto____15922;
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
if(cljs.core.truth_((void 0 === domina.t15957)))
{
/**
* @constructor
*/
domina.t15957 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15957.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15957");
});
domina.t15957.prototype.domina$DomContent$ = true;
domina.t15957.prototype.domina$DomContent$nodes = (function (_){
var this__15966 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15966.class_name));
});
domina.t15957.prototype.domina$DomContent$single_node = (function (_){
var this__15968 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15968.class_name));
});
domina.t15957.prototype.cljs$core$IMeta$ = true;
domina.t15957.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15969 = this;
return this__15969.__meta;
});
domina.t15957.prototype.cljs$core$IWithMeta$ = true;
domina.t15957.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16043 = this;
return (new domina.t15957(this__16043.class_name,this__16043.by_class,__meta));
});
domina.t15957;
} else
{}
return (new domina.t15957(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16062_SHARP_){
return p1__16062_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16083_SHARP_,p2__16084_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16083_SHARP_,p2__16084_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16095_SHARP_,p2__16094_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16094_SHARP_,p1__16095_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16102_SHARP_,p2__16101_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16101_SHARP_,p1__16102_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16113_SHARP_,p2__16112_SHARP_){
return goog.dom.replaceNode.call(null,p2__16112_SHARP_,p1__16113_SHARP_);
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
var s__16141 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16141))))
{return s__16141;
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
var G__16150__16151 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16150__16151))
{var n__16152 = cljs.core.first.call(null,G__16150__16151);
var G__16150__16153 = G__16150__16151;

while(true){
goog.style.setStyle.call(null,n__16152,cljs.core.name.call(null,name),value);
var temp__3698__auto____16154 = cljs.core.next.call(null,G__16150__16153);

if(cljs.core.truth_(temp__3698__auto____16154))
{var G__16150__16155 = temp__3698__auto____16154;

{
var G__16160 = cljs.core.first.call(null,G__16150__16155);
var G__16161 = G__16150__16155;
n__16152 = G__16160;
G__16150__16153 = G__16161;
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
var G__16164__16165 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16164__16165))
{var n__16166 = cljs.core.first.call(null,G__16164__16165);
var G__16164__16167 = G__16164__16165;

while(true){
n__16166.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16170 = cljs.core.next.call(null,G__16164__16167);

if(cljs.core.truth_(temp__3698__auto____16170))
{var G__16164__16171 = temp__3698__auto____16170;

{
var G__16172 = cljs.core.first.call(null,G__16164__16171);
var G__16173 = G__16164__16171;
n__16166 = G__16172;
G__16164__16167 = G__16173;
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
var vec__16178__16179 = pair.split(/\s*:\s*/);
var k__16181 = cljs.core.nth.call(null,vec__16178__16179,0,null);
var v__16183 = cljs.core.nth.call(null,vec__16178__16179,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16184 = k__16181;

if(cljs.core.truth_(and__3546__auto____16184))
{return v__16183;
} else
{return and__3546__auto____16184;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16181.toLowerCase()),v__16183);
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
var node__16193 = domina.single_node.call(null,content);
var attrs__16194 = node__16193.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16190_SHARP_){
var attr__16195 = attrs__16194.item(p1__16190_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16195.nodeName.toLowerCase())],[attr__16195.nodeValue]);
}),cljs.core.range.call(null,attrs__16194.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16199__16200 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16199__16200))
{var G__16207__16211 = cljs.core.first.call(null,G__16199__16200);
var vec__16208__16212 = G__16207__16211;
var name__16213 = cljs.core.nth.call(null,vec__16208__16212,0,null);
var value__16214 = cljs.core.nth.call(null,vec__16208__16212,1,null);
var G__16199__16215 = G__16199__16200;

var G__16207__16217 = G__16207__16211;
var G__16199__16218 = G__16199__16215;

while(true){
var vec__16220__16221 = G__16207__16217;
var name__16222 = cljs.core.nth.call(null,vec__16220__16221,0,null);
var value__16223 = cljs.core.nth.call(null,vec__16220__16221,1,null);
var G__16199__16224 = G__16199__16218;

domina.set_style_BANG_.call(null,content,name__16222,value__16223);
var temp__3698__auto____16225 = cljs.core.next.call(null,G__16199__16224);

if(cljs.core.truth_(temp__3698__auto____16225))
{var G__16199__16226 = temp__3698__auto____16225;

{
var G__16233 = cljs.core.first.call(null,G__16199__16226);
var G__16234 = G__16199__16226;
G__16207__16217 = G__16233;
G__16199__16218 = G__16234;
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
var G__16239__16242 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16239__16242))
{var G__16245__16248 = cljs.core.first.call(null,G__16239__16242);
var vec__16246__16249 = G__16245__16248;
var name__16252 = cljs.core.nth.call(null,vec__16246__16249,0,null);
var value__16253 = cljs.core.nth.call(null,vec__16246__16249,1,null);
var G__16239__16254 = G__16239__16242;

var G__16245__16255 = G__16245__16248;
var G__16239__16257 = G__16239__16254;

while(true){
var vec__16258__16259 = G__16245__16255;
var name__16261 = cljs.core.nth.call(null,vec__16258__16259,0,null);
var value__16263 = cljs.core.nth.call(null,vec__16258__16259,1,null);
var G__16239__16264 = G__16239__16257;

domina.set_attr_BANG_.call(null,content,name__16261,value__16263);
var temp__3698__auto____16265 = cljs.core.next.call(null,G__16239__16264);

if(cljs.core.truth_(temp__3698__auto____16265))
{var G__16239__16266 = temp__3698__auto____16265;

{
var G__16276 = cljs.core.first.call(null,G__16239__16266);
var G__16277 = G__16239__16266;
G__16245__16255 = G__16276;
G__16239__16257 = G__16277;
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
var G__16280__16281 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16280__16281))
{var node__16282 = cljs.core.first.call(null,G__16280__16281);
var G__16280__16283 = G__16280__16281;

while(true){
goog.dom.classes.add.call(null,node__16282,class$);
var temp__3698__auto____16286 = cljs.core.next.call(null,G__16280__16283);

if(cljs.core.truth_(temp__3698__auto____16286))
{var G__16280__16287 = temp__3698__auto____16286;

{
var G__16294 = cljs.core.first.call(null,G__16280__16287);
var G__16295 = G__16280__16287;
node__16282 = G__16294;
G__16280__16283 = G__16295;
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
var G__16296__16297 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16296__16297))
{var node__16300 = cljs.core.first.call(null,G__16296__16297);
var G__16296__16301 = G__16296__16297;

while(true){
goog.dom.classes.remove.call(null,node__16300,class$);
var temp__3698__auto____16302 = cljs.core.next.call(null,G__16296__16301);

if(cljs.core.truth_(temp__3698__auto____16302))
{var G__16296__16303 = temp__3698__auto____16302;

{
var G__16311 = cljs.core.first.call(null,G__16296__16303);
var G__16312 = G__16296__16303;
node__16300 = G__16311;
G__16296__16301 = G__16312;
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
var text__16317 = (function (content){
return text.call(null,content,true);
});
var text__16318 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16317.call(this,content);
case  2 :
return text__16318.call(this,content,normalize);
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
var G__16322__16324 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16322__16324))
{var node__16327 = cljs.core.first.call(null,G__16322__16324);
var G__16322__16328 = G__16322__16324;

while(true){
goog.dom.setTextContent.call(null,node__16327,value);
var temp__3698__auto____16329 = cljs.core.next.call(null,G__16322__16328);

if(cljs.core.truth_(temp__3698__auto____16329))
{var G__16322__16331 = temp__3698__auto____16329;

{
var G__16335 = cljs.core.first.call(null,G__16322__16331);
var G__16336 = G__16322__16331;
node__16327 = G__16335;
G__16322__16328 = G__16336;
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
var G__16340__16343 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16340__16343))
{var node__16344 = cljs.core.first.call(null,G__16340__16343);
var G__16340__16345 = G__16340__16343;

while(true){
goog.dom.forms.setValue.call(null,node__16344,value);
var temp__3698__auto____16346 = cljs.core.next.call(null,G__16340__16345);

if(cljs.core.truth_(temp__3698__auto____16346))
{var G__16340__16347 = temp__3698__auto____16346;

{
var G__16348 = cljs.core.first.call(null,G__16340__16347);
var G__16349 = G__16340__16347;
node__16344 = G__16348;
G__16340__16345 = G__16349;
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
var G__16363__16365 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16363__16365))
{var node__16366 = cljs.core.first.call(null,G__16363__16365);
var G__16363__16367 = G__16363__16365;

while(true){
node__16366.innerHTML = value;
var temp__3698__auto____16371 = cljs.core.next.call(null,G__16363__16367);

if(cljs.core.truth_(temp__3698__auto____16371))
{var G__16363__16373 = temp__3698__auto____16371;

{
var G__16377 = cljs.core.first.call(null,G__16363__16373);
var G__16378 = G__16363__16373;
node__16366 = G__16377;
G__16363__16367 = G__16378;
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
var parents__16385 = domina.nodes.call(null,parent_content);
var children__16388 = domina.nodes.call(null,child_content);
var first_child__16398 = (function (){var frag__16390 = document.createDocumentFragment();

var G__16391__16392 = cljs.core.seq.call(null,children__16388);

if(cljs.core.truth_(G__16391__16392))
{var child__16394 = cljs.core.first.call(null,G__16391__16392);
var G__16391__16395 = G__16391__16392;

while(true){
frag__16390.appendChild(child__16394);
var temp__3698__auto____16396 = cljs.core.next.call(null,G__16391__16395);

if(cljs.core.truth_(temp__3698__auto____16396))
{var G__16391__16397 = temp__3698__auto____16396;

{
var G__16402 = cljs.core.first.call(null,G__16391__16397);
var G__16403 = G__16391__16397;
child__16394 = G__16402;
G__16391__16395 = G__16403;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16390;
})();
var other_children__16399 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16385) - 1),(function (){
return first_child__16398.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16385)))
{f.call(null,cljs.core.first.call(null,parents__16385),first_child__16398);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16358_SHARP_,p2__16361_SHARP_){
return f.call(null,p1__16358_SHARP_,p2__16361_SHARP_);
}),cljs.core.rest.call(null,parents__16385),other_children__16399));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16413 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16414 = (function (nl,n){
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
return lazy_nodelist__16413.call(this,nl);
case  2 :
return lazy_nodelist__16414.call(this,nl,n);
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
var inner_wrapper__16426 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16427 = cljs.core.seq.call(null,inner_wrapper__16426.childNodes);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16427),1)))
{return inner_wrapper__16426.removeChild(inner_wrapper__16426.firstChild);
} else
{return children__16427;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16439__16440 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16442 = cljs.core.nth.call(null,vec__16439__16440,0,null);
var table_level__16445 = cljs.core.nth.call(null,vec__16439__16440,1,null);
var ___16446 = cljs.core.nthnext.call(null,vec__16439__16440,2);
var wrapper__16447 = domina.create_wrapper.call(null,table_level__16445);

domina.set_wrapper_html_BANG_.call(null,wrapper__16447,content);
return domina.extract_wrapper_dom.call(null,wrapper__16447,table_level__16445);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16451 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16453 = x__445__auto____16451;

if(cljs.core.truth_(and__3546__auto____16453))
{var and__3546__auto____16454 = x__445__auto____16451.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16454))
{return cljs.core.not.call(null,x__445__auto____16451.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16454;
}
} else
{return and__3546__auto____16453;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16451);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16460 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16461 = x__445__auto____16460;

if(cljs.core.truth_(and__3546__auto____16461))
{var and__3546__auto____16462 = x__445__auto____16460.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16462))
{return cljs.core.not.call(null,x__445__auto____16460.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16462;
}
} else
{return and__3546__auto____16461;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16460);
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
var G__16478 = null;
var G__16478__16479 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16478__16480 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16478 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16478__16479.call(this,nodelist,n);
case  3 :
return G__16478__16480.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16478;
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
var G__16490 = null;
var G__16490__16491 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16490__16492 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16490 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16490__16491.call(this,nodelist,n);
case  3 :
return G__16490__16492.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16490;
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
var G__16498 = null;
var G__16498__16499 = (function (coll,n){
return coll.item(n);
});
var G__16498__16500 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16498 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16498__16499.call(this,coll,n);
case  3 :
return G__16498__16500.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16498;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
