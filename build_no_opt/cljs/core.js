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
var or__3548__auto____7255 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7255))
{return or__3548__auto____7255;
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
var _invoke__7512 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7261 = this$;

if(cljs.core.truth_(and__3546__auto____7261))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7261;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7262 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
} else
{var or__3548__auto____7263 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7513 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7265 = this$;

if(cljs.core.truth_(and__3546__auto____7265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7268 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
} else
{var or__3548__auto____7269 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7269))
{return or__3548__auto____7269;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7514 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7299 = this$;

if(cljs.core.truth_(and__3546__auto____7299))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7299;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7300 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
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
var _invoke__7515 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7325 = this$;

if(cljs.core.truth_(and__3546__auto____7325))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7325;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7328 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7328))
{return or__3548__auto____7328;
} else
{var or__3548__auto____7331 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7516 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7333 = this$;

if(cljs.core.truth_(and__3546__auto____7333))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7333;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7337 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7337))
{return or__3548__auto____7337;
} else
{var or__3548__auto____7339 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7517 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7342 = this$;

if(cljs.core.truth_(and__3546__auto____7342))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7342;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7346 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7346))
{return or__3548__auto____7346;
} else
{var or__3548__auto____7347 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7347))
{return or__3548__auto____7347;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7518 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7355 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{var or__3548__auto____7356 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7356))
{return or__3548__auto____7356;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7519 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7361 = this$;

if(cljs.core.truth_(and__3546__auto____7361))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7361;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7363 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{var or__3548__auto____7365 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7365))
{return or__3548__auto____7365;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7520 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7369 = this$;

if(cljs.core.truth_(and__3546__auto____7369))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7369;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7372 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7372))
{return or__3548__auto____7372;
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
var _invoke__7521 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7377 = this$;

if(cljs.core.truth_(and__3546__auto____7377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7381 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7381))
{return or__3548__auto____7381;
} else
{var or__3548__auto____7382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7522 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7386 = this$;

if(cljs.core.truth_(and__3546__auto____7386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7390 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7390))
{return or__3548__auto____7390;
} else
{var or__3548__auto____7391 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7523 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7394 = this$;

if(cljs.core.truth_(and__3546__auto____7394))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7394;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7397 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7397))
{return or__3548__auto____7397;
} else
{var or__3548__auto____7398 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7398))
{return or__3548__auto____7398;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7524 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7403 = this$;

if(cljs.core.truth_(and__3546__auto____7403))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7403;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7405 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7405))
{return or__3548__auto____7405;
} else
{var or__3548__auto____7406 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7526 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7409 = this$;

if(cljs.core.truth_(and__3546__auto____7409))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7409;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7410 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{var or__3548__auto____7412 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7412))
{return or__3548__auto____7412;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7527 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7413 = this$;

if(cljs.core.truth_(and__3546__auto____7413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7419 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7419))
{return or__3548__auto____7419;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7528 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7422 = this$;

if(cljs.core.truth_(and__3546__auto____7422))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7422;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7529 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7431 = this$;

if(cljs.core.truth_(and__3546__auto____7431))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7431;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7436 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{var or__3548__auto____7438 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7531 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7441 = this$;

if(cljs.core.truth_(and__3546__auto____7441))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7441;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7446 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
} else
{var or__3548__auto____7447 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7532 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7458 = this$;

if(cljs.core.truth_(and__3546__auto____7458))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7458;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7533 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7469 = this$;

if(cljs.core.truth_(and__3546__auto____7469))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7469;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7472 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7472))
{return or__3548__auto____7472;
} else
{var or__3548__auto____7475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7534 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7500 = this$;

if(cljs.core.truth_(and__3546__auto____7500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7504 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7504))
{return or__3548__auto____7504;
} else
{var or__3548__auto____7505 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7505))
{return or__3548__auto____7505;
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
return _invoke__7512.call(this,this$);
case  2 :
return _invoke__7513.call(this,this$,a);
case  3 :
return _invoke__7514.call(this,this$,a,b);
case  4 :
return _invoke__7515.call(this,this$,a,b,c);
case  5 :
return _invoke__7516.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7517.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7518.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7519.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7520.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7521.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7522.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7523.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7524.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7526.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7527.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7528.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7529.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7531.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7532.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7533.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7534.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7622 = coll;

if(cljs.core.truth_(and__3546__auto____7622))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7622;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7623 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7623))
{return or__3548__auto____7623;
} else
{var or__3548__auto____7632 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7632))
{return or__3548__auto____7632;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7695 = coll;

if(cljs.core.truth_(and__3546__auto____7695))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7695;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7696 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{var or__3548__auto____7697 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7697))
{return or__3548__auto____7697;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7701 = coll;

if(cljs.core.truth_(and__3546__auto____7701))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7701;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7702 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7702))
{return or__3548__auto____7702;
} else
{var or__3548__auto____7703 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7703))
{return or__3548__auto____7703;
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
var _nth__7714 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7706 = coll;

if(cljs.core.truth_(and__3546__auto____7706))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7706;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7708 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7708))
{return or__3548__auto____7708;
} else
{var or__3548__auto____7709 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7715 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7710 = coll;

if(cljs.core.truth_(and__3546__auto____7710))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7710;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7711 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7711))
{return or__3548__auto____7711;
} else
{var or__3548__auto____7712 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
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
return _nth__7714.call(this,coll,n);
case  3 :
return _nth__7715.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7725 = coll;

if(cljs.core.truth_(and__3546__auto____7725))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7725;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7726 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
} else
{var or__3548__auto____7727 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7727))
{return or__3548__auto____7727;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7728 = coll;

if(cljs.core.truth_(and__3546__auto____7728))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7728;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7729 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7729))
{return or__3548__auto____7729;
} else
{var or__3548__auto____7730 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
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
var _lookup__7738 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7732 = o;

if(cljs.core.truth_(and__3546__auto____7732))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7732;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7733 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{var or__3548__auto____7734 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7734))
{return or__3548__auto____7734;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7739 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7735 = o;

if(cljs.core.truth_(and__3546__auto____7735))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7735;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7736 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{var or__3548__auto____7737 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
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
return _lookup__7738.call(this,o,k);
case  3 :
return _lookup__7739.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7741 = coll;

if(cljs.core.truth_(and__3546__auto____7741))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7741;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7742 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7742))
{return or__3548__auto____7742;
} else
{var or__3548__auto____7744 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7746 = coll;

if(cljs.core.truth_(and__3546__auto____7746))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7746;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7748 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
} else
{var or__3548__auto____7749 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7757 = coll;

if(cljs.core.truth_(and__3546__auto____7757))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7757;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7759 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
} else
{var or__3548__auto____7760 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7776 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7776))
{return or__3548__auto____7776;
} else
{var or__3548__auto____7778 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7782 = coll;

if(cljs.core.truth_(and__3546__auto____7782))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7782;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{var or__3548__auto____7784 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = coll;

if(cljs.core.truth_(and__3546__auto____7787))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7787;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7790 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
} else
{var or__3548__auto____7793 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7800 = coll;

if(cljs.core.truth_(and__3546__auto____7800))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7800;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7801 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7801))
{return or__3548__auto____7801;
} else
{var or__3548__auto____7803 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = o;

if(cljs.core.truth_(and__3546__auto____7823))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7823;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7824 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7824))
{return or__3548__auto____7824;
} else
{var or__3548__auto____7825 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7825))
{return or__3548__auto____7825;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7826 = o;

if(cljs.core.truth_(and__3546__auto____7826))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7826;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7828 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7828))
{return or__3548__auto____7828;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7829 = o;

if(cljs.core.truth_(and__3546__auto____7829))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7829;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7830 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{var or__3548__auto____7831 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7831))
{return or__3548__auto____7831;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7847 = o;

if(cljs.core.truth_(and__3546__auto____7847))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7847;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7850 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7850))
{return or__3548__auto____7850;
} else
{var or__3548__auto____7851 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7851))
{return or__3548__auto____7851;
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
var _reduce__7869 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7855 = coll;

if(cljs.core.truth_(and__3546__auto____7855))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7855;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7859 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
} else
{var or__3548__auto____7860 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7870 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7862 = coll;

if(cljs.core.truth_(and__3546__auto____7862))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7862;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7864 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7864))
{return or__3548__auto____7864;
} else
{var or__3548__auto____7866 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
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
return _reduce__7869.call(this,coll,f);
case  3 :
return _reduce__7870.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7880 = o;

if(cljs.core.truth_(and__3546__auto____7880))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7880;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7883 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{var or__3548__auto____7886 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7886))
{return or__3548__auto____7886;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = o;

if(cljs.core.truth_(and__3546__auto____7928))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7928;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7933 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7933))
{return or__3548__auto____7933;
} else
{var or__3548__auto____7935 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7946 = o;

if(cljs.core.truth_(and__3546__auto____7946))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7946;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7951 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7951))
{return or__3548__auto____7951;
} else
{var or__3548__auto____7953 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
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
if(cljs.core.truth_((function (){var and__3546__auto____7964 = o;

if(cljs.core.truth_(and__3546__auto____7964))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7964;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7967 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{var or__3548__auto____7969 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____7978 = d;

if(cljs.core.truth_(and__3546__auto____7978))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____7978;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____7980 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____7980))
{return or__3548__auto____7980;
} else
{var or__3548__auto____7982 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____7987 = this$;

if(cljs.core.truth_(and__3546__auto____7987))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____7987;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____7990 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7990))
{return or__3548__auto____7990;
} else
{var or__3548__auto____7991 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____7996 = this$;

if(cljs.core.truth_(and__3546__auto____7996))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____7996;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____7998 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{var or__3548__auto____8001 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8003 = this$;

if(cljs.core.truth_(and__3546__auto____8003))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8003;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8005 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{var or__3548__auto____8006 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
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
var G__8062 = null;
var G__8062__8063 = (function (o,k){
return null;
});
var G__8062__8064 = (function (o,k,not_found){
return not_found;
});
G__8062 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8062__8063.call(this,o,k);
case  3 :
return G__8062__8064.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8062;
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
var G__8070 = null;
var G__8070__8072 = (function (_,f){
return f.call(null);
});
var G__8070__8073 = (function (_,f,start){
return start;
});
G__8070 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8070__8072.call(this,_,f);
case  3 :
return G__8070__8073.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8070;
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
var G__8081 = null;
var G__8081__8087 = (function (_,n){
return null;
});
var G__8081__8089 = (function (_,n,not_found){
return not_found;
});
G__8081 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8081__8087.call(this,_,n);
case  3 :
return G__8081__8089.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8081;
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
var ci_reduce__8146 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8135 = cljs.core._nth.call(null,cicoll,0);
var n__8137 = 1;

while(true){
if(cljs.core.truth_((n__8137 < cljs.core._count.call(null,cicoll))))
{{
var G__8152 = f.call(null,val__8135,cljs.core._nth.call(null,cicoll,n__8137));
var G__8153 = (n__8137 + 1);
val__8135 = G__8152;
n__8137 = G__8153;
continue;
}
} else
{return val__8135;
}
break;
}
}
});
var ci_reduce__8147 = (function (cicoll,f,val){
var val__8141 = val;
var n__8142 = 0;

while(true){
if(cljs.core.truth_((n__8142 < cljs.core._count.call(null,cicoll))))
{{
var G__8157 = f.call(null,val__8141,cljs.core._nth.call(null,cicoll,n__8142));
var G__8158 = (n__8142 + 1);
val__8141 = G__8157;
n__8142 = G__8158;
continue;
}
} else
{return val__8141;
}
break;
}
});
var ci_reduce__8148 = (function (cicoll,f,val,idx){
var val__8143 = val;
var n__8144 = idx;

while(true){
if(cljs.core.truth_((n__8144 < cljs.core._count.call(null,cicoll))))
{{
var G__8160 = f.call(null,val__8143,cljs.core._nth.call(null,cicoll,n__8144));
var G__8161 = (n__8144 + 1);
val__8143 = G__8160;
n__8144 = G__8161;
continue;
}
} else
{return val__8143;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8146.call(this,cicoll,f);
case  3 :
return ci_reduce__8147.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8148.call(this,cicoll,f,val,idx);
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
var this__8170 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8189 = null;
var G__8189__8190 = (function (_,f){
var this__8171 = this;
return cljs.core.ci_reduce.call(null,this__8171.a,f,(this__8171.a[this__8171.i]),(this__8171.i + 1));
});
var G__8189__8191 = (function (_,f,start){
var this__8172 = this;
return cljs.core.ci_reduce.call(null,this__8172.a,f,start,this__8172.i);
});
G__8189 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8189__8190.call(this,_,f);
case  3 :
return G__8189__8191.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8189;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8174 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8175 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8211 = null;
var G__8211__8212 = (function (coll,n){
var this__8178 = this;
var i__8179 = (n + this__8178.i);

if(cljs.core.truth_((i__8179 < this__8178.a.length)))
{return (this__8178.a[i__8179]);
} else
{return null;
}
});
var G__8211__8213 = (function (coll,n,not_found){
var this__8180 = this;
var i__8181 = (n + this__8180.i);

if(cljs.core.truth_((i__8181 < this__8180.a.length)))
{return (this__8180.a[i__8181]);
} else
{return not_found;
}
});
G__8211 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8211__8212.call(this,coll,n);
case  3 :
return G__8211__8213.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8211;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8182 = this;
return (this__8182.a.length - this__8182.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8183 = this;
return (this__8183.a[this__8183.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8185 = this;
if(cljs.core.truth_(((this__8185.i + 1) < this__8185.a.length)))
{return (new cljs.core.IndexedSeq(this__8185.a,(this__8185.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8187 = this;
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
var G__8265 = null;
var G__8265__8266 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8265__8267 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8265 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8265__8266.call(this,array,f);
case  3 :
return G__8265__8267.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8265;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8271 = null;
var G__8271__8272 = (function (array,k){
return (array[k]);
});
var G__8271__8273 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8271 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8271__8272.call(this,array,k);
case  3 :
return G__8271__8273.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8271;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8279 = null;
var G__8279__8280 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8279__8281 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8279 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8279__8280.call(this,array,n);
case  3 :
return G__8279__8281.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8279;
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
var temp__3698__auto____8302 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8302))
{var s__8304 = temp__3698__auto____8302;

return cljs.core._first.call(null,s__8304);
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
var G__8359 = cljs.core.next.call(null,s);
s = G__8359;
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
var s__8364 = cljs.core.seq.call(null,x);
var n__8365 = 0;

while(true){
if(cljs.core.truth_(s__8364))
{{
var G__8370 = cljs.core.next.call(null,s__8364);
var G__8371 = (n__8365 + 1);
s__8364 = G__8370;
n__8365 = G__8371;
continue;
}
} else
{return n__8365;
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
var conj__8384 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8385 = (function() { 
var G__8387__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8388 = conj.call(null,coll,x);
var G__8389 = cljs.core.first.call(null,xs);
var G__8390 = cljs.core.next.call(null,xs);
coll = G__8388;
x = G__8389;
xs = G__8390;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8387 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8387__delegate.call(this, coll, x, xs);
};
G__8387.cljs$lang$maxFixedArity = 2;
G__8387.cljs$lang$applyTo = (function (arglist__8391){
var coll = cljs.core.first(arglist__8391);
var x = cljs.core.first(cljs.core.next(arglist__8391));
var xs = cljs.core.rest(cljs.core.next(arglist__8391));
return G__8387__delegate.call(this, coll, x, xs);
});
return G__8387;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8384.call(this,coll,x);
default:
return conj__8385.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8385.cljs$lang$applyTo;
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
var nth__8398 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8399 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8398.call(this,coll,n);
case  3 :
return nth__8399.call(this,coll,n,not_found);
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
var get__8409 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8410 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8409.call(this,o,k);
case  3 :
return get__8410.call(this,o,k,not_found);
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
var assoc__8413 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8414 = (function() { 
var G__8416__delegate = function (coll,k,v,kvs){
while(true){
var ret__8412 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8418 = ret__8412;
var G__8419 = cljs.core.first.call(null,kvs);
var G__8420 = cljs.core.second.call(null,kvs);
var G__8421 = cljs.core.nnext.call(null,kvs);
coll = G__8418;
k = G__8419;
v = G__8420;
kvs = G__8421;
continue;
}
} else
{return ret__8412;
}
break;
}
};
var G__8416 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8416__delegate.call(this, coll, k, v, kvs);
};
G__8416.cljs$lang$maxFixedArity = 3;
G__8416.cljs$lang$applyTo = (function (arglist__8423){
var coll = cljs.core.first(arglist__8423);
var k = cljs.core.first(cljs.core.next(arglist__8423));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8423)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8423)));
return G__8416__delegate.call(this, coll, k, v, kvs);
});
return G__8416;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8413.call(this,coll,k,v);
default:
return assoc__8414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8414.cljs$lang$applyTo;
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
var dissoc__8429 = (function (coll){
return coll;
});
var dissoc__8431 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8433 = (function() { 
var G__8575__delegate = function (coll,k,ks){
while(true){
var ret__8426 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8576 = ret__8426;
var G__8577 = cljs.core.first.call(null,ks);
var G__8578 = cljs.core.next.call(null,ks);
coll = G__8576;
k = G__8577;
ks = G__8578;
continue;
}
} else
{return ret__8426;
}
break;
}
};
var G__8575 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8575__delegate.call(this, coll, k, ks);
};
G__8575.cljs$lang$maxFixedArity = 2;
G__8575.cljs$lang$applyTo = (function (arglist__8582){
var coll = cljs.core.first(arglist__8582);
var k = cljs.core.first(cljs.core.next(arglist__8582));
var ks = cljs.core.rest(cljs.core.next(arglist__8582));
return G__8575__delegate.call(this, coll, k, ks);
});
return G__8575;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8429.call(this,coll);
case  2 :
return dissoc__8431.call(this,coll,k);
default:
return dissoc__8433.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8433.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8593 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8595 = x__445__auto____8593;

if(cljs.core.truth_(and__3546__auto____8595))
{var and__3546__auto____8596 = x__445__auto____8593.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8596))
{return cljs.core.not.call(null,x__445__auto____8593.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8596;
}
} else
{return and__3546__auto____8595;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8593);
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
var disj__8614 = (function (coll){
return coll;
});
var disj__8615 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8616 = (function() { 
var G__8618__delegate = function (coll,k,ks){
while(true){
var ret__8613 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8619 = ret__8613;
var G__8620 = cljs.core.first.call(null,ks);
var G__8621 = cljs.core.next.call(null,ks);
coll = G__8619;
k = G__8620;
ks = G__8621;
continue;
}
} else
{return ret__8613;
}
break;
}
};
var G__8618 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8618__delegate.call(this, coll, k, ks);
};
G__8618.cljs$lang$maxFixedArity = 2;
G__8618.cljs$lang$applyTo = (function (arglist__8622){
var coll = cljs.core.first(arglist__8622);
var k = cljs.core.first(cljs.core.next(arglist__8622));
var ks = cljs.core.rest(cljs.core.next(arglist__8622));
return G__8618__delegate.call(this, coll, k, ks);
});
return G__8618;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8614.call(this,coll);
case  2 :
return disj__8615.call(this,coll,k);
default:
return disj__8616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8616.cljs$lang$applyTo;
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
{var x__445__auto____8624 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8625 = x__445__auto____8624;

if(cljs.core.truth_(and__3546__auto____8625))
{var and__3546__auto____8626 = x__445__auto____8624.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8626))
{return cljs.core.not.call(null,x__445__auto____8624.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8626;
}
} else
{return and__3546__auto____8625;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8624);
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
{var x__445__auto____8638 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8639 = x__445__auto____8638;

if(cljs.core.truth_(and__3546__auto____8639))
{var and__3546__auto____8642 = x__445__auto____8638.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8642))
{return cljs.core.not.call(null,x__445__auto____8638.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8642;
}
} else
{return and__3546__auto____8639;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8638);
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
{var and__3546__auto____8656 = x__445__auto____8651.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8656))
{return cljs.core.not.call(null,x__445__auto____8651.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8656;
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
var x__445__auto____8661 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8662 = x__445__auto____8661;

if(cljs.core.truth_(and__3546__auto____8662))
{var and__3546__auto____8663 = x__445__auto____8661.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8663))
{return cljs.core.not.call(null,x__445__auto____8661.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8663;
}
} else
{return and__3546__auto____8662;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8661);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8666 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8668 = x__445__auto____8666;

if(cljs.core.truth_(and__3546__auto____8668))
{var and__3546__auto____8670 = x__445__auto____8666.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8670))
{return cljs.core.not.call(null,x__445__auto____8666.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8670;
}
} else
{return and__3546__auto____8668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8666);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8684 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8686 = x__445__auto____8684;

if(cljs.core.truth_(and__3546__auto____8686))
{var and__3546__auto____8688 = x__445__auto____8684.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8688))
{return cljs.core.not.call(null,x__445__auto____8684.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8688;
}
} else
{return and__3546__auto____8686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8684);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8694 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8696 = x__445__auto____8694;

if(cljs.core.truth_(and__3546__auto____8696))
{var and__3546__auto____8698 = x__445__auto____8694.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8698))
{return cljs.core.not.call(null,x__445__auto____8694.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8698;
}
} else
{return and__3546__auto____8696;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8694);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8714 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8714.push(key);
}));
return keys__8714;
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
{var x__445__auto____8725 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8726 = x__445__auto____8725;

if(cljs.core.truth_(and__3546__auto____8726))
{var and__3546__auto____8728 = x__445__auto____8725.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8728))
{return cljs.core.not.call(null,x__445__auto____8725.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8728;
}
} else
{return and__3546__auto____8726;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8725);
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
var and__3546__auto____8739 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8739))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8740 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8740))
{return or__3548__auto____8740;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8739;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8744 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8744))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8744;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8748 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8748))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8748;
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
var and__3546__auto____8753 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8753))
{return (n == n.toFixed());
} else
{return and__3546__auto____8753;
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
if(cljs.core.truth_((function (){var and__3546__auto____8757 = coll;

if(cljs.core.truth_(and__3546__auto____8757))
{var and__3546__auto____8758 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8758))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8758;
}
} else
{return and__3546__auto____8757;
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
var distinct_QMARK___8776 = (function (x){
return true;
});
var distinct_QMARK___8777 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8778 = (function() { 
var G__8781__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8771 = cljs.core.set([y,x]);
var xs__8772 = more;

while(true){
var x__8773 = cljs.core.first.call(null,xs__8772);
var etc__8774 = cljs.core.next.call(null,xs__8772);

if(cljs.core.truth_(xs__8772))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8771,x__8773)))
{return false;
} else
{{
var G__8782 = cljs.core.conj.call(null,s__8771,x__8773);
var G__8783 = etc__8774;
s__8771 = G__8782;
xs__8772 = G__8783;
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
var G__8781 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8781__delegate.call(this, x, y, more);
};
G__8781.cljs$lang$maxFixedArity = 2;
G__8781.cljs$lang$applyTo = (function (arglist__8784){
var x = cljs.core.first(arglist__8784);
var y = cljs.core.first(cljs.core.next(arglist__8784));
var more = cljs.core.rest(cljs.core.next(arglist__8784));
return G__8781__delegate.call(this, x, y, more);
});
return G__8781;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8776.call(this,x);
case  2 :
return distinct_QMARK___8777.call(this,x,y);
default:
return distinct_QMARK___8778.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8778.cljs$lang$applyTo;
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
var r__8788 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8788)))
{return r__8788;
} else
{if(cljs.core.truth_(r__8788))
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
var sort__8802 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8803 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8795 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8795,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8795);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8802.call(this,comp);
case  2 :
return sort__8803.call(this,comp,coll);
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
var sort_by__8809 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8810 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8809.call(this,keyfn,comp);
case  3 :
return sort_by__8810.call(this,keyfn,comp,coll);
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
var reduce__8815 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8816 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8815.call(this,f,val);
case  3 :
return reduce__8816.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8903 = (function (f,coll){
var temp__3695__auto____8899 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8899))
{var s__8900 = temp__3695__auto____8899;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8900),cljs.core.next.call(null,s__8900));
} else
{return f.call(null);
}
});
var seq_reduce__8904 = (function (f,val,coll){
var val__8901 = val;
var coll__8902 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8902))
{{
var G__8906 = f.call(null,val__8901,cljs.core.first.call(null,coll__8902));
var G__8907 = cljs.core.next.call(null,coll__8902);
val__8901 = G__8906;
coll__8902 = G__8907;
continue;
}
} else
{return val__8901;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8903.call(this,f,val);
case  3 :
return seq_reduce__8904.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__8912 = null;
var G__8912__8913 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__8912__8914 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__8912 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__8912__8913.call(this,coll,f);
case  3 :
return G__8912__8914.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8912;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___8921 = (function (){
return 0;
});
var _PLUS___8922 = (function (x){
return x;
});
var _PLUS___8923 = (function (x,y){
return (x + y);
});
var _PLUS___8924 = (function() { 
var G__8926__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__8926 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8926__delegate.call(this, x, y, more);
};
G__8926.cljs$lang$maxFixedArity = 2;
G__8926.cljs$lang$applyTo = (function (arglist__8927){
var x = cljs.core.first(arglist__8927);
var y = cljs.core.first(cljs.core.next(arglist__8927));
var more = cljs.core.rest(cljs.core.next(arglist__8927));
return G__8926__delegate.call(this, x, y, more);
});
return G__8926;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___8921.call(this);
case  1 :
return _PLUS___8922.call(this,x);
case  2 :
return _PLUS___8923.call(this,x,y);
default:
return _PLUS___8924.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___8924.cljs$lang$applyTo;
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
var ___8933 = (function (x){
return (- x);
});
var ___8934 = (function (x,y){
return (x - y);
});
var ___8935 = (function() { 
var G__8942__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__8942 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8942__delegate.call(this, x, y, more);
};
G__8942.cljs$lang$maxFixedArity = 2;
G__8942.cljs$lang$applyTo = (function (arglist__8944){
var x = cljs.core.first(arglist__8944);
var y = cljs.core.first(cljs.core.next(arglist__8944));
var more = cljs.core.rest(cljs.core.next(arglist__8944));
return G__8942__delegate.call(this, x, y, more);
});
return G__8942;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___8933.call(this,x);
case  2 :
return ___8934.call(this,x,y);
default:
return ___8935.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___8935.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___8949 = (function (){
return 1;
});
var _STAR___8950 = (function (x){
return x;
});
var _STAR___8951 = (function (x,y){
return (x * y);
});
var _STAR___8952 = (function() { 
var G__8954__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__8954 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8954__delegate.call(this, x, y, more);
};
G__8954.cljs$lang$maxFixedArity = 2;
G__8954.cljs$lang$applyTo = (function (arglist__8959){
var x = cljs.core.first(arglist__8959);
var y = cljs.core.first(cljs.core.next(arglist__8959));
var more = cljs.core.rest(cljs.core.next(arglist__8959));
return G__8954__delegate.call(this, x, y, more);
});
return G__8954;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___8949.call(this);
case  1 :
return _STAR___8950.call(this,x);
case  2 :
return _STAR___8951.call(this,x,y);
default:
return _STAR___8952.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___8952.cljs$lang$applyTo;
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
var _SLASH___8964 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___8965 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___8966 = (function() { 
var G__8968__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__8968 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8968__delegate.call(this, x, y, more);
};
G__8968.cljs$lang$maxFixedArity = 2;
G__8968.cljs$lang$applyTo = (function (arglist__8969){
var x = cljs.core.first(arglist__8969);
var y = cljs.core.first(cljs.core.next(arglist__8969));
var more = cljs.core.rest(cljs.core.next(arglist__8969));
return G__8968__delegate.call(this, x, y, more);
});
return G__8968;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___8964.call(this,x);
case  2 :
return _SLASH___8965.call(this,x,y);
default:
return _SLASH___8966.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___8966.cljs$lang$applyTo;
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
var _LT___8974 = (function (x){
return true;
});
var _LT___8975 = (function (x,y){
return (x < y);
});
var _LT___8976 = (function() { 
var G__8980__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__8982 = y;
var G__8983 = cljs.core.first.call(null,more);
var G__8984 = cljs.core.next.call(null,more);
x = G__8982;
y = G__8983;
more = G__8984;
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
var G__8980 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8980__delegate.call(this, x, y, more);
};
G__8980.cljs$lang$maxFixedArity = 2;
G__8980.cljs$lang$applyTo = (function (arglist__8989){
var x = cljs.core.first(arglist__8989);
var y = cljs.core.first(cljs.core.next(arglist__8989));
var more = cljs.core.rest(cljs.core.next(arglist__8989));
return G__8980__delegate.call(this, x, y, more);
});
return G__8980;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___8974.call(this,x);
case  2 :
return _LT___8975.call(this,x,y);
default:
return _LT___8976.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___8976.cljs$lang$applyTo;
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
var _LT__EQ___8996 = (function (x){
return true;
});
var _LT__EQ___8997 = (function (x,y){
return (x <= y);
});
var _LT__EQ___8998 = (function() { 
var G__9000__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9001 = y;
var G__9002 = cljs.core.first.call(null,more);
var G__9003 = cljs.core.next.call(null,more);
x = G__9001;
y = G__9002;
more = G__9003;
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
var G__9000 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9000__delegate.call(this, x, y, more);
};
G__9000.cljs$lang$maxFixedArity = 2;
G__9000.cljs$lang$applyTo = (function (arglist__9004){
var x = cljs.core.first(arglist__9004);
var y = cljs.core.first(cljs.core.next(arglist__9004));
var more = cljs.core.rest(cljs.core.next(arglist__9004));
return G__9000__delegate.call(this, x, y, more);
});
return G__9000;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___8996.call(this,x);
case  2 :
return _LT__EQ___8997.call(this,x,y);
default:
return _LT__EQ___8998.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___8998.cljs$lang$applyTo;
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
var _GT___9042 = (function (x){
return true;
});
var _GT___9043 = (function (x,y){
return (x > y);
});
var _GT___9044 = (function() { 
var G__9046__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9047 = y;
var G__9048 = cljs.core.first.call(null,more);
var G__9049 = cljs.core.next.call(null,more);
x = G__9047;
y = G__9048;
more = G__9049;
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
var G__9046 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9046__delegate.call(this, x, y, more);
};
G__9046.cljs$lang$maxFixedArity = 2;
G__9046.cljs$lang$applyTo = (function (arglist__9053){
var x = cljs.core.first(arglist__9053);
var y = cljs.core.first(cljs.core.next(arglist__9053));
var more = cljs.core.rest(cljs.core.next(arglist__9053));
return G__9046__delegate.call(this, x, y, more);
});
return G__9046;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9042.call(this,x);
case  2 :
return _GT___9043.call(this,x,y);
default:
return _GT___9044.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9044.cljs$lang$applyTo;
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
var _GT__EQ___9185 = (function (x){
return true;
});
var _GT__EQ___9186 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9187 = (function() { 
var G__9190__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9191 = y;
var G__9192 = cljs.core.first.call(null,more);
var G__9193 = cljs.core.next.call(null,more);
x = G__9191;
y = G__9192;
more = G__9193;
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
var G__9190 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9190__delegate.call(this, x, y, more);
};
G__9190.cljs$lang$maxFixedArity = 2;
G__9190.cljs$lang$applyTo = (function (arglist__9194){
var x = cljs.core.first(arglist__9194);
var y = cljs.core.first(cljs.core.next(arglist__9194));
var more = cljs.core.rest(cljs.core.next(arglist__9194));
return G__9190__delegate.call(this, x, y, more);
});
return G__9190;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9185.call(this,x);
case  2 :
return _GT__EQ___9186.call(this,x,y);
default:
return _GT__EQ___9187.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9187.cljs$lang$applyTo;
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
var max__9210 = (function (x){
return x;
});
var max__9211 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9212 = (function() { 
var G__9214__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9214 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9214__delegate.call(this, x, y, more);
};
G__9214.cljs$lang$maxFixedArity = 2;
G__9214.cljs$lang$applyTo = (function (arglist__9220){
var x = cljs.core.first(arglist__9220);
var y = cljs.core.first(cljs.core.next(arglist__9220));
var more = cljs.core.rest(cljs.core.next(arglist__9220));
return G__9214__delegate.call(this, x, y, more);
});
return G__9214;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9210.call(this,x);
case  2 :
return max__9211.call(this,x,y);
default:
return max__9212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9212.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9235 = (function (x){
return x;
});
var min__9236 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9237 = (function() { 
var G__9241__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9241 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9241__delegate.call(this, x, y, more);
};
G__9241.cljs$lang$maxFixedArity = 2;
G__9241.cljs$lang$applyTo = (function (arglist__9248){
var x = cljs.core.first(arglist__9248);
var y = cljs.core.first(cljs.core.next(arglist__9248));
var more = cljs.core.rest(cljs.core.next(arglist__9248));
return G__9241__delegate.call(this, x, y, more);
});
return G__9241;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9235.call(this,x);
case  2 :
return min__9236.call(this,x,y);
default:
return min__9237.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9237.cljs$lang$applyTo;
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
var rem__9261 = (n % d);

return cljs.core.fix.call(null,((n - rem__9261) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9271 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9271));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9273 = (function (){
return Math.random.call(null);
});
var rand__9274 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9273.call(this);
case  1 :
return rand__9274.call(this,n);
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
var _EQ__EQ___9394 = (function (x){
return true;
});
var _EQ__EQ___9395 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9396 = (function() { 
var G__9403__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9404 = y;
var G__9405 = cljs.core.first.call(null,more);
var G__9406 = cljs.core.next.call(null,more);
x = G__9404;
y = G__9405;
more = G__9406;
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
var G__9403 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9403__delegate.call(this, x, y, more);
};
G__9403.cljs$lang$maxFixedArity = 2;
G__9403.cljs$lang$applyTo = (function (arglist__9411){
var x = cljs.core.first(arglist__9411);
var y = cljs.core.first(cljs.core.next(arglist__9411));
var more = cljs.core.rest(cljs.core.next(arglist__9411));
return G__9403__delegate.call(this, x, y, more);
});
return G__9403;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9394.call(this,x);
case  2 :
return _EQ__EQ___9395.call(this,x,y);
default:
return _EQ__EQ___9396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9396.cljs$lang$applyTo;
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
var n__9417 = n;
var xs__9419 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9420 = xs__9419;

if(cljs.core.truth_(and__3546__auto____9420))
{return (n__9417 > 0);
} else
{return and__3546__auto____9420;
}
})()))
{{
var G__9514 = (n__9417 - 1);
var G__9515 = cljs.core.next.call(null,xs__9419);
n__9417 = G__9514;
xs__9419 = G__9515;
continue;
}
} else
{return xs__9419;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9525 = null;
var G__9525__9526 = (function (coll,n){
var temp__3695__auto____9518 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9518))
{var xs__9522 = temp__3695__auto____9518;

return cljs.core.first.call(null,xs__9522);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9525__9527 = (function (coll,n,not_found){
var temp__3695__auto____9523 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9523))
{var xs__9524 = temp__3695__auto____9523;

return cljs.core.first.call(null,xs__9524);
} else
{return not_found;
}
});
G__9525 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9525__9526.call(this,coll,n);
case  3 :
return G__9525__9527.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9525;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9540 = (function (){
return "";
});
var str_STAR___9541 = (function (x){
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
var str_STAR___9542 = (function() { 
var G__9548__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9550 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9551 = cljs.core.next.call(null,more);
sb = G__9550;
more = G__9551;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9548 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9548__delegate.call(this, x, ys);
};
G__9548.cljs$lang$maxFixedArity = 1;
G__9548.cljs$lang$applyTo = (function (arglist__9557){
var x = cljs.core.first(arglist__9557);
var ys = cljs.core.rest(arglist__9557);
return G__9548__delegate.call(this, x, ys);
});
return G__9548;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9540.call(this);
case  1 :
return str_STAR___9541.call(this,x);
default:
return str_STAR___9542.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9542.cljs$lang$applyTo;
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
var str__9565 = (function (){
return "";
});
var str__9566 = (function (x){
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
var str__9567 = (function() { 
var G__9575__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9575 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9575__delegate.call(this, x, ys);
};
G__9575.cljs$lang$maxFixedArity = 1;
G__9575.cljs$lang$applyTo = (function (arglist__9576){
var x = cljs.core.first(arglist__9576);
var ys = cljs.core.rest(arglist__9576);
return G__9575__delegate.call(this, x, ys);
});
return G__9575;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9565.call(this);
case  1 :
return str__9566.call(this,x);
default:
return str__9567.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9567.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9581 = (function (s,start){
return s.substring(start);
});
var subs__9582 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9581.call(this,s,start);
case  3 :
return subs__9582.call(this,s,start,end);
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
var symbol__9594 = (function (name){
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
var symbol__9595 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9594.call(this,ns);
case  2 :
return symbol__9595.call(this,ns,name);
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
var keyword__9606 = (function (name){
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
var keyword__9607 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9606.call(this,ns);
case  2 :
return keyword__9607.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9638 = cljs.core.seq.call(null,x);
var ys__9641 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9638)))
{return cljs.core.nil_QMARK_.call(null,ys__9641);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9641)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9638),cljs.core.first.call(null,ys__9641))))
{{
var G__9645 = cljs.core.next.call(null,xs__9638);
var G__9647 = cljs.core.next.call(null,ys__9641);
xs__9638 = G__9645;
ys__9641 = G__9647;
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
return cljs.core.reduce.call(null,(function (p1__9653_SHARP_,p2__9655_SHARP_){
return cljs.core.hash_combine.call(null,p1__9653_SHARP_,cljs.core.hash.call(null,p2__9655_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9664__9666 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9664__9666))
{var G__9668__9671 = cljs.core.first.call(null,G__9664__9666);
var vec__9670__9672 = G__9668__9671;
var key_name__9673 = cljs.core.nth.call(null,vec__9670__9672,0,null);
var f__9674 = cljs.core.nth.call(null,vec__9670__9672,1,null);
var G__9664__9675 = G__9664__9666;

var G__9668__9677 = G__9668__9671;
var G__9664__9678 = G__9664__9675;

while(true){
var vec__9679__9681 = G__9668__9677;
var key_name__9682 = cljs.core.nth.call(null,vec__9679__9681,0,null);
var f__9684 = cljs.core.nth.call(null,vec__9679__9681,1,null);
var G__9664__9685 = G__9664__9678;

var str_name__9687 = cljs.core.name.call(null,key_name__9682);

obj[str_name__9687] = f__9684;
var temp__3698__auto____9688 = cljs.core.next.call(null,G__9664__9685);

if(cljs.core.truth_(temp__3698__auto____9688))
{var G__9664__9689 = temp__3698__auto____9688;

{
var G__9694 = cljs.core.first.call(null,G__9664__9689);
var G__9695 = G__9664__9689;
G__9668__9677 = G__9694;
G__9664__9678 = G__9695;
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
var this__9709 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9710 = this;
return (new cljs.core.List(this__9710.meta,o,coll,(this__9710.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9711 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9716 = this;
return this__9716.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9719 = this;
return this__9719.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9721 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9756 = this;
return this__9756.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9757 = this;
return this__9757.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9824 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9828 = this;
return (new cljs.core.List(meta,this__9828.first,this__9828.rest,this__9828.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9832 = this;
return this__9832.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9835 = this;
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
var this__9853 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9854 = this;
return (new cljs.core.List(this__9854.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9855 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9856 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9857 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9858 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9859 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9860 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9861 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9862 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9863 = this;
return this__9863.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9864 = this;
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
list.cljs$lang$applyTo = (function (arglist__9889){
var items = cljs.core.seq( arglist__9889 );;
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
var this__9890 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9891 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9892 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9894 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9894.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9895 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9896 = this;
return this__9896.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9897 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9897.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9897.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9898 = this;
return this__9898.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9933 = this;
return (new cljs.core.Cons(meta,this__9933.first,this__9933.rest));
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
var G__9999 = null;
var G__9999__10000 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9999__10001 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9999 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9999__10000.call(this,string,f);
case  3 :
return G__9999__10001.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9999;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10003 = null;
var G__10003__10004 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10003__10005 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10003 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10003__10004.call(this,string,k);
case  3 :
return G__10003__10005.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10003;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10007 = null;
var G__10007__10008 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10007__10009 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10007 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10007__10008.call(this,string,n);
case  3 :
return G__10007__10009.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10007;
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
var G__10011 = null;
var G__10011__10012 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10011__10013 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10011 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10011__10012.call(this,this$,coll);
case  3 :
return G__10011__10013.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10011;
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
var x__10045 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10045;
} else
{lazy_seq.x = x__10045.call(null);
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
var this__10055 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10057 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10058 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10059 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10059.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10060 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10061 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10063 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10065 = this;
return this__10065.meta;
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
var ary__10071 = cljs.core.array.call(null);

var s__10072 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10072)))
{ary__10071.push(cljs.core.first.call(null,s__10072));
{
var G__10075 = cljs.core.next.call(null,s__10072);
s__10072 = G__10075;
continue;
}
} else
{return ary__10071;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10076 = s;
var i__10077 = n;
var sum__10078 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10080 = (i__10077 > 0);

if(cljs.core.truth_(and__3546__auto____10080))
{return cljs.core.seq.call(null,s__10076);
} else
{return and__3546__auto____10080;
}
})()))
{{
var G__10085 = cljs.core.next.call(null,s__10076);
var G__10086 = (i__10077 - 1);
var G__10087 = (sum__10078 + 1);
s__10076 = G__10085;
i__10077 = G__10086;
sum__10078 = G__10087;
continue;
}
} else
{return sum__10078;
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
var concat__10118 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10119 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10121 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10091 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10091))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10091),concat.call(null,cljs.core.rest.call(null,s__10091),y));
} else
{return y;
}
})));
});
var concat__10122 = (function() { 
var G__10126__delegate = function (x,y,zs){
var cat__10116 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10109 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10109))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10109),cat.call(null,cljs.core.rest.call(null,xys__10109),zs));
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
var G__10126 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10126__delegate.call(this, x, y, zs);
};
G__10126.cljs$lang$maxFixedArity = 2;
G__10126.cljs$lang$applyTo = (function (arglist__10131){
var x = cljs.core.first(arglist__10131);
var y = cljs.core.first(cljs.core.next(arglist__10131));
var zs = cljs.core.rest(cljs.core.next(arglist__10131));
return G__10126__delegate.call(this, x, y, zs);
});
return G__10126;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10118.call(this);
case  1 :
return concat__10119.call(this,x);
case  2 :
return concat__10121.call(this,x,y);
default:
return concat__10122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10122.cljs$lang$applyTo;
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
var list_STAR___10134 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10135 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10136 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10137 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10138 = (function() { 
var G__10145__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10145 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10145__delegate.call(this, a, b, c, d, more);
};
G__10145.cljs$lang$maxFixedArity = 4;
G__10145.cljs$lang$applyTo = (function (arglist__10149){
var a = cljs.core.first(arglist__10149);
var b = cljs.core.first(cljs.core.next(arglist__10149));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10149)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10149))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10149))));
return G__10145__delegate.call(this, a, b, c, d, more);
});
return G__10145;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10134.call(this,a);
case  2 :
return list_STAR___10135.call(this,a,b);
case  3 :
return list_STAR___10136.call(this,a,b,c);
case  4 :
return list_STAR___10137.call(this,a,b,c,d);
default:
return list_STAR___10138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10138.cljs$lang$applyTo;
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
var apply__10259 = (function (f,args){
var fixed_arity__10150 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10150 + 1)) <= fixed_arity__10150)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10260 = (function (f,x,args){
var arglist__10151 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10152 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10151,fixed_arity__10152) <= fixed_arity__10152)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10151));
} else
{return f.cljs$lang$applyTo(arglist__10151);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10151));
}
});
var apply__10261 = (function (f,x,y,args){
var arglist__10153 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10155 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10153,fixed_arity__10155) <= fixed_arity__10155)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10153));
} else
{return f.cljs$lang$applyTo(arglist__10153);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10153));
}
});
var apply__10262 = (function (f,x,y,z,args){
var arglist__10158 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10159 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10158,fixed_arity__10159) <= fixed_arity__10159)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10158));
} else
{return f.cljs$lang$applyTo(arglist__10158);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10158));
}
});
var apply__10263 = (function() { 
var G__10269__delegate = function (f,a,b,c,d,args){
var arglist__10165 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10166 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10165,fixed_arity__10166) <= fixed_arity__10166)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10165));
} else
{return f.cljs$lang$applyTo(arglist__10165);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10165));
}
};
var G__10269 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10269__delegate.call(this, f, a, b, c, d, args);
};
G__10269.cljs$lang$maxFixedArity = 5;
G__10269.cljs$lang$applyTo = (function (arglist__10271){
var f = cljs.core.first(arglist__10271);
var a = cljs.core.first(cljs.core.next(arglist__10271));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10271)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10271))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10271)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10271)))));
return G__10269__delegate.call(this, f, a, b, c, d, args);
});
return G__10269;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10259.call(this,f,a);
case  3 :
return apply__10260.call(this,f,a,b);
case  4 :
return apply__10261.call(this,f,a,b,c);
case  5 :
return apply__10262.call(this,f,a,b,c,d);
default:
return apply__10263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10263.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10275){
var obj = cljs.core.first(arglist__10275);
var f = cljs.core.first(cljs.core.next(arglist__10275));
var args = cljs.core.rest(cljs.core.next(arglist__10275));
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
var not_EQ___10283 = (function (x){
return false;
});
var not_EQ___10284 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10285 = (function() { 
var G__10287__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10287 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10287__delegate.call(this, x, y, more);
};
G__10287.cljs$lang$maxFixedArity = 2;
G__10287.cljs$lang$applyTo = (function (arglist__10288){
var x = cljs.core.first(arglist__10288);
var y = cljs.core.first(cljs.core.next(arglist__10288));
var more = cljs.core.rest(cljs.core.next(arglist__10288));
return G__10287__delegate.call(this, x, y, more);
});
return G__10287;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10283.call(this,x);
case  2 :
return not_EQ___10284.call(this,x,y);
default:
return not_EQ___10285.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10285.cljs$lang$applyTo;
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
var G__10339 = pred;
var G__10340 = cljs.core.next.call(null,coll);
pred = G__10339;
coll = G__10340;
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
{var or__3548__auto____10345 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10345))
{return or__3548__auto____10345;
} else
{{
var G__10347 = pred;
var G__10348 = cljs.core.next.call(null,coll);
pred = G__10347;
coll = G__10348;
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
var G__10445 = null;
var G__10445__10446 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10445__10447 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10445__10448 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10445__10449 = (function() { 
var G__10454__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10454 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10454__delegate.call(this, x, y, zs);
};
G__10454.cljs$lang$maxFixedArity = 2;
G__10454.cljs$lang$applyTo = (function (arglist__10455){
var x = cljs.core.first(arglist__10455);
var y = cljs.core.first(cljs.core.next(arglist__10455));
var zs = cljs.core.rest(cljs.core.next(arglist__10455));
return G__10454__delegate.call(this, x, y, zs);
});
return G__10454;
})()
;
G__10445 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10445__10446.call(this);
case  1 :
return G__10445__10447.call(this,x);
case  2 :
return G__10445__10448.call(this,x,y);
default:
return G__10445__10449.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10445.cljs$lang$maxFixedArity = 2;
G__10445.cljs$lang$applyTo = G__10445__10449.cljs$lang$applyTo;
return G__10445;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10483__delegate = function (args){
return x;
};
var G__10483 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10483__delegate.call(this, args);
};
G__10483.cljs$lang$maxFixedArity = 0;
G__10483.cljs$lang$applyTo = (function (arglist__10484){
var args = cljs.core.seq( arglist__10484 );;
return G__10483__delegate.call(this, args);
});
return G__10483;
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
var comp__10622 = (function (){
return cljs.core.identity;
});
var comp__10623 = (function (f){
return f;
});
var comp__10624 = (function (f,g){
return (function() {
var G__10628 = null;
var G__10628__10629 = (function (){
return f.call(null,g.call(null));
});
var G__10628__10630 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10628__10631 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10628__10632 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10628__10633 = (function() { 
var G__10641__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10641 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10641__delegate.call(this, x, y, z, args);
};
G__10641.cljs$lang$maxFixedArity = 3;
G__10641.cljs$lang$applyTo = (function (arglist__10647){
var x = cljs.core.first(arglist__10647);
var y = cljs.core.first(cljs.core.next(arglist__10647));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10647)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10647)));
return G__10641__delegate.call(this, x, y, z, args);
});
return G__10641;
})()
;
G__10628 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10628__10629.call(this);
case  1 :
return G__10628__10630.call(this,x);
case  2 :
return G__10628__10631.call(this,x,y);
case  3 :
return G__10628__10632.call(this,x,y,z);
default:
return G__10628__10633.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10628.cljs$lang$maxFixedArity = 3;
G__10628.cljs$lang$applyTo = G__10628__10633.cljs$lang$applyTo;
return G__10628;
})()
});
var comp__10625 = (function (f,g,h){
return (function() {
var G__10649 = null;
var G__10649__10650 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10649__10651 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10649__10652 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10649__10653 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10649__10654 = (function() { 
var G__10662__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10662 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10662__delegate.call(this, x, y, z, args);
};
G__10662.cljs$lang$maxFixedArity = 3;
G__10662.cljs$lang$applyTo = (function (arglist__10663){
var x = cljs.core.first(arglist__10663);
var y = cljs.core.first(cljs.core.next(arglist__10663));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10663)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10663)));
return G__10662__delegate.call(this, x, y, z, args);
});
return G__10662;
})()
;
G__10649 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10649__10650.call(this);
case  1 :
return G__10649__10651.call(this,x);
case  2 :
return G__10649__10652.call(this,x,y);
case  3 :
return G__10649__10653.call(this,x,y,z);
default:
return G__10649__10654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10649.cljs$lang$maxFixedArity = 3;
G__10649.cljs$lang$applyTo = G__10649__10654.cljs$lang$applyTo;
return G__10649;
})()
});
var comp__10626 = (function() { 
var G__10664__delegate = function (f1,f2,f3,fs){
var fs__10492 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10666__delegate = function (args){
var ret__10493 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10492),args);
var fs__10494 = cljs.core.next.call(null,fs__10492);

while(true){
if(cljs.core.truth_(fs__10494))
{{
var G__10667 = cljs.core.first.call(null,fs__10494).call(null,ret__10493);
var G__10668 = cljs.core.next.call(null,fs__10494);
ret__10493 = G__10667;
fs__10494 = G__10668;
continue;
}
} else
{return ret__10493;
}
break;
}
};
var G__10666 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10666__delegate.call(this, args);
};
G__10666.cljs$lang$maxFixedArity = 0;
G__10666.cljs$lang$applyTo = (function (arglist__10670){
var args = cljs.core.seq( arglist__10670 );;
return G__10666__delegate.call(this, args);
});
return G__10666;
})()
;
};
var G__10664 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10664__delegate.call(this, f1, f2, f3, fs);
};
G__10664.cljs$lang$maxFixedArity = 3;
G__10664.cljs$lang$applyTo = (function (arglist__10671){
var f1 = cljs.core.first(arglist__10671);
var f2 = cljs.core.first(cljs.core.next(arglist__10671));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10671)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10671)));
return G__10664__delegate.call(this, f1, f2, f3, fs);
});
return G__10664;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10622.call(this);
case  1 :
return comp__10623.call(this,f1);
case  2 :
return comp__10624.call(this,f1,f2);
case  3 :
return comp__10625.call(this,f1,f2,f3);
default:
return comp__10626.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10626.cljs$lang$applyTo;
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
var partial__10679 = (function (f,arg1){
return (function() { 
var G__10684__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10684 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10684__delegate.call(this, args);
};
G__10684.cljs$lang$maxFixedArity = 0;
G__10684.cljs$lang$applyTo = (function (arglist__10686){
var args = cljs.core.seq( arglist__10686 );;
return G__10684__delegate.call(this, args);
});
return G__10684;
})()
;
});
var partial__10680 = (function (f,arg1,arg2){
return (function() { 
var G__10688__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10688 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10688__delegate.call(this, args);
};
G__10688.cljs$lang$maxFixedArity = 0;
G__10688.cljs$lang$applyTo = (function (arglist__10689){
var args = cljs.core.seq( arglist__10689 );;
return G__10688__delegate.call(this, args);
});
return G__10688;
})()
;
});
var partial__10681 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10690__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10690 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10690__delegate.call(this, args);
};
G__10690.cljs$lang$maxFixedArity = 0;
G__10690.cljs$lang$applyTo = (function (arglist__10692){
var args = cljs.core.seq( arglist__10692 );;
return G__10690__delegate.call(this, args);
});
return G__10690;
})()
;
});
var partial__10682 = (function() { 
var G__10693__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10694__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
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
};
var G__10693 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10693__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10693.cljs$lang$maxFixedArity = 4;
G__10693.cljs$lang$applyTo = (function (arglist__10696){
var f = cljs.core.first(arglist__10696);
var arg1 = cljs.core.first(cljs.core.next(arglist__10696));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10696)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10696))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10696))));
return G__10693__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10693;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10679.call(this,f,arg1);
case  3 :
return partial__10680.call(this,f,arg1,arg2);
case  4 :
return partial__10681.call(this,f,arg1,arg2,arg3);
default:
return partial__10682.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10682.cljs$lang$applyTo;
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
var fnil__10699 = (function (f,x){
return (function() {
var G__10703 = null;
var G__10703__10704 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10703__10705 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10703__10706 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10703__10707 = (function() { 
var G__10800__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10800 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10800__delegate.call(this, a, b, c, ds);
};
G__10800.cljs$lang$maxFixedArity = 3;
G__10800.cljs$lang$applyTo = (function (arglist__10803){
var a = cljs.core.first(arglist__10803);
var b = cljs.core.first(cljs.core.next(arglist__10803));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10803)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10803)));
return G__10800__delegate.call(this, a, b, c, ds);
});
return G__10800;
})()
;
G__10703 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10703__10704.call(this,a);
case  2 :
return G__10703__10705.call(this,a,b);
case  3 :
return G__10703__10706.call(this,a,b,c);
default:
return G__10703__10707.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10703.cljs$lang$maxFixedArity = 3;
G__10703.cljs$lang$applyTo = G__10703__10707.cljs$lang$applyTo;
return G__10703;
})()
});
var fnil__10700 = (function (f,x,y){
return (function() {
var G__10805 = null;
var G__10805__10806 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10805__10807 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10805__10808 = (function() { 
var G__10810__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10810 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10810__delegate.call(this, a, b, c, ds);
};
G__10810.cljs$lang$maxFixedArity = 3;
G__10810.cljs$lang$applyTo = (function (arglist__10811){
var a = cljs.core.first(arglist__10811);
var b = cljs.core.first(cljs.core.next(arglist__10811));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10811)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10811)));
return G__10810__delegate.call(this, a, b, c, ds);
});
return G__10810;
})()
;
G__10805 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10805__10806.call(this,a,b);
case  3 :
return G__10805__10807.call(this,a,b,c);
default:
return G__10805__10808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10805.cljs$lang$maxFixedArity = 3;
G__10805.cljs$lang$applyTo = G__10805__10808.cljs$lang$applyTo;
return G__10805;
})()
});
var fnil__10701 = (function (f,x,y,z){
return (function() {
var G__10814 = null;
var G__10814__10816 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10814__10817 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10814__10818 = (function() { 
var G__10834__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10834 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10834__delegate.call(this, a, b, c, ds);
};
G__10834.cljs$lang$maxFixedArity = 3;
G__10834.cljs$lang$applyTo = (function (arglist__10836){
var a = cljs.core.first(arglist__10836);
var b = cljs.core.first(cljs.core.next(arglist__10836));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10836)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10836)));
return G__10834__delegate.call(this, a, b, c, ds);
});
return G__10834;
})()
;
G__10814 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10814__10816.call(this,a,b);
case  3 :
return G__10814__10817.call(this,a,b,c);
default:
return G__10814__10818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10814.cljs$lang$maxFixedArity = 3;
G__10814.cljs$lang$applyTo = G__10814__10818.cljs$lang$applyTo;
return G__10814;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10699.call(this,f,x);
case  3 :
return fnil__10700.call(this,f,x,y);
case  4 :
return fnil__10701.call(this,f,x,y,z);
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
var mapi__10852 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10847 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10847))
{var s__10849 = temp__3698__auto____10847;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10849)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10849)));
} else
{return null;
}
})));
});

