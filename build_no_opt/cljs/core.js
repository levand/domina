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
var or__3548__auto____7247 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7247))
{return or__3548__auto____7247;
} else
{var or__3548__auto____7249 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7249))
{return or__3548__auto____7249;
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
var _invoke__7518 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7260 = this$;

if(cljs.core.truth_(and__3546__auto____7260))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7260;
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
var _invoke__7519 = (function (this$,a){
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
var _invoke__7520 = (function (this$,a,b){
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
{var or__3548__auto____7277 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7277))
{return or__3548__auto____7277;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7522 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7279 = this$;

if(cljs.core.truth_(and__3546__auto____7279))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7279;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7284 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{var or__3548__auto____7285 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7285))
{return or__3548__auto____7285;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7523 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7288 = this$;

if(cljs.core.truth_(and__3546__auto____7288))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7288;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7525 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7302 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7302))
{return or__3548__auto____7302;
} else
{var or__3548__auto____7303 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7527 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7307 = this$;

if(cljs.core.truth_(and__3546__auto____7307))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7307;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7529 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7321 = this$;

if(cljs.core.truth_(and__3546__auto____7321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7326 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{var or__3548__auto____7329 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7329))
{return or__3548__auto____7329;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7531 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7334 = this$;

if(cljs.core.truth_(and__3546__auto____7334))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7334;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7338 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7338))
{return or__3548__auto____7338;
} else
{var or__3548__auto____7342 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7346 = this$;

if(cljs.core.truth_(and__3546__auto____7346))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7346;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7350 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7350))
{return or__3548__auto____7350;
} else
{var or__3548__auto____7354 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7358 = this$;

if(cljs.core.truth_(and__3546__auto____7358))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7358;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7362 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7362))
{return or__3548__auto____7362;
} else
{var or__3548__auto____7366 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7366))
{return or__3548__auto____7366;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7628 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7371 = this$;

if(cljs.core.truth_(and__3546__auto____7371))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7371;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7374 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7374))
{return or__3548__auto____7374;
} else
{var or__3548__auto____7377 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7377))
{return or__3548__auto____7377;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7629 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7381 = this$;

if(cljs.core.truth_(and__3546__auto____7381))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7381;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7386 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7386))
{return or__3548__auto____7386;
} else
{var or__3548__auto____7389 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7389))
{return or__3548__auto____7389;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7630 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7395 = this$;

if(cljs.core.truth_(and__3546__auto____7395))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7395;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7401 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7401))
{return or__3548__auto____7401;
} else
{var or__3548__auto____7403 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7403))
{return or__3548__auto____7403;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7631 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7407 = this$;

if(cljs.core.truth_(and__3546__auto____7407))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7407;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7410 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7410))
{return or__3548__auto____7410;
} else
{var or__3548__auto____7413 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7413))
{return or__3548__auto____7413;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7632 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7416 = this$;

if(cljs.core.truth_(and__3546__auto____7416))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7416;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7423 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7423))
{return or__3548__auto____7423;
} else
{var or__3548__auto____7425 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7633 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7430 = this$;

if(cljs.core.truth_(and__3546__auto____7430))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7430;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7634 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7442 = this$;

if(cljs.core.truth_(and__3546__auto____7442))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7442;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7635 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7460 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{var or__3548__auto____7464 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7636 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{var or__3548__auto____7476 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7476))
{return or__3548__auto____7476;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7637 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7481 = this$;

if(cljs.core.truth_(and__3546__auto____7481))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7481;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7487 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7487))
{return or__3548__auto____7487;
} else
{var or__3548__auto____7488 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7488))
{return or__3548__auto____7488;
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
return _invoke__7518.call(this,this$);
case  2 :
return _invoke__7519.call(this,this$,a);
case  3 :
return _invoke__7520.call(this,this$,a,b);
case  4 :
return _invoke__7522.call(this,this$,a,b,c);
case  5 :
return _invoke__7523.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7525.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7527.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7529.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7531.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7628.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7629.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7630.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7631.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7632.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7633.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7634.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7635.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7636.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7637.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7716 = coll;

if(cljs.core.truth_(and__3546__auto____7716))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7716;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7719 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7720 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7720))
{return or__3548__auto____7720;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7727 = coll;

if(cljs.core.truth_(and__3546__auto____7727))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7727;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7728 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{var or__3548__auto____7730 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7730))
{return or__3548__auto____7730;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7739 = coll;

if(cljs.core.truth_(and__3546__auto____7739))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7739;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7743 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{var or__3548__auto____7748 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
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
var _nth__7821 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7809 = coll;

if(cljs.core.truth_(and__3546__auto____7809))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7809;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7810 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7810))
{return or__3548__auto____7810;
} else
{var or__3548__auto____7811 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7811))
{return or__3548__auto____7811;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7822 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7812 = coll;

if(cljs.core.truth_(and__3546__auto____7812))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7812;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7815 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7815))
{return or__3548__auto____7815;
} else
{var or__3548__auto____7817 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7817))
{return or__3548__auto____7817;
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
return _nth__7821.call(this,coll,n);
case  3 :
return _nth__7822.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7833 = coll;

if(cljs.core.truth_(and__3546__auto____7833))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7833;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7835 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7835))
{return or__3548__auto____7835;
} else
{var or__3548__auto____7836 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7836))
{return or__3548__auto____7836;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7839 = coll;

if(cljs.core.truth_(and__3546__auto____7839))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7839;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7842 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
} else
{var or__3548__auto____7845 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
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
var _lookup__7870 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7859 = o;

if(cljs.core.truth_(and__3546__auto____7859))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7859;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7864 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7864))
{return or__3548__auto____7864;
} else
{var or__3548__auto____7865 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7871 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7866 = o;

if(cljs.core.truth_(and__3546__auto____7866))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7866;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7867 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7867))
{return or__3548__auto____7867;
} else
{var or__3548__auto____7868 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7868))
{return or__3548__auto____7868;
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
return _lookup__7870.call(this,o,k);
case  3 :
return _lookup__7871.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7901 = coll;

if(cljs.core.truth_(and__3546__auto____7901))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7901;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7903 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{var or__3548__auto____7906 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7906))
{return or__3548__auto____7906;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7911 = coll;

if(cljs.core.truth_(and__3546__auto____7911))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7911;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7913 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7913))
{return or__3548__auto____7913;
} else
{var or__3548__auto____7915 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7915))
{return or__3548__auto____7915;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7927 = coll;

if(cljs.core.truth_(and__3546__auto____7927))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7927;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7930 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{var or__3548__auto____7935 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7935))
{return or__3548__auto____7935;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7937 = coll;

if(cljs.core.truth_(and__3546__auto____7937))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7937;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7939 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7943 = coll;

if(cljs.core.truth_(and__3546__auto____7943))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7943;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7944 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7944))
{return or__3548__auto____7944;
} else
{var or__3548__auto____7945 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7948 = coll;

if(cljs.core.truth_(and__3546__auto____7948))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7948;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7951 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7951))
{return or__3548__auto____7951;
} else
{var or__3548__auto____7952 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7957 = coll;

if(cljs.core.truth_(and__3546__auto____7957))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7957;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7959 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{var or__3548__auto____7979 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7983 = o;

if(cljs.core.truth_(and__3546__auto____7983))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7983;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7986 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7986))
{return or__3548__auto____7986;
} else
{var or__3548__auto____7988 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7995 = o;

if(cljs.core.truth_(and__3546__auto____7995))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7995;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8009 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8009))
{return or__3548__auto____8009;
} else
{var or__3548__auto____8012 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8012))
{return or__3548__auto____8012;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8017 = o;

if(cljs.core.truth_(and__3546__auto____8017))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8017;
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
if(cljs.core.truth_((function (){var and__3546__auto____8028 = o;

if(cljs.core.truth_(and__3546__auto____8028))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8028;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8032 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8032))
{return or__3548__auto____8032;
} else
{var or__3548__auto____8034 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8034))
{return or__3548__auto____8034;
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
var _reduce__8053 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8042 = coll;

if(cljs.core.truth_(and__3546__auto____8042))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8042;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8044 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
} else
{var or__3548__auto____8045 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8054 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8047 = coll;

if(cljs.core.truth_(and__3546__auto____8047))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8047;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8049 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8049))
{return or__3548__auto____8049;
} else
{var or__3548__auto____8051 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
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
return _reduce__8053.call(this,coll,f);
case  3 :
return _reduce__8054.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8063 = o;

if(cljs.core.truth_(and__3546__auto____8063))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8063;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8065 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8065))
{return or__3548__auto____8065;
} else
{var or__3548__auto____8066 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8066))
{return or__3548__auto____8066;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8068 = o;

if(cljs.core.truth_(and__3546__auto____8068))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8068;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8071 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8071))
{return or__3548__auto____8071;
} else
{var or__3548__auto____8072 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8074 = o;

if(cljs.core.truth_(and__3546__auto____8074))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8074;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8076 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{var or__3548__auto____8078 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
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
if(cljs.core.truth_((function (){var and__3546__auto____8096 = o;

if(cljs.core.truth_(and__3546__auto____8096))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8096;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8098 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8098))
{return or__3548__auto____8098;
} else
{var or__3548__auto____8101 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8133 = d;

if(cljs.core.truth_(and__3546__auto____8133))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8133;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8135 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{var or__3548__auto____8137 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8137))
{return or__3548__auto____8137;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8141 = this$;

if(cljs.core.truth_(and__3546__auto____8141))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8141;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8143 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8143))
{return or__3548__auto____8143;
} else
{var or__3548__auto____8144 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8144))
{return or__3548__auto____8144;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8147 = this$;

if(cljs.core.truth_(and__3546__auto____8147))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8147;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8150 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8150))
{return or__3548__auto____8150;
} else
{var or__3548__auto____8151 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8151))
{return or__3548__auto____8151;
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
{return (function (){var or__3548__auto____8157 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8157))
{return or__3548__auto____8157;
} else
{var or__3548__auto____8158 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8158))
{return or__3548__auto____8158;
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
var G__8189 = null;
var G__8189__8190 = (function (o,k){
return null;
});
var G__8189__8191 = (function (o,k,not_found){
return not_found;
});
G__8189 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8189__8190.call(this,o,k);
case  3 :
return G__8189__8191.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8189;
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
var G__8193 = null;
var G__8193__8194 = (function (_,f){
return f.call(null);
});
var G__8193__8195 = (function (_,f,start){
return start;
});
G__8193 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8193__8194.call(this,_,f);
case  3 :
return G__8193__8195.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8193;
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
var G__8302 = null;
var G__8302__8303 = (function (_,n){
return null;
});
var G__8302__8304 = (function (_,n,not_found){
return not_found;
});
G__8302 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8302__8303.call(this,_,n);
case  3 :
return G__8302__8304.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8302;
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
var ci_reduce__8372 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8353 = cljs.core._nth.call(null,cicoll,0);
var n__8355 = 1;

while(true){
if(cljs.core.truth_((n__8355 < cljs.core._count.call(null,cicoll))))
{{
var G__8376 = f.call(null,val__8353,cljs.core._nth.call(null,cicoll,n__8355));
var G__8377 = (n__8355 + 1);
val__8353 = G__8376;
n__8355 = G__8377;
continue;
}
} else
{return val__8353;
}
break;
}
}
});
var ci_reduce__8373 = (function (cicoll,f,val){
var val__8357 = val;
var n__8360 = 0;

while(true){
if(cljs.core.truth_((n__8360 < cljs.core._count.call(null,cicoll))))
{{
var G__8382 = f.call(null,val__8357,cljs.core._nth.call(null,cicoll,n__8360));
var G__8383 = (n__8360 + 1);
val__8357 = G__8382;
n__8360 = G__8383;
continue;
}
} else
{return val__8357;
}
break;
}
});
var ci_reduce__8374 = (function (cicoll,f,val,idx){
var val__8364 = val;
var n__8365 = idx;

while(true){
if(cljs.core.truth_((n__8365 < cljs.core._count.call(null,cicoll))))
{{
var G__8388 = f.call(null,val__8364,cljs.core._nth.call(null,cicoll,n__8365));
var G__8389 = (n__8365 + 1);
val__8364 = G__8388;
n__8365 = G__8389;
continue;
}
} else
{return val__8364;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8372.call(this,cicoll,f);
case  3 :
return ci_reduce__8373.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8374.call(this,cicoll,f,val,idx);
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
var this__8394 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8456 = null;
var G__8456__8457 = (function (_,f){
var this__8395 = this;
return cljs.core.ci_reduce.call(null,this__8395.a,f,(this__8395.a[this__8395.i]),(this__8395.i + 1));
});
var G__8456__8458 = (function (_,f,start){
var this__8396 = this;
return cljs.core.ci_reduce.call(null,this__8396.a,f,start,this__8396.i);
});
G__8456 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8456__8457.call(this,_,f);
case  3 :
return G__8456__8458.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8456;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8397 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8398 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8460 = null;
var G__8460__8461 = (function (coll,n){
var this__8399 = this;
var i__8400 = (n + this__8399.i);

if(cljs.core.truth_((i__8400 < this__8399.a.length)))
{return (this__8399.a[i__8400]);
} else
{return null;
}
});
var G__8460__8462 = (function (coll,n,not_found){
var this__8401 = this;
var i__8449 = (n + this__8401.i);

if(cljs.core.truth_((i__8449 < this__8401.a.length)))
{return (this__8401.a[i__8449]);
} else
{return not_found;
}
});
G__8460 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8460__8461.call(this,coll,n);
case  3 :
return G__8460__8462.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8460;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8450 = this;
return (this__8450.a.length - this__8450.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8451 = this;
return (this__8451.a[this__8451.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8452 = this;
if(cljs.core.truth_(((this__8452.i + 1) < this__8452.a.length)))
{return (new cljs.core.IndexedSeq(this__8452.a,(this__8452.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8453 = this;
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
var G__8472 = null;
var G__8472__8473 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8472__8474 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8472 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8472__8473.call(this,array,f);
case  3 :
return G__8472__8474.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8472;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8478 = null;
var G__8478__8479 = (function (array,k){
return (array[k]);
});
var G__8478__8480 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8478 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8478__8479.call(this,array,k);
case  3 :
return G__8478__8480.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8478;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8482 = null;
var G__8482__8483 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8482__8484 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8482 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8482__8483.call(this,array,n);
case  3 :
return G__8482__8484.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8482;
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
var temp__3698__auto____8501 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8501))
{var s__8502 = temp__3698__auto____8501;

return cljs.core._first.call(null,s__8502);
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
var G__8533 = cljs.core.next.call(null,s);
s = G__8533;
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
var s__8535 = cljs.core.seq.call(null,x);
var n__8536 = 0;

while(true){
if(cljs.core.truth_(s__8535))
{{
var G__8545 = cljs.core.next.call(null,s__8535);
var G__8546 = (n__8536 + 1);
s__8535 = G__8545;
n__8536 = G__8546;
continue;
}
} else
{return n__8536;
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
var conj__8551 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8552 = (function() { 
var G__8554__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8555 = conj.call(null,coll,x);
var G__8556 = cljs.core.first.call(null,xs);
var G__8557 = cljs.core.next.call(null,xs);
coll = G__8555;
x = G__8556;
xs = G__8557;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8554 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8554__delegate.call(this, coll, x, xs);
};
G__8554.cljs$lang$maxFixedArity = 2;
G__8554.cljs$lang$applyTo = (function (arglist__8558){
var coll = cljs.core.first(arglist__8558);
var x = cljs.core.first(cljs.core.next(arglist__8558));
var xs = cljs.core.rest(cljs.core.next(arglist__8558));
return G__8554__delegate.call(this, coll, x, xs);
});
return G__8554;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8551.call(this,coll,x);
default:
return conj__8552.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8552.cljs$lang$applyTo;
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
var nth__8585 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8586 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8585.call(this,coll,n);
case  3 :
return nth__8586.call(this,coll,n,not_found);
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
var get__8594 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8595 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8594.call(this,o,k);
case  3 :
return get__8595.call(this,o,k,not_found);
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
var assoc__8604 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8605 = (function() { 
var G__8607__delegate = function (coll,k,v,kvs){
while(true){
var ret__8602 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8608 = ret__8602;
var G__8609 = cljs.core.first.call(null,kvs);
var G__8610 = cljs.core.second.call(null,kvs);
var G__8611 = cljs.core.nnext.call(null,kvs);
coll = G__8608;
k = G__8609;
v = G__8610;
kvs = G__8611;
continue;
}
} else
{return ret__8602;
}
break;
}
};
var G__8607 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8607__delegate.call(this, coll, k, v, kvs);
};
G__8607.cljs$lang$maxFixedArity = 3;
G__8607.cljs$lang$applyTo = (function (arglist__8616){
var coll = cljs.core.first(arglist__8616);
var k = cljs.core.first(cljs.core.next(arglist__8616));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8616)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8616)));
return G__8607__delegate.call(this, coll, k, v, kvs);
});
return G__8607;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8604.call(this,coll,k,v);
default:
return assoc__8605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8605.cljs$lang$applyTo;
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
var dissoc__8632 = (function (coll){
return coll;
});
var dissoc__8633 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8634 = (function() { 
var G__8640__delegate = function (coll,k,ks){
while(true){
var ret__8630 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8642 = ret__8630;
var G__8643 = cljs.core.first.call(null,ks);
var G__8644 = cljs.core.next.call(null,ks);
coll = G__8642;
k = G__8643;
ks = G__8644;
continue;
}
} else
{return ret__8630;
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
G__8640.cljs$lang$applyTo = (function (arglist__8648){
var coll = cljs.core.first(arglist__8648);
var k = cljs.core.first(cljs.core.next(arglist__8648));
var ks = cljs.core.rest(cljs.core.next(arglist__8648));
return G__8640__delegate.call(this, coll, k, ks);
});
return G__8640;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8632.call(this,coll);
case  2 :
return dissoc__8633.call(this,coll,k);
default:
return dissoc__8634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8634.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8652 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8653 = x__445__auto____8652;

if(cljs.core.truth_(and__3546__auto____8653))
{var and__3546__auto____8656 = x__445__auto____8652.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8656))
{return cljs.core.not.call(null,x__445__auto____8652.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8656;
}
} else
{return and__3546__auto____8653;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8652);
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
var disj__8674 = (function (coll){
return coll;
});
var disj__8675 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8676 = (function() { 
var G__8681__delegate = function (coll,k,ks){
while(true){
var ret__8672 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8682 = ret__8672;
var G__8683 = cljs.core.first.call(null,ks);
var G__8684 = cljs.core.next.call(null,ks);
coll = G__8682;
k = G__8683;
ks = G__8684;
continue;
}
} else
{return ret__8672;
}
break;
}
};
var G__8681 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8681__delegate.call(this, coll, k, ks);
};
G__8681.cljs$lang$maxFixedArity = 2;
G__8681.cljs$lang$applyTo = (function (arglist__8690){
var coll = cljs.core.first(arglist__8690);
var k = cljs.core.first(cljs.core.next(arglist__8690));
var ks = cljs.core.rest(cljs.core.next(arglist__8690));
return G__8681__delegate.call(this, coll, k, ks);
});
return G__8681;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8674.call(this,coll);
case  2 :
return disj__8675.call(this,coll,k);
default:
return disj__8676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8676.cljs$lang$applyTo;
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
{var x__445__auto____8707 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8710 = x__445__auto____8707;

if(cljs.core.truth_(and__3546__auto____8710))
{var and__3546__auto____8711 = x__445__auto____8707.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8711))
{return cljs.core.not.call(null,x__445__auto____8707.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8711;
}
} else
{return and__3546__auto____8710;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8707);
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
{var x__445__auto____8719 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8722 = x__445__auto____8719;

if(cljs.core.truth_(and__3546__auto____8722))
{var and__3546__auto____8724 = x__445__auto____8719.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8724))
{return cljs.core.not.call(null,x__445__auto____8719.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8724;
}
} else
{return and__3546__auto____8722;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8719);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8732 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8733 = x__445__auto____8732;

if(cljs.core.truth_(and__3546__auto____8733))
{var and__3546__auto____8734 = x__445__auto____8732.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8734))
{return cljs.core.not.call(null,x__445__auto____8732.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8734;
}
} else
{return and__3546__auto____8733;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8732);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8739 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8740 = x__445__auto____8739;

if(cljs.core.truth_(and__3546__auto____8740))
{var and__3546__auto____8741 = x__445__auto____8739.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8741))
{return cljs.core.not.call(null,x__445__auto____8739.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8741;
}
} else
{return and__3546__auto____8740;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8739);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8742 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8743 = x__445__auto____8742;

if(cljs.core.truth_(and__3546__auto____8743))
{var and__3546__auto____8745 = x__445__auto____8742.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8745))
{return cljs.core.not.call(null,x__445__auto____8742.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8745;
}
} else
{return and__3546__auto____8743;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8742);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8771 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8772 = x__445__auto____8771;

if(cljs.core.truth_(and__3546__auto____8772))
{var and__3546__auto____8773 = x__445__auto____8771.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8773))
{return cljs.core.not.call(null,x__445__auto____8771.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8773;
}
} else
{return and__3546__auto____8772;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8771);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8862 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8865 = x__445__auto____8862;

if(cljs.core.truth_(and__3546__auto____8865))
{var and__3546__auto____8866 = x__445__auto____8862.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8866))
{return cljs.core.not.call(null,x__445__auto____8862.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8866;
}
} else
{return and__3546__auto____8865;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8862);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8872 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8872.push(key);
}));
return keys__8872;
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
{var x__445__auto____8910 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8911 = x__445__auto____8910;

if(cljs.core.truth_(and__3546__auto____8911))
{var and__3546__auto____8913 = x__445__auto____8910.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8913))
{return cljs.core.not.call(null,x__445__auto____8910.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8913;
}
} else
{return and__3546__auto____8911;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8910);
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
var and__3546__auto____8920 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8920))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8926 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8926))
{return or__3548__auto____8926;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8920;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8933 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8933))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8933;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8942 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8942))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8942;
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
var and__3546__auto____8948 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8948))
{return (n == n.toFixed());
} else
{return and__3546__auto____8948;
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
if(cljs.core.truth_((function (){var and__3546__auto____8953 = coll;

if(cljs.core.truth_(and__3546__auto____8953))
{var and__3546__auto____8957 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8957))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8957;
}
} else
{return and__3546__auto____8953;
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
var distinct_QMARK___9019 = (function (x){
return true;
});
var distinct_QMARK___9021 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9022 = (function() { 
var G__9025__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8962 = cljs.core.set([y,x]);
var xs__8963 = more;

while(true){
var x__8965 = cljs.core.first.call(null,xs__8963);
var etc__8966 = cljs.core.next.call(null,xs__8963);

if(cljs.core.truth_(xs__8963))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8962,x__8965)))
{return false;
} else
{{
var G__9031 = cljs.core.conj.call(null,s__8962,x__8965);
var G__9033 = etc__8966;
s__8962 = G__9031;
xs__8963 = G__9033;
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
var G__9025 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9025__delegate.call(this, x, y, more);
};
G__9025.cljs$lang$maxFixedArity = 2;
G__9025.cljs$lang$applyTo = (function (arglist__9035){
var x = cljs.core.first(arglist__9035);
var y = cljs.core.first(cljs.core.next(arglist__9035));
var more = cljs.core.rest(cljs.core.next(arglist__9035));
return G__9025__delegate.call(this, x, y, more);
});
return G__9025;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9019.call(this,x);
case  2 :
return distinct_QMARK___9021.call(this,x,y);
default:
return distinct_QMARK___9022.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9022.cljs$lang$applyTo;
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
var r__9051 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9051)))
{return r__9051;
} else
{if(cljs.core.truth_(r__9051))
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
var sort__9074 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9075 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9065 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9065,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9065);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9074.call(this,comp);
case  2 :
return sort__9075.call(this,comp,coll);
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
var sort_by__9085 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9086 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9085.call(this,keyfn,comp);
case  3 :
return sort_by__9086.call(this,keyfn,comp,coll);
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
var reduce__9108 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9109 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9108.call(this,f,val);
case  3 :
return reduce__9109.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9132 = (function (f,coll){
var temp__3695__auto____9113 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9113))
{var s__9114 = temp__3695__auto____9113;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9114),cljs.core.next.call(null,s__9114));
} else
{return f.call(null);
}
});
var seq_reduce__9133 = (function (f,val,coll){
var val__9122 = val;
var coll__9123 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9123))
{{
var G__9136 = f.call(null,val__9122,cljs.core.first.call(null,coll__9123));
var G__9137 = cljs.core.next.call(null,coll__9123);
val__9122 = G__9136;
coll__9123 = G__9137;
continue;
}
} else
{return val__9122;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9132.call(this,f,val);
case  3 :
return seq_reduce__9133.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9147 = null;
var G__9147__9148 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9147__9149 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9147 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9147__9148.call(this,coll,f);
case  3 :
return G__9147__9149.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9147;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9167 = (function (){
return 0;
});
var _PLUS___9168 = (function (x){
return x;
});
var _PLUS___9169 = (function (x,y){
return (x + y);
});
var _PLUS___9170 = (function() { 
var G__9178__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9178 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9178__delegate.call(this, x, y, more);
};
G__9178.cljs$lang$maxFixedArity = 2;
G__9178.cljs$lang$applyTo = (function (arglist__9217){
var x = cljs.core.first(arglist__9217);
var y = cljs.core.first(cljs.core.next(arglist__9217));
var more = cljs.core.rest(cljs.core.next(arglist__9217));
return G__9178__delegate.call(this, x, y, more);
});
return G__9178;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9167.call(this);
case  1 :
return _PLUS___9168.call(this,x);
case  2 :
return _PLUS___9169.call(this,x,y);
default:
return _PLUS___9170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9170.cljs$lang$applyTo;
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
var ___9219 = (function (x){
return (- x);
});
var ___9220 = (function (x,y){
return (x - y);
});
var ___9221 = (function() { 
var G__9224__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9224 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9224__delegate.call(this, x, y, more);
};
G__9224.cljs$lang$maxFixedArity = 2;
G__9224.cljs$lang$applyTo = (function (arglist__9229){
var x = cljs.core.first(arglist__9229);
var y = cljs.core.first(cljs.core.next(arglist__9229));
var more = cljs.core.rest(cljs.core.next(arglist__9229));
return G__9224__delegate.call(this, x, y, more);
});
return G__9224;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9219.call(this,x);
case  2 :
return ___9220.call(this,x,y);
default:
return ___9221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9221.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9232 = (function (){
return 1;
});
var _STAR___9233 = (function (x){
return x;
});
var _STAR___9234 = (function (x,y){
return (x * y);
});
var _STAR___9235 = (function() { 
var G__9237__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9237 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9237__delegate.call(this, x, y, more);
};
G__9237.cljs$lang$maxFixedArity = 2;
G__9237.cljs$lang$applyTo = (function (arglist__9239){
var x = cljs.core.first(arglist__9239);
var y = cljs.core.first(cljs.core.next(arglist__9239));
var more = cljs.core.rest(cljs.core.next(arglist__9239));
return G__9237__delegate.call(this, x, y, more);
});
return G__9237;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9232.call(this);
case  1 :
return _STAR___9233.call(this,x);
case  2 :
return _STAR___9234.call(this,x,y);
default:
return _STAR___9235.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9235.cljs$lang$applyTo;
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
var _SLASH___9253 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9254 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9255 = (function() { 
var G__9258__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9258 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9258__delegate.call(this, x, y, more);
};
G__9258.cljs$lang$maxFixedArity = 2;
G__9258.cljs$lang$applyTo = (function (arglist__9260){
var x = cljs.core.first(arglist__9260);
var y = cljs.core.first(cljs.core.next(arglist__9260));
var more = cljs.core.rest(cljs.core.next(arglist__9260));
return G__9258__delegate.call(this, x, y, more);
});
return G__9258;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9253.call(this,x);
case  2 :
return _SLASH___9254.call(this,x,y);
default:
return _SLASH___9255.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9255.cljs$lang$applyTo;
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
var _LT___9274 = (function (x){
return true;
});
var _LT___9275 = (function (x,y){
return (x < y);
});
var _LT___9276 = (function() { 
var G__9279__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9280 = y;
var G__9282 = cljs.core.first.call(null,more);
var G__9283 = cljs.core.next.call(null,more);
x = G__9280;
y = G__9282;
more = G__9283;
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
var G__9279 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9279__delegate.call(this, x, y, more);
};
G__9279.cljs$lang$maxFixedArity = 2;
G__9279.cljs$lang$applyTo = (function (arglist__9285){
var x = cljs.core.first(arglist__9285);
var y = cljs.core.first(cljs.core.next(arglist__9285));
var more = cljs.core.rest(cljs.core.next(arglist__9285));
return G__9279__delegate.call(this, x, y, more);
});
return G__9279;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9274.call(this,x);
case  2 :
return _LT___9275.call(this,x,y);
default:
return _LT___9276.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9276.cljs$lang$applyTo;
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
var _LT__EQ___9298 = (function (x){
return true;
});
var _LT__EQ___9299 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9300 = (function() { 
var G__9302__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9303 = y;
var G__9304 = cljs.core.first.call(null,more);
var G__9305 = cljs.core.next.call(null,more);
x = G__9303;
y = G__9304;
more = G__9305;
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
var G__9302 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9302__delegate.call(this, x, y, more);
};
G__9302.cljs$lang$maxFixedArity = 2;
G__9302.cljs$lang$applyTo = (function (arglist__9306){
var x = cljs.core.first(arglist__9306);
var y = cljs.core.first(cljs.core.next(arglist__9306));
var more = cljs.core.rest(cljs.core.next(arglist__9306));
return G__9302__delegate.call(this, x, y, more);
});
return G__9302;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9298.call(this,x);
case  2 :
return _LT__EQ___9299.call(this,x,y);
default:
return _LT__EQ___9300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9300.cljs$lang$applyTo;
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
var _GT___9316 = (function (x){
return true;
});
var _GT___9317 = (function (x,y){
return (x > y);
});
var _GT___9318 = (function() { 
var G__9320__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9321 = y;
var G__9322 = cljs.core.first.call(null,more);
var G__9323 = cljs.core.next.call(null,more);
x = G__9321;
y = G__9322;
more = G__9323;
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
var G__9320 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9320__delegate.call(this, x, y, more);
};
G__9320.cljs$lang$maxFixedArity = 2;
G__9320.cljs$lang$applyTo = (function (arglist__9324){
var x = cljs.core.first(arglist__9324);
var y = cljs.core.first(cljs.core.next(arglist__9324));
var more = cljs.core.rest(cljs.core.next(arglist__9324));
return G__9320__delegate.call(this, x, y, more);
});
return G__9320;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9316.call(this,x);
case  2 :
return _GT___9317.call(this,x,y);
default:
return _GT___9318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9318.cljs$lang$applyTo;
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
var _GT__EQ___9346 = (function (x){
return true;
});
var _GT__EQ___9349 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9350 = (function() { 
var G__9358__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9359 = y;
var G__9360 = cljs.core.first.call(null,more);
var G__9361 = cljs.core.next.call(null,more);
x = G__9359;
y = G__9360;
more = G__9361;
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
var G__9358 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9358__delegate.call(this, x, y, more);
};
G__9358.cljs$lang$maxFixedArity = 2;
G__9358.cljs$lang$applyTo = (function (arglist__9363){
var x = cljs.core.first(arglist__9363);
var y = cljs.core.first(cljs.core.next(arglist__9363));
var more = cljs.core.rest(cljs.core.next(arglist__9363));
return G__9358__delegate.call(this, x, y, more);
});
return G__9358;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9346.call(this,x);
case  2 :
return _GT__EQ___9349.call(this,x,y);
default:
return _GT__EQ___9350.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9350.cljs$lang$applyTo;
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
var max__9372 = (function (x){
return x;
});
var max__9373 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9374 = (function() { 
var G__9376__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9376 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9376__delegate.call(this, x, y, more);
};
G__9376.cljs$lang$maxFixedArity = 2;
G__9376.cljs$lang$applyTo = (function (arglist__9382){
var x = cljs.core.first(arglist__9382);
var y = cljs.core.first(cljs.core.next(arglist__9382));
var more = cljs.core.rest(cljs.core.next(arglist__9382));
return G__9376__delegate.call(this, x, y, more);
});
return G__9376;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9372.call(this,x);
case  2 :
return max__9373.call(this,x,y);
default:
return max__9374.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9374.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9388 = (function (x){
return x;
});
var min__9389 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9390 = (function() { 
var G__9394__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9394 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9394__delegate.call(this, x, y, more);
};
G__9394.cljs$lang$maxFixedArity = 2;
G__9394.cljs$lang$applyTo = (function (arglist__9399){
var x = cljs.core.first(arglist__9399);
var y = cljs.core.first(cljs.core.next(arglist__9399));
var more = cljs.core.rest(cljs.core.next(arglist__9399));
return G__9394__delegate.call(this, x, y, more);
});
return G__9394;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9388.call(this,x);
case  2 :
return min__9389.call(this,x,y);
default:
return min__9390.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9390.cljs$lang$applyTo;
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
var rem__9411 = (n % d);

return cljs.core.fix.call(null,((n - rem__9411) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9416 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9416));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9427 = (function (){
return Math.random.call(null);
});
var rand__9428 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9427.call(this);
case  1 :
return rand__9428.call(this,n);
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
var _EQ__EQ___9551 = (function (x){
return true;
});
var _EQ__EQ___9552 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9554 = (function() { 
var G__9559__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9560 = y;
var G__9561 = cljs.core.first.call(null,more);
var G__9562 = cljs.core.next.call(null,more);
x = G__9560;
y = G__9561;
more = G__9562;
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
var G__9559 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9559__delegate.call(this, x, y, more);
};
G__9559.cljs$lang$maxFixedArity = 2;
G__9559.cljs$lang$applyTo = (function (arglist__9564){
var x = cljs.core.first(arglist__9564);
var y = cljs.core.first(cljs.core.next(arglist__9564));
var more = cljs.core.rest(cljs.core.next(arglist__9564));
return G__9559__delegate.call(this, x, y, more);
});
return G__9559;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9551.call(this,x);
case  2 :
return _EQ__EQ___9552.call(this,x,y);
default:
return _EQ__EQ___9554.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9554.cljs$lang$applyTo;
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
var n__9572 = n;
var xs__9574 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9575 = xs__9574;

if(cljs.core.truth_(and__3546__auto____9575))
{return (n__9572 > 0);
} else
{return and__3546__auto____9575;
}
})()))
{{
var G__9580 = (n__9572 - 1);
var G__9581 = cljs.core.next.call(null,xs__9574);
n__9572 = G__9580;
xs__9574 = G__9581;
continue;
}
} else
{return xs__9574;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9596 = null;
var G__9596__9598 = (function (coll,n){
var temp__3695__auto____9589 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9589))
{var xs__9591 = temp__3695__auto____9589;

return cljs.core.first.call(null,xs__9591);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9596__9599 = (function (coll,n,not_found){
var temp__3695__auto____9592 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9592))
{var xs__9594 = temp__3695__auto____9592;

return cljs.core.first.call(null,xs__9594);
} else
{return not_found;
}
});
G__9596 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9596__9598.call(this,coll,n);
case  3 :
return G__9596__9599.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9596;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9617 = (function (){
return "";
});
var str_STAR___9618 = (function (x){
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
var str_STAR___9619 = (function() { 
var G__9623__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9624 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9625 = cljs.core.next.call(null,more);
sb = G__9624;
more = G__9625;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9623 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9623__delegate.call(this, x, ys);
};
G__9623.cljs$lang$maxFixedArity = 1;
G__9623.cljs$lang$applyTo = (function (arglist__9627){
var x = cljs.core.first(arglist__9627);
var ys = cljs.core.rest(arglist__9627);
return G__9623__delegate.call(this, x, ys);
});
return G__9623;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9617.call(this);
case  1 :
return str_STAR___9618.call(this,x);
default:
return str_STAR___9619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9619.cljs$lang$applyTo;
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
var G__9865__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9865 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9865__delegate.call(this, x, ys);
};
G__9865.cljs$lang$maxFixedArity = 1;
G__9865.cljs$lang$applyTo = (function (arglist__9867){
var x = cljs.core.first(arglist__9867);
var ys = cljs.core.rest(arglist__9867);
return G__9865__delegate.call(this, x, ys);
});
return G__9865;
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
var subs__9877 = (function (s,start){
return s.substring(start);
});
var subs__9878 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9877.call(this,s,start);
case  3 :
return subs__9878.call(this,s,start,end);
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
var symbol__9884 = (function (name){
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
var symbol__9885 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9884.call(this,ns);
case  2 :
return symbol__9885.call(this,ns,name);
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
var keyword__9887 = (function (name){
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
var keyword__9888 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9887.call(this,ns);
case  2 :
return keyword__9888.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9891 = cljs.core.seq.call(null,x);
var ys__9893 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9891)))
{return cljs.core.nil_QMARK_.call(null,ys__9893);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9893)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9891),cljs.core.first.call(null,ys__9893))))
{{
var G__9902 = cljs.core.next.call(null,xs__9891);
var G__9903 = cljs.core.next.call(null,ys__9893);
xs__9891 = G__9902;
ys__9893 = G__9903;
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
return cljs.core.reduce.call(null,(function (p1__9906_SHARP_,p2__9907_SHARP_){
return cljs.core.hash_combine.call(null,p1__9906_SHARP_,cljs.core.hash.call(null,p2__9907_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9943__9944 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9943__9944))
{var G__9946__9948 = cljs.core.first.call(null,G__9943__9944);
var vec__9947__9949 = G__9946__9948;
var key_name__9950 = cljs.core.nth.call(null,vec__9947__9949,0,null);
var f__9952 = cljs.core.nth.call(null,vec__9947__9949,1,null);
var G__9943__9953 = G__9943__9944;

var G__9946__9954 = G__9946__9948;
var G__9943__9955 = G__9943__9953;

while(true){
var vec__9957__9958 = G__9946__9954;
var key_name__9959 = cljs.core.nth.call(null,vec__9957__9958,0,null);
var f__9960 = cljs.core.nth.call(null,vec__9957__9958,1,null);
var G__9943__9961 = G__9943__9955;

var str_name__9963 = cljs.core.name.call(null,key_name__9959);

obj[str_name__9963] = f__9960;
var temp__3698__auto____9965 = cljs.core.next.call(null,G__9943__9961);

if(cljs.core.truth_(temp__3698__auto____9965))
{var G__9943__9966 = temp__3698__auto____9965;

{
var G__9974 = cljs.core.first.call(null,G__9943__9966);
var G__9975 = G__9943__9966;
G__9946__9954 = G__9974;
G__9943__9955 = G__9975;
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
var this__9976 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9977 = this;
return (new cljs.core.List(this__9977.meta,o,coll,(this__9977.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9978 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9980 = this;
return this__9980.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9982 = this;
return this__9982.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9983 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9985 = this;
return this__9985.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9986 = this;
return this__9986.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9987 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9988 = this;
return (new cljs.core.List(meta,this__9988.first,this__9988.rest,this__9988.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9989 = this;
return this__9989.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9990 = this;
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
var this__10002 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10004 = this;
return (new cljs.core.List(this__10004.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10010 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10011 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10012 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10013 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10018 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10019 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10020 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10025 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10026 = this;
return this__10026.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10027 = this;
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
list.cljs$lang$applyTo = (function (arglist__10067){
var items = cljs.core.seq( arglist__10067 );;
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
var this__10074 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10075 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10076 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10077 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10077.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10078 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10079 = this;
return this__10079.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10080 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10080.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10080.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10081 = this;
return this__10081.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10082 = this;
return (new cljs.core.Cons(meta,this__10082.first,this__10082.rest));
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
var G__10118 = null;
var G__10118__10119 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10118__10120 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10118 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10118__10119.call(this,string,f);
case  3 :
return G__10118__10120.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10118;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10125 = null;
var G__10125__10126 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10125__10127 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10125 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10125__10126.call(this,string,k);
case  3 :
return G__10125__10127.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10125;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10130 = null;
var G__10130__10131 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10130__10132 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10130 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10130__10131.call(this,string,n);
case  3 :
return G__10130__10132.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10130;
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
var G__10154 = null;
var G__10154__10155 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10154__10156 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10154 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10154__10155.call(this,this$,coll);
case  3 :
return G__10154__10156.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10154;
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
var x__10167 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10167;
} else
{lazy_seq.x = x__10167.call(null);
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
var this__10175 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10177 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10178 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10179 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10179.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10180 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10184 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10185 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10186 = this;
return this__10186.meta;
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
var ary__10201 = cljs.core.array.call(null);

var s__10202 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10202)))
{ary__10201.push(cljs.core.first.call(null,s__10202));
{
var G__10204 = cljs.core.next.call(null,s__10202);
s__10202 = G__10204;
continue;
}
} else
{return ary__10201;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10207 = s;
var i__10208 = n;
var sum__10209 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10210 = (i__10208 > 0);

if(cljs.core.truth_(and__3546__auto____10210))
{return cljs.core.seq.call(null,s__10207);
} else
{return and__3546__auto____10210;
}
})()))
{{
var G__10272 = cljs.core.next.call(null,s__10207);
var G__10273 = (i__10208 - 1);
var G__10274 = (sum__10209 + 1);
s__10207 = G__10272;
i__10208 = G__10273;
sum__10209 = G__10274;
continue;
}
} else
{return sum__10209;
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
var concat__10343 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10345 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10346 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10291 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10291))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10291),concat.call(null,cljs.core.rest.call(null,s__10291),y));
} else
{return y;
}
})));
});
var concat__10347 = (function() { 
var G__10349__delegate = function (x,y,zs){
var cat__10342 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10335 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10335))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10335),cat.call(null,cljs.core.rest.call(null,xys__10335),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10342.call(null,concat.call(null,x,y),zs);
};
var G__10349 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10349__delegate.call(this, x, y, zs);
};
G__10349.cljs$lang$maxFixedArity = 2;
G__10349.cljs$lang$applyTo = (function (arglist__10350){
var x = cljs.core.first(arglist__10350);
var y = cljs.core.first(cljs.core.next(arglist__10350));
var zs = cljs.core.rest(cljs.core.next(arglist__10350));
return G__10349__delegate.call(this, x, y, zs);
});
return G__10349;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10343.call(this);
case  1 :
return concat__10345.call(this,x);
case  2 :
return concat__10346.call(this,x,y);
default:
return concat__10347.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10347.cljs$lang$applyTo;
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
var list_STAR___10353 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10354 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10355 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10356 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10357 = (function() { 
var G__10359__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10359 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10359__delegate.call(this, a, b, c, d, more);
};
G__10359.cljs$lang$maxFixedArity = 4;
G__10359.cljs$lang$applyTo = (function (arglist__10360){
var a = cljs.core.first(arglist__10360);
var b = cljs.core.first(cljs.core.next(arglist__10360));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10360)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10360))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10360))));
return G__10359__delegate.call(this, a, b, c, d, more);
});
return G__10359;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10353.call(this,a);
case  2 :
return list_STAR___10354.call(this,a,b);
case  3 :
return list_STAR___10355.call(this,a,b,c);
case  4 :
return list_STAR___10356.call(this,a,b,c,d);
default:
return list_STAR___10357.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10357.cljs$lang$applyTo;
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
var apply__10410 = (function (f,args){
var fixed_arity__10361 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10361 + 1)) <= fixed_arity__10361)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10411 = (function (f,x,args){
var arglist__10364 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10365 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10364,fixed_arity__10365) <= fixed_arity__10365)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10364));
} else
{return f.cljs$lang$applyTo(arglist__10364);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10364));
}
});
var apply__10412 = (function (f,x,y,args){
var arglist__10368 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10369 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10368,fixed_arity__10369) <= fixed_arity__10369)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10368));
} else
{return f.cljs$lang$applyTo(arglist__10368);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10368));
}
});
var apply__10413 = (function (f,x,y,z,args){
var arglist__10372 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10373 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10372,fixed_arity__10373) <= fixed_arity__10373)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10372));
} else
{return f.cljs$lang$applyTo(arglist__10372);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10372));
}
});
var apply__10414 = (function() { 
var G__10419__delegate = function (f,a,b,c,d,args){
var arglist__10406 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10407 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10406,fixed_arity__10407) <= fixed_arity__10407)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10406));
} else
{return f.cljs$lang$applyTo(arglist__10406);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10406));
}
};
var G__10419 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10419__delegate.call(this, f, a, b, c, d, args);
};
G__10419.cljs$lang$maxFixedArity = 5;
G__10419.cljs$lang$applyTo = (function (arglist__10431){
var f = cljs.core.first(arglist__10431);
var a = cljs.core.first(cljs.core.next(arglist__10431));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10431)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10431))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10431)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10431)))));
return G__10419__delegate.call(this, f, a, b, c, d, args);
});
return G__10419;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10410.call(this,f,a);
case  3 :
return apply__10411.call(this,f,a,b);
case  4 :
return apply__10412.call(this,f,a,b,c);
case  5 :
return apply__10413.call(this,f,a,b,c,d);
default:
return apply__10414.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10414.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10447){
var obj = cljs.core.first(arglist__10447);
var f = cljs.core.first(cljs.core.next(arglist__10447));
var args = cljs.core.rest(cljs.core.next(arglist__10447));
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
var not_EQ___10455 = (function (x){
return false;
});
var not_EQ___10456 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10457 = (function() { 
var G__10460__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10460 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10460__delegate.call(this, x, y, more);
};
G__10460.cljs$lang$maxFixedArity = 2;
G__10460.cljs$lang$applyTo = (function (arglist__10462){
var x = cljs.core.first(arglist__10462);
var y = cljs.core.first(cljs.core.next(arglist__10462));
var more = cljs.core.rest(cljs.core.next(arglist__10462));
return G__10460__delegate.call(this, x, y, more);
});
return G__10460;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10455.call(this,x);
case  2 :
return not_EQ___10456.call(this,x,y);
default:
return not_EQ___10457.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10457.cljs$lang$applyTo;
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
var G__10469 = pred;
var G__10470 = cljs.core.next.call(null,coll);
pred = G__10469;
coll = G__10470;
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
{var or__3548__auto____10528 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10528))
{return or__3548__auto____10528;
} else
{{
var G__10531 = pred;
var G__10532 = cljs.core.next.call(null,coll);
pred = G__10531;
coll = G__10532;
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
var G__10559 = null;
var G__10559__10560 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10559__10561 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10559__10563 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10559__10564 = (function() { 
var G__10568__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10568 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10568__delegate.call(this, x, y, zs);
};
G__10568.cljs$lang$maxFixedArity = 2;
G__10568.cljs$lang$applyTo = (function (arglist__10570){
var x = cljs.core.first(arglist__10570);
var y = cljs.core.first(cljs.core.next(arglist__10570));
var zs = cljs.core.rest(cljs.core.next(arglist__10570));
return G__10568__delegate.call(this, x, y, zs);
});
return G__10568;
})()
;
G__10559 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10559__10560.call(this);
case  1 :
return G__10559__10561.call(this,x);
case  2 :
return G__10559__10563.call(this,x,y);
default:
return G__10559__10564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10559.cljs$lang$maxFixedArity = 2;
G__10559.cljs$lang$applyTo = G__10559__10564.cljs$lang$applyTo;
return G__10559;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10573__delegate = function (args){
return x;
};
var G__10573 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10573__delegate.call(this, args);
};
G__10573.cljs$lang$maxFixedArity = 0;
G__10573.cljs$lang$applyTo = (function (arglist__10574){
var args = cljs.core.seq( arglist__10574 );;
return G__10573__delegate.call(this, args);
});
return G__10573;
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
var comp__10590 = (function (){
return cljs.core.identity;
});
var comp__10591 = (function (f){
return f;
});
var comp__10592 = (function (f,g){
return (function() {
var G__10596 = null;
var G__10596__10597 = (function (){
return f.call(null,g.call(null));
});
var G__10596__10598 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10596__10599 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10596__10600 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10596__10601 = (function() { 
var G__10609__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10609 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10609__delegate.call(this, x, y, z, args);
};
G__10609.cljs$lang$maxFixedArity = 3;
G__10609.cljs$lang$applyTo = (function (arglist__10613){
var x = cljs.core.first(arglist__10613);
var y = cljs.core.first(cljs.core.next(arglist__10613));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10613)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10613)));
return G__10609__delegate.call(this, x, y, z, args);
});
return G__10609;
})()
;
G__10596 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10596__10597.call(this);
case  1 :
return G__10596__10598.call(this,x);
case  2 :
return G__10596__10599.call(this,x,y);
case  3 :
return G__10596__10600.call(this,x,y,z);
default:
return G__10596__10601.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10596.cljs$lang$maxFixedArity = 3;
G__10596.cljs$lang$applyTo = G__10596__10601.cljs$lang$applyTo;
return G__10596;
})()
});
var comp__10593 = (function (f,g,h){
return (function() {
var G__10620 = null;
var G__10620__10621 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10620__10622 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10620__10623 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10620__10624 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10620__10625 = (function() { 
var G__10629__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10629 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10629__delegate.call(this, x, y, z, args);
};
G__10629.cljs$lang$maxFixedArity = 3;
G__10629.cljs$lang$applyTo = (function (arglist__10632){
var x = cljs.core.first(arglist__10632);
var y = cljs.core.first(cljs.core.next(arglist__10632));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10632)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10632)));
return G__10629__delegate.call(this, x, y, z, args);
});
return G__10629;
})()
;
G__10620 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10620__10621.call(this);
case  1 :
return G__10620__10622.call(this,x);
case  2 :
return G__10620__10623.call(this,x,y);
case  3 :
return G__10620__10624.call(this,x,y,z);
default:
return G__10620__10625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10620.cljs$lang$maxFixedArity = 3;
G__10620.cljs$lang$applyTo = G__10620__10625.cljs$lang$applyTo;
return G__10620;
})()
});
var comp__10594 = (function() { 
var G__10635__delegate = function (f1,f2,f3,fs){
var fs__10583 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10638__delegate = function (args){
var ret__10586 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10583),args);
var fs__10588 = cljs.core.next.call(null,fs__10583);

while(true){
if(cljs.core.truth_(fs__10588))
{{
var G__10639 = cljs.core.first.call(null,fs__10588).call(null,ret__10586);
var G__10640 = cljs.core.next.call(null,fs__10588);
ret__10586 = G__10639;
fs__10588 = G__10640;
continue;
}
} else
{return ret__10586;
}
break;
}
};
var G__10638 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10638__delegate.call(this, args);
};
G__10638.cljs$lang$maxFixedArity = 0;
G__10638.cljs$lang$applyTo = (function (arglist__10643){
var args = cljs.core.seq( arglist__10643 );;
return G__10638__delegate.call(this, args);
});
return G__10638;
})()
;
};
var G__10635 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10635__delegate.call(this, f1, f2, f3, fs);
};
G__10635.cljs$lang$maxFixedArity = 3;
G__10635.cljs$lang$applyTo = (function (arglist__10646){
var f1 = cljs.core.first(arglist__10646);
var f2 = cljs.core.first(cljs.core.next(arglist__10646));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10646)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10646)));
return G__10635__delegate.call(this, f1, f2, f3, fs);
});
return G__10635;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10590.call(this);
case  1 :
return comp__10591.call(this,f1);
case  2 :
return comp__10592.call(this,f1,f2);
case  3 :
return comp__10593.call(this,f1,f2,f3);
default:
return comp__10594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10594.cljs$lang$applyTo;
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
var partial__10651 = (function (f,arg1){
return (function() { 
var G__10659__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10659 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10659__delegate.call(this, args);
};
G__10659.cljs$lang$maxFixedArity = 0;
G__10659.cljs$lang$applyTo = (function (arglist__10663){
var args = cljs.core.seq( arglist__10663 );;
return G__10659__delegate.call(this, args);
});
return G__10659;
})()
;
});
var partial__10652 = (function (f,arg1,arg2){
return (function() { 
var G__10664__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10664 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10664__delegate.call(this, args);
};
G__10664.cljs$lang$maxFixedArity = 0;
G__10664.cljs$lang$applyTo = (function (arglist__10666){
var args = cljs.core.seq( arglist__10666 );;
return G__10664__delegate.call(this, args);
});
return G__10664;
})()
;
});
var partial__10653 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10668__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10668 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10668__delegate.call(this, args);
};
G__10668.cljs$lang$maxFixedArity = 0;
G__10668.cljs$lang$applyTo = (function (arglist__10669){
var args = cljs.core.seq( arglist__10669 );;
return G__10668__delegate.call(this, args);
});
return G__10668;
})()
;
});
var partial__10654 = (function() { 
var G__10670__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10671__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10671 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10671__delegate.call(this, args);
};
G__10671.cljs$lang$maxFixedArity = 0;
G__10671.cljs$lang$applyTo = (function (arglist__10672){
var args = cljs.core.seq( arglist__10672 );;
return G__10671__delegate.call(this, args);
});
return G__10671;
})()
;
};
var G__10670 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10670__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10670.cljs$lang$maxFixedArity = 4;
G__10670.cljs$lang$applyTo = (function (arglist__10675){
var f = cljs.core.first(arglist__10675);
var arg1 = cljs.core.first(cljs.core.next(arglist__10675));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10675)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10675))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10675))));
return G__10670__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10670;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10651.call(this,f,arg1);
case  3 :
return partial__10652.call(this,f,arg1,arg2);
case  4 :
return partial__10653.call(this,f,arg1,arg2,arg3);
default:
return partial__10654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10654.cljs$lang$applyTo;
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
var fnil__10759 = (function (f,x){
return (function() {
var G__10763 = null;
var G__10763__10764 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10763__10765 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10763__10766 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10763__10767 = (function() { 
var G__10769__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10769 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10769__delegate.call(this, a, b, c, ds);
};
G__10769.cljs$lang$maxFixedArity = 3;
G__10769.cljs$lang$applyTo = (function (arglist__10770){
var a = cljs.core.first(arglist__10770);
var b = cljs.core.first(cljs.core.next(arglist__10770));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10770)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10770)));
return G__10769__delegate.call(this, a, b, c, ds);
});
return G__10769;
})()
;
G__10763 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10763__10764.call(this,a);
case  2 :
return G__10763__10765.call(this,a,b);
case  3 :
return G__10763__10766.call(this,a,b,c);
default:
return G__10763__10767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10763.cljs$lang$maxFixedArity = 3;
G__10763.cljs$lang$applyTo = G__10763__10767.cljs$lang$applyTo;
return G__10763;
})()
});
var fnil__10760 = (function (f,x,y){
return (function() {
var G__10774 = null;
var G__10774__10785 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10774__10786 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10774__10787 = (function() { 
var G__10794__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10794 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10794__delegate.call(this, a, b, c, ds);
};
G__10794.cljs$lang$maxFixedArity = 3;
G__10794.cljs$lang$applyTo = (function (arglist__10796){
var a = cljs.core.first(arglist__10796);
var b = cljs.core.first(cljs.core.next(arglist__10796));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10796)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10796)));
return G__10794__delegate.call(this, a, b, c, ds);
});
return G__10794;
})()
;
G__10774 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10774__10785.call(this,a,b);
case  3 :
return G__10774__10786.call(this,a,b,c);
default:
return G__10774__10787.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10774.cljs$lang$maxFixedArity = 3;
G__10774.cljs$lang$applyTo = G__10774__10787.cljs$lang$applyTo;
return G__10774;
})()
});
var fnil__10761 = (function (f,x,y,z){
return (function() {
var G__10800 = null;
var G__10800__10801 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10800__10802 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10800__10803 = (function() { 
var G__10912__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10912 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10912__delegate.call(this, a, b, c, ds);
};
G__10912.cljs$lang$maxFixedArity = 3;
G__10912.cljs$lang$applyTo = (function (arglist__10914){
var a = cljs.core.first(arglist__10914);
var b = cljs.core.first(cljs.core.next(arglist__10914));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10914)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10914)));
return G__10912__delegate.call(this, a, b, c, ds);
});
return G__10912;
})()
;
G__10800 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10800__10801.call(this,a,b);
case  3 :
return G__10800__10802.call(this,a,b,c);
default:
return G__10800__10803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10800.cljs$lang$maxFixedArity = 3;
G__10800.cljs$lang$applyTo = G__10800__10803.cljs$lang$applyTo;
return G__10800;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10759.call(this,f,x);
case  3 :
return fnil__10760.call(this,f,x,y);
case  4 :
return fnil__10761.call(this,f,x,y,z);
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
var mapi__10925 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10923 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10923))
{var s__10924 = temp__3698__auto____10923;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10924)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10924)));
} else
{return null;
}
})));
});

