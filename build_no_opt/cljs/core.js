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
var or__3548__auto____7262 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7262))
{return or__3548__auto____7262;
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
var _invoke__7589 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7280 = this$;

if(cljs.core.truth_(and__3546__auto____7280))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7280;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
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
})().call(null,this$);
}
});
var _invoke__7591 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7289 = this$;

if(cljs.core.truth_(and__3546__auto____7289))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7289;
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
var _invoke__7593 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7298 = this$;

if(cljs.core.truth_(and__3546__auto____7298))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7298;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7300 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{var or__3548__auto____7301 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7301))
{return or__3548__auto____7301;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7595 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
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
})().call(null,this$,a,b,c);
}
});
var _invoke__7597 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7312 = this$;

if(cljs.core.truth_(and__3546__auto____7312))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7312;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7315 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{var or__3548__auto____7317 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7317))
{return or__3548__auto____7317;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7599 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7321 = this$;

if(cljs.core.truth_(and__3546__auto____7321))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7321;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7324 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{var or__3548__auto____7326 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7326))
{return or__3548__auto____7326;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7601 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7329 = this$;

if(cljs.core.truth_(and__3546__auto____7329))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7329;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7332 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{var or__3548__auto____7334 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7334))
{return or__3548__auto____7334;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7603 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7336 = this$;

if(cljs.core.truth_(and__3546__auto____7336))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7336;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7342 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7342))
{return or__3548__auto____7342;
} else
{var or__3548__auto____7344 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7344))
{return or__3548__auto____7344;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7349 = this$;

if(cljs.core.truth_(and__3546__auto____7349))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7349;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7354 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7354))
{return or__3548__auto____7354;
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
var _invoke__7606 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7362 = this$;

if(cljs.core.truth_(and__3546__auto____7362))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7362;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7367 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7367))
{return or__3548__auto____7367;
} else
{var or__3548__auto____7369 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7369))
{return or__3548__auto____7369;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7374 = this$;

if(cljs.core.truth_(and__3546__auto____7374))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7374;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7379 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7379))
{return or__3548__auto____7379;
} else
{var or__3548__auto____7382 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7387 = this$;

if(cljs.core.truth_(and__3546__auto____7387))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7387;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7391 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7391))
{return or__3548__auto____7391;
} else
{var or__3548__auto____7394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7399 = this$;

if(cljs.core.truth_(and__3546__auto____7399))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7399;
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
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7411 = this$;

if(cljs.core.truth_(and__3546__auto____7411))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7411;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7417 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7417))
{return or__3548__auto____7417;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7424 = this$;

if(cljs.core.truth_(and__3546__auto____7424))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7424;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7449 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7449))
{return or__3548__auto____7449;
} else
{var or__3548__auto____7453 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7453))
{return or__3548__auto____7453;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7460 = this$;

if(cljs.core.truth_(and__3546__auto____7460))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7460;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7462 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7462))
{return or__3548__auto____7462;
} else
{var or__3548__auto____7465 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7465))
{return or__3548__auto____7465;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7468 = this$;

if(cljs.core.truth_(and__3546__auto____7468))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7468;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7483 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7483))
{return or__3548__auto____7483;
} else
{var or__3548__auto____7486 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7486))
{return or__3548__auto____7486;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7623 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7490 = this$;

if(cljs.core.truth_(and__3546__auto____7490))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7490;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7625 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7505 = this$;

if(cljs.core.truth_(and__3546__auto____7505))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7505;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7509 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7509))
{return or__3548__auto____7509;
} else
{var or__3548__auto____7513 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7513))
{return or__3548__auto____7513;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7626 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7519 = this$;

if(cljs.core.truth_(and__3546__auto____7519))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7519;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7568 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7568))
{return or__3548__auto____7568;
} else
{var or__3548__auto____7569 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7569))
{return or__3548__auto____7569;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7627 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7577 = this$;

if(cljs.core.truth_(and__3546__auto____7577))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7577;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7580 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7580))
{return or__3548__auto____7580;
} else
{var or__3548__auto____7581 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7581))
{return or__3548__auto____7581;
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
return _invoke__7589.call(this,this$);
case  2 :
return _invoke__7591.call(this,this$,a);
case  3 :
return _invoke__7593.call(this,this$,a,b);
case  4 :
return _invoke__7595.call(this,this$,a,b,c);
case  5 :
return _invoke__7597.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7599.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7601.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7603.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7605.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7606.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7609.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7611.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7613.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7623.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7625.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7626.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7627.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7776 = coll;

if(cljs.core.truth_(and__3546__auto____7776))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7776;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7777 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7777))
{return or__3548__auto____7777;
} else
{var or__3548__auto____7778 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7778))
{return or__3548__auto____7778;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7787 = coll;

if(cljs.core.truth_(and__3546__auto____7787))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7787;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7790 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7790))
{return or__3548__auto____7790;
} else
{var or__3548__auto____7793 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7793))
{return or__3548__auto____7793;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7797 = coll;

if(cljs.core.truth_(and__3546__auto____7797))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7797;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7799 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7799))
{return or__3548__auto____7799;
} else
{var or__3548__auto____7800 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7800))
{return or__3548__auto____7800;
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
var _nth__7831 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7807 = coll;

if(cljs.core.truth_(and__3546__auto____7807))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7807;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7808 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7808))
{return or__3548__auto____7808;
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
var _nth__7832 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7823 = coll;

if(cljs.core.truth_(and__3546__auto____7823))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7823;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7827 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7827))
{return or__3548__auto____7827;
} else
{var or__3548__auto____7829 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7829))
{return or__3548__auto____7829;
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
return _nth__7831.call(this,coll,n);
case  3 :
return _nth__7832.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7845 = coll;

if(cljs.core.truth_(and__3546__auto____7845))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7845;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7848 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7848))
{return or__3548__auto____7848;
} else
{var or__3548__auto____7852 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7852))
{return or__3548__auto____7852;
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
{var or__3548__auto____7861 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7861))
{return or__3548__auto____7861;
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
var _lookup__7896 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7875 = o;

if(cljs.core.truth_(and__3546__auto____7875))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7875;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7882 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{var or__3548__auto____7883 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7883))
{return or__3548__auto____7883;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7897 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7885 = o;

if(cljs.core.truth_(and__3546__auto____7885))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7885;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7888 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7888))
{return or__3548__auto____7888;
} else
{var or__3548__auto____7890 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7890))
{return or__3548__auto____7890;
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
return _lookup__7896.call(this,o,k);
case  3 :
return _lookup__7897.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7908 = coll;

if(cljs.core.truth_(and__3546__auto____7908))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7908;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7910 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7910))
{return or__3548__auto____7910;
} else
{var or__3548__auto____7911 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7911))
{return or__3548__auto____7911;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7914 = coll;

if(cljs.core.truth_(and__3546__auto____7914))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7914;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7917 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7917))
{return or__3548__auto____7917;
} else
{var or__3548__auto____7920 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7920))
{return or__3548__auto____7920;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7933 = coll;

if(cljs.core.truth_(and__3546__auto____7933))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7933;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7937 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7937))
{return or__3548__auto____7937;
} else
{var or__3548__auto____7939 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7945 = coll;

if(cljs.core.truth_(and__3546__auto____7945))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7945;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7950 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{var or__3548__auto____7951 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7951))
{return or__3548__auto____7951;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7958 = coll;

if(cljs.core.truth_(and__3546__auto____7958))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7958;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7961 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{var or__3548__auto____7963 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7967 = coll;

if(cljs.core.truth_(and__3546__auto____7967))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7967;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7970 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7970))
{return or__3548__auto____7970;
} else
{var or__3548__auto____7973 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7973))
{return or__3548__auto____7973;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7982 = coll;

if(cljs.core.truth_(and__3546__auto____7982))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7982;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7988 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7988))
{return or__3548__auto____7988;
} else
{var or__3548__auto____8008 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____8008))
{return or__3548__auto____8008;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____8025 = o;

if(cljs.core.truth_(and__3546__auto____8025))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____8025;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____8027 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8027))
{return or__3548__auto____8027;
} else
{var or__3548__auto____8028 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____8028))
{return or__3548__auto____8028;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____8038 = o;

if(cljs.core.truth_(and__3546__auto____8038))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____8038;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____8042 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8042))
{return or__3548__auto____8042;
} else
{var or__3548__auto____8046 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____8046))
{return or__3548__auto____8046;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____8052 = o;

if(cljs.core.truth_(and__3546__auto____8052))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____8052;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____8056 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8056))
{return or__3548__auto____8056;
} else
{var or__3548__auto____8058 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____8078 = o;

if(cljs.core.truth_(and__3546__auto____8078))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____8078;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____8082 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8082))
{return or__3548__auto____8082;
} else
{var or__3548__auto____8083 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
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
var _reduce__8102 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____8091 = coll;

if(cljs.core.truth_(and__3546__auto____8091))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8091;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8094 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8094))
{return or__3548__auto____8094;
} else
{var or__3548__auto____8096 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8096))
{return or__3548__auto____8096;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8104 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8098 = coll;

if(cljs.core.truth_(and__3546__auto____8098))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8098;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8099 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8099))
{return or__3548__auto____8099;
} else
{var or__3548__auto____8101 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8101))
{return or__3548__auto____8101;
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
return _reduce__8102.call(this,coll,f);
case  3 :
return _reduce__8104.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8112 = o;

if(cljs.core.truth_(and__3546__auto____8112))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8112;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8114 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8114))
{return or__3548__auto____8114;
} else
{var or__3548__auto____8115 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8115))
{return or__3548__auto____8115;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8120 = o;

if(cljs.core.truth_(and__3546__auto____8120))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8120;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8122 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8122))
{return or__3548__auto____8122;
} else
{var or__3548__auto____8124 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8128 = o;

if(cljs.core.truth_(and__3546__auto____8128))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8128;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8131 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
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
if(cljs.core.truth_((function (){var and__3546__auto____8139 = o;

if(cljs.core.truth_(and__3546__auto____8139))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8139;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8140 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8140))
{return or__3548__auto____8140;
} else
{var or__3548__auto____8142 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8142))
{return or__3548__auto____8142;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8149 = d;

if(cljs.core.truth_(and__3546__auto____8149))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8149;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8153 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8153))
{return or__3548__auto____8153;
} else
{var or__3548__auto____8155 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____8155))
{return or__3548__auto____8155;
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
{return (function (){var or__3548__auto____8218 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8218))
{return or__3548__auto____8218;
} else
{var or__3548__auto____8219 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8219))
{return or__3548__auto____8219;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8220 = this$;

if(cljs.core.truth_(and__3546__auto____8220))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8220;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8225 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8225))
{return or__3548__auto____8225;
} else
{var or__3548__auto____8226 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8226))
{return or__3548__auto____8226;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8227 = this$;

if(cljs.core.truth_(and__3546__auto____8227))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8227;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8228 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8228))
{return or__3548__auto____8228;
} else
{var or__3548__auto____8229 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8229))
{return or__3548__auto____8229;
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
var G__8268 = null;
var G__8268__8270 = (function (o,k){
return null;
});
var G__8268__8271 = (function (o,k,not_found){
return not_found;
});
G__8268 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8268__8270.call(this,o,k);
case  3 :
return G__8268__8271.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8268;
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
var G__8276 = null;
var G__8276__8277 = (function (_,f){
return f.call(null);
});
var G__8276__8278 = (function (_,f,start){
return start;
});
G__8276 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8276__8277.call(this,_,f);
case  3 :
return G__8276__8278.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8276;
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
var G__8307 = null;
var G__8307__8308 = (function (_,n){
return null;
});
var G__8307__8309 = (function (_,n,not_found){
return not_found;
});
G__8307 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8307__8308.call(this,_,n);
case  3 :
return G__8307__8309.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8307;
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
var ci_reduce__8347 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8335 = cljs.core._nth.call(null,cicoll,0);
var n__8336 = 1;

while(true){
if(cljs.core.truth_((n__8336 < cljs.core._count.call(null,cicoll))))
{{
var G__8353 = f.call(null,val__8335,cljs.core._nth.call(null,cicoll,n__8336));
var G__8354 = (n__8336 + 1);
val__8335 = G__8353;
n__8336 = G__8354;
continue;
}
} else
{return val__8335;
}
break;
}
}
});
var ci_reduce__8348 = (function (cicoll,f,val){
var val__8339 = val;
var n__8340 = 0;

while(true){
if(cljs.core.truth_((n__8340 < cljs.core._count.call(null,cicoll))))
{{
var G__8356 = f.call(null,val__8339,cljs.core._nth.call(null,cicoll,n__8340));
var G__8357 = (n__8340 + 1);
val__8339 = G__8356;
n__8340 = G__8357;
continue;
}
} else
{return val__8339;
}
break;
}
});
var ci_reduce__8349 = (function (cicoll,f,val,idx){
var val__8343 = val;
var n__8344 = idx;

while(true){
if(cljs.core.truth_((n__8344 < cljs.core._count.call(null,cicoll))))
{{
var G__8358 = f.call(null,val__8343,cljs.core._nth.call(null,cicoll,n__8344));
var G__8359 = (n__8344 + 1);
val__8343 = G__8358;
n__8344 = G__8359;
continue;
}
} else
{return val__8343;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8347.call(this,cicoll,f);
case  3 :
return ci_reduce__8348.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8349.call(this,cicoll,f,val,idx);
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
var this__8374 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8551 = null;
var G__8551__8552 = (function (_,f){
var this__8376 = this;
return cljs.core.ci_reduce.call(null,this__8376.a,f,(this__8376.a[this__8376.i]),(this__8376.i + 1));
});
var G__8551__8553 = (function (_,f,start){
var this__8378 = this;
return cljs.core.ci_reduce.call(null,this__8378.a,f,start,this__8378.i);
});
G__8551 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8551__8552.call(this,_,f);
case  3 :
return G__8551__8553.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8551;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8380 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8382 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8555 = null;
var G__8555__8556 = (function (coll,n){
var this__8384 = this;
var i__8386 = (n + this__8384.i);

if(cljs.core.truth_((i__8386 < this__8384.a.length)))
{return (this__8384.a[i__8386]);
} else
{return null;
}
});
var G__8555__8557 = (function (coll,n,not_found){
var this__8402 = this;
var i__8405 = (n + this__8402.i);

if(cljs.core.truth_((i__8405 < this__8402.a.length)))
{return (this__8402.a[i__8405]);
} else
{return not_found;
}
});
G__8555 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8555__8556.call(this,coll,n);
case  3 :
return G__8555__8557.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8555;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8472 = this;
return (this__8472.a.length - this__8472.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8489 = this;
return (this__8489.a[this__8489.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8490 = this;
if(cljs.core.truth_(((this__8490.i + 1) < this__8490.a.length)))
{return (new cljs.core.IndexedSeq(this__8490.a,(this__8490.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8549 = this;
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
var G__8574 = null;
var G__8574__8575 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8574__8580 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8574 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8574__8575.call(this,array,f);
case  3 :
return G__8574__8580.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8574;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8584 = null;
var G__8584__8585 = (function (array,k){
return (array[k]);
});
var G__8584__8586 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8584 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8584__8585.call(this,array,k);
case  3 :
return G__8584__8586.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8584;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8592 = null;
var G__8592__8593 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8592__8594 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8592 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8592__8593.call(this,array,n);
case  3 :
return G__8592__8594.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8592;
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
var temp__3698__auto____8624 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8624))
{var s__8625 = temp__3698__auto____8624;

return cljs.core._first.call(null,s__8625);
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
var G__8662 = cljs.core.next.call(null,s);
s = G__8662;
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
var s__8665 = cljs.core.seq.call(null,x);
var n__8666 = 0;

while(true){
if(cljs.core.truth_(s__8665))
{{
var G__8688 = cljs.core.next.call(null,s__8665);
var G__8689 = (n__8666 + 1);
s__8665 = G__8688;
n__8666 = G__8689;
continue;
}
} else
{return n__8666;
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
var conj__8698 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8699 = (function() { 
var G__8702__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8704 = conj.call(null,coll,x);
var G__8705 = cljs.core.first.call(null,xs);
var G__8706 = cljs.core.next.call(null,xs);
coll = G__8704;
x = G__8705;
xs = G__8706;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8702 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8702__delegate.call(this, coll, x, xs);
};
G__8702.cljs$lang$maxFixedArity = 2;
G__8702.cljs$lang$applyTo = (function (arglist__8709){
var coll = cljs.core.first(arglist__8709);
var x = cljs.core.first(cljs.core.next(arglist__8709));
var xs = cljs.core.rest(cljs.core.next(arglist__8709));
return G__8702__delegate.call(this, coll, x, xs);
});
return G__8702;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8698.call(this,coll,x);
default:
return conj__8699.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8699.cljs$lang$applyTo;
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
var nth__8728 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8729 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8728.call(this,coll,n);
case  3 :
return nth__8729.call(this,coll,n,not_found);
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
var get__8740 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8741 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8740.call(this,o,k);
case  3 :
return get__8741.call(this,o,k,not_found);
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
var assoc__8753 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8754 = (function() { 
var G__8756__delegate = function (coll,k,v,kvs){
while(true){
var ret__8744 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8757 = ret__8744;
var G__8758 = cljs.core.first.call(null,kvs);
var G__8759 = cljs.core.second.call(null,kvs);
var G__8760 = cljs.core.nnext.call(null,kvs);
coll = G__8757;
k = G__8758;
v = G__8759;
kvs = G__8760;
continue;
}
} else
{return ret__8744;
}
break;
}
};
var G__8756 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8756__delegate.call(this, coll, k, v, kvs);
};
G__8756.cljs$lang$maxFixedArity = 3;
G__8756.cljs$lang$applyTo = (function (arglist__8761){
var coll = cljs.core.first(arglist__8761);
var k = cljs.core.first(cljs.core.next(arglist__8761));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8761)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8761)));
return G__8756__delegate.call(this, coll, k, v, kvs);
});
return G__8756;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8753.call(this,coll,k,v);
default:
return assoc__8754.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8754.cljs$lang$applyTo;
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
var dissoc__8772 = (function (coll){
return coll;
});
var dissoc__8773 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8774 = (function() { 
var G__8779__delegate = function (coll,k,ks){
while(true){
var ret__8771 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8782 = ret__8771;
var G__8783 = cljs.core.first.call(null,ks);
var G__8784 = cljs.core.next.call(null,ks);
coll = G__8782;
k = G__8783;
ks = G__8784;
continue;
}
} else
{return ret__8771;
}
break;
}
};
var G__8779 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8779__delegate.call(this, coll, k, ks);
};
G__8779.cljs$lang$maxFixedArity = 2;
G__8779.cljs$lang$applyTo = (function (arglist__8788){
var coll = cljs.core.first(arglist__8788);
var k = cljs.core.first(cljs.core.next(arglist__8788));
var ks = cljs.core.rest(cljs.core.next(arglist__8788));
return G__8779__delegate.call(this, coll, k, ks);
});
return G__8779;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8772.call(this,coll);
case  2 :
return dissoc__8773.call(this,coll,k);
default:
return dissoc__8774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8774.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8796 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8797 = x__445__auto____8796;

if(cljs.core.truth_(and__3546__auto____8797))
{var and__3546__auto____8798 = x__445__auto____8796.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8798))
{return cljs.core.not.call(null,x__445__auto____8796.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8798;
}
} else
{return and__3546__auto____8797;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8796);
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
var disj__8809 = (function (coll){
return coll;
});
var disj__8810 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8811 = (function() { 
var G__8813__delegate = function (coll,k,ks){
while(true){
var ret__8808 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8814 = ret__8808;
var G__8815 = cljs.core.first.call(null,ks);
var G__8816 = cljs.core.next.call(null,ks);
coll = G__8814;
k = G__8815;
ks = G__8816;
continue;
}
} else
{return ret__8808;
}
break;
}
};
var G__8813 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8813__delegate.call(this, coll, k, ks);
};
G__8813.cljs$lang$maxFixedArity = 2;
G__8813.cljs$lang$applyTo = (function (arglist__8817){
var coll = cljs.core.first(arglist__8817);
var k = cljs.core.first(cljs.core.next(arglist__8817));
var ks = cljs.core.rest(cljs.core.next(arglist__8817));
return G__8813__delegate.call(this, coll, k, ks);
});
return G__8813;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8809.call(this,coll);
case  2 :
return disj__8810.call(this,coll,k);
default:
return disj__8811.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8811.cljs$lang$applyTo;
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
{var x__445__auto____8821 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8824 = x__445__auto____8821;

if(cljs.core.truth_(and__3546__auto____8824))
{var and__3546__auto____8826 = x__445__auto____8821.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8826))
{return cljs.core.not.call(null,x__445__auto____8821.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8826;
}
} else
{return and__3546__auto____8824;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8821);
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
{var x__445__auto____8827 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8828 = x__445__auto____8827;

if(cljs.core.truth_(and__3546__auto____8828))
{var and__3546__auto____8830 = x__445__auto____8827.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8830))
{return cljs.core.not.call(null,x__445__auto____8827.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8830;
}
} else
{return and__3546__auto____8828;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8827);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8836 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8838 = x__445__auto____8836;

if(cljs.core.truth_(and__3546__auto____8838))
{var and__3546__auto____8840 = x__445__auto____8836.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8840))
{return cljs.core.not.call(null,x__445__auto____8836.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8840;
}
} else
{return and__3546__auto____8838;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8836);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8852 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8854 = x__445__auto____8852;

if(cljs.core.truth_(and__3546__auto____8854))
{var and__3546__auto____8855 = x__445__auto____8852.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8855))
{return cljs.core.not.call(null,x__445__auto____8852.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8855;
}
} else
{return and__3546__auto____8854;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8852);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8861 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8862 = x__445__auto____8861;

if(cljs.core.truth_(and__3546__auto____8862))
{var and__3546__auto____8864 = x__445__auto____8861.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8864))
{return cljs.core.not.call(null,x__445__auto____8861.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8864;
}
} else
{return and__3546__auto____8862;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8861);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8869 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8871 = x__445__auto____8869;

if(cljs.core.truth_(and__3546__auto____8871))
{var and__3546__auto____8872 = x__445__auto____8869.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8872))
{return cljs.core.not.call(null,x__445__auto____8869.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8872;
}
} else
{return and__3546__auto____8871;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8869);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8876 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8877 = x__445__auto____8876;

if(cljs.core.truth_(and__3546__auto____8877))
{var and__3546__auto____8878 = x__445__auto____8876.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8878))
{return cljs.core.not.call(null,x__445__auto____8876.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8878;
}
} else
{return and__3546__auto____8877;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8876);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8881 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8881.push(key);
}));
return keys__8881;
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
{var x__445__auto____8931 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8932 = x__445__auto____8931;

if(cljs.core.truth_(and__3546__auto____8932))
{var and__3546__auto____8933 = x__445__auto____8931.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8933))
{return cljs.core.not.call(null,x__445__auto____8931.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8933;
}
} else
{return and__3546__auto____8932;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8931);
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
var and__3546__auto____8938 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8938))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8939 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8939))
{return or__3548__auto____8939;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8938;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8945 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8945))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8945;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8950 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8950))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8950;
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
var and__3546__auto____8957 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8957))
{return (n == n.toFixed());
} else
{return and__3546__auto____8957;
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
if(cljs.core.truth_((function (){var and__3546__auto____8962 = coll;

if(cljs.core.truth_(and__3546__auto____8962))
{var and__3546__auto____8963 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8963))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8963;
}
} else
{return and__3546__auto____8962;
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
var distinct_QMARK___8971 = (function (x){
return true;
});
var distinct_QMARK___8972 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8973 = (function() { 
var G__8975__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8964 = cljs.core.set([y,x]);
var xs__8965 = more;

while(true){
var x__8968 = cljs.core.first.call(null,xs__8965);
var etc__8969 = cljs.core.next.call(null,xs__8965);

if(cljs.core.truth_(xs__8965))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8964,x__8968)))
{return false;
} else
{{
var G__8976 = cljs.core.conj.call(null,s__8964,x__8968);
var G__8977 = etc__8969;
s__8964 = G__8976;
xs__8965 = G__8977;
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
var G__8975 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8975__delegate.call(this, x, y, more);
};
G__8975.cljs$lang$maxFixedArity = 2;
G__8975.cljs$lang$applyTo = (function (arglist__9003){
var x = cljs.core.first(arglist__9003);
var y = cljs.core.first(cljs.core.next(arglist__9003));
var more = cljs.core.rest(cljs.core.next(arglist__9003));
return G__8975__delegate.call(this, x, y, more);
});
return G__8975;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8971.call(this,x);
case  2 :
return distinct_QMARK___8972.call(this,x,y);
default:
return distinct_QMARK___8973.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8973.cljs$lang$applyTo;
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
var r__9014 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9014)))
{return r__9014;
} else
{if(cljs.core.truth_(r__9014))
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
var sort__9033 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9034 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9032 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9032,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9032);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9033.call(this,comp);
case  2 :
return sort__9034.call(this,comp,coll);
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
var sort_by__9049 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9052 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9049.call(this,keyfn,comp);
case  3 :
return sort_by__9052.call(this,keyfn,comp,coll);
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
var reduce__9064 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9067 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9064.call(this,f,val);
case  3 :
return reduce__9067.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9082 = (function (f,coll){
var temp__3695__auto____9078 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9078))
{var s__9079 = temp__3695__auto____9078;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9079),cljs.core.next.call(null,s__9079));
} else
{return f.call(null);
}
});
var seq_reduce__9083 = (function (f,val,coll){
var val__9080 = val;
var coll__9081 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9081))
{{
var G__9095 = f.call(null,val__9080,cljs.core.first.call(null,coll__9081));
var G__9096 = cljs.core.next.call(null,coll__9081);
val__9080 = G__9095;
coll__9081 = G__9096;
continue;
}
} else
{return val__9080;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9082.call(this,f,val);
case  3 :
return seq_reduce__9083.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9100 = null;
var G__9100__9101 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9100__9102 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9100 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9100__9101.call(this,coll,f);
case  3 :
return G__9100__9102.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9100;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9119 = (function (){
return 0;
});
var _PLUS___9120 = (function (x){
return x;
});
var _PLUS___9121 = (function (x,y){
return (x + y);
});
var _PLUS___9122 = (function() { 
var G__9124__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9124 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9124__delegate.call(this, x, y, more);
};
G__9124.cljs$lang$maxFixedArity = 2;
G__9124.cljs$lang$applyTo = (function (arglist__9125){
var x = cljs.core.first(arglist__9125);
var y = cljs.core.first(cljs.core.next(arglist__9125));
var more = cljs.core.rest(cljs.core.next(arglist__9125));
return G__9124__delegate.call(this, x, y, more);
});
return G__9124;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9119.call(this);
case  1 :
return _PLUS___9120.call(this,x);
case  2 :
return _PLUS___9121.call(this,x,y);
default:
return _PLUS___9122.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9122.cljs$lang$applyTo;
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
var ___9138 = (function (x){
return (- x);
});
var ___9139 = (function (x,y){
return (x - y);
});
var ___9140 = (function() { 
var G__9142__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9142 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9142__delegate.call(this, x, y, more);
};
G__9142.cljs$lang$maxFixedArity = 2;
G__9142.cljs$lang$applyTo = (function (arglist__9144){
var x = cljs.core.first(arglist__9144);
var y = cljs.core.first(cljs.core.next(arglist__9144));
var more = cljs.core.rest(cljs.core.next(arglist__9144));
return G__9142__delegate.call(this, x, y, more);
});
return G__9142;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9138.call(this,x);
case  2 :
return ___9139.call(this,x,y);
default:
return ___9140.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9140.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9156 = (function (){
return 1;
});
var _STAR___9157 = (function (x){
return x;
});
var _STAR___9158 = (function (x,y){
return (x * y);
});
var _STAR___9159 = (function() { 
var G__9162__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9162 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9162__delegate.call(this, x, y, more);
};
G__9162.cljs$lang$maxFixedArity = 2;
G__9162.cljs$lang$applyTo = (function (arglist__9164){
var x = cljs.core.first(arglist__9164);
var y = cljs.core.first(cljs.core.next(arglist__9164));
var more = cljs.core.rest(cljs.core.next(arglist__9164));
return G__9162__delegate.call(this, x, y, more);
});
return G__9162;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9156.call(this);
case  1 :
return _STAR___9157.call(this,x);
case  2 :
return _STAR___9158.call(this,x,y);
default:
return _STAR___9159.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9159.cljs$lang$applyTo;
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
var _SLASH___9171 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9172 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9173 = (function() { 
var G__9175__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9175 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9175__delegate.call(this, x, y, more);
};
G__9175.cljs$lang$maxFixedArity = 2;
G__9175.cljs$lang$applyTo = (function (arglist__9176){
var x = cljs.core.first(arglist__9176);
var y = cljs.core.first(cljs.core.next(arglist__9176));
var more = cljs.core.rest(cljs.core.next(arglist__9176));
return G__9175__delegate.call(this, x, y, more);
});
return G__9175;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9171.call(this,x);
case  2 :
return _SLASH___9172.call(this,x,y);
default:
return _SLASH___9173.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9173.cljs$lang$applyTo;
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
var _LT___9290 = (function (x){
return true;
});
var _LT___9291 = (function (x,y){
return (x < y);
});
var _LT___9292 = (function() { 
var G__9295__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9296 = y;
var G__9297 = cljs.core.first.call(null,more);
var G__9298 = cljs.core.next.call(null,more);
x = G__9296;
y = G__9297;
more = G__9298;
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
var G__9295 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9295__delegate.call(this, x, y, more);
};
G__9295.cljs$lang$maxFixedArity = 2;
G__9295.cljs$lang$applyTo = (function (arglist__9299){
var x = cljs.core.first(arglist__9299);
var y = cljs.core.first(cljs.core.next(arglist__9299));
var more = cljs.core.rest(cljs.core.next(arglist__9299));
return G__9295__delegate.call(this, x, y, more);
});
return G__9295;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9290.call(this,x);
case  2 :
return _LT___9291.call(this,x,y);
default:
return _LT___9292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9292.cljs$lang$applyTo;
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
var _LT__EQ___9305 = (function (x){
return true;
});
var _LT__EQ___9306 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9308 = (function() { 
var G__9313__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9316 = y;
var G__9317 = cljs.core.first.call(null,more);
var G__9318 = cljs.core.next.call(null,more);
x = G__9316;
y = G__9317;
more = G__9318;
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
var G__9313 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9313__delegate.call(this, x, y, more);
};
G__9313.cljs$lang$maxFixedArity = 2;
G__9313.cljs$lang$applyTo = (function (arglist__9320){
var x = cljs.core.first(arglist__9320);
var y = cljs.core.first(cljs.core.next(arglist__9320));
var more = cljs.core.rest(cljs.core.next(arglist__9320));
return G__9313__delegate.call(this, x, y, more);
});
return G__9313;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9305.call(this,x);
case  2 :
return _LT__EQ___9306.call(this,x,y);
default:
return _LT__EQ___9308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9308.cljs$lang$applyTo;
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
var _GT___9333 = (function (x){
return true;
});
var _GT___9334 = (function (x,y){
return (x > y);
});
var _GT___9335 = (function() { 
var G__9337__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9338 = y;
var G__9339 = cljs.core.first.call(null,more);
var G__9341 = cljs.core.next.call(null,more);
x = G__9338;
y = G__9339;
more = G__9341;
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
var G__9337 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9337__delegate.call(this, x, y, more);
};
G__9337.cljs$lang$maxFixedArity = 2;
G__9337.cljs$lang$applyTo = (function (arglist__9343){
var x = cljs.core.first(arglist__9343);
var y = cljs.core.first(cljs.core.next(arglist__9343));
var more = cljs.core.rest(cljs.core.next(arglist__9343));
return G__9337__delegate.call(this, x, y, more);
});
return G__9337;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9333.call(this,x);
case  2 :
return _GT___9334.call(this,x,y);
default:
return _GT___9335.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9335.cljs$lang$applyTo;
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
var _GT__EQ___9371 = (function (x){
return true;
});
var _GT__EQ___9372 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9373 = (function() { 
var G__9375__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9379 = y;
var G__9380 = cljs.core.first.call(null,more);
var G__9381 = cljs.core.next.call(null,more);
x = G__9379;
y = G__9380;
more = G__9381;
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
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9371.call(this,x);
case  2 :
return _GT__EQ___9372.call(this,x,y);
default:
return _GT__EQ___9373.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9373.cljs$lang$applyTo;
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
var max__9391 = (function (x){
return x;
});
var max__9392 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9393 = (function() { 
var G__9395__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9395 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9395__delegate.call(this, x, y, more);
};
G__9395.cljs$lang$maxFixedArity = 2;
G__9395.cljs$lang$applyTo = (function (arglist__9396){
var x = cljs.core.first(arglist__9396);
var y = cljs.core.first(cljs.core.next(arglist__9396));
var more = cljs.core.rest(cljs.core.next(arglist__9396));
return G__9395__delegate.call(this, x, y, more);
});
return G__9395;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9391.call(this,x);
case  2 :
return max__9392.call(this,x,y);
default:
return max__9393.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9393.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9402 = (function (x){
return x;
});
var min__9403 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9404 = (function() { 
var G__9409__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9409 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9409__delegate.call(this, x, y, more);
};
G__9409.cljs$lang$maxFixedArity = 2;
G__9409.cljs$lang$applyTo = (function (arglist__9410){
var x = cljs.core.first(arglist__9410);
var y = cljs.core.first(cljs.core.next(arglist__9410));
var more = cljs.core.rest(cljs.core.next(arglist__9410));
return G__9409__delegate.call(this, x, y, more);
});
return G__9409;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9402.call(this,x);
case  2 :
return min__9403.call(this,x,y);
default:
return min__9404.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9404.cljs$lang$applyTo;
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
var rem__9524 = (n % d);

return cljs.core.fix.call(null,((n - rem__9524) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9527 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9527));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9528 = (function (){
return Math.random.call(null);
});
var rand__9529 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9528.call(this);
case  1 :
return rand__9529.call(this,n);
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
var _EQ__EQ___9563 = (function (x){
return true;
});
var _EQ__EQ___9564 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9565 = (function() { 
var G__9567__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9568 = y;
var G__9570 = cljs.core.first.call(null,more);
var G__9571 = cljs.core.next.call(null,more);
x = G__9568;
y = G__9570;
more = G__9571;
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
var G__9567 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9567__delegate.call(this, x, y, more);
};
G__9567.cljs$lang$maxFixedArity = 2;
G__9567.cljs$lang$applyTo = (function (arglist__9574){
var x = cljs.core.first(arglist__9574);
var y = cljs.core.first(cljs.core.next(arglist__9574));
var more = cljs.core.rest(cljs.core.next(arglist__9574));
return G__9567__delegate.call(this, x, y, more);
});
return G__9567;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9563.call(this,x);
case  2 :
return _EQ__EQ___9564.call(this,x,y);
default:
return _EQ__EQ___9565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9565.cljs$lang$applyTo;
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
var n__9707 = n;
var xs__9800 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9802 = xs__9800;

if(cljs.core.truth_(and__3546__auto____9802))
{return (n__9707 > 0);
} else
{return and__3546__auto____9802;
}
})()))
{{
var G__9804 = (n__9707 - 1);
var G__9805 = cljs.core.next.call(null,xs__9800);
n__9707 = G__9804;
xs__9800 = G__9805;
continue;
}
} else
{return xs__9800;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9816 = null;
var G__9816__9817 = (function (coll,n){
var temp__3695__auto____9807 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9807))
{var xs__9809 = temp__3695__auto____9807;

return cljs.core.first.call(null,xs__9809);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9816__9818 = (function (coll,n,not_found){
var temp__3695__auto____9812 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9812))
{var xs__9814 = temp__3695__auto____9812;

return cljs.core.first.call(null,xs__9814);
} else
{return not_found;
}
});
G__9816 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9816__9817.call(this,coll,n);
case  3 :
return G__9816__9818.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9816;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9827 = (function (){
return "";
});
var str_STAR___9828 = (function (x){
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
var str_STAR___9829 = (function() { 
var G__9833__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9834 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9835 = cljs.core.next.call(null,more);
sb = G__9834;
more = G__9835;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9833 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9833__delegate.call(this, x, ys);
};
G__9833.cljs$lang$maxFixedArity = 1;
G__9833.cljs$lang$applyTo = (function (arglist__9838){
var x = cljs.core.first(arglist__9838);
var ys = cljs.core.rest(arglist__9838);
return G__9833__delegate.call(this, x, ys);
});
return G__9833;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9827.call(this);
case  1 :
return str_STAR___9828.call(this,x);
default:
return str_STAR___9829.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9829.cljs$lang$applyTo;
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
var str__9839 = (function (){
return "";
});
var str__9840 = (function (x){
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
var str__9841 = (function() { 
var G__9843__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9843 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9843__delegate.call(this, x, ys);
};
G__9843.cljs$lang$maxFixedArity = 1;
G__9843.cljs$lang$applyTo = (function (arglist__9844){
var x = cljs.core.first(arglist__9844);
var ys = cljs.core.rest(arglist__9844);
return G__9843__delegate.call(this, x, ys);
});
return G__9843;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9839.call(this);
case  1 :
return str__9840.call(this,x);
default:
return str__9841.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9841.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9850 = (function (s,start){
return s.substring(start);
});
var subs__9851 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9850.call(this,s,start);
case  3 :
return subs__9851.call(this,s,start,end);
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
var symbol__9855 = (function (name){
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
var symbol__9856 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9855.call(this,ns);
case  2 :
return symbol__9856.call(this,ns,name);
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
var keyword__9865 = (function (name){
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
var keyword__9866 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9865.call(this,ns);
case  2 :
return keyword__9866.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9919 = cljs.core.seq.call(null,x);
var ys__9920 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9919)))
{return cljs.core.nil_QMARK_.call(null,ys__9920);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9920)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9919),cljs.core.first.call(null,ys__9920))))
{{
var G__9938 = cljs.core.next.call(null,xs__9919);
var G__9940 = cljs.core.next.call(null,ys__9920);
xs__9919 = G__9938;
ys__9920 = G__9940;
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
return cljs.core.reduce.call(null,(function (p1__9941_SHARP_,p2__9942_SHARP_){
return cljs.core.hash_combine.call(null,p1__9941_SHARP_,cljs.core.hash.call(null,p2__9942_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9955__9956 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9955__9956))
{var G__9958__9960 = cljs.core.first.call(null,G__9955__9956);
var vec__9959__9961 = G__9958__9960;
var key_name__9962 = cljs.core.nth.call(null,vec__9959__9961,0,null);
var f__9963 = cljs.core.nth.call(null,vec__9959__9961,1,null);
var G__9955__9964 = G__9955__9956;

var G__9958__9965 = G__9958__9960;
var G__9955__9966 = G__9955__9964;

while(true){
var vec__9967__9968 = G__9958__9965;
var key_name__9969 = cljs.core.nth.call(null,vec__9967__9968,0,null);
var f__9970 = cljs.core.nth.call(null,vec__9967__9968,1,null);
var G__9955__9971 = G__9955__9966;

var str_name__9972 = cljs.core.name.call(null,key_name__9969);

obj[str_name__9972] = f__9970;
var temp__3698__auto____9973 = cljs.core.next.call(null,G__9955__9971);

if(cljs.core.truth_(temp__3698__auto____9973))
{var G__9955__9975 = temp__3698__auto____9973;

{
var G__9978 = cljs.core.first.call(null,G__9955__9975);
var G__9980 = G__9955__9975;
G__9958__9965 = G__9978;
G__9955__9966 = G__9980;
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
var this__10003 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10004 = this;
return (new cljs.core.List(this__10004.meta,o,coll,(this__10004.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10005 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10006 = this;
return this__10006.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10007 = this;
return this__10007.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10008 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10010 = this;
return this__10010.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10011 = this;
return this__10011.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10014 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10020 = this;
return (new cljs.core.List(meta,this__10020.first,this__10020.rest,this__10020.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10023 = this;
return this__10023.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10029 = this;
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
var this__10039 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10040 = this;
return (new cljs.core.List(this__10040.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10041 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10042 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10043 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10044 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10046 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10047 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10048 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10049 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10050 = this;
return this__10050.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10051 = this;
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
list.cljs$lang$applyTo = (function (arglist__10089){
var items = cljs.core.seq( arglist__10089 );;
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
var this__10100 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10102 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10107 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10108 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10108.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10109 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10110 = this;
return this__10110.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10111 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10111.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10111.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10112 = this;
return this__10112.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10113 = this;
return (new cljs.core.Cons(meta,this__10113.first,this__10113.rest));
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
var G__10130 = null;
var G__10130__10131 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10130__10132 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10130 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10130__10131.call(this,string,f);
case  3 :
return G__10130__10132.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10130;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10136 = null;
var G__10136__10138 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10136__10139 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10136 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10136__10138.call(this,string,k);
case  3 :
return G__10136__10139.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10136;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10144 = null;
var G__10144__10145 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10144__10146 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10144 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10144__10145.call(this,string,n);
case  3 :
return G__10144__10146.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10144;
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
var G__10162 = null;
var G__10162__10163 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10162__10164 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10162 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10162__10163.call(this,this$,coll);
case  3 :
return G__10162__10164.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10162;
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
var x__10179 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10179;
} else
{lazy_seq.x = x__10179.call(null);
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
var this__10312 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10314 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10316 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10317 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10317.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10318 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10319 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10320 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10321 = this;
return this__10321.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10322 = this;
return (new cljs.core.LazySeq(meta,this__10322.realized,this__10322.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10328 = cljs.core.array.call(null);

var s__10329 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10329)))
{ary__10328.push(cljs.core.first.call(null,s__10329));
{
var G__10330 = cljs.core.next.call(null,s__10329);
s__10329 = G__10330;
continue;
}
} else
{return ary__10328;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10331 = s;
var i__10332 = n;
var sum__10333 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10334 = (i__10332 > 0);

if(cljs.core.truth_(and__3546__auto____10334))
{return cljs.core.seq.call(null,s__10331);
} else
{return and__3546__auto____10334;
}
})()))
{{
var G__10335 = cljs.core.next.call(null,s__10331);
var G__10336 = (i__10332 - 1);
var G__10337 = (sum__10333 + 1);
s__10331 = G__10335;
i__10332 = G__10336;
sum__10333 = G__10337;
continue;
}
} else
{return sum__10333;
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
var concat__10351 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10352 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10353 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10346 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10346))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10346),concat.call(null,cljs.core.rest.call(null,s__10346),y));
} else
{return y;
}
})));
});
var concat__10354 = (function() { 
var G__10375__delegate = function (x,y,zs){
var cat__10348 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10347 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10347))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10347),cat.call(null,cljs.core.rest.call(null,xys__10347),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10348.call(null,concat.call(null,x,y),zs);
};
var G__10375 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10375__delegate.call(this, x, y, zs);
};
G__10375.cljs$lang$maxFixedArity = 2;
G__10375.cljs$lang$applyTo = (function (arglist__10378){
var x = cljs.core.first(arglist__10378);
var y = cljs.core.first(cljs.core.next(arglist__10378));
var zs = cljs.core.rest(cljs.core.next(arglist__10378));
return G__10375__delegate.call(this, x, y, zs);
});
return G__10375;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10351.call(this);
case  1 :
return concat__10352.call(this,x);
case  2 :
return concat__10353.call(this,x,y);
default:
return concat__10354.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10354.cljs$lang$applyTo;
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
var list_STAR___10389 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10390 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10392 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10395 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10397 = (function() { 
var G__10426__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10426 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10426__delegate.call(this, a, b, c, d, more);
};
G__10426.cljs$lang$maxFixedArity = 4;
G__10426.cljs$lang$applyTo = (function (arglist__10428){
var a = cljs.core.first(arglist__10428);
var b = cljs.core.first(cljs.core.next(arglist__10428));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10428)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10428))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10428))));
return G__10426__delegate.call(this, a, b, c, d, more);
});
return G__10426;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10389.call(this,a);
case  2 :
return list_STAR___10390.call(this,a,b);
case  3 :
return list_STAR___10392.call(this,a,b,c);
case  4 :
return list_STAR___10395.call(this,a,b,c,d);
default:
return list_STAR___10397.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10397.cljs$lang$applyTo;
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
var apply__10467 = (function (f,args){
var fixed_arity__10437 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10437 + 1)) <= fixed_arity__10437)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10468 = (function (f,x,args){
var arglist__10438 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10439 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10438,fixed_arity__10439) <= fixed_arity__10439)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10438));
} else
{return f.cljs$lang$applyTo(arglist__10438);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10438));
}
});
var apply__10469 = (function (f,x,y,args){
var arglist__10443 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10444 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10443,fixed_arity__10444) <= fixed_arity__10444)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10443));
} else
{return f.cljs$lang$applyTo(arglist__10443);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10443));
}
});
var apply__10470 = (function (f,x,y,z,args){
var arglist__10448 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10449 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10448,fixed_arity__10449) <= fixed_arity__10449)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10448));
} else
{return f.cljs$lang$applyTo(arglist__10448);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10448));
}
});
var apply__10471 = (function() { 
var G__10481__delegate = function (f,a,b,c,d,args){
var arglist__10457 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10462 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10457,fixed_arity__10462) <= fixed_arity__10462)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10457));
} else
{return f.cljs$lang$applyTo(arglist__10457);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10457));
}
};
var G__10481 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10481__delegate.call(this, f, a, b, c, d, args);
};
G__10481.cljs$lang$maxFixedArity = 5;
G__10481.cljs$lang$applyTo = (function (arglist__10482){
var f = cljs.core.first(arglist__10482);
var a = cljs.core.first(cljs.core.next(arglist__10482));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10482)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10482))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10482)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10482)))));
return G__10481__delegate.call(this, f, a, b, c, d, args);
});
return G__10481;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10467.call(this,f,a);
case  3 :
return apply__10468.call(this,f,a,b);
case  4 :
return apply__10469.call(this,f,a,b,c);
case  5 :
return apply__10470.call(this,f,a,b,c,d);
default:
return apply__10471.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10471.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10532){
var obj = cljs.core.first(arglist__10532);
var f = cljs.core.first(cljs.core.next(arglist__10532));
var args = cljs.core.rest(cljs.core.next(arglist__10532));
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
var not_EQ___10537 = (function (x){
return false;
});
var not_EQ___10538 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10539 = (function() { 
var G__10541__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10541 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10541__delegate.call(this, x, y, more);
};
G__10541.cljs$lang$maxFixedArity = 2;
G__10541.cljs$lang$applyTo = (function (arglist__10542){
var x = cljs.core.first(arglist__10542);
var y = cljs.core.first(cljs.core.next(arglist__10542));
var more = cljs.core.rest(cljs.core.next(arglist__10542));
return G__10541__delegate.call(this, x, y, more);
});
return G__10541;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10537.call(this,x);
case  2 :
return not_EQ___10538.call(this,x,y);
default:
return not_EQ___10539.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10539.cljs$lang$applyTo;
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
var G__10564 = pred;
var G__10565 = cljs.core.next.call(null,coll);
pred = G__10564;
coll = G__10565;
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
{var or__3548__auto____10568 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10568))
{return or__3548__auto____10568;
} else
{{
var G__10570 = pred;
var G__10571 = cljs.core.next.call(null,coll);
pred = G__10570;
coll = G__10571;
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
var G__10605 = null;
var G__10605__10606 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10605__10607 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10605__10608 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10605__10609 = (function() { 
var G__10612__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10612 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10612__delegate.call(this, x, y, zs);
};
G__10612.cljs$lang$maxFixedArity = 2;
G__10612.cljs$lang$applyTo = (function (arglist__10615){
var x = cljs.core.first(arglist__10615);
var y = cljs.core.first(cljs.core.next(arglist__10615));
var zs = cljs.core.rest(cljs.core.next(arglist__10615));
return G__10612__delegate.call(this, x, y, zs);
});
return G__10612;
})()
;
G__10605 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10605__10606.call(this);
case  1 :
return G__10605__10607.call(this,x);
case  2 :
return G__10605__10608.call(this,x,y);
default:
return G__10605__10609.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10605.cljs$lang$maxFixedArity = 2;
G__10605.cljs$lang$applyTo = G__10605__10609.cljs$lang$applyTo;
return G__10605;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10622__delegate = function (args){
return x;
};
var G__10622 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10622__delegate.call(this, args);
};
G__10622.cljs$lang$maxFixedArity = 0;
G__10622.cljs$lang$applyTo = (function (arglist__10623){
var args = cljs.core.seq( arglist__10623 );;
return G__10622__delegate.call(this, args);
});
return G__10622;
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
var comp__10650 = (function (){
return cljs.core.identity;
});
var comp__10651 = (function (f){
return f;
});
var comp__10652 = (function (f,g){
return (function() {
var G__10662 = null;
var G__10662__10663 = (function (){
return f.call(null,g.call(null));
});
var G__10662__10664 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10662__10665 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10662__10666 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10662__10669 = (function() { 
var G__10673__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10673 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10673__delegate.call(this, x, y, z, args);
};
G__10673.cljs$lang$maxFixedArity = 3;
G__10673.cljs$lang$applyTo = (function (arglist__10674){
var x = cljs.core.first(arglist__10674);
var y = cljs.core.first(cljs.core.next(arglist__10674));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10674)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10674)));
return G__10673__delegate.call(this, x, y, z, args);
});
return G__10673;
})()
;
G__10662 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10662__10663.call(this);
case  1 :
return G__10662__10664.call(this,x);
case  2 :
return G__10662__10665.call(this,x,y);
case  3 :
return G__10662__10666.call(this,x,y,z);
default:
return G__10662__10669.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10662.cljs$lang$maxFixedArity = 3;
G__10662.cljs$lang$applyTo = G__10662__10669.cljs$lang$applyTo;
return G__10662;
})()
});
var comp__10653 = (function (f,g,h){
return (function() {
var G__10720 = null;
var G__10720__10725 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10720__10726 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10720__10727 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10720__10728 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10720__10729 = (function() { 
var G__10733__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10733 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10733__delegate.call(this, x, y, z, args);
};
G__10733.cljs$lang$maxFixedArity = 3;
G__10733.cljs$lang$applyTo = (function (arglist__10735){
var x = cljs.core.first(arglist__10735);
var y = cljs.core.first(cljs.core.next(arglist__10735));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10735)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10735)));
return G__10733__delegate.call(this, x, y, z, args);
});
return G__10733;
})()
;
G__10720 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10720__10725.call(this);
case  1 :
return G__10720__10726.call(this,x);
case  2 :
return G__10720__10727.call(this,x,y);
case  3 :
return G__10720__10728.call(this,x,y,z);
default:
return G__10720__10729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10720.cljs$lang$maxFixedArity = 3;
G__10720.cljs$lang$applyTo = G__10720__10729.cljs$lang$applyTo;
return G__10720;
})()
});
var comp__10654 = (function() { 
var G__10741__delegate = function (f1,f2,f3,fs){
var fs__10628 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10742__delegate = function (args){
var ret__10640 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10628),args);
var fs__10641 = cljs.core.next.call(null,fs__10628);

while(true){
if(cljs.core.truth_(fs__10641))
{{
var G__10744 = cljs.core.first.call(null,fs__10641).call(null,ret__10640);
var G__10745 = cljs.core.next.call(null,fs__10641);
ret__10640 = G__10744;
fs__10641 = G__10745;
continue;
}
} else
{return ret__10640;
}
break;
}
};
var G__10742 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10742__delegate.call(this, args);
};
G__10742.cljs$lang$maxFixedArity = 0;
G__10742.cljs$lang$applyTo = (function (arglist__10748){
var args = cljs.core.seq( arglist__10748 );;
return G__10742__delegate.call(this, args);
});
return G__10742;
})()
;
};
var G__10741 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10741__delegate.call(this, f1, f2, f3, fs);
};
G__10741.cljs$lang$maxFixedArity = 3;
G__10741.cljs$lang$applyTo = (function (arglist__10750){
var f1 = cljs.core.first(arglist__10750);
var f2 = cljs.core.first(cljs.core.next(arglist__10750));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10750)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10750)));
return G__10741__delegate.call(this, f1, f2, f3, fs);
});
return G__10741;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10650.call(this);
case  1 :
return comp__10651.call(this,f1);
case  2 :
return comp__10652.call(this,f1,f2);
case  3 :
return comp__10653.call(this,f1,f2,f3);
default:
return comp__10654.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10654.cljs$lang$applyTo;
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
var partial__10768 = (function (f,arg1){
return (function() { 
var G__10773__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10773 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10773__delegate.call(this, args);
};
G__10773.cljs$lang$maxFixedArity = 0;
G__10773.cljs$lang$applyTo = (function (arglist__10776){
var args = cljs.core.seq( arglist__10776 );;
return G__10773__delegate.call(this, args);
});
return G__10773;
})()
;
});
var partial__10769 = (function (f,arg1,arg2){
return (function() { 
var G__10777__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10777 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10777__delegate.call(this, args);
};
G__10777.cljs$lang$maxFixedArity = 0;
G__10777.cljs$lang$applyTo = (function (arglist__10779){
var args = cljs.core.seq( arglist__10779 );;
return G__10777__delegate.call(this, args);
});
return G__10777;
})()
;
});
var partial__10770 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10780__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10780 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10780__delegate.call(this, args);
};
G__10780.cljs$lang$maxFixedArity = 0;
G__10780.cljs$lang$applyTo = (function (arglist__10781){
var args = cljs.core.seq( arglist__10781 );;
return G__10780__delegate.call(this, args);
});
return G__10780;
})()
;
});
var partial__10771 = (function() { 
var G__10782__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10783__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10783 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10783__delegate.call(this, args);
};
G__10783.cljs$lang$maxFixedArity = 0;
G__10783.cljs$lang$applyTo = (function (arglist__10784){
var args = cljs.core.seq( arglist__10784 );;
return G__10783__delegate.call(this, args);
});
return G__10783;
})()
;
};
var G__10782 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10782__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10782.cljs$lang$maxFixedArity = 4;
G__10782.cljs$lang$applyTo = (function (arglist__10791){
var f = cljs.core.first(arglist__10791);
var arg1 = cljs.core.first(cljs.core.next(arglist__10791));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10791)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10791))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10791))));
return G__10782__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10782;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10768.call(this,f,arg1);
case  3 :
return partial__10769.call(this,f,arg1,arg2);
case  4 :
return partial__10770.call(this,f,arg1,arg2,arg3);
default:
return partial__10771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10771.cljs$lang$applyTo;
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
var fnil__10821 = (function (f,x){
return (function() {
var G__10827 = null;
var G__10827__10829 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10827__10830 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10827__10832 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10827__10833 = (function() { 
var G__10839__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10839 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10839__delegate.call(this, a, b, c, ds);
};
G__10839.cljs$lang$maxFixedArity = 3;
G__10839.cljs$lang$applyTo = (function (arglist__10843){
var a = cljs.core.first(arglist__10843);
var b = cljs.core.first(cljs.core.next(arglist__10843));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10843)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10843)));
return G__10839__delegate.call(this, a, b, c, ds);
});
return G__10839;
})()
;
G__10827 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10827__10829.call(this,a);
case  2 :
return G__10827__10830.call(this,a,b);
case  3 :
return G__10827__10832.call(this,a,b,c);
default:
return G__10827__10833.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10827.cljs$lang$maxFixedArity = 3;
G__10827.cljs$lang$applyTo = G__10827__10833.cljs$lang$applyTo;
return G__10827;
})()
});
var fnil__10822 = (function (f,x,y){
return (function() {
var G__10845 = null;
var G__10845__10846 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10845__10847 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10845__10849 = (function() { 
var G__10852__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10852 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10852__delegate.call(this, a, b, c, ds);
};
G__10852.cljs$lang$maxFixedArity = 3;
G__10852.cljs$lang$applyTo = (function (arglist__10855){
var a = cljs.core.first(arglist__10855);
var b = cljs.core.first(cljs.core.next(arglist__10855));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10855)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10855)));
return G__10852__delegate.call(this, a, b, c, ds);
});
return G__10852;
})()
;
G__10845 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10845__10846.call(this,a,b);
case  3 :
return G__10845__10847.call(this,a,b,c);
default:
return G__10845__10849.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10845.cljs$lang$maxFixedArity = 3;
G__10845.cljs$lang$applyTo = G__10845__10849.cljs$lang$applyTo;
return G__10845;
})()
});
var fnil__10823 = (function (f,x,y,z){
return (function() {
var G__10862 = null;
var G__10862__10863 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10862__10864 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10862__10866 = (function() { 
var G__10874__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10874 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10874__delegate.call(this, a, b, c, ds);
};
G__10874.cljs$lang$maxFixedArity = 3;
G__10874.cljs$lang$applyTo = (function (arglist__10876){
var a = cljs.core.first(arglist__10876);
var b = cljs.core.first(cljs.core.next(arglist__10876));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10876)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10876)));
return G__10874__delegate.call(this, a, b, c, ds);
});
return G__10874;
})()
;
G__10862 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10862__10863.call(this,a,b);
case  3 :
return G__10862__10864.call(this,a,b,c);
default:
return G__10862__10866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10862.cljs$lang$maxFixedArity = 3;
G__10862.cljs$lang$applyTo = G__10862__10866.cljs$lang$applyTo;
return G__10862;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10821.call(this,f,x);
case  3 :
return fnil__10822.call(this,f,x,y);
case  4 :
return fnil__10823.call(this,f,x,y,z);
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
var mapi__10976 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10946 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10946))
{var s__10948 = temp__3698__auto____10946;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10948)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10948)));
} else
{return null;
}
})));
});

