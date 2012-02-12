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
var or__3548__auto____7252 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7252))
{return or__3548__auto____7252;
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
var _invoke__7539 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7262 = this$;

if(cljs.core.truth_(and__3546__auto____7262))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7262;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7263 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
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
var _invoke__7541 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7265 = this$;

if(cljs.core.truth_(and__3546__auto____7265))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7265;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7266 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7266))
{return or__3548__auto____7266;
} else
{var or__3548__auto____7267 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7267))
{return or__3548__auto____7267;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7544 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7268 = this$;

if(cljs.core.truth_(and__3546__auto____7268))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7268;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7361 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7361))
{return or__3548__auto____7361;
} else
{var or__3548__auto____7364 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7364))
{return or__3548__auto____7364;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7546 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7366 = this$;

if(cljs.core.truth_(and__3546__auto____7366))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7366;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7369 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{var or__3548__auto____7371 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7549 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7375 = this$;

if(cljs.core.truth_(and__3546__auto____7375))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7375;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
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
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7551 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7383 = this$;

if(cljs.core.truth_(and__3546__auto____7383))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7383;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7385 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7385))
{return or__3548__auto____7385;
} else
{var or__3548__auto____7388 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7388))
{return or__3548__auto____7388;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7553 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7391 = this$;

if(cljs.core.truth_(and__3546__auto____7391))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7391;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7394 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{var or__3548__auto____7395 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7395))
{return or__3548__auto____7395;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7555 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7557 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7406 = this$;

if(cljs.core.truth_(and__3546__auto____7406))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7406;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7409 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{var or__3548__auto____7411 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7411))
{return or__3548__auto____7411;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7558 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7415 = this$;

if(cljs.core.truth_(and__3546__auto____7415))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7415;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7561 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7423 = this$;

if(cljs.core.truth_(and__3546__auto____7423))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7423;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7425 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7425))
{return or__3548__auto____7425;
} else
{var or__3548__auto____7427 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7427))
{return or__3548__auto____7427;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7563 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7431 = this$;

if(cljs.core.truth_(and__3546__auto____7431))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7431;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7435 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7435))
{return or__3548__auto____7435;
} else
{var or__3548__auto____7436 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7436))
{return or__3548__auto____7436;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7565 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7443 = this$;

if(cljs.core.truth_(and__3546__auto____7443))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7443;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7446 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7446))
{return or__3548__auto____7446;
} else
{var or__3548__auto____7448 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7448))
{return or__3548__auto____7448;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7567 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7450 = this$;

if(cljs.core.truth_(and__3546__auto____7450))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7450;
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
var _invoke__7569 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7456 = this$;

if(cljs.core.truth_(and__3546__auto____7456))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7456;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7458 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7458))
{return or__3548__auto____7458;
} else
{var or__3548__auto____7460 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7460))
{return or__3548__auto____7460;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7571 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7463 = this$;

if(cljs.core.truth_(and__3546__auto____7463))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7463;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7467 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{var or__3548__auto____7470 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7470))
{return or__3548__auto____7470;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7573 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7474 = this$;

if(cljs.core.truth_(and__3546__auto____7474))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7474;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7478 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7478))
{return or__3548__auto____7478;
} else
{var or__3548__auto____7479 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7574 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7483 = this$;

if(cljs.core.truth_(and__3546__auto____7483))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7483;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7486 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7486))
{return or__3548__auto____7486;
} else
{var or__3548__auto____7489 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7575 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7492 = this$;

if(cljs.core.truth_(and__3546__auto____7492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7495 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7495))
{return or__3548__auto____7495;
} else
{var or__3548__auto____7497 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7576 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7499 = this$;

if(cljs.core.truth_(and__3546__auto____7499))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7499;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7501 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7501))
{return or__3548__auto____7501;
} else
{var or__3548__auto____7504 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7504))
{return or__3548__auto____7504;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7577 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7510 = this$;

if(cljs.core.truth_(and__3546__auto____7510))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7510;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7514 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7514))
{return or__3548__auto____7514;
} else
{var or__3548__auto____7516 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
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
return _invoke__7539.call(this,this$);
case  2 :
return _invoke__7541.call(this,this$,a);
case  3 :
return _invoke__7544.call(this,this$,a,b);
case  4 :
return _invoke__7546.call(this,this$,a,b,c);
case  5 :
return _invoke__7549.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7551.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7553.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7555.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7557.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7558.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7561.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7563.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7565.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7567.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7569.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7571.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7573.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7574.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7575.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7576.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7577.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7721 = coll;

if(cljs.core.truth_(and__3546__auto____7721))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7721;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7722 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{var or__3548__auto____7725 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7736 = coll;

if(cljs.core.truth_(and__3546__auto____7736))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7736;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7743 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7743))
{return or__3548__auto____7743;
} else
{var or__3548__auto____7744 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7744))
{return or__3548__auto____7744;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7745 = coll;

if(cljs.core.truth_(and__3546__auto____7745))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7745;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7746 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7746))
{return or__3548__auto____7746;
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
var _nth__7771 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7762 = coll;

if(cljs.core.truth_(and__3546__auto____7762))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7762;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7763 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7763))
{return or__3548__auto____7763;
} else
{var or__3548__auto____7764 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7764))
{return or__3548__auto____7764;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7772 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7766 = coll;

if(cljs.core.truth_(and__3546__auto____7766))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7766;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7769 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7769))
{return or__3548__auto____7769;
} else
{var or__3548__auto____7770 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7770))
{return or__3548__auto____7770;
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
return _nth__7771.call(this,coll,n);
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
if(cljs.core.truth_((function (){var and__3546__auto____7777 = coll;

if(cljs.core.truth_(and__3546__auto____7777))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7777;
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
if(cljs.core.truth_((function (){var and__3546__auto____7781 = coll;

if(cljs.core.truth_(and__3546__auto____7781))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7781;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7784 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7784))
{return or__3548__auto____7784;
} else
{var or__3548__auto____7785 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7785))
{return or__3548__auto____7785;
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
var _lookup__7802 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7792 = o;

if(cljs.core.truth_(and__3546__auto____7792))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7792;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7793 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{var or__3548__auto____7794 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7794))
{return or__3548__auto____7794;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7803 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7796 = o;

if(cljs.core.truth_(and__3546__auto____7796))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7796;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7798 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
} else
{var or__3548__auto____7800 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
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
return _lookup__7802.call(this,o,k);
case  3 :
return _lookup__7803.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7817 = coll;

if(cljs.core.truth_(and__3546__auto____7817))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7817;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7853 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7853))
{return or__3548__auto____7853;
} else
{var or__3548__auto____7854 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7856 = coll;

if(cljs.core.truth_(and__3546__auto____7856))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7856;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7860 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{var or__3548__auto____7861 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7869 = coll;

if(cljs.core.truth_(and__3546__auto____7869))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7869;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7878 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7878))
{return or__3548__auto____7878;
} else
{var or__3548__auto____7880 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7894 = coll;

if(cljs.core.truth_(and__3546__auto____7894))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7894;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7896 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7896))
{return or__3548__auto____7896;
} else
{var or__3548__auto____7897 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7907 = coll;

if(cljs.core.truth_(and__3546__auto____7907))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7907;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7909 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{var or__3548__auto____7911 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7911))
{return or__3548__auto____7911;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7913 = coll;

if(cljs.core.truth_(and__3546__auto____7913))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7913;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7916 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7916))
{return or__3548__auto____7916;
} else
{var or__3548__auto____7918 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7926 = coll;

if(cljs.core.truth_(and__3546__auto____7926))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7926;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7928 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7928))
{return or__3548__auto____7928;
} else
{var or__3548__auto____7930 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7930))
{return or__3548__auto____7930;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7934 = o;

if(cljs.core.truth_(and__3546__auto____7934))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7934;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7939 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{var or__3548__auto____7940 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7940))
{return or__3548__auto____7940;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7949 = o;

if(cljs.core.truth_(and__3546__auto____7949))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7949;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7952 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{var or__3548__auto____7958 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7958))
{return or__3548__auto____7958;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7965 = o;

if(cljs.core.truth_(and__3546__auto____7965))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7965;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7968 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7970 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7970))
{return or__3548__auto____7970;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = o;

if(cljs.core.truth_(and__3546__auto____7982))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7982;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7983 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7983))
{return or__3548__auto____7983;
} else
{var or__3548__auto____7984 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7984))
{return or__3548__auto____7984;
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
var _reduce__8010 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7994 = coll;

if(cljs.core.truth_(and__3546__auto____7994))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7994;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7997 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7997))
{return or__3548__auto____7997;
} else
{var or__3548__auto____7998 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7998))
{return or__3548__auto____7998;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8011 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8000 = coll;

if(cljs.core.truth_(and__3546__auto____8000))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8000;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8005 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{var or__3548__auto____8007 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8007))
{return or__3548__auto____8007;
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
return _reduce__8010.call(this,coll,f);
case  3 :
return _reduce__8011.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8022 = o;

if(cljs.core.truth_(and__3546__auto____8022))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8022;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8024 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8024))
{return or__3548__auto____8024;
} else
{var or__3548__auto____8026 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8033 = o;

if(cljs.core.truth_(and__3546__auto____8033))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8033;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8035 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{var or__3548__auto____8038 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8038))
{return or__3548__auto____8038;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8047 = o;

if(cljs.core.truth_(and__3546__auto____8047))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8047;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8048 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8048))
{return or__3548__auto____8048;
} else
{var or__3548__auto____8050 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
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
if(cljs.core.truth_((function (){var and__3546__auto____8075 = o;

if(cljs.core.truth_(and__3546__auto____8075))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8075;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8078 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{var or__3548__auto____8086 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8086))
{return or__3548__auto____8086;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8101 = d;

if(cljs.core.truth_(and__3546__auto____8101))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8101;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8103 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8103))
{return or__3548__auto____8103;
} else
{var or__3548__auto____8104 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8107 = this$;

if(cljs.core.truth_(and__3546__auto____8107))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8107;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8109 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8109))
{return or__3548__auto____8109;
} else
{var or__3548__auto____8111 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8111))
{return or__3548__auto____8111;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8113 = this$;

if(cljs.core.truth_(and__3546__auto____8113))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8113;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8114 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{var or__3548__auto____8115 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8161 = this$;

if(cljs.core.truth_(and__3546__auto____8161))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8161;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8162 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8162))
{return or__3548__auto____8162;
} else
{var or__3548__auto____8163 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8163))
{return or__3548__auto____8163;
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
var G__8359 = null;
var G__8359__8360 = (function (o,k){
return null;
});
var G__8359__8361 = (function (o,k,not_found){
return not_found;
});
G__8359 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8359__8360.call(this,o,k);
case  3 :
return G__8359__8361.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8359;
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
var G__8368 = null;
var G__8368__8370 = (function (_,f){
return f.call(null);
});
var G__8368__8372 = (function (_,f,start){
return start;
});
G__8368 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8368__8370.call(this,_,f);
case  3 :
return G__8368__8372.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8368;
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
var G__8381 = null;
var G__8381__8382 = (function (_,n){
return null;
});
var G__8381__8383 = (function (_,n,not_found){
return not_found;
});
G__8381 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8381__8382.call(this,_,n);
case  3 :
return G__8381__8383.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8381;
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
var ci_reduce__8452 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8444 = cljs.core._nth.call(null,cicoll,0);
var n__8445 = 1;

while(true){
if(cljs.core.truth_((n__8445 < cljs.core._count.call(null,cicoll))))
{{
var G__8456 = f.call(null,val__8444,cljs.core._nth.call(null,cicoll,n__8445));
var G__8457 = (n__8445 + 1);
val__8444 = G__8456;
n__8445 = G__8457;
continue;
}
} else
{return val__8444;
}
break;
}
}
});
var ci_reduce__8453 = (function (cicoll,f,val){
var val__8448 = val;
var n__8449 = 0;

while(true){
if(cljs.core.truth_((n__8449 < cljs.core._count.call(null,cicoll))))
{{
var G__8458 = f.call(null,val__8448,cljs.core._nth.call(null,cicoll,n__8449));
var G__8459 = (n__8449 + 1);
val__8448 = G__8458;
n__8449 = G__8459;
continue;
}
} else
{return val__8448;
}
break;
}
});
var ci_reduce__8454 = (function (cicoll,f,val,idx){
var val__8450 = val;
var n__8451 = idx;

while(true){
if(cljs.core.truth_((n__8451 < cljs.core._count.call(null,cicoll))))
{{
var G__8460 = f.call(null,val__8450,cljs.core._nth.call(null,cicoll,n__8451));
var G__8461 = (n__8451 + 1);
val__8450 = G__8460;
n__8451 = G__8461;
continue;
}
} else
{return val__8450;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8452.call(this,cicoll,f);
case  3 :
return ci_reduce__8453.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8454.call(this,cicoll,f,val,idx);
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
var this__8465 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8536 = null;
var G__8536__8537 = (function (_,f){
var this__8468 = this;
return cljs.core.ci_reduce.call(null,this__8468.a,f,(this__8468.a[this__8468.i]),(this__8468.i + 1));
});
var G__8536__8538 = (function (_,f,start){
var this__8469 = this;
return cljs.core.ci_reduce.call(null,this__8469.a,f,start,this__8469.i);
});
G__8536 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8536__8537.call(this,_,f);
case  3 :
return G__8536__8538.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8536;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8470 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8471 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8543 = null;
var G__8543__8544 = (function (coll,n){
var this__8472 = this;
var i__8473 = (n + this__8472.i);

if(cljs.core.truth_((i__8473 < this__8472.a.length)))
{return (this__8472.a[i__8473]);
} else
{return null;
}
});
var G__8543__8545 = (function (coll,n,not_found){
var this__8482 = this;
var i__8483 = (n + this__8482.i);

if(cljs.core.truth_((i__8483 < this__8482.a.length)))
{return (this__8482.a[i__8483]);
} else
{return not_found;
}
});
G__8543 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8543__8544.call(this,coll,n);
case  3 :
return G__8543__8545.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8543;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8527 = this;
return (this__8527.a.length - this__8527.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8529 = this;
return (this__8529.a[this__8529.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8531 = this;
if(cljs.core.truth_(((this__8531.i + 1) < this__8531.a.length)))
{return (new cljs.core.IndexedSeq(this__8531.a,(this__8531.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8535 = this;
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
var G__8601 = null;
var G__8601__8602 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8601__8603 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8601 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8601__8602.call(this,array,f);
case  3 :
return G__8601__8603.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8601;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8611 = null;
var G__8611__8612 = (function (array,k){
return (array[k]);
});
var G__8611__8613 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8611 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8611__8612.call(this,array,k);
case  3 :
return G__8611__8613.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8611;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8623 = null;
var G__8623__8624 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8623__8625 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8623 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8623__8624.call(this,array,n);
case  3 :
return G__8623__8625.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8623;
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
var temp__3698__auto____8646 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8646))
{var s__8647 = temp__3698__auto____8646;

return cljs.core._first.call(null,s__8647);
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
var G__8706 = cljs.core.next.call(null,s);
s = G__8706;
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
var s__8713 = cljs.core.seq.call(null,x);
var n__8714 = 0;

while(true){
if(cljs.core.truth_(s__8713))
{{
var G__8721 = cljs.core.next.call(null,s__8713);
var G__8722 = (n__8714 + 1);
s__8713 = G__8721;
n__8714 = G__8722;
continue;
}
} else
{return n__8714;
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
var conj__8739 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8740 = (function() { 
var G__8742__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8743 = conj.call(null,coll,x);
var G__8744 = cljs.core.first.call(null,xs);
var G__8745 = cljs.core.next.call(null,xs);
coll = G__8743;
x = G__8744;
xs = G__8745;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8742 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8742__delegate.call(this, coll, x, xs);
};
G__8742.cljs$lang$maxFixedArity = 2;
G__8742.cljs$lang$applyTo = (function (arglist__8751){
var coll = cljs.core.first(arglist__8751);
var x = cljs.core.first(cljs.core.next(arglist__8751));
var xs = cljs.core.rest(cljs.core.next(arglist__8751));
return G__8742__delegate.call(this, coll, x, xs);
});
return G__8742;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8739.call(this,coll,x);
default:
return conj__8740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8740.cljs$lang$applyTo;
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
var nth__8762 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8763 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8762.call(this,coll,n);
case  3 :
return nth__8763.call(this,coll,n,not_found);
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
var get__8769 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8770 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8769.call(this,o,k);
case  3 :
return get__8770.call(this,o,k,not_found);
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
var assoc__8774 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8775 = (function() { 
var G__8779__delegate = function (coll,k,v,kvs){
while(true){
var ret__8772 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8781 = ret__8772;
var G__8782 = cljs.core.first.call(null,kvs);
var G__8783 = cljs.core.second.call(null,kvs);
var G__8784 = cljs.core.nnext.call(null,kvs);
coll = G__8781;
k = G__8782;
v = G__8783;
kvs = G__8784;
continue;
}
} else
{return ret__8772;
}
break;
}
};
var G__8779 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8779__delegate.call(this, coll, k, v, kvs);
};
G__8779.cljs$lang$maxFixedArity = 3;
G__8779.cljs$lang$applyTo = (function (arglist__8790){
var coll = cljs.core.first(arglist__8790);
var k = cljs.core.first(cljs.core.next(arglist__8790));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8790)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8790)));
return G__8779__delegate.call(this, coll, k, v, kvs);
});
return G__8779;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8774.call(this,coll,k,v);
default:
return assoc__8775.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8775.cljs$lang$applyTo;
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
var dissoc__8799 = (function (coll){
return coll;
});
var dissoc__8800 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8801 = (function() { 
var G__8803__delegate = function (coll,k,ks){
while(true){
var ret__8795 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8804 = ret__8795;
var G__8805 = cljs.core.first.call(null,ks);
var G__8806 = cljs.core.next.call(null,ks);
coll = G__8804;
k = G__8805;
ks = G__8806;
continue;
}
} else
{return ret__8795;
}
break;
}
};
var G__8803 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8803__delegate.call(this, coll, k, ks);
};
G__8803.cljs$lang$maxFixedArity = 2;
G__8803.cljs$lang$applyTo = (function (arglist__8807){
var coll = cljs.core.first(arglist__8807);
var k = cljs.core.first(cljs.core.next(arglist__8807));
var ks = cljs.core.rest(cljs.core.next(arglist__8807));
return G__8803__delegate.call(this, coll, k, ks);
});
return G__8803;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8799.call(this,coll);
case  2 :
return dissoc__8800.call(this,coll,k);
default:
return dissoc__8801.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8801.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8812 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8813 = x__445__auto____8812;

if(cljs.core.truth_(and__3546__auto____8813))
{var and__3546__auto____8814 = x__445__auto____8812.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8814))
{return cljs.core.not.call(null,x__445__auto____8812.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8814;
}
} else
{return and__3546__auto____8813;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8812);
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
var G__8832__delegate = function (coll,k,ks){
while(true){
var ret__8823 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8833 = ret__8823;
var G__8834 = cljs.core.first.call(null,ks);
var G__8835 = cljs.core.next.call(null,ks);
coll = G__8833;
k = G__8834;
ks = G__8835;
continue;
}
} else
{return ret__8823;
}
break;
}
};
var G__8832 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8832__delegate.call(this, coll, k, ks);
};
G__8832.cljs$lang$maxFixedArity = 2;
G__8832.cljs$lang$applyTo = (function (arglist__8836){
var coll = cljs.core.first(arglist__8836);
var k = cljs.core.first(cljs.core.next(arglist__8836));
var ks = cljs.core.rest(cljs.core.next(arglist__8836));
return G__8832__delegate.call(this, coll, k, ks);
});
return G__8832;
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
{var x__445__auto____8842 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8843 = x__445__auto____8842;

if(cljs.core.truth_(and__3546__auto____8843))
{var and__3546__auto____8845 = x__445__auto____8842.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8845))
{return cljs.core.not.call(null,x__445__auto____8842.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8845;
}
} else
{return and__3546__auto____8843;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8842);
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
{var x__445__auto____8846 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8847 = x__445__auto____8846;

if(cljs.core.truth_(and__3546__auto____8847))
{var and__3546__auto____8848 = x__445__auto____8846.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8848))
{return cljs.core.not.call(null,x__445__auto____8846.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8848;
}
} else
{return and__3546__auto____8847;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8846);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8849 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8850 = x__445__auto____8849;

if(cljs.core.truth_(and__3546__auto____8850))
{var and__3546__auto____8851 = x__445__auto____8849.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8851))
{return cljs.core.not.call(null,x__445__auto____8849.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8851;
}
} else
{return and__3546__auto____8850;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8849);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8858 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8859 = x__445__auto____8858;

if(cljs.core.truth_(and__3546__auto____8859))
{var and__3546__auto____8860 = x__445__auto____8858.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8860))
{return cljs.core.not.call(null,x__445__auto____8858.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8860;
}
} else
{return and__3546__auto____8859;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8858);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8864 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8866 = x__445__auto____8864;

if(cljs.core.truth_(and__3546__auto____8866))
{var and__3546__auto____8867 = x__445__auto____8864.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8867))
{return cljs.core.not.call(null,x__445__auto____8864.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8867;
}
} else
{return and__3546__auto____8866;
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
{var x__445__auto____8870 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8871 = x__445__auto____8870;

if(cljs.core.truth_(and__3546__auto____8871))
{var and__3546__auto____8874 = x__445__auto____8870.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8874))
{return cljs.core.not.call(null,x__445__auto____8870.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8874;
}
} else
{return and__3546__auto____8871;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8870);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8875 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8876 = x__445__auto____8875;

if(cljs.core.truth_(and__3546__auto____8876))
{var and__3546__auto____8878 = x__445__auto____8875.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8878))
{return cljs.core.not.call(null,x__445__auto____8875.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8878;
}
} else
{return and__3546__auto____8876;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8875);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8880 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8880.push(key);
}));
return keys__8880;
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
{var x__445__auto____8908 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8909 = x__445__auto____8908;

if(cljs.core.truth_(and__3546__auto____8909))
{var and__3546__auto____8910 = x__445__auto____8908.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8910))
{return cljs.core.not.call(null,x__445__auto____8908.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8910;
}
} else
{return and__3546__auto____8909;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8908);
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
var and__3546__auto____8923 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8923))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8925 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8925))
{return or__3548__auto____8925;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8923;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8929 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8929))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8929;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8933 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8933))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8933;
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
var and__3546__auto____8941 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8941))
{return (n == n.toFixed());
} else
{return and__3546__auto____8941;
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
if(cljs.core.truth_((function (){var and__3546__auto____8946 = coll;

if(cljs.core.truth_(and__3546__auto____8946))
{var and__3546__auto____8947 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8947))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8947;
}
} else
{return and__3546__auto____8946;
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
var distinct_QMARK___8967 = (function (x){
return true;
});
var distinct_QMARK___8968 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8969 = (function() { 
var G__8974__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8955 = cljs.core.set([y,x]);
var xs__8956 = more;

while(true){
var x__8957 = cljs.core.first.call(null,xs__8956);
var etc__8959 = cljs.core.next.call(null,xs__8956);

if(cljs.core.truth_(xs__8956))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8955,x__8957)))
{return false;
} else
{{
var G__8978 = cljs.core.conj.call(null,s__8955,x__8957);
var G__8980 = etc__8959;
s__8955 = G__8978;
xs__8956 = G__8980;
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
var G__8974 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8974__delegate.call(this, x, y, more);
};
G__8974.cljs$lang$maxFixedArity = 2;
G__8974.cljs$lang$applyTo = (function (arglist__8983){
var x = cljs.core.first(arglist__8983);
var y = cljs.core.first(cljs.core.next(arglist__8983));
var more = cljs.core.rest(cljs.core.next(arglist__8983));
return G__8974__delegate.call(this, x, y, more);
});
return G__8974;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8967.call(this,x);
case  2 :
return distinct_QMARK___8968.call(this,x,y);
default:
return distinct_QMARK___8969.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8969.cljs$lang$applyTo;
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
var r__8993 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8993)))
{return r__8993;
} else
{if(cljs.core.truth_(r__8993))
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
var sort__9010 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9012 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9004 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9004,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9004);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9010.call(this,comp);
case  2 :
return sort__9012.call(this,comp,coll);
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
var sort_by__9022 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9023 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9022.call(this,keyfn,comp);
case  3 :
return sort_by__9023.call(this,keyfn,comp,coll);
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
var reduce__9031 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9032 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9031.call(this,f,val);
case  3 :
return reduce__9032.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9044 = (function (f,coll){
var temp__3695__auto____9037 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9037))
{var s__9038 = temp__3695__auto____9037;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9038),cljs.core.next.call(null,s__9038));
} else
{return f.call(null);
}
});
var seq_reduce__9045 = (function (f,val,coll){
var val__9042 = val;
var coll__9043 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9043))
{{
var G__9053 = f.call(null,val__9042,cljs.core.first.call(null,coll__9043));
var G__9054 = cljs.core.next.call(null,coll__9043);
val__9042 = G__9053;
coll__9043 = G__9054;
continue;
}
} else
{return val__9042;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9044.call(this,f,val);
case  3 :
return seq_reduce__9045.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9070 = null;
var G__9070__9073 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9070__9074 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9070 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9070__9073.call(this,coll,f);
case  3 :
return G__9070__9074.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9070;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9082 = (function (){
return 0;
});
var _PLUS___9083 = (function (x){
return x;
});
var _PLUS___9084 = (function (x,y){
return (x + y);
});
var _PLUS___9085 = (function() { 
var G__9092__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9092 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9092__delegate.call(this, x, y, more);
};
G__9092.cljs$lang$maxFixedArity = 2;
G__9092.cljs$lang$applyTo = (function (arglist__9099){
var x = cljs.core.first(arglist__9099);
var y = cljs.core.first(cljs.core.next(arglist__9099));
var more = cljs.core.rest(cljs.core.next(arglist__9099));
return G__9092__delegate.call(this, x, y, more);
});
return G__9092;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9082.call(this);
case  1 :
return _PLUS___9083.call(this,x);
case  2 :
return _PLUS___9084.call(this,x,y);
default:
return _PLUS___9085.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9085.cljs$lang$applyTo;
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
var ___9118 = (function (x){
return (- x);
});
var ___9119 = (function (x,y){
return (x - y);
});
var ___9120 = (function() { 
var G__9122__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9122 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9122__delegate.call(this, x, y, more);
};
G__9122.cljs$lang$maxFixedArity = 2;
G__9122.cljs$lang$applyTo = (function (arglist__9127){
var x = cljs.core.first(arglist__9127);
var y = cljs.core.first(cljs.core.next(arglist__9127));
var more = cljs.core.rest(cljs.core.next(arglist__9127));
return G__9122__delegate.call(this, x, y, more);
});
return G__9122;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9118.call(this,x);
case  2 :
return ___9119.call(this,x,y);
default:
return ___9120.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9120.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9138 = (function (){
return 1;
});
var _STAR___9140 = (function (x){
return x;
});
var _STAR___9141 = (function (x,y){
return (x * y);
});
var _STAR___9144 = (function() { 
var G__9147__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9147 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9147__delegate.call(this, x, y, more);
};
G__9147.cljs$lang$maxFixedArity = 2;
G__9147.cljs$lang$applyTo = (function (arglist__9149){
var x = cljs.core.first(arglist__9149);
var y = cljs.core.first(cljs.core.next(arglist__9149));
var more = cljs.core.rest(cljs.core.next(arglist__9149));
return G__9147__delegate.call(this, x, y, more);
});
return G__9147;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9138.call(this);
case  1 :
return _STAR___9140.call(this,x);
case  2 :
return _STAR___9141.call(this,x,y);
default:
return _STAR___9144.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9144.cljs$lang$applyTo;
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
var _SLASH___9157 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9158 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9159 = (function() { 
var G__9162__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9162 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9162__delegate.call(this, x, y, more);
};
G__9162.cljs$lang$maxFixedArity = 2;
G__9162.cljs$lang$applyTo = (function (arglist__9168){
var x = cljs.core.first(arglist__9168);
var y = cljs.core.first(cljs.core.next(arglist__9168));
var more = cljs.core.rest(cljs.core.next(arglist__9168));
return G__9162__delegate.call(this, x, y, more);
});
return G__9162;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9157.call(this,x);
case  2 :
return _SLASH___9158.call(this,x,y);
default:
return _SLASH___9159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9159.cljs$lang$applyTo;
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
var _LT___9173 = (function (x){
return true;
});
var _LT___9175 = (function (x,y){
return (x < y);
});
var _LT___9177 = (function() { 
var G__9179__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9180 = y;
var G__9181 = cljs.core.first.call(null,more);
var G__9182 = cljs.core.next.call(null,more);
x = G__9180;
y = G__9181;
more = G__9182;
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
var G__9179 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9179__delegate.call(this, x, y, more);
};
G__9179.cljs$lang$maxFixedArity = 2;
G__9179.cljs$lang$applyTo = (function (arglist__9183){
var x = cljs.core.first(arglist__9183);
var y = cljs.core.first(cljs.core.next(arglist__9183));
var more = cljs.core.rest(cljs.core.next(arglist__9183));
return G__9179__delegate.call(this, x, y, more);
});
return G__9179;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9173.call(this,x);
case  2 :
return _LT___9175.call(this,x,y);
default:
return _LT___9177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9177.cljs$lang$applyTo;
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
var _LT__EQ___9322 = (function (x){
return true;
});
var _LT__EQ___9323 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9324 = (function() { 
var G__9326__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9327 = y;
var G__9328 = cljs.core.first.call(null,more);
var G__9329 = cljs.core.next.call(null,more);
x = G__9327;
y = G__9328;
more = G__9329;
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
var G__9326 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9326__delegate.call(this, x, y, more);
};
G__9326.cljs$lang$maxFixedArity = 2;
G__9326.cljs$lang$applyTo = (function (arglist__9330){
var x = cljs.core.first(arglist__9330);
var y = cljs.core.first(cljs.core.next(arglist__9330));
var more = cljs.core.rest(cljs.core.next(arglist__9330));
return G__9326__delegate.call(this, x, y, more);
});
return G__9326;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9322.call(this,x);
case  2 :
return _LT__EQ___9323.call(this,x,y);
default:
return _LT__EQ___9324.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9324.cljs$lang$applyTo;
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
var _GT___9340 = (function (x){
return true;
});
var _GT___9341 = (function (x,y){
return (x > y);
});
var _GT___9342 = (function() { 
var G__9344__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9345 = y;
var G__9346 = cljs.core.first.call(null,more);
var G__9347 = cljs.core.next.call(null,more);
x = G__9345;
y = G__9346;
more = G__9347;
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
var G__9344 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9344__delegate.call(this, x, y, more);
};
G__9344.cljs$lang$maxFixedArity = 2;
G__9344.cljs$lang$applyTo = (function (arglist__9348){
var x = cljs.core.first(arglist__9348);
var y = cljs.core.first(cljs.core.next(arglist__9348));
var more = cljs.core.rest(cljs.core.next(arglist__9348));
return G__9344__delegate.call(this, x, y, more);
});
return G__9344;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9340.call(this,x);
case  2 :
return _GT___9341.call(this,x,y);
default:
return _GT___9342.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9342.cljs$lang$applyTo;
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
var _GT__EQ___9358 = (function (x){
return true;
});
var _GT__EQ___9359 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9360 = (function() { 
var G__9362__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9363 = y;
var G__9364 = cljs.core.first.call(null,more);
var G__9365 = cljs.core.next.call(null,more);
x = G__9363;
y = G__9364;
more = G__9365;
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
var G__9362 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9362__delegate.call(this, x, y, more);
};
G__9362.cljs$lang$maxFixedArity = 2;
G__9362.cljs$lang$applyTo = (function (arglist__9366){
var x = cljs.core.first(arglist__9366);
var y = cljs.core.first(cljs.core.next(arglist__9366));
var more = cljs.core.rest(cljs.core.next(arglist__9366));
return G__9362__delegate.call(this, x, y, more);
});
return G__9362;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9358.call(this,x);
case  2 :
return _GT__EQ___9359.call(this,x,y);
default:
return _GT__EQ___9360.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9360.cljs$lang$applyTo;
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
var max__9373 = (function (x){
return x;
});
var max__9374 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9375 = (function() { 
var G__9377__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9377 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9377__delegate.call(this, x, y, more);
};
G__9377.cljs$lang$maxFixedArity = 2;
G__9377.cljs$lang$applyTo = (function (arglist__9382){
var x = cljs.core.first(arglist__9382);
var y = cljs.core.first(cljs.core.next(arglist__9382));
var more = cljs.core.rest(cljs.core.next(arglist__9382));
return G__9377__delegate.call(this, x, y, more);
});
return G__9377;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9373.call(this,x);
case  2 :
return max__9374.call(this,x,y);
default:
return max__9375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9375.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9387 = (function (x){
return x;
});
var min__9388 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9389 = (function() { 
var G__9391__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9391 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9391__delegate.call(this, x, y, more);
};
G__9391.cljs$lang$maxFixedArity = 2;
G__9391.cljs$lang$applyTo = (function (arglist__9392){
var x = cljs.core.first(arglist__9392);
var y = cljs.core.first(cljs.core.next(arglist__9392));
var more = cljs.core.rest(cljs.core.next(arglist__9392));
return G__9391__delegate.call(this, x, y, more);
});
return G__9391;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9387.call(this,x);
case  2 :
return min__9388.call(this,x,y);
default:
return min__9389.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9389.cljs$lang$applyTo;
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
var rem__9397 = (n % d);

return cljs.core.fix.call(null,((n - rem__9397) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9399 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9399));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9405 = (function (){
return Math.random.call(null);
});
var rand__9406 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9405.call(this);
case  1 :
return rand__9406.call(this,n);
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
var _EQ__EQ___9426 = (function (x){
return true;
});
var _EQ__EQ___9427 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9428 = (function() { 
var G__9430__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9431 = y;
var G__9432 = cljs.core.first.call(null,more);
var G__9433 = cljs.core.next.call(null,more);
x = G__9431;
y = G__9432;
more = G__9433;
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
var G__9430 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9430__delegate.call(this, x, y, more);
};
G__9430.cljs$lang$maxFixedArity = 2;
G__9430.cljs$lang$applyTo = (function (arglist__9434){
var x = cljs.core.first(arglist__9434);
var y = cljs.core.first(cljs.core.next(arglist__9434));
var more = cljs.core.rest(cljs.core.next(arglist__9434));
return G__9430__delegate.call(this, x, y, more);
});
return G__9430;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9426.call(this,x);
case  2 :
return _EQ__EQ___9427.call(this,x,y);
default:
return _EQ__EQ___9428.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9428.cljs$lang$applyTo;
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
var n__9445 = n;
var xs__9447 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9450 = xs__9447;

if(cljs.core.truth_(and__3546__auto____9450))
{return (n__9445 > 0);
} else
{return and__3546__auto____9450;
}
})()))
{{
var G__9454 = (n__9445 - 1);
var G__9455 = cljs.core.next.call(null,xs__9447);
n__9445 = G__9454;
xs__9447 = G__9455;
continue;
}
} else
{return xs__9447;
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
var temp__3695__auto____9469 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9469))
{var xs__9473 = temp__3695__auto____9469;

return cljs.core.first.call(null,xs__9473);
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
var str_STAR___9483 = (function (){
return "";
});
var str_STAR___9485 = (function (x){
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
var str_STAR___9487 = (function() { 
var G__9492__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9493 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9494 = cljs.core.next.call(null,more);
sb = G__9493;
more = G__9494;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9492 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9492__delegate.call(this, x, ys);
};
G__9492.cljs$lang$maxFixedArity = 1;
G__9492.cljs$lang$applyTo = (function (arglist__9500){
var x = cljs.core.first(arglist__9500);
var ys = cljs.core.rest(arglist__9500);
return G__9492__delegate.call(this, x, ys);
});
return G__9492;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9483.call(this);
case  1 :
return str_STAR___9485.call(this,x);
default:
return str_STAR___9487.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9487.cljs$lang$applyTo;
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
var str__9511 = (function (){
return "";
});
var str__9512 = (function (x){
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
var str__9513 = (function() { 
var G__9515__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9515 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9515__delegate.call(this, x, ys);
};
G__9515.cljs$lang$maxFixedArity = 1;
G__9515.cljs$lang$applyTo = (function (arglist__9517){
var x = cljs.core.first(arglist__9517);
var ys = cljs.core.rest(arglist__9517);
return G__9515__delegate.call(this, x, ys);
});
return G__9515;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9511.call(this);
case  1 :
return str__9512.call(this,x);
default:
return str__9513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9513.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9526 = (function (s,start){
return s.substring(start);
});
var subs__9527 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9526.call(this,s,start);
case  3 :
return subs__9527.call(this,s,start,end);
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
var symbol__9530 = (function (name){
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
var symbol__9531 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9530.call(this,ns);
case  2 :
return symbol__9531.call(this,ns,name);
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
var keyword__9542 = (function (name){
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
var keyword__9543 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9542.call(this,ns);
case  2 :
return keyword__9543.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9548 = cljs.core.seq.call(null,x);
var ys__9549 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9548)))
{return cljs.core.nil_QMARK_.call(null,ys__9549);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9549)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9548),cljs.core.first.call(null,ys__9549))))
{{
var G__9559 = cljs.core.next.call(null,xs__9548);
var G__9560 = cljs.core.next.call(null,ys__9549);
xs__9548 = G__9559;
ys__9549 = G__9560;
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
return cljs.core.reduce.call(null,(function (p1__9561_SHARP_,p2__9562_SHARP_){
return cljs.core.hash_combine.call(null,p1__9561_SHARP_,cljs.core.hash.call(null,p2__9562_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9574__9575 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9574__9575))
{var G__9577__9579 = cljs.core.first.call(null,G__9574__9575);
var vec__9578__9580 = G__9577__9579;
var key_name__9581 = cljs.core.nth.call(null,vec__9578__9580,0,null);
var f__9582 = cljs.core.nth.call(null,vec__9578__9580,1,null);
var G__9574__9583 = G__9574__9575;

var G__9577__9584 = G__9577__9579;
var G__9574__9585 = G__9574__9583;

while(true){
var vec__9587__9590 = G__9577__9584;
var key_name__9591 = cljs.core.nth.call(null,vec__9587__9590,0,null);
var f__9592 = cljs.core.nth.call(null,vec__9587__9590,1,null);
var G__9574__9593 = G__9574__9585;

var str_name__9596 = cljs.core.name.call(null,key_name__9591);

obj[str_name__9596] = f__9592;
var temp__3698__auto____9597 = cljs.core.next.call(null,G__9574__9593);

if(cljs.core.truth_(temp__3698__auto____9597))
{var G__9574__9598 = temp__3698__auto____9597;

{
var G__9603 = cljs.core.first.call(null,G__9574__9598);
var G__9604 = G__9574__9598;
G__9577__9584 = G__9603;
G__9574__9585 = G__9604;
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
var this__9605 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9606 = this;
return (new cljs.core.List(this__9606.meta,o,coll,(this__9606.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9607 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9608 = this;
return this__9608.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9609 = this;
return this__9609.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9610 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9611 = this;
return this__9611.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9612 = this;
return this__9612.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9613 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9614 = this;
return (new cljs.core.List(meta,this__9614.first,this__9614.rest,this__9614.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9615 = this;
return this__9615.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9616 = this;
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
var this__9626 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9627 = this;
return (new cljs.core.List(this__9627.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9628 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9629 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9630 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9631 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9632 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9633 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9634 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9637 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9639 = this;
return this__9639.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9640 = this;
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
list.cljs$lang$applyTo = (function (arglist__9662){
var items = cljs.core.seq( arglist__9662 );;
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
var this__9716 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__9717 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9718 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9721 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__9721.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9726 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9728 = this;
return this__9728.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9732 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__9732.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__9732.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9733 = this;
return this__9733.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9734 = this;
return (new cljs.core.Cons(meta,this__9734.first,this__9734.rest));
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
var G__9779 = null;
var G__9779__9780 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__9779__9781 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__9779 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__9779__9780.call(this,string,f);
case  3 :
return G__9779__9781.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9779;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__9789 = null;
var G__9789__9790 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__9789__9791 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__9789 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__9789__9790.call(this,string,k);
case  3 :
return G__9789__9791.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9789;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__9795 = null;
var G__9795__9796 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__9795__9797 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__9795 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__9795__9796.call(this,string,n);
case  3 :
return G__9795__9797.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9795;
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
var G__9813 = null;
var G__9813__9814 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__9813__9815 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__9813 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__9813__9814.call(this,this$,coll);
case  3 :
return G__9813__9815.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9813;
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
var x__10003 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10003;
} else
{lazy_seq.x = x__10003.call(null);
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
var this__10005 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10006 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10007 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10009 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10009.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10012 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10014 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10016 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10019 = this;
return this__10019.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10021 = this;
return (new cljs.core.LazySeq(meta,this__10021.realized,this__10021.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10026 = cljs.core.array.call(null);

var s__10027 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10027)))
{ary__10026.push(cljs.core.first.call(null,s__10027));
{
var G__10028 = cljs.core.next.call(null,s__10027);
s__10027 = G__10028;
continue;
}
} else
{return ary__10026;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10029 = s;
var i__10030 = n;
var sum__10031 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10032 = (i__10030 > 0);

if(cljs.core.truth_(and__3546__auto____10032))
{return cljs.core.seq.call(null,s__10029);
} else
{return and__3546__auto____10032;
}
})()))
{{
var G__10052 = cljs.core.next.call(null,s__10029);
var G__10053 = (i__10030 - 1);
var G__10054 = (sum__10031 + 1);
s__10029 = G__10052;
i__10030 = G__10053;
sum__10031 = G__10054;
continue;
}
} else
{return sum__10031;
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
var concat__10077 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10078 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10079 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10070 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10070))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10070),concat.call(null,cljs.core.rest.call(null,s__10070),y));
} else
{return y;
}
})));
});
var concat__10080 = (function() { 
var G__10082__delegate = function (x,y,zs){
var cat__10076 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10075 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10075))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10075),cat.call(null,cljs.core.rest.call(null,xys__10075),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10076.call(null,concat.call(null,x,y),zs);
};
var G__10082 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10082__delegate.call(this, x, y, zs);
};
G__10082.cljs$lang$maxFixedArity = 2;
G__10082.cljs$lang$applyTo = (function (arglist__10087){
var x = cljs.core.first(arglist__10087);
var y = cljs.core.first(cljs.core.next(arglist__10087));
var zs = cljs.core.rest(cljs.core.next(arglist__10087));
return G__10082__delegate.call(this, x, y, zs);
});
return G__10082;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10077.call(this);
case  1 :
return concat__10078.call(this,x);
case  2 :
return concat__10079.call(this,x,y);
default:
return concat__10080.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10080.cljs$lang$applyTo;
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
var list_STAR___10089 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10090 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10091 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10092 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10093 = (function() { 
var G__10097__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10097 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10097__delegate.call(this, a, b, c, d, more);
};
G__10097.cljs$lang$maxFixedArity = 4;
G__10097.cljs$lang$applyTo = (function (arglist__10100){
var a = cljs.core.first(arglist__10100);
var b = cljs.core.first(cljs.core.next(arglist__10100));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10100)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10100))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10100))));
return G__10097__delegate.call(this, a, b, c, d, more);
});
return G__10097;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10089.call(this,a);
case  2 :
return list_STAR___10090.call(this,a,b);
case  3 :
return list_STAR___10091.call(this,a,b,c);
case  4 :
return list_STAR___10092.call(this,a,b,c,d);
default:
return list_STAR___10093.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10093.cljs$lang$applyTo;
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
var apply__10131 = (function (f,args){
var fixed_arity__10106 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10106 + 1)) <= fixed_arity__10106)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10132 = (function (f,x,args){
var arglist__10110 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10111 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10110,fixed_arity__10111) <= fixed_arity__10111)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10110));
} else
{return f.cljs$lang$applyTo(arglist__10110);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10110));
}
});
var apply__10133 = (function (f,x,y,args){
var arglist__10112 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10113 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10112,fixed_arity__10113) <= fixed_arity__10113)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10112));
} else
{return f.cljs$lang$applyTo(arglist__10112);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10112));
}
});
var apply__10134 = (function (f,x,y,z,args){
var arglist__10114 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10115 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10114,fixed_arity__10115) <= fixed_arity__10115)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10114));
} else
{return f.cljs$lang$applyTo(arglist__10114);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10114));
}
});
var apply__10135 = (function() { 
var G__10141__delegate = function (f,a,b,c,d,args){
var arglist__10125 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10126 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10125,fixed_arity__10126) <= fixed_arity__10126)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10125));
} else
{return f.cljs$lang$applyTo(arglist__10125);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10125));
}
};
var G__10141 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10141__delegate.call(this, f, a, b, c, d, args);
};
G__10141.cljs$lang$maxFixedArity = 5;
G__10141.cljs$lang$applyTo = (function (arglist__10142){
var f = cljs.core.first(arglist__10142);
var a = cljs.core.first(cljs.core.next(arglist__10142));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10142)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10142))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10142)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10142)))));
return G__10141__delegate.call(this, f, a, b, c, d, args);
});
return G__10141;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10131.call(this,f,a);
case  3 :
return apply__10132.call(this,f,a,b);
case  4 :
return apply__10133.call(this,f,a,b,c);
case  5 :
return apply__10134.call(this,f,a,b,c,d);
default:
return apply__10135.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10135.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10144){
var obj = cljs.core.first(arglist__10144);
var f = cljs.core.first(cljs.core.next(arglist__10144));
var args = cljs.core.rest(cljs.core.next(arglist__10144));
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
var not_EQ___10148 = (function (x){
return false;
});
var not_EQ___10149 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10150 = (function() { 
var G__10152__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10152 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10152__delegate.call(this, x, y, more);
};
G__10152.cljs$lang$maxFixedArity = 2;
G__10152.cljs$lang$applyTo = (function (arglist__10153){
var x = cljs.core.first(arglist__10153);
var y = cljs.core.first(cljs.core.next(arglist__10153));
var more = cljs.core.rest(cljs.core.next(arglist__10153));
return G__10152__delegate.call(this, x, y, more);
});
return G__10152;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10148.call(this,x);
case  2 :
return not_EQ___10149.call(this,x,y);
default:
return not_EQ___10150.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10150.cljs$lang$applyTo;
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
var G__10164 = pred;
var G__10165 = cljs.core.next.call(null,coll);
pred = G__10164;
coll = G__10165;
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
{var or__3548__auto____10176 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10176))
{return or__3548__auto____10176;
} else
{{
var G__10180 = pred;
var G__10181 = cljs.core.next.call(null,coll);
pred = G__10180;
coll = G__10181;
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
var G__10215 = null;
var G__10215__10216 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10215__10217 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10215__10218 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10215__10219 = (function() { 
var G__10227__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10227 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10227__delegate.call(this, x, y, zs);
};
G__10227.cljs$lang$maxFixedArity = 2;
G__10227.cljs$lang$applyTo = (function (arglist__10229){
var x = cljs.core.first(arglist__10229);
var y = cljs.core.first(cljs.core.next(arglist__10229));
var zs = cljs.core.rest(cljs.core.next(arglist__10229));
return G__10227__delegate.call(this, x, y, zs);
});
return G__10227;
})()
;
G__10215 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10215__10216.call(this);
case  1 :
return G__10215__10217.call(this,x);
case  2 :
return G__10215__10218.call(this,x,y);
default:
return G__10215__10219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10215.cljs$lang$maxFixedArity = 2;
G__10215.cljs$lang$applyTo = G__10215__10219.cljs$lang$applyTo;
return G__10215;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10232__delegate = function (args){
return x;
};
var G__10232 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10232__delegate.call(this, args);
};
G__10232.cljs$lang$maxFixedArity = 0;
G__10232.cljs$lang$applyTo = (function (arglist__10233){
var args = cljs.core.seq( arglist__10233 );;
return G__10232__delegate.call(this, args);
});
return G__10232;
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
var comp__10252 = (function (){
return cljs.core.identity;
});
var comp__10253 = (function (f){
return f;
});
var comp__10254 = (function (f,g){
return (function() {
var G__10259 = null;
var G__10259__10260 = (function (){
return f.call(null,g.call(null));
});
var G__10259__10261 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10259__10262 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10259__10263 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10259__10264 = (function() { 
var G__10270__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10270 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10270__delegate.call(this, x, y, z, args);
};
G__10270.cljs$lang$maxFixedArity = 3;
G__10270.cljs$lang$applyTo = (function (arglist__10271){
var x = cljs.core.first(arglist__10271);
var y = cljs.core.first(cljs.core.next(arglist__10271));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10271)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10271)));
return G__10270__delegate.call(this, x, y, z, args);
});
return G__10270;
})()
;
G__10259 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10259__10260.call(this);
case  1 :
return G__10259__10261.call(this,x);
case  2 :
return G__10259__10262.call(this,x,y);
case  3 :
return G__10259__10263.call(this,x,y,z);
default:
return G__10259__10264.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10259.cljs$lang$maxFixedArity = 3;
G__10259.cljs$lang$applyTo = G__10259__10264.cljs$lang$applyTo;
return G__10259;
})()
});
var comp__10255 = (function (f,g,h){
return (function() {
var G__10272 = null;
var G__10272__10273 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10272__10274 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10272__10275 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10272__10276 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10272__10277 = (function() { 
var G__10279__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10279 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10279__delegate.call(this, x, y, z, args);
};
G__10279.cljs$lang$maxFixedArity = 3;
G__10279.cljs$lang$applyTo = (function (arglist__10280){
var x = cljs.core.first(arglist__10280);
var y = cljs.core.first(cljs.core.next(arglist__10280));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10280)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10280)));
return G__10279__delegate.call(this, x, y, z, args);
});
return G__10279;
})()
;
G__10272 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10272__10273.call(this);
case  1 :
return G__10272__10274.call(this,x);
case  2 :
return G__10272__10275.call(this,x,y);
case  3 :
return G__10272__10276.call(this,x,y,z);
default:
return G__10272__10277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10272.cljs$lang$maxFixedArity = 3;
G__10272.cljs$lang$applyTo = G__10272__10277.cljs$lang$applyTo;
return G__10272;
})()
});
var comp__10256 = (function() { 
var G__10288__delegate = function (f1,f2,f3,fs){
var fs__10244 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10289__delegate = function (args){
var ret__10246 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10244),args);
var fs__10247 = cljs.core.next.call(null,fs__10244);

while(true){
if(cljs.core.truth_(fs__10247))
{{
var G__10290 = cljs.core.first.call(null,fs__10247).call(null,ret__10246);
var G__10291 = cljs.core.next.call(null,fs__10247);
ret__10246 = G__10290;
fs__10247 = G__10291;
continue;
}
} else
{return ret__10246;
}
break;
}
};
var G__10289 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10289__delegate.call(this, args);
};
G__10289.cljs$lang$maxFixedArity = 0;
G__10289.cljs$lang$applyTo = (function (arglist__10293){
var args = cljs.core.seq( arglist__10293 );;
return G__10289__delegate.call(this, args);
});
return G__10289;
})()
;
};
var G__10288 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10288__delegate.call(this, f1, f2, f3, fs);
};
G__10288.cljs$lang$maxFixedArity = 3;
G__10288.cljs$lang$applyTo = (function (arglist__10295){
var f1 = cljs.core.first(arglist__10295);
var f2 = cljs.core.first(cljs.core.next(arglist__10295));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10295)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10295)));
return G__10288__delegate.call(this, f1, f2, f3, fs);
});
return G__10288;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10252.call(this);
case  1 :
return comp__10253.call(this,f1);
case  2 :
return comp__10254.call(this,f1,f2);
case  3 :
return comp__10255.call(this,f1,f2,f3);
default:
return comp__10256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10256.cljs$lang$applyTo;
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
var partial__10300 = (function (f,arg1){
return (function() { 
var G__10306__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10306 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10306__delegate.call(this, args);
};
G__10306.cljs$lang$maxFixedArity = 0;
G__10306.cljs$lang$applyTo = (function (arglist__10308){
var args = cljs.core.seq( arglist__10308 );;
return G__10306__delegate.call(this, args);
});
return G__10306;
})()
;
});
var partial__10301 = (function (f,arg1,arg2){
return (function() { 
var G__10310__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10310 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10310__delegate.call(this, args);
};
G__10310.cljs$lang$maxFixedArity = 0;
G__10310.cljs$lang$applyTo = (function (arglist__10311){
var args = cljs.core.seq( arglist__10311 );;
return G__10310__delegate.call(this, args);
});
return G__10310;
})()
;
});
var partial__10302 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10312__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10312 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10312__delegate.call(this, args);
};
G__10312.cljs$lang$maxFixedArity = 0;
G__10312.cljs$lang$applyTo = (function (arglist__10315){
var args = cljs.core.seq( arglist__10315 );;
return G__10312__delegate.call(this, args);
});
return G__10312;
})()
;
});
var partial__10304 = (function() { 
var G__10320__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10321__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10321 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10321__delegate.call(this, args);
};
G__10321.cljs$lang$maxFixedArity = 0;
G__10321.cljs$lang$applyTo = (function (arglist__10322){
var args = cljs.core.seq( arglist__10322 );;
return G__10321__delegate.call(this, args);
});
return G__10321;
})()
;
};
var G__10320 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10320__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10320.cljs$lang$maxFixedArity = 4;
G__10320.cljs$lang$applyTo = (function (arglist__10323){
var f = cljs.core.first(arglist__10323);
var arg1 = cljs.core.first(cljs.core.next(arglist__10323));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10323)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10323))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10323))));
return G__10320__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10320;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10300.call(this,f,arg1);
case  3 :
return partial__10301.call(this,f,arg1,arg2);
case  4 :
return partial__10302.call(this,f,arg1,arg2,arg3);
default:
return partial__10304.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10304.cljs$lang$applyTo;
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
var fnil__10331 = (function (f,x){
return (function() {
var G__10336 = null;
var G__10336__10337 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10336__10338 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10336__10339 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10336__10340 = (function() { 
var G__10354__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10354 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10354__delegate.call(this, a, b, c, ds);
};
G__10354.cljs$lang$maxFixedArity = 3;
G__10354.cljs$lang$applyTo = (function (arglist__10355){
var a = cljs.core.first(arglist__10355);
var b = cljs.core.first(cljs.core.next(arglist__10355));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10355)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10355)));
return G__10354__delegate.call(this, a, b, c, ds);
});
return G__10354;
})()
;
G__10336 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10336__10337.call(this,a);
case  2 :
return G__10336__10338.call(this,a,b);
case  3 :
return G__10336__10339.call(this,a,b,c);
default:
return G__10336__10340.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10336.cljs$lang$maxFixedArity = 3;
G__10336.cljs$lang$applyTo = G__10336__10340.cljs$lang$applyTo;
return G__10336;
})()
});
var fnil__10332 = (function (f,x,y){
return (function() {
var G__10361 = null;
var G__10361__10362 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10361__10363 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10361__10364 = (function() { 
var G__10369__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10369 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10369__delegate.call(this, a, b, c, ds);
};
G__10369.cljs$lang$maxFixedArity = 3;
G__10369.cljs$lang$applyTo = (function (arglist__10371){
var a = cljs.core.first(arglist__10371);
var b = cljs.core.first(cljs.core.next(arglist__10371));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10371)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10371)));
return G__10369__delegate.call(this, a, b, c, ds);
});
return G__10369;
})()
;
G__10361 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10361__10362.call(this,a,b);
case  3 :
return G__10361__10363.call(this,a,b,c);
default:
return G__10361__10364.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10361.cljs$lang$maxFixedArity = 3;
G__10361.cljs$lang$applyTo = G__10361__10364.cljs$lang$applyTo;
return G__10361;
})()
});
var fnil__10333 = (function (f,x,y,z){
return (function() {
var G__10372 = null;
var G__10372__10373 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10372__10374 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10372__10375 = (function() { 
var G__10377__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10377 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10377__delegate.call(this, a, b, c, ds);
};
G__10377.cljs$lang$maxFixedArity = 3;
G__10377.cljs$lang$applyTo = (function (arglist__10381){
var a = cljs.core.first(arglist__10381);
var b = cljs.core.first(cljs.core.next(arglist__10381));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10381)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10381)));
return G__10377__delegate.call(this, a, b, c, ds);
});
return G__10377;
})()
;
G__10372 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10372__10373.call(this,a,b);
case  3 :
return G__10372__10374.call(this,a,b,c);
default:
return G__10372__10375.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10372.cljs$lang$maxFixedArity = 3;
G__10372.cljs$lang$applyTo = G__10372__10375.cljs$lang$applyTo;
return G__10372;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10331.call(this,f,x);
case  3 :
return fnil__10332.call(this,f,x,y);
case  4 :
return fnil__10333.call(this,f,x,y,z);
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
var mapi__10394 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10386 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10386))
{var s__10391 = temp__3698__auto____10386;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10391)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10391)));
} else
{return null;
}
})));
});

