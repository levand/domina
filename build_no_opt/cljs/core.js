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
{var or__3548__auto____7261 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7261))
{return or__3548__auto____7261;
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
var _invoke__7441 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7263 = this$;

if(cljs.core.truth_(and__3546__auto____7263))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7263;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7442 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7266 = this$;

if(cljs.core.truth_(and__3546__auto____7266))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7266;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7268 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7268))
{return or__3548__auto____7268;
} else
{var or__3548__auto____7270 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7270))
{return or__3548__auto____7270;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7444 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7272 = this$;

if(cljs.core.truth_(and__3546__auto____7272))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7272;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7274 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7274))
{return or__3548__auto____7274;
} else
{var or__3548__auto____7276 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7276))
{return or__3548__auto____7276;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7445 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7278 = this$;

if(cljs.core.truth_(and__3546__auto____7278))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7278;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7280 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7280))
{return or__3548__auto____7280;
} else
{var or__3548__auto____7282 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7282))
{return or__3548__auto____7282;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7446 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7284 = this$;

if(cljs.core.truth_(and__3546__auto____7284))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7284;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7286 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7286))
{return or__3548__auto____7286;
} else
{var or__3548__auto____7289 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7447 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7291 = this$;

if(cljs.core.truth_(and__3546__auto____7291))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7291;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
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
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7448 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7299 = this$;

if(cljs.core.truth_(and__3546__auto____7299))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7299;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7449 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7306 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{var or__3548__auto____7308 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7308))
{return or__3548__auto____7308;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7450 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7310 = this$;

if(cljs.core.truth_(and__3546__auto____7310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7313 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{var or__3548__auto____7314 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7314))
{return or__3548__auto____7314;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7451 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7317 = this$;

if(cljs.core.truth_(and__3546__auto____7317))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7317;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7452 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7323 = this$;

if(cljs.core.truth_(and__3546__auto____7323))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7323;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7325 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7325))
{return or__3548__auto____7325;
} else
{var or__3548__auto____7327 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7327))
{return or__3548__auto____7327;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7453 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = this$;

if(cljs.core.truth_(and__3546__auto____7329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7330 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7330))
{return or__3548__auto____7330;
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
var _invoke__7454 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7332 = this$;

if(cljs.core.truth_(and__3546__auto____7332))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7332;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7455 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7338 = this$;

if(cljs.core.truth_(and__3546__auto____7338))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7338;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7340 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7340))
{return or__3548__auto____7340;
} else
{var or__3548__auto____7342 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7456 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7345 = this$;

if(cljs.core.truth_(and__3546__auto____7345))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7345;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7351 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7351))
{return or__3548__auto____7351;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7457 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7355 = this$;

if(cljs.core.truth_(and__3546__auto____7355))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7355;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7458 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7364 = this$;

if(cljs.core.truth_(and__3546__auto____7364))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7364;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7368 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{var or__3548__auto____7370 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7459 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7373 = this$;

if(cljs.core.truth_(and__3546__auto____7373))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7373;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7461 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = this$;

if(cljs.core.truth_(and__3546__auto____7381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7392 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
} else
{var or__3548__auto____7393 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7393))
{return or__3548__auto____7393;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7462 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7402 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7402))
{return or__3548__auto____7402;
} else
{var or__3548__auto____7404 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7404))
{return or__3548__auto____7404;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7463 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7411 = this$;

if(cljs.core.truth_(and__3546__auto____7411))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7411;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7415 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7415))
{return or__3548__auto____7415;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
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
return _invoke__7441.call(this,this$);
case  2 :
return _invoke__7442.call(this,this$,a);
case  3 :
return _invoke__7444.call(this,this$,a,b);
case  4 :
return _invoke__7445.call(this,this$,a,b,c);
case  5 :
return _invoke__7446.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7447.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7448.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7449.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7450.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7451.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7452.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7453.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7454.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7455.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7456.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7457.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7458.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7459.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7461.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7462.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7463.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
if(cljs.core.truth_((function (){var and__3546__auto____7691 = coll;

if(cljs.core.truth_(and__3546__auto____7691))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7691;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7692 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7692))
{return or__3548__auto____7692;
} else
{var or__3548__auto____7693 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7694 = coll;

if(cljs.core.truth_(and__3546__auto____7694))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7694;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7698 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7698))
{return or__3548__auto____7698;
} else
{var or__3548__auto____7761 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7761))
{return or__3548__auto____7761;
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
var _nth__7937 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7922 = coll;

if(cljs.core.truth_(and__3546__auto____7922))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7922;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7927 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7938 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7929 = coll;

if(cljs.core.truth_(and__3546__auto____7929))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7929;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7933 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7933))
{return or__3548__auto____7933;
} else
{var or__3548__auto____7934 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7934))
{return or__3548__auto____7934;
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
return _nth__7937.call(this,coll,n);
case  3 :
return _nth__7938.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7944 = coll;

if(cljs.core.truth_(and__3546__auto____7944))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7944;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7946 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7946))
{return or__3548__auto____7946;
} else
{var or__3548__auto____7948 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7950 = coll;

if(cljs.core.truth_(and__3546__auto____7950))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7950;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7953 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7953))
{return or__3548__auto____7953;
} else
{var or__3548__auto____7955 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
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
var _lookup__7976 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7967 = o;

if(cljs.core.truth_(and__3546__auto____7967))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7967;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7969 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{var or__3548__auto____7971 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7971))
{return or__3548__auto____7971;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7977 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7973 = o;

if(cljs.core.truth_(and__3546__auto____7973))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7973;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7974 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{var or__3548__auto____7975 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
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
return _lookup__7976.call(this,o,k);
case  3 :
return _lookup__7977.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7985 = coll;

if(cljs.core.truth_(and__3546__auto____7985))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7985;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____8002 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____8042 = coll;

if(cljs.core.truth_(and__3546__auto____8042))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____8042;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____8055 = coll;

if(cljs.core.truth_(and__3546__auto____8055))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____8055;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____8059 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8059))
{return or__3548__auto____8059;
} else
{var or__3548__auto____8060 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____8060))
{return or__3548__auto____8060;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____8073 = coll;

if(cljs.core.truth_(and__3546__auto____8073))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____8073;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____8075 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8075))
{return or__3548__auto____8075;
} else
{var or__3548__auto____8077 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8080 = coll;

if(cljs.core.truth_(and__3546__auto____8080))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____8080;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____8099 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
} else
{var or__3548__auto____8100 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____8100))
{return or__3548__auto____8100;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____8105 = coll;

if(cljs.core.truth_(and__3546__auto____8105))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____8105;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____8112 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8112))
{return or__3548__auto____8112;
} else
{var or__3548__auto____8113 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____8113))
{return or__3548__auto____8113;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____8117 = coll;

if(cljs.core.truth_(and__3546__auto____8117))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____8117;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____8118 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8118))
{return or__3548__auto____8118;
} else
{var or__3548__auto____8120 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8120))
{return or__3548__auto____8120;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8140 = o;

if(cljs.core.truth_(and__3546__auto____8140))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8140;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8144 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8150 = o;

if(cljs.core.truth_(and__3546__auto____8150))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8150;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8151 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8151))
{return or__3548__auto____8151;
} else
{var or__3548__auto____8153 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8160 = o;

if(cljs.core.truth_(and__3546__auto____8160))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8160;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8161 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8161))
{return or__3548__auto____8161;
} else
{var or__3548__auto____8162 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8184 = o;

if(cljs.core.truth_(and__3546__auto____8184))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8184;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8185 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8185))
{return or__3548__auto____8185;
} else
{var or__3548__auto____8186 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8186))
{return or__3548__auto____8186;
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
var _reduce__8217 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8197 = coll;

if(cljs.core.truth_(and__3546__auto____8197))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8197;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8203 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8203))
{return or__3548__auto____8203;
} else
{var or__3548__auto____8207 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8207))
{return or__3548__auto____8207;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8218 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8210 = coll;

if(cljs.core.truth_(and__3546__auto____8210))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8210;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8211 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8211))
{return or__3548__auto____8211;
} else
{var or__3548__auto____8214 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8214))
{return or__3548__auto____8214;
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
return _reduce__8217.call(this,coll,f);
case  3 :
return _reduce__8218.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8228 = o;

if(cljs.core.truth_(and__3546__auto____8228))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8228;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8229 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8229))
{return or__3548__auto____8229;
} else
{var or__3548__auto____8230 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8230))
{return or__3548__auto____8230;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8232 = o;

if(cljs.core.truth_(and__3546__auto____8232))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8232;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8235 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8235))
{return or__3548__auto____8235;
} else
{var or__3548__auto____8236 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8236))
{return or__3548__auto____8236;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8243 = o;

if(cljs.core.truth_(and__3546__auto____8243))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8243;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8244 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8244))
{return or__3548__auto____8244;
} else
{var or__3548__auto____8245 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8245))
{return or__3548__auto____8245;
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
if(cljs.core.truth_((function (){var and__3546__auto____8260 = o;

if(cljs.core.truth_(and__3546__auto____8260))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8260;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8267 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8267))
{return or__3548__auto____8267;
} else
{var or__3548__auto____8270 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8270))
{return or__3548__auto____8270;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8276 = d;

if(cljs.core.truth_(and__3546__auto____8276))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8276;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8279 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8279))
{return or__3548__auto____8279;
} else
{var or__3548__auto____8284 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8284))
{return or__3548__auto____8284;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8354 = this$;

if(cljs.core.truth_(and__3546__auto____8354))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8354;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8357 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8357))
{return or__3548__auto____8357;
} else
{var or__3548__auto____8358 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8358))
{return or__3548__auto____8358;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8361 = this$;

if(cljs.core.truth_(and__3546__auto____8361))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8361;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8364 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8364))
{return or__3548__auto____8364;
} else
{var or__3548__auto____8366 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8366))
{return or__3548__auto____8366;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8368 = this$;

if(cljs.core.truth_(and__3546__auto____8368))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8368;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8380 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8380))
{return or__3548__auto____8380;
} else
{var or__3548__auto____8387 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8387))
{return or__3548__auto____8387;
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
var G__8431 = null;
var G__8431__8432 = (function (o,k){
return null;
});
var G__8431__8433 = (function (o,k,not_found){
return not_found;
});
G__8431 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8431__8432.call(this,o,k);
case  3 :
return G__8431__8433.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8431;
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
var G__8437 = null;
var G__8437__8438 = (function (_,f){
return f.call(null);
});
var G__8437__8439 = (function (_,f,start){
return start;
});
G__8437 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8437__8438.call(this,_,f);
case  3 :
return G__8437__8439.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8437;
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
var G__8441 = null;
var G__8441__8442 = (function (_,n){
return null;
});
var G__8441__8443 = (function (_,n,not_found){
return not_found;
});
G__8441 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8441__8442.call(this,_,n);
case  3 :
return G__8441__8443.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8441;
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
var ci_reduce__8464 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8450 = cljs.core._nth.call(null,cicoll,0);
var n__8451 = 1;

while(true){
if(cljs.core.truth_((n__8451 < cljs.core._count.call(null,cicoll))))
{{
var G__8468 = f.call(null,val__8450,cljs.core._nth.call(null,cicoll,n__8451));
var G__8469 = (n__8451 + 1);
val__8450 = G__8468;
n__8451 = G__8469;
continue;
}
} else
{return val__8450;
}
break;
}
}
});
var ci_reduce__8465 = (function (cicoll,f,val){
var val__8454 = val;
var n__8456 = 0;

while(true){
if(cljs.core.truth_((n__8456 < cljs.core._count.call(null,cicoll))))
{{
var G__8470 = f.call(null,val__8454,cljs.core._nth.call(null,cicoll,n__8456));
var G__8471 = (n__8456 + 1);
val__8454 = G__8470;
n__8456 = G__8471;
continue;
}
} else
{return val__8454;
}
break;
}
});
var ci_reduce__8466 = (function (cicoll,f,val,idx){
var val__8461 = val;
var n__8462 = idx;

while(true){
if(cljs.core.truth_((n__8462 < cljs.core._count.call(null,cicoll))))
{{
var G__8473 = f.call(null,val__8461,cljs.core._nth.call(null,cicoll,n__8462));
var G__8474 = (n__8462 + 1);
val__8461 = G__8473;
n__8462 = G__8474;
continue;
}
} else
{return val__8461;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8464.call(this,cicoll,f);
case  3 :
return ci_reduce__8465.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8466.call(this,cicoll,f,val,idx);
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
var this__8541 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8570 = null;
var G__8570__8571 = (function (_,f){
var this__8542 = this;
return cljs.core.ci_reduce.call(null,this__8542.a,f,(this__8542.a[this__8542.i]),(this__8542.i + 1));
});
var G__8570__8572 = (function (_,f,start){
var this__8543 = this;
return cljs.core.ci_reduce.call(null,this__8543.a,f,start,this__8543.i);
});
G__8570 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8570__8571.call(this,_,f);
case  3 :
return G__8570__8572.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8570;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8545 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8546 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8574 = null;
var G__8574__8575 = (function (coll,n){
var this__8550 = this;
var i__8551 = (n + this__8550.i);

if(cljs.core.truth_((i__8551 < this__8550.a.length)))
{return (this__8550.a[i__8551]);
} else
{return null;
}
});
var G__8574__8576 = (function (coll,n,not_found){
var this__8557 = this;
var i__8558 = (n + this__8557.i);

if(cljs.core.truth_((i__8558 < this__8557.a.length)))
{return (this__8557.a[i__8558]);
} else
{return not_found;
}
});
G__8574 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8574__8575.call(this,coll,n);
case  3 :
return G__8574__8576.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8574;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8560 = this;
return (this__8560.a.length - this__8560.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8562 = this;
return (this__8562.a[this__8562.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8563 = this;
if(cljs.core.truth_(((this__8563.i + 1) < this__8563.a.length)))
{return (new cljs.core.IndexedSeq(this__8563.a,(this__8563.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8567 = this;
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
var G__8628 = null;
var G__8628__8630 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8628__8631 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8628 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8628__8630.call(this,array,f);
case  3 :
return G__8628__8631.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8628;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8637 = null;
var G__8637__8638 = (function (array,k){
return (array[k]);
});
var G__8637__8639 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8637 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8637__8638.call(this,array,k);
case  3 :
return G__8637__8639.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8637;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8660 = null;
var G__8660__8662 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8660__8663 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8660 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8660__8662.call(this,array,n);
case  3 :
return G__8660__8663.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8660;
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
var temp__3698__auto____8680 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8680))
{var s__8685 = temp__3698__auto____8680;

return cljs.core._first.call(null,s__8685);
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
var G__8722 = cljs.core.next.call(null,s);
s = G__8722;
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
var s__8727 = cljs.core.seq.call(null,x);
var n__8728 = 0;

while(true){
if(cljs.core.truth_(s__8727))
{{
var G__8731 = cljs.core.next.call(null,s__8727);
var G__8732 = (n__8728 + 1);
s__8727 = G__8731;
n__8728 = G__8732;
continue;
}
} else
{return n__8728;
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
var conj__8741 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8742 = (function() { 
var G__8747__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8751 = conj.call(null,coll,x);
var G__8752 = cljs.core.first.call(null,xs);
var G__8753 = cljs.core.next.call(null,xs);
coll = G__8751;
x = G__8752;
xs = G__8753;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8747 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8747__delegate.call(this, coll, x, xs);
};
G__8747.cljs$lang$maxFixedArity = 2;
G__8747.cljs$lang$applyTo = (function (arglist__8760){
var coll = cljs.core.first(arglist__8760);
var x = cljs.core.first(cljs.core.next(arglist__8760));
var xs = cljs.core.rest(cljs.core.next(arglist__8760));
return G__8747__delegate.call(this, coll, x, xs);
});
return G__8747;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8741.call(this,coll,x);
default:
return conj__8742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8742.cljs$lang$applyTo;
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
var nth__8786 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8787 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8786.call(this,coll,n);
case  3 :
return nth__8787.call(this,coll,n,not_found);
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
var get__8794 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8795 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8794.call(this,o,k);
case  3 :
return get__8795.call(this,o,k,not_found);
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
var assoc__8802 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8803 = (function() { 
var G__8806__delegate = function (coll,k,v,kvs){
while(true){
var ret__8799 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8807 = ret__8799;
var G__8808 = cljs.core.first.call(null,kvs);
var G__8809 = cljs.core.second.call(null,kvs);
var G__8810 = cljs.core.nnext.call(null,kvs);
coll = G__8807;
k = G__8808;
v = G__8809;
kvs = G__8810;
continue;
}
} else
{return ret__8799;
}
break;
}
};
var G__8806 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8806__delegate.call(this, coll, k, v, kvs);
};
G__8806.cljs$lang$maxFixedArity = 3;
G__8806.cljs$lang$applyTo = (function (arglist__8813){
var coll = cljs.core.first(arglist__8813);
var k = cljs.core.first(cljs.core.next(arglist__8813));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8813)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8813)));
return G__8806__delegate.call(this, coll, k, v, kvs);
});
return G__8806;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8802.call(this,coll,k,v);
default:
return assoc__8803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8803.cljs$lang$applyTo;
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
var dissoc__8816 = (function (coll){
return coll;
});
var dissoc__8817 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8818 = (function() { 
var G__8820__delegate = function (coll,k,ks){
while(true){
var ret__8815 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8821 = ret__8815;
var G__8822 = cljs.core.first.call(null,ks);
var G__8823 = cljs.core.next.call(null,ks);
coll = G__8821;
k = G__8822;
ks = G__8823;
continue;
}
} else
{return ret__8815;
}
break;
}
};
var G__8820 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8820__delegate.call(this, coll, k, ks);
};
G__8820.cljs$lang$maxFixedArity = 2;
G__8820.cljs$lang$applyTo = (function (arglist__8827){
var coll = cljs.core.first(arglist__8827);
var k = cljs.core.first(cljs.core.next(arglist__8827));
var ks = cljs.core.rest(cljs.core.next(arglist__8827));
return G__8820__delegate.call(this, coll, k, ks);
});
return G__8820;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8816.call(this,coll);
case  2 :
return dissoc__8817.call(this,coll,k);
default:
return dissoc__8818.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8818.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8831 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8833 = x__445__auto____8831;

if(cljs.core.truth_(and__3546__auto____8833))
{var and__3546__auto____8834 = x__445__auto____8831.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8834))
{return cljs.core.not.call(null,x__445__auto____8831.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8834;
}
} else
{return and__3546__auto____8833;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8831);
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
var disj__8843 = (function (coll){
return coll;
});
var disj__8844 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8845 = (function() { 
var G__8848__delegate = function (coll,k,ks){
while(true){
var ret__8841 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8851 = ret__8841;
var G__8853 = cljs.core.first.call(null,ks);
var G__8854 = cljs.core.next.call(null,ks);
coll = G__8851;
k = G__8853;
ks = G__8854;
continue;
}
} else
{return ret__8841;
}
break;
}
};
var G__8848 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8848__delegate.call(this, coll, k, ks);
};
G__8848.cljs$lang$maxFixedArity = 2;
G__8848.cljs$lang$applyTo = (function (arglist__8856){
var coll = cljs.core.first(arglist__8856);
var k = cljs.core.first(cljs.core.next(arglist__8856));
var ks = cljs.core.rest(cljs.core.next(arglist__8856));
return G__8848__delegate.call(this, coll, k, ks);
});
return G__8848;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8843.call(this,coll);
case  2 :
return disj__8844.call(this,coll,k);
default:
return disj__8845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8845.cljs$lang$applyTo;
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
{var x__445__auto____8863 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8864 = x__445__auto____8863;

if(cljs.core.truth_(and__3546__auto____8864))
{var and__3546__auto____8865 = x__445__auto____8863.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8865))
{return cljs.core.not.call(null,x__445__auto____8863.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8865;
}
} else
{return and__3546__auto____8864;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8863);
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
{var x__445__auto____8873 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8874 = x__445__auto____8873;

if(cljs.core.truth_(and__3546__auto____8874))
{var and__3546__auto____8875 = x__445__auto____8873.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8875))
{return cljs.core.not.call(null,x__445__auto____8873.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8875;
}
} else
{return and__3546__auto____8874;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8873);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8882 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8883 = x__445__auto____8882;

if(cljs.core.truth_(and__3546__auto____8883))
{var and__3546__auto____8884 = x__445__auto____8882.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8884))
{return cljs.core.not.call(null,x__445__auto____8882.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8884;
}
} else
{return and__3546__auto____8883;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8882);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8892 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8893 = x__445__auto____8892;

if(cljs.core.truth_(and__3546__auto____8893))
{var and__3546__auto____8895 = x__445__auto____8892.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8895))
{return cljs.core.not.call(null,x__445__auto____8892.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8895;
}
} else
{return and__3546__auto____8893;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8892);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8896 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8897 = x__445__auto____8896;

if(cljs.core.truth_(and__3546__auto____8897))
{var and__3546__auto____8898 = x__445__auto____8896.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8898))
{return cljs.core.not.call(null,x__445__auto____8896.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8898;
}
} else
{return and__3546__auto____8897;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8896);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8903 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8904 = x__445__auto____8903;

if(cljs.core.truth_(and__3546__auto____8904))
{var and__3546__auto____8906 = x__445__auto____8903.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8906))
{return cljs.core.not.call(null,x__445__auto____8903.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8906;
}
} else
{return and__3546__auto____8904;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8903);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8912 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8914 = x__445__auto____8912;

if(cljs.core.truth_(and__3546__auto____8914))
{var and__3546__auto____8917 = x__445__auto____8912.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8917))
{return cljs.core.not.call(null,x__445__auto____8912.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8917;
}
} else
{return and__3546__auto____8914;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8912);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8931 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8931.push(key);
}));
return keys__8931;
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
{var x__445__auto____8989 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8990 = x__445__auto____8989;

if(cljs.core.truth_(and__3546__auto____8990))
{var and__3546__auto____8991 = x__445__auto____8989.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8991))
{return cljs.core.not.call(null,x__445__auto____8989.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8991;
}
} else
{return and__3546__auto____8990;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8989);
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
var and__3546__auto____9006 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9006))
{return cljs.core.not.call(null,(function (){var or__3548__auto____9007 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____9007))
{return or__3548__auto____9007;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____9006;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____9019 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9019))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____9019;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____9022 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____9022))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____9022;
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
var and__3546__auto____9037 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____9037))
{return (n == n.toFixed());
} else
{return and__3546__auto____9037;
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
if(cljs.core.truth_((function (){var and__3546__auto____9083 = coll;

if(cljs.core.truth_(and__3546__auto____9083))
{var and__3546__auto____9084 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____9084))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____9084;
}
} else
{return and__3546__auto____9083;
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
var distinct_QMARK___9136 = (function (x){
return true;
});
var distinct_QMARK___9137 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9138 = (function() { 
var G__9140__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9132 = cljs.core.set([y,x]);
var xs__9133 = more;

while(true){
var x__9134 = cljs.core.first.call(null,xs__9133);
var etc__9135 = cljs.core.next.call(null,xs__9133);

if(cljs.core.truth_(xs__9133))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9132,x__9134)))
{return false;
} else
{{
var G__9141 = cljs.core.conj.call(null,s__9132,x__9134);
var G__9142 = etc__9135;
s__9132 = G__9141;
xs__9133 = G__9142;
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
var G__9140 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9140__delegate.call(this, x, y, more);
};
G__9140.cljs$lang$maxFixedArity = 2;
G__9140.cljs$lang$applyTo = (function (arglist__9147){
var x = cljs.core.first(arglist__9147);
var y = cljs.core.first(cljs.core.next(arglist__9147));
var more = cljs.core.rest(cljs.core.next(arglist__9147));
return G__9140__delegate.call(this, x, y, more);
});
return G__9140;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9136.call(this,x);
case  2 :
return distinct_QMARK___9137.call(this,x,y);
default:
return distinct_QMARK___9138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9138.cljs$lang$applyTo;
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
var r__9153 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9153)))
{return r__9153;
} else
{if(cljs.core.truth_(r__9153))
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
var sort__9163 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9164 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9162 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9162,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9162);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9163.call(this,comp);
case  2 :
return sort__9164.call(this,comp,coll);
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
var sort_by__9166 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9167 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9166.call(this,keyfn,comp);
case  3 :
return sort_by__9167.call(this,keyfn,comp,coll);
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
var reduce__9176 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9177 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9176.call(this,f,val);
case  3 :
return reduce__9177.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9188 = (function (f,coll){
var temp__3695__auto____9179 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9179))
{var s__9180 = temp__3695__auto____9179;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9180),cljs.core.next.call(null,s__9180));
} else
{return f.call(null);
}
});
var seq_reduce__9189 = (function (f,val,coll){
var val__9185 = val;
var coll__9186 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9186))
{{
var G__9192 = f.call(null,val__9185,cljs.core.first.call(null,coll__9186));
var G__9193 = cljs.core.next.call(null,coll__9186);
val__9185 = G__9192;
coll__9186 = G__9193;
continue;
}
} else
{return val__9185;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9188.call(this,f,val);
case  3 :
return seq_reduce__9189.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9199 = null;
var G__9199__9200 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9199__9201 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9199 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9199__9200.call(this,coll,f);
case  3 :
return G__9199__9201.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9199;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9322 = (function (){
return 0;
});
var _PLUS___9323 = (function (x){
return x;
});
var _PLUS___9324 = (function (x,y){
return (x + y);
});
var _PLUS___9325 = (function() { 
var G__9327__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9327 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9327__delegate.call(this, x, y, more);
};
G__9327.cljs$lang$maxFixedArity = 2;
G__9327.cljs$lang$applyTo = (function (arglist__9328){
var x = cljs.core.first(arglist__9328);
var y = cljs.core.first(cljs.core.next(arglist__9328));
var more = cljs.core.rest(cljs.core.next(arglist__9328));
return G__9327__delegate.call(this, x, y, more);
});
return G__9327;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9322.call(this);
case  1 :
return _PLUS___9323.call(this,x);
case  2 :
return _PLUS___9324.call(this,x,y);
default:
return _PLUS___9325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9325.cljs$lang$applyTo;
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
var ___9338 = (function (x){
return (- x);
});
var ___9339 = (function (x,y){
return (x - y);
});
var ___9340 = (function() { 
var G__9346__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9346 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9346__delegate.call(this, x, y, more);
};
G__9346.cljs$lang$maxFixedArity = 2;
G__9346.cljs$lang$applyTo = (function (arglist__9348){
var x = cljs.core.first(arglist__9348);
var y = cljs.core.first(cljs.core.next(arglist__9348));
var more = cljs.core.rest(cljs.core.next(arglist__9348));
return G__9346__delegate.call(this, x, y, more);
});
return G__9346;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9338.call(this,x);
case  2 :
return ___9339.call(this,x,y);
default:
return ___9340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9340.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9362 = (function (){
return 1;
});
var _STAR___9363 = (function (x){
return x;
});
var _STAR___9365 = (function (x,y){
return (x * y);
});
var _STAR___9367 = (function() { 
var G__9373__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9373 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9373__delegate.call(this, x, y, more);
};
G__9373.cljs$lang$maxFixedArity = 2;
G__9373.cljs$lang$applyTo = (function (arglist__9375){
var x = cljs.core.first(arglist__9375);
var y = cljs.core.first(cljs.core.next(arglist__9375));
var more = cljs.core.rest(cljs.core.next(arglist__9375));
return G__9373__delegate.call(this, x, y, more);
});
return G__9373;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9362.call(this);
case  1 :
return _STAR___9363.call(this,x);
case  2 :
return _STAR___9365.call(this,x,y);
default:
return _STAR___9367.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9367.cljs$lang$applyTo;
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
var _SLASH___9386 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9388 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9390 = (function() { 
var G__9396__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9396 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9396__delegate.call(this, x, y, more);
};
G__9396.cljs$lang$maxFixedArity = 2;
G__9396.cljs$lang$applyTo = (function (arglist__9397){
var x = cljs.core.first(arglist__9397);
var y = cljs.core.first(cljs.core.next(arglist__9397));
var more = cljs.core.rest(cljs.core.next(arglist__9397));
return G__9396__delegate.call(this, x, y, more);
});
return G__9396;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9386.call(this,x);
case  2 :
return _SLASH___9388.call(this,x,y);
default:
return _SLASH___9390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9390.cljs$lang$applyTo;
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
var _LT___9408 = (function (x){
return true;
});
var _LT___9409 = (function (x,y){
return (x < y);
});
var _LT___9410 = (function() { 
var G__9417__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
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
{return (y < cljs.core.first.call(null,more));
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
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9408.call(this,x);
case  2 :
return _LT___9409.call(this,x,y);
default:
return _LT___9410.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9410.cljs$lang$applyTo;
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
var _LT__EQ___9426 = (function (x){
return true;
});
var _LT__EQ___9427 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9429 = (function() { 
var G__9434__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
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
{return (y <= cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__9434 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9434__delegate.call(this, x, y, more);
};
G__9434.cljs$lang$maxFixedArity = 2;
G__9434.cljs$lang$applyTo = (function (arglist__9440){
var x = cljs.core.first(arglist__9440);
var y = cljs.core.first(cljs.core.next(arglist__9440));
var more = cljs.core.rest(cljs.core.next(arglist__9440));
return G__9434__delegate.call(this, x, y, more);
});
return G__9434;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9426.call(this,x);
case  2 :
return _LT__EQ___9427.call(this,x,y);
default:
return _LT__EQ___9429.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9429.cljs$lang$applyTo;
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
var _GT___9441 = (function (x){
return true;
});
var _GT___9442 = (function (x,y){
return (x > y);
});
var _GT___9443 = (function() { 
var G__9445__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9447 = y;
var G__9448 = cljs.core.first.call(null,more);
var G__9449 = cljs.core.next.call(null,more);
x = G__9447;
y = G__9448;
more = G__9449;
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
var G__9445 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9445__delegate.call(this, x, y, more);
};
G__9445.cljs$lang$maxFixedArity = 2;
G__9445.cljs$lang$applyTo = (function (arglist__9450){
var x = cljs.core.first(arglist__9450);
var y = cljs.core.first(cljs.core.next(arglist__9450));
var more = cljs.core.rest(cljs.core.next(arglist__9450));
return G__9445__delegate.call(this, x, y, more);
});
return G__9445;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9441.call(this,x);
case  2 :
return _GT___9442.call(this,x,y);
default:
return _GT___9443.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9443.cljs$lang$applyTo;
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
var _GT__EQ___9473 = (function (x){
return true;
});
var _GT__EQ___9474 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9475 = (function() { 
var G__9482__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9483 = y;
var G__9484 = cljs.core.first.call(null,more);
var G__9485 = cljs.core.next.call(null,more);
x = G__9483;
y = G__9484;
more = G__9485;
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
var G__9482 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9482__delegate.call(this, x, y, more);
};
G__9482.cljs$lang$maxFixedArity = 2;
G__9482.cljs$lang$applyTo = (function (arglist__9490){
var x = cljs.core.first(arglist__9490);
var y = cljs.core.first(cljs.core.next(arglist__9490));
var more = cljs.core.rest(cljs.core.next(arglist__9490));
return G__9482__delegate.call(this, x, y, more);
});
return G__9482;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9473.call(this,x);
case  2 :
return _GT__EQ___9474.call(this,x,y);
default:
return _GT__EQ___9475.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9475.cljs$lang$applyTo;
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
var max__9518 = (function (x){
return x;
});
var max__9519 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9520 = (function() { 
var G__9522__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9522 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9522__delegate.call(this, x, y, more);
};
G__9522.cljs$lang$maxFixedArity = 2;
G__9522.cljs$lang$applyTo = (function (arglist__9523){
var x = cljs.core.first(arglist__9523);
var y = cljs.core.first(cljs.core.next(arglist__9523));
var more = cljs.core.rest(cljs.core.next(arglist__9523));
return G__9522__delegate.call(this, x, y, more);
});
return G__9522;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9518.call(this,x);
case  2 :
return max__9519.call(this,x,y);
default:
return max__9520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9520.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9524 = (function (x){
return x;
});
var min__9525 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9526 = (function() { 
var G__9528__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9528 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9528__delegate.call(this, x, y, more);
};
G__9528.cljs$lang$maxFixedArity = 2;
G__9528.cljs$lang$applyTo = (function (arglist__9529){
var x = cljs.core.first(arglist__9529);
var y = cljs.core.first(cljs.core.next(arglist__9529));
var more = cljs.core.rest(cljs.core.next(arglist__9529));
return G__9528__delegate.call(this, x, y, more);
});
return G__9528;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9524.call(this,x);
case  2 :
return min__9525.call(this,x,y);
default:
return min__9526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9526.cljs$lang$applyTo;
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
var rem__9530 = (n % d);

return cljs.core.fix.call(null,((n - rem__9530) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9531 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9531));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9532 = (function (){
return Math.random.call(null);
});
var rand__9533 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9532.call(this);
case  1 :
return rand__9533.call(this,n);
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
var _EQ__EQ___9567 = (function (x){
return true;
});
var _EQ__EQ___9568 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9569 = (function() { 
var G__9572__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9573 = y;
var G__9574 = cljs.core.first.call(null,more);
var G__9575 = cljs.core.next.call(null,more);
x = G__9573;
y = G__9574;
more = G__9575;
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
var G__9572 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9572__delegate.call(this, x, y, more);
};
G__9572.cljs$lang$maxFixedArity = 2;
G__9572.cljs$lang$applyTo = (function (arglist__9576){
var x = cljs.core.first(arglist__9576);
var y = cljs.core.first(cljs.core.next(arglist__9576));
var more = cljs.core.rest(cljs.core.next(arglist__9576));
return G__9572__delegate.call(this, x, y, more);
});
return G__9572;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9567.call(this,x);
case  2 :
return _EQ__EQ___9568.call(this,x,y);
default:
return _EQ__EQ___9569.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9569.cljs$lang$applyTo;
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
var n__9580 = n;
var xs__9582 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9583 = xs__9582;

if(cljs.core.truth_(and__3546__auto____9583))
{return (n__9580 > 0);
} else
{return and__3546__auto____9583;
}
})()))
{{
var G__9590 = (n__9580 - 1);
var G__9591 = cljs.core.next.call(null,xs__9582);
n__9580 = G__9590;
xs__9582 = G__9591;
continue;
}
} else
{return xs__9582;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9600 = null;
var G__9600__9603 = (function (coll,n){
var temp__3695__auto____9593 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9593))
{var xs__9595 = temp__3695__auto____9593;

return cljs.core.first.call(null,xs__9595);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9600__9605 = (function (coll,n,not_found){
var temp__3695__auto____9596 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9596))
{var xs__9599 = temp__3695__auto____9596;

return cljs.core.first.call(null,xs__9599);
} else
{return not_found;
}
});
G__9600 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9600__9603.call(this,coll,n);
case  3 :
return G__9600__9605.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9600;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9614 = (function (){
return "";
});
var str_STAR___9615 = (function (x){
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
var str_STAR___9617 = (function() { 
var G__9622__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9625 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9628 = cljs.core.next.call(null,more);
sb = G__9625;
more = G__9628;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9622 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9622__delegate.call(this, x, ys);
};
G__9622.cljs$lang$maxFixedArity = 1;
G__9622.cljs$lang$applyTo = (function (arglist__9630){
var x = cljs.core.first(arglist__9630);
var ys = cljs.core.rest(arglist__9630);
return G__9622__delegate.call(this, x, ys);
});
return G__9622;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9614.call(this);
case  1 :
return str_STAR___9615.call(this,x);
default:
return str_STAR___9617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9617.cljs$lang$applyTo;
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
var str__9637 = (function (){
return "";
});
var str__9638 = (function (x){
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
var str__9639 = (function() { 
var G__9642__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9642 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9642__delegate.call(this, x, ys);
};
G__9642.cljs$lang$maxFixedArity = 1;
G__9642.cljs$lang$applyTo = (function (arglist__9646){
var x = cljs.core.first(arglist__9646);
var ys = cljs.core.rest(arglist__9646);
return G__9642__delegate.call(this, x, ys);
});
return G__9642;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9637.call(this);
case  1 :
return str__9638.call(this,x);
default:
return str__9639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9639.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9759 = (function (s,start){
return s.substring(start);
});
var subs__9760 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9759.call(this,s,start);
case  3 :
return subs__9760.call(this,s,start,end);
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
var symbol__9832 = (function (name){
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
var symbol__9833 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9832.call(this,ns);
case  2 :
return symbol__9833.call(this,ns,name);
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
var keyword__9837 = (function (name){
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
var keyword__9838 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9837.call(this,ns);
case  2 :
return keyword__9838.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9840 = cljs.core.seq.call(null,x);
var ys__9841 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9840)))
{return cljs.core.nil_QMARK_.call(null,ys__9841);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9841)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9840),cljs.core.first.call(null,ys__9841))))
{{
var G__9842 = cljs.core.next.call(null,xs__9840);
var G__9843 = cljs.core.next.call(null,ys__9841);
xs__9840 = G__9842;
ys__9841 = G__9843;
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
return cljs.core.reduce.call(null,(function (p1__9844_SHARP_,p2__9845_SHARP_){
return cljs.core.hash_combine.call(null,p1__9844_SHARP_,cljs.core.hash.call(null,p2__9845_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9846__9847 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9846__9847))
{var G__9849__9851 = cljs.core.first.call(null,G__9846__9847);
var vec__9850__9852 = G__9849__9851;
var key_name__9853 = cljs.core.nth.call(null,vec__9850__9852,0,null);
var f__9854 = cljs.core.nth.call(null,vec__9850__9852,1,null);
var G__9846__9855 = G__9846__9847;

var G__9849__9856 = G__9849__9851;
var G__9846__9857 = G__9846__9855;

while(true){
var vec__9858__9859 = G__9849__9856;
var key_name__9860 = cljs.core.nth.call(null,vec__9858__9859,0,null);
var f__9861 = cljs.core.nth.call(null,vec__9858__9859,1,null);
var G__9846__9862 = G__9846__9857;

var str_name__9865 = cljs.core.name.call(null,key_name__9860);

obj[str_name__9865] = f__9861;
var temp__3698__auto____9866 = cljs.core.next.call(null,G__9846__9862);

if(cljs.core.truth_(temp__3698__auto____9866))
{var G__9846__9869 = temp__3698__auto____9866;

{
var G__9877 = cljs.core.first.call(null,G__9846__9869);
var G__9878 = G__9846__9869;
G__9849__9856 = G__9877;
G__9846__9857 = G__9878;
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
var this__9918 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9919 = this;
return (new cljs.core.List(this__9919.meta,o,coll,(this__9919.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9920 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9921 = this;
return this__9921.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9922 = this;
return this__9922.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9924 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9926 = this;
return this__9926.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9927 = this;
return this__9927.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9929 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9931 = this;
return (new cljs.core.List(meta,this__9931.first,this__9931.rest,this__9931.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9934 = this;
return this__9934.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9935 = this;
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
var this__9954 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9955 = this;
return (new cljs.core.List(this__9955.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9956 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9957 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9958 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9959 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9960 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9961 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9962 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9963 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9965 = this;
return this__9965.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9966 = this;
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
list.cljs$lang$applyTo = (function (arglist__10006){
var items = cljs.core.seq( arglist__10006 );;
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
var this__10015 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10020 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10021 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10022 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10022.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10023 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10024 = this;
return this__10024.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10025 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10025.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10025.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10027 = this;
return this__10027.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10028 = this;
return (new cljs.core.Cons(meta,this__10028.first,this__10028.rest));
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
var G__10046 = null;
var G__10046__10047 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10046__10048 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10046 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10046__10047.call(this,string,f);
case  3 :
return G__10046__10048.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10046;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10054 = null;
var G__10054__10055 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10054__10056 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10054 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10054__10055.call(this,string,k);
case  3 :
return G__10054__10056.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10054;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10062 = null;
var G__10062__10063 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10062__10064 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10062 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10062__10063.call(this,string,n);
case  3 :
return G__10062__10064.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10062;
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
var G__10070 = null;
var G__10070__10071 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10070__10072 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10070 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10070__10071.call(this,this$,coll);
case  3 :
return G__10070__10072.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10070;
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
var x__10178 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10178;
} else
{lazy_seq.x = x__10178.call(null);
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
var this__10182 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10183 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10184 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10185 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10185.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10186 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10187 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10188 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10189 = this;
return this__10189.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10190 = this;
return (new cljs.core.LazySeq(meta,this__10190.realized,this__10190.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10195 = cljs.core.array.call(null);

var s__10196 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10196)))
{ary__10195.push(cljs.core.first.call(null,s__10196));
{
var G__10197 = cljs.core.next.call(null,s__10196);
s__10196 = G__10197;
continue;
}
} else
{return ary__10195;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10198 = s;
var i__10199 = n;
var sum__10200 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10201 = (i__10199 > 0);

if(cljs.core.truth_(and__3546__auto____10201))
{return cljs.core.seq.call(null,s__10198);
} else
{return and__3546__auto____10201;
}
})()))
{{
var G__10206 = cljs.core.next.call(null,s__10198);
var G__10207 = (i__10199 - 1);
var G__10208 = (sum__10200 + 1);
s__10198 = G__10206;
i__10199 = G__10207;
sum__10200 = G__10208;
continue;
}
} else
{return sum__10200;
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
var concat__10311 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10312 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10313 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10303 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10303))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10303),concat.call(null,cljs.core.rest.call(null,s__10303),y));
} else
{return y;
}
})));
});
var concat__10314 = (function() { 
var G__10317__delegate = function (x,y,zs){
var cat__10307 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10305 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10305))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10305),cat.call(null,cljs.core.rest.call(null,xys__10305),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10307.call(null,concat.call(null,x,y),zs);
};
var G__10317 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10317__delegate.call(this, x, y, zs);
};
G__10317.cljs$lang$maxFixedArity = 2;
G__10317.cljs$lang$applyTo = (function (arglist__10318){
var x = cljs.core.first(arglist__10318);
var y = cljs.core.first(cljs.core.next(arglist__10318));
var zs = cljs.core.rest(cljs.core.next(arglist__10318));
return G__10317__delegate.call(this, x, y, zs);
});
return G__10317;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10311.call(this);
case  1 :
return concat__10312.call(this,x);
case  2 :
return concat__10313.call(this,x,y);
default:
return concat__10314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10314.cljs$lang$applyTo;
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
var list_STAR___10329 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10330 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10331 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10332 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10333 = (function() { 
var G__10340__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10340 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10340__delegate.call(this, a, b, c, d, more);
};
G__10340.cljs$lang$maxFixedArity = 4;
G__10340.cljs$lang$applyTo = (function (arglist__10341){
var a = cljs.core.first(arglist__10341);
var b = cljs.core.first(cljs.core.next(arglist__10341));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10341)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10341))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10341))));
return G__10340__delegate.call(this, a, b, c, d, more);
});
return G__10340;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10329.call(this,a);
case  2 :
return list_STAR___10330.call(this,a,b);
case  3 :
return list_STAR___10331.call(this,a,b,c);
case  4 :
return list_STAR___10332.call(this,a,b,c,d);
default:
return list_STAR___10333.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10333.cljs$lang$applyTo;
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
var apply__10364 = (function (f,args){
var fixed_arity__10342 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10342 + 1)) <= fixed_arity__10342)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10365 = (function (f,x,args){
var arglist__10345 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10346 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10345,fixed_arity__10346) <= fixed_arity__10346)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10345));
} else
{return f.cljs$lang$applyTo(arglist__10345);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10345));
}
});
var apply__10367 = (function (f,x,y,args){
var arglist__10347 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10348 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10347,fixed_arity__10348) <= fixed_arity__10348)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10347));
} else
{return f.cljs$lang$applyTo(arglist__10347);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10347));
}
});
var apply__10368 = (function (f,x,y,z,args){
var arglist__10349 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10351 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10349,fixed_arity__10351) <= fixed_arity__10351)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10349));
} else
{return f.cljs$lang$applyTo(arglist__10349);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10349));
}
});
var apply__10369 = (function() { 
var G__10380__delegate = function (f,a,b,c,d,args){
var arglist__10354 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10356 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10354,fixed_arity__10356) <= fixed_arity__10356)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10354));
} else
{return f.cljs$lang$applyTo(arglist__10354);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10354));
}
};
var G__10380 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10380__delegate.call(this, f, a, b, c, d, args);
};
G__10380.cljs$lang$maxFixedArity = 5;
G__10380.cljs$lang$applyTo = (function (arglist__10381){
var f = cljs.core.first(arglist__10381);
var a = cljs.core.first(cljs.core.next(arglist__10381));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10381)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10381))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10381)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10381)))));
return G__10380__delegate.call(this, f, a, b, c, d, args);
});
return G__10380;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10364.call(this,f,a);
case  3 :
return apply__10365.call(this,f,a,b);
case  4 :
return apply__10367.call(this,f,a,b,c);
case  5 :
return apply__10368.call(this,f,a,b,c,d);
default:
return apply__10369.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10369.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10396){
var obj = cljs.core.first(arglist__10396);
var f = cljs.core.first(cljs.core.next(arglist__10396));
var args = cljs.core.rest(cljs.core.next(arglist__10396));
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
var not_EQ___10403 = (function (x){
return false;
});
var not_EQ___10404 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10405 = (function() { 
var G__10407__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10407 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10407__delegate.call(this, x, y, more);
};
G__10407.cljs$lang$maxFixedArity = 2;
G__10407.cljs$lang$applyTo = (function (arglist__10408){
var x = cljs.core.first(arglist__10408);
var y = cljs.core.first(cljs.core.next(arglist__10408));
var more = cljs.core.rest(cljs.core.next(arglist__10408));
return G__10407__delegate.call(this, x, y, more);
});
return G__10407;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10403.call(this,x);
case  2 :
return not_EQ___10404.call(this,x,y);
default:
return not_EQ___10405.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10405.cljs$lang$applyTo;
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
var G__10439 = pred;
var G__10440 = cljs.core.next.call(null,coll);
pred = G__10439;
coll = G__10440;
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
{var or__3548__auto____10442 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10442))
{return or__3548__auto____10442;
} else
{{
var G__10443 = pred;
var G__10444 = cljs.core.next.call(null,coll);
pred = G__10443;
coll = G__10444;
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
var G__10460 = null;
var G__10460__10461 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10460__10462 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10460__10463 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10460__10464 = (function() { 
var G__10466__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10466 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10466__delegate.call(this, x, y, zs);
};
G__10466.cljs$lang$maxFixedArity = 2;
G__10466.cljs$lang$applyTo = (function (arglist__10467){
var x = cljs.core.first(arglist__10467);
var y = cljs.core.first(cljs.core.next(arglist__10467));
var zs = cljs.core.rest(cljs.core.next(arglist__10467));
return G__10466__delegate.call(this, x, y, zs);
});
return G__10466;
})()
;
G__10460 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10460__10461.call(this);
case  1 :
return G__10460__10462.call(this,x);
case  2 :
return G__10460__10463.call(this,x,y);
default:
return G__10460__10464.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10460.cljs$lang$maxFixedArity = 2;
G__10460.cljs$lang$applyTo = G__10460__10464.cljs$lang$applyTo;
return G__10460;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10479__delegate = function (args){
return x;
};
var G__10479 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10479__delegate.call(this, args);
};
G__10479.cljs$lang$maxFixedArity = 0;
G__10479.cljs$lang$applyTo = (function (arglist__10480){
var args = cljs.core.seq( arglist__10480 );;
return G__10479__delegate.call(this, args);
});
return G__10479;
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
var comp__10520 = (function (){
return cljs.core.identity;
});
var comp__10521 = (function (f){
return f;
});
var comp__10522 = (function (f,g){
return (function() {
var G__10650 = null;
var G__10650__10651 = (function (){
return f.call(null,g.call(null));
});
var G__10650__10652 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10650__10653 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10650__10654 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10650__10655 = (function() { 
var G__10657__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10657 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10657__delegate.call(this, x, y, z, args);
};
G__10657.cljs$lang$maxFixedArity = 3;
G__10657.cljs$lang$applyTo = (function (arglist__10658){
var x = cljs.core.first(arglist__10658);
var y = cljs.core.first(cljs.core.next(arglist__10658));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10658)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10658)));
return G__10657__delegate.call(this, x, y, z, args);
});
return G__10657;
})()
;
G__10650 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10650__10651.call(this);
case  1 :
return G__10650__10652.call(this,x);
case  2 :
return G__10650__10653.call(this,x,y);
case  3 :
return G__10650__10654.call(this,x,y,z);
default:
return G__10650__10655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10650.cljs$lang$maxFixedArity = 3;
G__10650.cljs$lang$applyTo = G__10650__10655.cljs$lang$applyTo;
return G__10650;
})()
});
var comp__10523 = (function (f,g,h){
return (function() {
var G__10659 = null;
var G__10659__10660 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10659__10661 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10659__10662 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10659__10663 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10659__10664 = (function() { 
var G__10666__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10666 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10666__delegate.call(this, x, y, z, args);
};
G__10666.cljs$lang$maxFixedArity = 3;
G__10666.cljs$lang$applyTo = (function (arglist__10667){
var x = cljs.core.first(arglist__10667);
var y = cljs.core.first(cljs.core.next(arglist__10667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10667)));
return G__10666__delegate.call(this, x, y, z, args);
});
return G__10666;
})()
;
G__10659 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10659__10660.call(this);
case  1 :
return G__10659__10661.call(this,x);
case  2 :
return G__10659__10662.call(this,x,y);
case  3 :
return G__10659__10663.call(this,x,y,z);
default:
return G__10659__10664.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10659.cljs$lang$maxFixedArity = 3;
G__10659.cljs$lang$applyTo = G__10659__10664.cljs$lang$applyTo;
return G__10659;
})()
});
var comp__10524 = (function() { 
var G__10668__delegate = function (f1,f2,f3,fs){
var fs__10515 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10669__delegate = function (args){
var ret__10516 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10515),args);
var fs__10517 = cljs.core.next.call(null,fs__10515);

while(true){
if(cljs.core.truth_(fs__10517))
{{
var G__10670 = cljs.core.first.call(null,fs__10517).call(null,ret__10516);
var G__10671 = cljs.core.next.call(null,fs__10517);
ret__10516 = G__10670;
fs__10517 = G__10671;
continue;
}
} else
{return ret__10516;
}
break;
}
};
var G__10669 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10669__delegate.call(this, args);
};
G__10669.cljs$lang$maxFixedArity = 0;
G__10669.cljs$lang$applyTo = (function (arglist__10672){
var args = cljs.core.seq( arglist__10672 );;
return G__10669__delegate.call(this, args);
});
return G__10669;
})()
;
};
var G__10668 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10668__delegate.call(this, f1, f2, f3, fs);
};
G__10668.cljs$lang$maxFixedArity = 3;
G__10668.cljs$lang$applyTo = (function (arglist__10673){
var f1 = cljs.core.first(arglist__10673);
var f2 = cljs.core.first(cljs.core.next(arglist__10673));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10673)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10673)));
return G__10668__delegate.call(this, f1, f2, f3, fs);
});
return G__10668;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10520.call(this);
case  1 :
return comp__10521.call(this,f1);
case  2 :
return comp__10522.call(this,f1,f2);
case  3 :
return comp__10523.call(this,f1,f2,f3);
default:
return comp__10524.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10524.cljs$lang$applyTo;
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
var partial__10675 = (function (f,arg1){
return (function() { 
var G__10680__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10680 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10680__delegate.call(this, args);
};
G__10680.cljs$lang$maxFixedArity = 0;
G__10680.cljs$lang$applyTo = (function (arglist__10686){
var args = cljs.core.seq( arglist__10686 );;
return G__10680__delegate.call(this, args);
});
return G__10680;
})()
;
});
var partial__10676 = (function (f,arg1,arg2){
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
G__10688.cljs$lang$applyTo = (function (arglist__10690){
var args = cljs.core.seq( arglist__10690 );;
return G__10688__delegate.call(this, args);
});
return G__10688;
})()
;
});
var partial__10677 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10692__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10692 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10692__delegate.call(this, args);
};
G__10692.cljs$lang$maxFixedArity = 0;
G__10692.cljs$lang$applyTo = (function (arglist__10694){
var args = cljs.core.seq( arglist__10694 );;
return G__10692__delegate.call(this, args);
});
return G__10692;
})()
;
});
var partial__10678 = (function() { 
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
G__10697.cljs$lang$applyTo = (function (arglist__10700){
var args = cljs.core.seq( arglist__10700 );;
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
G__10696.cljs$lang$applyTo = (function (arglist__10702){
var f = cljs.core.first(arglist__10702);
var arg1 = cljs.core.first(cljs.core.next(arglist__10702));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10702)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10702))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10702))));
return G__10696__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10696;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10675.call(this,f,arg1);
case  3 :
return partial__10676.call(this,f,arg1,arg2);
case  4 :
return partial__10677.call(this,f,arg1,arg2,arg3);
default:
return partial__10678.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10678.cljs$lang$applyTo;
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
var fnil__10786 = (function (f,x){
return (function() {
var G__10790 = null;
var G__10790__10791 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10790__10792 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10790__10793 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10790__10794 = (function() { 
var G__10802__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10802 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10802__delegate.call(this, a, b, c, ds);
};
G__10802.cljs$lang$maxFixedArity = 3;
G__10802.cljs$lang$applyTo = (function (arglist__10803){
var a = cljs.core.first(arglist__10803);
var b = cljs.core.first(cljs.core.next(arglist__10803));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10803)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10803)));
return G__10802__delegate.call(this, a, b, c, ds);
});
return G__10802;
})()
;
G__10790 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10790__10791.call(this,a);
case  2 :
return G__10790__10792.call(this,a,b);
case  3 :
return G__10790__10793.call(this,a,b,c);
default:
return G__10790__10794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = G__10790__10794.cljs$lang$applyTo;
return G__10790;
})()
});
var fnil__10787 = (function (f,x,y){
return (function() {
var G__10804 = null;
var G__10804__10805 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10804__10806 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10804__10807 = (function() { 
var G__10809__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10809 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10809__delegate.call(this, a, b, c, ds);
};
G__10809.cljs$lang$maxFixedArity = 3;
G__10809.cljs$lang$applyTo = (function (arglist__10820){
var a = cljs.core.first(arglist__10820);
var b = cljs.core.first(cljs.core.next(arglist__10820));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10820)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10820)));
return G__10809__delegate.call(this, a, b, c, ds);
});
return G__10809;
})()
;
G__10804 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10804__10805.call(this,a,b);
case  3 :
return G__10804__10806.call(this,a,b,c);
default:
return G__10804__10807.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10804.cljs$lang$maxFixedArity = 3;
G__10804.cljs$lang$applyTo = G__10804__10807.cljs$lang$applyTo;
return G__10804;
})()
});
var fnil__10788 = (function (f,x,y,z){
return (function() {
var G__10821 = null;
var G__10821__10822 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10821__10823 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10821__10824 = (function() { 
var G__10829__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10829 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10829__delegate.call(this, a, b, c, ds);
};
G__10829.cljs$lang$maxFixedArity = 3;
G__10829.cljs$lang$applyTo = (function (arglist__10834){
var a = cljs.core.first(arglist__10834);
var b = cljs.core.first(cljs.core.next(arglist__10834));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10834)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10834)));
return G__10829__delegate.call(this, a, b, c, ds);
});
return G__10829;
})()
;
G__10821 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10821__10822.call(this,a,b);
case  3 :
return G__10821__10823.call(this,a,b,c);
default:
return G__10821__10824.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10821.cljs$lang$maxFixedArity = 3;
G__10821.cljs$lang$applyTo = G__10821__10824.cljs$lang$applyTo;
return G__10821;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10786.call(this,f,x);
case  3 :
return fnil__10787.call(this,f,x,y);
case  4 :
return fnil__10788.call(this,f,x,y,z);
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
var mapi__10845 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10842 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10842))
{var s__10844 = temp__3698__auto____10842;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10844)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10844)));
} else
{return null;
}
})));
});

