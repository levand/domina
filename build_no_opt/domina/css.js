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
var sel__16476 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16477 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16469)))
{
/**
* @constructor
*/
domina.css.t16469 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16469.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16469");
});
domina.css.t16469.prototype.domina$DomContent$ = true;
domina.css.t16469.prototype.domina$DomContent$nodes = (function (_){
var this__16472 = this;
return cljs.core.mapcat.call(null,(function (p1__16461_SHARP_){
return goog.dom.query.call(null,this__16472.expr,p1__16461_SHARP_);
}),domina.nodes.call(null,this__16472.base));
});
domina.css.t16469.prototype.domina$DomContent$single_node = (function (_){
var this__16473 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16462_SHARP_){
return goog.dom.query.call(null,this__16473.expr,p1__16462_SHARP_);
}),domina.nodes.call(null,this__16473.base))));
});
domina.css.t16469.prototype.cljs$core$IMeta$ = true;
domina.css.t16469.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16474 = this;
return this__16474.__meta;
});
domina.css.t16469.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16469.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16475 = this;
return (new domina.css.t16469(this__16475.expr,this__16475.base,this__16475.sel,__meta));
});
domina.css.t16469;
} else
{}
return (new domina.css.t16469(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16476.call(this,base);
case  2 :
return sel__16477.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
