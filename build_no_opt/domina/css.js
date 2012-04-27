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
var sel__1 = (function (expr){
return sel.call(null,domina.css.root_element(),expr);
});
var sel__2 = (function (base,expr){
if(((void 0 === domina.css.t21498)))
{
/**
* @constructor
*/
domina.css.t21498 = (function (expr,base,sel,__meta__321__auto__){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta__321__auto__ = __meta__321__auto__;
})
domina.css.t21498.cljs$core$IPrintable$_pr_seq = (function (this__377__auto__){
return cljs.core.list("domina.css.t21498");
});
domina.css.t21498.prototype.domina$DomContent$ = true;
domina.css.t21498.prototype.domina$DomContent$nodes__1 = (function (_){
var this__21499 = this;
return cljs.core.mapcat.__2((function (p1__21496_SHARP_){
return domina.normalize_seq(goog.dom.query.call(null,this__21499.expr,p1__21496_SHARP_));
}),domina.nodes(this__21499.base));
});
domina.css.t21498.prototype.domina$DomContent$single_node__1 = (function (_){
var this__21500 = this;
return cljs.core.first(cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.mapcat.__2((function (p1__21497_SHARP_){
return domina.normalize_seq(goog.dom.query.call(null,this__21500.expr,p1__21497_SHARP_));
}),domina.nodes(this__21500.base))));
});
domina.css.t21498.prototype.cljs$core$IMeta$ = true;
domina.css.t21498.prototype.cljs$core$IMeta$_meta__1 = (function (___322__auto__){
var this__21501 = this;
return this__21501.__meta__321__auto__;
});
domina.css.t21498.prototype.cljs$core$IWithMeta$ = true;
domina.css.t21498.prototype.cljs$core$IWithMeta$_with_meta__2 = (function (___322__auto__,__meta__321__auto__){
var this__21502 = this;
return (new domina.css.t21498(this__21502.expr,this__21502.base,this__21502.sel,__meta__321__auto__));
});
domina.css.t21498;
} else
{}
return (new domina.css.t21498(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__1.call(this,base);
case  2 :
return sel__2.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
sel.__1 = sel__1;
sel.__2 = sel__2;
return sel;
})()
;
