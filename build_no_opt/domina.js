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
if(cljs.core.truth_((function (){var and__3546__auto____15827 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15827))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15827;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15846 = content;

if(cljs.core.truth_(and__3546__auto____15846))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15846;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15848 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15848))
{return or__3548__auto____15848;
} else
{var or__3548__auto____15850 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15850))
{return or__3548__auto____15850;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15853 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15853))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15853;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15856 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15856))
{return or__3548__auto____15856;
} else
{var or__3548__auto____15857 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15857))
{return or__3548__auto____15857;
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
if(cljs.core.truth_((void 0 === domina.t15865)))
{
/**
* @constructor
*/
domina.t15865 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15865.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15865");
});
domina.t15865.prototype.domina$DomContent$ = true;
domina.t15865.prototype.domina$DomContent$nodes = (function (_){
var this__15868 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15868.class_name));
});
domina.t15865.prototype.domina$DomContent$single_node = (function (_){
var this__15869 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15869.class_name));
});
domina.t15865.prototype.cljs$core$IMeta$ = true;
domina.t15865.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15871 = this;
return this__15871.__meta;
});
domina.t15865.prototype.cljs$core$IWithMeta$ = true;
domina.t15865.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15874 = this;
return (new domina.t15865(this__15874.class_name,this__15874.by_class,__meta));
});
domina.t15865;
} else
{}
return (new domina.t15865(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15881_SHARP_){
return p1__15881_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15888_SHARP_,p2__15890_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15888_SHARP_,p2__15890_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15900_SHARP_,p2__15898_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15898_SHARP_,p1__15900_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15905_SHARP_,p2__15903_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15903_SHARP_,p1__15905_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15911_SHARP_,p2__15908_SHARP_){
return goog.dom.replaceNode.call(null,p2__15908_SHARP_,p1__15911_SHARP_);
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
var s__15915 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15915))))
{return s__15915;
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
var G__15930__15933 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15930__15933))
{var n__15937 = cljs.core.first.call(null,G__15930__15933);
var G__15930__15939 = G__15930__15933;

while(true){
goog.style.setStyle.call(null,n__15937,cljs.core.name.call(null,name),value);
var temp__3698__auto____15940 = cljs.core.next.call(null,G__15930__15939);

if(cljs.core.truth_(temp__3698__auto____15940))
{var G__15930__15941 = temp__3698__auto____15940;

{
var G__15946 = cljs.core.first.call(null,G__15930__15941);
var G__15947 = G__15930__15941;
n__15937 = G__15946;
G__15930__15939 = G__15947;
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
var G__15956__15957 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15956__15957))
{var n__15962 = cljs.core.first.call(null,G__15956__15957);
var G__15956__15963 = G__15956__15957;

while(true){
n__15962.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15964 = cljs.core.next.call(null,G__15956__15963);

if(cljs.core.truth_(temp__3698__auto____15964))
{var G__15956__15965 = temp__3698__auto____15964;

{
var G__15971 = cljs.core.first.call(null,G__15956__15965);
var G__15972 = G__15956__15965;
n__15962 = G__15971;
G__15956__15963 = G__15972;
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
var vec__15984__15985 = pair.split(/\s*:\s*/);
var k__15987 = cljs.core.nth.call(null,vec__15984__15985,0,null);
var v__15988 = cljs.core.nth.call(null,vec__15984__15985,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15989 = k__15987;

if(cljs.core.truth_(and__3546__auto____15989))
{return v__15988;
} else
{return and__3546__auto____15989;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15987.toLowerCase()),v__15988);
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
var node__15994 = domina.single_node.call(null,content);
var attrs__15996 = node__15994.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15993_SHARP_){
var attr__15998 = attrs__15996.item(p1__15993_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15998.nodeName.toLowerCase())],[attr__15998.nodeValue]);
}),cljs.core.range.call(null,attrs__15996.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16004__16006 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16004__16006))
{var G__16009__16011 = cljs.core.first.call(null,G__16004__16006);
var vec__16010__16012 = G__16009__16011;
var name__16013 = cljs.core.nth.call(null,vec__16010__16012,0,null);
var value__16014 = cljs.core.nth.call(null,vec__16010__16012,1,null);
var G__16004__16015 = G__16004__16006;

var G__16009__16016 = G__16009__16011;
var G__16004__16017 = G__16004__16015;

while(true){
var vec__16018__16019 = G__16009__16016;
var name__16020 = cljs.core.nth.call(null,vec__16018__16019,0,null);
var value__16021 = cljs.core.nth.call(null,vec__16018__16019,1,null);
var G__16004__16022 = G__16004__16017;

domina.set_style_BANG_.call(null,content,name__16020,value__16021);
var temp__3698__auto____16025 = cljs.core.next.call(null,G__16004__16022);

if(cljs.core.truth_(temp__3698__auto____16025))
{var G__16004__16026 = temp__3698__auto____16025;

{
var G__16044 = cljs.core.first.call(null,G__16004__16026);
var G__16045 = G__16004__16026;
G__16009__16016 = G__16044;
G__16004__16017 = G__16045;
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
var G__16050__16051 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16050__16051))
{var G__16053__16087 = cljs.core.first.call(null,G__16050__16051);
var vec__16054__16088 = G__16053__16087;
var name__16089 = cljs.core.nth.call(null,vec__16054__16088,0,null);
var value__16090 = cljs.core.nth.call(null,vec__16054__16088,1,null);
var G__16050__16091 = G__16050__16051;

var G__16053__16092 = G__16053__16087;
var G__16050__16093 = G__16050__16091;

while(true){
var vec__16094__16095 = G__16053__16092;
var name__16096 = cljs.core.nth.call(null,vec__16094__16095,0,null);
var value__16097 = cljs.core.nth.call(null,vec__16094__16095,1,null);
var G__16050__16098 = G__16050__16093;

domina.set_attr_BANG_.call(null,content,name__16096,value__16097);
var temp__3698__auto____16099 = cljs.core.next.call(null,G__16050__16098);

if(cljs.core.truth_(temp__3698__auto____16099))
{var G__16050__16100 = temp__3698__auto____16099;

{
var G__16110 = cljs.core.first.call(null,G__16050__16100);
var G__16111 = G__16050__16100;
G__16053__16092 = G__16110;
G__16050__16093 = G__16111;
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
var G__16124__16125 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16124__16125))
{var node__16126 = cljs.core.first.call(null,G__16124__16125);
var G__16124__16127 = G__16124__16125;

while(true){
goog.dom.classes.add.call(null,node__16126,class$);
var temp__3698__auto____16128 = cljs.core.next.call(null,G__16124__16127);

if(cljs.core.truth_(temp__3698__auto____16128))
{var G__16124__16129 = temp__3698__auto____16128;

{
var G__16133 = cljs.core.first.call(null,G__16124__16129);
var G__16134 = G__16124__16129;
node__16126 = G__16133;
G__16124__16127 = G__16134;
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
var G__16135__16137 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16135__16137))
{var node__16139 = cljs.core.first.call(null,G__16135__16137);
var G__16135__16140 = G__16135__16137;

while(true){
goog.dom.classes.remove.call(null,node__16139,class$);
var temp__3698__auto____16143 = cljs.core.next.call(null,G__16135__16140);

if(cljs.core.truth_(temp__3698__auto____16143))
{var G__16135__16144 = temp__3698__auto____16143;

{
var G__16163 = cljs.core.first.call(null,G__16135__16144);
var G__16164 = G__16135__16144;
node__16139 = G__16163;
G__16135__16140 = G__16164;
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
var text__16170 = (function (content){
return text.call(null,content,true);
});
var text__16171 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16170.call(this,content);
case  2 :
return text__16171.call(this,content,normalize);
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
var G__16184__16185 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16184__16185))
{var node__16186 = cljs.core.first.call(null,G__16184__16185);
var G__16184__16187 = G__16184__16185;

while(true){
goog.dom.setTextContent.call(null,node__16186,value);
var temp__3698__auto____16188 = cljs.core.next.call(null,G__16184__16187);

if(cljs.core.truth_(temp__3698__auto____16188))
{var G__16184__16191 = temp__3698__auto____16188;

{
var G__16193 = cljs.core.first.call(null,G__16184__16191);
var G__16194 = G__16184__16191;
node__16186 = G__16193;
G__16184__16187 = G__16194;
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
var G__16199__16202 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16199__16202))
{var node__16203 = cljs.core.first.call(null,G__16199__16202);
var G__16199__16204 = G__16199__16202;

while(true){
goog.dom.forms.setValue.call(null,node__16203,value);
var temp__3698__auto____16206 = cljs.core.next.call(null,G__16199__16204);

if(cljs.core.truth_(temp__3698__auto____16206))
{var G__16199__16209 = temp__3698__auto____16206;

{
var G__16215 = cljs.core.first.call(null,G__16199__16209);
var G__16216 = G__16199__16209;
node__16203 = G__16215;
G__16199__16204 = G__16216;
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
var G__16248__16250 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16248__16250))
{var node__16254 = cljs.core.first.call(null,G__16248__16250);
var G__16248__16256 = G__16248__16250;

while(true){
node__16254.innerHTML = value;
var temp__3698__auto____16260 = cljs.core.next.call(null,G__16248__16256);

if(cljs.core.truth_(temp__3698__auto____16260))
{var G__16248__16263 = temp__3698__auto____16260;

{
var G__16277 = cljs.core.first.call(null,G__16248__16263);
var G__16278 = G__16248__16263;
node__16254 = G__16277;
G__16248__16256 = G__16278;
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
var parents__16283 = domina.nodes.call(null,parent_content);
var children__16284 = domina.nodes.call(null,child_content);
var first_child__16300 = (function (){var frag__16286 = document.createDocumentFragment();

var G__16287__16289 = cljs.core.seq.call(null,children__16284);

if(cljs.core.truth_(G__16287__16289))
{var child__16292 = cljs.core.first.call(null,G__16287__16289);
var G__16287__16293 = G__16287__16289;

while(true){
frag__16286.appendChild(child__16292);
var temp__3698__auto____16294 = cljs.core.next.call(null,G__16287__16293);

if(cljs.core.truth_(temp__3698__auto____16294))
{var G__16287__16296 = temp__3698__auto____16294;

{
var G__16339 = cljs.core.first.call(null,G__16287__16296);
var G__16340 = G__16287__16296;
child__16292 = G__16339;
G__16287__16293 = G__16340;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16286;
})();
var other_children__16307 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16283) - 1),(function (){
return first_child__16300.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16283)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16284)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16283)))
{f.call(null,cljs.core.first.call(null,parents__16283),first_child__16300);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16246_SHARP_,p2__16247_SHARP_){
return f.call(null,p1__16246_SHARP_,p2__16247_SHARP_);
}),cljs.core.rest.call(null,parents__16283),other_children__16307));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16353 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16354 = (function (nl,n){
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
return lazy_nodelist__16353.call(this,nl);
case  2 :
return lazy_nodelist__16354.call(this,nl,n);
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
var inner_wrapper__16365 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16366 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16365));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16366),1)))
{return inner_wrapper__16365.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16365));
} else
{return children__16366;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16371__16374 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16375 = cljs.core.nth.call(null,vec__16371__16374,0,null);
var table_level__16377 = cljs.core.nth.call(null,vec__16371__16374,1,null);
var ___16378 = cljs.core.nthnext.call(null,vec__16371__16374,2);
var wrapper__16379 = domina.create_wrapper.call(null,table_level__16377);

domina.set_wrapper_html_BANG_.call(null,wrapper__16379,content);
return domina.extract_wrapper_dom.call(null,wrapper__16379,table_level__16377);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,cljs.core.str.call(null,"typof",goog.typeOf.call(null,content)));
domina.log_debug.call(null,cljs.core.str.call(null,"seq?",cljs.core.seq_QMARK_.call(null,content)));
if(cljs.core.truth_((function (){var x__6765__auto____16392 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16393 = x__6765__auto____16392;

if(cljs.core.truth_(and__3546__auto____16393))
{var and__3546__auto____16394 = x__6765__auto____16392.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16394))
{var and__3546__auto____16395 = x__6765__auto____16392.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16395))
{return cljs.core.not.call(null,x__6765__auto____16392.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16395;
}
} else
{return and__3546__auto____16394;
}
} else
{return and__3546__auto____16393;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16392);
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
if(cljs.core.truth_((function (){var x__6765__auto____16399 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16401 = x__6765__auto____16399;

if(cljs.core.truth_(and__3546__auto____16401))
{var and__3546__auto____16405 = x__6765__auto____16399.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16405))
{var and__3546__auto____16408 = x__6765__auto____16399.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16408))
{return cljs.core.not.call(null,x__6765__auto____16399.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16408;
}
} else
{return and__3546__auto____16405;
}
} else
{return and__3546__auto____16401;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16399);
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
var G__16447 = null;
var G__16447__16448 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16447__16449 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16447 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16447__16448.call(this,nodelist,n);
case  3 :
return G__16447__16449.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16447;
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
var G__16466 = null;
var G__16466__16467 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16466__16468 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16466 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16466__16467.call(this,nodelist,n);
case  3 :
return G__16466__16468.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16466;
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
var G__16476 = null;
var G__16476__16477 = (function (coll,n){
return coll.item(n);
});
var G__16476__16478 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16476 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16476__16477.call(this,coll,n);
case  3 :
return G__16476__16478.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16476;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
