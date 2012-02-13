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
if(cljs.core.truth_((function (){var and__3546__auto____15701 = content;

if(cljs.core.truth_(and__3546__auto____15701))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15701;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15702 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15702))
{return or__3548__auto____15702;
} else
{var or__3548__auto____15703 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15703))
{return or__3548__auto____15703;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15704 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15704))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15704;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15705 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15705))
{return or__3548__auto____15705;
} else
{var or__3548__auto____15706 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15706))
{return or__3548__auto____15706;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15716 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15716))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15716;
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
if(cljs.core.truth_((void 0 === domina.t15720)))
{
/**
* @constructor
*/
domina.t15720 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15720.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15720");
});
domina.t15720.prototype.domina$DomContent$ = true;
domina.t15720.prototype.domina$DomContent$nodes = (function (_){
var this__15729 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15729.class_name)));
});
domina.t15720.prototype.domina$DomContent$single_node = (function (_){
var this__15731 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15731.class_name)));
});
domina.t15720.prototype.cljs$core$IMeta$ = true;
domina.t15720.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15732 = this;
return this__15732.__meta;
});
domina.t15720.prototype.cljs$core$IWithMeta$ = true;
domina.t15720.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15733 = this;
return (new domina.t15720(this__15733.class_name,this__15733.by_class,__meta));
});
domina.t15720;
} else
{}
return (new domina.t15720(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15739_SHARP_){
return p1__15739_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15750_SHARP_,p2__15751_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15750_SHARP_,p2__15751_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15753_SHARP_,p2__15752_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15752_SHARP_,p1__15753_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15757_SHARP_,p2__15756_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15756_SHARP_,p1__15757_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15761_SHARP_,p2__15760_SHARP_){
return goog.dom.replaceNode.call(null,p2__15760_SHARP_,p1__15761_SHARP_);
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
var s__15779 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15779))))
{return s__15779;
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
var G__15790__15791 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15790__15791))
{var n__15794 = cljs.core.first.call(null,G__15790__15791);
var G__15790__15795 = G__15790__15791;

while(true){
goog.style.setStyle.call(null,n__15794,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15797 = cljs.core.next.call(null,G__15790__15795);

if(cljs.core.truth_(temp__3698__auto____15797))
{var G__15790__15798 = temp__3698__auto____15797;

{
var G__15804 = cljs.core.first.call(null,G__15790__15798);
var G__15805 = G__15790__15798;
n__15794 = G__15804;
G__15790__15795 = G__15805;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15808){
var content = cljs.core.first(arglist__15808);
var name = cljs.core.first(cljs.core.next(arglist__15808));
var value = cljs.core.rest(cljs.core.next(arglist__15808));
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
var G__15812__15813 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15812__15813))
{var n__15814 = cljs.core.first.call(null,G__15812__15813);
var G__15812__15815 = G__15812__15813;

while(true){
n__15814.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15818 = cljs.core.next.call(null,G__15812__15815);

if(cljs.core.truth_(temp__3698__auto____15818))
{var G__15812__15819 = temp__3698__auto____15818;

{
var G__15824 = cljs.core.first.call(null,G__15812__15819);
var G__15825 = G__15812__15819;
n__15814 = G__15824;
G__15812__15815 = G__15825;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15827){
var content = cljs.core.first(arglist__15827);
var name = cljs.core.first(cljs.core.next(arglist__15827));
var value = cljs.core.rest(cljs.core.next(arglist__15827));
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
var vec__15831__15832 = pair.split(/\s*:\s*/);
var k__15833 = cljs.core.nth.call(null,vec__15831__15832,0,null);
var v__15834 = cljs.core.nth.call(null,vec__15831__15832,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15835 = k__15833;

if(cljs.core.truth_(and__3546__auto____15835))
{return v__15834;
} else
{return and__3546__auto____15835;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15833.toLowerCase()),v__15834);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__15843 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__15843)))
{return domina.parse_style_attributes.call(null,style__15843);
} else
{if(cljs.core.truth_(style__15843.cssText))
{return domina.parse_style_attributes.call(null,style__15843.cssText);
} else
{return null;
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__15850 = domina.single_node.call(null,content);
var attrs__15851 = node__15850.attributes;

return cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15839_SHARP_){
var attr__15852 = attrs__15851.item(p1__15839_SHARP_);
var value__15853 = attr__15852.nodeValue;

if(cljs.core.truth_((function (){var and__3546__auto____15856 = cljs.core.not_EQ_.call(null,null,value__15853);

if(cljs.core.truth_(and__3546__auto____15856))
{return cljs.core.not_EQ_.call(null,"",value__15853);
} else
{return and__3546__auto____15856;
}
})()))
{return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15852.nodeName.toLowerCase())],[attr__15852.nodeValue]);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__15851.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15857__15858 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15857__15858))
{var G__15860__15862 = cljs.core.first.call(null,G__15857__15858);
var vec__15861__15863 = G__15860__15862;
var name__15864 = cljs.core.nth.call(null,vec__15861__15863,0,null);
var value__15865 = cljs.core.nth.call(null,vec__15861__15863,1,null);
var G__15857__15866 = G__15857__15858;

var G__15860__15867 = G__15860__15862;
var G__15857__15868 = G__15857__15866;

while(true){
var vec__15870__15872 = G__15860__15867;
var name__15873 = cljs.core.nth.call(null,vec__15870__15872,0,null);
var value__15874 = cljs.core.nth.call(null,vec__15870__15872,1,null);
var G__15857__15876 = G__15857__15868;

domina.set_style_BANG_.call(null,content,name__15873,value__15874);
var temp__3698__auto____15879 = cljs.core.next.call(null,G__15857__15876);

if(cljs.core.truth_(temp__3698__auto____15879))
{var G__15857__15880 = temp__3698__auto____15879;

{
var G__15886 = cljs.core.first.call(null,G__15857__15880);
var G__15887 = G__15857__15880;
G__15860__15867 = G__15886;
G__15857__15868 = G__15887;
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
var G__15890__15891 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15890__15891))
{var G__15893__15896 = cljs.core.first.call(null,G__15890__15891);
var vec__15895__15897 = G__15893__15896;
var name__15898 = cljs.core.nth.call(null,vec__15895__15897,0,null);
var value__15899 = cljs.core.nth.call(null,vec__15895__15897,1,null);
var G__15890__15900 = G__15890__15891;

var G__15893__15901 = G__15893__15896;
var G__15890__15902 = G__15890__15900;

while(true){
var vec__15903__15905 = G__15893__15901;
var name__15907 = cljs.core.nth.call(null,vec__15903__15905,0,null);
var value__15908 = cljs.core.nth.call(null,vec__15903__15905,1,null);
var G__15890__15909 = G__15890__15902;

domina.set_attr_BANG_.call(null,content,name__15907,value__15908);
var temp__3698__auto____15921 = cljs.core.next.call(null,G__15890__15909);

if(cljs.core.truth_(temp__3698__auto____15921))
{var G__15890__15922 = temp__3698__auto____15921;

{
var G__15929 = cljs.core.first.call(null,G__15890__15922);
var G__15930 = G__15890__15922;
G__15893__15901 = G__15929;
G__15890__15902 = G__15930;
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
var G__15934__15950 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15934__15950))
{var node__15951 = cljs.core.first.call(null,G__15934__15950);
var G__15934__15952 = G__15934__15950;

while(true){
goog.dom.classes.add.call(null,node__15951,class$);
var temp__3698__auto____15979 = cljs.core.next.call(null,G__15934__15952);

if(cljs.core.truth_(temp__3698__auto____15979))
{var G__15934__15981 = temp__3698__auto____15979;

{
var G__15985 = cljs.core.first.call(null,G__15934__15981);
var G__15986 = G__15934__15981;
node__15951 = G__15985;
G__15934__15952 = G__15986;
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
var G__15988__15991 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15988__15991))
{var node__15993 = cljs.core.first.call(null,G__15988__15991);
var G__15988__15994 = G__15988__15991;

while(true){
goog.dom.classes.remove.call(null,node__15993,class$);
var temp__3698__auto____15995 = cljs.core.next.call(null,G__15988__15994);

if(cljs.core.truth_(temp__3698__auto____15995))
{var G__15988__15997 = temp__3698__auto____15995;

{
var G__15999 = cljs.core.first.call(null,G__15988__15997);
var G__16000 = G__15988__15997;
node__15993 = G__15999;
G__15988__15994 = G__16000;
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
var text__16003 = (function (content){
return text.call(null,content,true);
});
var text__16004 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16003.call(this,content);
case  2 :
return text__16004.call(this,content,normalize);
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
var G__16006__16008 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16006__16008))
{var node__16009 = cljs.core.first.call(null,G__16006__16008);
var G__16006__16010 = G__16006__16008;

while(true){
goog.dom.setTextContent.call(null,node__16009,value);
var temp__3698__auto____16012 = cljs.core.next.call(null,G__16006__16010);

if(cljs.core.truth_(temp__3698__auto____16012))
{var G__16006__16013 = temp__3698__auto____16012;

{
var G__16014 = cljs.core.first.call(null,G__16006__16013);
var G__16015 = G__16006__16013;
node__16009 = G__16014;
G__16006__16010 = G__16015;
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
var G__16018__16019 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16018__16019))
{var node__16020 = cljs.core.first.call(null,G__16018__16019);
var G__16018__16021 = G__16018__16019;

while(true){
goog.dom.forms.setValue.call(null,node__16020,value);
var temp__3698__auto____16022 = cljs.core.next.call(null,G__16018__16021);

if(cljs.core.truth_(temp__3698__auto____16022))
{var G__16018__16023 = temp__3698__auto____16022;

{
var G__16026 = cljs.core.first.call(null,G__16018__16023);
var G__16027 = G__16018__16023;
node__16020 = G__16026;
G__16018__16021 = G__16027;
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
var G__16059__16070 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16059__16070))
{var node__16075 = cljs.core.first.call(null,G__16059__16070);
var G__16059__16076 = G__16059__16070;

while(true){
node__16075.innerHTML = value;
var temp__3698__auto____16082 = cljs.core.next.call(null,G__16059__16076);

if(cljs.core.truth_(temp__3698__auto____16082))
{var G__16059__16083 = temp__3698__auto____16082;

{
var G__16087 = cljs.core.first.call(null,G__16059__16083);
var G__16088 = G__16059__16083;
node__16075 = G__16087;
G__16059__16076 = G__16088;
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
var parents__16089 = domina.nodes.call(null,parent_content);
var children__16090 = domina.nodes.call(null,child_content);
var first_child__16110 = (function (){var frag__16100 = document.createDocumentFragment();

var G__16101__16102 = cljs.core.seq.call(null,children__16090);

if(cljs.core.truth_(G__16101__16102))
{var child__16103 = cljs.core.first.call(null,G__16101__16102);
var G__16101__16104 = G__16101__16102;

while(true){
frag__16100.appendChild(child__16103);
var temp__3698__auto____16105 = cljs.core.next.call(null,G__16101__16104);

if(cljs.core.truth_(temp__3698__auto____16105))
{var G__16101__16106 = temp__3698__auto____16105;

{
var G__16134 = cljs.core.first.call(null,G__16101__16106);
var G__16135 = G__16101__16106;
child__16103 = G__16134;
G__16101__16104 = G__16135;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16100;
})();
var other_children__16111 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16089) - 1),(function (){
return first_child__16110.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16089)))
{f.call(null,cljs.core.first.call(null,parents__16089),first_child__16110);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16057_SHARP_,p2__16058_SHARP_){
return f.call(null,p1__16057_SHARP_,p2__16058_SHARP_);
}),cljs.core.rest.call(null,parents__16089),other_children__16111));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16187 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16188 = (function (nl,n){
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
return lazy_nl_via_item__16187.call(this,nl);
case  2 :
return lazy_nl_via_item__16188.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16202 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16203 = (function (nl,n){
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
return lazy_nl_via_array_ref__16202.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16203.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6767__auto____16208 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16209 = x__6767__auto____16208;

if(cljs.core.truth_(and__3546__auto____16209))
{var and__3546__auto____16210 = x__6767__auto____16208.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16210))
{var and__3546__auto____16211 = x__6767__auto____16208.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16211))
{return cljs.core.not.call(null,x__6767__auto____16208.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16211;
}
} else
{return and__3546__auto____16210;
}
} else
{return and__3546__auto____16209;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16208);
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
var inner_wrapper__16213 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16214 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16213));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16214),1)))
{return inner_wrapper__16213.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16213));
} else
{return children__16214;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16217__16218 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16219 = cljs.core.nth.call(null,vec__16217__16218,0,null);
var table_level__16220 = cljs.core.nth.call(null,vec__16217__16218,1,null);
var ___16221 = cljs.core.nthnext.call(null,vec__16217__16218,2);
var wrapper__16222 = domina.create_wrapper.call(null,table_level__16220);

domina.set_wrapper_html_BANG_.call(null,wrapper__16222,content);
return domina.extract_wrapper_dom.call(null,wrapper__16222,table_level__16220);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6767__auto____16240 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16241 = x__6767__auto____16240;

if(cljs.core.truth_(and__3546__auto____16241))
{var and__3546__auto____16243 = x__6767__auto____16240.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16243))
{var and__3546__auto____16244 = x__6767__auto____16240.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16244))
{return cljs.core.not.call(null,x__6767__auto____16240.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16244;
}
} else
{return and__3546__auto____16243;
}
} else
{return and__3546__auto____16241;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16240);
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
if(cljs.core.truth_((function (){var x__6767__auto____16263 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16264 = x__6767__auto____16263;

if(cljs.core.truth_(and__3546__auto____16264))
{var and__3546__auto____16265 = x__6767__auto____16263.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16265))
{var and__3546__auto____16266 = x__6767__auto____16263.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16266))
{return cljs.core.not.call(null,x__6767__auto____16263.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16266;
}
} else
{return and__3546__auto____16265;
}
} else
{return and__3546__auto____16264;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16263);
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
var G__16282 = null;
var G__16282__16283 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16282__16284 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16282 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16282__16283.call(this,nodelist,n);
case  3 :
return G__16282__16284.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16282;
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
var G__16294 = null;
var G__16294__16296 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16294__16297 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16294 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16294__16296.call(this,nodelist,n);
case  3 :
return G__16294__16297.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16294;
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
var G__16302 = null;
var G__16302__16303 = (function (coll,n){
return coll.item(n);
});
var G__16302__16304 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16302 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16302__16303.call(this,coll,n);
case  3 :
return G__16302__16304.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16302;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
