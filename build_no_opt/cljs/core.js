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
var or__3548__auto____7257 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7257))
{return or__3548__auto____7257;
} else
{var or__3548__auto____7258 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7258))
{return or__3548__auto____7258;
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
var _invoke__7544 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7337 = this$;

if(cljs.core.truth_(and__3546__auto____7337))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7337;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7340 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{var or__3548__auto____7343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7545 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7346 = this$;

if(cljs.core.truth_(and__3546__auto____7346))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7346;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7349 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
} else
{var or__3548__auto____7350 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7546 = (function (this$,a,b){
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
{var or__3548__auto____7362 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7547 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7371 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{var or__3548__auto____7372 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7548 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7376 = this$;

if(cljs.core.truth_(and__3546__auto____7376))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7376;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7380 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7380))
{return or__3548__auto____7380;
} else
{var or__3548__auto____7382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7549 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7385 = this$;

if(cljs.core.truth_(and__3546__auto____7385))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7385;
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
var _invoke__7550 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7395 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{var or__3548__auto____7398 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7551 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7399 = this$;

if(cljs.core.truth_(and__3546__auto____7399))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7399;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7403 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{var or__3548__auto____7405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7552 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7410 = this$;

if(cljs.core.truth_(and__3546__auto____7410))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7410;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7413 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{var or__3548__auto____7442 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7442))
{return or__3548__auto____7442;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7451 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7451))
{return or__3548__auto____7451;
} else
{var or__3548__auto____7467 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7554 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7474 = this$;

if(cljs.core.truth_(and__3546__auto____7474))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7474;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7555 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7480 = this$;

if(cljs.core.truth_(and__3546__auto____7480))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7480;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7482 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7482))
{return or__3548__auto____7482;
} else
{var or__3548__auto____7484 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7484))
{return or__3548__auto____7484;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7556 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7488 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7488))
{return or__3548__auto____7488;
} else
{var or__3548__auto____7489 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7492 = this$;

if(cljs.core.truth_(and__3546__auto____7492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7494 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7494))
{return or__3548__auto____7494;
} else
{var or__3548__auto____7495 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7495))
{return or__3548__auto____7495;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7497 = this$;

if(cljs.core.truth_(and__3546__auto____7497))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7497;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7498 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7498))
{return or__3548__auto____7498;
} else
{var or__3548__auto____7499 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7559 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7501 = this$;

if(cljs.core.truth_(and__3546__auto____7501))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7501;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7502 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{var or__3548__auto____7503 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7503))
{return or__3548__auto____7503;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7560 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7526 = this$;

if(cljs.core.truth_(and__3546__auto____7526))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7526;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7527 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7527))
{return or__3548__auto____7527;
} else
{var or__3548__auto____7528 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7528))
{return or__3548__auto____7528;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7529 = this$;

if(cljs.core.truth_(and__3546__auto____7529))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7529;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7530 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7530))
{return or__3548__auto____7530;
} else
{var or__3548__auto____7531 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7531))
{return or__3548__auto____7531;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7562 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7532 = this$;

if(cljs.core.truth_(and__3546__auto____7532))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7532;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7533 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{var or__3548__auto____7534 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7563 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7535 = this$;

if(cljs.core.truth_(and__3546__auto____7535))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7535;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7536 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{var or__3548__auto____7537 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7564 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7538 = this$;

if(cljs.core.truth_(and__3546__auto____7538))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7538;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7539 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{var or__3548__auto____7540 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
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
return _invoke__7544.call(this,this$);
case  2 :
return _invoke__7545.call(this,this$,a);
case  3 :
return _invoke__7546.call(this,this$,a,b);
case  4 :
return _invoke__7547.call(this,this$,a,b,c);
case  5 :
return _invoke__7548.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7549.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7550.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7551.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7552.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7554.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7555.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7556.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7559.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7560.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7562.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7563.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7564.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7665 = coll;

if(cljs.core.truth_(and__3546__auto____7665))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7665;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7668 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7668))
{return or__3548__auto____7668;
} else
{var or__3548__auto____7669 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7669))
{return or__3548__auto____7669;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7671 = coll;

if(cljs.core.truth_(and__3546__auto____7671))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7671;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7674 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7674))
{return or__3548__auto____7674;
} else
{var or__3548__auto____7675 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7675))
{return or__3548__auto____7675;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7681 = coll;

if(cljs.core.truth_(and__3546__auto____7681))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7681;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7685 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7685))
{return or__3548__auto____7685;
} else
{var or__3548__auto____7687 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7687))
{return or__3548__auto____7687;
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
var _nth__7709 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7695 = coll;

if(cljs.core.truth_(and__3546__auto____7695))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7695;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7699 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7699))
{return or__3548__auto____7699;
} else
{var or__3548__auto____7700 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7700))
{return or__3548__auto____7700;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7710 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7702;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7705 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7705))
{return or__3548__auto____7705;
} else
{var or__3548__auto____7706 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
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
return _nth__7709.call(this,coll,n);
case  3 :
return _nth__7710.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7720 = coll;

if(cljs.core.truth_(and__3546__auto____7720))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7720;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7722 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{var or__3548__auto____7724 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7725 = coll;

if(cljs.core.truth_(and__3546__auto____7725))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7725;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7726 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
} else
{var or__3548__auto____7728 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
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
var _lookup__7756 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7745 = o;

if(cljs.core.truth_(and__3546__auto____7745))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7745;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7746 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
} else
{var or__3548__auto____7747 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7747))
{return or__3548__auto____7747;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7757 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7749 = o;

if(cljs.core.truth_(and__3546__auto____7749))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7749;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7752 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7752))
{return or__3548__auto____7752;
} else
{var or__3548__auto____7753 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7753))
{return or__3548__auto____7753;
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
return _lookup__7756.call(this,o,k);
case  3 :
return _lookup__7757.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7772 = coll;

if(cljs.core.truth_(and__3546__auto____7772))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7772;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7775 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7775))
{return or__3548__auto____7775;
} else
{var or__3548__auto____7777 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7781 = coll;

if(cljs.core.truth_(and__3546__auto____7781))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7781;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7782 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7782))
{return or__3548__auto____7782;
} else
{var or__3548__auto____7783 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7799 = coll;

if(cljs.core.truth_(and__3546__auto____7799))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7799;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7801 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
} else
{var or__3548__auto____7802 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7802))
{return or__3548__auto____7802;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7900 = coll;

if(cljs.core.truth_(and__3546__auto____7900))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7900;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7902 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{var or__3548__auto____7904 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7915 = coll;

if(cljs.core.truth_(and__3546__auto____7915))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7915;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7925 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7927 = coll;

if(cljs.core.truth_(and__3546__auto____7927))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7927;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7931 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7934 = coll;

if(cljs.core.truth_(and__3546__auto____7934))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7934;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7935 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{var or__3548__auto____7936 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7991 = o;

if(cljs.core.truth_(and__3546__auto____7991))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7991;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7994 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7994))
{return or__3548__auto____7994;
} else
{var or__3548__auto____7998 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7999 = o;

if(cljs.core.truth_(and__3546__auto____7999))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7999;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8003 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8003))
{return or__3548__auto____8003;
} else
{var or__3548__auto____8005 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8013 = o;

if(cljs.core.truth_(and__3546__auto____8013))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8013;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8018 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{var or__3548__auto____8019 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8019))
{return or__3548__auto____8019;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8024 = o;

if(cljs.core.truth_(and__3546__auto____8024))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8024;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
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
var _reduce__8064 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8049 = coll;

if(cljs.core.truth_(and__3546__auto____8049))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8049;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8054 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{var or__3548__auto____8057 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8065 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8061 = coll;

if(cljs.core.truth_(and__3546__auto____8061))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8061;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8062 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8062))
{return or__3548__auto____8062;
} else
{var or__3548__auto____8063 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8063))
{return or__3548__auto____8063;
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
return _reduce__8064.call(this,coll,f);
case  3 :
return _reduce__8065.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8080 = o;

if(cljs.core.truth_(and__3546__auto____8080))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8080;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8084 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{var or__3548__auto____8085 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8085))
{return or__3548__auto____8085;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8126 = o;

if(cljs.core.truth_(and__3546__auto____8126))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8126;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8127 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{var or__3548__auto____8128 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8128))
{return or__3548__auto____8128;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8149 = o;

if(cljs.core.truth_(and__3546__auto____8149))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8149;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8150 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
} else
{var or__3548__auto____8152 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8152))
{return or__3548__auto____8152;
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
if(cljs.core.truth_((function (){var and__3546__auto____8156 = o;

if(cljs.core.truth_(and__3546__auto____8156))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8156;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8157 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{var or__3548__auto____8158 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8158))
{return or__3548__auto____8158;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8159 = d;

if(cljs.core.truth_(and__3546__auto____8159))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8159;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8160 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
} else
{var or__3548__auto____8161 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8161))
{return or__3548__auto____8161;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8166 = this$;

if(cljs.core.truth_(and__3546__auto____8166))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8166;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8171 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8171))
{return or__3548__auto____8171;
} else
{var or__3548__auto____8172 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8172))
{return or__3548__auto____8172;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8173 = this$;

if(cljs.core.truth_(and__3546__auto____8173))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8173;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8174 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8174))
{return or__3548__auto____8174;
} else
{var or__3548__auto____8179 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8179))
{return or__3548__auto____8179;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8180 = this$;

if(cljs.core.truth_(and__3546__auto____8180))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8180;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8181 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{var or__3548__auto____8184 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8184))
{return or__3548__auto____8184;
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
var G__8217 = null;
var G__8217__8218 = (function (o,k){
return null;
});
var G__8217__8219 = (function (o,k,not_found){
return not_found;
});
G__8217 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8217__8218.call(this,o,k);
case  3 :
return G__8217__8219.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8217;
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
var G__8224 = null;
var G__8224__8225 = (function (_,f){
return f.call(null);
});
var G__8224__8226 = (function (_,f,start){
return start;
});
G__8224 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8224__8225.call(this,_,f);
case  3 :
return G__8224__8226.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8224;
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
var G__8233 = null;
var G__8233__8234 = (function (_,n){
return null;
});
var G__8233__8235 = (function (_,n,not_found){
return not_found;
});
G__8233 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8233__8234.call(this,_,n);
case  3 :
return G__8233__8235.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8233;
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
var ci_reduce__8348 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8342 = cljs.core._nth.call(null,cicoll,0);
var n__8343 = 1;

while(true){
if(cljs.core.truth_((n__8343 < cljs.core._count.call(null,cicoll))))
{{
var G__8352 = f.call(null,val__8342,cljs.core._nth.call(null,cicoll,n__8343));
var G__8353 = (n__8343 + 1);
val__8342 = G__8352;
n__8343 = G__8353;
continue;
}
} else
{return val__8342;
}
break;
}
}
});
var ci_reduce__8349 = (function (cicoll,f,val){
var val__8344 = val;
var n__8345 = 0;

while(true){
if(cljs.core.truth_((n__8345 < cljs.core._count.call(null,cicoll))))
{{
var G__8354 = f.call(null,val__8344,cljs.core._nth.call(null,cicoll,n__8345));
var G__8355 = (n__8345 + 1);
val__8344 = G__8354;
n__8345 = G__8355;
continue;
}
} else
{return val__8344;
}
break;
}
});
var ci_reduce__8350 = (function (cicoll,f,val,idx){
var val__8346 = val;
var n__8347 = idx;

while(true){
if(cljs.core.truth_((n__8347 < cljs.core._count.call(null,cicoll))))
{{
var G__8365 = f.call(null,val__8346,cljs.core._nth.call(null,cicoll,n__8347));
var G__8366 = (n__8347 + 1);
val__8346 = G__8365;
n__8347 = G__8366;
continue;
}
} else
{return val__8346;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8348.call(this,cicoll,f);
case  3 :
return ci_reduce__8349.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8350.call(this,cicoll,f,val,idx);
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
var this__8379 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8394 = null;
var G__8394__8395 = (function (_,f){
var this__8380 = this;
return cljs.core.ci_reduce.call(null,this__8380.a,f,(this__8380.a[this__8380.i]),(this__8380.i + 1));
});
var G__8394__8396 = (function (_,f,start){
var this__8381 = this;
return cljs.core.ci_reduce.call(null,this__8381.a,f,start,this__8381.i);
});
G__8394 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8394__8395.call(this,_,f);
case  3 :
return G__8394__8396.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8394;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8382 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8383 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8398 = null;
var G__8398__8399 = (function (coll,n){
var this__8384 = this;
var i__8385 = (n + this__8384.i);

if(cljs.core.truth_((i__8385 < this__8384.a.length)))
{return (this__8384.a[i__8385]);
} else
{return null;
}
});
var G__8398__8400 = (function (coll,n,not_found){
var this__8388 = this;
var i__8389 = (n + this__8388.i);

if(cljs.core.truth_((i__8389 < this__8388.a.length)))
{return (this__8388.a[i__8389]);
} else
{return not_found;
}
});
G__8398 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8398__8399.call(this,coll,n);
case  3 :
return G__8398__8400.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8398;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8390 = this;
return (this__8390.a.length - this__8390.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8391 = this;
return (this__8391.a[this__8391.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8392 = this;
if(cljs.core.truth_(((this__8392.i + 1) < this__8392.a.length)))
{return (new cljs.core.IndexedSeq(this__8392.a,(this__8392.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8393 = this;
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
var G__8407 = null;
var G__8407__8408 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8407__8423 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8407 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8407__8408.call(this,array,f);
case  3 :
return G__8407__8423.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8407;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8425 = null;
var G__8425__8426 = (function (array,k){
return (array[k]);
});
var G__8425__8427 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8425 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8425__8426.call(this,array,k);
case  3 :
return G__8425__8427.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8425;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8429 = null;
var G__8429__8430 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8429__8431 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8429 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8429__8430.call(this,array,n);
case  3 :
return G__8429__8431.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8429;
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
var temp__3698__auto____8433 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8433))
{var s__8434 = temp__3698__auto____8433;

return cljs.core._first.call(null,s__8434);
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
var G__8523 = cljs.core.next.call(null,s);
s = G__8523;
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
var s__8528 = cljs.core.seq.call(null,x);
var n__8530 = 0;

while(true){
if(cljs.core.truth_(s__8528))
{{
var G__8532 = cljs.core.next.call(null,s__8528);
var G__8533 = (n__8530 + 1);
s__8528 = G__8532;
n__8530 = G__8533;
continue;
}
} else
{return n__8530;
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
var conj__8534 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8535 = (function() { 
var G__8539__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8540 = conj.call(null,coll,x);
var G__8541 = cljs.core.first.call(null,xs);
var G__8542 = cljs.core.next.call(null,xs);
coll = G__8540;
x = G__8541;
xs = G__8542;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8539 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8539__delegate.call(this, coll, x, xs);
};
G__8539.cljs$lang$maxFixedArity = 2;
G__8539.cljs$lang$applyTo = (function (arglist__8543){
var coll = cljs.core.first(arglist__8543);
var x = cljs.core.first(cljs.core.next(arglist__8543));
var xs = cljs.core.rest(cljs.core.next(arglist__8543));
return G__8539__delegate.call(this, coll, x, xs);
});
return G__8539;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8534.call(this,coll,x);
default:
return conj__8535.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8535.cljs$lang$applyTo;
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
var nth__8549 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8550 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8549.call(this,coll,n);
case  3 :
return nth__8550.call(this,coll,n,not_found);
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
var get__8588 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8589 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8588.call(this,o,k);
case  3 :
return get__8589.call(this,o,k,not_found);
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
var assoc__8597 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8598 = (function() { 
var G__8600__delegate = function (coll,k,v,kvs){
while(true){
var ret__8596 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8601 = ret__8596;
var G__8602 = cljs.core.first.call(null,kvs);
var G__8603 = cljs.core.second.call(null,kvs);
var G__8604 = cljs.core.nnext.call(null,kvs);
coll = G__8601;
k = G__8602;
v = G__8603;
kvs = G__8604;
continue;
}
} else
{return ret__8596;
}
break;
}
};
var G__8600 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8600__delegate.call(this, coll, k, v, kvs);
};
G__8600.cljs$lang$maxFixedArity = 3;
G__8600.cljs$lang$applyTo = (function (arglist__8610){
var coll = cljs.core.first(arglist__8610);
var k = cljs.core.first(cljs.core.next(arglist__8610));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8610)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8610)));
return G__8600__delegate.call(this, coll, k, v, kvs);
});
return G__8600;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8597.call(this,coll,k,v);
default:
return assoc__8598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8598.cljs$lang$applyTo;
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
var dissoc__8671 = (function (coll){
return coll;
});
var dissoc__8672 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8673 = (function() { 
var G__8680__delegate = function (coll,k,ks){
while(true){
var ret__8662 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8682 = ret__8662;
var G__8683 = cljs.core.first.call(null,ks);
var G__8685 = cljs.core.next.call(null,ks);
coll = G__8682;
k = G__8683;
ks = G__8685;
continue;
}
} else
{return ret__8662;
}
break;
}
};
var G__8680 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8680__delegate.call(this, coll, k, ks);
};
G__8680.cljs$lang$maxFixedArity = 2;
G__8680.cljs$lang$applyTo = (function (arglist__8686){
var coll = cljs.core.first(arglist__8686);
var k = cljs.core.first(cljs.core.next(arglist__8686));
var ks = cljs.core.rest(cljs.core.next(arglist__8686));
return G__8680__delegate.call(this, coll, k, ks);
});
return G__8680;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8671.call(this,coll);
case  2 :
return dissoc__8672.call(this,coll,k);
default:
return dissoc__8673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8673.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8687 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8689 = x__445__auto____8687;

if(cljs.core.truth_(and__3546__auto____8689))
{var and__3546__auto____8691 = x__445__auto____8687.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8691))
{return cljs.core.not.call(null,x__445__auto____8687.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8691;
}
} else
{return and__3546__auto____8689;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8687);
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
var disj__8714 = (function (coll){
return coll;
});
var disj__8715 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8716 = (function() { 
var G__8719__delegate = function (coll,k,ks){
while(true){
var ret__8713 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8723 = ret__8713;
var G__8724 = cljs.core.first.call(null,ks);
var G__8725 = cljs.core.next.call(null,ks);
coll = G__8723;
k = G__8724;
ks = G__8725;
continue;
}
} else
{return ret__8713;
}
break;
}
};
var G__8719 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8719__delegate.call(this, coll, k, ks);
};
G__8719.cljs$lang$maxFixedArity = 2;
G__8719.cljs$lang$applyTo = (function (arglist__8728){
var coll = cljs.core.first(arglist__8728);
var k = cljs.core.first(cljs.core.next(arglist__8728));
var ks = cljs.core.rest(cljs.core.next(arglist__8728));
return G__8719__delegate.call(this, coll, k, ks);
});
return G__8719;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8714.call(this,coll);
case  2 :
return disj__8715.call(this,coll,k);
default:
return disj__8716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8716.cljs$lang$applyTo;
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
{var x__445__auto____8731 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8733 = x__445__auto____8731;

if(cljs.core.truth_(and__3546__auto____8733))
{var and__3546__auto____8734 = x__445__auto____8731.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8734))
{return cljs.core.not.call(null,x__445__auto____8731.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8734;
}
} else
{return and__3546__auto____8733;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8731);
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
{var x__445__auto____8777 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8778 = x__445__auto____8777;

if(cljs.core.truth_(and__3546__auto____8778))
{var and__3546__auto____8779 = x__445__auto____8777.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8779))
{return cljs.core.not.call(null,x__445__auto____8777.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8779;
}
} else
{return and__3546__auto____8778;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8777);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8784 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8786 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8786))
{var and__3546__auto____8788 = x__445__auto____8784.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8788))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8788;
}
} else
{return and__3546__auto____8786;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8784);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8793 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8794 = x__445__auto____8793;

