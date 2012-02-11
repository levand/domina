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
if(cljs.core.truth_((function (){var and__3546__auto____15591 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15591))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15591;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15592 = content;

if(cljs.core.truth_(and__3546__auto____15592))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15592;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15593 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15593))
{return or__3548__auto____15593;
} else
{var or__3548__auto____15594 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15594))
{return or__3548__auto____15594;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15595 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15595))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15595;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15596 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15596))
{return or__3548__auto____15596;
} else
{var or__3548__auto____15598 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15598))
{return or__3548__auto____15598;
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
if(cljs.core.truth_((void 0 === domina.t15658)))
{
/**
* @constructor
*/
domina.t15658 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15658.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15658");
});
domina.t15658.prototype.domina$DomContent$ = true;
domina.t15658.prototype.domina$DomContent$nodes = (function (_){
var this__15669 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15669.class_name));
});
domina.t15658.prototype.domina$DomContent$single_node = (function (_){
var this__15670 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15670.class_name));
});
domina.t15658.prototype.cljs$core$IMeta$ = true;
domina.t15658.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15672 = this;
return this__15672.__meta;
});
domina.t15658.prototype.cljs$core$IWithMeta$ = true;
domina.t15658.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15674 = this;
return (new domina.t15658(this__15674.class_name,this__15674.by_class,__meta));
});
domina.t15658;
} else
{}
return (new domina.t15658(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15681_SHARP_){
return p1__15681_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15685_SHARP_,p2__15686_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15685_SHARP_,p2__15686_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15690_SHARP_,p2__15689_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15689_SHARP_,p1__15690_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15692_SHARP_,p2__15691_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15691_SHARP_,p1__15692_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15694_SHARP_,p2__15693_SHARP_){
return goog.dom.replaceNode.call(null,p2__15693_SHARP_,p1__15694_SHARP_);
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
var s__15704 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15704))))
{return s__15704;
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
var G__15811__15814 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15811__15814))
{var n__15815 = cljs.core.first.call(null,G__15811__15814);
var G__15811__15817 = G__15811__15814;

while(true){
goog.style.setStyle.call(null,n__15815,cljs.core.name.call(null,name),value);
var temp__3698__auto____15818 = cljs.core.next.call(null,G__15811__15817);

if(cljs.core.truth_(temp__3698__auto____15818))
{var G__15811__15819 = temp__3698__auto____15818;

{
var G__15826 = cljs.core.first.call(null,G__15811__15819);
var G__15827 = G__15811__15819;
n__15815 = G__15826;
G__15811__15817 = G__15827;
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
var G__15828__15829 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15828__15829))
{var n__15830 = cljs.core.first.call(null,G__15828__15829);
var G__15828__15831 = G__15828__15829;

while(true){
n__15830.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15832 = cljs.core.next.call(null,G__15828__15831);

if(cljs.core.truth_(temp__3698__auto____15832))
{var G__15828__15833 = temp__3698__auto____15832;

{
var G__15834 = cljs.core.first.call(null,G__15828__15833);
var G__15835 = G__15828__15833;
n__15830 = G__15834;
G__15828__15831 = G__15835;
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
var vec__15836__15837 = pair.split(/\s*:\s*/);
var k__15838 = cljs.core.nth.call(null,vec__15836__15837,0,null);
var v__15839 = cljs.core.nth.call(null,vec__15836__15837,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15842 = k__15838;

if(cljs.core.truth_(and__3546__auto____15842))
{return v__15839;
} else
{return and__3546__auto____15842;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15838.toLowerCase()),v__15839);
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
var node__15857 = domina.single_node.call(null,content);
var attrs__15858 = node__15857.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15851_SHARP_){
var attr__15860 = attrs__15858.item(p1__15851_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15860.nodeName.toLowerCase())],[attr__15860.nodeValue]);
}),cljs.core.range.call(null,attrs__15858.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15868__15869 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15868__15869))
{var G__15871__15876 = cljs.core.first.call(null,G__15868__15869);
var vec__15875__15877 = G__15871__15876;
var name__15878 = cljs.core.nth.call(null,vec__15875__15877,0,null);
var value__15879 = cljs.core.nth.call(null,vec__15875__15877,1,null);
var G__15868__15880 = G__15868__15869;

var G__15871__15881 = G__15871__15876;
var G__15868__15882 = G__15868__15880;

while(true){
var vec__15883__15884 = G__15871__15881;
var name__15885 = cljs.core.nth.call(null,vec__15883__15884,0,null);
var value__15886 = cljs.core.nth.call(null,vec__15883__15884,1,null);
var G__15868__15887 = G__15868__15882;

domina.set_style_BANG_.call(null,content,name__15885,value__15886);
var temp__3698__auto____15890 = cljs.core.next.call(null,G__15868__15887);

if(cljs.core.truth_(temp__3698__auto____15890))
{var G__15868__15891 = temp__3698__auto____15890;

{
var G__15895 = cljs.core.first.call(null,G__15868__15891);
var G__15896 = G__15868__15891;
G__15871__15881 = G__15895;
G__15868__15882 = G__15896;
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
var G__15900__15902 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15900__15902))
{var G__15904__15908 = cljs.core.first.call(null,G__15900__15902);
var vec__15906__15909 = G__15904__15908;
var name__15910 = cljs.core.nth.call(null,vec__15906__15909,0,null);
var value__15911 = cljs.core.nth.call(null,vec__15906__15909,1,null);
var G__15900__15912 = G__15900__15902;

var G__15904__15913 = G__15904__15908;
var G__15900__15915 = G__15900__15912;

while(true){
var vec__15916__15917 = G__15904__15913;
var name__15919 = cljs.core.nth.call(null,vec__15916__15917,0,null);
var value__15920 = cljs.core.nth.call(null,vec__15916__15917,1,null);
var G__15900__15921 = G__15900__15915;

domina.set_attr_BANG_.call(null,content,name__15919,value__15920);
var temp__3698__auto____15924 = cljs.core.next.call(null,G__15900__15921);

if(cljs.core.truth_(temp__3698__auto____15924))
{var G__15900__15926 = temp__3698__auto____15924;

{
var G__15933 = cljs.core.first.call(null,G__15900__15926);
var G__15934 = G__15900__15926;
G__15904__15913 = G__15933;
G__15900__15915 = G__15934;
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
var G__15941__15942 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15941__15942))
{var node__15943 = cljs.core.first.call(null,G__15941__15942);
var G__15941__15944 = G__15941__15942;

while(true){
goog.dom.classes.add.call(null,node__15943,class$);
var temp__3698__auto____15945 = cljs.core.next.call(null,G__15941__15944);

if(cljs.core.truth_(temp__3698__auto____15945))
{var G__15941__15946 = temp__3698__auto____15945;

{
var G__15951 = cljs.core.first.call(null,G__15941__15946);
var G__15952 = G__15941__15946;
node__15943 = G__15951;
G__15941__15944 = G__15952;
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
var G__15956__15957 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15956__15957))
{var node__15958 = cljs.core.first.call(null,G__15956__15957);
var G__15956__15959 = G__15956__15957;

while(true){
goog.dom.classes.remove.call(null,node__15958,class$);
var temp__3698__auto____15960 = cljs.core.next.call(null,G__15956__15959);

if(cljs.core.truth_(temp__3698__auto____15960))
{var G__15956__15961 = temp__3698__auto____15960;

{
var G__15963 = cljs.core.first.call(null,G__15956__15961);
var G__15964 = G__15956__15961;
node__15958 = G__15963;
G__15956__15959 = G__15964;
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
var text__15968 = (function (content){
return text.call(null,content,true);
});
var text__15969 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15968.call(this,content);
case  2 :
return text__15969.call(this,content,normalize);
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
var G__15984__15988 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15984__15988))
{var node__15992 = cljs.core.first.call(null,G__15984__15988);
var G__15984__15993 = G__15984__15988;

while(true){
goog.dom.setTextContent.call(null,node__15992,value);
var temp__3698__auto____15995 = cljs.core.next.call(null,G__15984__15993);

if(cljs.core.truth_(temp__3698__auto____15995))
{var G__15984__15997 = temp__3698__auto____15995;

{
var G__16000 = cljs.core.first.call(null,G__15984__15997);
var G__16001 = G__15984__15997;
node__15992 = G__16000;
G__15984__15993 = G__16001;
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
var G__16007__16008 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16007__16008))
{var node__16009 = cljs.core.first.call(null,G__16007__16008);
var G__16007__16010 = G__16007__16008;

while(true){
goog.dom.forms.setValue.call(null,node__16009,value);
var temp__3698__auto____16011 = cljs.core.next.call(null,G__16007__16010);

if(cljs.core.truth_(temp__3698__auto____16011))
{var G__16007__16012 = temp__3698__auto____16011;

{
var G__16013 = cljs.core.first.call(null,G__16007__16012);
var G__16014 = G__16007__16012;
node__16009 = G__16013;
G__16007__16010 = G__16014;
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
var G__16017__16018 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16017__16018))
{var node__16019 = cljs.core.first.call(null,G__16017__16018);
var G__16017__16020 = G__16017__16018;

while(true){
node__16019.innerHTML = value;
var temp__3698__auto____16021 = cljs.core.next.call(null,G__16017__16020);

if(cljs.core.truth_(temp__3698__auto____16021))
{var G__16017__16022 = temp__3698__auto____16021;

{
var G__16024 = cljs.core.first.call(null,G__16017__16022);
var G__16025 = G__16017__16022;
node__16019 = G__16024;
G__16017__16020 = G__16025;
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
var parents__16026 = domina.nodes.call(null,parent_content);
var children__16027 = domina.nodes.call(null,child_content);
var first_child__16038 = (function (){var frag__16028 = document.createDocumentFragment();

var G__16029__16030 = cljs.core.seq.call(null,children__16027);

if(cljs.core.truth_(G__16029__16030))
{var child__16032 = cljs.core.first.call(null,G__16029__16030);
var G__16029__16033 = G__16029__16030;

while(true){
frag__16028.appendChild(child__16032);
var temp__3698__auto____16035 = cljs.core.next.call(null,G__16029__16033);

if(cljs.core.truth_(temp__3698__auto____16035))
{var G__16029__16036 = temp__3698__auto____16035;

{
var G__16043 = cljs.core.first.call(null,G__16029__16036);
var G__16044 = G__16029__16036;
child__16032 = G__16043;
G__16029__16033 = G__16044;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16028;
})();
var other_children__16039 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16026) - 1),(function (){
return first_child__16038.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16026)))
{f.call(null,cljs.core.first.call(null,parents__16026),first_child__16038);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16015_SHARP_,p2__16016_SHARP_){
return f.call(null,p1__16015_SHARP_,p2__16016_SHARP_);
}),cljs.core.rest.call(null,parents__16026),other_children__16039));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16163 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16164 = (function (nl,n){
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
return lazy_nodelist__16163.call(this,nl);
case  2 :
return lazy_nodelist__16164.call(this,nl,n);
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
var inner_wrapper__16173 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16175 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16173));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16175),1)))
{return inner_wrapper__16173.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16173));
} else
{return children__16175;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16181__16183 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16184 = cljs.core.nth.call(null,vec__16181__16183,0,null);
var table_level__16185 = cljs.core.nth.call(null,vec__16181__16183,1,null);
var ___16186 = cljs.core.nthnext.call(null,vec__16181__16183,2);
var wrapper__16187 = domina.create_wrapper.call(null,table_level__16185);

domina.set_wrapper_html_BANG_.call(null,wrapper__16187,content);
return domina.extract_wrapper_dom.call(null,wrapper__16187,table_level__16185);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6765__auto____16211 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16214 = x__6765__auto____16211;

if(cljs.core.truth_(and__3546__auto____16214))
{var and__3546__auto____16218 = x__6765__auto____16211.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16218))
{var and__3546__auto____16219 = x__6765__auto____16211.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16219))
{return cljs.core.not.call(null,x__6765__auto____16211.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16219;
}
} else
{return and__3546__auto____16218;
}
} else
{return and__3546__auto____16214;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16211);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6765__auto____16223 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16225 = x__6765__auto____16223;

if(cljs.core.truth_(and__3546__auto____16225))
{var and__3546__auto____16226 = x__6765__auto____16223.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16226))
{var and__3546__auto____16229 = x__6765__auto____16223.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16229))
{return cljs.core.not.call(null,x__6765__auto____16223.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16229;
}
} else
{return and__3546__auto____16226;
}
} else
{return and__3546__auto____16225;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16223);
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
var G__16290 = null;
var G__16290__16291 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16290__16292 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16290 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16290__16291.call(this,nodelist,n);
case  3 :
return G__16290__16292.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16290;
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
var G__16302 = null;
var G__16302__16303 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16302__16304 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16302 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16302__16303.call(this,nodelist,n);
case  3 :
return G__16302__16304.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16302;
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
var G__16316 = null;
var G__16316__16317 = (function (coll,n){
return coll.item(n);
});
var G__16316__16318 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16316 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16316__16317.call(this,coll,n);
case  3 :
return G__16316__16318.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16316;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
