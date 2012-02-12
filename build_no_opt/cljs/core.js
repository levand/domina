goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Each runtime environment provides a diffenent way to print output.
* Whatever function *print-fn* is bound to will be passed any
* Strings which should be printed.
*/
cljs.core._STAR_print_fn_STAR_ = (function _STAR_print_fn_STAR_(_){
throw (new Error("No *print-fn* fn set for evaluation environment"));
});
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3548__auto____7253 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7253))
{return or__3548__auto____7253;
} else
{var or__3548__auto____7254 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{return false;
}
}
});
cljs.core.is_proto_ = (function is_proto_(x){
return (x).constructor.prototype === x;
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return (array[i]);
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.IFn = {};
cljs.core._invoke = (function() {
var _invoke = null;
var _invoke__7626 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7258 = this$;

if(cljs.core.truth_(and__3546__auto____7258))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7258;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7261 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
} else
{var or__3548__auto____7262 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7631 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7263 = this$;

if(cljs.core.truth_(and__3546__auto____7263))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7263;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7264 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{var or__3548__auto____7265 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7265))
{return or__3548__auto____7265;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7632 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7266 = this$;

if(cljs.core.truth_(and__3546__auto____7266))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7266;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7379 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{var or__3548__auto____7381 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7381))
{return or__3548__auto____7381;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7633 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7384 = this$;

if(cljs.core.truth_(and__3546__auto____7384))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7384;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7634 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7396 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{var or__3548__auto____7397 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7400 = this$;

if(cljs.core.truth_(and__3546__auto____7400))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7400;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7405 = this$;

if(cljs.core.truth_(and__3546__auto____7405))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7405;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7407 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7407))
{return or__3548__auto____7407;
} else
{var or__3548__auto____7463 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7467 = this$;

if(cljs.core.truth_(and__3546__auto____7467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7471 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7471))
{return or__3548__auto____7471;
} else
{var or__3548__auto____7474 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7638 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7509 = this$;

if(cljs.core.truth_(and__3546__auto____7509))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7509;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7511 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7511))
{return or__3548__auto____7511;
} else
{var or__3548__auto____7515 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7515))
{return or__3548__auto____7515;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7639 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7517 = this$;

if(cljs.core.truth_(and__3546__auto____7517))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7517;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7530 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{var or__3548__auto____7541 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7640 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7555 = this$;

if(cljs.core.truth_(and__3546__auto____7555))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7555;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7558 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7558))
{return or__3548__auto____7558;
} else
{var or__3548__auto____7559 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7559))
{return or__3548__auto____7559;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7641 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7560 = this$;

if(cljs.core.truth_(and__3546__auto____7560))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7560;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7562 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7562))
{return or__3548__auto____7562;
} else
{var or__3548__auto____7563 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7563))
{return or__3548__auto____7563;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7642 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7564 = this$;

if(cljs.core.truth_(and__3546__auto____7564))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7564;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7565 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7565))
{return or__3548__auto____7565;
} else
{var or__3548__auto____7567 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7567))
{return or__3548__auto____7567;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7643 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7569 = this$;

if(cljs.core.truth_(and__3546__auto____7569))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7569;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7571 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7571))
{return or__3548__auto____7571;
} else
{var or__3548__auto____7573 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7573))
{return or__3548__auto____7573;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7644 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7574 = this$;

if(cljs.core.truth_(and__3546__auto____7574))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7574;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7576 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7576))
{return or__3548__auto____7576;
} else
{var or__3548__auto____7577 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7577))
{return or__3548__auto____7577;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7645 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7580 = this$;

if(cljs.core.truth_(and__3546__auto____7580))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7580;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7581 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7581))
{return or__3548__auto____7581;
} else
{var or__3548__auto____7582 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7646 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7583 = this$;

if(cljs.core.truth_(and__3546__auto____7583))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7583;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7584 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{var or__3548__auto____7585 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7585))
{return or__3548__auto____7585;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7647 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7586 = this$;

if(cljs.core.truth_(and__3546__auto____7586))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7586;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7587 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{var or__3548__auto____7588 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7588))
{return or__3548__auto____7588;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7648 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7589 = this$;

if(cljs.core.truth_(and__3546__auto____7589))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7589;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7590 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{var or__3548__auto____7591 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7591))
{return or__3548__auto____7591;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7649 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7593 = this$;

if(cljs.core.truth_(and__3546__auto____7593))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7593;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7595 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7595))
{return or__3548__auto____7595;
} else
{var or__3548__auto____7596 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7596))
{return or__3548__auto____7596;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7650 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7602 = this$;

if(cljs.core.truth_(and__3546__auto____7602))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7602;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7605 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7605))
{return or__3548__auto____7605;
} else
{var or__3548__auto____7606 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7606))
{return or__3548__auto____7606;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
_invoke = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case  1 :
return _invoke__7626.call(this,this$);
case  2 :
return _invoke__7631.call(this,this$,a);
case  3 :
return _invoke__7632.call(this,this$,a,b);
case  4 :
return _invoke__7633.call(this,this$,a,b,c);
case  5 :
return _invoke__7634.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7635.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7638.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7639.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7640.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7641.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7642.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7643.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7644.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7645.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7646.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7647.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7648.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7649.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7650.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7740 = coll;

if(cljs.core.truth_(and__3546__auto____7740))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7740;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7741 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{var or__3548__auto____7748 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7749 = coll;

if(cljs.core.truth_(and__3546__auto____7749))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7749;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7751 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7751))
{return or__3548__auto____7751;
} else
{var or__3548__auto____7752 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7752))
{return or__3548__auto____7752;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7757 = coll;

if(cljs.core.truth_(and__3546__auto____7757))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7757;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7758 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7758))
{return or__3548__auto____7758;
} else
{var or__3548__auto____7759 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__7786 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7761 = coll;

if(cljs.core.truth_(and__3546__auto____7761))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7761;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7763 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{var or__3548__auto____7770 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7787 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7780 = coll;

if(cljs.core.truth_(and__3546__auto____7780))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7780;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7782 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{var or__3548__auto____7784 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__7786.call(this,coll,n);
case  3 :
return _nth__7787.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7793 = coll;

if(cljs.core.truth_(and__3546__auto____7793))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7793;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7796 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7796))
{return or__3548__auto____7796;
} else
{var or__3548__auto____7799 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7800 = coll;

if(cljs.core.truth_(and__3546__auto____7800))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7800;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7801 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
} else
{var or__3548__auto____7802 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7802))
{return or__3548__auto____7802;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__7815 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7806 = o;

if(cljs.core.truth_(and__3546__auto____7806))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7806;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
} else
{var or__3548__auto____7809 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7816 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7811 = o;

if(cljs.core.truth_(and__3546__auto____7811))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7811;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7813 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7813))
{return or__3548__auto____7813;
} else
{var or__3548__auto____7814 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__7815.call(this,o,k);
case  3 :
return _lookup__7816.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = coll;

if(cljs.core.truth_(and__3546__auto____7823))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7823;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7826 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{var or__3548__auto____7828 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7831 = coll;

if(cljs.core.truth_(and__3546__auto____7831))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7831;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7923 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{var or__3548__auto____7925 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7933 = coll;

if(cljs.core.truth_(and__3546__auto____7933))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7933;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7936 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{var or__3548__auto____7939 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7950 = coll;

if(cljs.core.truth_(and__3546__auto____7950))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7950;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7953 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7955 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7960 = coll;

if(cljs.core.truth_(and__3546__auto____7960))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7960;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7964 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7966 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = coll;

if(cljs.core.truth_(and__3546__auto____7969))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7969;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7972 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7975 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8000 = coll;

if(cljs.core.truth_(and__3546__auto____8000))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8000;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8003 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8006 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8014 = o;

if(cljs.core.truth_(and__3546__auto____8014))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8014;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8017 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{var or__3548__auto____8021 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8036 = o;

if(cljs.core.truth_(and__3546__auto____8036))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8036;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8038 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8038))
{return or__3548__auto____8038;
} else
{var or__3548__auto____8041 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8047 = o;

if(cljs.core.truth_(and__3546__auto____8047))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8047;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8053 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = o;

if(cljs.core.truth_(and__3546__auto____8063))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8063;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8067 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8069 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__8089 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8074 = coll;

if(cljs.core.truth_(and__3546__auto____8074))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8074;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8079 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{var or__3548__auto____8080 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8080))
{return or__3548__auto____8080;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8090 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = coll;

if(cljs.core.truth_(and__3546__auto____8081))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8081;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8086 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__8089.call(this,coll,f);
case  3 :
return _reduce__8090.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8096 = o;

if(cljs.core.truth_(and__3546__auto____8096))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8096;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8100 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
} else
{var or__3548__auto____8101 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8102 = o;

if(cljs.core.truth_(and__3546__auto____8102))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8102;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8104 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{var or__3548__auto____8105 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8108 = o;

if(cljs.core.truth_(and__3546__auto____8108))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8108;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8110 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8110))
{return or__3548__auto____8110;
} else
{var or__3548__auto____8111 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IRecord = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3546__auto____8114 = o;

if(cljs.core.truth_(and__3546__auto____8114))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8114;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8116 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8139 = d;

if(cljs.core.truth_(and__3546__auto____8139))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8139;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8140 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8142 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8146 = this$;

if(cljs.core.truth_(and__3546__auto____8146))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8146;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8147 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{var or__3548__auto____8148 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8148))
{return or__3548__auto____8148;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8149 = this$;

if(cljs.core.truth_(and__3546__auto____8149))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8149;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8150 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
} else
{var or__3548__auto____8151 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8151))
{return or__3548__auto____8151;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8152 = this$;

if(cljs.core.truth_(and__3546__auto____8152))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8152;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8153 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{var or__3548__auto____8154 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-remove-watch",this$);
}
}
})().call(null,this$,key);
}
});
/**
* Tests if 2 arguments are the same object
*/
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
/**
* Equality. Returns true if x equals y, false if not. Compares
* numbers and collections in a type-independent manner.  Clojure's immutable data
* structures define -equiv (and thus =) as a value, not an identity,
* comparison.
*/
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
/**
* Returns true if x is nil, false otherwise.
*/
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return (x === null);
});
cljs.core.type = (function type(x){
return (x).constructor;
});
Function.prototype.cljs$core$IPrintable$ = true;
Function.prototype.cljs$core$IPrintable$_pr_seq = (function (this$){
return cljs.core.list.call(null,"#<",cljs.core.str.call(null,this$),">");
});
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__8287 = null;
var G__8287__8288 = (function (o,k){
return null;
});
var G__8287__8289 = (function (o,k,not_found){
return not_found;
});
G__8287 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8287__8288.call(this,o,k);
case  3 :
return G__8287__8289.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8287;
})()
);
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__8291 = null;
var G__8291__8292 = (function (_,f){
return f.call(null);
});
var G__8291__8293 = (function (_,f,start){
return start;
});
G__8291 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8291__8292.call(this,_,f);
case  3 :
return G__8291__8293.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8291;
})()
);
(cljs.core.IPrintable["null"] = true);
(cljs.core._pr_seq["null"] = (function (o){
return cljs.core.list.call(null,"nil");
}));
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__8302 = null;
var G__8302__8304 = (function (_,n){
return null;
});
var G__8302__8305 = (function (_,n,not_found){
return not_found;
});
G__8302 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8302__8304.call(this,_,n);
case  3 :
return G__8302__8305.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8302;
})()
);
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return (o.toString() === other.toString());
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return (x === o);
}));
(cljs.core.IHash["boolean"] = true);
(cljs.core._hash["boolean"] = (function (o){
return ((o === true) ? 1 : 0);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__8337 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8328 = cljs.core._nth.call(null,cicoll,0);
var n__8329 = 1;

while(true){
if(cljs.core.truth_((n__8329 < cljs.core._count.call(null,cicoll))))
{{
var G__8341 = f.call(null,val__8328,cljs.core._nth.call(null,cicoll,n__8329));
var G__8342 = (n__8329 + 1);
val__8328 = G__8341;
n__8329 = G__8342;
continue;
}
} else
{return val__8328;
}
break;
}
}
});
var ci_reduce__8338 = (function (cicoll,f,val){
var val__8330 = val;
var n__8331 = 0;

while(true){
if(cljs.core.truth_((n__8331 < cljs.core._count.call(null,cicoll))))
{{
var G__8345 = f.call(null,val__8330,cljs.core._nth.call(null,cicoll,n__8331));
var G__8346 = (n__8331 + 1);
val__8330 = G__8345;
n__8331 = G__8346;
continue;
}
} else
{return val__8330;
}
break;
}
});
var ci_reduce__8339 = (function (cicoll,f,val,idx){
var val__8332 = val;
var n__8334 = idx;

while(true){
if(cljs.core.truth_((n__8334 < cljs.core._count.call(null,cicoll))))
{{
var G__8347 = f.call(null,val__8332,cljs.core._nth.call(null,cicoll,n__8334));
var G__8348 = (n__8334 + 1);
val__8332 = G__8347;
n__8334 = G__8348;
continue;
}
} else
{return val__8332;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8337.call(this,cicoll,f);
case  3 :
return ci_reduce__8338.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8339.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.IndexedSeq");
});
cljs.core.IndexedSeq.prototype.cljs$core$IHash$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__8357 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8370 = null;
var G__8370__8371 = (function (_,f){
var this__8358 = this;
return cljs.core.ci_reduce.call(null,this__8358.a,f,(this__8358.a[this__8358.i]),(this__8358.i + 1));
});
var G__8370__8372 = (function (_,f,start){
var this__8359 = this;
return cljs.core.ci_reduce.call(null,this__8359.a,f,start,this__8359.i);
});
G__8370 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8370__8371.call(this,_,f);
case  3 :
return G__8370__8372.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8370;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8360 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8389 = null;
var G__8389__8392 = (function (coll,n){
var this__8362 = this;
var i__8363 = (n + this__8362.i);

if(cljs.core.truth_((i__8363 < this__8362.a.length)))
{return (this__8362.a[i__8363]);
} else
{return null;
}
});
var G__8389__8393 = (function (coll,n,not_found){
var this__8364 = this;
var i__8365 = (n + this__8364.i);

if(cljs.core.truth_((i__8365 < this__8364.a.length)))
{return (this__8364.a[i__8365]);
} else
{return not_found;
}
});
G__8389 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8389__8392.call(this,coll,n);
case  3 :
return G__8389__8393.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8389;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8366 = this;
return (this__8366.a.length - this__8366.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8367 = this;
return (this__8367.a[this__8367.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8368 = this;
if(cljs.core.truth_(((this__8368.i + 1) < this__8368.a.length)))
{return (new cljs.core.IndexedSeq(this__8368.a,(this__8368.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8369 = this;
return this$;
});
cljs.core.IndexedSeq;
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__8433 = null;
var G__8433__8447 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8433__8448 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8433 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8433__8447.call(this,array,f);
case  3 :
return G__8433__8448.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8433;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8453 = null;
var G__8453__8454 = (function (array,k){
return (array[k]);
});
var G__8453__8455 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8453 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8453__8454.call(this,array,k);
case  3 :
return G__8453__8455.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8453;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8457 = null;
var G__8457__8458 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8457__8459 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8457 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8457__8458.call(this,array,n);
case  3 :
return G__8457__8459.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8457;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3698__auto____8506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8506))
{var s__8507 = temp__3698__auto____8506;

return cljs.core._first.call(null,s__8507);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__8546 = cljs.core.next.call(null,s);
s = G__8546;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__8551 = cljs.core.seq.call(null,x);
var n__8552 = 0;

while(true){
if(cljs.core.truth_(s__8551))
{{
var G__8563 = cljs.core.next.call(null,s__8551);
var G__8564 = (n__8552 + 1);
s__8551 = G__8563;
n__8552 = G__8564;
continue;
}
} else
{return n__8552;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return (x === o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__8581 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8582 = (function() { 
var G__8584__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8585 = conj.call(null,coll,x);
var G__8586 = cljs.core.first.call(null,xs);
var G__8587 = cljs.core.next.call(null,xs);
coll = G__8585;
x = G__8586;
xs = G__8587;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8584 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8584__delegate.call(this, coll, x, xs);
};
G__8584.cljs$lang$maxFixedArity = 2;
G__8584.cljs$lang$applyTo = (function (arglist__8589){
var coll = cljs.core.first(arglist__8589);
var x = cljs.core.first(cljs.core.next(arglist__8589));
var xs = cljs.core.rest(cljs.core.next(arglist__8589));
return G__8584__delegate.call(this, coll, x, xs);
});
return G__8584;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8581.call(this,coll,x);
default:
return conj__8582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8582.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__8608 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8610 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8608.call(this,coll,n);
case  3 :
return nth__8610.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__8617 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8618 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8617.call(this,o,k);
case  3 :
return get__8618.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__8631 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8633 = (function() { 
var G__8637__delegate = function (coll,k,v,kvs){
while(true){
var ret__8625 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8639 = ret__8625;
var G__8640 = cljs.core.first.call(null,kvs);
var G__8641 = cljs.core.second.call(null,kvs);
var G__8643 = cljs.core.nnext.call(null,kvs);
coll = G__8639;
k = G__8640;
v = G__8641;
kvs = G__8643;
continue;
}
} else
{return ret__8625;
}
break;
}
};
var G__8637 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8637__delegate.call(this, coll, k, v, kvs);
};
G__8637.cljs$lang$maxFixedArity = 3;
G__8637.cljs$lang$applyTo = (function (arglist__8651){
var coll = cljs.core.first(arglist__8651);
var k = cljs.core.first(cljs.core.next(arglist__8651));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8651)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8651)));
return G__8637__delegate.call(this, coll, k, v, kvs);
});
return G__8637;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8631.call(this,coll,k,v);
default:
return assoc__8633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8633.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__8662 = (function (coll){
return coll;
});
var dissoc__8663 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8664 = (function() { 
var G__8670__delegate = function (coll,k,ks){
while(true){
var ret__8660 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8672 = ret__8660;
var G__8673 = cljs.core.first.call(null,ks);
var G__8674 = cljs.core.next.call(null,ks);
coll = G__8672;
k = G__8673;
ks = G__8674;
continue;
}
} else
{return ret__8660;
}
break;
}
};
var G__8670 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8670__delegate.call(this, coll, k, ks);
};
G__8670.cljs$lang$maxFixedArity = 2;
G__8670.cljs$lang$applyTo = (function (arglist__8678){
var coll = cljs.core.first(arglist__8678);
var k = cljs.core.first(cljs.core.next(arglist__8678));
var ks = cljs.core.rest(cljs.core.next(arglist__8678));
return G__8670__delegate.call(this, coll, k, ks);
});
return G__8670;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8662.call(this,coll);
case  2 :
return dissoc__8663.call(this,coll,k);
default:
return dissoc__8664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8664.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__445__auto____8682 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8683 = x__445__auto____8682;

if(cljs.core.truth_(and__3546__auto____8683))
{var and__3546__auto____8684 = x__445__auto____8682.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8684))
{return cljs.core.not.call(null,x__445__auto____8682.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8684;
}
} else
{return and__3546__auto____8683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8682);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__8704 = (function (coll){
return coll;
});
var disj__8705 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8706 = (function() { 
var G__8708__delegate = function (coll,k,ks){
while(true){
var ret__8698 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8712 = ret__8698;
var G__8714 = cljs.core.first.call(null,ks);
var G__8715 = cljs.core.next.call(null,ks);
coll = G__8712;
k = G__8714;
ks = G__8715;
continue;
}
} else
{return ret__8698;
}
break;
}
};
var G__8708 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8708__delegate.call(this, coll, k, ks);
};
G__8708.cljs$lang$maxFixedArity = 2;
G__8708.cljs$lang$applyTo = (function (arglist__8728){
var coll = cljs.core.first(arglist__8728);
var k = cljs.core.first(cljs.core.next(arglist__8728));
var ks = cljs.core.rest(cljs.core.next(arglist__8728));
return G__8708__delegate.call(this, coll, k, ks);
});
return G__8708;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8704.call(this,coll);
case  2 :
return disj__8705.call(this,coll,k);
default:
return disj__8706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8706.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8778 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8780 = x__445__auto____8778;

if(cljs.core.truth_(and__3546__auto____8780))
{var and__3546__auto____8781 = x__445__auto____8778.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8781))
{return cljs.core.not.call(null,x__445__auto____8778.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8781;
}
} else
{return and__3546__auto____8780;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8778);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8788 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8789 = x__445__auto____8788;

if(cljs.core.truth_(and__3546__auto____8789))
{var and__3546__auto____8790 = x__445__auto____8788.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8790))
{return cljs.core.not.call(null,x__445__auto____8788.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8790;
}
} else
{return and__3546__auto____8789;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8788);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8798 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8799 = x__445__auto____8798;