return mapi__10394.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10410 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10410))
{var s__10412 = temp__3698__auto____10410;

var x__10413 = f.call(null,cljs.core.first.call(null,s__10412));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10413)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10412));
} else
{return cljs.core.cons.call(null,x__10413,keep.call(null,f,cljs.core.rest.call(null,s__10412)));
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
var keepi__10530 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10518 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10518))
{var s__10520 = temp__3698__auto____10518;

var x__10521 = f.call(null,idx,cljs.core.first.call(null,s__10520));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10521)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10520));
} else
{return cljs.core.cons.call(null,x__10521,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10520)));
}
} else
{return null;
}
})));
});

return keepi__10530.call(null,0,coll);
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
var every_pred__10793 = (function (p){
return (function() {
var ep1 = null;
var ep1__10798 = (function (){
return true;
});
var ep1__10799 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10800 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10548 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10548))
{return p.call(null,y);
} else
{return and__3546__auto____10548;
}
})());
});
var ep1__10801 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10551 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10551))
{var and__3546__auto____10552 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10552))
{return p.call(null,z);
} else
{return and__3546__auto____10552;
}
} else
{return and__3546__auto____10551;
}
})());
});
var ep1__10802 = (function() { 
var G__10809__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10558 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10558))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10558;
}
})());
};
var G__10809 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10809__delegate.call(this, x, y, z, args);
};
G__10809.cljs$lang$maxFixedArity = 3;
G__10809.cljs$lang$applyTo = (function (arglist__10812){
var x = cljs.core.first(arglist__10812);
var y = cljs.core.first(cljs.core.next(arglist__10812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10812)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10812)));
return G__10809__delegate.call(this, x, y, z, args);
});
return G__10809;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10798.call(this);
case  1 :
return ep1__10799.call(this,x);
case  2 :
return ep1__10800.call(this,x,y);
case  3 :
return ep1__10801.call(this,x,y,z);
default:
return ep1__10802.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10802.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10794 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__10816 = (function (){
return true;
});
var ep2__10817 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10561 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10561))
{return p2.call(null,x);
} else
{return and__3546__auto____10561;
}
})());
});
var ep2__10818 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10562 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10562))
{var and__3546__auto____10563 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10563))
{var and__3546__auto____10564 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10564))
{return p2.call(null,y);
} else
{return and__3546__auto____10564;
}
} else
{return and__3546__auto____10563;
}
} else
{return and__3546__auto____10562;
}
})());
});
var ep2__10819 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10565 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10565))
{var and__3546__auto____10566 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10566))
{var and__3546__auto____10567 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10567))
{var and__3546__auto____10568 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10568))
{var and__3546__auto____10569 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10569))
{return p2.call(null,z);
} else
{return and__3546__auto____10569;
}
} else
{return and__3546__auto____10568;
}
} else
{return and__3546__auto____10567;
}
} else
{return and__3546__auto____10566;
}
} else
{return and__3546__auto____10565;
}
})());
});
var ep2__10820 = (function() { 
var G__10833__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10570 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10570))
{return cljs.core.every_QMARK_.call(null,(function (p1__10508_SHARP_){
var and__3546__auto____10571 = p1.call(null,p1__10508_SHARP_);

if(cljs.core.truth_(and__3546__auto____10571))
{return p2.call(null,p1__10508_SHARP_);
} else
{return and__3546__auto____10571;
}
}),args);
} else
{return and__3546__auto____10570;
}
})());
};
var G__10833 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10833__delegate.call(this, x, y, z, args);
};
G__10833.cljs$lang$maxFixedArity = 3;
G__10833.cljs$lang$applyTo = (function (arglist__10839){
var x = cljs.core.first(arglist__10839);
var y = cljs.core.first(cljs.core.next(arglist__10839));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10839)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10839)));
return G__10833__delegate.call(this, x, y, z, args);
});
return G__10833;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__10816.call(this);
case  1 :
return ep2__10817.call(this,x);
case  2 :
return ep2__10818.call(this,x,y);
case  3 :
return ep2__10819.call(this,x,y,z);
default:
return ep2__10820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__10820.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10795 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__10841 = (function (){
return true;
});
var ep3__10842 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10689 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10689))
{var and__3546__auto____10690 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10690))
{return p3.call(null,x);
} else
{return and__3546__auto____10690;
}
} else
{return and__3546__auto____10689;
}
})());
});
var ep3__10843 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10693 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10693))
{var and__3546__auto____10700 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10700))
{var and__3546__auto____10701 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10701))
{var and__3546__auto____10702 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10702))
{var and__3546__auto____10703 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10703))
{return p3.call(null,y);
} else
{return and__3546__auto____10703;
}
} else
{return and__3546__auto____10702;
}
} else
{return and__3546__auto____10701;
}
} else
{return and__3546__auto____10700;
}
} else
{return and__3546__auto____10693;
}
})());
});
var ep3__10844 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10729 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10729))
{var and__3546__auto____10731 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10731))
{var and__3546__auto____10732 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10732))
{var and__3546__auto____10733 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10733))
{var and__3546__auto____10738 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10738))
{var and__3546__auto____10746 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10746))
{var and__3546__auto____10747 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10747))
{var and__3546__auto____10748 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10748))
{return p3.call(null,z);
} else
{return and__3546__auto____10748;
}
} else
{return and__3546__auto____10747;
}
} else
{return and__3546__auto____10746;
}
} else
{return and__3546__auto____10738;
}
} else
{return and__3546__auto____10733;
}
} else
{return and__3546__auto____10732;
}
} else
{return and__3546__auto____10731;
}
} else
{return and__3546__auto____10729;
}
})());
});
var ep3__10845 = (function() { 
var G__10863__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10751 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10751))
{return cljs.core.every_QMARK_.call(null,(function (p1__10510_SHARP_){
var and__3546__auto____10754 = p1.call(null,p1__10510_SHARP_);

if(cljs.core.truth_(and__3546__auto____10754))
{var and__3546__auto____10756 = p2.call(null,p1__10510_SHARP_);

if(cljs.core.truth_(and__3546__auto____10756))
{return p3.call(null,p1__10510_SHARP_);
} else
{return and__3546__auto____10756;
}
} else
{return and__3546__auto____10754;
}
}),args);
} else
{return and__3546__auto____10751;
}
})());
};
var G__10863 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10863__delegate.call(this, x, y, z, args);
};
G__10863.cljs$lang$maxFixedArity = 3;
G__10863.cljs$lang$applyTo = (function (arglist__10876){
var x = cljs.core.first(arglist__10876);
var y = cljs.core.first(cljs.core.next(arglist__10876));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10876)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10876)));
return G__10863__delegate.call(this, x, y, z, args);
});
return G__10863;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__10841.call(this);
case  1 :
return ep3__10842.call(this,x);
case  2 :
return ep3__10843.call(this,x,y);
case  3 :
return ep3__10844.call(this,x,y,z);
default:
return ep3__10845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__10845.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10796 = (function() { 
var G__10879__delegate = function (p1,p2,p3,ps){
var ps__10759 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__10883 = (function (){
return true;
});
var epn__10884 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10511_SHARP_){
return p1__10511_SHARP_.call(null,x);
}),ps__10759);
});
var epn__10885 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10512_SHARP_){
var and__3546__auto____10770 = p1__10512_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10770))
{return p1__10512_SHARP_.call(null,y);
} else
{return and__3546__auto____10770;
}
}),ps__10759);
});
var epn__10886 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10513_SHARP_){
var and__3546__auto____10778 = p1__10513_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10778))
{var and__3546__auto____10779 = p1__10513_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10779))
{return p1__10513_SHARP_.call(null,z);
} else
{return and__3546__auto____10779;
}
} else
{return and__3546__auto____10778;
}
}),ps__10759);
});
var epn__10887 = (function() { 
var G__10895__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10783 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10783))
{return cljs.core.every_QMARK_.call(null,(function (p1__10514_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10514_SHARP_,args);
}),ps__10759);
} else
{return and__3546__auto____10783;
}
})());
};
var G__10895 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10895__delegate.call(this, x, y, z, args);
};
G__10895.cljs$lang$maxFixedArity = 3;
G__10895.cljs$lang$applyTo = (function (arglist__10898){
var x = cljs.core.first(arglist__10898);
var y = cljs.core.first(cljs.core.next(arglist__10898));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10898)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10898)));
return G__10895__delegate.call(this, x, y, z, args);
});
return G__10895;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__10883.call(this);
case  1 :
return epn__10884.call(this,x);
case  2 :
return epn__10885.call(this,x,y);
case  3 :
return epn__10886.call(this,x,y,z);
default:
return epn__10887.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__10887.cljs$lang$applyTo;
return epn;
})()
};
var G__10879 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10879__delegate.call(this, p1, p2, p3, ps);
};
G__10879.cljs$lang$maxFixedArity = 3;
G__10879.cljs$lang$applyTo = (function (arglist__10899){
var p1 = cljs.core.first(arglist__10899);
var p2 = cljs.core.first(cljs.core.next(arglist__10899));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10899)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10899)));
return G__10879__delegate.call(this, p1, p2, p3, ps);
});
return G__10879;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10793.call(this,p1);
case  2 :
return every_pred__10794.call(this,p1,p2);
case  3 :
return every_pred__10795.call(this,p1,p2,p3);
default:
return every_pred__10796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10796.cljs$lang$applyTo;
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
var some_fn__11217 = (function (p){
return (function() {
var sp1 = null;
var sp1__11223 = (function (){
return null;
});
var sp1__11225 = (function (x){
return p.call(null,x);
});
var sp1__11226 = (function (x,y){
var or__3548__auto____10905 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10905))
{return or__3548__auto____10905;
} else
{return p.call(null,y);
}
});
var sp1__11227 = (function (x,y,z){
var or__3548__auto____10912 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____10912))
{return or__3548__auto____10912;
} else
{var or__3548__auto____10913 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____10913))
{return or__3548__auto____10913;
} else
{return p.call(null,z);
}
}
});
var sp1__11228 = (function() { 
var G__11235__delegate = function (x,y,z,args){
var or__3548__auto____10914 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10914))
{return or__3548__auto____10914;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11235 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11235__delegate.call(this, x, y, z, args);
};
G__11235.cljs$lang$maxFixedArity = 3;
G__11235.cljs$lang$applyTo = (function (arglist__11238){
var x = cljs.core.first(arglist__11238);
var y = cljs.core.first(cljs.core.next(arglist__11238));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11238)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11238)));
return G__11235__delegate.call(this, x, y, z, args);
});
return G__11235;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11223.call(this);
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
var some_fn__11218 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11241 = (function (){
return null;
});
var sp2__11242 = (function (x){
var or__3548__auto____10916 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10916))
{return or__3548__auto____10916;
} else
{return p2.call(null,x);
}
});
var sp2__11243 = (function (x,y){
var or__3548__auto____10917 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10917))
{return or__3548__auto____10917;
} else
{var or__3548__auto____10919 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10919))
{return or__3548__auto____10919;
} else
{var or__3548__auto____10920 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10920))
{return or__3548__auto____10920;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11244 = (function (x,y,z){
var or__3548__auto____10927 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____10927))
{return or__3548__auto____10927;
} else
{var or__3548__auto____10933 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____10933))
{return or__3548__auto____10933;
} else
{var or__3548__auto____10934 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____10934))
{return or__3548__auto____10934;
} else
{var or__3548__auto____10935 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____10935))
{return or__3548__auto____10935;
} else
{var or__3548__auto____10937 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____10937))
{return or__3548__auto____10937;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11245 = (function() { 
var G__11255__delegate = function (x,y,z,args){
var or__3548__auto____10940 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____10940))
{return or__3548__auto____10940;
} else
{return cljs.core.some.call(null,(function (p1__10533_SHARP_){
var or__3548__auto____10941 = p1.call(null,p1__10533_SHARP_);

if(cljs.core.truth_(or__3548__auto____10941))
{return or__3548__auto____10941;
} else
{return p2.call(null,p1__10533_SHARP_);
}
}),args);
}
};
var G__11255 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11255__delegate.call(this, x, y, z, args);
};
G__11255.cljs$lang$maxFixedArity = 3;
G__11255.cljs$lang$applyTo = (function (arglist__11262){
var x = cljs.core.first(arglist__11262);
var y = cljs.core.first(cljs.core.next(arglist__11262));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11262)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11262)));
return G__11255__delegate.call(this, x, y, z, args);
});
return G__11255;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11241.call(this);
case  1 :
return sp2__11242.call(this,x);
case  2 :
return sp2__11243.call(this,x,y);
case  3 :
return sp2__11244.call(this,x,y,z);
default:
return sp2__11245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11245.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11219 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11272 = (function (){
return null;
});
var sp3__11274 = (function (x){
var or__3548__auto____11161 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11161))
{return or__3548__auto____11161;
} else
{var or__3548__auto____11163 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11163))
{return or__3548__auto____11163;
} else
{return p3.call(null,x);
}
}
});
var sp3__11275 = (function (x,y){
var or__3548__auto____11165 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11165))
{return or__3548__auto____11165;
} else
{var or__3548__auto____11166 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11166))
{return or__3548__auto____11166;
} else
{var or__3548__auto____11168 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11168))
{return or__3548__auto____11168;
} else
{var or__3548__auto____11175 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11175))
{return or__3548__auto____11175;
} else
{var or__3548__auto____11177 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11177))
{return or__3548__auto____11177;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11276 = (function (x,y,z){
var or__3548__auto____11178 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11178))
{return or__3548__auto____11178;
} else
{var or__3548__auto____11179 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11179))
{return or__3548__auto____11179;
} else
{var or__3548__auto____11186 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11186))
{return or__3548__auto____11186;
} else
{var or__3548__auto____11187 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11187))
{return or__3548__auto____11187;
} else
{var or__3548__auto____11188 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11188))
{return or__3548__auto____11188;
} else
{var or__3548__auto____11190 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11190))
{return or__3548__auto____11190;
} else
{var or__3548__auto____11191 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11191))
{return or__3548__auto____11191;
} else
{var or__3548__auto____11192 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11192))
{return or__3548__auto____11192;
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
var sp3__11277 = (function() { 
var G__11296__delegate = function (x,y,z,args){
var or__3548__auto____11194 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11194))
{return or__3548__auto____11194;
} else
{return cljs.core.some.call(null,(function (p1__10534_SHARP_){
var or__3548__auto____11196 = p1.call(null,p1__10534_SHARP_);

if(cljs.core.truth_(or__3548__auto____11196))
{return or__3548__auto____11196;
} else
{var or__3548__auto____11197 = p2.call(null,p1__10534_SHARP_);

if(cljs.core.truth_(or__3548__auto____11197))
{return or__3548__auto____11197;
} else
{return p3.call(null,p1__10534_SHARP_);
}
}
}),args);
}
};
var G__11296 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11296__delegate.call(this, x, y, z, args);
};
G__11296.cljs$lang$maxFixedArity = 3;
G__11296.cljs$lang$applyTo = (function (arglist__11301){
var x = cljs.core.first(arglist__11301);
var y = cljs.core.first(cljs.core.next(arglist__11301));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11301)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11301)));
return G__11296__delegate.call(this, x, y, z, args);
});
return G__11296;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11272.call(this);
case  1 :
return sp3__11274.call(this,x);
case  2 :
return sp3__11275.call(this,x,y);
case  3 :
return sp3__11276.call(this,x,y,z);
default:
return sp3__11277.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11277.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11220 = (function() { 
var G__11304__delegate = function (p1,p2,p3,ps){
var ps__11198 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11307 = (function (){
return null;
});
var spn__11308 = (function (x){
return cljs.core.some.call(null,(function (p1__10535_SHARP_){
return p1__10535_SHARP_.call(null,x);
}),ps__11198);
});
var spn__11309 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10536_SHARP_){
var or__3548__auto____11200 = p1__10536_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11200))
{return or__3548__auto____11200;
} else
{return p1__10536_SHARP_.call(null,y);
}
}),ps__11198);
});
var spn__11310 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10539_SHARP_){
var or__3548__auto____11201 = p1__10539_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11201))
{return or__3548__auto____11201;
} else
{var or__3548__auto____11203 = p1__10539_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11203))
{return or__3548__auto____11203;
} else
{return p1__10539_SHARP_.call(null,z);
}
}
}),ps__11198);
});
var spn__11311 = (function() { 
var G__11321__delegate = function (x,y,z,args){
var or__3548__auto____11204 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11204))
{return or__3548__auto____11204;
} else
{return cljs.core.some.call(null,(function (p1__10543_SHARP_){
return cljs.core.some.call(null,p1__10543_SHARP_,args);
}),ps__11198);
}
};
var G__11321 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11321__delegate.call(this, x, y, z, args);
};
G__11321.cljs$lang$maxFixedArity = 3;
G__11321.cljs$lang$applyTo = (function (arglist__11324){
var x = cljs.core.first(arglist__11324);
var y = cljs.core.first(cljs.core.next(arglist__11324));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11324)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11324)));
return G__11321__delegate.call(this, x, y, z, args);
});
return G__11321;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11307.call(this);
case  1 :
return spn__11308.call(this,x);
case  2 :
return spn__11309.call(this,x,y);
case  3 :
return spn__11310.call(this,x,y,z);
default:
return spn__11311.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11311.cljs$lang$applyTo;
return spn;
})()
};
var G__11304 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11304__delegate.call(this, p1, p2, p3, ps);
};
G__11304.cljs$lang$maxFixedArity = 3;
G__11304.cljs$lang$applyTo = (function (arglist__11326){
var p1 = cljs.core.first(arglist__11326);
var p2 = cljs.core.first(cljs.core.next(arglist__11326));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11326)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11326)));
return G__11304__delegate.call(this, p1, p2, p3, ps);
});
return G__11304;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11217.call(this,p1);
case  2 :
return some_fn__11218.call(this,p1,p2);
case  3 :
return some_fn__11219.call(this,p1,p2,p3);
default:
return some_fn__11220.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11220.cljs$lang$applyTo;
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
var map__11509 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11475 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11475))
{var s__11476 = temp__3698__auto____11475;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11476)),map.call(null,f,cljs.core.rest.call(null,s__11476)));
} else
{return null;
}
})));
});
var map__11510 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11479 = cljs.core.seq.call(null,c1);
var s2__11480 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11481 = s1__11479;

