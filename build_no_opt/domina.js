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
if(cljs.core.truth_((function (){var and__3546__auto____15607 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15607))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15607;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15615 = content;

if(cljs.core.truth_(and__3546__auto____15615))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15615;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15619 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15619))
{return or__3548__auto____15619;
} else
{var or__3548__auto____15621 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15621))
{return or__3548__auto____15621;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15625 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15625))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15625;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15626 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15626))
{return or__3548__auto____15626;
} else
{var or__3548__auto____15627 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15627))
{return or__3548__auto____15627;
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
if(cljs.core.truth_((void 0 === domina.t15634)))
{
/**
* @constructor
*/
domina.t15634 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15634.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15634");
});
domina.t15634.prototype.domina$DomContent$ = true;
domina.t15634.prototype.domina$DomContent$nodes = (function (_){
var this__15640 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15640.class_name));
});
domina.t15634.prototype.domina$DomContent$single_node = (function (_){
var this__15644 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15644.class_name));
});
domina.t15634.prototype.cljs$core$IMeta$ = true;
domina.t15634.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15668 = this;
return this__15668.__meta;
});
domina.t15634.prototype.cljs$core$IWithMeta$ = true;
domina.t15634.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15669 = this;
return (new domina.t15634(this__15669.class_name,this__15669.by_class,__meta));
});
domina.t15634;
} else
{}
return (new domina.t15634(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15676_SHARP_){
return p1__15676_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15684_SHARP_,p2__15685_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15684_SHARP_,p2__15685_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15694_SHARP_,p2__15693_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15693_SHARP_,p1__15694_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15699_SHARP_,p2__15698_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15698_SHARP_,p1__15699_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15719_SHARP_,p2__15718_SHARP_){
return goog.dom.replaceNode.call(null,p2__15718_SHARP_,p1__15719_SHARP_);
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
var s__15725 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15725))))
{return s__15725;
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
var G__15727__15730 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15727__15730))
{var n__15731 = cljs.core.first.call(null,G__15727__15730);
var G__15727__15732 = G__15727__15730;

while(true){
goog.style.setStyle.call(null,n__15731,cljs.core.name.call(null,name),value);
var temp__3698__auto____15734 = cljs.core.next.call(null,G__15727__15732);

if(cljs.core.truth_(temp__3698__auto____15734))
{var G__15727__15735 = temp__3698__auto____15734;

{
var G__15738 = cljs.core.first.call(null,G__15727__15735);
var G__15739 = G__15727__15735;
n__15731 = G__15738;
G__15727__15732 = G__15739;
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
var G__15743__15744 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15743__15744))
{var n__15745 = cljs.core.first.call(null,G__15743__15744);
var G__15743__15746 = G__15743__15744;

while(true){
n__15745.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15748 = cljs.core.next.call(null,G__15743__15746);

if(cljs.core.truth_(temp__3698__auto____15748))
{var G__15743__15750 = temp__3698__auto____15748;

{
var G__15751 = cljs.core.first.call(null,G__15743__15750);
var G__15752 = G__15743__15750;
n__15745 = G__15751;
G__15743__15746 = G__15752;
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
var vec__15756__15757 = pair.split(/\s*:\s*/);
var k__15759 = cljs.core.nth.call(null,vec__15756__15757,0,null);
var v__15760 = cljs.core.nth.call(null,vec__15756__15757,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15761 = k__15759;

if(cljs.core.truth_(and__3546__auto____15761))
{return v__15760;
} else
{return and__3546__auto____15761;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15759.toLowerCase()),v__15760);
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
var node__15789 = domina.single_node.call(null,content);
var attrs__15790 = node__15789.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15785_SHARP_){
var attr__15794 = attrs__15790.item(p1__15785_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15794.nodeName.toLowerCase())],[attr__15794.nodeValue]);
}),cljs.core.range.call(null,attrs__15790.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15796__15798 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15796__15798))
{var G__15803__15805 = cljs.core.first.call(null,G__15796__15798);
var vec__15804__15807 = G__15803__15805;
var name__15808 = cljs.core.nth.call(null,vec__15804__15807,0,null);
var value__15809 = cljs.core.nth.call(null,vec__15804__15807,1,null);
var G__15796__15811 = G__15796__15798;

var G__15803__15812 = G__15803__15805;
var G__15796__15813 = G__15796__15811;

while(true){
var vec__15814__15815 = G__15803__15812;
var name__15816 = cljs.core.nth.call(null,vec__15814__15815,0,null);
var value__15817 = cljs.core.nth.call(null,vec__15814__15815,1,null);
var G__15796__15818 = G__15796__15813;

domina.set_style_BANG_.call(null,content,name__15816,value__15817);
var temp__3698__auto____15822 = cljs.core.next.call(null,G__15796__15818);

if(cljs.core.truth_(temp__3698__auto____15822))
{var G__15796__15823 = temp__3698__auto____15822;

{
var G__15829 = cljs.core.first.call(null,G__15796__15823);
var G__15830 = G__15796__15823;
G__15803__15812 = G__15829;
G__15796__15813 = G__15830;
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
var G__15831__15834 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15831__15834))
{var G__15837__15839 = cljs.core.first.call(null,G__15831__15834);
var vec__15838__15840 = G__15837__15839;
var name__15841 = cljs.core.nth.call(null,vec__15838__15840,0,null);
var value__15842 = cljs.core.nth.call(null,vec__15838__15840,1,null);
var G__15831__15843 = G__15831__15834;

var G__15837__15844 = G__15837__15839;
var G__15831__15845 = G__15831__15843;

while(true){
var vec__15846__15847 = G__15837__15844;
var name__15848 = cljs.core.nth.call(null,vec__15846__15847,0,null);
var value__15849 = cljs.core.nth.call(null,vec__15846__15847,1,null);
var G__15831__15850 = G__15831__15845;

domina.set_attr_BANG_.call(null,content,name__15848,value__15849);
var temp__3698__auto____15851 = cljs.core.next.call(null,G__15831__15850);

if(cljs.core.truth_(temp__3698__auto____15851))
{var G__15831__15852 = temp__3698__auto____15851;

{
var G__15856 = cljs.core.first.call(null,G__15831__15852);
var G__15857 = G__15831__15852;
G__15837__15844 = G__15856;
G__15831__15845 = G__15857;
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
var G__15863__15864 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15863__15864))
{var node__15865 = cljs.core.first.call(null,G__15863__15864);
var G__15863__15866 = G__15863__15864;

while(true){
goog.dom.classes.add.call(null,node__15865,class$);
var temp__3698__auto____15868 = cljs.core.next.call(null,G__15863__15866);

if(cljs.core.truth_(temp__3698__auto____15868))
{var G__15863__15870 = temp__3698__auto____15868;

{
var G__15874 = cljs.core.first.call(null,G__15863__15870);
var G__15875 = G__15863__15870;
node__15865 = G__15874;
G__15863__15866 = G__15875;
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
var G__15896__15912 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15896__15912))
{var node__15913 = cljs.core.first.call(null,G__15896__15912);
var G__15896__15914 = G__15896__15912;

while(true){
goog.dom.classes.remove.call(null,node__15913,class$);
var temp__3698__auto____15915 = cljs.core.next.call(null,G__15896__15914);

if(cljs.core.truth_(temp__3698__auto____15915))
{var G__15896__15916 = temp__3698__auto____15915;

{
var G__15917 = cljs.core.first.call(null,G__15896__15916);
var G__15918 = G__15896__15916;
node__15913 = G__15917;
G__15896__15914 = G__15918;
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
var text__15924 = (function (content){
return text.call(null,content,true);
});
var text__15925 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15924.call(this,content);
case  2 :
return text__15925.call(this,content,normalize);
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
var G__15960__15961 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15960__15961))
{var node__15962 = cljs.core.first.call(null,G__15960__15961);
var G__15960__15963 = G__15960__15961;

while(true){
goog.dom.setTextContent.call(null,node__15962,value);
var temp__3698__auto____15964 = cljs.core.next.call(null,G__15960__15963);

if(cljs.core.truth_(temp__3698__auto____15964))
{var G__15960__15965 = temp__3698__auto____15964;

{
var G__15968 = cljs.core.first.call(null,G__15960__15965);
var G__15969 = G__15960__15965;
node__15962 = G__15968;
G__15960__15963 = G__15969;
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
var G__15977__15980 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15977__15980))
{var node__15981 = cljs.core.first.call(null,G__15977__15980);
var G__15977__15982 = G__15977__15980;

while(true){
goog.dom.forms.setValue.call(null,node__15981,value);
var temp__3698__auto____15984 = cljs.core.next.call(null,G__15977__15982);

if(cljs.core.truth_(temp__3698__auto____15984))
{var G__15977__15985 = temp__3698__auto____15984;

{
var G__15990 = cljs.core.first.call(null,G__15977__15985);
var G__15991 = G__15977__15985;
node__15981 = G__15990;
G__15977__15982 = G__15991;
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
var G__16015__16016 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16015__16016))
{var node__16017 = cljs.core.first.call(null,G__16015__16016);
var G__16015__16018 = G__16015__16016;

while(true){
node__16017.innerHTML = value;
var temp__3698__auto____16038 = cljs.core.next.call(null,G__16015__16018);

if(cljs.core.truth_(temp__3698__auto____16038))
{var G__16015__16041 = temp__3698__auto____16038;

{
var G__16042 = cljs.core.first.call(null,G__16015__16041);
var G__16044 = G__16015__16041;
node__16017 = G__16042;
G__16015__16018 = G__16044;
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
var parents__16045 = domina.nodes.call(null,parent_content);
var children__16046 = domina.nodes.call(null,child_content);
var first_child__16064 = (function (){var frag__16050 = document.createDocumentFragment();

var G__16051__16058 = cljs.core.seq.call(null,children__16046);

if(cljs.core.truth_(G__16051__16058))
{var child__16059 = cljs.core.first.call(null,G__16051__16058);
var G__16051__16060 = G__16051__16058;

while(true){
frag__16050.appendChild(child__16059);
var temp__3698__auto____16061 = cljs.core.next.call(null,G__16051__16060);

if(cljs.core.truth_(temp__3698__auto____16061))
{var G__16051__16062 = temp__3698__auto____16061;

{
var G__16082 = cljs.core.first.call(null,G__16051__16062);
var G__16083 = G__16051__16062;
child__16059 = G__16082;
G__16051__16060 = G__16083;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16050;
})();
var other_children__16071 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16045) - 1),(function (){
return first_child__16064.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16045)))
{f.call(null,cljs.core.first.call(null,parents__16045),first_child__16064);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16011_SHARP_,p2__16013_SHARP_){
return f.call(null,p1__16011_SHARP_,p2__16013_SHARP_);
}),cljs.core.rest.call(null,parents__16045),other_children__16071));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16101 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16102 = (function (nl,n){
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
return lazy_nodelist__16101.call(this,nl);
case  2 :
return lazy_nodelist__16102.call(this,nl,n);
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
var inner_wrapper__16129 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16130 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16129));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16130),1)))
{return inner_wrapper__16129.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16129));
} else
{return children__16130;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16135__16136 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16137 = cljs.core.nth.call(null,vec__16135__16136,0,null);
var table_level__16138 = cljs.core.nth.call(null,vec__16135__16136,1,null);
var ___16140 = cljs.core.nthnext.call(null,vec__16135__16136,2);
var wrapper__16141 = domina.create_wrapper.call(null,table_level__16138);

domina.set_wrapper_html_BANG_.call(null,wrapper__16141,content);
return domina.extract_wrapper_dom.call(null,wrapper__16141,table_level__16138);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16150 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16151 = x__445__auto____16150;

if(cljs.core.truth_(and__3546__auto____16151))
{var and__3546__auto____16152 = x__445__auto____16150.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16152))
{return cljs.core.not.call(null,x__445__auto____16150.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16152;
}
} else
{return and__3546__auto____16151;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16150);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__445__auto____16171 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16173 = x__445__auto____16171;

if(cljs.core.truth_(and__3546__auto____16173))
{var and__3546__auto____16175 = x__445__auto____16171.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16175))
{return cljs.core.not.call(null,x__445__auto____16171.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16175;
}
} else
{return and__3546__auto____16173;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__445__auto____16171);
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
var G__16219 = null;
var G__16219__16220 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16219__16221 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16219 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16219__16220.call(this,nodelist,n);
case  3 :
return G__16219__16221.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16219;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{alert.call(null,"extending StaticNodeList");
} else
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16246 = null;
var G__16246__16247 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16246__16248 = (function (nodelist,n,not_found){
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
return G__16246__16248.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16246;
})()
;
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16258 = null;
var G__16258__16259 = (function (coll,n){
return coll.item(n);
});
var G__16258__16260 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16258 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16258__16259.call(this,coll,n);
case  3 :
return G__16258__16260.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16258;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