return mapi__10852.call(null,0,coll);
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
var keepi__10932 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10895 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10895))
{var s__10898 = temp__3698__auto____10895;

var x__10931 = f.call(null,idx,cljs.core.first.call(null,s__10898));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10931)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10898));
} else
{return cljs.core.cons.call(null,x__10931,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10898)));
}
} else
{return null;
}
})));
});

return keepi__10932.call(null,0,coll);
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
var every_pred__11082 = (function (p){
return (function() {
var ep1 = null;
var ep1__11087 = (function (){
return true;
});
var ep1__11088 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11089 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10972 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10972))
{return p.call(null,y);
} else
{return and__3546__auto____10972;
}
})());
});
var ep1__11090 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10974 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10974))
{var and__3546__auto____10976 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10976))
{return p.call(null,z);
} else
{return and__3546__auto____10976;
}
} else
{return and__3546__auto____10974;
}
})());
});
var ep1__11091 = (function() { 
var G__11095__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10978 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10978))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10978;
}
})());
};
var G__11095 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11095__delegate.call(this, x, y, z, args);
};
G__11095.cljs$lang$maxFixedArity = 3;
G__11095.cljs$lang$applyTo = (function (arglist__11098){
var x = cljs.core.first(arglist__11098);
var y = cljs.core.first(cljs.core.next(arglist__11098));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11098)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11098)));
return G__11095__delegate.call(this, x, y, z, args);
});
return G__11095;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11087.call(this);
case  1 :
return ep1__11088.call(this,x);
case  2 :
return ep1__11089.call(this,x,y);
case  3 :
return ep1__11090.call(this,x,y,z);
default:
return ep1__11091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11091.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11083 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11100 = (function (){
return true;
});
var ep2__11101 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10982 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10982))
{return p2.call(null,x);
} else
{return and__3546__auto____10982;
}
})());
});
var ep2__11102 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10984 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10984))
{var and__3546__auto____10986 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10986))
{var and__3546__auto____10988 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10988))
{return p2.call(null,y);
} else
{return and__3546__auto____10988;
}
} else
{return and__3546__auto____10986;
}
} else
{return and__3546__auto____10984;
}
})());
});
var ep2__11103 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10993 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10993))
{var and__3546__auto____10994 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10994))
{var and__3546__auto____10995 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10995))
{var and__3546__auto____10996 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10996))
{var and__3546__auto____10998 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10998))
{return p2.call(null,z);
} else
{return and__3546__auto____10998;
}
} else
{return and__3546__auto____10996;
}
} else
{return and__3546__auto____10995;
}
} else
{return and__3546__auto____10994;
}
} else
{return and__3546__auto____10993;
}
})());
});
var ep2__11104 = (function() { 
var G__11115__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11000 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11000))
{return cljs.core.every_QMARK_.call(null,(function (p1__10888_SHARP_){
var and__3546__auto____11003 = p1.call(null,p1__10888_SHARP_);

if(cljs.core.truth_(and__3546__auto____11003))
{return p2.call(null,p1__10888_SHARP_);
} else
{return and__3546__auto____11003;
}
}),args);
} else
{return and__3546__auto____11000;
}
})());
};
var G__11115 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11115__delegate.call(this, x, y, z, args);
};
G__11115.cljs$lang$maxFixedArity = 3;
G__11115.cljs$lang$applyTo = (function (arglist__11118){
var x = cljs.core.first(arglist__11118);
var y = cljs.core.first(cljs.core.next(arglist__11118));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11118)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11118)));
return G__11115__delegate.call(this, x, y, z, args);
});
return G__11115;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11100.call(this);
case  1 :
return ep2__11101.call(this,x);
case  2 :
return ep2__11102.call(this,x,y);
case  3 :
return ep2__11103.call(this,x,y,z);
default:
return ep2__11104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11104.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11084 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11120 = (function (){
return true;
});
var ep3__11122 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11012 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11012))
{var and__3546__auto____11015 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11015))
{return p3.call(null,x);
} else
{return and__3546__auto____11015;
}
} else
{return and__3546__auto____11012;
}
})());
});
var ep3__11123 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11020 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11020))
{var and__3546__auto____11023 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11023))
{var and__3546__auto____11026 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11026))
{var and__3546__auto____11029 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11029))
{var and__3546__auto____11031 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11031))
{return p3.call(null,y);
} else
{return and__3546__auto____11031;
}
} else
{return and__3546__auto____11029;
}
} else
{return and__3546__auto____11026;
}
} else
{return and__3546__auto____11023;
}
} else
{return and__3546__auto____11020;
}
})());
});
var ep3__11124 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11035 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11035))
{var and__3546__auto____11036 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11036))
{var and__3546__auto____11038 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11038))
{var and__3546__auto____11039 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11039))
{var and__3546__auto____11041 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11041))
{var and__3546__auto____11042 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11042))
{var and__3546__auto____11043 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11043))
{var and__3546__auto____11044 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11044))
{return p3.call(null,z);
} else
{return and__3546__auto____11044;
}
} else
{return and__3546__auto____11043;
}
} else
{return and__3546__auto____11042;
}
} else
{return and__3546__auto____11041;
}
} else
{return and__3546__auto____11039;
}
} else
{return and__3546__auto____11038;
}
} else
{return and__3546__auto____11036;
}
} else
{return and__3546__auto____11035;
}
})());
});
var ep3__11125 = (function() { 
var G__11140__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11047 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11047))
{return cljs.core.every_QMARK_.call(null,(function (p1__10889_SHARP_){
var and__3546__auto____11049 = p1.call(null,p1__10889_SHARP_);

if(cljs.core.truth_(and__3546__auto____11049))
{var and__3546__auto____11051 = p2.call(null,p1__10889_SHARP_);

if(cljs.core.truth_(and__3546__auto____11051))
{return p3.call(null,p1__10889_SHARP_);
} else
{return and__3546__auto____11051;
}
} else
{return and__3546__auto____11049;
}
}),args);
} else
{return and__3546__auto____11047;
}
})());
};
var G__11140 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11140__delegate.call(this, x, y, z, args);
};
G__11140.cljs$lang$maxFixedArity = 3;
G__11140.cljs$lang$applyTo = (function (arglist__11144){
var x = cljs.core.first(arglist__11144);
var y = cljs.core.first(cljs.core.next(arglist__11144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11144)));
return G__11140__delegate.call(this, x, y, z, args);
});
return G__11140;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11120.call(this);
case  1 :
return ep3__11122.call(this,x);
case  2 :
return ep3__11123.call(this,x,y);
case  3 :
return ep3__11124.call(this,x,y,z);
default:
return ep3__11125.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11125.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11085 = (function() { 
var G__11146__delegate = function (p1,p2,p3,ps){
var ps__11055 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11147 = (function (){
return true;
});
var epn__11148 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10890_SHARP_){
return p1__10890_SHARP_.call(null,x);
}),ps__11055);
});
var epn__11149 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10891_SHARP_){
var and__3546__auto____11058 = p1__10891_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11058))
{return p1__10891_SHARP_.call(null,y);
} else
{return and__3546__auto____11058;
}
}),ps__11055);
});
var epn__11150 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10892_SHARP_){
var and__3546__auto____11062 = p1__10892_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11062))
{var and__3546__auto____11064 = p1__10892_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11064))
{return p1__10892_SHARP_.call(null,z);
} else
{return and__3546__auto____11064;
}
} else
{return and__3546__auto____11062;
}
}),ps__11055);
});
var epn__11151 = (function() { 
var G__11157__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11067 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11067))
{return cljs.core.every_QMARK_.call(null,(function (p1__10893_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10893_SHARP_,args);
}),ps__11055);
} else
{return and__3546__auto____11067;
}
})());
};
var G__11157 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11157__delegate.call(this, x, y, z, args);
};
G__11157.cljs$lang$maxFixedArity = 3;
G__11157.cljs$lang$applyTo = (function (arglist__11163){
var x = cljs.core.first(arglist__11163);
var y = cljs.core.first(cljs.core.next(arglist__11163));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11163)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11163)));
return G__11157__delegate.call(this, x, y, z, args);
});
return G__11157;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11147.call(this);
case  1 :
return epn__11148.call(this,x);
case  2 :
return epn__11149.call(this,x,y);
case  3 :
return epn__11150.call(this,x,y,z);
default:
return epn__11151.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11151.cljs$lang$applyTo;
return epn;
})()
};
var G__11146 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11146__delegate.call(this, p1, p2, p3, ps);
};
G__11146.cljs$lang$maxFixedArity = 3;
G__11146.cljs$lang$applyTo = (function (arglist__11174){
var p1 = cljs.core.first(arglist__11174);
var p2 = cljs.core.first(cljs.core.next(arglist__11174));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11174)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11174)));
return G__11146__delegate.call(this, p1, p2, p3, ps);
});
return G__11146;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11082.call(this,p1);
case  2 :
return every_pred__11083.call(this,p1,p2);
case  3 :
return every_pred__11084.call(this,p1,p2,p3);
default:
return every_pred__11085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11085.cljs$lang$applyTo;
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
var some_fn__11328 = (function (p){
return (function() {
var sp1 = null;
var sp1__11334 = (function (){
return null;
});
var sp1__11335 = (function (x){
return p.call(null,x);
});
var sp1__11336 = (function (x,y){
var or__3548__auto____11194 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11194))
{return or__3548__auto____11194;
} else
{return p.call(null,y);
}
});
var sp1__11337 = (function (x,y,z){
var or__3548__auto____11208 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11208))
{return or__3548__auto____11208;
} else
{var or__3548__auto____11245 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11245))
{return or__3548__auto____11245;
} else
{return p.call(null,z);
}
}
});
var sp1__11338 = (function() { 
var G__11341__delegate = function (x,y,z,args){
var or__3548__auto____11249 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11249))
{return or__3548__auto____11249;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11341 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11341__delegate.call(this, x, y, z, args);
};
G__11341.cljs$lang$maxFixedArity = 3;
G__11341.cljs$lang$applyTo = (function (arglist__11343){
var x = cljs.core.first(arglist__11343);
var y = cljs.core.first(cljs.core.next(arglist__11343));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11343)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11343)));
return G__11341__delegate.call(this, x, y, z, args);
});
return G__11341;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11334.call(this);
case  1 :
return sp1__11335.call(this,x);
case  2 :
return sp1__11336.call(this,x,y);
case  3 :
return sp1__11337.call(this,x,y,z);
default:
return sp1__11338.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11338.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11329 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11350 = (function (){
return null;
});
var sp2__11351 = (function (x){
var or__3548__auto____11260 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11260))
{return or__3548__auto____11260;
} else
{return p2.call(null,x);
}
});
var sp2__11352 = (function (x,y){
var or__3548__auto____11261 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11261))
{return or__3548__auto____11261;
} else
{var or__3548__auto____11262 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11262))
{return or__3548__auto____11262;
} else
{var or__3548__auto____11263 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11263))
{return or__3548__auto____11263;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11353 = (function (x,y,z){
var or__3548__auto____11264 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11264))
{return or__3548__auto____11264;
} else
{var or__3548__auto____11269 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11269))
{return or__3548__auto____11269;
} else
{var or__3548__auto____11270 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11270))
{return or__3548__auto____11270;
} else
{var or__3548__auto____11277 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11277))
{return or__3548__auto____11277;
} else
{var or__3548__auto____11278 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11278))
{return or__3548__auto____11278;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11354 = (function() { 
var G__11361__delegate = function (x,y,z,args){
var or__3548__auto____11279 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11279))
{return or__3548__auto____11279;
} else
{return cljs.core.some.call(null,(function (p1__10954_SHARP_){
var or__3548__auto____11281 = p1.call(null,p1__10954_SHARP_);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{return p2.call(null,p1__10954_SHARP_);
}
}),args);
}
};
var G__11361 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11361__delegate.call(this, x, y, z, args);
};
G__11361.cljs$lang$maxFixedArity = 3;
G__11361.cljs$lang$applyTo = (function (arglist__11473){
var x = cljs.core.first(arglist__11473);
var y = cljs.core.first(cljs.core.next(arglist__11473));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11473)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11473)));
return G__11361__delegate.call(this, x, y, z, args);
});
return G__11361;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11350.call(this);
case  1 :
return sp2__11351.call(this,x);
case  2 :
return sp2__11352.call(this,x,y);
case  3 :
return sp2__11353.call(this,x,y,z);
default:
return sp2__11354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11354.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11330 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11476 = (function (){
return null;
});
var sp3__11477 = (function (x){
var or__3548__auto____11289 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11289))
{return or__3548__auto____11289;
} else
{var or__3548__auto____11290 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11290))
{return or__3548__auto____11290;
} else
{return p3.call(null,x);
}
}
});
var sp3__11478 = (function (x,y){
var or__3548__auto____11291 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11291))
{return or__3548__auto____11291;
} else
{var or__3548__auto____11298 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{var or__3548__auto____11299 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11299))
{return or__3548__auto____11299;
} else
{var or__3548__auto____11301 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11301))
{return or__3548__auto____11301;
} else
{var or__3548__auto____11302 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11302))
{return or__3548__auto____11302;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11479 = (function (x,y,z){
var or__3548__auto____11304 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11304))
{return or__3548__auto____11304;
} else
{var or__3548__auto____11305 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11305))
{return or__3548__auto____11305;
} else
{var or__3548__auto____11306 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11306))
{return or__3548__auto____11306;
} else
{var or__3548__auto____11307 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11307))
{return or__3548__auto____11307;
} else
{var or__3548__auto____11308 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11308))
{return or__3548__auto____11308;
} else
{var or__3548__auto____11309 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11309))
{return or__3548__auto____11309;
} else
{var or__3548__auto____11310 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11310))
{return or__3548__auto____11310;
} else
{var or__3548__auto____11312 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11312))
{return or__3548__auto____11312;
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
var sp3__11480 = (function() { 
var G__11527__delegate = function (x,y,z,args){
var or__3548__auto____11313 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11313))
{return or__3548__auto____11313;
} else
{return cljs.core.some.call(null,(function (p1__10956_SHARP_){
var or__3548__auto____11315 = p1.call(null,p1__10956_SHARP_);

if(cljs.core.truth_(or__3548__auto____11315))
{return or__3548__auto____11315;
} else
{var or__3548__auto____11316 = p2.call(null,p1__10956_SHARP_);

if(cljs.core.truth_(or__3548__auto____11316))
{return or__3548__auto____11316;
} else
{return p3.call(null,p1__10956_SHARP_);
}
}
}),args);
}
};
var G__11527 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11527__delegate.call(this, x, y, z, args);
};
G__11527.cljs$lang$maxFixedArity = 3;
G__11527.cljs$lang$applyTo = (function (arglist__11528){
var x = cljs.core.first(arglist__11528);
var y = cljs.core.first(cljs.core.next(arglist__11528));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11528)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11528)));
return G__11527__delegate.call(this, x, y, z, args);
});
return G__11527;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11476.call(this);
case  1 :
return sp3__11477.call(this,x);
case  2 :
return sp3__11478.call(this,x,y);
case  3 :
return sp3__11479.call(this,x,y,z);
default:
return sp3__11480.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11480.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11331 = (function() { 
var G__11542__delegate = function (p1,p2,p3,ps){
var ps__11317 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11544 = (function (){
return null;
});
var spn__11545 = (function (x){
return cljs.core.some.call(null,(function (p1__10963_SHARP_){
return p1__10963_SHARP_.call(null,x);
}),ps__11317);
});
var spn__11546 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10965_SHARP_){
var or__3548__auto____11324 = p1__10965_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11324))
{return or__3548__auto____11324;
} else
{return p1__10965_SHARP_.call(null,y);
}
}),ps__11317);
});
var spn__11547 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10966_SHARP_){
var or__3548__auto____11325 = p1__10966_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11326 = p1__10966_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{return p1__10966_SHARP_.call(null,z);
}
}
}),ps__11317);
});
var spn__11641 = (function() { 
var G__11652__delegate = function (x,y,z,args){
var or__3548__auto____11327 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{return cljs.core.some.call(null,(function (p1__10968_SHARP_){
return cljs.core.some.call(null,p1__10968_SHARP_,args);
}),ps__11317);
}
};
var G__11652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11652__delegate.call(this, x, y, z, args);
};
G__11652.cljs$lang$maxFixedArity = 3;
G__11652.cljs$lang$applyTo = (function (arglist__11659){
var x = cljs.core.first(arglist__11659);
var y = cljs.core.first(cljs.core.next(arglist__11659));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11659)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11659)));
return G__11652__delegate.call(this, x, y, z, args);
});
return G__11652;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11544.call(this);
case  1 :
return spn__11545.call(this,x);
case  2 :
return spn__11546.call(this,x,y);
case  3 :
return spn__11547.call(this,x,y,z);
default:
return spn__11641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11641.cljs$lang$applyTo;
return spn;
})()
};
var G__11542 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11542__delegate.call(this, p1, p2, p3, ps);
};
G__11542.cljs$lang$maxFixedArity = 3;
G__11542.cljs$lang$applyTo = (function (arglist__11660){
var p1 = cljs.core.first(arglist__11660);
var p2 = cljs.core.first(cljs.core.next(arglist__11660));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11660)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11660)));
return G__11542__delegate.call(this, p1, p2, p3, ps);
});
return G__11542;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11328.call(this,p1);
case  2 :
return some_fn__11329.call(this,p1,p2);
case  3 :
return some_fn__11330.call(this,p1,p2,p3);
default:
return some_fn__11331.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11331.cljs$lang$applyTo;
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
var map__11802 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11688 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11688))
{var s__11689 = temp__3698__auto____11688;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11689)),map.call(null,f,cljs.core.rest.call(null,s__11689)));
} else
{return null;
}
})));
});
var map__11804 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11691 = cljs.core.seq.call(null,c1);
var s2__11692 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11694 = s1__11691;