if(cljs.core.truth_(and__3546__auto____11481))
{return s2__11480;
} else
{return and__3546__auto____11481;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11479),cljs.core.first.call(null,s2__11480)),map.call(null,f,cljs.core.rest.call(null,s1__11479),cljs.core.rest.call(null,s2__11480)));
} else
{return null;
}
})));
});
var map__11511 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11483 = cljs.core.seq.call(null,c1);
var s2__11484 = cljs.core.seq.call(null,c2);
var s3__11486 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11487 = s1__11483;

if(cljs.core.truth_(and__3546__auto____11487))
{var and__3546__auto____11489 = s2__11484;

if(cljs.core.truth_(and__3546__auto____11489))
{return s3__11486;
} else
{return and__3546__auto____11489;
}
} else
{return and__3546__auto____11487;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11483),cljs.core.first.call(null,s2__11484),cljs.core.first.call(null,s3__11486)),map.call(null,f,cljs.core.rest.call(null,s1__11483),cljs.core.rest.call(null,s2__11484),cljs.core.rest.call(null,s3__11486)));
} else
{return null;
}
})));
});
var map__11512 = (function() { 
var G__11528__delegate = function (f,c1,c2,c3,colls){
var step__11499 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11497 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11497)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11497),step.call(null,map.call(null,cljs.core.rest,ss__11497)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__10900_SHARP_){
return cljs.core.apply.call(null,f,p1__10900_SHARP_);
}),step__11499.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11528 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11528__delegate.call(this, f, c1, c2, c3, colls);
};
G__11528.cljs$lang$maxFixedArity = 4;
G__11528.cljs$lang$applyTo = (function (arglist__11537){
var f = cljs.core.first(arglist__11537);
var c1 = cljs.core.first(cljs.core.next(arglist__11537));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11537)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11537))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11537))));
return G__11528__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11528;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11509.call(this,f,c1);
case  3 :
return map__11510.call(this,f,c1,c2);
case  4 :
return map__11511.call(this,f,c1,c2,c3);
default:
return map__11512.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11512.cljs$lang$applyTo;
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
{var temp__3698__auto____11624 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11624))
{var s__11628 = temp__3698__auto____11624;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11628),take.call(null,(n - 1),cljs.core.rest.call(null,s__11628)));
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
var step__11644 = (function (n,coll){
while(true){
var s__11641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11642 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11642))
{return s__11641;
} else
{return and__3546__auto____11642;
}
})()))
{{
var G__11651 = (n - 1);
var G__11652 = cljs.core.rest.call(null,s__11641);
n = G__11651;
coll = G__11652;
continue;
}
} else
{return s__11641;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11644.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11671 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11672 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11671.call(this,n);
case  2 :
return drop_last__11672.call(this,n,s);
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
var s__11676 = cljs.core.seq.call(null,coll);
var lead__11677 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11677))
{{
var G__11679 = cljs.core.next.call(null,s__11676);
var G__11680 = cljs.core.next.call(null,lead__11677);
s__11676 = G__11679;
lead__11677 = G__11680;
continue;
}
} else
{return s__11676;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11687 = (function (pred,coll){
while(true){
var s__11683 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11684 = s__11683;

if(cljs.core.truth_(and__3546__auto____11684))
{return pred.call(null,cljs.core.first.call(null,s__11683));
} else
{return and__3546__auto____11684;
}
})()))
{{
var G__11692 = pred;
var G__11693 = cljs.core.rest.call(null,s__11683);
pred = G__11692;
coll = G__11693;
continue;
}
} else
{return s__11683;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11687.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11696 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11696))
{var s__11698 = temp__3698__auto____11696;

return cljs.core.concat.call(null,s__11698,cycle.call(null,s__11698));
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
var repeat__11705 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11706 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11705.call(this,n);
case  2 :
return repeat__11706.call(this,n,x);
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
var repeatedly__11727 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11728 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11727.call(this,n);
case  2 :
return repeatedly__11728.call(this,n,f);
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
var interleave__11745 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11734 = cljs.core.seq.call(null,c1);
var s2__11735 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11736 = s1__11734;

if(cljs.core.truth_(and__3546__auto____11736))
{return s2__11735;
} else
{return and__3546__auto____11736;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11734),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11735),interleave.call(null,cljs.core.rest.call(null,s1__11734),cljs.core.rest.call(null,s2__11735))));
} else
{return null;
}
})));
});
var interleave__11746 = (function() { 
var G__11749__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11740 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11740)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11740),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11740)));
} else
{return null;
}
})));
};
var G__11749 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11749__delegate.call(this, c1, c2, colls);
};
G__11749.cljs$lang$maxFixedArity = 2;
G__11749.cljs$lang$applyTo = (function (arglist__11752){
var c1 = cljs.core.first(arglist__11752);
var c2 = cljs.core.first(cljs.core.next(arglist__11752));
var colls = cljs.core.rest(cljs.core.next(arglist__11752));
return G__11749__delegate.call(this, c1, c2, colls);
});
return G__11749;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11745.call(this,c1,c2);
default:
return interleave__11746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11746.cljs$lang$applyTo;
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
var cat__11760 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____11758 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11758))
{var coll__11759 = temp__3695__auto____11758;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11759),cat.call(null,cljs.core.rest.call(null,coll__11759),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__11760.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__11761 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__11762 = (function() { 
var G__11764__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__11764 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11764__delegate.call(this, f, coll, colls);
};
G__11764.cljs$lang$maxFixedArity = 2;
G__11764.cljs$lang$applyTo = (function (arglist__11766){
var f = cljs.core.first(arglist__11766);
var coll = cljs.core.first(cljs.core.next(arglist__11766));
var colls = cljs.core.rest(cljs.core.next(arglist__11766));
return G__11764__delegate.call(this, f, coll, colls);
});
return G__11764;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__11761.call(this,f,coll);
default:
return mapcat__11762.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__11762.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11871 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11871))
{var s__11873 = temp__3698__auto____11871;

var f__11874 = cljs.core.first.call(null,s__11873);
var r__11875 = cljs.core.rest.call(null,s__11873);

if(cljs.core.truth_(pred.call(null,f__11874)))
{return cljs.core.cons.call(null,f__11874,filter.call(null,pred,r__11875));
} else
{return filter.call(null,pred,r__11875);
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
var walk__11884 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__11884.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__11881_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__11881_SHARP_));
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
var partition__11917 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__11918 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11894 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11894))
{var s__11895 = temp__3698__auto____11894;

var p__11896 = cljs.core.take.call(null,n,s__11895);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11896))))
{return cljs.core.cons.call(null,p__11896,partition.call(null,n,step,cljs.core.drop.call(null,step,s__11895)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__11919 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11904 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11904))
{var s__11905 = temp__3698__auto____11904;

var p__11911 = cljs.core.take.call(null,n,s__11905);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__11911))))
{return cljs.core.cons.call(null,p__11911,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__11905)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__11911,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__11917.call(this,n,step);
case  3 :
return partition__11918.call(this,n,step,pad);
case  4 :
return partition__11919.call(this,n,step,pad,coll);
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
var get_in__11943 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__11945 = (function (m,ks,not_found){
var sentinel__11933 = cljs.core.lookup_sentinel;
var m__11934 = m;
var ks__11935 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__11935))
{var m__11936 = cljs.core.get.call(null,m__11934,cljs.core.first.call(null,ks__11935),sentinel__11933);

if(cljs.core.truth_((sentinel__11933 === m__11936)))
{return not_found;
} else
{{
var G__11950 = sentinel__11933;
var G__11951 = m__11936;
var G__11952 = cljs.core.next.call(null,ks__11935);
sentinel__11933 = G__11950;
m__11934 = G__11951;
ks__11935 = G__11952;
continue;
}
}
} else
{return m__11934;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__11943.call(this,m,ks);
case  3 :
return get_in__11945.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__11953,v){
var vec__11954__11955 = p__11953;
var k__11956 = cljs.core.nth.call(null,vec__11954__11955,0,null);
var ks__11957 = cljs.core.nthnext.call(null,vec__11954__11955,1);

if(cljs.core.truth_(ks__11957))
{return cljs.core.assoc.call(null,m,k__11956,assoc_in.call(null,cljs.core.get.call(null,m,k__11956),ks__11957,v));
} else
{return cljs.core.assoc.call(null,m,k__11956,v);
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
var update_in__delegate = function (m,p__11958,f,args){
var vec__11959__11960 = p__11958;
var k__11961 = cljs.core.nth.call(null,vec__11959__11960,0,null);
var ks__11962 = cljs.core.nthnext.call(null,vec__11959__11960,1);

if(cljs.core.truth_(ks__11962))
{return cljs.core.assoc.call(null,m,k__11961,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__11961),ks__11962,f,args));
} else
{return cljs.core.assoc.call(null,m,k__11961,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__11961),args));
}
};
var update_in = function (m,p__11958,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__11958, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__11963){
var m = cljs.core.first(arglist__11963);
var p__11958 = cljs.core.first(cljs.core.next(arglist__11963));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11963)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11963)));
return update_in__delegate.call(this, m, p__11958, f, args);
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
var this__11964 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12048 = null;
var G__12048__12049 = (function (coll,k){
var this__11965 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12048__12050 = (function (coll,k,not_found){
var this__11966 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12048 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12048__12049.call(this,coll,k);
case  3 :
return G__12048__12050.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12048;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__11967 = this;
var new_array__11968 = cljs.core.aclone.call(null,this__11967.array);

(new_array__11968[k] = v);
return (new cljs.core.Vector(this__11967.meta,new_array__11968));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12052 = null;
var G__12052__12053 = (function (coll,k){
var this__11969 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12052__12054 = (function (coll,k,not_found){
var this__11970 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12052 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12052__12053.call(this,coll,k);
case  3 :
return G__12052__12054.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12052;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__11971 = this;
var new_array__11972 = cljs.core.aclone.call(null,this__11971.array);

new_array__11972.push(o);
return (new cljs.core.Vector(this__11971.meta,new_array__11972));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12059 = null;
var G__12059__12060 = (function (v,f){
var this__11973 = this;
return cljs.core.ci_reduce.call(null,this__11973.array,f);
});
var G__12059__12061 = (function (v,f,start){
var this__11974 = this;
return cljs.core.ci_reduce.call(null,this__11974.array,f,start);
});
G__12059 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12059__12060.call(this,v,f);
case  3 :
return G__12059__12061.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12059;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__11975 = this;
if(cljs.core.truth_((this__11975.array.length > 0)))
{var vector_seq__11976 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__11975.array.length)))
{return cljs.core.cons.call(null,(this__11975.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__11976.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__11977 = this;
return this__11977.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__11978 = this;
var count__11979 = this__11978.array.length;

if(cljs.core.truth_((count__11979 > 0)))
{return (this__11978.array[(count__11979 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__11980 = this;
if(cljs.core.truth_((this__11980.array.length > 0)))
{var new_array__11981 = cljs.core.aclone.call(null,this__11980.array);

new_array__11981.pop();
return (new cljs.core.Vector(this__11980.meta,new_array__11981));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__11982 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__11983 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__11986 = this;
return (new cljs.core.Vector(meta,this__11986.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__11988 = this;
return this__11988.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12067 = null;
var G__12067__12068 = (function (coll,n){
var this__12040 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12041 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12041))
{return (n < this__12040.array.length);
} else
{return and__3546__auto____12041;
}
})()))
{return (this__12040.array[n]);
} else
{return null;
}
});
var G__12067__12069 = (function (coll,n,not_found){
var this__12042 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12043 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12043))
{return (n < this__12042.array.length);
} else
{return and__3546__auto____12043;
}
})()))
{return (this__12042.array[n]);
} else
{return not_found;
}
});
G__12067 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12067__12068.call(this,coll,n);
case  3 :
return G__12067__12069.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12067;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12044 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12044.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12079){
var args = cljs.core.seq( arglist__12079 );;
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
var this__12088 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12226 = null;
var G__12226__12227 = (function (coll,k){
var this__12090 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12226__12228 = (function (coll,k,not_found){
var this__12092 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12226 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12226__12227.call(this,coll,k);
case  3 :
return G__12226__12228.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12226;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12095 = this;
var v_pos__12101 = (this__12095.start + key);

return (new cljs.core.Subvec(this__12095.meta,cljs.core._assoc.call(null,this__12095.v,v_pos__12101,val),this__12095.start,((this__12095.end > (v_pos__12101 + 1)) ? this__12095.end : (v_pos__12101 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12230 = null;
var G__12230__12231 = (function (coll,k){
var this__12102 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12230__12232 = (function (coll,k,not_found){
var this__12105 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12230 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12230__12231.call(this,coll,k);
case  3 :
return G__12230__12232.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12230;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12108 = this;
return (new cljs.core.Subvec(this__12108.meta,cljs.core._assoc_n.call(null,this__12108.v,this__12108.end,o),this__12108.start,(this__12108.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12238 = null;
var G__12238__12239 = (function (coll,f){
var this__12194 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12238__12240 = (function (coll,f,start){
var this__12195 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12238 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12238__12239.call(this,coll,f);
case  3 :
return G__12238__12240.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12238;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12196 = this;
var subvec_seq__12197 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12196.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12196.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12197.call(null,this__12196.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12198 = this;
return (this__12198.end - this__12198.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12199 = this;
return cljs.core._nth.call(null,this__12199.v,(this__12199.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12202 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12202.start,this__12202.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12202.meta,this__12202.v,this__12202.start,(this__12202.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12205 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12209 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12213 = this;
return (new cljs.core.Subvec(meta,this__12213.v,this__12213.start,this__12213.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12215 = this;
return this__12215.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12253 = null;
var G__12253__12254 = (function (coll,n){
var this__12218 = this;
return cljs.core._nth.call(null,this__12218.v,(this__12218.start + n));
});
var G__12253__12255 = (function (coll,n,not_found){
var this__12219 = this;
return cljs.core._nth.call(null,this__12219.v,(this__12219.start + n),not_found);
});
G__12253 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12253__12254.call(this,coll,n);
case  3 :
return G__12253__12255.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12253;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12225 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12225.meta);
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
var subvec__12262 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12263 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12262.call(this,v,start);
case  3 :
return subvec__12263.call(this,v,start,end);
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
var this__12397 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12400 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12402 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12403 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12403.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12404 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12405 = this;
return cljs.core._first.call(null,this__12405.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12406 = this;
var temp__3695__auto____12407 = cljs.core.next.call(null,this__12406.front);

if(cljs.core.truth_(temp__3695__auto____12407))
{var f1__12408 = temp__3695__auto____12407;

return (new cljs.core.PersistentQueueSeq(this__12406.meta,f1__12408,this__12406.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12406.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12406.meta,this__12406.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12409 = this;
return this__12409.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12410 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12410.front,this__12410.rear));
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
var this__12431 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12436 = this;
if(cljs.core.truth_(this__12436.front))
{return (new cljs.core.PersistentQueue(this__12436.meta,(this__12436.count + 1),this__12436.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12437 = this__12436.rear;

if(cljs.core.truth_(or__3548__auto____12437))
{return or__3548__auto____12437;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12436.meta,(this__12436.count + 1),cljs.core.conj.call(null,this__12436.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12442 = this;
var rear__12447 = cljs.core.seq.call(null,this__12442.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12448 = this__12442.front;

if(cljs.core.truth_(or__3548__auto____12448))
{return or__3548__auto____12448;
} else
{return rear__12447;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12442.front,cljs.core.seq.call(null,rear__12447)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12449 = this;
return this__12449.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12453 = this;
return cljs.core._first.call(null,this__12453.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12455 = this;
if(cljs.core.truth_(this__12455.front))
{var temp__3695__auto____12460 = cljs.core.next.call(null,this__12455.front);

if(cljs.core.truth_(temp__3695__auto____12460))
{var f1__12461 = temp__3695__auto____12460;

return (new cljs.core.PersistentQueue(this__12455.meta,(this__12455.count - 1),f1__12461,this__12455.rear));
} else
{return (new cljs.core.PersistentQueue(this__12455.meta,(this__12455.count - 1),cljs.core.seq.call(null,this__12455.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12465 = this;
return cljs.core.first.call(null,this__12465.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12466 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12470 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12471 = this;
return (new cljs.core.PersistentQueue(meta,this__12471.count,this__12471.front,this__12471.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12475 = this;
return this__12475.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12476 = this;
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
var this__12499 = this;
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
var len__12518 = array.length;

var i__12519 = 0;

while(true){
if(cljs.core.truth_((i__12519 < len__12518)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12519]))))
{return i__12519;
} else
{{
var G__12520 = (i__12519 + incr);
i__12519 = G__12520;
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
var obj_map_contains_key_QMARK___12523 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12524 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12522 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12522))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12522;
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
return obj_map_contains_key_QMARK___12523.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12524.call(this,k,strobj,true_val,false_val);
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
var this__12547 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12693 = null;
var G__12693__12694 = (function (coll,k){
var this__12550 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12693__12695 = (function (coll,k,not_found){
var this__12552 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12552.strobj,(this__12552.strobj[k]),not_found);
});
G__12693 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12693__12694.call(this,coll,k);
case  3 :
return G__12693__12695.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12693;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12556 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12559 = goog.object.clone.call(null,this__12556.strobj);
var overwrite_QMARK___12560 = new_strobj__12559.hasOwnProperty(k);

(new_strobj__12559[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12560))
{return (new cljs.core.ObjMap(this__12556.meta,this__12556.keys,new_strobj__12559));
} else
{var new_keys__12561 = cljs.core.aclone.call(null,this__12556.keys);

new_keys__12561.push(k);
return (new cljs.core.ObjMap(this__12556.meta,new_keys__12561,new_strobj__12559));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12556.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12565 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12565.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12707 = null;
var G__12707__12708 = (function (coll,k){
var this__12568 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12707__12709 = (function (coll,k,not_found){
var this__12570 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12707 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12707__12708.call(this,coll,k);
case  3 :
return G__12707__12709.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12707;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12607 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12612 = this;
if(cljs.core.truth_((this__12612.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12531_SHARP_){
return cljs.core.vector.call(null,p1__12531_SHARP_,(this__12612.strobj[p1__12531_SHARP_]));
}),this__12612.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12613 = this;
return this__12613.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12614 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12679 = this;
return (new cljs.core.ObjMap(meta,this__12679.keys,this__12679.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12683 = this;
return this__12683.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12684 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12684.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12689 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12690 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12690))
{return this__12689.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12690;
}
})()))
{var new_keys__12691 = cljs.core.aclone.call(null,this__12689.keys);
var new_strobj__12692 = goog.object.clone.call(null,this__12689.strobj);

new_keys__12691.splice(cljs.core.scan_array.call(null,1,k,new_keys__12691),1);
cljs.core.js_delete.call(null,new_strobj__12692,k);
return (new cljs.core.ObjMap(this__12689.meta,new_keys__12691,new_strobj__12692));
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
var this__12773 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12916 = null;
var G__12916__12918 = (function (coll,k){
var this__12776 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12916__12919 = (function (coll,k,not_found){
var this__12777 = this;
var bucket__12778 = (this__12777.hashobj[cljs.core.hash.call(null,k)]);
var i__12779 = (cljs.core.truth_(bucket__12778)?cljs.core.scan_array.call(null,2,k,bucket__12778):null);

if(cljs.core.truth_(i__12779))
{return (bucket__12778[(i__12779 + 1)]);
} else
{return not_found;
}
});
G__12916 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12916__12918.call(this,coll,k);
case  3 :
return G__12916__12919.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12916;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12780 = this;
var h__12781 = cljs.core.hash.call(null,k);
var bucket__12782 = (this__12780.hashobj[h__12781]);

if(cljs.core.truth_(bucket__12782))
{var new_bucket__12783 = cljs.core.aclone.call(null,bucket__12782);
var new_hashobj__12784 = goog.object.clone.call(null,this__12780.hashobj);

(new_hashobj__12784[h__12781] = new_bucket__12783);
var temp__3695__auto____12785 = cljs.core.scan_array.call(null,2,k,new_bucket__12783);

if(cljs.core.truth_(temp__3695__auto____12785))
{var i__12786 = temp__3695__auto____12785;

(new_bucket__12783[(i__12786 + 1)] = v);
return (new cljs.core.HashMap(this__12780.meta,this__12780.count,new_hashobj__12784));
} else
{new_bucket__12783.push(k,v);
return (new cljs.core.HashMap(this__12780.meta,(this__12780.count + 1),new_hashobj__12784));
}
} else
{var new_hashobj__12787 = goog.object.clone.call(null,this__12780.hashobj);

(new_hashobj__12787[h__12781] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12780.meta,(this__12780.count + 1),new_hashobj__12787));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12852 = this;
var bucket__12856 = (this__12852.hashobj[cljs.core.hash.call(null,k)]);
var i__12859 = (cljs.core.truth_(bucket__12856)?cljs.core.scan_array.call(null,2,k,bucket__12856):null);

if(cljs.core.truth_(i__12859))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12933 = null;
var G__12933__12934 = (function (coll,k){
var this__12860 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12933__12935 = (function (coll,k,not_found){
var this__12862 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12933 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12933__12934.call(this,coll,k);
case  3 :
return G__12933__12935.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12933;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12864 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12866 = this;
if(cljs.core.truth_((this__12866.count > 0)))
{var hashes__12876 = cljs.core.js_keys.call(null,this__12866.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12757_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12866.hashobj[p1__12757_SHARP_])));
}),hashes__12876);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12880 = this;
return this__12880.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12881 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12883 = this;
return (new cljs.core.HashMap(meta,this__12883.count,this__12883.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12885 = this;
return this__12885.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12889 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12889.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12894 = this;
var h__12896 = cljs.core.hash.call(null,k);
var bucket__12898 = (this__12894.hashobj[h__12896]);
var i__12900 = (cljs.core.truth_(bucket__12898)?cljs.core.scan_array.call(null,2,k,bucket__12898):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12900)))
{return coll;
} else
{var new_hashobj__12903 = goog.object.clone.call(null,this__12894.hashobj);

if(cljs.core.truth_((3 > bucket__12898.length)))
{cljs.core.js_delete.call(null,new_hashobj__12903,h__12896);
} else
{var new_bucket__12907 = cljs.core.aclone.call(null,bucket__12898);

new_bucket__12907.splice(i__12900,2);
(new_hashobj__12903[h__12896] = new_bucket__12907);
}
return (new cljs.core.HashMap(this__12894.meta,(this__12894.count - 1),new_hashobj__12903));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__12960 = ks.length;

var i__12961 = 0;
var out__12962 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__12961 < len__12960)))
{{
var G__12963 = (i__12961 + 1);
var G__12964 = cljs.core.assoc.call(null,out__12962,(ks[i__12961]),(vs[i__12961]));
i__12961 = G__12963;
out__12962 = G__12964;
continue;
}
} else
{return out__12962;
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
var in$__12965 = cljs.core.seq.call(null,keyvals);
var out__12966 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__12965))
{{
var G__12972 = cljs.core.nnext.call(null,in$__12965);
var G__12973 = cljs.core.assoc.call(null,out__12966,cljs.core.first.call(null,in$__12965),cljs.core.second.call(null,in$__12965));
in$__12965 = G__12972;
out__12966 = G__12973;
continue;
}
} else
{return out__12966;
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
hash_map.cljs$lang$applyTo = (function (arglist__12976){
var keyvals = cljs.core.seq( arglist__12976 );;
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
{return cljs.core.reduce.call(null,(function (p1__12981_SHARP_,p2__12982_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____12986 = p1__12981_SHARP_;

if(cljs.core.truth_(or__3548__auto____12986))
{return or__3548__auto____12986;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__12982_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13034){
var maps = cljs.core.seq( arglist__13034 );;
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
{var merge_entry__13082 = (function (m,e){
var k__13080 = cljs.core.first.call(null,e);
var v__13081 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13080)))
{return cljs.core.assoc.call(null,m,k__13080,f.call(null,cljs.core.get.call(null,m,k__13080),v__13081));
} else
{return cljs.core.assoc.call(null,m,k__13080,v__13081);
}
});
var merge2__13084 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13082,(function (){var or__3548__auto____13083 = m1;

if(cljs.core.truth_(or__3548__auto____13083))
{return or__3548__auto____13083;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13084,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13088){
var f = cljs.core.first(arglist__13088);
var maps = cljs.core.rest(arglist__13088);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13094 = cljs.core.ObjMap.fromObject([],{});
var keys__13096 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13096))
{var key__13097 = cljs.core.first.call(null,keys__13096);
var entry__13098 = cljs.core.get.call(null,map,key__13097,"﷐'user/not-found");

{
var G__13105 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13098,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13094,key__13097,entry__13098):ret__13094);
var G__13106 = cljs.core.next.call(null,keys__13096);
ret__13094 = G__13105;
keys__13096 = G__13106;
continue;
}
} else
{return ret__13094;
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
var this__13116 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13138 = null;
var G__13138__13139 = (function (coll,v){
var this__13117 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13138__13140 = (function (coll,v,not_found){
var this__13118 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13118.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13138 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13138__13139.call(this,coll,v);
case  3 :
return G__13138__13140.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13138;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13234 = null;
var G__13234__13235 = (function (coll,k){
var this__13121 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13234__13236 = (function (coll,k,not_found){
var this__13122 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13234 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13234__13235.call(this,coll,k);
case  3 :
return G__13234__13236.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13234;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13123 = this;
return (new cljs.core.Set(this__13123.meta,cljs.core.assoc.call(null,this__13123.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13124 = this;
return cljs.core.keys.call(null,this__13124.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13127 = this;
return (new cljs.core.Set(this__13127.meta,cljs.core.dissoc.call(null,this__13127.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13129 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13130 = this;
var and__3546__auto____13131 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13131))
{var and__3546__auto____13132 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13132))
{return cljs.core.every_QMARK_.call(null,(function (p1__13091_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13091_SHARP_);
}),other);
} else
{return and__3546__auto____13132;
}
} else
{return and__3546__auto____13131;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13135 = this;
return (new cljs.core.Set(meta,this__13135.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13136 = this;
return this__13136.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13137 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13137.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13246 = cljs.core.seq.call(null,coll);
var out__13247 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13246))))
{{
var G__13251 = cljs.core.rest.call(null,in$__13246);
var G__13252 = cljs.core.conj.call(null,out__13247,cljs.core.first.call(null,in$__13246));
in$__13246 = G__13251;
out__13247 = G__13252;
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
{var n__13255 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13256 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13256))
{var e__13257 = temp__3695__auto____13256;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13257));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13255,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13244_SHARP_){
var temp__3695__auto____13259 = cljs.core.find.call(null,smap,p1__13244_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13259))
{var e__13260 = temp__3695__auto____13259;

return cljs.core.second.call(null,e__13260);
} else
{return p1__13244_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13273 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13266,seen){
while(true){
var vec__13267__13268 = p__13266;
var f__13269 = cljs.core.nth.call(null,vec__13267__13268,0,null);
var xs__13270 = vec__13267__13268;

var temp__3698__auto____13271 = cljs.core.seq.call(null,xs__13270);

if(cljs.core.truth_(temp__3698__auto____13271))
{var s__13272 = temp__3698__auto____13271;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13269)))
{{
var G__13277 = cljs.core.rest.call(null,s__13272);
var G__13278 = seen;
p__13266 = G__13277;
seen = G__13278;
continue;
}
} else
{return cljs.core.cons.call(null,f__13269,step.call(null,cljs.core.rest.call(null,s__13272),cljs.core.conj.call(null,seen,f__13269)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13273.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13282 = cljs.core.Vector.fromArray([]);
var s__13283 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13283)))
{{
var G__13288 = cljs.core.conj.call(null,ret__13282,cljs.core.first.call(null,s__13283));
var G__13289 = cljs.core.next.call(null,s__13283);
ret__13282 = G__13288;
s__13283 = G__13289;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13282);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13372 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13372))
{return or__3548__auto____13372;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13373 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13373 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13373 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13381 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13381))
{return or__3548__auto____13381;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13382 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13382 > -1)))
{return cljs.core.subs.call(null,x,2,i__13382);
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
var map__13385 = cljs.core.ObjMap.fromObject([],{});
var ks__13386 = cljs.core.seq.call(null,keys);
var vs__13387 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13388 = ks__13386;

if(cljs.core.truth_(and__3546__auto____13388))
{return vs__13387;
} else
{return and__3546__auto____13388;
}
})()))
{{
var G__13389 = cljs.core.assoc.call(null,map__13385,cljs.core.first.call(null,ks__13386),cljs.core.first.call(null,vs__13387));
var G__13390 = cljs.core.next.call(null,ks__13386);
var G__13391 = cljs.core.next.call(null,vs__13387);
map__13385 = G__13389;
ks__13386 = G__13390;
vs__13387 = G__13391;
continue;
}
} else
{return map__13385;
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
var max_key__13394 = (function (k,x){
return x;
});
var max_key__13395 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13396 = (function() { 
var G__13398__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13383_SHARP_,p2__13384_SHARP_){
return max_key.call(null,k,p1__13383_SHARP_,p2__13384_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13398 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13398__delegate.call(this, k, x, y, more);
};
G__13398.cljs$lang$maxFixedArity = 3;
G__13398.cljs$lang$applyTo = (function (arglist__13399){
var k = cljs.core.first(arglist__13399);
var x = cljs.core.first(cljs.core.next(arglist__13399));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13399)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13399)));
return G__13398__delegate.call(this, k, x, y, more);
});
return G__13398;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13394.call(this,k,x);
case  3 :
return max_key__13395.call(this,k,x,y);
default:
return max_key__13396.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13396.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13407 = (function (k,x){
return x;
});
var min_key__13408 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13409 = (function() { 
var G__13411__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13392_SHARP_,p2__13393_SHARP_){
return min_key.call(null,k,p1__13392_SHARP_,p2__13393_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13411 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13411__delegate.call(this, k, x, y, more);
};
G__13411.cljs$lang$maxFixedArity = 3;
G__13411.cljs$lang$applyTo = (function (arglist__13414){
var k = cljs.core.first(arglist__13414);
var x = cljs.core.first(cljs.core.next(arglist__13414));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13414)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13414)));
return G__13411__delegate.call(this, k, x, y, more);
});
return G__13411;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13407.call(this,k,x);
case  3 :
return min_key__13408.call(this,k,x,y);
default:
return min_key__13409.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13409.cljs$lang$applyTo;
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
var temp__3698__auto____13415 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13415))
{var s__13416 = temp__3698__auto____13415;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13416),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13416)));
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
var temp__3698__auto____13494 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13494))
{var s__13495 = temp__3698__auto____13494;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13495))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13495),take_while.call(null,pred,cljs.core.rest.call(null,s__13495)));
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
var this__13505 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13506 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13522 = null;
var G__13522__13523 = (function (rng,f){
var this__13507 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13522__13524 = (function (rng,f,s){
var this__13508 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13522 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13522__13523.call(this,rng,f);
case  3 :
return G__13522__13524.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13522;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13509 = this;
var comp__13510 = (cljs.core.truth_((this__13509.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13510.call(null,this__13509.start,this__13509.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13511 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13511.end - this__13511.start) / this__13511.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13512 = this;
return this__13512.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13513 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13513.meta,(this__13513.start + this__13513.step),this__13513.end,this__13513.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13514 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13515 = this;
return (new cljs.core.Range(meta,this__13515.start,this__13515.end,this__13515.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13516 = this;
return this__13516.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13758 = null;
var G__13758__13759 = (function (rng,n){
var this__13517 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13517.start + (n * this__13517.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13518 = (this__13517.start > this__13517.end);

if(cljs.core.truth_(and__3546__auto____13518))
{return cljs.core._EQ_.call(null,this__13517.step,0);
} else
{return and__3546__auto____13518;
}
})()))
{return this__13517.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13758__13760 = (function (rng,n,not_found){
var this__13519 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13519.start + (n * this__13519.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13520 = (this__13519.start > this__13519.end);

if(cljs.core.truth_(and__3546__auto____13520))
{return cljs.core._EQ_.call(null,this__13519.step,0);
} else
{return and__3546__auto____13520;
}
})()))
{return this__13519.start;
} else
{return not_found;
}
}
});
G__13758 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13758__13759.call(this,rng,n);
case  3 :
return G__13758__13760.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13758;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13521 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13521.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13764 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13765 = (function (end){
return range.call(null,0,end,1);
});
var range__13766 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13767 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13764.call(this);
case  1 :
return range__13765.call(this,start);
case  2 :
return range__13766.call(this,start,end);
case  3 :
return range__13767.call(this,start,end,step);
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
var temp__3698__auto____13769 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13769))
{var s__13770 = temp__3698__auto____13769;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13770),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13770)));
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
var temp__3698__auto____13867 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13867))
{var s__13870 = temp__3698__auto____13867;

var fst__13873 = cljs.core.first.call(null,s__13870);
var fv__13874 = f.call(null,fst__13873);
var run__13883 = cljs.core.cons.call(null,fst__13873,cljs.core.take_while.call(null,(function (p1__13853_SHARP_){
return cljs.core._EQ_.call(null,fv__13874,f.call(null,p1__13853_SHARP_));
}),cljs.core.next.call(null,s__13870)));

return cljs.core.cons.call(null,run__13883,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13883),s__13870))));
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
var reductions__13917 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13906 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13906))
{var s__13907 = temp__3695__auto____13906;

return reductions.call(null,f,cljs.core.first.call(null,s__13907),cljs.core.rest.call(null,s__13907));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13918 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13913 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13913))
{var s__13915 = temp__3698__auto____13913;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13915)),cljs.core.rest.call(null,s__13915));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13917.call(this,f,init);
case  3 :
return reductions__13918.call(this,f,init,coll);
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
var juxt__13965 = (function (f){
return (function() {
var G__13970 = null;
var G__13970__13998 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13970__13999 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13970__14001 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13970__14002 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13970__14003 = (function() { 
var G__14005__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14005 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14005__delegate.call(this, x, y, z, args);
};
G__14005.cljs$lang$maxFixedArity = 3;
G__14005.cljs$lang$applyTo = (function (arglist__14006){
var x = cljs.core.first(arglist__14006);
var y = cljs.core.first(cljs.core.next(arglist__14006));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14006)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14006)));
return G__14005__delegate.call(this, x, y, z, args);
});
return G__14005;
})()
;
G__13970 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13970__13998.call(this);
case  1 :
return G__13970__13999.call(this,x);
case  2 :
return G__13970__14001.call(this,x,y);
case  3 :
return G__13970__14002.call(this,x,y,z);
default:
return G__13970__14003.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13970.cljs$lang$maxFixedArity = 3;
G__13970.cljs$lang$applyTo = G__13970__14003.cljs$lang$applyTo;
return G__13970;
})()
});
var juxt__13966 = (function (f,g){
return (function() {
var G__14011 = null;
var G__14011__14013 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14011__14014 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14011__14015 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14011__14016 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14011__14017 = (function() { 
var G__14020__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14020 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14020__delegate.call(this, x, y, z, args);
};
G__14020.cljs$lang$maxFixedArity = 3;
G__14020.cljs$lang$applyTo = (function (arglist__14021){
var x = cljs.core.first(arglist__14021);
var y = cljs.core.first(cljs.core.next(arglist__14021));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14021)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14021)));
return G__14020__delegate.call(this, x, y, z, args);
});
return G__14020;
})()
;
G__14011 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14011__14013.call(this);
case  1 :
return G__14011__14014.call(this,x);
case  2 :
return G__14011__14015.call(this,x,y);
case  3 :
return G__14011__14016.call(this,x,y,z);
default:
return G__14011__14017.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14011.cljs$lang$maxFixedArity = 3;
G__14011.cljs$lang$applyTo = G__14011__14017.cljs$lang$applyTo;
return G__14011;
})()
});
var juxt__13967 = (function (f,g,h){
return (function() {
var G__14022 = null;
var G__14022__14023 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14022__14024 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14022__14025 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14022__14026 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14022__14027 = (function() { 
var G__14035__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14035 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14035__delegate.call(this, x, y, z, args);
};
G__14035.cljs$lang$maxFixedArity = 3;
G__14035.cljs$lang$applyTo = (function (arglist__14036){
var x = cljs.core.first(arglist__14036);
var y = cljs.core.first(cljs.core.next(arglist__14036));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14036)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14036)));
return G__14035__delegate.call(this, x, y, z, args);
});
return G__14035;
})()
;
G__14022 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14022__14023.call(this);
case  1 :
return G__14022__14024.call(this,x);
case  2 :
return G__14022__14025.call(this,x,y);
case  3 :
return G__14022__14026.call(this,x,y,z);
default:
return G__14022__14027.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14022.cljs$lang$maxFixedArity = 3;
G__14022.cljs$lang$applyTo = G__14022__14027.cljs$lang$applyTo;
return G__14022;
})()
});
var juxt__13968 = (function() { 
var G__14037__delegate = function (f,g,h,fs){
var fs__13962 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14039 = null;
var G__14039__14041 = (function (){
return cljs.core.reduce.call(null,(function (p1__13895_SHARP_,p2__13896_SHARP_){
return cljs.core.conj.call(null,p1__13895_SHARP_,p2__13896_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13962);
});
var G__14039__14042 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13897_SHARP_,p2__13898_SHARP_){
return cljs.core.conj.call(null,p1__13897_SHARP_,p2__13898_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13962);
});
var G__14039__14043 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13900_SHARP_,p2__13901_SHARP_){
return cljs.core.conj.call(null,p1__13900_SHARP_,p2__13901_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13962);
});
var G__14039__14044 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13902_SHARP_,p2__13903_SHARP_){
return cljs.core.conj.call(null,p1__13902_SHARP_,p2__13903_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13962);
});
var G__14039__14045 = (function() { 
var G__14057__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13904_SHARP_,p2__13905_SHARP_){
return cljs.core.conj.call(null,p1__13904_SHARP_,cljs.core.apply.call(null,p2__13905_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13962);
};
var G__14057 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14057__delegate.call(this, x, y, z, args);
};
G__14057.cljs$lang$maxFixedArity = 3;
G__14057.cljs$lang$applyTo = (function (arglist__14060){
var x = cljs.core.first(arglist__14060);
var y = cljs.core.first(cljs.core.next(arglist__14060));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14060)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14060)));
return G__14057__delegate.call(this, x, y, z, args);
});
return G__14057;
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
};
var G__14037 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14037__delegate.call(this, f, g, h, fs);
};
G__14037.cljs$lang$maxFixedArity = 3;
G__14037.cljs$lang$applyTo = (function (arglist__14069){
var f = cljs.core.first(arglist__14069);
var g = cljs.core.first(cljs.core.next(arglist__14069));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14069)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14069)));
return G__14037__delegate.call(this, f, g, h, fs);
});
return G__14037;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13965.call(this,f);
case  2 :
return juxt__13966.call(this,f,g);
case  3 :
return juxt__13967.call(this,f,g,h);
default:
return juxt__13968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13968.cljs$lang$applyTo;
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
var dorun__14081 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14084 = cljs.core.next.call(null,coll);
coll = G__14084;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14082 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14072 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14072))
{return (n > 0);
} else
{return and__3546__auto____14072;
}
})()))
{{
var G__14085 = (n - 1);
var G__14086 = cljs.core.next.call(null,coll);
n = G__14085;
coll = G__14086;
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
return dorun__14081.call(this,n);
case  2 :
return dorun__14082.call(this,n,coll);
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
var doall__14093 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14094 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14093.call(this,n);
case  2 :
return doall__14094.call(this,n,coll);
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
var matches__14097 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14097),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14097),1)))
{return cljs.core.first.call(null,matches__14097);
} else
{return cljs.core.vec.call(null,matches__14097);
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
var matches__14104 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14104)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14104),1)))
{return cljs.core.first.call(null,matches__14104);
} else
{return cljs.core.vec.call(null,matches__14104);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14108 = cljs.core.re_find.call(null,re,s);
var match_idx__14109 = s.search(re);
var match_str__14110 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14108))?cljs.core.first.call(null,match_data__14108):match_data__14108);
var post_match__14112 = cljs.core.subs.call(null,s,(match_idx__14109 + cljs.core.count.call(null,match_str__14110)));