if(cljs.core.truth_(and__3546__auto____8799))
{var and__3546__auto____8800 = x__445__auto____8798.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8800))
{return cljs.core.not.call(null,x__445__auto____8798.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8800;
}
} else
{return and__3546__auto____8799;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8798);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8809 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8811 = x__445__auto____8809;

if(cljs.core.truth_(and__3546__auto____8811))
{var and__3546__auto____8812 = x__445__auto____8809.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8812))
{return cljs.core.not.call(null,x__445__auto____8809.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8812;
}
} else
{return and__3546__auto____8811;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8809);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8824 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8825 = x__445__auto____8824;

if(cljs.core.truth_(and__3546__auto____8825))
{var and__3546__auto____8827 = x__445__auto____8824.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8827))
{return cljs.core.not.call(null,x__445__auto____8824.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8827;
}
} else
{return and__3546__auto____8825;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8824);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8828 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8832 = x__445__auto____8828;

if(cljs.core.truth_(and__3546__auto____8832))
{var and__3546__auto____8833 = x__445__auto____8828.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8833))
{return cljs.core.not.call(null,x__445__auto____8828.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8833;
}
} else
{return and__3546__auto____8832;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8828);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8841 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8842 = x__445__auto____8841;

if(cljs.core.truth_(and__3546__auto____8842))
{var and__3546__auto____8846 = x__445__auto____8841.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8846))
{return cljs.core.not.call(null,x__445__auto____8841.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8846;
}
} else
{return and__3546__auto____8842;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8841);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8856 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8856.push(key);
}));
return keys__8856;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o != null && (o instanceof t || o.constructor === t || t === Object));
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__445__auto____8912 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8915 = x__445__auto____8912;

