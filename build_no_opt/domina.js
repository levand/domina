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
if(cljs.core.truth_((function (){var and__3546__auto____15758 = content;

if(cljs.core.truth_(and__3546__auto____15758))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15758;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15784 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15784))
{return or__3548__auto____15784;
} else
{var or__3548__auto____15785 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15785))
{return or__3548__auto____15785;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15789 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15789))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15789;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15795 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15795))
{return or__3548__auto____15795;
} else
{var or__3548__auto____15800 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15800))
{return or__3548__auto____15800;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15808 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15808))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15808;
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
if(cljs.core.truth_((void 0 === domina.t15814)))
{
/**
* @constructor
*/
domina.t15814 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15814.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15814");
});
domina.t15814.prototype.domina$DomContent$ = true;
domina.t15814.prototype.domina$DomContent$nodes = (function (_){
var this__15817 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15817.class_name)));
});
domina.t15814.prototype.domina$DomContent$single_node = (function (_){
var this__15818 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15818.class_name)));
});
domina.t15814.prototype.cljs$core$IMeta$ = true;
domina.t15814.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15820 = this;
return this__15820.__meta;
});
domina.t15814.prototype.cljs$core$IWithMeta$ = true;
domina.t15814.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15821 = this;
return (new domina.t15814(this__15821.class_name,this__15821.by_class,__meta));
});
domina.t15814;
} else
{}
return (new domina.t15814(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15839_SHARP_){
return p1__15839_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15850_SHARP_,p2__15852_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15850_SHARP_,p2__15852_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15854_SHARP_,p2__15853_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15853_SHARP_,p1__15854_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15856_SHARP_,p2__15855_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15855_SHARP_,p1__15856_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15861_SHARP_,p2__15860_SHARP_){
return goog.dom.replaceNode.call(null,p2__15860_SHARP_,p1__15861_SHARP_);
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
var s__15872 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15872))))
{return s__15872;
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
var G__15876__15878 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15876__15878))
{var n__15879 = cljs.core.first.call(null,G__15876__15878);
var G__15876__15880 = G__15876__15878;

while(true){
goog.style.setStyle.call(null,n__15879,cljs.core.name.call(null,name),value);
var temp__3698__auto____15882 = cljs.core.next.call(null,G__15876__15880);

if(cljs.core.truth_(temp__3698__auto____15882))
{var G__15876__15884 = temp__3698__auto____15882;

{
var G__15887 = cljs.core.first.call(null,G__15876__15884);
var G__15888 = G__15876__15884;
n__15879 = G__15887;
G__15876__15880 = G__15888;
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
var G__15892__15893 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15892__15893))
{var n__15894 = cljs.core.first.call(null,G__15892__15893);
var G__15892__15895 = G__15892__15893;

while(true){
n__15894.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15896 = cljs.core.next.call(null,G__15892__15895);

if(cljs.core.truth_(temp__3698__auto____15896))
{var G__15892__15897 = temp__3698__auto____15896;

{
var G__15899 = cljs.core.first.call(null,G__15892__15897);
var G__15900 = G__15892__15897;
n__15894 = G__15899;
G__15892__15895 = G__15900;
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
var vec__15903__15905 = pair.split(/\s*:\s*/);
var k__15906 = cljs.core.nth.call(null,vec__15903__15905,0,null);
var v__15907 = cljs.core.nth.call(null,vec__15903__15905,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15908 = k__15906;

if(cljs.core.truth_(and__3546__auto____15908))
{return v__15907;
} else
{return and__3546__auto____15908;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15906.toLowerCase()),v__15907);
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
var node__15913 = domina.single_node.call(null,content);
var attrs__15914 = node__15913.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15911_SHARP_){
var attr__15915 = attrs__15914.item(p1__15911_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15915.nodeName.toLowerCase())],[attr__15915.nodeValue]);
}),cljs.core.range.call(null,attrs__15914.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15917__15935 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15917__15935))
{var G__15939__15941 = cljs.core.first.call(null,G__15917__15935);
var vec__15940__15942 = G__15939__15941;
var name__15943 = cljs.core.nth.call(null,vec__15940__15942,0,null);
var value__15946 = cljs.core.nth.call(null,vec__15940__15942,1,null);
var G__15917__15947 = G__15917__15935;

var G__15939__15948 = G__15939__15941;
var G__15917__15949 = G__15917__15947;

while(true){
var vec__15950__15951 = G__15939__15948;
var name__15952 = cljs.core.nth.call(null,vec__15950__15951,0,null);
var value__15953 = cljs.core.nth.call(null,vec__15950__15951,1,null);
var G__15917__15954 = G__15917__15949;

domina.set_style_BANG_.call(null,content,name__15952,value__15953);
var temp__3698__auto____15955 = cljs.core.next.call(null,G__15917__15954);

if(cljs.core.truth_(temp__3698__auto____15955))
{var G__15917__15956 = temp__3698__auto____15955;

{
var G__15967 = cljs.core.first.call(null,G__15917__15956);
var G__15968 = G__15917__15956;
G__15939__15948 = G__15967;
G__15917__15949 = G__15968;
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
var G__15969__15992 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15969__15992))
{var G__15994__15998 = cljs.core.first.call(null,G__15969__15992);
var vec__15996__15999 = G__15994__15998;
var name__16000 = cljs.core.nth.call(null,vec__15996__15999,0,null);
var value__16001 = cljs.core.nth.call(null,vec__15996__15999,1,null);
var G__15969__16002 = G__15969__15992;

var G__15994__16003 = G__15994__15998;
var G__15969__16004 = G__15969__16002;

while(true){
var vec__16005__16008 = G__15994__16003;
var name__16009 = cljs.core.nth.call(null,vec__16005__16008,0,null);
var value__16010 = cljs.core.nth.call(null,vec__16005__16008,1,null);
var G__15969__16011 = G__15969__16004;

domina.set_attr_BANG_.call(null,content,name__16009,value__16010);
var temp__3698__auto____16012 = cljs.core.next.call(null,G__15969__16011);

if(cljs.core.truth_(temp__3698__auto____16012))
{var G__15969__16015 = temp__3698__auto____16012;

{
var G__16023 = cljs.core.first.call(null,G__15969__16015);
var G__16025 = G__15969__16015;
G__15994__16003 = G__16023;
G__15969__16004 = G__16025;
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
var G__16030__16031 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16030__16031))
{var node__16043 = cljs.core.first.call(null,G__16030__16031);
var G__16030__16044 = G__16030__16031;

while(true){
goog.dom.classes.add.call(null,node__16043,class$);
var temp__3698__auto____16045 = cljs.core.next.call(null,G__16030__16044);

if(cljs.core.truth_(temp__3698__auto____16045))
{var G__16030__16046 = temp__3698__auto____16045;

{
var G__16051 = cljs.core.first.call(null,G__16030__16046);
var G__16053 = G__16030__16046;
node__16043 = G__16051;
G__16030__16044 = G__16053;
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
var G__16070__16071 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16070__16071))
{var node__16073 = cljs.core.first.call(null,G__16070__16071);
var G__16070__16074 = G__16070__16071;

while(true){
goog.dom.classes.remove.call(null,node__16073,class$);
var temp__3698__auto____16076 = cljs.core.next.call(null,G__16070__16074);

if(cljs.core.truth_(temp__3698__auto____16076))
{var G__16070__16077 = temp__3698__auto____16076;

{
var G__16132 = cljs.core.first.call(null,G__16070__16077);
var G__16133 = G__16070__16077;
node__16073 = G__16132;
G__16070__16074 = G__16133;
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
var text__16153 = (function (content){
return text.call(null,content,true);
});
var text__16155 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16153.call(this,content);
case  2 :
return text__16155.call(this,content,normalize);
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
var G__16162__16164 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16162__16164))
{var node__16166 = cljs.core.first.call(null,G__16162__16164);
var G__16162__16167 = G__16162__16164;

while(true){
goog.dom.setTextContent.call(null,node__16166,value);
var temp__3698__auto____16170 = cljs.core.next.call(null,G__16162__16167);

if(cljs.core.truth_(temp__3698__auto____16170))
{var G__16162__16195 = temp__3698__auto____16170;

{
var G__16196 = cljs.core.first.call(null,G__16162__16195);
var G__16197 = G__16162__16195;
node__16166 = G__16196;
G__16162__16167 = G__16197;
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
var G__16198__16199 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16198__16199))
{var node__16200 = cljs.core.first.call(null,G__16198__16199);
var G__16198__16201 = G__16198__16199;

while(true){
goog.dom.forms.setValue.call(null,node__16200,value);
var temp__3698__auto____16202 = cljs.core.next.call(null,G__16198__16201);

if(cljs.core.truth_(temp__3698__auto____16202))
{var G__16198__16203 = temp__3698__auto____16202;

{
var G__16205 = cljs.core.first.call(null,G__16198__16203);
var G__16206 = G__16198__16203;
node__16200 = G__16205;
G__16198__16201 = G__16206;
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
var G__16210__16211 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16210__16211))
{var node__16212 = cljs.core.first.call(null,G__16210__16211);
var G__16210__16213 = G__16210__16211;

while(true){
node__16212.innerHTML = value;
var temp__3698__auto____16216 = cljs.core.next.call(null,G__16210__16213);

if(cljs.core.truth_(temp__3698__auto____16216))
{var G__16210__16217 = temp__3698__auto____16216;

{
var G__16218 = cljs.core.first.call(null,G__16210__16217);
var G__16219 = G__16210__16217;
node__16212 = G__16218;
G__16210__16213 = G__16219;
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
var parents__16220 = domina.nodes.call(null,parent_content);
var children__16221 = domina.nodes.call(null,child_content);
var first_child__16235 = (function (){var frag__16225 = document.createDocumentFragment();

var G__16226__16227 = cljs.core.seq.call(null,children__16221);

if(cljs.core.truth_(G__16226__16227))
{var child__16230 = cljs.core.first.call(null,G__16226__16227);
var G__16226__16231 = G__16226__16227;

while(true){
frag__16225.appendChild(child__16230);
var temp__3698__auto____16232 = cljs.core.next.call(null,G__16226__16231);

if(cljs.core.truth_(temp__3698__auto____16232))
{var G__16226__16233 = temp__3698__auto____16232;

{
var G__16245 = cljs.core.first.call(null,G__16226__16233);
var G__16247 = G__16226__16233;
child__16230 = G__16245;
G__16226__16231 = G__16247;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16225;
})();
var other_children__16239 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16220) - 1),(function (){
return first_child__16235.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16220)))
{f.call(null,cljs.core.first.call(null,parents__16220),first_child__16235);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16207_SHARP_,p2__16208_SHARP_){
return f.call(null,p1__16207_SHARP_,p2__16208_SHARP_);
}),cljs.core.rest.call(null,parents__16220),other_children__16239));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16262 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16263 = (function (nl,n){
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
return lazy_nodelist__16262.call(this,nl);
case  2 :
return lazy_nodelist__16263.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6755__auto____16269 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16270 = x__6755__auto____16269;

if(cljs.core.truth_(and__3546__auto____16270))
{var and__3546__auto____16271 = x__6755__auto____16269.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16271))
{var and__3546__auto____16273 = x__6755__auto____16269.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16273))
{return cljs.core.not.call(null,x__6755__auto____16269.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16273;
}
} else
{return and__3546__auto____16271;
}
} else
{return and__3546__auto____16270;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16269);
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
var inner_wrapper__16331 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16333 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16331));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16333),1)))
{return inner_wrapper__16331.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16331));
} else
{return children__16333;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16334__16335 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16336 = cljs.core.nth.call(null,vec__16334__16335,0,null);
var table_level__16337 = cljs.core.nth.call(null,vec__16334__16335,1,null);
var ___16338 = cljs.core.nthnext.call(null,vec__16334__16335,2);
var wrapper__16339 = domina.create_wrapper.call(null,table_level__16337);

domina.set_wrapper_html_BANG_.call(null,wrapper__16339,content);
return domina.extract_wrapper_dom.call(null,wrapper__16339,table_level__16337);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6755__auto____16340 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16341 = x__6755__auto____16340;

if(cljs.core.truth_(and__3546__auto____16341))
{var and__3546__auto____16359 = x__6755__auto____16340.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16359))
{var and__3546__auto____16360 = x__6755__auto____16340.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16360))
{return cljs.core.not.call(null,x__6755__auto____16340.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16360;
}
} else
{return and__3546__auto____16359;
}
} else
{return and__3546__auto____16341;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16340);
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
if(cljs.core.truth_((function (){var x__6755__auto____16361 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16362 = x__6755__auto____16361;

if(cljs.core.truth_(and__3546__auto____16362))
{var and__3546__auto____16364 = x__6755__auto____16361.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16364))
{var and__3546__auto____16366 = x__6755__auto____16361.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16366))
{return cljs.core.not.call(null,x__6755__auto____16361.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16366;
}
} else
{return and__3546__auto____16364;
}
} else
{return and__3546__auto____16362;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6755__auto____16361);
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
var G__16428 = null;
var G__16428__16429 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16428__16430 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16428 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16428__16429.call(this,nodelist,n);
case  3 :
return G__16428__16430.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16428;
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
var G__16432 = null;
var G__16432__16433 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16432__16434 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16432 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16432__16433.call(this,nodelist,n);
case  3 :
return G__16432__16434.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16432;
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
var G__16440 = null;
var G__16440__16441 = (function (coll,n){
return coll.item(n);
});
var G__16440__16442 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16440 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16440__16441.call(this,coll,n);
case  3 :
return G__16440__16442.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16440;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
