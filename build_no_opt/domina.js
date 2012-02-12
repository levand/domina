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
if(cljs.core.truth_((function (){var and__3546__auto____15816 = content;

if(cljs.core.truth_(and__3546__auto____15816))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15816;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15819 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15819))
{return or__3548__auto____15819;
} else
{var or__3548__auto____15820 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15820))
{return or__3548__auto____15820;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15821 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15821))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15821;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15824 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15824))
{return or__3548__auto____15824;
} else
{var or__3548__auto____15828 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15828))
{return or__3548__auto____15828;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15835 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15835))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15835;
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
if(cljs.core.truth_((void 0 === domina.t15840)))
{
/**
* @constructor
*/
domina.t15840 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15840.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15840");
});
domina.t15840.prototype.domina$DomContent$ = true;
domina.t15840.prototype.domina$DomContent$nodes = (function (_){
var this__15872 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15872.class_name)));
});
domina.t15840.prototype.domina$DomContent$single_node = (function (_){
var this__15882 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15882.class_name)));
});
domina.t15840.prototype.cljs$core$IMeta$ = true;
domina.t15840.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15883 = this;
return this__15883.__meta;
});
domina.t15840.prototype.cljs$core$IWithMeta$ = true;
domina.t15840.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15905 = this;
return (new domina.t15840(this__15905.class_name,this__15905.by_class,__meta));
});
domina.t15840;
} else
{}
return (new domina.t15840(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15911_SHARP_){
return p1__15911_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15917_SHARP_,p2__15918_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15917_SHARP_,p2__15918_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15923_SHARP_,p2__15922_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15922_SHARP_,p1__15923_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15928_SHARP_,p2__15926_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15926_SHARP_,p1__15928_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15931_SHARP_,p2__15930_SHARP_){
return goog.dom.replaceNode.call(null,p2__15930_SHARP_,p1__15931_SHARP_);
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
var s__15943 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15943))))
{return s__15943;
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
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__15952__15955 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15952__15955))
{var n__15958 = cljs.core.first.call(null,G__15952__15955);
var G__15952__15959 = G__15952__15955;

while(true){
goog.style.setStyle.call(null,n__15958,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15961 = cljs.core.next.call(null,G__15952__15959);

if(cljs.core.truth_(temp__3698__auto____15961))
{var G__15952__15962 = temp__3698__auto____15961;

{
var G__15970 = cljs.core.first.call(null,G__15952__15962);
var G__15971 = G__15952__15962;
n__15958 = G__15970;
G__15952__15959 = G__15971;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_style_BANG___delegate.call(this, content, name, value);
};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15974){
var content = cljs.core.first(arglist__15974);
var name = cljs.core.first(cljs.core.next(arglist__15974));
var value = cljs.core.rest(cljs.core.next(arglist__15974));
return set_style_BANG___delegate.call(this, content, name, value);
});
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){
var G__15979__15980 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15979__15980))
{var n__15981 = cljs.core.first.call(null,G__15979__15980);
var G__15979__15982 = G__15979__15980;

while(true){
n__15981.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15983 = cljs.core.next.call(null,G__15979__15982);

if(cljs.core.truth_(temp__3698__auto____15983))
{var G__15979__15984 = temp__3698__auto____15983;

{
var G__15985 = cljs.core.first.call(null,G__15979__15984);
var G__15986 = G__15979__15984;
n__15981 = G__15985;
G__15979__15982 = G__15986;
continue;
}
} else
{}
break;
}
} else
{}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;
if (goog.isDef(var_args)) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return set_attr_BANG___delegate.call(this, content, name, value);
};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15989){
var content = cljs.core.first(arglist__15989);
var name = cljs.core.first(cljs.core.next(arglist__15989));
var value = cljs.core.rest(cljs.core.next(arglist__15989));
return set_attr_BANG___delegate.call(this, content, name, value);
});
return set_attr_BANG_;
})()
;
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__15992__15996 = pair.split(/\s*:\s*/);
var k__15998 = cljs.core.nth.call(null,vec__15992__15996,0,null);
var v__16000 = cljs.core.nth.call(null,vec__15992__15996,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16001 = k__15998;

if(cljs.core.truth_(and__3546__auto____16001))
{return v__16000;
} else
{return and__3546__auto____16001;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15998.toLowerCase()),v__16000);
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
var node__16007 = domina.single_node.call(null,content);
var attrs__16008 = node__16007.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16005_SHARP_){
var attr__16009 = attrs__16008.item(p1__16005_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16009.nodeName.toLowerCase())],[attr__16009.nodeValue]);
}),cljs.core.range.call(null,attrs__16008.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16014__16020 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16014__16020))
{var G__16047__16050 = cljs.core.first.call(null,G__16014__16020);
var vec__16048__16051 = G__16047__16050;
var name__16052 = cljs.core.nth.call(null,vec__16048__16051,0,null);
var value__16053 = cljs.core.nth.call(null,vec__16048__16051,1,null);
var G__16014__16054 = G__16014__16020;

var G__16047__16055 = G__16047__16050;
var G__16014__16056 = G__16014__16054;

while(true){
var vec__16057__16058 = G__16047__16055;
var name__16059 = cljs.core.nth.call(null,vec__16057__16058,0,null);
var value__16060 = cljs.core.nth.call(null,vec__16057__16058,1,null);
var G__16014__16061 = G__16014__16056;

domina.set_style_BANG_.call(null,content,name__16059,value__16060);
var temp__3698__auto____16068 = cljs.core.next.call(null,G__16014__16061);

if(cljs.core.truth_(temp__3698__auto____16068))
{var G__16014__16069 = temp__3698__auto____16068;

{
var G__16075 = cljs.core.first.call(null,G__16014__16069);
var G__16077 = G__16014__16069;
G__16047__16055 = G__16075;
G__16014__16056 = G__16077;
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
var G__16080__16081 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16080__16081))
{var G__16083__16086 = cljs.core.first.call(null,G__16080__16081);
var vec__16084__16087 = G__16083__16086;
var name__16089 = cljs.core.nth.call(null,vec__16084__16087,0,null);
var value__16091 = cljs.core.nth.call(null,vec__16084__16087,1,null);
var G__16080__16092 = G__16080__16081;

var G__16083__16117 = G__16083__16086;
var G__16080__16118 = G__16080__16092;

while(true){
var vec__16122__16125 = G__16083__16117;
var name__16131 = cljs.core.nth.call(null,vec__16122__16125,0,null);
var value__16132 = cljs.core.nth.call(null,vec__16122__16125,1,null);
var G__16080__16133 = G__16080__16118;

domina.set_attr_BANG_.call(null,content,name__16131,value__16132);
var temp__3698__auto____16136 = cljs.core.next.call(null,G__16080__16133);

if(cljs.core.truth_(temp__3698__auto____16136))
{var G__16080__16139 = temp__3698__auto____16136;

{
var G__16147 = cljs.core.first.call(null,G__16080__16139);
var G__16148 = G__16080__16139;
G__16083__16117 = G__16147;
G__16080__16118 = G__16148;
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
var G__16169__16174 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16169__16174))
{var node__16178 = cljs.core.first.call(null,G__16169__16174);
var G__16169__16179 = G__16169__16174;

while(true){
goog.dom.classes.add.call(null,node__16178,class$);
var temp__3698__auto____16183 = cljs.core.next.call(null,G__16169__16179);

if(cljs.core.truth_(temp__3698__auto____16183))
{var G__16169__16184 = temp__3698__auto____16183;

{
var G__16187 = cljs.core.first.call(null,G__16169__16184);
var G__16188 = G__16169__16184;
node__16178 = G__16187;
G__16169__16179 = G__16188;
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
var G__16190__16193 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16190__16193))
{var node__16196 = cljs.core.first.call(null,G__16190__16193);
var G__16190__16197 = G__16190__16193;

while(true){
goog.dom.classes.remove.call(null,node__16196,class$);
var temp__3698__auto____16200 = cljs.core.next.call(null,G__16190__16197);

if(cljs.core.truth_(temp__3698__auto____16200))
{var G__16190__16201 = temp__3698__auto____16200;

{
var G__16206 = cljs.core.first.call(null,G__16190__16201);
var G__16208 = G__16190__16201;
node__16196 = G__16206;
G__16190__16197 = G__16208;
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
var text__16209 = (function (content){
return text.call(null,content,true);
});
var text__16210 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16209.call(this,content);
case  2 :
return text__16210.call(this,content,normalize);
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
var G__16226__16229 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16226__16229))
{var node__16233 = cljs.core.first.call(null,G__16226__16229);
var G__16226__16234 = G__16226__16229;

while(true){
goog.dom.setTextContent.call(null,node__16233,value);
var temp__3698__auto____16236 = cljs.core.next.call(null,G__16226__16234);

if(cljs.core.truth_(temp__3698__auto____16236))
{var G__16226__16237 = temp__3698__auto____16236;

{
var G__16241 = cljs.core.first.call(null,G__16226__16237);
var G__16242 = G__16226__16237;
node__16233 = G__16241;
G__16226__16234 = G__16242;
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
var G__16287__16290 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16287__16290))
{var node__16291 = cljs.core.first.call(null,G__16287__16290);
var G__16287__16292 = G__16287__16290;

while(true){
goog.dom.forms.setValue.call(null,node__16291,value);
var temp__3698__auto____16293 = cljs.core.next.call(null,G__16287__16292);

if(cljs.core.truth_(temp__3698__auto____16293))
{var G__16287__16294 = temp__3698__auto____16293;

{
var G__16302 = cljs.core.first.call(null,G__16287__16294);
var G__16303 = G__16287__16294;
node__16291 = G__16302;
G__16287__16292 = G__16303;
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
var G__16318__16320 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16318__16320))
{var node__16322 = cljs.core.first.call(null,G__16318__16320);
var G__16318__16324 = G__16318__16320;

while(true){
node__16322.innerHTML = value;
var temp__3698__auto____16329 = cljs.core.next.call(null,G__16318__16324);

if(cljs.core.truth_(temp__3698__auto____16329))
{var G__16318__16332 = temp__3698__auto____16329;

{
var G__16344 = cljs.core.first.call(null,G__16318__16332);
var G__16345 = G__16318__16332;
node__16322 = G__16344;
G__16318__16324 = G__16345;
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
var parents__16354 = domina.nodes.call(null,parent_content);
var children__16355 = domina.nodes.call(null,child_content);
var first_child__16373 = (function (){var frag__16358 = document.createDocumentFragment();

var G__16360__16361 = cljs.core.seq.call(null,children__16355);

if(cljs.core.truth_(G__16360__16361))
{var child__16362 = cljs.core.first.call(null,G__16360__16361);
var G__16360__16363 = G__16360__16361;

while(true){
frag__16358.appendChild(child__16362);
var temp__3698__auto____16368 = cljs.core.next.call(null,G__16360__16363);

if(cljs.core.truth_(temp__3698__auto____16368))
{var G__16360__16371 = temp__3698__auto____16368;

{
var G__16407 = cljs.core.first.call(null,G__16360__16371);
var G__16408 = G__16360__16371;
child__16362 = G__16407;
G__16360__16363 = G__16408;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16358;
})();
var other_children__16400 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16354) - 1),(function (){
return first_child__16373.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16354)))
{f.call(null,cljs.core.first.call(null,parents__16354),first_child__16373);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16316_SHARP_,p2__16317_SHARP_){
return f.call(null,p1__16316_SHARP_,p2__16317_SHARP_);
}),cljs.core.rest.call(null,parents__16354),other_children__16400));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16421 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16422 = (function (nl,n){
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
return lazy_nodelist__16421.call(this,nl);
case  2 :
return lazy_nodelist__16422.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6771__auto____16429 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16431 = x__6771__auto____16429;

if(cljs.core.truth_(and__3546__auto____16431))
{var and__3546__auto____16432 = x__6771__auto____16429.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16432))
{var and__3546__auto____16433 = x__6771__auto____16429.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16433))
{return cljs.core.not.call(null,x__6771__auto____16429.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16433;
}
} else
{return and__3546__auto____16432;
}
} else
{return and__3546__auto____16431;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16429);
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
var inner_wrapper__16452 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16453 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16452));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16453),1)))
{return inner_wrapper__16452.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16452));
} else
{return children__16453;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16462__16464 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16465 = cljs.core.nth.call(null,vec__16462__16464,0,null);
var table_level__16467 = cljs.core.nth.call(null,vec__16462__16464,1,null);
var ___16468 = cljs.core.nthnext.call(null,vec__16462__16464,2);
var wrapper__16470 = domina.create_wrapper.call(null,table_level__16467);

domina.set_wrapper_html_BANG_.call(null,wrapper__16470,content);
return domina.extract_wrapper_dom.call(null,wrapper__16470,table_level__16467);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6771__auto____16472 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16473 = x__6771__auto____16472;

if(cljs.core.truth_(and__3546__auto____16473))
{var and__3546__auto____16499 = x__6771__auto____16472.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16499))
{var and__3546__auto____16502 = x__6771__auto____16472.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16502))
{return cljs.core.not.call(null,x__6771__auto____16472.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16502;
}
} else
{return and__3546__auto____16499;
}
} else
{return and__3546__auto____16473;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16472);
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
if(cljs.core.truth_((function (){var x__6771__auto____16508 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16509 = x__6771__auto____16508;

if(cljs.core.truth_(and__3546__auto____16509))
{var and__3546__auto____16511 = x__6771__auto____16508.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16511))
{var and__3546__auto____16513 = x__6771__auto____16508.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16513))
{return cljs.core.not.call(null,x__6771__auto____16508.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16513;
}
} else
{return and__3546__auto____16511;
}
} else
{return and__3546__auto____16509;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6771__auto____16508);
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
var G__16537 = null;
var G__16537__16538 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16537__16539 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16537 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16537__16538.call(this,nodelist,n);
case  3 :
return G__16537__16539.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16537;
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
var G__16545 = null;
var G__16545__16546 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16545__16547 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16545 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16545__16546.call(this,nodelist,n);
case  3 :
return G__16545__16547.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16545;
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
var G__16551 = null;
var G__16551__16552 = (function (coll,n){
return coll.item(n);
});
var G__16551__16553 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16551 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16551__16552.call(this,coll,n);
case  3 :
return G__16551__16553.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16551;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
