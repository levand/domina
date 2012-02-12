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
var sel__16499 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16500 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16475)))
{
/**
* @constructor
*/
domina.css.t16475 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16475.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16475");
});
domina.css.t16475.prototype.domina$DomContent$ = true;
domina.css.t16475.prototype.domina$DomContent$nodes = (function (_){
var this__16476 = this;
return cljs.core.mapcat.call(null,(function (p1__16457_SHARP_){
return goog.dom.query.call(null,this__16476.expr,p1__16457_SHARP_);
}),domina.nodes.call(null,this__16476.base));
});
domina.css.t16475.prototype.domina$DomContent$single_node = (function (_){
var this__16477 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16458_SHARP_){
return goog.dom.query.call(null,this__16477.expr,p1__16458_SHARP_);
}),domina.nodes.call(null,this__16477.base))));
});
domina.css.t16475.prototype.cljs$core$IMeta$ = true;
domina.css.t16475.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16497 = this;
return this__16497.__meta;
});
domina.css.t16475.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16475.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16498 = this;
return (new domina.css.t16475(this__16498.expr,this__16498.base,this__16498.sel,__meta));
});
domina.css.t16475;
} else
{}
return (new domina.css.t16475(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16499.call(this,base);
case  2 :
return sel__16500.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
