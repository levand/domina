goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('cybozu.xpath');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__2434 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____2435 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____2435))
{return doc__2434.setProperty;
} else
{return and__3546__auto____2435;
}
})()))
{doc__2434.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__2434.evaluate))
{return technique_2.call(null,null,doc__2434,node,path);
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
var result__2436 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__2436.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__2437 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__2438 = result__2437.snapshotLength;

var i__2439 = 0;
var acc__2440 = null;

while(true){
if(cljs.core.truth_((i__2439 < num_results__2438)))
{{
var G__2441 = (i__2439 + 1);
var G__2442 = cljs.core.cons.call(null,result__2437.snapshotItem(i__2439),acc__2440);
i__2439 = G__2441;
acc__2440 = G__2442;
continue;
}
} else
{return acc__2440;
}
break;
}
}));
});
domina.xpath.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass.call(null,"html")[0]);
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__2446 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__2447 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.xpath.t2443)))
{
/**
* @constructor
*/
domina.xpath.t2443 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.xpath.t2443.prototype.domina$DomContent$ = true;
domina.xpath.t2443.prototype.domina$DomContent$nodes = (function (_){
var this__2444 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__2444.expr),domina.nodes.call(null,this__2444.base));
});
domina.xpath.t2443.prototype.domina$DomContent$single_node = (function (_){
var this__2445 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__2445.expr),domina.nodes.call(null,this__2445.base))));
});
} else
{}
return (new domina.xpath.t2443(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__2446.call(this,base);
case  2 :
return xpath__2447.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
