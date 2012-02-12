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
if(cljs.core.truth_((function (){var and__3546__auto____14960 = content;

if(cljs.core.truth_(and__3546__auto____14960))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____14960;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____14961 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____14961))
{return or__3548__auto____14961;
} else
{var or__3548__auto____14966 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____14966))
{return or__3548__auto____14966;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____14967 = nodeseq;

if(cljs.core.truth_(and__3546__auto____14967))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____14967;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____14968 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____14968))
{return or__3548__auto____14968;
} else
{var or__3548__auto____14969 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____14969))
{return or__3548__auto____14969;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____14988 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____14988))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____14988;
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
if(cljs.core.truth_((void 0 === domina.t14989)))
{
/**
* @constructor
*/
domina.t14989 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t14989.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t14989");
});
domina.t14989.prototype.domina$DomContent$ = true;
domina.t14989.prototype.domina$DomContent$nodes = (function (_){
var this__14990 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__14990.class_name)));
});
domina.t14989.prototype.domina$DomContent$single_node = (function (_){
var this__14991 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__14991.class_name)));
});
domina.t14989.prototype.cljs$core$IMeta$ = true;
domina.t14989.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14993 = this;
return this__14993.__meta;
});
domina.t14989.prototype.cljs$core$IWithMeta$ = true;
domina.t14989.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14995 = this;
return (new domina.t14989(this__14995.class_name,this__14995.by_class,__meta));
});
domina.t14989;
} else
{}
return (new domina.t14989(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15001_SHARP_){
return p1__15001_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15032_SHARP_,p2__15033_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15032_SHARP_,p2__15033_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15042_SHARP_,p2__15041_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15041_SHARP_,p1__15042_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15046_SHARP_,p2__15045_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15045_SHARP_,p1__15046_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15050_SHARP_,p2__15049_SHARP_){
return goog.dom.replaceNode.call(null,p2__15049_SHARP_,p1__15050_SHARP_);
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
var s__15057 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15057))))
{return s__15057;
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
var G__15063__15064 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15063__15064))
{var n__15065 = cljs.core.first.call(null,G__15063__15064);
var G__15063__15066 = G__15063__15064;

while(true){
goog.style.setStyle.call(null,n__15065,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15067 = cljs.core.next.call(null,G__15063__15066);

if(cljs.core.truth_(temp__3698__auto____15067))
{var G__15063__15070 = temp__3698__auto____15067;

{
var G__15072 = cljs.core.first.call(null,G__15063__15070);
var G__15073 = G__15063__15070;
n__15065 = G__15072;
G__15063__15066 = G__15073;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15075){
var content = cljs.core.first(arglist__15075);
var name = cljs.core.first(cljs.core.next(arglist__15075));
var value = cljs.core.rest(cljs.core.next(arglist__15075));
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
var G__15080__15081 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15080__15081))
{var n__15082 = cljs.core.first.call(null,G__15080__15081);
var G__15080__15083 = G__15080__15081;

while(true){
n__15082.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15084 = cljs.core.next.call(null,G__15080__15083);

if(cljs.core.truth_(temp__3698__auto____15084))
{var G__15080__15088 = temp__3698__auto____15084;

{
var G__15092 = cljs.core.first.call(null,G__15080__15088);
var G__15093 = G__15080__15088;
n__15082 = G__15092;
G__15080__15083 = G__15093;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15094){
var content = cljs.core.first(arglist__15094);
var name = cljs.core.first(cljs.core.next(arglist__15094));
var value = cljs.core.rest(cljs.core.next(arglist__15094));
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
var vec__15100__15104 = pair.split(/\s*:\s*/);
var k__15105 = cljs.core.nth.call(null,vec__15100__15104,0,null);
var v__15106 = cljs.core.nth.call(null,vec__15100__15104,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15107 = k__15105;

if(cljs.core.truth_(and__3546__auto____15107))
{return v__15106;
} else
{return and__3546__auto____15107;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15105.toLowerCase()),v__15106);
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
var node__15132 = domina.single_node.call(null,content);
var attrs__15134 = node__15132.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15126_SHARP_){
var attr__15136 = attrs__15134.item(p1__15126_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15136.nodeName.toLowerCase())],[attr__15136.nodeValue]);
}),cljs.core.range.call(null,attrs__15134.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15160__15161 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15160__15161))
{var G__15164__15167 = cljs.core.first.call(null,G__15160__15161);
var vec__15166__15168 = G__15164__15167;
var name__15169 = cljs.core.nth.call(null,vec__15166__15168,0,null);
var value__15170 = cljs.core.nth.call(null,vec__15166__15168,1,null);
var G__15160__15171 = G__15160__15161;

var G__15164__15172 = G__15164__15167;
var G__15160__15173 = G__15160__15171;

while(true){
var vec__15174__15175 = G__15164__15172;
var name__15176 = cljs.core.nth.call(null,vec__15174__15175,0,null);
var value__15179 = cljs.core.nth.call(null,vec__15174__15175,1,null);
var G__15160__15180 = G__15160__15173;

domina.set_style_BANG_.call(null,content,name__15176,value__15179);
var temp__3698__auto____15184 = cljs.core.next.call(null,G__15160__15180);

if(cljs.core.truth_(temp__3698__auto____15184))
{var G__15160__15185 = temp__3698__auto____15184;

{
var G__15197 = cljs.core.first.call(null,G__15160__15185);
var G__15198 = G__15160__15185;
G__15164__15172 = G__15197;
G__15160__15173 = G__15198;
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
var G__15199__15200 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15199__15200))
{var G__15202__15204 = cljs.core.first.call(null,G__15199__15200);
var vec__15203__15205 = G__15202__15204;
var name__15206 = cljs.core.nth.call(null,vec__15203__15205,0,null);
var value__15207 = cljs.core.nth.call(null,vec__15203__15205,1,null);
var G__15199__15209 = G__15199__15200;

var G__15202__15211 = G__15202__15204;
var G__15199__15212 = G__15199__15209;

while(true){
var vec__15213__15214 = G__15202__15211;
var name__15215 = cljs.core.nth.call(null,vec__15213__15214,0,null);
var value__15216 = cljs.core.nth.call(null,vec__15213__15214,1,null);
var G__15199__15217 = G__15199__15212;

domina.set_attr_BANG_.call(null,content,name__15215,value__15216);
var temp__3698__auto____15219 = cljs.core.next.call(null,G__15199__15217);

if(cljs.core.truth_(temp__3698__auto____15219))
{var G__15199__15221 = temp__3698__auto____15219;

{
var G__15227 = cljs.core.first.call(null,G__15199__15221);
var G__15228 = G__15199__15221;
G__15202__15211 = G__15227;
G__15199__15212 = G__15228;
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
var G__15233__15236 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15233__15236))
{var node__15240 = cljs.core.first.call(null,G__15233__15236);
var G__15233__15241 = G__15233__15236;

while(true){
goog.dom.classes.add.call(null,node__15240,class$);
var temp__3698__auto____15248 = cljs.core.next.call(null,G__15233__15241);

if(cljs.core.truth_(temp__3698__auto____15248))
{var G__15233__15251 = temp__3698__auto____15248;

{
var G__15262 = cljs.core.first.call(null,G__15233__15251);
var G__15263 = G__15233__15251;
node__15240 = G__15262;
G__15233__15241 = G__15263;
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
var G__15264__15306 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15264__15306))
{var node__15311 = cljs.core.first.call(null,G__15264__15306);
var G__15264__15312 = G__15264__15306;

while(true){
goog.dom.classes.remove.call(null,node__15311,class$);
var temp__3698__auto____15317 = cljs.core.next.call(null,G__15264__15312);

if(cljs.core.truth_(temp__3698__auto____15317))
{var G__15264__15320 = temp__3698__auto____15317;

{
var G__15326 = cljs.core.first.call(null,G__15264__15320);
var G__15327 = G__15264__15320;
node__15311 = G__15326;
G__15264__15312 = G__15327;
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
var text__15342 = (function (content){
return text.call(null,content,true);
});
var text__15343 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15342.call(this,content);
case  2 :
return text__15343.call(this,content,normalize);
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
var G__15347__15348 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15347__15348))
{var node__15352 = cljs.core.first.call(null,G__15347__15348);
var G__15347__15353 = G__15347__15348;

while(true){
goog.dom.setTextContent.call(null,node__15352,value);
var temp__3698__auto____15357 = cljs.core.next.call(null,G__15347__15353);

if(cljs.core.truth_(temp__3698__auto____15357))
{var G__15347__15358 = temp__3698__auto____15357;

{
var G__15367 = cljs.core.first.call(null,G__15347__15358);
var G__15368 = G__15347__15358;
node__15352 = G__15367;
G__15347__15353 = G__15368;
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
var G__15373__15374 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15373__15374))
{var node__15375 = cljs.core.first.call(null,G__15373__15374);
var G__15373__15376 = G__15373__15374;

while(true){
goog.dom.forms.setValue.call(null,node__15375,value);
var temp__3698__auto____15377 = cljs.core.next.call(null,G__15373__15376);

if(cljs.core.truth_(temp__3698__auto____15377))
{var G__15373__15378 = temp__3698__auto____15377;

{
var G__15382 = cljs.core.first.call(null,G__15373__15378);
var G__15383 = G__15373__15378;
node__15375 = G__15382;
G__15373__15376 = G__15383;
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
var G__15390__15391 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15390__15391))
{var node__15392 = cljs.core.first.call(null,G__15390__15391);
var G__15390__15393 = G__15390__15391;

while(true){
node__15392.innerHTML = value;
var temp__3698__auto____15396 = cljs.core.next.call(null,G__15390__15393);

if(cljs.core.truth_(temp__3698__auto____15396))
{var G__15390__15398 = temp__3698__auto____15396;

{
var G__15404 = cljs.core.first.call(null,G__15390__15398);
var G__15405 = G__15390__15398;
node__15392 = G__15404;
G__15390__15393 = G__15405;
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
var parents__15408 = domina.nodes.call(null,parent_content);
var children__15409 = domina.nodes.call(null,child_content);
var first_child__15424 = (function (){var frag__15410 = document.createDocumentFragment();

var G__15411__15412 = cljs.core.seq.call(null,children__15409);

if(cljs.core.truth_(G__15411__15412))
{var child__15415 = cljs.core.first.call(null,G__15411__15412);
var G__15411__15416 = G__15411__15412;

while(true){
frag__15410.appendChild(child__15415);
var temp__3698__auto____15420 = cljs.core.next.call(null,G__15411__15416);

if(cljs.core.truth_(temp__3698__auto____15420))
{var G__15411__15421 = temp__3698__auto____15420;

{
var G__15432 = cljs.core.first.call(null,G__15411__15421);
var G__15433 = G__15411__15421;
child__15415 = G__15432;
G__15411__15416 = G__15433;
continue;
}
} else
{}
break;
}
} else
{}
return frag__15410;
})();
var other_children__15427 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__15408) - 1),(function (){
return first_child__15424.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__15408)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__15409)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__15408)))
{f.call(null,cljs.core.first.call(null,parents__15408),first_child__15424);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15388_SHARP_,p2__15389_SHARP_){
return f.call(null,p1__15388_SHARP_,p2__15389_SHARP_);
}),cljs.core.rest.call(null,parents__15408),other_children__15427));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__15595 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__15596 = (function (nl,n){
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
return lazy_nodelist__15595.call(this,nl);
case  2 :
return lazy_nodelist__15596.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
/**
* Early versions of IE have things which are like arrays in that they
* respond to .length and .item, but are not arrays. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(cljs.core.truth_((function (){var x__5926__auto____15604 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____15605 = x__5926__auto____15604;

if(cljs.core.truth_(and__3546__auto____15605))
{var and__3546__auto____15606 = x__5926__auto____15604.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15606))
{var and__3546__auto____15607 = x__5926__auto____15604.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15607))
{return cljs.core.not.call(null,x__5926__auto____15604.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15607;
}
} else
{return and__3546__auto____15606;
}
} else
{return and__3546__auto____15605;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5926__auto____15604);
}
})()))
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(list_thing.item))
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
var inner_wrapper__15634 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__15635 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__15634));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__15635),1)))
{return inner_wrapper__15634.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__15634));
} else
{return children__15635;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__15640__15641 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___15642 = cljs.core.nth.call(null,vec__15640__15641,0,null);
var table_level__15643 = cljs.core.nth.call(null,vec__15640__15641,1,null);
var ___15644 = cljs.core.nthnext.call(null,vec__15640__15641,2);
var wrapper__15645 = domina.create_wrapper.call(null,table_level__15643);

domina.set_wrapper_html_BANG_.call(null,wrapper__15645,content);
return domina.extract_wrapper_dom.call(null,wrapper__15645,table_level__15643);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5926__auto____15646 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15647 = x__5926__auto____15646;

if(cljs.core.truth_(and__3546__auto____15647))
{var and__3546__auto____15648 = x__5926__auto____15646.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15648))
{var and__3546__auto____15649 = x__5926__auto____15646.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15649))
{return cljs.core.not.call(null,x__5926__auto____15646.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15649;
}
} else
{return and__3546__auto____15648;
}
} else
{return and__3546__auto____15647;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5926__auto____15646);
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
if(cljs.core.truth_((function (){var x__5926__auto____15654 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15655 = x__5926__auto____15654;

if(cljs.core.truth_(and__3546__auto____15655))
{var and__3546__auto____15656 = x__5926__auto____15654.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15656))
{var and__3546__auto____15657 = x__5926__auto____15654.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15657))
{return cljs.core.not.call(null,x__5926__auto____15654.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15657;
}
} else
{return and__3546__auto____15656;
}
} else
{return and__3546__auto____15655;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5926__auto____15654);
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
var G__15701 = null;
var G__15701__15702 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15701__15703 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15701 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15701__15702.call(this,nodelist,n);
case  3 :
return G__15701__15703.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15701;
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
var G__15705 = null;
var G__15705__15706 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15705__15707 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15705 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15705__15706.call(this,nodelist,n);
case  3 :
return G__15705__15707.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15705;
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
var G__15709 = null;
var G__15709__15710 = (function (coll,n){
return coll.item(n);
});
var G__15709__15711 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__15709 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15709__15710.call(this,coll,n);
case  3 :
return G__15709__15711.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15709;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
