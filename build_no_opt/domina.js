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
if(cljs.core.truth_((function (){var and__3546__auto____15748 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15748))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15748;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15752 = content;

if(cljs.core.truth_(and__3546__auto____15752))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15752;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15754 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15754))
{return or__3548__auto____15754;
} else
{var or__3548__auto____15755 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15755))
{return or__3548__auto____15755;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15756 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15756))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15756;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15757 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15757))
{return or__3548__auto____15757;
} else
{var or__3548__auto____15759 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15759))
{return or__3548__auto____15759;
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
if(cljs.core.truth_((void 0 === domina.t15788)))
{
/**
* @constructor
*/
domina.t15788 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15788.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15788");
});
domina.t15788.prototype.domina$DomContent$ = true;
domina.t15788.prototype.domina$DomContent$nodes = (function (_){
var this__15791 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15791.class_name));
});
domina.t15788.prototype.domina$DomContent$single_node = (function (_){
var this__15792 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15792.class_name));
});
domina.t15788.prototype.cljs$core$IMeta$ = true;
domina.t15788.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15793 = this;
return this__15793.__meta;
});
domina.t15788.prototype.cljs$core$IWithMeta$ = true;
domina.t15788.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15794 = this;
return (new domina.t15788(this__15794.class_name,this__15794.by_class,__meta));
});
domina.t15788;
} else
{}
return (new domina.t15788(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15806_SHARP_){
return p1__15806_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15812_SHARP_,p2__15813_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15812_SHARP_,p2__15813_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15829_SHARP_,p2__15828_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15828_SHARP_,p1__15829_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15835_SHARP_,p2__15834_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15834_SHARP_,p1__15835_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15837_SHARP_,p2__15836_SHARP_){
return goog.dom.replaceNode.call(null,p2__15836_SHARP_,p1__15837_SHARP_);
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
var s__15840 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15840))))
{return s__15840;
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
var G__15847__15849 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15847__15849))
{var n__15850 = cljs.core.first.call(null,G__15847__15849);
var G__15847__15851 = G__15847__15849;

while(true){
goog.style.setStyle.call(null,n__15850,cljs.core.name.call(null,name),value);
var temp__3698__auto____15852 = cljs.core.next.call(null,G__15847__15851);

if(cljs.core.truth_(temp__3698__auto____15852))
{var G__15847__15853 = temp__3698__auto____15852;

{
var G__15856 = cljs.core.first.call(null,G__15847__15853);
var G__15857 = G__15847__15853;
n__15850 = G__15856;
G__15847__15851 = G__15857;
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
var G__15858__15860 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15858__15860))
{var n__15863 = cljs.core.first.call(null,G__15858__15860);
var G__15858__15865 = G__15858__15860;

while(true){
n__15863.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15866 = cljs.core.next.call(null,G__15858__15865);

if(cljs.core.truth_(temp__3698__auto____15866))
{var G__15858__15867 = temp__3698__auto____15866;

{
var G__15870 = cljs.core.first.call(null,G__15858__15867);
var G__15871 = G__15858__15867;
n__15863 = G__15870;
G__15858__15865 = G__15871;
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
var vec__15874__15875 = pair.split(/\s*:\s*/);
var k__15876 = cljs.core.nth.call(null,vec__15874__15875,0,null);
var v__15877 = cljs.core.nth.call(null,vec__15874__15875,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15878 = k__15876;

if(cljs.core.truth_(and__3546__auto____15878))
{return v__15877;
} else
{return and__3546__auto____15878;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15876.toLowerCase()),v__15877);
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
var node__15899 = domina.single_node.call(null,content);
var attrs__15900 = node__15899.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15889_SHARP_){
var attr__15901 = attrs__15900.item(p1__15889_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15901.nodeName.toLowerCase())],[attr__15901.nodeValue]);
}),cljs.core.range.call(null,attrs__15900.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15972__15974 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15972__15974))
{var G__15977__15979 = cljs.core.first.call(null,G__15972__15974);
var vec__15978__15980 = G__15977__15979;
var name__15981 = cljs.core.nth.call(null,vec__15978__15980,0,null);
var value__15982 = cljs.core.nth.call(null,vec__15978__15980,1,null);
var G__15972__15983 = G__15972__15974;

var G__15977__15984 = G__15977__15979;
var G__15972__15985 = G__15972__15983;

while(true){
var vec__15986__15987 = G__15977__15984;
var name__15988 = cljs.core.nth.call(null,vec__15986__15987,0,null);
var value__15989 = cljs.core.nth.call(null,vec__15986__15987,1,null);
var G__15972__15990 = G__15972__15985;

domina.set_style_BANG_.call(null,content,name__15988,value__15989);
var temp__3698__auto____15992 = cljs.core.next.call(null,G__15972__15990);

if(cljs.core.truth_(temp__3698__auto____15992))
{var G__15972__15993 = temp__3698__auto____15992;

{
var G__16022 = cljs.core.first.call(null,G__15972__15993);
var G__16024 = G__15972__15993;
G__15977__15984 = G__16022;
G__15972__15985 = G__16024;
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
var G__16026__16027 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16026__16027))
{var G__16029__16033 = cljs.core.first.call(null,G__16026__16027);
var vec__16030__16034 = G__16029__16033;
var name__16035 = cljs.core.nth.call(null,vec__16030__16034,0,null);
var value__16036 = cljs.core.nth.call(null,vec__16030__16034,1,null);
var G__16026__16037 = G__16026__16027;

var G__16029__16038 = G__16029__16033;
var G__16026__16039 = G__16026__16037;

while(true){
var vec__16040__16041 = G__16029__16038;
var name__16042 = cljs.core.nth.call(null,vec__16040__16041,0,null);
var value__16043 = cljs.core.nth.call(null,vec__16040__16041,1,null);
var G__16026__16044 = G__16026__16039;

domina.set_attr_BANG_.call(null,content,name__16042,value__16043);
var temp__3698__auto____16045 = cljs.core.next.call(null,G__16026__16044);

if(cljs.core.truth_(temp__3698__auto____16045))
{var G__16026__16046 = temp__3698__auto____16045;

{
var G__16047 = cljs.core.first.call(null,G__16026__16046);
var G__16048 = G__16026__16046;
G__16029__16038 = G__16047;
G__16026__16039 = G__16048;
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
var G__16051__16054 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16051__16054))
{var node__16056 = cljs.core.first.call(null,G__16051__16054);
var G__16051__16057 = G__16051__16054;

while(true){
goog.dom.classes.add.call(null,node__16056,class$);
var temp__3698__auto____16059 = cljs.core.next.call(null,G__16051__16057);

if(cljs.core.truth_(temp__3698__auto____16059))
{var G__16051__16060 = temp__3698__auto____16059;

{
var G__16064 = cljs.core.first.call(null,G__16051__16060);
var G__16065 = G__16051__16060;
node__16056 = G__16064;
G__16051__16057 = G__16065;
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
var G__16068__16071 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16068__16071))
{var node__16075 = cljs.core.first.call(null,G__16068__16071);
var G__16068__16076 = G__16068__16071;

while(true){
goog.dom.classes.remove.call(null,node__16075,class$);
var temp__3698__auto____16078 = cljs.core.next.call(null,G__16068__16076);

if(cljs.core.truth_(temp__3698__auto____16078))
{var G__16068__16079 = temp__3698__auto____16078;

{
var G__16082 = cljs.core.first.call(null,G__16068__16079);
var G__16083 = G__16068__16079;
node__16075 = G__16082;
G__16068__16076 = G__16083;
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
var text__16092 = (function (content){
return text.call(null,content,true);
});
var text__16093 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16092.call(this,content);
case  2 :
return text__16093.call(this,content,normalize);
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
var G__16097__16098 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16097__16098))
{var node__16099 = cljs.core.first.call(null,G__16097__16098);
var G__16097__16100 = G__16097__16098;

while(true){
goog.dom.setTextContent.call(null,node__16099,value);
var temp__3698__auto____16101 = cljs.core.next.call(null,G__16097__16100);

if(cljs.core.truth_(temp__3698__auto____16101))
{var G__16097__16102 = temp__3698__auto____16101;

{
var G__16103 = cljs.core.first.call(null,G__16097__16102);
var G__16104 = G__16097__16102;
node__16099 = G__16103;
G__16097__16100 = G__16104;
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
var G__16112__16113 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16112__16113))
{var node__16114 = cljs.core.first.call(null,G__16112__16113);
var G__16112__16115 = G__16112__16113;

while(true){
goog.dom.forms.setValue.call(null,node__16114,value);
var temp__3698__auto____16117 = cljs.core.next.call(null,G__16112__16115);

if(cljs.core.truth_(temp__3698__auto____16117))
{var G__16112__16118 = temp__3698__auto____16117;

{
var G__16122 = cljs.core.first.call(null,G__16112__16118);
var G__16123 = G__16112__16118;
node__16114 = G__16122;
G__16112__16115 = G__16123;
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
var G__16128__16129 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16128__16129))
{var node__16130 = cljs.core.first.call(null,G__16128__16129);
var G__16128__16131 = G__16128__16129;

while(true){
node__16130.innerHTML = value;
var temp__3698__auto____16132 = cljs.core.next.call(null,G__16128__16131);

if(cljs.core.truth_(temp__3698__auto____16132))
{var G__16128__16133 = temp__3698__auto____16132;

{
var G__16135 = cljs.core.first.call(null,G__16128__16133);
var G__16136 = G__16128__16133;
node__16130 = G__16135;
G__16128__16131 = G__16136;
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
var parents__16137 = domina.nodes.call(null,parent_content);
var children__16138 = domina.nodes.call(null,child_content);
var first_child__16214 = (function (){var frag__16139 = document.createDocumentFragment();

var G__16140__16142 = cljs.core.seq.call(null,children__16138);

if(cljs.core.truth_(G__16140__16142))
{var child__16144 = cljs.core.first.call(null,G__16140__16142);
var G__16140__16206 = G__16140__16142;

while(true){
frag__16139.appendChild(child__16144);
var temp__3698__auto____16211 = cljs.core.next.call(null,G__16140__16206);

if(cljs.core.truth_(temp__3698__auto____16211))
{var G__16140__16212 = temp__3698__auto____16211;

{
var G__16216 = cljs.core.first.call(null,G__16140__16212);
var G__16217 = G__16140__16212;
child__16144 = G__16216;
G__16140__16206 = G__16217;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16139;
})();
var other_children__16215 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16137) - 1),(function (){
return first_child__16214.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16137)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16138)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16137)))
{f.call(null,cljs.core.first.call(null,parents__16137),first_child__16214);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16126_SHARP_,p2__16127_SHARP_){
return f.call(null,p1__16126_SHARP_,p2__16127_SHARP_);
}),cljs.core.rest.call(null,parents__16137),other_children__16215));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16228 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16230 = (function (nl,n){
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
return lazy_nodelist__16228.call(this,nl);
case  2 :
return lazy_nodelist__16230.call(this,nl,n);
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
var inner_wrapper__16254 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16255 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16254));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16255),1)))
{return inner_wrapper__16254.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16254));
} else
{return children__16255;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16277__16278 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16279 = cljs.core.nth.call(null,vec__16277__16278,0,null);
var table_level__16280 = cljs.core.nth.call(null,vec__16277__16278,1,null);
var ___16281 = cljs.core.nthnext.call(null,vec__16277__16278,2);
var wrapper__16282 = domina.create_wrapper.call(null,table_level__16280);

domina.set_wrapper_html_BANG_.call(null,wrapper__16282,content);
return domina.extract_wrapper_dom.call(null,wrapper__16282,table_level__16280);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.lot_debug.call(null,cljs.core.str.call(null,content));
if(cljs.core.truth_((function (){var or__3548__auto____16299 = cljs.core.seq_QMARK_.call(null,content);

if(cljs.core.truth_(or__3548__auto____16299))
{return or__3548__auto____16299;
} else
{var x__6775__auto____16312 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16313 = x__6775__auto____16312;

if(cljs.core.truth_(and__3546__auto____16313))
{var and__3546__auto____16316 = x__6775__auto____16312.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16316))
{var and__3546__auto____16318 = x__6775__auto____16312.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16318))
{return cljs.core.not.call(null,x__6775__auto____16312.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16318;
}
} else
{return and__3546__auto____16316;
}
} else
{return and__3546__auto____16313;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6775__auto____16312);
}
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6775__auto____16337 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16338 = x__6775__auto____16337;

if(cljs.core.truth_(and__3546__auto____16338))
{var and__3546__auto____16339 = x__6775__auto____16337.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16339))
{var and__3546__auto____16340 = x__6775__auto____16337.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16340))
{return cljs.core.not.call(null,x__6775__auto____16337.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16340;
}
} else
{return and__3546__auto____16339;
}
} else
{return and__3546__auto____16338;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6775__auto____16337);
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
var G__16387 = null;
var G__16387__16388 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16387__16390 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16387 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16387__16388.call(this,nodelist,n);
case  3 :
return G__16387__16390.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16387;
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
var G__16408 = null;
var G__16408__16409 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16408__16411 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16408 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16408__16409.call(this,nodelist,n);
case  3 :
return G__16408__16411.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16408;
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
var G__16425 = null;
var G__16425__16426 = (function (coll,n){
return coll.item(n);
});
var G__16425__16427 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16425 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16425__16426.call(this,coll,n);
case  3 :
return G__16425__16427.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16425;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
