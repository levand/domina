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
{var or__3548__auto____7256 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7256))
{return or__3548__auto____7256;
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
var _invoke__7545 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7289 = this$;

if(cljs.core.truth_(and__3546__auto____7289))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7289;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7291 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7291))
{return or__3548__auto____7291;
} else
{var or__3548__auto____7293 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7546 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7294 = this$;

if(cljs.core.truth_(and__3546__auto____7294))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7294;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7297 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{var or__3548__auto____7298 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7547 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7299 = this$;

if(cljs.core.truth_(and__3546__auto____7299))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7299;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7301 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{var or__3548__auto____7303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7548 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7306 = this$;

if(cljs.core.truth_(and__3546__auto____7306))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7306;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7309 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
} else
{var or__3548__auto____7311 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7549 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7315 = this$;

if(cljs.core.truth_(and__3546__auto____7315))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7315;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7318 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{var or__3548__auto____7320 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7550 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{var or__3548__auto____7328 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7551 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7333 = this$;

if(cljs.core.truth_(and__3546__auto____7333))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7333;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7343 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{var or__3548__auto____7346 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7552 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7350 = this$;

if(cljs.core.truth_(and__3546__auto____7350))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7350;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{var or__3548__auto____7357 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7357))
{return or__3548__auto____7357;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7363 = this$;

if(cljs.core.truth_(and__3546__auto____7363))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7363;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
} else
{var or__3548__auto____7370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7554 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7405 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7556 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = this$;

if(cljs.core.truth_(and__3546__auto____7423))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7423;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7427 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{var or__3548__auto____7429 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7432 = this$;

if(cljs.core.truth_(and__3546__auto____7432))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7432;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7435 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7435))
{return or__3548__auto____7435;
} else
{var or__3548__auto____7438 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7440 = this$;

if(cljs.core.truth_(and__3546__auto____7440))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7440;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7443 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7443))
{return or__3548__auto____7443;
} else
{var or__3548__auto____7445 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7559 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7449 = this$;

if(cljs.core.truth_(and__3546__auto____7449))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7449;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7452 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7452))
{return or__3548__auto____7452;
} else
{var or__3548__auto____7454 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7454))
{return or__3548__auto____7454;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7560 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7458 = this$;

if(cljs.core.truth_(and__3546__auto____7458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{var or__3548__auto____7466 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7466))
{return or__3548__auto____7466;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7470 = this$;

if(cljs.core.truth_(and__3546__auto____7470))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7470;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7475 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{var or__3548__auto____7478 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7563 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7487 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7487))
{return or__3548__auto____7487;
} else
{var or__3548__auto____7489 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7564 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7495 = this$;

if(cljs.core.truth_(and__3546__auto____7495))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7495;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7499 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7499))
{return or__3548__auto____7499;
} else
{var or__3548__auto____7501 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7565 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7507 = this$;

if(cljs.core.truth_(and__3546__auto____7507))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7507;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7509 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7509))
{return or__3548__auto____7509;
} else
{var or__3548__auto____7512 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7512))
{return or__3548__auto____7512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7566 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7517 = this$;

if(cljs.core.truth_(and__3546__auto____7517))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7517;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7519 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{var or__3548__auto____7521 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7521))
{return or__3548__auto____7521;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7567 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7530 = this$;

if(cljs.core.truth_(and__3546__auto____7530))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7530;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7537 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{var or__3548__auto____7538 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7538))
{return or__3548__auto____7538;
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
return _invoke__7545.call(this,this$);
case  2 :
return _invoke__7546.call(this,this$,a);
case  3 :
return _invoke__7547.call(this,this$,a,b);
case  4 :
return _invoke__7548.call(this,this$,a,b,c);
case  5 :
return _invoke__7549.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7550.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7551.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7552.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7554.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7556.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7559.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7560.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7563.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7564.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7565.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7566.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7567.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7692 = coll;

if(cljs.core.truth_(and__3546__auto____7692))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7692;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7694 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7694))
{return or__3548__auto____7694;
} else
{var or__3548__auto____7695 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7695))
{return or__3548__auto____7695;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7698 = coll;

if(cljs.core.truth_(and__3546__auto____7698))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7698;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7703 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7703))
{return or__3548__auto____7703;
} else
{var or__3548__auto____7704 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7710 = coll;

if(cljs.core.truth_(and__3546__auto____7710))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7710;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7712 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
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
var _nth__7724 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7716 = coll;

if(cljs.core.truth_(and__3546__auto____7716))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7716;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7717 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{var or__3548__auto____7718 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7725 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7719 = coll;

if(cljs.core.truth_(and__3546__auto____7719))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7719;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7720 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
} else
{var or__3548__auto____7722 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
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
return _nth__7724.call(this,coll,n);
case  3 :
return _nth__7725.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7729 = coll;

if(cljs.core.truth_(and__3546__auto____7729))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7729;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7734 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7736 = coll;

if(cljs.core.truth_(and__3546__auto____7736))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7736;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7741 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
} else
{var or__3548__auto____7742 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
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
var _lookup__7757 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7746 = o;

if(cljs.core.truth_(and__3546__auto____7746))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7746;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7749 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{var or__3548__auto____7750 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7750))
{return or__3548__auto____7750;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7758 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7751 = o;

if(cljs.core.truth_(and__3546__auto____7751))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7751;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7754 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7754))
{return or__3548__auto____7754;
} else
{var or__3548__auto____7755 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
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
return _lookup__7757.call(this,o,k);
case  3 :
return _lookup__7758.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7806 = coll;

if(cljs.core.truth_(and__3546__auto____7806))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7806;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7825 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{var or__3548__auto____7826 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7826))
{return or__3548__auto____7826;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7828 = coll;

if(cljs.core.truth_(and__3546__auto____7828))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7828;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7830 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{var or__3548__auto____7832 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7839 = coll;

if(cljs.core.truth_(and__3546__auto____7839))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7839;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7840 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7840))
{return or__3548__auto____7840;
} else
{var or__3548__auto____7841 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7849 = coll;

if(cljs.core.truth_(and__3546__auto____7849))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7849;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7852 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
} else
{var or__3548__auto____7853 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7853))
{return or__3548__auto____7853;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7857 = coll;

if(cljs.core.truth_(and__3546__auto____7857))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7857;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7859 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7863 = coll;

if(cljs.core.truth_(and__3546__auto____7863))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7863;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7865 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{var or__3548__auto____7866 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7899 = coll;

if(cljs.core.truth_(and__3546__auto____7899))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7899;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7974 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{var or__3548__auto____7975 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7979 = o;

if(cljs.core.truth_(and__3546__auto____7979))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7979;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7983 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = o;

if(cljs.core.truth_(and__3546__auto____7985))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7985;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7986 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{var or__3548__auto____7987 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7987))
{return or__3548__auto____7987;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7990 = o;

if(cljs.core.truth_(and__3546__auto____7990))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7990;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7992 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{var or__3548__auto____7993 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7993))
{return or__3548__auto____7993;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7997 = o;

if(cljs.core.truth_(and__3546__auto____7997))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7997;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7998 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{var or__3548__auto____7999 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
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
var _reduce__8067 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8005 = coll;

if(cljs.core.truth_(and__3546__auto____8005))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8005;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8008 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{var or__3548__auto____8010 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8068 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = coll;

if(cljs.core.truth_(and__3546__auto____8063))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8063;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8066 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
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
return _reduce__8067.call(this,coll,f);
case  3 :
return _reduce__8068.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = o;

if(cljs.core.truth_(and__3546__auto____8091))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8091;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8093 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8093))
{return or__3548__auto____8093;
} else
{var or__3548__auto____8095 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8095))
{return or__3548__auto____8095;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8101 = o;

if(cljs.core.truth_(and__3546__auto____8101))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8101;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8103 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{var or__3548__auto____8106 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8109 = o;

if(cljs.core.truth_(and__3546__auto____8109))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8109;
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
if(cljs.core.truth_((function (){var and__3546__auto____8115 = o;

if(cljs.core.truth_(and__3546__auto____8115))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8115;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8117 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{var or__3548__auto____8119 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8124 = d;

if(cljs.core.truth_(and__3546__auto____8124))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8124;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8125 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
} else
{var or__3548__auto____8127 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8130 = this$;

if(cljs.core.truth_(and__3546__auto____8130))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8130;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8131 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8133 = this$;

if(cljs.core.truth_(and__3546__auto____8133))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8133;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8134 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8134))
{return or__3548__auto____8134;
} else
{var or__3548__auto____8135 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8136 = this$;

if(cljs.core.truth_(and__3546__auto____8136))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8136;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8137 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
} else
{var or__3548__auto____8138 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8138))
{return or__3548__auto____8138;
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
var G__8238 = null;
var G__8238__8239 = (function (o,k){
return null;
});
var G__8238__8240 = (function (o,k,not_found){
return not_found;
});
G__8238 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8238__8239.call(this,o,k);
case  3 :
return G__8238__8240.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8238;
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
var G__8242 = null;
var G__8242__8243 = (function (_,f){
return f.call(null);
});
var G__8242__8244 = (function (_,f,start){
return start;
});
G__8242 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8242__8243.call(this,_,f);
case  3 :
return G__8242__8244.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8242;
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
var G__8253 = null;
var G__8253__8255 = (function (_,n){
return null;
});
var G__8253__8256 = (function (_,n,not_found){
return not_found;
});
G__8253 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8253__8255.call(this,_,n);
case  3 :
return G__8253__8256.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8253;
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
var ci_reduce__8299 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8271 = cljs.core._nth.call(null,cicoll,0);
var n__8272 = 1;

while(true){
if(cljs.core.truth_((n__8272 < cljs.core._count.call(null,cicoll))))
{{
var G__8307 = f.call(null,val__8271,cljs.core._nth.call(null,cicoll,n__8272));
var G__8308 = (n__8272 + 1);
val__8271 = G__8307;
n__8272 = G__8308;
continue;
}
} else
{return val__8271;
}
break;
}
}
});
var ci_reduce__8300 = (function (cicoll,f,val){
var val__8273 = val;
var n__8274 = 0;

while(true){
if(cljs.core.truth_((n__8274 < cljs.core._count.call(null,cicoll))))
{{
var G__8312 = f.call(null,val__8273,cljs.core._nth.call(null,cicoll,n__8274));
var G__8314 = (n__8274 + 1);
val__8273 = G__8312;
n__8274 = G__8314;
continue;
}
} else
{return val__8273;
}
break;
}
});
var ci_reduce__8301 = (function (cicoll,f,val,idx){
var val__8291 = val;
var n__8292 = idx;

while(true){
if(cljs.core.truth_((n__8292 < cljs.core._count.call(null,cicoll))))
{{
var G__8316 = f.call(null,val__8291,cljs.core._nth.call(null,cicoll,n__8292));
var G__8317 = (n__8292 + 1);
val__8291 = G__8316;
n__8292 = G__8317;
continue;
}
} else
{return val__8291;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8299.call(this,cicoll,f);
case  3 :
return ci_reduce__8300.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8301.call(this,cicoll,f,val,idx);
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
var this__8395 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8417 = null;
var G__8417__8418 = (function (_,f){
var this__8400 = this;
return cljs.core.ci_reduce.call(null,this__8400.a,f,(this__8400.a[this__8400.i]),(this__8400.i + 1));
});
var G__8417__8419 = (function (_,f,start){
var this__8401 = this;
return cljs.core.ci_reduce.call(null,this__8401.a,f,start,this__8401.i);
});
G__8417 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8417__8418.call(this,_,f);
case  3 :
return G__8417__8419.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8417;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8402 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8404 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8421 = null;
var G__8421__8422 = (function (coll,n){
var this__8407 = this;
var i__8410 = (n + this__8407.i);

if(cljs.core.truth_((i__8410 < this__8407.a.length)))
{return (this__8407.a[i__8410]);
} else
{return null;
}
});
var G__8421__8423 = (function (coll,n,not_found){
var this__8411 = this;
var i__8412 = (n + this__8411.i);

if(cljs.core.truth_((i__8412 < this__8411.a.length)))
{return (this__8411.a[i__8412]);
} else
{return not_found;
}
});
G__8421 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8421__8422.call(this,coll,n);
case  3 :
return G__8421__8423.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8421;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8413 = this;
return (this__8413.a.length - this__8413.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8414 = this;
return (this__8414.a[this__8414.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8415 = this;
if(cljs.core.truth_(((this__8415.i + 1) < this__8415.a.length)))
{return (new cljs.core.IndexedSeq(this__8415.a,(this__8415.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8416 = this;
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
var G__8484 = null;
var G__8484__8486 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8484__8487 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8484 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8484__8486.call(this,array,f);
case  3 :
return G__8484__8487.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8484;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8489 = null;
var G__8489__8490 = (function (array,k){
return (array[k]);
});
var G__8489__8491 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8489 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8489__8490.call(this,array,k);
case  3 :
return G__8489__8491.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8489;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8494 = null;
var G__8494__8495 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8494__8496 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8494 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8494__8495.call(this,array,n);
case  3 :
return G__8494__8496.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8494;
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
var temp__3698__auto____8523 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8523))
{var s__8526 = temp__3698__auto____8523;

return cljs.core._first.call(null,s__8526);
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
var G__8558 = cljs.core.next.call(null,s);
s = G__8558;
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
var s__8562 = cljs.core.seq.call(null,x);
var n__8564 = 0;

while(true){
if(cljs.core.truth_(s__8562))
{{
var G__8570 = cljs.core.next.call(null,s__8562);
var G__8571 = (n__8564 + 1);
s__8562 = G__8570;
n__8564 = G__8571;
continue;
}
} else
{return n__8564;
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
var conj__8577 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8578 = (function() { 
var G__8580__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8581 = conj.call(null,coll,x);
var G__8582 = cljs.core.first.call(null,xs);
var G__8583 = cljs.core.next.call(null,xs);
coll = G__8581;
x = G__8582;
xs = G__8583;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8580 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8580__delegate.call(this, coll, x, xs);
};
G__8580.cljs$lang$maxFixedArity = 2;
G__8580.cljs$lang$applyTo = (function (arglist__8586){
var coll = cljs.core.first(arglist__8586);
var x = cljs.core.first(cljs.core.next(arglist__8586));
var xs = cljs.core.rest(cljs.core.next(arglist__8586));
return G__8580__delegate.call(this, coll, x, xs);
});
return G__8580;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8577.call(this,coll,x);
default:
return conj__8578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8578.cljs$lang$applyTo;
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
var nth__8596 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8597 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8596.call(this,coll,n);
case  3 :
return nth__8597.call(this,coll,n,not_found);
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
var get__8612 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8614 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8612.call(this,o,k);
case  3 :
return get__8614.call(this,o,k,not_found);
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
var assoc__8629 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8630 = (function() { 
var G__8633__delegate = function (coll,k,v,kvs){
while(true){
var ret__8626 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8635 = ret__8626;
var G__8636 = cljs.core.first.call(null,kvs);
var G__8637 = cljs.core.second.call(null,kvs);
var G__8638 = cljs.core.nnext.call(null,kvs);
coll = G__8635;
k = G__8636;
v = G__8637;
kvs = G__8638;
continue;
}
} else
{return ret__8626;
}
break;
}
};
var G__8633 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8633__delegate.call(this, coll, k, v, kvs);
};
G__8633.cljs$lang$maxFixedArity = 3;
G__8633.cljs$lang$applyTo = (function (arglist__8640){
var coll = cljs.core.first(arglist__8640);
var k = cljs.core.first(cljs.core.next(arglist__8640));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8640)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8640)));
return G__8633__delegate.call(this, coll, k, v, kvs);
});
return G__8633;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8629.call(this,coll,k,v);
default:
return assoc__8630.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8630.cljs$lang$applyTo;
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
var dissoc__8653 = (function (coll){
return coll;
});
var dissoc__8654 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8655 = (function() { 
var G__8658__delegate = function (coll,k,ks){
while(true){
var ret__8647 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8660 = ret__8647;
var G__8661 = cljs.core.first.call(null,ks);
var G__8663 = cljs.core.next.call(null,ks);
coll = G__8660;
k = G__8661;
ks = G__8663;
continue;
}
} else
{return ret__8647;
}
break;
}
};
var G__8658 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8658__delegate.call(this, coll, k, ks);
};
G__8658.cljs$lang$maxFixedArity = 2;
G__8658.cljs$lang$applyTo = (function (arglist__8665){
var coll = cljs.core.first(arglist__8665);
var k = cljs.core.first(cljs.core.next(arglist__8665));
var ks = cljs.core.rest(cljs.core.next(arglist__8665));
return G__8658__delegate.call(this, coll, k, ks);
});
return G__8658;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8653.call(this,coll);
case  2 :
return dissoc__8654.call(this,coll,k);
default:
return dissoc__8655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8655.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8669 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8671 = x__445__auto____8669;

if(cljs.core.truth_(and__3546__auto____8671))
{var and__3546__auto____8677 = x__445__auto____8669.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8677))
{return cljs.core.not.call(null,x__445__auto____8669.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8677;
}
} else
{return and__3546__auto____8671;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8669);
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
var disj__8690 = (function (coll){
return coll;
});
var disj__8691 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8692 = (function() { 
var G__8694__delegate = function (coll,k,ks){
while(true){
var ret__8689 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8695 = ret__8689;
var G__8696 = cljs.core.first.call(null,ks);
var G__8697 = cljs.core.next.call(null,ks);
coll = G__8695;
k = G__8696;
ks = G__8697;
continue;
}
} else
{return ret__8689;
}
break;
}
};
var G__8694 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8694__delegate.call(this, coll, k, ks);
};
G__8694.cljs$lang$maxFixedArity = 2;
G__8694.cljs$lang$applyTo = (function (arglist__8698){
var coll = cljs.core.first(arglist__8698);
var k = cljs.core.first(cljs.core.next(arglist__8698));
var ks = cljs.core.rest(cljs.core.next(arglist__8698));
return G__8694__delegate.call(this, coll, k, ks);
});
return G__8694;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8690.call(this,coll);
case  2 :
return disj__8691.call(this,coll,k);
default:
return disj__8692.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8692.cljs$lang$applyTo;
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
{var x__445__auto____8702 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8703 = x__445__auto____8702;

if(cljs.core.truth_(and__3546__auto____8703))
{var and__3546__auto____8704 = x__445__auto____8702.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8704))
{return cljs.core.not.call(null,x__445__auto____8702.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8704;
}
} else
{return and__3546__auto____8703;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8702);
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
{var x__445__auto____8712 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8713 = x__445__auto____8712;

if(cljs.core.truth_(and__3546__auto____8713))
{var and__3546__auto____8714 = x__445__auto____8712.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8714))
{return cljs.core.not.call(null,x__445__auto____8712.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8714;
}
} else
{return and__3546__auto____8713;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8712);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8726 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8727 = x__445__auto____8726;

if(cljs.core.truth_(and__3546__auto____8727))
{var and__3546__auto____8730 = x__445__auto____8726.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8730))
{return cljs.core.not.call(null,x__445__auto____8726.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8730;
}
} else
{return and__3546__auto____8727;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8726);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8734 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8735 = x__445__auto____8734;

if(cljs.core.truth_(and__3546__auto____8735))
{var and__3546__auto____8736 = x__445__auto____8734.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8736))
{return cljs.core.not.call(null,x__445__auto____8734.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8736;
}
} else
{return and__3546__auto____8735;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8734);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8746 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8747 = x__445__auto____8746;

if(cljs.core.truth_(and__3546__auto____8747))
{var and__3546__auto____8748 = x__445__auto____8746.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8748))
{return cljs.core.not.call(null,x__445__auto____8746.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8748;
}
} else
{return and__3546__auto____8747;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8746);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8753 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8755 = x__445__auto____8753;

if(cljs.core.truth_(and__3546__auto____8755))
{var and__3546__auto____8757 = x__445__auto____8753.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8757))
{return cljs.core.not.call(null,x__445__auto____8753.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8757;
}
} else
{return and__3546__auto____8755;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8753);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8759 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8760 = x__445__auto____8759;

if(cljs.core.truth_(and__3546__auto____8760))
{var and__3546__auto____8761 = x__445__auto____8759.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8761))
{return cljs.core.not.call(null,x__445__auto____8759.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8761;
}
} else
{return and__3546__auto____8760;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8759);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8772 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8772.push(key);
}));
return keys__8772;
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
{var x__445__auto____8810 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8810;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8825 = x__445__auto____8810.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8825))
{return cljs.core.not.call(null,x__445__auto____8810.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8825;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8810);
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
var and__3546__auto____8832 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8832))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8834 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8834))
{return or__3548__auto____8834;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8832;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8853 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8853))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8853;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8860 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8860))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8860;
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
var and__3546__auto____8874 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8874))
{return (n == n.toFixed());
} else
{return and__3546__auto____8874;
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
if(cljs.core.truth_((function (){var and__3546__auto____8887 = coll;

if(cljs.core.truth_(and__3546__auto____8887))
{var and__3546__auto____8888 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8888))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8888;
}
} else
{return and__3546__auto____8887;
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
var distinct_QMARK___8923 = (function (x){
return true;
});
var distinct_QMARK___8926 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8929 = (function() { 
var G__8931__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8903 = cljs.core.set([y,x]);
var xs__8904 = more;

while(true){
var x__8905 = cljs.core.first.call(null,xs__8904);
var etc__8906 = cljs.core.next.call(null,xs__8904);

if(cljs.core.truth_(xs__8904))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8903,x__8905)))
{return false;
} else
{{
var G__8933 = cljs.core.conj.call(null,s__8903,x__8905);
var G__8934 = etc__8906;
s__8903 = G__8933;
xs__8904 = G__8934;
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
var G__8931 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8931__delegate.call(this, x, y, more);
};
G__8931.cljs$lang$maxFixedArity = 2;
G__8931.cljs$lang$applyTo = (function (arglist__8935){
var x = cljs.core.first(arglist__8935);
var y = cljs.core.first(cljs.core.next(arglist__8935));
var more = cljs.core.rest(cljs.core.next(arglist__8935));
return G__8931__delegate.call(this, x, y, more);
});
return G__8931;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8923.call(this,x);
case  2 :
return distinct_QMARK___8926.call(this,x,y);
default:
return distinct_QMARK___8929.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8929.cljs$lang$applyTo;
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
var r__8950 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8950)))
{return r__8950;
} else
{if(cljs.core.truth_(r__8950))
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
var sort__8975 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8976 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8968 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8968,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8968);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8975.call(this,comp);
case  2 :
return sort__8976.call(this,comp,coll);
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
var sort_by__8996 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8997 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8996.call(this,keyfn,comp);
case  3 :
return sort_by__8997.call(this,keyfn,comp,coll);
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
var reduce__9008 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9009 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9008.call(this,f,val);
case  3 :
return reduce__9009.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9033 = (function (f,coll){
var temp__3695__auto____9013 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9013))
{var s__9030 = temp__3695__auto____9013;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9030),cljs.core.next.call(null,s__9030));
} else
{return f.call(null);
}
});
var seq_reduce__9034 = (function (f,val,coll){
var val__9031 = val;
var coll__9032 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9032))
{{
var G__9037 = f.call(null,val__9031,cljs.core.first.call(null,coll__9032));
var G__9038 = cljs.core.next.call(null,coll__9032);
val__9031 = G__9037;
coll__9032 = G__9038;
continue;
}
} else
{return val__9031;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9033.call(this,f,val);
case  3 :
return seq_reduce__9034.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9041 = null;
var G__9041__9042 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9041__9043 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9041 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9041__9042.call(this,coll,f);
case  3 :
return G__9041__9043.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9041;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9048 = (function (){
return 0;
});
var _PLUS___9049 = (function (x){
return x;
});
var _PLUS___9050 = (function (x,y){
return (x + y);
});
var _PLUS___9051 = (function() { 
var G__9053__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9053 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9053__delegate.call(this, x, y, more);
};
G__9053.cljs$lang$maxFixedArity = 2;
G__9053.cljs$lang$applyTo = (function (arglist__9054){
var x = cljs.core.first(arglist__9054);
var y = cljs.core.first(cljs.core.next(arglist__9054));
var more = cljs.core.rest(cljs.core.next(arglist__9054));
return G__9053__delegate.call(this, x, y, more);
});
return G__9053;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9048.call(this);
case  1 :
return _PLUS___9049.call(this,x);
case  2 :
return _PLUS___9050.call(this,x,y);
default:
return _PLUS___9051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9051.cljs$lang$applyTo;
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
var ___9062 = (function (x){
return (- x);
});
var ___9063 = (function (x,y){
return (x - y);
});
var ___9064 = (function() { 
var G__9066__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9066 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9066__delegate.call(this, x, y, more);
};
G__9066.cljs$lang$maxFixedArity = 2;
G__9066.cljs$lang$applyTo = (function (arglist__9067){
var x = cljs.core.first(arglist__9067);
var y = cljs.core.first(cljs.core.next(arglist__9067));
var more = cljs.core.rest(cljs.core.next(arglist__9067));
return G__9066__delegate.call(this, x, y, more);
});
return G__9066;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9062.call(this,x);
case  2 :
return ___9063.call(this,x,y);
default:
return ___9064.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9064.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9076 = (function (){
return 1;
});
var _STAR___9077 = (function (x){
return x;
});
var _STAR___9078 = (function (x,y){
return (x * y);
});
var _STAR___9079 = (function() { 
var G__9082__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9082 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9082__delegate.call(this, x, y, more);
};
G__9082.cljs$lang$maxFixedArity = 2;
G__9082.cljs$lang$applyTo = (function (arglist__9084){
var x = cljs.core.first(arglist__9084);
var y = cljs.core.first(cljs.core.next(arglist__9084));
var more = cljs.core.rest(cljs.core.next(arglist__9084));
return G__9082__delegate.call(this, x, y, more);
});
return G__9082;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9076.call(this);
case  1 :
return _STAR___9077.call(this,x);
case  2 :
return _STAR___9078.call(this,x,y);
default:
return _STAR___9079.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9079.cljs$lang$applyTo;
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
var _SLASH___9087 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9088 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9089 = (function() { 
var G__9092__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9092 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9092__delegate.call(this, x, y, more);
};
G__9092.cljs$lang$maxFixedArity = 2;
G__9092.cljs$lang$applyTo = (function (arglist__9094){
var x = cljs.core.first(arglist__9094);
var y = cljs.core.first(cljs.core.next(arglist__9094));
var more = cljs.core.rest(cljs.core.next(arglist__9094));
return G__9092__delegate.call(this, x, y, more);
});
return G__9092;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9087.call(this,x);
case  2 :
return _SLASH___9088.call(this,x,y);
default:
return _SLASH___9089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9089.cljs$lang$applyTo;
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
var _LT___9098 = (function (x){
return true;
});
var _LT___9099 = (function (x,y){
return (x < y);
});
var _LT___9100 = (function() { 
var G__9103__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9104 = y;
var G__9105 = cljs.core.first.call(null,more);
var G__9106 = cljs.core.next.call(null,more);
x = G__9104;
y = G__9105;
more = G__9106;
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
var G__9103 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9103__delegate.call(this, x, y, more);
};
G__9103.cljs$lang$maxFixedArity = 2;
G__9103.cljs$lang$applyTo = (function (arglist__9107){
var x = cljs.core.first(arglist__9107);
var y = cljs.core.first(cljs.core.next(arglist__9107));
var more = cljs.core.rest(cljs.core.next(arglist__9107));
return G__9103__delegate.call(this, x, y, more);
});
return G__9103;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9098.call(this,x);
case  2 :
return _LT___9099.call(this,x,y);
default:
return _LT___9100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9100.cljs$lang$applyTo;
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
var _LT__EQ___9110 = (function (x){
return true;
});
var _LT__EQ___9111 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9112 = (function() { 
var G__9115__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9117 = y;
var G__9118 = cljs.core.first.call(null,more);
var G__9119 = cljs.core.next.call(null,more);
x = G__9117;
y = G__9118;
more = G__9119;
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
var G__9115 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9115__delegate.call(this, x, y, more);
};
G__9115.cljs$lang$maxFixedArity = 2;
G__9115.cljs$lang$applyTo = (function (arglist__9122){
var x = cljs.core.first(arglist__9122);
var y = cljs.core.first(cljs.core.next(arglist__9122));
var more = cljs.core.rest(cljs.core.next(arglist__9122));
return G__9115__delegate.call(this, x, y, more);
});
return G__9115;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9110.call(this,x);
case  2 :
return _LT__EQ___9111.call(this,x,y);
default:
return _LT__EQ___9112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9112.cljs$lang$applyTo;
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
var _GT___9124 = (function (x){
return true;
});
var _GT___9125 = (function (x,y){
return (x > y);
});
var _GT___9126 = (function() { 
var G__9128__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9130 = y;
var G__9132 = cljs.core.first.call(null,more);
var G__9134 = cljs.core.next.call(null,more);
x = G__9130;
y = G__9132;
more = G__9134;
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
var G__9128 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9128__delegate.call(this, x, y, more);
};
G__9128.cljs$lang$maxFixedArity = 2;
G__9128.cljs$lang$applyTo = (function (arglist__9136){
var x = cljs.core.first(arglist__9136);
var y = cljs.core.first(cljs.core.next(arglist__9136));
var more = cljs.core.rest(cljs.core.next(arglist__9136));
return G__9128__delegate.call(this, x, y, more);
});
return G__9128;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9124.call(this,x);
case  2 :
return _GT___9125.call(this,x,y);
default:
return _GT___9126.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9126.cljs$lang$applyTo;
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
var _GT__EQ___9137 = (function (x){
return true;
});
var _GT__EQ___9138 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9140 = (function() { 
var G__9142__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9144 = y;
var G__9145 = cljs.core.first.call(null,more);
var G__9146 = cljs.core.next.call(null,more);
x = G__9144;
y = G__9145;
more = G__9146;
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
var G__9142 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9142__delegate.call(this, x, y, more);
};
G__9142.cljs$lang$maxFixedArity = 2;
G__9142.cljs$lang$applyTo = (function (arglist__9147){
var x = cljs.core.first(arglist__9147);
var y = cljs.core.first(cljs.core.next(arglist__9147));
var more = cljs.core.rest(cljs.core.next(arglist__9147));
return G__9142__delegate.call(this, x, y, more);
});
return G__9142;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9137.call(this,x);
case  2 :
return _GT__EQ___9138.call(this,x,y);
default:
return _GT__EQ___9140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9140.cljs$lang$applyTo;
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
var max__9153 = (function (x){
return x;
});
var max__9154 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9155 = (function() { 
var G__9157__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9157 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9157__delegate.call(this, x, y, more);
};
G__9157.cljs$lang$maxFixedArity = 2;
G__9157.cljs$lang$applyTo = (function (arglist__9158){
var x = cljs.core.first(arglist__9158);
var y = cljs.core.first(cljs.core.next(arglist__9158));
var more = cljs.core.rest(cljs.core.next(arglist__9158));
return G__9157__delegate.call(this, x, y, more);
});
return G__9157;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9153.call(this,x);
case  2 :
return max__9154.call(this,x,y);
default:
return max__9155.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9155.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9165 = (function (x){
return x;
});
var min__9167 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9168 = (function() { 
var G__9171__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9171 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9171__delegate.call(this, x, y, more);
};
G__9171.cljs$lang$maxFixedArity = 2;
G__9171.cljs$lang$applyTo = (function (arglist__9172){
var x = cljs.core.first(arglist__9172);
var y = cljs.core.first(cljs.core.next(arglist__9172));
var more = cljs.core.rest(cljs.core.next(arglist__9172));
return G__9171__delegate.call(this, x, y, more);
});
return G__9171;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9165.call(this,x);
case  2 :
return min__9167.call(this,x,y);
default:
return min__9168.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9168.cljs$lang$applyTo;
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
var rem__9183 = (n % d);

return cljs.core.fix.call(null,((n - rem__9183) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9186 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9186));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9188 = (function (){
return Math.random.call(null);
});
var rand__9189 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9188.call(this);
case  1 :
return rand__9189.call(this,n);
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
var _EQ__EQ___9276 = (function (x){
return true;
});
var _EQ__EQ___9277 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9278 = (function() { 
var G__9280__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9281 = y;
var G__9282 = cljs.core.first.call(null,more);
var G__9283 = cljs.core.next.call(null,more);
x = G__9281;
y = G__9282;
more = G__9283;
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
var G__9280 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9280__delegate.call(this, x, y, more);
};
G__9280.cljs$lang$maxFixedArity = 2;
G__9280.cljs$lang$applyTo = (function (arglist__9284){
var x = cljs.core.first(arglist__9284);
var y = cljs.core.first(cljs.core.next(arglist__9284));
var more = cljs.core.rest(cljs.core.next(arglist__9284));
return G__9280__delegate.call(this, x, y, more);
});
return G__9280;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9276.call(this,x);
case  2 :
return _EQ__EQ___9277.call(this,x,y);
default:
return _EQ__EQ___9278.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9278.cljs$lang$applyTo;
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
var n__9297 = n;
var xs__9298 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9299 = xs__9298;

if(cljs.core.truth_(and__3546__auto____9299))
{return (n__9297 > 0);
} else
{return and__3546__auto____9299;
}
})()))
{{
var G__9304 = (n__9297 - 1);
var G__9305 = cljs.core.next.call(null,xs__9298);
n__9297 = G__9304;
xs__9298 = G__9305;
continue;
}
} else
{return xs__9298;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9319 = null;
var G__9319__9320 = (function (coll,n){
var temp__3695__auto____9312 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9312))
{var xs__9313 = temp__3695__auto____9312;

return cljs.core.first.call(null,xs__9313);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9319__9321 = (function (coll,n,not_found){
var temp__3695__auto____9315 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9315))
{var xs__9317 = temp__3695__auto____9315;

return cljs.core.first.call(null,xs__9317);
} else
{return not_found;
}
});
G__9319 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9319__9320.call(this,coll,n);
case  3 :
return G__9319__9321.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9319;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9416 = (function (){
return "";
});
var str_STAR___9417 = (function (x){
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
var str_STAR___9418 = (function() { 
var G__9420__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9421 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9422 = cljs.core.next.call(null,more);
sb = G__9421;
more = G__9422;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9420 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9420__delegate.call(this, x, ys);
};
G__9420.cljs$lang$maxFixedArity = 1;
G__9420.cljs$lang$applyTo = (function (arglist__9427){
var x = cljs.core.first(arglist__9427);
var ys = cljs.core.rest(arglist__9427);
return G__9420__delegate.call(this, x, ys);
});
return G__9420;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9416.call(this);
case  1 :
return str_STAR___9417.call(this,x);
default:
return str_STAR___9418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9418.cljs$lang$applyTo;
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
var str__9462 = (function (){
return "";
});
var str__9465 = (function (x){
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
var str__9467 = (function() { 
var G__9556__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9556 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9556__delegate.call(this, x, ys);
};
G__9556.cljs$lang$maxFixedArity = 1;
G__9556.cljs$lang$applyTo = (function (arglist__9557){
var x = cljs.core.first(arglist__9557);
var ys = cljs.core.rest(arglist__9557);
return G__9556__delegate.call(this, x, ys);
});
return G__9556;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9462.call(this);
case  1 :
return str__9465.call(this,x);
default:
return str__9467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9467.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9565 = (function (s,start){
return s.substring(start);
});
var subs__9566 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9565.call(this,s,start);
case  3 :
return subs__9566.call(this,s,start,end);
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
var symbol__9568 = (function (name){
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
var symbol__9569 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9568.call(this,ns);
case  2 :
return symbol__9569.call(this,ns,name);
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
var keyword__9582 = (function (name){
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
var keyword__9583 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9582.call(this,ns);
case  2 :
return keyword__9583.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9594 = cljs.core.seq.call(null,x);
var ys__9595 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9594)))
{return cljs.core.nil_QMARK_.call(null,ys__9595);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9595)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9594),cljs.core.first.call(null,ys__9595))))
{{
var G__9601 = cljs.core.next.call(null,xs__9594);
var G__9602 = cljs.core.next.call(null,ys__9595);
xs__9594 = G__9601;
ys__9595 = G__9602;
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
return cljs.core.reduce.call(null,(function (p1__9605_SHARP_,p2__9606_SHARP_){
return cljs.core.hash_combine.call(null,p1__9605_SHARP_,cljs.core.hash.call(null,p2__9606_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9613__9618 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9613__9618))
{var G__9623__9625 = cljs.core.first.call(null,G__9613__9618);
var vec__9624__9626 = G__9623__9625;
var key_name__9629 = cljs.core.nth.call(null,vec__9624__9626,0,null);
var f__9630 = cljs.core.nth.call(null,vec__9624__9626,1,null);
var G__9613__9631 = G__9613__9618;

var G__9623__9632 = G__9623__9625;
var G__9613__9634 = G__9613__9631;

while(true){
var vec__9635__9636 = G__9623__9632;
var key_name__9637 = cljs.core.nth.call(null,vec__9635__9636,0,null);
var f__9638 = cljs.core.nth.call(null,vec__9635__9636,1,null);
var G__9613__9639 = G__9613__9634;

var str_name__9703 = cljs.core.name.call(null,key_name__9637);

obj[str_name__9703] = f__9638;
var temp__3698__auto____9704 = cljs.core.next.call(null,G__9613__9639);

if(cljs.core.truth_(temp__3698__auto____9704))
{var G__9613__9705 = temp__3698__auto____9704;

{
var G__9710 = cljs.core.first.call(null,G__9613__9705);
var G__9711 = G__9613__9705;
G__9623__9632 = G__9710;
G__9613__9634 = G__9711;
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
var this__9718 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9719 = this;
return (new cljs.core.List(this__9719.meta,o,coll,(this__9719.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9770 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9772 = this;
return this__9772.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9774 = this;
return this__9774.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9776 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9778 = this;
return this__9778.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9780 = this;
return this__9780.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9782 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9788 = this;
return (new cljs.core.List(meta,this__9788.first,this__9788.rest,this__9788.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9789 = this;
return this__9789.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9790 = this;
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
var this__9792 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9795 = this;
return (new cljs.core.List(this__9795.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9799 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9800 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9802 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9803 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9804 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9805 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9806 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9807 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9808 = this;
return this__9808.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9809 = this;
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
list.cljs$lang$applyTo = (function (arglist__9820){
var items = cljs.core.seq( arglist__9820 );;
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
var this__9832 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9834 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9836 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9837 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9837.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9838 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9839 = this;
return this__9839.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9840 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9840.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9840.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9841 = this;
return this__9841.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9842 = this;
return (new cljs.core.Cons(meta,this__9842.first,this__9842.rest));
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
var G__9877 = null;
var G__9877__9878 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9877__9879 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9877 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9877__9878.call(this,string,f);
case  3 :
return G__9877__9879.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9877;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9885 = null;
var G__9885__9886 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9885__9887 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9885 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9885__9886.call(this,string,k);
case  3 :
return G__9885__9887.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9885;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9892 = null;
var G__9892__9893 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9892__9894 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9892 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9892__9893.call(this,string,n);
case  3 :
return G__9892__9894.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9892;
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
var G__10010 = null;
var G__10010__10011 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10010__10012 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10010 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10010__10011.call(this,this$,coll);
case  3 :
return G__10010__10012.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10010;
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
var x__10026 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10026;
} else
{lazy_seq.x = x__10026.call(null);
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
var this__10056 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10058 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10060 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10062 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10062.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10065 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10067 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10071 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10074 = this;
return this__10074.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10075 = this;
return (new cljs.core.LazySeq(meta,this__10075.realized,this__10075.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10085 = cljs.core.array.call(null);

var s__10086 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10086)))
{ary__10085.push(cljs.core.first.call(null,s__10086));
{
var G__10087 = cljs.core.next.call(null,s__10086);
s__10086 = G__10087;
continue;
}
} else
{return ary__10085;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10089 = s;
var i__10091 = n;
var sum__10092 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10093 = (i__10091 > 0);

if(cljs.core.truth_(and__3546__auto____10093))
{return cljs.core.seq.call(null,s__10089);
} else
{return and__3546__auto____10093;
}
})()))
{{
var G__10097 = cljs.core.next.call(null,s__10089);
var G__10098 = (i__10091 - 1);
var G__10099 = (sum__10092 + 1);
s__10089 = G__10097;
i__10091 = G__10098;
sum__10092 = G__10099;
continue;
}
} else
{return sum__10092;
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
var concat__10117 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10118 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10119 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10114 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10114))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10114),concat.call(null,cljs.core.rest.call(null,s__10114),y));
} else
{return y;
}
})));
});
var concat__10120 = (function() { 
var G__10170__delegate = function (x,y,zs){
var cat__10116 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10115 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10115))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10115),cat.call(null,cljs.core.rest.call(null,xys__10115),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10116.call(null,concat.call(null,x,y),zs);
};
var G__10170 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10170__delegate.call(this, x, y, zs);
};
G__10170.cljs$lang$maxFixedArity = 2;
G__10170.cljs$lang$applyTo = (function (arglist__10175){
var x = cljs.core.first(arglist__10175);
var y = cljs.core.first(cljs.core.next(arglist__10175));
var zs = cljs.core.rest(cljs.core.next(arglist__10175));
return G__10170__delegate.call(this, x, y, zs);
});
return G__10170;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10117.call(this);
case  1 :
return concat__10118.call(this,x);
case  2 :
return concat__10119.call(this,x,y);
default:
return concat__10120.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10120.cljs$lang$applyTo;
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
var list_STAR___10187 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10188 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10189 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10190 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10191 = (function() { 
var G__10193__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10193 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10193__delegate.call(this, a, b, c, d, more);
};
G__10193.cljs$lang$maxFixedArity = 4;
G__10193.cljs$lang$applyTo = (function (arglist__10194){
var a = cljs.core.first(arglist__10194);
var b = cljs.core.first(cljs.core.next(arglist__10194));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10194)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10194))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10194))));
return G__10193__delegate.call(this, a, b, c, d, more);
});
return G__10193;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10187.call(this,a);
case  2 :
return list_STAR___10188.call(this,a,b);
case  3 :
return list_STAR___10189.call(this,a,b,c);
case  4 :
return list_STAR___10190.call(this,a,b,c,d);
default:
return list_STAR___10191.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10191.cljs$lang$applyTo;
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
var apply__10221 = (function (f,args){
var fixed_arity__10199 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10199 + 1)) <= fixed_arity__10199)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10222 = (function (f,x,args){
var arglist__10204 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10205 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10204,fixed_arity__10205) <= fixed_arity__10205)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10204));
} else
{return f.cljs$lang$applyTo(arglist__10204);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10204));
}
});
var apply__10223 = (function (f,x,y,args){
var arglist__10207 = cljs.core.list_STAR_.call(null,x,y,args);
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
});
var apply__10224 = (function (f,x,y,z,args){
var arglist__10210 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10212 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10210,fixed_arity__10212) <= fixed_arity__10212)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10210));
} else
{return f.cljs$lang$applyTo(arglist__10210);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10210));
}
});
var apply__10225 = (function() { 
var G__10232__delegate = function (f,a,b,c,d,args){
var arglist__10218 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10219 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10218,fixed_arity__10219) <= fixed_arity__10219)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10218));
} else
{return f.cljs$lang$applyTo(arglist__10218);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10218));
}
};
var G__10232 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10232__delegate.call(this, f, a, b, c, d, args);
};
G__10232.cljs$lang$maxFixedArity = 5;
G__10232.cljs$lang$applyTo = (function (arglist__10302){
var f = cljs.core.first(arglist__10302);
var a = cljs.core.first(cljs.core.next(arglist__10302));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10302)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10302))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10302)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10302)))));
return G__10232__delegate.call(this, f, a, b, c, d, args);
});
return G__10232;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10221.call(this,f,a);
case  3 :
return apply__10222.call(this,f,a,b);
case  4 :
return apply__10223.call(this,f,a,b,c);
case  5 :
return apply__10224.call(this,f,a,b,c,d);
default:
return apply__10225.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10225.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10305){
var obj = cljs.core.first(arglist__10305);
var f = cljs.core.first(cljs.core.next(arglist__10305));
var args = cljs.core.rest(cljs.core.next(arglist__10305));
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
var not_EQ___10307 = (function (x){
return false;
});
var not_EQ___10308 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10309 = (function() { 
var G__10311__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10311 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10311__delegate.call(this, x, y, more);
};
G__10311.cljs$lang$maxFixedArity = 2;
G__10311.cljs$lang$applyTo = (function (arglist__10312){
var x = cljs.core.first(arglist__10312);
var y = cljs.core.first(cljs.core.next(arglist__10312));
var more = cljs.core.rest(cljs.core.next(arglist__10312));
return G__10311__delegate.call(this, x, y, more);
});
return G__10311;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10307.call(this,x);
case  2 :
return not_EQ___10308.call(this,x,y);
default:
return not_EQ___10309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10309.cljs$lang$applyTo;
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
var G__10327 = pred;
var G__10328 = cljs.core.next.call(null,coll);
pred = G__10327;
coll = G__10328;
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
{var or__3548__auto____10331 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10331))
{return or__3548__auto____10331;
} else
{{
var G__10334 = pred;
var G__10335 = cljs.core.next.call(null,coll);
pred = G__10334;
coll = G__10335;
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
var G__10349 = null;
var G__10349__10350 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10349__10351 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10349__10352 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10349__10353 = (function() { 
var G__10355__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10355 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10355__delegate.call(this, x, y, zs);
};
G__10355.cljs$lang$maxFixedArity = 2;
G__10355.cljs$lang$applyTo = (function (arglist__10356){
var x = cljs.core.first(arglist__10356);
var y = cljs.core.first(cljs.core.next(arglist__10356));
var zs = cljs.core.rest(cljs.core.next(arglist__10356));
return G__10355__delegate.call(this, x, y, zs);
});
return G__10355;
})()
;
G__10349 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10349__10350.call(this);
case  1 :
return G__10349__10351.call(this,x);
case  2 :
return G__10349__10352.call(this,x,y);
default:
return G__10349__10353.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10349.cljs$lang$maxFixedArity = 2;
G__10349.cljs$lang$applyTo = G__10349__10353.cljs$lang$applyTo;
return G__10349;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10411__delegate = function (args){
return x;
};
var G__10411 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10411__delegate.call(this, args);
};
G__10411.cljs$lang$maxFixedArity = 0;
G__10411.cljs$lang$applyTo = (function (arglist__10412){
var args = cljs.core.seq( arglist__10412 );;
return G__10411__delegate.call(this, args);
});
return G__10411;
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
var comp__10457 = (function (){
return cljs.core.identity;
});
var comp__10458 = (function (f){
return f;
});
var comp__10459 = (function (f,g){
return (function() {
var G__10468 = null;
var G__10468__10470 = (function (){
return f.call(null,g.call(null));
});
var G__10468__10471 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10468__10472 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10468__10474 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10468__10475 = (function() { 
var G__10480__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10480 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10480__delegate.call(this, x, y, z, args);
};
G__10480.cljs$lang$maxFixedArity = 3;
G__10480.cljs$lang$applyTo = (function (arglist__10481){
var x = cljs.core.first(arglist__10481);
var y = cljs.core.first(cljs.core.next(arglist__10481));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10481)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10481)));
return G__10480__delegate.call(this, x, y, z, args);
});
return G__10480;
})()
;
G__10468 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10468__10470.call(this);
case  1 :
return G__10468__10471.call(this,x);
case  2 :
return G__10468__10472.call(this,x,y);
case  3 :
return G__10468__10474.call(this,x,y,z);
default:
return G__10468__10475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10468.cljs$lang$maxFixedArity = 3;
G__10468.cljs$lang$applyTo = G__10468__10475.cljs$lang$applyTo;
return G__10468;
})()
});
var comp__10460 = (function (f,g,h){
return (function() {
var G__10482 = null;
var G__10482__10483 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10482__10484 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10482__10485 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10482__10486 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10482__10487 = (function() { 
var G__10489__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10489 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10489__delegate.call(this, x, y, z, args);
};
G__10489.cljs$lang$maxFixedArity = 3;
G__10489.cljs$lang$applyTo = (function (arglist__10490){
var x = cljs.core.first(arglist__10490);
var y = cljs.core.first(cljs.core.next(arglist__10490));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10490)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10490)));
return G__10489__delegate.call(this, x, y, z, args);
});
return G__10489;
})()
;
G__10482 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10482__10483.call(this);
case  1 :
return G__10482__10484.call(this,x);
case  2 :
return G__10482__10485.call(this,x,y);
case  3 :
return G__10482__10486.call(this,x,y,z);
default:
return G__10482__10487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10482.cljs$lang$maxFixedArity = 3;
G__10482.cljs$lang$applyTo = G__10482__10487.cljs$lang$applyTo;
return G__10482;
})()
});
var comp__10461 = (function() { 
var G__10491__delegate = function (f1,f2,f3,fs){
var fs__10444 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10492__delegate = function (args){
var ret__10450 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10444),args);
var fs__10452 = cljs.core.next.call(null,fs__10444);

while(true){
if(cljs.core.truth_(fs__10452))
{{
var G__10493 = cljs.core.first.call(null,fs__10452).call(null,ret__10450);
var G__10494 = cljs.core.next.call(null,fs__10452);
ret__10450 = G__10493;
fs__10452 = G__10494;
continue;
}
} else
{return ret__10450;
}
break;
}
};
var G__10492 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10492__delegate.call(this, args);
};
G__10492.cljs$lang$maxFixedArity = 0;
G__10492.cljs$lang$applyTo = (function (arglist__10495){
var args = cljs.core.seq( arglist__10495 );;
return G__10492__delegate.call(this, args);
});
return G__10492;
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
G__10491.cljs$lang$applyTo = (function (arglist__10496){
var f1 = cljs.core.first(arglist__10496);
var f2 = cljs.core.first(cljs.core.next(arglist__10496));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10496)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10496)));
return G__10491__delegate.call(this, f1, f2, f3, fs);
});
return G__10491;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10457.call(this);
case  1 :
return comp__10458.call(this,f1);
case  2 :
return comp__10459.call(this,f1,f2);
case  3 :
return comp__10460.call(this,f1,f2,f3);
default:
return comp__10461.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10461.cljs$lang$applyTo;
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
var partial__10514 = (function (f,arg1){
return (function() { 
var G__10521__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10521 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10521__delegate.call(this, args);
};
G__10521.cljs$lang$maxFixedArity = 0;
G__10521.cljs$lang$applyTo = (function (arglist__10522){
var args = cljs.core.seq( arglist__10522 );;
return G__10521__delegate.call(this, args);
});
return G__10521;
})()
;
});
var partial__10515 = (function (f,arg1,arg2){
return (function() { 
var G__10524__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10524 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10524__delegate.call(this, args);
};
G__10524.cljs$lang$maxFixedArity = 0;
G__10524.cljs$lang$applyTo = (function (arglist__10526){
var args = cljs.core.seq( arglist__10526 );;
return G__10524__delegate.call(this, args);
});
return G__10524;
})()
;
});
var partial__10516 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10527__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10527 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10527__delegate.call(this, args);
};
G__10527.cljs$lang$maxFixedArity = 0;
G__10527.cljs$lang$applyTo = (function (arglist__10528){
var args = cljs.core.seq( arglist__10528 );;
return G__10527__delegate.call(this, args);
});
return G__10527;
})()
;
});
var partial__10517 = (function() { 
var G__10534__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10535__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10535 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10535__delegate.call(this, args);
};
G__10535.cljs$lang$maxFixedArity = 0;
G__10535.cljs$lang$applyTo = (function (arglist__10538){
var args = cljs.core.seq( arglist__10538 );;
return G__10535__delegate.call(this, args);
});
return G__10535;
})()
;
};
var G__10534 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10534__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10534.cljs$lang$maxFixedArity = 4;
G__10534.cljs$lang$applyTo = (function (arglist__10540){
var f = cljs.core.first(arglist__10540);
var arg1 = cljs.core.first(cljs.core.next(arglist__10540));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10540)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10540))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10540))));
return G__10534__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10534;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10514.call(this,f,arg1);
case  3 :
return partial__10515.call(this,f,arg1,arg2);
case  4 :
return partial__10516.call(this,f,arg1,arg2,arg3);
default:
return partial__10517.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10517.cljs$lang$applyTo;
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
var fnil__10558 = (function (f,x){
return (function() {
var G__10564 = null;
var G__10564__10566 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10564__10567 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10564__10568 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10564__10569 = (function() { 
var G__10575__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10575 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10575__delegate.call(this, a, b, c, ds);
};
G__10575.cljs$lang$maxFixedArity = 3;
G__10575.cljs$lang$applyTo = (function (arglist__10577){
var a = cljs.core.first(arglist__10577);
var b = cljs.core.first(cljs.core.next(arglist__10577));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10577)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10577)));
return G__10575__delegate.call(this, a, b, c, ds);
});
return G__10575;
})()
;
G__10564 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10564__10566.call(this,a);
case  2 :
return G__10564__10567.call(this,a,b);
case  3 :
return G__10564__10568.call(this,a,b,c);
default:
return G__10564__10569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10564.cljs$lang$maxFixedArity = 3;
G__10564.cljs$lang$applyTo = G__10564__10569.cljs$lang$applyTo;
return G__10564;
})()
});
var fnil__10559 = (function (f,x,y){
return (function() {
var G__10579 = null;
var G__10579__10580 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10579__10581 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10579__10582 = (function() { 
var G__10585__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10585 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10585__delegate.call(this, a, b, c, ds);
};
G__10585.cljs$lang$maxFixedArity = 3;
G__10585.cljs$lang$applyTo = (function (arglist__10586){
var a = cljs.core.first(arglist__10586);
var b = cljs.core.first(cljs.core.next(arglist__10586));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10586)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10586)));
return G__10585__delegate.call(this, a, b, c, ds);
});
return G__10585;
})()
;
G__10579 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10579__10580.call(this,a,b);
case  3 :
return G__10579__10581.call(this,a,b,c);
default:
return G__10579__10582.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10579.cljs$lang$maxFixedArity = 3;
G__10579.cljs$lang$applyTo = G__10579__10582.cljs$lang$applyTo;
return G__10579;
})()
});
var fnil__10560 = (function (f,x,y,z){
return (function() {
var G__10588 = null;
var G__10588__10589 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10588__10590 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10588__10591 = (function() { 
var G__10593__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10593 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10593__delegate.call(this, a, b, c, ds);
};
G__10593.cljs$lang$maxFixedArity = 3;
G__10593.cljs$lang$applyTo = (function (arglist__10594){
var a = cljs.core.first(arglist__10594);
var b = cljs.core.first(cljs.core.next(arglist__10594));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10594)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10594)));
return G__10593__delegate.call(this, a, b, c, ds);
});
return G__10593;
})()
;
G__10588 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10588__10589.call(this,a,b);
case  3 :
return G__10588__10590.call(this,a,b,c);
default:
return G__10588__10591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10588.cljs$lang$maxFixedArity = 3;
G__10588.cljs$lang$applyTo = G__10588__10591.cljs$lang$applyTo;
return G__10588;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10558.call(this,f,x);
case  3 :
return fnil__10559.call(this,f,x,y);
case  4 :
return fnil__10560.call(this,f,x,y,z);
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
var mapi__10612 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10600 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10600))
{var s__10601 = temp__3698__auto____10600;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10601)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10601)));
} else
{return null;
}
})));
});