return mapi__10925.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10943 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10943))
{var s__10946 = temp__3698__auto____10943;

var x__10947 = f.call(null,cljs.core.first.call(null,s__10946));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10947)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10946));
} else
{return cljs.core.cons.call(null,x__10947,keep.call(null,f,cljs.core.rest.call(null,s__10946)));
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
var keepi__10978 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10969 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10969))
{var s__10970 = temp__3698__auto____10969;

var x__10977 = f.call(null,idx,cljs.core.first.call(null,s__10970));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10977)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10970));
} else
{return cljs.core.cons.call(null,x__10977,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10970)));
}
} else
{return null;
}
})));
});

return keepi__10978.call(null,0,coll);
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
var every_pred__11117 = (function (p){
return (function() {
var ep1 = null;
var ep1__11123 = (function (){
return true;
});
var ep1__11125 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11126 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10990 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10990))
{return p.call(null,y);
} else
{return and__3546__auto____10990;
}
})());
});
var ep1__11127 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10997 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10997))
{var and__3546__auto____10998 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10998))
{return p.call(null,z);
} else
{return and__3546__auto____10998;
}
} else
{return and__3546__auto____10997;
}
})());
});
var ep1__11128 = (function() { 
var G__11142__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11027 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11027))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11027;
}
})());
};
var G__11142 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11142__delegate.call(this, x, y, z, args);
};
G__11142.cljs$lang$maxFixedArity = 3;
G__11142.cljs$lang$applyTo = (function (arglist__11144){
var x = cljs.core.first(arglist__11144);
var y = cljs.core.first(cljs.core.next(arglist__11144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11144)));
return G__11142__delegate.call(this, x, y, z, args);
});
return G__11142;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11123.call(this);
case  1 :
return ep1__11125.call(this,x);
case  2 :
return ep1__11126.call(this,x,y);
case  3 :
return ep1__11127.call(this,x,y,z);
default:
return ep1__11128.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11128.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11118 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11155 = (function (){
return true;
});
var ep2__11157 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11030 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11030))
{return p2.call(null,x);
} else
{return and__3546__auto____11030;
}
})());
});
var ep2__11158 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11033 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11033))
{var and__3546__auto____11035 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11035))
{var and__3546__auto____11036 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11036))
{return p2.call(null,y);
} else
{return and__3546__auto____11036;
}
} else
{return and__3546__auto____11035;
}
} else
{return and__3546__auto____11033;
}
})());
});
var ep2__11159 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11038 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11038))
{var and__3546__auto____11040 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11040))
{var and__3546__auto____11041 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11041))
{var and__3546__auto____11042 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11042))
{var and__3546__auto____11043 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11043))
{return p2.call(null,z);
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
{return and__3546__auto____11040;
}
} else
{return and__3546__auto____11038;
}
})());
});
var ep2__11160 = (function() { 
var G__11170__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11046 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11046))
{return cljs.core.every_QMARK_.call(null,(function (p1__10961_SHARP_){
var and__3546__auto____11048 = p1.call(null,p1__10961_SHARP_);

if(cljs.core.truth_(and__3546__auto____11048))
{return p2.call(null,p1__10961_SHARP_);
} else
{return and__3546__auto____11048;
}
}),args);
} else
{return and__3546__auto____11046;
}
})());
};
var G__11170 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11170__delegate.call(this, x, y, z, args);
};
G__11170.cljs$lang$maxFixedArity = 3;
G__11170.cljs$lang$applyTo = (function (arglist__11172){
var x = cljs.core.first(arglist__11172);
var y = cljs.core.first(cljs.core.next(arglist__11172));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11172)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11172)));
return G__11170__delegate.call(this, x, y, z, args);
});
return G__11170;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11155.call(this);
case  1 :
return ep2__11157.call(this,x);
case  2 :
return ep2__11158.call(this,x,y);
case  3 :
return ep2__11159.call(this,x,y,z);
default:
return ep2__11160.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11160.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11119 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11185 = (function (){
return true;
});
var ep3__11186 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11053 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11053))
{var and__3546__auto____11054 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11054))
{return p3.call(null,x);
} else
{return and__3546__auto____11054;
}
} else
{return and__3546__auto____11053;
}
})());
});
var ep3__11187 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11057 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11057))
{var and__3546__auto____11059 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11059))
{var and__3546__auto____11062 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11062))
{var and__3546__auto____11066 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11066))
{var and__3546__auto____11068 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11068))
{return p3.call(null,y);
} else
{return and__3546__auto____11068;
}
} else
{return and__3546__auto____11066;
}
} else
{return and__3546__auto____11062;
}
} else
{return and__3546__auto____11059;
}
} else
{return and__3546__auto____11057;
}
})());
});
var ep3__11189 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11070 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11070))
{var and__3546__auto____11071 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11071))
{var and__3546__auto____11073 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11073))
{var and__3546__auto____11074 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11074))
{var and__3546__auto____11076 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11076))
{var and__3546__auto____11077 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11077))
{var and__3546__auto____11079 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11079))
{var and__3546__auto____11081 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11081))
{return p3.call(null,z);
} else
{return and__3546__auto____11081;
}
} else
{return and__3546__auto____11079;
}
} else
{return and__3546__auto____11077;
}
} else
{return and__3546__auto____11076;
}
} else
{return and__3546__auto____11074;
}
} else
{return and__3546__auto____11073;
}
} else
{return and__3546__auto____11071;
}
} else
{return and__3546__auto____11070;
}
})());
});
var ep3__11190 = (function() { 
var G__11203__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11083 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11083))
{return cljs.core.every_QMARK_.call(null,(function (p1__10962_SHARP_){
var and__3546__auto____11084 = p1.call(null,p1__10962_SHARP_);

if(cljs.core.truth_(and__3546__auto____11084))
{var and__3546__auto____11085 = p2.call(null,p1__10962_SHARP_);

if(cljs.core.truth_(and__3546__auto____11085))
{return p3.call(null,p1__10962_SHARP_);
} else
{return and__3546__auto____11085;
}
} else
{return and__3546__auto____11084;
}
}),args);
} else
{return and__3546__auto____11083;
}
})());
};
var G__11203 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11203__delegate.call(this, x, y, z, args);
};
G__11203.cljs$lang$maxFixedArity = 3;
G__11203.cljs$lang$applyTo = (function (arglist__11210){
var x = cljs.core.first(arglist__11210);
var y = cljs.core.first(cljs.core.next(arglist__11210));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11210)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11210)));
return G__11203__delegate.call(this, x, y, z, args);
});
return G__11203;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11185.call(this);
case  1 :
return ep3__11186.call(this,x);
case  2 :
return ep3__11187.call(this,x,y);
case  3 :
return ep3__11189.call(this,x,y,z);
default:
return ep3__11190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11190.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11120 = (function() { 
var G__11220__delegate = function (p1,p2,p3,ps){
var ps__11087 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11222 = (function (){
return true;
});
var epn__11223 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10963_SHARP_){
return p1__10963_SHARP_.call(null,x);
}),ps__11087);
});
var epn__11224 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10965_SHARP_){
var and__3546__auto____11090 = p1__10965_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11090))
{return p1__10965_SHARP_.call(null,y);
} else
{return and__3546__auto____11090;
}
}),ps__11087);
});
var epn__11225 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10966_SHARP_){
var and__3546__auto____11092 = p1__10966_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11092))
{var and__3546__auto____11093 = p1__10966_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11093))
{return p1__10966_SHARP_.call(null,z);
} else
{return and__3546__auto____11093;
}
} else
{return and__3546__auto____11092;
}
}),ps__11087);
});
var epn__11226 = (function() { 
var G__11240__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11094 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11094))
{return cljs.core.every_QMARK_.call(null,(function (p1__10967_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10967_SHARP_,args);
}),ps__11087);
} else
{return and__3546__auto____11094;
}
})());
};
var G__11240 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11240__delegate.call(this, x, y, z, args);
};
G__11240.cljs$lang$maxFixedArity = 3;
G__11240.cljs$lang$applyTo = (function (arglist__11247){
var x = cljs.core.first(arglist__11247);
var y = cljs.core.first(cljs.core.next(arglist__11247));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11247)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11247)));
return G__11240__delegate.call(this, x, y, z, args);
});
return G__11240;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11222.call(this);
case  1 :
return epn__11223.call(this,x);
case  2 :
return epn__11224.call(this,x,y);
case  3 :
return epn__11225.call(this,x,y,z);
default:
return epn__11226.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11226.cljs$lang$applyTo;
return epn;
})()
};
var G__11220 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11220__delegate.call(this, p1, p2, p3, ps);
};
G__11220.cljs$lang$maxFixedArity = 3;
G__11220.cljs$lang$applyTo = (function (arglist__11251){
var p1 = cljs.core.first(arglist__11251);
var p2 = cljs.core.first(cljs.core.next(arglist__11251));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11251)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11251)));
return G__11220__delegate.call(this, p1, p2, p3, ps);
});
return G__11220;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11117.call(this,p1);
case  2 :
return every_pred__11118.call(this,p1,p2);
case  3 :
return every_pred__11119.call(this,p1,p2,p3);
default:
return every_pred__11120.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11120.cljs$lang$applyTo;
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
var some_fn__11503 = (function (p){
return (function() {
var sp1 = null;
var sp1__11515 = (function (){
return null;
});
var sp1__11516 = (function (x){
return p.call(null,x);
});
var sp1__11517 = (function (x,y){
var or__3548__auto____11265 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11265))
{return or__3548__auto____11265;
} else
{return p.call(null,y);
}
});
var sp1__11518 = (function (x,y,z){
var or__3548__auto____11267 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11267))
{return or__3548__auto____11267;
} else
{var or__3548__auto____11269 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11269))
{return or__3548__auto____11269;
} else
{return p.call(null,z);
}
}
});
var sp1__11519 = (function() { 
var G__11530__delegate = function (x,y,z,args){
var or__3548__auto____11270 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11270))
{return or__3548__auto____11270;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11530 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11530__delegate.call(this, x, y, z, args);
};
G__11530.cljs$lang$maxFixedArity = 3;
G__11530.cljs$lang$applyTo = (function (arglist__11532){
var x = cljs.core.first(arglist__11532);
var y = cljs.core.first(cljs.core.next(arglist__11532));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11532)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11532)));
return G__11530__delegate.call(this, x, y, z, args);
});
return G__11530;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11515.call(this);
case  1 :
return sp1__11516.call(this,x);
case  2 :
return sp1__11517.call(this,x,y);
case  3 :
return sp1__11518.call(this,x,y,z);
default:
return sp1__11519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11519.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11504 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11539 = (function (){
return null;
});
var sp2__11540 = (function (x){
var or__3548__auto____11274 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11274))
{return or__3548__auto____11274;
} else
{return p2.call(null,x);
}
});
var sp2__11541 = (function (x,y){
var or__3548__auto____11282 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11282))
{return or__3548__auto____11282;
} else
{var or__3548__auto____11285 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11285))
{return or__3548__auto____11285;
} else
{var or__3548__auto____11286 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11286))
{return or__3548__auto____11286;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11542 = (function (x,y,z){
var or__3548__auto____11378 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11378))
{return or__3548__auto____11378;
} else
{var or__3548__auto____11384 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11384))
{return or__3548__auto____11384;
} else
{var or__3548__auto____11386 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11386))
{return or__3548__auto____11386;
} else
{var or__3548__auto____11393 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11393))
{return or__3548__auto____11393;
} else
{var or__3548__auto____11394 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11394))
{return or__3548__auto____11394;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11543 = (function() { 
var G__11550__delegate = function (x,y,z,args){
var or__3548__auto____11397 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11397))
{return or__3548__auto____11397;
} else
{return cljs.core.some.call(null,(function (p1__10982_SHARP_){
var or__3548__auto____11400 = p1.call(null,p1__10982_SHARP_);

if(cljs.core.truth_(or__3548__auto____11400))
{return or__3548__auto____11400;
} else
{return p2.call(null,p1__10982_SHARP_);
}
}),args);
}
};
var G__11550 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11550__delegate.call(this, x, y, z, args);
};
G__11550.cljs$lang$maxFixedArity = 3;
G__11550.cljs$lang$applyTo = (function (arglist__11559){
var x = cljs.core.first(arglist__11559);
var y = cljs.core.first(cljs.core.next(arglist__11559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11559)));
return G__11550__delegate.call(this, x, y, z, args);
});
return G__11550;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11539.call(this);
case  1 :
return sp2__11540.call(this,x);
case  2 :
return sp2__11541.call(this,x,y);
case  3 :
return sp2__11542.call(this,x,y,z);
default:
return sp2__11543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11543.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11505 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11560 = (function (){
return null;
});
var sp3__11561 = (function (x){
var or__3548__auto____11402 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11402))
{return or__3548__auto____11402;
} else
{var or__3548__auto____11407 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11407))
{return or__3548__auto____11407;
} else
{return p3.call(null,x);
}
}
});
var sp3__11562 = (function (x,y){
var or__3548__auto____11419 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11419))
{return or__3548__auto____11419;
} else
{var or__3548__auto____11422 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11422))
{return or__3548__auto____11422;
} else
{var or__3548__auto____11423 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11423))
{return or__3548__auto____11423;
} else
{var or__3548__auto____11424 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11424))
{return or__3548__auto____11424;
} else
{var or__3548__auto____11425 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11425))
{return or__3548__auto____11425;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11563 = (function (x,y,z){
var or__3548__auto____11426 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11426))
{return or__3548__auto____11426;
} else
{var or__3548__auto____11428 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11428))
{return or__3548__auto____11428;
} else
{var or__3548__auto____11429 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11429))
{return or__3548__auto____11429;
} else
{var or__3548__auto____11436 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11436))
{return or__3548__auto____11436;
} else
{var or__3548__auto____11438 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11438))
{return or__3548__auto____11438;
} else
{var or__3548__auto____11444 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11444))
{return or__3548__auto____11444;
} else
{var or__3548__auto____11450 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11450))
{return or__3548__auto____11450;
} else
{var or__3548__auto____11453 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11453))
{return or__3548__auto____11453;
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
var sp3__11564 = (function() { 
var G__11573__delegate = function (x,y,z,args){
var or__3548__auto____11461 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11461))
{return or__3548__auto____11461;
} else
{return cljs.core.some.call(null,(function (p1__10983_SHARP_){
var or__3548__auto____11463 = p1.call(null,p1__10983_SHARP_);

if(cljs.core.truth_(or__3548__auto____11463))
{return or__3548__auto____11463;
} else
{var or__3548__auto____11464 = p2.call(null,p1__10983_SHARP_);

if(cljs.core.truth_(or__3548__auto____11464))
{return or__3548__auto____11464;
} else
{return p3.call(null,p1__10983_SHARP_);
}
}
}),args);
}
};
var G__11573 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11573__delegate.call(this, x, y, z, args);
};
G__11573.cljs$lang$maxFixedArity = 3;
G__11573.cljs$lang$applyTo = (function (arglist__11577){
var x = cljs.core.first(arglist__11577);
var y = cljs.core.first(cljs.core.next(arglist__11577));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11577)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11577)));
return G__11573__delegate.call(this, x, y, z, args);
});
return G__11573;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11560.call(this);
case  1 :
return sp3__11561.call(this,x);
case  2 :
return sp3__11562.call(this,x,y);
case  3 :
return sp3__11563.call(this,x,y,z);
default:
return sp3__11564.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11564.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11506 = (function() { 
var G__11579__delegate = function (p1,p2,p3,ps){
var ps__11471 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11585 = (function (){
return null;
});
var spn__11586 = (function (x){
return cljs.core.some.call(null,(function (p1__10984_SHARP_){
return p1__10984_SHARP_.call(null,x);
}),ps__11471);
});
var spn__11587 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10985_SHARP_){
var or__3548__auto____11496 = p1__10985_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11496))
{return or__3548__auto____11496;
} else
{return p1__10985_SHARP_.call(null,y);
}
}),ps__11471);
});
var spn__11588 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10986_SHARP_){
var or__3548__auto____11497 = p1__10986_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11497))
{return or__3548__auto____11497;
} else
{var or__3548__auto____11498 = p1__10986_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11498))
{return or__3548__auto____11498;
} else
{return p1__10986_SHARP_.call(null,z);
}
}
}),ps__11471);
});
var spn__11590 = (function() { 
var G__11602__delegate = function (x,y,z,args){
var or__3548__auto____11499 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11499))
{return or__3548__auto____11499;
} else
{return cljs.core.some.call(null,(function (p1__10987_SHARP_){
return cljs.core.some.call(null,p1__10987_SHARP_,args);
}),ps__11471);
}
};
var G__11602 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11602__delegate.call(this, x, y, z, args);
};
G__11602.cljs$lang$maxFixedArity = 3;
G__11602.cljs$lang$applyTo = (function (arglist__11605){
var x = cljs.core.first(arglist__11605);
var y = cljs.core.first(cljs.core.next(arglist__11605));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11605)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11605)));
return G__11602__delegate.call(this, x, y, z, args);
});
return G__11602;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11585.call(this);
case  1 :
return spn__11586.call(this,x);
case  2 :
return spn__11587.call(this,x,y);
case  3 :
return spn__11588.call(this,x,y,z);
default:
return spn__11590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11590.cljs$lang$applyTo;
return spn;
})()
};
var G__11579 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11579__delegate.call(this, p1, p2, p3, ps);
};
G__11579.cljs$lang$maxFixedArity = 3;
G__11579.cljs$lang$applyTo = (function (arglist__11607){
var p1 = cljs.core.first(arglist__11607);
var p2 = cljs.core.first(cljs.core.next(arglist__11607));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11607)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11607)));
return G__11579__delegate.call(this, p1, p2, p3, ps);
});
return G__11579;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11503.call(this,p1);
case  2 :
return some_fn__11504.call(this,p1,p2);
case  3 :
return some_fn__11505.call(this,p1,p2,p3);
default:
return some_fn__11506.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11506.cljs$lang$applyTo;
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
var map__11694 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11616))
{var s__11617 = temp__3698__auto____11616;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11617)),map.call(null,f,cljs.core.rest.call(null,s__11617)));
} else
{return null;
}
})));
});
var map__11695 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11648 = cljs.core.seq.call(null,c1);
var s2__11650 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11652 = s1__11648;

