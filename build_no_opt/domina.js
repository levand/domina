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
if(cljs.core.truth_((function (){var and__3546__auto____15878 = content;

if(cljs.core.truth_(and__3546__auto____15878))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15878;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15881 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15881))
{return or__3548__auto____15881;
} else
{var or__3548__auto____15885 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15885))
{return or__3548__auto____15885;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15892 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15892))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15892;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15896 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15896))
{return or__3548__auto____15896;
} else
{var or__3548__auto____15899 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15899))
{return or__3548__auto____15899;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15919 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15919))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15919;
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
if(cljs.core.truth_((void 0 === domina.t15930)))
{
/**
* @constructor
*/
domina.t15930 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15930.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15930");
});
domina.t15930.prototype.domina$DomContent$ = true;
domina.t15930.prototype.domina$DomContent$nodes = (function (_){
var this__15939 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15939.class_name)));
});
domina.t15930.prototype.domina$DomContent$single_node = (function (_){
var this__15941 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15941.class_name)));
});
domina.t15930.prototype.cljs$core$IMeta$ = true;
domina.t15930.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15944 = this;
return this__15944.__meta;
});
domina.t15930.prototype.cljs$core$IWithMeta$ = true;
domina.t15930.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15948 = this;
return (new domina.t15930(this__15948.class_name,this__15948.by_class,__meta));
});
domina.t15930;
} else
{}
return (new domina.t15930(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15958_SHARP_){
return p1__15958_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15962_SHARP_,p2__15963_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15962_SHARP_,p2__15963_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15968_SHARP_,p2__15966_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15966_SHARP_,p1__15968_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15973_SHARP_,p2__15972_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15972_SHARP_,p1__15973_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15981_SHARP_,p2__15979_SHARP_){
return goog.dom.replaceNode.call(null,p2__15979_SHARP_,p1__15981_SHARP_);
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
var s__16013 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16013))))
{return s__16013;
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
var G__16017__16018 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16017__16018))
{var n__16020 = cljs.core.first.call(null,G__16017__16018);
var G__16017__16021 = G__16017__16018;

while(true){
goog.style.setStyle.call(null,n__16020,cljs.core.name.call(null,name),value);
var temp__3698__auto____16022 = cljs.core.next.call(null,G__16017__16021);

if(cljs.core.truth_(temp__3698__auto____16022))
{var G__16017__16023 = temp__3698__auto____16022;

{
var G__16027 = cljs.core.first.call(null,G__16017__16023);
var G__16028 = G__16017__16023;
n__16020 = G__16027;
G__16017__16021 = G__16028;
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
var G__16032__16034 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16032__16034))
{var n__16036 = cljs.core.first.call(null,G__16032__16034);
var G__16032__16037 = G__16032__16034;

while(true){
n__16036.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16041 = cljs.core.next.call(null,G__16032__16037);

if(cljs.core.truth_(temp__3698__auto____16041))
{var G__16032__16042 = temp__3698__auto____16041;

{
var G__16043 = cljs.core.first.call(null,G__16032__16042);
var G__16044 = G__16032__16042;
n__16036 = G__16043;
G__16032__16037 = G__16044;
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
var vec__16046__16047 = pair.split(/\s*:\s*/);
var k__16048 = cljs.core.nth.call(null,vec__16046__16047,0,null);
var v__16049 = cljs.core.nth.call(null,vec__16046__16047,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16050 = k__16048;

if(cljs.core.truth_(and__3546__auto____16050))
{return v__16049;
} else
{return and__3546__auto____16050;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16048.toLowerCase()),v__16049);
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
var node__16062 = domina.single_node.call(null,content);
var attrs__16063 = node__16062.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16057_SHARP_){
var attr__16064 = attrs__16063.item(p1__16057_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16064.nodeName.toLowerCase())],[attr__16064.nodeValue]);
}),cljs.core.range.call(null,attrs__16063.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16069__16072 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16069__16072))
{var G__16074__16076 = cljs.core.first.call(null,G__16069__16072);
var vec__16075__16077 = G__16074__16076;
var name__16080 = cljs.core.nth.call(null,vec__16075__16077,0,null);
var value__16081 = cljs.core.nth.call(null,vec__16075__16077,1,null);
var G__16069__16082 = G__16069__16072;

var G__16074__16083 = G__16074__16076;
var G__16069__16084 = G__16069__16082;

while(true){
var vec__16085__16086 = G__16074__16083;
var name__16087 = cljs.core.nth.call(null,vec__16085__16086,0,null);
var value__16088 = cljs.core.nth.call(null,vec__16085__16086,1,null);
var G__16069__16089 = G__16069__16084;

domina.set_style_BANG_.call(null,content,name__16087,value__16088);
var temp__3698__auto____16090 = cljs.core.next.call(null,G__16069__16089);

if(cljs.core.truth_(temp__3698__auto____16090))
{var G__16069__16091 = temp__3698__auto____16090;

{
var G__16095 = cljs.core.first.call(null,G__16069__16091);
var G__16096 = G__16069__16091;
G__16074__16083 = G__16095;
G__16069__16084 = G__16096;
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
var G__16099__16100 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16099__16100))
{var G__16103__16105 = cljs.core.first.call(null,G__16099__16100);
var vec__16104__16106 = G__16103__16105;
var name__16107 = cljs.core.nth.call(null,vec__16104__16106,0,null);
var value__16109 = cljs.core.nth.call(null,vec__16104__16106,1,null);
var G__16099__16110 = G__16099__16100;

var G__16103__16119 = G__16103__16105;
var G__16099__16120 = G__16099__16110;

while(true){
var vec__16121__16123 = G__16103__16119;
var name__16124 = cljs.core.nth.call(null,vec__16121__16123,0,null);
var value__16125 = cljs.core.nth.call(null,vec__16121__16123,1,null);
var G__16099__16126 = G__16099__16120;

domina.set_attr_BANG_.call(null,content,name__16124,value__16125);
var temp__3698__auto____16127 = cljs.core.next.call(null,G__16099__16126);

if(cljs.core.truth_(temp__3698__auto____16127))
{var G__16099__16128 = temp__3698__auto____16127;

{
var G__16140 = cljs.core.first.call(null,G__16099__16128);
var G__16141 = G__16099__16128;
G__16103__16119 = G__16140;
G__16099__16120 = G__16141;
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
var G__16145__16148 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16145__16148))
{var node__16151 = cljs.core.first.call(null,G__16145__16148);
var G__16145__16152 = G__16145__16148;

while(true){
goog.dom.classes.add.call(null,node__16151,class$);
var temp__3698__auto____16154 = cljs.core.next.call(null,G__16145__16152);

if(cljs.core.truth_(temp__3698__auto____16154))
{var G__16145__16156 = temp__3698__auto____16154;

{
var G__16157 = cljs.core.first.call(null,G__16145__16156);
var G__16159 = G__16145__16156;
node__16151 = G__16157;
G__16145__16152 = G__16159;
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
var G__16165__16167 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16165__16167))
{var node__16170 = cljs.core.first.call(null,G__16165__16167);
var G__16165__16172 = G__16165__16167;

while(true){
goog.dom.classes.remove.call(null,node__16170,class$);
var temp__3698__auto____16174 = cljs.core.next.call(null,G__16165__16172);

if(cljs.core.truth_(temp__3698__auto____16174))
{var G__16165__16175 = temp__3698__auto____16174;

{
var G__16178 = cljs.core.first.call(null,G__16165__16175);
var G__16179 = G__16165__16175;
node__16170 = G__16178;
G__16165__16172 = G__16179;
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
var text__16192 = (function (content){
return text.call(null,content,true);
});
var text__16193 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16192.call(this,content);
case  2 :
return text__16193.call(this,content,normalize);
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
var G__16197__16199 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16197__16199))
{var node__16206 = cljs.core.first.call(null,G__16197__16199);
var G__16197__16207 = G__16197__16199;

while(true){
goog.dom.setTextContent.call(null,node__16206,value);
var temp__3698__auto____16211 = cljs.core.next.call(null,G__16197__16207);

if(cljs.core.truth_(temp__3698__auto____16211))
{var G__16197__16215 = temp__3698__auto____16211;

{
var G__16226 = cljs.core.first.call(null,G__16197__16215);
var G__16227 = G__16197__16215;
node__16206 = G__16226;
G__16197__16207 = G__16227;
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
var G__16229__16230 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16229__16230))
{var node__16231 = cljs.core.first.call(null,G__16229__16230);
var G__16229__16232 = G__16229__16230;

while(true){
goog.dom.forms.setValue.call(null,node__16231,value);
var temp__3698__auto____16233 = cljs.core.next.call(null,G__16229__16232);

if(cljs.core.truth_(temp__3698__auto____16233))
{var G__16229__16234 = temp__3698__auto____16233;

{
var G__16239 = cljs.core.first.call(null,G__16229__16234);
var G__16240 = G__16229__16234;
node__16231 = G__16239;
G__16229__16232 = G__16240;
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
var G__16266__16267 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16266__16267))
{var node__16268 = cljs.core.first.call(null,G__16266__16267);
var G__16266__16269 = G__16266__16267;

while(true){
node__16268.innerHTML = value;
var temp__3698__auto____16270 = cljs.core.next.call(null,G__16266__16269);

if(cljs.core.truth_(temp__3698__auto____16270))
{var G__16266__16271 = temp__3698__auto____16270;

{
var G__16274 = cljs.core.first.call(null,G__16266__16271);
var G__16275 = G__16266__16271;
node__16268 = G__16274;
G__16266__16269 = G__16275;
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
var parents__16276 = domina.nodes.call(null,parent_content);
var children__16277 = domina.nodes.call(null,child_content);
var first_child__16289 = (function (){var frag__16278 = document.createDocumentFragment();

var G__16279__16280 = cljs.core.seq.call(null,children__16277);

if(cljs.core.truth_(G__16279__16280))
{var child__16281 = cljs.core.first.call(null,G__16279__16280);
var G__16279__16282 = G__16279__16280;

while(true){
frag__16278.appendChild(child__16281);
var temp__3698__auto____16285 = cljs.core.next.call(null,G__16279__16282);

if(cljs.core.truth_(temp__3698__auto____16285))
{var G__16279__16286 = temp__3698__auto____16285;

{
var G__16295 = cljs.core.first.call(null,G__16279__16286);
var G__16296 = G__16279__16286;
child__16281 = G__16295;
G__16279__16282 = G__16296;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16278;
})();
var other_children__16292 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16276) - 1),(function (){
return first_child__16289.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16276)))
{f.call(null,cljs.core.first.call(null,parents__16276),first_child__16289);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16263_SHARP_,p2__16264_SHARP_){
return f.call(null,p1__16263_SHARP_,p2__16264_SHARP_);
}),cljs.core.rest.call(null,parents__16276),other_children__16292));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16305 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16306 = (function (nl,n){
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
return lazy_nodelist__16305.call(this,nl);
case  2 :
return lazy_nodelist__16306.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6751__auto____16309 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16310 = x__6751__auto____16309;

if(cljs.core.truth_(and__3546__auto____16310))
{var and__3546__auto____16312 = x__6751__auto____16309.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16312))
{var and__3546__auto____16315 = x__6751__auto____16309.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16315))
{return cljs.core.not.call(null,x__6751__auto____16309.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16315;
}
} else
{return and__3546__auto____16312;
}
} else
{return and__3546__auto____16310;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16309);
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
var inner_wrapper__16340 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16341 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16340));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16341),1)))
{return inner_wrapper__16340.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16340));
} else
{return children__16341;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16345__16346 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16347 = cljs.core.nth.call(null,vec__16345__16346,0,null);
var table_level__16348 = cljs.core.nth.call(null,vec__16345__16346,1,null);
var ___16350 = cljs.core.nthnext.call(null,vec__16345__16346,2);
var wrapper__16351 = domina.create_wrapper.call(null,table_level__16348);

domina.set_wrapper_html_BANG_.call(null,wrapper__16351,content);
return domina.extract_wrapper_dom.call(null,wrapper__16351,table_level__16348);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6751__auto____16358 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16360 = x__6751__auto____16358;

if(cljs.core.truth_(and__3546__auto____16360))
{var and__3546__auto____16362 = x__6751__auto____16358.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16362))
{var and__3546__auto____16363 = x__6751__auto____16358.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16363))
{return cljs.core.not.call(null,x__6751__auto____16358.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16363;
}
} else
{return and__3546__auto____16362;
}
} else
{return and__3546__auto____16360;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16358);
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
if(cljs.core.truth_((function (){var x__6751__auto____16369 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16370 = x__6751__auto____16369;

if(cljs.core.truth_(and__3546__auto____16370))
{var and__3546__auto____16371 = x__6751__auto____16369.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16371))
{var and__3546__auto____16399 = x__6751__auto____16369.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16399))
{return cljs.core.not.call(null,x__6751__auto____16369.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16399;
}
} else
{return and__3546__auto____16371;
}
} else
{return and__3546__auto____16370;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6751__auto____16369);
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
var G__16400 = null;
var G__16400__16401 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16400__16402 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16400 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16400__16401.call(this,nodelist,n);
case  3 :
return G__16400__16402.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16400;
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
var G__16404 = null;
var G__16404__16405 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16404__16406 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16404 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16404__16405.call(this,nodelist,n);
case  3 :
return G__16404__16406.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16404;
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
var G__16408 = null;
var G__16408__16409 = (function (coll,n){
return coll.item(n);
});
var G__16408__16410 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16408 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16408__16409.call(this,coll,n);
case  3 :
return G__16408__16410.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16408;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
