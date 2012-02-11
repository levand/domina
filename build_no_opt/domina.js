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
if(cljs.core.truth_((function (){var and__3546__auto____15859 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15859))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15859;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15865 = content;

if(cljs.core.truth_(and__3546__auto____15865))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15865;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15870 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15870))
{return or__3548__auto____15870;
} else
{var or__3548__auto____15873 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15873))
{return or__3548__auto____15873;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15879 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15879))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15879;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15880 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15880))
{return or__3548__auto____15880;
} else
{var or__3548__auto____15881 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15881))
{return or__3548__auto____15881;
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
if(cljs.core.truth_((void 0 === domina.t15886)))
{
/**
* @constructor
*/
domina.t15886 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15886.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15886");
});
domina.t15886.prototype.domina$DomContent$ = true;
domina.t15886.prototype.domina$DomContent$nodes = (function (_){
var this__15888 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15888.class_name));
});
domina.t15886.prototype.domina$DomContent$single_node = (function (_){
var this__15891 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15891.class_name));
});
domina.t15886.prototype.cljs$core$IMeta$ = true;
domina.t15886.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15895 = this;
return this__15895.__meta;
});
domina.t15886.prototype.cljs$core$IWithMeta$ = true;
domina.t15886.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15903 = this;
return (new domina.t15886(this__15903.class_name,this__15903.by_class,__meta));
});
domina.t15886;
} else
{}
return (new domina.t15886(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15929_SHARP_){
return p1__15929_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15952_SHARP_,p2__15956_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15952_SHARP_,p2__15956_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15971_SHARP_,p2__15970_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15970_SHARP_,p1__15971_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15976_SHARP_,p2__15975_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15975_SHARP_,p1__15976_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15986_SHARP_,p2__15985_SHARP_){
return goog.dom.replaceNode.call(null,p2__15985_SHARP_,p1__15986_SHARP_);
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
var s__16017 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16017))))
{return s__16017;
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
var G__16083__16084 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16083__16084))
{var n__16085 = cljs.core.first.call(null,G__16083__16084);
var G__16083__16086 = G__16083__16084;

while(true){
goog.style.setStyle.call(null,n__16085,cljs.core.name.call(null,name),value);
var temp__3698__auto____16088 = cljs.core.next.call(null,G__16083__16086);

if(cljs.core.truth_(temp__3698__auto____16088))
{var G__16083__16090 = temp__3698__auto____16088;

{
var G__16100 = cljs.core.first.call(null,G__16083__16090);
var G__16101 = G__16083__16090;
n__16085 = G__16100;
G__16083__16086 = G__16101;
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
var G__16104__16105 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16104__16105))
{var n__16106 = cljs.core.first.call(null,G__16104__16105);
var G__16104__16107 = G__16104__16105;

while(true){
n__16106.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16112 = cljs.core.next.call(null,G__16104__16107);

if(cljs.core.truth_(temp__3698__auto____16112))
{var G__16104__16115 = temp__3698__auto____16112;

{
var G__16126 = cljs.core.first.call(null,G__16104__16115);
var G__16127 = G__16104__16115;
n__16106 = G__16126;
G__16104__16107 = G__16127;
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
var vec__16133__16135 = pair.split(/\s*:\s*/);
var k__16136 = cljs.core.nth.call(null,vec__16133__16135,0,null);
var v__16138 = cljs.core.nth.call(null,vec__16133__16135,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16140 = k__16136;

if(cljs.core.truth_(and__3546__auto____16140))
{return v__16138;
} else
{return and__3546__auto____16140;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16136.toLowerCase()),v__16138);
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
var node__16154 = domina.single_node.call(null,content);
var attrs__16155 = node__16154.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16150_SHARP_){
var attr__16156 = attrs__16155.item(p1__16150_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16156.nodeName.toLowerCase())],[attr__16156.nodeValue]);
}),cljs.core.range.call(null,attrs__16155.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16176__16182 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16176__16182))
{var G__16188__16191 = cljs.core.first.call(null,G__16176__16182);
var vec__16189__16193 = G__16188__16191;
var name__16194 = cljs.core.nth.call(null,vec__16189__16193,0,null);
var value__16196 = cljs.core.nth.call(null,vec__16189__16193,1,null);
var G__16176__16197 = G__16176__16182;

var G__16188__16198 = G__16188__16191;
var G__16176__16199 = G__16176__16197;

while(true){
var vec__16200__16201 = G__16188__16198;
var name__16202 = cljs.core.nth.call(null,vec__16200__16201,0,null);
var value__16203 = cljs.core.nth.call(null,vec__16200__16201,1,null);
var G__16176__16204 = G__16176__16199;

domina.set_style_BANG_.call(null,content,name__16202,value__16203);
var temp__3698__auto____16207 = cljs.core.next.call(null,G__16176__16204);

if(cljs.core.truth_(temp__3698__auto____16207))
{var G__16176__16208 = temp__3698__auto____16207;

{
var G__16217 = cljs.core.first.call(null,G__16176__16208);
var G__16218 = G__16176__16208;
G__16188__16198 = G__16217;
G__16176__16199 = G__16218;
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
var G__16231__16234 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16231__16234))
{var G__16240__16243 = cljs.core.first.call(null,G__16231__16234);
var vec__16242__16245 = G__16240__16243;
var name__16246 = cljs.core.nth.call(null,vec__16242__16245,0,null);
var value__16248 = cljs.core.nth.call(null,vec__16242__16245,1,null);
var G__16231__16249 = G__16231__16234;

var G__16240__16250 = G__16240__16243;
var G__16231__16251 = G__16231__16249;

while(true){
var vec__16254__16255 = G__16240__16250;
var name__16256 = cljs.core.nth.call(null,vec__16254__16255,0,null);
var value__16257 = cljs.core.nth.call(null,vec__16254__16255,1,null);
var G__16231__16258 = G__16231__16251;

domina.set_attr_BANG_.call(null,content,name__16256,value__16257);
var temp__3698__auto____16259 = cljs.core.next.call(null,G__16231__16258);

if(cljs.core.truth_(temp__3698__auto____16259))
{var G__16231__16260 = temp__3698__auto____16259;

{
var G__16275 = cljs.core.first.call(null,G__16231__16260);
var G__16276 = G__16231__16260;
G__16240__16250 = G__16275;
G__16231__16251 = G__16276;
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
var G__16289__16291 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16289__16291))
{var node__16293 = cljs.core.first.call(null,G__16289__16291);
var G__16289__16294 = G__16289__16291;

while(true){
goog.dom.classes.add.call(null,node__16293,class$);
var temp__3698__auto____16295 = cljs.core.next.call(null,G__16289__16294);

if(cljs.core.truth_(temp__3698__auto____16295))
{var G__16289__16298 = temp__3698__auto____16295;

{
var G__16305 = cljs.core.first.call(null,G__16289__16298);
var G__16307 = G__16289__16298;
node__16293 = G__16305;
G__16289__16294 = G__16307;
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
var G__16311__16312 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16311__16312))
{var node__16313 = cljs.core.first.call(null,G__16311__16312);
var G__16311__16314 = G__16311__16312;

while(true){
goog.dom.classes.remove.call(null,node__16313,class$);
var temp__3698__auto____16315 = cljs.core.next.call(null,G__16311__16314);

if(cljs.core.truth_(temp__3698__auto____16315))
{var G__16311__16316 = temp__3698__auto____16315;

{
var G__16321 = cljs.core.first.call(null,G__16311__16316);
var G__16323 = G__16311__16316;
node__16313 = G__16321;
G__16311__16314 = G__16323;
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
var text__16330 = (function (content){
return text.call(null,content,true);
});
var text__16331 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16330.call(this,content);
case  2 :
return text__16331.call(this,content,normalize);
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
var G__16339__16340 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16339__16340))
{var node__16341 = cljs.core.first.call(null,G__16339__16340);
var G__16339__16342 = G__16339__16340;

while(true){
goog.dom.setTextContent.call(null,node__16341,value);
var temp__3698__auto____16343 = cljs.core.next.call(null,G__16339__16342);

if(cljs.core.truth_(temp__3698__auto____16343))
{var G__16339__16344 = temp__3698__auto____16343;

{
var G__16345 = cljs.core.first.call(null,G__16339__16344);
var G__16346 = G__16339__16344;
node__16341 = G__16345;
G__16339__16342 = G__16346;
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
var G__16354__16355 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16354__16355))
{var node__16356 = cljs.core.first.call(null,G__16354__16355);
var G__16354__16357 = G__16354__16355;

while(true){
goog.dom.forms.setValue.call(null,node__16356,value);
var temp__3698__auto____16358 = cljs.core.next.call(null,G__16354__16357);

if(cljs.core.truth_(temp__3698__auto____16358))
{var G__16354__16359 = temp__3698__auto____16358;

{
var G__16364 = cljs.core.first.call(null,G__16354__16359);
var G__16365 = G__16354__16359;
node__16356 = G__16364;
G__16354__16357 = G__16365;
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
var G__16397__16399 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16397__16399))
{var node__16400 = cljs.core.first.call(null,G__16397__16399);
var G__16397__16401 = G__16397__16399;

while(true){
node__16400.innerHTML = value;
var temp__3698__auto____16403 = cljs.core.next.call(null,G__16397__16401);

if(cljs.core.truth_(temp__3698__auto____16403))
{var G__16397__16405 = temp__3698__auto____16403;

{
var G__16406 = cljs.core.first.call(null,G__16397__16405);
var G__16407 = G__16397__16405;
node__16400 = G__16406;
G__16397__16401 = G__16407;
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
var parents__16411 = domina.nodes.call(null,parent_content);
var children__16413 = domina.nodes.call(null,child_content);
var first_child__16425 = (function (){var frag__16415 = document.createDocumentFragment();

var G__16416__16419 = cljs.core.seq.call(null,children__16413);

if(cljs.core.truth_(G__16416__16419))
{var child__16420 = cljs.core.first.call(null,G__16416__16419);
var G__16416__16421 = G__16416__16419;

while(true){
frag__16415.appendChild(child__16420);
var temp__3698__auto____16423 = cljs.core.next.call(null,G__16416__16421);

if(cljs.core.truth_(temp__3698__auto____16423))
{var G__16416__16424 = temp__3698__auto____16423;

{
var G__16436 = cljs.core.first.call(null,G__16416__16424);
var G__16437 = G__16416__16424;
child__16420 = G__16436;
G__16416__16421 = G__16437;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16415;
})();
var other_children__16430 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16411) - 1),(function (){
return first_child__16425.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16411)))
{f.call(null,cljs.core.first.call(null,parents__16411),first_child__16425);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16392_SHARP_,p2__16395_SHARP_){
return f.call(null,p1__16392_SHARP_,p2__16395_SHARP_);
}),cljs.core.rest.call(null,parents__16411),other_children__16430));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16450 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16451 = (function (nl,n){
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
return lazy_nodelist__16450.call(this,nl);
case  2 :
return lazy_nodelist__16451.call(this,nl,n);
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
var inner_wrapper__16465 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16467 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16465));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16467),1)))
{return inner_wrapper__16465.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16465));
} else
{return children__16467;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16468__16469 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16470 = cljs.core.nth.call(null,vec__16468__16469,0,null);
var table_level__16471 = cljs.core.nth.call(null,vec__16468__16469,1,null);
var ___16472 = cljs.core.nthnext.call(null,vec__16468__16469,2);
var wrapper__16473 = domina.create_wrapper.call(null,table_level__16471);

domina.set_wrapper_html_BANG_.call(null,wrapper__16473,content);
return domina.extract_wrapper_dom.call(null,wrapper__16473,table_level__16471);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16477 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16478 = x__6743__auto____16477;

if(cljs.core.truth_(and__3546__auto____16478))
{var and__3546__auto____16479 = x__6743__auto____16477.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16479))
{var and__3546__auto____16480 = x__6743__auto____16477.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16480))
{return cljs.core.not.call(null,x__6743__auto____16477.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16480;
}
} else
{return and__3546__auto____16479;
}
} else
{return and__3546__auto____16478;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16477);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16481 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16482 = x__6743__auto____16481;

if(cljs.core.truth_(and__3546__auto____16482))
{var and__3546__auto____16483 = x__6743__auto____16481.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16483))
{var and__3546__auto____16484 = x__6743__auto____16481.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16484))
{return cljs.core.not.call(null,x__6743__auto____16481.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16484;
}
} else
{return and__3546__auto____16483;
}
} else
{return and__3546__auto____16482;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16481);
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
var G__16505 = null;
var G__16505__16506 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16505__16507 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16505 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16505__16506.call(this,nodelist,n);
case  3 :
return G__16505__16507.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16505;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{alert('extending StaticNodeList');
StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__16515 = null;
var G__16515__16516 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16515__16517 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16515 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16515__16516.call(this,nodelist,n);
case  3 :
return G__16515__16517.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16515;
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
var G__16521 = null;
var G__16521__16522 = (function (coll,n){
return coll.item(n);
});
var G__16521__16523 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16521 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16521__16522.call(this,coll,n);
case  3 :
return G__16521__16523.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16521;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
