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
var _invoke__7598 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7286 = this$;

if(cljs.core.truth_(and__3546__auto____7286))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7286;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7288 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7288))
{return or__3548__auto____7288;
} else
{var or__3548__auto____7289 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7599 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7293 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7293))
{return or__3548__auto____7293;
} else
{var or__3548__auto____7295 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7600 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7297 = this$;

if(cljs.core.truth_(and__3546__auto____7297))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7297;
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
var _invoke__7601 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7307 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{var or__3548__auto____7308 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7308))
{return or__3548__auto____7308;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7602 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7310 = this$;

if(cljs.core.truth_(and__3546__auto____7310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7603 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7315 = this$;

if(cljs.core.truth_(and__3546__auto____7315))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7315;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7319 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7319))
{return or__3548__auto____7319;
} else
{var or__3548__auto____7321 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7604 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7324 = this$;

if(cljs.core.truth_(and__3546__auto____7324))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7324;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7335 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7335))
{return or__3548__auto____7335;
} else
{var or__3548__auto____7336 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7606 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7337 = this$;

if(cljs.core.truth_(and__3546__auto____7337))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7337;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7338 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{var or__3548__auto____7339 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7339))
{return or__3548__auto____7339;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7607 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7341 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7341))
{return or__3548__auto____7341;
} else
{var or__3548__auto____7343 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7608 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7345 = this$;

if(cljs.core.truth_(and__3546__auto____7345))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7345;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7348 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7348))
{return or__3548__auto____7348;
} else
{var or__3548__auto____7349 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7349))
{return or__3548__auto____7349;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7352 = this$;

if(cljs.core.truth_(and__3546__auto____7352))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7352;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7610 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = this$;

if(cljs.core.truth_(and__3546__auto____7362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7365 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7365))
{return or__3548__auto____7365;
} else
{var or__3548__auto____7368 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7368))
{return or__3548__auto____7368;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7372 = this$;

if(cljs.core.truth_(and__3546__auto____7372))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7372;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7375 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{var or__3548__auto____7378 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7378))
{return or__3548__auto____7378;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7612 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7382 = this$;

if(cljs.core.truth_(and__3546__auto____7382))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7382;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7386 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
} else
{var or__3548__auto____7388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7390 = this$;

if(cljs.core.truth_(and__3546__auto____7390))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7390;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7399 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7399))
{return or__3548__auto____7399;
} else
{var or__3548__auto____7401 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7404 = this$;

if(cljs.core.truth_(and__3546__auto____7404))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7404;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7406 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{var or__3548__auto____7427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7429 = this$;

if(cljs.core.truth_(and__3546__auto____7429))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7429;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7432 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{var or__3548__auto____7433 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7433))
{return or__3548__auto____7433;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7436 = this$;

if(cljs.core.truth_(and__3546__auto____7436))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7436;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7438 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7438))
{return or__3548__auto____7438;
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
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7445 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{var or__3548__auto____7447 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7447))
{return or__3548__auto____7447;
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
return _invoke__7598.call(this,this$);
case  2 :
return _invoke__7599.call(this,this$,a);
case  3 :
return _invoke__7600.call(this,this$,a,b);
case  4 :
return _invoke__7601.call(this,this$,a,b,c);
case  5 :
return _invoke__7602.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7603.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7604.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7605.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7606.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7607.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7608.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7609.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7610.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7611.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7612.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7613.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7731 = coll;

if(cljs.core.truth_(and__3546__auto____7731))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7731;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7732 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7732))
{return or__3548__auto____7732;
} else
{var or__3548__auto____7733 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7733))
{return or__3548__auto____7733;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7734 = coll;

if(cljs.core.truth_(and__3546__auto____7734))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7734;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7736 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{var or__3548__auto____7738 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7738))
{return or__3548__auto____7738;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7746 = coll;

if(cljs.core.truth_(and__3546__auto____7746))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7746;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7749 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
} else
{var or__3548__auto____7750 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7750))
{return or__3548__auto____7750;
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
var _nth__7770 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7757 = coll;

if(cljs.core.truth_(and__3546__auto____7757))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7757;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
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
})().call(null,coll,n);
}
});
var _nth__7772 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7764 = coll;