return mapi__10845.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10850 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10850))
{var s__10851 = temp__3698__auto____10850;

var x__10852 = f.call(null,cljs.core.first.call(null,s__10851));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10852)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10851));
} else
{return cljs.core.cons.call(null,x__10852,keep.call(null,f,cljs.core.rest.call(null,s__10851)));
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
var keepi__11084 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11055 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11055))
{var s__11077 = temp__3698__auto____11055;

var x__11079 = f.call(null,idx,cljs.core.first.call(null,s__11077));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11079)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11077));
} else
{return cljs.core.cons.call(null,x__11079,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11077)));
}
} else
{return null;
}
})));
});

return keepi__11084.call(null,0,coll);
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
var every_pred__11368 = (function (p){
return (function() {
var ep1 = null;
var ep1__11373 = (function (){
return true;
});
var ep1__11374 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11375 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11126 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11126))
{return p.call(null,y);
} else
{return and__3546__auto____11126;
}
})());
});
var ep1__11376 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11127 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11127))
{var and__3546__auto____11129 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11129))
{return p.call(null,z);
} else
{return and__3546__auto____11129;
}
} else
{return and__3546__auto____11127;
}
})());
});
var ep1__11377 = (function() { 
var G__11381__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11131 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11131))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11131;
}
})());
};
var G__11381 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11381__delegate.call(this, x, y, z, args);
};
G__11381.cljs$lang$maxFixedArity = 3;
G__11381.cljs$lang$applyTo = (function (arglist__11382){
var x = cljs.core.first(arglist__11382);
var y = cljs.core.first(cljs.core.next(arglist__11382));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11382)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11382)));
return G__11381__delegate.call(this, x, y, z, args);
});
return G__11381;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11373.call(this);
case  1 :
return ep1__11374.call(this,x);
case  2 :
return ep1__11375.call(this,x,y);
case  3 :
return ep1__11376.call(this,x,y,z);
default:
return ep1__11377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11377.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11369 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11383 = (function (){
return true;
});
var ep2__11384 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11144 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11144))
{return p2.call(null,x);
} else
{return and__3546__auto____11144;
}
})());
});
var ep2__11385 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11145 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11145))
{var and__3546__auto____11146 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11146))
{var and__3546__auto____11149 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11149))
{return p2.call(null,y);
} else
{return and__3546__auto____11149;
}
} else
{return and__3546__auto____11146;
}
} else
{return and__3546__auto____11145;
}
})());
});
var ep2__11386 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11153 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11153))
{var and__3546__auto____11155 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11155))
{var and__3546__auto____11156 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11156))
{var and__3546__auto____11158 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11158))
{var and__3546__auto____11159 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11159))
{return p2.call(null,z);
} else
{return and__3546__auto____11159;
}
} else
{return and__3546__auto____11158;
}
} else
{return and__3546__auto____11156;
}
} else
{return and__3546__auto____11155;
}
} else
{return and__3546__auto____11153;
}
})());
});
var ep2__11387 = (function() { 
var G__11393__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11160 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11160))
{return cljs.core.every_QMARK_.call(null,(function (p1__10856_SHARP_){
var and__3546__auto____11162 = p1.call(null,p1__10856_SHARP_);

if(cljs.core.truth_(and__3546__auto____11162))
{return p2.call(null,p1__10856_SHARP_);
} else
{return and__3546__auto____11162;
}
}),args);
} else
{return and__3546__auto____11160;
}
})());
};
var G__11393 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11393__delegate.call(this, x, y, z, args);
};
G__11393.cljs$lang$maxFixedArity = 3;
G__11393.cljs$lang$applyTo = (function (arglist__11395){
var x = cljs.core.first(arglist__11395);
var y = cljs.core.first(cljs.core.next(arglist__11395));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11395)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11395)));
return G__11393__delegate.call(this, x, y, z, args);
});
return G__11393;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11383.call(this);
case  1 :
return ep2__11384.call(this,x);
case  2 :
return ep2__11385.call(this,x,y);
case  3 :
return ep2__11386.call(this,x,y,z);
default:
return ep2__11387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11387.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11370 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11396 = (function (){
return true;
});
var ep3__11397 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11165 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11165))
{var and__3546__auto____11167 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11167))
{return p3.call(null,x);
} else
{return and__3546__auto____11167;
}
} else
{return and__3546__auto____11165;
}
})());
});
var ep3__11398 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11172 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11172))
{var and__3546__auto____11174 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11174))
{var and__3546__auto____11175 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11175))
{var and__3546__auto____11179 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11179))
{var and__3546__auto____11224 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11224))
{return p3.call(null,y);
} else
{return and__3546__auto____11224;
}
} else
{return and__3546__auto____11179;
}
} else
{return and__3546__auto____11175;
}
} else
{return and__3546__auto____11174;
}
} else
{return and__3546__auto____11172;
}
})());
});
var ep3__11399 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11227 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11227))
{var and__3546__auto____11229 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11229))
{var and__3546__auto____11231 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11231))
{var and__3546__auto____11234 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11234))
{var and__3546__auto____11236 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11236))
{var and__3546__auto____11238 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11238))
{var and__3546__auto____11242 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11242))
{var and__3546__auto____11358 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11358))
{return p3.call(null,z);
} else
{return and__3546__auto____11358;
}
} else
{return and__3546__auto____11242;
}
} else
{return and__3546__auto____11238;
}
} else
{return and__3546__auto____11236;
}
} else
{return and__3546__auto____11234;
}
} else
{return and__3546__auto____11231;
}
} else
{return and__3546__auto____11229;
}
} else
{return and__3546__auto____11227;
}
})());
});
var ep3__11401 = (function() { 
var G__11421__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11359 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11359))
{return cljs.core.every_QMARK_.call(null,(function (p1__10857_SHARP_){
var and__3546__auto____11360 = p1.call(null,p1__10857_SHARP_);

if(cljs.core.truth_(and__3546__auto____11360))
{var and__3546__auto____11361 = p2.call(null,p1__10857_SHARP_);

if(cljs.core.truth_(and__3546__auto____11361))
{return p3.call(null,p1__10857_SHARP_);
} else
{return and__3546__auto____11361;
}
} else
{return and__3546__auto____11360;
}
}),args);
} else
{return and__3546__auto____11359;
}
})());
};
var G__11421 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11421__delegate.call(this, x, y, z, args);
};
G__11421.cljs$lang$maxFixedArity = 3;
G__11421.cljs$lang$applyTo = (function (arglist__11426){
var x = cljs.core.first(arglist__11426);
var y = cljs.core.first(cljs.core.next(arglist__11426));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11426)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11426)));
return G__11421__delegate.call(this, x, y, z, args);
});
return G__11421;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11396.call(this);
case  1 :
return ep3__11397.call(this,x);
case  2 :
return ep3__11398.call(this,x,y);
case  3 :
return ep3__11399.call(this,x,y,z);
default:
return ep3__11401.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11401.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11371 = (function() { 
var G__11428__delegate = function (p1,p2,p3,ps){
var ps__11362 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11430 = (function (){
return true;
});
var epn__11431 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11046_SHARP_){
return p1__11046_SHARP_.call(null,x);
}),ps__11362);
});
var epn__11432 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11048_SHARP_){
var and__3546__auto____11363 = p1__11048_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11363))
{return p1__11048_SHARP_.call(null,y);
} else
{return and__3546__auto____11363;
}
}),ps__11362);
});
var epn__11433 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11049_SHARP_){
var and__3546__auto____11364 = p1__11049_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11364))
{var and__3546__auto____11365 = p1__11049_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11365))
{return p1__11049_SHARP_.call(null,z);
} else
{return and__3546__auto____11365;
}
} else
{return and__3546__auto____11364;
}
}),ps__11362);
});
var epn__11434 = (function() { 
var G__11441__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11366 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11366))
{return cljs.core.every_QMARK_.call(null,(function (p1__11051_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11051_SHARP_,args);
}),ps__11362);
} else
{return and__3546__auto____11366;
}
})());
};
var G__11441 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11441__delegate.call(this, x, y, z, args);
};
G__11441.cljs$lang$maxFixedArity = 3;
G__11441.cljs$lang$applyTo = (function (arglist__11443){
var x = cljs.core.first(arglist__11443);
var y = cljs.core.first(cljs.core.next(arglist__11443));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11443)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11443)));
return G__11441__delegate.call(this, x, y, z, args);
});
return G__11441;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11430.call(this);
case  1 :
return epn__11431.call(this,x);
case  2 :
return epn__11432.call(this,x,y);
case  3 :
return epn__11433.call(this,x,y,z);
default:
return epn__11434.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11434.cljs$lang$applyTo;
return epn;
})()
};
var G__11428 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11428__delegate.call(this, p1, p2, p3, ps);
};
G__11428.cljs$lang$maxFixedArity = 3;
G__11428.cljs$lang$applyTo = (function (arglist__11445){
var p1 = cljs.core.first(arglist__11445);
var p2 = cljs.core.first(cljs.core.next(arglist__11445));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11445)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11445)));
return G__11428__delegate.call(this, p1, p2, p3, ps);
});
return G__11428;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11368.call(this,p1);
case  2 :
return every_pred__11369.call(this,p1,p2);
case  3 :
return every_pred__11370.call(this,p1,p2,p3);
default:
return every_pred__11371.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11371.cljs$lang$applyTo;
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
var some_fn__11619 = (function (p){
return (function() {
var sp1 = null;
var sp1__11624 = (function (){
return null;
});
var sp1__11625 = (function (x){
return p.call(null,x);
});
var sp1__11626 = (function (x,y){
var or__3548__auto____11449 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11449))
{return or__3548__auto____11449;
} else
{return p.call(null,y);
}
});
var sp1__11627 = (function (x,y,z){
var or__3548__auto____11451 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11451))
{return or__3548__auto____11451;
} else
{var or__3548__auto____11453 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11453))
{return or__3548__auto____11453;
} else
{return p.call(null,z);
}
}
});
var sp1__11628 = (function() { 
var G__11639__delegate = function (x,y,z,args){
var or__3548__auto____11457 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11457))
{return or__3548__auto____11457;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11639 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11639__delegate.call(this, x, y, z, args);
};
G__11639.cljs$lang$maxFixedArity = 3;
G__11639.cljs$lang$applyTo = (function (arglist__11641){
var x = cljs.core.first(arglist__11641);
var y = cljs.core.first(cljs.core.next(arglist__11641));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11641)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11641)));
return G__11639__delegate.call(this, x, y, z, args);
});
return G__11639;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11624.call(this);
case  1 :
return sp1__11625.call(this,x);
case  2 :
return sp1__11626.call(this,x,y);
case  3 :
return sp1__11627.call(this,x,y,z);
default:
return sp1__11628.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11628.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11620 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11644 = (function (){
return null;
});
var sp2__11645 = (function (x){
var or__3548__auto____11465 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11465))
{return or__3548__auto____11465;
} else
{return p2.call(null,x);
}
});
var sp2__11646 = (function (x,y){
var or__3548__auto____11468 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11468))
{return or__3548__auto____11468;
} else
{var or__3548__auto____11470 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11470))
{return or__3548__auto____11470;
} else
{var or__3548__auto____11474 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11474))
{return or__3548__auto____11474;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11647 = (function (x,y,z){
var or__3548__auto____11478 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11478))
{return or__3548__auto____11478;
} else
{var or__3548__auto____11482 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11482))
{return or__3548__auto____11482;
} else
{var or__3548__auto____11502 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11502))
{return or__3548__auto____11502;
} else
{var or__3548__auto____11508 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11508))
{return or__3548__auto____11508;
} else
{var or__3548__auto____11512 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11648 = (function() { 
var G__11661__delegate = function (x,y,z,args){
var or__3548__auto____11524 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11524))
{return or__3548__auto____11524;
} else
{return cljs.core.some.call(null,(function (p1__11113_SHARP_){
var or__3548__auto____11533 = p1.call(null,p1__11113_SHARP_);

if(cljs.core.truth_(or__3548__auto____11533))
{return or__3548__auto____11533;
} else
{return p2.call(null,p1__11113_SHARP_);
}
}),args);
}
};
var G__11661 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11661__delegate.call(this, x, y, z, args);
};
G__11661.cljs$lang$maxFixedArity = 3;
G__11661.cljs$lang$applyTo = (function (arglist__11663){
var x = cljs.core.first(arglist__11663);
var y = cljs.core.first(cljs.core.next(arglist__11663));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11663)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11663)));
return G__11661__delegate.call(this, x, y, z, args);
});
return G__11661;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11644.call(this);
case  1 :
return sp2__11645.call(this,x);
case  2 :
return sp2__11646.call(this,x,y);
case  3 :
return sp2__11647.call(this,x,y,z);
default:
return sp2__11648.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11648.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11621 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11666 = (function (){
return null;
});
var sp3__11667 = (function (x){
var or__3548__auto____11537 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11537))
{return or__3548__auto____11537;
} else
{var or__3548__auto____11539 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11539))
{return or__3548__auto____11539;
} else
{return p3.call(null,x);
}
}
});
var sp3__11668 = (function (x,y){
var or__3548__auto____11542 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11542))
{return or__3548__auto____11542;
} else
{var or__3548__auto____11544 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11544))
{return or__3548__auto____11544;
} else
{var or__3548__auto____11553 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11553))
{return or__3548__auto____11553;
} else
{var or__3548__auto____11554 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11554))
{return or__3548__auto____11554;
} else
{var or__3548__auto____11556 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11556))
{return or__3548__auto____11556;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11669 = (function (x,y,z){
var or__3548__auto____11563 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11563))
{return or__3548__auto____11563;
} else
{var or__3548__auto____11564 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11564))
{return or__3548__auto____11564;
} else
{var or__3548__auto____11565 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11565))
{return or__3548__auto____11565;
} else
{var or__3548__auto____11567 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11567))
{return or__3548__auto____11567;
} else
{var or__3548__auto____11568 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11568))
{return or__3548__auto____11568;
} else
{var or__3548__auto____11570 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11570))
{return or__3548__auto____11570;
} else
{var or__3548__auto____11572 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11572))
{return or__3548__auto____11572;
} else
{var or__3548__auto____11574 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11574))
{return or__3548__auto____11574;
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
var sp3__11670 = (function() { 
var G__11691__delegate = function (x,y,z,args){
var or__3548__auto____11577 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11577))
{return or__3548__auto____11577;
} else
{return cljs.core.some.call(null,(function (p1__11114_SHARP_){
var or__3548__auto____11578 = p1.call(null,p1__11114_SHARP_);

if(cljs.core.truth_(or__3548__auto____11578))
{return or__3548__auto____11578;
} else
{var or__3548__auto____11586 = p2.call(null,p1__11114_SHARP_);

if(cljs.core.truth_(or__3548__auto____11586))
{return or__3548__auto____11586;
} else
{return p3.call(null,p1__11114_SHARP_);
}
}
}),args);
}
};
var G__11691 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11691__delegate.call(this, x, y, z, args);
};
G__11691.cljs$lang$maxFixedArity = 3;
G__11691.cljs$lang$applyTo = (function (arglist__11705){
var x = cljs.core.first(arglist__11705);
var y = cljs.core.first(cljs.core.next(arglist__11705));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11705)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11705)));
return G__11691__delegate.call(this, x, y, z, args);
});
return G__11691;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11666.call(this);
case  1 :
return sp3__11667.call(this,x);
case  2 :
return sp3__11668.call(this,x,y);
case  3 :
return sp3__11669.call(this,x,y,z);
default:
return sp3__11670.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11670.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11622 = (function() { 
var G__11711__delegate = function (p1,p2,p3,ps){
var ps__11588 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11712 = (function (){
return null;
});
var spn__11713 = (function (x){
return cljs.core.some.call(null,(function (p1__11115_SHARP_){
return p1__11115_SHARP_.call(null,x);
}),ps__11588);
});
var spn__11714 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11120_SHARP_){
var or__3548__auto____11601 = p1__11120_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11601))
{return or__3548__auto____11601;
} else
{return p1__11120_SHARP_.call(null,y);
}
}),ps__11588);
});
var spn__11715 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11123_SHARP_){
var or__3548__auto____11604 = p1__11123_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11604))
{return or__3548__auto____11604;
} else
{var or__3548__auto____11606 = p1__11123_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11606))
{return or__3548__auto____11606;
} else
{return p1__11123_SHARP_.call(null,z);
}
}
}),ps__11588);
});
var spn__11716 = (function() { 
var G__11729__delegate = function (x,y,z,args){
var or__3548__auto____11608 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11608))
{return or__3548__auto____11608;
} else
{return cljs.core.some.call(null,(function (p1__11125_SHARP_){
return cljs.core.some.call(null,p1__11125_SHARP_,args);
}),ps__11588);
}
};
var G__11729 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11729__delegate.call(this, x, y, z, args);
};
G__11729.cljs$lang$maxFixedArity = 3;
G__11729.cljs$lang$applyTo = (function (arglist__11730){
var x = cljs.core.first(arglist__11730);
var y = cljs.core.first(cljs.core.next(arglist__11730));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11730)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11730)));
return G__11729__delegate.call(this, x, y, z, args);
});
return G__11729;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11712.call(this);
case  1 :
return spn__11713.call(this,x);
case  2 :
return spn__11714.call(this,x,y);
case  3 :
return spn__11715.call(this,x,y,z);
default:
return spn__11716.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11716.cljs$lang$applyTo;
return spn;
})()
};
var G__11711 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11711__delegate.call(this, p1, p2, p3, ps);
};
G__11711.cljs$lang$maxFixedArity = 3;
G__11711.cljs$lang$applyTo = (function (arglist__11732){
var p1 = cljs.core.first(arglist__11732);
var p2 = cljs.core.first(cljs.core.next(arglist__11732));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11732)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11732)));
return G__11711__delegate.call(this, p1, p2, p3, ps);
});
return G__11711;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11619.call(this,p1);
case  2 :
return some_fn__11620.call(this,p1,p2);
case  3 :
return some_fn__11621.call(this,p1,p2,p3);
default:
return some_fn__11622.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11622.cljs$lang$applyTo;
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
var map__11797 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11741 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11741))
{var s__11742 = temp__3698__auto____11741;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11742)),map.call(null,f,cljs.core.rest.call(null,s__11742)));
} else
{return null;
}
})));
});
var map__11798 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11743 = cljs.core.seq.call(null,c1);
var s2__11745 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11746 = s1__11743;