if(cljs.core.truth_(match_data__14108))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14108,re_seq.call(null,re,post_match__14112));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14113_SHARP_){
return print_one.call(null,p1__14113_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14208 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14208))
{var and__3546__auto____14217 = (function (){var x__445__auto____14214 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14215 = x__445__auto____14214;

if(cljs.core.truth_(and__3546__auto____14215))
{var and__3546__auto____14216 = x__445__auto____14214.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14216))
{return cljs.core.not.call(null,x__445__auto____14214.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14216;
}
} else
{return and__3546__auto____14215;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14214);
}
})();

if(cljs.core.truth_(and__3546__auto____14217))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14217;
}
} else
{return and__3546__auto____14208;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14218 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14219 = x__445__auto____14218;

if(cljs.core.truth_(and__3546__auto____14219))
{var and__3546__auto____14220 = x__445__auto____14218.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14220))
{return cljs.core.not.call(null,x__445__auto____14218.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14220;
}
} else
{return and__3546__auto____14219;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14218);
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
var first_obj__14229 = cljs.core.first.call(null,objs);
var sb__14230 = (new goog.string.StringBuffer());

var G__14231__14232 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14231__14232))
{var obj__14233 = cljs.core.first.call(null,G__14231__14232);
var G__14231__14234 = G__14231__14232;

while(true){
if(cljs.core.truth_((obj__14233 === first_obj__14229)))
{} else
{sb__14230.append(" ");
}
var G__14235__14236 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14233,opts));

