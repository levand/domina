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
if(cljs.core.truth_((function (){var and__3546__auto____15802 = content;

if(cljs.core.truth_(and__3546__auto____15802))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15802;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15803 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15803))
{return or__3548__auto____15803;
} else
{var or__3548__auto____15804 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15804))
{return or__3548__auto____15804;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15807 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15807))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15807;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15810 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15810))
{return or__3548__auto____15810;
} else
{var or__3548__auto____15811 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15811))
{return or__3548__auto____15811;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15812 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15812))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15812;
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
if(cljs.core.truth_((void 0 === domina.t15817)))
{
/**
* @constructor
*/
domina.t15817 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15817.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15817");
});
domina.t15817.prototype.domina$DomContent$ = true;
domina.t15817.prototype.domina$DomContent$nodes = (function (_){
var this__15819 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15819.class_name)));
});
domina.t15817.prototype.domina$DomContent$single_node = (function (_){
var this__15822 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15822.class_name)));
});
domina.t15817.prototype.cljs$core$IMeta$ = true;
domina.t15817.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15823 = this;
return this__15823.__meta;
});
domina.t15817.prototype.cljs$core$IWithMeta$ = true;
domina.t15817.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15824 = this;
return (new domina.t15817(this__15824.class_name,this__15824.by_class,__meta));
});
domina.t15817;
} else
{}
return (new domina.t15817(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15832_SHARP_){
return p1__15832_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15867_SHARP_,p2__15868_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15867_SHARP_,p2__15868_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15873_SHARP_,p2__15872_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15872_SHARP_,p1__15873_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15875_SHARP_,p2__15874_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15874_SHARP_,p1__15875_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15877_SHARP_,p2__15876_SHARP_){
return goog.dom.replaceNode.call(null,p2__15876_SHARP_,p1__15877_SHARP_);
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
var s__15888 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15888))))
{return s__15888;
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
var G__15893__15894 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15893__15894))
{var n__15895 = cljs.core.first.call(null,G__15893__15894);
var G__15893__15896 = G__15893__15894;

while(true){
goog.style.setStyle.call(null,n__15895,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15897 = cljs.core.next.call(null,G__15893__15896);

if(cljs.core.truth_(temp__3698__auto____15897))
{var G__15893__15901 = temp__3698__auto____15897;

{
var G__15904 = cljs.core.first.call(null,G__15893__15901);
var G__15905 = G__15893__15901;
n__15895 = G__15904;
G__15893__15896 = G__15905;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15906){
var content = cljs.core.first(arglist__15906);
var name = cljs.core.first(cljs.core.next(arglist__15906));
var value = cljs.core.rest(cljs.core.next(arglist__15906));
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
var G__15908__15909 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15908__15909))
{var n__15911 = cljs.core.first.call(null,G__15908__15909);
var G__15908__15912 = G__15908__15909;

while(true){
n__15911.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15913 = cljs.core.next.call(null,G__15908__15912);

if(cljs.core.truth_(temp__3698__auto____15913))
{var G__15908__15914 = temp__3698__auto____15913;

{
var G__15915 = cljs.core.first.call(null,G__15908__15914);
var G__15916 = G__15908__15914;
n__15911 = G__15915;
G__15908__15912 = G__15916;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15917){
var content = cljs.core.first(arglist__15917);
var name = cljs.core.first(cljs.core.next(arglist__15917));
var value = cljs.core.rest(cljs.core.next(arglist__15917));
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
var vec__15920__15921 = pair.split(/\s*:\s*/);
var k__15922 = cljs.core.nth.call(null,vec__15920__15921,0,null);
var v__15923 = cljs.core.nth.call(null,vec__15920__15921,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15924 = k__15922;

if(cljs.core.truth_(and__3546__auto____15924))
{return v__15923;
} else
{return and__3546__auto____15924;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15922.toLowerCase()),v__15923);
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
var node__15934 = domina.single_node.call(null,content);
var attrs__15935 = node__15934.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15930_SHARP_){
var attr__15938 = attrs__15935.item(p1__15930_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15938.nodeName.toLowerCase())],[attr__15938.nodeValue]);
}),cljs.core.range.call(null,attrs__15935.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15941__15943 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15941__15943))
{var G__15946__15949 = cljs.core.first.call(null,G__15941__15943);
var vec__15947__15950 = G__15946__15949;
var name__15951 = cljs.core.nth.call(null,vec__15947__15950,0,null);
var value__15952 = cljs.core.nth.call(null,vec__15947__15950,1,null);
var G__15941__15953 = G__15941__15943;

var G__15946__15954 = G__15946__15949;
var G__15941__15955 = G__15941__15953;

while(true){
var vec__15957__15958 = G__15946__15954;
var name__15959 = cljs.core.nth.call(null,vec__15957__15958,0,null);
var value__15960 = cljs.core.nth.call(null,vec__15957__15958,1,null);
var G__15941__15961 = G__15941__15955;

domina.set_style_BANG_.call(null,content,name__15959,value__15960);
var temp__3698__auto____15963 = cljs.core.next.call(null,G__15941__15961);

if(cljs.core.truth_(temp__3698__auto____15963))
{var G__15941__15964 = temp__3698__auto____15963;

{
var G__15966 = cljs.core.first.call(null,G__15941__15964);
var G__15967 = G__15941__15964;
G__15946__15954 = G__15966;
G__15941__15955 = G__15967;
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
var G__15970__15971 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15970__15971))
{var G__15973__15975 = cljs.core.first.call(null,G__15970__15971);
var vec__15974__15976 = G__15973__15975;
var name__15977 = cljs.core.nth.call(null,vec__15974__15976,0,null);
var value__15979 = cljs.core.nth.call(null,vec__15974__15976,1,null);
var G__15970__15980 = G__15970__15971;

var G__15973__15981 = G__15973__15975;
var G__15970__15982 = G__15970__15980;

while(true){
var vec__15983__15984 = G__15973__15981;
var name__15985 = cljs.core.nth.call(null,vec__15983__15984,0,null);
var value__15987 = cljs.core.nth.call(null,vec__15983__15984,1,null);
var G__15970__15990 = G__15970__15982;

domina.set_attr_BANG_.call(null,content,name__15985,value__15987);
var temp__3698__auto____15991 = cljs.core.next.call(null,G__15970__15990);

if(cljs.core.truth_(temp__3698__auto____15991))
{var G__15970__15992 = temp__3698__auto____15991;

{
var G__15995 = cljs.core.first.call(null,G__15970__15992);
var G__15996 = G__15970__15992;
G__15973__15981 = G__15995;
G__15970__15982 = G__15996;
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
var G__16000__16001 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16000__16001))
{var node__16002 = cljs.core.first.call(null,G__16000__16001);
var G__16000__16003 = G__16000__16001;

while(true){
goog.dom.classes.add.call(null,node__16002,class$);
var temp__3698__auto____16005 = cljs.core.next.call(null,G__16000__16003);

if(cljs.core.truth_(temp__3698__auto____16005))
{var G__16000__16007 = temp__3698__auto____16005;

{
var G__16008 = cljs.core.first.call(null,G__16000__16007);
var G__16009 = G__16000__16007;
node__16002 = G__16008;
G__16000__16003 = G__16009;
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
var G__16014__16015 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16014__16015))
{var node__16016 = cljs.core.first.call(null,G__16014__16015);
var G__16014__16017 = G__16014__16015;

while(true){
goog.dom.classes.remove.call(null,node__16016,class$);
var temp__3698__auto____16018 = cljs.core.next.call(null,G__16014__16017);

if(cljs.core.truth_(temp__3698__auto____16018))
{var G__16014__16019 = temp__3698__auto____16018;

{
var G__16020 = cljs.core.first.call(null,G__16014__16019);
var G__16021 = G__16014__16019;
node__16016 = G__16020;
G__16014__16017 = G__16021;
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
var text__16026 = (function (content){
return text.call(null,content,true);
});
var text__16027 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16026.call(this,content);
case  2 :
return text__16027.call(this,content,normalize);
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
var G__16030__16031 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16030__16031))
{var node__16032 = cljs.core.first.call(null,G__16030__16031);
var G__16030__16033 = G__16030__16031;

while(true){
goog.dom.setTextContent.call(null,node__16032,value);
var temp__3698__auto____16034 = cljs.core.next.call(null,G__16030__16033);

if(cljs.core.truth_(temp__3698__auto____16034))
{var G__16030__16035 = temp__3698__auto____16034;

{
var G__16038 = cljs.core.first.call(null,G__16030__16035);
var G__16039 = G__16030__16035;
node__16032 = G__16038;
G__16030__16033 = G__16039;
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
var G__16046__16047 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16046__16047))
{var node__16048 = cljs.core.first.call(null,G__16046__16047);
var G__16046__16049 = G__16046__16047;

while(true){
goog.dom.forms.setValue.call(null,node__16048,value);
var temp__3698__auto____16050 = cljs.core.next.call(null,G__16046__16049);

if(cljs.core.truth_(temp__3698__auto____16050))
{var G__16046__16053 = temp__3698__auto____16050;

{
var G__16055 = cljs.core.first.call(null,G__16046__16053);
var G__16056 = G__16046__16053;
node__16048 = G__16055;
G__16046__16049 = G__16056;
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
var G__16117__16121 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16117__16121))
{var node__16124 = cljs.core.first.call(null,G__16117__16121);
var G__16117__16126 = G__16117__16121;

while(true){
node__16124.innerHTML = value;
var temp__3698__auto____16132 = cljs.core.next.call(null,G__16117__16126);

if(cljs.core.truth_(temp__3698__auto____16132))
{var G__16117__16135 = temp__3698__auto____16132;

{
var G__16147 = cljs.core.first.call(null,G__16117__16135);
var G__16148 = G__16117__16135;
node__16124 = G__16147;
G__16117__16126 = G__16148;
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
var parents__16155 = domina.nodes.call(null,parent_content);
var children__16156 = domina.nodes.call(null,child_content);
var first_child__16169 = (function (){var frag__16157 = document.createDocumentFragment();

var G__16159__16161 = cljs.core.seq.call(null,children__16156);

if(cljs.core.truth_(G__16159__16161))
{var child__16162 = cljs.core.first.call(null,G__16159__16161);
var G__16159__16163 = G__16159__16161;

while(true){
frag__16157.appendChild(child__16162);
var temp__3698__auto____16165 = cljs.core.next.call(null,G__16159__16163);

if(cljs.core.truth_(temp__3698__auto____16165))
{var G__16159__16166 = temp__3698__auto____16165;

{
var G__16200 = cljs.core.first.call(null,G__16159__16166);
var G__16201 = G__16159__16166;
child__16162 = G__16200;
G__16159__16163 = G__16201;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16157;
})();
var other_children__16177 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16155) - 1),(function (){
return first_child__16169.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16155)))
{f.call(null,cljs.core.first.call(null,parents__16155),first_child__16169);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16114_SHARP_,p2__16115_SHARP_){
return f.call(null,p1__16114_SHARP_,p2__16115_SHARP_);
}),cljs.core.rest.call(null,parents__16155),other_children__16177));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16227 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16228 = (function (nl,n){
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
return lazy_nodelist__16227.call(this,nl);
case  2 :
return lazy_nodelist__16228.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16244 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16245 = x__6743__auto____16244;

if(cljs.core.truth_(and__3546__auto____16245))
{var and__3546__auto____16246 = x__6743__auto____16244.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16246))
{var and__3546__auto____16247 = x__6743__auto____16244.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16247))
{return cljs.core.not.call(null,x__6743__auto____16244.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16247;
}
} else
{return and__3546__auto____16246;
}
} else
{return and__3546__auto____16245;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16244);
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
var inner_wrapper__16312 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16314 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16312));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16314),1)))
{return inner_wrapper__16312.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16312));
} else
{return children__16314;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16325__16328 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16329 = cljs.core.nth.call(null,vec__16325__16328,0,null);
var table_level__16330 = cljs.core.nth.call(null,vec__16325__16328,1,null);
var ___16332 = cljs.core.nthnext.call(null,vec__16325__16328,2);
var wrapper__16333 = domina.create_wrapper.call(null,table_level__16330);

domina.set_wrapper_html_BANG_.call(null,wrapper__16333,content);
return domina.extract_wrapper_dom.call(null,wrapper__16333,table_level__16330);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16361 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16362 = x__6743__auto____16361;

if(cljs.core.truth_(and__3546__auto____16362))
{var and__3546__auto____16364 = x__6743__auto____16361.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16364))
{var and__3546__auto____16367 = x__6743__auto____16361.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16367))
{return cljs.core.not.call(null,x__6743__auto____16361.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16367;
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
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16361);
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
if(cljs.core.truth_((function (){var x__6743__auto____16374 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16375 = x__6743__auto____16374;

if(cljs.core.truth_(and__3546__auto____16375))
{var and__3546__auto____16377 = x__6743__auto____16374.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16377))
{var and__3546__auto____16381 = x__6743__auto____16374.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16381))
{return cljs.core.not.call(null,x__6743__auto____16374.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16381;
}
} else
{return and__3546__auto____16377;
}
} else
{return and__3546__auto____16375;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16374);
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
var G__16457 = null;
var G__16457__16459 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16457__16460 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16457 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16457__16459.call(this,nodelist,n);
case  3 :
return G__16457__16460.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16457;
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
var G__16483 = null;
var G__16483__16484 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16483__16485 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16483 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16483__16484.call(this,nodelist,n);
case  3 :
return G__16483__16485.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16483;
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
var G__16494 = null;
var G__16494__16495 = (function (coll,n){
return coll.item(n);
});
var G__16494__16496 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16494 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16494__16495.call(this,coll,n);
case  3 :
return G__16494__16496.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16494;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