if(cljs.core.truth_(and__3546__auto____11694))
{return s2__11692;
} else
{return and__3546__auto____11694;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11691),cljs.core.first.call(null,s2__11692)),map.call(null,f,cljs.core.rest.call(null,s1__11691),cljs.core.rest.call(null,s2__11692)));
} else
{return null;
}
})));
});
var map__11807 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11698 = cljs.core.seq.call(null,c1);
var s2__11699 = cljs.core.seq.call(null,c2);
var s3__11700 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11703 = s1__11698;

if(cljs.core.truth_(and__3546__auto____11703))
{var and__3546__auto____11704 = s2__11699;

if(cljs.core.truth_(and__3546__auto____11704))
{return s3__11700;
} else
{return and__3546__auto____11704;
}
} else
{return and__3546__auto____11703;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11698),cljs.core.first.call(null,s2__11699),cljs.core.first.call(null,s3__11700)),map.call(null,f,cljs.core.rest.call(null,s1__11698),cljs.core.rest.call(null,s2__11699),cljs.core.rest.call(null,s3__11700)));
} else
{return null;
}
})));
});
var map__11808 = (function() { 
var G__11852__delegate = function (f,c1,c2,c3,colls){
var step__11714 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11710 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11710)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11710),step.call(null,map.call(null,cljs.core.rest,ss__11710)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11185_SHARP_){
return cljs.core.apply.call(null,f,p1__11185_SHARP_);
}),step__11714.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11852 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11852__delegate.call(this, f, c1, c2, c3, colls);
};
G__11852.cljs$lang$maxFixedArity = 4;
G__11852.cljs$lang$applyTo = (function (arglist__11860){
var f = cljs.core.first(arglist__11860);
var c1 = cljs.core.first(cljs.core.next(arglist__11860));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11860)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11860))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11860))));
return G__11852__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11852;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11802.call(this,f,c1);
case  3 :
return map__11804.call(this,f,c1,c2);
case  4 :
return map__11807.call(this,f,c1,c2,c3);
default:
return map__11808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11808.cljs$lang$applyTo;
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
{var temp__3698__auto____11865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11865))
{var s__11866 = temp__3698__auto____11865;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11866),take.call(null,(n - 1),cljs.core.rest.call(null,s__11866)));
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
var step__11881 = (function (n,coll){
while(true){
var s__11872 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11877 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11877))
{return s__11872;
} else
{return and__3546__auto____11877;
}
})()))
{{
var G__11883 = (n - 1);
var G__11884 = cljs.core.rest.call(null,s__11872);
n = G__11883;
coll = G__11884;
continue;
}
} else
{return s__11872;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11881.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11887 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11888 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11887.call(this,n);
case  2 :
return drop_last__11888.call(this,n,s);
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
var s__11892 = cljs.core.seq.call(null,coll);
var lead__11894 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11894))
{{
var G__11900 = cljs.core.next.call(null,s__11892);
var G__11901 = cljs.core.next.call(null,lead__11894);
s__11892 = G__11900;
lead__11894 = G__11901;
continue;
}
} else
{return s__11892;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11909 = (function (pred,coll){
while(true){
var s__11903 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11904 = s__11903;

if(cljs.core.truth_(and__3546__auto____11904))
{return pred.call(null,cljs.core.first.call(null,s__11903));
} else
{return and__3546__auto____11904;
}
})()))
{{
var G__11911 = pred;
var G__11912 = cljs.core.rest.call(null,s__11903);
pred = G__11911;
coll = G__11912;
continue;
}
} else
{return s__11903;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11909.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11918 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11918))
{var s__11919 = temp__3698__auto____11918;

return cljs.core.concat.call(null,s__11919,cycle.call(null,s__11919));
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
var repeat__11927 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11928 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11927.call(this,n);
case  2 :
return repeat__11928.call(this,n,x);
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
var repeatedly__11935 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11936 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11935.call(this,n);
case  2 :
return repeatedly__11936.call(this,n,f);
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
var interleave__11957 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11946 = cljs.core.seq.call(null,c1);
var s2__11947 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11952 = s1__11946;

if(cljs.core.truth_(and__3546__auto____11952))
{return s2__11947;
} else
{return and__3546__auto____11952;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11946),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11947),interleave.call(null,cljs.core.rest.call(null,s1__11946),cljs.core.rest.call(null,s2__11947))));
} else
{return null;
}
})));
});
var interleave__11958 = (function() { 
var G__11960__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11956 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11956)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11956),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11956)));
} else
{return null;
}
})));
};
var G__11960 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11960__delegate.call(this, c1, c2, colls);
};
G__11960.cljs$lang$maxFixedArity = 2;
G__11960.cljs$lang$applyTo = (function (arglist__11961){
var c1 = cljs.core.first(arglist__11961);
var c2 = cljs.core.first(cljs.core.next(arglist__11961));
var colls = cljs.core.rest(cljs.core.next(arglist__11961));
return G__11960__delegate.call(this, c1, c2, colls);
});
return G__11960;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11957.call(this,c1,c2);
default:
return interleave__11958.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11958.cljs$lang$applyTo;
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
var mapcat__11967 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11968 = (function() { 
var G__11970__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11970 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11970__delegate.call(this, f, coll, colls);
};
G__11970.cljs$lang$maxFixedArity = 2;
G__11970.cljs$lang$applyTo = (function (arglist__11971){
var f = cljs.core.first(arglist__11971);
var coll = cljs.core.first(cljs.core.next(arglist__11971));
var colls = cljs.core.rest(cljs.core.next(arglist__11971));
return G__11970__delegate.call(this, f, coll, colls);
});
return G__11970;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11967.call(this,f,coll);
default:
return mapcat__11968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11968.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11975 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11975))
{var s__11976 = temp__3698__auto____11975;

var f__11977 = cljs.core.first.call(null,s__11976);
var r__11978 = cljs.core.rest.call(null,s__11976);

if(cljs.core.truth_(pred.call(null,f__11977)))
{return cljs.core.cons.call(null,f__11977,filter.call(null,pred,r__11978));
} else
{return filter.call(null,pred,r__11978);
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
var walk__11988 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11988.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11987_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11987_SHARP_));
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
var partition__12043 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12044 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12012))
{var s__12013 = temp__3698__auto____12012;

var p__12014 = cljs.core.take.call(null,n,s__12013);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12014))))
{return cljs.core.cons.call(null,p__12014,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12013)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12045 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12017))
{var s__12039 = temp__3698__auto____12017;

var p__12041 = cljs.core.take.call(null,n,s__12039);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12041))))
{return cljs.core.cons.call(null,p__12041,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12039)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12041,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12043.call(this,n,step);
case  3 :
return partition__12044.call(this,n,step,pad);
case  4 :
return partition__12045.call(this,n,step,pad,coll);
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
var get_in__12065 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12066 = (function (m,ks,not_found){
var sentinel__12056 = cljs.core.lookup_sentinel;
var m__12057 = m;
var ks__12058 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12058))
{var m__12059 = cljs.core.get.call(null,m__12057,cljs.core.first.call(null,ks__12058),sentinel__12056);

if(cljs.core.truth_((sentinel__12056 === m__12059)))
{return not_found;
} else
{{
var G__12071 = sentinel__12056;
var G__12072 = m__12059;
var G__12073 = cljs.core.next.call(null,ks__12058);
sentinel__12056 = G__12071;
m__12057 = G__12072;
ks__12058 = G__12073;
continue;
}
}
} else
{return m__12057;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12065.call(this,m,ks);
case  3 :
return get_in__12066.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12078,v){
var vec__12080__12082 = p__12078;
var k__12083 = cljs.core.nth.call(null,vec__12080__12082,0,null);
var ks__12084 = cljs.core.nthnext.call(null,vec__12080__12082,1);

if(cljs.core.truth_(ks__12084))
{return cljs.core.assoc.call(null,m,k__12083,assoc_in.call(null,cljs.core.get.call(null,m,k__12083),ks__12084,v));
} else
{return cljs.core.assoc.call(null,m,k__12083,v);
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
var update_in__delegate = function (m,p__12091,f,args){
var vec__12093__12094 = p__12091;
var k__12095 = cljs.core.nth.call(null,vec__12093__12094,0,null);
var ks__12096 = cljs.core.nthnext.call(null,vec__12093__12094,1);

if(cljs.core.truth_(ks__12096))
{return cljs.core.assoc.call(null,m,k__12095,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12095),ks__12096,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12095,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12095),args));
}
};
var update_in = function (m,p__12091,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12091, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12101){
var m = cljs.core.first(arglist__12101);
var p__12091 = cljs.core.first(cljs.core.next(arglist__12101));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12101)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12101)));
return update_in__delegate.call(this, m, p__12091, f, args);
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
var this__12121 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12190 = null;
var G__12190__12191 = (function (coll,k){
var this__12123 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12190__12192 = (function (coll,k,not_found){
var this__12124 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12190 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12190__12191.call(this,coll,k);
case  3 :
return G__12190__12192.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12190;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12125 = this;
var new_array__12127 = cljs.core.aclone.call(null,this__12125.array);

(new_array__12127[k] = v);
return (new cljs.core.Vector(this__12125.meta,new_array__12127));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12194 = null;
var G__12194__12199 = (function (coll,k){
var this__12130 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12194__12200 = (function (coll,k,not_found){
var this__12131 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12194 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12194__12199.call(this,coll,k);
case  3 :
return G__12194__12200.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12194;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12136 = this;
var new_array__12138 = cljs.core.aclone.call(null,this__12136.array);

new_array__12138.push(o);
return (new cljs.core.Vector(this__12136.meta,new_array__12138));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12202 = null;
var G__12202__12203 = (function (v,f){
var this__12140 = this;
return cljs.core.ci_reduce.call(null,this__12140.array,f);
});
var G__12202__12204 = (function (v,f,start){
var this__12141 = this;
return cljs.core.ci_reduce.call(null,this__12141.array,f,start);
});
G__12202 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12202__12203.call(this,v,f);
case  3 :
return G__12202__12204.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12202;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12145 = this;
if(cljs.core.truth_((this__12145.array.length > 0)))
{var vector_seq__12149 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12145.array.length)))
{return cljs.core.cons.call(null,(this__12145.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12149.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12151 = this;
return this__12151.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12154 = this;
var count__12158 = this__12154.array.length;

if(cljs.core.truth_((count__12158 > 0)))
{return (this__12154.array[(count__12158 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12159 = this;
if(cljs.core.truth_((this__12159.array.length > 0)))
{var new_array__12160 = cljs.core.aclone.call(null,this__12159.array);

new_array__12160.pop();
return (new cljs.core.Vector(this__12159.meta,new_array__12160));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12164 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12166 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12167 = this;
return (new cljs.core.Vector(meta,this__12167.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12171 = this;
return this__12171.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12206 = null;
var G__12206__12207 = (function (coll,n){
var this__12172 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12175 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12175))
{return (n < this__12172.array.length);
} else
{return and__3546__auto____12175;
}
})()))
{return (this__12172.array[n]);
} else
{return null;
}
});
var G__12206__12208 = (function (coll,n,not_found){
var this__12182 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12183 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12183))
{return (n < this__12182.array.length);
} else
{return and__3546__auto____12183;
}
})()))
{return (this__12182.array[n]);
} else
{return not_found;
}
});
G__12206 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12206__12207.call(this,coll,n);
case  3 :
return G__12206__12208.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12206;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12188 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12188.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12232){
var args = cljs.core.seq( arglist__12232 );;
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
var this__12249 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12315 = null;
var G__12315__12317 = (function (coll,k){
var this__12253 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12315__12318 = (function (coll,k,not_found){
var this__12258 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12315 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12315__12317.call(this,coll,k);
case  3 :
return G__12315__12318.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12315;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12260 = this;
var v_pos__12262 = (this__12260.start + key);

return (new cljs.core.Subvec(this__12260.meta,cljs.core._assoc.call(null,this__12260.v,v_pos__12262,val),this__12260.start,((this__12260.end > (v_pos__12262 + 1)) ? this__12260.end : (v_pos__12262 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12324 = null;
var G__12324__12325 = (function (coll,k){
var this__12265 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12324__12326 = (function (coll,k,not_found){
var this__12267 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12324 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12324__12325.call(this,coll,k);
case  3 :
return G__12324__12326.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12324;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12268 = this;
return (new cljs.core.Subvec(this__12268.meta,cljs.core._assoc_n.call(null,this__12268.v,this__12268.end,o),this__12268.start,(this__12268.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12426 = null;
var G__12426__12427 = (function (coll,f){
var this__12269 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12426__12428 = (function (coll,f,start){
var this__12270 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12426 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12426__12427.call(this,coll,f);
case  3 :
return G__12426__12428.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12426;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12275 = this;
var subvec_seq__12277 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12275.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12275.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12277.call(null,this__12275.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12278 = this;
return (this__12278.end - this__12278.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12301 = this;
return cljs.core._nth.call(null,this__12301.v,(this__12301.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12302 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12302.start,this__12302.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12302.meta,this__12302.v,this__12302.start,(this__12302.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12304 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12306 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12310 = this;
return (new cljs.core.Subvec(meta,this__12310.v,this__12310.start,this__12310.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12311 = this;
return this__12311.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12436 = null;
var G__12436__12437 = (function (coll,n){
var this__12312 = this;
return cljs.core._nth.call(null,this__12312.v,(this__12312.start + n));
});
var G__12436__12438 = (function (coll,n,not_found){
var this__12313 = this;
return cljs.core._nth.call(null,this__12313.v,(this__12313.start + n),not_found);
});
G__12436 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12436__12437.call(this,coll,n);
case  3 :
return G__12436__12438.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12436;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12314 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12314.meta);
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
var subvec__12467 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12468 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12467.call(this,v,start);
case  3 :
return subvec__12468.call(this,v,start,end);
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
var this__12475 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12476 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12477 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12479 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12479.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12480 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12522 = this;
return cljs.core._first.call(null,this__12522.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12524 = this;
var temp__3695__auto____12526 = cljs.core.next.call(null,this__12524.front);

if(cljs.core.truth_(temp__3695__auto____12526))
{var f1__12527 = temp__3695__auto____12526;

return (new cljs.core.PersistentQueueSeq(this__12524.meta,f1__12527,this__12524.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12524.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12524.meta,this__12524.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12529 = this;
return this__12529.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12530 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12530.front,this__12530.rear));
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
var this__12550 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12551 = this;
if(cljs.core.truth_(this__12551.front))
{return (new cljs.core.PersistentQueue(this__12551.meta,(this__12551.count + 1),this__12551.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12552 = this__12551.rear;

if(cljs.core.truth_(or__3548__auto____12552))
{return or__3548__auto____12552;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12551.meta,(this__12551.count + 1),cljs.core.conj.call(null,this__12551.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12553 = this;
var rear__12555 = cljs.core.seq.call(null,this__12553.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12559 = this__12553.front;

if(cljs.core.truth_(or__3548__auto____12559))
{return or__3548__auto____12559;
} else
{return rear__12555;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12553.front,cljs.core.seq.call(null,rear__12555)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12560 = this;
return this__12560.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12561 = this;
return cljs.core._first.call(null,this__12561.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12562 = this;
if(cljs.core.truth_(this__12562.front))
{var temp__3695__auto____12563 = cljs.core.next.call(null,this__12562.front);

if(cljs.core.truth_(temp__3695__auto____12563))
{var f1__12564 = temp__3695__auto____12563;

return (new cljs.core.PersistentQueue(this__12562.meta,(this__12562.count - 1),f1__12564,this__12562.rear));
} else
{return (new cljs.core.PersistentQueue(this__12562.meta,(this__12562.count - 1),cljs.core.seq.call(null,this__12562.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12565 = this;
return cljs.core.first.call(null,this__12565.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12566 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12570 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12571 = this;
return (new cljs.core.PersistentQueue(meta,this__12571.count,this__12571.front,this__12571.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12572 = this;
return this__12572.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12573 = this;
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
var this__12590 = this;
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
var len__12605 = array.length;

var i__12606 = 0;

while(true){
if(cljs.core.truth_((i__12606 < len__12605)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12606]))))
{return i__12606;
} else
{{
var G__12607 = (i__12606 + incr);
i__12606 = G__12607;
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
var obj_map_contains_key_QMARK___12611 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12612 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12609 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12609))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12609;
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
return obj_map_contains_key_QMARK___12611.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12612.call(this,k,strobj,true_val,false_val);
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
var this__12630 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12762 = null;
var G__12762__12763 = (function (coll,k){
var this__12631 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12762__12764 = (function (coll,k,not_found){
var this__12632 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12632.strobj,(this__12632.strobj[k]),not_found);
});
G__12762 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12762__12763.call(this,coll,k);
case  3 :
return G__12762__12764.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12762;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12633 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12635 = goog.object.clone.call(null,this__12633.strobj);
var overwrite_QMARK___12637 = new_strobj__12635.hasOwnProperty(k);

(new_strobj__12635[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12637))
{return (new cljs.core.ObjMap(this__12633.meta,this__12633.keys,new_strobj__12635));
} else
{var new_keys__12639 = cljs.core.aclone.call(null,this__12633.keys);

new_keys__12639.push(k);
return (new cljs.core.ObjMap(this__12633.meta,new_keys__12639,new_strobj__12635));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12633.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12642 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12642.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12777 = null;
var G__12777__12778 = (function (coll,k){
var this__12643 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12777__12779 = (function (coll,k,not_found){
var this__12645 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12777 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12777__12778.call(this,coll,k);
case  3 :
return G__12777__12779.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12777;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12647 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12649 = this;
if(cljs.core.truth_((this__12649.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12619_SHARP_){
return cljs.core.vector.call(null,p1__12619_SHARP_,(this__12649.strobj[p1__12619_SHARP_]));
}),this__12649.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12653 = this;
return this__12653.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12654 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12671 = this;
return (new cljs.core.ObjMap(meta,this__12671.keys,this__12671.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12675 = this;
return this__12675.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12679 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12679.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12683 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12685 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12685))
{return this__12683.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12685;
}
})()))
{var new_keys__12687 = cljs.core.aclone.call(null,this__12683.keys);
var new_strobj__12690 = goog.object.clone.call(null,this__12683.strobj);

new_keys__12687.splice(cljs.core.scan_array.call(null,1,k,new_keys__12687),1);
cljs.core.js_delete.call(null,new_strobj__12690,k);
return (new cljs.core.ObjMap(this__12683.meta,new_keys__12687,new_strobj__12690));
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
var this__12828 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12990 = null;
var G__12990__12992 = (function (coll,k){
var this__12830 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12990__12993 = (function (coll,k,not_found){
var this__12832 = this;
var bucket__12834 = (this__12832.hashobj[cljs.core.hash.call(null,k)]);
var i__12837 = (cljs.core.truth_(bucket__12834)?cljs.core.scan_array.call(null,2,k,bucket__12834):null);

if(cljs.core.truth_(i__12837))
{return (bucket__12834[(i__12837 + 1)]);
} else
{return not_found;
}
});
G__12990 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12990__12992.call(this,coll,k);
case  3 :
return G__12990__12993.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12990;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12841 = this;
var h__12842 = cljs.core.hash.call(null,k);
var bucket__12844 = (this__12841.hashobj[h__12842]);

if(cljs.core.truth_(bucket__12844))
{var new_bucket__12847 = cljs.core.aclone.call(null,bucket__12844);
var new_hashobj__12848 = goog.object.clone.call(null,this__12841.hashobj);

(new_hashobj__12848[h__12842] = new_bucket__12847);
var temp__3695__auto____12850 = cljs.core.scan_array.call(null,2,k,new_bucket__12847);

if(cljs.core.truth_(temp__3695__auto____12850))
{var i__12853 = temp__3695__auto____12850;

(new_bucket__12847[(i__12853 + 1)] = v);
return (new cljs.core.HashMap(this__12841.meta,this__12841.count,new_hashobj__12848));
} else
{new_bucket__12847.push(k,v);
return (new cljs.core.HashMap(this__12841.meta,(this__12841.count + 1),new_hashobj__12848));
}
} else
{var new_hashobj__12858 = goog.object.clone.call(null,this__12841.hashobj);

(new_hashobj__12858[h__12842] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12841.meta,(this__12841.count + 1),new_hashobj__12858));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12861 = this;
var bucket__12863 = (this__12861.hashobj[cljs.core.hash.call(null,k)]);
var i__12865 = (cljs.core.truth_(bucket__12863)?cljs.core.scan_array.call(null,2,k,bucket__12863):null);

if(cljs.core.truth_(i__12865))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13020 = null;
var G__13020__13021 = (function (coll,k){
var this__12868 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13020__13022 = (function (coll,k,not_found){
var this__12869 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13020 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13020__13021.call(this,coll,k);
case  3 :
return G__13020__13022.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13020;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12873 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12876 = this;
if(cljs.core.truth_((this__12876.count > 0)))
{var hashes__12896 = cljs.core.js_keys.call(null,this__12876.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12798_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12876.hashobj[p1__12798_SHARP_])));
}),hashes__12896);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12897 = this;
return this__12897.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12899 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12905 = this;
return (new cljs.core.HashMap(meta,this__12905.count,this__12905.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12968 = this;
return this__12968.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12971 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12971.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12975 = this;
var h__12978 = cljs.core.hash.call(null,k);
var bucket__12979 = (this__12975.hashobj[h__12978]);
var i__12980 = (cljs.core.truth_(bucket__12979)?cljs.core.scan_array.call(null,2,k,bucket__12979):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12980)))
{return coll;
} else
{var new_hashobj__12982 = goog.object.clone.call(null,this__12975.hashobj);

if(cljs.core.truth_((3 > bucket__12979.length)))
{cljs.core.js_delete.call(null,new_hashobj__12982,h__12978);
} else
{var new_bucket__12984 = cljs.core.aclone.call(null,bucket__12979);

new_bucket__12984.splice(i__12980,2);
(new_hashobj__12982[h__12978] = new_bucket__12984);
}
return (new cljs.core.HashMap(this__12975.meta,(this__12975.count - 1),new_hashobj__12982));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13054 = ks.length;

var i__13055 = 0;
var out__13056 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13055 < len__13054)))
{{
var G__13057 = (i__13055 + 1);
var G__13058 = cljs.core.assoc.call(null,out__13056,(ks[i__13055]),(vs[i__13055]));
i__13055 = G__13057;
out__13056 = G__13058;
continue;
}
} else
{return out__13056;
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
var in$__13059 = cljs.core.seq.call(null,keyvals);
var out__13060 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13059))
{{
var G__13066 = cljs.core.nnext.call(null,in$__13059);
var G__13067 = cljs.core.assoc.call(null,out__13060,cljs.core.first.call(null,in$__13059),cljs.core.second.call(null,in$__13059));
in$__13059 = G__13066;
out__13060 = G__13067;
continue;
}
} else
{return out__13060;
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
hash_map.cljs$lang$applyTo = (function (arglist__13069){
var keyvals = cljs.core.seq( arglist__13069 );;
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
{return cljs.core.reduce.call(null,(function (p1__13073_SHARP_,p2__13075_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13080 = p1__13073_SHARP_;

if(cljs.core.truth_(or__3548__auto____13080))
{return or__3548__auto____13080;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13075_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13110){
var maps = cljs.core.seq( arglist__13110 );;
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
{var merge_entry__13126 = (function (m,e){
var k__13119 = cljs.core.first.call(null,e);
var v__13123 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13119)))
{return cljs.core.assoc.call(null,m,k__13119,f.call(null,cljs.core.get.call(null,m,k__13119),v__13123));
} else
{return cljs.core.assoc.call(null,m,k__13119,v__13123);
}
});
var merge2__13132 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13126,(function (){var or__3548__auto____13129 = m1;

if(cljs.core.truth_(or__3548__auto____13129))
{return or__3548__auto____13129;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13132,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13141){
var f = cljs.core.first(arglist__13141);
var maps = cljs.core.rest(arglist__13141);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13144 = cljs.core.ObjMap.fromObject([],{});
var keys__13145 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13145))
{var key__13146 = cljs.core.first.call(null,keys__13145);
var entry__13147 = cljs.core.get.call(null,map,key__13146,"﷐'user/not-found");

{
var G__13153 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13147,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13144,key__13146,entry__13147):ret__13144);
var G__13154 = cljs.core.next.call(null,keys__13145);
ret__13144 = G__13153;
keys__13145 = G__13154;
continue;
}
} else
{return ret__13144;
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
var this__13155 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13191 = null;
var G__13191__13192 = (function (coll,v){
var this__13156 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13191__13193 = (function (coll,v,not_found){
var this__13158 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13158.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13191 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13191__13192.call(this,coll,v);
case  3 :
return G__13191__13193.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13191;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13202 = null;
var G__13202__13203 = (function (coll,k){
var this__13161 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13202__13204 = (function (coll,k,not_found){
var this__13162 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13202 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13202__13203.call(this,coll,k);
case  3 :
return G__13202__13204.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13202;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13164 = this;
return (new cljs.core.Set(this__13164.meta,cljs.core.assoc.call(null,this__13164.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13166 = this;
return cljs.core.keys.call(null,this__13166.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13169 = this;
return (new cljs.core.Set(this__13169.meta,cljs.core.dissoc.call(null,this__13169.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13170 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13173 = this;
var and__3546__auto____13176 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13176))
{var and__3546__auto____13178 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13178))
{return cljs.core.every_QMARK_.call(null,(function (p1__13142_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13142_SHARP_);
}),other);
} else
{return and__3546__auto____13178;
}
} else
{return and__3546__auto____13176;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13181 = this;
return (new cljs.core.Set(meta,this__13181.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13182 = this;
return this__13182.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13185 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13185.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13241 = cljs.core.seq.call(null,coll);
var out__13242 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13241))))
{{
var G__13246 = cljs.core.rest.call(null,in$__13241);
var G__13247 = cljs.core.conj.call(null,out__13242,cljs.core.first.call(null,in$__13241));
in$__13241 = G__13246;
out__13242 = G__13247;
continue;
}
} else
{return out__13242;
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
{var n__13249 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13254 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13254))
{var e__13256 = temp__3695__auto____13254;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13256));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13249,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13240_SHARP_){
var temp__3695__auto____13257 = cljs.core.find.call(null,smap,p1__13240_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13257))
{var e__13258 = temp__3695__auto____13257;

return cljs.core.second.call(null,e__13258);
} else
{return p1__13240_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13287 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13274,seen){
while(true){
var vec__13275__13276 = p__13274;
var f__13277 = cljs.core.nth.call(null,vec__13275__13276,0,null);
var xs__13278 = vec__13275__13276;

var temp__3698__auto____13279 = cljs.core.seq.call(null,xs__13278);

if(cljs.core.truth_(temp__3698__auto____13279))
{var s__13283 = temp__3698__auto____13279;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13277)))
{{
var G__13295 = cljs.core.rest.call(null,s__13283);
var G__13296 = seen;
p__13274 = G__13295;
seen = G__13296;
continue;
}
} else
{return cljs.core.cons.call(null,f__13277,step.call(null,cljs.core.rest.call(null,s__13283),cljs.core.conj.call(null,seen,f__13277)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13287.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13304 = cljs.core.Vector.fromArray([]);
var s__13305 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13305)))
{{
var G__13308 = cljs.core.conj.call(null,ret__13304,cljs.core.first.call(null,s__13305));
var G__13309 = cljs.core.next.call(null,s__13305);
ret__13304 = G__13308;
s__13305 = G__13309;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13304);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13314 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13314))
{return or__3548__auto____13314;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13316 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13316 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13316 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13331 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13331))
{return or__3548__auto____13331;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13332 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13332 > -1)))
{return cljs.core.subs.call(null,x,2,i__13332);
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
var map__13356 = cljs.core.ObjMap.fromObject([],{});
var ks__13357 = cljs.core.seq.call(null,keys);
var vs__13358 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13360 = ks__13357;

if(cljs.core.truth_(and__3546__auto____13360))
{return vs__13358;
} else
{return and__3546__auto____13360;
}
})()))
{{
var G__13363 = cljs.core.assoc.call(null,map__13356,cljs.core.first.call(null,ks__13357),cljs.core.first.call(null,vs__13358));
var G__13364 = cljs.core.next.call(null,ks__13357);
var G__13365 = cljs.core.next.call(null,vs__13358);
map__13356 = G__13363;
ks__13357 = G__13364;
vs__13358 = G__13365;
continue;
}
} else
{return map__13356;
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
var max_key__13375 = (function (k,x){
return x;
});
var max_key__13376 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13377 = (function() { 
var G__13379__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13351_SHARP_,p2__13353_SHARP_){
return max_key.call(null,k,p1__13351_SHARP_,p2__13353_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13379 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13379__delegate.call(this, k, x, y, more);
};
G__13379.cljs$lang$maxFixedArity = 3;
G__13379.cljs$lang$applyTo = (function (arglist__13382){
var k = cljs.core.first(arglist__13382);
var x = cljs.core.first(cljs.core.next(arglist__13382));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13382)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13382)));
return G__13379__delegate.call(this, k, x, y, more);
});
return G__13379;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13375.call(this,k,x);
case  3 :
return max_key__13376.call(this,k,x,y);
default:
return max_key__13377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13377.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13392 = (function (k,x){
return x;
});
var min_key__13394 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13395 = (function() { 
var G__13397__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13368_SHARP_,p2__13369_SHARP_){
return min_key.call(null,k,p1__13368_SHARP_,p2__13369_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13397 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13397__delegate.call(this, k, x, y, more);
};
G__13397.cljs$lang$maxFixedArity = 3;
G__13397.cljs$lang$applyTo = (function (arglist__13399){
var k = cljs.core.first(arglist__13399);
var x = cljs.core.first(cljs.core.next(arglist__13399));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13399)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13399)));
return G__13397__delegate.call(this, k, x, y, more);
});
return G__13397;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13392.call(this,k,x);
case  3 :
return min_key__13394.call(this,k,x,y);
default:
return min_key__13395.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13395.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13410 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13411 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13404 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13404))
{var s__13407 = temp__3698__auto____13404;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13407),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13407)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13410.call(this,n,step);
case  3 :
return partition_all__13411.call(this,n,step,coll);
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
var this__13454 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13508 = null;
var G__13508__13510 = (function (rng,f){
var this__13459 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13508__13511 = (function (rng,f,s){
var this__13461 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13508 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13508__13510.call(this,rng,f);
case  3 :
return G__13508__13511.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13508;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13463 = this;
var comp__13466 = (cljs.core.truth_((this__13463.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13466.call(null,this__13463.start,this__13463.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13469 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13469.end - this__13469.start) / this__13469.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13474 = this;
return this__13474.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13475 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13475.meta,(this__13475.start + this__13475.step),this__13475.end,this__13475.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13478 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13481 = this;
return (new cljs.core.Range(meta,this__13481.start,this__13481.end,this__13481.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13486 = this;
return this__13486.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13560 = null;
var G__13560__13561 = (function (rng,n){
var this__13489 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13489.start + (n * this__13489.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13493 = (this__13489.start > this__13489.end);

if(cljs.core.truth_(and__3546__auto____13493))
{return cljs.core._EQ_.call(null,this__13489.step,0);
} else
{return and__3546__auto____13493;
}
})()))
{return this__13489.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13560__13562 = (function (rng,n,not_found){
var this__13495 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13495.start + (n * this__13495.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13500 = (this__13495.start > this__13495.end);

if(cljs.core.truth_(and__3546__auto____13500))
{return cljs.core._EQ_.call(null,this__13495.step,0);
} else
{return and__3546__auto____13500;
}
})()))
{return this__13495.start;
} else
{return not_found;
}
}
});
G__13560 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13560__13561.call(this,rng,n);
case  3 :
return G__13560__13562.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13560;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13503 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13503.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13586 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13587 = (function (end){
return range.call(null,0,end,1);
});
var range__13588 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13589 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13586.call(this);
case  1 :
return range__13587.call(this,start);
case  2 :
return range__13588.call(this,start,end);
case  3 :
return range__13589.call(this,start,end,step);
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
var temp__3698__auto____13599 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13599))
{var s__13601 = temp__3698__auto____13599;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13601),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13601)));
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
var temp__3698__auto____13625 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13625))
{var s__13628 = temp__3698__auto____13625;

var fst__13629 = cljs.core.first.call(null,s__13628);
var fv__13630 = f.call(null,fst__13629);
var run__13633 = cljs.core.cons.call(null,fst__13629,cljs.core.take_while.call(null,(function (p1__13607_SHARP_){
return cljs.core._EQ_.call(null,fv__13630,f.call(null,p1__13607_SHARP_));
}),cljs.core.next.call(null,s__13628)));

return cljs.core.cons.call(null,run__13633,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13633),s__13628))));
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
var reductions__13742 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13670 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13670))
{var s__13671 = temp__3695__auto____13670;

return reductions.call(null,f,cljs.core.first.call(null,s__13671),cljs.core.rest.call(null,s__13671));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13743 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13672 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13672))
{var s__13674 = temp__3698__auto____13672;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13674)),cljs.core.rest.call(null,s__13674));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13742.call(this,f,init);
case  3 :
return reductions__13743.call(this,f,init,coll);
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
var juxt__13782 = (function (f){
return (function() {
var G__13788 = null;
var G__13788__13789 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13788__13790 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13788__13791 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13788__13792 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13788__13793 = (function() { 
var G__13799__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13799 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13799__delegate.call(this, x, y, z, args);
};
G__13799.cljs$lang$maxFixedArity = 3;
G__13799.cljs$lang$applyTo = (function (arglist__13802){
var x = cljs.core.first(arglist__13802);
var y = cljs.core.first(cljs.core.next(arglist__13802));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13802)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13802)));
return G__13799__delegate.call(this, x, y, z, args);
});
return G__13799;
})()
;
G__13788 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13788__13789.call(this);
case  1 :
return G__13788__13790.call(this,x);
case  2 :
return G__13788__13791.call(this,x,y);
case  3 :
return G__13788__13792.call(this,x,y,z);
default:
return G__13788__13793.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13788.cljs$lang$maxFixedArity = 3;
G__13788.cljs$lang$applyTo = G__13788__13793.cljs$lang$applyTo;
return G__13788;
})()
});
var juxt__13783 = (function (f,g){
return (function() {
var G__13807 = null;
var G__13807__13808 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13807__13809 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13807__13810 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13807__13811 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13807__13812 = (function() { 
var G__13820__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13820 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13820__delegate.call(this, x, y, z, args);
};
G__13820.cljs$lang$maxFixedArity = 3;
G__13820.cljs$lang$applyTo = (function (arglist__13821){
var x = cljs.core.first(arglist__13821);
var y = cljs.core.first(cljs.core.next(arglist__13821));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13821)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13821)));
return G__13820__delegate.call(this, x, y, z, args);
});
return G__13820;
})()
;
G__13807 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13807__13808.call(this);
case  1 :
return G__13807__13809.call(this,x);
case  2 :
return G__13807__13810.call(this,x,y);
case  3 :
return G__13807__13811.call(this,x,y,z);
default:
return G__13807__13812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13807.cljs$lang$maxFixedArity = 3;
G__13807.cljs$lang$applyTo = G__13807__13812.cljs$lang$applyTo;
return G__13807;
})()
});
var juxt__13785 = (function (f,g,h){
return (function() {
var G__13826 = null;
var G__13826__13827 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13826__13828 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13826__13829 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13826__13830 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13826__13831 = (function() { 
var G__13835__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13835 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13835__delegate.call(this, x, y, z, args);
};
G__13835.cljs$lang$maxFixedArity = 3;
G__13835.cljs$lang$applyTo = (function (arglist__13836){
var x = cljs.core.first(arglist__13836);
var y = cljs.core.first(cljs.core.next(arglist__13836));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13836)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13836)));
return G__13835__delegate.call(this, x, y, z, args);
});
return G__13835;
})()
;
G__13826 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13826__13827.call(this);
case  1 :
return G__13826__13828.call(this,x);
case  2 :
return G__13826__13829.call(this,x,y);
case  3 :
return G__13826__13830.call(this,x,y,z);
default:
return G__13826__13831.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13826.cljs$lang$maxFixedArity = 3;
G__13826.cljs$lang$applyTo = G__13826__13831.cljs$lang$applyTo;
return G__13826;
})()
});
var juxt__13786 = (function() { 
var G__13841__delegate = function (f,g,h,fs){
var fs__13768 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13842 = null;
var G__13842__13843 = (function (){
return cljs.core.reduce.call(null,(function (p1__13659_SHARP_,p2__13660_SHARP_){
return cljs.core.conj.call(null,p1__13659_SHARP_,p2__13660_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13768);
});
var G__13842__13844 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13661_SHARP_,p2__13662_SHARP_){
return cljs.core.conj.call(null,p1__13661_SHARP_,p2__13662_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13768);
});
var G__13842__13845 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13664_SHARP_,p2__13665_SHARP_){
return cljs.core.conj.call(null,p1__13664_SHARP_,p2__13665_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13768);
});
var G__13842__13846 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13666_SHARP_,p2__13667_SHARP_){
return cljs.core.conj.call(null,p1__13666_SHARP_,p2__13667_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13768);
});
var G__13842__13847 = (function() { 
var G__13850__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13668_SHARP_,p2__13669_SHARP_){
return cljs.core.conj.call(null,p1__13668_SHARP_,cljs.core.apply.call(null,p2__13669_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13768);
};
var G__13850 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13850__delegate.call(this, x, y, z, args);
};
G__13850.cljs$lang$maxFixedArity = 3;
G__13850.cljs$lang$applyTo = (function (arglist__13851){
var x = cljs.core.first(arglist__13851);
var y = cljs.core.first(cljs.core.next(arglist__13851));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13851)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13851)));
return G__13850__delegate.call(this, x, y, z, args);
});
return G__13850;
})()
;
G__13842 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13842__13843.call(this);
case  1 :
return G__13842__13844.call(this,x);
case  2 :
return G__13842__13845.call(this,x,y);
case  3 :
return G__13842__13846.call(this,x,y,z);
default:
return G__13842__13847.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13842.cljs$lang$maxFixedArity = 3;
G__13842.cljs$lang$applyTo = G__13842__13847.cljs$lang$applyTo;
return G__13842;
})()
};
var G__13841 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13841__delegate.call(this, f, g, h, fs);
};
G__13841.cljs$lang$maxFixedArity = 3;
G__13841.cljs$lang$applyTo = (function (arglist__13852){
var f = cljs.core.first(arglist__13852);
var g = cljs.core.first(cljs.core.next(arglist__13852));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13852)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13852)));
return G__13841__delegate.call(this, f, g, h, fs);
});
return G__13841;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13782.call(this,f);
case  2 :
return juxt__13783.call(this,f,g);
case  3 :
return juxt__13785.call(this,f,g,h);
default:
return juxt__13786.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13786.cljs$lang$applyTo;
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
var dorun__13904 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13910 = cljs.core.next.call(null,coll);
coll = G__13910;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13905 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13894 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13894))
{return (n > 0);
} else
{return and__3546__auto____13894;
}
})()))
{{
var G__13913 = (n - 1);
var G__13914 = cljs.core.next.call(null,coll);
n = G__13913;
coll = G__13914;
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
return dorun__13904.call(this,n);
case  2 :
return dorun__13905.call(this,n,coll);
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
var doall__13920 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13921 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13920.call(this,n);
case  2 :
return doall__13921.call(this,n,coll);
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
var matches__13925 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13925),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13925),1)))
{return cljs.core.first.call(null,matches__13925);
} else
{return cljs.core.vec.call(null,matches__13925);
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
var matches__13979 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13979)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13979),1)))
{return cljs.core.first.call(null,matches__13979);
} else
{return cljs.core.vec.call(null,matches__13979);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13999 = cljs.core.re_find.call(null,re,s);
var match_idx__14000 = s.search(re);
var match_str__14001 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13999))?cljs.core.first.call(null,match_data__13999):match_data__13999);
var post_match__14002 = cljs.core.subs.call(null,s,(match_idx__14000 + cljs.core.count.call(null,match_str__14001)));

