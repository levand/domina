goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function root_element(){
return (goog.dom.getElementsByTagNameAndClass.call(null,"html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__16935 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16936 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16930)))
{
/**
* @constructor
*/
domina.css.t16930 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16930.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16930");
});
domina.css.t16930.prototype.domina$DomContent$ = true;
domina.css.t16930.prototype.domina$DomContent$nodes = (function (_){
var this__16931 = this;
return cljs.core.mapcat.call(null,(function (p1__16928_SHARP_){
return goog.dom.query.call(null,this__16931.expr,p1__16928_SHARP_);
}),domina.nodes.call(null,this__16931.base));
});
domina.css.t16930.prototype.domina$DomContent$single_node = (function (_){
var this__16932 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16929_SHARP_){
return goog.dom.query.call(null,this__16932.expr,p1__16929_SHARP_);
}),domina.nodes.call(null,this__16932.base))));
});
domina.css.t16930.prototype.cljs$core$IMeta$ = true;
domina.css.t16930.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16933 = this;
return this__16933.__meta;
});
domina.css.t16930.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16930.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16934 = this;
return (new domina.css.t16930(this__16934.expr,this__16934.base,this__16934.sel,__meta));
});
domina.css.t16930;
} else
{}
return (new domina.css.t16930(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16935.call(this,base);
case  2 :
return sel__16936.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
