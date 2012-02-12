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
if(cljs.core.truth_((function (){var and__3546__auto____15671 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15671))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15671;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15676 = content;

if(cljs.core.truth_(and__3546__auto____15676))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15676;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15681 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15681))
{return or__3548__auto____15681;
} else
{var or__3548__auto____15682 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15682))
{return or__3548__auto____15682;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15684 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15684))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15684;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15687 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15687))
{return or__3548__auto____15687;
} else
{var or__3548__auto____15689 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15689))
{return or__3548__auto____15689;
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
if(cljs.core.truth_((void 0 === domina.t15698)))
{
/**
* @constructor
*/
domina.t15698 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15698.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15698");
});
domina.t15698.prototype.domina$DomContent$ = true;
domina.t15698.prototype.domina$DomContent$nodes = (function (_){
var this__15701 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15701.class_name));
});
domina.t15698.prototype.domina$DomContent$single_node = (function (_){
var this__15703 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15703.class_name));
});
domina.t15698.prototype.cljs$core$IMeta$ = true;
domina.t15698.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15707 = this;
return this__15707.__meta;
});
domina.t15698.prototype.cljs$core$IWithMeta$ = true;
domina.t15698.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15710 = this;
return (new domina.t15698(this__15710.class_name,this__15710.by_class,__meta));
});
domina.t15698;
} else
{}
return (new domina.t15698(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15712_SHARP_){
return p1__15712_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15715_SHARP_,p2__15716_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15715_SHARP_,p2__15716_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15719_SHARP_,p2__15718_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15718_SHARP_,p1__15719_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15726_SHARP_,p2__15725_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15725_SHARP_,p1__15726_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15729_SHARP_,p2__15728_SHARP_){
return goog.dom.replaceNode.call(null,p2__15728_SHARP_,p1__15729_SHARP_);
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
var s__15758 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15758))))
{return s__15758;
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
var G__15770__15771 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15770__15771))
{var n__15773 = cljs.core.first.call(null,G__15770__15771);
var G__15770__15774 = G__15770__15771;

while(true){
goog.style.setStyle.call(null,n__15773,cljs.core.name.call(null,name),value);
var temp__3698__auto____15775 = cljs.core.next.call(null,G__15770__15774);

if(cljs.core.truth_(temp__3698__auto____15775))
{var G__15770__15776 = temp__3698__auto____15775;

{
var G__15784 = cljs.core.first.call(null,G__15770__15776);
var G__15785 = G__15770__15776;
n__15773 = G__15784;
G__15770__15774 = G__15785;
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
var G__15786__15788 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15786__15788))
{var n__15790 = cljs.core.first.call(null,G__15786__15788);
var G__15786__15791 = G__15786__15788;

while(true){
n__15790.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15792 = cljs.core.next.call(null,G__15786__15791);

if(cljs.core.truth_(temp__3698__auto____15792))
{var G__15786__15793 = temp__3698__auto____15792;

{
var G__15796 = cljs.core.first.call(null,G__15786__15793);
var G__15799 = G__15786__15793;
n__15790 = G__15796;
G__15786__15791 = G__15799;
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
var vec__15800__15803 = pair.split(/\s*:\s*/);
var k__15804 = cljs.core.nth.call(null,vec__15800__15803,0,null);
var v__15805 = cljs.core.nth.call(null,vec__15800__15803,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15806 = k__15804;

if(cljs.core.truth_(and__3546__auto____15806))
{return v__15805;
} else
{return and__3546__auto____15806;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15804.toLowerCase()),v__15805);
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
var node__15808 = domina.single_node.call(null,content);
var attrs__15809 = node__15808.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15807_SHARP_){
var attr__15810 = attrs__15809.item(p1__15807_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15810.nodeName.toLowerCase())],[attr__15810.nodeValue]);
}),cljs.core.range.call(null,attrs__15809.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15870__15871 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15870__15871))
{var G__15873__15875 = cljs.core.first.call(null,G__15870__15871);
var vec__15874__15878 = G__15873__15875;
var name__15880 = cljs.core.nth.call(null,vec__15874__15878,0,null);
var value__15890 = cljs.core.nth.call(null,vec__15874__15878,1,null);
var G__15870__15891 = G__15870__15871;

var G__15873__15892 = G__15873__15875;
var G__15870__15893 = G__15870__15891;

while(true){
var vec__15894__15895 = G__15873__15892;
var name__15898 = cljs.core.nth.call(null,vec__15894__15895,0,null);
var value__15900 = cljs.core.nth.call(null,vec__15894__15895,1,null);
var G__15870__15901 = G__15870__15893;

domina.set_style_BANG_.call(null,content,name__15898,value__15900);
var temp__3698__auto____15902 = cljs.core.next.call(null,G__15870__15901);

if(cljs.core.truth_(temp__3698__auto____15902))
{var G__15870__15903 = temp__3698__auto____15902;

{
var G__15925 = cljs.core.first.call(null,G__15870__15903);
var G__15926 = G__15870__15903;
G__15873__15892 = G__15925;
G__15870__15893 = G__15926;
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
var G__15927__15928 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15927__15928))
{var G__15931__15934 = cljs.core.first.call(null,G__15927__15928);
var vec__15932__15935 = G__15931__15934;
var name__15936 = cljs.core.nth.call(null,vec__15932__15935,0,null);
var value__15937 = cljs.core.nth.call(null,vec__15932__15935,1,null);
var G__15927__15938 = G__15927__15928;

var G__15931__15939 = G__15931__15934;
var G__15927__15949 = G__15927__15938;

while(true){
var vec__15951__15958 = G__15931__15939;
var name__15960 = cljs.core.nth.call(null,vec__15951__15958,0,null);
var value__15963 = cljs.core.nth.call(null,vec__15951__15958,1,null);
var G__15927__15965 = G__15927__15949;

domina.set_attr_BANG_.call(null,content,name__15960,value__15963);
var temp__3698__auto____15966 = cljs.core.next.call(null,G__15927__15965);

if(cljs.core.truth_(temp__3698__auto____15966))
{var G__15927__15967 = temp__3698__auto____15966;

{
var G__15968 = cljs.core.first.call(null,G__15927__15967);
var G__15969 = G__15927__15967;
G__15931__15939 = G__15968;
G__15927__15949 = G__15969;
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
var G__15970__15971 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15970__15971))
{var node__15972 = cljs.core.first.call(null,G__15970__15971);
var G__15970__15973 = G__15970__15971;

while(true){
goog.dom.classes.add.call(null,node__15972,class$);
var temp__3698__auto____15975 = cljs.core.next.call(null,G__15970__15973);

if(cljs.core.truth_(temp__3698__auto____15975))
{var G__15970__15976 = temp__3698__auto____15975;

{
var G__15977 = cljs.core.first.call(null,G__15970__15976);
var G__15978 = G__15970__15976;
node__15972 = G__15977;
G__15970__15973 = G__15978;
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
var G__15980__15981 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15980__15981))
{var node__15983 = cljs.core.first.call(null,G__15980__15981);
var G__15980__15984 = G__15980__15981;

while(true){
goog.dom.classes.remove.call(null,node__15983,class$);
var temp__3698__auto____15986 = cljs.core.next.call(null,G__15980__15984);

if(cljs.core.truth_(temp__3698__auto____15986))
{var G__15980__15987 = temp__3698__auto____15986;

{
var G__15990 = cljs.core.first.call(null,G__15980__15987);
var G__15991 = G__15980__15987;
node__15983 = G__15990;
G__15980__15984 = G__15991;
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
var text__15993 = (function (content){
return text.call(null,content,true);
});
var text__15994 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15993.call(this,content);
case  2 :
return text__15994.call(this,content,normalize);
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
var G__15998__15999 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15998__15999))
{var node__16001 = cljs.core.first.call(null,G__15998__15999);
var G__15998__16002 = G__15998__15999;

while(true){
goog.dom.setTextContent.call(null,node__16001,value);
var temp__3698__auto____16006 = cljs.core.next.call(null,G__15998__16002);

if(cljs.core.truth_(temp__3698__auto____16006))
{var G__15998__16007 = temp__3698__auto____16006;

{
var G__16013 = cljs.core.first.call(null,G__15998__16007);
var G__16015 = G__15998__16007;
node__16001 = G__16013;
G__15998__16002 = G__16015;
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
var G__16031__16036 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16031__16036))
{var node__16038 = cljs.core.first.call(null,G__16031__16036);
var G__16031__16039 = G__16031__16036;

while(true){
goog.dom.forms.setValue.call(null,node__16038,value);
var temp__3698__auto____16088 = cljs.core.next.call(null,G__16031__16039);

if(cljs.core.truth_(temp__3698__auto____16088))
{var G__16031__16089 = temp__3698__auto____16088;

{
var G__16090 = cljs.core.first.call(null,G__16031__16089);
var G__16153 = G__16031__16089;
node__16038 = G__16090;
G__16031__16039 = G__16153;
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
var G__16171__16172 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16171__16172))
{var node__16173 = cljs.core.first.call(null,G__16171__16172);
var G__16171__16174 = G__16171__16172;

while(true){
node__16173.innerHTML = value;
var temp__3698__auto____16175 = cljs.core.next.call(null,G__16171__16174);

if(cljs.core.truth_(temp__3698__auto____16175))
{var G__16171__16176 = temp__3698__auto____16175;

{
var G__16181 = cljs.core.first.call(null,G__16171__16176);
var G__16182 = G__16171__16176;
node__16173 = G__16181;
G__16171__16174 = G__16182;
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
var parents__16183 = domina.nodes.call(null,parent_content);
var children__16184 = domina.nodes.call(null,child_content);
var first_child__16192 = (function (){var frag__16185 = document.createDocumentFragment();

var G__16186__16187 = cljs.core.seq.call(null,children__16184);

if(cljs.core.truth_(G__16186__16187))
{var child__16188 = cljs.core.first.call(null,G__16186__16187);
var G__16186__16189 = G__16186__16187;

while(true){
frag__16185.appendChild(child__16188);
var temp__3698__auto____16190 = cljs.core.next.call(null,G__16186__16189);

if(cljs.core.truth_(temp__3698__auto____16190))
{var G__16186__16191 = temp__3698__auto____16190;

{
var G__16197 = cljs.core.first.call(null,G__16186__16191);
var G__16198 = G__16186__16191;
child__16188 = G__16197;
G__16186__16189 = G__16198;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16185;
})();
var other_children__16194 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16183) - 1),(function (){
return first_child__16192.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16183)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16184)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16183)))
{f.call(null,cljs.core.first.call(null,parents__16183),first_child__16192);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16168_SHARP_,p2__16169_SHARP_){
return f.call(null,p1__16168_SHARP_,p2__16169_SHARP_);
}),cljs.core.rest.call(null,parents__16183),other_children__16194));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16212 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16213 = (function (nl,n){
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
return lazy_nodelist__16212.call(this,nl);
case  2 :
return lazy_nodelist__16213.call(this,nl,n);
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
var inner_wrapper__16220 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16221 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16220));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16221),1)))
{return inner_wrapper__16220.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16220));
} else
{return children__16221;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16222__16223 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16224 = cljs.core.nth.call(null,vec__16222__16223,0,null);
var table_level__16225 = cljs.core.nth.call(null,vec__16222__16223,1,null);
var ___16226 = cljs.core.nthnext.call(null,vec__16222__16223,2);
var wrapper__16227 = domina.create_wrapper.call(null,table_level__16225);

domina.set_wrapper_html_BANG_.call(null,wrapper__16227,content);
return domina.extract_wrapper_dom.call(null,wrapper__16227,table_level__16225);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,cljs.core.str.call(null,"typof",goog.typeOf.call(null,content)));
domina.log_debug.call(null,cljs.core.str.call(null,"seq?",cljs.core.seq_QMARK_.call(null,content)));
if(cljs.core.truth_((function (){var x__6777__auto____16238 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16239 = x__6777__auto____16238;

if(cljs.core.truth_(and__3546__auto____16239))
{var and__3546__auto____16242 = x__6777__auto____16238.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16242))
{var and__3546__auto____16243 = x__6777__auto____16238.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16243))
{return cljs.core.not.call(null,x__6777__auto____16238.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16243;
}
} else
{return and__3546__auto____16242;
}
} else
{return and__3546__auto____16239;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6777__auto____16238);
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
if(cljs.core.truth_((function (){var x__6777__auto____16246 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16247 = x__6777__auto____16246;

if(cljs.core.truth_(and__3546__auto____16247))
{var and__3546__auto____16249 = x__6777__auto____16246.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16249))
{var and__3546__auto____16251 = x__6777__auto____16246.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16251))
{return cljs.core.not.call(null,x__6777__auto____16246.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16251;
}
} else
{return and__3546__auto____16249;
}
} else
{return and__3546__auto____16247;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6777__auto____16246);
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
var G__16264 = null;
var G__16264__16266 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16264__16293 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16264 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16264__16266.call(this,nodelist,n);
case  3 :
return G__16264__16293.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16264;
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
var G__16299 = null;
var G__16299__16300 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16299__16301 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16299 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16299__16300.call(this,nodelist,n);
case  3 :
return G__16299__16301.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16299;
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
var G__16336 = null;
var G__16336__16338 = (function (coll,n){
return coll.item(n);
});
var G__16336__16339 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16336 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16336__16338.call(this,coll,n);
case  3 :
return G__16336__16339.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16336;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