if(cljs.core.truth_(and__3546__auto____7764))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7764;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7766 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7766))
{return or__3548__auto____7766;
} else
{var or__3548__auto____7768 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7768))
{return or__3548__auto____7768;
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
return _nth__7770.call(this,coll,n);
case  3 :
return _nth__7772.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7781 = coll;

if(cljs.core.truth_(and__3546__auto____7781))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7781;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7783 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7783))
{return or__3548__auto____7783;
} else
{var or__3548__auto____7784 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = coll;

if(cljs.core.truth_(and__3546__auto____7787))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7787;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7790 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
} else
{var or__3548__auto____7792 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7792))
{return or__3548__auto____7792;
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
var _lookup__7818 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7807 = o;

if(cljs.core.truth_(and__3546__auto____7807))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7807;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7810 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{var or__3548__auto____7811 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7820 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7813 = o;

if(cljs.core.truth_(and__3546__auto____7813))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7813;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7815 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{var or__3548__auto____7816 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7816))
{return or__3548__auto____7816;
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
return _lookup__7818.call(this,o,k);
case  3 :
return _lookup__7820.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7833 = coll;

if(cljs.core.truth_(and__3546__auto____7833))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7833;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7835 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{var or__3548__auto____7837 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7837))
{return or__3548__auto____7837;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7840 = coll;

if(cljs.core.truth_(and__3546__auto____7840))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7840;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7841 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7841))
{return or__3548__auto____7841;
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
if(cljs.core.truth_((function (){var and__3546__auto____7855 = coll;

if(cljs.core.truth_(and__3546__auto____7855))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7855;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7857 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{var or__3548__auto____7858 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7858))
{return or__3548__auto____7858;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7860 = coll;

if(cljs.core.truth_(and__3546__auto____7860))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7860;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7863 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
} else
{var or__3548__auto____7865 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7875 = coll;

if(cljs.core.truth_(and__3546__auto____7875))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7875;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7876 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7876))
{return or__3548__auto____7876;
} else
{var or__3548__auto____7877 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7877))
{return or__3548__auto____7877;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7880 = coll;

if(cljs.core.truth_(and__3546__auto____7880))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7880;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7882 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{var or__3548__auto____7883 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7890 = coll;

if(cljs.core.truth_(and__3546__auto____7890))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7890;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7893 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{var or__3548__auto____7894 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7894))
{return or__3548__auto____7894;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7899 = o;

if(cljs.core.truth_(and__3546__auto____7899))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7899;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7902 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{var or__3548__auto____7904 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7904))
{return or__3548__auto____7904;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7913 = o;

if(cljs.core.truth_(and__3546__auto____7913))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7913;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7914 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7914))
{return or__3548__auto____7914;
} else
{var or__3548__auto____7915 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7919 = o;

if(cljs.core.truth_(and__3546__auto____7919))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7919;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7920 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{var or__3548__auto____7921 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7921))
{return or__3548__auto____7921;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7928 = o;

if(cljs.core.truth_(and__3546__auto____7928))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7928;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7929 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7929))
{return or__3548__auto____7929;
} else
{var or__3548__auto____7930 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
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
var _reduce__7946 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7935 = coll;

if(cljs.core.truth_(and__3546__auto____7935))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7935;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7936 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7936))
{return or__3548__auto____7936;
} else
{var or__3548__auto____7937 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__7948 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7939 = coll;

if(cljs.core.truth_(and__3546__auto____7939))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7939;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____7941 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7941))
{return or__3548__auto____7941;
} else
{var or__3548__auto____7944 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
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
return _reduce__7946.call(this,coll,f);
case  3 :
return _reduce__7948.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____7953 = o;

if(cljs.core.truth_(and__3546__auto____7953))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____7953;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____7954 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7954))
{return or__3548__auto____7954;
} else
{var or__3548__auto____7955 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____7955))
{return or__3548__auto____7955;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____7961 = o;

if(cljs.core.truth_(and__3546__auto____7961))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____7961;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____7964 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7964))
{return or__3548__auto____7964;
} else
{var or__3548__auto____7966 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____7966))
{return or__3548__auto____7966;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____7972 = o;

if(cljs.core.truth_(and__3546__auto____7972))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____7972;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____7974 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{var or__3548__auto____7975 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____7975))
{return or__3548__auto____7975;
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
if(cljs.core.truth_((function (){var and__3546__auto____7996 = o;

if(cljs.core.truth_(and__3546__auto____7996))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____7996;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7998 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8051 = d;

if(cljs.core.truth_(and__3546__auto____8051))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8051;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8053 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8053))
{return or__3548__auto____8053;
} else
{var or__3548__auto____8054 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8054))
{return or__3548__auto____8054;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8065 = this$;

if(cljs.core.truth_(and__3546__auto____8065))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8065;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8070 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8070))
{return or__3548__auto____8070;
} else
{var or__3548__auto____8071 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8073 = this$;

if(cljs.core.truth_(and__3546__auto____8073))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8073;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8076 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{var or__3548__auto____8077 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8077))
{return or__3548__auto____8077;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8079 = this$;

if(cljs.core.truth_(and__3546__auto____8079))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8079;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8121 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{var or__3548__auto____8123 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
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
var G__8170 = null;
var G__8170__8171 = (function (o,k){
return null;
});
var G__8170__8172 = (function (o,k,not_found){
return not_found;
});
G__8170 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8170__8171.call(this,o,k);
case  3 :
return G__8170__8172.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8170;
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
var G__8174 = null;
var G__8174__8175 = (function (_,f){
return f.call(null);
});
var G__8174__8176 = (function (_,f,start){
return start;
});
G__8174 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8174__8175.call(this,_,f);
case  3 :
return G__8174__8176.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8174;
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
var G__8182 = null;
var G__8182__8183 = (function (_,n){
return null;
});
var G__8182__8184 = (function (_,n,not_found){
return not_found;
});
G__8182 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8182__8183.call(this,_,n);
case  3 :
return G__8182__8184.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8182;
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
var ci_reduce__8228 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8208 = cljs.core._nth.call(null,cicoll,0);
var n__8209 = 1;

while(true){
if(cljs.core.truth_((n__8209 < cljs.core._count.call(null,cicoll))))
{{
var G__8236 = f.call(null,val__8208,cljs.core._nth.call(null,cicoll,n__8209));
var G__8237 = (n__8209 + 1);
val__8208 = G__8236;
n__8209 = G__8237;
continue;
}
} else
{return val__8208;
}
break;
}
}
});
var ci_reduce__8229 = (function (cicoll,f,val){
var val__8214 = val;
var n__8215 = 0;

while(true){
if(cljs.core.truth_((n__8215 < cljs.core._count.call(null,cicoll))))
{{
var G__8238 = f.call(null,val__8214,cljs.core._nth.call(null,cicoll,n__8215));
var G__8239 = (n__8215 + 1);
val__8214 = G__8238;
n__8215 = G__8239;
continue;
}
} else
{return val__8214;
}
break;
}
});
var ci_reduce__8230 = (function (cicoll,f,val,idx){
var val__8222 = val;
var n__8223 = idx;

while(true){
if(cljs.core.truth_((n__8223 < cljs.core._count.call(null,cicoll))))
{{
var G__8240 = f.call(null,val__8222,cljs.core._nth.call(null,cicoll,n__8223));
var G__8241 = (n__8223 + 1);
val__8222 = G__8240;
n__8223 = G__8241;
continue;
}
} else
{return val__8222;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8228.call(this,cicoll,f);
case  3 :
return ci_reduce__8229.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8230.call(this,cicoll,f,val,idx);
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
var this__8246 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8291 = null;
var G__8291__8292 = (function (_,f){
var this__8248 = this;
return cljs.core.ci_reduce.call(null,this__8248.a,f,(this__8248.a[this__8248.i]),(this__8248.i + 1));
});
var G__8291__8293 = (function (_,f,start){
var this__8249 = this;
return cljs.core.ci_reduce.call(null,this__8249.a,f,start,this__8249.i);
});
G__8291 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8291__8292.call(this,_,f);
case  3 :
return G__8291__8293.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8291;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8281 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8282 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8297 = null;
var G__8297__8298 = (function (coll,n){
var this__8283 = this;
var i__8284 = (n + this__8283.i);

if(cljs.core.truth_((i__8284 < this__8283.a.length)))
{return (this__8283.a[i__8284]);
} else
{return null;
}
});
var G__8297__8299 = (function (coll,n,not_found){
var this__8285 = this;
var i__8286 = (n + this__8285.i);

if(cljs.core.truth_((i__8286 < this__8285.a.length)))
{return (this__8285.a[i__8286]);
} else
{return not_found;
}
});
G__8297 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8297__8298.call(this,coll,n);
case  3 :
return G__8297__8299.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8297;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8287 = this;
return (this__8287.a.length - this__8287.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8288 = this;
return (this__8288.a[this__8288.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8289 = this;
if(cljs.core.truth_(((this__8289.i + 1) < this__8289.a.length)))
{return (new cljs.core.IndexedSeq(this__8289.a,(this__8289.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8290 = this;
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
var G__8319 = null;
var G__8319__8320 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8319__8321 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8319 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8319__8320.call(this,array,f);
case  3 :
return G__8319__8321.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8319;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8326 = null;
var G__8326__8327 = (function (array,k){
return (array[k]);
});
var G__8326__8328 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8326 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8326__8327.call(this,array,k);
case  3 :
return G__8326__8328.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8326;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8332 = null;
var G__8332__8333 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8332__8334 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8332 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8332__8333.call(this,array,n);
case  3 :
return G__8332__8334.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8332;
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
var temp__3698__auto____8419 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8419))
{var s__8420 = temp__3698__auto____8419;

return cljs.core._first.call(null,s__8420);
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
var G__8488 = cljs.core.next.call(null,s);
s = G__8488;
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
var s__8490 = cljs.core.seq.call(null,x);
var n__8491 = 0;

while(true){
if(cljs.core.truth_(s__8490))
{{
var G__8492 = cljs.core.next.call(null,s__8490);
var G__8493 = (n__8491 + 1);
s__8490 = G__8492;
n__8491 = G__8493;
continue;
}
} else
{return n__8491;
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
var conj__8494 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8495 = (function() { 
var G__8497__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8498 = conj.call(null,coll,x);
var G__8499 = cljs.core.first.call(null,xs);
var G__8500 = cljs.core.next.call(null,xs);
coll = G__8498;
x = G__8499;
xs = G__8500;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8497 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8497__delegate.call(this, coll, x, xs);
};
G__8497.cljs$lang$maxFixedArity = 2;
G__8497.cljs$lang$applyTo = (function (arglist__8501){
var coll = cljs.core.first(arglist__8501);
var x = cljs.core.first(cljs.core.next(arglist__8501));
var xs = cljs.core.rest(cljs.core.next(arglist__8501));
return G__8497__delegate.call(this, coll, x, xs);
});
return G__8497;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8494.call(this,coll,x);
default:
return conj__8495.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8495.cljs$lang$applyTo;
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
var nth__8519 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8520 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8519.call(this,coll,n);
case  3 :
return nth__8520.call(this,coll,n,not_found);
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
var get__8522 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8523 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8522.call(this,o,k);
case  3 :
return get__8523.call(this,o,k,not_found);
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
var assoc__8585 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8586 = (function() { 
var G__8588__delegate = function (coll,k,v,kvs){
while(true){
var ret__8532 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8589 = ret__8532;
var G__8590 = cljs.core.first.call(null,kvs);
var G__8591 = cljs.core.second.call(null,kvs);
var G__8592 = cljs.core.nnext.call(null,kvs);
coll = G__8589;
k = G__8590;
v = G__8591;
kvs = G__8592;
continue;
}
} else
{return ret__8532;
}
break;
}
};
var G__8588 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8588__delegate.call(this, coll, k, v, kvs);
};
G__8588.cljs$lang$maxFixedArity = 3;
G__8588.cljs$lang$applyTo = (function (arglist__8593){
var coll = cljs.core.first(arglist__8593);
var k = cljs.core.first(cljs.core.next(arglist__8593));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8593)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8593)));
return G__8588__delegate.call(this, coll, k, v, kvs);
});
return G__8588;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8585.call(this,coll,k,v);
default:
return assoc__8586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8586.cljs$lang$applyTo;
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
var dissoc__8614 = (function (coll){
return coll;
});
var dissoc__8616 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8617 = (function() { 
var G__8619__delegate = function (coll,k,ks){
while(true){
var ret__8603 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8620 = ret__8603;
var G__8621 = cljs.core.first.call(null,ks);
var G__8622 = cljs.core.next.call(null,ks);
coll = G__8620;
k = G__8621;
ks = G__8622;
continue;
}
} else
{return ret__8603;
}
break;
}
};
var G__8619 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8619__delegate.call(this, coll, k, ks);
};
G__8619.cljs$lang$maxFixedArity = 2;
G__8619.cljs$lang$applyTo = (function (arglist__8623){
var coll = cljs.core.first(arglist__8623);
var k = cljs.core.first(cljs.core.next(arglist__8623));
var ks = cljs.core.rest(cljs.core.next(arglist__8623));
return G__8619__delegate.call(this, coll, k, ks);
});
return G__8619;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8614.call(this,coll);
case  2 :
return dissoc__8616.call(this,coll,k);
default:
return dissoc__8617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8617.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8636 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8637 = x__445__auto____8636;

if(cljs.core.truth_(and__3546__auto____8637))
{var and__3546__auto____8639 = x__445__auto____8636.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8639))
{return cljs.core.not.call(null,x__445__auto____8636.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8639;
}
} else
{return and__3546__auto____8637;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8636);
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
var disj__8653 = (function (coll){
return coll;
});
var disj__8654 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8655 = (function() { 
var G__8660__delegate = function (coll,k,ks){
while(true){
var ret__8649 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8661 = ret__8649;
var G__8662 = cljs.core.first.call(null,ks);
var G__8663 = cljs.core.next.call(null,ks);
coll = G__8661;
k = G__8662;
ks = G__8663;
continue;
}
} else
{return ret__8649;
}
break;
}
};
var G__8660 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8660__delegate.call(this, coll, k, ks);
};
G__8660.cljs$lang$maxFixedArity = 2;
G__8660.cljs$lang$applyTo = (function (arglist__8664){
var coll = cljs.core.first(arglist__8664);
var k = cljs.core.first(cljs.core.next(arglist__8664));
var ks = cljs.core.rest(cljs.core.next(arglist__8664));
return G__8660__delegate.call(this, coll, k, ks);
});
return G__8660;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8653.call(this,coll);
case  2 :
return disj__8654.call(this,coll,k);
default:
return disj__8655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8655.cljs$lang$applyTo;
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
{var x__445__auto____8681 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8683 = x__445__auto____8681;

if(cljs.core.truth_(and__3546__auto____8683))
{var and__3546__auto____8684 = x__445__auto____8681.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8684))
{return cljs.core.not.call(null,x__445__auto____8681.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8684;
}
} else
{return and__3546__auto____8683;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8681);
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
{var x__445__auto____8692 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8695 = x__445__auto____8692;

if(cljs.core.truth_(and__3546__auto____8695))
{var and__3546__auto____8696 = x__445__auto____8692.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8696))
{return cljs.core.not.call(null,x__445__auto____8692.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8696;
}
} else
{return and__3546__auto____8695;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8692);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8702 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8703 = x__445__auto____8702;

if(cljs.core.truth_(and__3546__auto____8703))
{var and__3546__auto____8708 = x__445__auto____8702.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8708))
{return cljs.core.not.call(null,x__445__auto____8702.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8708;
}
} else
{return and__3546__auto____8703;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8702);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8718 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8719 = x__445__auto____8718;

if(cljs.core.truth_(and__3546__auto____8719))
{var and__3546__auto____8720 = x__445__auto____8718.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8720))
{return cljs.core.not.call(null,x__445__auto____8718.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8720;
}
} else
{return and__3546__auto____8719;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8718);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8733 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8734 = x__445__auto____8733;

if(cljs.core.truth_(and__3546__auto____8734))
{var and__3546__auto____8735 = x__445__auto____8733.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8735))
{return cljs.core.not.call(null,x__445__auto____8733.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8735;
}
} else
{return and__3546__auto____8734;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8733);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8743 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8746 = x__445__auto____8743;

if(cljs.core.truth_(and__3546__auto____8746))
{var and__3546__auto____8748 = x__445__auto____8743.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8748))
{return cljs.core.not.call(null,x__445__auto____8743.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8748;
}
} else
{return and__3546__auto____8746;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8743);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8754 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8755 = x__445__auto____8754;

if(cljs.core.truth_(and__3546__auto____8755))
{var and__3546__auto____8766 = x__445__auto____8754.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8766))
{return cljs.core.not.call(null,x__445__auto____8754.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8766;
}
} else
{return and__3546__auto____8755;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8754);
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
{var x__445__auto____8793 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8794 = x__445__auto____8793;

if(cljs.core.truth_(and__3546__auto____8794))
{var and__3546__auto____8795 = x__445__auto____8793.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8795))
{return cljs.core.not.call(null,x__445__auto____8793.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8795;
}
} else
{return and__3546__auto____8794;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8793);
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
var and__3546__auto____8869 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8869))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8870 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8870))
{return or__3548__auto____8870;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8869;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8872 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8872))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8872;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8923 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8923))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8923;
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
var and__3546__auto____8928 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8928))
{return (n == n.toFixed());
} else
{return and__3546__auto____8928;
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
if(cljs.core.truth_((function (){var and__3546__auto____8937 = coll;

if(cljs.core.truth_(and__3546__auto____8937))
{var and__3546__auto____8941 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8941))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8941;
}
} else
{return and__3546__auto____8937;
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
var distinct_QMARK___8965 = (function (x){
return true;
});
var distinct_QMARK___8966 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8967 = (function() { 
var G__8972__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8961 = cljs.core.set([y,x]);
var xs__8962 = more;

while(true){
var x__8963 = cljs.core.first.call(null,xs__8962);
var etc__8964 = cljs.core.next.call(null,xs__8962);

if(cljs.core.truth_(xs__8962))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8961,x__8963)))
{return false;
} else
{{
var G__8975 = cljs.core.conj.call(null,s__8961,x__8963);
var G__8976 = etc__8964;
s__8961 = G__8975;
xs__8962 = G__8976;
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
var G__8972 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8972__delegate.call(this, x, y, more);
};
G__8972.cljs$lang$maxFixedArity = 2;
G__8972.cljs$lang$applyTo = (function (arglist__8980){
var x = cljs.core.first(arglist__8980);
var y = cljs.core.first(cljs.core.next(arglist__8980));
var more = cljs.core.rest(cljs.core.next(arglist__8980));
return G__8972__delegate.call(this, x, y, more);
});
return G__8972;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8965.call(this,x);
case  2 :
return distinct_QMARK___8966.call(this,x,y);
default:
return distinct_QMARK___8967.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8967.cljs$lang$applyTo;
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
var r__8991 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8991)))
{return r__8991;
} else
{if(cljs.core.truth_(r__8991))
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
var sort__8997 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__8998 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__8996 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__8996,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__8996);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__8997.call(this,comp);
case  2 :
return sort__8998.call(this,comp,coll);
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
var sort_by__9086 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9087 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9086.call(this,keyfn,comp);
case  3 :
return sort_by__9087.call(this,keyfn,comp,coll);
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
var reduce__9092 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9093 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9092.call(this,f,val);
case  3 :
return reduce__9093.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9101 = (function (f,coll){
var temp__3695__auto____9097 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9097))
{var s__9098 = temp__3695__auto____9097;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9098),cljs.core.next.call(null,s__9098));
} else
{return f.call(null);
}
});
var seq_reduce__9102 = (function (f,val,coll){
var val__9099 = val;
var coll__9100 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9100))
{{
var G__9105 = f.call(null,val__9099,cljs.core.first.call(null,coll__9100));
var G__9106 = cljs.core.next.call(null,coll__9100);
val__9099 = G__9105;
coll__9100 = G__9106;
continue;
}
} else
{return val__9099;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9101.call(this,f,val);
case  3 :
return seq_reduce__9102.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9110 = null;
var G__9110__9113 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9110__9114 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9110 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9110__9113.call(this,coll,f);
case  3 :
return G__9110__9114.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9110;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9118 = (function (){
return 0;
});
var _PLUS___9119 = (function (x){
return x;
});
var _PLUS___9120 = (function (x,y){
return (x + y);
});
var _PLUS___9121 = (function() { 
var G__9123__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9123 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9123__delegate.call(this, x, y, more);
};
G__9123.cljs$lang$maxFixedArity = 2;
G__9123.cljs$lang$applyTo = (function (arglist__9128){
var x = cljs.core.first(arglist__9128);
var y = cljs.core.first(cljs.core.next(arglist__9128));
var more = cljs.core.rest(cljs.core.next(arglist__9128));
return G__9123__delegate.call(this, x, y, more);
});
return G__9123;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9118.call(this);
case  1 :
return _PLUS___9119.call(this,x);
case  2 :
return _PLUS___9120.call(this,x,y);
default:
return _PLUS___9121.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9121.cljs$lang$applyTo;
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
var ___9131 = (function (x){
return (- x);
});
var ___9132 = (function (x,y){
return (x - y);
});
var ___9133 = (function() { 
var G__9135__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9135 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9135__delegate.call(this, x, y, more);
};
G__9135.cljs$lang$maxFixedArity = 2;
G__9135.cljs$lang$applyTo = (function (arglist__9138){
var x = cljs.core.first(arglist__9138);
var y = cljs.core.first(cljs.core.next(arglist__9138));
var more = cljs.core.rest(cljs.core.next(arglist__9138));
return G__9135__delegate.call(this, x, y, more);
});
return G__9135;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9131.call(this,x);
case  2 :
return ___9132.call(this,x,y);
default:
return ___9133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9133.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9235 = (function (){
return 1;
});
var _STAR___9236 = (function (x){
return x;
});
var _STAR___9237 = (function (x,y){
return (x * y);
});
var _STAR___9238 = (function() { 
var G__9241__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9241 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9241__delegate.call(this, x, y, more);
};
G__9241.cljs$lang$maxFixedArity = 2;
G__9241.cljs$lang$applyTo = (function (arglist__9242){
var x = cljs.core.first(arglist__9242);
var y = cljs.core.first(cljs.core.next(arglist__9242));
var more = cljs.core.rest(cljs.core.next(arglist__9242));
return G__9241__delegate.call(this, x, y, more);
});
return G__9241;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9235.call(this);
case  1 :
return _STAR___9236.call(this,x);
case  2 :
return _STAR___9237.call(this,x,y);
default:
return _STAR___9238.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9238.cljs$lang$applyTo;
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
var _SLASH___9248 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9249 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9250 = (function() { 
var G__9255__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9255 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9255__delegate.call(this, x, y, more);
};
G__9255.cljs$lang$maxFixedArity = 2;
G__9255.cljs$lang$applyTo = (function (arglist__9257){
var x = cljs.core.first(arglist__9257);
var y = cljs.core.first(cljs.core.next(arglist__9257));
var more = cljs.core.rest(cljs.core.next(arglist__9257));
return G__9255__delegate.call(this, x, y, more);
});
return G__9255;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9248.call(this,x);
case  2 :
return _SLASH___9249.call(this,x,y);
default:
return _SLASH___9250.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9250.cljs$lang$applyTo;
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
var _LT___9258 = (function (x){
return true;
});
var _LT___9259 = (function (x,y){
return (x < y);
});
var _LT___9260 = (function() { 
var G__9263__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9267 = y;
var G__9268 = cljs.core.first.call(null,more);
var G__9269 = cljs.core.next.call(null,more);
x = G__9267;
y = G__9268;
more = G__9269;
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
var G__9263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9263__delegate.call(this, x, y, more);
};
G__9263.cljs$lang$maxFixedArity = 2;
G__9263.cljs$lang$applyTo = (function (arglist__9271){
var x = cljs.core.first(arglist__9271);
var y = cljs.core.first(cljs.core.next(arglist__9271));
var more = cljs.core.rest(cljs.core.next(arglist__9271));
return G__9263__delegate.call(this, x, y, more);
});
return G__9263;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9258.call(this,x);
case  2 :
return _LT___9259.call(this,x,y);
default:
return _LT___9260.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9260.cljs$lang$applyTo;
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
var _LT__EQ___9277 = (function (x){
return true;
});
var _LT__EQ___9278 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9279 = (function() { 
var G__9282__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9284 = y;
var G__9285 = cljs.core.first.call(null,more);
var G__9286 = cljs.core.next.call(null,more);
x = G__9284;
y = G__9285;
more = G__9286;
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
var G__9282 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9282__delegate.call(this, x, y, more);
};
G__9282.cljs$lang$maxFixedArity = 2;
G__9282.cljs$lang$applyTo = (function (arglist__9287){
var x = cljs.core.first(arglist__9287);
var y = cljs.core.first(cljs.core.next(arglist__9287));
var more = cljs.core.rest(cljs.core.next(arglist__9287));
return G__9282__delegate.call(this, x, y, more);
});
return G__9282;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9277.call(this,x);
case  2 :
return _LT__EQ___9278.call(this,x,y);
default:
return _LT__EQ___9279.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9279.cljs$lang$applyTo;
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
var _GT___9288 = (function (x){
return true;
});
var _GT___9289 = (function (x,y){
return (x > y);
});
var _GT___9290 = (function() { 
var G__9292__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9293 = y;
var G__9294 = cljs.core.first.call(null,more);
var G__9295 = cljs.core.next.call(null,more);
x = G__9293;
y = G__9294;
more = G__9295;
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
var G__9292 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9292__delegate.call(this, x, y, more);
};
G__9292.cljs$lang$maxFixedArity = 2;
G__9292.cljs$lang$applyTo = (function (arglist__9296){
var x = cljs.core.first(arglist__9296);
var y = cljs.core.first(cljs.core.next(arglist__9296));
var more = cljs.core.rest(cljs.core.next(arglist__9296));
return G__9292__delegate.call(this, x, y, more);
});
return G__9292;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9288.call(this,x);
case  2 :
return _GT___9289.call(this,x,y);
default:
return _GT___9290.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9290.cljs$lang$applyTo;
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
var _GT__EQ___9297 = (function (x){
return true;
});
var _GT__EQ___9298 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9299 = (function() { 
var G__9301__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9302 = y;
var G__9303 = cljs.core.first.call(null,more);
var G__9304 = cljs.core.next.call(null,more);
x = G__9302;
y = G__9303;
more = G__9304;
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
var G__9301 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9301__delegate.call(this, x, y, more);
};
G__9301.cljs$lang$maxFixedArity = 2;
G__9301.cljs$lang$applyTo = (function (arglist__9338){
var x = cljs.core.first(arglist__9338);
var y = cljs.core.first(cljs.core.next(arglist__9338));
var more = cljs.core.rest(cljs.core.next(arglist__9338));
return G__9301__delegate.call(this, x, y, more);
});
return G__9301;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9297.call(this,x);
case  2 :
return _GT__EQ___9298.call(this,x,y);
default:
return _GT__EQ___9299.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9299.cljs$lang$applyTo;
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
var max__9361 = (function (x){
return x;
});
var max__9362 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9363 = (function() { 
var G__9366__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9366 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9366__delegate.call(this, x, y, more);
};
G__9366.cljs$lang$maxFixedArity = 2;
G__9366.cljs$lang$applyTo = (function (arglist__9369){
var x = cljs.core.first(arglist__9369);
var y = cljs.core.first(cljs.core.next(arglist__9369));
var more = cljs.core.rest(cljs.core.next(arglist__9369));
return G__9366__delegate.call(this, x, y, more);
});
return G__9366;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9361.call(this,x);
case  2 :
return max__9362.call(this,x,y);
default:
return max__9363.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9363.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9375 = (function (x){
return x;
});
var min__9376 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9377 = (function() { 
var G__9379__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9379 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9379__delegate.call(this, x, y, more);
};
G__9379.cljs$lang$maxFixedArity = 2;
G__9379.cljs$lang$applyTo = (function (arglist__9380){
var x = cljs.core.first(arglist__9380);
var y = cljs.core.first(cljs.core.next(arglist__9380));
var more = cljs.core.rest(cljs.core.next(arglist__9380));
return G__9379__delegate.call(this, x, y, more);
});
return G__9379;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9375.call(this,x);
case  2 :
return min__9376.call(this,x,y);
default:
return min__9377.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9377.cljs$lang$applyTo;
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
var rem__9390 = (n % d);

return cljs.core.fix.call(null,((n - rem__9390) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9393 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9393));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9398 = (function (){
return Math.random.call(null);
});
var rand__9399 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9398.call(this);
case  1 :
return rand__9399.call(this,n);
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
var _EQ__EQ___9562 = (function (x){
return true;
});
var _EQ__EQ___9563 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9564 = (function() { 
var G__9569__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9570 = y;
var G__9571 = cljs.core.first.call(null,more);
var G__9572 = cljs.core.next.call(null,more);
x = G__9570;
y = G__9571;
more = G__9572;
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
var G__9569 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9569__delegate.call(this, x, y, more);
};
G__9569.cljs$lang$maxFixedArity = 2;
G__9569.cljs$lang$applyTo = (function (arglist__9573){
var x = cljs.core.first(arglist__9573);
var y = cljs.core.first(cljs.core.next(arglist__9573));
var more = cljs.core.rest(cljs.core.next(arglist__9573));
return G__9569__delegate.call(this, x, y, more);
});
return G__9569;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9562.call(this,x);
case  2 :
return _EQ__EQ___9563.call(this,x,y);
default:
return _EQ__EQ___9564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9564.cljs$lang$applyTo;
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
var n__9577 = n;
var xs__9578 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9579 = xs__9578;

if(cljs.core.truth_(and__3546__auto____9579))
{return (n__9577 > 0);
} else
{return and__3546__auto____9579;
}
})()))
{{
var G__9580 = (n__9577 - 1);
var G__9581 = cljs.core.next.call(null,xs__9578);
n__9577 = G__9580;
xs__9578 = G__9581;
continue;
}
} else
{return xs__9578;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9586 = null;
var G__9586__9587 = (function (coll,n){
var temp__3695__auto____9582 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9582))
{var xs__9583 = temp__3695__auto____9582;

return cljs.core.first.call(null,xs__9583);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9586__9588 = (function (coll,n,not_found){
var temp__3695__auto____9584 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9584))
{var xs__9585 = temp__3695__auto____9584;

return cljs.core.first.call(null,xs__9585);
} else
{return not_found;
}
});
G__9586 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9586__9587.call(this,coll,n);
case  3 :
return G__9586__9588.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9586;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9590 = (function (){
return "";
});
var str_STAR___9591 = (function (x){
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
var str_STAR___9592 = (function() { 
var G__9595__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9599 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9600 = cljs.core.next.call(null,more);
sb = G__9599;
more = G__9600;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9595 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9595__delegate.call(this, x, ys);
};
G__9595.cljs$lang$maxFixedArity = 1;
G__9595.cljs$lang$applyTo = (function (arglist__9605){
var x = cljs.core.first(arglist__9605);
var ys = cljs.core.rest(arglist__9605);
return G__9595__delegate.call(this, x, ys);
});
return G__9595;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9590.call(this);
case  1 :
return str_STAR___9591.call(this,x);
default:
return str_STAR___9592.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9592.cljs$lang$applyTo;
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
var str__9615 = (function (){
return "";
});
var str__9616 = (function (x){
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
var str__9617 = (function() { 
var G__9619__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9619 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9619__delegate.call(this, x, ys);
};
G__9619.cljs$lang$maxFixedArity = 1;
G__9619.cljs$lang$applyTo = (function (arglist__9620){
var x = cljs.core.first(arglist__9620);
var ys = cljs.core.rest(arglist__9620);
return G__9619__delegate.call(this, x, ys);
});
return G__9619;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9615.call(this);
case  1 :
return str__9616.call(this,x);
default:
return str__9617.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9617.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9623 = (function (s,start){
return s.substring(start);
});
var subs__9625 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9623.call(this,s,start);
case  3 :
return subs__9625.call(this,s,start,end);
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
var symbol__9649 = (function (name){
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
var symbol__9650 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9649.call(this,ns);
case  2 :
return symbol__9650.call(this,ns,name);
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
var keyword__9678 = (function (name){
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
var keyword__9679 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9678.call(this,ns);
case  2 :
return keyword__9679.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9692 = cljs.core.seq.call(null,x);
var ys__9693 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9692)))
{return cljs.core.nil_QMARK_.call(null,ys__9693);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9693)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9692),cljs.core.first.call(null,ys__9693))))
{{
var G__9698 = cljs.core.next.call(null,xs__9692);
var G__9699 = cljs.core.next.call(null,ys__9693);
xs__9692 = G__9698;
ys__9693 = G__9699;
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
return cljs.core.reduce.call(null,(function (p1__9702_SHARP_,p2__9703_SHARP_){
return cljs.core.hash_combine.call(null,p1__9702_SHARP_,cljs.core.hash.call(null,p2__9703_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9731__9733 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9731__9733))
{var G__9736__9739 = cljs.core.first.call(null,G__9731__9733);
var vec__9737__9740 = G__9736__9739;
var key_name__9743 = cljs.core.nth.call(null,vec__9737__9740,0,null);
var f__9746 = cljs.core.nth.call(null,vec__9737__9740,1,null);
var G__9731__9747 = G__9731__9733;

var G__9736__9748 = G__9736__9739;
var G__9731__9749 = G__9731__9747;

while(true){
var vec__9750__9751 = G__9736__9748;
var key_name__9753 = cljs.core.nth.call(null,vec__9750__9751,0,null);
var f__9755 = cljs.core.nth.call(null,vec__9750__9751,1,null);
var G__9731__9757 = G__9731__9749;

var str_name__9758 = cljs.core.name.call(null,key_name__9753);

obj[str_name__9758] = f__9755;
var temp__3698__auto____9759 = cljs.core.next.call(null,G__9731__9757);

if(cljs.core.truth_(temp__3698__auto____9759))
{var G__9731__9761 = temp__3698__auto____9759;

{
var G__9764 = cljs.core.first.call(null,G__9731__9761);
var G__9765 = G__9731__9761;
G__9736__9748 = G__9764;
G__9731__9749 = G__9765;
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
var this__9888 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9890 = this;
return (new cljs.core.List(this__9890.meta,o,coll,(this__9890.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9892 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9894 = this;
return this__9894.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9896 = this;
return this__9896.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9897 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9898 = this;
return this__9898.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9899 = this;
return this__9899.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9900 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9901 = this;
return (new cljs.core.List(meta,this__9901.first,this__9901.rest,this__9901.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9902 = this;
return this__9902.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9903 = this;
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
var this__9917 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9919 = this;
return (new cljs.core.List(this__9919.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9921 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9923 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9924 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9926 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9928 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9929 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9930 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9931 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9933 = this;
return this__9933.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9934 = this;
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
list.cljs$lang$applyTo = (function (arglist__9977){
var items = cljs.core.seq( arglist__9977 );;
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
var this__9989 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9990 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9991 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9996 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9996.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9997 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9998 = this;
return this__9998.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9999 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9999.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9999.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10000 = this;
return this__10000.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10001 = this;
return (new cljs.core.Cons(meta,this__10001.first,this__10001.rest));
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
var G__10042 = null;
var G__10042__10044 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10042__10045 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10042 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10042__10044.call(this,string,f);
case  3 :
return G__10042__10045.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10042;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10047 = null;
var G__10047__10048 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10047__10049 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10047 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10047__10048.call(this,string,k);
case  3 :
return G__10047__10049.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10047;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10106 = null;
var G__10106__10125 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10106__10126 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10106 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10106__10125.call(this,string,n);
case  3 :
return G__10106__10126.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10106;
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
var G__10202 = null;
var G__10202__10203 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10202__10204 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10202 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10202__10203.call(this,this$,coll);
case  3 :
return G__10202__10204.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10202;
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
var x__10208 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10208;
} else
{lazy_seq.x = x__10208.call(null);
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
var this__10214 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10218 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10219 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10220 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10220.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10221 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10222 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10223 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10224 = this;
return this__10224.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10225 = this;
return (new cljs.core.LazySeq(meta,this__10225.realized,this__10225.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10229 = cljs.core.array.call(null);

var s__10230 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10230)))
{ary__10229.push(cljs.core.first.call(null,s__10230));
{
var G__10231 = cljs.core.next.call(null,s__10230);
s__10230 = G__10231;
continue;
}
} else
{return ary__10229;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10232 = s;
var i__10233 = n;
var sum__10234 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10235 = (i__10233 > 0);

if(cljs.core.truth_(and__3546__auto____10235))
{return cljs.core.seq.call(null,s__10232);
} else
{return and__3546__auto____10235;
}
})()))
{{
var G__10236 = cljs.core.next.call(null,s__10232);
var G__10237 = (i__10233 - 1);
var G__10238 = (sum__10234 + 1);
s__10232 = G__10236;
i__10233 = G__10237;
sum__10234 = G__10238;
continue;
}
} else
{return sum__10234;
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
var concat__10253 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10254 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10255 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10249 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10249))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10249),concat.call(null,cljs.core.rest.call(null,s__10249),y));
} else
{return y;
}
})));
});
var concat__10257 = (function() { 
var G__10260__delegate = function (x,y,zs){
var cat__10252 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10250 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10250))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10250),cat.call(null,cljs.core.rest.call(null,xys__10250),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10252.call(null,concat.call(null,x,y),zs);
};
var G__10260 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10260__delegate.call(this, x, y, zs);
};
G__10260.cljs$lang$maxFixedArity = 2;
G__10260.cljs$lang$applyTo = (function (arglist__10262){
var x = cljs.core.first(arglist__10262);
var y = cljs.core.first(cljs.core.next(arglist__10262));
var zs = cljs.core.rest(cljs.core.next(arglist__10262));
return G__10260__delegate.call(this, x, y, zs);
});
return G__10260;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10253.call(this);
case  1 :
return concat__10254.call(this,x);
case  2 :
return concat__10255.call(this,x,y);
default:
return concat__10257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10257.cljs$lang$applyTo;
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
var list_STAR___10280 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10281 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10282 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10283 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10284 = (function() { 
var G__10287__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10287 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10287__delegate.call(this, a, b, c, d, more);
};
G__10287.cljs$lang$maxFixedArity = 4;
G__10287.cljs$lang$applyTo = (function (arglist__10290){
var a = cljs.core.first(arglist__10290);
var b = cljs.core.first(cljs.core.next(arglist__10290));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10290)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10290))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10290))));
return G__10287__delegate.call(this, a, b, c, d, more);
});
return G__10287;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10280.call(this,a);
case  2 :
return list_STAR___10281.call(this,a,b);
case  3 :
return list_STAR___10282.call(this,a,b,c);
case  4 :
return list_STAR___10283.call(this,a,b,c,d);
default:
return list_STAR___10284.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10284.cljs$lang$applyTo;
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
var apply__10314 = (function (f,args){
var fixed_arity__10294 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10294 + 1)) <= fixed_arity__10294)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10315 = (function (f,x,args){
var arglist__10295 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10296 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10295,fixed_arity__10296) <= fixed_arity__10296)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10295));
} else
{return f.cljs$lang$applyTo(arglist__10295);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10295));
}
});
var apply__10316 = (function (f,x,y,args){
var arglist__10298 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10299 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10298,fixed_arity__10299) <= fixed_arity__10299)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10298));
} else
{return f.cljs$lang$applyTo(arglist__10298);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10298));
}
});
var apply__10317 = (function (f,x,y,z,args){
var arglist__10301 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10303 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10301,fixed_arity__10303) <= fixed_arity__10303)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10301));
} else
{return f.cljs$lang$applyTo(arglist__10301);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10301));
}
});
var apply__10318 = (function() { 
var G__10327__delegate = function (f,a,b,c,d,args){
var arglist__10307 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10311 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10307,fixed_arity__10311) <= fixed_arity__10311)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10307));
} else
{return f.cljs$lang$applyTo(arglist__10307);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10307));
}
};
var G__10327 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10327__delegate.call(this, f, a, b, c, d, args);
};
G__10327.cljs$lang$maxFixedArity = 5;
G__10327.cljs$lang$applyTo = (function (arglist__10330){
var f = cljs.core.first(arglist__10330);
var a = cljs.core.first(cljs.core.next(arglist__10330));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10330)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10330))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10330)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10330)))));
return G__10327__delegate.call(this, f, a, b, c, d, args);
});
return G__10327;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10314.call(this,f,a);
case  3 :
return apply__10315.call(this,f,a,b);
case  4 :
return apply__10316.call(this,f,a,b,c);
case  5 :
return apply__10317.call(this,f,a,b,c,d);
default:
return apply__10318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10318.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10332){
var obj = cljs.core.first(arglist__10332);
var f = cljs.core.first(cljs.core.next(arglist__10332));
var args = cljs.core.rest(cljs.core.next(arglist__10332));
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
var not_EQ___10363 = (function (x){
return false;
});
var not_EQ___10364 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10365 = (function() { 
var G__10373__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10373 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10373__delegate.call(this, x, y, more);
};
G__10373.cljs$lang$maxFixedArity = 2;
G__10373.cljs$lang$applyTo = (function (arglist__10375){
var x = cljs.core.first(arglist__10375);
var y = cljs.core.first(cljs.core.next(arglist__10375));
var more = cljs.core.rest(cljs.core.next(arglist__10375));
return G__10373__delegate.call(this, x, y, more);
});
return G__10373;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10363.call(this,x);
case  2 :
return not_EQ___10364.call(this,x,y);
default:
return not_EQ___10365.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10365.cljs$lang$applyTo;
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
var G__10432 = pred;
var G__10433 = cljs.core.next.call(null,coll);
pred = G__10432;
coll = G__10433;
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
{var or__3548__auto____10449 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10449))
{return or__3548__auto____10449;
} else
{{
var G__10543 = pred;
var G__10544 = cljs.core.next.call(null,coll);
pred = G__10543;
coll = G__10544;
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
var G__10583 = null;
var G__10583__10585 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10583__10586 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10583__10587 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10583__10588 = (function() { 
var G__10596__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10596 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10596__delegate.call(this, x, y, zs);
};
G__10596.cljs$lang$maxFixedArity = 2;
G__10596.cljs$lang$applyTo = (function (arglist__10602){
var x = cljs.core.first(arglist__10602);
var y = cljs.core.first(cljs.core.next(arglist__10602));
var zs = cljs.core.rest(cljs.core.next(arglist__10602));
return G__10596__delegate.call(this, x, y, zs);
});
return G__10596;
})()
;
G__10583 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10583__10585.call(this);
case  1 :
return G__10583__10586.call(this,x);
case  2 :
return G__10583__10587.call(this,x,y);
default:
return G__10583__10588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10583.cljs$lang$maxFixedArity = 2;
G__10583.cljs$lang$applyTo = G__10583__10588.cljs$lang$applyTo;
return G__10583;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10613__delegate = function (args){
return x;
};
var G__10613 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10613__delegate.call(this, args);
};
G__10613.cljs$lang$maxFixedArity = 0;
G__10613.cljs$lang$applyTo = (function (arglist__10614){
var args = cljs.core.seq( arglist__10614 );;
return G__10613__delegate.call(this, args);
});
return G__10613;
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
var comp__10634 = (function (){
return cljs.core.identity;
});
var comp__10635 = (function (f){
return f;
});
var comp__10636 = (function (f,g){
return (function() {
var G__10649 = null;
var G__10649__10650 = (function (){
return f.call(null,g.call(null));
});
var G__10649__10651 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10649__10652 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10649__10653 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10649__10654 = (function() { 
var G__10660__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10660 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10660__delegate.call(this, x, y, z, args);
};
G__10660.cljs$lang$maxFixedArity = 3;
G__10660.cljs$lang$applyTo = (function (arglist__10662){
var x = cljs.core.first(arglist__10662);
var y = cljs.core.first(cljs.core.next(arglist__10662));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10662)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10662)));
return G__10660__delegate.call(this, x, y, z, args);
});
return G__10660;
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
var comp__10637 = (function (f,g,h){
return (function() {
var G__10670 = null;
var G__10670__10671 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10670__10672 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10670__10673 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10670__10674 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10670__10675 = (function() { 
var G__10678__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10678 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10678__delegate.call(this, x, y, z, args);
};
G__10678.cljs$lang$maxFixedArity = 3;
G__10678.cljs$lang$applyTo = (function (arglist__10681){
var x = cljs.core.first(arglist__10681);
var y = cljs.core.first(cljs.core.next(arglist__10681));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10681)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10681)));
return G__10678__delegate.call(this, x, y, z, args);
});
return G__10678;
})()
;
G__10670 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10670__10671.call(this);
case  1 :
return G__10670__10672.call(this,x);
case  2 :
return G__10670__10673.call(this,x,y);
case  3 :
return G__10670__10674.call(this,x,y,z);
default:
return G__10670__10675.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10670.cljs$lang$maxFixedArity = 3;
G__10670.cljs$lang$applyTo = G__10670__10675.cljs$lang$applyTo;
return G__10670;
})()
});
var comp__10639 = (function() { 
var G__10689__delegate = function (f1,f2,f3,fs){
var fs__10623 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10691__delegate = function (args){
var ret__10625 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10623),args);
var fs__10626 = cljs.core.next.call(null,fs__10623);

while(true){
if(cljs.core.truth_(fs__10626))
{{
var G__10693 = cljs.core.first.call(null,fs__10626).call(null,ret__10625);
var G__10694 = cljs.core.next.call(null,fs__10626);
ret__10625 = G__10693;
fs__10626 = G__10694;
continue;
}
} else
{return ret__10625;
}
break;
}
};
var G__10691 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10691__delegate.call(this, args);
};
G__10691.cljs$lang$maxFixedArity = 0;
G__10691.cljs$lang$applyTo = (function (arglist__10713){
var args = cljs.core.seq( arglist__10713 );;
return G__10691__delegate.call(this, args);
});
return G__10691;
})()
;
};
var G__10689 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10689__delegate.call(this, f1, f2, f3, fs);
};
G__10689.cljs$lang$maxFixedArity = 3;
G__10689.cljs$lang$applyTo = (function (arglist__10718){
var f1 = cljs.core.first(arglist__10718);
var f2 = cljs.core.first(cljs.core.next(arglist__10718));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10718)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10718)));
return G__10689__delegate.call(this, f1, f2, f3, fs);
});
return G__10689;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10634.call(this);
case  1 :
return comp__10635.call(this,f1);
case  2 :
return comp__10636.call(this,f1,f2);
case  3 :
return comp__10637.call(this,f1,f2,f3);
default:
return comp__10639.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10639.cljs$lang$applyTo;
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
var partial__10734 = (function (f,arg1){
return (function() { 
var G__10742__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10742 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10742__delegate.call(this, args);
};
G__10742.cljs$lang$maxFixedArity = 0;
G__10742.cljs$lang$applyTo = (function (arglist__10743){
var args = cljs.core.seq( arglist__10743 );;
return G__10742__delegate.call(this, args);
});
return G__10742;
})()
;
});
var partial__10735 = (function (f,arg1,arg2){
return (function() { 
var G__10745__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10745 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10745__delegate.call(this, args);
};
G__10745.cljs$lang$maxFixedArity = 0;
G__10745.cljs$lang$applyTo = (function (arglist__10748){
var args = cljs.core.seq( arglist__10748 );;
return G__10745__delegate.call(this, args);
});
return G__10745;
})()
;
});
var partial__10736 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10755__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10755 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10755__delegate.call(this, args);
};
G__10755.cljs$lang$maxFixedArity = 0;
G__10755.cljs$lang$applyTo = (function (arglist__10757){
var args = cljs.core.seq( arglist__10757 );;
return G__10755__delegate.call(this, args);
});
return G__10755;
})()
;
});
var partial__10737 = (function() { 
var G__10762__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10766__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10766 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10766__delegate.call(this, args);
};
G__10766.cljs$lang$maxFixedArity = 0;
G__10766.cljs$lang$applyTo = (function (arglist__10769){
var args = cljs.core.seq( arglist__10769 );;
return G__10766__delegate.call(this, args);
});
return G__10766;
})()
;
};
var G__10762 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10762__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10762.cljs$lang$maxFixedArity = 4;
G__10762.cljs$lang$applyTo = (function (arglist__10771){
var f = cljs.core.first(arglist__10771);
var arg1 = cljs.core.first(cljs.core.next(arglist__10771));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10771)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10771))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10771))));
return G__10762__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10762;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10734.call(this,f,arg1);
case  3 :
return partial__10735.call(this,f,arg1,arg2);
case  4 :
return partial__10736.call(this,f,arg1,arg2,arg3);
default:
return partial__10737.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10737.cljs$lang$applyTo;
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
var fnil__10811 = (function (f,x){
return (function() {
var G__10816 = null;
var G__10816__10819 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10816__10820 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10816__10821 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10816__10822 = (function() { 
var G__10832__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10832 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10832__delegate.call(this, a, b, c, ds);
};
G__10832.cljs$lang$maxFixedArity = 3;
G__10832.cljs$lang$applyTo = (function (arglist__10835){
var a = cljs.core.first(arglist__10835);
var b = cljs.core.first(cljs.core.next(arglist__10835));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10835)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10835)));
return G__10832__delegate.call(this, a, b, c, ds);
});
return G__10832;
})()
;
G__10816 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10816__10819.call(this,a);
case  2 :
return G__10816__10820.call(this,a,b);
case  3 :
return G__10816__10821.call(this,a,b,c);
default:
return G__10816__10822.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10816.cljs$lang$maxFixedArity = 3;
G__10816.cljs$lang$applyTo = G__10816__10822.cljs$lang$applyTo;
return G__10816;
})()
});
var fnil__10812 = (function (f,x,y){
return (function() {
var G__10839 = null;
var G__10839__10840 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10839__10841 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10839__10842 = (function() { 
var G__10854__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10854 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10854__delegate.call(this, a, b, c, ds);
};
G__10854.cljs$lang$maxFixedArity = 3;
G__10854.cljs$lang$applyTo = (function (arglist__10859){
var a = cljs.core.first(arglist__10859);
var b = cljs.core.first(cljs.core.next(arglist__10859));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10859)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10859)));
return G__10854__delegate.call(this, a, b, c, ds);
});
return G__10854;
})()
;
G__10839 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10839__10840.call(this,a,b);
case  3 :
return G__10839__10841.call(this,a,b,c);
default:
return G__10839__10842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10839.cljs$lang$maxFixedArity = 3;
G__10839.cljs$lang$applyTo = G__10839__10842.cljs$lang$applyTo;
return G__10839;
})()
});
var fnil__10813 = (function (f,x,y,z){
return (function() {
var G__10866 = null;
var G__10866__10867 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10866__10868 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10866__10870 = (function() { 
var G__10879__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10879 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10879__delegate.call(this, a, b, c, ds);
};
G__10879.cljs$lang$maxFixedArity = 3;
G__10879.cljs$lang$applyTo = (function (arglist__10887){
var a = cljs.core.first(arglist__10887);
var b = cljs.core.first(cljs.core.next(arglist__10887));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10887)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10887)));
return G__10879__delegate.call(this, a, b, c, ds);
});
return G__10879;
})()
;
G__10866 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10866__10867.call(this,a,b);
case  3 :
return G__10866__10868.call(this,a,b,c);
default:
return G__10866__10870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10866.cljs$lang$maxFixedArity = 3;
G__10866.cljs$lang$applyTo = G__10866__10870.cljs$lang$applyTo;
return G__10866;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10811.call(this,f,x);
case  3 :
return fnil__10812.call(this,f,x,y);
case  4 :
return fnil__10813.call(this,f,x,y,z);
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
var mapi__10909 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10906 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10906))
{var s__10907 = temp__3698__auto____10906;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10907)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10907)));
} else
{return null;
}
})));
});

