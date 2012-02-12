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
var _invoke__7584 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7259 = this$;

if(cljs.core.truth_(and__3546__auto____7259))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7259;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7260 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7260))
{return or__3548__auto____7260;
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
var _invoke__7585 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7264 = this$;

if(cljs.core.truth_(and__3546__auto____7264))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7264;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7267 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{var or__3548__auto____7318 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7318))
{return or__3548__auto____7318;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7586 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7319 = this$;

if(cljs.core.truth_(and__3546__auto____7319))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7319;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7320 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7320))
{return or__3548__auto____7320;
} else
{var or__3548__auto____7321 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7587 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{var or__3548__auto____7327 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7588 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = this$;

if(cljs.core.truth_(and__3546__auto____7329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7331 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{var or__3548__auto____7333 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7333))
{return or__3548__auto____7333;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7589 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7336 = this$;

if(cljs.core.truth_(and__3546__auto____7336))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7336;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7338 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{var or__3548__auto____7340 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7590 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7342 = this$;

if(cljs.core.truth_(and__3546__auto____7342))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7342;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7344 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7344))
{return or__3548__auto____7344;
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
var _invoke__7591 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7348 = this$;

if(cljs.core.truth_(and__3546__auto____7348))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7348;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7350 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{var or__3548__auto____7352 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7352))
{return or__3548__auto____7352;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7592 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7354 = this$;

if(cljs.core.truth_(and__3546__auto____7354))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7354;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
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
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7593 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7357 = this$;

if(cljs.core.truth_(and__3546__auto____7357))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7357;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7359 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7359))
{return or__3548__auto____7359;
} else
{var or__3548__auto____7360 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7360))
{return or__3548__auto____7360;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7594 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7361 = this$;

if(cljs.core.truth_(and__3546__auto____7361))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7361;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7362 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{var or__3548__auto____7363 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7363))
{return or__3548__auto____7363;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7595 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7364 = this$;

if(cljs.core.truth_(and__3546__auto____7364))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7364;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7365 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7365))
{return or__3548__auto____7365;
} else
{var or__3548__auto____7366 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7366))
{return or__3548__auto____7366;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7596 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7367 = this$;

if(cljs.core.truth_(and__3546__auto____7367))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7367;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7368 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{var or__3548__auto____7369 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7597 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7370 = this$;

if(cljs.core.truth_(and__3546__auto____7370))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7370;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7598 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7373 = this$;

if(cljs.core.truth_(and__3546__auto____7373))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7373;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7374 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{var or__3548__auto____7375 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7599 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7376 = this$;

if(cljs.core.truth_(and__3546__auto____7376))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7376;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7377 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7377))
{return or__3548__auto____7377;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7600 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7379 = this$;

if(cljs.core.truth_(and__3546__auto____7379))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7379;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7601 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7386 = this$;

if(cljs.core.truth_(and__3546__auto____7386))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7386;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7388 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{var or__3548__auto____7389 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7602 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7390 = this$;

if(cljs.core.truth_(and__3546__auto____7390))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7390;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7393 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{var or__3548__auto____7394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7603 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{var or__3548__auto____7459 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7459))
{return or__3548__auto____7459;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7604 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7476 = this$;

if(cljs.core.truth_(and__3546__auto____7476))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7476;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7582 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7582))
{return or__3548__auto____7582;
} else
{var or__3548__auto____7583 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7583))
{return or__3548__auto____7583;
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
return _invoke__7584.call(this,this$);
case  2 :
return _invoke__7585.call(this,this$,a);
case  3 :
return _invoke__7586.call(this,this$,a,b);
case  4 :
return _invoke__7587.call(this,this$,a,b,c);
case  5 :
return _invoke__7588.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7589.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7590.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7591.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7592.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7593.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7594.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7595.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7596.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7597.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7598.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7599.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7600.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7601.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7602.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7603.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7604.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7703 = coll;

if(cljs.core.truth_(and__3546__auto____7703))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7703;
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
if(cljs.core.truth_((function (){var and__3546__auto____7715 = coll;

if(cljs.core.truth_(and__3546__auto____7715))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7715;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7716 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7716))
{return or__3548__auto____7716;
} else
{var or__3548__auto____7717 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7717))
{return or__3548__auto____7717;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7718 = coll;

if(cljs.core.truth_(and__3546__auto____7718))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7718;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7719 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7720 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
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
var _nth__7845 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7724 = coll;

if(cljs.core.truth_(and__3546__auto____7724))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7724;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
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
})().call(null,coll,n);
}
});
var _nth__7846 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7769 = coll;

