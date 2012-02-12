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
if(cljs.core.truth_((function (){var and__3546__auto____15647 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15647))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15647;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15658 = content;

if(cljs.core.truth_(and__3546__auto____15658))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15658;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15660 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15660))
{return or__3548__auto____15660;
} else
{var or__3548__auto____15662 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15662))
{return or__3548__auto____15662;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15664 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15664))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15664;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15666 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15666))
{return or__3548__auto____15666;
} else
{var or__3548__auto____15668 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15668))
{return or__3548__auto____15668;
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
if(cljs.core.truth_((void 0 === domina.t15676)))
{
/**
* @constructor
*/
domina.t15676 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15676.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15676");
});
domina.t15676.prototype.domina$DomContent$ = true;
domina.t15676.prototype.domina$DomContent$nodes = (function (_){
var this__15708 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15708.class_name)));
});
domina.t15676.prototype.domina$DomContent$single_node = (function (_){
var this__15710 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15710.class_name)));
});
domina.t15676.prototype.cljs$core$IMeta$ = true;
domina.t15676.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15712 = this;
return this__15712.__meta;
});
domina.t15676.prototype.cljs$core$IWithMeta$ = true;
domina.t15676.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15713 = this;
return (new domina.t15676(this__15713.class_name,this__15713.by_class,__meta));
});
domina.t15676;
} else
{}
return (new domina.t15676(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15720_SHARP_){
return p1__15720_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15722_SHARP_,p2__15723_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15722_SHARP_,p2__15723_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15729_SHARP_,p2__15728_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15728_SHARP_,p1__15729_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15731_SHARP_,p2__15730_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15730_SHARP_,p1__15731_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15735_SHARP_,p2__15734_SHARP_){
return goog.dom.replaceNode.call(null,p2__15734_SHARP_,p1__15735_SHARP_);
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
var s__15747 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15747))))
{return s__15747;
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
var G__15750__15752 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15750__15752))
{var n__15754 = cljs.core.first.call(null,G__15750__15752);
var G__15750__15756 = G__15750__15752;

while(true){
goog.style.setStyle.call(null,n__15754,cljs.core.name.call(null,name),value);
var temp__3698__auto____15758 = cljs.core.next.call(null,G__15750__15756);

if(cljs.core.truth_(temp__3698__auto____15758))
{var G__15750__15759 = temp__3698__auto____15758;

{
var G__15760 = cljs.core.first.call(null,G__15750__15759);
var G__15761 = G__15750__15759;
n__15754 = G__15760;
G__15750__15756 = G__15761;
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
var G__15762__15763 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15762__15763))
{var n__15764 = cljs.core.first.call(null,G__15762__15763);
var G__15762__15765 = G__15762__15763;

while(true){
n__15764.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15766 = cljs.core.next.call(null,G__15762__15765);

if(cljs.core.truth_(temp__3698__auto____15766))
{var G__15762__15767 = temp__3698__auto____15766;

{
var G__15773 = cljs.core.first.call(null,G__15762__15767);
var G__15774 = G__15762__15767;
n__15764 = G__15773;
G__15762__15765 = G__15774;
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
var vec__15778__15779 = pair.split(/\s*:\s*/);
var k__15781 = cljs.core.nth.call(null,vec__15778__15779,0,null);
var v__15782 = cljs.core.nth.call(null,vec__15778__15779,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15784 = k__15781;

if(cljs.core.truth_(and__3546__auto____15784))
{return v__15782;
} else
{return and__3546__auto____15784;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15781.toLowerCase()),v__15782);
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
var node__15797 = domina.single_node.call(null,content);
var attrs__15798 = node__15797.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15792_SHARP_){
var attr__15800 = attrs__15798.item(p1__15792_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15800.nodeName.toLowerCase())],[attr__15800.nodeValue]);
}),cljs.core.range.call(null,attrs__15798.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15806__15809 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15806__15809))
{var G__15811__15814 = cljs.core.first.call(null,G__15806__15809);
var vec__15813__15815 = G__15811__15814;
var name__15816 = cljs.core.nth.call(null,vec__15813__15815,0,null);
var value__15817 = cljs.core.nth.call(null,vec__15813__15815,1,null);
var G__15806__15818 = G__15806__15809;

var G__15811__15819 = G__15811__15814;
var G__15806__15820 = G__15806__15818;

while(true){
var vec__15821__15822 = G__15811__15819;
var name__15823 = cljs.core.nth.call(null,vec__15821__15822,0,null);
var value__15824 = cljs.core.nth.call(null,vec__15821__15822,1,null);
var G__15806__15825 = G__15806__15820;

domina.set_style_BANG_.call(null,content,name__15823,value__15824);
var temp__3698__auto____15826 = cljs.core.next.call(null,G__15806__15825);

if(cljs.core.truth_(temp__3698__auto____15826))
{var G__15806__15828 = temp__3698__auto____15826;

{
var G__15836 = cljs.core.first.call(null,G__15806__15828);
var G__15837 = G__15806__15828;
G__15811__15819 = G__15836;
G__15806__15820 = G__15837;
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
var G__15838__15839 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15838__15839))
{var G__15841__15843 = cljs.core.first.call(null,G__15838__15839);
var vec__15842__15844 = G__15841__15843;
var name__15845 = cljs.core.nth.call(null,vec__15842__15844,0,null);
var value__15846 = cljs.core.nth.call(null,vec__15842__15844,1,null);
var G__15838__15847 = G__15838__15839;

var G__15841__15848 = G__15841__15843;
var G__15838__15849 = G__15838__15847;

while(true){
var vec__15850__15851 = G__15841__15848;
var name__15852 = cljs.core.nth.call(null,vec__15850__15851,0,null);
var value__15854 = cljs.core.nth.call(null,vec__15850__15851,1,null);
var G__15838__15855 = G__15838__15849;

domina.set_attr_BANG_.call(null,content,name__15852,value__15854);
var temp__3698__auto____15856 = cljs.core.next.call(null,G__15838__15855);

if(cljs.core.truth_(temp__3698__auto____15856))
{var G__15838__15857 = temp__3698__auto____15856;

{
var G__15861 = cljs.core.first.call(null,G__15838__15857);
var G__15862 = G__15838__15857;
G__15841__15848 = G__15861;
G__15838__15849 = G__15862;
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
var G__15872__15875 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15872__15875))
{var node__15878 = cljs.core.first.call(null,G__15872__15875);
var G__15872__15879 = G__15872__15875;

while(true){
goog.dom.classes.add.call(null,node__15878,class$);
var temp__3698__auto____15882 = cljs.core.next.call(null,G__15872__15879);

if(cljs.core.truth_(temp__3698__auto____15882))
{var G__15872__15884 = temp__3698__auto____15882;

{
var G__15887 = cljs.core.first.call(null,G__15872__15884);
var G__15888 = G__15872__15884;
node__15878 = G__15887;
G__15872__15879 = G__15888;
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
var G__15891__15892 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15891__15892))
{var node__15894 = cljs.core.first.call(null,G__15891__15892);
var G__15891__15896 = G__15891__15892;

while(true){
goog.dom.classes.remove.call(null,node__15894,class$);
var temp__3698__auto____15899 = cljs.core.next.call(null,G__15891__15896);

if(cljs.core.truth_(temp__3698__auto____15899))
{var G__15891__15900 = temp__3698__auto____15899;

{
var G__15907 = cljs.core.first.call(null,G__15891__15900);
var G__15908 = G__15891__15900;
node__15894 = G__15907;
G__15891__15896 = G__15908;
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
var text__15920 = (function (content){
return text.call(null,content,true);
});
var text__15921 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15920.call(this,content);
case  2 :
return text__15921.call(this,content,normalize);
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
var G__15935__15938 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15935__15938))
{var node__15940 = cljs.core.first.call(null,G__15935__15938);
var G__15935__15941 = G__15935__15938;

while(true){
goog.dom.setTextContent.call(null,node__15940,value);
var temp__3698__auto____15946 = cljs.core.next.call(null,G__15935__15941);

if(cljs.core.truth_(temp__3698__auto____15946))
{var G__15935__15947 = temp__3698__auto____15946;

{
var G__15955 = cljs.core.first.call(null,G__15935__15947);
var G__15957 = G__15935__15947;
node__15940 = G__15955;
G__15935__15941 = G__15957;
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
var G__15963__15966 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15963__15966))
{var node__15967 = cljs.core.first.call(null,G__15963__15966);
var G__15963__15968 = G__15963__15966;

while(true){
goog.dom.forms.setValue.call(null,node__15967,value);
var temp__3698__auto____15969 = cljs.core.next.call(null,G__15963__15968);

if(cljs.core.truth_(temp__3698__auto____15969))
{var G__15963__15971 = temp__3698__auto____15969;

{
var G__15976 = cljs.core.first.call(null,G__15963__15971);
var G__15977 = G__15963__15971;
node__15967 = G__15976;
G__15963__15968 = G__15977;
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
var G__16020__16021 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16020__16021))
{var node__16022 = cljs.core.first.call(null,G__16020__16021);
var G__16020__16023 = G__16020__16021;

while(true){
node__16022.innerHTML = value;
var temp__3698__auto____16028 = cljs.core.next.call(null,G__16020__16023);

if(cljs.core.truth_(temp__3698__auto____16028))
{var G__16020__16029 = temp__3698__auto____16028;

{
var G__16035 = cljs.core.first.call(null,G__16020__16029);
var G__16037 = G__16020__16029;
node__16022 = G__16035;
G__16020__16023 = G__16037;
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
var parents__16051 = domina.nodes.call(null,parent_content);
var children__16053 = domina.nodes.call(null,child_content);
var first_child__16071 = (function (){var frag__16055 = document.createDocumentFragment();

var G__16062__16063 = cljs.core.seq.call(null,children__16053);

if(cljs.core.truth_(G__16062__16063))
{var child__16064 = cljs.core.first.call(null,G__16062__16063);
var G__16062__16065 = G__16062__16063;

while(true){
frag__16055.appendChild(child__16064);
var temp__3698__auto____16067 = cljs.core.next.call(null,G__16062__16065);

if(cljs.core.truth_(temp__3698__auto____16067))
{var G__16062__16068 = temp__3698__auto____16067;

{
var G__16080 = cljs.core.first.call(null,G__16062__16068);
var G__16082 = G__16062__16068;
child__16064 = G__16080;
G__16062__16065 = G__16082;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16055;
})();
var other_children__16074 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16051) - 1),(function (){
return first_child__16071.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16051)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16053)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16051)))
{f.call(null,cljs.core.first.call(null,parents__16051),first_child__16071);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15979_SHARP_,p2__15980_SHARP_){
return f.call(null,p1__15979_SHARP_,p2__15980_SHARP_);
}),cljs.core.rest.call(null,parents__16051),other_children__16074));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16094 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16095 = (function (nl,n){
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
return lazy_nodelist__16094.call(this,nl);
case  2 :
return lazy_nodelist__16095.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6758__auto____16099 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16102 = x__6758__auto____16099;

if(cljs.core.truth_(and__3546__auto____16102))
{var and__3546__auto____16103 = x__6758__auto____16099.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16103))
{var and__3546__auto____16104 = x__6758__auto____16099.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16104))
{return cljs.core.not.call(null,x__6758__auto____16099.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16104;
}
} else
{return and__3546__auto____16103;
}
} else
{return and__3546__auto____16102;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6758__auto____16099);
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
var inner_wrapper__16118 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16120 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16118));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16120),1)))
{return inner_wrapper__16118.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16118));
} else
{return children__16120;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16134__16137 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16138 = cljs.core.nth.call(null,vec__16134__16137,0,null);
var table_level__16139 = cljs.core.nth.call(null,vec__16134__16137,1,null);
var ___16141 = cljs.core.nthnext.call(null,vec__16134__16137,2);
var wrapper__16142 = domina.create_wrapper.call(null,table_level__16139);

domina.set_wrapper_html_BANG_.call(null,wrapper__16142,content);
return domina.extract_wrapper_dom.call(null,wrapper__16142,table_level__16139);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6758__auto____16150 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16152 = x__6758__auto____16150;

if(cljs.core.truth_(and__3546__auto____16152))
{var and__3546__auto____16159 = x__6758__auto____16150.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16159))
{var and__3546__auto____16160 = x__6758__auto____16150.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16160))
{return cljs.core.not.call(null,x__6758__auto____16150.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16160;
}
} else
{return and__3546__auto____16159;
}
} else
{return and__3546__auto____16152;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6758__auto____16150);
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
if(cljs.core.truth_((function (){var x__6758__auto____16165 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16167 = x__6758__auto____16165;

if(cljs.core.truth_(and__3546__auto____16167))
{var and__3546__auto____16195 = x__6758__auto____16165.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16195))
{var and__3546__auto____16196 = x__6758__auto____16165.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16196))
{return cljs.core.not.call(null,x__6758__auto____16165.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16196;
}
} else
{return and__3546__auto____16195;
}
} else
{return and__3546__auto____16167;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6758__auto____16165);
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
var G__16217 = null;
var G__16217__16218 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16217__16219 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16217 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16217__16218.call(this,nodelist,n);
case  3 :
return G__16217__16219.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16217;
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
var G__16226 = null;
var G__16226__16227 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16226__16228 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16226 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16226__16227.call(this,nodelist,n);
case  3 :
return G__16226__16228.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16226;
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
var G__16242 = null;
var G__16242__16244 = (function (coll,n){
return coll.item(n);
});
var G__16242__16245 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16242 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16242__16244.call(this,coll,n);
case  3 :
return G__16242__16245.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16242;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
