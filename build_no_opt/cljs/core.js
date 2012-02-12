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
var or__3548__auto____7259 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7259))
{return or__3548__auto____7259;
} else
{var or__3548__auto____7264 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7264))
{return or__3548__auto____7264;
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
var _invoke__7564 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7290 = this$;

if(cljs.core.truth_(and__3546__auto____7290))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7290;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7293 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{var or__3548__auto____7294 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7294))
{return or__3548__auto____7294;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7565 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7296 = this$;

if(cljs.core.truth_(and__3546__auto____7296))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7296;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7298 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{var or__3548__auto____7299 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7566 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7302 = this$;

if(cljs.core.truth_(and__3546__auto____7302))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7302;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7304 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{var or__3548__auto____7305 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7305))
{return or__3548__auto____7305;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7567 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = this$;

if(cljs.core.truth_(and__3546__auto____7308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7310 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{var or__3548__auto____7312 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7568 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7316 = this$;

if(cljs.core.truth_(and__3546__auto____7316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7319 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
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
var _invoke__7569 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7325 = this$;

if(cljs.core.truth_(and__3546__auto____7325))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7325;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7570 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7333 = this$;

if(cljs.core.truth_(and__3546__auto____7333))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7333;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7571 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7342 = this$;

if(cljs.core.truth_(and__3546__auto____7342))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7342;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7346 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{var or__3548__auto____7348 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7572 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7351 = this$;

if(cljs.core.truth_(and__3546__auto____7351))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7351;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{var or__3548__auto____7358 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7358))
{return or__3548__auto____7358;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7573 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7360 = this$;

if(cljs.core.truth_(and__3546__auto____7360))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7360;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7362 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{var or__3548__auto____7364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7574 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7367 = this$;

if(cljs.core.truth_(and__3546__auto____7367))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7367;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7371 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{var or__3548__auto____7373 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7373))
{return or__3548__auto____7373;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7575 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7376 = this$;

if(cljs.core.truth_(and__3546__auto____7376))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7376;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7576 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7385 = this$;

if(cljs.core.truth_(and__3546__auto____7385))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7385;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7388 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{var or__3548__auto____7391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7577 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7394 = this$;

if(cljs.core.truth_(and__3546__auto____7394))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7394;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7397 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{var or__3548__auto____7400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7578 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7404 = this$;

if(cljs.core.truth_(and__3546__auto____7404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7420 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{var or__3548__auto____7493 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7493))
{return or__3548__auto____7493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7579 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7498 = this$;

if(cljs.core.truth_(and__3546__auto____7498))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7498;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7500 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7500))
{return or__3548__auto____7500;
} else
{var or__3548__auto____7502 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7502))
{return or__3548__auto____7502;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7580 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7507 = this$;

if(cljs.core.truth_(and__3546__auto____7507))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7507;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7509 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7509))
{return or__3548__auto____7509;
} else
{var or__3548__auto____7511 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7511))
{return or__3548__auto____7511;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7581 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7515 = this$;

if(cljs.core.truth_(and__3546__auto____7515))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7515;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7517 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{var or__3548__auto____7519 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7519))
{return or__3548__auto____7519;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7582 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7521 = this$;

if(cljs.core.truth_(and__3546__auto____7521))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7521;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7523 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7523))
{return or__3548__auto____7523;
} else
{var or__3548__auto____7524 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7524))
{return or__3548__auto____7524;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7583 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7531 = this$;

if(cljs.core.truth_(and__3546__auto____7531))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7531;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7534 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
} else
{var or__3548__auto____7536 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7536))
{return or__3548__auto____7536;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7584 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7539 = this$;

if(cljs.core.truth_(and__3546__auto____7539))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7539;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7540 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7540))
{return or__3548__auto____7540;
} else
{var or__3548__auto____7541 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7541))
{return or__3548__auto____7541;
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
return _invoke__7564.call(this,this$);
case  2 :
return _invoke__7565.call(this,this$,a);
case  3 :
return _invoke__7566.call(this,this$,a,b);
case  4 :
return _invoke__7567.call(this,this$,a,b,c);
case  5 :
return _invoke__7568.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7569.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7570.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7571.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7572.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7573.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7574.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7575.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7576.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7577.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7578.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7579.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7580.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7581.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7582.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7583.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7584.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7660 = coll;

if(cljs.core.truth_(and__3546__auto____7660))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7660;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7662 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7662))
{return or__3548__auto____7662;
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
{return (function (){var or__3548__auto____7676 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7676))
{return or__3548__auto____7676;
} else
{var or__3548__auto____7677 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7677))
{return or__3548__auto____7677;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7682 = coll;

if(cljs.core.truth_(and__3546__auto____7682))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7682;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7685 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7685))
{return or__3548__auto____7685;
} else
{var or__3548__auto____7686 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7686))
{return or__3548__auto____7686;
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
var _nth__7727 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7704 = coll;

if(cljs.core.truth_(and__3546__auto____7704))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7704;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7718 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7718))
{return or__3548__auto____7718;
} else
{var or__3548__auto____7720 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7728 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7722 = coll;

if(cljs.core.truth_(and__3546__auto____7722))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7722;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7725 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{var or__3548__auto____7726 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
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
return _nth__7727.call(this,coll,n);
case  3 :
return _nth__7728.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7733 = coll;

if(cljs.core.truth_(and__3546__auto____7733))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7733;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7735 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{var or__3548__auto____7736 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7739 = coll;

if(cljs.core.truth_(and__3546__auto____7739))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7739;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7740 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
} else
{var or__3548__auto____7741 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7741))
{return or__3548__auto____7741;
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
if(cljs.core.truth_((function (){var and__3546__auto____7751 = o;

if(cljs.core.truth_(and__3546__auto____7751))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7751;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
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
})().call(null,o,k);
}
});
var _lookup__7758 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7754 = o;

if(cljs.core.truth_(and__3546__auto____7754))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7754;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7755 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7755))
{return or__3548__auto____7755;
} else
{var or__3548__auto____7756 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7756))
{return or__3548__auto____7756;
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
if(cljs.core.truth_((function (){var and__3546__auto____7770 = coll;

if(cljs.core.truth_(and__3546__auto____7770))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7770;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7779 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7779))
{return or__3548__auto____7779;
} else
{var or__3548__auto____7781 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7781))
{return or__3548__auto____7781;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = coll;

if(cljs.core.truth_(and__3546__auto____7784))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7784;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7785 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
} else
{var or__3548__auto____7786 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7801 = coll;

if(cljs.core.truth_(and__3546__auto____7801))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7801;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7804 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7806 = coll;

if(cljs.core.truth_(and__3546__auto____7806))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7806;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7810 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{var or__3548__auto____7811 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7812 = coll;

if(cljs.core.truth_(and__3546__auto____7812))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7812;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7813 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7813))
{return or__3548__auto____7813;
} else
{var or__3548__auto____7814 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7815 = coll;

if(cljs.core.truth_(and__3546__auto____7815))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7815;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7816 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
} else
{var or__3548__auto____7817 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7821 = coll;

if(cljs.core.truth_(and__3546__auto____7821))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7821;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7898 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{var or__3548__auto____7900 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7900))
{return or__3548__auto____7900;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7904 = o;

if(cljs.core.truth_(and__3546__auto____7904))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7904;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7905 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7905))
{return or__3548__auto____7905;
} else
{var or__3548__auto____7906 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7906))
{return or__3548__auto____7906;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7911 = o;

if(cljs.core.truth_(and__3546__auto____7911))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7911;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7915 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{var or__3548__auto____7918 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7932 = o;

if(cljs.core.truth_(and__3546__auto____7932))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7932;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7934 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
} else
{var or__3548__auto____7936 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7941 = o;

if(cljs.core.truth_(and__3546__auto____7941))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7941;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7945 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{var or__3548__auto____7947 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
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
var _reduce__8001 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7950 = coll;

if(cljs.core.truth_(and__3546__auto____7950))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7950;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7952 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7954 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8002 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7956 = coll;

if(cljs.core.truth_(and__3546__auto____7956))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7956;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7957 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7957))
{return or__3548__auto____7957;
} else
{var or__3548__auto____7959 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
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
return _reduce__8001.call(this,coll,f);
case  3 :
return _reduce__8002.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8010 = o;

if(cljs.core.truth_(and__3546__auto____8010))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8010;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8013 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8013))
{return or__3548__auto____8013;
} else
{var or__3548__auto____8014 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8014))
{return or__3548__auto____8014;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8023 = o;

if(cljs.core.truth_(and__3546__auto____8023))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8023;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8025 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8025))
{return or__3548__auto____8025;
} else
{var or__3548__auto____8027 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8037 = o;

if(cljs.core.truth_(and__3546__auto____8037))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8037;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8039 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8039))
{return or__3548__auto____8039;
} else
{var or__3548__auto____8041 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8041))
{return or__3548__auto____8041;
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
if(cljs.core.truth_((function (){var and__3546__auto____8046 = o;

if(cljs.core.truth_(and__3546__auto____8046))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8046;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8048 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{var or__3548__auto____8049 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8055 = d;

if(cljs.core.truth_(and__3546__auto____8055))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8055;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8057 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8057))
{return or__3548__auto____8057;
} else
{var or__3548__auto____8059 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8066 = this$;

if(cljs.core.truth_(and__3546__auto____8066))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8066;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8077 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{var or__3548__auto____8078 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8079 = this$;

if(cljs.core.truth_(and__3546__auto____8079))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8079;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8081 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8081))
{return or__3548__auto____8081;
} else
{var or__3548__auto____8083 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8087 = this$;

if(cljs.core.truth_(and__3546__auto____8087))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8087;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8090 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
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
var G__8162 = null;
var G__8162__8163 = (function (o,k){
return null;
});
var G__8162__8164 = (function (o,k,not_found){
return not_found;
});
G__8162 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8162__8163.call(this,o,k);
case  3 :
return G__8162__8164.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8162;
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
var G__8173 = null;
var G__8173__8176 = (function (_,f){
return f.call(null);
});
var G__8173__8177 = (function (_,f,start){
return start;
});
G__8173 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8173__8176.call(this,_,f);
case  3 :
return G__8173__8177.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8173;
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
var G__8187 = null;
var G__8187__8188 = (function (_,n){
return null;
});
var G__8187__8189 = (function (_,n,not_found){
return not_found;
});
G__8187 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8187__8188.call(this,_,n);
case  3 :
return G__8187__8189.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8187;
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
var ci_reduce__8241 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8232 = cljs.core._nth.call(null,cicoll,0);
var n__8233 = 1;

while(true){
if(cljs.core.truth_((n__8233 < cljs.core._count.call(null,cicoll))))
{{
var G__8245 = f.call(null,val__8232,cljs.core._nth.call(null,cicoll,n__8233));
var G__8246 = (n__8233 + 1);
val__8232 = G__8245;
n__8233 = G__8246;
continue;
}
} else
{return val__8232;
}
break;
}
}
});
var ci_reduce__8242 = (function (cicoll,f,val){
var val__8235 = val;
var n__8236 = 0;

while(true){
if(cljs.core.truth_((n__8236 < cljs.core._count.call(null,cicoll))))
{{
var G__8248 = f.call(null,val__8235,cljs.core._nth.call(null,cicoll,n__8236));
var G__8249 = (n__8236 + 1);
val__8235 = G__8248;
n__8236 = G__8249;
continue;
}
} else
{return val__8235;
}
break;
}
});
var ci_reduce__8243 = (function (cicoll,f,val,idx){
var val__8239 = val;
var n__8240 = idx;

while(true){
if(cljs.core.truth_((n__8240 < cljs.core._count.call(null,cicoll))))
{{
var G__8252 = f.call(null,val__8239,cljs.core._nth.call(null,cicoll,n__8240));
var G__8253 = (n__8240 + 1);
val__8239 = G__8252;
n__8240 = G__8253;
continue;
}
} else
{return val__8239;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8241.call(this,cicoll,f);
case  3 :
return ci_reduce__8242.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8243.call(this,cicoll,f,val,idx);
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
var this__8282 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8303 = null;
var G__8303__8304 = (function (_,f){
var this__8283 = this;
return cljs.core.ci_reduce.call(null,this__8283.a,f,(this__8283.a[this__8283.i]),(this__8283.i + 1));
});
var G__8303__8305 = (function (_,f,start){
var this__8284 = this;
return cljs.core.ci_reduce.call(null,this__8284.a,f,start,this__8284.i);
});
G__8303 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8303__8304.call(this,_,f);
case  3 :
return G__8303__8305.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8303;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8285 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8286 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8311 = null;
var G__8311__8312 = (function (coll,n){
var this__8287 = this;
var i__8292 = (n + this__8287.i);

if(cljs.core.truth_((i__8292 < this__8287.a.length)))
{return (this__8287.a[i__8292]);
} else
{return null;
}
});
var G__8311__8313 = (function (coll,n,not_found){
var this__8293 = this;
var i__8294 = (n + this__8293.i);

if(cljs.core.truth_((i__8294 < this__8293.a.length)))
{return (this__8293.a[i__8294]);
} else
{return not_found;
}
});
G__8311 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8311__8312.call(this,coll,n);
case  3 :
return G__8311__8313.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8311;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8295 = this;
return (this__8295.a.length - this__8295.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8296 = this;
return (this__8296.a[this__8296.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8297 = this;
if(cljs.core.truth_(((this__8297.i + 1) < this__8297.a.length)))
{return (new cljs.core.IndexedSeq(this__8297.a,(this__8297.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8298 = this;
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
var G__8354 = null;
var G__8354__8355 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8354__8356 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8354 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8354__8355.call(this,array,f);
case  3 :
return G__8354__8356.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8354;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8359 = null;
var G__8359__8360 = (function (array,k){
return (array[k]);
});
var G__8359__8361 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8359 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8359__8360.call(this,array,k);
case  3 :
return G__8359__8361.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8359;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8363 = null;
var G__8363__8364 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8363__8365 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8363 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8363__8364.call(this,array,n);
case  3 :
return G__8363__8365.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8363;
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
var temp__3698__auto____8412 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8412))
{var s__8414 = temp__3698__auto____8412;

return cljs.core._first.call(null,s__8414);
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
var G__8432 = cljs.core.next.call(null,s);
s = G__8432;
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
var s__8439 = cljs.core.seq.call(null,x);
var n__8440 = 0;

while(true){
if(cljs.core.truth_(s__8439))
{{
var G__8445 = cljs.core.next.call(null,s__8439);
var G__8446 = (n__8440 + 1);
s__8439 = G__8445;
n__8440 = G__8446;
continue;
}
} else
{return n__8440;
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
var conj__8463 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8464 = (function() { 
var G__8466__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8467 = conj.call(null,coll,x);
var G__8468 = cljs.core.first.call(null,xs);
var G__8469 = cljs.core.next.call(null,xs);
coll = G__8467;
x = G__8468;
xs = G__8469;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8466 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8466__delegate.call(this, coll, x, xs);
};
G__8466.cljs$lang$maxFixedArity = 2;
G__8466.cljs$lang$applyTo = (function (arglist__8470){
var coll = cljs.core.first(arglist__8470);
var x = cljs.core.first(cljs.core.next(arglist__8470));
var xs = cljs.core.rest(cljs.core.next(arglist__8470));
return G__8466__delegate.call(this, coll, x, xs);
});
return G__8466;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8463.call(this,coll,x);
default:
return conj__8464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8464.cljs$lang$applyTo;
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
var nth__8480 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8481 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8480.call(this,coll,n);
case  3 :
return nth__8481.call(this,coll,n,not_found);
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
var get__8486 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8487 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8486.call(this,o,k);
case  3 :
return get__8487.call(this,o,k,not_found);
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
var assoc__8494 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8495 = (function() { 
var G__8500__delegate = function (coll,k,v,kvs){
while(true){
var ret__8492 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8502 = ret__8492;
var G__8503 = cljs.core.first.call(null,kvs);
var G__8505 = cljs.core.second.call(null,kvs);
var G__8506 = cljs.core.nnext.call(null,kvs);
coll = G__8502;
k = G__8503;
v = G__8505;
kvs = G__8506;
continue;
}
} else
{return ret__8492;
}
break;
}
};
var G__8500 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8500__delegate.call(this, coll, k, v, kvs);
};
G__8500.cljs$lang$maxFixedArity = 3;
G__8500.cljs$lang$applyTo = (function (arglist__8511){
var coll = cljs.core.first(arglist__8511);
var k = cljs.core.first(cljs.core.next(arglist__8511));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8511)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8511)));
return G__8500__delegate.call(this, coll, k, v, kvs);
});
return G__8500;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8494.call(this,coll,k,v);
default:
return assoc__8495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8495.cljs$lang$applyTo;
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
var dissoc__8514 = (function (coll){
return coll;
});
var dissoc__8515 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8516 = (function() { 
var G__8522__delegate = function (coll,k,ks){
while(true){
var ret__8513 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8524 = ret__8513;
var G__8525 = cljs.core.first.call(null,ks);
var G__8526 = cljs.core.next.call(null,ks);
coll = G__8524;
k = G__8525;
ks = G__8526;
continue;
}
} else
{return ret__8513;
}
break;
}
};
var G__8522 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8522__delegate.call(this, coll, k, ks);
};
G__8522.cljs$lang$maxFixedArity = 2;
G__8522.cljs$lang$applyTo = (function (arglist__8530){
var coll = cljs.core.first(arglist__8530);
var k = cljs.core.first(cljs.core.next(arglist__8530));
var ks = cljs.core.rest(cljs.core.next(arglist__8530));
return G__8522__delegate.call(this, coll, k, ks);
});
return G__8522;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8514.call(this,coll);
case  2 :
return dissoc__8515.call(this,coll,k);
default:
return dissoc__8516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8516.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8556 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8557 = x__445__auto____8556;

if(cljs.core.truth_(and__3546__auto____8557))
{var and__3546__auto____8583 = x__445__auto____8556.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8583))
{return cljs.core.not.call(null,x__445__auto____8556.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8583;
}
} else
{return and__3546__auto____8557;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8556);
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
var disj__8621 = (function (coll){
return coll;
});
var disj__8623 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8624 = (function() { 
var G__8626__delegate = function (coll,k,ks){
while(true){
var ret__8616 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8627 = ret__8616;
var G__8628 = cljs.core.first.call(null,ks);
var G__8629 = cljs.core.next.call(null,ks);
coll = G__8627;
k = G__8628;
ks = G__8629;
continue;
}
} else
{return ret__8616;
}
break;
}
};
var G__8626 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8626__delegate.call(this, coll, k, ks);
};
G__8626.cljs$lang$maxFixedArity = 2;
G__8626.cljs$lang$applyTo = (function (arglist__8632){
var coll = cljs.core.first(arglist__8632);
var k = cljs.core.first(cljs.core.next(arglist__8632));
var ks = cljs.core.rest(cljs.core.next(arglist__8632));
return G__8626__delegate.call(this, coll, k, ks);
});
return G__8626;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8621.call(this,coll);
case  2 :
return disj__8623.call(this,coll,k);
default:
return disj__8624.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8624.cljs$lang$applyTo;
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
{var x__445__auto____8639 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8641 = x__445__auto____8639;

if(cljs.core.truth_(and__3546__auto____8641))
{var and__3546__auto____8643 = x__445__auto____8639.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8643))
{return cljs.core.not.call(null,x__445__auto____8639.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8643;
}
} else
{return and__3546__auto____8641;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8639);
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
{var x__445__auto____8645 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8647 = x__445__auto____8645;

if(cljs.core.truth_(and__3546__auto____8647))
{var and__3546__auto____8649 = x__445__auto____8645.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8649))
{return cljs.core.not.call(null,x__445__auto____8645.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8649;
}
} else
{return and__3546__auto____8647;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8645);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8651 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8652 = x__445__auto____8651;

if(cljs.core.truth_(and__3546__auto____8652))
{var and__3546__auto____8653 = x__445__auto____8651.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8653))
{return cljs.core.not.call(null,x__445__auto____8651.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8653;
}
} else
{return and__3546__auto____8652;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8651);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8663 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8665 = x__445__auto____8663;

if(cljs.core.truth_(and__3546__auto____8665))
{var and__3546__auto____8666 = x__445__auto____8663.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8666))
{return cljs.core.not.call(null,x__445__auto____8663.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8666;
}
} else
{return and__3546__auto____8665;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8663);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8703 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8704 = x__445__auto____8703;

if(cljs.core.truth_(and__3546__auto____8704))
{var and__3546__auto____8705 = x__445__auto____8703.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8705))
{return cljs.core.not.call(null,x__445__auto____8703.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8705;
}
} else
{return and__3546__auto____8704;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8703);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8719 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8721 = x__445__auto____8719;

if(cljs.core.truth_(and__3546__auto____8721))
{var and__3546__auto____8722 = x__445__auto____8719.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8722))
{return cljs.core.not.call(null,x__445__auto____8719.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8722;
}
} else
{return and__3546__auto____8721;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8719);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8727 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8728 = x__445__auto____8727;

if(cljs.core.truth_(and__3546__auto____8728))
{var and__3546__auto____8729 = x__445__auto____8727.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8729))
{return cljs.core.not.call(null,x__445__auto____8727.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8729;
}
} else
{return and__3546__auto____8728;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8727);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8742 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8742.push(key);
}));
return keys__8742;
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
{var x__445__auto____8760 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8761 = x__445__auto____8760;

if(cljs.core.truth_(and__3546__auto____8761))
{var and__3546__auto____8762 = x__445__auto____8760.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8762))
{return cljs.core.not.call(null,x__445__auto____8760.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8762;
}
} else
{return and__3546__auto____8761;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8760);
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
var and__3546__auto____8767 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8767))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8768 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8768))
{return or__3548__auto____8768;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8767;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8770 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8770))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8770;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8835 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8835))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8835;
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
var and__3546__auto____8864 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8864))
{return (n == n.toFixed());
} else
{return and__3546__auto____8864;
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
if(cljs.core.truth_((function (){var and__3546__auto____8874 = coll;

if(cljs.core.truth_(and__3546__auto____8874))
{var and__3546__auto____8875 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8875))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8875;
}
} else
{return and__3546__auto____8874;
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
var distinct_QMARK___8895 = (function (x){
return true;
});
var distinct_QMARK___8896 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8897 = (function() { 
var G__8903__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8885 = cljs.core.set([y,x]);
var xs__8886 = more;

while(true){
var x__8887 = cljs.core.first.call(null,xs__8886);
var etc__8888 = cljs.core.next.call(null,xs__8886);

if(cljs.core.truth_(xs__8886))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8885,x__8887)))
{return false;
} else
{{
var G__8907 = cljs.core.conj.call(null,s__8885,x__8887);
var G__8908 = etc__8888;
s__8885 = G__8907;
xs__8886 = G__8908;
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
var G__8903 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8903__delegate.call(this, x, y, more);
};
G__8903.cljs$lang$maxFixedArity = 2;
G__8903.cljs$lang$applyTo = (function (arglist__8909){
var x = cljs.core.first(arglist__8909);
var y = cljs.core.first(cljs.core.next(arglist__8909));
var more = cljs.core.rest(cljs.core.next(arglist__8909));
return G__8903__delegate.call(this, x, y, more);
});
return G__8903;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8895.call(this,x);
case  2 :
return distinct_QMARK___8896.call(this,x,y);
default:
return distinct_QMARK___8897.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8897.cljs$lang$applyTo;
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
var r__8922 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8922)))
{return r__8922;
} else
{if(cljs.core.truth_(r__8922))
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
var sort__8934 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8935 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8928 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8928,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8928);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8934.call(this,comp);
case  2 :
return sort__8935.call(this,comp,coll);
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
var sort_by__8952 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8953 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8952.call(this,keyfn,comp);
case  3 :
return sort_by__8953.call(this,keyfn,comp,coll);
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
var reduce__8957 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8958 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8957.call(this,f,val);
case  3 :
return reduce__8958.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8971 = (function (f,coll){
var temp__3695__auto____8960 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8960))
{var s__8966 = temp__3695__auto____8960;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8966),cljs.core.next.call(null,s__8966));
} else
{return f.call(null);
}
});
var seq_reduce__8972 = (function (f,val,coll){
var val__8968 = val;
var coll__8969 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8969))
{{
var G__8974 = f.call(null,val__8968,cljs.core.first.call(null,coll__8969));
var G__8975 = cljs.core.next.call(null,coll__8969);
val__8968 = G__8974;
coll__8969 = G__8975;
continue;
}
} else
{return val__8968;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8971.call(this,f,val);
case  3 :
return seq_reduce__8972.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9006 = null;
var G__9006__9008 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9006__9009 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9006 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9006__9008.call(this,coll,f);
case  3 :
return G__9006__9009.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9006;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9012 = (function (){
return 0;
});
var _PLUS___9015 = (function (x){
return x;
});
var _PLUS___9017 = (function (x,y){
return (x + y);
});
var _PLUS___9019 = (function() { 
var G__9025__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9025 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9025__delegate.call(this, x, y, more);
};
G__9025.cljs$lang$maxFixedArity = 2;
G__9025.cljs$lang$applyTo = (function (arglist__9029){
var x = cljs.core.first(arglist__9029);
var y = cljs.core.first(cljs.core.next(arglist__9029));
var more = cljs.core.rest(cljs.core.next(arglist__9029));
return G__9025__delegate.call(this, x, y, more);
});
return G__9025;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9012.call(this);
case  1 :
return _PLUS___9015.call(this,x);
case  2 :
return _PLUS___9017.call(this,x,y);
default:
return _PLUS___9019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9019.cljs$lang$applyTo;
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
var ___9031 = (function (x){
return (- x);
});
var ___9032 = (function (x,y){
return (x - y);
});
var ___9033 = (function() { 
var G__9039__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9039 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9039__delegate.call(this, x, y, more);
};
G__9039.cljs$lang$maxFixedArity = 2;
G__9039.cljs$lang$applyTo = (function (arglist__9044){
var x = cljs.core.first(arglist__9044);
var y = cljs.core.first(cljs.core.next(arglist__9044));
var more = cljs.core.rest(cljs.core.next(arglist__9044));
return G__9039__delegate.call(this, x, y, more);
});
return G__9039;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9031.call(this,x);
case  2 :
return ___9032.call(this,x,y);
default:
return ___9033.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9033.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9047 = (function (){
return 1;
});
var _STAR___9048 = (function (x){
return x;
});
var _STAR___9049 = (function (x,y){
return (x * y);
});
var _STAR___9050 = (function() { 
var G__9052__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9052 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9052__delegate.call(this, x, y, more);
};
G__9052.cljs$lang$maxFixedArity = 2;
G__9052.cljs$lang$applyTo = (function (arglist__9057){
var x = cljs.core.first(arglist__9057);
var y = cljs.core.first(cljs.core.next(arglist__9057));
var more = cljs.core.rest(cljs.core.next(arglist__9057));
return G__9052__delegate.call(this, x, y, more);
});
return G__9052;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9047.call(this);
case  1 :
return _STAR___9048.call(this,x);
case  2 :
return _STAR___9049.call(this,x,y);
default:
return _STAR___9050.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9050.cljs$lang$applyTo;
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
var _SLASH___9063 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9064 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9065 = (function() { 
var G__9067__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9067 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9067__delegate.call(this, x, y, more);
};
G__9067.cljs$lang$maxFixedArity = 2;
G__9067.cljs$lang$applyTo = (function (arglist__9068){
var x = cljs.core.first(arglist__9068);
var y = cljs.core.first(cljs.core.next(arglist__9068));
var more = cljs.core.rest(cljs.core.next(arglist__9068));
return G__9067__delegate.call(this, x, y, more);
});
return G__9067;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9063.call(this,x);
case  2 :
return _SLASH___9064.call(this,x,y);
default:
return _SLASH___9065.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9065.cljs$lang$applyTo;
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
var _LT___9078 = (function (x){
return true;
});
var _LT___9079 = (function (x,y){
return (x < y);
});
var _LT___9080 = (function() { 
var G__9082__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9083 = y;
var G__9084 = cljs.core.first.call(null,more);
var G__9085 = cljs.core.next.call(null,more);
x = G__9083;
y = G__9084;
more = G__9085;
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
var G__9082 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9082__delegate.call(this, x, y, more);
};
G__9082.cljs$lang$maxFixedArity = 2;
G__9082.cljs$lang$applyTo = (function (arglist__9086){
var x = cljs.core.first(arglist__9086);
var y = cljs.core.first(cljs.core.next(arglist__9086));
var more = cljs.core.rest(cljs.core.next(arglist__9086));
return G__9082__delegate.call(this, x, y, more);
});
return G__9082;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9078.call(this,x);
case  2 :
return _LT___9079.call(this,x,y);
default:
return _LT___9080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9080.cljs$lang$applyTo;
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
var _LT__EQ___9138 = (function (x){
return true;
});
var _LT__EQ___9139 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9140 = (function() { 
var G__9142__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9143 = y;
var G__9144 = cljs.core.first.call(null,more);
var G__9145 = cljs.core.next.call(null,more);
x = G__9143;
y = G__9144;
more = G__9145;
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
var G__9142 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9142__delegate.call(this, x, y, more);
};
G__9142.cljs$lang$maxFixedArity = 2;
G__9142.cljs$lang$applyTo = (function (arglist__9146){
var x = cljs.core.first(arglist__9146);
var y = cljs.core.first(cljs.core.next(arglist__9146));
var more = cljs.core.rest(cljs.core.next(arglist__9146));
return G__9142__delegate.call(this, x, y, more);
});
return G__9142;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9138.call(this,x);
case  2 :
return _LT__EQ___9139.call(this,x,y);
default:
return _LT__EQ___9140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9140.cljs$lang$applyTo;
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
var _GT___9154 = (function (x){
return true;
});
var _GT___9155 = (function (x,y){
return (x > y);
});
var _GT___9156 = (function() { 
var G__9171__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9178 = y;
var G__9179 = cljs.core.first.call(null,more);
var G__9180 = cljs.core.next.call(null,more);
x = G__9178;
y = G__9179;
more = G__9180;
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
var G__9171 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9171__delegate.call(this, x, y, more);
};
G__9171.cljs$lang$maxFixedArity = 2;
G__9171.cljs$lang$applyTo = (function (arglist__9181){
var x = cljs.core.first(arglist__9181);
var y = cljs.core.first(cljs.core.next(arglist__9181));
var more = cljs.core.rest(cljs.core.next(arglist__9181));
return G__9171__delegate.call(this, x, y, more);
});
return G__9171;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9154.call(this,x);
case  2 :
return _GT___9155.call(this,x,y);
default:
return _GT___9156.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9156.cljs$lang$applyTo;
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
var _GT__EQ___9187 = (function (x){
return true;
});
var _GT__EQ___9188 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9189 = (function() { 
var G__9193__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9194 = y;
var G__9195 = cljs.core.first.call(null,more);
var G__9196 = cljs.core.next.call(null,more);
x = G__9194;
y = G__9195;
more = G__9196;
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
var G__9193 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9193__delegate.call(this, x, y, more);
};
G__9193.cljs$lang$maxFixedArity = 2;
G__9193.cljs$lang$applyTo = (function (arglist__9197){
var x = cljs.core.first(arglist__9197);
var y = cljs.core.first(cljs.core.next(arglist__9197));
var more = cljs.core.rest(cljs.core.next(arglist__9197));
return G__9193__delegate.call(this, x, y, more);
});
return G__9193;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9187.call(this,x);
case  2 :
return _GT__EQ___9188.call(this,x,y);
default:
return _GT__EQ___9189.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9189.cljs$lang$applyTo;
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
var max__9203 = (function (x){
return x;
});
var max__9204 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9205 = (function() { 
var G__9207__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9207 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9207__delegate.call(this, x, y, more);
};
G__9207.cljs$lang$maxFixedArity = 2;
G__9207.cljs$lang$applyTo = (function (arglist__9209){
var x = cljs.core.first(arglist__9209);
var y = cljs.core.first(cljs.core.next(arglist__9209));
var more = cljs.core.rest(cljs.core.next(arglist__9209));
return G__9207__delegate.call(this, x, y, more);
});
return G__9207;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9203.call(this,x);
case  2 :
return max__9204.call(this,x,y);
default:
return max__9205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9205.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9211 = (function (x){
return x;
});
var min__9212 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9213 = (function() { 
var G__9215__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9215 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9215__delegate.call(this, x, y, more);
};
G__9215.cljs$lang$maxFixedArity = 2;
G__9215.cljs$lang$applyTo = (function (arglist__9219){
var x = cljs.core.first(arglist__9219);
var y = cljs.core.first(cljs.core.next(arglist__9219));
var more = cljs.core.rest(cljs.core.next(arglist__9219));
return G__9215__delegate.call(this, x, y, more);
});
return G__9215;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9211.call(this,x);
case  2 :
return min__9212.call(this,x,y);
default:
return min__9213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9213.cljs$lang$applyTo;
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
var rem__9220 = (n % d);

return cljs.core.fix.call(null,((n - rem__9220) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9222 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9222));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9223 = (function (){
return Math.random.call(null);
});
var rand__9224 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9223.call(this);
case  1 :
return rand__9224.call(this,n);
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
var _EQ__EQ___9271 = (function (x){
return true;
});
var _EQ__EQ___9273 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9275 = (function() { 
var G__9277__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9278 = y;
var G__9279 = cljs.core.first.call(null,more);
var G__9280 = cljs.core.next.call(null,more);
x = G__9278;
y = G__9279;
more = G__9280;
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
var G__9277 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9277__delegate.call(this, x, y, more);
};
G__9277.cljs$lang$maxFixedArity = 2;
G__9277.cljs$lang$applyTo = (function (arglist__9287){
var x = cljs.core.first(arglist__9287);
var y = cljs.core.first(cljs.core.next(arglist__9287));
var more = cljs.core.rest(cljs.core.next(arglist__9287));
return G__9277__delegate.call(this, x, y, more);
});
return G__9277;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9271.call(this,x);
case  2 :
return _EQ__EQ___9273.call(this,x,y);
default:
return _EQ__EQ___9275.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9275.cljs$lang$applyTo;
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
var n__9321 = n;
var xs__9322 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9323 = xs__9322;

if(cljs.core.truth_(and__3546__auto____9323))
{return (n__9321 > 0);
} else
{return and__3546__auto____9323;
}
})()))
{{
var G__9326 = (n__9321 - 1);
var G__9328 = cljs.core.next.call(null,xs__9322);
n__9321 = G__9326;
xs__9322 = G__9328;
continue;
}
} else
{return xs__9322;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9474 = null;
var G__9474__9475 = (function (coll,n){
var temp__3695__auto____9462 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9462))
{var xs__9463 = temp__3695__auto____9462;

return cljs.core.first.call(null,xs__9463);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9474__9476 = (function (coll,n,not_found){
var temp__3695__auto____9468 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9468))
{var xs__9469 = temp__3695__auto____9468;

return cljs.core.first.call(null,xs__9469);
} else
{return not_found;
}
});
G__9474 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9474__9475.call(this,coll,n);
case  3 :
return G__9474__9476.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9474;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9489 = (function (){
return "";
});
var str_STAR___9490 = (function (x){
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
var str_STAR___9491 = (function() { 
var G__9501__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9503 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9504 = cljs.core.next.call(null,more);
sb = G__9503;
more = G__9504;
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
G__9501.cljs$lang$applyTo = (function (arglist__9509){
var x = cljs.core.first(arglist__9509);
var ys = cljs.core.rest(arglist__9509);
return G__9501__delegate.call(this, x, ys);
});
return G__9501;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9489.call(this);
case  1 :
return str_STAR___9490.call(this,x);
default:
return str_STAR___9491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9491.cljs$lang$applyTo;
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
var str__9521 = (function (){
return "";
});
var str__9522 = (function (x){
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
var str__9523 = (function() { 
var G__9529__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9529 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9529__delegate.call(this, x, ys);
};
G__9529.cljs$lang$maxFixedArity = 1;
G__9529.cljs$lang$applyTo = (function (arglist__9531){
var x = cljs.core.first(arglist__9531);
var ys = cljs.core.rest(arglist__9531);
return G__9529__delegate.call(this, x, ys);
});
return G__9529;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9521.call(this);
case  1 :
return str__9522.call(this,x);
default:
return str__9523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9523.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9538 = (function (s,start){
return s.substring(start);
});
var subs__9539 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9538.call(this,s,start);
case  3 :
return subs__9539.call(this,s,start,end);
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
var symbol__9549 = (function (name){
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
var symbol__9550 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9549.call(this,ns);
case  2 :
return symbol__9550.call(this,ns,name);
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
var keyword__9555 = (function (name){
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
var keyword__9556 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9555.call(this,ns);
case  2 :
return keyword__9556.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9570 = cljs.core.seq.call(null,x);
var ys__9571 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9570)))
{return cljs.core.nil_QMARK_.call(null,ys__9571);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9571)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9570),cljs.core.first.call(null,ys__9571))))
{{
var G__9613 = cljs.core.next.call(null,xs__9570);
var G__9614 = cljs.core.next.call(null,ys__9571);
xs__9570 = G__9613;
ys__9571 = G__9614;
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
return cljs.core.reduce.call(null,(function (p1__9620_SHARP_,p2__9621_SHARP_){
return cljs.core.hash_combine.call(null,p1__9620_SHARP_,cljs.core.hash.call(null,p2__9621_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9627__9628 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9627__9628))
{var G__9630__9632 = cljs.core.first.call(null,G__9627__9628);
var vec__9631__9633 = G__9630__9632;
var key_name__9634 = cljs.core.nth.call(null,vec__9631__9633,0,null);
var f__9635 = cljs.core.nth.call(null,vec__9631__9633,1,null);
var G__9627__9636 = G__9627__9628;

var G__9630__9637 = G__9630__9632;
var G__9627__9638 = G__9627__9636;

while(true){
var vec__9639__9640 = G__9630__9637;
var key_name__9641 = cljs.core.nth.call(null,vec__9639__9640,0,null);
var f__9642 = cljs.core.nth.call(null,vec__9639__9640,1,null);
var G__9627__9643 = G__9627__9638;

var str_name__9644 = cljs.core.name.call(null,key_name__9641);

obj[str_name__9644] = f__9642;
var temp__3698__auto____9645 = cljs.core.next.call(null,G__9627__9643);

if(cljs.core.truth_(temp__3698__auto____9645))
{var G__9627__9648 = temp__3698__auto____9645;

{
var G__9652 = cljs.core.first.call(null,G__9627__9648);
var G__9653 = G__9627__9648;
G__9630__9637 = G__9652;
G__9627__9638 = G__9653;
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
var this__9662 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9663 = this;
return (new cljs.core.List(this__9663.meta,o,coll,(this__9663.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9664 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9669 = this;
return this__9669.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9670 = this;
return this__9670.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9679 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9680 = this;
return this__9680.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9682 = this;
return this__9682.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9686 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9687 = this;
return (new cljs.core.List(meta,this__9687.first,this__9687.rest,this__9687.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9689 = this;
return this__9689.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9690 = this;
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
var this__9752 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9812 = this;
return (new cljs.core.List(this__9812.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9814 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9815 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9817 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9819 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9820 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9822 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9824 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9825 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9826 = this;
return this__9826.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9827 = this;
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
list.cljs$lang$applyTo = (function (arglist__9837){
var items = cljs.core.seq( arglist__9837 );;
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
var this__9842 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9843 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9844 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9849 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9849.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9850 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9855 = this;
return this__9855.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9856 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9856.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9856.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9857 = this;
return this__9857.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9858 = this;
return (new cljs.core.Cons(meta,this__9858.first,this__9858.rest));
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
var G__9964 = null;
var G__9964__9965 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9964__9966 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9964 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9964__9965.call(this,string,f);
case  3 :
return G__9964__9966.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9964;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9968 = null;
var G__9968__9969 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9968__9970 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9968 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9968__9969.call(this,string,k);
case  3 :
return G__9968__9970.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9968;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9972 = null;
var G__9972__9973 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9972__9974 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9972 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9972__9973.call(this,string,n);
case  3 :
return G__9972__9974.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9972;
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
var G__9982 = null;
var G__9982__9983 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9982__9984 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9982 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9982__9983.call(this,this$,coll);
case  3 :
return G__9982__9984.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9982;
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
var x__9989 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__9989;
} else
{lazy_seq.x = x__9989.call(null);
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
var this__9997 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10049 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10051 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10054 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10054.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10058 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10061 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10065 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10066 = this;
return this__10066.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10067 = this;
return (new cljs.core.LazySeq(meta,this__10067.realized,this__10067.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10068 = cljs.core.array.call(null);

var s__10069 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10069)))
{ary__10068.push(cljs.core.first.call(null,s__10069));
{
var G__10070 = cljs.core.next.call(null,s__10069);
s__10069 = G__10070;
continue;
}
} else
{return ary__10068;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10071 = s;
var i__10072 = n;
var sum__10073 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10074 = (i__10072 > 0);

if(cljs.core.truth_(and__3546__auto____10074))
{return cljs.core.seq.call(null,s__10071);
} else
{return and__3546__auto____10074;
}
})()))
{{
var G__10075 = cljs.core.next.call(null,s__10071);
var G__10076 = (i__10072 - 1);
var G__10078 = (sum__10073 + 1);
s__10071 = G__10075;
i__10072 = G__10076;
sum__10073 = G__10078;
continue;
}
} else
{return sum__10073;
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
var concat__10115 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10116 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10117 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10080 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10080))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10080),concat.call(null,cljs.core.rest.call(null,s__10080),y));
} else
{return y;
}
})));
});
var concat__10119 = (function() { 
var G__10127__delegate = function (x,y,zs){
var cat__10082 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10081 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10081))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10081),cat.call(null,cljs.core.rest.call(null,xys__10081),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10082.call(null,concat.call(null,x,y),zs);
};
var G__10127 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10127__delegate.call(this, x, y, zs);
};
G__10127.cljs$lang$maxFixedArity = 2;
G__10127.cljs$lang$applyTo = (function (arglist__10129){
var x = cljs.core.first(arglist__10129);
var y = cljs.core.first(cljs.core.next(arglist__10129));
var zs = cljs.core.rest(cljs.core.next(arglist__10129));
return G__10127__delegate.call(this, x, y, zs);
});
return G__10127;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10115.call(this);
case  1 :
return concat__10116.call(this,x);
case  2 :
return concat__10117.call(this,x,y);
default:
return concat__10119.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10119.cljs$lang$applyTo;
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
var list_STAR___10141 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10142 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10143 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10144 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10145 = (function() { 
var G__10153__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10153 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10153__delegate.call(this, a, b, c, d, more);
};
G__10153.cljs$lang$maxFixedArity = 4;
G__10153.cljs$lang$applyTo = (function (arglist__10158){
var a = cljs.core.first(arglist__10158);
var b = cljs.core.first(cljs.core.next(arglist__10158));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10158)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10158))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10158))));
return G__10153__delegate.call(this, a, b, c, d, more);
});
return G__10153;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10141.call(this,a);
case  2 :
return list_STAR___10142.call(this,a,b);
case  3 :
return list_STAR___10143.call(this,a,b,c);
case  4 :
return list_STAR___10144.call(this,a,b,c,d);
default:
return list_STAR___10145.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10145.cljs$lang$applyTo;
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
var apply__10193 = (function (f,args){
var fixed_arity__10164 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10164 + 1)) <= fixed_arity__10164)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10194 = (function (f,x,args){
var arglist__10167 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10168 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10167,fixed_arity__10168) <= fixed_arity__10168)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10167));
} else
{return f.cljs$lang$applyTo(arglist__10167);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10167));
}
});
var apply__10195 = (function (f,x,y,args){
var arglist__10169 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10170 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10169,fixed_arity__10170) <= fixed_arity__10170)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10169));
} else
{return f.cljs$lang$applyTo(arglist__10169);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10169));
}
});
var apply__10197 = (function (f,x,y,z,args){
var arglist__10171 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10172 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10171,fixed_arity__10172) <= fixed_arity__10172)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10171));
} else
{return f.cljs$lang$applyTo(arglist__10171);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10171));
}
});
var apply__10198 = (function() { 
var G__10203__delegate = function (f,a,b,c,d,args){
var arglist__10173 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10174 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10173,fixed_arity__10174) <= fixed_arity__10174)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10173));
} else
{return f.cljs$lang$applyTo(arglist__10173);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10173));
}
};
var G__10203 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10203__delegate.call(this, f, a, b, c, d, args);
};
G__10203.cljs$lang$maxFixedArity = 5;
G__10203.cljs$lang$applyTo = (function (arglist__10208){
var f = cljs.core.first(arglist__10208);
var a = cljs.core.first(cljs.core.next(arglist__10208));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10208)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10208))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10208)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10208)))));
return G__10203__delegate.call(this, f, a, b, c, d, args);
});
return G__10203;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10193.call(this,f,a);
case  3 :
return apply__10194.call(this,f,a,b);
case  4 :
return apply__10195.call(this,f,a,b,c);
case  5 :
return apply__10197.call(this,f,a,b,c,d);
default:
return apply__10198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10198.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10226){
var obj = cljs.core.first(arglist__10226);
var f = cljs.core.first(cljs.core.next(arglist__10226));
var args = cljs.core.rest(cljs.core.next(arglist__10226));
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
var not_EQ___10237 = (function (x){
return false;
});
var not_EQ___10238 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10239 = (function() { 
var G__10241__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10241 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10241__delegate.call(this, x, y, more);
};
G__10241.cljs$lang$maxFixedArity = 2;
G__10241.cljs$lang$applyTo = (function (arglist__10242){
var x = cljs.core.first(arglist__10242);
var y = cljs.core.first(cljs.core.next(arglist__10242));
var more = cljs.core.rest(cljs.core.next(arglist__10242));
return G__10241__delegate.call(this, x, y, more);
});
return G__10241;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10237.call(this,x);
case  2 :
return not_EQ___10238.call(this,x,y);
default:
return not_EQ___10239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10239.cljs$lang$applyTo;
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
var G__10275 = pred;
var G__10276 = cljs.core.next.call(null,coll);
pred = G__10275;
coll = G__10276;
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
{var or__3548__auto____10290 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10290))
{return or__3548__auto____10290;
} else
{{
var G__10307 = pred;
var G__10308 = cljs.core.next.call(null,coll);
pred = G__10307;
coll = G__10308;
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
var G__10336 = null;
var G__10336__10337 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10336__10338 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10336__10339 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10336__10340 = (function() { 
var G__10352__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10352 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10352__delegate.call(this, x, y, zs);
};
G__10352.cljs$lang$maxFixedArity = 2;
G__10352.cljs$lang$applyTo = (function (arglist__10354){
var x = cljs.core.first(arglist__10354);
var y = cljs.core.first(cljs.core.next(arglist__10354));
var zs = cljs.core.rest(cljs.core.next(arglist__10354));
return G__10352__delegate.call(this, x, y, zs);
});
return G__10352;
})()
;
G__10336 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10336__10337.call(this);
case  1 :
return G__10336__10338.call(this,x);
case  2 :
return G__10336__10339.call(this,x,y);
default:
return G__10336__10340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10336.cljs$lang$maxFixedArity = 2;
G__10336.cljs$lang$applyTo = G__10336__10340.cljs$lang$applyTo;
return G__10336;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10360__delegate = function (args){
return x;
};
var G__10360 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10360__delegate.call(this, args);
};
G__10360.cljs$lang$maxFixedArity = 0;
G__10360.cljs$lang$applyTo = (function (arglist__10361){
var args = cljs.core.seq( arglist__10361 );;
return G__10360__delegate.call(this, args);
});
return G__10360;
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
var comp__10382 = (function (){
return cljs.core.identity;
});
var comp__10383 = (function (f){
return f;
});
var comp__10384 = (function (f,g){
return (function() {
var G__10389 = null;
var G__10389__10391 = (function (){
return f.call(null,g.call(null));
});
var G__10389__10392 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10389__10393 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10389__10394 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10389__10395 = (function() { 
var G__10401__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10401 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10401__delegate.call(this, x, y, z, args);
};
G__10401.cljs$lang$maxFixedArity = 3;
G__10401.cljs$lang$applyTo = (function (arglist__10404){
var x = cljs.core.first(arglist__10404);
var y = cljs.core.first(cljs.core.next(arglist__10404));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10404)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10404)));
return G__10401__delegate.call(this, x, y, z, args);
});
return G__10401;
})()
;
G__10389 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10389__10391.call(this);
case  1 :
return G__10389__10392.call(this,x);
case  2 :
return G__10389__10393.call(this,x,y);
case  3 :
return G__10389__10394.call(this,x,y,z);
default:
return G__10389__10395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10389.cljs$lang$maxFixedArity = 3;
G__10389.cljs$lang$applyTo = G__10389__10395.cljs$lang$applyTo;
return G__10389;
})()
});
var comp__10385 = (function (f,g,h){
return (function() {
var G__10412 = null;
var G__10412__10414 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10412__10415 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10412__10416 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10412__10417 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10412__10419 = (function() { 
var G__10426__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10426 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10426__delegate.call(this, x, y, z, args);
};
G__10426.cljs$lang$maxFixedArity = 3;
G__10426.cljs$lang$applyTo = (function (arglist__10433){
var x = cljs.core.first(arglist__10433);
var y = cljs.core.first(cljs.core.next(arglist__10433));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10433)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10433)));
return G__10426__delegate.call(this, x, y, z, args);
});
return G__10426;
})()
;
G__10412 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10412__10414.call(this);
case  1 :
return G__10412__10415.call(this,x);
case  2 :
return G__10412__10416.call(this,x,y);
case  3 :
return G__10412__10417.call(this,x,y,z);
default:
return G__10412__10419.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10412.cljs$lang$maxFixedArity = 3;
G__10412.cljs$lang$applyTo = G__10412__10419.cljs$lang$applyTo;
return G__10412;
})()
});
var comp__10386 = (function() { 
var G__10437__delegate = function (f1,f2,f3,fs){
var fs__10375 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10439__delegate = function (args){
var ret__10376 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10375),args);
var fs__10377 = cljs.core.next.call(null,fs__10375);

while(true){
if(cljs.core.truth_(fs__10377))
{{
var G__10440 = cljs.core.first.call(null,fs__10377).call(null,ret__10376);
var G__10441 = cljs.core.next.call(null,fs__10377);
ret__10376 = G__10440;
fs__10377 = G__10441;
continue;
}
} else
{return ret__10376;
}
break;
}
};
var G__10439 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10439__delegate.call(this, args);
};
G__10439.cljs$lang$maxFixedArity = 0;
G__10439.cljs$lang$applyTo = (function (arglist__10442){
var args = cljs.core.seq( arglist__10442 );;
return G__10439__delegate.call(this, args);
});
return G__10439;
})()
;
};
var G__10437 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10437__delegate.call(this, f1, f2, f3, fs);
};
G__10437.cljs$lang$maxFixedArity = 3;
G__10437.cljs$lang$applyTo = (function (arglist__10443){
var f1 = cljs.core.first(arglist__10443);
var f2 = cljs.core.first(cljs.core.next(arglist__10443));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10443)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10443)));
return G__10437__delegate.call(this, f1, f2, f3, fs);
});
return G__10437;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10382.call(this);
case  1 :
return comp__10383.call(this,f1);
case  2 :
return comp__10384.call(this,f1,f2);
case  3 :
return comp__10385.call(this,f1,f2,f3);
default:
return comp__10386.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10386.cljs$lang$applyTo;
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
var partial__10452 = (function (f,arg1){
return (function() { 
var G__10457__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10457 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10457__delegate.call(this, args);
};
G__10457.cljs$lang$maxFixedArity = 0;
G__10457.cljs$lang$applyTo = (function (arglist__10462){
var args = cljs.core.seq( arglist__10462 );;
return G__10457__delegate.call(this, args);
});
return G__10457;
})()
;
});
var partial__10453 = (function (f,arg1,arg2){
return (function() { 
var G__10465__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10465 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10465__delegate.call(this, args);
};
G__10465.cljs$lang$maxFixedArity = 0;
G__10465.cljs$lang$applyTo = (function (arglist__10467){
var args = cljs.core.seq( arglist__10467 );;
return G__10465__delegate.call(this, args);
});
return G__10465;
})()
;
});
var partial__10454 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10469__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10469 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10469__delegate.call(this, args);
};
G__10469.cljs$lang$maxFixedArity = 0;
G__10469.cljs$lang$applyTo = (function (arglist__10470){
var args = cljs.core.seq( arglist__10470 );;
return G__10469__delegate.call(this, args);
});
return G__10469;
})()
;
});
var partial__10455 = (function() { 
var G__10471__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10472__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10472 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10472__delegate.call(this, args);
};
G__10472.cljs$lang$maxFixedArity = 0;
G__10472.cljs$lang$applyTo = (function (arglist__10479){
var args = cljs.core.seq( arglist__10479 );;
return G__10472__delegate.call(this, args);
});
return G__10472;
})()
;
};
var G__10471 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10471__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10471.cljs$lang$maxFixedArity = 4;
G__10471.cljs$lang$applyTo = (function (arglist__10480){
var f = cljs.core.first(arglist__10480);
var arg1 = cljs.core.first(cljs.core.next(arglist__10480));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10480)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10480))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10480))));
return G__10471__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10471;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10452.call(this,f,arg1);
case  3 :
return partial__10453.call(this,f,arg1,arg2);
case  4 :
return partial__10454.call(this,f,arg1,arg2,arg3);
default:
return partial__10455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10455.cljs$lang$applyTo;
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
var fnil__10516 = (function (f,x){
return (function() {
var G__10521 = null;
var G__10521__10522 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10521__10523 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10521__10524 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10521__10525 = (function() { 
var G__10527__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10527 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10527__delegate.call(this, a, b, c, ds);
};
G__10527.cljs$lang$maxFixedArity = 3;
G__10527.cljs$lang$applyTo = (function (arglist__10531){
var a = cljs.core.first(arglist__10531);
var b = cljs.core.first(cljs.core.next(arglist__10531));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10531)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10531)));
return G__10527__delegate.call(this, a, b, c, ds);
});
return G__10527;
})()
;
G__10521 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10521__10522.call(this,a);
case  2 :
return G__10521__10523.call(this,a,b);
case  3 :
return G__10521__10524.call(this,a,b,c);
default:
return G__10521__10525.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10521.cljs$lang$maxFixedArity = 3;
G__10521.cljs$lang$applyTo = G__10521__10525.cljs$lang$applyTo;
return G__10521;
})()
});
var fnil__10517 = (function (f,x,y){
return (function() {
var G__10534 = null;
var G__10534__10536 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10534__10676 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10534__10677 = (function() { 
var G__10681__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10681 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10681__delegate.call(this, a, b, c, ds);
};
G__10681.cljs$lang$maxFixedArity = 3;
G__10681.cljs$lang$applyTo = (function (arglist__10712){
var a = cljs.core.first(arglist__10712);
var b = cljs.core.first(cljs.core.next(arglist__10712));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10712)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10712)));
return G__10681__delegate.call(this, a, b, c, ds);
});
return G__10681;
})()
;
G__10534 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10534__10536.call(this,a,b);
case  3 :
return G__10534__10676.call(this,a,b,c);
default:
return G__10534__10677.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10534.cljs$lang$maxFixedArity = 3;
G__10534.cljs$lang$applyTo = G__10534__10677.cljs$lang$applyTo;
return G__10534;
})()
});
var fnil__10518 = (function (f,x,y,z){
return (function() {
var G__10713 = null;
var G__10713__10715 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10713__10716 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10713__10717 = (function() { 
var G__10723__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10723 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10723__delegate.call(this, a, b, c, ds);
};
G__10723.cljs$lang$maxFixedArity = 3;
G__10723.cljs$lang$applyTo = (function (arglist__10732){
var a = cljs.core.first(arglist__10732);
var b = cljs.core.first(cljs.core.next(arglist__10732));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10732)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10732)));
return G__10723__delegate.call(this, a, b, c, ds);
});
return G__10723;
})()
;
G__10713 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
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
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10516.call(this,f,x);
case  3 :
return fnil__10517.call(this,f,x,y);
case  4 :
return fnil__10518.call(this,f,x,y,z);
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
var mapi__10745 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10737 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10737))
{var s__10739 = temp__3698__auto____10737;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10739)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10739)));
} else
{return null;
}
})));
});

