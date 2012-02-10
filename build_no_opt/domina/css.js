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
var sel__15604 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__15605 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t15542)))
{
/**
* @constructor
*/
domina.css.t15542 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t15542.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t15542");
});
domina.css.t15542.prototype.domina$DomContent$ = true;
domina.css.t15542.prototype.domina$DomContent$nodes = (function (_){
var this__15546 = this;
return cljs.core.mapcat.call(null,(function (p1__15536_SHARP_){
return goog.dom.query.call(null,this__15546.expr,p1__15536_SHARP_);
}),domina.nodes.call(null,this__15546.base));
});
domina.css.t15542.prototype.domina$DomContent$single_node = (function (_){
var this__15597 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__15537_SHARP_){
return goog.dom.query.call(null,this__15597.expr,p1__15537_SHARP_);
}),domina.nodes.call(null,this__15597.base))));
});
domina.css.t15542.prototype.cljs$core$IMeta$ = true;
domina.css.t15542.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15602 = this;
return this__15602.__meta;
});
domina.css.t15542.prototype.cljs$core$IWithMeta$ = true;
domina.css.t15542.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__15603 = this;
return (new domina.css.t15542(this__15603.expr,this__15603.base,this__15603.sel,__meta));
});
domina.css.t15542;
} else
{}
return (new domina.css.t15542(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__15604.call(this,base);
case  2 :
return sel__15605.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