if(cljs.core.truth_(and__3546__auto____8794))
{var and__3546__auto____8795 = x__445__auto____8793.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8795))
{return cljs.core.not.call(null,x__445__auto____8793.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8795;
}
} else
{return and__3546__auto____8794;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8793);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8801 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8803 = x__445__auto____8801;

if(cljs.core.truth_(and__3546__auto____8803))
{var and__3546__auto____8805 = x__445__auto____8801.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8805))
{return cljs.core.not.call(null,x__445__auto____8801.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8805;
}
} else
{return and__3546__auto____8803;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8801);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8810 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8811 = x__445__auto____8810;

if(cljs.core.truth_(and__3546__auto____8811))
{var and__3546__auto____8813 = x__445__auto____8810.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8813))
{return cljs.core.not.call(null,x__445__auto____8810.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8813;
}
} else
{return and__3546__auto____8811;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8810);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8828 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8829 = x__445__auto____8828;

if(cljs.core.truth_(and__3546__auto____8829))
{var and__3546__auto____8830 = x__445__auto____8828.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8830))
{return cljs.core.not.call(null,x__445__auto____8828.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8830;
}
} else
{return and__3546__auto____8829;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8828);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8834 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8834.push(key);
}));
return keys__8834;
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
{var x__445__auto____8845 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8846 = x__445__auto____8845;

if(cljs.core.truth_(and__3546__auto____8846))
{var and__3546__auto____8847 = x__445__auto____8845.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8847))
{return cljs.core.not.call(null,x__445__auto____8845.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8847;
}
} else
{return and__3546__auto____8846;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8845);
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
var and__3546__auto____8851 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8851))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8852 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8852))
{return or__3548__auto____8852;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8851;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8855 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8855))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8855;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8856 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8856))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8856;
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
var and__3546__auto____8860 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8860))
{return (n == n.toFixed());
} else
{return and__3546__auto____8860;
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
if(cljs.core.truth_((function (){var and__3546__auto____8922 = coll;

if(cljs.core.truth_(and__3546__auto____8922))
{var and__3546__auto____8923 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8923))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8923;
}
} else
{return and__3546__auto____8922;
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
var distinct_QMARK___8964 = (function (x){
return true;
});
var distinct_QMARK___8965 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8966 = (function() { 
var G__8968__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8956 = cljs.core.set([y,x]);
var xs__8957 = more;

while(true){
var x__8959 = cljs.core.first.call(null,xs__8957);
var etc__8960 = cljs.core.next.call(null,xs__8957);

if(cljs.core.truth_(xs__8957))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8956,x__8959)))
{return false;
} else
{{
var G__8969 = cljs.core.conj.call(null,s__8956,x__8959);
var G__8970 = etc__8960;
s__8956 = G__8969;
xs__8957 = G__8970;
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
var G__8968 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8968__delegate.call(this, x, y, more);
};
G__8968.cljs$lang$maxFixedArity = 2;
G__8968.cljs$lang$applyTo = (function (arglist__8971){
var x = cljs.core.first(arglist__8971);
var y = cljs.core.first(cljs.core.next(arglist__8971));
var more = cljs.core.rest(cljs.core.next(arglist__8971));
return G__8968__delegate.call(this, x, y, more);
});
return G__8968;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8964.call(this,x);
case  2 :
return distinct_QMARK___8965.call(this,x,y);
default:
return distinct_QMARK___8966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8966.cljs$lang$applyTo;
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
var r__8975 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8975)))
{return r__8975;
} else
{if(cljs.core.truth_(r__8975))
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
var sort__8984 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8985 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8981 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8981,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8981);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8984.call(this,comp);
case  2 :
return sort__8985.call(this,comp,coll);
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
var sort_by__8993 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8994 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8993.call(this,keyfn,comp);
case  3 :
return sort_by__8994.call(this,keyfn,comp,coll);
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
var reduce__9000 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9001 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9000.call(this,f,val);
case  3 :
return reduce__9001.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9014 = (function (f,coll){
var temp__3695__auto____9003 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9003))
{var s__9009 = temp__3695__auto____9003;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9009),cljs.core.next.call(null,s__9009));
} else
{return f.call(null);
}
});
var seq_reduce__9015 = (function (f,val,coll){
var val__9011 = val;
var coll__9013 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9013))
{{
var G__9025 = f.call(null,val__9011,cljs.core.first.call(null,coll__9013));
var G__9026 = cljs.core.next.call(null,coll__9013);
val__9011 = G__9025;
coll__9013 = G__9026;
continue;
}
} else
{return val__9011;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9014.call(this,f,val);
case  3 :
return seq_reduce__9015.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9028 = null;
var G__9028__9031 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9028__9033 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9028 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9028__9031.call(this,coll,f);
case  3 :
return G__9028__9033.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9028;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9047 = (function (){
return 0;
});
var _PLUS___9048 = (function (x){
return x;
});
var _PLUS___9049 = (function (x,y){
return (x + y);
});
var _PLUS___9050 = (function() { 
var G__9052__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9052 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9052__delegate.call(this, x, y, more);
};
G__9052.cljs$lang$maxFixedArity = 2;
G__9052.cljs$lang$applyTo = (function (arglist__9103){
var x = cljs.core.first(arglist__9103);
var y = cljs.core.first(cljs.core.next(arglist__9103));
var more = cljs.core.rest(cljs.core.next(arglist__9103));
return G__9052__delegate.call(this, x, y, more);
});
return G__9052;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9047.call(this);
case  1 :
return _PLUS___9048.call(this,x);
case  2 :
return _PLUS___9049.call(this,x,y);
default:
return _PLUS___9050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9050.cljs$lang$applyTo;
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
var ___9199 = (function (x){
return (- x);
});
var ___9200 = (function (x,y){
return (x - y);
});
var ___9201 = (function() { 
var G__9204__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9204 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9204__delegate.call(this, x, y, more);
};
G__9204.cljs$lang$maxFixedArity = 2;
G__9204.cljs$lang$applyTo = (function (arglist__9205){
var x = cljs.core.first(arglist__9205);
var y = cljs.core.first(cljs.core.next(arglist__9205));
var more = cljs.core.rest(cljs.core.next(arglist__9205));
return G__9204__delegate.call(this, x, y, more);
});
return G__9204;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9199.call(this,x);
case  2 :
return ___9200.call(this,x,y);
default:
return ___9201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9201.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9208 = (function (){
return 1;
});
var _STAR___9209 = (function (x){
return x;
});
var _STAR___9210 = (function (x,y){
return (x * y);
});
var _STAR___9211 = (function() { 
var G__9213__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9213 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9213__delegate.call(this, x, y, more);
};
G__9213.cljs$lang$maxFixedArity = 2;
G__9213.cljs$lang$applyTo = (function (arglist__9216){
var x = cljs.core.first(arglist__9216);
var y = cljs.core.first(cljs.core.next(arglist__9216));
var more = cljs.core.rest(cljs.core.next(arglist__9216));
return G__9213__delegate.call(this, x, y, more);
});
return G__9213;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9208.call(this);
case  1 :
return _STAR___9209.call(this,x);
case  2 :
return _STAR___9210.call(this,x,y);
default:
return _STAR___9211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9211.cljs$lang$applyTo;
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
var _SLASH___9220 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9221 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9222 = (function() { 
var G__9229__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9229 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9229__delegate.call(this, x, y, more);
};
G__9229.cljs$lang$maxFixedArity = 2;
G__9229.cljs$lang$applyTo = (function (arglist__9233){
var x = cljs.core.first(arglist__9233);
var y = cljs.core.first(cljs.core.next(arglist__9233));
var more = cljs.core.rest(cljs.core.next(arglist__9233));
return G__9229__delegate.call(this, x, y, more);
});
return G__9229;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9220.call(this,x);
case  2 :
return _SLASH___9221.call(this,x,y);
default:
return _SLASH___9222.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9222.cljs$lang$applyTo;
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
var _LT___9242 = (function (x){
return true;
});
var _LT___9243 = (function (x,y){
return (x < y);
});
var _LT___9244 = (function() { 
var G__9249__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9251 = y;
var G__9252 = cljs.core.first.call(null,more);
var G__9253 = cljs.core.next.call(null,more);
x = G__9251;
y = G__9252;
more = G__9253;
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
var G__9249 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9249__delegate.call(this, x, y, more);
};
G__9249.cljs$lang$maxFixedArity = 2;
G__9249.cljs$lang$applyTo = (function (arglist__9259){
var x = cljs.core.first(arglist__9259);
var y = cljs.core.first(cljs.core.next(arglist__9259));
var more = cljs.core.rest(cljs.core.next(arglist__9259));
return G__9249__delegate.call(this, x, y, more);
});
return G__9249;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9242.call(this,x);
case  2 :
return _LT___9243.call(this,x,y);
default:
return _LT___9244.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9244.cljs$lang$applyTo;
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
var _LT__EQ___9266 = (function (x){
return true;
});
var _LT__EQ___9267 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9268 = (function() { 
var G__9270__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9275 = y;
var G__9276 = cljs.core.first.call(null,more);
var G__9277 = cljs.core.next.call(null,more);
x = G__9275;
y = G__9276;
more = G__9277;
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
var G__9270 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9270__delegate.call(this, x, y, more);
};
G__9270.cljs$lang$maxFixedArity = 2;
G__9270.cljs$lang$applyTo = (function (arglist__9286){
var x = cljs.core.first(arglist__9286);
var y = cljs.core.first(cljs.core.next(arglist__9286));
var more = cljs.core.rest(cljs.core.next(arglist__9286));
return G__9270__delegate.call(this, x, y, more);
});
return G__9270;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9266.call(this,x);
case  2 :
return _LT__EQ___9267.call(this,x,y);
default:
return _LT__EQ___9268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9268.cljs$lang$applyTo;
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
var _GT___9293 = (function (x){
return true;
});
var _GT___9294 = (function (x,y){
return (x > y);
});
var _GT___9295 = (function() { 
var G__9301__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9303 = y;
var G__9305 = cljs.core.first.call(null,more);
var G__9308 = cljs.core.next.call(null,more);
x = G__9303;
y = G__9305;
more = G__9308;
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
var G__9301 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9301__delegate.call(this, x, y, more);
};
G__9301.cljs$lang$maxFixedArity = 2;
G__9301.cljs$lang$applyTo = (function (arglist__9314){
var x = cljs.core.first(arglist__9314);
var y = cljs.core.first(cljs.core.next(arglist__9314));
var more = cljs.core.rest(cljs.core.next(arglist__9314));
return G__9301__delegate.call(this, x, y, more);
});
return G__9301;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9293.call(this,x);
case  2 :
return _GT___9294.call(this,x,y);
default:
return _GT___9295.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9295.cljs$lang$applyTo;
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
var _GT__EQ___9357 = (function (x){
return true;
});
var _GT__EQ___9358 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9359 = (function() { 
var G__9363__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9365 = y;
var G__9366 = cljs.core.first.call(null,more);
var G__9367 = cljs.core.next.call(null,more);
x = G__9365;
y = G__9366;
more = G__9367;
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
var G__9363 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9363__delegate.call(this, x, y, more);
};
G__9363.cljs$lang$maxFixedArity = 2;
G__9363.cljs$lang$applyTo = (function (arglist__9372){
var x = cljs.core.first(arglist__9372);
var y = cljs.core.first(cljs.core.next(arglist__9372));
var more = cljs.core.rest(cljs.core.next(arglist__9372));
return G__9363__delegate.call(this, x, y, more);
});
return G__9363;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9357.call(this,x);
case  2 :
return _GT__EQ___9358.call(this,x,y);
default:
return _GT__EQ___9359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9359.cljs$lang$applyTo;
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
var max__9378 = (function (x){
return x;
});
var max__9379 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9380 = (function() { 
var G__9382__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9382 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9382__delegate.call(this, x, y, more);
};
G__9382.cljs$lang$maxFixedArity = 2;
G__9382.cljs$lang$applyTo = (function (arglist__9387){
var x = cljs.core.first(arglist__9387);
var y = cljs.core.first(cljs.core.next(arglist__9387));
var more = cljs.core.rest(cljs.core.next(arglist__9387));
return G__9382__delegate.call(this, x, y, more);
});
return G__9382;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9378.call(this,x);
case  2 :
return max__9379.call(this,x,y);
default:
return max__9380.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9380.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9394 = (function (x){
return x;
});
var min__9396 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9397 = (function() { 
var G__9399__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9399 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9399__delegate.call(this, x, y, more);
};
G__9399.cljs$lang$maxFixedArity = 2;
G__9399.cljs$lang$applyTo = (function (arglist__9400){
var x = cljs.core.first(arglist__9400);
var y = cljs.core.first(cljs.core.next(arglist__9400));
var more = cljs.core.rest(cljs.core.next(arglist__9400));
return G__9399__delegate.call(this, x, y, more);
});
return G__9399;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9394.call(this,x);
case  2 :
return min__9396.call(this,x,y);
default:
return min__9397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9397.cljs$lang$applyTo;
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
var rem__9425 = (n % d);

return cljs.core.fix.call(null,((n - rem__9425) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9426 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9426));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9428 = (function (){
return Math.random.call(null);
});
var rand__9429 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9428.call(this);
case  1 :
return rand__9429.call(this,n);
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
var _EQ__EQ___9452 = (function (x){
return true;
});
var _EQ__EQ___9453 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9454 = (function() { 
var G__9456__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9457 = y;
var G__9458 = cljs.core.first.call(null,more);
var G__9459 = cljs.core.next.call(null,more);
x = G__9457;
y = G__9458;
more = G__9459;
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
var G__9456 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9456__delegate.call(this, x, y, more);
};
G__9456.cljs$lang$maxFixedArity = 2;
G__9456.cljs$lang$applyTo = (function (arglist__9464){
var x = cljs.core.first(arglist__9464);
var y = cljs.core.first(cljs.core.next(arglist__9464));
var more = cljs.core.rest(cljs.core.next(arglist__9464));
return G__9456__delegate.call(this, x, y, more);
});
return G__9456;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9452.call(this,x);
case  2 :
return _EQ__EQ___9453.call(this,x,y);
default:
return _EQ__EQ___9454.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9454.cljs$lang$applyTo;
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
var n__9470 = n;
var xs__9471 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9472 = xs__9471;

if(cljs.core.truth_(and__3546__auto____9472))
{return (n__9470 > 0);
} else
{return and__3546__auto____9472;
}
})()))
{{
var G__9512 = (n__9470 - 1);
var G__9513 = cljs.core.next.call(null,xs__9471);
n__9470 = G__9512;
xs__9471 = G__9513;
continue;
}
} else
{return xs__9471;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9521 = null;
var G__9521__9522 = (function (coll,n){
var temp__3695__auto____9514 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9514))
{var xs__9515 = temp__3695__auto____9514;

return cljs.core.first.call(null,xs__9515);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9521__9523 = (function (coll,n,not_found){
var temp__3695__auto____9518 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9518))
{var xs__9520 = temp__3695__auto____9518;

return cljs.core.first.call(null,xs__9520);
} else
{return not_found;
}
});
G__9521 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9521__9522.call(this,coll,n);
case  3 :
return G__9521__9523.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9521;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9530 = (function (){
return "";
});
var str_STAR___9531 = (function (x){
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
var str_STAR___9532 = (function() { 
var G__9535__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9540 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9541 = cljs.core.next.call(null,more);
sb = G__9540;
more = G__9541;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9535 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9535__delegate.call(this, x, ys);
};
G__9535.cljs$lang$maxFixedArity = 1;
G__9535.cljs$lang$applyTo = (function (arglist__9546){
var x = cljs.core.first(arglist__9546);
var ys = cljs.core.rest(arglist__9546);
return G__9535__delegate.call(this, x, ys);
});
return G__9535;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9530.call(this);
case  1 :
return str_STAR___9531.call(this,x);
default:
return str_STAR___9532.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9532.cljs$lang$applyTo;
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
var str__9556 = (function (){
return "";
});
var str__9557 = (function (x){
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
var str__9558 = (function() { 
var G__9563__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9563 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9563__delegate.call(this, x, ys);
};
G__9563.cljs$lang$maxFixedArity = 1;
G__9563.cljs$lang$applyTo = (function (arglist__9564){
var x = cljs.core.first(arglist__9564);
var ys = cljs.core.rest(arglist__9564);
return G__9563__delegate.call(this, x, ys);
});
return G__9563;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9556.call(this);
case  1 :
return str__9557.call(this,x);
default:
return str__9558.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9558.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9568 = (function (s,start){
return s.substring(start);
});
var subs__9569 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9568.call(this,s,start);
case  3 :
return subs__9569.call(this,s,start,end);
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
var symbol__9574 = (function (name){
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
var symbol__9575 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9574.call(this,ns);
case  2 :
return symbol__9575.call(this,ns,name);
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
var keyword__9577 = (function (name){
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
var keyword__9578 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9577.call(this,ns);
case  2 :
return keyword__9578.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9637 = cljs.core.seq.call(null,x);
var ys__9638 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9637)))
{return cljs.core.nil_QMARK_.call(null,ys__9638);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9638)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9637),cljs.core.first.call(null,ys__9638))))
{{
var G__9657 = cljs.core.next.call(null,xs__9637);
var G__9658 = cljs.core.next.call(null,ys__9638);
xs__9637 = G__9657;
ys__9638 = G__9658;
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
return cljs.core.reduce.call(null,(function (p1__9659_SHARP_,p2__9660_SHARP_){
return cljs.core.hash_combine.call(null,p1__9659_SHARP_,cljs.core.hash.call(null,p2__9660_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9733__9734 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9733__9734))
{var G__9736__9738 = cljs.core.first.call(null,G__9733__9734);
var vec__9737__9739 = G__9736__9738;
var key_name__9740 = cljs.core.nth.call(null,vec__9737__9739,0,null);
var f__9741 = cljs.core.nth.call(null,vec__9737__9739,1,null);
var G__9733__9742 = G__9733__9734;

var G__9736__9743 = G__9736__9738;
var G__9733__9744 = G__9733__9742;

while(true){
var vec__9745__9746 = G__9736__9743;
var key_name__9747 = cljs.core.nth.call(null,vec__9745__9746,0,null);
var f__9748 = cljs.core.nth.call(null,vec__9745__9746,1,null);
var G__9733__9749 = G__9733__9744;

var str_name__9750 = cljs.core.name.call(null,key_name__9747);

obj[str_name__9750] = f__9748;
var temp__3698__auto____9751 = cljs.core.next.call(null,G__9733__9749);

if(cljs.core.truth_(temp__3698__auto____9751))
{var G__9733__9752 = temp__3698__auto____9751;

{
var G__9849 = cljs.core.first.call(null,G__9733__9752);
var G__9850 = G__9733__9752;
G__9736__9743 = G__9849;
G__9733__9744 = G__9850;
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
var this__9851 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9854 = this;
return (new cljs.core.List(this__9854.meta,o,coll,(this__9854.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9856 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9859 = this;
return this__9859.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9860 = this;
return this__9860.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9861 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9862 = this;
return this__9862.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9863 = this;
return this__9863.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9883 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9885 = this;
return (new cljs.core.List(meta,this__9885.first,this__9885.rest,this__9885.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9887 = this;
return this__9887.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9888 = this;
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
var this__9895 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9896 = this;
return (new cljs.core.List(this__9896.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9898 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9900 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9901 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9903 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9905 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9906 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9908 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9911 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9914 = this;
return this__9914.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9915 = this;
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
list.cljs$lang$applyTo = (function (arglist__9928){
var items = cljs.core.seq( arglist__9928 );;
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
var this__9929 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9930 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9931 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9933 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9933.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9935 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9937 = this;
return this__9937.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9939 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9939.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9939.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9942 = this;
return this__9942.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9943 = this;
return (new cljs.core.Cons(meta,this__9943.first,this__9943.rest));
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
var G__9974 = null;
var G__9974__9976 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9974__9977 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9974 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9974__9976.call(this,string,f);
case  3 :
return G__9974__9977.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9974;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9979 = null;
var G__9979__9980 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9979__9981 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9979 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9979__9980.call(this,string,k);
case  3 :
return G__9979__9981.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9979;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9983 = null;
var G__9983__9984 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9983__9985 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9983 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9983__9984.call(this,string,n);
case  3 :
return G__9983__9985.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9983;
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
var G__9991 = null;
var G__9991__9992 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9991__9993 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9991 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9991__9992.call(this,this$,coll);
case  3 :
return G__9991__9993.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9991;
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
var x__9997 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9997;
} else
{lazy_seq.x = x__9997.call(null);
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
var this__10017 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10023 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10025 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10028 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10028.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10030 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10031 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10034 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10036 = this;
return this__10036.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10038 = this;
return (new cljs.core.LazySeq(meta,this__10038.realized,this__10038.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10052 = cljs.core.array.call(null);

var s__10053 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10053)))
{ary__10052.push(cljs.core.first.call(null,s__10053));
{
var G__10062 = cljs.core.next.call(null,s__10053);
s__10053 = G__10062;
continue;
}
} else
{return ary__10052;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10063 = s;
var i__10064 = n;
var sum__10065 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10066 = (i__10064 > 0);

if(cljs.core.truth_(and__3546__auto____10066))
{return cljs.core.seq.call(null,s__10063);
} else
{return and__3546__auto____10066;
}
})()))
{{
var G__10067 = cljs.core.next.call(null,s__10063);
var G__10068 = (i__10064 - 1);
var G__10069 = (sum__10065 + 1);
s__10063 = G__10067;
i__10064 = G__10068;
sum__10065 = G__10069;
continue;
}
} else
{return sum__10065;
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
var concat__10158 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10159 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10160 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10098 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10098))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10098),concat.call(null,cljs.core.rest.call(null,s__10098),y));
} else
{return y;
}
})));
});
var concat__10161 = (function() { 
var G__10165__delegate = function (x,y,zs){
var cat__10103 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10102 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10102))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10102),cat.call(null,cljs.core.rest.call(null,xys__10102),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10103.call(null,concat.call(null,x,y),zs);
};
var G__10165 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10165__delegate.call(this, x, y, zs);
};
G__10165.cljs$lang$maxFixedArity = 2;
G__10165.cljs$lang$applyTo = (function (arglist__10170){
var x = cljs.core.first(arglist__10170);
var y = cljs.core.first(cljs.core.next(arglist__10170));
var zs = cljs.core.rest(cljs.core.next(arglist__10170));
return G__10165__delegate.call(this, x, y, zs);
});
return G__10165;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10158.call(this);
case  1 :
return concat__10159.call(this,x);
case  2 :
return concat__10160.call(this,x,y);
default:
return concat__10161.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10161.cljs$lang$applyTo;
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
var list_STAR___10175 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10176 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10177 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10178 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10179 = (function() { 
var G__10182__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10182 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10182__delegate.call(this, a, b, c, d, more);
};
G__10182.cljs$lang$maxFixedArity = 4;
G__10182.cljs$lang$applyTo = (function (arglist__10184){
var a = cljs.core.first(arglist__10184);
var b = cljs.core.first(cljs.core.next(arglist__10184));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10184)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10184))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10184))));
return G__10182__delegate.call(this, a, b, c, d, more);
});
return G__10182;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10175.call(this,a);
case  2 :
return list_STAR___10176.call(this,a,b);
case  3 :
return list_STAR___10177.call(this,a,b,c);
case  4 :
return list_STAR___10178.call(this,a,b,c,d);
default:
return list_STAR___10179.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10179.cljs$lang$applyTo;
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
var apply__10212 = (function (f,args){
var fixed_arity__10191 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10191 + 1)) <= fixed_arity__10191)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10213 = (function (f,x,args){
var arglist__10194 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10195 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10194,fixed_arity__10195) <= fixed_arity__10195)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10194));
} else
{return f.cljs$lang$applyTo(arglist__10194);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10194));
}
});
var apply__10214 = (function (f,x,y,args){
var arglist__10198 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10199 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10198,fixed_arity__10199) <= fixed_arity__10199)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10198));
} else
{return f.cljs$lang$applyTo(arglist__10198);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10198));
}
});
var apply__10215 = (function (f,x,y,z,args){
var arglist__10200 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10201 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10200,fixed_arity__10201) <= fixed_arity__10201)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10200));
} else
{return f.cljs$lang$applyTo(arglist__10200);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10200));
}
});
var apply__10216 = (function() { 
var G__10251__delegate = function (f,a,b,c,d,args){
var arglist__10207 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10208 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10207,fixed_arity__10208) <= fixed_arity__10208)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10207));
} else
{return f.cljs$lang$applyTo(arglist__10207);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10207));
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
G__10251.cljs$lang$applyTo = (function (arglist__10252){
var f = cljs.core.first(arglist__10252);
var a = cljs.core.first(cljs.core.next(arglist__10252));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10252)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10252))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10252)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10252)))));
return G__10251__delegate.call(this, f, a, b, c, d, args);
});
return G__10251;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10212.call(this,f,a);
case  3 :
return apply__10213.call(this,f,a,b);
case  4 :
return apply__10214.call(this,f,a,b,c);
case  5 :
return apply__10215.call(this,f,a,b,c,d);
default:
return apply__10216.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10216.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10274){
var obj = cljs.core.first(arglist__10274);
var f = cljs.core.first(cljs.core.next(arglist__10274));
var args = cljs.core.rest(cljs.core.next(arglist__10274));
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
var not_EQ___10280 = (function (x){
return false;
});
var not_EQ___10281 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10282 = (function() { 
var G__10284__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10284 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10284__delegate.call(this, x, y, more);
};
G__10284.cljs$lang$maxFixedArity = 2;
G__10284.cljs$lang$applyTo = (function (arglist__10285){
var x = cljs.core.first(arglist__10285);
var y = cljs.core.first(cljs.core.next(arglist__10285));
var more = cljs.core.rest(cljs.core.next(arglist__10285));
return G__10284__delegate.call(this, x, y, more);
});
return G__10284;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10280.call(this,x);
case  2 :
return not_EQ___10281.call(this,x,y);
default:
return not_EQ___10282.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10282.cljs$lang$applyTo;
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
var G__10296 = pred;
var G__10297 = cljs.core.next.call(null,coll);
pred = G__10296;
coll = G__10297;
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
{var or__3548__auto____10312 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10312))
{return or__3548__auto____10312;
} else
{{
var G__10316 = pred;
var G__10317 = cljs.core.next.call(null,coll);
pred = G__10316;
coll = G__10317;
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
var G__10353 = null;
var G__10353__10354 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10353__10355 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10353__10356 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10353__10357 = (function() { 
var G__10362__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10362 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10362__delegate.call(this, x, y, zs);
};
G__10362.cljs$lang$maxFixedArity = 2;
G__10362.cljs$lang$applyTo = (function (arglist__10363){
var x = cljs.core.first(arglist__10363);
var y = cljs.core.first(cljs.core.next(arglist__10363));
var zs = cljs.core.rest(cljs.core.next(arglist__10363));
return G__10362__delegate.call(this, x, y, zs);
});
return G__10362;
})()
;
G__10353 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10353__10354.call(this);
case  1 :
return G__10353__10355.call(this,x);
case  2 :
return G__10353__10356.call(this,x,y);
default:
return G__10353__10357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10353.cljs$lang$maxFixedArity = 2;
G__10353.cljs$lang$applyTo = G__10353__10357.cljs$lang$applyTo;
return G__10353;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10366__delegate = function (args){
return x;
};
var G__10366 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10366__delegate.call(this, args);
};
G__10366.cljs$lang$maxFixedArity = 0;
G__10366.cljs$lang$applyTo = (function (arglist__10367){
var args = cljs.core.seq( arglist__10367 );;
return G__10366__delegate.call(this, args);
});
return G__10366;
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
var comp__10390 = (function (){
return cljs.core.identity;
});
var comp__10391 = (function (f){
return f;
});
var comp__10392 = (function (f,g){
return (function() {
var G__10397 = null;
var G__10397__10398 = (function (){
return f.call(null,g.call(null));
});
var G__10397__10399 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10397__10400 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10397__10401 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10397__10402 = (function() { 
var G__10406__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10406 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10406__delegate.call(this, x, y, z, args);
};
G__10406.cljs$lang$maxFixedArity = 3;
G__10406.cljs$lang$applyTo = (function (arglist__10407){
var x = cljs.core.first(arglist__10407);
var y = cljs.core.first(cljs.core.next(arglist__10407));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10407)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10407)));
return G__10406__delegate.call(this, x, y, z, args);
});
return G__10406;
})()
;
G__10397 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10397__10398.call(this);
case  1 :
return G__10397__10399.call(this,x);
case  2 :
return G__10397__10400.call(this,x,y);
case  3 :
return G__10397__10401.call(this,x,y,z);
default:
return G__10397__10402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10397.cljs$lang$maxFixedArity = 3;
G__10397.cljs$lang$applyTo = G__10397__10402.cljs$lang$applyTo;
return G__10397;
})()
});
var comp__10393 = (function (f,g,h){
return (function() {
var G__10408 = null;
var G__10408__10409 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10408__10410 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10408__10411 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10408__10412 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10408__10413 = (function() { 
var G__10415__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10415 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10415__delegate.call(this, x, y, z, args);
};
G__10415.cljs$lang$maxFixedArity = 3;
G__10415.cljs$lang$applyTo = (function (arglist__10416){
var x = cljs.core.first(arglist__10416);
var y = cljs.core.first(cljs.core.next(arglist__10416));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10416)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10416)));
return G__10415__delegate.call(this, x, y, z, args);
});
return G__10415;
})()
;
G__10408 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10408__10409.call(this);
case  1 :
return G__10408__10410.call(this,x);
case  2 :
return G__10408__10411.call(this,x,y);
case  3 :
return G__10408__10412.call(this,x,y,z);
default:
return G__10408__10413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10408.cljs$lang$maxFixedArity = 3;
G__10408.cljs$lang$applyTo = G__10408__10413.cljs$lang$applyTo;
return G__10408;
})()
});
var comp__10395 = (function() { 
var G__10419__delegate = function (f1,f2,f3,fs){
var fs__10374 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10421__delegate = function (args){
var ret__10376 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10374),args);
var fs__10380 = cljs.core.next.call(null,fs__10374);

while(true){
if(cljs.core.truth_(fs__10380))
{{
var G__10422 = cljs.core.first.call(null,fs__10380).call(null,ret__10376);
var G__10423 = cljs.core.next.call(null,fs__10380);
ret__10376 = G__10422;
fs__10380 = G__10423;
continue;
}
} else
{return ret__10376;
}
break;
}
};
var G__10421 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10421__delegate.call(this, args);
};
G__10421.cljs$lang$maxFixedArity = 0;
G__10421.cljs$lang$applyTo = (function (arglist__10424){
var args = cljs.core.seq( arglist__10424 );;
return G__10421__delegate.call(this, args);
});
return G__10421;
})()
;
};
var G__10419 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10419__delegate.call(this, f1, f2, f3, fs);
};
G__10419.cljs$lang$maxFixedArity = 3;
G__10419.cljs$lang$applyTo = (function (arglist__10426){
var f1 = cljs.core.first(arglist__10426);
var f2 = cljs.core.first(cljs.core.next(arglist__10426));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10426)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10426)));
return G__10419__delegate.call(this, f1, f2, f3, fs);
});
return G__10419;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10390.call(this);
case  1 :
return comp__10391.call(this,f1);
case  2 :
return comp__10392.call(this,f1,f2);
case  3 :
return comp__10393.call(this,f1,f2,f3);
default:
return comp__10395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10395.cljs$lang$applyTo;
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
var partial__10493 = (function (f,arg1){
return (function() { 
var G__10498__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10498 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10498__delegate.call(this, args);
};
G__10498.cljs$lang$maxFixedArity = 0;
G__10498.cljs$lang$applyTo = (function (arglist__10499){
var args = cljs.core.seq( arglist__10499 );;
return G__10498__delegate.call(this, args);
});
return G__10498;
})()
;
});
var partial__10494 = (function (f,arg1,arg2){
return (function() { 
var G__10500__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10500 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10500__delegate.call(this, args);
};
G__10500.cljs$lang$maxFixedArity = 0;
G__10500.cljs$lang$applyTo = (function (arglist__10501){
var args = cljs.core.seq( arglist__10501 );;
return G__10500__delegate.call(this, args);
});
return G__10500;
})()
;
});
var partial__10495 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10502__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10502 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10502__delegate.call(this, args);
};
G__10502.cljs$lang$maxFixedArity = 0;
G__10502.cljs$lang$applyTo = (function (arglist__10503){
var args = cljs.core.seq( arglist__10503 );;
return G__10502__delegate.call(this, args);
});
return G__10502;
})()
;
});
var partial__10496 = (function() { 
var G__10504__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10505__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10505 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10505__delegate.call(this, args);
};
G__10505.cljs$lang$maxFixedArity = 0;
G__10505.cljs$lang$applyTo = (function (arglist__10506){
var args = cljs.core.seq( arglist__10506 );;
return G__10505__delegate.call(this, args);
});
return G__10505;
})()
;
};
var G__10504 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10504__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10504.cljs$lang$maxFixedArity = 4;
G__10504.cljs$lang$applyTo = (function (arglist__10507){
var f = cljs.core.first(arglist__10507);
var arg1 = cljs.core.first(cljs.core.next(arglist__10507));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10507)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10507))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10507))));
return G__10504__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10504;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10493.call(this,f,arg1);
case  3 :
return partial__10494.call(this,f,arg1,arg2);
case  4 :
return partial__10495.call(this,f,arg1,arg2,arg3);
default:
return partial__10496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10496.cljs$lang$applyTo;
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
var fnil__10511 = (function (f,x){
return (function() {
var G__10515 = null;
var G__10515__10517 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10515__10519 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10515__10520 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10515__10521 = (function() { 
var G__10523__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10523 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10523__delegate.call(this, a, b, c, ds);
};
G__10523.cljs$lang$maxFixedArity = 3;
G__10523.cljs$lang$applyTo = (function (arglist__10524){
var a = cljs.core.first(arglist__10524);
var b = cljs.core.first(cljs.core.next(arglist__10524));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10524)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10524)));
return G__10523__delegate.call(this, a, b, c, ds);
});
return G__10523;
})()
;
G__10515 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10515__10517.call(this,a);
case  2 :
return G__10515__10519.call(this,a,b);
case  3 :
return G__10515__10520.call(this,a,b,c);
default:
return G__10515__10521.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10515.cljs$lang$maxFixedArity = 3;
G__10515.cljs$lang$applyTo = G__10515__10521.cljs$lang$applyTo;
return G__10515;
})()
});
var fnil__10512 = (function (f,x,y){
return (function() {
var G__10525 = null;
var G__10525__10526 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10525__10527 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10525__10528 = (function() { 
var G__10530__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10530 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10530__delegate.call(this, a, b, c, ds);
};
G__10530.cljs$lang$maxFixedArity = 3;
G__10530.cljs$lang$applyTo = (function (arglist__10531){
var a = cljs.core.first(arglist__10531);
var b = cljs.core.first(cljs.core.next(arglist__10531));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10531)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10531)));
return G__10530__delegate.call(this, a, b, c, ds);
});
return G__10530;
})()
;
G__10525 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10525__10526.call(this,a,b);
case  3 :
return G__10525__10527.call(this,a,b,c);
default:
return G__10525__10528.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10525.cljs$lang$maxFixedArity = 3;
G__10525.cljs$lang$applyTo = G__10525__10528.cljs$lang$applyTo;
return G__10525;
})()
});
var fnil__10513 = (function (f,x,y,z){
return (function() {
var G__10533 = null;
var G__10533__10564 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10533__10565 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10533__10567 = (function() { 
var G__10571__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10571 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10571__delegate.call(this, a, b, c, ds);
};
G__10571.cljs$lang$maxFixedArity = 3;
G__10571.cljs$lang$applyTo = (function (arglist__10572){
var a = cljs.core.first(arglist__10572);
var b = cljs.core.first(cljs.core.next(arglist__10572));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10572)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10572)));
return G__10571__delegate.call(this, a, b, c, ds);
});
return G__10571;
})()
;
G__10533 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10533__10564.call(this,a,b);
case  3 :
return G__10533__10565.call(this,a,b,c);
default:
return G__10533__10567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10533.cljs$lang$maxFixedArity = 3;
G__10533.cljs$lang$applyTo = G__10533__10567.cljs$lang$applyTo;
return G__10533;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10511.call(this,f,x);
case  3 :
return fnil__10512.call(this,f,x,y);
case  4 :
return fnil__10513.call(this,f,x,y,z);
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
var mapi__10575 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10573 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10573))
{var s__10574 = temp__3698__auto____10573;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10574)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10574)));
} else
{return null;
}
})));
});

