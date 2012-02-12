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
var or__3548__auto____7263 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7263))
{return or__3548__auto____7263;
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
var _invoke__7598 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7271 = this$;

if(cljs.core.truth_(and__3546__auto____7271))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7271;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7272 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7272))
{return or__3548__auto____7272;
} else
{var or__3548__auto____7273 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7273))
{return or__3548__auto____7273;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7599 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7274 = this$;

if(cljs.core.truth_(and__3546__auto____7274))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7274;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7277 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7277))
{return or__3548__auto____7277;
} else
{var or__3548__auto____7278 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7278))
{return or__3548__auto____7278;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7600 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7279 = this$;

if(cljs.core.truth_(and__3546__auto____7279))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7279;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7280 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7280))
{return or__3548__auto____7280;
} else
{var or__3548__auto____7281 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7281))
{return or__3548__auto____7281;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7601 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7282 = this$;

if(cljs.core.truth_(and__3546__auto____7282))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7282;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7283 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7283))
{return or__3548__auto____7283;
} else
{var or__3548__auto____7284 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7284))
{return or__3548__auto____7284;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7602 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7286 = this$;

if(cljs.core.truth_(and__3546__auto____7286))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7286;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7289 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7289))
{return or__3548__auto____7289;
} else
{var or__3548__auto____7290 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7290))
{return or__3548__auto____7290;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7603 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7292 = this$;

if(cljs.core.truth_(and__3546__auto____7292))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7292;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7295 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7295))
{return or__3548__auto____7295;
} else
{var or__3548__auto____7297 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7297))
{return or__3548__auto____7297;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7604 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
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
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7305 = this$;

if(cljs.core.truth_(and__3546__auto____7305))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7305;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7306 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7306))
{return or__3548__auto____7306;
} else
{var or__3548__auto____7307 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7307))
{return or__3548__auto____7307;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7606 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7308 = this$;

if(cljs.core.truth_(and__3546__auto____7308))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7308;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7310 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7310))
{return or__3548__auto____7310;
} else
{var or__3548__auto____7311 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7311))
{return or__3548__auto____7311;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7607 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7314 = this$;

if(cljs.core.truth_(and__3546__auto____7314))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7314;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7317 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7317))
{return or__3548__auto____7317;
} else
{var or__3548__auto____7321 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7608 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7327 = this$;

if(cljs.core.truth_(and__3546__auto____7327))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7327;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7331 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7331))
{return or__3548__auto____7331;
} else
{var or__3548__auto____7334 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7340 = this$;

if(cljs.core.truth_(and__3546__auto____7340))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7340;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7610 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7351 = this$;

if(cljs.core.truth_(and__3546__auto____7351))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7351;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7356 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7356))
{return or__3548__auto____7356;
} else
{var or__3548__auto____7359 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7359))
{return or__3548__auto____7359;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7363 = this$;

if(cljs.core.truth_(and__3546__auto____7363))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7363;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7370 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7370))
{return or__3548__auto____7370;
} else
{var or__3548__auto____7371 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7371))
{return or__3548__auto____7371;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7612 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7377 = this$;

if(cljs.core.truth_(and__3546__auto____7377))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7377;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{var or__3548__auto____7383 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7383))
{return or__3548__auto____7383;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7389 = this$;

if(cljs.core.truth_(and__3546__auto____7389))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7389;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7394 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{var or__3548__auto____7396 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7396))
{return or__3548__auto____7396;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7402 = this$;

if(cljs.core.truth_(and__3546__auto____7402))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7402;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7406 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7406))
{return or__3548__auto____7406;
} else
{var or__3548__auto____7409 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7409))
{return or__3548__auto____7409;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7412 = this$;

if(cljs.core.truth_(and__3546__auto____7412))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7412;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7420 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7420))
{return or__3548__auto____7420;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7427 = this$;

if(cljs.core.truth_(and__3546__auto____7427))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7427;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7431 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
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
if(cljs.core.truth_((function (){var and__3546__auto____7440 = this$;

if(cljs.core.truth_(and__3546__auto____7440))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7440;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7444 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7444))
{return or__3548__auto____7444;
} else
{var or__3548__auto____7445 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7445))
{return or__3548__auto____7445;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7452 = this$;

if(cljs.core.truth_(and__3546__auto____7452))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7452;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
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
if(cljs.core.truth_((function (){var and__3546__auto____7707 = coll;

if(cljs.core.truth_(and__3546__auto____7707))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7707;
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
if(cljs.core.truth_((function (){var and__3546__auto____7720 = coll;

if(cljs.core.truth_(and__3546__auto____7720))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7720;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7722 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7722))
{return or__3548__auto____7722;
} else
{var or__3548__auto____7724 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7735 = coll;

if(cljs.core.truth_(and__3546__auto____7735))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7735;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7736 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7736))
{return or__3548__auto____7736;
} else
{var or__3548__auto____7737 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7737))
{return or__3548__auto____7737;
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
var _nth__7760 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7744 = coll;

if(cljs.core.truth_(and__3546__auto____7744))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7744;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7748 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7748))
{return or__3548__auto____7748;
} else
{var or__3548__auto____7752 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7752))
{return or__3548__auto____7752;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7762 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7754 = coll;

if(cljs.core.truth_(and__3546__auto____7754))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7754;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7756 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7756))
{return or__3548__auto____7756;
} else
{var or__3548__auto____7757 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
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
return _nth__7760.call(this,coll,n);
case  3 :
return _nth__7762.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7773 = coll;

if(cljs.core.truth_(and__3546__auto____7773))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7773;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7787 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7787))
{return or__3548__auto____7787;
} else
{var or__3548__auto____7791 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7793 = coll;

if(cljs.core.truth_(and__3546__auto____7793))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7793;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7797 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7797))
{return or__3548__auto____7797;
} else
{var or__3548__auto____7798 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7798))
{return or__3548__auto____7798;
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
var _lookup__7873 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7818 = o;

if(cljs.core.truth_(and__3546__auto____7818))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7818;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7857 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7857))
{return or__3548__auto____7857;
} else
{var or__3548__auto____7860 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7860))
{return or__3548__auto____7860;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7874 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7861 = o;

if(cljs.core.truth_(and__3546__auto____7861))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7861;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7865 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7865))
{return or__3548__auto____7865;
} else
{var or__3548__auto____7869 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7869))
{return or__3548__auto____7869;
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
return _lookup__7873.call(this,o,k);
case  3 :
return _lookup__7874.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7899 = coll;

if(cljs.core.truth_(and__3546__auto____7899))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7899;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7902 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{var or__3548__auto____7903 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7906 = coll;

if(cljs.core.truth_(and__3546__auto____7906))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7906;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7909 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7909))
{return or__3548__auto____7909;
} else
{var or__3548__auto____7910 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7923 = coll;

if(cljs.core.truth_(and__3546__auto____7923))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7923;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7925 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{var or__3548__auto____7927 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7927))
{return or__3548__auto____7927;
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
{return (function (){var or__3548__auto____7948 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7948))
{return or__3548__auto____7948;
} else
{var or__3548__auto____7950 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7956 = coll;

if(cljs.core.truth_(and__3546__auto____7956))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7956;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7959 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7959))
{return or__3548__auto____7959;
} else
{var or__3548__auto____7961 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7965 = coll;

if(cljs.core.truth_(and__3546__auto____7965))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7965;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7968 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7968))
{return or__3548__auto____7968;
} else
{var or__3548__auto____7969 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7969))
{return or__3548__auto____7969;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7978 = coll;

if(cljs.core.truth_(and__3546__auto____7978))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7978;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7979 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7979))
{return or__3548__auto____7979;
} else
{var or__3548__auto____7980 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7980))
{return or__3548__auto____7980;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7990 = o;

if(cljs.core.truth_(and__3546__auto____7990))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7990;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7991 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7991))
{return or__3548__auto____7991;
} else
{var or__3548__auto____7992 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7992))
{return or__3548__auto____7992;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8002 = o;

if(cljs.core.truth_(and__3546__auto____8002))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8002;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8005 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
} else
{var or__3548__auto____8006 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = o;

if(cljs.core.truth_(and__3546__auto____8018))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8018;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8023 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{var or__3548__auto____8026 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8026))
{return or__3548__auto____8026;
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
{return (function (){var or__3548__auto____8056 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{var or__3548__auto____8058 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
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
var _reduce__8079 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8065 = coll;

if(cljs.core.truth_(and__3546__auto____8065))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8065;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8067 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8067))
{return or__3548__auto____8067;
} else
{var or__3548__auto____8069 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8069))
{return or__3548__auto____8069;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8080 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8074 = coll;

if(cljs.core.truth_(and__3546__auto____8074))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8074;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8076 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8076))
{return or__3548__auto____8076;
} else
{var or__3548__auto____8078 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
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
return _reduce__8079.call(this,coll,f);
case  3 :
return _reduce__8080.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8090 = o;

if(cljs.core.truth_(and__3546__auto____8090))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8090;
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
{return (function (){var or__3548__auto____8104 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8104))
{return or__3548__auto____8104;
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
if(cljs.core.truth_((function (){var and__3546__auto____8118 = o;

if(cljs.core.truth_(and__3546__auto____8118))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8118;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8121 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8121))
{return or__3548__auto____8121;
} else
{var or__3548__auto____8125 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8125))
{return or__3548__auto____8125;
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
if(cljs.core.truth_((function (){var and__3546__auto____8130 = o;

if(cljs.core.truth_(and__3546__auto____8130))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8130;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8132 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
} else
{var or__3548__auto____8135 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8135))
{return or__3548__auto____8135;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8140 = d;

if(cljs.core.truth_(and__3546__auto____8140))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8140;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8147 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8147))
{return or__3548__auto____8147;
} else
{var or__3548__auto____8149 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8149))
{return or__3548__auto____8149;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____8157 = this$;

if(cljs.core.truth_(and__3546__auto____8157))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8157;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8158 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8158))
{return or__3548__auto____8158;
} else
{var or__3548__auto____8160 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8160))
{return or__3548__auto____8160;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8163 = this$;

if(cljs.core.truth_(and__3546__auto____8163))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8163;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8164 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8164))
{return or__3548__auto____8164;
} else
{var or__3548__auto____8165 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8165))
{return or__3548__auto____8165;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8166 = this$;

if(cljs.core.truth_(and__3546__auto____8166))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8166;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8168 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8168))
{return or__3548__auto____8168;
} else
{var or__3548__auto____8169 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8169))
{return or__3548__auto____8169;
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
var G__8229 = null;
var G__8229__8230 = (function (o,k){
return null;
});
var G__8229__8231 = (function (o,k,not_found){
return not_found;
});
G__8229 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8229__8230.call(this,o,k);
case  3 :
return G__8229__8231.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8229;
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
var G__8235 = null;
var G__8235__8236 = (function (_,f){
return f.call(null);
});
var G__8235__8237 = (function (_,f,start){
return start;
});
G__8235 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8235__8236.call(this,_,f);
case  3 :
return G__8235__8237.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8235;
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
var G__8251 = null;
var G__8251__8252 = (function (_,n){
return null;
});
var G__8251__8253 = (function (_,n,not_found){
return not_found;
});
G__8251 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8251__8252.call(this,_,n);
case  3 :
return G__8251__8253.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8251;
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
var ci_reduce__8269 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8257 = cljs.core._nth.call(null,cicoll,0);
var n__8258 = 1;

while(true){
if(cljs.core.truth_((n__8258 < cljs.core._count.call(null,cicoll))))
{{
var G__8273 = f.call(null,val__8257,cljs.core._nth.call(null,cicoll,n__8258));
var G__8274 = (n__8258 + 1);
val__8257 = G__8273;
n__8258 = G__8274;
continue;
}
} else
{return val__8257;
}
break;
}
}
});
var ci_reduce__8270 = (function (cicoll,f,val){
var val__8261 = val;
var n__8262 = 0;

while(true){
if(cljs.core.truth_((n__8262 < cljs.core._count.call(null,cicoll))))
{{
var G__8279 = f.call(null,val__8261,cljs.core._nth.call(null,cicoll,n__8262));
var G__8280 = (n__8262 + 1);
val__8261 = G__8279;
n__8262 = G__8280;
continue;
}
} else
{return val__8261;
}
break;
}
});
var ci_reduce__8271 = (function (cicoll,f,val,idx){
var val__8265 = val;
var n__8266 = idx;

while(true){
if(cljs.core.truth_((n__8266 < cljs.core._count.call(null,cicoll))))
{{
var G__8299 = f.call(null,val__8265,cljs.core._nth.call(null,cicoll,n__8266));
var G__8300 = (n__8266 + 1);
val__8265 = G__8299;
n__8266 = G__8300;
continue;
}
} else
{return val__8265;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8269.call(this,cicoll,f);
case  3 :
return ci_reduce__8270.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8271.call(this,cicoll,f,val,idx);
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
var this__8331 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8370 = null;
var G__8370__8371 = (function (_,f){
var this__8332 = this;
return cljs.core.ci_reduce.call(null,this__8332.a,f,(this__8332.a[this__8332.i]),(this__8332.i + 1));
});
var G__8370__8372 = (function (_,f,start){
var this__8334 = this;
return cljs.core.ci_reduce.call(null,this__8334.a,f,start,this__8334.i);
});
G__8370 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8370__8371.call(this,_,f);
case  3 :
return G__8370__8372.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8370;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8337 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8340 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8382 = null;
var G__8382__8383 = (function (coll,n){
var this__8343 = this;
var i__8346 = (n + this__8343.i);

if(cljs.core.truth_((i__8346 < this__8343.a.length)))
{return (this__8343.a[i__8346]);
} else
{return null;
}
});
var G__8382__8384 = (function (coll,n,not_found){
var this__8349 = this;
var i__8351 = (n + this__8349.i);

if(cljs.core.truth_((i__8351 < this__8349.a.length)))
{return (this__8349.a[i__8351]);
} else
{return not_found;
}
});
G__8382 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8382__8383.call(this,coll,n);
case  3 :
return G__8382__8384.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8382;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8354 = this;
return (this__8354.a.length - this__8354.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8359 = this;
return (this__8359.a[this__8359.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8360 = this;
if(cljs.core.truth_(((this__8360.i + 1) < this__8360.a.length)))
{return (new cljs.core.IndexedSeq(this__8360.a,(this__8360.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8365 = this;
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
var G__8482 = null;
var G__8482__8483 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8482__8484 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8482 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8482__8483.call(this,array,f);
case  3 :
return G__8482__8484.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8482;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8486 = null;
var G__8486__8487 = (function (array,k){
return (array[k]);
});
var G__8486__8488 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8486 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8486__8487.call(this,array,k);
case  3 :
return G__8486__8488.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8486;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8492 = null;
var G__8492__8493 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8492__8494 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8492 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8492__8493.call(this,array,n);
case  3 :
return G__8492__8494.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8492;
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
var temp__3698__auto____8498 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8498))
{var s__8499 = temp__3698__auto____8498;

return cljs.core._first.call(null,s__8499);
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
var G__8559 = cljs.core.next.call(null,s);
s = G__8559;
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
var s__8563 = cljs.core.seq.call(null,x);
var n__8564 = 0;

while(true){
if(cljs.core.truth_(s__8563))
{{
var G__8573 = cljs.core.next.call(null,s__8563);
var G__8574 = (n__8564 + 1);
s__8563 = G__8573;
n__8564 = G__8574;
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
var conj__8578 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8579 = (function() { 
var G__8581__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8583 = conj.call(null,coll,x);
var G__8585 = cljs.core.first.call(null,xs);
var G__8587 = cljs.core.next.call(null,xs);
coll = G__8583;
x = G__8585;
xs = G__8587;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8581 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8581__delegate.call(this, coll, x, xs);
};
G__8581.cljs$lang$maxFixedArity = 2;
G__8581.cljs$lang$applyTo = (function (arglist__8593){
var coll = cljs.core.first(arglist__8593);
var x = cljs.core.first(cljs.core.next(arglist__8593));
var xs = cljs.core.rest(cljs.core.next(arglist__8593));
return G__8581__delegate.call(this, coll, x, xs);
});
return G__8581;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8578.call(this,coll,x);
default:
return conj__8579.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8579.cljs$lang$applyTo;
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
var nth__8599 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8600 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8599.call(this,coll,n);
case  3 :
return nth__8600.call(this,coll,n,not_found);
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
var get__8661 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8662 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8661.call(this,o,k);
case  3 :
return get__8662.call(this,o,k,not_found);
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
var assoc__8672 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8673 = (function() { 
var G__8676__delegate = function (coll,k,v,kvs){
while(true){
var ret__8669 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8682 = ret__8669;
var G__8683 = cljs.core.first.call(null,kvs);
var G__8684 = cljs.core.second.call(null,kvs);
var G__8685 = cljs.core.nnext.call(null,kvs);
coll = G__8682;
k = G__8683;
v = G__8684;
kvs = G__8685;
continue;
}
} else
{return ret__8669;
}
break;
}
};
var G__8676 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8676__delegate.call(this, coll, k, v, kvs);
};
G__8676.cljs$lang$maxFixedArity = 3;
G__8676.cljs$lang$applyTo = (function (arglist__8690){
var coll = cljs.core.first(arglist__8690);
var k = cljs.core.first(cljs.core.next(arglist__8690));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8690)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8690)));
return G__8676__delegate.call(this, coll, k, v, kvs);
});
return G__8676;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8672.call(this,coll,k,v);
default:
return assoc__8673.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8673.cljs$lang$applyTo;
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
var dissoc__8704 = (function (coll){
return coll;
});
var dissoc__8705 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8706 = (function() { 
var G__8708__delegate = function (coll,k,ks){
while(true){
var ret__8692 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8709 = ret__8692;
var G__8710 = cljs.core.first.call(null,ks);
var G__8711 = cljs.core.next.call(null,ks);
coll = G__8709;
k = G__8710;
ks = G__8711;
continue;
}
} else
{return ret__8692;
}
break;
}
};
var G__8708 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8708__delegate.call(this, coll, k, ks);
};
G__8708.cljs$lang$maxFixedArity = 2;
G__8708.cljs$lang$applyTo = (function (arglist__8712){
var coll = cljs.core.first(arglist__8712);
var k = cljs.core.first(cljs.core.next(arglist__8712));
var ks = cljs.core.rest(cljs.core.next(arglist__8712));
return G__8708__delegate.call(this, coll, k, ks);
});
return G__8708;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8704.call(this,coll);
case  2 :
return dissoc__8705.call(this,coll,k);
default:
return dissoc__8706.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8706.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8724 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8725 = x__445__auto____8724;

if(cljs.core.truth_(and__3546__auto____8725))
{var and__3546__auto____8726 = x__445__auto____8724.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8726))
{return cljs.core.not.call(null,x__445__auto____8724.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8726;
}
} else
{return and__3546__auto____8725;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8724);
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
var disj__8737 = (function (coll){
return coll;
});
var disj__8738 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8740 = (function() { 
var G__8747__delegate = function (coll,k,ks){
while(true){
var ret__8734 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8749 = ret__8734;
var G__8750 = cljs.core.first.call(null,ks);
var G__8752 = cljs.core.next.call(null,ks);
coll = G__8749;
k = G__8750;
ks = G__8752;
continue;
}
} else
{return ret__8734;
}
break;
}
};
var G__8747 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8747__delegate.call(this, coll, k, ks);
};
G__8747.cljs$lang$maxFixedArity = 2;
G__8747.cljs$lang$applyTo = (function (arglist__8755){
var coll = cljs.core.first(arglist__8755);
var k = cljs.core.first(cljs.core.next(arglist__8755));
var ks = cljs.core.rest(cljs.core.next(arglist__8755));
return G__8747__delegate.call(this, coll, k, ks);
});
return G__8747;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8737.call(this,coll);
case  2 :
return disj__8738.call(this,coll,k);
default:
return disj__8740.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8740.cljs$lang$applyTo;
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
{var x__445__auto____8766 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8768 = x__445__auto____8766;

if(cljs.core.truth_(and__3546__auto____8768))
{var and__3546__auto____8770 = x__445__auto____8766.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8770))
{return cljs.core.not.call(null,x__445__auto____8766.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8770;
}
} else
{return and__3546__auto____8768;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8766);
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
{var x__445__auto____8776 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8781 = x__445__auto____8776;

if(cljs.core.truth_(and__3546__auto____8781))
{var and__3546__auto____8782 = x__445__auto____8776.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8782))
{return cljs.core.not.call(null,x__445__auto____8776.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8782;
}
} else
{return and__3546__auto____8781;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8776);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8791 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8792 = x__445__auto____8791;

if(cljs.core.truth_(and__3546__auto____8792))
{var and__3546__auto____8793 = x__445__auto____8791.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8793))
{return cljs.core.not.call(null,x__445__auto____8791.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8793;
}
} else
{return and__3546__auto____8792;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8791);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8800 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8801 = x__445__auto____8800;

if(cljs.core.truth_(and__3546__auto____8801))
{var and__3546__auto____8802 = x__445__auto____8800.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8802))
{return cljs.core.not.call(null,x__445__auto____8800.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8802;
}
} else
{return and__3546__auto____8801;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8800);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8831 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8835 = x__445__auto____8831;

if(cljs.core.truth_(and__3546__auto____8835))
{var and__3546__auto____8837 = x__445__auto____8831.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8837))
{return cljs.core.not.call(null,x__445__auto____8831.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8837;
}
} else
{return and__3546__auto____8835;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8831);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8842 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8843 = x__445__auto____8842;

if(cljs.core.truth_(and__3546__auto____8843))
{var and__3546__auto____8844 = x__445__auto____8842.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8844))
{return cljs.core.not.call(null,x__445__auto____8842.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8844;
}
} else
{return and__3546__auto____8843;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8842);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8845 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8846 = x__445__auto____8845;

if(cljs.core.truth_(and__3546__auto____8846))
{var and__3546__auto____8848 = x__445__auto____8845.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8848))
{return cljs.core.not.call(null,x__445__auto____8845.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8848;
}
} else
{return and__3546__auto____8846;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8845);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8856 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8856.push(key);
}));
return keys__8856;
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
{var x__445__auto____8866 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8867 = x__445__auto____8866;

if(cljs.core.truth_(and__3546__auto____8867))
{var and__3546__auto____8868 = x__445__auto____8866.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8868))
{return cljs.core.not.call(null,x__445__auto____8866.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8868;
}
} else
{return and__3546__auto____8867;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8866);
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
var and__3546__auto____8871 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8871))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8920 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8920))
{return or__3548__auto____8920;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8871;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8926 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8926))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8926;
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
var and__3546__auto____8945 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8945))
{return (n == n.toFixed());
} else
{return and__3546__auto____8945;
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
if(cljs.core.truth_((function (){var and__3546__auto____8951 = coll;

if(cljs.core.truth_(and__3546__auto____8951))
{var and__3546__auto____8952 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8952))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8952;
}
} else
{return and__3546__auto____8951;
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
var distinct_QMARK___8960 = (function (x){
return true;
});
var distinct_QMARK___8961 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8962 = (function() { 
var G__8964__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8956 = cljs.core.set([y,x]);
var xs__8957 = more;

while(true){
var x__8958 = cljs.core.first.call(null,xs__8957);
var etc__8959 = cljs.core.next.call(null,xs__8957);

if(cljs.core.truth_(xs__8957))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8956,x__8958)))
{return false;
} else
{{
var G__8968 = cljs.core.conj.call(null,s__8956,x__8958);
var G__8969 = etc__8959;
s__8956 = G__8968;
xs__8957 = G__8969;
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
var G__8964 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8964__delegate.call(this, x, y, more);
};
G__8964.cljs$lang$maxFixedArity = 2;
G__8964.cljs$lang$applyTo = (function (arglist__8970){
var x = cljs.core.first(arglist__8970);
var y = cljs.core.first(cljs.core.next(arglist__8970));
var more = cljs.core.rest(cljs.core.next(arglist__8970));
return G__8964__delegate.call(this, x, y, more);
});
return G__8964;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8960.call(this,x);
case  2 :
return distinct_QMARK___8961.call(this,x,y);
default:
return distinct_QMARK___8962.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8962.cljs$lang$applyTo;
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
var r__8978 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__8978)))
{return r__8978;
} else
{if(cljs.core.truth_(r__8978))
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
var sort__9020 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9021 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9017 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9017,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9017);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9020.call(this,comp);
case  2 :
return sort__9021.call(this,comp,coll);
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
var sort_by__9033 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9034 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9033.call(this,keyfn,comp);
case  3 :
return sort_by__9034.call(this,keyfn,comp,coll);
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
var reduce__9041 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9042 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9041.call(this,f,val);
case  3 :
return reduce__9042.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9056 = (function (f,coll){
var temp__3695__auto____9045 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9045))
{var s__9051 = temp__3695__auto____9045;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9051),cljs.core.next.call(null,s__9051));
} else
{return f.call(null);
}
});
var seq_reduce__9057 = (function (f,val,coll){
var val__9053 = val;
var coll__9054 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9054))
{{
var G__9061 = f.call(null,val__9053,cljs.core.first.call(null,coll__9054));
var G__9062 = cljs.core.next.call(null,coll__9054);
val__9053 = G__9061;
coll__9054 = G__9062;
continue;
}
} else
{return val__9053;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9056.call(this,f,val);
case  3 :
return seq_reduce__9057.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9069 = null;
var G__9069__9074 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9069__9075 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9069 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9069__9074.call(this,coll,f);
case  3 :
return G__9069__9075.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9069;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9091 = (function (){
return 0;
});
var _PLUS___9092 = (function (x){
return x;
});
var _PLUS___9093 = (function (x,y){
return (x + y);
});
var _PLUS___9094 = (function() { 
var G__9096__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9096 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9096__delegate.call(this, x, y, more);
};
G__9096.cljs$lang$maxFixedArity = 2;
G__9096.cljs$lang$applyTo = (function (arglist__9101){
var x = cljs.core.first(arglist__9101);
var y = cljs.core.first(cljs.core.next(arglist__9101));
var more = cljs.core.rest(cljs.core.next(arglist__9101));
return G__9096__delegate.call(this, x, y, more);
});
return G__9096;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9091.call(this);
case  1 :
return _PLUS___9092.call(this,x);
case  2 :
return _PLUS___9093.call(this,x,y);
default:
return _PLUS___9094.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9094.cljs$lang$applyTo;
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
var ___9130 = (function (x){
return (- x);
});
var ___9131 = (function (x,y){
return (x - y);
});
var ___9132 = (function() { 
var G__9194__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9194 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9194__delegate.call(this, x, y, more);
};
G__9194.cljs$lang$maxFixedArity = 2;
G__9194.cljs$lang$applyTo = (function (arglist__9195){
var x = cljs.core.first(arglist__9195);
var y = cljs.core.first(cljs.core.next(arglist__9195));
var more = cljs.core.rest(cljs.core.next(arglist__9195));
return G__9194__delegate.call(this, x, y, more);
});
return G__9194;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9130.call(this,x);
case  2 :
return ___9131.call(this,x,y);
default:
return ___9132.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9132.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9202 = (function (){
return 1;
});
var _STAR___9203 = (function (x){
return x;
});
var _STAR___9204 = (function (x,y){
return (x * y);
});
var _STAR___9205 = (function() { 
var G__9208__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9208 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9208__delegate.call(this, x, y, more);
};
G__9208.cljs$lang$maxFixedArity = 2;
G__9208.cljs$lang$applyTo = (function (arglist__9209){
var x = cljs.core.first(arglist__9209);
var y = cljs.core.first(cljs.core.next(arglist__9209));
var more = cljs.core.rest(cljs.core.next(arglist__9209));
return G__9208__delegate.call(this, x, y, more);
});
return G__9208;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9202.call(this);
case  1 :
return _STAR___9203.call(this,x);
case  2 :
return _STAR___9204.call(this,x,y);
default:
return _STAR___9205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9205.cljs$lang$applyTo;
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
var _SLASH___9219 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9220 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9221 = (function() { 
var G__9226__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9226 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9226__delegate.call(this, x, y, more);
};
G__9226.cljs$lang$maxFixedArity = 2;
G__9226.cljs$lang$applyTo = (function (arglist__9227){
var x = cljs.core.first(arglist__9227);
var y = cljs.core.first(cljs.core.next(arglist__9227));
var more = cljs.core.rest(cljs.core.next(arglist__9227));
return G__9226__delegate.call(this, x, y, more);
});
return G__9226;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9219.call(this,x);
case  2 :
return _SLASH___9220.call(this,x,y);
default:
return _SLASH___9221.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9221.cljs$lang$applyTo;
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
var _LT___9239 = (function (x){
return true;
});
var _LT___9240 = (function (x,y){
return (x < y);
});
var _LT___9241 = (function() { 
var G__9244__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9245 = y;
var G__9246 = cljs.core.first.call(null,more);
var G__9247 = cljs.core.next.call(null,more);
x = G__9245;
y = G__9246;
more = G__9247;
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
var G__9244 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9244__delegate.call(this, x, y, more);
};
G__9244.cljs$lang$maxFixedArity = 2;
G__9244.cljs$lang$applyTo = (function (arglist__9249){
var x = cljs.core.first(arglist__9249);
var y = cljs.core.first(cljs.core.next(arglist__9249));
var more = cljs.core.rest(cljs.core.next(arglist__9249));
return G__9244__delegate.call(this, x, y, more);
});
return G__9244;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9239.call(this,x);
case  2 :
return _LT___9240.call(this,x,y);
default:
return _LT___9241.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9241.cljs$lang$applyTo;
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
var _LT__EQ___9265 = (function (x){
return true;
});
var _LT__EQ___9267 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9268 = (function() { 
var G__9270__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9272 = y;
var G__9273 = cljs.core.first.call(null,more);
var G__9274 = cljs.core.next.call(null,more);
x = G__9272;
y = G__9273;
more = G__9274;
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
var G__9270 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9270__delegate.call(this, x, y, more);
};
G__9270.cljs$lang$maxFixedArity = 2;
G__9270.cljs$lang$applyTo = (function (arglist__9275){
var x = cljs.core.first(arglist__9275);
var y = cljs.core.first(cljs.core.next(arglist__9275));
var more = cljs.core.rest(cljs.core.next(arglist__9275));
return G__9270__delegate.call(this, x, y, more);
});
return G__9270;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9265.call(this,x);
case  2 :
return _LT__EQ___9267.call(this,x,y);
default:
return _LT__EQ___9268.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9268.cljs$lang$applyTo;
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
var _GT___9284 = (function (x){
return true;
});
var _GT___9286 = (function (x,y){
return (x > y);
});
var _GT___9287 = (function() { 
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
G__9292.cljs$lang$applyTo = (function (arglist__9302){
var x = cljs.core.first(arglist__9302);
var y = cljs.core.first(cljs.core.next(arglist__9302));
var more = cljs.core.rest(cljs.core.next(arglist__9302));
return G__9292__delegate.call(this, x, y, more);
});
return G__9292;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9284.call(this,x);
case  2 :
return _GT___9286.call(this,x,y);
default:
return _GT___9287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9287.cljs$lang$applyTo;
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
var _GT__EQ___9305 = (function (x){
return true;
});
var _GT__EQ___9306 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9307 = (function() { 
var G__9313__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9319 = y;
var G__9320 = cljs.core.first.call(null,more);
var G__9321 = cljs.core.next.call(null,more);
x = G__9319;
y = G__9320;
more = G__9321;
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
var G__9313 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9313__delegate.call(this, x, y, more);
};
G__9313.cljs$lang$maxFixedArity = 2;
G__9313.cljs$lang$applyTo = (function (arglist__9325){
var x = cljs.core.first(arglist__9325);
var y = cljs.core.first(cljs.core.next(arglist__9325));
var more = cljs.core.rest(cljs.core.next(arglist__9325));
return G__9313__delegate.call(this, x, y, more);
});
return G__9313;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9305.call(this,x);
case  2 :
return _GT__EQ___9306.call(this,x,y);
default:
return _GT__EQ___9307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9307.cljs$lang$applyTo;
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
var max__9353 = (function (x){
return x;
});
var max__9354 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9355 = (function() { 
var G__9357__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9357__delegate.call(this, x, y, more);
};
G__9357.cljs$lang$maxFixedArity = 2;
G__9357.cljs$lang$applyTo = (function (arglist__9362){
var x = cljs.core.first(arglist__9362);
var y = cljs.core.first(cljs.core.next(arglist__9362));
var more = cljs.core.rest(cljs.core.next(arglist__9362));
return G__9357__delegate.call(this, x, y, more);
});
return G__9357;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9353.call(this,x);
case  2 :
return max__9354.call(this,x,y);
default:
return max__9355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9355.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9368 = (function (x){
return x;
});
var min__9369 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9370 = (function() { 
var G__9372__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9372 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9372__delegate.call(this, x, y, more);
};
G__9372.cljs$lang$maxFixedArity = 2;
G__9372.cljs$lang$applyTo = (function (arglist__9373){
var x = cljs.core.first(arglist__9373);
var y = cljs.core.first(cljs.core.next(arglist__9373));
var more = cljs.core.rest(cljs.core.next(arglist__9373));
return G__9372__delegate.call(this, x, y, more);
});
return G__9372;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9368.call(this,x);
case  2 :
return min__9369.call(this,x,y);
default:
return min__9370.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9370.cljs$lang$applyTo;
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
var rem__9391 = (n % d);

return cljs.core.fix.call(null,((n - rem__9391) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9397 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9397));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9411 = (function (){
return Math.random.call(null);
});
var rand__9412 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9411.call(this);
case  1 :
return rand__9412.call(this,n);
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
var _EQ__EQ___9479 = (function (x){
return true;
});
var _EQ__EQ___9480 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9481 = (function() { 
var G__9483__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9485 = y;
var G__9486 = cljs.core.first.call(null,more);
var G__9487 = cljs.core.next.call(null,more);
x = G__9485;
y = G__9486;
more = G__9487;
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
var G__9483 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9483__delegate.call(this, x, y, more);
};
G__9483.cljs$lang$maxFixedArity = 2;
G__9483.cljs$lang$applyTo = (function (arglist__9488){
var x = cljs.core.first(arglist__9488);
var y = cljs.core.first(cljs.core.next(arglist__9488));
var more = cljs.core.rest(cljs.core.next(arglist__9488));
return G__9483__delegate.call(this, x, y, more);
});
return G__9483;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9479.call(this,x);
case  2 :
return _EQ__EQ___9480.call(this,x,y);
default:
return _EQ__EQ___9481.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9481.cljs$lang$applyTo;
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
var n__9494 = n;
var xs__9495 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9497 = xs__9495;

if(cljs.core.truth_(and__3546__auto____9497))
{return (n__9494 > 0);
} else
{return and__3546__auto____9497;
}
})()))
{{
var G__9498 = (n__9494 - 1);
var G__9499 = cljs.core.next.call(null,xs__9495);
n__9494 = G__9498;
xs__9495 = G__9499;
continue;
}
} else
{return xs__9495;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9507 = null;
var G__9507__9508 = (function (coll,n){
var temp__3695__auto____9503 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9503))
{var xs__9504 = temp__3695__auto____9503;

return cljs.core.first.call(null,xs__9504);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9507__9509 = (function (coll,n,not_found){
var temp__3695__auto____9505 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9505))
{var xs__9506 = temp__3695__auto____9505;

return cljs.core.first.call(null,xs__9506);
} else
{return not_found;
}
});
G__9507 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9507__9508.call(this,coll,n);
case  3 :
return G__9507__9509.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9507;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9511 = (function (){
return "";
});
var str_STAR___9512 = (function (x){
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
var str_STAR___9513 = (function() { 
var G__9515__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9516 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9517 = cljs.core.next.call(null,more);
sb = G__9516;
more = G__9517;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9515 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9515__delegate.call(this, x, ys);
};
G__9515.cljs$lang$maxFixedArity = 1;
G__9515.cljs$lang$applyTo = (function (arglist__9518){
var x = cljs.core.first(arglist__9518);
var ys = cljs.core.rest(arglist__9518);
return G__9515__delegate.call(this, x, ys);
});
return G__9515;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9511.call(this);
case  1 :
return str_STAR___9512.call(this,x);
default:
return str_STAR___9513.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9513.cljs$lang$applyTo;
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
var str__9572 = (function (){
return "";
});
var str__9573 = (function (x){
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
var str__9574 = (function() { 
var G__9586__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9586 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9586__delegate.call(this, x, ys);
};
G__9586.cljs$lang$maxFixedArity = 1;
G__9586.cljs$lang$applyTo = (function (arglist__9588){
var x = cljs.core.first(arglist__9588);
var ys = cljs.core.rest(arglist__9588);
return G__9586__delegate.call(this, x, ys);
});
return G__9586;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9572.call(this);
case  1 :
return str__9573.call(this,x);
default:
return str__9574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9574.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9592 = (function (s,start){
return s.substring(start);
});
var subs__9593 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9592.call(this,s,start);
case  3 :
return subs__9593.call(this,s,start,end);
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
var symbol__9671 = (function (name){
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
var symbol__9672 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9671.call(this,ns);
case  2 :
return symbol__9672.call(this,ns,name);
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
var keyword__9680 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9678.call(this,ns);
case  2 :
return keyword__9680.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9690 = cljs.core.seq.call(null,x);
var ys__9691 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9690)))
{return cljs.core.nil_QMARK_.call(null,ys__9691);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9691)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9690),cljs.core.first.call(null,ys__9691))))
{{
var G__9695 = cljs.core.next.call(null,xs__9690);
var G__9696 = cljs.core.next.call(null,ys__9691);
xs__9690 = G__9695;
ys__9691 = G__9696;
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
return cljs.core.reduce.call(null,(function (p1__9743_SHARP_,p2__9744_SHARP_){
return cljs.core.hash_combine.call(null,p1__9743_SHARP_,cljs.core.hash.call(null,p2__9744_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9747__9750 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9747__9750))
{var G__9753__9758 = cljs.core.first.call(null,G__9747__9750);
var vec__9756__9760 = G__9753__9758;
var key_name__9762 = cljs.core.nth.call(null,vec__9756__9760,0,null);
var f__9765 = cljs.core.nth.call(null,vec__9756__9760,1,null);
var G__9747__9766 = G__9747__9750;

var G__9753__9768 = G__9753__9758;
var G__9747__9770 = G__9747__9766;

while(true){
var vec__9880__9882 = G__9753__9768;
var key_name__9883 = cljs.core.nth.call(null,vec__9880__9882,0,null);
var f__9884 = cljs.core.nth.call(null,vec__9880__9882,1,null);
var G__9747__9886 = G__9747__9770;

var str_name__9887 = cljs.core.name.call(null,key_name__9883);

obj[str_name__9887] = f__9884;
var temp__3698__auto____9888 = cljs.core.next.call(null,G__9747__9886);

if(cljs.core.truth_(temp__3698__auto____9888))
{var G__9747__9889 = temp__3698__auto____9888;

{
var G__9890 = cljs.core.first.call(null,G__9747__9889);
var G__9891 = G__9747__9889;
G__9753__9768 = G__9890;
G__9747__9770 = G__9891;
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
var this__9937 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9938 = this;
return (new cljs.core.List(this__9938.meta,o,coll,(this__9938.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9939 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9940 = this;
return this__9940.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9941 = this;
return this__9941.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9942 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9943 = this;
return this__9943.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9944 = this;
return this__9944.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9945 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9946 = this;
return (new cljs.core.List(meta,this__9946.first,this__9946.rest,this__9946.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9947 = this;
return this__9947.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9948 = this;
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
var this__9972 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9973 = this;
return (new cljs.core.List(this__9973.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9974 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9975 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9977 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9978 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9979 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9980 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9981 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9982 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9983 = this;
return this__9983.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9984 = this;
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
list.cljs$lang$applyTo = (function (arglist__10008){
var items = cljs.core.seq( arglist__10008 );;
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
var this__10010 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10011 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10012 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10013 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10013.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10014 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10020 = this;
return this__10020.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10021 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10021.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10021.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10023 = this;
return this__10023.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10027 = this;
return (new cljs.core.Cons(meta,this__10027.first,this__10027.rest));
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
var G__10040 = null;
var G__10040__10041 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10040__10042 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10040 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10040__10041.call(this,string,f);
case  3 :
return G__10040__10042.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10040;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10044 = null;
var G__10044__10045 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10044__10046 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10044 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10044__10045.call(this,string,k);
case  3 :
return G__10044__10046.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10044;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10052 = null;
var G__10052__10053 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10052__10054 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10052 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10052__10053.call(this,string,n);
case  3 :
return G__10052__10054.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10052;
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
var G__10073 = null;
var G__10073__10074 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10073__10075 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10073 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10073__10074.call(this,this$,coll);
case  3 :
return G__10073__10075.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10073;
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
var x__10078 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10078;
} else
{lazy_seq.x = x__10078.call(null);
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
var this__10084 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10086 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10090 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10091 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10091.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10096 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10097 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10098 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10099 = this;
return this__10099.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10100 = this;
return (new cljs.core.LazySeq(meta,this__10100.realized,this__10100.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10106 = cljs.core.array.call(null);

var s__10107 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10107)))
{ary__10106.push(cljs.core.first.call(null,s__10107));
{
var G__10110 = cljs.core.next.call(null,s__10107);
s__10107 = G__10110;
continue;
}
} else
{return ary__10106;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10113 = s;
var i__10114 = n;
var sum__10115 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10117 = (i__10114 > 0);

if(cljs.core.truth_(and__3546__auto____10117))
{return cljs.core.seq.call(null,s__10113);
} else
{return and__3546__auto____10117;
}
})()))
{{
var G__10121 = cljs.core.next.call(null,s__10113);
var G__10122 = (i__10114 - 1);
var G__10123 = (sum__10115 + 1);
s__10113 = G__10121;
i__10114 = G__10122;
sum__10115 = G__10123;
continue;
}
} else
{return sum__10115;
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
var concat__10138 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10139 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10140 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10131 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10131))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10131),concat.call(null,cljs.core.rest.call(null,s__10131),y));
} else
{return y;
}
})));
});
var concat__10141 = (function() { 
var G__10148__delegate = function (x,y,zs){
var cat__10137 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10136 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10136))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10136),cat.call(null,cljs.core.rest.call(null,xys__10136),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10137.call(null,concat.call(null,x,y),zs);
};
var G__10148 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10148__delegate.call(this, x, y, zs);
};
G__10148.cljs$lang$maxFixedArity = 2;
G__10148.cljs$lang$applyTo = (function (arglist__10149){
var x = cljs.core.first(arglist__10149);
var y = cljs.core.first(cljs.core.next(arglist__10149));
var zs = cljs.core.rest(cljs.core.next(arglist__10149));
return G__10148__delegate.call(this, x, y, zs);
});
return G__10148;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10138.call(this);
case  1 :
return concat__10139.call(this,x);
case  2 :
return concat__10140.call(this,x,y);
default:
return concat__10141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10141.cljs$lang$applyTo;
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
var list_STAR___10166 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10167 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10168 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10169 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10170 = (function() { 
var G__10176__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10176 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10176__delegate.call(this, a, b, c, d, more);
};
G__10176.cljs$lang$maxFixedArity = 4;
G__10176.cljs$lang$applyTo = (function (arglist__10178){
var a = cljs.core.first(arglist__10178);
var b = cljs.core.first(cljs.core.next(arglist__10178));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10178)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10178))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10178))));
return G__10176__delegate.call(this, a, b, c, d, more);
});
return G__10176;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10166.call(this,a);
case  2 :
return list_STAR___10167.call(this,a,b);
case  3 :
return list_STAR___10168.call(this,a,b,c);
case  4 :
return list_STAR___10169.call(this,a,b,c,d);
default:
return list_STAR___10170.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10170.cljs$lang$applyTo;
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
var apply__10229 = (function (f,args){
var fixed_arity__10183 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10183 + 1)) <= fixed_arity__10183)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10230 = (function (f,x,args){
var arglist__10194 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10195 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10194,fixed_arity__10195) <= fixed_arity__10195)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10194));
} else
{return f.cljs$lang$applyTo(arglist__10194);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10194));
}
});
var apply__10231 = (function (f,x,y,args){
var arglist__10201 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10202 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10201,fixed_arity__10202) <= fixed_arity__10202)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10201));
} else
{return f.cljs$lang$applyTo(arglist__10201);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10201));
}
});
var apply__10232 = (function (f,x,y,z,args){
var arglist__10204 = cljs.core.list_STAR_.call(null,x,y,z,args);
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
var apply__10233 = (function() { 
var G__10277__delegate = function (f,a,b,c,d,args){
var arglist__10212 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10214 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10212,fixed_arity__10214) <= fixed_arity__10214)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10212));
} else
{return f.cljs$lang$applyTo(arglist__10212);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10212));
}
};
var G__10277 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10277__delegate.call(this, f, a, b, c, d, args);
};
G__10277.cljs$lang$maxFixedArity = 5;
G__10277.cljs$lang$applyTo = (function (arglist__10281){
var f = cljs.core.first(arglist__10281);
var a = cljs.core.first(cljs.core.next(arglist__10281));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10281)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10281))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10281)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10281)))));
return G__10277__delegate.call(this, f, a, b, c, d, args);
});
return G__10277;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10229.call(this,f,a);
case  3 :
return apply__10230.call(this,f,a,b);
case  4 :
return apply__10231.call(this,f,a,b,c);
case  5 :
return apply__10232.call(this,f,a,b,c,d);
default:
return apply__10233.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10233.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10286){
var obj = cljs.core.first(arglist__10286);
var f = cljs.core.first(cljs.core.next(arglist__10286));
var args = cljs.core.rest(cljs.core.next(arglist__10286));
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
var not_EQ___10296 = (function (x){
return false;
});
var not_EQ___10297 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10298 = (function() { 
var G__10300__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10300 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10300__delegate.call(this, x, y, more);
};
G__10300.cljs$lang$maxFixedArity = 2;
G__10300.cljs$lang$applyTo = (function (arglist__10302){
var x = cljs.core.first(arglist__10302);
var y = cljs.core.first(cljs.core.next(arglist__10302));
var more = cljs.core.rest(cljs.core.next(arglist__10302));
return G__10300__delegate.call(this, x, y, more);
});
return G__10300;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10296.call(this,x);
case  2 :
return not_EQ___10297.call(this,x,y);
default:
return not_EQ___10298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10298.cljs$lang$applyTo;
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
var G__10319 = pred;
var G__10320 = cljs.core.next.call(null,coll);
pred = G__10319;
coll = G__10320;
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
{var or__3548__auto____10389 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10389))
{return or__3548__auto____10389;
} else
{{
var G__10392 = pred;
var G__10393 = cljs.core.next.call(null,coll);
pred = G__10392;
coll = G__10393;
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
var G__10412 = null;
var G__10412__10413 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10412__10414 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10412__10415 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10412__10417 = (function() { 
var G__10420__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10420 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10420__delegate.call(this, x, y, zs);
};
G__10420.cljs$lang$maxFixedArity = 2;
G__10420.cljs$lang$applyTo = (function (arglist__10421){
var x = cljs.core.first(arglist__10421);
var y = cljs.core.first(cljs.core.next(arglist__10421));
var zs = cljs.core.rest(cljs.core.next(arglist__10421));
return G__10420__delegate.call(this, x, y, zs);
});
return G__10420;
})()
;
G__10412 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10412__10413.call(this);
case  1 :
return G__10412__10414.call(this,x);
case  2 :
return G__10412__10415.call(this,x,y);
default:
return G__10412__10417.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10412.cljs$lang$maxFixedArity = 2;
G__10412.cljs$lang$applyTo = G__10412__10417.cljs$lang$applyTo;
return G__10412;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10425__delegate = function (args){
return x;
};
var G__10425 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10425__delegate.call(this, args);
};
G__10425.cljs$lang$maxFixedArity = 0;
G__10425.cljs$lang$applyTo = (function (arglist__10426){
var args = cljs.core.seq( arglist__10426 );;
return G__10425__delegate.call(this, args);
});
return G__10425;
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
var comp__10452 = (function (){
return cljs.core.identity;
});
var comp__10453 = (function (f){
return f;
});
var comp__10454 = (function (f,g){
return (function() {
var G__10465 = null;
var G__10465__10467 = (function (){
return f.call(null,g.call(null));
});
var G__10465__10468 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10465__10469 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10465__10470 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10465__10471 = (function() { 
var G__10475__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10475 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10475__delegate.call(this, x, y, z, args);
};
G__10475.cljs$lang$maxFixedArity = 3;
G__10475.cljs$lang$applyTo = (function (arglist__10476){
var x = cljs.core.first(arglist__10476);
var y = cljs.core.first(cljs.core.next(arglist__10476));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10476)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10476)));
return G__10475__delegate.call(this, x, y, z, args);
});
return G__10475;
})()
;
G__10465 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10465__10467.call(this);
case  1 :
return G__10465__10468.call(this,x);
case  2 :
return G__10465__10469.call(this,x,y);
case  3 :
return G__10465__10470.call(this,x,y,z);
default:
return G__10465__10471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10465.cljs$lang$maxFixedArity = 3;
G__10465.cljs$lang$applyTo = G__10465__10471.cljs$lang$applyTo;
return G__10465;
})()
});
var comp__10455 = (function (f,g,h){
return (function() {
var G__10477 = null;
var G__10477__10478 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10477__10479 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10477__10480 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10477__10481 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10477__10482 = (function() { 
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
G__10489.cljs$lang$applyTo = (function (arglist__10492){
var x = cljs.core.first(arglist__10492);
var y = cljs.core.first(cljs.core.next(arglist__10492));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10492)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10492)));
return G__10489__delegate.call(this, x, y, z, args);
});
return G__10489;
})()
;
G__10477 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10477__10478.call(this);
case  1 :
return G__10477__10479.call(this,x);
case  2 :
return G__10477__10480.call(this,x,y);
case  3 :
return G__10477__10481.call(this,x,y,z);
default:
return G__10477__10482.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10477.cljs$lang$maxFixedArity = 3;
G__10477.cljs$lang$applyTo = G__10477__10482.cljs$lang$applyTo;
return G__10477;
})()
});
var comp__10456 = (function() { 
var G__10500__delegate = function (f1,f2,f3,fs){
var fs__10445 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10508__delegate = function (args){
var ret__10449 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10445),args);
var fs__10450 = cljs.core.next.call(null,fs__10445);

while(true){
if(cljs.core.truth_(fs__10450))
{{
var G__10509 = cljs.core.first.call(null,fs__10450).call(null,ret__10449);
var G__10510 = cljs.core.next.call(null,fs__10450);
ret__10449 = G__10509;
fs__10450 = G__10510;
continue;
}
} else
{return ret__10449;
}
break;
}
};
var G__10508 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10508__delegate.call(this, args);
};
G__10508.cljs$lang$maxFixedArity = 0;
G__10508.cljs$lang$applyTo = (function (arglist__10512){
var args = cljs.core.seq( arglist__10512 );;
return G__10508__delegate.call(this, args);
});
return G__10508;
})()
;
};
var G__10500 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10500__delegate.call(this, f1, f2, f3, fs);
};
G__10500.cljs$lang$maxFixedArity = 3;
G__10500.cljs$lang$applyTo = (function (arglist__10513){
var f1 = cljs.core.first(arglist__10513);
var f2 = cljs.core.first(cljs.core.next(arglist__10513));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10513)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10513)));
return G__10500__delegate.call(this, f1, f2, f3, fs);
});
return G__10500;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10452.call(this);
case  1 :
return comp__10453.call(this,f1);
case  2 :
return comp__10454.call(this,f1,f2);
case  3 :
return comp__10455.call(this,f1,f2,f3);
default:
return comp__10456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10456.cljs$lang$applyTo;
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
var partial__10538 = (function (f,arg1){
return (function() { 
var G__10544__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10544 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10544__delegate.call(this, args);
};
G__10544.cljs$lang$maxFixedArity = 0;
G__10544.cljs$lang$applyTo = (function (arglist__10546){
var args = cljs.core.seq( arglist__10546 );;
return G__10544__delegate.call(this, args);
});
return G__10544;
})()
;
});
var partial__10539 = (function (f,arg1,arg2){
return (function() { 
var G__10548__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10548 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10548__delegate.call(this, args);
};
G__10548.cljs$lang$maxFixedArity = 0;
G__10548.cljs$lang$applyTo = (function (arglist__10557){
var args = cljs.core.seq( arglist__10557 );;
return G__10548__delegate.call(this, args);
});
return G__10548;
})()
;
});
var partial__10540 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10558__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10558 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10558__delegate.call(this, args);
};
G__10558.cljs$lang$maxFixedArity = 0;
G__10558.cljs$lang$applyTo = (function (arglist__10561){
var args = cljs.core.seq( arglist__10561 );;
return G__10558__delegate.call(this, args);
});
return G__10558;
})()
;
});
var partial__10541 = (function() { 
var G__10563__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10564__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10564 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10564__delegate.call(this, args);
};
G__10564.cljs$lang$maxFixedArity = 0;
G__10564.cljs$lang$applyTo = (function (arglist__10566){
var args = cljs.core.seq( arglist__10566 );;
return G__10564__delegate.call(this, args);
});
return G__10564;
})()
;
};
var G__10563 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10563__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10563.cljs$lang$maxFixedArity = 4;
G__10563.cljs$lang$applyTo = (function (arglist__10567){
var f = cljs.core.first(arglist__10567);
var arg1 = cljs.core.first(cljs.core.next(arglist__10567));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10567)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10567))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10567))));
return G__10563__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10563;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10538.call(this,f,arg1);
case  3 :
return partial__10539.call(this,f,arg1,arg2);
case  4 :
return partial__10540.call(this,f,arg1,arg2,arg3);
default:
return partial__10541.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10541.cljs$lang$applyTo;
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
var fnil__10598 = (function (f,x){
return (function() {
var G__10602 = null;
var G__10602__10603 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10602__10604 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10602__10605 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10602__10606 = (function() { 
var G__10608__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10608 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10608__delegate.call(this, a, b, c, ds);
};
G__10608.cljs$lang$maxFixedArity = 3;
G__10608.cljs$lang$applyTo = (function (arglist__10609){
var a = cljs.core.first(arglist__10609);
var b = cljs.core.first(cljs.core.next(arglist__10609));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10609)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10609)));
return G__10608__delegate.call(this, a, b, c, ds);
});
return G__10608;
})()
;
G__10602 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10602__10603.call(this,a);
case  2 :
return G__10602__10604.call(this,a,b);
case  3 :
return G__10602__10605.call(this,a,b,c);
default:
return G__10602__10606.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10602.cljs$lang$maxFixedArity = 3;
G__10602.cljs$lang$applyTo = G__10602__10606.cljs$lang$applyTo;
return G__10602;
})()
});
var fnil__10599 = (function (f,x,y){
return (function() {
var G__10615 = null;
var G__10615__10617 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10615__10618 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10615__10619 = (function() { 
var G__10624__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10624 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10624__delegate.call(this, a, b, c, ds);
};
G__10624.cljs$lang$maxFixedArity = 3;
G__10624.cljs$lang$applyTo = (function (arglist__10627){
var a = cljs.core.first(arglist__10627);
var b = cljs.core.first(cljs.core.next(arglist__10627));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10627)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10627)));
return G__10624__delegate.call(this, a, b, c, ds);
});
return G__10624;
})()
;
G__10615 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10615__10617.call(this,a,b);
case  3 :
return G__10615__10618.call(this,a,b,c);
default:
return G__10615__10619.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10615.cljs$lang$maxFixedArity = 3;
G__10615.cljs$lang$applyTo = G__10615__10619.cljs$lang$applyTo;
return G__10615;
})()
});
var fnil__10600 = (function (f,x,y,z){
return (function() {
var G__10631 = null;
var G__10631__10632 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10631__10634 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10631__10635 = (function() { 
var G__10639__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10639 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10639__delegate.call(this, a, b, c, ds);
};
G__10639.cljs$lang$maxFixedArity = 3;
G__10639.cljs$lang$applyTo = (function (arglist__10640){
var a = cljs.core.first(arglist__10640);
var b = cljs.core.first(cljs.core.next(arglist__10640));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10640)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10640)));
return G__10639__delegate.call(this, a, b, c, ds);
});
return G__10639;
})()
;
G__10631 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10631__10632.call(this,a,b);
case  3 :
return G__10631__10634.call(this,a,b,c);
default:
return G__10631__10635.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10631.cljs$lang$maxFixedArity = 3;
G__10631.cljs$lang$applyTo = G__10631__10635.cljs$lang$applyTo;
return G__10631;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10598.call(this,f,x);
case  3 :
return fnil__10599.call(this,f,x,y);
case  4 :
return fnil__10600.call(this,f,x,y,z);
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
var mapi__10647 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10641 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10641))
{var s__10642 = temp__3698__auto____10641;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10642)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10642)));
} else
{return null;
}
})));
});