if(cljs.core.truth_(and__3546__auto____8915))
{var and__3546__auto____8917 = x__445__auto____8912.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8917))
{return cljs.core.not.call(null,x__445__auto____8912.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8917;
}
} else
{return and__3546__auto____8915;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8912);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3546__auto____8927 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8927))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8931 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8931))
{return or__3548__auto____8931;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8927;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8933 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8933))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8933;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8942 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8942))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8942;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3546__auto____8953 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8953))
{return (n == n.toFixed());
} else
{return and__3546__auto____8953;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_((cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel) === cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8967 = coll;

if(cljs.core.truth_(and__3546__auto____8967))
{var and__3546__auto____8968 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8968))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8968;
}
} else
{return and__3546__auto____8967;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___9046 = (function (x){
return true;
});
var distinct_QMARK___9047 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9048 = (function() { 
var G__9050__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9040 = cljs.core.set([y,x]);
var xs__9041 = more;

while(true){
var x__9043 = cljs.core.first.call(null,xs__9041);
var etc__9044 = cljs.core.next.call(null,xs__9041);

if(cljs.core.truth_(xs__9041))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9040,x__9043)))
{return false;
} else
{{
var G__9051 = cljs.core.conj.call(null,s__9040,x__9043);
var G__9052 = etc__9044;
s__9040 = G__9051;
xs__9041 = G__9052;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__9050 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9050__delegate.call(this, x, y, more);
};
G__9050.cljs$lang$maxFixedArity = 2;
G__9050.cljs$lang$applyTo = (function (arglist__9065){
var x = cljs.core.first(arglist__9065);
var y = cljs.core.first(cljs.core.next(arglist__9065));
var more = cljs.core.rest(cljs.core.next(arglist__9065));
return G__9050__delegate.call(this, x, y, more);
});
return G__9050;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9046.call(this,x);
case  2 :
return distinct_QMARK___9047.call(this,x,y);
default:
return distinct_QMARK___9048.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9048.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__9073 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9073)))
{return r__9073;
} else
{if(cljs.core.truth_(r__9073))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__9082 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9083 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9081 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9081,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9081);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9082.call(this,comp);
case  2 :
return sort__9083.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__9089 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9091 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9089.call(this,keyfn,comp);
case  3 :
return sort_by__9091.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__9095 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9096 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9095.call(this,f,val);
case  3 :
return reduce__9096.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9108 = (function (f,coll){
var temp__3695__auto____9104 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9104))
{var s__9105 = temp__3695__auto____9104;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9105),cljs.core.next.call(null,s__9105));
} else
{return f.call(null);
}
});
var seq_reduce__9109 = (function (f,val,coll){
var val__9106 = val;
var coll__9107 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9107))
{{
var G__9116 = f.call(null,val__9106,cljs.core.first.call(null,coll__9107));
var G__9117 = cljs.core.next.call(null,coll__9107);
val__9106 = G__9116;
coll__9107 = G__9117;
continue;
}
} else
{return val__9106;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9108.call(this,f,val);
case  3 :
return seq_reduce__9109.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9128 = null;
var G__9128__9129 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9128__9130 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9128 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9128__9129.call(this,coll,f);
case  3 :
return G__9128__9130.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9128;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9138 = (function (){
return 0;
});
var _PLUS___9139 = (function (x){
return x;
});
var _PLUS___9140 = (function (x,y){
return (x + y);
});
var _PLUS___9141 = (function() { 
var G__9144__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9144 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9144__delegate.call(this, x, y, more);
};
G__9144.cljs$lang$maxFixedArity = 2;
G__9144.cljs$lang$applyTo = (function (arglist__9145){
var x = cljs.core.first(arglist__9145);
var y = cljs.core.first(cljs.core.next(arglist__9145));
var more = cljs.core.rest(cljs.core.next(arglist__9145));
return G__9144__delegate.call(this, x, y, more);
});
return G__9144;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9138.call(this);
case  1 :
return _PLUS___9139.call(this,x);
case  2 :
return _PLUS___9140.call(this,x,y);
default:
return _PLUS___9141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9141.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___9149 = (function (x){
return (- x);
});
var ___9150 = (function (x,y){
return (x - y);
});
var ___9151 = (function() { 
var G__9153__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9153 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9153__delegate.call(this, x, y, more);
};
G__9153.cljs$lang$maxFixedArity = 2;
G__9153.cljs$lang$applyTo = (function (arglist__9156){
var x = cljs.core.first(arglist__9156);
var y = cljs.core.first(cljs.core.next(arglist__9156));
var more = cljs.core.rest(cljs.core.next(arglist__9156));
return G__9153__delegate.call(this, x, y, more);
});
return G__9153;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9149.call(this,x);
case  2 :
return ___9150.call(this,x,y);
default:
return ___9151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9151.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9163 = (function (){
return 1;
});
var _STAR___9164 = (function (x){
return x;
});
var _STAR___9165 = (function (x,y){
return (x * y);
});
var _STAR___9166 = (function() { 
var G__9172__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9172 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9172__delegate.call(this, x, y, more);
};
G__9172.cljs$lang$maxFixedArity = 2;
G__9172.cljs$lang$applyTo = (function (arglist__9174){
var x = cljs.core.first(arglist__9174);
var y = cljs.core.first(cljs.core.next(arglist__9174));
var more = cljs.core.rest(cljs.core.next(arglist__9174));
return G__9172__delegate.call(this, x, y, more);
});
return G__9172;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9163.call(this);
case  1 :
return _STAR___9164.call(this,x);
case  2 :
return _STAR___9165.call(this,x,y);
default:
return _STAR___9166.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9166.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___9181 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9182 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9183 = (function() { 
var G__9188__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9188 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9188__delegate.call(this, x, y, more);
};
G__9188.cljs$lang$maxFixedArity = 2;
G__9188.cljs$lang$applyTo = (function (arglist__9189){
var x = cljs.core.first(arglist__9189);
var y = cljs.core.first(cljs.core.next(arglist__9189));
var more = cljs.core.rest(cljs.core.next(arglist__9189));
return G__9188__delegate.call(this, x, y, more);
});
return G__9188;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9181.call(this,x);
case  2 :
return _SLASH___9182.call(this,x,y);
default:
return _SLASH___9183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9183.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___9202 = (function (x){
return true;
});
var _LT___9203 = (function (x,y){
return (x < y);
});
var _LT___9204 = (function() { 
var G__9206__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9207 = y;
var G__9208 = cljs.core.first.call(null,more);
var G__9209 = cljs.core.next.call(null,more);
x = G__9207;
y = G__9208;
more = G__9209;
continue;
}
} else
{return (y < cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9206 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9206__delegate.call(this, x, y, more);
};
G__9206.cljs$lang$maxFixedArity = 2;
G__9206.cljs$lang$applyTo = (function (arglist__9211){
var x = cljs.core.first(arglist__9211);
var y = cljs.core.first(cljs.core.next(arglist__9211));
var more = cljs.core.rest(cljs.core.next(arglist__9211));
return G__9206__delegate.call(this, x, y, more);
});
return G__9206;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9202.call(this,x);
case  2 :
return _LT___9203.call(this,x,y);
default:
return _LT___9204.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9204.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___9226 = (function (x){
return true;
});
var _LT__EQ___9227 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9228 = (function() { 
var G__9232__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9233 = y;
var G__9234 = cljs.core.first.call(null,more);
var G__9235 = cljs.core.next.call(null,more);
x = G__9233;
y = G__9234;
more = G__9235;
continue;
}
} else
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9232 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9232__delegate.call(this, x, y, more);
};
G__9232.cljs$lang$maxFixedArity = 2;
G__9232.cljs$lang$applyTo = (function (arglist__9239){
var x = cljs.core.first(arglist__9239);
var y = cljs.core.first(cljs.core.next(arglist__9239));
var more = cljs.core.rest(cljs.core.next(arglist__9239));
return G__9232__delegate.call(this, x, y, more);
});
return G__9232;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9226.call(this,x);
case  2 :
return _LT__EQ___9227.call(this,x,y);
default:
return _LT__EQ___9228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9228.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___9247 = (function (x){
return true;
});
var _GT___9248 = (function (x,y){
return (x > y);
});
var _GT___9249 = (function() { 
var G__9251__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9252 = y;
var G__9253 = cljs.core.first.call(null,more);
var G__9254 = cljs.core.next.call(null,more);
x = G__9252;
y = G__9253;
more = G__9254;
continue;
}
} else
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9251 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9251__delegate.call(this, x, y, more);
};
G__9251.cljs$lang$maxFixedArity = 2;
G__9251.cljs$lang$applyTo = (function (arglist__9256){
var x = cljs.core.first(arglist__9256);
var y = cljs.core.first(cljs.core.next(arglist__9256));
var more = cljs.core.rest(cljs.core.next(arglist__9256));
return G__9251__delegate.call(this, x, y, more);
});
return G__9251;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9247.call(this,x);
case  2 :
return _GT___9248.call(this,x,y);
default:
return _GT___9249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9249.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___9262 = (function (x){
return true;
});
var _GT__EQ___9263 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9264 = (function() { 
var G__9266__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9267 = y;
var G__9268 = cljs.core.first.call(null,more);
var G__9269 = cljs.core.next.call(null,more);
x = G__9267;
y = G__9268;
more = G__9269;
continue;
}
} else
{return (y >= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9266 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9266__delegate.call(this, x, y, more);
};
G__9266.cljs$lang$maxFixedArity = 2;
G__9266.cljs$lang$applyTo = (function (arglist__9270){
var x = cljs.core.first(arglist__9270);
var y = cljs.core.first(cljs.core.next(arglist__9270));
var more = cljs.core.rest(cljs.core.next(arglist__9270));
return G__9266__delegate.call(this, x, y, more);
});
return G__9266;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9262.call(this,x);
case  2 :
return _GT__EQ___9263.call(this,x,y);
default:
return _GT__EQ___9264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9264.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return (x - 1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__9285 = (function (x){
return x;
});
var max__9286 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9287 = (function() { 
var G__9289__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9289 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9289__delegate.call(this, x, y, more);
};
G__9289.cljs$lang$maxFixedArity = 2;
G__9289.cljs$lang$applyTo = (function (arglist__9294){
var x = cljs.core.first(arglist__9294);
var y = cljs.core.first(cljs.core.next(arglist__9294));
var more = cljs.core.rest(cljs.core.next(arglist__9294));
return G__9289__delegate.call(this, x, y, more);
});
return G__9289;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9285.call(this,x);
case  2 :
return max__9286.call(this,x,y);
default:
return max__9287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9287.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9305 = (function (x){
return x;
});
var min__9306 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9307 = (function() { 
var G__9310__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9310 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9310__delegate.call(this, x, y, more);
};
G__9310.cljs$lang$maxFixedArity = 2;
G__9310.cljs$lang$applyTo = (function (arglist__9313){
var x = cljs.core.first(arglist__9313);
var y = cljs.core.first(cljs.core.next(arglist__9313));
var more = cljs.core.rest(cljs.core.next(arglist__9313));
return G__9310__delegate.call(this, x, y, more);
});
return G__9310;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9305.call(this,x);
case  2 :
return min__9306.call(this,x,y);
default:
return min__9307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9307.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_((q >= 0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__9360 = (n % d);

return cljs.core.fix.call(null,((n - rem__9360) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9374 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9374));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9382 = (function (){
return Math.random.call(null);
});
var rand__9384 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9382.call(this);
case  1 :
return rand__9384.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~ x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___9447 = (function (x){
return true;
});
var _EQ__EQ___9448 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9449 = (function() { 
var G__9452__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9454 = y;
var G__9455 = cljs.core.first.call(null,more);
var G__9456 = cljs.core.next.call(null,more);
x = G__9454;
y = G__9455;
more = G__9456;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9452 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9452__delegate.call(this, x, y, more);
};
G__9452.cljs$lang$maxFixedArity = 2;
G__9452.cljs$lang$applyTo = (function (arglist__9457){
var x = cljs.core.first(arglist__9457);
var y = cljs.core.first(cljs.core.next(arglist__9457));
var more = cljs.core.rest(cljs.core.next(arglist__9457));
return G__9452__delegate.call(this, x, y, more);
});
return G__9452;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9447.call(this,x);
case  2 :
return _EQ__EQ___9448.call(this,x,y);
default:
return _EQ__EQ___9449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9449.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return (n > 0);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return (n === 0);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__9464 = n;
var xs__9465 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9469 = xs__9465;

if(cljs.core.truth_(and__3546__auto____9469))
{return (n__9464 > 0);
} else
{return and__3546__auto____9469;
}
})()))
{{
var G__9471 = (n__9464 - 1);
var G__9472 = cljs.core.next.call(null,xs__9465);
n__9464 = G__9471;
xs__9465 = G__9472;
continue;
}
} else
{return xs__9465;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9484 = null;
var G__9484__9485 = (function (coll,n){
var temp__3695__auto____9474 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9474))
{var xs__9475 = temp__3695__auto____9474;

return cljs.core.first.call(null,xs__9475);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9484__9486 = (function (coll,n,not_found){
var temp__3695__auto____9482 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9482))
{var xs__9483 = temp__3695__auto____9482;

return cljs.core.first.call(null,xs__9483);
} else
{return not_found;
}
});
G__9484 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9484__9485.call(this,coll,n);
case  3 :
return G__9484__9486.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9484;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9495 = (function (){
return "";
});
var str_STAR___9496 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
});
var str_STAR___9497 = (function() { 
var G__9501__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9502 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9503 = cljs.core.next.call(null,more);
sb = G__9502;
more = G__9503;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9501 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9501__delegate.call(this, x, ys);
};
G__9501.cljs$lang$maxFixedArity = 1;
G__9501.cljs$lang$applyTo = (function (arglist__9506){
var x = cljs.core.first(arglist__9506);
var ys = cljs.core.rest(arglist__9506);
return G__9501__delegate.call(this, x, ys);
});
return G__9501;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9495.call(this);
case  1 :
return str_STAR___9496.call(this,x);
default:
return str_STAR___9497.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9497.cljs$lang$applyTo;
return str_STAR_;
})()
;
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__9509 = (function (){
return "";
});
var str__9510 = (function (x){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,x)))
{return x.substring(2,x.length);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,x)))
{return cljs.core.str_STAR_.call(null,":",x.substring(2,x.length));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{if(cljs.core.truth_("﷐'else"))
{return x.toString();
} else
{return null;
}
}
}
}
});
var str__9511 = (function() { 
var G__9515__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9515 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9515__delegate.call(this, x, ys);
};
G__9515.cljs$lang$maxFixedArity = 1;
G__9515.cljs$lang$applyTo = (function (arglist__9517){
var x = cljs.core.first(arglist__9517);
var ys = cljs.core.rest(arglist__9517);
return G__9515__delegate.call(this, x, ys);
});
return G__9515;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9509.call(this);
case  1 :
return str__9510.call(this,x);
default:
return str__9511.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9511.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9536 = (function (s,start){
return s.substring(start);
});
var subs__9537 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9536.call(this,s,start);
case  3 :
return subs__9537.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__9545 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{cljs.core.str_STAR_.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{}
}
return cljs.core.str_STAR_.call(null,"﷑","'",name);
});
var symbol__9546 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9545.call(this,ns);
case  2 :
return symbol__9546.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__9554 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str_STAR_.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str_STAR_.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__9555 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9554.call(this,ns);
case  2 :
return keyword__9555.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9629 = cljs.core.seq.call(null,x);
var ys__9630 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9629)))
{return cljs.core.nil_QMARK_.call(null,ys__9630);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9630)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9629),cljs.core.first.call(null,ys__9630))))
{{
var G__9638 = cljs.core.next.call(null,xs__9629);
var G__9639 = cljs.core.next.call(null,ys__9630);
xs__9629 = G__9638;
ys__9630 = G__9639;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return (seed ^ (((hash + 2654435769) + (seed << 6)) + (seed >> 2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__9642_SHARP_,p2__9643_SHARP_){
return cljs.core.hash_combine.call(null,p1__9642_SHARP_,cljs.core.hash.call(null,p2__9643_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9658__9659 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9658__9659))
{var G__9661__9663 = cljs.core.first.call(null,G__9658__9659);
var vec__9662__9664 = G__9661__9663;
var key_name__9665 = cljs.core.nth.call(null,vec__9662__9664,0,null);
var f__9666 = cljs.core.nth.call(null,vec__9662__9664,1,null);
var G__9658__9667 = G__9658__9659;

var G__9661__9668 = G__9661__9663;
var G__9658__9669 = G__9658__9667;

while(true){
var vec__9670__9671 = G__9661__9668;
var key_name__9672 = cljs.core.nth.call(null,vec__9670__9671,0,null);
var f__9673 = cljs.core.nth.call(null,vec__9670__9671,1,null);
var G__9658__9675 = G__9658__9669;

var str_name__9677 = cljs.core.name.call(null,key_name__9672);

obj[str_name__9677] = f__9673;
var temp__3698__auto____9681 = cljs.core.next.call(null,G__9658__9675);

if(cljs.core.truth_(temp__3698__auto____9681))
{var G__9658__9684 = temp__3698__auto____9681;

{
var G__9706 = cljs.core.first.call(null,G__9658__9684);
var G__9707 = G__9658__9684;
G__9661__9668 = G__9706;
G__9658__9669 = G__9707;
continue;
}
} else
{}
break;
}
} else
{}
return obj;
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.List");
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9711 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9712 = this;
return (new cljs.core.List(this__9712.meta,o,coll,(this__9712.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9713 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9714 = this;
return this__9714.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9715 = this;
return this__9715.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9716 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9717 = this;
return this__9717.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9718 = this;
return this__9718.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9719 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9720 = this;
return (new cljs.core.List(meta,this__9720.first,this__9720.rest,this__9720.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9725 = this;
return this__9725.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9727 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.EmptyList");
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9863 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9864 = this;
return (new cljs.core.List(this__9864.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9865 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9866 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9867 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9868 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9870 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9871 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9872 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9873 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9874 = this;
return this__9874.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9875 = this;
return coll;
});
cljs.core.EmptyList;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__9890){
var items = cljs.core.seq( arglist__9890 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Cons");
});
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9898 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9900 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9902 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9904 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9904.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9906 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9908 = this;
return this__9908.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9910 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9910.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9910.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9911 = this;
return this__9911.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9913 = this;
return (new cljs.core.Cons(meta,this__9913.first,this__9913.rest));
});
cljs.core.Cons;
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__9972 = null;
var G__9972__9973 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9972__9974 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9972 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9972__9973.call(this,string,f);
case  3 :
return G__9972__9974.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9972;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9976 = null;
var G__9976__9977 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9976__9978 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9976 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9976__9977.call(this,string,k);
case  3 :
return G__9976__9978.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9976;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9982 = null;
var G__9982__9984 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9982__9985 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9982 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9982__9984.call(this,string,n);
case  3 :
return G__9982__9985.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9982;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String.prototype.cljs$core$IFn$ = true;
String.prototype.call = (function() {
var G__10006 = null;
var G__10006__10007 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10006__10008 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10006 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10006__10007.call(this,this$,coll);
case  3 :
return G__10006__10008.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10006;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_((cljs.core.count.call(null,args) < 2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__10018 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10018;
} else
{lazy_seq.x = x__10018.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.LazySeq");
});
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10068 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10069 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10072 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10073 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10073.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10074 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10075 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10076 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10077 = this;
return this__10077.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10078 = this;
return (new cljs.core.LazySeq(meta,this__10078.realized,this__10078.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10080 = cljs.core.array.call(null);

var s__10081 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10081)))
{ary__10080.push(cljs.core.first.call(null,s__10081));
{
var G__10084 = cljs.core.next.call(null,s__10081);
s__10081 = G__10084;
continue;
}
} else
{return ary__10080;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10087 = s;
var i__10088 = n;
var sum__10089 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10091 = (i__10088 > 0);

if(cljs.core.truth_(and__3546__auto____10091))
{return cljs.core.seq.call(null,s__10087);
} else
{return and__3546__auto____10091;
}
})()))
{{
var G__10092 = cljs.core.next.call(null,s__10087);
var G__10093 = (i__10088 - 1);
var G__10094 = (sum__10089 + 1);
s__10087 = G__10092;
i__10088 = G__10093;
sum__10089 = G__10094;
continue;
}
} else
{return sum__10089;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__10106 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10108 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10109 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10099 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10099))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10099),concat.call(null,cljs.core.rest.call(null,s__10099),y));
} else
{return y;
}
})));
});
var concat__10110 = (function() { 
var G__10125__delegate = function (x,y,zs){
var cat__10101 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10100 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10100))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10100),cat.call(null,cljs.core.rest.call(null,xys__10100),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10101.call(null,concat.call(null,x,y),zs);
};
var G__10125 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10125__delegate.call(this, x, y, zs);
};
G__10125.cljs$lang$maxFixedArity = 2;
G__10125.cljs$lang$applyTo = (function (arglist__10174){
var x = cljs.core.first(arglist__10174);
var y = cljs.core.first(cljs.core.next(arglist__10174));
var zs = cljs.core.rest(cljs.core.next(arglist__10174));
return G__10125__delegate.call(this, x, y, zs);
});
return G__10125;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10106.call(this);
case  1 :
return concat__10108.call(this,x);
case  2 :
return concat__10109.call(this,x,y);
default:
return concat__10110.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10110.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___10192 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10193 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10213 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10214 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10216 = (function() { 
var G__10218__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10218 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10218__delegate.call(this, a, b, c, d, more);
};
G__10218.cljs$lang$maxFixedArity = 4;
G__10218.cljs$lang$applyTo = (function (arglist__10225){
var a = cljs.core.first(arglist__10225);
var b = cljs.core.first(cljs.core.next(arglist__10225));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10225)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10225))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10225))));
return G__10218__delegate.call(this, a, b, c, d, more);
});
return G__10218;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10192.call(this,a);
case  2 :
return list_STAR___10193.call(this,a,b);
case  3 :
return list_STAR___10213.call(this,a,b,c);
case  4 :
return list_STAR___10214.call(this,a,b,c,d);
default:
return list_STAR___10216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10216.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__10240 = (function (f,args){
var fixed_arity__10226 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10226 + 1)) <= fixed_arity__10226)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10241 = (function (f,x,args){
var arglist__10227 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10228 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10227,fixed_arity__10228) <= fixed_arity__10228)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10227));
} else
{return f.cljs$lang$applyTo(arglist__10227);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10227));
}
});
var apply__10242 = (function (f,x,y,args){
var arglist__10230 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10231 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10230,fixed_arity__10231) <= fixed_arity__10231)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10230));
} else
{return f.cljs$lang$applyTo(arglist__10230);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10230));
}
});
var apply__10243 = (function (f,x,y,z,args){
var arglist__10232 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10235 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10232,fixed_arity__10235) <= fixed_arity__10235)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10232));
} else
{return f.cljs$lang$applyTo(arglist__10232);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10232));
}
});
var apply__10244 = (function() { 
var G__10251__delegate = function (f,a,b,c,d,args){
var arglist__10237 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10238 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10237,fixed_arity__10238) <= fixed_arity__10238)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10237));
} else
{return f.cljs$lang$applyTo(arglist__10237);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10237));
}
};
var G__10251 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10251__delegate.call(this, f, a, b, c, d, args);
};
G__10251.cljs$lang$maxFixedArity = 5;
G__10251.cljs$lang$applyTo = (function (arglist__10256){
var f = cljs.core.first(arglist__10256);
var a = cljs.core.first(cljs.core.next(arglist__10256));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10256)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10256))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10256)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10256)))));
return G__10251__delegate.call(this, f, a, b, c, d, args);
});
return G__10251;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10240.call(this,f,a);
case  3 :
return apply__10241.call(this,f,a,b);
case  4 :
return apply__10242.call(this,f,a,b,c);
case  5 :
return apply__10243.call(this,f,a,b,c,d);
default:
return apply__10244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10244.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__10307){
var obj = cljs.core.first(arglist__10307);
var f = cljs.core.first(cljs.core.next(arglist__10307));
var args = cljs.core.rest(cljs.core.next(arglist__10307));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___10311 = (function (x){
return false;
});
var not_EQ___10312 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10313 = (function() { 
var G__10315__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10315__delegate.call(this, x, y, more);
};
G__10315.cljs$lang$maxFixedArity = 2;
G__10315.cljs$lang$applyTo = (function (arglist__10317){
var x = cljs.core.first(arglist__10317);
var y = cljs.core.first(cljs.core.next(arglist__10317));
var more = cljs.core.rest(cljs.core.next(arglist__10317));
return G__10315__delegate.call(this, x, y, more);
});
return G__10315;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10311.call(this,x);
case  2 :
return not_EQ___10312.call(this,x,y);
default:
return not_EQ___10313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10313.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__10321 = pred;
var G__10322 = cljs.core.next.call(null,coll);
pred = G__10321;
coll = G__10322;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3548__auto____10351 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10351))
{return or__3548__auto____10351;
} else
{{
var G__10358 = pred;
var G__10359 = cljs.core.next.call(null,coll);
pred = G__10358;
coll = G__10359;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return ((n & 1) === 0);
} else
{throw (new Error(cljs.core.str.call(null,"Argument must be an integer: ",n)));
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__10393 = null;
var G__10393__10395 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10393__10396 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10393__10397 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10393__10398 = (function() { 
var G__10402__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10402 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10402__delegate.call(this, x, y, zs);
};
G__10402.cljs$lang$maxFixedArity = 2;
G__10402.cljs$lang$applyTo = (function (arglist__10405){
var x = cljs.core.first(arglist__10405);
var y = cljs.core.first(cljs.core.next(arglist__10405));
var zs = cljs.core.rest(cljs.core.next(arglist__10405));
return G__10402__delegate.call(this, x, y, zs);
});
return G__10402;
})()
;
G__10393 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10393__10395.call(this);
case  1 :
return G__10393__10396.call(this,x);
case  2 :
return G__10393__10397.call(this,x,y);
default:
return G__10393__10398.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10393.cljs$lang$maxFixedArity = 2;
G__10393.cljs$lang$applyTo = G__10393__10398.cljs$lang$applyTo;
return G__10393;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10410__delegate = function (args){
return x;
};
var G__10410 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10410__delegate.call(this, args);
};
G__10410.cljs$lang$maxFixedArity = 0;
G__10410.cljs$lang$applyTo = (function (arglist__10411){
var args = cljs.core.seq( arglist__10411 );;
return G__10410__delegate.call(this, args);
});
return G__10410;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__10442 = (function (){
return cljs.core.identity;
});
var comp__10443 = (function (f){
return f;
});
var comp__10444 = (function (f,g){
return (function() {
var G__10450 = null;
var G__10450__10451 = (function (){
return f.call(null,g.call(null));
});
var G__10450__10452 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10450__10453 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10450__10454 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10450__10455 = (function() { 
var G__10461__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10461 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10461__delegate.call(this, x, y, z, args);
};
G__10461.cljs$lang$maxFixedArity = 3;
G__10461.cljs$lang$applyTo = (function (arglist__10468){
var x = cljs.core.first(arglist__10468);
var y = cljs.core.first(cljs.core.next(arglist__10468));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10468)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10468)));
return G__10461__delegate.call(this, x, y, z, args);
});
return G__10461;
})()
;
G__10450 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10450__10451.call(this);
case  1 :
return G__10450__10452.call(this,x);
case  2 :
return G__10450__10453.call(this,x,y);
case  3 :
return G__10450__10454.call(this,x,y,z);
default:
return G__10450__10455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10450.cljs$lang$maxFixedArity = 3;
G__10450.cljs$lang$applyTo = G__10450__10455.cljs$lang$applyTo;
return G__10450;
})()
});
var comp__10445 = (function (f,g,h){
return (function() {
var G__10469 = null;
var G__10469__10471 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10469__10473 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10469__10475 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10469__10477 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10469__10480 = (function() { 
var G__10485__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10485 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10485__delegate.call(this, x, y, z, args);
};
G__10485.cljs$lang$maxFixedArity = 3;
G__10485.cljs$lang$applyTo = (function (arglist__10487){
var x = cljs.core.first(arglist__10487);
var y = cljs.core.first(cljs.core.next(arglist__10487));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10487)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10487)));
return G__10485__delegate.call(this, x, y, z, args);
});
return G__10485;
})()
;
G__10469 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10469__10471.call(this);
case  1 :
return G__10469__10473.call(this,x);
case  2 :
return G__10469__10475.call(this,x,y);
case  3 :
return G__10469__10477.call(this,x,y,z);
default:
return G__10469__10480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10469.cljs$lang$maxFixedArity = 3;
G__10469.cljs$lang$applyTo = G__10469__10480.cljs$lang$applyTo;
return G__10469;
})()
});
var comp__10447 = (function() { 
var G__10491__delegate = function (f1,f2,f3,fs){
var fs__10423 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10493__delegate = function (args){
var ret__10430 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10423),args);
var fs__10432 = cljs.core.next.call(null,fs__10423);

while(true){
if(cljs.core.truth_(fs__10432))
{{
var G__10494 = cljs.core.first.call(null,fs__10432).call(null,ret__10430);
var G__10495 = cljs.core.next.call(null,fs__10432);
ret__10430 = G__10494;
fs__10432 = G__10495;
continue;
}
} else
{return ret__10430;
}
break;
}
};
var G__10493 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10493__delegate.call(this, args);
};
G__10493.cljs$lang$maxFixedArity = 0;
G__10493.cljs$lang$applyTo = (function (arglist__10496){
var args = cljs.core.seq( arglist__10496 );;
return G__10493__delegate.call(this, args);
});
return G__10493;
})()
;
};
var G__10491 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10491__delegate.call(this, f1, f2, f3, fs);
};
G__10491.cljs$lang$maxFixedArity = 3;
G__10491.cljs$lang$applyTo = (function (arglist__10497){
var f1 = cljs.core.first(arglist__10497);
var f2 = cljs.core.first(cljs.core.next(arglist__10497));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10497)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10497)));
return G__10491__delegate.call(this, f1, f2, f3, fs);
});
return G__10491;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10442.call(this);
case  1 :
return comp__10443.call(this,f1);
case  2 :
return comp__10444.call(this,f1,f2);
case  3 :
return comp__10445.call(this,f1,f2,f3);
default:
return comp__10447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10447.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__10505 = (function (f,arg1){
return (function() { 
var G__10511__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10511 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10511__delegate.call(this, args);
};
G__10511.cljs$lang$maxFixedArity = 0;
G__10511.cljs$lang$applyTo = (function (arglist__10513){
var args = cljs.core.seq( arglist__10513 );;
return G__10511__delegate.call(this, args);
});
return G__10511;
})()
;
});
var partial__10506 = (function (f,arg1,arg2){
return (function() { 
var G__10516__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10516 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10516__delegate.call(this, args);
};
G__10516.cljs$lang$maxFixedArity = 0;
G__10516.cljs$lang$applyTo = (function (arglist__10518){
var args = cljs.core.seq( arglist__10518 );;
return G__10516__delegate.call(this, args);
});
return G__10516;
})()
;
});
var partial__10507 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10520__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10520 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10520__delegate.call(this, args);
};
G__10520.cljs$lang$maxFixedArity = 0;
G__10520.cljs$lang$applyTo = (function (arglist__10523){
var args = cljs.core.seq( arglist__10523 );;
return G__10520__delegate.call(this, args);
});
return G__10520;
})()
;
});
var partial__10508 = (function() { 
var G__10525__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10526__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10526 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10526__delegate.call(this, args);
};
G__10526.cljs$lang$maxFixedArity = 0;
G__10526.cljs$lang$applyTo = (function (arglist__10528){
var args = cljs.core.seq( arglist__10528 );;
return G__10526__delegate.call(this, args);
});
return G__10526;
})()
;
};
var G__10525 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10525__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10525.cljs$lang$maxFixedArity = 4;
G__10525.cljs$lang$applyTo = (function (arglist__10529){
var f = cljs.core.first(arglist__10529);
var arg1 = cljs.core.first(cljs.core.next(arglist__10529));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10529)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10529))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10529))));
return G__10525__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10525;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10505.call(this,f,arg1);
case  3 :
return partial__10506.call(this,f,arg1,arg2);
case  4 :
return partial__10507.call(this,f,arg1,arg2,arg3);
default:
return partial__10508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10508.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__10617 = (function (f,x){
return (function() {
var G__10621 = null;
var G__10621__10622 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10621__10623 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10621__10624 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10621__10625 = (function() { 
var G__10631__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10631 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10631__delegate.call(this, a, b, c, ds);
};
G__10631.cljs$lang$maxFixedArity = 3;
G__10631.cljs$lang$applyTo = (function (arglist__10632){
var a = cljs.core.first(arglist__10632);
var b = cljs.core.first(cljs.core.next(arglist__10632));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10632)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10632)));
return G__10631__delegate.call(this, a, b, c, ds);
});
return G__10631;
})()
;
G__10621 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10621__10622.call(this,a);
case  2 :
return G__10621__10623.call(this,a,b);
case  3 :
return G__10621__10624.call(this,a,b,c);
default:
return G__10621__10625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10621.cljs$lang$maxFixedArity = 3;
G__10621.cljs$lang$applyTo = G__10621__10625.cljs$lang$applyTo;
return G__10621;
})()
});
var fnil__10618 = (function (f,x,y){
return (function() {
var G__10639 = null;
var G__10639__10641 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10639__10642 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10639__10644 = (function() { 
var G__10651__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10651 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10651__delegate.call(this, a, b, c, ds);
};
G__10651.cljs$lang$maxFixedArity = 3;
G__10651.cljs$lang$applyTo = (function (arglist__10654){
var a = cljs.core.first(arglist__10654);
var b = cljs.core.first(cljs.core.next(arglist__10654));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10654)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10654)));
return G__10651__delegate.call(this, a, b, c, ds);
});
return G__10651;
})()
;
G__10639 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10639__10641.call(this,a,b);
case  3 :
return G__10639__10642.call(this,a,b,c);
default:
return G__10639__10644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10639.cljs$lang$maxFixedArity = 3;
G__10639.cljs$lang$applyTo = G__10639__10644.cljs$lang$applyTo;
return G__10639;
})()
});
var fnil__10619 = (function (f,x,y,z){
return (function() {
var G__10664 = null;
var G__10664__10665 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10664__10666 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10664__10667 = (function() { 
var G__10677__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10677 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10677__delegate.call(this, a, b, c, ds);
};
G__10677.cljs$lang$maxFixedArity = 3;
G__10677.cljs$lang$applyTo = (function (arglist__10683){
var a = cljs.core.first(arglist__10683);
var b = cljs.core.first(cljs.core.next(arglist__10683));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10683)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10683)));
return G__10677__delegate.call(this, a, b, c, ds);
});
return G__10677;
})()
;
G__10664 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10664__10665.call(this,a,b);
case  3 :
return G__10664__10666.call(this,a,b,c);
default:
return G__10664__10667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10664.cljs$lang$maxFixedArity = 3;
G__10664.cljs$lang$applyTo = G__10664__10667.cljs$lang$applyTo;
return G__10664;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10617.call(this,f,x);
case  3 :
return fnil__10618.call(this,f,x,y);
case  4 :
return fnil__10619.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__10712 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10710 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10710))
{var s__10711 = temp__3698__auto____10710;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10711)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10711)));
} else
{return null;
}
})));
});

