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
var or__3548__auto____7254 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7254))
{return or__3548__auto____7254;
} else
{var or__3548__auto____7255 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
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
var _invoke__7552 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7259 = this$;

if(cljs.core.truth_(and__3546__auto____7259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7262 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
} else
{var or__3548__auto____7264 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7553 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7267 = this$;

if(cljs.core.truth_(and__3546__auto____7267))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7267;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7271 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7271))
{return or__3548__auto____7271;
} else
{var or__3548__auto____7273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7554 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7277 = this$;

if(cljs.core.truth_(and__3546__auto____7277))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7277;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7281 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{var or__3548__auto____7283 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7283))
{return or__3548__auto____7283;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7555 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7287 = this$;

if(cljs.core.truth_(and__3546__auto____7287))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7287;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7290 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7290))
{return or__3548__auto____7290;
} else
{var or__3548__auto____7293 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7556 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7296 = this$;

if(cljs.core.truth_(and__3546__auto____7296))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7296;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7300 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{var or__3548__auto____7302 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7302))
{return or__3548__auto____7302;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7337 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{var or__3548__auto____7338 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7341 = this$;

if(cljs.core.truth_(and__3546__auto____7341))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7341;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7345 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7345))
{return or__3548__auto____7345;
} else
{var or__3548__auto____7347 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7347))
{return or__3548__auto____7347;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7559 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7350 = this$;

if(cljs.core.truth_(and__3546__auto____7350))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7350;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7359 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7359))
{return or__3548__auto____7359;
} else
{var or__3548__auto____7361 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7361))
{return or__3548__auto____7361;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7560 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{var or__3548__auto____7374 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7378 = this$;

if(cljs.core.truth_(and__3546__auto____7378))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7378;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{var or__3548__auto____7385 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7562 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7388 = this$;

if(cljs.core.truth_(and__3546__auto____7388))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7388;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7391 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{var or__3548__auto____7393 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7563 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7396 = this$;

if(cljs.core.truth_(and__3546__auto____7396))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7396;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7426 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7426))
{return or__3548__auto____7426;
} else
{var or__3548__auto____7429 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7564 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7437 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7437))
{return or__3548__auto____7437;
} else
{var or__3548__auto____7441 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7441))
{return or__3548__auto____7441;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7565 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7511 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7511))
{return or__3548__auto____7511;
} else
{var or__3548__auto____7512 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7512))
{return or__3548__auto____7512;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7566 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7514 = this$;

if(cljs.core.truth_(and__3546__auto____7514))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7514;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7516 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{var or__3548__auto____7517 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7567 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7520 = this$;

if(cljs.core.truth_(and__3546__auto____7520))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7520;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7522 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7522))
{return or__3548__auto____7522;
} else
{var or__3548__auto____7524 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7568 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
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
{var or__3548__auto____7529 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7529))
{return or__3548__auto____7529;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7569 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7531 = this$;

if(cljs.core.truth_(and__3546__auto____7531))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7531;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7533 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7533))
{return or__3548__auto____7533;
} else
{var or__3548__auto____7535 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7535))
{return or__3548__auto____7535;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7570 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7537 = this$;

if(cljs.core.truth_(and__3546__auto____7537))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7537;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7539 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{var or__3548__auto____7541 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7571 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7543 = this$;

if(cljs.core.truth_(and__3546__auto____7543))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7543;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7545 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{var or__3548__auto____7547 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7547))
{return or__3548__auto____7547;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7572 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7549 = this$;

if(cljs.core.truth_(and__3546__auto____7549))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7549;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7550 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7550))
{return or__3548__auto____7550;
} else
{var or__3548__auto____7551 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7551))
{return or__3548__auto____7551;
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
return _invoke__7552.call(this,this$);
case  2 :
return _invoke__7553.call(this,this$,a);
case  3 :
return _invoke__7554.call(this,this$,a,b);
case  4 :
return _invoke__7555.call(this,this$,a,b,c);
case  5 :
return _invoke__7556.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7557.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7559.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7560.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7562.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7563.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7564.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7565.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7566.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7567.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7568.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7569.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7570.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7571.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7572.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
{return (function (){var or__3548__auto____7667 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7667))
{return or__3548__auto____7667;
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
if(cljs.core.truth_((function (){var and__3546__auto____7674 = coll;

if(cljs.core.truth_(and__3546__auto____7674))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7674;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7734 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{var or__3548__auto____7735 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7742 = coll;

if(cljs.core.truth_(and__3546__auto____7742))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7742;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7745 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
} else
{var or__3548__auto____7746 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
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
var _nth__7764 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7754 = coll;

if(cljs.core.truth_(and__3546__auto____7754))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7754;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7755 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{var or__3548__auto____7757 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7765 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7759 = coll;

if(cljs.core.truth_(and__3546__auto____7759))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7759;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7760 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{var or__3548__auto____7762 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7762))
{return or__3548__auto____7762;
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
return _nth__7764.call(this,coll,n);
case  3 :
return _nth__7765.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7775 = coll;

if(cljs.core.truth_(and__3546__auto____7775))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7775;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7778 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{var or__3548__auto____7779 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7783 = coll;

if(cljs.core.truth_(and__3546__auto____7783))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7783;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7786 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
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
var _lookup__7890 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7798 = o;

if(cljs.core.truth_(and__3546__auto____7798))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7798;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7800 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
} else
{var or__3548__auto____7802 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7802))
{return or__3548__auto____7802;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7891 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = o;

if(cljs.core.truth_(and__3546__auto____7804))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7804;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7885 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7885))
{return or__3548__auto____7885;
} else
{var or__3548__auto____7887 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7887))
{return or__3548__auto____7887;
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
return _lookup__7890.call(this,o,k);
case  3 :
return _lookup__7891.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7903 = coll;

if(cljs.core.truth_(and__3546__auto____7903))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7903;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7907 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7907))
{return or__3548__auto____7907;
} else
{var or__3548__auto____7909 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7919 = coll;

if(cljs.core.truth_(and__3546__auto____7919))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7919;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7921 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{var or__3548__auto____7993 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7993))
{return or__3548__auto____7993;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7997 = coll;

if(cljs.core.truth_(and__3546__auto____7997))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7997;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7998 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{var or__3548__auto____7999 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7999))
{return or__3548__auto____7999;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8003 = coll;

if(cljs.core.truth_(and__3546__auto____8003))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8003;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8004 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8004))
{return or__3548__auto____8004;
} else
{var or__3548__auto____8005 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8008 = coll;

if(cljs.core.truth_(and__3546__auto____8008))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8008;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8010 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8010))
{return or__3548__auto____8010;
} else
{var or__3548__auto____8013 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8016 = coll;

if(cljs.core.truth_(and__3546__auto____8016))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8016;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8017 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8017))
{return or__3548__auto____8017;
} else
{var or__3548__auto____8018 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8018))
{return or__3548__auto____8018;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8022 = coll;

if(cljs.core.truth_(and__3546__auto____8022))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8022;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8024 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
} else
{var or__3548__auto____8026 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8031 = o;

if(cljs.core.truth_(and__3546__auto____8031))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8031;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8032 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{var or__3548__auto____8033 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8072 = o;

if(cljs.core.truth_(and__3546__auto____8072))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8072;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8074 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8074))
{return or__3548__auto____8074;
} else
{var or__3548__auto____8075 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8082 = o;

if(cljs.core.truth_(and__3546__auto____8082))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8082;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8086 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8095 = o;

if(cljs.core.truth_(and__3546__auto____8095))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8095;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8098 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{var or__3548__auto____8099 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
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
var _reduce__8119 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8104 = coll;

if(cljs.core.truth_(and__3546__auto____8104))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8104;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8106 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8106))
{return or__3548__auto____8106;
} else
{var or__3548__auto____8108 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8108))
{return or__3548__auto____8108;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8120 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8112 = coll;

if(cljs.core.truth_(and__3546__auto____8112))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8112;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8115 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{var or__3548__auto____8116 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8116))
{return or__3548__auto____8116;
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
return _reduce__8119.call(this,coll,f);
case  3 :
return _reduce__8120.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = o;

if(cljs.core.truth_(and__3546__auto____8141))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8141;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8145 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8145))
{return or__3548__auto____8145;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8158 = o;

if(cljs.core.truth_(and__3546__auto____8158))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8158;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8186 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8186))
{return or__3548__auto____8186;
} else
{var or__3548__auto____8188 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8188))
{return or__3548__auto____8188;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8199 = o;

if(cljs.core.truth_(and__3546__auto____8199))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8199;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8200 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8200))
{return or__3548__auto____8200;
} else
{var or__3548__auto____8201 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8201))
{return or__3548__auto____8201;
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
if(cljs.core.truth_((function (){var and__3546__auto____8239 = o;

if(cljs.core.truth_(and__3546__auto____8239))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8239;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8243 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8243))
{return or__3548__auto____8243;
} else
{var or__3548__auto____8244 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8244))
{return or__3548__auto____8244;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8252 = d;

if(cljs.core.truth_(and__3546__auto____8252))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8252;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8253 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8253))
{return or__3548__auto____8253;
} else
{var or__3548__auto____8254 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8254))
{return or__3548__auto____8254;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8264 = this$;

if(cljs.core.truth_(and__3546__auto____8264))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8264;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8269 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8269))
{return or__3548__auto____8269;
} else
{var or__3548__auto____8270 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8270))
{return or__3548__auto____8270;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8272 = this$;

if(cljs.core.truth_(and__3546__auto____8272))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8272;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8274 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8274))
{return or__3548__auto____8274;
} else
{var or__3548__auto____8275 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8275))
{return or__3548__auto____8275;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8279 = this$;

if(cljs.core.truth_(and__3546__auto____8279))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8279;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8283 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8283))
{return or__3548__auto____8283;
} else
{var or__3548__auto____8284 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8284))
{return or__3548__auto____8284;
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
var G__8354 = null;
var G__8354__8355 = (function (o,k){
return null;
});
var G__8354__8356 = (function (o,k,not_found){
return not_found;
});
G__8354 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8354__8355.call(this,o,k);
case  3 :
return G__8354__8356.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8354;
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
var G__8367 = null;
var G__8367__8368 = (function (_,f){
return f.call(null);
});
var G__8367__8369 = (function (_,f,start){
return start;
});
G__8367 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8367__8368.call(this,_,f);
case  3 :
return G__8367__8369.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8367;
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
var G__8379 = null;
var G__8379__8380 = (function (_,n){
return null;
});
var G__8379__8381 = (function (_,n,not_found){
return not_found;
});
G__8379 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8379__8380.call(this,_,n);
case  3 :
return G__8379__8381.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8379;
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
var ci_reduce__8424 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8410 = cljs.core._nth.call(null,cicoll,0);
var n__8411 = 1;

while(true){
if(cljs.core.truth_((n__8411 < cljs.core._count.call(null,cicoll))))
{{
var G__8428 = f.call(null,val__8410,cljs.core._nth.call(null,cicoll,n__8411));
var G__8429 = (n__8411 + 1);
val__8410 = G__8428;
n__8411 = G__8429;
continue;
}
} else
{return val__8410;
}
break;
}
}
});
var ci_reduce__8425 = (function (cicoll,f,val){
var val__8415 = val;
var n__8417 = 0;

while(true){
if(cljs.core.truth_((n__8417 < cljs.core._count.call(null,cicoll))))
{{
var G__8432 = f.call(null,val__8415,cljs.core._nth.call(null,cicoll,n__8417));
var G__8433 = (n__8417 + 1);
val__8415 = G__8432;
n__8417 = G__8433;
continue;
}
} else
{return val__8415;
}
break;
}
});
var ci_reduce__8426 = (function (cicoll,f,val,idx){
var val__8421 = val;
var n__8423 = idx;

while(true){
if(cljs.core.truth_((n__8423 < cljs.core._count.call(null,cicoll))))
{{
var G__8435 = f.call(null,val__8421,cljs.core._nth.call(null,cicoll,n__8423));
var G__8436 = (n__8423 + 1);
val__8421 = G__8435;
n__8423 = G__8436;
continue;
}
} else
{return val__8421;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8424.call(this,cicoll,f);
case  3 :
return ci_reduce__8425.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8426.call(this,cicoll,f,val,idx);
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
var this__8440 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8510 = null;
var G__8510__8512 = (function (_,f){
var this__8441 = this;
return cljs.core.ci_reduce.call(null,this__8441.a,f,(this__8441.a[this__8441.i]),(this__8441.i + 1));
});
var G__8510__8513 = (function (_,f,start){
var this__8442 = this;
return cljs.core.ci_reduce.call(null,this__8442.a,f,start,this__8442.i);
});
G__8510 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8510__8512.call(this,_,f);
case  3 :
return G__8510__8513.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8510;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8445 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8447 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8519 = null;
var G__8519__8520 = (function (coll,n){
var this__8448 = this;
var i__8449 = (n + this__8448.i);

if(cljs.core.truth_((i__8449 < this__8448.a.length)))
{return (this__8448.a[i__8449]);
} else
{return null;
}
});
var G__8519__8521 = (function (coll,n,not_found){
var this__8450 = this;
var i__8451 = (n + this__8450.i);

if(cljs.core.truth_((i__8451 < this__8450.a.length)))
{return (this__8450.a[i__8451]);
} else
{return not_found;
}
});
G__8519 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8519__8520.call(this,coll,n);
case  3 :
return G__8519__8521.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8519;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8454 = this;
return (this__8454.a.length - this__8454.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8501 = this;
return (this__8501.a[this__8501.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8503 = this;
if(cljs.core.truth_(((this__8503.i + 1) < this__8503.a.length)))
{return (new cljs.core.IndexedSeq(this__8503.a,(this__8503.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8506 = this;
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
var G__8523 = null;
var G__8523__8525 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8523__8528 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8523 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8523__8525.call(this,array,f);
case  3 :
return G__8523__8528.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8523;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8531 = null;
var G__8531__8534 = (function (array,k){
return (array[k]);
});
var G__8531__8535 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8531 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8531__8534.call(this,array,k);
case  3 :
return G__8531__8535.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8531;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8540 = null;
var G__8540__8541 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8540__8543 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8540 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8540__8541.call(this,array,n);
case  3 :
return G__8540__8543.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8540;
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
var temp__3698__auto____8547 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8547))
{var s__8549 = temp__3698__auto____8547;

return cljs.core._first.call(null,s__8549);
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
var G__8574 = cljs.core.next.call(null,s);
s = G__8574;
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
var s__8575 = cljs.core.seq.call(null,x);
var n__8577 = 0;

while(true){
if(cljs.core.truth_(s__8575))
{{
var G__8581 = cljs.core.next.call(null,s__8575);
var G__8582 = (n__8577 + 1);
s__8575 = G__8581;
n__8577 = G__8582;
continue;
}
} else
{return n__8577;
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
var conj__8590 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8591 = (function() { 
var G__8594__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8597 = conj.call(null,coll,x);
var G__8598 = cljs.core.first.call(null,xs);
var G__8599 = cljs.core.next.call(null,xs);
coll = G__8597;
x = G__8598;
xs = G__8599;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8594 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8594__delegate.call(this, coll, x, xs);
};
G__8594.cljs$lang$maxFixedArity = 2;
G__8594.cljs$lang$applyTo = (function (arglist__8605){
var coll = cljs.core.first(arglist__8605);
var x = cljs.core.first(cljs.core.next(arglist__8605));
var xs = cljs.core.rest(cljs.core.next(arglist__8605));
return G__8594__delegate.call(this, coll, x, xs);
});
return G__8594;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8590.call(this,coll,x);
default:
return conj__8591.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8591.cljs$lang$applyTo;
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
var nth__8616 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8617 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8616.call(this,coll,n);
case  3 :
return nth__8617.call(this,coll,n,not_found);
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
var get__8642 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8643 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8642.call(this,o,k);
case  3 :
return get__8643.call(this,o,k,not_found);
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
var assoc__8652 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8653 = (function() { 
var G__8655__delegate = function (coll,k,v,kvs){
while(true){
var ret__8649 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8656 = ret__8649;
var G__8657 = cljs.core.first.call(null,kvs);
var G__8658 = cljs.core.second.call(null,kvs);
var G__8660 = cljs.core.nnext.call(null,kvs);
coll = G__8656;
k = G__8657;
v = G__8658;
kvs = G__8660;
continue;
}
} else
{return ret__8649;
}
break;
}
};
var G__8655 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8655__delegate.call(this, coll, k, v, kvs);
};
G__8655.cljs$lang$maxFixedArity = 3;
G__8655.cljs$lang$applyTo = (function (arglist__8664){
var coll = cljs.core.first(arglist__8664);
var k = cljs.core.first(cljs.core.next(arglist__8664));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8664)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8664)));
return G__8655__delegate.call(this, coll, k, v, kvs);
});
return G__8655;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8652.call(this,coll,k,v);
default:
return assoc__8653.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8653.cljs$lang$applyTo;
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
var dissoc__8673 = (function (coll){
return coll;
});
var dissoc__8674 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8676 = (function() { 
var G__8683__delegate = function (coll,k,ks){
while(true){
var ret__8671 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8689 = ret__8671;
var G__8691 = cljs.core.first.call(null,ks);
var G__8692 = cljs.core.next.call(null,ks);
coll = G__8689;
k = G__8691;
ks = G__8692;
continue;
}
} else
{return ret__8671;
}
break;
}
};
var G__8683 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8683__delegate.call(this, coll, k, ks);
};
G__8683.cljs$lang$maxFixedArity = 2;
G__8683.cljs$lang$applyTo = (function (arglist__8698){
var coll = cljs.core.first(arglist__8698);
var k = cljs.core.first(cljs.core.next(arglist__8698));
var ks = cljs.core.rest(cljs.core.next(arglist__8698));
return G__8683__delegate.call(this, coll, k, ks);
});
return G__8683;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8673.call(this,coll);
case  2 :
return dissoc__8674.call(this,coll,k);
default:
return dissoc__8676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8676.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8704 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8705 = x__445__auto____8704;

if(cljs.core.truth_(and__3546__auto____8705))
{var and__3546__auto____8706 = x__445__auto____8704.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8706))
{return cljs.core.not.call(null,x__445__auto____8704.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8706;
}
} else
{return and__3546__auto____8705;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8704);
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
var disj__8838 = (function (coll){
return coll;
});
var disj__8839 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8840 = (function() { 
var G__8842__delegate = function (coll,k,ks){
while(true){
var ret__8834 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8843 = ret__8834;
var G__8844 = cljs.core.first.call(null,ks);
var G__8846 = cljs.core.next.call(null,ks);
coll = G__8843;
k = G__8844;
ks = G__8846;
continue;
}
} else
{return ret__8834;
}
break;
}
};
var G__8842 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8842__delegate.call(this, coll, k, ks);
};
G__8842.cljs$lang$maxFixedArity = 2;
G__8842.cljs$lang$applyTo = (function (arglist__8848){
var coll = cljs.core.first(arglist__8848);
var k = cljs.core.first(cljs.core.next(arglist__8848));
var ks = cljs.core.rest(cljs.core.next(arglist__8848));
return G__8842__delegate.call(this, coll, k, ks);
});
return G__8842;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8838.call(this,coll);
case  2 :
return disj__8839.call(this,coll,k);
default:
return disj__8840.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8840.cljs$lang$applyTo;
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
{var x__445__auto____8858 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8860 = x__445__auto____8858;

if(cljs.core.truth_(and__3546__auto____8860))
{var and__3546__auto____8862 = x__445__auto____8858.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8862))
{return cljs.core.not.call(null,x__445__auto____8858.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8862;
}
} else
{return and__3546__auto____8860;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8858);
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
{var x__445__auto____8884 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8886 = x__445__auto____8884;

if(cljs.core.truth_(and__3546__auto____8886))
{var and__3546__auto____8887 = x__445__auto____8884.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8887))
{return cljs.core.not.call(null,x__445__auto____8884.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8887;
}
} else
{return and__3546__auto____8886;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8884);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8902 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8906 = x__445__auto____8902;

if(cljs.core.truth_(and__3546__auto____8906))
{var and__3546__auto____8907 = x__445__auto____8902.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8907))
{return cljs.core.not.call(null,x__445__auto____8902.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8907;
}
} else
{return and__3546__auto____8906;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8902);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8922 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8923 = x__445__auto____8922;

if(cljs.core.truth_(and__3546__auto____8923))
{var and__3546__auto____8925 = x__445__auto____8922.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8925))
{return cljs.core.not.call(null,x__445__auto____8922.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8925;
}
} else
{return and__3546__auto____8923;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8922);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8935 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8937 = x__445__auto____8935;

if(cljs.core.truth_(and__3546__auto____8937))
{var and__3546__auto____8942 = x__445__auto____8935.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8942))
{return cljs.core.not.call(null,x__445__auto____8935.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8942;
}
} else
{return and__3546__auto____8937;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8935);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8954 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8955 = x__445__auto____8954;

if(cljs.core.truth_(and__3546__auto____8955))
{var and__3546__auto____8956 = x__445__auto____8954.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8956))
{return cljs.core.not.call(null,x__445__auto____8954.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8956;
}
} else
{return and__3546__auto____8955;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8954);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8974 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8975 = x__445__auto____8974;

if(cljs.core.truth_(and__3546__auto____8975))
{var and__3546__auto____8977 = x__445__auto____8974.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8977))
{return cljs.core.not.call(null,x__445__auto____8974.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8977;
}
} else
{return and__3546__auto____8975;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8974);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8989 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8989.push(key);
}));
return keys__8989;
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
{var x__445__auto____9015 = s;

if(cljs.core.truth_((function (){var and__3546__auto____9016 = x__445__auto____9015;

if(cljs.core.truth_(and__3546__auto____9016))
{var and__3546__auto____9018 = x__445__auto____9015.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____9018))
{return cljs.core.not.call(null,x__445__auto____9015.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____9018;
}
} else
{return and__3546__auto____9016;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____9015);
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
var and__3546__auto____9031 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9031))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9033 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9033))
{return or__3548__auto____9033;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9031;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9041 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9041))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9041;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9044 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9044))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9044;
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
var and__3546__auto____9109 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9109))
{return (n == n.toFixed());
} else
{return and__3546__auto____9109;
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
if(cljs.core.truth_((function (){var and__3546__auto____9116 = coll;

if(cljs.core.truth_(and__3546__auto____9116))
{var and__3546__auto____9117 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9117))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9117;
}
} else
{return and__3546__auto____9116;
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
var distinct_QMARK___9130 = (function (x){
return true;
});
var distinct_QMARK___9131 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9132 = (function() { 
var G__9135__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9123 = cljs.core.set([y,x]);
var xs__9126 = more;

while(true){
var x__9128 = cljs.core.first.call(null,xs__9126);
var etc__9129 = cljs.core.next.call(null,xs__9126);

if(cljs.core.truth_(xs__9126))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9123,x__9128)))
{return false;
} else
{{
var G__9140 = cljs.core.conj.call(null,s__9123,x__9128);
var G__9141 = etc__9129;
s__9123 = G__9140;
xs__9126 = G__9141;
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
var G__9135 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9135__delegate.call(this, x, y, more);
};
G__9135.cljs$lang$maxFixedArity = 2;
G__9135.cljs$lang$applyTo = (function (arglist__9145){
var x = cljs.core.first(arglist__9145);
var y = cljs.core.first(cljs.core.next(arglist__9145));
var more = cljs.core.rest(cljs.core.next(arglist__9145));
return G__9135__delegate.call(this, x, y, more);
});
return G__9135;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9130.call(this,x);
case  2 :
return distinct_QMARK___9131.call(this,x,y);
default:
return distinct_QMARK___9132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9132.cljs$lang$applyTo;
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
var r__9158 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9158)))
{return r__9158;
} else
{if(cljs.core.truth_(r__9158))
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
var sort__9161 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9162 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9160 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9160,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9160);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9161.call(this,comp);
case  2 :
return sort__9162.call(this,comp,coll);
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
var sort_by__9205 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9206 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9205.call(this,keyfn,comp);
case  3 :
return sort_by__9206.call(this,keyfn,comp,coll);
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
var reduce__9220 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9221 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9220.call(this,f,val);
case  3 :
return reduce__9221.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9235 = (function (f,coll){
var temp__3695__auto____9230 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9230))
{var s__9232 = temp__3695__auto____9230;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9232),cljs.core.next.call(null,s__9232));
} else
{return f.call(null);
}
});
var seq_reduce__9236 = (function (f,val,coll){
var val__9233 = val;
var coll__9234 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9234))
{{
var G__9238 = f.call(null,val__9233,cljs.core.first.call(null,coll__9234));
var G__9239 = cljs.core.next.call(null,coll__9234);
val__9233 = G__9238;
coll__9234 = G__9239;
continue;
}
} else
{return val__9233;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9235.call(this,f,val);
case  3 :
return seq_reduce__9236.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9248 = null;
var G__9248__9249 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9248__9251 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9248 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9248__9249.call(this,coll,f);
case  3 :
return G__9248__9251.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9248;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9261 = (function (){
return 0;
});
var _PLUS___9262 = (function (x){
return x;
});
var _PLUS___9263 = (function (x,y){
return (x + y);
});
var _PLUS___9264 = (function() { 
var G__9267__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9267 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9267__delegate.call(this, x, y, more);
};
G__9267.cljs$lang$maxFixedArity = 2;
G__9267.cljs$lang$applyTo = (function (arglist__9269){
var x = cljs.core.first(arglist__9269);
var y = cljs.core.first(cljs.core.next(arglist__9269));
var more = cljs.core.rest(cljs.core.next(arglist__9269));
return G__9267__delegate.call(this, x, y, more);
});
return G__9267;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9261.call(this);
case  1 :
return _PLUS___9262.call(this,x);
case  2 :
return _PLUS___9263.call(this,x,y);
default:
return _PLUS___9264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9264.cljs$lang$applyTo;
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
var ___9278 = (function (x){
return (- x);
});
var ___9279 = (function (x,y){
return (x - y);
});
var ___9280 = (function() { 
var G__9282__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9282__delegate.call(this, x, y, more);
};
G__9282.cljs$lang$maxFixedArity = 2;
G__9282.cljs$lang$applyTo = (function (arglist__9283){
var x = cljs.core.first(arglist__9283);
var y = cljs.core.first(cljs.core.next(arglist__9283));
var more = cljs.core.rest(cljs.core.next(arglist__9283));
return G__9282__delegate.call(this, x, y, more);
});
return G__9282;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9278.call(this,x);
case  2 :
return ___9279.call(this,x,y);
default:
return ___9280.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9280.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9293 = (function (){
return 1;
});
var _STAR___9295 = (function (x){
return x;
});
var _STAR___9296 = (function (x,y){
return (x * y);
});
var _STAR___9297 = (function() { 
var G__9300__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9300 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9300__delegate.call(this, x, y, more);
};
G__9300.cljs$lang$maxFixedArity = 2;
G__9300.cljs$lang$applyTo = (function (arglist__9301){
var x = cljs.core.first(arglist__9301);
var y = cljs.core.first(cljs.core.next(arglist__9301));
var more = cljs.core.rest(cljs.core.next(arglist__9301));
return G__9300__delegate.call(this, x, y, more);
});
return G__9300;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9293.call(this);
case  1 :
return _STAR___9295.call(this,x);
case  2 :
return _STAR___9296.call(this,x,y);
default:
return _STAR___9297.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9297.cljs$lang$applyTo;
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
var _SLASH___9305 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9306 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9307 = (function() { 
var G__9309__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9309__delegate.call(this, x, y, more);
};
G__9309.cljs$lang$maxFixedArity = 2;
G__9309.cljs$lang$applyTo = (function (arglist__9314){
var x = cljs.core.first(arglist__9314);
var y = cljs.core.first(cljs.core.next(arglist__9314));
var more = cljs.core.rest(cljs.core.next(arglist__9314));
return G__9309__delegate.call(this, x, y, more);
});
return G__9309;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9305.call(this,x);
case  2 :
return _SLASH___9306.call(this,x,y);
default:
return _SLASH___9307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9307.cljs$lang$applyTo;
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
var _LT___9320 = (function (x){
return true;
});
var _LT___9321 = (function (x,y){
return (x < y);
});
var _LT___9322 = (function() { 
var G__9324__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9325 = y;
var G__9326 = cljs.core.first.call(null,more);
var G__9327 = cljs.core.next.call(null,more);
x = G__9325;
y = G__9326;
more = G__9327;
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
var G__9324 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9324__delegate.call(this, x, y, more);
};
G__9324.cljs$lang$maxFixedArity = 2;
G__9324.cljs$lang$applyTo = (function (arglist__9331){
var x = cljs.core.first(arglist__9331);
var y = cljs.core.first(cljs.core.next(arglist__9331));
var more = cljs.core.rest(cljs.core.next(arglist__9331));
return G__9324__delegate.call(this, x, y, more);
});
return G__9324;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9320.call(this,x);
case  2 :
return _LT___9321.call(this,x,y);
default:
return _LT___9322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9322.cljs$lang$applyTo;
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
var _LT__EQ___9342 = (function (x){
return true;
});
var _LT__EQ___9343 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9344 = (function() { 
var G__9348__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9349 = y;
var G__9350 = cljs.core.first.call(null,more);
var G__9351 = cljs.core.next.call(null,more);
x = G__9349;
y = G__9350;
more = G__9351;
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
var G__9348 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9348__delegate.call(this, x, y, more);
};
G__9348.cljs$lang$maxFixedArity = 2;
G__9348.cljs$lang$applyTo = (function (arglist__9352){
var x = cljs.core.first(arglist__9352);
var y = cljs.core.first(cljs.core.next(arglist__9352));
var more = cljs.core.rest(cljs.core.next(arglist__9352));
return G__9348__delegate.call(this, x, y, more);
});
return G__9348;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9342.call(this,x);
case  2 :
return _LT__EQ___9343.call(this,x,y);
default:
return _LT__EQ___9344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9344.cljs$lang$applyTo;
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
var _GT___9360 = (function (x){
return true;
});
var _GT___9361 = (function (x,y){
return (x > y);
});
var _GT___9362 = (function() { 
var G__9364__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
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
{return (y > cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9364 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9364__delegate.call(this, x, y, more);
};
G__9364.cljs$lang$maxFixedArity = 2;
G__9364.cljs$lang$applyTo = (function (arglist__9374){
var x = cljs.core.first(arglist__9374);
var y = cljs.core.first(cljs.core.next(arglist__9374));
var more = cljs.core.rest(cljs.core.next(arglist__9374));
return G__9364__delegate.call(this, x, y, more);
});
return G__9364;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9360.call(this,x);
case  2 :
return _GT___9361.call(this,x,y);
default:
return _GT___9362.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9362.cljs$lang$applyTo;
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
var _GT__EQ___9383 = (function (x){
return true;
});
var _GT__EQ___9384 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9385 = (function() { 
var G__9388__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9392 = y;
var G__9393 = cljs.core.first.call(null,more);
var G__9394 = cljs.core.next.call(null,more);
x = G__9392;
y = G__9393;
more = G__9394;
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
var G__9388 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9388__delegate.call(this, x, y, more);
};
G__9388.cljs$lang$maxFixedArity = 2;
G__9388.cljs$lang$applyTo = (function (arglist__9397){
var x = cljs.core.first(arglist__9397);
var y = cljs.core.first(cljs.core.next(arglist__9397));
var more = cljs.core.rest(cljs.core.next(arglist__9397));
return G__9388__delegate.call(this, x, y, more);
});
return G__9388;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9383.call(this,x);
case  2 :
return _GT__EQ___9384.call(this,x,y);
default:
return _GT__EQ___9385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9385.cljs$lang$applyTo;
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
var max__9410 = (function (x){
return x;
});
var max__9412 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9414 = (function() { 
var G__9417__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9417 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9417__delegate.call(this, x, y, more);
};
G__9417.cljs$lang$maxFixedArity = 2;
G__9417.cljs$lang$applyTo = (function (arglist__9418){
var x = cljs.core.first(arglist__9418);
var y = cljs.core.first(cljs.core.next(arglist__9418));
var more = cljs.core.rest(cljs.core.next(arglist__9418));
return G__9417__delegate.call(this, x, y, more);
});
return G__9417;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9410.call(this,x);
case  2 :
return max__9412.call(this,x,y);
default:
return max__9414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9414.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9425 = (function (x){
return x;
});
var min__9426 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9428 = (function() { 
var G__9430__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9430 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9430__delegate.call(this, x, y, more);
};
G__9430.cljs$lang$maxFixedArity = 2;
G__9430.cljs$lang$applyTo = (function (arglist__9431){
var x = cljs.core.first(arglist__9431);
var y = cljs.core.first(cljs.core.next(arglist__9431));
var more = cljs.core.rest(cljs.core.next(arglist__9431));
return G__9430__delegate.call(this, x, y, more);
});
return G__9430;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9425.call(this,x);
case  2 :
return min__9426.call(this,x,y);
default:
return min__9428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9428.cljs$lang$applyTo;
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
var rem__9438 = (n % d);

return cljs.core.fix.call(null,((n - rem__9438) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9439 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9439));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9448 = (function (){
return Math.random.call(null);
});
var rand__9449 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9448.call(this);
case  1 :
return rand__9449.call(this,n);
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
var _EQ__EQ___9496 = (function (x){
return true;
});
var _EQ__EQ___9497 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9498 = (function() { 
var G__9500__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9501 = y;
var G__9502 = cljs.core.first.call(null,more);
var G__9503 = cljs.core.next.call(null,more);
x = G__9501;
y = G__9502;
more = G__9503;
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
var G__9500 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9500__delegate.call(this, x, y, more);
};
G__9500.cljs$lang$maxFixedArity = 2;
G__9500.cljs$lang$applyTo = (function (arglist__9504){
var x = cljs.core.first(arglist__9504);
var y = cljs.core.first(cljs.core.next(arglist__9504));
var more = cljs.core.rest(cljs.core.next(arglist__9504));
return G__9500__delegate.call(this, x, y, more);
});
return G__9500;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9496.call(this,x);
case  2 :
return _EQ__EQ___9497.call(this,x,y);
default:
return _EQ__EQ___9498.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9498.cljs$lang$applyTo;
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
var n__9514 = n;
var xs__9515 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9516 = xs__9515;

if(cljs.core.truth_(and__3546__auto____9516))
{return (n__9514 > 0);
} else
{return and__3546__auto____9516;
}
})()))
{{
var G__9522 = (n__9514 - 1);
var G__9523 = cljs.core.next.call(null,xs__9515);
n__9514 = G__9522;
xs__9515 = G__9523;
continue;
}
} else
{return xs__9515;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9536 = null;
var G__9536__9537 = (function (coll,n){
var temp__3695__auto____9524 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9524))
{var xs__9525 = temp__3695__auto____9524;

return cljs.core.first.call(null,xs__9525);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9536__9538 = (function (coll,n,not_found){
var temp__3695__auto____9530 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9530))
{var xs__9532 = temp__3695__auto____9530;

return cljs.core.first.call(null,xs__9532);
} else
{return not_found;
}
});
G__9536 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9536__9537.call(this,coll,n);
case  3 :
return G__9536__9538.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9536;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9541 = (function (){
return "";
});
var str_STAR___9542 = (function (x){
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
var str_STAR___9543 = (function() { 
var G__9550__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9551 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9552 = cljs.core.next.call(null,more);
sb = G__9551;
more = G__9552;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9550 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9550__delegate.call(this, x, ys);
};
G__9550.cljs$lang$maxFixedArity = 1;
G__9550.cljs$lang$applyTo = (function (arglist__9555){
var x = cljs.core.first(arglist__9555);
var ys = cljs.core.rest(arglist__9555);
return G__9550__delegate.call(this, x, ys);
});
return G__9550;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9541.call(this);
case  1 :
return str_STAR___9542.call(this,x);
default:
return str_STAR___9543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9543.cljs$lang$applyTo;
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
var str__9656 = (function (){
return "";
});
var str__9657 = (function (x){
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
var str__9658 = (function() { 
var G__9660__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9660 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9660__delegate.call(this, x, ys);
};
G__9660.cljs$lang$maxFixedArity = 1;
G__9660.cljs$lang$applyTo = (function (arglist__9661){
var x = cljs.core.first(arglist__9661);
var ys = cljs.core.rest(arglist__9661);
return G__9660__delegate.call(this, x, ys);
});
return G__9660;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9656.call(this);
case  1 :
return str__9657.call(this,x);
default:
return str__9658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9658.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9666 = (function (s,start){
return s.substring(start);
});
var subs__9667 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9666.call(this,s,start);
case  3 :
return subs__9667.call(this,s,start,end);
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
var symbol__9669 = (function (name){
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
var symbol__9670 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9669.call(this,ns);
case  2 :
return symbol__9670.call(this,ns,name);
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
var keyword__9673 = (function (name){
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
var keyword__9674 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9673.call(this,ns);
case  2 :
return keyword__9674.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9676 = cljs.core.seq.call(null,x);
var ys__9677 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9676)))
{return cljs.core.nil_QMARK_.call(null,ys__9677);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9677)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9676),cljs.core.first.call(null,ys__9677))))
{{
var G__9678 = cljs.core.next.call(null,xs__9676);
var G__9679 = cljs.core.next.call(null,ys__9677);
xs__9676 = G__9678;
ys__9677 = G__9679;
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
return cljs.core.reduce.call(null,(function (p1__9680_SHARP_,p2__9681_SHARP_){
return cljs.core.hash_combine.call(null,p1__9680_SHARP_,cljs.core.hash.call(null,p2__9681_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9682__9751 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9682__9751))
{var G__9753__9756 = cljs.core.first.call(null,G__9682__9751);
var vec__9754__9757 = G__9753__9756;
var key_name__9760 = cljs.core.nth.call(null,vec__9754__9757,0,null);
var f__9762 = cljs.core.nth.call(null,vec__9754__9757,1,null);
var G__9682__9763 = G__9682__9751;

var G__9753__9765 = G__9753__9756;
var G__9682__9767 = G__9682__9763;

while(true){
var vec__9769__9771 = G__9753__9765;
var key_name__9773 = cljs.core.nth.call(null,vec__9769__9771,0,null);
var f__9776 = cljs.core.nth.call(null,vec__9769__9771,1,null);
var G__9682__9777 = G__9682__9767;

var str_name__9781 = cljs.core.name.call(null,key_name__9773);

obj[str_name__9781] = f__9776;
var temp__3698__auto____9785 = cljs.core.next.call(null,G__9682__9777);

if(cljs.core.truth_(temp__3698__auto____9785))
{var G__9682__9786 = temp__3698__auto____9785;

{
var G__9798 = cljs.core.first.call(null,G__9682__9786);
var G__9799 = G__9682__9786;
G__9753__9765 = G__9798;
G__9682__9767 = G__9799;
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
var this__9813 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9818 = this;
return (new cljs.core.List(this__9818.meta,o,coll,(this__9818.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9820 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9824 = this;
return this__9824.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9825 = this;
return this__9825.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9829 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9834 = this;
return this__9834.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9835 = this;
return this__9835.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9836 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9837 = this;
return (new cljs.core.List(meta,this__9837.first,this__9837.rest,this__9837.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9838 = this;
return this__9838.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9839 = this;
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
var this__9858 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9861 = this;
return (new cljs.core.List(this__9861.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9864 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9867 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9870 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9874 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9878 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9882 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9884 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9886 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9888 = this;
return this__9888.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9889 = this;
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
list.cljs$lang$applyTo = (function (arglist__9954){
var items = cljs.core.seq( arglist__9954 );;
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
var this__9962 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9967 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9968 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9971 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9971.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9975 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9977 = this;
return this__9977.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9992 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9992.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9992.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9994 = this;
return this__9994.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9995 = this;
return (new cljs.core.Cons(meta,this__9995.first,this__9995.rest));
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
var G__10015 = null;
var G__10015__10016 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10015__10017 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10015 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10015__10016.call(this,string,f);
case  3 :
return G__10015__10017.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10015;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10021 = null;
var G__10021__10022 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10021__10023 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10021 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10021__10022.call(this,string,k);
case  3 :
return G__10021__10023.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10021;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10030 = null;
var G__10030__10032 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10030__10033 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10030 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10030__10032.call(this,string,n);
case  3 :
return G__10030__10033.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10030;
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
var G__10038 = null;
var G__10038__10039 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10038__10040 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10038 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10038__10039.call(this,this$,coll);
case  3 :
return G__10038__10040.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10038;
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
var x__10050 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10050;
} else
{lazy_seq.x = x__10050.call(null);
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
var this__10077 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10079 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10081 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10083 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10083.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10084 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10085 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10088 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10090 = this;
return this__10090.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10091 = this;
return (new cljs.core.LazySeq(meta,this__10091.realized,this__10091.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10104 = cljs.core.array.call(null);

var s__10105 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10105)))
{ary__10104.push(cljs.core.first.call(null,s__10105));
{
var G__10135 = cljs.core.next.call(null,s__10105);
s__10105 = G__10135;
continue;
}
} else
{return ary__10104;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10137 = s;
var i__10138 = n;
var sum__10139 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10140 = (i__10138 > 0);

if(cljs.core.truth_(and__3546__auto____10140))
{return cljs.core.seq.call(null,s__10137);
} else
{return and__3546__auto____10140;
}
})()))
{{
var G__10146 = cljs.core.next.call(null,s__10137);
var G__10147 = (i__10138 - 1);
var G__10148 = (sum__10139 + 1);
s__10137 = G__10146;
i__10138 = G__10147;
sum__10139 = G__10148;
continue;
}
} else
{return sum__10139;
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
var concat__10239 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10240 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10241 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10236 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10236))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10236),concat.call(null,cljs.core.rest.call(null,s__10236),y));
} else
{return y;
}
})));
});
var concat__10242 = (function() { 
var G__10259__delegate = function (x,y,zs){
var cat__10238 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10237 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10237))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10237),cat.call(null,cljs.core.rest.call(null,xys__10237),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10238.call(null,concat.call(null,x,y),zs);
};
var G__10259 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10259__delegate.call(this, x, y, zs);
};
G__10259.cljs$lang$maxFixedArity = 2;
G__10259.cljs$lang$applyTo = (function (arglist__10264){
var x = cljs.core.first(arglist__10264);
var y = cljs.core.first(cljs.core.next(arglist__10264));
var zs = cljs.core.rest(cljs.core.next(arglist__10264));
return G__10259__delegate.call(this, x, y, zs);
});
return G__10259;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10239.call(this);
case  1 :
return concat__10240.call(this,x);
case  2 :
return concat__10241.call(this,x,y);
default:
return concat__10242.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10242.cljs$lang$applyTo;
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
var list_STAR___10271 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10272 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10273 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10274 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10275 = (function() { 
var G__10277__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10277 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10277__delegate.call(this, a, b, c, d, more);
};
G__10277.cljs$lang$maxFixedArity = 4;
G__10277.cljs$lang$applyTo = (function (arglist__10283){
var a = cljs.core.first(arglist__10283);
var b = cljs.core.first(cljs.core.next(arglist__10283));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10283)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10283))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10283))));
return G__10277__delegate.call(this, a, b, c, d, more);
});
return G__10277;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10271.call(this,a);
case  2 :
return list_STAR___10272.call(this,a,b);
case  3 :
return list_STAR___10273.call(this,a,b,c);
case  4 :
return list_STAR___10274.call(this,a,b,c,d);
default:
return list_STAR___10275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10275.cljs$lang$applyTo;
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
var apply__10338 = (function (f,args){
var fixed_arity__10288 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10288 + 1)) <= fixed_arity__10288)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10339 = (function (f,x,args){
var arglist__10321 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10322 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10321,fixed_arity__10322) <= fixed_arity__10322)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10321));
} else
{return f.cljs$lang$applyTo(arglist__10321);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10321));
}
});
var apply__10340 = (function (f,x,y,args){
var arglist__10327 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10328 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10327,fixed_arity__10328) <= fixed_arity__10328)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10327));
} else
{return f.cljs$lang$applyTo(arglist__10327);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10327));
}
});
var apply__10341 = (function (f,x,y,z,args){
var arglist__10329 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10330 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10329,fixed_arity__10330) <= fixed_arity__10330)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10329));
} else
{return f.cljs$lang$applyTo(arglist__10329);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10329));
}
});
var apply__10343 = (function() { 
var G__10356__delegate = function (f,a,b,c,d,args){
var arglist__10331 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10332 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10331,fixed_arity__10332) <= fixed_arity__10332)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10331));
} else
{return f.cljs$lang$applyTo(arglist__10331);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10331));
}
};
var G__10356 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10356__delegate.call(this, f, a, b, c, d, args);
};
G__10356.cljs$lang$maxFixedArity = 5;
G__10356.cljs$lang$applyTo = (function (arglist__10361){
var f = cljs.core.first(arglist__10361);
var a = cljs.core.first(cljs.core.next(arglist__10361));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10361)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10361))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10361)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10361)))));
return G__10356__delegate.call(this, f, a, b, c, d, args);
});
return G__10356;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10338.call(this,f,a);
case  3 :
return apply__10339.call(this,f,a,b);
case  4 :
return apply__10340.call(this,f,a,b,c);
case  5 :
return apply__10341.call(this,f,a,b,c,d);
default:
return apply__10343.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10343.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10370){
var obj = cljs.core.first(arglist__10370);
var f = cljs.core.first(cljs.core.next(arglist__10370));
var args = cljs.core.rest(cljs.core.next(arglist__10370));
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
var not_EQ___10373 = (function (x){
return false;
});
var not_EQ___10374 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10375 = (function() { 
var G__10381__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10381 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10381__delegate.call(this, x, y, more);
};
G__10381.cljs$lang$maxFixedArity = 2;
G__10381.cljs$lang$applyTo = (function (arglist__10382){
var x = cljs.core.first(arglist__10382);
var y = cljs.core.first(cljs.core.next(arglist__10382));
var more = cljs.core.rest(cljs.core.next(arglist__10382));
return G__10381__delegate.call(this, x, y, more);
});
return G__10381;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10373.call(this,x);
case  2 :
return not_EQ___10374.call(this,x,y);
default:
return not_EQ___10375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10375.cljs$lang$applyTo;
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
var G__10399 = pred;
var G__10400 = cljs.core.next.call(null,coll);
pred = G__10399;
coll = G__10400;
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
{var or__3548__auto____10405 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10405))
{return or__3548__auto____10405;
} else
{{
var G__10407 = pred;
var G__10408 = cljs.core.next.call(null,coll);
pred = G__10407;
coll = G__10408;
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
var G__10422 = null;
var G__10422__10423 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10422__10424 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10422__10425 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10422__10426 = (function() { 
var G__10430__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10430 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10430__delegate.call(this, x, y, zs);
};
G__10430.cljs$lang$maxFixedArity = 2;
G__10430.cljs$lang$applyTo = (function (arglist__10432){
var x = cljs.core.first(arglist__10432);
var y = cljs.core.first(cljs.core.next(arglist__10432));
var zs = cljs.core.rest(cljs.core.next(arglist__10432));
return G__10430__delegate.call(this, x, y, zs);
});
return G__10430;
})()
;
G__10422 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10422__10423.call(this);
case  1 :
return G__10422__10424.call(this,x);
case  2 :
return G__10422__10425.call(this,x,y);
default:
return G__10422__10426.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10422.cljs$lang$maxFixedArity = 2;
G__10422.cljs$lang$applyTo = G__10422__10426.cljs$lang$applyTo;
return G__10422;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10444__delegate = function (args){
return x;
};
var G__10444 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10444__delegate.call(this, args);
};
G__10444.cljs$lang$maxFixedArity = 0;
G__10444.cljs$lang$applyTo = (function (arglist__10445){
var args = cljs.core.seq( arglist__10445 );;
return G__10444__delegate.call(this, args);
});
return G__10444;
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
var comp__10456 = (function (){
return cljs.core.identity;
});
var comp__10457 = (function (f){
return f;
});
var comp__10458 = (function (f,g){
return (function() {
var G__10463 = null;
var G__10463__10464 = (function (){
return f.call(null,g.call(null));
});
var G__10463__10465 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10463__10467 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10463__10468 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10463__10469 = (function() { 
var G__10476__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10476 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10476__delegate.call(this, x, y, z, args);
};
G__10476.cljs$lang$maxFixedArity = 3;
G__10476.cljs$lang$applyTo = (function (arglist__10477){
var x = cljs.core.first(arglist__10477);
var y = cljs.core.first(cljs.core.next(arglist__10477));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10477)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10477)));
return G__10476__delegate.call(this, x, y, z, args);
});
return G__10476;
})()
;
G__10463 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10463__10464.call(this);
case  1 :
return G__10463__10465.call(this,x);
case  2 :
return G__10463__10467.call(this,x,y);
case  3 :
return G__10463__10468.call(this,x,y,z);
default:
return G__10463__10469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10463.cljs$lang$maxFixedArity = 3;
G__10463.cljs$lang$applyTo = G__10463__10469.cljs$lang$applyTo;
return G__10463;
})()
});
var comp__10459 = (function (f,g,h){
return (function() {
var G__10483 = null;
var G__10483__10509 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10483__10510 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10483__10511 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10483__10512 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10483__10513 = (function() { 
var G__10668__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10668 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10668__delegate.call(this, x, y, z, args);
};
G__10668.cljs$lang$maxFixedArity = 3;
G__10668.cljs$lang$applyTo = (function (arglist__10670){
var x = cljs.core.first(arglist__10670);
var y = cljs.core.first(cljs.core.next(arglist__10670));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10670)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10670)));
return G__10668__delegate.call(this, x, y, z, args);
});
return G__10668;
})()
;
G__10483 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10483__10509.call(this);
case  1 :
return G__10483__10510.call(this,x);
case  2 :
return G__10483__10511.call(this,x,y);
case  3 :
return G__10483__10512.call(this,x,y,z);
default:
return G__10483__10513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10483.cljs$lang$maxFixedArity = 3;
G__10483.cljs$lang$applyTo = G__10483__10513.cljs$lang$applyTo;
return G__10483;
})()
});
var comp__10460 = (function() { 
var G__10679__delegate = function (f1,f2,f3,fs){
var fs__10449 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10680__delegate = function (args){
var ret__10452 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10449),args);
var fs__10453 = cljs.core.next.call(null,fs__10449);

while(true){
if(cljs.core.truth_(fs__10453))
{{
var G__10681 = cljs.core.first.call(null,fs__10453).call(null,ret__10452);
var G__10682 = cljs.core.next.call(null,fs__10453);
ret__10452 = G__10681;
fs__10453 = G__10682;
continue;
}
} else
{return ret__10452;
}
break;
}
};
var G__10680 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10680__delegate.call(this, args);
};
G__10680.cljs$lang$maxFixedArity = 0;
G__10680.cljs$lang$applyTo = (function (arglist__10683){
var args = cljs.core.seq( arglist__10683 );;
return G__10680__delegate.call(this, args);
});
return G__10680;
})()
;
};
var G__10679 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10679__delegate.call(this, f1, f2, f3, fs);
};
G__10679.cljs$lang$maxFixedArity = 3;
G__10679.cljs$lang$applyTo = (function (arglist__10684){
var f1 = cljs.core.first(arglist__10684);
var f2 = cljs.core.first(cljs.core.next(arglist__10684));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10684)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10684)));
return G__10679__delegate.call(this, f1, f2, f3, fs);
});
return G__10679;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10456.call(this);
case  1 :
return comp__10457.call(this,f1);
case  2 :
return comp__10458.call(this,f1,f2);
case  3 :
return comp__10459.call(this,f1,f2,f3);
default:
return comp__10460.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10460.cljs$lang$applyTo;
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
var partial__10685 = (function (f,arg1){
return (function() { 
var G__10690__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10690 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10690__delegate.call(this, args);
};
G__10690.cljs$lang$maxFixedArity = 0;
G__10690.cljs$lang$applyTo = (function (arglist__10691){
var args = cljs.core.seq( arglist__10691 );;
return G__10690__delegate.call(this, args);
});
return G__10690;
})()
;
});
var partial__10686 = (function (f,arg1,arg2){
return (function() { 
var G__10692__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10692 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10692__delegate.call(this, args);
};
G__10692.cljs$lang$maxFixedArity = 0;
G__10692.cljs$lang$applyTo = (function (arglist__10693){
var args = cljs.core.seq( arglist__10693 );;
return G__10692__delegate.call(this, args);
});
return G__10692;
})()
;
});
var partial__10687 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10694__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10694 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10694__delegate.call(this, args);
};
G__10694.cljs$lang$maxFixedArity = 0;
G__10694.cljs$lang$applyTo = (function (arglist__10695){
var args = cljs.core.seq( arglist__10695 );;
return G__10694__delegate.call(this, args);
});
return G__10694;
})()
;
});
var partial__10688 = (function() { 
var G__10696__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10697__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10697 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10697__delegate.call(this, args);
};
G__10697.cljs$lang$maxFixedArity = 0;
G__10697.cljs$lang$applyTo = (function (arglist__10698){
var args = cljs.core.seq( arglist__10698 );;
return G__10697__delegate.call(this, args);
});
return G__10697;
})()
;
};
var G__10696 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10696__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10696.cljs$lang$maxFixedArity = 4;
G__10696.cljs$lang$applyTo = (function (arglist__10699){
var f = cljs.core.first(arglist__10699);
var arg1 = cljs.core.first(cljs.core.next(arglist__10699));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10699)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10699))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10699))));
return G__10696__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10696;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10685.call(this,f,arg1);
case  3 :
return partial__10686.call(this,f,arg1,arg2);
case  4 :
return partial__10687.call(this,f,arg1,arg2,arg3);
default:
return partial__10688.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10688.cljs$lang$applyTo;
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
var fnil__10709 = (function (f,x){
return (function() {
var G__10713 = null;
var G__10713__10714 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10713__10715 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10713__10716 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10713__10717 = (function() { 
var G__10782__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10782 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10782__delegate.call(this, a, b, c, ds);
};
G__10782.cljs$lang$maxFixedArity = 3;
G__10782.cljs$lang$applyTo = (function (arglist__10784){
var a = cljs.core.first(arglist__10784);
var b = cljs.core.first(cljs.core.next(arglist__10784));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10784)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10784)));
return G__10782__delegate.call(this, a, b, c, ds);
});
return G__10782;
})()
;
G__10713 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10713__10714.call(this,a);
case  2 :
return G__10713__10715.call(this,a,b);
case  3 :
return G__10713__10716.call(this,a,b,c);
default:
return G__10713__10717.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10713.cljs$lang$maxFixedArity = 3;
G__10713.cljs$lang$applyTo = G__10713__10717.cljs$lang$applyTo;
return G__10713;
})()
});
var fnil__10710 = (function (f,x,y){
return (function() {
var G__10785 = null;
var G__10785__10786 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10785__10787 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10785__10788 = (function() { 
var G__10790__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10790 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10790__delegate.call(this, a, b, c, ds);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = (function (arglist__10791){
var a = cljs.core.first(arglist__10791);
var b = cljs.core.first(cljs.core.next(arglist__10791));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10791)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10791)));
return G__10790__delegate.call(this, a, b, c, ds);
});
return G__10790;
})()
;
G__10785 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10785__10786.call(this,a,b);
case  3 :
return G__10785__10787.call(this,a,b,c);
default:
return G__10785__10788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10785.cljs$lang$maxFixedArity = 3;
G__10785.cljs$lang$applyTo = G__10785__10788.cljs$lang$applyTo;
return G__10785;
})()
});
var fnil__10711 = (function (f,x,y,z){
return (function() {
var G__10792 = null;
var G__10792__10793 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10792__10794 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10792__10795 = (function() { 
var G__10798__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10798 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10798__delegate.call(this, a, b, c, ds);
};
G__10798.cljs$lang$maxFixedArity = 3;
G__10798.cljs$lang$applyTo = (function (arglist__10801){
var a = cljs.core.first(arglist__10801);
var b = cljs.core.first(cljs.core.next(arglist__10801));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10801)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10801)));
return G__10798__delegate.call(this, a, b, c, ds);
});
return G__10798;
})()
;
G__10792 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10792__10793.call(this,a,b);
case  3 :
return G__10792__10794.call(this,a,b,c);
default:
return G__10792__10795.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10792.cljs$lang$maxFixedArity = 3;
G__10792.cljs$lang$applyTo = G__10792__10795.cljs$lang$applyTo;
return G__10792;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10709.call(this,f,x);
case  3 :
return fnil__10710.call(this,f,x,y);
case  4 :
return fnil__10711.call(this,f,x,y,z);
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
var mapi__10810 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10808 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10808))
{var s__10809 = temp__3698__auto____10808;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10809)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10809)));
} else
{return null;
}
})));
});

