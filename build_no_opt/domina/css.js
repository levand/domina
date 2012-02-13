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
var sel__14802 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__14805 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t14789)))
{
/**
* @constructor
*/
domina.css.t14789 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t14789.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t14789");
});
domina.css.t14789.prototype.domina$DomContent$ = true;
domina.css.t14789.prototype.domina$DomContent$nodes = (function (_){
var this__14790 = this;
return cljs.core.mapcat.call(null,(function (p1__14784_SHARP_){
return goog.dom.query.call(null,this__14790.expr,p1__14784_SHARP_);
}),domina.nodes.call(null,this__14790.base));
});
domina.css.t14789.prototype.domina$DomContent$single_node = (function (_){
var this__14793 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__14786_SHARP_){
return goog.dom.query.call(null,this__14793.expr,p1__14786_SHARP_);
}),domina.nodes.call(null,this__14793.base))));
});
domina.css.t14789.prototype.cljs$core$IMeta$ = true;
domina.css.t14789.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14797 = this;
return this__14797.__meta;
});
domina.css.t14789.prototype.cljs$core$IWithMeta$ = true;
domina.css.t14789.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__14799 = this;
return (new domina.css.t14789(this__14799.expr,this__14799.base,this__14799.sel,__meta));
});
domina.css.t14789;
} else
{}
return (new domina.css.t14789(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__14802.call(this,base);
case  2 :
return sel__14805.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
