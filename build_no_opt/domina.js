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
if(cljs.core.truth_((function (){var and__3546__auto____15772 = domina.debug;

if(cljs.core.truth_(and__3546__auto____15772))
{return cljs.core.not.call(null,cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3546__auto____15772;
}
})()))
{return console.log(mesg);
} else
{return null;
}
});
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____15781 = content;

if(cljs.core.truth_(and__3546__auto____15781))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____15781;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____15784 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____15784))
{return or__3548__auto____15784;
} else
{var or__3548__auto____15785 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____15785))
{return or__3548__auto____15785;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____15786 = nodeseq;

if(cljs.core.truth_(and__3546__auto____15786))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____15786;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____15787 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____15787))
{return or__3548__auto____15787;
} else
{var or__3548__auto____15788 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____15788))
{return or__3548__auto____15788;
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
if(cljs.core.truth_((void 0 === domina.t15791)))
{
/**
* @constructor
*/
domina.t15791 = (function (class_name,by_class,__meta){
this.class_name = class_name;
this.by_class = by_class;
this.__meta = __meta;
})
domina.t15791.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.t15791");
});
domina.t15791.prototype.domina$DomContent$ = true;
domina.t15791.prototype.domina$DomContent$nodes = (function (_){
var this__15792 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__15792.class_name));
});
domina.t15791.prototype.domina$DomContent$single_node = (function (_){
var this__15794 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__15794.class_name));
});
domina.t15791.prototype.cljs$core$IMeta$ = true;
domina.t15791.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15796 = this;
return this__15796.__meta;
});
domina.t15791.prototype.cljs$core$IWithMeta$ = true;
domina.t15791.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15800 = this;
return (new domina.t15791(this__15800.class_name,this__15800.by_class,__meta));
});
domina.t15791;
} else
{}
return (new domina.t15791(class_name,by_class,null));
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
return cljs.core.map.call(null,(function (p1__15803_SHARP_){
return p1__15803_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__15813_SHARP_,p2__15814_SHARP_){
return goog.dom.insertChildAt.call(null,p1__15813_SHARP_,p2__15814_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__15826_SHARP_,p2__15825_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__15825_SHARP_,p1__15826_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15835_SHARP_,p2__15834_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__15834_SHARP_,p1__15835_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__15841_SHARP_,p2__15840_SHARP_){
return goog.dom.replaceNode.call(null,p2__15840_SHARP_,p1__15841_SHARP_);
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
var s__15865 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__15865))))
{return s__15865;
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
var G__15873__15874 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15873__15874))
{var n__15875 = cljs.core.first.call(null,G__15873__15874);
var G__15873__15876 = G__15873__15874;

while(true){
goog.style.setStyle.call(null,n__15875,cljs.core.name.call(null,name),value);
var temp__3698__auto____15879 = cljs.core.next.call(null,G__15873__15876);

if(cljs.core.truth_(temp__3698__auto____15879))
{var G__15873__15881 = temp__3698__auto____15879;

{
var G__15895 = cljs.core.first.call(null,G__15873__15881);
var G__15896 = G__15873__15881;
n__15875 = G__15895;
G__15873__15876 = G__15896;
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
var G__15900__15903 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__15900__15903))
{var n__15904 = cljs.core.first.call(null,G__15900__15903);
var G__15900__15906 = G__15900__15903;

while(true){
n__15904.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____15909 = cljs.core.next.call(null,G__15900__15906);

if(cljs.core.truth_(temp__3698__auto____15909))
{var G__15900__15911 = temp__3698__auto____15909;

{
var G__15915 = cljs.core.first.call(null,G__15900__15911);
var G__15916 = G__15900__15911;
n__15904 = G__15915;
G__15900__15906 = G__15916;
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
var vec__15919__15920 = pair.split(/\s*:\s*/);
var k__15921 = cljs.core.nth.call(null,vec__15919__15920,0,null);
var v__15922 = cljs.core.nth.call(null,vec__15919__15920,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____15924 = k__15921;

if(cljs.core.truth_(and__3546__auto____15924))
{return v__15922;
} else
{return and__3546__auto____15924;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__15921.toLowerCase()),v__15922);
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
var node__15938 = domina.single_node.call(null,content);
var attrs__15940 = node__15938.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__15934_SHARP_){
var attr__15942 = attrs__15940.item(p1__15934_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__15942.nodeName.toLowerCase())],[attr__15942.nodeValue]);
}),cljs.core.range.call(null,attrs__15940.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__15947__15948 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__15947__15948))
{var G__15951__15953 = cljs.core.first.call(null,G__15947__15948);
var vec__15952__15954 = G__15951__15953;
var name__15955 = cljs.core.nth.call(null,vec__15952__15954,0,null);
var value__15956 = cljs.core.nth.call(null,vec__15952__15954,1,null);
var G__15947__15957 = G__15947__15948;

var G__15951__15958 = G__15951__15953;
var G__15947__15959 = G__15947__15957;

while(true){
var vec__15960__15961 = G__15951__15958;
var name__15962 = cljs.core.nth.call(null,vec__15960__15961,0,null);
var value__15963 = cljs.core.nth.call(null,vec__15960__15961,1,null);
var G__15947__15964 = G__15947__15959;

domina.set_style_BANG_.call(null,content,name__15962,value__15963);
var temp__3698__auto____15965 = cljs.core.next.call(null,G__15947__15964);

if(cljs.core.truth_(temp__3698__auto____15965))
{var G__15947__15969 = temp__3698__auto____15965;

{
var G__15981 = cljs.core.first.call(null,G__15947__15969);
var G__15982 = G__15947__15969;
G__15951__15958 = G__15981;
G__15947__15959 = G__15982;
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
var G__15983__15984 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__15983__15984))
{var G__15988__15990 = cljs.core.first.call(null,G__15983__15984);
var vec__15989__15991 = G__15988__15990;
var name__15992 = cljs.core.nth.call(null,vec__15989__15991,0,null);
var value__15993 = cljs.core.nth.call(null,vec__15989__15991,1,null);
var G__15983__15994 = G__15983__15984;

var G__15988__15996 = G__15988__15990;
var G__15983__15997 = G__15983__15994;

while(true){
var vec__15998__16000 = G__15988__15996;
var name__16002 = cljs.core.nth.call(null,vec__15998__16000,0,null);
var value__16004 = cljs.core.nth.call(null,vec__15998__16000,1,null);
var G__15983__16005 = G__15983__15997;

domina.set_attr_BANG_.call(null,content,name__16002,value__16004);
var temp__3698__auto____16007 = cljs.core.next.call(null,G__15983__16005);

if(cljs.core.truth_(temp__3698__auto____16007))
{var G__15983__16008 = temp__3698__auto____16007;

{
var G__16009 = cljs.core.first.call(null,G__15983__16008);
var G__16010 = G__15983__16008;
G__15988__15996 = G__16009;
G__15983__15997 = G__16010;
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
var G__16188__16190 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16188__16190))
{var node__16191 = cljs.core.first.call(null,G__16188__16190);
var G__16188__16192 = G__16188__16190;

while(true){
goog.dom.classes.add.call(null,node__16191,class$);
var temp__3698__auto____16194 = cljs.core.next.call(null,G__16188__16192);

if(cljs.core.truth_(temp__3698__auto____16194))
{var G__16188__16195 = temp__3698__auto____16194;

{
var G__16199 = cljs.core.first.call(null,G__16188__16195);
var G__16200 = G__16188__16195;
node__16191 = G__16199;
G__16188__16192 = G__16200;
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
var G__16201__16202 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16201__16202))
{var node__16203 = cljs.core.first.call(null,G__16201__16202);
var G__16201__16204 = G__16201__16202;

while(true){
goog.dom.classes.remove.call(null,node__16203,class$);
var temp__3698__auto____16209 = cljs.core.next.call(null,G__16201__16204);

if(cljs.core.truth_(temp__3698__auto____16209))
{var G__16201__16210 = temp__3698__auto____16209;

{
var G__16211 = cljs.core.first.call(null,G__16201__16210);
var G__16212 = G__16201__16210;
node__16203 = G__16211;
G__16201__16204 = G__16212;
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
var text__16218 = (function (content){
return text.call(null,content,true);
});
var text__16219 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.string.trim.call(null,goog.dom.getTextContent.call(null,domina.single_node.call(null,content)));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__16218.call(this,content);
case  2 :
return text__16219.call(this,content,normalize);
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
var G__16221__16222 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16221__16222))
{var node__16223 = cljs.core.first.call(null,G__16221__16222);
var G__16221__16224 = G__16221__16222;

while(true){
goog.dom.setTextContent.call(null,node__16223,value);
var temp__3698__auto____16225 = cljs.core.next.call(null,G__16221__16224);

if(cljs.core.truth_(temp__3698__auto____16225))
{var G__16221__16226 = temp__3698__auto____16225;

{
var G__16227 = cljs.core.first.call(null,G__16221__16226);
var G__16228 = G__16221__16226;
node__16223 = G__16227;
G__16221__16224 = G__16228;
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
var G__16235 = cljs.core.first.call(null,G__16229__16234);
var G__16236 = G__16229__16234;
node__16231 = G__16235;
G__16229__16232 = G__16236;
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
var G__16246__16247 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__16246__16247))
{var node__16248 = cljs.core.first.call(null,G__16246__16247);
var G__16246__16249 = G__16246__16247;

while(true){
node__16248.innerHTML = value;
var temp__3698__auto____16250 = cljs.core.next.call(null,G__16246__16249);

if(cljs.core.truth_(temp__3698__auto____16250))
{var G__16246__16251 = temp__3698__auto____16250;

{
var G__16258 = cljs.core.first.call(null,G__16246__16251);
var G__16259 = G__16246__16251;
node__16248 = G__16258;
G__16246__16249 = G__16259;
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
var parents__16272 = domina.nodes.call(null,parent_content);
var children__16274 = domina.nodes.call(null,child_content);
var first_child__16286 = (function (){var frag__16276 = document.createDocumentFragment();

var G__16277__16279 = cljs.core.seq.call(null,children__16274);

if(cljs.core.truth_(G__16277__16279))
{var child__16281 = cljs.core.first.call(null,G__16277__16279);
var G__16277__16282 = G__16277__16279;

while(true){
frag__16276.appendChild(child__16281);
var temp__3698__auto____16284 = cljs.core.next.call(null,G__16277__16282);

if(cljs.core.truth_(temp__3698__auto____16284))
{var G__16277__16285 = temp__3698__auto____16284;

{
var G__16291 = cljs.core.first.call(null,G__16277__16285);
var G__16292 = G__16277__16285;
child__16281 = G__16291;
G__16277__16282 = G__16292;
continue;
}
} else
{}
break;
}
} else
{}
return frag__16276;
})();
var other_children__16287 = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents__16272) - 1),(function (){
return first_child__16286.cloneNode(true);
})));

if(cljs.core.truth_(cljs.core.seq.call(null,parents__16272)))
{f.call(null,cljs.core.first.call(null,parents__16272),first_child__16286);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16241_SHARP_,p2__16243_SHARP_){
return f.call(null,p1__16241_SHARP_,p2__16243_SHARP_);
}),cljs.core.rest.call(null,parents__16272),other_children__16287));
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__16296 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__16297 = (function (nl,n){
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
return lazy_nodelist__16296.call(this,nl);
case  2 :
return lazy_nodelist__16297.call(this,nl,n);
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
var inner_wrapper__16308 = (cljs.core.truth_(cljs.core._EQ_.call(null,table_level,"tr"))?cljs.core.first.call(null,goog.dom.getElementsByTagNameAndClass.call(null,"tbody",null,wrapper)):wrapper);
var children__16309 = cljs.core.seq.call(null,goog.dom.getChildren.call(null,inner_wrapper__16308));

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,children__16309),1)))
{return inner_wrapper__16308.removeChild(goog.dom.getFirstElementChild.call(null,inner_wrapper__16308));
} else
{return children__16309;
}
});
domina.string_to_dom = (function string_to_dom(content){
var vec__16320__16324 = cljs.core.re_find.call(null,/^<(t(head|body|foot|[rhd]))/,content);
var ___16327 = cljs.core.nth.call(null,vec__16320__16324,0,null);
var table_level__16329 = cljs.core.nth.call(null,vec__16320__16324,1,null);
var ___16330 = cljs.core.nthnext.call(null,vec__16320__16324,2);
var wrapper__16332 = domina.create_wrapper.call(null,table_level__16329);

domina.set_wrapper_html_BANG_.call(null,wrapper__16332,content);
return domina.extract_wrapper_dom.call(null,wrapper__16332,table_level__16329);
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6741__auto____16338 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16340 = x__6741__auto____16338;

if(cljs.core.truth_(and__3546__auto____16340))
{var and__3546__auto____16342 = x__6741__auto____16338.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16342))
{var and__3546__auto____16344 = x__6741__auto____16338.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16344))
{return cljs.core.not.call(null,x__6741__auto____16338.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16344;
}
} else
{return and__3546__auto____16342;
}
} else
{return and__3546__auto____16340;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6741__auto____16338);
}
})()))
{return cljs.core.seq.call(null,content);
} else
{return cljs.core.cons.call(null,content);
}
}));
(domina.single_node["_"] = (function (content){
if(cljs.core.truth_((function (){var x__6741__auto____16346 = content;

if(cljs.core.truth_((function (){var and__3546__auto____16348 = x__6741__auto____16346;

if(cljs.core.truth_(and__3546__auto____16348))
{var and__3546__auto____16362 = x__6741__auto____16346.cljs$core$ISeqable$;

if(cljs.core.truth_(and__3546__auto____16362))
{var and__3546__auto____16363 = x__6741__auto____16346.hasOwnProperty;

if(cljs.core.truth_(and__3546__auto____16363))
{return cljs.core.not.call(null,x__6741__auto____16346.hasOwnProperty("cljs$core$ISeqable$"));
} else
{return and__3546__auto____16363;
}
} else
{return and__3546__auto____16362;
}
} else
{return and__3546__auto____16348;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeqable,x__6741__auto____16346);
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
var G__16391 = null;
var G__16391__16392 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16391__16393 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16391 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16391__16392.call(this,nodelist,n);
case  3 :
return G__16391__16393.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16391;
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
var G__16407 = null;
var G__16407__16408 = (function (nodelist,n){
return nodelist.item(n);
});
var G__16407__16409 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__16407 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__16407__16408.call(this,nodelist,n);
case  3 :
return G__16407__16409.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16407;
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
var G__16427 = null;
var G__16427__16428 = (function (coll,n){
return coll.item(n);
});
var G__16427__16430 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__16427 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__16427__16428.call(this,coll,n);
case  3 :
return G__16427__16430.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__16427;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
} else
{}