if(cljs.core.truth_(G__14235__14236))
{var string__14237 = cljs.core.first.call(null,G__14235__14236);
var G__14235__14238 = G__14235__14236;

while(true){
sb__14230.append(string__14237);
var temp__3698__auto____14239 = cljs.core.next.call(null,G__14235__14238);

if(cljs.core.truth_(temp__3698__auto____14239))
{var G__14235__14240 = temp__3698__auto____14239;

{
var G__14252 = cljs.core.first.call(null,G__14235__14240);
var G__14253 = G__14235__14240;
string__14237 = G__14252;
G__14235__14238 = G__14253;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14241 = cljs.core.next.call(null,G__14231__14234);

if(cljs.core.truth_(temp__3698__auto____14241))
{var G__14231__14242 = temp__3698__auto____14241;

{
var G__14257 = cljs.core.first.call(null,G__14231__14242);
var G__14258 = G__14231__14242;
obj__14233 = G__14257;
G__14231__14234 = G__14258;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14230);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14262 = cljs.core.first.call(null,objs);

var G__14264__14268 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14264__14268))
{var obj__14270 = cljs.core.first.call(null,G__14264__14268);
var G__14264__14271 = G__14264__14268;

while(true){
if(cljs.core.truth_((obj__14270 === first_obj__14262)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14273__14274 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14270,opts));

if(cljs.core.truth_(G__14273__14274))
{var string__14277 = cljs.core.first.call(null,G__14273__14274);
var G__14273__14278 = G__14273__14274;

while(true){
cljs.core.string_print.call(null,string__14277);
var temp__3698__auto____14279 = cljs.core.next.call(null,G__14273__14278);

if(cljs.core.truth_(temp__3698__auto____14279))
{var G__14273__14280 = temp__3698__auto____14279;

{
var G__14291 = cljs.core.first.call(null,G__14273__14280);
var G__14292 = G__14273__14280;
string__14277 = G__14291;
G__14273__14278 = G__14292;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14281 = cljs.core.next.call(null,G__14264__14271);

if(cljs.core.truth_(temp__3698__auto____14281))
{var G__14264__14283 = temp__3698__auto____14281;

{
var G__14297 = cljs.core.first.call(null,G__14264__14283);
var G__14298 = G__14264__14283;
obj__14270 = G__14297;
G__14264__14271 = G__14298;
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
pr_str.cljs$lang$applyTo = (function (arglist__14375){
var objs = cljs.core.seq( arglist__14375 );;
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
pr.cljs$lang$applyTo = (function (arglist__14383){
var objs = cljs.core.seq( arglist__14383 );;
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
println.cljs$lang$applyTo = (function (arglist__14393){
var objs = cljs.core.seq( arglist__14393 );;
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
prn.cljs$lang$applyTo = (function (arglist__14403){
var objs = cljs.core.seq( arglist__14403 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14422 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14422,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14430 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14430))
{var nspc__14431 = temp__3698__auto____14430;

return cljs.core.str.call(null,nspc__14431,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14433 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14433))
{var nspc__14434 = temp__3698__auto____14433;

return cljs.core.str.call(null,nspc__14434,"/");
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
var pr_pair__14485 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14485,"{",", ","}",opts,coll);
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
var this__14501 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14502 = this;
var G__14503__14508 = cljs.core.seq.call(null,this__14502.watches);

if(cljs.core.truth_(G__14503__14508))
{var G__14510__14512 = cljs.core.first.call(null,G__14503__14508);
var vec__14511__14513 = G__14510__14512;
var key__14515 = cljs.core.nth.call(null,vec__14511__14513,0,null);
var f__14516 = cljs.core.nth.call(null,vec__14511__14513,1,null);
var G__14503__14517 = G__14503__14508;

var G__14510__14519 = G__14510__14512;
var G__14503__14520 = G__14503__14517;

while(true){
var vec__14521__14522 = G__14510__14519;
var key__14523 = cljs.core.nth.call(null,vec__14521__14522,0,null);
var f__14524 = cljs.core.nth.call(null,vec__14521__14522,1,null);
var G__14503__14525 = G__14503__14520;

f__14524.call(null,key__14523,this$,oldval,newval);
var temp__3698__auto____14531 = cljs.core.next.call(null,G__14503__14525);

if(cljs.core.truth_(temp__3698__auto____14531))
{var G__14503__14534 = temp__3698__auto____14531;

{
var G__14634 = cljs.core.first.call(null,G__14503__14534);
var G__14635 = G__14503__14534;
G__14510__14519 = G__14634;
G__14503__14520 = G__14635;
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
var this__14535 = this;
return this$.watches = cljs.core.assoc.call(null,this__14535.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14540 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14540.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14547 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14547.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14630 = this;
return this__14630.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14631 = this;
return this__14631.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14632 = this;
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
var atom__14658 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14659 = (function() { 
var G__14661__delegate = function (x,p__14649){
var map__14650__14651 = p__14649;
var map__14650__14652 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14650__14651))?cljs.core.apply.call(null,cljs.core.hash_map,map__14650__14651):map__14650__14651);
var validator__14653 = cljs.core.get.call(null,map__14650__14652,"﷐'validator");
var meta__14654 = cljs.core.get.call(null,map__14650__14652,"﷐'meta");

return (new cljs.core.Atom(x,meta__14654,validator__14653,null));
};
var G__14661 = function (x,var_args){
var p__14649 = null;
if (goog.isDef(var_args)) {
  p__14649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14661__delegate.call(this, x, p__14649);
};
G__14661.cljs$lang$maxFixedArity = 1;
G__14661.cljs$lang$applyTo = (function (arglist__14662){
var x = cljs.core.first(arglist__14662);
var p__14649 = cljs.core.rest(arglist__14662);
return G__14661__delegate.call(this, x, p__14649);
});
return G__14661;
})()
;
atom = function(x,var_args){
var p__14649 = var_args;
switch(arguments.length){
case  1 :
return atom__14658.call(this,x);
default:
return atom__14659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14659.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14666 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14666))
{var validate__14668 = temp__3698__auto____14666;

if(cljs.core.truth_(validate__14668.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14677 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14677,new_value);
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
var swap_BANG___14705 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14707 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14708 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14709 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14710 = (function() { 
var G__14715__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14715 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14715__delegate.call(this, a, f, x, y, z, more);
};
G__14715.cljs$lang$maxFixedArity = 5;
G__14715.cljs$lang$applyTo = (function (arglist__14716){
var a = cljs.core.first(arglist__14716);
var f = cljs.core.first(cljs.core.next(arglist__14716));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14716)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14716))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14716)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14716)))));
return G__14715__delegate.call(this, a, f, x, y, z, more);
});
return G__14715;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14705.call(this,a,f);
case  3 :
return swap_BANG___14707.call(this,a,f,x);
case  4 :
return swap_BANG___14708.call(this,a,f,x,y);
case  5 :
return swap_BANG___14709.call(this,a,f,x,y,z);
default:
return swap_BANG___14710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14710.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14739){
var iref = cljs.core.first(arglist__14739);
var f = cljs.core.first(cljs.core.next(arglist__14739));
var args = cljs.core.rest(cljs.core.next(arglist__14739));
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
var gensym__14749 = (function (){
return gensym.call(null,"G__");
});
var gensym__14750 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14749.call(this);
case  1 :
return gensym__14750.call(this,prefix_string);
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
var this__14754 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14754.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14757 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14757.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14757.state,this__14757.f);
}
return cljs.core.deref.call(null,this__14757.state);
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
delay.cljs$lang$applyTo = (function (arglist__14782){
var body = cljs.core.seq( arglist__14782 );;
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
var map__14818__14819 = options;
var map__14818__14821 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14818__14819))?cljs.core.apply.call(null,cljs.core.hash_map,map__14818__14819):map__14818__14819);
var keywordize_keys__14822 = cljs.core.get.call(null,map__14818__14821,"﷐'keywordize-keys");
var keyfn__14823 = (cljs.core.truth_(keywordize_keys__14822)?cljs.core.keyword:cljs.core.str);
var f__14869 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14868 = (function iter__14863(s__14864){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14864__14865 = s__14864;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14864__14865)))
{var k__14867 = cljs.core.first.call(null,s__14864__14865);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14823.call(null,k__14867),thisfn.call(null,(x[k__14867]))]),iter__14863.call(null,cljs.core.rest.call(null,s__14864__14865)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14868.call(null,cljs.core.js_keys.call(null,x));
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

return f__14869.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14884){
var x = cljs.core.first(arglist__14884);
var options = cljs.core.rest(arglist__14884);
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
var mem__14887 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14892__delegate = function (args){
var temp__3695__auto____14889 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14887),args);

if(cljs.core.truth_(temp__3695__auto____14889))
{var v__14890 = temp__3695__auto____14889;

return v__14890;
} else
{var ret__14891 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14887,cljs.core.assoc,args,ret__14891);
return ret__14891;
}
};
var G__14892 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14892__delegate.call(this, args);
};
G__14892.cljs$lang$maxFixedArity = 0;
G__14892.cljs$lang$applyTo = (function (arglist__14893){
var args = cljs.core.seq( arglist__14893 );;
return G__14892__delegate.call(this, args);
});
return G__14892;
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
var trampoline__14900 = (function (f){
while(true){
var ret__14894 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14894)))
{{
var G__14904 = ret__14894;
f = G__14904;
continue;
}
} else
{return ret__14894;
}
break;
}
});
var trampoline__14901 = (function() { 
var G__14906__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14906 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14906__delegate.call(this, f, args);
};
G__14906.cljs$lang$maxFixedArity = 1;
G__14906.cljs$lang$applyTo = (function (arglist__14908){
var f = cljs.core.first(arglist__14908);
var args = cljs.core.rest(arglist__14908);
return G__14906__delegate.call(this, f, args);
});
return G__14906;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14900.call(this,f);
default:
return trampoline__14901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14901.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14910 = (function (){
return rand.call(null,1);
});
var rand__14911 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14910.call(this);
case  1 :
return rand__14911.call(this,n);
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
var k__15015 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15015,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15015,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15110 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15111 = (function (h,child,parent){
var or__3548__auto____15048 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15048))
{return or__3548__auto____15048;
} else
{var or__3548__auto____15049 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15049))
{return or__3548__auto____15049;
} else
{var and__3546__auto____15050 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15050))
{var and__3546__auto____15095 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15095))
{var and__3546__auto____15096 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15096))
{var ret__15097 = true;
var i__15098 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15099 = cljs.core.not.call(null,ret__15097);

if(cljs.core.truth_(or__3548__auto____15099))
{return or__3548__auto____15099;
} else
{return cljs.core._EQ_.call(null,i__15098,cljs.core.count.call(null,parent));
}
})()))
{return ret__15097;
} else
{{
var G__15121 = isa_QMARK_.call(null,h,child.call(null,i__15098),parent.call(null,i__15098));
var G__15122 = (i__15098 + 1);
ret__15097 = G__15121;
i__15098 = G__15122;
continue;
}
}
break;
}
} else
{return and__3546__auto____15096;
}
} else
{return and__3546__auto____15095;
}
} else
{return and__3546__auto____15050;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15110.call(this,h,child);
case  3 :
return isa_QMARK___15111.call(this,h,child,parent);
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
var parents__15128 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15129 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15128.call(this,h);
case  2 :
return parents__15129.call(this,h,tag);
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
var ancestors__15137 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15138 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15137.call(this,h);
case  2 :
return ancestors__15138.call(this,h,tag);
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
var descendants__15153 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15154 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15153.call(this,h);
case  2 :
return descendants__15154.call(this,h,tag);
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
var derive__15183 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15184 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15173 = "﷐'parents".call(null,h);
var td__15174 = "﷐'descendants".call(null,h);
var ta__15175 = "﷐'ancestors".call(null,h);
var tf__15178 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15181 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15173.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15175.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15175.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15173,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15178.call(null,"﷐'ancestors".call(null,h),tag,td__15174,parent,ta__15175),"﷐'descendants":tf__15178.call(null,"﷐'descendants".call(null,h),parent,ta__15175,tag,td__15174)});
})());

