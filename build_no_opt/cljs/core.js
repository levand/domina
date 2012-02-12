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
var or__3548__auto____7251 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7251))
{return or__3548__auto____7251;
} else
{var or__3548__auto____7252 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
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
var _invoke__7550 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7331 = this$;

if(cljs.core.truth_(and__3546__auto____7331))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7331;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7336 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{var or__3548__auto____7338 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7551 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7343 = this$;

if(cljs.core.truth_(and__3546__auto____7343))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7343;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7353 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7553 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7357 = this$;

if(cljs.core.truth_(and__3546__auto____7357))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7357;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7360 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{var or__3548__auto____7364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7554 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{var or__3548__auto____7371 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7555 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7374 = this$;

if(cljs.core.truth_(and__3546__auto____7374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7378 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{var or__3548__auto____7379 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7556 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7383 = this$;

if(cljs.core.truth_(and__3546__auto____7383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7387 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7387))
{return or__3548__auto____7387;
} else
{var or__3548__auto____7389 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7402 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7404 = this$;

if(cljs.core.truth_(and__3546__auto____7404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7408 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7408))
{return or__3548__auto____7408;
} else
{var or__3548__auto____7410 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7559 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7413 = this$;

if(cljs.core.truth_(and__3546__auto____7413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7560 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = this$;

if(cljs.core.truth_(and__3546__auto____7423))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7423;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7427 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{var or__3548__auto____7428 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7432 = this$;

if(cljs.core.truth_(and__3546__auto____7432))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7432;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7436 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{var or__3548__auto____7437 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7562 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7440 = this$;

if(cljs.core.truth_(and__3546__auto____7440))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7440;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7445 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{var or__3548__auto____7446 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7563 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7449 = this$;

if(cljs.core.truth_(and__3546__auto____7449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7454 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{var or__3548__auto____7455 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7455))
{return or__3548__auto____7455;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7564 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7458 = this$;

if(cljs.core.truth_(and__3546__auto____7458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{var or__3548__auto____7464 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7565 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7467 = this$;

if(cljs.core.truth_(and__3546__auto____7467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7473 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7473))
{return or__3548__auto____7473;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7566 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7475 = this$;

if(cljs.core.truth_(and__3546__auto____7475))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7475;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7478 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{var or__3548__auto____7479 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7567 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7481 = this$;

if(cljs.core.truth_(and__3546__auto____7481))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7481;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{var or__3548__auto____7485 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7485))
{return or__3548__auto____7485;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7568 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7497 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{var or__3548__auto____7509 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7509))
{return or__3548__auto____7509;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7569 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7511 = this$;

if(cljs.core.truth_(and__3546__auto____7511))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7511;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7513 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{var or__3548__auto____7514 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7570 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7517 = this$;

if(cljs.core.truth_(and__3546__auto____7517))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7517;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7520 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7520))
{return or__3548__auto____7520;
} else
{var or__3548__auto____7531 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7571 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7536 = this$;

if(cljs.core.truth_(and__3546__auto____7536))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7536;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7544 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7544))
{return or__3548__auto____7544;
} else
{var or__3548__auto____7546 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7546))
{return or__3548__auto____7546;
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
return _invoke__7550.call(this,this$);
case  2 :
return _invoke__7551.call(this,this$,a);
case  3 :
return _invoke__7553.call(this,this$,a,b);
case  4 :
return _invoke__7554.call(this,this$,a,b,c);
case  5 :
return _invoke__7555.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7556.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7559.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7560.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7562.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7563.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7564.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7565.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7566.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7567.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7568.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7569.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7570.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7571.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7707 = coll;

if(cljs.core.truth_(and__3546__auto____7707))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7707;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7708 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7708))
{return or__3548__auto____7708;
} else
{var or__3548__auto____7709 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7711 = coll;

if(cljs.core.truth_(and__3546__auto____7711))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7711;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7713 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{var or__3548__auto____7715 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7732 = coll;

if(cljs.core.truth_(and__3546__auto____7732))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7732;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7755 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
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
var _nth__7791 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7782 = coll;

if(cljs.core.truth_(and__3546__auto____7782))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7782;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{var or__3548__auto____7784 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7792 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7786 = coll;

if(cljs.core.truth_(and__3546__auto____7786))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7786;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7787 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
} else
{var or__3548__auto____7789 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
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
return _nth__7791.call(this,coll,n);
case  3 :
return _nth__7792.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7801 = coll;

if(cljs.core.truth_(and__3546__auto____7801))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7801;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7807 = coll;

if(cljs.core.truth_(and__3546__auto____7807))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7807;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7810 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{var or__3548__auto____7812 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7812))
{return or__3548__auto____7812;
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
var _lookup__7830 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7816 = o;

if(cljs.core.truth_(and__3546__auto____7816))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7816;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7817 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
} else
{var or__3548__auto____7819 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7819))
{return or__3548__auto____7819;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7831 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7821 = o;

if(cljs.core.truth_(and__3546__auto____7821))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7821;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7824 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{var or__3548__auto____7827 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
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
return _lookup__7830.call(this,o,k);
case  3 :
return _lookup__7831.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7923 = coll;

if(cljs.core.truth_(and__3546__auto____7923))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7923;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7927 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{var or__3548__auto____7928 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7928))
{return or__3548__auto____7928;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7929 = coll;

if(cljs.core.truth_(and__3546__auto____7929))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7929;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7931 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7940 = coll;

if(cljs.core.truth_(and__3546__auto____7940))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7940;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7945 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{var or__3548__auto____7947 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7956 = coll;

if(cljs.core.truth_(and__3546__auto____7956))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7956;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7959 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{var or__3548__auto____7961 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7974 = coll;

if(cljs.core.truth_(and__3546__auto____7974))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7974;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7977 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{var or__3548__auto____7979 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7984 = coll;

if(cljs.core.truth_(and__3546__auto____7984))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7984;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7985 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7985))
{return or__3548__auto____7985;
} else
{var or__3548__auto____7986 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7995 = coll;

if(cljs.core.truth_(and__3546__auto____7995))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7995;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7998 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8004 = o;

if(cljs.core.truth_(and__3546__auto____8004))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8004;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8005 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{var or__3548__auto____8006 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8035 = o;

if(cljs.core.truth_(and__3546__auto____8035))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8035;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8037 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8037))
{return or__3548__auto____8037;
} else
{var or__3548__auto____8039 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8048 = o;

if(cljs.core.truth_(and__3546__auto____8048))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8048;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8051 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8059 = o;

if(cljs.core.truth_(and__3546__auto____8059))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8059;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8061 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8061))
{return or__3548__auto____8061;
} else
{var or__3548__auto____8063 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
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
var _reduce__8078 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8069 = coll;

if(cljs.core.truth_(and__3546__auto____8069))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8069;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8070 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{var or__3548__auto____8071 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8079 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8072 = coll;

if(cljs.core.truth_(and__3546__auto____8072))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8072;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8074 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{var or__3548__auto____8075 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
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
return _reduce__8078.call(this,coll,f);
case  3 :
return _reduce__8079.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = o;

if(cljs.core.truth_(and__3546__auto____8082))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8082;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8094 = o;

if(cljs.core.truth_(and__3546__auto____8094))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8094;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8095 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{var or__3548__auto____8096 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8104 = o;

if(cljs.core.truth_(and__3546__auto____8104))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8104;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8106 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
} else
{var or__3548__auto____8107 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
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
if(cljs.core.truth_((function (){var and__3546__auto____8122 = o;

if(cljs.core.truth_(and__3546__auto____8122))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8122;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8126 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = d;

if(cljs.core.truth_(and__3546__auto____8136))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8136;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8137 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
} else
{var or__3548__auto____8138 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8142 = this$;

if(cljs.core.truth_(and__3546__auto____8142))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8142;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8144 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{var or__3548__auto____8146 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8146))
{return or__3548__auto____8146;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8151 = this$;

if(cljs.core.truth_(and__3546__auto____8151))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8151;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8152 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8152))
{return or__3548__auto____8152;
} else
{var or__3548__auto____8153 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8154 = this$;

if(cljs.core.truth_(and__3546__auto____8154))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8154;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8155 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
} else
{var or__3548__auto____8156 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8156))
{return or__3548__auto____8156;
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
var G__8260 = null;
var G__8260__8261 = (function (o,k){
return null;
});
var G__8260__8262 = (function (o,k,not_found){
return not_found;
});
G__8260 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8260__8261.call(this,o,k);
case  3 :
return G__8260__8262.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8260;
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
var G__8268 = null;
var G__8268__8269 = (function (_,f){
return f.call(null);
});
var G__8268__8270 = (function (_,f,start){
return start;
});
G__8268 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8268__8269.call(this,_,f);
case  3 :
return G__8268__8270.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8268;
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
var G__8272 = null;
var G__8272__8273 = (function (_,n){
return null;
});
var G__8272__8274 = (function (_,n,not_found){
return not_found;
});
G__8272 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8272__8273.call(this,_,n);
case  3 :
return G__8272__8274.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8272;
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
var ci_reduce__8318 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8307 = cljs.core._nth.call(null,cicoll,0);
var n__8308 = 1;

while(true){
if(cljs.core.truth_((n__8308 < cljs.core._count.call(null,cicoll))))
{{
var G__8327 = f.call(null,val__8307,cljs.core._nth.call(null,cicoll,n__8308));
var G__8328 = (n__8308 + 1);
val__8307 = G__8327;
n__8308 = G__8328;
continue;
}
} else
{return val__8307;
}
break;
}
}
});
var ci_reduce__8319 = (function (cicoll,f,val){
var val__8309 = val;
var n__8310 = 0;

while(true){
if(cljs.core.truth_((n__8310 < cljs.core._count.call(null,cicoll))))
{{
var G__8329 = f.call(null,val__8309,cljs.core._nth.call(null,cicoll,n__8310));
var G__8330 = (n__8310 + 1);
val__8309 = G__8329;
n__8310 = G__8330;
continue;
}
} else
{return val__8309;
}
break;
}
});
var ci_reduce__8320 = (function (cicoll,f,val,idx){
var val__8315 = val;
var n__8316 = idx;

while(true){
if(cljs.core.truth_((n__8316 < cljs.core._count.call(null,cicoll))))
{{
var G__8331 = f.call(null,val__8315,cljs.core._nth.call(null,cicoll,n__8316));
var G__8332 = (n__8316 + 1);
val__8315 = G__8331;
n__8316 = G__8332;
continue;
}
} else
{return val__8315;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8318.call(this,cicoll,f);
case  3 :
return ci_reduce__8319.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8320.call(this,cicoll,f,val,idx);
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
var this__8333 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8366 = null;
var G__8366__8367 = (function (_,f){
var this__8334 = this;
return cljs.core.ci_reduce.call(null,this__8334.a,f,(this__8334.a[this__8334.i]),(this__8334.i + 1));
});
var G__8366__8368 = (function (_,f,start){
var this__8335 = this;
return cljs.core.ci_reduce.call(null,this__8335.a,f,start,this__8335.i);
});
G__8366 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8366__8367.call(this,_,f);
case  3 :
return G__8366__8368.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8366;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8336 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8337 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8370 = null;
var G__8370__8372 = (function (coll,n){
var this__8338 = this;
var i__8339 = (n + this__8338.i);

if(cljs.core.truth_((i__8339 < this__8338.a.length)))
{return (this__8338.a[i__8339]);
} else
{return null;
}
});
var G__8370__8374 = (function (coll,n,not_found){
var this__8344 = this;
var i__8345 = (n + this__8344.i);

if(cljs.core.truth_((i__8345 < this__8344.a.length)))
{return (this__8344.a[i__8345]);
} else
{return not_found;
}
});
G__8370 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8370__8372.call(this,coll,n);
case  3 :
return G__8370__8374.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8370;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8346 = this;
return (this__8346.a.length - this__8346.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8351 = this;
return (this__8351.a[this__8351.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8356 = this;
if(cljs.core.truth_(((this__8356.i + 1) < this__8356.a.length)))
{return (new cljs.core.IndexedSeq(this__8356.a,(this__8356.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8361 = this;
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
var G__8393 = null;
var G__8393__8395 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8393__8396 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8393 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8393__8395.call(this,array,f);
case  3 :
return G__8393__8396.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8393;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8400 = null;
var G__8400__8401 = (function (array,k){
return (array[k]);
});
var G__8400__8402 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8400 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8400__8401.call(this,array,k);
case  3 :
return G__8400__8402.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8400;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8404 = null;
var G__8404__8405 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8404__8406 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8404 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8404__8405.call(this,array,n);
case  3 :
return G__8404__8406.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8404;
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
var temp__3698__auto____8414 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8414))
{var s__8416 = temp__3698__auto____8414;

return cljs.core._first.call(null,s__8416);
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
var G__8513 = cljs.core.next.call(null,s);
s = G__8513;
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
var s__8516 = cljs.core.seq.call(null,x);
var n__8517 = 0;

while(true){
if(cljs.core.truth_(s__8516))
{{
var G__8519 = cljs.core.next.call(null,s__8516);
var G__8521 = (n__8517 + 1);
s__8516 = G__8519;
n__8517 = G__8521;
continue;
}
} else
{return n__8517;
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
var conj__8523 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8525 = (function() { 
var G__8529__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8531 = conj.call(null,coll,x);
var G__8533 = cljs.core.first.call(null,xs);
var G__8535 = cljs.core.next.call(null,xs);
coll = G__8531;
x = G__8533;
xs = G__8535;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8529 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8529__delegate.call(this, coll, x, xs);
};
G__8529.cljs$lang$maxFixedArity = 2;
G__8529.cljs$lang$applyTo = (function (arglist__8539){
var coll = cljs.core.first(arglist__8539);
var x = cljs.core.first(cljs.core.next(arglist__8539));
var xs = cljs.core.rest(cljs.core.next(arglist__8539));
return G__8529__delegate.call(this, coll, x, xs);
});
return G__8529;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8523.call(this,coll,x);
default:
return conj__8525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8525.cljs$lang$applyTo;
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
var nth__8573 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8574 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8573.call(this,coll,n);
case  3 :
return nth__8574.call(this,coll,n,not_found);
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
var get__8584 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8585 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8584.call(this,o,k);
case  3 :
return get__8585.call(this,o,k,not_found);
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
var assoc__8598 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8599 = (function() { 
var G__8601__delegate = function (coll,k,v,kvs){
while(true){
var ret__8593 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8603 = ret__8593;
var G__8604 = cljs.core.first.call(null,kvs);
var G__8605 = cljs.core.second.call(null,kvs);
var G__8607 = cljs.core.nnext.call(null,kvs);
coll = G__8603;
k = G__8604;
v = G__8605;
kvs = G__8607;
continue;
}
} else
{return ret__8593;
}
break;
}
};
var G__8601 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8601__delegate.call(this, coll, k, v, kvs);
};
G__8601.cljs$lang$maxFixedArity = 3;
G__8601.cljs$lang$applyTo = (function (arglist__8612){
var coll = cljs.core.first(arglist__8612);
var k = cljs.core.first(cljs.core.next(arglist__8612));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8612)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8612)));
return G__8601__delegate.call(this, coll, k, v, kvs);
});
return G__8601;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8598.call(this,coll,k,v);
default:
return assoc__8599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8599.cljs$lang$applyTo;
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
var dissoc__8635 = (function (coll){
return coll;
});
var dissoc__8636 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8637 = (function() { 
var G__8639__delegate = function (coll,k,ks){
while(true){
var ret__8629 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8640 = ret__8629;
var G__8642 = cljs.core.first.call(null,ks);
var G__8643 = cljs.core.next.call(null,ks);
coll = G__8640;
k = G__8642;
ks = G__8643;
continue;
}
} else
{return ret__8629;
}
break;
}
};
var G__8639 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8639__delegate.call(this, coll, k, ks);
};
G__8639.cljs$lang$maxFixedArity = 2;
G__8639.cljs$lang$applyTo = (function (arglist__8646){
var coll = cljs.core.first(arglist__8646);
var k = cljs.core.first(cljs.core.next(arglist__8646));
var ks = cljs.core.rest(cljs.core.next(arglist__8646));
return G__8639__delegate.call(this, coll, k, ks);
});
return G__8639;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8635.call(this,coll);
case  2 :
return dissoc__8636.call(this,coll,k);
default:
return dissoc__8637.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8637.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8673 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8675 = x__445__auto____8673;

if(cljs.core.truth_(and__3546__auto____8675))
{var and__3546__auto____8676 = x__445__auto____8673.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8676))
{return cljs.core.not.call(null,x__445__auto____8673.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8676;
}
} else
{return and__3546__auto____8675;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8673);
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
var disj__8709 = (function (coll){
return coll;
});
var disj__8710 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8711 = (function() { 
var G__8714__delegate = function (coll,k,ks){
while(true){
var ret__8704 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8718 = ret__8704;
var G__8719 = cljs.core.first.call(null,ks);
var G__8720 = cljs.core.next.call(null,ks);
coll = G__8718;
k = G__8719;
ks = G__8720;
continue;
}
} else
{return ret__8704;
}
break;
}
};
var G__8714 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8714__delegate.call(this, coll, k, ks);
};
G__8714.cljs$lang$maxFixedArity = 2;
G__8714.cljs$lang$applyTo = (function (arglist__8722){
var coll = cljs.core.first(arglist__8722);
var k = cljs.core.first(cljs.core.next(arglist__8722));
var ks = cljs.core.rest(cljs.core.next(arglist__8722));
return G__8714__delegate.call(this, coll, k, ks);
});
return G__8714;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8709.call(this,coll);
case  2 :
return disj__8710.call(this,coll,k);
default:
return disj__8711.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8711.cljs$lang$applyTo;
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
{var x__445__auto____8742 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8745 = x__445__auto____8742;

if(cljs.core.truth_(and__3546__auto____8745))
{var and__3546__auto____8748 = x__445__auto____8742.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8748))
{return cljs.core.not.call(null,x__445__auto____8742.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8748;
}
} else
{return and__3546__auto____8745;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8742);
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
{var x__445__auto____8758 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8759 = x__445__auto____8758;

if(cljs.core.truth_(and__3546__auto____8759))
{var and__3546__auto____8760 = x__445__auto____8758.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8760))
{return cljs.core.not.call(null,x__445__auto____8758.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8760;
}
} else
{return and__3546__auto____8759;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8758);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8770 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8771 = x__445__auto____8770;

if(cljs.core.truth_(and__3546__auto____8771))
{var and__3546__auto____8772 = x__445__auto____8770.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8772))
{return cljs.core.not.call(null,x__445__auto____8770.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8772;
}
} else
{return and__3546__auto____8771;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8770);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8782 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8783 = x__445__auto____8782;

if(cljs.core.truth_(and__3546__auto____8783))
{var and__3546__auto____8784 = x__445__auto____8782.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8784))
{return cljs.core.not.call(null,x__445__auto____8782.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8784;
}
} else
{return and__3546__auto____8783;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8782);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8791 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8792 = x__445__auto____8791;

if(cljs.core.truth_(and__3546__auto____8792))
{var and__3546__auto____8793 = x__445__auto____8791.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8793))
{return cljs.core.not.call(null,x__445__auto____8791.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8793;
}
} else
{return and__3546__auto____8792;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8791);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8798 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8799 = x__445__auto____8798;

if(cljs.core.truth_(and__3546__auto____8799))
{var and__3546__auto____8801 = x__445__auto____8798.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8801))
{return cljs.core.not.call(null,x__445__auto____8798.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8801;
}
} else
{return and__3546__auto____8799;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8798);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8942 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8944 = x__445__auto____8942;

if(cljs.core.truth_(and__3546__auto____8944))
{var and__3546__auto____8946 = x__445__auto____8942.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8946))
{return cljs.core.not.call(null,x__445__auto____8942.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8946;
}
} else
{return and__3546__auto____8944;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8942);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8955 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8955.push(key);
}));
return keys__8955;
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
{var x__445__auto____8975 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8976 = x__445__auto____8975;

if(cljs.core.truth_(and__3546__auto____8976))
{var and__3546__auto____8977 = x__445__auto____8975.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8977))
{return cljs.core.not.call(null,x__445__auto____8975.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8977;
}
} else
{return and__3546__auto____8976;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8975);
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
var and__3546__auto____8983 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8983))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8986 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8986))
{return or__3548__auto____8986;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8983;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8989 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8989))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8989;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8991 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8991))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8991;
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
var and__3546__auto____8997 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8997))
{return (n == n.toFixed());
} else
{return and__3546__auto____8997;
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
if(cljs.core.truth_((function (){var and__3546__auto____9005 = coll;

if(cljs.core.truth_(and__3546__auto____9005))
{var and__3546__auto____9006 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9006))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9006;
}
} else
{return and__3546__auto____9005;
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
var distinct_QMARK___9031 = (function (x){
return true;
});
var distinct_QMARK___9032 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9033 = (function() { 
var G__9035__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9022 = cljs.core.set([y,x]);
var xs__9026 = more;

while(true){
var x__9027 = cljs.core.first.call(null,xs__9026);
var etc__9028 = cljs.core.next.call(null,xs__9026);

if(cljs.core.truth_(xs__9026))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9022,x__9027)))
{return false;
} else
{{
var G__9040 = cljs.core.conj.call(null,s__9022,x__9027);
var G__9041 = etc__9028;
s__9022 = G__9040;
xs__9026 = G__9041;
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
var G__9035 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9035__delegate.call(this, x, y, more);
};
G__9035.cljs$lang$maxFixedArity = 2;
G__9035.cljs$lang$applyTo = (function (arglist__9042){
var x = cljs.core.first(arglist__9042);
var y = cljs.core.first(cljs.core.next(arglist__9042));
var more = cljs.core.rest(cljs.core.next(arglist__9042));
return G__9035__delegate.call(this, x, y, more);
});
return G__9035;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9031.call(this,x);
case  2 :
return distinct_QMARK___9032.call(this,x,y);
default:
return distinct_QMARK___9033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9033.cljs$lang$applyTo;
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
var r__9050 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9050)))
{return r__9050;
} else
{if(cljs.core.truth_(r__9050))
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
var sort__9061 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9062 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9056 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9056,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9056);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9061.call(this,comp);
case  2 :
return sort__9062.call(this,comp,coll);
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
var sort_by__9070 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9071 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9070.call(this,keyfn,comp);
case  3 :
return sort_by__9071.call(this,keyfn,comp,coll);
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
var reduce__9080 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9081 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9080.call(this,f,val);
case  3 :
return reduce__9081.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9130 = (function (f,coll){
var temp__3695__auto____9090 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9090))
{var s__9092 = temp__3695__auto____9090;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9092),cljs.core.next.call(null,s__9092));
} else
{return f.call(null);
}
});
var seq_reduce__9131 = (function (f,val,coll){
var val__9128 = val;
var coll__9129 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9129))
{{
var G__9133 = f.call(null,val__9128,cljs.core.first.call(null,coll__9129));
var G__9135 = cljs.core.next.call(null,coll__9129);
val__9128 = G__9133;
coll__9129 = G__9135;
continue;
}
} else
{return val__9128;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9130.call(this,f,val);
case  3 :
return seq_reduce__9131.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9152 = null;
var G__9152__9153 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9152__9154 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9152 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9152__9153.call(this,coll,f);
case  3 :
return G__9152__9154.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9152;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9172 = (function (){
return 0;
});
var _PLUS___9173 = (function (x){
return x;
});
var _PLUS___9247 = (function (x,y){
return (x + y);
});
var _PLUS___9249 = (function() { 
var G__9254__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9254 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9254__delegate.call(this, x, y, more);
};
G__9254.cljs$lang$maxFixedArity = 2;
G__9254.cljs$lang$applyTo = (function (arglist__9256){
var x = cljs.core.first(arglist__9256);
var y = cljs.core.first(cljs.core.next(arglist__9256));
var more = cljs.core.rest(cljs.core.next(arglist__9256));
return G__9254__delegate.call(this, x, y, more);
});
return G__9254;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9172.call(this);
case  1 :
return _PLUS___9173.call(this,x);
case  2 :
return _PLUS___9247.call(this,x,y);
default:
return _PLUS___9249.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9249.cljs$lang$applyTo;
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
var ___9266 = (function (x){
return (- x);
});
var ___9267 = (function (x,y){
return (x - y);
});
var ___9268 = (function() { 
var G__9270__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9270 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9270__delegate.call(this, x, y, more);
};
G__9270.cljs$lang$maxFixedArity = 2;
G__9270.cljs$lang$applyTo = (function (arglist__9271){
var x = cljs.core.first(arglist__9271);
var y = cljs.core.first(cljs.core.next(arglist__9271));
var more = cljs.core.rest(cljs.core.next(arglist__9271));
return G__9270__delegate.call(this, x, y, more);
});
return G__9270;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9266.call(this,x);
case  2 :
return ___9267.call(this,x,y);
default:
return ___9268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9268.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9277 = (function (){
return 1;
});
var _STAR___9278 = (function (x){
return x;
});
var _STAR___9279 = (function (x,y){
return (x * y);
});
var _STAR___9280 = (function() { 
var G__9283__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9283 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9283__delegate.call(this, x, y, more);
};
G__9283.cljs$lang$maxFixedArity = 2;
G__9283.cljs$lang$applyTo = (function (arglist__9288){
var x = cljs.core.first(arglist__9288);
var y = cljs.core.first(cljs.core.next(arglist__9288));
var more = cljs.core.rest(cljs.core.next(arglist__9288));
return G__9283__delegate.call(this, x, y, more);
});
return G__9283;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9277.call(this);
case  1 :
return _STAR___9278.call(this,x);
case  2 :
return _STAR___9279.call(this,x,y);
default:
return _STAR___9280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9280.cljs$lang$applyTo;
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
var _SLASH___9291 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9292 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9293 = (function() { 
var G__9295__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9295__delegate.call(this, x, y, more);
};
G__9295.cljs$lang$maxFixedArity = 2;
G__9295.cljs$lang$applyTo = (function (arglist__9299){
var x = cljs.core.first(arglist__9299);
var y = cljs.core.first(cljs.core.next(arglist__9299));
var more = cljs.core.rest(cljs.core.next(arglist__9299));
return G__9295__delegate.call(this, x, y, more);
});
return G__9295;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9291.call(this,x);
case  2 :
return _SLASH___9292.call(this,x,y);
default:
return _SLASH___9293.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9293.cljs$lang$applyTo;
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
var _LT___9312 = (function (x){
return true;
});
var _LT___9313 = (function (x,y){
return (x < y);
});
var _LT___9314 = (function() { 
var G__9317__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9318 = y;
var G__9319 = cljs.core.first.call(null,more);
var G__9320 = cljs.core.next.call(null,more);
x = G__9318;
y = G__9319;
more = G__9320;
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
var G__9317 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9317__delegate.call(this, x, y, more);
};
G__9317.cljs$lang$maxFixedArity = 2;
G__9317.cljs$lang$applyTo = (function (arglist__9409){
var x = cljs.core.first(arglist__9409);
var y = cljs.core.first(cljs.core.next(arglist__9409));
var more = cljs.core.rest(cljs.core.next(arglist__9409));
return G__9317__delegate.call(this, x, y, more);
});
return G__9317;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9312.call(this,x);
case  2 :
return _LT___9313.call(this,x,y);
default:
return _LT___9314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9314.cljs$lang$applyTo;
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
var _LT__EQ___9413 = (function (x){
return true;
});
var _LT__EQ___9414 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9415 = (function() { 
var G__9417__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9418 = y;
var G__9419 = cljs.core.first.call(null,more);
var G__9420 = cljs.core.next.call(null,more);
x = G__9418;
y = G__9419;
more = G__9420;
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
var G__9417 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9417__delegate.call(this, x, y, more);
};
G__9417.cljs$lang$maxFixedArity = 2;
G__9417.cljs$lang$applyTo = (function (arglist__9421){
var x = cljs.core.first(arglist__9421);
var y = cljs.core.first(cljs.core.next(arglist__9421));
var more = cljs.core.rest(cljs.core.next(arglist__9421));
return G__9417__delegate.call(this, x, y, more);
});
return G__9417;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9413.call(this,x);
case  2 :
return _LT__EQ___9414.call(this,x,y);
default:
return _LT__EQ___9415.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9415.cljs$lang$applyTo;
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
var _GT___9430 = (function (x){
return true;
});
var _GT___9431 = (function (x,y){
return (x > y);
});
var _GT___9433 = (function() { 
var G__9435__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9436 = y;
var G__9437 = cljs.core.first.call(null,more);
var G__9438 = cljs.core.next.call(null,more);
x = G__9436;
y = G__9437;
more = G__9438;
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
var G__9435 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9435__delegate.call(this, x, y, more);
};
G__9435.cljs$lang$maxFixedArity = 2;
G__9435.cljs$lang$applyTo = (function (arglist__9439){
var x = cljs.core.first(arglist__9439);
var y = cljs.core.first(cljs.core.next(arglist__9439));
var more = cljs.core.rest(cljs.core.next(arglist__9439));
return G__9435__delegate.call(this, x, y, more);
});
return G__9435;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9430.call(this,x);
case  2 :
return _GT___9431.call(this,x,y);
default:
return _GT___9433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9433.cljs$lang$applyTo;
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
var _GT__EQ___9441 = (function (x){
return true;
});
var _GT__EQ___9442 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9443 = (function() { 
var G__9447__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9448 = y;
var G__9449 = cljs.core.first.call(null,more);
var G__9450 = cljs.core.next.call(null,more);
x = G__9448;
y = G__9449;
more = G__9450;
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
var G__9447 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9447__delegate.call(this, x, y, more);
};
G__9447.cljs$lang$maxFixedArity = 2;
G__9447.cljs$lang$applyTo = (function (arglist__9451){
var x = cljs.core.first(arglist__9451);
var y = cljs.core.first(cljs.core.next(arglist__9451));
var more = cljs.core.rest(cljs.core.next(arglist__9451));
return G__9447__delegate.call(this, x, y, more);
});
return G__9447;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9441.call(this,x);
case  2 :
return _GT__EQ___9442.call(this,x,y);
default:
return _GT__EQ___9443.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9443.cljs$lang$applyTo;
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
var max__9481 = (function (x){
return x;
});
var max__9483 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9484 = (function() { 
var G__9487__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9487 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9487__delegate.call(this, x, y, more);
};
G__9487.cljs$lang$maxFixedArity = 2;
G__9487.cljs$lang$applyTo = (function (arglist__9493){
var x = cljs.core.first(arglist__9493);
var y = cljs.core.first(cljs.core.next(arglist__9493));
var more = cljs.core.rest(cljs.core.next(arglist__9493));
return G__9487__delegate.call(this, x, y, more);
});
return G__9487;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9481.call(this,x);
case  2 :
return max__9483.call(this,x,y);
default:
return max__9484.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9484.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9495 = (function (x){
return x;
});
var min__9497 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9499 = (function() { 
var G__9503__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9503 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9503__delegate.call(this, x, y, more);
};
G__9503.cljs$lang$maxFixedArity = 2;
G__9503.cljs$lang$applyTo = (function (arglist__9507){
var x = cljs.core.first(arglist__9507);
var y = cljs.core.first(cljs.core.next(arglist__9507));
var more = cljs.core.rest(cljs.core.next(arglist__9507));
return G__9503__delegate.call(this, x, y, more);
});
return G__9503;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9495.call(this,x);
case  2 :
return min__9497.call(this,x,y);
default:
return min__9499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9499.cljs$lang$applyTo;
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
var rem__9512 = (n % d);

return cljs.core.fix.call(null,((n - rem__9512) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9519 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9519));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9526 = (function (){
return Math.random.call(null);
});
var rand__9527 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9526.call(this);
case  1 :
return rand__9527.call(this,n);
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
var _EQ__EQ___9634 = (function (x){
return true;
});
var _EQ__EQ___9635 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9636 = (function() { 
var G__9638__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9639 = y;
var G__9640 = cljs.core.first.call(null,more);
var G__9641 = cljs.core.next.call(null,more);
x = G__9639;
y = G__9640;
more = G__9641;
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
var G__9638 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9638__delegate.call(this, x, y, more);
};
G__9638.cljs$lang$maxFixedArity = 2;
G__9638.cljs$lang$applyTo = (function (arglist__9642){
var x = cljs.core.first(arglist__9642);
var y = cljs.core.first(cljs.core.next(arglist__9642));
var more = cljs.core.rest(cljs.core.next(arglist__9642));
return G__9638__delegate.call(this, x, y, more);
});
return G__9638;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9634.call(this,x);
case  2 :
return _EQ__EQ___9635.call(this,x,y);
default:
return _EQ__EQ___9636.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9636.cljs$lang$applyTo;
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
var n__9652 = n;
var xs__9653 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9654 = xs__9653;

if(cljs.core.truth_(and__3546__auto____9654))
{return (n__9652 > 0);
} else
{return and__3546__auto____9654;
}
})()))
{{
var G__9656 = (n__9652 - 1);
var G__9657 = cljs.core.next.call(null,xs__9653);
n__9652 = G__9656;
xs__9653 = G__9657;
continue;
}
} else
{return xs__9653;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9664 = null;
var G__9664__9665 = (function (coll,n){
var temp__3695__auto____9658 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9658))
{var xs__9659 = temp__3695__auto____9658;

return cljs.core.first.call(null,xs__9659);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9664__9666 = (function (coll,n,not_found){
var temp__3695__auto____9662 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9662))
{var xs__9663 = temp__3695__auto____9662;

return cljs.core.first.call(null,xs__9663);
} else
{return not_found;
}
});
G__9664 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9664__9665.call(this,coll,n);
case  3 :
return G__9664__9666.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9664;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9670 = (function (){
return "";
});
var str_STAR___9671 = (function (x){
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
var str_STAR___9672 = (function() { 
var G__9676__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9678 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9679 = cljs.core.next.call(null,more);
sb = G__9678;
more = G__9679;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9676 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9676__delegate.call(this, x, ys);
};
G__9676.cljs$lang$maxFixedArity = 1;
G__9676.cljs$lang$applyTo = (function (arglist__9683){
var x = cljs.core.first(arglist__9683);
var ys = cljs.core.rest(arglist__9683);
return G__9676__delegate.call(this, x, ys);
});
return G__9676;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9670.call(this);
case  1 :
return str_STAR___9671.call(this,x);
default:
return str_STAR___9672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9672.cljs$lang$applyTo;
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
var str__9710 = (function (){
return "";
});
var str__9711 = (function (x){
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
var str__9712 = (function() { 
var G__9714__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9714 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9714__delegate.call(this, x, ys);
};
G__9714.cljs$lang$maxFixedArity = 1;
G__9714.cljs$lang$applyTo = (function (arglist__9715){
var x = cljs.core.first(arglist__9715);
var ys = cljs.core.rest(arglist__9715);
return G__9714__delegate.call(this, x, ys);
});
return G__9714;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9710.call(this);
case  1 :
return str__9711.call(this,x);
default:
return str__9712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9712.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9716 = (function (s,start){
return s.substring(start);
});
var subs__9717 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9716.call(this,s,start);
case  3 :
return subs__9717.call(this,s,start,end);
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
var symbol__9724 = (function (name){
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
var symbol__9725 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9724.call(this,ns);
case  2 :
return symbol__9725.call(this,ns,name);
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
var keyword__9735 = (function (name){
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
var keyword__9736 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9735.call(this,ns);
case  2 :
return keyword__9736.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9738 = cljs.core.seq.call(null,x);
var ys__9739 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9738)))
{return cljs.core.nil_QMARK_.call(null,ys__9739);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9739)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9738),cljs.core.first.call(null,ys__9739))))
{{
var G__9747 = cljs.core.next.call(null,xs__9738);
var G__9748 = cljs.core.next.call(null,ys__9739);
xs__9738 = G__9747;
ys__9739 = G__9748;
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
return cljs.core.reduce.call(null,(function (p1__9750_SHARP_,p2__9751_SHARP_){
return cljs.core.hash_combine.call(null,p1__9750_SHARP_,cljs.core.hash.call(null,p2__9751_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9756__9758 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9756__9758))
{var G__9760__9763 = cljs.core.first.call(null,G__9756__9758);
var vec__9762__9764 = G__9760__9763;
var key_name__9801 = cljs.core.nth.call(null,vec__9762__9764,0,null);
var f__9802 = cljs.core.nth.call(null,vec__9762__9764,1,null);
var G__9756__9803 = G__9756__9758;

var G__9760__9807 = G__9760__9763;
var G__9756__9809 = G__9756__9803;

while(true){
var vec__9810__9811 = G__9760__9807;
var key_name__9812 = cljs.core.nth.call(null,vec__9810__9811,0,null);
var f__9813 = cljs.core.nth.call(null,vec__9810__9811,1,null);
var G__9756__9814 = G__9756__9809;

var str_name__9816 = cljs.core.name.call(null,key_name__9812);

obj[str_name__9816] = f__9813;
var temp__3698__auto____9819 = cljs.core.next.call(null,G__9756__9814);

if(cljs.core.truth_(temp__3698__auto____9819))
{var G__9756__9822 = temp__3698__auto____9819;

{
var G__9826 = cljs.core.first.call(null,G__9756__9822);
var G__9827 = G__9756__9822;
G__9760__9807 = G__9826;
G__9756__9809 = G__9827;
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
var this__9848 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9852 = this;
return (new cljs.core.List(this__9852.meta,o,coll,(this__9852.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9904 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9905 = this;
return this__9905.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9907 = this;
return this__9907.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9911 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9912 = this;
return this__9912.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9913 = this;
return this__9913.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9918 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9919 = this;
return (new cljs.core.List(meta,this__9919.first,this__9919.rest,this__9919.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9924 = this;
return this__9924.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9925 = this;
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
var this__9929 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9930 = this;
return (new cljs.core.List(this__9930.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9931 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9933 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9935 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9936 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10002 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10003 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10004 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10005 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10007 = this;
return this__10007.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10008 = this;
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
list.cljs$lang$applyTo = (function (arglist__10020){
var items = cljs.core.seq( arglist__10020 );;
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
var this__10021 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10022 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10023 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10025 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10025.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10027 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10030 = this;
return this__10030.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10032 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10032.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10032.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10035 = this;
return this__10035.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10037 = this;
return (new cljs.core.Cons(meta,this__10037.first,this__10037.rest));
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
var G__10063 = null;
var G__10063__10064 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10063__10065 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10063 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10063__10064.call(this,string,f);
case  3 :
return G__10063__10065.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10063;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10067 = null;
var G__10067__10068 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10067__10069 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10067 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10067__10068.call(this,string,k);
case  3 :
return G__10067__10069.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10067;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10071 = null;
var G__10071__10072 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10071__10073 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10071 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10071__10072.call(this,string,n);
case  3 :
return G__10071__10073.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10071;
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
var G__10079 = null;
var G__10079__10081 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10079__10082 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10079 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10079__10081.call(this,this$,coll);
case  3 :
return G__10079__10082.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10079;
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
var x__10084 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10084;
} else
{lazy_seq.x = x__10084.call(null);
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
var this__10094 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10095 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10096 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10099 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10099.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10100 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10101 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10102 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10103 = this;
return this__10103.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10105 = this;
return (new cljs.core.LazySeq(meta,this__10105.realized,this__10105.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10113 = cljs.core.array.call(null);

var s__10114 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10114)))
{ary__10113.push(cljs.core.first.call(null,s__10114));
{
var G__10116 = cljs.core.next.call(null,s__10114);
s__10114 = G__10116;
continue;
}
} else
{return ary__10113;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10117 = s;
var i__10118 = n;
var sum__10119 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10120 = (i__10118 > 0);

if(cljs.core.truth_(and__3546__auto____10120))
{return cljs.core.seq.call(null,s__10117);
} else
{return and__3546__auto____10120;
}
})()))
{{
var G__10121 = cljs.core.next.call(null,s__10117);
var G__10122 = (i__10118 - 1);
var G__10123 = (sum__10119 + 1);
s__10117 = G__10121;
i__10118 = G__10122;
sum__10119 = G__10123;
continue;
}
} else
{return sum__10119;
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
var concat__10146 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10147 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10148 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10134 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10134))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10134),concat.call(null,cljs.core.rest.call(null,s__10134),y));
} else
{return y;
}
})));
});
var concat__10149 = (function() { 
var G__10158__delegate = function (x,y,zs){
var cat__10141 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10140 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10140))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10140),cat.call(null,cljs.core.rest.call(null,xys__10140),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10141.call(null,concat.call(null,x,y),zs);
};
var G__10158 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10158__delegate.call(this, x, y, zs);
};
G__10158.cljs$lang$maxFixedArity = 2;
G__10158.cljs$lang$applyTo = (function (arglist__10167){
var x = cljs.core.first(arglist__10167);
var y = cljs.core.first(cljs.core.next(arglist__10167));
var zs = cljs.core.rest(cljs.core.next(arglist__10167));
return G__10158__delegate.call(this, x, y, zs);
});
return G__10158;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10146.call(this);
case  1 :
return concat__10147.call(this,x);
case  2 :
return concat__10148.call(this,x,y);
default:
return concat__10149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10149.cljs$lang$applyTo;
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
var list_STAR___10195 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10196 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10197 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10198 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10199 = (function() { 
var G__10202__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10202 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10202__delegate.call(this, a, b, c, d, more);
};
G__10202.cljs$lang$maxFixedArity = 4;
G__10202.cljs$lang$applyTo = (function (arglist__10203){
var a = cljs.core.first(arglist__10203);
var b = cljs.core.first(cljs.core.next(arglist__10203));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10203)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10203))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10203))));
return G__10202__delegate.call(this, a, b, c, d, more);
});
return G__10202;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10195.call(this,a);
case  2 :
return list_STAR___10196.call(this,a,b);
case  3 :
return list_STAR___10197.call(this,a,b,c);
case  4 :
return list_STAR___10198.call(this,a,b,c,d);
default:
return list_STAR___10199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10199.cljs$lang$applyTo;
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
var apply__10228 = (function (f,args){
var fixed_arity__10205 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10205 + 1)) <= fixed_arity__10205)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10229 = (function (f,x,args){
var arglist__10206 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10207 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10206,fixed_arity__10207) <= fixed_arity__10207)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10206));
} else
{return f.cljs$lang$applyTo(arglist__10206);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10206));
}
});
var apply__10230 = (function (f,x,y,args){
var arglist__10208 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10209 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10208,fixed_arity__10209) <= fixed_arity__10209)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10208));
} else
{return f.cljs$lang$applyTo(arglist__10208);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10208));
}
});
var apply__10231 = (function (f,x,y,z,args){
var arglist__10217 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10218 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10217,fixed_arity__10218) <= fixed_arity__10218)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10217));
} else
{return f.cljs$lang$applyTo(arglist__10217);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10217));
}
});
var apply__10232 = (function() { 
var G__10238__delegate = function (f,a,b,c,d,args){
var arglist__10220 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10221 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10220,fixed_arity__10221) <= fixed_arity__10221)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10220));
} else
{return f.cljs$lang$applyTo(arglist__10220);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10220));
}
};
var G__10238 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10238__delegate.call(this, f, a, b, c, d, args);
};
G__10238.cljs$lang$maxFixedArity = 5;
G__10238.cljs$lang$applyTo = (function (arglist__10244){
var f = cljs.core.first(arglist__10244);
var a = cljs.core.first(cljs.core.next(arglist__10244));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10244)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10244))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10244)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10244)))));
return G__10238__delegate.call(this, f, a, b, c, d, args);
});
return G__10238;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10228.call(this,f,a);
case  3 :
return apply__10229.call(this,f,a,b);
case  4 :
return apply__10230.call(this,f,a,b,c);
case  5 :
return apply__10231.call(this,f,a,b,c,d);
default:
return apply__10232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10232.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10312){
var obj = cljs.core.first(arglist__10312);
var f = cljs.core.first(cljs.core.next(arglist__10312));
var args = cljs.core.rest(cljs.core.next(arglist__10312));
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
var not_EQ___10323 = (function (x){
return false;
});
var not_EQ___10324 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10325 = (function() { 
var G__10328__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10328 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10328__delegate.call(this, x, y, more);
};
G__10328.cljs$lang$maxFixedArity = 2;
G__10328.cljs$lang$applyTo = (function (arglist__10329){
var x = cljs.core.first(arglist__10329);
var y = cljs.core.first(cljs.core.next(arglist__10329));
var more = cljs.core.rest(cljs.core.next(arglist__10329));
return G__10328__delegate.call(this, x, y, more);
});
return G__10328;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10323.call(this,x);
case  2 :
return not_EQ___10324.call(this,x,y);
default:
return not_EQ___10325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10325.cljs$lang$applyTo;
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
var G__10341 = pred;
var G__10342 = cljs.core.next.call(null,coll);
pred = G__10341;
coll = G__10342;
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
{var or__3548__auto____10352 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10352))
{return or__3548__auto____10352;
} else
{{
var G__10354 = pred;
var G__10355 = cljs.core.next.call(null,coll);
pred = G__10354;
coll = G__10355;
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
var G__10373 = null;
var G__10373__10374 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10373__10375 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10373__10376 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10373__10377 = (function() { 
var G__10379__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10379 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10379__delegate.call(this, x, y, zs);
};
G__10379.cljs$lang$maxFixedArity = 2;
G__10379.cljs$lang$applyTo = (function (arglist__10380){
var x = cljs.core.first(arglist__10380);
var y = cljs.core.first(cljs.core.next(arglist__10380));
var zs = cljs.core.rest(cljs.core.next(arglist__10380));
return G__10379__delegate.call(this, x, y, zs);
});
return G__10379;
})()
;
G__10373 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10373__10374.call(this);
case  1 :
return G__10373__10375.call(this,x);
case  2 :
return G__10373__10376.call(this,x,y);
default:
return G__10373__10377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10373.cljs$lang$maxFixedArity = 2;
G__10373.cljs$lang$applyTo = G__10373__10377.cljs$lang$applyTo;
return G__10373;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10396__delegate = function (args){
return x;
};
var G__10396 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10396__delegate.call(this, args);
};
G__10396.cljs$lang$maxFixedArity = 0;
G__10396.cljs$lang$applyTo = (function (arglist__10398){
var args = cljs.core.seq( arglist__10398 );;
return G__10396__delegate.call(this, args);
});
return G__10396;
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
var comp__10416 = (function (){
return cljs.core.identity;
});
var comp__10417 = (function (f){
return f;
});
var comp__10418 = (function (f,g){
return (function() {
var G__10430 = null;
var G__10430__10431 = (function (){
return f.call(null,g.call(null));
});
var G__10430__10432 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10430__10433 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10430__10434 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10430__10435 = (function() { 
var G__10442__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10442 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10442__delegate.call(this, x, y, z, args);
};
G__10442.cljs$lang$maxFixedArity = 3;
G__10442.cljs$lang$applyTo = (function (arglist__10444){
var x = cljs.core.first(arglist__10444);
var y = cljs.core.first(cljs.core.next(arglist__10444));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10444)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10444)));
return G__10442__delegate.call(this, x, y, z, args);
});
return G__10442;
})()
;
G__10430 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10430__10431.call(this);
case  1 :
return G__10430__10432.call(this,x);
case  2 :
return G__10430__10433.call(this,x,y);
case  3 :
return G__10430__10434.call(this,x,y,z);
default:
return G__10430__10435.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10430.cljs$lang$maxFixedArity = 3;
G__10430.cljs$lang$applyTo = G__10430__10435.cljs$lang$applyTo;
return G__10430;
})()
});
var comp__10419 = (function (f,g,h){
return (function() {
var G__10445 = null;
var G__10445__10446 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10445__10447 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10445__10448 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10445__10449 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10445__10450 = (function() { 
var G__10453__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10453 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10453__delegate.call(this, x, y, z, args);
};
G__10453.cljs$lang$maxFixedArity = 3;
G__10453.cljs$lang$applyTo = (function (arglist__10454){
var x = cljs.core.first(arglist__10454);
var y = cljs.core.first(cljs.core.next(arglist__10454));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10454)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10454)));
return G__10453__delegate.call(this, x, y, z, args);
});
return G__10453;
})()
;
G__10445 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10445__10446.call(this);
case  1 :
return G__10445__10447.call(this,x);
case  2 :
return G__10445__10448.call(this,x,y);
case  3 :
return G__10445__10449.call(this,x,y,z);
default:
return G__10445__10450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10445.cljs$lang$maxFixedArity = 3;
G__10445.cljs$lang$applyTo = G__10445__10450.cljs$lang$applyTo;
return G__10445;
})()
});
var comp__10420 = (function() { 
var G__10457__delegate = function (f1,f2,f3,fs){
var fs__10409 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10458__delegate = function (args){
var ret__10412 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10409),args);
var fs__10415 = cljs.core.next.call(null,fs__10409);

while(true){
if(cljs.core.truth_(fs__10415))
{{
var G__10459 = cljs.core.first.call(null,fs__10415).call(null,ret__10412);
var G__10460 = cljs.core.next.call(null,fs__10415);
ret__10412 = G__10459;
fs__10415 = G__10460;
continue;
}
} else
{return ret__10412;
}
break;
}
};
var G__10458 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10458__delegate.call(this, args);
};
G__10458.cljs$lang$maxFixedArity = 0;
G__10458.cljs$lang$applyTo = (function (arglist__10462){
var args = cljs.core.seq( arglist__10462 );;
return G__10458__delegate.call(this, args);
});
return G__10458;
})()
;
};
var G__10457 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10457__delegate.call(this, f1, f2, f3, fs);
};
G__10457.cljs$lang$maxFixedArity = 3;
G__10457.cljs$lang$applyTo = (function (arglist__10463){
var f1 = cljs.core.first(arglist__10463);
var f2 = cljs.core.first(cljs.core.next(arglist__10463));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10463)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10463)));
return G__10457__delegate.call(this, f1, f2, f3, fs);
});
return G__10457;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10416.call(this);
case  1 :
return comp__10417.call(this,f1);
case  2 :
return comp__10418.call(this,f1,f2);
case  3 :
return comp__10419.call(this,f1,f2,f3);
default:
return comp__10420.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10420.cljs$lang$applyTo;
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
var partial__10472 = (function (f,arg1){
return (function() { 
var G__10477__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10477 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10477__delegate.call(this, args);
};
G__10477.cljs$lang$maxFixedArity = 0;
G__10477.cljs$lang$applyTo = (function (arglist__10478){
var args = cljs.core.seq( arglist__10478 );;
return G__10477__delegate.call(this, args);
});
return G__10477;
})()
;
});
var partial__10473 = (function (f,arg1,arg2){
return (function() { 
var G__10483__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10483 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10483__delegate.call(this, args);
};
G__10483.cljs$lang$maxFixedArity = 0;
G__10483.cljs$lang$applyTo = (function (arglist__10485){
var args = cljs.core.seq( arglist__10485 );;
return G__10483__delegate.call(this, args);
});
return G__10483;
})()
;
});
var partial__10474 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10510__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10510 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10510__delegate.call(this, args);
};
G__10510.cljs$lang$maxFixedArity = 0;
G__10510.cljs$lang$applyTo = (function (arglist__10552){
var args = cljs.core.seq( arglist__10552 );;
return G__10510__delegate.call(this, args);
});
return G__10510;
})()
;
});
var partial__10475 = (function() { 
var G__10553__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10556__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10556 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10556__delegate.call(this, args);
};
G__10556.cljs$lang$maxFixedArity = 0;
G__10556.cljs$lang$applyTo = (function (arglist__10559){
var args = cljs.core.seq( arglist__10559 );;
return G__10556__delegate.call(this, args);
});
return G__10556;
})()
;
};
var G__10553 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10553__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10553.cljs$lang$maxFixedArity = 4;
G__10553.cljs$lang$applyTo = (function (arglist__10560){
var f = cljs.core.first(arglist__10560);
var arg1 = cljs.core.first(cljs.core.next(arglist__10560));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10560)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10560))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10560))));
return G__10553__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10553;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10472.call(this,f,arg1);
case  3 :
return partial__10473.call(this,f,arg1,arg2);
case  4 :
return partial__10474.call(this,f,arg1,arg2,arg3);
default:
return partial__10475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10475.cljs$lang$applyTo;
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
var fnil__10607 = (function (f,x){
return (function() {
var G__10615 = null;
var G__10615__10619 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10615__10620 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10615__10622 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10615__10623 = (function() { 
var G__10633__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10633 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10633__delegate.call(this, a, b, c, ds);
};
G__10633.cljs$lang$maxFixedArity = 3;
G__10633.cljs$lang$applyTo = (function (arglist__10635){
var a = cljs.core.first(arglist__10635);
var b = cljs.core.first(cljs.core.next(arglist__10635));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10635)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10635)));
return G__10633__delegate.call(this, a, b, c, ds);
});
return G__10633;
})()
;
G__10615 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10615__10619.call(this,a);
case  2 :
return G__10615__10620.call(this,a,b);
case  3 :
return G__10615__10622.call(this,a,b,c);
default:
return G__10615__10623.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10615.cljs$lang$maxFixedArity = 3;
G__10615.cljs$lang$applyTo = G__10615__10623.cljs$lang$applyTo;
return G__10615;
})()
});
var fnil__10608 = (function (f,x,y){
return (function() {
var G__10644 = null;
var G__10644__10645 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10644__10646 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10644__10647 = (function() { 
var G__10652__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10652 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10652__delegate.call(this, a, b, c, ds);
};
G__10652.cljs$lang$maxFixedArity = 3;
G__10652.cljs$lang$applyTo = (function (arglist__10657){
var a = cljs.core.first(arglist__10657);
var b = cljs.core.first(cljs.core.next(arglist__10657));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10657)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10657)));
return G__10652__delegate.call(this, a, b, c, ds);
});
return G__10652;
})()
;
G__10644 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10644__10645.call(this,a,b);
case  3 :
return G__10644__10646.call(this,a,b,c);
default:
return G__10644__10647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10644.cljs$lang$maxFixedArity = 3;
G__10644.cljs$lang$applyTo = G__10644__10647.cljs$lang$applyTo;
return G__10644;
})()
});
var fnil__10609 = (function (f,x,y,z){
return (function() {
var G__10660 = null;
var G__10660__10662 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10660__10663 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10660__10664 = (function() { 
var G__10697__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10697 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10697__delegate.call(this, a, b, c, ds);
};
G__10697.cljs$lang$maxFixedArity = 3;
G__10697.cljs$lang$applyTo = (function (arglist__10703){
var a = cljs.core.first(arglist__10703);
var b = cljs.core.first(cljs.core.next(arglist__10703));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10703)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10703)));
return G__10697__delegate.call(this, a, b, c, ds);
});
return G__10697;
})()
;
G__10660 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10660__10662.call(this,a,b);
case  3 :
return G__10660__10663.call(this,a,b,c);
default:
return G__10660__10664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10660.cljs$lang$maxFixedArity = 3;
G__10660.cljs$lang$applyTo = G__10660__10664.cljs$lang$applyTo;
return G__10660;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10607.call(this,f,x);
case  3 :
return fnil__10608.call(this,f,x,y);
case  4 :
return fnil__10609.call(this,f,x,y,z);
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
var mapi__10721 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10712 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10712))
{var s__10720 = temp__3698__auto____10712;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10720)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10720)));
} else
{return null;
}
})));
});