if(cljs.core.truth_(and__3546__auto____7769))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7769;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7771 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7771))
{return or__3548__auto____7771;
} else
{var or__3548__auto____7773 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7773))
{return or__3548__auto____7773;
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
return _nth__7845.call(this,coll,n);
case  3 :
return _nth__7846.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7854 = coll;

if(cljs.core.truth_(and__3546__auto____7854))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7854;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7855 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{var or__3548__auto____7856 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7856))
{return or__3548__auto____7856;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7857 = coll;

if(cljs.core.truth_(and__3546__auto____7857))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7857;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7858 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{var or__3548__auto____7859 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7859))
{return or__3548__auto____7859;
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
var _lookup__7872 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7863 = o;

if(cljs.core.truth_(and__3546__auto____7863))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7863;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7865 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{var or__3548__auto____7866 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7866))
{return or__3548__auto____7866;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7873 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7869 = o;

if(cljs.core.truth_(and__3546__auto____7869))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7869;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7870 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7870))
{return or__3548__auto____7870;
} else
{var or__3548__auto____7871 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7871))
{return or__3548__auto____7871;
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
return _lookup__7872.call(this,o,k);
case  3 :
return _lookup__7873.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7876 = coll;

if(cljs.core.truth_(and__3546__auto____7876))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7876;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7878 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{var or__3548__auto____7879 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7879))
{return or__3548__auto____7879;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7882 = coll;

if(cljs.core.truth_(and__3546__auto____7882))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7882;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7891 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7891))
{return or__3548__auto____7891;
} else
{var or__3548__auto____7892 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7908 = coll;

if(cljs.core.truth_(and__3546__auto____7908))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7908;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7921 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{var or__3548__auto____7923 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7923))
{return or__3548__auto____7923;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7924 = coll;

if(cljs.core.truth_(and__3546__auto____7924))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7924;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7925 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{var or__3548__auto____7926 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7926))
{return or__3548__auto____7926;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7927 = coll;

if(cljs.core.truth_(and__3546__auto____7927))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7927;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7928 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7928))
{return or__3548__auto____7928;
} else
{var or__3548__auto____7929 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = coll;

if(cljs.core.truth_(and__3546__auto____7930))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7930;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7952 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7954 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7961 = coll;

if(cljs.core.truth_(and__3546__auto____7961))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7961;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7965 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7965))
{return or__3548__auto____7965;
} else
{var or__3548__auto____7967 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7967))
{return or__3548__auto____7967;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7971 = o;

if(cljs.core.truth_(and__3546__auto____7971))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7971;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7973 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{var or__3548__auto____7975 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = o;

if(cljs.core.truth_(and__3546__auto____7980))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7980;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
} else
{var or__3548__auto____7984 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7992 = o;

if(cljs.core.truth_(and__3546__auto____7992))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7992;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7995 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{var or__3548__auto____7997 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8007 = o;

if(cljs.core.truth_(and__3546__auto____8007))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8007;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8008 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{var or__3548__auto____8009 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
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
var _reduce__8091 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8064 = coll;

if(cljs.core.truth_(and__3546__auto____8064))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8064;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8092 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8088 = coll;

if(cljs.core.truth_(and__3546__auto____8088))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8088;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8089 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8089))
{return or__3548__auto____8089;
} else
{var or__3548__auto____8090 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8090))
{return or__3548__auto____8090;
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
return _reduce__8091.call(this,coll,f);
case  3 :
return _reduce__8092.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8097 = o;

if(cljs.core.truth_(and__3546__auto____8097))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8097;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8099 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
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
if(cljs.core.truth_((function (){var and__3546__auto____8103 = o;

if(cljs.core.truth_(and__3546__auto____8103))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8103;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8105 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8105))
{return or__3548__auto____8105;
} else
{var or__3548__auto____8107 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8107))
{return or__3548__auto____8107;
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
{return (function (){var or__3548__auto____8111 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{var or__3548__auto____8113 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
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
if(cljs.core.truth_((function (){var and__3546__auto____8116 = o;

if(cljs.core.truth_(and__3546__auto____8116))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8116;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8119 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{var or__3548__auto____8121 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
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
{return (function (){var or__3548__auto____8168 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{var or__3548__auto____8169 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8176 = this$;

if(cljs.core.truth_(and__3546__auto____8176))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8176;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8177 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8177))
{return or__3548__auto____8177;
} else
{var or__3548__auto____8178 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8178))
{return or__3548__auto____8178;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8179 = this$;

if(cljs.core.truth_(and__3546__auto____8179))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8179;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8180 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8180))
{return or__3548__auto____8180;
} else
{var or__3548__auto____8181 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8181))
{return or__3548__auto____8181;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8182 = this$;

if(cljs.core.truth_(and__3546__auto____8182))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8182;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8183 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8183))
{return or__3548__auto____8183;
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
var G__8213 = null;
var G__8213__8214 = (function (o,k){
return null;
});
var G__8213__8215 = (function (o,k,not_found){
return not_found;
});
G__8213 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8213__8214.call(this,o,k);
case  3 :
return G__8213__8215.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8213;
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
var G__8217 = null;
var G__8217__8218 = (function (_,f){
return f.call(null);
});
var G__8217__8219 = (function (_,f,start){
return start;
});
G__8217 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8217__8218.call(this,_,f);
case  3 :
return G__8217__8219.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8217;
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
var G__8221 = null;
var G__8221__8222 = (function (_,n){
return null;
});
var G__8221__8223 = (function (_,n,not_found){
return not_found;
});
G__8221 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8221__8222.call(this,_,n);
case  3 :
return G__8221__8223.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8221;
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
var ci_reduce__8275 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8267 = cljs.core._nth.call(null,cicoll,0);
var n__8268 = 1;

while(true){
if(cljs.core.truth_((n__8268 < cljs.core._count.call(null,cicoll))))
{{
var G__8283 = f.call(null,val__8267,cljs.core._nth.call(null,cicoll,n__8268));
var G__8287 = (n__8268 + 1);
val__8267 = G__8283;
n__8268 = G__8287;
continue;
}
} else
{return val__8267;
}
break;
}
}
});
var ci_reduce__8276 = (function (cicoll,f,val){
var val__8269 = val;
var n__8270 = 0;

while(true){
if(cljs.core.truth_((n__8270 < cljs.core._count.call(null,cicoll))))
{{
var G__8290 = f.call(null,val__8269,cljs.core._nth.call(null,cicoll,n__8270));
var G__8291 = (n__8270 + 1);
val__8269 = G__8290;
n__8270 = G__8291;
continue;
}
} else
{return val__8269;
}
break;
}
});
var ci_reduce__8277 = (function (cicoll,f,val,idx){
var val__8271 = val;
var n__8272 = idx;

while(true){
if(cljs.core.truth_((n__8272 < cljs.core._count.call(null,cicoll))))
{{
var G__8293 = f.call(null,val__8271,cljs.core._nth.call(null,cicoll,n__8272));
var G__8294 = (n__8272 + 1);
val__8271 = G__8293;
n__8272 = G__8294;
continue;
}
} else
{return val__8271;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8275.call(this,cicoll,f);
case  3 :
return ci_reduce__8276.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8277.call(this,cicoll,f,val,idx);
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
var this__8305 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8351 = null;
var G__8351__8355 = (function (_,f){
var this__8308 = this;
return cljs.core.ci_reduce.call(null,this__8308.a,f,(this__8308.a[this__8308.i]),(this__8308.i + 1));
});
var G__8351__8356 = (function (_,f,start){
var this__8311 = this;
return cljs.core.ci_reduce.call(null,this__8311.a,f,start,this__8311.i);
});
G__8351 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8351__8355.call(this,_,f);
case  3 :
return G__8351__8356.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8351;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8315 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8318 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8371 = null;
var G__8371__8372 = (function (coll,n){
var this__8321 = this;
var i__8327 = (n + this__8321.i);

if(cljs.core.truth_((i__8327 < this__8321.a.length)))
{return (this__8321.a[i__8327]);
} else
{return null;
}
});
var G__8371__8373 = (function (coll,n,not_found){
var this__8331 = this;
var i__8335 = (n + this__8331.i);

if(cljs.core.truth_((i__8335 < this__8331.a.length)))
{return (this__8331.a[i__8335]);
} else
{return not_found;
}
});
G__8371 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8371__8372.call(this,coll,n);
case  3 :
return G__8371__8373.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8371;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8341 = this;
return (this__8341.a.length - this__8341.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8343 = this;
return (this__8343.a[this__8343.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8347 = this;
if(cljs.core.truth_(((this__8347.i + 1) < this__8347.a.length)))
{return (new cljs.core.IndexedSeq(this__8347.a,(this__8347.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8349 = this;
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
var G__8409 = null;
var G__8409__8411 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8409__8412 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8409 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8409__8411.call(this,array,f);
case  3 :
return G__8409__8412.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8409;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8416 = null;
var G__8416__8417 = (function (array,k){
return (array[k]);
});
var G__8416__8418 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8416 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8416__8417.call(this,array,k);
case  3 :
return G__8416__8418.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8416;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8422 = null;
var G__8422__8423 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8422__8424 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8422 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8422__8423.call(this,array,n);
case  3 :
return G__8422__8424.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8422;
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
var temp__3698__auto____8476 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8476))
{var s__8477 = temp__3698__auto____8476;

return cljs.core._first.call(null,s__8477);
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
var G__8480 = cljs.core.next.call(null,s);
s = G__8480;
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
var s__8481 = cljs.core.seq.call(null,x);
var n__8482 = 0;

while(true){
if(cljs.core.truth_(s__8481))
{{
var G__8483 = cljs.core.next.call(null,s__8481);
var G__8484 = (n__8482 + 1);
s__8481 = G__8483;
n__8482 = G__8484;
continue;
}
} else
{return n__8482;
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
var conj__8495 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8496 = (function() { 
var G__8498__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8499 = conj.call(null,coll,x);
var G__8500 = cljs.core.first.call(null,xs);
var G__8501 = cljs.core.next.call(null,xs);
coll = G__8499;
x = G__8500;
xs = G__8501;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8498 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8498__delegate.call(this, coll, x, xs);
};
G__8498.cljs$lang$maxFixedArity = 2;
G__8498.cljs$lang$applyTo = (function (arglist__8502){
var coll = cljs.core.first(arglist__8502);
var x = cljs.core.first(cljs.core.next(arglist__8502));
var xs = cljs.core.rest(cljs.core.next(arglist__8502));
return G__8498__delegate.call(this, coll, x, xs);
});
return G__8498;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8495.call(this,coll,x);
default:
return conj__8496.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8496.cljs$lang$applyTo;
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
var nth__8524 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8525 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8524.call(this,coll,n);
case  3 :
return nth__8525.call(this,coll,n,not_found);
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
var get__8540 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8541 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8540.call(this,o,k);
case  3 :
return get__8541.call(this,o,k,not_found);
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
var assoc__8575 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8576 = (function() { 
var G__8578__delegate = function (coll,k,v,kvs){
while(true){
var ret__8547 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8579 = ret__8547;
var G__8580 = cljs.core.first.call(null,kvs);
var G__8581 = cljs.core.second.call(null,kvs);
var G__8583 = cljs.core.nnext.call(null,kvs);
coll = G__8579;
k = G__8580;
v = G__8581;
kvs = G__8583;
continue;
}
} else
{return ret__8547;
}
break;
}
};
var G__8578 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8578__delegate.call(this, coll, k, v, kvs);
};
G__8578.cljs$lang$maxFixedArity = 3;
G__8578.cljs$lang$applyTo = (function (arglist__8589){
var coll = cljs.core.first(arglist__8589);
var k = cljs.core.first(cljs.core.next(arglist__8589));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8589)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8589)));
return G__8578__delegate.call(this, coll, k, v, kvs);
});
return G__8578;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8575.call(this,coll,k,v);
default:
return assoc__8576.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8576.cljs$lang$applyTo;
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
var dissoc__8597 = (function (coll){
return coll;
});
var dissoc__8598 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8599 = (function() { 
var G__8608__delegate = function (coll,k,ks){
while(true){
var ret__8592 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8610 = ret__8592;
var G__8611 = cljs.core.first.call(null,ks);
var G__8613 = cljs.core.next.call(null,ks);
coll = G__8610;
k = G__8611;
ks = G__8613;
continue;
}
} else
{return ret__8592;
}
break;
}
};
var G__8608 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8608__delegate.call(this, coll, k, ks);
};
G__8608.cljs$lang$maxFixedArity = 2;
G__8608.cljs$lang$applyTo = (function (arglist__8621){
var coll = cljs.core.first(arglist__8621);
var k = cljs.core.first(cljs.core.next(arglist__8621));
var ks = cljs.core.rest(cljs.core.next(arglist__8621));
return G__8608__delegate.call(this, coll, k, ks);
});
return G__8608;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8597.call(this,coll);
case  2 :
return dissoc__8598.call(this,coll,k);
default:
return dissoc__8599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8599.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8623 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8624 = x__445__auto____8623;

if(cljs.core.truth_(and__3546__auto____8624))
{var and__3546__auto____8625 = x__445__auto____8623.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8625))
{return cljs.core.not.call(null,x__445__auto____8623.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8625;
}
} else
{return and__3546__auto____8624;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8623);
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
var disj__8636 = (function (coll){
return coll;
});
var disj__8637 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8638 = (function() { 
var G__8640__delegate = function (coll,k,ks){
while(true){
var ret__8635 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8642 = ret__8635;
var G__8643 = cljs.core.first.call(null,ks);
var G__8644 = cljs.core.next.call(null,ks);
coll = G__8642;
k = G__8643;
ks = G__8644;
continue;
}
} else
{return ret__8635;
}
break;
}
};
var G__8640 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8640__delegate.call(this, coll, k, ks);
};
G__8640.cljs$lang$maxFixedArity = 2;
G__8640.cljs$lang$applyTo = (function (arglist__8647){
var coll = cljs.core.first(arglist__8647);
var k = cljs.core.first(cljs.core.next(arglist__8647));
var ks = cljs.core.rest(cljs.core.next(arglist__8647));
return G__8640__delegate.call(this, coll, k, ks);
});
return G__8640;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8636.call(this,coll);
case  2 :
return disj__8637.call(this,coll,k);
default:
return disj__8638.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8638.cljs$lang$applyTo;
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
{var x__445__auto____8653 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8654 = x__445__auto____8653;

if(cljs.core.truth_(and__3546__auto____8654))
{var and__3546__auto____8656 = x__445__auto____8653.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8656))
{return cljs.core.not.call(null,x__445__auto____8653.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8656;
}
} else
{return and__3546__auto____8654;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8653);
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
{var x__445__auto____8682 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8684 = x__445__auto____8682;

if(cljs.core.truth_(and__3546__auto____8684))
{var and__3546__auto____8686 = x__445__auto____8682.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8686))
{return cljs.core.not.call(null,x__445__auto____8682.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8686;
}
} else
{return and__3546__auto____8684;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8682);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8693 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8694 = x__445__auto____8693;

if(cljs.core.truth_(and__3546__auto____8694))
{var and__3546__auto____8695 = x__445__auto____8693.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8695))
{return cljs.core.not.call(null,x__445__auto____8693.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8695;
}
} else
{return and__3546__auto____8694;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8693);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8712 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8714 = x__445__auto____8712;

if(cljs.core.truth_(and__3546__auto____8714))
{var and__3546__auto____8731 = x__445__auto____8712.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8731))
{return cljs.core.not.call(null,x__445__auto____8712.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8731;
}
} else
{return and__3546__auto____8714;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8712);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8765 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8766 = x__445__auto____8765;

if(cljs.core.truth_(and__3546__auto____8766))
{var and__3546__auto____8767 = x__445__auto____8765.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8767))
{return cljs.core.not.call(null,x__445__auto____8765.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8767;
}
} else
{return and__3546__auto____8766;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8765);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8774 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8775 = x__445__auto____8774;

if(cljs.core.truth_(and__3546__auto____8775))
{var and__3546__auto____8776 = x__445__auto____8774.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8776))
{return cljs.core.not.call(null,x__445__auto____8774.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8776;
}
} else
{return and__3546__auto____8775;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8774);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8783 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8785 = x__445__auto____8783;

if(cljs.core.truth_(and__3546__auto____8785))
{var and__3546__auto____8790 = x__445__auto____8783.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8790))
{return cljs.core.not.call(null,x__445__auto____8783.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8790;
}
} else
{return and__3546__auto____8785;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8783);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8799 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8799.push(key);
}));
return keys__8799;
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
{var x__445__auto____8836 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8838 = x__445__auto____8836;

if(cljs.core.truth_(and__3546__auto____8838))
{var and__3546__auto____8839 = x__445__auto____8836.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8839))
{return cljs.core.not.call(null,x__445__auto____8836.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8839;
}
} else
{return and__3546__auto____8838;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8836);
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
var and__3546__auto____8843 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8843))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8844 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8844))
{return or__3548__auto____8844;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8843;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8858 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8858))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8858;
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
var and__3546__auto____8867 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8867))
{return (n == n.toFixed());
} else
{return and__3546__auto____8867;
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
if(cljs.core.truth_((function (){var and__3546__auto____8873 = coll;

if(cljs.core.truth_(and__3546__auto____8873))
{var and__3546__auto____8874 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8874))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8874;
}
} else
{return and__3546__auto____8873;
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
var distinct_QMARK___8911 = (function (x){
return true;
});
var distinct_QMARK___8912 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8913 = (function() { 
var G__8915__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8905 = cljs.core.set([y,x]);
var xs__8906 = more;

while(true){
var x__8908 = cljs.core.first.call(null,xs__8906);
var etc__8909 = cljs.core.next.call(null,xs__8906);

if(cljs.core.truth_(xs__8906))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8905,x__8908)))
{return false;
} else
{{
var G__8917 = cljs.core.conj.call(null,s__8905,x__8908);
var G__8918 = etc__8909;
s__8905 = G__8917;
xs__8906 = G__8918;
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
var G__8915 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8915__delegate.call(this, x, y, more);
};
G__8915.cljs$lang$maxFixedArity = 2;
G__8915.cljs$lang$applyTo = (function (arglist__8921){
var x = cljs.core.first(arglist__8921);
var y = cljs.core.first(cljs.core.next(arglist__8921));
var more = cljs.core.rest(cljs.core.next(arglist__8921));
return G__8915__delegate.call(this, x, y, more);
});
return G__8915;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8911.call(this,x);
case  2 :
return distinct_QMARK___8912.call(this,x,y);
default:
return distinct_QMARK___8913.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8913.cljs$lang$applyTo;
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
var r__8930 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8930)))
{return r__8930;
} else
{if(cljs.core.truth_(r__8930))
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
{var a__8933 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8933,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8933);
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
var sort_by__8938 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__8939 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__8938.call(this,keyfn,comp);
case  3 :
return sort_by__8939.call(this,keyfn,comp,coll);
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
var reduce__8944 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__8945 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__8944.call(this,f,val);
case  3 :
return reduce__8945.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__8957 = (function (f,coll){
var temp__3695__auto____8950 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____8950))
{var s__8951 = temp__3695__auto____8950;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__8951),cljs.core.next.call(null,s__8951));
} else
{return f.call(null);
}
});
var seq_reduce__8958 = (function (f,val,coll){
var val__8955 = val;
var coll__8956 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__8956))
{{
var G__8960 = f.call(null,val__8955,cljs.core.first.call(null,coll__8956));
var G__8961 = cljs.core.next.call(null,coll__8956);
val__8955 = G__8960;
coll__8956 = G__8961;
continue;
}
} else
{return val__8955;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__8957.call(this,f,val);
case  3 :
return seq_reduce__8958.call(this,f,val,coll);
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
var _PLUS___9064 = (function (){
return 0;
});
var _PLUS___9066 = (function (x){
return x;
});
var _PLUS___9067 = (function (x,y){
return (x + y);
});
var _PLUS___9069 = (function() { 
var G__9071__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9071 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9071__delegate.call(this, x, y, more);
};
G__9071.cljs$lang$maxFixedArity = 2;
G__9071.cljs$lang$applyTo = (function (arglist__9072){
var x = cljs.core.first(arglist__9072);
var y = cljs.core.first(cljs.core.next(arglist__9072));
var more = cljs.core.rest(cljs.core.next(arglist__9072));
return G__9071__delegate.call(this, x, y, more);
});
return G__9071;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9064.call(this);
case  1 :
return _PLUS___9066.call(this,x);
case  2 :
return _PLUS___9067.call(this,x,y);
default:
return _PLUS___9069.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9069.cljs$lang$applyTo;
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
var ___9076 = (function (x){
return (- x);
});
var ___9077 = (function (x,y){
return (x - y);
});
var ___9078 = (function() { 
var G__9080__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9080 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9080__delegate.call(this, x, y, more);
};
G__9080.cljs$lang$maxFixedArity = 2;
G__9080.cljs$lang$applyTo = (function (arglist__9083){
var x = cljs.core.first(arglist__9083);
var y = cljs.core.first(cljs.core.next(arglist__9083));
var more = cljs.core.rest(cljs.core.next(arglist__9083));
return G__9080__delegate.call(this, x, y, more);
});
return G__9080;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9076.call(this,x);
case  2 :
return ___9077.call(this,x,y);
default:
return ___9078.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9078.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9091 = (function (){
return 1;
});
var _STAR___9092 = (function (x){
return x;
});
var _STAR___9093 = (function (x,y){
return (x * y);
});
var _STAR___9094 = (function() { 
var G__9096__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9096 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9096__delegate.call(this, x, y, more);
};
G__9096.cljs$lang$maxFixedArity = 2;
G__9096.cljs$lang$applyTo = (function (arglist__9114){
var x = cljs.core.first(arglist__9114);
var y = cljs.core.first(cljs.core.next(arglist__9114));
var more = cljs.core.rest(cljs.core.next(arglist__9114));
return G__9096__delegate.call(this, x, y, more);
});
return G__9096;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9091.call(this);
case  1 :
return _STAR___9092.call(this,x);
case  2 :
return _STAR___9093.call(this,x,y);
default:
return _STAR___9094.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9094.cljs$lang$applyTo;
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
var _SLASH___9120 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9121 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9130 = (function() { 
var G__9132__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9132 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9132__delegate.call(this, x, y, more);
};
G__9132.cljs$lang$maxFixedArity = 2;
G__9132.cljs$lang$applyTo = (function (arglist__9133){
var x = cljs.core.first(arglist__9133);
var y = cljs.core.first(cljs.core.next(arglist__9133));
var more = cljs.core.rest(cljs.core.next(arglist__9133));
return G__9132__delegate.call(this, x, y, more);
});
return G__9132;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9120.call(this,x);
case  2 :
return _SLASH___9121.call(this,x,y);
default:
return _SLASH___9130.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9130.cljs$lang$applyTo;
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
var _LT___9142 = (function (x){
return true;
});
var _LT___9143 = (function (x,y){
return (x < y);
});
var _LT___9144 = (function() { 
var G__9147__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9148 = y;
var G__9149 = cljs.core.first.call(null,more);
var G__9151 = cljs.core.next.call(null,more);
x = G__9148;
y = G__9149;
more = G__9151;
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
var G__9147 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9147__delegate.call(this, x, y, more);
};
G__9147.cljs$lang$maxFixedArity = 2;
G__9147.cljs$lang$applyTo = (function (arglist__9156){
var x = cljs.core.first(arglist__9156);
var y = cljs.core.first(cljs.core.next(arglist__9156));
var more = cljs.core.rest(cljs.core.next(arglist__9156));
return G__9147__delegate.call(this, x, y, more);
});
return G__9147;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9142.call(this,x);
case  2 :
return _LT___9143.call(this,x,y);
default:
return _LT___9144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9144.cljs$lang$applyTo;
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
var _LT__EQ___9161 = (function (x){
return true;
});
var _LT__EQ___9163 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9211 = (function() { 
var G__9213__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9214 = y;
var G__9215 = cljs.core.first.call(null,more);
var G__9216 = cljs.core.next.call(null,more);
x = G__9214;
y = G__9215;
more = G__9216;
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
var G__9213 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9213__delegate.call(this, x, y, more);
};
G__9213.cljs$lang$maxFixedArity = 2;
G__9213.cljs$lang$applyTo = (function (arglist__9222){
var x = cljs.core.first(arglist__9222);
var y = cljs.core.first(cljs.core.next(arglist__9222));
var more = cljs.core.rest(cljs.core.next(arglist__9222));
return G__9213__delegate.call(this, x, y, more);
});
return G__9213;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9161.call(this,x);
case  2 :
return _LT__EQ___9163.call(this,x,y);
default:
return _LT__EQ___9211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9211.cljs$lang$applyTo;
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
var _GT___9233 = (function (x){
return true;
});
var _GT___9234 = (function (x,y){
return (x > y);
});
var _GT___9235 = (function() { 
var G__9241__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9243 = y;
var G__9244 = cljs.core.first.call(null,more);
var G__9245 = cljs.core.next.call(null,more);
x = G__9243;
y = G__9244;
more = G__9245;
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
var G__9241 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9241__delegate.call(this, x, y, more);
};
G__9241.cljs$lang$maxFixedArity = 2;
G__9241.cljs$lang$applyTo = (function (arglist__9249){
var x = cljs.core.first(arglist__9249);
var y = cljs.core.first(cljs.core.next(arglist__9249));
var more = cljs.core.rest(cljs.core.next(arglist__9249));
return G__9241__delegate.call(this, x, y, more);
});
return G__9241;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9233.call(this,x);
case  2 :
return _GT___9234.call(this,x,y);
default:
return _GT___9235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9235.cljs$lang$applyTo;
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
var _GT__EQ___9307 = (function (x){
return true;
});
var _GT__EQ___9308 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9309 = (function() { 
var G__9311__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9312 = y;
var G__9313 = cljs.core.first.call(null,more);
var G__9314 = cljs.core.next.call(null,more);
x = G__9312;
y = G__9313;
more = G__9314;
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
var G__9311 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9311__delegate.call(this, x, y, more);
};
G__9311.cljs$lang$maxFixedArity = 2;
G__9311.cljs$lang$applyTo = (function (arglist__9315){
var x = cljs.core.first(arglist__9315);
var y = cljs.core.first(cljs.core.next(arglist__9315));
var more = cljs.core.rest(cljs.core.next(arglist__9315));
return G__9311__delegate.call(this, x, y, more);
});
return G__9311;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9307.call(this,x);
case  2 :
return _GT__EQ___9308.call(this,x,y);
default:
return _GT__EQ___9309.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9309.cljs$lang$applyTo;
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
var max__9352 = (function (x){
return x;
});
var max__9353 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9354 = (function() { 
var G__9363__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9363 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9363__delegate.call(this, x, y, more);
};
G__9363.cljs$lang$maxFixedArity = 2;
G__9363.cljs$lang$applyTo = (function (arglist__9366){
var x = cljs.core.first(arglist__9366);
var y = cljs.core.first(cljs.core.next(arglist__9366));
var more = cljs.core.rest(cljs.core.next(arglist__9366));
return G__9363__delegate.call(this, x, y, more);
});
return G__9363;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9352.call(this,x);
case  2 :
return max__9353.call(this,x,y);
default:
return max__9354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9354.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9371 = (function (x){
return x;
});
var min__9372 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9373 = (function() { 
var G__9375__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9375 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9375__delegate.call(this, x, y, more);
};
G__9375.cljs$lang$maxFixedArity = 2;
G__9375.cljs$lang$applyTo = (function (arglist__9382){
var x = cljs.core.first(arglist__9382);
var y = cljs.core.first(cljs.core.next(arglist__9382));
var more = cljs.core.rest(cljs.core.next(arglist__9382));
return G__9375__delegate.call(this, x, y, more);
});
return G__9375;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9371.call(this,x);
case  2 :
return min__9372.call(this,x,y);
default:
return min__9373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9373.cljs$lang$applyTo;
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
var rem__9434 = (n % d);

return cljs.core.fix.call(null,((n - rem__9434) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9435 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9435));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9541 = (function (){
return Math.random.call(null);
});
var rand__9542 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9541.call(this);
case  1 :
return rand__9542.call(this,n);
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
var _EQ__EQ___9585 = (function (x){
return true;
});
var _EQ__EQ___9586 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9587 = (function() { 
var G__9589__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9590 = y;
var G__9591 = cljs.core.first.call(null,more);
var G__9592 = cljs.core.next.call(null,more);
x = G__9590;
y = G__9591;
more = G__9592;
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
var G__9589 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9589__delegate.call(this, x, y, more);
};
G__9589.cljs$lang$maxFixedArity = 2;
G__9589.cljs$lang$applyTo = (function (arglist__9596){
var x = cljs.core.first(arglist__9596);
var y = cljs.core.first(cljs.core.next(arglist__9596));
var more = cljs.core.rest(cljs.core.next(arglist__9596));
return G__9589__delegate.call(this, x, y, more);
});
return G__9589;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9585.call(this,x);
case  2 :
return _EQ__EQ___9586.call(this,x,y);
default:
return _EQ__EQ___9587.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9587.cljs$lang$applyTo;
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
var n__9616 = n;
var xs__9617 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9618 = xs__9617;

if(cljs.core.truth_(and__3546__auto____9618))
{return (n__9616 > 0);
} else
{return and__3546__auto____9618;
}
})()))
{{
var G__9619 = (n__9616 - 1);
var G__9620 = cljs.core.next.call(null,xs__9617);
n__9616 = G__9619;
xs__9617 = G__9620;
continue;
}
} else
{return xs__9617;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9689 = null;
var G__9689__9690 = (function (coll,n){
var temp__3695__auto____9625 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9625))
{var xs__9630 = temp__3695__auto____9625;

return cljs.core.first.call(null,xs__9630);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9689__9691 = (function (coll,n,not_found){
var temp__3695__auto____9635 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9635))
{var xs__9638 = temp__3695__auto____9635;

return cljs.core.first.call(null,xs__9638);
} else
{return not_found;
}
});
G__9689 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9689__9690.call(this,coll,n);
case  3 :
return G__9689__9691.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9689;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9700 = (function (){
return "";
});
var str_STAR___9702 = (function (x){
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
var str_STAR___9703 = (function() { 
var G__9712__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9715 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9716 = cljs.core.next.call(null,more);
sb = G__9715;
more = G__9716;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9712 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9712__delegate.call(this, x, ys);
};
G__9712.cljs$lang$maxFixedArity = 1;
G__9712.cljs$lang$applyTo = (function (arglist__9720){
var x = cljs.core.first(arglist__9720);
var ys = cljs.core.rest(arglist__9720);
return G__9712__delegate.call(this, x, ys);
});
return G__9712;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9700.call(this);
case  1 :
return str_STAR___9702.call(this,x);
default:
return str_STAR___9703.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9703.cljs$lang$applyTo;
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
var str__9726 = (function (){
return "";
});
var str__9749 = (function (x){
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
var str__9750 = (function() { 
var G__9763__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9763 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9763__delegate.call(this, x, ys);
};
G__9763.cljs$lang$maxFixedArity = 1;
G__9763.cljs$lang$applyTo = (function (arglist__9768){
var x = cljs.core.first(arglist__9768);
var ys = cljs.core.rest(arglist__9768);
return G__9763__delegate.call(this, x, ys);
});
return G__9763;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9726.call(this);
case  1 :
return str__9749.call(this,x);
default:
return str__9750.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9750.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9777 = (function (s,start){
return s.substring(start);
});
var subs__9778 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9777.call(this,s,start);
case  3 :
return subs__9778.call(this,s,start,end);
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
var symbol__9782 = (function (name){
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
var symbol__9783 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9782.call(this,ns);
case  2 :
return symbol__9783.call(this,ns,name);
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
var keyword__9801 = (function (name){
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
var keyword__9802 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9801.call(this,ns);
case  2 :
return keyword__9802.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9806 = cljs.core.seq.call(null,x);
var ys__9807 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9806)))
{return cljs.core.nil_QMARK_.call(null,ys__9807);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9807)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9806),cljs.core.first.call(null,ys__9807))))
{{
var G__9808 = cljs.core.next.call(null,xs__9806);
var G__9809 = cljs.core.next.call(null,ys__9807);
xs__9806 = G__9808;
ys__9807 = G__9809;
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
return cljs.core.reduce.call(null,(function (p1__9810_SHARP_,p2__9811_SHARP_){
return cljs.core.hash_combine.call(null,p1__9810_SHARP_,cljs.core.hash.call(null,p2__9811_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9816__9817 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9816__9817))
{var G__9819__9823 = cljs.core.first.call(null,G__9816__9817);
var vec__9820__9825 = G__9819__9823;
var key_name__9826 = cljs.core.nth.call(null,vec__9820__9825,0,null);
var f__9827 = cljs.core.nth.call(null,vec__9820__9825,1,null);
var G__9816__9832 = G__9816__9817;

var G__9819__9833 = G__9819__9823;
var G__9816__9834 = G__9816__9832;

while(true){
var vec__9877__9882 = G__9819__9833;
var key_name__9890 = cljs.core.nth.call(null,vec__9877__9882,0,null);
var f__9891 = cljs.core.nth.call(null,vec__9877__9882,1,null);
var G__9816__9892 = G__9816__9834;

var str_name__9894 = cljs.core.name.call(null,key_name__9890);

obj[str_name__9894] = f__9891;
var temp__3698__auto____9896 = cljs.core.next.call(null,G__9816__9892);

if(cljs.core.truth_(temp__3698__auto____9896))
{var G__9816__9898 = temp__3698__auto____9896;

{
var G__9912 = cljs.core.first.call(null,G__9816__9898);
var G__9913 = G__9816__9898;
G__9819__9833 = G__9912;
G__9816__9834 = G__9913;
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
var this__9949 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9950 = this;
return (new cljs.core.List(this__9950.meta,o,coll,(this__9950.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9951 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9952 = this;
return this__9952.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9953 = this;
return this__9953.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9954 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9955 = this;
return this__9955.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9956 = this;
return this__9956.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9957 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9958 = this;
return (new cljs.core.List(meta,this__9958.first,this__9958.rest,this__9958.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9959 = this;
return this__9959.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9960 = this;
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
var this__9984 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9994 = this;
return (new cljs.core.List(this__9994.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9995 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9996 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9997 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9998 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9999 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10000 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10001 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10002 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10003 = this;
return this__10003.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10004 = this;
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
list.cljs$lang$applyTo = (function (arglist__10005){
var items = cljs.core.seq( arglist__10005 );;
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
var this__10006 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10007 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10008 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10009 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10009.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10010 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10011 = this;
return this__10011.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10012 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10012.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10012.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10013 = this;
return this__10013.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10014 = this;
return (new cljs.core.Cons(meta,this__10014.first,this__10014.rest));
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
var G__10078 = null;
var G__10078__10079 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10078__10080 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10078 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10078__10079.call(this,string,f);
case  3 :
return G__10078__10080.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10078;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10083 = null;
var G__10083__10084 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10083__10085 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10083 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10083__10084.call(this,string,k);
case  3 :
return G__10083__10085.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10083;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10087 = null;
var G__10087__10088 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10087__10089 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10087 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10087__10088.call(this,string,n);
case  3 :
return G__10087__10089.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10087;
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
var G__10095 = null;
var G__10095__10096 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10095__10097 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10095 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10095__10096.call(this,this$,coll);
case  3 :
return G__10095__10097.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10095;
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
var x__10099 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10099;
} else
{lazy_seq.x = x__10099.call(null);
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
var this__10105 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10107 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10108 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10110 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10110.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10112 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10114 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10115 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10116 = this;
return this__10116.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10118 = this;
return (new cljs.core.LazySeq(meta,this__10118.realized,this__10118.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10123 = cljs.core.array.call(null);

var s__10124 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10124)))
{ary__10123.push(cljs.core.first.call(null,s__10124));
{
var G__10125 = cljs.core.next.call(null,s__10124);
s__10124 = G__10125;
continue;
}
} else
{return ary__10123;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10213 = s;
var i__10214 = n;
var sum__10215 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10216 = (i__10214 > 0);

if(cljs.core.truth_(and__3546__auto____10216))
{return cljs.core.seq.call(null,s__10213);
} else
{return and__3546__auto____10216;
}
})()))
{{
var G__10218 = cljs.core.next.call(null,s__10213);
var G__10219 = (i__10214 - 1);
var G__10220 = (sum__10215 + 1);
s__10213 = G__10218;
i__10214 = G__10219;
sum__10215 = G__10220;
continue;
}
} else
{return sum__10215;
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
var concat__10224 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10225 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10226 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10221 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10221))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10221),concat.call(null,cljs.core.rest.call(null,s__10221),y));
} else
{return y;
}
})));
});
var concat__10227 = (function() { 
var G__10229__delegate = function (x,y,zs){
var cat__10223 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10222 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10222))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10222),cat.call(null,cljs.core.rest.call(null,xys__10222),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10223.call(null,concat.call(null,x,y),zs);
};
var G__10229 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10229__delegate.call(this, x, y, zs);
};
G__10229.cljs$lang$maxFixedArity = 2;
G__10229.cljs$lang$applyTo = (function (arglist__10230){
var x = cljs.core.first(arglist__10230);
var y = cljs.core.first(cljs.core.next(arglist__10230));
var zs = cljs.core.rest(cljs.core.next(arglist__10230));
return G__10229__delegate.call(this, x, y, zs);
});
return G__10229;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10224.call(this);
case  1 :
return concat__10225.call(this,x);
case  2 :
return concat__10226.call(this,x,y);
default:
return concat__10227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10227.cljs$lang$applyTo;
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
var list_STAR___10234 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10235 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10236 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10237 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10238 = (function() { 
var G__10240__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10240 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10240__delegate.call(this, a, b, c, d, more);
};
G__10240.cljs$lang$maxFixedArity = 4;
G__10240.cljs$lang$applyTo = (function (arglist__10241){
var a = cljs.core.first(arglist__10241);
var b = cljs.core.first(cljs.core.next(arglist__10241));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10241)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10241))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10241))));
return G__10240__delegate.call(this, a, b, c, d, more);
});
return G__10240;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10234.call(this,a);
case  2 :
return list_STAR___10235.call(this,a,b);
case  3 :
return list_STAR___10236.call(this,a,b,c);
case  4 :
return list_STAR___10237.call(this,a,b,c,d);
default:
return list_STAR___10238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10238.cljs$lang$applyTo;
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
var apply__10262 = (function (f,args){
var fixed_arity__10245 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10245 + 1)) <= fixed_arity__10245)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10263 = (function (f,x,args){
var arglist__10252 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10253 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10252,fixed_arity__10253) <= fixed_arity__10253)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10252));
} else
{return f.cljs$lang$applyTo(arglist__10252);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10252));
}
});
var apply__10264 = (function (f,x,y,args){
var arglist__10254 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10255 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10254,fixed_arity__10255) <= fixed_arity__10255)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10254));
} else
{return f.cljs$lang$applyTo(arglist__10254);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10254));
}
});
var apply__10265 = (function (f,x,y,z,args){
var arglist__10256 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10257 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10256,fixed_arity__10257) <= fixed_arity__10257)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10256));
} else
{return f.cljs$lang$applyTo(arglist__10256);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10256));
}
});
var apply__10266 = (function() { 
var G__10276__delegate = function (f,a,b,c,d,args){
var arglist__10258 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10259 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10258,fixed_arity__10259) <= fixed_arity__10259)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10258));
} else
{return f.cljs$lang$applyTo(arglist__10258);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10258));
}
};
var G__10276 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10276__delegate.call(this, f, a, b, c, d, args);
};
G__10276.cljs$lang$maxFixedArity = 5;
G__10276.cljs$lang$applyTo = (function (arglist__10277){
var f = cljs.core.first(arglist__10277);
var a = cljs.core.first(cljs.core.next(arglist__10277));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10277)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10277))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10277)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10277)))));
return G__10276__delegate.call(this, f, a, b, c, d, args);
});
return G__10276;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10262.call(this,f,a);
case  3 :
return apply__10263.call(this,f,a,b);
case  4 :
return apply__10264.call(this,f,a,b,c);
case  5 :
return apply__10265.call(this,f,a,b,c,d);
default:
return apply__10266.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10266.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10319){
var obj = cljs.core.first(arglist__10319);
var f = cljs.core.first(cljs.core.next(arglist__10319));
var args = cljs.core.rest(cljs.core.next(arglist__10319));
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
var not_EQ___10321 = (function (x){
return false;
});
var not_EQ___10322 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10323 = (function() { 
var G__10325__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10325 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10325__delegate.call(this, x, y, more);
};
G__10325.cljs$lang$maxFixedArity = 2;
G__10325.cljs$lang$applyTo = (function (arglist__10328){
var x = cljs.core.first(arglist__10328);
var y = cljs.core.first(cljs.core.next(arglist__10328));
var more = cljs.core.rest(cljs.core.next(arglist__10328));
return G__10325__delegate.call(this, x, y, more);
});
return G__10325;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10321.call(this,x);
case  2 :
return not_EQ___10322.call(this,x,y);
default:
return not_EQ___10323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10323.cljs$lang$applyTo;
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
var G__10335 = pred;
var G__10336 = cljs.core.next.call(null,coll);
pred = G__10335;
coll = G__10336;
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
{var or__3548__auto____10343 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10343))
{return or__3548__auto____10343;
} else
{{
var G__10344 = pred;
var G__10345 = cljs.core.next.call(null,coll);
pred = G__10344;
coll = G__10345;
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
var G__10352 = null;
var G__10352__10353 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10352__10354 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10352__10355 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10352__10356 = (function() { 
var G__10422__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10422 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10422__delegate.call(this, x, y, zs);
};
G__10422.cljs$lang$maxFixedArity = 2;
G__10422.cljs$lang$applyTo = (function (arglist__10424){
var x = cljs.core.first(arglist__10424);
var y = cljs.core.first(cljs.core.next(arglist__10424));
var zs = cljs.core.rest(cljs.core.next(arglist__10424));
return G__10422__delegate.call(this, x, y, zs);
});
return G__10422;
})()
;
G__10352 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10352__10353.call(this);
case  1 :
return G__10352__10354.call(this,x);
case  2 :
return G__10352__10355.call(this,x,y);
default:
return G__10352__10356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10352.cljs$lang$maxFixedArity = 2;
G__10352.cljs$lang$applyTo = G__10352__10356.cljs$lang$applyTo;
return G__10352;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10428__delegate = function (args){
return x;
};
var G__10428 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10428__delegate.call(this, args);
};
G__10428.cljs$lang$maxFixedArity = 0;
G__10428.cljs$lang$applyTo = (function (arglist__10429){
var args = cljs.core.seq( arglist__10429 );;
return G__10428__delegate.call(this, args);
});
return G__10428;
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
var comp__10449 = (function (){
return cljs.core.identity;
});
var comp__10450 = (function (f){
return f;
});
var comp__10451 = (function (f,g){
return (function() {
var G__10462 = null;
var G__10462__10463 = (function (){
return f.call(null,g.call(null));
});
var G__10462__10464 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10462__10465 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10462__10466 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10462__10467 = (function() { 
var G__10469__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10469 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10469__delegate.call(this, x, y, z, args);
};
G__10469.cljs$lang$maxFixedArity = 3;
G__10469.cljs$lang$applyTo = (function (arglist__10472){
var x = cljs.core.first(arglist__10472);
var y = cljs.core.first(cljs.core.next(arglist__10472));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10472)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10472)));
return G__10469__delegate.call(this, x, y, z, args);
});
return G__10469;
})()
;
G__10462 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10462__10463.call(this);
case  1 :
return G__10462__10464.call(this,x);
case  2 :
return G__10462__10465.call(this,x,y);
case  3 :
return G__10462__10466.call(this,x,y,z);
default:
return G__10462__10467.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10462.cljs$lang$maxFixedArity = 3;
G__10462.cljs$lang$applyTo = G__10462__10467.cljs$lang$applyTo;
return G__10462;
})()
});
var comp__10452 = (function (f,g,h){
return (function() {
var G__10473 = null;
var G__10473__10474 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10473__10475 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10473__10476 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10473__10477 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10473__10478 = (function() { 
var G__10480__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10480 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10480__delegate.call(this, x, y, z, args);
};
G__10480.cljs$lang$maxFixedArity = 3;
G__10480.cljs$lang$applyTo = (function (arglist__10483){
var x = cljs.core.first(arglist__10483);
var y = cljs.core.first(cljs.core.next(arglist__10483));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10483)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10483)));
return G__10480__delegate.call(this, x, y, z, args);
});
return G__10480;
})()
;
G__10473 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10473__10474.call(this);
case  1 :
return G__10473__10475.call(this,x);
case  2 :
return G__10473__10476.call(this,x,y);
case  3 :
return G__10473__10477.call(this,x,y,z);
default:
return G__10473__10478.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10473.cljs$lang$maxFixedArity = 3;
G__10473.cljs$lang$applyTo = G__10473__10478.cljs$lang$applyTo;
return G__10473;
})()
});
var comp__10453 = (function() { 
var G__10485__delegate = function (f1,f2,f3,fs){
var fs__10439 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10488__delegate = function (args){
var ret__10440 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10439),args);
var fs__10442 = cljs.core.next.call(null,fs__10439);

while(true){
if(cljs.core.truth_(fs__10442))
{{
var G__10489 = cljs.core.first.call(null,fs__10442).call(null,ret__10440);
var G__10490 = cljs.core.next.call(null,fs__10442);
ret__10440 = G__10489;
fs__10442 = G__10490;
continue;
}
} else
{return ret__10440;
}
break;
}
};
var G__10488 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10488__delegate.call(this, args);
};
G__10488.cljs$lang$maxFixedArity = 0;
G__10488.cljs$lang$applyTo = (function (arglist__10492){
var args = cljs.core.seq( arglist__10492 );;
return G__10488__delegate.call(this, args);
});
return G__10488;
})()
;
};
var G__10485 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10485__delegate.call(this, f1, f2, f3, fs);
};
G__10485.cljs$lang$maxFixedArity = 3;
G__10485.cljs$lang$applyTo = (function (arglist__10499){
var f1 = cljs.core.first(arglist__10499);
var f2 = cljs.core.first(cljs.core.next(arglist__10499));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10499)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10499)));
return G__10485__delegate.call(this, f1, f2, f3, fs);
});
return G__10485;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10449.call(this);
case  1 :
return comp__10450.call(this,f1);
case  2 :
return comp__10451.call(this,f1,f2);
case  3 :
return comp__10452.call(this,f1,f2,f3);
default:
return comp__10453.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10453.cljs$lang$applyTo;
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
var partial__10516 = (function (f,arg1){
return (function() { 
var G__10523__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10523 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10523__delegate.call(this, args);
};
G__10523.cljs$lang$maxFixedArity = 0;
G__10523.cljs$lang$applyTo = (function (arglist__10525){
var args = cljs.core.seq( arglist__10525 );;
return G__10523__delegate.call(this, args);
});
return G__10523;
})()
;
});
var partial__10517 = (function (f,arg1,arg2){
return (function() { 
var G__10528__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10528 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10528__delegate.call(this, args);
};
G__10528.cljs$lang$maxFixedArity = 0;
G__10528.cljs$lang$applyTo = (function (arglist__10530){
var args = cljs.core.seq( arglist__10530 );;
return G__10528__delegate.call(this, args);
});
return G__10528;
})()
;
});
var partial__10519 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10532__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10532 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10532__delegate.call(this, args);
};
G__10532.cljs$lang$maxFixedArity = 0;
G__10532.cljs$lang$applyTo = (function (arglist__10533){
var args = cljs.core.seq( arglist__10533 );;
return G__10532__delegate.call(this, args);
});
return G__10532;
})()
;
});
var partial__10520 = (function() { 
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
G__10535.cljs$lang$applyTo = (function (arglist__10536){
var args = cljs.core.seq( arglist__10536 );;
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
G__10534.cljs$lang$applyTo = (function (arglist__10537){
var f = cljs.core.first(arglist__10537);
var arg1 = cljs.core.first(cljs.core.next(arglist__10537));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10537)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10537))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10537))));
return G__10534__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10534;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10516.call(this,f,arg1);
case  3 :
return partial__10517.call(this,f,arg1,arg2);
case  4 :
return partial__10519.call(this,f,arg1,arg2,arg3);
default:
return partial__10520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10520.cljs$lang$applyTo;
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
var fnil__10548 = (function (f,x){
return (function() {
var G__10553 = null;
var G__10553__10554 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10553__10555 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10553__10556 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10553__10557 = (function() { 
var G__10564__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10564 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10564__delegate.call(this, a, b, c, ds);
};
G__10564.cljs$lang$maxFixedArity = 3;
G__10564.cljs$lang$applyTo = (function (arglist__10566){
var a = cljs.core.first(arglist__10566);
var b = cljs.core.first(cljs.core.next(arglist__10566));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10566)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10566)));
return G__10564__delegate.call(this, a, b, c, ds);
});
return G__10564;
})()
;
G__10553 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10553__10554.call(this,a);
case  2 :
return G__10553__10555.call(this,a,b);
case  3 :
return G__10553__10556.call(this,a,b,c);
default:
return G__10553__10557.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10553.cljs$lang$maxFixedArity = 3;
G__10553.cljs$lang$applyTo = G__10553__10557.cljs$lang$applyTo;
return G__10553;
})()
});
var fnil__10549 = (function (f,x,y){
return (function() {
var G__10568 = null;
var G__10568__10569 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10568__10570 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10568__10571 = (function() { 
var G__10579__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10579 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10579__delegate.call(this, a, b, c, ds);
};
G__10579.cljs$lang$maxFixedArity = 3;
G__10579.cljs$lang$applyTo = (function (arglist__10580){
var a = cljs.core.first(arglist__10580);
var b = cljs.core.first(cljs.core.next(arglist__10580));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10580)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10580)));
return G__10579__delegate.call(this, a, b, c, ds);
});
return G__10579;
})()
;
G__10568 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10568__10569.call(this,a,b);
case  3 :
return G__10568__10570.call(this,a,b,c);
default:
return G__10568__10571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10568.cljs$lang$maxFixedArity = 3;
G__10568.cljs$lang$applyTo = G__10568__10571.cljs$lang$applyTo;
return G__10568;
})()
});
var fnil__10550 = (function (f,x,y,z){
return (function() {
var G__10582 = null;
var G__10582__10583 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10582__10585 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10582__10586 = (function() { 
var G__10588__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10588 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10588__delegate.call(this, a, b, c, ds);
};
G__10588.cljs$lang$maxFixedArity = 3;
G__10588.cljs$lang$applyTo = (function (arglist__10594){
var a = cljs.core.first(arglist__10594);
var b = cljs.core.first(cljs.core.next(arglist__10594));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10594)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10594)));
return G__10588__delegate.call(this, a, b, c, ds);
});
return G__10588;
})()
;
G__10582 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10582__10583.call(this,a,b);
case  3 :
return G__10582__10585.call(this,a,b,c);
default:
return G__10582__10586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10582.cljs$lang$maxFixedArity = 3;
G__10582.cljs$lang$applyTo = G__10582__10586.cljs$lang$applyTo;
return G__10582;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10548.call(this,f,x);
case  3 :
return fnil__10549.call(this,f,x,y);
case  4 :
return fnil__10550.call(this,f,x,y,z);
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
var mapi__10616 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10608 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10608))
{var s__10609 = temp__3698__auto____10608;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10609)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10609)));
} else
{return null;
}
})));
});

