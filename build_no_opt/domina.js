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
if(cljs.core.truth_((function (){var and__3546__auto____15869 = content;

if(cljs.core.truth_(and__3546__auto____15869))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15869;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15871 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15871))
{return or__3548__auto____15871;
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
if(cljs.core.truth_((function (){var and__3546__auto____15875 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15875))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15875;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15876 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15876))
{return or__3548__auto____15876;
} else
{var or__3548__auto____15877 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15877))
{return or__3548__auto____15877;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
domina.log_debug = (function log_debug(mesg){
if(cljs.core.truth_((function (){var and__3546__auto____15892 = domina._STAR_debug_STAR_;

if(cljs.core.truth_(and__3546__auto____15892))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15892;
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
if(cljs.core.truth_((void 0 === domina.t15904)))
{
/**
* @constructor
*/
domina.t15904 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15904.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15904");
});
domina.t15904.prototype.domina$DomContent$ = true;
domina.t15904.prototype.domina$DomContent$nodes = (function (_){
var this__15907 = this;
return domina.normalize_seq.call(null,goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15907.class_name)));
});
domina.t15904.prototype.domina$DomContent$single_node = (function (_){
var this__15908 = this;
return domina.normalize_seq.call(null,goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15908.class_name)));
});
domina.t15904.prototype.cljs$core$IMeta$ = true;
domina.t15904.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15909 = this;
return this__15909.__meta;
});
domina.t15904.prototype.cljs$core$IWithMeta$ = true;
domina.t15904.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15912 = this;
return (new domina.t15904(this__15912.class_name,this__15912.by_class,__meta));
});
domina.t15904;
} else
{}
return (new domina.t15904(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15926_SHARP_){
return p1__15926_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15959_SHARP_,p2__15961_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15959_SHARP_,p2__15961_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15980_SHARP_,p2__15979_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15979_SHARP_,p1__15980_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15982_SHARP_,p2__15981_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15981_SHARP_,p1__15982_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15984_SHARP_,p2__15983_SHARP_){
return goog.dom.replaceNode.call(null,p2__15983_SHARP_,p1__15984_SHARP_);
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
var s__15996 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15996))))
{return s__15996;
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
var G__16015__16020 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16015__16020))
{var n__16021 = cljs.core.first.call(null,G__16015__16020);
var G__16015__16022 = G__16015__16020;

while(true){
goog.style.setStyle.call(null,n__16021,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16053 = cljs.core.next.call(null,G__16015__16022);

if(cljs.core.truth_(temp__3698__auto____16053))
{var G__16015__16056 = temp__3698__auto____16053;

{
var G__16061 = cljs.core.first.call(null,G__16015__16056);
var G__16062 = G__16015__16056;
n__16021 = G__16061;
G__16015__16022 = G__16062;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__16063){
var content = cljs.core.first(arglist__16063);
var name = cljs.core.first(cljs.core.next(arglist__16063));
var value = cljs.core.rest(cljs.core.next(arglist__16063));
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
var G__16065__16066 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16065__16066))
{var n__16067 = cljs.core.first.call(null,G__16065__16066);
var G__16065__16068 = G__16065__16066;

while(true){
n__16067.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
var temp__3698__auto____16071 = cljs.core.next.call(null,G__16065__16068);

if(cljs.core.truth_(temp__3698__auto____16071))
{var G__16065__16072 = temp__3698__auto____16071;

{
var G__16078 = cljs.core.first.call(null,G__16065__16072);
var G__16079 = G__16065__16072;
n__16067 = G__16078;
G__16065__16068 = G__16079;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__16080){
var content = cljs.core.first(arglist__16080);
var name = cljs.core.first(cljs.core.next(arglist__16080));
var value = cljs.core.rest(cljs.core.next(arglist__16080));
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
var vec__16083__16084 = pair.split(/\s*:\s*/);
var k__16085 = cljs.core.nth.call(null,vec__16083__16084,0,null);
var v__16086 = cljs.core.nth.call(null,vec__16083__16084,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____16087 = k__16085;

if(cljs.core.truth_(and__3546__auto____16087))
{return v__16086;
} else
{return and__3546__auto____16087;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__16085.toLowerCase()),v__16086);
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
var node__16097 = domina.single_node.call(null,content);
var attrs__16099 = node__16097.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__16090_SHARP_){
var attr__16100 = attrs__16099.item(p1__16090_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__16100.nodeName.toLowerCase())],[attr__16100.nodeValue]);
}),cljs.core.range.call(null,attrs__16099.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__16103__16104 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__16103__16104))
{var G__16106__16108 = cljs.core.first.call(null,G__16103__16104);
var vec__16107__16109 = G__16106__16108;
var name__16110 = cljs.core.nth.call(null,vec__16107__16109,0,null);
var value__16111 = cljs.core.nth.call(null,vec__16107__16109,1,null);
var G__16103__16112 = G__16103__16104;

var G__16106__16114 = G__16106__16108;
var G__16103__16116 = G__16103__16112;

while(true){
var vec__16117__16118 = G__16106__16114;
var name__16119 = cljs.core.nth.call(null,vec__16117__16118,0,null);
var value__16121 = cljs.core.nth.call(null,vec__16117__16118,1,null);
var G__16103__16122 = G__16103__16116;

domina.set_style_BANG_.call(null,content,name__16119,value__16121);
var temp__3698__auto____16124 = cljs.core.next.call(null,G__16103__16122);

if(cljs.core.truth_(temp__3698__auto____16124))
{var G__16103__16127 = temp__3698__auto____16124;

{
var G__16130 = cljs.core.first.call(null,G__16103__16127);
var G__16131 = G__16103__16127;
G__16106__16114 = G__16130;
G__16103__16116 = G__16131;
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
var G__16132__16133 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__16132__16133))
{var G__16136__16139 = cljs.core.first.call(null,G__16132__16133);
var vec__16137__16140 = G__16136__16139;
var name__16142 = cljs.core.nth.call(null,vec__16137__16140,0,null);
var value__16144 = cljs.core.nth.call(null,vec__16137__16140,1,null);
var G__16132__16146 = G__16132__16133;

var G__16136__16147 = G__16136__16139;
var G__16132__16148 = G__16132__16146;

while(true){
var vec__16149__16152 = G__16136__16147;
var name__16154 = cljs.core.nth.call(null,vec__16149__16152,0,null);
var value__16159 = cljs.core.nth.call(null,vec__16149__16152,1,null);
var G__16132__16160 = G__16132__16148;

domina.set_attr_BANG_.call(null,content,name__16154,value__16159);
var temp__3698__auto____16167 = cljs.core.next.call(null,G__16132__16160);

if(cljs.core.truth_(temp__3698__auto____16167))
{var G__16132__16168 = temp__3698__auto____16167;

{
var G__16189 = cljs.core.first.call(null,G__16132__16168);
var G__16190 = G__16132__16168;
G__16136__16147 = G__16189;
G__16132__16148 = G__16190;
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
var G__16196__16197 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16196__16197))
{var node__16199 = cljs.core.first.call(null,G__16196__16197);
var G__16196__16203 = G__16196__16197;

while(true){
goog.dom.classes.add.call(null,node__16199,class$);
var temp__3698__auto____16205 = cljs.core.next.call(null,G__16196__16203);

if(cljs.core.truth_(temp__3698__auto____16205))
{var G__16196__16207 = temp__3698__auto____16205;

{
var G__16210 = cljs.core.first.call(null,G__16196__16207);
var G__16211 = G__16196__16207;
node__16199 = G__16210;
G__16196__16203 = G__16211;
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
var G__16220__16224 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16220__16224))
{var node__16227 = cljs.core.first.call(null,G__16220__16224);
var G__16220__16230 = G__16220__16224;

while(true){
goog.dom.classes.remove.call(null,node__16227,class$);
var temp__3698__auto____16239 = cljs.core.next.call(null,G__16220__16230);

if(cljs.core.truth_(temp__3698__auto____16239))
{var G__16220__16243 = temp__3698__auto____16239;

{
var G__16252 = cljs.core.first.call(null,G__16220__16243);
var G__16253 = G__16220__16243;
node__16227 = G__16252;
G__16220__16230 = G__16253;
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
var text__16259 = (function (content){
return text.call(null,content,true);
});
var text__16260 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16259.call(this,content);
case  2 :
return text__16260.call(this,content,normalize);
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
var G__16268__16270 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16268__16270))
{var node__16271 = cljs.core.first.call(null,G__16268__16270);
var G__16268__16272 = G__16268__16270;

while(true){
goog.dom.setTextContent.call(null,node__16271,value);
var temp__3698__auto____16273 = cljs.core.next.call(null,G__16268__16272);

if(cljs.core.truth_(temp__3698__auto____16273))
{var G__16268__16274 = temp__3698__auto____16273;

{
var G__16277 = cljs.core.first.call(null,G__16268__16274);
var G__16278 = G__16268__16274;
node__16271 = G__16277;
G__16268__16272 = G__16278;
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
var G__16293__16297 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16293__16297))
{var node__16300 = cljs.core.first.call(null,G__16293__16297);
var G__16293__16301 = G__16293__16297;

while(true){
goog.dom.forms.setValue.call(null,node__16300,value);
var temp__3698__auto____16303 = cljs.core.next.call(null,G__16293__16301);

if(cljs.core.truth_(temp__3698__auto____16303))
{var G__16293__16305 = temp__3698__auto____16303;

{
var G__16312 = cljs.core.first.call(null,G__16293__16305);
var G__16313 = G__16293__16305;
node__16300 = G__16312;
G__16293__16301 = G__16313;
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
var G__16322__16325 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16322__16325))
{var node__16327 = cljs.core.first.call(null,G__16322__16325);
var G__16322__16329 = G__16322__16325;

while(true){
node__16327.innerHTML = value;
var temp__3698__auto____16335 = cljs.core.next.call(null,G__16322__16329);

if(cljs.core.truth_(temp__3698__auto____16335))
{var G__16322__16339 = temp__3698__auto____16335;

{
var G__16353 = cljs.core.first.call(null,G__16322__16339);
var G__16354 = G__16322__16339;
node__16327 = G__16353;
G__16322__16329 = G__16354;
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
var parents__16357 = domina.nodes.call(null,parent_content);
var children__16358 = domina.nodes.call(null,child_content);
var first_child__16368 = (function (){var frag__16359 = document.createDocumentFragment();

var G__16360__16361 = cljs.core.seq.call(null,children__16358);

if(cljs.core.truth_(G__16360__16361))
{var child__16362 = cljs.core.first.call(null,G__16360__16361);
var G__16360__16363 = G__16360__16361;

while(true){
frag__16359.appendChild(child__16362);
var temp__3698__auto____16364 = cljs.core.next.call(null,G__16360__16363);

if(cljs.core.truth_(temp__3698__auto____16364))
{var G__16360__16367 = temp__3698__auto____16364;

{
var G__16385 = cljs.core.first.call(null,G__16360__16367);
var G__16386 = G__16360__16367;
child__16362 = G__16385;
G__16360__16363 = G__16386;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16359;
})();
var other_children__16372 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16357) - 1),(function (){
return first_child__16368.cloneNode(true);
})));

domina.log_debug.call(null,cljs.core.str.call(null,"parent-count: ",cljs.core.count.call(null,parents__16357)));
domina.log_debug.call(null,cljs.core.str.call(null,"child-count: ",cljs.core.count.call(null,children__16358)));
if(cljs.core.truth_(cljs.core.seq.call(null,parents__16357)))
{f.call(null,cljs.core.first.call(null,parents__16357),first_child__16368);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16316_SHARP_,p2__16320_SHARP_){
return f.call(null,p1__16316_SHARP_,p2__16320_SHARP_);
}),cljs.core.rest.call(null,parents__16357),other_children__16372));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things.
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16401 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16402 = (function (nl,n){
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
return lazy_nodelist__16401.call(this,nl);
case  2 :
return lazy_nodelist__16402.call(this,nl,n);
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
if(cljs.core.truth_((function (){var x__6743__auto____16410 = list_thing;

if(cljs.core.truth_((function (){var and__3546__auto____16411 = x__6743__auto____16410;

if(cljs.core.truth_(and__3546__auto____16411))
{var and__3546__auto____16412 = x__6743__auto____16410.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16412))
{var and__3546__auto____16413 = x__6743__auto____16410.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16413))
{return cljs.core.not.call(null,x__6743__auto____16410.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16413;
}
} else
{return and__3546__auto____16412;
}
} else
{return and__3546__auto____16411;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16410);
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
var inner_wrapper__16451 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16452 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16451));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16452),1)))
{return inner_wrapper__16451.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16451));
} else
{return children__16452;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16466__16467 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16468 = cljs.core.nth.call(null,vec__16466__16467,0,null);
var table_level__16469 = cljs.core.nth.call(null,vec__16466__16467,1,null);
var ___16470 = cljs.core.nthnext.call(null,vec__16466__16467,2);
var wrapper__16471 = domina.create_wrapper.call(null,table_level__16469);

domina.set_wrapper_html_BANG_.call(null,wrapper__16471,content);
return domina.extract_wrapper_dom.call(null,wrapper__16471,table_level__16469);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6743__auto____16476 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16480 = x__6743__auto____16476;

if(cljs.core.truth_(and__3546__auto____16480))
{var and__3546__auto____16481 = x__6743__auto____16476.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16481))
{var and__3546__auto____16482 = x__6743__auto____16476.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16482))
{return cljs.core.not.call(null,x__6743__auto____16476.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16482;
}
} else
{return and__3546__auto____16481;
}
} else
{return and__3546__auto____16480;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16476);
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
if(cljs.core.truth_((function (){var x__6743__auto____16483 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16484 = x__6743__auto____16483;

if(cljs.core.truth_(and__3546__auto____16484))
{var and__3546__auto____16485 = x__6743__auto____16483.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16485))
{var and__3546__auto____16486 = x__6743__auto____16483.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16486))
{return cljs.core.not.call(null,x__6743__auto____16483.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16486;
}
} else
{return and__3546__auto____16485;
}
} else
{return and__3546__auto____16484;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6743__auto____16483);
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
var G__16513 = null;
var G__16513__16515 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16513__16516 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16513 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16513__16515.call(this,nodelist,n);
case  3 :
return G__16513__16516.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16513;
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
var G__16528 = null;
var G__16528__16529 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16528__16530 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16528 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16528__16529.call(this,nodelist,n);
case  3 :
return G__16528__16530.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16528;
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
var G__16547 = null;
var G__16547__16548 = (function (coll,n){
return coll.item(n);
});
var G__16547__16549 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16547 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16547__16548.call(this,coll,n);
case  3 :
return G__16547__16549.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16547;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
