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
var sel__16650 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__16651 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t16645)))
{
/**
* @constructor
*/
domina.css.t16645 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t16645.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t16645");
});
domina.css.t16645.prototype.domina$DomContent$ = true;
domina.css.t16645.prototype.domina$DomContent$nodes = (function (_){
var this__16646 = this;
return cljs.core.mapcat.call(null,(function (p1__16643_SHARP_){
return goog.dom.query.call(null,this__16646.expr,p1__16643_SHARP_);
}),domina.nodes.call(null,this__16646.base));
});
domina.css.t16645.prototype.domina$DomContent$single_node = (function (_){
var this__16647 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__16644_SHARP_){
return goog.dom.query.call(null,this__16647.expr,p1__16644_SHARP_);
}),domina.nodes.call(null,this__16647.base))));
});
domina.css.t16645.prototype.cljs$core$IMeta$ = true;
domina.css.t16645.prototype.cljs$core$IMeta$_meta = (function (_){
var this__16648 = this;
return this__16648.__meta;
});
domina.css.t16645.prototype.cljs$core$IWithMeta$ = true;
domina.css.t16645.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__16649 = this;
return (new domina.css.t16645(this__16649.expr,this__16649.base,this__16649.sel,__meta));
});
domina.css.t16645;
} else
{}
return (new domina.css.t16645(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__16650.call(this,base);
case  2 :
return sel__16651.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