return mapi__10810.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10874))
{var s__10875 = temp__3698__auto____10874;

var x__10876 = f.call(null,cljs.core.first.call(null,s__10875));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10876)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10875));
} else
{return cljs.core.cons.call(null,x__10876,keep.call(null,f,cljs.core.rest.call(null,s__10875)));
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
var keepi__11008 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11002 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11002))
{var s__11004 = temp__3698__auto____11002;

var x__11005 = f.call(null,idx,cljs.core.first.call(null,s__11004));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11005)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11004));
} else
{return cljs.core.cons.call(null,x__11005,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11004)));
}
} else
{return null;
}
})));
});

return keepi__11008.call(null,0,coll);
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
var every_pred__11264 = (function (p){
return (function() {
var ep1 = null;
var ep1__11270 = (function (){
return true;
});
var ep1__11271 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11272 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11167 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11167))
{return p.call(null,y);
} else
{return and__3546__auto____11167;
}
})());
});
var ep1__11273 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11169 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11169))
{var and__3546__auto____11171 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11171))
{return p.call(null,z);
} else
{return and__3546__auto____11171;
}
} else
{return and__3546__auto____11169;
}
})());
});
var ep1__11274 = (function() { 
var G__11280__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11174 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11174))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11174;
}
})());
};
var G__11280 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11280__delegate.call(this, x, y, z, args);
};
G__11280.cljs$lang$maxFixedArity = 3;
G__11280.cljs$lang$applyTo = (function (arglist__11282){
var x = cljs.core.first(arglist__11282);
var y = cljs.core.first(cljs.core.next(arglist__11282));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11282)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11282)));
return G__11280__delegate.call(this, x, y, z, args);
});
return G__11280;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11270.call(this);
case  1 :
return ep1__11271.call(this,x);
case  2 :
return ep1__11272.call(this,x,y);
case  3 :
return ep1__11273.call(this,x,y,z);
default:
return ep1__11274.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11274.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11265 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11286 = (function (){
return true;
});
var ep2__11287 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11180 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11180))
{return p2.call(null,x);
} else
{return and__3546__auto____11180;
}
})());
});
var ep2__11288 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11181 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11181))
{var and__3546__auto____11184 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11184))
{var and__3546__auto____11185 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11185))
{return p2.call(null,y);
} else
{return and__3546__auto____11185;
}
} else
{return and__3546__auto____11184;
}
} else
{return and__3546__auto____11181;
}
})());
});
var ep2__11289 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11189 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11189))
{var and__3546__auto____11190 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11190))
{var and__3546__auto____11192 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11192))
{var and__3546__auto____11194 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11194))
{var and__3546__auto____11195 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11195))
{return p2.call(null,z);
} else
{return and__3546__auto____11195;
}
} else
{return and__3546__auto____11194;
}
} else
{return and__3546__auto____11192;
}
} else
{return and__3546__auto____11190;
}
} else
{return and__3546__auto____11189;
}
})());
});
var ep2__11290 = (function() { 
var G__11301__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11197 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11197))
{return cljs.core.every_QMARK_.call(null,(function (p1__10991_SHARP_){
var and__3546__auto____11199 = p1.call(null,p1__10991_SHARP_);

if(cljs.core.truth_(and__3546__auto____11199))
{return p2.call(null,p1__10991_SHARP_);
} else
{return and__3546__auto____11199;
}
}),args);
} else
{return and__3546__auto____11197;
}
})());
};
var G__11301 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11301__delegate.call(this, x, y, z, args);
};
G__11301.cljs$lang$maxFixedArity = 3;
G__11301.cljs$lang$applyTo = (function (arglist__11307){
var x = cljs.core.first(arglist__11307);
var y = cljs.core.first(cljs.core.next(arglist__11307));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11307)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11307)));
return G__11301__delegate.call(this, x, y, z, args);
});
return G__11301;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11286.call(this);
case  1 :
return ep2__11287.call(this,x);
case  2 :
return ep2__11288.call(this,x,y);
case  3 :
return ep2__11289.call(this,x,y,z);
default:
return ep2__11290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11290.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11266 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11309 = (function (){
return true;
});
var ep3__11310 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11203 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11203))
{var and__3546__auto____11204 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11204))
{return p3.call(null,x);
} else
{return and__3546__auto____11204;
}
} else
{return and__3546__auto____11203;
}
})());
});
var ep3__11311 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11205 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11205))
{var and__3546__auto____11206 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11206))
{var and__3546__auto____11208 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11208))
{var and__3546__auto____11210 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11210))
{var and__3546__auto____11212 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11212))
{return p3.call(null,y);
} else
{return and__3546__auto____11212;
}
} else
{return and__3546__auto____11210;
}
} else
{return and__3546__auto____11208;
}
} else
{return and__3546__auto____11206;
}
} else
{return and__3546__auto____11205;
}
})());
});
var ep3__11312 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11213 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11213))
{var and__3546__auto____11215 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11215))
{var and__3546__auto____11216 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11216))
{var and__3546__auto____11218 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11218))
{var and__3546__auto____11219 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11219))
{var and__3546__auto____11220 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11220))
{var and__3546__auto____11221 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11221))
{var and__3546__auto____11227 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11227))
{return p3.call(null,z);
} else
{return and__3546__auto____11227;
}
} else
{return and__3546__auto____11221;
}
} else
{return and__3546__auto____11220;
}
} else
{return and__3546__auto____11219;
}
} else
{return and__3546__auto____11218;
}
} else
{return and__3546__auto____11216;
}
} else
{return and__3546__auto____11215;
}
} else
{return and__3546__auto____11213;
}
})());
});
var ep3__11313 = (function() { 
var G__11337__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11235 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11235))
{return cljs.core.every_QMARK_.call(null,(function (p1__10992_SHARP_){
var and__3546__auto____11237 = p1.call(null,p1__10992_SHARP_);

if(cljs.core.truth_(and__3546__auto____11237))
{var and__3546__auto____11244 = p2.call(null,p1__10992_SHARP_);

if(cljs.core.truth_(and__3546__auto____11244))
{return p3.call(null,p1__10992_SHARP_);
} else
{return and__3546__auto____11244;
}
} else
{return and__3546__auto____11237;
}
}),args);
} else
{return and__3546__auto____11235;
}
})());
};
var G__11337 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11337__delegate.call(this, x, y, z, args);
};
G__11337.cljs$lang$maxFixedArity = 3;
G__11337.cljs$lang$applyTo = (function (arglist__11340){
var x = cljs.core.first(arglist__11340);
var y = cljs.core.first(cljs.core.next(arglist__11340));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11340)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11340)));
return G__11337__delegate.call(this, x, y, z, args);
});
return G__11337;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11309.call(this);
case  1 :
return ep3__11310.call(this,x);
case  2 :
return ep3__11311.call(this,x,y);
case  3 :
return ep3__11312.call(this,x,y,z);
default:
return ep3__11313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11313.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11267 = (function() { 
var G__11347__delegate = function (p1,p2,p3,ps){
var ps__11247 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11350 = (function (){
return true;
});
var epn__11351 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10993_SHARP_){
return p1__10993_SHARP_.call(null,x);
}),ps__11247);
});
var epn__11352 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10994_SHARP_){
var and__3546__auto____11251 = p1__10994_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11251))
{return p1__10994_SHARP_.call(null,y);
} else
{return and__3546__auto____11251;
}
}),ps__11247);
});
var epn__11353 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10995_SHARP_){
var and__3546__auto____11254 = p1__10995_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11254))
{var and__3546__auto____11255 = p1__10995_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11255))
{return p1__10995_SHARP_.call(null,z);
} else
{return and__3546__auto____11255;
}
} else
{return and__3546__auto____11254;
}
}),ps__11247);
});
var epn__11354 = (function() { 
var G__11364__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11263 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11263))
{return cljs.core.every_QMARK_.call(null,(function (p1__10996_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10996_SHARP_,args);
}),ps__11247);
} else
{return and__3546__auto____11263;
}
})());
};
var G__11364 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11364__delegate.call(this, x, y, z, args);
};
G__11364.cljs$lang$maxFixedArity = 3;
G__11364.cljs$lang$applyTo = (function (arglist__11369){
var x = cljs.core.first(arglist__11369);
var y = cljs.core.first(cljs.core.next(arglist__11369));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11369)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11369)));
return G__11364__delegate.call(this, x, y, z, args);
});
return G__11364;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11350.call(this);
case  1 :
return epn__11351.call(this,x);
case  2 :
return epn__11352.call(this,x,y);
case  3 :
return epn__11353.call(this,x,y,z);
default:
return epn__11354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11354.cljs$lang$applyTo;
return epn;
})()
};
var G__11347 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11347__delegate.call(this, p1, p2, p3, ps);
};
G__11347.cljs$lang$maxFixedArity = 3;
G__11347.cljs$lang$applyTo = (function (arglist__11374){
var p1 = cljs.core.first(arglist__11374);
var p2 = cljs.core.first(cljs.core.next(arglist__11374));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11374)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11374)));
return G__11347__delegate.call(this, p1, p2, p3, ps);
});
return G__11347;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11264.call(this,p1);
case  2 :
return every_pred__11265.call(this,p1,p2);
case  3 :
return every_pred__11266.call(this,p1,p2,p3);
default:
return every_pred__11267.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11267.cljs$lang$applyTo;
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
var some_fn__11633 = (function (p){
return (function() {
var sp1 = null;
var sp1__11643 = (function (){
return null;
});
var sp1__11645 = (function (x){
return p.call(null,x);
});
var sp1__11647 = (function (x,y){
var or__3548__auto____11394 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11394))
{return or__3548__auto____11394;
} else
{return p.call(null,y);
}
});
var sp1__11649 = (function (x,y,z){
var or__3548__auto____11399 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11399))
{return or__3548__auto____11399;
} else
{var or__3548__auto____11402 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11402))
{return or__3548__auto____11402;
} else
{return p.call(null,z);
}
}
});
var sp1__11650 = (function() { 
var G__11653__delegate = function (x,y,z,args){
var or__3548__auto____11407 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11407))
{return or__3548__auto____11407;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11653 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11653__delegate.call(this, x, y, z, args);
};
G__11653.cljs$lang$maxFixedArity = 3;
G__11653.cljs$lang$applyTo = (function (arglist__11654){
var x = cljs.core.first(arglist__11654);
var y = cljs.core.first(cljs.core.next(arglist__11654));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11654)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11654)));
return G__11653__delegate.call(this, x, y, z, args);
});
return G__11653;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11643.call(this);
case  1 :
return sp1__11645.call(this,x);
case  2 :
return sp1__11647.call(this,x,y);
case  3 :
return sp1__11649.call(this,x,y,z);
default:
return sp1__11650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11650.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11635 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11663 = (function (){
return null;
});
var sp2__11664 = (function (x){
var or__3548__auto____11411 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11411))
{return or__3548__auto____11411;
} else
{return p2.call(null,x);
}
});
var sp2__11666 = (function (x,y){
var or__3548__auto____11414 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11414))
{return or__3548__auto____11414;
} else
{var or__3548__auto____11417 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11417))
{return or__3548__auto____11417;
} else
{var or__3548__auto____11420 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11420))
{return or__3548__auto____11420;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11667 = (function (x,y,z){
var or__3548__auto____11423 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11423))
{return or__3548__auto____11423;
} else
{var or__3548__auto____11427 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11427))
{return or__3548__auto____11427;
} else
{var or__3548__auto____11430 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11430))
{return or__3548__auto____11430;
} else
{var or__3548__auto____11432 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11432))
{return or__3548__auto____11432;
} else
{var or__3548__auto____11436 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11436))
{return or__3548__auto____11436;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11669 = (function() { 
var G__11673__delegate = function (x,y,z,args){
var or__3548__auto____11440 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11440))
{return or__3548__auto____11440;
} else
{return cljs.core.some.call(null,(function (p1__11024_SHARP_){
var or__3548__auto____11443 = p1.call(null,p1__11024_SHARP_);

if(cljs.core.truth_(or__3548__auto____11443))
{return or__3548__auto____11443;
} else
{return p2.call(null,p1__11024_SHARP_);
}
}),args);
}
};
var G__11673 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11673__delegate.call(this, x, y, z, args);
};
G__11673.cljs$lang$maxFixedArity = 3;
G__11673.cljs$lang$applyTo = (function (arglist__11677){
var x = cljs.core.first(arglist__11677);
var y = cljs.core.first(cljs.core.next(arglist__11677));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11677)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11677)));
return G__11673__delegate.call(this, x, y, z, args);
});
return G__11673;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11663.call(this);
case  1 :
return sp2__11664.call(this,x);
case  2 :
return sp2__11666.call(this,x,y);
case  3 :
return sp2__11667.call(this,x,y,z);
default:
return sp2__11669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11669.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11637 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11681 = (function (){
return null;
});
var sp3__11682 = (function (x){
var or__3548__auto____11449 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11449))
{return or__3548__auto____11449;
} else
{var or__3548__auto____11452 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11452))
{return or__3548__auto____11452;
} else
{return p3.call(null,x);
}
}
});
var sp3__11683 = (function (x,y){
var or__3548__auto____11454 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11454))
{return or__3548__auto____11454;
} else
{var or__3548__auto____11456 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11456))
{return or__3548__auto____11456;
} else
{var or__3548__auto____11458 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11458))
{return or__3548__auto____11458;
} else
{var or__3548__auto____11459 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11459))
{return or__3548__auto____11459;
} else
{var or__3548__auto____11462 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11462))
{return or__3548__auto____11462;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11684 = (function (x,y,z){
var or__3548__auto____11464 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11464))
{return or__3548__auto____11464;
} else
{var or__3548__auto____11466 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11466))
{return or__3548__auto____11466;
} else
{var or__3548__auto____11468 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11468))
{return or__3548__auto____11468;
} else
{var or__3548__auto____11469 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11469))
{return or__3548__auto____11469;
} else
{var or__3548__auto____11471 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11471))
{return or__3548__auto____11471;
} else
{var or__3548__auto____11473 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{var or__3548__auto____11474 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{var or__3548__auto____11475 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11475))
{return or__3548__auto____11475;
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
var sp3__11685 = (function() { 
var G__11701__delegate = function (x,y,z,args){
var or__3548__auto____11612 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11612))
{return or__3548__auto____11612;
} else
{return cljs.core.some.call(null,(function (p1__11026_SHARP_){
var or__3548__auto____11613 = p1.call(null,p1__11026_SHARP_);

if(cljs.core.truth_(or__3548__auto____11613))
{return or__3548__auto____11613;
} else
{var or__3548__auto____11615 = p2.call(null,p1__11026_SHARP_);

if(cljs.core.truth_(or__3548__auto____11615))
{return or__3548__auto____11615;
} else
{return p3.call(null,p1__11026_SHARP_);
}
}
}),args);
}
};
var G__11701 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11701__delegate.call(this, x, y, z, args);
};
G__11701.cljs$lang$maxFixedArity = 3;
G__11701.cljs$lang$applyTo = (function (arglist__11707){
var x = cljs.core.first(arglist__11707);
var y = cljs.core.first(cljs.core.next(arglist__11707));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11707)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11707)));
return G__11701__delegate.call(this, x, y, z, args);
});
return G__11701;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11681.call(this);
case  1 :
return sp3__11682.call(this,x);
case  2 :
return sp3__11683.call(this,x,y);
case  3 :
return sp3__11684.call(this,x,y,z);
default:
return sp3__11685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11685.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11639 = (function() { 
var G__11708__delegate = function (p1,p2,p3,ps){
var ps__11617 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11710 = (function (){
return null;
});
var spn__11711 = (function (x){
return cljs.core.some.call(null,(function (p1__11029_SHARP_){
return p1__11029_SHARP_.call(null,x);
}),ps__11617);
});
var spn__11712 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11030_SHARP_){
var or__3548__auto____11620 = p1__11030_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11620))
{return or__3548__auto____11620;
} else
{return p1__11030_SHARP_.call(null,y);
}
}),ps__11617);
});
var spn__11713 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11031_SHARP_){
var or__3548__auto____11622 = p1__11031_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11622))
{return or__3548__auto____11622;
} else
{var or__3548__auto____11623 = p1__11031_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11623))
{return or__3548__auto____11623;
} else
{return p1__11031_SHARP_.call(null,z);
}
}
}),ps__11617);
});
var spn__11715 = (function() { 
var G__11732__delegate = function (x,y,z,args){
var or__3548__auto____11627 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11627))
{return or__3548__auto____11627;
} else
{return cljs.core.some.call(null,(function (p1__11033_SHARP_){
return cljs.core.some.call(null,p1__11033_SHARP_,args);
}),ps__11617);
}
};
var G__11732 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11732__delegate.call(this, x, y, z, args);
};
G__11732.cljs$lang$maxFixedArity = 3;
G__11732.cljs$lang$applyTo = (function (arglist__11733){
var x = cljs.core.first(arglist__11733);
var y = cljs.core.first(cljs.core.next(arglist__11733));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11733)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11733)));
return G__11732__delegate.call(this, x, y, z, args);
});
return G__11732;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11710.call(this);
case  1 :
return spn__11711.call(this,x);
case  2 :
return spn__11712.call(this,x,y);
case  3 :
return spn__11713.call(this,x,y,z);
default:
return spn__11715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11715.cljs$lang$applyTo;
return spn;
})()
};
var G__11708 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11708__delegate.call(this, p1, p2, p3, ps);
};
G__11708.cljs$lang$maxFixedArity = 3;
G__11708.cljs$lang$applyTo = (function (arglist__11734){
var p1 = cljs.core.first(arglist__11734);
var p2 = cljs.core.first(cljs.core.next(arglist__11734));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11734)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11734)));
return G__11708__delegate.call(this, p1, p2, p3, ps);
});
return G__11708;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11633.call(this,p1);
case  2 :
return some_fn__11635.call(this,p1,p2);
case  3 :
return some_fn__11637.call(this,p1,p2,p3);
default:
return some_fn__11639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11639.cljs$lang$applyTo;
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
var map__11800 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11767 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11767))
{var s__11768 = temp__3698__auto____11767;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11768)),map.call(null,f,cljs.core.rest.call(null,s__11768)));
} else
{return null;
}
})));
});
var map__11801 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11771 = cljs.core.seq.call(null,c1);
var s2__11774 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11775 = s1__11771;