return mapi__10721.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10829 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10829))
{var s__10830 = temp__3698__auto____10829;

var x__10831 = f.call(null,cljs.core.first.call(null,s__10830));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10831)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10830));
} else
{return cljs.core.cons.call(null,x__10831,keep.call(null,f,cljs.core.rest.call(null,s__10830)));
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
var keepi__10871 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10862 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10862))
{var s__10864 = temp__3698__auto____10862;

var x__10866 = f.call(null,idx,cljs.core.first.call(null,s__10864));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10866)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10864));
} else
{return cljs.core.cons.call(null,x__10866,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10864)));
}
} else
{return null;
}
})));
});

return keepi__10871.call(null,0,coll);
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
var every_pred__11033 = (function (p){
return (function() {
var ep1 = null;
var ep1__11045 = (function (){
return true;
});
var ep1__11046 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11047 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10894 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10894))
{return p.call(null,y);
} else
{return and__3546__auto____10894;
}
})());
});
var ep1__11048 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10899 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10899))
{var and__3546__auto____10902 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10902))
{return p.call(null,z);
} else
{return and__3546__auto____10902;
}
} else
{return and__3546__auto____10899;
}
})());
});
var ep1__11049 = (function() { 
var G__11056__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10904 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10904))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10904;
}
})());
};
var G__11056 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11056__delegate.call(this, x, y, z, args);
};
G__11056.cljs$lang$maxFixedArity = 3;
G__11056.cljs$lang$applyTo = (function (arglist__11058){
var x = cljs.core.first(arglist__11058);
var y = cljs.core.first(cljs.core.next(arglist__11058));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11058)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11058)));
return G__11056__delegate.call(this, x, y, z, args);
});
return G__11056;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11045.call(this);
case  1 :
return ep1__11046.call(this,x);
case  2 :
return ep1__11047.call(this,x,y);
case  3 :
return ep1__11048.call(this,x,y,z);
default:
return ep1__11049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11049.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11034 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11068 = (function (){
return true;
});
var ep2__11069 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10906 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10906))
{return p2.call(null,x);
} else
{return and__3546__auto____10906;
}
})());
});
var ep2__11070 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10908 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10908))
{var and__3546__auto____10910 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10910))
{var and__3546__auto____10912 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10912))
{return p2.call(null,y);
} else
{return and__3546__auto____10912;
}
} else
{return and__3546__auto____10910;
}
} else
{return and__3546__auto____10908;
}
})());
});
var ep2__11071 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10914 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10914))
{var and__3546__auto____10916 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10916))
{var and__3546__auto____10918 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10918))
{var and__3546__auto____10920 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10920))
{var and__3546__auto____10926 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10926))
{return p2.call(null,z);
} else
{return and__3546__auto____10926;
}
} else
{return and__3546__auto____10920;
}
} else
{return and__3546__auto____10918;
}
} else
{return and__3546__auto____10916;
}
} else
{return and__3546__auto____10914;
}
})());
});
var ep2__11072 = (function() { 
var G__11108__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10937 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10937))
{return cljs.core.every_QMARK_.call(null,(function (p1__10844_SHARP_){
var and__3546__auto____10942 = p1.call(null,p1__10844_SHARP_);

if(cljs.core.truth_(and__3546__auto____10942))
{return p2.call(null,p1__10844_SHARP_);
} else
{return and__3546__auto____10942;
}
}),args);
} else
{return and__3546__auto____10937;
}
})());
};
var G__11108 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11108__delegate.call(this, x, y, z, args);
};
G__11108.cljs$lang$maxFixedArity = 3;
G__11108.cljs$lang$applyTo = (function (arglist__11209){
var x = cljs.core.first(arglist__11209);
var y = cljs.core.first(cljs.core.next(arglist__11209));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11209)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11209)));
return G__11108__delegate.call(this, x, y, z, args);
});
return G__11108;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11068.call(this);
case  1 :
return ep2__11069.call(this,x);
case  2 :
return ep2__11070.call(this,x,y);
case  3 :
return ep2__11071.call(this,x,y,z);
default:
return ep2__11072.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11072.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11036 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11215 = (function (){
return true;
});
var ep3__11216 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10946 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10946))
{var and__3546__auto____10950 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10950))
{return p3.call(null,x);
} else
{return and__3546__auto____10950;
}
} else
{return and__3546__auto____10946;
}
})());
});
var ep3__11217 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10954 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10954))
{var and__3546__auto____10957 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10957))
{var and__3546__auto____10963 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10963))
{var and__3546__auto____10966 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10966))
{var and__3546__auto____10968 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10968))
{return p3.call(null,y);
} else
{return and__3546__auto____10968;
}
} else
{return and__3546__auto____10966;
}
} else
{return and__3546__auto____10963;
}
} else
{return and__3546__auto____10957;
}
} else
{return and__3546__auto____10954;
}
})());
});
var ep3__11218 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10972 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10972))
{var and__3546__auto____10975 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10975))
{var and__3546__auto____10978 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10978))
{var and__3546__auto____10982 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10982))
{var and__3546__auto____10984 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10984))
{var and__3546__auto____10987 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10987))
{var and__3546__auto____10990 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10990))
{var and__3546__auto____10993 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10993))
{return p3.call(null,z);
} else
{return and__3546__auto____10993;
}
} else
{return and__3546__auto____10990;
}
} else
{return and__3546__auto____10987;
}
} else
{return and__3546__auto____10984;
}
} else
{return and__3546__auto____10982;
}
} else
{return and__3546__auto____10978;
}
} else
{return and__3546__auto____10975;
}
} else
{return and__3546__auto____10972;
}
})());
});
var ep3__11219 = (function() { 
var G__11244__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10997 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10997))
{return cljs.core.every_QMARK_.call(null,(function (p1__10849_SHARP_){
var and__3546__auto____11001 = p1.call(null,p1__10849_SHARP_);

if(cljs.core.truth_(and__3546__auto____11001))
{var and__3546__auto____11003 = p2.call(null,p1__10849_SHARP_);

if(cljs.core.truth_(and__3546__auto____11003))
{return p3.call(null,p1__10849_SHARP_);
} else
{return and__3546__auto____11003;
}
} else
{return and__3546__auto____11001;
}
}),args);
} else
{return and__3546__auto____10997;
}
})());
};
var G__11244 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11244__delegate.call(this, x, y, z, args);
};
G__11244.cljs$lang$maxFixedArity = 3;
G__11244.cljs$lang$applyTo = (function (arglist__11249){
var x = cljs.core.first(arglist__11249);
var y = cljs.core.first(cljs.core.next(arglist__11249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11249)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11249)));
return G__11244__delegate.call(this, x, y, z, args);
});
return G__11244;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11215.call(this);
case  1 :
return ep3__11216.call(this,x);
case  2 :
return ep3__11217.call(this,x,y);
case  3 :
return ep3__11218.call(this,x,y,z);
default:
return ep3__11219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11219.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11037 = (function() { 
var G__11252__delegate = function (p1,p2,p3,ps){
var ps__11006 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11253 = (function (){
return true;
});
var epn__11254 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10850_SHARP_){
return p1__10850_SHARP_.call(null,x);
}),ps__11006);
});
var epn__11255 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10852_SHARP_){
var and__3546__auto____11011 = p1__10852_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11011))
{return p1__10852_SHARP_.call(null,y);
} else
{return and__3546__auto____11011;
}
}),ps__11006);
});
var epn__11256 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10853_SHARP_){
var and__3546__auto____11017 = p1__10853_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11017))
{var and__3546__auto____11019 = p1__10853_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11019))
{return p1__10853_SHARP_.call(null,z);
} else
{return and__3546__auto____11019;
}
} else
{return and__3546__auto____11017;
}
}),ps__11006);
});
var epn__11257 = (function() { 
var G__11268__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11022 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11022))
{return cljs.core.every_QMARK_.call(null,(function (p1__10854_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10854_SHARP_,args);
}),ps__11006);
} else
{return and__3546__auto____11022;
}
})());
};
var G__11268 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11268__delegate.call(this, x, y, z, args);
};
G__11268.cljs$lang$maxFixedArity = 3;
G__11268.cljs$lang$applyTo = (function (arglist__11282){
var x = cljs.core.first(arglist__11282);
var y = cljs.core.first(cljs.core.next(arglist__11282));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11282)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11282)));
return G__11268__delegate.call(this, x, y, z, args);
});
return G__11268;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11253.call(this);
case  1 :
return epn__11254.call(this,x);
case  2 :
return epn__11255.call(this,x,y);
case  3 :
return epn__11256.call(this,x,y,z);
default:
return epn__11257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11257.cljs$lang$applyTo;
return epn;
})()
};
var G__11252 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11252__delegate.call(this, p1, p2, p3, ps);
};
G__11252.cljs$lang$maxFixedArity = 3;
G__11252.cljs$lang$applyTo = (function (arglist__11286){
var p1 = cljs.core.first(arglist__11286);
var p2 = cljs.core.first(cljs.core.next(arglist__11286));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11286)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11286)));
return G__11252__delegate.call(this, p1, p2, p3, ps);
});
return G__11252;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11033.call(this,p1);
case  2 :
return every_pred__11034.call(this,p1,p2);
case  3 :
return every_pred__11036.call(this,p1,p2,p3);
default:
return every_pred__11037.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11037.cljs$lang$applyTo;
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
var some_fn__11407 = (function (p){
return (function() {
var sp1 = null;
var sp1__11413 = (function (){
return null;
});
var sp1__11414 = (function (x){
return p.call(null,x);
});
var sp1__11415 = (function (x,y){
var or__3548__auto____11305 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11305))
{return or__3548__auto____11305;
} else
{return p.call(null,y);
}
});
var sp1__11416 = (function (x,y,z){
var or__3548__auto____11307 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11307))
{return or__3548__auto____11307;
} else
{var or__3548__auto____11308 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{return p.call(null,z);
}
}
});
var sp1__11417 = (function() { 
var G__11422__delegate = function (x,y,z,args){
var or__3548__auto____11310 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11310))
{return or__3548__auto____11310;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11422 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11422__delegate.call(this, x, y, z, args);
};
G__11422.cljs$lang$maxFixedArity = 3;
G__11422.cljs$lang$applyTo = (function (arglist__11445){
var x = cljs.core.first(arglist__11445);
var y = cljs.core.first(cljs.core.next(arglist__11445));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11445)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11445)));
return G__11422__delegate.call(this, x, y, z, args);
});
return G__11422;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11413.call(this);
case  1 :
return sp1__11414.call(this,x);
case  2 :
return sp1__11415.call(this,x,y);
case  3 :
return sp1__11416.call(this,x,y,z);
default:
return sp1__11417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11417.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11408 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11446 = (function (){
return null;
});
var sp2__11447 = (function (x){
var or__3548__auto____11312 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11312))
{return or__3548__auto____11312;
} else
{return p2.call(null,x);
}
});
var sp2__11448 = (function (x,y){
var or__3548__auto____11314 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11314))
{return or__3548__auto____11314;
} else
{var or__3548__auto____11316 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11316))
{return or__3548__auto____11316;
} else
{var or__3548__auto____11317 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11317))
{return or__3548__auto____11317;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11449 = (function (x,y,z){
var or__3548__auto____11320 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11320))
{return or__3548__auto____11320;
} else
{var or__3548__auto____11321 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11321))
{return or__3548__auto____11321;
} else
{var or__3548__auto____11323 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11323))
{return or__3548__auto____11323;
} else
{var or__3548__auto____11325 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11326 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11450 = (function() { 
var G__11463__delegate = function (x,y,z,args){
var or__3548__auto____11333 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{return cljs.core.some.call(null,(function (p1__10875_SHARP_){
var or__3548__auto____11334 = p1.call(null,p1__10875_SHARP_);

if(cljs.core.truth_(or__3548__auto____11334))
{return or__3548__auto____11334;
} else
{return p2.call(null,p1__10875_SHARP_);
}
}),args);
}
};
var G__11463 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11463__delegate.call(this, x, y, z, args);
};
G__11463.cljs$lang$maxFixedArity = 3;
G__11463.cljs$lang$applyTo = (function (arglist__11468){
var x = cljs.core.first(arglist__11468);
var y = cljs.core.first(cljs.core.next(arglist__11468));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11468)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11468)));
return G__11463__delegate.call(this, x, y, z, args);
});
return G__11463;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11446.call(this);
case  1 :
return sp2__11447.call(this,x);
case  2 :
return sp2__11448.call(this,x,y);
case  3 :
return sp2__11449.call(this,x,y,z);
default:
return sp2__11450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11450.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11409 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11475 = (function (){
return null;
});
var sp3__11476 = (function (x){
var or__3548__auto____11346 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{var or__3548__auto____11347 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11347))
{return or__3548__auto____11347;
} else
{return p3.call(null,x);
}
}
});
var sp3__11477 = (function (x,y){
var or__3548__auto____11348 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11348))
{return or__3548__auto____11348;
} else
{var or__3548__auto____11349 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11349))
{return or__3548__auto____11349;
} else
{var or__3548__auto____11350 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11350))
{return or__3548__auto____11350;
} else
{var or__3548__auto____11351 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11351))
{return or__3548__auto____11351;
} else
{var or__3548__auto____11353 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11353))
{return or__3548__auto____11353;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11478 = (function (x,y,z){
var or__3548__auto____11354 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11354))
{return or__3548__auto____11354;
} else
{var or__3548__auto____11356 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11356))
{return or__3548__auto____11356;
} else
{var or__3548__auto____11357 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11357))
{return or__3548__auto____11357;
} else
{var or__3548__auto____11359 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11359))
{return or__3548__auto____11359;
} else
{var or__3548__auto____11361 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11361))
{return or__3548__auto____11361;
} else
{var or__3548__auto____11368 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11368))
{return or__3548__auto____11368;
} else
{var or__3548__auto____11370 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11370))
{return or__3548__auto____11370;
} else
{var or__3548__auto____11372 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11372))
{return or__3548__auto____11372;
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
var sp3__11479 = (function() { 
var G__11509__delegate = function (x,y,z,args){
var or__3548__auto____11375 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11375))
{return or__3548__auto____11375;
} else
{return cljs.core.some.call(null,(function (p1__10879_SHARP_){
var or__3548__auto____11376 = p1.call(null,p1__10879_SHARP_);

if(cljs.core.truth_(or__3548__auto____11376))
{return or__3548__auto____11376;
} else
{var or__3548__auto____11378 = p2.call(null,p1__10879_SHARP_);

if(cljs.core.truth_(or__3548__auto____11378))
{return or__3548__auto____11378;
} else
{return p3.call(null,p1__10879_SHARP_);
}
}
}),args);
}
};
var G__11509 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11509__delegate.call(this, x, y, z, args);
};
G__11509.cljs$lang$maxFixedArity = 3;
G__11509.cljs$lang$applyTo = (function (arglist__11517){
var x = cljs.core.first(arglist__11517);
var y = cljs.core.first(cljs.core.next(arglist__11517));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11517)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11517)));
return G__11509__delegate.call(this, x, y, z, args);
});
return G__11509;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11475.call(this);
case  1 :
return sp3__11476.call(this,x);
case  2 :
return sp3__11477.call(this,x,y);
case  3 :
return sp3__11478.call(this,x,y,z);
default:
return sp3__11479.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11479.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11410 = (function() { 
var G__11523__delegate = function (p1,p2,p3,ps){
var ps__11385 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11526 = (function (){
return null;
});
var spn__11527 = (function (x){
return cljs.core.some.call(null,(function (p1__10884_SHARP_){
return p1__10884_SHARP_.call(null,x);
}),ps__11385);
});
var spn__11528 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10887_SHARP_){
var or__3548__auto____11387 = p1__10887_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11387))
{return or__3548__auto____11387;
} else
{return p1__10887_SHARP_.call(null,y);
}
}),ps__11385);
});
var spn__11529 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10889_SHARP_){
var or__3548__auto____11389 = p1__10889_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11389))
{return or__3548__auto____11389;
} else
{var or__3548__auto____11391 = p1__10889_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11391))
{return or__3548__auto____11391;
} else
{return p1__10889_SHARP_.call(null,z);
}
}
}),ps__11385);
});
var spn__11531 = (function() { 
var G__11542__delegate = function (x,y,z,args){
var or__3548__auto____11400 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11400))
{return or__3548__auto____11400;
} else
{return cljs.core.some.call(null,(function (p1__10892_SHARP_){
return cljs.core.some.call(null,p1__10892_SHARP_,args);
}),ps__11385);
}
};
var G__11542 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11542__delegate.call(this, x, y, z, args);
};
G__11542.cljs$lang$maxFixedArity = 3;
G__11542.cljs$lang$applyTo = (function (arglist__11544){
var x = cljs.core.first(arglist__11544);
var y = cljs.core.first(cljs.core.next(arglist__11544));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11544)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11544)));
return G__11542__delegate.call(this, x, y, z, args);
});
return G__11542;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11526.call(this);
case  1 :
return spn__11527.call(this,x);
case  2 :
return spn__11528.call(this,x,y);
case  3 :
return spn__11529.call(this,x,y,z);
default:
return spn__11531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11531.cljs$lang$applyTo;
return spn;
})()
};
var G__11523 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11523__delegate.call(this, p1, p2, p3, ps);
};
G__11523.cljs$lang$maxFixedArity = 3;
G__11523.cljs$lang$applyTo = (function (arglist__11545){
var p1 = cljs.core.first(arglist__11545);
var p2 = cljs.core.first(cljs.core.next(arglist__11545));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11545)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11545)));
return G__11523__delegate.call(this, p1, p2, p3, ps);
});
return G__11523;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11407.call(this,p1);
case  2 :
return some_fn__11408.call(this,p1,p2);
case  3 :
return some_fn__11409.call(this,p1,p2,p3);
default:
return some_fn__11410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11410.cljs$lang$applyTo;
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
var map__11720 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11548 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11548))
{var s__11549 = temp__3698__auto____11548;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11549)),map.call(null,f,cljs.core.rest.call(null,s__11549)));
} else
{return null;
}
})));
});
var map__11721 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11551 = cljs.core.seq.call(null,c1);
var s2__11552 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11619 = s1__11551;