return mapi__10909.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10925))
{var s__10926 = temp__3698__auto____10925;

var x__10927 = f.call(null,cljs.core.first.call(null,s__10926));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10927)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10926));
} else
{return cljs.core.cons.call(null,x__10927,keep.call(null,f,cljs.core.rest.call(null,s__10926)));
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
var keepi__10980 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10973 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10973))
{var s__10975 = temp__3698__auto____10973;

var x__10976 = f.call(null,idx,cljs.core.first.call(null,s__10975));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10976)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10975));
} else
{return cljs.core.cons.call(null,x__10976,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10975)));
}
} else
{return null;
}
})));
});

return keepi__10980.call(null,0,coll);
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
var every_pred__11173 = (function (p){
return (function() {
var ep1 = null;
var ep1__11178 = (function (){
return true;
});
var ep1__11180 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11181 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11013 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11013))
{return p.call(null,y);
} else
{return and__3546__auto____11013;
}
})());
});
var ep1__11182 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11016 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11016))
{var and__3546__auto____11019 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11019))
{return p.call(null,z);
} else
{return and__3546__auto____11019;
}
} else
{return and__3546__auto____11016;
}
})());
});
var ep1__11183 = (function() { 
var G__11192__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11022 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11022))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11022;
}
})());
};
var G__11192 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11192__delegate.call(this, x, y, z, args);
};
G__11192.cljs$lang$maxFixedArity = 3;
G__11192.cljs$lang$applyTo = (function (arglist__11193){
var x = cljs.core.first(arglist__11193);
var y = cljs.core.first(cljs.core.next(arglist__11193));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11193)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11193)));
return G__11192__delegate.call(this, x, y, z, args);
});
return G__11192;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11178.call(this);
case  1 :
return ep1__11180.call(this,x);
case  2 :
return ep1__11181.call(this,x,y);
case  3 :
return ep1__11182.call(this,x,y,z);
default:
return ep1__11183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11183.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11174 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11194 = (function (){
return true;
});
var ep2__11195 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11026 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11026))
{return p2.call(null,x);
} else
{return and__3546__auto____11026;
}
})());
});
var ep2__11196 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11029 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11029))
{var and__3546__auto____11030 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11030))
{var and__3546__auto____11031 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11031))
{return p2.call(null,y);
} else
{return and__3546__auto____11031;
}
} else
{return and__3546__auto____11030;
}
} else
{return and__3546__auto____11029;
}
})());
});
var ep2__11197 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11041 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11041))
{var and__3546__auto____11045 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11045))
{var and__3546__auto____11046 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11046))
{var and__3546__auto____11053 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11053))
{var and__3546__auto____11054 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11054))
{return p2.call(null,z);
} else
{return and__3546__auto____11054;
}
} else
{return and__3546__auto____11053;
}
} else
{return and__3546__auto____11046;
}
} else
{return and__3546__auto____11045;
}
} else
{return and__3546__auto____11041;
}
})());
});
var ep2__11198 = (function() { 
var G__11221__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11057 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11057))
{return cljs.core.every_QMARK_.call(null,(function (p1__10949_SHARP_){
var and__3546__auto____11060 = p1.call(null,p1__10949_SHARP_);

if(cljs.core.truth_(and__3546__auto____11060))
{return p2.call(null,p1__10949_SHARP_);
} else
{return and__3546__auto____11060;
}
}),args);
} else
{return and__3546__auto____11057;
}
})());
};
var G__11221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11221__delegate.call(this, x, y, z, args);
};
G__11221.cljs$lang$maxFixedArity = 3;
G__11221.cljs$lang$applyTo = (function (arglist__11224){
var x = cljs.core.first(arglist__11224);
var y = cljs.core.first(cljs.core.next(arglist__11224));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11224)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11224)));
return G__11221__delegate.call(this, x, y, z, args);
});
return G__11221;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11194.call(this);
case  1 :
return ep2__11195.call(this,x);
case  2 :
return ep2__11196.call(this,x,y);
case  3 :
return ep2__11197.call(this,x,y,z);
default:
return ep2__11198.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11198.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11175 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11230 = (function (){
return true;
});
var ep3__11231 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11063 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11063))
{var and__3546__auto____11069 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11069))
{return p3.call(null,x);
} else
{return and__3546__auto____11069;
}
} else
{return and__3546__auto____11063;
}
})());
});
var ep3__11232 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11132 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11132))
{var and__3546__auto____11133 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11133))
{var and__3546__auto____11135 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11135))
{var and__3546__auto____11137 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11137))
{var and__3546__auto____11138 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11138))
{return p3.call(null,y);
} else
{return and__3546__auto____11138;
}
} else
{return and__3546__auto____11137;
}
} else
{return and__3546__auto____11135;
}
} else
{return and__3546__auto____11133;
}
} else
{return and__3546__auto____11132;
}
})());
});
var ep3__11233 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11140 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11140))
{var and__3546__auto____11141 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11141))
{var and__3546__auto____11143 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11143))
{var and__3546__auto____11145 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11145))
{var and__3546__auto____11146 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11146))
{var and__3546__auto____11148 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11148))
{var and__3546__auto____11149 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11149))
{var and__3546__auto____11151 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11151))
{return p3.call(null,z);
} else
{return and__3546__auto____11151;
}
} else
{return and__3546__auto____11149;
}
} else
{return and__3546__auto____11148;
}
} else
{return and__3546__auto____11146;
}
} else
{return and__3546__auto____11145;
}
} else
{return and__3546__auto____11143;
}
} else
{return and__3546__auto____11141;
}
} else
{return and__3546__auto____11140;
}
})());
});
var ep3__11234 = (function() { 
var G__11261__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11154 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11154))
{return cljs.core.every_QMARK_.call(null,(function (p1__10955_SHARP_){
var and__3546__auto____11156 = p1.call(null,p1__10955_SHARP_);

if(cljs.core.truth_(and__3546__auto____11156))
{var and__3546__auto____11158 = p2.call(null,p1__10955_SHARP_);

if(cljs.core.truth_(and__3546__auto____11158))
{return p3.call(null,p1__10955_SHARP_);
} else
{return and__3546__auto____11158;
}
} else
{return and__3546__auto____11156;
}
}),args);
} else
{return and__3546__auto____11154;
}
})());
};
var G__11261 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11261__delegate.call(this, x, y, z, args);
};
G__11261.cljs$lang$maxFixedArity = 3;
G__11261.cljs$lang$applyTo = (function (arglist__11266){
var x = cljs.core.first(arglist__11266);
var y = cljs.core.first(cljs.core.next(arglist__11266));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11266)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11266)));
return G__11261__delegate.call(this, x, y, z, args);
});
return G__11261;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11230.call(this);
case  1 :
return ep3__11231.call(this,x);
case  2 :
return ep3__11232.call(this,x,y);
case  3 :
return ep3__11233.call(this,x,y,z);
default:
return ep3__11234.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11234.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11176 = (function() { 
var G__11273__delegate = function (p1,p2,p3,ps){
var ps__11166 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11275 = (function (){
return true;
});
var epn__11277 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10957_SHARP_){
return p1__10957_SHARP_.call(null,x);
}),ps__11166);
});
var epn__11279 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10959_SHARP_){
var and__3546__auto____11168 = p1__10959_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11168))
{return p1__10959_SHARP_.call(null,y);
} else
{return and__3546__auto____11168;
}
}),ps__11166);
});
var epn__11280 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10960_SHARP_){
var and__3546__auto____11169 = p1__10960_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11169))
{var and__3546__auto____11170 = p1__10960_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11170))
{return p1__10960_SHARP_.call(null,z);
} else
{return and__3546__auto____11170;
}
} else
{return and__3546__auto____11169;
}
}),ps__11166);
});
var epn__11322 = (function() { 
var G__11340__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11171 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11171))
{return cljs.core.every_QMARK_.call(null,(function (p1__10961_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10961_SHARP_,args);
}),ps__11166);
} else
{return and__3546__auto____11171;
}
})());
};
var G__11340 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11340__delegate.call(this, x, y, z, args);
};
G__11340.cljs$lang$maxFixedArity = 3;
G__11340.cljs$lang$applyTo = (function (arglist__11344){
var x = cljs.core.first(arglist__11344);
var y = cljs.core.first(cljs.core.next(arglist__11344));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11344)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11344)));
return G__11340__delegate.call(this, x, y, z, args);
});
return G__11340;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11275.call(this);
case  1 :
return epn__11277.call(this,x);
case  2 :
return epn__11279.call(this,x,y);
case  3 :
return epn__11280.call(this,x,y,z);
default:
return epn__11322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11322.cljs$lang$applyTo;
return epn;
})()
};
var G__11273 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11273__delegate.call(this, p1, p2, p3, ps);
};
G__11273.cljs$lang$maxFixedArity = 3;
G__11273.cljs$lang$applyTo = (function (arglist__11356){
var p1 = cljs.core.first(arglist__11356);
var p2 = cljs.core.first(cljs.core.next(arglist__11356));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11356)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11356)));
return G__11273__delegate.call(this, p1, p2, p3, ps);
});
return G__11273;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11173.call(this,p1);
case  2 :
return every_pred__11174.call(this,p1,p2);
case  3 :
return every_pred__11175.call(this,p1,p2,p3);
default:
return every_pred__11176.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11176.cljs$lang$applyTo;
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
var some_fn__11513 = (function (p){
return (function() {
var sp1 = null;
var sp1__11525 = (function (){
return null;
});
var sp1__11526 = (function (x){
return p.call(null,x);
});
var sp1__11527 = (function (x,y){
var or__3548__auto____11366 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11366))
{return or__3548__auto____11366;
} else
{return p.call(null,y);
}
});
var sp1__11528 = (function (x,y,z){
var or__3548__auto____11375 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11375))
{return or__3548__auto____11375;
} else
{var or__3548__auto____11377 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11377))
{return or__3548__auto____11377;
} else
{return p.call(null,z);
}
}
});
var sp1__11529 = (function() { 
var G__11537__delegate = function (x,y,z,args){
var or__3548__auto____11379 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11379))
{return or__3548__auto____11379;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11537 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11537__delegate.call(this, x, y, z, args);
};
G__11537.cljs$lang$maxFixedArity = 3;
G__11537.cljs$lang$applyTo = (function (arglist__11541){
var x = cljs.core.first(arglist__11541);
var y = cljs.core.first(cljs.core.next(arglist__11541));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11541)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11541)));
return G__11537__delegate.call(this, x, y, z, args);
});
return G__11537;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11525.call(this);
case  1 :
return sp1__11526.call(this,x);
case  2 :
return sp1__11527.call(this,x,y);
case  3 :
return sp1__11528.call(this,x,y,z);
default:
return sp1__11529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11529.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11514 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11545 = (function (){
return null;
});
var sp2__11546 = (function (x){
var or__3548__auto____11387 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11387))
{return or__3548__auto____11387;
} else
{return p2.call(null,x);
}
});
var sp2__11547 = (function (x,y){
var or__3548__auto____11388 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11388))
{return or__3548__auto____11388;
} else
{var or__3548__auto____11389 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11389))
{return or__3548__auto____11389;
} else
{var or__3548__auto____11390 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11390))
{return or__3548__auto____11390;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11548 = (function (x,y,z){
var or__3548__auto____11391 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11391))
{return or__3548__auto____11391;
} else
{var or__3548__auto____11393 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11393))
{return or__3548__auto____11393;
} else
{var or__3548__auto____11395 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11395))
{return or__3548__auto____11395;
} else
{var or__3548__auto____11401 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11401))
{return or__3548__auto____11401;
} else
{var or__3548__auto____11402 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11402))
{return or__3548__auto____11402;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11549 = (function() { 
var G__11570__delegate = function (x,y,z,args){
var or__3548__auto____11404 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11404))
{return or__3548__auto____11404;
} else
{return cljs.core.some.call(null,(function (p1__10996_SHARP_){
var or__3548__auto____11434 = p1.call(null,p1__10996_SHARP_);

if(cljs.core.truth_(or__3548__auto____11434))
{return or__3548__auto____11434;
} else
{return p2.call(null,p1__10996_SHARP_);
}
}),args);
}
};
var G__11570 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11570__delegate.call(this, x, y, z, args);
};
G__11570.cljs$lang$maxFixedArity = 3;
G__11570.cljs$lang$applyTo = (function (arglist__11576){
var x = cljs.core.first(arglist__11576);
var y = cljs.core.first(cljs.core.next(arglist__11576));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11576)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11576)));
return G__11570__delegate.call(this, x, y, z, args);
});
return G__11570;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11545.call(this);
case  1 :
return sp2__11546.call(this,x);
case  2 :
return sp2__11547.call(this,x,y);
case  3 :
return sp2__11548.call(this,x,y,z);
default:
return sp2__11549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11549.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11515 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11581 = (function (){
return null;
});
var sp3__11582 = (function (x){
var or__3548__auto____11437 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11437))
{return or__3548__auto____11437;
} else
{var or__3548__auto____11443 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11443))
{return or__3548__auto____11443;
} else
{return p3.call(null,x);
}
}
});
var sp3__11583 = (function (x,y){
var or__3548__auto____11447 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11447))
{return or__3548__auto____11447;
} else
{var or__3548__auto____11449 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11449))
{return or__3548__auto____11449;
} else
{var or__3548__auto____11450 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11450))
{return or__3548__auto____11450;
} else
{var or__3548__auto____11453 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11453))
{return or__3548__auto____11453;
} else
{var or__3548__auto____11454 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11454))
{return or__3548__auto____11454;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11584 = (function (x,y,z){
var or__3548__auto____11455 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11455))
{return or__3548__auto____11455;
} else
{var or__3548__auto____11458 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11458))
{return or__3548__auto____11458;
} else
{var or__3548__auto____11460 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11460))
{return or__3548__auto____11460;
} else
{var or__3548__auto____11463 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11463))
{return or__3548__auto____11463;
} else
{var or__3548__auto____11465 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11465))
{return or__3548__auto____11465;
} else
{var or__3548__auto____11473 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11473))
{return or__3548__auto____11473;
} else
{var or__3548__auto____11475 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11475))
{return or__3548__auto____11475;
} else
{var or__3548__auto____11476 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11476))
{return or__3548__auto____11476;
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
var sp3__11586 = (function() { 
var G__11613__delegate = function (x,y,z,args){
var or__3548__auto____11483 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11483))
{return or__3548__auto____11483;
} else
{return cljs.core.some.call(null,(function (p1__11001_SHARP_){
var or__3548__auto____11486 = p1.call(null,p1__11001_SHARP_);

if(cljs.core.truth_(or__3548__auto____11486))
{return or__3548__auto____11486;
} else
{var or__3548__auto____11491 = p2.call(null,p1__11001_SHARP_);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{return p3.call(null,p1__11001_SHARP_);
}
}
}),args);
}
};
var G__11613 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11613__delegate.call(this, x, y, z, args);
};
G__11613.cljs$lang$maxFixedArity = 3;
G__11613.cljs$lang$applyTo = (function (arglist__11631){
var x = cljs.core.first(arglist__11631);
var y = cljs.core.first(cljs.core.next(arglist__11631));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11631)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11631)));
return G__11613__delegate.call(this, x, y, z, args);
});
return G__11613;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11581.call(this);
case  1 :
return sp3__11582.call(this,x);
case  2 :
return sp3__11583.call(this,x,y);
case  3 :
return sp3__11584.call(this,x,y,z);
default:
return sp3__11586.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11586.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11516 = (function() { 
var G__11635__delegate = function (p1,p2,p3,ps){
var ps__11499 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11637 = (function (){
return null;
});
var spn__11638 = (function (x){
return cljs.core.some.call(null,(function (p1__11003_SHARP_){
return p1__11003_SHARP_.call(null,x);
}),ps__11499);
});
var spn__11639 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11004_SHARP_){
var or__3548__auto____11503 = p1__11004_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11503))
{return or__3548__auto____11503;
} else
{return p1__11004_SHARP_.call(null,y);
}
}),ps__11499);
});
var spn__11641 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11005_SHARP_){
var or__3548__auto____11506 = p1__11005_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11506))
{return or__3548__auto____11506;
} else
{var or__3548__auto____11507 = p1__11005_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11507))
{return or__3548__auto____11507;
} else
{return p1__11005_SHARP_.call(null,z);
}
}
}),ps__11499);
});
var spn__11642 = (function() { 
var G__11656__delegate = function (x,y,z,args){
var or__3548__auto____11508 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11508))
{return or__3548__auto____11508;
} else
{return cljs.core.some.call(null,(function (p1__11006_SHARP_){
return cljs.core.some.call(null,p1__11006_SHARP_,args);
}),ps__11499);
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
G__11656.cljs$lang$applyTo = (function (arglist__11667){
var x = cljs.core.first(arglist__11667);
var y = cljs.core.first(cljs.core.next(arglist__11667));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11667)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11667)));
return G__11656__delegate.call(this, x, y, z, args);
});
return G__11656;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11637.call(this);
case  1 :
return spn__11638.call(this,x);
case  2 :
return spn__11639.call(this,x,y);
case  3 :
return spn__11641.call(this,x,y,z);
default:
return spn__11642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11642.cljs$lang$applyTo;
return spn;
})()
};
var G__11635 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11635__delegate.call(this, p1, p2, p3, ps);
};
G__11635.cljs$lang$maxFixedArity = 3;
G__11635.cljs$lang$applyTo = (function (arglist__11670){
var p1 = cljs.core.first(arglist__11670);
var p2 = cljs.core.first(cljs.core.next(arglist__11670));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11670)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11670)));
return G__11635__delegate.call(this, p1, p2, p3, ps);
});
return G__11635;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11513.call(this,p1);
case  2 :
return some_fn__11514.call(this,p1,p2);
case  3 :
return some_fn__11515.call(this,p1,p2,p3);
default:
return some_fn__11516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11516.cljs$lang$applyTo;
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
var map__11778 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11754 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11754))
{var s__11756 = temp__3698__auto____11754;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11756)),map.call(null,f,cljs.core.rest.call(null,s__11756)));
} else
{return null;
}
})));
});
var map__11779 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11758 = cljs.core.seq.call(null,c1);
var s2__11759 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11760 = s1__11758;