return mapi__10612.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10615 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10615))
{var s__10616 = temp__3698__auto____10615;

var x__10618 = f.call(null,cljs.core.first.call(null,s__10616));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10618)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10616));
} else
{return cljs.core.cons.call(null,x__10618,keep.call(null,f,cljs.core.rest.call(null,s__10616)));
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
var keepi__10788 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10780 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10780))
{var s__10781 = temp__3698__auto____10780;

var x__10784 = f.call(null,idx,cljs.core.first.call(null,s__10781));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10784)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10781));
} else
{return cljs.core.cons.call(null,x__10784,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10781)));
}
} else
{return null;
}
})));
});

return keepi__10788.call(null,0,coll);
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
var every_pred__10934 = (function (p){
return (function() {
var ep1 = null;
var ep1__10940 = (function (){
return true;
});
var ep1__10941 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10942 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10812 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10812))
{return p.call(null,y);
} else
{return and__3546__auto____10812;
}
})());
});
var ep1__10943 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10813 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10813))
{var and__3546__auto____10814 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10814))
{return p.call(null,z);
} else
{return and__3546__auto____10814;
}
} else
{return and__3546__auto____10813;
}
})());
});
var ep1__10944 = (function() { 
var G__10958__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10815 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10815))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10815;
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
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10940.call(this);
case  1 :
return ep1__10941.call(this,x);
case  2 :
return ep1__10942.call(this,x,y);
case  3 :
return ep1__10943.call(this,x,y,z);
default:
return ep1__10944.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10944.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10935 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10973 = (function (){
return true;
});
var ep2__10974 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10823 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10823))
{return p2.call(null,x);
} else
{return and__3546__auto____10823;
}
})());
});
var ep2__10976 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10824 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10824))
{var and__3546__auto____10825 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10825))
{var and__3546__auto____10827 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10827))
{return p2.call(null,y);
} else
{return and__3546__auto____10827;
}
} else
{return and__3546__auto____10825;
}
} else
{return and__3546__auto____10824;
}
})());
});
var ep2__10977 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10830 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10830))
{var and__3546__auto____10832 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10832))
{var and__3546__auto____10835 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10835))
{var and__3546__auto____10838 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10838))
{var and__3546__auto____10841 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10841))
{return p2.call(null,z);
} else
{return and__3546__auto____10841;
}
} else
{return and__3546__auto____10838;
}
} else
{return and__3546__auto____10835;
}
} else
{return and__3546__auto____10832;
}
} else
{return and__3546__auto____10830;
}
})());
});
var ep2__10978 = (function() { 
var G__11006__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10844 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10844))
{return cljs.core.every_QMARK_.call(null,(function (p1__10754_SHARP_){
var and__3546__auto____10849 = p1.call(null,p1__10754_SHARP_);

if(cljs.core.truth_(and__3546__auto____10849))
{return p2.call(null,p1__10754_SHARP_);
} else
{return and__3546__auto____10849;
}
}),args);
} else
{return and__3546__auto____10844;
}
})());
};
var G__11006 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11006__delegate.call(this, x, y, z, args);
};
G__11006.cljs$lang$maxFixedArity = 3;
G__11006.cljs$lang$applyTo = (function (arglist__11012){
var x = cljs.core.first(arglist__11012);
var y = cljs.core.first(cljs.core.next(arglist__11012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11012)));
return G__11006__delegate.call(this, x, y, z, args);
});
return G__11006;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10973.call(this);
case  1 :
return ep2__10974.call(this,x);
case  2 :
return ep2__10976.call(this,x,y);
case  3 :
return ep2__10977.call(this,x,y,z);
default:
return ep2__10978.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10978.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10936 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11021 = (function (){
return true;
});
var ep3__11022 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10853 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10853))
{var and__3546__auto____10855 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10855))
{return p3.call(null,x);
} else
{return and__3546__auto____10855;
}
} else
{return and__3546__auto____10853;
}
})());
});
var ep3__11023 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10857 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10857))
{var and__3546__auto____10859 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10859))
{var and__3546__auto____10861 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10861))
{var and__3546__auto____10863 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10863))
{var and__3546__auto____10865 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10865))
{return p3.call(null,y);
} else
{return and__3546__auto____10865;
}
} else
{return and__3546__auto____10863;
}
} else
{return and__3546__auto____10861;
}
} else
{return and__3546__auto____10859;
}
} else
{return and__3546__auto____10857;
}
})());
});
var ep3__11024 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10867 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10867))
{var and__3546__auto____10868 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10868))
{var and__3546__auto____10870 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10870))
{var and__3546__auto____10877 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10877))
{var and__3546__auto____10881 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10881))
{var and__3546__auto____10883 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10883))
{var and__3546__auto____10887 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10887))
{var and__3546__auto____10892 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10892))
{return p3.call(null,z);
} else
{return and__3546__auto____10892;
}
} else
{return and__3546__auto____10887;
}
} else
{return and__3546__auto____10883;
}
} else
{return and__3546__auto____10881;
}
} else
{return and__3546__auto____10877;
}
} else
{return and__3546__auto____10870;
}
} else
{return and__3546__auto____10868;
}
} else
{return and__3546__auto____10867;
}
})());
});
var ep3__11026 = (function() { 
var G__11044__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10901 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10901))
{return cljs.core.every_QMARK_.call(null,(function (p1__10756_SHARP_){
var and__3546__auto____10905 = p1.call(null,p1__10756_SHARP_);

if(cljs.core.truth_(and__3546__auto____10905))
{var and__3546__auto____10909 = p2.call(null,p1__10756_SHARP_);

if(cljs.core.truth_(and__3546__auto____10909))
{return p3.call(null,p1__10756_SHARP_);
} else
{return and__3546__auto____10909;
}
} else
{return and__3546__auto____10905;
}
}),args);
} else
{return and__3546__auto____10901;
}
})());
};
var G__11044 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11044__delegate.call(this, x, y, z, args);
};
G__11044.cljs$lang$maxFixedArity = 3;
G__11044.cljs$lang$applyTo = (function (arglist__11051){
var x = cljs.core.first(arglist__11051);
var y = cljs.core.first(cljs.core.next(arglist__11051));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11051)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11051)));
return G__11044__delegate.call(this, x, y, z, args);
});
return G__11044;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11021.call(this);
case  1 :
return ep3__11022.call(this,x);
case  2 :
return ep3__11023.call(this,x,y);
case  3 :
return ep3__11024.call(this,x,y,z);
default:
return ep3__11026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11026.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10937 = (function() { 
var G__11058__delegate = function (p1,p2,p3,ps){
var ps__10913 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11059 = (function (){
return true;
});
var epn__11060 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10757_SHARP_){
return p1__10757_SHARP_.call(null,x);
}),ps__10913);
});
var epn__11061 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10758_SHARP_){
var and__3546__auto____10918 = p1__10758_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10918))
{return p1__10758_SHARP_.call(null,y);
} else
{return and__3546__auto____10918;
}
}),ps__10913);
});
var epn__11062 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10762_SHARP_){
var and__3546__auto____10922 = p1__10762_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10922))
{var and__3546__auto____10924 = p1__10762_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10924))
{return p1__10762_SHARP_.call(null,z);
} else
{return and__3546__auto____10924;
}
} else
{return and__3546__auto____10922;
}
}),ps__10913);
});
var epn__11063 = (function() { 
var G__11070__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10928 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10928))
{return cljs.core.every_QMARK_.call(null,(function (p1__10765_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10765_SHARP_,args);
}),ps__10913);
} else
{return and__3546__auto____10928;
}
})());
};
var G__11070 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11070__delegate.call(this, x, y, z, args);
};
G__11070.cljs$lang$maxFixedArity = 3;
G__11070.cljs$lang$applyTo = (function (arglist__11077){
var x = cljs.core.first(arglist__11077);
var y = cljs.core.first(cljs.core.next(arglist__11077));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11077)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11077)));
return G__11070__delegate.call(this, x, y, z, args);
});
return G__11070;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11059.call(this);
case  1 :
return epn__11060.call(this,x);
case  2 :
return epn__11061.call(this,x,y);
case  3 :
return epn__11062.call(this,x,y,z);
default:
return epn__11063.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11063.cljs$lang$applyTo;
return epn;
})()
};
var G__11058 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11058__delegate.call(this, p1, p2, p3, ps);
};
G__11058.cljs$lang$maxFixedArity = 3;
G__11058.cljs$lang$applyTo = (function (arglist__11078){
var p1 = cljs.core.first(arglist__11078);
var p2 = cljs.core.first(cljs.core.next(arglist__11078));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11078)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11078)));
return G__11058__delegate.call(this, p1, p2, p3, ps);
});
return G__11058;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10934.call(this,p1);
case  2 :
return every_pred__10935.call(this,p1,p2);
case  3 :
return every_pred__10936.call(this,p1,p2,p3);
default:
return every_pred__10937.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10937.cljs$lang$applyTo;
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
var some_fn__11218 = (function (p){
return (function() {
var sp1 = null;
var sp1__11224 = (function (){
return null;
});
var sp1__11225 = (function (x){
return p.call(null,x);
});
var sp1__11226 = (function (x,y){
var or__3548__auto____11087 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11087))
{return or__3548__auto____11087;
} else
{return p.call(null,y);
}
});
var sp1__11227 = (function (x,y,z){
var or__3548__auto____11089 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11089))
{return or__3548__auto____11089;
} else
{var or__3548__auto____11092 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11092))
{return or__3548__auto____11092;
} else
{return p.call(null,z);
}
}
});
var sp1__11228 = (function() { 
var G__11231__delegate = function (x,y,z,args){
var or__3548__auto____11094 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11094))
{return or__3548__auto____11094;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11231 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11231__delegate.call(this, x, y, z, args);
};
G__11231.cljs$lang$maxFixedArity = 3;
G__11231.cljs$lang$applyTo = (function (arglist__11232){
var x = cljs.core.first(arglist__11232);
var y = cljs.core.first(cljs.core.next(arglist__11232));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11232)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11232)));
return G__11231__delegate.call(this, x, y, z, args);
});
return G__11231;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11224.call(this);
case  1 :
return sp1__11225.call(this,x);
case  2 :
return sp1__11226.call(this,x,y);
case  3 :
return sp1__11227.call(this,x,y,z);
default:
return sp1__11228.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11228.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11219 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11234 = (function (){
return null;
});
var sp2__11235 = (function (x){
var or__3548__auto____11102 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11102))
{return or__3548__auto____11102;
} else
{return p2.call(null,x);
}
});
var sp2__11236 = (function (x,y){
var or__3548__auto____11103 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11103))
{return or__3548__auto____11103;
} else
{var or__3548__auto____11104 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11104))
{return or__3548__auto____11104;
} else
{var or__3548__auto____11105 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11105))
{return or__3548__auto____11105;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11237 = (function (x,y,z){
var or__3548__auto____11106 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11106))
{return or__3548__auto____11106;
} else
{var or__3548__auto____11107 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11107))
{return or__3548__auto____11107;
} else
{var or__3548__auto____11108 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11108))
{return or__3548__auto____11108;
} else
{var or__3548__auto____11109 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11109))
{return or__3548__auto____11109;
} else
{var or__3548__auto____11110 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11110))
{return or__3548__auto____11110;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11238 = (function() { 
var G__11246__delegate = function (x,y,z,args){
var or__3548__auto____11111 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11111))
{return or__3548__auto____11111;
} else
{return cljs.core.some.call(null,(function (p1__10802_SHARP_){
var or__3548__auto____11112 = p1.call(null,p1__10802_SHARP_);

if(cljs.core.truth_(or__3548__auto____11112))
{return or__3548__auto____11112;
} else
{return p2.call(null,p1__10802_SHARP_);
}
}),args);
}
};
var G__11246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11246__delegate.call(this, x, y, z, args);
};
G__11246.cljs$lang$maxFixedArity = 3;
G__11246.cljs$lang$applyTo = (function (arglist__11292){
var x = cljs.core.first(arglist__11292);
var y = cljs.core.first(cljs.core.next(arglist__11292));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11292)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11292)));
return G__11246__delegate.call(this, x, y, z, args);
});
return G__11246;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11234.call(this);
case  1 :
return sp2__11235.call(this,x);
case  2 :
return sp2__11236.call(this,x,y);
case  3 :
return sp2__11237.call(this,x,y,z);
default:
return sp2__11238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11238.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11220 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11294 = (function (){
return null;
});
var sp3__11295 = (function (x){
var or__3548__auto____11115 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11115))
{return or__3548__auto____11115;
} else
{var or__3548__auto____11119 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11119))
{return or__3548__auto____11119;
} else
{return p3.call(null,x);
}
}
});
var sp3__11296 = (function (x,y){
var or__3548__auto____11180 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11180))
{return or__3548__auto____11180;
} else
{var or__3548__auto____11181 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11181))
{return or__3548__auto____11181;
} else
{var or__3548__auto____11183 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11183))
{return or__3548__auto____11183;
} else
{var or__3548__auto____11185 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11185))
{return or__3548__auto____11185;
} else
{var or__3548__auto____11187 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11187))
{return or__3548__auto____11187;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11297 = (function (x,y,z){
var or__3548__auto____11190 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11190))
{return or__3548__auto____11190;
} else
{var or__3548__auto____11191 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11191))
{return or__3548__auto____11191;
} else
{var or__3548__auto____11193 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11193))
{return or__3548__auto____11193;
} else
{var or__3548__auto____11196 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11196))
{return or__3548__auto____11196;
} else
{var or__3548__auto____11198 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11198))
{return or__3548__auto____11198;
} else
{var or__3548__auto____11199 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11199))
{return or__3548__auto____11199;
} else
{var or__3548__auto____11200 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11200))
{return or__3548__auto____11200;
} else
{var or__3548__auto____11208 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11208))
{return or__3548__auto____11208;
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
var sp3__11298 = (function() { 
var G__11310__delegate = function (x,y,z,args){
var or__3548__auto____11209 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11209))
{return or__3548__auto____11209;
} else
{return cljs.core.some.call(null,(function (p1__10804_SHARP_){
var or__3548__auto____11210 = p1.call(null,p1__10804_SHARP_);

if(cljs.core.truth_(or__3548__auto____11210))
{return or__3548__auto____11210;
} else
{var or__3548__auto____11211 = p2.call(null,p1__10804_SHARP_);

if(cljs.core.truth_(or__3548__auto____11211))
{return or__3548__auto____11211;
} else
{return p3.call(null,p1__10804_SHARP_);
}
}
}),args);
}
};
var G__11310 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11310__delegate.call(this, x, y, z, args);
};
G__11310.cljs$lang$maxFixedArity = 3;
G__11310.cljs$lang$applyTo = (function (arglist__11314){
var x = cljs.core.first(arglist__11314);
var y = cljs.core.first(cljs.core.next(arglist__11314));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11314)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11314)));
return G__11310__delegate.call(this, x, y, z, args);
});
return G__11310;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11294.call(this);
case  1 :
return sp3__11295.call(this,x);
case  2 :
return sp3__11296.call(this,x,y);
case  3 :
return sp3__11297.call(this,x,y,z);
default:
return sp3__11298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11298.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11221 = (function() { 
var G__11319__delegate = function (p1,p2,p3,ps){
var ps__11212 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11322 = (function (){
return null;
});
var spn__11323 = (function (x){
return cljs.core.some.call(null,(function (p1__10805_SHARP_){
return p1__10805_SHARP_.call(null,x);
}),ps__11212);
});
var spn__11324 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10806_SHARP_){
var or__3548__auto____11213 = p1__10806_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11213))
{return or__3548__auto____11213;
} else
{return p1__10806_SHARP_.call(null,y);
}
}),ps__11212);
});
var spn__11325 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10807_SHARP_){
var or__3548__auto____11214 = p1__10807_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11214))
{return or__3548__auto____11214;
} else
{var or__3548__auto____11215 = p1__10807_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11215))
{return or__3548__auto____11215;
} else
{return p1__10807_SHARP_.call(null,z);
}
}
}),ps__11212);
});
var spn__11326 = (function() { 
var G__11347__delegate = function (x,y,z,args){
var or__3548__auto____11216 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11216))
{return or__3548__auto____11216;
} else
{return cljs.core.some.call(null,(function (p1__10808_SHARP_){
return cljs.core.some.call(null,p1__10808_SHARP_,args);
}),ps__11212);
}
};
var G__11347 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11347__delegate.call(this, x, y, z, args);
};
G__11347.cljs$lang$maxFixedArity = 3;
G__11347.cljs$lang$applyTo = (function (arglist__11352){
var x = cljs.core.first(arglist__11352);
var y = cljs.core.first(cljs.core.next(arglist__11352));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11352)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11352)));
return G__11347__delegate.call(this, x, y, z, args);
});
return G__11347;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11322.call(this);
case  1 :
return spn__11323.call(this,x);
case  2 :
return spn__11324.call(this,x,y);
case  3 :
return spn__11325.call(this,x,y,z);
default:
return spn__11326.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11326.cljs$lang$applyTo;
return spn;
})()
};
var G__11319 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11319__delegate.call(this, p1, p2, p3, ps);
};
G__11319.cljs$lang$maxFixedArity = 3;
G__11319.cljs$lang$applyTo = (function (arglist__11357){
var p1 = cljs.core.first(arglist__11357);
var p2 = cljs.core.first(cljs.core.next(arglist__11357));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11357)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11357)));
return G__11319__delegate.call(this, p1, p2, p3, ps);
});
return G__11319;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11218.call(this,p1);
case  2 :
return some_fn__11219.call(this,p1,p2);
case  3 :
return some_fn__11220.call(this,p1,p2,p3);
default:
return some_fn__11221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11221.cljs$lang$applyTo;
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
var map__11428 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11372 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11372))
{var s__11374 = temp__3698__auto____11372;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11374)),map.call(null,f,cljs.core.rest.call(null,s__11374)));
} else
{return null;
}
})));
});
var map__11429 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11379 = cljs.core.seq.call(null,c1);
var s2__11382 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11385 = s1__11379;

