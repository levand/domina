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
if(cljs.core.truth_((function (){var and__3546__auto____15792 = content;

if(cljs.core.truth_(and__3546__auto____15792))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15792;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15793 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15793))
{return or__3548__auto____15793;
} else
{var or__3548__auto____15794 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15794))
{return or__3548__auto____15794;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15795 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15795))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15795;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15797 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15797))
{return or__3548__auto____15797;
} else
{var or__3548__auto____15799 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15799))
{return or__3548__auto____15799;
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
if(cljs.core.truth_((void 0 === domina.t15811)))
{
/**
* @constructor
*/
domina.t15811 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15811.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15811");
});
domina.t15811.prototype.domina$DomContent$ = true;
domina.t15811.prototype.domina$DomContent$nodes = (function (_){
var this__15837 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15837.class_name));
});
domina.t15811.prototype.domina$DomContent$single_node = (function (_){
var this__15839 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15839.class_name));
});
domina.t15811.prototype.cljs$core$IMeta$ = true;
domina.t15811.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15840 = this;
return this__15840.__meta;
});
domina.t15811.prototype.cljs$core$IWithMeta$ = true;
domina.t15811.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15842 = this;
return (new domina.t15811(this__15842.class_name,this__15842.by_class,__meta));
});
domina.t15811;
} else
{}
return (new domina.t15811(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15856_SHARP_){
return p1__15856_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15869_SHARP_,p2__15870_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15869_SHARP_,p2__15870_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15873_SHARP_,p2__15872_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15872_SHARP_,p1__15873_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15877_SHARP_,p2__15876_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15876_SHARP_,p1__15877_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15881_SHARP_,p2__15880_SHARP_){
return goog.dom.replaceNode.call(null,p2__15880_SHARP_,p1__15881_SHARP_);
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
var s__15890 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15890))))
{return s__15890;
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
var G__15892__15895 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15892__15895))
{var n__15898 = cljs.core.first.call(null,G__15892__15895);
var G__15892__15899 = G__15892__15895;

while(true){
goog.style.setStyle.call(null,n__15898,cljs.core.name.call(null,name),value);
var temp__3698__auto____15900 = cljs.core.next.call(null,G__15892__15899);

if(cljs.core.truth_(temp__3698__auto____15900))
{var G__15892__15901 = temp__3698__auto____15900;

{
var G__15906 = cljs.core.first.call(null,G__15892__15901);
var G__15907 = G__15892__15901;
n__15898 = G__15906;
G__15892__15899 = G__15907;
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
var G__15908__15909 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15908__15909))
{var n__15911 = cljs.core.first.call(null,G__15908__15909);
var G__15908__15912 = G__15908__15909;

while(true){
n__15911.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15917 = cljs.core.next.call(null,G__15908__15912);

if(cljs.core.truth_(temp__3698__auto____15917))
{var G__15908__15918 = temp__3698__auto____15917;

{
var G__15921 = cljs.core.first.call(null,G__15908__15918);
var G__15923 = G__15908__15918;
n__15911 = G__15921;
G__15908__15912 = G__15923;
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
var vec__15926__15927 = pair.split(/\s*:\s*/);
var k__15928 = cljs.core.nth.call(null,vec__15926__15927,0,null);
var v__15929 = cljs.core.nth.call(null,vec__15926__15927,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15931 = k__15928;

if(cljs.core.truth_(and__3546__auto____15931))
{return v__15929;
} else
{return and__3546__auto____15931;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15928.toLowerCase()),v__15929);
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
var node__15944 = domina.single_node.call(null,content);
var attrs__15945 = node__15944.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15937_SHARP_){
var attr__15956 = attrs__15945.item(p1__15937_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15956.nodeName.toLowerCase())],[attr__15956.nodeValue]);
}),cljs.core.range.call(null,attrs__15945.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15966__15967 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15966__15967))
{var G__15969__15972 = cljs.core.first.call(null,G__15966__15967);
var vec__15971__15973 = G__15969__15972;
var name__15975 = cljs.core.nth.call(null,vec__15971__15973,0,null);
var value__15976 = cljs.core.nth.call(null,vec__15971__15973,1,null);
var G__15966__15977 = G__15966__15967;

var G__15969__15978 = G__15969__15972;
var G__15966__15979 = G__15966__15977;

while(true){
var vec__15980__15981 = G__15969__15978;
var name__15982 = cljs.core.nth.call(null,vec__15980__15981,0,null);
var value__15984 = cljs.core.nth.call(null,vec__15980__15981,1,null);
var G__15966__15985 = G__15966__15979;

domina.set_style_BANG_.call(null,content,name__15982,value__15984);
var temp__3698__auto____15987 = cljs.core.next.call(null,G__15966__15985);

if(cljs.core.truth_(temp__3698__auto____15987))
{var G__15966__15988 = temp__3698__auto____15987;

{
var G__15994 = cljs.core.first.call(null,G__15966__15988);
var G__15995 = G__15966__15988;
G__15969__15978 = G__15994;
G__15966__15979 = G__15995;
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
var G__15996__15997 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15996__15997))
{var G__15999__16001 = cljs.core.first.call(null,G__15996__15997);
var vec__16000__16002 = G__15999__16001;
var name__16003 = cljs.core.nth.call(null,vec__16000__16002,0,null);
var value__16004 = cljs.core.nth.call(null,vec__16000__16002,1,null);
var G__15996__16005 = G__15996__15997;

var G__15999__16007 = G__15999__16001;
var G__15996__16033 = G__15996__16005;

while(true){
var vec__16034__16035 = G__15999__16007;
var name__16036 = cljs.core.nth.call(null,vec__16034__16035,0,null);
var value__16037 = cljs.core.nth.call(null,vec__16034__16035,1,null);
var G__15996__16040 = G__15996__16033;

domina.set_attr_BANG_.call(null,content,name__16036,value__16037);
var temp__3698__auto____16041 = cljs.core.next.call(null,G__15996__16040);

if(cljs.core.truth_(temp__3698__auto____16041))
{var G__15996__16042 = temp__3698__auto____16041;

{
var G__16058 = cljs.core.first.call(null,G__15996__16042);
var G__16059 = G__15996__16042;
G__15999__16007 = G__16058;
G__15996__16033 = G__16059;
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
var G__16065__16066 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16065__16066))
{var node__16067 = cljs.core.first.call(null,G__16065__16066);
var G__16065__16068 = G__16065__16066;

while(true){
goog.dom.classes.add.call(null,node__16067,class$);
var temp__3698__auto____16069 = cljs.core.next.call(null,G__16065__16068);

if(cljs.core.truth_(temp__3698__auto____16069))
{var G__16065__16070 = temp__3698__auto____16069;

{
var G__16075 = cljs.core.first.call(null,G__16065__16070);
var G__16076 = G__16065__16070;
node__16067 = G__16075;
G__16065__16068 = G__16076;
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
var G__16081__16083 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16081__16083))
{var node__16084 = cljs.core.first.call(null,G__16081__16083);
var G__16081__16086 = G__16081__16083;

while(true){
goog.dom.classes.remove.call(null,node__16084,class$);
var temp__3698__auto____16089 = cljs.core.next.call(null,G__16081__16086);

if(cljs.core.truth_(temp__3698__auto____16089))
{var G__16081__16090 = temp__3698__auto____16089;

{
var G__16095 = cljs.core.first.call(null,G__16081__16090);
var G__16096 = G__16081__16090;
node__16084 = G__16095;
G__16081__16086 = G__16096;
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
var text__16103 = (function (content){
return text.call(null,content,true);
});
var text__16104 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16103.call(this,content);
case  2 :
return text__16104.call(this,content,normalize);
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
var G__16110__16113 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16110__16113))
{var node__16115 = cljs.core.first.call(null,G__16110__16113);
var G__16110__16116 = G__16110__16113;

while(true){
goog.dom.setTextContent.call(null,node__16115,value);
var temp__3698__auto____16117 = cljs.core.next.call(null,G__16110__16116);

if(cljs.core.truth_(temp__3698__auto____16117))
{var G__16110__16118 = temp__3698__auto____16117;

{
var G__16121 = cljs.core.first.call(null,G__16110__16118);
var G__16122 = G__16110__16118;
node__16115 = G__16121;
G__16110__16116 = G__16122;
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
var G__16125__16127 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16125__16127))
{var node__16128 = cljs.core.first.call(null,G__16125__16127);
var G__16125__16129 = G__16125__16127;

while(true){
goog.dom.forms.setValue.call(null,node__16128,value);
var temp__3698__auto____16130 = cljs.core.next.call(null,G__16125__16129);

if(cljs.core.truth_(temp__3698__auto____16130))
{var G__16125__16131 = temp__3698__auto____16130;

{
var G__16132 = cljs.core.first.call(null,G__16125__16131);
var G__16133 = G__16125__16131;
node__16128 = G__16132;
G__16125__16129 = G__16133;
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
var G__16155__16158 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16155__16158))
{var node__16159 = cljs.core.first.call(null,G__16155__16158);
var G__16155__16160 = G__16155__16158;

while(true){
node__16159.innerHTML = value;
var temp__3698__auto____16161 = cljs.core.next.call(null,G__16155__16160);

if(cljs.core.truth_(temp__3698__auto____16161))
{var G__16155__16162 = temp__3698__auto____16161;

{
var G__16165 = cljs.core.first.call(null,G__16155__16162);
var G__16166 = G__16155__16162;
node__16159 = G__16165;
G__16155__16160 = G__16166;
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
var parents__16172 = domina.nodes.call(null,parent_content);
var children__16173 = domina.nodes.call(null,child_content);
var first_child__16185 = (function (){var frag__16174 = document.createDocumentFragment();

var G__16175__16176 = cljs.core.seq.call(null,children__16173);

if(cljs.core.truth_(G__16175__16176))
{var child__16179 = cljs.core.first.call(null,G__16175__16176);
var G__16175__16180 = G__16175__16176;

while(true){
frag__16174.appendChild(child__16179);
var temp__3698__auto____16181 = cljs.core.next.call(null,G__16175__16180);

if(cljs.core.truth_(temp__3698__auto____16181))
{var G__16175__16183 = temp__3698__auto____16181;

{
var G__16195 = cljs.core.first.call(null,G__16175__16183);
var G__16196 = G__16175__16183;
child__16179 = G__16195;
G__16175__16180 = G__16196;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16174;
})();
var other_children__16189 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16172) - 1),(function (){
return first_child__16185.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16172)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16173)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16172)))
{f.call(null,cljs.core.first.call(null,parents__16172),first_child__16185);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16148_SHARP_,p2__16149_SHARP_){
return f.call(null,p1__16148_SHARP_,p2__16149_SHARP_);
}),cljs.core.rest.call(null,parents__16172),other_children__16189));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16206 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16207 = (function (nl,n){
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
return lazy_nodelist__16206.call(this,nl);
case  2 :
return lazy_nodelist__16207.call(this,nl,n);
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
var inner_wrapper__16289 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16290 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16289));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16290),1)))
{return inner_wrapper__16289.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16289));
} else
{return children__16290;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16298__16299 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16300 = cljs.core.nth.call(null,vec__16298__16299,0,null);
var table_level__16301 = cljs.core.nth.call(null,vec__16298__16299,1,null);
var ___16302 = cljs.core.nthnext.call(null,vec__16298__16299,2);
var wrapper__16303 = domina.create_wrapper.call(null,table_level__16301);

domina.set_wrapper_html_BANG_.call(null,wrapper__16303,content);
return domina.extract_wrapper_dom.call(null,wrapper__16303,table_level__16301);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,cljs.core.str.call(null,"typof",goog.typeOf.call(null,content)));
domina.log_debug.call(null,cljs.core.str.call(null,"seq?",cljs.core.seq_QMARK_.call(null,content)));
if(cljs.core.truth_((function (){var x__6744__auto____16309 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16313 = x__6744__auto____16309;

if(cljs.core.truth_(and__3546__auto____16313))
{var and__3546__auto____16317 = x__6744__auto____16309.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16317))
{var and__3546__auto____16318 = x__6744__auto____16309.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16318))
{return cljs.core.not.call(null,x__6744__auto____16309.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16318;
}
} else
{return and__3546__auto____16317;
}
} else
{return and__3546__auto____16313;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6744__auto____16309);
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
if(cljs.core.truth_((function (){var x__6744__auto____16319 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16320 = x__6744__auto____16319;

if(cljs.core.truth_(and__3546__auto____16320))
{var and__3546__auto____16321 = x__6744__auto____16319.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16321))
{var and__3546__auto____16322 = x__6744__auto____16319.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16322))
{return cljs.core.not.call(null,x__6744__auto____16319.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16322;
}
} else
{return and__3546__auto____16321;
}
} else
{return and__3546__auto____16320;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6744__auto____16319);
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
var G__16384 = null;
var G__16384__16387 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16384__16388 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16384 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16384__16387.call(this,nodelist,n);
case  3 :
return G__16384__16388.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16384;
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
var G__16434 = null;
var G__16434__16435 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16434__16436 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16434 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16434__16435.call(this,nodelist,n);
case  3 :
return G__16434__16436.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16434;
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
var G__16443 = null;
var G__16443__16444 = (function (coll,n){
return coll.item(n);
});
var G__16443__16445 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16443 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16443__16444.call(this,coll,n);
case  3 :
return G__16443__16445.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16443;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
