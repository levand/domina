goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__15746 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____15757 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____15757))
{return doc__15746.setProperty;
} else
{return and__3546__auto____15757;
}
})()))
{doc__15746.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__15746.evaluate))
{return technique_2.call(null,null,doc__15746,node,path);
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
var result__15765 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__15765.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__15771 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__15773 = result__15771.snapshotLength;

var i__15774 = 0;
var acc__15776 = null;

while(true){
if(cljs.core.truth_((i__15774 < num_results__15773)))
{{
var G__15778 = (i__15774 + 1);
var G__15780 = cljs.core.cons.call(null,result__15771.snapshotItem(i__15774),acc__15776);
i__15774 = G__15778;
acc__15776 = G__15780;
continue;
}
} else
{return acc__15776;
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
var xpath__15793 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__15794 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t15784)))
{
/**
* @constructor
*/
domina.xpath.t15784 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t15784.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t15784");
});
domina.xpath.t15784.prototype.domina$DomContent$ = true;
domina.xpath.t15784.prototype.domina$DomContent$nodes = (function (_){
var this__15785 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__15785.expr),domina.nodes.call(null,this__15785.base));
});
domina.xpath.t15784.prototype.domina$DomContent$single_node = (function (_){
var this__15788 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__15788.expr),domina.nodes.call(null,this__15788.base))));
});
domina.xpath.t15784.prototype.cljs$core$IMeta$ = true;
domina.xpath.t15784.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15790 = this;
return this__15790.__meta;
});
domina.xpath.t15784.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t15784.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15791 = this;
return (new domina.xpath.t15784(this__15791.expr,this__15791.base,this__15791.xpath,__meta));
});
domina.xpath.t15784;
} else
{}
return (new domina.xpath.t15784(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__15793.call(this,base);
case  2 :
return xpath__15794.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