if(cljs.core.truth_(and__3546__auto____11619))
{return s2__11552;
} else
{return and__3546__auto____11619;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11551),cljs.core.first.call(null,s2__11552)),map.call(null,f,cljs.core.rest.call(null,s1__11551),cljs.core.rest.call(null,s2__11552)));
} else
{return null;
}
})));
});
var map__11722 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11696 = cljs.core.seq.call(null,c1);
var s2__11697 = cljs.core.seq.call(null,c2);
var s3__11699 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11701 = s1__11696;

if(cljs.core.truth_(and__3546__auto____11701))
{var and__3546__auto____11703 = s2__11697;

if(cljs.core.truth_(and__3546__auto____11703))
{return s3__11699;
} else
{return and__3546__auto____11703;
}
} else
{return and__3546__auto____11701;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11696),cljs.core.first.call(null,s2__11697),cljs.core.first.call(null,s3__11699)),map.call(null,f,cljs.core.rest.call(null,s1__11696),cljs.core.rest.call(null,s2__11697),cljs.core.rest.call(null,s3__11699)));
} else
{return null;
}
})));
});
var map__11723 = (function() { 
var G__11760__delegate = function (f,c1,c2,c3,colls){
var step__11716 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11713 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11713)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11713),step.call(null,map.call(null,cljs.core.rest,ss__11713)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11295_SHARP_){
return cljs.core.apply.call(null,f,p1__11295_SHARP_);
}),step__11716.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11760 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11760__delegate.call(this, f, c1, c2, c3, colls);
};
G__11760.cljs$lang$maxFixedArity = 4;
G__11760.cljs$lang$applyTo = (function (arglist__11763){
var f = cljs.core.first(arglist__11763);
var c1 = cljs.core.first(cljs.core.next(arglist__11763));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11763)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11763))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11763))));
return G__11760__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11760;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11720.call(this,f,c1);
case  3 :
return map__11721.call(this,f,c1,c2);
case  4 :
return map__11722.call(this,f,c1,c2,c3);
default:
return map__11723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11723.cljs$lang$applyTo;
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
{var temp__3698__auto____11771 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11771))
{var s__11773 = temp__3698__auto____11771;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11773),take.call(null,(n - 1),cljs.core.rest.call(null,s__11773)));
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
var step__11787 = (function (n,coll){
while(true){
var s__11782 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11784 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11784))
{return s__11782;
} else
{return and__3546__auto____11784;
}
})()))
{{
var G__11801 = (n - 1);
var G__11802 = cljs.core.rest.call(null,s__11782);
n = G__11801;
coll = G__11802;
continue;
}
} else
{return s__11782;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11787.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11807 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11808 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11807.call(this,n);
case  2 :
return drop_last__11808.call(this,n,s);
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
var s__11814 = cljs.core.seq.call(null,coll);
var lead__11815 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11815))
{{
var G__11822 = cljs.core.next.call(null,s__11814);
var G__11823 = cljs.core.next.call(null,lead__11815);
s__11814 = G__11822;
lead__11815 = G__11823;
continue;
}
} else
{return s__11814;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11875 = (function (pred,coll){
while(true){
var s__11873 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11874 = s__11873;

if(cljs.core.truth_(and__3546__auto____11874))
{return pred.call(null,cljs.core.first.call(null,s__11873));
} else
{return and__3546__auto____11874;
}
})()))
{{
var G__11878 = pred;
var G__11879 = cljs.core.rest.call(null,s__11873);
pred = G__11878;
coll = G__11879;
continue;
}
} else
{return s__11873;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11875.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11881 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11881))
{var s__11882 = temp__3698__auto____11881;

return cljs.core.concat.call(null,s__11882,cycle.call(null,s__11882));
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
var repeat__11895 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11896 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11895.call(this,n);
case  2 :
return repeat__11896.call(this,n,x);
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
var repeatedly__11904 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11906 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11904.call(this,n);
case  2 :
return repeatedly__11906.call(this,n,f);
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
var interleave__11928 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11920 = cljs.core.seq.call(null,c1);
var s2__11922 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11923 = s1__11920;

if(cljs.core.truth_(and__3546__auto____11923))
{return s2__11922;
} else
{return and__3546__auto____11923;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11920),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11922),interleave.call(null,cljs.core.rest.call(null,s1__11920),cljs.core.rest.call(null,s2__11922))));
} else
{return null;
}
})));
});
var interleave__11929 = (function() { 
var G__11938__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11926 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11926)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11926),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11926)));
} else
{return null;
}
})));
};
var G__11938 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11938__delegate.call(this, c1, c2, colls);
};
G__11938.cljs$lang$maxFixedArity = 2;
G__11938.cljs$lang$applyTo = (function (arglist__11939){
var c1 = cljs.core.first(arglist__11939);
var c2 = cljs.core.first(cljs.core.next(arglist__11939));
var colls = cljs.core.rest(cljs.core.next(arglist__11939));
return G__11938__delegate.call(this, c1, c2, colls);
});
return G__11938;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11928.call(this,c1,c2);
default:
return interleave__11929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11929.cljs$lang$applyTo;
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
var cat__11966 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11964 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11964))
{var coll__11965 = temp__3695__auto____11964;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11965),cat.call(null,cljs.core.rest.call(null,coll__11965),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11966.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12020 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12021 = (function() { 
var G__12023__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12023 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12023__delegate.call(this, f, coll, colls);
};
G__12023.cljs$lang$maxFixedArity = 2;
G__12023.cljs$lang$applyTo = (function (arglist__12027){
var f = cljs.core.first(arglist__12027);
var coll = cljs.core.first(cljs.core.next(arglist__12027));
var colls = cljs.core.rest(cljs.core.next(arglist__12027));
return G__12023__delegate.call(this, f, coll, colls);
});
return G__12023;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12020.call(this,f,coll);
default:
return mapcat__12021.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12021.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12036 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12036))
{var s__12037 = temp__3698__auto____12036;

var f__12038 = cljs.core.first.call(null,s__12037);
var r__12045 = cljs.core.rest.call(null,s__12037);

if(cljs.core.truth_(pred.call(null,f__12038)))
{return cljs.core.cons.call(null,f__12038,filter.call(null,pred,r__12045));
} else
{return filter.call(null,pred,r__12045);
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
var walk__12052 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12052.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12051_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12051_SHARP_));
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
var partition__12076 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12077 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12062 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12062))
{var s__12063 = temp__3698__auto____12062;

var p__12064 = cljs.core.take.call(null,n,s__12063);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12064))))
{return cljs.core.cons.call(null,p__12064,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12063)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12078 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12071))
{var s__12073 = temp__3698__auto____12071;

var p__12075 = cljs.core.take.call(null,n,s__12073);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12075))))
{return cljs.core.cons.call(null,p__12075,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12073)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12075,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12076.call(this,n,step);
case  3 :
return partition__12077.call(this,n,step,pad);
case  4 :
return partition__12078.call(this,n,step,pad,coll);
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
var get_in__12096 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12097 = (function (m,ks,not_found){
var sentinel__12089 = cljs.core.lookup_sentinel;
var m__12090 = m;
var ks__12091 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12091))
{var m__12092 = cljs.core.get.call(null,m__12090,cljs.core.first.call(null,ks__12091),sentinel__12089);

if(cljs.core.truth_((sentinel__12089 === m__12092)))
{return not_found;
} else
{{
var G__12101 = sentinel__12089;
var G__12102 = m__12092;
var G__12103 = cljs.core.next.call(null,ks__12091);
sentinel__12089 = G__12101;
m__12090 = G__12102;
ks__12091 = G__12103;
continue;
}
}
} else
{return m__12090;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12096.call(this,m,ks);
case  3 :
return get_in__12097.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12107,v){
var vec__12108__12109 = p__12107;
var k__12110 = cljs.core.nth.call(null,vec__12108__12109,0,null);
var ks__12111 = cljs.core.nthnext.call(null,vec__12108__12109,1);

if(cljs.core.truth_(ks__12111))
{return cljs.core.assoc.call(null,m,k__12110,assoc_in.call(null,cljs.core.get.call(null,m,k__12110),ks__12111,v));
} else
{return cljs.core.assoc.call(null,m,k__12110,v);
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
var update_in__delegate = function (m,p__12233,f,args){
var vec__12234__12235 = p__12233;
var k__12237 = cljs.core.nth.call(null,vec__12234__12235,0,null);
var ks__12239 = cljs.core.nthnext.call(null,vec__12234__12235,1);

if(cljs.core.truth_(ks__12239))
{return cljs.core.assoc.call(null,m,k__12237,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12237),ks__12239,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12237,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12237),args));
}
};
var update_in = function (m,p__12233,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12233, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12367){
var m = cljs.core.first(arglist__12367);
var p__12233 = cljs.core.first(cljs.core.next(arglist__12367));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12367)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12367)));
return update_in__delegate.call(this, m, p__12233, f, args);
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
var this__12371 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12451 = null;
var G__12451__12452 = (function (coll,k){
var this__12372 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12451__12453 = (function (coll,k,not_found){
var this__12373 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12451 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12451__12452.call(this,coll,k);
case  3 :
return G__12451__12453.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12451;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12378 = this;
var new_array__12379 = cljs.core.aclone.call(null,this__12378.array);

(new_array__12379[k] = v);
return (new cljs.core.Vector(this__12378.meta,new_array__12379));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12458 = null;
var G__12458__12459 = (function (coll,k){
var this__12380 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12458__12461 = (function (coll,k,not_found){
var this__12381 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12458 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12458__12459.call(this,coll,k);
case  3 :
return G__12458__12461.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12458;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12382 = this;
var new_array__12383 = cljs.core.aclone.call(null,this__12382.array);

new_array__12383.push(o);
return (new cljs.core.Vector(this__12382.meta,new_array__12383));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12467 = null;
var G__12467__12468 = (function (v,f){
var this__12384 = this;
return cljs.core.ci_reduce.call(null,this__12384.array,f);
});
var G__12467__12469 = (function (v,f,start){
var this__12385 = this;
return cljs.core.ci_reduce.call(null,this__12385.array,f,start);
});
G__12467 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12467__12468.call(this,v,f);
case  3 :
return G__12467__12469.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12467;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12386 = this;
if(cljs.core.truth_((this__12386.array.length > 0)))
{var vector_seq__12418 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12386.array.length)))
{return cljs.core.cons.call(null,(this__12386.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12418.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12419 = this;
return this__12419.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12424 = this;
var count__12425 = this__12424.array.length;

if(cljs.core.truth_((count__12425 > 0)))
{return (this__12424.array[(count__12425 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12428 = this;
if(cljs.core.truth_((this__12428.array.length > 0)))
{var new_array__12430 = cljs.core.aclone.call(null,this__12428.array);

new_array__12430.pop();
return (new cljs.core.Vector(this__12428.meta,new_array__12430));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12432 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12434 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12435 = this;
return (new cljs.core.Vector(meta,this__12435.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12437 = this;
return this__12437.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12553 = null;
var G__12553__12555 = (function (coll,n){
var this__12439 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12441 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12441))
{return (n < this__12439.array.length);
} else
{return and__3546__auto____12441;
}
})()))
{return (this__12439.array[n]);
} else
{return null;
}
});
var G__12553__12556 = (function (coll,n,not_found){
var this__12443 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12446 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12446))
{return (n < this__12443.array.length);
} else
{return and__3546__auto____12446;
}
})()))
{return (this__12443.array[n]);
} else
{return not_found;
}
});
G__12553 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12553__12555.call(this,coll,n);
case  3 :
return G__12553__12556.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12553;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12447 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12447.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12580){
var args = cljs.core.seq( arglist__12580 );;
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
var this__12590 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12749 = null;
var G__12749__12750 = (function (coll,k){
var this__12591 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12749__12751 = (function (coll,k,not_found){
var this__12592 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12749 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12749__12750.call(this,coll,k);
case  3 :
return G__12749__12751.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12749;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12593 = this;
var v_pos__12594 = (this__12593.start + key);

return (new cljs.core.Subvec(this__12593.meta,cljs.core._assoc.call(null,this__12593.v,v_pos__12594,val),this__12593.start,((this__12593.end > (v_pos__12594 + 1)) ? this__12593.end : (v_pos__12594 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12754 = null;
var G__12754__12756 = (function (coll,k){
var this__12596 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12754__12757 = (function (coll,k,not_found){
var this__12598 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12754 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12754__12756.call(this,coll,k);
case  3 :
return G__12754__12757.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12754;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12601 = this;
return (new cljs.core.Subvec(this__12601.meta,cljs.core._assoc_n.call(null,this__12601.v,this__12601.end,o),this__12601.start,(this__12601.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12767 = null;
var G__12767__12768 = (function (coll,f){
var this__12702 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12767__12769 = (function (coll,f,start){
var this__12707 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12767 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12767__12768.call(this,coll,f);
case  3 :
return G__12767__12769.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12767;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12712 = this;
var subvec_seq__12715 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12712.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12712.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12715.call(null,this__12712.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12719 = this;
return (this__12719.end - this__12719.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12721 = this;
return cljs.core._nth.call(null,this__12721.v,(this__12721.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12723 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12723.start,this__12723.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12723.meta,this__12723.v,this__12723.start,(this__12723.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12732 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12734 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12735 = this;
return (new cljs.core.Subvec(meta,this__12735.v,this__12735.start,this__12735.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12741 = this;
return this__12741.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12792 = null;
var G__12792__12793 = (function (coll,n){
var this__12743 = this;
return cljs.core._nth.call(null,this__12743.v,(this__12743.start + n));
});
var G__12792__12794 = (function (coll,n,not_found){
var this__12745 = this;
return cljs.core._nth.call(null,this__12745.v,(this__12745.start + n),not_found);
});
G__12792 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12792__12793.call(this,coll,n);
case  3 :
return G__12792__12794.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12792;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12748 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12748.meta);
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
var subvec__12808 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12809 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12808.call(this,v,start);
case  3 :
return subvec__12809.call(this,v,start,end);
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
var this__12842 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12843 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12848 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12849 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12849.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12851 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12853 = this;
return cljs.core._first.call(null,this__12853.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12855 = this;
var temp__3695__auto____12856 = cljs.core.next.call(null,this__12855.front);

if(cljs.core.truth_(temp__3695__auto____12856))
{var f1__12857 = temp__3695__auto____12856;

return (new cljs.core.PersistentQueueSeq(this__12855.meta,f1__12857,this__12855.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12855.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12855.meta,this__12855.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12863 = this;
return this__12863.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12864 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12864.front,this__12864.rear));
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
var this__12889 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12890 = this;
if(cljs.core.truth_(this__12890.front))
{return (new cljs.core.PersistentQueue(this__12890.meta,(this__12890.count + 1),this__12890.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12893 = this__12890.rear;

if(cljs.core.truth_(or__3548__auto____12893))
{return or__3548__auto____12893;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12890.meta,(this__12890.count + 1),cljs.core.conj.call(null,this__12890.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12896 = this;
var rear__12898 = cljs.core.seq.call(null,this__12896.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12900 = this__12896.front;

if(cljs.core.truth_(or__3548__auto____12900))
{return or__3548__auto____12900;
} else
{return rear__12898;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12896.front,cljs.core.seq.call(null,rear__12898)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12902 = this;
return this__12902.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12907 = this;
return cljs.core._first.call(null,this__12907.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12909 = this;
if(cljs.core.truth_(this__12909.front))
{var temp__3695__auto____12911 = cljs.core.next.call(null,this__12909.front);

if(cljs.core.truth_(temp__3695__auto____12911))
{var f1__12912 = temp__3695__auto____12911;

return (new cljs.core.PersistentQueue(this__12909.meta,(this__12909.count - 1),f1__12912,this__12909.rear));
} else
{return (new cljs.core.PersistentQueue(this__12909.meta,(this__12909.count - 1),cljs.core.seq.call(null,this__12909.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12915 = this;
return cljs.core.first.call(null,this__12915.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12916 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12918 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12919 = this;
return (new cljs.core.PersistentQueue(meta,this__12919.count,this__12919.front,this__12919.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12920 = this;
return this__12920.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12921 = this;
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
var this__12947 = this;
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
var len__12969 = array.length;

var i__12970 = 0;

while(true){
if(cljs.core.truth_((i__12970 < len__12969)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12970]))))
{return i__12970;
} else
{{
var G__12974 = (i__12970 + incr);
i__12970 = G__12974;
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
var obj_map_contains_key_QMARK___12978 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12979 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12976 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12976))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12976;
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
return obj_map_contains_key_QMARK___12978.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12979.call(this,k,strobj,true_val,false_val);
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
var this__13010 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13051 = null;
var G__13051__13052 = (function (coll,k){
var this__13011 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13051__13053 = (function (coll,k,not_found){
var this__13012 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13012.strobj,(this__13012.strobj[k]),not_found);
});
G__13051 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13051__13052.call(this,coll,k);
case  3 :
return G__13051__13053.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13051;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13021 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13022 = goog.object.clone.call(null,this__13021.strobj);
var overwrite_QMARK___13023 = new_strobj__13022.hasOwnProperty(k);

(new_strobj__13022[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13023))
{return (new cljs.core.ObjMap(this__13021.meta,this__13021.keys,new_strobj__13022));
} else
{var new_keys__13028 = cljs.core.aclone.call(null,this__13021.keys);

new_keys__13028.push(k);
return (new cljs.core.ObjMap(this__13021.meta,new_keys__13028,new_strobj__13022));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13021.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13029 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13029.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13061 = null;
var G__13061__13062 = (function (coll,k){
var this__13030 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13061__13063 = (function (coll,k,not_found){
var this__13031 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13061 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13061__13062.call(this,coll,k);
case  3 :
return G__13061__13063.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13061;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13032 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13033 = this;
if(cljs.core.truth_((this__13033.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12990_SHARP_){
return cljs.core.vector.call(null,p1__12990_SHARP_,(this__13033.strobj[p1__12990_SHARP_]));
}),this__13033.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13034 = this;
return this__13034.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13035 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13036 = this;
return (new cljs.core.ObjMap(meta,this__13036.keys,this__13036.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13038 = this;
return this__13038.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13040 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13040.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13043 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13046 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13046))
{return this__13043.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13046;
}
})()))
{var new_keys__13047 = cljs.core.aclone.call(null,this__13043.keys);
var new_strobj__13048 = goog.object.clone.call(null,this__13043.strobj);

new_keys__13047.splice(cljs.core.scan_array.call(null,1,k,new_keys__13047),1);
cljs.core.js_delete.call(null,new_strobj__13048,k);
return (new cljs.core.ObjMap(this__13043.meta,new_keys__13047,new_strobj__13048));
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
var this__13110 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13203 = null;
var G__13203__13204 = (function (coll,k){
var this__13111 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13203__13205 = (function (coll,k,not_found){
var this__13113 = this;
var bucket__13117 = (this__13113.hashobj[cljs.core.hash.call(null,k)]);
var i__13119 = (cljs.core.truth_(bucket__13117)?cljs.core.scan_array.call(null,2,k,bucket__13117):null);

if(cljs.core.truth_(i__13119))
{return (bucket__13117[(i__13119 + 1)]);
} else
{return not_found;
}
});
G__13203 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13203__13204.call(this,coll,k);
case  3 :
return G__13203__13205.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13203;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13121 = this;
var h__13123 = cljs.core.hash.call(null,k);
var bucket__13124 = (this__13121.hashobj[h__13123]);

if(cljs.core.truth_(bucket__13124))
{var new_bucket__13126 = cljs.core.aclone.call(null,bucket__13124);
var new_hashobj__13128 = goog.object.clone.call(null,this__13121.hashobj);

(new_hashobj__13128[h__13123] = new_bucket__13126);
var temp__3695__auto____13130 = cljs.core.scan_array.call(null,2,k,new_bucket__13126);

if(cljs.core.truth_(temp__3695__auto____13130))
{var i__13131 = temp__3695__auto____13130;

(new_bucket__13126[(i__13131 + 1)] = v);
return (new cljs.core.HashMap(this__13121.meta,this__13121.count,new_hashobj__13128));
} else
{new_bucket__13126.push(k,v);
return (new cljs.core.HashMap(this__13121.meta,(this__13121.count + 1),new_hashobj__13128));
}
} else
{var new_hashobj__13137 = goog.object.clone.call(null,this__13121.hashobj);

(new_hashobj__13137[h__13123] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13121.meta,(this__13121.count + 1),new_hashobj__13137));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13139 = this;
var bucket__13141 = (this__13139.hashobj[cljs.core.hash.call(null,k)]);
var i__13142 = (cljs.core.truth_(bucket__13141)?cljs.core.scan_array.call(null,2,k,bucket__13141):null);

if(cljs.core.truth_(i__13142))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13218 = null;
var G__13218__13219 = (function (coll,k){
var this__13144 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13218__13220 = (function (coll,k,not_found){
var this__13163 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13218 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13218__13219.call(this,coll,k);
case  3 :
return G__13218__13220.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13218;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13166 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13170 = this;
if(cljs.core.truth_((this__13170.count > 0)))
{var hashes__13175 = cljs.core.js_keys.call(null,this__13170.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13093_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13170.hashobj[p1__13093_SHARP_])));
}),hashes__13175);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13180 = this;
return this__13180.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13181 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13182 = this;
return (new cljs.core.HashMap(meta,this__13182.count,this__13182.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13183 = this;
return this__13183.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13186 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13186.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13189 = this;
var h__13190 = cljs.core.hash.call(null,k);
var bucket__13191 = (this__13189.hashobj[h__13190]);
var i__13192 = (cljs.core.truth_(bucket__13191)?cljs.core.scan_array.call(null,2,k,bucket__13191):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13192)))
{return coll;
} else
{var new_hashobj__13193 = goog.object.clone.call(null,this__13189.hashobj);

if(cljs.core.truth_((3 > bucket__13191.length)))
{cljs.core.js_delete.call(null,new_hashobj__13193,h__13190);
} else
{var new_bucket__13195 = cljs.core.aclone.call(null,bucket__13191);

new_bucket__13195.splice(i__13192,2);
(new_hashobj__13193[h__13190] = new_bucket__13195);
}
return (new cljs.core.HashMap(this__13189.meta,(this__13189.count - 1),new_hashobj__13193));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13247 = ks.length;

var i__13248 = 0;
var out__13251 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13248 < len__13247)))
{{
var G__13254 = (i__13248 + 1);
var G__13256 = cljs.core.assoc.call(null,out__13251,(ks[i__13248]),(vs[i__13248]));
i__13248 = G__13254;
out__13251 = G__13256;
continue;
}
} else
{return out__13251;
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
var in$__13262 = cljs.core.seq.call(null,keyvals);
var out__13263 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13262))
{{
var G__13269 = cljs.core.nnext.call(null,in$__13262);
var G__13270 = cljs.core.assoc.call(null,out__13263,cljs.core.first.call(null,in$__13262),cljs.core.second.call(null,in$__13262));
in$__13262 = G__13269;
out__13263 = G__13270;
continue;
}
} else
{return out__13263;
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
hash_map.cljs$lang$applyTo = (function (arglist__13271){
var keyvals = cljs.core.seq( arglist__13271 );;
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
{return cljs.core.reduce.call(null,(function (p1__13274_SHARP_,p2__13275_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13286 = p1__13274_SHARP_;

if(cljs.core.truth_(or__3548__auto____13286))
{return or__3548__auto____13286;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13275_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13294){
var maps = cljs.core.seq( arglist__13294 );;
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
{var merge_entry__13308 = (function (m,e){
var k__13304 = cljs.core.first.call(null,e);
var v__13305 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13304)))
{return cljs.core.assoc.call(null,m,k__13304,f.call(null,cljs.core.get.call(null,m,k__13304),v__13305));
} else
{return cljs.core.assoc.call(null,m,k__13304,v__13305);
}
});
var merge2__13311 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13308,(function (){var or__3548__auto____13310 = m1;

if(cljs.core.truth_(or__3548__auto____13310))
{return or__3548__auto____13310;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13311,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13322){
var f = cljs.core.first(arglist__13322);
var maps = cljs.core.rest(arglist__13322);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13325 = cljs.core.ObjMap.fromObject([],{});
var keys__13326 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13326))
{var key__13327 = cljs.core.first.call(null,keys__13326);
var entry__13328 = cljs.core.get.call(null,map,key__13327,"﷐'user/not-found");

{
var G__13332 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13328,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13325,key__13327,entry__13328):ret__13325);
var G__13333 = cljs.core.next.call(null,keys__13326);
ret__13325 = G__13332;
keys__13326 = G__13333;
continue;
}
} else
{return ret__13325;
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
var this__13352 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13388 = null;
var G__13388__13389 = (function (coll,v){
var this__13353 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13388__13404 = (function (coll,v,not_found){
var this__13354 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13354.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13388 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13388__13389.call(this,coll,v);
case  3 :
return G__13388__13404.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13388;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13473 = null;
var G__13473__13474 = (function (coll,k){
var this__13357 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13473__13475 = (function (coll,k,not_found){
var this__13360 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13473 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13473__13474.call(this,coll,k);
case  3 :
return G__13473__13475.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13473;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13362 = this;
return (new cljs.core.Set(this__13362.meta,cljs.core.assoc.call(null,this__13362.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13366 = this;
return cljs.core.keys.call(null,this__13366.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13369 = this;
return (new cljs.core.Set(this__13369.meta,cljs.core.dissoc.call(null,this__13369.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13372 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13374 = this;
var and__3546__auto____13375 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13375))
{var and__3546__auto____13377 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13377))
{return cljs.core.every_QMARK_.call(null,(function (p1__13323_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13323_SHARP_);
}),other);
} else
{return and__3546__auto____13377;
}
} else
{return and__3546__auto____13375;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13378 = this;
return (new cljs.core.Set(meta,this__13378.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13379 = this;
return this__13379.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13381 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13381.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13494 = cljs.core.seq.call(null,coll);
var out__13495 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13494))))
{{
var G__13500 = cljs.core.rest.call(null,in$__13494);
var G__13501 = cljs.core.conj.call(null,out__13495,cljs.core.first.call(null,in$__13494));
in$__13494 = G__13500;
out__13495 = G__13501;
continue;
}
} else
{return out__13495;
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
{var n__13505 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13506 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13506))
{var e__13508 = temp__3695__auto____13506;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13508));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13505,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13490_SHARP_){
var temp__3695__auto____13517 = cljs.core.find.call(null,smap,p1__13490_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13517))
{var e__13518 = temp__3695__auto____13517;

return cljs.core.second.call(null,e__13518);
} else
{return p1__13490_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13538 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13524,seen){
while(true){
var vec__13525__13526 = p__13524;
var f__13527 = cljs.core.nth.call(null,vec__13525__13526,0,null);
var xs__13528 = vec__13525__13526;

var temp__3698__auto____13529 = cljs.core.seq.call(null,xs__13528);

if(cljs.core.truth_(temp__3698__auto____13529))
{var s__13532 = temp__3698__auto____13529;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13527)))
{{
var G__13540 = cljs.core.rest.call(null,s__13532);
var G__13541 = seen;
p__13524 = G__13540;
seen = G__13541;
continue;
}
} else
{return cljs.core.cons.call(null,f__13527,step.call(null,cljs.core.rest.call(null,s__13532),cljs.core.conj.call(null,seen,f__13527)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13538.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13544 = cljs.core.Vector.fromArray([]);
var s__13547 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13547)))
{{
var G__13549 = cljs.core.conj.call(null,ret__13544,cljs.core.first.call(null,s__13547));
var G__13551 = cljs.core.next.call(null,s__13547);
ret__13544 = G__13549;
s__13547 = G__13551;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13544);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13553 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13553))
{return or__3548__auto____13553;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13558 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13558 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13558 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13670 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13670))
{return or__3548__auto____13670;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13673 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13673 > -1)))
{return cljs.core.subs.call(null,x,2,i__13673);
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
var map__13689 = cljs.core.ObjMap.fromObject([],{});
var ks__13690 = cljs.core.seq.call(null,keys);
var vs__13691 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13693 = ks__13690;

if(cljs.core.truth_(and__3546__auto____13693))
{return vs__13691;
} else
{return and__3546__auto____13693;
}
})()))
{{
var G__13709 = cljs.core.assoc.call(null,map__13689,cljs.core.first.call(null,ks__13690),cljs.core.first.call(null,vs__13691));
var G__13710 = cljs.core.next.call(null,ks__13690);
var G__13711 = cljs.core.next.call(null,vs__13691);
map__13689 = G__13709;
ks__13690 = G__13710;
vs__13691 = G__13711;
continue;
}
} else
{return map__13689;
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
var max_key__13728 = (function (k,x){
return x;
});
var max_key__13729 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13730 = (function() { 
var G__13732__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13686_SHARP_,p2__13687_SHARP_){
return max_key.call(null,k,p1__13686_SHARP_,p2__13687_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13732 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13732__delegate.call(this, k, x, y, more);
};
G__13732.cljs$lang$maxFixedArity = 3;
G__13732.cljs$lang$applyTo = (function (arglist__13733){
var k = cljs.core.first(arglist__13733);
var x = cljs.core.first(cljs.core.next(arglist__13733));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13733)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13733)));
return G__13732__delegate.call(this, k, x, y, more);
});
return G__13732;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13728.call(this,k,x);
case  3 :
return max_key__13729.call(this,k,x,y);
default:
return max_key__13730.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13730.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13736 = (function (k,x){
return x;
});
var min_key__13737 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13738 = (function() { 
var G__13740__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13716_SHARP_,p2__13717_SHARP_){
return min_key.call(null,k,p1__13716_SHARP_,p2__13717_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13740 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13740__delegate.call(this, k, x, y, more);
};
G__13740.cljs$lang$maxFixedArity = 3;
G__13740.cljs$lang$applyTo = (function (arglist__13741){
var k = cljs.core.first(arglist__13741);
var x = cljs.core.first(cljs.core.next(arglist__13741));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13741)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13741)));
return G__13740__delegate.call(this, k, x, y, more);
});
return G__13740;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13736.call(this,k,x);
case  3 :
return min_key__13737.call(this,k,x,y);
default:
return min_key__13738.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13738.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13749 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13750 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13747 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13747))
{var s__13748 = temp__3698__auto____13747;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13748),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13748)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13749.call(this,n,step);
case  3 :
return partition_all__13750.call(this,n,step,coll);
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
var temp__3698__auto____13764 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13764))
{var s__13766 = temp__3698__auto____13764;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13766))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13766),take_while.call(null,pred,cljs.core.rest.call(null,s__13766)));
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
var this__13910 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13911 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13966 = null;
var G__13966__13967 = (function (rng,f){
var this__13913 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13966__13968 = (function (rng,f,s){
var this__13915 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13966 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13966__13967.call(this,rng,f);
case  3 :
return G__13966__13968.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13966;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13916 = this;
var comp__13917 = (cljs.core.truth_((this__13916.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13917.call(null,this__13916.start,this__13916.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13918 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13918.end - this__13918.start) / this__13918.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13919 = this;
return this__13919.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13927 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13927.meta,(this__13927.start + this__13927.step),this__13927.end,this__13927.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13930 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13933 = this;
return (new cljs.core.Range(meta,this__13933.start,this__13933.end,this__13933.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13935 = this;
return this__13935.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13987 = null;
var G__13987__13988 = (function (rng,n){
var this__13936 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13936.start + (n * this__13936.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13940 = (this__13936.start > this__13936.end);

if(cljs.core.truth_(and__3546__auto____13940))
{return cljs.core._EQ_.call(null,this__13936.step,0);
} else
{return and__3546__auto____13940;
}
})()))
{return this__13936.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13987__13989 = (function (rng,n,not_found){
var this__13942 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13942.start + (n * this__13942.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13946 = (this__13942.start > this__13942.end);

if(cljs.core.truth_(and__3546__auto____13946))
{return cljs.core._EQ_.call(null,this__13942.step,0);
} else
{return and__3546__auto____13946;
}
})()))
{return this__13942.start;
} else
{return not_found;
}
}
});
G__13987 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13987__13988.call(this,rng,n);
case  3 :
return G__13987__13989.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13987;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13947 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13947.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14003 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14005 = (function (end){
return range.call(null,0,end,1);
});
var range__14006 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14007 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14003.call(this);
case  1 :
return range__14005.call(this,start);
case  2 :
return range__14006.call(this,start,end);
case  3 :
return range__14007.call(this,start,end,step);
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
var temp__3698__auto____14012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14012))
{var s__14014 = temp__3698__auto____14012;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14014),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14014)));
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
var temp__3698__auto____14029 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14029))
{var s__14030 = temp__3698__auto____14029;

var fst__14031 = cljs.core.first.call(null,s__14030);
var fv__14032 = f.call(null,fst__14031);
var run__14033 = cljs.core.cons.call(null,fst__14031,cljs.core.take_while.call(null,(function (p1__14024_SHARP_){
return cljs.core._EQ_.call(null,fv__14032,f.call(null,p1__14024_SHARP_));
}),cljs.core.next.call(null,s__14030)));

return cljs.core.cons.call(null,run__14033,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14033),s__14030))));
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
var reductions__14083 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14060 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14060))
{var s__14065 = temp__3695__auto____14060;

return reductions.call(null,f,cljs.core.first.call(null,s__14065),cljs.core.rest.call(null,s__14065));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14084 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14076 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14076))
{var s__14077 = temp__3698__auto____14076;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14077)),cljs.core.rest.call(null,s__14077));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14083.call(this,f,init);
case  3 :
return reductions__14084.call(this,f,init,coll);
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
var juxt__14188 = (function (f){
return (function() {
var G__14194 = null;
var G__14194__14195 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14194__14196 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14194__14197 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14194__14198 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14194__14199 = (function() { 
var G__14204__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14204 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14204__delegate.call(this, x, y, z, args);
};
G__14204.cljs$lang$maxFixedArity = 3;
G__14204.cljs$lang$applyTo = (function (arglist__14207){
var x = cljs.core.first(arglist__14207);
var y = cljs.core.first(cljs.core.next(arglist__14207));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14207)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14207)));
return G__14204__delegate.call(this, x, y, z, args);
});
return G__14204;
})()
;
G__14194 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14194__14195.call(this);
case  1 :
return G__14194__14196.call(this,x);
case  2 :
return G__14194__14197.call(this,x,y);
case  3 :
return G__14194__14198.call(this,x,y,z);
default:
return G__14194__14199.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14194.cljs$lang$maxFixedArity = 3;
G__14194.cljs$lang$applyTo = G__14194__14199.cljs$lang$applyTo;
return G__14194;
})()
});
var juxt__14189 = (function (f,g){
return (function() {
var G__14211 = null;
var G__14211__14212 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14211__14213 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14211__14214 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14211__14215 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14211__14216 = (function() { 
var G__14225__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14225 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14225__delegate.call(this, x, y, z, args);
};
G__14225.cljs$lang$maxFixedArity = 3;
G__14225.cljs$lang$applyTo = (function (arglist__14229){
var x = cljs.core.first(arglist__14229);
var y = cljs.core.first(cljs.core.next(arglist__14229));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14229)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14229)));
return G__14225__delegate.call(this, x, y, z, args);
});
return G__14225;
})()
;
G__14211 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14211__14212.call(this);
case  1 :
return G__14211__14213.call(this,x);
case  2 :
return G__14211__14214.call(this,x,y);
case  3 :
return G__14211__14215.call(this,x,y,z);
default:
return G__14211__14216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14211.cljs$lang$maxFixedArity = 3;
G__14211.cljs$lang$applyTo = G__14211__14216.cljs$lang$applyTo;
return G__14211;
})()
});
var juxt__14190 = (function (f,g,h){
return (function() {
var G__14241 = null;
var G__14241__14242 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14241__14243 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14241__14245 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14241__14246 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14241__14247 = (function() { 
var G__14256__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14256 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14256__delegate.call(this, x, y, z, args);
};
G__14256.cljs$lang$maxFixedArity = 3;
G__14256.cljs$lang$applyTo = (function (arglist__14257){
var x = cljs.core.first(arglist__14257);
var y = cljs.core.first(cljs.core.next(arglist__14257));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14257)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14257)));
return G__14256__delegate.call(this, x, y, z, args);
});
return G__14256;
})()
;
G__14241 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14241__14242.call(this);
case  1 :
return G__14241__14243.call(this,x);
case  2 :
return G__14241__14245.call(this,x,y);
case  3 :
return G__14241__14246.call(this,x,y,z);
default:
return G__14241__14247.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14241.cljs$lang$maxFixedArity = 3;
G__14241.cljs$lang$applyTo = G__14241__14247.cljs$lang$applyTo;
return G__14241;
})()
});
var juxt__14191 = (function() { 
var G__14259__delegate = function (f,g,h,fs){
var fs__14124 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14260 = null;
var G__14260__14261 = (function (){
return cljs.core.reduce.call(null,(function (p1__14046_SHARP_,p2__14048_SHARP_){
return cljs.core.conj.call(null,p1__14046_SHARP_,p2__14048_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14124);
});
var G__14260__14262 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14049_SHARP_,p2__14050_SHARP_){
return cljs.core.conj.call(null,p1__14049_SHARP_,p2__14050_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14124);
});
var G__14260__14263 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14051_SHARP_,p2__14052_SHARP_){
return cljs.core.conj.call(null,p1__14051_SHARP_,p2__14052_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14124);
});
var G__14260__14264 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14054_SHARP_,p2__14055_SHARP_){
return cljs.core.conj.call(null,p1__14054_SHARP_,p2__14055_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14124);
});
var G__14260__14265 = (function() { 
var G__14274__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14057_SHARP_,p2__14058_SHARP_){
return cljs.core.conj.call(null,p1__14057_SHARP_,cljs.core.apply.call(null,p2__14058_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14124);
};
var G__14274 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14274__delegate.call(this, x, y, z, args);
};
G__14274.cljs$lang$maxFixedArity = 3;
G__14274.cljs$lang$applyTo = (function (arglist__14276){
var x = cljs.core.first(arglist__14276);
var y = cljs.core.first(cljs.core.next(arglist__14276));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14276)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14276)));
return G__14274__delegate.call(this, x, y, z, args);
});
return G__14274;
})()
;
G__14260 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14260__14261.call(this);
case  1 :
return G__14260__14262.call(this,x);
case  2 :
return G__14260__14263.call(this,x,y);
case  3 :
return G__14260__14264.call(this,x,y,z);
default:
return G__14260__14265.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14260.cljs$lang$maxFixedArity = 3;
G__14260.cljs$lang$applyTo = G__14260__14265.cljs$lang$applyTo;
return G__14260;
})()
};
var G__14259 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14259__delegate.call(this, f, g, h, fs);
};
G__14259.cljs$lang$maxFixedArity = 3;
G__14259.cljs$lang$applyTo = (function (arglist__14277){
var f = cljs.core.first(arglist__14277);
var g = cljs.core.first(cljs.core.next(arglist__14277));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14277)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14277)));
return G__14259__delegate.call(this, f, g, h, fs);
});
return G__14259;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14188.call(this,f);
case  2 :
return juxt__14189.call(this,f,g);
case  3 :
return juxt__14190.call(this,f,g,h);
default:
return juxt__14191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14191.cljs$lang$applyTo;
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
var dorun__14296 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14300 = cljs.core.next.call(null,coll);
coll = G__14300;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14297 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14278 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14278))
{return (n > 0);
} else
{return and__3546__auto____14278;
}
})()))
{{
var G__14304 = (n - 1);
var G__14305 = cljs.core.next.call(null,coll);
n = G__14304;
coll = G__14305;
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
return dorun__14296.call(this,n);
case  2 :
return dorun__14297.call(this,n,coll);
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
var doall__14308 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14309 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14308.call(this,n);
case  2 :
return doall__14309.call(this,n,coll);
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
var matches__14314 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14314),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14314),1)))
{return cljs.core.first.call(null,matches__14314);
} else
{return cljs.core.vec.call(null,matches__14314);
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
var matches__14329 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14329)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14329),1)))
{return cljs.core.first.call(null,matches__14329);
} else
{return cljs.core.vec.call(null,matches__14329);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14355 = cljs.core.re_find.call(null,re,s);
var match_idx__14358 = s.search(re);
var match_str__14360 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14355))?cljs.core.first.call(null,match_data__14355):match_data__14355);
var post_match__14362 = cljs.core.subs.call(null,s,(match_idx__14358 + cljs.core.count.call(null,match_str__14360)));

