goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__14907 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____14908 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____14908))
{return doc__14907.setProperty;
} else
{return and__3546__auto____14908;
}
})()))
{doc__14907.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__14907.evaluate))
{return technique_2.call(null,null,doc__14907,node,path);
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
var result__14909 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__14909.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__14923 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__14925 = result__14923.snapshotLength;

var i__14927 = 0;
var acc__14928 = null;

while(true){
if(cljs.core.truth_((i__14927 < num_results__14925)))
{{
var G__14932 = (i__14927 + 1);
var G__14933 = cljs.core.cons.call(null,result__14923.snapshotItem(i__14927),acc__14928);
i__14927 = G__14932;
acc__14928 = G__14933;
continue;
}
} else
{return acc__14928;
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
var xpath__14947 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__14948 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t14935)))
{
/**
* @constructor
*/
domina.xpath.t14935 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t14935.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t14935");
});
domina.xpath.t14935.prototype.domina$DomContent$ = true;
domina.xpath.t14935.prototype.domina$DomContent$nodes = (function (_){
var this__14942 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__14942.expr),domina.nodes.call(null,this__14942.base));
});
domina.xpath.t14935.prototype.domina$DomContent$single_node = (function (_){
var this__14943 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__14943.expr),domina.nodes.call(null,this__14943.base))));
});
domina.xpath.t14935.prototype.cljs$core$IMeta$ = true;
domina.xpath.t14935.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14944 = this;
return this__14944.__meta;
});
domina.xpath.t14935.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t14935.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14945 = this;
return (new domina.xpath.t14935(this__14945.expr,this__14945.base,this__14945.xpath,__meta));
});
domina.xpath.t14935;
} else
{}
return (new domina.xpath.t14935(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__14947.call(this,base);
case  2 :
return xpath__14948.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
