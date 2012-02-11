goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__14722 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____14723 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____14723))
{return doc__14722.setProperty;
} else
{return and__3546__auto____14723;
}
})()))
{doc__14722.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__14722.evaluate))
{return technique_2.call(null,null,doc__14722,node,path);
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
var result__14731 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__14731.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__14741 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__14742 = result__14741.snapshotLength;

var i__14769 = 0;
var acc__14771 = null;

while(true){
if(cljs.core.truth_((i__14769 < num_results__14742)))
{{
var G__14774 = (i__14769 + 1);
var G__14775 = cljs.core.cons.call(null,result__14741.snapshotItem(i__14769),acc__14771);
i__14769 = G__14774;
acc__14771 = G__14775;
continue;
}
} else
{return acc__14771;
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
var xpath__14825 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__14826 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t14782)))
{
/**
* @constructor
*/
domina.xpath.t14782 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t14782.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t14782");
});
domina.xpath.t14782.prototype.domina$DomContent$ = true;
domina.xpath.t14782.prototype.domina$DomContent$nodes = (function (_){
var this__14816 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__14816.expr),domina.nodes.call(null,this__14816.base));
});
domina.xpath.t14782.prototype.domina$DomContent$single_node = (function (_){
var this__14817 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__14817.expr),domina.nodes.call(null,this__14817.base))));
});
domina.xpath.t14782.prototype.cljs$core$IMeta$ = true;
domina.xpath.t14782.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14821 = this;
return this__14821.__meta;
});
domina.xpath.t14782.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t14782.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14824 = this;
return (new domina.xpath.t14782(this__14824.expr,this__14824.base,this__14824.xpath,__meta));
});
domina.xpath.t14782;
} else
{}
return (new domina.xpath.t14782(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__14825.call(this,base);
case  2 :
return xpath__14826.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
