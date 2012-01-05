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
if(cljs.core.truth_((function (){var and__3546__auto____4005 = content;

if(cljs.core.truth_(and__3546__auto____4005))
{return content.domina$DomContent$nodes;
} else
{return and__3546__auto____4005;
}
})()))
{return content.domina$DomContent$nodes(content);
} else
{return (function (){var or__3548__auto____4006 = (domina.nodes[goog.typeOf.call(null,content)]);

if(cljs.core.truth_(or__3548__auto____4006))
{return or__3548__auto____4006;
} else
{var or__3548__auto____4007 = (domina.nodes["_"]);

if(cljs.core.truth_(or__3548__auto____4007))
{return or__3548__auto____4007;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){
if(cljs.core.truth_((function (){var and__3546__auto____4008 = nodeseq;

if(cljs.core.truth_(and__3546__auto____4008))
{return nodeseq.domina$DomContent$single_node;
} else
{return and__3546__auto____4008;
}
})()))
{return nodeseq.domina$DomContent$single_node(nodeseq);
} else
{return (function (){var or__3548__auto____4009 = (domina.single_node[goog.typeOf.call(null,nodeseq)]);

if(cljs.core.truth_(or__3548__auto____4009))
{return or__3548__auto____4009;
} else
{var or__3548__auto____4010 = (domina.single_node["_"]);

if(cljs.core.truth_(or__3548__auto____4010))
{return or__3548__auto____4010;
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
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.t4011)))
{
/**
* @constructor
*/
domina.t4011 = (function (class_name,by_class){
this.class_name = class_name;
this.by_class = by_class;
})
domina.t4011.prototype.domina$DomContent$ = true;
domina.t4011.prototype.domina$DomContent$nodes = (function (_){
var this__4012 = this;
return goog.dom.getElementsByClass.call(null,cljs.core.name.call(null,this__4012.class_name));
});
domina.t4011.prototype.domina$DomContent$single_node = (function (_){
var this__4013 = this;
return goog.dom.getElementByClass.call(null,cljs.core.name.call(null,this__4013.class_name));
});
} else
{}
return (new domina.t4011(class_name,by_class));
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
return cljs.core.map.call(null,(function (p1__4014_SHARP_){
return p1__4014_SHARP_.cloneNode(true);
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
domina.apply_with_cloning.call(null,(function (p1__4015_SHARP_,p2__4016_SHARP_){
return goog.dom.insertChildAt.call(null,p1__4015_SHARP_,p2__4016_SHARP_,idx);
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
domina.apply_with_cloning.call(null,(function (p1__4018_SHARP_,p2__4017_SHARP_){
return goog.dom.insertSiblingBefore.call(null,p2__4017_SHARP_,p1__4018_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4020_SHARP_,p2__4019_SHARP_){
return goog.dom.insertSiblingAfter.call(null,p2__4019_SHARP_,p1__4020_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__4022_SHARP_,p2__4021_SHARP_){
return goog.dom.replaceNode.call(null,p2__4021_SHARP_,p1__4022_SHARP_);
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
var s__4023 = goog.style.getStyle.call(null,domina.single_node.call(null,content),cljs.core.name.call(null,name));

if(cljs.core.truth_(cljs.core.not.call(null,goog.string.isEmptySafe.call(null,s__4023))))
{return s__4023;
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
var G__4024__4025 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4024__4025))
{var n__4026 = cljs.core.first.call(null,G__4024__4025);
var G__4024__4027 = G__4024__4025;

while(true){
goog.style.setStyle.call(null,n__4026,cljs.core.name.call(null,name),value);
var temp__3698__auto____4028 = cljs.core.next.call(null,G__4024__4027);

if(cljs.core.truth_(temp__3698__auto____4028))
{var G__4024__4029 = temp__3698__auto____4028;

{
var G__4030 = cljs.core.first.call(null,G__4024__4029);
var G__4031 = G__4024__4029;
n__4026 = G__4030;
G__4024__4027 = G__4031;
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
var G__4032__4033 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4032__4033))
{var n__4034 = cljs.core.first.call(null,G__4032__4033);
var G__4032__4035 = G__4032__4033;

while(true){
n__4034.setAttribute(cljs.core.name.call(null,name),value);
var temp__3698__auto____4036 = cljs.core.next.call(null,G__4032__4035);

if(cljs.core.truth_(temp__3698__auto____4036))
{var G__4032__4037 = temp__3698__auto____4036;

{
var G__4038 = cljs.core.first.call(null,G__4032__4037);
var G__4039 = G__4032__4037;
n__4034 = G__4038;
G__4032__4035 = G__4039;
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
var vec__4040__4041 = pair.split(/\s*:\s*/);
var k__4042 = cljs.core.nth.call(null,vec__4040__4041,0,null);
var v__4043 = cljs.core.nth.call(null,vec__4040__4041,1,null);

if(cljs.core.truth_((function (){var and__3546__auto____4044 = k__4042;

if(cljs.core.truth_(and__3546__auto____4044))
{return v__4043;
} else
{return and__3546__auto____4044;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k__4042.toLowerCase()),v__4043);
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
var node__4046 = domina.single_node.call(null,content);
var attrs__4047 = node__4046.attributes;

return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.map.call(null,(function (p1__4045_SHARP_){
var attr__4048 = attrs__4047.item(p1__4045_SHARP_);

return cljs.core.HashMap.fromArrays([cljs.core.keyword.call(null,attr__4048.nodeName.toLowerCase())],[attr__4048.nodeValue]);
}),cljs.core.range.call(null,attrs__4047.length)));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){
var G__4049__4050 = cljs.core.seq.call(null,styles);

if(cljs.core.truth_(G__4049__4050))
{var G__4052__4054 = cljs.core.first.call(null,G__4049__4050);
var vec__4053__4055 = G__4052__4054;
var name__4056 = cljs.core.nth.call(null,vec__4053__4055,0,null);
var value__4057 = cljs.core.nth.call(null,vec__4053__4055,1,null);
var G__4049__4058 = G__4049__4050;

var G__4052__4059 = G__4052__4054;
var G__4049__4060 = G__4049__4058;

while(true){
var vec__4061__4062 = G__4052__4059;
var name__4063 = cljs.core.nth.call(null,vec__4061__4062,0,null);
var value__4064 = cljs.core.nth.call(null,vec__4061__4062,1,null);
var G__4049__4065 = G__4049__4060;

domina.set_style_BANG_.call(null,content,name__4063,value__4064);
var temp__3698__auto____4066 = cljs.core.next.call(null,G__4049__4065);

if(cljs.core.truth_(temp__3698__auto____4066))
{var G__4049__4067 = temp__3698__auto____4066;

{
var G__4068 = cljs.core.first.call(null,G__4049__4067);
var G__4069 = G__4049__4067;
G__4052__4059 = G__4068;
G__4049__4060 = G__4069;
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
var G__4070__4071 = cljs.core.seq.call(null,attrs);

if(cljs.core.truth_(G__4070__4071))
{var G__4073__4075 = cljs.core.first.call(null,G__4070__4071);
var vec__4074__4076 = G__4073__4075;
var name__4077 = cljs.core.nth.call(null,vec__4074__4076,0,null);
var value__4078 = cljs.core.nth.call(null,vec__4074__4076,1,null);
var G__4070__4079 = G__4070__4071;

var G__4073__4080 = G__4073__4075;
var G__4070__4081 = G__4070__4079;

while(true){
var vec__4082__4083 = G__4073__4080;
var name__4084 = cljs.core.nth.call(null,vec__4082__4083,0,null);
var value__4085 = cljs.core.nth.call(null,vec__4082__4083,1,null);
var G__4070__4086 = G__4070__4081;

domina.set_attr_BANG_.call(null,content,name__4084,value__4085);
var temp__3698__auto____4087 = cljs.core.next.call(null,G__4070__4086);

if(cljs.core.truth_(temp__3698__auto____4087))
{var G__4070__4088 = temp__3698__auto____4087;

{
var G__4089 = cljs.core.first.call(null,G__4070__4088);
var G__4090 = G__4070__4088;
G__4073__4080 = G__4089;
G__4070__4081 = G__4090;
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
var G__4091__4092 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4091__4092))
{var node__4093 = cljs.core.first.call(null,G__4091__4092);
var G__4091__4094 = G__4091__4092;

while(true){
goog.dom.classes.add.call(null,node__4093,class$);
var temp__3698__auto____4095 = cljs.core.next.call(null,G__4091__4094);

if(cljs.core.truth_(temp__3698__auto____4095))
{var G__4091__4096 = temp__3698__auto____4095;

{
var G__4097 = cljs.core.first.call(null,G__4091__4096);
var G__4098 = G__4091__4096;
node__4093 = G__4097;
G__4091__4094 = G__4098;
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
var G__4099__4100 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4099__4100))
{var node__4101 = cljs.core.first.call(null,G__4099__4100);
var G__4099__4102 = G__4099__4100;

while(true){
goog.dom.classes.remove.call(null,node__4101,class$);
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
var text__4107 = (function (content){
return text.call(null,content,true);
});
var text__4108 = (function (content,normalize){
if(cljs.core.truth_(normalize))
{return goog.dom.getTextContent.call(null,domina.single_node.call(null,content));
} else
{return goog.dom.getRawTextContent.call(null,domina.single_node.call(null,content));
}
});
text = function(content,normalize){
switch(arguments.length){
case  1 :
return text__4107.call(this,content);
case  2 :
return text__4108.call(this,content,normalize);
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
var G__4110__4111 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4110__4111))
{var node__4112 = cljs.core.first.call(null,G__4110__4111);
var G__4110__4113 = G__4110__4111;

while(true){
goog.dom.setTextContent.call(null,node__4112,value);
var temp__3698__auto____4114 = cljs.core.next.call(null,G__4110__4113);

if(cljs.core.truth_(temp__3698__auto____4114))
{var G__4110__4115 = temp__3698__auto____4114;

{
var G__4116 = cljs.core.first.call(null,G__4110__4115);
var G__4117 = G__4110__4115;
node__4112 = G__4116;
G__4110__4113 = G__4117;
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
var G__4118__4119 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4118__4119))
{var node__4120 = cljs.core.first.call(null,G__4118__4119);
var G__4118__4121 = G__4118__4119;

while(true){
goog.dom.forms.setValue.call(null,node__4120,value);
var temp__3698__auto____4122 = cljs.core.next.call(null,G__4118__4121);

if(cljs.core.truth_(temp__3698__auto____4122))
{var G__4118__4123 = temp__3698__auto____4122;

{
var G__4124 = cljs.core.first.call(null,G__4118__4123);
var G__4125 = G__4118__4123;
node__4120 = G__4124;
G__4118__4121 = G__4125;
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
var G__4126__4127 = cljs.core.seq.call(null,domina.nodes.call(null,content));

if(cljs.core.truth_(G__4126__4127))
{var node__4128 = cljs.core.first.call(null,G__4126__4127);
var G__4126__4129 = G__4126__4127;

while(true){
node__4128.innerHTML = value;
var temp__3698__auto____4130 = cljs.core.next.call(null,G__4126__4129);

if(cljs.core.truth_(temp__3698__auto____4130))
{var G__4126__4131 = temp__3698__auto____4130;

{
var G__4132 = cljs.core.first.call(null,G__4126__4131);
var G__4133 = G__4126__4131;
node__4128 = G__4132;
G__4126__4129 = G__4133;
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
var parents__4134 = domina.nodes.call(null,parent_content);

if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,parents__4134))))
{var G__4135__4136 = cljs.core.seq.call(null,domina.nodes.call(null,child_content));

if(cljs.core.truth_(G__4135__4136))
{var child__4137 = cljs.core.first.call(null,G__4135__4136);
var G__4135__4138 = G__4135__4136;

while(true){
f.call(null,cljs.core.first.call(null,parents__4134),child__4137);
var temp__3698__auto____4139 = cljs.core.next.call(null,G__4135__4138);

if(cljs.core.truth_(temp__3698__auto____4139))
{var G__4135__4140 = temp__3698__auto____4139;

{
var G__4153 = cljs.core.first.call(null,G__4135__4140);
var G__4154 = G__4135__4140;
child__4137 = G__4153;
G__4135__4138 = G__4154;
continue;
}
} else
{}
break;
}
} else
{}
var G__4141__4143 = cljs.core.seq.call(null,cljs.core.rest.call(null,parents__4134));

if(cljs.core.truth_(G__4141__4143))
{var parent__4144 = cljs.core.first.call(null,G__4141__4143);
var G__4141__4145 = G__4141__4143;

while(true){
var G__4142__4146 = cljs.core.seq.call(null,domina.nodes.call(null,domina.clone.call(null,child_content)));

if(cljs.core.truth_(G__4142__4146))
{var child__4147 = cljs.core.first.call(null,G__4142__4146);
var G__4142__4148 = G__4142__4146;

while(true){
f.call(null,parent__4144,child__4147);
var temp__3698__auto____4149 = cljs.core.next.call(null,G__4142__4148);

if(cljs.core.truth_(temp__3698__auto____4149))
{var G__4142__4150 = temp__3698__auto____4149;

{
var G__4155 = cljs.core.first.call(null,G__4142__4150);
var G__4156 = G__4142__4150;
child__4147 = G__4155;
G__4142__4148 = G__4156;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____4151 = cljs.core.next.call(null,G__4141__4145);

if(cljs.core.truth_(temp__3698__auto____4151))
{var G__4141__4152 = temp__3698__auto____4151;

{
var G__4157 = cljs.core.first.call(null,G__4141__4152);
var G__4158 = G__4141__4152;
parent__4144 = G__4157;
G__4141__4145 = G__4158;
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
var lazy_nodelist__4159 = (function (nl){
return lazy_nodelist.call(null,nl,0);
});
var lazy_nodelist__4160 = (function (nl,n){
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
return lazy_nodelist__4159.call(this,nl);
case  2 :
return lazy_nodelist__4160.call(this,nl,n);
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
var G__4162 = null;
var G__4162__4163 = (function (nodelist,n){
return nodelist.item(n);
});
var G__4162__4164 = (function (nodelist,n,not_found){
if(cljs.core.truth_((nodelist.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist,n);
}
});
G__4162 = function(nodelist,n,not_found){
switch(arguments.length){
case  2 :
return G__4162__4163.call(this,nodelist,n);
case  3 :
return G__4162__4164.call(this,nodelist,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4162;
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
var G__4166 = null;
var G__4166__4167 = (function (coll,n){
return coll.item(n);
});
var G__4166__4168 = (function (coll,n,not_found){
if(cljs.core.truth_((coll.length <= n)))
{return not_found;
} else
{return cljs.core.nth.call(null,coll,n);
}
});
G__4166 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__4166__4167.call(this,coll,n);
case  3 :
return G__4166__4168.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__4166;
})()
;
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count = (function (coll){
return coll.length;
});
