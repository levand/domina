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
var sel__16983 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16984 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16962)))
{
/**
* @constructor
*/
domina.css.t16962 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16962.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16962");
});
domina.css.t16962.prototype.domina$DomContent$ = true;
domina.css.t16962.prototype.domina$DomContent$nodes = (function (_){
var this__16963 = this;
return cljs.core.mapcat.call(null,(function (p1__16960_SHARP_){
return goog.dom.query.call(null,this__16963.expr,p1__16960_SHARP_);
}),domina.nodes.call(null,this__16963.base));
});
domina.css.t16962.prototype.domina$DomContent$single_node = (function (_){
var this__16974 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16961_SHARP_){
return goog.dom.query.call(null,this__16974.expr,p1__16961_SHARP_);
}),domina.nodes.call(null,this__16974.base))));
});
domina.css.t16962.prototype.cljs$core$IMeta$ = true;
domina.css.t16962.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16979 = this;
return this__16979.__meta;
});
domina.css.t16962.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16962.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16982 = this;
return (new domina.css.t16962(this__16982.expr,this__16982.base,this__16982.sel,__meta));
});
domina.css.t16962;
} else
{}
return (new domina.css.t16962(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16983.call(this,base);
case  2 :
return sel__16984.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