if(cljs.core.truth_(and__3546__auto____11385))
{return s2__11382;
} else
{return and__3546__auto____11385;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11379),cljs.core.first.call(null,s2__11382)),map.call(null,f,cljs.core.rest.call(null,s1__11379),cljs.core.rest.call(null,s2__11382)));
} else
{return null;
}
})));
});
var map__11430 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11392 = cljs.core.seq.call(null,c1);
var s2__11393 = cljs.core.seq.call(null,c2);
var s3__11395 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11398 = s1__11392;

if(cljs.core.truth_(and__3546__auto____11398))
{var and__3546__auto____11401 = s2__11393;

if(cljs.core.truth_(and__3546__auto____11401))
{return s3__11395;
} else
{return and__3546__auto____11401;
}
} else
{return and__3546__auto____11398;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11392),cljs.core.first.call(null,s2__11393),cljs.core.first.call(null,s3__11395)),map.call(null,f,cljs.core.rest.call(null,s1__11392),cljs.core.rest.call(null,s2__11393),cljs.core.rest.call(null,s3__11395)));
} else
{return null;
}
})));
});
var map__11431 = (function() { 
var G__11455__delegate = function (f,c1,c2,c3,colls){
var step__11413 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11410 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11410)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11410),step.call(null,map.call(null,cljs.core.rest,ss__11410)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11081_SHARP_){
return cljs.core.apply.call(null,f,p1__11081_SHARP_);
}),step__11413.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11455 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11455__delegate.call(this, f, c1, c2, c3, colls);
};
G__11455.cljs$lang$maxFixedArity = 4;
G__11455.cljs$lang$applyTo = (function (arglist__11472){
var f = cljs.core.first(arglist__11472);
var c1 = cljs.core.first(cljs.core.next(arglist__11472));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11472)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11472))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11472))));
return G__11455__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11455;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11428.call(this,f,c1);
case  3 :
return map__11429.call(this,f,c1,c2);
case  4 :
return map__11430.call(this,f,c1,c2,c3);
default:
return map__11431.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11431.cljs$lang$applyTo;
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
{var temp__3698__auto____11503 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11503))
{var s__11508 = temp__3698__auto____11503;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11508),take.call(null,(n - 1),cljs.core.rest.call(null,s__11508)));
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
var step__11534 = (function (n,coll){
while(true){
var s__11526 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11533 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11533))
{return s__11526;
} else
{return and__3546__auto____11533;
}
})()))
{{
var G__11538 = (n - 1);
var G__11539 = cljs.core.rest.call(null,s__11526);
n = G__11538;
coll = G__11539;
continue;
}
} else
{return s__11526;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11534.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11547 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11548 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11547.call(this,n);
case  2 :
return drop_last__11548.call(this,n,s);
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
var s__11557 = cljs.core.seq.call(null,coll);
var lead__11558 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11558))
{{
var G__11560 = cljs.core.next.call(null,s__11557);
var G__11561 = cljs.core.next.call(null,lead__11558);
s__11557 = G__11560;
lead__11558 = G__11561;
continue;
}
} else
{return s__11557;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11572 = (function (pred,coll){
while(true){
var s__11567 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11571 = s__11567;

if(cljs.core.truth_(and__3546__auto____11571))
{return pred.call(null,cljs.core.first.call(null,s__11567));
} else
{return and__3546__auto____11571;
}
})()))
{{
var G__11575 = pred;
var G__11576 = cljs.core.rest.call(null,s__11567);
pred = G__11575;
coll = G__11576;
continue;
}
} else
{return s__11567;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11572.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11581 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11581))
{var s__11588 = temp__3698__auto____11581;

return cljs.core.concat.call(null,s__11588,cycle.call(null,s__11588));
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
var repeat__11598 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11599 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11598.call(this,n);
case  2 :
return repeat__11599.call(this,n,x);
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
var repeatedly__11626 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11627 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11626.call(this,n);
case  2 :
return repeatedly__11627.call(this,n,f);
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
var interleave__11678 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11664 = cljs.core.seq.call(null,c1);
var s2__11665 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11667 = s1__11664;

if(cljs.core.truth_(and__3546__auto____11667))
{return s2__11665;
} else
{return and__3546__auto____11667;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11664),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11665),interleave.call(null,cljs.core.rest.call(null,s1__11664),cljs.core.rest.call(null,s2__11665))));
} else
{return null;
}
})));
});
var interleave__11679 = (function() { 
var G__11682__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11672 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11672)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11672),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11672)));
} else
{return null;
}
})));
};
var G__11682 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11682__delegate.call(this, c1, c2, colls);
};
G__11682.cljs$lang$maxFixedArity = 2;
G__11682.cljs$lang$applyTo = (function (arglist__11697){
var c1 = cljs.core.first(arglist__11697);
var c2 = cljs.core.first(cljs.core.next(arglist__11697));
var colls = cljs.core.rest(cljs.core.next(arglist__11697));
return G__11682__delegate.call(this, c1, c2, colls);
});
return G__11682;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11678.call(this,c1,c2);
default:
return interleave__11679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11679.cljs$lang$applyTo;
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
var cat__11715 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11711 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11711))
{var coll__11713 = temp__3695__auto____11711;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11713),cat.call(null,cljs.core.rest.call(null,coll__11713),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11715.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11722 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11723 = (function() { 
var G__11725__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11725 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11725__delegate.call(this, f, coll, colls);
};
G__11725.cljs$lang$maxFixedArity = 2;
G__11725.cljs$lang$applyTo = (function (arglist__11726){
var f = cljs.core.first(arglist__11726);
var coll = cljs.core.first(cljs.core.next(arglist__11726));
var colls = cljs.core.rest(cljs.core.next(arglist__11726));
return G__11725__delegate.call(this, f, coll, colls);
});
return G__11725;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11722.call(this,f,coll);
default:
return mapcat__11723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11723.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11727 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11727))
{var s__11728 = temp__3698__auto____11727;

var f__11729 = cljs.core.first.call(null,s__11728);
var r__11730 = cljs.core.rest.call(null,s__11728);

if(cljs.core.truth_(pred.call(null,f__11729)))
{return cljs.core.cons.call(null,f__11729,filter.call(null,pred,r__11730));
} else
{return filter.call(null,pred,r__11730);
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
var walk__11907 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11907.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11740_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11740_SHARP_));
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
var partition__11930 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11931 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11920 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11920))
{var s__11923 = temp__3698__auto____11920;

var p__11924 = cljs.core.take.call(null,n,s__11923);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11924))))
{return cljs.core.cons.call(null,p__11924,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11923)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11932 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11925))
{var s__11927 = temp__3698__auto____11925;

var p__11929 = cljs.core.take.call(null,n,s__11927);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11929))))
{return cljs.core.cons.call(null,p__11929,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11927)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11929,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11930.call(this,n,step);
case  3 :
return partition__11931.call(this,n,step,pad);
case  4 :
return partition__11932.call(this,n,step,pad,coll);
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
var get_in__11948 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11949 = (function (m,ks,not_found){
var sentinel__11936 = cljs.core.lookup_sentinel;
var m__11937 = m;
var ks__11938 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11938))
{var m__11940 = cljs.core.get.call(null,m__11937,cljs.core.first.call(null,ks__11938),sentinel__11936);

if(cljs.core.truth_((sentinel__11936 === m__11940)))
{return not_found;
} else
{{
var G__11952 = sentinel__11936;
var G__11953 = m__11940;
var G__11954 = cljs.core.next.call(null,ks__11938);
sentinel__11936 = G__11952;
m__11937 = G__11953;
ks__11938 = G__11954;
continue;
}
}
} else
{return m__11937;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11948.call(this,m,ks);
case  3 :
return get_in__11949.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11956,v){
var vec__11958__11959 = p__11956;
var k__11960 = cljs.core.nth.call(null,vec__11958__11959,0,null);
var ks__11961 = cljs.core.nthnext.call(null,vec__11958__11959,1);

if(cljs.core.truth_(ks__11961))
{return cljs.core.assoc.call(null,m,k__11960,assoc_in.call(null,cljs.core.get.call(null,m,k__11960),ks__11961,v));
} else
{return cljs.core.assoc.call(null,m,k__11960,v);
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
var update_in__delegate = function (m,p__11970,f,args){
var vec__11971__11972 = p__11970;
var k__11973 = cljs.core.nth.call(null,vec__11971__11972,0,null);
var ks__11974 = cljs.core.nthnext.call(null,vec__11971__11972,1);

if(cljs.core.truth_(ks__11974))
{return cljs.core.assoc.call(null,m,k__11973,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11973),ks__11974,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11973,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11973),args));
}
};
var update_in = function (m,p__11970,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11970, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11985){
var m = cljs.core.first(arglist__11985);
var p__11970 = cljs.core.first(cljs.core.next(arglist__11985));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11985)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11985)));
return update_in__delegate.call(this, m, p__11970, f, args);
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
var this__11993 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12102 = null;
var G__12102__12103 = (function (coll,k){
var this__12046 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12102__12104 = (function (coll,k,not_found){
var this__12047 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12102 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12102__12103.call(this,coll,k);
case  3 :
return G__12102__12104.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12102;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12048 = this;
var new_array__12052 = cljs.core.aclone.call(null,this__12048.array);

(new_array__12052[k] = v);
return (new cljs.core.Vector(this__12048.meta,new_array__12052));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12243 = null;
var G__12243__12244 = (function (coll,k){
var this__12054 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12243__12245 = (function (coll,k,not_found){
var this__12055 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12243 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12243__12244.call(this,coll,k);
case  3 :
return G__12243__12245.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12243;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12058 = this;
var new_array__12059 = cljs.core.aclone.call(null,this__12058.array);

new_array__12059.push(o);
return (new cljs.core.Vector(this__12058.meta,new_array__12059));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12247 = null;
var G__12247__12248 = (function (v,f){
var this__12062 = this;
return cljs.core.ci_reduce.call(null,this__12062.array,f);
});
var G__12247__12249 = (function (v,f,start){
var this__12063 = this;
return cljs.core.ci_reduce.call(null,this__12063.array,f,start);
});
G__12247 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12247__12248.call(this,v,f);
case  3 :
return G__12247__12249.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12247;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12066 = this;
if(cljs.core.truth_((this__12066.array.length > 0)))
{var vector_seq__12069 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12066.array.length)))
{return cljs.core.cons.call(null,(this__12066.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12069.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12071 = this;
return this__12071.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12072 = this;
var count__12074 = this__12072.array.length;

if(cljs.core.truth_((count__12074 > 0)))
{return (this__12072.array[(count__12074 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12079 = this;
if(cljs.core.truth_((this__12079.array.length > 0)))
{var new_array__12080 = cljs.core.aclone.call(null,this__12079.array);

new_array__12080.pop();
return (new cljs.core.Vector(this__12079.meta,new_array__12080));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12081 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12086 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12087 = this;
return (new cljs.core.Vector(meta,this__12087.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12088 = this;
return this__12088.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12255 = null;
var G__12255__12256 = (function (coll,n){
var this__12089 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12090 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12090))
{return (n < this__12089.array.length);
} else
{return and__3546__auto____12090;
}
})()))
{return (this__12089.array[n]);
} else
{return null;
}
});
var G__12255__12257 = (function (coll,n,not_found){
var this__12094 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12095 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12095))
{return (n < this__12094.array.length);
} else
{return and__3546__auto____12095;
}
})()))
{return (this__12094.array[n]);
} else
{return not_found;
}
});
G__12255 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12255__12256.call(this,coll,n);
case  3 :
return G__12255__12257.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12255;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12096 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12096.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12265){
var args = cljs.core.seq( arglist__12265 );;
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
var this__12274 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12313 = null;
var G__12313__12314 = (function (coll,k){
var this__12275 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12313__12315 = (function (coll,k,not_found){
var this__12276 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12313 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12313__12314.call(this,coll,k);
case  3 :
return G__12313__12315.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12313;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12280 = this;
var v_pos__12281 = (this__12280.start + key);

return (new cljs.core.Subvec(this__12280.meta,cljs.core._assoc.call(null,this__12280.v,v_pos__12281,val),this__12280.start,((this__12280.end > (v_pos__12281 + 1)) ? this__12280.end : (v_pos__12281 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12317 = null;
var G__12317__12318 = (function (coll,k){
var this__12285 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12317__12319 = (function (coll,k,not_found){
var this__12286 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12317 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12317__12318.call(this,coll,k);
case  3 :
return G__12317__12319.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12317;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12288 = this;
return (new cljs.core.Subvec(this__12288.meta,cljs.core._assoc_n.call(null,this__12288.v,this__12288.end,o),this__12288.start,(this__12288.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12322 = null;
var G__12322__12323 = (function (coll,f){
var this__12293 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12322__12324 = (function (coll,f,start){
var this__12294 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12322 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12322__12323.call(this,coll,f);
case  3 :
return G__12322__12324.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12322;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12295 = this;
var subvec_seq__12296 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12295.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12295.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12296.call(null,this__12295.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12297 = this;
return (this__12297.end - this__12297.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12298 = this;
return cljs.core._nth.call(null,this__12298.v,(this__12298.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12299 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12299.start,this__12299.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12299.meta,this__12299.v,this__12299.start,(this__12299.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12301 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12305 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12307 = this;
return (new cljs.core.Subvec(meta,this__12307.v,this__12307.start,this__12307.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12308 = this;
return this__12308.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12337 = null;
var G__12337__12338 = (function (coll,n){
var this__12309 = this;
return cljs.core._nth.call(null,this__12309.v,(this__12309.start + n));
});
var G__12337__12339 = (function (coll,n,not_found){
var this__12310 = this;
return cljs.core._nth.call(null,this__12310.v,(this__12310.start + n),not_found);
});
G__12337 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12337__12338.call(this,coll,n);
case  3 :
return G__12337__12339.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12337;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12311 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12311.meta);
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
var subvec__12363 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12364 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12363.call(this,v,start);
case  3 :
return subvec__12364.call(this,v,start,end);
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
var this__12374 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12375 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12376 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12377 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12377.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12379 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12384 = this;
return cljs.core._first.call(null,this__12384.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12385 = this;
var temp__3695__auto____12386 = cljs.core.next.call(null,this__12385.front);

if(cljs.core.truth_(temp__3695__auto____12386))
{var f1__12387 = temp__3695__auto____12386;

return (new cljs.core.PersistentQueueSeq(this__12385.meta,f1__12387,this__12385.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12385.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12385.meta,this__12385.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12388 = this;
return this__12388.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12389 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12389.front,this__12389.rear));
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
var this__12397 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12399 = this;
if(cljs.core.truth_(this__12399.front))
{return (new cljs.core.PersistentQueue(this__12399.meta,(this__12399.count + 1),this__12399.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12401 = this__12399.rear;

if(cljs.core.truth_(or__3548__auto____12401))
{return or__3548__auto____12401;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12399.meta,(this__12399.count + 1),cljs.core.conj.call(null,this__12399.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12403 = this;
var rear__12406 = cljs.core.seq.call(null,this__12403.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12409 = this__12403.front;

if(cljs.core.truth_(or__3548__auto____12409))
{return or__3548__auto____12409;
} else
{return rear__12406;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12403.front,cljs.core.seq.call(null,rear__12406)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12412 = this;
return this__12412.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12413 = this;
return cljs.core._first.call(null,this__12413.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12415 = this;
if(cljs.core.truth_(this__12415.front))
{var temp__3695__auto____12419 = cljs.core.next.call(null,this__12415.front);

if(cljs.core.truth_(temp__3695__auto____12419))
{var f1__12420 = temp__3695__auto____12419;

return (new cljs.core.PersistentQueue(this__12415.meta,(this__12415.count - 1),f1__12420,this__12415.rear));
} else
{return (new cljs.core.PersistentQueue(this__12415.meta,(this__12415.count - 1),cljs.core.seq.call(null,this__12415.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12426 = this;
return cljs.core.first.call(null,this__12426.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12427 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12431 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12437 = this;
return (new cljs.core.PersistentQueue(meta,this__12437.count,this__12437.front,this__12437.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12438 = this;
return this__12438.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12439 = this;
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
var this__12504 = this;
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
var len__12513 = array.length;

var i__12515 = 0;

while(true){
if(cljs.core.truth_((i__12515 < len__12513)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12515]))))
{return i__12515;
} else
{{
var G__12519 = (i__12515 + incr);
i__12515 = G__12519;
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
var obj_map_contains_key_QMARK___12524 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12526 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12523 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12523))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12523;
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
return obj_map_contains_key_QMARK___12524.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12526.call(this,k,strobj,true_val,false_val);
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
var this__12537 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12723 = null;
var G__12723__12724 = (function (coll,k){
var this__12538 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12723__12725 = (function (coll,k,not_found){
var this__12539 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12539.strobj,(this__12539.strobj[k]),not_found);
});
G__12723 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12723__12724.call(this,coll,k);
case  3 :
return G__12723__12725.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12723;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12540 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12545 = goog.object.clone.call(null,this__12540.strobj);
var overwrite_QMARK___12546 = new_strobj__12545.hasOwnProperty(k);

(new_strobj__12545[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12546))
{return (new cljs.core.ObjMap(this__12540.meta,this__12540.keys,new_strobj__12545));
} else
{var new_keys__12547 = cljs.core.aclone.call(null,this__12540.keys);

new_keys__12547.push(k);
return (new cljs.core.ObjMap(this__12540.meta,new_keys__12547,new_strobj__12545));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12540.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12628 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12628.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12738 = null;
var G__12738__12739 = (function (coll,k){
var this__12630 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12738__12740 = (function (coll,k,not_found){
var this__12632 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12738 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12738__12739.call(this,coll,k);
case  3 :
return G__12738__12740.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12738;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12638 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12685 = this;
if(cljs.core.truth_((this__12685.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12532_SHARP_){
return cljs.core.vector.call(null,p1__12532_SHARP_,(this__12685.strobj[p1__12532_SHARP_]));
}),this__12685.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12693 = this;
return this__12693.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12694 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12697 = this;
return (new cljs.core.ObjMap(meta,this__12697.keys,this__12697.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12702 = this;
return this__12702.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12704 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12704.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12706 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12709 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12709))
{return this__12706.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12709;
}
})()))
{var new_keys__12712 = cljs.core.aclone.call(null,this__12706.keys);
var new_strobj__12716 = goog.object.clone.call(null,this__12706.strobj);

new_keys__12712.splice(cljs.core.scan_array.call(null,1,k,new_keys__12712),1);
cljs.core.js_delete.call(null,new_strobj__12716,k);
return (new cljs.core.ObjMap(this__12706.meta,new_keys__12712,new_strobj__12716));
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
var this__12775 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12861 = null;
var G__12861__12862 = (function (coll,k){
var this__12778 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12861__12863 = (function (coll,k,not_found){
var this__12779 = this;
var bucket__12781 = (this__12779.hashobj[cljs.core.hash.call(null,k)]);
var i__12782 = (cljs.core.truth_(bucket__12781)?cljs.core.scan_array.call(null,2,k,bucket__12781):null);

if(cljs.core.truth_(i__12782))
{return (bucket__12781[(i__12782 + 1)]);
} else
{return not_found;
}
});
G__12861 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12861__12862.call(this,coll,k);
case  3 :
return G__12861__12863.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12861;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12786 = this;
var h__12788 = cljs.core.hash.call(null,k);
var bucket__12789 = (this__12786.hashobj[h__12788]);

if(cljs.core.truth_(bucket__12789))
{var new_bucket__12790 = cljs.core.aclone.call(null,bucket__12789);
var new_hashobj__12792 = goog.object.clone.call(null,this__12786.hashobj);

(new_hashobj__12792[h__12788] = new_bucket__12790);
var temp__3695__auto____12794 = cljs.core.scan_array.call(null,2,k,new_bucket__12790);

if(cljs.core.truth_(temp__3695__auto____12794))
{var i__12795 = temp__3695__auto____12794;

(new_bucket__12790[(i__12795 + 1)] = v);
return (new cljs.core.HashMap(this__12786.meta,this__12786.count,new_hashobj__12792));
} else
{new_bucket__12790.push(k,v);
return (new cljs.core.HashMap(this__12786.meta,(this__12786.count + 1),new_hashobj__12792));
}
} else
{var new_hashobj__12802 = goog.object.clone.call(null,this__12786.hashobj);

(new_hashobj__12802[h__12788] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12786.meta,(this__12786.count + 1),new_hashobj__12802));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12823 = this;
var bucket__12825 = (this__12823.hashobj[cljs.core.hash.call(null,k)]);
var i__12826 = (cljs.core.truth_(bucket__12825)?cljs.core.scan_array.call(null,2,k,bucket__12825):null);

if(cljs.core.truth_(i__12826))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12874 = null;
var G__12874__12875 = (function (coll,k){
var this__12828 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12874__12876 = (function (coll,k,not_found){
var this__12831 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12874 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12874__12875.call(this,coll,k);
case  3 :
return G__12874__12876.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12874;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12836 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12839 = this;
if(cljs.core.truth_((this__12839.count > 0)))
{var hashes__12843 = cljs.core.js_keys.call(null,this__12839.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12765_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12839.hashobj[p1__12765_SHARP_])));
}),hashes__12843);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12845 = this;
return this__12845.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12846 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12847 = this;
return (new cljs.core.HashMap(meta,this__12847.count,this__12847.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12848 = this;
return this__12848.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12850 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12850.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12851 = this;
var h__12852 = cljs.core.hash.call(null,k);
var bucket__12853 = (this__12851.hashobj[h__12852]);
var i__12854 = (cljs.core.truth_(bucket__12853)?cljs.core.scan_array.call(null,2,k,bucket__12853):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12854)))
{return coll;
} else
{var new_hashobj__12855 = goog.object.clone.call(null,this__12851.hashobj);

if(cljs.core.truth_((3 > bucket__12853.length)))
{cljs.core.js_delete.call(null,new_hashobj__12855,h__12852);
} else
{var new_bucket__12857 = cljs.core.aclone.call(null,bucket__12853);

new_bucket__12857.splice(i__12854,2);
(new_hashobj__12855[h__12852] = new_bucket__12857);
}
return (new cljs.core.HashMap(this__12851.meta,(this__12851.count - 1),new_hashobj__12855));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12914 = ks.length;

var i__12915 = 0;
var out__12916 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12915 < len__12914)))
{{
var G__12919 = (i__12915 + 1);
var G__12920 = cljs.core.assoc.call(null,out__12916,(ks[i__12915]),(vs[i__12915]));
i__12915 = G__12919;
out__12916 = G__12920;
continue;
}
} else
{return out__12916;
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
var in$__12951 = cljs.core.seq.call(null,keyvals);
var out__12952 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12951))
{{
var G__12958 = cljs.core.nnext.call(null,in$__12951);
var G__12959 = cljs.core.assoc.call(null,out__12952,cljs.core.first.call(null,in$__12951),cljs.core.second.call(null,in$__12951));
in$__12951 = G__12958;
out__12952 = G__12959;
continue;
}
} else
{return out__12952;
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
hash_map.cljs$lang$applyTo = (function (arglist__12961){
var keyvals = cljs.core.seq( arglist__12961 );;
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
{return cljs.core.reduce.call(null,(function (p1__12964_SHARP_,p2__12966_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12978 = p1__12964_SHARP_;

if(cljs.core.truth_(or__3548__auto____12978))
{return or__3548__auto____12978;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12966_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__12982){
var maps = cljs.core.seq( arglist__12982 );;
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
{var merge_entry__12989 = (function (m,e){
var k__12987 = cljs.core.first.call(null,e);
var v__12988 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__12987)))
{return cljs.core.assoc.call(null,m,k__12987,f.call(null,cljs.core.get.call(null,m,k__12987),v__12988));
} else
{return cljs.core.assoc.call(null,m,k__12987,v__12988);
}
});
var merge2__12992 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__12989,(function (){var or__3548__auto____12990 = m1;

if(cljs.core.truth_(or__3548__auto____12990))
{return or__3548__auto____12990;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__12992,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13013){
var f = cljs.core.first(arglist__13013);
var maps = cljs.core.rest(arglist__13013);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13022 = cljs.core.ObjMap.fromObject([],{});
var keys__13023 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13023))
{var key__13025 = cljs.core.first.call(null,keys__13023);
var entry__13027 = cljs.core.get.call(null,map,key__13025,"﷐'user/not-found");

{
var G__13033 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13027,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13022,key__13025,entry__13027):ret__13022);
var G__13034 = cljs.core.next.call(null,keys__13023);
ret__13022 = G__13033;
keys__13023 = G__13034;
continue;
}
} else
{return ret__13022;
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
var this__13048 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13153 = null;
var G__13153__13154 = (function (coll,v){
var this__13051 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13153__13155 = (function (coll,v,not_found){
var this__13055 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13055.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13153 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13153__13154.call(this,coll,v);
case  3 :
return G__13153__13155.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13153;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13157 = null;
var G__13157__13158 = (function (coll,k){
var this__13056 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13157__13159 = (function (coll,k,not_found){
var this__13057 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13157 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13157__13158.call(this,coll,k);
case  3 :
return G__13157__13159.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13157;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13058 = this;
return (new cljs.core.Set(this__13058.meta,cljs.core.assoc.call(null,this__13058.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13059 = this;
return cljs.core.keys.call(null,this__13059.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13060 = this;
return (new cljs.core.Set(this__13060.meta,cljs.core.dissoc.call(null,this__13060.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13065 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13092 = this;
var and__3546__auto____13095 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13095))
{var and__3546__auto____13097 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13097))
{return cljs.core.every_QMARK_.call(null,(function (p1__13018_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13018_SHARP_);
}),other);
} else
{return and__3546__auto____13097;
}
} else
{return and__3546__auto____13095;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13146 = this;
return (new cljs.core.Set(meta,this__13146.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13147 = this;
return this__13147.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13152 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13152.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13168 = cljs.core.seq.call(null,coll);
var out__13247 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13168))))
{{
var G__13250 = cljs.core.rest.call(null,in$__13168);
var G__13251 = cljs.core.conj.call(null,out__13247,cljs.core.first.call(null,in$__13168));
in$__13168 = G__13250;
out__13247 = G__13251;
continue;
}
} else
{return out__13247;
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
{var n__13254 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13256 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13256))
{var e__13257 = temp__3695__auto____13256;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13257));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13254,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13166_SHARP_){
var temp__3695__auto____13264 = cljs.core.find.call(null,smap,p1__13166_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13264))
{var e__13265 = temp__3695__auto____13264;

return cljs.core.second.call(null,e__13265);
} else
{return p1__13166_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13290 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13280,seen){
while(true){
var vec__13281__13282 = p__13280;
var f__13283 = cljs.core.nth.call(null,vec__13281__13282,0,null);
var xs__13284 = vec__13281__13282;

var temp__3698__auto____13285 = cljs.core.seq.call(null,xs__13284);

if(cljs.core.truth_(temp__3698__auto____13285))
{var s__13286 = temp__3698__auto____13285;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13283)))
{{
var G__13291 = cljs.core.rest.call(null,s__13286);
var G__13293 = seen;
p__13280 = G__13291;
seen = G__13293;
continue;
}
} else
{return cljs.core.cons.call(null,f__13283,step.call(null,cljs.core.rest.call(null,s__13286),cljs.core.conj.call(null,seen,f__13283)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13290.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13299 = cljs.core.Vector.fromArray([]);
var s__13300 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13300)))
{{
var G__13302 = cljs.core.conj.call(null,ret__13299,cljs.core.first.call(null,s__13300));
var G__13303 = cljs.core.next.call(null,s__13300);
ret__13299 = G__13302;
s__13300 = G__13303;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13299);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13304 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13304))
{return or__3548__auto____13304;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13306 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13306 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13306 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13312 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13312))
{return or__3548__auto____13312;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13313 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13313 > -1)))
{return cljs.core.subs.call(null,x,2,i__13313);
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
var map__13322 = cljs.core.ObjMap.fromObject([],{});
var ks__13323 = cljs.core.seq.call(null,keys);
var vs__13324 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13326 = ks__13323;

if(cljs.core.truth_(and__3546__auto____13326))
{return vs__13324;
} else
{return and__3546__auto____13326;
}
})()))
{{
var G__13333 = cljs.core.assoc.call(null,map__13322,cljs.core.first.call(null,ks__13323),cljs.core.first.call(null,vs__13324));
var G__13334 = cljs.core.next.call(null,ks__13323);
var G__13335 = cljs.core.next.call(null,vs__13324);
map__13322 = G__13333;
ks__13323 = G__13334;
vs__13324 = G__13335;
continue;
}
} else
{return map__13322;
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
var max_key__13360 = (function (k,x){
return x;
});
var max_key__13361 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13362 = (function() { 
var G__13369__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13318_SHARP_,p2__13319_SHARP_){
return max_key.call(null,k,p1__13318_SHARP_,p2__13319_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13369 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13369__delegate.call(this, k, x, y, more);
};
G__13369.cljs$lang$maxFixedArity = 3;
G__13369.cljs$lang$applyTo = (function (arglist__13375){
var k = cljs.core.first(arglist__13375);
var x = cljs.core.first(cljs.core.next(arglist__13375));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13375)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13375)));
return G__13369__delegate.call(this, k, x, y, more);
});
return G__13369;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13360.call(this,k,x);
case  3 :
return max_key__13361.call(this,k,x,y);
default:
return max_key__13362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13362.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13388 = (function (k,x){
return x;
});
var min_key__13389 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13390 = (function() { 
var G__13394__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13348_SHARP_,p2__13350_SHARP_){
return min_key.call(null,k,p1__13348_SHARP_,p2__13350_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13394 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13394__delegate.call(this, k, x, y, more);
};
G__13394.cljs$lang$maxFixedArity = 3;
G__13394.cljs$lang$applyTo = (function (arglist__13396){
var k = cljs.core.first(arglist__13396);
var x = cljs.core.first(cljs.core.next(arglist__13396));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13396)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13396)));
return G__13394__delegate.call(this, k, x, y, more);
});
return G__13394;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13388.call(this,k,x);
case  3 :
return min_key__13389.call(this,k,x,y);
default:
return min_key__13390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13390.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13417 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13418 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13410 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13410))
{var s__13413 = temp__3698__auto____13410;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13413),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13413)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13417.call(this,n,step);
case  3 :
return partition_all__13418.call(this,n,step,coll);
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
var temp__3698__auto____13426 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13426))
{var s__13427 = temp__3698__auto____13426;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13427))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13427),take_while.call(null,pred,cljs.core.rest.call(null,s__13427)));
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
var this__13448 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13453 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13611 = null;
var G__13611__13612 = (function (rng,f){
var this__13454 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13611__13613 = (function (rng,f,s){
var this__13455 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13611 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13611__13612.call(this,rng,f);
case  3 :
return G__13611__13613.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13611;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13461 = this;
var comp__13465 = (cljs.core.truth_((this__13461.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13465.call(null,this__13461.start,this__13461.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13467 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13467.end - this__13467.start) / this__13467.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13472 = this;
return this__13472.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13474 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13474.meta,(this__13474.start + this__13474.step),this__13474.end,this__13474.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13479 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13480 = this;
return (new cljs.core.Range(meta,this__13480.start,this__13480.end,this__13480.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13482 = this;
return this__13482.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13699 = null;
var G__13699__13700 = (function (rng,n){
var this__13486 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13486.start + (n * this__13486.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13553 = (this__13486.start > this__13486.end);

if(cljs.core.truth_(and__3546__auto____13553))
{return cljs.core._EQ_.call(null,this__13486.step,0);
} else
{return and__3546__auto____13553;
}
})()))
{return this__13486.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13699__13701 = (function (rng,n,not_found){
var this__13608 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13608.start + (n * this__13608.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13609 = (this__13608.start > this__13608.end);

if(cljs.core.truth_(and__3546__auto____13609))
{return cljs.core._EQ_.call(null,this__13608.step,0);
} else
{return and__3546__auto____13609;
}
})()))
{return this__13608.start;
} else
{return not_found;
}
}
});
G__13699 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13699__13700.call(this,rng,n);
case  3 :
return G__13699__13701.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13699;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13610 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13610.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13722 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13723 = (function (end){
return range.call(null,0,end,1);
});
var range__13724 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13725 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13722.call(this);
case  1 :
return range__13723.call(this,start);
case  2 :
return range__13724.call(this,start,end);
case  3 :
return range__13725.call(this,start,end,step);
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
{var s__13735 = temp__3698__auto____13734;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13735),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13735)));
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
var temp__3698__auto____13754 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13754))
{var s__13755 = temp__3698__auto____13754;

var fst__13756 = cljs.core.first.call(null,s__13755);
var fv__13757 = f.call(null,fst__13756);
var run__13758 = cljs.core.cons.call(null,fst__13756,cljs.core.take_while.call(null,(function (p1__13744_SHARP_){
return cljs.core._EQ_.call(null,fv__13757,f.call(null,p1__13744_SHARP_));
}),cljs.core.next.call(null,s__13755)));

return cljs.core.cons.call(null,run__13758,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13758),s__13755))));
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
var reductions__13817 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13810 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13810))
{var s__13811 = temp__3695__auto____13810;

return reductions.call(null,f,cljs.core.first.call(null,s__13811),cljs.core.rest.call(null,s__13811));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13818 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13813 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13813))
{var s__13814 = temp__3698__auto____13813;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13814)),cljs.core.rest.call(null,s__13814));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13817.call(this,f,init);
case  3 :
return reductions__13818.call(this,f,init,coll);
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
var juxt__13850 = (function (f){
return (function() {
var G__13855 = null;
var G__13855__13856 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13855__13857 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13855__13858 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13855__13859 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13855__13860 = (function() { 
var G__13864__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13864 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13864__delegate.call(this, x, y, z, args);
};
G__13864.cljs$lang$maxFixedArity = 3;
G__13864.cljs$lang$applyTo = (function (arglist__13865){
var x = cljs.core.first(arglist__13865);
var y = cljs.core.first(cljs.core.next(arglist__13865));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13865)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13865)));
return G__13864__delegate.call(this, x, y, z, args);
});
return G__13864;
})()
;
G__13855 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13855__13856.call(this);
case  1 :
return G__13855__13857.call(this,x);
case  2 :
return G__13855__13858.call(this,x,y);
case  3 :
return G__13855__13859.call(this,x,y,z);
default:
return G__13855__13860.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13855.cljs$lang$maxFixedArity = 3;
G__13855.cljs$lang$applyTo = G__13855__13860.cljs$lang$applyTo;
return G__13855;
})()
});
var juxt__13851 = (function (f,g){
return (function() {
var G__13868 = null;
var G__13868__13869 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13868__13870 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13868__13871 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13868__13872 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13868__13873 = (function() { 
var G__13877__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13877 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13877__delegate.call(this, x, y, z, args);
};
G__13877.cljs$lang$maxFixedArity = 3;
G__13877.cljs$lang$applyTo = (function (arglist__13878){
var x = cljs.core.first(arglist__13878);
var y = cljs.core.first(cljs.core.next(arglist__13878));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13878)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13878)));
return G__13877__delegate.call(this, x, y, z, args);
});
return G__13877;
})()
;
G__13868 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13868__13869.call(this);
case  1 :
return G__13868__13870.call(this,x);
case  2 :
return G__13868__13871.call(this,x,y);
case  3 :
return G__13868__13872.call(this,x,y,z);
default:
return G__13868__13873.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13868.cljs$lang$maxFixedArity = 3;
G__13868.cljs$lang$applyTo = G__13868__13873.cljs$lang$applyTo;
return G__13868;
})()
});
var juxt__13852 = (function (f,g,h){
return (function() {
var G__13881 = null;
var G__13881__13882 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13881__13883 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13881__13884 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13881__13885 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13881__13886 = (function() { 
var G__13890__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13890 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13890__delegate.call(this, x, y, z, args);
};
G__13890.cljs$lang$maxFixedArity = 3;
G__13890.cljs$lang$applyTo = (function (arglist__13902){
var x = cljs.core.first(arglist__13902);
var y = cljs.core.first(cljs.core.next(arglist__13902));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13902)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13902)));
return G__13890__delegate.call(this, x, y, z, args);
});
return G__13890;
})()
;
G__13881 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13881__13882.call(this);
case  1 :
return G__13881__13883.call(this,x);
case  2 :
return G__13881__13884.call(this,x,y);
case  3 :
return G__13881__13885.call(this,x,y,z);
default:
return G__13881__13886.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13881.cljs$lang$maxFixedArity = 3;
G__13881.cljs$lang$applyTo = G__13881__13886.cljs$lang$applyTo;
return G__13881;
})()
});
var juxt__13853 = (function() { 
var G__13904__delegate = function (f,g,h,fs){
var fs__13841 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13905 = null;
var G__13905__13906 = (function (){
return cljs.core.reduce.call(null,(function (p1__13768_SHARP_,p2__13769_SHARP_){
return cljs.core.conj.call(null,p1__13768_SHARP_,p2__13769_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13841);
});
var G__13905__13907 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13771_SHARP_,p2__13772_SHARP_){
return cljs.core.conj.call(null,p1__13771_SHARP_,p2__13772_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13841);
});
var G__13905__13908 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13773_SHARP_,p2__13774_SHARP_){
return cljs.core.conj.call(null,p1__13773_SHARP_,p2__13774_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13841);
});
var G__13905__13909 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13775_SHARP_,p2__13777_SHARP_){
return cljs.core.conj.call(null,p1__13775_SHARP_,p2__13777_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13841);
});
var G__13905__13910 = (function() { 
var G__13919__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13780_SHARP_,p2__13781_SHARP_){
return cljs.core.conj.call(null,p1__13780_SHARP_,cljs.core.apply.call(null,p2__13781_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13841);
};
var G__13919 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13919__delegate.call(this, x, y, z, args);
};
G__13919.cljs$lang$maxFixedArity = 3;
G__13919.cljs$lang$applyTo = (function (arglist__13920){
var x = cljs.core.first(arglist__13920);
var y = cljs.core.first(cljs.core.next(arglist__13920));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13920)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13920)));
return G__13919__delegate.call(this, x, y, z, args);
});
return G__13919;
})()
;
G__13905 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13905__13906.call(this);
case  1 :
return G__13905__13907.call(this,x);
case  2 :
return G__13905__13908.call(this,x,y);
case  3 :
return G__13905__13909.call(this,x,y,z);
default:
return G__13905__13910.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13905.cljs$lang$maxFixedArity = 3;
G__13905.cljs$lang$applyTo = G__13905__13910.cljs$lang$applyTo;
return G__13905;
})()
};
var G__13904 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13904__delegate.call(this, f, g, h, fs);
};
G__13904.cljs$lang$maxFixedArity = 3;
G__13904.cljs$lang$applyTo = (function (arglist__13924){
var f = cljs.core.first(arglist__13924);
var g = cljs.core.first(cljs.core.next(arglist__13924));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13924)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13924)));
return G__13904__delegate.call(this, f, g, h, fs);
});
return G__13904;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13850.call(this,f);
case  2 :
return juxt__13851.call(this,f,g);
case  3 :
return juxt__13852.call(this,f,g,h);
default:
return juxt__13853.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13853.cljs$lang$applyTo;
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
var dorun__13933 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13938 = cljs.core.next.call(null,coll);
coll = G__13938;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13934 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13928 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13928))
{return (n > 0);
} else
{return and__3546__auto____13928;
}
})()))
{{
var G__13941 = (n - 1);
var G__13942 = cljs.core.next.call(null,coll);
n = G__13941;
coll = G__13942;
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
return dorun__13933.call(this,n);
case  2 :
return dorun__13934.call(this,n,coll);
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
var doall__13943 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13944 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13943.call(this,n);
case  2 :
return doall__13944.call(this,n,coll);
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
var matches__13946 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13946),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13946),1)))
{return cljs.core.first.call(null,matches__13946);
} else
{return cljs.core.vec.call(null,matches__13946);
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
var matches__14021 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14021)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14021),1)))
{return cljs.core.first.call(null,matches__14021);
} else
{return cljs.core.vec.call(null,matches__14021);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14045 = cljs.core.re_find.call(null,re,s);
var match_idx__14046 = s.search(re);
var match_str__14047 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14045))?cljs.core.first.call(null,match_data__14045):match_data__14045);
var post_match__14048 = cljs.core.subs.call(null,s,(match_idx__14046 + cljs.core.count.call(null,match_str__14047)));