if(cljs.core.truth_(match_data__14355))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14355,re_seq.call(null,re,post_match__14362));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14368_SHARP_){
return print_one.call(null,p1__14368_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14420 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14420))
{var and__3546__auto____14431 = (function (){var x__445__auto____14421 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14422 = x__445__auto____14421;

if(cljs.core.truth_(and__3546__auto____14422))
{var and__3546__auto____14425 = x__445__auto____14421.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14425))
{return cljs.core.not.call(null,x__445__auto____14421.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14425;
}
} else
{return and__3546__auto____14422;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14421);
}
})();

if(cljs.core.truth_(and__3546__auto____14431))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14431;
}
} else
{return and__3546__auto____14420;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14433 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14434 = x__445__auto____14433;

if(cljs.core.truth_(and__3546__auto____14434))
{var and__3546__auto____14437 = x__445__auto____14433.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14437))
{return cljs.core.not.call(null,x__445__auto____14433.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14437;
}
} else
{return and__3546__auto____14434;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14433);
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
var first_obj__14459 = cljs.core.first.call(null,objs);
var sb__14460 = (new goog.string.StringBuffer());

var G__14461__14462 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14461__14462))
{var obj__14466 = cljs.core.first.call(null,G__14461__14462);
var G__14461__14467 = G__14461__14462;

while(true){
if(cljs.core.truth_((obj__14466 === first_obj__14459)))
{} else
{sb__14460.append(" ");
}
var G__14469__14470 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14466,opts));