return mapi__10575.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10589 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10589))
{var s__10591 = temp__3698__auto____10589;

var x__10593 = f.call(null,cljs.core.first.call(null,s__10591));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10593)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10591));
} else
{return cljs.core.cons.call(null,x__10593,keep.call(null,f,cljs.core.rest.call(null,s__10591)));
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
var keepi__10639 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10634))
{var s__10636 = temp__3698__auto____10634;

var x__10637 = f.call(null,idx,cljs.core.first.call(null,s__10636));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10637)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10636));
} else
{return cljs.core.cons.call(null,x__10637,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10636)));
}
} else
{return null;
}
})));
});

return keepi__10639.call(null,0,coll);
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
var every_pred__10802 = (function (p){
return (function() {
var ep1 = null;
var ep1__10809 = (function (){
return true;
});
var ep1__10810 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10811 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10698 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10698))
{return p.call(null,y);
} else
{return and__3546__auto____10698;
}
})());
});
var ep1__10812 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10699 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10699))
{var and__3546__auto____10700 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10700))
{return p.call(null,z);
} else
{return and__3546__auto____10700;
}
} else
{return and__3546__auto____10699;
}
})());
});
var ep1__10813 = (function() { 
var G__10821__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10701 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10701))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10701;
}
})());
};
var G__10821 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10821__delegate.call(this, x, y, z, args);
};
G__10821.cljs$lang$maxFixedArity = 3;
G__10821.cljs$lang$applyTo = (function (arglist__10822){
var x = cljs.core.first(arglist__10822);
var y = cljs.core.first(cljs.core.next(arglist__10822));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10822)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10822)));
return G__10821__delegate.call(this, x, y, z, args);
});
return G__10821;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10809.call(this);
case  1 :
return ep1__10810.call(this,x);
case  2 :
return ep1__10811.call(this,x,y);
case  3 :
return ep1__10812.call(this,x,y,z);
default:
return ep1__10813.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10813.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10803 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10828 = (function (){
return true;
});
var ep2__10829 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10702 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10702))
{return p2.call(null,x);
} else
{return and__3546__auto____10702;
}
})());
});
var ep2__10830 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10703 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10703))
{var and__3546__auto____10704 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10704))
{var and__3546__auto____10705 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10705))
{return p2.call(null,y);
} else
{return and__3546__auto____10705;
}
} else
{return and__3546__auto____10704;
}
} else
{return and__3546__auto____10703;
}
})());
});
var ep2__10831 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10706 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10706))
{var and__3546__auto____10707 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10707))
{var and__3546__auto____10708 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10708))
{var and__3546__auto____10718 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10718))
{var and__3546__auto____10721 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10721))
{return p2.call(null,z);
} else
{return and__3546__auto____10721;
}
} else
{return and__3546__auto____10718;
}
} else
{return and__3546__auto____10708;
}
} else
{return and__3546__auto____10707;
}
} else
{return and__3546__auto____10706;
}
})());
});
var ep2__10832 = (function() { 
var G__10845__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10729 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10729))
{return cljs.core.every_QMARK_.call(null,(function (p1__10615_SHARP_){
var and__3546__auto____10733 = p1.call(null,p1__10615_SHARP_);

if(cljs.core.truth_(and__3546__auto____10733))
{return p2.call(null,p1__10615_SHARP_);
} else
{return and__3546__auto____10733;
}
}),args);
} else
{return and__3546__auto____10729;
}
})());
};
var G__10845 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10845__delegate.call(this, x, y, z, args);
};
G__10845.cljs$lang$maxFixedArity = 3;
G__10845.cljs$lang$applyTo = (function (arglist__10848){
var x = cljs.core.first(arglist__10848);
var y = cljs.core.first(cljs.core.next(arglist__10848));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10848)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10848)));
return G__10845__delegate.call(this, x, y, z, args);
});
return G__10845;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10828.call(this);
case  1 :
return ep2__10829.call(this,x);
case  2 :
return ep2__10830.call(this,x,y);
case  3 :
return ep2__10831.call(this,x,y,z);
default:
return ep2__10832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10832.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10804 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10849 = (function (){
return true;
});
var ep3__10850 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10739 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10739))
{var and__3546__auto____10746 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10746))
{return p3.call(null,x);
} else
{return and__3546__auto____10746;
}
} else
{return and__3546__auto____10739;
}
})());
});
var ep3__10851 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10747 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10747))
{var and__3546__auto____10748 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10748))
{var and__3546__auto____10750 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10750))
{var and__3546__auto____10751 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10751))
{var and__3546__auto____10753 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10753))
{return p3.call(null,y);
} else
{return and__3546__auto____10753;
}
} else
{return and__3546__auto____10751;
}
} else
{return and__3546__auto____10750;
}
} else
{return and__3546__auto____10748;
}
} else
{return and__3546__auto____10747;
}
})());
});
var ep3__10852 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10755 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10755))
{var and__3546__auto____10760 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10760))
{var and__3546__auto____10761 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10761))
{var and__3546__auto____10762 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10762))
{var and__3546__auto____10763 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10763))
{var and__3546__auto____10765 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10765))
{var and__3546__auto____10766 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10766))
{var and__3546__auto____10768 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10768))
{return p3.call(null,z);
} else
{return and__3546__auto____10768;
}
} else
{return and__3546__auto____10766;
}
} else
{return and__3546__auto____10765;
}
} else
{return and__3546__auto____10763;
}
} else
{return and__3546__auto____10762;
}
} else
{return and__3546__auto____10761;
}
} else
{return and__3546__auto____10760;
}
} else
{return and__3546__auto____10755;
}
})());
});
var ep3__10853 = (function() { 
var G__10948__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10769 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10769))
{return cljs.core.every_QMARK_.call(null,(function (p1__10618_SHARP_){
var and__3546__auto____10770 = p1.call(null,p1__10618_SHARP_);

if(cljs.core.truth_(and__3546__auto____10770))
{var and__3546__auto____10771 = p2.call(null,p1__10618_SHARP_);

if(cljs.core.truth_(and__3546__auto____10771))
{return p3.call(null,p1__10618_SHARP_);
} else
{return and__3546__auto____10771;
}
} else
{return and__3546__auto____10770;
}
}),args);
} else
{return and__3546__auto____10769;
}
})());
};
var G__10948 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10948__delegate.call(this, x, y, z, args);
};
G__10948.cljs$lang$maxFixedArity = 3;
G__10948.cljs$lang$applyTo = (function (arglist__10953){
var x = cljs.core.first(arglist__10953);
var y = cljs.core.first(cljs.core.next(arglist__10953));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10953)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10953)));
return G__10948__delegate.call(this, x, y, z, args);
});
return G__10948;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10849.call(this);
case  1 :
return ep3__10850.call(this,x);
case  2 :
return ep3__10851.call(this,x,y);
case  3 :
return ep3__10852.call(this,x,y,z);
default:
return ep3__10853.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10853.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10805 = (function() { 
var G__10981__delegate = function (p1,p2,p3,ps){
var ps__10773 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10984 = (function (){
return true;
});
var epn__10985 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10621_SHARP_){
return p1__10621_SHARP_.call(null,x);
}),ps__10773);
});
var epn__10987 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10627_SHARP_){
var and__3546__auto____10786 = p1__10627_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10786))
{return p1__10627_SHARP_.call(null,y);
} else
{return and__3546__auto____10786;
}
}),ps__10773);
});
var epn__10989 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10629_SHARP_){
var and__3546__auto____10788 = p1__10629_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10788))
{var and__3546__auto____10789 = p1__10629_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10789))
{return p1__10629_SHARP_.call(null,z);
} else
{return and__3546__auto____10789;
}
} else
{return and__3546__auto____10788;
}
}),ps__10773);
});
var epn__10991 = (function() { 
var G__11009__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10791 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10791))
{return cljs.core.every_QMARK_.call(null,(function (p1__10633_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10633_SHARP_,args);
}),ps__10773);
} else
{return and__3546__auto____10791;
}
})());
};
var G__11009 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11009__delegate.call(this, x, y, z, args);
};
G__11009.cljs$lang$maxFixedArity = 3;
G__11009.cljs$lang$applyTo = (function (arglist__11058){
var x = cljs.core.first(arglist__11058);
var y = cljs.core.first(cljs.core.next(arglist__11058));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11058)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11058)));
return G__11009__delegate.call(this, x, y, z, args);
});
return G__11009;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10984.call(this);
case  1 :
return epn__10985.call(this,x);
case  2 :
return epn__10987.call(this,x,y);
case  3 :
return epn__10989.call(this,x,y,z);
default:
return epn__10991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10991.cljs$lang$applyTo;
return epn;
})()
};
var G__10981 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10981__delegate.call(this, p1, p2, p3, ps);
};
G__10981.cljs$lang$maxFixedArity = 3;
G__10981.cljs$lang$applyTo = (function (arglist__11069){
var p1 = cljs.core.first(arglist__11069);
var p2 = cljs.core.first(cljs.core.next(arglist__11069));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11069)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11069)));
return G__10981__delegate.call(this, p1, p2, p3, ps);
});
return G__10981;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10802.call(this,p1);
case  2 :
return every_pred__10803.call(this,p1,p2);
case  3 :
return every_pred__10804.call(this,p1,p2,p3);
default:
return every_pred__10805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10805.cljs$lang$applyTo;
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
var some_fn__11294 = (function (p){
return (function() {
var sp1 = null;
var sp1__11300 = (function (){
return null;
});
var sp1__11301 = (function (x){
return p.call(null,x);
});
var sp1__11302 = (function (x,y){
var or__3548__auto____11073 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11073))
{return or__3548__auto____11073;
} else
{return p.call(null,y);
}
});
var sp1__11303 = (function (x,y,z){
var or__3548__auto____11074 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11074))
{return or__3548__auto____11074;
} else
{var or__3548__auto____11075 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11075))
{return or__3548__auto____11075;
} else
{return p.call(null,z);
}
}
});
var sp1__11304 = (function() { 
var G__11307__delegate = function (x,y,z,args){
var or__3548__auto____11076 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11076))
{return or__3548__auto____11076;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11307 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11307__delegate.call(this, x, y, z, args);
};
G__11307.cljs$lang$maxFixedArity = 3;
G__11307.cljs$lang$applyTo = (function (arglist__11308){
var x = cljs.core.first(arglist__11308);
var y = cljs.core.first(cljs.core.next(arglist__11308));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11308)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11308)));
return G__11307__delegate.call(this, x, y, z, args);
});
return G__11307;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11300.call(this);
case  1 :
return sp1__11301.call(this,x);
case  2 :
return sp1__11302.call(this,x,y);
case  3 :
return sp1__11303.call(this,x,y,z);
default:
return sp1__11304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11304.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11295 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11310 = (function (){
return null;
});
var sp2__11311 = (function (x){
var or__3548__auto____11078 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11078))
{return or__3548__auto____11078;
} else
{return p2.call(null,x);
}
});
var sp2__11312 = (function (x,y){
var or__3548__auto____11079 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11079))
{return or__3548__auto____11079;
} else
{var or__3548__auto____11080 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11080))
{return or__3548__auto____11080;
} else
{var or__3548__auto____11082 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11082))
{return or__3548__auto____11082;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11313 = (function (x,y,z){
var or__3548__auto____11083 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11083))
{return or__3548__auto____11083;
} else
{var or__3548__auto____11084 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11084))
{return or__3548__auto____11084;
} else
{var or__3548__auto____11086 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11086))
{return or__3548__auto____11086;
} else
{var or__3548__auto____11092 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11092))
{return or__3548__auto____11092;
} else
{var or__3548__auto____11094 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11094))
{return or__3548__auto____11094;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11314 = (function() { 
var G__11323__delegate = function (x,y,z,args){
var or__3548__auto____11097 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11097))
{return or__3548__auto____11097;
} else
{return cljs.core.some.call(null,(function (p1__10692_SHARP_){
var or__3548__auto____11099 = p1.call(null,p1__10692_SHARP_);

if(cljs.core.truth_(or__3548__auto____11099))
{return or__3548__auto____11099;
} else
{return p2.call(null,p1__10692_SHARP_);
}
}),args);
}
};
var G__11323 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11323__delegate.call(this, x, y, z, args);
};
G__11323.cljs$lang$maxFixedArity = 3;
G__11323.cljs$lang$applyTo = (function (arglist__11325){
var x = cljs.core.first(arglist__11325);
var y = cljs.core.first(cljs.core.next(arglist__11325));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11325)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11325)));
return G__11323__delegate.call(this, x, y, z, args);
});
return G__11323;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11310.call(this);
case  1 :
return sp2__11311.call(this,x);
case  2 :
return sp2__11312.call(this,x,y);
case  3 :
return sp2__11313.call(this,x,y,z);
default:
return sp2__11314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11314.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11296 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11327 = (function (){
return null;
});
var sp3__11328 = (function (x){
var or__3548__auto____11102 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11102))
{return or__3548__auto____11102;
} else
{var or__3548__auto____11105 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11105))
{return or__3548__auto____11105;
} else
{return p3.call(null,x);
}
}
});
var sp3__11329 = (function (x,y){
var or__3548__auto____11108 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11108))
{return or__3548__auto____11108;
} else
{var or__3548__auto____11110 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11110))
{return or__3548__auto____11110;
} else
{var or__3548__auto____11112 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11112))
{return or__3548__auto____11112;
} else
{var or__3548__auto____11254 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11254))
{return or__3548__auto____11254;
} else
{var or__3548__auto____11256 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11256))
{return or__3548__auto____11256;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11330 = (function (x,y,z){
var or__3548__auto____11258 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11258))
{return or__3548__auto____11258;
} else
{var or__3548__auto____11259 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11259))
{return or__3548__auto____11259;
} else
{var or__3548__auto____11260 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11260))
{return or__3548__auto____11260;
} else
{var or__3548__auto____11262 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11262))
{return or__3548__auto____11262;
} else
{var or__3548__auto____11263 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11263))
{return or__3548__auto____11263;
} else
{var or__3548__auto____11265 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11265))
{return or__3548__auto____11265;
} else
{var or__3548__auto____11267 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11267))
{return or__3548__auto____11267;
} else
{var or__3548__auto____11268 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11268))
{return or__3548__auto____11268;
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
var sp3__11331 = (function() { 
var G__11335__delegate = function (x,y,z,args){
var or__3548__auto____11271 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11271))
{return or__3548__auto____11271;
} else
{return cljs.core.some.call(null,(function (p1__10693_SHARP_){
var or__3548__auto____11274 = p1.call(null,p1__10693_SHARP_);

if(cljs.core.truth_(or__3548__auto____11274))
{return or__3548__auto____11274;
} else
{var or__3548__auto____11276 = p2.call(null,p1__10693_SHARP_);

if(cljs.core.truth_(or__3548__auto____11276))
{return or__3548__auto____11276;
} else
{return p3.call(null,p1__10693_SHARP_);
}
}
}),args);
}
};
var G__11335 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11335__delegate.call(this, x, y, z, args);
};
G__11335.cljs$lang$maxFixedArity = 3;
G__11335.cljs$lang$applyTo = (function (arglist__11336){
var x = cljs.core.first(arglist__11336);
var y = cljs.core.first(cljs.core.next(arglist__11336));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11336)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11336)));
return G__11335__delegate.call(this, x, y, z, args);
});
return G__11335;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11327.call(this);
case  1 :
return sp3__11328.call(this,x);
case  2 :
return sp3__11329.call(this,x,y);
case  3 :
return sp3__11330.call(this,x,y,z);
default:
return sp3__11331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11331.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11297 = (function() { 
var G__11337__delegate = function (p1,p2,p3,ps){
var ps__11278 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11338 = (function (){
return null;
});
var spn__11339 = (function (x){
return cljs.core.some.call(null,(function (p1__10694_SHARP_){
return p1__10694_SHARP_.call(null,x);
}),ps__11278);
});
var spn__11340 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10695_SHARP_){
var or__3548__auto____11281 = p1__10695_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{return p1__10695_SHARP_.call(null,y);
}
}),ps__11278);
});
var spn__11341 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10696_SHARP_){
var or__3548__auto____11283 = p1__10696_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11283))
{return or__3548__auto____11283;
} else
{var or__3548__auto____11285 = p1__10696_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{return p1__10696_SHARP_.call(null,z);
}
}
}),ps__11278);
});
var spn__11342 = (function() { 
var G__11350__delegate = function (x,y,z,args){
var or__3548__auto____11288 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11288))
{return or__3548__auto____11288;
} else
{return cljs.core.some.call(null,(function (p1__10697_SHARP_){
return cljs.core.some.call(null,p1__10697_SHARP_,args);
}),ps__11278);
}
};
var G__11350 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11350__delegate.call(this, x, y, z, args);
};
G__11350.cljs$lang$maxFixedArity = 3;
G__11350.cljs$lang$applyTo = (function (arglist__11351){
var x = cljs.core.first(arglist__11351);
var y = cljs.core.first(cljs.core.next(arglist__11351));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11351)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11351)));
return G__11350__delegate.call(this, x, y, z, args);
});
return G__11350;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11338.call(this);
case  1 :
return spn__11339.call(this,x);
case  2 :
return spn__11340.call(this,x,y);
case  3 :
return spn__11341.call(this,x,y,z);
default:
return spn__11342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11342.cljs$lang$applyTo;
return spn;
})()
};
var G__11337 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11337__delegate.call(this, p1, p2, p3, ps);
};
G__11337.cljs$lang$maxFixedArity = 3;
G__11337.cljs$lang$applyTo = (function (arglist__11352){
var p1 = cljs.core.first(arglist__11352);
var p2 = cljs.core.first(cljs.core.next(arglist__11352));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11352)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11352)));
return G__11337__delegate.call(this, p1, p2, p3, ps);
});
return G__11337;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11294.call(this,p1);
case  2 :
return some_fn__11295.call(this,p1,p2);
case  3 :
return some_fn__11296.call(this,p1,p2,p3);
default:
return some_fn__11297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11297.cljs$lang$applyTo;
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
var map__11703 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11526))
{var s__11528 = temp__3698__auto____11526;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11528)),map.call(null,f,cljs.core.rest.call(null,s__11528)));
} else
{return null;
}
})));
});
var map__11704 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11535 = cljs.core.seq.call(null,c1);
var s2__11552 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11555 = s1__11535;