return mapi__10647.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10649 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10649))
{var s__10654 = temp__3698__auto____10649;

var x__10655 = f.call(null,cljs.core.first.call(null,s__10654));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10655)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10654));
} else
{return cljs.core.cons.call(null,x__10655,keep.call(null,f,cljs.core.rest.call(null,s__10654)));
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
var keepi__10677 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10665 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10665))
{var s__10666 = temp__3698__auto____10665;

var x__10670 = f.call(null,idx,cljs.core.first.call(null,s__10666));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10670)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10666));
} else
{return cljs.core.cons.call(null,x__10670,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10666)));
}
} else
{return null;
}
})));
});

return keepi__10677.call(null,0,coll);
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
var every_pred__10971 = (function (p){
return (function() {
var ep1 = null;
var ep1__10986 = (function (){
return true;
});
var ep1__10987 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__10990 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10708 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10708))
{return p.call(null,y);
} else
{return and__3546__auto____10708;
}
})());
});
var ep1__10991 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10709 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____10709))
{var and__3546__auto____10710 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____10710))
{return p.call(null,z);
} else
{return and__3546__auto____10710;
}
} else
{return and__3546__auto____10709;
}
})());
});
var ep1__10992 = (function() { 
var G__11004__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10712 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10712))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____10712;
}
})());
};
var G__11004 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11004__delegate.call(this, x, y, z, args);
};
G__11004.cljs$lang$maxFixedArity = 3;
G__11004.cljs$lang$applyTo = (function (arglist__11012){
var x = cljs.core.first(arglist__11012);
var y = cljs.core.first(cljs.core.next(arglist__11012));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11012)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11012)));
return G__11004__delegate.call(this, x, y, z, args);
});
return G__11004;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__10986.call(this);
case  1 :
return ep1__10987.call(this,x);
case  2 :
return ep1__10990.call(this,x,y);
case  3 :
return ep1__10991.call(this,x,y,z);
default:
return ep1__10992.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__10992.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__10972 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11025 = (function (){
return true;
});
var ep2__11026 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10713 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10713))
{return p2.call(null,x);
} else
{return and__3546__auto____10713;
}
})());
});
var ep2__11027 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10716 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10716))
{var and__3546__auto____10717 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10717))
{var and__3546__auto____10719 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10719))
{return p2.call(null,y);
} else
{return and__3546__auto____10719;
}
} else
{return and__3546__auto____10717;
}
} else
{return and__3546__auto____10716;
}
})());
});
var ep2__11028 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10720 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10720))
{var and__3546__auto____10721 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10721))
{var and__3546__auto____10722 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10722))
{var and__3546__auto____10723 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10723))
{var and__3546__auto____10724 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10724))
{return p2.call(null,z);
} else
{return and__3546__auto____10724;
}
} else
{return and__3546__auto____10723;
}
} else
{return and__3546__auto____10722;
}
} else
{return and__3546__auto____10721;
}
} else
{return and__3546__auto____10720;
}
})());
});
var ep2__11029 = (function() { 
var G__11048__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10725 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10725))
{return cljs.core.every_QMARK_.call(null,(function (p1__10657_SHARP_){
var and__3546__auto____10726 = p1.call(null,p1__10657_SHARP_);

if(cljs.core.truth_(and__3546__auto____10726))
{return p2.call(null,p1__10657_SHARP_);
} else
{return and__3546__auto____10726;
}
}),args);
} else
{return and__3546__auto____10725;
}
})());
};
var G__11048 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11048__delegate.call(this, x, y, z, args);
};
G__11048.cljs$lang$maxFixedArity = 3;
G__11048.cljs$lang$applyTo = (function (arglist__11053){
var x = cljs.core.first(arglist__11053);
var y = cljs.core.first(cljs.core.next(arglist__11053));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11053)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11053)));
return G__11048__delegate.call(this, x, y, z, args);
});
return G__11048;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11025.call(this);
case  1 :
return ep2__11026.call(this,x);
case  2 :
return ep2__11027.call(this,x,y);
case  3 :
return ep2__11028.call(this,x,y,z);
default:
return ep2__11029.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11029.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__10973 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11064 = (function (){
return true;
});
var ep3__11067 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10727 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10727))
{var and__3546__auto____10728 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10728))
{return p3.call(null,x);
} else
{return and__3546__auto____10728;
}
} else
{return and__3546__auto____10727;
}
})());
});
var ep3__11068 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10732 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10732))
{var and__3546__auto____10733 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10733))
{var and__3546__auto____10734 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10734))
{var and__3546__auto____10735 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10735))
{var and__3546__auto____10736 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10736))
{return p3.call(null,y);
} else
{return and__3546__auto____10736;
}
} else
{return and__3546__auto____10735;
}
} else
{return and__3546__auto____10734;
}
} else
{return and__3546__auto____10733;
}
} else
{return and__3546__auto____10732;
}
})());
});
var ep3__11069 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10743 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____10743))
{var and__3546__auto____10748 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____10748))
{var and__3546__auto____10751 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____10751))
{var and__3546__auto____10753 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____10753))
{var and__3546__auto____10756 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____10756))
{var and__3546__auto____10940 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____10940))
{var and__3546__auto____10942 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____10942))
{var and__3546__auto____10946 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____10946))
{return p3.call(null,z);
} else
{return and__3546__auto____10946;
}
} else
{return and__3546__auto____10942;
}
} else
{return and__3546__auto____10940;
}
} else
{return and__3546__auto____10756;
}
} else
{return and__3546__auto____10753;
}
} else
{return and__3546__auto____10751;
}
} else
{return and__3546__auto____10748;
}
} else
{return and__3546__auto____10743;
}
})());
});
var ep3__11070 = (function() { 
var G__11087__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10948 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10948))
{return cljs.core.every_QMARK_.call(null,(function (p1__10660_SHARP_){
var and__3546__auto____10950 = p1.call(null,p1__10660_SHARP_);

if(cljs.core.truth_(and__3546__auto____10950))
{var and__3546__auto____10951 = p2.call(null,p1__10660_SHARP_);

if(cljs.core.truth_(and__3546__auto____10951))
{return p3.call(null,p1__10660_SHARP_);
} else
{return and__3546__auto____10951;
}
} else
{return and__3546__auto____10950;
}
}),args);
} else
{return and__3546__auto____10948;
}
})());
};
var G__11087 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11087__delegate.call(this, x, y, z, args);
};
G__11087.cljs$lang$maxFixedArity = 3;
G__11087.cljs$lang$applyTo = (function (arglist__11093){
var x = cljs.core.first(arglist__11093);
var y = cljs.core.first(cljs.core.next(arglist__11093));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11093)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11093)));
return G__11087__delegate.call(this, x, y, z, args);
});
return G__11087;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11064.call(this);
case  1 :
return ep3__11067.call(this,x);
case  2 :
return ep3__11068.call(this,x,y);
case  3 :
return ep3__11069.call(this,x,y,z);
default:
return ep3__11070.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11070.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__10974 = (function() { 
var G__11096__delegate = function (p1,p2,p3,ps){
var ps__10952 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11098 = (function (){
return true;
});
var epn__11099 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10661_SHARP_){
return p1__10661_SHARP_.call(null,x);
}),ps__10952);
});
var epn__11100 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10662_SHARP_){
var and__3546__auto____10965 = p1__10662_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10965))
{return p1__10662_SHARP_.call(null,y);
} else
{return and__3546__auto____10965;
}
}),ps__10952);
});
var epn__11101 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10663_SHARP_){
var and__3546__auto____10966 = p1__10663_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____10966))
{var and__3546__auto____10967 = p1__10663_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____10967))
{return p1__10663_SHARP_.call(null,z);
} else
{return and__3546__auto____10967;
}
} else
{return and__3546__auto____10966;
}
}),ps__10952);
});
var epn__11103 = (function() { 
var G__11143__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____10969 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____10969))
{return cljs.core.every_QMARK_.call(null,(function (p1__10664_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10664_SHARP_,args);
}),ps__10952);
} else
{return and__3546__auto____10969;
}
})());
};
var G__11143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11143__delegate.call(this, x, y, z, args);
};
G__11143.cljs$lang$maxFixedArity = 3;
G__11143.cljs$lang$applyTo = (function (arglist__11144){
var x = cljs.core.first(arglist__11144);
var y = cljs.core.first(cljs.core.next(arglist__11144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11144)));
return G__11143__delegate.call(this, x, y, z, args);
});
return G__11143;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11098.call(this);
case  1 :
return epn__11099.call(this,x);
case  2 :
return epn__11100.call(this,x,y);
case  3 :
return epn__11101.call(this,x,y,z);
default:
return epn__11103.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11103.cljs$lang$applyTo;
return epn;
})()
};
var G__11096 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11096__delegate.call(this, p1, p2, p3, ps);
};
G__11096.cljs$lang$maxFixedArity = 3;
G__11096.cljs$lang$applyTo = (function (arglist__11172){
var p1 = cljs.core.first(arglist__11172);
var p2 = cljs.core.first(cljs.core.next(arglist__11172));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11172)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11172)));
return G__11096__delegate.call(this, p1, p2, p3, ps);
});
return G__11096;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__10971.call(this,p1);
case  2 :
return every_pred__10972.call(this,p1,p2);
case  3 :
return every_pred__10973.call(this,p1,p2,p3);
default:
return every_pred__10974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__10974.cljs$lang$applyTo;
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
var some_fn__11396 = (function (p){
return (function() {
var sp1 = null;
var sp1__11403 = (function (){
return null;
});
var sp1__11404 = (function (x){
return p.call(null,x);
});
var sp1__11405 = (function (x,y){
var or__3548__auto____11181 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11181))
{return or__3548__auto____11181;
} else
{return p.call(null,y);
}
});
var sp1__11406 = (function (x,y,z){
var or__3548__auto____11182 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11182))
{return or__3548__auto____11182;
} else
{var or__3548__auto____11183 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11183))
{return or__3548__auto____11183;
} else
{return p.call(null,z);
}
}
});
var sp1__11407 = (function() { 
var G__11417__delegate = function (x,y,z,args){
var or__3548__auto____11185 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11185))
{return or__3548__auto____11185;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11417 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11417__delegate.call(this, x, y, z, args);
};
G__11417.cljs$lang$maxFixedArity = 3;
G__11417.cljs$lang$applyTo = (function (arglist__11422){
var x = cljs.core.first(arglist__11422);
var y = cljs.core.first(cljs.core.next(arglist__11422));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11422)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11422)));
return G__11417__delegate.call(this, x, y, z, args);
});
return G__11417;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11403.call(this);
case  1 :
return sp1__11404.call(this,x);
case  2 :
return sp1__11405.call(this,x,y);
case  3 :
return sp1__11406.call(this,x,y,z);
default:
return sp1__11407.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11407.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11397 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11432 = (function (){
return null;
});
var sp2__11434 = (function (x){
var or__3548__auto____11186 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11186))
{return or__3548__auto____11186;
} else
{return p2.call(null,x);
}
});
var sp2__11435 = (function (x,y){
var or__3548__auto____11188 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11188))
{return or__3548__auto____11188;
} else
{var or__3548__auto____11190 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11190))
{return or__3548__auto____11190;
} else
{var or__3548__auto____11192 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11192))
{return or__3548__auto____11192;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11436 = (function (x,y,z){
var or__3548__auto____11200 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11200))
{return or__3548__auto____11200;
} else
{var or__3548__auto____11201 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11201))
{return or__3548__auto____11201;
} else
{var or__3548__auto____11202 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11202))
{return or__3548__auto____11202;
} else
{var or__3548__auto____11203 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11203))
{return or__3548__auto____11203;
} else
{var or__3548__auto____11204 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11204))
{return or__3548__auto____11204;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11437 = (function() { 
var G__11552__delegate = function (x,y,z,args){
var or__3548__auto____11205 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11205))
{return or__3548__auto____11205;
} else
{return cljs.core.some.call(null,(function (p1__10696_SHARP_){
var or__3548__auto____11206 = p1.call(null,p1__10696_SHARP_);

if(cljs.core.truth_(or__3548__auto____11206))
{return or__3548__auto____11206;
} else
{return p2.call(null,p1__10696_SHARP_);
}
}),args);
}
};
var G__11552 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11552__delegate.call(this, x, y, z, args);
};
G__11552.cljs$lang$maxFixedArity = 3;
G__11552.cljs$lang$applyTo = (function (arglist__11560){
var x = cljs.core.first(arglist__11560);
var y = cljs.core.first(cljs.core.next(arglist__11560));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11560)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11560)));
return G__11552__delegate.call(this, x, y, z, args);
});
return G__11552;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11432.call(this);
case  1 :
return sp2__11434.call(this,x);
case  2 :
return sp2__11435.call(this,x,y);
case  3 :
return sp2__11436.call(this,x,y,z);
default:
return sp2__11437.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11437.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11399 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11567 = (function (){
return null;
});
var sp3__11568 = (function (x){
var or__3548__auto____11209 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11209))
{return or__3548__auto____11209;
} else
{var or__3548__auto____11213 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11213))
{return or__3548__auto____11213;
} else
{return p3.call(null,x);
}
}
});
var sp3__11569 = (function (x,y){
var or__3548__auto____11223 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11223))
{return or__3548__auto____11223;
} else
{var or__3548__auto____11224 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11224))
{return or__3548__auto____11224;
} else
{var or__3548__auto____11226 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11226))
{return or__3548__auto____11226;
} else
{var or__3548__auto____11227 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11227))
{return or__3548__auto____11227;
} else
{var or__3548__auto____11229 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11229))
{return or__3548__auto____11229;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11570 = (function (x,y,z){
var or__3548__auto____11236 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11236))
{return or__3548__auto____11236;
} else
{var or__3548__auto____11238 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11238))
{return or__3548__auto____11238;
} else
{var or__3548__auto____11240 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11240))
{return or__3548__auto____11240;
} else
{var or__3548__auto____11241 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11241))
{return or__3548__auto____11241;
} else
{var or__3548__auto____11244 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11244))
{return or__3548__auto____11244;
} else
{var or__3548__auto____11246 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11246))
{return or__3548__auto____11246;
} else
{var or__3548__auto____11253 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11253))
{return or__3548__auto____11253;
} else
{var or__3548__auto____11257 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11257))
{return or__3548__auto____11257;
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
var sp3__11571 = (function() { 
var G__11755__delegate = function (x,y,z,args){
var or__3548__auto____11261 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11261))
{return or__3548__auto____11261;
} else
{return cljs.core.some.call(null,(function (p1__10697_SHARP_){
var or__3548__auto____11264 = p1.call(null,p1__10697_SHARP_);

if(cljs.core.truth_(or__3548__auto____11264))
{return or__3548__auto____11264;
} else
{var or__3548__auto____11267 = p2.call(null,p1__10697_SHARP_);

if(cljs.core.truth_(or__3548__auto____11267))
{return or__3548__auto____11267;
} else
{return p3.call(null,p1__10697_SHARP_);
}
}
}),args);
}
};
var G__11755 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11755__delegate.call(this, x, y, z, args);
};
G__11755.cljs$lang$maxFixedArity = 3;
G__11755.cljs$lang$applyTo = (function (arglist__11756){
var x = cljs.core.first(arglist__11756);
var y = cljs.core.first(cljs.core.next(arglist__11756));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11756)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11756)));
return G__11755__delegate.call(this, x, y, z, args);
});
return G__11755;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11567.call(this);
case  1 :
return sp3__11568.call(this,x);
case  2 :
return sp3__11569.call(this,x,y);
case  3 :
return sp3__11570.call(this,x,y,z);
default:
return sp3__11571.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11571.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11400 = (function() { 
var G__11758__delegate = function (p1,p2,p3,ps){
var ps__11322 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11759 = (function (){
return null;
});
var spn__11760 = (function (x){
return cljs.core.some.call(null,(function (p1__10698_SHARP_){
return p1__10698_SHARP_.call(null,x);
}),ps__11322);
});
var spn__11761 = (function (x,y){
return cljs.core.some.call(null,(function (p1__10700_SHARP_){
var or__3548__auto____11334 = p1__10700_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11334))
{return or__3548__auto____11334;
} else
{return p1__10700_SHARP_.call(null,y);
}
}),ps__11322);
});
var spn__11762 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__10702_SHARP_){
var or__3548__auto____11346 = p1__10702_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11346))
{return or__3548__auto____11346;
} else
{var or__3548__auto____11378 = p1__10702_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11378))
{return or__3548__auto____11378;
} else
{return p1__10702_SHARP_.call(null,z);
}
}
}),ps__11322);
});
var spn__11763 = (function() { 
var G__11772__delegate = function (x,y,z,args){
var or__3548__auto____11382 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11382))
{return or__3548__auto____11382;
} else
{return cljs.core.some.call(null,(function (p1__10706_SHARP_){
return cljs.core.some.call(null,p1__10706_SHARP_,args);
}),ps__11322);
}
};
var G__11772 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11772__delegate.call(this, x, y, z, args);
};
G__11772.cljs$lang$maxFixedArity = 3;
G__11772.cljs$lang$applyTo = (function (arglist__11773){
var x = cljs.core.first(arglist__11773);
var y = cljs.core.first(cljs.core.next(arglist__11773));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11773)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11773)));
return G__11772__delegate.call(this, x, y, z, args);
});
return G__11772;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11759.call(this);
case  1 :
return spn__11760.call(this,x);
case  2 :
return spn__11761.call(this,x,y);
case  3 :
return spn__11762.call(this,x,y,z);
default:
return spn__11763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11763.cljs$lang$applyTo;
return spn;
})()
};
var G__11758 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11758__delegate.call(this, p1, p2, p3, ps);
};
G__11758.cljs$lang$maxFixedArity = 3;
G__11758.cljs$lang$applyTo = (function (arglist__11774){
var p1 = cljs.core.first(arglist__11774);
var p2 = cljs.core.first(cljs.core.next(arglist__11774));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11774)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11774)));
return G__11758__delegate.call(this, p1, p2, p3, ps);
});
return G__11758;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11396.call(this,p1);
case  2 :
return some_fn__11397.call(this,p1,p2);
case  3 :
return some_fn__11399.call(this,p1,p2,p3);
default:
return some_fn__11400.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11400.cljs$lang$applyTo;
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
var map__11873 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11814 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11814))
{var s__11816 = temp__3698__auto____11814;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11816)),map.call(null,f,cljs.core.rest.call(null,s__11816)));
} else
{return null;
}
})));
});
var map__11874 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11820 = cljs.core.seq.call(null,c1);
var s2__11821 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11822 = s1__11820;