if(cljs.core.truth_(match_data__14045))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14045,re_seq.call(null,re,post_match__14048));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14070_SHARP_){
return print_one.call(null,p1__14070_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14190 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14190))
{var and__3546__auto____14200 = (function (){var x__445__auto____14193 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14194 = x__445__auto____14193;

if(cljs.core.truth_(and__3546__auto____14194))
{var and__3546__auto____14196 = x__445__auto____14193.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14196))
{return cljs.core.not.call(null,x__445__auto____14193.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14196;
}
} else
{return and__3546__auto____14194;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14193);
}
})();

if(cljs.core.truth_(and__3546__auto____14200))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14200;
}
} else
{return and__3546__auto____14190;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14204 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14207 = x__445__auto____14204;

if(cljs.core.truth_(and__3546__auto____14207))
{var and__3546__auto____14208 = x__445__auto____14204.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14208))
{return cljs.core.not.call(null,x__445__auto____14204.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14208;
}
} else
{return and__3546__auto____14207;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14204);
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
var first_obj__14227 = cljs.core.first.call(null,objs);
var sb__14228 = (new goog.string.StringBuffer());

var G__14229__14230 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14229__14230))
{var obj__14231 = cljs.core.first.call(null,G__14229__14230);
var G__14229__14232 = G__14229__14230;

while(true){
if(cljs.core.truth_((obj__14231 === first_obj__14227)))
{} else
{sb__14228.append(" ");
}
var G__14235__14238 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14231,opts));