if(cljs.core.truth_(and__3546__auto____11746))
{return s2__11745;
} else
{return and__3546__auto____11746;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11743),cljs.core.first.call(null,s2__11745)),map.call(null,f,cljs.core.rest.call(null,s1__11743),cljs.core.rest.call(null,s2__11745)));
} else
{return null;
}
})));
});
var map__11799 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11749 = cljs.core.seq.call(null,c1);
var s2__11751 = cljs.core.seq.call(null,c2);
var s3__11752 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11753 = s1__11749;

if(cljs.core.truth_(and__3546__auto____11753))
{var and__3546__auto____11754 = s2__11751;

if(cljs.core.truth_(and__3546__auto____11754))
{return s3__11752;
} else
{return and__3546__auto____11754;
}
} else
{return and__3546__auto____11753;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11749),cljs.core.first.call(null,s2__11751),cljs.core.first.call(null,s3__11752)),map.call(null,f,cljs.core.rest.call(null,s1__11749),cljs.core.rest.call(null,s2__11751),cljs.core.rest.call(null,s3__11752)));
} else
{return null;
}
})));
});
var map__11801 = (function() { 
var G__11810__delegate = function (f,c1,c2,c3,colls){
var step__11792 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11787 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11787)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11787),step.call(null,map.call(null,cljs.core.rest,ss__11787)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11448_SHARP_){
return cljs.core.apply.call(null,f,p1__11448_SHARP_);
}),step__11792.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11810 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11810__delegate.call(this, f, c1, c2, c3, colls);
};
G__11810.cljs$lang$maxFixedArity = 4;
G__11810.cljs$lang$applyTo = (function (arglist__11816){
var f = cljs.core.first(arglist__11816);
var c1 = cljs.core.first(cljs.core.next(arglist__11816));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11816)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11816))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11816))));
return G__11810__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11810;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11797.call(this,f,c1);
case  3 :
return map__11798.call(this,f,c1,c2);
case  4 :
return map__11799.call(this,f,c1,c2,c3);
default:
return map__11801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11801.cljs$lang$applyTo;
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
{var temp__3698__auto____11825 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11825))
{var s__11832 = temp__3698__auto____11825;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11832),take.call(null,(n - 1),cljs.core.rest.call(null,s__11832)));
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
var step__11846 = (function (n,coll){
while(true){
var s__11836 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11839 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11839))
{return s__11836;
} else
{return and__3546__auto____11839;
}
})()))
{{
var G__11848 = (n - 1);
var G__11850 = cljs.core.rest.call(null,s__11836);
n = G__11848;
coll = G__11850;
continue;
}
} else
{return s__11836;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11846.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11855 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11856 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11855.call(this,n);
case  2 :
return drop_last__11856.call(this,n,s);
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
var s__11861 = cljs.core.seq.call(null,coll);
var lead__11863 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11863))
{{
var G__11873 = cljs.core.next.call(null,s__11861);
var G__11874 = cljs.core.next.call(null,lead__11863);
s__11861 = G__11873;
lead__11863 = G__11874;
continue;
}
} else
{return s__11861;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11879 = (function (pred,coll){
while(true){
var s__11877 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11878 = s__11877;

if(cljs.core.truth_(and__3546__auto____11878))
{return pred.call(null,cljs.core.first.call(null,s__11877));
} else
{return and__3546__auto____11878;
}
})()))
{{
var G__11882 = pred;
var G__11883 = cljs.core.rest.call(null,s__11877);
pred = G__11882;
coll = G__11883;
continue;
}
} else
{return s__11877;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11879.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12041 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12041))
{var s__12042 = temp__3698__auto____12041;

return cljs.core.concat.call(null,s__12042,cycle.call(null,s__12042));
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
var repeat__12076 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12077 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12076.call(this,n);
case  2 :
return repeat__12077.call(this,n,x);
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
var repeatedly__12084 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__12085 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__12084.call(this,n);
case  2 :
return repeatedly__12085.call(this,n,f);
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
var interleave__12102 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12092 = cljs.core.seq.call(null,c1);
var s2__12093 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12094 = s1__12092;

if(cljs.core.truth_(and__3546__auto____12094))
{return s2__12093;
} else
{return and__3546__auto____12094;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12092),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12093),interleave.call(null,cljs.core.rest.call(null,s1__12092),cljs.core.rest.call(null,s2__12093))));
} else
{return null;
}
})));
});
var interleave__12104 = (function() { 
var G__12109__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12098 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12098)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12098),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12098)));
} else
{return null;
}
})));
};
var G__12109 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12109__delegate.call(this, c1, c2, colls);
};
G__12109.cljs$lang$maxFixedArity = 2;
G__12109.cljs$lang$applyTo = (function (arglist__12113){
var c1 = cljs.core.first(arglist__12113);
var c2 = cljs.core.first(cljs.core.next(arglist__12113));
var colls = cljs.core.rest(cljs.core.next(arglist__12113));
return G__12109__delegate.call(this, c1, c2, colls);
});
return G__12109;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12102.call(this,c1,c2);
default:
return interleave__12104.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12104.cljs$lang$applyTo;
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
var cat__12118 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12116 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12116))
{var coll__12117 = temp__3695__auto____12116;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12117),cat.call(null,cljs.core.rest.call(null,coll__12117),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12118.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12158 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12159 = (function() { 
var G__12162__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12162 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12162__delegate.call(this, f, coll, colls);
};
G__12162.cljs$lang$maxFixedArity = 2;
G__12162.cljs$lang$applyTo = (function (arglist__12164){
var f = cljs.core.first(arglist__12164);
var coll = cljs.core.first(cljs.core.next(arglist__12164));
var colls = cljs.core.rest(cljs.core.next(arglist__12164));
return G__12162__delegate.call(this, f, coll, colls);
});
return G__12162;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12158.call(this,f,coll);
default:
return mapcat__12159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12159.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12168))
{var s__12169 = temp__3698__auto____12168;

var f__12170 = cljs.core.first.call(null,s__12169);
var r__12171 = cljs.core.rest.call(null,s__12169);

if(cljs.core.truth_(pred.call(null,f__12170)))
{return cljs.core.cons.call(null,f__12170,filter.call(null,pred,r__12171));
} else
{return filter.call(null,pred,r__12171);
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
var walk__12179 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12179.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12177_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12177_SHARP_));
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
var partition__12213 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12214 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12195 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12195))
{var s__12196 = temp__3698__auto____12195;

var p__12197 = cljs.core.take.call(null,n,s__12196);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12197))))
{return cljs.core.cons.call(null,p__12197,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12196)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12215 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12202 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12202))
{var s__12203 = temp__3698__auto____12202;

var p__12204 = cljs.core.take.call(null,n,s__12203);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12204))))
{return cljs.core.cons.call(null,p__12204,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12203)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12204,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12213.call(this,n,step);
case  3 :
return partition__12214.call(this,n,step,pad);
case  4 :
return partition__12215.call(this,n,step,pad,coll);
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
var get_in__12230 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12231 = (function (m,ks,not_found){
var sentinel__12222 = cljs.core.lookup_sentinel;
var m__12223 = m;
var ks__12224 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12224))
{var m__12229 = cljs.core.get.call(null,m__12223,cljs.core.first.call(null,ks__12224),sentinel__12222);

if(cljs.core.truth_((sentinel__12222 === m__12229)))
{return not_found;
} else
{{
var G__12345 = sentinel__12222;
var G__12346 = m__12229;
var G__12347 = cljs.core.next.call(null,ks__12224);
sentinel__12222 = G__12345;
m__12223 = G__12346;
ks__12224 = G__12347;
continue;
}
}
} else
{return m__12223;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12230.call(this,m,ks);
case  3 :
return get_in__12231.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12348,v){
var vec__12349__12350 = p__12348;
var k__12351 = cljs.core.nth.call(null,vec__12349__12350,0,null);
var ks__12352 = cljs.core.nthnext.call(null,vec__12349__12350,1);

if(cljs.core.truth_(ks__12352))
{return cljs.core.assoc.call(null,m,k__12351,assoc_in.call(null,cljs.core.get.call(null,m,k__12351),ks__12352,v));
} else
{return cljs.core.assoc.call(null,m,k__12351,v);
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
var update_in__delegate = function (m,p__12357,f,args){
var vec__12358__12359 = p__12357;
var k__12360 = cljs.core.nth.call(null,vec__12358__12359,0,null);
var ks__12361 = cljs.core.nthnext.call(null,vec__12358__12359,1);

if(cljs.core.truth_(ks__12361))
{return cljs.core.assoc.call(null,m,k__12360,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12360),ks__12361,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12360,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12360),args));
}
};
var update_in = function (m,p__12357,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12357, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12362){
var m = cljs.core.first(arglist__12362);
var p__12357 = cljs.core.first(cljs.core.next(arglist__12362));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12362)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12362)));
return update_in__delegate.call(this, m, p__12357, f, args);
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
var this__12365 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12433 = null;
var G__12433__12434 = (function (coll,k){
var this__12366 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12433__12435 = (function (coll,k,not_found){
var this__12367 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12433 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12433__12434.call(this,coll,k);
case  3 :
return G__12433__12435.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12433;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12368 = this;
var new_array__12369 = cljs.core.aclone.call(null,this__12368.array);

(new_array__12369[k] = v);
return (new cljs.core.Vector(this__12368.meta,new_array__12369));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12437 = null;
var G__12437__12438 = (function (coll,k){
var this__12370 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12437__12439 = (function (coll,k,not_found){
var this__12371 = this;
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
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12372 = this;
var new_array__12373 = cljs.core.aclone.call(null,this__12372.array);

new_array__12373.push(o);
return (new cljs.core.Vector(this__12372.meta,new_array__12373));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12442 = null;
var G__12442__12443 = (function (v,f){
var this__12374 = this;
return cljs.core.ci_reduce.call(null,this__12374.array,f);
});
var G__12442__12444 = (function (v,f,start){
var this__12375 = this;
return cljs.core.ci_reduce.call(null,this__12375.array,f,start);
});
G__12442 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12442__12443.call(this,v,f);
case  3 :
return G__12442__12444.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12442;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12376 = this;
if(cljs.core.truth_((this__12376.array.length > 0)))
{var vector_seq__12381 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12376.array.length)))
{return cljs.core.cons.call(null,(this__12376.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12381.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12384 = this;
return this__12384.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12385 = this;
var count__12386 = this__12385.array.length;

if(cljs.core.truth_((count__12386 > 0)))
{return (this__12385.array[(count__12386 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12418 = this;
if(cljs.core.truth_((this__12418.array.length > 0)))
{var new_array__12420 = cljs.core.aclone.call(null,this__12418.array);

new_array__12420.pop();
return (new cljs.core.Vector(this__12418.meta,new_array__12420));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12424 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12425 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12426 = this;
return (new cljs.core.Vector(meta,this__12426.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12427 = this;
return this__12427.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12451 = null;
var G__12451__12452 = (function (coll,n){
var this__12428 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12429 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12429))
{return (n < this__12428.array.length);
} else
{return and__3546__auto____12429;
}
})()))
{return (this__12428.array[n]);
} else
{return null;
}
});
var G__12451__12453 = (function (coll,n,not_found){
var this__12430 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12431 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12431))
{return (n < this__12430.array.length);
} else
{return and__3546__auto____12431;
}
})()))
{return (this__12430.array[n]);
} else
{return not_found;
}
});
G__12451 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12451__12452.call(this,coll,n);
case  3 :
return G__12451__12453.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12451;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12432 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12432.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12461){
var args = cljs.core.seq( arglist__12461 );;
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
var this__12518 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12616 = null;
var G__12616__12617 = (function (coll,k){
var this__12520 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12616__12618 = (function (coll,k,not_found){
var this__12521 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12616 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12616__12617.call(this,coll,k);
case  3 :
return G__12616__12618.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12616;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12522 = this;
var v_pos__12523 = (this__12522.start + key);

return (new cljs.core.Subvec(this__12522.meta,cljs.core._assoc.call(null,this__12522.v,v_pos__12523,val),this__12522.start,((this__12522.end > (v_pos__12523 + 1)) ? this__12522.end : (v_pos__12523 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12624 = null;
var G__12624__12625 = (function (coll,k){
var this__12526 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12624__12626 = (function (coll,k,not_found){
var this__12528 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12624 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12624__12625.call(this,coll,k);
case  3 :
return G__12624__12626.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12624;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12530 = this;
return (new cljs.core.Subvec(this__12530.meta,cljs.core._assoc_n.call(null,this__12530.v,this__12530.end,o),this__12530.start,(this__12530.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12628 = null;
var G__12628__12629 = (function (coll,f){
var this__12533 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12628__12630 = (function (coll,f,start){
var this__12534 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12628 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12628__12629.call(this,coll,f);
case  3 :
return G__12628__12630.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12628;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12536 = this;
var subvec_seq__12581 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12536.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12536.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12581.call(null,this__12536.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12582 = this;
return (this__12582.end - this__12582.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12584 = this;
return cljs.core._nth.call(null,this__12584.v,(this__12584.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12586 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12586.start,this__12586.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12586.meta,this__12586.v,this__12586.start,(this__12586.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12587 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12588 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12589 = this;
return (new cljs.core.Subvec(meta,this__12589.v,this__12589.start,this__12589.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12594 = this;
return this__12594.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12640 = null;
var G__12640__12642 = (function (coll,n){
var this__12599 = this;
return cljs.core._nth.call(null,this__12599.v,(this__12599.start + n));
});
var G__12640__12644 = (function (coll,n,not_found){
var this__12602 = this;
return cljs.core._nth.call(null,this__12602.v,(this__12602.start + n),not_found);
});
G__12640 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12640__12642.call(this,coll,n);
case  3 :
return G__12640__12644.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12640;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12604 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12604.meta);
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
var subvec__12650 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12651 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12650.call(this,v,start);
case  3 :
return subvec__12651.call(this,v,start,end);
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
var this__12666 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12667 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12669 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12671 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12671.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12672 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12673 = this;
return cljs.core._first.call(null,this__12673.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12674 = this;
var temp__3695__auto____12675 = cljs.core.next.call(null,this__12674.front);

if(cljs.core.truth_(temp__3695__auto____12675))
{var f1__12676 = temp__3695__auto____12675;

return (new cljs.core.PersistentQueueSeq(this__12674.meta,f1__12676,this__12674.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12674.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12674.meta,this__12674.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12677 = this;
return this__12677.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12678 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12678.front,this__12678.rear));
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
var this__12688 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12691 = this;
if(cljs.core.truth_(this__12691.front))
{return (new cljs.core.PersistentQueue(this__12691.meta,(this__12691.count + 1),this__12691.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12693 = this__12691.rear;

if(cljs.core.truth_(or__3548__auto____12693))
{return or__3548__auto____12693;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12691.meta,(this__12691.count + 1),cljs.core.conj.call(null,this__12691.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12698 = this;
var rear__12700 = cljs.core.seq.call(null,this__12698.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12702 = this__12698.front;

if(cljs.core.truth_(or__3548__auto____12702))
{return or__3548__auto____12702;
} else
{return rear__12700;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12698.front,cljs.core.seq.call(null,rear__12700)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12707 = this;
return this__12707.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12709 = this;
return cljs.core._first.call(null,this__12709.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12710 = this;
if(cljs.core.truth_(this__12710.front))
{var temp__3695__auto____12713 = cljs.core.next.call(null,this__12710.front);

if(cljs.core.truth_(temp__3695__auto____12713))
{var f1__12716 = temp__3695__auto____12713;

return (new cljs.core.PersistentQueue(this__12710.meta,(this__12710.count - 1),f1__12716,this__12710.rear));
} else
{return (new cljs.core.PersistentQueue(this__12710.meta,(this__12710.count - 1),cljs.core.seq.call(null,this__12710.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12718 = this;
return cljs.core.first.call(null,this__12718.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12720 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12721 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12722 = this;
return (new cljs.core.PersistentQueue(meta,this__12722.count,this__12722.front,this__12722.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12723 = this;
return this__12723.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12724 = this;
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
var this__12747 = this;
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
var len__12759 = array.length;

var i__12760 = 0;

while(true){
if(cljs.core.truth_((i__12760 < len__12759)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12760]))))
{return i__12760;
} else
{{
var G__12761 = (i__12760 + incr);
i__12760 = G__12761;
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
var obj_map_contains_key_QMARK___12765 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12766 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12762 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12762))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12762;
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
return obj_map_contains_key_QMARK___12765.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12766.call(this,k,strobj,true_val,false_val);
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
var this__12782 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12854 = null;
var G__12854__12857 = (function (coll,k){
var this__12783 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12854__12858 = (function (coll,k,not_found){
var this__12784 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12784.strobj,(this__12784.strobj[k]),not_found);
});
G__12854 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12854__12857.call(this,coll,k);
case  3 :
return G__12854__12858.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12854;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12790 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12792 = goog.object.clone.call(null,this__12790.strobj);
var overwrite_QMARK___12793 = new_strobj__12792.hasOwnProperty(k);

(new_strobj__12792[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12793))
{return (new cljs.core.ObjMap(this__12790.meta,this__12790.keys,new_strobj__12792));
} else
{var new_keys__12796 = cljs.core.aclone.call(null,this__12790.keys);

new_keys__12796.push(k);
return (new cljs.core.ObjMap(this__12790.meta,new_keys__12796,new_strobj__12792));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12790.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12798 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12798.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12865 = null;
var G__12865__12866 = (function (coll,k){
var this__12801 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12865__12867 = (function (coll,k,not_found){
var this__12803 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12865 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12865__12866.call(this,coll,k);
case  3 :
return G__12865__12867.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12865;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12808 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12814 = this;
if(cljs.core.truth_((this__12814.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12769_SHARP_){
return cljs.core.vector.call(null,p1__12769_SHARP_,(this__12814.strobj[p1__12769_SHARP_]));
}),this__12814.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12822 = this;
return this__12822.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12825 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12827 = this;
return (new cljs.core.ObjMap(meta,this__12827.keys,this__12827.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12829 = this;
return this__12829.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12835 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12835.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12837 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12841 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12841))
{return this__12837.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12841;
}
})()))
{var new_keys__12846 = cljs.core.aclone.call(null,this__12837.keys);
var new_strobj__12847 = goog.object.clone.call(null,this__12837.strobj);

new_keys__12846.splice(cljs.core.scan_array.call(null,1,k,new_keys__12846),1);
cljs.core.js_delete.call(null,new_strobj__12847,k);
return (new cljs.core.ObjMap(this__12837.meta,new_keys__12846,new_strobj__12847));
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
var this__12949 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13089 = null;
var G__13089__13091 = (function (coll,k){
var this__12950 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13089__13092 = (function (coll,k,not_found){
var this__12951 = this;
var bucket__12957 = (this__12951.hashobj[cljs.core.hash.call(null,k)]);
var i__12961 = (cljs.core.truth_(bucket__12957)?cljs.core.scan_array.call(null,2,k,bucket__12957):null);

if(cljs.core.truth_(i__12961))
{return (bucket__12957[(i__12961 + 1)]);
} else
{return not_found;
}
});
G__13089 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13089__13091.call(this,coll,k);
case  3 :
return G__13089__13092.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13089;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12963 = this;
var h__12965 = cljs.core.hash.call(null,k);
var bucket__12966 = (this__12963.hashobj[h__12965]);

if(cljs.core.truth_(bucket__12966))
{var new_bucket__12967 = cljs.core.aclone.call(null,bucket__12966);
var new_hashobj__12968 = goog.object.clone.call(null,this__12963.hashobj);

(new_hashobj__12968[h__12965] = new_bucket__12967);
var temp__3695__auto____12971 = cljs.core.scan_array.call(null,2,k,new_bucket__12967);

if(cljs.core.truth_(temp__3695__auto____12971))
{var i__12972 = temp__3695__auto____12971;

(new_bucket__12967[(i__12972 + 1)] = v);
return (new cljs.core.HashMap(this__12963.meta,this__12963.count,new_hashobj__12968));
} else
{new_bucket__12967.push(k,v);
return (new cljs.core.HashMap(this__12963.meta,(this__12963.count + 1),new_hashobj__12968));
}
} else
{var new_hashobj__12978 = goog.object.clone.call(null,this__12963.hashobj);

(new_hashobj__12978[h__12965] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12963.meta,(this__12963.count + 1),new_hashobj__12978));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12982 = this;
var bucket__13013 = (this__12982.hashobj[cljs.core.hash.call(null,k)]);
var i__13015 = (cljs.core.truth_(bucket__13013)?cljs.core.scan_array.call(null,2,k,bucket__13013):null);

if(cljs.core.truth_(i__13015))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13097 = null;
var G__13097__13098 = (function (coll,k){
var this__13017 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13097__13099 = (function (coll,k,not_found){
var this__13019 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13097 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13097__13098.call(this,coll,k);
case  3 :
return G__13097__13099.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13097;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13022 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13028 = this;
if(cljs.core.truth_((this__13028.count > 0)))
{var hashes__13033 = cljs.core.js_keys.call(null,this__13028.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12883_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13028.hashobj[p1__12883_SHARP_])));
}),hashes__13033);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13069 = this;
return this__13069.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13072 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13075 = this;
return (new cljs.core.HashMap(meta,this__13075.count,this__13075.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13076 = this;
return this__13076.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13077 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13077.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13079 = this;
var h__13080 = cljs.core.hash.call(null,k);
var bucket__13082 = (this__13079.hashobj[h__13080]);
var i__13083 = (cljs.core.truth_(bucket__13082)?cljs.core.scan_array.call(null,2,k,bucket__13082):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13083)))
{return coll;
} else
{var new_hashobj__13084 = goog.object.clone.call(null,this__13079.hashobj);

if(cljs.core.truth_((3 > bucket__13082.length)))
{cljs.core.js_delete.call(null,new_hashobj__13084,h__13080);
} else
{var new_bucket__13087 = cljs.core.aclone.call(null,bucket__13082);

new_bucket__13087.splice(i__13083,2);
(new_hashobj__13084[h__13080] = new_bucket__13087);
}
return (new cljs.core.HashMap(this__13079.meta,(this__13079.count - 1),new_hashobj__13084));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13278 = ks.length;

var i__13279 = 0;
var out__13280 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13279 < len__13278)))
{{
var G__13288 = (i__13279 + 1);
var G__13289 = cljs.core.assoc.call(null,out__13280,(ks[i__13279]),(vs[i__13279]));
i__13279 = G__13288;
out__13280 = G__13289;
continue;
}
} else
{return out__13280;
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
var in$__13292 = cljs.core.seq.call(null,keyvals);
var out__13293 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13292))
{{
var G__13297 = cljs.core.nnext.call(null,in$__13292);
var G__13298 = cljs.core.assoc.call(null,out__13293,cljs.core.first.call(null,in$__13292),cljs.core.second.call(null,in$__13292));
in$__13292 = G__13297;
out__13293 = G__13298;
continue;
}
} else
{return out__13293;
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
hash_map.cljs$lang$applyTo = (function (arglist__13299){
var keyvals = cljs.core.seq( arglist__13299 );;
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
{return cljs.core.reduce.call(null,(function (p1__13315_SHARP_,p2__13316_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13324 = p1__13315_SHARP_;

if(cljs.core.truth_(or__3548__auto____13324))
{return or__3548__auto____13324;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13316_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13327){
var maps = cljs.core.seq( arglist__13327 );;
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
{var merge_entry__13341 = (function (m,e){
var k__13337 = cljs.core.first.call(null,e);
var v__13339 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13337)))
{return cljs.core.assoc.call(null,m,k__13337,f.call(null,cljs.core.get.call(null,m,k__13337),v__13339));
} else
{return cljs.core.assoc.call(null,m,k__13337,v__13339);
}
});
var merge2__13344 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13341,(function (){var or__3548__auto____13343 = m1;

if(cljs.core.truth_(or__3548__auto____13343))
{return or__3548__auto____13343;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13344,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13347){
var f = cljs.core.first(arglist__13347);
var maps = cljs.core.rest(arglist__13347);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13354 = cljs.core.ObjMap.fromObject([],{});
var keys__13366 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13366))
{var key__13368 = cljs.core.first.call(null,keys__13366);
var entry__13370 = cljs.core.get.call(null,map,key__13368,"﷐'user/not-found");

{
var G__13497 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13370,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13354,key__13368,entry__13370):ret__13354);
var G__13498 = cljs.core.next.call(null,keys__13366);
ret__13354 = G__13497;
keys__13366 = G__13498;
continue;
}
} else
{return ret__13354;
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
var this__13525 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13577 = null;
var G__13577__13578 = (function (coll,v){
var this__13526 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13577__13579 = (function (coll,v,not_found){
var this__13528 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13528.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13577 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13577__13578.call(this,coll,v);
case  3 :
return G__13577__13579.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13577;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13584 = null;
var G__13584__13585 = (function (coll,k){
var this__13530 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13584__13586 = (function (coll,k,not_found){
var this__13531 = this;
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
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13533 = this;
return (new cljs.core.Set(this__13533.meta,cljs.core.assoc.call(null,this__13533.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13536 = this;
return cljs.core.keys.call(null,this__13536.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13539 = this;
return (new cljs.core.Set(this__13539.meta,cljs.core.dissoc.call(null,this__13539.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13541 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13544 = this;
var and__3546__auto____13547 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13547))
{var and__3546__auto____13552 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13552))
{return cljs.core.every_QMARK_.call(null,(function (p1__13351_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13351_SHARP_);
}),other);
} else
{return and__3546__auto____13552;
}
} else
{return and__3546__auto____13547;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13553 = this;
return (new cljs.core.Set(meta,this__13553.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13556 = this;
return this__13556.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13561 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13561.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13601 = cljs.core.seq.call(null,coll);
var out__13602 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13601))))
{{
var G__13606 = cljs.core.rest.call(null,in$__13601);
var G__13607 = cljs.core.conj.call(null,out__13602,cljs.core.first.call(null,in$__13601));
in$__13601 = G__13606;
out__13602 = G__13607;
continue;
}
} else
{return out__13602;
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
{var n__13636 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13640 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13640))
{var e__13642 = temp__3695__auto____13640;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13642));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13636,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13598_SHARP_){
var temp__3695__auto____13645 = cljs.core.find.call(null,smap,p1__13598_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13645))
{var e__13648 = temp__3695__auto____13645;

return cljs.core.second.call(null,e__13648);
} else
{return p1__13598_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13684 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13665,seen){
while(true){
var vec__13667__13673 = p__13665;
var f__13675 = cljs.core.nth.call(null,vec__13667__13673,0,null);
var xs__13677 = vec__13667__13673;

var temp__3698__auto____13678 = cljs.core.seq.call(null,xs__13677);

if(cljs.core.truth_(temp__3698__auto____13678))
{var s__13680 = temp__3698__auto____13678;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13675)))
{{
var G__13685 = cljs.core.rest.call(null,s__13680);
var G__13686 = seen;
p__13665 = G__13685;
seen = G__13686;
continue;
}
} else
{return cljs.core.cons.call(null,f__13675,step.call(null,cljs.core.rest.call(null,s__13680),cljs.core.conj.call(null,seen,f__13675)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13684.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13700 = cljs.core.Vector.fromArray([]);
var s__13701 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13701)))
{{
var G__13703 = cljs.core.conj.call(null,ret__13700,cljs.core.first.call(null,s__13701));
var G__13704 = cljs.core.next.call(null,s__13701);
ret__13700 = G__13703;
s__13701 = G__13704;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13700);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13711 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13711))
{return or__3548__auto____13711;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13713 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13713 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13713 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13726 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13726))
{return or__3548__auto____13726;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13727 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13727 > -1)))
{return cljs.core.subs.call(null,x,2,i__13727);
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
var map__13736 = cljs.core.ObjMap.fromObject([],{});
var ks__13737 = cljs.core.seq.call(null,keys);
var vs__13739 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13741 = ks__13737;

if(cljs.core.truth_(and__3546__auto____13741))
{return vs__13739;
} else
{return and__3546__auto____13741;
}
})()))
{{
var G__13747 = cljs.core.assoc.call(null,map__13736,cljs.core.first.call(null,ks__13737),cljs.core.first.call(null,vs__13739));
var G__13748 = cljs.core.next.call(null,ks__13737);
var G__13749 = cljs.core.next.call(null,vs__13739);
map__13736 = G__13747;
ks__13737 = G__13748;
vs__13739 = G__13749;
continue;
}
} else
{return map__13736;
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
var max_key__13757 = (function (k,x){
return x;
});
var max_key__13758 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13759 = (function() { 
var G__13768__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13734_SHARP_,p2__13735_SHARP_){
return max_key.call(null,k,p1__13734_SHARP_,p2__13735_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13768 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13768__delegate.call(this, k, x, y, more);
};
G__13768.cljs$lang$maxFixedArity = 3;
G__13768.cljs$lang$applyTo = (function (arglist__13770){
var k = cljs.core.first(arglist__13770);
var x = cljs.core.first(cljs.core.next(arglist__13770));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13770)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13770)));
return G__13768__delegate.call(this, k, x, y, more);
});
return G__13768;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13757.call(this,k,x);
case  3 :
return max_key__13758.call(this,k,x,y);
default:
return max_key__13759.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13759.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13777 = (function (k,x){
return x;
});
var min_key__13778 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13779 = (function() { 
var G__13786__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13751_SHARP_,p2__13752_SHARP_){
return min_key.call(null,k,p1__13751_SHARP_,p2__13752_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13786 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13786__delegate.call(this, k, x, y, more);
};
G__13786.cljs$lang$maxFixedArity = 3;
G__13786.cljs$lang$applyTo = (function (arglist__13788){
var k = cljs.core.first(arglist__13788);
var x = cljs.core.first(cljs.core.next(arglist__13788));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13788)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13788)));
return G__13786__delegate.call(this, k, x, y, more);
});
return G__13786;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13777.call(this,k,x);
case  3 :
return min_key__13778.call(this,k,x,y);
default:
return min_key__13779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13779.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13804 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13805 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13793))
{var s__13795 = temp__3698__auto____13793;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13795),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13795)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13804.call(this,n,step);
case  3 :
return partition_all__13805.call(this,n,step,coll);
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
var temp__3698__auto____13815 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13815))
{var s__13816 = temp__3698__auto____13815;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13816))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13816),take_while.call(null,pred,cljs.core.rest.call(null,s__13816)));
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
var this__13828 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13829 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14026 = null;
var G__14026__14028 = (function (rng,f){
var this__13830 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14026__14029 = (function (rng,f,s){
var this__13832 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14026 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14026__14028.call(this,rng,f);
case  3 :
return G__14026__14029.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14026;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13838 = this;
var comp__13843 = (cljs.core.truth_((this__13838.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13843.call(null,this__13838.start,this__13838.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13844 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13844.end - this__13844.start) / this__13844.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13848 = this;
return this__13848.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13849 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13849.meta,(this__13849.start + this__13849.step),this__13849.end,this__13849.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13882 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13889 = this;
return (new cljs.core.Range(meta,this__13889.start,this__13889.end,this__13889.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13890 = this;
return this__13890.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14040 = null;
var G__14040__14041 = (function (rng,n){
var this__13891 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13891.start + (n * this__13891.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13894 = (this__13891.start > this__13891.end);

if(cljs.core.truth_(and__3546__auto____13894))
{return cljs.core._EQ_.call(null,this__13891.step,0);
} else
{return and__3546__auto____13894;
}
})()))
{return this__13891.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14040__14042 = (function (rng,n,not_found){
var this__13897 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13897.start + (n * this__13897.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13960 = (this__13897.start > this__13897.end);

if(cljs.core.truth_(and__3546__auto____13960))
{return cljs.core._EQ_.call(null,this__13897.step,0);
} else
{return and__3546__auto____13960;
}
})()))
{return this__13897.start;
} else
{return not_found;
}
}
});
G__14040 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14040__14041.call(this,rng,n);
case  3 :
return G__14040__14042.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14040;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13963 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13963.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14056 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14057 = (function (end){
return range.call(null,0,end,1);
});
var range__14058 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14059 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14056.call(this);
case  1 :
return range__14057.call(this,start);
case  2 :
return range__14058.call(this,start,end);
case  3 :
return range__14059.call(this,start,end,step);
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
var temp__3698__auto____14068 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14068))
{var s__14071 = temp__3698__auto____14068;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14071),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14071)));
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
var temp__3698__auto____14087 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14087))
{var s__14088 = temp__3698__auto____14087;

var fst__14089 = cljs.core.first.call(null,s__14088);
var fv__14090 = f.call(null,fst__14089);
var run__14091 = cljs.core.cons.call(null,fst__14089,cljs.core.take_while.call(null,(function (p1__14081_SHARP_){
return cljs.core._EQ_.call(null,fv__14090,f.call(null,p1__14081_SHARP_));
}),cljs.core.next.call(null,s__14088)));

return cljs.core.cons.call(null,run__14091,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14091),s__14088))));
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
var reductions__14124 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14120 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14120))
{var s__14121 = temp__3695__auto____14120;

return reductions.call(null,f,cljs.core.first.call(null,s__14121),cljs.core.rest.call(null,s__14121));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14125 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14122 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14122))
{var s__14123 = temp__3698__auto____14122;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14123)),cljs.core.rest.call(null,s__14123));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14124.call(this,f,init);
case  3 :
return reductions__14125.call(this,f,init,coll);
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
var juxt__14164 = (function (f){
return (function() {
var G__14170 = null;
var G__14170__14171 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14170__14172 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14170__14173 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14170__14174 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14170__14175 = (function() { 
var G__14181__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14181 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14181__delegate.call(this, x, y, z, args);
};
G__14181.cljs$lang$maxFixedArity = 3;
G__14181.cljs$lang$applyTo = (function (arglist__14182){
var x = cljs.core.first(arglist__14182);
var y = cljs.core.first(cljs.core.next(arglist__14182));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14182)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14182)));
return G__14181__delegate.call(this, x, y, z, args);
});
return G__14181;
})()
;
G__14170 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14170__14171.call(this);
case  1 :
return G__14170__14172.call(this,x);
case  2 :
return G__14170__14173.call(this,x,y);
case  3 :
return G__14170__14174.call(this,x,y,z);
default:
return G__14170__14175.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14170.cljs$lang$maxFixedArity = 3;
G__14170.cljs$lang$applyTo = G__14170__14175.cljs$lang$applyTo;
return G__14170;
})()
});
var juxt__14165 = (function (f,g){
return (function() {
var G__14183 = null;
var G__14183__14184 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14183__14185 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14183__14186 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14183__14187 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14183__14188 = (function() { 
var G__14197__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14197 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14197__delegate.call(this, x, y, z, args);
};
G__14197.cljs$lang$maxFixedArity = 3;
G__14197.cljs$lang$applyTo = (function (arglist__14205){
var x = cljs.core.first(arglist__14205);
var y = cljs.core.first(cljs.core.next(arglist__14205));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14205)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14205)));
return G__14197__delegate.call(this, x, y, z, args);
});
return G__14197;
})()
;
G__14183 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14183__14184.call(this);
case  1 :
return G__14183__14185.call(this,x);
case  2 :
return G__14183__14186.call(this,x,y);
case  3 :
return G__14183__14187.call(this,x,y,z);
default:
return G__14183__14188.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14183.cljs$lang$maxFixedArity = 3;
G__14183.cljs$lang$applyTo = G__14183__14188.cljs$lang$applyTo;
return G__14183;
})()
});
var juxt__14166 = (function (f,g,h){
return (function() {
var G__14208 = null;
var G__14208__14209 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14208__14210 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14208__14211 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14208__14212 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14208__14213 = (function() { 
var G__14222__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14222 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14222__delegate.call(this, x, y, z, args);
};
G__14222.cljs$lang$maxFixedArity = 3;
G__14222.cljs$lang$applyTo = (function (arglist__14224){
var x = cljs.core.first(arglist__14224);
var y = cljs.core.first(cljs.core.next(arglist__14224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14224)));
return G__14222__delegate.call(this, x, y, z, args);
});
return G__14222;
})()
;
G__14208 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14208__14209.call(this);
case  1 :
return G__14208__14210.call(this,x);
case  2 :
return G__14208__14211.call(this,x,y);
case  3 :
return G__14208__14212.call(this,x,y,z);
default:
return G__14208__14213.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14208.cljs$lang$maxFixedArity = 3;
G__14208.cljs$lang$applyTo = G__14208__14213.cljs$lang$applyTo;
return G__14208;
})()
});
var juxt__14167 = (function() { 
var G__14226__delegate = function (f,g,h,fs){
var fs__14153 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14227 = null;
var G__14227__14228 = (function (){
return cljs.core.reduce.call(null,(function (p1__14110_SHARP_,p2__14111_SHARP_){
return cljs.core.conj.call(null,p1__14110_SHARP_,p2__14111_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14153);
});
var G__14227__14229 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14112_SHARP_,p2__14113_SHARP_){
return cljs.core.conj.call(null,p1__14112_SHARP_,p2__14113_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14153);
});
var G__14227__14230 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14114_SHARP_,p2__14115_SHARP_){
return cljs.core.conj.call(null,p1__14114_SHARP_,p2__14115_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14153);
});
var G__14227__14231 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14116_SHARP_,p2__14117_SHARP_){
return cljs.core.conj.call(null,p1__14116_SHARP_,p2__14117_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14153);
});
var G__14227__14232 = (function() { 
var G__14248__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14118_SHARP_,p2__14119_SHARP_){
return cljs.core.conj.call(null,p1__14118_SHARP_,cljs.core.apply.call(null,p2__14119_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14153);
};
var G__14248 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14248__delegate.call(this, x, y, z, args);
};
G__14248.cljs$lang$maxFixedArity = 3;
G__14248.cljs$lang$applyTo = (function (arglist__14252){
var x = cljs.core.first(arglist__14252);
var y = cljs.core.first(cljs.core.next(arglist__14252));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14252)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14252)));
return G__14248__delegate.call(this, x, y, z, args);
});
return G__14248;
})()
;
G__14227 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14227__14228.call(this);
case  1 :
return G__14227__14229.call(this,x);
case  2 :
return G__14227__14230.call(this,x,y);
case  3 :
return G__14227__14231.call(this,x,y,z);
default:
return G__14227__14232.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14227.cljs$lang$maxFixedArity = 3;
G__14227.cljs$lang$applyTo = G__14227__14232.cljs$lang$applyTo;
return G__14227;
})()
};
var G__14226 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14226__delegate.call(this, f, g, h, fs);
};
G__14226.cljs$lang$maxFixedArity = 3;
G__14226.cljs$lang$applyTo = (function (arglist__14255){
var f = cljs.core.first(arglist__14255);
var g = cljs.core.first(cljs.core.next(arglist__14255));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14255)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14255)));
return G__14226__delegate.call(this, f, g, h, fs);
});
return G__14226;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14164.call(this,f);
case  2 :
return juxt__14165.call(this,f,g);
case  3 :
return juxt__14166.call(this,f,g,h);
default:
return juxt__14167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14167.cljs$lang$applyTo;
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
var dorun__14273 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14278 = cljs.core.next.call(null,coll);
coll = G__14278;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14274 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14266))
{return (n > 0);
} else
{return and__3546__auto____14266;
}
})()))
{{
var G__14285 = (n - 1);
var G__14286 = cljs.core.next.call(null,coll);
n = G__14285;
coll = G__14286;
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
return dorun__14273.call(this,n);
case  2 :
return dorun__14274.call(this,n,coll);
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
var doall__14306 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14307 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14306.call(this,n);
case  2 :
return doall__14307.call(this,n,coll);
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
var matches__14320 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14320),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14320),1)))
{return cljs.core.first.call(null,matches__14320);
} else
{return cljs.core.vec.call(null,matches__14320);
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
var matches__14324 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14324)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14324),1)))
{return cljs.core.first.call(null,matches__14324);
} else
{return cljs.core.vec.call(null,matches__14324);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14345 = cljs.core.re_find.call(null,re,s);
var match_idx__14347 = s.search(re);
var match_str__14348 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14345))?cljs.core.first.call(null,match_data__14345):match_data__14345);
var post_match__14349 = cljs.core.subs.call(null,s,(match_idx__14347 + cljs.core.count.call(null,match_str__14348)));