if(cljs.core.truth_(and__3546__auto____11822))
{return s2__11821;
} else
{return and__3546__auto____11822;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11820),cljs.core.first.call(null,s2__11821)),map.call(null,f,cljs.core.rest.call(null,s1__11820),cljs.core.rest.call(null,s2__11821)));
} else
{return null;
}
})));
});
var map__11875 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11824 = cljs.core.seq.call(null,c1);
var s2__11825 = cljs.core.seq.call(null,c2);
var s3__11826 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11827 = s1__11824;

if(cljs.core.truth_(and__3546__auto____11827))
{var and__3546__auto____11828 = s2__11825;

if(cljs.core.truth_(and__3546__auto____11828))
{return s3__11826;
} else
{return and__3546__auto____11828;
}
} else
{return and__3546__auto____11827;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11824),cljs.core.first.call(null,s2__11825),cljs.core.first.call(null,s3__11826)),map.call(null,f,cljs.core.rest.call(null,s1__11824),cljs.core.rest.call(null,s2__11825),cljs.core.rest.call(null,s3__11826)));
} else
{return null;
}
})));
});
var map__11876 = (function() { 
var G__11889__delegate = function (f,c1,c2,c3,colls){
var step__11868 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11864 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11864)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11864),step.call(null,map.call(null,cljs.core.rest,ss__11864)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11179_SHARP_){
return cljs.core.apply.call(null,f,p1__11179_SHARP_);
}),step__11868.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11889 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11889__delegate.call(this, f, c1, c2, c3, colls);
};
G__11889.cljs$lang$maxFixedArity = 4;
G__11889.cljs$lang$applyTo = (function (arglist__11893){
var f = cljs.core.first(arglist__11893);
var c1 = cljs.core.first(cljs.core.next(arglist__11893));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11893)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11893))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11893))));
return G__11889__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11889;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11873.call(this,f,c1);
case  3 :
return map__11874.call(this,f,c1,c2);
case  4 :
return map__11875.call(this,f,c1,c2,c3);
default:
return map__11876.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11876.cljs$lang$applyTo;
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
{var temp__3698__auto____11901 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11901))
{var s__11903 = temp__3698__auto____11901;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11903),take.call(null,(n - 1),cljs.core.rest.call(null,s__11903)));
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
var step__11913 = (function (n,coll){
while(true){
var s__11911 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11912 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11912))
{return s__11911;
} else
{return and__3546__auto____11912;
}
})()))
{{
var G__11914 = (n - 1);
var G__11915 = cljs.core.rest.call(null,s__11911);
n = G__11914;
coll = G__11915;
continue;
}
} else
{return s__11911;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11913.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11919 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11922 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11919.call(this,n);
case  2 :
return drop_last__11922.call(this,n,s);
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
var s__11927 = cljs.core.seq.call(null,coll);
var lead__11928 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11928))
{{
var G__11936 = cljs.core.next.call(null,s__11927);
var G__11937 = cljs.core.next.call(null,lead__11928);
s__11927 = G__11936;
lead__11928 = G__11937;
continue;
}
} else
{return s__11927;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11940 = (function (pred,coll){
while(true){
var s__11938 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11939 = s__11938;

if(cljs.core.truth_(and__3546__auto____11939))
{return pred.call(null,cljs.core.first.call(null,s__11938));
} else
{return and__3546__auto____11939;
}
})()))
{{
var G__11944 = pred;
var G__11945 = cljs.core.rest.call(null,s__11938);
pred = G__11944;
coll = G__11945;
continue;
}
} else
{return s__11938;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11940.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11948 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11948))
{var s__11950 = temp__3698__auto____11948;

return cljs.core.concat.call(null,s__11950,cycle.call(null,s__11950));
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
var repeat__11956 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11957 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11956.call(this,n);
case  2 :
return repeat__11957.call(this,n,x);
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
var repeatedly__11964 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11965 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11964.call(this,n);
case  2 :
return repeatedly__11965.call(this,n,f);
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
var interleave__11990 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11975 = cljs.core.seq.call(null,c1);
var s2__11976 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11980 = s1__11975;

if(cljs.core.truth_(and__3546__auto____11980))
{return s2__11976;
} else
{return and__3546__auto____11980;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11975),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11976),interleave.call(null,cljs.core.rest.call(null,s1__11975),cljs.core.rest.call(null,s2__11976))));
} else
{return null;
}
})));
});
var interleave__11991 = (function() { 
var G__11996__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11983 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11983)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11983),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11983)));
} else
{return null;
}
})));
};
var G__11996 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11996__delegate.call(this, c1, c2, colls);
};
G__11996.cljs$lang$maxFixedArity = 2;
G__11996.cljs$lang$applyTo = (function (arglist__11998){
var c1 = cljs.core.first(arglist__11998);
var c2 = cljs.core.first(cljs.core.next(arglist__11998));
var colls = cljs.core.rest(cljs.core.next(arglist__11998));
return G__11996__delegate.call(this, c1, c2, colls);
});
return G__11996;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11990.call(this,c1,c2);
default:
return interleave__11991.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11991.cljs$lang$applyTo;
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
var cat__12007 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12005 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12005))
{var coll__12006 = temp__3695__auto____12005;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12006),cat.call(null,cljs.core.rest.call(null,coll__12006),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12007.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12018 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12019 = (function() { 
var G__12021__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12021 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12021__delegate.call(this, f, coll, colls);
};
G__12021.cljs$lang$maxFixedArity = 2;
G__12021.cljs$lang$applyTo = (function (arglist__12028){
var f = cljs.core.first(arglist__12028);
var coll = cljs.core.first(cljs.core.next(arglist__12028));
var colls = cljs.core.rest(cljs.core.next(arglist__12028));
return G__12021__delegate.call(this, f, coll, colls);
});
return G__12021;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12018.call(this,f,coll);
default:
return mapcat__12019.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12019.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12030 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12030))
{var s__12033 = temp__3698__auto____12030;

var f__12035 = cljs.core.first.call(null,s__12033);
var r__12046 = cljs.core.rest.call(null,s__12033);

if(cljs.core.truth_(pred.call(null,f__12035)))
{return cljs.core.cons.call(null,f__12035,filter.call(null,pred,r__12046));
} else
{return filter.call(null,pred,r__12046);
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
var walk__12056 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12056.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12055_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12055_SHARP_));
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
var partition__12089 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12090 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12077 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12077))
{var s__12078 = temp__3698__auto____12077;

var p__12082 = cljs.core.take.call(null,n,s__12078);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12082))))
{return cljs.core.cons.call(null,p__12082,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12078)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12091 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12083 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12083))
{var s__12084 = temp__3698__auto____12083;

var p__12085 = cljs.core.take.call(null,n,s__12084);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12085))))
{return cljs.core.cons.call(null,p__12085,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12084)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12085,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12089.call(this,n,step);
case  3 :
return partition__12090.call(this,n,step,pad);
case  4 :
return partition__12091.call(this,n,step,pad,coll);
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
var get_in__12112 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12113 = (function (m,ks,not_found){
var sentinel__12105 = cljs.core.lookup_sentinel;
var m__12106 = m;
var ks__12108 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12108))
{var m__12110 = cljs.core.get.call(null,m__12106,cljs.core.first.call(null,ks__12108),sentinel__12105);

if(cljs.core.truth_((sentinel__12105 === m__12110)))
{return not_found;
} else
{{
var G__12115 = sentinel__12105;
var G__12116 = m__12110;
var G__12117 = cljs.core.next.call(null,ks__12108);
sentinel__12105 = G__12115;
m__12106 = G__12116;
ks__12108 = G__12117;
continue;
}
}
} else
{return m__12106;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12112.call(this,m,ks);
case  3 :
return get_in__12113.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12120,v){
var vec__12121__12123 = p__12120;
var k__12124 = cljs.core.nth.call(null,vec__12121__12123,0,null);
var ks__12126 = cljs.core.nthnext.call(null,vec__12121__12123,1);

if(cljs.core.truth_(ks__12126))
{return cljs.core.assoc.call(null,m,k__12124,assoc_in.call(null,cljs.core.get.call(null,m,k__12124),ks__12126,v));
} else
{return cljs.core.assoc.call(null,m,k__12124,v);
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
var update_in__delegate = function (m,p__12132,f,args){
var vec__12133__12135 = p__12132;
var k__12139 = cljs.core.nth.call(null,vec__12133__12135,0,null);
var ks__12140 = cljs.core.nthnext.call(null,vec__12133__12135,1);

if(cljs.core.truth_(ks__12140))
{return cljs.core.assoc.call(null,m,k__12139,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12139),ks__12140,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12139,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12139),args));
}
};
var update_in = function (m,p__12132,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12132, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12152){
var m = cljs.core.first(arglist__12152);
var p__12132 = cljs.core.first(cljs.core.next(arglist__12152));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12152)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12152)));
return update_in__delegate.call(this, m, p__12132, f, args);
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
var this__12153 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12260 = null;
var G__12260__12262 = (function (coll,k){
var this__12154 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12260__12263 = (function (coll,k,not_found){
var this__12171 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12260 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12260__12262.call(this,coll,k);
case  3 :
return G__12260__12263.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12260;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12187 = this;
var new_array__12190 = cljs.core.aclone.call(null,this__12187.array);

(new_array__12190[k] = v);
return (new cljs.core.Vector(this__12187.meta,new_array__12190));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12267 = null;
var G__12267__12268 = (function (coll,k){
var this__12191 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12267__12269 = (function (coll,k,not_found){
var this__12194 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12267 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12267__12268.call(this,coll,k);
case  3 :
return G__12267__12269.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12267;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12197 = this;
var new_array__12198 = cljs.core.aclone.call(null,this__12197.array);

new_array__12198.push(o);
return (new cljs.core.Vector(this__12197.meta,new_array__12198));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12271 = null;
var G__12271__12272 = (function (v,f){
var this__12199 = this;
return cljs.core.ci_reduce.call(null,this__12199.array,f);
});
var G__12271__12273 = (function (v,f,start){
var this__12201 = this;
return cljs.core.ci_reduce.call(null,this__12201.array,f,start);
});
G__12271 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12271__12272.call(this,v,f);
case  3 :
return G__12271__12273.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12271;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12202 = this;
if(cljs.core.truth_((this__12202.array.length > 0)))
{var vector_seq__12203 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12202.array.length)))
{return cljs.core.cons.call(null,(this__12202.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12203.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12204 = this;
return this__12204.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12208 = this;
var count__12229 = this__12208.array.length;

if(cljs.core.truth_((count__12229 > 0)))
{return (this__12208.array[(count__12229 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12231 = this;
if(cljs.core.truth_((this__12231.array.length > 0)))
{var new_array__12234 = cljs.core.aclone.call(null,this__12231.array);

new_array__12234.pop();
return (new cljs.core.Vector(this__12231.meta,new_array__12234));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12236 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12237 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12238 = this;
return (new cljs.core.Vector(meta,this__12238.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12241 = this;
return this__12241.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12289 = null;
var G__12289__12290 = (function (coll,n){
var this__12243 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12247 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12247))
{return (n < this__12243.array.length);
} else
{return and__3546__auto____12247;
}
})()))
{return (this__12243.array[n]);
} else
{return null;
}
});
var G__12289__12291 = (function (coll,n,not_found){
var this__12252 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12253 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12253))
{return (n < this__12252.array.length);
} else
{return and__3546__auto____12253;
}
})()))
{return (this__12252.array[n]);
} else
{return not_found;
}
});
G__12289 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12289__12290.call(this,coll,n);
case  3 :
return G__12289__12291.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12289;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12255 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12255.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12301){
var args = cljs.core.seq( arglist__12301 );;
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
var this__12434 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12481 = null;
var G__12481__12482 = (function (coll,k){
var this__12439 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12481__12484 = (function (coll,k,not_found){
var this__12440 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12481 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12481__12482.call(this,coll,k);
case  3 :
return G__12481__12484.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12481;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12441 = this;
var v_pos__12442 = (this__12441.start + key);

return (new cljs.core.Subvec(this__12441.meta,cljs.core._assoc.call(null,this__12441.v,v_pos__12442,val),this__12441.start,((this__12441.end > (v_pos__12442 + 1)) ? this__12441.end : (v_pos__12442 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12491 = null;
var G__12491__12492 = (function (coll,k){
var this__12447 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12491__12493 = (function (coll,k,not_found){
var this__12448 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12491 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12491__12492.call(this,coll,k);
case  3 :
return G__12491__12493.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12491;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12449 = this;
return (new cljs.core.Subvec(this__12449.meta,cljs.core._assoc_n.call(null,this__12449.v,this__12449.end,o),this__12449.start,(this__12449.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12499 = null;
var G__12499__12500 = (function (coll,f){
var this__12454 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12499__12501 = (function (coll,f,start){
var this__12455 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12499 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12499__12500.call(this,coll,f);
case  3 :
return G__12499__12501.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12499;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12457 = this;
var subvec_seq__12458 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12457.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12457.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12458.call(null,this__12457.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12459 = this;
return (this__12459.end - this__12459.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12460 = this;
return cljs.core._nth.call(null,this__12460.v,(this__12460.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12461 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12461.start,this__12461.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12461.meta,this__12461.v,this__12461.start,(this__12461.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12462 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12468 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12470 = this;
return (new cljs.core.Subvec(meta,this__12470.v,this__12470.start,this__12470.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12472 = this;
return this__12472.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12523 = null;
var G__12523__12524 = (function (coll,n){
var this__12474 = this;
return cljs.core._nth.call(null,this__12474.v,(this__12474.start + n));
});
var G__12523__12525 = (function (coll,n,not_found){
var this__12476 = this;
return cljs.core._nth.call(null,this__12476.v,(this__12476.start + n),not_found);
});
G__12523 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12523__12524.call(this,coll,n);
case  3 :
return G__12523__12525.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12523;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12478 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12478.meta);
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
var subvec__12575 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12576 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12575.call(this,v,start);
case  3 :
return subvec__12576.call(this,v,start,end);
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
var this__12596 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12597 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12598 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12599 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12599.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12600 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12605 = this;
return cljs.core._first.call(null,this__12605.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12606 = this;
var temp__3695__auto____12607 = cljs.core.next.call(null,this__12606.front);

if(cljs.core.truth_(temp__3695__auto____12607))
{var f1__12608 = temp__3695__auto____12607;

return (new cljs.core.PersistentQueueSeq(this__12606.meta,f1__12608,this__12606.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12606.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12606.meta,this__12606.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12609 = this;
return this__12609.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12610 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12610.front,this__12610.rear));
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
var this__12616 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12617 = this;
if(cljs.core.truth_(this__12617.front))
{return (new cljs.core.PersistentQueue(this__12617.meta,(this__12617.count + 1),this__12617.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12618 = this__12617.rear;

if(cljs.core.truth_(or__3548__auto____12618))
{return or__3548__auto____12618;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12617.meta,(this__12617.count + 1),cljs.core.conj.call(null,this__12617.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12620 = this;
var rear__12621 = cljs.core.seq.call(null,this__12620.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12622 = this__12620.front;

if(cljs.core.truth_(or__3548__auto____12622))
{return or__3548__auto____12622;
} else
{return rear__12621;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12620.front,cljs.core.seq.call(null,rear__12621)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12623 = this;
return this__12623.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12624 = this;
return cljs.core._first.call(null,this__12624.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12625 = this;
if(cljs.core.truth_(this__12625.front))
{var temp__3695__auto____12626 = cljs.core.next.call(null,this__12625.front);

if(cljs.core.truth_(temp__3695__auto____12626))
{var f1__12627 = temp__3695__auto____12626;

return (new cljs.core.PersistentQueue(this__12625.meta,(this__12625.count - 1),f1__12627,this__12625.rear));
} else
{return (new cljs.core.PersistentQueue(this__12625.meta,(this__12625.count - 1),cljs.core.seq.call(null,this__12625.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12630 = this;
return cljs.core.first.call(null,this__12630.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12642 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12645 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12650 = this;
return (new cljs.core.PersistentQueue(meta,this__12650.count,this__12650.front,this__12650.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12652 = this;
return this__12652.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12654 = this;
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
var this__12678 = this;
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
var len__12699 = array.length;

var i__12705 = 0;

while(true){
if(cljs.core.truth_((i__12705 < len__12699)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12705]))))
{return i__12705;
} else
{{
var G__12707 = (i__12705 + incr);
i__12705 = G__12707;
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
var obj_map_contains_key_QMARK___12711 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12712 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12709 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12709))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12709;
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
return obj_map_contains_key_QMARK___12711.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12712.call(this,k,strobj,true_val,false_val);
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
var this__12746 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12826 = null;
var G__12826__12827 = (function (coll,k){
var this__12749 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12826__12828 = (function (coll,k,not_found){
var this__12764 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12764.strobj,(this__12764.strobj[k]),not_found);
});
G__12826 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12826__12827.call(this,coll,k);
case  3 :
return G__12826__12828.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12826;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12766 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12768 = goog.object.clone.call(null,this__12766.strobj);
var overwrite_QMARK___12770 = new_strobj__12768.hasOwnProperty(k);

(new_strobj__12768[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12770))
{return (new cljs.core.ObjMap(this__12766.meta,this__12766.keys,new_strobj__12768));
} else
{var new_keys__12772 = cljs.core.aclone.call(null,this__12766.keys);

new_keys__12772.push(k);
return (new cljs.core.ObjMap(this__12766.meta,new_keys__12772,new_strobj__12768));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12766.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12775 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12775.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12850 = null;
var G__12850__12852 = (function (coll,k){
var this__12778 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12850__12853 = (function (coll,k,not_found){
var this__12782 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12850 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12850__12852.call(this,coll,k);
case  3 :
return G__12850__12853.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12850;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12785 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12793 = this;
if(cljs.core.truth_((this__12793.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12721_SHARP_){
return cljs.core.vector.call(null,p1__12721_SHARP_,(this__12793.strobj[p1__12721_SHARP_]));
}),this__12793.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12798 = this;
return this__12798.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12800 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12803 = this;
return (new cljs.core.ObjMap(meta,this__12803.keys,this__12803.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12807 = this;
return this__12807.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12810 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12810.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12813 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12815 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12815))
{return this__12813.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12815;
}
})()))
{var new_keys__12816 = cljs.core.aclone.call(null,this__12813.keys);
var new_strobj__12818 = goog.object.clone.call(null,this__12813.strobj);

new_keys__12816.splice(cljs.core.scan_array.call(null,1,k,new_keys__12816),1);
cljs.core.js_delete.call(null,new_strobj__12818,k);
return (new cljs.core.ObjMap(this__12813.meta,new_keys__12816,new_strobj__12818));
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
var this__12889 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12959 = null;
var G__12959__12960 = (function (coll,k){
var this__12890 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12959__12961 = (function (coll,k,not_found){
var this__12891 = this;
var bucket__12893 = (this__12891.hashobj[cljs.core.hash.call(null,k)]);
var i__12896 = (cljs.core.truth_(bucket__12893)?cljs.core.scan_array.call(null,2,k,bucket__12893):null);

if(cljs.core.truth_(i__12896))
{return (bucket__12893[(i__12896 + 1)]);
} else
{return not_found;
}
});
G__12959 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12959__12960.call(this,coll,k);
case  3 :
return G__12959__12961.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12959;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12897 = this;
var h__12898 = cljs.core.hash.call(null,k);
var bucket__12899 = (this__12897.hashobj[h__12898]);

if(cljs.core.truth_(bucket__12899))
{var new_bucket__12902 = cljs.core.aclone.call(null,bucket__12899);
var new_hashobj__12903 = goog.object.clone.call(null,this__12897.hashobj);

(new_hashobj__12903[h__12898] = new_bucket__12902);
var temp__3695__auto____12904 = cljs.core.scan_array.call(null,2,k,new_bucket__12902);

if(cljs.core.truth_(temp__3695__auto____12904))
{var i__12906 = temp__3695__auto____12904;

(new_bucket__12902[(i__12906 + 1)] = v);
return (new cljs.core.HashMap(this__12897.meta,this__12897.count,new_hashobj__12903));
} else
{new_bucket__12902.push(k,v);
return (new cljs.core.HashMap(this__12897.meta,(this__12897.count + 1),new_hashobj__12903));
}
} else
{var new_hashobj__12913 = goog.object.clone.call(null,this__12897.hashobj);

(new_hashobj__12913[h__12898] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12897.meta,(this__12897.count + 1),new_hashobj__12913));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12914 = this;
var bucket__12915 = (this__12914.hashobj[cljs.core.hash.call(null,k)]);
var i__12918 = (cljs.core.truth_(bucket__12915)?cljs.core.scan_array.call(null,2,k,bucket__12915):null);

if(cljs.core.truth_(i__12918))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__12983 = null;
var G__12983__12984 = (function (coll,k){
var this__12919 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12983__12985 = (function (coll,k,not_found){
var this__12921 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12983 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12983__12984.call(this,coll,k);
case  3 :
return G__12983__12985.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12983;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12922 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12923 = this;
if(cljs.core.truth_((this__12923.count > 0)))
{var hashes__12929 = cljs.core.js_keys.call(null,this__12923.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12888_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12923.hashobj[p1__12888_SHARP_])));
}),hashes__12929);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12932 = this;
return this__12932.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12933 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12934 = this;
return (new cljs.core.HashMap(meta,this__12934.count,this__12934.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12937 = this;
return this__12937.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12938 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12938.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12940 = this;
var h__12942 = cljs.core.hash.call(null,k);
var bucket__12945 = (this__12940.hashobj[h__12942]);
var i__12948 = (cljs.core.truth_(bucket__12945)?cljs.core.scan_array.call(null,2,k,bucket__12945):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12948)))
{return coll;
} else
{var new_hashobj__12949 = goog.object.clone.call(null,this__12940.hashobj);

if(cljs.core.truth_((3 > bucket__12945.length)))
{cljs.core.js_delete.call(null,new_hashobj__12949,h__12942);
} else
{var new_bucket__12950 = cljs.core.aclone.call(null,bucket__12945);

new_bucket__12950.splice(i__12948,2);
(new_hashobj__12949[h__12942] = new_bucket__12950);
}
return (new cljs.core.HashMap(this__12940.meta,(this__12940.count - 1),new_hashobj__12949));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13017 = ks.length;

var i__13018 = 0;
var out__13019 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13018 < len__13017)))
{{
var G__13024 = (i__13018 + 1);
var G__13025 = cljs.core.assoc.call(null,out__13019,(ks[i__13018]),(vs[i__13018]));
i__13018 = G__13024;
out__13019 = G__13025;
continue;
}
} else
{return out__13019;
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
var in$__13026 = cljs.core.seq.call(null,keyvals);
var out__13028 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13026))
{{
var G__13033 = cljs.core.nnext.call(null,in$__13026);
var G__13034 = cljs.core.assoc.call(null,out__13028,cljs.core.first.call(null,in$__13026),cljs.core.second.call(null,in$__13026));
in$__13026 = G__13033;
out__13028 = G__13034;
continue;
}
} else
{return out__13028;
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
hash_map.cljs$lang$applyTo = (function (arglist__13035){
var keyvals = cljs.core.seq( arglist__13035 );;
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
{return cljs.core.reduce.call(null,(function (p1__13040_SHARP_,p2__13041_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13044 = p1__13040_SHARP_;

if(cljs.core.truth_(or__3548__auto____13044))
{return or__3548__auto____13044;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13041_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13053){
var maps = cljs.core.seq( arglist__13053 );;
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
{var merge_entry__13062 = (function (m,e){
var k__13058 = cljs.core.first.call(null,e);
var v__13060 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13058)))
{return cljs.core.assoc.call(null,m,k__13058,f.call(null,cljs.core.get.call(null,m,k__13058),v__13060));
} else
{return cljs.core.assoc.call(null,m,k__13058,v__13060);
}
});
var merge2__13078 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13062,(function (){var or__3548__auto____13064 = m1;

if(cljs.core.truth_(or__3548__auto____13064))
{return or__3548__auto____13064;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13078,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13087){
var f = cljs.core.first(arglist__13087);
var maps = cljs.core.rest(arglist__13087);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13103 = cljs.core.ObjMap.fromObject([],{});
var keys__13104 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13104))
{var key__13105 = cljs.core.first.call(null,keys__13104);
var entry__13107 = cljs.core.get.call(null,map,key__13105,"﷐'user/not-found");

{
var G__13126 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13107,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13103,key__13105,entry__13107):ret__13103);
var G__13127 = cljs.core.next.call(null,keys__13104);
ret__13103 = G__13126;
keys__13104 = G__13127;
continue;
}
} else
{return ret__13103;
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
var this__13143 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13160 = null;
var G__13160__13161 = (function (coll,v){
var this__13144 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13160__13162 = (function (coll,v,not_found){
var this__13146 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13146.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13160 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13160__13161.call(this,coll,v);
case  3 :
return G__13160__13162.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13160;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13164 = null;
var G__13164__13165 = (function (coll,k){
var this__13147 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13164__13166 = (function (coll,k,not_found){
var this__13148 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13164 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13164__13165.call(this,coll,k);
case  3 :
return G__13164__13166.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13164;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13149 = this;
return (new cljs.core.Set(this__13149.meta,cljs.core.assoc.call(null,this__13149.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13150 = this;
return cljs.core.keys.call(null,this__13150.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13151 = this;
return (new cljs.core.Set(this__13151.meta,cljs.core.dissoc.call(null,this__13151.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13152 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13153 = this;
var and__3546__auto____13154 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13154))
{var and__3546__auto____13155 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13155))
{return cljs.core.every_QMARK_.call(null,(function (p1__13094_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13094_SHARP_);
}),other);
} else
{return and__3546__auto____13155;
}
} else
{return and__3546__auto____13154;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13156 = this;
return (new cljs.core.Set(meta,this__13156.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13157 = this;
return this__13157.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13158 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13158.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13172 = cljs.core.seq.call(null,coll);
var out__13173 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13172))))
{{
var G__13178 = cljs.core.rest.call(null,in$__13172);
var G__13179 = cljs.core.conj.call(null,out__13173,cljs.core.first.call(null,in$__13172));
in$__13172 = G__13178;
out__13173 = G__13179;
continue;
}
} else
{return out__13173;
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
{var n__13186 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13188 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13188))
{var e__13189 = temp__3695__auto____13188;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13189));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13186,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13171_SHARP_){
var temp__3695__auto____13254 = cljs.core.find.call(null,smap,p1__13171_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13254))
{var e__13257 = temp__3695__auto____13254;

return cljs.core.second.call(null,e__13257);
} else
{return p1__13171_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13281 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13268,seen){
while(true){
var vec__13270__13271 = p__13268;
var f__13272 = cljs.core.nth.call(null,vec__13270__13271,0,null);
var xs__13273 = vec__13270__13271;

var temp__3698__auto____13275 = cljs.core.seq.call(null,xs__13273);

if(cljs.core.truth_(temp__3698__auto____13275))
{var s__13276 = temp__3698__auto____13275;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13272)))
{{
var G__13285 = cljs.core.rest.call(null,s__13276);
var G__13286 = seen;
p__13268 = G__13285;
seen = G__13286;
continue;
}
} else
{return cljs.core.cons.call(null,f__13272,step.call(null,cljs.core.rest.call(null,s__13276),cljs.core.conj.call(null,seen,f__13272)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13281.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13295 = cljs.core.Vector.fromArray([]);
var s__13296 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13296)))
{{
var G__13306 = cljs.core.conj.call(null,ret__13295,cljs.core.first.call(null,s__13296));
var G__13308 = cljs.core.next.call(null,s__13296);
ret__13295 = G__13306;
s__13296 = G__13308;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13295);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13313 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13313))
{return or__3548__auto____13313;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13317 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13317 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13317 + 1));
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
{var i__13333 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13333 > -1)))
{return cljs.core.subs.call(null,x,2,i__13333);
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
var map__13345 = cljs.core.ObjMap.fromObject([],{});
var ks__13347 = cljs.core.seq.call(null,keys);
var vs__13348 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13349 = ks__13347;

if(cljs.core.truth_(and__3546__auto____13349))
{return vs__13348;
} else
{return and__3546__auto____13349;
}
})()))
{{
var G__13359 = cljs.core.assoc.call(null,map__13345,cljs.core.first.call(null,ks__13347),cljs.core.first.call(null,vs__13348));
var G__13360 = cljs.core.next.call(null,ks__13347);
var G__13361 = cljs.core.next.call(null,vs__13348);
map__13345 = G__13359;
ks__13347 = G__13360;
vs__13348 = G__13361;
continue;
}
} else
{return map__13345;
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
var max_key__13377 = (function (k,x){
return x;
});
var max_key__13378 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13379 = (function() { 
var G__13381__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13342_SHARP_,p2__13343_SHARP_){
return max_key.call(null,k,p1__13342_SHARP_,p2__13343_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13381 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13381__delegate.call(this, k, x, y, more);
};
G__13381.cljs$lang$maxFixedArity = 3;
G__13381.cljs$lang$applyTo = (function (arglist__13382){
var k = cljs.core.first(arglist__13382);
var x = cljs.core.first(cljs.core.next(arglist__13382));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13382)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13382)));
return G__13381__delegate.call(this, k, x, y, more);
});
return G__13381;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13377.call(this,k,x);
case  3 :
return max_key__13378.call(this,k,x,y);
default:
return max_key__13379.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13379.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13418 = (function (k,x){
return x;
});
var min_key__13421 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13422 = (function() { 
var G__13427__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13365_SHARP_,p2__13366_SHARP_){
return min_key.call(null,k,p1__13365_SHARP_,p2__13366_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13427 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13427__delegate.call(this, k, x, y, more);
};
G__13427.cljs$lang$maxFixedArity = 3;
G__13427.cljs$lang$applyTo = (function (arglist__13435){
var k = cljs.core.first(arglist__13435);
var x = cljs.core.first(cljs.core.next(arglist__13435));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13435)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13435)));
return G__13427__delegate.call(this, k, x, y, more);
});
return G__13427;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13418.call(this,k,x);
case  3 :
return min_key__13421.call(this,k,x,y);
default:
return min_key__13422.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13422.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13442 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13443 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13439 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13439))
{var s__13440 = temp__3698__auto____13439;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13440),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13440)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13442.call(this,n,step);
case  3 :
return partition_all__13443.call(this,n,step,coll);
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
var temp__3698__auto____13451 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13451))
{var s__13455 = temp__3698__auto____13451;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13455))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13455),take_while.call(null,pred,cljs.core.rest.call(null,s__13455)));
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
var this__13462 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13464 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13514 = null;
var G__13514__13515 = (function (rng,f){
var this__13466 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13514__13516 = (function (rng,f,s){
var this__13468 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13514 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13514__13515.call(this,rng,f);
case  3 :
return G__13514__13516.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13514;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13471 = this;
var comp__13474 = (cljs.core.truth_((this__13471.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13474.call(null,this__13471.start,this__13471.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13476 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13476.end - this__13476.start) / this__13476.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13480 = this;
return this__13480.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13483 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13483.meta,(this__13483.start + this__13483.step),this__13483.end,this__13483.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13485 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13490 = this;
return (new cljs.core.Range(meta,this__13490.start,this__13490.end,this__13490.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13493 = this;
return this__13493.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13527 = null;
var G__13527__13528 = (function (rng,n){
var this__13494 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13494.start + (n * this__13494.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13500 = (this__13494.start > this__13494.end);

if(cljs.core.truth_(and__3546__auto____13500))
{return cljs.core._EQ_.call(null,this__13494.step,0);
} else
{return and__3546__auto____13500;
}
})()))
{return this__13494.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13527__13529 = (function (rng,n,not_found){
var this__13501 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13501.start + (n * this__13501.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13505 = (this__13501.start > this__13501.end);

if(cljs.core.truth_(and__3546__auto____13505))
{return cljs.core._EQ_.call(null,this__13501.step,0);
} else
{return and__3546__auto____13505;
}
})()))
{return this__13501.start;
} else
{return not_found;
}
}
});
G__13527 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13527__13528.call(this,rng,n);
case  3 :
return G__13527__13529.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13527;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13511 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13511.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13548 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13549 = (function (end){
return range.call(null,0,end,1);
});
var range__13550 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13551 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13548.call(this);
case  1 :
return range__13549.call(this,start);
case  2 :
return range__13550.call(this,start,end);
case  3 :
return range__13551.call(this,start,end,step);
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
var temp__3698__auto____13604 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13604))
{var s__13606 = temp__3698__auto____13604;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13606),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13606)));
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
var temp__3698__auto____13624 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13624))
{var s__13625 = temp__3698__auto____13624;

var fst__13626 = cljs.core.first.call(null,s__13625);
var fv__13627 = f.call(null,fst__13626);
var run__13629 = cljs.core.cons.call(null,fst__13626,cljs.core.take_while.call(null,(function (p1__13615_SHARP_){
return cljs.core._EQ_.call(null,fv__13627,f.call(null,p1__13615_SHARP_));
}),cljs.core.next.call(null,s__13625)));

return cljs.core.cons.call(null,run__13629,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13629),s__13625))));
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
var reductions__13663 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13656 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13656))
{var s__13657 = temp__3695__auto____13656;

return reductions.call(null,f,cljs.core.first.call(null,s__13657),cljs.core.rest.call(null,s__13657));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13664 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13661 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13661))
{var s__13662 = temp__3698__auto____13661;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13662)),cljs.core.rest.call(null,s__13662));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13663.call(this,f,init);
case  3 :
return reductions__13664.call(this,f,init,coll);
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
var juxt__13776 = (function (f){
return (function() {
var G__13858 = null;
var G__13858__13859 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13858__13860 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13858__13861 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13858__13862 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13858__13863 = (function() { 
var G__13869__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13869 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13869__delegate.call(this, x, y, z, args);
};
G__13869.cljs$lang$maxFixedArity = 3;
G__13869.cljs$lang$applyTo = (function (arglist__13870){
var x = cljs.core.first(arglist__13870);
var y = cljs.core.first(cljs.core.next(arglist__13870));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13870)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13870)));
return G__13869__delegate.call(this, x, y, z, args);
});
return G__13869;
})()
;
G__13858 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13858__13859.call(this);
case  1 :
return G__13858__13860.call(this,x);
case  2 :
return G__13858__13861.call(this,x,y);
case  3 :
return G__13858__13862.call(this,x,y,z);
default:
return G__13858__13863.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13858.cljs$lang$maxFixedArity = 3;
G__13858.cljs$lang$applyTo = G__13858__13863.cljs$lang$applyTo;
return G__13858;
})()
});
var juxt__13777 = (function (f,g){
return (function() {
var G__13875 = null;
var G__13875__13876 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13875__13877 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13875__13878 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13875__13879 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13875__13880 = (function() { 
var G__13886__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13886 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13886__delegate.call(this, x, y, z, args);
};
G__13886.cljs$lang$maxFixedArity = 3;
G__13886.cljs$lang$applyTo = (function (arglist__13892){
var x = cljs.core.first(arglist__13892);
var y = cljs.core.first(cljs.core.next(arglist__13892));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13892)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13892)));
return G__13886__delegate.call(this, x, y, z, args);
});
return G__13886;
})()
;
G__13875 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13875__13876.call(this);
case  1 :
return G__13875__13877.call(this,x);
case  2 :
return G__13875__13878.call(this,x,y);
case  3 :
return G__13875__13879.call(this,x,y,z);
default:
return G__13875__13880.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13875.cljs$lang$maxFixedArity = 3;
G__13875.cljs$lang$applyTo = G__13875__13880.cljs$lang$applyTo;
return G__13875;
})()
});
var juxt__13780 = (function (f,g,h){
return (function() {
var G__13897 = null;
var G__13897__13898 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13897__13899 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13897__13900 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13897__13901 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13897__13902 = (function() { 
var G__13910__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__13910 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13910__delegate.call(this, x, y, z, args);
};
G__13910.cljs$lang$maxFixedArity = 3;
G__13910.cljs$lang$applyTo = (function (arglist__13916){
var x = cljs.core.first(arglist__13916);
var y = cljs.core.first(cljs.core.next(arglist__13916));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13916)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13916)));
return G__13910__delegate.call(this, x, y, z, args);
});
return G__13910;
})()
;
G__13897 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13897__13898.call(this);
case  1 :
return G__13897__13899.call(this,x);
case  2 :
return G__13897__13900.call(this,x,y);
case  3 :
return G__13897__13901.call(this,x,y,z);
default:
return G__13897__13902.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13897.cljs$lang$maxFixedArity = 3;
G__13897.cljs$lang$applyTo = G__13897__13902.cljs$lang$applyTo;
return G__13897;
})()
});
var juxt__13854 = (function() { 
var G__13919__delegate = function (f,g,h,fs){
var fs__13688 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__13920 = null;
var G__13920__13921 = (function (){
return cljs.core.reduce.call(null,(function (p1__13643_SHARP_,p2__13644_SHARP_){
return cljs.core.conj.call(null,p1__13643_SHARP_,p2__13644_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13688);
});
var G__13920__13922 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13646_SHARP_,p2__13647_SHARP_){
return cljs.core.conj.call(null,p1__13646_SHARP_,p2__13647_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13688);
});
var G__13920__13923 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13648_SHARP_,p2__13649_SHARP_){
return cljs.core.conj.call(null,p1__13648_SHARP_,p2__13649_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13688);
});
var G__13920__13924 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13650_SHARP_,p2__13651_SHARP_){
return cljs.core.conj.call(null,p1__13650_SHARP_,p2__13651_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13688);
});
var G__13920__13925 = (function() { 
var G__13933__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13652_SHARP_,p2__13653_SHARP_){
return cljs.core.conj.call(null,p1__13652_SHARP_,cljs.core.apply.call(null,p2__13653_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13688);
};
var G__13933 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13933__delegate.call(this, x, y, z, args);
};
G__13933.cljs$lang$maxFixedArity = 3;
G__13933.cljs$lang$applyTo = (function (arglist__13935){
var x = cljs.core.first(arglist__13935);
var y = cljs.core.first(cljs.core.next(arglist__13935));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13935)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13935)));
return G__13933__delegate.call(this, x, y, z, args);
});
return G__13933;
})()
;
G__13920 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13920__13921.call(this);
case  1 :
return G__13920__13922.call(this,x);
case  2 :
return G__13920__13923.call(this,x,y);
case  3 :
return G__13920__13924.call(this,x,y,z);
default:
return G__13920__13925.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13920.cljs$lang$maxFixedArity = 3;
G__13920.cljs$lang$applyTo = G__13920__13925.cljs$lang$applyTo;
return G__13920;
})()
};
var G__13919 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13919__delegate.call(this, f, g, h, fs);
};
G__13919.cljs$lang$maxFixedArity = 3;
G__13919.cljs$lang$applyTo = (function (arglist__13940){
var f = cljs.core.first(arglist__13940);
var g = cljs.core.first(cljs.core.next(arglist__13940));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13940)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13940)));
return G__13919__delegate.call(this, f, g, h, fs);
});
return G__13919;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13776.call(this,f);
case  2 :
return juxt__13777.call(this,f,g);
case  3 :
return juxt__13780.call(this,f,g,h);
default:
return juxt__13854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13854.cljs$lang$applyTo;
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
var dorun__13962 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__13968 = cljs.core.next.call(null,coll);
coll = G__13968;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__13963 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13954 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____13954))
{return (n > 0);
} else
{return and__3546__auto____13954;
}
})()))
{{
var G__13970 = (n - 1);
var G__13971 = cljs.core.next.call(null,coll);
n = G__13970;
coll = G__13971;
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
return dorun__13962.call(this,n);
case  2 :
return dorun__13963.call(this,n,coll);
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
var doall__13980 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__13981 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__13980.call(this,n);
case  2 :
return doall__13981.call(this,n,coll);
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
var matches__13989 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__13989),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__13989),1)))
{return cljs.core.first.call(null,matches__13989);
} else
{return cljs.core.vec.call(null,matches__13989);
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
var matches__14004 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14004)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14004),1)))
{return cljs.core.first.call(null,matches__14004);
} else
{return cljs.core.vec.call(null,matches__14004);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14030 = cljs.core.re_find.call(null,re,s);
var match_idx__14031 = s.search(re);
var match_str__14032 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14030))?cljs.core.first.call(null,match_data__14030):match_data__14030);
var post_match__14033 = cljs.core.subs.call(null,s,(match_idx__14031 + cljs.core.count.call(null,match_str__14032)));