return mapi__10976.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10988 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10988))
{var s__10989 = temp__3698__auto____10988;

var x__10990 = f.call(null,cljs.core.first.call(null,s__10989));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10990)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10989));
} else
{return cljs.core.cons.call(null,x__10990,keep.call(null,f,cljs.core.rest.call(null,s__10989)));
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
var keepi__11026 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11020 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11020))
{var s__11022 = temp__3698__auto____11020;

var x__11024 = f.call(null,idx,cljs.core.first.call(null,s__11022));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11024)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11022));
} else
{return cljs.core.cons.call(null,x__11024,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11022)));
}
} else
{return null;
}
})));
});

return keepi__11026.call(null,0,coll);
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
var every_pred__11345 = (function (p){
return (function() {
var ep1 = null;
var ep1__11351 = (function (){
return true;
});
var ep1__11353 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11354 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11046 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11046))
{return p.call(null,y);
} else
{return and__3546__auto____11046;
}
})());
});
var ep1__11355 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11050 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11050))
{var and__3546__auto____11052 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11052))
{return p.call(null,z);
} else
{return and__3546__auto____11052;
}
} else
{return and__3546__auto____11050;
}
})());
});
var ep1__11356 = (function() { 
var G__11365__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11054 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11054))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11054;
}
})());
};
var G__11365 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11365__delegate.call(this, x, y, z, args);
};
G__11365.cljs$lang$maxFixedArity = 3;
G__11365.cljs$lang$applyTo = (function (arglist__11367){
var x = cljs.core.first(arglist__11367);
var y = cljs.core.first(cljs.core.next(arglist__11367));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11367)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11367)));
return G__11365__delegate.call(this, x, y, z, args);
});
return G__11365;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11351.call(this);
case  1 :
return ep1__11353.call(this,x);
case  2 :
return ep1__11354.call(this,x,y);
case  3 :
return ep1__11355.call(this,x,y,z);
default:
return ep1__11356.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11356.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11346 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11375 = (function (){
return true;
});
var ep2__11377 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11056 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11056))
{return p2.call(null,x);
} else
{return and__3546__auto____11056;
}
})());
});
var ep2__11379 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11058 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11058))
{var and__3546__auto____11060 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11060))
{var and__3546__auto____11061 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11061))
{return p2.call(null,y);
} else
{return and__3546__auto____11061;
}
} else
{return and__3546__auto____11060;
}
} else
{return and__3546__auto____11058;
}
})());
});
var ep2__11381 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11066 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11066))
{var and__3546__auto____11069 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11069))
{var and__3546__auto____11074 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11074))
{var and__3546__auto____11077 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11077))
{var and__3546__auto____11080 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11080))
{return p2.call(null,z);
} else
{return and__3546__auto____11080;
}
} else
{return and__3546__auto____11077;
}
} else
{return and__3546__auto____11074;
}
} else
{return and__3546__auto____11069;
}
} else
{return and__3546__auto____11066;
}
})());
});
var ep2__11383 = (function() { 
var G__11399__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11085 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11085))
{return cljs.core.every_QMARK_.call(null,(function (p1__11001_SHARP_){
var and__3546__auto____11090 = p1.call(null,p1__11001_SHARP_);

if(cljs.core.truth_(and__3546__auto____11090))
{return p2.call(null,p1__11001_SHARP_);
} else
{return and__3546__auto____11090;
}
}),args);
} else
{return and__3546__auto____11085;
}
})());
};
var G__11399 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11399__delegate.call(this, x, y, z, args);
};
G__11399.cljs$lang$maxFixedArity = 3;
G__11399.cljs$lang$applyTo = (function (arglist__11407){
var x = cljs.core.first(arglist__11407);
var y = cljs.core.first(cljs.core.next(arglist__11407));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11407)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11407)));
return G__11399__delegate.call(this, x, y, z, args);
});
return G__11399;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11375.call(this);
case  1 :
return ep2__11377.call(this,x);
case  2 :
return ep2__11379.call(this,x,y);
case  3 :
return ep2__11381.call(this,x,y,z);
default:
return ep2__11383.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11383.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11347 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11414 = (function (){
return true;
});
var ep3__11415 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11094 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11094))
{var and__3546__auto____11102 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11102))
{return p3.call(null,x);
} else
{return and__3546__auto____11102;
}
} else
{return and__3546__auto____11094;
}
})());
});
var ep3__11416 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11103 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11103))
{var and__3546__auto____11105 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11105))
{var and__3546__auto____11106 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11106))
{var and__3546__auto____11168 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11168))
{var and__3546__auto____11170 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11170))
{return p3.call(null,y);
} else
{return and__3546__auto____11170;
}
} else
{return and__3546__auto____11168;
}
} else
{return and__3546__auto____11106;
}
} else
{return and__3546__auto____11105;
}
} else
{return and__3546__auto____11103;
}
})());
});
var ep3__11417 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11172 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11172))
{var and__3546__auto____11173 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11173))
{var and__3546__auto____11181 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11181))
{var and__3546__auto____11182 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11182))
{var and__3546__auto____11184 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11184))
{var and__3546__auto____11186 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11186))
{var and__3546__auto____11187 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11187))
{var and__3546__auto____11189 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11189))
{return p3.call(null,z);
} else
{return and__3546__auto____11189;
}
} else
{return and__3546__auto____11187;
}
} else
{return and__3546__auto____11186;
}
} else
{return and__3546__auto____11184;
}
} else
{return and__3546__auto____11182;
}
} else
{return and__3546__auto____11181;
}
} else
{return and__3546__auto____11173;
}
} else
{return and__3546__auto____11172;
}
})());
});
var ep3__11418 = (function() { 
var G__11436__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11193 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11193))
{return cljs.core.every_QMARK_.call(null,(function (p1__11011_SHARP_){
var and__3546__auto____11195 = p1.call(null,p1__11011_SHARP_);

if(cljs.core.truth_(and__3546__auto____11195))
{var and__3546__auto____11198 = p2.call(null,p1__11011_SHARP_);

if(cljs.core.truth_(and__3546__auto____11198))
{return p3.call(null,p1__11011_SHARP_);
} else
{return and__3546__auto____11198;
}
} else
{return and__3546__auto____11195;
}
}),args);
} else
{return and__3546__auto____11193;
}
})());
};
var G__11436 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11436__delegate.call(this, x, y, z, args);
};
G__11436.cljs$lang$maxFixedArity = 3;
G__11436.cljs$lang$applyTo = (function (arglist__11457){
var x = cljs.core.first(arglist__11457);
var y = cljs.core.first(cljs.core.next(arglist__11457));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11457)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11457)));
return G__11436__delegate.call(this, x, y, z, args);
});
return G__11436;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11414.call(this);
case  1 :
return ep3__11415.call(this,x);
case  2 :
return ep3__11416.call(this,x,y);
case  3 :
return ep3__11417.call(this,x,y,z);
default:
return ep3__11418.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11418.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11348 = (function() { 
var G__11458__delegate = function (p1,p2,p3,ps){
var ps__11202 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11459 = (function (){
return true;
});
var epn__11460 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11013_SHARP_){
return p1__11013_SHARP_.call(null,x);
}),ps__11202);
});
var epn__11461 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11014_SHARP_){
var and__3546__auto____11331 = p1__11014_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11331))
{return p1__11014_SHARP_.call(null,y);
} else
{return and__3546__auto____11331;
}
}),ps__11202);
});
var epn__11462 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11015_SHARP_){
var and__3546__auto____11334 = p1__11015_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11334))
{var and__3546__auto____11337 = p1__11015_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11337))
{return p1__11015_SHARP_.call(null,z);
} else
{return and__3546__auto____11337;
}
} else
{return and__3546__auto____11334;
}
}),ps__11202);
});
var epn__11463 = (function() { 
var G__11467__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11341 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11341))
{return cljs.core.every_QMARK_.call(null,(function (p1__11016_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11016_SHARP_,args);
}),ps__11202);
} else
{return and__3546__auto____11341;
}
})());
};
var G__11467 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11467__delegate.call(this, x, y, z, args);
};
G__11467.cljs$lang$maxFixedArity = 3;
G__11467.cljs$lang$applyTo = (function (arglist__11475){
var x = cljs.core.first(arglist__11475);
var y = cljs.core.first(cljs.core.next(arglist__11475));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11475)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11475)));
return G__11467__delegate.call(this, x, y, z, args);
});
return G__11467;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11459.call(this);
case  1 :
return epn__11460.call(this,x);
case  2 :
return epn__11461.call(this,x,y);
case  3 :
return epn__11462.call(this,x,y,z);
default:
return epn__11463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11463.cljs$lang$applyTo;
return epn;
})()
};
var G__11458 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11458__delegate.call(this, p1, p2, p3, ps);
};
G__11458.cljs$lang$maxFixedArity = 3;
G__11458.cljs$lang$applyTo = (function (arglist__11476){
var p1 = cljs.core.first(arglist__11476);
var p2 = cljs.core.first(cljs.core.next(arglist__11476));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11476)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11476)));
return G__11458__delegate.call(this, p1, p2, p3, ps);
});
return G__11458;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11345.call(this,p1);
case  2 :
return every_pred__11346.call(this,p1,p2);
case  3 :
return every_pred__11347.call(this,p1,p2,p3);
default:
return every_pred__11348.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11348.cljs$lang$applyTo;
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
var some_fn__11709 = (function (p){
return (function() {
var sp1 = null;
var sp1__11718 = (function (){
return null;
});
var sp1__11719 = (function (x){
return p.call(null,x);
});
var sp1__11720 = (function (x,y){
var or__3548__auto____11490 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11490))
{return or__3548__auto____11490;
} else
{return p.call(null,y);
}
});
var sp1__11721 = (function (x,y,z){
var or__3548__auto____11491 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11491))
{return or__3548__auto____11491;
} else
{var or__3548__auto____11492 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11492))
{return or__3548__auto____11492;
} else
{return p.call(null,z);
}
}
});
var sp1__11723 = (function() { 
var G__11736__delegate = function (x,y,z,args){
var or__3548__auto____11495 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11495))
{return or__3548__auto____11495;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11736 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11736__delegate.call(this, x, y, z, args);
};
G__11736.cljs$lang$maxFixedArity = 3;
G__11736.cljs$lang$applyTo = (function (arglist__11739){
var x = cljs.core.first(arglist__11739);
var y = cljs.core.first(cljs.core.next(arglist__11739));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11739)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11739)));
return G__11736__delegate.call(this, x, y, z, args);
});
return G__11736;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11718.call(this);
case  1 :
return sp1__11719.call(this,x);
case  2 :
return sp1__11720.call(this,x,y);
case  3 :
return sp1__11721.call(this,x,y,z);
default:
return sp1__11723.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11723.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11710 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11745 = (function (){
return null;
});
var sp2__11746 = (function (x){
var or__3548__auto____11503 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11503))
{return or__3548__auto____11503;
} else
{return p2.call(null,x);
}
});
var sp2__11747 = (function (x,y){
var or__3548__auto____11504 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11504))
{return or__3548__auto____11504;
} else
{var or__3548__auto____11506 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11506))
{return or__3548__auto____11506;
} else
{var or__3548__auto____11509 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11509))
{return or__3548__auto____11509;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11748 = (function (x,y,z){
var or__3548__auto____11512 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11512))
{return or__3548__auto____11512;
} else
{var or__3548__auto____11514 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11514))
{return or__3548__auto____11514;
} else
{var or__3548__auto____11516 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11516))
{return or__3548__auto____11516;
} else
{var or__3548__auto____11518 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11518))
{return or__3548__auto____11518;
} else
{var or__3548__auto____11521 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11521))
{return or__3548__auto____11521;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11749 = (function() { 
var G__11757__delegate = function (x,y,z,args){
var or__3548__auto____11525 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11525))
{return or__3548__auto____11525;
} else
{return cljs.core.some.call(null,(function (p1__11034_SHARP_){
var or__3548__auto____11527 = p1.call(null,p1__11034_SHARP_);

if(cljs.core.truth_(or__3548__auto____11527))
{return or__3548__auto____11527;
} else
{return p2.call(null,p1__11034_SHARP_);
}
}),args);
}
};
var G__11757 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11757__delegate.call(this, x, y, z, args);
};
G__11757.cljs$lang$maxFixedArity = 3;
G__11757.cljs$lang$applyTo = (function (arglist__11765){
var x = cljs.core.first(arglist__11765);
var y = cljs.core.first(cljs.core.next(arglist__11765));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11765)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11765)));
return G__11757__delegate.call(this, x, y, z, args);
});
return G__11757;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11745.call(this);
case  1 :
return sp2__11746.call(this,x);
case  2 :
return sp2__11747.call(this,x,y);
case  3 :
return sp2__11748.call(this,x,y,z);
default:
return sp2__11749.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11749.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11712 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11768 = (function (){
return null;
});
var sp3__11769 = (function (x){
var or__3548__auto____11534 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11534))
{return or__3548__auto____11534;
} else
{var or__3548__auto____11538 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11538))
{return or__3548__auto____11538;
} else
{return p3.call(null,x);
}
}
});
var sp3__11770 = (function (x,y){
var or__3548__auto____11542 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11542))
{return or__3548__auto____11542;
} else
{var or__3548__auto____11543 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11543))
{return or__3548__auto____11543;
} else
{var or__3548__auto____11584 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11584))
{return or__3548__auto____11584;
} else
{var or__3548__auto____11587 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11587))
{return or__3548__auto____11587;
} else
{var or__3548__auto____11588 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11588))
{return or__3548__auto____11588;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11771 = (function (x,y,z){
var or__3548__auto____11595 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11595))
{return or__3548__auto____11595;
} else
{var or__3548__auto____11596 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11596))
{return or__3548__auto____11596;
} else
{var or__3548__auto____11597 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11597))
{return or__3548__auto____11597;
} else
{var or__3548__auto____11598 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11598))
{return or__3548__auto____11598;
} else
{var or__3548__auto____11601 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11601))
{return or__3548__auto____11601;
} else
{var or__3548__auto____11670 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11670))
{return or__3548__auto____11670;
} else
{var or__3548__auto____11671 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11671))
{return or__3548__auto____11671;
} else
{var or__3548__auto____11672 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11672))
{return or__3548__auto____11672;
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
var sp3__11772 = (function() { 
var G__11782__delegate = function (x,y,z,args){
var or__3548__auto____11681 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11681))
{return or__3548__auto____11681;
} else
{return cljs.core.some.call(null,(function (p1__11036_SHARP_){
var or__3548__auto____11683 = p1.call(null,p1__11036_SHARP_);

if(cljs.core.truth_(or__3548__auto____11683))
{return or__3548__auto____11683;
} else
{var or__3548__auto____11684 = p2.call(null,p1__11036_SHARP_);

if(cljs.core.truth_(or__3548__auto____11684))
{return or__3548__auto____11684;
} else
{return p3.call(null,p1__11036_SHARP_);
}
}
}),args);
}
};
var G__11782 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11782__delegate.call(this, x, y, z, args);
};
G__11782.cljs$lang$maxFixedArity = 3;
G__11782.cljs$lang$applyTo = (function (arglist__11788){
var x = cljs.core.first(arglist__11788);
var y = cljs.core.first(cljs.core.next(arglist__11788));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11788)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11788)));
return G__11782__delegate.call(this, x, y, z, args);
});
return G__11782;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11768.call(this);
case  1 :
return sp3__11769.call(this,x);
case  2 :
return sp3__11770.call(this,x,y);
case  3 :
return sp3__11771.call(this,x,y,z);
default:
return sp3__11772.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11772.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11713 = (function() { 
var G__11790__delegate = function (p1,p2,p3,ps){
var ps__11686 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11794 = (function (){
return null;
});
var spn__11795 = (function (x){
return cljs.core.some.call(null,(function (p1__11037_SHARP_){
return p1__11037_SHARP_.call(null,x);
}),ps__11686);
});
var spn__11796 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11039_SHARP_){
var or__3548__auto____11691 = p1__11039_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11691))
{return or__3548__auto____11691;
} else
{return p1__11039_SHARP_.call(null,y);
}
}),ps__11686);
});
var spn__11797 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11041_SHARP_){
var or__3548__auto____11694 = p1__11041_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11694))
{return or__3548__auto____11694;
} else
{var or__3548__auto____11695 = p1__11041_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11695))
{return or__3548__auto____11695;
} else
{return p1__11041_SHARP_.call(null,z);
}
}
}),ps__11686);
});
var spn__11798 = (function() { 
var G__11803__delegate = function (x,y,z,args){
var or__3548__auto____11702 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11702))
{return or__3548__auto____11702;
} else
{return cljs.core.some.call(null,(function (p1__11043_SHARP_){
return cljs.core.some.call(null,p1__11043_SHARP_,args);
}),ps__11686);
}
};
var G__11803 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11803__delegate.call(this, x, y, z, args);
};
G__11803.cljs$lang$maxFixedArity = 3;
G__11803.cljs$lang$applyTo = (function (arglist__11812){
var x = cljs.core.first(arglist__11812);
var y = cljs.core.first(cljs.core.next(arglist__11812));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11812)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11812)));
return G__11803__delegate.call(this, x, y, z, args);
});
return G__11803;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11794.call(this);
case  1 :
return spn__11795.call(this,x);
case  2 :
return spn__11796.call(this,x,y);
case  3 :
return spn__11797.call(this,x,y,z);
default:
return spn__11798.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11798.cljs$lang$applyTo;
return spn;
})()
};
var G__11790 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11790__delegate.call(this, p1, p2, p3, ps);
};
G__11790.cljs$lang$maxFixedArity = 3;
G__11790.cljs$lang$applyTo = (function (arglist__11825){
var p1 = cljs.core.first(arglist__11825);
var p2 = cljs.core.first(cljs.core.next(arglist__11825));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11825)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11825)));
return G__11790__delegate.call(this, p1, p2, p3, ps);
});
return G__11790;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11709.call(this,p1);
case  2 :
return some_fn__11710.call(this,p1,p2);
case  3 :
return some_fn__11712.call(this,p1,p2,p3);
default:
return some_fn__11713.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11713.cljs$lang$applyTo;
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
var map__11853 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11827 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11827))
{var s__11828 = temp__3698__auto____11827;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11828)),map.call(null,f,cljs.core.rest.call(null,s__11828)));
} else
{return null;
}
})));
});
var map__11854 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11830 = cljs.core.seq.call(null,c1);
var s2__11831 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11832 = s1__11830;

