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
var or__3548__auto____7305 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7305))
{return or__3548__auto____7305;
} else
{var or__3548__auto____7313 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
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
var _invoke__7688 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7314 = this$;

if(cljs.core.truth_(and__3546__auto____7314))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7314;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7316 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
} else
{var or__3548__auto____7317 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7317))
{return or__3548__auto____7317;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7689 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7320 = this$;

if(cljs.core.truth_(and__3546__auto____7320))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7320;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7322 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
} else
{var or__3548__auto____7323 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7323))
{return or__3548__auto____7323;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7690 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7326 = this$;

if(cljs.core.truth_(and__3546__auto____7326))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7326;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7328 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{var or__3548__auto____7329 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7691 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7334 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{var or__3548__auto____7335 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7335))
{return or__3548__auto____7335;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7692 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7338 = this$;

if(cljs.core.truth_(and__3546__auto____7338))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7338;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7339 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{var or__3548__auto____7341 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7693 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7344 = this$;

if(cljs.core.truth_(and__3546__auto____7344))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7344;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7398 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7694 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7402 = this$;

if(cljs.core.truth_(and__3546__auto____7402))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7402;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{var or__3548__auto____7407 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7407))
{return or__3548__auto____7407;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7695 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7414 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7414))
{return or__3548__auto____7414;
} else
{var or__3548__auto____7416 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7696 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7425 = this$;

if(cljs.core.truth_(and__3546__auto____7425))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7425;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7428 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{var or__3548__auto____7430 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7697 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7453 = this$;

if(cljs.core.truth_(and__3546__auto____7453))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7453;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7458 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{var or__3548__auto____7459 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7459))
{return or__3548__auto____7459;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7698 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7463 = this$;

if(cljs.core.truth_(and__3546__auto____7463))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7463;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7467 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{var or__3548__auto____7468 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7468))
{return or__3548__auto____7468;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7699 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7472 = this$;

if(cljs.core.truth_(and__3546__auto____7472))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7472;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7476 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{var or__3548__auto____7477 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7477))
{return or__3548__auto____7477;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7700 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7481 = this$;

if(cljs.core.truth_(and__3546__auto____7481))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7481;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{var or__3548__auto____7486 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7486))
{return or__3548__auto____7486;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7701 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7488 = this$;

if(cljs.core.truth_(and__3546__auto____7488))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7488;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7490 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{var or__3548__auto____7492 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7702 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7519 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{var or__3548__auto____7520 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7520))
{return or__3548__auto____7520;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7703 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7523 = this$;

if(cljs.core.truth_(and__3546__auto____7523))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7523;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7529 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7529))
{return or__3548__auto____7529;
} else
{var or__3548__auto____7532 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7532))
{return or__3548__auto____7532;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7704 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7537 = this$;

if(cljs.core.truth_(and__3546__auto____7537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7541 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{var or__3548__auto____7543 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7543))
{return or__3548__auto____7543;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7705 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7547 = this$;

if(cljs.core.truth_(and__3546__auto____7547))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7547;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7552 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7552))
{return or__3548__auto____7552;
} else
{var or__3548__auto____7553 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7553))
{return or__3548__auto____7553;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7706 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7559 = this$;

if(cljs.core.truth_(and__3546__auto____7559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7563 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7563))
{return or__3548__auto____7563;
} else
{var or__3548__auto____7565 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7565))
{return or__3548__auto____7565;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7707 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7595 = this$;

if(cljs.core.truth_(and__3546__auto____7595))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7595;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7681 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7681))
{return or__3548__auto____7681;
} else
{var or__3548__auto____7682 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7682))
{return or__3548__auto____7682;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7708 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7684 = this$;

if(cljs.core.truth_(and__3546__auto____7684))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7684;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7686 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
} else
{var or__3548__auto____7687 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7687))
{return or__3548__auto____7687;
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
return _invoke__7688.call(this,this$);
case  2 :
return _invoke__7689.call(this,this$,a);
case  3 :
return _invoke__7690.call(this,this$,a,b);
case  4 :
return _invoke__7691.call(this,this$,a,b,c);
case  5 :
return _invoke__7692.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7693.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7694.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7695.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7696.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7697.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7698.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7699.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7700.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7701.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7702.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7703.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7704.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7705.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7706.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7707.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7708.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7872 = coll;

if(cljs.core.truth_(and__3546__auto____7872))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7872;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7874 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7874))
{return or__3548__auto____7874;
} else
{var or__3548__auto____7876 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7878 = coll;

if(cljs.core.truth_(and__3546__auto____7878))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7878;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7888 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{var or__3548__auto____7889 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7889))
{return or__3548__auto____7889;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7893 = coll;

if(cljs.core.truth_(and__3546__auto____7893))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7893;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7899 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7899))
{return or__3548__auto____7899;
} else
{var or__3548__auto____7901 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7901))
{return or__3548__auto____7901;
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
var _nth__7925 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7907 = coll;

if(cljs.core.truth_(and__3546__auto____7907))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7907;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7910 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7912 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7912))
{return or__3548__auto____7912;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7926 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7915 = coll;

if(cljs.core.truth_(and__3546__auto____7915))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7915;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7918 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{var or__3548__auto____7920 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
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
return _nth__7925.call(this,coll,n);
case  3 :
return _nth__7926.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7965 = coll;

if(cljs.core.truth_(and__3546__auto____7965))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7965;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7966 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{var or__3548__auto____7967 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7970 = coll;

if(cljs.core.truth_(and__3546__auto____7970))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7970;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7972 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7981 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7981))
{return or__3548__auto____7981;
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
var _lookup__8001 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7991 = o;

if(cljs.core.truth_(and__3546__auto____7991))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7991;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7992 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{var or__3548__auto____7994 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__8002 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7995 = o;

if(cljs.core.truth_(and__3546__auto____7995))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7995;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7998 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{var or__3548__auto____7999 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
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
return _lookup__8001.call(this,o,k);
case  3 :
return _lookup__8002.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8010 = coll;

if(cljs.core.truth_(and__3546__auto____8010))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____8010;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____8013 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{var or__3548__auto____8015 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = coll;

if(cljs.core.truth_(and__3546__auto____8018))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____8018;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____8020 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8020))
{return or__3548__auto____8020;
} else
{var or__3548__auto____8021 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8028 = coll;

if(cljs.core.truth_(and__3546__auto____8028))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____8028;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____8032 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{var or__3548__auto____8033 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8088 = coll;

if(cljs.core.truth_(and__3546__auto____8088))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8088;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8092 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8092))
{return or__3548__auto____8092;
} else
{var or__3548__auto____8093 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8097 = coll;

if(cljs.core.truth_(and__3546__auto____8097))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8097;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8100 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
} else
{var or__3548__auto____8101 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8102 = coll;

if(cljs.core.truth_(and__3546__auto____8102))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8102;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8103 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{var or__3548__auto____8106 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8118 = coll;

if(cljs.core.truth_(and__3546__auto____8118))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8118;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8121 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{var or__3548__auto____8122 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8127 = o;

if(cljs.core.truth_(and__3546__auto____8127))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8127;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8132 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{var or__3548__auto____8133 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8133))
{return or__3548__auto____8133;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8137 = o;

if(cljs.core.truth_(and__3546__auto____8137))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8137;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8140 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8142 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8148 = o;

if(cljs.core.truth_(and__3546__auto____8148))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8148;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8154 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8154))
{return or__3548__auto____8154;
} else
{var or__3548__auto____8155 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8175 = o;

if(cljs.core.truth_(and__3546__auto____8175))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8175;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8177 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8177))
{return or__3548__auto____8177;
} else
{var or__3548__auto____8182 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8182))
{return or__3548__auto____8182;
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
var _reduce__8196 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8190 = coll;

if(cljs.core.truth_(and__3546__auto____8190))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8190;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8191 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8191))
{return or__3548__auto____8191;
} else
{var or__3548__auto____8192 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8192))
{return or__3548__auto____8192;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8197 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8193 = coll;

if(cljs.core.truth_(and__3546__auto____8193))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8193;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8194 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8194))
{return or__3548__auto____8194;
} else
{var or__3548__auto____8195 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8195))
{return or__3548__auto____8195;
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
return _reduce__8196.call(this,coll,f);
case  3 :
return _reduce__8197.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8317 = o;

if(cljs.core.truth_(and__3546__auto____8317))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8317;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8318 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8318))
{return or__3548__auto____8318;
} else
{var or__3548__auto____8319 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8319))
{return or__3548__auto____8319;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8325 = o;

if(cljs.core.truth_(and__3546__auto____8325))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8325;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8327 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8327))
{return or__3548__auto____8327;
} else
{var or__3548__auto____8329 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8329))
{return or__3548__auto____8329;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8336 = o;

if(cljs.core.truth_(and__3546__auto____8336))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8336;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8337 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8337))
{return or__3548__auto____8337;
} else
{var or__3548__auto____8342 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8342))
{return or__3548__auto____8342;
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
if(cljs.core.truth_((function (){var and__3546__auto____8355 = o;

if(cljs.core.truth_(and__3546__auto____8355))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8355;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8358 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8358))
{return or__3548__auto____8358;
} else
{var or__3548__auto____8359 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8359))
{return or__3548__auto____8359;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8367 = d;

if(cljs.core.truth_(and__3546__auto____8367))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8367;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8370 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8370))
{return or__3548__auto____8370;
} else
{var or__3548__auto____8371 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8371))
{return or__3548__auto____8371;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8380 = this$;

if(cljs.core.truth_(and__3546__auto____8380))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8380;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8382 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8382))
{return or__3548__auto____8382;
} else
{var or__3548__auto____8384 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8384))
{return or__3548__auto____8384;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8385 = this$;

if(cljs.core.truth_(and__3546__auto____8385))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8385;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8390 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8390))
{return or__3548__auto____8390;
} else
{var or__3548__auto____8391 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8391))
{return or__3548__auto____8391;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8396 = this$;

if(cljs.core.truth_(and__3546__auto____8396))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8396;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8397 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8397))
{return or__3548__auto____8397;
} else
{var or__3548__auto____8436 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8436))
{return or__3548__auto____8436;
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
var G__8478 = null;
var G__8478__8479 = (function (o,k){
return null;
});
var G__8478__8480 = (function (o,k,not_found){
return not_found;
});
G__8478 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8478__8479.call(this,o,k);
case  3 :
return G__8478__8480.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8478;
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
var G__8482 = null;
var G__8482__8483 = (function (_,f){
return f.call(null);
});
var G__8482__8484 = (function (_,f,start){
return start;
});
G__8482 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8482__8483.call(this,_,f);
case  3 :
return G__8482__8484.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8482;
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
var G__8511 = null;
var G__8511__8512 = (function (_,n){
return null;
});
var G__8511__8513 = (function (_,n,not_found){
return not_found;
});
G__8511 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8511__8512.call(this,_,n);
case  3 :
return G__8511__8513.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8511;
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
var ci_reduce__8546 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8531 = cljs.core._nth.call(null,cicoll,0);
var n__8532 = 1;

while(true){
if(cljs.core.truth_((n__8532 < cljs.core._count.call(null,cicoll))))
{{
var G__8551 = f.call(null,val__8531,cljs.core._nth.call(null,cicoll,n__8532));
var G__8552 = (n__8532 + 1);
val__8531 = G__8551;
n__8532 = G__8552;
continue;
}
} else
{return val__8531;
}
break;
}
}
});
var ci_reduce__8547 = (function (cicoll,f,val){
var val__8534 = val;
var n__8535 = 0;

while(true){
if(cljs.core.truth_((n__8535 < cljs.core._count.call(null,cicoll))))
{{
var G__8553 = f.call(null,val__8534,cljs.core._nth.call(null,cicoll,n__8535));
var G__8554 = (n__8535 + 1);
val__8534 = G__8553;
n__8535 = G__8554;
continue;
}
} else
{return val__8534;
}
break;
}
});
var ci_reduce__8548 = (function (cicoll,f,val,idx){
var val__8536 = val;
var n__8538 = idx;

while(true){
if(cljs.core.truth_((n__8538 < cljs.core._count.call(null,cicoll))))
{{
var G__8555 = f.call(null,val__8536,cljs.core._nth.call(null,cicoll,n__8538));
var G__8556 = (n__8538 + 1);
val__8536 = G__8555;
n__8538 = G__8556;
continue;
}
} else
{return val__8536;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8546.call(this,cicoll,f);
case  3 :
return ci_reduce__8547.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8548.call(this,cicoll,f,val,idx);
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
var this__8560 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8650 = null;
var G__8650__8653 = (function (_,f){
var this__8561 = this;
return cljs.core.ci_reduce.call(null,this__8561.a,f,(this__8561.a[this__8561.i]),(this__8561.i + 1));
});
var G__8650__8654 = (function (_,f,start){
var this__8562 = this;
return cljs.core.ci_reduce.call(null,this__8562.a,f,start,this__8562.i);
});
G__8650 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8650__8653.call(this,_,f);
case  3 :
return G__8650__8654.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8650;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8563 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8564 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8666 = null;
var G__8666__8667 = (function (coll,n){
var this__8565 = this;
var i__8566 = (n + this__8565.i);

if(cljs.core.truth_((i__8566 < this__8565.a.length)))
{return (this__8565.a[i__8566]);
} else
{return null;
}
});
var G__8666__8668 = (function (coll,n,not_found){
var this__8567 = this;
var i__8568 = (n + this__8567.i);

if(cljs.core.truth_((i__8568 < this__8567.a.length)))
{return (this__8567.a[i__8568]);
} else
{return not_found;
}
});
G__8666 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8666__8667.call(this,coll,n);
case  3 :
return G__8666__8668.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8666;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8570 = this;
return (this__8570.a.length - this__8570.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8607 = this;
return (this__8607.a[this__8607.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8608 = this;
if(cljs.core.truth_(((this__8608.i + 1) < this__8608.a.length)))
{return (new cljs.core.IndexedSeq(this__8608.a,(this__8608.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8647 = this;
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
var G__8712 = null;
var G__8712__8713 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8712__8714 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8712 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8712__8713.call(this,array,f);
case  3 :
return G__8712__8714.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8712;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8724 = null;
var G__8724__8725 = (function (array,k){
return (array[k]);
});
var G__8724__8726 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8724 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8724__8725.call(this,array,k);
case  3 :
return G__8724__8726.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8724;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8730 = null;
var G__8730__8731 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8730__8732 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8730 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8730__8731.call(this,array,n);
case  3 :
return G__8730__8732.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8730;
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
var temp__3698__auto____8745 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8745))
{var s__8746 = temp__3698__auto____8745;

return cljs.core._first.call(null,s__8746);
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
var G__8784 = cljs.core.next.call(null,s);
s = G__8784;
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
var s__8787 = cljs.core.seq.call(null,x);
var n__8788 = 0;

while(true){
if(cljs.core.truth_(s__8787))
{{
var G__8791 = cljs.core.next.call(null,s__8787);
var G__8793 = (n__8788 + 1);
s__8787 = G__8791;
n__8788 = G__8793;
continue;
}
} else
{return n__8788;
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
var conj__8812 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8813 = (function() { 
var G__8816__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8817 = conj.call(null,coll,x);
var G__8818 = cljs.core.first.call(null,xs);
var G__8819 = cljs.core.next.call(null,xs);
coll = G__8817;
x = G__8818;
xs = G__8819;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8816 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8816__delegate.call(this, coll, x, xs);
};
G__8816.cljs$lang$maxFixedArity = 2;
G__8816.cljs$lang$applyTo = (function (arglist__8821){
var coll = cljs.core.first(arglist__8821);
var x = cljs.core.first(cljs.core.next(arglist__8821));
var xs = cljs.core.rest(cljs.core.next(arglist__8821));
return G__8816__delegate.call(this, coll, x, xs);
});
return G__8816;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8812.call(this,coll,x);
default:
return conj__8813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8813.cljs$lang$applyTo;
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
var nth__8849 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8850 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8849.call(this,coll,n);
case  3 :
return nth__8850.call(this,coll,n,not_found);
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
var get__8859 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8860 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8859.call(this,o,k);
case  3 :
return get__8860.call(this,o,k,not_found);
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
var assoc__8872 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8873 = (function() { 
var G__8875__delegate = function (coll,k,v,kvs){
while(true){
var ret__8868 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8876 = ret__8868;
var G__8877 = cljs.core.first.call(null,kvs);
var G__8878 = cljs.core.second.call(null,kvs);
var G__8879 = cljs.core.nnext.call(null,kvs);
coll = G__8876;
k = G__8877;
v = G__8878;
kvs = G__8879;
continue;
}
} else
{return ret__8868;
}
break;
}
};
var G__8875 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8875__delegate.call(this, coll, k, v, kvs);
};
G__8875.cljs$lang$maxFixedArity = 3;
G__8875.cljs$lang$applyTo = (function (arglist__8880){
var coll = cljs.core.first(arglist__8880);
var k = cljs.core.first(cljs.core.next(arglist__8880));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8880)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8880)));
return G__8875__delegate.call(this, coll, k, v, kvs);
});
return G__8875;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8872.call(this,coll,k,v);
default:
return assoc__8873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8873.cljs$lang$applyTo;
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
var dissoc__8886 = (function (coll){
return coll;
});
var dissoc__8887 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8888 = (function() { 
var G__8890__delegate = function (coll,k,ks){
while(true){
var ret__8883 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8891 = ret__8883;
var G__8892 = cljs.core.first.call(null,ks);
var G__8893 = cljs.core.next.call(null,ks);
coll = G__8891;
k = G__8892;
ks = G__8893;
continue;
}
} else
{return ret__8883;
}
break;
}
};
var G__8890 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8890__delegate.call(this, coll, k, ks);
};
G__8890.cljs$lang$maxFixedArity = 2;
G__8890.cljs$lang$applyTo = (function (arglist__8896){
var coll = cljs.core.first(arglist__8896);
var k = cljs.core.first(cljs.core.next(arglist__8896));
var ks = cljs.core.rest(cljs.core.next(arglist__8896));
return G__8890__delegate.call(this, coll, k, ks);
});
return G__8890;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8886.call(this,coll);
case  2 :
return dissoc__8887.call(this,coll,k);
default:
return dissoc__8888.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8888.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8904 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8905 = x__445__auto____8904;

if(cljs.core.truth_(and__3546__auto____8905))
{var and__3546__auto____8906 = x__445__auto____8904.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8906))
{return cljs.core.not.call(null,x__445__auto____8904.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8906;
}
} else
{return and__3546__auto____8905;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8904);
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
var disj__8924 = (function (coll){
return coll;
});
var disj__8925 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8926 = (function() { 
var G__8930__delegate = function (coll,k,ks){
while(true){
var ret__8922 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8931 = ret__8922;
var G__8932 = cljs.core.first.call(null,ks);
var G__8933 = cljs.core.next.call(null,ks);
coll = G__8931;
k = G__8932;
ks = G__8933;
continue;
}
} else
{return ret__8922;
}
break;
}
};
var G__8930 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8930__delegate.call(this, coll, k, ks);
};
G__8930.cljs$lang$maxFixedArity = 2;
G__8930.cljs$lang$applyTo = (function (arglist__8938){
var coll = cljs.core.first(arglist__8938);
var k = cljs.core.first(cljs.core.next(arglist__8938));
var ks = cljs.core.rest(cljs.core.next(arglist__8938));
return G__8930__delegate.call(this, coll, k, ks);
});
return G__8930;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8924.call(this,coll);
case  2 :
return disj__8925.call(this,coll,k);
default:
return disj__8926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8926.cljs$lang$applyTo;
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
{var x__445__auto____8954 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8955 = x__445__auto____8954;

if(cljs.core.truth_(and__3546__auto____8955))
{var and__3546__auto____8956 = x__445__auto____8954.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8956))
{return cljs.core.not.call(null,x__445__auto____8954.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8956;
}
} else
{return and__3546__auto____8955;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8954);
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
{var x__445__auto____8963 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8964 = x__445__auto____8963;

if(cljs.core.truth_(and__3546__auto____8964))
{var and__3546__auto____8965 = x__445__auto____8963.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8965))
{return cljs.core.not.call(null,x__445__auto____8963.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8965;
}
} else
{return and__3546__auto____8964;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8963);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8973 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8974 = x__445__auto____8973;

if(cljs.core.truth_(and__3546__auto____8974))
{var and__3546__auto____8975 = x__445__auto____8973.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8975))
{return cljs.core.not.call(null,x__445__auto____8973.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8975;
}
} else
{return and__3546__auto____8974;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8973);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8979 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8983 = x__445__auto____8979;

if(cljs.core.truth_(and__3546__auto____8983))
{var and__3546__auto____8986 = x__445__auto____8979.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8986))
{return cljs.core.not.call(null,x__445__auto____8979.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8986;
}
} else
{return and__3546__auto____8983;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8979);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____9000 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9033 = x__445__auto____9000;

if(cljs.core.truth_(and__3546__auto____9033))
{var and__3546__auto____9035 = x__445__auto____9000.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____9035))
{return cljs.core.not.call(null,x__445__auto____9000.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____9035;
}
} else
{return and__3546__auto____9033;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____9000);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____9045 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9046 = x__445__auto____9045;

if(cljs.core.truth_(and__3546__auto____9046))
{var and__3546__auto____9048 = x__445__auto____9045.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____9048))
{return cljs.core.not.call(null,x__445__auto____9045.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____9048;
}
} else
{return and__3546__auto____9046;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____9045);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____9051 = x;

if(cljs.core.truth_((function (){var and__3546__auto____9055 = x__445__auto____9051;

if(cljs.core.truth_(and__3546__auto____9055))
{var and__3546__auto____9056 = x__445__auto____9051.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____9056))
{return cljs.core.not.call(null,x__445__auto____9051.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____9056;
}
} else
{return and__3546__auto____9055;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____9051);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__9072 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__9072.push(key);
}));
return keys__9072;
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
{var x__445__auto____9162 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9163 = x__445__auto____9162;

if(cljs.core.truth_(and__3546__auto____9163))
{var and__3546__auto____9165 = x__445__auto____9162.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9165))
{return cljs.core.not.call(null,x__445__auto____9162.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9165;
}
} else
{return and__3546__auto____9163;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9162);
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
var and__3546__auto____9178 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9178))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9182 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9182))
{return or__3548__auto____9182;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9178;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9336 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9336))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9336;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9337 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9337))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9337;
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
var and__3546__auto____9382 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9382))
{return (n == n.toFixed());
} else
{return and__3546__auto____9382;
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
if(cljs.core.truth_((function (){var and__3546__auto____9391 = coll;

if(cljs.core.truth_(and__3546__auto____9391))
{var and__3546__auto____9392 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9392))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9392;
}
} else
{return and__3546__auto____9391;
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
var distinct_QMARK___9411 = (function (x){
return true;
});
var distinct_QMARK___9412 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9413 = (function() { 
var G__9415__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9407 = cljs.core.set([y,x]);
var xs__9408 = more;

while(true){
var x__9409 = cljs.core.first.call(null,xs__9408);
var etc__9410 = cljs.core.next.call(null,xs__9408);

if(cljs.core.truth_(xs__9408))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9407,x__9409)))
{return false;
} else
{{
var G__9420 = cljs.core.conj.call(null,s__9407,x__9409);
var G__9421 = etc__9410;
s__9407 = G__9420;
xs__9408 = G__9421;
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
var G__9415 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9415__delegate.call(this, x, y, more);
};
G__9415.cljs$lang$maxFixedArity = 2;
G__9415.cljs$lang$applyTo = (function (arglist__9426){
var x = cljs.core.first(arglist__9426);
var y = cljs.core.first(cljs.core.next(arglist__9426));
var more = cljs.core.rest(cljs.core.next(arglist__9426));
return G__9415__delegate.call(this, x, y, more);
});
return G__9415;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9411.call(this,x);
case  2 :
return distinct_QMARK___9412.call(this,x,y);
default:
return distinct_QMARK___9413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9413.cljs$lang$applyTo;
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
var r__9436 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9436)))
{return r__9436;
} else
{if(cljs.core.truth_(r__9436))
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
var sort__9446 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9447 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9442 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9442,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9442);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9446.call(this,comp);
case  2 :
return sort__9447.call(this,comp,coll);
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
var sort_by__9475 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9476 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9475.call(this,keyfn,comp);
case  3 :
return sort_by__9476.call(this,keyfn,comp,coll);
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
var reduce__9492 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9493 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9492.call(this,f,val);
case  3 :
return reduce__9493.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9507 = (function (f,coll){
var temp__3695__auto____9496 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9496))
{var s__9500 = temp__3695__auto____9496;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9500),cljs.core.next.call(null,s__9500));
} else
{return f.call(null);
}
});
var seq_reduce__9508 = (function (f,val,coll){
var val__9502 = val;
var coll__9504 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9504))
{{
var G__9515 = f.call(null,val__9502,cljs.core.first.call(null,coll__9504));
var G__9517 = cljs.core.next.call(null,coll__9504);
val__9502 = G__9515;
coll__9504 = G__9517;
continue;
}
} else
{return val__9502;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9507.call(this,f,val);
case  3 :
return seq_reduce__9508.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9519 = null;
var G__9519__9520 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9519__9521 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9519 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9519__9520.call(this,coll,f);
case  3 :
return G__9519__9521.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9519;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9535 = (function (){
return 0;
});
var _PLUS___9536 = (function (x){
return x;
});
var _PLUS___9537 = (function (x,y){
return (x + y);
});
var _PLUS___9538 = (function() { 
var G__9540__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9540 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9540__delegate.call(this, x, y, more);
};
G__9540.cljs$lang$maxFixedArity = 2;
G__9540.cljs$lang$applyTo = (function (arglist__9541){
var x = cljs.core.first(arglist__9541);
var y = cljs.core.first(cljs.core.next(arglist__9541));
var more = cljs.core.rest(cljs.core.next(arglist__9541));
return G__9540__delegate.call(this, x, y, more);
});
return G__9540;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9535.call(this);
case  1 :
return _PLUS___9536.call(this,x);
case  2 :
return _PLUS___9537.call(this,x,y);
default:
return _PLUS___9538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9538.cljs$lang$applyTo;
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
var ___9550 = (function (x){
return (- x);
});
var ___9551 = (function (x,y){
return (x - y);
});
var ___9552 = (function() { 
var G__9554__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9554 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9554__delegate.call(this, x, y, more);
};
G__9554.cljs$lang$maxFixedArity = 2;
G__9554.cljs$lang$applyTo = (function (arglist__9555){
var x = cljs.core.first(arglist__9555);
var y = cljs.core.first(cljs.core.next(arglist__9555));
var more = cljs.core.rest(cljs.core.next(arglist__9555));
return G__9554__delegate.call(this, x, y, more);
});
return G__9554;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9550.call(this,x);
case  2 :
return ___9551.call(this,x,y);
default:
return ___9552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9552.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9563 = (function (){
return 1;
});
var _STAR___9564 = (function (x){
return x;
});
var _STAR___9565 = (function (x,y){
return (x * y);
});
var _STAR___9566 = (function() { 
var G__9585__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9585 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9585__delegate.call(this, x, y, more);
};
G__9585.cljs$lang$maxFixedArity = 2;
G__9585.cljs$lang$applyTo = (function (arglist__9586){
var x = cljs.core.first(arglist__9586);
var y = cljs.core.first(cljs.core.next(arglist__9586));
var more = cljs.core.rest(cljs.core.next(arglist__9586));
return G__9585__delegate.call(this, x, y, more);
});
return G__9585;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9563.call(this);
case  1 :
return _STAR___9564.call(this,x);
case  2 :
return _STAR___9565.call(this,x,y);
default:
return _STAR___9566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9566.cljs$lang$applyTo;
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
var _SLASH___9592 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9593 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9594 = (function() { 
var G__9597__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9597 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9597__delegate.call(this, x, y, more);
};
G__9597.cljs$lang$maxFixedArity = 2;
G__9597.cljs$lang$applyTo = (function (arglist__9598){
var x = cljs.core.first(arglist__9598);
var y = cljs.core.first(cljs.core.next(arglist__9598));
var more = cljs.core.rest(cljs.core.next(arglist__9598));
return G__9597__delegate.call(this, x, y, more);
});
return G__9597;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9592.call(this,x);
case  2 :
return _SLASH___9593.call(this,x,y);
default:
return _SLASH___9594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9594.cljs$lang$applyTo;
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
var _LT___9605 = (function (x){
return true;
});
var _LT___9607 = (function (x,y){
return (x < y);
});
var _LT___9608 = (function() { 
var G__9613__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9616 = y;
var G__9618 = cljs.core.first.call(null,more);
var G__9620 = cljs.core.next.call(null,more);
x = G__9616;
y = G__9618;
more = G__9620;
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
var G__9613 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9613__delegate.call(this, x, y, more);
};
G__9613.cljs$lang$maxFixedArity = 2;
G__9613.cljs$lang$applyTo = (function (arglist__9623){
var x = cljs.core.first(arglist__9623);
var y = cljs.core.first(cljs.core.next(arglist__9623));
var more = cljs.core.rest(cljs.core.next(arglist__9623));
return G__9613__delegate.call(this, x, y, more);
});
return G__9613;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9605.call(this,x);
case  2 :
return _LT___9607.call(this,x,y);
default:
return _LT___9608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9608.cljs$lang$applyTo;
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
var _LT__EQ___9625 = (function (x){
return true;
});
var _LT__EQ___9627 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9628 = (function() { 
var G__9632__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9634 = y;
var G__9636 = cljs.core.first.call(null,more);
var G__9638 = cljs.core.next.call(null,more);
x = G__9634;
y = G__9636;
more = G__9638;
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
var G__9632 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9632__delegate.call(this, x, y, more);
};
G__9632.cljs$lang$maxFixedArity = 2;
G__9632.cljs$lang$applyTo = (function (arglist__9639){
var x = cljs.core.first(arglist__9639);
var y = cljs.core.first(cljs.core.next(arglist__9639));
var more = cljs.core.rest(cljs.core.next(arglist__9639));
return G__9632__delegate.call(this, x, y, more);
});
return G__9632;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9625.call(this,x);
case  2 :
return _LT__EQ___9627.call(this,x,y);
default:
return _LT__EQ___9628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9628.cljs$lang$applyTo;
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
var _GT___9641 = (function (x){
return true;
});
var _GT___9642 = (function (x,y){
return (x > y);
});
var _GT___9643 = (function() { 
var G__9646__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9650 = y;
var G__9651 = cljs.core.first.call(null,more);
var G__9652 = cljs.core.next.call(null,more);
x = G__9650;
y = G__9651;
more = G__9652;
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
var G__9646 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9646__delegate.call(this, x, y, more);
};
G__9646.cljs$lang$maxFixedArity = 2;
G__9646.cljs$lang$applyTo = (function (arglist__9653){
var x = cljs.core.first(arglist__9653);
var y = cljs.core.first(cljs.core.next(arglist__9653));
var more = cljs.core.rest(cljs.core.next(arglist__9653));
return G__9646__delegate.call(this, x, y, more);
});
return G__9646;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9641.call(this,x);
case  2 :
return _GT___9642.call(this,x,y);
default:
return _GT___9643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9643.cljs$lang$applyTo;
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
var _GT__EQ___9659 = (function (x){
return true;
});
var _GT__EQ___9660 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9661 = (function() { 
var G__9663__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9664 = y;
var G__9665 = cljs.core.first.call(null,more);
var G__9666 = cljs.core.next.call(null,more);
x = G__9664;
y = G__9665;
more = G__9666;
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
var G__9663 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9663__delegate.call(this, x, y, more);
};
G__9663.cljs$lang$maxFixedArity = 2;
G__9663.cljs$lang$applyTo = (function (arglist__9667){
var x = cljs.core.first(arglist__9667);
var y = cljs.core.first(cljs.core.next(arglist__9667));
var more = cljs.core.rest(cljs.core.next(arglist__9667));
return G__9663__delegate.call(this, x, y, more);
});
return G__9663;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9659.call(this,x);
case  2 :
return _GT__EQ___9660.call(this,x,y);
default:
return _GT__EQ___9661.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9661.cljs$lang$applyTo;
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
var max__9835 = (function (x){
return x;
});
var max__9836 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9837 = (function() { 
var G__9839__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9839 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9839__delegate.call(this, x, y, more);
};
G__9839.cljs$lang$maxFixedArity = 2;
G__9839.cljs$lang$applyTo = (function (arglist__9840){
var x = cljs.core.first(arglist__9840);
var y = cljs.core.first(cljs.core.next(arglist__9840));
var more = cljs.core.rest(cljs.core.next(arglist__9840));
return G__9839__delegate.call(this, x, y, more);
});
return G__9839;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9835.call(this,x);
case  2 :
return max__9836.call(this,x,y);
default:
return max__9837.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9837.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9841 = (function (x){
return x;
});
var min__9842 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9843 = (function() { 
var G__9845__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9845 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9845__delegate.call(this, x, y, more);
};
G__9845.cljs$lang$maxFixedArity = 2;
G__9845.cljs$lang$applyTo = (function (arglist__9846){
var x = cljs.core.first(arglist__9846);
var y = cljs.core.first(cljs.core.next(arglist__9846));
var more = cljs.core.rest(cljs.core.next(arglist__9846));
return G__9845__delegate.call(this, x, y, more);
});
return G__9845;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9841.call(this,x);
case  2 :
return min__9842.call(this,x,y);
default:
return min__9843.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9843.cljs$lang$applyTo;
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
var rem__9849 = (n % d);

return cljs.core.fix.call(null,((n - rem__9849) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9853 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9853));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9854 = (function (){
return Math.random.call(null);
});
var rand__9855 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9854.call(this);
case  1 :
return rand__9855.call(this,n);
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
var _EQ__EQ___9886 = (function (x){
return true;
});
var _EQ__EQ___9887 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9888 = (function() { 
var G__9891__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9893 = y;
var G__9894 = cljs.core.first.call(null,more);
var G__9895 = cljs.core.next.call(null,more);
x = G__9893;
y = G__9894;
more = G__9895;
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
var G__9891 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9891__delegate.call(this, x, y, more);
};
G__9891.cljs$lang$maxFixedArity = 2;
G__9891.cljs$lang$applyTo = (function (arglist__9897){
var x = cljs.core.first(arglist__9897);
var y = cljs.core.first(cljs.core.next(arglist__9897));
var more = cljs.core.rest(cljs.core.next(arglist__9897));
return G__9891__delegate.call(this, x, y, more);
});
return G__9891;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9886.call(this,x);
case  2 :
return _EQ__EQ___9887.call(this,x,y);
default:
return _EQ__EQ___9888.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9888.cljs$lang$applyTo;
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
var n__9898 = n;
var xs__9975 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9976 = xs__9975;

if(cljs.core.truth_(and__3546__auto____9976))
{return (n__9898 > 0);
} else
{return and__3546__auto____9976;
}
})()))
{{
var G__9987 = (n__9898 - 1);
var G__9988 = cljs.core.next.call(null,xs__9975);
n__9898 = G__9987;
xs__9975 = G__9988;
continue;
}
} else
{return xs__9975;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__10003 = null;
var G__10003__10004 = (function (coll,n){
var temp__3695__auto____9998 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9998))
{var xs__10000 = temp__3695__auto____9998;

return cljs.core.first.call(null,xs__10000);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__10003__10005 = (function (coll,n,not_found){
var temp__3695__auto____10001 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____10001))
{var xs__10002 = temp__3695__auto____10001;

return cljs.core.first.call(null,xs__10002);
} else
{return not_found;
}
});
G__10003 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__10003__10004.call(this,coll,n);
case  3 :
return G__10003__10005.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10003;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___10010 = (function (){
return "";
});
var str_STAR___10011 = (function (x){
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
var str_STAR___10012 = (function() { 
var G__10015__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__10016 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__10017 = cljs.core.next.call(null,more);
sb = G__10016;
more = G__10017;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__10015 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10015__delegate.call(this, x, ys);
};
G__10015.cljs$lang$maxFixedArity = 1;
G__10015.cljs$lang$applyTo = (function (arglist__10021){
var x = cljs.core.first(arglist__10021);
var ys = cljs.core.rest(arglist__10021);
return G__10015__delegate.call(this, x, ys);
});
return G__10015;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___10010.call(this);
case  1 :
return str_STAR___10011.call(this,x);
default:
return str_STAR___10012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___10012.cljs$lang$applyTo;
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
var str__10037 = (function (){
return "";
});
var str__10039 = (function (x){
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
var str__10040 = (function() { 
var G__10043__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__10043 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__10043__delegate.call(this, x, ys);
};
G__10043.cljs$lang$maxFixedArity = 1;
G__10043.cljs$lang$applyTo = (function (arglist__10044){
var x = cljs.core.first(arglist__10044);
var ys = cljs.core.rest(arglist__10044);
return G__10043__delegate.call(this, x, ys);
});
return G__10043;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__10037.call(this);
case  1 :
return str__10039.call(this,x);
default:
return str__10040.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__10040.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__10045 = (function (s,start){
return s.substring(start);
});
var subs__10046 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__10045.call(this,s,start);
case  3 :
return subs__10046.call(this,s,start,end);
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
var symbol__10050 = (function (name){
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
var symbol__10051 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__10050.call(this,ns);
case  2 :
return symbol__10051.call(this,ns,name);
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
var keyword__10116 = (function (name){
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
var keyword__10117 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__10116.call(this,ns);
case  2 :
return keyword__10117.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__10125 = cljs.core.seq.call(null,x);
var ys__10126 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__10125)))
{return cljs.core.nil_QMARK_.call(null,ys__10126);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__10126)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__10125),cljs.core.first.call(null,ys__10126))))
{{
var G__10127 = cljs.core.next.call(null,xs__10125);
var G__10128 = cljs.core.next.call(null,ys__10126);
xs__10125 = G__10127;
ys__10126 = G__10128;
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
return cljs.core.reduce.call(null,(function (p1__10129_SHARP_,p2__10131_SHARP_){
return cljs.core.hash_combine.call(null,p1__10129_SHARP_,cljs.core.hash.call(null,p2__10131_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__10138__10139 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__10138__10139))
{var G__10141__10146 = cljs.core.first.call(null,G__10138__10139);
var vec__10145__10147 = G__10141__10146;
var key_name__10148 = cljs.core.nth.call(null,vec__10145__10147,0,null);
var f__10149 = cljs.core.nth.call(null,vec__10145__10147,1,null);
var G__10138__10150 = G__10138__10139;

var G__10141__10151 = G__10141__10146;
var G__10138__10152 = G__10138__10150;

while(true){
var vec__10153__10154 = G__10141__10151;
var key_name__10155 = cljs.core.nth.call(null,vec__10153__10154,0,null);
var f__10156 = cljs.core.nth.call(null,vec__10153__10154,1,null);
var G__10138__10157 = G__10138__10152;

var str_name__10158 = cljs.core.name.call(null,key_name__10155);

obj[str_name__10158] = f__10156;
var temp__3698__auto____10159 = cljs.core.next.call(null,G__10138__10157);

if(cljs.core.truth_(temp__3698__auto____10159))
{var G__10138__10162 = temp__3698__auto____10159;

{
var G__10170 = cljs.core.first.call(null,G__10138__10162);
var G__10171 = G__10138__10162;
G__10141__10151 = G__10170;
G__10138__10152 = G__10171;
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
var this__10182 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10186 = this;
return (new cljs.core.List(this__10186.meta,o,coll,(this__10186.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10187 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10188 = this;
return this__10188.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10192 = this;
return this__10192.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10193 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10194 = this;
return this__10194.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10195 = this;
return this__10195.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10197 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10199 = this;
return (new cljs.core.List(meta,this__10199.first,this__10199.rest,this__10199.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10257 = this;
return this__10257.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10258 = this;
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
var this__10311 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10315 = this;
return (new cljs.core.List(this__10315.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10316 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10319 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10320 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10321 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10322 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10323 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10329 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10332 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10334 = this;
return this__10334.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10336 = this;
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
list.cljs$lang$applyTo = (function (arglist__10360){
var items = cljs.core.seq( arglist__10360 );;
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
var this__10366 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10367 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10368 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10371 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10371.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10372 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10374 = this;
return this__10374.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10379 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10379.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10379.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10380 = this;
return this__10380.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10381 = this;
return (new cljs.core.Cons(meta,this__10381.first,this__10381.rest));
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
var G__10428 = null;
var G__10428__10429 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10428__10430 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10428 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10428__10429.call(this,string,f);
case  3 :
return G__10428__10430.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10428;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10432 = null;
var G__10432__10433 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10432__10434 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10432 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10432__10433.call(this,string,k);
case  3 :
return G__10432__10434.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10432;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10438 = null;
var G__10438__10439 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10438__10440 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10438 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10438__10439.call(this,string,n);
case  3 :
return G__10438__10440.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10438;
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
var G__10472 = null;
var G__10472__10474 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10472__10475 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10472 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10472__10474.call(this,this$,coll);
case  3 :
return G__10472__10475.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10472;
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
var x__10572 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10572;
} else
{lazy_seq.x = x__10572.call(null);
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
var this__10591 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10592 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10593 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10594 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10594.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10595 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10596 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10597 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10605 = this;
return this__10605.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10609 = this;
return (new cljs.core.LazySeq(meta,this__10609.realized,this__10609.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10752 = cljs.core.array.call(null);

var s__10753 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10753)))
{ary__10752.push(cljs.core.first.call(null,s__10753));
{
var G__10763 = cljs.core.next.call(null,s__10753);
s__10753 = G__10763;
continue;
}
} else
{return ary__10752;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10765 = s;
var i__10766 = n;
var sum__10767 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10768 = (i__10766 > 0);

if(cljs.core.truth_(and__3546__auto____10768))
{return cljs.core.seq.call(null,s__10765);
} else
{return and__3546__auto____10768;
}
})()))
{{
var G__10769 = cljs.core.next.call(null,s__10765);
var G__10771 = (i__10766 - 1);
var G__10772 = (sum__10767 + 1);
s__10765 = G__10769;
i__10766 = G__10771;
sum__10767 = G__10772;
continue;
}
} else
{return sum__10767;
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
var concat__10814 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10815 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10816 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10799 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10799))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10799),concat.call(null,cljs.core.rest.call(null,s__10799),y));
} else
{return y;
}
})));
});
var concat__10817 = (function() { 
var G__10826__delegate = function (x,y,zs){
var cat__10809 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10803 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10803))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10803),cat.call(null,cljs.core.rest.call(null,xys__10803),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10809.call(null,concat.call(null,x,y),zs);
};
var G__10826 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10826__delegate.call(this, x, y, zs);
};
G__10826.cljs$lang$maxFixedArity = 2;
G__10826.cljs$lang$applyTo = (function (arglist__10833){
var x = cljs.core.first(arglist__10833);
var y = cljs.core.first(cljs.core.next(arglist__10833));
var zs = cljs.core.rest(cljs.core.next(arglist__10833));
return G__10826__delegate.call(this, x, y, zs);
});
return G__10826;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10814.call(this);
case  1 :
return concat__10815.call(this,x);
case  2 :
return concat__10816.call(this,x,y);
default:
return concat__10817.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10817.cljs$lang$applyTo;
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
var list_STAR___10858 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10859 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10861 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10862 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10863 = (function() { 
var G__10871__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10871 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10871__delegate.call(this, a, b, c, d, more);
};
G__10871.cljs$lang$maxFixedArity = 4;
G__10871.cljs$lang$applyTo = (function (arglist__10872){
var a = cljs.core.first(arglist__10872);
var b = cljs.core.first(cljs.core.next(arglist__10872));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10872)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10872))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10872))));
return G__10871__delegate.call(this, a, b, c, d, more);
});
return G__10871;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10858.call(this,a);
case  2 :
return list_STAR___10859.call(this,a,b);
case  3 :
return list_STAR___10861.call(this,a,b,c);
case  4 :
return list_STAR___10862.call(this,a,b,c,d);
default:
return list_STAR___10863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10863.cljs$lang$applyTo;
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
var apply__10911 = (function (f,args){
var fixed_arity__10873 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10873 + 1)) <= fixed_arity__10873)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10913 = (function (f,x,args){
var arglist__10874 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10875 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10874,fixed_arity__10875) <= fixed_arity__10875)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10874));
} else
{return f.cljs$lang$applyTo(arglist__10874);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10874));
}
});
var apply__10953 = (function (f,x,y,args){
var arglist__10876 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10878 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10876,fixed_arity__10878) <= fixed_arity__10878)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10876));
} else
{return f.cljs$lang$applyTo(arglist__10876);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10876));
}
});
var apply__10954 = (function (f,x,y,z,args){
var arglist__10890 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10893 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10890,fixed_arity__10893) <= fixed_arity__10893)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10890));
} else
{return f.cljs$lang$applyTo(arglist__10890);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10890));
}
});
var apply__10955 = (function() { 
var G__10980__delegate = function (f,a,b,c,d,args){
var arglist__10901 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10902 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10901,fixed_arity__10902) <= fixed_arity__10902)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10901));
} else
{return f.cljs$lang$applyTo(arglist__10901);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10901));
}
};
var G__10980 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10980__delegate.call(this, f, a, b, c, d, args);
};
G__10980.cljs$lang$maxFixedArity = 5;
G__10980.cljs$lang$applyTo = (function (arglist__10995){
var f = cljs.core.first(arglist__10995);
var a = cljs.core.first(cljs.core.next(arglist__10995));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10995)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10995))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10995)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10995)))));
return G__10980__delegate.call(this, f, a, b, c, d, args);
});
return G__10980;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10911.call(this,f,a);
case  3 :
return apply__10913.call(this,f,a,b);
case  4 :
return apply__10953.call(this,f,a,b,c);
case  5 :
return apply__10954.call(this,f,a,b,c,d);
default:
return apply__10955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10955.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__11012){
var obj = cljs.core.first(arglist__11012);
var f = cljs.core.first(cljs.core.next(arglist__11012));
var args = cljs.core.rest(cljs.core.next(arglist__11012));
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
var not_EQ___11017 = (function (x){
return false;
});
var not_EQ___11018 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___11019 = (function() { 
var G__11023__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__11023 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11023__delegate.call(this, x, y, more);
};
G__11023.cljs$lang$maxFixedArity = 2;
G__11023.cljs$lang$applyTo = (function (arglist__11030){
var x = cljs.core.first(arglist__11030);
var y = cljs.core.first(cljs.core.next(arglist__11030));
var more = cljs.core.rest(cljs.core.next(arglist__11030));
return G__11023__delegate.call(this, x, y, more);
});
return G__11023;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___11017.call(this,x);
case  2 :
return not_EQ___11018.call(this,x,y);
default:
return not_EQ___11019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___11019.cljs$lang$applyTo;
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
var G__11054 = pred;
var G__11055 = cljs.core.next.call(null,coll);
pred = G__11054;
coll = G__11055;
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
{var or__3548__auto____11066 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____11066))
{return or__3548__auto____11066;
} else
{{
var G__11068 = pred;
var G__11069 = cljs.core.next.call(null,coll);
pred = G__11068;
coll = G__11069;
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
var G__11089 = null;
var G__11089__11091 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__11089__11092 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__11089__11093 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__11089__11094 = (function() { 
var G__11099__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__11099 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11099__delegate.call(this, x, y, zs);
};
G__11099.cljs$lang$maxFixedArity = 2;
G__11099.cljs$lang$applyTo = (function (arglist__11101){
var x = cljs.core.first(arglist__11101);
var y = cljs.core.first(cljs.core.next(arglist__11101));
var zs = cljs.core.rest(cljs.core.next(arglist__11101));
return G__11099__delegate.call(this, x, y, zs);
});
return G__11099;
})()
;
G__11089 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__11089__11091.call(this);
case  1 :
return G__11089__11092.call(this,x);
case  2 :
return G__11089__11093.call(this,x,y);
default:
return G__11089__11094.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11089.cljs$lang$maxFixedArity = 2;
G__11089.cljs$lang$applyTo = G__11089__11094.cljs$lang$applyTo;
return G__11089;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__11115__delegate = function (args){
return x;
};
var G__11115 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11115__delegate.call(this, args);
};
G__11115.cljs$lang$maxFixedArity = 0;
G__11115.cljs$lang$applyTo = (function (arglist__11117){
var args = cljs.core.seq( arglist__11117 );;
return G__11115__delegate.call(this, args);
});
return G__11115;
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
var comp__11140 = (function (){
return cljs.core.identity;
});
var comp__11141 = (function (f){
return f;
});
var comp__11142 = (function (f,g){
return (function() {
var G__11196 = null;
var G__11196__11197 = (function (){
return f.call(null,g.call(null));
});
var G__11196__11198 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11196__11199 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11196__11200 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11196__11201 = (function() { 
var G__11210__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11210 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11210__delegate.call(this, x, y, z, args);
};
G__11210.cljs$lang$maxFixedArity = 3;
G__11210.cljs$lang$applyTo = (function (arglist__11213){
var x = cljs.core.first(arglist__11213);
var y = cljs.core.first(cljs.core.next(arglist__11213));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11213)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11213)));
return G__11210__delegate.call(this, x, y, z, args);
});
return G__11210;
})()
;
G__11196 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11196__11197.call(this);
case  1 :
return G__11196__11198.call(this,x);
case  2 :
return G__11196__11199.call(this,x,y);
case  3 :
return G__11196__11200.call(this,x,y,z);
default:
return G__11196__11201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11196.cljs$lang$maxFixedArity = 3;
G__11196.cljs$lang$applyTo = G__11196__11201.cljs$lang$applyTo;
return G__11196;
})()
});
var comp__11143 = (function (f,g,h){
return (function() {
var G__11215 = null;
var G__11215__11216 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11215__11217 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11215__11218 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11215__11219 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11215__11220 = (function() { 
var G__11237__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11237 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11237__delegate.call(this, x, y, z, args);
};
G__11237.cljs$lang$maxFixedArity = 3;
G__11237.cljs$lang$applyTo = (function (arglist__11241){
var x = cljs.core.first(arglist__11241);
var y = cljs.core.first(cljs.core.next(arglist__11241));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11241)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11241)));
return G__11237__delegate.call(this, x, y, z, args);
});
return G__11237;
})()
;
G__11215 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11215__11216.call(this);
case  1 :
return G__11215__11217.call(this,x);
case  2 :
return G__11215__11218.call(this,x,y);
case  3 :
return G__11215__11219.call(this,x,y,z);
default:
return G__11215__11220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11215.cljs$lang$maxFixedArity = 3;
G__11215.cljs$lang$applyTo = G__11215__11220.cljs$lang$applyTo;
return G__11215;
})()
});
var comp__11144 = (function() { 
var G__11249__delegate = function (f1,f2,f3,fs){
var fs__11129 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__11254__delegate = function (args){
var ret__11131 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11129),args);
var fs__11132 = cljs.core.next.call(null,fs__11129);

while(true){
if(cljs.core.truth_(fs__11132))
{{
var G__11267 = cljs.core.first.call(null,fs__11132).call(null,ret__11131);
var G__11268 = cljs.core.next.call(null,fs__11132);
ret__11131 = G__11267;
fs__11132 = G__11268;
continue;
}
} else
{return ret__11131;
}
break;
}
};
var G__11254 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11254__delegate.call(this, args);
};
G__11254.cljs$lang$maxFixedArity = 0;
G__11254.cljs$lang$applyTo = (function (arglist__11270){
var args = cljs.core.seq( arglist__11270 );;
return G__11254__delegate.call(this, args);
});
return G__11254;
})()
;
};
var G__11249 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11249__delegate.call(this, f1, f2, f3, fs);
};
G__11249.cljs$lang$maxFixedArity = 3;
G__11249.cljs$lang$applyTo = (function (arglist__11271){
var f1 = cljs.core.first(arglist__11271);
var f2 = cljs.core.first(cljs.core.next(arglist__11271));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11271)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11271)));
return G__11249__delegate.call(this, f1, f2, f3, fs);
});
return G__11249;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__11140.call(this);
case  1 :
return comp__11141.call(this,f1);
case  2 :
return comp__11142.call(this,f1,f2);
case  3 :
return comp__11143.call(this,f1,f2,f3);
default:
return comp__11144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__11144.cljs$lang$applyTo;
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
var partial__11294 = (function (f,arg1){
return (function() { 
var G__11301__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11301 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11301__delegate.call(this, args);
};
G__11301.cljs$lang$maxFixedArity = 0;
G__11301.cljs$lang$applyTo = (function (arglist__11303){
var args = cljs.core.seq( arglist__11303 );;
return G__11301__delegate.call(this, args);
});
return G__11301;
})()
;
});
var partial__11295 = (function (f,arg1,arg2){
return (function() { 
var G__11304__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11304 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11304__delegate.call(this, args);
};
G__11304.cljs$lang$maxFixedArity = 0;
G__11304.cljs$lang$applyTo = (function (arglist__11306){
var args = cljs.core.seq( arglist__11306 );;
return G__11304__delegate.call(this, args);
});
return G__11304;
})()
;
});
var partial__11296 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11308__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11308 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11308__delegate.call(this, args);
};
G__11308.cljs$lang$maxFixedArity = 0;
G__11308.cljs$lang$applyTo = (function (arglist__11315){
var args = cljs.core.seq( arglist__11315 );;
return G__11308__delegate.call(this, args);
});
return G__11308;
})()
;
});
var partial__11297 = (function() { 
var G__11319__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11323__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11323 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11323__delegate.call(this, args);
};
G__11323.cljs$lang$maxFixedArity = 0;
G__11323.cljs$lang$applyTo = (function (arglist__11330){
var args = cljs.core.seq( arglist__11330 );;
return G__11323__delegate.call(this, args);
});
return G__11323;
})()
;
};
var G__11319 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11319__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11319.cljs$lang$maxFixedArity = 4;
G__11319.cljs$lang$applyTo = (function (arglist__11337){
var f = cljs.core.first(arglist__11337);
var arg1 = cljs.core.first(cljs.core.next(arglist__11337));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11337)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11337))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11337))));
return G__11319__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11319;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11294.call(this,f,arg1);
case  3 :
return partial__11295.call(this,f,arg1,arg2);
case  4 :
return partial__11296.call(this,f,arg1,arg2,arg3);
default:
return partial__11297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11297.cljs$lang$applyTo;
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
var fnil__11408 = (function (f,x){
return (function() {
var G__11412 = null;
var G__11412__11413 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11412__11414 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11412__11416 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11412__11417 = (function() { 
var G__11422__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11422 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11422__delegate.call(this, a, b, c, ds);
};
G__11422.cljs$lang$maxFixedArity = 3;
G__11422.cljs$lang$applyTo = (function (arglist__11424){
var a = cljs.core.first(arglist__11424);
var b = cljs.core.first(cljs.core.next(arglist__11424));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11424)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11424)));
return G__11422__delegate.call(this, a, b, c, ds);
});
return G__11422;
})()
;
G__11412 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11412__11413.call(this,a);
case  2 :
return G__11412__11414.call(this,a,b);
case  3 :
return G__11412__11416.call(this,a,b,c);
default:
return G__11412__11417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11412.cljs$lang$maxFixedArity = 3;
G__11412.cljs$lang$applyTo = G__11412__11417.cljs$lang$applyTo;
return G__11412;
})()
});
var fnil__11409 = (function (f,x,y){
return (function() {
var G__11427 = null;
var G__11427__11428 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11427__11429 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11427__11430 = (function() { 
var G__11441__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11441 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11441__delegate.call(this, a, b, c, ds);
};
G__11441.cljs$lang$maxFixedArity = 3;
G__11441.cljs$lang$applyTo = (function (arglist__11444){
var a = cljs.core.first(arglist__11444);
var b = cljs.core.first(cljs.core.next(arglist__11444));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11444)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11444)));
return G__11441__delegate.call(this, a, b, c, ds);
});
return G__11441;
})()
;
G__11427 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11427__11428.call(this,a,b);
case  3 :
return G__11427__11429.call(this,a,b,c);
default:
return G__11427__11430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11427.cljs$lang$maxFixedArity = 3;
G__11427.cljs$lang$applyTo = G__11427__11430.cljs$lang$applyTo;
return G__11427;
})()
});
var fnil__11410 = (function (f,x,y,z){
return (function() {
var G__11445 = null;
var G__11445__11446 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11445__11447 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11445__11448 = (function() { 
var G__11452__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11452 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11452__delegate.call(this, a, b, c, ds);
};
G__11452.cljs$lang$maxFixedArity = 3;
G__11452.cljs$lang$applyTo = (function (arglist__11453){
var a = cljs.core.first(arglist__11453);
var b = cljs.core.first(cljs.core.next(arglist__11453));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11453)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11453)));
return G__11452__delegate.call(this, a, b, c, ds);
});
return G__11452;
})()
;
G__11445 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11445__11446.call(this,a,b);
case  3 :
return G__11445__11447.call(this,a,b,c);
default:
return G__11445__11448.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11445.cljs$lang$maxFixedArity = 3;
G__11445.cljs$lang$applyTo = G__11445__11448.cljs$lang$applyTo;
return G__11445;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11408.call(this,f,x);
case  3 :
return fnil__11409.call(this,f,x,y);
case  4 :
return fnil__11410.call(this,f,x,y,z);
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
var mapi__11466 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11462 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11462))
{var s__11464 = temp__3698__auto____11462;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11464)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11464)));
} else
{return null;
}
})));
});

