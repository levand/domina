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
var sel__16533 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16534 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16519)))
{
/**
* @constructor
*/
domina.css.t16519 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16519.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16519");
});
domina.css.t16519.prototype.domina$DomContent$ = true;
domina.css.t16519.prototype.domina$DomContent$nodes = (function (_){
var this__16520 = this;
return cljs.core.mapcat.call(null,(function (p1__16511_SHARP_){
return goog.dom.query.call(null,this__16520.expr,p1__16511_SHARP_);
}),domina.nodes.call(null,this__16520.base));
});
domina.css.t16519.prototype.domina$DomContent$single_node = (function (_){
var this__16525 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16512_SHARP_){
return goog.dom.query.call(null,this__16525.expr,p1__16512_SHARP_);
}),domina.nodes.call(null,this__16525.base))));
});
domina.css.t16519.prototype.cljs$core$IMeta$ = true;
domina.css.t16519.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16527 = this;
return this__16527.__meta;
});
domina.css.t16519.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16519.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16530 = this;
return (new domina.css.t16519(this__16530.expr,this__16530.base,this__16530.sel,__meta));
});
domina.css.t16519;
} else
{}
return (new domina.css.t16519(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16533.call(this,base);
case  2 :
return sel__16534.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