if(cljs.core.truth_(G__14235__14238))
{var string__14240 = cljs.core.first.call(null,G__14235__14238);
var G__14235__14241 = G__14235__14238;

while(true){
sb__14228.append(string__14240);
var temp__3698__auto____14242 = cljs.core.next.call(null,G__14235__14241);

if(cljs.core.truth_(temp__3698__auto____14242))
{var G__14235__14243 = temp__3698__auto____14242;

{
var G__14260 = cljs.core.first.call(null,G__14235__14243);
var G__14261 = G__14235__14243;
string__14240 = G__14260;
G__14235__14241 = G__14261;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14249 = cljs.core.next.call(null,G__14229__14232);

if(cljs.core.truth_(temp__3698__auto____14249))
{var G__14229__14252 = temp__3698__auto____14249;

{
var G__14263 = cljs.core.first.call(null,G__14229__14252);
var G__14264 = G__14229__14252;
obj__14231 = G__14263;
G__14229__14232 = G__14264;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14228);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14265 = cljs.core.first.call(null,objs);

var G__14266__14267 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14266__14267))
{var obj__14270 = cljs.core.first.call(null,G__14266__14267);
var G__14266__14271 = G__14266__14267;

while(true){
if(cljs.core.truth_((obj__14270 === first_obj__14265)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14272__14273 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14270,opts));

if(cljs.core.truth_(G__14272__14273))
{var string__14274 = cljs.core.first.call(null,G__14272__14273);
var G__14272__14275 = G__14272__14273;

while(true){
cljs.core.string_print.call(null,string__14274);
var temp__3698__auto____14276 = cljs.core.next.call(null,G__14272__14275);

if(cljs.core.truth_(temp__3698__auto____14276))
{var G__14272__14277 = temp__3698__auto____14276;

{
var G__14290 = cljs.core.first.call(null,G__14272__14277);
var G__14291 = G__14272__14277;
string__14274 = G__14290;
G__14272__14275 = G__14291;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14281 = cljs.core.next.call(null,G__14266__14271);

if(cljs.core.truth_(temp__3698__auto____14281))
{var G__14266__14283 = temp__3698__auto____14281;

{
var G__14295 = cljs.core.first.call(null,G__14266__14283);
var G__14296 = G__14266__14283;
obj__14270 = G__14295;
G__14266__14271 = G__14296;
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
pr_str.cljs$lang$applyTo = (function (arglist__14308){
var objs = cljs.core.seq( arglist__14308 );;
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
pr.cljs$lang$applyTo = (function (arglist__14321){
var objs = cljs.core.seq( arglist__14321 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14327){
var objs = cljs.core.seq( arglist__14327 );;
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
println.cljs$lang$applyTo = (function (arglist__14339){
var objs = cljs.core.seq( arglist__14339 );;
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
prn.cljs$lang$applyTo = (function (arglist__14351){
var objs = cljs.core.seq( arglist__14351 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14358 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14358,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14366 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14366))
{var nspc__14367 = temp__3698__auto____14366;

return cljs.core.str.call(null,nspc__14367,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14374 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14374))
{var nspc__14380 = temp__3698__auto____14374;

return cljs.core.str.call(null,nspc__14380,"/");
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
var pr_pair__14395 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14395,"{",", ","}",opts,coll);
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
var this__14477 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14482 = this;
var G__14485__14487 = cljs.core.seq.call(null,this__14482.watches);

if(cljs.core.truth_(G__14485__14487))
{var G__14491__14496 = cljs.core.first.call(null,G__14485__14487);
var vec__14494__14497 = G__14491__14496;
var key__14498 = cljs.core.nth.call(null,vec__14494__14497,0,null);
var f__14499 = cljs.core.nth.call(null,vec__14494__14497,1,null);
var G__14485__14501 = G__14485__14487;

var G__14491__14502 = G__14491__14496;
var G__14485__14503 = G__14485__14501;

while(true){
var vec__14504__14505 = G__14491__14502;
var key__14506 = cljs.core.nth.call(null,vec__14504__14505,0,null);
var f__14507 = cljs.core.nth.call(null,vec__14504__14505,1,null);
var G__14485__14508 = G__14485__14503;

f__14507.call(null,key__14506,this$,oldval,newval);
var temp__3698__auto____14537 = cljs.core.next.call(null,G__14485__14508);

if(cljs.core.truth_(temp__3698__auto____14537))
{var G__14485__14538 = temp__3698__auto____14537;

{
var G__14553 = cljs.core.first.call(null,G__14485__14538);
var G__14554 = G__14485__14538;
G__14491__14502 = G__14553;
G__14485__14503 = G__14554;
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
var this__14541 = this;
return this$.watches = cljs.core.assoc.call(null,this__14541.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14542 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14542.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14543 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14543.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14547 = this;
return this__14547.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14550 = this;
return this__14550.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14551 = this;
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
var atom__14565 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14566 = (function() { 
var G__14570__delegate = function (x,p__14557){
var map__14558__14559 = p__14557;
var map__14558__14560 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14558__14559))?cljs.core.apply.call(null,cljs.core.hash_map,map__14558__14559):map__14558__14559);
var validator__14562 = cljs.core.get.call(null,map__14558__14560,"﷐'validator");
var meta__14563 = cljs.core.get.call(null,map__14558__14560,"﷐'meta");

return (new cljs.core.Atom(x,meta__14563,validator__14562,null));
};
var G__14570 = function (x,var_args){
var p__14557 = null;
if (goog.isDef(var_args)) {
  p__14557 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14570__delegate.call(this, x, p__14557);
};
G__14570.cljs$lang$maxFixedArity = 1;
G__14570.cljs$lang$applyTo = (function (arglist__14572){
var x = cljs.core.first(arglist__14572);
var p__14557 = cljs.core.rest(arglist__14572);
return G__14570__delegate.call(this, x, p__14557);
});
return G__14570;
})()
;
atom = function(x,var_args){
var p__14557 = var_args;
switch(arguments.length){
case  1 :
return atom__14565.call(this,x);
default:
return atom__14566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14566.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14577 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14577))
{var validate__14578 = temp__3698__auto____14577;

if(cljs.core.truth_(validate__14578.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14581 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14581,new_value);
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
var swap_BANG___14595 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14596 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14597 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14598 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14599 = (function() { 
var G__14607__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14607 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14607__delegate.call(this, a, f, x, y, z, more);
};
G__14607.cljs$lang$maxFixedArity = 5;
G__14607.cljs$lang$applyTo = (function (arglist__14610){
var a = cljs.core.first(arglist__14610);
var f = cljs.core.first(cljs.core.next(arglist__14610));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14610)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14610))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14610)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14610)))));
return G__14607__delegate.call(this, a, f, x, y, z, more);
});
return G__14607;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14595.call(this,a,f);
case  3 :
return swap_BANG___14596.call(this,a,f,x);
case  4 :
return swap_BANG___14597.call(this,a,f,x,y);
case  5 :
return swap_BANG___14598.call(this,a,f,x,y,z);
default:
return swap_BANG___14599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14599.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14632){
var iref = cljs.core.first(arglist__14632);
var f = cljs.core.first(cljs.core.next(arglist__14632));
var args = cljs.core.rest(cljs.core.next(arglist__14632));
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
var gensym__14673 = (function (){
return gensym.call(null,"G__");
});
var gensym__14674 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14673.call(this);
case  1 :
return gensym__14674.call(this,prefix_string);
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
var this__14682 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14682.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14687 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14687.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14687.state,this__14687.f);
}
return cljs.core.deref.call(null,this__14687.state);
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
delay.cljs$lang$applyTo = (function (arglist__14717){
var body = cljs.core.seq( arglist__14717 );;
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
var map__14771__14773 = options;
var map__14771__14774 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14771__14773))?cljs.core.apply.call(null,cljs.core.hash_map,map__14771__14773):map__14771__14773);
var keywordize_keys__14777 = cljs.core.get.call(null,map__14771__14774,"﷐'keywordize-keys");
var keyfn__14778 = (cljs.core.truth_(keywordize_keys__14777)?cljs.core.keyword:cljs.core.str);
var f__14789 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14786 = (function iter__14781(s__14782){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14782__14783 = s__14782;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14782__14783)))
{var k__14784 = cljs.core.first.call(null,s__14782__14783);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14778.call(null,k__14784),thisfn.call(null,(x[k__14784]))]),iter__14781.call(null,cljs.core.rest.call(null,s__14782__14783)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14786.call(null,cljs.core.js_keys.call(null,x));
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

return f__14789.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14807){
var x = cljs.core.first(arglist__14807);
var options = cljs.core.rest(arglist__14807);
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
var mem__14810 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14819__delegate = function (args){
var temp__3695__auto____14812 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14810),args);

if(cljs.core.truth_(temp__3695__auto____14812))
{var v__14814 = temp__3695__auto____14812;

return v__14814;
} else
{var ret__14818 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14810,cljs.core.assoc,args,ret__14818);
return ret__14818;
}
};
var G__14819 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14819__delegate.call(this, args);
};
G__14819.cljs$lang$maxFixedArity = 0;
G__14819.cljs$lang$applyTo = (function (arglist__14821){
var args = cljs.core.seq( arglist__14821 );;
return G__14819__delegate.call(this, args);
});
return G__14819;
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
var trampoline__14840 = (function (f){
while(true){
var ret__14826 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14826)))
{{
var G__14847 = ret__14826;
f = G__14847;
continue;
}
} else
{return ret__14826;
}
break;
}
});
var trampoline__14841 = (function() { 
var G__14848__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14848 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14848__delegate.call(this, f, args);
};
G__14848.cljs$lang$maxFixedArity = 1;
G__14848.cljs$lang$applyTo = (function (arglist__14851){
var f = cljs.core.first(arglist__14851);
var args = cljs.core.rest(arglist__14851);
return G__14848__delegate.call(this, f, args);
});
return G__14848;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14840.call(this,f);
default:
return trampoline__14841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14841.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14854 = (function (){
return rand.call(null,1);
});
var rand__14856 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14854.call(this);
case  1 :
return rand__14856.call(this,n);
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
var k__14862 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14862,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14862,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14885 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14886 = (function (h,child,parent){
var or__3548__auto____14874 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14874))
{return or__3548__auto____14874;
} else
{var or__3548__auto____14875 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14875))
{return or__3548__auto____14875;
} else
{var and__3546__auto____14877 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14877))
{var and__3546__auto____14879 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14879))
{var and__3546__auto____14880 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14880))
{var ret__14881 = true;
var i__14882 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14884 = cljs.core.not.call(null,ret__14881);

if(cljs.core.truth_(or__3548__auto____14884))
{return or__3548__auto____14884;
} else
{return cljs.core._EQ_.call(null,i__14882,cljs.core.count.call(null,parent));
}
})()))
{return ret__14881;
} else
{{
var G__14897 = isa_QMARK_.call(null,h,child.call(null,i__14882),parent.call(null,i__14882));
var G__14898 = (i__14882 + 1);
ret__14881 = G__14897;
i__14882 = G__14898;
continue;
}
}
break;
}
} else
{return and__3546__auto____14880;
}
} else
{return and__3546__auto____14879;
}
} else
{return and__3546__auto____14877;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14885.call(this,h,child);
case  3 :
return isa_QMARK___14886.call(this,h,child,parent);
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
var parents__14908 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14909 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14908.call(this,h);
case  2 :
return parents__14909.call(this,h,tag);
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
var ancestors__14936 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14937 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14936.call(this,h);
case  2 :
return ancestors__14937.call(this,h,tag);
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
var descendants__14943 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14944 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14943.call(this,h);
case  2 :
return descendants__14944.call(this,h,tag);
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
var derive__14968 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14969 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14952 = "﷐'parents".call(null,h);
var td__14953 = "﷐'descendants".call(null,h);
var ta__14954 = "﷐'ancestors".call(null,h);
var tf__14960 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14963 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14952.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14954.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14954.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14952,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14960.call(null,"﷐'ancestors".call(null,h),tag,td__14953,parent,ta__14954),"﷐'descendants":tf__14960.call(null,"﷐'descendants".call(null,h),parent,ta__14954,tag,td__14953)});
})());