if(cljs.core.truth_(and__3546__auto____11652))
{return s2__11650;
} else
{return and__3546__auto____11652;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11648),cljs.core.first.call(null,s2__11650)),map.call(null,f,cljs.core.rest.call(null,s1__11648),cljs.core.rest.call(null,s2__11650)));
} else
{return null;
}
})));
});
var map__11696 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11668 = cljs.core.seq.call(null,c1);
var s2__11670 = cljs.core.seq.call(null,c2);
var s3__11671 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11672 = s1__11668;

if(cljs.core.truth_(and__3546__auto____11672))
{var and__3546__auto____11673 = s2__11670;

if(cljs.core.truth_(and__3546__auto____11673))
{return s3__11671;
} else
{return and__3546__auto____11673;
}
} else
{return and__3546__auto____11672;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11668),cljs.core.first.call(null,s2__11670),cljs.core.first.call(null,s3__11671)),map.call(null,f,cljs.core.rest.call(null,s1__11668),cljs.core.rest.call(null,s2__11670),cljs.core.rest.call(null,s3__11671)));
} else
{return null;
}
})));
});
var map__11697 = (function() { 
var G__11717__delegate = function (f,c1,c2,c3,colls){
var step__11688 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11680 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11680)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11680),step.call(null,map.call(null,cljs.core.rest,ss__11680)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11257_SHARP_){
return cljs.core.apply.call(null,f,p1__11257_SHARP_);
}),step__11688.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11717 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11717__delegate.call(this, f, c1, c2, c3, colls);
};
G__11717.cljs$lang$maxFixedArity = 4;
G__11717.cljs$lang$applyTo = (function (arglist__11720){
var f = cljs.core.first(arglist__11720);
var c1 = cljs.core.first(cljs.core.next(arglist__11720));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11720)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11720))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11720))));
return G__11717__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11717;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11694.call(this,f,c1);
case  3 :
return map__11695.call(this,f,c1,c2);
case  4 :
return map__11696.call(this,f,c1,c2,c3);
default:
return map__11697.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11697.cljs$lang$applyTo;
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
{var s__11727 = temp__3698__auto____11725;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11727),take.call(null,(n - 1),cljs.core.rest.call(null,s__11727)));
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
var step__11746 = (function (n,coll){
while(true){
var s__11744 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11745 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11745))
{return s__11744;
} else
{return and__3546__auto____11745;
}
})()))
{{
var G__11748 = (n - 1);
var G__11749 = cljs.core.rest.call(null,s__11744);
n = G__11748;
coll = G__11749;
continue;
}
} else
{return s__11744;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11746.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11756 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11757 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11756.call(this,n);
case  2 :
return drop_last__11757.call(this,n,s);
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
var s__11833 = cljs.core.seq.call(null,coll);
var lead__11834 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11834))
{{
var G__11837 = cljs.core.next.call(null,s__11833);
var G__11838 = cljs.core.next.call(null,lead__11834);
s__11833 = G__11837;
lead__11834 = G__11838;
continue;
}
} else
{return s__11833;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11846 = (function (pred,coll){
while(true){
var s__11843 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11844 = s__11843;

if(cljs.core.truth_(and__3546__auto____11844))
{return pred.call(null,cljs.core.first.call(null,s__11843));
} else
{return and__3546__auto____11844;
}
})()))
{{
var G__11849 = pred;
var G__11850 = cljs.core.rest.call(null,s__11843);
pred = G__11849;
coll = G__11850;
continue;
}
} else
{return s__11843;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11846.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11855 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11855))
{var s__11857 = temp__3698__auto____11855;

return cljs.core.concat.call(null,s__11857,cycle.call(null,s__11857));
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
var repeat__11869 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11871 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11869.call(this,n);
case  2 :
return repeat__11871.call(this,n,x);
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
var repeatedly__11877 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11878 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11877.call(this,n);
case  2 :
return repeatedly__11878.call(this,n,f);
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
var interleave__11906 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11891 = cljs.core.seq.call(null,c1);
var s2__11892 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11893 = s1__11891;

if(cljs.core.truth_(and__3546__auto____11893))
{return s2__11892;
} else
{return and__3546__auto____11893;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11891),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11892),interleave.call(null,cljs.core.rest.call(null,s1__11891),cljs.core.rest.call(null,s2__11892))));
} else
{return null;
}
})));
});
var interleave__11907 = (function() { 
var G__11912__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11898 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11898)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11898),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11898)));
} else
{return null;
}
})));
};
var G__11912 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11912__delegate.call(this, c1, c2, colls);
};
G__11912.cljs$lang$maxFixedArity = 2;
G__11912.cljs$lang$applyTo = (function (arglist__11913){
var c1 = cljs.core.first(arglist__11913);
var c2 = cljs.core.first(cljs.core.next(arglist__11913));
var colls = cljs.core.rest(cljs.core.next(arglist__11913));
return G__11912__delegate.call(this, c1, c2, colls);
});
return G__11912;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11906.call(this,c1,c2);
default:
return interleave__11907.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11907.cljs$lang$applyTo;
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
var cat__11958 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11955 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11955))
{var coll__11957 = temp__3695__auto____11955;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11957),cat.call(null,cljs.core.rest.call(null,coll__11957),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11958.call(null,null,colls);
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
G__11973.cljs$lang$applyTo = (function (arglist__11977){
var f = cljs.core.first(arglist__11977);
var coll = cljs.core.first(cljs.core.next(arglist__11977));
var colls = cljs.core.rest(cljs.core.next(arglist__11977));
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
var temp__3698__auto____11980 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11980))
{var s__11981 = temp__3698__auto____11980;

var f__11982 = cljs.core.first.call(null,s__11981);
var r__11983 = cljs.core.rest.call(null,s__11981);

if(cljs.core.truth_(pred.call(null,f__11982)))
{return cljs.core.cons.call(null,f__11982,filter.call(null,pred,r__11983));
} else
{return filter.call(null,pred,r__11983);
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
var walk__11997 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11997.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11994_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11994_SHARP_));
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
var partition__12023 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12024 = (function (n,step,coll){
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
var partition__12025 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12018 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12018))
{var s__12019 = temp__3698__auto____12018;

var p__12020 = cljs.core.take.call(null,n,s__12019);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12020))))
{return cljs.core.cons.call(null,p__12020,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12019)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12020,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12023.call(this,n,step);
case  3 :
return partition__12024.call(this,n,step,pad);
case  4 :
return partition__12025.call(this,n,step,pad,coll);
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
var get_in__12187 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12188 = (function (m,ks,not_found){
var sentinel__12180 = cljs.core.lookup_sentinel;
var m__12181 = m;
var ks__12182 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12182))
{var m__12184 = cljs.core.get.call(null,m__12181,cljs.core.first.call(null,ks__12182),sentinel__12180);

if(cljs.core.truth_((sentinel__12180 === m__12184)))
{return not_found;
} else
{{
var G__12191 = sentinel__12180;
var G__12192 = m__12184;
var G__12193 = cljs.core.next.call(null,ks__12182);
sentinel__12180 = G__12191;
m__12181 = G__12192;
ks__12182 = G__12193;
continue;
}
}
} else
{return m__12181;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12187.call(this,m,ks);
case  3 :
return get_in__12188.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12196,v){
var vec__12197__12198 = p__12196;
var k__12199 = cljs.core.nth.call(null,vec__12197__12198,0,null);
var ks__12200 = cljs.core.nthnext.call(null,vec__12197__12198,1);

if(cljs.core.truth_(ks__12200))
{return cljs.core.assoc.call(null,m,k__12199,assoc_in.call(null,cljs.core.get.call(null,m,k__12199),ks__12200,v));
} else
{return cljs.core.assoc.call(null,m,k__12199,v);
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
var update_in__delegate = function (m,p__12207,f,args){
var vec__12209__12210 = p__12207;
var k__12212 = cljs.core.nth.call(null,vec__12209__12210,0,null);
var ks__12213 = cljs.core.nthnext.call(null,vec__12209__12210,1);

if(cljs.core.truth_(ks__12213))
{return cljs.core.assoc.call(null,m,k__12212,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12212),ks__12213,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12212,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12212),args));
}
};
var update_in = function (m,p__12207,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12207, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12217){
var m = cljs.core.first(arglist__12217);
var p__12207 = cljs.core.first(cljs.core.next(arglist__12217));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12217)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12217)));
return update_in__delegate.call(this, m, p__12207, f, args);
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
var this__12226 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12348 = null;
var G__12348__12349 = (function (coll,k){
var this__12227 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12348__12350 = (function (coll,k,not_found){
var this__12228 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12348 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12348__12349.call(this,coll,k);
case  3 :
return G__12348__12350.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12348;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12229 = this;
var new_array__12230 = cljs.core.aclone.call(null,this__12229.array);

(new_array__12230[k] = v);
return (new cljs.core.Vector(this__12229.meta,new_array__12230));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12352 = null;
var G__12352__12353 = (function (coll,k){
var this__12231 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12352__12354 = (function (coll,k,not_found){
var this__12232 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12352 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12352__12353.call(this,coll,k);
case  3 :
return G__12352__12354.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12352;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12234 = this;
var new_array__12235 = cljs.core.aclone.call(null,this__12234.array);

new_array__12235.push(o);
return (new cljs.core.Vector(this__12234.meta,new_array__12235));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12356 = null;
var G__12356__12357 = (function (v,f){
var this__12238 = this;
return cljs.core.ci_reduce.call(null,this__12238.array,f);
});
var G__12356__12358 = (function (v,f,start){
var this__12239 = this;
return cljs.core.ci_reduce.call(null,this__12239.array,f,start);
});
G__12356 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12356__12357.call(this,v,f);
case  3 :
return G__12356__12358.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12356;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12241 = this;
if(cljs.core.truth_((this__12241.array.length > 0)))
{var vector_seq__12245 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12241.array.length)))
{return cljs.core.cons.call(null,(this__12241.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12245.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12246 = this;
return this__12246.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12247 = this;
var count__12248 = this__12247.array.length;

if(cljs.core.truth_((count__12248 > 0)))
{return (this__12247.array[(count__12248 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12337 = this;
if(cljs.core.truth_((this__12337.array.length > 0)))
{var new_array__12338 = cljs.core.aclone.call(null,this__12337.array);

new_array__12338.pop();
return (new cljs.core.Vector(this__12337.meta,new_array__12338));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12339 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12340 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12341 = this;
return (new cljs.core.Vector(meta,this__12341.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12342 = this;
return this__12342.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12360 = null;
var G__12360__12361 = (function (coll,n){
var this__12343 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12344 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12344))
{return (n < this__12343.array.length);
} else
{return and__3546__auto____12344;
}
})()))
{return (this__12343.array[n]);
} else
{return null;
}
});
var G__12360__12362 = (function (coll,n,not_found){
var this__12345 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12346 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12346))
{return (n < this__12345.array.length);
} else
{return and__3546__auto____12346;
}
})()))
{return (this__12345.array[n]);
} else
{return not_found;
}
});
G__12360 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12360__12361.call(this,coll,n);
case  3 :
return G__12360__12362.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12360;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12347 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12347.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12365){
var args = cljs.core.seq( arglist__12365 );;
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
var this__12642 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12711 = null;
var G__12711__12713 = (function (coll,k){
var this__12644 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12711__12714 = (function (coll,k,not_found){
var this__12646 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12711 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12711__12713.call(this,coll,k);
case  3 :
return G__12711__12714.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12711;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12647 = this;
var v_pos__12649 = (this__12647.start + key);

return (new cljs.core.Subvec(this__12647.meta,cljs.core._assoc.call(null,this__12647.v,v_pos__12649,val),this__12647.start,((this__12647.end > (v_pos__12649 + 1)) ? this__12647.end : (v_pos__12649 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12719 = null;
var G__12719__12720 = (function (coll,k){
var this__12651 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12719__12721 = (function (coll,k,not_found){
var this__12653 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12719 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12719__12720.call(this,coll,k);
case  3 :
return G__12719__12721.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12719;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12656 = this;
return (new cljs.core.Subvec(this__12656.meta,cljs.core._assoc_n.call(null,this__12656.v,this__12656.end,o),this__12656.start,(this__12656.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12727 = null;
var G__12727__12728 = (function (coll,f){
var this__12661 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12727__12729 = (function (coll,f,start){
var this__12662 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12727 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12727__12728.call(this,coll,f);
case  3 :
return G__12727__12729.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12727;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12664 = this;
var subvec_seq__12667 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12664.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12664.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12667.call(null,this__12664.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12670 = this;
return (this__12670.end - this__12670.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12671 = this;
return cljs.core._nth.call(null,this__12671.v,(this__12671.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12674 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12674.start,this__12674.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12674.meta,this__12674.v,this__12674.start,(this__12674.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12676 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12679 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12680 = this;
return (new cljs.core.Subvec(meta,this__12680.v,this__12680.start,this__12680.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12683 = this;
return this__12683.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12737 = null;
var G__12737__12738 = (function (coll,n){
var this__12701 = this;
return cljs.core._nth.call(null,this__12701.v,(this__12701.start + n));
});
var G__12737__12739 = (function (coll,n,not_found){
var this__12703 = this;
return cljs.core._nth.call(null,this__12703.v,(this__12703.start + n),not_found);
});
G__12737 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12737__12738.call(this,coll,n);
case  3 :
return G__12737__12739.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12737;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12709 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12709.meta);
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
var subvec__12756 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12757 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12756.call(this,v,start);
case  3 :
return subvec__12757.call(this,v,start,end);
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
var this__12810 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12814 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12817 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12818 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12818.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12833 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12835 = this;
return cljs.core._first.call(null,this__12835.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12838 = this;
var temp__3695__auto____12840 = cljs.core.next.call(null,this__12838.front);

if(cljs.core.truth_(temp__3695__auto____12840))
{var f1__12841 = temp__3695__auto____12840;

return (new cljs.core.PersistentQueueSeq(this__12838.meta,f1__12841,this__12838.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12838.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12838.meta,this__12838.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12842 = this;
return this__12842.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12844 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12844.front,this__12844.rear));
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
var this__12904 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12910 = this;
if(cljs.core.truth_(this__12910.front))
{return (new cljs.core.PersistentQueue(this__12910.meta,(this__12910.count + 1),this__12910.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12915 = this__12910.rear;

if(cljs.core.truth_(or__3548__auto____12915))
{return or__3548__auto____12915;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12910.meta,(this__12910.count + 1),cljs.core.conj.call(null,this__12910.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12920 = this;
var rear__12921 = cljs.core.seq.call(null,this__12920.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12922 = this__12920.front;

if(cljs.core.truth_(or__3548__auto____12922))
{return or__3548__auto____12922;
} else
{return rear__12921;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12920.front,cljs.core.seq.call(null,rear__12921)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12927 = this;
return this__12927.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12928 = this;
return cljs.core._first.call(null,this__12928.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12929 = this;
if(cljs.core.truth_(this__12929.front))
{var temp__3695__auto____12931 = cljs.core.next.call(null,this__12929.front);

if(cljs.core.truth_(temp__3695__auto____12931))
{var f1__12932 = temp__3695__auto____12931;

return (new cljs.core.PersistentQueue(this__12929.meta,(this__12929.count - 1),f1__12932,this__12929.rear));
} else
{return (new cljs.core.PersistentQueue(this__12929.meta,(this__12929.count - 1),cljs.core.seq.call(null,this__12929.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12935 = this;
return cljs.core.first.call(null,this__12935.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12936 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12937 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12938 = this;
return (new cljs.core.PersistentQueue(meta,this__12938.count,this__12938.front,this__12938.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12939 = this;
return this__12939.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12940 = this;
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
var this__12949 = this;
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
var len__12957 = array.length;

var i__12959 = 0;

while(true){
if(cljs.core.truth_((i__12959 < len__12957)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12959]))))
{return i__12959;
} else
{{
var G__12966 = (i__12959 + incr);
i__12959 = G__12966;
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
var obj_map_contains_key_QMARK___12970 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12971 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12968 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12968))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12968;
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
return obj_map_contains_key_QMARK___12970.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12971.call(this,k,strobj,true_val,false_val);
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
var this__13012 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13095 = null;
var G__13095__13096 = (function (coll,k){
var this__13017 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13095__13097 = (function (coll,k,not_found){
var this__13020 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13020.strobj,(this__13020.strobj[k]),not_found);
});
G__13095 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13095__13096.call(this,coll,k);
case  3 :
return G__13095__13097.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13095;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13023 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13029 = goog.object.clone.call(null,this__13023.strobj);
var overwrite_QMARK___13030 = new_strobj__13029.hasOwnProperty(k);

(new_strobj__13029[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13030))
{return (new cljs.core.ObjMap(this__13023.meta,this__13023.keys,new_strobj__13029));
} else
{var new_keys__13037 = cljs.core.aclone.call(null,this__13023.keys);

new_keys__13037.push(k);
return (new cljs.core.ObjMap(this__13023.meta,new_keys__13037,new_strobj__13029));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13023.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13043 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13043.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13099 = null;
var G__13099__13100 = (function (coll,k){
var this__13046 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13099__13101 = (function (coll,k,not_found){
var this__13048 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13099 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13099__13100.call(this,coll,k);
case  3 :
return G__13099__13101.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13099;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13051 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13053 = this;
if(cljs.core.truth_((this__13053.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12977_SHARP_){
return cljs.core.vector.call(null,p1__12977_SHARP_,(this__13053.strobj[p1__12977_SHARP_]));
}),this__13053.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13059 = this;
return this__13059.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13060 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13063 = this;
return (new cljs.core.ObjMap(meta,this__13063.keys,this__13063.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13065 = this;
return this__13065.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13066 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13066.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13073 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13074 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13074))
{return this__13073.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13074;
}
})()))
{var new_keys__13082 = cljs.core.aclone.call(null,this__13073.keys);
var new_strobj__13083 = goog.object.clone.call(null,this__13073.strobj);

new_keys__13082.splice(cljs.core.scan_array.call(null,1,k,new_keys__13082),1);
cljs.core.js_delete.call(null,new_strobj__13083,k);
return (new cljs.core.ObjMap(this__13073.meta,new_keys__13082,new_strobj__13083));
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
var this__13134 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13294 = null;
var G__13294__13295 = (function (coll,k){
var this__13136 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13294__13296 = (function (coll,k,not_found){
var this__13138 = this;
var bucket__13139 = (this__13138.hashobj[cljs.core.hash.call(null,k)]);
var i__13141 = (cljs.core.truth_(bucket__13139)?cljs.core.scan_array.call(null,2,k,bucket__13139):null);

if(cljs.core.truth_(i__13141))
{return (bucket__13139[(i__13141 + 1)]);
} else
{return not_found;
}
});
G__13294 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13294__13295.call(this,coll,k);
case  3 :
return G__13294__13296.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13294;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13144 = this;
var h__13147 = cljs.core.hash.call(null,k);
var bucket__13148 = (this__13144.hashobj[h__13147]);

if(cljs.core.truth_(bucket__13148))
{var new_bucket__13150 = cljs.core.aclone.call(null,bucket__13148);
var new_hashobj__13152 = goog.object.clone.call(null,this__13144.hashobj);

(new_hashobj__13152[h__13147] = new_bucket__13150);
var temp__3695__auto____13153 = cljs.core.scan_array.call(null,2,k,new_bucket__13150);

if(cljs.core.truth_(temp__3695__auto____13153))
{var i__13154 = temp__3695__auto____13153;

(new_bucket__13150[(i__13154 + 1)] = v);
return (new cljs.core.HashMap(this__13144.meta,this__13144.count,new_hashobj__13152));
} else
{new_bucket__13150.push(k,v);
return (new cljs.core.HashMap(this__13144.meta,(this__13144.count + 1),new_hashobj__13152));
}
} else
{var new_hashobj__13157 = goog.object.clone.call(null,this__13144.hashobj);

(new_hashobj__13157[h__13147] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13144.meta,(this__13144.count + 1),new_hashobj__13157));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13160 = this;
var bucket__13162 = (this__13160.hashobj[cljs.core.hash.call(null,k)]);
var i__13163 = (cljs.core.truth_(bucket__13162)?cljs.core.scan_array.call(null,2,k,bucket__13162):null);

if(cljs.core.truth_(i__13163))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13303 = null;
var G__13303__13304 = (function (coll,k){
var this__13165 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13303__13305 = (function (coll,k,not_found){
var this__13167 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13303 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13303__13304.call(this,coll,k);
case  3 :
return G__13303__13305.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13303;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13168 = this;
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
{var hashes__13172 = cljs.core.js_keys.call(null,this__13170.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13124_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13170.hashobj[p1__13124_SHARP_])));
}),hashes__13172);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13276 = this;
return this__13276.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13277 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13279 = this;
return (new cljs.core.HashMap(meta,this__13279.count,this__13279.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13280 = this;
return this__13280.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13281 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13281.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13284 = this;
var h__13287 = cljs.core.hash.call(null,k);
var bucket__13288 = (this__13284.hashobj[h__13287]);
var i__13289 = (cljs.core.truth_(bucket__13288)?cljs.core.scan_array.call(null,2,k,bucket__13288):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13289)))
{return coll;
} else
{var new_hashobj__13290 = goog.object.clone.call(null,this__13284.hashobj);

if(cljs.core.truth_((3 > bucket__13288.length)))
{cljs.core.js_delete.call(null,new_hashobj__13290,h__13287);
} else
{var new_bucket__13291 = cljs.core.aclone.call(null,bucket__13288);

new_bucket__13291.splice(i__13289,2);
(new_hashobj__13290[h__13287] = new_bucket__13291);
}
return (new cljs.core.HashMap(this__13284.meta,(this__13284.count - 1),new_hashobj__13290));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13324 = ks.length;

var i__13325 = 0;
var out__13326 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13325 < len__13324)))
{{
var G__13334 = (i__13325 + 1);
var G__13335 = cljs.core.assoc.call(null,out__13326,(ks[i__13325]),(vs[i__13325]));
i__13325 = G__13334;
out__13326 = G__13335;
continue;
}
} else
{return out__13326;
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
var in$__13336 = cljs.core.seq.call(null,keyvals);
var out__13337 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13336))
{{
var G__13340 = cljs.core.nnext.call(null,in$__13336);
var G__13341 = cljs.core.assoc.call(null,out__13337,cljs.core.first.call(null,in$__13336),cljs.core.second.call(null,in$__13336));
in$__13336 = G__13340;
out__13337 = G__13341;
continue;
}
} else
{return out__13337;
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
hash_map.cljs$lang$applyTo = (function (arglist__13344){
var keyvals = cljs.core.seq( arglist__13344 );;
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
{return cljs.core.reduce.call(null,(function (p1__13365_SHARP_,p2__13367_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13376 = p1__13365_SHARP_;

if(cljs.core.truth_(or__3548__auto____13376))
{return or__3548__auto____13376;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13367_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13380){
var maps = cljs.core.seq( arglist__13380 );;
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
{var merge_entry__13385 = (function (m,e){
var k__13381 = cljs.core.first.call(null,e);
var v__13382 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13381)))
{return cljs.core.assoc.call(null,m,k__13381,f.call(null,cljs.core.get.call(null,m,k__13381),v__13382));
} else
{return cljs.core.assoc.call(null,m,k__13381,v__13382);
}
});
var merge2__13393 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13385,(function (){var or__3548__auto____13388 = m1;

if(cljs.core.truth_(or__3548__auto____13388))
{return or__3548__auto____13388;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13393,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13401){
var f = cljs.core.first(arglist__13401);
var maps = cljs.core.rest(arglist__13401);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13407 = cljs.core.ObjMap.fromObject([],{});
var keys__13408 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13408))
{var key__13409 = cljs.core.first.call(null,keys__13408);
var entry__13412 = cljs.core.get.call(null,map,key__13409,"﷐'user/not-found");

{
var G__13420 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13412,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13407,key__13409,entry__13412):ret__13407);
var G__13421 = cljs.core.next.call(null,keys__13408);
ret__13407 = G__13420;
keys__13408 = G__13421;
continue;
}
} else
{return ret__13407;
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
var this__13431 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13477 = null;
var G__13477__13479 = (function (coll,v){
var this__13434 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13477__13480 = (function (coll,v,not_found){
var this__13436 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13436.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13477 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13477__13479.call(this,coll,v);
case  3 :
return G__13477__13480.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13477;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13486 = null;
var G__13486__13489 = (function (coll,k){
var this__13438 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13486__13490 = (function (coll,k,not_found){
var this__13440 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13486 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13486__13489.call(this,coll,k);
case  3 :
return G__13486__13490.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13486;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13442 = this;
return (new cljs.core.Set(this__13442.meta,cljs.core.assoc.call(null,this__13442.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13444 = this;
return cljs.core.keys.call(null,this__13444.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13448 = this;
return (new cljs.core.Set(this__13448.meta,cljs.core.dissoc.call(null,this__13448.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13451 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13456 = this;
var and__3546__auto____13458 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13458))
{var and__3546__auto____13460 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13460))
{return cljs.core.every_QMARK_.call(null,(function (p1__13402_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13402_SHARP_);
}),other);
} else
{return and__3546__auto____13460;
}
} else
{return and__3546__auto____13458;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13464 = this;
return (new cljs.core.Set(meta,this__13464.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13470 = this;
return this__13470.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13472 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13472.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13519 = cljs.core.seq.call(null,coll);
var out__13520 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13519))))
{{
var G__13524 = cljs.core.rest.call(null,in$__13519);
var G__13525 = cljs.core.conj.call(null,out__13520,cljs.core.first.call(null,in$__13519));
in$__13519 = G__13524;
out__13520 = G__13525;
continue;
}
} else
{return out__13520;
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
{var n__13534 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13540 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13540))
{var e__13541 = temp__3695__auto____13540;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13541));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13534,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13517_SHARP_){
var temp__3695__auto____13545 = cljs.core.find.call(null,smap,p1__13517_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13545))
{var e__13547 = temp__3695__auto____13545;

return cljs.core.second.call(null,e__13547);
} else
{return p1__13517_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13567 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13558,seen){
while(true){
var vec__13559__13560 = p__13558;
var f__13561 = cljs.core.nth.call(null,vec__13559__13560,0,null);
var xs__13562 = vec__13559__13560;

var temp__3698__auto____13563 = cljs.core.seq.call(null,xs__13562);

if(cljs.core.truth_(temp__3698__auto____13563))
{var s__13564 = temp__3698__auto____13563;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13561)))
{{
var G__13571 = cljs.core.rest.call(null,s__13564);
var G__13572 = seen;
p__13558 = G__13571;
seen = G__13572;
continue;
}
} else
{return cljs.core.cons.call(null,f__13561,step.call(null,cljs.core.rest.call(null,s__13564),cljs.core.conj.call(null,seen,f__13561)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13567.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13575 = cljs.core.Vector.fromArray([]);
var s__13578 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13578)))
{{
var G__13581 = cljs.core.conj.call(null,ret__13575,cljs.core.first.call(null,s__13578));
var G__13582 = cljs.core.next.call(null,s__13578);
ret__13575 = G__13581;
s__13578 = G__13582;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13575);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13587 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13587))
{return or__3548__auto____13587;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13589 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13589 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13589 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13617 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13617))
{return or__3548__auto____13617;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13618 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13618 > -1)))
{return cljs.core.subs.call(null,x,2,i__13618);
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
var map__13629 = cljs.core.ObjMap.fromObject([],{});
var ks__13630 = cljs.core.seq.call(null,keys);
var vs__13631 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13632 = ks__13630;

if(cljs.core.truth_(and__3546__auto____13632))
{return vs__13631;
} else
{return and__3546__auto____13632;
}
})()))
{{
var G__13636 = cljs.core.assoc.call(null,map__13629,cljs.core.first.call(null,ks__13630),cljs.core.first.call(null,vs__13631));
var G__13637 = cljs.core.next.call(null,ks__13630);
var G__13638 = cljs.core.next.call(null,vs__13631);
map__13629 = G__13636;
ks__13630 = G__13637;
vs__13631 = G__13638;
continue;
}
} else
{return map__13629;
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
var max_key__13648 = (function (k,x){
return x;
});
var max_key__13649 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13650 = (function() { 
var G__13652__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13623_SHARP_,p2__13624_SHARP_){
return max_key.call(null,k,p1__13623_SHARP_,p2__13624_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13652 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13652__delegate.call(this, k, x, y, more);
};
G__13652.cljs$lang$maxFixedArity = 3;
G__13652.cljs$lang$applyTo = (function (arglist__13654){
var k = cljs.core.first(arglist__13654);
var x = cljs.core.first(cljs.core.next(arglist__13654));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13654)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13654)));
return G__13652__delegate.call(this, k, x, y, more);
});
return G__13652;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13648.call(this,k,x);
case  3 :
return max_key__13649.call(this,k,x,y);
default:
return max_key__13650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13650.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13660 = (function (k,x){
return x;
});
var min_key__13661 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13662 = (function() { 
var G__13667__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13641_SHARP_,p2__13642_SHARP_){
return min_key.call(null,k,p1__13641_SHARP_,p2__13642_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13667 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13667__delegate.call(this, k, x, y, more);
};
G__13667.cljs$lang$maxFixedArity = 3;
G__13667.cljs$lang$applyTo = (function (arglist__13670){
var k = cljs.core.first(arglist__13670);
var x = cljs.core.first(cljs.core.next(arglist__13670));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13670)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13670)));
return G__13667__delegate.call(this, k, x, y, more);
});
return G__13667;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13660.call(this,k,x);
case  3 :
return min_key__13661.call(this,k,x,y);
default:
return min_key__13662.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13662.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13678 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13679 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13671 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13671))
{var s__13676 = temp__3698__auto____13671;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13676),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13676)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13678.call(this,n,step);
case  3 :
return partition_all__13679.call(this,n,step,coll);
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
var temp__3698__auto____13686 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13686))
{var s__13687 = temp__3698__auto____13686;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13687))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13687),take_while.call(null,pred,cljs.core.rest.call(null,s__13687)));
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
var this__13716 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13718 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13814 = null;
var G__13814__13815 = (function (rng,f){
var this__13720 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13814__13816 = (function (rng,f,s){
var this__13723 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13814 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13814__13815.call(this,rng,f);
case  3 :
return G__13814__13816.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13814;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13727 = this;
var comp__13732 = (cljs.core.truth_((this__13727.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13732.call(null,this__13727.start,this__13727.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13733 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13733.end - this__13733.start) / this__13733.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13735 = this;
return this__13735.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13737 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13737.meta,(this__13737.start + this__13737.step),this__13737.end,this__13737.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13740 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13745 = this;
return (new cljs.core.Range(meta,this__13745.start,this__13745.end,this__13745.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13746 = this;
return this__13746.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13829 = null;
var G__13829__13831 = (function (rng,n){
var this__13747 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13747.start + (n * this__13747.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13748 = (this__13747.start > this__13747.end);

if(cljs.core.truth_(and__3546__auto____13748))
{return cljs.core._EQ_.call(null,this__13747.step,0);
} else
{return and__3546__auto____13748;
}
})()))
{return this__13747.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13829__13832 = (function (rng,n,not_found){
var this__13750 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13750.start + (n * this__13750.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13752 = (this__13750.start > this__13750.end);

if(cljs.core.truth_(and__3546__auto____13752))
{return cljs.core._EQ_.call(null,this__13750.step,0);
} else
{return and__3546__auto____13752;
}
})()))
{return this__13750.start;
} else
{return not_found;
}
}
});
G__13829 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13829__13831.call(this,rng,n);
case  3 :
return G__13829__13832.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13829;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13753 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13753.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13933 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13934 = (function (end){
return range.call(null,0,end,1);
});
var range__13935 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13936 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13933.call(this);
case  1 :
return range__13934.call(this,start);
case  2 :
return range__13935.call(this,start,end);
case  3 :
return range__13936.call(this,start,end,step);
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
var temp__3698__auto____13947 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13947))
{var s__13948 = temp__3698__auto____13947;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13948),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13948)));
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
var temp__3698__auto____13978 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13978))
{var s__13979 = temp__3698__auto____13978;

var fst__13980 = cljs.core.first.call(null,s__13979);
var fv__13981 = f.call(null,fst__13980);
var run__13982 = cljs.core.cons.call(null,fst__13980,cljs.core.take_while.call(null,(function (p1__13964_SHARP_){
return cljs.core._EQ_.call(null,fv__13981,f.call(null,p1__13964_SHARP_));
}),cljs.core.next.call(null,s__13979)));

return cljs.core.cons.call(null,run__13982,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13982),s__13979))));
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
var reductions__14041 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14027 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14027))
{var s__14028 = temp__3695__auto____14027;

return reductions.call(null,f,cljs.core.first.call(null,s__14028),cljs.core.rest.call(null,s__14028));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14043 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14032 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14032))
{var s__14033 = temp__3698__auto____14032;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14033)),cljs.core.rest.call(null,s__14033));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14041.call(this,f,init);
case  3 :
return reductions__14043.call(this,f,init,coll);
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
var juxt__14079 = (function (f){
return (function() {
var G__14085 = null;
var G__14085__14087 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14085__14088 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14085__14089 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14085__14090 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14085__14091 = (function() { 
var G__14093__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14093 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14093__delegate.call(this, x, y, z, args);
};
G__14093.cljs$lang$maxFixedArity = 3;
G__14093.cljs$lang$applyTo = (function (arglist__14094){
var x = cljs.core.first(arglist__14094);
var y = cljs.core.first(cljs.core.next(arglist__14094));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14094)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14094)));
return G__14093__delegate.call(this, x, y, z, args);
});
return G__14093;
})()
;
G__14085 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14085__14087.call(this);
case  1 :
return G__14085__14088.call(this,x);
case  2 :
return G__14085__14089.call(this,x,y);
case  3 :
return G__14085__14090.call(this,x,y,z);
default:
return G__14085__14091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14085.cljs$lang$maxFixedArity = 3;
G__14085.cljs$lang$applyTo = G__14085__14091.cljs$lang$applyTo;
return G__14085;
})()
});
var juxt__14080 = (function (f,g){
return (function() {
var G__14095 = null;
var G__14095__14096 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14095__14097 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14095__14098 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14095__14099 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14095__14100 = (function() { 
var G__14126__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14126 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14126__delegate.call(this, x, y, z, args);
};
G__14126.cljs$lang$maxFixedArity = 3;
G__14126.cljs$lang$applyTo = (function (arglist__14127){
var x = cljs.core.first(arglist__14127);
var y = cljs.core.first(cljs.core.next(arglist__14127));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14127)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14127)));
return G__14126__delegate.call(this, x, y, z, args);
});
return G__14126;
})()
;
G__14095 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14095__14096.call(this);
case  1 :
return G__14095__14097.call(this,x);
case  2 :
return G__14095__14098.call(this,x,y);
case  3 :
return G__14095__14099.call(this,x,y,z);
default:
return G__14095__14100.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14095.cljs$lang$maxFixedArity = 3;
G__14095.cljs$lang$applyTo = G__14095__14100.cljs$lang$applyTo;
return G__14095;
})()
});
var juxt__14081 = (function (f,g,h){
return (function() {
var G__14133 = null;
var G__14133__14134 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14133__14135 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14133__14136 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14133__14137 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14133__14138 = (function() { 
var G__14227__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14227 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14227__delegate.call(this, x, y, z, args);
};
G__14227.cljs$lang$maxFixedArity = 3;
G__14227.cljs$lang$applyTo = (function (arglist__14234){
var x = cljs.core.first(arglist__14234);
var y = cljs.core.first(cljs.core.next(arglist__14234));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14234)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14234)));
return G__14227__delegate.call(this, x, y, z, args);
});
return G__14227;
})()
;
G__14133 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14133__14134.call(this);
case  1 :
return G__14133__14135.call(this,x);
case  2 :
return G__14133__14136.call(this,x,y);
case  3 :
return G__14133__14137.call(this,x,y,z);
default:
return G__14133__14138.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14133.cljs$lang$maxFixedArity = 3;
G__14133.cljs$lang$applyTo = G__14133__14138.cljs$lang$applyTo;
return G__14133;
})()
});
var juxt__14082 = (function() { 
var G__14237__delegate = function (f,g,h,fs){
var fs__14074 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14238 = null;
var G__14238__14239 = (function (){
return cljs.core.reduce.call(null,(function (p1__14015_SHARP_,p2__14016_SHARP_){
return cljs.core.conj.call(null,p1__14015_SHARP_,p2__14016_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14074);
});
var G__14238__14240 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14019_SHARP_,p2__14020_SHARP_){
return cljs.core.conj.call(null,p1__14019_SHARP_,p2__14020_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14074);
});
var G__14238__14241 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14021_SHARP_,p2__14022_SHARP_){
return cljs.core.conj.call(null,p1__14021_SHARP_,p2__14022_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14074);
});
var G__14238__14242 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14023_SHARP_,p2__14024_SHARP_){
return cljs.core.conj.call(null,p1__14023_SHARP_,p2__14024_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14074);
});
var G__14238__14243 = (function() { 
var G__14247__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14025_SHARP_,p2__14026_SHARP_){
return cljs.core.conj.call(null,p1__14025_SHARP_,cljs.core.apply.call(null,p2__14026_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14074);
};
var G__14247 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14247__delegate.call(this, x, y, z, args);
};
G__14247.cljs$lang$maxFixedArity = 3;
G__14247.cljs$lang$applyTo = (function (arglist__14249){
var x = cljs.core.first(arglist__14249);
var y = cljs.core.first(cljs.core.next(arglist__14249));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14249)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14249)));
return G__14247__delegate.call(this, x, y, z, args);
});
return G__14247;
})()
;
G__14238 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14238__14239.call(this);
case  1 :
return G__14238__14240.call(this,x);
case  2 :
return G__14238__14241.call(this,x,y);
case  3 :
return G__14238__14242.call(this,x,y,z);
default:
return G__14238__14243.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14238.cljs$lang$maxFixedArity = 3;
G__14238.cljs$lang$applyTo = G__14238__14243.cljs$lang$applyTo;
return G__14238;
})()
};
var G__14237 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14237__delegate.call(this, f, g, h, fs);
};
G__14237.cljs$lang$maxFixedArity = 3;
G__14237.cljs$lang$applyTo = (function (arglist__14252){
var f = cljs.core.first(arglist__14252);
var g = cljs.core.first(cljs.core.next(arglist__14252));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14252)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14252)));
return G__14237__delegate.call(this, f, g, h, fs);
});
return G__14237;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14079.call(this,f);
case  2 :
return juxt__14080.call(this,f,g);
case  3 :
return juxt__14081.call(this,f,g,h);
default:
return juxt__14082.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14082.cljs$lang$applyTo;
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
var dorun__14301 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14304 = cljs.core.next.call(null,coll);
coll = G__14304;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14302 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14261 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14261))
{return (n > 0);
} else
{return and__3546__auto____14261;
}
})()))
{{
var G__14309 = (n - 1);
var G__14310 = cljs.core.next.call(null,coll);
n = G__14309;
coll = G__14310;
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
return dorun__14301.call(this,n);
case  2 :
return dorun__14302.call(this,n,coll);
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
var doall__14318 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14319 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14318.call(this,n);
case  2 :
return doall__14319.call(this,n,coll);
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
var matches__14327 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14327),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14327),1)))
{return cljs.core.first.call(null,matches__14327);
} else
{return cljs.core.vec.call(null,matches__14327);
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
var matches__14332 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14332)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14332),1)))
{return cljs.core.first.call(null,matches__14332);
} else
{return cljs.core.vec.call(null,matches__14332);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14334 = cljs.core.re_find.call(null,re,s);
var match_idx__14336 = s.search(re);
var match_str__14338 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14334))?cljs.core.first.call(null,match_data__14334):match_data__14334);
var post_match__14340 = cljs.core.subs.call(null,s,(match_idx__14336 + cljs.core.count.call(null,match_str__14338)));