if(cljs.core.truth_(match_data__14345))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14345,re_seq.call(null,re,post_match__14349));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14365_SHARP_){
return print_one.call(null,p1__14365_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14388 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14388))
{var and__3546__auto____14397 = (function (){var x__445__auto____14390 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14393 = x__445__auto____14390;

if(cljs.core.truth_(and__3546__auto____14393))
{var and__3546__auto____14395 = x__445__auto____14390.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14395))
{return cljs.core.not.call(null,x__445__auto____14390.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14395;
}
} else
{return and__3546__auto____14393;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14390);
}
})();

if(cljs.core.truth_(and__3546__auto____14397))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14397;
}
} else
{return and__3546__auto____14388;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14402 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14403 = x__445__auto____14402;

if(cljs.core.truth_(and__3546__auto____14403))
{var and__3546__auto____14406 = x__445__auto____14402.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14406))
{return cljs.core.not.call(null,x__445__auto____14402.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14406;
}
} else
{return and__3546__auto____14403;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14402);
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
var first_obj__14431 = cljs.core.first.call(null,objs);
var sb__14432 = (new goog.string.StringBuffer());

var G__14433__14434 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14433__14434))
{var obj__14435 = cljs.core.first.call(null,G__14433__14434);
var G__14433__14436 = G__14433__14434;

while(true){
if(cljs.core.truth_((obj__14435 === first_obj__14431)))
{} else
{sb__14432.append(" ");
}
var G__14437__14440 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14435,opts));