if(cljs.core.truth_(match_data__13999))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13999,re_seq.call(null,re,post_match__14002));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14030_SHARP_){
return print_one.call(null,p1__14030_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14073 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14073))
{var and__3546__auto____14088 = (function (){var x__445__auto____14075 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14076 = x__445__auto____14075;

if(cljs.core.truth_(and__3546__auto____14076))
{var and__3546__auto____14078 = x__445__auto____14075.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14078))
{return cljs.core.not.call(null,x__445__auto____14075.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14078;
}
} else
{return and__3546__auto____14076;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14075);
}
})();

if(cljs.core.truth_(and__3546__auto____14088))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14088;
}
} else
{return and__3546__auto____14073;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14089 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14092 = x__445__auto____14089;

if(cljs.core.truth_(and__3546__auto____14092))
{var and__3546__auto____14095 = x__445__auto____14089.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14095))
{return cljs.core.not.call(null,x__445__auto____14089.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14095;
}
} else
{return and__3546__auto____14092;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14089);
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
var first_obj__14110 = cljs.core.first.call(null,objs);
var sb__14111 = (new goog.string.StringBuffer());

var G__14112__14114 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14112__14114))
{var obj__14115 = cljs.core.first.call(null,G__14112__14114);
var G__14112__14117 = G__14112__14114;

while(true){
if(cljs.core.truth_((obj__14115 === first_obj__14110)))
{} else
{sb__14111.append(" ");
}
var G__14118__14120 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14115,opts));

