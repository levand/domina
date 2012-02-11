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
if(cljs.core.truth_((function (){var and__3546__auto____15731 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15731))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15731;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15753 = content;

if(cljs.core.truth_(and__3546__auto____15753))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15753;
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
if(cljs.core.truth_((function (){var and__3546__auto____15763 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15763))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15763;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15767 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15767))
{return or__3548__auto____15767;
} else
{var or__3548__auto____15768 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15768))
{return or__3548__auto____15768;
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
if(cljs.core.truth_((void 0 === domina.t15779)))
{
/**
* @constructor
*/
domina.t15779 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15779.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15779");
});
domina.t15779.prototype.domina$DomContent$ = true;
domina.t15779.prototype.domina$DomContent$nodes = (function (_){
var this__15790 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15790.class_name));
});
domina.t15779.prototype.domina$DomContent$single_node = (function (_){
var this__15792 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15792.class_name));
});
domina.t15779.prototype.cljs$core$IMeta$ = true;
domina.t15779.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15841 = this;
return this__15841.__meta;
});
domina.t15779.prototype.cljs$core$IWithMeta$ = true;
domina.t15779.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15842 = this;
return (new domina.t15779(this__15842.class_name,this__15842.by_class,__meta));
});
domina.t15779;
} else
{}
return (new domina.t15779(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15847_SHARP_){
return p1__15847_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15850_SHARP_,p2__15851_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15850_SHARP_,p2__15851_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15853_SHARP_,p2__15852_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15852_SHARP_,p1__15853_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15855_SHARP_,p2__15854_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15854_SHARP_,p1__15855_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15858_SHARP_,p2__15857_SHARP_){
return goog.dom.replaceNode.call(null,p2__15857_SHARP_,p1__15858_SHARP_);
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
var s__15866 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15866))))
{return s__15866;
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
var G__15879__15880 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15879__15880))
{var n__15881 = cljs.core.first.call(null,G__15879__15880);
var G__15879__15882 = G__15879__15880;

while(true){
goog.style.setStyle.call(null,n__15881,cljs.core.name.call(null,name),value);
var temp__3698__auto____15883 = cljs.core.next.call(null,G__15879__15882);

if(cljs.core.truth_(temp__3698__auto____15883))
{var G__15879__15884 = temp__3698__auto____15883;

{
var G__15886 = cljs.core.first.call(null,G__15879__15884);
var G__15887 = G__15879__15884;
n__15881 = G__15886;
G__15879__15882 = G__15887;
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
var G__15888__15889 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15888__15889))
{var n__15890 = cljs.core.first.call(null,G__15888__15889);
var G__15888__15891 = G__15888__15889;

while(true){
n__15890.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15892 = cljs.core.next.call(null,G__15888__15891);

if(cljs.core.truth_(temp__3698__auto____15892))
{var G__15888__15893 = temp__3698__auto____15892;

{
var G__15894 = cljs.core.first.call(null,G__15888__15893);
var G__15895 = G__15888__15893;
n__15890 = G__15894;
G__15888__15891 = G__15895;
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
var vec__15896__15897 = pair.split(/\s*:\s*/);
var k__15898 = cljs.core.nth.call(null,vec__15896__15897,0,null);
var v__15899 = cljs.core.nth.call(null,vec__15896__15897,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15900 = k__15898;

if(cljs.core.truth_(and__3546__auto____15900))
{return v__15899;
} else
{return and__3546__auto____15900;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15898.toLowerCase()),v__15899);
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
var node__15906 = domina.single_node.call(null,content);
var attrs__15907 = node__15906.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15902_SHARP_){
var attr__15909 = attrs__15907.item(p1__15902_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15909.nodeName.toLowerCase())],[attr__15909.nodeValue]);
}),cljs.core.range.call(null,attrs__15907.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15913__15914 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15913__15914))
{var G__15916__15918 = cljs.core.first.call(null,G__15913__15914);
var vec__15917__15919 = G__15916__15918;
var name__15920 = cljs.core.nth.call(null,vec__15917__15919,0,null);
var value__15921 = cljs.core.nth.call(null,vec__15917__15919,1,null);
var G__15913__15922 = G__15913__15914;

var G__15916__15923 = G__15916__15918;
var G__15913__15924 = G__15913__15922;

while(true){
var vec__15925__15926 = G__15916__15923;
var name__15927 = cljs.core.nth.call(null,vec__15925__15926,0,null);
var value__15928 = cljs.core.nth.call(null,vec__15925__15926,1,null);
var G__15913__15929 = G__15913__15924;

domina.set_style_BANG_.call(null,content,name__15927,value__15928);
var temp__3698__auto____15932 = cljs.core.next.call(null,G__15913__15929);

if(cljs.core.truth_(temp__3698__auto____15932))
{var G__15913__15934 = temp__3698__auto____15932;

{
var G__15938 = cljs.core.first.call(null,G__15913__15934);
var G__15939 = G__15913__15934;
G__15916__15923 = G__15938;
G__15913__15924 = G__15939;
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
var G__15986__15987 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15986__15987))
{var G__15989__15991 = cljs.core.first.call(null,G__15986__15987);
var vec__15990__15993 = G__15989__15991;
var name__15994 = cljs.core.nth.call(null,vec__15990__15993,0,null);
var value__15995 = cljs.core.nth.call(null,vec__15990__15993,1,null);
var G__15986__15996 = G__15986__15987;

var G__15989__15997 = G__15989__15991;
var G__15986__15998 = G__15986__15996;

while(true){
var vec__16000__16001 = G__15989__15997;
var name__16002 = cljs.core.nth.call(null,vec__16000__16001,0,null);
var value__16003 = cljs.core.nth.call(null,vec__16000__16001,1,null);
var G__15986__16004 = G__15986__15998;

domina.set_attr_BANG_.call(null,content,name__16002,value__16003);
var temp__3698__auto____16006 = cljs.core.next.call(null,G__15986__16004);

if(cljs.core.truth_(temp__3698__auto____16006))
{var G__15986__16008 = temp__3698__auto____16006;

{
var G__16011 = cljs.core.first.call(null,G__15986__16008);
var G__16012 = G__15986__16008;
G__15989__15997 = G__16011;
G__15986__15998 = G__16012;
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
var G__16017__16019 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16017__16019))
{var node__16021 = cljs.core.first.call(null,G__16017__16019);
var G__16017__16022 = G__16017__16019;

while(true){
goog.dom.classes.add.call(null,node__16021,class$);
var temp__3698__auto____16023 = cljs.core.next.call(null,G__16017__16022);

if(cljs.core.truth_(temp__3698__auto____16023))
{var G__16017__16024 = temp__3698__auto____16023;

{
var G__16027 = cljs.core.first.call(null,G__16017__16024);
var G__16028 = G__16017__16024;
node__16021 = G__16027;
G__16017__16022 = G__16028;
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
var G__16033__16034 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16033__16034))
{var node__16037 = cljs.core.first.call(null,G__16033__16034);
var G__16033__16038 = G__16033__16034;

while(true){
goog.dom.classes.remove.call(null,node__16037,class$);
var temp__3698__auto____16039 = cljs.core.next.call(null,G__16033__16038);

if(cljs.core.truth_(temp__3698__auto____16039))
{var G__16033__16040 = temp__3698__auto____16039;

{
var G__16043 = cljs.core.first.call(null,G__16033__16040);
var G__16044 = G__16033__16040;
node__16037 = G__16043;
G__16033__16038 = G__16044;
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
var text__16045 = (function (content){
return text.call(null,content,true);
});
var text__16046 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16045.call(this,content);
case  2 :
return text__16046.call(this,content,normalize);
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
var G__16052__16053 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16052__16053))
{var node__16058 = cljs.core.first.call(null,G__16052__16053);
var G__16052__16059 = G__16052__16053;

while(true){
goog.dom.setTextContent.call(null,node__16058,value);
var temp__3698__auto____16062 = cljs.core.next.call(null,G__16052__16059);

if(cljs.core.truth_(temp__3698__auto____16062))
{var G__16052__16063 = temp__3698__auto____16062;

{
var G__16064 = cljs.core.first.call(null,G__16052__16063);
var G__16065 = G__16052__16063;
node__16058 = G__16064;
G__16052__16059 = G__16065;
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
var G__16068__16069 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16068__16069))
{var node__16070 = cljs.core.first.call(null,G__16068__16069);
var G__16068__16071 = G__16068__16069;

while(true){
goog.dom.forms.setValue.call(null,node__16070,value);
var temp__3698__auto____16072 = cljs.core.next.call(null,G__16068__16071);

if(cljs.core.truth_(temp__3698__auto____16072))
{var G__16068__16073 = temp__3698__auto____16072;

{
var G__16074 = cljs.core.first.call(null,G__16068__16073);
var G__16075 = G__16068__16073;
node__16070 = G__16074;
G__16068__16071 = G__16075;
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
var G__16079__16080 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16079__16080))
{var node__16081 = cljs.core.first.call(null,G__16079__16080);
var G__16079__16082 = G__16079__16080;

while(true){
node__16081.innerHTML = value;
var temp__3698__auto____16083 = cljs.core.next.call(null,G__16079__16082);

if(cljs.core.truth_(temp__3698__auto____16083))
{var G__16079__16085 = temp__3698__auto____16083;

{
var G__16093 = cljs.core.first.call(null,G__16079__16085);
var G__16094 = G__16079__16085;
node__16081 = G__16093;
G__16079__16082 = G__16094;
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
var parents__16098 = domina.nodes.call(null,parent_content);
var children__16100 = domina.nodes.call(null,child_content);
var first_child__16114 = (function (){var frag__16101 = document.createDocumentFragment();

var G__16102__16103 = cljs.core.seq.call(null,children__16100);

if(cljs.core.truth_(G__16102__16103))
{var child__16104 = cljs.core.first.call(null,G__16102__16103);
var G__16102__16105 = G__16102__16103;

while(true){
frag__16101.appendChild(child__16104);
var temp__3698__auto____16112 = cljs.core.next.call(null,G__16102__16105);

if(cljs.core.truth_(temp__3698__auto____16112))
{var G__16102__16113 = temp__3698__auto____16112;

{
var G__16125 = cljs.core.first.call(null,G__16102__16113);
var G__16126 = G__16102__16113;
child__16104 = G__16125;
G__16102__16105 = G__16126;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16101;
})();
var other_children__16118 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16098) - 1),(function (){
return first_child__16114.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16098)))
{f.call(null,cljs.core.first.call(null,parents__16098),first_child__16114);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16077_SHARP_,p2__16078_SHARP_){
return f.call(null,p1__16077_SHARP_,p2__16078_SHARP_);
}),cljs.core.rest.call(null,parents__16098),other_children__16118));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16136 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16137 = (function (nl,n){
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
return lazy_nodelist__16136.call(this,nl);
case  2 :
return lazy_nodelist__16137.call(this,nl,n);
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
var inner_wrapper__16158 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16160 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16158));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16160),1)))
{return inner_wrapper__16158.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16158));
} else
{return children__16160;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16174__16177 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16179 = cljs.core.nth.call(null,vec__16174__16177,0,null);
var table_level__16180 = cljs.core.nth.call(null,vec__16174__16177,1,null);
var ___16182 = cljs.core.nthnext.call(null,vec__16174__16177,2);
var wrapper__16183 = domina.create_wrapper.call(null,table_level__16180);

domina.set_wrapper_html_BANG_.call(null,wrapper__16183,content);
return domina.extract_wrapper_dom.call(null,wrapper__16183,table_level__16180);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6717__auto____16192 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16193 = x__6717__auto____16192;

if(cljs.core.truth_(and__3546__auto____16193))
{var and__3546__auto____16198 = x__6717__auto____16192.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16198))
{var and__3546__auto____16199 = x__6717__auto____16192.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16199))
{return cljs.core.not.call(null,x__6717__auto____16192.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16199;
}
} else
{return and__3546__auto____16198;
}
} else
{return and__3546__auto____16193;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6717__auto____16192);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6717__auto____16204 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16206 = x__6717__auto____16204;

if(cljs.core.truth_(and__3546__auto____16206))
{var and__3546__auto____16207 = x__6717__auto____16204.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16207))
{var and__3546__auto____16208 = x__6717__auto____16204.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16208))
{return cljs.core.not.call(null,x__6717__auto____16204.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16208;
}
} else
{return and__3546__auto____16207;
}
} else
{return and__3546__auto____16206;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6717__auto____16204);
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
var G__16244 = null;
var G__16244__16245 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16244__16246 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16244 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16244__16245.call(this,nodelist,n);
case  3 :
return G__16244__16246.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16244;
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
var G__16277 = null;
var G__16277__16278 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16277__16279 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16277 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16277__16278.call(this,nodelist,n);
case  3 :
return G__16277__16279.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16277;
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
var G__16283 = null;
var G__16283__16284 = (function (coll,n){
return coll.item(n);
});
var G__16283__16285 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16283 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16283__16284.call(this,coll,n);
case  3 :
return G__16283__16285.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16283;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
