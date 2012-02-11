goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__15992 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____15993 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____15993))
{return doc__15992.setProperty;
} else
{return and__3546__auto____15993;
}
})()))
{doc__15992.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__15992.evaluate))
{return technique_2.call(null,null,doc__15992,node,path);
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error("Could not find XPath support in this browser."));
} else
{return null;
}
}
}
});
/**
* Selects a single node using an XPath expression and a root node
*/
domina.xpath.select_node = (function select_node(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectSingleNode(expr);
}),(function (resolver,doc,node,expr){
var result__15997 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__15997.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__16006 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__16007 = result__16006.snapshotLength;

var i__16010 = 0;
var acc__16011 = null;

while(true){
if(cljs.core.truth_((i__16010 < num_results__16007)))
{{
var G__16014 = (i__16010 + 1);
var G__16016 = cljs.core.cons.call(null,result__16006.snapshotItem(i__16010),acc__16011);
i__16010 = G__16014;
acc__16011 = G__16016;
continue;
}
} else
{return acc__16011;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass.call(null,"html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__16024 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__16025 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t16018)))
{
/**
* @constructor
*/
domina.xpath.t16018 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t16018.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t16018");
});
domina.xpath.t16018.prototype.domina$DomContent$ = true;
domina.xpath.t16018.prototype.domina$DomContent$nodes = (function (_){
var this__16019 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__16019.expr),domina.nodes.call(null,this__16019.base));
});
domina.xpath.t16018.prototype.domina$DomContent$single_node = (function (_){
var this__16020 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__16020.expr),domina.nodes.call(null,this__16020.base))));
});
domina.xpath.t16018.prototype.cljs$core$IMeta$ = true;
domina.xpath.t16018.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16021 = this;
return this__16021.__meta;
});
domina.xpath.t16018.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t16018.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16023 = this;
return (new domina.xpath.t16018(this__16023.expr,this__16023.base,this__16023.xpath,__meta));
});
domina.xpath.t16018;
} else
{}
return (new domina.xpath.t16018(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__16024.call(this,base);
case  2 :
return xpath__16025.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
