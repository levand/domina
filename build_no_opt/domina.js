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
if(cljs.core.truth_((function (){var and__3546__auto____15957 = content;

if(cljs.core.truth_(and__3546__auto____15957))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15957;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15980 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15980))
{return or__3548__auto____15980;
} else
{var or__3548__auto____15981 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15981))
{return or__3548__auto____15981;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15984 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15984))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15984;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15988 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15988))
{return or__3548__auto____15988;
} else
{var or__3548__auto____15990 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15990))
{return or__3548__auto____15990;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____16002 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____16002))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____16002;
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
if(cljs.core.truth_((void 0 === domina.t16008)))
{
/**
* @constructor
*/
domina.t16008 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t16008.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t16008");
});
domina.t16008.prototype.domina$DomContent$ = true;
domina.t16008.prototype.domina$DomContent$nodes = (function (_){
var this__16047 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__16047.class_name)));
});
domina.t16008.prototype.domina$DomContent$single_node = (function (_){
var this__16048 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__16048.class_name)));
});
domina.t16008.prototype.cljs$core$IMeta$ = true;
domina.t16008.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16049 = this;
return this__16049.__meta;
});
domina.t16008.prototype.cljs$core$IWithMeta$ = true;
domina.t16008.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16050 = this;
return (new domina.t16008(this__16050.class_name,this__16050.by_class,__meta));
});
domina.t16008;
} else
{}
return (new domina.t16008(class_name,by_class,null));
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
domina.apply_with_cloning.call(null,(function (p1__16067_SHARP_,p2__16070_SHARP_){
return goog.dom.insertChildAt.call(null,p1__16067_SHARP_,p2__16070_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__16083_SHARP_,p2__16082_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__16082_SHARP_,p1__16083_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16091_SHARP_,p2__16088_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16088_SHARP_,p1__16091_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16105_SHARP_,p2__16103_SHARP_){
return goog.dom.replaceNode.call(null,p2__16103_SHARP_,p1__16105_SHARP_);
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
var s__16128 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16128))))
{return s__16128;
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
var G__16132__16133 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16132__16133))
{var n__16134 = cljs.core.first.call(null,G__16132__16133);
var G__16132__16136 = G__16132__16133;

while(true){
goog.style.setStyle.call(null,n__16134,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16139 = cljs.core.next.call(null,G__16132__16136);

if(cljs.core.truth_(temp__3698__auto____16139))
{var G__16132__16140 = temp__3698__auto____16139;

{
var G__16141 = cljs.core.first.call(null,G__16132__16140);
var G__16142 = G__16132__16140;
n__16134 = G__16141;
G__16132__16136 = G__16142;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16144){
var content = cljs.core.first(arglist__16144);
var name = cljs.core.first(cljs.core.next(arglist__16144));
var value = cljs.core.rest(cljs.core.next(arglist__16144));
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
var G__16149__16151 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16149__16151))
{var n__16152 = cljs.core.first.call(null,G__16149__16151);
var G__16149__16153 = G__16149__16151;

while(true){
n__16152.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16154 = cljs.core.next.call(null,G__16149__16153);

if(cljs.core.truth_(temp__3698__auto____16154))
{var G__16149__16157 = temp__3698__auto____16154;

{
var G__16162 = cljs.core.first.call(null,G__16149__16157);
var G__16163 = G__16149__16157;
n__16152 = G__16162;
G__16149__16153 = G__16163;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16165){
var content = cljs.core.first(arglist__16165);
var name = cljs.core.first(cljs.core.next(arglist__16165));
var value = cljs.core.rest(cljs.core.next(arglist__16165));
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
var vec__16167__16168 = pair.split(/\s*:\s*/);
var k__16169 = cljs.core.nth.call(null,vec__16167__16168,0,null);
var v__16170 = cljs.core.nth.call(null,vec__16167__16168,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16171 = k__16169;

if(cljs.core.truth_(and__3546__auto____16171))
{return v__16170;
} else
{return and__3546__auto____16171;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16169.toLowerCase()),v__16170);
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
var node__16179 = domina.single_node.call(null,content);
var attrs__16180 = node__16179.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16174_SHARP_){
var attr__16182 = attrs__16180.item(p1__16174_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16182.nodeName.toLowerCase())],[attr__16182.nodeValue]);
}),cljs.core.range.call(null,attrs__16180.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16192__16193 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16192__16193))
{var G__16196__16199 = cljs.core.first.call(null,G__16192__16193);
var vec__16198__16200 = G__16196__16199;
var name__16203 = cljs.core.nth.call(null,vec__16198__16200,0,null);
var value__16204 = cljs.core.nth.call(null,vec__16198__16200,1,null);
var G__16192__16205 = G__16192__16193;

var G__16196__16206 = G__16196__16199;
var G__16192__16207 = G__16192__16205;

while(true){
var vec__16209__16210 = G__16196__16206;
var name__16212 = cljs.core.nth.call(null,vec__16209__16210,0,null);
var value__16213 = cljs.core.nth.call(null,vec__16209__16210,1,null);
var G__16192__16214 = G__16192__16207;

domina.set_style_BANG_.call(null,content,name__16212,value__16213);
var temp__3698__auto____16215 = cljs.core.next.call(null,G__16192__16214);

if(cljs.core.truth_(temp__3698__auto____16215))
{var G__16192__16216 = temp__3698__auto____16215;

{
var G__16219 = cljs.core.first.call(null,G__16192__16216);
var G__16220 = G__16192__16216;
G__16196__16206 = G__16219;
G__16192__16207 = G__16220;
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
var G__16221__16224 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16221__16224))
{var G__16226__16230 = cljs.core.first.call(null,G__16221__16224);
var vec__16228__16231 = G__16226__16230;
var name__16232 = cljs.core.nth.call(null,vec__16228__16231,0,null);
var value__16234 = cljs.core.nth.call(null,vec__16228__16231,1,null);
var G__16221__16236 = G__16221__16224;

var G__16226__16259 = G__16226__16230;
var G__16221__16260 = G__16221__16236;

while(true){
var vec__16261__16262 = G__16226__16259;
var name__16263 = cljs.core.nth.call(null,vec__16261__16262,0,null);
var value__16264 = cljs.core.nth.call(null,vec__16261__16262,1,null);
var G__16221__16265 = G__16221__16260;

domina.set_attr_BANG_.call(null,content,name__16263,value__16264);
var temp__3698__auto____16267 = cljs.core.next.call(null,G__16221__16265);

if(cljs.core.truth_(temp__3698__auto____16267))
{var G__16221__16272 = temp__3698__auto____16267;

{
var G__16274 = cljs.core.first.call(null,G__16221__16272);
var G__16275 = G__16221__16272;
G__16226__16259 = G__16274;
G__16221__16260 = G__16275;
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
var G__16287__16289 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16287__16289))
{var node__16291 = cljs.core.first.call(null,G__16287__16289);
var G__16287__16292 = G__16287__16289;

while(true){
goog.dom.classes.add.call(null,node__16291,class$);
var temp__3698__auto____16294 = cljs.core.next.call(null,G__16287__16292);

if(cljs.core.truth_(temp__3698__auto____16294))
{var G__16287__16295 = temp__3698__auto____16294;

{
var G__16299 = cljs.core.first.call(null,G__16287__16295);
var G__16300 = G__16287__16295;
node__16291 = G__16299;
G__16287__16292 = G__16300;
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
var G__16301__16302 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16301__16302))
{var node__16303 = cljs.core.first.call(null,G__16301__16302);
var G__16301__16304 = G__16301__16302;

while(true){
goog.dom.classes.remove.call(null,node__16303,class$);
var temp__3698__auto____16305 = cljs.core.next.call(null,G__16301__16304);

if(cljs.core.truth_(temp__3698__auto____16305))
{var G__16301__16306 = temp__3698__auto____16305;

{
var G__16307 = cljs.core.first.call(null,G__16301__16306);
var G__16308 = G__16301__16306;
node__16303 = G__16307;
G__16301__16304 = G__16308;
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
var text__16314 = (function (content){
return text.call(null,content,true);
});
var text__16315 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16314.call(this,content);
case  2 :
return text__16315.call(this,content,normalize);
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
var G__16319__16320 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16319__16320))
{var node__16324 = cljs.core.first.call(null,G__16319__16320);
var G__16319__16325 = G__16319__16320;

while(true){
goog.dom.setTextContent.call(null,node__16324,value);
var temp__3698__auto____16326 = cljs.core.next.call(null,G__16319__16325);

if(cljs.core.truth_(temp__3698__auto____16326))
{var G__16319__16327 = temp__3698__auto____16326;

{
var G__16331 = cljs.core.first.call(null,G__16319__16327);
var G__16332 = G__16319__16327;
node__16324 = G__16331;
G__16319__16325 = G__16332;
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
var G__16344__16345 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16344__16345))
{var node__16346 = cljs.core.first.call(null,G__16344__16345);
var G__16344__16347 = G__16344__16345;

while(true){
goog.dom.forms.setValue.call(null,node__16346,value);
var temp__3698__auto____16351 = cljs.core.next.call(null,G__16344__16347);

if(cljs.core.truth_(temp__3698__auto____16351))
{var G__16344__16352 = temp__3698__auto____16351;

{
var G__16355 = cljs.core.first.call(null,G__16344__16352);
var G__16356 = G__16344__16352;
node__16346 = G__16355;
G__16344__16347 = G__16356;
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
var G__16365__16366 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16365__16366))
{var node__16368 = cljs.core.first.call(null,G__16365__16366);
var G__16365__16370 = G__16365__16366;

while(true){
node__16368.innerHTML = value;
var temp__3698__auto____16371 = cljs.core.next.call(null,G__16365__16370);

if(cljs.core.truth_(temp__3698__auto____16371))
{var G__16365__16372 = temp__3698__auto____16371;

{
var G__16375 = cljs.core.first.call(null,G__16365__16372);
var G__16376 = G__16365__16372;
node__16368 = G__16375;
G__16365__16370 = G__16376;
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
var parents__16380 = domina.nodes.call(null,parent_content);
var children__16381 = domina.nodes.call(null,child_content);
var first_child__16402 = (function (){var frag__16382 = document.createDocumentFragment();

var G__16384__16386 = cljs.core.seq.call(null,children__16381);

if(cljs.core.truth_(G__16384__16386))
{var child__16391 = cljs.core.first.call(null,G__16384__16386);
var G__16384__16392 = G__16384__16386;

while(true){
frag__16382.appendChild(child__16391);
var temp__3698__auto____16397 = cljs.core.next.call(null,G__16384__16392);

if(cljs.core.truth_(temp__3698__auto____16397))
{var G__16384__16399 = temp__3698__auto____16397;

{
var G__16415 = cljs.core.first.call(null,G__16384__16399);
var G__16417 = G__16384__16399;
child__16391 = G__16415;
G__16384__16392 = G__16417;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16382;
})();
var other_children__16405 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16380) - 1),(function (){
return first_child__16402.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16380)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16381)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16380)))
{f.call(null,cljs.core.first.call(null,parents__16380),first_child__16402);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16361_SHARP_,p2__16363_SHARP_){
return f.call(null,p1__16361_SHARP_,p2__16363_SHARP_);
}),cljs.core.rest.call(null,parents__16380),other_children__16405));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16418 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16419 = (function (nl,n){
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
return lazy_nl_via_item__16418.call(this,nl);
case  2 :
return lazy_nl_via_item__16419.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16423 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16424 = (function (nl,n){
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
return lazy_nl_via_array_ref__16423.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16424.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16442 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16443 = x__6743__auto____16442;

if(cljs.core.truth_(and__3546__auto____16443))
{var and__3546__auto____16445 = x__6743__auto____16442.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16445))
{var and__3546__auto____16446 = x__6743__auto____16442.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16446))
{return cljs.core.not.call(null,x__6743__auto____16442.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16446;
}
} else
{return and__3546__auto____16445;
}
} else
{return and__3546__auto____16443;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16442);
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
var inner_wrapper__16457 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16459 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16457));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16459),1)))
{return inner_wrapper__16457.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16457));
} else
{return children__16459;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16475__16476 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16477 = cljs.core.nth.call(null,vec__16475__16476,0,null);
var table_level__16478 = cljs.core.nth.call(null,vec__16475__16476,1,null);
var ___16479 = cljs.core.nthnext.call(null,vec__16475__16476,2);
var wrapper__16480 = domina.create_wrapper.call(null,table_level__16478);

domina.set_wrapper_html_BANG_.call(null,wrapper__16480,content);
return domina.extract_wrapper_dom.call(null,wrapper__16480,table_level__16478);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16481 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16482 = x__6743__auto____16481;

if(cljs.core.truth_(and__3546__auto____16482))
{var and__3546__auto____16483 = x__6743__auto____16481.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16483))
{var and__3546__auto____16484 = x__6743__auto____16481.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16484))
{return cljs.core.not.call(null,x__6743__auto____16481.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16484;
}
} else
{return and__3546__auto____16483;
}
} else
{return and__3546__auto____16482;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16481);
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
if(cljs.core.truth_((function (){var x__6743__auto____16486 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16487 = x__6743__auto____16486;

if(cljs.core.truth_(and__3546__auto____16487))
{var and__3546__auto____16488 = x__6743__auto____16486.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16488))
{var and__3546__auto____16489 = x__6743__auto____16486.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16489))
{return cljs.core.not.call(null,x__6743__auto____16486.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16489;
}
} else
{return and__3546__auto____16488;
}
} else
{return and__3546__auto____16487;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16486);
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
var G__16495 = null;
var G__16495__16496 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16495__16497 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16495 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16495__16496.call(this,nodelist,n);
case  3 :
return G__16495__16497.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16495;
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