if(cljs.core.truth_(and__3546__auto____11760))
{return s2__11759;
} else
{return and__3546__auto____11760;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11758),cljs.core.first.call(null,s2__11759)),map.call(null,f,cljs.core.rest.call(null,s1__11758),cljs.core.rest.call(null,s2__11759)));
} else
{return null;
}
})));
});
var map__11780 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11764 = cljs.core.seq.call(null,c1);
var s2__11765 = cljs.core.seq.call(null,c2);
var s3__11766 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11767 = s1__11764;

if(cljs.core.truth_(and__3546__auto____11767))
{var and__3546__auto____11770 = s2__11765;

if(cljs.core.truth_(and__3546__auto____11770))
{return s3__11766;
} else
{return and__3546__auto____11770;
}
} else
{return and__3546__auto____11767;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11764),cljs.core.first.call(null,s2__11765),cljs.core.first.call(null,s3__11766)),map.call(null,f,cljs.core.rest.call(null,s1__11764),cljs.core.rest.call(null,s2__11765),cljs.core.rest.call(null,s3__11766)));
} else
{return null;
}
})));
});
var map__11781 = (function() { 
var G__11795__delegate = function (f,c1,c2,c3,colls){
var step__11776 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11774 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11774)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11774),step.call(null,map.call(null,cljs.core.rest,ss__11774)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11362_SHARP_){
return cljs.core.apply.call(null,f,p1__11362_SHARP_);
}),step__11776.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11795 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11795__delegate.call(this, f, c1, c2, c3, colls);
};
G__11795.cljs$lang$maxFixedArity = 4;
G__11795.cljs$lang$applyTo = (function (arglist__11796){
var f = cljs.core.first(arglist__11796);
var c1 = cljs.core.first(cljs.core.next(arglist__11796));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11796)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11796))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11796))));
return G__11795__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11795;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11778.call(this,f,c1);
case  3 :
return map__11779.call(this,f,c1,c2);
case  4 :
return map__11780.call(this,f,c1,c2,c3);
default:
return map__11781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11781.cljs$lang$applyTo;
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
{var temp__3698__auto____11801 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11801))
{var s__11802 = temp__3698__auto____11801;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11802),take.call(null,(n - 1),cljs.core.rest.call(null,s__11802)));
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
var step__11812 = (function (n,coll){
while(true){
var s__11807 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11808 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11808))
{return s__11807;
} else
{return and__3546__auto____11808;
}
})()))
{{
var G__11816 = (n - 1);
var G__11817 = cljs.core.rest.call(null,s__11807);
n = G__11816;
coll = G__11817;
continue;
}
} else
{return s__11807;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11812.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11822 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11823 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11822.call(this,n);
case  2 :
return drop_last__11823.call(this,n,s);
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
var s__11831 = cljs.core.seq.call(null,coll);
var lead__11833 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11833))
{{
var G__11837 = cljs.core.next.call(null,s__11831);
var G__11840 = cljs.core.next.call(null,lead__11833);
s__11831 = G__11837;
lead__11833 = G__11840;
continue;
}
} else
{return s__11831;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11847 = (function (pred,coll){
while(true){
var s__11843 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11845 = s__11843;

if(cljs.core.truth_(and__3546__auto____11845))
{return pred.call(null,cljs.core.first.call(null,s__11843));
} else
{return and__3546__auto____11845;
}
})()))
{{
var G__11852 = pred;
var G__11855 = cljs.core.rest.call(null,s__11843);
pred = G__11852;
coll = G__11855;
continue;
}
} else
{return s__11843;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11847.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11858 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11858))
{var s__11861 = temp__3698__auto____11858;

return cljs.core.concat.call(null,s__11861,cycle.call(null,s__11861));
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
var repeat__11931 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11934 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11931.call(this,n);
case  2 :
return repeat__11934.call(this,n,x);
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
var repeatedly__11939 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11940 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11939.call(this,n);
case  2 :
return repeatedly__11940.call(this,n,f);
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
var interleave__11955 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11944 = cljs.core.seq.call(null,c1);
var s2__11945 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11947 = s1__11944;

if(cljs.core.truth_(and__3546__auto____11947))
{return s2__11945;
} else
{return and__3546__auto____11947;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11944),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11945),interleave.call(null,cljs.core.rest.call(null,s1__11944),cljs.core.rest.call(null,s2__11945))));
} else
{return null;
}
})));
});
var interleave__11956 = (function() { 
var G__11959__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11948 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11948)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11948),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11948)));
} else
{return null;
}
})));
};
var G__11959 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11959__delegate.call(this, c1, c2, colls);
};
G__11959.cljs$lang$maxFixedArity = 2;
G__11959.cljs$lang$applyTo = (function (arglist__11962){
var c1 = cljs.core.first(arglist__11962);
var c2 = cljs.core.first(cljs.core.next(arglist__11962));
var colls = cljs.core.rest(cljs.core.next(arglist__11962));
return G__11959__delegate.call(this, c1, c2, colls);
});
return G__11959;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11955.call(this,c1,c2);
default:
return interleave__11956.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11956.cljs$lang$applyTo;
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
var temp__3695__auto____12017 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12017))
{var coll__12018 = temp__3695__auto____12017;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12018),cat.call(null,cljs.core.rest.call(null,coll__12018),colls));
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
var mapcat__12033 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12034 = (function() { 
var G__12037__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12037 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12037__delegate.call(this, f, coll, colls);
};
G__12037.cljs$lang$maxFixedArity = 2;
G__12037.cljs$lang$applyTo = (function (arglist__12039){
var f = cljs.core.first(arglist__12039);
var coll = cljs.core.first(cljs.core.next(arglist__12039));
var colls = cljs.core.rest(cljs.core.next(arglist__12039));
return G__12037__delegate.call(this, f, coll, colls);
});
return G__12037;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12033.call(this,f,coll);
default:
return mapcat__12034.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12034.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12045))
{var s__12046 = temp__3698__auto____12045;

var f__12047 = cljs.core.first.call(null,s__12046);
var r__12048 = cljs.core.rest.call(null,s__12046);

if(cljs.core.truth_(pred.call(null,f__12047)))
{return cljs.core.cons.call(null,f__12047,filter.call(null,pred,r__12048));
} else
{return filter.call(null,pred,r__12048);
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
var walk__12053 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12053.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12049_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12049_SHARP_));
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
var partition__12083 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12084 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12063 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12063))
{var s__12064 = temp__3698__auto____12063;

var p__12065 = cljs.core.take.call(null,n,s__12064);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12065))))
{return cljs.core.cons.call(null,p__12065,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12064)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12085 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12073 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12073))
{var s__12074 = temp__3698__auto____12073;

var p__12075 = cljs.core.take.call(null,n,s__12074);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12075))))
{return cljs.core.cons.call(null,p__12075,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12074)));
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
return partition__12083.call(this,n,step);
case  3 :
return partition__12084.call(this,n,step,pad);
case  4 :
return partition__12085.call(this,n,step,pad,coll);
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
var get_in__12100 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12101 = (function (m,ks,not_found){
var sentinel__12094 = cljs.core.lookup_sentinel;
var m__12095 = m;
var ks__12096 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12096))
{var m__12097 = cljs.core.get.call(null,m__12095,cljs.core.first.call(null,ks__12096),sentinel__12094);

if(cljs.core.truth_((sentinel__12094 === m__12097)))
{return not_found;
} else
{{
var G__12106 = sentinel__12094;
var G__12107 = m__12097;
var G__12108 = cljs.core.next.call(null,ks__12096);
sentinel__12094 = G__12106;
m__12095 = G__12107;
ks__12096 = G__12108;
continue;
}
}
} else
{return m__12095;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12100.call(this,m,ks);
case  3 :
return get_in__12101.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12110,v){
var vec__12111__12112 = p__12110;
var k__12113 = cljs.core.nth.call(null,vec__12111__12112,0,null);
var ks__12114 = cljs.core.nthnext.call(null,vec__12111__12112,1);

if(cljs.core.truth_(ks__12114))
{return cljs.core.assoc.call(null,m,k__12113,assoc_in.call(null,cljs.core.get.call(null,m,k__12113),ks__12114,v));
} else
{return cljs.core.assoc.call(null,m,k__12113,v);
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
var update_in__delegate = function (m,p__12155,f,args){
var vec__12156__12157 = p__12155;
var k__12158 = cljs.core.nth.call(null,vec__12156__12157,0,null);
var ks__12159 = cljs.core.nthnext.call(null,vec__12156__12157,1);

if(cljs.core.truth_(ks__12159))
{return cljs.core.assoc.call(null,m,k__12158,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12158),ks__12159,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12158,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12158),args));
}
};
var update_in = function (m,p__12155,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12155, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12167){
var m = cljs.core.first(arglist__12167);
var p__12155 = cljs.core.first(cljs.core.next(arglist__12167));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12167)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12167)));
return update_in__delegate.call(this, m, p__12155, f, args);
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
var this__12177 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12227 = null;
var G__12227__12228 = (function (coll,k){
var this__12179 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12227__12229 = (function (coll,k,not_found){
var this__12181 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12227 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12227__12228.call(this,coll,k);
case  3 :
return G__12227__12229.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12227;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12186 = this;
var new_array__12187 = cljs.core.aclone.call(null,this__12186.array);

(new_array__12187[k] = v);
return (new cljs.core.Vector(this__12186.meta,new_array__12187));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12232 = null;
var G__12232__12233 = (function (coll,k){
var this__12188 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12232__12234 = (function (coll,k,not_found){
var this__12189 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12232 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12232__12233.call(this,coll,k);
case  3 :
return G__12232__12234.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12232;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12194 = this;
var new_array__12195 = cljs.core.aclone.call(null,this__12194.array);

new_array__12195.push(o);
return (new cljs.core.Vector(this__12194.meta,new_array__12195));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12237 = null;
var G__12237__12238 = (function (v,f){
var this__12196 = this;
return cljs.core.ci_reduce.call(null,this__12196.array,f);
});
var G__12237__12239 = (function (v,f,start){
var this__12197 = this;
return cljs.core.ci_reduce.call(null,this__12197.array,f,start);
});
G__12237 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12237__12238.call(this,v,f);
case  3 :
return G__12237__12239.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12237;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12198 = this;
if(cljs.core.truth_((this__12198.array.length > 0)))
{var vector_seq__12199 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12198.array.length)))
{return cljs.core.cons.call(null,(this__12198.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12199.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12203 = this;
return this__12203.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12204 = this;
var count__12205 = this__12204.array.length;

if(cljs.core.truth_((count__12205 > 0)))
{return (this__12204.array[(count__12205 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12209 = this;
if(cljs.core.truth_((this__12209.array.length > 0)))
{var new_array__12210 = cljs.core.aclone.call(null,this__12209.array);

new_array__12210.pop();
return (new cljs.core.Vector(this__12209.meta,new_array__12210));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12211 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12212 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12213 = this;
return (new cljs.core.Vector(meta,this__12213.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12214 = this;
return this__12214.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12244 = null;
var G__12244__12245 = (function (coll,n){
var this__12215 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12216 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12216))
{return (n < this__12215.array.length);
} else
{return and__3546__auto____12216;
}
})()))
{return (this__12215.array[n]);
} else
{return null;
}
});
var G__12244__12246 = (function (coll,n,not_found){
var this__12219 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12221 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12221))
{return (n < this__12219.array.length);
} else
{return and__3546__auto____12221;
}
})()))
{return (this__12219.array[n]);
} else
{return not_found;
}
});
G__12244 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12244__12245.call(this,coll,n);
case  3 :
return G__12244__12246.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12244;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12222 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12222.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12257){
var args = cljs.core.seq( arglist__12257 );;
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
var this__12327 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12423 = null;
var G__12423__12424 = (function (coll,k){
var this__12329 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12423__12425 = (function (coll,k,not_found){
var this__12330 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12423 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12423__12424.call(this,coll,k);
case  3 :
return G__12423__12425.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12423;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12332 = this;
var v_pos__12334 = (this__12332.start + key);

return (new cljs.core.Subvec(this__12332.meta,cljs.core._assoc.call(null,this__12332.v,v_pos__12334,val),this__12332.start,((this__12332.end > (v_pos__12334 + 1)) ? this__12332.end : (v_pos__12334 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12435 = null;
var G__12435__12436 = (function (coll,k){
var this__12336 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12435__12437 = (function (coll,k,not_found){
var this__12338 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12435 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12435__12436.call(this,coll,k);
case  3 :
return G__12435__12437.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12435;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12339 = this;
return (new cljs.core.Subvec(this__12339.meta,cljs.core._assoc_n.call(null,this__12339.v,this__12339.end,o),this__12339.start,(this__12339.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12446 = null;
var G__12446__12447 = (function (coll,f){
var this__12340 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12446__12448 = (function (coll,f,start){
var this__12341 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12446 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12446__12447.call(this,coll,f);
case  3 :
return G__12446__12448.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12446;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12342 = this;
var subvec_seq__12397 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12342.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12342.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12397.call(null,this__12342.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12399 = this;
return (this__12399.end - this__12399.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12400 = this;
return cljs.core._nth.call(null,this__12400.v,(this__12400.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12405 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12405.start,this__12405.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12405.meta,this__12405.v,this__12405.start,(this__12405.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12406 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12407 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12408 = this;
return (new cljs.core.Subvec(meta,this__12408.v,this__12408.start,this__12408.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12413 = this;
return this__12413.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12464 = null;
var G__12464__12465 = (function (coll,n){
var this__12414 = this;
return cljs.core._nth.call(null,this__12414.v,(this__12414.start + n));
});
var G__12464__12466 = (function (coll,n,not_found){
var this__12415 = this;
return cljs.core._nth.call(null,this__12415.v,(this__12415.start + n),not_found);
});
G__12464 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12464__12465.call(this,coll,n);
case  3 :
return G__12464__12466.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12464;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12416 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12416.meta);
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
var this__12498 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12499 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12500 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12501 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12501.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12503 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12507 = this;
return cljs.core._first.call(null,this__12507.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12510 = this;
var temp__3695__auto____12535 = cljs.core.next.call(null,this__12510.front);

if(cljs.core.truth_(temp__3695__auto____12535))
{var f1__12536 = temp__3695__auto____12535;

return (new cljs.core.PersistentQueueSeq(this__12510.meta,f1__12536,this__12510.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12510.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12510.meta,this__12510.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12541 = this;
return this__12541.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12544 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12544.front,this__12544.rear));
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
var this__12576 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12579 = this;
if(cljs.core.truth_(this__12579.front))
{return (new cljs.core.PersistentQueue(this__12579.meta,(this__12579.count + 1),this__12579.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12583 = this__12579.rear;

if(cljs.core.truth_(or__3548__auto____12583))
{return or__3548__auto____12583;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12579.meta,(this__12579.count + 1),cljs.core.conj.call(null,this__12579.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12587 = this;
var rear__12589 = cljs.core.seq.call(null,this__12587.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12592 = this__12587.front;

if(cljs.core.truth_(or__3548__auto____12592))
{return or__3548__auto____12592;
} else
{return rear__12589;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12587.front,cljs.core.seq.call(null,rear__12589)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12598 = this;
return this__12598.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12599 = this;
return cljs.core._first.call(null,this__12599.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12601 = this;
if(cljs.core.truth_(this__12601.front))
{var temp__3695__auto____12604 = cljs.core.next.call(null,this__12601.front);

if(cljs.core.truth_(temp__3695__auto____12604))
{var f1__12608 = temp__3695__auto____12604;

return (new cljs.core.PersistentQueue(this__12601.meta,(this__12601.count - 1),f1__12608,this__12601.rear));
} else
{return (new cljs.core.PersistentQueue(this__12601.meta,(this__12601.count - 1),cljs.core.seq.call(null,this__12601.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12611 = this;
return cljs.core.first.call(null,this__12611.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12614 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12617 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12619 = this;
return (new cljs.core.PersistentQueue(meta,this__12619.count,this__12619.front,this__12619.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12621 = this;
return this__12621.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12623 = this;
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
var this__12650 = this;
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
var len__12720 = array.length;

var i__12722 = 0;

while(true){
if(cljs.core.truth_((i__12722 < len__12720)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12722]))))
{return i__12722;
} else
{{
var G__12727 = (i__12722 + incr);
i__12722 = G__12727;
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
var obj_map_contains_key_QMARK___12734 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12736 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12731 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12731))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12731;
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
return obj_map_contains_key_QMARK___12734.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12736.call(this,k,strobj,true_val,false_val);
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
var this__12769 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12811 = null;
var G__12811__12812 = (function (coll,k){
var this__12770 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12811__12813 = (function (coll,k,not_found){
var this__12771 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12771.strobj,(this__12771.strobj[k]),not_found);
});
G__12811 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12811__12812.call(this,coll,k);
case  3 :
return G__12811__12813.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12811;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12774 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12777 = goog.object.clone.call(null,this__12774.strobj);
var overwrite_QMARK___12778 = new_strobj__12777.hasOwnProperty(k);

(new_strobj__12777[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12778))
{return (new cljs.core.ObjMap(this__12774.meta,this__12774.keys,new_strobj__12777));
} else
{var new_keys__12779 = cljs.core.aclone.call(null,this__12774.keys);

new_keys__12779.push(k);
return (new cljs.core.ObjMap(this__12774.meta,new_keys__12779,new_strobj__12777));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12774.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12780 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12780.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12831 = null;
var G__12831__12832 = (function (coll,k){
var this__12781 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12831__12833 = (function (coll,k,not_found){
var this__12782 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12831 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12831__12832.call(this,coll,k);
case  3 :
return G__12831__12833.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12831;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12783 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12785 = this;
if(cljs.core.truth_((this__12785.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12749_SHARP_){
return cljs.core.vector.call(null,p1__12749_SHARP_,(this__12785.strobj[p1__12749_SHARP_]));
}),this__12785.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12792 = this;
return this__12792.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12793 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12795 = this;
return (new cljs.core.ObjMap(meta,this__12795.keys,this__12795.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12798 = this;
return this__12798.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12801 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12801.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12803 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12804 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12804))
{return this__12803.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12804;
}
})()))
{var new_keys__12805 = cljs.core.aclone.call(null,this__12803.keys);
var new_strobj__12806 = goog.object.clone.call(null,this__12803.strobj);

new_keys__12805.splice(cljs.core.scan_array.call(null,1,k,new_keys__12805),1);
cljs.core.js_delete.call(null,new_strobj__12806,k);
return (new cljs.core.ObjMap(this__12803.meta,new_keys__12805,new_strobj__12806));
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
var this__12874 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12943 = null;
var G__12943__12944 = (function (coll,k){
var this__12876 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12943__12946 = (function (coll,k,not_found){
var this__12877 = this;
var bucket__12879 = (this__12877.hashobj[cljs.core.hash.call(null,k)]);
var i__12880 = (cljs.core.truth_(bucket__12879)?cljs.core.scan_array.call(null,2,k,bucket__12879):null);

if(cljs.core.truth_(i__12880))
{return (bucket__12879[(i__12880 + 1)]);
} else
{return not_found;
}
});
G__12943 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12943__12944.call(this,coll,k);
case  3 :
return G__12943__12946.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12943;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12882 = this;
var h__12884 = cljs.core.hash.call(null,k);
var bucket__12885 = (this__12882.hashobj[h__12884]);

if(cljs.core.truth_(bucket__12885))
{var new_bucket__12887 = cljs.core.aclone.call(null,bucket__12885);
var new_hashobj__12888 = goog.object.clone.call(null,this__12882.hashobj);

(new_hashobj__12888[h__12884] = new_bucket__12887);
var temp__3695__auto____12890 = cljs.core.scan_array.call(null,2,k,new_bucket__12887);

if(cljs.core.truth_(temp__3695__auto____12890))
{var i__12891 = temp__3695__auto____12890;

(new_bucket__12887[(i__12891 + 1)] = v);
return (new cljs.core.HashMap(this__12882.meta,this__12882.count,new_hashobj__12888));
} else
{new_bucket__12887.push(k,v);
return (new cljs.core.HashMap(this__12882.meta,(this__12882.count + 1),new_hashobj__12888));
}
} else
{var new_hashobj__12896 = goog.object.clone.call(null,this__12882.hashobj);

(new_hashobj__12896[h__12884] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12882.meta,(this__12882.count + 1),new_hashobj__12896));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12900 = this;
var bucket__12901 = (this__12900.hashobj[cljs.core.hash.call(null,k)]);
var i__12903 = (cljs.core.truth_(bucket__12901)?cljs.core.scan_array.call(null,2,k,bucket__12901):null);

if(cljs.core.truth_(i__12903))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12954 = null;
var G__12954__12955 = (function (coll,k){
var this__12905 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12954__12956 = (function (coll,k,not_found){
var this__12907 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12954 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12954__12955.call(this,coll,k);
case  3 :
return G__12954__12956.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12954;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12912 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12914 = this;
if(cljs.core.truth_((this__12914.count > 0)))
{var hashes__12917 = cljs.core.js_keys.call(null,this__12914.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12865_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12914.hashobj[p1__12865_SHARP_])));
}),hashes__12917);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12918 = this;
return this__12918.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12919 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12920 = this;
return (new cljs.core.HashMap(meta,this__12920.count,this__12920.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12922 = this;
return this__12922.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12924 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12924.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12926 = this;
var h__12928 = cljs.core.hash.call(null,k);
var bucket__12929 = (this__12926.hashobj[h__12928]);
var i__12931 = (cljs.core.truth_(bucket__12929)?cljs.core.scan_array.call(null,2,k,bucket__12929):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12931)))
{return coll;
} else
{var new_hashobj__12937 = goog.object.clone.call(null,this__12926.hashobj);

if(cljs.core.truth_((3 > bucket__12929.length)))
{cljs.core.js_delete.call(null,new_hashobj__12937,h__12928);
} else
{var new_bucket__12939 = cljs.core.aclone.call(null,bucket__12929);

new_bucket__12939.splice(i__12931,2);
(new_hashobj__12937[h__12928] = new_bucket__12939);
}
return (new cljs.core.HashMap(this__12926.meta,(this__12926.count - 1),new_hashobj__12937));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12993 = ks.length;

var i__12994 = 0;
var out__12995 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12994 < len__12993)))
{{
var G__12998 = (i__12994 + 1);
var G__13000 = cljs.core.assoc.call(null,out__12995,(ks[i__12994]),(vs[i__12994]));
i__12994 = G__12998;
out__12995 = G__13000;
continue;
}
} else
{return out__12995;
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
var in$__13003 = cljs.core.seq.call(null,keyvals);
var out__13004 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13003))
{{
var G__13009 = cljs.core.nnext.call(null,in$__13003);
var G__13010 = cljs.core.assoc.call(null,out__13004,cljs.core.first.call(null,in$__13003),cljs.core.second.call(null,in$__13003));
in$__13003 = G__13009;
out__13004 = G__13010;
continue;
}
} else
{return out__13004;
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
hash_map.cljs$lang$applyTo = (function (arglist__13011){
var keyvals = cljs.core.seq( arglist__13011 );;
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
{return cljs.core.reduce.call(null,(function (p1__13016_SHARP_,p2__13017_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13021 = p1__13016_SHARP_;

if(cljs.core.truth_(or__3548__auto____13021))
{return or__3548__auto____13021;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13017_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13028){
var maps = cljs.core.seq( arglist__13028 );;
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
{var merge_entry__13035 = (function (m,e){
var k__13032 = cljs.core.first.call(null,e);
var v__13033 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13032)))
{return cljs.core.assoc.call(null,m,k__13032,f.call(null,cljs.core.get.call(null,m,k__13032),v__13033));
} else
{return cljs.core.assoc.call(null,m,k__13032,v__13033);
}
});
var merge2__13040 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13035,(function (){var or__3548__auto____13038 = m1;

if(cljs.core.truth_(or__3548__auto____13038))
{return or__3548__auto____13038;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13040,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13046){
var f = cljs.core.first(arglist__13046);
var maps = cljs.core.rest(arglist__13046);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13051 = cljs.core.ObjMap.fromObject([],{});
var keys__13052 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13052))
{var key__13053 = cljs.core.first.call(null,keys__13052);
var entry__13055 = cljs.core.get.call(null,map,key__13053,"﷐'user/not-found");

{
var G__13067 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13055,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13051,key__13053,entry__13055):ret__13051);
var G__13068 = cljs.core.next.call(null,keys__13052);
ret__13051 = G__13067;
keys__13052 = G__13068;
continue;
}
} else
{return ret__13051;
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
var this__13086 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13121 = null;
var G__13121__13122 = (function (coll,v){
var this__13090 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13121__13123 = (function (coll,v,not_found){
var this__13093 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13093.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13121 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13121__13122.call(this,coll,v);
case  3 :
return G__13121__13123.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13121;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13125 = null;
var G__13125__13126 = (function (coll,k){
var this__13095 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13125__13127 = (function (coll,k,not_found){
var this__13097 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13125 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13125__13126.call(this,coll,k);
case  3 :
return G__13125__13127.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13125;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13099 = this;
return (new cljs.core.Set(this__13099.meta,cljs.core.assoc.call(null,this__13099.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13103 = this;
return cljs.core.keys.call(null,this__13103.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13106 = this;
return (new cljs.core.Set(this__13106.meta,cljs.core.dissoc.call(null,this__13106.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13108 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13111 = this;
var and__3546__auto____13115 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13115))
{var and__3546__auto____13117 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13117))
{return cljs.core.every_QMARK_.call(null,(function (p1__13048_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13048_SHARP_);
}),other);
} else
{return and__3546__auto____13117;
}
} else
{return and__3546__auto____13115;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13118 = this;
return (new cljs.core.Set(meta,this__13118.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13119 = this;
return this__13119.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13120 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13120.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13135 = cljs.core.seq.call(null,coll);
var out__13136 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13135))))
{{
var G__13144 = cljs.core.rest.call(null,in$__13135);
var G__13146 = cljs.core.conj.call(null,out__13136,cljs.core.first.call(null,in$__13135));
in$__13135 = G__13144;
out__13136 = G__13146;
continue;
}
} else
{return out__13136;
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
{var n__13161 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13164 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13164))
{var e__13166 = temp__3695__auto____13164;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13166));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13161,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13133_SHARP_){
var temp__3695__auto____13167 = cljs.core.find.call(null,smap,p1__13133_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13167))
{var e__13168 = temp__3695__auto____13167;

return cljs.core.second.call(null,e__13168);
} else
{return p1__13133_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13234 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13223,seen){
while(true){
var vec__13224__13225 = p__13223;
var f__13227 = cljs.core.nth.call(null,vec__13224__13225,0,null);
var xs__13228 = vec__13224__13225;

var temp__3698__auto____13229 = cljs.core.seq.call(null,xs__13228);

if(cljs.core.truth_(temp__3698__auto____13229))
{var s__13231 = temp__3698__auto____13229;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13227)))
{{
var G__13238 = cljs.core.rest.call(null,s__13231);
var G__13239 = seen;
p__13223 = G__13238;
seen = G__13239;
continue;
}
} else
{return cljs.core.cons.call(null,f__13227,step.call(null,cljs.core.rest.call(null,s__13231),cljs.core.conj.call(null,seen,f__13227)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13234.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13246 = cljs.core.Vector.fromArray([]);
var s__13247 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13247)))
{{
var G__13248 = cljs.core.conj.call(null,ret__13246,cljs.core.first.call(null,s__13247));
var G__13249 = cljs.core.next.call(null,s__13247);
ret__13246 = G__13248;
s__13247 = G__13249;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13246);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13257 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13257))
{return or__3548__auto____13257;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13260 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13260 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13260 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13266 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13266))
{return or__3548__auto____13266;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13267 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13267 > -1)))
{return cljs.core.subs.call(null,x,2,i__13267);
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
var map__13274 = cljs.core.ObjMap.fromObject([],{});
var ks__13275 = cljs.core.seq.call(null,keys);
var vs__13276 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13277 = ks__13275;

if(cljs.core.truth_(and__3546__auto____13277))
{return vs__13276;
} else
{return and__3546__auto____13277;
}
})()))
{{
var G__13290 = cljs.core.assoc.call(null,map__13274,cljs.core.first.call(null,ks__13275),cljs.core.first.call(null,vs__13276));
var G__13291 = cljs.core.next.call(null,ks__13275);
var G__13292 = cljs.core.next.call(null,vs__13276);
map__13274 = G__13290;
ks__13275 = G__13291;
vs__13276 = G__13292;
continue;
}
} else
{return map__13274;
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
var max_key__13300 = (function (k,x){
return x;
});
var max_key__13301 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13302 = (function() { 
var G__13306__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13269_SHARP_,p2__13270_SHARP_){
return max_key.call(null,k,p1__13269_SHARP_,p2__13270_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13306 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13306__delegate.call(this, k, x, y, more);
};
G__13306.cljs$lang$maxFixedArity = 3;
G__13306.cljs$lang$applyTo = (function (arglist__13307){
var k = cljs.core.first(arglist__13307);
var x = cljs.core.first(cljs.core.next(arglist__13307));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13307)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13307)));
return G__13306__delegate.call(this, k, x, y, more);
});
return G__13306;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13300.call(this,k,x);
case  3 :
return max_key__13301.call(this,k,x,y);
default:
return max_key__13302.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13302.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13310 = (function (k,x){
return x;
});
var min_key__13311 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13312 = (function() { 
var G__13314__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13293_SHARP_,p2__13294_SHARP_){
return min_key.call(null,k,p1__13293_SHARP_,p2__13294_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13314 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13314__delegate.call(this, k, x, y, more);
};
G__13314.cljs$lang$maxFixedArity = 3;
G__13314.cljs$lang$applyTo = (function (arglist__13315){
var k = cljs.core.first(arglist__13315);
var x = cljs.core.first(cljs.core.next(arglist__13315));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13315)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13315)));
return G__13314__delegate.call(this, k, x, y, more);
});
return G__13314;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13310.call(this,k,x);
case  3 :
return min_key__13311.call(this,k,x,y);
default:
return min_key__13312.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13312.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13322 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13323 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13317 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13317))
{var s__13319 = temp__3698__auto____13317;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13319),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13319)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13322.call(this,n,step);
case  3 :
return partition_all__13323.call(this,n,step,coll);
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
var temp__3698__auto____13336 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13336))
{var s__13337 = temp__3698__auto____13336;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13337))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13337),take_while.call(null,pred,cljs.core.rest.call(null,s__13337)));
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
var this__13346 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13350 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13405 = null;
var G__13405__13406 = (function (rng,f){
var this__13352 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13405__13407 = (function (rng,f,s){
var this__13354 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13405 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13405__13406.call(this,rng,f);
case  3 :
return G__13405__13407.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13405;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13356 = this;
var comp__13358 = (cljs.core.truth_((this__13356.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13358.call(null,this__13356.start,this__13356.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13360 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13360.end - this__13360.start) / this__13360.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13362 = this;
return this__13362.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13378 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13378.meta,(this__13378.start + this__13378.step),this__13378.end,this__13378.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13383 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13386 = this;
return (new cljs.core.Range(meta,this__13386.start,this__13386.end,this__13386.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13388 = this;
return this__13388.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13426 = null;
var G__13426__13427 = (function (rng,n){
var this__13390 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13390.start + (n * this__13390.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13392 = (this__13390.start > this__13390.end);

if(cljs.core.truth_(and__3546__auto____13392))
{return cljs.core._EQ_.call(null,this__13390.step,0);
} else
{return and__3546__auto____13392;
}
})()))
{return this__13390.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13426__13428 = (function (rng,n,not_found){
var this__13395 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13395.start + (n * this__13395.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13396 = (this__13395.start > this__13395.end);

if(cljs.core.truth_(and__3546__auto____13396))
{return cljs.core._EQ_.call(null,this__13395.step,0);
} else
{return and__3546__auto____13396;
}
})()))
{return this__13395.start;
} else
{return not_found;
}
}
});
G__13426 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13426__13427.call(this,rng,n);
case  3 :
return G__13426__13428.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13426;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13397 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13397.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13442 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13443 = (function (end){
return range.call(null,0,end,1);
});
var range__13444 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13445 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13442.call(this);
case  1 :
return range__13443.call(this,start);
case  2 :
return range__13444.call(this,start,end);
case  3 :
return range__13445.call(this,start,end,step);
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
var temp__3698__auto____13453 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13453))
{var s__13454 = temp__3698__auto____13453;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13454),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13454)));
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
var temp__3698__auto____13475 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13475))
{var s__13476 = temp__3698__auto____13475;

var fst__13477 = cljs.core.first.call(null,s__13476);
var fv__13478 = f.call(null,fst__13477);
var run__13480 = cljs.core.cons.call(null,fst__13477,cljs.core.take_while.call(null,(function (p1__13464_SHARP_){
return cljs.core._EQ_.call(null,fv__13478,f.call(null,p1__13464_SHARP_));
}),cljs.core.next.call(null,s__13476)));

return cljs.core.cons.call(null,run__13480,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13480),s__13476))));
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
var reductions__13552 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13534))
{var s__13535 = temp__3695__auto____13534;

return reductions.call(null,f,cljs.core.first.call(null,s__13535),cljs.core.rest.call(null,s__13535));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13554 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13541 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13541))
{var s__13542 = temp__3698__auto____13541;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13542)),cljs.core.rest.call(null,s__13542));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13552.call(this,f,init);
case  3 :
return reductions__13554.call(this,f,init,coll);
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
var juxt__13613 = (function (f){
return (function() {
var G__13622 = null;
var G__13622__13623 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13622__13624 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13622__13625 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13622__13626 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13622__13627 = (function() { 
var G__13636__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13636 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13636__delegate.call(this, x, y, z, args);
};
G__13636.cljs$lang$maxFixedArity = 3;
G__13636.cljs$lang$applyTo = (function (arglist__13638){
var x = cljs.core.first(arglist__13638);
var y = cljs.core.first(cljs.core.next(arglist__13638));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13638)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13638)));
return G__13636__delegate.call(this, x, y, z, args);
});
return G__13636;
})()
;
G__13622 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13622__13623.call(this);
case  1 :
return G__13622__13624.call(this,x);
case  2 :
return G__13622__13625.call(this,x,y);
case  3 :
return G__13622__13626.call(this,x,y,z);
default:
return G__13622__13627.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13622.cljs$lang$maxFixedArity = 3;
G__13622.cljs$lang$applyTo = G__13622__13627.cljs$lang$applyTo;
return G__13622;
})()
});
var juxt__13614 = (function (f,g){
return (function() {
var G__13642 = null;
var G__13642__13643 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13642__13644 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13642__13645 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13642__13646 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13642__13647 = (function() { 
var G__13655__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13655 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13655__delegate.call(this, x, y, z, args);
};
G__13655.cljs$lang$maxFixedArity = 3;
G__13655.cljs$lang$applyTo = (function (arglist__13657){
var x = cljs.core.first(arglist__13657);
var y = cljs.core.first(cljs.core.next(arglist__13657));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13657)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13657)));
return G__13655__delegate.call(this, x, y, z, args);
});
return G__13655;
})()
;
G__13642 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13642__13643.call(this);
case  1 :
return G__13642__13644.call(this,x);
case  2 :
return G__13642__13645.call(this,x,y);
case  3 :
return G__13642__13646.call(this,x,y,z);
default:
return G__13642__13647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13642.cljs$lang$maxFixedArity = 3;
G__13642.cljs$lang$applyTo = G__13642__13647.cljs$lang$applyTo;
return G__13642;
})()
});
var juxt__13615 = (function (f,g,h){
return (function() {
var G__13662 = null;
var G__13662__13663 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13662__13664 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13662__13665 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13662__13666 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13662__13667 = (function() { 
var G__13670__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13670 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13670__delegate.call(this, x, y, z, args);
};
G__13670.cljs$lang$maxFixedArity = 3;
G__13670.cljs$lang$applyTo = (function (arglist__13671){
var x = cljs.core.first(arglist__13671);
var y = cljs.core.first(cljs.core.next(arglist__13671));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13671)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13671)));
return G__13670__delegate.call(this, x, y, z, args);
});
return G__13670;
})()
;
G__13662 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13662__13663.call(this);
case  1 :
return G__13662__13664.call(this,x);
case  2 :
return G__13662__13665.call(this,x,y);
case  3 :
return G__13662__13666.call(this,x,y,z);
default:
return G__13662__13667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13662.cljs$lang$maxFixedArity = 3;
G__13662.cljs$lang$applyTo = G__13662__13667.cljs$lang$applyTo;
return G__13662;
})()
});
var juxt__13616 = (function() { 
var G__13673__delegate = function (f,g,h,fs){
var fs__13570 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13674 = null;
var G__13674__13675 = (function (){
return cljs.core.reduce.call(null,(function (p1__13515_SHARP_,p2__13516_SHARP_){
return cljs.core.conj.call(null,p1__13515_SHARP_,p2__13516_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13570);
});
var G__13674__13676 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13518_SHARP_,p2__13519_SHARP_){
return cljs.core.conj.call(null,p1__13518_SHARP_,p2__13519_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13570);
});
var G__13674__13677 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13520_SHARP_,p2__13521_SHARP_){
return cljs.core.conj.call(null,p1__13520_SHARP_,p2__13521_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13570);
});
var G__13674__13678 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13523_SHARP_,p2__13524_SHARP_){
return cljs.core.conj.call(null,p1__13523_SHARP_,p2__13524_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13570);
});
var G__13674__13679 = (function() { 
var G__13685__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13525_SHARP_,p2__13526_SHARP_){
return cljs.core.conj.call(null,p1__13525_SHARP_,cljs.core.apply.call(null,p2__13526_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13570);
};
var G__13685 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13685__delegate.call(this, x, y, z, args);
};
G__13685.cljs$lang$maxFixedArity = 3;
G__13685.cljs$lang$applyTo = (function (arglist__13688){
var x = cljs.core.first(arglist__13688);
var y = cljs.core.first(cljs.core.next(arglist__13688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13688)));
return G__13685__delegate.call(this, x, y, z, args);
});
return G__13685;
})()
;
G__13674 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13674__13675.call(this);
case  1 :
return G__13674__13676.call(this,x);
case  2 :
return G__13674__13677.call(this,x,y);
case  3 :
return G__13674__13678.call(this,x,y,z);
default:
return G__13674__13679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13674.cljs$lang$maxFixedArity = 3;
G__13674.cljs$lang$applyTo = G__13674__13679.cljs$lang$applyTo;
return G__13674;
})()
};
var G__13673 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13673__delegate.call(this, f, g, h, fs);
};
G__13673.cljs$lang$maxFixedArity = 3;
G__13673.cljs$lang$applyTo = (function (arglist__13689){
var f = cljs.core.first(arglist__13689);
var g = cljs.core.first(cljs.core.next(arglist__13689));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13689)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13689)));
return G__13673__delegate.call(this, f, g, h, fs);
});
return G__13673;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13613.call(this,f);
case  2 :
return juxt__13614.call(this,f,g);
case  3 :
return juxt__13615.call(this,f,g,h);
default:
return juxt__13616.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13616.cljs$lang$applyTo;
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
var dorun__13697 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13700 = cljs.core.next.call(null,coll);
coll = G__13700;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13698 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13692 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13692))
{return (n > 0);
} else
{return and__3546__auto____13692;
}
})()))
{{
var G__13702 = (n - 1);
var G__13703 = cljs.core.next.call(null,coll);
n = G__13702;
coll = G__13703;
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
return dorun__13697.call(this,n);
case  2 :
return dorun__13698.call(this,n,coll);
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
var doall__13716 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13717 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13716.call(this,n);
case  2 :
return doall__13717.call(this,n,coll);
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
var matches__13722 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13722),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13722),1)))
{return cljs.core.first.call(null,matches__13722);
} else
{return cljs.core.vec.call(null,matches__13722);
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
var matches__13748 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__13748)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13748),1)))
{return cljs.core.first.call(null,matches__13748);
} else
{return cljs.core.vec.call(null,matches__13748);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__13762 = cljs.core.re_find.call(null,re,s);
var match_idx__13764 = s.search(re);
var match_str__13767 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__13762))?cljs.core.first.call(null,match_data__13762):match_data__13762);
var post_match__13769 = cljs.core.subs.call(null,s,(match_idx__13764 + cljs.core.count.call(null,match_str__13767)));

