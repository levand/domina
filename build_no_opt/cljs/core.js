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
var _invoke__7466 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7266 = this$;

if(cljs.core.truth_(and__3546__auto____7266))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7266;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7467 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7270 = this$;

if(cljs.core.truth_(and__3546__auto____7270))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7270;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7271 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7271))
{return or__3548__auto____7271;
} else
{var or__3548__auto____7272 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7272))
{return or__3548__auto____7272;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7468 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7273 = this$;

if(cljs.core.truth_(and__3546__auto____7273))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7273;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7274 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
} else
{var or__3548__auto____7275 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7275))
{return or__3548__auto____7275;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7469 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7276 = this$;

if(cljs.core.truth_(and__3546__auto____7276))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7276;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7277 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7277))
{return or__3548__auto____7277;
} else
{var or__3548__auto____7279 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7279))
{return or__3548__auto____7279;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7470 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7281 = this$;

if(cljs.core.truth_(and__3546__auto____7281))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7281;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7282 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{var or__3548__auto____7283 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7283))
{return or__3548__auto____7283;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7471 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7285 = this$;

if(cljs.core.truth_(and__3546__auto____7285))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7285;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7287 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
} else
{var or__3548__auto____7288 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7472 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7291 = this$;

if(cljs.core.truth_(and__3546__auto____7291))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7291;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7292 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7292))
{return or__3548__auto____7292;
} else
{var or__3548__auto____7293 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7473 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7294 = this$;

if(cljs.core.truth_(and__3546__auto____7294))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7294;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7295 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{var or__3548__auto____7296 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7296))
{return or__3548__auto____7296;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7474 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7303 = this$;

if(cljs.core.truth_(and__3546__auto____7303))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7303;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7304 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{var or__3548__auto____7310 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7475 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7312 = this$;

if(cljs.core.truth_(and__3546__auto____7312))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7312;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7315 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{var or__3548__auto____7316 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7316))
{return or__3548__auto____7316;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7476 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7318 = this$;

if(cljs.core.truth_(and__3546__auto____7318))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7318;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7320 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
} else
{var or__3548__auto____7322 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7322))
{return or__3548__auto____7322;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7477 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7478 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7348 = this$;

if(cljs.core.truth_(and__3546__auto____7348))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7348;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7353 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7353))
{return or__3548__auto____7353;
} else
{var or__3548__auto____7355 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7355))
{return or__3548__auto____7355;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7479 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7359 = this$;

if(cljs.core.truth_(and__3546__auto____7359))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7359;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7364 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{var or__3548__auto____7367 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7480 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7371 = this$;

if(cljs.core.truth_(and__3546__auto____7371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7374 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7481 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7482 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7393 = this$;

if(cljs.core.truth_(and__3546__auto____7393))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7393;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7400 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7400))
{return or__3548__auto____7400;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7483 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7406 = this$;

if(cljs.core.truth_(and__3546__auto____7406))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7406;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7484 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7417 = this$;

if(cljs.core.truth_(and__3546__auto____7417))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7417;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7430 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7430))
{return or__3548__auto____7430;
} else
{var or__3548__auto____7432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7485 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7435 = this$;

if(cljs.core.truth_(and__3546__auto____7435))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7435;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7439 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7439))
{return or__3548__auto____7439;
} else
{var or__3548__auto____7440 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7440))
{return or__3548__auto____7440;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7486 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7444 = this$;

if(cljs.core.truth_(and__3546__auto____7444))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7444;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7447 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
} else
{var or__3548__auto____7450 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
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
return _invoke__7466.call(this,this$);
case  2 :
return _invoke__7467.call(this,this$,a);
case  3 :
return _invoke__7468.call(this,this$,a,b);
case  4 :
return _invoke__7469.call(this,this$,a,b,c);
case  5 :
return _invoke__7470.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7471.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7472.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7473.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7474.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7475.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7476.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7477.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7478.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7479.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7480.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7481.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7482.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7483.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7484.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7485.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7486.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7688 = coll;

if(cljs.core.truth_(and__3546__auto____7688))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7688;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7689 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7689))
{return or__3548__auto____7689;
} else
{var or__3548__auto____7690 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7690))
{return or__3548__auto____7690;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7707 = coll;

if(cljs.core.truth_(and__3546__auto____7707))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7707;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7708 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7708))
{return or__3548__auto____7708;
} else
{var or__3548__auto____7709 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7709))
{return or__3548__auto____7709;
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
var _nth__7747 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7733 = coll;

if(cljs.core.truth_(and__3546__auto____7733))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7733;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7735 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{var or__3548__auto____7737 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7748 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7740 = coll;

if(cljs.core.truth_(and__3546__auto____7740))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7740;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7743 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{var or__3548__auto____7745 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7745))
{return or__3548__auto____7745;
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
return _nth__7747.call(this,coll,n);
case  3 :
return _nth__7748.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7756 = coll;

if(cljs.core.truth_(and__3546__auto____7756))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7756;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7758 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7758))
{return or__3548__auto____7758;
} else
{var or__3548__auto____7760 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7760))
{return or__3548__auto____7760;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7767 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7767))
{return or__3548__auto____7767;
} else
{var or__3548__auto____7769 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7769))
{return or__3548__auto____7769;
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
var _lookup__7805 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7784 = o;

if(cljs.core.truth_(and__3546__auto____7784))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7784;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7786 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7786))
{return or__3548__auto____7786;
} else
{var or__3548__auto____7788 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7788))
{return or__3548__auto____7788;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7806 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7791 = o;

if(cljs.core.truth_(and__3546__auto____7791))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7791;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7803 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7803))
{return or__3548__auto____7803;
} else
{var or__3548__auto____7804 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
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
return _lookup__7805.call(this,o,k);
case  3 :
return _lookup__7806.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7827 = coll;

if(cljs.core.truth_(and__3546__auto____7827))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7827;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7829 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
} else
{var or__3548__auto____7832 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7832))
{return or__3548__auto____7832;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7836 = coll;

if(cljs.core.truth_(and__3546__auto____7836))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7836;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7843 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7843))
{return or__3548__auto____7843;
} else
{var or__3548__auto____7844 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7864 = coll;

if(cljs.core.truth_(and__3546__auto____7864))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7864;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7868 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
} else
{var or__3548__auto____7871 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7935 = coll;

if(cljs.core.truth_(and__3546__auto____7935))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7935;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7940 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{var or__3548__auto____7942 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7942))
{return or__3548__auto____7942;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7952 = coll;

if(cljs.core.truth_(and__3546__auto____7952))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7952;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7953 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7954 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7957 = coll;

if(cljs.core.truth_(and__3546__auto____7957))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7957;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7961 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{var or__3548__auto____7962 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7962))
{return or__3548__auto____7962;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7972 = coll;

if(cljs.core.truth_(and__3546__auto____7972))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7972;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7975 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{var or__3548__auto____7977 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7977))
{return or__3548__auto____7977;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = o;

if(cljs.core.truth_(and__3546__auto____7985))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7985;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7987 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7987))
{return or__3548__auto____7987;
} else
{var or__3548__auto____7989 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7989))
{return or__3548__auto____7989;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7998 = o;

if(cljs.core.truth_(and__3546__auto____7998))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7998;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8021 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8021))
{return or__3548__auto____8021;
} else
{var or__3548__auto____8023 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8061 = o;

if(cljs.core.truth_(and__3546__auto____8061))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8061;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8066 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{var or__3548__auto____8071 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8096 = o;

if(cljs.core.truth_(and__3546__auto____8096))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8096;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8100 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
} else
{var or__3548__auto____8101 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
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
var _reduce__8161 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8116 = coll;

if(cljs.core.truth_(and__3546__auto____8116))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8116;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8126 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8126))
{return or__3548__auto____8126;
} else
{var or__3548__auto____8127 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8127))
{return or__3548__auto____8127;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8162 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8128 = coll;

if(cljs.core.truth_(and__3546__auto____8128))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8128;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8129 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8129))
{return or__3548__auto____8129;
} else
{var or__3548__auto____8131 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
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
return _reduce__8161.call(this,coll,f);
case  3 :
return _reduce__8162.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8181 = o;

if(cljs.core.truth_(and__3546__auto____8181))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8181;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8185 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8185))
{return or__3548__auto____8185;
} else
{var or__3548__auto____8201 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8201))
{return or__3548__auto____8201;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8202 = o;

if(cljs.core.truth_(and__3546__auto____8202))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8202;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8203 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8203))
{return or__3548__auto____8203;
} else
{var or__3548__auto____8204 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8204))
{return or__3548__auto____8204;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8205 = o;

if(cljs.core.truth_(and__3546__auto____8205))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8205;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8206 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8206))
{return or__3548__auto____8206;
} else
{var or__3548__auto____8207 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8207))
{return or__3548__auto____8207;
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
if(cljs.core.truth_((function (){var and__3546__auto____8208 = o;

if(cljs.core.truth_(and__3546__auto____8208))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8208;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8209 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8209))
{return or__3548__auto____8209;
} else
{var or__3548__auto____8210 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8210))
{return or__3548__auto____8210;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8211 = d;

if(cljs.core.truth_(and__3546__auto____8211))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8211;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8212 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8212))
{return or__3548__auto____8212;
} else
{var or__3548__auto____8213 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8213))
{return or__3548__auto____8213;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8217 = this$;

if(cljs.core.truth_(and__3546__auto____8217))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8217;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8265 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8265))
{return or__3548__auto____8265;
} else
{var or__3548__auto____8266 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8266))
{return or__3548__auto____8266;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8273 = this$;

if(cljs.core.truth_(and__3546__auto____8273))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8273;
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
if(cljs.core.truth_((function (){var and__3546__auto____8276 = this$;

if(cljs.core.truth_(and__3546__auto____8276))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8276;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8277 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8277))
{return or__3548__auto____8277;
} else
{var or__3548__auto____8278 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8278))
{return or__3548__auto____8278;
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
var G__8331 = null;
var G__8331__8332 = (function (o,k){
return null;
});
var G__8331__8333 = (function (o,k,not_found){
return not_found;
});
G__8331 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8331__8332.call(this,o,k);
case  3 :
return G__8331__8333.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8331;
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
var G__8335 = null;
var G__8335__8336 = (function (_,f){
return f.call(null);
});
var G__8335__8337 = (function (_,f,start){
return start;
});
G__8335 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8335__8336.call(this,_,f);
case  3 :
return G__8335__8337.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8335;
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
var G__8352 = null;
var G__8352__8353 = (function (_,n){
return null;
});
var G__8352__8354 = (function (_,n,not_found){
return not_found;
});
G__8352 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8352__8353.call(this,_,n);
case  3 :
return G__8352__8354.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8352;
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
var ci_reduce__8434 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8414 = cljs.core._nth.call(null,cicoll,0);
var n__8415 = 1;

while(true){
if(cljs.core.truth_((n__8415 < cljs.core._count.call(null,cicoll))))
{{
var G__8438 = f.call(null,val__8414,cljs.core._nth.call(null,cicoll,n__8415));
var G__8439 = (n__8415 + 1);
val__8414 = G__8438;
n__8415 = G__8439;
continue;
}
} else
{return val__8414;
}
break;
}
}
});
var ci_reduce__8435 = (function (cicoll,f,val){
var val__8420 = val;
var n__8421 = 0;

while(true){
if(cljs.core.truth_((n__8421 < cljs.core._count.call(null,cicoll))))
{{
var G__8440 = f.call(null,val__8420,cljs.core._nth.call(null,cicoll,n__8421));
var G__8441 = (n__8421 + 1);
val__8420 = G__8440;
n__8421 = G__8441;
continue;
}
} else
{return val__8420;
}
break;
}
});
var ci_reduce__8436 = (function (cicoll,f,val,idx){
var val__8426 = val;
var n__8431 = idx;

while(true){
if(cljs.core.truth_((n__8431 < cljs.core._count.call(null,cicoll))))
{{
var G__8442 = f.call(null,val__8426,cljs.core._nth.call(null,cicoll,n__8431));
var G__8443 = (n__8431 + 1);
val__8426 = G__8442;
n__8431 = G__8443;
continue;
}
} else
{return val__8426;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8434.call(this,cicoll,f);
case  3 :
return ci_reduce__8435.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8436.call(this,cicoll,f,val,idx);
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
var this__8444 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8457 = null;
var G__8457__8458 = (function (_,f){
var this__8445 = this;
return cljs.core.ci_reduce.call(null,this__8445.a,f,(this__8445.a[this__8445.i]),(this__8445.i + 1));
});
var G__8457__8459 = (function (_,f,start){
var this__8446 = this;
return cljs.core.ci_reduce.call(null,this__8446.a,f,start,this__8446.i);
});
G__8457 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8457__8458.call(this,_,f);
case  3 :
return G__8457__8459.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8457;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8447 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8448 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8461 = null;
var G__8461__8462 = (function (coll,n){
var this__8449 = this;
var i__8450 = (n + this__8449.i);

if(cljs.core.truth_((i__8450 < this__8449.a.length)))
{return (this__8449.a[i__8450]);
} else
{return null;
}
});
var G__8461__8463 = (function (coll,n,not_found){
var this__8451 = this;
var i__8452 = (n + this__8451.i);

if(cljs.core.truth_((i__8452 < this__8451.a.length)))
{return (this__8451.a[i__8452]);
} else
{return not_found;
}
});
G__8461 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8461__8462.call(this,coll,n);
case  3 :
return G__8461__8463.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8461;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8453 = this;
return (this__8453.a.length - this__8453.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8454 = this;
return (this__8454.a[this__8454.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8455 = this;
if(cljs.core.truth_(((this__8455.i + 1) < this__8455.a.length)))
{return (new cljs.core.IndexedSeq(this__8455.a,(this__8455.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8456 = this;
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
var G__8465 = null;
var G__8465__8466 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8465__8467 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8465 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8465__8466.call(this,array,f);
case  3 :
return G__8465__8467.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8465;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8469 = null;
var G__8469__8470 = (function (array,k){
return (array[k]);
});
var G__8469__8471 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8469 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8469__8470.call(this,array,k);
case  3 :
return G__8469__8471.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8469;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8473 = null;
var G__8473__8474 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8473__8475 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8473 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8473__8474.call(this,array,n);
case  3 :
return G__8473__8475.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8473;
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
var temp__3698__auto____8477 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8477))
{var s__8478 = temp__3698__auto____8477;

return cljs.core._first.call(null,s__8478);
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
var G__8688 = cljs.core.next.call(null,s);
s = G__8688;
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
var s__8689 = cljs.core.seq.call(null,x);
var n__8690 = 0;

while(true){
if(cljs.core.truth_(s__8689))
{{
var G__8694 = cljs.core.next.call(null,s__8689);
var G__8695 = (n__8690 + 1);
s__8689 = G__8694;
n__8690 = G__8695;
continue;
}
} else
{return n__8690;
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
var conj__8703 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8705 = (function() { 
var G__8712__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8717 = conj.call(null,coll,x);
var G__8718 = cljs.core.first.call(null,xs);
var G__8719 = cljs.core.next.call(null,xs);
coll = G__8717;
x = G__8718;
xs = G__8719;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8712 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8712__delegate.call(this, coll, x, xs);
};
G__8712.cljs$lang$maxFixedArity = 2;
G__8712.cljs$lang$applyTo = (function (arglist__8722){
var coll = cljs.core.first(arglist__8722);
var x = cljs.core.first(cljs.core.next(arglist__8722));
var xs = cljs.core.rest(cljs.core.next(arglist__8722));
return G__8712__delegate.call(this, coll, x, xs);
});
return G__8712;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8703.call(this,coll,x);
default:
return conj__8705.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8705.cljs$lang$applyTo;
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
var nth__8742 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8743 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8742.call(this,coll,n);
case  3 :
return nth__8743.call(this,coll,n,not_found);
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
var get__8750 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8751 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8750.call(this,o,k);
case  3 :
return get__8751.call(this,o,k,not_found);
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
var assoc__8761 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8762 = (function() { 
var G__8764__delegate = function (coll,k,v,kvs){
while(true){
var ret__8760 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8765 = ret__8760;
var G__8766 = cljs.core.first.call(null,kvs);
var G__8767 = cljs.core.second.call(null,kvs);
var G__8768 = cljs.core.nnext.call(null,kvs);
coll = G__8765;
k = G__8766;
v = G__8767;
kvs = G__8768;
continue;
}
} else
{return ret__8760;
}
break;
}
};
var G__8764 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8764__delegate.call(this, coll, k, v, kvs);
};
G__8764.cljs$lang$maxFixedArity = 3;
G__8764.cljs$lang$applyTo = (function (arglist__8769){
var coll = cljs.core.first(arglist__8769);
var k = cljs.core.first(cljs.core.next(arglist__8769));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8769)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8769)));
return G__8764__delegate.call(this, coll, k, v, kvs);
});
return G__8764;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8761.call(this,coll,k,v);
default:
return assoc__8762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8762.cljs$lang$applyTo;
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
var dissoc__8774 = (function (coll){
return coll;
});
var dissoc__8775 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8777 = (function() { 
var G__8781__delegate = function (coll,k,ks){
while(true){
var ret__8773 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8783 = ret__8773;
var G__8784 = cljs.core.first.call(null,ks);
var G__8785 = cljs.core.next.call(null,ks);
coll = G__8783;
k = G__8784;
ks = G__8785;
continue;
}
} else
{return ret__8773;
}
break;
}
};
var G__8781 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8781__delegate.call(this, coll, k, ks);
};
G__8781.cljs$lang$maxFixedArity = 2;
G__8781.cljs$lang$applyTo = (function (arglist__8805){
var coll = cljs.core.first(arglist__8805);
var k = cljs.core.first(cljs.core.next(arglist__8805));
var ks = cljs.core.rest(cljs.core.next(arglist__8805));
return G__8781__delegate.call(this, coll, k, ks);
});
return G__8781;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8774.call(this,coll);
case  2 :
return dissoc__8775.call(this,coll,k);
default:
return dissoc__8777.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8777.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8808 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8810 = x__445__auto____8808;

if(cljs.core.truth_(and__3546__auto____8810))
{var and__3546__auto____8812 = x__445__auto____8808.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8812))
{return cljs.core.not.call(null,x__445__auto____8808.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8812;
}
} else
{return and__3546__auto____8810;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8808);
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
var disj__8827 = (function (coll){
return coll;
});
var disj__8828 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8829 = (function() { 
var G__8831__delegate = function (coll,k,ks){
while(true){
var ret__8824 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8832 = ret__8824;
var G__8833 = cljs.core.first.call(null,ks);
var G__8834 = cljs.core.next.call(null,ks);
coll = G__8832;
k = G__8833;
ks = G__8834;
continue;
}
} else
{return ret__8824;
}
break;
}
};
var G__8831 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8831__delegate.call(this, coll, k, ks);
};
G__8831.cljs$lang$maxFixedArity = 2;
G__8831.cljs$lang$applyTo = (function (arglist__8835){
var coll = cljs.core.first(arglist__8835);
var k = cljs.core.first(cljs.core.next(arglist__8835));
var ks = cljs.core.rest(cljs.core.next(arglist__8835));
return G__8831__delegate.call(this, coll, k, ks);
});
return G__8831;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8827.call(this,coll);
case  2 :
return disj__8828.call(this,coll,k);
default:
return disj__8829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8829.cljs$lang$applyTo;
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
{var x__445__auto____8840 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8841 = x__445__auto____8840;

if(cljs.core.truth_(and__3546__auto____8841))
{var and__3546__auto____8842 = x__445__auto____8840.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8842))
{return cljs.core.not.call(null,x__445__auto____8840.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8842;
}
} else
{return and__3546__auto____8841;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8840);
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
{var x__445__auto____8843 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8844 = x__445__auto____8843;

if(cljs.core.truth_(and__3546__auto____8844))
{var and__3546__auto____8845 = x__445__auto____8843.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8845))
{return cljs.core.not.call(null,x__445__auto____8843.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8845;
}
} else
{return and__3546__auto____8844;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8843);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8848 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8851 = x__445__auto____8848;

if(cljs.core.truth_(and__3546__auto____8851))
{var and__3546__auto____8852 = x__445__auto____8848.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8852))
{return cljs.core.not.call(null,x__445__auto____8848.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8852;
}
} else
{return and__3546__auto____8851;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8848);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8857 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8858 = x__445__auto____8857;

if(cljs.core.truth_(and__3546__auto____8858))
{var and__3546__auto____8860 = x__445__auto____8857.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8860))
{return cljs.core.not.call(null,x__445__auto____8857.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8860;
}
} else
{return and__3546__auto____8858;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8857);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8864 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8865 = x__445__auto____8864;

if(cljs.core.truth_(and__3546__auto____8865))
{var and__3546__auto____8867 = x__445__auto____8864.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8867))
{return cljs.core.not.call(null,x__445__auto____8864.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8867;
}
} else
{return and__3546__auto____8865;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8864);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8874 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8875 = x__445__auto____8874;

if(cljs.core.truth_(and__3546__auto____8875))
{var and__3546__auto____8876 = x__445__auto____8874.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8876))
{return cljs.core.not.call(null,x__445__auto____8874.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8876;
}
} else
{return and__3546__auto____8875;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8874);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8881 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8882 = x__445__auto____8881;

if(cljs.core.truth_(and__3546__auto____8882))
{var and__3546__auto____8884 = x__445__auto____8881.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8884))
{return cljs.core.not.call(null,x__445__auto____8881.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8884;
}
} else
{return and__3546__auto____8882;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8881);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8889 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8889.push(key);
}));
return keys__8889;
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
{var x__445__auto____8911 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8913 = x__445__auto____8911;

if(cljs.core.truth_(and__3546__auto____8913))
{var and__3546__auto____8915 = x__445__auto____8911.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8915))
{return cljs.core.not.call(null,x__445__auto____8911.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8915;
}
} else
{return and__3546__auto____8913;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8911);
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
var and__3546__auto____8981 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8981))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8982 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8982))
{return or__3548__auto____8982;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8981;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8985 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8985))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8985;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8992 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8992))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8992;
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
var and__3546__auto____8996 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8996))
{return (n == n.toFixed());
} else
{return and__3546__auto____8996;
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
if(cljs.core.truth_((function (){var and__3546__auto____9013 = coll;

if(cljs.core.truth_(and__3546__auto____9013))
{var and__3546__auto____9015 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9015))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9015;
}
} else
{return and__3546__auto____9013;
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
var distinct_QMARK___9025 = (function (x){
return true;
});
var distinct_QMARK___9026 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9027 = (function() { 
var G__9029__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9020 = cljs.core.set([y,x]);
var xs__9021 = more;

while(true){
var x__9022 = cljs.core.first.call(null,xs__9021);
var etc__9023 = cljs.core.next.call(null,xs__9021);

if(cljs.core.truth_(xs__9021))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9020,x__9022)))
{return false;
} else
{{
var G__9030 = cljs.core.conj.call(null,s__9020,x__9022);
var G__9031 = etc__9023;
s__9020 = G__9030;
xs__9021 = G__9031;
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
var G__9029 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9029__delegate.call(this, x, y, more);
};
G__9029.cljs$lang$maxFixedArity = 2;
G__9029.cljs$lang$applyTo = (function (arglist__9032){
var x = cljs.core.first(arglist__9032);
var y = cljs.core.first(cljs.core.next(arglist__9032));
var more = cljs.core.rest(cljs.core.next(arglist__9032));
return G__9029__delegate.call(this, x, y, more);
});
return G__9029;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9025.call(this,x);
case  2 :
return distinct_QMARK___9026.call(this,x,y);
default:
return distinct_QMARK___9027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9027.cljs$lang$applyTo;
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
var r__9040 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9040)))
{return r__9040;
} else
{if(cljs.core.truth_(r__9040))
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
var sort__9234 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9236 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9230 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9230,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9230);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9234.call(this,comp);
case  2 :
return sort__9236.call(this,comp,coll);
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
var sort_by__9252 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9254 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9252.call(this,keyfn,comp);
case  3 :
return sort_by__9254.call(this,keyfn,comp,coll);
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
var reduce__9272 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9273 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9272.call(this,f,val);
case  3 :
return reduce__9273.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9416 = (function (f,coll){
var temp__3695__auto____9410 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9410))
{var s__9411 = temp__3695__auto____9410;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9411),cljs.core.next.call(null,s__9411));
} else
{return f.call(null);
}
});
var seq_reduce__9417 = (function (f,val,coll){
var val__9412 = val;
var coll__9413 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9413))
{{
var G__9419 = f.call(null,val__9412,cljs.core.first.call(null,coll__9413));
var G__9420 = cljs.core.next.call(null,coll__9413);
val__9412 = G__9419;
coll__9413 = G__9420;
continue;
}
} else
{return val__9412;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9416.call(this,f,val);
case  3 :
return seq_reduce__9417.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9421 = null;
var G__9421__9422 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9421__9423 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9421 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9421__9422.call(this,coll,f);
case  3 :
return G__9421__9423.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9421;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9433 = (function (){
return 0;
});
var _PLUS___9434 = (function (x){
return x;
});
var _PLUS___9435 = (function (x,y){
return (x + y);
});
var _PLUS___9436 = (function() { 
var G__9442__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9442 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9442__delegate.call(this, x, y, more);
};
G__9442.cljs$lang$maxFixedArity = 2;
G__9442.cljs$lang$applyTo = (function (arglist__9443){
var x = cljs.core.first(arglist__9443);
var y = cljs.core.first(cljs.core.next(arglist__9443));
var more = cljs.core.rest(cljs.core.next(arglist__9443));
return G__9442__delegate.call(this, x, y, more);
});
return G__9442;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9433.call(this);
case  1 :
return _PLUS___9434.call(this,x);
case  2 :
return _PLUS___9435.call(this,x,y);
default:
return _PLUS___9436.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9436.cljs$lang$applyTo;
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
var ___9453 = (function (x){
return (- x);
});
var ___9454 = (function (x,y){
return (x - y);
});
var ___9455 = (function() { 
var G__9457__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9457 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9457__delegate.call(this, x, y, more);
};
G__9457.cljs$lang$maxFixedArity = 2;
G__9457.cljs$lang$applyTo = (function (arglist__9458){
var x = cljs.core.first(arglist__9458);
var y = cljs.core.first(cljs.core.next(arglist__9458));
var more = cljs.core.rest(cljs.core.next(arglist__9458));
return G__9457__delegate.call(this, x, y, more);
});
return G__9457;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9453.call(this,x);
case  2 :
return ___9454.call(this,x,y);
default:
return ___9455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9455.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9459 = (function (){
return 1;
});
var _STAR___9460 = (function (x){
return x;
});
var _STAR___9461 = (function (x,y){
return (x * y);
});
var _STAR___9462 = (function() { 
var G__9467__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9467 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9467__delegate.call(this, x, y, more);
};
G__9467.cljs$lang$maxFixedArity = 2;
G__9467.cljs$lang$applyTo = (function (arglist__9468){
var x = cljs.core.first(arglist__9468);
var y = cljs.core.first(cljs.core.next(arglist__9468));
var more = cljs.core.rest(cljs.core.next(arglist__9468));
return G__9467__delegate.call(this, x, y, more);
});
return G__9467;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9459.call(this);
case  1 :
return _STAR___9460.call(this,x);
case  2 :
return _STAR___9461.call(this,x,y);
default:
return _STAR___9462.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9462.cljs$lang$applyTo;
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
var _SLASH___9471 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9472 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9473 = (function() { 
var G__9477__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9477 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9477__delegate.call(this, x, y, more);
};
G__9477.cljs$lang$maxFixedArity = 2;
G__9477.cljs$lang$applyTo = (function (arglist__9478){
var x = cljs.core.first(arglist__9478);
var y = cljs.core.first(cljs.core.next(arglist__9478));
var more = cljs.core.rest(cljs.core.next(arglist__9478));
return G__9477__delegate.call(this, x, y, more);
});
return G__9477;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9471.call(this,x);
case  2 :
return _SLASH___9472.call(this,x,y);
default:
return _SLASH___9473.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9473.cljs$lang$applyTo;
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
var _LT___9485 = (function (x){
return true;
});
var _LT___9486 = (function (x,y){
return (x < y);
});
var _LT___9487 = (function() { 
var G__9489__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9490 = y;
var G__9491 = cljs.core.first.call(null,more);
var G__9492 = cljs.core.next.call(null,more);
x = G__9490;
y = G__9491;
more = G__9492;
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
var G__9489 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9489__delegate.call(this, x, y, more);
};
G__9489.cljs$lang$maxFixedArity = 2;
G__9489.cljs$lang$applyTo = (function (arglist__9493){
var x = cljs.core.first(arglist__9493);
var y = cljs.core.first(cljs.core.next(arglist__9493));
var more = cljs.core.rest(cljs.core.next(arglist__9493));
return G__9489__delegate.call(this, x, y, more);
});
return G__9489;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9485.call(this,x);
case  2 :
return _LT___9486.call(this,x,y);
default:
return _LT___9487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9487.cljs$lang$applyTo;
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
var _LT__EQ___9511 = (function (x){
return true;
});
var _LT__EQ___9512 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9513 = (function() { 
var G__9519__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9520 = y;
var G__9521 = cljs.core.first.call(null,more);
var G__9522 = cljs.core.next.call(null,more);
x = G__9520;
y = G__9521;
more = G__9522;
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
var G__9519 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9519__delegate.call(this, x, y, more);
};
G__9519.cljs$lang$maxFixedArity = 2;
G__9519.cljs$lang$applyTo = (function (arglist__9526){
var x = cljs.core.first(arglist__9526);
var y = cljs.core.first(cljs.core.next(arglist__9526));
var more = cljs.core.rest(cljs.core.next(arglist__9526));
return G__9519__delegate.call(this, x, y, more);
});
return G__9519;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9511.call(this,x);
case  2 :
return _LT__EQ___9512.call(this,x,y);
default:
return _LT__EQ___9513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9513.cljs$lang$applyTo;
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
var _GT___9534 = (function (x){
return true;
});
var _GT___9535 = (function (x,y){
return (x > y);
});
var _GT___9536 = (function() { 
var G__9540__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9542 = y;
var G__9543 = cljs.core.first.call(null,more);
var G__9544 = cljs.core.next.call(null,more);
x = G__9542;
y = G__9543;
more = G__9544;
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
var G__9540 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9540__delegate.call(this, x, y, more);
};
G__9540.cljs$lang$maxFixedArity = 2;
G__9540.cljs$lang$applyTo = (function (arglist__9549){
var x = cljs.core.first(arglist__9549);
var y = cljs.core.first(cljs.core.next(arglist__9549));
var more = cljs.core.rest(cljs.core.next(arglist__9549));
return G__9540__delegate.call(this, x, y, more);
});
return G__9540;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9534.call(this,x);
case  2 :
return _GT___9535.call(this,x,y);
default:
return _GT___9536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9536.cljs$lang$applyTo;
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
var _GT__EQ___9559 = (function (x){
return true;
});
var _GT__EQ___9560 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9561 = (function() { 
var G__9563__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9564 = y;
var G__9565 = cljs.core.first.call(null,more);
var G__9566 = cljs.core.next.call(null,more);
x = G__9564;
y = G__9565;
more = G__9566;
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
var G__9563 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9563__delegate.call(this, x, y, more);
};
G__9563.cljs$lang$maxFixedArity = 2;
G__9563.cljs$lang$applyTo = (function (arglist__9567){
var x = cljs.core.first(arglist__9567);
var y = cljs.core.first(cljs.core.next(arglist__9567));
var more = cljs.core.rest(cljs.core.next(arglist__9567));
return G__9563__delegate.call(this, x, y, more);
});
return G__9563;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9559.call(this,x);
case  2 :
return _GT__EQ___9560.call(this,x,y);
default:
return _GT__EQ___9561.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9561.cljs$lang$applyTo;
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
var max__9583 = (function (x){
return x;
});
var max__9584 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9585 = (function() { 
var G__9588__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9588 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9588__delegate.call(this, x, y, more);
};
G__9588.cljs$lang$maxFixedArity = 2;
G__9588.cljs$lang$applyTo = (function (arglist__9589){
var x = cljs.core.first(arglist__9589);
var y = cljs.core.first(cljs.core.next(arglist__9589));
var more = cljs.core.rest(cljs.core.next(arglist__9589));
return G__9588__delegate.call(this, x, y, more);
});
return G__9588;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9583.call(this,x);
case  2 :
return max__9584.call(this,x,y);
default:
return max__9585.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9585.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9594 = (function (x){
return x;
});
var min__9595 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9596 = (function() { 
var G__9602__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9602 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9602__delegate.call(this, x, y, more);
};
G__9602.cljs$lang$maxFixedArity = 2;
G__9602.cljs$lang$applyTo = (function (arglist__9604){
var x = cljs.core.first(arglist__9604);
var y = cljs.core.first(cljs.core.next(arglist__9604));
var more = cljs.core.rest(cljs.core.next(arglist__9604));
return G__9602__delegate.call(this, x, y, more);
});
return G__9602;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9594.call(this,x);
case  2 :
return min__9595.call(this,x,y);
default:
return min__9596.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9596.cljs$lang$applyTo;
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
var rem__9613 = (n % d);

return cljs.core.fix.call(null,((n - rem__9613) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9614 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9614));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9621 = (function (){
return Math.random.call(null);
});
var rand__9622 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9621.call(this);
case  1 :
return rand__9622.call(this,n);
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
var _EQ__EQ___9698 = (function (x){
return true;
});
var _EQ__EQ___9699 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9700 = (function() { 
var G__9705__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9706 = y;
var G__9707 = cljs.core.first.call(null,more);
var G__9708 = cljs.core.next.call(null,more);
x = G__9706;
y = G__9707;
more = G__9708;
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
var G__9705 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9705__delegate.call(this, x, y, more);
};
G__9705.cljs$lang$maxFixedArity = 2;
G__9705.cljs$lang$applyTo = (function (arglist__9711){
var x = cljs.core.first(arglist__9711);
var y = cljs.core.first(cljs.core.next(arglist__9711));
var more = cljs.core.rest(cljs.core.next(arglist__9711));
return G__9705__delegate.call(this, x, y, more);
});
return G__9705;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9698.call(this,x);
case  2 :
return _EQ__EQ___9699.call(this,x,y);
default:
return _EQ__EQ___9700.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9700.cljs$lang$applyTo;
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
var n__9720 = n;
var xs__9721 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9724 = xs__9721;

if(cljs.core.truth_(and__3546__auto____9724))
{return (n__9720 > 0);
} else
{return and__3546__auto____9724;
}
})()))
{{
var G__9738 = (n__9720 - 1);
var G__9739 = cljs.core.next.call(null,xs__9721);
n__9720 = G__9738;
xs__9721 = G__9739;
continue;
}
} else
{return xs__9721;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9747 = null;
var G__9747__9748 = (function (coll,n){
var temp__3695__auto____9743 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9743))
{var xs__9744 = temp__3695__auto____9743;

return cljs.core.first.call(null,xs__9744);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9747__9750 = (function (coll,n,not_found){
var temp__3695__auto____9745 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9745))
{var xs__9746 = temp__3695__auto____9745;

return cljs.core.first.call(null,xs__9746);
} else
{return not_found;
}
});
G__9747 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9747__9748.call(this,coll,n);
case  3 :
return G__9747__9750.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9747;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9754 = (function (){
return "";
});
var str_STAR___9755 = (function (x){
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
var str_STAR___9756 = (function() { 
var G__9782__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9783 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9784 = cljs.core.next.call(null,more);
sb = G__9783;
more = G__9784;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9782 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9782__delegate.call(this, x, ys);
};
G__9782.cljs$lang$maxFixedArity = 1;
G__9782.cljs$lang$applyTo = (function (arglist__9790){
var x = cljs.core.first(arglist__9790);
var ys = cljs.core.rest(arglist__9790);
return G__9782__delegate.call(this, x, ys);
});
return G__9782;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9754.call(this);
case  1 :
return str_STAR___9755.call(this,x);
default:
return str_STAR___9756.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9756.cljs$lang$applyTo;
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
var str__9812 = (function (){
return "";
});
var str__9813 = (function (x){
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
var str__9814 = (function() { 
var G__9819__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9819 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9819__delegate.call(this, x, ys);
};
G__9819.cljs$lang$maxFixedArity = 1;
G__9819.cljs$lang$applyTo = (function (arglist__9823){
var x = cljs.core.first(arglist__9823);
var ys = cljs.core.rest(arglist__9823);
return G__9819__delegate.call(this, x, ys);
});
return G__9819;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9812.call(this);
case  1 :
return str__9813.call(this,x);
default:
return str__9814.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9814.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9846 = (function (s,start){
return s.substring(start);
});
var subs__9847 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9846.call(this,s,start);
case  3 :
return subs__9847.call(this,s,start,end);
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
var symbol__9854 = (function (name){
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
var symbol__9855 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9854.call(this,ns);
case  2 :
return symbol__9855.call(this,ns,name);
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
var keyword__9860 = (function (name){
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
var keyword__9861 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9860.call(this,ns);
case  2 :
return keyword__9861.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9868 = cljs.core.seq.call(null,x);
var ys__9870 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9868)))
{return cljs.core.nil_QMARK_.call(null,ys__9870);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9870)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9868),cljs.core.first.call(null,ys__9870))))
{{
var G__9883 = cljs.core.next.call(null,xs__9868);
var G__9884 = cljs.core.next.call(null,ys__9870);
xs__9868 = G__9883;
ys__9870 = G__9884;
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
return cljs.core.reduce.call(null,(function (p1__9888_SHARP_,p2__9889_SHARP_){
return cljs.core.hash_combine.call(null,p1__9888_SHARP_,cljs.core.hash.call(null,p2__9889_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9893__9894 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9893__9894))
{var G__9896__9898 = cljs.core.first.call(null,G__9893__9894);
var vec__9897__9899 = G__9896__9898;
var key_name__9900 = cljs.core.nth.call(null,vec__9897__9899,0,null);
var f__9901 = cljs.core.nth.call(null,vec__9897__9899,1,null);
var G__9893__9902 = G__9893__9894;

var G__9896__9903 = G__9896__9898;
var G__9893__9904 = G__9893__9902;

while(true){
var vec__9905__9906 = G__9896__9903;
var key_name__9907 = cljs.core.nth.call(null,vec__9905__9906,0,null);
var f__9908 = cljs.core.nth.call(null,vec__9905__9906,1,null);
var G__9893__9909 = G__9893__9904;

var str_name__9910 = cljs.core.name.call(null,key_name__9907);

obj[str_name__9910] = f__9908;
var temp__3698__auto____9911 = cljs.core.next.call(null,G__9893__9909);

if(cljs.core.truth_(temp__3698__auto____9911))
{var G__9893__9912 = temp__3698__auto____9911;

{
var G__9919 = cljs.core.first.call(null,G__9893__9912);
var G__9920 = G__9893__9912;
G__9896__9903 = G__9919;
G__9893__9904 = G__9920;
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
var this__9926 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9927 = this;
return (new cljs.core.List(this__9927.meta,o,coll,(this__9927.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9929 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9930 = this;
return this__9930.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9932 = this;
return this__9932.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9934 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9937 = this;
return this__9937.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9939 = this;
return this__9939.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9942 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9944 = this;
return (new cljs.core.List(meta,this__9944.first,this__9944.rest,this__9944.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9946 = this;
return this__9946.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9949 = this;
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
var this__10014 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10017 = this;
return (new cljs.core.List(this__10017.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10022 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10023 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10025 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10032 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10033 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10035 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10037 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10041 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10044 = this;
return this__10044.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10049 = this;
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
list.cljs$lang$applyTo = (function (arglist__10151){
var items = cljs.core.seq( arglist__10151 );;
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
var this__10154 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10155 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10159 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10161 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10161.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10162 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10163 = this;
return this__10163.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10164 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10164.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10164.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10165 = this;
return this__10165.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10166 = this;
return (new cljs.core.Cons(meta,this__10166.first,this__10166.rest));
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
var G__10177 = null;
var G__10177__10178 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10177__10179 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10177 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10177__10178.call(this,string,f);
case  3 :
return G__10177__10179.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10177;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10181 = null;
var G__10181__10182 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10181__10183 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10181 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10181__10182.call(this,string,k);
case  3 :
return G__10181__10183.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10181;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10185 = null;
var G__10185__10186 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10185__10187 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10185 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10185__10186.call(this,string,n);
case  3 :
return G__10185__10187.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10185;
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
var G__10284 = null;
var G__10284__10285 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10284__10286 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10284 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10284__10285.call(this,this$,coll);
case  3 :
return G__10284__10286.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10284;
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
var x__10295 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10295;
} else
{lazy_seq.x = x__10295.call(null);
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
var this__10425 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10432 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10433 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10434 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10434.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10439 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10457 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10458 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10459 = this;
return this__10459.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10460 = this;
return (new cljs.core.LazySeq(meta,this__10460.realized,this__10460.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10474 = cljs.core.array.call(null);

var s__10476 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10476)))
{ary__10474.push(cljs.core.first.call(null,s__10476));
{
var G__10481 = cljs.core.next.call(null,s__10476);
s__10476 = G__10481;
continue;
}
} else
{return ary__10474;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10482 = s;
var i__10483 = n;
var sum__10484 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10485 = (i__10483 > 0);

if(cljs.core.truth_(and__3546__auto____10485))
{return cljs.core.seq.call(null,s__10482);
} else
{return and__3546__auto____10485;
}
})()))
{{
var G__10486 = cljs.core.next.call(null,s__10482);
var G__10487 = (i__10483 - 1);
var G__10488 = (sum__10484 + 1);
s__10482 = G__10486;
i__10483 = G__10487;
sum__10484 = G__10488;
continue;
}
} else
{return sum__10484;
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
var concat__10591 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10592 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10593 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10503 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10503))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10503),concat.call(null,cljs.core.rest.call(null,s__10503),y));
} else
{return y;
}
})));
});
var concat__10594 = (function() { 
var G__10603__delegate = function (x,y,zs){
var cat__10505 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10504 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10504))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10504),cat.call(null,cljs.core.rest.call(null,xys__10504),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10505.call(null,concat.call(null,x,y),zs);
};
var G__10603 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10603__delegate.call(this, x, y, zs);
};
G__10603.cljs$lang$maxFixedArity = 2;
G__10603.cljs$lang$applyTo = (function (arglist__10606){
var x = cljs.core.first(arglist__10606);
var y = cljs.core.first(cljs.core.next(arglist__10606));
var zs = cljs.core.rest(cljs.core.next(arglist__10606));
return G__10603__delegate.call(this, x, y, zs);
});
return G__10603;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10591.call(this);
case  1 :
return concat__10592.call(this,x);
case  2 :
return concat__10593.call(this,x,y);
default:
return concat__10594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10594.cljs$lang$applyTo;
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
var list_STAR___10624 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10625 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10626 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10627 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10628 = (function() { 
var G__10631__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10631 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10631__delegate.call(this, a, b, c, d, more);
};
G__10631.cljs$lang$maxFixedArity = 4;
G__10631.cljs$lang$applyTo = (function (arglist__10632){
var a = cljs.core.first(arglist__10632);
var b = cljs.core.first(cljs.core.next(arglist__10632));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10632)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10632))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10632))));
return G__10631__delegate.call(this, a, b, c, d, more);
});
return G__10631;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10624.call(this,a);
case  2 :
return list_STAR___10625.call(this,a,b);
case  3 :
return list_STAR___10626.call(this,a,b,c);
case  4 :
return list_STAR___10627.call(this,a,b,c,d);
default:
return list_STAR___10628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10628.cljs$lang$applyTo;
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
var apply__10687 = (function (f,args){
var fixed_arity__10633 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10633 + 1)) <= fixed_arity__10633)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10688 = (function (f,x,args){
var arglist__10639 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10641 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10639,fixed_arity__10641) <= fixed_arity__10641)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10639));
} else
{return f.cljs$lang$applyTo(arglist__10639);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10639));
}
});
var apply__10689 = (function (f,x,y,args){
var arglist__10649 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10650 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10649,fixed_arity__10650) <= fixed_arity__10650)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10649));
} else
{return f.cljs$lang$applyTo(arglist__10649);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10649));
}
});
var apply__10690 = (function (f,x,y,z,args){
var arglist__10664 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10665 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10664,fixed_arity__10665) <= fixed_arity__10665)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10664));
} else
{return f.cljs$lang$applyTo(arglist__10664);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10664));
}
});
var apply__10691 = (function() { 
var G__10703__delegate = function (f,a,b,c,d,args){
var arglist__10678 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10679 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10678,fixed_arity__10679) <= fixed_arity__10679)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10678));
} else
{return f.cljs$lang$applyTo(arglist__10678);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10678));
}
};
var G__10703 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10703__delegate.call(this, f, a, b, c, d, args);
};
G__10703.cljs$lang$maxFixedArity = 5;
G__10703.cljs$lang$applyTo = (function (arglist__10733){
var f = cljs.core.first(arglist__10733);
var a = cljs.core.first(cljs.core.next(arglist__10733));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10733)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10733))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10733)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10733)))));
return G__10703__delegate.call(this, f, a, b, c, d, args);
});
return G__10703;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10687.call(this,f,a);
case  3 :
return apply__10688.call(this,f,a,b);
case  4 :
return apply__10689.call(this,f,a,b,c);
case  5 :
return apply__10690.call(this,f,a,b,c,d);
default:
return apply__10691.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10691.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10760){
var obj = cljs.core.first(arglist__10760);
var f = cljs.core.first(cljs.core.next(arglist__10760));
var args = cljs.core.rest(cljs.core.next(arglist__10760));
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
var not_EQ___10768 = (function (x){
return false;
});
var not_EQ___10769 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10770 = (function() { 
var G__10775__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10775 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10775__delegate.call(this, x, y, more);
};
G__10775.cljs$lang$maxFixedArity = 2;
G__10775.cljs$lang$applyTo = (function (arglist__10776){
var x = cljs.core.first(arglist__10776);
var y = cljs.core.first(cljs.core.next(arglist__10776));
var more = cljs.core.rest(cljs.core.next(arglist__10776));
return G__10775__delegate.call(this, x, y, more);
});
return G__10775;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10768.call(this,x);
case  2 :
return not_EQ___10769.call(this,x,y);
default:
return not_EQ___10770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10770.cljs$lang$applyTo;
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
var G__10924 = pred;
var G__10925 = cljs.core.next.call(null,coll);
pred = G__10924;
coll = G__10925;
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
{var or__3548__auto____10928 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10928))
{return or__3548__auto____10928;
} else
{{
var G__10931 = pred;
var G__10932 = cljs.core.next.call(null,coll);
pred = G__10931;
coll = G__10932;
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
var G__10948 = null;
var G__10948__10950 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10948__10951 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10948__10953 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10948__10955 = (function() { 
var G__10964__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10964 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10964__delegate.call(this, x, y, zs);
};
G__10964.cljs$lang$maxFixedArity = 2;
G__10964.cljs$lang$applyTo = (function (arglist__10966){
var x = cljs.core.first(arglist__10966);
var y = cljs.core.first(cljs.core.next(arglist__10966));
var zs = cljs.core.rest(cljs.core.next(arglist__10966));
return G__10964__delegate.call(this, x, y, zs);
});
return G__10964;
})()
;
G__10948 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10948__10950.call(this);
case  1 :
return G__10948__10951.call(this,x);
case  2 :
return G__10948__10953.call(this,x,y);
default:
return G__10948__10955.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10948.cljs$lang$maxFixedArity = 2;
G__10948.cljs$lang$applyTo = G__10948__10955.cljs$lang$applyTo;
return G__10948;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__11028__delegate = function (args){
return x;
};
var G__11028 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11028__delegate.call(this, args);
};
G__11028.cljs$lang$maxFixedArity = 0;
G__11028.cljs$lang$applyTo = (function (arglist__11035){
var args = cljs.core.seq( arglist__11035 );;
return G__11028__delegate.call(this, args);
});
return G__11028;
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
var comp__11083 = (function (){
return cljs.core.identity;
});
var comp__11084 = (function (f){
return f;
});
var comp__11085 = (function (f,g){
return (function() {
var G__11106 = null;
var G__11106__11107 = (function (){
return f.call(null,g.call(null));
});
var G__11106__11108 = (function (x){
return f.call(null,g.call(null,x));
});
var G__11106__11109 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__11106__11111 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__11106__11112 = (function() { 
var G__11129__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__11129 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11129__delegate.call(this, x, y, z, args);
};
G__11129.cljs$lang$maxFixedArity = 3;
G__11129.cljs$lang$applyTo = (function (arglist__11131){
var x = cljs.core.first(arglist__11131);
var y = cljs.core.first(cljs.core.next(arglist__11131));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11131)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11131)));
return G__11129__delegate.call(this, x, y, z, args);
});
return G__11129;
})()
;
G__11106 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11106__11107.call(this);
case  1 :
return G__11106__11108.call(this,x);
case  2 :
return G__11106__11109.call(this,x,y);
case  3 :
return G__11106__11111.call(this,x,y,z);
default:
return G__11106__11112.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11106.cljs$lang$maxFixedArity = 3;
G__11106.cljs$lang$applyTo = G__11106__11112.cljs$lang$applyTo;
return G__11106;
})()
});
var comp__11086 = (function (f,g,h){
return (function() {
var G__11134 = null;
var G__11134__11137 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11134__11138 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11134__11139 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11134__11140 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11134__11141 = (function() { 
var G__11157__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11157 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11157__delegate.call(this, x, y, z, args);
};
G__11157.cljs$lang$maxFixedArity = 3;
G__11157.cljs$lang$applyTo = (function (arglist__11158){
var x = cljs.core.first(arglist__11158);
var y = cljs.core.first(cljs.core.next(arglist__11158));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11158)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11158)));
return G__11157__delegate.call(this, x, y, z, args);
});
return G__11157;
})()
;
G__11134 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11134__11137.call(this);
case  1 :
return G__11134__11138.call(this,x);
case  2 :
return G__11134__11139.call(this,x,y);
case  3 :
return G__11134__11140.call(this,x,y,z);
default:
return G__11134__11141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11134.cljs$lang$maxFixedArity = 3;
G__11134.cljs$lang$applyTo = G__11134__11141.cljs$lang$applyTo;
return G__11134;
})()
});
var comp__11087 = (function() { 
var G__11161__delegate = function (f1,f2,f3,fs){
var fs__11068 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__11163__delegate = function (args){
var ret__11074 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__11068),args);
var fs__11076 = cljs.core.next.call(null,fs__11068);

while(true){
if(cljs.core.truth_(fs__11076))
{{
var G__11164 = cljs.core.first.call(null,fs__11076).call(null,ret__11074);
var G__11165 = cljs.core.next.call(null,fs__11076);
ret__11074 = G__11164;
fs__11076 = G__11165;
continue;
}
} else
{return ret__11074;
}
break;
}
};
var G__11163 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11163__delegate.call(this, args);
};
G__11163.cljs$lang$maxFixedArity = 0;
G__11163.cljs$lang$applyTo = (function (arglist__11168){
var args = cljs.core.seq( arglist__11168 );;
return G__11163__delegate.call(this, args);
});
return G__11163;
})()
;
};
var G__11161 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11161__delegate.call(this, f1, f2, f3, fs);
};
G__11161.cljs$lang$maxFixedArity = 3;
G__11161.cljs$lang$applyTo = (function (arglist__11169){
var f1 = cljs.core.first(arglist__11169);
var f2 = cljs.core.first(cljs.core.next(arglist__11169));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11169)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11169)));
return G__11161__delegate.call(this, f1, f2, f3, fs);
});
return G__11161;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__11083.call(this);
case  1 :
return comp__11084.call(this,f1);
case  2 :
return comp__11085.call(this,f1,f2);
case  3 :
return comp__11086.call(this,f1,f2,f3);
default:
return comp__11087.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__11087.cljs$lang$applyTo;
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
var partial__11199 = (function (f,arg1){
return (function() { 
var G__11204__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11204 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11204__delegate.call(this, args);
};
G__11204.cljs$lang$maxFixedArity = 0;
G__11204.cljs$lang$applyTo = (function (arglist__11205){
var args = cljs.core.seq( arglist__11205 );;
return G__11204__delegate.call(this, args);
});
return G__11204;
})()
;
});
var partial__11200 = (function (f,arg1,arg2){
return (function() { 
var G__11207__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11207 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11207__delegate.call(this, args);
};
G__11207.cljs$lang$maxFixedArity = 0;
G__11207.cljs$lang$applyTo = (function (arglist__11211){
var args = cljs.core.seq( arglist__11211 );;
return G__11207__delegate.call(this, args);
});
return G__11207;
})()
;
});
var partial__11201 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11216__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11216 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11216__delegate.call(this, args);
};
G__11216.cljs$lang$maxFixedArity = 0;
G__11216.cljs$lang$applyTo = (function (arglist__11218){
var args = cljs.core.seq( arglist__11218 );;
return G__11216__delegate.call(this, args);
});
return G__11216;
})()
;
});
var partial__11202 = (function() { 
var G__11220__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11283__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11283 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11283__delegate.call(this, args);
};
G__11283.cljs$lang$maxFixedArity = 0;
G__11283.cljs$lang$applyTo = (function (arglist__11285){
var args = cljs.core.seq( arglist__11285 );;
return G__11283__delegate.call(this, args);
});
return G__11283;
})()
;
};
var G__11220 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11220__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11220.cljs$lang$maxFixedArity = 4;
G__11220.cljs$lang$applyTo = (function (arglist__11302){
var f = cljs.core.first(arglist__11302);
var arg1 = cljs.core.first(cljs.core.next(arglist__11302));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11302)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11302))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11302))));
return G__11220__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11220;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11199.call(this,f,arg1);
case  3 :
return partial__11200.call(this,f,arg1,arg2);
case  4 :
return partial__11201.call(this,f,arg1,arg2,arg3);
default:
return partial__11202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11202.cljs$lang$applyTo;
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
var fnil__11324 = (function (f,x){
return (function() {
var G__11330 = null;
var G__11330__11333 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11330__11334 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11330__11335 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11330__11336 = (function() { 
var G__11342__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11342 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11342__delegate.call(this, a, b, c, ds);
};
G__11342.cljs$lang$maxFixedArity = 3;
G__11342.cljs$lang$applyTo = (function (arglist__11345){
var a = cljs.core.first(arglist__11345);
var b = cljs.core.first(cljs.core.next(arglist__11345));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11345)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11345)));
return G__11342__delegate.call(this, a, b, c, ds);
});
return G__11342;
})()
;
G__11330 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11330__11333.call(this,a);
case  2 :
return G__11330__11334.call(this,a,b);
case  3 :
return G__11330__11335.call(this,a,b,c);
default:
return G__11330__11336.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11330.cljs$lang$maxFixedArity = 3;
G__11330.cljs$lang$applyTo = G__11330__11336.cljs$lang$applyTo;
return G__11330;
})()
});
var fnil__11325 = (function (f,x,y){
return (function() {
var G__11349 = null;
var G__11349__11350 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11349__11351 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11349__11352 = (function() { 
var G__11359__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11359 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11359__delegate.call(this, a, b, c, ds);
};
G__11359.cljs$lang$maxFixedArity = 3;
G__11359.cljs$lang$applyTo = (function (arglist__11363){
var a = cljs.core.first(arglist__11363);
var b = cljs.core.first(cljs.core.next(arglist__11363));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11363)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11363)));
return G__11359__delegate.call(this, a, b, c, ds);
});
return G__11359;
})()
;
G__11349 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11349__11350.call(this,a,b);
case  3 :
return G__11349__11351.call(this,a,b,c);
default:
return G__11349__11352.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11349.cljs$lang$maxFixedArity = 3;
G__11349.cljs$lang$applyTo = G__11349__11352.cljs$lang$applyTo;
return G__11349;
})()
});
var fnil__11326 = (function (f,x,y,z){
return (function() {
var G__11373 = null;
var G__11373__11374 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11373__11375 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11373__11376 = (function() { 
var G__11385__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11385 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11385__delegate.call(this, a, b, c, ds);
};
G__11385.cljs$lang$maxFixedArity = 3;
G__11385.cljs$lang$applyTo = (function (arglist__11391){
var a = cljs.core.first(arglist__11391);
var b = cljs.core.first(cljs.core.next(arglist__11391));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11391)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11391)));
return G__11385__delegate.call(this, a, b, c, ds);
});
return G__11385;
})()
;
G__11373 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11373__11374.call(this,a,b);
case  3 :
return G__11373__11375.call(this,a,b,c);
default:
return G__11373__11376.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11373.cljs$lang$maxFixedArity = 3;
G__11373.cljs$lang$applyTo = G__11373__11376.cljs$lang$applyTo;
return G__11373;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11324.call(this,f,x);
case  3 :
return fnil__11325.call(this,f,x,y);
case  4 :
return fnil__11326.call(this,f,x,y,z);
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
var mapi__11404 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11400 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11400))
{var s__11401 = temp__3698__auto____11400;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11401)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11401)));
} else
{return null;
}
})));
});