if(cljs.core.truth_(and__3546__auto____11775))
{return s2__11774;
} else
{return and__3546__auto____11775;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11771),cljs.core.first.call(null,s2__11774)),map.call(null,f,cljs.core.rest.call(null,s1__11771),cljs.core.rest.call(null,s2__11774)));
} else
{return null;
}
})));
});
var map__11802 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11781 = cljs.core.seq.call(null,c1);
var s2__11782 = cljs.core.seq.call(null,c2);
var s3__11783 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11784 = s1__11781;

if(cljs.core.truth_(and__3546__auto____11784))
{var and__3546__auto____11788 = s2__11782;

if(cljs.core.truth_(and__3546__auto____11788))
{return s3__11783;
} else
{return and__3546__auto____11788;
}
} else
{return and__3546__auto____11784;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11781),cljs.core.first.call(null,s2__11782),cljs.core.first.call(null,s3__11783)),map.call(null,f,cljs.core.rest.call(null,s1__11781),cljs.core.rest.call(null,s2__11782),cljs.core.rest.call(null,s3__11783)));
} else
{return null;
}
})));
});
var map__11803 = (function() { 
var G__11817__delegate = function (f,c1,c2,c3,colls){
var step__11795 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11792 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11792)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11792),step.call(null,map.call(null,cljs.core.rest,ss__11792)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11386_SHARP_){
return cljs.core.apply.call(null,f,p1__11386_SHARP_);
}),step__11795.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11817 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11817__delegate.call(this, f, c1, c2, c3, colls);
};
G__11817.cljs$lang$maxFixedArity = 4;
G__11817.cljs$lang$applyTo = (function (arglist__11827){
var f = cljs.core.first(arglist__11827);
var c1 = cljs.core.first(cljs.core.next(arglist__11827));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11827)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11827))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11827))));
return G__11817__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11817;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11800.call(this,f,c1);
case  3 :
return map__11801.call(this,f,c1,c2);
case  4 :
return map__11802.call(this,f,c1,c2,c3);
default:
return map__11803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11803.cljs$lang$applyTo;
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
{var temp__3698__auto____11829 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11829))
{var s__11830 = temp__3698__auto____11829;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11830),take.call(null,(n - 1),cljs.core.rest.call(null,s__11830)));
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
var step__11840 = (function (n,coll){
while(true){
var s__11836 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11838 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11838))
{return s__11836;
} else
{return and__3546__auto____11838;
}
})()))
{{
var G__11843 = (n - 1);
var G__11844 = cljs.core.rest.call(null,s__11836);
n = G__11843;
coll = G__11844;
continue;
}
} else
{return s__11836;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11840.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11851 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11852 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11851.call(this,n);
case  2 :
return drop_last__11852.call(this,n,s);
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
var s__11857 = cljs.core.seq.call(null,coll);
var lead__11858 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11858))
{{
var G__11897 = cljs.core.next.call(null,s__11857);
var G__11898 = cljs.core.next.call(null,lead__11858);
s__11857 = G__11897;
lead__11858 = G__11898;
continue;
}
} else
{return s__11857;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11906 = (function (pred,coll){
while(true){
var s__11902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11904 = s__11902;

if(cljs.core.truth_(and__3546__auto____11904))
{return pred.call(null,cljs.core.first.call(null,s__11902));
} else
{return and__3546__auto____11904;
}
})()))
{{
var G__11920 = pred;
var G__11921 = cljs.core.rest.call(null,s__11902);
pred = G__11920;
coll = G__11921;
continue;
}
} else
{return s__11902;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11906.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11928 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11928))
{var s__11931 = temp__3698__auto____11928;

return cljs.core.concat.call(null,s__11931,cycle.call(null,s__11931));
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
var repeat__11945 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12011 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11945.call(this,n);
case  2 :
return repeat__12011.call(this,n,x);
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
var repeatedly__12014 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12015 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12014.call(this,n);
case  2 :
return repeatedly__12015.call(this,n,f);
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
var interleave__12084 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12074 = cljs.core.seq.call(null,c1);
var s2__12075 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12076 = s1__12074;

if(cljs.core.truth_(and__3546__auto____12076))
{return s2__12075;
} else
{return and__3546__auto____12076;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12074),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12075),interleave.call(null,cljs.core.rest.call(null,s1__12074),cljs.core.rest.call(null,s2__12075))));
} else
{return null;
}
})));
});
var interleave__12085 = (function() { 
var G__12096__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12083 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12083)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12083),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12083)));
} else
{return null;
}
})));
};
var G__12096 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12096__delegate.call(this, c1, c2, colls);
};
G__12096.cljs$lang$maxFixedArity = 2;
G__12096.cljs$lang$applyTo = (function (arglist__12101){
var c1 = cljs.core.first(arglist__12101);
var c2 = cljs.core.first(cljs.core.next(arglist__12101));
var colls = cljs.core.rest(cljs.core.next(arglist__12101));
return G__12096__delegate.call(this, c1, c2, colls);
});
return G__12096;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12084.call(this,c1,c2);
default:
return interleave__12085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12085.cljs$lang$applyTo;
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
var cat__12130 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12128 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12128))
{var coll__12129 = temp__3695__auto____12128;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12129),cat.call(null,cljs.core.rest.call(null,coll__12129),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12130.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12136 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12137 = (function() { 
var G__12139__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12139 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12139__delegate.call(this, f, coll, colls);
};
G__12139.cljs$lang$maxFixedArity = 2;
G__12139.cljs$lang$applyTo = (function (arglist__12140){
var f = cljs.core.first(arglist__12140);
var coll = cljs.core.first(cljs.core.next(arglist__12140));
var colls = cljs.core.rest(cljs.core.next(arglist__12140));
return G__12139__delegate.call(this, f, coll, colls);
});
return G__12139;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12136.call(this,f,coll);
default:
return mapcat__12137.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12137.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12141 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12141))
{var s__12143 = temp__3698__auto____12141;

var f__12144 = cljs.core.first.call(null,s__12143);
var r__12145 = cljs.core.rest.call(null,s__12143);

if(cljs.core.truth_(pred.call(null,f__12144)))
{return cljs.core.cons.call(null,f__12144,filter.call(null,pred,r__12145));
} else
{return filter.call(null,pred,r__12145);
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
var walk__12150 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12150.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12146_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12146_SHARP_));
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
var partition__12261 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12262 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12155 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12155))
{var s__12252 = temp__3698__auto____12155;

var p__12253 = cljs.core.take.call(null,n,s__12252);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12253))))
{return cljs.core.cons.call(null,p__12253,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12252)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12263 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12255 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12255))
{var s__12256 = temp__3698__auto____12255;

var p__12257 = cljs.core.take.call(null,n,s__12256);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12257))))
{return cljs.core.cons.call(null,p__12257,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12256)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12257,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12261.call(this,n,step);
case  3 :
return partition__12262.call(this,n,step,pad);
case  4 :
return partition__12263.call(this,n,step,pad,coll);
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
var get_in__12281 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12282 = (function (m,ks,not_found){
var sentinel__12270 = cljs.core.lookup_sentinel;
var m__12271 = m;
var ks__12275 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12275))
{var m__12278 = cljs.core.get.call(null,m__12271,cljs.core.first.call(null,ks__12275),sentinel__12270);

if(cljs.core.truth_((sentinel__12270 === m__12278)))
{return not_found;
} else
{{
var G__12286 = sentinel__12270;
var G__12287 = m__12278;
var G__12288 = cljs.core.next.call(null,ks__12275);
sentinel__12270 = G__12286;
m__12271 = G__12287;
ks__12275 = G__12288;
continue;
}
}
} else
{return m__12271;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12281.call(this,m,ks);
case  3 :
return get_in__12282.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12292,v){
var vec__12296__12297 = p__12292;
var k__12298 = cljs.core.nth.call(null,vec__12296__12297,0,null);
var ks__12299 = cljs.core.nthnext.call(null,vec__12296__12297,1);

if(cljs.core.truth_(ks__12299))
{return cljs.core.assoc.call(null,m,k__12298,assoc_in.call(null,cljs.core.get.call(null,m,k__12298),ks__12299,v));
} else
{return cljs.core.assoc.call(null,m,k__12298,v);
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
var update_in__delegate = function (m,p__12311,f,args){
var vec__12312__12314 = p__12311;
var k__12315 = cljs.core.nth.call(null,vec__12312__12314,0,null);
var ks__12316 = cljs.core.nthnext.call(null,vec__12312__12314,1);

if(cljs.core.truth_(ks__12316))
{return cljs.core.assoc.call(null,m,k__12315,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12315),ks__12316,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12315,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12315),args));
}
};
var update_in = function (m,p__12311,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12311, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12333){
var m = cljs.core.first(arglist__12333);
var p__12311 = cljs.core.first(cljs.core.next(arglist__12333));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12333)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12333)));
return update_in__delegate.call(this, m, p__12311, f, args);
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
var this__12341 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12374 = null;
var G__12374__12375 = (function (coll,k){
var this__12343 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12374__12376 = (function (coll,k,not_found){
var this__12344 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12374 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12374__12375.call(this,coll,k);
case  3 :
return G__12374__12376.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12374;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12345 = this;
var new_array__12346 = cljs.core.aclone.call(null,this__12345.array);

(new_array__12346[k] = v);
return (new cljs.core.Vector(this__12345.meta,new_array__12346));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12378 = null;
var G__12378__12379 = (function (coll,k){
var this__12347 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12378__12380 = (function (coll,k,not_found){
var this__12348 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12378 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12378__12379.call(this,coll,k);
case  3 :
return G__12378__12380.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12378;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12349 = this;
var new_array__12350 = cljs.core.aclone.call(null,this__12349.array);

new_array__12350.push(o);
return (new cljs.core.Vector(this__12349.meta,new_array__12350));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12388 = null;
var G__12388__12389 = (function (v,f){
var this__12355 = this;
return cljs.core.ci_reduce.call(null,this__12355.array,f);
});
var G__12388__12390 = (function (v,f,start){
var this__12356 = this;
return cljs.core.ci_reduce.call(null,this__12356.array,f,start);
});
G__12388 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12388__12389.call(this,v,f);
case  3 :
return G__12388__12390.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12388;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12357 = this;
if(cljs.core.truth_((this__12357.array.length > 0)))
{var vector_seq__12358 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12357.array.length)))
{return cljs.core.cons.call(null,(this__12357.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12358.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12359 = this;
return this__12359.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12360 = this;
var count__12361 = this__12360.array.length;

if(cljs.core.truth_((count__12361 > 0)))
{return (this__12360.array[(count__12361 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12362 = this;
if(cljs.core.truth_((this__12362.array.length > 0)))
{var new_array__12363 = cljs.core.aclone.call(null,this__12362.array);

new_array__12363.pop();
return (new cljs.core.Vector(this__12362.meta,new_array__12363));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12364 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12365 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12366 = this;
return (new cljs.core.Vector(meta,this__12366.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12367 = this;
return this__12367.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12407 = null;
var G__12407__12408 = (function (coll,n){
var this__12368 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12370 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12370))
{return (n < this__12368.array.length);
} else
{return and__3546__auto____12370;
}
})()))
{return (this__12368.array[n]);
} else
{return null;
}
});
var G__12407__12409 = (function (coll,n,not_found){
var this__12371 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12372 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12372))
{return (n < this__12371.array.length);
} else
{return and__3546__auto____12372;
}
})()))
{return (this__12371.array[n]);
} else
{return not_found;
}
});
G__12407 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12407__12408.call(this,coll,n);
case  3 :
return G__12407__12409.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12407;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12373 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12373.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12462){
var args = cljs.core.seq( arglist__12462 );;
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
var this__12475 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12541 = null;
var G__12541__12542 = (function (coll,k){
var this__12476 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12541__12543 = (function (coll,k,not_found){
var this__12477 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12541 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12541__12542.call(this,coll,k);
case  3 :
return G__12541__12543.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12541;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12481 = this;
var v_pos__12484 = (this__12481.start + key);

return (new cljs.core.Subvec(this__12481.meta,cljs.core._assoc.call(null,this__12481.v,v_pos__12484,val),this__12481.start,((this__12481.end > (v_pos__12484 + 1)) ? this__12481.end : (v_pos__12484 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12545 = null;
var G__12545__12546 = (function (coll,k){
var this__12486 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12545__12547 = (function (coll,k,not_found){
var this__12488 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12545 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12545__12546.call(this,coll,k);
case  3 :
return G__12545__12547.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12545;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12490 = this;
return (new cljs.core.Subvec(this__12490.meta,cljs.core._assoc_n.call(null,this__12490.v,this__12490.end,o),this__12490.start,(this__12490.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12553 = null;
var G__12553__12554 = (function (coll,f){
var this__12492 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12553__12555 = (function (coll,f,start){
var this__12494 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12553 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12553__12554.call(this,coll,f);
case  3 :
return G__12553__12555.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12553;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12496 = this;
var subvec_seq__12502 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12496.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12496.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12502.call(null,this__12496.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12504 = this;
return (this__12504.end - this__12504.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12506 = this;
return cljs.core._nth.call(null,this__12506.v,(this__12506.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12507 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12507.start,this__12507.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12507.meta,this__12507.v,this__12507.start,(this__12507.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12511 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12514 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12516 = this;
return (new cljs.core.Subvec(meta,this__12516.v,this__12516.start,this__12516.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12518 = this;
return this__12518.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12583 = null;
var G__12583__12584 = (function (coll,n){
var this__12520 = this;
return cljs.core._nth.call(null,this__12520.v,(this__12520.start + n));
});
var G__12583__12585 = (function (coll,n,not_found){
var this__12522 = this;
return cljs.core._nth.call(null,this__12522.v,(this__12522.start + n),not_found);
});
G__12583 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12583__12584.call(this,coll,n);
case  3 :
return G__12583__12585.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12583;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12524 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12524.meta);
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
var subvec__12601 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12602 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12601.call(this,v,start);
case  3 :
return subvec__12602.call(this,v,start,end);
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
var this__12616 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12617 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12622 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12623 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12623.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12624 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12629 = this;
return cljs.core._first.call(null,this__12629.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12630 = this;
var temp__3695__auto____12644 = cljs.core.next.call(null,this__12630.front);

if(cljs.core.truth_(temp__3695__auto____12644))
{var f1__12646 = temp__3695__auto____12644;

return (new cljs.core.PersistentQueueSeq(this__12630.meta,f1__12646,this__12630.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12630.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12630.meta,this__12630.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12649 = this;
return this__12649.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12651 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12651.front,this__12651.rear));
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
var this__12678 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12681 = this;
if(cljs.core.truth_(this__12681.front))
{return (new cljs.core.PersistentQueue(this__12681.meta,(this__12681.count + 1),this__12681.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12683 = this__12681.rear;

if(cljs.core.truth_(or__3548__auto____12683))
{return or__3548__auto____12683;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12681.meta,(this__12681.count + 1),cljs.core.conj.call(null,this__12681.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12687 = this;
var rear__12688 = cljs.core.seq.call(null,this__12687.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12689 = this__12687.front;

if(cljs.core.truth_(or__3548__auto____12689))
{return or__3548__auto____12689;
} else
{return rear__12688;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12687.front,cljs.core.seq.call(null,rear__12688)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12694 = this;
return this__12694.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12695 = this;
return cljs.core._first.call(null,this__12695.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12696 = this;
if(cljs.core.truth_(this__12696.front))
{var temp__3695__auto____12697 = cljs.core.next.call(null,this__12696.front);

if(cljs.core.truth_(temp__3695__auto____12697))
{var f1__12698 = temp__3695__auto____12697;

return (new cljs.core.PersistentQueue(this__12696.meta,(this__12696.count - 1),f1__12698,this__12696.rear));
} else
{return (new cljs.core.PersistentQueue(this__12696.meta,(this__12696.count - 1),cljs.core.seq.call(null,this__12696.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12703 = this;
return cljs.core.first.call(null,this__12703.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12756 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12758 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12760 = this;
return (new cljs.core.PersistentQueue(meta,this__12760.count,this__12760.front,this__12760.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12761 = this;
return this__12761.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12763 = this;
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
var this__12807 = this;
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
var len__12816 = array.length;

var i__12819 = 0;

while(true){
if(cljs.core.truth_((i__12819 < len__12816)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12819]))))
{return i__12819;
} else
{{
var G__12825 = (i__12819 + incr);
i__12819 = G__12825;
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
var obj_map_contains_key_QMARK___12858 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12859 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12854 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12854))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12854;
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
return obj_map_contains_key_QMARK___12858.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12859.call(this,k,strobj,true_val,false_val);
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
var this__12885 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12951 = null;
var G__12951__12952 = (function (coll,k){
var this__12889 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12951__12953 = (function (coll,k,not_found){
var this__12892 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12892.strobj,(this__12892.strobj[k]),not_found);
});
G__12951 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12951__12952.call(this,coll,k);
case  3 :
return G__12951__12953.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12951;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12896 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12897 = goog.object.clone.call(null,this__12896.strobj);
var overwrite_QMARK___12898 = new_strobj__12897.hasOwnProperty(k);

(new_strobj__12897[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12898))
{return (new cljs.core.ObjMap(this__12896.meta,this__12896.keys,new_strobj__12897));
} else
{var new_keys__12901 = cljs.core.aclone.call(null,this__12896.keys);

new_keys__12901.push(k);
return (new cljs.core.ObjMap(this__12896.meta,new_keys__12901,new_strobj__12897));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12896.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12909 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12909.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12955 = null;
var G__12955__12956 = (function (coll,k){
var this__12912 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12955__12957 = (function (coll,k,not_found){
var this__12915 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12955 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12955__12956.call(this,coll,k);
case  3 :
return G__12955__12957.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12955;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12919 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12922 = this;
if(cljs.core.truth_((this__12922.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12869_SHARP_){
return cljs.core.vector.call(null,p1__12869_SHARP_,(this__12922.strobj[p1__12869_SHARP_]));
}),this__12922.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12929 = this;
return this__12929.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12931 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12933 = this;
return (new cljs.core.ObjMap(meta,this__12933.keys,this__12933.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12934 = this;
return this__12934.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12940 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12940.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12942 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12945 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12945))
{return this__12942.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12945;
}
})()))
{var new_keys__12949 = cljs.core.aclone.call(null,this__12942.keys);
var new_strobj__12950 = goog.object.clone.call(null,this__12942.strobj);

new_keys__12949.splice(cljs.core.scan_array.call(null,1,k,new_keys__12949),1);
cljs.core.js_delete.call(null,new_strobj__12950,k);
return (new cljs.core.ObjMap(this__12942.meta,new_keys__12949,new_strobj__12950));
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
var this__12983 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13066 = null;
var G__13066__13067 = (function (coll,k){
var this__12986 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13066__13068 = (function (coll,k,not_found){
var this__12988 = this;
var bucket__12989 = (this__12988.hashobj[cljs.core.hash.call(null,k)]);
var i__12991 = (cljs.core.truth_(bucket__12989)?cljs.core.scan_array.call(null,2,k,bucket__12989):null);

if(cljs.core.truth_(i__12991))
{return (bucket__12989[(i__12991 + 1)]);
} else
{return not_found;
}
});
G__13066 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13066__13067.call(this,coll,k);
case  3 :
return G__13066__13068.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13066;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12995 = this;
var h__12997 = cljs.core.hash.call(null,k);
var bucket__12998 = (this__12995.hashobj[h__12997]);

if(cljs.core.truth_(bucket__12998))
{var new_bucket__13001 = cljs.core.aclone.call(null,bucket__12998);
var new_hashobj__13002 = goog.object.clone.call(null,this__12995.hashobj);

(new_hashobj__13002[h__12997] = new_bucket__13001);
var temp__3695__auto____13005 = cljs.core.scan_array.call(null,2,k,new_bucket__13001);

if(cljs.core.truth_(temp__3695__auto____13005))
{var i__13007 = temp__3695__auto____13005;

(new_bucket__13001[(i__13007 + 1)] = v);
return (new cljs.core.HashMap(this__12995.meta,this__12995.count,new_hashobj__13002));
} else
{new_bucket__13001.push(k,v);
return (new cljs.core.HashMap(this__12995.meta,(this__12995.count + 1),new_hashobj__13002));
}
} else
{var new_hashobj__13012 = goog.object.clone.call(null,this__12995.hashobj);

(new_hashobj__13012[h__12997] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12995.meta,(this__12995.count + 1),new_hashobj__13012));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13014 = this;
var bucket__13016 = (this__13014.hashobj[cljs.core.hash.call(null,k)]);
var i__13017 = (cljs.core.truth_(bucket__13016)?cljs.core.scan_array.call(null,2,k,bucket__13016):null);

if(cljs.core.truth_(i__13017))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13116 = null;
var G__13116__13118 = (function (coll,k){
var this__13021 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13116__13119 = (function (coll,k,not_found){
var this__13024 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13116 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13116__13118.call(this,coll,k);
case  3 :
return G__13116__13119.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13116;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13027 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13032 = this;
if(cljs.core.truth_((this__13032.count > 0)))
{var hashes__13034 = cljs.core.js_keys.call(null,this__13032.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12972_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13032.hashobj[p1__12972_SHARP_])));
}),hashes__13034);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13036 = this;
return this__13036.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13037 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13041 = this;
return (new cljs.core.HashMap(meta,this__13041.count,this__13041.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13044 = this;
return this__13044.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13046 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13046.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13048 = this;
var h__13050 = cljs.core.hash.call(null,k);
var bucket__13051 = (this__13048.hashobj[h__13050]);
var i__13053 = (cljs.core.truth_(bucket__13051)?cljs.core.scan_array.call(null,2,k,bucket__13051):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13053)))
{return coll;
} else
{var new_hashobj__13055 = goog.object.clone.call(null,this__13048.hashobj);

if(cljs.core.truth_((3 > bucket__13051.length)))
{cljs.core.js_delete.call(null,new_hashobj__13055,h__13050);
} else
{var new_bucket__13060 = cljs.core.aclone.call(null,bucket__13051);

new_bucket__13060.splice(i__13053,2);
(new_hashobj__13055[h__13050] = new_bucket__13060);
}
return (new cljs.core.HashMap(this__13048.meta,(this__13048.count - 1),new_hashobj__13055));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13145 = ks.length;

var i__13147 = 0;
var out__13149 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13147 < len__13145)))
{{
var G__13156 = (i__13147 + 1);
var G__13157 = cljs.core.assoc.call(null,out__13149,(ks[i__13147]),(vs[i__13147]));
i__13147 = G__13156;
out__13149 = G__13157;
continue;
}
} else
{return out__13149;
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
var in$__13158 = cljs.core.seq.call(null,keyvals);
var out__13161 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13158))
{{
var G__13229 = cljs.core.nnext.call(null,in$__13158);
var G__13230 = cljs.core.assoc.call(null,out__13161,cljs.core.first.call(null,in$__13158),cljs.core.second.call(null,in$__13158));
in$__13158 = G__13229;
out__13161 = G__13230;
continue;
}
} else
{return out__13161;
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
hash_map.cljs$lang$applyTo = (function (arglist__13232){
var keyvals = cljs.core.seq( arglist__13232 );;
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
{return cljs.core.reduce.call(null,(function (p1__13235_SHARP_,p2__13236_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13242 = p1__13235_SHARP_;

if(cljs.core.truth_(or__3548__auto____13242))
{return or__3548__auto____13242;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13236_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13246){
var maps = cljs.core.seq( arglist__13246 );;
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
{var merge_entry__13252 = (function (m,e){
var k__13250 = cljs.core.first.call(null,e);
var v__13251 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13250)))
{return cljs.core.assoc.call(null,m,k__13250,f.call(null,cljs.core.get.call(null,m,k__13250),v__13251));
} else
{return cljs.core.assoc.call(null,m,k__13250,v__13251);
}
});
var merge2__13254 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13252,(function (){var or__3548__auto____13253 = m1;

if(cljs.core.truth_(or__3548__auto____13253))
{return or__3548__auto____13253;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13254,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13259){
var f = cljs.core.first(arglist__13259);
var maps = cljs.core.rest(arglist__13259);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13261 = cljs.core.ObjMap.fromObject([],{});
var keys__13262 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13262))
{var key__13264 = cljs.core.first.call(null,keys__13262);
var entry__13265 = cljs.core.get.call(null,map,key__13264,"﷐'user/not-found");

{
var G__13268 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13265,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13261,key__13264,entry__13265):ret__13261);
var G__13270 = cljs.core.next.call(null,keys__13262);
ret__13261 = G__13268;
keys__13262 = G__13270;
continue;
}
} else
{return ret__13261;
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
var this__13280 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13374 = null;
var G__13374__13375 = (function (coll,v){
var this__13282 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13374__13376 = (function (coll,v,not_found){
var this__13283 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13283.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13374 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13374__13375.call(this,coll,v);
case  3 :
return G__13374__13376.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13374;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13385 = null;
var G__13385__13386 = (function (coll,k){
var this__13284 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13385__13387 = (function (coll,k,not_found){
var this__13285 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13385 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13385__13386.call(this,coll,k);
case  3 :
return G__13385__13387.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13385;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13291 = this;
return (new cljs.core.Set(this__13291.meta,cljs.core.assoc.call(null,this__13291.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13294 = this;
return cljs.core.keys.call(null,this__13294.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13297 = this;
return (new cljs.core.Set(this__13297.meta,cljs.core.dissoc.call(null,this__13297.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13321 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13326 = this;
var and__3546__auto____13327 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13327))
{var and__3546__auto____13328 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13328))
{return cljs.core.every_QMARK_.call(null,(function (p1__13260_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13260_SHARP_);
}),other);
} else
{return and__3546__auto____13328;
}
} else
{return and__3546__auto____13327;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13334 = this;
return (new cljs.core.Set(meta,this__13334.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13336 = this;
return this__13336.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13338 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13338.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13412 = cljs.core.seq.call(null,coll);
var out__13413 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13412))))
{{
var G__13417 = cljs.core.rest.call(null,in$__13412);
var G__13418 = cljs.core.conj.call(null,out__13413,cljs.core.first.call(null,in$__13412));
in$__13412 = G__13417;
out__13413 = G__13418;
continue;
}
} else
{return out__13413;
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
{var n__13423 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13426 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13426))
{var e__13427 = temp__3695__auto____13426;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13427));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13423,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13409_SHARP_){
var temp__3695__auto____13428 = cljs.core.find.call(null,smap,p1__13409_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13428))
{var e__13429 = temp__3695__auto____13428;

return cljs.core.second.call(null,e__13429);
} else
{return p1__13409_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13438 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13430,seen){
while(true){
var vec__13431__13432 = p__13430;
var f__13433 = cljs.core.nth.call(null,vec__13431__13432,0,null);
var xs__13434 = vec__13431__13432;

var temp__3698__auto____13435 = cljs.core.seq.call(null,xs__13434);

if(cljs.core.truth_(temp__3698__auto____13435))
{var s__13436 = temp__3698__auto____13435;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13433)))
{{
var G__13440 = cljs.core.rest.call(null,s__13436);
var G__13441 = seen;
p__13430 = G__13440;
seen = G__13441;
continue;
}
} else
{return cljs.core.cons.call(null,f__13433,step.call(null,cljs.core.rest.call(null,s__13436),cljs.core.conj.call(null,seen,f__13433)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13438.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13444 = cljs.core.Vector.fromArray([]);
var s__13445 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13445)))
{{
var G__13457 = cljs.core.conj.call(null,ret__13444,cljs.core.first.call(null,s__13445));
var G__13458 = cljs.core.next.call(null,s__13445);
ret__13444 = G__13457;
s__13445 = G__13458;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13444);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13466 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13466))
{return or__3548__auto____13466;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13468 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13468 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13468 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13486 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13486))
{return or__3548__auto____13486;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13488 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13488 > -1)))
{return cljs.core.subs.call(null,x,2,i__13488);
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
var map__13500 = cljs.core.ObjMap.fromObject([],{});
var ks__13502 = cljs.core.seq.call(null,keys);
var vs__13505 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13507 = ks__13502;

if(cljs.core.truth_(and__3546__auto____13507))
{return vs__13505;
} else
{return and__3546__auto____13507;
}
})()))
{{
var G__13518 = cljs.core.assoc.call(null,map__13500,cljs.core.first.call(null,ks__13502),cljs.core.first.call(null,vs__13505));
var G__13519 = cljs.core.next.call(null,ks__13502);
var G__13520 = cljs.core.next.call(null,vs__13505);
map__13500 = G__13518;
ks__13502 = G__13519;
vs__13505 = G__13520;
continue;
}
} else
{return map__13500;
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
var max_key__13528 = (function (k,x){
return x;
});
var max_key__13529 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13531 = (function() { 
var G__13533__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13495_SHARP_,p2__13496_SHARP_){
return max_key.call(null,k,p1__13495_SHARP_,p2__13496_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13533 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13533__delegate.call(this, k, x, y, more);
};
G__13533.cljs$lang$maxFixedArity = 3;
G__13533.cljs$lang$applyTo = (function (arglist__13540){
var k = cljs.core.first(arglist__13540);
var x = cljs.core.first(cljs.core.next(arglist__13540));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13540)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13540)));
return G__13533__delegate.call(this, k, x, y, more);
});
return G__13533;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13528.call(this,k,x);
case  3 :
return max_key__13529.call(this,k,x,y);
default:
return max_key__13531.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13531.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13547 = (function (k,x){
return x;
});
var min_key__13548 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13549 = (function() { 
var G__13551__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13523_SHARP_,p2__13524_SHARP_){
return min_key.call(null,k,p1__13523_SHARP_,p2__13524_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13551 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13551__delegate.call(this, k, x, y, more);
};
G__13551.cljs$lang$maxFixedArity = 3;
G__13551.cljs$lang$applyTo = (function (arglist__13552){
var k = cljs.core.first(arglist__13552);
var x = cljs.core.first(cljs.core.next(arglist__13552));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13552)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13552)));
return G__13551__delegate.call(this, k, x, y, more);
});
return G__13551;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13547.call(this,k,x);
case  3 :
return min_key__13548.call(this,k,x,y);
default:
return min_key__13549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13549.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13565 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13566 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13561 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13561))
{var s__13562 = temp__3698__auto____13561;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13562),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13562)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13565.call(this,n,step);
case  3 :
return partition_all__13566.call(this,n,step,coll);
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
var temp__3698__auto____13612 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13612))
{var s__13613 = temp__3698__auto____13612;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13613))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13613),take_while.call(null,pred,cljs.core.rest.call(null,s__13613)));
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
var this__13630 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13636 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13781 = null;
var G__13781__13788 = (function (rng,f){
var this__13640 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13781__13789 = (function (rng,f,s){
var this__13641 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13781 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13781__13788.call(this,rng,f);
case  3 :
return G__13781__13789.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13781;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13643 = this;
var comp__13644 = (cljs.core.truth_((this__13643.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13644.call(null,this__13643.start,this__13643.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13645 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13645.end - this__13645.start) / this__13645.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13646 = this;
return this__13646.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13647 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13647.meta,(this__13647.start + this__13647.step),this__13647.end,this__13647.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13652 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13654 = this;
return (new cljs.core.Range(meta,this__13654.start,this__13654.end,this__13654.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13656 = this;
return this__13656.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13805 = null;
var G__13805__13806 = (function (rng,n){
var this__13657 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13657.start + (n * this__13657.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13658 = (this__13657.start > this__13657.end);

if(cljs.core.truth_(and__3546__auto____13658))
{return cljs.core._EQ_.call(null,this__13657.step,0);
} else
{return and__3546__auto____13658;
}
})()))
{return this__13657.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13805__13807 = (function (rng,n,not_found){
var this__13765 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13765.start + (n * this__13765.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13768 = (this__13765.start > this__13765.end);

if(cljs.core.truth_(and__3546__auto____13768))
{return cljs.core._EQ_.call(null,this__13765.step,0);
} else
{return and__3546__auto____13768;
}
})()))
{return this__13765.start;
} else
{return not_found;
}
}
});
G__13805 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13805__13806.call(this,rng,n);
case  3 :
return G__13805__13807.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13805;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13771 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13771.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13845 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13846 = (function (end){
return range.call(null,0,end,1);
});
var range__13847 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13848 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13845.call(this);
case  1 :
return range__13846.call(this,start);
case  2 :
return range__13847.call(this,start,end);
case  3 :
return range__13848.call(this,start,end,step);
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
var temp__3698__auto____13860 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13860))
{var s__13862 = temp__3698__auto____13860;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13862),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13862)));
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
var temp__3698__auto____13876 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13876))
{var s__13877 = temp__3698__auto____13876;

var fst__13880 = cljs.core.first.call(null,s__13877);
var fv__13881 = f.call(null,fst__13880);
var run__13883 = cljs.core.cons.call(null,fst__13880,cljs.core.take_while.call(null,(function (p1__13870_SHARP_){
return cljs.core._EQ_.call(null,fv__13881,f.call(null,p1__13870_SHARP_));
}),cljs.core.next.call(null,s__13877)));

return cljs.core.cons.call(null,run__13883,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13883),s__13877))));
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
var reductions__14093 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14076 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14076))
{var s__14078 = temp__3695__auto____14076;

return reductions.call(null,f,cljs.core.first.call(null,s__14078),cljs.core.rest.call(null,s__14078));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14094 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14081 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14081))
{var s__14082 = temp__3698__auto____14081;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14082)),cljs.core.rest.call(null,s__14082));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14093.call(this,f,init);
case  3 :
return reductions__14094.call(this,f,init,coll);
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
var juxt__14369 = (function (f){
return (function() {
var G__14374 = null;
var G__14374__14375 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14374__14376 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14374__14377 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14374__14378 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14374__14379 = (function() { 
var G__14383__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14383 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14383__delegate.call(this, x, y, z, args);
};
G__14383.cljs$lang$maxFixedArity = 3;
G__14383.cljs$lang$applyTo = (function (arglist__14389){
var x = cljs.core.first(arglist__14389);
var y = cljs.core.first(cljs.core.next(arglist__14389));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14389)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14389)));
return G__14383__delegate.call(this, x, y, z, args);
});
return G__14383;
})()
;
G__14374 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14374__14375.call(this);
case  1 :
return G__14374__14376.call(this,x);
case  2 :
return G__14374__14377.call(this,x,y);
case  3 :
return G__14374__14378.call(this,x,y,z);
default:
return G__14374__14379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14374.cljs$lang$maxFixedArity = 3;
G__14374.cljs$lang$applyTo = G__14374__14379.cljs$lang$applyTo;
return G__14374;
})()
});
var juxt__14370 = (function (f,g){
return (function() {
var G__14395 = null;
var G__14395__14396 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14395__14397 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14395__14398 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14395__14399 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14395__14401 = (function() { 
var G__14410__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14410 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14410__delegate.call(this, x, y, z, args);
};
G__14410.cljs$lang$maxFixedArity = 3;
G__14410.cljs$lang$applyTo = (function (arglist__14411){
var x = cljs.core.first(arglist__14411);
var y = cljs.core.first(cljs.core.next(arglist__14411));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14411)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14411)));
return G__14410__delegate.call(this, x, y, z, args);
});
return G__14410;
})()
;
G__14395 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14395__14396.call(this);
case  1 :
return G__14395__14397.call(this,x);
case  2 :
return G__14395__14398.call(this,x,y);
case  3 :
return G__14395__14399.call(this,x,y,z);
default:
return G__14395__14401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14395.cljs$lang$maxFixedArity = 3;
G__14395.cljs$lang$applyTo = G__14395__14401.cljs$lang$applyTo;
return G__14395;
})()
});
var juxt__14371 = (function (f,g,h){
return (function() {
var G__14414 = null;
var G__14414__14415 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14414__14416 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14414__14417 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14414__14418 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14414__14419 = (function() { 
var G__14423__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14423 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14423__delegate.call(this, x, y, z, args);
};
G__14423.cljs$lang$maxFixedArity = 3;
G__14423.cljs$lang$applyTo = (function (arglist__14427){
var x = cljs.core.first(arglist__14427);
var y = cljs.core.first(cljs.core.next(arglist__14427));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14427)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14427)));
return G__14423__delegate.call(this, x, y, z, args);
});
return G__14423;
})()
;
G__14414 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14414__14415.call(this);
case  1 :
return G__14414__14416.call(this,x);
case  2 :
return G__14414__14417.call(this,x,y);
case  3 :
return G__14414__14418.call(this,x,y,z);
default:
return G__14414__14419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14414.cljs$lang$maxFixedArity = 3;
G__14414.cljs$lang$applyTo = G__14414__14419.cljs$lang$applyTo;
return G__14414;
})()
});
var juxt__14372 = (function() { 
var G__14433__delegate = function (f,g,h,fs){
var fs__14131 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14437 = null;
var G__14437__14438 = (function (){
return cljs.core.reduce.call(null,(function (p1__14051_SHARP_,p2__14052_SHARP_){
return cljs.core.conj.call(null,p1__14051_SHARP_,p2__14052_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14131);
});
var G__14437__14439 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14055_SHARP_,p2__14056_SHARP_){
return cljs.core.conj.call(null,p1__14055_SHARP_,p2__14056_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14131);
});
var G__14437__14440 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14059_SHARP_,p2__14060_SHARP_){
return cljs.core.conj.call(null,p1__14059_SHARP_,p2__14060_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14131);
});
var G__14437__14441 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14067_SHARP_,p2__14070_SHARP_){
return cljs.core.conj.call(null,p1__14067_SHARP_,p2__14070_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14131);
});
var G__14437__14442 = (function() { 
var G__14459__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14071_SHARP_,p2__14072_SHARP_){
return cljs.core.conj.call(null,p1__14071_SHARP_,cljs.core.apply.call(null,p2__14072_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14131);
};
var G__14459 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14459__delegate.call(this, x, y, z, args);
};
G__14459.cljs$lang$maxFixedArity = 3;
G__14459.cljs$lang$applyTo = (function (arglist__14463){
var x = cljs.core.first(arglist__14463);
var y = cljs.core.first(cljs.core.next(arglist__14463));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14463)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14463)));
return G__14459__delegate.call(this, x, y, z, args);
});
return G__14459;
})()
;
G__14437 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14437__14438.call(this);
case  1 :
return G__14437__14439.call(this,x);
case  2 :
return G__14437__14440.call(this,x,y);
case  3 :
return G__14437__14441.call(this,x,y,z);
default:
return G__14437__14442.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14437.cljs$lang$maxFixedArity = 3;
G__14437.cljs$lang$applyTo = G__14437__14442.cljs$lang$applyTo;
return G__14437;
})()
};
var G__14433 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14433__delegate.call(this, f, g, h, fs);
};
G__14433.cljs$lang$maxFixedArity = 3;
G__14433.cljs$lang$applyTo = (function (arglist__14464){
var f = cljs.core.first(arglist__14464);
var g = cljs.core.first(cljs.core.next(arglist__14464));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14464)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14464)));
return G__14433__delegate.call(this, f, g, h, fs);
});
return G__14433;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14369.call(this,f);
case  2 :
return juxt__14370.call(this,f,g);
case  3 :
return juxt__14371.call(this,f,g,h);
default:
return juxt__14372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14372.cljs$lang$applyTo;
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
var dorun__14479 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14485 = cljs.core.next.call(null,coll);
coll = G__14485;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14480 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14473 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14473))
{return (n > 0);
} else
{return and__3546__auto____14473;
}
})()))
{{
var G__14490 = (n - 1);
var G__14491 = cljs.core.next.call(null,coll);
n = G__14490;
coll = G__14491;
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
return dorun__14479.call(this,n);
case  2 :
return dorun__14480.call(this,n,coll);
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
var doall__14502 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14503 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14502.call(this,n);
case  2 :
return doall__14503.call(this,n,coll);
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
var matches__14513 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14513),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14513),1)))
{return cljs.core.first.call(null,matches__14513);
} else
{return cljs.core.vec.call(null,matches__14513);
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
var matches__14605 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14605)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14605),1)))
{return cljs.core.first.call(null,matches__14605);
} else
{return cljs.core.vec.call(null,matches__14605);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14630 = cljs.core.re_find.call(null,re,s);
var match_idx__14633 = s.search(re);
var match_str__14634 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14630))?cljs.core.first.call(null,match_data__14630):match_data__14630);
var post_match__14635 = cljs.core.subs.call(null,s,(match_idx__14633 + cljs.core.count.call(null,match_str__14634)));

