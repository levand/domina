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
if(cljs.core.truth_((function (){var and__3546__auto____15707 = content;

if(cljs.core.truth_(and__3546__auto____15707))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15707;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15709 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15709))
{return or__3548__auto____15709;
} else
{var or__3548__auto____15711 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15711))
{return or__3548__auto____15711;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15713 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15713))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15713;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15715 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15715))
{return or__3548__auto____15715;
} else
{var or__3548__auto____15716 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15716))
{return or__3548__auto____15716;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15720 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15720))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15720;
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
if(cljs.core.truth_((void 0 === domina.t15728)))
{
/**
* @constructor
*/
domina.t15728 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15728.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15728");
});
domina.t15728.prototype.domina$DomContent$ = true;
domina.t15728.prototype.domina$DomContent$nodes = (function (_){
var this__15734 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15734.class_name)));
});
domina.t15728.prototype.domina$DomContent$single_node = (function (_){
var this__15735 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15735.class_name)));
});
domina.t15728.prototype.cljs$core$IMeta$ = true;
domina.t15728.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15736 = this;
return this__15736.__meta;
});
domina.t15728.prototype.cljs$core$IWithMeta$ = true;
domina.t15728.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15737 = this;
return (new domina.t15728(this__15737.class_name,this__15737.by_class,__meta));
});
domina.t15728;
} else
{}
return (new domina.t15728(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15745_SHARP_){
return p1__15745_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15765_SHARP_,p2__15766_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15765_SHARP_,p2__15766_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15774_SHARP_,p2__15773_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15773_SHARP_,p1__15774_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15779_SHARP_,p2__15777_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15777_SHARP_,p1__15779_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15785_SHARP_,p2__15784_SHARP_){
return goog.dom.replaceNode.call(null,p2__15784_SHARP_,p1__15785_SHARP_);
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
var s__15797 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15797))))
{return s__15797;
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
var G__15798__15799 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15798__15799))
{var n__15800 = cljs.core.first.call(null,G__15798__15799);
var G__15798__15801 = G__15798__15799;

while(true){
goog.style.setStyle.call(null,n__15800,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15802 = cljs.core.next.call(null,G__15798__15801);

if(cljs.core.truth_(temp__3698__auto____15802))
{var G__15798__15803 = temp__3698__auto____15802;

{
var G__15805 = cljs.core.first.call(null,G__15798__15803);
var G__15806 = G__15798__15803;
n__15800 = G__15805;
G__15798__15801 = G__15806;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15807){
var content = cljs.core.first(arglist__15807);
var name = cljs.core.first(cljs.core.next(arglist__15807));
var value = cljs.core.rest(cljs.core.next(arglist__15807));
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
var G__15808__15809 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15808__15809))
{var n__15810 = cljs.core.first.call(null,G__15808__15809);
var G__15808__15812 = G__15808__15809;

while(true){
n__15810.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15819 = cljs.core.next.call(null,G__15808__15812);

if(cljs.core.truth_(temp__3698__auto____15819))
{var G__15808__15820 = temp__3698__auto____15819;

{
var G__15823 = cljs.core.first.call(null,G__15808__15820);
var G__15824 = G__15808__15820;
n__15810 = G__15823;
G__15808__15812 = G__15824;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15825){
var content = cljs.core.first(arglist__15825);
var name = cljs.core.first(cljs.core.next(arglist__15825));
var value = cljs.core.rest(cljs.core.next(arglist__15825));
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
var vec__15829__15830 = pair.split(/\s*:\s*/);
var k__15831 = cljs.core.nth.call(null,vec__15829__15830,0,null);
var v__15834 = cljs.core.nth.call(null,vec__15829__15830,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15836 = k__15831;

if(cljs.core.truth_(and__3546__auto____15836))
{return v__15834;
} else
{return and__3546__auto____15836;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15831.toLowerCase()),v__15834);
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
var node__15854 = domina.single_node.call(null,content);
var attrs__15855 = node__15854.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15841_SHARP_){
var attr__15857 = attrs__15855.item(p1__15841_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15857.nodeName.toLowerCase())],[attr__15857.nodeValue]);
}),cljs.core.range.call(null,attrs__15855.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15870__15873 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15870__15873))
{var G__15875__15877 = cljs.core.first.call(null,G__15870__15873);
var vec__15876__15878 = G__15875__15877;
var name__15879 = cljs.core.nth.call(null,vec__15876__15878,0,null);
var value__15880 = cljs.core.nth.call(null,vec__15876__15878,1,null);
var G__15870__15883 = G__15870__15873;

var G__15875__15885 = G__15875__15877;
var G__15870__15889 = G__15870__15883;

while(true){
var vec__15890__15891 = G__15875__15885;
var name__15892 = cljs.core.nth.call(null,vec__15890__15891,0,null);
var value__15893 = cljs.core.nth.call(null,vec__15890__15891,1,null);
var G__15870__15894 = G__15870__15889;

domina.set_style_BANG_.call(null,content,name__15892,value__15893);
var temp__3698__auto____15897 = cljs.core.next.call(null,G__15870__15894);

if(cljs.core.truth_(temp__3698__auto____15897))
{var G__15870__15898 = temp__3698__auto____15897;

{
var G__15902 = cljs.core.first.call(null,G__15870__15898);
var G__15903 = G__15870__15898;
G__15875__15885 = G__15902;
G__15870__15889 = G__15903;
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
var G__15907__15908 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15907__15908))
{var G__15910__15914 = cljs.core.first.call(null,G__15907__15908);
var vec__15911__15915 = G__15910__15914;
var name__15916 = cljs.core.nth.call(null,vec__15911__15915,0,null);
var value__15918 = cljs.core.nth.call(null,vec__15911__15915,1,null);
var G__15907__15919 = G__15907__15908;

var G__15910__15920 = G__15910__15914;
var G__15907__15921 = G__15907__15919;

while(true){
var vec__15929__15930 = G__15910__15920;
var name__15931 = cljs.core.nth.call(null,vec__15929__15930,0,null);
var value__15932 = cljs.core.nth.call(null,vec__15929__15930,1,null);
var G__15907__15933 = G__15907__15921;

domina.set_attr_BANG_.call(null,content,name__15931,value__15932);
var temp__3698__auto____15935 = cljs.core.next.call(null,G__15907__15933);

if(cljs.core.truth_(temp__3698__auto____15935))
{var G__15907__15937 = temp__3698__auto____15935;

{
var G__15939 = cljs.core.first.call(null,G__15907__15937);
var G__15940 = G__15907__15937;
G__15910__15920 = G__15939;
G__15907__15921 = G__15940;
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
var G__15942__15944 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15942__15944))
{var node__15945 = cljs.core.first.call(null,G__15942__15944);
var G__15942__15947 = G__15942__15944;

while(true){
goog.dom.classes.add.call(null,node__15945,class$);
var temp__3698__auto____15949 = cljs.core.next.call(null,G__15942__15947);

if(cljs.core.truth_(temp__3698__auto____15949))
{var G__15942__15951 = temp__3698__auto____15949;

{
var G__15953 = cljs.core.first.call(null,G__15942__15951);
var G__15954 = G__15942__15951;
node__15945 = G__15953;
G__15942__15947 = G__15954;
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
var G__15957__15959 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15957__15959))
{var node__15960 = cljs.core.first.call(null,G__15957__15959);
var G__15957__15961 = G__15957__15959;

while(true){
goog.dom.classes.remove.call(null,node__15960,class$);
var temp__3698__auto____15962 = cljs.core.next.call(null,G__15957__15961);

if(cljs.core.truth_(temp__3698__auto____15962))
{var G__15957__15963 = temp__3698__auto____15962;

{
var G__15969 = cljs.core.first.call(null,G__15957__15963);
var G__15971 = G__15957__15963;
node__15960 = G__15969;
G__15957__15961 = G__15971;
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
var text__15975 = (function (content){
return text.call(null,content,true);
});
var text__15976 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15975.call(this,content);
case  2 :
return text__15976.call(this,content,normalize);
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
var G__15985__15987 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15985__15987))
{var node__15990 = cljs.core.first.call(null,G__15985__15987);
var G__15985__15995 = G__15985__15987;

while(true){
goog.dom.setTextContent.call(null,node__15990,value);
var temp__3698__auto____15996 = cljs.core.next.call(null,G__15985__15995);

if(cljs.core.truth_(temp__3698__auto____15996))
{var G__15985__15997 = temp__3698__auto____15996;

{
var G__16002 = cljs.core.first.call(null,G__15985__15997);
var G__16003 = G__15985__15997;
node__15990 = G__16002;
G__15985__15995 = G__16003;
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
var G__16008__16010 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16008__16010))
{var node__16011 = cljs.core.first.call(null,G__16008__16010);
var G__16008__16012 = G__16008__16010;

while(true){
goog.dom.forms.setValue.call(null,node__16011,value);
var temp__3698__auto____16015 = cljs.core.next.call(null,G__16008__16012);

if(cljs.core.truth_(temp__3698__auto____16015))
{var G__16008__16017 = temp__3698__auto____16015;

{
var G__16030 = cljs.core.first.call(null,G__16008__16017);
var G__16031 = G__16008__16017;
node__16011 = G__16030;
G__16008__16012 = G__16031;
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
var G__16041__16048 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16041__16048))
{var node__16050 = cljs.core.first.call(null,G__16041__16048);
var G__16041__16051 = G__16041__16048;

while(true){
node__16050.innerHTML = value;
var temp__3698__auto____16054 = cljs.core.next.call(null,G__16041__16051);

if(cljs.core.truth_(temp__3698__auto____16054))
{var G__16041__16057 = temp__3698__auto____16054;

{
var G__16075 = cljs.core.first.call(null,G__16041__16057);
var G__16077 = G__16041__16057;
node__16050 = G__16075;
G__16041__16051 = G__16077;
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
var parents__16085 = domina.nodes.call(null,parent_content);
var children__16086 = domina.nodes.call(null,child_content);
var first_child__16097 = (function (){var frag__16088 = document.createDocumentFragment();

var G__16089__16091 = cljs.core.seq.call(null,children__16086);

if(cljs.core.truth_(G__16089__16091))
{var child__16093 = cljs.core.first.call(null,G__16089__16091);
var G__16089__16094 = G__16089__16091;

while(true){
frag__16088.appendChild(child__16093);
var temp__3698__auto____16095 = cljs.core.next.call(null,G__16089__16094);

if(cljs.core.truth_(temp__3698__auto____16095))
{var G__16089__16096 = temp__3698__auto____16095;

{
var G__16106 = cljs.core.first.call(null,G__16089__16096);
var G__16107 = G__16089__16096;
child__16093 = G__16106;
G__16089__16094 = G__16107;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16088;
})();
var other_children__16098 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16085) - 1),(function (){
return first_child__16097.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16085)))
{f.call(null,cljs.core.first.call(null,parents__16085),first_child__16097);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16038_SHARP_,p2__16039_SHARP_){
return f.call(null,p1__16038_SHARP_,p2__16039_SHARP_);
}),cljs.core.rest.call(null,parents__16085),other_children__16098));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__16110 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__16111 = (function (nl,n){
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
return lazy_nl_via_item__16110.call(this,nl);
case  2 :
return lazy_nl_via_item__16111.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__16126 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__16127 = (function (nl,n){
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
return lazy_nl_via_array_ref__16126.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__16127.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16139 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16142 = x__6743__auto____16139;

if(cljs.core.truth_(and__3546__auto____16142))
{var and__3546__auto____16143 = x__6743__auto____16139.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16143))
{var and__3546__auto____16144 = x__6743__auto____16139.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16144))
{return cljs.core.not.call(null,x__6743__auto____16139.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16144;
}
} else
{return and__3546__auto____16143;
}
} else
{return and__3546__auto____16142;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16139);
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
var inner_wrapper__16190 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16192 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16190));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16192),1)))
{return inner_wrapper__16190.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16190));
} else
{return children__16192;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16212__16213 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16214 = cljs.core.nth.call(null,vec__16212__16213,0,null);
var table_level__16215 = cljs.core.nth.call(null,vec__16212__16213,1,null);
var ___16218 = cljs.core.nthnext.call(null,vec__16212__16213,2);
var wrapper__16219 = domina.create_wrapper.call(null,table_level__16215);

domina.set_wrapper_html_BANG_.call(null,wrapper__16219,content);
return domina.extract_wrapper_dom.call(null,wrapper__16219,table_level__16215);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16227 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16228 = x__6743__auto____16227;

if(cljs.core.truth_(and__3546__auto____16228))
{var and__3546__auto____16230 = x__6743__auto____16227.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16230))
{var and__3546__auto____16231 = x__6743__auto____16227.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16231))
{return cljs.core.not.call(null,x__6743__auto____16227.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16231;
}
} else
{return and__3546__auto____16230;
}
} else
{return and__3546__auto____16228;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16227);
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
if(cljs.core.truth_((function (){var x__6743__auto____16232 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16233 = x__6743__auto____16232;

if(cljs.core.truth_(and__3546__auto____16233))
{var and__3546__auto____16234 = x__6743__auto____16232.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16234))
{var and__3546__auto____16235 = x__6743__auto____16232.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16235))
{return cljs.core.not.call(null,x__6743__auto____16232.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16235;
}
} else
{return and__3546__auto____16234;
}
} else
{return and__3546__auto____16233;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16232);
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
var G__16246 = null;
var G__16246__16247 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16246__16249 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16246 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16246__16247.call(this,nodelist,n);
case  3 :
return G__16246__16249.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16246;
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
var G__16272 = null;
var G__16272__16273 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16272__16274 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16272 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16272__16273.call(this,nodelist,n);
case  3 :
return G__16272__16274.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16272;
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
var G__16285 = null;
var G__16285__16286 = (function (coll,n){
return coll.item(n);
});
var G__16285__16287 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16285 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16285__16286.call(this,coll,n);
case  3 :
return G__16285__16287.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16285;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
