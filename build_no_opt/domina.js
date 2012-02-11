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
if(cljs.core.truth_((function (){var and__3546__auto____15768 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15768))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15768;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15770 = content;

if(cljs.core.truth_(and__3546__auto____15770))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15770;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15771 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15771))
{return or__3548__auto____15771;
} else
{var or__3548__auto____15772 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15772))
{return or__3548__auto____15772;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15774 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15774))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15774;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15776 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15776))
{return or__3548__auto____15776;
} else
{var or__3548__auto____15777 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15777))
{return or__3548__auto____15777;
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
if(cljs.core.truth_((void 0 === domina.t15792)))
{
/**
* @constructor
*/
domina.t15792 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15792.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15792");
});
domina.t15792.prototype.domina$DomContent$ = true;
domina.t15792.prototype.domina$DomContent$nodes = (function (_){
var this__15802 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15802.class_name));
});
domina.t15792.prototype.domina$DomContent$single_node = (function (_){
var this__15804 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15804.class_name));
});
domina.t15792.prototype.cljs$core$IMeta$ = true;
domina.t15792.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15806 = this;
return this__15806.__meta;
});
domina.t15792.prototype.cljs$core$IWithMeta$ = true;
domina.t15792.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15807 = this;
return (new domina.t15792(this__15807.class_name,this__15807.by_class,__meta));
});
domina.t15792;
} else
{}
return (new domina.t15792(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15817_SHARP_){
return p1__15817_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15822_SHARP_,p2__15823_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15822_SHARP_,p2__15823_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15831_SHARP_,p2__15830_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15830_SHARP_,p1__15831_SHARP_);
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
var s__15848 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15848))))
{return s__15848;
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
var G__15856__15857 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15856__15857))
{var n__15858 = cljs.core.first.call(null,G__15856__15857);
var G__15856__15859 = G__15856__15857;

while(true){
goog.style.setStyle.call(null,n__15858,cljs.core.name.call(null,name),value);
var temp__3698__auto____15860 = cljs.core.next.call(null,G__15856__15859);

if(cljs.core.truth_(temp__3698__auto____15860))
{var G__15856__15861 = temp__3698__auto____15860;

{
var G__15864 = cljs.core.first.call(null,G__15856__15861);
var G__15867 = G__15856__15861;
n__15858 = G__15864;
G__15856__15859 = G__15867;
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
var G__15870__15871 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15870__15871))
{var n__15872 = cljs.core.first.call(null,G__15870__15871);
var G__15870__15873 = G__15870__15871;

while(true){
n__15872.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15874 = cljs.core.next.call(null,G__15870__15873);

if(cljs.core.truth_(temp__3698__auto____15874))
{var G__15870__15875 = temp__3698__auto____15874;

{
var G__15884 = cljs.core.first.call(null,G__15870__15875);
var G__15885 = G__15870__15875;
n__15872 = G__15884;
G__15870__15873 = G__15885;
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
var vec__15887__15888 = pair.split(/\s*:\s*/);
var k__15890 = cljs.core.nth.call(null,vec__15887__15888,0,null);
var v__15891 = cljs.core.nth.call(null,vec__15887__15888,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15893 = k__15890;

if(cljs.core.truth_(and__3546__auto____15893))
{return v__15891;
} else
{return and__3546__auto____15893;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15890.toLowerCase()),v__15891);
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
var node__15901 = domina.single_node.call(null,content);
var attrs__15902 = node__15901.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15896_SHARP_){
var attr__15903 = attrs__15902.item(p1__15896_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15903.nodeName.toLowerCase())],[attr__15903.nodeValue]);
}),cljs.core.range.call(null,attrs__15902.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15913__15915 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15913__15915))
{var G__15917__15919 = cljs.core.first.call(null,G__15913__15915);
var vec__15918__15920 = G__15917__15919;
var name__15921 = cljs.core.nth.call(null,vec__15918__15920,0,null);
var value__15922 = cljs.core.nth.call(null,vec__15918__15920,1,null);
var G__15913__15923 = G__15913__15915;

var G__15917__15924 = G__15917__15919;
var G__15913__15925 = G__15913__15923;

while(true){
var vec__15926__15927 = G__15917__15924;
var name__15928 = cljs.core.nth.call(null,vec__15926__15927,0,null);
var value__15929 = cljs.core.nth.call(null,vec__15926__15927,1,null);
var G__15913__15930 = G__15913__15925;

domina.set_style_BANG_.call(null,content,name__15928,value__15929);
var temp__3698__auto____15933 = cljs.core.next.call(null,G__15913__15930);

if(cljs.core.truth_(temp__3698__auto____15933))
{var G__15913__15934 = temp__3698__auto____15933;

{
var G__15938 = cljs.core.first.call(null,G__15913__15934);
var G__15939 = G__15913__15934;
G__15917__15924 = G__15938;
G__15913__15925 = G__15939;
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
var G__15940__15941 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15940__15941))
{var G__15947__15950 = cljs.core.first.call(null,G__15940__15941);
var vec__15949__15951 = G__15947__15950;
var name__15952 = cljs.core.nth.call(null,vec__15949__15951,0,null);
var value__15953 = cljs.core.nth.call(null,vec__15949__15951,1,null);
var G__15940__15954 = G__15940__15941;

var G__15947__15955 = G__15947__15950;
var G__15940__15956 = G__15940__15954;

while(true){
var vec__15957__15958 = G__15947__15955;
var name__15959 = cljs.core.nth.call(null,vec__15957__15958,0,null);
var value__15960 = cljs.core.nth.call(null,vec__15957__15958,1,null);
var G__15940__15961 = G__15940__15956;

domina.set_attr_BANG_.call(null,content,name__15959,value__15960);
var temp__3698__auto____15962 = cljs.core.next.call(null,G__15940__15961);

if(cljs.core.truth_(temp__3698__auto____15962))
{var G__15940__15963 = temp__3698__auto____15962;

{
var G__15966 = cljs.core.first.call(null,G__15940__15963);
var G__15967 = G__15940__15963;
G__15947__15955 = G__15966;
G__15940__15956 = G__15967;
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
var G__15968__15969 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15968__15969))
{var node__15970 = cljs.core.first.call(null,G__15968__15969);
var G__15968__15971 = G__15968__15969;

while(true){
goog.dom.classes.add.call(null,node__15970,class$);
var temp__3698__auto____15973 = cljs.core.next.call(null,G__15968__15971);

if(cljs.core.truth_(temp__3698__auto____15973))
{var G__15968__15976 = temp__3698__auto____15973;

{
var G__15980 = cljs.core.first.call(null,G__15968__15976);
var G__15981 = G__15968__15976;
node__15970 = G__15980;
G__15968__15971 = G__15981;
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
var G__15984__15985 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15984__15985))
{var node__15987 = cljs.core.first.call(null,G__15984__15985);
var G__15984__15988 = G__15984__15985;

while(true){
goog.dom.classes.remove.call(null,node__15987,class$);
var temp__3698__auto____15990 = cljs.core.next.call(null,G__15984__15988);

if(cljs.core.truth_(temp__3698__auto____15990))
{var G__15984__15991 = temp__3698__auto____15990;

{
var G__15999 = cljs.core.first.call(null,G__15984__15991);
var G__16000 = G__15984__15991;
node__15987 = G__15999;
G__15984__15988 = G__16000;
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
var text__16006 = (function (content){
return text.call(null,content,true);
});
var text__16007 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16006.call(this,content);
case  2 :
return text__16007.call(this,content,normalize);
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
var G__16010__16013 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16010__16013))
{var node__16014 = cljs.core.first.call(null,G__16010__16013);
var G__16010__16015 = G__16010__16013;

while(true){
goog.dom.setTextContent.call(null,node__16014,value);
var temp__3698__auto____16018 = cljs.core.next.call(null,G__16010__16015);

if(cljs.core.truth_(temp__3698__auto____16018))
{var G__16010__16019 = temp__3698__auto____16018;

{
var G__16026 = cljs.core.first.call(null,G__16010__16019);
var G__16027 = G__16010__16019;
node__16014 = G__16026;
G__16010__16015 = G__16027;
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
var G__16030__16031 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16030__16031))
{var node__16034 = cljs.core.first.call(null,G__16030__16031);
var G__16030__16059 = G__16030__16031;

while(true){
goog.dom.forms.setValue.call(null,node__16034,value);
var temp__3698__auto____16063 = cljs.core.next.call(null,G__16030__16059);

if(cljs.core.truth_(temp__3698__auto____16063))
{var G__16030__16066 = temp__3698__auto____16063;

{
var G__16084 = cljs.core.first.call(null,G__16030__16066);
var G__16085 = G__16030__16066;
node__16034 = G__16084;
G__16030__16059 = G__16085;
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
var G__16096__16097 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16096__16097))
{var node__16100 = cljs.core.first.call(null,G__16096__16097);
var G__16096__16101 = G__16096__16097;

while(true){
node__16100.innerHTML = value;
var temp__3698__auto____16105 = cljs.core.next.call(null,G__16096__16101);

if(cljs.core.truth_(temp__3698__auto____16105))
{var G__16096__16108 = temp__3698__auto____16105;

{
var G__16109 = cljs.core.first.call(null,G__16096__16108);
var G__16110 = G__16096__16108;
node__16100 = G__16109;
G__16096__16101 = G__16110;
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
var parents__16114 = domina.nodes.call(null,parent_content);
var children__16116 = domina.nodes.call(null,child_content);
var first_child__16138 = (function (){var frag__16118 = document.createDocumentFragment();

var G__16120__16123 = cljs.core.seq.call(null,children__16116);

if(cljs.core.truth_(G__16120__16123))
{var child__16128 = cljs.core.first.call(null,G__16120__16123);
var G__16120__16130 = G__16120__16123;

while(true){
frag__16118.appendChild(child__16128);
var temp__3698__auto____16135 = cljs.core.next.call(null,G__16120__16130);

if(cljs.core.truth_(temp__3698__auto____16135))
{var G__16120__16136 = temp__3698__auto____16135;

{
var G__16183 = cljs.core.first.call(null,G__16120__16136);
var G__16184 = G__16120__16136;
child__16128 = G__16183;
G__16120__16130 = G__16184;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16118;
})();
var other_children__16140 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16114) - 1),(function (){
return first_child__16138.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16114)))
{f.call(null,cljs.core.first.call(null,parents__16114),first_child__16138);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16092_SHARP_,p2__16095_SHARP_){
return f.call(null,p1__16092_SHARP_,p2__16095_SHARP_);
}),cljs.core.rest.call(null,parents__16114),other_children__16140));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16192 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16193 = (function (nl,n){
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
return lazy_nodelist__16192.call(this,nl);
case  2 :
return lazy_nodelist__16193.call(this,nl,n);
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
var inner_wrapper__16227 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16229 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16227));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16229),1)))
{return inner_wrapper__16227.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16227));
} else
{return children__16229;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16243__16246 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16248 = cljs.core.nth.call(null,vec__16243__16246,0,null);
var table_level__16250 = cljs.core.nth.call(null,vec__16243__16246,1,null);
var ___16252 = cljs.core.nthnext.call(null,vec__16243__16246,2);
var wrapper__16254 = domina.create_wrapper.call(null,table_level__16250);

domina.set_wrapper_html_BANG_.call(null,wrapper__16254,content);
return domina.extract_wrapper_dom.call(null,wrapper__16254,table_level__16250);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6721__auto____16264 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16267 = x__6721__auto____16264;

if(cljs.core.truth_(and__3546__auto____16267))
{var and__3546__auto____16269 = x__6721__auto____16264.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16269))
{var and__3546__auto____16271 = x__6721__auto____16264.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16271))
{return cljs.core.not.call(null,x__6721__auto____16264.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16271;
}
} else
{return and__3546__auto____16269;
}
} else
{return and__3546__auto____16267;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6721__auto____16264);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6721__auto____16272 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16273 = x__6721__auto____16272;

if(cljs.core.truth_(and__3546__auto____16273))
{var and__3546__auto____16277 = x__6721__auto____16272.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16277))
{var and__3546__auto____16280 = x__6721__auto____16272.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16280))
{return cljs.core.not.call(null,x__6721__auto____16272.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16280;
}
} else
{return and__3546__auto____16277;
}
} else
{return and__3546__auto____16273;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6721__auto____16272);
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
var G__16340 = null;
var G__16340__16341 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16340__16342 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16340 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16340__16341.call(this,nodelist,n);
case  3 :
return G__16340__16342.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16340;
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
var G__16349 = null;
var G__16349__16350 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16349__16351 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16349 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16349__16350.call(this,nodelist,n);
case  3 :
return G__16349__16351.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16349;
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
var G__16353 = null;
var G__16353__16354 = (function (coll,n){
return coll.item(n);
});
var G__16353__16355 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16353 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16353__16354.call(this,coll,n);
case  3 :
return G__16353__16355.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16353;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