return mapi__10616.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10628))
{var s__10632 = temp__3698__auto____10628;

var x__10638 = f.call(null,cljs.core.first.call(null,s__10632));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10638)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10632));
} else
{return cljs.core.cons.call(null,x__10638,keep.call(null,f,cljs.core.rest.call(null,s__10632)));
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
var keepi__10653 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10650 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10650))
{var s__10651 = temp__3698__auto____10650;

var x__10652 = f.call(null,idx,cljs.core.first.call(null,s__10651));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10652)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10651));
} else
{return cljs.core.cons.call(null,x__10652,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10651)));
}
} else
{return null;
}
})));
});

return keepi__10653.call(null,0,coll);
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
var every_pred__10923 = (function (p){
return (function() {
var ep1 = null;
var ep1__10929 = (function (){
return true;
});
var ep1__10930 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10931 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10660 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10660))
{return p.call(null,y);
} else
{return and__3546__auto____10660;
}
})());
});
var ep1__10932 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10661 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10661))
{var and__3546__auto____10662 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10662))
{return p.call(null,z);
} else
{return and__3546__auto____10662;
}
} else
{return and__3546__auto____10661;
}
})());
});
var ep1__10933 = (function() { 
var G__10938__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10669 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10669))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10669;
}
})());
};
var G__10938 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10938__delegate.call(this, x, y, z, args);
};
G__10938.cljs$lang$maxFixedArity = 3;
G__10938.cljs$lang$applyTo = (function (arglist__10940){
var x = cljs.core.first(arglist__10940);
var y = cljs.core.first(cljs.core.next(arglist__10940));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10940)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10940)));
return G__10938__delegate.call(this, x, y, z, args);
});
return G__10938;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10929.call(this);
case  1 :
return ep1__10930.call(this,x);
case  2 :
return ep1__10931.call(this,x,y);
case  3 :
return ep1__10932.call(this,x,y,z);
default:
return ep1__10933.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10933.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10924 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10943 = (function (){
return true;
});
var ep2__10944 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10670 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10670))
{return p2.call(null,x);
} else
{return and__3546__auto____10670;
}
})());
});
var ep2__10945 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10671 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10671))
{var and__3546__auto____10674 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10674))
{var and__3546__auto____10675 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10675))
{return p2.call(null,y);
} else
{return and__3546__auto____10675;
}
} else
{return and__3546__auto____10674;
}
} else
{return and__3546__auto____10671;
}
})());
});
var ep2__10946 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10677 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10677))
{var and__3546__auto____10678 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10678))
{var and__3546__auto____10854 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10854))
{var and__3546__auto____10859 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10859))
{var and__3546__auto____10873 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10873))
{return p2.call(null,z);
} else
{return and__3546__auto____10873;
}
} else
{return and__3546__auto____10859;
}
} else
{return and__3546__auto____10854;
}
} else
{return and__3546__auto____10678;
}
} else
{return and__3546__auto____10677;
}
})());
});
var ep2__10947 = (function() { 
var G__10966__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10874 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10874))
{return cljs.core.every_QMARK_.call(null,(function (p1__10642_SHARP_){
var and__3546__auto____10875 = p1.call(null,p1__10642_SHARP_);

if(cljs.core.truth_(and__3546__auto____10875))
{return p2.call(null,p1__10642_SHARP_);
} else
{return and__3546__auto____10875;
}
}),args);
} else
{return and__3546__auto____10874;
}
})());
};
var G__10966 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10966__delegate.call(this, x, y, z, args);
};
G__10966.cljs$lang$maxFixedArity = 3;
G__10966.cljs$lang$applyTo = (function (arglist__10970){
var x = cljs.core.first(arglist__10970);
var y = cljs.core.first(cljs.core.next(arglist__10970));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10970)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10970)));
return G__10966__delegate.call(this, x, y, z, args);
});
return G__10966;
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
var every_pred__10925 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10978 = (function (){
return true;
});
var ep3__10979 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10876 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10876))
{var and__3546__auto____10878 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10878))
{return p3.call(null,x);
} else
{return and__3546__auto____10878;
}
} else
{return and__3546__auto____10876;
}
})());
});
var ep3__10980 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10880 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10880))
{var and__3546__auto____10881 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10881))
{var and__3546__auto____10882 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10882))
{var and__3546__auto____10883 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10883))
{var and__3546__auto____10887 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10887))
{return p3.call(null,y);
} else
{return and__3546__auto____10887;
}
} else
{return and__3546__auto____10883;
}
} else
{return and__3546__auto____10882;
}
} else
{return and__3546__auto____10881;
}
} else
{return and__3546__auto____10880;
}
})());
});
var ep3__10981 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10891 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10891))
{var and__3546__auto____10892 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10892))
{var and__3546__auto____10893 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10893))
{var and__3546__auto____10895 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10895))
{var and__3546__auto____10896 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10896))
{var and__3546__auto____10897 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10897))
{var and__3546__auto____10898 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10898))
{var and__3546__auto____10900 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10900))
{return p3.call(null,z);
} else
{return and__3546__auto____10900;
}
} else
{return and__3546__auto____10898;
}
} else
{return and__3546__auto____10897;
}
} else
{return and__3546__auto____10896;
}
} else
{return and__3546__auto____10895;
}
} else
{return and__3546__auto____10893;
}
} else
{return and__3546__auto____10892;
}
} else
{return and__3546__auto____10891;
}
})());
});
var ep3__10982 = (function() { 
var G__11241__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10907 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10907))
{return cljs.core.every_QMARK_.call(null,(function (p1__10643_SHARP_){
var and__3546__auto____10908 = p1.call(null,p1__10643_SHARP_);

if(cljs.core.truth_(and__3546__auto____10908))
{var and__3546__auto____10909 = p2.call(null,p1__10643_SHARP_);

if(cljs.core.truth_(and__3546__auto____10909))
{return p3.call(null,p1__10643_SHARP_);
} else
{return and__3546__auto____10909;
}
} else
{return and__3546__auto____10908;
}
}),args);
} else
{return and__3546__auto____10907;
}
})());
};
var G__11241 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11241__delegate.call(this, x, y, z, args);
};
G__11241.cljs$lang$maxFixedArity = 3;
G__11241.cljs$lang$applyTo = (function (arglist__11243){
var x = cljs.core.first(arglist__11243);
var y = cljs.core.first(cljs.core.next(arglist__11243));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11243)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11243)));
return G__11241__delegate.call(this, x, y, z, args);
});
return G__11241;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10978.call(this);
case  1 :
return ep3__10979.call(this,x);
case  2 :
return ep3__10980.call(this,x,y);
case  3 :
return ep3__10981.call(this,x,y,z);
default:
return ep3__10982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10982.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10926 = (function() { 
var G__11245__delegate = function (p1,p2,p3,ps){
var ps__10910 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11246 = (function (){
return true;
});
var epn__11247 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10644_SHARP_){
return p1__10644_SHARP_.call(null,x);
}),ps__10910);
});
var epn__11248 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10645_SHARP_){
var and__3546__auto____10913 = p1__10645_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10913))
{return p1__10645_SHARP_.call(null,y);
} else
{return and__3546__auto____10913;
}
}),ps__10910);
});
var epn__11249 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10646_SHARP_){
var and__3546__auto____10916 = p1__10646_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10916))
{var and__3546__auto____10917 = p1__10646_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10917))
{return p1__10646_SHARP_.call(null,z);
} else
{return and__3546__auto____10917;
}
} else
{return and__3546__auto____10916;
}
}),ps__10910);
});
var epn__11250 = (function() { 
var G__11258__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10919 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10919))
{return cljs.core.every_QMARK_.call(null,(function (p1__10649_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10649_SHARP_,args);
}),ps__10910);
} else
{return and__3546__auto____10919;
}
})());
};
var G__11258 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11258__delegate.call(this, x, y, z, args);
};
G__11258.cljs$lang$maxFixedArity = 3;
G__11258.cljs$lang$applyTo = (function (arglist__11261){
var x = cljs.core.first(arglist__11261);
var y = cljs.core.first(cljs.core.next(arglist__11261));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11261)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11261)));
return G__11258__delegate.call(this, x, y, z, args);
});
return G__11258;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11246.call(this);
case  1 :
return epn__11247.call(this,x);
case  2 :
return epn__11248.call(this,x,y);
case  3 :
return epn__11249.call(this,x,y,z);
default:
return epn__11250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11250.cljs$lang$applyTo;
return epn;
})()
};
var G__11245 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11245__delegate.call(this, p1, p2, p3, ps);
};
G__11245.cljs$lang$maxFixedArity = 3;
G__11245.cljs$lang$applyTo = (function (arglist__11262){
var p1 = cljs.core.first(arglist__11262);
var p2 = cljs.core.first(cljs.core.next(arglist__11262));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11262)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11262)));
return G__11245__delegate.call(this, p1, p2, p3, ps);
});
return G__11245;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10923.call(this,p1);
case  2 :
return every_pred__10924.call(this,p1,p2);
case  3 :
return every_pred__10925.call(this,p1,p2,p3);
default:
return every_pred__10926.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10926.cljs$lang$applyTo;
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
var some_fn__11446 = (function (p){
return (function() {
var sp1 = null;
var sp1__11452 = (function (){
return null;
});
var sp1__11453 = (function (x){
return p.call(null,x);
});
var sp1__11454 = (function (x,y){
var or__3548__auto____11266 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11266))
{return or__3548__auto____11266;
} else
{return p.call(null,y);
}
});
var sp1__11455 = (function (x,y,z){
var or__3548__auto____11271 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11271))
{return or__3548__auto____11271;
} else
{var or__3548__auto____11272 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11272))
{return or__3548__auto____11272;
} else
{return p.call(null,z);
}
}
});
var sp1__11456 = (function() { 
var G__11462__delegate = function (x,y,z,args){
var or__3548__auto____11273 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11273))
{return or__3548__auto____11273;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11462 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11462__delegate.call(this, x, y, z, args);
};
G__11462.cljs$lang$maxFixedArity = 3;
G__11462.cljs$lang$applyTo = (function (arglist__11463){
var x = cljs.core.first(arglist__11463);
var y = cljs.core.first(cljs.core.next(arglist__11463));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11463)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11463)));
return G__11462__delegate.call(this, x, y, z, args);
});
return G__11462;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11452.call(this);
case  1 :
return sp1__11453.call(this,x);
case  2 :
return sp1__11454.call(this,x,y);
case  3 :
return sp1__11455.call(this,x,y,z);
default:
return sp1__11456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11456.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11448 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11464 = (function (){
return null;
});
var sp2__11465 = (function (x){
var or__3548__auto____11277 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11277))
{return or__3548__auto____11277;
} else
{return p2.call(null,x);
}
});
var sp2__11466 = (function (x,y){
var or__3548__auto____11278 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11278))
{return or__3548__auto____11278;
} else
{var or__3548__auto____11279 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11279))
{return or__3548__auto____11279;
} else
{var or__3548__auto____11281 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11281))
{return or__3548__auto____11281;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11467 = (function (x,y,z){
var or__3548__auto____11282 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11282))
{return or__3548__auto____11282;
} else
{var or__3548__auto____11284 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11284))
{return or__3548__auto____11284;
} else
{var or__3548__auto____11286 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11286))
{return or__3548__auto____11286;
} else
{var or__3548__auto____11288 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11288))
{return or__3548__auto____11288;
} else
{var or__3548__auto____11290 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11290))
{return or__3548__auto____11290;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11468 = (function() { 
var G__11470__delegate = function (x,y,z,args){
var or__3548__auto____11294 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11294))
{return or__3548__auto____11294;
} else
{return cljs.core.some.call(null,(function (p1__10654_SHARP_){
var or__3548__auto____11298 = p1.call(null,p1__10654_SHARP_);

if(cljs.core.truth_(or__3548__auto____11298))
{return or__3548__auto____11298;
} else
{return p2.call(null,p1__10654_SHARP_);
}
}),args);
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
G__11470.cljs$lang$applyTo = (function (arglist__11471){
var x = cljs.core.first(arglist__11471);
var y = cljs.core.first(cljs.core.next(arglist__11471));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11471)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11471)));
return G__11470__delegate.call(this, x, y, z, args);
});
return G__11470;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11464.call(this);
case  1 :
return sp2__11465.call(this,x);
case  2 :
return sp2__11466.call(this,x,y);
case  3 :
return sp2__11467.call(this,x,y,z);
default:
return sp2__11468.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11468.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11449 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11472 = (function (){
return null;
});
var sp3__11473 = (function (x){
var or__3548__auto____11300 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11300))
{return or__3548__auto____11300;
} else
{var or__3548__auto____11302 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11302))
{return or__3548__auto____11302;
} else
{return p3.call(null,x);
}
}
});
var sp3__11474 = (function (x,y){
var or__3548__auto____11305 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11305))
{return or__3548__auto____11305;
} else
{var or__3548__auto____11310 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11310))
{return or__3548__auto____11310;
} else
{var or__3548__auto____11312 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11312))
{return or__3548__auto____11312;
} else
{var or__3548__auto____11314 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11314))
{return or__3548__auto____11314;
} else
{var or__3548__auto____11317 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11317))
{return or__3548__auto____11317;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11475 = (function (x,y,z){
var or__3548__auto____11324 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11324))
{return or__3548__auto____11324;
} else
{var or__3548__auto____11325 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11325))
{return or__3548__auto____11325;
} else
{var or__3548__auto____11326 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11326))
{return or__3548__auto____11326;
} else
{var or__3548__auto____11327 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11327))
{return or__3548__auto____11327;
} else
{var or__3548__auto____11328 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11328))
{return or__3548__auto____11328;
} else
{var or__3548__auto____11329 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11329))
{return or__3548__auto____11329;
} else
{var or__3548__auto____11330 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11330))
{return or__3548__auto____11330;
} else
{var or__3548__auto____11331 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11331))
{return or__3548__auto____11331;
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
var sp3__11476 = (function() { 
var G__11492__delegate = function (x,y,z,args){
var or__3548__auto____11332 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11332))
{return or__3548__auto____11332;
} else
{return cljs.core.some.call(null,(function (p1__10655_SHARP_){
var or__3548__auto____11333 = p1.call(null,p1__10655_SHARP_);

if(cljs.core.truth_(or__3548__auto____11333))
{return or__3548__auto____11333;
} else
{var or__3548__auto____11334 = p2.call(null,p1__10655_SHARP_);

if(cljs.core.truth_(or__3548__auto____11334))
{return or__3548__auto____11334;
} else
{return p3.call(null,p1__10655_SHARP_);
}
}
}),args);
}
};
var G__11492 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11492__delegate.call(this, x, y, z, args);
};
G__11492.cljs$lang$maxFixedArity = 3;
G__11492.cljs$lang$applyTo = (function (arglist__11498){
var x = cljs.core.first(arglist__11498);
var y = cljs.core.first(cljs.core.next(arglist__11498));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11498)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11498)));
return G__11492__delegate.call(this, x, y, z, args);
});
return G__11492;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11472.call(this);
case  1 :
return sp3__11473.call(this,x);
case  2 :
return sp3__11474.call(this,x,y);
case  3 :
return sp3__11475.call(this,x,y,z);
default:
return sp3__11476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11476.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11450 = (function() { 
var G__11500__delegate = function (p1,p2,p3,ps){
var ps__11335 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11502 = (function (){
return null;
});
var spn__11503 = (function (x){
return cljs.core.some.call(null,(function (p1__10656_SHARP_){
return p1__10656_SHARP_.call(null,x);
}),ps__11335);
});
var spn__11504 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10657_SHARP_){
var or__3548__auto____11427 = p1__10657_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11427))
{return or__3548__auto____11427;
} else
{return p1__10657_SHARP_.call(null,y);
}
}),ps__11335);
});
var spn__11505 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10658_SHARP_){
var or__3548__auto____11431 = p1__10658_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11431))
{return or__3548__auto____11431;
} else
{var or__3548__auto____11432 = p1__10658_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11432))
{return or__3548__auto____11432;
} else
{return p1__10658_SHARP_.call(null,z);
}
}
}),ps__11335);
});
var spn__11506 = (function() { 
var G__11512__delegate = function (x,y,z,args){
var or__3548__auto____11433 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11433))
{return or__3548__auto____11433;
} else
{return cljs.core.some.call(null,(function (p1__10659_SHARP_){
return cljs.core.some.call(null,p1__10659_SHARP_,args);
}),ps__11335);
}
};
var G__11512 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11512__delegate.call(this, x, y, z, args);
};
G__11512.cljs$lang$maxFixedArity = 3;
G__11512.cljs$lang$applyTo = (function (arglist__11605){
var x = cljs.core.first(arglist__11605);
var y = cljs.core.first(cljs.core.next(arglist__11605));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11605)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11605)));
return G__11512__delegate.call(this, x, y, z, args);
});
return G__11512;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11502.call(this);
case  1 :
return spn__11503.call(this,x);
case  2 :
return spn__11504.call(this,x,y);
case  3 :
return spn__11505.call(this,x,y,z);
default:
return spn__11506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11506.cljs$lang$applyTo;
return spn;
})()
};
var G__11500 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11500__delegate.call(this, p1, p2, p3, ps);
};
G__11500.cljs$lang$maxFixedArity = 3;
G__11500.cljs$lang$applyTo = (function (arglist__11607){
var p1 = cljs.core.first(arglist__11607);
var p2 = cljs.core.first(cljs.core.next(arglist__11607));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11607)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11607)));
return G__11500__delegate.call(this, p1, p2, p3, ps);
});
return G__11500;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11446.call(this,p1);
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
var map__11642 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11623 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11623))
{var s__11624 = temp__3698__auto____11623;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11624)),map.call(null,f,cljs.core.rest.call(null,s__11624)));
} else
{return null;
}
})));
});
var map__11643 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11625 = cljs.core.seq.call(null,c1);
var s2__11626 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11627 = s1__11625;

