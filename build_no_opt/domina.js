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
if(cljs.core.truth_((function (){var and__3546__auto____15726 = content;

if(cljs.core.truth_(and__3546__auto____15726))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15726;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15727 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15727))
{return or__3548__auto____15727;
} else
{var or__3548__auto____15728 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15728))
{return or__3548__auto____15728;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15732 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15732))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15732;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15733 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15733))
{return or__3548__auto____15733;
} else
{var or__3548__auto____15785 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15785))
{return or__3548__auto____15785;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15801 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15801))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15801;
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
if(cljs.core.truth_((void 0 === domina.t15813)))
{
/**
* @constructor
*/
domina.t15813 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15813.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15813");
});
domina.t15813.prototype.domina$DomContent$ = true;
domina.t15813.prototype.domina$DomContent$nodes = (function (_){
var this__15838 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15838.class_name)));
});
domina.t15813.prototype.domina$DomContent$single_node = (function (_){
var this__15839 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15839.class_name)));
});
domina.t15813.prototype.cljs$core$IMeta$ = true;
domina.t15813.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15840 = this;
return this__15840.__meta;
});
domina.t15813.prototype.cljs$core$IWithMeta$ = true;
domina.t15813.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15841 = this;
return (new domina.t15813(this__15841.class_name,this__15841.by_class,__meta));
});
domina.t15813;
} else
{}
return (new domina.t15813(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15846_SHARP_){
return p1__15846_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15847_SHARP_,p2__15848_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15847_SHARP_,p2__15848_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15853_SHARP_,p2__15852_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15852_SHARP_,p1__15853_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15866_SHARP_,p2__15865_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15865_SHARP_,p1__15866_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15873_SHARP_,p2__15872_SHARP_){
return goog.dom.replaceNode.call(null,p2__15872_SHARP_,p1__15873_SHARP_);
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
var s__15886 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15886))))
{return s__15886;
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
var G__15898__15901 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15898__15901))
{var n__15903 = cljs.core.first.call(null,G__15898__15901);
var G__15898__15904 = G__15898__15901;

while(true){
goog.style.setStyle.call(null,n__15903,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15907 = cljs.core.next.call(null,G__15898__15904);

if(cljs.core.truth_(temp__3698__auto____15907))
{var G__15898__15908 = temp__3698__auto____15907;

{
var G__15915 = cljs.core.first.call(null,G__15898__15908);
var G__15916 = G__15898__15908;
n__15903 = G__15915;
G__15898__15904 = G__15916;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15917){
var content = cljs.core.first(arglist__15917);
var name = cljs.core.first(cljs.core.next(arglist__15917));
var value = cljs.core.rest(cljs.core.next(arglist__15917));
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
var G__15918__15919 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15918__15919))
{var n__15920 = cljs.core.first.call(null,G__15918__15919);
var G__15918__15921 = G__15918__15919;

while(true){
n__15920.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15922 = cljs.core.next.call(null,G__15918__15921);

if(cljs.core.truth_(temp__3698__auto____15922))
{var G__15918__15924 = temp__3698__auto____15922;

{
var G__15966 = cljs.core.first.call(null,G__15918__15924);
var G__15967 = G__15918__15924;
n__15920 = G__15966;
G__15918__15921 = G__15967;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15968){
var content = cljs.core.first(arglist__15968);
var name = cljs.core.first(cljs.core.next(arglist__15968));
var value = cljs.core.rest(cljs.core.next(arglist__15968));
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
var vec__15971__15972 = pair.split(/\s*:\s*/);
var k__15973 = cljs.core.nth.call(null,vec__15971__15972,0,null);
var v__15974 = cljs.core.nth.call(null,vec__15971__15972,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15975 = k__15973;

if(cljs.core.truth_(and__3546__auto____15975))
{return v__15974;
} else
{return and__3546__auto____15975;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15973.toLowerCase()),v__15974);
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
var node__16002 = domina.single_node.call(null,content);
var attrs__16003 = node__16002.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15997_SHARP_){
var attr__16004 = attrs__16003.item(p1__15997_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16004.nodeName.toLowerCase())],[attr__16004.nodeValue]);
}),cljs.core.range.call(null,attrs__16003.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16010__16011 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16010__16011))
{var G__16013__16032 = cljs.core.first.call(null,G__16010__16011);
var vec__16019__16033 = G__16013__16032;
var name__16034 = cljs.core.nth.call(null,vec__16019__16033,0,null);
var value__16037 = cljs.core.nth.call(null,vec__16019__16033,1,null);
var G__16010__16038 = G__16010__16011;

var G__16013__16039 = G__16013__16032;
var G__16010__16040 = G__16010__16038;

while(true){
var vec__16041__16042 = G__16013__16039;
var name__16043 = cljs.core.nth.call(null,vec__16041__16042,0,null);
var value__16044 = cljs.core.nth.call(null,vec__16041__16042,1,null);
var G__16010__16045 = G__16010__16040;

domina.set_style_BANG_.call(null,content,name__16043,value__16044);
var temp__3698__auto____16046 = cljs.core.next.call(null,G__16010__16045);

if(cljs.core.truth_(temp__3698__auto____16046))
{var G__16010__16047 = temp__3698__auto____16046;

{
var G__16053 = cljs.core.first.call(null,G__16010__16047);
var G__16054 = G__16010__16047;
G__16013__16039 = G__16053;
G__16010__16040 = G__16054;
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
var G__16059__16060 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16059__16060))
{var G__16062__16064 = cljs.core.first.call(null,G__16059__16060);
var vec__16063__16065 = G__16062__16064;
var name__16066 = cljs.core.nth.call(null,vec__16063__16065,0,null);
var value__16067 = cljs.core.nth.call(null,vec__16063__16065,1,null);
var G__16059__16068 = G__16059__16060;

var G__16062__16069 = G__16062__16064;
var G__16059__16070 = G__16059__16068;

while(true){
var vec__16071__16073 = G__16062__16069;
var name__16075 = cljs.core.nth.call(null,vec__16071__16073,0,null);
var value__16076 = cljs.core.nth.call(null,vec__16071__16073,1,null);
var G__16059__16077 = G__16059__16070;

domina.set_attr_BANG_.call(null,content,name__16075,value__16076);
var temp__3698__auto____16078 = cljs.core.next.call(null,G__16059__16077);

if(cljs.core.truth_(temp__3698__auto____16078))
{var G__16059__16079 = temp__3698__auto____16078;

{
var G__16085 = cljs.core.first.call(null,G__16059__16079);
var G__16086 = G__16059__16079;
G__16062__16069 = G__16085;
G__16059__16070 = G__16086;
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
var G__16094__16096 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16094__16096))
{var node__16098 = cljs.core.first.call(null,G__16094__16096);
var G__16094__16099 = G__16094__16096;

while(true){
goog.dom.classes.add.call(null,node__16098,class$);
var temp__3698__auto____16100 = cljs.core.next.call(null,G__16094__16099);

if(cljs.core.truth_(temp__3698__auto____16100))
{var G__16094__16102 = temp__3698__auto____16100;

{
var G__16110 = cljs.core.first.call(null,G__16094__16102);
var G__16111 = G__16094__16102;
node__16098 = G__16110;
G__16094__16099 = G__16111;
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
var G__16115__16116 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16115__16116))
{var node__16118 = cljs.core.first.call(null,G__16115__16116);
var G__16115__16119 = G__16115__16116;

while(true){
goog.dom.classes.remove.call(null,node__16118,class$);
var temp__3698__auto____16120 = cljs.core.next.call(null,G__16115__16119);

if(cljs.core.truth_(temp__3698__auto____16120))
{var G__16115__16121 = temp__3698__auto____16120;

{
var G__16122 = cljs.core.first.call(null,G__16115__16121);
var G__16123 = G__16115__16121;
node__16118 = G__16122;
G__16115__16119 = G__16123;
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
var text__16128 = (function (content){
return text.call(null,content,true);
});
var text__16129 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16128.call(this,content);
case  2 :
return text__16129.call(this,content,normalize);
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
var G__16137__16138 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16137__16138))
{var node__16139 = cljs.core.first.call(null,G__16137__16138);
var G__16137__16140 = G__16137__16138;

while(true){
goog.dom.setTextContent.call(null,node__16139,value);
var temp__3698__auto____16141 = cljs.core.next.call(null,G__16137__16140);

if(cljs.core.truth_(temp__3698__auto____16141))
{var G__16137__16143 = temp__3698__auto____16141;

{
var G__16147 = cljs.core.first.call(null,G__16137__16143);
var G__16148 = G__16137__16143;
node__16139 = G__16147;
G__16137__16140 = G__16148;
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
var G__16149__16150 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16149__16150))
{var node__16151 = cljs.core.first.call(null,G__16149__16150);
var G__16149__16152 = G__16149__16150;

while(true){
goog.dom.forms.setValue.call(null,node__16151,value);
var temp__3698__auto____16153 = cljs.core.next.call(null,G__16149__16152);

if(cljs.core.truth_(temp__3698__auto____16153))
{var G__16149__16154 = temp__3698__auto____16153;

{
var G__16155 = cljs.core.first.call(null,G__16149__16154);
var G__16156 = G__16149__16154;
node__16151 = G__16155;
G__16149__16152 = G__16156;
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
var G__16160__16162 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16160__16162))
{var node__16164 = cljs.core.first.call(null,G__16160__16162);
var G__16160__16165 = G__16160__16162;

while(true){
node__16164.innerHTML = value;
var temp__3698__auto____16166 = cljs.core.next.call(null,G__16160__16165);

if(cljs.core.truth_(temp__3698__auto____16166))
{var G__16160__16167 = temp__3698__auto____16166;

{
var G__16168 = cljs.core.first.call(null,G__16160__16167);
var G__16169 = G__16160__16167;
node__16164 = G__16168;
G__16160__16165 = G__16169;
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
var parents__16172 = domina.nodes.call(null,parent_content);
var children__16173 = domina.nodes.call(null,child_content);
var first_child__16213 = (function (){var frag__16175 = document.createDocumentFragment();

var G__16193__16200 = cljs.core.seq.call(null,children__16173);

if(cljs.core.truth_(G__16193__16200))
{var child__16204 = cljs.core.first.call(null,G__16193__16200);
var G__16193__16206 = G__16193__16200;

while(true){
frag__16175.appendChild(child__16204);
var temp__3698__auto____16208 = cljs.core.next.call(null,G__16193__16206);

if(cljs.core.truth_(temp__3698__auto____16208))
{var G__16193__16211 = temp__3698__auto____16208;

{
var G__16218 = cljs.core.first.call(null,G__16193__16211);
var G__16219 = G__16193__16211;
child__16204 = G__16218;
G__16193__16206 = G__16219;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16175;
})();
var other_children__16214 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16172) - 1),(function (){
return first_child__16213.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16172)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16173)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16172)))
{f.call(null,cljs.core.first.call(null,parents__16172),first_child__16213);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16158_SHARP_,p2__16159_SHARP_){
return f.call(null,p1__16158_SHARP_,p2__16159_SHARP_);
}),cljs.core.rest.call(null,parents__16172),other_children__16214));
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
if(cljs.core.truth_((function (){var x__6749__auto____16244 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16245 = x__6749__auto____16244;

if(cljs.core.truth_(and__3546__auto____16245))
{var and__3546__auto____16246 = x__6749__auto____16244.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16246))
{var and__3546__auto____16247 = x__6749__auto____16244.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16247))
{return cljs.core.not.call(null,x__6749__auto____16244.hasOwnProperty("cljs$core$ISeqable$"));
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
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16244);
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
var inner_wrapper__16276 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16277 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16276));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16277),1)))
{return inner_wrapper__16276.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16276));
} else
{return children__16277;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16296__16302 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16303 = cljs.core.nth.call(null,vec__16296__16302,0,null);
var table_level__16304 = cljs.core.nth.call(null,vec__16296__16302,1,null);
var ___16305 = cljs.core.nthnext.call(null,vec__16296__16302,2);
var wrapper__16306 = domina.create_wrapper.call(null,table_level__16304);

domina.set_wrapper_html_BANG_.call(null,wrapper__16306,content);
return domina.extract_wrapper_dom.call(null,wrapper__16306,table_level__16304);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6749__auto____16313 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16314 = x__6749__auto____16313;

if(cljs.core.truth_(and__3546__auto____16314))
{var and__3546__auto____16315 = x__6749__auto____16313.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16315))
{var and__3546__auto____16317 = x__6749__auto____16313.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16317))
{return cljs.core.not.call(null,x__6749__auto____16313.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16317;
}
} else
{return and__3546__auto____16315;
}
} else
{return and__3546__auto____16314;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16313);
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
if(cljs.core.truth_((function (){var x__6749__auto____16338 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16340 = x__6749__auto____16338;

if(cljs.core.truth_(and__3546__auto____16340))
{var and__3546__auto____16342 = x__6749__auto____16338.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16342))
{var and__3546__auto____16343 = x__6749__auto____16338.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16343))
{return cljs.core.not.call(null,x__6749__auto____16338.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16343;
}
} else
{return and__3546__auto____16342;
}
} else
{return and__3546__auto____16340;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6749__auto____16338);
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
var G__16382 = null;
var G__16382__16383 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16382__16384 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16382 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16382__16383.call(this,nodelist,n);
case  3 :
return G__16382__16384.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16382;
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
var G__16394 = null;
var G__16394__16397 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16394__16398 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16394 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16394__16397.call(this,nodelist,n);
case  3 :
return G__16394__16398.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16394;
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
var G__16406 = null;
var G__16406__16407 = (function (coll,n){
return coll.item(n);
});
var G__16406__16408 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16406 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16406__16407.call(this,coll,n);
case  3 :
return G__16406__16408.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16406;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
