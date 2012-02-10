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
if(cljs.core.truth_((function (){var and__3546__auto____14877 = domina.debug;

if(cljs.core.truth_(and__3546__auto____14877))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____14877;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____14879 = content;

if(cljs.core.truth_(and__3546__auto____14879))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____14879;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____14880 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____14880))
{return or__3548__auto____14880;
} else
{var or__3548__auto____14881 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____14881))
{return or__3548__auto____14881;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____14884 = nodeseq;

if(cljs.core.truth_(and__3546__auto____14884))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____14884;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____14885 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____14885))
{return or__3548__auto____14885;
} else
{var or__3548__auto____14887 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____14887))
{return or__3548__auto____14887;
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
if(cljs.core.truth_((void 0 === domina.t14892)))
{
/**
* @constructor
*/
domina.t14892 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t14892.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t14892");
});
domina.t14892.prototype.domina$DomContent$ = true;
domina.t14892.prototype.domina$DomContent$nodes = (function (_){
var this__14893 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__14893.class_name));
});
domina.t14892.prototype.domina$DomContent$single_node = (function (_){
var this__14894 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__14894.class_name));
});
domina.t14892.prototype.cljs$core$IMeta$ = true;
domina.t14892.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14897 = this;
return this__14897.__meta;
});
domina.t14892.prototype.cljs$core$IWithMeta$ = true;
domina.t14892.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14900 = this;
return (new domina.t14892(this__14900.class_name,this__14900.by_class,__meta));
});
domina.t14892;
} else
{}
return (new domina.t14892(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__14915_SHARP_){
return p1__14915_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__14921_SHARP_,p2__14922_SHARP_){
return goog.dom.insertChildAt.call(null,p1__14921_SHARP_,p2__14922_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__14930_SHARP_,p2__14929_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__14929_SHARP_,p1__14930_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14933_SHARP_,p2__14932_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__14932_SHARP_,p1__14933_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__14937_SHARP_,p2__14936_SHARP_){
return goog.dom.replaceNode.call(null,p2__14936_SHARP_,p1__14937_SHARP_);
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
var s__14944 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__14944))))
{return s__14944;
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
var G__14946__14950 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14946__14950))
{var n__14951 = cljs.core.first.call(null,G__14946__14950);
var G__14946__14952 = G__14946__14950;

while(true){
goog.style.setStyle.call(null,n__14951,cljs.core.name.call(null,name),value);
var temp__3698__auto____14954 = cljs.core.next.call(null,G__14946__14952);

if(cljs.core.truth_(temp__3698__auto____14954))
{var G__14946__14955 = temp__3698__auto____14954;

{
var G__14956 = cljs.core.first.call(null,G__14946__14955);
var G__14957 = G__14946__14955;
n__14951 = G__14956;
G__14946__14952 = G__14957;
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
var G__14959__14960 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__14959__14960))
{var n__14971 = cljs.core.first.call(null,G__14959__14960);
var G__14959__14972 = G__14959__14960;

while(true){
n__14971.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____14974 = cljs.core.next.call(null,G__14959__14972);

if(cljs.core.truth_(temp__3698__auto____14974))
{var G__14959__14975 = temp__3698__auto____14974;

{
var G__14977 = cljs.core.first.call(null,G__14959__14975);
var G__14978 = G__14959__14975;
n__14971 = G__14977;
G__14959__14972 = G__14978;
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
var vec__14981__14982 = pair.split(/\s*:\s*/);
var k__14983 = cljs.core.nth.call(null,vec__14981__14982,0,null);
var v__14984 = cljs.core.nth.call(null,vec__14981__14982,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____14986 = k__14983;

if(cljs.core.truth_(and__3546__auto____14986))
{return v__14984;
} else
{return and__3546__auto____14986;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__14983.toLowerCase()),v__14984);
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
var node__14998 = domina.single_node.call(null,content);
var attrs__14999 = node__14998.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__14991_SHARP_){
var attr__15000 = attrs__14999.item(p1__14991_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15000.nodeName.toLowerCase())],[attr__15000.nodeValue]);
}),cljs.core.range.call(null,attrs__14999.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15004__15006 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15004__15006))
{var G__15009__15012 = cljs.core.first.call(null,G__15004__15006);
var vec__15011__15013 = G__15009__15012;
var name__15014 = cljs.core.nth.call(null,vec__15011__15013,0,null);
var value__15015 = cljs.core.nth.call(null,vec__15011__15013,1,null);
var G__15004__15016 = G__15004__15006;

var G__15009__15017 = G__15009__15012;
var G__15004__15018 = G__15004__15016;

while(true){
var vec__15019__15020 = G__15009__15017;
var name__15021 = cljs.core.nth.call(null,vec__15019__15020,0,null);
var value__15022 = cljs.core.nth.call(null,vec__15019__15020,1,null);
var G__15004__15023 = G__15004__15018;

domina.set_style_BANG_.call(null,content,name__15021,value__15022);
var temp__3698__auto____15026 = cljs.core.next.call(null,G__15004__15023);

if(cljs.core.truth_(temp__3698__auto____15026))
{var G__15004__15027 = temp__3698__auto____15026;

{
var G__15034 = cljs.core.first.call(null,G__15004__15027);
var G__15035 = G__15004__15027;
G__15009__15017 = G__15034;
G__15004__15018 = G__15035;
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
var G__15040__15041 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15040__15041))
{var G__15043__15059 = cljs.core.first.call(null,G__15040__15041);
var vec__15058__15061 = G__15043__15059;
var name__15063 = cljs.core.nth.call(null,vec__15058__15061,0,null);
var value__15064 = cljs.core.nth.call(null,vec__15058__15061,1,null);
var G__15040__15065 = G__15040__15041;

var G__15043__15083 = G__15043__15059;
var G__15040__15084 = G__15040__15065;

while(true){
var vec__15086__15087 = G__15043__15083;
var name__15089 = cljs.core.nth.call(null,vec__15086__15087,0,null);
var value__15091 = cljs.core.nth.call(null,vec__15086__15087,1,null);
var G__15040__15092 = G__15040__15084;

domina.set_attr_BANG_.call(null,content,name__15089,value__15091);
var temp__3698__auto____15095 = cljs.core.next.call(null,G__15040__15092);

if(cljs.core.truth_(temp__3698__auto____15095))
{var G__15040__15096 = temp__3698__auto____15095;

{
var G__15101 = cljs.core.first.call(null,G__15040__15096);
var G__15102 = G__15040__15096;
G__15043__15083 = G__15101;
G__15040__15084 = G__15102;
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
var G__15105__15110 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15105__15110))
{var node__15111 = cljs.core.first.call(null,G__15105__15110);
var G__15105__15112 = G__15105__15110;

while(true){
goog.dom.classes.add.call(null,node__15111,class$);
var temp__3698__auto____15115 = cljs.core.next.call(null,G__15105__15112);

if(cljs.core.truth_(temp__3698__auto____15115))
{var G__15105__15116 = temp__3698__auto____15115;

{
var G__15121 = cljs.core.first.call(null,G__15105__15116);
var G__15122 = G__15105__15116;
node__15111 = G__15121;
G__15105__15112 = G__15122;
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
var G__15124__15126 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15124__15126))
{var node__15129 = cljs.core.first.call(null,G__15124__15126);
var G__15124__15136 = G__15124__15126;

while(true){
goog.dom.classes.remove.call(null,node__15129,class$);
var temp__3698__auto____15141 = cljs.core.next.call(null,G__15124__15136);

if(cljs.core.truth_(temp__3698__auto____15141))
{var G__15124__15144 = temp__3698__auto____15141;

{
var G__15150 = cljs.core.first.call(null,G__15124__15144);
var G__15151 = G__15124__15144;
node__15129 = G__15150;
G__15124__15136 = G__15151;
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
var text__15158 = (function (content){
return text.call(null,content,true);
});
var text__15159 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15158.call(this,content);
case  2 :
return text__15159.call(this,content,normalize);
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
var G__15179__15183 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15179__15183))
{var node__15185 = cljs.core.first.call(null,G__15179__15183);
var G__15179__15186 = G__15179__15183;

while(true){
goog.dom.setTextContent.call(null,node__15185,value);
var temp__3698__auto____15188 = cljs.core.next.call(null,G__15179__15186);

if(cljs.core.truth_(temp__3698__auto____15188))
{var G__15179__15189 = temp__3698__auto____15188;

{
var G__15190 = cljs.core.first.call(null,G__15179__15189);
var G__15191 = G__15179__15189;
node__15185 = G__15190;
G__15179__15186 = G__15191;
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
var G__15201__15202 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15201__15202))
{var node__15205 = cljs.core.first.call(null,G__15201__15202);
var G__15201__15208 = G__15201__15202;

while(true){
goog.dom.forms.setValue.call(null,node__15205,value);
var temp__3698__auto____15216 = cljs.core.next.call(null,G__15201__15208);

if(cljs.core.truth_(temp__3698__auto____15216))
{var G__15201__15220 = temp__3698__auto____15216;

{
var G__15224 = cljs.core.first.call(null,G__15201__15220);
var G__15226 = G__15201__15220;
node__15205 = G__15224;
G__15201__15208 = G__15226;
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
var G__15239__15240 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15239__15240))
{var node__15241 = cljs.core.first.call(null,G__15239__15240);
var G__15239__15242 = G__15239__15240;

while(true){
node__15241.innerHTML = value;
var temp__3698__auto____15243 = cljs.core.next.call(null,G__15239__15242);

if(cljs.core.truth_(temp__3698__auto____15243))
{var G__15239__15244 = temp__3698__auto____15243;

{
var G__15246 = cljs.core.first.call(null,G__15239__15244);
var G__15247 = G__15239__15244;
node__15241 = G__15246;
G__15239__15242 = G__15247;
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
var parents__15251 = domina.nodes.call(null,parent_content);
var children__15252 = domina.nodes.call(null,child_content);
var first_child__15301 = (function (){var frag__15253 = document.createDocumentFragment();

var G__15254__15256 = cljs.core.seq.call(null,children__15252);

if(cljs.core.truth_(G__15254__15256))
{var child__15258 = cljs.core.first.call(null,G__15254__15256);
var G__15254__15259 = G__15254__15256;

while(true){
frag__15253.appendChild(child__15258);
var temp__3698__auto____15262 = cljs.core.next.call(null,G__15254__15259);

if(cljs.core.truth_(temp__3698__auto____15262))
{var G__15254__15298 = temp__3698__auto____15262;

{
var G__15331 = cljs.core.first.call(null,G__15254__15298);
var G__15332 = G__15254__15298;
child__15258 = G__15331;
G__15254__15259 = G__15332;
continue;
}
} else
{}
break;
}
} else
{}
return frag__15253;
})();
var other_children__15321 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__15251) - 1),(function (){
return first_child__15301.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__15251)))
{f.call(null,cljs.core.first.call(null,parents__15251),first_child__15301);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15234_SHARP_,p2__15236_SHARP_){
return f.call(null,p1__15234_SHARP_,p2__15236_SHARP_);
}),cljs.core.rest.call(null,parents__15251),other_children__15321));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__15368 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__15369 = (function (nl,n){
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
return lazy_nodelist__15368.call(this,nl);
case  2 :
return lazy_nodelist__15369.call(this,nl,n);
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
var inner_wrapper__15391 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__15392 = cljs.core.seq.call(null,inner_wrapper__15391.childNodes);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__15392),1)))
{return inner_wrapper__15391.removeChild(inner_wrapper__15391.firstChild);
} else
{return children__15392;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__15393__15394 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___15397 = cljs.core.nth.call(null,vec__15393__15394,0,null);
var table_level__15399 = cljs.core.nth.call(null,vec__15393__15394,1,null);
var ___15400 = cljs.core.nthnext.call(null,vec__15393__15394,2);
var wrapper__15401 = domina.create_wrapper.call(null,table_level__15399);

domina.set_wrapper_html_BANG_.call(null,wrapper__15401,content);
return domina.extract_wrapper_dom.call(null,wrapper__15401,table_level__15399);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____15404 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15405 = x__445__auto____15404;

if(cljs.core.truth_(and__3546__auto____15405))
{var and__3546__auto____15406 = x__445__auto____15404.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15406))
{return cljs.core.not.call(null,x__445__auto____15404.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15406;
}
} else
{return and__3546__auto____15405;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____15404);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____15415 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15416 = x__445__auto____15415;

if(cljs.core.truth_(and__3546__auto____15416))
{var and__3546__auto____15418 = x__445__auto____15415.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15418))
{return cljs.core.not.call(null,x__445__auto____15415.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15418;
}
} else
{return and__3546__auto____15416;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____15415);
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
var G__15450 = null;
var G__15450__15451 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15450__15452 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15450 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15450__15451.call(this,nodelist,n);
case  3 :
return G__15450__15452.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15450;
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
var G__15477 = null;
var G__15477__15478 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15477__15479 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15477 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15477__15478.call(this,nodelist,n);
case  3 :
return G__15477__15479.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15477;
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
var G__15527 = null;
var G__15527__15528 = (function (coll,n){
return coll.item(n);
});
var G__15527__15529 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__15527 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15527__15528.call(this,coll,n);
case  3 :
return G__15527__15529.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15527;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