if(cljs.core.truth_(and__3546__auto____11832))
{return s2__11831;
} else
{return and__3546__auto____11832;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11830),cljs.core.first.call(null,s2__11831)),map.call(null,f,cljs.core.rest.call(null,s1__11830),cljs.core.rest.call(null,s2__11831)));
} else
{return null;
}
})));
});
var map__11855 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11834 = cljs.core.seq.call(null,c1);
var s2__11835 = cljs.core.seq.call(null,c2);
var s3__11836 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11837 = s1__11834;

if(cljs.core.truth_(and__3546__auto____11837))
{var and__3546__auto____11838 = s2__11835;

if(cljs.core.truth_(and__3546__auto____11838))
{return s3__11836;
} else
{return and__3546__auto____11838;
}
} else
{return and__3546__auto____11837;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11834),cljs.core.first.call(null,s2__11835),cljs.core.first.call(null,s3__11836)),map.call(null,f,cljs.core.rest.call(null,s1__11834),cljs.core.rest.call(null,s2__11835),cljs.core.rest.call(null,s3__11836)));
} else
{return null;
}
})));
});
var map__11856 = (function() { 
var G__11870__delegate = function (f,c1,c2,c3,colls){
var step__11846 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11842 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11842)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11842),step.call(null,map.call(null,cljs.core.rest,ss__11842)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11481_SHARP_){
return cljs.core.apply.call(null,f,p1__11481_SHARP_);
}),step__11846.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11870 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11870__delegate.call(this, f, c1, c2, c3, colls);
};
G__11870.cljs$lang$maxFixedArity = 4;
G__11870.cljs$lang$applyTo = (function (arglist__11871){
var f = cljs.core.first(arglist__11871);
var c1 = cljs.core.first(cljs.core.next(arglist__11871));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11871)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11871))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11871))));
return G__11870__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11870;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11853.call(this,f,c1);
case  3 :
return map__11854.call(this,f,c1,c2);
case  4 :
return map__11855.call(this,f,c1,c2,c3);
default:
return map__11856.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11856.cljs$lang$applyTo;
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
{var temp__3698__auto____11876 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11876))
{var s__11877 = temp__3698__auto____11876;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11877),take.call(null,(n - 1),cljs.core.rest.call(null,s__11877)));
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
var step__11886 = (function (n,coll){
while(true){
var s__11881 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11882 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11882))
{return s__11881;
} else
{return and__3546__auto____11882;
}
})()))
{{
var G__11888 = (n - 1);
var G__11889 = cljs.core.rest.call(null,s__11881);
n = G__11888;
coll = G__11889;
continue;
}
} else
{return s__11881;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11886.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11898 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11899 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11898.call(this,n);
case  2 :
return drop_last__11899.call(this,n,s);
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
var s__11904 = cljs.core.seq.call(null,coll);
var lead__11905 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11905))
{{
var G__11906 = cljs.core.next.call(null,s__11904);
var G__11907 = cljs.core.next.call(null,lead__11905);
s__11904 = G__11906;
lead__11905 = G__11907;
continue;
}
} else
{return s__11904;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11915 = (function (pred,coll){
while(true){
var s__11911 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11914 = s__11911;

if(cljs.core.truth_(and__3546__auto____11914))
{return pred.call(null,cljs.core.first.call(null,s__11911));
} else
{return and__3546__auto____11914;
}
})()))
{{
var G__11920 = pred;
var G__11921 = cljs.core.rest.call(null,s__11911);
pred = G__11920;
coll = G__11921;
continue;
}
} else
{return s__11911;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11915.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11925 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11925))
{var s__11929 = temp__3698__auto____11925;

return cljs.core.concat.call(null,s__11929,cycle.call(null,s__11929));
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
var repeat__11941 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11942 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11941.call(this,n);
case  2 :
return repeat__11942.call(this,n,x);
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
var repeatedly__11954 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11955 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11954.call(this,n);
case  2 :
return repeatedly__11955.call(this,n,f);
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
var interleave__12038 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11962 = cljs.core.seq.call(null,c1);
var s2__11963 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11964 = s1__11962;

if(cljs.core.truth_(and__3546__auto____11964))
{return s2__11963;
} else
{return and__3546__auto____11964;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11962),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11963),interleave.call(null,cljs.core.rest.call(null,s1__11962),cljs.core.rest.call(null,s2__11963))));
} else
{return null;
}
})));
});
var interleave__12039 = (function() { 
var G__12041__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11968 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11968)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11968),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11968)));
} else
{return null;
}
})));
};
var G__12041 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12041__delegate.call(this, c1, c2, colls);
};
G__12041.cljs$lang$maxFixedArity = 2;
G__12041.cljs$lang$applyTo = (function (arglist__12047){
var c1 = cljs.core.first(arglist__12047);
var c2 = cljs.core.first(cljs.core.next(arglist__12047));
var colls = cljs.core.rest(cljs.core.next(arglist__12047));
return G__12041__delegate.call(this, c1, c2, colls);
});
return G__12041;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12038.call(this,c1,c2);
default:
return interleave__12039.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12039.cljs$lang$applyTo;
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
var cat__12056 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12054 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12054))
{var coll__12055 = temp__3695__auto____12054;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12055),cat.call(null,cljs.core.rest.call(null,coll__12055),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12056.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12058 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12059 = (function() { 
var G__12062__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12062 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12062__delegate.call(this, f, coll, colls);
};
G__12062.cljs$lang$maxFixedArity = 2;
G__12062.cljs$lang$applyTo = (function (arglist__12063){
var f = cljs.core.first(arglist__12063);
var coll = cljs.core.first(cljs.core.next(arglist__12063));
var colls = cljs.core.rest(cljs.core.next(arglist__12063));
return G__12062__delegate.call(this, f, coll, colls);
});
return G__12062;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12058.call(this,f,coll);
default:
return mapcat__12059.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12059.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12066 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12066))
{var s__12068 = temp__3698__auto____12066;

var f__12069 = cljs.core.first.call(null,s__12068);
var r__12070 = cljs.core.rest.call(null,s__12068);

if(cljs.core.truth_(pred.call(null,f__12069)))
{return cljs.core.cons.call(null,f__12069,filter.call(null,pred,r__12070));
} else
{return filter.call(null,pred,r__12070);
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
var walk__12082 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12082.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12078_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12078_SHARP_));
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
var partition__12154 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12155 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12139 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12139))
{var s__12140 = temp__3698__auto____12139;

var p__12142 = cljs.core.take.call(null,n,s__12140);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12142))))
{return cljs.core.cons.call(null,p__12142,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12140)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12156 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12145 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12145))
{var s__12147 = temp__3698__auto____12145;

var p__12149 = cljs.core.take.call(null,n,s__12147);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12149))))
{return cljs.core.cons.call(null,p__12149,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12147)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12149,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12154.call(this,n,step);
case  3 :
return partition__12155.call(this,n,step,pad);
case  4 :
return partition__12156.call(this,n,step,pad,coll);
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
var get_in__12162 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12163 = (function (m,ks,not_found){
var sentinel__12158 = cljs.core.lookup_sentinel;
var m__12159 = m;
var ks__12160 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12160))
{var m__12161 = cljs.core.get.call(null,m__12159,cljs.core.first.call(null,ks__12160),sentinel__12158);

if(cljs.core.truth_((sentinel__12158 === m__12161)))
{return not_found;
} else
{{
var G__12165 = sentinel__12158;
var G__12166 = m__12161;
var G__12167 = cljs.core.next.call(null,ks__12160);
sentinel__12158 = G__12165;
m__12159 = G__12166;
ks__12160 = G__12167;
continue;
}
}
} else
{return m__12159;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12162.call(this,m,ks);
case  3 :
return get_in__12163.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12168,v){
var vec__12169__12170 = p__12168;
var k__12171 = cljs.core.nth.call(null,vec__12169__12170,0,null);
var ks__12172 = cljs.core.nthnext.call(null,vec__12169__12170,1);

if(cljs.core.truth_(ks__12172))
{return cljs.core.assoc.call(null,m,k__12171,assoc_in.call(null,cljs.core.get.call(null,m,k__12171),ks__12172,v));
} else
{return cljs.core.assoc.call(null,m,k__12171,v);
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
var update_in__delegate = function (m,p__12173,f,args){
var vec__12174__12175 = p__12173;
var k__12176 = cljs.core.nth.call(null,vec__12174__12175,0,null);
var ks__12177 = cljs.core.nthnext.call(null,vec__12174__12175,1);

if(cljs.core.truth_(ks__12177))
{return cljs.core.assoc.call(null,m,k__12176,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12176),ks__12177,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12176,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12176),args));
}
};
var update_in = function (m,p__12173,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12173, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12178){
var m = cljs.core.first(arglist__12178);
var p__12173 = cljs.core.first(cljs.core.next(arglist__12178));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12178)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12178)));
return update_in__delegate.call(this, m, p__12173, f, args);
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
var this__12191 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12260 = null;
var G__12260__12261 = (function (coll,k){
var this__12194 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12260__12262 = (function (coll,k,not_found){
var this__12196 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12260 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12260__12261.call(this,coll,k);
case  3 :
return G__12260__12262.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12260;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12198 = this;
var new_array__12200 = cljs.core.aclone.call(null,this__12198.array);

(new_array__12200[k] = v);
return (new cljs.core.Vector(this__12198.meta,new_array__12200));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12266 = null;
var G__12266__12269 = (function (coll,k){
var this__12203 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12266__12270 = (function (coll,k,not_found){
var this__12204 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12266 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12266__12269.call(this,coll,k);
case  3 :
return G__12266__12270.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12266;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12205 = this;
var new_array__12207 = cljs.core.aclone.call(null,this__12205.array);

new_array__12207.push(o);
return (new cljs.core.Vector(this__12205.meta,new_array__12207));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12272 = null;
var G__12272__12273 = (function (v,f){
var this__12209 = this;
return cljs.core.ci_reduce.call(null,this__12209.array,f);
});
var G__12272__12274 = (function (v,f,start){
var this__12211 = this;
return cljs.core.ci_reduce.call(null,this__12211.array,f,start);
});
G__12272 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12272__12273.call(this,v,f);
case  3 :
return G__12272__12274.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12272;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12213 = this;
if(cljs.core.truth_((this__12213.array.length > 0)))
{var vector_seq__12218 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12213.array.length)))
{return cljs.core.cons.call(null,(this__12213.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12218.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12220 = this;
return this__12220.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12223 = this;
var count__12224 = this__12223.array.length;

if(cljs.core.truth_((count__12224 > 0)))
{return (this__12223.array[(count__12224 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12226 = this;
if(cljs.core.truth_((this__12226.array.length > 0)))
{var new_array__12229 = cljs.core.aclone.call(null,this__12226.array);

new_array__12229.pop();
return (new cljs.core.Vector(this__12226.meta,new_array__12229));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12231 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12233 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12235 = this;
return (new cljs.core.Vector(meta,this__12235.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12237 = this;
return this__12237.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12283 = null;
var G__12283__12284 = (function (coll,n){
var this__12241 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12243 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12243))
{return (n < this__12241.array.length);
} else
{return and__3546__auto____12243;
}
})()))
{return (this__12241.array[n]);
} else
{return null;
}
});
var G__12283__12285 = (function (coll,n,not_found){
var this__12245 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12250 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12250))
{return (n < this__12245.array.length);
} else
{return and__3546__auto____12250;
}
})()))
{return (this__12245.array[n]);
} else
{return not_found;
}
});
G__12283 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12283__12284.call(this,coll,n);
case  3 :
return G__12283__12285.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12283;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12251 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12251.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12311){
var args = cljs.core.seq( arglist__12311 );;
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
var this__12337 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12482 = null;
var G__12482__12483 = (function (coll,k){
var this__12429 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12482__12484 = (function (coll,k,not_found){
var this__12432 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12482 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12482__12483.call(this,coll,k);
case  3 :
return G__12482__12484.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12482;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12435 = this;
var v_pos__12438 = (this__12435.start + key);

return (new cljs.core.Subvec(this__12435.meta,cljs.core._assoc.call(null,this__12435.v,v_pos__12438,val),this__12435.start,((this__12435.end > (v_pos__12438 + 1)) ? this__12435.end : (v_pos__12438 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12486 = null;
var G__12486__12487 = (function (coll,k){
var this__12443 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12486__12488 = (function (coll,k,not_found){
var this__12445 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12486 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12486__12487.call(this,coll,k);
case  3 :
return G__12486__12488.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12486;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12448 = this;
return (new cljs.core.Subvec(this__12448.meta,cljs.core._assoc_n.call(null,this__12448.v,this__12448.end,o),this__12448.start,(this__12448.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12494 = null;
var G__12494__12495 = (function (coll,f){
var this__12451 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12494__12496 = (function (coll,f,start){
var this__12452 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12494 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12494__12495.call(this,coll,f);
case  3 :
return G__12494__12496.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12494;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12454 = this;
var subvec_seq__12460 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12454.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12454.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12460.call(null,this__12454.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12461 = this;
return (this__12461.end - this__12461.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12462 = this;
return cljs.core._nth.call(null,this__12462.v,(this__12462.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12465 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12465.start,this__12465.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12465.meta,this__12465.v,this__12465.start,(this__12465.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12470 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12471 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12472 = this;
return (new cljs.core.Subvec(meta,this__12472.v,this__12472.start,this__12472.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12473 = this;
return this__12473.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12522 = null;
var G__12522__12524 = (function (coll,n){
var this__12477 = this;
return cljs.core._nth.call(null,this__12477.v,(this__12477.start + n));
});
var G__12522__12525 = (function (coll,n,not_found){
var this__12480 = this;
return cljs.core._nth.call(null,this__12480.v,(this__12480.start + n),not_found);
});
G__12522 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12522__12524.call(this,coll,n);
case  3 :
return G__12522__12525.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12522;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12481 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12481.meta);
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
var subvec__12539 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12541 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12539.call(this,v,start);
case  3 :
return subvec__12541.call(this,v,start,end);
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
var this__12588 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12589 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12590 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12591 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12591.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12592 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12593 = this;
return cljs.core._first.call(null,this__12593.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12594 = this;
var temp__3695__auto____12595 = cljs.core.next.call(null,this__12594.front);

if(cljs.core.truth_(temp__3695__auto____12595))
{var f1__12596 = temp__3695__auto____12595;

return (new cljs.core.PersistentQueueSeq(this__12594.meta,f1__12596,this__12594.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12594.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12594.meta,this__12594.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12599 = this;
return this__12599.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12602 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12602.front,this__12602.rear));
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
var this__12617 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12622 = this;
if(cljs.core.truth_(this__12622.front))
{return (new cljs.core.PersistentQueue(this__12622.meta,(this__12622.count + 1),this__12622.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12623 = this__12622.rear;

if(cljs.core.truth_(or__3548__auto____12623))
{return or__3548__auto____12623;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12622.meta,(this__12622.count + 1),cljs.core.conj.call(null,this__12622.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12624 = this;
var rear__12625 = cljs.core.seq.call(null,this__12624.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12626 = this__12624.front;

if(cljs.core.truth_(or__3548__auto____12626))
{return or__3548__auto____12626;
} else
{return rear__12625;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12624.front,cljs.core.seq.call(null,rear__12625)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12635 = this;
return this__12635.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12636 = this;
return cljs.core._first.call(null,this__12636.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12637 = this;
if(cljs.core.truth_(this__12637.front))
{var temp__3695__auto____12638 = cljs.core.next.call(null,this__12637.front);

if(cljs.core.truth_(temp__3695__auto____12638))
{var f1__12639 = temp__3695__auto____12638;

return (new cljs.core.PersistentQueue(this__12637.meta,(this__12637.count - 1),f1__12639,this__12637.rear));
} else
{return (new cljs.core.PersistentQueue(this__12637.meta,(this__12637.count - 1),cljs.core.seq.call(null,this__12637.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12640 = this;
return cljs.core.first.call(null,this__12640.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12641 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12642 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12643 = this;
return (new cljs.core.PersistentQueue(meta,this__12643.count,this__12643.front,this__12643.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12644 = this;
return this__12644.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12649 = this;
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
var this__12675 = this;
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
var len__12693 = array.length;

var i__12695 = 0;

while(true){
if(cljs.core.truth_((i__12695 < len__12693)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12695]))))
{return i__12695;
} else
{{
var G__12701 = (i__12695 + incr);
i__12695 = G__12701;
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
var obj_map_contains_key_QMARK___12708 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12709 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12704 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12704))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12704;
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
return obj_map_contains_key_QMARK___12708.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12709.call(this,k,strobj,true_val,false_val);
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
var this__12726 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12857 = null;
var G__12857__12858 = (function (coll,k){
var this__12727 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12857__12859 = (function (coll,k,not_found){
var this__12729 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12729.strobj,(this__12729.strobj[k]),not_found);
});
G__12857 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12857__12858.call(this,coll,k);
case  3 :
return G__12857__12859.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12857;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12735 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12821 = goog.object.clone.call(null,this__12735.strobj);
var overwrite_QMARK___12822 = new_strobj__12821.hasOwnProperty(k);

(new_strobj__12821[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12822))
{return (new cljs.core.ObjMap(this__12735.meta,this__12735.keys,new_strobj__12821));
} else
{var new_keys__12823 = cljs.core.aclone.call(null,this__12735.keys);

new_keys__12823.push(k);
return (new cljs.core.ObjMap(this__12735.meta,new_keys__12823,new_strobj__12821));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12735.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12825 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12825.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12870 = null;
var G__12870__12871 = (function (coll,k){
var this__12830 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12870__12872 = (function (coll,k,not_found){
var this__12831 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12870 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12870__12871.call(this,coll,k);
case  3 :
return G__12870__12872.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12870;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12833 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12837 = this;
if(cljs.core.truth_((this__12837.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12714_SHARP_){
return cljs.core.vector.call(null,p1__12714_SHARP_,(this__12837.strobj[p1__12714_SHARP_]));
}),this__12837.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12841 = this;
return this__12841.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12843 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12844 = this;
return (new cljs.core.ObjMap(meta,this__12844.keys,this__12844.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12845 = this;
return this__12845.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12846 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12846.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12847 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12848 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12848))
{return this__12847.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12848;
}
})()))
{var new_keys__12849 = cljs.core.aclone.call(null,this__12847.keys);
var new_strobj__12850 = goog.object.clone.call(null,this__12847.strobj);

new_keys__12849.splice(cljs.core.scan_array.call(null,1,k,new_keys__12849),1);
cljs.core.js_delete.call(null,new_strobj__12850,k);
return (new cljs.core.ObjMap(this__12847.meta,new_keys__12849,new_strobj__12850));
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
var this__12927 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12991 = null;
var G__12991__12993 = (function (coll,k){
var this__12929 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12991__12994 = (function (coll,k,not_found){
var this__12930 = this;
var bucket__12932 = (this__12930.hashobj[cljs.core.hash.call(null,k)]);
var i__12933 = (cljs.core.truth_(bucket__12932)?cljs.core.scan_array.call(null,2,k,bucket__12932):null);

if(cljs.core.truth_(i__12933))
{return (bucket__12932[(i__12933 + 1)]);
} else
{return not_found;
}
});
G__12991 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12991__12993.call(this,coll,k);
case  3 :
return G__12991__12994.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12991;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12935 = this;
var h__12936 = cljs.core.hash.call(null,k);
var bucket__12937 = (this__12935.hashobj[h__12936]);

if(cljs.core.truth_(bucket__12937))
{var new_bucket__12939 = cljs.core.aclone.call(null,bucket__12937);
var new_hashobj__12940 = goog.object.clone.call(null,this__12935.hashobj);

(new_hashobj__12940[h__12936] = new_bucket__12939);
var temp__3695__auto____12941 = cljs.core.scan_array.call(null,2,k,new_bucket__12939);

if(cljs.core.truth_(temp__3695__auto____12941))
{var i__12942 = temp__3695__auto____12941;

(new_bucket__12939[(i__12942 + 1)] = v);
return (new cljs.core.HashMap(this__12935.meta,this__12935.count,new_hashobj__12940));
} else
{new_bucket__12939.push(k,v);
return (new cljs.core.HashMap(this__12935.meta,(this__12935.count + 1),new_hashobj__12940));
}
} else
{var new_hashobj__12944 = goog.object.clone.call(null,this__12935.hashobj);

(new_hashobj__12944[h__12936] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12935.meta,(this__12935.count + 1),new_hashobj__12944));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12946 = this;
var bucket__12948 = (this__12946.hashobj[cljs.core.hash.call(null,k)]);
var i__12949 = (cljs.core.truth_(bucket__12948)?cljs.core.scan_array.call(null,2,k,bucket__12948):null);

if(cljs.core.truth_(i__12949))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13007 = null;
var G__13007__13009 = (function (coll,k){
var this__12950 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13007__13010 = (function (coll,k,not_found){
var this__12953 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13007 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13007__13009.call(this,coll,k);
case  3 :
return G__13007__13010.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13007;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12955 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12958 = this;
if(cljs.core.truth_((this__12958.count > 0)))
{var hashes__12962 = cljs.core.js_keys.call(null,this__12958.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12889_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12958.hashobj[p1__12889_SHARP_])));
}),hashes__12962);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12964 = this;
return this__12964.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12967 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12972 = this;
return (new cljs.core.HashMap(meta,this__12972.count,this__12972.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12973 = this;
return this__12973.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12974 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12974.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12975 = this;
var h__12977 = cljs.core.hash.call(null,k);
var bucket__12978 = (this__12975.hashobj[h__12977]);
var i__12979 = (cljs.core.truth_(bucket__12978)?cljs.core.scan_array.call(null,2,k,bucket__12978):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12979)))
{return coll;
} else
{var new_hashobj__12980 = goog.object.clone.call(null,this__12975.hashobj);

if(cljs.core.truth_((3 > bucket__12978.length)))
{cljs.core.js_delete.call(null,new_hashobj__12980,h__12977);
} else
{var new_bucket__12983 = cljs.core.aclone.call(null,bucket__12978);

new_bucket__12983.splice(i__12979,2);
(new_hashobj__12980[h__12977] = new_bucket__12983);
}
return (new cljs.core.HashMap(this__12975.meta,(this__12975.count - 1),new_hashobj__12980));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13051 = ks.length;

var i__13052 = 0;
var out__13053 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13052 < len__13051)))
{{
var G__13057 = (i__13052 + 1);
var G__13058 = cljs.core.assoc.call(null,out__13053,(ks[i__13052]),(vs[i__13052]));
i__13052 = G__13057;
out__13053 = G__13058;
continue;
}
} else
{return out__13053;
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
var in$__13065 = cljs.core.seq.call(null,keyvals);
var out__13066 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13065))
{{
var G__13074 = cljs.core.nnext.call(null,in$__13065);
var G__13075 = cljs.core.assoc.call(null,out__13066,cljs.core.first.call(null,in$__13065),cljs.core.second.call(null,in$__13065));
in$__13065 = G__13074;
out__13066 = G__13075;
continue;
}
} else
{return out__13066;
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
hash_map.cljs$lang$applyTo = (function (arglist__13079){
var keyvals = cljs.core.seq( arglist__13079 );;
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
{return cljs.core.reduce.call(null,(function (p1__13085_SHARP_,p2__13086_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13091 = p1__13085_SHARP_;

if(cljs.core.truth_(or__3548__auto____13091))
{return or__3548__auto____13091;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13086_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13147){
var maps = cljs.core.seq( arglist__13147 );;
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
{var merge_entry__13155 = (function (m,e){
var k__13150 = cljs.core.first.call(null,e);
var v__13153 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13150)))
{return cljs.core.assoc.call(null,m,k__13150,f.call(null,cljs.core.get.call(null,m,k__13150),v__13153));
} else
{return cljs.core.assoc.call(null,m,k__13150,v__13153);
}
});
var merge2__13157 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13155,(function (){var or__3548__auto____13156 = m1;

if(cljs.core.truth_(or__3548__auto____13156))
{return or__3548__auto____13156;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13157,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13162){
var f = cljs.core.first(arglist__13162);
var maps = cljs.core.rest(arglist__13162);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13170 = cljs.core.ObjMap.fromObject([],{});
var keys__13171 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13171))
{var key__13172 = cljs.core.first.call(null,keys__13171);
var entry__13173 = cljs.core.get.call(null,map,key__13172,"﷐'user/not-found");

{
var G__13179 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13173,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13170,key__13172,entry__13173):ret__13170);
var G__13180 = cljs.core.next.call(null,keys__13171);
ret__13170 = G__13179;
keys__13171 = G__13180;
continue;
}
} else
{return ret__13170;
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
var this__13185 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13211 = null;
var G__13211__13212 = (function (coll,v){
var this__13187 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13211__13213 = (function (coll,v,not_found){
var this__13189 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13189.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13211 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13211__13212.call(this,coll,v);
case  3 :
return G__13211__13213.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13211;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13216 = null;
var G__13216__13217 = (function (coll,k){
var this__13191 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13216__13218 = (function (coll,k,not_found){
var this__13192 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13216 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13216__13217.call(this,coll,k);
case  3 :
return G__13216__13218.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13216;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13193 = this;
return (new cljs.core.Set(this__13193.meta,cljs.core.assoc.call(null,this__13193.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13195 = this;
return cljs.core.keys.call(null,this__13195.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13196 = this;
return (new cljs.core.Set(this__13196.meta,cljs.core.dissoc.call(null,this__13196.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13197 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13200 = this;
var and__3546__auto____13201 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13201))
{var and__3546__auto____13203 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13203))
{return cljs.core.every_QMARK_.call(null,(function (p1__13165_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13165_SHARP_);
}),other);
} else
{return and__3546__auto____13203;
}
} else
{return and__3546__auto____13201;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13204 = this;
return (new cljs.core.Set(meta,this__13204.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13206 = this;
return this__13206.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13208 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13208.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13309 = cljs.core.seq.call(null,coll);
var out__13310 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13309))))
{{
var G__13319 = cljs.core.rest.call(null,in$__13309);
var G__13320 = cljs.core.conj.call(null,out__13310,cljs.core.first.call(null,in$__13309));
in$__13309 = G__13319;
out__13310 = G__13320;
continue;
}
} else
{return out__13310;
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
{var n__13326 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13328 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13328))
{var e__13329 = temp__3695__auto____13328;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13329));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13326,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13306_SHARP_){
var temp__3695__auto____13335 = cljs.core.find.call(null,smap,p1__13306_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13335))
{var e__13337 = temp__3695__auto____13335;

return cljs.core.second.call(null,e__13337);
} else
{return p1__13306_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13371 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13358,seen){
while(true){
var vec__13360__13361 = p__13358;
var f__13362 = cljs.core.nth.call(null,vec__13360__13361,0,null);
var xs__13363 = vec__13360__13361;

var temp__3698__auto____13365 = cljs.core.seq.call(null,xs__13363);

if(cljs.core.truth_(temp__3698__auto____13365))
{var s__13367 = temp__3698__auto____13365;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13362)))
{{
var G__13382 = cljs.core.rest.call(null,s__13367);
var G__13384 = seen;
p__13358 = G__13382;
seen = G__13384;
continue;
}
} else
{return cljs.core.cons.call(null,f__13362,step.call(null,cljs.core.rest.call(null,s__13367),cljs.core.conj.call(null,seen,f__13362)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13371.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13391 = cljs.core.Vector.fromArray([]);
var s__13393 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13393)))
{{
var G__13397 = cljs.core.conj.call(null,ret__13391,cljs.core.first.call(null,s__13393));
var G__13398 = cljs.core.next.call(null,s__13393);
ret__13391 = G__13397;
s__13393 = G__13398;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13391);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13401 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13401))
{return or__3548__auto____13401;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13404 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13404 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13404 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13417 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13417))
{return or__3548__auto____13417;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13430 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13430 > -1)))
{return cljs.core.subs.call(null,x,2,i__13430);
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
var map__13443 = cljs.core.ObjMap.fromObject([],{});
var ks__13444 = cljs.core.seq.call(null,keys);
var vs__13446 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13449 = ks__13444;

if(cljs.core.truth_(and__3546__auto____13449))
{return vs__13446;
} else
{return and__3546__auto____13449;
}
})()))
{{
var G__13453 = cljs.core.assoc.call(null,map__13443,cljs.core.first.call(null,ks__13444),cljs.core.first.call(null,vs__13446));
var G__13454 = cljs.core.next.call(null,ks__13444);
var G__13455 = cljs.core.next.call(null,vs__13446);
map__13443 = G__13453;
ks__13444 = G__13454;
vs__13446 = G__13455;
continue;
}
} else
{return map__13443;
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
var max_key__13518 = (function (k,x){
return x;
});
var max_key__13519 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13520 = (function() { 
var G__13522__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13439_SHARP_,p2__13440_SHARP_){
return max_key.call(null,k,p1__13439_SHARP_,p2__13440_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13522 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13522__delegate.call(this, k, x, y, more);
};
G__13522.cljs$lang$maxFixedArity = 3;
G__13522.cljs$lang$applyTo = (function (arglist__13526){
var k = cljs.core.first(arglist__13526);
var x = cljs.core.first(cljs.core.next(arglist__13526));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13526)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13526)));
return G__13522__delegate.call(this, k, x, y, more);
});
return G__13522;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13518.call(this,k,x);
case  3 :
return max_key__13519.call(this,k,x,y);
default:
return max_key__13520.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13520.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13541 = (function (k,x){
return x;
});
var min_key__13542 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13543 = (function() { 
var G__13549__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13459_SHARP_,p2__13461_SHARP_){
return min_key.call(null,k,p1__13459_SHARP_,p2__13461_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13549 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13549__delegate.call(this, k, x, y, more);
};
G__13549.cljs$lang$maxFixedArity = 3;
G__13549.cljs$lang$applyTo = (function (arglist__13551){
var k = cljs.core.first(arglist__13551);
var x = cljs.core.first(cljs.core.next(arglist__13551));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13551)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13551)));
return G__13549__delegate.call(this, k, x, y, more);
});
return G__13549;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13541.call(this,k,x);
case  3 :
return min_key__13542.call(this,k,x,y);
default:
return min_key__13543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13543.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13626 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13627 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13560 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13560))
{var s__13561 = temp__3698__auto____13560;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13561),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13561)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13626.call(this,n,step);
case  3 :
return partition_all__13627.call(this,n,step,coll);
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
var temp__3698__auto____13647 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13647))
{var s__13648 = temp__3698__auto____13647;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13648))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13648),take_while.call(null,pred,cljs.core.rest.call(null,s__13648)));
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
var this__13660 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13663 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13765 = null;
var G__13765__13767 = (function (rng,f){
var this__13665 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13765__13768 = (function (rng,f,s){
var this__13667 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13765 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13765__13767.call(this,rng,f);
case  3 :
return G__13765__13768.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13765;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13668 = this;
var comp__13670 = (cljs.core.truth_((this__13668.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13670.call(null,this__13668.start,this__13668.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13674 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13674.end - this__13674.start) / this__13674.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13682 = this;
return this__13682.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13684 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13684.meta,(this__13684.start + this__13684.step),this__13684.end,this__13684.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13687 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13689 = this;
return (new cljs.core.Range(meta,this__13689.start,this__13689.end,this__13689.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13691 = this;
return this__13691.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13779 = null;
var G__13779__13781 = (function (rng,n){
var this__13695 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13695.start + (n * this__13695.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13698 = (this__13695.start > this__13695.end);

if(cljs.core.truth_(and__3546__auto____13698))
{return cljs.core._EQ_.call(null,this__13695.step,0);
} else
{return and__3546__auto____13698;
}
})()))
{return this__13695.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13779__13783 = (function (rng,n,not_found){
var this__13699 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13699.start + (n * this__13699.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13756 = (this__13699.start > this__13699.end);

if(cljs.core.truth_(and__3546__auto____13756))
{return cljs.core._EQ_.call(null,this__13699.step,0);
} else
{return and__3546__auto____13756;
}
})()))
{return this__13699.start;
} else
{return not_found;
}
}
});
G__13779 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13779__13781.call(this,rng,n);
case  3 :
return G__13779__13783.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13779;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13758 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13758.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__13793 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__13794 = (function (end){
return range.call(null,0,end,1);
});
var range__13795 = (function (start,end){
return range.call(null,start,end,1);
});
var range__13796 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__13793.call(this);
case  1 :
return range__13794.call(this,start);
case  2 :
return range__13795.call(this,start,end);
case  3 :
return range__13796.call(this,start,end,step);
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
var temp__3698__auto____13803 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13803))
{var s__13804 = temp__3698__auto____13803;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13804),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13804)));
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
var temp__3698__auto____13813 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13813))
{var s__13816 = temp__3698__auto____13813;

var fst__13817 = cljs.core.first.call(null,s__13816);
var fv__13818 = f.call(null,fst__13817);
var run__13820 = cljs.core.cons.call(null,fst__13817,cljs.core.take_while.call(null,(function (p1__13809_SHARP_){
return cljs.core._EQ_.call(null,fv__13818,f.call(null,p1__13809_SHARP_));
}),cljs.core.next.call(null,s__13816)));

return cljs.core.cons.call(null,run__13820,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13820),s__13816))));
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
var reductions__13883 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13875 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13875))
{var s__13876 = temp__3695__auto____13875;

return reductions.call(null,f,cljs.core.first.call(null,s__13876),cljs.core.rest.call(null,s__13876));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13884 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13881 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13881))
{var s__13882 = temp__3698__auto____13881;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13882)),cljs.core.rest.call(null,s__13882));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13883.call(this,f,init);
case  3 :
return reductions__13884.call(this,f,init,coll);
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
var juxt__13931 = (function (f){
return (function() {
var G__13936 = null;
var G__13936__13937 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13936__13938 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13936__13939 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13936__13940 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13936__13941 = (function() { 
var G__13955__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13955 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13955__delegate.call(this, x, y, z, args);
};
G__13955.cljs$lang$maxFixedArity = 3;
G__13955.cljs$lang$applyTo = (function (arglist__13956){
var x = cljs.core.first(arglist__13956);
var y = cljs.core.first(cljs.core.next(arglist__13956));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13956)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13956)));
return G__13955__delegate.call(this, x, y, z, args);
});
return G__13955;
})()
;
G__13936 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13936__13937.call(this);
case  1 :
return G__13936__13938.call(this,x);
case  2 :
return G__13936__13939.call(this,x,y);
case  3 :
return G__13936__13940.call(this,x,y,z);
default:
return G__13936__13941.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13936.cljs$lang$maxFixedArity = 3;
G__13936.cljs$lang$applyTo = G__13936__13941.cljs$lang$applyTo;
return G__13936;
})()
});
var juxt__13932 = (function (f,g){
return (function() {
var G__13959 = null;
var G__13959__13960 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13959__13961 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13959__13962 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13959__13963 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13959__13964 = (function() { 
var G__13979__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__13979 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13979__delegate.call(this, x, y, z, args);
};
G__13979.cljs$lang$maxFixedArity = 3;
G__13979.cljs$lang$applyTo = (function (arglist__13985){
var x = cljs.core.first(arglist__13985);
var y = cljs.core.first(cljs.core.next(arglist__13985));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13985)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13985)));
return G__13979__delegate.call(this, x, y, z, args);
});
return G__13979;
})()
;
G__13959 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13959__13960.call(this);
case  1 :
return G__13959__13961.call(this,x);
case  2 :
return G__13959__13962.call(this,x,y);
case  3 :
return G__13959__13963.call(this,x,y,z);
default:
return G__13959__13964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13959.cljs$lang$maxFixedArity = 3;
G__13959.cljs$lang$applyTo = G__13959__13964.cljs$lang$applyTo;
return G__13959;
})()
});
var juxt__13933 = (function (f,g,h){
return (function() {
var G__13991 = null;
var G__13991__13992 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__13991__13993 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__13991__13994 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__13991__13995 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__13991__13996 = (function() { 
var G__14002__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14002 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14002__delegate.call(this, x, y, z, args);
};
G__14002.cljs$lang$maxFixedArity = 3;
G__14002.cljs$lang$applyTo = (function (arglist__14005){
var x = cljs.core.first(arglist__14005);
var y = cljs.core.first(cljs.core.next(arglist__14005));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14005)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14005)));
return G__14002__delegate.call(this, x, y, z, args);
});
return G__14002;
})()
;
G__13991 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13991__13992.call(this);
case  1 :
return G__13991__13993.call(this,x);
case  2 :
return G__13991__13994.call(this,x,y);
case  3 :
return G__13991__13995.call(this,x,y,z);
default:
return G__13991__13996.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13991.cljs$lang$maxFixedArity = 3;
G__13991.cljs$lang$applyTo = G__13991__13996.cljs$lang$applyTo;
return G__13991;
})()
});
var juxt__13934 = (function() { 
var G__14012__delegate = function (f,g,h,fs){
var fs__13925 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14013 = null;
var G__14013__14014 = (function (){
return cljs.core.reduce.call(null,(function (p1__13855_SHARP_,p2__13856_SHARP_){
return cljs.core.conj.call(null,p1__13855_SHARP_,p2__13856_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13925);
});
var G__14013__14015 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13857_SHARP_,p2__13858_SHARP_){
return cljs.core.conj.call(null,p1__13857_SHARP_,p2__13858_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13925);
});
var G__14013__14016 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13859_SHARP_,p2__13860_SHARP_){
return cljs.core.conj.call(null,p1__13859_SHARP_,p2__13860_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13925);
});
var G__14013__14017 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13869_SHARP_,p2__13870_SHARP_){
return cljs.core.conj.call(null,p1__13869_SHARP_,p2__13870_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13925);
});
var G__14013__14018 = (function() { 
var G__14020__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13871_SHARP_,p2__13873_SHARP_){
return cljs.core.conj.call(null,p1__13871_SHARP_,cljs.core.apply.call(null,p2__13873_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13925);
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
G__14013 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14013__14014.call(this);
case  1 :
return G__14013__14015.call(this,x);
case  2 :
return G__14013__14016.call(this,x,y);
case  3 :
return G__14013__14017.call(this,x,y,z);
default:
return G__14013__14018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14013.cljs$lang$maxFixedArity = 3;
G__14013.cljs$lang$applyTo = G__14013__14018.cljs$lang$applyTo;
return G__14013;
})()
};
var G__14012 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14012__delegate.call(this, f, g, h, fs);
};
G__14012.cljs$lang$maxFixedArity = 3;
G__14012.cljs$lang$applyTo = (function (arglist__14022){
var f = cljs.core.first(arglist__14022);
var g = cljs.core.first(cljs.core.next(arglist__14022));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14022)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14022)));
return G__14012__delegate.call(this, f, g, h, fs);
});
return G__14012;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13931.call(this,f);
case  2 :
return juxt__13932.call(this,f,g);
case  3 :
return juxt__13933.call(this,f,g,h);
default:
return juxt__13934.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13934.cljs$lang$applyTo;
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
var dorun__14025 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14028 = cljs.core.next.call(null,coll);
coll = G__14028;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14026 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14023 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14023))
{return (n > 0);
} else
{return and__3546__auto____14023;
}
})()))
{{
var G__14029 = (n - 1);
var G__14030 = cljs.core.next.call(null,coll);
n = G__14029;
coll = G__14030;
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
return dorun__14025.call(this,n);
case  2 :
return dorun__14026.call(this,n,coll);
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
var doall__14043 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14044 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14043.call(this,n);
case  2 :
return doall__14044.call(this,n,coll);
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
var matches__14048 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14048),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14048),1)))
{return cljs.core.first.call(null,matches__14048);
} else
{return cljs.core.vec.call(null,matches__14048);
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
var matches__14059 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14059)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14059),1)))
{return cljs.core.first.call(null,matches__14059);
} else
{return cljs.core.vec.call(null,matches__14059);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14116 = cljs.core.re_find.call(null,re,s);
var match_idx__14119 = s.search(re);
var match_str__14120 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14116))?cljs.core.first.call(null,match_data__14116):match_data__14116);
var post_match__14121 = cljs.core.subs.call(null,s,(match_idx__14119 + cljs.core.count.call(null,match_str__14120)));

