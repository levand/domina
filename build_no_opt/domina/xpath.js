goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('cybozu.xpath');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__2642 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____2643 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____2643))
{return doc__2642.setProperty;
} else
{return and__3546__auto____2643;
}
})()))
{doc__2642.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__2642.evaluate))
{return technique_2.call(null,null,doc__2642,node,path);
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
var result__2644 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__2644.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__2645 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__2646 = result__2645.snapshotLength;

var i__2647 = 0;
var acc__2648 = null;

while(true){
if(cljs.core.truth_((i__2647 < num_results__2646)))
{{
var G__2649 = (i__2647 + 1);
var G__2650 = cljs.core.cons.call(null,result__2645.snapshotItem(i__2647),acc__2648);
i__2647 = G__2649;
acc__2648 = G__2650;
continue;
}
} else
{return acc__2648;
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
var xpath__2654 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__2655 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.xpath.t2651)))
{
/**
* @constructor
*/
domina.xpath.t2651 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.xpath.t2651.prototype.domina$DomContent$ = true;
domina.xpath.t2651.prototype.domina$DomContent$nodes = (function (_){
var this__2652 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__2652.expr),domina.nodes.call(null,this__2652.base));
});
domina.xpath.t2651.prototype.domina$DomContent$single_node = (function (_){
var this__2653 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__2653.expr),domina.nodes.call(null,this__2653.base))));
});
} else
{}
return (new domina.xpath.t2651(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__2654.call(this,base);
case  2 :
return xpath__2655.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