if(cljs.core.truth_(and__3546__auto____11627))
{return s2__11626;
} else
{return and__3546__auto____11627;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11625),cljs.core.first.call(null,s2__11626)),map.call(null,f,cljs.core.rest.call(null,s1__11625),cljs.core.rest.call(null,s2__11626)));
} else
{return null;
}
})));
});
var map__11644 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11628 = cljs.core.seq.call(null,c1);
var s2__11629 = cljs.core.seq.call(null,c2);
var s3__11630 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11631 = s1__11628;

if(cljs.core.truth_(and__3546__auto____11631))
{var and__3546__auto____11632 = s2__11629;

if(cljs.core.truth_(and__3546__auto____11632))
{return s3__11630;
} else
{return and__3546__auto____11632;
}
} else
{return and__3546__auto____11631;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11628),cljs.core.first.call(null,s2__11629),cljs.core.first.call(null,s3__11630)),map.call(null,f,cljs.core.rest.call(null,s1__11628),cljs.core.rest.call(null,s2__11629),cljs.core.rest.call(null,s3__11630)));
} else
{return null;
}
})));
});
var map__11645 = (function() { 
var G__11652__delegate = function (f,c1,c2,c3,colls){
var step__11639 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11638 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11638)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11638),step.call(null,map.call(null,cljs.core.rest,ss__11638)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11263_SHARP_){
return cljs.core.apply.call(null,f,p1__11263_SHARP_);
}),step__11639.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11652 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11652__delegate.call(this, f, c1, c2, c3, colls);
};
G__11652.cljs$lang$maxFixedArity = 4;
G__11652.cljs$lang$applyTo = (function (arglist__11654){
var f = cljs.core.first(arglist__11654);
var c1 = cljs.core.first(cljs.core.next(arglist__11654));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11654)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11654))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11654))));
return G__11652__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11652;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11642.call(this,f,c1);
case  3 :
return map__11643.call(this,f,c1,c2);
case  4 :
return map__11644.call(this,f,c1,c2,c3);
default:
return map__11645.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11645.cljs$lang$applyTo;
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
{var temp__3698__auto____11656 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11656))
{var s__11657 = temp__3698__auto____11656;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11657),take.call(null,(n - 1),cljs.core.rest.call(null,s__11657)));
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
var step__11719 = (function (n,coll){
while(true){
var s__11717 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11718 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11718))
{return s__11717;
} else
{return and__3546__auto____11718;
}
})()))
{{
var G__11720 = (n - 1);
var G__11721 = cljs.core.rest.call(null,s__11717);
n = G__11720;
coll = G__11721;
continue;
}
} else
{return s__11717;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11719.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11722 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11723 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11722.call(this,n);
case  2 :
return drop_last__11723.call(this,n,s);
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
var s__11725 = cljs.core.seq.call(null,coll);
var lead__11726 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11726))
{{
var G__11727 = cljs.core.next.call(null,s__11725);
var G__11728 = cljs.core.next.call(null,lead__11726);
s__11725 = G__11727;
lead__11726 = G__11728;
continue;
}
} else
{return s__11725;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11731 = (function (pred,coll){
while(true){
var s__11729 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11730 = s__11729;

if(cljs.core.truth_(and__3546__auto____11730))
{return pred.call(null,cljs.core.first.call(null,s__11729));
} else
{return and__3546__auto____11730;
}
})()))
{{
var G__11732 = pred;
var G__11733 = cljs.core.rest.call(null,s__11729);
pred = G__11732;
coll = G__11733;
continue;
}
} else
{return s__11729;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11731.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11736 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11736))
{var s__11737 = temp__3698__auto____11736;

return cljs.core.concat.call(null,s__11737,cycle.call(null,s__11737));
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
var repeat__11745 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11746 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11745.call(this,n);
case  2 :
return repeat__11746.call(this,n,x);
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
var repeatedly__11778 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11779 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11778.call(this,n);
case  2 :
return repeatedly__11779.call(this,n,f);
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
var interleave__11837 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11795 = cljs.core.seq.call(null,c1);
var s2__11796 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11797 = s1__11795;

if(cljs.core.truth_(and__3546__auto____11797))
{return s2__11796;
} else
{return and__3546__auto____11797;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11795),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11796),interleave.call(null,cljs.core.rest.call(null,s1__11795),cljs.core.rest.call(null,s2__11796))));
} else
{return null;
}
})));
});
var interleave__11838 = (function() { 
var G__11945__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11806 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11806)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11806),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11806)));
} else
{return null;
}
})));
};
var G__11945 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11945__delegate.call(this, c1, c2, colls);
};
G__11945.cljs$lang$maxFixedArity = 2;
G__11945.cljs$lang$applyTo = (function (arglist__11946){
var c1 = cljs.core.first(arglist__11946);
var c2 = cljs.core.first(cljs.core.next(arglist__11946));
var colls = cljs.core.rest(cljs.core.next(arglist__11946));
return G__11945__delegate.call(this, c1, c2, colls);
});
return G__11945;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11837.call(this,c1,c2);
default:
return interleave__11838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11838.cljs$lang$applyTo;
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
var cat__11961 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11957 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11957))
{var coll__11958 = temp__3695__auto____11957;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11958),cat.call(null,cljs.core.rest.call(null,coll__11958),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11961.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12003 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12004 = (function() { 
var G__12006__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12006 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12006__delegate.call(this, f, coll, colls);
};
G__12006.cljs$lang$maxFixedArity = 2;
G__12006.cljs$lang$applyTo = (function (arglist__12007){
var f = cljs.core.first(arglist__12007);
var coll = cljs.core.first(cljs.core.next(arglist__12007));
var colls = cljs.core.rest(cljs.core.next(arglist__12007));
return G__12006__delegate.call(this, f, coll, colls);
});
return G__12006;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12003.call(this,f,coll);
default:
return mapcat__12004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12004.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12012 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12012))
{var s__12013 = temp__3698__auto____12012;

var f__12014 = cljs.core.first.call(null,s__12013);
var r__12018 = cljs.core.rest.call(null,s__12013);

if(cljs.core.truth_(pred.call(null,f__12014)))
{return cljs.core.cons.call(null,f__12014,filter.call(null,pred,r__12018));
} else
{return filter.call(null,pred,r__12018);
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
var walk__12024 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12024.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12023_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12023_SHARP_));
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
var partition__12127 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12128 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12064))
{var s__12066 = temp__3698__auto____12064;

var p__12067 = cljs.core.take.call(null,n,s__12066);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12067))))
{return cljs.core.cons.call(null,p__12067,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12066)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12129 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12079 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12079))
{var s__12080 = temp__3698__auto____12079;

var p__12081 = cljs.core.take.call(null,n,s__12080);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12081))))
{return cljs.core.cons.call(null,p__12081,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12080)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12081,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12127.call(this,n,step);
case  3 :
return partition__12128.call(this,n,step,pad);
case  4 :
return partition__12129.call(this,n,step,pad,coll);
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
var get_in__12139 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12140 = (function (m,ks,not_found){
var sentinel__12132 = cljs.core.lookup_sentinel;
var m__12133 = m;
var ks__12135 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12135))
{var m__12137 = cljs.core.get.call(null,m__12133,cljs.core.first.call(null,ks__12135),sentinel__12132);

if(cljs.core.truth_((sentinel__12132 === m__12137)))
{return not_found;
} else
{{
var G__12142 = sentinel__12132;
var G__12143 = m__12137;
var G__12144 = cljs.core.next.call(null,ks__12135);
sentinel__12132 = G__12142;
m__12133 = G__12143;
ks__12135 = G__12144;
continue;
}
}
} else
{return m__12133;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12139.call(this,m,ks);
case  3 :
return get_in__12140.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12145,v){
var vec__12146__12147 = p__12145;
var k__12148 = cljs.core.nth.call(null,vec__12146__12147,0,null);
var ks__12149 = cljs.core.nthnext.call(null,vec__12146__12147,1);

if(cljs.core.truth_(ks__12149))
{return cljs.core.assoc.call(null,m,k__12148,assoc_in.call(null,cljs.core.get.call(null,m,k__12148),ks__12149,v));
} else
{return cljs.core.assoc.call(null,m,k__12148,v);
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
var update_in__delegate = function (m,p__12156,f,args){
var vec__12158__12159 = p__12156;
var k__12162 = cljs.core.nth.call(null,vec__12158__12159,0,null);
var ks__12163 = cljs.core.nthnext.call(null,vec__12158__12159,1);

if(cljs.core.truth_(ks__12163))
{return cljs.core.assoc.call(null,m,k__12162,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12162),ks__12163,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12162,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12162),args));
}
};
var update_in = function (m,p__12156,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12156, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12175){
var m = cljs.core.first(arglist__12175);
var p__12156 = cljs.core.first(cljs.core.next(arglist__12175));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12175)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12175)));
return update_in__delegate.call(this, m, p__12156, f, args);
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
var this__12183 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12298 = null;
var G__12298__12299 = (function (coll,k){
var this__12188 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12298__12300 = (function (coll,k,not_found){
var this__12189 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12298 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12298__12299.call(this,coll,k);
case  3 :
return G__12298__12300.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12298;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12190 = this;
var new_array__12193 = cljs.core.aclone.call(null,this__12190.array);

(new_array__12193[k] = v);
return (new cljs.core.Vector(this__12190.meta,new_array__12193));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12306 = null;
var G__12306__12307 = (function (coll,k){
var this__12197 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12306__12308 = (function (coll,k,not_found){
var this__12198 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12306 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12306__12307.call(this,coll,k);
case  3 :
return G__12306__12308.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12306;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12199 = this;
var new_array__12252 = cljs.core.aclone.call(null,this__12199.array);

new_array__12252.push(o);
return (new cljs.core.Vector(this__12199.meta,new_array__12252));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12319 = null;
var G__12319__12322 = (function (v,f){
var this__12254 = this;
return cljs.core.ci_reduce.call(null,this__12254.array,f);
});
var G__12319__12323 = (function (v,f,start){
var this__12256 = this;
return cljs.core.ci_reduce.call(null,this__12256.array,f,start);
});
G__12319 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12319__12322.call(this,v,f);
case  3 :
return G__12319__12323.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12319;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12261 = this;
if(cljs.core.truth_((this__12261.array.length > 0)))
{var vector_seq__12263 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12261.array.length)))
{return cljs.core.cons.call(null,(this__12261.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12263.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12265 = this;
return this__12265.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12267 = this;
var count__12268 = this__12267.array.length;

if(cljs.core.truth_((count__12268 > 0)))
{return (this__12267.array[(count__12268 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12271 = this;
if(cljs.core.truth_((this__12271.array.length > 0)))
{var new_array__12274 = cljs.core.aclone.call(null,this__12271.array);

new_array__12274.pop();
return (new cljs.core.Vector(this__12271.meta,new_array__12274));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12277 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12279 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12281 = this;
return (new cljs.core.Vector(meta,this__12281.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12284 = this;
return this__12284.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12329 = null;
var G__12329__12330 = (function (coll,n){
var this__12285 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12287 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12287))
{return (n < this__12285.array.length);
} else
{return and__3546__auto____12287;
}
})()))
{return (this__12285.array[n]);
} else
{return null;
}
});
var G__12329__12331 = (function (coll,n,not_found){
var this__12288 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12289 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12289))
{return (n < this__12288.array.length);
} else
{return and__3546__auto____12289;
}
})()))
{return (this__12288.array[n]);
} else
{return not_found;
}
});
G__12329 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12329__12330.call(this,coll,n);
case  3 :
return G__12329__12331.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12329;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12292 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12292.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12423){
var args = cljs.core.seq( arglist__12423 );;
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
var this__12428 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12482 = null;
var G__12482__12484 = (function (coll,k){
var this__12429 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12482__12485 = (function (coll,k,not_found){
var this__12430 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12482 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12482__12484.call(this,coll,k);
case  3 :
return G__12482__12485.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12431 = this;
var v_pos__12432 = (this__12431.start + key);

return (new cljs.core.Subvec(this__12431.meta,cljs.core._assoc.call(null,this__12431.v,v_pos__12432,val),this__12431.start,((this__12431.end > (v_pos__12432 + 1)) ? this__12431.end : (v_pos__12432 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12489 = null;
var G__12489__12490 = (function (coll,k){
var this__12433 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12489__12491 = (function (coll,k,not_found){
var this__12436 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12489 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12489__12490.call(this,coll,k);
case  3 :
return G__12489__12491.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12489;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12440 = this;
return (new cljs.core.Subvec(this__12440.meta,cljs.core._assoc_n.call(null,this__12440.v,this__12440.end,o),this__12440.start,(this__12440.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12498 = null;
var G__12498__12499 = (function (coll,f){
var this__12441 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12498__12500 = (function (coll,f,start){
var this__12446 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12498 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12498__12499.call(this,coll,f);
case  3 :
return G__12498__12500.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12498;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12447 = this;
var subvec_seq__12452 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12447.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12447.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12452.call(null,this__12447.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12453 = this;
return (this__12453.end - this__12453.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12454 = this;
return cljs.core._nth.call(null,this__12454.v,(this__12454.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12455 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12455.start,this__12455.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12455.meta,this__12455.v,this__12455.start,(this__12455.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12456 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12457 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12458 = this;
return (new cljs.core.Subvec(meta,this__12458.v,this__12458.start,this__12458.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12459 = this;
return this__12459.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12510 = null;
var G__12510__12511 = (function (coll,n){
var this__12461 = this;
return cljs.core._nth.call(null,this__12461.v,(this__12461.start + n));
});
var G__12510__12513 = (function (coll,n,not_found){
var this__12463 = this;
return cljs.core._nth.call(null,this__12463.v,(this__12463.start + n),not_found);
});
G__12510 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12510__12511.call(this,coll,n);
case  3 :
return G__12510__12513.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12510;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12466 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12466.meta);
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
var subvec__12530 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12531 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12530.call(this,v,start);
case  3 :
return subvec__12531.call(this,v,start,end);
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
var this__12553 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12555 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12556 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12558 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12558.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12560 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12562 = this;
return cljs.core._first.call(null,this__12562.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12564 = this;
var temp__3695__auto____12566 = cljs.core.next.call(null,this__12564.front);

if(cljs.core.truth_(temp__3695__auto____12566))
{var f1__12567 = temp__3695__auto____12566;

return (new cljs.core.PersistentQueueSeq(this__12564.meta,f1__12567,this__12564.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12564.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12564.meta,this__12564.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12570 = this;
return this__12570.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12572 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12572.front,this__12572.rear));
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
var this__12641 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12643 = this;
if(cljs.core.truth_(this__12643.front))
{return (new cljs.core.PersistentQueue(this__12643.meta,(this__12643.count + 1),this__12643.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12649 = this__12643.rear;

if(cljs.core.truth_(or__3548__auto____12649))
{return or__3548__auto____12649;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12643.meta,(this__12643.count + 1),cljs.core.conj.call(null,this__12643.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12651 = this;
var rear__12652 = cljs.core.seq.call(null,this__12651.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12653 = this__12651.front;

if(cljs.core.truth_(or__3548__auto____12653))
{return or__3548__auto____12653;
} else
{return rear__12652;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12651.front,cljs.core.seq.call(null,rear__12652)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12655 = this;
return this__12655.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12656 = this;
return cljs.core._first.call(null,this__12656.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12657 = this;
if(cljs.core.truth_(this__12657.front))
{var temp__3695__auto____12658 = cljs.core.next.call(null,this__12657.front);

if(cljs.core.truth_(temp__3695__auto____12658))
{var f1__12659 = temp__3695__auto____12658;

return (new cljs.core.PersistentQueue(this__12657.meta,(this__12657.count - 1),f1__12659,this__12657.rear));
} else
{return (new cljs.core.PersistentQueue(this__12657.meta,(this__12657.count - 1),cljs.core.seq.call(null,this__12657.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12666 = this;
return cljs.core.first.call(null,this__12666.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12668 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12670 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12671 = this;
return (new cljs.core.PersistentQueue(meta,this__12671.count,this__12671.front,this__12671.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12677 = this;
return this__12677.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12678 = this;
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
var this__12686 = this;
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
var len__12723 = array.length;

var i__12724 = 0;

while(true){
if(cljs.core.truth_((i__12724 < len__12723)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12724]))))
{return i__12724;
} else
{{
var G__12731 = (i__12724 + incr);
i__12724 = G__12731;
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
var obj_map_contains_key_QMARK___12738 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12739 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12736 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12736))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12736;
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
return obj_map_contains_key_QMARK___12738.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12739.call(this,k,strobj,true_val,false_val);
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
var this__12754 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12818 = null;
var G__12818__12820 = (function (coll,k){
var this__12756 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12818__12821 = (function (coll,k,not_found){
var this__12757 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12757.strobj,(this__12757.strobj[k]),not_found);
});
G__12818 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12818__12820.call(this,coll,k);
case  3 :
return G__12818__12821.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12818;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12759 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12761 = goog.object.clone.call(null,this__12759.strobj);
var overwrite_QMARK___12762 = new_strobj__12761.hasOwnProperty(k);

(new_strobj__12761[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12762))
{return (new cljs.core.ObjMap(this__12759.meta,this__12759.keys,new_strobj__12761));
} else
{var new_keys__12763 = cljs.core.aclone.call(null,this__12759.keys);

new_keys__12763.push(k);
return (new cljs.core.ObjMap(this__12759.meta,new_keys__12763,new_strobj__12761));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12759.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12785 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12785.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12834 = null;
var G__12834__12835 = (function (coll,k){
var this__12786 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12834__12837 = (function (coll,k,not_found){
var this__12787 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12834 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12834__12835.call(this,coll,k);
case  3 :
return G__12834__12837.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12834;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12790 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12791 = this;
if(cljs.core.truth_((this__12791.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12747_SHARP_){
return cljs.core.vector.call(null,p1__12747_SHARP_,(this__12791.strobj[p1__12747_SHARP_]));
}),this__12791.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12793 = this;
return this__12793.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12795 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12799 = this;
return (new cljs.core.ObjMap(meta,this__12799.keys,this__12799.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12801 = this;
return this__12801.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12802 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12802.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12804 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12806 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12806))
{return this__12804.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12806;
}
})()))
{var new_keys__12809 = cljs.core.aclone.call(null,this__12804.keys);
var new_strobj__12810 = goog.object.clone.call(null,this__12804.strobj);

new_keys__12809.splice(cljs.core.scan_array.call(null,1,k,new_keys__12809),1);
cljs.core.js_delete.call(null,new_strobj__12810,k);
return (new cljs.core.ObjMap(this__12804.meta,new_keys__12809,new_strobj__12810));
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
var this__12925 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12998 = null;
var G__12998__12999 = (function (coll,k){
var this__12927 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12998__13000 = (function (coll,k,not_found){
var this__12929 = this;
var bucket__12932 = (this__12929.hashobj[cljs.core.hash.call(null,k)]);
var i__12934 = (cljs.core.truth_(bucket__12932)?cljs.core.scan_array.call(null,2,k,bucket__12932):null);

if(cljs.core.truth_(i__12934))
{return (bucket__12932[(i__12934 + 1)]);
} else
{return not_found;
}
});
G__12998 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12998__12999.call(this,coll,k);
case  3 :
return G__12998__13000.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12998;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12936 = this;
var h__12937 = cljs.core.hash.call(null,k);
var bucket__12939 = (this__12936.hashobj[h__12937]);

if(cljs.core.truth_(bucket__12939))
{var new_bucket__12940 = cljs.core.aclone.call(null,bucket__12939);
var new_hashobj__12941 = goog.object.clone.call(null,this__12936.hashobj);

(new_hashobj__12941[h__12937] = new_bucket__12940);
var temp__3695__auto____12942 = cljs.core.scan_array.call(null,2,k,new_bucket__12940);

if(cljs.core.truth_(temp__3695__auto____12942))
{var i__12944 = temp__3695__auto____12942;

(new_bucket__12940[(i__12944 + 1)] = v);
return (new cljs.core.HashMap(this__12936.meta,this__12936.count,new_hashobj__12941));
} else
{new_bucket__12940.push(k,v);
return (new cljs.core.HashMap(this__12936.meta,(this__12936.count + 1),new_hashobj__12941));
}
} else
{var new_hashobj__12965 = goog.object.clone.call(null,this__12936.hashobj);

(new_hashobj__12965[h__12937] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12936.meta,(this__12936.count + 1),new_hashobj__12965));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12967 = this;
var bucket__12969 = (this__12967.hashobj[cljs.core.hash.call(null,k)]);
var i__12971 = (cljs.core.truth_(bucket__12969)?cljs.core.scan_array.call(null,2,k,bucket__12969):null);

if(cljs.core.truth_(i__12971))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13039 = null;
var G__13039__13040 = (function (coll,k){
var this__12974 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13039__13041 = (function (coll,k,not_found){
var this__12975 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13039 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13039__13040.call(this,coll,k);
case  3 :
return G__13039__13041.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13039;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12977 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12980 = this;
if(cljs.core.truth_((this__12980.count > 0)))
{var hashes__12982 = cljs.core.js_keys.call(null,this__12980.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12859_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12980.hashobj[p1__12859_SHARP_])));
}),hashes__12982);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12983 = this;
return this__12983.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12988 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12989 = this;
return (new cljs.core.HashMap(meta,this__12989.count,this__12989.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12990 = this;
return this__12990.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12991 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12991.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12992 = this;
var h__12993 = cljs.core.hash.call(null,k);
var bucket__12994 = (this__12992.hashobj[h__12993]);
var i__12995 = (cljs.core.truth_(bucket__12994)?cljs.core.scan_array.call(null,2,k,bucket__12994):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12995)))
{return coll;
} else
{var new_hashobj__12996 = goog.object.clone.call(null,this__12992.hashobj);

if(cljs.core.truth_((3 > bucket__12994.length)))
{cljs.core.js_delete.call(null,new_hashobj__12996,h__12993);
} else
{var new_bucket__12997 = cljs.core.aclone.call(null,bucket__12994);

new_bucket__12997.splice(i__12995,2);
(new_hashobj__12996[h__12993] = new_bucket__12997);
}
return (new cljs.core.HashMap(this__12992.meta,(this__12992.count - 1),new_hashobj__12996));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13066 = ks.length;

var i__13067 = 0;
var out__13130 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13067 < len__13066)))
{{
var G__13131 = (i__13067 + 1);
var G__13132 = cljs.core.assoc.call(null,out__13130,(ks[i__13067]),(vs[i__13067]));
i__13067 = G__13131;
out__13130 = G__13132;
continue;
}
} else
{return out__13130;
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
var in$__13133 = cljs.core.seq.call(null,keyvals);
var out__13134 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13133))
{{
var G__13135 = cljs.core.nnext.call(null,in$__13133);
var G__13136 = cljs.core.assoc.call(null,out__13134,cljs.core.first.call(null,in$__13133),cljs.core.second.call(null,in$__13133));
in$__13133 = G__13135;
out__13134 = G__13136;
continue;
}
} else
{return out__13134;
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
hash_map.cljs$lang$applyTo = (function (arglist__13139){
var keyvals = cljs.core.seq( arglist__13139 );;
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
{return cljs.core.reduce.call(null,(function (p1__13141_SHARP_,p2__13142_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13148 = p1__13141_SHARP_;

if(cljs.core.truth_(or__3548__auto____13148))
{return or__3548__auto____13148;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13142_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13155){
var maps = cljs.core.seq( arglist__13155 );;
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
{var merge_entry__13165 = (function (m,e){
var k__13161 = cljs.core.first.call(null,e);
var v__13163 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13161)))
{return cljs.core.assoc.call(null,m,k__13161,f.call(null,cljs.core.get.call(null,m,k__13161),v__13163));
} else
{return cljs.core.assoc.call(null,m,k__13161,v__13163);
}
});
var merge2__13168 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13165,(function (){var or__3548__auto____13166 = m1;

if(cljs.core.truth_(or__3548__auto____13166))
{return or__3548__auto____13166;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13168,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13180){
var f = cljs.core.first(arglist__13180);
var maps = cljs.core.rest(arglist__13180);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13188 = cljs.core.ObjMap.fromObject([],{});
var keys__13190 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13190))
{var key__13191 = cljs.core.first.call(null,keys__13190);
var entry__13192 = cljs.core.get.call(null,map,key__13191,"﷐'user/not-found");

{
var G__13202 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13192,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13188,key__13191,entry__13192):ret__13188);
var G__13203 = cljs.core.next.call(null,keys__13190);
ret__13188 = G__13202;
keys__13190 = G__13203;
continue;
}
} else
{return ret__13188;
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
var this__13271 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13306 = null;
var G__13306__13307 = (function (coll,v){
var this__13272 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13306__13308 = (function (coll,v,not_found){
var this__13273 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13273.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13306 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13306__13307.call(this,coll,v);
case  3 :
return G__13306__13308.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13306;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13313 = null;
var G__13313__13315 = (function (coll,k){
var this__13274 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13313__13316 = (function (coll,k,not_found){
var this__13275 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13313 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13313__13315.call(this,coll,k);
case  3 :
return G__13313__13316.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13313;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13276 = this;
return (new cljs.core.Set(this__13276.meta,cljs.core.assoc.call(null,this__13276.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13277 = this;
return cljs.core.keys.call(null,this__13277.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13298 = this;
return (new cljs.core.Set(this__13298.meta,cljs.core.dissoc.call(null,this__13298.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13299 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13300 = this;
var and__3546__auto____13301 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13301))
{var and__3546__auto____13302 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13302))
{return cljs.core.every_QMARK_.call(null,(function (p1__13184_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13184_SHARP_);
}),other);
} else
{return and__3546__auto____13302;
}
} else
{return and__3546__auto____13301;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13303 = this;
return (new cljs.core.Set(meta,this__13303.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13304 = this;
return this__13304.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13305 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13305.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13342 = cljs.core.seq.call(null,coll);
var out__13343 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13342))))
{{
var G__13344 = cljs.core.rest.call(null,in$__13342);
var G__13345 = cljs.core.conj.call(null,out__13343,cljs.core.first.call(null,in$__13342));
in$__13342 = G__13344;
out__13343 = G__13345;
continue;
}
} else
{return out__13343;
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
{var n__13347 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13348 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13348))
{var e__13350 = temp__3695__auto____13348;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13350));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13347,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13340_SHARP_){
var temp__3695__auto____13351 = cljs.core.find.call(null,smap,p1__13340_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13351))
{var e__13353 = temp__3695__auto____13351;

return cljs.core.second.call(null,e__13353);
} else
{return p1__13340_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13367 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13358,seen){
while(true){
var vec__13359__13360 = p__13358;
var f__13362 = cljs.core.nth.call(null,vec__13359__13360,0,null);
var xs__13363 = vec__13359__13360;

var temp__3698__auto____13364 = cljs.core.seq.call(null,xs__13363);

if(cljs.core.truth_(temp__3698__auto____13364))
{var s__13365 = temp__3698__auto____13364;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13362)))
{{
var G__13514 = cljs.core.rest.call(null,s__13365);
var G__13515 = seen;
p__13358 = G__13514;
seen = G__13515;
continue;
}
} else
{return cljs.core.cons.call(null,f__13362,step.call(null,cljs.core.rest.call(null,s__13365),cljs.core.conj.call(null,seen,f__13362)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13367.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13518 = cljs.core.Vector.fromArray([]);
var s__13519 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13519)))
{{
var G__13522 = cljs.core.conj.call(null,ret__13518,cljs.core.first.call(null,s__13519));
var G__13523 = cljs.core.next.call(null,s__13519);
ret__13518 = G__13522;
s__13519 = G__13523;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13518);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13525 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13525))
{return or__3548__auto____13525;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13526 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13526 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13526 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13529 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13529))
{return or__3548__auto____13529;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13531 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13531 > -1)))
{return cljs.core.subs.call(null,x,2,i__13531);
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
var map__13535 = cljs.core.ObjMap.fromObject([],{});
var ks__13536 = cljs.core.seq.call(null,keys);
var vs__13537 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13538 = ks__13536;

if(cljs.core.truth_(and__3546__auto____13538))
{return vs__13537;
} else
{return and__3546__auto____13538;
}
})()))
{{
var G__13539 = cljs.core.assoc.call(null,map__13535,cljs.core.first.call(null,ks__13536),cljs.core.first.call(null,vs__13537));
var G__13540 = cljs.core.next.call(null,ks__13536);
var G__13541 = cljs.core.next.call(null,vs__13537);
map__13535 = G__13539;
ks__13536 = G__13540;
vs__13537 = G__13541;
continue;
}
} else
{return map__13535;
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
var max_key__13544 = (function (k,x){
return x;
});
var max_key__13545 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13546 = (function() { 
var G__13549__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13533_SHARP_,p2__13534_SHARP_){
return max_key.call(null,k,p1__13533_SHARP_,p2__13534_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13549 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13549__delegate.call(this, k, x, y, more);
};
G__13549.cljs$lang$maxFixedArity = 3;
G__13549.cljs$lang$applyTo = (function (arglist__13552){
var k = cljs.core.first(arglist__13552);
var x = cljs.core.first(cljs.core.next(arglist__13552));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13552)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13552)));
return G__13549__delegate.call(this, k, x, y, more);
});
return G__13549;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13544.call(this,k,x);
case  3 :
return max_key__13545.call(this,k,x,y);
default:
return max_key__13546.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13546.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13561 = (function (k,x){
return x;
});
var min_key__13562 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13563 = (function() { 
var G__13590__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13542_SHARP_,p2__13543_SHARP_){
return min_key.call(null,k,p1__13542_SHARP_,p2__13543_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13590 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13590__delegate.call(this, k, x, y, more);
};
G__13590.cljs$lang$maxFixedArity = 3;
G__13590.cljs$lang$applyTo = (function (arglist__13593){
var k = cljs.core.first(arglist__13593);
var x = cljs.core.first(cljs.core.next(arglist__13593));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13593)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13593)));
return G__13590__delegate.call(this, k, x, y, more);
});
return G__13590;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13561.call(this,k,x);
case  3 :
return min_key__13562.call(this,k,x,y);
default:
return min_key__13563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13563.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13668 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13670 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13664 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13664))
{var s__13666 = temp__3698__auto____13664;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13666),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13666)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13668.call(this,n,step);
case  3 :
return partition_all__13670.call(this,n,step,coll);
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
var temp__3698__auto____13676 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13676))
{var s__13677 = temp__3698__auto____13676;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13677))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13677),take_while.call(null,pred,cljs.core.rest.call(null,s__13677)));
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
var this__13740 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13741 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13817 = null;
var G__13817__13818 = (function (rng,f){
var this__13742 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13817__13819 = (function (rng,f,s){
var this__13743 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13817 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13817__13818.call(this,rng,f);
case  3 :
return G__13817__13819.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13817;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13751 = this;
var comp__13788 = (cljs.core.truth_((this__13751.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13788.call(null,this__13751.start,this__13751.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13790 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13790.end - this__13790.start) / this__13790.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13792 = this;
return this__13792.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13794 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13794.meta,(this__13794.start + this__13794.step),this__13794.end,this__13794.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13799 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13802 = this;
return (new cljs.core.Range(meta,this__13802.start,this__13802.end,this__13802.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13805 = this;
return this__13805.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13821 = null;
var G__13821__13822 = (function (rng,n){
var this__13806 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13806.start + (n * this__13806.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13807 = (this__13806.start > this__13806.end);

if(cljs.core.truth_(and__3546__auto____13807))
{return cljs.core._EQ_.call(null,this__13806.step,0);
} else
{return and__3546__auto____13807;
}
})()))
{return this__13806.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13821__13823 = (function (rng,n,not_found){
var this__13808 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13808.start + (n * this__13808.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13809 = (this__13808.start > this__13808.end);

if(cljs.core.truth_(and__3546__auto____13809))
{return cljs.core._EQ_.call(null,this__13808.step,0);
} else
{return and__3546__auto____13809;
}
})()))
{return this__13808.start;
} else
{return not_found;
}
}
});
G__13821 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13821__13822.call(this,rng,n);
case  3 :
return G__13821__13823.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13821;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13810 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13810.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13833 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13834 = (function (end){
return range.call(null,0,end,1);
});
var range__13835 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13836 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13833.call(this);
case  1 :
return range__13834.call(this,start);
case  2 :
return range__13835.call(this,start,end);
case  3 :
return range__13836.call(this,start,end,step);
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
var temp__3698__auto____13844 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13844))
{var s__13845 = temp__3698__auto____13844;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13845),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13845)));
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
var temp__3698__auto____13866 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13866))
{var s__13868 = temp__3698__auto____13866;

var fst__13870 = cljs.core.first.call(null,s__13868);
var fv__13872 = f.call(null,fst__13870);
var run__13875 = cljs.core.cons.call(null,fst__13870,cljs.core.take_while.call(null,(function (p1__13849_SHARP_){
return cljs.core._EQ_.call(null,fv__13872,f.call(null,p1__13849_SHARP_));
}),cljs.core.next.call(null,s__13868)));

return cljs.core.cons.call(null,run__13875,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13875),s__13868))));
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
var reductions__13909 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13902))
{var s__13903 = temp__3695__auto____13902;

return reductions.call(null,f,cljs.core.first.call(null,s__13903),cljs.core.rest.call(null,s__13903));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13910 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13905 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13905))
{var s__13907 = temp__3698__auto____13905;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13907)),cljs.core.rest.call(null,s__13907));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13909.call(this,f,init);
case  3 :
return reductions__13910.call(this,f,init,coll);
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
var juxt__13978 = (function (f){
return (function() {
var G__13987 = null;
var G__13987__13988 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13987__13989 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13987__13990 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13987__13991 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13987__13992 = (function() { 
var G__13999__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13999 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13999__delegate.call(this, x, y, z, args);
};
G__13999.cljs$lang$maxFixedArity = 3;
G__13999.cljs$lang$applyTo = (function (arglist__14005){
var x = cljs.core.first(arglist__14005);
var y = cljs.core.first(cljs.core.next(arglist__14005));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14005)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14005)));
return G__13999__delegate.call(this, x, y, z, args);
});
return G__13999;
})()
;
G__13987 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13987__13988.call(this);
case  1 :
return G__13987__13989.call(this,x);
case  2 :
return G__13987__13990.call(this,x,y);
case  3 :
return G__13987__13991.call(this,x,y,z);
default:
return G__13987__13992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13987.cljs$lang$maxFixedArity = 3;
G__13987.cljs$lang$applyTo = G__13987__13992.cljs$lang$applyTo;
return G__13987;
})()
});
var juxt__13979 = (function (f,g){
return (function() {
var G__14006 = null;
var G__14006__14008 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14006__14009 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14006__14010 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14006__14011 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14006__14012 = (function() { 
var G__14017__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14017 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14017__delegate.call(this, x, y, z, args);
};
G__14017.cljs$lang$maxFixedArity = 3;
G__14017.cljs$lang$applyTo = (function (arglist__14023){
var x = cljs.core.first(arglist__14023);
var y = cljs.core.first(cljs.core.next(arglist__14023));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14023)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14023)));
return G__14017__delegate.call(this, x, y, z, args);
});
return G__14017;
})()
;
G__14006 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14006__14008.call(this);
case  1 :
return G__14006__14009.call(this,x);
case  2 :
return G__14006__14010.call(this,x,y);
case  3 :
return G__14006__14011.call(this,x,y,z);
default:
return G__14006__14012.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14006.cljs$lang$maxFixedArity = 3;
G__14006.cljs$lang$applyTo = G__14006__14012.cljs$lang$applyTo;
return G__14006;
})()
});
var juxt__13980 = (function (f,g,h){
return (function() {
var G__14039 = null;
var G__14039__14041 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14039__14042 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14039__14043 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14039__14044 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14039__14045 = (function() { 
var G__14065__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14065 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14065__delegate.call(this, x, y, z, args);
};
G__14065.cljs$lang$maxFixedArity = 3;
G__14065.cljs$lang$applyTo = (function (arglist__14068){
var x = cljs.core.first(arglist__14068);
var y = cljs.core.first(cljs.core.next(arglist__14068));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14068)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14068)));
return G__14065__delegate.call(this, x, y, z, args);
});
return G__14065;
})()
;
G__14039 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14039__14041.call(this);
case  1 :
return G__14039__14042.call(this,x);
case  2 :
return G__14039__14043.call(this,x,y);
case  3 :
return G__14039__14044.call(this,x,y,z);
default:
return G__14039__14045.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14039.cljs$lang$maxFixedArity = 3;
G__14039.cljs$lang$applyTo = G__14039__14045.cljs$lang$applyTo;
return G__14039;
})()
});
var juxt__13982 = (function() { 
var G__14070__delegate = function (f,g,h,fs){
var fs__13927 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14072 = null;
var G__14072__14073 = (function (){
return cljs.core.reduce.call(null,(function (p1__13888_SHARP_,p2__13889_SHARP_){
return cljs.core.conj.call(null,p1__13888_SHARP_,p2__13889_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13927);
});
var G__14072__14074 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13890_SHARP_,p2__13891_SHARP_){
return cljs.core.conj.call(null,p1__13890_SHARP_,p2__13891_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13927);
});
var G__14072__14075 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13892_SHARP_,p2__13893_SHARP_){
return cljs.core.conj.call(null,p1__13892_SHARP_,p2__13893_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13927);
});
var G__14072__14076 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13894_SHARP_,p2__13895_SHARP_){
return cljs.core.conj.call(null,p1__13894_SHARP_,p2__13895_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13927);
});
var G__14072__14077 = (function() { 
var G__14114__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13896_SHARP_,p2__13897_SHARP_){
return cljs.core.conj.call(null,p1__13896_SHARP_,cljs.core.apply.call(null,p2__13897_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13927);
};
var G__14114 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14114__delegate.call(this, x, y, z, args);
};
G__14114.cljs$lang$maxFixedArity = 3;
G__14114.cljs$lang$applyTo = (function (arglist__14117){
var x = cljs.core.first(arglist__14117);
var y = cljs.core.first(cljs.core.next(arglist__14117));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14117)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14117)));
return G__14114__delegate.call(this, x, y, z, args);
});
return G__14114;
})()
;
G__14072 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14072__14073.call(this);
case  1 :
return G__14072__14074.call(this,x);
case  2 :
return G__14072__14075.call(this,x,y);
case  3 :
return G__14072__14076.call(this,x,y,z);
default:
return G__14072__14077.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14072.cljs$lang$maxFixedArity = 3;
G__14072.cljs$lang$applyTo = G__14072__14077.cljs$lang$applyTo;
return G__14072;
})()
};
var G__14070 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14070__delegate.call(this, f, g, h, fs);
};
G__14070.cljs$lang$maxFixedArity = 3;
G__14070.cljs$lang$applyTo = (function (arglist__14151){
var f = cljs.core.first(arglist__14151);
var g = cljs.core.first(cljs.core.next(arglist__14151));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14151)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14151)));
return G__14070__delegate.call(this, f, g, h, fs);
});
return G__14070;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13978.call(this,f);
case  2 :
return juxt__13979.call(this,f,g);
case  3 :
return juxt__13980.call(this,f,g,h);
default:
return juxt__13982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13982.cljs$lang$applyTo;
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
var dorun__14162 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14166 = cljs.core.next.call(null,coll);
coll = G__14166;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14163 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14160 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14160))
{return (n > 0);
} else
{return and__3546__auto____14160;
}
})()))
{{
var G__14167 = (n - 1);
var G__14168 = cljs.core.next.call(null,coll);
n = G__14167;
coll = G__14168;
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
return dorun__14162.call(this,n);
case  2 :
return dorun__14163.call(this,n,coll);
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
var doall__14178 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14179 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14178.call(this,n);
case  2 :
return doall__14179.call(this,n,coll);
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
var matches__14187 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14187),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14187),1)))
{return cljs.core.first.call(null,matches__14187);
} else
{return cljs.core.vec.call(null,matches__14187);
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
var matches__14190 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14190)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14190),1)))
{return cljs.core.first.call(null,matches__14190);
} else
{return cljs.core.vec.call(null,matches__14190);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14225 = cljs.core.re_find.call(null,re,s);
var match_idx__14226 = s.search(re);
var match_str__14228 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14225))?cljs.core.first.call(null,match_data__14225):match_data__14225);
var post_match__14229 = cljs.core.subs.call(null,s,(match_idx__14226 + cljs.core.count.call(null,match_str__14228)));