return mapi__11404.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11428 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11428))
{var s__11429 = temp__3698__auto____11428;

var x__11436 = f.call(null,cljs.core.first.call(null,s__11429));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11436)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11429));
} else
{return cljs.core.cons.call(null,x__11436,keep.call(null,f,cljs.core.rest.call(null,s__11429)));
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
var keepi__11511 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11503 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11503))
{var s__11505 = temp__3698__auto____11503;

var x__11506 = f.call(null,idx,cljs.core.first.call(null,s__11505));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11506)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11505));
} else
{return cljs.core.cons.call(null,x__11506,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11505)));
}
} else
{return null;
}
})));
});

return keepi__11511.call(null,0,coll);
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
var every_pred__11672 = (function (p){
return (function() {
var ep1 = null;
var ep1__11677 = (function (){
return true;
});
var ep1__11678 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11679 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11536 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11536))
{return p.call(null,y);
} else
{return and__3546__auto____11536;
}
})());
});
var ep1__11680 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11541 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11541))
{var and__3546__auto____11544 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11544))
{return p.call(null,z);
} else
{return and__3546__auto____11544;
}
} else
{return and__3546__auto____11541;
}
})());
});
var ep1__11681 = (function() { 
var G__11685__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11548 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11548))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11548;
}
})());
};
var G__11685 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11685__delegate.call(this, x, y, z, args);
};
G__11685.cljs$lang$maxFixedArity = 3;
G__11685.cljs$lang$applyTo = (function (arglist__11692){
var x = cljs.core.first(arglist__11692);
var y = cljs.core.first(cljs.core.next(arglist__11692));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11692)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11692)));
return G__11685__delegate.call(this, x, y, z, args);
});
return G__11685;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11677.call(this);
case  1 :
return ep1__11678.call(this,x);
case  2 :
return ep1__11679.call(this,x,y);
case  3 :
return ep1__11680.call(this,x,y,z);
default:
return ep1__11681.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11681.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11673 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11693 = (function (){
return true;
});
var ep2__11694 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11550 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11550))
{return p2.call(null,x);
} else
{return and__3546__auto____11550;
}
})());
});
var ep2__11695 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11552 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11552))
{var and__3546__auto____11553 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11553))
{var and__3546__auto____11554 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11554))
{return p2.call(null,y);
} else
{return and__3546__auto____11554;
}
} else
{return and__3546__auto____11553;
}
} else
{return and__3546__auto____11552;
}
})());
});
var ep2__11696 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11555 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11555))
{var and__3546__auto____11556 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11556))
{var and__3546__auto____11557 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11557))
{var and__3546__auto____11558 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11558))
{var and__3546__auto____11559 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11559))
{return p2.call(null,z);
} else
{return and__3546__auto____11559;
}
} else
{return and__3546__auto____11558;
}
} else
{return and__3546__auto____11557;
}
} else
{return and__3546__auto____11556;
}
} else
{return and__3546__auto____11555;
}
})());
});
var ep2__11697 = (function() { 
var G__11705__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11562 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11562))
{return cljs.core.every_QMARK_.call(null,(function (p1__11496_SHARP_){
var and__3546__auto____11564 = p1.call(null,p1__11496_SHARP_);

if(cljs.core.truth_(and__3546__auto____11564))
{return p2.call(null,p1__11496_SHARP_);
} else
{return and__3546__auto____11564;
}
}),args);
} else
{return and__3546__auto____11562;
}
})());
};
var G__11705 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11705__delegate.call(this, x, y, z, args);
};
G__11705.cljs$lang$maxFixedArity = 3;
G__11705.cljs$lang$applyTo = (function (arglist__11711){
var x = cljs.core.first(arglist__11711);
var y = cljs.core.first(cljs.core.next(arglist__11711));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11711)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11711)));
return G__11705__delegate.call(this, x, y, z, args);
});
return G__11705;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11693.call(this);
case  1 :
return ep2__11694.call(this,x);
case  2 :
return ep2__11695.call(this,x,y);
case  3 :
return ep2__11696.call(this,x,y,z);
default:
return ep2__11697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11697.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11674 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11714 = (function (){
return true;
});
var ep3__11715 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11627 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11627))
{var and__3546__auto____11629 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11629))
{return p3.call(null,x);
} else
{return and__3546__auto____11629;
}
} else
{return and__3546__auto____11627;
}
})());
});
var ep3__11716 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11630 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11630))
{var and__3546__auto____11632 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11632))
{var and__3546__auto____11633 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11633))
{var and__3546__auto____11634 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11634))
{var and__3546__auto____11636 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11636))
{return p3.call(null,y);
} else
{return and__3546__auto____11636;
}
} else
{return and__3546__auto____11634;
}
} else
{return and__3546__auto____11633;
}
} else
{return and__3546__auto____11632;
}
} else
{return and__3546__auto____11630;
}
})());
});
var ep3__11717 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11638 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11638))
{var and__3546__auto____11644 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11644))
{var and__3546__auto____11645 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11645))
{var and__3546__auto____11646 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11646))
{var and__3546__auto____11647 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11647))
{var and__3546__auto____11648 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11648))
{var and__3546__auto____11649 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11649))
{var and__3546__auto____11650 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11650))
{return p3.call(null,z);
} else
{return and__3546__auto____11650;
}
} else
{return and__3546__auto____11649;
}
} else
{return and__3546__auto____11648;
}
} else
{return and__3546__auto____11647;
}
} else
{return and__3546__auto____11646;
}
} else
{return and__3546__auto____11645;
}
} else
{return and__3546__auto____11644;
}
} else
{return and__3546__auto____11638;
}
})());
});
var ep3__11718 = (function() { 
var G__11732__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11652 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11652))
{return cljs.core.every_QMARK_.call(null,(function (p1__11497_SHARP_){
var and__3546__auto____11653 = p1.call(null,p1__11497_SHARP_);

if(cljs.core.truth_(and__3546__auto____11653))
{var and__3546__auto____11654 = p2.call(null,p1__11497_SHARP_);

if(cljs.core.truth_(and__3546__auto____11654))
{return p3.call(null,p1__11497_SHARP_);
} else
{return and__3546__auto____11654;
}
} else
{return and__3546__auto____11653;
}
}),args);
} else
{return and__3546__auto____11652;
}
})());
};
var G__11732 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11732__delegate.call(this, x, y, z, args);
};
G__11732.cljs$lang$maxFixedArity = 3;
G__11732.cljs$lang$applyTo = (function (arglist__11738){
var x = cljs.core.first(arglist__11738);
var y = cljs.core.first(cljs.core.next(arglist__11738));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11738)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11738)));
return G__11732__delegate.call(this, x, y, z, args);
});
return G__11732;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11714.call(this);
case  1 :
return ep3__11715.call(this,x);
case  2 :
return ep3__11716.call(this,x,y);
case  3 :
return ep3__11717.call(this,x,y,z);
default:
return ep3__11718.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11718.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11675 = (function() { 
var G__11829__delegate = function (p1,p2,p3,ps){
var ps__11657 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11830 = (function (){
return true;
});
var epn__11831 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11498_SHARP_){
return p1__11498_SHARP_.call(null,x);
}),ps__11657);
});
var epn__11832 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11499_SHARP_){
var and__3546__auto____11667 = p1__11499_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11667))
{return p1__11499_SHARP_.call(null,y);
} else
{return and__3546__auto____11667;
}
}),ps__11657);
});
var epn__11833 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11500_SHARP_){
var and__3546__auto____11668 = p1__11500_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11668))
{var and__3546__auto____11669 = p1__11500_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11669))
{return p1__11500_SHARP_.call(null,z);
} else
{return and__3546__auto____11669;
}
} else
{return and__3546__auto____11668;
}
}),ps__11657);
});
var epn__11834 = (function() { 
var G__11837__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11670 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11670))
{return cljs.core.every_QMARK_.call(null,(function (p1__11501_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11501_SHARP_,args);
}),ps__11657);
} else
{return and__3546__auto____11670;
}
})());
};
var G__11837 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11837__delegate.call(this, x, y, z, args);
};
G__11837.cljs$lang$maxFixedArity = 3;
G__11837.cljs$lang$applyTo = (function (arglist__11841){
var x = cljs.core.first(arglist__11841);
var y = cljs.core.first(cljs.core.next(arglist__11841));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11841)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11841)));
return G__11837__delegate.call(this, x, y, z, args);
});
return G__11837;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11830.call(this);
case  1 :
return epn__11831.call(this,x);
case  2 :
return epn__11832.call(this,x,y);
case  3 :
return epn__11833.call(this,x,y,z);
default:
return epn__11834.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11834.cljs$lang$applyTo;
return epn;
})()
};
var G__11829 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11829__delegate.call(this, p1, p2, p3, ps);
};
G__11829.cljs$lang$maxFixedArity = 3;
G__11829.cljs$lang$applyTo = (function (arglist__11843){
var p1 = cljs.core.first(arglist__11843);
var p2 = cljs.core.first(cljs.core.next(arglist__11843));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11843)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11843)));
return G__11829__delegate.call(this, p1, p2, p3, ps);
});
return G__11829;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11672.call(this,p1);
case  2 :
return every_pred__11673.call(this,p1,p2);
case  3 :
return every_pred__11674.call(this,p1,p2,p3);
default:
return every_pred__11675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11675.cljs$lang$applyTo;
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
var some_fn__11907 = (function (p){
return (function() {
var sp1 = null;
var sp1__11915 = (function (){
return null;
});
var sp1__11916 = (function (x){
return p.call(null,x);
});
var sp1__11917 = (function (x,y){
var or__3548__auto____11847 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11847))
{return or__3548__auto____11847;
} else
{return p.call(null,y);
}
});
var sp1__11918 = (function (x,y,z){
var or__3548__auto____11848 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11848))
{return or__3548__auto____11848;
} else
{var or__3548__auto____11849 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11849))
{return or__3548__auto____11849;
} else
{return p.call(null,z);
}
}
});
var sp1__11919 = (function() { 
var G__11993__delegate = function (x,y,z,args){
var or__3548__auto____11850 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11850))
{return or__3548__auto____11850;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11993 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11993__delegate.call(this, x, y, z, args);
};
G__11993.cljs$lang$maxFixedArity = 3;
G__11993.cljs$lang$applyTo = (function (arglist__11994){
var x = cljs.core.first(arglist__11994);
var y = cljs.core.first(cljs.core.next(arglist__11994));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11994)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11994)));
return G__11993__delegate.call(this, x, y, z, args);
});
return G__11993;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11915.call(this);
case  1 :
return sp1__11916.call(this,x);
case  2 :
return sp1__11917.call(this,x,y);
case  3 :
return sp1__11918.call(this,x,y,z);
default:
return sp1__11919.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11919.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11908 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11996 = (function (){
return null;
});
var sp2__11998 = (function (x){
var or__3548__auto____11851 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11851))
{return or__3548__auto____11851;
} else
{return p2.call(null,x);
}
});
var sp2__11999 = (function (x,y){
var or__3548__auto____11853 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11853))
{return or__3548__auto____11853;
} else
{var or__3548__auto____11855 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11855))
{return or__3548__auto____11855;
} else
{var or__3548__auto____11856 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11856))
{return or__3548__auto____11856;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__12000 = (function (x,y,z){
var or__3548__auto____11860 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11860))
{return or__3548__auto____11860;
} else
{var or__3548__auto____11863 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11863))
{return or__3548__auto____11863;
} else
{var or__3548__auto____11866 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11866))
{return or__3548__auto____11866;
} else
{var or__3548__auto____11867 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11867))
{return or__3548__auto____11867;
} else
{var or__3548__auto____11868 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11868))
{return or__3548__auto____11868;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__12001 = (function() { 
var G__12011__delegate = function (x,y,z,args){
var or__3548__auto____11869 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11869))
{return or__3548__auto____11869;
} else
{return cljs.core.some.call(null,(function (p1__11519_SHARP_){
var or__3548__auto____11874 = p1.call(null,p1__11519_SHARP_);

if(cljs.core.truth_(or__3548__auto____11874))
{return or__3548__auto____11874;
} else
{return p2.call(null,p1__11519_SHARP_);
}
}),args);
}
};
var G__12011 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12011__delegate.call(this, x, y, z, args);
};
G__12011.cljs$lang$maxFixedArity = 3;
G__12011.cljs$lang$applyTo = (function (arglist__12017){
var x = cljs.core.first(arglist__12017);
var y = cljs.core.first(cljs.core.next(arglist__12017));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12017)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12017)));
return G__12011__delegate.call(this, x, y, z, args);
});
return G__12011;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11996.call(this);
case  1 :
return sp2__11998.call(this,x);
case  2 :
return sp2__11999.call(this,x,y);
case  3 :
return sp2__12000.call(this,x,y,z);
default:
return sp2__12001.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__12001.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11909 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__12021 = (function (){
return null;
});
var sp3__12022 = (function (x){
var or__3548__auto____11877 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11877))
{return or__3548__auto____11877;
} else
{var or__3548__auto____11878 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11878))
{return or__3548__auto____11878;
} else
{return p3.call(null,x);
}
}
});
var sp3__12023 = (function (x,y){
var or__3548__auto____11879 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11879))
{return or__3548__auto____11879;
} else
{var or__3548__auto____11880 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11880))
{return or__3548__auto____11880;
} else
{var or__3548__auto____11881 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11881))
{return or__3548__auto____11881;
} else
{var or__3548__auto____11882 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11882))
{return or__3548__auto____11882;
} else
{var or__3548__auto____11883 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11883))
{return or__3548__auto____11883;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__12026 = (function (x,y,z){
var or__3548__auto____11884 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11884))
{return or__3548__auto____11884;
} else
{var or__3548__auto____11885 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11885))
{return or__3548__auto____11885;
} else
{var or__3548__auto____11886 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11886))
{return or__3548__auto____11886;
} else
{var or__3548__auto____11887 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11887))
{return or__3548__auto____11887;
} else
{var or__3548__auto____11888 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11888))
{return or__3548__auto____11888;
} else
{var or__3548__auto____11890 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11890))
{return or__3548__auto____11890;
} else
{var or__3548__auto____11891 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11891))
{return or__3548__auto____11891;
} else
{var or__3548__auto____11893 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11893))
{return or__3548__auto____11893;
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
var sp3__12027 = (function() { 
var G__12043__delegate = function (x,y,z,args){
var or__3548__auto____11894 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11894))
{return or__3548__auto____11894;
} else
{return cljs.core.some.call(null,(function (p1__11523_SHARP_){
var or__3548__auto____11897 = p1.call(null,p1__11523_SHARP_);

if(cljs.core.truth_(or__3548__auto____11897))
{return or__3548__auto____11897;
} else
{var or__3548__auto____11898 = p2.call(null,p1__11523_SHARP_);

if(cljs.core.truth_(or__3548__auto____11898))
{return or__3548__auto____11898;
} else
{return p3.call(null,p1__11523_SHARP_);
}
}
}),args);
}
};
var G__12043 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12043__delegate.call(this, x, y, z, args);
};
G__12043.cljs$lang$maxFixedArity = 3;
G__12043.cljs$lang$applyTo = (function (arglist__12049){
var x = cljs.core.first(arglist__12049);
var y = cljs.core.first(cljs.core.next(arglist__12049));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12049)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12049)));
return G__12043__delegate.call(this, x, y, z, args);
});
return G__12043;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__12021.call(this);
case  1 :
return sp3__12022.call(this,x);
case  2 :
return sp3__12023.call(this,x,y);
case  3 :
return sp3__12026.call(this,x,y,z);
default:
return sp3__12027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__12027.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11910 = (function() { 
var G__12050__delegate = function (p1,p2,p3,ps){
var ps__11900 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__12051 = (function (){
return null;
});
var spn__12052 = (function (x){
return cljs.core.some.call(null,(function (p1__11525_SHARP_){
return p1__11525_SHARP_.call(null,x);
}),ps__11900);
});
var spn__12053 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11527_SHARP_){
var or__3548__auto____11903 = p1__11527_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11903))
{return or__3548__auto____11903;
} else
{return p1__11527_SHARP_.call(null,y);
}
}),ps__11900);
});
var spn__12054 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11528_SHARP_){
var or__3548__auto____11904 = p1__11528_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11904))
{return or__3548__auto____11904;
} else
{var or__3548__auto____11905 = p1__11528_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11905))
{return or__3548__auto____11905;
} else
{return p1__11528_SHARP_.call(null,z);
}
}
}),ps__11900);
});
var spn__12055 = (function() { 
var G__12064__delegate = function (x,y,z,args){
var or__3548__auto____11906 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11906))
{return or__3548__auto____11906;
} else
{return cljs.core.some.call(null,(function (p1__11530_SHARP_){
return cljs.core.some.call(null,p1__11530_SHARP_,args);
}),ps__11900);
}
};
var G__12064 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12064__delegate.call(this, x, y, z, args);
};
G__12064.cljs$lang$maxFixedArity = 3;
G__12064.cljs$lang$applyTo = (function (arglist__12071){
var x = cljs.core.first(arglist__12071);
var y = cljs.core.first(cljs.core.next(arglist__12071));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12071)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12071)));
return G__12064__delegate.call(this, x, y, z, args);
});
return G__12064;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__12051.call(this);
case  1 :
return spn__12052.call(this,x);
case  2 :
return spn__12053.call(this,x,y);
case  3 :
return spn__12054.call(this,x,y,z);
default:
return spn__12055.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__12055.cljs$lang$applyTo;
return spn;
})()
};
var G__12050 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__12050__delegate.call(this, p1, p2, p3, ps);
};
G__12050.cljs$lang$maxFixedArity = 3;
G__12050.cljs$lang$applyTo = (function (arglist__12089){
var p1 = cljs.core.first(arglist__12089);
var p2 = cljs.core.first(cljs.core.next(arglist__12089));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12089)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12089)));
return G__12050__delegate.call(this, p1, p2, p3, ps);
});
return G__12050;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11907.call(this,p1);
case  2 :
return some_fn__11908.call(this,p1,p2);
case  3 :
return some_fn__11909.call(this,p1,p2,p3);
default:
return some_fn__11910.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11910.cljs$lang$applyTo;
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
var map__12119 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12094 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12094))
{var s__12095 = temp__3698__auto____12094;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__12095)),map.call(null,f,cljs.core.rest.call(null,s__12095)));
} else
{return null;
}
})));
});
var map__12120 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12098 = cljs.core.seq.call(null,c1);
var s2__12100 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12101 = s1__12098;

