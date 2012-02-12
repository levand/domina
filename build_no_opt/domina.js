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
if(cljs.core.truth_((function (){var and__3546__auto____15809 = content;

if(cljs.core.truth_(and__3546__auto____15809))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15809;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15811 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15811))
{return or__3548__auto____15811;
} else
{var or__3548__auto____15813 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15813))
{return or__3548__auto____15813;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15814 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15814))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15814;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15818 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15818))
{return or__3548__auto____15818;
} else
{var or__3548__auto____15819 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15819))
{return or__3548__auto____15819;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15842 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15842))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15842;
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
if(cljs.core.truth_((void 0 === domina.t15851)))
{
/**
* @constructor
*/
domina.t15851 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15851.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15851");
});
domina.t15851.prototype.domina$DomContent$ = true;
domina.t15851.prototype.domina$DomContent$nodes = (function (_){
var this__15855 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15855.class_name)));
});
domina.t15851.prototype.domina$DomContent$single_node = (function (_){
var this__15856 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15856.class_name)));
});
domina.t15851.prototype.cljs$core$IMeta$ = true;
domina.t15851.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15860 = this;
return this__15860.__meta;
});
domina.t15851.prototype.cljs$core$IWithMeta$ = true;
domina.t15851.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15861 = this;
return (new domina.t15851(this__15861.class_name,this__15861.by_class,__meta));
});
domina.t15851;
} else
{}
return (new domina.t15851(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15866_SHARP_){
return p1__15866_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15871_SHARP_,p2__15872_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15871_SHARP_,p2__15872_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15878_SHARP_,p2__15877_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15877_SHARP_,p1__15878_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15880_SHARP_,p2__15879_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15879_SHARP_,p1__15880_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15884_SHARP_,p2__15883_SHARP_){
return goog.dom.replaceNode.call(null,p2__15883_SHARP_,p1__15884_SHARP_);
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
var s__15899 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15899))))
{return s__15899;
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
var G__15903__15904 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15903__15904))
{var n__15905 = cljs.core.first.call(null,G__15903__15904);
var G__15903__15906 = G__15903__15904;

while(true){
goog.style.setStyle.call(null,n__15905,cljs.core.name.call(null,name),value);
var temp__3698__auto____15908 = cljs.core.next.call(null,G__15903__15906);

if(cljs.core.truth_(temp__3698__auto____15908))
{var G__15903__15909 = temp__3698__auto____15908;

{
var G__15910 = cljs.core.first.call(null,G__15903__15909);
var G__15911 = G__15903__15909;
n__15905 = G__15910;
G__15903__15906 = G__15911;
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
var G__15917__15919 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15917__15919))
{var n__15921 = cljs.core.first.call(null,G__15917__15919);
var G__15917__15922 = G__15917__15919;

while(true){
n__15921.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15923 = cljs.core.next.call(null,G__15917__15922);

if(cljs.core.truth_(temp__3698__auto____15923))
{var G__15917__15929 = temp__3698__auto____15923;

{
var G__15932 = cljs.core.first.call(null,G__15917__15929);
var G__15933 = G__15917__15929;
n__15921 = G__15932;
G__15917__15922 = G__15933;
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
var vec__15938__15940 = pair.split(/\s*:\s*/);
var k__15942 = cljs.core.nth.call(null,vec__15938__15940,0,null);
var v__15943 = cljs.core.nth.call(null,vec__15938__15940,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15944 = k__15942;

if(cljs.core.truth_(and__3546__auto____15944))
{return v__15943;
} else
{return and__3546__auto____15944;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15942.toLowerCase()),v__15943);
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
var node__15963 = domina.single_node.call(null,content);
var attrs__15964 = node__15963.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15951_SHARP_){
var attr__15965 = attrs__15964.item(p1__15951_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15965.nodeName.toLowerCase())],[attr__15965.nodeValue]);
}),cljs.core.range.call(null,attrs__15964.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15967__15970 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15967__15970))
{var G__15973__15975 = cljs.core.first.call(null,G__15967__15970);
var vec__15974__15976 = G__15973__15975;
var name__15977 = cljs.core.nth.call(null,vec__15974__15976,0,null);
var value__15978 = cljs.core.nth.call(null,vec__15974__15976,1,null);
var G__15967__15979 = G__15967__15970;

var G__15973__15980 = G__15973__15975;
var G__15967__15981 = G__15967__15979;

while(true){
var vec__15982__15983 = G__15973__15980;
var name__15984 = cljs.core.nth.call(null,vec__15982__15983,0,null);
var value__15985 = cljs.core.nth.call(null,vec__15982__15983,1,null);
var G__15967__15986 = G__15967__15981;

domina.set_style_BANG_.call(null,content,name__15984,value__15985);
var temp__3698__auto____15987 = cljs.core.next.call(null,G__15967__15986);

if(cljs.core.truth_(temp__3698__auto____15987))
{var G__15967__15988 = temp__3698__auto____15987;

{
var G__16005 = cljs.core.first.call(null,G__15967__15988);
var G__16006 = G__15967__15988;
G__15973__15980 = G__16005;
G__15967__15981 = G__16006;
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
var G__16011__16012 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16011__16012))
{var G__16014__16016 = cljs.core.first.call(null,G__16011__16012);
var vec__16015__16019 = G__16014__16016;
var name__16020 = cljs.core.nth.call(null,vec__16015__16019,0,null);
var value__16021 = cljs.core.nth.call(null,vec__16015__16019,1,null);
var G__16011__16022 = G__16011__16012;

var G__16014__16024 = G__16014__16016;
var G__16011__16025 = G__16011__16022;

while(true){
var vec__16026__16029 = G__16014__16024;
var name__16031 = cljs.core.nth.call(null,vec__16026__16029,0,null);
var value__16032 = cljs.core.nth.call(null,vec__16026__16029,1,null);
var G__16011__16033 = G__16011__16025;

domina.set_attr_BANG_.call(null,content,name__16031,value__16032);
var temp__3698__auto____16039 = cljs.core.next.call(null,G__16011__16033);

if(cljs.core.truth_(temp__3698__auto____16039))
{var G__16011__16065 = temp__3698__auto____16039;

{
var G__16092 = cljs.core.first.call(null,G__16011__16065);
var G__16093 = G__16011__16065;
G__16014__16024 = G__16092;
G__16011__16025 = G__16093;
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
var G__16104__16107 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16104__16107))
{var node__16108 = cljs.core.first.call(null,G__16104__16107);
var G__16104__16109 = G__16104__16107;

while(true){
goog.dom.classes.add.call(null,node__16108,class$);
var temp__3698__auto____16110 = cljs.core.next.call(null,G__16104__16109);

if(cljs.core.truth_(temp__3698__auto____16110))
{var G__16104__16111 = temp__3698__auto____16110;

{
var G__16117 = cljs.core.first.call(null,G__16104__16111);
var G__16119 = G__16104__16111;
node__16108 = G__16117;
G__16104__16109 = G__16119;
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
var G__16128__16132 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16128__16132))
{var node__16139 = cljs.core.first.call(null,G__16128__16132);
var G__16128__16140 = G__16128__16132;

while(true){
goog.dom.classes.remove.call(null,node__16139,class$);
var temp__3698__auto____16141 = cljs.core.next.call(null,G__16128__16140);

if(cljs.core.truth_(temp__3698__auto____16141))
{var G__16128__16142 = temp__3698__auto____16141;

{
var G__16154 = cljs.core.first.call(null,G__16128__16142);
var G__16155 = G__16128__16142;
node__16139 = G__16154;
G__16128__16140 = G__16155;
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
var text__16161 = (function (content){
return text.call(null,content,true);
});
var text__16162 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16161.call(this,content);
case  2 :
return text__16162.call(this,content,normalize);
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
var G__16172__16173 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16172__16173))
{var node__16174 = cljs.core.first.call(null,G__16172__16173);
var G__16172__16176 = G__16172__16173;

while(true){
goog.dom.setTextContent.call(null,node__16174,value);
var temp__3698__auto____16178 = cljs.core.next.call(null,G__16172__16176);

if(cljs.core.truth_(temp__3698__auto____16178))
{var G__16172__16181 = temp__3698__auto____16178;

{
var G__16184 = cljs.core.first.call(null,G__16172__16181);
var G__16185 = G__16172__16181;
node__16174 = G__16184;
G__16172__16176 = G__16185;
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
var G__16192__16193 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16192__16193))
{var node__16195 = cljs.core.first.call(null,G__16192__16193);
var G__16192__16197 = G__16192__16193;

while(true){
goog.dom.forms.setValue.call(null,node__16195,value);
var temp__3698__auto____16198 = cljs.core.next.call(null,G__16192__16197);

if(cljs.core.truth_(temp__3698__auto____16198))
{var G__16192__16199 = temp__3698__auto____16198;

{
var G__16202 = cljs.core.first.call(null,G__16192__16199);
var G__16203 = G__16192__16199;
node__16195 = G__16202;
G__16192__16197 = G__16203;
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
var G__16217__16219 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16217__16219))
{var node__16220 = cljs.core.first.call(null,G__16217__16219);
var G__16217__16221 = G__16217__16219;

while(true){
node__16220.innerHTML = value;
var temp__3698__auto____16222 = cljs.core.next.call(null,G__16217__16221);

if(cljs.core.truth_(temp__3698__auto____16222))
{var G__16217__16223 = temp__3698__auto____16222;

{
var G__16226 = cljs.core.first.call(null,G__16217__16223);
var G__16227 = G__16217__16223;
node__16220 = G__16226;
G__16217__16221 = G__16227;
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
var parents__16234 = domina.nodes.call(null,parent_content);
var children__16235 = domina.nodes.call(null,child_content);
var first_child__16245 = (function (){var frag__16236 = document.createDocumentFragment();

var G__16237__16238 = cljs.core.seq.call(null,children__16235);

if(cljs.core.truth_(G__16237__16238))
{var child__16239 = cljs.core.first.call(null,G__16237__16238);
var G__16237__16240 = G__16237__16238;

while(true){
frag__16236.appendChild(child__16239);
var temp__3698__auto____16243 = cljs.core.next.call(null,G__16237__16240);

if(cljs.core.truth_(temp__3698__auto____16243))
{var G__16237__16244 = temp__3698__auto____16243;

{
var G__16279 = cljs.core.first.call(null,G__16237__16244);
var G__16280 = G__16237__16244;
child__16239 = G__16279;
G__16237__16240 = G__16280;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16236;
})();
var other_children__16256 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16234) - 1),(function (){
return first_child__16245.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16234)))
{f.call(null,cljs.core.first.call(null,parents__16234),first_child__16245);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16212_SHARP_,p2__16214_SHARP_){
return f.call(null,p1__16212_SHARP_,p2__16214_SHARP_);
}),cljs.core.rest.call(null,parents__16234),other_children__16256));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16290 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16292 = (function (nl,n){
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
return lazy_nodelist__16290.call(this,nl);
case  2 :
return lazy_nodelist__16292.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6749__auto____16298 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16303 = x__6749__auto____16298;

if(cljs.core.truth_(and__3546__auto____16303))
{var and__3546__auto____16304 = x__6749__auto____16298.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16304))
{var and__3546__auto____16306 = x__6749__auto____16298.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16306))
{return cljs.core.not.call(null,x__6749__auto____16298.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16306;
}
} else
{return and__3546__auto____16304;
}
} else
{return and__3546__auto____16303;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16298);
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
var inner_wrapper__16348 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16350 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16348));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16350),1)))
{return inner_wrapper__16348.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16348));
} else
{return children__16350;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16372__16375 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16376 = cljs.core.nth.call(null,vec__16372__16375,0,null);
var table_level__16379 = cljs.core.nth.call(null,vec__16372__16375,1,null);
var ___16380 = cljs.core.nthnext.call(null,vec__16372__16375,2);
var wrapper__16381 = domina.create_wrapper.call(null,table_level__16379);

domina.set_wrapper_html_BANG_.call(null,wrapper__16381,content);
return domina.extract_wrapper_dom.call(null,wrapper__16381,table_level__16379);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16385 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16386 = x__6749__auto____16385;

if(cljs.core.truth_(and__3546__auto____16386))
{var and__3546__auto____16387 = x__6749__auto____16385.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16387))
{var and__3546__auto____16388 = x__6749__auto____16385.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16388))
{return cljs.core.not.call(null,x__6749__auto____16385.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16388;
}
} else
{return and__3546__auto____16387;
}
} else
{return and__3546__auto____16386;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16385);
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
if(cljs.core.truth_((function (){var x__6749__auto____16391 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16394 = x__6749__auto____16391;

if(cljs.core.truth_(and__3546__auto____16394))
{var and__3546__auto____16395 = x__6749__auto____16391.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16395))
{var and__3546__auto____16397 = x__6749__auto____16391.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16397))
{return cljs.core.not.call(null,x__6749__auto____16391.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16397;
}
} else
{return and__3546__auto____16395;
}
} else
{return and__3546__auto____16394;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16391);
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
var G__16436 = null;
var G__16436__16437 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16436__16438 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16436 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16436__16437.call(this,nodelist,n);
case  3 :
return G__16436__16438.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16436;
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
var G__16522 = null;
var G__16522__16523 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16522__16524 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16522 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16522__16523.call(this,nodelist,n);
case  3 :
return G__16522__16524.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16522;
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
var G__16526 = null;
var G__16526__16527 = (function (coll,n){
return coll.item(n);
});
var G__16526__16528 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16526 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16526__16527.call(this,coll,n);
case  3 :
return G__16526__16528.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16526;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
