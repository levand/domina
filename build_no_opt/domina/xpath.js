goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__16047 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____16049 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____16049))
{return doc__16047.setProperty;
} else
{return and__3546__auto____16049;
}
})()))
{doc__16047.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__16047.evaluate))
{return technique_2.call(null,null,doc__16047,node,path);
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
var result__16071 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__16071.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__16078 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__16080 = result__16078.snapshotLength;

var i__16081 = 0;
var acc__16083 = null;

while(true){
if(cljs.core.truth_((i__16081 < num_results__16080)))
{{
var G__16105 = (i__16081 + 1);
var G__16106 = cljs.core.cons.call(null,result__16078.snapshotItem(i__16081),acc__16083);
i__16081 = G__16105;
acc__16083 = G__16106;
continue;
}
} else
{return acc__16083;
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
var xpath__16211 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__16212 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t16135)))
{
/**
* @constructor
*/
domina.xpath.t16135 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t16135.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t16135");
});
domina.xpath.t16135.prototype.domina$DomContent$ = true;
domina.xpath.t16135.prototype.domina$DomContent$nodes = (function (_){
var this__16150 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__16150.expr),domina.nodes.call(null,this__16150.base));
});
domina.xpath.t16135.prototype.domina$DomContent$single_node = (function (_){
var this__16151 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__16151.expr),domina.nodes.call(null,this__16151.base))));
});
domina.xpath.t16135.prototype.cljs$core$IMeta$ = true;
domina.xpath.t16135.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16152 = this;
return this__16152.__meta;
});
domina.xpath.t16135.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t16135.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16201 = this;
return (new domina.xpath.t16135(this__16201.expr,this__16201.base,this__16201.xpath,__meta));
});
domina.xpath.t16135;
} else
{}
return (new domina.xpath.t16135(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__16211.call(this,base);
case  2 :
return xpath__16212.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
