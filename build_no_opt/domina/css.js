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
var sel__16568 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16569 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16559)))
{
/**
* @constructor
*/
domina.css.t16559 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16559.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16559");
});
domina.css.t16559.prototype.domina$DomContent$ = true;
domina.css.t16559.prototype.domina$DomContent$nodes = (function (_){
var this__16564 = this;
return cljs.core.mapcat.call(null,(function (p1__16553_SHARP_){
return goog.dom.query.call(null,this__16564.expr,p1__16553_SHARP_);
}),domina.nodes.call(null,this__16564.base));
});
domina.css.t16559.prototype.domina$DomContent$single_node = (function (_){
var this__16565 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16554_SHARP_){
return goog.dom.query.call(null,this__16565.expr,p1__16554_SHARP_);
}),domina.nodes.call(null,this__16565.base))));
});
domina.css.t16559.prototype.cljs$core$IMeta$ = true;
domina.css.t16559.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16566 = this;
return this__16566.__meta;
});
domina.css.t16559.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16559.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16567 = this;
return (new domina.css.t16559(this__16567.expr,this__16567.base,this__16567.sel,__meta));
});
domina.css.t16559;
} else
{}
return (new domina.css.t16559(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16568.call(this,base);
case  2 :
return sel__16569.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
