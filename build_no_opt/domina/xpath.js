goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__15831 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____15832 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____15832))
{return doc__15831.setProperty;
} else
{return and__3546__auto____15832;
}
})()))
{doc__15831.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__15831.evaluate))
{return technique_2.call(null,null,doc__15831,node,path);
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
var result__15836 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__15836.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__15838 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__15839 = result__15838.snapshotLength;

var i__15840 = 0;
var acc__15841 = null;

while(true){
if(cljs.core.truth_((i__15840 < num_results__15839)))
{{
var G__15843 = (i__15840 + 1);
var G__15844 = cljs.core.cons.call(null,result__15838.snapshotItem(i__15840),acc__15841);
i__15840 = G__15843;
acc__15841 = G__15844;
continue;
}
} else
{return acc__15841;
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
var xpath__15869 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__15870 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t15845)))
{
/**
* @constructor
*/
domina.xpath.t15845 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t15845.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t15845");
});
domina.xpath.t15845.prototype.domina$DomContent$ = true;
domina.xpath.t15845.prototype.domina$DomContent$nodes = (function (_){
var this__15846 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__15846.expr),domina.nodes.call(null,this__15846.base));
});
domina.xpath.t15845.prototype.domina$DomContent$single_node = (function (_){
var this__15849 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__15849.expr),domina.nodes.call(null,this__15849.base))));
});
domina.xpath.t15845.prototype.cljs$core$IMeta$ = true;
domina.xpath.t15845.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15865 = this;
return this__15865.__meta;
});
domina.xpath.t15845.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t15845.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15868 = this;
return (new domina.xpath.t15845(this__15868.expr,this__15868.base,this__15868.xpath,__meta));
});
domina.xpath.t15845;
} else
{}
return (new domina.xpath.t15845(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__15869.call(this,base);
case  2 :
return xpath__15870.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