if(cljs.core.truth_(and__3546__auto____11555))
{return s2__11552;
} else
{return and__3546__auto____11555;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11535),cljs.core.first.call(null,s2__11552)),map.call(null,f,cljs.core.rest.call(null,s1__11535),cljs.core.rest.call(null,s2__11552)));
} else
{return null;
}
})));
});
var map__11705 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11570 = cljs.core.seq.call(null,c1);
var s2__11571 = cljs.core.seq.call(null,c2);
var s3__11669 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11677 = s1__11570;

if(cljs.core.truth_(and__3546__auto____11677))
{var and__3546__auto____11678 = s2__11571;

if(cljs.core.truth_(and__3546__auto____11678))
{return s3__11669;
} else
{return and__3546__auto____11678;
}
} else
{return and__3546__auto____11677;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11570),cljs.core.first.call(null,s2__11571),cljs.core.first.call(null,s3__11669)),map.call(null,f,cljs.core.rest.call(null,s1__11570),cljs.core.rest.call(null,s2__11571),cljs.core.rest.call(null,s3__11669)));
} else
{return null;
}
})));
});
var map__11706 = (function() { 
var G__11721__delegate = function (f,c1,c2,c3,colls){
var step__11690 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11687 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11687)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11687),step.call(null,map.call(null,cljs.core.rest,ss__11687)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11072_SHARP_){
return cljs.core.apply.call(null,f,p1__11072_SHARP_);
}),step__11690.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11721 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11721__delegate.call(this, f, c1, c2, c3, colls);
};
G__11721.cljs$lang$maxFixedArity = 4;
G__11721.cljs$lang$applyTo = (function (arglist__11723){
var f = cljs.core.first(arglist__11723);
var c1 = cljs.core.first(cljs.core.next(arglist__11723));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11723)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11723))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11723))));
return G__11721__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11721;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11703.call(this,f,c1);
case  3 :
return map__11704.call(this,f,c1,c2);
case  4 :
return map__11705.call(this,f,c1,c2,c3);
default:
return map__11706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11706.cljs$lang$applyTo;
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
{var temp__3698__auto____11725 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11725))
{var s__11726 = temp__3698__auto____11725;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11726),take.call(null,(n - 1),cljs.core.rest.call(null,s__11726)));
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
var step__11740 = (function (n,coll){
while(true){
var s__11737 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11738 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11738))
{return s__11737;
} else
{return and__3546__auto____11738;
}
})()))
{{
var G__11741 = (n - 1);
var G__11805 = cljs.core.rest.call(null,s__11737);
n = G__11741;
coll = G__11805;
continue;
}
} else
{return s__11737;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11740.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11836 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11837 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11836.call(this,n);
case  2 :
return drop_last__11837.call(this,n,s);
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
var s__11847 = cljs.core.seq.call(null,coll);
var lead__11848 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11848))
{{
var G__11857 = cljs.core.next.call(null,s__11847);
var G__11858 = cljs.core.next.call(null,lead__11848);
s__11847 = G__11857;
lead__11848 = G__11858;
continue;
}
} else
{return s__11847;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11866 = (function (pred,coll){
while(true){
var s__11859 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11860 = s__11859;

if(cljs.core.truth_(and__3546__auto____11860))
{return pred.call(null,cljs.core.first.call(null,s__11859));
} else
{return and__3546__auto____11860;
}
})()))
{{
var G__11875 = pred;
var G__11876 = cljs.core.rest.call(null,s__11859);
pred = G__11875;
coll = G__11876;
continue;
}
} else
{return s__11859;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11866.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11880 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11880))
{var s__11886 = temp__3698__auto____11880;

return cljs.core.concat.call(null,s__11886,cycle.call(null,s__11886));
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
var repeatedly__11907 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11908 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11907.call(this,n);
case  2 :
return repeatedly__11908.call(this,n,f);
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
var interleave__11952 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11910 = cljs.core.seq.call(null,c1);
var s2__11911 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11912 = s1__11910;

if(cljs.core.truth_(and__3546__auto____11912))
{return s2__11911;
} else
{return and__3546__auto____11912;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11910),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11911),interleave.call(null,cljs.core.rest.call(null,s1__11910),cljs.core.rest.call(null,s2__11911))));
} else
{return null;
}
})));
});
var interleave__11953 = (function() { 
var G__11955__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11925 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11925)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11925),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11925)));
} else
{return null;
}
})));
};
var G__11955 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11955__delegate.call(this, c1, c2, colls);
};
G__11955.cljs$lang$maxFixedArity = 2;
G__11955.cljs$lang$applyTo = (function (arglist__11959){
var c1 = cljs.core.first(arglist__11959);
var c2 = cljs.core.first(cljs.core.next(arglist__11959));
var colls = cljs.core.rest(cljs.core.next(arglist__11959));
return G__11955__delegate.call(this, c1, c2, colls);
});
return G__11955;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11952.call(this,c1,c2);
default:
return interleave__11953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11953.cljs$lang$applyTo;
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
var temp__3695__auto____11962 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11962))
{var coll__11964 = temp__3695__auto____11962;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11964),cat.call(null,cljs.core.rest.call(null,coll__11964),colls));
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
var mapcat__11970 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11971 = (function() { 
var G__11973__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11973 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11973__delegate.call(this, f, coll, colls);
};
G__11973.cljs$lang$maxFixedArity = 2;
G__11973.cljs$lang$applyTo = (function (arglist__11974){
var f = cljs.core.first(arglist__11974);
var coll = cljs.core.first(cljs.core.next(arglist__11974));
var colls = cljs.core.rest(cljs.core.next(arglist__11974));
return G__11973__delegate.call(this, f, coll, colls);
});
return G__11973;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11970.call(this,f,coll);
default:
return mapcat__11971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11971.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11981 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11981))
{var s__11983 = temp__3698__auto____11981;

var f__11985 = cljs.core.first.call(null,s__11983);
var r__11986 = cljs.core.rest.call(null,s__11983);

if(cljs.core.truth_(pred.call(null,f__11985)))
{return cljs.core.cons.call(null,f__11985,filter.call(null,pred,r__11986));
} else
{return filter.call(null,pred,r__11986);
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
var walk__11996 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11996.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11992_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11992_SHARP_));
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
var partition__12017 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12018 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12011 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12011))
{var s__12012 = temp__3698__auto____12011;

var p__12013 = cljs.core.take.call(null,n,s__12012);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12013))))
{return cljs.core.cons.call(null,p__12013,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12012)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12019 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12014 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12014))
{var s__12015 = temp__3698__auto____12014;

var p__12016 = cljs.core.take.call(null,n,s__12015);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12016))))
{return cljs.core.cons.call(null,p__12016,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12015)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12016,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12017.call(this,n,step);
case  3 :
return partition__12018.call(this,n,step,pad);
case  4 :
return partition__12019.call(this,n,step,pad,coll);
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
var get_in__12099 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12100 = (function (m,ks,not_found){
var sentinel__12023 = cljs.core.lookup_sentinel;
var m__12024 = m;
var ks__12025 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12025))
{var m__12026 = cljs.core.get.call(null,m__12024,cljs.core.first.call(null,ks__12025),sentinel__12023);

if(cljs.core.truth_((sentinel__12023 === m__12026)))
{return not_found;
} else
{{
var G__12103 = sentinel__12023;
var G__12104 = m__12026;
var G__12105 = cljs.core.next.call(null,ks__12025);
sentinel__12023 = G__12103;
m__12024 = G__12104;
ks__12025 = G__12105;
continue;
}
}
} else
{return m__12024;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12099.call(this,m,ks);
case  3 :
return get_in__12100.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12106,v){
var vec__12107__12108 = p__12106;
var k__12109 = cljs.core.nth.call(null,vec__12107__12108,0,null);
var ks__12110 = cljs.core.nthnext.call(null,vec__12107__12108,1);

if(cljs.core.truth_(ks__12110))
{return cljs.core.assoc.call(null,m,k__12109,assoc_in.call(null,cljs.core.get.call(null,m,k__12109),ks__12110,v));
} else
{return cljs.core.assoc.call(null,m,k__12109,v);
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
var update_in__delegate = function (m,p__12111,f,args){
var vec__12112__12113 = p__12111;
var k__12114 = cljs.core.nth.call(null,vec__12112__12113,0,null);
var ks__12115 = cljs.core.nthnext.call(null,vec__12112__12113,1);

if(cljs.core.truth_(ks__12115))
{return cljs.core.assoc.call(null,m,k__12114,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12114),ks__12115,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12114,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12114),args));
}
};
var update_in = function (m,p__12111,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12111, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12134){
var m = cljs.core.first(arglist__12134);
var p__12111 = cljs.core.first(cljs.core.next(arglist__12134));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12134)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12134)));
return update_in__delegate.call(this, m, p__12111, f, args);
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
var this__12146 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12272 = null;
var G__12272__12273 = (function (coll,k){
var this__12149 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12272__12274 = (function (coll,k,not_found){
var this__12150 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12272 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12272__12273.call(this,coll,k);
case  3 :
return G__12272__12274.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12272;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12153 = this;
var new_array__12156 = cljs.core.aclone.call(null,this__12153.array);

(new_array__12156[k] = v);
return (new cljs.core.Vector(this__12153.meta,new_array__12156));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12279 = null;
var G__12279__12280 = (function (coll,k){
var this__12159 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12279__12281 = (function (coll,k,not_found){
var this__12162 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12279 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12279__12280.call(this,coll,k);
case  3 :
return G__12279__12281.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12279;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12240 = this;
var new_array__12244 = cljs.core.aclone.call(null,this__12240.array);

new_array__12244.push(o);
return (new cljs.core.Vector(this__12240.meta,new_array__12244));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12289 = null;
var G__12289__12290 = (function (v,f){
var this__12249 = this;
return cljs.core.ci_reduce.call(null,this__12249.array,f);
});
var G__12289__12291 = (function (v,f,start){
var this__12250 = this;
return cljs.core.ci_reduce.call(null,this__12250.array,f,start);
});
G__12289 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12289__12290.call(this,v,f);
case  3 :
return G__12289__12291.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12289;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12251 = this;
if(cljs.core.truth_((this__12251.array.length > 0)))
{var vector_seq__12252 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12251.array.length)))
{return cljs.core.cons.call(null,(this__12251.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12252.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12253 = this;
return this__12253.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12254 = this;
var count__12255 = this__12254.array.length;

if(cljs.core.truth_((count__12255 > 0)))
{return (this__12254.array[(count__12255 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12256 = this;
if(cljs.core.truth_((this__12256.array.length > 0)))
{var new_array__12257 = cljs.core.aclone.call(null,this__12256.array);

new_array__12257.pop();
return (new cljs.core.Vector(this__12256.meta,new_array__12257));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12262 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12263 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12264 = this;
return (new cljs.core.Vector(meta,this__12264.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12265 = this;
return this__12265.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12300 = null;
var G__12300__12302 = (function (coll,n){
var this__12266 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12268 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12268))
{return (n < this__12266.array.length);
} else
{return and__3546__auto____12268;
}
})()))
{return (this__12266.array[n]);
} else
{return null;
}
});
var G__12300__12303 = (function (coll,n,not_found){
var this__12269 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12270 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12270))
{return (n < this__12269.array.length);
} else
{return and__3546__auto____12270;
}
})()))
{return (this__12269.array[n]);
} else
{return not_found;
}
});
G__12300 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12300__12302.call(this,coll,n);
case  3 :
return G__12300__12303.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12300;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12271 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12271.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12318){
var args = cljs.core.seq( arglist__12318 );;
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
var this__12391 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12453 = null;
var G__12453__12454 = (function (coll,k){
var this__12393 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12453__12455 = (function (coll,k,not_found){
var this__12394 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12453 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12453__12454.call(this,coll,k);
case  3 :
return G__12453__12455.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12453;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12396 = this;
var v_pos__12398 = (this__12396.start + key);

return (new cljs.core.Subvec(this__12396.meta,cljs.core._assoc.call(null,this__12396.v,v_pos__12398,val),this__12396.start,((this__12396.end > (v_pos__12398 + 1)) ? this__12396.end : (v_pos__12398 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12458 = null;
var G__12458__12459 = (function (coll,k){
var this__12401 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12458__12460 = (function (coll,k,not_found){
var this__12402 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12458 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12458__12459.call(this,coll,k);
case  3 :
return G__12458__12460.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12458;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12403 = this;
return (new cljs.core.Subvec(this__12403.meta,cljs.core._assoc_n.call(null,this__12403.v,this__12403.end,o),this__12403.start,(this__12403.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12463 = null;
var G__12463__12464 = (function (coll,f){
var this__12406 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12463__12465 = (function (coll,f,start){
var this__12407 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12463 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12463__12464.call(this,coll,f);
case  3 :
return G__12463__12465.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12463;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12409 = this;
var subvec_seq__12412 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12409.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12409.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12412.call(null,this__12409.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12413 = this;
return (this__12413.end - this__12413.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12414 = this;
return cljs.core._nth.call(null,this__12414.v,(this__12414.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12415 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12415.start,this__12415.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12415.meta,this__12415.v,this__12415.start,(this__12415.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12434 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12439 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12440 = this;
return (new cljs.core.Subvec(meta,this__12440.v,this__12440.start,this__12440.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12441 = this;
return this__12441.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12470 = null;
var G__12470__12471 = (function (coll,n){
var this__12444 = this;
return cljs.core._nth.call(null,this__12444.v,(this__12444.start + n));
});
var G__12470__12472 = (function (coll,n,not_found){
var this__12447 = this;
return cljs.core._nth.call(null,this__12447.v,(this__12447.start + n),not_found);
});
G__12470 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12470__12471.call(this,coll,n);
case  3 :
return G__12470__12472.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12470;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12448 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12448.meta);
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
var subvec__12480 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12481 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12480.call(this,v,start);
case  3 :
return subvec__12481.call(this,v,start,end);
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
var this__12485 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12486 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12487 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12488 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12488.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12558 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12560 = this;
return cljs.core._first.call(null,this__12560.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12561 = this;
var temp__3695__auto____12563 = cljs.core.next.call(null,this__12561.front);

if(cljs.core.truth_(temp__3695__auto____12563))
{var f1__12565 = temp__3695__auto____12563;

return (new cljs.core.PersistentQueueSeq(this__12561.meta,f1__12565,this__12561.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12561.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12561.meta,this__12561.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12566 = this;
return this__12566.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12567 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12567.front,this__12567.rear));
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
var this__12570 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12571 = this;
if(cljs.core.truth_(this__12571.front))
{return (new cljs.core.PersistentQueue(this__12571.meta,(this__12571.count + 1),this__12571.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12572 = this__12571.rear;

if(cljs.core.truth_(or__3548__auto____12572))
{return or__3548__auto____12572;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12571.meta,(this__12571.count + 1),cljs.core.conj.call(null,this__12571.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12573 = this;
var rear__12574 = cljs.core.seq.call(null,this__12573.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12575 = this__12573.front;

if(cljs.core.truth_(or__3548__auto____12575))
{return or__3548__auto____12575;
} else
{return rear__12574;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12573.front,cljs.core.seq.call(null,rear__12574)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12576 = this;
return this__12576.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12577 = this;
return cljs.core._first.call(null,this__12577.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12578 = this;
if(cljs.core.truth_(this__12578.front))
{var temp__3695__auto____12579 = cljs.core.next.call(null,this__12578.front);

if(cljs.core.truth_(temp__3695__auto____12579))
{var f1__12580 = temp__3695__auto____12579;

return (new cljs.core.PersistentQueue(this__12578.meta,(this__12578.count - 1),f1__12580,this__12578.rear));
} else
{return (new cljs.core.PersistentQueue(this__12578.meta,(this__12578.count - 1),cljs.core.seq.call(null,this__12578.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12581 = this;
return cljs.core.first.call(null,this__12581.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12583 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12585 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12587 = this;
return (new cljs.core.PersistentQueue(meta,this__12587.count,this__12587.front,this__12587.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12589 = this;
return this__12589.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12590 = this;
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
var this__12764 = this;
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
var len__12841 = array.length;

var i__12842 = 0;

while(true){
if(cljs.core.truth_((i__12842 < len__12841)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12842]))))
{return i__12842;
} else
{{
var G__12843 = (i__12842 + incr);
i__12842 = G__12843;
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
var obj_map_contains_key_QMARK___12845 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12846 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12844 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12844))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12844;
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
return obj_map_contains_key_QMARK___12845.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12846.call(this,k,strobj,true_val,false_val);
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
var this__12849 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12896 = null;
var G__12896__12897 = (function (coll,k){
var this__12850 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12896__12898 = (function (coll,k,not_found){
var this__12851 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12851.strobj,(this__12851.strobj[k]),not_found);
});
G__12896 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12896__12897.call(this,coll,k);
case  3 :
return G__12896__12898.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12896;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12866 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12867 = goog.object.clone.call(null,this__12866.strobj);
var overwrite_QMARK___12868 = new_strobj__12867.hasOwnProperty(k);

(new_strobj__12867[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12868))
{return (new cljs.core.ObjMap(this__12866.meta,this__12866.keys,new_strobj__12867));
} else
{var new_keys__12869 = cljs.core.aclone.call(null,this__12866.keys);

new_keys__12869.push(k);
return (new cljs.core.ObjMap(this__12866.meta,new_keys__12869,new_strobj__12867));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12866.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12870 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12870.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12905 = null;
var G__12905__12906 = (function (coll,k){
var this__12871 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12905__12907 = (function (coll,k,not_found){
var this__12872 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12905 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12905__12906.call(this,coll,k);
case  3 :
return G__12905__12907.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12905;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12873 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12874 = this;
if(cljs.core.truth_((this__12874.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12848_SHARP_){
return cljs.core.vector.call(null,p1__12848_SHARP_,(this__12874.strobj[p1__12848_SHARP_]));
}),this__12874.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12876 = this;
return this__12876.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12877 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12879 = this;
return (new cljs.core.ObjMap(meta,this__12879.keys,this__12879.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12880 = this;
return this__12880.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12882 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12882.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12884 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12886 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12886))
{return this__12884.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12886;
}
})()))
{var new_keys__12888 = cljs.core.aclone.call(null,this__12884.keys);
var new_strobj__12890 = goog.object.clone.call(null,this__12884.strobj);

new_keys__12888.splice(cljs.core.scan_array.call(null,1,k,new_keys__12888),1);
cljs.core.js_delete.call(null,new_strobj__12890,k);
return (new cljs.core.ObjMap(this__12884.meta,new_keys__12888,new_strobj__12890));
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
var this__13005 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13057 = null;
var G__13057__13058 = (function (coll,k){
var this__13007 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13057__13059 = (function (coll,k,not_found){
var this__13009 = this;
var bucket__13010 = (this__13009.hashobj[cljs.core.hash.call(null,k)]);
var i__13011 = (cljs.core.truth_(bucket__13010)?cljs.core.scan_array.call(null,2,k,bucket__13010):null);

if(cljs.core.truth_(i__13011))
{return (bucket__13010[(i__13011 + 1)]);
} else
{return not_found;
}
});
G__13057 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13057__13058.call(this,coll,k);
case  3 :
return G__13057__13059.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13057;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13012 = this;
var h__13013 = cljs.core.hash.call(null,k);
var bucket__13014 = (this__13012.hashobj[h__13013]);

if(cljs.core.truth_(bucket__13014))
{var new_bucket__13015 = cljs.core.aclone.call(null,bucket__13014);
var new_hashobj__13016 = goog.object.clone.call(null,this__13012.hashobj);

(new_hashobj__13016[h__13013] = new_bucket__13015);
var temp__3695__auto____13019 = cljs.core.scan_array.call(null,2,k,new_bucket__13015);

if(cljs.core.truth_(temp__3695__auto____13019))
{var i__13020 = temp__3695__auto____13019;

(new_bucket__13015[(i__13020 + 1)] = v);
return (new cljs.core.HashMap(this__13012.meta,this__13012.count,new_hashobj__13016));
} else
{new_bucket__13015.push(k,v);
return (new cljs.core.HashMap(this__13012.meta,(this__13012.count + 1),new_hashobj__13016));
}
} else
{var new_hashobj__13025 = goog.object.clone.call(null,this__13012.hashobj);

(new_hashobj__13025[h__13013] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13012.meta,(this__13012.count + 1),new_hashobj__13025));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13026 = this;
var bucket__13027 = (this__13026.hashobj[cljs.core.hash.call(null,k)]);
var i__13028 = (cljs.core.truth_(bucket__13027)?cljs.core.scan_array.call(null,2,k,bucket__13027):null);

if(cljs.core.truth_(i__13028))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13067 = null;
var G__13067__13069 = (function (coll,k){
var this__13029 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13067__13070 = (function (coll,k,not_found){
var this__13034 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13067 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13067__13069.call(this,coll,k);
case  3 :
return G__13067__13070.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13067;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13035 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13036 = this;
if(cljs.core.truth_((this__13036.count > 0)))
{var hashes__13037 = cljs.core.js_keys.call(null,this__13036.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12916_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13036.hashobj[p1__12916_SHARP_])));
}),hashes__13037);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13038 = this;
return this__13038.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13039 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13040 = this;
return (new cljs.core.HashMap(meta,this__13040.count,this__13040.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13041 = this;
return this__13041.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13042 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13042.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13044 = this;
var h__13047 = cljs.core.hash.call(null,k);
var bucket__13048 = (this__13044.hashobj[h__13047]);
var i__13050 = (cljs.core.truth_(bucket__13048)?cljs.core.scan_array.call(null,2,k,bucket__13048):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13050)))
{return coll;
} else
{var new_hashobj__13051 = goog.object.clone.call(null,this__13044.hashobj);

if(cljs.core.truth_((3 > bucket__13048.length)))
{cljs.core.js_delete.call(null,new_hashobj__13051,h__13047);
} else
{var new_bucket__13054 = cljs.core.aclone.call(null,bucket__13048);

new_bucket__13054.splice(i__13050,2);
(new_hashobj__13051[h__13047] = new_bucket__13054);
}
return (new cljs.core.HashMap(this__13044.meta,(this__13044.count - 1),new_hashobj__13051));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13130 = ks.length;

var i__13132 = 0;
var out__13133 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13132 < len__13130)))
{{
var G__13137 = (i__13132 + 1);
var G__13138 = cljs.core.assoc.call(null,out__13133,(ks[i__13132]),(vs[i__13132]));
i__13132 = G__13137;
out__13133 = G__13138;
continue;
}
} else
{return out__13133;
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
var in$__13141 = cljs.core.seq.call(null,keyvals);
var out__13142 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13141))
{{
var G__13176 = cljs.core.nnext.call(null,in$__13141);
var G__13177 = cljs.core.assoc.call(null,out__13142,cljs.core.first.call(null,in$__13141),cljs.core.second.call(null,in$__13141));
in$__13141 = G__13176;
out__13142 = G__13177;
continue;
}
} else
{return out__13142;
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
hash_map.cljs$lang$applyTo = (function (arglist__13182){
var keyvals = cljs.core.seq( arglist__13182 );;
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
{return cljs.core.reduce.call(null,(function (p1__13184_SHARP_,p2__13185_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13272 = p1__13184_SHARP_;

if(cljs.core.truth_(or__3548__auto____13272))
{return or__3548__auto____13272;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13185_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13277){
var maps = cljs.core.seq( arglist__13277 );;
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
{var merge_entry__13282 = (function (m,e){
var k__13280 = cljs.core.first.call(null,e);
var v__13281 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13280)))
{return cljs.core.assoc.call(null,m,k__13280,f.call(null,cljs.core.get.call(null,m,k__13280),v__13281));
} else
{return cljs.core.assoc.call(null,m,k__13280,v__13281);
}
});
var merge2__13287 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13282,(function (){var or__3548__auto____13284 = m1;

if(cljs.core.truth_(or__3548__auto____13284))
{return or__3548__auto____13284;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13287,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13292){
var f = cljs.core.first(arglist__13292);
var maps = cljs.core.rest(arglist__13292);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13300 = cljs.core.ObjMap.fromObject([],{});
var keys__13301 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13301))
{var key__13302 = cljs.core.first.call(null,keys__13301);
var entry__13303 = cljs.core.get.call(null,map,key__13302,"﷐'user/not-found");

{
var G__13305 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13303,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13300,key__13302,entry__13303):ret__13300);
var G__13306 = cljs.core.next.call(null,keys__13301);
ret__13300 = G__13305;
keys__13301 = G__13306;
continue;
}
} else
{return ret__13300;
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
var this__13320 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13373 = null;
var G__13373__13374 = (function (coll,v){
var this__13324 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13373__13375 = (function (coll,v,not_found){
var this__13327 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13327.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13373 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13373__13374.call(this,coll,v);
case  3 :
return G__13373__13375.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13373;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13377 = null;
var G__13377__13378 = (function (coll,k){
var this__13330 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13377__13379 = (function (coll,k,not_found){
var this__13331 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13377 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13377__13378.call(this,coll,k);
case  3 :
return G__13377__13379.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13377;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13354 = this;
return (new cljs.core.Set(this__13354.meta,cljs.core.assoc.call(null,this__13354.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13356 = this;
return cljs.core.keys.call(null,this__13356.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13358 = this;
return (new cljs.core.Set(this__13358.meta,cljs.core.dissoc.call(null,this__13358.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13359 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13360 = this;
var and__3546__auto____13362 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13362))
{var and__3546__auto____13364 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13364))
{return cljs.core.every_QMARK_.call(null,(function (p1__13296_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13296_SHARP_);
}),other);
} else
{return and__3546__auto____13364;
}
} else
{return and__3546__auto____13362;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13366 = this;
return (new cljs.core.Set(meta,this__13366.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13368 = this;
return this__13368.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13370 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13370.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13398 = cljs.core.seq.call(null,coll);
var out__13399 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13398))))
{{
var G__13404 = cljs.core.rest.call(null,in$__13398);
var G__13405 = cljs.core.conj.call(null,out__13399,cljs.core.first.call(null,in$__13398));
in$__13398 = G__13404;
out__13399 = G__13405;
continue;
}
} else
{return out__13399;
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
{var n__13418 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13423 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13423))
{var e__13424 = temp__3695__auto____13423;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13424));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13418,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13393_SHARP_){
var temp__3695__auto____13428 = cljs.core.find.call(null,smap,p1__13393_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13428))
{var e__13430 = temp__3695__auto____13428;

return cljs.core.second.call(null,e__13430);
} else
{return p1__13393_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13620 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13607,seen){
while(true){
var vec__13609__13611 = p__13607;
var f__13613 = cljs.core.nth.call(null,vec__13609__13611,0,null);
var xs__13615 = vec__13609__13611;

var temp__3698__auto____13616 = cljs.core.seq.call(null,xs__13615);

if(cljs.core.truth_(temp__3698__auto____13616))
{var s__13618 = temp__3698__auto____13616;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13613)))
{{
var G__13621 = cljs.core.rest.call(null,s__13618);
var G__13622 = seen;
p__13607 = G__13621;
seen = G__13622;
continue;
}
} else
{return cljs.core.cons.call(null,f__13613,step.call(null,cljs.core.rest.call(null,s__13618),cljs.core.conj.call(null,seen,f__13613)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13620.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13628 = cljs.core.Vector.fromArray([]);
var s__13629 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13629)))
{{
var G__13631 = cljs.core.conj.call(null,ret__13628,cljs.core.first.call(null,s__13629));
var G__13632 = cljs.core.next.call(null,s__13629);
ret__13628 = G__13631;
s__13629 = G__13632;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13628);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13633 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13633))
{return or__3548__auto____13633;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13634 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13634 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13634 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13646 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13646))
{return or__3548__auto____13646;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13647 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13647 > -1)))
{return cljs.core.subs.call(null,x,2,i__13647);
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
var map__13652 = cljs.core.ObjMap.fromObject([],{});
var ks__13653 = cljs.core.seq.call(null,keys);
var vs__13654 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13655 = ks__13653;

if(cljs.core.truth_(and__3546__auto____13655))
{return vs__13654;
} else
{return and__3546__auto____13655;
}
})()))
{{
var G__13656 = cljs.core.assoc.call(null,map__13652,cljs.core.first.call(null,ks__13653),cljs.core.first.call(null,vs__13654));
var G__13657 = cljs.core.next.call(null,ks__13653);
var G__13658 = cljs.core.next.call(null,vs__13654);
map__13652 = G__13656;
ks__13653 = G__13657;
vs__13654 = G__13658;
continue;
}
} else
{return map__13652;
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
var max_key__13661 = (function (k,x){
return x;
});
var max_key__13662 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13663 = (function() { 
var G__13665__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13648_SHARP_,p2__13649_SHARP_){
return max_key.call(null,k,p1__13648_SHARP_,p2__13649_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13665 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13665__delegate.call(this, k, x, y, more);
};
G__13665.cljs$lang$maxFixedArity = 3;
G__13665.cljs$lang$applyTo = (function (arglist__13670){
var k = cljs.core.first(arglist__13670);
var x = cljs.core.first(cljs.core.next(arglist__13670));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13670)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13670)));
return G__13665__delegate.call(this, k, x, y, more);
});
return G__13665;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13661.call(this,k,x);
case  3 :
return max_key__13662.call(this,k,x,y);
default:
return max_key__13663.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13663.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13687 = (function (k,x){
return x;
});
var min_key__13688 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13689 = (function() { 
var G__13692__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13659_SHARP_,p2__13660_SHARP_){
return min_key.call(null,k,p1__13659_SHARP_,p2__13660_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13692 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13692__delegate.call(this, k, x, y, more);
};
G__13692.cljs$lang$maxFixedArity = 3;
G__13692.cljs$lang$applyTo = (function (arglist__13696){
var k = cljs.core.first(arglist__13696);
var x = cljs.core.first(cljs.core.next(arglist__13696));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13696)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13696)));
return G__13692__delegate.call(this, k, x, y, more);
});
return G__13692;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13687.call(this,k,x);
case  3 :
return min_key__13688.call(this,k,x,y);
default:
return min_key__13689.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13689.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13766 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13767 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13764 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13764))
{var s__13765 = temp__3698__auto____13764;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13765),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13765)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13766.call(this,n,step);
case  3 :
return partition_all__13767.call(this,n,step,coll);
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
var temp__3698__auto____13781 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13781))
{var s__13782 = temp__3698__auto____13781;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13782))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13782),take_while.call(null,pred,cljs.core.rest.call(null,s__13782)));
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
var this__13806 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13808 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13927 = null;
var G__13927__13928 = (function (rng,f){
var this__13809 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13927__13929 = (function (rng,f,s){
var this__13814 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13927 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13927__13928.call(this,rng,f);
case  3 :
return G__13927__13929.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13927;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13823 = this;
var comp__13825 = (cljs.core.truth_((this__13823.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13825.call(null,this__13823.start,this__13823.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13826 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13826.end - this__13826.start) / this__13826.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13829 = this;
return this__13829.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13830 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13830.meta,(this__13830.start + this__13830.step),this__13830.end,this__13830.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13832 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13834 = this;
return (new cljs.core.Range(meta,this__13834.start,this__13834.end,this__13834.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13836 = this;
return this__13836.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13989 = null;
var G__13989__13990 = (function (rng,n){
var this__13838 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13838.start + (n * this__13838.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13841 = (this__13838.start > this__13838.end);

if(cljs.core.truth_(and__3546__auto____13841))
{return cljs.core._EQ_.call(null,this__13838.step,0);
} else
{return and__3546__auto____13841;
}
})()))
{return this__13838.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13989__13991 = (function (rng,n,not_found){
var this__13843 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13843.start + (n * this__13843.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13921 = (this__13843.start > this__13843.end);

if(cljs.core.truth_(and__3546__auto____13921))
{return cljs.core._EQ_.call(null,this__13843.step,0);
} else
{return and__3546__auto____13921;
}
})()))
{return this__13843.start;
} else
{return not_found;
}
}
});
G__13989 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13989__13990.call(this,rng,n);
case  3 :
return G__13989__13991.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13989;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13922 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13922.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14007 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14008 = (function (end){
return range.call(null,0,end,1);
});
var range__14009 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14010 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14007.call(this);
case  1 :
return range__14008.call(this,start);
case  2 :
return range__14009.call(this,start,end);
case  3 :
return range__14010.call(this,start,end,step);
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
var temp__3698__auto____14023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14023))
{var s__14024 = temp__3698__auto____14023;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14024),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14024)));
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
var temp__3698__auto____14041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14041))
{var s__14042 = temp__3698__auto____14041;

var fst__14043 = cljs.core.first.call(null,s__14042);
var fv__14044 = f.call(null,fst__14043);
var run__14046 = cljs.core.cons.call(null,fst__14043,cljs.core.take_while.call(null,(function (p1__14031_SHARP_){
return cljs.core._EQ_.call(null,fv__14044,f.call(null,p1__14031_SHARP_));
}),cljs.core.next.call(null,s__14042)));

return cljs.core.cons.call(null,run__14046,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14046),s__14042))));
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
var reductions__14092 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14082))
{var s__14083 = temp__3695__auto____14082;

return reductions.call(null,f,cljs.core.first.call(null,s__14083),cljs.core.rest.call(null,s__14083));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14093 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14088 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14088))
{var s__14090 = temp__3698__auto____14088;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14090)),cljs.core.rest.call(null,s__14090));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14092.call(this,f,init);
case  3 :
return reductions__14093.call(this,f,init,coll);
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
var juxt__14147 = (function (f){
return (function() {
var G__14154 = null;
var G__14154__14155 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14154__14156 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14154__14157 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14154__14158 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14154__14159 = (function() { 
var G__14169__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14169 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14169__delegate.call(this, x, y, z, args);
};
G__14169.cljs$lang$maxFixedArity = 3;
G__14169.cljs$lang$applyTo = (function (arglist__14172){
var x = cljs.core.first(arglist__14172);
var y = cljs.core.first(cljs.core.next(arglist__14172));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14172)));
return G__14169__delegate.call(this, x, y, z, args);
});
return G__14169;
})()
;
G__14154 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14154__14155.call(this);
case  1 :
return G__14154__14156.call(this,x);
case  2 :
return G__14154__14157.call(this,x,y);
case  3 :
return G__14154__14158.call(this,x,y,z);
default:
return G__14154__14159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14154.cljs$lang$maxFixedArity = 3;
G__14154.cljs$lang$applyTo = G__14154__14159.cljs$lang$applyTo;
return G__14154;
})()
});
var juxt__14148 = (function (f,g){
return (function() {
var G__14179 = null;
var G__14179__14181 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14179__14182 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14179__14183 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14179__14184 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14179__14185 = (function() { 
var G__14192__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14192 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14192__delegate.call(this, x, y, z, args);
};
G__14192.cljs$lang$maxFixedArity = 3;
G__14192.cljs$lang$applyTo = (function (arglist__14195){
var x = cljs.core.first(arglist__14195);
var y = cljs.core.first(cljs.core.next(arglist__14195));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14195)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14195)));
return G__14192__delegate.call(this, x, y, z, args);
});
return G__14192;
})()
;
G__14179 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14179__14181.call(this);
case  1 :
return G__14179__14182.call(this,x);
case  2 :
return G__14179__14183.call(this,x,y);
case  3 :
return G__14179__14184.call(this,x,y,z);
default:
return G__14179__14185.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14179.cljs$lang$maxFixedArity = 3;
G__14179.cljs$lang$applyTo = G__14179__14185.cljs$lang$applyTo;
return G__14179;
})()
});
var juxt__14149 = (function (f,g,h){
return (function() {
var G__14198 = null;
var G__14198__14199 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14198__14200 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14198__14201 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14198__14202 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14198__14203 = (function() { 
var G__14209__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14209 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14209__delegate.call(this, x, y, z, args);
};
G__14209.cljs$lang$maxFixedArity = 3;
G__14209.cljs$lang$applyTo = (function (arglist__14215){
var x = cljs.core.first(arglist__14215);
var y = cljs.core.first(cljs.core.next(arglist__14215));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14215)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14215)));
return G__14209__delegate.call(this, x, y, z, args);
});
return G__14209;
})()
;
G__14198 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14198__14199.call(this);
case  1 :
return G__14198__14200.call(this,x);
case  2 :
return G__14198__14201.call(this,x,y);
case  3 :
return G__14198__14202.call(this,x,y,z);
default:
return G__14198__14203.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14198.cljs$lang$maxFixedArity = 3;
G__14198.cljs$lang$applyTo = G__14198__14203.cljs$lang$applyTo;
return G__14198;
})()
});
var juxt__14150 = (function() { 
var G__14217__delegate = function (f,g,h,fs){
var fs__14134 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14218 = null;
var G__14218__14221 = (function (){
return cljs.core.reduce.call(null,(function (p1__14071_SHARP_,p2__14072_SHARP_){
return cljs.core.conj.call(null,p1__14071_SHARP_,p2__14072_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14134);
});
var G__14218__14222 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14073_SHARP_,p2__14074_SHARP_){
return cljs.core.conj.call(null,p1__14073_SHARP_,p2__14074_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14134);
});
var G__14218__14223 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14075_SHARP_,p2__14076_SHARP_){
return cljs.core.conj.call(null,p1__14075_SHARP_,p2__14076_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14134);
});
var G__14218__14224 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14077_SHARP_,p2__14078_SHARP_){
return cljs.core.conj.call(null,p1__14077_SHARP_,p2__14078_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14134);
});
var G__14218__14225 = (function() { 
var G__14235__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14079_SHARP_,p2__14080_SHARP_){
return cljs.core.conj.call(null,p1__14079_SHARP_,cljs.core.apply.call(null,p2__14080_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14134);
};
var G__14235 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14235__delegate.call(this, x, y, z, args);
};
G__14235.cljs$lang$maxFixedArity = 3;
G__14235.cljs$lang$applyTo = (function (arglist__14238){
var x = cljs.core.first(arglist__14238);
var y = cljs.core.first(cljs.core.next(arglist__14238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14238)));
return G__14235__delegate.call(this, x, y, z, args);
});
return G__14235;
})()
;
G__14218 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14218__14221.call(this);
case  1 :
return G__14218__14222.call(this,x);
case  2 :
return G__14218__14223.call(this,x,y);
case  3 :
return G__14218__14224.call(this,x,y,z);
default:
return G__14218__14225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14218.cljs$lang$maxFixedArity = 3;
G__14218.cljs$lang$applyTo = G__14218__14225.cljs$lang$applyTo;
return G__14218;
})()
};
var G__14217 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14217__delegate.call(this, f, g, h, fs);
};
G__14217.cljs$lang$maxFixedArity = 3;
G__14217.cljs$lang$applyTo = (function (arglist__14241){
var f = cljs.core.first(arglist__14241);
var g = cljs.core.first(cljs.core.next(arglist__14241));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14241)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14241)));
return G__14217__delegate.call(this, f, g, h, fs);
});
return G__14217;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14147.call(this,f);
case  2 :
return juxt__14148.call(this,f,g);
case  3 :
return juxt__14149.call(this,f,g,h);
default:
return juxt__14150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14150.cljs$lang$applyTo;
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
var dorun__14250 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14253 = cljs.core.next.call(null,coll);
coll = G__14253;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14251 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14248 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14248))
{return (n > 0);
} else
{return and__3546__auto____14248;
}
})()))
{{
var G__14254 = (n - 1);
var G__14255 = cljs.core.next.call(null,coll);
n = G__14254;
coll = G__14255;
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
return dorun__14250.call(this,n);
case  2 :
return dorun__14251.call(this,n,coll);
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
var doall__14257 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14258 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14257.call(this,n);
case  2 :
return doall__14258.call(this,n,coll);
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
var matches__14264 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14264),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14264),1)))
{return cljs.core.first.call(null,matches__14264);
} else
{return cljs.core.vec.call(null,matches__14264);
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
var matches__14273 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14273)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14273),1)))
{return cljs.core.first.call(null,matches__14273);
} else
{return cljs.core.vec.call(null,matches__14273);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14279 = cljs.core.re_find.call(null,re,s);
var match_idx__14281 = s.search(re);
var match_str__14282 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14279))?cljs.core.first.call(null,match_data__14279):match_data__14279);
var post_match__14284 = cljs.core.subs.call(null,s,(match_idx__14281 + cljs.core.count.call(null,match_str__14282)));

