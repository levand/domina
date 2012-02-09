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
if(cljs.core.truth_((function (){var and__3546__auto____15521 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15521))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15521;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15527 = content;

if(cljs.core.truth_(and__3546__auto____15527))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15527;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15530 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15530))
{return or__3548__auto____15530;
} else
{var or__3548__auto____15532 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15532))
{return or__3548__auto____15532;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15533 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15533))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15533;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15535 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15535))
{return or__3548__auto____15535;
} else
{var or__3548__auto____15538 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15538))
{return or__3548__auto____15538;
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
if(cljs.core.truth_((void 0 === domina.t15546)))
{
/**
* @constructor
*/
domina.t15546 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15546.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15546");
});
domina.t15546.prototype.domina$DomContent$ = true;
domina.t15546.prototype.domina$DomContent$nodes = (function (_){
var this__15600 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15600.class_name));
});
domina.t15546.prototype.domina$DomContent$single_node = (function (_){
var this__15602 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15602.class_name));
});
domina.t15546.prototype.cljs$core$IMeta$ = true;
domina.t15546.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15603 = this;
return this__15603.__meta;
});
domina.t15546.prototype.cljs$core$IWithMeta$ = true;
domina.t15546.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15604 = this;
return (new domina.t15546(this__15604.class_name,this__15604.by_class,__meta));
});
domina.t15546;
} else
{}
return (new domina.t15546(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15631_SHARP_){
return p1__15631_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15642_SHARP_,p2__15644_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15642_SHARP_,p2__15644_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15651_SHARP_,p2__15650_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15650_SHARP_,p1__15651_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15655_SHARP_,p2__15654_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15654_SHARP_,p1__15655_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15657_SHARP_,p2__15656_SHARP_){
return goog.dom.replaceNode.call(null,p2__15656_SHARP_,p1__15657_SHARP_);
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
var s__15662 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15662))))
{return s__15662;
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
var G__15685__15686 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15685__15686))
{var n__15687 = cljs.core.first.call(null,G__15685__15686);
var G__15685__15688 = G__15685__15686;

while(true){
goog.style.setStyle.call(null,n__15687,cljs.core.name.call(null,name),value);
var temp__3698__auto____15689 = cljs.core.next.call(null,G__15685__15688);

if(cljs.core.truth_(temp__3698__auto____15689))
{var G__15685__15690 = temp__3698__auto____15689;

{
var G__15691 = cljs.core.first.call(null,G__15685__15690);
var G__15692 = G__15685__15690;
n__15687 = G__15691;
G__15685__15688 = G__15692;
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
var G__15693__15694 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15693__15694))
{var n__15695 = cljs.core.first.call(null,G__15693__15694);
var G__15693__15696 = G__15693__15694;

while(true){
n__15695.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15697 = cljs.core.next.call(null,G__15693__15696);

if(cljs.core.truth_(temp__3698__auto____15697))
{var G__15693__15698 = temp__3698__auto____15697;

{
var G__15699 = cljs.core.first.call(null,G__15693__15698);
var G__15700 = G__15693__15698;
n__15695 = G__15699;
G__15693__15696 = G__15700;
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
var vec__15701__15702 = pair.split(/\s*:\s*/);
var k__15703 = cljs.core.nth.call(null,vec__15701__15702,0,null);
var v__15704 = cljs.core.nth.call(null,vec__15701__15702,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15705 = k__15703;

if(cljs.core.truth_(and__3546__auto____15705))
{return v__15704;
} else
{return and__3546__auto____15705;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15703.toLowerCase()),v__15704);
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
var node__15707 = domina.single_node.call(null,content);
var attrs__15708 = node__15707.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15706_SHARP_){
var attr__15709 = attrs__15708.item(p1__15706_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15709.nodeName.toLowerCase())],[attr__15709.nodeValue]);
}),cljs.core.range.call(null,attrs__15708.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15713__15714 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15713__15714))
{var G__15716__15719 = cljs.core.first.call(null,G__15713__15714);
var vec__15717__15720 = G__15716__15719;
var name__15721 = cljs.core.nth.call(null,vec__15717__15720,0,null);
var value__15722 = cljs.core.nth.call(null,vec__15717__15720,1,null);
var G__15713__15723 = G__15713__15714;

var G__15716__15724 = G__15716__15719;
var G__15713__15725 = G__15713__15723;

while(true){
var vec__15726__15727 = G__15716__15724;
var name__15729 = cljs.core.nth.call(null,vec__15726__15727,0,null);
var value__15730 = cljs.core.nth.call(null,vec__15726__15727,1,null);
var G__15713__15731 = G__15713__15725;

domina.set_style_BANG_.call(null,content,name__15729,value__15730);
var temp__3698__auto____15732 = cljs.core.next.call(null,G__15713__15731);

if(cljs.core.truth_(temp__3698__auto____15732))
{var G__15713__15734 = temp__3698__auto____15732;

{
var G__15737 = cljs.core.first.call(null,G__15713__15734);
var G__15738 = G__15713__15734;
G__15716__15724 = G__15737;
G__15713__15725 = G__15738;
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
var G__15740__15741 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15740__15741))
{var G__15743__15785 = cljs.core.first.call(null,G__15740__15741);
var vec__15784__15786 = G__15743__15785;
var name__15787 = cljs.core.nth.call(null,vec__15784__15786,0,null);
var value__15788 = cljs.core.nth.call(null,vec__15784__15786,1,null);
var G__15740__15789 = G__15740__15741;

var G__15743__15790 = G__15743__15785;
var G__15740__15791 = G__15740__15789;

while(true){
var vec__15792__15793 = G__15743__15790;
var name__15794 = cljs.core.nth.call(null,vec__15792__15793,0,null);
var value__15795 = cljs.core.nth.call(null,vec__15792__15793,1,null);
var G__15740__15796 = G__15740__15791;

domina.set_attr_BANG_.call(null,content,name__15794,value__15795);
var temp__3698__auto____15798 = cljs.core.next.call(null,G__15740__15796);

if(cljs.core.truth_(temp__3698__auto____15798))
{var G__15740__15800 = temp__3698__auto____15798;

{
var G__15801 = cljs.core.first.call(null,G__15740__15800);
var G__15802 = G__15740__15800;
G__15743__15790 = G__15801;
G__15740__15791 = G__15802;
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
var G__15803__15804 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15803__15804))
{var node__15805 = cljs.core.first.call(null,G__15803__15804);
var G__15803__15806 = G__15803__15804;

while(true){
goog.dom.classes.add.call(null,node__15805,class$);
var temp__3698__auto____15809 = cljs.core.next.call(null,G__15803__15806);

if(cljs.core.truth_(temp__3698__auto____15809))
{var G__15803__15810 = temp__3698__auto____15809;

{
var G__15817 = cljs.core.first.call(null,G__15803__15810);
var G__15818 = G__15803__15810;
node__15805 = G__15817;
G__15803__15806 = G__15818;
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
var G__15822__15823 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15822__15823))
{var node__15824 = cljs.core.first.call(null,G__15822__15823);
var G__15822__15825 = G__15822__15823;

while(true){
goog.dom.classes.remove.call(null,node__15824,class$);
var temp__3698__auto____15826 = cljs.core.next.call(null,G__15822__15825);

if(cljs.core.truth_(temp__3698__auto____15826))
{var G__15822__15829 = temp__3698__auto____15826;

{
var G__15831 = cljs.core.first.call(null,G__15822__15829);
var G__15832 = G__15822__15829;
node__15824 = G__15831;
G__15822__15825 = G__15832;
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
var text__15849 = (function (content){
return text.call(null,content,true);
});
var text__15850 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15849.call(this,content);
case  2 :
return text__15850.call(this,content,normalize);
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
var G__15854__15855 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15854__15855))
{var node__15857 = cljs.core.first.call(null,G__15854__15855);
var G__15854__15858 = G__15854__15855;

while(true){
goog.dom.setTextContent.call(null,node__15857,value);
var temp__3698__auto____15859 = cljs.core.next.call(null,G__15854__15858);

if(cljs.core.truth_(temp__3698__auto____15859))
{var G__15854__15860 = temp__3698__auto____15859;

{
var G__15865 = cljs.core.first.call(null,G__15854__15860);
var G__15866 = G__15854__15860;
node__15857 = G__15865;
G__15854__15858 = G__15866;
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
var G__15871__15874 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15871__15874))
{var node__15914 = cljs.core.first.call(null,G__15871__15874);
var G__15871__15915 = G__15871__15874;

while(true){
goog.dom.forms.setValue.call(null,node__15914,value);
var temp__3698__auto____15916 = cljs.core.next.call(null,G__15871__15915);

if(cljs.core.truth_(temp__3698__auto____15916))
{var G__15871__15917 = temp__3698__auto____15916;

{
var G__15919 = cljs.core.first.call(null,G__15871__15917);
var G__15920 = G__15871__15917;
node__15914 = G__15919;
G__15871__15915 = G__15920;
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
var G__15931__15932 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15931__15932))
{var node__15933 = cljs.core.first.call(null,G__15931__15932);
var G__15931__15934 = G__15931__15932;

while(true){
node__15933.innerHTML = value;
var temp__3698__auto____15935 = cljs.core.next.call(null,G__15931__15934);

if(cljs.core.truth_(temp__3698__auto____15935))
{var G__15931__15937 = temp__3698__auto____15935;

{
var G__15938 = cljs.core.first.call(null,G__15931__15937);
var G__15940 = G__15931__15937;
node__15933 = G__15938;
G__15931__15934 = G__15940;
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
var parents__15944 = domina.nodes.call(null,parent_content);
var children__15945 = domina.nodes.call(null,child_content);
var first_child__15973 = (function (){var frag__15947 = document.createDocumentFragment();

var G__15948__15951 = cljs.core.seq.call(null,children__15945);

if(cljs.core.truth_(G__15948__15951))
{var child__15952 = cljs.core.first.call(null,G__15948__15951);
var G__15948__15953 = G__15948__15951;

while(true){
frag__15947.appendChild(child__15952);
var temp__3698__auto____15954 = cljs.core.next.call(null,G__15948__15953);

if(cljs.core.truth_(temp__3698__auto____15954))
{var G__15948__15955 = temp__3698__auto____15954;

{
var G__15978 = cljs.core.first.call(null,G__15948__15955);
var G__15979 = G__15948__15955;
child__15952 = G__15978;
G__15948__15953 = G__15979;
continue;
}
} else
{}
break;
}
} else
{}
return frag__15947;
})();
var other_children__15974 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__15944) - 1),(function (){
return first_child__15973.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__15944)))
{f.call(null,cljs.core.first.call(null,parents__15944),first_child__15973);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15928_SHARP_,p2__15930_SHARP_){
return f.call(null,p1__15928_SHARP_,p2__15930_SHARP_);
}),cljs.core.rest.call(null,parents__15944),other_children__15974));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__15985 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__15986 = (function (nl,n){
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
return lazy_nodelist__15985.call(this,nl);
case  2 :
return lazy_nodelist__15986.call(this,nl,n);
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
var inner_wrapper__15997 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__15999 = cljs.core.seq.call(null,inner_wrapper__15997.childNodes);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__15999),1)))
{return inner_wrapper__15997.removeChild(inner_wrapper__15997.firstChild);
} else
{return children__15999;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16003__16005 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16006 = cljs.core.nth.call(null,vec__16003__16005,0,null);
var table_level__16007 = cljs.core.nth.call(null,vec__16003__16005,1,null);
var ___16008 = cljs.core.nthnext.call(null,vec__16003__16005,2);
var wrapper__16009 = domina.create_wrapper.call(null,table_level__16007);

domina.set_wrapper_html_BANG_.call(null,wrapper__16009,content);
return domina.extract_wrapper_dom.call(null,wrapper__16009,table_level__16007);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
return cljs.core.seq.call(null,content);
}));
(domina.single_node["_"] = (function (content){
return cljs.core.first.call(null,content);
}));
DocumentFragment.prototype.domina$DomContent$ = true;
DocumentFragment.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
DocumentFragment.prototype.domina$DomContent$single_node = (function (content){
return content;
});
Element.prototype.domina$DomContent$ = true;
Element.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
Element.prototype.domina$DomContent$single_node = (function (content){
return content;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return domina.nodes.call(null,domina.string_to_dom.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16027 = null;
var G__16027__16053 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16027__16054 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16027 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16027__16053.call(this,nodelist,n);
case  3 :
return G__16027__16054.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16027;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
if(cljs.core.truth_(window.StaticNodeList))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16131 = null;
var G__16131__16132 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16131__16133 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16131 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16131__16132.call(this,nodelist,n);
case  3 :
return G__16131__16133.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16131;
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
var G__16158 = null;
var G__16158__16159 = (function (coll,n){
return coll.item(n);
});
var G__16158__16160 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16158 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16158__16159.call(this,coll,n);
case  3 :
return G__16158__16160.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16158;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
