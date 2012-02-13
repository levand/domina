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
if(cljs.core.truth_((function (){var and__3546__auto____15410 = content;

if(cljs.core.truth_(and__3546__auto____15410))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15410;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15412 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15412))
{return or__3548__auto____15412;
} else
{var or__3548__auto____15413 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15413))
{return or__3548__auto____15413;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15415 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15415))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15415;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15419 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15419))
{return or__3548__auto____15419;
} else
{var or__3548__auto____15421 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15421))
{return or__3548__auto____15421;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15435 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15435))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15435;
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
if(cljs.core.truth_((void 0 === domina.t15446)))
{
/**
* @constructor
*/
domina.t15446 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15446.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15446");
});
domina.t15446.prototype.domina$DomContent$ = true;
domina.t15446.prototype.domina$DomContent$nodes = (function (_){
var this__15447 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15447.class_name)));
});
domina.t15446.prototype.domina$DomContent$single_node = (function (_){
var this__15448 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15448.class_name)));
});
domina.t15446.prototype.cljs$core$IMeta$ = true;
domina.t15446.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15449 = this;
return this__15449.__meta;
});
domina.t15446.prototype.cljs$core$IWithMeta$ = true;
domina.t15446.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15450 = this;
return (new domina.t15446(this__15450.class_name,this__15450.by_class,__meta));
});
domina.t15446;
} else
{}
return (new domina.t15446(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15458_SHARP_){
return p1__15458_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15470_SHARP_,p2__15473_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15470_SHARP_,p2__15473_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15487_SHARP_,p2__15486_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15486_SHARP_,p1__15487_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15493_SHARP_,p2__15492_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15492_SHARP_,p1__15493_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15499_SHARP_,p2__15498_SHARP_){
return goog.dom.replaceNode.call(null,p2__15498_SHARP_,p1__15499_SHARP_);
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
var s__15515 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15515))))
{return s__15515;
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
var G__15519__15520 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15519__15520))
{var n__15521 = cljs.core.first.call(null,G__15519__15520);
var G__15519__15524 = G__15519__15520;

while(true){
goog.style.setStyle.call(null,n__15521,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15526 = cljs.core.next.call(null,G__15519__15524);

if(cljs.core.truth_(temp__3698__auto____15526))
{var G__15519__15527 = temp__3698__auto____15526;

{
var G__15528 = cljs.core.first.call(null,G__15519__15527);
var G__15529 = G__15519__15527;
n__15521 = G__15528;
G__15519__15524 = G__15529;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15532){
var content = cljs.core.first(arglist__15532);
var name = cljs.core.first(cljs.core.next(arglist__15532));
var value = cljs.core.rest(cljs.core.next(arglist__15532));
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
var G__15536__15539 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15536__15539))
{var n__15540 = cljs.core.first.call(null,G__15536__15539);
var G__15536__15541 = G__15536__15539;

while(true){
n__15540.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____15542 = cljs.core.next.call(null,G__15536__15541);

if(cljs.core.truth_(temp__3698__auto____15542))
{var G__15536__15543 = temp__3698__auto____15542;

{
var G__15544 = cljs.core.first.call(null,G__15536__15543);
var G__15545 = G__15536__15543;
n__15540 = G__15544;
G__15536__15541 = G__15545;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15546){
var content = cljs.core.first(arglist__15546);
var name = cljs.core.first(cljs.core.next(arglist__15546));
var value = cljs.core.rest(cljs.core.next(arglist__15546));
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
var vec__15547__15548 = pair.split(/\s*:\s*/);
var k__15549 = cljs.core.nth.call(null,vec__15547__15548,0,null);
var v__15550 = cljs.core.nth.call(null,vec__15547__15548,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15551 = k__15549;

if(cljs.core.truth_(and__3546__auto____15551))
{return v__15550;
} else
{return and__3546__auto____15551;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15549.toLowerCase()),v__15550);
} else
{return acc;
}
}),cljs.core.ObjMap.fromObject([],{}),style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){
var style__15554 = domina.attr.call(null,content,"style");

if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,style__15554)))
{return domina.parse_style_attributes.call(null,style__15554);
} else
{if(cljs.core.truth_(style__15554.cssText))
{return domina.parse_style_attributes.call(null,style__15554.cssText);
} else
{throw (new Error("Could not find style string for object."));
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){
var node__15558 = domina.single_node.call(null,content);
var attrs__15559 = node__15558.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15552_SHARP_){
var attr__15563 = attrs__15559.item(p1__15552_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15563.nodeName.toLowerCase())],[attr__15563.nodeValue]);
}),cljs.core.range.call(null,attrs__15559.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15564__15565 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15564__15565))
{var G__15567__15569 = cljs.core.first.call(null,G__15564__15565);
var vec__15568__15570 = G__15567__15569;
var name__15571 = cljs.core.nth.call(null,vec__15568__15570,0,null);
var value__15572 = cljs.core.nth.call(null,vec__15568__15570,1,null);
var G__15564__15573 = G__15564__15565;

var G__15567__15574 = G__15567__15569;
var G__15564__15575 = G__15564__15573;

while(true){
var vec__15576__15577 = G__15567__15574;
var name__15578 = cljs.core.nth.call(null,vec__15576__15577,0,null);
var value__15579 = cljs.core.nth.call(null,vec__15576__15577,1,null);
var G__15564__15580 = G__15564__15575;

domina.set_style_BANG_.call(null,content,name__15578,value__15579);
var temp__3698__auto____15581 = cljs.core.next.call(null,G__15564__15580);

if(cljs.core.truth_(temp__3698__auto____15581))
{var G__15564__15582 = temp__3698__auto____15581;

{
var G__15583 = cljs.core.first.call(null,G__15564__15582);
var G__15584 = G__15564__15582;
G__15567__15574 = G__15583;
G__15564__15575 = G__15584;
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
var G__15597__15598 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15597__15598))
{var G__15602__15605 = cljs.core.first.call(null,G__15597__15598);
var vec__15603__15606 = G__15602__15605;
var name__15608 = cljs.core.nth.call(null,vec__15603__15606,0,null);
var value__15609 = cljs.core.nth.call(null,vec__15603__15606,1,null);
var G__15597__15610 = G__15597__15598;

var G__15602__15611 = G__15602__15605;
var G__15597__15612 = G__15597__15610;

while(true){
var vec__15613__15614 = G__15602__15611;
var name__15615 = cljs.core.nth.call(null,vec__15613__15614,0,null);
var value__15616 = cljs.core.nth.call(null,vec__15613__15614,1,null);
var G__15597__15617 = G__15597__15612;

domina.set_attr_BANG_.call(null,content,name__15615,value__15616);
var temp__3698__auto____15618 = cljs.core.next.call(null,G__15597__15617);

if(cljs.core.truth_(temp__3698__auto____15618))
{var G__15597__15619 = temp__3698__auto____15618;

{
var G__15620 = cljs.core.first.call(null,G__15597__15619);
var G__15621 = G__15597__15619;
G__15602__15611 = G__15620;
G__15597__15612 = G__15621;
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
var G__15622__15623 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15622__15623))
{var node__15624 = cljs.core.first.call(null,G__15622__15623);
var G__15622__15625 = G__15622__15623;

while(true){
goog.dom.classes.add.call(null,node__15624,class$);
var temp__3698__auto____15626 = cljs.core.next.call(null,G__15622__15625);

if(cljs.core.truth_(temp__3698__auto____15626))
{var G__15622__15627 = temp__3698__auto____15626;

{
var G__15632 = cljs.core.first.call(null,G__15622__15627);
var G__15633 = G__15622__15627;
node__15624 = G__15632;
G__15622__15625 = G__15633;
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
var G__15634__15635 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15634__15635))
{var node__15636 = cljs.core.first.call(null,G__15634__15635);
var G__15634__15637 = G__15634__15635;

while(true){
goog.dom.classes.remove.call(null,node__15636,class$);
var temp__3698__auto____15638 = cljs.core.next.call(null,G__15634__15637);

if(cljs.core.truth_(temp__3698__auto____15638))
{var G__15634__15639 = temp__3698__auto____15638;

{
var G__15644 = cljs.core.first.call(null,G__15634__15639);
var G__15645 = G__15634__15639;
node__15636 = G__15644;
G__15634__15637 = G__15645;
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
var text__15646 = (function (content){
return text.call(null,content,true);
});
var text__15647 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__15646.call(this,content);
case  2 :
return text__15647.call(this,content,normalize);
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
var G__15653__15654 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15653__15654))
{var node__15655 = cljs.core.first.call(null,G__15653__15654);
var G__15653__15656 = G__15653__15654;

while(true){
goog.dom.setTextContent.call(null,node__15655,value);
var temp__3698__auto____15657 = cljs.core.next.call(null,G__15653__15656);

if(cljs.core.truth_(temp__3698__auto____15657))
{var G__15653__15658 = temp__3698__auto____15657;

{
var G__15659 = cljs.core.first.call(null,G__15653__15658);
var G__15660 = G__15653__15658;
node__15655 = G__15659;
G__15653__15656 = G__15660;
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
var G__15663__15664 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15663__15664))
{var node__15665 = cljs.core.first.call(null,G__15663__15664);
var G__15663__15666 = G__15663__15664;

while(true){
goog.dom.forms.setValue.call(null,node__15665,value);
var temp__3698__auto____15667 = cljs.core.next.call(null,G__15663__15666);

if(cljs.core.truth_(temp__3698__auto____15667))
{var G__15663__15668 = temp__3698__auto____15667;

{
var G__15670 = cljs.core.first.call(null,G__15663__15668);
var G__15671 = G__15663__15668;
node__15665 = G__15670;
G__15663__15666 = G__15671;
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
var G__15677__15678 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15677__15678))
{var node__15680 = cljs.core.first.call(null,G__15677__15678);
var G__15677__15681 = G__15677__15678;

while(true){
node__15680.innerHTML = value;
var temp__3698__auto____15682 = cljs.core.next.call(null,G__15677__15681);

if(cljs.core.truth_(temp__3698__auto____15682))
{var G__15677__15683 = temp__3698__auto____15682;

{
var G__15687 = cljs.core.first.call(null,G__15677__15683);
var G__15688 = G__15677__15683;
node__15680 = G__15687;
G__15677__15681 = G__15688;
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
var parents__15689 = domina.nodes.call(null,parent_content);
var children__15690 = domina.nodes.call(null,child_content);
var first_child__15698 = (function (){var frag__15691 = document.createDocumentFragment();

var G__15692__15693 = cljs.core.seq.call(null,children__15690);

if(cljs.core.truth_(G__15692__15693))
{var child__15694 = cljs.core.first.call(null,G__15692__15693);
var G__15692__15695 = G__15692__15693;

while(true){
frag__15691.appendChild(child__15694);
var temp__3698__auto____15696 = cljs.core.next.call(null,G__15692__15695);

if(cljs.core.truth_(temp__3698__auto____15696))
{var G__15692__15697 = temp__3698__auto____15696;

{
var G__15700 = cljs.core.first.call(null,G__15692__15697);
var G__15701 = G__15692__15697;
child__15694 = G__15700;
G__15692__15695 = G__15701;
continue;
}
} else
{}
break;
}
} else
{}
return frag__15691;
})();
var other_children__15699 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__15689) - 1),(function (){
return first_child__15698.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__15689)))
{f.call(null,cljs.core.first.call(null,parents__15689),first_child__15698);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__15674_SHARP_,p2__15675_SHARP_){
return f.call(null,p1__15674_SHARP_,p2__15675_SHARP_);
}),cljs.core.rest.call(null,parents__15689),other_children__15699));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__15702 = (function (nl){
return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__15703 = (function (nl,n){
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
return lazy_nl_via_item__15702.call(this,nl);
case  2 :
return lazy_nl_via_item__15703.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__15705 = (function (nl){
return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__15706 = (function (nl,n){
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
return lazy_nl_via_array_ref__15705.call(this,nl);
case  2 :
return lazy_nl_via_array_ref__15706.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__5940__auto____15708 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____15709 = x__5940__auto____15708;

if(cljs.core.truth_(and__3546__auto____15709))
{var and__3546__auto____15710 = x__5940__auto____15708.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15710))
{var and__3546__auto____15711 = x__5940__auto____15708.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15711))
{return cljs.core.not.call(null,x__5940__auto____15708.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15711;
}
} else
{return and__3546__auto____15710;
}
} else
{return and__3546__auto____15709;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5940__auto____15708);
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
var inner_wrapper__15712 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__15713 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__15712));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__15713),1)))
{return inner_wrapper__15712.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__15712));
} else
{return children__15713;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__15714__15715 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___15716 = cljs.core.nth.call(null,vec__15714__15715,0,null);
var table_level__15717 = cljs.core.nth.call(null,vec__15714__15715,1,null);
var ___15718 = cljs.core.nthnext.call(null,vec__15714__15715,2);
var wrapper__15719 = domina.create_wrapper.call(null,table_level__15717);

domina.set_wrapper_html_BANG_.call(null,wrapper__15719,content);
return domina.extract_wrapper_dom.call(null,wrapper__15719,table_level__15717);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__5940__auto____15720 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15721 = x__5940__auto____15720;

if(cljs.core.truth_(and__3546__auto____15721))
{var and__3546__auto____15722 = x__5940__auto____15720.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15722))
{var and__3546__auto____15723 = x__5940__auto____15720.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15723))
{return cljs.core.not.call(null,x__5940__auto____15720.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15723;
}
} else
{return and__3546__auto____15722;
}
} else
{return and__3546__auto____15721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5940__auto____15720);
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
if(cljs.core.truth_((function (){var x__5940__auto____15724 = content;

if(cljs.core.truth_((function (){var and__3546__auto____15725 = x__5940__auto____15724;

if(cljs.core.truth_(and__3546__auto____15725))
{var and__3546__auto____15726 = x__5940__auto____15724.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____15726))
{var and__3546__auto____15727 = x__5940__auto____15724.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____15727))
{return cljs.core.not.call(null,x__5940__auto____15724.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____15727;
}
} else
{return and__3546__auto____15726;
}
} else
{return and__3546__auto____15725;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__5940__auto____15724);
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
var G__15728 = null;
var G__15728__15729 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15728__15730 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15728 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15728__15729.call(this,nodelist,n);
case  3 :
return G__15728__15730.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15728;
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
var G__15732 = null;
var G__15732__15733 = (function (nodelist,n){
return nodelist.item(n);
});
var G__15732__15734 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__15732 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__15732__15733.call(this,nodelist,n);
case  3 :
return G__15732__15734.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15732;
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
var G__15736 = null;
var G__15736__15737 = (function (coll,n){
return coll.item(n);
});
var G__15736__15738 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__15736 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__15736__15737.call(this,coll,n);
case  3 :
return G__15736__15738.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__15736;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
