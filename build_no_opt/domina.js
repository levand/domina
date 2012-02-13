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
if(cljs.core.truth_((function (){var and__3546__auto____15971 = content;

if(cljs.core.truth_(and__3546__auto____15971))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15971;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15975 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15975))
{return or__3548__auto____15975;
} else
{var or__3548__auto____15977 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15977))
{return or__3548__auto____15977;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15981 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15981))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15981;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15984 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15984))
{return or__3548__auto____15984;
} else
{var or__3548__auto____15985 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15985))
{return or__3548__auto____15985;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16035 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16035))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16035;
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
if(cljs.core.truth_((void 0 === domina.t16039)))
{
/**
* @constructor
*/
domina.t16039 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16039.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16039");
});
domina.t16039.prototype.domina$DomContent$ = true;
domina.t16039.prototype.domina$DomContent$nodes = (function (_){
var this__16044 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16044.class_name)));
});
domina.t16039.prototype.domina$DomContent$single_node = (function (_){
var this__16046 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16046.class_name)));
});
domina.t16039.prototype.cljs$core$IMeta$ = true;
domina.t16039.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16048 = this;
return this__16048.__meta;
});
domina.t16039.prototype.cljs$core$IWithMeta$ = true;
domina.t16039.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16050 = this;
return (new domina.t16039(this__16050.class_name,this__16050.by_class,__meta));
});
domina.t16039;
} else
{}
return (new domina.t16039(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__16054_SHARP_){
return p1__16054_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16057_SHARP_,p2__16058_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16057_SHARP_,p2__16058_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16067_SHARP_,p2__16066_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16066_SHARP_,p1__16067_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16071_SHARP_,p2__16070_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16070_SHARP_,p1__16071_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16077_SHARP_,p2__16076_SHARP_){
return goog.dom.replaceNode.call(null,p2__16076_SHARP_,p1__16077_SHARP_);
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
var s__16085 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16085))))
{return s__16085;
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
var G__16090__16091 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16090__16091))
{var n__16092 = cljs.core.first.call(null,G__16090__16091);
var G__16090__16093 = G__16090__16091;

while(true){
goog.style.setStyle.call(null,n__16092,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16094 = cljs.core.next.call(null,G__16090__16093);

if(cljs.core.truth_(temp__3698__auto____16094))
{var G__16090__16095 = temp__3698__auto____16094;

{
var G__16098 = cljs.core.first.call(null,G__16090__16095);
var G__16099 = G__16090__16095;
n__16092 = G__16098;
G__16090__16093 = G__16099;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16101){
var content = cljs.core.first(arglist__16101);
var name = cljs.core.first(cljs.core.next(arglist__16101));
var value = cljs.core.rest(cljs.core.next(arglist__16101));
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
var G__16104__16105 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16104__16105))
{var n__16108 = cljs.core.first.call(null,G__16104__16105);
var G__16104__16110 = G__16104__16105;

while(true){
n__16108.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16112 = cljs.core.next.call(null,G__16104__16110);

if(cljs.core.truth_(temp__3698__auto____16112))
{var G__16104__16113 = temp__3698__auto____16112;

{
var G__16119 = cljs.core.first.call(null,G__16104__16113);
var G__16120 = G__16104__16113;
n__16108 = G__16119;
G__16104__16110 = G__16120;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16122){
var content = cljs.core.first(arglist__16122);
var name = cljs.core.first(cljs.core.next(arglist__16122));
var value = cljs.core.rest(cljs.core.next(arglist__16122));
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
var vec__16128__16129 = pair.split(/\s*:\s*/);
var k__16130 = cljs.core.nth.call(null,vec__16128__16129,0,null);
var v__16131 = cljs.core.nth.call(null,vec__16128__16129,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16132 = k__16130;

if(cljs.core.truth_(and__3546__auto____16132))
{return v__16131;
} else
{return and__3546__auto____16132;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16130.toLowerCase()),v__16131);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16134 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16134)))
{return domina.parse_style_attributes.call(null,style__16134);
} else
{if(cljs.core.truth_(style__16134.cssText))
{return domina.parse_style_attributes.call(null,style__16134.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16141 = domina.single_node.call(null,content);
var attrs__16142 = node__16141.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16133_SHARP_){
var attr__16143 = attrs__16142.item(p1__16133_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16143.nodeName.toLowerCase())],[attr__16143.nodeValue]);
}),cljs.core.range.call(null,attrs__16142.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16146__16148 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16146__16148))
{var G__16150__16152 = cljs.core.first.call(null,G__16146__16148);
var vec__16151__16153 = G__16150__16152;
var name__16154 = cljs.core.nth.call(null,vec__16151__16153,0,null);
var value__16155 = cljs.core.nth.call(null,vec__16151__16153,1,null);
var G__16146__16156 = G__16146__16148;

var G__16150__16157 = G__16150__16152;
var G__16146__16158 = G__16146__16156;

while(true){
var vec__16160__16161 = G__16150__16157;
var name__16162 = cljs.core.nth.call(null,vec__16160__16161,0,null);
var value__16164 = cljs.core.nth.call(null,vec__16160__16161,1,null);
var G__16146__16165 = G__16146__16158;

domina.set_style_BANG_.call(null,content,name__16162,value__16164);
var temp__3698__auto____16170 = cljs.core.next.call(null,G__16146__16165);

if(cljs.core.truth_(temp__3698__auto____16170))
{var G__16146__16171 = temp__3698__auto____16170;

{
var G__16177 = cljs.core.first.call(null,G__16146__16171);
var G__16179 = G__16146__16171;
G__16150__16157 = G__16177;
G__16146__16158 = G__16179;
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
var G__16182__16183 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16182__16183))
{var G__16185__16189 = cljs.core.first.call(null,G__16182__16183);
var vec__16187__16190 = G__16185__16189;
var name__16192 = cljs.core.nth.call(null,vec__16187__16190,0,null);
var value__16193 = cljs.core.nth.call(null,vec__16187__16190,1,null);
var G__16182__16195 = G__16182__16183;

var G__16185__16196 = G__16185__16189;
var G__16182__16197 = G__16182__16195;

while(true){
var vec__16198__16200 = G__16185__16196;
var name__16201 = cljs.core.nth.call(null,vec__16198__16200,0,null);
var value__16202 = cljs.core.nth.call(null,vec__16198__16200,1,null);
var G__16182__16203 = G__16182__16197;

domina.set_attr_BANG_.call(null,content,name__16201,value__16202);
var temp__3698__auto____16204 = cljs.core.next.call(null,G__16182__16203);

if(cljs.core.truth_(temp__3698__auto____16204))
{var G__16182__16207 = temp__3698__auto____16204;

{
var G__16211 = cljs.core.first.call(null,G__16182__16207);
var G__16212 = G__16182__16207;
G__16185__16196 = G__16211;
G__16182__16197 = G__16212;
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
var G__16221__16223 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16221__16223))
{var node__16224 = cljs.core.first.call(null,G__16221__16223);
var G__16221__16226 = G__16221__16223;

while(true){
goog.dom.classes.add.call(null,node__16224,class$);
var temp__3698__auto____16228 = cljs.core.next.call(null,G__16221__16226);

if(cljs.core.truth_(temp__3698__auto____16228))
{var G__16221__16230 = temp__3698__auto____16228;

{
var G__16231 = cljs.core.first.call(null,G__16221__16230);
var G__16232 = G__16221__16230;
node__16224 = G__16231;
G__16221__16226 = G__16232;
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
var G__16233__16235 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16233__16235))
{var node__16237 = cljs.core.first.call(null,G__16233__16235);
var G__16233__16238 = G__16233__16235;

while(true){
goog.dom.classes.remove.call(null,node__16237,class$);
var temp__3698__auto____16242 = cljs.core.next.call(null,G__16233__16238);

if(cljs.core.truth_(temp__3698__auto____16242))
{var G__16233__16245 = temp__3698__auto____16242;

{
var G__16258 = cljs.core.first.call(null,G__16233__16245);
var G__16259 = G__16233__16245;
node__16237 = G__16258;
G__16233__16238 = G__16259;
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
var text__16266 = (function (content){
return text.call(null,content,true);
});
var text__16267 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16266.call(this,content);
case  2 :
return text__16267.call(this,content,normalize);
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
var G__16275__16278 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16275__16278))
{var node__16281 = cljs.core.first.call(null,G__16275__16278);
var G__16275__16282 = G__16275__16278;

while(true){
goog.dom.setTextContent.call(null,node__16281,value);
var temp__3698__auto____16286 = cljs.core.next.call(null,G__16275__16282);

if(cljs.core.truth_(temp__3698__auto____16286))
{var G__16275__16292 = temp__3698__auto____16286;

{
var G__16303 = cljs.core.first.call(null,G__16275__16292);
var G__16304 = G__16275__16292;
node__16281 = G__16303;
G__16275__16282 = G__16304;
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
var G__16308__16309 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16308__16309))
{var node__16310 = cljs.core.first.call(null,G__16308__16309);
var G__16308__16311 = G__16308__16309;

while(true){
goog.dom.forms.setValue.call(null,node__16310,value);
var temp__3698__auto____16312 = cljs.core.next.call(null,G__16308__16311);

if(cljs.core.truth_(temp__3698__auto____16312))
{var G__16308__16314 = temp__3698__auto____16312;

{
var G__16322 = cljs.core.first.call(null,G__16308__16314);
var G__16323 = G__16308__16314;
node__16310 = G__16322;
G__16308__16311 = G__16323;
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
var G__16336__16339 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16336__16339))
{var node__16341 = cljs.core.first.call(null,G__16336__16339);
var G__16336__16344 = G__16336__16339;

while(true){
node__16341.innerHTML = value;
var temp__3698__auto____16346 = cljs.core.next.call(null,G__16336__16344);

if(cljs.core.truth_(temp__3698__auto____16346))
{var G__16336__16348 = temp__3698__auto____16346;

{
var G__16353 = cljs.core.first.call(null,G__16336__16348);
var G__16356 = G__16336__16348;
node__16341 = G__16353;
G__16336__16344 = G__16356;
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
var parents__16360 = domina.nodes.call(null,parent_content);
var children__16361 = domina.nodes.call(null,child_content);
var first_child__16370 = (function (){var frag__16363 = document.createDocumentFragment();

var G__16364__16365 = cljs.core.seq.call(null,children__16361);

if(cljs.core.truth_(G__16364__16365))
{var child__16366 = cljs.core.first.call(null,G__16364__16365);
var G__16364__16367 = G__16364__16365;

while(true){
frag__16363.appendChild(child__16366);
var temp__3698__auto____16368 = cljs.core.next.call(null,G__16364__16367);

if(cljs.core.truth_(temp__3698__auto____16368))
{var G__16364__16369 = temp__3698__auto____16368;

{
var G__16391 = cljs.core.first.call(null,G__16364__16369);
var G__16392 = G__16364__16369;
child__16366 = G__16391;
G__16364__16367 = G__16392;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16363;
})();
var other_children__16377 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16360) - 1),(function (){
return first_child__16370.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16360)))
{f.call(null,cljs.core.first.call(null,parents__16360),first_child__16370);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16333_SHARP_,p2__16334_SHARP_){
return f.call(null,p1__16333_SHARP_,p2__16334_SHARP_);
}),cljs.core.rest.call(null,parents__16360),other_children__16377));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16400 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16401 = (function (nl,n){
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
return lazy_nl_via_item__16400.call(this,nl);
case  2 :
return lazy_nl_via_item__16401.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16410 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16411 = (function (nl,n){
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
return lazy_nl_via_array_ref__16410.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16411.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6749__auto____16421 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16422 = x__6749__auto____16421;

if(cljs.core.truth_(and__3546__auto____16422))
{var and__3546__auto____16423 = x__6749__auto____16421.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16423))
{var and__3546__auto____16426 = x__6749__auto____16421.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16426))
{return cljs.core.not.call(null,x__6749__auto____16421.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16426;
}
} else
{return and__3546__auto____16423;
}
} else
{return and__3546__auto____16422;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16421);
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
var inner_wrapper__16467 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16468 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16467));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16468),1)))
{return inner_wrapper__16467.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16467));
} else
{return children__16468;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16488__16489 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16490 = cljs.core.nth.call(null,vec__16488__16489,0,null);
var table_level__16491 = cljs.core.nth.call(null,vec__16488__16489,1,null);
var ___16493 = cljs.core.nthnext.call(null,vec__16488__16489,2);
var wrapper__16494 = domina.create_wrapper.call(null,table_level__16491);

domina.set_wrapper_html_BANG_.call(null,wrapper__16494,content);
return domina.extract_wrapper_dom.call(null,wrapper__16494,table_level__16491);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16497 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16498 = x__6749__auto____16497;

if(cljs.core.truth_(and__3546__auto____16498))
{var and__3546__auto____16499 = x__6749__auto____16497.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16499))
{var and__3546__auto____16500 = x__6749__auto____16497.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16500))
{return cljs.core.not.call(null,x__6749__auto____16497.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16500;
}
} else
{return and__3546__auto____16499;
}
} else
{return and__3546__auto____16498;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16497);
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
if(cljs.core.truth_((function (){var x__6749__auto____16502 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16504 = x__6749__auto____16502;

if(cljs.core.truth_(and__3546__auto____16504))
{var and__3546__auto____16508 = x__6749__auto____16502.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16508))
{var and__3546__auto____16509 = x__6749__auto____16502.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16509))
{return cljs.core.not.call(null,x__6749__auto____16502.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16509;
}
} else
{return and__3546__auto____16508;
}
} else
{return and__3546__auto____16504;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16502);
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
var G__16524 = null;
var G__16524__16525 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16524__16526 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16524 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16524__16525.call(this,nodelist,n);
case  3 :
return G__16524__16526.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16524;
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
var G__16534 = null;
var G__16534__16535 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16534__16536 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16534 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16534__16535.call(this,nodelist,n);
case  3 :
return G__16534__16536.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16534;
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
var G__16550 = null;
var G__16550__16551 = (function (coll,n){
return coll.item(n);
});
var G__16550__16552 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16550 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16550__16551.call(this,coll,n);
case  3 :
return G__16550__16552.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16550;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
