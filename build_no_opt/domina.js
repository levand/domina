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
if(cljs.core.truth_((function (){var and__3546__auto____15851 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15851))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15851;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15852 = content;

if(cljs.core.truth_(and__3546__auto____15852))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15852;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15853 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15853))
{return or__3548__auto____15853;
} else
{var or__3548__auto____15854 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15854))
{return or__3548__auto____15854;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15880 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15880))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15880;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15882 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15882))
{return or__3548__auto____15882;
} else
{var or__3548__auto____15883 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15883))
{return or__3548__auto____15883;
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
if(cljs.core.truth_((void 0 === domina.t15897)))
{
/**
* @constructor
*/
domina.t15897 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15897.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15897");
});
domina.t15897.prototype.domina$DomContent$ = true;
domina.t15897.prototype.domina$DomContent$nodes = (function (_){
var this__15907 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15907.class_name));
});
domina.t15897.prototype.domina$DomContent$single_node = (function (_){
var this__15909 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15909.class_name));
});
domina.t15897.prototype.cljs$core$IMeta$ = true;
domina.t15897.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15912 = this;
return this__15912.__meta;
});
domina.t15897.prototype.cljs$core$IWithMeta$ = true;
domina.t15897.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15915 = this;
return (new domina.t15897(this__15915.class_name,this__15915.by_class,__meta));
});
domina.t15897;
} else
{}
return (new domina.t15897(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15927_SHARP_){
return p1__15927_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15933_SHARP_,p2__15934_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15933_SHARP_,p2__15934_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15940_SHARP_,p2__15938_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15938_SHARP_,p1__15940_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15942_SHARP_,p2__15941_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15941_SHARP_,p1__15942_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15947_SHARP_,p2__15945_SHARP_){
return goog.dom.replaceNode.call(null,p2__15945_SHARP_,p1__15947_SHARP_);
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
var s__15987 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15987))))
{return s__15987;
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
var G__15993__15998 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15993__15998))
{var n__15999 = cljs.core.first.call(null,G__15993__15998);
var G__15993__16000 = G__15993__15998;

while(true){
goog.style.setStyle.call(null,n__15999,cljs.core.name.call(null,name),value);
var temp__3698__auto____16001 = cljs.core.next.call(null,G__15993__16000);

if(cljs.core.truth_(temp__3698__auto____16001))
{var G__15993__16002 = temp__3698__auto____16001;

{
var G__16005 = cljs.core.first.call(null,G__15993__16002);
var G__16006 = G__15993__16002;
n__15999 = G__16005;
G__15993__16000 = G__16006;
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
var G__16011__16012 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16011__16012))
{var n__16015 = cljs.core.first.call(null,G__16011__16012);
var G__16011__16016 = G__16011__16012;

while(true){
n__16015.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16017 = cljs.core.next.call(null,G__16011__16016);

if(cljs.core.truth_(temp__3698__auto____16017))
{var G__16011__16018 = temp__3698__auto____16017;

{
var G__16021 = cljs.core.first.call(null,G__16011__16018);
var G__16022 = G__16011__16018;
n__16015 = G__16021;
G__16011__16016 = G__16022;
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
var vec__16023__16024 = pair.split(/\s*:\s*/);
var k__16025 = cljs.core.nth.call(null,vec__16023__16024,0,null);
var v__16026 = cljs.core.nth.call(null,vec__16023__16024,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16027 = k__16025;

if(cljs.core.truth_(and__3546__auto____16027))
{return v__16026;
} else
{return and__3546__auto____16027;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16025.toLowerCase()),v__16026);
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
var attrs__16031 = node__16030.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16028_SHARP_){
var attr__16032 = attrs__16031.item(p1__16028_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16032.nodeName.toLowerCase())],[attr__16032.nodeValue]);
}),cljs.core.range.call(null,attrs__16031.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16040__16041 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16040__16041))
{var G__16043__16046 = cljs.core.first.call(null,G__16040__16041);
var vec__16045__16047 = G__16043__16046;
var name__16049 = cljs.core.nth.call(null,vec__16045__16047,0,null);
var value__16050 = cljs.core.nth.call(null,vec__16045__16047,1,null);
var G__16040__16051 = G__16040__16041;

var G__16043__16053 = G__16043__16046;
var G__16040__16055 = G__16040__16051;

while(true){
var vec__16056__16059 = G__16043__16053;
var name__16060 = cljs.core.nth.call(null,vec__16056__16059,0,null);
var value__16062 = cljs.core.nth.call(null,vec__16056__16059,1,null);
var G__16040__16063 = G__16040__16055;

domina.set_style_BANG_.call(null,content,name__16060,value__16062);
var temp__3698__auto____16065 = cljs.core.next.call(null,G__16040__16063);

if(cljs.core.truth_(temp__3698__auto____16065))
{var G__16040__16066 = temp__3698__auto____16065;

{
var G__16076 = cljs.core.first.call(null,G__16040__16066);
var G__16077 = G__16040__16066;
G__16043__16053 = G__16076;
G__16040__16055 = G__16077;
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
var G__16083__16086 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16083__16086))
{var G__16088__16090 = cljs.core.first.call(null,G__16083__16086);
var vec__16089__16091 = G__16088__16090;
var name__16092 = cljs.core.nth.call(null,vec__16089__16091,0,null);
var value__16094 = cljs.core.nth.call(null,vec__16089__16091,1,null);
var G__16083__16095 = G__16083__16086;

var G__16088__16097 = G__16088__16090;
var G__16083__16098 = G__16083__16095;

while(true){
var vec__16100__16103 = G__16088__16097;
var name__16104 = cljs.core.nth.call(null,vec__16100__16103,0,null);
var value__16107 = cljs.core.nth.call(null,vec__16100__16103,1,null);
var G__16083__16108 = G__16083__16098;

domina.set_attr_BANG_.call(null,content,name__16104,value__16107);
var temp__3698__auto____16109 = cljs.core.next.call(null,G__16083__16108);

if(cljs.core.truth_(temp__3698__auto____16109))
{var G__16083__16110 = temp__3698__auto____16109;

{
var G__16116 = cljs.core.first.call(null,G__16083__16110);
var G__16117 = G__16083__16110;
G__16088__16097 = G__16116;
G__16083__16098 = G__16117;
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
var G__16119__16122 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16119__16122))
{var node__16123 = cljs.core.first.call(null,G__16119__16122);
var G__16119__16125 = G__16119__16122;

while(true){
goog.dom.classes.add.call(null,node__16123,class$);
var temp__3698__auto____16126 = cljs.core.next.call(null,G__16119__16125);

if(cljs.core.truth_(temp__3698__auto____16126))
{var G__16119__16127 = temp__3698__auto____16126;

{
var G__16128 = cljs.core.first.call(null,G__16119__16127);
var G__16129 = G__16119__16127;
node__16123 = G__16128;
G__16119__16125 = G__16129;
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
var G__16134__16138 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16134__16138))
{var node__16141 = cljs.core.first.call(null,G__16134__16138);
var G__16134__16143 = G__16134__16138;

while(true){
goog.dom.classes.remove.call(null,node__16141,class$);
var temp__3698__auto____16149 = cljs.core.next.call(null,G__16134__16143);

if(cljs.core.truth_(temp__3698__auto____16149))
{var G__16134__16152 = temp__3698__auto____16149;

{
var G__16161 = cljs.core.first.call(null,G__16134__16152);
var G__16162 = G__16134__16152;
node__16141 = G__16161;
G__16134__16143 = G__16162;
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
var text__16181 = (function (content){
return text.call(null,content,true);
});
var text__16182 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16181.call(this,content);
case  2 :
return text__16182.call(this,content,normalize);
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
var G__16199__16200 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16199__16200))
{var node__16201 = cljs.core.first.call(null,G__16199__16200);
var G__16199__16202 = G__16199__16200;

while(true){
goog.dom.setTextContent.call(null,node__16201,value);
var temp__3698__auto____16203 = cljs.core.next.call(null,G__16199__16202);

if(cljs.core.truth_(temp__3698__auto____16203))
{var G__16199__16204 = temp__3698__auto____16203;

{
var G__16207 = cljs.core.first.call(null,G__16199__16204);
var G__16208 = G__16199__16204;
node__16201 = G__16207;
G__16199__16202 = G__16208;
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
var G__16215__16218 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16215__16218))
{var node__16222 = cljs.core.first.call(null,G__16215__16218);
var G__16215__16224 = G__16215__16218;

while(true){
goog.dom.forms.setValue.call(null,node__16222,value);
var temp__3698__auto____16226 = cljs.core.next.call(null,G__16215__16224);

if(cljs.core.truth_(temp__3698__auto____16226))
{var G__16215__16228 = temp__3698__auto____16226;

{
var G__16232 = cljs.core.first.call(null,G__16215__16228);
var G__16234 = G__16215__16228;
node__16222 = G__16232;
G__16215__16224 = G__16234;
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
var G__16249__16252 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16249__16252))
{var node__16254 = cljs.core.first.call(null,G__16249__16252);
var G__16249__16255 = G__16249__16252;

while(true){
node__16254.innerHTML = value;
var temp__3698__auto____16256 = cljs.core.next.call(null,G__16249__16255);

if(cljs.core.truth_(temp__3698__auto____16256))
{var G__16249__16257 = temp__3698__auto____16256;

{
var G__16260 = cljs.core.first.call(null,G__16249__16257);
var G__16261 = G__16249__16257;
node__16254 = G__16260;
G__16249__16255 = G__16261;
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
var parents__16267 = domina.nodes.call(null,parent_content);
var children__16268 = domina.nodes.call(null,child_content);
var first_child__16286 = (function (){var frag__16269 = document.createDocumentFragment();

var G__16270__16272 = cljs.core.seq.call(null,children__16268);

if(cljs.core.truth_(G__16270__16272))
{var child__16275 = cljs.core.first.call(null,G__16270__16272);
var G__16270__16276 = G__16270__16272;

while(true){
frag__16269.appendChild(child__16275);
var temp__3698__auto____16280 = cljs.core.next.call(null,G__16270__16276);

if(cljs.core.truth_(temp__3698__auto____16280))
{var G__16270__16282 = temp__3698__auto____16280;

{
var G__16308 = cljs.core.first.call(null,G__16270__16282);
var G__16309 = G__16270__16282;
child__16275 = G__16308;
G__16270__16276 = G__16309;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16269;
})();
var other_children__16291 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16267) - 1),(function (){
return first_child__16286.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16267)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16268)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16267)))
{f.call(null,cljs.core.first.call(null,parents__16267),first_child__16286);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16244_SHARP_,p2__16245_SHARP_){
return f.call(null,p1__16244_SHARP_,p2__16245_SHARP_);
}),cljs.core.rest.call(null,parents__16267),other_children__16291));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16338 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16339 = (function (nl,n){
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
return lazy_nodelist__16338.call(this,nl);
case  2 :
return lazy_nodelist__16339.call(this,nl,n);
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
var inner_wrapper__16367 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16368 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16367));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16368),1)))
{return inner_wrapper__16367.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16367));
} else
{return children__16368;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16371__16372 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16373 = cljs.core.nth.call(null,vec__16371__16372,0,null);
var table_level__16375 = cljs.core.nth.call(null,vec__16371__16372,1,null);
var ___16377 = cljs.core.nthnext.call(null,vec__16371__16372,2);
var wrapper__16378 = domina.create_wrapper.call(null,table_level__16375);

domina.set_wrapper_html_BANG_.call(null,wrapper__16378,content);
return domina.extract_wrapper_dom.call(null,wrapper__16378,table_level__16375);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,typeof content);
if(cljs.core.truth_((function (){var or__3548__auto____16397 = (function (){var x__6779__auto____16391 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16392 = x__6779__auto____16391;

if(cljs.core.truth_(and__3546__auto____16392))
{var and__3546__auto____16393 = x__6779__auto____16391.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____16393))
{var and__3546__auto____16394 = x__6779__auto____16391.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16394))
{return cljs.core.not.call(null,x__6779__auto____16391.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____16394;
}
} else
{return and__3546__auto____16393;
}
} else
{return and__3546__auto____16392;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__6779__auto____16391);
}
})();

if(cljs.core.truth_(or__3548__auto____16397))
{return or__3548__auto____16397;
} else
{var x__6779__auto____16398 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16399 = x__6779__auto____16398;

if(cljs.core.truth_(and__3546__auto____16399))
{var and__3546__auto____16401 = x__6779__auto____16398.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16401))
{var and__3546__auto____16403 = x__6779__auto____16398.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16403))
{return cljs.core.not.call(null,x__6779__auto____16398.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16403;
}
} else
{return and__3546__auto____16401;
}
} else
{return and__3546__auto____16399;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6779__auto____16398);
}
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6779__auto____16412 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16414 = x__6779__auto____16412;

if(cljs.core.truth_(and__3546__auto____16414))
{var and__3546__auto____16415 = x__6779__auto____16412.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16415))
{var and__3546__auto____16418 = x__6779__auto____16412.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16418))
{return cljs.core.not.call(null,x__6779__auto____16412.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16418;
}
} else
{return and__3546__auto____16415;
}
} else
{return and__3546__auto____16414;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6779__auto____16412);
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
var G__16468 = null;
var G__16468__16469 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16468__16471 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16468 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16468__16469.call(this,nodelist,n);
case  3 :
return G__16468__16471.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16468;
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
var G__16487 = null;
var G__16487__16488 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16487__16489 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16487 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16487__16488.call(this,nodelist,n);
case  3 :
return G__16487__16489.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16487;
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
var G__16525 = null;
var G__16525__16526 = (function (coll,n){
return coll.item(n);
});
var G__16525__16527 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16525 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16525__16526.call(this,coll,n);
case  3 :
return G__16525__16527.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16525;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