return mapi__10712.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10720 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10720))
{var s__10722 = temp__3698__auto____10720;

var x__10724 = f.call(null,cljs.core.first.call(null,s__10722));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10724)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10722));
} else
{return cljs.core.cons.call(null,x__10724,keep.call(null,f,cljs.core.rest.call(null,s__10722)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__10757 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10740 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10740))
{var s__10745 = temp__3698__auto____10740;

var x__10747 = f.call(null,idx,cljs.core.first.call(null,s__10745));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10747)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10745));
} else
{return cljs.core.cons.call(null,x__10747,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10745)));
}
} else
{return null;
}
})));
});

return keepi__10757.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__10915 = (function (p){
return (function() {
var ep1 = null;
var ep1__10921 = (function (){
return true;
});
var ep1__10922 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10923 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10780 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10780))
{return p.call(null,y);
} else
{return and__3546__auto____10780;
}
})());
});
var ep1__10924 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10781 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10781))
{var and__3546__auto____10782 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10782))
{return p.call(null,z);
} else
{return and__3546__auto____10782;
}
} else
{return and__3546__auto____10781;
}
})());
});
var ep1__10925 = (function() { 
var G__10933__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10783 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10783))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10783;
}
})());
};
var G__10933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10933__delegate.call(this, x, y, z, args);
};
G__10933.cljs$lang$maxFixedArity = 3;
G__10933.cljs$lang$applyTo = (function (arglist__10936){
var x = cljs.core.first(arglist__10936);
var y = cljs.core.first(cljs.core.next(arglist__10936));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10936)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10936)));
return G__10933__delegate.call(this, x, y, z, args);
});
return G__10933;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10921.call(this);
case  1 :
return ep1__10922.call(this,x);
case  2 :
return ep1__10923.call(this,x,y);
case  3 :
return ep1__10924.call(this,x,y,z);
default:
return ep1__10925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10925.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10916 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10943 = (function (){
return true;
});
var ep2__10944 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10784 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10784))
{return p2.call(null,x);
} else
{return and__3546__auto____10784;
}
})());
});
var ep2__10945 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10785 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10785))
{var and__3546__auto____10786 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10786))
{var and__3546__auto____10787 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10787))
{return p2.call(null,y);
} else
{return and__3546__auto____10787;
}
} else
{return and__3546__auto____10786;
}
} else
{return and__3546__auto____10785;
}
})());
});
var ep2__10946 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10788 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10788))
{var and__3546__auto____10789 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10789))
{var and__3546__auto____10790 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10790))
{var and__3546__auto____10791 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10791))
{var and__3546__auto____10792 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10792))
{return p2.call(null,z);
} else
{return and__3546__auto____10792;
}
} else
{return and__3546__auto____10791;
}
} else
{return and__3546__auto____10790;
}
} else
{return and__3546__auto____10789;
}
} else
{return and__3546__auto____10788;
}
})());
});
var ep2__10947 = (function() { 
var G__10958__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10793 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10793))
{return cljs.core.every_QMARK_.call(null,(function (p1__10728_SHARP_){
var and__3546__auto____10803 = p1.call(null,p1__10728_SHARP_);

if(cljs.core.truth_(and__3546__auto____10803))
{return p2.call(null,p1__10728_SHARP_);
} else
{return and__3546__auto____10803;
}
}),args);
} else
{return and__3546__auto____10793;
}
})());
};
var G__10958 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10958__delegate.call(this, x, y, z, args);
};
G__10958.cljs$lang$maxFixedArity = 3;
G__10958.cljs$lang$applyTo = (function (arglist__10962){
var x = cljs.core.first(arglist__10962);
var y = cljs.core.first(cljs.core.next(arglist__10962));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10962)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10962)));
return G__10958__delegate.call(this, x, y, z, args);
});
return G__10958;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10943.call(this);
case  1 :
return ep2__10944.call(this,x);
case  2 :
return ep2__10945.call(this,x,y);
case  3 :
return ep2__10946.call(this,x,y,z);
default:
return ep2__10947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10947.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10917 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10968 = (function (){
return true;
});
var ep3__10969 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10809 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10809))
{var and__3546__auto____10811 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10811))
{return p3.call(null,x);
} else
{return and__3546__auto____10811;
}
} else
{return and__3546__auto____10809;
}
})());
});
var ep3__10970 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10816 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10816))
{var and__3546__auto____10819 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10819))
{var and__3546__auto____10821 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10821))
{var and__3546__auto____10822 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10822))
{var and__3546__auto____10829 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10829))
{return p3.call(null,y);
} else
{return and__3546__auto____10829;
}
} else
{return and__3546__auto____10822;
}
} else
{return and__3546__auto____10821;
}
} else
{return and__3546__auto____10819;
}
} else
{return and__3546__auto____10816;
}
})());
});
var ep3__10971 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10835 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10835))
{var and__3546__auto____10837 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10837))
{var and__3546__auto____10840 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10840))
{var and__3546__auto____10842 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10842))
{var and__3546__auto____10844 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10844))
{var and__3546__auto____10848 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10848))
{var and__3546__auto____10849 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10849))
{var and__3546__auto____10850 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10850))
{return p3.call(null,z);
} else
{return and__3546__auto____10850;
}
} else
{return and__3546__auto____10849;
}
} else
{return and__3546__auto____10848;
}
} else
{return and__3546__auto____10844;
}
} else
{return and__3546__auto____10842;
}
} else
{return and__3546__auto____10840;
}
} else
{return and__3546__auto____10837;
}
} else
{return and__3546__auto____10835;
}
})());
});
var ep3__10972 = (function() { 
var G__10997__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10852 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10852))
{return cljs.core.every_QMARK_.call(null,(function (p1__10729_SHARP_){
var and__3546__auto____10853 = p1.call(null,p1__10729_SHARP_);

if(cljs.core.truth_(and__3546__auto____10853))
{var and__3546__auto____10854 = p2.call(null,p1__10729_SHARP_);

if(cljs.core.truth_(and__3546__auto____10854))
{return p3.call(null,p1__10729_SHARP_);
} else
{return and__3546__auto____10854;
}
} else
{return and__3546__auto____10853;
}
}),args);
} else
{return and__3546__auto____10852;
}
})());
};
var G__10997 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10997__delegate.call(this, x, y, z, args);
};
G__10997.cljs$lang$maxFixedArity = 3;
G__10997.cljs$lang$applyTo = (function (arglist__11003){
var x = cljs.core.first(arglist__11003);
var y = cljs.core.first(cljs.core.next(arglist__11003));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11003)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11003)));
return G__10997__delegate.call(this, x, y, z, args);
});
return G__10997;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10968.call(this);
case  1 :
return ep3__10969.call(this,x);
case  2 :
return ep3__10970.call(this,x,y);
case  3 :
return ep3__10971.call(this,x,y,z);
default:
return ep3__10972.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10972.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10918 = (function() { 
var G__11027__delegate = function (p1,p2,p3,ps){
var ps__10859 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11028 = (function (){
return true;
});
var epn__11029 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10731_SHARP_){
return p1__10731_SHARP_.call(null,x);
}),ps__10859);
});
var epn__11030 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10733_SHARP_){
var and__3546__auto____10903 = p1__10733_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10903))
{return p1__10733_SHARP_.call(null,y);
} else
{return and__3546__auto____10903;
}
}),ps__10859);
});
var epn__11031 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10734_SHARP_){
var and__3546__auto____10905 = p1__10734_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10905))
{var and__3546__auto____10908 = p1__10734_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10908))
{return p1__10734_SHARP_.call(null,z);
} else
{return and__3546__auto____10908;
}
} else
{return and__3546__auto____10905;
}
}),ps__10859);
});
var epn__11032 = (function() { 
var G__11034__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10910 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10910))
{return cljs.core.every_QMARK_.call(null,(function (p1__10736_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10736_SHARP_,args);
}),ps__10859);
} else
{return and__3546__auto____10910;
}
})());
};
var G__11034 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11034__delegate.call(this, x, y, z, args);
};
G__11034.cljs$lang$maxFixedArity = 3;
G__11034.cljs$lang$applyTo = (function (arglist__11042){
var x = cljs.core.first(arglist__11042);
var y = cljs.core.first(cljs.core.next(arglist__11042));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11042)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11042)));
return G__11034__delegate.call(this, x, y, z, args);
});
return G__11034;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11028.call(this);
case  1 :
return epn__11029.call(this,x);
case  2 :
return epn__11030.call(this,x,y);
case  3 :
return epn__11031.call(this,x,y,z);
default:
return epn__11032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11032.cljs$lang$applyTo;
return epn;
})()
};
var G__11027 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11027__delegate.call(this, p1, p2, p3, ps);
};
G__11027.cljs$lang$maxFixedArity = 3;
G__11027.cljs$lang$applyTo = (function (arglist__11049){
var p1 = cljs.core.first(arglist__11049);
var p2 = cljs.core.first(cljs.core.next(arglist__11049));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11049)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11049)));
return G__11027__delegate.call(this, p1, p2, p3, ps);
});
return G__11027;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10915.call(this,p1);
case  2 :
return every_pred__10916.call(this,p1,p2);
case  3 :
return every_pred__10917.call(this,p1,p2,p3);
default:
return every_pred__10918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10918.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__11181 = (function (p){
return (function() {
var sp1 = null;
var sp1__11187 = (function (){
return null;
});
var sp1__11188 = (function (x){
return p.call(null,x);
});
var sp1__11189 = (function (x,y){
var or__3548__auto____11062 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11062))
{return or__3548__auto____11062;
} else
{return p.call(null,y);
}
});
var sp1__11190 = (function (x,y,z){
var or__3548__auto____11064 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11064))
{return or__3548__auto____11064;
} else
{var or__3548__auto____11067 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11067))
{return or__3548__auto____11067;
} else
{return p.call(null,z);
}
}
});
var sp1__11191 = (function() { 
var G__11203__delegate = function (x,y,z,args){
var or__3548__auto____11068 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11068))
{return or__3548__auto____11068;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11203 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11203__delegate.call(this, x, y, z, args);
};
G__11203.cljs$lang$maxFixedArity = 3;
G__11203.cljs$lang$applyTo = (function (arglist__11236){
var x = cljs.core.first(arglist__11236);
var y = cljs.core.first(cljs.core.next(arglist__11236));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11236)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11236)));
return G__11203__delegate.call(this, x, y, z, args);
});
return G__11203;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11187.call(this);
case  1 :
return sp1__11188.call(this,x);
case  2 :
return sp1__11189.call(this,x,y);
case  3 :
return sp1__11190.call(this,x,y,z);
default:
return sp1__11191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11191.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11182 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11244 = (function (){
return null;
});
var sp2__11245 = (function (x){
var or__3548__auto____11070 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11070))
{return or__3548__auto____11070;
} else
{return p2.call(null,x);
}
});
var sp2__11246 = (function (x,y){
var or__3548__auto____11076 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11076))
{return or__3548__auto____11076;
} else
{var or__3548__auto____11079 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11079))
{return or__3548__auto____11079;
} else
{var or__3548__auto____11080 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11080))
{return or__3548__auto____11080;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11247 = (function (x,y,z){
var or__3548__auto____11082 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11082))
{return or__3548__auto____11082;
} else
{var or__3548__auto____11083 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11083))
{return or__3548__auto____11083;
} else
{var or__3548__auto____11084 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11084))
{return or__3548__auto____11084;
} else
{var or__3548__auto____11087 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11087))
{return or__3548__auto____11087;
} else
{var or__3548__auto____11093 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11093))
{return or__3548__auto____11093;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11248 = (function() { 
var G__11267__delegate = function (x,y,z,args){
var or__3548__auto____11096 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11096))
{return or__3548__auto____11096;
} else
{return cljs.core.some.call(null,(function (p1__10773_SHARP_){
var or__3548__auto____11097 = p1.call(null,p1__10773_SHARP_);

if(cljs.core.truth_(or__3548__auto____11097))
{return or__3548__auto____11097;
} else
{return p2.call(null,p1__10773_SHARP_);
}
}),args);
}
};
var G__11267 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11267__delegate.call(this, x, y, z, args);
};
G__11267.cljs$lang$maxFixedArity = 3;
G__11267.cljs$lang$applyTo = (function (arglist__11275){
var x = cljs.core.first(arglist__11275);
var y = cljs.core.first(cljs.core.next(arglist__11275));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11275)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11275)));
return G__11267__delegate.call(this, x, y, z, args);
});
return G__11267;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11244.call(this);
case  1 :
return sp2__11245.call(this,x);
case  2 :
return sp2__11246.call(this,x,y);
case  3 :
return sp2__11247.call(this,x,y,z);
default:
return sp2__11248.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11248.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11183 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11280 = (function (){
return null;
});
var sp3__11281 = (function (x){
var or__3548__auto____11104 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11104))
{return or__3548__auto____11104;
} else
{var or__3548__auto____11107 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11107))
{return or__3548__auto____11107;
} else
{return p3.call(null,x);
}
}
});
var sp3__11282 = (function (x,y){
var or__3548__auto____11113 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11113))
{return or__3548__auto____11113;
} else
{var or__3548__auto____11114 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11114))
{return or__3548__auto____11114;
} else
{var or__3548__auto____11115 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11115))
{return or__3548__auto____11115;
} else
{var or__3548__auto____11117 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11117))
{return or__3548__auto____11117;
} else
{var or__3548__auto____11118 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11118))
{return or__3548__auto____11118;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11283 = (function (x,y,z){
var or__3548__auto____11121 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11121))
{return or__3548__auto____11121;
} else
{var or__3548__auto____11123 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11123))
{return or__3548__auto____11123;
} else
{var or__3548__auto____11129 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11129))
{return or__3548__auto____11129;
} else
{var or__3548__auto____11133 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11133))
{return or__3548__auto____11133;
} else
{var or__3548__auto____11134 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11134))
{return or__3548__auto____11134;
} else
{var or__3548__auto____11135 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11135))
{return or__3548__auto____11135;
} else
{var or__3548__auto____11138 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11138))
{return or__3548__auto____11138;
} else
{var or__3548__auto____11143 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11143))
{return or__3548__auto____11143;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__11284 = (function() { 
var G__11401__delegate = function (x,y,z,args){
var or__3548__auto____11147 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11147))
{return or__3548__auto____11147;
} else
{return cljs.core.some.call(null,(function (p1__10774_SHARP_){
var or__3548__auto____11148 = p1.call(null,p1__10774_SHARP_);

if(cljs.core.truth_(or__3548__auto____11148))
{return or__3548__auto____11148;
} else
{var or__3548__auto____11150 = p2.call(null,p1__10774_SHARP_);

if(cljs.core.truth_(or__3548__auto____11150))
{return or__3548__auto____11150;
} else
{return p3.call(null,p1__10774_SHARP_);
}
}
}),args);
}
};
var G__11401 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11401__delegate.call(this, x, y, z, args);
};
G__11401.cljs$lang$maxFixedArity = 3;
G__11401.cljs$lang$applyTo = (function (arglist__11404){
var x = cljs.core.first(arglist__11404);
var y = cljs.core.first(cljs.core.next(arglist__11404));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11404)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11404)));
return G__11401__delegate.call(this, x, y, z, args);
});
return G__11401;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11280.call(this);
case  1 :
return sp3__11281.call(this,x);
case  2 :
return sp3__11282.call(this,x,y);
case  3 :
return sp3__11283.call(this,x,y,z);
default:
return sp3__11284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11284.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11184 = (function() { 
var G__11408__delegate = function (p1,p2,p3,ps){
var ps__11157 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11413 = (function (){
return null;
});
var spn__11414 = (function (x){
return cljs.core.some.call(null,(function (p1__10775_SHARP_){
return p1__10775_SHARP_.call(null,x);
}),ps__11157);
});
var spn__11415 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10776_SHARP_){
var or__3548__auto____11164 = p1__10776_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11164))
{return or__3548__auto____11164;
} else
{return p1__10776_SHARP_.call(null,y);
}
}),ps__11157);
});
var spn__11416 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10778_SHARP_){
var or__3548__auto____11166 = p1__10778_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11166))
{return or__3548__auto____11166;
} else
{var or__3548__auto____11167 = p1__10778_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11167))
{return or__3548__auto____11167;
} else
{return p1__10778_SHARP_.call(null,z);
}
}
}),ps__11157);
});
var spn__11417 = (function() { 
var G__11423__delegate = function (x,y,z,args){
var or__3548__auto____11169 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11169))
{return or__3548__auto____11169;
} else
{return cljs.core.some.call(null,(function (p1__10779_SHARP_){
return cljs.core.some.call(null,p1__10779_SHARP_,args);
}),ps__11157);
}
};
var G__11423 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11423__delegate.call(this, x, y, z, args);
};
G__11423.cljs$lang$maxFixedArity = 3;
G__11423.cljs$lang$applyTo = (function (arglist__11431){
var x = cljs.core.first(arglist__11431);
var y = cljs.core.first(cljs.core.next(arglist__11431));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11431)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11431)));
return G__11423__delegate.call(this, x, y, z, args);
});
return G__11423;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11413.call(this);
case  1 :
return spn__11414.call(this,x);
case  2 :
return spn__11415.call(this,x,y);
case  3 :
return spn__11416.call(this,x,y,z);
default:
return spn__11417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11417.cljs$lang$applyTo;
return spn;
})()
};
var G__11408 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11408__delegate.call(this, p1, p2, p3, ps);
};
G__11408.cljs$lang$maxFixedArity = 3;
G__11408.cljs$lang$applyTo = (function (arglist__11432){
var p1 = cljs.core.first(arglist__11432);
var p2 = cljs.core.first(cljs.core.next(arglist__11432));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11432)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11432)));
return G__11408__delegate.call(this, p1, p2, p3, ps);
});
return G__11408;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11181.call(this,p1);
case  2 :
return some_fn__11182.call(this,p1,p2);
case  3 :
return some_fn__11183.call(this,p1,p2,p3);
default:
return some_fn__11184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11184.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__11488 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11447 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11447))
{var s__11449 = temp__3698__auto____11447;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11449)),map.call(null,f,cljs.core.rest.call(null,s__11449)));
} else
{return null;
}
})));
});
var map__11489 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11454 = cljs.core.seq.call(null,c1);
var s2__11458 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11460 = s1__11454;