if(cljs.core.truth_(match_data__14279))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14279,re_seq.call(null,re,post_match__14284));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14295_SHARP_){
return print_one.call(null,p1__14295_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14396 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14396))
{var and__3546__auto____14400 = (function (){var x__445__auto____14397 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14398 = x__445__auto____14397;

if(cljs.core.truth_(and__3546__auto____14398))
{var and__3546__auto____14399 = x__445__auto____14397.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14399))
{return cljs.core.not.call(null,x__445__auto____14397.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14399;
}
} else
{return and__3546__auto____14398;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14397);
}
})();

if(cljs.core.truth_(and__3546__auto____14400))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14400;
}
} else
{return and__3546__auto____14396;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14401 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14402 = x__445__auto____14401;

if(cljs.core.truth_(and__3546__auto____14402))
{var and__3546__auto____14403 = x__445__auto____14401.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14403))
{return cljs.core.not.call(null,x__445__auto____14401.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14403;
}
} else
{return and__3546__auto____14402;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14401);
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
var first_obj__14429 = cljs.core.first.call(null,objs);
var sb__14431 = (new goog.string.StringBuffer());

var G__14432__14433 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14432__14433))
{var obj__14436 = cljs.core.first.call(null,G__14432__14433);
var G__14432__14437 = G__14432__14433;

while(true){
if(cljs.core.truth_((obj__14436 === first_obj__14429)))
{} else
{sb__14431.append(" ");
}
var G__14439__14443 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14436,opts));

