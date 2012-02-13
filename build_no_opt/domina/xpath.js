goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__15610 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____15611 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____15611))
{return doc__15610.setProperty;
} else
{return and__3546__auto____15611;
}
})()))
{doc__15610.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__15610.evaluate))
{return technique_2.call(null,null,doc__15610,node,path);
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
var result__15621 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__15621.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__15622 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__15623 = result__15622.snapshotLength;

var i__15624 = 0;
var acc__15625 = null;

while(true){
if(cljs.core.truth_((i__15624 < num_results__15623)))
{{
var G__15659 = (i__15624 + 1);
var G__15660 = cljs.core.cons.call(null,result__15622.snapshotItem(i__15624),acc__15625);
i__15624 = G__15659;
acc__15625 = G__15660;
continue;
}
} else
{return acc__15625;
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
var xpath__15681 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__15682 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t15670)))
{
/**
* @constructor
*/
domina.xpath.t15670 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t15670.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t15670");
});
domina.xpath.t15670.prototype.domina$DomContent$ = true;
domina.xpath.t15670.prototype.domina$DomContent$nodes = (function (_){
var this__15672 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__15672.expr),domina.nodes.call(null,this__15672.base));
});
domina.xpath.t15670.prototype.domina$DomContent$single_node = (function (_){
var this__15674 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__15674.expr),domina.nodes.call(null,this__15674.base))));
});
domina.xpath.t15670.prototype.cljs$core$IMeta$ = true;
domina.xpath.t15670.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15676 = this;
return this__15676.__meta;
});
domina.xpath.t15670.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t15670.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15678 = this;
return (new domina.xpath.t15670(this__15678.expr,this__15678.base,this__15678.xpath,__meta));
});
domina.xpath.t15670;
} else
{}
return (new domina.xpath.t15670(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__15681.call(this,base);
case  2 :
return xpath__15682.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