if(cljs.core.truth_(and__3546__auto____11460))
{return s2__11458;
} else
{return and__3546__auto____11460;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11454),cljs.core.first.call(null,s2__11458)),map.call(null,f,cljs.core.rest.call(null,s1__11454),cljs.core.rest.call(null,s2__11458)));
} else
{return null;
}
})));
});
var map__11490 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11467 = cljs.core.seq.call(null,c1);
var s2__11468 = cljs.core.seq.call(null,c2);
var s3__11469 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11470 = s1__11467;

if(cljs.core.truth_(and__3546__auto____11470))
{var and__3546__auto____11471 = s2__11468;

if(cljs.core.truth_(and__3546__auto____11471))
{return s3__11469;
} else
{return and__3546__auto____11471;
}
} else
{return and__3546__auto____11470;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11467),cljs.core.first.call(null,s2__11468),cljs.core.first.call(null,s3__11469)),map.call(null,f,cljs.core.rest.call(null,s1__11467),cljs.core.rest.call(null,s2__11468),cljs.core.rest.call(null,s3__11469)));
} else
{return null;
}
})));
});
var map__11491 = (function() { 
var G__11712__delegate = function (f,c1,c2,c3,colls){
var step__11479 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11477 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11477)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11477),step.call(null,map.call(null,cljs.core.rest,ss__11477)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11061_SHARP_){
return cljs.core.apply.call(null,f,p1__11061_SHARP_);
}),step__11479.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11712 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11712__delegate.call(this, f, c1, c2, c3, colls);
};
G__11712.cljs$lang$maxFixedArity = 4;
G__11712.cljs$lang$applyTo = (function (arglist__11714){
var f = cljs.core.first(arglist__11714);
var c1 = cljs.core.first(cljs.core.next(arglist__11714));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11714)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11714))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11714))));
return G__11712__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11712;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11488.call(this,f,c1);
case  3 :
return map__11489.call(this,f,c1,c2);
case  4 :
return map__11490.call(this,f,c1,c2,c3);
default:
return map__11491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11491.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((n > 0)))
{var temp__3698__auto____11919 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11919))
{var s__11922 = temp__3698__auto____11919;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11922),take.call(null,(n - 1),cljs.core.rest.call(null,s__11922)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__11930 = (function (n,coll){
while(true){
var s__11927 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11929 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11929))
{return s__11927;
} else
{return and__3546__auto____11929;
}
})()))
{{
var G__11936 = (n - 1);
var G__11937 = cljs.core.rest.call(null,s__11927);
n = G__11936;
coll = G__11937;
continue;
}
} else
{return s__11927;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11930.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11940 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11941 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11940.call(this,n);
case  2 :
return drop_last__11941.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__11952 = cljs.core.seq.call(null,coll);
var lead__11954 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11954))
{{
var G__11956 = cljs.core.next.call(null,s__11952);
var G__11957 = cljs.core.next.call(null,lead__11954);
s__11952 = G__11956;
lead__11954 = G__11957;
continue;
}
} else
{return s__11952;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11965 = (function (pred,coll){
while(true){
var s__11962 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11963 = s__11962;

if(cljs.core.truth_(and__3546__auto____11963))
{return pred.call(null,cljs.core.first.call(null,s__11962));
} else
{return and__3546__auto____11963;
}
})()))
{{
var G__11972 = pred;
var G__11973 = cljs.core.rest.call(null,s__11962);
pred = G__11972;
coll = G__11973;
continue;
}
} else
{return s__11962;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11965.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11978 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11978))
{var s__11982 = temp__3698__auto____11978;

return cljs.core.concat.call(null,s__11982,cycle.call(null,s__11982));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__11993 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11994 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11993.call(this,n);
case  2 :
return repeat__11994.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__12006 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12007 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12006.call(this,n);
case  2 :
return repeatedly__12007.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__12092 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12085 = cljs.core.seq.call(null,c1);
var s2__12086 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12087 = s1__12085;

if(cljs.core.truth_(and__3546__auto____12087))
{return s2__12086;
} else
{return and__3546__auto____12087;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12085),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12086),interleave.call(null,cljs.core.rest.call(null,s1__12085),cljs.core.rest.call(null,s2__12086))));
} else
{return null;
}
})));
});
var interleave__12093 = (function() { 
var G__12099__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12090 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12090)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12090),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12090)));
} else
{return null;
}
})));
};
var G__12099 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12099__delegate.call(this, c1, c2, colls);
};
G__12099.cljs$lang$maxFixedArity = 2;
G__12099.cljs$lang$applyTo = (function (arglist__12101){
var c1 = cljs.core.first(arglist__12101);
var c2 = cljs.core.first(cljs.core.next(arglist__12101));
var colls = cljs.core.rest(cljs.core.next(arglist__12101));
return G__12099__delegate.call(this, c1, c2, colls);
});
return G__12099;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12092.call(this,c1,c2);
default:
return interleave__12093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12093.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__12105 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12103))
{var coll__12104 = temp__3695__auto____12103;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12104),cat.call(null,cljs.core.rest.call(null,coll__12104),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12105.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12107 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12116 = (function() { 
var G__12120__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12120 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12120__delegate.call(this, f, coll, colls);
};
G__12120.cljs$lang$maxFixedArity = 2;
G__12120.cljs$lang$applyTo = (function (arglist__12121){
var f = cljs.core.first(arglist__12121);
var coll = cljs.core.first(cljs.core.next(arglist__12121));
var colls = cljs.core.rest(cljs.core.next(arglist__12121));
return G__12120__delegate.call(this, f, coll, colls);
});
return G__12120;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12107.call(this,f,coll);
default:
return mapcat__12116.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12116.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12127 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12127))
{var s__12129 = temp__3698__auto____12127;

var f__12133 = cljs.core.first.call(null,s__12129);
var r__12135 = cljs.core.rest.call(null,s__12129);

if(cljs.core.truth_(pred.call(null,f__12133)))
{return cljs.core.cons.call(null,f__12133,filter.call(null,pred,r__12135));
} else
{return filter.call(null,pred,r__12135);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__12158 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12158.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12148_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12148_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__12185 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12186 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12177 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12177))
{var s__12179 = temp__3698__auto____12177;

var p__12180 = cljs.core.take.call(null,n,s__12179);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12180))))
{return cljs.core.cons.call(null,p__12180,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12179)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12187 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12181 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12181))
{var s__12182 = temp__3698__auto____12181;

var p__12183 = cljs.core.take.call(null,n,s__12182);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12183))))
{return cljs.core.cons.call(null,p__12183,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12182)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12183,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12185.call(this,n,step);
case  3 :
return partition__12186.call(this,n,step,pad);
case  4 :
return partition__12187.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__12205 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12206 = (function (m,ks,not_found){
var sentinel__12193 = cljs.core.lookup_sentinel;
var m__12194 = m;
var ks__12196 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12196))
{var m__12198 = cljs.core.get.call(null,m__12194,cljs.core.first.call(null,ks__12196),sentinel__12193);

if(cljs.core.truth_((sentinel__12193 === m__12198)))
{return not_found;
} else
{{
var G__12209 = sentinel__12193;
var G__12210 = m__12198;
var G__12211 = cljs.core.next.call(null,ks__12196);
sentinel__12193 = G__12209;
m__12194 = G__12210;
ks__12196 = G__12211;
continue;
}
}
} else
{return m__12194;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12205.call(this,m,ks);
case  3 :
return get_in__12206.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__12221,v){
var vec__12222__12223 = p__12221;
var k__12224 = cljs.core.nth.call(null,vec__12222__12223,0,null);
var ks__12225 = cljs.core.nthnext.call(null,vec__12222__12223,1);

if(cljs.core.truth_(ks__12225))
{return cljs.core.assoc.call(null,m,k__12224,assoc_in.call(null,cljs.core.get.call(null,m,k__12224),ks__12225,v));
} else
{return cljs.core.assoc.call(null,m,k__12224,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__12235,f,args){
var vec__12236__12237 = p__12235;
var k__12240 = cljs.core.nth.call(null,vec__12236__12237,0,null);
var ks__12242 = cljs.core.nthnext.call(null,vec__12236__12237,1);

if(cljs.core.truth_(ks__12242))
{return cljs.core.assoc.call(null,m,k__12240,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12240),ks__12242,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12240,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12240),args));
}
};
var update_in = function (m,p__12235,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12235, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12255){
var m = cljs.core.first(arglist__12255);
var p__12235 = cljs.core.first(cljs.core.next(arglist__12255));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12255)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12255)));
return update_in__delegate.call(this, m, p__12235, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Vector");
});
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12267 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12355 = null;
var G__12355__12356 = (function (coll,k){
var this__12268 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12355__12357 = (function (coll,k,not_found){
var this__12270 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12355 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12355__12356.call(this,coll,k);
case  3 :
return G__12355__12357.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12355;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12272 = this;
var new_array__12273 = cljs.core.aclone.call(null,this__12272.array);

(new_array__12273[k] = v);
return (new cljs.core.Vector(this__12272.meta,new_array__12273));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12363 = null;
var G__12363__12365 = (function (coll,k){
var this__12275 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12363__12366 = (function (coll,k,not_found){
var this__12277 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12363 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12363__12365.call(this,coll,k);
case  3 :
return G__12363__12366.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12363;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12280 = this;
var new_array__12282 = cljs.core.aclone.call(null,this__12280.array);

new_array__12282.push(o);
return (new cljs.core.Vector(this__12280.meta,new_array__12282));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12371 = null;
var G__12371__12372 = (function (v,f){
var this__12285 = this;
return cljs.core.ci_reduce.call(null,this__12285.array,f);
});
var G__12371__12373 = (function (v,f,start){
var this__12286 = this;
return cljs.core.ci_reduce.call(null,this__12286.array,f,start);
});
G__12371 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12371__12372.call(this,v,f);
case  3 :
return G__12371__12373.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12371;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12288 = this;
if(cljs.core.truth_((this__12288.array.length > 0)))
{var vector_seq__12291 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12288.array.length)))
{return cljs.core.cons.call(null,(this__12288.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12291.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12292 = this;
return this__12292.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12293 = this;
var count__12296 = this__12293.array.length;

if(cljs.core.truth_((count__12296 > 0)))
{return (this__12293.array[(count__12296 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12298 = this;
if(cljs.core.truth_((this__12298.array.length > 0)))
{var new_array__12303 = cljs.core.aclone.call(null,this__12298.array);

new_array__12303.pop();
return (new cljs.core.Vector(this__12298.meta,new_array__12303));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12304 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12306 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12310 = this;
return (new cljs.core.Vector(meta,this__12310.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12314 = this;
return this__12314.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12389 = null;
var G__12389__12390 = (function (coll,n){
var this__12315 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12317 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12317))
{return (n < this__12315.array.length);
} else
{return and__3546__auto____12317;
}
})()))
{return (this__12315.array[n]);
} else
{return null;
}
});
var G__12389__12391 = (function (coll,n,not_found){
var this__12320 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12321 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12321))
{return (n < this__12320.array.length);
} else
{return and__3546__auto____12321;
}
})()))
{return (this__12320.array[n]);
} else
{return not_found;
}
});
G__12389 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12389__12390.call(this,coll,n);
case  3 :
return G__12389__12391.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12389;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12322 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12322.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__12408){
var args = cljs.core.seq( arglist__12408 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.Subvec = (function (meta,v,start,end){
this.meta = meta;
this.v = v;
this.start = start;
this.end = end;
})
cljs.core.Subvec.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Subvec");
});
cljs.core.Subvec.prototype.cljs$core$IHash$ = true;
cljs.core.Subvec.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12416 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12459 = null;
var G__12459__12460 = (function (coll,k){
var this__12417 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12459__12461 = (function (coll,k,not_found){
var this__12419 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12459 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12459__12460.call(this,coll,k);
case  3 :
return G__12459__12461.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12459;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12421 = this;
var v_pos__12423 = (this__12421.start + key);

return (new cljs.core.Subvec(this__12421.meta,cljs.core._assoc.call(null,this__12421.v,v_pos__12423,val),this__12421.start,((this__12421.end > (v_pos__12423 + 1)) ? this__12421.end : (v_pos__12423 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12463 = null;
var G__12463__12464 = (function (coll,k){
var this__12425 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12463__12465 = (function (coll,k,not_found){
var this__12427 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12463 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12463__12464.call(this,coll,k);
case  3 :
return G__12463__12465.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12463;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12432 = this;
return (new cljs.core.Subvec(this__12432.meta,cljs.core._assoc_n.call(null,this__12432.v,this__12432.end,o),this__12432.start,(this__12432.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12467 = null;
var G__12467__12468 = (function (coll,f){
var this__12433 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12467__12469 = (function (coll,f,start){
var this__12434 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12467 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12467__12468.call(this,coll,f);
case  3 :
return G__12467__12469.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12467;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12435 = this;
var subvec_seq__12440 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12435.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12435.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12440.call(null,this__12435.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12441 = this;
return (this__12441.end - this__12441.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12445 = this;
return cljs.core._nth.call(null,this__12445.v,(this__12445.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12447 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12447.start,this__12447.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12447.meta,this__12447.v,this__12447.start,(this__12447.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12448 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12449 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12450 = this;
return (new cljs.core.Subvec(meta,this__12450.v,this__12450.start,this__12450.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12451 = this;
return this__12451.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12472 = null;
var G__12472__12473 = (function (coll,n){
var this__12452 = this;
return cljs.core._nth.call(null,this__12452.v,(this__12452.start + n));
});
var G__12472__12474 = (function (coll,n,not_found){
var this__12453 = this;
return cljs.core._nth.call(null,this__12453.v,(this__12453.start + n),not_found);
});
G__12472 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12472__12473.call(this,coll,n);
case  3 :
return G__12472__12474.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12472;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12454 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12454.meta);
});
cljs.core.Subvec;
/**
* Returns a persistent vector of the items in vector from
* start (inclusive) to end (exclusive).  If end is not supplied,
* defaults to (count vector). This operation is O(1) and very fast, as
* the resulting vector shares structure with the original and no
* trimming is done.
*/
cljs.core.subvec = (function() {
var subvec = null;
var subvec__12486 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12487 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12486.call(this,v,start);
case  3 :
return subvec__12487.call(this,v,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subvec;
})()
;

/**
* @constructor
*/
cljs.core.PersistentQueueSeq = (function (meta,front,rear){
this.meta = meta;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueueSeq.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueueSeq");
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12536 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12538 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12539 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12541 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12541.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12543 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12544 = this;
return cljs.core._first.call(null,this__12544.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12545 = this;
var temp__3695__auto____12547 = cljs.core.next.call(null,this__12545.front);

if(cljs.core.truth_(temp__3695__auto____12547))
{var f1__12548 = temp__3695__auto____12547;

return (new cljs.core.PersistentQueueSeq(this__12545.meta,f1__12548,this__12545.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12545.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12545.meta,this__12545.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12550 = this;
return this__12550.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12552 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12552.front,this__12552.rear));
});
cljs.core.PersistentQueueSeq;

/**
* @constructor
*/
cljs.core.PersistentQueue = (function (meta,count,front,rear){
this.meta = meta;
this.count = count;
this.front = front;
this.rear = rear;
})
cljs.core.PersistentQueue.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.PersistentQueue");
});
cljs.core.PersistentQueue.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12644 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12647 = this;
if(cljs.core.truth_(this__12647.front))
{return (new cljs.core.PersistentQueue(this__12647.meta,(this__12647.count + 1),this__12647.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12649 = this__12647.rear;

if(cljs.core.truth_(or__3548__auto____12649))
{return or__3548__auto____12649;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12647.meta,(this__12647.count + 1),cljs.core.conj.call(null,this__12647.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12650 = this;
var rear__12651 = cljs.core.seq.call(null,this__12650.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12653 = this__12650.front;

if(cljs.core.truth_(or__3548__auto____12653))
{return or__3548__auto____12653;
} else
{return rear__12651;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12650.front,cljs.core.seq.call(null,rear__12651)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12657 = this;
return this__12657.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12658 = this;
return cljs.core._first.call(null,this__12658.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12664 = this;
if(cljs.core.truth_(this__12664.front))
{var temp__3695__auto____12666 = cljs.core.next.call(null,this__12664.front);

if(cljs.core.truth_(temp__3695__auto____12666))
{var f1__12668 = temp__3695__auto____12666;

return (new cljs.core.PersistentQueue(this__12664.meta,(this__12664.count - 1),f1__12668,this__12664.rear));
} else
{return (new cljs.core.PersistentQueue(this__12664.meta,(this__12664.count - 1),cljs.core.seq.call(null,this__12664.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12674 = this;
return cljs.core.first.call(null,this__12674.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12676 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12678 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12684 = this;
return (new cljs.core.PersistentQueue(meta,this__12684.count,this__12684.front,this__12684.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12687 = this;
return this__12687.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12688 = this;
return cljs.core.PersistentQueue.EMPTY;
});
cljs.core.PersistentQueue;
cljs.core.PersistentQueue.EMPTY = (new cljs.core.PersistentQueue(null,0,null,cljs.core.Vector.fromArray([])));

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.NeverEquiv");
});
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__12698 = this;
return false;
});
cljs.core.NeverEquiv;
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__12711 = array.length;

var i__12712 = 0;

while(true){
if(cljs.core.truth_((i__12712 < len__12711)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12712]))))
{return i__12712;
} else
{{
var G__12716 = (i__12712 + incr);
i__12712 = G__12716;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___12721 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12722 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12719 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12719))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12719;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___12721.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12722.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.ObjMap");
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12736 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12791 = null;
var G__12791__12794 = (function (coll,k){
var this__12740 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12791__12796 = (function (coll,k,not_found){
var this__12742 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12742.strobj,(this__12742.strobj[k]),not_found);
});
G__12791 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12791__12794.call(this,coll,k);
case  3 :
return G__12791__12796.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12791;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12745 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12746 = goog.object.clone.call(null,this__12745.strobj);
var overwrite_QMARK___12748 = new_strobj__12746.hasOwnProperty(k);

(new_strobj__12746[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12748))
{return (new cljs.core.ObjMap(this__12745.meta,this__12745.keys,new_strobj__12746));
} else
{var new_keys__12751 = cljs.core.aclone.call(null,this__12745.keys);

new_keys__12751.push(k);
return (new cljs.core.ObjMap(this__12745.meta,new_keys__12751,new_strobj__12746));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12745.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12753 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12753.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12803 = null;
var G__12803__12804 = (function (coll,k){
var this__12756 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12803__12805 = (function (coll,k,not_found){
var this__12758 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12803 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12803__12804.call(this,coll,k);
case  3 :
return G__12803__12805.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12803;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12759 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12761 = this;
if(cljs.core.truth_((this__12761.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12726_SHARP_){
return cljs.core.vector.call(null,p1__12726_SHARP_,(this__12761.strobj[p1__12726_SHARP_]));
}),this__12761.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12766 = this;
return this__12766.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12767 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12768 = this;
return (new cljs.core.ObjMap(meta,this__12768.keys,this__12768.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12769 = this;
return this__12769.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12774 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12774.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12778 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12780 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12780))
{return this__12778.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12780;
}
})()))
{var new_keys__12781 = cljs.core.aclone.call(null,this__12778.keys);
var new_strobj__12782 = goog.object.clone.call(null,this__12778.strobj);

new_keys__12781.splice(cljs.core.scan_array.call(null,1,k,new_keys__12781),1);
cljs.core.js_delete.call(null,new_strobj__12782,k);
return (new cljs.core.ObjMap(this__12778.meta,new_keys__12781,new_strobj__12782));
} else
{return coll;
}
});
cljs.core.ObjMap;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.HashMap");
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12854 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12929 = null;
var G__12929__12930 = (function (coll,k){
var this__12858 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12929__12931 = (function (coll,k,not_found){
var this__12859 = this;
var bucket__12861 = (this__12859.hashobj[cljs.core.hash.call(null,k)]);
var i__12863 = (cljs.core.truth_(bucket__12861)?cljs.core.scan_array.call(null,2,k,bucket__12861):null);

if(cljs.core.truth_(i__12863))
{return (bucket__12861[(i__12863 + 1)]);
} else
{return not_found;
}
});
G__12929 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12929__12930.call(this,coll,k);
case  3 :
return G__12929__12931.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12929;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12876 = this;
var h__12877 = cljs.core.hash.call(null,k);
var bucket__12879 = (this__12876.hashobj[h__12877]);

if(cljs.core.truth_(bucket__12879))
{var new_bucket__12880 = cljs.core.aclone.call(null,bucket__12879);
var new_hashobj__12881 = goog.object.clone.call(null,this__12876.hashobj);

(new_hashobj__12881[h__12877] = new_bucket__12880);
var temp__3695__auto____12883 = cljs.core.scan_array.call(null,2,k,new_bucket__12880);

if(cljs.core.truth_(temp__3695__auto____12883))
{var i__12884 = temp__3695__auto____12883;

(new_bucket__12880[(i__12884 + 1)] = v);
return (new cljs.core.HashMap(this__12876.meta,this__12876.count,new_hashobj__12881));
} else
{new_bucket__12880.push(k,v);
return (new cljs.core.HashMap(this__12876.meta,(this__12876.count + 1),new_hashobj__12881));
}
} else
{var new_hashobj__12887 = goog.object.clone.call(null,this__12876.hashobj);

(new_hashobj__12887[h__12877] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12876.meta,(this__12876.count + 1),new_hashobj__12887));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12894 = this;
var bucket__12896 = (this__12894.hashobj[cljs.core.hash.call(null,k)]);
var i__12897 = (cljs.core.truth_(bucket__12896)?cljs.core.scan_array.call(null,2,k,bucket__12896):null);

if(cljs.core.truth_(i__12897))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12978 = null;
var G__12978__12979 = (function (coll,k){
var this__12899 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12978__12980 = (function (coll,k,not_found){
var this__12902 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12978 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12978__12979.call(this,coll,k);
case  3 :
return G__12978__12980.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12978;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12903 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12905 = this;
if(cljs.core.truth_((this__12905.count > 0)))
{var hashes__12909 = cljs.core.js_keys.call(null,this__12905.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12825_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12905.hashobj[p1__12825_SHARP_])));
}),hashes__12909);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12910 = this;
return this__12910.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12911 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12912 = this;
return (new cljs.core.HashMap(meta,this__12912.count,this__12912.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12917 = this;
return this__12917.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12918 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12918.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12920 = this;
var h__12922 = cljs.core.hash.call(null,k);
var bucket__12924 = (this__12920.hashobj[h__12922]);
var i__12925 = (cljs.core.truth_(bucket__12924)?cljs.core.scan_array.call(null,2,k,bucket__12924):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12925)))
{return coll;
} else
{var new_hashobj__12927 = goog.object.clone.call(null,this__12920.hashobj);

if(cljs.core.truth_((3 > bucket__12924.length)))
{cljs.core.js_delete.call(null,new_hashobj__12927,h__12922);
} else
{var new_bucket__12928 = cljs.core.aclone.call(null,bucket__12924);

new_bucket__12928.splice(i__12925,2);
(new_hashobj__12927[h__12922] = new_bucket__12928);
}
return (new cljs.core.HashMap(this__12920.meta,(this__12920.count - 1),new_hashobj__12927));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13020 = ks.length;

var i__13021 = 0;
var out__13022 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13021 < len__13020)))
{{
var G__13025 = (i__13021 + 1);
var G__13026 = cljs.core.assoc.call(null,out__13022,(ks[i__13021]),(vs[i__13021]));
i__13021 = G__13025;
out__13022 = G__13026;
continue;
}
} else
{return out__13022;
}
break;
}
});
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__13033 = cljs.core.seq.call(null,keyvals);
var out__13034 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13033))
{{
var G__13038 = cljs.core.nnext.call(null,in$__13033);
var G__13039 = cljs.core.assoc.call(null,out__13034,cljs.core.first.call(null,in$__13033),cljs.core.second.call(null,in$__13033));
in$__13033 = G__13038;
out__13034 = G__13039;
continue;
}
} else
{return out__13034;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__13045){
var keyvals = cljs.core.seq( arglist__13045 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__13052_SHARP_,p2__13054_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13068 = p1__13052_SHARP_;

if(cljs.core.truth_(or__3548__auto____13068))
{return or__3548__auto____13068;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13054_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__13076){
var maps = cljs.core.seq( arglist__13076 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__13084 = (function (m,e){
var k__13078 = cljs.core.first.call(null,e);
var v__13079 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13078)))
{return cljs.core.assoc.call(null,m,k__13078,f.call(null,cljs.core.get.call(null,m,k__13078),v__13079));
} else
{return cljs.core.assoc.call(null,m,k__13078,v__13079);
}
});
var merge2__13087 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13084,(function (){var or__3548__auto____13086 = m1;

if(cljs.core.truth_(or__3548__auto____13086))
{return or__3548__auto____13086;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13087,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__13102){
var f = cljs.core.first(arglist__13102);
var maps = cljs.core.rest(arglist__13102);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13109 = cljs.core.ObjMap.fromObject([],{});
var keys__13110 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13110))
{var key__13111 = cljs.core.first.call(null,keys__13110);
var entry__13112 = cljs.core.get.call(null,map,key__13111,"﷐'user/not-found");

{
var G__13116 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13112,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13109,key__13111,entry__13112):ret__13109);
var G__13117 = cljs.core.next.call(null,keys__13110);
ret__13109 = G__13116;
keys__13110 = G__13117;
continue;
}
} else
{return ret__13109;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Set");
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13129 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13174 = null;
var G__13174__13175 = (function (coll,v){
var this__13132 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13174__13176 = (function (coll,v,not_found){
var this__13135 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13135.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13174 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13174__13175.call(this,coll,v);
case  3 :
return G__13174__13176.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13174;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13182 = null;
var G__13182__13184 = (function (coll,k){
var this__13137 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13182__13185 = (function (coll,k,not_found){
var this__13140 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13182 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13182__13184.call(this,coll,k);
case  3 :
return G__13182__13185.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13182;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13142 = this;
return (new cljs.core.Set(this__13142.meta,cljs.core.assoc.call(null,this__13142.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13144 = this;
return cljs.core.keys.call(null,this__13144.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13147 = this;
return (new cljs.core.Set(this__13147.meta,cljs.core.dissoc.call(null,this__13147.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13151 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13154 = this;
var and__3546__auto____13156 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13156))
{var and__3546__auto____13159 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13159))
{return cljs.core.every_QMARK_.call(null,(function (p1__13105_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13105_SHARP_);
}),other);
} else
{return and__3546__auto____13159;
}
} else
{return and__3546__auto____13156;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13164 = this;
return (new cljs.core.Set(meta,this__13164.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13166 = this;
return this__13166.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13168 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13168.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13195 = cljs.core.seq.call(null,coll);
var out__13196 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13195))))
{{
var G__13201 = cljs.core.rest.call(null,in$__13195);
var G__13202 = cljs.core.conj.call(null,out__13196,cljs.core.first.call(null,in$__13195));
in$__13195 = G__13201;
out__13196 = G__13202;
continue;
}
} else
{return out__13196;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__13207 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13213 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13213))
{var e__13214 = temp__3695__auto____13213;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13214));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13207,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13194_SHARP_){
var temp__3695__auto____13215 = cljs.core.find.call(null,smap,p1__13194_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13215))
{var e__13216 = temp__3695__auto____13215;

return cljs.core.second.call(null,e__13216);
} else
{return p1__13194_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13225 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13218,seen){
while(true){
var vec__13219__13220 = p__13218;
var f__13221 = cljs.core.nth.call(null,vec__13219__13220,0,null);
var xs__13222 = vec__13219__13220;

var temp__3698__auto____13223 = cljs.core.seq.call(null,xs__13222);

if(cljs.core.truth_(temp__3698__auto____13223))
{var s__13224 = temp__3698__auto____13223;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13221)))
{{
var G__13227 = cljs.core.rest.call(null,s__13224);
var G__13228 = seen;
p__13218 = G__13227;
seen = G__13228;
continue;
}
} else
{return cljs.core.cons.call(null,f__13221,step.call(null,cljs.core.rest.call(null,s__13224),cljs.core.conj.call(null,seen,f__13221)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13225.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13230 = cljs.core.Vector.fromArray([]);
var s__13231 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13231)))
{{
var G__13234 = cljs.core.conj.call(null,ret__13230,cljs.core.first.call(null,s__13231));
var G__13235 = cljs.core.next.call(null,s__13231);
ret__13230 = G__13234;
s__13231 = G__13235;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13230);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3548__auto____13239 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13239))
{return or__3548__auto____13239;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13240 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13240 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13240 + 1));
}
} else
{if(cljs.core.truth_("﷐'else"))
{throw (new Error(cljs.core.str.call(null,"Doesn't support name: ",x)));
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3548__auto____13243 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13243))
{return or__3548__auto____13243;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13244 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13244 > -1)))
{return cljs.core.subs.call(null,x,2,i__13244);
} else
{return null;
}
} else
{throw (new Error(cljs.core.str.call(null,"Doesn't support namespace: ",x)));
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__13292 = cljs.core.ObjMap.fromObject([],{});
var ks__13294 = cljs.core.seq.call(null,keys);
var vs__13295 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13296 = ks__13294;

if(cljs.core.truth_(and__3546__auto____13296))
{return vs__13295;
} else
{return and__3546__auto____13296;
}
})()))
{{
var G__13304 = cljs.core.assoc.call(null,map__13292,cljs.core.first.call(null,ks__13294),cljs.core.first.call(null,vs__13295));
var G__13325 = cljs.core.next.call(null,ks__13294);
var G__13326 = cljs.core.next.call(null,vs__13295);
map__13292 = G__13304;
ks__13294 = G__13325;
vs__13295 = G__13326;
continue;
}
} else
{return map__13292;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__13342 = (function (k,x){
return x;
});
var max_key__13343 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13344 = (function() { 
var G__13349__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13250_SHARP_,p2__13290_SHARP_){
return max_key.call(null,k,p1__13250_SHARP_,p2__13290_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13349 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13349__delegate.call(this, k, x, y, more);
};
G__13349.cljs$lang$maxFixedArity = 3;
G__13349.cljs$lang$applyTo = (function (arglist__13352){
var k = cljs.core.first(arglist__13352);
var x = cljs.core.first(cljs.core.next(arglist__13352));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13352)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13352)));
return G__13349__delegate.call(this, k, x, y, more);
});
return G__13349;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13342.call(this,k,x);
case  3 :
return max_key__13343.call(this,k,x,y);
default:
return max_key__13344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13344.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13368 = (function (k,x){
return x;
});
var min_key__13369 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13370 = (function() { 
var G__13375__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13331_SHARP_,p2__13332_SHARP_){
return min_key.call(null,k,p1__13331_SHARP_,p2__13332_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13375 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13375__delegate.call(this, k, x, y, more);
};
G__13375.cljs$lang$maxFixedArity = 3;
G__13375.cljs$lang$applyTo = (function (arglist__13377){
var k = cljs.core.first(arglist__13377);
var x = cljs.core.first(cljs.core.next(arglist__13377));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13377)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13377)));
return G__13375__delegate.call(this, k, x, y, more);
});
return G__13375;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13368.call(this,k,x);
case  3 :
return min_key__13369.call(this,k,x,y);
default:
return min_key__13370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13370.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13393 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13394 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13388 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13388))
{var s__13390 = temp__3698__auto____13388;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13390),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13390)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13393.call(this,n,step);
case  3 :
return partition_all__13394.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13409 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13409))
{var s__13410 = temp__3698__auto____13409;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13410))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13410),take_while.call(null,pred,cljs.core.rest.call(null,s__13410)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Range");
});
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__13423 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13426 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13531 = null;
var G__13531__13625 = (function (rng,f){
var this__13431 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13531__13627 = (function (rng,f,s){
var this__13434 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13531 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13531__13625.call(this,rng,f);
case  3 :
return G__13531__13627.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13531;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13437 = this;
var comp__13444 = (cljs.core.truth_((this__13437.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13444.call(null,this__13437.start,this__13437.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13447 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13447.end - this__13447.start) / this__13447.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13449 = this;
return this__13449.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13450 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13450.meta,(this__13450.start + this__13450.step),this__13450.end,this__13450.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13454 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13457 = this;
return (new cljs.core.Range(meta,this__13457.start,this__13457.end,this__13457.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13460 = this;
return this__13460.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13703 = null;
var G__13703__13704 = (function (rng,n){
var this__13463 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13463.start + (n * this__13463.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13518 = (this__13463.start > this__13463.end);

if(cljs.core.truth_(and__3546__auto____13518))
{return cljs.core._EQ_.call(null,this__13463.step,0);
} else
{return and__3546__auto____13518;
}
})()))
{return this__13463.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13703__13705 = (function (rng,n,not_found){
var this__13521 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13521.start + (n * this__13521.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13523 = (this__13521.start > this__13521.end);

if(cljs.core.truth_(and__3546__auto____13523))
{return cljs.core._EQ_.call(null,this__13521.step,0);
} else
{return and__3546__auto____13523;
}
})()))
{return this__13521.start;
} else
{return not_found;
}
}
});
G__13703 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13703__13704.call(this,rng,n);
case  3 :
return G__13703__13705.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13703;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13524 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13524.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13720 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13721 = (function (end){
return range.call(null,0,end,1);
});
var range__13722 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13723 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13720.call(this);
case  1 :
return range__13721.call(this,start);
case  2 :
return range__13722.call(this,start,end);
case  3 :
return range__13723.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13734 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13734))
{var s__13739 = temp__3698__auto____13734;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13739),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13739)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13756 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13756))
{var s__13758 = temp__3698__auto____13756;

var fst__13764 = cljs.core.first.call(null,s__13758);
var fv__13765 = f.call(null,fst__13764);
var run__13768 = cljs.core.cons.call(null,fst__13764,cljs.core.take_while.call(null,(function (p1__13751_SHARP_){
return cljs.core._EQ_.call(null,fv__13765,f.call(null,p1__13751_SHARP_));
}),cljs.core.next.call(null,s__13758)));

return cljs.core.cons.call(null,run__13768,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13768),s__13758))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,(cljs.core.get.call(null,counts,x,0) + 1));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__13821 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13808 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13808))
{var s__13810 = temp__3695__auto____13808;

return reductions.call(null,f,cljs.core.first.call(null,s__13810),cljs.core.rest.call(null,s__13810));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13822 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13818 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13818))
{var s__13820 = temp__3698__auto____13818;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13820)),cljs.core.rest.call(null,s__13820));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13821.call(this,f,init);
case  3 :
return reductions__13822.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__13851 = (function (f){
return (function() {
var G__13856 = null;
var G__13856__13857 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13856__13858 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13856__13859 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13856__13860 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13856__13861 = (function() { 
var G__13865__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13865 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13865__delegate.call(this, x, y, z, args);
};
G__13865.cljs$lang$maxFixedArity = 3;
G__13865.cljs$lang$applyTo = (function (arglist__13867){
var x = cljs.core.first(arglist__13867);
var y = cljs.core.first(cljs.core.next(arglist__13867));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13867)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13867)));
return G__13865__delegate.call(this, x, y, z, args);
});
return G__13865;
})()
;
G__13856 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13856__13857.call(this);
case  1 :
return G__13856__13858.call(this,x);
case  2 :
return G__13856__13859.call(this,x,y);
case  3 :
return G__13856__13860.call(this,x,y,z);
default:
return G__13856__13861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13856.cljs$lang$maxFixedArity = 3;
G__13856.cljs$lang$applyTo = G__13856__13861.cljs$lang$applyTo;
return G__13856;
})()
});
var juxt__13852 = (function (f,g){
return (function() {
var G__13872 = null;
var G__13872__13875 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13872__13876 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13872__13877 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13872__13878 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13872__13879 = (function() { 
var G__13956__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13956 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13956__delegate.call(this, x, y, z, args);
};
G__13956.cljs$lang$maxFixedArity = 3;
G__13956.cljs$lang$applyTo = (function (arglist__13963){
var x = cljs.core.first(arglist__13963);
var y = cljs.core.first(cljs.core.next(arglist__13963));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13963)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13963)));
return G__13956__delegate.call(this, x, y, z, args);
});
return G__13956;
})()
;
G__13872 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13872__13875.call(this);
case  1 :
return G__13872__13876.call(this,x);
case  2 :
return G__13872__13877.call(this,x,y);
case  3 :
return G__13872__13878.call(this,x,y,z);
default:
return G__13872__13879.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13872.cljs$lang$maxFixedArity = 3;
G__13872.cljs$lang$applyTo = G__13872__13879.cljs$lang$applyTo;
return G__13872;
})()
});
var juxt__13853 = (function (f,g,h){
return (function() {
var G__13968 = null;
var G__13968__13969 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13968__13970 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13968__13971 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13968__13972 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13968__13973 = (function() { 
var G__13987__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13987 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13987__delegate.call(this, x, y, z, args);
};
G__13987.cljs$lang$maxFixedArity = 3;
G__13987.cljs$lang$applyTo = (function (arglist__13988){
var x = cljs.core.first(arglist__13988);
var y = cljs.core.first(cljs.core.next(arglist__13988));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13988)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13988)));
return G__13987__delegate.call(this, x, y, z, args);
});
return G__13987;
})()
;
G__13968 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13968__13969.call(this);
case  1 :
return G__13968__13970.call(this,x);
case  2 :
return G__13968__13971.call(this,x,y);
case  3 :
return G__13968__13972.call(this,x,y,z);
default:
return G__13968__13973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13968.cljs$lang$maxFixedArity = 3;
G__13968.cljs$lang$applyTo = G__13968__13973.cljs$lang$applyTo;
return G__13968;
})()
});
var juxt__13854 = (function() { 
var G__13990__delegate = function (f,g,h,fs){
var fs__13838 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13995 = null;
var G__13995__13998 = (function (){
return cljs.core.reduce.call(null,(function (p1__13796_SHARP_,p2__13797_SHARP_){
return cljs.core.conj.call(null,p1__13796_SHARP_,p2__13797_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13838);
});
var G__13995__13999 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13798_SHARP_,p2__13799_SHARP_){
return cljs.core.conj.call(null,p1__13798_SHARP_,p2__13799_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13838);
});
var G__13995__14000 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13800_SHARP_,p2__13801_SHARP_){
return cljs.core.conj.call(null,p1__13800_SHARP_,p2__13801_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13838);
});
var G__13995__14001 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13802_SHARP_,p2__13803_SHARP_){
return cljs.core.conj.call(null,p1__13802_SHARP_,p2__13803_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13838);
});
var G__13995__14002 = (function() { 
var G__14007__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13804_SHARP_,p2__13805_SHARP_){
return cljs.core.conj.call(null,p1__13804_SHARP_,cljs.core.apply.call(null,p2__13805_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13838);
};
var G__14007 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14007__delegate.call(this, x, y, z, args);
};
G__14007.cljs$lang$maxFixedArity = 3;
G__14007.cljs$lang$applyTo = (function (arglist__14010){
var x = cljs.core.first(arglist__14010);
var y = cljs.core.first(cljs.core.next(arglist__14010));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14010)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14010)));
return G__14007__delegate.call(this, x, y, z, args);
});
return G__14007;
})()
;
G__13995 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13995__13998.call(this);
case  1 :
return G__13995__13999.call(this,x);
case  2 :
return G__13995__14000.call(this,x,y);
case  3 :
return G__13995__14001.call(this,x,y,z);
default:
return G__13995__14002.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13995.cljs$lang$maxFixedArity = 3;
G__13995.cljs$lang$applyTo = G__13995__14002.cljs$lang$applyTo;
return G__13995;
})()
};
var G__13990 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13990__delegate.call(this, f, g, h, fs);
};
G__13990.cljs$lang$maxFixedArity = 3;
G__13990.cljs$lang$applyTo = (function (arglist__14016){
var f = cljs.core.first(arglist__14016);
var g = cljs.core.first(cljs.core.next(arglist__14016));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14016)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14016)));
return G__13990__delegate.call(this, f, g, h, fs);
});
return G__13990;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13851.call(this,f);
case  2 :
return juxt__13852.call(this,f,g);
case  3 :
return juxt__13853.call(this,f,g,h);
default:
return juxt__13854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13854.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__14036 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14040 = cljs.core.next.call(null,coll);
coll = G__14040;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14037 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14021 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14021))
{return (n > 0);
} else
{return and__3546__auto____14021;
}
})()))
{{
var G__14046 = (n - 1);
var G__14047 = cljs.core.next.call(null,coll);
n = G__14046;
coll = G__14047;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__14036.call(this,n);
case  2 :
return dorun__14037.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__14058 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14059 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14058.call(this,n);
case  2 :
return doall__14059.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__14064 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14064),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14064),1)))
{return cljs.core.first.call(null,matches__14064);
} else
{return cljs.core.vec.call(null,matches__14064);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__14074 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14074)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14074),1)))
{return cljs.core.first.call(null,matches__14074);
} else
{return cljs.core.vec.call(null,matches__14074);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14078 = cljs.core.re_find.call(null,re,s);
var match_idx__14080 = s.search(re);
var match_str__14081 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14078))?cljs.core.first.call(null,match_data__14078):match_data__14078);
var post_match__14082 = cljs.core.subs.call(null,s,(match_idx__14080 + cljs.core.count.call(null,match_str__14081)));

