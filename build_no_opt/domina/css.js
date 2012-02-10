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
var sel__17006 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__17007 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t17001)))
{
/**
* @constructor
*/
domina.css.t17001 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t17001.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t17001");
});
domina.css.t17001.prototype.domina$DomContent$ = true;
domina.css.t17001.prototype.domina$DomContent$nodes = (function (_){
var this__17002 = this;
return cljs.core.mapcat.call(null,(function (p1__16999_SHARP_){
return goog.dom.query.call(null,this__17002.expr,p1__16999_SHARP_);
}),domina.nodes.call(null,this__17002.base));
});
domina.css.t17001.prototype.domina$DomContent$single_node = (function (_){
var this__17003 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__17000_SHARP_){
return goog.dom.query.call(null,this__17003.expr,p1__17000_SHARP_);
}),domina.nodes.call(null,this__17003.base))));
});
domina.css.t17001.prototype.cljs$core$IMeta$ = true;
domina.css.t17001.prototype.cljs$core$IMeta$_meta = (function (_){
var this__17004 = this;
return this__17004.__meta;
});
domina.css.t17001.prototype.cljs$core$IWithMeta$ = true;
domina.css.t17001.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__17005 = this;
return (new domina.css.t17001(this__17005.expr,this__17005.base,this__17005.sel,__meta));
});
domina.css.t17001;
} else
{}
return (new domina.css.t17001(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__17006.call(this,base);
case  2 :
return sel__17007.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