if(cljs.core.truth_(or__3548__auto____14963))
{return or__3548__auto____14963;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14968.call(this,h,tag);
case  3 :
return derive__14969.call(this,h,tag,parent);
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
var underive__14992 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14993 = (function (h,tag,parent){
var parentMap__14974 = "﷐'parents".call(null,h);
var childsParents__14976 = (cljs.core.truth_(parentMap__14974.call(null,tag))?cljs.core.disj.call(null,parentMap__14974.call(null,tag),parent):cljs.core.set([]));
var newParents__14983 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14976))?cljs.core.assoc.call(null,parentMap__14974,tag,childsParents__14976):cljs.core.dissoc.call(null,parentMap__14974,tag));
var deriv_seq__14987 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14946_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14946_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14946_SHARP_),cljs.core.second.call(null,p1__14946_SHARP_)));
}),cljs.core.seq.call(null,newParents__14983)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14974.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14947_SHARP_,p2__14948_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14947_SHARP_,p2__14948_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14987));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14992.call(this,h,tag);
case  3 :
return underive__14993.call(this,h,tag,parent);
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
var xprefs__15044 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15050 = (cljs.core.truth_((function (){var and__3546__auto____15046 = xprefs__15044;

if(cljs.core.truth_(and__3546__auto____15046))
{return xprefs__15044.call(null,y);
} else
{return and__3546__auto____15046;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15050))
{return or__3548__auto____15050;
} else
{var or__3548__auto____15053 = (function (){var ps__15051 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15051) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15051),prefer_table)))
{} else
{}
{
var G__15063 = cljs.core.rest.call(null,ps__15051);
ps__15051 = G__15063;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15053))
{return or__3548__auto____15053;
} else
{var or__3548__auto____15061 = (function (){var ps__15056 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15056) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15056),y,prefer_table)))
{} else
{}
{
var G__15065 = cljs.core.rest.call(null,ps__15056);
ps__15056 = G__15065;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15061))
{return or__3548__auto____15061;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15070 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15070))
{return or__3548__auto____15070;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15091 = cljs.core.reduce.call(null,(function (be,p__15077){
var vec__15078__15079 = p__15077;
var k__15080 = cljs.core.nth.call(null,vec__15078__15079,0,null);
var ___15084 = cljs.core.nth.call(null,vec__15078__15079,1,null);
var e__15087 = vec__15078__15079;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15080)))
{var be2__15090 = (cljs.core.truth_((function (){var or__3548__auto____15089 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15089))
{return or__3548__auto____15089;
} else
{return cljs.core.dominates.call(null,k__15080,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15087:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15090),k__15080,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15080," and ",cljs.core.first.call(null,be2__15090),", and neither is preferred")));
}
return be2__15090;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15091))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15091));
return cljs.core.second.call(null,best_entry__15091);
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
if(cljs.core.truth_((function (){var and__3546__auto____15097 = mf;

if(cljs.core.truth_(and__3546__auto____15097))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15097;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15098 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15098))
{return or__3548__auto____15098;
} else
{var or__3548__auto____15099 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15099))
{return or__3548__auto____15099;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15101 = mf;

if(cljs.core.truth_(and__3546__auto____15101))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15101;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15102 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15102))
{return or__3548__auto____15102;
} else
{var or__3548__auto____15103 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15103))
{return or__3548__auto____15103;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15134 = mf;

if(cljs.core.truth_(and__3546__auto____15134))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15134;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15138 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15138))
{return or__3548__auto____15138;
} else
{var or__3548__auto____15140 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15140))
{return or__3548__auto____15140;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15143 = mf;

if(cljs.core.truth_(and__3546__auto____15143))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15143;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15145 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15145))
{return or__3548__auto____15145;
} else
{var or__3548__auto____15146 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15146))
{return or__3548__auto____15146;
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
{return (function (){var or__3548__auto____15157 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15157))
{return or__3548__auto____15157;
} else
{var or__3548__auto____15158 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15158))
{return or__3548__auto____15158;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15162 = mf;

if(cljs.core.truth_(and__3546__auto____15162))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15162;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15164 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15164))
{return or__3548__auto____15164;
} else
{var or__3548__auto____15165 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15165))
{return or__3548__auto____15165;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15169 = mf;

if(cljs.core.truth_(and__3546__auto____15169))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15169;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15170 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15170))
{return or__3548__auto____15170;
} else
{var or__3548__auto____15171 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15171))
{return or__3548__auto____15171;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15175 = mf;

if(cljs.core.truth_(and__3546__auto____15175))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15175;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15176 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15176))
{return or__3548__auto____15176;
} else
{var or__3548__auto____15177 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15177))
{return or__3548__auto____15177;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15204 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15205 = cljs.core._get_method.call(null,mf,dispatch_val__15204);

if(cljs.core.truth_(target_fn__15205))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15204)));
}
return cljs.core.apply.call(null,target_fn__15205,args);
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
var this__15259 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15261 = this;
cljs.core.swap_BANG_.call(null,this__15261.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15261.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15261.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15261.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15263 = this;
cljs.core.swap_BANG_.call(null,this__15263.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15263.method_cache,this__15263.method_table,this__15263.cached_hierarchy,this__15263.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15265 = this;
cljs.core.swap_BANG_.call(null,this__15265.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15265.method_cache,this__15265.method_table,this__15265.cached_hierarchy,this__15265.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15266 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15266.cached_hierarchy),cljs.core.deref.call(null,this__15266.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15266.method_cache,this__15266.method_table,this__15266.cached_hierarchy,this__15266.hierarchy);
}
var temp__3695__auto____15270 = cljs.core.deref.call(null,this__15266.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15270))
{var target_fn__15272 = temp__3695__auto____15270;

return target_fn__15272;
} else
{var temp__3695__auto____15275 = cljs.core.find_and_cache_best_method.call(null,this__15266.name,dispatch_val,this__15266.hierarchy,this__15266.method_table,this__15266.prefer_table,this__15266.method_cache,this__15266.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15275))
{var target_fn__15278 = temp__3695__auto____15275;

return target_fn__15278;
} else
{return cljs.core.deref.call(null,this__15266.method_table).call(null,this__15266.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15281 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15281.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15281.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15281.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15281.method_cache,this__15281.method_table,this__15281.cached_hierarchy,this__15281.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15288 = this;
return cljs.core.deref.call(null,this__15288.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15289 = this;
return cljs.core.deref.call(null,this__15289.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15290 = this;
return cljs.core.do_dispatch.call(null,mf,this__15290.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15313__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15313 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15313__delegate.call(this, _, args);
};
G__15313.cljs$lang$maxFixedArity = 1;
G__15313.cljs$lang$applyTo = (function (arglist__15315){
var _ = cljs.core.first(arglist__15315);
var args = cljs.core.rest(arglist__15315);
return G__15313__delegate.call(this, _, args);
});
return G__15313;
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
