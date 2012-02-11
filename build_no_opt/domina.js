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
if(cljs.core.truth_((function (){var and__3546__auto____15846 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15846))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15846;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15852 = content;

if(cljs.core.truth_(and__3546__auto____15852))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15852;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15853 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15853))
{return or__3548__auto____15853;
} else
{var or__3548__auto____15855 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15855))
{return or__3548__auto____15855;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15860 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15860))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15860;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15861 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15861))
{return or__3548__auto____15861;
} else
{var or__3548__auto____15863 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15863))
{return or__3548__auto____15863;
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
if(cljs.core.truth_((void 0 === domina.t15876)))
{
/**
* @constructor
*/
domina.t15876 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15876.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15876");
});
domina.t15876.prototype.domina$DomContent$ = true;
domina.t15876.prototype.domina$DomContent$nodes = (function (_){
var this__15877 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15877.class_name));
});
domina.t15876.prototype.domina$DomContent$single_node = (function (_){
var this__15879 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15879.class_name));
});
domina.t15876.prototype.cljs$core$IMeta$ = true;
domina.t15876.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15880 = this;
return this__15880.__meta;
});
domina.t15876.prototype.cljs$core$IWithMeta$ = true;
domina.t15876.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15881 = this;
return (new domina.t15876(this__15881.class_name,this__15881.by_class,__meta));
});
domina.t15876;
} else
{}
return (new domina.t15876(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15891_SHARP_){
return p1__15891_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15978_SHARP_,p2__15979_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15978_SHARP_,p2__15979_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15992_SHARP_,p2__15991_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15991_SHARP_,p1__15992_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16000_SHARP_,p2__15999_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15999_SHARP_,p1__16000_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__16007_SHARP_,p2__16006_SHARP_){
return goog.dom.replaceNode.call(null,p2__16006_SHARP_,p1__16007_SHARP_);
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
var s__16039 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16039))))
{return s__16039;
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
var G__16048__16050 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16048__16050))
{var n__16051 = cljs.core.first.call(null,G__16048__16050);
var G__16048__16053 = G__16048__16050;

while(true){
goog.style.setStyle.call(null,n__16051,cljs.core.name.call(null,name),value);
var temp__3698__auto____16055 = cljs.core.next.call(null,G__16048__16053);

if(cljs.core.truth_(temp__3698__auto____16055))
{var G__16048__16057 = temp__3698__auto____16055;

{
var G__16063 = cljs.core.first.call(null,G__16048__16057);
var G__16065 = G__16048__16057;
n__16051 = G__16063;
G__16048__16053 = G__16065;
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
var G__16077__16080 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16077__16080))
{var n__16083 = cljs.core.first.call(null,G__16077__16080);
var G__16077__16084 = G__16077__16080;

while(true){
n__16083.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____16088 = cljs.core.next.call(null,G__16077__16084);

if(cljs.core.truth_(temp__3698__auto____16088))
{var G__16077__16089 = temp__3698__auto____16088;

{
var G__16130 = cljs.core.first.call(null,G__16077__16089);
var G__16132 = G__16077__16089;
n__16083 = G__16130;
G__16077__16084 = G__16132;
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
var vec__16140__16141 = pair.split(/\s*:\s*/);
var k__16142 = cljs.core.nth.call(null,vec__16140__16141,0,null);
var v__16143 = cljs.core.nth.call(null,vec__16140__16141,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16145 = k__16142;

if(cljs.core.truth_(and__3546__auto____16145))
{return v__16143;
} else
{return and__3546__auto____16145;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16142.toLowerCase()),v__16143);
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
var node__16164 = domina.single_node.call(null,content);
var attrs__16165 = node__16164.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16155_SHARP_){
var attr__16167 = attrs__16165.item(p1__16155_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16167.nodeName.toLowerCase())],[attr__16167.nodeValue]);
}),cljs.core.range.call(null,attrs__16165.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16175__16178 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16175__16178))
{var G__16181__16186 = cljs.core.first.call(null,G__16175__16178);
var vec__16184__16187 = G__16181__16186;
var name__16189 = cljs.core.nth.call(null,vec__16184__16187,0,null);
var value__16192 = cljs.core.nth.call(null,vec__16184__16187,1,null);
var G__16175__16193 = G__16175__16178;

var G__16181__16194 = G__16181__16186;
var G__16175__16195 = G__16175__16193;

while(true){
var vec__16196__16199 = G__16181__16194;
var name__16201 = cljs.core.nth.call(null,vec__16196__16199,0,null);
var value__16203 = cljs.core.nth.call(null,vec__16196__16199,1,null);
var G__16175__16205 = G__16175__16195;

domina.set_style_BANG_.call(null,content,name__16201,value__16203);
var temp__3698__auto____16210 = cljs.core.next.call(null,G__16175__16205);

if(cljs.core.truth_(temp__3698__auto____16210))
{var G__16175__16214 = temp__3698__auto____16210;

{
var G__16225 = cljs.core.first.call(null,G__16175__16214);
var G__16226 = G__16175__16214;
G__16181__16194 = G__16225;
G__16175__16195 = G__16226;
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
var G__16229__16230 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16229__16230))
{var G__16232__16234 = cljs.core.first.call(null,G__16229__16230);
var vec__16233__16235 = G__16232__16234;
var name__16236 = cljs.core.nth.call(null,vec__16233__16235,0,null);
var value__16237 = cljs.core.nth.call(null,vec__16233__16235,1,null);
var G__16229__16238 = G__16229__16230;

var G__16232__16239 = G__16232__16234;
var G__16229__16240 = G__16229__16238;

while(true){
var vec__16241__16242 = G__16232__16239;
var name__16243 = cljs.core.nth.call(null,vec__16241__16242,0,null);
var value__16244 = cljs.core.nth.call(null,vec__16241__16242,1,null);
var G__16229__16245 = G__16229__16240;

domina.set_attr_BANG_.call(null,content,name__16243,value__16244);
var temp__3698__auto____16246 = cljs.core.next.call(null,G__16229__16245);

if(cljs.core.truth_(temp__3698__auto____16246))
{var G__16229__16247 = temp__3698__auto____16246;

{
var G__16254 = cljs.core.first.call(null,G__16229__16247);
var G__16255 = G__16229__16247;
G__16232__16239 = G__16254;
G__16229__16240 = G__16255;
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
var G__16266__16268 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16266__16268))
{var node__16273 = cljs.core.first.call(null,G__16266__16268);
var G__16266__16274 = G__16266__16268;

while(true){
goog.dom.classes.add.call(null,node__16273,class$);
var temp__3698__auto____16275 = cljs.core.next.call(null,G__16266__16274);

if(cljs.core.truth_(temp__3698__auto____16275))
{var G__16266__16276 = temp__3698__auto____16275;

{
var G__16308 = cljs.core.first.call(null,G__16266__16276);
var G__16309 = G__16266__16276;
node__16273 = G__16308;
G__16266__16274 = G__16309;
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
{var G__16311__16318 = temp__3698__auto____16315;

{
var G__16319 = cljs.core.first.call(null,G__16311__16318);
var G__16320 = G__16311__16318;
node__16313 = G__16319;
G__16311__16314 = G__16320;
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
var text__16329 = (function (content){
return text.call(null,content,true);
});
var text__16330 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16329.call(this,content);
case  2 :
return text__16330.call(this,content,normalize);
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
var G__16340__16341 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16340__16341))
{var node__16344 = cljs.core.first.call(null,G__16340__16341);
var G__16340__16345 = G__16340__16341;

while(true){
goog.dom.setTextContent.call(null,node__16344,value);
var temp__3698__auto____16346 = cljs.core.next.call(null,G__16340__16345);

if(cljs.core.truth_(temp__3698__auto____16346))
{var G__16340__16347 = temp__3698__auto____16346;

{
var G__16355 = cljs.core.first.call(null,G__16340__16347);
var G__16356 = G__16340__16347;
node__16344 = G__16355;
G__16340__16345 = G__16356;
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
var G__16357__16360 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16357__16360))
{var node__16361 = cljs.core.first.call(null,G__16357__16360);
var G__16357__16362 = G__16357__16360;

while(true){
goog.dom.forms.setValue.call(null,node__16361,value);
var temp__3698__auto____16366 = cljs.core.next.call(null,G__16357__16362);

if(cljs.core.truth_(temp__3698__auto____16366))
{var G__16357__16368 = temp__3698__auto____16366;

{
var G__16371 = cljs.core.first.call(null,G__16357__16368);
var G__16372 = G__16357__16368;
node__16361 = G__16371;
G__16357__16362 = G__16372;
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
var G__16381__16382 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16381__16382))
{var node__16383 = cljs.core.first.call(null,G__16381__16382);
var G__16381__16384 = G__16381__16382;

while(true){
node__16383.innerHTML = value;
var temp__3698__auto____16385 = cljs.core.next.call(null,G__16381__16384);

if(cljs.core.truth_(temp__3698__auto____16385))
{var G__16381__16387 = temp__3698__auto____16385;

{
var G__16395 = cljs.core.first.call(null,G__16381__16387);
var G__16396 = G__16381__16387;
node__16383 = G__16395;
G__16381__16384 = G__16396;
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
var parents__16400 = domina.nodes.call(null,parent_content);
var children__16401 = domina.nodes.call(null,child_content);
var first_child__16415 = (function (){var frag__16402 = document.createDocumentFragment();

var G__16403__16404 = cljs.core.seq.call(null,children__16401);

if(cljs.core.truth_(G__16403__16404))
{var child__16408 = cljs.core.first.call(null,G__16403__16404);
var G__16403__16409 = G__16403__16404;

while(true){
frag__16402.appendChild(child__16408);
var temp__3698__auto____16410 = cljs.core.next.call(null,G__16403__16409);

if(cljs.core.truth_(temp__3698__auto____16410))
{var G__16403__16411 = temp__3698__auto____16410;

{
var G__16431 = cljs.core.first.call(null,G__16403__16411);
var G__16432 = G__16403__16411;
child__16408 = G__16431;
G__16403__16409 = G__16432;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16402;
})();
var other_children__16419 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16400) - 1),(function (){
return first_child__16415.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16400)))
{f.call(null,cljs.core.first.call(null,parents__16400),first_child__16415);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16377_SHARP_,p2__16378_SHARP_){
return f.call(null,p1__16377_SHARP_,p2__16378_SHARP_);
}),cljs.core.rest.call(null,parents__16400),other_children__16419));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16435 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16436 = (function (nl,n){
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
return lazy_nodelist__16435.call(this,nl);
case  2 :
return lazy_nodelist__16436.call(this,nl,n);
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
var inner_wrapper__16452 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16453 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16452));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16453),1)))
{return inner_wrapper__16452.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16452));
} else
{return children__16453;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16455__16457 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16458 = cljs.core.nth.call(null,vec__16455__16457,0,null);
var table_level__16459 = cljs.core.nth.call(null,vec__16455__16457,1,null);
var ___16460 = cljs.core.nthnext.call(null,vec__16455__16457,2);
var wrapper__16461 = domina.create_wrapper.call(null,table_level__16459);

domina.set_wrapper_html_BANG_.call(null,wrapper__16461,content);
return domina.extract_wrapper_dom.call(null,wrapper__16461,table_level__16459);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6703__auto____16463 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16465 = x__6703__auto____16463;

if(cljs.core.truth_(and__3546__auto____16465))
{var and__3546__auto____16466 = x__6703__auto____16463.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16466))
{var and__3546__auto____16467 = x__6703__auto____16463.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16467))
{return cljs.core.not.call(null,x__6703__auto____16463.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16467;
}
} else
{return and__3546__auto____16466;
}
} else
{return and__3546__auto____16465;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6703__auto____16463);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6703__auto____16468 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16470 = x__6703__auto____16468;

if(cljs.core.truth_(and__3546__auto____16470))
{var and__3546__auto____16474 = x__6703__auto____16468.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16474))
{var and__3546__auto____16477 = x__6703__auto____16468.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16477))
{return cljs.core.not.call(null,x__6703__auto____16468.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16477;
}
} else
{return and__3546__auto____16474;
}
} else
{return and__3546__auto____16470;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6703__auto____16468);
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
var G__16486 = null;
var G__16486__16487 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16486__16488 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16486 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16486__16487.call(this,nodelist,n);
case  3 :
return G__16486__16488.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16486;
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
var G__16531 = null;
var G__16531__16532 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16531__16533 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16531 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16531__16532.call(this,nodelist,n);
case  3 :
return G__16531__16533.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16531;
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
var G__16535 = null;
var G__16535__16536 = (function (coll,n){
return coll.item(n);
});
var G__16535__16537 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16535 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16535__16536.call(this,coll,n);
case  3 :
return G__16535__16537.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16535;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