if(cljs.core.truth_(match_data__13762))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__13762,re_seq.call(null,re,post_match__13769));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__13785_SHARP_){
return print_one.call(null,p1__13785_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____13802 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____13802))
{var and__3546__auto____13811 = (function (){var x__445__auto____13808 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13809 = x__445__auto____13808;

if(cljs.core.truth_(and__3546__auto____13809))
{var and__3546__auto____13810 = x__445__auto____13808.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____13810))
{return cljs.core.not.call(null,x__445__auto____13808.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____13810;
}
} else
{return and__3546__auto____13809;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____13808);
}
})();

if(cljs.core.truth_(and__3546__auto____13811))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____13811;
}
} else
{return and__3546__auto____13802;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____13815 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____13818 = x__445__auto____13815;

if(cljs.core.truth_(and__3546__auto____13818))
{var and__3546__auto____13820 = x__445__auto____13815.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____13820))
{return cljs.core.not.call(null,x__445__auto____13815.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____13820;
}
} else
{return and__3546__auto____13818;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____13815);
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
var first_obj__13845 = cljs.core.first.call(null,objs);
var sb__13849 = (new goog.string.StringBuffer());

var G__13850__13882 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13850__13882))
{var obj__13883 = cljs.core.first.call(null,G__13850__13882);
var G__13850__13884 = G__13850__13882;

while(true){
if(cljs.core.truth_((obj__13883 === first_obj__13845)))
{} else
{sb__13849.append(" ");
}
var G__13885__13886 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13883,opts));

