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
if(cljs.core.truth_((function (){var and__3546__auto____15753 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15753))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15753;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15756 = content;

if(cljs.core.truth_(and__3546__auto____15756))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15756;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15757 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15757))
{return or__3548__auto____15757;
} else
{var or__3548__auto____15758 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15758))
{return or__3548__auto____15758;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15760 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15760))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15760;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15762 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15762))
{return or__3548__auto____15762;
} else
{var or__3548__auto____15763 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15763))
{return or__3548__auto____15763;
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
var this__15779 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15779.class_name));
});
domina.t15776.prototype.domina$DomContent$single_node = (function (_){
var this__15780 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15780.class_name));
});
domina.t15776.prototype.cljs$core$IMeta$ = true;
domina.t15776.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15782 = this;
return this__15782.__meta;
});
domina.t15776.prototype.cljs$core$IWithMeta$ = true;
domina.t15776.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15784 = this;
return (new domina.t15776(this__15784.class_name,this__15784.by_class,__meta));
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
return cljs.core.map.call(null,(function (p1__15790_SHARP_){
return p1__15790_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15798_SHARP_,p2__15799_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15798_SHARP_,p2__15799_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15801_SHARP_,p2__15800_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15800_SHARP_,p1__15801_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15803_SHARP_,p2__15802_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15802_SHARP_,p1__15803_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15805_SHARP_,p2__15804_SHARP_){
return goog.dom.replaceNode.call(null,p2__15804_SHARP_,p1__15805_SHARP_);
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
var s__15815 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15815))))
{return s__15815;
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
var G__15824__15828 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15824__15828))
{var n__15829 = cljs.core.first.call(null,G__15824__15828);
var G__15824__15830 = G__15824__15828;

while(true){
goog.style.setStyle.call(null,n__15829,cljs.core.name.call(null,name),value);
var temp__3698__auto____15833 = cljs.core.next.call(null,G__15824__15830);

if(cljs.core.truth_(temp__3698__auto____15833))
{var G__15824__15834 = temp__3698__auto____15833;

{
var G__15835 = cljs.core.first.call(null,G__15824__15834);
var G__15836 = G__15824__15834;
n__15829 = G__15835;
G__15824__15830 = G__15836;
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
var G__15838__15839 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15838__15839))
{var n__15840 = cljs.core.first.call(null,G__15838__15839);
var G__15838__15841 = G__15838__15839;

while(true){
n__15840.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15843 = cljs.core.next.call(null,G__15838__15841);

if(cljs.core.truth_(temp__3698__auto____15843))
{var G__15838__15844 = temp__3698__auto____15843;

{
var G__15849 = cljs.core.first.call(null,G__15838__15844);
var G__15850 = G__15838__15844;
n__15840 = G__15849;
G__15838__15841 = G__15850;
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
var vec__15852__15853 = pair.split(/\s*:\s*/);
var k__15855 = cljs.core.nth.call(null,vec__15852__15853,0,null);
var v__15858 = cljs.core.nth.call(null,vec__15852__15853,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15859 = k__15855;

if(cljs.core.truth_(and__3546__auto____15859))
{return v__15858;
} else
{return and__3546__auto____15859;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15855.toLowerCase()),v__15858);
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
var node__15865 = domina.single_node.call(null,content);
var attrs__15866 = node__15865.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15864_SHARP_){
var attr__15867 = attrs__15866.item(p1__15864_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15867.nodeName.toLowerCase())],[attr__15867.nodeValue]);
}),cljs.core.range.call(null,attrs__15866.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15869__15870 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15869__15870))
{var G__15872__15875 = cljs.core.first.call(null,G__15869__15870);
var vec__15873__15877 = G__15872__15875;
var name__15879 = cljs.core.nth.call(null,vec__15873__15877,0,null);
var value__15880 = cljs.core.nth.call(null,vec__15873__15877,1,null);
var G__15869__15881 = G__15869__15870;

var G__15872__15882 = G__15872__15875;
var G__15869__15883 = G__15869__15881;

while(true){
var vec__15884__15885 = G__15872__15882;
var name__15886 = cljs.core.nth.call(null,vec__15884__15885,0,null);
var value__15887 = cljs.core.nth.call(null,vec__15884__15885,1,null);
var G__15869__15888 = G__15869__15883;

domina.set_style_BANG_.call(null,content,name__15886,value__15887);
var temp__3698__auto____15889 = cljs.core.next.call(null,G__15869__15888);

if(cljs.core.truth_(temp__3698__auto____15889))
{var G__15869__15890 = temp__3698__auto____15889;

{
var G__15894 = cljs.core.first.call(null,G__15869__15890);
var G__15895 = G__15869__15890;
G__15872__15882 = G__15894;
G__15869__15883 = G__15895;
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
var G__15898__15899 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15898__15899))
{var G__15901__15903 = cljs.core.first.call(null,G__15898__15899);
var vec__15902__15904 = G__15901__15903;
var name__15906 = cljs.core.nth.call(null,vec__15902__15904,0,null);
var value__15922 = cljs.core.nth.call(null,vec__15902__15904,1,null);
var G__15898__15923 = G__15898__15899;

var G__15901__15924 = G__15901__15903;
var G__15898__15925 = G__15898__15923;

while(true){
var vec__15926__15927 = G__15901__15924;
var name__15928 = cljs.core.nth.call(null,vec__15926__15927,0,null);
var value__15930 = cljs.core.nth.call(null,vec__15926__15927,1,null);
var G__15898__15931 = G__15898__15925;

domina.set_attr_BANG_.call(null,content,name__15928,value__15930);
var temp__3698__auto____15932 = cljs.core.next.call(null,G__15898__15931);

if(cljs.core.truth_(temp__3698__auto____15932))
{var G__15898__15933 = temp__3698__auto____15932;

{
var G__15937 = cljs.core.first.call(null,G__15898__15933);
var G__15938 = G__15898__15933;
G__15901__15924 = G__15937;
G__15898__15925 = G__15938;
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
var G__15943__15946 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15943__15946))
{var node__15948 = cljs.core.first.call(null,G__15943__15946);
var G__15943__15949 = G__15943__15946;

while(true){
goog.dom.classes.add.call(null,node__15948,class$);
var temp__3698__auto____15950 = cljs.core.next.call(null,G__15943__15949);

if(cljs.core.truth_(temp__3698__auto____15950))
{var G__15943__15951 = temp__3698__auto____15950;

{
var G__15952 = cljs.core.first.call(null,G__15943__15951);
var G__15953 = G__15943__15951;
node__15948 = G__15952;
G__15943__15949 = G__15953;
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
var G__15954__15955 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15954__15955))
{var node__15957 = cljs.core.first.call(null,G__15954__15955);
var G__15954__15958 = G__15954__15955;

while(true){
goog.dom.classes.remove.call(null,node__15957,class$);
var temp__3698__auto____15959 = cljs.core.next.call(null,G__15954__15958);

if(cljs.core.truth_(temp__3698__auto____15959))
{var G__15954__15960 = temp__3698__auto____15959;

{
var G__15961 = cljs.core.first.call(null,G__15954__15960);
var G__15962 = G__15954__15960;
node__15957 = G__15961;
G__15954__15958 = G__15962;
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
var text__15966 = (function (content){
return text.call(null,content,true);
});
var text__15967 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15966.call(this,content);
case  2 :
return text__15967.call(this,content,normalize);
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
var G__15969__15971 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15969__15971))
{var node__15973 = cljs.core.first.call(null,G__15969__15971);
var G__15969__15974 = G__15969__15971;

while(true){
goog.dom.setTextContent.call(null,node__15973,value);
var temp__3698__auto____15978 = cljs.core.next.call(null,G__15969__15974);

if(cljs.core.truth_(temp__3698__auto____15978))
{var G__15969__15980 = temp__3698__auto____15978;

{
var G__15987 = cljs.core.first.call(null,G__15969__15980);
var G__15988 = G__15969__15980;
node__15973 = G__15987;
G__15969__15974 = G__15988;
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
var G__15994__15997 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15994__15997))
{var node__16000 = cljs.core.first.call(null,G__15994__15997);
var G__15994__16001 = G__15994__15997;

while(true){
goog.dom.forms.setValue.call(null,node__16000,value);
var temp__3698__auto____16005 = cljs.core.next.call(null,G__15994__16001);

if(cljs.core.truth_(temp__3698__auto____16005))
{var G__15994__16008 = temp__3698__auto____16005;

{
var G__16011 = cljs.core.first.call(null,G__15994__16008);
var G__16012 = G__15994__16008;
node__16000 = G__16011;
G__15994__16001 = G__16012;
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
var G__16028__16031 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16028__16031))
{var node__16033 = cljs.core.first.call(null,G__16028__16031);
var G__16028__16034 = G__16028__16031;

while(true){
node__16033.innerHTML = value;
var temp__3698__auto____16036 = cljs.core.next.call(null,G__16028__16034);

if(cljs.core.truth_(temp__3698__auto____16036))
{var G__16028__16038 = temp__3698__auto____16036;

{
var G__16040 = cljs.core.first.call(null,G__16028__16038);
var G__16041 = G__16028__16038;
node__16033 = G__16040;
G__16028__16034 = G__16041;
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
var parents__16045 = domina.nodes.call(null,parent_content);
var children__16046 = domina.nodes.call(null,child_content);
var first_child__16060 = (function (){var frag__16048 = document.createDocumentFragment();

var G__16049__16051 = cljs.core.seq.call(null,children__16046);

if(cljs.core.truth_(G__16049__16051))
{var child__16055 = cljs.core.first.call(null,G__16049__16051);
var G__16049__16056 = G__16049__16051;

while(true){
frag__16048.appendChild(child__16055);
var temp__3698__auto____16058 = cljs.core.next.call(null,G__16049__16056);

if(cljs.core.truth_(temp__3698__auto____16058))
{var G__16049__16059 = temp__3698__auto____16058;

{
var G__16076 = cljs.core.first.call(null,G__16049__16059);
var G__16078 = G__16049__16059;
child__16055 = G__16076;
G__16049__16056 = G__16078;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16048;
})();
var other_children__16061 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16045) - 1),(function (){
return first_child__16060.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16045)))
{f.call(null,cljs.core.first.call(null,parents__16045),first_child__16060);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16022_SHARP_,p2__16023_SHARP_){
return f.call(null,p1__16022_SHARP_,p2__16023_SHARP_);
}),cljs.core.rest.call(null,parents__16045),other_children__16061));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16103 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16104 = (function (nl,n){
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
return lazy_nodelist__16103.call(this,nl);
case  2 :
return lazy_nodelist__16104.call(this,nl,n);
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
var children__16159 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16158));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16159),1)))
{return inner_wrapper__16158.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16158));
} else
{return children__16159;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16163__16164 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16166 = cljs.core.nth.call(null,vec__16163__16164,0,null);
var table_level__16168 = cljs.core.nth.call(null,vec__16163__16164,1,null);
var ___16169 = cljs.core.nthnext.call(null,vec__16163__16164,2);
var wrapper__16173 = domina.create_wrapper.call(null,table_level__16168);

domina.set_wrapper_html_BANG_.call(null,wrapper__16173,content);
return domina.extract_wrapper_dom.call(null,wrapper__16173,table_level__16168);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16184 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16186 = x__445__auto____16184;

if(cljs.core.truth_(and__3546__auto____16186))
{var and__3546__auto____16188 = x__445__auto____16184.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16188))
{return cljs.core.not.call(null,x__445__auto____16184.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16188;
}
} else
{return and__3546__auto____16186;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16184);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16198 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16199 = x__445__auto____16198;

if(cljs.core.truth_(and__3546__auto____16199))
{var and__3546__auto____16200 = x__445__auto____16198.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16200))
{return cljs.core.not.call(null,x__445__auto____16198.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16200;
}
} else
{return and__3546__auto____16199;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16198);
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
var G__16210 = null;
var G__16210__16211 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16210__16212 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16210 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16210__16211.call(this,nodelist,n);
case  3 :
return G__16210__16212.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16210;
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
var G__16239 = null;
var G__16239__16240 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16239__16241 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16239 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16239__16240.call(this,nodelist,n);
case  3 :
return G__16239__16241.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16239;
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
var G__16263 = null;
var G__16263__16266 = (function (coll,n){
return coll.item(n);
});
var G__16263__16267 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16263 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16263__16266.call(this,coll,n);
case  3 :
return G__16263__16267.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16263;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
