goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15794 = content;

if(cljs.core.truth_(and__3546__auto____15794))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15794;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15816 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15816))
{return or__3548__auto____15816;
} else
{var or__3548__auto____15817 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15817))
{return or__3548__auto____15817;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15822 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15822))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15822;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15825 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15825))
{return or__3548__auto____15825;
} else
{var or__3548__auto____15826 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15826))
{return or__3548__auto____15826;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15833 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15833))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15833;
}
})()))
{return console.log(mesg);
} else
{return null;
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
if(cljs.core.truth_((void 0 === domina.t15843)))
{
/**
* @constructor
*/
domina.t15843 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15843.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15843");
});
domina.t15843.prototype.domina$DomContent$ = true;
domina.t15843.prototype.domina$DomContent$nodes = (function (_){
var this__15846 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15846.class_name)));
});
domina.t15843.prototype.domina$DomContent$single_node = (function (_){
var this__15847 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15847.class_name)));
});
domina.t15843.prototype.cljs$core$IMeta$ = true;
domina.t15843.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15850 = this;
return this__15850.__meta;
});
domina.t15843.prototype.cljs$core$IWithMeta$ = true;
domina.t15843.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15851 = this;
return (new domina.t15843(this__15851.class_name,this__15851.by_class,__meta));
});
domina.t15843;
} else
{}
return (new domina.t15843(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15853_SHARP_){
return p1__15853_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15858_SHARP_,p2__15859_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15858_SHARP_,p2__15859_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15864_SHARP_,p2__15863_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15863_SHARP_,p1__15864_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15866_SHARP_,p2__15865_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15865_SHARP_,p1__15866_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15868_SHARP_,p2__15867_SHARP_){
return goog.dom.replaceNode.call(null,p2__15867_SHARP_,p1__15868_SHARP_);
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
var s__15876 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15876))))
{return s__15876;
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
var G__15879__15881 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15879__15881))
{var n__15882 = cljs.core.first.call(null,G__15879__15881);
var G__15879__15883 = G__15879__15881;

while(true){
goog.style.setStyle.call(null,n__15882,cljs.core.name.call(null,name),value);
var temp__3698__auto____15884 = cljs.core.next.call(null,G__15879__15883);

if(cljs.core.truth_(temp__3698__auto____15884))
{var G__15879__15885 = temp__3698__auto____15884;

{
var G__15895 = cljs.core.first.call(null,G__15879__15885);
var G__15896 = G__15879__15885;
n__15882 = G__15895;
G__15879__15883 = G__15896;
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
var G__15897__15898 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15897__15898))
{var n__15899 = cljs.core.first.call(null,G__15897__15898);
var G__15897__15900 = G__15897__15898;

while(true){
n__15899.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15901 = cljs.core.next.call(null,G__15897__15900);

if(cljs.core.truth_(temp__3698__auto____15901))
{var G__15897__15902 = temp__3698__auto____15901;

{
var G__15905 = cljs.core.first.call(null,G__15897__15902);
var G__15906 = G__15897__15902;
n__15899 = G__15905;
G__15897__15900 = G__15906;
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
var vec__15909__15910 = pair.split(/\s*:\s*/);
var k__15911 = cljs.core.nth.call(null,vec__15909__15910,0,null);
var v__15913 = cljs.core.nth.call(null,vec__15909__15910,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15914 = k__15911;

if(cljs.core.truth_(and__3546__auto____15914))
{return v__15913;
} else
{return and__3546__auto____15914;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15911.toLowerCase()),v__15913);
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
var node__15922 = domina.single_node.call(null,content);
var attrs__15923 = node__15922.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15917_SHARP_){
var attr__15924 = attrs__15923.item(p1__15917_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15924.nodeName.toLowerCase())],[attr__15924.nodeValue]);
}),cljs.core.range.call(null,attrs__15923.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15930__15931 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15930__15931))
{var G__15933__15935 = cljs.core.first.call(null,G__15930__15931);
var vec__15934__15936 = G__15933__15935;
var name__15937 = cljs.core.nth.call(null,vec__15934__15936,0,null);
var value__15938 = cljs.core.nth.call(null,vec__15934__15936,1,null);
var G__15930__15939 = G__15930__15931;

var G__15933__15940 = G__15933__15935;
var G__15930__15941 = G__15930__15939;

while(true){
var vec__15942__15943 = G__15933__15940;
var name__15944 = cljs.core.nth.call(null,vec__15942__15943,0,null);
var value__15945 = cljs.core.nth.call(null,vec__15942__15943,1,null);
var G__15930__15946 = G__15930__15941;

domina.set_style_BANG_.call(null,content,name__15944,value__15945);
var temp__3698__auto____15948 = cljs.core.next.call(null,G__15930__15946);

if(cljs.core.truth_(temp__3698__auto____15948))
{var G__15930__15951 = temp__3698__auto____15948;

{
var G__15961 = cljs.core.first.call(null,G__15930__15951);
var G__15962 = G__15930__15951;
G__15933__15940 = G__15961;
G__15930__15941 = G__15962;
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
var G__15967__15969 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15967__15969))
{var G__15971__15973 = cljs.core.first.call(null,G__15967__15969);
var vec__15972__15974 = G__15971__15973;
var name__15975 = cljs.core.nth.call(null,vec__15972__15974,0,null);
var value__15976 = cljs.core.nth.call(null,vec__15972__15974,1,null);
var G__15967__15977 = G__15967__15969;

var G__15971__15978 = G__15971__15973;
var G__15967__15979 = G__15967__15977;

while(true){
var vec__15980__15981 = G__15971__15978;
var name__15982 = cljs.core.nth.call(null,vec__15980__15981,0,null);
var value__15983 = cljs.core.nth.call(null,vec__15980__15981,1,null);
var G__15967__15984 = G__15967__15979;

domina.set_attr_BANG_.call(null,content,name__15982,value__15983);
var temp__3698__auto____15985 = cljs.core.next.call(null,G__15967__15984);

if(cljs.core.truth_(temp__3698__auto____15985))
{var G__15967__15986 = temp__3698__auto____15985;

{
var G__15988 = cljs.core.first.call(null,G__15967__15986);
var G__15989 = G__15967__15986;
G__15971__15978 = G__15988;
G__15967__15979 = G__15989;
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
var G__15990__15991 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15990__15991))
{var node__15992 = cljs.core.first.call(null,G__15990__15991);
var G__15990__15993 = G__15990__15991;

while(true){
goog.dom.classes.add.call(null,node__15992,class$);
var temp__3698__auto____15994 = cljs.core.next.call(null,G__15990__15993);

if(cljs.core.truth_(temp__3698__auto____15994))
{var G__15990__15995 = temp__3698__auto____15994;

{
var G__15997 = cljs.core.first.call(null,G__15990__15995);
var G__15998 = G__15990__15995;
node__15992 = G__15997;
G__15990__15993 = G__15998;
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
var G__16001__16002 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16001__16002))
{var node__16004 = cljs.core.first.call(null,G__16001__16002);
var G__16001__16005 = G__16001__16002;

while(true){
goog.dom.classes.remove.call(null,node__16004,class$);
var temp__3698__auto____16006 = cljs.core.next.call(null,G__16001__16005);

if(cljs.core.truth_(temp__3698__auto____16006))
{var G__16001__16007 = temp__3698__auto____16006;

{
var G__16014 = cljs.core.first.call(null,G__16001__16007);
var G__16015 = G__16001__16007;
node__16004 = G__16014;
G__16001__16005 = G__16015;
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
var text__16020 = (function (content){
return text.call(null,content,true);
});
var text__16021 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16020.call(this,content);
case  2 :
return text__16021.call(this,content,normalize);
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
var G__16025__16026 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16025__16026))
{var node__16027 = cljs.core.first.call(null,G__16025__16026);
var G__16025__16028 = G__16025__16026;

while(true){
goog.dom.setTextContent.call(null,node__16027,value);
var temp__3698__auto____16029 = cljs.core.next.call(null,G__16025__16028);

if(cljs.core.truth_(temp__3698__auto____16029))
{var G__16025__16030 = temp__3698__auto____16029;

{
var G__16064 = cljs.core.first.call(null,G__16025__16030);
var G__16065 = G__16025__16030;
node__16027 = G__16064;
G__16025__16028 = G__16065;
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
var G__16069__16072 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16069__16072))
{var node__16073 = cljs.core.first.call(null,G__16069__16072);
var G__16069__16111 = G__16069__16072;

while(true){
goog.dom.forms.setValue.call(null,node__16073,value);
var temp__3698__auto____16112 = cljs.core.next.call(null,G__16069__16111);

if(cljs.core.truth_(temp__3698__auto____16112))
{var G__16069__16113 = temp__3698__auto____16112;

{
var G__16144 = cljs.core.first.call(null,G__16069__16113);
var G__16145 = G__16069__16113;
node__16073 = G__16144;
G__16069__16111 = G__16145;
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
var G__16206__16207 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16206__16207))
{var node__16208 = cljs.core.first.call(null,G__16206__16207);
var G__16206__16209 = G__16206__16207;

while(true){
node__16208.innerHTML = value;
var temp__3698__auto____16213 = cljs.core.next.call(null,G__16206__16209);

if(cljs.core.truth_(temp__3698__auto____16213))
{var G__16206__16214 = temp__3698__auto____16213;

{
var G__16217 = cljs.core.first.call(null,G__16206__16214);
var G__16218 = G__16206__16214;
node__16208 = G__16217;
G__16206__16209 = G__16218;
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
var parents__16227 = domina.nodes.call(null,parent_content);
var children__16228 = domina.nodes.call(null,child_content);
var first_child__16245 = (function (){var frag__16231 = document.createDocumentFragment();

var G__16233__16236 = cljs.core.seq.call(null,children__16228);

if(cljs.core.truth_(G__16233__16236))
{var child__16238 = cljs.core.first.call(null,G__16233__16236);
var G__16233__16239 = G__16233__16236;

while(true){
frag__16231.appendChild(child__16238);
var temp__3698__auto____16241 = cljs.core.next.call(null,G__16233__16239);

if(cljs.core.truth_(temp__3698__auto____16241))
{var G__16233__16242 = temp__3698__auto____16241;

{
var G__16274 = cljs.core.first.call(null,G__16233__16242);
var G__16275 = G__16233__16242;
child__16238 = G__16274;
G__16233__16239 = G__16275;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16231;
})();
var other_children__16251 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16227) - 1),(function (){
return first_child__16245.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16227)))
{f.call(null,cljs.core.first.call(null,parents__16227),first_child__16245);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16203_SHARP_,p2__16205_SHARP_){
return f.call(null,p1__16203_SHARP_,p2__16205_SHARP_);
}),cljs.core.rest.call(null,parents__16227),other_children__16251));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16296 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16297 = (function (nl,n){
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
return lazy_nodelist__16296.call(this,nl);
case  2 :
return lazy_nodelist__16297.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
/**
* Early versions of IE have things which are like arrays in that they
* respond to .length and .item, but are not arrays. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(cljs.core.truth_((function (){var x__6761__auto____16313 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16314 = x__6761__auto____16313;

if(cljs.core.truth_(and__3546__auto____16314))
{var and__3546__auto____16315 = x__6761__auto____16313.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16315))
{var and__3546__auto____16316 = x__6761__auto____16313.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16316))
{return cljs.core.not.call(null,x__6761__auto____16313.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16316;
}
} else
{return and__3546__auto____16315;
}
} else
{return and__3546__auto____16314;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6761__auto____16313);
}
})()))
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(list_thing.item))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(cljs.core.truth_("﷐'default"))
{return cljs.core.cons.call(null,list_thing);
} else
{return null;
}
}
}
});
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
var inner_wrapper__16409 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16410 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16409));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16410),1)))
{return inner_wrapper__16409.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16409));
} else
{return children__16410;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16419__16420 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16421 = cljs.core.nth.call(null,vec__16419__16420,0,null);
var table_level__16422 = cljs.core.nth.call(null,vec__16419__16420,1,null);
var ___16427 = cljs.core.nthnext.call(null,vec__16419__16420,2);
var wrapper__16428 = domina.create_wrapper.call(null,table_level__16422);

domina.set_wrapper_html_BANG_.call(null,wrapper__16428,content);
return domina.extract_wrapper_dom.call(null,wrapper__16428,table_level__16422);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6761__auto____16452 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16453 = x__6761__auto____16452;

if(cljs.core.truth_(and__3546__auto____16453))
{var and__3546__auto____16454 = x__6761__auto____16452.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16454))
{var and__3546__auto____16457 = x__6761__auto____16452.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16457))
{return cljs.core.not.call(null,x__6761__auto____16452.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16457;
}
} else
{return and__3546__auto____16454;
}
} else
{return and__3546__auto____16453;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6761__auto____16452);
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
if(cljs.core.truth_((function (){var x__6761__auto____16460 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16461 = x__6761__auto____16460;

if(cljs.core.truth_(and__3546__auto____16461))
{var and__3546__auto____16462 = x__6761__auto____16460.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16462))
{var and__3546__auto____16464 = x__6761__auto____16460.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16464))
{return cljs.core.not.call(null,x__6761__auto____16460.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16464;
}
} else
{return and__3546__auto____16462;
}
} else
{return and__3546__auto____16461;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6761__auto____16460);
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
var G__16477 = null;
var G__16477__16478 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16477__16514 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16477 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16477__16478.call(this,nodelist,n);
case  3 :
return G__16477__16514.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16477;
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
var G__16561 = null;
var G__16561__16562 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16561__16563 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16561 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16561__16562.call(this,nodelist,n);
case  3 :
return G__16561__16563.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16561;
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
var G__16577 = null;
var G__16577__16581 = (function (coll,n){
return coll.item(n);
});
var G__16577__16582 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16577 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16577__16581.call(this,coll,n);
case  3 :
return G__16577__16582.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16577;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
