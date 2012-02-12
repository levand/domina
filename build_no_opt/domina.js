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
if(cljs.core.truth_((function (){var and__3546__auto____15841 = content;

if(cljs.core.truth_(and__3546__auto____15841))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15841;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15842 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15842))
{return or__3548__auto____15842;
} else
{var or__3548__auto____15843 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15843))
{return or__3548__auto____15843;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15850 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15850))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15850;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15853 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15853))
{return or__3548__auto____15853;
} else
{var or__3548__auto____15854 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15854))
{return or__3548__auto____15854;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15861 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15861))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15861;
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
if(cljs.core.truth_((void 0 === domina.t15865)))
{
/**
* @constructor
*/
domina.t15865 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15865.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15865");
});
domina.t15865.prototype.domina$DomContent$ = true;
domina.t15865.prototype.domina$DomContent$nodes = (function (_){
var this__15871 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15871.class_name)));
});
domina.t15865.prototype.domina$DomContent$single_node = (function (_){
var this__15872 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15872.class_name)));
});
domina.t15865.prototype.cljs$core$IMeta$ = true;
domina.t15865.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15873 = this;
return this__15873.__meta;
});
domina.t15865.prototype.cljs$core$IWithMeta$ = true;
domina.t15865.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15921 = this;
return (new domina.t15865(this__15921.class_name,this__15921.by_class,__meta));
});
domina.t15865;
} else
{}
return (new domina.t15865(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15922_SHARP_){
return p1__15922_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15924_SHARP_,p2__15925_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15924_SHARP_,p2__15925_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15929_SHARP_,p2__15927_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15927_SHARP_,p1__15929_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15933_SHARP_,p2__15932_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15932_SHARP_,p1__15933_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15937_SHARP_,p2__15936_SHARP_){
return goog.dom.replaceNode.call(null,p2__15936_SHARP_,p1__15937_SHARP_);
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
var s__15949 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15949))))
{return s__15949;
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
var G__15955__15957 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15955__15957))
{var n__15959 = cljs.core.first.call(null,G__15955__15957);
var G__15955__15960 = G__15955__15957;

while(true){
goog.style.setStyle.call(null,n__15959,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15961 = cljs.core.next.call(null,G__15955__15960);

if(cljs.core.truth_(temp__3698__auto____15961))
{var G__15955__15962 = temp__3698__auto____15961;

{
var G__15963 = cljs.core.first.call(null,G__15955__15962);
var G__15964 = G__15955__15962;
n__15959 = G__15963;
G__15955__15960 = G__15964;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15966){
var content = cljs.core.first(arglist__15966);
var name = cljs.core.first(cljs.core.next(arglist__15966));
var value = cljs.core.rest(cljs.core.next(arglist__15966));
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
var G__15967__15970 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15967__15970))
{var n__15971 = cljs.core.first.call(null,G__15967__15970);
var G__15967__15973 = G__15967__15970;

while(true){
n__15971.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15975 = cljs.core.next.call(null,G__15967__15973);

if(cljs.core.truth_(temp__3698__auto____15975))
{var G__15967__15976 = temp__3698__auto____15975;

{
var G__15977 = cljs.core.first.call(null,G__15967__15976);
var G__15978 = G__15967__15976;
n__15971 = G__15977;
G__15967__15973 = G__15978;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15980){
var content = cljs.core.first(arglist__15980);
var name = cljs.core.first(cljs.core.next(arglist__15980));
var value = cljs.core.rest(cljs.core.next(arglist__15980));
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
var vec__15987__15989 = pair.split(/\s*:\s*/);
var k__15990 = cljs.core.nth.call(null,vec__15987__15989,0,null);
var v__15991 = cljs.core.nth.call(null,vec__15987__15989,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15992 = k__15990;

if(cljs.core.truth_(and__3546__auto____15992))
{return v__15991;
} else
{return and__3546__auto____15992;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15990.toLowerCase()),v__15991);
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
var node__15997 = domina.single_node.call(null,content);
var attrs__15998 = node__15997.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15994_SHARP_){
var attr__16000 = attrs__15998.item(p1__15994_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16000.nodeName.toLowerCase())],[attr__16000.nodeValue]);
}),cljs.core.range.call(null,attrs__15998.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16006__16007 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16006__16007))
{var G__16010__16015 = cljs.core.first.call(null,G__16006__16007);
var vec__16013__16017 = G__16010__16015;
var name__16019 = cljs.core.nth.call(null,vec__16013__16017,0,null);
var value__16020 = cljs.core.nth.call(null,vec__16013__16017,1,null);
var G__16006__16022 = G__16006__16007;

var G__16010__16023 = G__16010__16015;
var G__16006__16024 = G__16006__16022;

while(true){
var vec__16025__16027 = G__16010__16023;
var name__16028 = cljs.core.nth.call(null,vec__16025__16027,0,null);
var value__16029 = cljs.core.nth.call(null,vec__16025__16027,1,null);
var G__16006__16156 = G__16006__16024;

domina.set_style_BANG_.call(null,content,name__16028,value__16029);
var temp__3698__auto____16157 = cljs.core.next.call(null,G__16006__16156);

if(cljs.core.truth_(temp__3698__auto____16157))
{var G__16006__16158 = temp__3698__auto____16157;

{
var G__16191 = cljs.core.first.call(null,G__16006__16158);
var G__16192 = G__16006__16158;
G__16010__16023 = G__16191;
G__16006__16024 = G__16192;
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
var G__16196__16199 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16196__16199))
{var G__16201__16203 = cljs.core.first.call(null,G__16196__16199);
var vec__16202__16204 = G__16201__16203;
var name__16205 = cljs.core.nth.call(null,vec__16202__16204,0,null);
var value__16206 = cljs.core.nth.call(null,vec__16202__16204,1,null);
var G__16196__16207 = G__16196__16199;

var G__16201__16208 = G__16201__16203;
var G__16196__16209 = G__16196__16207;

while(true){
var vec__16258__16259 = G__16201__16208;
var name__16260 = cljs.core.nth.call(null,vec__16258__16259,0,null);
var value__16263 = cljs.core.nth.call(null,vec__16258__16259,1,null);
var G__16196__16264 = G__16196__16209;

domina.set_attr_BANG_.call(null,content,name__16260,value__16263);
var temp__3698__auto____16265 = cljs.core.next.call(null,G__16196__16264);

if(cljs.core.truth_(temp__3698__auto____16265))
{var G__16196__16266 = temp__3698__auto____16265;

{
var G__16272 = cljs.core.first.call(null,G__16196__16266);
var G__16273 = G__16196__16266;
G__16201__16208 = G__16272;
G__16196__16209 = G__16273;
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
var G__16284__16288 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16284__16288))
{var node__16291 = cljs.core.first.call(null,G__16284__16288);
var G__16284__16292 = G__16284__16288;

while(true){
goog.dom.classes.add.call(null,node__16291,class$);
var temp__3698__auto____16293 = cljs.core.next.call(null,G__16284__16292);

if(cljs.core.truth_(temp__3698__auto____16293))
{var G__16284__16294 = temp__3698__auto____16293;

{
var G__16300 = cljs.core.first.call(null,G__16284__16294);
var G__16302 = G__16284__16294;
node__16291 = G__16300;
G__16284__16292 = G__16302;
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
var G__16305__16306 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16305__16306))
{var node__16308 = cljs.core.first.call(null,G__16305__16306);
var G__16305__16309 = G__16305__16306;

while(true){
goog.dom.classes.remove.call(null,node__16308,class$);
var temp__3698__auto____16313 = cljs.core.next.call(null,G__16305__16309);

if(cljs.core.truth_(temp__3698__auto____16313))
{var G__16305__16314 = temp__3698__auto____16313;

{
var G__16319 = cljs.core.first.call(null,G__16305__16314);
var G__16320 = G__16305__16314;
node__16308 = G__16319;
G__16305__16309 = G__16320;
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
var text__16335 = (function (content){
return text.call(null,content,true);
});
var text__16336 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16335.call(this,content);
case  2 :
return text__16336.call(this,content,normalize);
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
var G__16344__16345 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16344__16345))
{var node__16346 = cljs.core.first.call(null,G__16344__16345);
var G__16344__16347 = G__16344__16345;

while(true){
goog.dom.setTextContent.call(null,node__16346,value);
var temp__3698__auto____16348 = cljs.core.next.call(null,G__16344__16347);

if(cljs.core.truth_(temp__3698__auto____16348))
{var G__16344__16349 = temp__3698__auto____16348;

{
var G__16354 = cljs.core.first.call(null,G__16344__16349);
var G__16355 = G__16344__16349;
node__16346 = G__16354;
G__16344__16347 = G__16355;
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
var G__16361__16362 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16361__16362))
{var node__16365 = cljs.core.first.call(null,G__16361__16362);
var G__16361__16366 = G__16361__16362;

while(true){
goog.dom.forms.setValue.call(null,node__16365,value);
var temp__3698__auto____16367 = cljs.core.next.call(null,G__16361__16366);

if(cljs.core.truth_(temp__3698__auto____16367))
{var G__16361__16368 = temp__3698__auto____16367;

{
var G__16371 = cljs.core.first.call(null,G__16361__16368);
var G__16372 = G__16361__16368;
node__16365 = G__16371;
G__16361__16366 = G__16372;
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
var G__16381__16382 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16381__16382))
{var node__16385 = cljs.core.first.call(null,G__16381__16382);
var G__16381__16386 = G__16381__16382;

while(true){
node__16385.innerHTML = value;
var temp__3698__auto____16389 = cljs.core.next.call(null,G__16381__16386);

if(cljs.core.truth_(temp__3698__auto____16389))
{var G__16381__16390 = temp__3698__auto____16389;

{
var G__16395 = cljs.core.first.call(null,G__16381__16390);
var G__16396 = G__16381__16390;
node__16385 = G__16395;
G__16381__16386 = G__16396;
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
var parents__16399 = domina.nodes.call(null,parent_content);
var children__16400 = domina.nodes.call(null,child_content);
var first_child__16417 = (function (){var frag__16401 = document.createDocumentFragment();

var G__16403__16406 = cljs.core.seq.call(null,children__16400);

if(cljs.core.truth_(G__16403__16406))
{var child__16409 = cljs.core.first.call(null,G__16403__16406);
var G__16403__16410 = G__16403__16406;

while(true){
frag__16401.appendChild(child__16409);
var temp__3698__auto____16413 = cljs.core.next.call(null,G__16403__16410);

if(cljs.core.truth_(temp__3698__auto____16413))
{var G__16403__16414 = temp__3698__auto____16413;

{
var G__16463 = cljs.core.first.call(null,G__16403__16414);
var G__16464 = G__16403__16414;
child__16409 = G__16463;
G__16403__16410 = G__16464;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16401;
})();
var other_children__16419 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16399) - 1),(function (){
return first_child__16417.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16399)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16400)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16399)))
{f.call(null,cljs.core.first.call(null,parents__16399),first_child__16417);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16379_SHARP_,p2__16380_SHARP_){
return f.call(null,p1__16379_SHARP_,p2__16380_SHARP_);
}),cljs.core.rest.call(null,parents__16399),other_children__16419));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16488 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16489 = (function (nl,n){
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
return lazy_nodelist__16488.call(this,nl);
case  2 :
return lazy_nodelist__16489.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6781__auto____16493 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16495 = x__6781__auto____16493;

if(cljs.core.truth_(and__3546__auto____16495))
{var and__3546__auto____16497 = x__6781__auto____16493.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16497))
{var and__3546__auto____16499 = x__6781__auto____16493.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16499))
{return cljs.core.not.call(null,x__6781__auto____16493.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16499;
}
} else
{return and__3546__auto____16497;
}
} else
{return and__3546__auto____16495;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6781__auto____16493);
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
var inner_wrapper__16508 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16509 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16508));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16509),1)))
{return inner_wrapper__16508.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16508));
} else
{return children__16509;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16517__16519 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16521 = cljs.core.nth.call(null,vec__16517__16519,0,null);
var table_level__16522 = cljs.core.nth.call(null,vec__16517__16519,1,null);
var ___16523 = cljs.core.nthnext.call(null,vec__16517__16519,2);
var wrapper__16524 = domina.create_wrapper.call(null,table_level__16522);

domina.set_wrapper_html_BANG_.call(null,wrapper__16524,content);
return domina.extract_wrapper_dom.call(null,wrapper__16524,table_level__16522);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6781__auto____16525 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16526 = x__6781__auto____16525;

if(cljs.core.truth_(and__3546__auto____16526))
{var and__3546__auto____16527 = x__6781__auto____16525.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16527))
{var and__3546__auto____16532 = x__6781__auto____16525.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16532))
{return cljs.core.not.call(null,x__6781__auto____16525.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16532;
}
} else
{return and__3546__auto____16527;
}
} else
{return and__3546__auto____16526;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6781__auto____16525);
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
if(cljs.core.truth_((function (){var x__6781__auto____16536 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16537 = x__6781__auto____16536;

if(cljs.core.truth_(and__3546__auto____16537))
{var and__3546__auto____16538 = x__6781__auto____16536.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16538))
{var and__3546__auto____16541 = x__6781__auto____16536.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16541))
{return cljs.core.not.call(null,x__6781__auto____16536.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16541;
}
} else
{return and__3546__auto____16538;
}
} else
{return and__3546__auto____16537;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6781__auto____16536);
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
var G__16570 = null;
var G__16570__16571 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16570__16572 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16570 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16570__16571.call(this,nodelist,n);
case  3 :
return G__16570__16572.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16570;
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
var G__16575 = null;
var G__16575__16576 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16575__16577 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16575 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16575__16576.call(this,nodelist,n);
case  3 :
return G__16575__16577.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16575;
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
var G__16579 = null;
var G__16579__16580 = (function (coll,n){
return coll.item(n);
});
var G__16579__16581 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16579 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16579__16580.call(this,coll,n);
case  3 :
return G__16579__16581.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16579;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