if(cljs.core.truth_(G__14118__14120))
{var string__14122 = cljs.core.first.call(null,G__14118__14120);
var G__14118__14123 = G__14118__14120;

while(true){
sb__14111.append(string__14122);
var temp__3698__auto____14128 = cljs.core.next.call(null,G__14118__14123);

if(cljs.core.truth_(temp__3698__auto____14128))
{var G__14118__14130 = temp__3698__auto____14128;

{
var G__14190 = cljs.core.first.call(null,G__14118__14130);
var G__14191 = G__14118__14130;
string__14122 = G__14190;
G__14118__14123 = G__14191;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14132 = cljs.core.next.call(null,G__14112__14117);

if(cljs.core.truth_(temp__3698__auto____14132))
{var G__14112__14134 = temp__3698__auto____14132;

{
var G__14193 = cljs.core.first.call(null,G__14112__14134);
var G__14194 = G__14112__14134;
obj__14115 = G__14193;
G__14112__14117 = G__14194;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14111);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14198 = cljs.core.first.call(null,objs);

var G__14199__14201 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14199__14201))
{var obj__14202 = cljs.core.first.call(null,G__14199__14201);
var G__14199__14203 = G__14199__14201;

while(true){
if(cljs.core.truth_((obj__14202 === first_obj__14198)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14204__14205 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14202,opts));

if(cljs.core.truth_(G__14204__14205))
{var string__14219 = cljs.core.first.call(null,G__14204__14205);
var G__14204__14220 = G__14204__14205;

while(true){
cljs.core.string_print.call(null,string__14219);
var temp__3698__auto____14221 = cljs.core.next.call(null,G__14204__14220);

if(cljs.core.truth_(temp__3698__auto____14221))
{var G__14204__14223 = temp__3698__auto____14221;

{
var G__14235 = cljs.core.first.call(null,G__14204__14223);
var G__14236 = G__14204__14223;
string__14219 = G__14235;
G__14204__14220 = G__14236;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14225 = cljs.core.next.call(null,G__14199__14203);

if(cljs.core.truth_(temp__3698__auto____14225))
{var G__14199__14226 = temp__3698__auto____14225;

{
var G__14240 = cljs.core.first.call(null,G__14199__14226);
var G__14241 = G__14199__14226;
obj__14202 = G__14240;
G__14199__14203 = G__14241;
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
pr_str.cljs$lang$applyTo = (function (arglist__14372){
var objs = cljs.core.seq( arglist__14372 );;
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
pr.cljs$lang$applyTo = (function (arglist__14380){
var objs = cljs.core.seq( arglist__14380 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14388){
var objs = cljs.core.seq( arglist__14388 );;
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
println.cljs$lang$applyTo = (function (arglist__14500){
var objs = cljs.core.seq( arglist__14500 );;
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
prn.cljs$lang$applyTo = (function (arglist__14507){
var objs = cljs.core.seq( arglist__14507 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14512 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14512,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14516 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14516))
{var nspc__14518 = temp__3698__auto____14516;

return cljs.core.str.call(null,nspc__14518,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14522 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14522))
{var nspc__14523 = temp__3698__auto____14522;

return cljs.core.str.call(null,nspc__14523,"/");
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
var pr_pair__14530 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14530,"{",", ","}",opts,coll);
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
var this__14612 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14616 = this;
var G__14617__14638 = cljs.core.seq.call(null,this__14616.watches);

if(cljs.core.truth_(G__14617__14638))
{var G__14643__14647 = cljs.core.first.call(null,G__14617__14638);
var vec__14645__14649 = G__14643__14647;
var key__14650 = cljs.core.nth.call(null,vec__14645__14649,0,null);
var f__14651 = cljs.core.nth.call(null,vec__14645__14649,1,null);
var G__14617__14652 = G__14617__14638;

var G__14643__14653 = G__14643__14647;
var G__14617__14654 = G__14617__14652;

while(true){
var vec__14655__14656 = G__14643__14653;
var key__14657 = cljs.core.nth.call(null,vec__14655__14656,0,null);
var f__14658 = cljs.core.nth.call(null,vec__14655__14656,1,null);
var G__14617__14659 = G__14617__14654;

f__14658.call(null,key__14657,this$,oldval,newval);
var temp__3698__auto____14660 = cljs.core.next.call(null,G__14617__14659);

if(cljs.core.truth_(temp__3698__auto____14660))
{var G__14617__14661 = temp__3698__auto____14660;

{
var G__14686 = cljs.core.first.call(null,G__14617__14661);
var G__14687 = G__14617__14661;
G__14643__14653 = G__14686;
G__14617__14654 = G__14687;
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
var this__14666 = this;
return this$.watches = cljs.core.assoc.call(null,this__14666.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14669 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14669.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14672 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14672.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14674 = this;
return this__14674.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14676 = this;
return this__14676.state;
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
var atom__14703 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14704 = (function() { 
var G__14706__delegate = function (x,p__14691){
var map__14693__14695 = p__14691;
var map__14693__14696 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14693__14695))?cljs.core.apply.call(null,cljs.core.hash_map,map__14693__14695):map__14693__14695);
var validator__14698 = cljs.core.get.call(null,map__14693__14696,"﷐'validator");
var meta__14700 = cljs.core.get.call(null,map__14693__14696,"﷐'meta");

return (new cljs.core.Atom(x,meta__14700,validator__14698,null));
};
var G__14706 = function (x,var_args){
var p__14691 = null;
if (goog.isDef(var_args)) {
  p__14691 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14706__delegate.call(this, x, p__14691);
};
G__14706.cljs$lang$maxFixedArity = 1;
G__14706.cljs$lang$applyTo = (function (arglist__14707){
var x = cljs.core.first(arglist__14707);
var p__14691 = cljs.core.rest(arglist__14707);
return G__14706__delegate.call(this, x, p__14691);
});
return G__14706;
})()
;
atom = function(x,var_args){
var p__14691 = var_args;
switch(arguments.length){
case  1 :
return atom__14703.call(this,x);
default:
return atom__14704.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14704.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14709 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14709))
{var validate__14710 = temp__3698__auto____14709;

if(cljs.core.truth_(validate__14710.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14711 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14711,new_value);
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
var swap_BANG___14723 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14725 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14726 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14728 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14729 = (function() { 
var G__14742__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14742 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14742__delegate.call(this, a, f, x, y, z, more);
};
G__14742.cljs$lang$maxFixedArity = 5;
G__14742.cljs$lang$applyTo = (function (arglist__14744){
var a = cljs.core.first(arglist__14744);
var f = cljs.core.first(cljs.core.next(arglist__14744));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14744)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14744))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14744)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14744)))));
return G__14742__delegate.call(this, a, f, x, y, z, more);
});
return G__14742;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14723.call(this,a,f);
case  3 :
return swap_BANG___14725.call(this,a,f,x);
case  4 :
return swap_BANG___14726.call(this,a,f,x,y);
case  5 :
return swap_BANG___14728.call(this,a,f,x,y,z);
default:
return swap_BANG___14729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14729.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14758){
var iref = cljs.core.first(arglist__14758);
var f = cljs.core.first(cljs.core.next(arglist__14758));
var args = cljs.core.rest(cljs.core.next(arglist__14758));
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
var gensym__14809 = (function (){
return gensym.call(null,"G__");
});
var gensym__14810 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14809.call(this);
case  1 :
return gensym__14810.call(this,prefix_string);
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
var this__14812 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14812.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14816 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14816.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14816.state,this__14816.f);
}
return cljs.core.deref.call(null,this__14816.state);
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
delay.cljs$lang$applyTo = (function (arglist__14820){
var body = cljs.core.seq( arglist__14820 );;
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
var map__14822__14824 = options;
var map__14822__14826 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14822__14824))?cljs.core.apply.call(null,cljs.core.hash_map,map__14822__14824):map__14822__14824);
var keywordize_keys__14829 = cljs.core.get.call(null,map__14822__14826,"﷐'keywordize-keys");
var keyfn__14831 = (cljs.core.truth_(keywordize_keys__14829)?cljs.core.keyword:cljs.core.str);
var f__14848 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14846 = (function iter__14833(s__14834){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14834__14837 = s__14834;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14834__14837)))
{var k__14840 = cljs.core.first.call(null,s__14834__14837);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14831.call(null,k__14840),thisfn.call(null,(x[k__14840]))]),iter__14833.call(null,cljs.core.rest.call(null,s__14834__14837)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14846.call(null,cljs.core.js_keys.call(null,x));
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

return f__14848.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14969){
var x = cljs.core.first(arglist__14969);
var options = cljs.core.rest(arglist__14969);
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
var mem__14970 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14977__delegate = function (args){
var temp__3695__auto____14971 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14970),args);

if(cljs.core.truth_(temp__3695__auto____14971))
{var v__14972 = temp__3695__auto____14971;

return v__14972;
} else
{var ret__14973 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14970,cljs.core.assoc,args,ret__14973);
return ret__14973;
}
};
var G__14977 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14977__delegate.call(this, args);
};
G__14977.cljs$lang$maxFixedArity = 0;
G__14977.cljs$lang$applyTo = (function (arglist__14978){
var args = cljs.core.seq( arglist__14978 );;
return G__14977__delegate.call(this, args);
});
return G__14977;
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
var ret__14979 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14979)))
{{
var G__14986 = ret__14979;
f = G__14986;
continue;
}
} else
{return ret__14979;
}
break;
}
});
var trampoline__14984 = (function() { 
var G__14988__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14988 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14988__delegate.call(this, f, args);
};
G__14988.cljs$lang$maxFixedArity = 1;
G__14988.cljs$lang$applyTo = (function (arglist__14989){
var f = cljs.core.first(arglist__14989);
var args = cljs.core.rest(arglist__14989);
return G__14988__delegate.call(this, f, args);
});
return G__14988;
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
var rand__14990 = (function (){
return rand.call(null,1);
});
var rand__14991 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14990.call(this);
case  1 :
return rand__14991.call(this,n);
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
var k__14995 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14995,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14995,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15026 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15027 = (function (h,child,parent){
var or__3548__auto____15002 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15002))
{return or__3548__auto____15002;
} else
{var or__3548__auto____15003 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15003))
{return or__3548__auto____15003;
} else
{var and__3546__auto____15004 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15004))
{var and__3546__auto____15005 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15005))
{var and__3546__auto____15008 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15008))
{var ret__15010 = true;
var i__15011 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15014 = cljs.core.not.call(null,ret__15010);

if(cljs.core.truth_(or__3548__auto____15014))
{return or__3548__auto____15014;
} else
{return cljs.core._EQ_.call(null,i__15011,cljs.core.count.call(null,parent));
}
})()))
{return ret__15010;
} else
{{
var G__15036 = isa_QMARK_.call(null,h,child.call(null,i__15011),parent.call(null,i__15011));
var G__15037 = (i__15011 + 1);
ret__15010 = G__15036;
i__15011 = G__15037;
continue;
}
}
break;
}
} else
{return and__3546__auto____15008;
}
} else
{return and__3546__auto____15005;
}
} else
{return and__3546__auto____15004;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15026.call(this,h,child);
case  3 :
return isa_QMARK___15027.call(this,h,child,parent);
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
var parents__15156 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15157 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15156.call(this,h);
case  2 :
return parents__15157.call(this,h,tag);
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
var ancestors__15166 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15167 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15166.call(this,h);
case  2 :
return ancestors__15167.call(this,h,tag);
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
var descendants__15176 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15177 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15176.call(this,h);
case  2 :
return descendants__15177.call(this,h,tag);
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
var derive__15213 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15214 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15194 = "﷐'parents".call(null,h);
var td__15196 = "﷐'descendants".call(null,h);
var ta__15197 = "﷐'ancestors".call(null,h);
var tf__15202 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15210 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15194.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15197.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15197.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15194,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15202.call(null,"﷐'ancestors".call(null,h),tag,td__15196,parent,ta__15197),"﷐'descendants":tf__15202.call(null,"﷐'descendants".call(null,h),parent,ta__15197,tag,td__15196)});
})());

