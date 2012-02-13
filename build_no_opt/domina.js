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
if(cljs.core.truth_((function (){var and__3546__auto____15828 = content;

if(cljs.core.truth_(and__3546__auto____15828))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15828;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15830 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15830))
{return or__3548__auto____15830;
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
if(cljs.core.truth_((function (){var and__3546__auto____15836 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15836))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15836;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15839 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15839))
{return or__3548__auto____15839;
} else
{var or__3548__auto____15842 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15842))
{return or__3548__auto____15842;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15847 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15847))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15847;
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
if(cljs.core.truth_((void 0 === domina.t15872)))
{
/**
* @constructor
*/
domina.t15872 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15872.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15872");
});
domina.t15872.prototype.domina$DomContent$ = true;
domina.t15872.prototype.domina$DomContent$nodes = (function (_){
var this__15876 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15876.class_name)));
});
domina.t15872.prototype.domina$DomContent$single_node = (function (_){
var this__15886 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15886.class_name)));
});
domina.t15872.prototype.cljs$core$IMeta$ = true;
domina.t15872.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15940 = this;
return this__15940.__meta;
});
domina.t15872.prototype.cljs$core$IWithMeta$ = true;
domina.t15872.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15946 = this;
return (new domina.t15872(this__15946.class_name,this__15946.by_class,__meta));
});
domina.t15872;
} else
{}
return (new domina.t15872(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15963_SHARP_){
return p1__15963_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__16019_SHARP_,p2__16021_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16019_SHARP_,p2__16021_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16039_SHARP_,p2__16038_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16038_SHARP_,p1__16039_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16044_SHARP_,p2__16043_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16043_SHARP_,p1__16044_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16064_SHARP_,p2__16063_SHARP_){
return goog.dom.replaceNode.call(null,p2__16063_SHARP_,p1__16064_SHARP_);
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
var s__16093 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16093))))
{return s__16093;
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
var G__16113__16116 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16113__16116))
{var n__16117 = cljs.core.first.call(null,G__16113__16116);
var G__16113__16118 = G__16113__16116;

while(true){
goog.style.setStyle.call(null,n__16117,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16122 = cljs.core.next.call(null,G__16113__16118);

if(cljs.core.truth_(temp__3698__auto____16122))
{var G__16113__16124 = temp__3698__auto____16122;

{
var G__16132 = cljs.core.first.call(null,G__16113__16124);
var G__16133 = G__16113__16124;
n__16117 = G__16132;
G__16113__16118 = G__16133;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16134){
var content = cljs.core.first(arglist__16134);
var name = cljs.core.first(cljs.core.next(arglist__16134));
var value = cljs.core.rest(cljs.core.next(arglist__16134));
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
var G__16136__16137 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16136__16137))
{var n__16153 = cljs.core.first.call(null,G__16136__16137);
var G__16136__16154 = G__16136__16137;

while(true){
n__16153.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16157 = cljs.core.next.call(null,G__16136__16154);

if(cljs.core.truth_(temp__3698__auto____16157))
{var G__16136__16159 = temp__3698__auto____16157;

{
var G__16163 = cljs.core.first.call(null,G__16136__16159);
var G__16164 = G__16136__16159;
n__16153 = G__16163;
G__16136__16154 = G__16164;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16167){
var content = cljs.core.first(arglist__16167);
var name = cljs.core.first(cljs.core.next(arglist__16167));
var value = cljs.core.rest(cljs.core.next(arglist__16167));
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
var vec__16169__16170 = pair.split(/\s*:\s*/);
var k__16171 = cljs.core.nth.call(null,vec__16169__16170,0,null);
var v__16172 = cljs.core.nth.call(null,vec__16169__16170,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16200 = k__16171;

if(cljs.core.truth_(and__3546__auto____16200))
{return v__16172;
} else
{return and__3546__auto____16200;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16171.toLowerCase()),v__16172);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__16217 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__16217)))
{return domina.parse_style_attributes.call(null,style__16217);
} else
{if(cljs.core.truth_(style__16217.cssText))
{return domina.parse_style_attributes.call(null,style__16217.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__16222 = domina.single_node.call(null,content);
var attrs__16223 = node__16222.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__16210_SHARP_){
var attr__16226 = attrs__16223.item(p1__16210_SHARP_);
var value__16227 = attr__16226.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____16228 = cljs.core.not_EQ_.call(null,null,value__16227);

if(cljs.core.truth_(and__3546__auto____16228))
{return cljs.core.not_EQ_.call(null,"",value__16227);
} else
{return and__3546__auto____16228;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16226.nodeName.toLowerCase())],[attr__16226.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__16223.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16236__16237 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16236__16237))
{var G__16239__16241 = cljs.core.first.call(null,G__16236__16237);
var vec__16240__16242 = G__16239__16241;
var name__16243 = cljs.core.nth.call(null,vec__16240__16242,0,null);
var value__16244 = cljs.core.nth.call(null,vec__16240__16242,1,null);
var G__16236__16245 = G__16236__16237;

var G__16239__16246 = G__16239__16241;
var G__16236__16247 = G__16236__16245;

while(true){
var vec__16248__16249 = G__16239__16246;
var name__16250 = cljs.core.nth.call(null,vec__16248__16249,0,null);
var value__16251 = cljs.core.nth.call(null,vec__16248__16249,1,null);
var G__16236__16252 = G__16236__16247;

domina.set_style_BANG_.call(null,content,name__16250,value__16251);
var temp__3698__auto____16253 = cljs.core.next.call(null,G__16236__16252);

if(cljs.core.truth_(temp__3698__auto____16253))
{var G__16236__16254 = temp__3698__auto____16253;

{
var G__16255 = cljs.core.first.call(null,G__16236__16254);
var G__16256 = G__16236__16254;
G__16239__16246 = G__16255;
G__16236__16247 = G__16256;
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
var G__16257__16258 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16257__16258))
{var G__16260__16262 = cljs.core.first.call(null,G__16257__16258);
var vec__16261__16263 = G__16260__16262;
var name__16265 = cljs.core.nth.call(null,vec__16261__16263,0,null);
var value__16266 = cljs.core.nth.call(null,vec__16261__16263,1,null);
var G__16257__16267 = G__16257__16258;

var G__16260__16268 = G__16260__16262;
var G__16257__16269 = G__16257__16267;

while(true){
var vec__16270__16271 = G__16260__16268;
var name__16272 = cljs.core.nth.call(null,vec__16270__16271,0,null);
var value__16274 = cljs.core.nth.call(null,vec__16270__16271,1,null);
var G__16257__16275 = G__16257__16269;

domina.set_attr_BANG_.call(null,content,name__16272,value__16274);
var temp__3698__auto____16278 = cljs.core.next.call(null,G__16257__16275);

if(cljs.core.truth_(temp__3698__auto____16278))
{var G__16257__16280 = temp__3698__auto____16278;

{
var G__16284 = cljs.core.first.call(null,G__16257__16280);
var G__16285 = G__16257__16280;
G__16260__16268 = G__16284;
G__16257__16269 = G__16285;
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
var G__16292__16293 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16292__16293))
{var node__16294 = cljs.core.first.call(null,G__16292__16293);
var G__16292__16295 = G__16292__16293;

while(true){
goog.dom.classes.add.call(null,node__16294,class$);
var temp__3698__auto____16299 = cljs.core.next.call(null,G__16292__16295);

if(cljs.core.truth_(temp__3698__auto____16299))
{var G__16292__16301 = temp__3698__auto____16299;

{
var G__16306 = cljs.core.first.call(null,G__16292__16301);
var G__16307 = G__16292__16301;
node__16294 = G__16306;
G__16292__16295 = G__16307;
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
var G__16309__16311 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16309__16311))
{var node__16313 = cljs.core.first.call(null,G__16309__16311);
var G__16309__16314 = G__16309__16311;

while(true){
goog.dom.classes.remove.call(null,node__16313,class$);
var temp__3698__auto____16318 = cljs.core.next.call(null,G__16309__16314);

if(cljs.core.truth_(temp__3698__auto____16318))
{var G__16309__16320 = temp__3698__auto____16318;

{
var G__16323 = cljs.core.first.call(null,G__16309__16320);
var G__16324 = G__16309__16320;
node__16313 = G__16323;
G__16309__16314 = G__16324;
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
var text__16329 = (function (content){
return text.call(null,content,true);
});
var text__16330 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16329.call(this,content);
case  2 :
return text__16330.call(this,content,normalize);
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
var G__16332__16333 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16332__16333))
{var node__16335 = cljs.core.first.call(null,G__16332__16333);
var G__16332__16336 = G__16332__16333;

while(true){
goog.dom.setTextContent.call(null,node__16335,value);
var temp__3698__auto____16337 = cljs.core.next.call(null,G__16332__16336);

if(cljs.core.truth_(temp__3698__auto____16337))
{var G__16332__16338 = temp__3698__auto____16337;

{
var G__16345 = cljs.core.first.call(null,G__16332__16338);
var G__16346 = G__16332__16338;
node__16335 = G__16345;
G__16332__16336 = G__16346;
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
var G__16355__16356 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16355__16356))
{var node__16357 = cljs.core.first.call(null,G__16355__16356);
var G__16355__16358 = G__16355__16356;

while(true){
goog.dom.forms.setValue.call(null,node__16357,value);
var temp__3698__auto____16359 = cljs.core.next.call(null,G__16355__16358);

if(cljs.core.truth_(temp__3698__auto____16359))
{var G__16355__16360 = temp__3698__auto____16359;

{
var G__16379 = cljs.core.first.call(null,G__16355__16360);
var G__16380 = G__16355__16360;
node__16357 = G__16379;
G__16355__16358 = G__16380;
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
var G__16389__16391 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16389__16391))
{var node__16392 = cljs.core.first.call(null,G__16389__16391);
var G__16389__16393 = G__16389__16391;

while(true){
node__16392.innerHTML = value;
var temp__3698__auto____16394 = cljs.core.next.call(null,G__16389__16393);

if(cljs.core.truth_(temp__3698__auto____16394))
{var G__16389__16396 = temp__3698__auto____16394;

{
var G__16399 = cljs.core.first.call(null,G__16389__16396);
var G__16400 = G__16389__16396;
node__16392 = G__16399;
G__16389__16393 = G__16400;
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
var parents__16401 = domina.nodes.call(null,parent_content);
var children__16402 = domina.nodes.call(null,child_content);
var first_child__16414 = (function (){var frag__16403 = document.createDocumentFragment();

var G__16404__16405 = cljs.core.seq.call(null,children__16402);

if(cljs.core.truth_(G__16404__16405))
{var child__16406 = cljs.core.first.call(null,G__16404__16405);
var G__16404__16407 = G__16404__16405;

while(true){
frag__16403.appendChild(child__16406);
var temp__3698__auto____16408 = cljs.core.next.call(null,G__16404__16407);

if(cljs.core.truth_(temp__3698__auto____16408))
{var G__16404__16410 = temp__3698__auto____16408;

{
var G__16416 = cljs.core.first.call(null,G__16404__16410);
var G__16417 = G__16404__16410;
child__16406 = G__16416;
G__16404__16407 = G__16417;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16403;
})();
var other_children__16415 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16401) - 1),(function (){
return first_child__16414.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16401)))
{f.call(null,cljs.core.first.call(null,parents__16401),first_child__16414);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16381_SHARP_,p2__16382_SHARP_){
return f.call(null,p1__16381_SHARP_,p2__16382_SHARP_);
}),cljs.core.rest.call(null,parents__16401),other_children__16415));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16424 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16425 = (function (nl,n){
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
return lazy_nl_via_item__16424.call(this,nl);
case  2 :
return lazy_nl_via_item__16425.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16433 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16434 = (function (nl,n){
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
return lazy_nl_via_array_ref__16433.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16434.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6747__auto____16451 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16452 = x__6747__auto____16451;

if(cljs.core.truth_(and__3546__auto____16452))
{var and__3546__auto____16454 = x__6747__auto____16451.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16454))
{var and__3546__auto____16457 = x__6747__auto____16451.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16457))
{return cljs.core.not.call(null,x__6747__auto____16451.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16457;
}
} else
{return and__3546__auto____16454;
}
} else
{return and__3546__auto____16452;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6747__auto____16451);
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
var inner_wrapper__16471 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16472 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16471));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16472),1)))
{return inner_wrapper__16471.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16471));
} else
{return children__16472;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16473__16474 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16475 = cljs.core.nth.call(null,vec__16473__16474,0,null);
var table_level__16476 = cljs.core.nth.call(null,vec__16473__16474,1,null);
var ___16477 = cljs.core.nthnext.call(null,vec__16473__16474,2);
var wrapper__16478 = domina.create_wrapper.call(null,table_level__16476);

domina.set_wrapper_html_BANG_.call(null,wrapper__16478,content);
return domina.extract_wrapper_dom.call(null,wrapper__16478,table_level__16476);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6747__auto____16484 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16485 = x__6747__auto____16484;

if(cljs.core.truth_(and__3546__auto____16485))
{var and__3546__auto____16486 = x__6747__auto____16484.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16486))
{var and__3546__auto____16487 = x__6747__auto____16484.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16487))
{return cljs.core.not.call(null,x__6747__auto____16484.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16487;
}
} else
{return and__3546__auto____16486;
}
} else
{return and__3546__auto____16485;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6747__auto____16484);
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
if(cljs.core.truth_((function (){var x__6747__auto____16488 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16489 = x__6747__auto____16488;

if(cljs.core.truth_(and__3546__auto____16489))
{var and__3546__auto____16491 = x__6747__auto____16488.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16491))
{var and__3546__auto____16493 = x__6747__auto____16488.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16493))
{return cljs.core.not.call(null,x__6747__auto____16488.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16493;
}
} else
{return and__3546__auto____16491;
}
} else
{return and__3546__auto____16489;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6747__auto____16488);
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
var G__16543 = null;
var G__16543__16544 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16543__16545 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16543 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16543__16544.call(this,nodelist,n);
case  3 :
return G__16543__16545.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16543;
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
var G__16557 = null;
var G__16557__16558 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16557__16559 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16557 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16557__16558.call(this,nodelist,n);
case  3 :
return G__16557__16559.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16557;
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
var G__16563 = null;
var G__16563__16564 = (function (coll,n){
return coll.item(n);
});
var G__16563__16565 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16563 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16563__16564.call(this,coll,n);
case  3 :
return G__16563__16565.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16563;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
