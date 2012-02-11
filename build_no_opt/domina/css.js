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
var sel__16349 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16350 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16344)))
{
/**
* @constructor
*/
domina.css.t16344 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16344.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16344");
});
domina.css.t16344.prototype.domina$DomContent$ = true;
domina.css.t16344.prototype.domina$DomContent$nodes = (function (_){
var this__16345 = this;
return cljs.core.mapcat.call(null,(function (p1__16338_SHARP_){
return goog.dom.query.call(null,this__16345.expr,p1__16338_SHARP_);
}),domina.nodes.call(null,this__16345.base));
});
domina.css.t16344.prototype.domina$DomContent$single_node = (function (_){
var this__16346 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16341_SHARP_){
return goog.dom.query.call(null,this__16346.expr,p1__16341_SHARP_);
}),domina.nodes.call(null,this__16346.base))));
});
domina.css.t16344.prototype.cljs$core$IMeta$ = true;
domina.css.t16344.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16347 = this;
return this__16347.__meta;
});
domina.css.t16344.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16344.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16348 = this;
return (new domina.css.t16344(this__16348.expr,this__16348.base,this__16348.sel,__meta));
});
domina.css.t16344;
} else
{}
return (new domina.css.t16344(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16349.call(this,base);
case  2 :
return sel__16350.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
