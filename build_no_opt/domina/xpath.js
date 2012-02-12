goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__15875 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____15876 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____15876))
{return doc__15875.setProperty;
} else
{return and__3546__auto____15876;
}
})()))
{doc__15875.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__15875.evaluate))
{return technique_2.call(null,null,doc__15875,node,path);
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
var result__15882 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__15882.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__15883 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__15884 = result__15883.snapshotLength;

var i__15885 = 0;
var acc__15886 = null;

while(true){
if(cljs.core.truth_((i__15885 < num_results__15884)))
{{
var G__15887 = (i__15885 + 1);
var G__15888 = cljs.core.cons.call(null,result__15883.snapshotItem(i__15885),acc__15886);
i__15885 = G__15887;
acc__15886 = G__15888;
continue;
}
} else
{return acc__15886;
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
var xpath__15912 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__15913 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t15889)))
{
/**
* @constructor
*/
domina.xpath.t15889 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t15889.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t15889");
});
domina.xpath.t15889.prototype.domina$DomContent$ = true;
domina.xpath.t15889.prototype.domina$DomContent$nodes = (function (_){
var this__15905 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__15905.expr),domina.nodes.call(null,this__15905.base));
});
domina.xpath.t15889.prototype.domina$DomContent$single_node = (function (_){
var this__15908 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__15908.expr),domina.nodes.call(null,this__15908.base))));
});
domina.xpath.t15889.prototype.cljs$core$IMeta$ = true;
domina.xpath.t15889.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15909 = this;
return this__15909.__meta;
});
domina.xpath.t15889.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t15889.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15910 = this;
return (new domina.xpath.t15889(this__15910.expr,this__15910.base,this__15910.xpath,__meta));
});
domina.xpath.t15889;
} else
{}
return (new domina.xpath.t15889(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__15912.call(this,base);
case  2 :
return xpath__15913.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