if(cljs.core.truth_(match_data__14630))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14630,re_seq.call(null,re,post_match__14635));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14642_SHARP_){
return print_one.call(null,p1__14642_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14656 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14656))
{var and__3546__auto____14668 = (function (){var x__445__auto____14659 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14661 = x__445__auto____14659;

if(cljs.core.truth_(and__3546__auto____14661))
{var and__3546__auto____14665 = x__445__auto____14659.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14665))
{return cljs.core.not.call(null,x__445__auto____14659.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14665;
}
} else
{return and__3546__auto____14661;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14659);
}
})();

if(cljs.core.truth_(and__3546__auto____14668))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14668;
}
} else
{return and__3546__auto____14656;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14669 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14672 = x__445__auto____14669;

if(cljs.core.truth_(and__3546__auto____14672))
{var and__3546__auto____14673 = x__445__auto____14669.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14673))
{return cljs.core.not.call(null,x__445__auto____14669.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14673;
}
} else
{return and__3546__auto____14672;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14669);
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
var first_obj__14698 = cljs.core.first.call(null,objs);
var sb__14701 = (new goog.string.StringBuffer());

var G__14702__14703 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14702__14703))
{var obj__14704 = cljs.core.first.call(null,G__14702__14703);
var G__14702__14705 = G__14702__14703;

while(true){
if(cljs.core.truth_((obj__14704 === first_obj__14698)))
{} else
{sb__14701.append(" ");
}
var G__14706__14707 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14704,opts));

