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
var sel__17041 = (function (expr){
return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__17042 = (function (base,expr){
if(cljs.core.truth_((void 0 === domina.css.t17035)))
{
/**
* @constructor
*/
domina.css.t17035 = (function (expr,base,sel,__meta){
this.expr = expr;
this.base = base;
this.sel = sel;
this.__meta = __meta;
})
domina.css.t17035.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"domina.css.t17035");
});
domina.css.t17035.prototype.domina$DomContent$ = true;
domina.css.t17035.prototype.domina$DomContent$nodes = (function (_){
var this__17037 = this;
return cljs.core.mapcat.call(null,(function (p1__17031_SHARP_){
return goog.dom.query.call(null,this__17037.expr,p1__17031_SHARP_);
}),domina.nodes.call(null,this__17037.base));
});
domina.css.t17035.prototype.domina$DomContent$single_node = (function (_){
var this__17038 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__17032_SHARP_){
return goog.dom.query.call(null,this__17038.expr,p1__17032_SHARP_);
}),domina.nodes.call(null,this__17038.base))));
});
domina.css.t17035.prototype.cljs$core$IMeta$ = true;
domina.css.t17035.prototype.cljs$core$IMeta$_meta = (function (_){
var this__17039 = this;
return this__17039.__meta;
});
domina.css.t17035.prototype.cljs$core$IWithMeta$ = true;
domina.css.t17035.prototype.cljs$core$IWithMeta$_with_meta = (function (_,__meta){
var this__17040 = this;
return (new domina.css.t17035(this__17040.expr,this__17040.base,this__17040.sel,__meta));
});
domina.css.t17035;
} else
{}
return (new domina.css.t17035(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case  1 :
return sel__17041.call(this,base);
case  2 :
return sel__17042.call(this,base,expr);
}
throw('Invalid arity: ' + arguments.length);
};
return sel;
})()
;
