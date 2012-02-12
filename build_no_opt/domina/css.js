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
var sel__16581 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16582 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16563)))
{
/**
* @constructor
*/
domina.css.t16563 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16563.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16563");
});
domina.css.t16563.prototype.domina$DomContent$ = true;
domina.css.t16563.prototype.domina$DomContent$nodes = (function (_){
var this__16571 = this;
return cljs.core.mapcat.call(null,(function (p1__16560_SHARP_){
return goog.dom.query.call(null,this__16571.expr,p1__16560_SHARP_);
}),domina.nodes.call(null,this__16571.base));
});
domina.css.t16563.prototype.domina$DomContent$single_node = (function (_){
var this__16574 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16562_SHARP_){
return goog.dom.query.call(null,this__16574.expr,p1__16562_SHARP_);
}),domina.nodes.call(null,this__16574.base))));
});
domina.css.t16563.prototype.cljs$core$IMeta$ = true;
domina.css.t16563.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16576 = this;
return this__16576.__meta;
});
domina.css.t16563.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16563.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16579 = this;
return (new domina.css.t16563(this__16579.expr,this__16579.base,this__16579.sel,__meta));
});
domina.css.t16563;
} else
{}
return (new domina.css.t16563(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16581.call(this,base);
case  2 :
return sel__16582.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