if(cljs.core.truth_(match_data__14334))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14334,re_seq.call(null,re,post_match__14340));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14345_SHARP_){
return print_one.call(null,p1__14345_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14364 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14364))
{var and__3546__auto____14379 = (function (){var x__445__auto____14365 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14368 = x__445__auto____14365;

if(cljs.core.truth_(and__3546__auto____14368))
{var and__3546__auto____14371 = x__445__auto____14365.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14371))
{return cljs.core.not.call(null,x__445__auto____14365.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14371;
}
} else
{return and__3546__auto____14368;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14365);
}
})();

if(cljs.core.truth_(and__3546__auto____14379))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14379;
}
} else
{return and__3546__auto____14364;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14386 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14389 = x__445__auto____14386;

if(cljs.core.truth_(and__3546__auto____14389))
{var and__3546__auto____14392 = x__445__auto____14386.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14392))
{return cljs.core.not.call(null,x__445__auto____14386.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14392;
}
} else
{return and__3546__auto____14389;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14386);
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
var first_obj__14409 = cljs.core.first.call(null,objs);
var sb__14410 = (new goog.string.StringBuffer());

var G__14411__14415 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14411__14415))
{var obj__14417 = cljs.core.first.call(null,G__14411__14415);
var G__14411__14419 = G__14411__14415;

while(true){
if(cljs.core.truth_((obj__14417 === first_obj__14409)))
{} else
{sb__14410.append(" ");
}
var G__14422__14427 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14417,opts));

