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
if(cljs.core.truth_((function (){var and__3546__auto____15621 = content;

if(cljs.core.truth_(and__3546__auto____15621))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15621;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15622 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15622))
{return or__3548__auto____15622;
} else
{var or__3548__auto____15626 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15626))
{return or__3548__auto____15626;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15627 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15627))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15627;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15628 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15628))
{return or__3548__auto____15628;
} else
{var or__3548__auto____15629 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15629))
{return or__3548__auto____15629;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15660 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15660))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15660;
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
if(cljs.core.truth_((void 0 === domina.t15677)))
{
/**
* @constructor
*/
domina.t15677 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15677.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15677");
});
domina.t15677.prototype.domina$DomContent$ = true;
domina.t15677.prototype.domina$DomContent$nodes = (function (_){
var this__15682 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15682.class_name)));
});
domina.t15677.prototype.domina$DomContent$single_node = (function (_){
var this__15683 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15683.class_name)));
});
domina.t15677.prototype.cljs$core$IMeta$ = true;
domina.t15677.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15684 = this;
return this__15684.__meta;
});
domina.t15677.prototype.cljs$core$IWithMeta$ = true;
domina.t15677.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15685 = this;
return (new domina.t15677(this__15685.class_name,this__15685.by_class,__meta));
});
domina.t15677;
} else
{}
return (new domina.t15677(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15687_SHARP_){
return p1__15687_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15832_SHARP_,p2__15831_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15831_SHARP_,p1__15832_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15837_SHARP_,p2__15836_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15836_SHARP_,p1__15837_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15847_SHARP_,p2__15846_SHARP_){
return goog.dom.replaceNode.call(null,p2__15846_SHARP_,p1__15847_SHARP_);
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
var s__15873 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15873))))
{return s__15873;
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
var G__15880__15881 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15880__15881))
{var n__15883 = cljs.core.first.call(null,G__15880__15881);
var G__15880__15884 = G__15880__15881;

while(true){
goog.style.setStyle.call(null,n__15883,cljs.core.name.call(null,name),value);
var temp__3698__auto____15886 = cljs.core.next.call(null,G__15880__15884);

if(cljs.core.truth_(temp__3698__auto____15886))
{var G__15880__15887 = temp__3698__auto____15886;

{
var G__15890 = cljs.core.first.call(null,G__15880__15887);
var G__15891 = G__15880__15887;
n__15883 = G__15890;
G__15880__15884 = G__15891;
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
var G__15892__15893 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15892__15893))
{var n__15895 = cljs.core.first.call(null,G__15892__15893);
var G__15892__15896 = G__15892__15893;

while(true){
n__15895.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15904 = cljs.core.next.call(null,G__15892__15896);

if(cljs.core.truth_(temp__3698__auto____15904))
{var G__15892__15906 = temp__3698__auto____15904;

{
var G__15909 = cljs.core.first.call(null,G__15892__15906);
var G__15910 = G__15892__15906;
n__15895 = G__15909;
G__15892__15896 = G__15910;
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
var vec__15912__15914 = pair.split(/\s*:\s*/);
var k__15915 = cljs.core.nth.call(null,vec__15912__15914,0,null);
var v__15916 = cljs.core.nth.call(null,vec__15912__15914,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15917 = k__15915;

if(cljs.core.truth_(and__3546__auto____15917))
{return v__15916;
} else
{return and__3546__auto____15917;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15915.toLowerCase()),v__15916);
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
var node__15925 = domina.single_node.call(null,content);
var attrs__15926 = node__15925.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15921_SHARP_){
var attr__15928 = attrs__15926.item(p1__15921_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15928.nodeName.toLowerCase())],[attr__15928.nodeValue]);
}),cljs.core.range.call(null,attrs__15926.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15938__15939 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15938__15939))
{var G__15941__15943 = cljs.core.first.call(null,G__15938__15939);
var vec__15942__15944 = G__15941__15943;
var name__15945 = cljs.core.nth.call(null,vec__15942__15944,0,null);
var value__15946 = cljs.core.nth.call(null,vec__15942__15944,1,null);
var G__15938__15947 = G__15938__15939;

var G__15941__15948 = G__15941__15943;
var G__15938__15949 = G__15938__15947;

while(true){
var vec__15951__15952 = G__15941__15948;
var name__15954 = cljs.core.nth.call(null,vec__15951__15952,0,null);
var value__15955 = cljs.core.nth.call(null,vec__15951__15952,1,null);
var G__15938__15956 = G__15938__15949;

domina.set_style_BANG_.call(null,content,name__15954,value__15955);
var temp__3698__auto____15957 = cljs.core.next.call(null,G__15938__15956);

if(cljs.core.truth_(temp__3698__auto____15957))
{var G__15938__15958 = temp__3698__auto____15957;

{
var G__15960 = cljs.core.first.call(null,G__15938__15958);
var G__15961 = G__15938__15958;
G__15941__15948 = G__15960;
G__15938__15949 = G__15961;
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
var G__15962__15963 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15962__15963))
{var G__15966__15968 = cljs.core.first.call(null,G__15962__15963);
var vec__15967__15969 = G__15966__15968;
var name__15970 = cljs.core.nth.call(null,vec__15967__15969,0,null);
var value__15971 = cljs.core.nth.call(null,vec__15967__15969,1,null);
var G__15962__15972 = G__15962__15963;

var G__15966__15973 = G__15966__15968;
var G__15962__15974 = G__15962__15972;

while(true){
var vec__15975__15976 = G__15966__15973;
var name__15977 = cljs.core.nth.call(null,vec__15975__15976,0,null);
var value__15978 = cljs.core.nth.call(null,vec__15975__15976,1,null);
var G__15962__15979 = G__15962__15974;

domina.set_attr_BANG_.call(null,content,name__15977,value__15978);
var temp__3698__auto____15980 = cljs.core.next.call(null,G__15962__15979);

if(cljs.core.truth_(temp__3698__auto____15980))
{var G__15962__15981 = temp__3698__auto____15980;

{
var G__15983 = cljs.core.first.call(null,G__15962__15981);
var G__15984 = G__15962__15981;
G__15966__15973 = G__15983;
G__15962__15974 = G__15984;
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
var G__15988__15989 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15988__15989))
{var node__15991 = cljs.core.first.call(null,G__15988__15989);
var G__15988__15992 = G__15988__15989;

while(true){
goog.dom.classes.add.call(null,node__15991,class$);
var temp__3698__auto____15994 = cljs.core.next.call(null,G__15988__15992);

if(cljs.core.truth_(temp__3698__auto____15994))
{var G__15988__15995 = temp__3698__auto____15994;

{
var G__16001 = cljs.core.first.call(null,G__15988__15995);
var G__16002 = G__15988__15995;
node__15991 = G__16001;
G__15988__15992 = G__16002;
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
var G__16006__16007 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16006__16007))
{var node__16008 = cljs.core.first.call(null,G__16006__16007);
var G__16006__16009 = G__16006__16007;

while(true){
goog.dom.classes.remove.call(null,node__16008,class$);
var temp__3698__auto____16011 = cljs.core.next.call(null,G__16006__16009);

if(cljs.core.truth_(temp__3698__auto____16011))
{var G__16006__16112 = temp__3698__auto____16011;

{
var G__16121 = cljs.core.first.call(null,G__16006__16112);
var G__16122 = G__16006__16112;
node__16008 = G__16121;
G__16006__16009 = G__16122;
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
var text__16137 = (function (content){
return text.call(null,content,true);
});
var text__16138 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16137.call(this,content);
case  2 :
return text__16138.call(this,content,normalize);
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
var G__16141__16142 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16141__16142))
{var node__16144 = cljs.core.first.call(null,G__16141__16142);
var G__16141__16145 = G__16141__16142;

while(true){
goog.dom.setTextContent.call(null,node__16144,value);
var temp__3698__auto____16146 = cljs.core.next.call(null,G__16141__16145);

if(cljs.core.truth_(temp__3698__auto____16146))
{var G__16141__16147 = temp__3698__auto____16146;

{
var G__16153 = cljs.core.first.call(null,G__16141__16147);
var G__16154 = G__16141__16147;
node__16144 = G__16153;
G__16141__16145 = G__16154;
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
var G__16156__16157 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16156__16157))
{var node__16158 = cljs.core.first.call(null,G__16156__16157);
var G__16156__16159 = G__16156__16157;

while(true){
goog.dom.forms.setValue.call(null,node__16158,value);
var temp__3698__auto____16164 = cljs.core.next.call(null,G__16156__16159);

if(cljs.core.truth_(temp__3698__auto____16164))
{var G__16156__16168 = temp__3698__auto____16164;

{
var G__16196 = cljs.core.first.call(null,G__16156__16168);
var G__16197 = G__16156__16168;
node__16158 = G__16196;
G__16156__16159 = G__16197;
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
var G__16206__16209 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16206__16209))
{var node__16212 = cljs.core.first.call(null,G__16206__16209);
var G__16206__16213 = G__16206__16209;

while(true){
node__16212.innerHTML = value;
var temp__3698__auto____16219 = cljs.core.next.call(null,G__16206__16213);

if(cljs.core.truth_(temp__3698__auto____16219))
{var G__16206__16224 = temp__3698__auto____16219;

{
var G__16237 = cljs.core.first.call(null,G__16206__16224);
var G__16238 = G__16206__16224;
node__16212 = G__16237;
G__16206__16213 = G__16238;
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
var parents__16240 = domina.nodes.call(null,parent_content);
var children__16241 = domina.nodes.call(null,child_content);
var first_child__16261 = (function (){var frag__16244 = document.createDocumentFragment();

var G__16246__16248 = cljs.core.seq.call(null,children__16241);

if(cljs.core.truth_(G__16246__16248))
{var child__16249 = cljs.core.first.call(null,G__16246__16248);
var G__16246__16250 = G__16246__16248;

while(true){
frag__16244.appendChild(child__16249);
var temp__3698__auto____16254 = cljs.core.next.call(null,G__16246__16250);

if(cljs.core.truth_(temp__3698__auto____16254))
{var G__16246__16256 = temp__3698__auto____16254;

{
var G__16281 = cljs.core.first.call(null,G__16246__16256);
var G__16284 = G__16246__16256;
child__16249 = G__16281;
G__16246__16250 = G__16284;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16244;
})();
var other_children__16269 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16240) - 1),(function (){
return first_child__16261.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16240)))
{f.call(null,cljs.core.first.call(null,parents__16240),first_child__16261);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16202_SHARP_,p2__16205_SHARP_){
return f.call(null,p1__16202_SHARP_,p2__16205_SHARP_);
}),cljs.core.rest.call(null,parents__16240),other_children__16269));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16300 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16301 = (function (nl,n){
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
return lazy_nodelist__16300.call(this,nl);
case  2 :
return lazy_nodelist__16301.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6761__auto____16311 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16313 = x__6761__auto____16311;

if(cljs.core.truth_(and__3546__auto____16313))
{var and__3546__auto____16315 = x__6761__auto____16311.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16315))
{var and__3546__auto____16316 = x__6761__auto____16311.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16316))
{return cljs.core.not.call(null,x__6761__auto____16311.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16316;
}
} else
{return and__3546__auto____16315;
}
} else
{return and__3546__auto____16313;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6761__auto____16311);
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
var inner_wrapper__16330 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16331 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16330));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16331),1)))
{return inner_wrapper__16330.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16330));
} else
{return children__16331;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16338__16339 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16340 = cljs.core.nth.call(null,vec__16338__16339,0,null);
var table_level__16341 = cljs.core.nth.call(null,vec__16338__16339,1,null);
var ___16342 = cljs.core.nthnext.call(null,vec__16338__16339,2);
var wrapper__16343 = domina.create_wrapper.call(null,table_level__16341);

domina.set_wrapper_html_BANG_.call(null,wrapper__16343,content);
return domina.extract_wrapper_dom.call(null,wrapper__16343,table_level__16341);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6761__auto____16382 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16383 = x__6761__auto____16382;

if(cljs.core.truth_(and__3546__auto____16383))
{var and__3546__auto____16384 = x__6761__auto____16382.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16384))
{var and__3546__auto____16385 = x__6761__auto____16382.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16385))
{return cljs.core.not.call(null,x__6761__auto____16382.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16385;
}
} else
{return and__3546__auto____16384;
}
} else
{return and__3546__auto____16383;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6761__auto____16382);
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
if(cljs.core.truth_((function (){var x__6761__auto____16396 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16400 = x__6761__auto____16396;

if(cljs.core.truth_(and__3546__auto____16400))
{var and__3546__auto____16403 = x__6761__auto____16396.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16403))
{var and__3546__auto____16406 = x__6761__auto____16396.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16406))
{return cljs.core.not.call(null,x__6761__auto____16396.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16406;
}
} else
{return and__3546__auto____16403;
}
} else
{return and__3546__auto____16400;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6761__auto____16396);
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
var G__16432 = null;
var G__16432__16435 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16432__16436 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16432 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16432__16435.call(this,nodelist,n);
case  3 :
return G__16432__16436.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16432;
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
var G__16447 = null;
var G__16447__16448 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16447__16449 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16447 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16447__16448.call(this,nodelist,n);
case  3 :
return G__16447__16449.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16447;
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
var G__16457 = null;
var G__16457__16458 = (function (coll,n){
return coll.item(n);
});
var G__16457__16459 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16457 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16457__16458.call(this,coll,n);
case  3 :
return G__16457__16459.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16457;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
