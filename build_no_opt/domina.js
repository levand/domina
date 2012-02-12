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
if(cljs.core.truth_((function (){var and__3546__auto____15785 = content;

if(cljs.core.truth_(and__3546__auto____15785))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15785;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15786 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15786))
{return or__3548__auto____15786;
} else
{var or__3548__auto____15787 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15787))
{return or__3548__auto____15787;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15792 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15792))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15792;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15793 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15793))
{return or__3548__auto____15793;
} else
{var or__3548__auto____15794 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15794))
{return or__3548__auto____15794;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15797 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15797))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15797;
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
var this__15831 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15831.class_name)));
});
domina.t15814.prototype.domina$DomContent$single_node = (function (_){
var this__15870 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15870.class_name)));
});
domina.t15814.prototype.cljs$core$IMeta$ = true;
domina.t15814.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15872 = this;
return this__15872.__meta;
});
domina.t15814.prototype.cljs$core$IWithMeta$ = true;
domina.t15814.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15873 = this;
return (new domina.t15814(this__15873.class_name,this__15873.by_class,__meta));
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
return cljs.core.map.call(null,(function (p1__15877_SHARP_){
return p1__15877_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15883_SHARP_,p2__15884_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15883_SHARP_,p2__15884_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15894_SHARP_,p2__15893_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15893_SHARP_,p1__15894_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15896_SHARP_,p2__15895_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15895_SHARP_,p1__15896_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15901_SHARP_,p2__15900_SHARP_){
return goog.dom.replaceNode.call(null,p2__15900_SHARP_,p1__15901_SHARP_);
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
var s__15907 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15907))))
{return s__15907;
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
var G__15916__15975 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15916__15975))
{var n__15985 = cljs.core.first.call(null,G__15916__15975);
var G__15916__15986 = G__15916__15975;

while(true){
goog.style.setStyle.call(null,n__15985,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15987 = cljs.core.next.call(null,G__15916__15986);

if(cljs.core.truth_(temp__3698__auto____15987))
{var G__15916__15988 = temp__3698__auto____15987;

{
var G__15991 = cljs.core.first.call(null,G__15916__15988);
var G__15992 = G__15916__15988;
n__15985 = G__15991;
G__15916__15986 = G__15992;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15993){
var content = cljs.core.first(arglist__15993);
var name = cljs.core.first(cljs.core.next(arglist__15993));
var value = cljs.core.rest(cljs.core.next(arglist__15993));
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
var G__15998__16000 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15998__16000))
{var n__16003 = cljs.core.first.call(null,G__15998__16000);
var G__15998__16006 = G__15998__16000;

while(true){
n__16003.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16031 = cljs.core.next.call(null,G__15998__16006);

if(cljs.core.truth_(temp__3698__auto____16031))
{var G__15998__16033 = temp__3698__auto____16031;

{
var G__16039 = cljs.core.first.call(null,G__15998__16033);
var G__16040 = G__15998__16033;
n__16003 = G__16039;
G__15998__16006 = G__16040;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16041){
var content = cljs.core.first(arglist__16041);
var name = cljs.core.first(cljs.core.next(arglist__16041));
var value = cljs.core.rest(cljs.core.next(arglist__16041));
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
var vec__16042__16044 = pair.split(/\s*:\s*/);
var k__16045 = cljs.core.nth.call(null,vec__16042__16044,0,null);
var v__16046 = cljs.core.nth.call(null,vec__16042__16044,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16047 = k__16045;

if(cljs.core.truth_(and__3546__auto____16047))
{return v__16046;
} else
{return and__3546__auto____16047;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16045.toLowerCase()),v__16046);
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
var node__16058 = domina.single_node.call(null,content);
var attrs__16059 = node__16058.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16053_SHARP_){
var attr__16062 = attrs__16059.item(p1__16053_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16062.nodeName.toLowerCase())],[attr__16062.nodeValue]);
}),cljs.core.range.call(null,attrs__16059.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16063__16064 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16063__16064))
{var G__16066__16069 = cljs.core.first.call(null,G__16063__16064);
var vec__16068__16071 = G__16066__16069;
var name__16072 = cljs.core.nth.call(null,vec__16068__16071,0,null);
var value__16074 = cljs.core.nth.call(null,vec__16068__16071,1,null);
var G__16063__16076 = G__16063__16064;

var G__16066__16077 = G__16066__16069;
var G__16063__16078 = G__16063__16076;

while(true){
var vec__16079__16081 = G__16066__16077;
var name__16082 = cljs.core.nth.call(null,vec__16079__16081,0,null);
var value__16084 = cljs.core.nth.call(null,vec__16079__16081,1,null);
var G__16063__16085 = G__16063__16078;

domina.set_style_BANG_.call(null,content,name__16082,value__16084);
var temp__3698__auto____16086 = cljs.core.next.call(null,G__16063__16085);

if(cljs.core.truth_(temp__3698__auto____16086))
{var G__16063__16087 = temp__3698__auto____16086;

{
var G__16091 = cljs.core.first.call(null,G__16063__16087);
var G__16092 = G__16063__16087;
G__16066__16077 = G__16091;
G__16063__16078 = G__16092;
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
var G__16096__16099 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16096__16099))
{var G__16102__16107 = cljs.core.first.call(null,G__16096__16099);
var vec__16104__16108 = G__16102__16107;
var name__16109 = cljs.core.nth.call(null,vec__16104__16108,0,null);
var value__16110 = cljs.core.nth.call(null,vec__16104__16108,1,null);
var G__16096__16111 = G__16096__16099;

var G__16102__16113 = G__16102__16107;
var G__16096__16114 = G__16096__16111;

while(true){
var vec__16116__16117 = G__16102__16113;
var name__16118 = cljs.core.nth.call(null,vec__16116__16117,0,null);
var value__16122 = cljs.core.nth.call(null,vec__16116__16117,1,null);
var G__16096__16123 = G__16096__16114;

domina.set_attr_BANG_.call(null,content,name__16118,value__16122);
var temp__3698__auto____16124 = cljs.core.next.call(null,G__16096__16123);

if(cljs.core.truth_(temp__3698__auto____16124))
{var G__16096__16125 = temp__3698__auto____16124;

{
var G__16134 = cljs.core.first.call(null,G__16096__16125);
var G__16135 = G__16096__16125;
G__16102__16113 = G__16134;
G__16096__16114 = G__16135;
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
var G__16139__16140 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16139__16140))
{var node__16141 = cljs.core.first.call(null,G__16139__16140);
var G__16139__16142 = G__16139__16140;

while(true){
goog.dom.classes.add.call(null,node__16141,class$);
var temp__3698__auto____16143 = cljs.core.next.call(null,G__16139__16142);

if(cljs.core.truth_(temp__3698__auto____16143))
{var G__16139__16144 = temp__3698__auto____16143;

{
var G__16145 = cljs.core.first.call(null,G__16139__16144);
var G__16146 = G__16139__16144;
node__16141 = G__16145;
G__16139__16142 = G__16146;
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
var G__16147__16148 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16147__16148))
{var node__16149 = cljs.core.first.call(null,G__16147__16148);
var G__16147__16150 = G__16147__16148;

while(true){
goog.dom.classes.remove.call(null,node__16149,class$);
var temp__3698__auto____16151 = cljs.core.next.call(null,G__16147__16150);

if(cljs.core.truth_(temp__3698__auto____16151))
{var G__16147__16152 = temp__3698__auto____16151;

{
var G__16154 = cljs.core.first.call(null,G__16147__16152);
var G__16155 = G__16147__16152;
node__16149 = G__16154;
G__16147__16150 = G__16155;
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
var text__16163 = (function (content){
return text.call(null,content,true);
});
var text__16164 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16163.call(this,content);
case  2 :
return text__16164.call(this,content,normalize);
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
var G__16168__16169 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16168__16169))
{var node__16170 = cljs.core.first.call(null,G__16168__16169);
var G__16168__16171 = G__16168__16169;

while(true){
goog.dom.setTextContent.call(null,node__16170,value);
var temp__3698__auto____16172 = cljs.core.next.call(null,G__16168__16171);

if(cljs.core.truth_(temp__3698__auto____16172))
{var G__16168__16173 = temp__3698__auto____16172;

{
var G__16175 = cljs.core.first.call(null,G__16168__16173);
var G__16176 = G__16168__16173;
node__16170 = G__16175;
G__16168__16171 = G__16176;
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
var G__16177__16178 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16177__16178))
{var node__16179 = cljs.core.first.call(null,G__16177__16178);
var G__16177__16180 = G__16177__16178;

while(true){
goog.dom.forms.setValue.call(null,node__16179,value);
var temp__3698__auto____16181 = cljs.core.next.call(null,G__16177__16180);

if(cljs.core.truth_(temp__3698__auto____16181))
{var G__16177__16182 = temp__3698__auto____16181;

{
var G__16187 = cljs.core.first.call(null,G__16177__16182);
var G__16188 = G__16177__16182;
node__16179 = G__16187;
G__16177__16180 = G__16188;
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
var G__16196__16198 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16196__16198))
{var node__16199 = cljs.core.first.call(null,G__16196__16198);
var G__16196__16201 = G__16196__16198;

while(true){
node__16199.innerHTML = value;
var temp__3698__auto____16202 = cljs.core.next.call(null,G__16196__16201);

if(cljs.core.truth_(temp__3698__auto____16202))
{var G__16196__16211 = temp__3698__auto____16202;

{
var G__16212 = cljs.core.first.call(null,G__16196__16211);
var G__16213 = G__16196__16211;
node__16199 = G__16212;
G__16196__16201 = G__16213;
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
var parents__16214 = domina.nodes.call(null,parent_content);
var children__16215 = domina.nodes.call(null,child_content);
var first_child__16228 = (function (){var frag__16217 = document.createDocumentFragment();

var G__16219__16220 = cljs.core.seq.call(null,children__16215);

if(cljs.core.truth_(G__16219__16220))
{var child__16222 = cljs.core.first.call(null,G__16219__16220);
var G__16219__16223 = G__16219__16220;

while(true){
frag__16217.appendChild(child__16222);
var temp__3698__auto____16225 = cljs.core.next.call(null,G__16219__16223);

if(cljs.core.truth_(temp__3698__auto____16225))
{var G__16219__16226 = temp__3698__auto____16225;

{
var G__16233 = cljs.core.first.call(null,G__16219__16226);
var G__16234 = G__16219__16226;
child__16222 = G__16233;
G__16219__16223 = G__16234;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16217;
})();
var other_children__16231 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16214) - 1),(function (){
return first_child__16228.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16214)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16215)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16214)))
{f.call(null,cljs.core.first.call(null,parents__16214),first_child__16228);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16192_SHARP_,p2__16193_SHARP_){
return f.call(null,p1__16192_SHARP_,p2__16193_SHARP_);
}),cljs.core.rest.call(null,parents__16214),other_children__16231));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16239 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16240 = (function (nl,n){
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
return lazy_nodelist__16239.call(this,nl);
case  2 :
return lazy_nodelist__16240.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16242 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16243 = x__6743__auto____16242;

if(cljs.core.truth_(and__3546__auto____16243))
{var and__3546__auto____16244 = x__6743__auto____16242.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16244))
{var and__3546__auto____16245 = x__6743__auto____16242.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16245))
{return cljs.core.not.call(null,x__6743__auto____16242.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16245;
}
} else
{return and__3546__auto____16244;
}
} else
{return and__3546__auto____16243;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16242);
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
var inner_wrapper__16247 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16248 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16247));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16248),1)))
{return inner_wrapper__16247.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16247));
} else
{return children__16248;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16267__16269 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16270 = cljs.core.nth.call(null,vec__16267__16269,0,null);
var table_level__16271 = cljs.core.nth.call(null,vec__16267__16269,1,null);
var ___16272 = cljs.core.nthnext.call(null,vec__16267__16269,2);
var wrapper__16273 = domina.create_wrapper.call(null,table_level__16271);

domina.set_wrapper_html_BANG_.call(null,wrapper__16273,content);
return domina.extract_wrapper_dom.call(null,wrapper__16273,table_level__16271);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16279 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16282 = x__6743__auto____16279;

if(cljs.core.truth_(and__3546__auto____16282))
{var and__3546__auto____16285 = x__6743__auto____16279.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16285))
{var and__3546__auto____16291 = x__6743__auto____16279.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16291))
{return cljs.core.not.call(null,x__6743__auto____16279.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16291;
}
} else
{return and__3546__auto____16285;
}
} else
{return and__3546__auto____16282;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16279);
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
if(cljs.core.truth_((function (){var x__6743__auto____16303 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16306 = x__6743__auto____16303;

if(cljs.core.truth_(and__3546__auto____16306))
{var and__3546__auto____16307 = x__6743__auto____16303.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16307))
{var and__3546__auto____16308 = x__6743__auto____16303.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16308))
{return cljs.core.not.call(null,x__6743__auto____16303.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16308;
}
} else
{return and__3546__auto____16307;
}
} else
{return and__3546__auto____16306;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16303);
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
var G__16335 = null;
var G__16335__16336 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16335__16337 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16335 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16335__16336.call(this,nodelist,n);
case  3 :
return G__16335__16337.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16335;
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
var G__16345 = null;
var G__16345__16346 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16345__16347 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16345 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16345__16346.call(this,nodelist,n);
case  3 :
return G__16345__16347.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16345;
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
var G__16350 = null;
var G__16350__16351 = (function (coll,n){
return coll.item(n);
});
var G__16350__16352 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16350 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16350__16351.call(this,coll,n);
case  3 :
return G__16350__16352.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16350;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
