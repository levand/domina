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
var sel__16553 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16554 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16520)))
{
/**
* @constructor
*/
domina.css.t16520 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16520.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16520");
});
domina.css.t16520.prototype.domina$DomContent$ = true;
domina.css.t16520.prototype.domina$DomContent$nodes = (function (_){
var this__16523 = this;
return cljs.core.mapcat.call(null,(function (p1__16512_SHARP_){
return goog.dom.query.call(null,this__16523.expr,p1__16512_SHARP_);
}),domina.nodes.call(null,this__16523.base));
});
domina.css.t16520.prototype.domina$DomContent$single_node = (function (_){
var this__16526 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16515_SHARP_){
return goog.dom.query.call(null,this__16526.expr,p1__16515_SHARP_);
}),domina.nodes.call(null,this__16526.base))));
});
domina.css.t16520.prototype.cljs$core$IMeta$ = true;
domina.css.t16520.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16544 = this;
return this__16544.__meta;
});
domina.css.t16520.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16520.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16550 = this;
return (new domina.css.t16520(this__16550.expr,this__16550.base,this__16550.sel,__meta));
});
domina.css.t16520;
} else
{}
return (new domina.css.t16520(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16553.call(this,base);
case  2 :
return sel__16554.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