return mapi__11466.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11469 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11469))
{var s__11472 = temp__3698__auto____11469;

var x__11475 = f.call(null,cljs.core.first.call(null,s__11472));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11475)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11472));
} else
{return cljs.core.cons.call(null,x__11475,keep.call(null,f,cljs.core.rest.call(null,s__11472)));
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
var keepi__11500 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11492 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11492))
{var s__11494 = temp__3698__auto____11492;

var x__11496 = f.call(null,idx,cljs.core.first.call(null,s__11494));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11496)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11494));
} else
{return cljs.core.cons.call(null,x__11496,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11494)));
}
} else
{return null;
}
})));
});

return keepi__11500.call(null,0,coll);
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
var every_pred__11620 = (function (p){
return (function() {
var ep1 = null;
var ep1__11625 = (function (){
return true;
});
var ep1__11626 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11627 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11518 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11518))
{return p.call(null,y);
} else
{return and__3546__auto____11518;
}
})());
});
var ep1__11628 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11520 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11520))
{var and__3546__auto____11521 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11521))
{return p.call(null,z);
} else
{return and__3546__auto____11521;
}
} else
{return and__3546__auto____11520;
}
})());
});
var ep1__11629 = (function() { 
var G__11636__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11524 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11524))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11524;
}
})());
};
var G__11636 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11636__delegate.call(this, x, y, z, args);
};
G__11636.cljs$lang$maxFixedArity = 3;
G__11636.cljs$lang$applyTo = (function (arglist__11640){
var x = cljs.core.first(arglist__11640);
var y = cljs.core.first(cljs.core.next(arglist__11640));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11640)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11640)));
return G__11636__delegate.call(this, x, y, z, args);
});
return G__11636;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11625.call(this);
case  1 :
return ep1__11626.call(this,x);
case  2 :
return ep1__11627.call(this,x,y);
case  3 :
return ep1__11628.call(this,x,y,z);
default:
return ep1__11629.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11629.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11621 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11644 = (function (){
return true;
});
var ep2__11645 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11527 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11527))
{return p2.call(null,x);
} else
{return and__3546__auto____11527;
}
})());
});
var ep2__11646 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11528 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11528))
{var and__3546__auto____11531 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11531))
{var and__3546__auto____11533 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11533))
{return p2.call(null,y);
} else
{return and__3546__auto____11533;
}
} else
{return and__3546__auto____11531;
}
} else
{return and__3546__auto____11528;
}
})());
});
var ep2__11647 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11534 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11534))
{var and__3546__auto____11535 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11535))
{var and__3546__auto____11537 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11537))
{var and__3546__auto____11540 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11540))
{var and__3546__auto____11542 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11542))
{return p2.call(null,z);
} else
{return and__3546__auto____11542;
}
} else
{return and__3546__auto____11540;
}
} else
{return and__3546__auto____11537;
}
} else
{return and__3546__auto____11535;
}
} else
{return and__3546__auto____11534;
}
})());
});
var ep2__11649 = (function() { 
var G__11660__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11544 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11544))
{return cljs.core.every_QMARK_.call(null,(function (p1__11482_SHARP_){
var and__3546__auto____11545 = p1.call(null,p1__11482_SHARP_);

if(cljs.core.truth_(and__3546__auto____11545))
{return p2.call(null,p1__11482_SHARP_);
} else
{return and__3546__auto____11545;
}
}),args);
} else
{return and__3546__auto____11544;
}
})());
};
var G__11660 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11660__delegate.call(this, x, y, z, args);
};
G__11660.cljs$lang$maxFixedArity = 3;
G__11660.cljs$lang$applyTo = (function (arglist__11666){
var x = cljs.core.first(arglist__11666);
var y = cljs.core.first(cljs.core.next(arglist__11666));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11666)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11666)));
return G__11660__delegate.call(this, x, y, z, args);
});
return G__11660;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11644.call(this);
case  1 :
return ep2__11645.call(this,x);
case  2 :
return ep2__11646.call(this,x,y);
case  3 :
return ep2__11647.call(this,x,y,z);
default:
return ep2__11649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11649.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11622 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11668 = (function (){
return true;
});
var ep3__11669 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11549 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11549))
{var and__3546__auto____11550 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11550))
{return p3.call(null,x);
} else
{return and__3546__auto____11550;
}
} else
{return and__3546__auto____11549;
}
})());
});
var ep3__11670 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11553 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11553))
{var and__3546__auto____11554 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11554))
{var and__3546__auto____11555 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11555))
{var and__3546__auto____11556 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11556))
{var and__3546__auto____11557 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11557))
{return p3.call(null,y);
} else
{return and__3546__auto____11557;
}
} else
{return and__3546__auto____11556;
}
} else
{return and__3546__auto____11555;
}
} else
{return and__3546__auto____11554;
}
} else
{return and__3546__auto____11553;
}
})());
});
var ep3__11672 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11563 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11563))
{var and__3546__auto____11578 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11578))
{var and__3546__auto____11589 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11589))
{var and__3546__auto____11590 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11590))
{var and__3546__auto____11591 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11591))
{var and__3546__auto____11592 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11592))
{var and__3546__auto____11593 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11593))
{var and__3546__auto____11599 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11599))
{return p3.call(null,z);
} else
{return and__3546__auto____11599;
}
} else
{return and__3546__auto____11593;
}
} else
{return and__3546__auto____11592;
}
} else
{return and__3546__auto____11591;
}
} else
{return and__3546__auto____11590;
}
} else
{return and__3546__auto____11589;
}
} else
{return and__3546__auto____11578;
}
} else
{return and__3546__auto____11563;
}
})());
});
var ep3__11673 = (function() { 
var G__11694__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11601 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11601))
{return cljs.core.every_QMARK_.call(null,(function (p1__11483_SHARP_){
var and__3546__auto____11602 = p1.call(null,p1__11483_SHARP_);

if(cljs.core.truth_(and__3546__auto____11602))
{var and__3546__auto____11604 = p2.call(null,p1__11483_SHARP_);

if(cljs.core.truth_(and__3546__auto____11604))
{return p3.call(null,p1__11483_SHARP_);
} else
{return and__3546__auto____11604;
}
} else
{return and__3546__auto____11602;
}
}),args);
} else
{return and__3546__auto____11601;
}
})());
};
var G__11694 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11694__delegate.call(this, x, y, z, args);
};
G__11694.cljs$lang$maxFixedArity = 3;
G__11694.cljs$lang$applyTo = (function (arglist__11705){
var x = cljs.core.first(arglist__11705);
var y = cljs.core.first(cljs.core.next(arglist__11705));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11705)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11705)));
return G__11694__delegate.call(this, x, y, z, args);
});
return G__11694;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11668.call(this);
case  1 :
return ep3__11669.call(this,x);
case  2 :
return ep3__11670.call(this,x,y);
case  3 :
return ep3__11672.call(this,x,y,z);
default:
return ep3__11673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11673.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11623 = (function() { 
var G__11714__delegate = function (p1,p2,p3,ps){
var ps__11608 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11716 = (function (){
return true;
});
var epn__11717 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11485_SHARP_){
return p1__11485_SHARP_.call(null,x);
}),ps__11608);
});
var epn__11718 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11486_SHARP_){
var and__3546__auto____11609 = p1__11486_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11609))
{return p1__11486_SHARP_.call(null,y);
} else
{return and__3546__auto____11609;
}
}),ps__11608);
});
var epn__11719 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11487_SHARP_){
var and__3546__auto____11612 = p1__11487_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11612))
{var and__3546__auto____11613 = p1__11487_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11613))
{return p1__11487_SHARP_.call(null,z);
} else
{return and__3546__auto____11613;
}
} else
{return and__3546__auto____11612;
}
}),ps__11608);
});
var epn__11720 = (function() { 
var G__11749__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11616 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11616))
{return cljs.core.every_QMARK_.call(null,(function (p1__11488_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11488_SHARP_,args);
}),ps__11608);
} else
{return and__3546__auto____11616;
}
})());
};
var G__11749 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11749__delegate.call(this, x, y, z, args);
};
G__11749.cljs$lang$maxFixedArity = 3;
G__11749.cljs$lang$applyTo = (function (arglist__11750){
var x = cljs.core.first(arglist__11750);
var y = cljs.core.first(cljs.core.next(arglist__11750));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11750)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11750)));
return G__11749__delegate.call(this, x, y, z, args);
});
return G__11749;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11716.call(this);
case  1 :
return epn__11717.call(this,x);
case  2 :
return epn__11718.call(this,x,y);
case  3 :
return epn__11719.call(this,x,y,z);
default:
return epn__11720.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11720.cljs$lang$applyTo;
return epn;
})()
};
var G__11714 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11714__delegate.call(this, p1, p2, p3, ps);
};
G__11714.cljs$lang$maxFixedArity = 3;
G__11714.cljs$lang$applyTo = (function (arglist__11751){
var p1 = cljs.core.first(arglist__11751);
var p2 = cljs.core.first(cljs.core.next(arglist__11751));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11751)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11751)));
return G__11714__delegate.call(this, p1, p2, p3, ps);
});
return G__11714;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11620.call(this,p1);
case  2 :
return every_pred__11621.call(this,p1,p2);
case  3 :
return every_pred__11622.call(this,p1,p2,p3);
default:
return every_pred__11623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11623.cljs$lang$applyTo;
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
var some_fn__11915 = (function (p){
return (function() {
var sp1 = null;
var sp1__11920 = (function (){
return null;
});
var sp1__11921 = (function (x){
return p.call(null,x);
});
var sp1__11922 = (function (x,y){
var or__3548__auto____11758 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11758))
{return or__3548__auto____11758;
} else
{return p.call(null,y);
}
});
var sp1__11923 = (function (x,y,z){
var or__3548__auto____11760 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11760))
{return or__3548__auto____11760;
} else
{var or__3548__auto____11810 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11810))
{return or__3548__auto____11810;
} else
{return p.call(null,z);
}
}
});
var sp1__11924 = (function() { 
var G__12104__delegate = function (x,y,z,args){
var or__3548__auto____11811 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11811))
{return or__3548__auto____11811;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__12104 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12104__delegate.call(this, x, y, z, args);
};
G__12104.cljs$lang$maxFixedArity = 3;
G__12104.cljs$lang$applyTo = (function (arglist__12105){
var x = cljs.core.first(arglist__12105);
var y = cljs.core.first(cljs.core.next(arglist__12105));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12105)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12105)));
return G__12104__delegate.call(this, x, y, z, args);
});
return G__12104;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11920.call(this);
case  1 :
return sp1__11921.call(this,x);
case  2 :
return sp1__11922.call(this,x,y);
case  3 :
return sp1__11923.call(this,x,y,z);
default:
return sp1__11924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11924.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11916 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__12111 = (function (){
return null;
});
var sp2__12112 = (function (x){
var or__3548__auto____11815 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11815))
{return or__3548__auto____11815;
} else
{return p2.call(null,x);
}
});
var sp2__12113 = (function (x,y){
var or__3548__auto____11817 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11817))
{return or__3548__auto____11817;
} else
{var or__3548__auto____11818 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11818))
{return or__3548__auto____11818;
} else
{var or__3548__auto____11819 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11819))
{return or__3548__auto____11819;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12114 = (function (x,y,z){
var or__3548__auto____11849 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11849))
{return or__3548__auto____11849;
} else
{var or__3548__auto____11850 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11850))
{return or__3548__auto____11850;
} else
{var or__3548__auto____11852 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11852))
{return or__3548__auto____11852;
} else
{var or__3548__auto____11853 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11853))
{return or__3548__auto____11853;
} else
{var or__3548__auto____11854 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11854))
{return or__3548__auto____11854;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12115 = (function() { 
var G__12120__delegate = function (x,y,z,args){
var or__3548__auto____11855 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11855))
{return or__3548__auto____11855;
} else
{return cljs.core.some.call(null,(function (p1__11508_SHARP_){
var or__3548__auto____11857 = p1.call(null,p1__11508_SHARP_);

if(cljs.core.truth_(or__3548__auto____11857))
{return or__3548__auto____11857;
} else
{return p2.call(null,p1__11508_SHARP_);
}
}),args);
}
};
var G__12120 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12120__delegate.call(this, x, y, z, args);
};
G__12120.cljs$lang$maxFixedArity = 3;
G__12120.cljs$lang$applyTo = (function (arglist__12123){
var x = cljs.core.first(arglist__12123);
var y = cljs.core.first(cljs.core.next(arglist__12123));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12123)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12123)));
return G__12120__delegate.call(this, x, y, z, args);
});
return G__12120;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__12111.call(this);
case  1 :
return sp2__12112.call(this,x);
case  2 :
return sp2__12113.call(this,x,y);
case  3 :
return sp2__12114.call(this,x,y,z);
default:
return sp2__12115.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12115.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11917 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12128 = (function (){
return null;
});
var sp3__12129 = (function (x){
var or__3548__auto____11858 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11858))
{return or__3548__auto____11858;
} else
{var or__3548__auto____11859 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11859))
{return or__3548__auto____11859;
} else
{return p3.call(null,x);
}
}
});
var sp3__12130 = (function (x,y){
var or__3548__auto____11861 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11861))
{return or__3548__auto____11861;
} else
{var or__3548__auto____11862 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11862))
{return or__3548__auto____11862;
} else
{var or__3548__auto____11864 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11864))
{return or__3548__auto____11864;
} else
{var or__3548__auto____11865 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11865))
{return or__3548__auto____11865;
} else
{var or__3548__auto____11866 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11866))
{return or__3548__auto____11866;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12131 = (function (x,y,z){
var or__3548__auto____11869 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11869))
{return or__3548__auto____11869;
} else
{var or__3548__auto____11870 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11870))
{return or__3548__auto____11870;
} else
{var or__3548__auto____11872 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11872))
{return or__3548__auto____11872;
} else
{var or__3548__auto____11875 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11875))
{return or__3548__auto____11875;
} else
{var or__3548__auto____11877 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11877))
{return or__3548__auto____11877;
} else
{var or__3548__auto____11879 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11879))
{return or__3548__auto____11879;
} else
{var or__3548__auto____11880 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11880))
{return or__3548__auto____11880;
} else
{var or__3548__auto____11883 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11883))
{return or__3548__auto____11883;
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
var sp3__12132 = (function() { 
var G__12191__delegate = function (x,y,z,args){
var or__3548__auto____11888 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11888))
{return or__3548__auto____11888;
} else
{return cljs.core.some.call(null,(function (p1__11510_SHARP_){
var or__3548__auto____11890 = p1.call(null,p1__11510_SHARP_);

if(cljs.core.truth_(or__3548__auto____11890))
{return or__3548__auto____11890;
} else
{var or__3548__auto____11892 = p2.call(null,p1__11510_SHARP_);

if(cljs.core.truth_(or__3548__auto____11892))
{return or__3548__auto____11892;
} else
{return p3.call(null,p1__11510_SHARP_);
}
}
}),args);
}
};
var G__12191 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12191__delegate.call(this, x, y, z, args);
};
G__12191.cljs$lang$maxFixedArity = 3;
G__12191.cljs$lang$applyTo = (function (arglist__12192){
var x = cljs.core.first(arglist__12192);
var y = cljs.core.first(cljs.core.next(arglist__12192));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12192)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12192)));
return G__12191__delegate.call(this, x, y, z, args);
});
return G__12191;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12128.call(this);
case  1 :
return sp3__12129.call(this,x);
case  2 :
return sp3__12130.call(this,x,y);
case  3 :
return sp3__12131.call(this,x,y,z);
default:
return sp3__12132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12132.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11918 = (function() { 
var G__12195__delegate = function (p1,p2,p3,ps){
var ps__11898 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12197 = (function (){
return null;
});
var spn__12198 = (function (x){
return cljs.core.some.call(null,(function (p1__11512_SHARP_){
return p1__11512_SHARP_.call(null,x);
}),ps__11898);
});
var spn__12199 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11513_SHARP_){
var or__3548__auto____11905 = p1__11513_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11905))
{return or__3548__auto____11905;
} else
{return p1__11513_SHARP_.call(null,y);
}
}),ps__11898);
});
var spn__12200 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11514_SHARP_){
var or__3548__auto____11907 = p1__11514_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11907))
{return or__3548__auto____11907;
} else
{var or__3548__auto____11908 = p1__11514_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11908))
{return or__3548__auto____11908;
} else
{return p1__11514_SHARP_.call(null,z);
}
}
}),ps__11898);
});
var spn__12201 = (function() { 
var G__12208__delegate = function (x,y,z,args){
var or__3548__auto____11910 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11910))
{return or__3548__auto____11910;
} else
{return cljs.core.some.call(null,(function (p1__11515_SHARP_){
return cljs.core.some.call(null,p1__11515_SHARP_,args);
}),ps__11898);
}
};
var G__12208 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12208__delegate.call(this, x, y, z, args);
};
G__12208.cljs$lang$maxFixedArity = 3;
G__12208.cljs$lang$applyTo = (function (arglist__12211){
var x = cljs.core.first(arglist__12211);
var y = cljs.core.first(cljs.core.next(arglist__12211));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12211)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12211)));
return G__12208__delegate.call(this, x, y, z, args);
});
return G__12208;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12197.call(this);
case  1 :
return spn__12198.call(this,x);
case  2 :
return spn__12199.call(this,x,y);
case  3 :
return spn__12200.call(this,x,y,z);
default:
return spn__12201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12201.cljs$lang$applyTo;
return spn;
})()
};
var G__12195 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12195__delegate.call(this, p1, p2, p3, ps);
};
G__12195.cljs$lang$maxFixedArity = 3;
G__12195.cljs$lang$applyTo = (function (arglist__12214){
var p1 = cljs.core.first(arglist__12214);
var p2 = cljs.core.first(cljs.core.next(arglist__12214));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12214)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12214)));
return G__12195__delegate.call(this, p1, p2, p3, ps);
});
return G__12195;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11915.call(this,p1);
case  2 :
return some_fn__11916.call(this,p1,p2);
case  3 :
return some_fn__11917.call(this,p1,p2,p3);
default:
return some_fn__11918.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11918.cljs$lang$applyTo;
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
var map__12292 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12217))
{var s__12219 = temp__3698__auto____12217;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12219)),map.call(null,f,cljs.core.rest.call(null,s__12219)));
} else
{return null;
}
})));
});
var map__12293 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12222 = cljs.core.seq.call(null,c1);
var s2__12223 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12225 = s1__12222;