if(cljs.core.truth_(G__14469__14470))
{var string__14474 = cljs.core.first.call(null,G__14469__14470);
var G__14469__14475 = G__14469__14470;

while(true){
sb__14460.append(string__14474);
var temp__3698__auto____14476 = cljs.core.next.call(null,G__14469__14475);

if(cljs.core.truth_(temp__3698__auto____14476))
{var G__14469__14478 = temp__3698__auto____14476;

{
var G__14484 = cljs.core.first.call(null,G__14469__14478);
var G__14485 = G__14469__14478;
string__14474 = G__14484;
G__14469__14475 = G__14485;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14480 = cljs.core.next.call(null,G__14461__14467);

if(cljs.core.truth_(temp__3698__auto____14480))
{var G__14461__14481 = temp__3698__auto____14480;

{
var G__14486 = cljs.core.first.call(null,G__14461__14481);
var G__14487 = G__14461__14481;
obj__14466 = G__14486;
G__14461__14467 = G__14487;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14460);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14492 = cljs.core.first.call(null,objs);

var G__14493__14494 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14493__14494))
{var obj__14495 = cljs.core.first.call(null,G__14493__14494);
var G__14493__14496 = G__14493__14494;

while(true){
if(cljs.core.truth_((obj__14495 === first_obj__14492)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14497__14498 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14495,opts));

if(cljs.core.truth_(G__14497__14498))
{var string__14499 = cljs.core.first.call(null,G__14497__14498);
var G__14497__14500 = G__14497__14498;

while(true){
cljs.core.string_print.call(null,string__14499);
var temp__3698__auto____14502 = cljs.core.next.call(null,G__14497__14500);

if(cljs.core.truth_(temp__3698__auto____14502))
{var G__14497__14503 = temp__3698__auto____14502;

{
var G__14507 = cljs.core.first.call(null,G__14497__14503);
var G__14508 = G__14497__14503;
string__14499 = G__14507;
G__14497__14500 = G__14508;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14505 = cljs.core.next.call(null,G__14493__14496);

if(cljs.core.truth_(temp__3698__auto____14505))
{var G__14493__14506 = temp__3698__auto____14505;

{
var G__14515 = cljs.core.first.call(null,G__14493__14506);
var G__14516 = G__14493__14506;
obj__14495 = G__14515;
G__14493__14496 = G__14516;
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
pr_str.cljs$lang$applyTo = (function (arglist__14530){
var objs = cljs.core.seq( arglist__14530 );;
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
pr.cljs$lang$applyTo = (function (arglist__14581){
var objs = cljs.core.seq( arglist__14581 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14585){
var objs = cljs.core.seq( arglist__14585 );;
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
println.cljs$lang$applyTo = (function (arglist__14588){
var objs = cljs.core.seq( arglist__14588 );;
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
prn.cljs$lang$applyTo = (function (arglist__14599){
var objs = cljs.core.seq( arglist__14599 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14616 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14616,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14637 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14637))
{var nspc__14638 = temp__3698__auto____14637;

return cljs.core.str.call(null,nspc__14638,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14642 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14642))
{var nspc__14643 = temp__3698__auto____14642;

return cljs.core.str.call(null,nspc__14643,"/");
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
var pr_pair__14671 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14671,"{",", ","}",opts,coll);
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
var this__14727 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14728 = this;
var G__14729__14730 = cljs.core.seq.call(null,this__14728.watches);

if(cljs.core.truth_(G__14729__14730))
{var G__14732__14734 = cljs.core.first.call(null,G__14729__14730);
var vec__14733__14735 = G__14732__14734;
var key__14737 = cljs.core.nth.call(null,vec__14733__14735,0,null);
var f__14738 = cljs.core.nth.call(null,vec__14733__14735,1,null);
var G__14729__14739 = G__14729__14730;

var G__14732__14740 = G__14732__14734;
var G__14729__14741 = G__14729__14739;

while(true){
var vec__14742__14743 = G__14732__14740;
var key__14747 = cljs.core.nth.call(null,vec__14742__14743,0,null);
var f__14748 = cljs.core.nth.call(null,vec__14742__14743,1,null);
var G__14729__14749 = G__14729__14741;

f__14748.call(null,key__14747,this$,oldval,newval);
var temp__3698__auto____14750 = cljs.core.next.call(null,G__14729__14749);

if(cljs.core.truth_(temp__3698__auto____14750))
{var G__14729__14751 = temp__3698__auto____14750;

{
var G__14808 = cljs.core.first.call(null,G__14729__14751);
var G__14809 = G__14729__14751;
G__14732__14740 = G__14808;
G__14729__14741 = G__14809;
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
var this__14753 = this;
return this$.watches = cljs.core.assoc.call(null,this__14753.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14756 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14756.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14795 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14795.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14801 = this;
return this__14801.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14804 = this;
return this__14804.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14807 = this;
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
var atom__14830 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14831 = (function() { 
var G__14835__delegate = function (x,p__14819){
var map__14820__14821 = p__14819;
var map__14820__14822 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14820__14821))?cljs.core.apply.call(null,cljs.core.hash_map,map__14820__14821):map__14820__14821);
var validator__14823 = cljs.core.get.call(null,map__14820__14822,"﷐'validator");
var meta__14824 = cljs.core.get.call(null,map__14820__14822,"﷐'meta");

return (new cljs.core.Atom(x,meta__14824,validator__14823,null));
};
var G__14835 = function (x,var_args){
var p__14819 = null;
if (goog.isDef(var_args)) {
  p__14819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14835__delegate.call(this, x, p__14819);
};
G__14835.cljs$lang$maxFixedArity = 1;
G__14835.cljs$lang$applyTo = (function (arglist__14838){
var x = cljs.core.first(arglist__14838);
var p__14819 = cljs.core.rest(arglist__14838);
return G__14835__delegate.call(this, x, p__14819);
});
return G__14835;
})()
;
atom = function(x,var_args){
var p__14819 = var_args;
switch(arguments.length){
case  1 :
return atom__14830.call(this,x);
default:
return atom__14831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14831.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14839 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14839))
{var validate__14840 = temp__3698__auto____14839;

if(cljs.core.truth_(validate__14840.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14842 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14842,new_value);
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
var swap_BANG___14871 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14872 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14873 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14874 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14875 = (function() { 
var G__14881__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14881 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14881__delegate.call(this, a, f, x, y, z, more);
};
G__14881.cljs$lang$maxFixedArity = 5;
G__14881.cljs$lang$applyTo = (function (arglist__14886){
var a = cljs.core.first(arglist__14886);
var f = cljs.core.first(cljs.core.next(arglist__14886));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14886)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14886))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14886)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14886)))));
return G__14881__delegate.call(this, a, f, x, y, z, more);
});
return G__14881;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14871.call(this,a,f);
case  3 :
return swap_BANG___14872.call(this,a,f,x);
case  4 :
return swap_BANG___14873.call(this,a,f,x,y);
case  5 :
return swap_BANG___14874.call(this,a,f,x,y,z);
default:
return swap_BANG___14875.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14875.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14909){
var iref = cljs.core.first(arglist__14909);
var f = cljs.core.first(cljs.core.next(arglist__14909));
var args = cljs.core.rest(cljs.core.next(arglist__14909));
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
var gensym__14928 = (function (){
return gensym.call(null,"G__");
});
var gensym__14929 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14928.call(this);
case  1 :
return gensym__14929.call(this,prefix_string);
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
var this__14939 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14939.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14941 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14941.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14941.state,this__14941.f);
}
return cljs.core.deref.call(null,this__14941.state);
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
delay.cljs$lang$applyTo = (function (arglist__14946){
var body = cljs.core.seq( arglist__14946 );;
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
var map__14952__14953 = options;
var map__14952__14955 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14952__14953))?cljs.core.apply.call(null,cljs.core.hash_map,map__14952__14953):map__14952__14953);
var keywordize_keys__14956 = cljs.core.get.call(null,map__14952__14955,"﷐'keywordize-keys");
var keyfn__14957 = (cljs.core.truth_(keywordize_keys__14956)?cljs.core.keyword:cljs.core.str);
var f__14967 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14966 = (function iter__14960(s__14961){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14961__14964 = s__14961;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14961__14964)))
{var k__14965 = cljs.core.first.call(null,s__14961__14964);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14957.call(null,k__14965),thisfn.call(null,(x[k__14965]))]),iter__14960.call(null,cljs.core.rest.call(null,s__14961__14964)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14966.call(null,cljs.core.js_keys.call(null,x));
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

return f__14967.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14971){
var x = cljs.core.first(arglist__14971);
var options = cljs.core.rest(arglist__14971);
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
var mem__14972 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14979__delegate = function (args){
var temp__3695__auto____14975 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14972),args);

if(cljs.core.truth_(temp__3695__auto____14975))
{var v__14976 = temp__3695__auto____14975;

return v__14976;
} else
{var ret__14978 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14972,cljs.core.assoc,args,ret__14978);
return ret__14978;
}
};
var G__14979 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14979__delegate.call(this, args);
};
G__14979.cljs$lang$maxFixedArity = 0;
G__14979.cljs$lang$applyTo = (function (arglist__14980){
var args = cljs.core.seq( arglist__14980 );;
return G__14979__delegate.call(this, args);
});
return G__14979;
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
var trampoline__14983 = (function (f){
while(true){
var ret__14981 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14981)))
{{
var G__14986 = ret__14981;
f = G__14986;
continue;
}
} else
{return ret__14981;
}
break;
}
});
var trampoline__14984 = (function() { 
var G__14987__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14987 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14987__delegate.call(this, f, args);
};
G__14987.cljs$lang$maxFixedArity = 1;
G__14987.cljs$lang$applyTo = (function (arglist__14988){
var f = cljs.core.first(arglist__14988);
var args = cljs.core.rest(arglist__14988);
return G__14987__delegate.call(this, f, args);
});
return G__14987;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14983.call(this,f);
default:
return trampoline__14984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14984.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14989 = (function (){
return rand.call(null,1);
});
var rand__14990 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14989.call(this);
case  1 :
return rand__14990.call(this,n);
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
var k__14992 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14992,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14992,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15008 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15009 = (function (h,child,parent){
var or__3548__auto____14998 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14998))
{return or__3548__auto____14998;
} else
{var or__3548__auto____15000 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15000))
{return or__3548__auto____15000;
} else
{var and__3546__auto____15001 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15001))
{var and__3546__auto____15002 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15002))
{var and__3546__auto____15003 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15003))
{var ret__15004 = true;
var i__15005 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15006 = cljs.core.not.call(null,ret__15004);

if(cljs.core.truth_(or__3548__auto____15006))
{return or__3548__auto____15006;
} else
{return cljs.core._EQ_.call(null,i__15005,cljs.core.count.call(null,parent));
}
})()))
{return ret__15004;
} else
{{
var G__15014 = isa_QMARK_.call(null,h,child.call(null,i__15005),parent.call(null,i__15005));
var G__15015 = (i__15005 + 1);
ret__15004 = G__15014;
i__15005 = G__15015;
continue;
}
}
break;
}
} else
{return and__3546__auto____15003;
}
} else
{return and__3546__auto____15002;
}
} else
{return and__3546__auto____15001;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15008.call(this,h,child);
case  3 :
return isa_QMARK___15009.call(this,h,child,parent);
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
var parents__15016 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15017 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15016.call(this,h);
case  2 :
return parents__15017.call(this,h,tag);
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
var ancestors__15021 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15022 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15021.call(this,h);
case  2 :
return ancestors__15022.call(this,h,tag);
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
var descendants__15054 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15086 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15054.call(this,h);
case  2 :
return descendants__15086.call(this,h,tag);
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
var derive__15111 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15112 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15100 = "﷐'parents".call(null,h);
var td__15101 = "﷐'descendants".call(null,h);
var ta__15102 = "﷐'ancestors".call(null,h);
var tf__15105 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15107 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15100.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15102.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15102.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15100,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15105.call(null,"﷐'ancestors".call(null,h),tag,td__15101,parent,ta__15102),"﷐'descendants":tf__15105.call(null,"﷐'descendants".call(null,h),parent,ta__15102,tag,td__15101)});
})());

