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
if(cljs.core.truth_((function (){var and__3546__auto____15791 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15791))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15791;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15793 = content;

if(cljs.core.truth_(and__3546__auto____15793))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15793;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15796 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15796))
{return or__3548__auto____15796;
} else
{var or__3548__auto____15797 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15797))
{return or__3548__auto____15797;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15798 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15798))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15798;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15801 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15801))
{return or__3548__auto____15801;
} else
{var or__3548__auto____15802 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15802))
{return or__3548__auto____15802;
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
if(cljs.core.truth_((void 0 === domina.t15810)))
{
/**
* @constructor
*/
domina.t15810 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15810.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15810");
});
domina.t15810.prototype.domina$DomContent$ = true;
domina.t15810.prototype.domina$DomContent$nodes = (function (_){
var this__15814 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15814.class_name));
});
domina.t15810.prototype.domina$DomContent$single_node = (function (_){
var this__15816 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15816.class_name));
});
domina.t15810.prototype.cljs$core$IMeta$ = true;
domina.t15810.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15818 = this;
return this__15818.__meta;
});
domina.t15810.prototype.cljs$core$IWithMeta$ = true;
domina.t15810.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15820 = this;
return (new domina.t15810(this__15820.class_name,this__15820.by_class,__meta));
});
domina.t15810;
} else
{}
return (new domina.t15810(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15828_SHARP_){
return p1__15828_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15833_SHARP_,p2__15834_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15833_SHARP_,p2__15834_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15844_SHARP_,p2__15841_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15841_SHARP_,p1__15844_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15847_SHARP_,p2__15846_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15846_SHARP_,p1__15847_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15850_SHARP_,p2__15848_SHARP_){
return goog.dom.replaceNode.call(null,p2__15848_SHARP_,p1__15850_SHARP_);
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
var s__15864 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15864))))
{return s__15864;
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
var G__15866__15867 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15866__15867))
{var n__15868 = cljs.core.first.call(null,G__15866__15867);
var G__15866__15869 = G__15866__15867;

while(true){
goog.style.setStyle.call(null,n__15868,cljs.core.name.call(null,name),value);
var temp__3698__auto____15871 = cljs.core.next.call(null,G__15866__15869);

if(cljs.core.truth_(temp__3698__auto____15871))
{var G__15866__15874 = temp__3698__auto____15871;

{
var G__15875 = cljs.core.first.call(null,G__15866__15874);
var G__15876 = G__15866__15874;
n__15868 = G__15875;
G__15866__15869 = G__15876;
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
var G__15878__15882 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15878__15882))
{var n__15885 = cljs.core.first.call(null,G__15878__15882);
var G__15878__15886 = G__15878__15882;

while(true){
n__15885.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15889 = cljs.core.next.call(null,G__15878__15886);

if(cljs.core.truth_(temp__3698__auto____15889))
{var G__15878__15890 = temp__3698__auto____15889;

{
var G__15895 = cljs.core.first.call(null,G__15878__15890);
var G__15896 = G__15878__15890;
n__15885 = G__15895;
G__15878__15886 = G__15896;
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
var vec__15900__15901 = pair.split(/\s*:\s*/);
var k__15903 = cljs.core.nth.call(null,vec__15900__15901,0,null);
var v__15904 = cljs.core.nth.call(null,vec__15900__15901,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15906 = k__15903;

if(cljs.core.truth_(and__3546__auto____15906))
{return v__15904;
} else
{return and__3546__auto____15906;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15903.toLowerCase()),v__15904);
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
var node__15925 = domina.single_node.call(null,content);
var attrs__15926 = node__15925.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15924_SHARP_){
var attr__15927 = attrs__15926.item(p1__15924_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15927.nodeName.toLowerCase())],[attr__15927.nodeValue]);
}),cljs.core.range.call(null,attrs__15926.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15942__15943 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15942__15943))
{var G__15945__15947 = cljs.core.first.call(null,G__15942__15943);
var vec__15946__15948 = G__15945__15947;
var name__15949 = cljs.core.nth.call(null,vec__15946__15948,0,null);
var value__15950 = cljs.core.nth.call(null,vec__15946__15948,1,null);
var G__15942__15951 = G__15942__15943;

var G__15945__15952 = G__15945__15947;
var G__15942__15953 = G__15942__15951;

while(true){
var vec__15954__15955 = G__15945__15952;
var name__15956 = cljs.core.nth.call(null,vec__15954__15955,0,null);
var value__15957 = cljs.core.nth.call(null,vec__15954__15955,1,null);
var G__15942__15958 = G__15942__15953;

domina.set_style_BANG_.call(null,content,name__15956,value__15957);
var temp__3698__auto____15959 = cljs.core.next.call(null,G__15942__15958);

if(cljs.core.truth_(temp__3698__auto____15959))
{var G__15942__16033 = temp__3698__auto____15959;

{
var G__16051 = cljs.core.first.call(null,G__15942__16033);
var G__16052 = G__15942__16033;
G__15945__15952 = G__16051;
G__15942__15953 = G__16052;
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
var G__16056__16057 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16056__16057))
{var G__16059__16063 = cljs.core.first.call(null,G__16056__16057);
var vec__16062__16064 = G__16059__16063;
var name__16093 = cljs.core.nth.call(null,vec__16062__16064,0,null);
var value__16096 = cljs.core.nth.call(null,vec__16062__16064,1,null);
var G__16056__16097 = G__16056__16057;

var G__16059__16100 = G__16059__16063;
var G__16056__16101 = G__16056__16097;

while(true){
var vec__16102__16103 = G__16059__16100;
var name__16106 = cljs.core.nth.call(null,vec__16102__16103,0,null);
var value__16107 = cljs.core.nth.call(null,vec__16102__16103,1,null);
var G__16056__16108 = G__16056__16101;

domina.set_attr_BANG_.call(null,content,name__16106,value__16107);
var temp__3698__auto____16113 = cljs.core.next.call(null,G__16056__16108);

if(cljs.core.truth_(temp__3698__auto____16113))
{var G__16056__16114 = temp__3698__auto____16113;

{
var G__16128 = cljs.core.first.call(null,G__16056__16114);
var G__16129 = G__16056__16114;
G__16059__16100 = G__16128;
G__16056__16101 = G__16129;
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
var G__16134__16135 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16134__16135))
{var node__16136 = cljs.core.first.call(null,G__16134__16135);
var G__16134__16137 = G__16134__16135;

while(true){
goog.dom.classes.add.call(null,node__16136,class$);
var temp__3698__auto____16139 = cljs.core.next.call(null,G__16134__16137);

if(cljs.core.truth_(temp__3698__auto____16139))
{var G__16134__16220 = temp__3698__auto____16139;

{
var G__16227 = cljs.core.first.call(null,G__16134__16220);
var G__16228 = G__16134__16220;
node__16136 = G__16227;
G__16134__16137 = G__16228;
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
var G__16235__16240 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16235__16240))
{var node__16242 = cljs.core.first.call(null,G__16235__16240);
var G__16235__16244 = G__16235__16240;

while(true){
goog.dom.classes.remove.call(null,node__16242,class$);
var temp__3698__auto____16245 = cljs.core.next.call(null,G__16235__16244);

if(cljs.core.truth_(temp__3698__auto____16245))
{var G__16235__16249 = temp__3698__auto____16245;

{
var G__16255 = cljs.core.first.call(null,G__16235__16249);
var G__16257 = G__16235__16249;
node__16242 = G__16255;
G__16235__16244 = G__16257;
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
var G__16321__16322 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16321__16322))
{var node__16325 = cljs.core.first.call(null,G__16321__16322);
var G__16321__16326 = G__16321__16322;

while(true){
goog.dom.setTextContent.call(null,node__16325,value);
var temp__3698__auto____16330 = cljs.core.next.call(null,G__16321__16326);

if(cljs.core.truth_(temp__3698__auto____16330))
{var G__16321__16331 = temp__3698__auto____16330;

{
var G__16340 = cljs.core.first.call(null,G__16321__16331);
var G__16341 = G__16321__16331;
node__16325 = G__16340;
G__16321__16326 = G__16341;
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
var G__16347__16350 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16347__16350))
{var node__16351 = cljs.core.first.call(null,G__16347__16350);
var G__16347__16352 = G__16347__16350;

while(true){
goog.dom.forms.setValue.call(null,node__16351,value);
var temp__3698__auto____16353 = cljs.core.next.call(null,G__16347__16352);

if(cljs.core.truth_(temp__3698__auto____16353))
{var G__16347__16356 = temp__3698__auto____16353;

{
var G__16357 = cljs.core.first.call(null,G__16347__16356);
var G__16358 = G__16347__16356;
node__16351 = G__16357;
G__16347__16352 = G__16358;
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
var G__16366__16367 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16366__16367))
{var node__16368 = cljs.core.first.call(null,G__16366__16367);
var G__16366__16369 = G__16366__16367;

while(true){
node__16368.innerHTML = value;
var temp__3698__auto____16370 = cljs.core.next.call(null,G__16366__16369);

if(cljs.core.truth_(temp__3698__auto____16370))
{var G__16366__16372 = temp__3698__auto____16370;

{
var G__16378 = cljs.core.first.call(null,G__16366__16372);
var G__16379 = G__16366__16372;
node__16368 = G__16378;
G__16366__16369 = G__16379;
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
var first_child__16392 = (function (){var frag__16382 = document.createDocumentFragment();

var G__16383__16385 = cljs.core.seq.call(null,children__16381);

if(cljs.core.truth_(G__16383__16385))
{var child__16387 = cljs.core.first.call(null,G__16383__16385);
var G__16383__16388 = G__16383__16385;

while(true){
frag__16382.appendChild(child__16387);
var temp__3698__auto____16390 = cljs.core.next.call(null,G__16383__16388);

if(cljs.core.truth_(temp__3698__auto____16390))
{var G__16383__16391 = temp__3698__auto____16390;

{
var G__16404 = cljs.core.first.call(null,G__16383__16391);
var G__16405 = G__16383__16391;
child__16387 = G__16404;
G__16383__16388 = G__16405;
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
var other_children__16397 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16380) - 1),(function (){
return first_child__16392.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16380)))
{f.call(null,cljs.core.first.call(null,parents__16380),first_child__16392);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16364_SHARP_,p2__16365_SHARP_){
return f.call(null,p1__16364_SHARP_,p2__16365_SHARP_);
}),cljs.core.rest.call(null,parents__16380),other_children__16397));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16410 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16411 = (function (nl,n){
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
return lazy_nodelist__16410.call(this,nl);
case  2 :
return lazy_nodelist__16411.call(this,nl,n);
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
var inner_wrapper__16419 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16420 = cljs.core.seq.call(null,inner_wrapper__16419.childNodes);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16420),1)))
{return inner_wrapper__16419.removeChild(inner_wrapper__16419.firstChild);
} else
{return children__16420;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16451__16452 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16453 = cljs.core.nth.call(null,vec__16451__16452,0,null);
var table_level__16454 = cljs.core.nth.call(null,vec__16451__16452,1,null);
var ___16455 = cljs.core.nthnext.call(null,vec__16451__16452,2);
var wrapper__16456 = domina.create_wrapper.call(null,table_level__16454);

domina.set_wrapper_html_BANG_.call(null,wrapper__16456,content);
return domina.extract_wrapper_dom.call(null,wrapper__16456,table_level__16454);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16469 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16470 = x__445__auto____16469;

if(cljs.core.truth_(and__3546__auto____16470))
{var and__3546__auto____16471 = x__445__auto____16469.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16471))
{return cljs.core.not.call(null,x__445__auto____16469.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16471;
}
} else
{return and__3546__auto____16470;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16469);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16472 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16473 = x__445__auto____16472;

if(cljs.core.truth_(and__3546__auto____16473))
{var and__3546__auto____16474 = x__445__auto____16472.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16474))
{return cljs.core.not.call(null,x__445__auto____16472.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16474;
}
} else
{return and__3546__auto____16473;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16472);
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
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,undefined,NodeList)))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16477 = null;
var G__16477__16478 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16477__16479 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16477 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16477__16478.call(this,nodelist,n);
case  3 :
return G__16477__16479.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16477;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16483 = null;
var G__16483__16484 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16483__16485 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16483 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16483__16484.call(this,nodelist,n);
case  3 :
return G__16483__16485.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16483;
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
var G__16488 = null;
var G__16488__16489 = (function (coll,n){
return coll.item(n);
});
var G__16488__16490 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16488 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16488__16489.call(this,coll,n);
case  3 :
return G__16488__16490.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16488;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