if(cljs.core.truth_(and__3546__auto____12225))
{return s2__12223;
} else
{return and__3546__auto____12225;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12222),cljs.core.first.call(null,s2__12223)),map.call(null,f,cljs.core.rest.call(null,s1__12222),cljs.core.rest.call(null,s2__12223)));
} else
{return null;
}
})));
});
var map__12294 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12228 = cljs.core.seq.call(null,c1);
var s2__12229 = cljs.core.seq.call(null,c2);
var s3__12230 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12232 = s1__12228;

if(cljs.core.truth_(and__3546__auto____12232))
{var and__3546__auto____12234 = s2__12229;

if(cljs.core.truth_(and__3546__auto____12234))
{return s3__12230;
} else
{return and__3546__auto____12234;
}
} else
{return and__3546__auto____12232;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12228),cljs.core.first.call(null,s2__12229),cljs.core.first.call(null,s3__12230)),map.call(null,f,cljs.core.rest.call(null,s1__12228),cljs.core.rest.call(null,s2__12229),cljs.core.rest.call(null,s3__12230)));
} else
{return null;
}
})));
});
var map__12295 = (function() { 
var G__12301__delegate = function (f,c1,c2,c3,colls){
var step__12240 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12239 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12239)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12239),step.call(null,map.call(null,cljs.core.rest,ss__12239)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11756_SHARP_){
return cljs.core.apply.call(null,f,p1__11756_SHARP_);
}),step__12240.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12301 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12301__delegate.call(this, f, c1, c2, c3, colls);
};
G__12301.cljs$lang$maxFixedArity = 4;
G__12301.cljs$lang$applyTo = (function (arglist__12306){
var f = cljs.core.first(arglist__12306);
var c1 = cljs.core.first(cljs.core.next(arglist__12306));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12306)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12306))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12306))));
return G__12301__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12301;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12292.call(this,f,c1);
case  3 :
return map__12293.call(this,f,c1,c2);
case  4 :
return map__12294.call(this,f,c1,c2,c3);
default:
return map__12295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12295.cljs$lang$applyTo;
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
{var temp__3698__auto____12310 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12310))
{var s__12311 = temp__3698__auto____12310;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12311),take.call(null,(n - 1),cljs.core.rest.call(null,s__12311)));
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
var step__12323 = (function (n,coll){
while(true){
var s__12319 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12321 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12321))
{return s__12319;
} else
{return and__3546__auto____12321;
}
})()))
{{
var G__12326 = (n - 1);
var G__12327 = cljs.core.rest.call(null,s__12319);
n = G__12326;
coll = G__12327;
continue;
}
} else
{return s__12319;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12323.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12330 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12331 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12330.call(this,n);
case  2 :
return drop_last__12331.call(this,n,s);
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
var s__12334 = cljs.core.seq.call(null,coll);
var lead__12335 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12335))
{{
var G__12339 = cljs.core.next.call(null,s__12334);
var G__12340 = cljs.core.next.call(null,lead__12335);
s__12334 = G__12339;
lead__12335 = G__12340;
continue;
}
} else
{return s__12334;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12495 = (function (pred,coll){
while(true){
var s__12490 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12492 = s__12490;

if(cljs.core.truth_(and__3546__auto____12492))
{return pred.call(null,cljs.core.first.call(null,s__12490));
} else
{return and__3546__auto____12492;
}
})()))
{{
var G__12502 = pred;
var G__12503 = cljs.core.rest.call(null,s__12490);
pred = G__12502;
coll = G__12503;
continue;
}
} else
{return s__12490;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12495.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12506 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12506))
{var s__12507 = temp__3698__auto____12506;

return cljs.core.concat.call(null,s__12507,cycle.call(null,s__12507));
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
var repeat__12517 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12519 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12517.call(this,n);
case  2 :
return repeat__12519.call(this,n,x);
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
var repeatedly__12527 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12528 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12527.call(this,n);
case  2 :
return repeatedly__12528.call(this,n,f);
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
var interleave__12554 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12540 = cljs.core.seq.call(null,c1);
var s2__12541 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12542 = s1__12540;

if(cljs.core.truth_(and__3546__auto____12542))
{return s2__12541;
} else
{return and__3546__auto____12542;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12540),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12541),interleave.call(null,cljs.core.rest.call(null,s1__12540),cljs.core.rest.call(null,s2__12541))));
} else
{return null;
}
})));
});
var interleave__12555 = (function() { 
var G__12561__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12549 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12549)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12549),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12549)));
} else
{return null;
}
})));
};
var G__12561 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12561__delegate.call(this, c1, c2, colls);
};
G__12561.cljs$lang$maxFixedArity = 2;
G__12561.cljs$lang$applyTo = (function (arglist__12566){
var c1 = cljs.core.first(arglist__12566);
var c2 = cljs.core.first(cljs.core.next(arglist__12566));
var colls = cljs.core.rest(cljs.core.next(arglist__12566));
return G__12561__delegate.call(this, c1, c2, colls);
});
return G__12561;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12554.call(this,c1,c2);
default:
return interleave__12555.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12555.cljs$lang$applyTo;
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
var cat__12627 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12576 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12576))
{var coll__12577 = temp__3695__auto____12576;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12577),cat.call(null,cljs.core.rest.call(null,coll__12577),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12627.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12642 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12643 = (function() { 
var G__12645__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12645 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12645__delegate.call(this, f, coll, colls);
};
G__12645.cljs$lang$maxFixedArity = 2;
G__12645.cljs$lang$applyTo = (function (arglist__12646){
var f = cljs.core.first(arglist__12646);
var coll = cljs.core.first(cljs.core.next(arglist__12646));
var colls = cljs.core.rest(cljs.core.next(arglist__12646));
return G__12645__delegate.call(this, f, coll, colls);
});
return G__12645;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12642.call(this,f,coll);
default:
return mapcat__12643.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12643.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12647 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12647))
{var s__12648 = temp__3698__auto____12647;

var f__12651 = cljs.core.first.call(null,s__12648);
var r__12652 = cljs.core.rest.call(null,s__12648);

if(cljs.core.truth_(pred.call(null,f__12651)))
{return cljs.core.cons.call(null,f__12651,filter.call(null,pred,r__12652));
} else
{return filter.call(null,pred,r__12652);
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
var walk__12663 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12663.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12661_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12661_SHARP_));
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
var partition__12815 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12816 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12801 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12801))
{var s__12806 = temp__3698__auto____12801;

var p__12807 = cljs.core.take.call(null,n,s__12806);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12807))))
{return cljs.core.cons.call(null,p__12807,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12806)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12817 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12808 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12808))
{var s__12809 = temp__3698__auto____12808;

var p__12810 = cljs.core.take.call(null,n,s__12809);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12810))))
{return cljs.core.cons.call(null,p__12810,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12809)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12810,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12815.call(this,n,step);
case  3 :
return partition__12816.call(this,n,step,pad);
case  4 :
return partition__12817.call(this,n,step,pad,coll);
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
var get_in__12826 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12827 = (function (m,ks,not_found){
var sentinel__12822 = cljs.core.lookup_sentinel;
var m__12823 = m;
var ks__12824 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12824))
{var m__12825 = cljs.core.get.call(null,m__12823,cljs.core.first.call(null,ks__12824),sentinel__12822);

if(cljs.core.truth_((sentinel__12822 === m__12825)))
{return not_found;
} else
{{
var G__12829 = sentinel__12822;
var G__12830 = m__12825;
var G__12831 = cljs.core.next.call(null,ks__12824);
sentinel__12822 = G__12829;
m__12823 = G__12830;
ks__12824 = G__12831;
continue;
}
}
} else
{return m__12823;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12826.call(this,m,ks);
case  3 :
return get_in__12827.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12832,v){
var vec__12833__12834 = p__12832;
var k__12835 = cljs.core.nth.call(null,vec__12833__12834,0,null);
var ks__12836 = cljs.core.nthnext.call(null,vec__12833__12834,1);

if(cljs.core.truth_(ks__12836))
{return cljs.core.assoc.call(null,m,k__12835,assoc_in.call(null,cljs.core.get.call(null,m,k__12835),ks__12836,v));
} else
{return cljs.core.assoc.call(null,m,k__12835,v);
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
var update_in__delegate = function (m,p__12845,f,args){
var vec__12847__12848 = p__12845;
var k__12849 = cljs.core.nth.call(null,vec__12847__12848,0,null);
var ks__12850 = cljs.core.nthnext.call(null,vec__12847__12848,1);

if(cljs.core.truth_(ks__12850))
{return cljs.core.assoc.call(null,m,k__12849,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12849),ks__12850,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12849,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12849),args));
}
};
var update_in = function (m,p__12845,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12845, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12853){
var m = cljs.core.first(arglist__12853);
var p__12845 = cljs.core.first(cljs.core.next(arglist__12853));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12853)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12853)));
return update_in__delegate.call(this, m, p__12845, f, args);
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
var this__12858 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12946 = null;
var G__12946__12947 = (function (coll,k){
var this__12863 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12946__12949 = (function (coll,k,not_found){
var this__12864 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12946 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12946__12947.call(this,coll,k);
case  3 :
return G__12946__12949.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12946;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12866 = this;
var new_array__12867 = cljs.core.aclone.call(null,this__12866.array);

(new_array__12867[k] = v);
return (new cljs.core.Vector(this__12866.meta,new_array__12867));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12953 = null;
var G__12953__12954 = (function (coll,k){
var this__12870 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12953__12955 = (function (coll,k,not_found){
var this__12872 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12953 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12953__12954.call(this,coll,k);
case  3 :
return G__12953__12955.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12953;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12875 = this;
var new_array__12876 = cljs.core.aclone.call(null,this__12875.array);

new_array__12876.push(o);
return (new cljs.core.Vector(this__12875.meta,new_array__12876));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12961 = null;
var G__12961__12962 = (function (v,f){
var this__12878 = this;
return cljs.core.ci_reduce.call(null,this__12878.array,f);
});
var G__12961__12963 = (function (v,f,start){
var this__12879 = this;
return cljs.core.ci_reduce.call(null,this__12879.array,f,start);
});
G__12961 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12961__12962.call(this,v,f);
case  3 :
return G__12961__12963.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12961;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12881 = this;
if(cljs.core.truth_((this__12881.array.length > 0)))
{var vector_seq__12885 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12881.array.length)))
{return cljs.core.cons.call(null,(this__12881.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12885.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12888 = this;
return this__12888.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12891 = this;
var count__12894 = this__12891.array.length;

if(cljs.core.truth_((count__12894 > 0)))
{return (this__12891.array[(count__12894 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12898 = this;
if(cljs.core.truth_((this__12898.array.length > 0)))
{var new_array__12902 = cljs.core.aclone.call(null,this__12898.array);

new_array__12902.pop();
return (new cljs.core.Vector(this__12898.meta,new_array__12902));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12908 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12912 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12922 = this;
return (new cljs.core.Vector(meta,this__12922.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12924 = this;
return this__12924.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12972 = null;
var G__12972__12974 = (function (coll,n){
var this__12927 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12928 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12928))
{return (n < this__12927.array.length);
} else
{return and__3546__auto____12928;
}
})()))
{return (this__12927.array[n]);
} else
{return null;
}
});
var G__12972__12975 = (function (coll,n,not_found){
var this__12930 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12931 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12931))
{return (n < this__12930.array.length);
} else
{return and__3546__auto____12931;
}
})()))
{return (this__12930.array[n]);
} else
{return not_found;
}
});
G__12972 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12972__12974.call(this,coll,n);
case  3 :
return G__12972__12975.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12972;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12934 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12934.meta);
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
vector.cljs$lang$applyTo = (function (arglist__13000){
var args = cljs.core.seq( arglist__13000 );;
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
var this__13008 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13093 = null;
var G__13093__13094 = (function (coll,k){
var this__13010 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__13093__13095 = (function (coll,k,not_found){
var this__13011 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__13093 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13093__13094.call(this,coll,k);
case  3 :
return G__13093__13095.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13093;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__13012 = this;
var v_pos__13016 = (this__13012.start + key);

return (new cljs.core.Subvec(this__13012.meta,cljs.core._assoc.call(null,this__13012.v,v_pos__13016,val),this__13012.start,((this__13012.end > (v_pos__13016 + 1)) ? this__13012.end : (v_pos__13016 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__13099 = null;
var G__13099__13100 = (function (coll,k){
var this__13017 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13099__13101 = (function (coll,k,not_found){
var this__13020 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13099 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13099__13100.call(this,coll,k);
case  3 :
return G__13099__13101.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13099;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13021 = this;
return (new cljs.core.Subvec(this__13021.meta,cljs.core._assoc_n.call(null,this__13021.v,this__13021.end,o),this__13021.start,(this__13021.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13105 = null;
var G__13105__13107 = (function (coll,f){
var this__13024 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__13105__13108 = (function (coll,f,start){
var this__13025 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__13105 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__13105__13107.call(this,coll,f);
case  3 :
return G__13105__13108.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13105;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13026 = this;
var subvec_seq__13032 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__13026.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__13026.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__13032.call(null,this__13026.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13033 = this;
return (this__13033.end - this__13033.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13034 = this;
return cljs.core._nth.call(null,this__13034.v,(this__13034.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13077 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__13077.start,this__13077.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__13077.meta,this__13077.v,this__13077.start,(this__13077.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__13080 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13081 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13083 = this;
return (new cljs.core.Subvec(meta,this__13083.v,this__13083.start,this__13083.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13084 = this;
return this__13084.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13115 = null;
var G__13115__13116 = (function (coll,n){
var this__13085 = this;
return cljs.core._nth.call(null,this__13085.v,(this__13085.start + n));
});
var G__13115__13117 = (function (coll,n,not_found){
var this__13086 = this;
return cljs.core._nth.call(null,this__13086.v,(this__13086.start + n),not_found);
});
G__13115 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__13115__13116.call(this,coll,n);
case  3 :
return G__13115__13117.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13115;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13089 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__13089.meta);
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
var subvec__13124 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__13125 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__13124.call(this,v,start);
case  3 :
return subvec__13125.call(this,v,start,end);
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
var this__13188 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13189 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13192 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13194 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13194.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13195 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13197 = this;
return cljs.core._first.call(null,this__13197.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13201 = this;
var temp__3695__auto____13202 = cljs.core.next.call(null,this__13201.front);

if(cljs.core.truth_(temp__3695__auto____13202))
{var f1__13203 = temp__3695__auto____13202;

return (new cljs.core.PersistentQueueSeq(this__13201.meta,f1__13203,this__13201.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__13201.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__13201.meta,this__13201.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13208 = this;
return this__13208.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13209 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__13209.front,this__13209.rear));
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
var this__13225 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13227 = this;
if(cljs.core.truth_(this__13227.front))
{return (new cljs.core.PersistentQueue(this__13227.meta,(this__13227.count + 1),this__13227.front,cljs.core.conj.call(null,(function (){var or__3548__auto____13230 = this__13227.rear;

if(cljs.core.truth_(or__3548__auto____13230))
{return or__3548__auto____13230;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__13227.meta,(this__13227.count + 1),cljs.core.conj.call(null,this__13227.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13231 = this;
var rear__13236 = cljs.core.seq.call(null,this__13231.rear);

if(cljs.core.truth_((function (){var or__3548__auto____13237 = this__13231.front;

if(cljs.core.truth_(or__3548__auto____13237))
{return or__3548__auto____13237;
} else
{return rear__13236;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13231.front,cljs.core.seq.call(null,rear__13236)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13239 = this;
return this__13239.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13240 = this;
return cljs.core._first.call(null,this__13240.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13241 = this;
if(cljs.core.truth_(this__13241.front))
{var temp__3695__auto____13242 = cljs.core.next.call(null,this__13241.front);

if(cljs.core.truth_(temp__3695__auto____13242))
{var f1__13243 = temp__3695__auto____13242;

return (new cljs.core.PersistentQueue(this__13241.meta,(this__13241.count - 1),f1__13243,this__13241.rear));
} else
{return (new cljs.core.PersistentQueue(this__13241.meta,(this__13241.count - 1),cljs.core.seq.call(null,this__13241.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13246 = this;
return cljs.core.first.call(null,this__13246.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13247 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13249 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13255 = this;
return (new cljs.core.PersistentQueue(meta,this__13255.count,this__13255.front,this__13255.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13256 = this;
return this__13256.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13257 = this;
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
var this__13280 = this;
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
var len__13299 = array.length;

var i__13300 = 0;

while(true){
if(cljs.core.truth_((i__13300 < len__13299)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13300]))))
{return i__13300;
} else
{{
var G__13305 = (i__13300 + incr);
i__13300 = G__13305;
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
var obj_map_contains_key_QMARK___13309 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13310 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13306 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13306))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13306;
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
return obj_map_contains_key_QMARK___13309.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13310.call(this,k,strobj,true_val,false_val);
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
var this__13324 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13493 = null;
var G__13493__13494 = (function (coll,k){
var this__13326 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13493__13495 = (function (coll,k,not_found){
var this__13329 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13329.strobj,(this__13329.strobj[k]),not_found);
});
G__13493 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13493__13494.call(this,coll,k);
case  3 :
return G__13493__13495.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13493;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13425 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13426 = goog.object.clone.call(null,this__13425.strobj);
var overwrite_QMARK___13427 = new_strobj__13426.hasOwnProperty(k);

(new_strobj__13426[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13427))
{return (new cljs.core.ObjMap(this__13425.meta,this__13425.keys,new_strobj__13426));
} else
{var new_keys__13428 = cljs.core.aclone.call(null,this__13425.keys);

new_keys__13428.push(k);
return (new cljs.core.ObjMap(this__13425.meta,new_keys__13428,new_strobj__13426));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13425.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13432 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13432.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13505 = null;
var G__13505__13506 = (function (coll,k){
var this__13436 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13505__13507 = (function (coll,k,not_found){
var this__13439 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13505 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13505__13506.call(this,coll,k);
case  3 :
return G__13505__13507.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13505;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13446 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13450 = this;
if(cljs.core.truth_((this__13450.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13317_SHARP_){
return cljs.core.vector.call(null,p1__13317_SHARP_,(this__13450.strobj[p1__13317_SHARP_]));
}),this__13450.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13453 = this;
return this__13453.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13454 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13455 = this;
return (new cljs.core.ObjMap(meta,this__13455.keys,this__13455.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13456 = this;
return this__13456.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13457 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13457.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13460 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13461 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13461))
{return this__13460.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13461;
}
})()))
{var new_keys__13462 = cljs.core.aclone.call(null,this__13460.keys);
var new_strobj__13463 = goog.object.clone.call(null,this__13460.strobj);

new_keys__13462.splice(cljs.core.scan_array.call(null,1,k,new_keys__13462),1);
cljs.core.js_delete.call(null,new_strobj__13463,k);
return (new cljs.core.ObjMap(this__13460.meta,new_keys__13462,new_strobj__13463));
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
var this__13543 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13597 = null;
var G__13597__13598 = (function (coll,k){
var this__13549 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13597__13599 = (function (coll,k,not_found){
var this__13550 = this;
var bucket__13553 = (this__13550.hashobj[cljs.core.hash.call(null,k)]);
var i__13555 = (cljs.core.truth_(bucket__13553)?cljs.core.scan_array.call(null,2,k,bucket__13553):null);

if(cljs.core.truth_(i__13555))
{return (bucket__13553[(i__13555 + 1)]);
} else
{return not_found;
}
});
G__13597 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13597__13598.call(this,coll,k);
case  3 :
return G__13597__13599.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13597;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13557 = this;
var h__13559 = cljs.core.hash.call(null,k);
var bucket__13560 = (this__13557.hashobj[h__13559]);

if(cljs.core.truth_(bucket__13560))
{var new_bucket__13561 = cljs.core.aclone.call(null,bucket__13560);
var new_hashobj__13562 = goog.object.clone.call(null,this__13557.hashobj);

(new_hashobj__13562[h__13559] = new_bucket__13561);
var temp__3695__auto____13564 = cljs.core.scan_array.call(null,2,k,new_bucket__13561);

if(cljs.core.truth_(temp__3695__auto____13564))
{var i__13565 = temp__3695__auto____13564;

(new_bucket__13561[(i__13565 + 1)] = v);
return (new cljs.core.HashMap(this__13557.meta,this__13557.count,new_hashobj__13562));
} else
{new_bucket__13561.push(k,v);
return (new cljs.core.HashMap(this__13557.meta,(this__13557.count + 1),new_hashobj__13562));
}
} else
{var new_hashobj__13566 = goog.object.clone.call(null,this__13557.hashobj);

(new_hashobj__13566[h__13559] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13557.meta,(this__13557.count + 1),new_hashobj__13566));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13571 = this;
var bucket__13573 = (this__13571.hashobj[cljs.core.hash.call(null,k)]);
var i__13574 = (cljs.core.truth_(bucket__13573)?cljs.core.scan_array.call(null,2,k,bucket__13573):null);

if(cljs.core.truth_(i__13574))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13601 = null;
var G__13601__13602 = (function (coll,k){
var this__13576 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13601__13603 = (function (coll,k,not_found){
var this__13577 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13601 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13601__13602.call(this,coll,k);
case  3 :
return G__13601__13603.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13601;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13583 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13584 = this;
if(cljs.core.truth_((this__13584.count > 0)))
{var hashes__13585 = cljs.core.js_keys.call(null,this__13584.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13525_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13584.hashobj[p1__13525_SHARP_])));
}),hashes__13585);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13586 = this;
return this__13586.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13587 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13588 = this;
return (new cljs.core.HashMap(meta,this__13588.count,this__13588.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13589 = this;
return this__13589.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13590 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13590.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13591 = this;
var h__13592 = cljs.core.hash.call(null,k);
var bucket__13593 = (this__13591.hashobj[h__13592]);
var i__13594 = (cljs.core.truth_(bucket__13593)?cljs.core.scan_array.call(null,2,k,bucket__13593):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13594)))
{return coll;
} else
{var new_hashobj__13595 = goog.object.clone.call(null,this__13591.hashobj);

if(cljs.core.truth_((3 > bucket__13593.length)))
{cljs.core.js_delete.call(null,new_hashobj__13595,h__13592);
} else
{var new_bucket__13596 = cljs.core.aclone.call(null,bucket__13593);

new_bucket__13596.splice(i__13594,2);
(new_hashobj__13595[h__13592] = new_bucket__13596);
}
return (new cljs.core.HashMap(this__13591.meta,(this__13591.count - 1),new_hashobj__13595));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13664 = ks.length;

var i__13665 = 0;
var out__13666 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13665 < len__13664)))
{{
var G__13673 = (i__13665 + 1);
var G__13674 = cljs.core.assoc.call(null,out__13666,(ks[i__13665]),(vs[i__13665]));
i__13665 = G__13673;
out__13666 = G__13674;
continue;
}
} else
{return out__13666;
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
var in$__13686 = cljs.core.seq.call(null,keyvals);
var out__13687 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13686))
{{
var G__13690 = cljs.core.nnext.call(null,in$__13686);
var G__13691 = cljs.core.assoc.call(null,out__13687,cljs.core.first.call(null,in$__13686),cljs.core.second.call(null,in$__13686));
in$__13686 = G__13690;
out__13687 = G__13691;
continue;
}
} else
{return out__13687;
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
hash_map.cljs$lang$applyTo = (function (arglist__13692){
var keyvals = cljs.core.seq( arglist__13692 );;
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
{return cljs.core.reduce.call(null,(function (p1__13701_SHARP_,p2__13702_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13706 = p1__13701_SHARP_;

if(cljs.core.truth_(or__3548__auto____13706))
{return or__3548__auto____13706;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13702_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13718){
var maps = cljs.core.seq( arglist__13718 );;
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
{var merge_entry__13723 = (function (m,e){
var k__13719 = cljs.core.first.call(null,e);
var v__13720 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13719)))
{return cljs.core.assoc.call(null,m,k__13719,f.call(null,cljs.core.get.call(null,m,k__13719),v__13720));
} else
{return cljs.core.assoc.call(null,m,k__13719,v__13720);
}
});
var merge2__13725 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13723,(function (){var or__3548__auto____13724 = m1;

if(cljs.core.truth_(or__3548__auto____13724))
{return or__3548__auto____13724;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13725,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13735){
var f = cljs.core.first(arglist__13735);
var maps = cljs.core.rest(arglist__13735);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13743 = cljs.core.ObjMap.fromObject([],{});
var keys__13744 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13744))
{var key__13745 = cljs.core.first.call(null,keys__13744);
var entry__13746 = cljs.core.get.call(null,map,key__13745,"﷐'user/not-found");

{
var G__13748 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13746,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13743,key__13745,entry__13746):ret__13743);
var G__13749 = cljs.core.next.call(null,keys__13744);
ret__13743 = G__13748;
keys__13744 = G__13749;
continue;
}
} else
{return ret__13743;
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
var this__13788 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13810 = null;
var G__13810__13811 = (function (coll,v){
var this__13789 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13810__13812 = (function (coll,v,not_found){
var this__13793 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13793.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13810 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13810__13811.call(this,coll,v);
case  3 :
return G__13810__13812.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13810;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13820 = null;
var G__13820__13821 = (function (coll,k){
var this__13794 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13820__13822 = (function (coll,k,not_found){
var this__13795 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13820 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13820__13821.call(this,coll,k);
case  3 :
return G__13820__13822.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13820;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13796 = this;
return (new cljs.core.Set(this__13796.meta,cljs.core.assoc.call(null,this__13796.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13797 = this;
return cljs.core.keys.call(null,this__13797.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13798 = this;
return (new cljs.core.Set(this__13798.meta,cljs.core.dissoc.call(null,this__13798.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13803 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13804 = this;
var and__3546__auto____13805 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13805))
{var and__3546__auto____13806 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13806))
{return cljs.core.every_QMARK_.call(null,(function (p1__13736_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13736_SHARP_);
}),other);
} else
{return and__3546__auto____13806;
}
} else
{return and__3546__auto____13805;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13807 = this;
return (new cljs.core.Set(meta,this__13807.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13808 = this;
return this__13808.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13809 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13809.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13852 = cljs.core.seq.call(null,coll);
var out__13854 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13852))))
{{
var G__13857 = cljs.core.rest.call(null,in$__13852);
var G__13858 = cljs.core.conj.call(null,out__13854,cljs.core.first.call(null,in$__13852));
in$__13852 = G__13857;
out__13854 = G__13858;
continue;
}
} else
{return out__13854;
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
{var n__13866 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13868 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13868))
{var e__13870 = temp__3695__auto____13868;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13870));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13866,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13842_SHARP_){
var temp__3695__auto____13873 = cljs.core.find.call(null,smap,p1__13842_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13873))
{var e__13874 = temp__3695__auto____13873;

return cljs.core.second.call(null,e__13874);
} else
{return p1__13842_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13988 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13892,seen){
while(true){
var vec__13893__13894 = p__13892;
var f__13895 = cljs.core.nth.call(null,vec__13893__13894,0,null);
var xs__13896 = vec__13893__13894;

var temp__3698__auto____13897 = cljs.core.seq.call(null,xs__13896);

if(cljs.core.truth_(temp__3698__auto____13897))
{var s__13983 = temp__3698__auto____13897;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13895)))
{{
var G__13993 = cljs.core.rest.call(null,s__13983);
var G__13994 = seen;
p__13892 = G__13993;
seen = G__13994;
continue;
}
} else
{return cljs.core.cons.call(null,f__13895,step.call(null,cljs.core.rest.call(null,s__13983),cljs.core.conj.call(null,seen,f__13895)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13988.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__14005 = cljs.core.Vector.fromArray([]);
var s__14008 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__14008)))
{{
var G__14019 = cljs.core.conj.call(null,ret__14005,cljs.core.first.call(null,s__14008));
var G__14020 = cljs.core.next.call(null,s__14008);
ret__14005 = G__14019;
s__14008 = G__14020;
continue;
}
} else
{return cljs.core.seq.call(null,ret__14005);
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
{if(cljs.core.truth_((function (){var or__3548__auto____14024 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14024))
{return or__3548__auto____14024;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__14026 = x.lastIndexOf("/");

if(cljs.core.truth_((i__14026 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__14026 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____14046 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____14046))
{return or__3548__auto____14046;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__14048 = x.lastIndexOf("/");

if(cljs.core.truth_((i__14048 > -1)))
{return cljs.core.subs.call(null,x,2,i__14048);
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
var map__14057 = cljs.core.ObjMap.fromObject([],{});
var ks__14058 = cljs.core.seq.call(null,keys);
var vs__14059 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14060 = ks__14058;

if(cljs.core.truth_(and__3546__auto____14060))
{return vs__14059;
} else
{return and__3546__auto____14060;
}
})()))
{{
var G__14069 = cljs.core.assoc.call(null,map__14057,cljs.core.first.call(null,ks__14058),cljs.core.first.call(null,vs__14059));
var G__14070 = cljs.core.next.call(null,ks__14058);
var G__14071 = cljs.core.next.call(null,vs__14059);
map__14057 = G__14069;
ks__14058 = G__14070;
vs__14059 = G__14071;
continue;
}
} else
{return map__14057;
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
var max_key__14082 = (function (k,x){
return x;
});
var max_key__14083 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__14084 = (function() { 
var G__14091__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14051_SHARP_,p2__14053_SHARP_){
return max_key.call(null,k,p1__14051_SHARP_,p2__14053_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14091 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14091__delegate.call(this, k, x, y, more);
};
G__14091.cljs$lang$maxFixedArity = 3;
G__14091.cljs$lang$applyTo = (function (arglist__14096){
var k = cljs.core.first(arglist__14096);
var x = cljs.core.first(cljs.core.next(arglist__14096));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14096)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14096)));
return G__14091__delegate.call(this, k, x, y, more);
});
return G__14091;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__14082.call(this,k,x);
case  3 :
return max_key__14083.call(this,k,x,y);
default:
return max_key__14084.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__14084.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__14112 = (function (k,x){
return x;
});
var min_key__14113 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__14114 = (function() { 
var G__14116__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14074_SHARP_,p2__14076_SHARP_){
return min_key.call(null,k,p1__14074_SHARP_,p2__14076_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14116 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14116__delegate.call(this, k, x, y, more);
};
G__14116.cljs$lang$maxFixedArity = 3;
G__14116.cljs$lang$applyTo = (function (arglist__14117){
var k = cljs.core.first(arglist__14117);
var x = cljs.core.first(cljs.core.next(arglist__14117));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14117)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14117)));
return G__14116__delegate.call(this, k, x, y, more);
});
return G__14116;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__14112.call(this,k,x);
case  3 :
return min_key__14113.call(this,k,x,y);
default:
return min_key__14114.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__14114.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__14130 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__14131 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14126 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14126))
{var s__14128 = temp__3698__auto____14126;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14128),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14128)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__14130.call(this,n,step);
case  3 :
return partition_all__14131.call(this,n,step,coll);
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
var temp__3698__auto____14197 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14197))
{var s__14198 = temp__3698__auto____14197;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14198))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14198),take_while.call(null,pred,cljs.core.rest.call(null,s__14198)));
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
var this__14223 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14226 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14283 = null;
var G__14283__14284 = (function (rng,f){
var this__14229 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14283__14285 = (function (rng,f,s){
var this__14233 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14283 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14283__14284.call(this,rng,f);
case  3 :
return G__14283__14285.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14283;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14236 = this;
var comp__14238 = (cljs.core.truth_((this__14236.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14238.call(null,this__14236.start,this__14236.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14240 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14240.end - this__14240.start) / this__14240.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14246 = this;
return this__14246.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14247 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14247.meta,(this__14247.start + this__14247.step),this__14247.end,this__14247.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14251 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14253 = this;
return (new cljs.core.Range(meta,this__14253.start,this__14253.end,this__14253.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14258 = this;
return this__14258.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14299 = null;
var G__14299__14300 = (function (rng,n){
var this__14261 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14261.start + (n * this__14261.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14262 = (this__14261.start > this__14261.end);

if(cljs.core.truth_(and__3546__auto____14262))
{return cljs.core._EQ_.call(null,this__14261.step,0);
} else
{return and__3546__auto____14262;
}
})()))
{return this__14261.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14299__14301 = (function (rng,n,not_found){
var this__14266 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14266.start + (n * this__14266.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14273 = (this__14266.start > this__14266.end);

if(cljs.core.truth_(and__3546__auto____14273))
{return cljs.core._EQ_.call(null,this__14266.step,0);
} else
{return and__3546__auto____14273;
}
})()))
{return this__14266.start;
} else
{return not_found;
}
}
});
G__14299 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14299__14300.call(this,rng,n);
case  3 :
return G__14299__14301.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14299;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14276 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14276.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14326 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14328 = (function (end){
return range.call(null,0,end,1);
});
var range__14329 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14330 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14326.call(this);
case  1 :
return range__14328.call(this,start);
case  2 :
return range__14329.call(this,start,end);
case  3 :
return range__14330.call(this,start,end,step);
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
var temp__3698__auto____14333 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14333))
{var s__14334 = temp__3698__auto____14333;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14334),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14334)));
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
var temp__3698__auto____14347 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14347))
{var s__14348 = temp__3698__auto____14347;

var fst__14349 = cljs.core.first.call(null,s__14348);
var fv__14350 = f.call(null,fst__14349);
var run__14351 = cljs.core.cons.call(null,fst__14349,cljs.core.take_while.call(null,(function (p1__14335_SHARP_){
return cljs.core._EQ_.call(null,fv__14350,f.call(null,p1__14335_SHARP_));
}),cljs.core.next.call(null,s__14348)));

return cljs.core.cons.call(null,run__14351,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14351),s__14348))));
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
var reductions__14373 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14369 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14369))
{var s__14370 = temp__3695__auto____14369;

return reductions.call(null,f,cljs.core.first.call(null,s__14370),cljs.core.rest.call(null,s__14370));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14374 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14371 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14371))
{var s__14372 = temp__3698__auto____14371;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14372)),cljs.core.rest.call(null,s__14372));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14373.call(this,f,init);
case  3 :
return reductions__14374.call(this,f,init,coll);
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
var juxt__14443 = (function (f){
return (function() {
var G__14449 = null;
var G__14449__14450 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14449__14451 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14449__14452 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14449__14453 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14449__14454 = (function() { 
var G__14460__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14460 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14460__delegate.call(this, x, y, z, args);
};
G__14460.cljs$lang$maxFixedArity = 3;
G__14460.cljs$lang$applyTo = (function (arglist__14462){
var x = cljs.core.first(arglist__14462);
var y = cljs.core.first(cljs.core.next(arglist__14462));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14462)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14462)));
return G__14460__delegate.call(this, x, y, z, args);
});
return G__14460;
})()
;
G__14449 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14449__14450.call(this);
case  1 :
return G__14449__14451.call(this,x);
case  2 :
return G__14449__14452.call(this,x,y);
case  3 :
return G__14449__14453.call(this,x,y,z);
default:
return G__14449__14454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14449.cljs$lang$maxFixedArity = 3;
G__14449.cljs$lang$applyTo = G__14449__14454.cljs$lang$applyTo;
return G__14449;
})()
});
var juxt__14445 = (function (f,g){
return (function() {
var G__14468 = null;
var G__14468__14469 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14468__14470 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14468__14471 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14468__14473 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14468__14474 = (function() { 
var G__14497__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14497 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14497__delegate.call(this, x, y, z, args);
};
G__14497.cljs$lang$maxFixedArity = 3;
G__14497.cljs$lang$applyTo = (function (arglist__14499){
var x = cljs.core.first(arglist__14499);
var y = cljs.core.first(cljs.core.next(arglist__14499));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14499)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14499)));
return G__14497__delegate.call(this, x, y, z, args);
});
return G__14497;
})()
;
G__14468 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14468__14469.call(this);
case  1 :
return G__14468__14470.call(this,x);
case  2 :
return G__14468__14471.call(this,x,y);
case  3 :
return G__14468__14473.call(this,x,y,z);
default:
return G__14468__14474.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14468.cljs$lang$maxFixedArity = 3;
G__14468.cljs$lang$applyTo = G__14468__14474.cljs$lang$applyTo;
return G__14468;
})()
});
var juxt__14446 = (function (f,g,h){
return (function() {
var G__14503 = null;
var G__14503__14504 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14503__14505 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14503__14506 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14503__14507 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14503__14508 = (function() { 
var G__14514__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14514 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14514__delegate.call(this, x, y, z, args);
};
G__14514.cljs$lang$maxFixedArity = 3;
G__14514.cljs$lang$applyTo = (function (arglist__14515){
var x = cljs.core.first(arglist__14515);
var y = cljs.core.first(cljs.core.next(arglist__14515));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14515)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14515)));
return G__14514__delegate.call(this, x, y, z, args);
});
return G__14514;
})()
;
G__14503 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14503__14504.call(this);
case  1 :
return G__14503__14505.call(this,x);
case  2 :
return G__14503__14506.call(this,x,y);
case  3 :
return G__14503__14507.call(this,x,y,z);
default:
return G__14503__14508.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14503.cljs$lang$maxFixedArity = 3;
G__14503.cljs$lang$applyTo = G__14503__14508.cljs$lang$applyTo;
return G__14503;
})()
});
var juxt__14447 = (function() { 
var G__14522__delegate = function (f,g,h,fs){
var fs__14386 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14523 = null;
var G__14523__14524 = (function (){
return cljs.core.reduce.call(null,(function (p1__14359_SHARP_,p2__14360_SHARP_){
return cljs.core.conj.call(null,p1__14359_SHARP_,p2__14360_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14386);
});
var G__14523__14526 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14361_SHARP_,p2__14362_SHARP_){
return cljs.core.conj.call(null,p1__14361_SHARP_,p2__14362_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14386);
});
var G__14523__14528 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14363_SHARP_,p2__14364_SHARP_){
return cljs.core.conj.call(null,p1__14363_SHARP_,p2__14364_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14386);
});
var G__14523__14529 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14365_SHARP_,p2__14366_SHARP_){
return cljs.core.conj.call(null,p1__14365_SHARP_,p2__14366_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14386);
});
var G__14523__14530 = (function() { 
var G__14534__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14367_SHARP_,p2__14368_SHARP_){
return cljs.core.conj.call(null,p1__14367_SHARP_,cljs.core.apply.call(null,p2__14368_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14386);
};
var G__14534 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14534__delegate.call(this, x, y, z, args);
};
G__14534.cljs$lang$maxFixedArity = 3;
G__14534.cljs$lang$applyTo = (function (arglist__14535){
var x = cljs.core.first(arglist__14535);
var y = cljs.core.first(cljs.core.next(arglist__14535));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14535)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14535)));
return G__14534__delegate.call(this, x, y, z, args);
});
return G__14534;
})()
;
G__14523 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14523__14524.call(this);
case  1 :
return G__14523__14526.call(this,x);
case  2 :
return G__14523__14528.call(this,x,y);
case  3 :
return G__14523__14529.call(this,x,y,z);
default:
return G__14523__14530.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14523.cljs$lang$maxFixedArity = 3;
G__14523.cljs$lang$applyTo = G__14523__14530.cljs$lang$applyTo;
return G__14523;
})()
};
var G__14522 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14522__delegate.call(this, f, g, h, fs);
};
G__14522.cljs$lang$maxFixedArity = 3;
G__14522.cljs$lang$applyTo = (function (arglist__14539){
var f = cljs.core.first(arglist__14539);
var g = cljs.core.first(cljs.core.next(arglist__14539));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14539)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14539)));
return G__14522__delegate.call(this, f, g, h, fs);
});
return G__14522;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14443.call(this,f);
case  2 :
return juxt__14445.call(this,f,g);
case  3 :
return juxt__14446.call(this,f,g,h);
default:
return juxt__14447.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14447.cljs$lang$applyTo;
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
var dorun__14566 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14570 = cljs.core.next.call(null,coll);
coll = G__14570;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14568 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14558 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14558))
{return (n > 0);
} else
{return and__3546__auto____14558;
}
})()))
{{
var G__14578 = (n - 1);
var G__14579 = cljs.core.next.call(null,coll);
n = G__14578;
coll = G__14579;
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
return dorun__14566.call(this,n);
case  2 :
return dorun__14568.call(this,n,coll);
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
var doall__14583 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14585 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14583.call(this,n);
case  2 :
return doall__14585.call(this,n,coll);
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
var matches__14594 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14594),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14594),1)))
{return cljs.core.first.call(null,matches__14594);
} else
{return cljs.core.vec.call(null,matches__14594);
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
var matches__14609 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14609)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14609),1)))
{return cljs.core.first.call(null,matches__14609);
} else
{return cljs.core.vec.call(null,matches__14609);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14617 = cljs.core.re_find.call(null,re,s);
var match_idx__14618 = s.search(re);
var match_str__14619 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14617))?cljs.core.first.call(null,match_data__14617):match_data__14617);
var post_match__14620 = cljs.core.subs.call(null,s,(match_idx__14618 + cljs.core.count.call(null,match_str__14619)));

if(cljs.core.truth_(match_data__14617))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14617,re_seq.call(null,re,post_match__14620));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14623_SHARP_){
return print_one.call(null,p1__14623_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14636 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14636))
{var and__3546__auto____14660 = (function (){var x__445__auto____14644 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14648 = x__445__auto____14644;

if(cljs.core.truth_(and__3546__auto____14648))
{var and__3546__auto____14654 = x__445__auto____14644.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14654))
{return cljs.core.not.call(null,x__445__auto____14644.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14654;
}
} else
{return and__3546__auto____14648;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14644);
}
})();

if(cljs.core.truth_(and__3546__auto____14660))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14660;
}
} else
{return and__3546__auto____14636;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14663 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14665 = x__445__auto____14663;

if(cljs.core.truth_(and__3546__auto____14665))
{var and__3546__auto____14666 = x__445__auto____14663.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14666))
{return cljs.core.not.call(null,x__445__auto____14663.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14666;
}
} else
{return and__3546__auto____14665;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14663);
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
var first_obj__14679 = cljs.core.first.call(null,objs);
var sb__14680 = (new goog.string.StringBuffer());

var G__14681__14684 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14681__14684))
{var obj__14685 = cljs.core.first.call(null,G__14681__14684);
var G__14681__14686 = G__14681__14684;

while(true){
if(cljs.core.truth_((obj__14685 === first_obj__14679)))
{} else
{sb__14680.append(" ");
}
var G__14687__14688 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14685,opts));

if(cljs.core.truth_(G__14687__14688))
{var string__14689 = cljs.core.first.call(null,G__14687__14688);
var G__14687__14691 = G__14687__14688;

while(true){
sb__14680.append(string__14689);
var temp__3698__auto____14693 = cljs.core.next.call(null,G__14687__14691);

if(cljs.core.truth_(temp__3698__auto____14693))
{var G__14687__14695 = temp__3698__auto____14693;

{
var G__14712 = cljs.core.first.call(null,G__14687__14695);
var G__14713 = G__14687__14695;
string__14689 = G__14712;
G__14687__14691 = G__14713;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14699 = cljs.core.next.call(null,G__14681__14686);

if(cljs.core.truth_(temp__3698__auto____14699))
{var G__14681__14700 = temp__3698__auto____14699;

{
var G__14715 = cljs.core.first.call(null,G__14681__14700);
var G__14717 = G__14681__14700;
obj__14685 = G__14715;
G__14681__14686 = G__14717;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14680);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14722 = cljs.core.first.call(null,objs);

var G__14723__14724 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14723__14724))
{var obj__14725 = cljs.core.first.call(null,G__14723__14724);
var G__14723__14726 = G__14723__14724;

while(true){
if(cljs.core.truth_((obj__14725 === first_obj__14722)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14727__14731 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14725,opts));

if(cljs.core.truth_(G__14727__14731))
{var string__14733 = cljs.core.first.call(null,G__14727__14731);
var G__14727__14734 = G__14727__14731;

while(true){
cljs.core.string_print.call(null,string__14733);
var temp__3698__auto____14735 = cljs.core.next.call(null,G__14727__14734);

if(cljs.core.truth_(temp__3698__auto____14735))
{var G__14727__14736 = temp__3698__auto____14735;

{
var G__14749 = cljs.core.first.call(null,G__14727__14736);
var G__14750 = G__14727__14736;
string__14733 = G__14749;
G__14727__14734 = G__14750;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14742 = cljs.core.next.call(null,G__14723__14726);

if(cljs.core.truth_(temp__3698__auto____14742))
{var G__14723__14743 = temp__3698__auto____14742;

{
var G__14753 = cljs.core.first.call(null,G__14723__14743);
var G__14755 = G__14723__14743;
obj__14725 = G__14753;
G__14723__14726 = G__14755;
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
pr_str.cljs$lang$applyTo = (function (arglist__14817){
var objs = cljs.core.seq( arglist__14817 );;
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
pr.cljs$lang$applyTo = (function (arglist__14822){
var objs = cljs.core.seq( arglist__14822 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14826){
var objs = cljs.core.seq( arglist__14826 );;
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
println.cljs$lang$applyTo = (function (arglist__14838){
var objs = cljs.core.seq( arglist__14838 );;
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
prn.cljs$lang$applyTo = (function (arglist__14892){
var objs = cljs.core.seq( arglist__14892 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14898 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14898,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14912 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14912))
{var nspc__14913 = temp__3698__auto____14912;

return cljs.core.str.call(null,nspc__14913,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14915 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14915))
{var nspc__14919 = temp__3698__auto____14915;

return cljs.core.str.call(null,nspc__14919,"/");
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
var pr_pair__14931 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14931,"{",", ","}",opts,coll);
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
var this__14997 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14999 = this;
var G__15000__15001 = cljs.core.seq.call(null,this__14999.watches);

if(cljs.core.truth_(G__15000__15001))
{var G__15005__15010 = cljs.core.first.call(null,G__15000__15001);
var vec__15008__15011 = G__15005__15010;
var key__15012 = cljs.core.nth.call(null,vec__15008__15011,0,null);
var f__15014 = cljs.core.nth.call(null,vec__15008__15011,1,null);
var G__15000__15015 = G__15000__15001;

var G__15005__15016 = G__15005__15010;
var G__15000__15017 = G__15000__15015;

while(true){
var vec__15019__15021 = G__15005__15016;
var key__15023 = cljs.core.nth.call(null,vec__15019__15021,0,null);
var f__15024 = cljs.core.nth.call(null,vec__15019__15021,1,null);
var G__15000__15025 = G__15000__15017;

f__15024.call(null,key__15023,this$,oldval,newval);
var temp__3698__auto____15026 = cljs.core.next.call(null,G__15000__15025);

if(cljs.core.truth_(temp__3698__auto____15026))
{var G__15000__15027 = temp__3698__auto____15026;

{
var G__15049 = cljs.core.first.call(null,G__15000__15027);
var G__15050 = G__15000__15027;
G__15005__15016 = G__15049;
G__15000__15017 = G__15050;
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
var this__15028 = this;
return this$.watches = cljs.core.assoc.call(null,this__15028.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__15032 = this;
return this$.watches = cljs.core.dissoc.call(null,this__15032.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__15034 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__15034.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15035 = this;
return this__15035.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15037 = this;
return this__15037.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__15038 = this;
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
var atom__15061 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__15062 = (function() { 
var G__15064__delegate = function (x,p__15055){
var map__15056__15057 = p__15055;
var map__15056__15058 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15056__15057))?cljs.core.apply.call(null,cljs.core.hash_map,map__15056__15057):map__15056__15057);
var validator__15059 = cljs.core.get.call(null,map__15056__15058,"﷐'validator");
var meta__15060 = cljs.core.get.call(null,map__15056__15058,"﷐'meta");

return (new cljs.core.Atom(x,meta__15060,validator__15059,null));
};
var G__15064 = function (x,var_args){
var p__15055 = null;
if (goog.isDef(var_args)) {
  p__15055 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15064__delegate.call(this, x, p__15055);
};
G__15064.cljs$lang$maxFixedArity = 1;
G__15064.cljs$lang$applyTo = (function (arglist__15065){
var x = cljs.core.first(arglist__15065);
var p__15055 = cljs.core.rest(arglist__15065);
return G__15064__delegate.call(this, x, p__15055);
});
return G__15064;
})()
;
atom = function(x,var_args){
var p__15055 = var_args;
switch(arguments.length){
case  1 :
return atom__15061.call(this,x);
default:
return atom__15062.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__15062.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____15076 = a.validator;

if(cljs.core.truth_(temp__3698__auto____15076))
{var validate__15077 = temp__3698__auto____15076;

if(cljs.core.truth_(validate__15077.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__15084 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15084,new_value);
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
var swap_BANG___15221 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___15222 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___15223 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___15224 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___15225 = (function() { 
var G__15229__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15229 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15229__delegate.call(this, a, f, x, y, z, more);
};
G__15229.cljs$lang$maxFixedArity = 5;
G__15229.cljs$lang$applyTo = (function (arglist__15231){
var a = cljs.core.first(arglist__15231);
var f = cljs.core.first(cljs.core.next(arglist__15231));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15231)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15231))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15231)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15231)))));
return G__15229__delegate.call(this, a, f, x, y, z, more);
});
return G__15229;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___15221.call(this,a,f);
case  3 :
return swap_BANG___15222.call(this,a,f,x);
case  4 :
return swap_BANG___15223.call(this,a,f,x,y);
case  5 :
return swap_BANG___15224.call(this,a,f,x,y,z);
default:
return swap_BANG___15225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___15225.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15252){
var iref = cljs.core.first(arglist__15252);
var f = cljs.core.first(cljs.core.next(arglist__15252));
var args = cljs.core.rest(cljs.core.next(arglist__15252));
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
var gensym__15271 = (function (){
return gensym.call(null,"G__");
});
var gensym__15272 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15271.call(this);
case  1 :
return gensym__15272.call(this,prefix_string);
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
var this__15282 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15282.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15287 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15287.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15287.state,this__15287.f);
}
return cljs.core.deref.call(null,this__15287.state);
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
delay.cljs$lang$applyTo = (function (arglist__15300){
var body = cljs.core.seq( arglist__15300 );;
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
var map__15321__15323 = options;
var map__15321__15325 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15321__15323))?cljs.core.apply.call(null,cljs.core.hash_map,map__15321__15323):map__15321__15323);
var keywordize_keys__15326 = cljs.core.get.call(null,map__15321__15325,"﷐'keywordize-keys");
var keyfn__15327 = (cljs.core.truth_(keywordize_keys__15326)?cljs.core.keyword:cljs.core.str);
var f__15346 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15337 = (function iter__15330(s__15331){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15331__15333 = s__15331;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15331__15333)))
{var k__15335 = cljs.core.first.call(null,s__15331__15333);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15327.call(null,k__15335),thisfn.call(null,(x[k__15335]))]),iter__15330.call(null,cljs.core.rest.call(null,s__15331__15333)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15337.call(null,cljs.core.js_keys.call(null,x));
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

return f__15346.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15348){
var x = cljs.core.first(arglist__15348);
var options = cljs.core.rest(arglist__15348);
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
var mem__15350 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15357__delegate = function (args){
var temp__3695__auto____15351 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15350),args);

if(cljs.core.truth_(temp__3695__auto____15351))
{var v__15352 = temp__3695__auto____15351;

return v__15352;
} else
{var ret__15354 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15350,cljs.core.assoc,args,ret__15354);
return ret__15354;
}
};
var G__15357 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15357__delegate.call(this, args);
};
G__15357.cljs$lang$maxFixedArity = 0;
G__15357.cljs$lang$applyTo = (function (arglist__15359){
var args = cljs.core.seq( arglist__15359 );;
return G__15357__delegate.call(this, args);
});
return G__15357;
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
var trampoline__15365 = (function (f){
while(true){
var ret__15363 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15363)))
{{
var G__15369 = ret__15363;
f = G__15369;
continue;
}
} else
{return ret__15363;
}
break;
}
});
var trampoline__15366 = (function() { 
var G__15370__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15370 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15370__delegate.call(this, f, args);
};
G__15370.cljs$lang$maxFixedArity = 1;
G__15370.cljs$lang$applyTo = (function (arglist__15372){
var f = cljs.core.first(arglist__15372);
var args = cljs.core.rest(arglist__15372);
return G__15370__delegate.call(this, f, args);
});
return G__15370;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15365.call(this,f);
default:
return trampoline__15366.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15366.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15374 = (function (){
return rand.call(null,1);
});
var rand__15375 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15374.call(this);
case  1 :
return rand__15375.call(this,n);
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
var k__15399 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15399,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15399,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15408 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15409 = (function (h,child,parent){
var or__3548__auto____15400 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15400))
{return or__3548__auto____15400;
} else
{var or__3548__auto____15401 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15401))
{return or__3548__auto____15401;
} else
{var and__3546__auto____15402 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15402))
{var and__3546__auto____15403 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15403))
{var and__3546__auto____15404 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15404))
{var ret__15405 = true;
var i__15406 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15407 = cljs.core.not.call(null,ret__15405);

if(cljs.core.truth_(or__3548__auto____15407))
{return or__3548__auto____15407;
} else
{return cljs.core._EQ_.call(null,i__15406,cljs.core.count.call(null,parent));
}
})()))
{return ret__15405;
} else
{{
var G__15412 = isa_QMARK_.call(null,h,child.call(null,i__15406),parent.call(null,i__15406));
var G__15413 = (i__15406 + 1);
ret__15405 = G__15412;
i__15406 = G__15413;
continue;
}
}
break;
}
} else
{return and__3546__auto____15404;
}
} else
{return and__3546__auto____15403;
}
} else
{return and__3546__auto____15402;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15408.call(this,h,child);
case  3 :
return isa_QMARK___15409.call(this,h,child,parent);
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
var parents__15416 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15417 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15416.call(this,h);
case  2 :
return parents__15417.call(this,h,tag);
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
var ancestors__15419 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15420 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15419.call(this,h);
case  2 :
return ancestors__15420.call(this,h,tag);
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
var descendants__15428 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15429 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15428.call(this,h);
case  2 :
return descendants__15429.call(this,h,tag);
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
var derive__15447 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15448 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15440 = "﷐'parents".call(null,h);
var td__15441 = "﷐'descendants".call(null,h);
var ta__15442 = "﷐'ancestors".call(null,h);
var tf__15443 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15446 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15440.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15442.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15442.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15440,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15443.call(null,"﷐'ancestors".call(null,h),tag,td__15441,parent,ta__15442),"﷐'descendants":tf__15443.call(null,"﷐'descendants".call(null,h),parent,ta__15442,tag,td__15441)});
})());

