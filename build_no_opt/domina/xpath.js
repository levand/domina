goog.provide('domina.xpath');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
domina.xpath.select_node_STAR_ = (function select_node_STAR_(path,node,technique_1,technique_2){
var doc__15851 = goog.dom.getOwnerDocument.call(null,node);

if(cljs.core.truth_((function (){var and__3546__auto____15854 = node.selectSingleNode;

if(cljs.core.truth_(and__3546__auto____15854))
{return doc__15851.setProperty;
} else
{return and__3546__auto____15854;
}
})()))
{doc__15851.setProperty("SelectionLanguage","XPath");
return technique_1.call(null,node,path);
} else
{if(cljs.core.truth_(doc__15851.evaluate))
{return technique_2.call(null,null,doc__15851,node,path);
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
var result__15857 = doc.evaluate(expr,node,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);

return result__15857.singleNodeValue;
}));
});
/**
* Selects multiple nodes using an XPath expression and a root node
*/
domina.xpath.select_nodes = (function select_nodes(expr,node){
return domina.xpath.select_node_STAR_.call(null,expr,node,(function (node,expr){
return node.selectNodes(expr);
}),(function (resolver,doc,node,expr){
var result__15874 = doc.evaluate(expr,node,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
var num_results__15876 = result__15874.snapshotLength;

var i__15877 = 0;
var acc__15878 = null;

while(true){
if(cljs.core.truth_((i__15877 < num_results__15876)))
{{
var G__15882 = (i__15877 + 1);
var G__15883 = cljs.core.cons.call(null,result__15874.snapshotItem(i__15877),acc__15878);
i__15877 = G__15882;
acc__15878 = G__15883;
continue;
}
} else
{return acc__15878;
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
var xpath__15933 = (function (expr){
return xpath.call(null,domina.xpath.root_element.call(null),expr);
});
var xpath__15934 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.xpath.t15899)))
{
/**
* @constructor
*/
domina.xpath.t15899 = (function (expr,base,xpath,__meta){
this.expr = expr;
this.base = base;
this.xpath = xpath;
this.__meta = __meta;
})
domina.xpath.t15899.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.xpath.t15899");
});
domina.xpath.t15899.prototype.domina$DomContent$ = true;
domina.xpath.t15899.prototype.domina$DomContent$nodes = (function (_){
var this__15908 = this;
return cljs.core.mapcat.call(null,cljs.core.partial.call(null,domina.xpath.select_nodes,this__15908.expr),domina.nodes.call(null,this__15908.base));
});
domina.xpath.t15899.prototype.domina$DomContent$single_node = (function (_){
var this__15913 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,cljs.core.partial.call(null,domina.xpath.select_node,this__15913.expr),domina.nodes.call(null,this__15913.base))));
});
domina.xpath.t15899.prototype.cljs$core$IMeta$ = true;
domina.xpath.t15899.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15921 = this;
return this__15921.__meta;
});
domina.xpath.t15899.prototype.cljs$core$IWithMeta$ = true;
domina.xpath.t15899.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15927 = this;
return (new domina.xpath.t15899(this__15927.expr,this__15927.base,this__15927.xpath,__meta));
});
domina.xpath.t15899;
} else
{}
return (new domina.xpath.t15899(expr,base,xpath,null));
});
xpath = function(base,expr){
switch(arguments.length){
case  1 :
return xpath__15933.call(this,base);
case  2 :
return xpath__15934.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return xpath;
})()
;