if(cljs.core.truth_(G__14706__14707))
{var string__14708 = cljs.core.first.call(null,G__14706__14707);
var G__14706__14709 = G__14706__14707;

while(true){
sb__14701.append(string__14708);
var temp__3698__auto____14710 = cljs.core.next.call(null,G__14706__14709);

if(cljs.core.truth_(temp__3698__auto____14710))
{var G__14706__14711 = temp__3698__auto____14710;

{
var G__14714 = cljs.core.first.call(null,G__14706__14711);
var G__14715 = G__14706__14711;
string__14708 = G__14714;
G__14706__14709 = G__14715;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14712 = cljs.core.next.call(null,G__14702__14705);

if(cljs.core.truth_(temp__3698__auto____14712))
{var G__14702__14713 = temp__3698__auto____14712;

{
var G__14716 = cljs.core.first.call(null,G__14702__14713);
var G__14717 = G__14702__14713;
obj__14704 = G__14716;
G__14702__14705 = G__14717;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14701);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14721 = cljs.core.first.call(null,objs);

var G__14722__14723 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14722__14723))
{var obj__14725 = cljs.core.first.call(null,G__14722__14723);
var G__14722__14726 = G__14722__14723;

while(true){
if(cljs.core.truth_((obj__14725 === first_obj__14721)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14727__14728 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14725,opts));

if(cljs.core.truth_(G__14727__14728))
{var string__14729 = cljs.core.first.call(null,G__14727__14728);
var G__14727__14730 = G__14727__14728;

while(true){
cljs.core.string_print.call(null,string__14729);
var temp__3698__auto____14731 = cljs.core.next.call(null,G__14727__14730);

if(cljs.core.truth_(temp__3698__auto____14731))
{var G__14727__14732 = temp__3698__auto____14731;

{
var G__14738 = cljs.core.first.call(null,G__14727__14732);
var G__14739 = G__14727__14732;
string__14729 = G__14738;
G__14727__14730 = G__14739;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14733 = cljs.core.next.call(null,G__14722__14726);

if(cljs.core.truth_(temp__3698__auto____14733))
{var G__14722__14734 = temp__3698__auto____14733;

{
var G__14740 = cljs.core.first.call(null,G__14722__14734);
var G__14741 = G__14722__14734;
obj__14725 = G__14740;
G__14722__14726 = G__14741;
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
pr_str.cljs$lang$applyTo = (function (arglist__14743){
var objs = cljs.core.seq( arglist__14743 );;
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
pr.cljs$lang$applyTo = (function (arglist__14745){
var objs = cljs.core.seq( arglist__14745 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14746){
var objs = cljs.core.seq( arglist__14746 );;
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
println.cljs$lang$applyTo = (function (arglist__14752){
var objs = cljs.core.seq( arglist__14752 );;
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
prn.cljs$lang$applyTo = (function (arglist__14760){
var objs = cljs.core.seq( arglist__14760 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14763 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14763,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14790 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14790))
{var nspc__14792 = temp__3698__auto____14790;

return cljs.core.str.call(null,nspc__14792,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14795 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14795))
{var nspc__14796 = temp__3698__auto____14795;

return cljs.core.str.call(null,nspc__14796,"/");
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
var pr_pair__14984 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14984,"{",", ","}",opts,coll);
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
var this__15011 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__15014 = this;
var G__15015__15016 = cljs.core.seq.call(null,this__15014.watches);

if(cljs.core.truth_(G__15015__15016))
{var G__15018__15021 = cljs.core.first.call(null,G__15015__15016);
var vec__15019__15023 = G__15018__15021;
var key__15025 = cljs.core.nth.call(null,vec__15019__15023,0,null);
var f__15026 = cljs.core.nth.call(null,vec__15019__15023,1,null);
var G__15015__15027 = G__15015__15016;

var G__15018__15028 = G__15018__15021;
var G__15015__15029 = G__15015__15027;

while(true){
var vec__15030__15031 = G__15018__15028;
var key__15032 = cljs.core.nth.call(null,vec__15030__15031,0,null);
var f__15033 = cljs.core.nth.call(null,vec__15030__15031,1,null);
var G__15015__15034 = G__15015__15029;

f__15033.call(null,key__15032,this$,oldval,newval);
var temp__3698__auto____15037 = cljs.core.next.call(null,G__15015__15034);

if(cljs.core.truth_(temp__3698__auto____15037))
{var G__15015__15038 = temp__3698__auto____15037;

{
var G__15059 = cljs.core.first.call(null,G__15015__15038);
var G__15060 = G__15015__15038;
G__15018__15028 = G__15059;
G__15015__15029 = G__15060;
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
var this__15042 = this;
return this$.watches = cljs.core.assoc.call(null,this__15042.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__15044 = this;
return this$.watches = cljs.core.dissoc.call(null,this__15044.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__15046 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__15046.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__15049 = this;
return this__15049.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15054 = this;
return this__15054.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__15056 = this;
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
var atom__15101 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__15103 = (function() { 
var G__15106__delegate = function (x,p__15062){
var map__15064__15066 = p__15062;
var map__15064__15069 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15064__15066))?cljs.core.apply.call(null,cljs.core.hash_map,map__15064__15066):map__15064__15066);
var validator__15071 = cljs.core.get.call(null,map__15064__15069,"﷐'validator");
var meta__15073 = cljs.core.get.call(null,map__15064__15069,"﷐'meta");

return (new cljs.core.Atom(x,meta__15073,validator__15071,null));
};
var G__15106 = function (x,var_args){
var p__15062 = null;
if (goog.isDef(var_args)) {
  p__15062 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15106__delegate.call(this, x, p__15062);
};
G__15106.cljs$lang$maxFixedArity = 1;
G__15106.cljs$lang$applyTo = (function (arglist__15108){
var x = cljs.core.first(arglist__15108);
var p__15062 = cljs.core.rest(arglist__15108);
return G__15106__delegate.call(this, x, p__15062);
});
return G__15106;
})()
;
atom = function(x,var_args){
var p__15062 = var_args;
switch(arguments.length){
case  1 :
return atom__15101.call(this,x);
default:
return atom__15103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__15103.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____15111 = a.validator;

if(cljs.core.truth_(temp__3698__auto____15111))
{var validate__15112 = temp__3698__auto____15111;

if(cljs.core.truth_(validate__15112.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__15113 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__15113,new_value);
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
var swap_BANG___15176 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___15177 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___15178 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___15180 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___15300 = (function() { 
var G__15304__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__15304 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__15304__delegate.call(this, a, f, x, y, z, more);
};
G__15304.cljs$lang$maxFixedArity = 5;
G__15304.cljs$lang$applyTo = (function (arglist__15308){
var a = cljs.core.first(arglist__15308);
var f = cljs.core.first(cljs.core.next(arglist__15308));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__15308)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15308))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15308)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__15308)))));
return G__15304__delegate.call(this, a, f, x, y, z, more);
});
return G__15304;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___15176.call(this,a,f);
case  3 :
return swap_BANG___15177.call(this,a,f,x);
case  4 :
return swap_BANG___15178.call(this,a,f,x,y);
case  5 :
return swap_BANG___15180.call(this,a,f,x,y,z);
default:
return swap_BANG___15300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___15300.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15339){
var iref = cljs.core.first(arglist__15339);
var f = cljs.core.first(cljs.core.next(arglist__15339));
var args = cljs.core.rest(cljs.core.next(arglist__15339));
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
var gensym__15346 = (function (){
return gensym.call(null,"G__");
});
var gensym__15347 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15346.call(this);
case  1 :
return gensym__15347.call(this,prefix_string);
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
var this__15356 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15356.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15357 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15357.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15357.state,this__15357.f);
}
return cljs.core.deref.call(null,this__15357.state);
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
delay.cljs$lang$applyTo = (function (arglist__15358){
var body = cljs.core.seq( arglist__15358 );;
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
var map__15361__15362 = options;
var map__15361__15363 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15361__15362))?cljs.core.apply.call(null,cljs.core.hash_map,map__15361__15362):map__15361__15362);
var keywordize_keys__15364 = cljs.core.get.call(null,map__15361__15363,"﷐'keywordize-keys");
var keyfn__15365 = (cljs.core.truth_(keywordize_keys__15364)?cljs.core.keyword:cljs.core.str);
var f__15373 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15372 = (function iter__15366(s__15367){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15367__15370 = s__15367;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15367__15370)))
{var k__15371 = cljs.core.first.call(null,s__15367__15370);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15365.call(null,k__15371),thisfn.call(null,(x[k__15371]))]),iter__15366.call(null,cljs.core.rest.call(null,s__15367__15370)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15372.call(null,cljs.core.js_keys.call(null,x));
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

return f__15373.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15380){
var x = cljs.core.first(arglist__15380);
var options = cljs.core.rest(arglist__15380);
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
var mem__15382 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15392__delegate = function (args){
var temp__3695__auto____15383 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15382),args);

if(cljs.core.truth_(temp__3695__auto____15383))
{var v__15384 = temp__3695__auto____15383;

return v__15384;
} else
{var ret__15385 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15382,cljs.core.assoc,args,ret__15385);
return ret__15385;
}
};
var G__15392 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15392__delegate.call(this, args);
};
G__15392.cljs$lang$maxFixedArity = 0;
G__15392.cljs$lang$applyTo = (function (arglist__15395){
var args = cljs.core.seq( arglist__15395 );;
return G__15392__delegate.call(this, args);
});
return G__15392;
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
var trampoline__15397 = (function (f){
while(true){
var ret__15396 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15396)))
{{
var G__15400 = ret__15396;
f = G__15400;
continue;
}
} else
{return ret__15396;
}
break;
}
});
var trampoline__15398 = (function() { 
var G__15401__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15401 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15401__delegate.call(this, f, args);
};
G__15401.cljs$lang$maxFixedArity = 1;
G__15401.cljs$lang$applyTo = (function (arglist__15402){
var f = cljs.core.first(arglist__15402);
var args = cljs.core.rest(arglist__15402);
return G__15401__delegate.call(this, f, args);
});
return G__15401;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15397.call(this,f);
default:
return trampoline__15398.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15398.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15403 = (function (){
return rand.call(null,1);
});
var rand__15404 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15403.call(this);
case  1 :
return rand__15404.call(this,n);
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
var k__15482 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15482,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15482,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15505 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15506 = (function (h,child,parent){
var or__3548__auto____15492 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15492))
{return or__3548__auto____15492;
} else
{var or__3548__auto____15493 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15493))
{return or__3548__auto____15493;
} else
{var and__3546__auto____15496 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15496))
{var and__3546__auto____15497 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15497))
{var and__3546__auto____15498 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15498))
{var ret__15499 = true;
var i__15500 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15501 = cljs.core.not.call(null,ret__15499);

if(cljs.core.truth_(or__3548__auto____15501))
{return or__3548__auto____15501;
} else
{return cljs.core._EQ_.call(null,i__15500,cljs.core.count.call(null,parent));
}
})()))
{return ret__15499;
} else
{{
var G__15511 = isa_QMARK_.call(null,h,child.call(null,i__15500),parent.call(null,i__15500));
var G__15512 = (i__15500 + 1);
ret__15499 = G__15511;
i__15500 = G__15512;
continue;
}
}
break;
}
} else
{return and__3546__auto____15498;
}
} else
{return and__3546__auto____15497;
}
} else
{return and__3546__auto____15496;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15505.call(this,h,child);
case  3 :
return isa_QMARK___15506.call(this,h,child,parent);
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
var parents__15515 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15516 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15515.call(this,h);
case  2 :
return parents__15516.call(this,h,tag);
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
var ancestors__15519 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15520 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15519.call(this,h);
case  2 :
return ancestors__15520.call(this,h,tag);
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
var descendants__15522 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15523 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15522.call(this,h);
case  2 :
return descendants__15523.call(this,h,tag);
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
var derive__15538 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15539 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15529 = "﷐'parents".call(null,h);
var td__15530 = "﷐'descendants".call(null,h);
var ta__15531 = "﷐'ancestors".call(null,h);
var tf__15532 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15537 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15529.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15531.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15531.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15529,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15532.call(null,"﷐'ancestors".call(null,h),tag,td__15530,parent,ta__15531),"﷐'descendants":tf__15532.call(null,"﷐'descendants".call(null,h),parent,ta__15531,tag,td__15530)});
})());

