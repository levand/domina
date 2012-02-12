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
if(cljs.core.truth_((function (){var and__3546__auto____15862 = content;

if(cljs.core.truth_(and__3546__auto____15862))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15862;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15863 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15863))
{return or__3548__auto____15863;
} else
{var or__3548__auto____15864 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15864))
{return or__3548__auto____15864;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15869 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15869))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15869;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15871 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15871))
{return or__3548__auto____15871;
} else
{var or__3548__auto____15872 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15872))
{return or__3548__auto____15872;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15878 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15878))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15878;
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
if(cljs.core.truth_((void 0 === domina.t15883)))
{
/**
* @constructor
*/
domina.t15883 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15883.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15883");
});
domina.t15883.prototype.domina$DomContent$ = true;
domina.t15883.prototype.domina$DomContent$nodes = (function (_){
var this__15887 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15887.class_name)));
});
domina.t15883.prototype.domina$DomContent$single_node = (function (_){
var this__15892 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15892.class_name)));
});
domina.t15883.prototype.cljs$core$IMeta$ = true;
domina.t15883.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15941 = this;
return this__15941.__meta;
});
domina.t15883.prototype.cljs$core$IWithMeta$ = true;
domina.t15883.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15943 = this;
return (new domina.t15883(this__15943.class_name,this__15943.by_class,__meta));
});
domina.t15883;
} else
{}
return (new domina.t15883(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15945_SHARP_){
return p1__15945_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15953_SHARP_,p2__15954_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15953_SHARP_,p2__15954_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15982_SHARP_,p2__15980_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15980_SHARP_,p1__15982_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15984_SHARP_,p2__15983_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15983_SHARP_,p1__15984_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15997_SHARP_,p2__15994_SHARP_){
return goog.dom.replaceNode.call(null,p2__15994_SHARP_,p1__15997_SHARP_);
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
var s__16034 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__16034))))
{return s__16034;
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
var G__16045__16046 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16045__16046))
{var n__16047 = cljs.core.first.call(null,G__16045__16046);
var G__16045__16048 = G__16045__16046;

while(true){
goog.style.setStyle.call(null,n__16047,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16055 = cljs.core.next.call(null,G__16045__16048);

if(cljs.core.truth_(temp__3698__auto____16055))
{var G__16045__16057 = temp__3698__auto____16055;

{
var G__16060 = cljs.core.first.call(null,G__16045__16057);
var G__16061 = G__16045__16057;
n__16047 = G__16060;
G__16045__16048 = G__16061;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16062){
var content = cljs.core.first(arglist__16062);
var name = cljs.core.first(cljs.core.next(arglist__16062));
var value = cljs.core.rest(cljs.core.next(arglist__16062));
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
var G__16070__16075 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16070__16075))
{var n__16079 = cljs.core.first.call(null,G__16070__16075);
var G__16070__16081 = G__16070__16075;

while(true){
n__16079.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16086 = cljs.core.next.call(null,G__16070__16081);

if(cljs.core.truth_(temp__3698__auto____16086))
{var G__16070__16088 = temp__3698__auto____16086;

{
var G__16090 = cljs.core.first.call(null,G__16070__16088);
var G__16091 = G__16070__16088;
n__16079 = G__16090;
G__16070__16081 = G__16091;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16092){
var content = cljs.core.first(arglist__16092);
var name = cljs.core.first(cljs.core.next(arglist__16092));
var value = cljs.core.rest(cljs.core.next(arglist__16092));
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
var vec__16096__16098 = pair.split(/\s*:\s*/);
var k__16099 = cljs.core.nth.call(null,vec__16096__16098,0,null);
var v__16101 = cljs.core.nth.call(null,vec__16096__16098,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16104 = k__16099;

if(cljs.core.truth_(and__3546__auto____16104))
{return v__16101;
} else
{return and__3546__auto____16104;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16099.toLowerCase()),v__16101);
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
var node__16123 = domina.single_node.call(null,content);
var attrs__16124 = node__16123.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16119_SHARP_){
var attr__16125 = attrs__16124.item(p1__16119_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16125.nodeName.toLowerCase())],[attr__16125.nodeValue]);
}),cljs.core.range.call(null,attrs__16124.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16140__16142 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16140__16142))
{var G__16144__16147 = cljs.core.first.call(null,G__16140__16142);
var vec__16145__16148 = G__16144__16147;
var name__16150 = cljs.core.nth.call(null,vec__16145__16148,0,null);
var value__16151 = cljs.core.nth.call(null,vec__16145__16148,1,null);
var G__16140__16153 = G__16140__16142;

var G__16144__16155 = G__16144__16147;
var G__16140__16157 = G__16140__16153;

while(true){
var vec__16159__16160 = G__16144__16155;
var name__16161 = cljs.core.nth.call(null,vec__16159__16160,0,null);
var value__16162 = cljs.core.nth.call(null,vec__16159__16160,1,null);
var G__16140__16163 = G__16140__16157;

domina.set_style_BANG_.call(null,content,name__16161,value__16162);
var temp__3698__auto____16167 = cljs.core.next.call(null,G__16140__16163);

if(cljs.core.truth_(temp__3698__auto____16167))
{var G__16140__16185 = temp__3698__auto____16167;

{
var G__16192 = cljs.core.first.call(null,G__16140__16185);
var G__16193 = G__16140__16185;
G__16144__16155 = G__16192;
G__16140__16157 = G__16193;
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
var G__16194__16195 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16194__16195))
{var G__16198__16202 = cljs.core.first.call(null,G__16194__16195);
var vec__16200__16204 = G__16198__16202;
var name__16205 = cljs.core.nth.call(null,vec__16200__16204,0,null);
var value__16206 = cljs.core.nth.call(null,vec__16200__16204,1,null);
var G__16194__16207 = G__16194__16195;

var G__16198__16208 = G__16198__16202;
var G__16194__16210 = G__16194__16207;

while(true){
var vec__16211__16213 = G__16198__16208;
var name__16214 = cljs.core.nth.call(null,vec__16211__16213,0,null);
var value__16215 = cljs.core.nth.call(null,vec__16211__16213,1,null);
var G__16194__16216 = G__16194__16210;

domina.set_attr_BANG_.call(null,content,name__16214,value__16215);
var temp__3698__auto____16217 = cljs.core.next.call(null,G__16194__16216);

if(cljs.core.truth_(temp__3698__auto____16217))
{var G__16194__16218 = temp__3698__auto____16217;

{
var G__16221 = cljs.core.first.call(null,G__16194__16218);
var G__16222 = G__16194__16218;
G__16198__16208 = G__16221;
G__16194__16210 = G__16222;
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
var G__16229__16230 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16229__16230))
{var node__16231 = cljs.core.first.call(null,G__16229__16230);
var G__16229__16232 = G__16229__16230;

while(true){
goog.dom.classes.add.call(null,node__16231,class$);
var temp__3698__auto____16233 = cljs.core.next.call(null,G__16229__16232);

if(cljs.core.truth_(temp__3698__auto____16233))
{var G__16229__16235 = temp__3698__auto____16233;

{
var G__16237 = cljs.core.first.call(null,G__16229__16235);
var G__16238 = G__16229__16235;
node__16231 = G__16237;
G__16229__16232 = G__16238;
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
var G__16240__16243 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16240__16243))
{var node__16245 = cljs.core.first.call(null,G__16240__16243);
var G__16240__16246 = G__16240__16243;

while(true){
goog.dom.classes.remove.call(null,node__16245,class$);
var temp__3698__auto____16248 = cljs.core.next.call(null,G__16240__16246);

if(cljs.core.truth_(temp__3698__auto____16248))
{var G__16240__16251 = temp__3698__auto____16248;

{
var G__16257 = cljs.core.first.call(null,G__16240__16251);
var G__16258 = G__16240__16251;
node__16245 = G__16257;
G__16240__16246 = G__16258;
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
var text__16276 = (function (content){
return text.call(null,content,true);
});
var text__16277 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16276.call(this,content);
case  2 :
return text__16277.call(this,content,normalize);
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
var G__16290__16292 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16290__16292))
{var node__16295 = cljs.core.first.call(null,G__16290__16292);
var G__16290__16296 = G__16290__16292;

while(true){
goog.dom.setTextContent.call(null,node__16295,value);
var temp__3698__auto____16297 = cljs.core.next.call(null,G__16290__16296);

if(cljs.core.truth_(temp__3698__auto____16297))
{var G__16290__16299 = temp__3698__auto____16297;

{
var G__16303 = cljs.core.first.call(null,G__16290__16299);
var G__16304 = G__16290__16299;
node__16295 = G__16303;
G__16290__16296 = G__16304;
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
var G__16332__16339 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16332__16339))
{var node__16342 = cljs.core.first.call(null,G__16332__16339);
var G__16332__16343 = G__16332__16339;

while(true){
goog.dom.forms.setValue.call(null,node__16342,value);
var temp__3698__auto____16348 = cljs.core.next.call(null,G__16332__16343);

if(cljs.core.truth_(temp__3698__auto____16348))
{var G__16332__16353 = temp__3698__auto____16348;

{
var G__16361 = cljs.core.first.call(null,G__16332__16353);
var G__16362 = G__16332__16353;
node__16342 = G__16361;
G__16332__16343 = G__16362;
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
var G__16371__16372 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16371__16372))
{var node__16373 = cljs.core.first.call(null,G__16371__16372);
var G__16371__16374 = G__16371__16372;

while(true){
node__16373.innerHTML = value;
var temp__3698__auto____16375 = cljs.core.next.call(null,G__16371__16374);

if(cljs.core.truth_(temp__3698__auto____16375))
{var G__16371__16376 = temp__3698__auto____16375;

{
var G__16380 = cljs.core.first.call(null,G__16371__16376);
var G__16381 = G__16371__16376;
node__16373 = G__16380;
G__16371__16374 = G__16381;
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
var parents__16387 = domina.nodes.call(null,parent_content);
var children__16388 = domina.nodes.call(null,child_content);
var first_child__16398 = (function (){var frag__16389 = document.createDocumentFragment();

var G__16390__16391 = cljs.core.seq.call(null,children__16388);

if(cljs.core.truth_(G__16390__16391))
{var child__16392 = cljs.core.first.call(null,G__16390__16391);
var G__16390__16393 = G__16390__16391;

while(true){
frag__16389.appendChild(child__16392);
var temp__3698__auto____16394 = cljs.core.next.call(null,G__16390__16393);

if(cljs.core.truth_(temp__3698__auto____16394))
{var G__16390__16395 = temp__3698__auto____16394;

{
var G__16424 = cljs.core.first.call(null,G__16390__16395);
var G__16426 = G__16390__16395;
child__16392 = G__16424;
G__16390__16393 = G__16426;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16389;
})();
var other_children__16408 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16387) - 1),(function (){
return first_child__16398.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16387)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16388)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16387)))
{f.call(null,cljs.core.first.call(null,parents__16387),first_child__16398);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16369_SHARP_,p2__16370_SHARP_){
return f.call(null,p1__16369_SHARP_,p2__16370_SHARP_);
}),cljs.core.rest.call(null,parents__16387),other_children__16408));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16445 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16446 = (function (nl,n){
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
return lazy_nodelist__16445.call(this,nl);
case  2 :
return lazy_nodelist__16446.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16452 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16453 = x__6743__auto____16452;

if(cljs.core.truth_(and__3546__auto____16453))
{var and__3546__auto____16454 = x__6743__auto____16452.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16454))
{var and__3546__auto____16456 = x__6743__auto____16452.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16456))
{return cljs.core.not.call(null,x__6743__auto____16452.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16456;
}
} else
{return and__3546__auto____16454;
}
} else
{return and__3546__auto____16453;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16452);
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
var inner_wrapper__16479 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16480 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16479));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16480),1)))
{return inner_wrapper__16479.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16479));
} else
{return children__16480;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16486__16487 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16489 = cljs.core.nth.call(null,vec__16486__16487,0,null);
var table_level__16490 = cljs.core.nth.call(null,vec__16486__16487,1,null);
var ___16491 = cljs.core.nthnext.call(null,vec__16486__16487,2);
var wrapper__16493 = domina.create_wrapper.call(null,table_level__16490);

domina.set_wrapper_html_BANG_.call(null,wrapper__16493,content);
return domina.extract_wrapper_dom.call(null,wrapper__16493,table_level__16490);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16497 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16498 = x__6743__auto____16497;

if(cljs.core.truth_(and__3546__auto____16498))
{var and__3546__auto____16499 = x__6743__auto____16497.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16499))
{var and__3546__auto____16500 = x__6743__auto____16497.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16500))
{return cljs.core.not.call(null,x__6743__auto____16497.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16500;
}
} else
{return and__3546__auto____16499;
}
} else
{return and__3546__auto____16498;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16497);
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
if(cljs.core.truth_((function (){var x__6743__auto____16510 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16511 = x__6743__auto____16510;

if(cljs.core.truth_(and__3546__auto____16511))
{var and__3546__auto____16512 = x__6743__auto____16510.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16512))
{var and__3546__auto____16513 = x__6743__auto____16510.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16513))
{return cljs.core.not.call(null,x__6743__auto____16510.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16513;
}
} else
{return and__3546__auto____16512;
}
} else
{return and__3546__auto____16511;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16510);
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
var G__16532 = null;
var G__16532__16533 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16532__16534 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16532 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16532__16533.call(this,nodelist,n);
case  3 :
return G__16532__16534.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16532;
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
var G__16549 = null;
var G__16549__16551 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16549__16552 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16549 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16549__16551.call(this,nodelist,n);
case  3 :
return G__16549__16552.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16549;
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
var G__16562 = null;
var G__16562__16564 = (function (coll,n){
return coll.item(n);
});
var G__16562__16566 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16562 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16562__16564.call(this,coll,n);
case  3 :
return G__16562__16566.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16562;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
