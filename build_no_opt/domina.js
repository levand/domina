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
if(cljs.core.truth_((function (){var and__3546__auto____15977 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15977))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15977;
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
if(cljs.core.truth_((function (){var and__3546__auto____15994 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15994))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15994;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15998 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15998))
{return or__3548__auto____15998;
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
var this__16015 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16015.class_name));
});
domina.t16007.prototype.domina$DomContent$single_node = (function (_){
var this__16018 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16018.class_name));
});
domina.t16007.prototype.cljs$core$IMeta$ = true;
domina.t16007.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16019 = this;
return this__16019.__meta;
});
domina.t16007.prototype.cljs$core$IWithMeta$ = true;
domina.t16007.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16020 = this;
return (new domina.t16007(this__16020.class_name,this__16020.by_class,__meta));
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
return cljs.core.map.call(null,(function (p1__16024_SHARP_){
return p1__16024_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16025_SHARP_,p2__16026_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16025_SHARP_,p2__16026_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16029_SHARP_,p2__16028_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16028_SHARP_,p1__16029_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16035_SHARP_,p2__16034_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16034_SHARP_,p1__16035_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16039_SHARP_,p2__16038_SHARP_){
return goog.dom.replaceNode.call(null,p2__16038_SHARP_,p1__16039_SHARP_);
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
var s__16054 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16054))))
{return s__16054;
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
var G__16063__16064 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16063__16064))
{var n__16067 = cljs.core.first.call(null,G__16063__16064);
var G__16063__16068 = G__16063__16064;

while(true){
goog.style.setStyle.call(null,n__16067,cljs.core.name.call(null,name),value);
var temp__3698__auto____16069 = cljs.core.next.call(null,G__16063__16068);

if(cljs.core.truth_(temp__3698__auto____16069))
{var G__16063__16070 = temp__3698__auto____16069;

{
var G__16081 = cljs.core.first.call(null,G__16063__16070);
var G__16082 = G__16063__16070;
n__16067 = G__16081;
G__16063__16068 = G__16082;
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
var G__16094__16096 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16094__16096))
{var n__16098 = cljs.core.first.call(null,G__16094__16096);
var G__16094__16099 = G__16094__16096;

while(true){
n__16098.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16100 = cljs.core.next.call(null,G__16094__16099);

if(cljs.core.truth_(temp__3698__auto____16100))
{var G__16094__16101 = temp__3698__auto____16100;

{
var G__16105 = cljs.core.first.call(null,G__16094__16101);
var G__16106 = G__16094__16101;
n__16098 = G__16105;
G__16094__16099 = G__16106;
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
var vec__16109__16110 = pair.split(/\s*:\s*/);
var k__16112 = cljs.core.nth.call(null,vec__16109__16110,0,null);
var v__16115 = cljs.core.nth.call(null,vec__16109__16110,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16117 = k__16112;

if(cljs.core.truth_(and__3546__auto____16117))
{return v__16115;
} else
{return and__3546__auto____16117;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16112.toLowerCase()),v__16115);
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
var node__16143 = domina.single_node.call(null,content);
var attrs__16144 = node__16143.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16142_SHARP_){
var attr__16145 = attrs__16144.item(p1__16142_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16145.nodeName.toLowerCase())],[attr__16145.nodeValue]);
}),cljs.core.range.call(null,attrs__16144.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16151__16153 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16151__16153))
{var G__16157__16160 = cljs.core.first.call(null,G__16151__16153);
var vec__16158__16161 = G__16157__16160;
var name__16162 = cljs.core.nth.call(null,vec__16158__16161,0,null);
var value__16164 = cljs.core.nth.call(null,vec__16158__16161,1,null);
var G__16151__16165 = G__16151__16153;

var G__16157__16167 = G__16157__16160;
var G__16151__16168 = G__16151__16165;

while(true){
var vec__16169__16170 = G__16157__16167;
var name__16171 = cljs.core.nth.call(null,vec__16169__16170,0,null);
var value__16172 = cljs.core.nth.call(null,vec__16169__16170,1,null);
var G__16151__16173 = G__16151__16168;

domina.set_style_BANG_.call(null,content,name__16171,value__16172);
var temp__3698__auto____16174 = cljs.core.next.call(null,G__16151__16173);

if(cljs.core.truth_(temp__3698__auto____16174))
{var G__16151__16175 = temp__3698__auto____16174;

{
var G__16181 = cljs.core.first.call(null,G__16151__16175);
var G__16182 = G__16151__16175;
G__16157__16167 = G__16181;
G__16151__16168 = G__16182;
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
var G__16186__16187 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16186__16187))
{var G__16189__16191 = cljs.core.first.call(null,G__16186__16187);
var vec__16190__16192 = G__16189__16191;
var name__16193 = cljs.core.nth.call(null,vec__16190__16192,0,null);
var value__16195 = cljs.core.nth.call(null,vec__16190__16192,1,null);
var G__16186__16196 = G__16186__16187;

var G__16189__16197 = G__16189__16191;
var G__16186__16198 = G__16186__16196;

while(true){
var vec__16200__16201 = G__16189__16197;
var name__16204 = cljs.core.nth.call(null,vec__16200__16201,0,null);
var value__16205 = cljs.core.nth.call(null,vec__16200__16201,1,null);
var G__16186__16207 = G__16186__16198;

domina.set_attr_BANG_.call(null,content,name__16204,value__16205);
var temp__3698__auto____16211 = cljs.core.next.call(null,G__16186__16207);

if(cljs.core.truth_(temp__3698__auto____16211))
{var G__16186__16235 = temp__3698__auto____16211;

{
var G__16255 = cljs.core.first.call(null,G__16186__16235);
var G__16256 = G__16186__16235;
G__16189__16197 = G__16255;
G__16186__16198 = G__16256;
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
var G__16258__16260 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16258__16260))
{var node__16261 = cljs.core.first.call(null,G__16258__16260);
var G__16258__16262 = G__16258__16260;

while(true){
goog.dom.classes.add.call(null,node__16261,class$);
var temp__3698__auto____16266 = cljs.core.next.call(null,G__16258__16262);

if(cljs.core.truth_(temp__3698__auto____16266))
{var G__16258__16267 = temp__3698__auto____16266;

{
var G__16271 = cljs.core.first.call(null,G__16258__16267);
var G__16272 = G__16258__16267;
node__16261 = G__16271;
G__16258__16262 = G__16272;
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
var G__16276__16278 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16276__16278))
{var node__16280 = cljs.core.first.call(null,G__16276__16278);
var G__16276__16281 = G__16276__16278;

while(true){
goog.dom.classes.remove.call(null,node__16280,class$);
var temp__3698__auto____16282 = cljs.core.next.call(null,G__16276__16281);

if(cljs.core.truth_(temp__3698__auto____16282))
{var G__16276__16284 = temp__3698__auto____16282;

{
var G__16289 = cljs.core.first.call(null,G__16276__16284);
var G__16290 = G__16276__16284;
node__16280 = G__16289;
G__16276__16281 = G__16290;
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
var text__16307 = (function (content){
return text.call(null,content,true);
});
var text__16308 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16307.call(this,content);
case  2 :
return text__16308.call(this,content,normalize);
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
var G__16317__16319 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16317__16319))
{var node__16321 = cljs.core.first.call(null,G__16317__16319);
var G__16317__16322 = G__16317__16319;

while(true){
goog.dom.setTextContent.call(null,node__16321,value);
var temp__3698__auto____16327 = cljs.core.next.call(null,G__16317__16322);

if(cljs.core.truth_(temp__3698__auto____16327))
{var G__16317__16329 = temp__3698__auto____16327;

{
var G__16335 = cljs.core.first.call(null,G__16317__16329);
var G__16336 = G__16317__16329;
node__16321 = G__16335;
G__16317__16322 = G__16336;
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
var G__16353__16355 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16353__16355))
{var node__16356 = cljs.core.first.call(null,G__16353__16355);
var G__16353__16357 = G__16353__16355;

while(true){
goog.dom.forms.setValue.call(null,node__16356,value);
var temp__3698__auto____16358 = cljs.core.next.call(null,G__16353__16357);

if(cljs.core.truth_(temp__3698__auto____16358))
{var G__16353__16362 = temp__3698__auto____16358;

{
var G__16363 = cljs.core.first.call(null,G__16353__16362);
var G__16364 = G__16353__16362;
node__16356 = G__16363;
G__16353__16357 = G__16364;
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
var G__16373__16374 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16373__16374))
{var node__16377 = cljs.core.first.call(null,G__16373__16374);
var G__16373__16378 = G__16373__16374;

while(true){
node__16377.innerHTML = value;
var temp__3698__auto____16381 = cljs.core.next.call(null,G__16373__16378);

if(cljs.core.truth_(temp__3698__auto____16381))
{var G__16373__16382 = temp__3698__auto____16381;

{
var G__16384 = cljs.core.first.call(null,G__16373__16382);
var G__16385 = G__16373__16382;
node__16377 = G__16384;
G__16373__16378 = G__16385;
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
var parents__16391 = domina.nodes.call(null,parent_content);
var children__16392 = domina.nodes.call(null,child_content);
var first_child__16413 = (function (){var frag__16393 = document.createDocumentFragment();

var G__16397__16398 = cljs.core.seq.call(null,children__16392);

if(cljs.core.truth_(G__16397__16398))
{var child__16399 = cljs.core.first.call(null,G__16397__16398);
var G__16397__16400 = G__16397__16398;

while(true){
frag__16393.appendChild(child__16399);
var temp__3698__auto____16403 = cljs.core.next.call(null,G__16397__16400);

if(cljs.core.truth_(temp__3698__auto____16403))
{var G__16397__16404 = temp__3698__auto____16403;

{
var G__16445 = cljs.core.first.call(null,G__16397__16404);
var G__16446 = G__16397__16404;
child__16399 = G__16445;
G__16397__16400 = G__16446;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16393;
})();
var other_children__16442 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16391) - 1),(function (){
return first_child__16413.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16391)))
{f.call(null,cljs.core.first.call(null,parents__16391),first_child__16413);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16371_SHARP_,p2__16372_SHARP_){
return f.call(null,p1__16371_SHARP_,p2__16372_SHARP_);
}),cljs.core.rest.call(null,parents__16391),other_children__16442));
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
return wrapper.removeChild(goog.dom.getFirstElementChild.call(null,wrapper));
} else
{return wrapper.innerHTML = content;
}
});
domina.extract_wrapper_dom = (function extract_wrapper_dom(wrapper,table_level){
var inner_wrapper__16465 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16466 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16465));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16466),1)))
{return inner_wrapper__16465.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16465));
} else
{return children__16466;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16467__16468 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16470 = cljs.core.nth.call(null,vec__16467__16468,0,null);
var table_level__16474 = cljs.core.nth.call(null,vec__16467__16468,1,null);
var ___16475 = cljs.core.nthnext.call(null,vec__16467__16468,2);
var wrapper__16476 = domina.create_wrapper.call(null,table_level__16474);

domina.set_wrapper_html_BANG_.call(null,wrapper__16476,content);
return domina.extract_wrapper_dom.call(null,wrapper__16476,table_level__16474);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16477 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16478 = x__445__auto____16477;

if(cljs.core.truth_(and__3546__auto____16478))
{var and__3546__auto____16479 = x__445__auto____16477.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16479))
{return cljs.core.not.call(null,x__445__auto____16477.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16479;
}
} else
{return and__3546__auto____16478;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16477);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16484 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16485 = x__445__auto____16484;

if(cljs.core.truth_(and__3546__auto____16485))
{var and__3546__auto____16486 = x__445__auto____16484.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16486))
{return cljs.core.not.call(null,x__445__auto____16484.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16486;
}
} else
{return and__3546__auto____16485;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16484);
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
var G__16492 = null;
var G__16492__16493 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16492__16494 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16492 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16492__16493.call(this,nodelist,n);
case  3 :
return G__16492__16494.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16492;
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
var G__16500 = null;
var G__16500__16501 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16500__16502 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16500 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16500__16501.call(this,nodelist,n);
case  3 :
return G__16500__16502.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16500;
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
var G__16508 = null;
var G__16508__16509 = (function (coll,n){
return coll.item(n);
});
var G__16508__16510 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16508 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16508__16509.call(this,coll,n);
case  3 :
return G__16508__16510.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16508;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