if(cljs.core.truth_(match_data__14030))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14030,re_seq.call(null,re,post_match__14033));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14046_SHARP_){
return print_one.call(null,p1__14046_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14067 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14067))
{var and__3546__auto____14077 = (function (){var x__445__auto____14069 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14072 = x__445__auto____14069;

if(cljs.core.truth_(and__3546__auto____14072))
{var and__3546__auto____14074 = x__445__auto____14069.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14074))
{return cljs.core.not.call(null,x__445__auto____14069.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14074;
}
} else
{return and__3546__auto____14072;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14069);
}
})();

if(cljs.core.truth_(and__3546__auto____14077))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14077;
}
} else
{return and__3546__auto____14067;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14082 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14083 = x__445__auto____14082;

if(cljs.core.truth_(and__3546__auto____14083))
{var and__3546__auto____14084 = x__445__auto____14082.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14084))
{return cljs.core.not.call(null,x__445__auto____14082.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14084;
}
} else
{return and__3546__auto____14083;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14082);
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
var first_obj__14097 = cljs.core.first.call(null,objs);
var sb__14098 = (new goog.string.StringBuffer());

var G__14101__14105 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14101__14105))
{var obj__14106 = cljs.core.first.call(null,G__14101__14105);
var G__14101__14107 = G__14101__14105;

while(true){
if(cljs.core.truth_((obj__14106 === first_obj__14097)))
{} else
{sb__14098.append(" ");
}
var G__14108__14109 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14106,opts));