return mapi__10745.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10748 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10748))
{var s__10749 = temp__3698__auto____10748;

var x__10750 = f.call(null,cljs.core.first.call(null,s__10749));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10750)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10749));
} else
{return cljs.core.cons.call(null,x__10750,keep.call(null,f,cljs.core.rest.call(null,s__10749)));
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
var keepi__10785 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10782 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10782))
{var s__10783 = temp__3698__auto____10782;

var x__10784 = f.call(null,idx,cljs.core.first.call(null,s__10783));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10784)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10783));
} else
{return cljs.core.cons.call(null,x__10784,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10783)));
}
} else
{return null;
}
})));
});

return keepi__10785.call(null,0,coll);
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
var every_pred__11029 = (function (p){
return (function() {
var ep1 = null;
var ep1__11034 = (function (){
return true;
});
var ep1__11035 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11036 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10867 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10867))
{return p.call(null,y);
} else
{return and__3546__auto____10867;
}
})());
});
var ep1__11037 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10869 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10869))
{var and__3546__auto____10872 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10872))
{return p.call(null,z);
} else
{return and__3546__auto____10872;
}
} else
{return and__3546__auto____10869;
}
})());
});
var ep1__11038 = (function() { 
var G__11040__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10874 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10874))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10874;
}
})());
};
var G__11040 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11040__delegate.call(this, x, y, z, args);
};
G__11040.cljs$lang$maxFixedArity = 3;
G__11040.cljs$lang$applyTo = (function (arglist__11044){
var x = cljs.core.first(arglist__11044);
var y = cljs.core.first(cljs.core.next(arglist__11044));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11044)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11044)));
return G__11040__delegate.call(this, x, y, z, args);
});
return G__11040;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11034.call(this);
case  1 :
return ep1__11035.call(this,x);
case  2 :
return ep1__11036.call(this,x,y);
case  3 :
return ep1__11037.call(this,x,y,z);
default:
return ep1__11038.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11038.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11030 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11045 = (function (){
return true;
});
var ep2__11046 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10876 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10876))
{return p2.call(null,x);
} else
{return and__3546__auto____10876;
}
})());
});
var ep2__11047 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10879 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10879))
{var and__3546__auto____10881 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10881))
{var and__3546__auto____10882 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10882))
{return p2.call(null,y);
} else
{return and__3546__auto____10882;
}
} else
{return and__3546__auto____10881;
}
} else
{return and__3546__auto____10879;
}
})());
});
var ep2__11048 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10883 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10883))
{var and__3546__auto____10884 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10884))
{var and__3546__auto____10885 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10885))
{var and__3546__auto____10886 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10886))
{var and__3546__auto____10887 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10887))
{return p2.call(null,z);
} else
{return and__3546__auto____10887;
}
} else
{return and__3546__auto____10886;
}
} else
{return and__3546__auto____10885;
}
} else
{return and__3546__auto____10884;
}
} else
{return and__3546__auto____10883;
}
})());
});
var ep2__11049 = (function() { 
var G__11057__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10888 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10888))
{return cljs.core.every_QMARK_.call(null,(function (p1__10768_SHARP_){
var and__3546__auto____10889 = p1.call(null,p1__10768_SHARP_);

if(cljs.core.truth_(and__3546__auto____10889))
{return p2.call(null,p1__10768_SHARP_);
} else
{return and__3546__auto____10889;
}
}),args);
} else
{return and__3546__auto____10888;
}
})());
};
var G__11057 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11057__delegate.call(this, x, y, z, args);
};
G__11057.cljs$lang$maxFixedArity = 3;
G__11057.cljs$lang$applyTo = (function (arglist__11059){
var x = cljs.core.first(arglist__11059);
var y = cljs.core.first(cljs.core.next(arglist__11059));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11059)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11059)));
return G__11057__delegate.call(this, x, y, z, args);
});
return G__11057;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11045.call(this);
case  1 :
return ep2__11046.call(this,x);
case  2 :
return ep2__11047.call(this,x,y);
case  3 :
return ep2__11048.call(this,x,y,z);
default:
return ep2__11049.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11049.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11031 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11062 = (function (){
return true;
});
var ep3__11063 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10890 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10890))
{var and__3546__auto____10893 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10893))
{return p3.call(null,x);
} else
{return and__3546__auto____10893;
}
} else
{return and__3546__auto____10890;
}
})());
});
var ep3__11065 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10898 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10898))
{var and__3546__auto____10900 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10900))
{var and__3546__auto____10902 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10902))
{var and__3546__auto____10903 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10903))
{var and__3546__auto____10905 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10905))
{return p3.call(null,y);
} else
{return and__3546__auto____10905;
}
} else
{return and__3546__auto____10903;
}
} else
{return and__3546__auto____10902;
}
} else
{return and__3546__auto____10900;
}
} else
{return and__3546__auto____10898;
}
})());
});
var ep3__11066 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10910 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10910))
{var and__3546__auto____10911 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10911))
{var and__3546__auto____10913 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10913))
{var and__3546__auto____10915 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10915))
{var and__3546__auto____10916 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10916))
{var and__3546__auto____10917 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10917))
{var and__3546__auto____10918 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10918))
{var and__3546__auto____10919 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10919))
{return p3.call(null,z);
} else
{return and__3546__auto____10919;
}
} else
{return and__3546__auto____10918;
}
} else
{return and__3546__auto____10917;
}
} else
{return and__3546__auto____10916;
}
} else
{return and__3546__auto____10915;
}
} else
{return and__3546__auto____10913;
}
} else
{return and__3546__auto____10911;
}
} else
{return and__3546__auto____10910;
}
})());
});
var ep3__11067 = (function() { 
var G__11074__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10920 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10920))
{return cljs.core.every_QMARK_.call(null,(function (p1__10771_SHARP_){
var and__3546__auto____10921 = p1.call(null,p1__10771_SHARP_);

if(cljs.core.truth_(and__3546__auto____10921))
{var and__3546__auto____10922 = p2.call(null,p1__10771_SHARP_);

if(cljs.core.truth_(and__3546__auto____10922))
{return p3.call(null,p1__10771_SHARP_);
} else
{return and__3546__auto____10922;
}
} else
{return and__3546__auto____10921;
}
}),args);
} else
{return and__3546__auto____10920;
}
})());
};
var G__11074 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11074__delegate.call(this, x, y, z, args);
};
G__11074.cljs$lang$maxFixedArity = 3;
G__11074.cljs$lang$applyTo = (function (arglist__11116){
var x = cljs.core.first(arglist__11116);
var y = cljs.core.first(cljs.core.next(arglist__11116));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11116)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11116)));
return G__11074__delegate.call(this, x, y, z, args);
});
return G__11074;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11062.call(this);
case  1 :
return ep3__11063.call(this,x);
case  2 :
return ep3__11065.call(this,x,y);
case  3 :
return ep3__11066.call(this,x,y,z);
default:
return ep3__11067.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11067.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11032 = (function() { 
var G__11119__delegate = function (p1,p2,p3,ps){
var ps__10923 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11120 = (function (){
return true;
});
var epn__11121 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10774_SHARP_){
return p1__10774_SHARP_.call(null,x);
}),ps__10923);
});
var epn__11122 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10775_SHARP_){
var and__3546__auto____10925 = p1__10775_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10925))
{return p1__10775_SHARP_.call(null,y);
} else
{return and__3546__auto____10925;
}
}),ps__10923);
});
var epn__11123 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10776_SHARP_){
var and__3546__auto____10927 = p1__10776_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10927))
{var and__3546__auto____10928 = p1__10776_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10928))
{return p1__10776_SHARP_.call(null,z);
} else
{return and__3546__auto____10928;
}
} else
{return and__3546__auto____10927;
}
}),ps__10923);
});
var epn__11124 = (function() { 
var G__11129__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10930 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10930))
{return cljs.core.every_QMARK_.call(null,(function (p1__10778_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10778_SHARP_,args);
}),ps__10923);
} else
{return and__3546__auto____10930;
}
})());
};
var G__11129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11129__delegate.call(this, x, y, z, args);
};
G__11129.cljs$lang$maxFixedArity = 3;
G__11129.cljs$lang$applyTo = (function (arglist__11132){
var x = cljs.core.first(arglist__11132);
var y = cljs.core.first(cljs.core.next(arglist__11132));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11132)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11132)));
return G__11129__delegate.call(this, x, y, z, args);
});
return G__11129;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11120.call(this);
case  1 :
return epn__11121.call(this,x);
case  2 :
return epn__11122.call(this,x,y);
case  3 :
return epn__11123.call(this,x,y,z);
default:
return epn__11124.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11124.cljs$lang$applyTo;
return epn;
})()
};
var G__11119 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11119__delegate.call(this, p1, p2, p3, ps);
};
G__11119.cljs$lang$maxFixedArity = 3;
G__11119.cljs$lang$applyTo = (function (arglist__11138){
var p1 = cljs.core.first(arglist__11138);
var p2 = cljs.core.first(cljs.core.next(arglist__11138));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11138)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11138)));
return G__11119__delegate.call(this, p1, p2, p3, ps);
});
return G__11119;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11029.call(this,p1);
case  2 :
return every_pred__11030.call(this,p1,p2);
case  3 :
return every_pred__11031.call(this,p1,p2,p3);
default:
return every_pred__11032.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11032.cljs$lang$applyTo;
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
var some_fn__11447 = (function (p){
return (function() {
var sp1 = null;
var sp1__11454 = (function (){
return null;
});
var sp1__11455 = (function (x){
return p.call(null,x);
});
var sp1__11456 = (function (x,y){
var or__3548__auto____11163 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11163))
{return or__3548__auto____11163;
} else
{return p.call(null,y);
}
});
var sp1__11457 = (function (x,y,z){
var or__3548__auto____11164 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11164))
{return or__3548__auto____11164;
} else
{var or__3548__auto____11166 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11166))
{return or__3548__auto____11166;
} else
{return p.call(null,z);
}
}
});
var sp1__11458 = (function() { 
var G__11470__delegate = function (x,y,z,args){
var or__3548__auto____11171 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11171))
{return or__3548__auto____11171;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11470 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11470__delegate.call(this, x, y, z, args);
};
G__11470.cljs$lang$maxFixedArity = 3;
G__11470.cljs$lang$applyTo = (function (arglist__11475){
var x = cljs.core.first(arglist__11475);
var y = cljs.core.first(cljs.core.next(arglist__11475));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11475)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11475)));
return G__11470__delegate.call(this, x, y, z, args);
});
return G__11470;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11454.call(this);
case  1 :
return sp1__11455.call(this,x);
case  2 :
return sp1__11456.call(this,x,y);
case  3 :
return sp1__11457.call(this,x,y,z);
default:
return sp1__11458.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11458.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11448 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11486 = (function (){
return null;
});
var sp2__11487 = (function (x){
var or__3548__auto____11177 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11177))
{return or__3548__auto____11177;
} else
{return p2.call(null,x);
}
});
var sp2__11488 = (function (x,y){
var or__3548__auto____11185 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11185))
{return or__3548__auto____11185;
} else
{var or__3548__auto____11187 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11187))
{return or__3548__auto____11187;
} else
{var or__3548__auto____11190 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11190))
{return or__3548__auto____11190;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11490 = (function (x,y,z){
var or__3548__auto____11195 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11195))
{return or__3548__auto____11195;
} else
{var or__3548__auto____11198 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11198))
{return or__3548__auto____11198;
} else
{var or__3548__auto____11200 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11200))
{return or__3548__auto____11200;
} else
{var or__3548__auto____11203 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11203))
{return or__3548__auto____11203;
} else
{var or__3548__auto____11205 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11205))
{return or__3548__auto____11205;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11491 = (function() { 
var G__11583__delegate = function (x,y,z,args){
var or__3548__auto____11214 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11214))
{return or__3548__auto____11214;
} else
{return cljs.core.some.call(null,(function (p1__10796_SHARP_){
var or__3548__auto____11217 = p1.call(null,p1__10796_SHARP_);

if(cljs.core.truth_(or__3548__auto____11217))
{return or__3548__auto____11217;
} else
{return p2.call(null,p1__10796_SHARP_);
}
}),args);
}
};
var G__11583 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11583__delegate.call(this, x, y, z, args);
};
G__11583.cljs$lang$maxFixedArity = 3;
G__11583.cljs$lang$applyTo = (function (arglist__11599){
var x = cljs.core.first(arglist__11599);
var y = cljs.core.first(cljs.core.next(arglist__11599));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11599)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11599)));
return G__11583__delegate.call(this, x, y, z, args);
});
return G__11583;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11486.call(this);
case  1 :
return sp2__11487.call(this,x);
case  2 :
return sp2__11488.call(this,x,y);
case  3 :
return sp2__11490.call(this,x,y,z);
default:
return sp2__11491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11491.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11449 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11600 = (function (){
return null;
});
var sp3__11602 = (function (x){
var or__3548__auto____11225 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11225))
{return or__3548__auto____11225;
} else
{var or__3548__auto____11228 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11228))
{return or__3548__auto____11228;
} else
{return p3.call(null,x);
}
}
});
var sp3__11603 = (function (x,y){
var or__3548__auto____11231 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11231))
{return or__3548__auto____11231;
} else
{var or__3548__auto____11234 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11234))
{return or__3548__auto____11234;
} else
{var or__3548__auto____11237 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11237))
{return or__3548__auto____11237;
} else
{var or__3548__auto____11240 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11240))
{return or__3548__auto____11240;
} else
{var or__3548__auto____11242 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11242))
{return or__3548__auto____11242;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11604 = (function (x,y,z){
var or__3548__auto____11246 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11246))
{return or__3548__auto____11246;
} else
{var or__3548__auto____11248 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11248))
{return or__3548__auto____11248;
} else
{var or__3548__auto____11250 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11250))
{return or__3548__auto____11250;
} else
{var or__3548__auto____11252 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11252))
{return or__3548__auto____11252;
} else
{var or__3548__auto____11255 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11255))
{return or__3548__auto____11255;
} else
{var or__3548__auto____11257 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11257))
{return or__3548__auto____11257;
} else
{var or__3548__auto____11259 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11259))
{return or__3548__auto____11259;
} else
{var or__3548__auto____11261 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11261))
{return or__3548__auto____11261;
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
var sp3__11605 = (function() { 
var G__11624__delegate = function (x,y,z,args){
var or__3548__auto____11263 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11263))
{return or__3548__auto____11263;
} else
{return cljs.core.some.call(null,(function (p1__10857_SHARP_){
var or__3548__auto____11326 = p1.call(null,p1__10857_SHARP_);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{var or__3548__auto____11327 = p2.call(null,p1__10857_SHARP_);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{return p3.call(null,p1__10857_SHARP_);
}
}
}),args);
}
};
var G__11624 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11624__delegate.call(this, x, y, z, args);
};
G__11624.cljs$lang$maxFixedArity = 3;
G__11624.cljs$lang$applyTo = (function (arglist__11630){
var x = cljs.core.first(arglist__11630);
var y = cljs.core.first(cljs.core.next(arglist__11630));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11630)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11630)));
return G__11624__delegate.call(this, x, y, z, args);
});
return G__11624;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11600.call(this);
case  1 :
return sp3__11602.call(this,x);
case  2 :
return sp3__11603.call(this,x,y);
case  3 :
return sp3__11604.call(this,x,y,z);
default:
return sp3__11605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11605.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11450 = (function() { 
var G__11638__delegate = function (p1,p2,p3,ps){
var ps__11328 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11640 = (function (){
return null;
});
var spn__11641 = (function (x){
return cljs.core.some.call(null,(function (p1__10859_SHARP_){
return p1__10859_SHARP_.call(null,x);
}),ps__11328);
});
var spn__11642 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10860_SHARP_){
var or__3548__auto____11332 = p1__10860_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11332))
{return or__3548__auto____11332;
} else
{return p1__10860_SHARP_.call(null,y);
}
}),ps__11328);
});
var spn__11643 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10862_SHARP_){
var or__3548__auto____11336 = p1__10862_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11336))
{return or__3548__auto____11336;
} else
{var or__3548__auto____11337 = p1__10862_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11337))
{return or__3548__auto____11337;
} else
{return p1__10862_SHARP_.call(null,z);
}
}
}),ps__11328);
});
var spn__11644 = (function() { 
var G__11656__delegate = function (x,y,z,args){
var or__3548__auto____11340 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11340))
{return or__3548__auto____11340;
} else
{return cljs.core.some.call(null,(function (p1__10863_SHARP_){
return cljs.core.some.call(null,p1__10863_SHARP_,args);
}),ps__11328);
}
};
var G__11656 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11656__delegate.call(this, x, y, z, args);
};
G__11656.cljs$lang$maxFixedArity = 3;
G__11656.cljs$lang$applyTo = (function (arglist__11658){
var x = cljs.core.first(arglist__11658);
var y = cljs.core.first(cljs.core.next(arglist__11658));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11658)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11658)));
return G__11656__delegate.call(this, x, y, z, args);
});
return G__11656;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11640.call(this);
case  1 :
return spn__11641.call(this,x);
case  2 :
return spn__11642.call(this,x,y);
case  3 :
return spn__11643.call(this,x,y,z);
default:
return spn__11644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11644.cljs$lang$applyTo;
return spn;
})()
};
var G__11638 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11638__delegate.call(this, p1, p2, p3, ps);
};
G__11638.cljs$lang$maxFixedArity = 3;
G__11638.cljs$lang$applyTo = (function (arglist__11660){
var p1 = cljs.core.first(arglist__11660);
var p2 = cljs.core.first(cljs.core.next(arglist__11660));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11660)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11660)));
return G__11638__delegate.call(this, p1, p2, p3, ps);
});
return G__11638;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11447.call(this,p1);
case  2 :
return some_fn__11448.call(this,p1,p2);
case  3 :
return some_fn__11449.call(this,p1,p2,p3);
default:
return some_fn__11450.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11450.cljs$lang$applyTo;
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
var map__11719 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11674 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11674))
{var s__11676 = temp__3698__auto____11674;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11676)),map.call(null,f,cljs.core.rest.call(null,s__11676)));
} else
{return null;
}
})));
});
var map__11720 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11680 = cljs.core.seq.call(null,c1);
var s2__11682 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11685 = s1__11680;

