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
if(cljs.core.truth_((function (){var and__3546__auto____15706 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15706))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15706;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15709 = content;

if(cljs.core.truth_(and__3546__auto____15709))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15709;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15711 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15711))
{return or__3548__auto____15711;
} else
{var or__3548__auto____15713 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15713))
{return or__3548__auto____15713;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15715 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15715))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15715;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15716 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15716))
{return or__3548__auto____15716;
} else
{var or__3548__auto____15718 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15718))
{return or__3548__auto____15718;
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
if(cljs.core.truth_((void 0 === domina.t15732)))
{
/**
* @constructor
*/
domina.t15732 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15732.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15732");
});
domina.t15732.prototype.domina$DomContent$ = true;
domina.t15732.prototype.domina$DomContent$nodes = (function (_){
var this__15733 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15733.class_name));
});
domina.t15732.prototype.domina$DomContent$single_node = (function (_){
var this__15734 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15734.class_name));
});
domina.t15732.prototype.cljs$core$IMeta$ = true;
domina.t15732.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15767 = this;
return this__15767.__meta;
});
domina.t15732.prototype.cljs$core$IWithMeta$ = true;
domina.t15732.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15770 = this;
return (new domina.t15732(this__15770.class_name,this__15770.by_class,__meta));
});
domina.t15732;
} else
{}
return (new domina.t15732(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15772_SHARP_){
return p1__15772_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15775_SHARP_,p2__15776_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15775_SHARP_,p2__15776_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15782_SHARP_,p2__15781_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15781_SHARP_,p1__15782_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15786_SHARP_,p2__15785_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15785_SHARP_,p1__15786_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15788_SHARP_,p2__15787_SHARP_){
return goog.dom.replaceNode.call(null,p2__15787_SHARP_,p1__15788_SHARP_);
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
var s__15804 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15804))))
{return s__15804;
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
var G__15805__15806 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15805__15806))
{var n__15807 = cljs.core.first.call(null,G__15805__15806);
var G__15805__15808 = G__15805__15806;

while(true){
goog.style.setStyle.call(null,n__15807,cljs.core.name.call(null,name),value);
var temp__3698__auto____15809 = cljs.core.next.call(null,G__15805__15808);

if(cljs.core.truth_(temp__3698__auto____15809))
{var G__15805__15810 = temp__3698__auto____15809;

{
var G__15811 = cljs.core.first.call(null,G__15805__15810);
var G__15812 = G__15805__15810;
n__15807 = G__15811;
G__15805__15808 = G__15812;
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
var G__15814__15815 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15814__15815))
{var n__15816 = cljs.core.first.call(null,G__15814__15815);
var G__15814__15817 = G__15814__15815;

while(true){
n__15816.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15818 = cljs.core.next.call(null,G__15814__15817);

if(cljs.core.truth_(temp__3698__auto____15818))
{var G__15814__15819 = temp__3698__auto____15818;

{
var G__15832 = cljs.core.first.call(null,G__15814__15819);
var G__15833 = G__15814__15819;
n__15816 = G__15832;
G__15814__15817 = G__15833;
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
var vec__15838__15839 = pair.split(/\s*:\s*/);
var k__15840 = cljs.core.nth.call(null,vec__15838__15839,0,null);
var v__15841 = cljs.core.nth.call(null,vec__15838__15839,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15842 = k__15840;

if(cljs.core.truth_(and__3546__auto____15842))
{return v__15841;
} else
{return and__3546__auto____15842;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15840.toLowerCase()),v__15841);
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
var node__15880 = domina.single_node.call(null,content);
var attrs__15881 = node__15880.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15877_SHARP_){
var attr__15883 = attrs__15881.item(p1__15877_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15883.nodeName.toLowerCase())],[attr__15883.nodeValue]);
}),cljs.core.range.call(null,attrs__15881.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15894__15895 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15894__15895))
{var G__15897__15899 = cljs.core.first.call(null,G__15894__15895);
var vec__15898__15900 = G__15897__15899;
var name__15901 = cljs.core.nth.call(null,vec__15898__15900,0,null);
var value__15902 = cljs.core.nth.call(null,vec__15898__15900,1,null);
var G__15894__15903 = G__15894__15895;

var G__15897__15904 = G__15897__15899;
var G__15894__15905 = G__15894__15903;

while(true){
var vec__15906__15907 = G__15897__15904;
var name__15908 = cljs.core.nth.call(null,vec__15906__15907,0,null);
var value__15909 = cljs.core.nth.call(null,vec__15906__15907,1,null);
var G__15894__15910 = G__15894__15905;

domina.set_style_BANG_.call(null,content,name__15908,value__15909);
var temp__3698__auto____15915 = cljs.core.next.call(null,G__15894__15910);

if(cljs.core.truth_(temp__3698__auto____15915))
{var G__15894__15916 = temp__3698__auto____15915;

{
var G__15950 = cljs.core.first.call(null,G__15894__15916);
var G__15951 = G__15894__15916;
G__15897__15904 = G__15950;
G__15894__15905 = G__15951;
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
var G__15952__15953 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15952__15953))
{var G__15955__15961 = cljs.core.first.call(null,G__15952__15953);
var vec__15956__15962 = G__15955__15961;
var name__15963 = cljs.core.nth.call(null,vec__15956__15962,0,null);
var value__15964 = cljs.core.nth.call(null,vec__15956__15962,1,null);
var G__15952__15965 = G__15952__15953;

var G__15955__15966 = G__15955__15961;
var G__15952__15967 = G__15952__15965;

while(true){
var vec__15969__15970 = G__15955__15966;
var name__15972 = cljs.core.nth.call(null,vec__15969__15970,0,null);
var value__15973 = cljs.core.nth.call(null,vec__15969__15970,1,null);
var G__15952__15974 = G__15952__15967;

domina.set_attr_BANG_.call(null,content,name__15972,value__15973);
var temp__3698__auto____15978 = cljs.core.next.call(null,G__15952__15974);

if(cljs.core.truth_(temp__3698__auto____15978))
{var G__15952__15981 = temp__3698__auto____15978;

{
var G__16004 = cljs.core.first.call(null,G__15952__15981);
var G__16005 = G__15952__15981;
G__15955__15966 = G__16004;
G__15952__15967 = G__16005;
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
var G__16008__16009 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16008__16009))
{var node__16010 = cljs.core.first.call(null,G__16008__16009);
var G__16008__16011 = G__16008__16009;

while(true){
goog.dom.classes.add.call(null,node__16010,class$);
var temp__3698__auto____16012 = cljs.core.next.call(null,G__16008__16011);

if(cljs.core.truth_(temp__3698__auto____16012))
{var G__16008__16015 = temp__3698__auto____16012;

{
var G__16020 = cljs.core.first.call(null,G__16008__16015);
var G__16021 = G__16008__16015;
node__16010 = G__16020;
G__16008__16011 = G__16021;
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
var G__16024__16025 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16024__16025))
{var node__16026 = cljs.core.first.call(null,G__16024__16025);
var G__16024__16028 = G__16024__16025;

while(true){
goog.dom.classes.remove.call(null,node__16026,class$);
var temp__3698__auto____16034 = cljs.core.next.call(null,G__16024__16028);

if(cljs.core.truth_(temp__3698__auto____16034))
{var G__16024__16035 = temp__3698__auto____16034;

{
var G__16042 = cljs.core.first.call(null,G__16024__16035);
var G__16043 = G__16024__16035;
node__16026 = G__16042;
G__16024__16028 = G__16043;
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
var text__16102 = (function (content){
return text.call(null,content,true);
});
var text__16103 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16102.call(this,content);
case  2 :
return text__16103.call(this,content,normalize);
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
var G__16113__16115 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16113__16115))
{var node__16117 = cljs.core.first.call(null,G__16113__16115);
var G__16113__16118 = G__16113__16115;

while(true){
goog.dom.setTextContent.call(null,node__16117,value);
var temp__3698__auto____16119 = cljs.core.next.call(null,G__16113__16118);

if(cljs.core.truth_(temp__3698__auto____16119))
{var G__16113__16120 = temp__3698__auto____16119;

{
var G__16121 = cljs.core.first.call(null,G__16113__16120);
var G__16122 = G__16113__16120;
node__16117 = G__16121;
G__16113__16118 = G__16122;
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
var G__16125__16126 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16125__16126))
{var node__16129 = cljs.core.first.call(null,G__16125__16126);
var G__16125__16130 = G__16125__16126;

while(true){
goog.dom.forms.setValue.call(null,node__16129,value);
var temp__3698__auto____16131 = cljs.core.next.call(null,G__16125__16130);

if(cljs.core.truth_(temp__3698__auto____16131))
{var G__16125__16132 = temp__3698__auto____16131;

{
var G__16136 = cljs.core.first.call(null,G__16125__16132);
var G__16137 = G__16125__16132;
node__16129 = G__16136;
G__16125__16130 = G__16137;
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
var G__16143__16145 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16143__16145))
{var node__16146 = cljs.core.first.call(null,G__16143__16145);
var G__16143__16147 = G__16143__16145;

while(true){
node__16146.innerHTML = value;
var temp__3698__auto____16149 = cljs.core.next.call(null,G__16143__16147);

if(cljs.core.truth_(temp__3698__auto____16149))
{var G__16143__16151 = temp__3698__auto____16149;

{
var G__16154 = cljs.core.first.call(null,G__16143__16151);
var G__16155 = G__16143__16151;
node__16146 = G__16154;
G__16143__16147 = G__16155;
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
var parents__16156 = domina.nodes.call(null,parent_content);
var children__16157 = domina.nodes.call(null,child_content);
var first_child__16202 = (function (){var frag__16158 = document.createDocumentFragment();

var G__16159__16194 = cljs.core.seq.call(null,children__16157);

if(cljs.core.truth_(G__16159__16194))
{var child__16196 = cljs.core.first.call(null,G__16159__16194);
var G__16159__16197 = G__16159__16194;

while(true){
frag__16158.appendChild(child__16196);
var temp__3698__auto____16200 = cljs.core.next.call(null,G__16159__16197);

if(cljs.core.truth_(temp__3698__auto____16200))
{var G__16159__16201 = temp__3698__auto____16200;

{
var G__16209 = cljs.core.first.call(null,G__16159__16201);
var G__16210 = G__16159__16201;
child__16196 = G__16209;
G__16159__16197 = G__16210;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16158;
})();
var other_children__16203 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16156) - 1),(function (){
return first_child__16202.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16156)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16157)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16156)))
{f.call(null,cljs.core.first.call(null,parents__16156),first_child__16202);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16141_SHARP_,p2__16142_SHARP_){
return f.call(null,p1__16141_SHARP_,p2__16142_SHARP_);
}),cljs.core.rest.call(null,parents__16156),other_children__16203));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList or other array-like javascript thing.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16223 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16224 = (function (nl,n){
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
return lazy_nodelist__16223.call(this,nl);
case  2 :
return lazy_nodelist__16224.call(this,nl,n);
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
var inner_wrapper__16238 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16239 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16238));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16239),1)))
{return inner_wrapper__16238.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16238));
} else
{return children__16239;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16246__16247 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16248 = cljs.core.nth.call(null,vec__16246__16247,0,null);
var table_level__16249 = cljs.core.nth.call(null,vec__16246__16247,1,null);
var ___16250 = cljs.core.nthnext.call(null,vec__16246__16247,2);
var wrapper__16251 = domina.create_wrapper.call(null,table_level__16249);

domina.set_wrapper_html_BANG_.call(null,wrapper__16251,content);
return domina.extract_wrapper_dom.call(null,wrapper__16251,table_level__16249);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6747__auto____16261 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16262 = x__6747__auto____16261;

if(cljs.core.truth_(and__3546__auto____16262))
{var and__3546__auto____16263 = x__6747__auto____16261.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16263))
{var and__3546__auto____16264 = x__6747__auto____16261.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16264))
{return cljs.core.not.call(null,x__6747__auto____16261.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16264;
}
} else
{return and__3546__auto____16263;
}
} else
{return and__3546__auto____16262;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6747__auto____16261);
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
if(cljs.core.truth_((function (){var x__6747__auto____16268 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16269 = x__6747__auto____16268;

if(cljs.core.truth_(and__3546__auto____16269))
{var and__3546__auto____16270 = x__6747__auto____16268.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16270))
{var and__3546__auto____16271 = x__6747__auto____16268.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16271))
{return cljs.core.not.call(null,x__6747__auto____16268.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16271;
}
} else
{return and__3546__auto____16270;
}
} else
{return and__3546__auto____16269;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6747__auto____16268);
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
var G__16301 = null;
var G__16301__16302 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16301__16303 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16301 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16301__16302.call(this,nodelist,n);
case  3 :
return G__16301__16303.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16301;
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
var G__16378 = null;
var G__16378__16379 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16378__16380 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16378 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16378__16379.call(this,nodelist,n);
case  3 :
return G__16378__16380.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16378;
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
var G__16390 = null;
var G__16390__16391 = (function (coll,n){
return coll.item(n);
});
var G__16390__16392 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16390 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16390__16391.call(this,coll,n);
case  3 :
return G__16390__16392.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16390;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
