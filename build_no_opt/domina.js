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
if(cljs.core.truth_((function (){var and__3546__auto____15668 = content;

if(cljs.core.truth_(and__3546__auto____15668))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15668;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15670 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15670))
{return or__3548__auto____15670;
} else
{var or__3548__auto____15672 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15672))
{return or__3548__auto____15672;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15673 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15673))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15673;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15677 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15677))
{return or__3548__auto____15677;
} else
{var or__3548__auto____15678 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15678))
{return or__3548__auto____15678;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15689 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15689))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15689;
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
if(cljs.core.truth_((void 0 === domina.t15697)))
{
/**
* @constructor
*/
domina.t15697 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15697.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15697");
});
domina.t15697.prototype.domina$DomContent$ = true;
domina.t15697.prototype.domina$DomContent$nodes = (function (_){
var this__15698 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15698.class_name)));
});
domina.t15697.prototype.domina$DomContent$single_node = (function (_){
var this__15699 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15699.class_name)));
});
domina.t15697.prototype.cljs$core$IMeta$ = true;
domina.t15697.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15700 = this;
return this__15700.__meta;
});
domina.t15697.prototype.cljs$core$IWithMeta$ = true;
domina.t15697.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15709 = this;
return (new domina.t15697(this__15709.class_name,this__15709.by_class,__meta));
});
domina.t15697;
} else
{}
return (new domina.t15697(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15713_SHARP_){
return p1__15713_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15716_SHARP_,p2__15717_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15716_SHARP_,p2__15717_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15721_SHARP_,p2__15720_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15720_SHARP_,p1__15721_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15723_SHARP_,p2__15722_SHARP_){
return goog.dom.replaceNode.call(null,p2__15722_SHARP_,p1__15723_SHARP_);
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
var s__15762 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15762))))
{return s__15762;
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
var G__15768__15770 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15768__15770))
{var n__15772 = cljs.core.first.call(null,G__15768__15770);
var G__15768__15773 = G__15768__15770;

while(true){
goog.style.setStyle.call(null,n__15772,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15774 = cljs.core.next.call(null,G__15768__15773);

if(cljs.core.truth_(temp__3698__auto____15774))
{var G__15768__15777 = temp__3698__auto____15774;

{
var G__15778 = cljs.core.first.call(null,G__15768__15777);
var G__15779 = G__15768__15777;
n__15772 = G__15778;
G__15768__15773 = G__15779;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15780){
var content = cljs.core.first(arglist__15780);
var name = cljs.core.first(cljs.core.next(arglist__15780));
var value = cljs.core.rest(cljs.core.next(arglist__15780));
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
var G__15781__15782 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15781__15782))
{var n__15783 = cljs.core.first.call(null,G__15781__15782);
var G__15781__15784 = G__15781__15782;

while(true){
n__15783.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15786 = cljs.core.next.call(null,G__15781__15784);

if(cljs.core.truth_(temp__3698__auto____15786))
{var G__15781__15787 = temp__3698__auto____15786;

{
var G__15790 = cljs.core.first.call(null,G__15781__15787);
var G__15791 = G__15781__15787;
n__15783 = G__15790;
G__15781__15784 = G__15791;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15792){
var content = cljs.core.first(arglist__15792);
var name = cljs.core.first(cljs.core.next(arglist__15792));
var value = cljs.core.rest(cljs.core.next(arglist__15792));
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
var vec__15796__15798 = pair.split(/\s*:\s*/);
var k__15799 = cljs.core.nth.call(null,vec__15796__15798,0,null);
var v__15801 = cljs.core.nth.call(null,vec__15796__15798,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15803 = k__15799;

if(cljs.core.truth_(and__3546__auto____15803))
{return v__15801;
} else
{return and__3546__auto____15803;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15799.toLowerCase()),v__15801);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__15814 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__15814)))
{return domina.parse_style_attributes.call(null,style__15814);
} else
{if(cljs.core.truth_(style__15814.cssText))
{return domina.parse_style_attributes.call(null,style__15814.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__15824 = domina.single_node.call(null,content);
var attrs__15825 = node__15824.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15810_SHARP_){
var attr__15902 = attrs__15825.item(p1__15810_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15902.nodeName.toLowerCase())],[attr__15902.nodeValue]);
}),cljs.core.range.call(null,attrs__15825.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15908__15911 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15908__15911))
{var G__15914__15918 = cljs.core.first.call(null,G__15908__15911);
var vec__15916__15919 = G__15914__15918;
var name__15922 = cljs.core.nth.call(null,vec__15916__15919,0,null);
var value__15923 = cljs.core.nth.call(null,vec__15916__15919,1,null);
var G__15908__15924 = G__15908__15911;

var G__15914__15927 = G__15914__15918;
var G__15908__15929 = G__15908__15924;

while(true){
var vec__15930__15932 = G__15914__15927;
var name__15933 = cljs.core.nth.call(null,vec__15930__15932,0,null);
var value__15934 = cljs.core.nth.call(null,vec__15930__15932,1,null);
var G__15908__15935 = G__15908__15929;

domina.set_style_BANG_.call(null,content,name__15933,value__15934);
var temp__3698__auto____15936 = cljs.core.next.call(null,G__15908__15935);

if(cljs.core.truth_(temp__3698__auto____15936))
{var G__15908__15937 = temp__3698__auto____15936;

{
var G__15942 = cljs.core.first.call(null,G__15908__15937);
var G__15943 = G__15908__15937;
G__15914__15927 = G__15942;
G__15908__15929 = G__15943;
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
var G__15946__15949 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15946__15949))
{var G__15953__15961 = cljs.core.first.call(null,G__15946__15949);
var vec__15956__15962 = G__15953__15961;
var name__15964 = cljs.core.nth.call(null,vec__15956__15962,0,null);
var value__15966 = cljs.core.nth.call(null,vec__15956__15962,1,null);
var G__15946__15967 = G__15946__15949;

var G__15953__15970 = G__15953__15961;
var G__15946__15971 = G__15946__15967;

while(true){
var vec__15972__15973 = G__15953__15970;
var name__15974 = cljs.core.nth.call(null,vec__15972__15973,0,null);
var value__15976 = cljs.core.nth.call(null,vec__15972__15973,1,null);
var G__15946__15977 = G__15946__15971;

domina.set_attr_BANG_.call(null,content,name__15974,value__15976);
var temp__3698__auto____15979 = cljs.core.next.call(null,G__15946__15977);

if(cljs.core.truth_(temp__3698__auto____15979))
{var G__15946__15980 = temp__3698__auto____15979;

{
var G__15983 = cljs.core.first.call(null,G__15946__15980);
var G__15984 = G__15946__15980;
G__15953__15970 = G__15983;
G__15946__15971 = G__15984;
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
var G__15991__15992 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15991__15992))
{var node__15993 = cljs.core.first.call(null,G__15991__15992);
var G__15991__15994 = G__15991__15992;

while(true){
goog.dom.classes.add.call(null,node__15993,class$);
var temp__3698__auto____15997 = cljs.core.next.call(null,G__15991__15994);

if(cljs.core.truth_(temp__3698__auto____15997))
{var G__15991__15998 = temp__3698__auto____15997;

{
var G__16004 = cljs.core.first.call(null,G__15991__15998);
var G__16005 = G__15991__15998;
node__15993 = G__16004;
G__15991__15994 = G__16005;
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
var G__16007__16008 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16007__16008))
{var node__16009 = cljs.core.first.call(null,G__16007__16008);
var G__16007__16010 = G__16007__16008;

while(true){
goog.dom.classes.remove.call(null,node__16009,class$);
var temp__3698__auto____16013 = cljs.core.next.call(null,G__16007__16010);

if(cljs.core.truth_(temp__3698__auto____16013))
{var G__16007__16014 = temp__3698__auto____16013;

{
var G__16015 = cljs.core.first.call(null,G__16007__16014);
var G__16016 = G__16007__16014;
node__16009 = G__16015;
G__16007__16010 = G__16016;
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
var text__16032 = (function (content){
return text.call(null,content,true);
});
var text__16033 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16032.call(this,content);
case  2 :
return text__16033.call(this,content,normalize);
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
var G__16037__16038 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16037__16038))
{var node__16040 = cljs.core.first.call(null,G__16037__16038);
var G__16037__16041 = G__16037__16038;

while(true){
goog.dom.setTextContent.call(null,node__16040,value);
var temp__3698__auto____16042 = cljs.core.next.call(null,G__16037__16041);

if(cljs.core.truth_(temp__3698__auto____16042))
{var G__16037__16044 = temp__3698__auto____16042;

{
var G__16050 = cljs.core.first.call(null,G__16037__16044);
var G__16051 = G__16037__16044;
node__16040 = G__16050;
G__16037__16041 = G__16051;
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
var G__16052__16055 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16052__16055))
{var node__16057 = cljs.core.first.call(null,G__16052__16055);
var G__16052__16058 = G__16052__16055;

while(true){
goog.dom.forms.setValue.call(null,node__16057,value);
var temp__3698__auto____16061 = cljs.core.next.call(null,G__16052__16058);

if(cljs.core.truth_(temp__3698__auto____16061))
{var G__16052__16062 = temp__3698__auto____16061;

{
var G__16066 = cljs.core.first.call(null,G__16052__16062);
var G__16067 = G__16052__16062;
node__16057 = G__16066;
G__16052__16058 = G__16067;
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
var G__16070__16072 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16070__16072))
{var node__16073 = cljs.core.first.call(null,G__16070__16072);
var G__16070__16075 = G__16070__16072;

while(true){
node__16073.innerHTML = value;
var temp__3698__auto____16076 = cljs.core.next.call(null,G__16070__16075);

if(cljs.core.truth_(temp__3698__auto____16076))
{var G__16070__16078 = temp__3698__auto____16076;

{
var G__16101 = cljs.core.first.call(null,G__16070__16078);
var G__16102 = G__16070__16078;
node__16073 = G__16101;
G__16070__16075 = G__16102;
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
var parents__16105 = domina.nodes.call(null,parent_content);
var children__16106 = domina.nodes.call(null,child_content);
var first_child__16149 = (function (){var frag__16107 = document.createDocumentFragment();

var G__16108__16109 = cljs.core.seq.call(null,children__16106);

if(cljs.core.truth_(G__16108__16109))
{var child__16110 = cljs.core.first.call(null,G__16108__16109);
var G__16108__16111 = G__16108__16109;

while(true){
frag__16107.appendChild(child__16110);
var temp__3698__auto____16112 = cljs.core.next.call(null,G__16108__16111);

if(cljs.core.truth_(temp__3698__auto____16112))
{var G__16108__16148 = temp__3698__auto____16112;

{
var G__16167 = cljs.core.first.call(null,G__16108__16148);
var G__16168 = G__16108__16148;
child__16110 = G__16167;
G__16108__16111 = G__16168;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16107;
})();
var other_children__16151 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16105) - 1),(function (){
return first_child__16149.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16105)))
{f.call(null,cljs.core.first.call(null,parents__16105),first_child__16149);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16068_SHARP_,p2__16069_SHARP_){
return f.call(null,p1__16068_SHARP_,p2__16069_SHARP_);
}),cljs.core.rest.call(null,parents__16105),other_children__16151));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16174 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16175 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_item__16174.call(this,nl);
case  2 :
return lazy_nl_via_item__16175.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16182 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16183 = (function (nl,n){
if(cljs.core.truth_((n < nl.length)))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
})));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case  1 :
return lazy_nl_via_array_ref__16182.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16183.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){
if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
/**
* Early versions of IE have things which are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){
if(cljs.core.truth_((function (){var x__6751__auto____16196 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16197 = x__6751__auto____16196;

if(cljs.core.truth_(and__3546__auto____16197))
{var and__3546__auto____16198 = x__6751__auto____16196.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16198))
{var and__3546__auto____16199 = x__6751__auto____16196.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16199))
{return cljs.core.not.call(null,x__6751__auto____16196.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16199;
}
} else
{return and__3546__auto____16198;
}
} else
{return and__3546__auto____16197;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16196);
}
})()))
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(list_thing.length))
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
var inner_wrapper__16242 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16243 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16242));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16243),1)))
{return inner_wrapper__16242.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16242));
} else
{return children__16243;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16249__16251 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16254 = cljs.core.nth.call(null,vec__16249__16251,0,null);
var table_level__16256 = cljs.core.nth.call(null,vec__16249__16251,1,null);
var ___16258 = cljs.core.nthnext.call(null,vec__16249__16251,2);
var wrapper__16261 = domina.create_wrapper.call(null,table_level__16256);

domina.set_wrapper_html_BANG_.call(null,wrapper__16261,content);
return domina.extract_wrapper_dom.call(null,wrapper__16261,table_level__16256);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6751__auto____16271 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16272 = x__6751__auto____16271;

if(cljs.core.truth_(and__3546__auto____16272))
{var and__3546__auto____16274 = x__6751__auto____16271.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16274))
{var and__3546__auto____16296 = x__6751__auto____16271.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16296))
{return cljs.core.not.call(null,x__6751__auto____16271.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16296;
}
} else
{return and__3546__auto____16274;
}
} else
{return and__3546__auto____16272;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16271);
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
if(cljs.core.truth_((function (){var x__6751__auto____16310 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16312 = x__6751__auto____16310;

if(cljs.core.truth_(and__3546__auto____16312))
{var and__3546__auto____16313 = x__6751__auto____16310.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16313))
{var and__3546__auto____16318 = x__6751__auto____16310.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16318))
{return cljs.core.not.call(null,x__6751__auto____16310.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16318;
}
} else
{return and__3546__auto____16313;
}
} else
{return and__3546__auto____16312;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16310);
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
var G__16332 = null;
var G__16332__16333 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16332__16334 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16332 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16332__16333.call(this,nodelist,n);
case  3 :
return G__16332__16334.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16332;
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
var G__16373 = null;
var G__16373__16375 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16373__16376 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16373 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16373__16375.call(this,nodelist,n);
case  3 :
return G__16373__16376.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16373;
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
var G__16392 = null;
var G__16392__16394 = (function (coll,n){
return coll.item(n);
});
var G__16392__16395 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16392 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16392__16394.call(this,coll,n);
case  3 :
return G__16392__16395.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16392;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