if(cljs.core.truth_(and__3546__auto____12101))
{return s2__12100;
} else
{return and__3546__auto____12101;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12098),cljs.core.first.call(null,s2__12100)),map.call(null,f,cljs.core.rest.call(null,s1__12098),cljs.core.rest.call(null,s2__12100)));
} else
{return null;
}
})));
});
var map__12122 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12103 = cljs.core.seq.call(null,c1);
var s2__12104 = cljs.core.seq.call(null,c2);
var s3__12105 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12106 = s1__12103;

if(cljs.core.truth_(and__3546__auto____12106))
{var and__3546__auto____12107 = s2__12104;

if(cljs.core.truth_(and__3546__auto____12107))
{return s3__12105;
} else
{return and__3546__auto____12107;
}
} else
{return and__3546__auto____12106;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12103),cljs.core.first.call(null,s2__12104),cljs.core.first.call(null,s3__12105)),map.call(null,f,cljs.core.rest.call(null,s1__12103),cljs.core.rest.call(null,s2__12104),cljs.core.rest.call(null,s3__12105)));
} else
{return null;
}
})));
});
var map__12123 = (function() { 
var G__12211__delegate = function (f,c1,c2,c3,colls){
var step__12115 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12113 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12113)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12113),step.call(null,map.call(null,cljs.core.rest,ss__12113)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11846_SHARP_){
return cljs.core.apply.call(null,f,p1__11846_SHARP_);
}),step__12115.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12211 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12211__delegate.call(this, f, c1, c2, c3, colls);
};
G__12211.cljs$lang$maxFixedArity = 4;
G__12211.cljs$lang$applyTo = (function (arglist__12217){
var f = cljs.core.first(arglist__12217);
var c1 = cljs.core.first(cljs.core.next(arglist__12217));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12217)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12217))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12217))));
return G__12211__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12211;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12119.call(this,f,c1);
case  3 :
return map__12120.call(this,f,c1,c2);
case  4 :
return map__12122.call(this,f,c1,c2,c3);
default:
return map__12123.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12123.cljs$lang$applyTo;
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
{var temp__3698__auto____12225 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12225))
{var s__12227 = temp__3698__auto____12225;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12227),take.call(null,(n - 1),cljs.core.rest.call(null,s__12227)));
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
var step__12232 = (function (n,coll){
while(true){
var s__12229 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12230 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12230))
{return s__12229;
} else
{return and__3546__auto____12230;
}
})()))
{{
var G__12236 = (n - 1);
var G__12237 = cljs.core.rest.call(null,s__12229);
n = G__12236;
coll = G__12237;
continue;
}
} else
{return s__12229;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12232.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12247 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12248 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12247.call(this,n);
case  2 :
return drop_last__12248.call(this,n,s);
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
var s__12250 = cljs.core.seq.call(null,coll);
var lead__12251 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12251))
{{
var G__12255 = cljs.core.next.call(null,s__12250);
var G__12256 = cljs.core.next.call(null,lead__12251);
s__12250 = G__12255;
lead__12251 = G__12256;
continue;
}
} else
{return s__12250;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12267 = (function (pred,coll){
while(true){
var s__12265 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12266 = s__12265;

if(cljs.core.truth_(and__3546__auto____12266))
{return pred.call(null,cljs.core.first.call(null,s__12265));
} else
{return and__3546__auto____12266;
}
})()))
{{
var G__12275 = pred;
var G__12276 = cljs.core.rest.call(null,s__12265);
pred = G__12275;
coll = G__12276;
continue;
}
} else
{return s__12265;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12267.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12283 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12283))
{var s__12285 = temp__3698__auto____12283;

return cljs.core.concat.call(null,s__12285,cycle.call(null,s__12285));
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
var repeat__12302 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12303 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12302.call(this,n);
case  2 :
return repeat__12303.call(this,n,x);
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
var repeatedly__12316 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12317 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12316.call(this,n);
case  2 :
return repeatedly__12317.call(this,n,f);
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
var interleave__12357 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12334 = cljs.core.seq.call(null,c1);
var s2__12335 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12337 = s1__12334;

if(cljs.core.truth_(and__3546__auto____12337))
{return s2__12335;
} else
{return and__3546__auto____12337;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12334),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12335),interleave.call(null,cljs.core.rest.call(null,s1__12334),cljs.core.rest.call(null,s2__12335))));
} else
{return null;
}
})));
});
var interleave__12358 = (function() { 
var G__12360__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12348 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12348)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12348),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12348)));
} else
{return null;
}
})));
};
var G__12360 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12360__delegate.call(this, c1, c2, colls);
};
G__12360.cljs$lang$maxFixedArity = 2;
G__12360.cljs$lang$applyTo = (function (arglist__12363){
var c1 = cljs.core.first(arglist__12363);
var c2 = cljs.core.first(cljs.core.next(arglist__12363));
var colls = cljs.core.rest(cljs.core.next(arglist__12363));
return G__12360__delegate.call(this, c1, c2, colls);
});
return G__12360;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12357.call(this,c1,c2);
default:
return interleave__12358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12358.cljs$lang$applyTo;
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
var cat__12378 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12372 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12372))
{var coll__12373 = temp__3695__auto____12372;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12373),cat.call(null,cljs.core.rest.call(null,coll__12373),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12378.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12391 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12392 = (function() { 
var G__12394__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12394 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12394__delegate.call(this, f, coll, colls);
};
G__12394.cljs$lang$maxFixedArity = 2;
G__12394.cljs$lang$applyTo = (function (arglist__12395){
var f = cljs.core.first(arglist__12395);
var coll = cljs.core.first(cljs.core.next(arglist__12395));
var colls = cljs.core.rest(cljs.core.next(arglist__12395));
return G__12394__delegate.call(this, f, coll, colls);
});
return G__12394;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12391.call(this,f,coll);
default:
return mapcat__12392.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12392.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12396 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12396))
{var s__12400 = temp__3698__auto____12396;

var f__12401 = cljs.core.first.call(null,s__12400);
var r__12402 = cljs.core.rest.call(null,s__12400);

if(cljs.core.truth_(pred.call(null,f__12401)))
{return cljs.core.cons.call(null,f__12401,filter.call(null,pred,r__12402));
} else
{return filter.call(null,pred,r__12402);
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
var walk__12422 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12422.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12417_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12417_SHARP_));
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
var partition__12510 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12511 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12430 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12430))
{var s__12431 = temp__3698__auto____12430;

var p__12432 = cljs.core.take.call(null,n,s__12431);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12432))))
{return cljs.core.cons.call(null,p__12432,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12431)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12512 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12433 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12433))
{var s__12434 = temp__3698__auto____12433;

var p__12435 = cljs.core.take.call(null,n,s__12434);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12435))))
{return cljs.core.cons.call(null,p__12435,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12434)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12435,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12510.call(this,n,step);
case  3 :
return partition__12511.call(this,n,step,pad);
case  4 :
return partition__12512.call(this,n,step,pad,coll);
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
var get_in__12578 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12579 = (function (m,ks,not_found){
var sentinel__12568 = cljs.core.lookup_sentinel;
var m__12569 = m;
var ks__12571 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12571))
{var m__12573 = cljs.core.get.call(null,m__12569,cljs.core.first.call(null,ks__12571),sentinel__12568);

if(cljs.core.truth_((sentinel__12568 === m__12573)))
{return not_found;
} else
{{
var G__12582 = sentinel__12568;
var G__12583 = m__12573;
var G__12584 = cljs.core.next.call(null,ks__12571);
sentinel__12568 = G__12582;
m__12569 = G__12583;
ks__12571 = G__12584;
continue;
}
}
} else
{return m__12569;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12578.call(this,m,ks);
case  3 :
return get_in__12579.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12586,v){
var vec__12587__12588 = p__12586;
var k__12589 = cljs.core.nth.call(null,vec__12587__12588,0,null);
var ks__12590 = cljs.core.nthnext.call(null,vec__12587__12588,1);

if(cljs.core.truth_(ks__12590))
{return cljs.core.assoc.call(null,m,k__12589,assoc_in.call(null,cljs.core.get.call(null,m,k__12589),ks__12590,v));
} else
{return cljs.core.assoc.call(null,m,k__12589,v);
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
var update_in__delegate = function (m,p__12614,f,args){
var vec__12617__12619 = p__12614;
var k__12639 = cljs.core.nth.call(null,vec__12617__12619,0,null);
var ks__12640 = cljs.core.nthnext.call(null,vec__12617__12619,1);

if(cljs.core.truth_(ks__12640))
{return cljs.core.assoc.call(null,m,k__12639,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12639),ks__12640,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12639,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12639),args));
}
};
var update_in = function (m,p__12614,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12614, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12643){
var m = cljs.core.first(arglist__12643);
var p__12614 = cljs.core.first(cljs.core.next(arglist__12643));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12643)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12643)));
return update_in__delegate.call(this, m, p__12614, f, args);
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
var this__12656 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12793 = null;
var G__12793__12794 = (function (coll,k){
var this__12657 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12793__12795 = (function (coll,k,not_found){
var this__12659 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12793 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12793__12794.call(this,coll,k);
case  3 :
return G__12793__12795.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12793;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12660 = this;
var new_array__12662 = cljs.core.aclone.call(null,this__12660.array);

(new_array__12662[k] = v);
return (new cljs.core.Vector(this__12660.meta,new_array__12662));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12801 = null;
var G__12801__12804 = (function (coll,k){
var this__12663 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12801__12805 = (function (coll,k,not_found){
var this__12665 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12801 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12801__12804.call(this,coll,k);
case  3 :
return G__12801__12805.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12801;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12667 = this;
var new_array__12668 = cljs.core.aclone.call(null,this__12667.array);

new_array__12668.push(o);
return (new cljs.core.Vector(this__12667.meta,new_array__12668));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12814 = null;
var G__12814__12815 = (function (v,f){
var this__12670 = this;
return cljs.core.ci_reduce.call(null,this__12670.array,f);
});
var G__12814__12816 = (function (v,f,start){
var this__12674 = this;
return cljs.core.ci_reduce.call(null,this__12674.array,f,start);
});
G__12814 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12814__12815.call(this,v,f);
case  3 :
return G__12814__12816.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12814;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12675 = this;
if(cljs.core.truth_((this__12675.array.length > 0)))
{var vector_seq__12743 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12675.array.length)))
{return cljs.core.cons.call(null,(this__12675.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12743.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12745 = this;
return this__12745.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12752 = this;
var count__12753 = this__12752.array.length;

if(cljs.core.truth_((count__12753 > 0)))
{return (this__12752.array[(count__12753 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12755 = this;
if(cljs.core.truth_((this__12755.array.length > 0)))
{var new_array__12757 = cljs.core.aclone.call(null,this__12755.array);

new_array__12757.pop();
return (new cljs.core.Vector(this__12755.meta,new_array__12757));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12762 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12764 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12774 = this;
return (new cljs.core.Vector(meta,this__12774.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12775 = this;
return this__12775.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12838 = null;
var G__12838__12839 = (function (coll,n){
var this__12777 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12779 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12779))
{return (n < this__12777.array.length);
} else
{return and__3546__auto____12779;
}
})()))
{return (this__12777.array[n]);
} else
{return null;
}
});
var G__12838__12840 = (function (coll,n,not_found){
var this__12781 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12783 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12783))
{return (n < this__12781.array.length);
} else
{return and__3546__auto____12783;
}
})()))
{return (this__12781.array[n]);
} else
{return not_found;
}
});
G__12838 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12838__12839.call(this,coll,n);
case  3 :
return G__12838__12840.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12838;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12785 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12785.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12858){
var args = cljs.core.seq( arglist__12858 );;
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
var this__12880 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12992 = null;
var G__12992__12993 = (function (coll,k){
var this__12882 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12992__12994 = (function (coll,k,not_found){
var this__12883 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12992 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12992__12993.call(this,coll,k);
case  3 :
return G__12992__12994.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12992;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12886 = this;
var v_pos__12887 = (this__12886.start + key);

return (new cljs.core.Subvec(this__12886.meta,cljs.core._assoc.call(null,this__12886.v,v_pos__12887,val),this__12886.start,((this__12886.end > (v_pos__12887 + 1)) ? this__12886.end : (v_pos__12887 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__13008 = null;
var G__13008__13009 = (function (coll,k){
var this__12889 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13008__13010 = (function (coll,k,not_found){
var this__12925 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13008 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13008__13009.call(this,coll,k);
case  3 :
return G__13008__13010.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13008;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12931 = this;
return (new cljs.core.Subvec(this__12931.meta,cljs.core._assoc_n.call(null,this__12931.v,this__12931.end,o),this__12931.start,(this__12931.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13012 = null;
var G__13012__13013 = (function (coll,f){
var this__12937 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__13012__13014 = (function (coll,f,start){
var this__12940 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__13012 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__13012__13013.call(this,coll,f);
case  3 :
return G__13012__13014.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13012;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12942 = this;
var subvec_seq__12949 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12942.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12942.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12949.call(null,this__12942.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12951 = this;
return (this__12951.end - this__12951.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12953 = this;
return cljs.core._nth.call(null,this__12953.v,(this__12953.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12955 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12955.start,this__12955.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12955.meta,this__12955.v,this__12955.start,(this__12955.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12962 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12970 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12975 = this;
return (new cljs.core.Subvec(meta,this__12975.v,this__12975.start,this__12975.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12978 = this;
return this__12978.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13028 = null;
var G__13028__13029 = (function (coll,n){
var this__12979 = this;
return cljs.core._nth.call(null,this__12979.v,(this__12979.start + n));
});
var G__13028__13030 = (function (coll,n,not_found){
var this__12985 = this;
return cljs.core._nth.call(null,this__12985.v,(this__12985.start + n),not_found);
});
G__13028 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__13028__13029.call(this,coll,n);
case  3 :
return G__13028__13030.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13028;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12989 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12989.meta);
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
var subvec__13049 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__13050 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__13049.call(this,v,start);
case  3 :
return subvec__13050.call(this,v,start,end);
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
var this__13092 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__13094 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13095 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13099 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13099.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13102 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13104 = this;
return cljs.core._first.call(null,this__13104.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13105 = this;
var temp__3695__auto____13107 = cljs.core.next.call(null,this__13105.front);

if(cljs.core.truth_(temp__3695__auto____13107))
{var f1__13111 = temp__3695__auto____13107;

return (new cljs.core.PersistentQueueSeq(this__13105.meta,f1__13111,this__13105.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__13105.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__13105.meta,this__13105.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13116 = this;
return this__13116.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13118 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__13118.front,this__13118.rear));
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
var this__13140 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13143 = this;
if(cljs.core.truth_(this__13143.front))
{return (new cljs.core.PersistentQueue(this__13143.meta,(this__13143.count + 1),this__13143.front,cljs.core.conj.call(null,(function (){var or__3548__auto____13146 = this__13143.rear;

if(cljs.core.truth_(or__3548__auto____13146))
{return or__3548__auto____13146;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__13143.meta,(this__13143.count + 1),cljs.core.conj.call(null,this__13143.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13152 = this;
var rear__13153 = cljs.core.seq.call(null,this__13152.rear);

if(cljs.core.truth_((function (){var or__3548__auto____13154 = this__13152.front;

if(cljs.core.truth_(or__3548__auto____13154))
{return or__3548__auto____13154;
} else
{return rear__13153;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__13152.front,cljs.core.seq.call(null,rear__13153)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13157 = this;
return this__13157.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__13160 = this;
return cljs.core._first.call(null,this__13160.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__13163 = this;
if(cljs.core.truth_(this__13163.front))
{var temp__3695__auto____13165 = cljs.core.next.call(null,this__13163.front);

if(cljs.core.truth_(temp__3695__auto____13165))
{var f1__13166 = temp__3695__auto____13165;

return (new cljs.core.PersistentQueue(this__13163.meta,(this__13163.count - 1),f1__13166,this__13163.rear));
} else
{return (new cljs.core.PersistentQueue(this__13163.meta,(this__13163.count - 1),cljs.core.seq.call(null,this__13163.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13172 = this;
return cljs.core.first.call(null,this__13172.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13173 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13176 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13181 = this;
return (new cljs.core.PersistentQueue(meta,this__13181.count,this__13181.front,this__13181.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13184 = this;
return this__13184.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13186 = this;
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
var this__13206 = this;
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
var len__13225 = array.length;

var i__13226 = 0;

while(true){
if(cljs.core.truth_((i__13226 < len__13225)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13226]))))
{return i__13226;
} else
{{
var G__13228 = (i__13226 + incr);
i__13226 = G__13228;
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
var obj_map_contains_key_QMARK___13256 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13257 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13231 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13231))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13231;
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
return obj_map_contains_key_QMARK___13256.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13257.call(this,k,strobj,true_val,false_val);
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
var this__13276 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13333 = null;
var G__13333__13334 = (function (coll,k){
var this__13278 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13333__13335 = (function (coll,k,not_found){
var this__13281 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13281.strobj,(this__13281.strobj[k]),not_found);
});
G__13333 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13333__13334.call(this,coll,k);
case  3 :
return G__13333__13335.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13333;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13282 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13283 = goog.object.clone.call(null,this__13282.strobj);
var overwrite_QMARK___13284 = new_strobj__13283.hasOwnProperty(k);

(new_strobj__13283[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13284))
{return (new cljs.core.ObjMap(this__13282.meta,this__13282.keys,new_strobj__13283));
} else
{var new_keys__13285 = cljs.core.aclone.call(null,this__13282.keys);

new_keys__13285.push(k);
return (new cljs.core.ObjMap(this__13282.meta,new_keys__13285,new_strobj__13283));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13282.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13288 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13288.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13348 = null;
var G__13348__13349 = (function (coll,k){
var this__13290 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13348__13350 = (function (coll,k,not_found){
var this__13292 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13348 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13348__13349.call(this,coll,k);
case  3 :
return G__13348__13350.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13348;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13296 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13301 = this;
if(cljs.core.truth_((this__13301.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13267_SHARP_){
return cljs.core.vector.call(null,p1__13267_SHARP_,(this__13301.strobj[p1__13267_SHARP_]));
}),this__13301.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13308 = this;
return this__13308.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13310 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13313 = this;
return (new cljs.core.ObjMap(meta,this__13313.keys,this__13313.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13316 = this;
return this__13316.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13318 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13318.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13320 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13322 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13322))
{return this__13320.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13322;
}
})()))
{var new_keys__13324 = cljs.core.aclone.call(null,this__13320.keys);
var new_strobj__13325 = goog.object.clone.call(null,this__13320.strobj);

new_keys__13324.splice(cljs.core.scan_array.call(null,1,k,new_keys__13324),1);
cljs.core.js_delete.call(null,new_strobj__13325,k);
return (new cljs.core.ObjMap(this__13320.meta,new_keys__13324,new_strobj__13325));
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
var this__13396 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13571 = null;
var G__13571__13573 = (function (coll,k){
var this__13400 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13571__13574 = (function (coll,k,not_found){
var this__13401 = this;
var bucket__13406 = (this__13401.hashobj[cljs.core.hash.call(null,k)]);
var i__13408 = (cljs.core.truth_(bucket__13406)?cljs.core.scan_array.call(null,2,k,bucket__13406):null);

if(cljs.core.truth_(i__13408))
{return (bucket__13406[(i__13408 + 1)]);
} else
{return not_found;
}
});
G__13571 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13571__13573.call(this,coll,k);
case  3 :
return G__13571__13574.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13571;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13409 = this;
var h__13410 = cljs.core.hash.call(null,k);
var bucket__13411 = (this__13409.hashobj[h__13410]);

if(cljs.core.truth_(bucket__13411))
{var new_bucket__13412 = cljs.core.aclone.call(null,bucket__13411);
var new_hashobj__13416 = goog.object.clone.call(null,this__13409.hashobj);

(new_hashobj__13416[h__13410] = new_bucket__13412);
var temp__3695__auto____13417 = cljs.core.scan_array.call(null,2,k,new_bucket__13412);

if(cljs.core.truth_(temp__3695__auto____13417))
{var i__13418 = temp__3695__auto____13417;

(new_bucket__13412[(i__13418 + 1)] = v);
return (new cljs.core.HashMap(this__13409.meta,this__13409.count,new_hashobj__13416));
} else
{new_bucket__13412.push(k,v);
return (new cljs.core.HashMap(this__13409.meta,(this__13409.count + 1),new_hashobj__13416));
}
} else
{var new_hashobj__13475 = goog.object.clone.call(null,this__13409.hashobj);

(new_hashobj__13475[h__13410] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13409.meta,(this__13409.count + 1),new_hashobj__13475));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13507 = this;
var bucket__13521 = (this__13507.hashobj[cljs.core.hash.call(null,k)]);
var i__13522 = (cljs.core.truth_(bucket__13521)?cljs.core.scan_array.call(null,2,k,bucket__13521):null);

if(cljs.core.truth_(i__13522))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13584 = null;
var G__13584__13585 = (function (coll,k){
var this__13523 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13584__13586 = (function (coll,k,not_found){
var this__13528 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13584 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13584__13585.call(this,coll,k);
case  3 :
return G__13584__13586.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13584;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13530 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13533 = this;
if(cljs.core.truth_((this__13533.count > 0)))
{var hashes__13536 = cljs.core.js_keys.call(null,this__13533.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13385_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13533.hashobj[p1__13385_SHARP_])));
}),hashes__13536);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13539 = this;
return this__13539.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13540 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13543 = this;
return (new cljs.core.HashMap(meta,this__13543.count,this__13543.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13545 = this;
return this__13545.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13547 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13547.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13550 = this;
var h__13552 = cljs.core.hash.call(null,k);
var bucket__13553 = (this__13550.hashobj[h__13552]);
var i__13555 = (cljs.core.truth_(bucket__13553)?cljs.core.scan_array.call(null,2,k,bucket__13553):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13555)))
{return coll;
} else
{var new_hashobj__13557 = goog.object.clone.call(null,this__13550.hashobj);

if(cljs.core.truth_((3 > bucket__13553.length)))
{cljs.core.js_delete.call(null,new_hashobj__13557,h__13552);
} else
{var new_bucket__13560 = cljs.core.aclone.call(null,bucket__13553);

new_bucket__13560.splice(i__13555,2);
(new_hashobj__13557[h__13552] = new_bucket__13560);
}
return (new cljs.core.HashMap(this__13550.meta,(this__13550.count - 1),new_hashobj__13557));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13613 = ks.length;

var i__13614 = 0;
var out__13615 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13614 < len__13613)))
{{
var G__13617 = (i__13614 + 1);
var G__13618 = cljs.core.assoc.call(null,out__13615,(ks[i__13614]),(vs[i__13614]));
i__13614 = G__13617;
out__13615 = G__13618;
continue;
}
} else
{return out__13615;
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
var in$__13625 = cljs.core.seq.call(null,keyvals);
var out__13626 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13625))
{{
var G__13646 = cljs.core.nnext.call(null,in$__13625);
var G__13647 = cljs.core.assoc.call(null,out__13626,cljs.core.first.call(null,in$__13625),cljs.core.second.call(null,in$__13625));
in$__13625 = G__13646;
out__13626 = G__13647;
continue;
}
} else
{return out__13626;
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
hash_map.cljs$lang$applyTo = (function (arglist__13649){
var keyvals = cljs.core.seq( arglist__13649 );;
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
{return cljs.core.reduce.call(null,(function (p1__13676_SHARP_,p2__13677_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13695 = p1__13676_SHARP_;

if(cljs.core.truth_(or__3548__auto____13695))
{return or__3548__auto____13695;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13677_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13706){
var maps = cljs.core.seq( arglist__13706 );;
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
{var merge_entry__13710 = (function (m,e){
var k__13708 = cljs.core.first.call(null,e);
var v__13709 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13708)))
{return cljs.core.assoc.call(null,m,k__13708,f.call(null,cljs.core.get.call(null,m,k__13708),v__13709));
} else
{return cljs.core.assoc.call(null,m,k__13708,v__13709);
}
});
var merge2__13713 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13710,(function (){var or__3548__auto____13712 = m1;

if(cljs.core.truth_(or__3548__auto____13712))
{return or__3548__auto____13712;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13713,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13726){
var f = cljs.core.first(arglist__13726);
var maps = cljs.core.rest(arglist__13726);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13731 = cljs.core.ObjMap.fromObject([],{});
var keys__13732 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13732))
{var key__13733 = cljs.core.first.call(null,keys__13732);
var entry__13734 = cljs.core.get.call(null,map,key__13733,"﷐'user/not-found");

{
var G__13739 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13734,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13731,key__13733,entry__13734):ret__13731);
var G__13740 = cljs.core.next.call(null,keys__13732);
ret__13731 = G__13739;
keys__13732 = G__13740;
continue;
}
} else
{return ret__13731;
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
var this__13754 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13788 = null;
var G__13788__13789 = (function (coll,v){
var this__13756 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13788__13790 = (function (coll,v,not_found){
var this__13757 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13757.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13788 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13788__13789.call(this,coll,v);
case  3 :
return G__13788__13790.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13788;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13799 = null;
var G__13799__13800 = (function (coll,k){
var this__13761 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13799__13801 = (function (coll,k,not_found){
var this__13763 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13799 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13799__13800.call(this,coll,k);
case  3 :
return G__13799__13801.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13799;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13764 = this;
return (new cljs.core.Set(this__13764.meta,cljs.core.assoc.call(null,this__13764.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13768 = this;
return cljs.core.keys.call(null,this__13768.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13769 = this;
return (new cljs.core.Set(this__13769.meta,cljs.core.dissoc.call(null,this__13769.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13772 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13776 = this;
var and__3546__auto____13778 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13778))
{var and__3546__auto____13779 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13779))
{return cljs.core.every_QMARK_.call(null,(function (p1__13728_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13728_SHARP_);
}),other);
} else
{return and__3546__auto____13779;
}
} else
{return and__3546__auto____13778;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13780 = this;
return (new cljs.core.Set(meta,this__13780.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13784 = this;
return this__13784.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13785 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13785.meta);
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
var G__13858 = cljs.core.rest.call(null,in$__13852);
var G__13859 = cljs.core.conj.call(null,out__13854,cljs.core.first.call(null,in$__13852));
in$__13852 = G__13858;
out__13854 = G__13859;
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
{var n__13881 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13883 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13883))
{var e__13884 = temp__3695__auto____13883;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13884));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13881,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13848_SHARP_){
var temp__3695__auto____13894 = cljs.core.find.call(null,smap,p1__13848_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13894))
{var e__13895 = temp__3695__auto____13894;

return cljs.core.second.call(null,e__13895);
} else
{return p1__13848_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13928 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13914,seen){
while(true){
var vec__13917__13918 = p__13914;
var f__13920 = cljs.core.nth.call(null,vec__13917__13918,0,null);
var xs__13921 = vec__13917__13918;

var temp__3698__auto____13922 = cljs.core.seq.call(null,xs__13921);

if(cljs.core.truth_(temp__3698__auto____13922))
{var s__13924 = temp__3698__auto____13922;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13920)))
{{
var G__13940 = cljs.core.rest.call(null,s__13924);
var G__13941 = seen;
p__13914 = G__13940;
seen = G__13941;
continue;
}
} else
{return cljs.core.cons.call(null,f__13920,step.call(null,cljs.core.rest.call(null,s__13924),cljs.core.conj.call(null,seen,f__13920)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13928.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13946 = cljs.core.Vector.fromArray([]);
var s__13947 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13947)))
{{
var G__13952 = cljs.core.conj.call(null,ret__13946,cljs.core.first.call(null,s__13947));
var G__13953 = cljs.core.next.call(null,s__13947);
ret__13946 = G__13952;
s__13947 = G__13953;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13946);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13956 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13956))
{return or__3548__auto____13956;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13960 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13960 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13960 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13973 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13973))
{return or__3548__auto____13973;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13975 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13975 > -1)))
{return cljs.core.subs.call(null,x,2,i__13975);
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
var map__13988 = cljs.core.ObjMap.fromObject([],{});
var ks__13989 = cljs.core.seq.call(null,keys);
var vs__13990 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13992 = ks__13989;

if(cljs.core.truth_(and__3546__auto____13992))
{return vs__13990;
} else
{return and__3546__auto____13992;
}
})()))
{{
var G__13993 = cljs.core.assoc.call(null,map__13988,cljs.core.first.call(null,ks__13989),cljs.core.first.call(null,vs__13990));
var G__13994 = cljs.core.next.call(null,ks__13989);
var G__13995 = cljs.core.next.call(null,vs__13990);
map__13988 = G__13993;
ks__13989 = G__13994;
vs__13990 = G__13995;
continue;
}
} else
{return map__13988;
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
var max_key__14016 = (function (k,x){
return x;
});
var max_key__14018 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__14019 = (function() { 
var G__14024__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13983_SHARP_,p2__13984_SHARP_){
return max_key.call(null,k,p1__13983_SHARP_,p2__13984_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__14024 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14024__delegate.call(this, k, x, y, more);
};
G__14024.cljs$lang$maxFixedArity = 3;
G__14024.cljs$lang$applyTo = (function (arglist__14026){
var k = cljs.core.first(arglist__14026);
var x = cljs.core.first(cljs.core.next(arglist__14026));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14026)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14026)));
return G__14024__delegate.call(this, k, x, y, more);
});
return G__14024;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__14016.call(this,k,x);
case  3 :
return max_key__14018.call(this,k,x,y);
default:
return max_key__14019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__14019.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__14048 = (function (k,x){
return x;
});
var min_key__14050 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__14051 = (function() { 
var G__14054__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__14001_SHARP_,p2__14002_SHARP_){
return min_key.call(null,k,p1__14001_SHARP_,p2__14002_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__14054 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14054__delegate.call(this, k, x, y, more);
};
G__14054.cljs$lang$maxFixedArity = 3;
G__14054.cljs$lang$applyTo = (function (arglist__14062){
var k = cljs.core.first(arglist__14062);
var x = cljs.core.first(cljs.core.next(arglist__14062));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14062)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14062)));
return G__14054__delegate.call(this, k, x, y, more);
});
return G__14054;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__14048.call(this,k,x);
case  3 :
return min_key__14050.call(this,k,x,y);
default:
return min_key__14051.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__14051.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__14076 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__14077 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14071 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14071))
{var s__14072 = temp__3698__auto____14071;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__14072),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__14072)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__14076.call(this,n,step);
case  3 :
return partition_all__14077.call(this,n,step,coll);
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
var temp__3698__auto____14152 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14152))
{var s__14153 = temp__3698__auto____14152;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__14153))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__14153),take_while.call(null,pred,cljs.core.rest.call(null,s__14153)));
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
var this__14168 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14169 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14204 = null;
var G__14204__14205 = (function (rng,f){
var this__14170 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14204__14206 = (function (rng,f,s){
var this__14171 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14204 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14204__14205.call(this,rng,f);
case  3 :
return G__14204__14206.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14204;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14174 = this;
var comp__14176 = (cljs.core.truth_((this__14174.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14176.call(null,this__14174.start,this__14174.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14179 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14179.end - this__14179.start) / this__14179.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14180 = this;
return this__14180.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14181 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14181.meta,(this__14181.start + this__14181.step),this__14181.end,this__14181.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14182 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14185 = this;
return (new cljs.core.Range(meta,this__14185.start,this__14185.end,this__14185.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14188 = this;
return this__14188.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14228 = null;
var G__14228__14230 = (function (rng,n){
var this__14191 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14191.start + (n * this__14191.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14194 = (this__14191.start > this__14191.end);

if(cljs.core.truth_(and__3546__auto____14194))
{return cljs.core._EQ_.call(null,this__14191.step,0);
} else
{return and__3546__auto____14194;
}
})()))
{return this__14191.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14228__14231 = (function (rng,n,not_found){
var this__14197 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14197.start + (n * this__14197.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14200 = (this__14197.start > this__14197.end);

if(cljs.core.truth_(and__3546__auto____14200))
{return cljs.core._EQ_.call(null,this__14197.step,0);
} else
{return and__3546__auto____14200;
}
})()))
{return this__14197.start;
} else
{return not_found;
}
}
});
G__14228 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14228__14230.call(this,rng,n);
case  3 :
return G__14228__14231.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14228;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14203 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14203.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14246 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14248 = (function (end){
return range.call(null,0,end,1);
});
var range__14249 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14250 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14246.call(this);
case  1 :
return range__14248.call(this,start);
case  2 :
return range__14249.call(this,start,end);
case  3 :
return range__14250.call(this,start,end,step);
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
var temp__3698__auto____14279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14279))
{var s__14281 = temp__3698__auto____14279;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14281),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14281)));
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
var temp__3698__auto____14312 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14312))
{var s__14314 = temp__3698__auto____14312;

var fst__14316 = cljs.core.first.call(null,s__14314);
var fv__14317 = f.call(null,fst__14316);
var run__14320 = cljs.core.cons.call(null,fst__14316,cljs.core.take_while.call(null,(function (p1__14293_SHARP_){
return cljs.core._EQ_.call(null,fv__14317,f.call(null,p1__14293_SHARP_));
}),cljs.core.next.call(null,s__14314)));

return cljs.core.cons.call(null,run__14320,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14320),s__14314))));
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
var reductions__14367 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14357 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14357))
{var s__14358 = temp__3695__auto____14357;

return reductions.call(null,f,cljs.core.first.call(null,s__14358),cljs.core.rest.call(null,s__14358));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14368 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14363 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14363))
{var s__14364 = temp__3698__auto____14363;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14364)),cljs.core.rest.call(null,s__14364));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14367.call(this,f,init);
case  3 :
return reductions__14368.call(this,f,init,coll);
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
var juxt__14395 = (function (f){
return (function() {
var G__14401 = null;
var G__14401__14403 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14401__14404 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14401__14405 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14401__14406 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14401__14407 = (function() { 
var G__14410__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
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
G__14401 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14401__14403.call(this);
case  1 :
return G__14401__14404.call(this,x);
case  2 :
return G__14401__14405.call(this,x,y);
case  3 :
return G__14401__14406.call(this,x,y,z);
default:
return G__14401__14407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14401.cljs$lang$maxFixedArity = 3;
G__14401.cljs$lang$applyTo = G__14401__14407.cljs$lang$applyTo;
return G__14401;
})()
});
var juxt__14396 = (function (f,g){
return (function() {
var G__14413 = null;
var G__14413__14414 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14413__14415 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14413__14416 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14413__14417 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14413__14418 = (function() { 
var G__14420__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14420 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14420__delegate.call(this, x, y, z, args);
};
G__14420.cljs$lang$maxFixedArity = 3;
G__14420.cljs$lang$applyTo = (function (arglist__14421){
var x = cljs.core.first(arglist__14421);
var y = cljs.core.first(cljs.core.next(arglist__14421));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14421)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14421)));
return G__14420__delegate.call(this, x, y, z, args);
});
return G__14420;
})()
;
G__14413 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14413__14414.call(this);
case  1 :
return G__14413__14415.call(this,x);
case  2 :
return G__14413__14416.call(this,x,y);
case  3 :
return G__14413__14417.call(this,x,y,z);
default:
return G__14413__14418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14413.cljs$lang$maxFixedArity = 3;
G__14413.cljs$lang$applyTo = G__14413__14418.cljs$lang$applyTo;
return G__14413;
})()
});
var juxt__14397 = (function (f,g,h){
return (function() {
var G__14422 = null;
var G__14422__14423 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14422__14424 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14422__14425 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14422__14426 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14422__14427 = (function() { 
var G__14430__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14430 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14430__delegate.call(this, x, y, z, args);
};
G__14430.cljs$lang$maxFixedArity = 3;
G__14430.cljs$lang$applyTo = (function (arglist__14431){
var x = cljs.core.first(arglist__14431);
var y = cljs.core.first(cljs.core.next(arglist__14431));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14431)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14431)));
return G__14430__delegate.call(this, x, y, z, args);
});
return G__14430;
})()
;
G__14422 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14422__14423.call(this);
case  1 :
return G__14422__14424.call(this,x);
case  2 :
return G__14422__14425.call(this,x,y);
case  3 :
return G__14422__14426.call(this,x,y,z);
default:
return G__14422__14427.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14422.cljs$lang$maxFixedArity = 3;
G__14422.cljs$lang$applyTo = G__14422__14427.cljs$lang$applyTo;
return G__14422;
})()
});
var juxt__14398 = (function() { 
var G__14433__delegate = function (f,g,h,fs){
var fs__14391 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14434 = null;
var G__14434__14435 = (function (){
return cljs.core.reduce.call(null,(function (p1__14342_SHARP_,p2__14343_SHARP_){
return cljs.core.conj.call(null,p1__14342_SHARP_,p2__14343_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14391);
});
var G__14434__14436 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14344_SHARP_,p2__14345_SHARP_){
return cljs.core.conj.call(null,p1__14344_SHARP_,p2__14345_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14391);
});
var G__14434__14437 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14346_SHARP_,p2__14348_SHARP_){
return cljs.core.conj.call(null,p1__14346_SHARP_,p2__14348_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14391);
});
var G__14434__14438 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14350_SHARP_,p2__14351_SHARP_){
return cljs.core.conj.call(null,p1__14350_SHARP_,p2__14351_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14391);
});
var G__14434__14439 = (function() { 
var G__14442__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14352_SHARP_,p2__14354_SHARP_){
return cljs.core.conj.call(null,p1__14352_SHARP_,cljs.core.apply.call(null,p2__14354_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14391);
};
var G__14442 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14442__delegate.call(this, x, y, z, args);
};
G__14442.cljs$lang$maxFixedArity = 3;
G__14442.cljs$lang$applyTo = (function (arglist__14443){
var x = cljs.core.first(arglist__14443);
var y = cljs.core.first(cljs.core.next(arglist__14443));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14443)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14443)));
return G__14442__delegate.call(this, x, y, z, args);
});
return G__14442;
})()
;
G__14434 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14434__14435.call(this);
case  1 :
return G__14434__14436.call(this,x);
case  2 :
return G__14434__14437.call(this,x,y);
case  3 :
return G__14434__14438.call(this,x,y,z);
default:
return G__14434__14439.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14434.cljs$lang$maxFixedArity = 3;
G__14434.cljs$lang$applyTo = G__14434__14439.cljs$lang$applyTo;
return G__14434;
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
G__14433.cljs$lang$applyTo = (function (arglist__14445){
var f = cljs.core.first(arglist__14445);
var g = cljs.core.first(cljs.core.next(arglist__14445));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14445)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14445)));
return G__14433__delegate.call(this, f, g, h, fs);
});
return G__14433;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14395.call(this,f);
case  2 :
return juxt__14396.call(this,f,g);
case  3 :
return juxt__14397.call(this,f,g,h);
default:
return juxt__14398.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14398.cljs$lang$applyTo;
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
var dorun__14464 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14468 = cljs.core.next.call(null,coll);
coll = G__14468;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14465 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14446 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14446))
{return (n > 0);
} else
{return and__3546__auto____14446;
}
})()))
{{
var G__14469 = (n - 1);
var G__14470 = cljs.core.next.call(null,coll);
n = G__14469;
coll = G__14470;
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
return dorun__14464.call(this,n);
case  2 :
return dorun__14465.call(this,n,coll);
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
var doall__14472 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14473 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14472.call(this,n);
case  2 :
return doall__14473.call(this,n,coll);
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
var matches__14478 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14478),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14478),1)))
{return cljs.core.first.call(null,matches__14478);
} else
{return cljs.core.vec.call(null,matches__14478);
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
var matches__14482 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14482)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14482),1)))
{return cljs.core.first.call(null,matches__14482);
} else
{return cljs.core.vec.call(null,matches__14482);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14483 = cljs.core.re_find.call(null,re,s);
var match_idx__14484 = s.search(re);
var match_str__14486 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14483))?cljs.core.first.call(null,match_data__14483):match_data__14483);
var post_match__14487 = cljs.core.subs.call(null,s,(match_idx__14484 + cljs.core.count.call(null,match_str__14486)));

if(cljs.core.truth_(match_data__14483))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14483,re_seq.call(null,re,post_match__14487));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14488_SHARP_){
return print_one.call(null,p1__14488_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14495 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14495))
{var and__3546__auto____14500 = (function (){var x__445__auto____14496 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14497 = x__445__auto____14496;

if(cljs.core.truth_(and__3546__auto____14497))
{var and__3546__auto____14499 = x__445__auto____14496.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14499))
{return cljs.core.not.call(null,x__445__auto____14496.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14499;
}
} else
{return and__3546__auto____14497;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14496);
}
})();

if(cljs.core.truth_(and__3546__auto____14500))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14500;
}
} else
{return and__3546__auto____14495;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14502 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14504 = x__445__auto____14502;

if(cljs.core.truth_(and__3546__auto____14504))
{var and__3546__auto____14505 = x__445__auto____14502.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14505))
{return cljs.core.not.call(null,x__445__auto____14502.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14505;
}
} else
{return and__3546__auto____14504;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14502);
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
var first_obj__14522 = cljs.core.first.call(null,objs);
var sb__14523 = (new goog.string.StringBuffer());

var G__14525__14527 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14525__14527))
{var obj__14530 = cljs.core.first.call(null,G__14525__14527);
var G__14525__14532 = G__14525__14527;

while(true){
if(cljs.core.truth_((obj__14530 === first_obj__14522)))
{} else
{sb__14523.append(" ");
}
var G__14537__14539 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14530,opts));

if(cljs.core.truth_(G__14537__14539))
{var string__14540 = cljs.core.first.call(null,G__14537__14539);
var G__14537__14541 = G__14537__14539;

while(true){
sb__14523.append(string__14540);
var temp__3698__auto____14543 = cljs.core.next.call(null,G__14537__14541);

if(cljs.core.truth_(temp__3698__auto____14543))
{var G__14537__14548 = temp__3698__auto____14543;

{
var G__14583 = cljs.core.first.call(null,G__14537__14548);
var G__14584 = G__14537__14548;
string__14540 = G__14583;
G__14537__14541 = G__14584;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14555 = cljs.core.next.call(null,G__14525__14532);

if(cljs.core.truth_(temp__3698__auto____14555))
{var G__14525__14558 = temp__3698__auto____14555;

{
var G__14586 = cljs.core.first.call(null,G__14525__14558);
var G__14587 = G__14525__14558;
obj__14530 = G__14586;
G__14525__14532 = G__14587;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14523);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14593 = cljs.core.first.call(null,objs);

var G__14594__14595 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14594__14595))
{var obj__14597 = cljs.core.first.call(null,G__14594__14595);
var G__14594__14598 = G__14594__14595;

while(true){
if(cljs.core.truth_((obj__14597 === first_obj__14593)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14599__14600 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14597,opts));

if(cljs.core.truth_(G__14599__14600))
{var string__14603 = cljs.core.first.call(null,G__14599__14600);
var G__14599__14604 = G__14599__14600;

while(true){
cljs.core.string_print.call(null,string__14603);
var temp__3698__auto____14607 = cljs.core.next.call(null,G__14599__14604);

if(cljs.core.truth_(temp__3698__auto____14607))
{var G__14599__14608 = temp__3698__auto____14607;

{
var G__14613 = cljs.core.first.call(null,G__14599__14608);
var G__14614 = G__14599__14608;
string__14603 = G__14613;
G__14599__14604 = G__14614;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14609 = cljs.core.next.call(null,G__14594__14598);

if(cljs.core.truth_(temp__3698__auto____14609))
{var G__14594__14612 = temp__3698__auto____14609;

{
var G__14615 = cljs.core.first.call(null,G__14594__14612);
var G__14616 = G__14594__14612;
obj__14597 = G__14615;
G__14594__14598 = G__14616;
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
pr_str.cljs$lang$applyTo = (function (arglist__14631){
var objs = cljs.core.seq( arglist__14631 );;
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
pr.cljs$lang$applyTo = (function (arglist__14634){
var objs = cljs.core.seq( arglist__14634 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14711){
var objs = cljs.core.seq( arglist__14711 );;
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
println.cljs$lang$applyTo = (function (arglist__14717){
var objs = cljs.core.seq( arglist__14717 );;
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
prn.cljs$lang$applyTo = (function (arglist__14719){
var objs = cljs.core.seq( arglist__14719 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14722 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14722,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14731 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14731))
{var nspc__14734 = temp__3698__auto____14731;

return cljs.core.str.call(null,nspc__14734,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14735 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14735))
{var nspc__14736 = temp__3698__auto____14735;

return cljs.core.str.call(null,nspc__14736,"/");
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
var pr_pair__14746 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14746,"{",", ","}",opts,coll);
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
var this__14780 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14782 = this;
var G__14783__14784 = cljs.core.seq.call(null,this__14782.watches);

if(cljs.core.truth_(G__14783__14784))
{var G__14793__14795 = cljs.core.first.call(null,G__14783__14784);
var vec__14794__14796 = G__14793__14795;
var key__14797 = cljs.core.nth.call(null,vec__14794__14796,0,null);
var f__14798 = cljs.core.nth.call(null,vec__14794__14796,1,null);
var G__14783__14799 = G__14783__14784;

var G__14793__14800 = G__14793__14795;
var G__14783__14801 = G__14783__14799;

while(true){
var vec__14802__14803 = G__14793__14800;
var key__14804 = cljs.core.nth.call(null,vec__14802__14803,0,null);
var f__14805 = cljs.core.nth.call(null,vec__14802__14803,1,null);
var G__14783__14806 = G__14783__14801;

f__14805.call(null,key__14804,this$,oldval,newval);
var temp__3698__auto____14807 = cljs.core.next.call(null,G__14783__14806);

if(cljs.core.truth_(temp__3698__auto____14807))
{var G__14783__14808 = temp__3698__auto____14807;

{
var G__14832 = cljs.core.first.call(null,G__14783__14808);
var G__14834 = G__14783__14808;
G__14793__14800 = G__14832;
G__14783__14801 = G__14834;
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
var this__14809 = this;
return this$.watches = cljs.core.assoc.call(null,this__14809.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14811 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14811.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14819 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14819.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14821 = this;
return this__14821.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14823 = this;
return this__14823.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14824 = this;
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
var atom__14861 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14862 = (function() { 
var G__14865__delegate = function (x,p__14849){
var map__14850__14851 = p__14849;
var map__14850__14852 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14850__14851))?cljs.core.apply.call(null,cljs.core.hash_map,map__14850__14851):map__14850__14851);
var validator__14853 = cljs.core.get.call(null,map__14850__14852,"﷐'validator");
var meta__14854 = cljs.core.get.call(null,map__14850__14852,"﷐'meta");

return (new cljs.core.Atom(x,meta__14854,validator__14853,null));
};
var G__14865 = function (x,var_args){
var p__14849 = null;
if (goog.isDef(var_args)) {
  p__14849 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14865__delegate.call(this, x, p__14849);
};
G__14865.cljs$lang$maxFixedArity = 1;
G__14865.cljs$lang$applyTo = (function (arglist__14872){
var x = cljs.core.first(arglist__14872);
var p__14849 = cljs.core.rest(arglist__14872);
return G__14865__delegate.call(this, x, p__14849);
});
return G__14865;
})()
;
atom = function(x,var_args){
var p__14849 = var_args;
switch(arguments.length){
case  1 :
return atom__14861.call(this,x);
default:
return atom__14862.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14862.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14877 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14877))
{var validate__14878 = temp__3698__auto____14877;

if(cljs.core.truth_(validate__14878.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14883 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14883,new_value);
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
var swap_BANG___14898 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14899 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14900 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14901 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14902 = (function() { 
var G__14907__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14907 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14907__delegate.call(this, a, f, x, y, z, more);
};
G__14907.cljs$lang$maxFixedArity = 5;
G__14907.cljs$lang$applyTo = (function (arglist__14912){
var a = cljs.core.first(arglist__14912);
var f = cljs.core.first(cljs.core.next(arglist__14912));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14912)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14912))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14912)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14912)))));
return G__14907__delegate.call(this, a, f, x, y, z, more);
});
return G__14907;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14898.call(this,a,f);
case  3 :
return swap_BANG___14899.call(this,a,f,x);
case  4 :
return swap_BANG___14900.call(this,a,f,x,y);
case  5 :
return swap_BANG___14901.call(this,a,f,x,y,z);
default:
return swap_BANG___14902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14902.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__15015){
var iref = cljs.core.first(arglist__15015);
var f = cljs.core.first(cljs.core.next(arglist__15015));
var args = cljs.core.rest(cljs.core.next(arglist__15015));
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
var gensym__15039 = (function (){
return gensym.call(null,"G__");
});
var gensym__15040 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15039.call(this);
case  1 :
return gensym__15040.call(this,prefix_string);
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
var this__15048 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15048.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15053 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15053.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15053.state,this__15053.f);
}
return cljs.core.deref.call(null,this__15053.state);
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
delay.cljs$lang$applyTo = (function (arglist__15063){
var body = cljs.core.seq( arglist__15063 );;
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
var map__15132__15133 = options;
var map__15132__15134 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15132__15133))?cljs.core.apply.call(null,cljs.core.hash_map,map__15132__15133):map__15132__15133);
var keywordize_keys__15135 = cljs.core.get.call(null,map__15132__15134,"﷐'keywordize-keys");
var keyfn__15137 = (cljs.core.truth_(keywordize_keys__15135)?cljs.core.keyword:cljs.core.str);
var f__15143 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15142 = (function iter__15138(s__15139){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15139__15140 = s__15139;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15139__15140)))
{var k__15141 = cljs.core.first.call(null,s__15139__15140);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15137.call(null,k__15141),thisfn.call(null,(x[k__15141]))]),iter__15138.call(null,cljs.core.rest.call(null,s__15139__15140)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15142.call(null,cljs.core.js_keys.call(null,x));
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

return f__15143.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15159){
var x = cljs.core.first(arglist__15159);
var options = cljs.core.rest(arglist__15159);
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
var mem__15164 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15172__delegate = function (args){
var temp__3695__auto____15166 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15164),args);

if(cljs.core.truth_(temp__3695__auto____15166))
{var v__15167 = temp__3695__auto____15166;

return v__15167;
} else
{var ret__15170 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15164,cljs.core.assoc,args,ret__15170);
return ret__15170;
}
};
var G__15172 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15172__delegate.call(this, args);
};
G__15172.cljs$lang$maxFixedArity = 0;
G__15172.cljs$lang$applyTo = (function (arglist__15174){
var args = cljs.core.seq( arglist__15174 );;
return G__15172__delegate.call(this, args);
});
return G__15172;
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
var trampoline__15196 = (function (f){
while(true){
var ret__15194 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15194)))
{{
var G__15199 = ret__15194;
f = G__15199;
continue;
}
} else
{return ret__15194;
}
break;
}
});
var trampoline__15197 = (function() { 
var G__15200__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15200 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15200__delegate.call(this, f, args);
};
G__15200.cljs$lang$maxFixedArity = 1;
G__15200.cljs$lang$applyTo = (function (arglist__15201){
var f = cljs.core.first(arglist__15201);
var args = cljs.core.rest(arglist__15201);
return G__15200__delegate.call(this, f, args);
});
return G__15200;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15196.call(this,f);
default:
return trampoline__15197.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15197.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15202 = (function (){
return rand.call(null,1);
});
var rand__15203 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15202.call(this);
case  1 :
return rand__15203.call(this,n);
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
var k__15215 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15215,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15215,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15247 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15249 = (function (h,child,parent){
var or__3548__auto____15229 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15229))
{return or__3548__auto____15229;
} else
{var or__3548__auto____15233 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15233))
{return or__3548__auto____15233;
} else
{var and__3546__auto____15235 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15235))
{var and__3546__auto____15236 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15236))
{var and__3546__auto____15238 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15238))
{var ret__15240 = true;
var i__15241 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15242 = cljs.core.not.call(null,ret__15240);

if(cljs.core.truth_(or__3548__auto____15242))
{return or__3548__auto____15242;
} else
{return cljs.core._EQ_.call(null,i__15241,cljs.core.count.call(null,parent));
}
})()))
{return ret__15240;
} else
{{
var G__15258 = isa_QMARK_.call(null,h,child.call(null,i__15241),parent.call(null,i__15241));
var G__15259 = (i__15241 + 1);
ret__15240 = G__15258;
i__15241 = G__15259;
continue;
}
}
break;
}
} else
{return and__3546__auto____15238;
}
} else
{return and__3546__auto____15236;
}
} else
{return and__3546__auto____15235;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15247.call(this,h,child);
case  3 :
return isa_QMARK___15249.call(this,h,child,parent);
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
var parents__15267 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15268 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15267.call(this,h);
case  2 :
return parents__15268.call(this,h,tag);
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
var ancestors__15274 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15275 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15274.call(this,h);
case  2 :
return ancestors__15275.call(this,h,tag);
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
var descendants__15319 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15320 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15319.call(this,h);
case  2 :
return descendants__15320.call(this,h,tag);
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
var derive__15361 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15362 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15339 = "﷐'parents".call(null,h);
var td__15340 = "﷐'descendants".call(null,h);
var ta__15341 = "﷐'ancestors".call(null,h);
var tf__15346 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15354 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15339.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15341.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15341.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15339,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15346.call(null,"﷐'ancestors".call(null,h),tag,td__15340,parent,ta__15341),"﷐'descendants":tf__15346.call(null,"﷐'descendants".call(null,h),parent,ta__15341,tag,td__15340)});
})());