if(cljs.core.truth_(match_data__14116))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14116,re_seq.call(null,re,post_match__14121));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14143_SHARP_){
return print_one.call(null,p1__14143_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14229 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14229))
{var and__3546__auto____14234 = (function (){var x__445__auto____14231 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14232 = x__445__auto____14231;

if(cljs.core.truth_(and__3546__auto____14232))
{var and__3546__auto____14233 = x__445__auto____14231.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14233))
{return cljs.core.not.call(null,x__445__auto____14231.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14233;
}
} else
{return and__3546__auto____14232;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14231);
}
})();

if(cljs.core.truth_(and__3546__auto____14234))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14234;
}
} else
{return and__3546__auto____14229;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14255 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14256 = x__445__auto____14255;

if(cljs.core.truth_(and__3546__auto____14256))
{var and__3546__auto____14257 = x__445__auto____14255.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14257))
{return cljs.core.not.call(null,x__445__auto____14255.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14257;
}
} else
{return and__3546__auto____14256;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14255);
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
var first_obj__14288 = cljs.core.first.call(null,objs);
var sb__14290 = (new goog.string.StringBuffer());

var G__14292__14293 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14292__14293))
{var obj__14294 = cljs.core.first.call(null,G__14292__14293);
var G__14292__14295 = G__14292__14293;

while(true){
if(cljs.core.truth_((obj__14294 === first_obj__14288)))
{} else
{sb__14290.append(" ");
}
var G__14298__14299 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14294,opts));