if(cljs.core.truth_(G__14108__14109))
{var string__14110 = cljs.core.first.call(null,G__14108__14109);
var G__14108__14111 = G__14108__14109;

while(true){
sb__14098.append(string__14110);
var temp__3698__auto____14112 = cljs.core.next.call(null,G__14108__14111);

if(cljs.core.truth_(temp__3698__auto____14112))
{var G__14108__14115 = temp__3698__auto____14112;

{
var G__14127 = cljs.core.first.call(null,G__14108__14115);
var G__14128 = G__14108__14115;
string__14110 = G__14127;
G__14108__14111 = G__14128;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14119 = cljs.core.next.call(null,G__14101__14107);

if(cljs.core.truth_(temp__3698__auto____14119))
{var G__14101__14122 = temp__3698__auto____14119;

{
var G__14130 = cljs.core.first.call(null,G__14101__14122);
var G__14131 = G__14101__14122;
obj__14106 = G__14130;
G__14101__14107 = G__14131;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14098);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14134 = cljs.core.first.call(null,objs);

var G__14135__14136 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14135__14136))
{var obj__14138 = cljs.core.first.call(null,G__14135__14136);
var G__14135__14139 = G__14135__14136;

while(true){
if(cljs.core.truth_((obj__14138 === first_obj__14134)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14140__14141 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14138,opts));

if(cljs.core.truth_(G__14140__14141))
{var string__14142 = cljs.core.first.call(null,G__14140__14141);
var G__14140__14144 = G__14140__14141;

while(true){
cljs.core.string_print.call(null,string__14142);
var temp__3698__auto____14148 = cljs.core.next.call(null,G__14140__14144);

if(cljs.core.truth_(temp__3698__auto____14148))
{var G__14140__14155 = temp__3698__auto____14148;

{
var G__14166 = cljs.core.first.call(null,G__14140__14155);
var G__14167 = G__14140__14155;
string__14142 = G__14166;
G__14140__14144 = G__14167;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14160 = cljs.core.next.call(null,G__14135__14139);

if(cljs.core.truth_(temp__3698__auto____14160))
{var G__14135__14161 = temp__3698__auto____14160;

{
var G__14171 = cljs.core.first.call(null,G__14135__14161);
var G__14172 = G__14135__14161;
obj__14138 = G__14171;
G__14135__14139 = G__14172;
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
pr_str.cljs$lang$applyTo = (function (arglist__14185){
var objs = cljs.core.seq( arglist__14185 );;
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
pr.cljs$lang$applyTo = (function (arglist__14187){
var objs = cljs.core.seq( arglist__14187 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14189){
var objs = cljs.core.seq( arglist__14189 );;
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
println.cljs$lang$applyTo = (function (arglist__14201){
var objs = cljs.core.seq( arglist__14201 );;
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
prn.cljs$lang$applyTo = (function (arglist__14221){
var objs = cljs.core.seq( arglist__14221 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14306 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14306,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14329 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14329))
{var nspc__14331 = temp__3698__auto____14329;

return cljs.core.str.call(null,nspc__14331,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14341 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14341))
{var nspc__14342 = temp__3698__auto____14341;

return cljs.core.str.call(null,nspc__14342,"/");
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
var pr_pair__14355 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14355,"{",", ","}",opts,coll);
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
var this__14421 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14426 = this;
var G__14428__14429 = cljs.core.seq.call(null,this__14426.watches);

if(cljs.core.truth_(G__14428__14429))
{var G__14432__14435 = cljs.core.first.call(null,G__14428__14429);
var vec__14433__14438 = G__14432__14435;
var key__14440 = cljs.core.nth.call(null,vec__14433__14438,0,null);
var f__14441 = cljs.core.nth.call(null,vec__14433__14438,1,null);
var G__14428__14442 = G__14428__14429;

var G__14432__14443 = G__14432__14435;
var G__14428__14444 = G__14428__14442;

while(true){
var vec__14447__14448 = G__14432__14443;
var key__14449 = cljs.core.nth.call(null,vec__14447__14448,0,null);
var f__14450 = cljs.core.nth.call(null,vec__14447__14448,1,null);
var G__14428__14451 = G__14428__14444;

f__14450.call(null,key__14449,this$,oldval,newval);
var temp__3698__auto____14457 = cljs.core.next.call(null,G__14428__14451);

if(cljs.core.truth_(temp__3698__auto____14457))
{var G__14428__14462 = temp__3698__auto____14457;

{
var G__14507 = cljs.core.first.call(null,G__14428__14462);
var G__14508 = G__14428__14462;
G__14432__14443 = G__14507;
G__14428__14444 = G__14508;
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
var this__14469 = this;
return this$.watches = cljs.core.assoc.call(null,this__14469.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14473 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14473.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14481 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14481.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14484 = this;
return this__14484.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14492 = this;
return this__14492.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14495 = this;
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
var atom__14533 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14534 = (function() { 
var G__14538__delegate = function (x,p__14519){
var map__14520__14522 = p__14519;
var map__14520__14528 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14520__14522))?cljs.core.apply.call(null,cljs.core.hash_map,map__14520__14522):map__14520__14522);
var validator__14531 = cljs.core.get.call(null,map__14520__14528,"﷐'validator");
var meta__14532 = cljs.core.get.call(null,map__14520__14528,"﷐'meta");

return (new cljs.core.Atom(x,meta__14532,validator__14531,null));
};
var G__14538 = function (x,var_args){
var p__14519 = null;
if (goog.isDef(var_args)) {
  p__14519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14538__delegate.call(this, x, p__14519);
};
G__14538.cljs$lang$maxFixedArity = 1;
G__14538.cljs$lang$applyTo = (function (arglist__14540){
var x = cljs.core.first(arglist__14540);
var p__14519 = cljs.core.rest(arglist__14540);
return G__14538__delegate.call(this, x, p__14519);
});
return G__14538;
})()
;
atom = function(x,var_args){
var p__14519 = var_args;
switch(arguments.length){
case  1 :
return atom__14533.call(this,x);
default:
return atom__14534.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14534.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14543 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14543))
{var validate__14544 = temp__3698__auto____14543;

if(cljs.core.truth_(validate__14544.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14545 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14545,new_value);
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
var swap_BANG___14563 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14564 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14565 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14567 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14568 = (function() { 
var G__14573__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14573 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14573__delegate.call(this, a, f, x, y, z, more);
};
G__14573.cljs$lang$maxFixedArity = 5;
G__14573.cljs$lang$applyTo = (function (arglist__14577){
var a = cljs.core.first(arglist__14577);
var f = cljs.core.first(cljs.core.next(arglist__14577));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14577)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14577))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14577)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14577)))));
return G__14573__delegate.call(this, a, f, x, y, z, more);
});
return G__14573;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14563.call(this,a,f);
case  3 :
return swap_BANG___14564.call(this,a,f,x);
case  4 :
return swap_BANG___14565.call(this,a,f,x,y);
case  5 :
return swap_BANG___14567.call(this,a,f,x,y,z);
default:
return swap_BANG___14568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14568.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14587){
var iref = cljs.core.first(arglist__14587);
var f = cljs.core.first(cljs.core.next(arglist__14587));
var args = cljs.core.rest(cljs.core.next(arglist__14587));
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
var gensym__14595 = (function (){
return gensym.call(null,"G__");
});
var gensym__14596 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14595.call(this);
case  1 :
return gensym__14596.call(this,prefix_string);
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
var this__14606 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14606.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14607 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14607.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14607.state,this__14607.f);
}
return cljs.core.deref.call(null,this__14607.state);
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
delay.cljs$lang$applyTo = (function (arglist__14627){
var body = cljs.core.seq( arglist__14627 );;
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
var map__14642__14644 = options;
var map__14642__14647 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14642__14644))?cljs.core.apply.call(null,cljs.core.hash_map,map__14642__14644):map__14642__14644);
var keywordize_keys__14648 = cljs.core.get.call(null,map__14642__14647,"﷐'keywordize-keys");
var keyfn__14649 = (cljs.core.truth_(keywordize_keys__14648)?cljs.core.keyword:cljs.core.str);
var f__14667 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14665 = (function iter__14654(s__14655){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14655__14658 = s__14655;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14655__14658)))
{var k__14661 = cljs.core.first.call(null,s__14655__14658);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14649.call(null,k__14661),thisfn.call(null,(x[k__14661]))]),iter__14654.call(null,cljs.core.rest.call(null,s__14655__14658)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14665.call(null,cljs.core.js_keys.call(null,x));
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

return f__14667.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14697){
var x = cljs.core.first(arglist__14697);
var options = cljs.core.rest(arglist__14697);
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
var mem__14704 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14717__delegate = function (args){
var temp__3695__auto____14706 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14704),args);

if(cljs.core.truth_(temp__3695__auto____14706))
{var v__14709 = temp__3695__auto____14706;

return v__14709;
} else
{var ret__14710 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14704,cljs.core.assoc,args,ret__14710);
return ret__14710;
}
};
var G__14717 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14717__delegate.call(this, args);
};
G__14717.cljs$lang$maxFixedArity = 0;
G__14717.cljs$lang$applyTo = (function (arglist__14722){
var args = cljs.core.seq( arglist__14722 );;
return G__14717__delegate.call(this, args);
});
return G__14717;
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
var trampoline__14728 = (function (f){
while(true){
var ret__14723 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14723)))
{{
var G__14733 = ret__14723;
f = G__14733;
continue;
}
} else
{return ret__14723;
}
break;
}
});
var trampoline__14729 = (function() { 
var G__14734__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14734 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14734__delegate.call(this, f, args);
};
G__14734.cljs$lang$maxFixedArity = 1;
G__14734.cljs$lang$applyTo = (function (arglist__14735){
var f = cljs.core.first(arglist__14735);
var args = cljs.core.rest(arglist__14735);
return G__14734__delegate.call(this, f, args);
});
return G__14734;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14728.call(this,f);
default:
return trampoline__14729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14729.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14742 = (function (){
return rand.call(null,1);
});
var rand__14743 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14742.call(this);
case  1 :
return rand__14743.call(this,n);
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
var k__14893 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14893,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14893,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14930 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14931 = (function (h,child,parent){
var or__3548__auto____14908 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14908))
{return or__3548__auto____14908;
} else
{var or__3548__auto____14910 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14910))
{return or__3548__auto____14910;
} else
{var and__3546__auto____14913 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14913))
{var and__3546__auto____14917 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14917))
{var and__3546__auto____14921 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14921))
{var ret__14922 = true;
var i__14923 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14925 = cljs.core.not.call(null,ret__14922);

if(cljs.core.truth_(or__3548__auto____14925))
{return or__3548__auto____14925;
} else
{return cljs.core._EQ_.call(null,i__14923,cljs.core.count.call(null,parent));
}
})()))
{return ret__14922;
} else
{{
var G__14939 = isa_QMARK_.call(null,h,child.call(null,i__14923),parent.call(null,i__14923));
var G__14940 = (i__14923 + 1);
ret__14922 = G__14939;
i__14923 = G__14940;
continue;
}
}
break;
}
} else
{return and__3546__auto____14921;
}
} else
{return and__3546__auto____14917;
}
} else
{return and__3546__auto____14913;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14930.call(this,h,child);
case  3 :
return isa_QMARK___14931.call(this,h,child,parent);
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
var parents__14947 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14948 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14947.call(this,h);
case  2 :
return parents__14948.call(this,h,tag);
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
var ancestors__14968 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14969 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14968.call(this,h);
case  2 :
return ancestors__14969.call(this,h,tag);
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
var descendants__14975 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14976 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14975.call(this,h);
case  2 :
return descendants__14976.call(this,h,tag);
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
var derive__14991 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14992 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14981 = "﷐'parents".call(null,h);
var td__14982 = "﷐'descendants".call(null,h);
var ta__14983 = "﷐'ancestors".call(null,h);
var tf__14984 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14989 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14981.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14983.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14983.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14981,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14984.call(null,"﷐'ancestors".call(null,h),tag,td__14982,parent,ta__14983),"﷐'descendants":tf__14984.call(null,"﷐'descendants".call(null,h),parent,ta__14983,tag,td__14982)});
})());