if(cljs.core.truth_(G__14422__14427))
{var string__14430 = cljs.core.first.call(null,G__14422__14427);
var G__14422__14431 = G__14422__14427;

while(true){
sb__14410.append(string__14430);
var temp__3698__auto____14436 = cljs.core.next.call(null,G__14422__14431);

if(cljs.core.truth_(temp__3698__auto____14436))
{var G__14422__14439 = temp__3698__auto____14436;

{
var G__14469 = cljs.core.first.call(null,G__14422__14439);
var G__14470 = G__14422__14439;
string__14430 = G__14469;
G__14422__14431 = G__14470;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14444 = cljs.core.next.call(null,G__14411__14419);

if(cljs.core.truth_(temp__3698__auto____14444))
{var G__14411__14454 = temp__3698__auto____14444;

{
var G__14474 = cljs.core.first.call(null,G__14411__14454);
var G__14475 = G__14411__14454;
obj__14417 = G__14474;
G__14411__14419 = G__14475;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14410);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14478 = cljs.core.first.call(null,objs);

var G__14479__14480 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14479__14480))
{var obj__14481 = cljs.core.first.call(null,G__14479__14480);
var G__14479__14482 = G__14479__14480;

while(true){
if(cljs.core.truth_((obj__14481 === first_obj__14478)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14483__14485 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14481,opts));

if(cljs.core.truth_(G__14483__14485))
{var string__14486 = cljs.core.first.call(null,G__14483__14485);
var G__14483__14487 = G__14483__14485;

while(true){
cljs.core.string_print.call(null,string__14486);
var temp__3698__auto____14490 = cljs.core.next.call(null,G__14483__14487);

if(cljs.core.truth_(temp__3698__auto____14490))
{var G__14483__14491 = temp__3698__auto____14490;

{
var G__14508 = cljs.core.first.call(null,G__14483__14491);
var G__14509 = G__14483__14491;
string__14486 = G__14508;
G__14483__14487 = G__14509;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14494 = cljs.core.next.call(null,G__14479__14482);

if(cljs.core.truth_(temp__3698__auto____14494))
{var G__14479__14496 = temp__3698__auto____14494;

{
var G__14511 = cljs.core.first.call(null,G__14479__14496);
var G__14513 = G__14479__14496;
obj__14481 = G__14511;
G__14479__14482 = G__14513;
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
pr.cljs$lang$applyTo = (function (arglist__14539){
var objs = cljs.core.seq( arglist__14539 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14541){
var objs = cljs.core.seq( arglist__14541 );;
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
println.cljs$lang$applyTo = (function (arglist__14547){
var objs = cljs.core.seq( arglist__14547 );;
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
prn.cljs$lang$applyTo = (function (arglist__14553){
var objs = cljs.core.seq( arglist__14553 );;
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14569 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14569))
{var nspc__14570 = temp__3698__auto____14569;

return cljs.core.str.call(null,nspc__14570,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14572 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14572))
{var nspc__14573 = temp__3698__auto____14572;

return cljs.core.str.call(null,nspc__14573,"/");
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
var pr_pair__14589 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14589,"{",", ","}",opts,coll);
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
var this__14645 = this;
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
var temp__3698__auto____14667 = cljs.core.next.call(null,G__14648__14664);

if(cljs.core.truth_(temp__3698__auto____14667))
{var G__14648__14668 = temp__3698__auto____14667;

{
var G__14697 = cljs.core.first.call(null,G__14648__14668);
var G__14698 = G__14648__14668;
G__14651__14658 = G__14697;
G__14648__14659 = G__14698;
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
var this__14670 = this;
return this$.watches = cljs.core.assoc.call(null,this__14670.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14672 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14672.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14676 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14676.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14682 = this;
return this__14682.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14685 = this;
return this__14685.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14687 = this;
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
var atom__14724 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14725 = (function() { 
var G__14729__delegate = function (x,p__14709){
var map__14710__14711 = p__14709;
var map__14710__14713 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14710__14711))?cljs.core.apply.call(null,cljs.core.hash_map,map__14710__14711):map__14710__14711);
var validator__14714 = cljs.core.get.call(null,map__14710__14713,"﷐'validator");
var meta__14715 = cljs.core.get.call(null,map__14710__14713,"﷐'meta");

return (new cljs.core.Atom(x,meta__14715,validator__14714,null));
};
var G__14729 = function (x,var_args){
var p__14709 = null;
if (goog.isDef(var_args)) {
  p__14709 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14729__delegate.call(this, x, p__14709);
};
G__14729.cljs$lang$maxFixedArity = 1;
G__14729.cljs$lang$applyTo = (function (arglist__14731){
var x = cljs.core.first(arglist__14731);
var p__14709 = cljs.core.rest(arglist__14731);
return G__14729__delegate.call(this, x, p__14709);
});
return G__14729;
})()
;
atom = function(x,var_args){
var p__14709 = var_args;
switch(arguments.length){
case  1 :
return atom__14724.call(this,x);
default:
return atom__14725.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14725.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14734 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14734))
{var validate__14735 = temp__3698__auto____14734;

if(cljs.core.truth_(validate__14735.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14742 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14742,new_value);
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
var swap_BANG___14750 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14751 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14752 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14753 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14754 = (function() { 
var G__14756__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14756 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14756__delegate.call(this, a, f, x, y, z, more);
};
G__14756.cljs$lang$maxFixedArity = 5;
G__14756.cljs$lang$applyTo = (function (arglist__14758){
var a = cljs.core.first(arglist__14758);
var f = cljs.core.first(cljs.core.next(arglist__14758));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14758)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14758))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14758)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14758)))));
return G__14756__delegate.call(this, a, f, x, y, z, more);
});
return G__14756;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14750.call(this,a,f);
case  3 :
return swap_BANG___14751.call(this,a,f,x);
case  4 :
return swap_BANG___14752.call(this,a,f,x,y);
case  5 :
return swap_BANG___14753.call(this,a,f,x,y,z);
default:
return swap_BANG___14754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14754.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14781){
var iref = cljs.core.first(arglist__14781);
var f = cljs.core.first(cljs.core.next(arglist__14781));
var args = cljs.core.rest(cljs.core.next(arglist__14781));
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
var this__14829 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14829.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14832 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14832.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14832.state,this__14832.f);
}
return cljs.core.deref.call(null,this__14832.state);
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
delay.cljs$lang$applyTo = (function (arglist__14835){
var body = cljs.core.seq( arglist__14835 );;
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
var map__14851__14852 = options;
var map__14851__14853 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14851__14852))?cljs.core.apply.call(null,cljs.core.hash_map,map__14851__14852):map__14851__14852);
var keywordize_keys__14855 = cljs.core.get.call(null,map__14851__14853,"﷐'keywordize-keys");
var keyfn__14856 = (cljs.core.truth_(keywordize_keys__14855)?cljs.core.keyword:cljs.core.str);
var f__14882 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14880 = (function iter__14861(s__14862){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14862__14877 = s__14862;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14862__14877)))
{var k__14878 = cljs.core.first.call(null,s__14862__14877);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14856.call(null,k__14878),thisfn.call(null,(x[k__14878]))]),iter__14861.call(null,cljs.core.rest.call(null,s__14862__14877)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14880.call(null,cljs.core.js_keys.call(null,x));
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

return f__14882.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14888){
var x = cljs.core.first(arglist__14888);
var options = cljs.core.rest(arglist__14888);
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
var G__14899__delegate = function (args){
var temp__3695__auto____14894 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14892),args);

if(cljs.core.truth_(temp__3695__auto____14894))
{var v__14895 = temp__3695__auto____14894;

return v__14895;
} else
{var ret__14897 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14892,cljs.core.assoc,args,ret__14897);
return ret__14897;
}
};
var G__14899 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14899__delegate.call(this, args);
};
G__14899.cljs$lang$maxFixedArity = 0;
G__14899.cljs$lang$applyTo = (function (arglist__14901){
var args = cljs.core.seq( arglist__14901 );;
return G__14899__delegate.call(this, args);
});
return G__14899;
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
var trampoline__14903 = (function (f){
while(true){
var ret__14902 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14902)))
{{
var G__14907 = ret__14902;
f = G__14907;
continue;
}
} else
{return ret__14902;
}
break;
}
});
var trampoline__14904 = (function() { 
var G__14908__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14908 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14908__delegate.call(this, f, args);
};
G__14908.cljs$lang$maxFixedArity = 1;
G__14908.cljs$lang$applyTo = (function (arglist__14909){
var f = cljs.core.first(arglist__14909);
var args = cljs.core.rest(arglist__14909);
return G__14908__delegate.call(this, f, args);
});
return G__14908;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14903.call(this,f);
default:
return trampoline__14904.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14904.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14914 = (function (){
return rand.call(null,1);
});
var rand__14915 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14914.call(this);
case  1 :
return rand__14915.call(this,n);
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
var k__14921 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14921,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14921,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15054 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15055 = (function (h,child,parent){
var or__3548__auto____14929 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14929))
{return or__3548__auto____14929;
} else
{var or__3548__auto____14932 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14932))
{return or__3548__auto____14932;
} else
{var and__3546__auto____14933 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14933))
{var and__3546__auto____15037 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15037))
{var and__3546__auto____15045 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15045))
{var ret__15046 = true;
var i__15047 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15048 = cljs.core.not.call(null,ret__15046);

if(cljs.core.truth_(or__3548__auto____15048))
{return or__3548__auto____15048;
} else
{return cljs.core._EQ_.call(null,i__15047,cljs.core.count.call(null,parent));
}
})()))
{return ret__15046;
} else
{{
var G__15060 = isa_QMARK_.call(null,h,child.call(null,i__15047),parent.call(null,i__15047));
var G__15061 = (i__15047 + 1);
ret__15046 = G__15060;
i__15047 = G__15061;
continue;
}
}
break;
}
} else
{return and__3546__auto____15045;
}
} else
{return and__3546__auto____15037;
}
} else
{return and__3546__auto____14933;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15054.call(this,h,child);
case  3 :
return isa_QMARK___15055.call(this,h,child,parent);
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
var parents__15066 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15067 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15066.call(this,h);
case  2 :
return parents__15067.call(this,h,tag);
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
var ancestors__15075 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15076 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15075.call(this,h);
case  2 :
return ancestors__15076.call(this,h,tag);
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
var descendants__15081 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15082 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15081.call(this,h);
case  2 :
return descendants__15082.call(this,h,tag);
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
var derive__15127 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15128 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15106 = "﷐'parents".call(null,h);
var td__15107 = "﷐'descendants".call(null,h);
var ta__15110 = "﷐'ancestors".call(null,h);
var tf__15118 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15122 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15106.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15110.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15110.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15106,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15118.call(null,"﷐'ancestors".call(null,h),tag,td__15107,parent,ta__15110),"﷐'descendants":tf__15118.call(null,"﷐'descendants".call(null,h),parent,ta__15110,tag,td__15107)});
})());

