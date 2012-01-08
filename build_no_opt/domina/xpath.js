goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__2436 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____2437 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____2437))
{return doc__2436.setProperty;
} else
{return and__3546__auto____2437;
}
})()))
{doc__2436.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_((function (){var and__3546__auto____2438 = doc__2436.createNSResolver;

if(cljs.core.truth_(and__3546__auto____2438))
{return doc__2436.evaluate;
} else
{return and__3546__auto____2438;
}
})()))
{var resolver__2439 = doc__2436.createNSResolver(doc__2436.documentElement);

return technique_2.call(null,resolver__2439,doc__2436,node,path);
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new domina.xpath.Error("Could not find XPath support in this browser."));
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
var result__2440 = doc.evaluate(expr,node,resolver,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__2440.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__2441 = doc.evaluate(expr,node,resolver,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__2442 = result__2441.snapshotLength;

var i__2443 = 0;
var acc__2444 = null;

while(true){
if(cljs.core.truth_((i__2443 < num_results__2442)))
{{
var G__2445 = (i__2443 + 1);
var G__2446 = cljs.core.cons.call(null,result__2441.snapshotItem(i__2443),acc__2444);
i__2443 = G__2445;
acc__2444 = G__2446;
continue;
}
} else
{return acc__2444;
}
break;
}
}));
});
domina.xpath.html_root = (function html_root(){
return goog.dom.getElementsByTagNameAndClass.call(null,"html");
});
/**
* Returns content based on an xpath expression. Takes an optional content as a base; if none is given, uses js/document as a base.
*/
domina.xpath.xpath = (function() {
var xpath = null;
var xpath__2450 = (function (expr){
return xpath.call(null,domina.xpath.html_root.call(null),expr);
});
var xpath__2451 = (function (base,expr){
if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,domina.xpath.t2447)))
{
/**
* @constructor
*/
domina.xpath.t2447 = (function (expr,base,xpath){
this.expr = expr;
this.base = base;
this.xpath = xpath;
})
domina.xpath.t2447.prototype.domina$DomContent$ = true;
domina.xpath.t2447.prototype.domina$DomContent$nodes = (function (_){
var this__2448 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__2448.expr),domina.nodes.call(null,this__2448.base));
});
domina.xpath.t2447.prototype.domina$DomContent$single_node = (function (_){
var this__2449 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__2449.expr),domina.nodes.call(null,this__2449.base))));
});
} else
{}
return (new domina.xpath.t2447(expr,base,xpath));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__2450.call(this,base);
case  2 :
return xpath__2451.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