if(cljs.core.truth_(G__14437__14440))
{var string__14441 = cljs.core.first.call(null,G__14437__14440);
var G__14437__14442 = G__14437__14440;

while(true){
sb__14432.append(string__14441);
var temp__3698__auto____14444 = cljs.core.next.call(null,G__14437__14442);

if(cljs.core.truth_(temp__3698__auto____14444))
{var G__14437__14446 = temp__3698__auto____14444;

{
var G__14455 = cljs.core.first.call(null,G__14437__14446);
var G__14456 = G__14437__14446;
string__14441 = G__14455;
G__14437__14442 = G__14456;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14447 = cljs.core.next.call(null,G__14433__14436);

if(cljs.core.truth_(temp__3698__auto____14447))
{var G__14433__14448 = temp__3698__auto____14447;

{
var G__14458 = cljs.core.first.call(null,G__14433__14448);
var G__14459 = G__14433__14448;
obj__14435 = G__14458;
G__14433__14436 = G__14459;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14432);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14463 = cljs.core.first.call(null,objs);

var G__14464__14465 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14464__14465))
{var obj__14466 = cljs.core.first.call(null,G__14464__14465);
var G__14464__14467 = G__14464__14465;

while(true){
if(cljs.core.truth_((obj__14466 === first_obj__14463)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14469__14470 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14466,opts));

if(cljs.core.truth_(G__14469__14470))
{var string__14471 = cljs.core.first.call(null,G__14469__14470);
var G__14469__14472 = G__14469__14470;

while(true){
cljs.core.string_print.call(null,string__14471);
var temp__3698__auto____14473 = cljs.core.next.call(null,G__14469__14472);

if(cljs.core.truth_(temp__3698__auto____14473))
{var G__14469__14474 = temp__3698__auto____14473;

{
var G__14486 = cljs.core.first.call(null,G__14469__14474);
var G__14487 = G__14469__14474;
string__14471 = G__14486;
G__14469__14472 = G__14487;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14475 = cljs.core.next.call(null,G__14464__14467);

if(cljs.core.truth_(temp__3698__auto____14475))
{var G__14464__14476 = temp__3698__auto____14475;

{
var G__14491 = cljs.core.first.call(null,G__14464__14476);
var G__14492 = G__14464__14476;
obj__14466 = G__14491;
G__14464__14467 = G__14492;
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
pr_str.cljs$lang$applyTo = (function (arglist__14504){
var objs = cljs.core.seq( arglist__14504 );;
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
pr.cljs$lang$applyTo = (function (arglist__14513){
var objs = cljs.core.seq( arglist__14513 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14527){
var objs = cljs.core.seq( arglist__14527 );;
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
println.cljs$lang$applyTo = (function (arglist__14549){
var objs = cljs.core.seq( arglist__14549 );;
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
prn.cljs$lang$applyTo = (function (arglist__14555){
var objs = cljs.core.seq( arglist__14555 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14558 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14558,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14579 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14579))
{var nspc__14582 = temp__3698__auto____14579;

return cljs.core.str.call(null,nspc__14582,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14585 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14585))
{var nspc__14586 = temp__3698__auto____14585;

return cljs.core.str.call(null,nspc__14586,"/");
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
var pr_pair__14611 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14611,"{",", ","}",opts,coll);
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
var this__14801 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14802 = this;
var G__14803__14804 = cljs.core.seq.call(null,this__14802.watches);

if(cljs.core.truth_(G__14803__14804))
{var G__14827__14830 = cljs.core.first.call(null,G__14803__14804);
var vec__14829__14831 = G__14827__14830;
var key__14832 = cljs.core.nth.call(null,vec__14829__14831,0,null);
var f__14833 = cljs.core.nth.call(null,vec__14829__14831,1,null);
var G__14803__14834 = G__14803__14804;

var G__14827__14835 = G__14827__14830;
var G__14803__14836 = G__14803__14834;

while(true){
var vec__14837__14838 = G__14827__14835;
var key__14839 = cljs.core.nth.call(null,vec__14837__14838,0,null);
var f__14840 = cljs.core.nth.call(null,vec__14837__14838,1,null);
var G__14803__14841 = G__14803__14836;

f__14840.call(null,key__14839,this$,oldval,newval);
var temp__3698__auto____14844 = cljs.core.next.call(null,G__14803__14841);

if(cljs.core.truth_(temp__3698__auto____14844))
{var G__14803__14845 = temp__3698__auto____14844;

{
var G__14867 = cljs.core.first.call(null,G__14803__14845);
var G__14868 = G__14803__14845;
G__14827__14835 = G__14867;
G__14803__14836 = G__14868;
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
var this__14847 = this;
return this$.watches = cljs.core.assoc.call(null,this__14847.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14851 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14851.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14856 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14856.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14857 = this;
return this__14857.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14859 = this;
return this__14859.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14862 = this;
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
var atom__14886 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14887 = (function() { 
var G__14889__delegate = function (x,p__14874){
var map__14876__14878 = p__14874;
var map__14876__14879 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14876__14878))?cljs.core.apply.call(null,cljs.core.hash_map,map__14876__14878):map__14876__14878);
var validator__14882 = cljs.core.get.call(null,map__14876__14879,"﷐'validator");
var meta__14884 = cljs.core.get.call(null,map__14876__14879,"﷐'meta");

return (new cljs.core.Atom(x,meta__14884,validator__14882,null));
};
var G__14889 = function (x,var_args){
var p__14874 = null;
if (goog.isDef(var_args)) {
  p__14874 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14889__delegate.call(this, x, p__14874);
};
G__14889.cljs$lang$maxFixedArity = 1;
G__14889.cljs$lang$applyTo = (function (arglist__14890){
var x = cljs.core.first(arglist__14890);
var p__14874 = cljs.core.rest(arglist__14890);
return G__14889__delegate.call(this, x, p__14874);
});
return G__14889;
})()
;
atom = function(x,var_args){
var p__14874 = var_args;
switch(arguments.length){
case  1 :
return atom__14886.call(this,x);
default:
return atom__14887.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14887.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14891 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14891))
{var validate__14892 = temp__3698__auto____14891;

if(cljs.core.truth_(validate__14892.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14893 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14893,new_value);
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
var swap_BANG___14935 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14936 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14937 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14938 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14939 = (function() { 
var G__14942__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14942 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14942__delegate.call(this, a, f, x, y, z, more);
};
G__14942.cljs$lang$maxFixedArity = 5;
G__14942.cljs$lang$applyTo = (function (arglist__14948){
var a = cljs.core.first(arglist__14948);
var f = cljs.core.first(cljs.core.next(arglist__14948));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14948)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14948))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14948)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14948)))));
return G__14942__delegate.call(this, a, f, x, y, z, more);
});
return G__14942;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14935.call(this,a,f);
case  3 :
return swap_BANG___14936.call(this,a,f,x);
case  4 :
return swap_BANG___14937.call(this,a,f,x,y);
case  5 :
return swap_BANG___14938.call(this,a,f,x,y,z);
default:
return swap_BANG___14939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14939.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14978){
var iref = cljs.core.first(arglist__14978);
var f = cljs.core.first(cljs.core.next(arglist__14978));
var args = cljs.core.rest(cljs.core.next(arglist__14978));
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
var gensym__15003 = (function (){
return gensym.call(null,"G__");
});
var gensym__15004 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__15003.call(this);
case  1 :
return gensym__15004.call(this,prefix_string);
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
var this__15014 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15014.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15015 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15015.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15015.state,this__15015.f);
}
return cljs.core.deref.call(null,this__15015.state);
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
delay.cljs$lang$applyTo = (function (arglist__15021){
var body = cljs.core.seq( arglist__15021 );;
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
var map__15033__15034 = options;
var map__15033__15035 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15033__15034))?cljs.core.apply.call(null,cljs.core.hash_map,map__15033__15034):map__15033__15034);
var keywordize_keys__15036 = cljs.core.get.call(null,map__15033__15035,"﷐'keywordize-keys");
var keyfn__15038 = (cljs.core.truth_(keywordize_keys__15036)?cljs.core.keyword:cljs.core.str);
var f__15053 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15051 = (function iter__15044(s__15045){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15045__15048 = s__15045;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15045__15048)))
{var k__15050 = cljs.core.first.call(null,s__15045__15048);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15038.call(null,k__15050),thisfn.call(null,(x[k__15050]))]),iter__15044.call(null,cljs.core.rest.call(null,s__15045__15048)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15051.call(null,cljs.core.js_keys.call(null,x));
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

return f__15053.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15064){
var x = cljs.core.first(arglist__15064);
var options = cljs.core.rest(arglist__15064);
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
var mem__15065 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15072__delegate = function (args){
var temp__3695__auto____15069 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15065),args);

if(cljs.core.truth_(temp__3695__auto____15069))
{var v__15070 = temp__3695__auto____15069;

return v__15070;
} else
{var ret__15071 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15065,cljs.core.assoc,args,ret__15071);
return ret__15071;
}
};
var G__15072 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15072__delegate.call(this, args);
};
G__15072.cljs$lang$maxFixedArity = 0;
G__15072.cljs$lang$applyTo = (function (arglist__15073){
var args = cljs.core.seq( arglist__15073 );;
return G__15072__delegate.call(this, args);
});
return G__15072;
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
var trampoline__15079 = (function (f){
while(true){
var ret__15074 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15074)))
{{
var G__15083 = ret__15074;
f = G__15083;
continue;
}
} else
{return ret__15074;
}
break;
}
});
var trampoline__15080 = (function() { 
var G__15085__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15085 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15085__delegate.call(this, f, args);
};
G__15085.cljs$lang$maxFixedArity = 1;
G__15085.cljs$lang$applyTo = (function (arglist__15086){
var f = cljs.core.first(arglist__15086);
var args = cljs.core.rest(arglist__15086);
return G__15085__delegate.call(this, f, args);
});
return G__15085;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15079.call(this,f);
default:
return trampoline__15080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15080.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15090 = (function (){
return rand.call(null,1);
});
var rand__15091 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15090.call(this);
case  1 :
return rand__15091.call(this,n);
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
var k__15099 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15099,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15099,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15159 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15160 = (function (h,child,parent){
var or__3548__auto____15144 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15144))
{return or__3548__auto____15144;
} else
{var or__3548__auto____15145 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15145))
{return or__3548__auto____15145;
} else
{var and__3546__auto____15146 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15146))
{var and__3546__auto____15148 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15148))
{var and__3546__auto____15150 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15150))
{var ret__15152 = true;
var i__15153 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15155 = cljs.core.not.call(null,ret__15152);

if(cljs.core.truth_(or__3548__auto____15155))
{return or__3548__auto____15155;
} else
{return cljs.core._EQ_.call(null,i__15153,cljs.core.count.call(null,parent));
}
})()))
{return ret__15152;
} else
{{
var G__15164 = isa_QMARK_.call(null,h,child.call(null,i__15153),parent.call(null,i__15153));
var G__15165 = (i__15153 + 1);
ret__15152 = G__15164;
i__15153 = G__15165;
continue;
}
}
break;
}
} else
{return and__3546__auto____15150;
}
} else
{return and__3546__auto____15148;
}
} else
{return and__3546__auto____15146;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15159.call(this,h,child);
case  3 :
return isa_QMARK___15160.call(this,h,child,parent);
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
var parents__15170 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15172 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15170.call(this,h);
case  2 :
return parents__15172.call(this,h,tag);
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
var ancestors__15185 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15187 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15185.call(this,h);
case  2 :
return ancestors__15187.call(this,h,tag);
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
var descendants__15192 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15193 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15192.call(this,h);
case  2 :
return descendants__15193.call(this,h,tag);
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
var derive__15259 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15260 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15243 = "﷐'parents".call(null,h);
var td__15244 = "﷐'descendants".call(null,h);
var ta__15245 = "﷐'ancestors".call(null,h);
var tf__15248 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15255 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15243.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15245.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15245.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15243,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15248.call(null,"﷐'ancestors".call(null,h),tag,td__15244,parent,ta__15245),"﷐'descendants":tf__15248.call(null,"﷐'descendants".call(null,h),parent,ta__15245,tag,td__15244)});
})());