if(cljs.core.truth_(or__3548__auto____15181))
{return or__3548__auto____15181;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15183.call(this,h,tag);
case  3 :
return derive__15184.call(this,h,tag,parent);
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
var underive__15330 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15331 = (function (h,tag,parent){
var parentMap__15321 = "﷐'parents".call(null,h);
var childsParents__15322 = (cljs.core.truth_(parentMap__15321.call(null,tag))?cljs.core.disj.call(null,parentMap__15321.call(null,tag),parent):cljs.core.set([]));
var newParents__15324 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15322))?cljs.core.assoc.call(null,parentMap__15321,tag,childsParents__15322):cljs.core.dissoc.call(null,parentMap__15321,tag));
var deriv_seq__15326 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15162_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15162_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15162_SHARP_),cljs.core.second.call(null,p1__15162_SHARP_)));
}),cljs.core.seq.call(null,newParents__15324)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15321.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15163_SHARP_,p2__15164_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15163_SHARP_,p2__15164_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15326));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15330.call(this,h,tag);
case  3 :
return underive__15331.call(this,h,tag,parent);
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
var xprefs__15343 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15345 = (cljs.core.truth_((function (){var and__3546__auto____15344 = xprefs__15343;

if(cljs.core.truth_(and__3546__auto____15344))
{return xprefs__15343.call(null,y);
} else
{return and__3546__auto____15344;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15345))
{return or__3548__auto____15345;
} else
{var or__3548__auto____15350 = (function (){var ps__15347 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15347) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15347),prefer_table)))
{} else
{}
{
var G__15356 = cljs.core.rest.call(null,ps__15347);
ps__15347 = G__15356;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15350))
{return or__3548__auto____15350;
} else
{var or__3548__auto____15352 = (function (){var ps__15351 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15351) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15351),y,prefer_table)))
{} else
{}
{
var G__15357 = cljs.core.rest.call(null,ps__15351);
ps__15351 = G__15357;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15352))
{return or__3548__auto____15352;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15358 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15358))
{return or__3548__auto____15358;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15367 = cljs.core.reduce.call(null,(function (be,p__15359){
var vec__15360__15361 = p__15359;
var k__15362 = cljs.core.nth.call(null,vec__15360__15361,0,null);
var ___15363 = cljs.core.nth.call(null,vec__15360__15361,1,null);
var e__15364 = vec__15360__15361;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15362)))
{var be2__15366 = (cljs.core.truth_((function (){var or__3548__auto____15365 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15365))
{return or__3548__auto____15365;
} else
{return cljs.core.dominates.call(null,k__15362,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15364:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15366),k__15362,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15362," and ",cljs.core.first.call(null,be2__15366),", and neither is preferred")));
}
return be2__15366;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15367))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15367));
return cljs.core.second.call(null,best_entry__15367);
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
if(cljs.core.truth_((function (){var and__3546__auto____15428 = mf;

if(cljs.core.truth_(and__3546__auto____15428))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15428;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15430 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15430))
{return or__3548__auto____15430;
} else
{var or__3548__auto____15431 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15431))
{return or__3548__auto____15431;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15432 = mf;

if(cljs.core.truth_(and__3546__auto____15432))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15432;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15433 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15433))
{return or__3548__auto____15433;
} else
{var or__3548__auto____15434 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15434))
{return or__3548__auto____15434;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15435 = mf;

if(cljs.core.truth_(and__3546__auto____15435))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15435;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15436 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15436))
{return or__3548__auto____15436;
} else
{var or__3548__auto____15437 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15437))
{return or__3548__auto____15437;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15439 = mf;

if(cljs.core.truth_(and__3546__auto____15439))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15439;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15441 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15441))
{return or__3548__auto____15441;
} else
{var or__3548__auto____15442 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15442))
{return or__3548__auto____15442;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15444 = mf;

if(cljs.core.truth_(and__3546__auto____15444))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15444;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15446 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15446))
{return or__3548__auto____15446;
} else
{var or__3548__auto____15447 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15447))
{return or__3548__auto____15447;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15449 = mf;

if(cljs.core.truth_(and__3546__auto____15449))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15449;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15452 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15452))
{return or__3548__auto____15452;
} else
{var or__3548__auto____15455 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15455))
{return or__3548__auto____15455;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15457 = mf;

if(cljs.core.truth_(and__3546__auto____15457))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15457;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15458 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{var or__3548__auto____15460 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15460))
{return or__3548__auto____15460;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15462 = mf;

if(cljs.core.truth_(and__3546__auto____15462))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15462;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15464 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15464))
{return or__3548__auto____15464;
} else
{var or__3548__auto____15465 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15465))
{return or__3548__auto____15465;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15477 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15478 = cljs.core._get_method.call(null,mf,dispatch_val__15477);

if(cljs.core.truth_(target_fn__15478))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15477)));
}
return cljs.core.apply.call(null,target_fn__15478,args);
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
var this__15486 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15488 = this;
cljs.core.swap_BANG_.call(null,this__15488.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15488.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15488.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15488.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15491 = this;
cljs.core.swap_BANG_.call(null,this__15491.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15491.method_cache,this__15491.method_table,this__15491.cached_hierarchy,this__15491.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15505 = this;
cljs.core.swap_BANG_.call(null,this__15505.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15505.method_cache,this__15505.method_table,this__15505.cached_hierarchy,this__15505.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15507 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15507.cached_hierarchy),cljs.core.deref.call(null,this__15507.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15507.method_cache,this__15507.method_table,this__15507.cached_hierarchy,this__15507.hierarchy);
}
var temp__3695__auto____15510 = cljs.core.deref.call(null,this__15507.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15510))
{var target_fn__15512 = temp__3695__auto____15510;

return target_fn__15512;
} else
{var temp__3695__auto____15513 = cljs.core.find_and_cache_best_method.call(null,this__15507.name,dispatch_val,this__15507.hierarchy,this__15507.method_table,this__15507.prefer_table,this__15507.method_cache,this__15507.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15513))
{var target_fn__15514 = temp__3695__auto____15513;

return target_fn__15514;
} else
{return cljs.core.deref.call(null,this__15507.method_table).call(null,this__15507.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15515 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15515.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15515.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15515.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15515.method_cache,this__15515.method_table,this__15515.cached_hierarchy,this__15515.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15516 = this;
return cljs.core.deref.call(null,this__15516.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15517 = this;
return cljs.core.deref.call(null,this__15517.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15518 = this;
return cljs.core.do_dispatch.call(null,mf,this__15518.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15519__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15519 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15519__delegate.call(this, _, args);
};
G__15519.cljs$lang$maxFixedArity = 1;
G__15519.cljs$lang$applyTo = (function (arglist__15520){
var _ = cljs.core.first(arglist__15520);
var args = cljs.core.rest(arglist__15520);
return G__15519__delegate.call(this, _, args);
});
return G__15519;
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