if(cljs.core.truth_(G__13885__13886))
{var string__13887 = cljs.core.first.call(null,G__13885__13886);
var G__13885__13888 = G__13885__13886;

while(true){
sb__13849.append(string__13887);
var temp__3698__auto____13890 = cljs.core.next.call(null,G__13885__13888);

if(cljs.core.truth_(temp__3698__auto____13890))
{var G__13885__13893 = temp__3698__auto____13890;

{
var G__13919 = cljs.core.first.call(null,G__13885__13893);
var G__13920 = G__13885__13893;
string__13887 = G__13919;
G__13885__13888 = G__13920;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13903 = cljs.core.next.call(null,G__13850__13884);

if(cljs.core.truth_(temp__3698__auto____13903))
{var G__13850__13906 = temp__3698__auto____13903;

{
var G__13921 = cljs.core.first.call(null,G__13850__13906);
var G__13922 = G__13850__13906;
obj__13883 = G__13921;
G__13850__13884 = G__13922;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__13849);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__13927 = cljs.core.first.call(null,objs);

var G__13929__13930 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__13929__13930))
{var obj__13931 = cljs.core.first.call(null,G__13929__13930);
var G__13929__13932 = G__13929__13930;

while(true){
if(cljs.core.truth_((obj__13931 === first_obj__13927)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__13935__13936 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__13931,opts));

if(cljs.core.truth_(G__13935__13936))
{var string__13937 = cljs.core.first.call(null,G__13935__13936);
var G__13935__13938 = G__13935__13936;

while(true){
cljs.core.string_print.call(null,string__13937);
var temp__3698__auto____13939 = cljs.core.next.call(null,G__13935__13938);

if(cljs.core.truth_(temp__3698__auto____13939))
{var G__13935__13941 = temp__3698__auto____13939;

{
var G__13950 = cljs.core.first.call(null,G__13935__13941);
var G__13951 = G__13935__13941;
string__13937 = G__13950;
G__13935__13938 = G__13951;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____13948 = cljs.core.next.call(null,G__13929__13932);

if(cljs.core.truth_(temp__3698__auto____13948))
{var G__13929__13949 = temp__3698__auto____13948;

{
var G__13953 = cljs.core.first.call(null,G__13929__13949);
var G__13954 = G__13929__13949;
obj__13931 = G__13953;
G__13929__13932 = G__13954;
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
pr_str.cljs$lang$applyTo = (function (arglist__13985){
var objs = cljs.core.seq( arglist__13985 );;
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
pr.cljs$lang$applyTo = (function (arglist__13989){
var objs = cljs.core.seq( arglist__13989 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__13994){
var objs = cljs.core.seq( arglist__13994 );;
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
println.cljs$lang$applyTo = (function (arglist__14003){
var objs = cljs.core.seq( arglist__14003 );;
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
prn.cljs$lang$applyTo = (function (arglist__14021){
var objs = cljs.core.seq( arglist__14021 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14034 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14034,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14059 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14059))
{var nspc__14061 = temp__3698__auto____14059;

return cljs.core.str.call(null,nspc__14061,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14063 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14063))
{var nspc__14064 = temp__3698__auto____14063;

return cljs.core.str.call(null,nspc__14064,"/");
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
var pr_pair__14080 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14080,"{",", ","}",opts,coll);
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
var this__14132 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14141 = this;
var G__14146__14147 = cljs.core.seq.call(null,this__14141.watches);

if(cljs.core.truth_(G__14146__14147))
{var G__14149__14152 = cljs.core.first.call(null,G__14146__14147);
var vec__14150__14153 = G__14149__14152;
var key__14154 = cljs.core.nth.call(null,vec__14150__14153,0,null);
var f__14155 = cljs.core.nth.call(null,vec__14150__14153,1,null);
var G__14146__14156 = G__14146__14147;

var G__14149__14158 = G__14149__14152;
var G__14146__14159 = G__14146__14156;

while(true){
var vec__14160__14161 = G__14149__14158;
var key__14162 = cljs.core.nth.call(null,vec__14160__14161,0,null);
var f__14163 = cljs.core.nth.call(null,vec__14160__14161,1,null);
var G__14146__14164 = G__14146__14159;

f__14163.call(null,key__14162,this$,oldval,newval);
var temp__3698__auto____14166 = cljs.core.next.call(null,G__14146__14164);

if(cljs.core.truth_(temp__3698__auto____14166))
{var G__14146__14173 = temp__3698__auto____14166;

{
var G__14214 = cljs.core.first.call(null,G__14146__14173);
var G__14215 = G__14146__14173;
G__14149__14158 = G__14214;
G__14146__14159 = G__14215;
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
var this__14174 = this;
return this$.watches = cljs.core.assoc.call(null,this__14174.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14187 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14187.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14189 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14189.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14192 = this;
return this__14192.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14194 = this;
return this__14194.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14202 = this;
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
var atom__14256 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14257 = (function() { 
var G__14259__delegate = function (x,p__14226){
var map__14230__14239 = p__14226;
var map__14230__14241 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14230__14239))?cljs.core.apply.call(null,cljs.core.hash_map,map__14230__14239):map__14230__14239);
var validator__14243 = cljs.core.get.call(null,map__14230__14241,"﷐'validator");
var meta__14249 = cljs.core.get.call(null,map__14230__14241,"﷐'meta");

return (new cljs.core.Atom(x,meta__14249,validator__14243,null));
};
var G__14259 = function (x,var_args){
var p__14226 = null;
if (goog.isDef(var_args)) {
  p__14226 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14259__delegate.call(this, x, p__14226);
};
G__14259.cljs$lang$maxFixedArity = 1;
G__14259.cljs$lang$applyTo = (function (arglist__14261){
var x = cljs.core.first(arglist__14261);
var p__14226 = cljs.core.rest(arglist__14261);
return G__14259__delegate.call(this, x, p__14226);
});
return G__14259;
})()
;
atom = function(x,var_args){
var p__14226 = var_args;
switch(arguments.length){
case  1 :
return atom__14256.call(this,x);
default:
return atom__14257.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14257.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14265 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14265))
{var validate__14266 = temp__3698__auto____14265;

if(cljs.core.truth_(validate__14266.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14269 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14269,new_value);
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
var swap_BANG___14290 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14291 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14292 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14293 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14294 = (function() { 
var G__14297__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14297 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14297__delegate.call(this, a, f, x, y, z, more);
};
G__14297.cljs$lang$maxFixedArity = 5;
G__14297.cljs$lang$applyTo = (function (arglist__14299){
var a = cljs.core.first(arglist__14299);
var f = cljs.core.first(cljs.core.next(arglist__14299));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14299)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14299))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14299)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14299)))));
return G__14297__delegate.call(this, a, f, x, y, z, more);
});
return G__14297;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14290.call(this,a,f);
case  3 :
return swap_BANG___14291.call(this,a,f,x);
case  4 :
return swap_BANG___14292.call(this,a,f,x,y);
case  5 :
return swap_BANG___14293.call(this,a,f,x,y,z);
default:
return swap_BANG___14294.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14294.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14325){
var iref = cljs.core.first(arglist__14325);
var f = cljs.core.first(cljs.core.next(arglist__14325));
var args = cljs.core.rest(cljs.core.next(arglist__14325));
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
var gensym__14423 = (function (){
return gensym.call(null,"G__");
});
var gensym__14424 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14423.call(this);
case  1 :
return gensym__14424.call(this,prefix_string);
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
var this__14449 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14449.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14454 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14454.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14454.state,this__14454.f);
}
return cljs.core.deref.call(null,this__14454.state);
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
delay.cljs$lang$applyTo = (function (arglist__14484){
var body = cljs.core.seq( arglist__14484 );;
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
var map__14500__14501 = options;
var map__14500__14502 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14500__14501))?cljs.core.apply.call(null,cljs.core.hash_map,map__14500__14501):map__14500__14501);
var keywordize_keys__14503 = cljs.core.get.call(null,map__14500__14502,"﷐'keywordize-keys");
var keyfn__14504 = (cljs.core.truth_(keywordize_keys__14503)?cljs.core.keyword:cljs.core.str);
var f__14514 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14513 = (function iter__14506(s__14507){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14507__14511 = s__14507;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14507__14511)))
{var k__14512 = cljs.core.first.call(null,s__14507__14511);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14504.call(null,k__14512),thisfn.call(null,(x[k__14512]))]),iter__14506.call(null,cljs.core.rest.call(null,s__14507__14511)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14513.call(null,cljs.core.js_keys.call(null,x));
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

return f__14514.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14523){
var x = cljs.core.first(arglist__14523);
var options = cljs.core.rest(arglist__14523);
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
var mem__14526 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14532__delegate = function (args){
var temp__3695__auto____14527 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14526),args);

if(cljs.core.truth_(temp__3695__auto____14527))
{var v__14528 = temp__3695__auto____14527;

return v__14528;
} else
{var ret__14530 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14526,cljs.core.assoc,args,ret__14530);
return ret__14530;
}
};
var G__14532 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14532__delegate.call(this, args);
};
G__14532.cljs$lang$maxFixedArity = 0;
G__14532.cljs$lang$applyTo = (function (arglist__14539){
var args = cljs.core.seq( arglist__14539 );;
return G__14532__delegate.call(this, args);
});
return G__14532;
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
var trampoline__14551 = (function (f){
while(true){
var ret__14546 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14546)))
{{
var G__14557 = ret__14546;
f = G__14557;
continue;
}
} else
{return ret__14546;
}
break;
}
});
var trampoline__14552 = (function() { 
var G__14601__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14601 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14601__delegate.call(this, f, args);
};
G__14601.cljs$lang$maxFixedArity = 1;
G__14601.cljs$lang$applyTo = (function (arglist__14602){
var f = cljs.core.first(arglist__14602);
var args = cljs.core.rest(arglist__14602);
return G__14601__delegate.call(this, f, args);
});
return G__14601;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14551.call(this,f);
default:
return trampoline__14552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14552.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14604 = (function (){
return rand.call(null,1);
});
var rand__14605 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14604.call(this);
case  1 :
return rand__14605.call(this,n);
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
var k__14693 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14693,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14693,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14727 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14751 = (function (h,child,parent){
var or__3548__auto____14706 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14706))
{return or__3548__auto____14706;
} else
{var or__3548__auto____14707 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14707))
{return or__3548__auto____14707;
} else
{var and__3546__auto____14708 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14708))
{var and__3546__auto____14709 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14709))
{var and__3546__auto____14711 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14711))
{var ret__14712 = true;
var i__14714 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14716 = cljs.core.not.call(null,ret__14712);

if(cljs.core.truth_(or__3548__auto____14716))
{return or__3548__auto____14716;
} else
{return cljs.core._EQ_.call(null,i__14714,cljs.core.count.call(null,parent));
}
})()))
{return ret__14712;
} else
{{
var G__14757 = isa_QMARK_.call(null,h,child.call(null,i__14714),parent.call(null,i__14714));
var G__14758 = (i__14714 + 1);
ret__14712 = G__14757;
i__14714 = G__14758;
continue;
}
}
break;
}
} else
{return and__3546__auto____14711;
}
} else
{return and__3546__auto____14709;
}
} else
{return and__3546__auto____14708;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14727.call(this,h,child);
case  3 :
return isa_QMARK___14751.call(this,h,child,parent);
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
var parents__14767 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14768 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14767.call(this,h);
case  2 :
return parents__14768.call(this,h,tag);
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
var ancestors__14778 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14779 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14778.call(this,h);
case  2 :
return ancestors__14779.call(this,h,tag);
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
var descendants__14793 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14794 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14793.call(this,h);
case  2 :
return descendants__14794.call(this,h,tag);
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
var derive__14844 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14845 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14811 = "﷐'parents".call(null,h);
var td__14812 = "﷐'descendants".call(null,h);
var ta__14813 = "﷐'ancestors".call(null,h);
var tf__14838 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14843 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14811.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14813.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14813.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14811,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14838.call(null,"﷐'ancestors".call(null,h),tag,td__14812,parent,ta__14813),"﷐'descendants":tf__14838.call(null,"﷐'descendants".call(null,h),parent,ta__14813,tag,td__14812)});
})());