if(cljs.core.truth_(or__3548__auto____14989))
{return or__3548__auto____14989;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14991.call(this,h,tag);
case  3 :
return derive__14992.call(this,h,tag,parent);
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
var underive__15012 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15013 = (function (h,tag,parent){
var parentMap__15001 = "﷐'parents".call(null,h);
var childsParents__15003 = (cljs.core.truth_(parentMap__15001.call(null,tag))?cljs.core.disj.call(null,parentMap__15001.call(null,tag),parent):cljs.core.set([]));
var newParents__15005 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15003))?cljs.core.assoc.call(null,parentMap__15001,tag,childsParents__15003):cljs.core.dissoc.call(null,parentMap__15001,tag));
var deriv_seq__15007 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14978_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14978_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14978_SHARP_),cljs.core.second.call(null,p1__14978_SHARP_)));
}),cljs.core.seq.call(null,newParents__15005)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15001.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14979_SHARP_,p2__14980_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14979_SHARP_,p2__14980_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15007));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15012.call(this,h,tag);
case  3 :
return underive__15013.call(this,h,tag,parent);
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
var xprefs__15087 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15092 = (cljs.core.truth_((function (){var and__3546__auto____15089 = xprefs__15087;

if(cljs.core.truth_(and__3546__auto____15089))
{return xprefs__15087.call(null,y);
} else
{return and__3546__auto____15089;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15092))
{return or__3548__auto____15092;
} else
{var or__3548__auto____15094 = (function (){var ps__15093 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15093) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15093),prefer_table)))
{} else
{}
{
var G__15102 = cljs.core.rest.call(null,ps__15093);
ps__15093 = G__15102;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{var or__3548__auto____15099 = (function (){var ps__15095 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15095) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15095),y,prefer_table)))
{} else
{}
{
var G__15103 = cljs.core.rest.call(null,ps__15095);
ps__15095 = G__15103;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15099))
{return or__3548__auto____15099;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15112 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15112))
{return or__3548__auto____15112;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15124 = cljs.core.reduce.call(null,(function (be,p__15116){
var vec__15117__15118 = p__15116;
var k__15119 = cljs.core.nth.call(null,vec__15117__15118,0,null);
var ___15120 = cljs.core.nth.call(null,vec__15117__15118,1,null);
var e__15121 = vec__15117__15118;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15119)))
{var be2__15123 = (cljs.core.truth_((function (){var or__3548__auto____15122 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15122))
{return or__3548__auto____15122;
} else
{return cljs.core.dominates.call(null,k__15119,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15121:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15123),k__15119,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15119," and ",cljs.core.first.call(null,be2__15123),", and neither is preferred")));
}
return be2__15123;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15124))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15124));
return cljs.core.second.call(null,best_entry__15124);
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
if(cljs.core.truth_((function (){var and__3546__auto____15130 = mf;

if(cljs.core.truth_(and__3546__auto____15130))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15130;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15133 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15133))
{return or__3548__auto____15133;
} else
{var or__3548__auto____15134 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15134))
{return or__3548__auto____15134;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15137 = mf;

if(cljs.core.truth_(and__3546__auto____15137))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15137;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15139 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15139))
{return or__3548__auto____15139;
} else
{var or__3548__auto____15140 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15140))
{return or__3548__auto____15140;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15142 = mf;

if(cljs.core.truth_(and__3546__auto____15142))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15142;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15145 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15145))
{return or__3548__auto____15145;
} else
{var or__3548__auto____15146 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15146))
{return or__3548__auto____15146;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15148 = mf;

if(cljs.core.truth_(and__3546__auto____15148))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15148;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15151 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15151))
{return or__3548__auto____15151;
} else
{var or__3548__auto____15152 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15152))
{return or__3548__auto____15152;
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
{return (function (){var or__3548__auto____15166 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15166))
{return or__3548__auto____15166;
} else
{var or__3548__auto____15167 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15167))
{return or__3548__auto____15167;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15168 = mf;

if(cljs.core.truth_(and__3546__auto____15168))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15168;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15169 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15169))
{return or__3548__auto____15169;
} else
{var or__3548__auto____15170 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15170))
{return or__3548__auto____15170;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15171 = mf;

if(cljs.core.truth_(and__3546__auto____15171))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15171;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15173 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15173))
{return or__3548__auto____15173;
} else
{var or__3548__auto____15175 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15175))
{return or__3548__auto____15175;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15176 = mf;

if(cljs.core.truth_(and__3546__auto____15176))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15176;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15177 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15177))
{return or__3548__auto____15177;
} else
{var or__3548__auto____15178 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15178))
{return or__3548__auto____15178;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15245 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15247 = cljs.core._get_method.call(null,mf,dispatch_val__15245);

if(cljs.core.truth_(target_fn__15247))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15245)));
}
return cljs.core.apply.call(null,target_fn__15247,args);
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
var this__15253 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15255 = this;
cljs.core.swap_BANG_.call(null,this__15255.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15255.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15255.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15255.cached_hierarchy,(function (mf){
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
var this__15272 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15272.cached_hierarchy),cljs.core.deref.call(null,this__15272.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15272.method_cache,this__15272.method_table,this__15272.cached_hierarchy,this__15272.hierarchy);
}
var temp__3695__auto____15277 = cljs.core.deref.call(null,this__15272.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15277))
{var target_fn__15278 = temp__3695__auto____15277;

return target_fn__15278;
} else
{var temp__3695__auto____15280 = cljs.core.find_and_cache_best_method.call(null,this__15272.name,dispatch_val,this__15272.hierarchy,this__15272.method_table,this__15272.prefer_table,this__15272.method_cache,this__15272.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15280))
{var target_fn__15281 = temp__3695__auto____15280;

return target_fn__15281;
} else
{return cljs.core.deref.call(null,this__15272.method_table).call(null,this__15272.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15283 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15283.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15283.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15283.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15283.method_cache,this__15283.method_table,this__15283.cached_hierarchy,this__15283.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15288 = this;
return cljs.core.deref.call(null,this__15288.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15290 = this;
return cljs.core.deref.call(null,this__15290.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15291 = this;
return cljs.core.do_dispatch.call(null,mf,this__15291.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15319__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15319 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15319__delegate.call(this, _, args);
};
G__15319.cljs$lang$maxFixedArity = 1;
G__15319.cljs$lang$applyTo = (function (arglist__15322){
var _ = cljs.core.first(arglist__15322);
var args = cljs.core.rest(arglist__15322);
return G__15319__delegate.call(this, _, args);
});
return G__15319;
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
