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
if(cljs.core.truth_((function (){var and__3546__auto____15922 = content;

if(cljs.core.truth_(and__3546__auto____15922))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15922;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15924 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15924))
{return or__3548__auto____15924;
} else
{var or__3548__auto____15925 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15925))
{return or__3548__auto____15925;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15926 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15926))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15926;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15927 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15927))
{return or__3548__auto____15927;
} else
{var or__3548__auto____15928 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15928))
{return or__3548__auto____15928;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15929 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15929))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15929;
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
if(cljs.core.truth_((void 0 === domina.t15933)))
{
/**
* @constructor
*/
domina.t15933 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15933.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15933");
});
domina.t15933.prototype.domina$DomContent$ = true;
domina.t15933.prototype.domina$DomContent$nodes = (function (_){
var this__15962 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15962.class_name)));
});
domina.t15933.prototype.domina$DomContent$single_node = (function (_){
var this__15964 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15964.class_name)));
});
domina.t15933.prototype.cljs$core$IMeta$ = true;
domina.t15933.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15967 = this;
return this__15967.__meta;
});
domina.t15933.prototype.cljs$core$IWithMeta$ = true;
domina.t15933.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15968 = this;
return (new domina.t15933(this__15968.class_name,this__15968.by_class,__meta));
});
domina.t15933;
} else
{}
return (new domina.t15933(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15985_SHARP_){
return p1__15985_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15988_SHARP_,p2__15990_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15988_SHARP_,p2__15990_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15997_SHARP_,p2__15995_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15995_SHARP_,p1__15997_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16006_SHARP_,p2__16005_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__16005_SHARP_,p1__16006_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16060_SHARP_,p2__16057_SHARP_){
return goog.dom.replaceNode.call(null,p2__16057_SHARP_,p1__16060_SHARP_);
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
var s__16074 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16074))))
{return s__16074;
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
var G__16151__16152 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16151__16152))
{var n__16153 = cljs.core.first.call(null,G__16151__16152);
var G__16151__16154 = G__16151__16152;

while(true){
goog.style.setStyle.call(null,n__16153,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16155 = cljs.core.next.call(null,G__16151__16154);

if(cljs.core.truth_(temp__3698__auto____16155))
{var G__16151__16156 = temp__3698__auto____16155;

{
var G__16160 = cljs.core.first.call(null,G__16151__16156);
var G__16161 = G__16151__16156;
n__16153 = G__16160;
G__16151__16154 = G__16161;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16162){
var content = cljs.core.first(arglist__16162);
var name = cljs.core.first(cljs.core.next(arglist__16162));
var value = cljs.core.rest(cljs.core.next(arglist__16162));
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
var G__16163__16167 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16163__16167))
{var n__16169 = cljs.core.first.call(null,G__16163__16167);
var G__16163__16170 = G__16163__16167;

while(true){
n__16169.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16177 = cljs.core.next.call(null,G__16163__16170);

if(cljs.core.truth_(temp__3698__auto____16177))
{var G__16163__16179 = temp__3698__auto____16177;

{
var G__16195 = cljs.core.first.call(null,G__16163__16179);
var G__16196 = G__16163__16179;
n__16169 = G__16195;
G__16163__16170 = G__16196;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16197){
var content = cljs.core.first(arglist__16197);
var name = cljs.core.first(cljs.core.next(arglist__16197));
var value = cljs.core.rest(cljs.core.next(arglist__16197));
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
var vec__16198__16199 = pair.split(/\s*:\s*/);
var k__16200 = cljs.core.nth.call(null,vec__16198__16199,0,null);
var v__16201 = cljs.core.nth.call(null,vec__16198__16199,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16204 = k__16200;

if(cljs.core.truth_(and__3546__auto____16204))
{return v__16201;
} else
{return and__3546__auto____16204;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16200.toLowerCase()),v__16201);
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
var node__16212 = domina.single_node.call(null,content);
var attrs__16214 = node__16212.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16206_SHARP_){
var attr__16215 = attrs__16214.item(p1__16206_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16215.nodeName.toLowerCase())],[attr__16215.nodeValue]);
}),cljs.core.range.call(null,attrs__16214.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16220__16223 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16220__16223))
{var G__16227__16230 = cljs.core.first.call(null,G__16220__16223);
var vec__16228__16231 = G__16227__16230;
var name__16233 = cljs.core.nth.call(null,vec__16228__16231,0,null);
var value__16235 = cljs.core.nth.call(null,vec__16228__16231,1,null);
var G__16220__16236 = G__16220__16223;

var G__16227__16237 = G__16227__16230;
var G__16220__16239 = G__16220__16236;

while(true){
var vec__16240__16241 = G__16227__16237;
var name__16242 = cljs.core.nth.call(null,vec__16240__16241,0,null);
var value__16245 = cljs.core.nth.call(null,vec__16240__16241,1,null);
var G__16220__16246 = G__16220__16239;

domina.set_style_BANG_.call(null,content,name__16242,value__16245);
var temp__3698__auto____16294 = cljs.core.next.call(null,G__16220__16246);

if(cljs.core.truth_(temp__3698__auto____16294))
{var G__16220__16295 = temp__3698__auto____16294;

{
var G__16354 = cljs.core.first.call(null,G__16220__16295);
var G__16355 = G__16220__16295;
G__16227__16237 = G__16354;
G__16220__16239 = G__16355;
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
var G__16358__16359 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16358__16359))
{var G__16361__16363 = cljs.core.first.call(null,G__16358__16359);
var vec__16362__16364 = G__16361__16363;
var name__16365 = cljs.core.nth.call(null,vec__16362__16364,0,null);
var value__16366 = cljs.core.nth.call(null,vec__16362__16364,1,null);
var G__16358__16367 = G__16358__16359;

var G__16361__16368 = G__16361__16363;
var G__16358__16369 = G__16358__16367;

while(true){
var vec__16370__16372 = G__16361__16368;
var name__16375 = cljs.core.nth.call(null,vec__16370__16372,0,null);
var value__16376 = cljs.core.nth.call(null,vec__16370__16372,1,null);
var G__16358__16377 = G__16358__16369;

domina.set_attr_BANG_.call(null,content,name__16375,value__16376);
var temp__3698__auto____16380 = cljs.core.next.call(null,G__16358__16377);

if(cljs.core.truth_(temp__3698__auto____16380))
{var G__16358__16382 = temp__3698__auto____16380;

{
var G__16387 = cljs.core.first.call(null,G__16358__16382);
var G__16388 = G__16358__16382;
G__16361__16368 = G__16387;
G__16358__16369 = G__16388;
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
var G__16402__16405 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16402__16405))
{var node__16407 = cljs.core.first.call(null,G__16402__16405);
var G__16402__16408 = G__16402__16405;

while(true){
goog.dom.classes.add.call(null,node__16407,class$);
var temp__3698__auto____16410 = cljs.core.next.call(null,G__16402__16408);

if(cljs.core.truth_(temp__3698__auto____16410))
{var G__16402__16412 = temp__3698__auto____16410;

{
var G__16417 = cljs.core.first.call(null,G__16402__16412);
var G__16418 = G__16402__16412;
node__16407 = G__16417;
G__16402__16408 = G__16418;
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
var G__16419__16420 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16419__16420))
{var node__16423 = cljs.core.first.call(null,G__16419__16420);
var G__16419__16424 = G__16419__16420;

while(true){
goog.dom.classes.remove.call(null,node__16423,class$);
var temp__3698__auto____16425 = cljs.core.next.call(null,G__16419__16424);

if(cljs.core.truth_(temp__3698__auto____16425))
{var G__16419__16426 = temp__3698__auto____16425;

{
var G__16429 = cljs.core.first.call(null,G__16419__16426);
var G__16430 = G__16419__16426;
node__16423 = G__16429;
G__16419__16424 = G__16430;
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
var text__16438 = (function (content){
return text.call(null,content,true);
});
var text__16439 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16438.call(this,content);
case  2 :
return text__16439.call(this,content,normalize);
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
var G__16446__16447 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16446__16447))
{var node__16448 = cljs.core.first.call(null,G__16446__16447);
var G__16446__16449 = G__16446__16447;

while(true){
goog.dom.setTextContent.call(null,node__16448,value);
var temp__3698__auto____16450 = cljs.core.next.call(null,G__16446__16449);

if(cljs.core.truth_(temp__3698__auto____16450))
{var G__16446__16451 = temp__3698__auto____16450;

{
var G__16452 = cljs.core.first.call(null,G__16446__16451);
var G__16453 = G__16446__16451;
node__16448 = G__16452;
G__16446__16449 = G__16453;
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
var G__16454__16455 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16454__16455))
{var node__16456 = cljs.core.first.call(null,G__16454__16455);
var G__16454__16484 = G__16454__16455;

while(true){
goog.dom.forms.setValue.call(null,node__16456,value);
var temp__3698__auto____16485 = cljs.core.next.call(null,G__16454__16484);

if(cljs.core.truth_(temp__3698__auto____16485))
{var G__16454__16486 = temp__3698__auto____16485;

{
var G__16492 = cljs.core.first.call(null,G__16454__16486);
var G__16493 = G__16454__16486;
node__16456 = G__16492;
G__16454__16484 = G__16493;
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
var G__16501__16504 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16501__16504))
{var node__16506 = cljs.core.first.call(null,G__16501__16504);
var G__16501__16507 = G__16501__16504;

while(true){
node__16506.innerHTML = value;
var temp__3698__auto____16509 = cljs.core.next.call(null,G__16501__16507);

if(cljs.core.truth_(temp__3698__auto____16509))
{var G__16501__16510 = temp__3698__auto____16509;

{
var G__16515 = cljs.core.first.call(null,G__16501__16510);
var G__16516 = G__16501__16510;
node__16506 = G__16515;
G__16501__16507 = G__16516;
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
var parents__16517 = domina.nodes.call(null,parent_content);
var children__16518 = domina.nodes.call(null,child_content);
var first_child__16526 = (function (){var frag__16519 = document.createDocumentFragment();

var G__16520__16521 = cljs.core.seq.call(null,children__16518);

if(cljs.core.truth_(G__16520__16521))
{var child__16522 = cljs.core.first.call(null,G__16520__16521);
var G__16520__16523 = G__16520__16521;

while(true){
frag__16519.appendChild(child__16522);
var temp__3698__auto____16524 = cljs.core.next.call(null,G__16520__16523);

if(cljs.core.truth_(temp__3698__auto____16524))
{var G__16520__16525 = temp__3698__auto____16524;

{
var G__16532 = cljs.core.first.call(null,G__16520__16525);
var G__16533 = G__16520__16525;
child__16522 = G__16532;
G__16520__16523 = G__16533;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16519;
})();
var other_children__16527 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16517) - 1),(function (){
return first_child__16526.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16517)))
{f.call(null,cljs.core.first.call(null,parents__16517),first_child__16526);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16499_SHARP_,p2__16500_SHARP_){
return f.call(null,p1__16499_SHARP_,p2__16500_SHARP_);
}),cljs.core.rest.call(null,parents__16517),other_children__16527));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
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
/**
* Early versions of IE have things which are like arrays in that they
* respond to .length and .item, but are not arrays. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(cljs.core.truth_((function (){var x__6763__auto____16541 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16542 = x__6763__auto____16541;

if(cljs.core.truth_(and__3546__auto____16542))
{var and__3546__auto____16543 = x__6763__auto____16541.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16543))
{var and__3546__auto____16544 = x__6763__auto____16541.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16544))
{return cljs.core.not.call(null,x__6763__auto____16541.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16544;
}
} else
{return and__3546__auto____16543;
}
} else
{return and__3546__auto____16542;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16541);
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
var inner_wrapper__16552 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16556 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16552));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16556),1)))
{return inner_wrapper__16552.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16552));
} else
{return children__16556;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16587__16588 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16589 = cljs.core.nth.call(null,vec__16587__16588,0,null);
var table_level__16590 = cljs.core.nth.call(null,vec__16587__16588,1,null);
var ___16591 = cljs.core.nthnext.call(null,vec__16587__16588,2);
var wrapper__16592 = domina.create_wrapper.call(null,table_level__16590);

domina.set_wrapper_html_BANG_.call(null,wrapper__16592,content);
return domina.extract_wrapper_dom.call(null,wrapper__16592,table_level__16590);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6763__auto____16593 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16594 = x__6763__auto____16593;

if(cljs.core.truth_(and__3546__auto____16594))
{var and__3546__auto____16595 = x__6763__auto____16593.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16595))
{var and__3546__auto____16596 = x__6763__auto____16593.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16596))
{return cljs.core.not.call(null,x__6763__auto____16593.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16596;
}
} else
{return and__3546__auto____16595;
}
} else
{return and__3546__auto____16594;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16593);
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
if(cljs.core.truth_((function (){var x__6763__auto____16597 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16598 = x__6763__auto____16597;

if(cljs.core.truth_(and__3546__auto____16598))
{var and__3546__auto____16599 = x__6763__auto____16597.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16599))
{var and__3546__auto____16600 = x__6763__auto____16597.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16600))
{return cljs.core.not.call(null,x__6763__auto____16597.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16600;
}
} else
{return and__3546__auto____16599;
}
} else
{return and__3546__auto____16598;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6763__auto____16597);
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
var G__16601 = null;
var G__16601__16602 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16601__16603 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16601 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16601__16602.call(this,nodelist,n);
case  3 :
return G__16601__16603.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16601;
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
var G__16608 = null;
var G__16608__16609 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16608__16610 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16608 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16608__16609.call(this,nodelist,n);
case  3 :
return G__16608__16610.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16608;
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
var G__16615 = null;
var G__16615__16616 = (function (coll,n){
return coll.item(n);
});
var G__16615__16618 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16615 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16615__16616.call(this,coll,n);
case  3 :
return G__16615__16618.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16615;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
