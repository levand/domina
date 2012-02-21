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
var sel__16998 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16999 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16993)))
{
/**
* @constructor
*/
domina.css.t16993 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16993.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16993");
});
domina.css.t16993.prototype.domina$DomContent$ = true;
domina.css.t16993.prototype.domina$DomContent$nodes = (function (_){
var this__16994 = this;
return cljs.core.mapcat.call(null,(function (p1__16991_SHARP_){
return goog.dom.query.call(null,this__16994.expr,p1__16991_SHARP_);
}),domina.nodes.call(null,this__16994.base));
});
domina.css.t16993.prototype.domina$DomContent$single_node = (function (_){
var this__16995 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16992_SHARP_){
return goog.dom.query.call(null,this__16995.expr,p1__16992_SHARP_);
}),domina.nodes.call(null,this__16995.base))));
});
domina.css.t16993.prototype.cljs$core$IMeta$ = true;
domina.css.t16993.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16996 = this;
return this__16996.__meta;
});
domina.css.t16993.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16993.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16997 = this;
return (new domina.css.t16993(this__16997.expr,this__16997.base,this__16997.sel,__meta));
});
domina.css.t16993;
} else
{}
return (new domina.css.t16993(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16998.call(this,base);
case  2 :
return sel__16999.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