if(cljs.core.truth_(and__3546__auto____11685))
{return s2__11682;
} else
{return and__3546__auto____11685;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11680),cljs.core.first.call(null,s2__11682)),map.call(null,f,cljs.core.rest.call(null,s1__11680),cljs.core.rest.call(null,s2__11682)));
} else
{return null;
}
})));
});
var map__11721 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11694 = cljs.core.seq.call(null,c1);
var s2__11695 = cljs.core.seq.call(null,c2);
var s3__11697 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11705 = s1__11694;

if(cljs.core.truth_(and__3546__auto____11705))
{var and__3546__auto____11707 = s2__11695;

if(cljs.core.truth_(and__3546__auto____11707))
{return s3__11697;
} else
{return and__3546__auto____11707;
}
} else
{return and__3546__auto____11705;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11694),cljs.core.first.call(null,s2__11695),cljs.core.first.call(null,s3__11697)),map.call(null,f,cljs.core.rest.call(null,s1__11694),cljs.core.rest.call(null,s2__11695),cljs.core.rest.call(null,s3__11697)));
} else
{return null;
}
})));
});
var map__11722 = (function() { 
var G__11748__delegate = function (f,c1,c2,c3,colls){
var step__11714 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11711 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11711)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11711),step.call(null,map.call(null,cljs.core.rest,ss__11711)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11144_SHARP_){
return cljs.core.apply.call(null,f,p1__11144_SHARP_);
}),step__11714.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11748 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11748__delegate.call(this, f, c1, c2, c3, colls);
};
G__11748.cljs$lang$maxFixedArity = 4;
G__11748.cljs$lang$applyTo = (function (arglist__11757){
var f = cljs.core.first(arglist__11757);
var c1 = cljs.core.first(cljs.core.next(arglist__11757));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11757)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11757))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11757))));
return G__11748__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11748;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11719.call(this,f,c1);
case  3 :
return map__11720.call(this,f,c1,c2);
case  4 :
return map__11721.call(this,f,c1,c2,c3);
default:
return map__11722.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11722.cljs$lang$applyTo;
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
{var temp__3698__auto____11763 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11763))
{var s__11765 = temp__3698__auto____11763;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11765),take.call(null,(n - 1),cljs.core.rest.call(null,s__11765)));
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
var step__11791 = (function (n,coll){
while(true){
var s__11781 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11783 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11783))
{return s__11781;
} else
{return and__3546__auto____11783;
}
})()))
{{
var G__11798 = (n - 1);
var G__11799 = cljs.core.rest.call(null,s__11781);
n = G__11798;
coll = G__11799;
continue;
}
} else
{return s__11781;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11791.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11809 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11810 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11809.call(this,n);
case  2 :
return drop_last__11810.call(this,n,s);
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
var s__11815 = cljs.core.seq.call(null,coll);
var lead__11816 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11816))
{{
var G__11824 = cljs.core.next.call(null,s__11815);
var G__11826 = cljs.core.next.call(null,lead__11816);
s__11815 = G__11824;
lead__11816 = G__11826;
continue;
}
} else
{return s__11815;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11835 = (function (pred,coll){
while(true){
var s__11830 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11831 = s__11830;

if(cljs.core.truth_(and__3546__auto____11831))
{return pred.call(null,cljs.core.first.call(null,s__11830));
} else
{return and__3546__auto____11831;
}
})()))
{{
var G__11843 = pred;
var G__11844 = cljs.core.rest.call(null,s__11830);
pred = G__11843;
coll = G__11844;
continue;
}
} else
{return s__11830;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11835.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11847 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11847))
{var s__11881 = temp__3698__auto____11847;

return cljs.core.concat.call(null,s__11881,cycle.call(null,s__11881));
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
var repeat__11900 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11901 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11900.call(this,n);
case  2 :
return repeat__11901.call(this,n,x);
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
var repeatedly__11940 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11942 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11940.call(this,n);
case  2 :
return repeatedly__11942.call(this,n,f);
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
var interleave__11973 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11955 = cljs.core.seq.call(null,c1);
var s2__11956 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11958 = s1__11955;

if(cljs.core.truth_(and__3546__auto____11958))
{return s2__11956;
} else
{return and__3546__auto____11958;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11955),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11956),interleave.call(null,cljs.core.rest.call(null,s1__11955),cljs.core.rest.call(null,s2__11956))));
} else
{return null;
}
})));
});
var interleave__11974 = (function() { 
var G__11981__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11965 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11965)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11965),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11965)));
} else
{return null;
}
})));
};
var G__11981 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11981__delegate.call(this, c1, c2, colls);
};
G__11981.cljs$lang$maxFixedArity = 2;
G__11981.cljs$lang$applyTo = (function (arglist__11983){
var c1 = cljs.core.first(arglist__11983);
var c2 = cljs.core.first(cljs.core.next(arglist__11983));
var colls = cljs.core.rest(cljs.core.next(arglist__11983));
return G__11981__delegate.call(this, c1, c2, colls);
});
return G__11981;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11973.call(this,c1,c2);
default:
return interleave__11974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11974.cljs$lang$applyTo;
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
var cat__12019 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12011 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12011))
{var coll__12012 = temp__3695__auto____12011;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12012),cat.call(null,cljs.core.rest.call(null,coll__12012),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12019.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12024 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12025 = (function() { 
var G__12027__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12027 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12027__delegate.call(this, f, coll, colls);
};
G__12027.cljs$lang$maxFixedArity = 2;
G__12027.cljs$lang$applyTo = (function (arglist__12033){
var f = cljs.core.first(arglist__12033);
var coll = cljs.core.first(cljs.core.next(arglist__12033));
var colls = cljs.core.rest(cljs.core.next(arglist__12033));
return G__12027__delegate.call(this, f, coll, colls);
});
return G__12027;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12024.call(this,f,coll);
default:
return mapcat__12025.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12025.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12039 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12039))
{var s__12040 = temp__3698__auto____12039;

var f__12042 = cljs.core.first.call(null,s__12040);
var r__12043 = cljs.core.rest.call(null,s__12040);

if(cljs.core.truth_(pred.call(null,f__12042)))
{return cljs.core.cons.call(null,f__12042,filter.call(null,pred,r__12043));
} else
{return filter.call(null,pred,r__12043);
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
var walk__12054 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12054.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12053_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12053_SHARP_));
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
var partition__12092 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12093 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12074 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12074))
{var s__12077 = temp__3698__auto____12074;

var p__12078 = cljs.core.take.call(null,n,s__12077);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12078))))
{return cljs.core.cons.call(null,p__12078,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12077)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12094 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12082))
{var s__12084 = temp__3698__auto____12082;

var p__12086 = cljs.core.take.call(null,n,s__12084);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12086))))
{return cljs.core.cons.call(null,p__12086,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12084)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12086,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12092.call(this,n,step);
case  3 :
return partition__12093.call(this,n,step,pad);
case  4 :
return partition__12094.call(this,n,step,pad,coll);
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
var get_in__12117 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12119 = (function (m,ks,not_found){
var sentinel__12108 = cljs.core.lookup_sentinel;
var m__12110 = m;
var ks__12111 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12111))
{var m__12113 = cljs.core.get.call(null,m__12110,cljs.core.first.call(null,ks__12111),sentinel__12108);

if(cljs.core.truth_((sentinel__12108 === m__12113)))
{return not_found;
} else
{{
var G__12124 = sentinel__12108;
var G__12125 = m__12113;
var G__12126 = cljs.core.next.call(null,ks__12111);
sentinel__12108 = G__12124;
m__12110 = G__12125;
ks__12111 = G__12126;
continue;
}
}
} else
{return m__12110;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12117.call(this,m,ks);
case  3 :
return get_in__12119.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12127,v){
var vec__12129__12130 = p__12127;
var k__12132 = cljs.core.nth.call(null,vec__12129__12130,0,null);
var ks__12134 = cljs.core.nthnext.call(null,vec__12129__12130,1);

if(cljs.core.truth_(ks__12134))
{return cljs.core.assoc.call(null,m,k__12132,assoc_in.call(null,cljs.core.get.call(null,m,k__12132),ks__12134,v));
} else
{return cljs.core.assoc.call(null,m,k__12132,v);
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
var update_in__delegate = function (m,p__12139,f,args){
var vec__12140__12141 = p__12139;
var k__12142 = cljs.core.nth.call(null,vec__12140__12141,0,null);
var ks__12143 = cljs.core.nthnext.call(null,vec__12140__12141,1);

if(cljs.core.truth_(ks__12143))
{return cljs.core.assoc.call(null,m,k__12142,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12142),ks__12143,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12142,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12142),args));
}
};
var update_in = function (m,p__12139,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12139, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12145){
var m = cljs.core.first(arglist__12145);
var p__12139 = cljs.core.first(cljs.core.next(arglist__12145));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12145)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12145)));
return update_in__delegate.call(this, m, p__12139, f, args);
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
var this__12176 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12235 = null;
var G__12235__12236 = (function (coll,k){
var this__12178 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12235__12237 = (function (coll,k,not_found){
var this__12180 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12235 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12235__12236.call(this,coll,k);
case  3 :
return G__12235__12237.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12235;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12185 = this;
var new_array__12186 = cljs.core.aclone.call(null,this__12185.array);

(new_array__12186[k] = v);
return (new cljs.core.Vector(this__12185.meta,new_array__12186));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12246 = null;
var G__12246__12248 = (function (coll,k){
var this__12190 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12246__12249 = (function (coll,k,not_found){
var this__12192 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12246 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12246__12248.call(this,coll,k);
case  3 :
return G__12246__12249.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12246;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12193 = this;
var new_array__12196 = cljs.core.aclone.call(null,this__12193.array);

new_array__12196.push(o);
return (new cljs.core.Vector(this__12193.meta,new_array__12196));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12258 = null;
var G__12258__12259 = (function (v,f){
var this__12203 = this;
return cljs.core.ci_reduce.call(null,this__12203.array,f);
});
var G__12258__12260 = (function (v,f,start){
var this__12204 = this;
return cljs.core.ci_reduce.call(null,this__12204.array,f,start);
});
G__12258 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12258__12259.call(this,v,f);
case  3 :
return G__12258__12260.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12258;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12205 = this;
if(cljs.core.truth_((this__12205.array.length > 0)))
{var vector_seq__12207 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12205.array.length)))
{return cljs.core.cons.call(null,(this__12205.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12207.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12209 = this;
return this__12209.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12210 = this;
var count__12212 = this__12210.array.length;

if(cljs.core.truth_((count__12212 > 0)))
{return (this__12210.array[(count__12212 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12217 = this;
if(cljs.core.truth_((this__12217.array.length > 0)))
{var new_array__12218 = cljs.core.aclone.call(null,this__12217.array);

new_array__12218.pop();
return (new cljs.core.Vector(this__12217.meta,new_array__12218));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12219 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12222 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12223 = this;
return (new cljs.core.Vector(meta,this__12223.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12226 = this;
return this__12226.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12332 = null;
var G__12332__12333 = (function (coll,n){
var this__12227 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12228 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12228))
{return (n < this__12227.array.length);
} else
{return and__3546__auto____12228;
}
})()))
{return (this__12227.array[n]);
} else
{return null;
}
});
var G__12332__12334 = (function (coll,n,not_found){
var this__12229 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12230 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12230))
{return (n < this__12229.array.length);
} else
{return and__3546__auto____12230;
}
})()))
{return (this__12229.array[n]);
} else
{return not_found;
}
});
G__12332 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12332__12333.call(this,coll,n);
case  3 :
return G__12332__12334.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12332;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12231 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12231.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12363){
var args = cljs.core.seq( arglist__12363 );;
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
var this__12379 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12430 = null;
var G__12430__12432 = (function (coll,k){
var this__12382 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12430__12434 = (function (coll,k,not_found){
var this__12389 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12430 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12430__12432.call(this,coll,k);
case  3 :
return G__12430__12434.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12430;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12390 = this;
var v_pos__12391 = (this__12390.start + key);

return (new cljs.core.Subvec(this__12390.meta,cljs.core._assoc.call(null,this__12390.v,v_pos__12391,val),this__12390.start,((this__12390.end > (v_pos__12391 + 1)) ? this__12390.end : (v_pos__12391 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12437 = null;
var G__12437__12438 = (function (coll,k){
var this__12397 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12437__12439 = (function (coll,k,not_found){
var this__12401 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12437 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12437__12438.call(this,coll,k);
case  3 :
return G__12437__12439.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12437;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12402 = this;
return (new cljs.core.Subvec(this__12402.meta,cljs.core._assoc_n.call(null,this__12402.v,this__12402.end,o),this__12402.start,(this__12402.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12441 = null;
var G__12441__12442 = (function (coll,f){
var this__12403 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12441__12443 = (function (coll,f,start){
var this__12408 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12441 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12441__12442.call(this,coll,f);
case  3 :
return G__12441__12443.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12441;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12409 = this;
var subvec_seq__12410 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12409.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12409.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12410.call(null,this__12409.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12411 = this;
return (this__12411.end - this__12411.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12412 = this;
return cljs.core._nth.call(null,this__12412.v,(this__12412.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12413 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12413.start,this__12413.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12413.meta,this__12413.v,this__12413.start,(this__12413.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12414 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12415 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12416 = this;
return (new cljs.core.Subvec(meta,this__12416.v,this__12416.start,this__12416.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12418 = this;
return this__12418.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12447 = null;
var G__12447__12448 = (function (coll,n){
var this__12422 = this;
return cljs.core._nth.call(null,this__12422.v,(this__12422.start + n));
});
var G__12447__12449 = (function (coll,n,not_found){
var this__12424 = this;
return cljs.core._nth.call(null,this__12424.v,(this__12424.start + n),not_found);
});
G__12447 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12447__12448.call(this,coll,n);
case  3 :
return G__12447__12449.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12447;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12428 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12428.meta);
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
var subvec__12457 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12458 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12457.call(this,v,start);
case  3 :
return subvec__12458.call(this,v,start,end);
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
var this__12474 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12476 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12478 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12480 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12480.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12482 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12483 = this;
return cljs.core._first.call(null,this__12483.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12485 = this;
var temp__3695__auto____12487 = cljs.core.next.call(null,this__12485.front);

if(cljs.core.truth_(temp__3695__auto____12487))
{var f1__12488 = temp__3695__auto____12487;

return (new cljs.core.PersistentQueueSeq(this__12485.meta,f1__12488,this__12485.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12485.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12485.meta,this__12485.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12490 = this;
return this__12490.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12492 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12492.front,this__12492.rear));
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
var this__12566 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12568 = this;
if(cljs.core.truth_(this__12568.front))
{return (new cljs.core.PersistentQueue(this__12568.meta,(this__12568.count + 1),this__12568.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12573 = this__12568.rear;

if(cljs.core.truth_(or__3548__auto____12573))
{return or__3548__auto____12573;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12568.meta,(this__12568.count + 1),cljs.core.conj.call(null,this__12568.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12574 = this;
var rear__12575 = cljs.core.seq.call(null,this__12574.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12582 = this__12574.front;

if(cljs.core.truth_(or__3548__auto____12582))
{return or__3548__auto____12582;
} else
{return rear__12575;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12574.front,cljs.core.seq.call(null,rear__12575)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12589 = this;
return this__12589.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12590 = this;
return cljs.core._first.call(null,this__12590.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12591 = this;
if(cljs.core.truth_(this__12591.front))
{var temp__3695__auto____12594 = cljs.core.next.call(null,this__12591.front);

if(cljs.core.truth_(temp__3695__auto____12594))
{var f1__12598 = temp__3695__auto____12594;

return (new cljs.core.PersistentQueue(this__12591.meta,(this__12591.count - 1),f1__12598,this__12591.rear));
} else
{return (new cljs.core.PersistentQueue(this__12591.meta,(this__12591.count - 1),cljs.core.seq.call(null,this__12591.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12599 = this;
return cljs.core.first.call(null,this__12599.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12600 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12602 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12609 = this;
return (new cljs.core.PersistentQueue(meta,this__12609.count,this__12609.front,this__12609.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12610 = this;
return this__12610.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12611 = this;
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
var this__12645 = this;
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
var len__12677 = array.length;

var i__12679 = 0;

while(true){
if(cljs.core.truth_((i__12679 < len__12677)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12679]))))
{return i__12679;
} else
{{
var G__12687 = (i__12679 + incr);
i__12679 = G__12687;
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
var obj_map_contains_key_QMARK___12697 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12698 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12695 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12695))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12695;
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
return obj_map_contains_key_QMARK___12697.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12698.call(this,k,strobj,true_val,false_val);
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
var this__12711 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12769 = null;
var G__12769__12770 = (function (coll,k){
var this__12714 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12769__12771 = (function (coll,k,not_found){
var this__12716 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12716.strobj,(this__12716.strobj[k]),not_found);
});
G__12769 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12769__12770.call(this,coll,k);
case  3 :
return G__12769__12771.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12769;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12725 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12726 = goog.object.clone.call(null,this__12725.strobj);
var overwrite_QMARK___12727 = new_strobj__12726.hasOwnProperty(k);

(new_strobj__12726[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12727))
{return (new cljs.core.ObjMap(this__12725.meta,this__12725.keys,new_strobj__12726));
} else
{var new_keys__12729 = cljs.core.aclone.call(null,this__12725.keys);

new_keys__12729.push(k);
return (new cljs.core.ObjMap(this__12725.meta,new_keys__12729,new_strobj__12726));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12725.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12732 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12732.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12786 = null;
var G__12786__12787 = (function (coll,k){
var this__12734 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12786__12788 = (function (coll,k,not_found){
var this__12736 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12786 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12786__12787.call(this,coll,k);
case  3 :
return G__12786__12788.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12786;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12738 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12743 = this;
if(cljs.core.truth_((this__12743.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12703_SHARP_){
return cljs.core.vector.call(null,p1__12703_SHARP_,(this__12743.strobj[p1__12703_SHARP_]));
}),this__12743.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12747 = this;
return this__12747.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12748 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12749 = this;
return (new cljs.core.ObjMap(meta,this__12749.keys,this__12749.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12750 = this;
return this__12750.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12751 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12751.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12754 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12755 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12755))
{return this__12754.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12755;
}
})()))
{var new_keys__12757 = cljs.core.aclone.call(null,this__12754.keys);
var new_strobj__12759 = goog.object.clone.call(null,this__12754.strobj);

new_keys__12757.splice(cljs.core.scan_array.call(null,1,k,new_keys__12757),1);
cljs.core.js_delete.call(null,new_strobj__12759,k);
return (new cljs.core.ObjMap(this__12754.meta,new_keys__12757,new_strobj__12759));
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
var this__12868 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13039 = null;
var G__13039__13040 = (function (coll,k){
var this__12869 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13039__13042 = (function (coll,k,not_found){
var this__12870 = this;
var bucket__12871 = (this__12870.hashobj[cljs.core.hash.call(null,k)]);
var i__12872 = (cljs.core.truth_(bucket__12871)?cljs.core.scan_array.call(null,2,k,bucket__12871):null);

if(cljs.core.truth_(i__12872))
{return (bucket__12871[(i__12872 + 1)]);
} else
{return not_found;
}
});
G__13039 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13039__13040.call(this,coll,k);
case  3 :
return G__13039__13042.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13039;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12873 = this;
var h__12875 = cljs.core.hash.call(null,k);
var bucket__12876 = (this__12873.hashobj[h__12875]);

if(cljs.core.truth_(bucket__12876))
{var new_bucket__12878 = cljs.core.aclone.call(null,bucket__12876);
var new_hashobj__12880 = goog.object.clone.call(null,this__12873.hashobj);

(new_hashobj__12880[h__12875] = new_bucket__12878);
var temp__3695__auto____12881 = cljs.core.scan_array.call(null,2,k,new_bucket__12878);

if(cljs.core.truth_(temp__3695__auto____12881))
{var i__12883 = temp__3695__auto____12881;

(new_bucket__12878[(i__12883 + 1)] = v);
return (new cljs.core.HashMap(this__12873.meta,this__12873.count,new_hashobj__12880));
} else
{new_bucket__12878.push(k,v);
return (new cljs.core.HashMap(this__12873.meta,(this__12873.count + 1),new_hashobj__12880));
}
} else
{var new_hashobj__12887 = goog.object.clone.call(null,this__12873.hashobj);

(new_hashobj__12887[h__12875] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12873.meta,(this__12873.count + 1),new_hashobj__12887));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12888 = this;
var bucket__12890 = (this__12888.hashobj[cljs.core.hash.call(null,k)]);
var i__12892 = (cljs.core.truth_(bucket__12890)?cljs.core.scan_array.call(null,2,k,bucket__12890):null);

if(cljs.core.truth_(i__12892))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13057 = null;
var G__13057__13059 = (function (coll,k){
var this__12894 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13057__13060 = (function (coll,k,not_found){
var this__12896 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13057 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13057__13059.call(this,coll,k);
case  3 :
return G__13057__13060.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13057;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12898 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12900 = this;
if(cljs.core.truth_((this__12900.count > 0)))
{var hashes__12950 = cljs.core.js_keys.call(null,this__12900.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12828_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12900.hashobj[p1__12828_SHARP_])));
}),hashes__12950);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12952 = this;
return this__12952.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13008 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13010 = this;
return (new cljs.core.HashMap(meta,this__13010.count,this__13010.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13016 = this;
return this__13016.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13019 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13019.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13022 = this;
var h__13025 = cljs.core.hash.call(null,k);
var bucket__13026 = (this__13022.hashobj[h__13025]);
var i__13027 = (cljs.core.truth_(bucket__13026)?cljs.core.scan_array.call(null,2,k,bucket__13026):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13027)))
{return coll;
} else
{var new_hashobj__13028 = goog.object.clone.call(null,this__13022.hashobj);

if(cljs.core.truth_((3 > bucket__13026.length)))
{cljs.core.js_delete.call(null,new_hashobj__13028,h__13025);
} else
{var new_bucket__13030 = cljs.core.aclone.call(null,bucket__13026);

new_bucket__13030.splice(i__13027,2);
(new_hashobj__13028[h__13025] = new_bucket__13030);
}
return (new cljs.core.HashMap(this__13022.meta,(this__13022.count - 1),new_hashobj__13028));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13122 = ks.length;

var i__13123 = 0;
var out__13124 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13123 < len__13122)))
{{
var G__13125 = (i__13123 + 1);
var G__13126 = cljs.core.assoc.call(null,out__13124,(ks[i__13123]),(vs[i__13123]));
i__13123 = G__13125;
out__13124 = G__13126;
continue;
}
} else
{return out__13124;
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
var in$__13127 = cljs.core.seq.call(null,keyvals);
var out__13128 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13127))
{{
var G__13138 = cljs.core.nnext.call(null,in$__13127);
var G__13139 = cljs.core.assoc.call(null,out__13128,cljs.core.first.call(null,in$__13127),cljs.core.second.call(null,in$__13127));
in$__13127 = G__13138;
out__13128 = G__13139;
continue;
}
} else
{return out__13128;
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
hash_map.cljs$lang$applyTo = (function (arglist__13142){
var keyvals = cljs.core.seq( arglist__13142 );;
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
{return cljs.core.reduce.call(null,(function (p1__13147_SHARP_,p2__13164_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13177 = p1__13147_SHARP_;

if(cljs.core.truth_(or__3548__auto____13177))
{return or__3548__auto____13177;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13164_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13184){
var maps = cljs.core.seq( arglist__13184 );;
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
{var merge_entry__13187 = (function (m,e){
var k__13185 = cljs.core.first.call(null,e);
var v__13186 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13185)))
{return cljs.core.assoc.call(null,m,k__13185,f.call(null,cljs.core.get.call(null,m,k__13185),v__13186));
} else
{return cljs.core.assoc.call(null,m,k__13185,v__13186);
}
});
var merge2__13190 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13187,(function (){var or__3548__auto____13188 = m1;

if(cljs.core.truth_(or__3548__auto____13188))
{return or__3548__auto____13188;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13190,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13231){
var f = cljs.core.first(arglist__13231);
var maps = cljs.core.rest(arglist__13231);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13235 = cljs.core.ObjMap.fromObject([],{});
var keys__13236 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13236))
{var key__13237 = cljs.core.first.call(null,keys__13236);
var entry__13238 = cljs.core.get.call(null,map,key__13237,"﷐'user/not-found");

{
var G__13243 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13238,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13235,key__13237,entry__13238):ret__13235);
var G__13244 = cljs.core.next.call(null,keys__13236);
ret__13235 = G__13243;
keys__13236 = G__13244;
continue;
}
} else
{return ret__13235;
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
var this__13250 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13303 = null;
var G__13303__13304 = (function (coll,v){
var this__13252 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13303__13306 = (function (coll,v,not_found){
var this__13253 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13253.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13303 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13303__13304.call(this,coll,v);
case  3 :
return G__13303__13306.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13303;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13314 = null;
var G__13314__13315 = (function (coll,k){
var this__13254 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13314__13317 = (function (coll,k,not_found){
var this__13255 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13314 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13314__13315.call(this,coll,k);
case  3 :
return G__13314__13317.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13314;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13256 = this;
return (new cljs.core.Set(this__13256.meta,cljs.core.assoc.call(null,this__13256.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13257 = this;
return cljs.core.keys.call(null,this__13257.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13258 = this;
return (new cljs.core.Set(this__13258.meta,cljs.core.dissoc.call(null,this__13258.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13260 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13261 = this;
var and__3546__auto____13278 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13278))
{var and__3546__auto____13281 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13281))
{return cljs.core.every_QMARK_.call(null,(function (p1__13232_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13232_SHARP_);
}),other);
} else
{return and__3546__auto____13281;
}
} else
{return and__3546__auto____13278;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13287 = this;
return (new cljs.core.Set(meta,this__13287.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13293 = this;
return this__13293.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13295 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13295.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13347 = cljs.core.seq.call(null,coll);
var out__13348 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13347))))
{{
var G__13349 = cljs.core.rest.call(null,in$__13347);
var G__13350 = cljs.core.conj.call(null,out__13348,cljs.core.first.call(null,in$__13347));
in$__13347 = G__13349;
out__13348 = G__13350;
continue;
}
} else
{return out__13348;
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
{var n__13355 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13361 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13361))
{var e__13364 = temp__3695__auto____13361;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13364));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13355,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13346_SHARP_){
var temp__3695__auto____13369 = cljs.core.find.call(null,smap,p1__13346_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13369))
{var e__13371 = temp__3695__auto____13369;

return cljs.core.second.call(null,e__13371);
} else
{return p1__13346_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13404 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13390,seen){
while(true){
var vec__13391__13393 = p__13390;
var f__13394 = cljs.core.nth.call(null,vec__13391__13393,0,null);
var xs__13395 = vec__13391__13393;

var temp__3698__auto____13397 = cljs.core.seq.call(null,xs__13395);

if(cljs.core.truth_(temp__3698__auto____13397))
{var s__13398 = temp__3698__auto____13397;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13394)))
{{
var G__13417 = cljs.core.rest.call(null,s__13398);
var G__13418 = seen;
p__13390 = G__13417;
seen = G__13418;
continue;
}
} else
{return cljs.core.cons.call(null,f__13394,step.call(null,cljs.core.rest.call(null,s__13398),cljs.core.conj.call(null,seen,f__13394)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13404.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13421 = cljs.core.Vector.fromArray([]);
var s__13422 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13422)))
{{
var G__13497 = cljs.core.conj.call(null,ret__13421,cljs.core.first.call(null,s__13422));
var G__13498 = cljs.core.next.call(null,s__13422);
ret__13421 = G__13497;
s__13422 = G__13498;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13421);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13507 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13507))
{return or__3548__auto____13507;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13508 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13508 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13508 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13569 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13569))
{return or__3548__auto____13569;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13572 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13572 > -1)))
{return cljs.core.subs.call(null,x,2,i__13572);
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
var map__13589 = cljs.core.ObjMap.fromObject([],{});
var ks__13590 = cljs.core.seq.call(null,keys);
var vs__13592 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13593 = ks__13590;

if(cljs.core.truth_(and__3546__auto____13593))
{return vs__13592;
} else
{return and__3546__auto____13593;
}
})()))
{{
var G__13596 = cljs.core.assoc.call(null,map__13589,cljs.core.first.call(null,ks__13590),cljs.core.first.call(null,vs__13592));
var G__13597 = cljs.core.next.call(null,ks__13590);
var G__13598 = cljs.core.next.call(null,vs__13592);
map__13589 = G__13596;
ks__13590 = G__13597;
vs__13592 = G__13598;
continue;
}
} else
{return map__13589;
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
var max_key__13644 = (function (k,x){
return x;
});
var max_key__13645 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13646 = (function() { 
var G__13648__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13586_SHARP_,p2__13587_SHARP_){
return max_key.call(null,k,p1__13586_SHARP_,p2__13587_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13648 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13648__delegate.call(this, k, x, y, more);
};
G__13648.cljs$lang$maxFixedArity = 3;
G__13648.cljs$lang$applyTo = (function (arglist__13653){
var k = cljs.core.first(arglist__13653);
var x = cljs.core.first(cljs.core.next(arglist__13653));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13653)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13653)));
return G__13648__delegate.call(this, k, x, y, more);
});
return G__13648;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13644.call(this,k,x);
case  3 :
return max_key__13645.call(this,k,x,y);
default:
return max_key__13646.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13646.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13656 = (function (k,x){
return x;
});
var min_key__13657 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13658 = (function() { 
var G__13666__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13603_SHARP_,p2__13604_SHARP_){
return min_key.call(null,k,p1__13603_SHARP_,p2__13604_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13666 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13666__delegate.call(this, k, x, y, more);
};
G__13666.cljs$lang$maxFixedArity = 3;
G__13666.cljs$lang$applyTo = (function (arglist__13669){
var k = cljs.core.first(arglist__13669);
var x = cljs.core.first(cljs.core.next(arglist__13669));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13669)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13669)));
return G__13666__delegate.call(this, k, x, y, more);
});
return G__13666;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13656.call(this,k,x);
case  3 :
return min_key__13657.call(this,k,x,y);
default:
return min_key__13658.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13658.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13681 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13682 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13675 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13675))
{var s__13676 = temp__3698__auto____13675;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13676),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13676)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13681.call(this,n,step);
case  3 :
return partition_all__13682.call(this,n,step,coll);
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
var temp__3698__auto____13694 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13694))
{var s__13695 = temp__3698__auto____13694;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13695))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13695),take_while.call(null,pred,cljs.core.rest.call(null,s__13695)));
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
var this__13709 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13711 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13811 = null;
var G__13811__13812 = (function (rng,f){
var this__13714 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13811__13813 = (function (rng,f,s){
var this__13716 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13811 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13811__13812.call(this,rng,f);
case  3 :
return G__13811__13813.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13811;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13717 = this;
var comp__13721 = (cljs.core.truth_((this__13717.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13721.call(null,this__13717.start,this__13717.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13727 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13727.end - this__13727.start) / this__13727.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13729 = this;
return this__13729.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13732 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13732.meta,(this__13732.start + this__13732.step),this__13732.end,this__13732.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13735 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13737 = this;
return (new cljs.core.Range(meta,this__13737.start,this__13737.end,this__13737.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13740 = this;
return this__13740.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13833 = null;
var G__13833__13834 = (function (rng,n){
var this__13742 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13742.start + (n * this__13742.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13745 = (this__13742.start > this__13742.end);

if(cljs.core.truth_(and__3546__auto____13745))
{return cljs.core._EQ_.call(null,this__13742.step,0);
} else
{return and__3546__auto____13745;
}
})()))
{return this__13742.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13833__13835 = (function (rng,n,not_found){
var this__13747 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13747.start + (n * this__13747.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13749 = (this__13747.start > this__13747.end);

if(cljs.core.truth_(and__3546__auto____13749))
{return cljs.core._EQ_.call(null,this__13747.step,0);
} else
{return and__3546__auto____13749;
}
})()))
{return this__13747.start;
} else
{return not_found;
}
}
});
G__13833 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13833__13834.call(this,rng,n);
case  3 :
return G__13833__13835.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13833;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13750 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13750.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13849 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13850 = (function (end){
return range.call(null,0,end,1);
});
var range__13851 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13852 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13849.call(this);
case  1 :
return range__13850.call(this,start);
case  2 :
return range__13851.call(this,start,end);
case  3 :
return range__13852.call(this,start,end,step);
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
var temp__3698__auto____13866 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13866))
{var s__13867 = temp__3698__auto____13866;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13867),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13867)));
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
var temp__3698__auto____13879 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13879))
{var s__13882 = temp__3698__auto____13879;

var fst__13883 = cljs.core.first.call(null,s__13882);
var fv__13884 = f.call(null,fst__13883);
var run__13885 = cljs.core.cons.call(null,fst__13883,cljs.core.take_while.call(null,(function (p1__13868_SHARP_){
return cljs.core._EQ_.call(null,fv__13884,f.call(null,p1__13868_SHARP_));
}),cljs.core.next.call(null,s__13882)));

return cljs.core.cons.call(null,run__13885,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13885),s__13882))));
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
var reductions__13945 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13937 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13937))
{var s__13938 = temp__3695__auto____13937;

return reductions.call(null,f,cljs.core.first.call(null,s__13938),cljs.core.rest.call(null,s__13938));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13946 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13943 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13943))
{var s__13944 = temp__3698__auto____13943;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13944)),cljs.core.rest.call(null,s__13944));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13945.call(this,f,init);
case  3 :
return reductions__13946.call(this,f,init,coll);
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
var juxt__14057 = (function (f){
return (function() {
var G__14063 = null;
var G__14063__14064 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14063__14065 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14063__14066 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14063__14067 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14063__14068 = (function() { 
var G__14074__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14074 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14074__delegate.call(this, x, y, z, args);
};
G__14074.cljs$lang$maxFixedArity = 3;
G__14074.cljs$lang$applyTo = (function (arglist__14077){
var x = cljs.core.first(arglist__14077);
var y = cljs.core.first(cljs.core.next(arglist__14077));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14077)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14077)));
return G__14074__delegate.call(this, x, y, z, args);
});
return G__14074;
})()
;
G__14063 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14063__14064.call(this);
case  1 :
return G__14063__14065.call(this,x);
case  2 :
return G__14063__14066.call(this,x,y);
case  3 :
return G__14063__14067.call(this,x,y,z);
default:
return G__14063__14068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14063.cljs$lang$maxFixedArity = 3;
G__14063.cljs$lang$applyTo = G__14063__14068.cljs$lang$applyTo;
return G__14063;
})()
});
var juxt__14058 = (function (f,g){
return (function() {
var G__14083 = null;
var G__14083__14084 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14083__14086 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14083__14087 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14083__14088 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14083__14089 = (function() { 
var G__14092__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14092 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14092__delegate.call(this, x, y, z, args);
};
G__14092.cljs$lang$maxFixedArity = 3;
G__14092.cljs$lang$applyTo = (function (arglist__14096){
var x = cljs.core.first(arglist__14096);
var y = cljs.core.first(cljs.core.next(arglist__14096));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14096)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14096)));
return G__14092__delegate.call(this, x, y, z, args);
});
return G__14092;
})()
;
G__14083 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14083__14084.call(this);
case  1 :
return G__14083__14086.call(this,x);
case  2 :
return G__14083__14087.call(this,x,y);
case  3 :
return G__14083__14088.call(this,x,y,z);
default:
return G__14083__14089.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14083.cljs$lang$maxFixedArity = 3;
G__14083.cljs$lang$applyTo = G__14083__14089.cljs$lang$applyTo;
return G__14083;
})()
});
var juxt__14059 = (function (f,g,h){
return (function() {
var G__14102 = null;
var G__14102__14103 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14102__14122 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14102__14123 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14102__14124 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14102__14125 = (function() { 
var G__14178__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14178 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14178__delegate.call(this, x, y, z, args);
};
G__14178.cljs$lang$maxFixedArity = 3;
G__14178.cljs$lang$applyTo = (function (arglist__14185){
var x = cljs.core.first(arglist__14185);
var y = cljs.core.first(cljs.core.next(arglist__14185));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14185)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14185)));
return G__14178__delegate.call(this, x, y, z, args);
});
return G__14178;
})()
;
G__14102 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14102__14103.call(this);
case  1 :
return G__14102__14122.call(this,x);
case  2 :
return G__14102__14123.call(this,x,y);
case  3 :
return G__14102__14124.call(this,x,y,z);
default:
return G__14102__14125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14102.cljs$lang$maxFixedArity = 3;
G__14102.cljs$lang$applyTo = G__14102__14125.cljs$lang$applyTo;
return G__14102;
})()
});
var juxt__14060 = (function() { 
var G__14186__delegate = function (f,g,h,fs){
var fs__14041 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14187 = null;
var G__14187__14188 = (function (){
return cljs.core.reduce.call(null,(function (p1__13920_SHARP_,p2__13925_SHARP_){
return cljs.core.conj.call(null,p1__13920_SHARP_,p2__13925_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14041);
});
var G__14187__14189 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13926_SHARP_,p2__13927_SHARP_){
return cljs.core.conj.call(null,p1__13926_SHARP_,p2__13927_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14041);
});
var G__14187__14190 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13928_SHARP_,p2__13929_SHARP_){
return cljs.core.conj.call(null,p1__13928_SHARP_,p2__13929_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14041);
});
var G__14187__14192 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13930_SHARP_,p2__13931_SHARP_){
return cljs.core.conj.call(null,p1__13930_SHARP_,p2__13931_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14041);
});
var G__14187__14193 = (function() { 
var G__14198__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13933_SHARP_,p2__13934_SHARP_){
return cljs.core.conj.call(null,p1__13933_SHARP_,cljs.core.apply.call(null,p2__13934_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14041);
};
var G__14198 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14198__delegate.call(this, x, y, z, args);
};
G__14198.cljs$lang$maxFixedArity = 3;
G__14198.cljs$lang$applyTo = (function (arglist__14199){
var x = cljs.core.first(arglist__14199);
var y = cljs.core.first(cljs.core.next(arglist__14199));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14199)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14199)));
return G__14198__delegate.call(this, x, y, z, args);
});
return G__14198;
})()
;
G__14187 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14187__14188.call(this);
case  1 :
return G__14187__14189.call(this,x);
case  2 :
return G__14187__14190.call(this,x,y);
case  3 :
return G__14187__14192.call(this,x,y,z);
default:
return G__14187__14193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14187.cljs$lang$maxFixedArity = 3;
G__14187.cljs$lang$applyTo = G__14187__14193.cljs$lang$applyTo;
return G__14187;
})()
};
var G__14186 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14186__delegate.call(this, f, g, h, fs);
};
G__14186.cljs$lang$maxFixedArity = 3;
G__14186.cljs$lang$applyTo = (function (arglist__14201){
var f = cljs.core.first(arglist__14201);
var g = cljs.core.first(cljs.core.next(arglist__14201));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14201)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14201)));
return G__14186__delegate.call(this, f, g, h, fs);
});
return G__14186;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14057.call(this,f);
case  2 :
return juxt__14058.call(this,f,g);
case  3 :
return juxt__14059.call(this,f,g,h);
default:
return juxt__14060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14060.cljs$lang$applyTo;
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
var dorun__14215 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14219 = cljs.core.next.call(null,coll);
coll = G__14219;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14216 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14209 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14209))
{return (n > 0);
} else
{return and__3546__auto____14209;
}
})()))
{{
var G__14220 = (n - 1);
var G__14221 = cljs.core.next.call(null,coll);
n = G__14220;
coll = G__14221;
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
return dorun__14215.call(this,n);
case  2 :
return dorun__14216.call(this,n,coll);
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
var doall__14227 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14228 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14227.call(this,n);
case  2 :
return doall__14228.call(this,n,coll);
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
var matches__14234 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14234),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14234),1)))
{return cljs.core.first.call(null,matches__14234);
} else
{return cljs.core.vec.call(null,matches__14234);
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
var matches__14241 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14241)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14241),1)))
{return cljs.core.first.call(null,matches__14241);
} else
{return cljs.core.vec.call(null,matches__14241);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14250 = cljs.core.re_find.call(null,re,s);
var match_idx__14253 = s.search(re);
var match_str__14254 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14250))?cljs.core.first.call(null,match_data__14250):match_data__14250);
var post_match__14256 = cljs.core.subs.call(null,s,(match_idx__14253 + cljs.core.count.call(null,match_str__14254)));

