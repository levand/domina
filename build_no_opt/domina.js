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
if(cljs.core.truth_((function (){var and__3546__auto____15754 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15754))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15754;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15757 = content;

if(cljs.core.truth_(and__3546__auto____15757))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15757;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15760 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15760))
{return or__3548__auto____15760;
} else
{var or__3548__auto____15762 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15762))
{return or__3548__auto____15762;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15763 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15763))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15763;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15764 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15764))
{return or__3548__auto____15764;
} else
{var or__3548__auto____15765 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15765))
{return or__3548__auto____15765;
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
if(cljs.core.truth_((void 0 === domina.t15776)))
{
/**
* @constructor
*/
domina.t15776 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15776.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15776");
});
domina.t15776.prototype.domina$DomContent$ = true;
domina.t15776.prototype.domina$DomContent$nodes = (function (_){
var this__15796 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15796.class_name));
});
domina.t15776.prototype.domina$DomContent$single_node = (function (_){
var this__15800 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15800.class_name));
});
domina.t15776.prototype.cljs$core$IMeta$ = true;
domina.t15776.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15801 = this;
return this__15801.__meta;
});
domina.t15776.prototype.cljs$core$IWithMeta$ = true;
domina.t15776.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15804 = this;
return (new domina.t15776(this__15804.class_name,this__15804.by_class,__meta));
});
domina.t15776;
} else
{}
return (new domina.t15776(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15813_SHARP_){
return p1__15813_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15830_SHARP_,p2__15832_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15830_SHARP_,p2__15832_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15839_SHARP_,p2__15838_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15838_SHARP_,p1__15839_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15846_SHARP_,p2__15844_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15844_SHARP_,p1__15846_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15853_SHARP_,p2__15852_SHARP_){
return goog.dom.replaceNode.call(null,p2__15852_SHARP_,p1__15853_SHARP_);
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
var s__15860 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15860))))
{return s__15860;
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
var G__15872__15873 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15872__15873))
{var n__15874 = cljs.core.first.call(null,G__15872__15873);
var G__15872__15875 = G__15872__15873;

while(true){
goog.style.setStyle.call(null,n__15874,cljs.core.name.call(null,name),value);
var temp__3698__auto____15878 = cljs.core.next.call(null,G__15872__15875);

if(cljs.core.truth_(temp__3698__auto____15878))
{var G__15872__15880 = temp__3698__auto____15878;

{
var G__15885 = cljs.core.first.call(null,G__15872__15880);
var G__15886 = G__15872__15880;
n__15874 = G__15885;
G__15872__15875 = G__15886;
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
var G__15891__15893 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15891__15893))
{var n__15895 = cljs.core.first.call(null,G__15891__15893);
var G__15891__15896 = G__15891__15893;

while(true){
n__15895.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15898 = cljs.core.next.call(null,G__15891__15896);

if(cljs.core.truth_(temp__3698__auto____15898))
{var G__15891__15899 = temp__3698__auto____15898;

{
var G__15904 = cljs.core.first.call(null,G__15891__15899);
var G__15905 = G__15891__15899;
n__15895 = G__15904;
G__15891__15896 = G__15905;
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
var vec__15907__15910 = pair.split(/\s*:\s*/);
var k__15911 = cljs.core.nth.call(null,vec__15907__15910,0,null);
var v__15912 = cljs.core.nth.call(null,vec__15907__15910,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15913 = k__15911;

if(cljs.core.truth_(and__3546__auto____15913))
{return v__15912;
} else
{return and__3546__auto____15913;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15911.toLowerCase()),v__15912);
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
var node__15924 = domina.single_node.call(null,content);
var attrs__15925 = node__15924.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15917_SHARP_){
var attr__15943 = attrs__15925.item(p1__15917_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15943.nodeName.toLowerCase())],[attr__15943.nodeValue]);
}),cljs.core.range.call(null,attrs__15925.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15953__15954 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15953__15954))
{var G__15956__15958 = cljs.core.first.call(null,G__15953__15954);
var vec__15957__15959 = G__15956__15958;
var name__15961 = cljs.core.nth.call(null,vec__15957__15959,0,null);
var value__15962 = cljs.core.nth.call(null,vec__15957__15959,1,null);
var G__15953__15963 = G__15953__15954;

var G__15956__15964 = G__15956__15958;
var G__15953__15965 = G__15953__15963;

while(true){
var vec__15966__15967 = G__15956__15964;
var name__15968 = cljs.core.nth.call(null,vec__15966__15967,0,null);
var value__15969 = cljs.core.nth.call(null,vec__15966__15967,1,null);
var G__15953__15972 = G__15953__15965;

domina.set_style_BANG_.call(null,content,name__15968,value__15969);
var temp__3698__auto____15974 = cljs.core.next.call(null,G__15953__15972);

if(cljs.core.truth_(temp__3698__auto____15974))
{var G__15953__15975 = temp__3698__auto____15974;

{
var G__15979 = cljs.core.first.call(null,G__15953__15975);
var G__15980 = G__15953__15975;
G__15956__15964 = G__15979;
G__15953__15965 = G__15980;
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
var G__15981__15982 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15981__15982))
{var G__15984__15986 = cljs.core.first.call(null,G__15981__15982);
var vec__15985__15987 = G__15984__15986;
var name__15988 = cljs.core.nth.call(null,vec__15985__15987,0,null);
var value__15990 = cljs.core.nth.call(null,vec__15985__15987,1,null);
var G__15981__15991 = G__15981__15982;

var G__15984__15992 = G__15984__15986;
var G__15981__15993 = G__15981__15991;

while(true){
var vec__15994__15995 = G__15984__15992;
var name__15996 = cljs.core.nth.call(null,vec__15994__15995,0,null);
var value__15997 = cljs.core.nth.call(null,vec__15994__15995,1,null);
var G__15981__15999 = G__15981__15993;

domina.set_attr_BANG_.call(null,content,name__15996,value__15997);
var temp__3698__auto____16000 = cljs.core.next.call(null,G__15981__15999);

if(cljs.core.truth_(temp__3698__auto____16000))
{var G__15981__16001 = temp__3698__auto____16000;

{
var G__16016 = cljs.core.first.call(null,G__15981__16001);
var G__16017 = G__15981__16001;
G__15984__15992 = G__16016;
G__15981__15993 = G__16017;
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
var G__16022__16024 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16022__16024))
{var node__16029 = cljs.core.first.call(null,G__16022__16024);
var G__16022__16030 = G__16022__16024;

while(true){
goog.dom.classes.add.call(null,node__16029,class$);
var temp__3698__auto____16033 = cljs.core.next.call(null,G__16022__16030);

if(cljs.core.truth_(temp__3698__auto____16033))
{var G__16022__16035 = temp__3698__auto____16033;

{
var G__16037 = cljs.core.first.call(null,G__16022__16035);
var G__16038 = G__16022__16035;
node__16029 = G__16037;
G__16022__16030 = G__16038;
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
var G__16041__16042 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16041__16042))
{var node__16065 = cljs.core.first.call(null,G__16041__16042);
var G__16041__16067 = G__16041__16042;

while(true){
goog.dom.classes.remove.call(null,node__16065,class$);
var temp__3698__auto____16074 = cljs.core.next.call(null,G__16041__16067);

if(cljs.core.truth_(temp__3698__auto____16074))
{var G__16041__16078 = temp__3698__auto____16074;

{
var G__16086 = cljs.core.first.call(null,G__16041__16078);
var G__16087 = G__16041__16078;
node__16065 = G__16086;
G__16041__16067 = G__16087;
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
var text__16095 = (function (content){
return text.call(null,content,true);
});
var text__16096 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16095.call(this,content);
case  2 :
return text__16096.call(this,content,normalize);
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
var G__16109__16110 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16109__16110))
{var node__16111 = cljs.core.first.call(null,G__16109__16110);
var G__16109__16112 = G__16109__16110;

while(true){
goog.dom.setTextContent.call(null,node__16111,value);
var temp__3698__auto____16113 = cljs.core.next.call(null,G__16109__16112);

if(cljs.core.truth_(temp__3698__auto____16113))
{var G__16109__16114 = temp__3698__auto____16113;

{
var G__16145 = cljs.core.first.call(null,G__16109__16114);
var G__16146 = G__16109__16114;
node__16111 = G__16145;
G__16109__16112 = G__16146;
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
var G__16151__16152 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16151__16152))
{var node__16153 = cljs.core.first.call(null,G__16151__16152);
var G__16151__16154 = G__16151__16152;

while(true){
goog.dom.forms.setValue.call(null,node__16153,value);
var temp__3698__auto____16158 = cljs.core.next.call(null,G__16151__16154);

if(cljs.core.truth_(temp__3698__auto____16158))
{var G__16151__16159 = temp__3698__auto____16158;

{
var G__16162 = cljs.core.first.call(null,G__16151__16159);
var G__16163 = G__16151__16159;
node__16153 = G__16162;
G__16151__16154 = G__16163;
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
var G__16186__16187 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16186__16187))
{var node__16188 = cljs.core.first.call(null,G__16186__16187);
var G__16186__16189 = G__16186__16187;

while(true){
node__16188.innerHTML = value;
var temp__3698__auto____16192 = cljs.core.next.call(null,G__16186__16189);

if(cljs.core.truth_(temp__3698__auto____16192))
{var G__16186__16193 = temp__3698__auto____16192;

{
var G__16196 = cljs.core.first.call(null,G__16186__16193);
var G__16197 = G__16186__16193;
node__16188 = G__16196;
G__16186__16189 = G__16197;
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
var parents__16202 = domina.nodes.call(null,parent_content);
var children__16203 = domina.nodes.call(null,child_content);
var first_child__16223 = (function (){var frag__16207 = document.createDocumentFragment();

var G__16209__16212 = cljs.core.seq.call(null,children__16203);

if(cljs.core.truth_(G__16209__16212))
{var child__16215 = cljs.core.first.call(null,G__16209__16212);
var G__16209__16216 = G__16209__16212;

while(true){
frag__16207.appendChild(child__16215);
var temp__3698__auto____16218 = cljs.core.next.call(null,G__16209__16216);

if(cljs.core.truth_(temp__3698__auto____16218))
{var G__16209__16220 = temp__3698__auto____16218;

{
var G__16236 = cljs.core.first.call(null,G__16209__16220);
var G__16237 = G__16209__16220;
child__16215 = G__16236;
G__16209__16216 = G__16237;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16207;
})();
var other_children__16225 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16202) - 1),(function (){
return first_child__16223.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16202)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16203)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16202)))
{f.call(null,cljs.core.first.call(null,parents__16202),first_child__16223);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16182_SHARP_,p2__16183_SHARP_){
return f.call(null,p1__16182_SHARP_,p2__16183_SHARP_);
}),cljs.core.rest.call(null,parents__16202),other_children__16225));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16241 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16242 = (function (nl,n){
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
return lazy_nodelist__16241.call(this,nl);
case  2 :
return lazy_nodelist__16242.call(this,nl,n);
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
var inner_wrapper__16257 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16259 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16257));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16259),1)))
{return inner_wrapper__16257.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16257));
} else
{return children__16259;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16267__16270 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16273 = cljs.core.nth.call(null,vec__16267__16270,0,null);
var table_level__16274 = cljs.core.nth.call(null,vec__16267__16270,1,null);
var ___16275 = cljs.core.nthnext.call(null,vec__16267__16270,2);
var wrapper__16276 = domina.create_wrapper.call(null,table_level__16274);

domina.set_wrapper_html_BANG_.call(null,wrapper__16276,content);
return domina.extract_wrapper_dom.call(null,wrapper__16276,table_level__16274);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,typeof content);
if(cljs.core.truth_((function (){var or__3548__auto____16283 = cljs.core.seq_QMARK_.call(null,content);

if(cljs.core.truth_(or__3548__auto____16283))
{return or__3548__auto____16283;
} else
{var x__6749__auto____16287 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16290 = x__6749__auto____16287;

if(cljs.core.truth_(and__3546__auto____16290))
{var and__3546__auto____16294 = x__6749__auto____16287.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16294))
{var and__3546__auto____16299 = x__6749__auto____16287.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16299))
{return cljs.core.not.call(null,x__6749__auto____16287.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16299;
}
} else
{return and__3546__auto____16294;
}
} else
{return and__3546__auto____16290;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16287);
}
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16309 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16310 = x__6749__auto____16309;

if(cljs.core.truth_(and__3546__auto____16310))
{var and__3546__auto____16313 = x__6749__auto____16309.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16313))
{var and__3546__auto____16316 = x__6749__auto____16309.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16316))
{return cljs.core.not.call(null,x__6749__auto____16309.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16316;
}
} else
{return and__3546__auto____16313;
}
} else
{return and__3546__auto____16310;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16309);
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
var G__16403 = null;
var G__16403__16406 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16403__16408 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16403 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16403__16406.call(this,nodelist,n);
case  3 :
return G__16403__16408.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16403;
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
var G__16422 = null;
var G__16422__16423 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16422__16424 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16422 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16422__16423.call(this,nodelist,n);
case  3 :
return G__16422__16424.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16422;
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
var G__16444 = null;
var G__16444__16445 = (function (coll,n){
return coll.item(n);
});
var G__16444__16446 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16444 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16444__16445.call(this,coll,n);
case  3 :
return G__16444__16446.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16444;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