if(cljs.core.truth_(match_data__14225))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14225,re_seq.call(null,re,post_match__14229));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14239_SHARP_){
return print_one.call(null,p1__14239_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14287 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14287))
{var and__3546__auto____14296 = (function (){var x__445__auto____14291 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14292 = x__445__auto____14291;

if(cljs.core.truth_(and__3546__auto____14292))
{var and__3546__auto____14295 = x__445__auto____14291.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14295))
{return cljs.core.not.call(null,x__445__auto____14291.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14295;
}
} else
{return and__3546__auto____14292;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14291);
}
})();

if(cljs.core.truth_(and__3546__auto____14296))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14296;
}
} else
{return and__3546__auto____14287;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14299 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14300 = x__445__auto____14299;

if(cljs.core.truth_(and__3546__auto____14300))
{var and__3546__auto____14301 = x__445__auto____14299.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14301))
{return cljs.core.not.call(null,x__445__auto____14299.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14301;
}
} else
{return and__3546__auto____14300;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14299);
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
var first_obj__14310 = cljs.core.first.call(null,objs);
var sb__14311 = (new goog.string.StringBuffer());

var G__14312__14314 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14312__14314))
{var obj__14315 = cljs.core.first.call(null,G__14312__14314);
var G__14312__14316 = G__14312__14314;

while(true){
if(cljs.core.truth_((obj__14315 === first_obj__14310)))
{} else
{sb__14311.append(" ");
}
var G__14317__14318 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14315,opts));

