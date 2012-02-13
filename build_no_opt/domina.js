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
if(cljs.core.truth_((function (){var and__3546__auto____15722 = content;

if(cljs.core.truth_(and__3546__auto____15722))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15722;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15724 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15724))
{return or__3548__auto____15724;
} else
{var or__3548__auto____15726 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15726))
{return or__3548__auto____15726;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15728 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15728))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15728;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15730 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15730))
{return or__3548__auto____15730;
} else
{var or__3548__auto____15732 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15732))
{return or__3548__auto____15732;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15738 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15738))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15738;
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
if(cljs.core.truth_((void 0 === domina.t15739)))
{
/**
* @constructor
*/
domina.t15739 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15739.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15739");
});
domina.t15739.prototype.domina$DomContent$ = true;
domina.t15739.prototype.domina$DomContent$nodes = (function (_){
var this__15740 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15740.class_name)));
});
domina.t15739.prototype.domina$DomContent$single_node = (function (_){
var this__15741 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15741.class_name)));
});
domina.t15739.prototype.cljs$core$IMeta$ = true;
domina.t15739.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15742 = this;
return this__15742.__meta;
});
domina.t15739.prototype.cljs$core$IWithMeta$ = true;
domina.t15739.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15743 = this;
return (new domina.t15739(this__15743.class_name,this__15743.by_class,__meta));
});
domina.t15739;
} else
{}
return (new domina.t15739(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15796_SHARP_){
return p1__15796_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15810_SHARP_,p2__15811_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15810_SHARP_,p2__15811_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15821_SHARP_,p2__15820_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15820_SHARP_,p1__15821_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15826_SHARP_,p2__15825_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15825_SHARP_,p1__15826_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15828_SHARP_,p2__15827_SHARP_){
return goog.dom.replaceNode.call(null,p2__15827_SHARP_,p1__15828_SHARP_);
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
var s__15847 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15847))))
{return s__15847;
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
var G__15848__15849 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15848__15849))
{var n__15850 = cljs.core.first.call(null,G__15848__15849);
var G__15848__15851 = G__15848__15849;

while(true){
goog.style.setStyle.call(null,n__15850,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15852 = cljs.core.next.call(null,G__15848__15851);

if(cljs.core.truth_(temp__3698__auto____15852))
{var G__15848__15853 = temp__3698__auto____15852;

{
var G__15854 = cljs.core.first.call(null,G__15848__15853);
var G__15855 = G__15848__15853;
n__15850 = G__15854;
G__15848__15851 = G__15855;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15856){
var content = cljs.core.first(arglist__15856);
var name = cljs.core.first(cljs.core.next(arglist__15856));
var value = cljs.core.rest(cljs.core.next(arglist__15856));
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
var G__15857__15858 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15857__15858))
{var n__15859 = cljs.core.first.call(null,G__15857__15858);
var G__15857__15879 = G__15857__15858;

while(true){
n__15859.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15880 = cljs.core.next.call(null,G__15857__15879);

if(cljs.core.truth_(temp__3698__auto____15880))
{var G__15857__15881 = temp__3698__auto____15880;

{
var G__15884 = cljs.core.first.call(null,G__15857__15881);
var G__15885 = G__15857__15881;
n__15859 = G__15884;
G__15857__15879 = G__15885;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15887){
var content = cljs.core.first(arglist__15887);
var name = cljs.core.first(cljs.core.next(arglist__15887));
var value = cljs.core.rest(cljs.core.next(arglist__15887));
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
var vec__15892__15894 = pair.split(/\s*:\s*/);
var k__15895 = cljs.core.nth.call(null,vec__15892__15894,0,null);
var v__15896 = cljs.core.nth.call(null,vec__15892__15894,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15901 = k__15895;

if(cljs.core.truth_(and__3546__auto____15901))
{return v__15896;
} else
{return and__3546__auto____15901;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15895.toLowerCase()),v__15896);
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
var node__15940 = domina.single_node.call(null,content);
var attrs__15941 = node__15940.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15906_SHARP_){
var attr__15945 = attrs__15941.item(p1__15906_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15945.nodeName.toLowerCase())],[attr__15945.nodeValue]);
}),cljs.core.range.call(null,attrs__15941.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15965__15977 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15965__15977))
{var G__15979__15981 = cljs.core.first.call(null,G__15965__15977);
var vec__15980__15982 = G__15979__15981;
var name__15983 = cljs.core.nth.call(null,vec__15980__15982,0,null);
var value__15984 = cljs.core.nth.call(null,vec__15980__15982,1,null);
var G__15965__15985 = G__15965__15977;

var G__15979__15986 = G__15979__15981;
var G__15965__15987 = G__15965__15985;

while(true){
var vec__15988__15989 = G__15979__15986;
var name__15990 = cljs.core.nth.call(null,vec__15988__15989,0,null);
var value__15991 = cljs.core.nth.call(null,vec__15988__15989,1,null);
var G__15965__15992 = G__15965__15987;

domina.set_style_BANG_.call(null,content,name__15990,value__15991);
var temp__3698__auto____15993 = cljs.core.next.call(null,G__15965__15992);

if(cljs.core.truth_(temp__3698__auto____15993))
{var G__15965__15994 = temp__3698__auto____15993;

{
var G__16038 = cljs.core.first.call(null,G__15965__15994);
var G__16039 = G__15965__15994;
G__15979__15986 = G__16038;
G__15965__15987 = G__16039;
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
var G__16040__16041 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16040__16041))
{var G__16044__16048 = cljs.core.first.call(null,G__16040__16041);
var vec__16045__16049 = G__16044__16048;
var name__16050 = cljs.core.nth.call(null,vec__16045__16049,0,null);
var value__16051 = cljs.core.nth.call(null,vec__16045__16049,1,null);
var G__16040__16052 = G__16040__16041;

var G__16044__16053 = G__16044__16048;
var G__16040__16054 = G__16040__16052;

while(true){
var vec__16055__16056 = G__16044__16053;
var name__16057 = cljs.core.nth.call(null,vec__16055__16056,0,null);
var value__16058 = cljs.core.nth.call(null,vec__16055__16056,1,null);
var G__16040__16059 = G__16040__16054;

domina.set_attr_BANG_.call(null,content,name__16057,value__16058);
var temp__3698__auto____16060 = cljs.core.next.call(null,G__16040__16059);

if(cljs.core.truth_(temp__3698__auto____16060))
{var G__16040__16061 = temp__3698__auto____16060;

{
var G__16065 = cljs.core.first.call(null,G__16040__16061);
var G__16066 = G__16040__16061;
G__16044__16053 = G__16065;
G__16040__16054 = G__16066;
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
var G__16068__16071 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16068__16071))
{var node__16073 = cljs.core.first.call(null,G__16068__16071);
var G__16068__16074 = G__16068__16071;

while(true){
goog.dom.classes.add.call(null,node__16073,class$);
var temp__3698__auto____16076 = cljs.core.next.call(null,G__16068__16074);

if(cljs.core.truth_(temp__3698__auto____16076))
{var G__16068__16077 = temp__3698__auto____16076;

{
var G__16081 = cljs.core.first.call(null,G__16068__16077);
var G__16082 = G__16068__16077;
node__16073 = G__16081;
G__16068__16074 = G__16082;
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
var G__16083__16084 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16083__16084))
{var node__16085 = cljs.core.first.call(null,G__16083__16084);
var G__16083__16086 = G__16083__16084;

while(true){
goog.dom.classes.remove.call(null,node__16085,class$);
var temp__3698__auto____16087 = cljs.core.next.call(null,G__16083__16086);

if(cljs.core.truth_(temp__3698__auto____16087))
{var G__16083__16090 = temp__3698__auto____16087;

{
var G__16096 = cljs.core.first.call(null,G__16083__16090);
var G__16097 = G__16083__16090;
node__16085 = G__16096;
G__16083__16086 = G__16097;
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
var text__16106 = (function (content){
return text.call(null,content,true);
});
var text__16107 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16106.call(this,content);
case  2 :
return text__16107.call(this,content,normalize);
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
var G__16111__16112 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16111__16112))
{var node__16113 = cljs.core.first.call(null,G__16111__16112);
var G__16111__16114 = G__16111__16112;

while(true){
goog.dom.setTextContent.call(null,node__16113,value);
var temp__3698__auto____16117 = cljs.core.next.call(null,G__16111__16114);

if(cljs.core.truth_(temp__3698__auto____16117))
{var G__16111__16118 = temp__3698__auto____16117;

{
var G__16120 = cljs.core.first.call(null,G__16111__16118);
var G__16121 = G__16111__16118;
node__16113 = G__16120;
G__16111__16114 = G__16121;
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
var G__16128__16130 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16128__16130))
{var node__16134 = cljs.core.first.call(null,G__16128__16130);
var G__16128__16135 = G__16128__16130;

while(true){
goog.dom.forms.setValue.call(null,node__16134,value);
var temp__3698__auto____16176 = cljs.core.next.call(null,G__16128__16135);

if(cljs.core.truth_(temp__3698__auto____16176))
{var G__16128__16177 = temp__3698__auto____16176;

{
var G__16184 = cljs.core.first.call(null,G__16128__16177);
var G__16185 = G__16128__16177;
node__16134 = G__16184;
G__16128__16135 = G__16185;
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
var G__16241__16243 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16241__16243))
{var node__16247 = cljs.core.first.call(null,G__16241__16243);
var G__16241__16249 = G__16241__16243;

while(true){
node__16247.innerHTML = value;
var temp__3698__auto____16257 = cljs.core.next.call(null,G__16241__16249);

if(cljs.core.truth_(temp__3698__auto____16257))
{var G__16241__16261 = temp__3698__auto____16257;

{
var G__16274 = cljs.core.first.call(null,G__16241__16261);
var G__16275 = G__16241__16261;
node__16247 = G__16274;
G__16241__16249 = G__16275;
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
var parents__16281 = domina.nodes.call(null,parent_content);
var children__16282 = domina.nodes.call(null,child_content);
var first_child__16297 = (function (){var frag__16283 = document.createDocumentFragment();

var G__16284__16285 = cljs.core.seq.call(null,children__16282);

if(cljs.core.truth_(G__16284__16285))
{var child__16288 = cljs.core.first.call(null,G__16284__16285);
var G__16284__16289 = G__16284__16285;

while(true){
frag__16283.appendChild(child__16288);
var temp__3698__auto____16291 = cljs.core.next.call(null,G__16284__16289);

if(cljs.core.truth_(temp__3698__auto____16291))
{var G__16284__16293 = temp__3698__auto____16291;

{
var G__16313 = cljs.core.first.call(null,G__16284__16293);
var G__16314 = G__16284__16293;
child__16288 = G__16313;
G__16284__16289 = G__16314;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16283;
})();
var other_children__16305 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16281) - 1),(function (){
return first_child__16297.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16281)))
{f.call(null,cljs.core.first.call(null,parents__16281),first_child__16297);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16239_SHARP_,p2__16240_SHARP_){
return f.call(null,p1__16239_SHARP_,p2__16240_SHARP_);
}),cljs.core.rest.call(null,parents__16281),other_children__16305));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16319 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16320 = (function (nl,n){
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
return lazy_nl_via_item__16319.call(this,nl);
case  2 :
return lazy_nl_via_item__16320.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16334 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16335 = (function (nl,n){
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
return lazy_nl_via_array_ref__16334.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16335.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16348 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16349 = x__6743__auto____16348;

if(cljs.core.truth_(and__3546__auto____16349))
{var and__3546__auto____16350 = x__6743__auto____16348.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16350))
{var and__3546__auto____16351 = x__6743__auto____16348.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16351))
{return cljs.core.not.call(null,x__6743__auto____16348.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16351;
}
} else
{return and__3546__auto____16350;
}
} else
{return and__3546__auto____16349;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16348);
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
var inner_wrapper__16375 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16376 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16375));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16376),1)))
{return inner_wrapper__16375.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16375));
} else
{return children__16376;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16381__16382 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16383 = cljs.core.nth.call(null,vec__16381__16382,0,null);
var table_level__16384 = cljs.core.nth.call(null,vec__16381__16382,1,null);
var ___16385 = cljs.core.nthnext.call(null,vec__16381__16382,2);
var wrapper__16387 = domina.create_wrapper.call(null,table_level__16384);

domina.set_wrapper_html_BANG_.call(null,wrapper__16387,content);
return domina.extract_wrapper_dom.call(null,wrapper__16387,table_level__16384);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16398 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16400 = x__6743__auto____16398;

if(cljs.core.truth_(and__3546__auto____16400))
{var and__3546__auto____16401 = x__6743__auto____16398.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16401))
{var and__3546__auto____16404 = x__6743__auto____16398.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16404))
{return cljs.core.not.call(null,x__6743__auto____16398.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16404;
}
} else
{return and__3546__auto____16401;
}
} else
{return and__3546__auto____16400;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16398);
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
if(cljs.core.truth_((function (){var x__6743__auto____16407 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16409 = x__6743__auto____16407;

if(cljs.core.truth_(and__3546__auto____16409))
{var and__3546__auto____16411 = x__6743__auto____16407.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16411))
{var and__3546__auto____16413 = x__6743__auto____16407.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16413))
{return cljs.core.not.call(null,x__6743__auto____16407.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16413;
}
} else
{return and__3546__auto____16411;
}
} else
{return and__3546__auto____16409;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16407);
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
var G__16544 = null;
var G__16544__16545 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16544__16546 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16544 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16544__16545.call(this,nodelist,n);
case  3 :
return G__16544__16546.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16544;
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
var G__16548 = null;
var G__16548__16549 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16548__16550 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16548 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16548__16549.call(this,nodelist,n);
case  3 :
return G__16548__16550.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16548;
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
var G__16552 = null;
var G__16552__16553 = (function (coll,n){
return coll.item(n);
});
var G__16552__16554 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16552 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16552__16553.call(this,coll,n);
case  3 :
return G__16552__16554.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16552;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