if(cljs.core.truth_(match_data__14250))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14250,re_seq.call(null,re,post_match__14256));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14266_SHARP_){
return print_one.call(null,p1__14266_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14296 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14296))
{var and__3546__auto____14314 = (function (){var x__445__auto____14310 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14311 = x__445__auto____14310;

if(cljs.core.truth_(and__3546__auto____14311))
{var and__3546__auto____14312 = x__445__auto____14310.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14312))
{return cljs.core.not.call(null,x__445__auto____14310.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14312;
}
} else
{return and__3546__auto____14311;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14310);
}
})();

if(cljs.core.truth_(and__3546__auto____14314))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14314;
}
} else
{return and__3546__auto____14296;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14319 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14320 = x__445__auto____14319;

if(cljs.core.truth_(and__3546__auto____14320))
{var and__3546__auto____14322 = x__445__auto____14319.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14322))
{return cljs.core.not.call(null,x__445__auto____14319.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14322;
}
} else
{return and__3546__auto____14320;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14319);
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
var first_obj__14352 = cljs.core.first.call(null,objs);
var sb__14353 = (new goog.string.StringBuffer());

var G__14355__14357 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14355__14357))
{var obj__14359 = cljs.core.first.call(null,G__14355__14357);
var G__14355__14362 = G__14355__14357;

while(true){
if(cljs.core.truth_((obj__14359 === first_obj__14352)))
{} else
{sb__14353.append(" ");
}
var G__14364__14366 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14359,opts));