if(cljs.core.truth_(G__14317__14318))
{var string__14319 = cljs.core.first.call(null,G__14317__14318);
var G__14317__14320 = G__14317__14318;

while(true){
sb__14311.append(string__14319);
var temp__3698__auto____14321 = cljs.core.next.call(null,G__14317__14320);

if(cljs.core.truth_(temp__3698__auto____14321))
{var G__14317__14322 = temp__3698__auto____14321;

{
var G__14329 = cljs.core.first.call(null,G__14317__14322);
var G__14330 = G__14317__14322;
string__14319 = G__14329;
G__14317__14320 = G__14330;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14323 = cljs.core.next.call(null,G__14312__14316);

if(cljs.core.truth_(temp__3698__auto____14323))
{var G__14312__14325 = temp__3698__auto____14323;

{
var G__14331 = cljs.core.first.call(null,G__14312__14325);
var G__14332 = G__14312__14325;
obj__14315 = G__14331;
G__14312__14316 = G__14332;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14311);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14334 = cljs.core.first.call(null,objs);

var G__14335__14336 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14335__14336))
{var obj__14337 = cljs.core.first.call(null,G__14335__14336);
var G__14335__14338 = G__14335__14336;

while(true){
if(cljs.core.truth_((obj__14337 === first_obj__14334)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14339__14340 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14337,opts));

if(cljs.core.truth_(G__14339__14340))
{var string__14341 = cljs.core.first.call(null,G__14339__14340);
var G__14339__14342 = G__14339__14340;

while(true){
cljs.core.string_print.call(null,string__14341);
var temp__3698__auto____14343 = cljs.core.next.call(null,G__14339__14342);

if(cljs.core.truth_(temp__3698__auto____14343))
{var G__14339__14344 = temp__3698__auto____14343;

{
var G__14351 = cljs.core.first.call(null,G__14339__14344);
var G__14352 = G__14339__14344;
string__14341 = G__14351;
G__14339__14342 = G__14352;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14345 = cljs.core.next.call(null,G__14335__14338);

if(cljs.core.truth_(temp__3698__auto____14345))
{var G__14335__14346 = temp__3698__auto____14345;

{
var G__14354 = cljs.core.first.call(null,G__14335__14346);
var G__14355 = G__14335__14346;
obj__14337 = G__14354;
G__14335__14338 = G__14355;
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
pr_str.cljs$lang$applyTo = (function (arglist__14360){
var objs = cljs.core.seq( arglist__14360 );;
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
pr.cljs$lang$applyTo = (function (arglist__14414){
var objs = cljs.core.seq( arglist__14414 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14416){
var objs = cljs.core.seq( arglist__14416 );;
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
println.cljs$lang$applyTo = (function (arglist__14427){
var objs = cljs.core.seq( arglist__14427 );;
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
prn.cljs$lang$applyTo = (function (arglist__14440){
var objs = cljs.core.seq( arglist__14440 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14443 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14443,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14449 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14449))
{var nspc__14450 = temp__3698__auto____14449;

return cljs.core.str.call(null,nspc__14450,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14451 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14451))
{var nspc__14452 = temp__3698__auto____14451;

return cljs.core.str.call(null,nspc__14452,"/");
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
var pr_pair__14545 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14545,"{",", ","}",opts,coll);
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
var this__14556 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14558 = this;
var G__14559__14560 = cljs.core.seq.call(null,this__14558.watches);

if(cljs.core.truth_(G__14559__14560))
{var G__14563__14565 = cljs.core.first.call(null,G__14559__14560);
var vec__14564__14567 = G__14563__14565;
var key__14568 = cljs.core.nth.call(null,vec__14564__14567,0,null);
var f__14569 = cljs.core.nth.call(null,vec__14564__14567,1,null);
var G__14559__14570 = G__14559__14560;

var G__14563__14571 = G__14563__14565;
var G__14559__14573 = G__14559__14570;

while(true){
var vec__14574__14575 = G__14563__14571;
var key__14576 = cljs.core.nth.call(null,vec__14574__14575,0,null);
var f__14577 = cljs.core.nth.call(null,vec__14574__14575,1,null);
var G__14559__14578 = G__14559__14573;

f__14577.call(null,key__14576,this$,oldval,newval);
var temp__3698__auto____14579 = cljs.core.next.call(null,G__14559__14578);

if(cljs.core.truth_(temp__3698__auto____14579))
{var G__14559__14580 = temp__3698__auto____14579;

{
var G__14662 = cljs.core.first.call(null,G__14559__14580);
var G__14663 = G__14559__14580;
G__14563__14571 = G__14662;
G__14559__14573 = G__14663;
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
var this__14581 = this;
return this$.watches = cljs.core.assoc.call(null,this__14581.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14583 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14583.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14586 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14586.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14588 = this;
return this__14588.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14589 = this;
return this__14589.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14661 = this;
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
var atom__14672 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14673 = (function() { 
var G__14676__delegate = function (x,p__14665){
var map__14666__14667 = p__14665;
var map__14666__14668 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14666__14667))?cljs.core.apply.call(null,cljs.core.hash_map,map__14666__14667):map__14666__14667);
var validator__14669 = cljs.core.get.call(null,map__14666__14668,"﷐'validator");
var meta__14670 = cljs.core.get.call(null,map__14666__14668,"﷐'meta");

return (new cljs.core.Atom(x,meta__14670,validator__14669,null));
};
var G__14676 = function (x,var_args){
var p__14665 = null;
if (goog.isDef(var_args)) {
  p__14665 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14676__delegate.call(this, x, p__14665);
};
G__14676.cljs$lang$maxFixedArity = 1;
G__14676.cljs$lang$applyTo = (function (arglist__14677){
var x = cljs.core.first(arglist__14677);
var p__14665 = cljs.core.rest(arglist__14677);
return G__14676__delegate.call(this, x, p__14665);
});
return G__14676;
})()
;
atom = function(x,var_args){
var p__14665 = var_args;
switch(arguments.length){
case  1 :
return atom__14672.call(this,x);
default:
return atom__14673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14673.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14679 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14679))
{var validate__14680 = temp__3698__auto____14679;

if(cljs.core.truth_(validate__14680.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14681 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14681,new_value);
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
var swap_BANG___14721 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14722 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14724 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14725 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14726 = (function() { 
var G__14730__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14730 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14730__delegate.call(this, a, f, x, y, z, more);
};
G__14730.cljs$lang$maxFixedArity = 5;
G__14730.cljs$lang$applyTo = (function (arglist__14731){
var a = cljs.core.first(arglist__14731);
var f = cljs.core.first(cljs.core.next(arglist__14731));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14731)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14731))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14731)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14731)))));
return G__14730__delegate.call(this, a, f, x, y, z, more);
});
return G__14730;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14721.call(this,a,f);
case  3 :
return swap_BANG___14722.call(this,a,f,x);
case  4 :
return swap_BANG___14724.call(this,a,f,x,y);
case  5 :
return swap_BANG___14725.call(this,a,f,x,y,z);
default:
return swap_BANG___14726.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14726.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14732){
var iref = cljs.core.first(arglist__14732);
var f = cljs.core.first(cljs.core.next(arglist__14732));
var args = cljs.core.rest(cljs.core.next(arglist__14732));
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
var gensym__14739 = (function (){
return gensym.call(null,"G__");
});
var gensym__14789 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14739.call(this);
case  1 :
return gensym__14789.call(this,prefix_string);
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
var this__14841 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14841.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14843 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14843.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14843.state,this__14843.f);
}
return cljs.core.deref.call(null,this__14843.state);
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
delay.cljs$lang$applyTo = (function (arglist__14862){
var body = cljs.core.seq( arglist__14862 );;
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
var map__14874__14875 = options;
var map__14874__14876 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14874__14875))?cljs.core.apply.call(null,cljs.core.hash_map,map__14874__14875):map__14874__14875);
var keywordize_keys__14877 = cljs.core.get.call(null,map__14874__14876,"﷐'keywordize-keys");
var keyfn__14878 = (cljs.core.truth_(keywordize_keys__14877)?cljs.core.keyword:cljs.core.str);
var f__14886 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14885 = (function iter__14879(s__14880){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14880__14882 = s__14880;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14880__14882)))
{var k__14884 = cljs.core.first.call(null,s__14880__14882);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14878.call(null,k__14884),thisfn.call(null,(x[k__14884]))]),iter__14879.call(null,cljs.core.rest.call(null,s__14880__14882)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14885.call(null,cljs.core.js_keys.call(null,x));
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

return f__14886.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14891){
var x = cljs.core.first(arglist__14891);
var options = cljs.core.rest(arglist__14891);
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
var mem__14896 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14900__delegate = function (args){
var temp__3695__auto____14897 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14896),args);

if(cljs.core.truth_(temp__3695__auto____14897))
{var v__14898 = temp__3695__auto____14897;

return v__14898;
} else
{var ret__14899 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14896,cljs.core.assoc,args,ret__14899);
return ret__14899;
}
};
var G__14900 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14900__delegate.call(this, args);
};
G__14900.cljs$lang$maxFixedArity = 0;
G__14900.cljs$lang$applyTo = (function (arglist__14901){
var args = cljs.core.seq( arglist__14901 );;
return G__14900__delegate.call(this, args);
});
return G__14900;
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
var trampoline__14906 = (function (f){
while(true){
var ret__14903 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14903)))
{{
var G__14911 = ret__14903;
f = G__14911;
continue;
}
} else
{return ret__14903;
}
break;
}
});
var trampoline__14908 = (function() { 
var G__14912__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14912 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14912__delegate.call(this, f, args);
};
G__14912.cljs$lang$maxFixedArity = 1;
G__14912.cljs$lang$applyTo = (function (arglist__14914){
var f = cljs.core.first(arglist__14914);
var args = cljs.core.rest(arglist__14914);
return G__14912__delegate.call(this, f, args);
});
return G__14912;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14906.call(this,f);
default:
return trampoline__14908.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14908.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14922 = (function (){
return rand.call(null,1);
});
var rand__14923 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14922.call(this);
case  1 :
return rand__14923.call(this,n);
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
var k__14929 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14929,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14929,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14946 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14947 = (function (h,child,parent){
var or__3548__auto____14931 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14931))
{return or__3548__auto____14931;
} else
{var or__3548__auto____14932 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14932))
{return or__3548__auto____14932;
} else
{var and__3546__auto____14934 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14934))
{var and__3546__auto____14936 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14936))
{var and__3546__auto____14939 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14939))
{var ret__14941 = true;
var i__14942 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14943 = cljs.core.not.call(null,ret__14941);

if(cljs.core.truth_(or__3548__auto____14943))
{return or__3548__auto____14943;
} else
{return cljs.core._EQ_.call(null,i__14942,cljs.core.count.call(null,parent));
}
})()))
{return ret__14941;
} else
{{
var G__14953 = isa_QMARK_.call(null,h,child.call(null,i__14942),parent.call(null,i__14942));
var G__14954 = (i__14942 + 1);
ret__14941 = G__14953;
i__14942 = G__14954;
continue;
}
}
break;
}
} else
{return and__3546__auto____14939;
}
} else
{return and__3546__auto____14936;
}
} else
{return and__3546__auto____14934;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14946.call(this,h,child);
case  3 :
return isa_QMARK___14947.call(this,h,child,parent);
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
var parents__14970 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14971 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14970.call(this,h);
case  2 :
return parents__14971.call(this,h,tag);
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
var ancestors__14978 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14979 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14978.call(this,h);
case  2 :
return ancestors__14979.call(this,h,tag);
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
var descendants__14990 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14991 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14990.call(this,h);
case  2 :
return descendants__14991.call(this,h,tag);
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
var derive__15094 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15095 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15002 = "﷐'parents".call(null,h);
var td__15003 = "﷐'descendants".call(null,h);
var ta__15004 = "﷐'ancestors".call(null,h);
var tf__15008 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15012 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15002.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15004.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15004.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15002,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15008.call(null,"﷐'ancestors".call(null,h),tag,td__15003,parent,ta__15004),"﷐'descendants":tf__15008.call(null,"﷐'descendants".call(null,h),parent,ta__15004,tag,td__15003)});
})());