if(cljs.core.truth_(or__3548__auto____15255))
{return or__3548__auto____15255;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15259.call(this,h,tag);
case  3 :
return derive__15260.call(this,h,tag,parent);
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
var underive__15282 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15283 = (function (h,tag,parent){
var parentMap__15271 = "﷐'parents".call(null,h);
var childsParents__15272 = (cljs.core.truth_(parentMap__15271.call(null,tag))?cljs.core.disj.call(null,parentMap__15271.call(null,tag),parent):cljs.core.set([]));
var newParents__15273 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15272))?cljs.core.assoc.call(null,parentMap__15271,tag,childsParents__15272):cljs.core.dissoc.call(null,parentMap__15271,tag));
var deriv_seq__15275 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15195_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15195_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15195_SHARP_),cljs.core.second.call(null,p1__15195_SHARP_)));
}),cljs.core.seq.call(null,newParents__15273)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15271.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15196_SHARP_,p2__15197_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15196_SHARP_,p2__15197_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15275));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15282.call(this,h,tag);
case  3 :
return underive__15283.call(this,h,tag,parent);
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
var xprefs__15294 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15296 = (cljs.core.truth_((function (){var and__3546__auto____15295 = xprefs__15294;

if(cljs.core.truth_(and__3546__auto____15295))
{return xprefs__15294.call(null,y);
} else
{return and__3546__auto____15295;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15296))
{return or__3548__auto____15296;
} else
{var or__3548__auto____15298 = (function (){var ps__15297 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15297) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15297),prefer_table)))
{} else
{}
{
var G__15301 = cljs.core.rest.call(null,ps__15297);
ps__15297 = G__15301;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15298))
{return or__3548__auto____15298;
} else
{var or__3548__auto____15300 = (function (){var ps__15299 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15299) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15299),y,prefer_table)))
{} else
{}
{
var G__15302 = cljs.core.rest.call(null,ps__15299);
ps__15299 = G__15302;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15300))
{return or__3548__auto____15300;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15320 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15426 = cljs.core.reduce.call(null,(function (be,p__15330){
var vec__15344__15345 = p__15330;
var k__15346 = cljs.core.nth.call(null,vec__15344__15345,0,null);
var ___15347 = cljs.core.nth.call(null,vec__15344__15345,1,null);
var e__15348 = vec__15344__15345;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15346)))
{var be2__15356 = (cljs.core.truth_((function (){var or__3548__auto____15353 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15353))
{return or__3548__auto____15353;
} else
{return cljs.core.dominates.call(null,k__15346,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15348:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15356),k__15346,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15346," and ",cljs.core.first.call(null,be2__15356),", and neither is preferred")));
}
return be2__15356;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15426))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15426));
return cljs.core.second.call(null,best_entry__15426);
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
if(cljs.core.truth_((function (){var and__3546__auto____15443 = mf;

if(cljs.core.truth_(and__3546__auto____15443))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15443;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15444 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15444))
{return or__3548__auto____15444;
} else
{var or__3548__auto____15445 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15445))
{return or__3548__auto____15445;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15447 = mf;

if(cljs.core.truth_(and__3546__auto____15447))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15447;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15448 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15448))
{return or__3548__auto____15448;
} else
{var or__3548__auto____15449 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15449))
{return or__3548__auto____15449;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15454 = mf;

if(cljs.core.truth_(and__3546__auto____15454))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15454;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15457 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15457))
{return or__3548__auto____15457;
} else
{var or__3548__auto____15459 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15459))
{return or__3548__auto____15459;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15464 = mf;

if(cljs.core.truth_(and__3546__auto____15464))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15464;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15467 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15467))
{return or__3548__auto____15467;
} else
{var or__3548__auto____15469 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15469))
{return or__3548__auto____15469;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15470 = mf;

if(cljs.core.truth_(and__3546__auto____15470))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15470;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15473 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15473))
{return or__3548__auto____15473;
} else
{var or__3548__auto____15476 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15476))
{return or__3548__auto____15476;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15483 = mf;

if(cljs.core.truth_(and__3546__auto____15483))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15483;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15486 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15486))
{return or__3548__auto____15486;
} else
{var or__3548__auto____15488 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15488))
{return or__3548__auto____15488;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15491 = mf;

if(cljs.core.truth_(and__3546__auto____15491))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15491;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15495 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15495))
{return or__3548__auto____15495;
} else
{var or__3548__auto____15498 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15498))
{return or__3548__auto____15498;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15503 = mf;

if(cljs.core.truth_(and__3546__auto____15503))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15503;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15504 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15504))
{return or__3548__auto____15504;
} else
{var or__3548__auto____15505 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15505))
{return or__3548__auto____15505;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15535 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15536 = cljs.core._get_method.call(null,mf,dispatch_val__15535);

if(cljs.core.truth_(target_fn__15536))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15535)));
}
return cljs.core.apply.call(null,target_fn__15536,args);
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
var this__15645 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15648 = this;
cljs.core.swap_BANG_.call(null,this__15648.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15648.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15648.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15648.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15649 = this;
cljs.core.swap_BANG_.call(null,this__15649.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15649.method_cache,this__15649.method_table,this__15649.cached_hierarchy,this__15649.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15656 = this;
cljs.core.swap_BANG_.call(null,this__15656.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15656.method_cache,this__15656.method_table,this__15656.cached_hierarchy,this__15656.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15659 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15659.cached_hierarchy),cljs.core.deref.call(null,this__15659.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15659.method_cache,this__15659.method_table,this__15659.cached_hierarchy,this__15659.hierarchy);
}
var temp__3695__auto____15661 = cljs.core.deref.call(null,this__15659.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15661))
{var target_fn__15662 = temp__3695__auto____15661;

return target_fn__15662;
} else
{var temp__3695__auto____15665 = cljs.core.find_and_cache_best_method.call(null,this__15659.name,dispatch_val,this__15659.hierarchy,this__15659.method_table,this__15659.prefer_table,this__15659.method_cache,this__15659.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15665))
{var target_fn__15666 = temp__3695__auto____15665;

return target_fn__15666;
} else
{return cljs.core.deref.call(null,this__15659.method_table).call(null,this__15659.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15668 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15668.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15668.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15668.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15668.method_cache,this__15668.method_table,this__15668.cached_hierarchy,this__15668.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15674 = this;
return cljs.core.deref.call(null,this__15674.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15677 = this;
return cljs.core.deref.call(null,this__15677.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15678 = this;
return cljs.core.do_dispatch.call(null,mf,this__15678.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15691__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15691 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15691__delegate.call(this, _, args);
};
G__15691.cljs$lang$maxFixedArity = 1;
G__15691.cljs$lang$applyTo = (function (arglist__15693){
var _ = cljs.core.first(arglist__15693);
var args = cljs.core.rest(arglist__15693);
return G__15691__delegate.call(this, _, args);
});
return G__15691;
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
