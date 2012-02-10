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
if(cljs.core.truth_((function (){var and__3546__auto____15724 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15724))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15724;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15725 = content;

if(cljs.core.truth_(and__3546__auto____15725))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15725;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15727 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15727))
{return or__3548__auto____15727;
} else
{var or__3548__auto____15744 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15744))
{return or__3548__auto____15744;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15745 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15745))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15745;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15746 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15746))
{return or__3548__auto____15746;
} else
{var or__3548__auto____15748 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15748))
{return or__3548__auto____15748;
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
if(cljs.core.truth_((void 0 === domina.t15753)))
{
/**
* @constructor
*/
domina.t15753 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15753.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15753");
});
domina.t15753.prototype.domina$DomContent$ = true;
domina.t15753.prototype.domina$DomContent$nodes = (function (_){
var this__15758 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15758.class_name));
});
domina.t15753.prototype.domina$DomContent$single_node = (function (_){
var this__15762 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15762.class_name));
});
domina.t15753.prototype.cljs$core$IMeta$ = true;
domina.t15753.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15763 = this;
return this__15763.__meta;
});
domina.t15753.prototype.cljs$core$IWithMeta$ = true;
domina.t15753.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15764 = this;
return (new domina.t15753(this__15764.class_name,this__15764.by_class,__meta));
});
domina.t15753;
} else
{}
return (new domina.t15753(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15770_SHARP_){
return p1__15770_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15774_SHARP_,p2__15775_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15774_SHARP_,p2__15775_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15784_SHARP_,p2__15783_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15783_SHARP_,p1__15784_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15787_SHARP_,p2__15786_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15786_SHARP_,p1__15787_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15791_SHARP_,p2__15790_SHARP_){
return goog.dom.replaceNode.call(null,p2__15790_SHARP_,p1__15791_SHARP_);
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
var s__15793 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15793))))
{return s__15793;
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
var G__15814__15815 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15814__15815))
{var n__15816 = cljs.core.first.call(null,G__15814__15815);
var G__15814__15817 = G__15814__15815;

while(true){
goog.style.setStyle.call(null,n__15816,cljs.core.name.call(null,name),value);
var temp__3698__auto____15818 = cljs.core.next.call(null,G__15814__15817);

if(cljs.core.truth_(temp__3698__auto____15818))
{var G__15814__15819 = temp__3698__auto____15818;

{
var G__15820 = cljs.core.first.call(null,G__15814__15819);
var G__15821 = G__15814__15819;
n__15816 = G__15820;
G__15814__15817 = G__15821;
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
var G__15823__15827 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15823__15827))
{var n__15830 = cljs.core.first.call(null,G__15823__15827);
var G__15823__15831 = G__15823__15827;

while(true){
n__15830.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15835 = cljs.core.next.call(null,G__15823__15831);

if(cljs.core.truth_(temp__3698__auto____15835))
{var G__15823__15837 = temp__3698__auto____15835;

{
var G__15844 = cljs.core.first.call(null,G__15823__15837);
var G__15845 = G__15823__15837;
n__15830 = G__15844;
G__15823__15831 = G__15845;
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
var vec__15851__15852 = pair.split(/\s*:\s*/);
var k__15854 = cljs.core.nth.call(null,vec__15851__15852,0,null);
var v__15855 = cljs.core.nth.call(null,vec__15851__15852,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15857 = k__15854;

if(cljs.core.truth_(and__3546__auto____15857))
{return v__15855;
} else
{return and__3546__auto____15857;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15854.toLowerCase()),v__15855);
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
var node__15873 = domina.single_node.call(null,content);
var attrs__15876 = node__15873.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15868_SHARP_){
var attr__15882 = attrs__15876.item(p1__15868_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15882.nodeName.toLowerCase())],[attr__15882.nodeValue]);
}),cljs.core.range.call(null,attrs__15876.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15903__15904 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15903__15904))
{var G__15909__15912 = cljs.core.first.call(null,G__15903__15904);
var vec__15911__15913 = G__15909__15912;
var name__15914 = cljs.core.nth.call(null,vec__15911__15913,0,null);
var value__15915 = cljs.core.nth.call(null,vec__15911__15913,1,null);
var G__15903__15916 = G__15903__15904;

var G__15909__15917 = G__15909__15912;
var G__15903__15918 = G__15903__15916;

while(true){
var vec__15921__15922 = G__15909__15917;
var name__15923 = cljs.core.nth.call(null,vec__15921__15922,0,null);
var value__15926 = cljs.core.nth.call(null,vec__15921__15922,1,null);
var G__15903__15927 = G__15903__15918;

domina.set_style_BANG_.call(null,content,name__15923,value__15926);
var temp__3698__auto____15928 = cljs.core.next.call(null,G__15903__15927);

if(cljs.core.truth_(temp__3698__auto____15928))
{var G__15903__15930 = temp__3698__auto____15928;

{
var G__15949 = cljs.core.first.call(null,G__15903__15930);
var G__15950 = G__15903__15930;
G__15909__15917 = G__15949;
G__15903__15918 = G__15950;
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
{var G__15955__15957 = cljs.core.first.call(null,G__15952__15953);
var vec__15956__15958 = G__15955__15957;
var name__15960 = cljs.core.nth.call(null,vec__15956__15958,0,null);
var value__15961 = cljs.core.nth.call(null,vec__15956__15958,1,null);
var G__15952__15962 = G__15952__15953;

var G__15955__15978 = G__15955__15957;
var G__15952__15982 = G__15952__15962;

while(true){
var vec__15983__15986 = G__15955__15978;
var name__15988 = cljs.core.nth.call(null,vec__15983__15986,0,null);
var value__15990 = cljs.core.nth.call(null,vec__15983__15986,1,null);
var G__15952__15993 = G__15952__15982;

domina.set_attr_BANG_.call(null,content,name__15988,value__15990);
var temp__3698__auto____16016 = cljs.core.next.call(null,G__15952__15993);

if(cljs.core.truth_(temp__3698__auto____16016))
{var G__15952__16020 = temp__3698__auto____16016;

{
var G__16045 = cljs.core.first.call(null,G__15952__16020);
var G__16046 = G__15952__16020;
G__15955__15978 = G__16045;
G__15952__15982 = G__16046;
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
var G__16058__16059 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16058__16059))
{var node__16060 = cljs.core.first.call(null,G__16058__16059);
var G__16058__16061 = G__16058__16059;

while(true){
goog.dom.classes.add.call(null,node__16060,class$);
var temp__3698__auto____16070 = cljs.core.next.call(null,G__16058__16061);

if(cljs.core.truth_(temp__3698__auto____16070))
{var G__16058__16071 = temp__3698__auto____16070;

{
var G__16074 = cljs.core.first.call(null,G__16058__16071);
var G__16075 = G__16058__16071;
node__16060 = G__16074;
G__16058__16061 = G__16075;
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
{var node__16085 = cljs.core.first.call(null,G__16081__16083);
var G__16081__16087 = G__16081__16083;

while(true){
goog.dom.classes.remove.call(null,node__16085,class$);
var temp__3698__auto____16088 = cljs.core.next.call(null,G__16081__16087);

if(cljs.core.truth_(temp__3698__auto____16088))
{var G__16081__16089 = temp__3698__auto____16088;

{
var G__16092 = cljs.core.first.call(null,G__16081__16089);
var G__16093 = G__16081__16089;
node__16085 = G__16092;
G__16081__16087 = G__16093;
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
var text__16133 = (function (content){
return text.call(null,content,true);
});
var text__16134 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16133.call(this,content);
case  2 :
return text__16134.call(this,content,normalize);
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
var G__16141__16142 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16141__16142))
{var node__16146 = cljs.core.first.call(null,G__16141__16142);
var G__16141__16147 = G__16141__16142;

while(true){
goog.dom.setTextContent.call(null,node__16146,value);
var temp__3698__auto____16148 = cljs.core.next.call(null,G__16141__16147);

if(cljs.core.truth_(temp__3698__auto____16148))
{var G__16141__16153 = temp__3698__auto____16148;

{
var G__16160 = cljs.core.first.call(null,G__16141__16153);
var G__16161 = G__16141__16153;
node__16146 = G__16160;
G__16141__16147 = G__16161;
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
var G__16174__16176 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16174__16176))
{var node__16178 = cljs.core.first.call(null,G__16174__16176);
var G__16174__16179 = G__16174__16176;

while(true){
goog.dom.forms.setValue.call(null,node__16178,value);
var temp__3698__auto____16181 = cljs.core.next.call(null,G__16174__16179);

if(cljs.core.truth_(temp__3698__auto____16181))
{var G__16174__16185 = temp__3698__auto____16181;

{
var G__16188 = cljs.core.first.call(null,G__16174__16185);
var G__16189 = G__16174__16185;
node__16178 = G__16188;
G__16174__16179 = G__16189;
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
var G__16192__16193 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16192__16193))
{var node__16195 = cljs.core.first.call(null,G__16192__16193);
var G__16192__16196 = G__16192__16193;

while(true){
node__16195.innerHTML = value;
var temp__3698__auto____16197 = cljs.core.next.call(null,G__16192__16196);

if(cljs.core.truth_(temp__3698__auto____16197))
{var G__16192__16198 = temp__3698__auto____16197;

{
var G__16199 = cljs.core.first.call(null,G__16192__16198);
var G__16200 = G__16192__16198;
node__16195 = G__16199;
G__16192__16196 = G__16200;
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
var parents__16201 = domina.nodes.call(null,parent_content);
var children__16202 = domina.nodes.call(null,child_content);
var first_child__16211 = (function (){var frag__16203 = document.createDocumentFragment();

var G__16204__16205 = cljs.core.seq.call(null,children__16202);

if(cljs.core.truth_(G__16204__16205))
{var child__16206 = cljs.core.first.call(null,G__16204__16205);
var G__16204__16207 = G__16204__16205;

while(true){
frag__16203.appendChild(child__16206);
var temp__3698__auto____16208 = cljs.core.next.call(null,G__16204__16207);

if(cljs.core.truth_(temp__3698__auto____16208))
{var G__16204__16209 = temp__3698__auto____16208;

{
var G__16215 = cljs.core.first.call(null,G__16204__16209);
var G__16216 = G__16204__16209;
child__16206 = G__16215;
G__16204__16207 = G__16216;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16203;
})();
var other_children__16213 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16201) - 1),(function (){
return first_child__16211.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16201)))
{f.call(null,cljs.core.first.call(null,parents__16201),first_child__16211);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16190_SHARP_,p2__16191_SHARP_){
return f.call(null,p1__16190_SHARP_,p2__16191_SHARP_);
}),cljs.core.rest.call(null,parents__16201),other_children__16213));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16217 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16218 = (function (nl,n){
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
return lazy_nodelist__16217.call(this,nl);
case  2 :
return lazy_nodelist__16218.call(this,nl,n);
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
var inner_wrapper__16312 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16313 = cljs.core.seq.call(null,inner_wrapper__16312.childNodes);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16313),1)))
{return inner_wrapper__16312.removeChild(inner_wrapper__16312.firstChild);
} else
{return children__16313;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16314__16315 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16316 = cljs.core.nth.call(null,vec__16314__16315,0,null);
var table_level__16317 = cljs.core.nth.call(null,vec__16314__16315,1,null);
var ___16318 = cljs.core.nthnext.call(null,vec__16314__16315,2);
var wrapper__16350 = domina.create_wrapper.call(null,table_level__16317);

domina.set_wrapper_html_BANG_.call(null,wrapper__16350,content);
return domina.extract_wrapper_dom.call(null,wrapper__16350,table_level__16317);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16369 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16371 = x__445__auto____16369;

if(cljs.core.truth_(and__3546__auto____16371))
{var and__3546__auto____16372 = x__445__auto____16369.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16372))
{return cljs.core.not.call(null,x__445__auto____16369.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16372;
}
} else
{return and__3546__auto____16371;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16369);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16373 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16374 = x__445__auto____16373;

if(cljs.core.truth_(and__3546__auto____16374))
{var and__3546__auto____16375 = x__445__auto____16373.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16375))
{return cljs.core.not.call(null,x__445__auto____16373.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16375;
}
} else
{return and__3546__auto____16374;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16373);
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
if(cljs.core.truth_(NodeList))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16390 = null;
var G__16390__16391 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16390__16392 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16390 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16390__16391.call(this,nodelist,n);
case  3 :
return G__16390__16392.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16390;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16396 = null;
var G__16396__16397 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16396__16398 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16396 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16396__16397.call(this,nodelist,n);
case  3 :
return G__16396__16398.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16396;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16412 = null;
var G__16412__16413 = (function (coll,n){
return coll.item(n);
});
var G__16412__16414 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16412 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16412__16413.call(this,coll,n);
case  3 :
return G__16412__16414.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16412;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