if(cljs.core.truth_(match_data__14078))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14078,re_seq.call(null,re,post_match__14082));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14169_SHARP_){
return print_one.call(null,p1__14169_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
cljs.core._STAR_print_fn_STAR_.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_((void 0 === obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14187 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14187))
{var and__3546__auto____14193 = (function (){var x__445__auto____14188 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14191 = x__445__auto____14188;

if(cljs.core.truth_(and__3546__auto____14191))
{var and__3546__auto____14192 = x__445__auto____14188.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14192))
{return cljs.core.not.call(null,x__445__auto____14188.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14192;
}
} else
{return and__3546__auto____14191;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14188);
}
})();

if(cljs.core.truth_(and__3546__auto____14193))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14193;
}
} else
{return and__3546__auto____14187;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14201 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14203 = x__445__auto____14201;

if(cljs.core.truth_(and__3546__auto____14203))
{var and__3546__auto____14205 = x__445__auto____14201.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14205))
{return cljs.core.not.call(null,x__445__auto____14201.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14205;
}
} else
{return and__3546__auto____14203;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14201);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__14215 = cljs.core.first.call(null,objs);
var sb__14216 = (new goog.string.StringBuffer());

var G__14217__14218 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14217__14218))
{var obj__14221 = cljs.core.first.call(null,G__14217__14218);
var G__14217__14222 = G__14217__14218;

while(true){
if(cljs.core.truth_((obj__14221 === first_obj__14215)))
{} else
{sb__14216.append(" ");
}
var G__14227__14234 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14221,opts));

