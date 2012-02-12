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
if(cljs.core.truth_((function (){var and__3546__auto____15812 = content;

if(cljs.core.truth_(and__3546__auto____15812))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15812;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15814 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15814))
{return or__3548__auto____15814;
} else
{var or__3548__auto____15815 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15815))
{return or__3548__auto____15815;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15818 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15818))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15818;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15819 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15819))
{return or__3548__auto____15819;
} else
{var or__3548__auto____15822 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15822))
{return or__3548__auto____15822;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15834 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15834))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15834;
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
if(cljs.core.truth_((void 0 === domina.t15844)))
{
/**
* @constructor
*/
domina.t15844 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15844.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15844");
});
domina.t15844.prototype.domina$DomContent$ = true;
domina.t15844.prototype.domina$DomContent$nodes = (function (_){
var this__15848 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15848.class_name)));
});
domina.t15844.prototype.domina$DomContent$single_node = (function (_){
var this__15849 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15849.class_name)));
});
domina.t15844.prototype.cljs$core$IMeta$ = true;
domina.t15844.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15851 = this;
return this__15851.__meta;
});
domina.t15844.prototype.cljs$core$IWithMeta$ = true;
domina.t15844.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15852 = this;
return (new domina.t15844(this__15852.class_name,this__15852.by_class,__meta));
});
domina.t15844;
} else
{}
return (new domina.t15844(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15859_SHARP_){
return p1__15859_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15940_SHARP_,p2__15942_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15940_SHARP_,p2__15942_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15958_SHARP_,p2__15955_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15955_SHARP_,p1__15958_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15971_SHARP_,p2__15970_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15970_SHARP_,p1__15971_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15976_SHARP_,p2__15975_SHARP_){
return goog.dom.replaceNode.call(null,p2__15975_SHARP_,p1__15976_SHARP_);
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
var s__16015 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16015))))
{return s__16015;
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
var G__16024__16025 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16024__16025))
{var n__16027 = cljs.core.first.call(null,G__16024__16025);
var G__16024__16031 = G__16024__16025;

while(true){
goog.style.setStyle.call(null,n__16027,cljs.core.name.call(null,name),value);
var temp__3698__auto____16032 = cljs.core.next.call(null,G__16024__16031);

if(cljs.core.truth_(temp__3698__auto____16032))
{var G__16024__16033 = temp__3698__auto____16032;

{
var G__16034 = cljs.core.first.call(null,G__16024__16033);
var G__16035 = G__16024__16033;
n__16027 = G__16034;
G__16024__16031 = G__16035;
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
var G__16044__16046 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16044__16046))
{var n__16049 = cljs.core.first.call(null,G__16044__16046);
var G__16044__16050 = G__16044__16046;

while(true){
n__16049.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16069 = cljs.core.next.call(null,G__16044__16050);

if(cljs.core.truth_(temp__3698__auto____16069))
{var G__16044__16073 = temp__3698__auto____16069;

{
var G__16082 = cljs.core.first.call(null,G__16044__16073);
var G__16083 = G__16044__16073;
n__16049 = G__16082;
G__16044__16050 = G__16083;
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
var vec__16088__16090 = pair.split(/\s*:\s*/);
var k__16091 = cljs.core.nth.call(null,vec__16088__16090,0,null);
var v__16093 = cljs.core.nth.call(null,vec__16088__16090,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16094 = k__16091;

if(cljs.core.truth_(and__3546__auto____16094))
{return v__16093;
} else
{return and__3546__auto____16094;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16091.toLowerCase()),v__16093);
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
var node__16113 = domina.single_node.call(null,content);
var attrs__16116 = node__16113.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16104_SHARP_){
var attr__16119 = attrs__16116.item(p1__16104_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16119.nodeName.toLowerCase())],[attr__16119.nodeValue]);
}),cljs.core.range.call(null,attrs__16116.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16131__16134 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16131__16134))
{var G__16136__16140 = cljs.core.first.call(null,G__16131__16134);
var vec__16138__16141 = G__16136__16140;
var name__16142 = cljs.core.nth.call(null,vec__16138__16141,0,null);
var value__16143 = cljs.core.nth.call(null,vec__16138__16141,1,null);
var G__16131__16144 = G__16131__16134;

var G__16136__16145 = G__16136__16140;
var G__16131__16146 = G__16131__16144;

while(true){
var vec__16147__16149 = G__16136__16145;
var name__16151 = cljs.core.nth.call(null,vec__16147__16149,0,null);
var value__16152 = cljs.core.nth.call(null,vec__16147__16149,1,null);
var G__16131__16153 = G__16131__16146;

domina.set_style_BANG_.call(null,content,name__16151,value__16152);
var temp__3698__auto____16156 = cljs.core.next.call(null,G__16131__16153);

if(cljs.core.truth_(temp__3698__auto____16156))
{var G__16131__16157 = temp__3698__auto____16156;

{
var G__16176 = cljs.core.first.call(null,G__16131__16157);
var G__16177 = G__16131__16157;
G__16136__16145 = G__16176;
G__16131__16146 = G__16177;
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
var G__16179__16180 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16179__16180))
{var G__16183__16225 = cljs.core.first.call(null,G__16179__16180);
var vec__16186__16226 = G__16183__16225;
var name__16228 = cljs.core.nth.call(null,vec__16186__16226,0,null);
var value__16229 = cljs.core.nth.call(null,vec__16186__16226,1,null);
var G__16179__16230 = G__16179__16180;

var G__16183__16231 = G__16183__16225;
var G__16179__16232 = G__16179__16230;

while(true){
var vec__16233__16234 = G__16183__16231;
var name__16235 = cljs.core.nth.call(null,vec__16233__16234,0,null);
var value__16236 = cljs.core.nth.call(null,vec__16233__16234,1,null);
var G__16179__16237 = G__16179__16232;

domina.set_attr_BANG_.call(null,content,name__16235,value__16236);
var temp__3698__auto____16241 = cljs.core.next.call(null,G__16179__16237);

if(cljs.core.truth_(temp__3698__auto____16241))
{var G__16179__16242 = temp__3698__auto____16241;

{
var G__16246 = cljs.core.first.call(null,G__16179__16242);
var G__16247 = G__16179__16242;
G__16183__16231 = G__16246;
G__16179__16232 = G__16247;
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
var G__16260__16261 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16260__16261))
{var node__16262 = cljs.core.first.call(null,G__16260__16261);
var G__16260__16263 = G__16260__16261;

while(true){
goog.dom.classes.add.call(null,node__16262,class$);
var temp__3698__auto____16264 = cljs.core.next.call(null,G__16260__16263);

if(cljs.core.truth_(temp__3698__auto____16264))
{var G__16260__16265 = temp__3698__auto____16264;

{
var G__16266 = cljs.core.first.call(null,G__16260__16265);
var G__16267 = G__16260__16265;
node__16262 = G__16266;
G__16260__16263 = G__16267;
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
var G__16269__16270 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16269__16270))
{var node__16272 = cljs.core.first.call(null,G__16269__16270);
var G__16269__16273 = G__16269__16270;

while(true){
goog.dom.classes.remove.call(null,node__16272,class$);
var temp__3698__auto____16275 = cljs.core.next.call(null,G__16269__16273);

if(cljs.core.truth_(temp__3698__auto____16275))
{var G__16269__16277 = temp__3698__auto____16275;

{
var G__16283 = cljs.core.first.call(null,G__16269__16277);
var G__16285 = G__16269__16277;
node__16272 = G__16283;
G__16269__16273 = G__16285;
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
var text__16290 = (function (content){
return text.call(null,content,true);
});
var text__16291 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16290.call(this,content);
case  2 :
return text__16291.call(this,content,normalize);
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
var G__16294__16295 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16294__16295))
{var node__16296 = cljs.core.first.call(null,G__16294__16295);
var G__16294__16297 = G__16294__16295;

while(true){
goog.dom.setTextContent.call(null,node__16296,value);
var temp__3698__auto____16298 = cljs.core.next.call(null,G__16294__16297);

if(cljs.core.truth_(temp__3698__auto____16298))
{var G__16294__16299 = temp__3698__auto____16298;

{
var G__16301 = cljs.core.first.call(null,G__16294__16299);
var G__16302 = G__16294__16299;
node__16296 = G__16301;
G__16294__16297 = G__16302;
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
var G__16303__16304 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16303__16304))
{var node__16305 = cljs.core.first.call(null,G__16303__16304);
var G__16303__16306 = G__16303__16304;

while(true){
goog.dom.forms.setValue.call(null,node__16305,value);
var temp__3698__auto____16314 = cljs.core.next.call(null,G__16303__16306);

if(cljs.core.truth_(temp__3698__auto____16314))
{var G__16303__16315 = temp__3698__auto____16314;

{
var G__16317 = cljs.core.first.call(null,G__16303__16315);
var G__16318 = G__16303__16315;
node__16305 = G__16317;
G__16303__16306 = G__16318;
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
var G__16324__16325 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16324__16325))
{var node__16326 = cljs.core.first.call(null,G__16324__16325);
var G__16324__16327 = G__16324__16325;

while(true){
node__16326.innerHTML = value;
var temp__3698__auto____16328 = cljs.core.next.call(null,G__16324__16327);

if(cljs.core.truth_(temp__3698__auto____16328))
{var G__16324__16330 = temp__3698__auto____16328;

{
var G__16336 = cljs.core.first.call(null,G__16324__16330);
var G__16337 = G__16324__16330;
node__16326 = G__16336;
G__16324__16327 = G__16337;
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
var parents__16338 = domina.nodes.call(null,parent_content);
var children__16339 = domina.nodes.call(null,child_content);
var first_child__16351 = (function (){var frag__16340 = document.createDocumentFragment();

var G__16341__16342 = cljs.core.seq.call(null,children__16339);

if(cljs.core.truth_(G__16341__16342))
{var child__16344 = cljs.core.first.call(null,G__16341__16342);
var G__16341__16346 = G__16341__16342;

while(true){
frag__16340.appendChild(child__16344);
var temp__3698__auto____16348 = cljs.core.next.call(null,G__16341__16346);

if(cljs.core.truth_(temp__3698__auto____16348))
{var G__16341__16350 = temp__3698__auto____16348;

{
var G__16357 = cljs.core.first.call(null,G__16341__16350);
var G__16358 = G__16341__16350;
child__16344 = G__16357;
G__16341__16346 = G__16358;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16340;
})();
var other_children__16352 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16338) - 1),(function (){
return first_child__16351.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16338)))
{f.call(null,cljs.core.first.call(null,parents__16338),first_child__16351);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16322_SHARP_,p2__16323_SHARP_){
return f.call(null,p1__16322_SHARP_,p2__16323_SHARP_);
}),cljs.core.rest.call(null,parents__16338),other_children__16352));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16359 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16360 = (function (nl,n){
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
return lazy_nodelist__16359.call(this,nl);
case  2 :
return lazy_nodelist__16360.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6767__auto____16362 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16363 = x__6767__auto____16362;

if(cljs.core.truth_(and__3546__auto____16363))
{var and__3546__auto____16364 = x__6767__auto____16362.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16364))
{var and__3546__auto____16365 = x__6767__auto____16362.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16365))
{return cljs.core.not.call(null,x__6767__auto____16362.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16365;
}
} else
{return and__3546__auto____16364;
}
} else
{return and__3546__auto____16363;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16362);
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
var inner_wrapper__16376 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16377 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16376));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16377),1)))
{return inner_wrapper__16376.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16376));
} else
{return children__16377;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16402__16403 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16404 = cljs.core.nth.call(null,vec__16402__16403,0,null);
var table_level__16405 = cljs.core.nth.call(null,vec__16402__16403,1,null);
var ___16406 = cljs.core.nthnext.call(null,vec__16402__16403,2);
var wrapper__16409 = domina.create_wrapper.call(null,table_level__16405);

domina.set_wrapper_html_BANG_.call(null,wrapper__16409,content);
return domina.extract_wrapper_dom.call(null,wrapper__16409,table_level__16405);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6767__auto____16415 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16416 = x__6767__auto____16415;

if(cljs.core.truth_(and__3546__auto____16416))
{var and__3546__auto____16417 = x__6767__auto____16415.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16417))
{var and__3546__auto____16418 = x__6767__auto____16415.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16418))
{return cljs.core.not.call(null,x__6767__auto____16415.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16418;
}
} else
{return and__3546__auto____16417;
}
} else
{return and__3546__auto____16416;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16415);
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
if(cljs.core.truth_((function (){var x__6767__auto____16420 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16421 = x__6767__auto____16420;

if(cljs.core.truth_(and__3546__auto____16421))
{var and__3546__auto____16423 = x__6767__auto____16420.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16423))
{var and__3546__auto____16424 = x__6767__auto____16420.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16424))
{return cljs.core.not.call(null,x__6767__auto____16420.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16424;
}
} else
{return and__3546__auto____16423;
}
} else
{return and__3546__auto____16421;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6767__auto____16420);
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
var G__16457 = null;
var G__16457__16458 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16457__16459 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16457 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16457__16458.call(this,nodelist,n);
case  3 :
return G__16457__16459.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16457;
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
var G__16502 = null;
var G__16502__16503 = (function (coll,n){
return coll.item(n);
});
var G__16502__16504 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16502 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16502__16503.call(this,coll,n);
case  3 :
return G__16502__16504.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16502;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