if(cljs.core.truth_(or__3548__auto____15107))
{return or__3548__auto____15107;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15111.call(this,h,tag);
case  3 :
return derive__15112.call(this,h,tag,parent);
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
var underive__15138 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15140 = (function (h,tag,parent){
var parentMap__15128 = "﷐'parents".call(null,h);
var childsParents__15129 = (cljs.core.truth_(parentMap__15128.call(null,tag))?cljs.core.disj.call(null,parentMap__15128.call(null,tag),parent):cljs.core.set([]));
var newParents__15132 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15129))?cljs.core.assoc.call(null,parentMap__15128,tag,childsParents__15129):cljs.core.dissoc.call(null,parentMap__15128,tag));
var deriv_seq__15135 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15091_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15091_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15091_SHARP_),cljs.core.second.call(null,p1__15091_SHARP_)));
}),cljs.core.seq.call(null,newParents__15132)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15128.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15094_SHARP_,p2__15096_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15094_SHARP_,p2__15096_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15135));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15138.call(this,h,tag);
case  3 :
return underive__15140.call(this,h,tag,parent);
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
var xprefs__15179 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15181 = (cljs.core.truth_((function (){var and__3546__auto____15180 = xprefs__15179;

if(cljs.core.truth_(and__3546__auto____15180))
{return xprefs__15179.call(null,y);
} else
{return and__3546__auto____15180;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15181))
{return or__3548__auto____15181;
} else
{var or__3548__auto____15185 = (function (){var ps__15182 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15182) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15182),prefer_table)))
{} else
{}
{
var G__15193 = cljs.core.rest.call(null,ps__15182);
ps__15182 = G__15193;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15185))
{return or__3548__auto____15185;
} else
{var or__3548__auto____15189 = (function (){var ps__15187 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15187) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15187),y,prefer_table)))
{} else
{}
{
var G__15195 = cljs.core.rest.call(null,ps__15187);
ps__15187 = G__15195;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15189))
{return or__3548__auto____15189;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15200 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15200))
{return or__3548__auto____15200;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15215 = cljs.core.reduce.call(null,(function (be,p__15204){
var vec__15205__15206 = p__15204;
var k__15207 = cljs.core.nth.call(null,vec__15205__15206,0,null);
var ___15208 = cljs.core.nth.call(null,vec__15205__15206,1,null);
var e__15209 = vec__15205__15206;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15207)))
{var be2__15214 = (cljs.core.truth_((function (){var or__3548__auto____15210 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{return cljs.core.dominates.call(null,k__15207,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15209:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15214),k__15207,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15207," and ",cljs.core.first.call(null,be2__15214),", and neither is preferred")));
}
return be2__15214;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15215))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15215));
return cljs.core.second.call(null,best_entry__15215);
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
if(cljs.core.truth_((function (){var and__3546__auto____15217 = mf;

if(cljs.core.truth_(and__3546__auto____15217))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15217;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15218 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15218))
{return or__3548__auto____15218;
} else
{var or__3548__auto____15219 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15219))
{return or__3548__auto____15219;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15220 = mf;

if(cljs.core.truth_(and__3546__auto____15220))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15220;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15223 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15223))
{return or__3548__auto____15223;
} else
{var or__3548__auto____15225 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15225))
{return or__3548__auto____15225;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15231 = mf;

if(cljs.core.truth_(and__3546__auto____15231))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15231;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15232 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15232))
{return or__3548__auto____15232;
} else
{var or__3548__auto____15233 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15233))
{return or__3548__auto____15233;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15300 = mf;

if(cljs.core.truth_(and__3546__auto____15300))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15300;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15302 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
} else
{var or__3548__auto____15303 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15303))
{return or__3548__auto____15303;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15305 = mf;

if(cljs.core.truth_(and__3546__auto____15305))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15305;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15306 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15306))
{return or__3548__auto____15306;
} else
{var or__3548__auto____15307 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15307))
{return or__3548__auto____15307;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15308 = mf;

if(cljs.core.truth_(and__3546__auto____15308))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15308;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15310 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15310))
{return or__3548__auto____15310;
} else
{var or__3548__auto____15358 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15358))
{return or__3548__auto____15358;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15359 = mf;

if(cljs.core.truth_(and__3546__auto____15359))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15359;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15360 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15360))
{return or__3548__auto____15360;
} else
{var or__3548__auto____15361 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15361))
{return or__3548__auto____15361;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15362 = mf;

if(cljs.core.truth_(and__3546__auto____15362))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15362;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15363 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15363))
{return or__3548__auto____15363;
} else
{var or__3548__auto____15364 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15364))
{return or__3548__auto____15364;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15390 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15391 = cljs.core._get_method.call(null,mf,dispatch_val__15390);

if(cljs.core.truth_(target_fn__15391))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15390)));
}
return cljs.core.apply.call(null,target_fn__15391,args);
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
var this__15401 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15404 = this;
cljs.core.swap_BANG_.call(null,this__15404.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15404.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15404.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15404.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15406 = this;
cljs.core.swap_BANG_.call(null,this__15406.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15406.method_cache,this__15406.method_table,this__15406.cached_hierarchy,this__15406.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15409 = this;
cljs.core.swap_BANG_.call(null,this__15409.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15409.method_cache,this__15409.method_table,this__15409.cached_hierarchy,this__15409.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15414 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15414.cached_hierarchy),cljs.core.deref.call(null,this__15414.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15414.method_cache,this__15414.method_table,this__15414.cached_hierarchy,this__15414.hierarchy);
}
var temp__3695__auto____15417 = cljs.core.deref.call(null,this__15414.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15417))
{var target_fn__15418 = temp__3695__auto____15417;

return target_fn__15418;
} else
{var temp__3695__auto____15419 = cljs.core.find_and_cache_best_method.call(null,this__15414.name,dispatch_val,this__15414.hierarchy,this__15414.method_table,this__15414.prefer_table,this__15414.method_cache,this__15414.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15419))
{var target_fn__15420 = temp__3695__auto____15419;

return target_fn__15420;
} else
{return cljs.core.deref.call(null,this__15414.method_table).call(null,this__15414.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15421 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15421.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15421.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15421.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15421.method_cache,this__15421.method_table,this__15421.cached_hierarchy,this__15421.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15423 = this;
return cljs.core.deref.call(null,this__15423.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15427 = this;
return cljs.core.deref.call(null,this__15427.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15428 = this;
return cljs.core.do_dispatch.call(null,mf,this__15428.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15473__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15473 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15473__delegate.call(this, _, args);
};
G__15473.cljs$lang$maxFixedArity = 1;
G__15473.cljs$lang$applyTo = (function (arglist__15474){
var _ = cljs.core.first(arglist__15474);
var args = cljs.core.rest(arglist__15474);
return G__15473__delegate.call(this, _, args);
});
return G__15473;
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
