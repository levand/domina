goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.xml');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
domina.DomContent = {};
domina.nodes = (function nodes(content){
if(cljs.core.truth_((function (){var and__3546__auto____3988 = content;

if(cljs.core.truth_(and__3546__auto____3988))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____3988;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____3989 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____3989))
{return or__3548__auto____3989;
} else
{var or__3548__auto____3990 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____3990))
{return or__3548__auto____3990;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____3991 = nodeseq;

if(cljs.core.truth_(and__3546__auto____3991))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____3991;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____3992 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____3992))
{return or__3548__auto____3992;
} else
{var or__3548__auto____3993 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____3993))
{return or__3548__auto____3993;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base.
*/
domina.xpath = (function() {
var xpath = null;
var xpath__3997 = (function (expr){
return xpath.call(null,document,expr);
});
var xpath__3998 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t3994)))
{
/**
* @constructor
*/
domina.t3994 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.t3994.prototype.domina$DomContent$ = true;
domina.t3994.prototype.domina$DomContent$nodes = (function (_){
var this__3995 = this;
return cljs.core.mapcat.call(null,(function (p1__3986_SHARP_){
return goog.dom.xml.selectNodes.call(null,p1__3986_SHARP_,this__3995.expr);
}),domina.nodes.call(null,this__3995.base));
});
domina.t3994.prototype.domina$DomContent$single_node = (function (_){
var this__3996 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__3987_SHARP_){
return goog.dom.xml.selectSingleNode.call(null,p1__3987_SHARP_,this__3996.expr);
}),domina.nodes.call(null,this__3996.base))));
});
} else
{}
return (new domina.t3994(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__3997.call(this,base);
case  2 :
return xpath__3998.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t4000)))
{
/**
* @constructor
*/
domina.t4000 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t4000.prototype.domina$DomContent$ = true;
domina.t4000.prototype.domina$DomContent$nodes = (function (_){
var this__4001 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__4001.class_name));
});
domina.t4000.prototype.domina$DomContent$single_node = (function (_){
var this__4002 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__4002.class_name));
});
} else
{}
return (new domina.t4000(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__4003_SHARP_){
return p1__4003_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__4004_SHARP_,p2__4005_SHARP_){
return goog.dom.insertChildAt.call(null,p1__4004_SHARP_,p2__4005_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__4007_SHARP_,p2__4006_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__4006_SHARP_,p1__4007_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4009_SHARP_,p2__4008_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__4008_SHARP_,p1__4009_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4011_SHARP_,p2__4010_SHARP_){
return goog.dom.replaceNode.call(null,p2__4010_SHARP_,p1__4011_SHARP_);
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
var s__4012 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__4012))))
{return s__4012;
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
var G__4013__4014 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4013__4014))
{var n__4015 = cljs.core.first.call(null,G__4013__4014);
var G__4013__4016 = G__4013__4014;

while(true){
goog.style.setStyle.call(null,n__4015,cljs.core.name.call(null,name),value);
var temp__3698__auto____4017 = cljs.core.next.call(null,G__4013__4016);

if(cljs.core.truth_(temp__3698__auto____4017))
{var G__4013__4018 = temp__3698__auto____4017;

{
var G__4019 = cljs.core.first.call(null,G__4013__4018);
var G__4020 = G__4013__4018;
n__4015 = G__4019;
G__4013__4016 = G__4020;
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
var G__4021__4022 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4021__4022))
{var n__4023 = cljs.core.first.call(null,G__4021__4022);
var G__4021__4024 = G__4021__4022;

while(true){
n__4023.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____4025 = cljs.core.next.call(null,G__4021__4024);

if(cljs.core.truth_(temp__3698__auto____4025))
{var G__4021__4026 = temp__3698__auto____4025;

{
var G__4027 = cljs.core.first.call(null,G__4021__4026);
var G__4028 = G__4021__4026;
n__4023 = G__4027;
G__4021__4024 = G__4028;
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
var vec__4029__4030 = pair.split(/\s*:\s*/);
var k__4031 = cljs.core.nth.call(null,vec__4029__4030,0,null);
var v__4032 = cljs.core.nth.call(null,vec__4029__4030,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____4033 = k__4031;

if(cljs.core.truth_(and__3546__auto____4033))
{return v__4032;
} else
{return and__3546__auto____4033;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__4031.toLowerCase()),v__4032);
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
var node__4035 = domina.single_node.call(null,content);
var attrs__4036 = node__4035.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__4034_SHARP_){
var attr__4037 = attrs__4036.item(p1__4034_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__4037.nodeName.toLowerCase())],[attr__4037.nodeValue]);
}),cljs.core.range.call(null,attrs__4036.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__4038__4039 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__4038__4039))
{var G__4041__4043 = cljs.core.first.call(null,G__4038__4039);
var vec__4042__4044 = G__4041__4043;
var name__4045 = cljs.core.nth.call(null,vec__4042__4044,0,null);
var value__4046 = cljs.core.nth.call(null,vec__4042__4044,1,null);
var G__4038__4047 = G__4038__4039;

var G__4041__4048 = G__4041__4043;
var G__4038__4049 = G__4038__4047;

while(true){
var vec__4050__4051 = G__4041__4048;
var name__4052 = cljs.core.nth.call(null,vec__4050__4051,0,null);
var value__4053 = cljs.core.nth.call(null,vec__4050__4051,1,null);
var G__4038__4054 = G__4038__4049;

domina.set_style_BANG_.call(null,content,name__4052,value__4053);
var temp__3698__auto____4055 = cljs.core.next.call(null,G__4038__4054);

if(cljs.core.truth_(temp__3698__auto____4055))
{var G__4038__4056 = temp__3698__auto____4055;

{
var G__4057 = cljs.core.first.call(null,G__4038__4056);
var G__4058 = G__4038__4056;
G__4041__4048 = G__4057;
G__4038__4049 = G__4058;
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
var G__4059__4060 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__4059__4060))
{var G__4062__4064 = cljs.core.first.call(null,G__4059__4060);
var vec__4063__4065 = G__4062__4064;
var name__4066 = cljs.core.nth.call(null,vec__4063__4065,0,null);
var value__4067 = cljs.core.nth.call(null,vec__4063__4065,1,null);
var G__4059__4068 = G__4059__4060;

var G__4062__4069 = G__4062__4064;
var G__4059__4070 = G__4059__4068;

while(true){
var vec__4071__4072 = G__4062__4069;
var name__4073 = cljs.core.nth.call(null,vec__4071__4072,0,null);
var value__4074 = cljs.core.nth.call(null,vec__4071__4072,1,null);
var G__4059__4075 = G__4059__4070;

domina.set_attr_BANG_.call(null,content,name__4073,value__4074);
var temp__3698__auto____4076 = cljs.core.next.call(null,G__4059__4075);

if(cljs.core.truth_(temp__3698__auto____4076))
{var G__4059__4077 = temp__3698__auto____4076;

{
var G__4078 = cljs.core.first.call(null,G__4059__4077);
var G__4079 = G__4059__4077;
G__4062__4069 = G__4078;
G__4059__4070 = G__4079;
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
var G__4080__4081 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4080__4081))
{var node__4082 = cljs.core.first.call(null,G__4080__4081);
var G__4080__4083 = G__4080__4081;

while(true){
goog.dom.classes.add.call(null,node__4082,class$);
var temp__3698__auto____4084 = cljs.core.next.call(null,G__4080__4083);

if(cljs.core.truth_(temp__3698__auto____4084))
{var G__4080__4085 = temp__3698__auto____4084;

{
var G__4086 = cljs.core.first.call(null,G__4080__4085);
var G__4087 = G__4080__4085;
node__4082 = G__4086;
G__4080__4083 = G__4087;
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
var G__4088__4089 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4088__4089))
{var node__4090 = cljs.core.first.call(null,G__4088__4089);
var G__4088__4091 = G__4088__4089;

while(true){
goog.dom.classes.remove.call(null,node__4090,class$);
var temp__3698__auto____4092 = cljs.core.next.call(null,G__4088__4091);

if(cljs.core.truth_(temp__3698__auto____4092))
{var G__4088__4093 = temp__3698__auto____4092;

{
var G__4094 = cljs.core.first.call(null,G__4088__4093);
var G__4095 = G__4088__4093;
node__4090 = G__4094;
G__4088__4091 = G__4095;
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
* Returns the text of a node. Assumes content is a single node. Optional 'normalize' paramter indicates whether to collapse whitespace and normalize line breaks (defaults to true). Does not return internal markup.
*/
domina.text = (function() {
var text = null;
var text__4096 = (function (content){
return text.call(null,content,true);
});
var text__4097 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.dom.getTextContent.call(null,domina.single_node.call(null,content));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__4096.call(this,content);
case  2 :
return text__4097.call(this,content,normalize);
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
var G__4099__4100 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4099__4100))
{var node__4101 = cljs.core.first.call(null,G__4099__4100);
var G__4099__4102 = G__4099__4100;

while(true){
goog.dom.setTextContent.call(null,node__4101,value);
var temp__3698__auto____4103 = cljs.core.next.call(null,G__4099__4102);

if(cljs.core.truth_(temp__3698__auto____4103))
{var G__4099__4104 = temp__3698__auto____4103;

{
var G__4105 = cljs.core.first.call(null,G__4099__4104);
var G__4106 = G__4099__4104;
node__4101 = G__4105;
G__4099__4102 = G__4106;
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
var G__4107__4108 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4107__4108))
{var node__4109 = cljs.core.first.call(null,G__4107__4108);
var G__4107__4110 = G__4107__4108;

while(true){
goog.dom.forms.setValue.call(null,node__4109,value);
var temp__3698__auto____4111 = cljs.core.next.call(null,G__4107__4110);

if(cljs.core.truth_(temp__3698__auto____4111))
{var G__4107__4112 = temp__3698__auto____4111;

{
var G__4113 = cljs.core.first.call(null,G__4107__4112);
var G__4114 = G__4107__4112;
node__4109 = G__4113;
G__4107__4110 = G__4114;
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
var G__4115__4116 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4115__4116))
{var node__4117 = cljs.core.first.call(null,G__4115__4116);
var G__4115__4118 = G__4115__4116;

while(true){
node__4117.innerHTML = value;
var temp__3698__auto____4119 = cljs.core.next.call(null,G__4115__4118);

if(cljs.core.truth_(temp__3698__auto____4119))
{var G__4115__4120 = temp__3698__auto____4119;

{
var G__4121 = cljs.core.first.call(null,G__4115__4120);
var G__4122 = G__4115__4120;
node__4117 = G__4121;
G__4115__4118 = G__4122;
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
* Takes a two-arg function, a reference DomContent and new DomContent. Applies the function for each reference / content combination. Uses clones of the new content for each additional parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){
var parents__4123 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__4123))))
{var G__4124__4125 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__4124__4125))
{var child__4126 = cljs.core.first.call(null,G__4124__4125);
var G__4124__4127 = G__4124__4125;

while(true){
f.call(null,cljs.core.first.call(null,parents__4123),child__4126);
var temp__3698__auto____4128 = cljs.core.next.call(null,G__4124__4127);

if(cljs.core.truth_(temp__3698__auto____4128))
{var G__4124__4129 = temp__3698__auto____4128;

{
var G__4142 = cljs.core.first.call(null,G__4124__4129);
var G__4143 = G__4124__4129;
child__4126 = G__4142;
G__4124__4127 = G__4143;
continue;
}
} else
{}
break;
}
} else
{}
var G__4130__4132 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__4123));

if(cljs.core.truth_(G__4130__4132))
{var parent__4133 = cljs.core.first.call(null,G__4130__4132);
var G__4130__4134 = G__4130__4132;

while(true){
var G__4131__4135 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__4131__4135))
{var child__4136 = cljs.core.first.call(null,G__4131__4135);
var G__4131__4137 = G__4131__4135;

while(true){
f.call(null,parent__4133,child__4136);
var temp__3698__auto____4138 = cljs.core.next.call(null,G__4131__4137);

if(cljs.core.truth_(temp__3698__auto____4138))
{var G__4131__4139 = temp__3698__auto____4138;

{
var G__4144 = cljs.core.first.call(null,G__4131__4139);
var G__4145 = G__4131__4139;
child__4136 = G__4144;
G__4131__4137 = G__4145;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4140 = cljs.core.next.call(null,G__4130__4134);

if(cljs.core.truth_(temp__3698__auto____4140))
{var G__4130__4141 = temp__3698__auto____4140;

{
var G__4146 = cljs.core.first.call(null,G__4130__4141);
var G__4147 = G__4130__4141;
parent__4133 = G__4146;
G__4130__4134 = G__4147;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
} else
{return null;
}
});
/**
* A lazy seq view of a js/NodeList
*/
domina.lazy_nodelist = (function() {
var lazy_nodelist = null;
var lazy_nodelist__4148 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__4149 = (function (nl,n){
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
return lazy_nodelist__4148.call(this,nl);
case  2 :
return lazy_nodelist__4149.call(this,nl,n);
}
throw('Invalid arity: ' + arguments.length);
};
return lazy_nodelist;
})()
;
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){
return cljs.core.seq.call(null,content);
}));
(domina.single_node["_"] = (function (content){
return cljs.core.first.call(null,content);
}));
Node.prototype.domina$DomContent$ = true;
Node.prototype.domina$DomContent$nodes = (function (content){
return cljs.core.cons.call(null,content);
});
Node.prototype.domina$DomContent$single_node = (function (content){
return content;
});
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){
return cljs.core.cons.call(null,goog.dom.htmlToDocumentFragment.call(null,s));
}));
(domina.single_node["string"] = (function (s){
return goog.dom.htmlToDocumentFragment.call(null,s);
}));
NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq = (function (nodelist){
return domina.lazy_nodelist.call(null,nodelist);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4151 = null;
var G__4151__4152 = (function (nodelist,n){
return nodelist.item(n);
});
var G__4151__4153 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__4151 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__4151__4152.call(this,nodelist,n);
case  3 :
return G__4151__4153.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4151;
})()
;
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count = (function (nodelist){
return nodelist.length;
});
HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq = (function (coll){
return domina.lazy_nodelist.call(null,coll);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth = (function() {
var G__4155 = null;
var G__4155__4156 = (function (coll,n){
return coll.item(n);
});
var G__4155__4157 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__4155 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4155__4156.call(this,coll,n);
case  3 :
return G__4155__4157.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4155;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
