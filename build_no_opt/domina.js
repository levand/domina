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
if(cljs.core.truth_((function (){var and__3546__auto____15871 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15871))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15871;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15873 = content;

if(cljs.core.truth_(and__3546__auto____15873))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15873;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15874 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15874))
{return or__3548__auto____15874;
} else
{var or__3548__auto____15875 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15875))
{return or__3548__auto____15875;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15876 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15876))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15876;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15877 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15877))
{return or__3548__auto____15877;
} else
{var or__3548__auto____15878 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15878))
{return or__3548__auto____15878;
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
if(cljs.core.truth_((void 0 === domina.t15881)))
{
/**
* @constructor
*/
domina.t15881 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15881.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15881");
});
domina.t15881.prototype.domina$DomContent$ = true;
domina.t15881.prototype.domina$DomContent$nodes = (function (_){
var this__15886 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15886.class_name));
});
domina.t15881.prototype.domina$DomContent$single_node = (function (_){
var this__15902 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15902.class_name));
});
domina.t15881.prototype.cljs$core$IMeta$ = true;
domina.t15881.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15903 = this;
return this__15903.__meta;
});
domina.t15881.prototype.cljs$core$IWithMeta$ = true;
domina.t15881.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15904 = this;
return (new domina.t15881(this__15904.class_name,this__15904.by_class,__meta));
});
domina.t15881;
} else
{}
return (new domina.t15881(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15906_SHARP_){
return p1__15906_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15911_SHARP_,p2__15912_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15911_SHARP_,p2__15912_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15919_SHARP_,p2__15918_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15918_SHARP_,p1__15919_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15921_SHARP_,p2__15920_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15920_SHARP_,p1__15921_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15925_SHARP_,p2__15924_SHARP_){
return goog.dom.replaceNode.call(null,p2__15924_SHARP_,p1__15925_SHARP_);
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
var s__15934 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15934))))
{return s__15934;
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
var G__15945__15946 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15945__15946))
{var n__15947 = cljs.core.first.call(null,G__15945__15946);
var G__15945__15948 = G__15945__15946;

while(true){
goog.style.setStyle.call(null,n__15947,cljs.core.name.call(null,name),value);
var temp__3698__auto____15949 = cljs.core.next.call(null,G__15945__15948);

if(cljs.core.truth_(temp__3698__auto____15949))
{var G__15945__15950 = temp__3698__auto____15949;

{
var G__15957 = cljs.core.first.call(null,G__15945__15950);
var G__15958 = G__15945__15950;
n__15947 = G__15957;
G__15945__15948 = G__15958;
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
var G__15960__15962 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15960__15962))
{var n__15963 = cljs.core.first.call(null,G__15960__15962);
var G__15960__15964 = G__15960__15962;

while(true){
n__15963.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15965 = cljs.core.next.call(null,G__15960__15964);

if(cljs.core.truth_(temp__3698__auto____15965))
{var G__15960__15966 = temp__3698__auto____15965;

{
var G__16017 = cljs.core.first.call(null,G__15960__15966);
var G__16018 = G__15960__15966;
n__15963 = G__16017;
G__15960__15964 = G__16018;
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
var vec__16020__16021 = pair.split(/\s*:\s*/);
var k__16022 = cljs.core.nth.call(null,vec__16020__16021,0,null);
var v__16023 = cljs.core.nth.call(null,vec__16020__16021,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16024 = k__16022;

if(cljs.core.truth_(and__3546__auto____16024))
{return v__16023;
} else
{return and__3546__auto____16024;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16022.toLowerCase()),v__16023);
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
var node__16030 = domina.single_node.call(null,content);
var attrs__16032 = node__16030.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16025_SHARP_){
var attr__16034 = attrs__16032.item(p1__16025_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16034.nodeName.toLowerCase())],[attr__16034.nodeValue]);
}),cljs.core.range.call(null,attrs__16032.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16035__16036 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16035__16036))
{var G__16038__16040 = cljs.core.first.call(null,G__16035__16036);
var vec__16039__16041 = G__16038__16040;
var name__16042 = cljs.core.nth.call(null,vec__16039__16041,0,null);
var value__16043 = cljs.core.nth.call(null,vec__16039__16041,1,null);
var G__16035__16044 = G__16035__16036;

var G__16038__16045 = G__16038__16040;
var G__16035__16046 = G__16035__16044;

while(true){
var vec__16047__16048 = G__16038__16045;
var name__16049 = cljs.core.nth.call(null,vec__16047__16048,0,null);
var value__16050 = cljs.core.nth.call(null,vec__16047__16048,1,null);
var G__16035__16051 = G__16035__16046;

domina.set_style_BANG_.call(null,content,name__16049,value__16050);
var temp__3698__auto____16052 = cljs.core.next.call(null,G__16035__16051);

if(cljs.core.truth_(temp__3698__auto____16052))
{var G__16035__16053 = temp__3698__auto____16052;

{
var G__16054 = cljs.core.first.call(null,G__16035__16053);
var G__16055 = G__16035__16053;
G__16038__16045 = G__16054;
G__16035__16046 = G__16055;
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
{var G__16059__16061 = cljs.core.first.call(null,G__16056__16057);
var vec__16060__16062 = G__16059__16061;
var name__16063 = cljs.core.nth.call(null,vec__16060__16062,0,null);
var value__16064 = cljs.core.nth.call(null,vec__16060__16062,1,null);
var G__16056__16065 = G__16056__16057;

var G__16059__16066 = G__16059__16061;
var G__16056__16067 = G__16056__16065;

while(true){
var vec__16068__16069 = G__16059__16066;
var name__16127 = cljs.core.nth.call(null,vec__16068__16069,0,null);
var value__16128 = cljs.core.nth.call(null,vec__16068__16069,1,null);
var G__16056__16129 = G__16056__16067;

domina.set_attr_BANG_.call(null,content,name__16127,value__16128);
var temp__3698__auto____16132 = cljs.core.next.call(null,G__16056__16129);

if(cljs.core.truth_(temp__3698__auto____16132))
{var G__16056__16133 = temp__3698__auto____16132;

{
var G__16146 = cljs.core.first.call(null,G__16056__16133);
var G__16147 = G__16056__16133;
G__16059__16066 = G__16146;
G__16056__16067 = G__16147;
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
var G__16150__16153 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16150__16153))
{var node__16158 = cljs.core.first.call(null,G__16150__16153);
var G__16150__16159 = G__16150__16153;

while(true){
goog.dom.classes.add.call(null,node__16158,class$);
var temp__3698__auto____16166 = cljs.core.next.call(null,G__16150__16159);

if(cljs.core.truth_(temp__3698__auto____16166))
{var G__16150__16173 = temp__3698__auto____16166;

{
var G__16200 = cljs.core.first.call(null,G__16150__16173);
var G__16201 = G__16150__16173;
node__16158 = G__16200;
G__16150__16159 = G__16201;
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
var G__16204__16205 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16204__16205))
{var node__16206 = cljs.core.first.call(null,G__16204__16205);
var G__16204__16207 = G__16204__16205;

while(true){
goog.dom.classes.remove.call(null,node__16206,class$);
var temp__3698__auto____16208 = cljs.core.next.call(null,G__16204__16207);

if(cljs.core.truth_(temp__3698__auto____16208))
{var G__16204__16211 = temp__3698__auto____16208;

{
var G__16222 = cljs.core.first.call(null,G__16204__16211);
var G__16224 = G__16204__16211;
node__16206 = G__16222;
G__16204__16207 = G__16224;
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
var text__16250 = (function (content){
return text.call(null,content,true);
});
var text__16251 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16250.call(this,content);
case  2 :
return text__16251.call(this,content,normalize);
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
var G__16258__16260 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16258__16260))
{var node__16261 = cljs.core.first.call(null,G__16258__16260);
var G__16258__16262 = G__16258__16260;

while(true){
goog.dom.setTextContent.call(null,node__16261,value);
var temp__3698__auto____16263 = cljs.core.next.call(null,G__16258__16262);

if(cljs.core.truth_(temp__3698__auto____16263))
{var G__16258__16264 = temp__3698__auto____16263;

{
var G__16267 = cljs.core.first.call(null,G__16258__16264);
var G__16268 = G__16258__16264;
node__16261 = G__16267;
G__16258__16262 = G__16268;
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
var G__16277__16279 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16277__16279))
{var node__16281 = cljs.core.first.call(null,G__16277__16279);
var G__16277__16282 = G__16277__16279;

while(true){
goog.dom.forms.setValue.call(null,node__16281,value);
var temp__3698__auto____16283 = cljs.core.next.call(null,G__16277__16282);

if(cljs.core.truth_(temp__3698__auto____16283))
{var G__16277__16285 = temp__3698__auto____16283;

{
var G__16286 = cljs.core.first.call(null,G__16277__16285);
var G__16287 = G__16277__16285;
node__16281 = G__16286;
G__16277__16282 = G__16287;
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
var G__16385__16386 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16385__16386))
{var node__16387 = cljs.core.first.call(null,G__16385__16386);
var G__16385__16388 = G__16385__16386;

while(true){
node__16387.innerHTML = value;
var temp__3698__auto____16391 = cljs.core.next.call(null,G__16385__16388);

if(cljs.core.truth_(temp__3698__auto____16391))
{var G__16385__16392 = temp__3698__auto____16391;

{
var G__16412 = cljs.core.first.call(null,G__16385__16392);
var G__16413 = G__16385__16392;
node__16387 = G__16412;
G__16385__16388 = G__16413;
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
var parents__16415 = domina.nodes.call(null,parent_content);
var children__16417 = domina.nodes.call(null,child_content);
var first_child__16435 = (function (){var frag__16419 = document.createDocumentFragment();

var G__16421__16424 = cljs.core.seq.call(null,children__16417);

if(cljs.core.truth_(G__16421__16424))
{var child__16426 = cljs.core.first.call(null,G__16421__16424);
var G__16421__16427 = G__16421__16424;

while(true){
frag__16419.appendChild(child__16426);
var temp__3698__auto____16431 = cljs.core.next.call(null,G__16421__16427);

if(cljs.core.truth_(temp__3698__auto____16431))
{var G__16421__16433 = temp__3698__auto____16431;

{
var G__16447 = cljs.core.first.call(null,G__16421__16433);
var G__16448 = G__16421__16433;
child__16426 = G__16447;
G__16421__16427 = G__16448;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16419;
})();
var other_children__16437 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16415) - 1),(function (){
return first_child__16435.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16415)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16417)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16415)))
{f.call(null,cljs.core.first.call(null,parents__16415),first_child__16435);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16382_SHARP_,p2__16383_SHARP_){
return f.call(null,p1__16382_SHARP_,p2__16383_SHARP_);
}),cljs.core.rest.call(null,parents__16415),other_children__16437));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16459 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16460 = (function (nl,n){
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
return lazy_nodelist__16459.call(this,nl);
case  2 :
return lazy_nodelist__16460.call(this,nl,n);
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
var inner_wrapper__16471 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16472 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16471));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16472),1)))
{return inner_wrapper__16471.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16471));
} else
{return children__16472;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16478__16479 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16480 = cljs.core.nth.call(null,vec__16478__16479,0,null);
var table_level__16481 = cljs.core.nth.call(null,vec__16478__16479,1,null);
var ___16482 = cljs.core.nthnext.call(null,vec__16478__16479,2);
var wrapper__16483 = domina.create_wrapper.call(null,table_level__16481);

domina.set_wrapper_html_BANG_.call(null,wrapper__16483,content);
return domina.extract_wrapper_dom.call(null,wrapper__16483,table_level__16481);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6768__auto____16487 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16488 = x__6768__auto____16487;

if(cljs.core.truth_(and__3546__auto____16488))
{var and__3546__auto____16489 = x__6768__auto____16487.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16489))
{var and__3546__auto____16490 = x__6768__auto____16487.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16490))
{return cljs.core.not.call(null,x__6768__auto____16487.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16490;
}
} else
{return and__3546__auto____16489;
}
} else
{return and__3546__auto____16488;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6768__auto____16487);
}
})()))
{domina.log_debug.call(null,"sequing content");
return cljs.core.seq.call(null,content);
} else
{domina.log_debug.call(null,"consing content");
return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6768__auto____16493 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16494 = x__6768__auto____16493;

if(cljs.core.truth_(and__3546__auto____16494))
{var and__3546__auto____16495 = x__6768__auto____16493.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16495))
{var and__3546__auto____16496 = x__6768__auto____16493.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16496))
{return cljs.core.not.call(null,x__6768__auto____16493.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16496;
}
} else
{return and__3546__auto____16495;
}
} else
{return and__3546__auto____16494;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6768__auto____16493);
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
var G__16527 = null;
var G__16527__16528 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16527__16529 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16527 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16527__16528.call(this,nodelist,n);
case  3 :
return G__16527__16529.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16527;
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
var G__16532 = null;
var G__16532__16533 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16532__16536 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16532 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16532__16533.call(this,nodelist,n);
case  3 :
return G__16532__16536.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16532;
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
var G__16541 = null;
var G__16541__16542 = (function (coll,n){
return coll.item(n);
});
var G__16541__16543 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16541 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16541__16542.call(this,coll,n);
case  3 :
return G__16541__16543.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16541;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
