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
if(cljs.core.truth_((function (){var and__3546__auto____15889 = content;

if(cljs.core.truth_(and__3546__auto____15889))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15889;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15891 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15891))
{return or__3548__auto____15891;
} else
{var or__3548__auto____15894 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15894))
{return or__3548__auto____15894;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15899 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15899))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15899;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15904 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15904))
{return or__3548__auto____15904;
} else
{var or__3548__auto____15905 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15905))
{return or__3548__auto____15905;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15915 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15915))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15915;
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
if(cljs.core.truth_((void 0 === domina.t15922)))
{
/**
* @constructor
*/
domina.t15922 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15922.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15922");
});
domina.t15922.prototype.domina$DomContent$ = true;
domina.t15922.prototype.domina$DomContent$nodes = (function (_){
var this__15930 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15930.class_name)));
});
domina.t15922.prototype.domina$DomContent$single_node = (function (_){
var this__15932 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15932.class_name)));
});
domina.t15922.prototype.cljs$core$IMeta$ = true;
domina.t15922.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15934 = this;
return this__15934.__meta;
});
domina.t15922.prototype.cljs$core$IWithMeta$ = true;
domina.t15922.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15937 = this;
return (new domina.t15922(this__15937.class_name,this__15937.by_class,__meta));
});
domina.t15922;
} else
{}
return (new domina.t15922(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15957_SHARP_){
return p1__15957_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15963_SHARP_,p2__15964_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15963_SHARP_,p2__15964_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15969_SHARP_,p2__15968_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15968_SHARP_,p1__15969_SHARP_);
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
domina.apply_with_cloning.call(null,(function (p1__15980_SHARP_,p2__15979_SHARP_){
return goog.dom.replaceNode.call(null,p2__15979_SHARP_,p1__15980_SHARP_);
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
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){
var G__16018__16019 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16018__16019))
{var n__16021 = cljs.core.first.call(null,G__16018__16019);
var G__16018__16022 = G__16018__16019;

while(true){
goog.style.setStyle.call(null,n__16021,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16023 = cljs.core.next.call(null,G__16018__16022);

if(cljs.core.truth_(temp__3698__auto____16023))
{var G__16018__16024 = temp__3698__auto____16023;

{
var G__16028 = cljs.core.first.call(null,G__16018__16024);
var G__16029 = G__16018__16024;
n__16021 = G__16028;
G__16018__16022 = G__16029;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16030){
var content = cljs.core.first(arglist__16030);
var name = cljs.core.first(cljs.core.next(arglist__16030));
var value = cljs.core.rest(cljs.core.next(arglist__16030));
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
var G__16039__16043 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16039__16043))
{var n__16045 = cljs.core.first.call(null,G__16039__16043);
var G__16039__16046 = G__16039__16043;

while(true){
n__16045.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16047 = cljs.core.next.call(null,G__16039__16046);

if(cljs.core.truth_(temp__3698__auto____16047))
{var G__16039__16048 = temp__3698__auto____16047;

{
var G__16052 = cljs.core.first.call(null,G__16039__16048);
var G__16053 = G__16039__16048;
n__16045 = G__16052;
G__16039__16046 = G__16053;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16054){
var content = cljs.core.first(arglist__16054);
var name = cljs.core.first(cljs.core.next(arglist__16054));
var value = cljs.core.rest(cljs.core.next(arglist__16054));
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
var vec__16055__16056 = pair.split(/\s*:\s*/);
var k__16059 = cljs.core.nth.call(null,vec__16055__16056,0,null);
var v__16063 = cljs.core.nth.call(null,vec__16055__16056,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16065 = k__16059;

if(cljs.core.truth_(and__3546__auto____16065))
{return v__16063;
} else
{return and__3546__auto____16065;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16059.toLowerCase()),v__16063);
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
var node__16092 = domina.single_node.call(null,content);
var attrs__16093 = node__16092.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16082_SHARP_){
var attr__16096 = attrs__16093.item(p1__16082_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16096.nodeName.toLowerCase())],[attr__16096.nodeValue]);
}),cljs.core.range.call(null,attrs__16093.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16103__16104 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16103__16104))
{var G__16106__16108 = cljs.core.first.call(null,G__16103__16104);
var vec__16107__16110 = G__16106__16108;
var name__16112 = cljs.core.nth.call(null,vec__16107__16110,0,null);
var value__16113 = cljs.core.nth.call(null,vec__16107__16110,1,null);
var G__16103__16114 = G__16103__16104;

var G__16106__16115 = G__16106__16108;
var G__16103__16116 = G__16103__16114;

while(true){
var vec__16117__16119 = G__16106__16115;
var name__16120 = cljs.core.nth.call(null,vec__16117__16119,0,null);
var value__16122 = cljs.core.nth.call(null,vec__16117__16119,1,null);
var G__16103__16123 = G__16103__16116;

domina.set_style_BANG_.call(null,content,name__16120,value__16122);
var temp__3698__auto____16126 = cljs.core.next.call(null,G__16103__16123);

if(cljs.core.truth_(temp__3698__auto____16126))
{var G__16103__16127 = temp__3698__auto____16126;

{
var G__16137 = cljs.core.first.call(null,G__16103__16127);
var G__16138 = G__16103__16127;
G__16106__16115 = G__16137;
G__16103__16116 = G__16138;
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
var G__16146__16150 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16146__16150))
{var G__16153__16157 = cljs.core.first.call(null,G__16146__16150);
var vec__16156__16158 = G__16153__16157;
var name__16159 = cljs.core.nth.call(null,vec__16156__16158,0,null);
var value__16161 = cljs.core.nth.call(null,vec__16156__16158,1,null);
var G__16146__16162 = G__16146__16150;

var G__16153__16163 = G__16153__16157;
var G__16146__16164 = G__16146__16162;

while(true){
var vec__16166__16167 = G__16153__16163;
var name__16168 = cljs.core.nth.call(null,vec__16166__16167,0,null);
var value__16170 = cljs.core.nth.call(null,vec__16166__16167,1,null);
var G__16146__16171 = G__16146__16164;

domina.set_attr_BANG_.call(null,content,name__16168,value__16170);
var temp__3698__auto____16174 = cljs.core.next.call(null,G__16146__16171);

if(cljs.core.truth_(temp__3698__auto____16174))
{var G__16146__16176 = temp__3698__auto____16174;

{
var G__16190 = cljs.core.first.call(null,G__16146__16176);
var G__16192 = G__16146__16176;
G__16153__16163 = G__16190;
G__16146__16164 = G__16192;
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
var G__16216__16218 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16216__16218))
{var node__16219 = cljs.core.first.call(null,G__16216__16218);
var G__16216__16220 = G__16216__16218;

while(true){
goog.dom.classes.add.call(null,node__16219,class$);
var temp__3698__auto____16221 = cljs.core.next.call(null,G__16216__16220);

if(cljs.core.truth_(temp__3698__auto____16221))
{var G__16216__16223 = temp__3698__auto____16221;

{
var G__16238 = cljs.core.first.call(null,G__16216__16223);
var G__16239 = G__16216__16223;
node__16219 = G__16238;
G__16216__16220 = G__16239;
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
var G__16247__16252 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16247__16252))
{var node__16255 = cljs.core.first.call(null,G__16247__16252);
var G__16247__16257 = G__16247__16252;

while(true){
goog.dom.classes.remove.call(null,node__16255,class$);
var temp__3698__auto____16263 = cljs.core.next.call(null,G__16247__16257);

if(cljs.core.truth_(temp__3698__auto____16263))
{var G__16247__16266 = temp__3698__auto____16263;

{
var G__16272 = cljs.core.first.call(null,G__16247__16266);
var G__16273 = G__16247__16266;
node__16255 = G__16272;
G__16247__16257 = G__16273;
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
var G__16304__16307 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16304__16307))
{var node__16308 = cljs.core.first.call(null,G__16304__16307);
var G__16304__16309 = G__16304__16307;

while(true){
goog.dom.setTextContent.call(null,node__16308,value);
var temp__3698__auto____16310 = cljs.core.next.call(null,G__16304__16309);

if(cljs.core.truth_(temp__3698__auto____16310))
{var G__16304__16311 = temp__3698__auto____16310;

{
var G__16317 = cljs.core.first.call(null,G__16304__16311);
var G__16318 = G__16304__16311;
node__16308 = G__16317;
G__16304__16309 = G__16318;
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
var G__16326__16329 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16326__16329))
{var node__16331 = cljs.core.first.call(null,G__16326__16329);
var G__16326__16332 = G__16326__16329;

while(true){
goog.dom.forms.setValue.call(null,node__16331,value);
var temp__3698__auto____16336 = cljs.core.next.call(null,G__16326__16332);

if(cljs.core.truth_(temp__3698__auto____16336))
{var G__16326__16337 = temp__3698__auto____16336;

{
var G__16347 = cljs.core.first.call(null,G__16326__16337);
var G__16348 = G__16326__16337;
node__16331 = G__16347;
G__16326__16332 = G__16348;
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
var G__16360__16361 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16360__16361))
{var node__16362 = cljs.core.first.call(null,G__16360__16361);
var G__16360__16364 = G__16360__16361;

while(true){
node__16362.innerHTML = value;
var temp__3698__auto____16366 = cljs.core.next.call(null,G__16360__16364);

if(cljs.core.truth_(temp__3698__auto____16366))
{var G__16360__16367 = temp__3698__auto____16366;

{
var G__16370 = cljs.core.first.call(null,G__16360__16367);
var G__16371 = G__16360__16367;
node__16362 = G__16370;
G__16360__16364 = G__16371;
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
var parents__16378 = domina.nodes.call(null,parent_content);
var children__16379 = domina.nodes.call(null,child_content);
var first_child__16391 = (function (){var frag__16381 = document.createDocumentFragment();

var G__16382__16384 = cljs.core.seq.call(null,children__16379);

if(cljs.core.truth_(G__16382__16384))
{var child__16385 = cljs.core.first.call(null,G__16382__16384);
var G__16382__16386 = G__16382__16384;

while(true){
frag__16381.appendChild(child__16385);
var temp__3698__auto____16387 = cljs.core.next.call(null,G__16382__16386);

if(cljs.core.truth_(temp__3698__auto____16387))
{var G__16382__16388 = temp__3698__auto____16387;

{
var G__16402 = cljs.core.first.call(null,G__16382__16388);
var G__16403 = G__16382__16388;
child__16385 = G__16402;
G__16382__16386 = G__16403;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16381;
})();
var other_children__16392 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16378) - 1),(function (){
return first_child__16391.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16378)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16379)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16378)))
{f.call(null,cljs.core.first.call(null,parents__16378),first_child__16391);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16358_SHARP_,p2__16359_SHARP_){
return f.call(null,p1__16358_SHARP_,p2__16359_SHARP_);
}),cljs.core.rest.call(null,parents__16378),other_children__16392));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16420 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16421 = (function (nl,n){
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
return lazy_nodelist__16420.call(this,nl);
case  2 :
return lazy_nodelist__16421.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6765__auto____16425 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16428 = x__6765__auto____16425;

if(cljs.core.truth_(and__3546__auto____16428))
{var and__3546__auto____16432 = x__6765__auto____16425.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16432))
{var and__3546__auto____16435 = x__6765__auto____16425.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16435))
{return cljs.core.not.call(null,x__6765__auto____16425.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16435;
}
} else
{return and__3546__auto____16432;
}
} else
{return and__3546__auto____16428;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16425);
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
var inner_wrapper__16475 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16476 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16475));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16476),1)))
{return inner_wrapper__16475.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16475));
} else
{return children__16476;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16482__16483 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16484 = cljs.core.nth.call(null,vec__16482__16483,0,null);
var table_level__16485 = cljs.core.nth.call(null,vec__16482__16483,1,null);
var ___16486 = cljs.core.nthnext.call(null,vec__16482__16483,2);
var wrapper__16487 = domina.create_wrapper.call(null,table_level__16485);

domina.set_wrapper_html_BANG_.call(null,wrapper__16487,content);
return domina.extract_wrapper_dom.call(null,wrapper__16487,table_level__16485);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6765__auto____16492 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16493 = x__6765__auto____16492;

if(cljs.core.truth_(and__3546__auto____16493))
{var and__3546__auto____16494 = x__6765__auto____16492.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16494))
{var and__3546__auto____16495 = x__6765__auto____16492.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16495))
{return cljs.core.not.call(null,x__6765__auto____16492.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16495;
}
} else
{return and__3546__auto____16494;
}
} else
{return and__3546__auto____16493;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16492);
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
if(cljs.core.truth_((function (){var x__6765__auto____16496 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16497 = x__6765__auto____16496;

if(cljs.core.truth_(and__3546__auto____16497))
{var and__3546__auto____16502 = x__6765__auto____16496.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16502))
{var and__3546__auto____16507 = x__6765__auto____16496.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16507))
{return cljs.core.not.call(null,x__6765__auto____16496.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16507;
}
} else
{return and__3546__auto____16502;
}
} else
{return and__3546__auto____16497;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6765__auto____16496);
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
var G__16527 = null;
var G__16527__16528 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16527__16529 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16527 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16527__16528.call(this,nodelist,n);
case  3 :
return G__16527__16529.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16527;
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
var G__16535 = null;
var G__16535__16536 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16535__16537 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16535 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16535__16536.call(this,nodelist,n);
case  3 :
return G__16535__16537.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16535;
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
var G__16545 = null;
var G__16545__16546 = (function (coll,n){
return coll.item(n);
});
var G__16545__16547 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16545 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16545__16546.call(this,coll,n);
case  3 :
return G__16545__16547.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16545;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