if(cljs.core.truth_(G__14439__14443))
{var string__14445 = cljs.core.first.call(null,G__14439__14443);
var G__14439__14446 = G__14439__14443;

while(true){
sb__14431.append(string__14445);
var temp__3698__auto____14449 = cljs.core.next.call(null,G__14439__14446);

if(cljs.core.truth_(temp__3698__auto____14449))
{var G__14439__14454 = temp__3698__auto____14449;

{
var G__14461 = cljs.core.first.call(null,G__14439__14454);
var G__14462 = G__14439__14454;
string__14445 = G__14461;
G__14439__14446 = G__14462;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14456 = cljs.core.next.call(null,G__14432__14437);

if(cljs.core.truth_(temp__3698__auto____14456))
{var G__14432__14457 = temp__3698__auto____14456;

{
var G__14463 = cljs.core.first.call(null,G__14432__14457);
var G__14464 = G__14432__14457;
obj__14436 = G__14463;
G__14432__14437 = G__14464;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14431);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14469 = cljs.core.first.call(null,objs);

var G__14470__14472 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14470__14472))
{var obj__14474 = cljs.core.first.call(null,G__14470__14472);
var G__14470__14475 = G__14470__14472;

while(true){
if(cljs.core.truth_((obj__14474 === first_obj__14469)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14478__14480 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14474,opts));

if(cljs.core.truth_(G__14478__14480))
{var string__14481 = cljs.core.first.call(null,G__14478__14480);
var G__14478__14482 = G__14478__14480;

while(true){
cljs.core.string_print.call(null,string__14481);
var temp__3698__auto____14483 = cljs.core.next.call(null,G__14478__14482);

if(cljs.core.truth_(temp__3698__auto____14483))
{var G__14478__14484 = temp__3698__auto____14483;

{
var G__14499 = cljs.core.first.call(null,G__14478__14484);
var G__14500 = G__14478__14484;
string__14481 = G__14499;
G__14478__14482 = G__14500;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14489 = cljs.core.next.call(null,G__14470__14475);

if(cljs.core.truth_(temp__3698__auto____14489))
{var G__14470__14490 = temp__3698__auto____14489;

{
var G__14506 = cljs.core.first.call(null,G__14470__14490);
var G__14507 = G__14470__14490;
obj__14474 = G__14506;
G__14470__14475 = G__14507;
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
pr_str.cljs$lang$applyTo = (function (arglist__14528){
var objs = cljs.core.seq( arglist__14528 );;
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
pr.cljs$lang$applyTo = (function (arglist__14529){
var objs = cljs.core.seq( arglist__14529 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14536){
var objs = cljs.core.seq( arglist__14536 );;
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
println.cljs$lang$applyTo = (function (arglist__14540){
var objs = cljs.core.seq( arglist__14540 );;
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
prn.cljs$lang$applyTo = (function (arglist__14542){
var objs = cljs.core.seq( arglist__14542 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14543 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14543,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14549 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14549))
{var nspc__14550 = temp__3698__auto____14549;

return cljs.core.str.call(null,nspc__14550,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14551 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14551))
{var nspc__14552 = temp__3698__auto____14551;

return cljs.core.str.call(null,nspc__14552,"/");
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
var pr_pair__14618 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14618,"{",", ","}",opts,coll);
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
var this__14646 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14647 = this;
var G__14648__14649 = cljs.core.seq.call(null,this__14647.watches);

if(cljs.core.truth_(G__14648__14649))
{var G__14651__14653 = cljs.core.first.call(null,G__14648__14649);
var vec__14652__14654 = G__14651__14653;
var key__14655 = cljs.core.nth.call(null,vec__14652__14654,0,null);
var f__14656 = cljs.core.nth.call(null,vec__14652__14654,1,null);
var G__14648__14657 = G__14648__14649;

var G__14651__14658 = G__14651__14653;
var G__14648__14659 = G__14648__14657;

while(true){
var vec__14660__14661 = G__14651__14658;
var key__14662 = cljs.core.nth.call(null,vec__14660__14661,0,null);
var f__14663 = cljs.core.nth.call(null,vec__14660__14661,1,null);
var G__14648__14664 = G__14648__14659;

f__14663.call(null,key__14662,this$,oldval,newval);
var temp__3698__auto____14665 = cljs.core.next.call(null,G__14648__14664);

if(cljs.core.truth_(temp__3698__auto____14665))
{var G__14648__14666 = temp__3698__auto____14665;

{
var G__14701 = cljs.core.first.call(null,G__14648__14666);
var G__14703 = G__14648__14666;
G__14651__14658 = G__14701;
G__14648__14659 = G__14703;
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
var this__14667 = this;
return this$.watches = cljs.core.assoc.call(null,this__14667.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14668 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14668.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14669 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14669.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14670 = this;
return this__14670.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14671 = this;
return this__14671.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14672 = this;
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
var atom__14752 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14753 = (function() { 
var G__14757__delegate = function (x,p__14726){
var map__14727__14731 = p__14726;
var map__14727__14735 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14727__14731))?cljs.core.apply.call(null,cljs.core.hash_map,map__14727__14731):map__14727__14731);
var validator__14736 = cljs.core.get.call(null,map__14727__14735,"﷐'validator");
var meta__14737 = cljs.core.get.call(null,map__14727__14735,"﷐'meta");

return (new cljs.core.Atom(x,meta__14737,validator__14736,null));
};
var G__14757 = function (x,var_args){
var p__14726 = null;
if (goog.isDef(var_args)) {
  p__14726 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14757__delegate.call(this, x, p__14726);
};
G__14757.cljs$lang$maxFixedArity = 1;
G__14757.cljs$lang$applyTo = (function (arglist__14758){
var x = cljs.core.first(arglist__14758);
var p__14726 = cljs.core.rest(arglist__14758);
return G__14757__delegate.call(this, x, p__14726);
});
return G__14757;
})()
;
atom = function(x,var_args){
var p__14726 = var_args;
switch(arguments.length){
case  1 :
return atom__14752.call(this,x);
default:
return atom__14753.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14753.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14767 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14767))
{var validate__14770 = temp__3698__auto____14767;

if(cljs.core.truth_(validate__14770.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14771 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14771,new_value);
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
var swap_BANG___14775 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14776 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14777 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14778 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14779 = (function() { 
var G__14783__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14783 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14783__delegate.call(this, a, f, x, y, z, more);
};
G__14783.cljs$lang$maxFixedArity = 5;
G__14783.cljs$lang$applyTo = (function (arglist__14787){
var a = cljs.core.first(arglist__14787);
var f = cljs.core.first(cljs.core.next(arglist__14787));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14787)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14787))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14787)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14787)))));
return G__14783__delegate.call(this, a, f, x, y, z, more);
});
return G__14783;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14775.call(this,a,f);
case  3 :
return swap_BANG___14776.call(this,a,f,x);
case  4 :
return swap_BANG___14777.call(this,a,f,x,y);
case  5 :
return swap_BANG___14778.call(this,a,f,x,y,z);
default:
return swap_BANG___14779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14779.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14832){
var iref = cljs.core.first(arglist__14832);
var f = cljs.core.first(cljs.core.next(arglist__14832));
var args = cljs.core.rest(cljs.core.next(arglist__14832));
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
var gensym__14846 = (function (){
return gensym.call(null,"G__");
});
var gensym__14847 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14846.call(this);
case  1 :
return gensym__14847.call(this,prefix_string);
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
var this__14868 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14868.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14874 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14874.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14874.state,this__14874.f);
}
return cljs.core.deref.call(null,this__14874.state);
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
delay.cljs$lang$applyTo = (function (arglist__14891){
var body = cljs.core.seq( arglist__14891 );;
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
var map__14902__14906 = options;
var map__14902__14907 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14902__14906))?cljs.core.apply.call(null,cljs.core.hash_map,map__14902__14906):map__14902__14906);
var keywordize_keys__14908 = cljs.core.get.call(null,map__14902__14907,"﷐'keywordize-keys");
var keyfn__14909 = (cljs.core.truth_(keywordize_keys__14908)?cljs.core.keyword:cljs.core.str);
var f__14921 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14919 = (function iter__14914(s__14915){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14915__14917 = s__14915;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14915__14917)))
{var k__14918 = cljs.core.first.call(null,s__14915__14917);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14909.call(null,k__14918),thisfn.call(null,(x[k__14918]))]),iter__14914.call(null,cljs.core.rest.call(null,s__14915__14917)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14919.call(null,cljs.core.js_keys.call(null,x));
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

return f__14921.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14935){
var x = cljs.core.first(arglist__14935);
var options = cljs.core.rest(arglist__14935);
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
var mem__14940 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14949__delegate = function (args){
var temp__3695__auto____14941 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14940),args);

if(cljs.core.truth_(temp__3695__auto____14941))
{var v__14942 = temp__3695__auto____14941;

return v__14942;
} else
{var ret__14943 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14940,cljs.core.assoc,args,ret__14943);
return ret__14943;
}
};
var G__14949 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14949__delegate.call(this, args);
};
G__14949.cljs$lang$maxFixedArity = 0;
G__14949.cljs$lang$applyTo = (function (arglist__14951){
var args = cljs.core.seq( arglist__14951 );;
return G__14949__delegate.call(this, args);
});
return G__14949;
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
var trampoline__14975 = (function (f){
while(true){
var ret__14952 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14952)))
{{
var G__14978 = ret__14952;
f = G__14978;
continue;
}
} else
{return ret__14952;
}
break;
}
});
var trampoline__14976 = (function() { 
var G__14980__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14980 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14980__delegate.call(this, f, args);
};
G__14980.cljs$lang$maxFixedArity = 1;
G__14980.cljs$lang$applyTo = (function (arglist__14981){
var f = cljs.core.first(arglist__14981);
var args = cljs.core.rest(arglist__14981);
return G__14980__delegate.call(this, f, args);
});
return G__14980;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14975.call(this,f);
default:
return trampoline__14976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14976.cljs$lang$applyTo;
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
var k__14999 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14999,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14999,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15047 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15048 = (function (h,child,parent){
var or__3548__auto____15035 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15035))
{return or__3548__auto____15035;
} else
{var or__3548__auto____15036 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15036))
{return or__3548__auto____15036;
} else
{var and__3546__auto____15037 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15037))
{var and__3546__auto____15038 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15038))
{var and__3546__auto____15039 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15039))
{var ret__15040 = true;
var i__15041 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15043 = cljs.core.not.call(null,ret__15040);

if(cljs.core.truth_(or__3548__auto____15043))
{return or__3548__auto____15043;
} else
{return cljs.core._EQ_.call(null,i__15041,cljs.core.count.call(null,parent));
}
})()))
{return ret__15040;
} else
{{
var G__15057 = isa_QMARK_.call(null,h,child.call(null,i__15041),parent.call(null,i__15041));
var G__15058 = (i__15041 + 1);
ret__15040 = G__15057;
i__15041 = G__15058;
continue;
}
}
break;
}
} else
{return and__3546__auto____15039;
}
} else
{return and__3546__auto____15038;
}
} else
{return and__3546__auto____15037;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15047.call(this,h,child);
case  3 :
return isa_QMARK___15048.call(this,h,child,parent);
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
var parents__15065 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15066 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15065.call(this,h);
case  2 :
return parents__15066.call(this,h,tag);
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
var ancestors__15074 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15075 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15074.call(this,h);
case  2 :
return ancestors__15075.call(this,h,tag);
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
var descendants__15151 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15152 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15151.call(this,h);
case  2 :
return descendants__15152.call(this,h,tag);
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
var derive__15237 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15239 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15228 = "﷐'parents".call(null,h);
var td__15229 = "﷐'descendants".call(null,h);
var ta__15232 = "﷐'ancestors".call(null,h);
var tf__15234 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15235 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15228.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15232.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15232.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15228,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15234.call(null,"﷐'ancestors".call(null,h),tag,td__15229,parent,ta__15232),"﷐'descendants":tf__15234.call(null,"﷐'descendants".call(null,h),parent,ta__15232,tag,td__15229)});
})());

