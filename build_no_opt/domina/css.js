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
var sel__16312 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16313 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16298)))
{
/**
* @constructor
*/
domina.css.t16298 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16298.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16298");
});
domina.css.t16298.prototype.domina$DomContent$ = true;
domina.css.t16298.prototype.domina$DomContent$nodes = (function (_){
var this__16307 = this;
return cljs.core.mapcat.call(null,(function (p1__16284_SHARP_){
return goog.dom.query.call(null,this__16307.expr,p1__16284_SHARP_);
}),domina.nodes.call(null,this__16307.base));
});
domina.css.t16298.prototype.domina$DomContent$single_node = (function (_){
var this__16308 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16285_SHARP_){
return goog.dom.query.call(null,this__16308.expr,p1__16285_SHARP_);
}),domina.nodes.call(null,this__16308.base))));
});
domina.css.t16298.prototype.cljs$core$IMeta$ = true;
domina.css.t16298.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16309 = this;
return this__16309.__meta;
});
domina.css.t16298.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16298.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16311 = this;
return (new domina.css.t16298(this__16311.expr,this__16311.base,this__16311.sel,__meta));
});
domina.css.t16298;
} else
{}
return (new domina.css.t16298(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16312.call(this,base);
case  2 :
return sel__16313.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