if(cljs.core.truth_(or__3548__auto____14843))
{return or__3548__auto____14843;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14844.call(this,h,tag);
case  3 :
return derive__14845.call(this,h,tag,parent);
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
var underive__14870 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14871 = (function (h,tag,parent){
var parentMap__14858 = "﷐'parents".call(null,h);
var childsParents__14860 = (cljs.core.truth_(parentMap__14858.call(null,tag))?cljs.core.disj.call(null,parentMap__14858.call(null,tag),parent):cljs.core.set([]));
var newParents__14864 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14860))?cljs.core.assoc.call(null,parentMap__14858,tag,childsParents__14860):cljs.core.dissoc.call(null,parentMap__14858,tag));
var deriv_seq__14865 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14797_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14797_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14797_SHARP_),cljs.core.second.call(null,p1__14797_SHARP_)));
}),cljs.core.seq.call(null,newParents__14864)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14858.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14798_SHARP_,p2__14799_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14798_SHARP_,p2__14799_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14865));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14870.call(this,h,tag);
case  3 :
return underive__14871.call(this,h,tag,parent);
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
var xprefs__14894 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14900 = (cljs.core.truth_((function (){var and__3546__auto____14895 = xprefs__14894;

if(cljs.core.truth_(and__3546__auto____14895))
{return xprefs__14894.call(null,y);
} else
{return and__3546__auto____14895;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14900))
{return or__3548__auto____14900;
} else
{var or__3548__auto____14904 = (function (){var ps__14902 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14902) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14902),prefer_table)))
{} else
{}
{
var G__14909 = cljs.core.rest.call(null,ps__14902);
ps__14902 = G__14909;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14904))
{return or__3548__auto____14904;
} else
{var or__3548__auto____14907 = (function (){var ps__14905 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14905) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14905),y,prefer_table)))
{} else
{}
{
var G__14911 = cljs.core.rest.call(null,ps__14905);
ps__14905 = G__14911;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14907))
{return or__3548__auto____14907;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____14917 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____14917))
{return or__3548__auto____14917;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__14933 = cljs.core.reduce.call(null,(function (be,p__14921){
var vec__14922__14924 = p__14921;
var k__14926 = cljs.core.nth.call(null,vec__14922__14924,0,null);
var ___14927 = cljs.core.nth.call(null,vec__14922__14924,1,null);
var e__14928 = vec__14922__14924;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__14926)))
{var be2__14932 = (cljs.core.truth_((function (){var or__3548__auto____14930 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____14930))
{return or__3548__auto____14930;
} else
{return cljs.core.dominates.call(null,k__14926,cljs.core.first.call(null,be),prefer_table);
}
})())?e__14928:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__14932),k__14926,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__14926," and ",cljs.core.first.call(null,be2__14932),", and neither is preferred")));
}
return be2__14932;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__14933))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__14933));
return cljs.core.second.call(null,best_entry__14933);
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
if(cljs.core.truth_((function (){var and__3546__auto____14949 = mf;

if(cljs.core.truth_(and__3546__auto____14949))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____14949;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____14956 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14956))
{return or__3548__auto____14956;
} else
{var or__3548__auto____14960 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____14960))
{return or__3548__auto____14960;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____14974 = mf;

if(cljs.core.truth_(and__3546__auto____14974))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____14974;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____14977 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14977))
{return or__3548__auto____14977;
} else
{var or__3548__auto____14980 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____14980))
{return or__3548__auto____14980;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____14982 = mf;

if(cljs.core.truth_(and__3546__auto____14982))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____14982;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____14987 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14987))
{return or__3548__auto____14987;
} else
{var or__3548__auto____14991 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____14991))
{return or__3548__auto____14991;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____14996 = mf;

if(cljs.core.truth_(and__3546__auto____14996))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____14996;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____14998 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____14998))
{return or__3548__auto____14998;
} else
{var or__3548__auto____15002 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15002))
{return or__3548__auto____15002;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15006 = mf;

if(cljs.core.truth_(and__3546__auto____15006))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15006;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15007 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15007))
{return or__3548__auto____15007;
} else
{var or__3548__auto____15008 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15008))
{return or__3548__auto____15008;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15009 = mf;

if(cljs.core.truth_(and__3546__auto____15009))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15009;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15012 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15012))
{return or__3548__auto____15012;
} else
{var or__3548__auto____15013 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15013))
{return or__3548__auto____15013;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15018 = mf;

if(cljs.core.truth_(and__3546__auto____15018))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15018;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15019 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15019))
{return or__3548__auto____15019;
} else
{var or__3548__auto____15020 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15020))
{return or__3548__auto____15020;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15023 = mf;

if(cljs.core.truth_(and__3546__auto____15023))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15023;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15025 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15025))
{return or__3548__auto____15025;
} else
{var or__3548__auto____15026 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15026))
{return or__3548__auto____15026;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15056 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15057 = cljs.core._get_method.call(null,mf,dispatch_val__15056);

if(cljs.core.truth_(target_fn__15057))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15056)));
}
return cljs.core.apply.call(null,target_fn__15057,args);
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
var this__15061 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15062 = this;
cljs.core.swap_BANG_.call(null,this__15062.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15062.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15062.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15062.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15140 = this;
cljs.core.swap_BANG_.call(null,this__15140.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15140.method_cache,this__15140.method_table,this__15140.cached_hierarchy,this__15140.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15143 = this;
cljs.core.swap_BANG_.call(null,this__15143.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15143.method_cache,this__15143.method_table,this__15143.cached_hierarchy,this__15143.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15145 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15145.cached_hierarchy),cljs.core.deref.call(null,this__15145.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15145.method_cache,this__15145.method_table,this__15145.cached_hierarchy,this__15145.hierarchy);
}
var temp__3695__auto____15146 = cljs.core.deref.call(null,this__15145.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15146))
{var target_fn__15147 = temp__3695__auto____15146;

return target_fn__15147;
} else
{var temp__3695__auto____15151 = cljs.core.find_and_cache_best_method.call(null,this__15145.name,dispatch_val,this__15145.hierarchy,this__15145.method_table,this__15145.prefer_table,this__15145.method_cache,this__15145.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15151))
{var target_fn__15152 = temp__3695__auto____15151;

return target_fn__15152;
} else
{return cljs.core.deref.call(null,this__15145.method_table).call(null,this__15145.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15154 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15154.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15154.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15154.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15154.method_cache,this__15154.method_table,this__15154.cached_hierarchy,this__15154.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15162 = this;
return cljs.core.deref.call(null,this__15162.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15165 = this;
return cljs.core.deref.call(null,this__15165.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15166 = this;
return cljs.core.do_dispatch.call(null,mf,this__15166.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15180__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15180 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15180__delegate.call(this, _, args);
};
G__15180.cljs$lang$maxFixedArity = 1;
G__15180.cljs$lang$applyTo = (function (arglist__15184){
var _ = cljs.core.first(arglist__15184);
var args = cljs.core.rest(arglist__15184);
return G__15180__delegate.call(this, _, args);
});
return G__15180;
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