if(cljs.core.truth_(G__14227__14234))
{var string__14236 = cljs.core.first.call(null,G__14227__14234);
var G__14227__14237 = G__14227__14234;

while(true){
sb__14216.append(string__14236);
var temp__3698__auto____14241 = cljs.core.next.call(null,G__14227__14237);

if(cljs.core.truth_(temp__3698__auto____14241))
{var G__14227__14247 = temp__3698__auto____14241;

{
var G__14265 = cljs.core.first.call(null,G__14227__14247);
var G__14266 = G__14227__14247;
string__14236 = G__14265;
G__14227__14237 = G__14266;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14249 = cljs.core.next.call(null,G__14217__14222);

if(cljs.core.truth_(temp__3698__auto____14249))
{var G__14217__14250 = temp__3698__auto____14249;

{
var G__14269 = cljs.core.first.call(null,G__14217__14250);
var G__14270 = G__14217__14250;
obj__14221 = G__14269;
G__14217__14222 = G__14270;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14216);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14275 = cljs.core.first.call(null,objs);

var G__14276__14277 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14276__14277))
{var obj__14279 = cljs.core.first.call(null,G__14276__14277);
var G__14276__14280 = G__14276__14277;

while(true){
if(cljs.core.truth_((obj__14279 === first_obj__14275)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14281__14283 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14279,opts));

if(cljs.core.truth_(G__14281__14283))
{var string__14285 = cljs.core.first.call(null,G__14281__14283);
var G__14281__14286 = G__14281__14283;

while(true){
cljs.core.string_print.call(null,string__14285);
var temp__3698__auto____14293 = cljs.core.next.call(null,G__14281__14286);

if(cljs.core.truth_(temp__3698__auto____14293))
{var G__14281__14294 = temp__3698__auto____14293;

{
var G__14299 = cljs.core.first.call(null,G__14281__14294);
var G__14300 = G__14281__14294;
string__14285 = G__14299;
G__14281__14286 = G__14300;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14295 = cljs.core.next.call(null,G__14276__14280);

if(cljs.core.truth_(temp__3698__auto____14295))
{var G__14276__14296 = temp__3698__auto____14295;

{
var G__14302 = cljs.core.first.call(null,G__14276__14296);
var G__14303 = G__14276__14296;
obj__14279 = G__14302;
G__14276__14280 = G__14303;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__14330){
var objs = cljs.core.seq( arglist__14330 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__14383){
var objs = cljs.core.seq( arglist__14383 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__14399){
var objs = cljs.core.seq( arglist__14399 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__14413){
var objs = cljs.core.seq( arglist__14413 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__14428){
var objs = cljs.core.seq( arglist__14428 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14436 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14436,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Subvec.prototype.cljs$core$IPrintable$ = true;
cljs.core.Subvec.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14455 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14455))
{var nspc__14456 = temp__3698__auto____14455;

return cljs.core.str.call(null,nspc__14456,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14457 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14457))
{var nspc__14458 = temp__3698__auto____14457;

return cljs.core.str.call(null,nspc__14458,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14475 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14475,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
})
cljs.core.Atom.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Atom");
});
cljs.core.Atom.prototype.cljs$core$IHash$ = true;
cljs.core.Atom.prototype.cljs$core$IHash$_hash = (function (this$){
var this__14518 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14521 = this;
var G__14523__14525 = cljs.core.seq.call(null,this__14521.watches);

if(cljs.core.truth_(G__14523__14525))
{var G__14529__14531 = cljs.core.first.call(null,G__14523__14525);
var vec__14530__14533 = G__14529__14531;
var key__14535 = cljs.core.nth.call(null,vec__14530__14533,0,null);
var f__14536 = cljs.core.nth.call(null,vec__14530__14533,1,null);
var G__14523__14537 = G__14523__14525;

var G__14529__14538 = G__14529__14531;
var G__14523__14539 = G__14523__14537;

while(true){
var vec__14540__14541 = G__14529__14538;
var key__14543 = cljs.core.nth.call(null,vec__14540__14541,0,null);
var f__14544 = cljs.core.nth.call(null,vec__14540__14541,1,null);
var G__14523__14545 = G__14523__14539;

f__14544.call(null,key__14543,this$,oldval,newval);
var temp__3698__auto____14547 = cljs.core.next.call(null,G__14523__14545);

if(cljs.core.truth_(temp__3698__auto____14547))
{var G__14523__14548 = temp__3698__auto____14547;

{
var G__14568 = cljs.core.first.call(null,G__14523__14548);
var G__14569 = G__14523__14548;
G__14529__14538 = G__14568;
G__14523__14539 = G__14569;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_add_watch = (function (this$,key,f){
var this__14549 = this;
return this$.watches = cljs.core.assoc.call(null,this__14549.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14550 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14550.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14553 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14553.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14558 = this;
return this__14558.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14562 = this;
return this__14562.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14563 = this;
return (o === other);
});
cljs.core.Atom;
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an Error.  If either of these error conditions
* occur, then the value of the atom will not change.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__14588 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14589 = (function() { 
var G__14593__delegate = function (x,p__14570){
var map__14572__14576 = p__14570;
var map__14572__14579 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14572__14576))?cljs.core.apply.call(null,cljs.core.hash_map,map__14572__14576):map__14572__14576);
var validator__14580 = cljs.core.get.call(null,map__14572__14579,"﷐'validator");
var meta__14581 = cljs.core.get.call(null,map__14572__14579,"﷐'meta");

return (new cljs.core.Atom(x,meta__14581,validator__14580,null));
};
var G__14593 = function (x,var_args){
var p__14570 = null;
if (goog.isDef(var_args)) {
  p__14570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14593__delegate.call(this, x, p__14570);
};
G__14593.cljs$lang$maxFixedArity = 1;
G__14593.cljs$lang$applyTo = (function (arglist__14594){
var x = cljs.core.first(arglist__14594);
var p__14570 = cljs.core.rest(arglist__14594);
return G__14593__delegate.call(this, x, p__14570);
});
return G__14593;
})()
;
atom = function(x,var_args){
var p__14570 = var_args;
switch(arguments.length){
case  1 :
return atom__14588.call(this,x);
default:
return atom__14589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14589.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14600 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14600))
{var validate__14603 = temp__3698__auto____14600;

if(cljs.core.truth_(validate__14603.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14609 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14609,new_value);
return new_value;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___14647 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14648 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14649 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14650 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14651 = (function() { 
var G__14654__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14654 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14654__delegate.call(this, a, f, x, y, z, more);
};
G__14654.cljs$lang$maxFixedArity = 5;
G__14654.cljs$lang$applyTo = (function (arglist__14659){
var a = cljs.core.first(arglist__14659);
var f = cljs.core.first(cljs.core.next(arglist__14659));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14659)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14659))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14659)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14659)))));
return G__14654__delegate.call(this, a, f, x, y, z, more);
});
return G__14654;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14647.call(this,a,f);
case  3 :
return swap_BANG___14648.call(this,a,f,x);
case  4 :
return swap_BANG___14649.call(this,a,f,x,y);
case  5 :
return swap_BANG___14650.call(this,a,f,x,y,z);
default:
return swap_BANG___14651.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14651.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for an atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an Error. If the current state
* is not acceptable to the new validator, an Error will be thrown and the
* validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14695){
var iref = cljs.core.first(arglist__14695);
var f = cljs.core.first(cljs.core.next(arglist__14695));
var args = cljs.core.rest(cljs.core.next(arglist__14695));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for an atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
/**
* Alpha - subject to change.
* 
* Adds a watch function to an atom reference. The watch fn must be a
* fn of 4 args: a key, the reference, its old-state, its
* new-state. Whenever the reference's state might have been changed,
* any registered watches will have their functions called. The watch
* fn will be called synchronously. Note that an atom's state
* may have changed again prior to the fn call, so use old/new-state
* rather than derefing the reference. Keys must be unique per
* reference, and can be used to remove the watch with remove-watch,
* but are otherwise considered opaque by the watch mechanism.  Bear in
* mind that regardless of the result or action of the watch fns the
* atom's value will change.  Example:
* 
* (def a (atom 0))
* (add-watch a :inc (fn [k r o n] (assert (== 0 n))))
* (swap! a inc)
* ;; Assertion Error
* (deref a)
* ;=> 1
*/
cljs.core.add_watch = (function add_watch(iref,key,f){
return cljs.core._add_watch.call(null,iref,key,f);
});
/**
* Alpha - subject to change.
* 
* Removes a watch (set by add-watch) from a reference
*/
cljs.core.remove_watch = (function remove_watch(iref,key){
return cljs.core._remove_watch.call(null,iref,key);
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__14782 = (function (){
return gensym.call(null,"G__");
});
var gensym__14783 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14782.call(this);
case  1 :
return gensym__14783.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.Delay");
});
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__14788 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14788.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14789 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14789.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14789.state,this__14789.f);
}
return cljs.core.deref.call(null,this__14789.state);
});
cljs.core.Delay;
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__14799){
var body = cljs.core.seq( arglist__14799 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__14828__14829 = options;
var map__14828__14830 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14828__14829))?cljs.core.apply.call(null,cljs.core.hash_map,map__14828__14829):map__14828__14829);
var keywordize_keys__14832 = cljs.core.get.call(null,map__14828__14830,"﷐'keywordize-keys");
var keyfn__14834 = (cljs.core.truth_(keywordize_keys__14832)?cljs.core.keyword:cljs.core.str);
var f__14845 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14844 = (function iter__14837(s__14839){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14839__14841 = s__14839;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14839__14841)))
{var k__14843 = cljs.core.first.call(null,s__14839__14841);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14834.call(null,k__14843),thisfn.call(null,(x[k__14843]))]),iter__14837.call(null,cljs.core.rest.call(null,s__14839__14841)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14844.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__14845.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14861){
var x = cljs.core.first(arglist__14861);
var options = cljs.core.rest(arglist__14861);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__14872 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14882__delegate = function (args){
var temp__3695__auto____14873 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14872),args);

if(cljs.core.truth_(temp__3695__auto____14873))
{var v__14875 = temp__3695__auto____14873;

return v__14875;
} else
{var ret__14876 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14872,cljs.core.assoc,args,ret__14876);
return ret__14876;
}
};
var G__14882 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14882__delegate.call(this, args);
};
G__14882.cljs$lang$maxFixedArity = 0;
G__14882.cljs$lang$applyTo = (function (arglist__14884){
var args = cljs.core.seq( arglist__14884 );;
return G__14882__delegate.call(this, args);
});
return G__14882;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__14893 = (function (f){
while(true){
var ret__14887 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14887)))
{{
var G__14897 = ret__14887;
f = G__14897;
continue;
}
} else
{return ret__14887;
}
break;
}
});
var trampoline__14894 = (function() { 
var G__14898__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14898 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14898__delegate.call(this, f, args);
};
G__14898.cljs$lang$maxFixedArity = 1;
G__14898.cljs$lang$applyTo = (function (arglist__14900){
var f = cljs.core.first(arglist__14900);
var args = cljs.core.rest(arglist__14900);
return G__14898__delegate.call(this, f, args);
});
return G__14898;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14893.call(this,f);
default:
return trampoline__14894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14894.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14904 = (function (){
return rand.call(null,1);
});
var rand__14905 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14904.call(this);
case  1 :
return rand__14905.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__14919 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14919,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14919,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___14938 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14939 = (function (h,child,parent){
var or__3548__auto____14925 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14925))
{return or__3548__auto____14925;
} else
{var or__3548__auto____14926 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14926))
{return or__3548__auto____14926;
} else
{var and__3546__auto____14931 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14931))
{var and__3546__auto____14932 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14932))
{var and__3546__auto____14934 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14934))
{var ret__14935 = true;
var i__14936 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14937 = cljs.core.not.call(null,ret__14935);

if(cljs.core.truth_(or__3548__auto____14937))
{return or__3548__auto____14937;
} else
{return cljs.core._EQ_.call(null,i__14936,cljs.core.count.call(null,parent));
}
})()))
{return ret__14935;
} else
{{
var G__14943 = isa_QMARK_.call(null,h,child.call(null,i__14936),parent.call(null,i__14936));
var G__14944 = (i__14936 + 1);
ret__14935 = G__14943;
i__14936 = G__14944;
continue;
}
}
break;
}
} else
{return and__3546__auto____14934;
}
} else
{return and__3546__auto____14932;
}
} else
{return and__3546__auto____14931;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14938.call(this,h,child);
case  3 :
return isa_QMARK___14939.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__14947 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14948 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14947.call(this,h);
case  2 :
return parents__14948.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__14955 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14956 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14955.call(this,h);
case  2 :
return ancestors__14956.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__14974 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14975 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14974.call(this,h);
case  2 :
return descendants__14975.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__15015 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15016 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14987 = "﷐'parents".call(null,h);
var td__15004 = "﷐'descendants".call(null,h);
var ta__15005 = "﷐'ancestors".call(null,h);
var tf__15006 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15013 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14987.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15005.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15005.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14987,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15006.call(null,"﷐'ancestors".call(null,h),tag,td__15004,parent,ta__15005),"﷐'descendants":tf__15006.call(null,"﷐'descendants".call(null,h),parent,ta__15005,tag,td__15004)});
})());

