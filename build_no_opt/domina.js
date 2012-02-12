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
if(cljs.core.truth_((function (){var and__3546__auto____15552 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15552))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15552;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15556 = content;

if(cljs.core.truth_(and__3546__auto____15556))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15556;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15558 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15558))
{return or__3548__auto____15558;
} else
{var or__3548__auto____15560 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15560))
{return or__3548__auto____15560;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15563 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15563))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15563;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15565 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15565))
{return or__3548__auto____15565;
} else
{var or__3548__auto____15566 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15566))
{return or__3548__auto____15566;
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
if(cljs.core.truth_((void 0 === domina.t15573)))
{
/**
* @constructor
*/
domina.t15573 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15573.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15573");
});
domina.t15573.prototype.domina$DomContent$ = true;
domina.t15573.prototype.domina$DomContent$nodes = (function (_){
var this__15574 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15574.class_name));
});
domina.t15573.prototype.domina$DomContent$single_node = (function (_){
var this__15605 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15605.class_name));
});
domina.t15573.prototype.cljs$core$IMeta$ = true;
domina.t15573.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15607 = this;
return this__15607.__meta;
});
domina.t15573.prototype.cljs$core$IWithMeta$ = true;
domina.t15573.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15610 = this;
return (new domina.t15573(this__15610.class_name,this__15610.by_class,__meta));
});
domina.t15573;
} else
{}
return (new domina.t15573(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15616_SHARP_){
return p1__15616_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15625_SHARP_,p2__15626_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15625_SHARP_,p2__15626_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15636_SHARP_,p2__15635_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15635_SHARP_,p1__15636_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15639_SHARP_,p2__15638_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15638_SHARP_,p1__15639_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15645_SHARP_,p2__15644_SHARP_){
return goog.dom.replaceNode.call(null,p2__15644_SHARP_,p1__15645_SHARP_);
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
var s__15660 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15660))))
{return s__15660;
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
var G__15695__15696 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15695__15696))
{var n__15697 = cljs.core.first.call(null,G__15695__15696);
var G__15695__15698 = G__15695__15696;

while(true){
goog.style.setStyle.call(null,n__15697,cljs.core.name.call(null,name),value);
var temp__3698__auto____15701 = cljs.core.next.call(null,G__15695__15698);

if(cljs.core.truth_(temp__3698__auto____15701))
{var G__15695__15706 = temp__3698__auto____15701;

{
var G__15715 = cljs.core.first.call(null,G__15695__15706);
var G__15716 = G__15695__15706;
n__15697 = G__15715;
G__15695__15698 = G__15716;
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
var G__15720__15721 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15720__15721))
{var n__15724 = cljs.core.first.call(null,G__15720__15721);
var G__15720__15725 = G__15720__15721;

while(true){
n__15724.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15727 = cljs.core.next.call(null,G__15720__15725);

if(cljs.core.truth_(temp__3698__auto____15727))
{var G__15720__15728 = temp__3698__auto____15727;

{
var G__15731 = cljs.core.first.call(null,G__15720__15728);
var G__15732 = G__15720__15728;
n__15724 = G__15731;
G__15720__15725 = G__15732;
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
var vec__15737__15739 = pair.split(/\s*:\s*/);
var k__15740 = cljs.core.nth.call(null,vec__15737__15739,0,null);
var v__15741 = cljs.core.nth.call(null,vec__15737__15739,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15742 = k__15740;

if(cljs.core.truth_(and__3546__auto____15742))
{return v__15741;
} else
{return and__3546__auto____15742;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15740.toLowerCase()),v__15741);
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
var node__15754 = domina.single_node.call(null,content);
var attrs__15755 = node__15754.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15750_SHARP_){
var attr__15756 = attrs__15755.item(p1__15750_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15756.nodeName.toLowerCase())],[attr__15756.nodeValue]);
}),cljs.core.range.call(null,attrs__15755.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15758__15759 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15758__15759))
{var G__15761__15763 = cljs.core.first.call(null,G__15758__15759);
var vec__15762__15764 = G__15761__15763;
var name__15765 = cljs.core.nth.call(null,vec__15762__15764,0,null);
var value__15766 = cljs.core.nth.call(null,vec__15762__15764,1,null);
var G__15758__15767 = G__15758__15759;

var G__15761__15768 = G__15761__15763;
var G__15758__15769 = G__15758__15767;

while(true){
var vec__15770__15771 = G__15761__15768;
var name__15772 = cljs.core.nth.call(null,vec__15770__15771,0,null);
var value__15773 = cljs.core.nth.call(null,vec__15770__15771,1,null);
var G__15758__15774 = G__15758__15769;

domina.set_style_BANG_.call(null,content,name__15772,value__15773);
var temp__3698__auto____15775 = cljs.core.next.call(null,G__15758__15774);

if(cljs.core.truth_(temp__3698__auto____15775))
{var G__15758__15776 = temp__3698__auto____15775;

{
var G__15793 = cljs.core.first.call(null,G__15758__15776);
var G__15794 = G__15758__15776;
G__15761__15768 = G__15793;
G__15758__15769 = G__15794;
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
var G__15797__15937 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15797__15937))
{var G__15940__15943 = cljs.core.first.call(null,G__15797__15937);
var vec__15942__15946 = G__15940__15943;
var name__15947 = cljs.core.nth.call(null,vec__15942__15946,0,null);
var value__15949 = cljs.core.nth.call(null,vec__15942__15946,1,null);
var G__15797__15950 = G__15797__15937;

var G__15940__15951 = G__15940__15943;
var G__15797__15952 = G__15797__15950;

while(true){
var vec__15953__15954 = G__15940__15951;
var name__15956 = cljs.core.nth.call(null,vec__15953__15954,0,null);
var value__15957 = cljs.core.nth.call(null,vec__15953__15954,1,null);
var G__15797__15958 = G__15797__15952;

domina.set_attr_BANG_.call(null,content,name__15956,value__15957);
var temp__3698__auto____15964 = cljs.core.next.call(null,G__15797__15958);

if(cljs.core.truth_(temp__3698__auto____15964))
{var G__15797__15965 = temp__3698__auto____15964;

{
var G__15975 = cljs.core.first.call(null,G__15797__15965);
var G__15976 = G__15797__15965;
G__15940__15951 = G__15975;
G__15797__15952 = G__15976;
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
var G__16005__16007 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16005__16007))
{var node__16010 = cljs.core.first.call(null,G__16005__16007);
var G__16005__16013 = G__16005__16007;

while(true){
goog.dom.classes.add.call(null,node__16010,class$);
var temp__3698__auto____16017 = cljs.core.next.call(null,G__16005__16013);

if(cljs.core.truth_(temp__3698__auto____16017))
{var G__16005__16018 = temp__3698__auto____16017;

{
var G__16030 = cljs.core.first.call(null,G__16005__16018);
var G__16031 = G__16005__16018;
node__16010 = G__16030;
G__16005__16013 = G__16031;
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
var G__16039__16042 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16039__16042))
{var node__16045 = cljs.core.first.call(null,G__16039__16042);
var G__16039__16046 = G__16039__16042;

while(true){
goog.dom.classes.remove.call(null,node__16045,class$);
var temp__3698__auto____16049 = cljs.core.next.call(null,G__16039__16046);

if(cljs.core.truth_(temp__3698__auto____16049))
{var G__16039__16050 = temp__3698__auto____16049;

{
var G__16051 = cljs.core.first.call(null,G__16039__16050);
var G__16052 = G__16039__16050;
node__16045 = G__16051;
G__16039__16046 = G__16052;
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
var text__16057 = (function (content){
return text.call(null,content,true);
});
var text__16058 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16057.call(this,content);
case  2 :
return text__16058.call(this,content,normalize);
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
var G__16060__16061 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16060__16061))
{var node__16065 = cljs.core.first.call(null,G__16060__16061);
var G__16060__16066 = G__16060__16061;

while(true){
goog.dom.setTextContent.call(null,node__16065,value);
var temp__3698__auto____16067 = cljs.core.next.call(null,G__16060__16066);

if(cljs.core.truth_(temp__3698__auto____16067))
{var G__16060__16068 = temp__3698__auto____16067;

{
var G__16069 = cljs.core.first.call(null,G__16060__16068);
var G__16070 = G__16060__16068;
node__16065 = G__16069;
G__16060__16066 = G__16070;
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
var G__16071__16072 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16071__16072))
{var node__16073 = cljs.core.first.call(null,G__16071__16072);
var G__16071__16074 = G__16071__16072;

while(true){
goog.dom.forms.setValue.call(null,node__16073,value);
var temp__3698__auto____16075 = cljs.core.next.call(null,G__16071__16074);

if(cljs.core.truth_(temp__3698__auto____16075))
{var G__16071__16076 = temp__3698__auto____16075;

{
var G__16079 = cljs.core.first.call(null,G__16071__16076);
var G__16080 = G__16071__16076;
node__16073 = G__16079;
G__16071__16074 = G__16080;
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
var G__16089__16103 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16089__16103))
{var node__16104 = cljs.core.first.call(null,G__16089__16103);
var G__16089__16105 = G__16089__16103;

while(true){
node__16104.innerHTML = value;
var temp__3698__auto____16107 = cljs.core.next.call(null,G__16089__16105);

if(cljs.core.truth_(temp__3698__auto____16107))
{var G__16089__16109 = temp__3698__auto____16107;

{
var G__16116 = cljs.core.first.call(null,G__16089__16109);
var G__16117 = G__16089__16109;
node__16104 = G__16116;
G__16089__16105 = G__16117;
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
var parents__16119 = domina.nodes.call(null,parent_content);
var children__16120 = domina.nodes.call(null,child_content);
var first_child__16128 = (function (){var frag__16121 = document.createDocumentFragment();

var G__16122__16123 = cljs.core.seq.call(null,children__16120);

if(cljs.core.truth_(G__16122__16123))
{var child__16124 = cljs.core.first.call(null,G__16122__16123);
var G__16122__16125 = G__16122__16123;

while(true){
frag__16121.appendChild(child__16124);
var temp__3698__auto____16126 = cljs.core.next.call(null,G__16122__16125);

if(cljs.core.truth_(temp__3698__auto____16126))
{var G__16122__16127 = temp__3698__auto____16126;

{
var G__16136 = cljs.core.first.call(null,G__16122__16127);
var G__16137 = G__16122__16127;
child__16124 = G__16136;
G__16122__16125 = G__16137;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16121;
})();
var other_children__16129 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16119) - 1),(function (){
return first_child__16128.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16119)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16120)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16119)))
{f.call(null,cljs.core.first.call(null,parents__16119),first_child__16128);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16087_SHARP_,p2__16088_SHARP_){
return f.call(null,p1__16087_SHARP_,p2__16088_SHARP_);
}),cljs.core.rest.call(null,parents__16119),other_children__16129));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList or other array-like javascript thing.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16144 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16145 = (function (nl,n){
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
return lazy_nodelist__16144.call(this,nl);
case  2 :
return lazy_nodelist__16145.call(this,nl,n);
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
var inner_wrapper__16165 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16166 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16165));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16166),1)))
{return inner_wrapper__16165.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16165));
} else
{return children__16166;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16172__16173 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16175 = cljs.core.nth.call(null,vec__16172__16173,0,null);
var table_level__16176 = cljs.core.nth.call(null,vec__16172__16173,1,null);
var ___16177 = cljs.core.nthnext.call(null,vec__16172__16173,2);
var wrapper__16178 = domina.create_wrapper.call(null,table_level__16176);

domina.set_wrapper_html_BANG_.call(null,wrapper__16178,content);
return domina.extract_wrapper_dom.call(null,wrapper__16178,table_level__16176);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6769__auto____16179 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16180 = x__6769__auto____16179;

if(cljs.core.truth_(and__3546__auto____16180))
{var and__3546__auto____16181 = x__6769__auto____16179.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16181))
{var and__3546__auto____16182 = x__6769__auto____16179.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16182))
{return cljs.core.not.call(null,x__6769__auto____16179.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16182;
}
} else
{return and__3546__auto____16181;
}
} else
{return and__3546__auto____16180;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6769__auto____16179);
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
if(cljs.core.truth_((function (){var x__6769__auto____16183 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16184 = x__6769__auto____16183;

if(cljs.core.truth_(and__3546__auto____16184))
{var and__3546__auto____16185 = x__6769__auto____16183.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16185))
{var and__3546__auto____16186 = x__6769__auto____16183.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16186))
{return cljs.core.not.call(null,x__6769__auto____16183.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16186;
}
} else
{return and__3546__auto____16185;
}
} else
{return and__3546__auto____16184;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6769__auto____16183);
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
var G__16192 = null;
var G__16192__16193 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16192__16194 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16192 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16192__16193.call(this,nodelist,n);
case  3 :
return G__16192__16194.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16192;
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
var G__16201 = null;
var G__16201__16202 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16201__16203 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16201 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16201__16202.call(this,nodelist,n);
case  3 :
return G__16201__16203.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16201;
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
var G__16212 = null;
var G__16212__16213 = (function (coll,n){
return coll.item(n);
});
var G__16212__16214 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16212 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16212__16213.call(this,coll,n);
case  3 :
return G__16212__16214.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16212;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