if(cljs.core.truth_(or__3548__auto____15012))
{return or__3548__auto____15012;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15094.call(this,h,tag);
case  3 :
return derive__15095.call(this,h,tag,parent);
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
var underive__15117 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15119 = (function (h,tag,parent){
var parentMap__15107 = "﷐'parents".call(null,h);
var childsParents__15108 = (cljs.core.truth_(parentMap__15107.call(null,tag))?cljs.core.disj.call(null,parentMap__15107.call(null,tag),parent):cljs.core.set([]));
var newParents__15109 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15108))?cljs.core.assoc.call(null,parentMap__15107,tag,childsParents__15108):cljs.core.dissoc.call(null,parentMap__15107,tag));
var deriv_seq__15111 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14993_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14993_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14993_SHARP_),cljs.core.second.call(null,p1__14993_SHARP_)));
}),cljs.core.seq.call(null,newParents__15109)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15107.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14994_SHARP_,p2__14995_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14994_SHARP_,p2__14995_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15111));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15117.call(this,h,tag);
case  3 :
return underive__15119.call(this,h,tag,parent);
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
var xprefs__15134 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15136 = (cljs.core.truth_((function (){var and__3546__auto____15135 = xprefs__15134;

if(cljs.core.truth_(and__3546__auto____15135))
{return xprefs__15134.call(null,y);
} else
{return and__3546__auto____15135;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15136))
{return or__3548__auto____15136;
} else
{var or__3548__auto____15142 = (function (){var ps__15140 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15140) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15140),prefer_table)))
{} else
{}
{
var G__15151 = cljs.core.rest.call(null,ps__15140);
ps__15140 = G__15151;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15142))
{return or__3548__auto____15142;
} else
{var or__3548__auto____15147 = (function (){var ps__15143 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15143) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15143),y,prefer_table)))
{} else
{}
{
var G__15152 = cljs.core.rest.call(null,ps__15143);
ps__15143 = G__15152;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15147))
{return or__3548__auto____15147;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15284 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15284))
{return or__3548__auto____15284;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15302 = cljs.core.reduce.call(null,(function (be,p__15288){
var vec__15289__15290 = p__15288;
var k__15291 = cljs.core.nth.call(null,vec__15289__15290,0,null);
var ___15294 = cljs.core.nth.call(null,vec__15289__15290,1,null);
var e__15295 = vec__15289__15290;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15291)))
{var be2__15299 = (cljs.core.truth_((function (){var or__3548__auto____15298 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15298))
{return or__3548__auto____15298;
} else
{return cljs.core.dominates.call(null,k__15291,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15295:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15299),k__15291,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15291," and ",cljs.core.first.call(null,be2__15299),", and neither is preferred")));
}
return be2__15299;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15302))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15302));
return cljs.core.second.call(null,best_entry__15302);
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
if(cljs.core.truth_((function (){var and__3546__auto____15307 = mf;

if(cljs.core.truth_(and__3546__auto____15307))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15307;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15308 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15308))
{return or__3548__auto____15308;
} else
{var or__3548__auto____15311 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15311))
{return or__3548__auto____15311;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15317 = mf;

if(cljs.core.truth_(and__3546__auto____15317))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15317;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15319 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15319))
{return or__3548__auto____15319;
} else
{var or__3548__auto____15320 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15322 = mf;

if(cljs.core.truth_(and__3546__auto____15322))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15322;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15323 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15323))
{return or__3548__auto____15323;
} else
{var or__3548__auto____15324 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15324))
{return or__3548__auto____15324;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15325 = mf;

if(cljs.core.truth_(and__3546__auto____15325))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15325;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15326 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15326))
{return or__3548__auto____15326;
} else
{var or__3548__auto____15327 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15327))
{return or__3548__auto____15327;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15328 = mf;

if(cljs.core.truth_(and__3546__auto____15328))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15328;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15330 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15330))
{return or__3548__auto____15330;
} else
{var or__3548__auto____15331 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15331))
{return or__3548__auto____15331;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15334 = mf;

if(cljs.core.truth_(and__3546__auto____15334))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15334;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15336 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15336))
{return or__3548__auto____15336;
} else
{var or__3548__auto____15338 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15338))
{return or__3548__auto____15338;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15340 = mf;

if(cljs.core.truth_(and__3546__auto____15340))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15340;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15370 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15370))
{return or__3548__auto____15370;
} else
{var or__3548__auto____15371 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15371))
{return or__3548__auto____15371;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15372 = mf;

if(cljs.core.truth_(and__3546__auto____15372))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15372;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15373 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15373))
{return or__3548__auto____15373;
} else
{var or__3548__auto____15374 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15374))
{return or__3548__auto____15374;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15427 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15446 = cljs.core._get_method.call(null,mf,dispatch_val__15427);

if(cljs.core.truth_(target_fn__15446))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15427)));
}
return cljs.core.apply.call(null,target_fn__15446,args);
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
var this__15448 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15449 = this;
cljs.core.swap_BANG_.call(null,this__15449.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15449.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15449.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15449.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15452 = this;
cljs.core.swap_BANG_.call(null,this__15452.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15452.method_cache,this__15452.method_table,this__15452.cached_hierarchy,this__15452.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15454 = this;
cljs.core.swap_BANG_.call(null,this__15454.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15454.method_cache,this__15454.method_table,this__15454.cached_hierarchy,this__15454.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15456 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15456.cached_hierarchy),cljs.core.deref.call(null,this__15456.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15456.method_cache,this__15456.method_table,this__15456.cached_hierarchy,this__15456.hierarchy);
}
var temp__3695__auto____15457 = cljs.core.deref.call(null,this__15456.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15457))
{var target_fn__15458 = temp__3695__auto____15457;

return target_fn__15458;
} else
{var temp__3695__auto____15459 = cljs.core.find_and_cache_best_method.call(null,this__15456.name,dispatch_val,this__15456.hierarchy,this__15456.method_table,this__15456.prefer_table,this__15456.method_cache,this__15456.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15459))
{var target_fn__15460 = temp__3695__auto____15459;

return target_fn__15460;
} else
{return cljs.core.deref.call(null,this__15456.method_table).call(null,this__15456.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15461 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15461.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15461.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15461.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15461.method_cache,this__15461.method_table,this__15461.cached_hierarchy,this__15461.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15465 = this;
return cljs.core.deref.call(null,this__15465.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15468 = this;
return cljs.core.deref.call(null,this__15468.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15469 = this;
return cljs.core.do_dispatch.call(null,mf,this__15469.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15489__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15489 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15489__delegate.call(this, _, args);
};
G__15489.cljs$lang$maxFixedArity = 1;
G__15489.cljs$lang$applyTo = (function (arglist__15490){
var _ = cljs.core.first(arglist__15490);
var args = cljs.core.rest(arglist__15490);
return G__15489__delegate.call(this, _, args);
});
return G__15489;
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
