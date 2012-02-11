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
if(cljs.core.truth_((function (){var and__3546__auto____15742 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15742))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15742;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15747 = content;

if(cljs.core.truth_(and__3546__auto____15747))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15747;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15749 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15749))
{return or__3548__auto____15749;
} else
{var or__3548__auto____15751 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15751))
{return or__3548__auto____15751;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15757 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15757))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15757;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15761 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15761))
{return or__3548__auto____15761;
} else
{var or__3548__auto____15762 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15762))
{return or__3548__auto____15762;
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
if(cljs.core.truth_((void 0 === domina.t15775)))
{
/**
* @constructor
*/
domina.t15775 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15775.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15775");
});
domina.t15775.prototype.domina$DomContent$ = true;
domina.t15775.prototype.domina$DomContent$nodes = (function (_){
var this__15781 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15781.class_name));
});
domina.t15775.prototype.domina$DomContent$single_node = (function (_){
var this__15783 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15783.class_name));
});
domina.t15775.prototype.cljs$core$IMeta$ = true;
domina.t15775.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15786 = this;
return this__15786.__meta;
});
domina.t15775.prototype.cljs$core$IWithMeta$ = true;
domina.t15775.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15789 = this;
return (new domina.t15775(this__15789.class_name,this__15789.by_class,__meta));
});
domina.t15775;
} else
{}
return (new domina.t15775(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15793_SHARP_){
return p1__15793_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15799_SHARP_,p2__15800_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15799_SHARP_,p2__15800_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15806_SHARP_,p2__15805_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15805_SHARP_,p1__15806_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15815_SHARP_,p2__15814_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15814_SHARP_,p1__15815_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15817_SHARP_,p2__15816_SHARP_){
return goog.dom.replaceNode.call(null,p2__15816_SHARP_,p1__15817_SHARP_);
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
var s__15832 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15832))))
{return s__15832;
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
var G__15838__15839 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15838__15839))
{var n__15840 = cljs.core.first.call(null,G__15838__15839);
var G__15838__15841 = G__15838__15839;

while(true){
goog.style.setStyle.call(null,n__15840,cljs.core.name.call(null,name),value);
var temp__3698__auto____15842 = cljs.core.next.call(null,G__15838__15841);

if(cljs.core.truth_(temp__3698__auto____15842))
{var G__15838__15843 = temp__3698__auto____15842;

{
var G__15844 = cljs.core.first.call(null,G__15838__15843);
var G__15846 = G__15838__15843;
n__15840 = G__15844;
G__15838__15841 = G__15846;
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
var G__15851__15853 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15851__15853))
{var n__15854 = cljs.core.first.call(null,G__15851__15853);
var G__15851__15855 = G__15851__15853;

while(true){
n__15854.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15856 = cljs.core.next.call(null,G__15851__15855);

if(cljs.core.truth_(temp__3698__auto____15856))
{var G__15851__15857 = temp__3698__auto____15856;

{
var G__15860 = cljs.core.first.call(null,G__15851__15857);
var G__15862 = G__15851__15857;
n__15854 = G__15860;
G__15851__15855 = G__15862;
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
var vec__15867__15869 = pair.split(/\s*:\s*/);
var k__15871 = cljs.core.nth.call(null,vec__15867__15869,0,null);
var v__15872 = cljs.core.nth.call(null,vec__15867__15869,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15873 = k__15871;

if(cljs.core.truth_(and__3546__auto____15873))
{return v__15872;
} else
{return and__3546__auto____15873;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15871.toLowerCase()),v__15872);
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
var node__15888 = domina.single_node.call(null,content);
var attrs__15889 = node__15888.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15884_SHARP_){
var attr__15891 = attrs__15889.item(p1__15884_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15891.nodeName.toLowerCase())],[attr__15891.nodeValue]);
}),cljs.core.range.call(null,attrs__15889.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15895__15896 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15895__15896))
{var G__15898__15900 = cljs.core.first.call(null,G__15895__15896);
var vec__15899__15901 = G__15898__15900;
var name__15902 = cljs.core.nth.call(null,vec__15899__15901,0,null);
var value__15903 = cljs.core.nth.call(null,vec__15899__15901,1,null);
var G__15895__15904 = G__15895__15896;

var G__15898__15905 = G__15898__15900;
var G__15895__15906 = G__15895__15904;

while(true){
var vec__15907__15908 = G__15898__15905;
var name__15909 = cljs.core.nth.call(null,vec__15907__15908,0,null);
var value__15910 = cljs.core.nth.call(null,vec__15907__15908,1,null);
var G__15895__15911 = G__15895__15906;

domina.set_style_BANG_.call(null,content,name__15909,value__15910);
var temp__3698__auto____15912 = cljs.core.next.call(null,G__15895__15911);

if(cljs.core.truth_(temp__3698__auto____15912))
{var G__15895__15914 = temp__3698__auto____15912;

{
var G__15928 = cljs.core.first.call(null,G__15895__15914);
var G__15929 = G__15895__15914;
G__15898__15905 = G__15928;
G__15895__15906 = G__15929;
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
var G__15935__15937 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15935__15937))
{var G__15940__15943 = cljs.core.first.call(null,G__15935__15937);
var vec__15941__15944 = G__15940__15943;
var name__15945 = cljs.core.nth.call(null,vec__15941__15944,0,null);
var value__15947 = cljs.core.nth.call(null,vec__15941__15944,1,null);
var G__15935__15948 = G__15935__15937;

var G__15940__15949 = G__15940__15943;
var G__15935__15950 = G__15935__15948;

while(true){
var vec__15951__15952 = G__15940__15949;
var name__15953 = cljs.core.nth.call(null,vec__15951__15952,0,null);
var value__15954 = cljs.core.nth.call(null,vec__15951__15952,1,null);
var G__15935__15955 = G__15935__15950;

domina.set_attr_BANG_.call(null,content,name__15953,value__15954);
var temp__3698__auto____15956 = cljs.core.next.call(null,G__15935__15955);

if(cljs.core.truth_(temp__3698__auto____15956))
{var G__15935__15957 = temp__3698__auto____15956;

{
var G__15978 = cljs.core.first.call(null,G__15935__15957);
var G__15979 = G__15935__15957;
G__15940__15949 = G__15978;
G__15935__15950 = G__15979;
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
var G__15991__15992 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15991__15992))
{var node__15993 = cljs.core.first.call(null,G__15991__15992);
var G__15991__15994 = G__15991__15992;

while(true){
goog.dom.classes.add.call(null,node__15993,class$);
var temp__3698__auto____15995 = cljs.core.next.call(null,G__15991__15994);

if(cljs.core.truth_(temp__3698__auto____15995))
{var G__15991__15999 = temp__3698__auto____15995;

{
var G__16001 = cljs.core.first.call(null,G__15991__15999);
var G__16002 = G__15991__15999;
node__15993 = G__16001;
G__15991__15994 = G__16002;
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
var G__16004__16005 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16004__16005))
{var node__16008 = cljs.core.first.call(null,G__16004__16005);
var G__16004__16009 = G__16004__16005;

while(true){
goog.dom.classes.remove.call(null,node__16008,class$);
var temp__3698__auto____16011 = cljs.core.next.call(null,G__16004__16009);

if(cljs.core.truth_(temp__3698__auto____16011))
{var G__16004__16012 = temp__3698__auto____16011;

{
var G__16019 = cljs.core.first.call(null,G__16004__16012);
var G__16020 = G__16004__16012;
node__16008 = G__16019;
G__16004__16009 = G__16020;
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
var text__16024 = (function (content){
return text.call(null,content,true);
});
var text__16025 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16024.call(this,content);
case  2 :
return text__16025.call(this,content,normalize);
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
var G__16027__16030 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16027__16030))
{var node__16031 = cljs.core.first.call(null,G__16027__16030);
var G__16027__16034 = G__16027__16030;

while(true){
goog.dom.setTextContent.call(null,node__16031,value);
var temp__3698__auto____16037 = cljs.core.next.call(null,G__16027__16034);

if(cljs.core.truth_(temp__3698__auto____16037))
{var G__16027__16040 = temp__3698__auto____16037;

{
var G__16043 = cljs.core.first.call(null,G__16027__16040);
var G__16044 = G__16027__16040;
node__16031 = G__16043;
G__16027__16034 = G__16044;
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
var G__16047__16048 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16047__16048))
{var node__16049 = cljs.core.first.call(null,G__16047__16048);
var G__16047__16050 = G__16047__16048;

while(true){
goog.dom.forms.setValue.call(null,node__16049,value);
var temp__3698__auto____16051 = cljs.core.next.call(null,G__16047__16050);

if(cljs.core.truth_(temp__3698__auto____16051))
{var G__16047__16052 = temp__3698__auto____16051;

{
var G__16056 = cljs.core.first.call(null,G__16047__16052);
var G__16057 = G__16047__16052;
node__16049 = G__16056;
G__16047__16050 = G__16057;
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
var G__16092__16093 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16092__16093))
{var node__16094 = cljs.core.first.call(null,G__16092__16093);
var G__16092__16095 = G__16092__16093;

while(true){
node__16094.innerHTML = value;
var temp__3698__auto____16096 = cljs.core.next.call(null,G__16092__16095);

if(cljs.core.truth_(temp__3698__auto____16096))
{var G__16092__16164 = temp__3698__auto____16096;

{
var G__16177 = cljs.core.first.call(null,G__16092__16164);
var G__16178 = G__16092__16164;
node__16094 = G__16177;
G__16092__16095 = G__16178;
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
var parents__16179 = domina.nodes.call(null,parent_content);
var children__16180 = domina.nodes.call(null,child_content);
var first_child__16188 = (function (){var frag__16181 = document.createDocumentFragment();

var G__16182__16183 = cljs.core.seq.call(null,children__16180);

if(cljs.core.truth_(G__16182__16183))
{var child__16184 = cljs.core.first.call(null,G__16182__16183);
var G__16182__16185 = G__16182__16183;

while(true){
frag__16181.appendChild(child__16184);
var temp__3698__auto____16186 = cljs.core.next.call(null,G__16182__16185);

if(cljs.core.truth_(temp__3698__auto____16186))
{var G__16182__16187 = temp__3698__auto____16186;

{
var G__16190 = cljs.core.first.call(null,G__16182__16187);
var G__16191 = G__16182__16187;
child__16184 = G__16190;
G__16182__16185 = G__16191;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16181;
})();
var other_children__16189 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16179) - 1),(function (){
return first_child__16188.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16179)))
{f.call(null,cljs.core.first.call(null,parents__16179),first_child__16188);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16064_SHARP_,p2__16065_SHARP_){
return f.call(null,p1__16064_SHARP_,p2__16065_SHARP_);
}),cljs.core.rest.call(null,parents__16179),other_children__16189));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16194 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16195 = (function (nl,n){
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
return lazy_nodelist__16194.call(this,nl);
case  2 :
return lazy_nodelist__16195.call(this,nl,n);
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
var inner_wrapper__16210 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16211 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16210));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16211),1)))
{return inner_wrapper__16210.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16210));
} else
{return children__16211;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16215__16218 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16220 = cljs.core.nth.call(null,vec__16215__16218,0,null);
var table_level__16221 = cljs.core.nth.call(null,vec__16215__16218,1,null);
var ___16223 = cljs.core.nthnext.call(null,vec__16215__16218,2);
var wrapper__16224 = domina.create_wrapper.call(null,table_level__16221);

domina.set_wrapper_html_BANG_.call(null,wrapper__16224,content);
return domina.extract_wrapper_dom.call(null,wrapper__16224,table_level__16221);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6703__auto____16230 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16231 = x__6703__auto____16230;

if(cljs.core.truth_(and__3546__auto____16231))
{var and__3546__auto____16232 = x__6703__auto____16230.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16232))
{var and__3546__auto____16233 = x__6703__auto____16230.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16233))
{return cljs.core.not.call(null,x__6703__auto____16230.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16233;
}
} else
{return and__3546__auto____16232;
}
} else
{return and__3546__auto____16231;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6703__auto____16230);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6703__auto____16240 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16241 = x__6703__auto____16240;

if(cljs.core.truth_(and__3546__auto____16241))
{var and__3546__auto____16292 = x__6703__auto____16240.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16292))
{var and__3546__auto____16295 = x__6703__auto____16240.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16295))
{return cljs.core.not.call(null,x__6703__auto____16240.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16295;
}
} else
{return and__3546__auto____16292;
}
} else
{return and__3546__auto____16241;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6703__auto____16240);
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
var G__16309 = null;
var G__16309__16310 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16309__16311 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16309 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16309__16310.call(this,nodelist,n);
case  3 :
return G__16309__16311.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16309;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{alert('extending StaticNodeList');
StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16315 = null;
var G__16315__16316 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16315__16317 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16315 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16315__16316.call(this,nodelist,n);
case  3 :
return G__16315__16317.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16315;
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
var G__16327 = null;
var G__16327__16328 = (function (coll,n){
return coll.item(n);
});
var G__16327__16329 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16327 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16327__16328.call(this,coll,n);
case  3 :
return G__16327__16329.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16327;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
