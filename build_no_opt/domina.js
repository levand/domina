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
if(cljs.core.truth_((function (){var and__3546__auto____15758 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15758))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15758;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15764 = content;

if(cljs.core.truth_(and__3546__auto____15764))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15764;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15767 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15767))
{return or__3548__auto____15767;
} else
{var or__3548__auto____15768 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15768))
{return or__3548__auto____15768;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15769 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15769))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15769;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15772 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15772))
{return or__3548__auto____15772;
} else
{var or__3548__auto____15774 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15774))
{return or__3548__auto____15774;
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
if(cljs.core.truth_((void 0 === domina.t15793)))
{
/**
* @constructor
*/
domina.t15793 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15793.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15793");
});
domina.t15793.prototype.domina$DomContent$ = true;
domina.t15793.prototype.domina$DomContent$nodes = (function (_){
var this__15874 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15874.class_name));
});
domina.t15793.prototype.domina$DomContent$single_node = (function (_){
var this__15880 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15880.class_name));
});
domina.t15793.prototype.cljs$core$IMeta$ = true;
domina.t15793.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15881 = this;
return this__15881.__meta;
});
domina.t15793.prototype.cljs$core$IWithMeta$ = true;
domina.t15793.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15883 = this;
return (new domina.t15793(this__15883.class_name,this__15883.by_class,__meta));
});
domina.t15793;
} else
{}
return (new domina.t15793(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15888_SHARP_){
return p1__15888_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15901_SHARP_,p2__15902_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15901_SHARP_,p2__15902_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15904_SHARP_,p2__15903_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15903_SHARP_,p1__15904_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15907_SHARP_,p2__15906_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15906_SHARP_,p1__15907_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15912_SHARP_,p2__15911_SHARP_){
return goog.dom.replaceNode.call(null,p2__15911_SHARP_,p1__15912_SHARP_);
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
var s__15924 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15924))))
{return s__15924;
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
var G__15926__15927 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15926__15927))
{var n__15928 = cljs.core.first.call(null,G__15926__15927);
var G__15926__15929 = G__15926__15927;

while(true){
goog.style.setStyle.call(null,n__15928,cljs.core.name.call(null,name),value);
var temp__3698__auto____15930 = cljs.core.next.call(null,G__15926__15929);

if(cljs.core.truth_(temp__3698__auto____15930))
{var G__15926__15931 = temp__3698__auto____15930;

{
var G__15932 = cljs.core.first.call(null,G__15926__15931);
var G__15933 = G__15926__15931;
n__15928 = G__15932;
G__15926__15929 = G__15933;
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
var G__15934__15935 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15934__15935))
{var n__15973 = cljs.core.first.call(null,G__15934__15935);
var G__15934__15974 = G__15934__15935;

while(true){
n__15973.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15975 = cljs.core.next.call(null,G__15934__15974);

if(cljs.core.truth_(temp__3698__auto____15975))
{var G__15934__15976 = temp__3698__auto____15975;

{
var G__15981 = cljs.core.first.call(null,G__15934__15976);
var G__15982 = G__15934__15976;
n__15973 = G__15981;
G__15934__15974 = G__15982;
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
var vec__15986__15988 = pair.split(/\s*:\s*/);
var k__15989 = cljs.core.nth.call(null,vec__15986__15988,0,null);
var v__15990 = cljs.core.nth.call(null,vec__15986__15988,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15992 = k__15989;

if(cljs.core.truth_(and__3546__auto____15992))
{return v__15990;
} else
{return and__3546__auto____15992;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15989.toLowerCase()),v__15990);
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
var node__16026 = domina.single_node.call(null,content);
var attrs__16027 = node__16026.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15995_SHARP_){
var attr__16030 = attrs__16027.item(p1__15995_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16030.nodeName.toLowerCase())],[attr__16030.nodeValue]);
}),cljs.core.range.call(null,attrs__16027.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16039__16040 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16039__16040))
{var G__16043__16047 = cljs.core.first.call(null,G__16039__16040);
var vec__16045__16050 = G__16043__16047;
var name__16051 = cljs.core.nth.call(null,vec__16045__16050,0,null);
var value__16052 = cljs.core.nth.call(null,vec__16045__16050,1,null);
var G__16039__16053 = G__16039__16040;

var G__16043__16054 = G__16043__16047;
var G__16039__16055 = G__16039__16053;

while(true){
var vec__16056__16057 = G__16043__16054;
var name__16058 = cljs.core.nth.call(null,vec__16056__16057,0,null);
var value__16059 = cljs.core.nth.call(null,vec__16056__16057,1,null);
var G__16039__16060 = G__16039__16055;

domina.set_style_BANG_.call(null,content,name__16058,value__16059);
var temp__3698__auto____16061 = cljs.core.next.call(null,G__16039__16060);

if(cljs.core.truth_(temp__3698__auto____16061))
{var G__16039__16062 = temp__3698__auto____16061;

{
var G__16073 = cljs.core.first.call(null,G__16039__16062);
var G__16074 = G__16039__16062;
G__16043__16054 = G__16073;
G__16039__16055 = G__16074;
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
var G__16076__16077 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16076__16077))
{var G__16080__16085 = cljs.core.first.call(null,G__16076__16077);
var vec__16082__16086 = G__16080__16085;
var name__16089 = cljs.core.nth.call(null,vec__16082__16086,0,null);
var value__16090 = cljs.core.nth.call(null,vec__16082__16086,1,null);
var G__16076__16091 = G__16076__16077;

var G__16080__16092 = G__16080__16085;
var G__16076__16093 = G__16076__16091;

while(true){
var vec__16095__16096 = G__16080__16092;
var name__16098 = cljs.core.nth.call(null,vec__16095__16096,0,null);
var value__16099 = cljs.core.nth.call(null,vec__16095__16096,1,null);
var G__16076__16100 = G__16076__16093;

domina.set_attr_BANG_.call(null,content,name__16098,value__16099);
var temp__3698__auto____16102 = cljs.core.next.call(null,G__16076__16100);

if(cljs.core.truth_(temp__3698__auto____16102))
{var G__16076__16104 = temp__3698__auto____16102;

{
var G__16111 = cljs.core.first.call(null,G__16076__16104);
var G__16112 = G__16076__16104;
G__16080__16092 = G__16111;
G__16076__16093 = G__16112;
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
var G__16176__16178 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16176__16178))
{var node__16179 = cljs.core.first.call(null,G__16176__16178);
var G__16176__16180 = G__16176__16178;

while(true){
goog.dom.classes.add.call(null,node__16179,class$);
var temp__3698__auto____16181 = cljs.core.next.call(null,G__16176__16180);

if(cljs.core.truth_(temp__3698__auto____16181))
{var G__16176__16182 = temp__3698__auto____16181;

{
var G__16194 = cljs.core.first.call(null,G__16176__16182);
var G__16195 = G__16176__16182;
node__16179 = G__16194;
G__16176__16180 = G__16195;
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
var G__16199__16200 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16199__16200))
{var node__16201 = cljs.core.first.call(null,G__16199__16200);
var G__16199__16202 = G__16199__16200;

while(true){
goog.dom.classes.remove.call(null,node__16201,class$);
var temp__3698__auto____16203 = cljs.core.next.call(null,G__16199__16202);

if(cljs.core.truth_(temp__3698__auto____16203))
{var G__16199__16204 = temp__3698__auto____16203;

{
var G__16209 = cljs.core.first.call(null,G__16199__16204);
var G__16210 = G__16199__16204;
node__16201 = G__16209;
G__16199__16202 = G__16210;
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
var text__16234 = (function (content){
return text.call(null,content,true);
});
var text__16235 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16234.call(this,content);
case  2 :
return text__16235.call(this,content,normalize);
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
var G__16237__16241 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16237__16241))
{var node__16244 = cljs.core.first.call(null,G__16237__16241);
var G__16237__16245 = G__16237__16241;

while(true){
goog.dom.setTextContent.call(null,node__16244,value);
var temp__3698__auto____16252 = cljs.core.next.call(null,G__16237__16245);

if(cljs.core.truth_(temp__3698__auto____16252))
{var G__16237__16256 = temp__3698__auto____16252;

{
var G__16265 = cljs.core.first.call(null,G__16237__16256);
var G__16266 = G__16237__16256;
node__16244 = G__16265;
G__16237__16245 = G__16266;
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
var G__16276__16278 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16276__16278))
{var node__16281 = cljs.core.first.call(null,G__16276__16278);
var G__16276__16282 = G__16276__16278;

while(true){
goog.dom.forms.setValue.call(null,node__16281,value);
var temp__3698__auto____16286 = cljs.core.next.call(null,G__16276__16282);

if(cljs.core.truth_(temp__3698__auto____16286))
{var G__16276__16289 = temp__3698__auto____16286;

{
var G__16305 = cljs.core.first.call(null,G__16276__16289);
var G__16306 = G__16276__16289;
node__16281 = G__16305;
G__16276__16282 = G__16306;
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
var G__16321__16322 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16321__16322))
{var node__16323 = cljs.core.first.call(null,G__16321__16322);
var G__16321__16324 = G__16321__16322;

while(true){
node__16323.innerHTML = value;
var temp__3698__auto____16352 = cljs.core.next.call(null,G__16321__16324);

if(cljs.core.truth_(temp__3698__auto____16352))
{var G__16321__16355 = temp__3698__auto____16352;

{
var G__16358 = cljs.core.first.call(null,G__16321__16355);
var G__16359 = G__16321__16355;
node__16323 = G__16358;
G__16321__16324 = G__16359;
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
var parents__16360 = domina.nodes.call(null,parent_content);
var children__16361 = domina.nodes.call(null,child_content);
var first_child__16373 = (function (){var frag__16362 = document.createDocumentFragment();

var G__16363__16366 = cljs.core.seq.call(null,children__16361);

if(cljs.core.truth_(G__16363__16366))
{var child__16368 = cljs.core.first.call(null,G__16363__16366);
var G__16363__16369 = G__16363__16366;

while(true){
frag__16362.appendChild(child__16368);
var temp__3698__auto____16371 = cljs.core.next.call(null,G__16363__16369);

if(cljs.core.truth_(temp__3698__auto____16371))
{var G__16363__16372 = temp__3698__auto____16371;

{
var G__16381 = cljs.core.first.call(null,G__16363__16372);
var G__16382 = G__16363__16372;
child__16368 = G__16381;
G__16363__16369 = G__16382;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16362;
})();
var other_children__16375 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16360) - 1),(function (){
return first_child__16373.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parents:",cljs.core.count.call(null,parents__16360)));
domina.log_debug.call(null,cljs.core.str.call(null,"children:",cljs.core.count.call(null,children__16361)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16360)))
{f.call(null,cljs.core.first.call(null,parents__16360),first_child__16373);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16317_SHARP_,p2__16319_SHARP_){
return f.call(null,p1__16317_SHARP_,p2__16319_SHARP_);
}),cljs.core.rest.call(null,parents__16360),other_children__16375));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16398 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16399 = (function (nl,n){
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
return lazy_nodelist__16398.call(this,nl);
case  2 :
return lazy_nodelist__16399.call(this,nl,n);
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
var inner_wrapper__16411 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16413 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16411));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16413),1)))
{return inner_wrapper__16411.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16411));
} else
{return children__16413;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16426__16428 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16429 = cljs.core.nth.call(null,vec__16426__16428,0,null);
var table_level__16430 = cljs.core.nth.call(null,vec__16426__16428,1,null);
var ___16431 = cljs.core.nthnext.call(null,vec__16426__16428,2);
var wrapper__16432 = domina.create_wrapper.call(null,table_level__16430);

domina.set_wrapper_html_BANG_.call(null,wrapper__16432,content);
return domina.extract_wrapper_dom.call(null,wrapper__16432,table_level__16430);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
domina.log_debug.call(null,cljs.core.str.call(null,"typof",goog.typeOf.call(null,content)));
domina.log_debug.call(null,cljs.core.str.call(null,"seq?",cljs.core.seq_QMARK_.call(null,content)));
if(cljs.core.truth_((function (){var x__6757__auto____16440 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16441 = x__6757__auto____16440;

if(cljs.core.truth_(and__3546__auto____16441))
{var and__3546__auto____16444 = x__6757__auto____16440.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16444))
{var and__3546__auto____16446 = x__6757__auto____16440.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16446))
{return cljs.core.not.call(null,x__6757__auto____16440.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16446;
}
} else
{return and__3546__auto____16444;
}
} else
{return and__3546__auto____16441;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16440);
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
if(cljs.core.truth_((function (){var x__6757__auto____16451 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16453 = x__6757__auto____16451;

if(cljs.core.truth_(and__3546__auto____16453))
{var and__3546__auto____16454 = x__6757__auto____16451.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16454))
{var and__3546__auto____16455 = x__6757__auto____16451.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16455))
{return cljs.core.not.call(null,x__6757__auto____16451.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16455;
}
} else
{return and__3546__auto____16454;
}
} else
{return and__3546__auto____16453;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6757__auto____16451);
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
var G__16469 = null;
var G__16469__16470 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16469__16471 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16469 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16469__16470.call(this,nodelist,n);
case  3 :
return G__16469__16471.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16469;
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
var G__16475 = null;
var G__16475__16476 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16475__16477 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16475 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16475__16476.call(this,nodelist,n);
case  3 :
return G__16475__16477.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16475;
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
var G__16485 = null;
var G__16485__16486 = (function (coll,n){
return coll.item(n);
});
var G__16485__16487 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16485 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16485__16486.call(this,coll,n);
case  3 :
return G__16485__16487.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16485;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