if(cljs.core.truth_(G__14298__14299))
{var string__14300 = cljs.core.first.call(null,G__14298__14299);
var G__14298__14301 = G__14298__14299;

while(true){
sb__14290.append(string__14300);
var temp__3698__auto____14302 = cljs.core.next.call(null,G__14298__14301);

if(cljs.core.truth_(temp__3698__auto____14302))
{var G__14298__14303 = temp__3698__auto____14302;

{
var G__14319 = cljs.core.first.call(null,G__14298__14303);
var G__14320 = G__14298__14303;
string__14300 = G__14319;
G__14298__14301 = G__14320;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14304 = cljs.core.next.call(null,G__14292__14295);

if(cljs.core.truth_(temp__3698__auto____14304))
{var G__14292__14305 = temp__3698__auto____14304;

{
var G__14321 = cljs.core.first.call(null,G__14292__14305);
var G__14322 = G__14292__14305;
obj__14294 = G__14321;
G__14292__14295 = G__14322;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14290);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14327 = cljs.core.first.call(null,objs);

var G__14329__14330 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14329__14330))
{var obj__14331 = cljs.core.first.call(null,G__14329__14330);
var G__14329__14332 = G__14329__14330;

while(true){
if(cljs.core.truth_((obj__14331 === first_obj__14327)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14333__14335 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14331,opts));

if(cljs.core.truth_(G__14333__14335))
{var string__14337 = cljs.core.first.call(null,G__14333__14335);
var G__14333__14338 = G__14333__14335;

while(true){
cljs.core.string_print.call(null,string__14337);
var temp__3698__auto____14340 = cljs.core.next.call(null,G__14333__14338);

if(cljs.core.truth_(temp__3698__auto____14340))
{var G__14333__14343 = temp__3698__auto____14340;

{
var G__14352 = cljs.core.first.call(null,G__14333__14343);
var G__14353 = G__14333__14343;
string__14337 = G__14352;
G__14333__14338 = G__14353;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14345 = cljs.core.next.call(null,G__14329__14332);

if(cljs.core.truth_(temp__3698__auto____14345))
{var G__14329__14347 = temp__3698__auto____14345;

{
var G__14354 = cljs.core.first.call(null,G__14329__14347);
var G__14355 = G__14329__14347;
obj__14331 = G__14354;
G__14329__14332 = G__14355;
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
pr_str.cljs$lang$applyTo = (function (arglist__14468){
var objs = cljs.core.seq( arglist__14468 );;
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
pr.cljs$lang$applyTo = (function (arglist__14472){
var objs = cljs.core.seq( arglist__14472 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14474){
var objs = cljs.core.seq( arglist__14474 );;
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
println.cljs$lang$applyTo = (function (arglist__14486){
var objs = cljs.core.seq( arglist__14486 );;
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
prn.cljs$lang$applyTo = (function (arglist__14522){
var objs = cljs.core.seq( arglist__14522 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14530 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14530,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14535 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14535))
{var nspc__14536 = temp__3698__auto____14535;

return cljs.core.str.call(null,nspc__14536,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14537 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14537))
{var nspc__14538 = temp__3698__auto____14537;

return cljs.core.str.call(null,nspc__14538,"/");
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
var pr_pair__14583 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14583,"{",", ","}",opts,coll);
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
var this__14607 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14613 = this;
var G__14617__14620 = cljs.core.seq.call(null,this__14613.watches);

if(cljs.core.truth_(G__14617__14620))
{var G__14623__14625 = cljs.core.first.call(null,G__14617__14620);
var vec__14624__14627 = G__14623__14625;
var key__14628 = cljs.core.nth.call(null,vec__14624__14627,0,null);
var f__14629 = cljs.core.nth.call(null,vec__14624__14627,1,null);
var G__14617__14630 = G__14617__14620;

var G__14623__14631 = G__14623__14625;
var G__14617__14632 = G__14617__14630;

while(true){
var vec__14633__14634 = G__14623__14631;
var key__14635 = cljs.core.nth.call(null,vec__14633__14634,0,null);
var f__14636 = cljs.core.nth.call(null,vec__14633__14634,1,null);
var G__14617__14637 = G__14617__14632;

f__14636.call(null,key__14635,this$,oldval,newval);
var temp__3698__auto____14638 = cljs.core.next.call(null,G__14617__14637);

if(cljs.core.truth_(temp__3698__auto____14638))
{var G__14617__14639 = temp__3698__auto____14638;

{
var G__14661 = cljs.core.first.call(null,G__14617__14639);
var G__14663 = G__14617__14639;
G__14623__14631 = G__14661;
G__14617__14632 = G__14663;
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
var this__14640 = this;
return this$.watches = cljs.core.assoc.call(null,this__14640.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14641 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14641.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14642 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14642.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14643 = this;
return this__14643.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14644 = this;
return this__14644.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14645 = this;
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
var atom__14745 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14746 = (function() { 
var G__14748__delegate = function (x,p__14715){
var map__14716__14717 = p__14715;
var map__14716__14718 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14716__14717))?cljs.core.apply.call(null,cljs.core.hash_map,map__14716__14717):map__14716__14717);
var validator__14719 = cljs.core.get.call(null,map__14716__14718,"﷐'validator");
var meta__14720 = cljs.core.get.call(null,map__14716__14718,"﷐'meta");

return (new cljs.core.Atom(x,meta__14720,validator__14719,null));
};
var G__14748 = function (x,var_args){
var p__14715 = null;
if (goog.isDef(var_args)) {
  p__14715 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14748__delegate.call(this, x, p__14715);
};
G__14748.cljs$lang$maxFixedArity = 1;
G__14748.cljs$lang$applyTo = (function (arglist__14749){
var x = cljs.core.first(arglist__14749);
var p__14715 = cljs.core.rest(arglist__14749);
return G__14748__delegate.call(this, x, p__14715);
});
return G__14748;
})()
;
atom = function(x,var_args){
var p__14715 = var_args;
switch(arguments.length){
case  1 :
return atom__14745.call(this,x);
default:
return atom__14746.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14746.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14753 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14753))
{var validate__14755 = temp__3698__auto____14753;

if(cljs.core.truth_(validate__14755.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14759 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14759,new_value);
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
var swap_BANG___14772 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14773 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14774 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14775 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14776 = (function() { 
var G__14778__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14778 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14778__delegate.call(this, a, f, x, y, z, more);
};
G__14778.cljs$lang$maxFixedArity = 5;
G__14778.cljs$lang$applyTo = (function (arglist__14780){
var a = cljs.core.first(arglist__14780);
var f = cljs.core.first(cljs.core.next(arglist__14780));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14780)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14780))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14780)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14780)))));
return G__14778__delegate.call(this, a, f, x, y, z, more);
});
return G__14778;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14772.call(this,a,f);
case  3 :
return swap_BANG___14773.call(this,a,f,x);
case  4 :
return swap_BANG___14774.call(this,a,f,x,y);
case  5 :
return swap_BANG___14775.call(this,a,f,x,y,z);
default:
return swap_BANG___14776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14776.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14806){
var iref = cljs.core.first(arglist__14806);
var f = cljs.core.first(cljs.core.next(arglist__14806));
var args = cljs.core.rest(cljs.core.next(arglist__14806));
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
var gensym__14825 = (function (){
return gensym.call(null,"G__");
});
var gensym__14826 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14825.call(this);
case  1 :
return gensym__14826.call(this,prefix_string);
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
var this__14834 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14834.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14835 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14835.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14835.state,this__14835.f);
}
return cljs.core.deref.call(null,this__14835.state);
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
delay.cljs$lang$applyTo = (function (arglist__14838){
var body = cljs.core.seq( arglist__14838 );;
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
var map__14849__14850 = options;
var map__14849__14851 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14849__14850))?cljs.core.apply.call(null,cljs.core.hash_map,map__14849__14850):map__14849__14850);
var keywordize_keys__14852 = cljs.core.get.call(null,map__14849__14851,"﷐'keywordize-keys");
var keyfn__14853 = (cljs.core.truth_(keywordize_keys__14852)?cljs.core.keyword:cljs.core.str);
var f__14872 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14871 = (function iter__14860(s__14861){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14861__14866 = s__14861;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14861__14866)))
{var k__14870 = cljs.core.first.call(null,s__14861__14866);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14853.call(null,k__14870),thisfn.call(null,(x[k__14870]))]),iter__14860.call(null,cljs.core.rest.call(null,s__14861__14866)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14871.call(null,cljs.core.js_keys.call(null,x));
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

return f__14872.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14879){
var x = cljs.core.first(arglist__14879);
var options = cljs.core.rest(arglist__14879);
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
var mem__14882 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14893__delegate = function (args){
var temp__3695__auto____14884 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14882),args);

if(cljs.core.truth_(temp__3695__auto____14884))
{var v__14885 = temp__3695__auto____14884;

return v__14885;
} else
{var ret__14887 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14882,cljs.core.assoc,args,ret__14887);
return ret__14887;
}
};
var G__14893 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14893__delegate.call(this, args);
};
G__14893.cljs$lang$maxFixedArity = 0;
G__14893.cljs$lang$applyTo = (function (arglist__14897){
var args = cljs.core.seq( arglist__14897 );;
return G__14893__delegate.call(this, args);
});
return G__14893;
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
var ret__14901 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14901)))
{{
var G__14909 = ret__14901;
f = G__14909;
continue;
}
} else
{return ret__14901;
}
break;
}
});
var trampoline__14905 = (function() { 
var G__14911__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14911 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14911__delegate.call(this, f, args);
};
G__14911.cljs$lang$maxFixedArity = 1;
G__14911.cljs$lang$applyTo = (function (arglist__14913){
var f = cljs.core.first(arglist__14913);
var args = cljs.core.rest(arglist__14913);
return G__14911__delegate.call(this, f, args);
});
return G__14911;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14903.call(this,f);
default:
return trampoline__14905.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14905.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14918 = (function (){
return rand.call(null,1);
});
var rand__14919 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14918.call(this);
case  1 :
return rand__14919.call(this,n);
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
var k__14954 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14954,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14954,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15020 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15021 = (function (h,child,parent){
var or__3548__auto____14972 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14972))
{return or__3548__auto____14972;
} else
{var or__3548__auto____14975 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14975))
{return or__3548__auto____14975;
} else
{var and__3546__auto____14976 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14976))
{var and__3546__auto____14978 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14978))
{var and__3546__auto____14979 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14979))
{var ret__14980 = true;
var i__14981 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14983 = cljs.core.not.call(null,ret__14980);

if(cljs.core.truth_(or__3548__auto____14983))
{return or__3548__auto____14983;
} else
{return cljs.core._EQ_.call(null,i__14981,cljs.core.count.call(null,parent));
}
})()))
{return ret__14980;
} else
{{
var G__15024 = isa_QMARK_.call(null,h,child.call(null,i__14981),parent.call(null,i__14981));
var G__15025 = (i__14981 + 1);
ret__14980 = G__15024;
i__14981 = G__15025;
continue;
}
}
break;
}
} else
{return and__3546__auto____14979;
}
} else
{return and__3546__auto____14978;
}
} else
{return and__3546__auto____14976;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15020.call(this,h,child);
case  3 :
return isa_QMARK___15021.call(this,h,child,parent);
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
var parents__15029 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15030 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15029.call(this,h);
case  2 :
return parents__15030.call(this,h,tag);
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
var ancestors__15036 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15037 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15036.call(this,h);
case  2 :
return ancestors__15037.call(this,h,tag);
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
var descendants__15042 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15043 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15042.call(this,h);
case  2 :
return descendants__15043.call(this,h,tag);
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
var derive__15114 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15115 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15049 = "﷐'parents".call(null,h);
var td__15051 = "﷐'descendants".call(null,h);
var ta__15052 = "﷐'ancestors".call(null,h);
var tf__15096 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15113 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15049.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15052.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15052.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15049,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15096.call(null,"﷐'ancestors".call(null,h),tag,td__15051,parent,ta__15052),"﷐'descendants":tf__15096.call(null,"﷐'descendants".call(null,h),parent,ta__15052,tag,td__15051)});
})());