if(cljs.core.truth_(or__3548__auto____15122))
{return or__3548__auto____15122;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15127.call(this,h,tag);
case  3 :
return derive__15128.call(this,h,tag,parent);
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
var underive__15186 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15190 = (function (h,tag,parent){
var parentMap__15174 = "﷐'parents".call(null,h);
var childsParents__15176 = (cljs.core.truth_(parentMap__15174.call(null,tag))?cljs.core.disj.call(null,parentMap__15174.call(null,tag),parent):cljs.core.set([]));
var newParents__15179 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15176))?cljs.core.assoc.call(null,parentMap__15174,tag,childsParents__15176):cljs.core.dissoc.call(null,parentMap__15174,tag));
var deriv_seq__15181 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15091_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15091_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15091_SHARP_),cljs.core.second.call(null,p1__15091_SHARP_)));
}),cljs.core.seq.call(null,newParents__15179)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15174.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15094_SHARP_,p2__15095_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15094_SHARP_,p2__15095_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15181));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15186.call(this,h,tag);
case  3 :
return underive__15190.call(this,h,tag,parent);
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
var xprefs__15204 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15209 = (cljs.core.truth_((function (){var and__3546__auto____15206 = xprefs__15204;

if(cljs.core.truth_(and__3546__auto____15206))
{return xprefs__15204.call(null,y);
} else
{return and__3546__auto____15206;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15209))
{return or__3548__auto____15209;
} else
{var or__3548__auto____15215 = (function (){var ps__15213 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15213) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15213),prefer_table)))
{} else
{}
{
var G__15223 = cljs.core.rest.call(null,ps__15213);
ps__15213 = G__15223;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15215))
{return or__3548__auto____15215;
} else
{var or__3548__auto____15221 = (function (){var ps__15216 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15216) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15216),y,prefer_table)))
{} else
{}
{
var G__15226 = cljs.core.rest.call(null,ps__15216);
ps__15216 = G__15226;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15221))
{return or__3548__auto____15221;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15232 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15232))
{return or__3548__auto____15232;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15257 = cljs.core.reduce.call(null,(function (be,p__15238){
var vec__15240__15243 = p__15238;
var k__15246 = cljs.core.nth.call(null,vec__15240__15243,0,null);
var ___15247 = cljs.core.nth.call(null,vec__15240__15243,1,null);
var e__15248 = vec__15240__15243;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15246)))
{var be2__15253 = (cljs.core.truth_((function (){var or__3548__auto____15250 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15250))
{return or__3548__auto____15250;
} else
{return cljs.core.dominates.call(null,k__15246,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15248:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15253),k__15246,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15246," and ",cljs.core.first.call(null,be2__15253),", and neither is preferred")));
}
return be2__15253;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15257))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15257));
return cljs.core.second.call(null,best_entry__15257);
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
if(cljs.core.truth_((function (){var and__3546__auto____15268 = mf;

if(cljs.core.truth_(and__3546__auto____15268))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15268;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15276 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15276))
{return or__3548__auto____15276;
} else
{var or__3548__auto____15278 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15278))
{return or__3548__auto____15278;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15282 = mf;

if(cljs.core.truth_(and__3546__auto____15282))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15282;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15284 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15284))
{return or__3548__auto____15284;
} else
{var or__3548__auto____15286 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15286))
{return or__3548__auto____15286;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15288 = mf;

if(cljs.core.truth_(and__3546__auto____15288))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15288;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15291 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15291))
{return or__3548__auto____15291;
} else
{var or__3548__auto____15294 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15294))
{return or__3548__auto____15294;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15298 = mf;

if(cljs.core.truth_(and__3546__auto____15298))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15298;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15300 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15300))
{return or__3548__auto____15300;
} else
{var or__3548__auto____15302 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
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
{return (function (){var or__3548__auto____15307 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15307))
{return or__3548__auto____15307;
} else
{var or__3548__auto____15309 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15309))
{return or__3548__auto____15309;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15311 = mf;

if(cljs.core.truth_(and__3546__auto____15311))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15311;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15312 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15312))
{return or__3548__auto____15312;
} else
{var or__3548__auto____15313 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15313))
{return or__3548__auto____15313;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15317 = mf;

if(cljs.core.truth_(and__3546__auto____15317))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15317;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15320 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15320))
{return or__3548__auto____15320;
} else
{var or__3548__auto____15321 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15321))
{return or__3548__auto____15321;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15326 = mf;

if(cljs.core.truth_(and__3546__auto____15326))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15326;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15329 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15329))
{return or__3548__auto____15329;
} else
{var or__3548__auto____15330 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15330))
{return or__3548__auto____15330;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15404 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15405 = cljs.core._get_method.call(null,mf,dispatch_val__15404);

if(cljs.core.truth_(target_fn__15405))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15404)));
}
return cljs.core.apply.call(null,target_fn__15405,args);
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
var this__15428 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15429 = this;
cljs.core.swap_BANG_.call(null,this__15429.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15429.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15429.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15429.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15438 = this;
cljs.core.swap_BANG_.call(null,this__15438.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15438.method_cache,this__15438.method_table,this__15438.cached_hierarchy,this__15438.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15442 = this;
cljs.core.swap_BANG_.call(null,this__15442.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15442.method_cache,this__15442.method_table,this__15442.cached_hierarchy,this__15442.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15443 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15443.cached_hierarchy),cljs.core.deref.call(null,this__15443.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15443.method_cache,this__15443.method_table,this__15443.cached_hierarchy,this__15443.hierarchy);
}
var temp__3695__auto____15445 = cljs.core.deref.call(null,this__15443.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15445))
{var target_fn__15446 = temp__3695__auto____15445;

return target_fn__15446;
} else
{var temp__3695__auto____15447 = cljs.core.find_and_cache_best_method.call(null,this__15443.name,dispatch_val,this__15443.hierarchy,this__15443.method_table,this__15443.prefer_table,this__15443.method_cache,this__15443.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15447))
{var target_fn__15449 = temp__3695__auto____15447;

return target_fn__15449;
} else
{return cljs.core.deref.call(null,this__15443.method_table).call(null,this__15443.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15450 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15450.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15450.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15450.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15450.method_cache,this__15450.method_table,this__15450.cached_hierarchy,this__15450.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15467 = this;
return cljs.core.deref.call(null,this__15467.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15469 = this;
return cljs.core.deref.call(null,this__15469.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15470 = this;
return cljs.core.do_dispatch.call(null,mf,this__15470.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15485__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15485 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15485__delegate.call(this, _, args);
};
G__15485.cljs$lang$maxFixedArity = 1;
G__15485.cljs$lang$applyTo = (function (arglist__15487){
var _ = cljs.core.first(arglist__15487);
var args = cljs.core.rest(arglist__15487);
return G__15485__delegate.call(this, _, args);
});
return G__15485;
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