if(cljs.core.truth_(or__3548__auto____15537))
{return or__3548__auto____15537;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15538.call(this,h,tag);
case  3 :
return derive__15539.call(this,h,tag,parent);
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
var underive__15555 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15556 = (function (h,tag,parent){
var parentMap__15546 = "﷐'parents".call(null,h);
var childsParents__15547 = (cljs.core.truth_(parentMap__15546.call(null,tag))?cljs.core.disj.call(null,parentMap__15546.call(null,tag),parent):cljs.core.set([]));
var newParents__15549 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15547))?cljs.core.assoc.call(null,parentMap__15546,tag,childsParents__15547):cljs.core.dissoc.call(null,parentMap__15546,tag));
var deriv_seq__15551 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15525_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15525_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15525_SHARP_),cljs.core.second.call(null,p1__15525_SHARP_)));
}),cljs.core.seq.call(null,newParents__15549)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15546.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15526_SHARP_,p2__15527_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15526_SHARP_,p2__15527_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15551));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15555.call(this,h,tag);
case  3 :
return underive__15556.call(this,h,tag,parent);
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
var xprefs__15558 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15560 = (cljs.core.truth_((function (){var and__3546__auto____15559 = xprefs__15558;

if(cljs.core.truth_(and__3546__auto____15559))
{return xprefs__15558.call(null,y);
} else
{return and__3546__auto____15559;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15560))
{return or__3548__auto____15560;
} else
{var or__3548__auto____15564 = (function (){var ps__15561 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15561) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15561),prefer_table)))
{} else
{}
{
var G__15572 = cljs.core.rest.call(null,ps__15561);
ps__15561 = G__15572;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15564))
{return or__3548__auto____15564;
} else
{var or__3548__auto____15567 = (function (){var ps__15565 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15565) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15565),y,prefer_table)))
{} else
{}
{
var G__15589 = cljs.core.rest.call(null,ps__15565);
ps__15565 = G__15589;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15567))
{return or__3548__auto____15567;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15598 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15598))
{return or__3548__auto____15598;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15614 = cljs.core.reduce.call(null,(function (be,p__15601){
var vec__15602__15606 = p__15601;
var k__15607 = cljs.core.nth.call(null,vec__15602__15606,0,null);
var ___15608 = cljs.core.nth.call(null,vec__15602__15606,1,null);
var e__15609 = vec__15602__15606;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15607)))
{var be2__15611 = (cljs.core.truth_((function (){var or__3548__auto____15610 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15610))
{return or__3548__auto____15610;
} else
{return cljs.core.dominates.call(null,k__15607,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15609:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15611),k__15607,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15607," and ",cljs.core.first.call(null,be2__15611),", and neither is preferred")));
}
return be2__15611;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15614))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15614));
return cljs.core.second.call(null,best_entry__15614);
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
if(cljs.core.truth_((function (){var and__3546__auto____15633 = mf;

if(cljs.core.truth_(and__3546__auto____15633))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15633;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15637 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15637))
{return or__3548__auto____15637;
} else
{var or__3548__auto____15638 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15638))
{return or__3548__auto____15638;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15642 = mf;

if(cljs.core.truth_(and__3546__auto____15642))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15642;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15647 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15647))
{return or__3548__auto____15647;
} else
{var or__3548__auto____15649 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15649))
{return or__3548__auto____15649;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15654 = mf;

if(cljs.core.truth_(and__3546__auto____15654))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15654;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15656 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15656))
{return or__3548__auto____15656;
} else
{var or__3548__auto____15657 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15657))
{return or__3548__auto____15657;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15658 = mf;

if(cljs.core.truth_(and__3546__auto____15658))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15658;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15661 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15661))
{return or__3548__auto____15661;
} else
{var or__3548__auto____15662 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15662))
{return or__3548__auto____15662;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15665 = mf;

if(cljs.core.truth_(and__3546__auto____15665))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15665;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15667 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15667))
{return or__3548__auto____15667;
} else
{var or__3548__auto____15668 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15668))
{return or__3548__auto____15668;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15669 = mf;

if(cljs.core.truth_(and__3546__auto____15669))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15669;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15671 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15671))
{return or__3548__auto____15671;
} else
{var or__3548__auto____15673 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15673))
{return or__3548__auto____15673;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15675 = mf;

if(cljs.core.truth_(and__3546__auto____15675))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15675;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15679 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15679))
{return or__3548__auto____15679;
} else
{var or__3548__auto____15681 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15681))
{return or__3548__auto____15681;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15684 = mf;

if(cljs.core.truth_(and__3546__auto____15684))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15684;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15685 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15685))
{return or__3548__auto____15685;
} else
{var or__3548__auto____15686 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15686))
{return or__3548__auto____15686;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15713 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15714 = cljs.core._get_method.call(null,mf,dispatch_val__15713);

if(cljs.core.truth_(target_fn__15714))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15713)));
}
return cljs.core.apply.call(null,target_fn__15714,args);
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
var this__15719 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15723 = this;
cljs.core.swap_BANG_.call(null,this__15723.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15723.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15723.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15723.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15728 = this;
cljs.core.swap_BANG_.call(null,this__15728.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15728.method_cache,this__15728.method_table,this__15728.cached_hierarchy,this__15728.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15734 = this;
cljs.core.swap_BANG_.call(null,this__15734.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15734.method_cache,this__15734.method_table,this__15734.cached_hierarchy,this__15734.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15737 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15737.cached_hierarchy),cljs.core.deref.call(null,this__15737.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15737.method_cache,this__15737.method_table,this__15737.cached_hierarchy,this__15737.hierarchy);
}
var temp__3695__auto____15738 = cljs.core.deref.call(null,this__15737.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15738))
{var target_fn__15739 = temp__3695__auto____15738;

return target_fn__15739;
} else
{var temp__3695__auto____15740 = cljs.core.find_and_cache_best_method.call(null,this__15737.name,dispatch_val,this__15737.hierarchy,this__15737.method_table,this__15737.prefer_table,this__15737.method_cache,this__15737.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15740))
{var target_fn__15741 = temp__3695__auto____15740;

return target_fn__15741;
} else
{return cljs.core.deref.call(null,this__15737.method_table).call(null,this__15737.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15742 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15742.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15742.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15742.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15742.method_cache,this__15742.method_table,this__15742.cached_hierarchy,this__15742.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15746 = this;
return cljs.core.deref.call(null,this__15746.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15747 = this;
return cljs.core.deref.call(null,this__15747.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15748 = this;
return cljs.core.do_dispatch.call(null,mf,this__15748.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15760__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15760 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15760__delegate.call(this, _, args);
};
G__15760.cljs$lang$maxFixedArity = 1;
G__15760.cljs$lang$applyTo = (function (arglist__15762){
var _ = cljs.core.first(arglist__15762);
var args = cljs.core.rest(arglist__15762);
return G__15760__delegate.call(this, _, args);
});
return G__15760;
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
