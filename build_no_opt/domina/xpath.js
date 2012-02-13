goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__16026 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____16031 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____16031))
{return doc__16026.setProperty;
} else
{return and__3546__auto____16031;
}
})()))
{doc__16026.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__16026.evaluate))
{return technique_2.call(null,null,doc__16026,node,path);
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
var result__16058 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__16058.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__16065 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__16067 = result__16065.snapshotLength;

var i__16069 = 0;
var acc__16071 = null;

while(true){
if(cljs.core.truth_((i__16069 < num_results__16067)))
{{
var G__16090 = (i__16069 + 1);
var G__16091 = cljs.core.cons.call(null,result__16065.snapshotItem(i__16069),acc__16071);
i__16069 = G__16090;
acc__16071 = G__16091;
continue;
}
} else
{return acc__16071;
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
var xpath__16116 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__16117 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t16100)))
{
/**
* @constructor
*/
domina.xpath.t16100 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t16100.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t16100");
});
domina.xpath.t16100.prototype.domina$DomContent$ = true;
domina.xpath.t16100.prototype.domina$DomContent$nodes = (function (_){
var this__16109 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__16109.expr),domina.nodes.call(null,this__16109.base));
});
domina.xpath.t16100.prototype.domina$DomContent$single_node = (function (_){
var this__16110 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__16110.expr),domina.nodes.call(null,this__16110.base))));
});
domina.xpath.t16100.prototype.cljs$core$IMeta$ = true;
domina.xpath.t16100.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16113 = this;
return this__16113.__meta;
});
domina.xpath.t16100.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t16100.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16114 = this;
return (new domina.xpath.t16100(this__16114.expr,this__16114.base,this__16114.xpath,__meta));
});
domina.xpath.t16100;
} else
{}
return (new domina.xpath.t16100(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__16116.call(this,base);
case  2 :
return xpath__16117.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
