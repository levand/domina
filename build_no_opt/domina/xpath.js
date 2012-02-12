goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__16006 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____16012 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____16012))
{return doc__16006.setProperty;
} else
{return and__3546__auto____16012;
}
})()))
{doc__16006.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__16006.evaluate))
{return technique_2.call(null,null,doc__16006,node,path);
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
var result__16033 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__16033.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__16038 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__16041 = result__16038.snapshotLength;

var i__16043 = 0;
var acc__16044 = null;

while(true){
if(cljs.core.truth_((i__16043 < num_results__16041)))
{{
var G__16055 = (i__16043 + 1);
var G__16056 = cljs.core.cons.call(null,result__16038.snapshotItem(i__16043),acc__16044);
i__16043 = G__16055;
acc__16044 = G__16056;
continue;
}
} else
{return acc__16044;
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
var xpath__16080 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__16082 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t16058)))
{
/**
* @constructor
*/
domina.xpath.t16058 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t16058.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t16058");
});
domina.xpath.t16058.prototype.domina$DomContent$ = true;
domina.xpath.t16058.prototype.domina$DomContent$nodes = (function (_){
var this__16065 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__16065.expr),domina.nodes.call(null,this__16065.base));
});
domina.xpath.t16058.prototype.domina$DomContent$single_node = (function (_){
var this__16068 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__16068.expr),domina.nodes.call(null,this__16068.base))));
});
domina.xpath.t16058.prototype.cljs$core$IMeta$ = true;
domina.xpath.t16058.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16077 = this;
return this__16077.__meta;
});
domina.xpath.t16058.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t16058.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16078 = this;
return (new domina.xpath.t16058(this__16078.expr,this__16078.base,this__16078.xpath,__meta));
});
domina.xpath.t16058;
} else
{}
return (new domina.xpath.t16058(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__16080.call(this,base);
case  2 :
return xpath__16082.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