if(cljs.core.truth_(or__3548__auto____15446))
{return or__3548__auto____15446;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15447.call(this,h,tag);
case  3 :
return derive__15448.call(this,h,tag,parent);
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
var underive__15456 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15457 = (function (h,tag,parent){
var parentMap__15450 = "﷐'parents".call(null,h);
var childsParents__15453 = (cljs.core.truth_(parentMap__15450.call(null,tag))?cljs.core.disj.call(null,parentMap__15450.call(null,tag),parent):cljs.core.set([]));
var newParents__15454 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15453))?cljs.core.assoc.call(null,parentMap__15450,tag,childsParents__15453):cljs.core.dissoc.call(null,parentMap__15450,tag));
var deriv_seq__15455 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15431_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15431_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15431_SHARP_),cljs.core.second.call(null,p1__15431_SHARP_)));
}),cljs.core.seq.call(null,newParents__15454)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15450.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15435_SHARP_,p2__15436_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15435_SHARP_,p2__15436_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15455));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15456.call(this,h,tag);
case  3 :
return underive__15457.call(this,h,tag,parent);
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
var xprefs__15466 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15470 = (cljs.core.truth_((function (){var and__3546__auto____15468 = xprefs__15466;

if(cljs.core.truth_(and__3546__auto____15468))
{return xprefs__15466.call(null,y);
} else
{return and__3546__auto____15468;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15470))
{return or__3548__auto____15470;
} else
{var or__3548__auto____15476 = (function (){var ps__15473 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15473) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15473),prefer_table)))
{} else
{}
{
var G__15518 = cljs.core.rest.call(null,ps__15473);
ps__15473 = G__15518;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15476))
{return or__3548__auto____15476;
} else
{var or__3548__auto____15480 = (function (){var ps__15477 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15477) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15477),y,prefer_table)))
{} else
{}
{
var G__15523 = cljs.core.rest.call(null,ps__15477);
ps__15477 = G__15523;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15480))
{return or__3548__auto____15480;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15533 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15533))
{return or__3548__auto____15533;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15545 = cljs.core.reduce.call(null,(function (be,p__15537){
var vec__15538__15539 = p__15537;
var k__15540 = cljs.core.nth.call(null,vec__15538__15539,0,null);
var ___15541 = cljs.core.nth.call(null,vec__15538__15539,1,null);
var e__15542 = vec__15538__15539;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15540)))
{var be2__15544 = (cljs.core.truth_((function (){var or__3548__auto____15543 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15543))
{return or__3548__auto____15543;
} else
{return cljs.core.dominates.call(null,k__15540,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15542:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15544),k__15540,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15540," and ",cljs.core.first.call(null,be2__15544),", and neither is preferred")));
}
return be2__15544;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15545))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15545));
return cljs.core.second.call(null,best_entry__15545);
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
if(cljs.core.truth_((function (){var and__3546__auto____15553 = mf;

if(cljs.core.truth_(and__3546__auto____15553))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15553;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15554 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15554))
{return or__3548__auto____15554;
} else
{var or__3548__auto____15555 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15555))
{return or__3548__auto____15555;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15556 = mf;

if(cljs.core.truth_(and__3546__auto____15556))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15556;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15557 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15557))
{return or__3548__auto____15557;
} else
{var or__3548__auto____15593 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15593))
{return or__3548__auto____15593;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15598 = mf;

if(cljs.core.truth_(and__3546__auto____15598))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15598;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15602 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15602))
{return or__3548__auto____15602;
} else
{var or__3548__auto____15603 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15603))
{return or__3548__auto____15603;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15604 = mf;

if(cljs.core.truth_(and__3546__auto____15604))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15604;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15605 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15605))
{return or__3548__auto____15605;
} else
{var or__3548__auto____15606 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15606))
{return or__3548__auto____15606;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15609 = mf;

if(cljs.core.truth_(and__3546__auto____15609))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15609;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15610 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15610))
{return or__3548__auto____15610;
} else
{var or__3548__auto____15611 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15611))
{return or__3548__auto____15611;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15614 = mf;

if(cljs.core.truth_(and__3546__auto____15614))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15614;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15615 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15615))
{return or__3548__auto____15615;
} else
{var or__3548__auto____15616 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15616))
{return or__3548__auto____15616;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15620 = mf;

if(cljs.core.truth_(and__3546__auto____15620))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15620;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15621 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15621))
{return or__3548__auto____15621;
} else
{var or__3548__auto____15622 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15622))
{return or__3548__auto____15622;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15623 = mf;

if(cljs.core.truth_(and__3546__auto____15623))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15623;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15624 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15624))
{return or__3548__auto____15624;
} else
{var or__3548__auto____15627 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15627))
{return or__3548__auto____15627;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15675 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15676 = cljs.core._get_method.call(null,mf,dispatch_val__15675);

if(cljs.core.truth_(target_fn__15676))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15675)));
}
return cljs.core.apply.call(null,target_fn__15676,args);
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
var this__15705 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15707 = this;
cljs.core.swap_BANG_.call(null,this__15707.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15707.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15707.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15707.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15712 = this;
cljs.core.swap_BANG_.call(null,this__15712.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15712.method_cache,this__15712.method_table,this__15712.cached_hierarchy,this__15712.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15714 = this;
cljs.core.swap_BANG_.call(null,this__15714.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15714.method_cache,this__15714.method_table,this__15714.cached_hierarchy,this__15714.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15715 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15715.cached_hierarchy),cljs.core.deref.call(null,this__15715.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15715.method_cache,this__15715.method_table,this__15715.cached_hierarchy,this__15715.hierarchy);
}
var temp__3695__auto____15717 = cljs.core.deref.call(null,this__15715.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15717))
{var target_fn__15793 = temp__3695__auto____15717;

return target_fn__15793;
} else
{var temp__3695__auto____15794 = cljs.core.find_and_cache_best_method.call(null,this__15715.name,dispatch_val,this__15715.hierarchy,this__15715.method_table,this__15715.prefer_table,this__15715.method_cache,this__15715.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15794))
{var target_fn__15795 = temp__3695__auto____15794;

return target_fn__15795;
} else
{return cljs.core.deref.call(null,this__15715.method_table).call(null,this__15715.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15796 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15796.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15796.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15796.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15796.method_cache,this__15796.method_table,this__15796.cached_hierarchy,this__15796.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15808 = this;
return cljs.core.deref.call(null,this__15808.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15815 = this;
return cljs.core.deref.call(null,this__15815.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15816 = this;
return cljs.core.do_dispatch.call(null,mf,this__15816.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15828__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15828 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15828__delegate.call(this, _, args);
};
G__15828.cljs$lang$maxFixedArity = 1;
G__15828.cljs$lang$applyTo = (function (arglist__15830){
var _ = cljs.core.first(arglist__15830);
var args = cljs.core.rest(arglist__15830);
return G__15828__delegate.call(this, _, args);
});
return G__15828;
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