if(cljs.core.truth_(G__14364__14366))
{var string__14368 = cljs.core.first.call(null,G__14364__14366);
var G__14364__14369 = G__14364__14366;

while(true){
sb__14353.append(string__14368);
var temp__3698__auto____14371 = cljs.core.next.call(null,G__14364__14369);

if(cljs.core.truth_(temp__3698__auto____14371))
{var G__14364__14373 = temp__3698__auto____14371;

{
var G__14388 = cljs.core.first.call(null,G__14364__14373);
var G__14389 = G__14364__14373;
string__14368 = G__14388;
G__14364__14369 = G__14389;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14374 = cljs.core.next.call(null,G__14355__14362);

if(cljs.core.truth_(temp__3698__auto____14374))
{var G__14355__14375 = temp__3698__auto____14374;

{
var G__14393 = cljs.core.first.call(null,G__14355__14375);
var G__14394 = G__14355__14375;
obj__14359 = G__14393;
G__14355__14362 = G__14394;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14353);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14400 = cljs.core.first.call(null,objs);

var G__14401__14403 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14401__14403))
{var obj__14404 = cljs.core.first.call(null,G__14401__14403);
var G__14401__14405 = G__14401__14403;

while(true){
if(cljs.core.truth_((obj__14404 === first_obj__14400)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14408__14409 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14404,opts));

if(cljs.core.truth_(G__14408__14409))
{var string__14411 = cljs.core.first.call(null,G__14408__14409);
var G__14408__14412 = G__14408__14409;

while(true){
cljs.core.string_print.call(null,string__14411);
var temp__3698__auto____14414 = cljs.core.next.call(null,G__14408__14412);

if(cljs.core.truth_(temp__3698__auto____14414))
{var G__14408__14415 = temp__3698__auto____14414;

{
var G__14433 = cljs.core.first.call(null,G__14408__14415);
var G__14434 = G__14408__14415;
string__14411 = G__14433;
G__14408__14412 = G__14434;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14429 = cljs.core.next.call(null,G__14401__14405);

if(cljs.core.truth_(temp__3698__auto____14429))
{var G__14401__14430 = temp__3698__auto____14429;

{
var G__14436 = cljs.core.first.call(null,G__14401__14430);
var G__14437 = G__14401__14430;
obj__14404 = G__14436;
G__14401__14405 = G__14437;
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
pr_str.cljs$lang$applyTo = (function (arglist__14455){
var objs = cljs.core.seq( arglist__14455 );;
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
pr.cljs$lang$applyTo = (function (arglist__14458){
var objs = cljs.core.seq( arglist__14458 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14466){
var objs = cljs.core.seq( arglist__14466 );;
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
println.cljs$lang$applyTo = (function (arglist__14468){
var objs = cljs.core.seq( arglist__14468 );;
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
prn.cljs$lang$applyTo = (function (arglist__14482){
var objs = cljs.core.seq( arglist__14482 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14492 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14492,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14526 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14526))
{var nspc__14528 = temp__3698__auto____14526;

return cljs.core.str.call(null,nspc__14528,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14532 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14532))
{var nspc__14533 = temp__3698__auto____14532;

return cljs.core.str.call(null,nspc__14533,"/");
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
var pr_pair__14581 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14581,"{",", ","}",opts,coll);
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
var this__14628 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14629 = this;
var G__14630__14631 = cljs.core.seq.call(null,this__14629.watches);

if(cljs.core.truth_(G__14630__14631))
{var G__14634__14636 = cljs.core.first.call(null,G__14630__14631);
var vec__14635__14637 = G__14634__14636;
var key__14638 = cljs.core.nth.call(null,vec__14635__14637,0,null);
var f__14639 = cljs.core.nth.call(null,vec__14635__14637,1,null);
var G__14630__14640 = G__14630__14631;

var G__14634__14641 = G__14634__14636;
var G__14630__14642 = G__14630__14640;

while(true){
var vec__14643__14644 = G__14634__14641;
var key__14645 = cljs.core.nth.call(null,vec__14643__14644,0,null);
var f__14647 = cljs.core.nth.call(null,vec__14643__14644,1,null);
var G__14630__14648 = G__14630__14642;

f__14647.call(null,key__14645,this$,oldval,newval);
var temp__3698__auto____14650 = cljs.core.next.call(null,G__14630__14648);

if(cljs.core.truth_(temp__3698__auto____14650))
{var G__14630__14651 = temp__3698__auto____14650;

{
var G__14687 = cljs.core.first.call(null,G__14630__14651);
var G__14688 = G__14630__14651;
G__14634__14641 = G__14687;
G__14630__14642 = G__14688;
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
var this__14653 = this;
return this$.watches = cljs.core.assoc.call(null,this__14653.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14654 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14654.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14674 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14674.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14675 = this;
return this__14675.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14677 = this;
return this__14677.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14679 = this;
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
var atom__14714 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14715 = (function() { 
var G__14717__delegate = function (x,p__14694){
var map__14695__14697 = p__14694;
var map__14695__14699 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14695__14697))?cljs.core.apply.call(null,cljs.core.hash_map,map__14695__14697):map__14695__14697);
var validator__14701 = cljs.core.get.call(null,map__14695__14699,"﷐'validator");
var meta__14702 = cljs.core.get.call(null,map__14695__14699,"﷐'meta");

return (new cljs.core.Atom(x,meta__14702,validator__14701,null));
};
var G__14717 = function (x,var_args){
var p__14694 = null;
if (goog.isDef(var_args)) {
  p__14694 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14717__delegate.call(this, x, p__14694);
};
G__14717.cljs$lang$maxFixedArity = 1;
G__14717.cljs$lang$applyTo = (function (arglist__14722){
var x = cljs.core.first(arglist__14722);
var p__14694 = cljs.core.rest(arglist__14722);
return G__14717__delegate.call(this, x, p__14694);
});
return G__14717;
})()
;
atom = function(x,var_args){
var p__14694 = var_args;
switch(arguments.length){
case  1 :
return atom__14714.call(this,x);
default:
return atom__14715.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14715.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14725 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14725))
{var validate__14726 = temp__3698__auto____14725;

if(cljs.core.truth_(validate__14726.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14727 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14727,new_value);
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
var swap_BANG___14747 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14748 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14749 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14750 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14751 = (function() { 
var G__14753__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14753 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14753__delegate.call(this, a, f, x, y, z, more);
};
G__14753.cljs$lang$maxFixedArity = 5;
G__14753.cljs$lang$applyTo = (function (arglist__14762){
var a = cljs.core.first(arglist__14762);
var f = cljs.core.first(cljs.core.next(arglist__14762));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14762)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14762))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14762)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14762)))));
return G__14753__delegate.call(this, a, f, x, y, z, more);
});
return G__14753;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14747.call(this,a,f);
case  3 :
return swap_BANG___14748.call(this,a,f,x);
case  4 :
return swap_BANG___14749.call(this,a,f,x,y);
case  5 :
return swap_BANG___14750.call(this,a,f,x,y,z);
default:
return swap_BANG___14751.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14751.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14803){
var iref = cljs.core.first(arglist__14803);
var f = cljs.core.first(cljs.core.next(arglist__14803));
var args = cljs.core.rest(cljs.core.next(arglist__14803));
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
var gensym__14820 = (function (){
return gensym.call(null,"G__");
});
var gensym__14821 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14820.call(this);
case  1 :
return gensym__14821.call(this,prefix_string);
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
var this__14824 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14824.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14825 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14825.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14825.state,this__14825.f);
}
return cljs.core.deref.call(null,this__14825.state);
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
delay.cljs$lang$applyTo = (function (arglist__14845){
var body = cljs.core.seq( arglist__14845 );;
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
var map__14866__14868 = options;
var map__14866__14869 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14866__14868))?cljs.core.apply.call(null,cljs.core.hash_map,map__14866__14868):map__14866__14868);
var keywordize_keys__14870 = cljs.core.get.call(null,map__14866__14869,"﷐'keywordize-keys");
var keyfn__14871 = (cljs.core.truth_(keywordize_keys__14870)?cljs.core.keyword:cljs.core.str);
var f__14880 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14879 = (function iter__14872(s__14873){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14873__14875 = s__14873;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14873__14875)))
{var k__14877 = cljs.core.first.call(null,s__14873__14875);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14871.call(null,k__14877),thisfn.call(null,(x[k__14877]))]),iter__14872.call(null,cljs.core.rest.call(null,s__14873__14875)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14879.call(null,cljs.core.js_keys.call(null,x));
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

return f__14880.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14887){
var x = cljs.core.first(arglist__14887);
var options = cljs.core.rest(arglist__14887);
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
var mem__14892 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14905__delegate = function (args){
var temp__3695__auto____14895 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14892),args);

if(cljs.core.truth_(temp__3695__auto____14895))
{var v__14896 = temp__3695__auto____14895;

return v__14896;
} else
{var ret__14899 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14892,cljs.core.assoc,args,ret__14899);
return ret__14899;
}
};
var G__14905 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14905__delegate.call(this, args);
};
G__14905.cljs$lang$maxFixedArity = 0;
G__14905.cljs$lang$applyTo = (function (arglist__14907){
var args = cljs.core.seq( arglist__14907 );;
return G__14905__delegate.call(this, args);
});
return G__14905;
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
var trampoline__14912 = (function (f){
while(true){
var ret__14909 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14909)))
{{
var G__14921 = ret__14909;
f = G__14921;
continue;
}
} else
{return ret__14909;
}
break;
}
});
var trampoline__14915 = (function() { 
var G__14923__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14923 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14923__delegate.call(this, f, args);
};
G__14923.cljs$lang$maxFixedArity = 1;
G__14923.cljs$lang$applyTo = (function (arglist__14926){
var f = cljs.core.first(arglist__14926);
var args = cljs.core.rest(arglist__14926);
return G__14923__delegate.call(this, f, args);
});
return G__14923;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14912.call(this,f);
default:
return trampoline__14915.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14915.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14933 = (function (){
return rand.call(null,1);
});
var rand__14934 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14933.call(this);
case  1 :
return rand__14934.call(this,n);
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
var k__14944 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14944,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14944,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14966 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14967 = (function (h,child,parent){
var or__3548__auto____14957 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14957))
{return or__3548__auto____14957;
} else
{var or__3548__auto____14959 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14959))
{return or__3548__auto____14959;
} else
{var and__3546__auto____14960 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14960))
{var and__3546__auto____14961 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14961))
{var and__3546__auto____14962 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14962))
{var ret__14963 = true;
var i__14964 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14965 = cljs.core.not.call(null,ret__14963);

if(cljs.core.truth_(or__3548__auto____14965))
{return or__3548__auto____14965;
} else
{return cljs.core._EQ_.call(null,i__14964,cljs.core.count.call(null,parent));
}
})()))
{return ret__14963;
} else
{{
var G__14970 = isa_QMARK_.call(null,h,child.call(null,i__14964),parent.call(null,i__14964));
var G__14971 = (i__14964 + 1);
ret__14963 = G__14970;
i__14964 = G__14971;
continue;
}
}
break;
}
} else
{return and__3546__auto____14962;
}
} else
{return and__3546__auto____14961;
}
} else
{return and__3546__auto____14960;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14966.call(this,h,child);
case  3 :
return isa_QMARK___14967.call(this,h,child,parent);
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
var parents__14972 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14973 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14972.call(this,h);
case  2 :
return parents__14973.call(this,h,tag);
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
var ancestors__14988 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14989 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14988.call(this,h);
case  2 :
return ancestors__14989.call(this,h,tag);
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
var descendants__15003 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15004 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15003.call(this,h);
case  2 :
return descendants__15004.call(this,h,tag);
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
var derive__15027 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15028 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15013 = "﷐'parents".call(null,h);
var td__15014 = "﷐'descendants".call(null,h);
var ta__15015 = "﷐'ancestors".call(null,h);
var tf__15019 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15025 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15013.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15015.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15015.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15013,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15019.call(null,"﷐'ancestors".call(null,h),tag,td__15014,parent,ta__15015),"﷐'descendants":tf__15019.call(null,"﷐'descendants".call(null,h),parent,ta__15015,tag,td__15014)});
})());