if(cljs.core.truth_(or__3548__auto____15113))
{return or__3548__auto____15113;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15114.call(this,h,tag);
case  3 :
return derive__15115.call(this,h,tag,parent);
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
var underive__15130 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15131 = (function (h,tag,parent){
var parentMap__15125 = "﷐'parents".call(null,h);
var childsParents__15126 = (cljs.core.truth_(parentMap__15125.call(null,tag))?cljs.core.disj.call(null,parentMap__15125.call(null,tag),parent):cljs.core.set([]));
var newParents__15128 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15126))?cljs.core.assoc.call(null,parentMap__15125,tag,childsParents__15126):cljs.core.dissoc.call(null,parentMap__15125,tag));
var deriv_seq__15129 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15046_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15046_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15046_SHARP_),cljs.core.second.call(null,p1__15046_SHARP_)));
}),cljs.core.seq.call(null,newParents__15128)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15125.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15047_SHARP_,p2__15048_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15047_SHARP_,p2__15048_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15129));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15130.call(this,h,tag);
case  3 :
return underive__15131.call(this,h,tag,parent);
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
var xprefs__15154 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15156 = (cljs.core.truth_((function (){var and__3546__auto____15155 = xprefs__15154;

if(cljs.core.truth_(and__3546__auto____15155))
{return xprefs__15154.call(null,y);
} else
{return and__3546__auto____15155;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15156))
{return or__3548__auto____15156;
} else
{var or__3548__auto____15158 = (function (){var ps__15157 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15157) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15157),prefer_table)))
{} else
{}
{
var G__15200 = cljs.core.rest.call(null,ps__15157);
ps__15157 = G__15200;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15158))
{return or__3548__auto____15158;
} else
{var or__3548__auto____15168 = (function (){var ps__15159 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15159) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15159),y,prefer_table)))
{} else
{}
{
var G__15202 = cljs.core.rest.call(null,ps__15159);
ps__15159 = G__15202;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15168))
{return or__3548__auto____15168;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15209 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15209))
{return or__3548__auto____15209;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15232 = cljs.core.reduce.call(null,(function (be,p__15214){
var vec__15215__15216 = p__15214;
var k__15218 = cljs.core.nth.call(null,vec__15215__15216,0,null);
var ___15219 = cljs.core.nth.call(null,vec__15215__15216,1,null);
var e__15221 = vec__15215__15216;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15218)))
{var be2__15228 = (cljs.core.truth_((function (){var or__3548__auto____15226 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15226))
{return or__3548__auto____15226;
} else
{return cljs.core.dominates.call(null,k__15218,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15221:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15228),k__15218,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15218," and ",cljs.core.first.call(null,be2__15228),", and neither is preferred")));
}
return be2__15228;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15232))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15232));
return cljs.core.second.call(null,best_entry__15232);
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
if(cljs.core.truth_((function (){var and__3546__auto____15244 = mf;

if(cljs.core.truth_(and__3546__auto____15244))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15244;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15246 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15246))
{return or__3548__auto____15246;
} else
{var or__3548__auto____15248 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15248))
{return or__3548__auto____15248;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15251 = mf;

if(cljs.core.truth_(and__3546__auto____15251))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15251;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15255 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15255))
{return or__3548__auto____15255;
} else
{var or__3548__auto____15272 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15272))
{return or__3548__auto____15272;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15274 = mf;

if(cljs.core.truth_(and__3546__auto____15274))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15274;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15277 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15277))
{return or__3548__auto____15277;
} else
{var or__3548__auto____15278 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15278))
{return or__3548__auto____15278;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15281 = mf;

if(cljs.core.truth_(and__3546__auto____15281))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15281;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15282 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15282))
{return or__3548__auto____15282;
} else
{var or__3548__auto____15283 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15283))
{return or__3548__auto____15283;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15287 = mf;

if(cljs.core.truth_(and__3546__auto____15287))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15287;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15288 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15288))
{return or__3548__auto____15288;
} else
{var or__3548__auto____15289 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15289))
{return or__3548__auto____15289;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15290 = mf;

if(cljs.core.truth_(and__3546__auto____15290))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15290;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15414 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15414))
{return or__3548__auto____15414;
} else
{var or__3548__auto____15415 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15415))
{return or__3548__auto____15415;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15416 = mf;

if(cljs.core.truth_(and__3546__auto____15416))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15416;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15417 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15417))
{return or__3548__auto____15417;
} else
{var or__3548__auto____15418 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15418))
{return or__3548__auto____15418;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15419 = mf;

if(cljs.core.truth_(and__3546__auto____15419))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15419;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15421 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15421))
{return or__3548__auto____15421;
} else
{var or__3548__auto____15423 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15423))
{return or__3548__auto____15423;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15451 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15452 = cljs.core._get_method.call(null,mf,dispatch_val__15451);

if(cljs.core.truth_(target_fn__15452))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15451)));
}
return cljs.core.apply.call(null,target_fn__15452,args);
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
var this__15455 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15458 = this;
cljs.core.swap_BANG_.call(null,this__15458.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15458.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15458.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15458.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15464 = this;
cljs.core.swap_BANG_.call(null,this__15464.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15464.method_cache,this__15464.method_table,this__15464.cached_hierarchy,this__15464.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15468 = this;
cljs.core.swap_BANG_.call(null,this__15468.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15468.method_cache,this__15468.method_table,this__15468.cached_hierarchy,this__15468.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15470 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15470.cached_hierarchy),cljs.core.deref.call(null,this__15470.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15470.method_cache,this__15470.method_table,this__15470.cached_hierarchy,this__15470.hierarchy);
}
var temp__3695__auto____15472 = cljs.core.deref.call(null,this__15470.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15472))
{var target_fn__15473 = temp__3695__auto____15472;

return target_fn__15473;
} else
{var temp__3695__auto____15474 = cljs.core.find_and_cache_best_method.call(null,this__15470.name,dispatch_val,this__15470.hierarchy,this__15470.method_table,this__15470.prefer_table,this__15470.method_cache,this__15470.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15474))
{var target_fn__15475 = temp__3695__auto____15474;

return target_fn__15475;
} else
{return cljs.core.deref.call(null,this__15470.method_table).call(null,this__15470.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15476 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15476.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15476.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15476.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15476.method_cache,this__15476.method_table,this__15476.cached_hierarchy,this__15476.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15477 = this;
return cljs.core.deref.call(null,this__15477.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15479 = this;
return cljs.core.deref.call(null,this__15479.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15481 = this;
return cljs.core.do_dispatch.call(null,mf,this__15481.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15521__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15521 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15521__delegate.call(this, _, args);
};
G__15521.cljs$lang$maxFixedArity = 1;
G__15521.cljs$lang$applyTo = (function (arglist__15522){
var _ = cljs.core.first(arglist__15522);
var args = cljs.core.rest(arglist__15522);
return G__15521__delegate.call(this, _, args);
});
return G__15521;
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