if(cljs.core.truth_(or__3548__auto____15354))
{return or__3548__auto____15354;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15361.call(this,h,tag);
case  3 :
return derive__15362.call(this,h,tag,parent);
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
var underive__15398 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15422 = (function (h,tag,parent){
var parentMap__15373 = "﷐'parents".call(null,h);
var childsParents__15390 = (cljs.core.truth_(parentMap__15373.call(null,tag))?cljs.core.disj.call(null,parentMap__15373.call(null,tag),parent):cljs.core.set([]));
var newParents__15394 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15390))?cljs.core.assoc.call(null,parentMap__15373,tag,childsParents__15390):cljs.core.dissoc.call(null,parentMap__15373,tag));
var deriv_seq__15395 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15327_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15327_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15327_SHARP_),cljs.core.second.call(null,p1__15327_SHARP_)));
}),cljs.core.seq.call(null,newParents__15394)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15373.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15329_SHARP_,p2__15330_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15329_SHARP_,p2__15330_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15395));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15398.call(this,h,tag);
case  3 :
return underive__15422.call(this,h,tag,parent);
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
var xprefs__15440 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15442 = (cljs.core.truth_((function (){var and__3546__auto____15441 = xprefs__15440;

if(cljs.core.truth_(and__3546__auto____15441))
{return xprefs__15440.call(null,y);
} else
{return and__3546__auto____15441;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15442))
{return or__3548__auto____15442;
} else
{var or__3548__auto____15445 = (function (){var ps__15444 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15444) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15444),prefer_table)))
{} else
{}
{
var G__15452 = cljs.core.rest.call(null,ps__15444);
ps__15444 = G__15452;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15445))
{return or__3548__auto____15445;
} else
{var or__3548__auto____15449 = (function (){var ps__15447 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15447) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15447),y,prefer_table)))
{} else
{}
{
var G__15454 = cljs.core.rest.call(null,ps__15447);
ps__15447 = G__15454;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15458 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15472 = cljs.core.reduce.call(null,(function (be,p__15464){
var vec__15465__15466 = p__15464;
var k__15467 = cljs.core.nth.call(null,vec__15465__15466,0,null);
var ___15468 = cljs.core.nth.call(null,vec__15465__15466,1,null);
var e__15469 = vec__15465__15466;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15467)))
{var be2__15471 = (cljs.core.truth_((function (){var or__3548__auto____15470 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15470))
{return or__3548__auto____15470;
} else
{return cljs.core.dominates.call(null,k__15467,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15469:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15471),k__15467,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15467," and ",cljs.core.first.call(null,be2__15471),", and neither is preferred")));
}
return be2__15471;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15472))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15472));
return cljs.core.second.call(null,best_entry__15472);
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
if(cljs.core.truth_((function (){var and__3546__auto____15477 = mf;

if(cljs.core.truth_(and__3546__auto____15477))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15477;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15479 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15479))
{return or__3548__auto____15479;
} else
{var or__3548__auto____15480 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15480))
{return or__3548__auto____15480;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15483 = mf;

if(cljs.core.truth_(and__3546__auto____15483))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15483;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15485 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15485))
{return or__3548__auto____15485;
} else
{var or__3548__auto____15487 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15487))
{return or__3548__auto____15487;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15488 = mf;

if(cljs.core.truth_(and__3546__auto____15488))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15488;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15489 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15489))
{return or__3548__auto____15489;
} else
{var or__3548__auto____15490 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15490))
{return or__3548__auto____15490;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15495 = mf;

if(cljs.core.truth_(and__3546__auto____15495))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15495;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15498 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15498))
{return or__3548__auto____15498;
} else
{var or__3548__auto____15499 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15499))
{return or__3548__auto____15499;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15503 = mf;

if(cljs.core.truth_(and__3546__auto____15503))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15503;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15505 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15505))
{return or__3548__auto____15505;
} else
{var or__3548__auto____15507 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15507))
{return or__3548__auto____15507;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15516 = mf;

if(cljs.core.truth_(and__3546__auto____15516))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15516;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15518 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15518))
{return or__3548__auto____15518;
} else
{var or__3548__auto____15519 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15519))
{return or__3548__auto____15519;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15521 = mf;

if(cljs.core.truth_(and__3546__auto____15521))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15521;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15524 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15524))
{return or__3548__auto____15524;
} else
{var or__3548__auto____15526 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15526))
{return or__3548__auto____15526;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15527 = mf;

if(cljs.core.truth_(and__3546__auto____15527))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15527;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15529 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15529))
{return or__3548__auto____15529;
} else
{var or__3548__auto____15530 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15530))
{return or__3548__auto____15530;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15580 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15581 = cljs.core._get_method.call(null,mf,dispatch_val__15580);

if(cljs.core.truth_(target_fn__15581))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15580)));
}
return cljs.core.apply.call(null,target_fn__15581,args);
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
var this__15585 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15586 = this;
cljs.core.swap_BANG_.call(null,this__15586.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15586.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15586.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15586.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15594 = this;
cljs.core.swap_BANG_.call(null,this__15594.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15594.method_cache,this__15594.method_table,this__15594.cached_hierarchy,this__15594.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15597 = this;
cljs.core.swap_BANG_.call(null,this__15597.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15597.method_cache,this__15597.method_table,this__15597.cached_hierarchy,this__15597.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15603 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15603.cached_hierarchy),cljs.core.deref.call(null,this__15603.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15603.method_cache,this__15603.method_table,this__15603.cached_hierarchy,this__15603.hierarchy);
}
var temp__3695__auto____15612 = cljs.core.deref.call(null,this__15603.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15612))
{var target_fn__15613 = temp__3695__auto____15612;

return target_fn__15613;
} else
{var temp__3695__auto____15615 = cljs.core.find_and_cache_best_method.call(null,this__15603.name,dispatch_val,this__15603.hierarchy,this__15603.method_table,this__15603.prefer_table,this__15603.method_cache,this__15603.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15615))
{var target_fn__15617 = temp__3695__auto____15615;

return target_fn__15617;
} else
{return cljs.core.deref.call(null,this__15603.method_table).call(null,this__15603.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15618 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15618.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15618.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15618.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15618.method_cache,this__15618.method_table,this__15618.cached_hierarchy,this__15618.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15624 = this;
return cljs.core.deref.call(null,this__15624.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15629 = this;
return cljs.core.deref.call(null,this__15629.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15633 = this;
return cljs.core.do_dispatch.call(null,mf,this__15633.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15657__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15657 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15657__delegate.call(this, _, args);
};
G__15657.cljs$lang$maxFixedArity = 1;
G__15657.cljs$lang$applyTo = (function (arglist__15659){
var _ = cljs.core.first(arglist__15659);
var args = cljs.core.rest(arglist__15659);
return G__15657__delegate.call(this, _, args);
});
return G__15657;
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