if(cljs.core.truth_(or__3548__auto____15025))
{return or__3548__auto____15025;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15027.call(this,h,tag);
case  3 :
return derive__15028.call(this,h,tag,parent);
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
var underive__15139 = (function (h,tag,parent){
var parentMap__15126 = "﷐'parents".call(null,h);
var childsParents__15127 = (cljs.core.truth_(parentMap__15126.call(null,tag))?cljs.core.disj.call(null,parentMap__15126.call(null,tag),parent):cljs.core.set([]));
var newParents__15128 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15127))?cljs.core.assoc.call(null,parentMap__15126,tag,childsParents__15127):cljs.core.dissoc.call(null,parentMap__15126,tag));
var deriv_seq__15131 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15006_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15006_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15006_SHARP_),cljs.core.second.call(null,p1__15006_SHARP_)));
}),cljs.core.seq.call(null,newParents__15128)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15126.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15007_SHARP_,p2__15008_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15007_SHARP_,p2__15008_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15131));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15138.call(this,h,tag);
case  3 :
return underive__15139.call(this,h,tag,parent);
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
var xprefs__15158 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15160 = (cljs.core.truth_((function (){var and__3546__auto____15159 = xprefs__15158;

if(cljs.core.truth_(and__3546__auto____15159))
{return xprefs__15158.call(null,y);
} else
{return and__3546__auto____15159;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15160))
{return or__3548__auto____15160;
} else
{var or__3548__auto____15162 = (function (){var ps__15161 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15161) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15161),prefer_table)))
{} else
{}
{
var G__15169 = cljs.core.rest.call(null,ps__15161);
ps__15161 = G__15169;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15162))
{return or__3548__auto____15162;
} else
{var or__3548__auto____15167 = (function (){var ps__15163 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15163) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15163),y,prefer_table)))
{} else
{}
{
var G__15170 = cljs.core.rest.call(null,ps__15163);
ps__15163 = G__15170;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15167))
{return or__3548__auto____15167;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15171 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15171))
{return or__3548__auto____15171;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15213 = cljs.core.reduce.call(null,(function (be,p__15203){
var vec__15205__15206 = p__15203;
var k__15207 = cljs.core.nth.call(null,vec__15205__15206,0,null);
var ___15208 = cljs.core.nth.call(null,vec__15205__15206,1,null);
var e__15209 = vec__15205__15206;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15207)))
{var be2__15211 = (cljs.core.truth_((function (){var or__3548__auto____15210 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{return cljs.core.dominates.call(null,k__15207,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15209:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15211),k__15207,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15207," and ",cljs.core.first.call(null,be2__15211),", and neither is preferred")));
}
return be2__15211;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15213))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15213));
return cljs.core.second.call(null,best_entry__15213);
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
if(cljs.core.truth_((function (){var and__3546__auto____15220 = mf;

if(cljs.core.truth_(and__3546__auto____15220))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15220;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15224 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15224))
{return or__3548__auto____15224;
} else
{var or__3548__auto____15225 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15225))
{return or__3548__auto____15225;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15226 = mf;

if(cljs.core.truth_(and__3546__auto____15226))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15226;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15227 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15227))
{return or__3548__auto____15227;
} else
{var or__3548__auto____15229 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15229))
{return or__3548__auto____15229;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15232 = mf;

if(cljs.core.truth_(and__3546__auto____15232))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15232;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15233 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15233))
{return or__3548__auto____15233;
} else
{var or__3548__auto____15234 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15234))
{return or__3548__auto____15234;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15237 = mf;

if(cljs.core.truth_(and__3546__auto____15237))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15237;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15239 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15239))
{return or__3548__auto____15239;
} else
{var or__3548__auto____15240 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15240))
{return or__3548__auto____15240;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15243 = mf;

if(cljs.core.truth_(and__3546__auto____15243))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15243;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15248 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{var or__3548__auto____15250 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15250))
{return or__3548__auto____15250;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15252 = mf;

if(cljs.core.truth_(and__3546__auto____15252))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15252;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15254 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15254))
{return or__3548__auto____15254;
} else
{var or__3548__auto____15257 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15257))
{return or__3548__auto____15257;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15259 = mf;

if(cljs.core.truth_(and__3546__auto____15259))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15259;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15263 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15263))
{return or__3548__auto____15263;
} else
{var or__3548__auto____15264 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15264))
{return or__3548__auto____15264;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15265 = mf;

if(cljs.core.truth_(and__3546__auto____15265))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15265;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15266 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15266))
{return or__3548__auto____15266;
} else
{var or__3548__auto____15267 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15267))
{return or__3548__auto____15267;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15298 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15299 = cljs.core._get_method.call(null,mf,dispatch_val__15298);

if(cljs.core.truth_(target_fn__15299))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15298)));
}
return cljs.core.apply.call(null,target_fn__15299,args);
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
var this__15312 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15314 = this;
cljs.core.swap_BANG_.call(null,this__15314.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15314.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15314.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15314.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15317 = this;
cljs.core.swap_BANG_.call(null,this__15317.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15317.method_cache,this__15317.method_table,this__15317.cached_hierarchy,this__15317.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15320 = this;
cljs.core.swap_BANG_.call(null,this__15320.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15320.method_cache,this__15320.method_table,this__15320.cached_hierarchy,this__15320.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15322 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15322.cached_hierarchy),cljs.core.deref.call(null,this__15322.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15322.method_cache,this__15322.method_table,this__15322.cached_hierarchy,this__15322.hierarchy);
}
var temp__3695__auto____15325 = cljs.core.deref.call(null,this__15322.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15325))
{var target_fn__15326 = temp__3695__auto____15325;

return target_fn__15326;
} else
{var temp__3695__auto____15327 = cljs.core.find_and_cache_best_method.call(null,this__15322.name,dispatch_val,this__15322.hierarchy,this__15322.method_table,this__15322.prefer_table,this__15322.method_cache,this__15322.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15327))
{var target_fn__15328 = temp__3695__auto____15327;

return target_fn__15328;
} else
{return cljs.core.deref.call(null,this__15322.method_table).call(null,this__15322.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15330 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15330.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15330.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15330.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15330.method_cache,this__15330.method_table,this__15330.cached_hierarchy,this__15330.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15336 = this;
return cljs.core.deref.call(null,this__15336.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15340 = this;
return cljs.core.deref.call(null,this__15340.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15342 = this;
return cljs.core.do_dispatch.call(null,mf,this__15342.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15365__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15365 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15365__delegate.call(this, _, args);
};
G__15365.cljs$lang$maxFixedArity = 1;
G__15365.cljs$lang$applyTo = (function (arglist__15367){
var _ = cljs.core.first(arglist__15367);
var args = cljs.core.rest(arglist__15367);
return G__15365__delegate.call(this, _, args);
});
return G__15365;
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