if(cljs.core.truth_(or__3548__auto____15013))
{return or__3548__auto____15013;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15015.call(this,h,tag);
case  3 :
return derive__15016.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__15056 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15057 = (function (h,tag,parent){
var parentMap__15040 = "﷐'parents".call(null,h);
var childsParents__15042 = (cljs.core.truth_(parentMap__15040.call(null,tag))?cljs.core.disj.call(null,parentMap__15040.call(null,tag),parent):cljs.core.set([]));
var newParents__15044 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15042))?cljs.core.assoc.call(null,parentMap__15040,tag,childsParents__15042):cljs.core.dissoc.call(null,parentMap__15040,tag));
var deriv_seq__15049 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14981_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14981_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14981_SHARP_),cljs.core.second.call(null,p1__14981_SHARP_)));
}),cljs.core.seq.call(null,newParents__15044)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15040.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14982_SHARP_,p2__14983_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14982_SHARP_,p2__14983_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15049));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15056.call(this,h,tag);
case  3 :
return underive__15057.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__15067 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15072 = (cljs.core.truth_((function (){var and__3546__auto____15069 = xprefs__15067;

if(cljs.core.truth_(and__3546__auto____15069))
{return xprefs__15067.call(null,y);
} else
{return and__3546__auto____15069;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15072))
{return or__3548__auto____15072;
} else
{var or__3548__auto____15079 = (function (){var ps__15075 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15075) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15075),prefer_table)))
{} else
{}
{
var G__15086 = cljs.core.rest.call(null,ps__15075);
ps__15075 = G__15086;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15079))
{return or__3548__auto____15079;
} else
{var or__3548__auto____15083 = (function (){var ps__15080 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15080) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15080),y,prefer_table)))
{} else
{}
{
var G__15089 = cljs.core.rest.call(null,ps__15080);
ps__15080 = G__15089;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15083))
{return or__3548__auto____15083;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15100 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15100))
{return or__3548__auto____15100;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15115 = cljs.core.reduce.call(null,(function (be,p__15103){
var vec__15107__15108 = p__15103;
var k__15109 = cljs.core.nth.call(null,vec__15107__15108,0,null);
var ___15110 = cljs.core.nth.call(null,vec__15107__15108,1,null);
var e__15111 = vec__15107__15108;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15109)))
{var be2__15114 = (cljs.core.truth_((function (){var or__3548__auto____15112 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15112))
{return or__3548__auto____15112;
} else
{return cljs.core.dominates.call(null,k__15109,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15111:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15114),k__15109,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15109," and ",cljs.core.first.call(null,be2__15114),", and neither is preferred")));
}
return be2__15114;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15115))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15115));
return cljs.core.second.call(null,best_entry__15115);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15118 = mf;

if(cljs.core.truth_(and__3546__auto____15118))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15118;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15121 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15121))
{return or__3548__auto____15121;
} else
{var or__3548__auto____15124 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15124))
{return or__3548__auto____15124;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15133 = mf;

if(cljs.core.truth_(and__3546__auto____15133))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15133;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15137 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15137))
{return or__3548__auto____15137;
} else
{var or__3548__auto____15138 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15138))
{return or__3548__auto____15138;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15143 = mf;

if(cljs.core.truth_(and__3546__auto____15143))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15143;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15147 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15147))
{return or__3548__auto____15147;
} else
{var or__3548__auto____15148 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15148))
{return or__3548__auto____15148;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15151 = mf;

if(cljs.core.truth_(and__3546__auto____15151))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15151;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15152 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15152))
{return or__3548__auto____15152;
} else
{var or__3548__auto____15153 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15153))
{return or__3548__auto____15153;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15154 = mf;

if(cljs.core.truth_(and__3546__auto____15154))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15154;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15221 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15221))
{return or__3548__auto____15221;
} else
{var or__3548__auto____15222 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15222))
{return or__3548__auto____15222;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15223 = mf;

if(cljs.core.truth_(and__3546__auto____15223))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15223;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15225 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15225))
{return or__3548__auto____15225;
} else
{var or__3548__auto____15227 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15227))
{return or__3548__auto____15227;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15229 = mf;

if(cljs.core.truth_(and__3546__auto____15229))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15229;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15231 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15231))
{return or__3548__auto____15231;
} else
{var or__3548__auto____15232 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15232))
{return or__3548__auto____15232;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15236 = mf;

if(cljs.core.truth_(and__3546__auto____15236))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15236;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15237 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15237))
{return or__3548__auto____15237;
} else
{var or__3548__auto____15238 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15238))
{return or__3548__auto____15238;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15260 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15261 = cljs.core._get_method.call(null,mf,dispatch_val__15260);

if(cljs.core.truth_(target_fn__15261))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15260)));
}
return cljs.core.apply.call(null,target_fn__15261,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.cljs$core$IPrintable$_pr_seq = (function (this__360__auto__){
return cljs.core.list.call(null,"cljs.core.MultiFn");
});
cljs.core.MultiFn.prototype.cljs$core$IHash$ = true;
cljs.core.MultiFn.prototype.cljs$core$IHash$_hash = (function (this$){
var this__15272 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15273 = this;
cljs.core.swap_BANG_.call(null,this__15273.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15273.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15273.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15273.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15310 = this;
cljs.core.swap_BANG_.call(null,this__15310.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15310.method_cache,this__15310.method_table,this__15310.cached_hierarchy,this__15310.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15312 = this;
cljs.core.swap_BANG_.call(null,this__15312.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15312.method_cache,this__15312.method_table,this__15312.cached_hierarchy,this__15312.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15313 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15313.cached_hierarchy),cljs.core.deref.call(null,this__15313.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15313.method_cache,this__15313.method_table,this__15313.cached_hierarchy,this__15313.hierarchy);
}
var temp__3695__auto____15318 = cljs.core.deref.call(null,this__15313.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15318))
{var target_fn__15321 = temp__3695__auto____15318;

return target_fn__15321;
} else
{var temp__3695__auto____15322 = cljs.core.find_and_cache_best_method.call(null,this__15313.name,dispatch_val,this__15313.hierarchy,this__15313.method_table,this__15313.prefer_table,this__15313.method_cache,this__15313.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15322))
{var target_fn__15324 = temp__3695__auto____15322;

return target_fn__15324;
} else
{return cljs.core.deref.call(null,this__15313.method_table).call(null,this__15313.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15326 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15326.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15326.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15326.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15326.method_cache,this__15326.method_table,this__15326.cached_hierarchy,this__15326.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15328 = this;
return cljs.core.deref.call(null,this__15328.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15329 = this;
return cljs.core.deref.call(null,this__15329.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15330 = this;
return cljs.core.do_dispatch.call(null,mf,this__15330.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15337__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15337 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15337__delegate.call(this, _, args);
};
G__15337.cljs$lang$maxFixedArity = 1;
G__15337.cljs$lang$applyTo = (function (arglist__15341){
var _ = cljs.core.first(arglist__15341);
var args = cljs.core.rest(arglist__15341);
return G__15337__delegate.call(this, _, args);
});
return G__15337;
})()
;
cljs.core.MultiFn.prototype.apply = (function (_,args){
return cljs.core._dispatch.call(null,this,args);
});
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