if(cljs.core.truth_(or__3548__auto____15235))
{return or__3548__auto____15235;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15237.call(this,h,tag);
case  3 :
return derive__15239.call(this,h,tag,parent);
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
var underive__15252 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15253 = (function (h,tag,parent){
var parentMap__15243 = "﷐'parents".call(null,h);
var childsParents__15244 = (cljs.core.truth_(parentMap__15243.call(null,tag))?cljs.core.disj.call(null,parentMap__15243.call(null,tag),parent):cljs.core.set([]));
var newParents__15247 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15244))?cljs.core.assoc.call(null,parentMap__15243,tag,childsParents__15244):cljs.core.dissoc.call(null,parentMap__15243,tag));
var deriv_seq__15249 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15218_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15218_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15218_SHARP_),cljs.core.second.call(null,p1__15218_SHARP_)));
}),cljs.core.seq.call(null,newParents__15247)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15243.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15220_SHARP_,p2__15222_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15220_SHARP_,p2__15222_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15249));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15252.call(this,h,tag);
case  3 :
return underive__15253.call(this,h,tag,parent);
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
var xprefs__15263 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15265 = (cljs.core.truth_((function (){var and__3546__auto____15264 = xprefs__15263;

if(cljs.core.truth_(and__3546__auto____15264))
{return xprefs__15263.call(null,y);
} else
{return and__3546__auto____15264;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15265))
{return or__3548__auto____15265;
} else
{var or__3548__auto____15267 = (function (){var ps__15266 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15266) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15266),prefer_table)))
{} else
{}
{
var G__15270 = cljs.core.rest.call(null,ps__15266);
ps__15266 = G__15270;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15267))
{return or__3548__auto____15267;
} else
{var or__3548__auto____15269 = (function (){var ps__15268 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15268) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15268),y,prefer_table)))
{} else
{}
{
var G__15271 = cljs.core.rest.call(null,ps__15268);
ps__15268 = G__15271;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15269))
{return or__3548__auto____15269;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15272 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15272))
{return or__3548__auto____15272;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15288 = cljs.core.reduce.call(null,(function (be,p__15277){
var vec__15278__15279 = p__15277;
var k__15280 = cljs.core.nth.call(null,vec__15278__15279,0,null);
var ___15281 = cljs.core.nth.call(null,vec__15278__15279,1,null);
var e__15282 = vec__15278__15279;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15280)))
{var be2__15287 = (cljs.core.truth_((function (){var or__3548__auto____15283 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15283))
{return or__3548__auto____15283;
} else
{return cljs.core.dominates.call(null,k__15280,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15282:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15287),k__15280,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15280," and ",cljs.core.first.call(null,be2__15287),", and neither is preferred")));
}
return be2__15287;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15288))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15288));
return cljs.core.second.call(null,best_entry__15288);
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
if(cljs.core.truth_((function (){var and__3546__auto____15303 = mf;

if(cljs.core.truth_(and__3546__auto____15303))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15303;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15341 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15341))
{return or__3548__auto____15341;
} else
{var or__3548__auto____15345 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15345))
{return or__3548__auto____15345;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15348 = mf;

if(cljs.core.truth_(and__3546__auto____15348))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15348;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15350 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15350))
{return or__3548__auto____15350;
} else
{var or__3548__auto____15351 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15351))
{return or__3548__auto____15351;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15356 = mf;

if(cljs.core.truth_(and__3546__auto____15356))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15356;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15359 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15359))
{return or__3548__auto____15359;
} else
{var or__3548__auto____15361 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15361))
{return or__3548__auto____15361;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15363 = mf;

if(cljs.core.truth_(and__3546__auto____15363))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15363;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15365 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15365))
{return or__3548__auto____15365;
} else
{var or__3548__auto____15367 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15369 = mf;

if(cljs.core.truth_(and__3546__auto____15369))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15369;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15374 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15374))
{return or__3548__auto____15374;
} else
{var or__3548__auto____15376 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15376))
{return or__3548__auto____15376;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15379 = mf;

if(cljs.core.truth_(and__3546__auto____15379))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15379;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15383 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15383))
{return or__3548__auto____15383;
} else
{var or__3548__auto____15385 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15387 = mf;

if(cljs.core.truth_(and__3546__auto____15387))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15387;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15391 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{var or__3548__auto____15392 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15392))
{return or__3548__auto____15392;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15394 = mf;

if(cljs.core.truth_(and__3546__auto____15394))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15394;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15395 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15395))
{return or__3548__auto____15395;
} else
{var or__3548__auto____15396 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15396))
{return or__3548__auto____15396;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15423 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15424 = cljs.core._get_method.call(null,mf,dispatch_val__15423);

if(cljs.core.truth_(target_fn__15424))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15423)));
}
return cljs.core.apply.call(null,target_fn__15424,args);
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
var this__15425 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15426 = this;
cljs.core.swap_BANG_.call(null,this__15426.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15426.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15426.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15426.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15427 = this;
cljs.core.swap_BANG_.call(null,this__15427.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15427.method_cache,this__15427.method_table,this__15427.cached_hierarchy,this__15427.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15428 = this;
cljs.core.swap_BANG_.call(null,this__15428.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15428.method_cache,this__15428.method_table,this__15428.cached_hierarchy,this__15428.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15429 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15429.cached_hierarchy),cljs.core.deref.call(null,this__15429.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15429.method_cache,this__15429.method_table,this__15429.cached_hierarchy,this__15429.hierarchy);
}
var temp__3695__auto____15430 = cljs.core.deref.call(null,this__15429.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15430))
{var target_fn__15431 = temp__3695__auto____15430;

return target_fn__15431;
} else
{var temp__3695__auto____15432 = cljs.core.find_and_cache_best_method.call(null,this__15429.name,dispatch_val,this__15429.hierarchy,this__15429.method_table,this__15429.prefer_table,this__15429.method_cache,this__15429.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15432))
{var target_fn__15433 = temp__3695__auto____15432;

return target_fn__15433;
} else
{return cljs.core.deref.call(null,this__15429.method_table).call(null,this__15429.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15434 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15434.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15434.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15434.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15434.method_cache,this__15434.method_table,this__15434.cached_hierarchy,this__15434.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15435 = this;
return cljs.core.deref.call(null,this__15435.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15436 = this;
return cljs.core.deref.call(null,this__15436.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15437 = this;
return cljs.core.do_dispatch.call(null,mf,this__15437.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15448__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15448 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15448__delegate.call(this, _, args);
};
G__15448.cljs$lang$maxFixedArity = 1;
G__15448.cljs$lang$applyTo = (function (arglist__15449){
var _ = cljs.core.first(arglist__15449);
var args = cljs.core.rest(arglist__15449);
return G__15448__delegate.call(this, _, args);
});
return G__15448;
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