if(cljs.core.truth_(or__3548__auto____15210))
{return or__3548__auto____15210;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15213.call(this,h,tag);
case  3 :
return derive__15214.call(this,h,tag,parent);
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
var parentMap__15242 = "﷐'parents".call(null,h);
var childsParents__15243 = (cljs.core.truth_(parentMap__15242.call(null,tag))?cljs.core.disj.call(null,parentMap__15242.call(null,tag),parent):cljs.core.set([]));
var newParents__15244 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15243))?cljs.core.assoc.call(null,parentMap__15242,tag,childsParents__15243):cljs.core.dissoc.call(null,parentMap__15242,tag));
var deriv_seq__15249 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15184_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15184_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15184_SHARP_),cljs.core.second.call(null,p1__15184_SHARP_)));
}),cljs.core.seq.call(null,newParents__15244)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15242.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15187_SHARP_,p2__15188_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15187_SHARP_,p2__15188_SHARP_);
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
var xprefs__15268 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15272 = (cljs.core.truth_((function (){var and__3546__auto____15271 = xprefs__15268;

if(cljs.core.truth_(and__3546__auto____15271))
{return xprefs__15268.call(null,y);
} else
{return and__3546__auto____15271;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15272))
{return or__3548__auto____15272;
} else
{var or__3548__auto____15277 = (function (){var ps__15273 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15273) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15273),prefer_table)))
{} else
{}
{
var G__15284 = cljs.core.rest.call(null,ps__15273);
ps__15273 = G__15284;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15277))
{return or__3548__auto____15277;
} else
{var or__3548__auto____15280 = (function (){var ps__15278 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15278) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15278),y,prefer_table)))
{} else
{}
{
var G__15286 = cljs.core.rest.call(null,ps__15278);
ps__15278 = G__15286;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15280))
{return or__3548__auto____15280;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15288 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15288))
{return or__3548__auto____15288;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15309 = cljs.core.reduce.call(null,(function (be,p__15292){
var vec__15295__15297 = p__15292;
var k__15299 = cljs.core.nth.call(null,vec__15295__15297,0,null);
var ___15300 = cljs.core.nth.call(null,vec__15295__15297,1,null);
var e__15302 = vec__15295__15297;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15299)))
{var be2__15307 = (cljs.core.truth_((function (){var or__3548__auto____15304 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15304))
{return or__3548__auto____15304;
} else
{return cljs.core.dominates.call(null,k__15299,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15302:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15307),k__15299,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15299," and ",cljs.core.first.call(null,be2__15307),", and neither is preferred")));
}
return be2__15307;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15309))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15309));
return cljs.core.second.call(null,best_entry__15309);
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
if(cljs.core.truth_((function (){var and__3546__auto____15357 = mf;

if(cljs.core.truth_(and__3546__auto____15357))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15357;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15358 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15358))
{return or__3548__auto____15358;
} else
{var or__3548__auto____15360 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15360))
{return or__3548__auto____15360;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15364 = mf;

if(cljs.core.truth_(and__3546__auto____15364))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15364;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15367 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15367))
{return or__3548__auto____15367;
} else
{var or__3548__auto____15368 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15368))
{return or__3548__auto____15368;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15372 = mf;

if(cljs.core.truth_(and__3546__auto____15372))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15372;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15375 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15375))
{return or__3548__auto____15375;
} else
{var or__3548__auto____15376 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15376))
{return or__3548__auto____15376;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15379 = mf;

if(cljs.core.truth_(and__3546__auto____15379))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15379;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15384 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15384))
{return or__3548__auto____15384;
} else
{var or__3548__auto____15385 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15385))
{return or__3548__auto____15385;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15388 = mf;

if(cljs.core.truth_(and__3546__auto____15388))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15388;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15390 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15390))
{return or__3548__auto____15390;
} else
{var or__3548__auto____15391 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15391))
{return or__3548__auto____15391;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15394 = mf;

if(cljs.core.truth_(and__3546__auto____15394))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15394;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15396 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15396))
{return or__3548__auto____15396;
} else
{var or__3548__auto____15397 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15397))
{return or__3548__auto____15397;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15400 = mf;

if(cljs.core.truth_(and__3546__auto____15400))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15400;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15405 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15405))
{return or__3548__auto____15405;
} else
{var or__3548__auto____15407 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15407))
{return or__3548__auto____15407;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15412 = mf;

if(cljs.core.truth_(and__3546__auto____15412))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15412;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15416 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15416))
{return or__3548__auto____15416;
} else
{var or__3548__auto____15417 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15417))
{return or__3548__auto____15417;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15458 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15459 = cljs.core._get_method.call(null,mf,dispatch_val__15458);

if(cljs.core.truth_(target_fn__15459))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15458)));
}
return cljs.core.apply.call(null,target_fn__15459,args);
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
var this__15470 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15471 = this;
cljs.core.swap_BANG_.call(null,this__15471.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15471.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15471.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15471.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15474 = this;
cljs.core.swap_BANG_.call(null,this__15474.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15474.method_cache,this__15474.method_table,this__15474.cached_hierarchy,this__15474.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15476 = this;
cljs.core.swap_BANG_.call(null,this__15476.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15476.method_cache,this__15476.method_table,this__15476.cached_hierarchy,this__15476.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15480 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15480.cached_hierarchy),cljs.core.deref.call(null,this__15480.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15480.method_cache,this__15480.method_table,this__15480.cached_hierarchy,this__15480.hierarchy);
}
var temp__3695__auto____15483 = cljs.core.deref.call(null,this__15480.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15483))
{var target_fn__15484 = temp__3695__auto____15483;

return target_fn__15484;
} else
{var temp__3695__auto____15486 = cljs.core.find_and_cache_best_method.call(null,this__15480.name,dispatch_val,this__15480.hierarchy,this__15480.method_table,this__15480.prefer_table,this__15480.method_cache,this__15480.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15486))
{var target_fn__15487 = temp__3695__auto____15486;

return target_fn__15487;
} else
{return cljs.core.deref.call(null,this__15480.method_table).call(null,this__15480.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15488 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15488.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15488.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15488.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15488.method_cache,this__15488.method_table,this__15488.cached_hierarchy,this__15488.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15492 = this;
return cljs.core.deref.call(null,this__15492.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15494 = this;
return cljs.core.deref.call(null,this__15494.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15495 = this;
return cljs.core.do_dispatch.call(null,mf,this__15495.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15503__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15503 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15503__delegate.call(this, _, args);
};
G__15503.cljs$lang$maxFixedArity = 1;
G__15503.cljs$lang$applyTo = (function (arglist__15504){
var _ = cljs.core.first(arglist__15504);
var args = cljs.core.rest(arglist__15504);
return G__15503__delegate.call(this, _, args);
});
return G__15503;
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
