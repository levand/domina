goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__20580 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____20585 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____20585))
{return doc__20580.setProperty;
} else
{return and__3546__auto____20585;
}
})()))
{doc__20580.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__20580.evaluate))
{return technique_2.call(null,null,doc__20580,node,path);
} else
{if(("\uFDD0'else"))
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
return domina.xpath.select_node_STAR_(expr,node,(function (node,expr){
return node.selectSingleNode(expr);
}),(function (resolver,doc,node,expr){
var result__20602 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__20602.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_(expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__20609 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__20610 = result__20609.snapshotLength;

var i__20612 = 0;
var acc__20613 = null;

while(true){
if(((i__20612 < num_results__20610)))
{{
var G__20624 = (i__20612 + 1);
var G__20625 = cljs.core.cons(result__20609.snapshotItem(i__20612),acc__20613);
i__20612 = G__20624;
acc__20613 = G__20625;
continue;
}
} else
{return acc__20613;
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
var xpath__1 = (function (expr){
return xpath.call(null,domina.xpath.root_element(),expr);
});
var xpath__2 = (function (base,expr){
if(((void 0 === domina.xpath.t20649)))
{
/**
* @constructor
*/
domina.xpath.t20649 = (function (expr,base,xpath,__meta__321__auto__){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta__321__auto__ = __meta__321__auto__;
})
domina.xpath.t20649.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("domina.xpath.t20649");
});
domina.xpath.t20649.prototype.domina$DomContent$ = true;
domina.xpath.t20649.prototype.domina$DomContent$nodes__1 = (function (_){
var this__20660 = this;
return cljs.core.mapcat.__2(cljs.core.partial.__2(domina.xpath.select_nodes,this__20660.expr),domina.nodes(this__20660.base));
});
domina.xpath.t20649.prototype.domina$DomContent$single_node__1 = (function (_){
var this__20663 = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.__2(cljs.core.partial.__2(domina.xpath.select_node,this__20663.expr),domina.nodes(this__20663.base))));
});
domina.xpath.t20649.prototype.cljs$core$IMeta$ = true;
domina.xpath.t20649.prototype.cljs$core$IMeta$_meta__1 = (function (___322__auto__){
var this__20681 = this;
return this__20681.__meta__321__auto__;
});
domina.xpath.t20649.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t20649.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (___322__auto__,__meta__321__auto__){
var this__20694 = this;
return (new domina.xpath.t20649(this__20694.expr,this__20694.base,this__20694.xpath,__meta__321__auto__));
});
domina.xpath.t20649;
} else
{}
return (new domina.xpath.t20649(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__1.call(this,base);
case  2 :
return xpath__2.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
xpath.__1 = xpath__1;
xpath.__2 = xpath__2;
return xpath;
})()
;
