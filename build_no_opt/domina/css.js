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
var sel__16995 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16996 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16985)))
{
/**
* @constructor
*/
domina.css.t16985 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16985.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16985");
});
domina.css.t16985.prototype.domina$DomContent$ = true;
domina.css.t16985.prototype.domina$DomContent$nodes = (function (_){
var this__16988 = this;
return cljs.core.mapcat.call(null,(function (p1__16981_SHARP_){
return goog.dom.query.call(null,this__16988.expr,p1__16981_SHARP_);
}),domina.nodes.call(null,this__16988.base));
});
domina.css.t16985.prototype.domina$DomContent$single_node = (function (_){
var this__16990 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16982_SHARP_){
return goog.dom.query.call(null,this__16990.expr,p1__16982_SHARP_);
}),domina.nodes.call(null,this__16990.base))));
});
domina.css.t16985.prototype.cljs$core$IMeta$ = true;
domina.css.t16985.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16991 = this;
return this__16991.__meta;
});
domina.css.t16985.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16985.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16994 = this;
return (new domina.css.t16985(this__16994.expr,this__16994.base,this__16994.sel,__meta));
});
domina.css.t16985;
} else
{}
return (new domina.css.t16985(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16995.call(this,base);
case  2 :
return sel__16996.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
