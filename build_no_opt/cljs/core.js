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
var or__3548__auto____7195 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____7195))
{return or__3548__auto____7195;
} else
{var or__3548__auto____7211 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____7211))
{return or__3548__auto____7211;
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
var _invoke__7600 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7282 = this$;

if(cljs.core.truth_(and__3546__auto____7282))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7282;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7287 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7287))
{return or__3548__auto____7287;
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
var _invoke__7601 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7294 = this$;

if(cljs.core.truth_(and__3546__auto____7294))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7294;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7299 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{var or__3548__auto____7300 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7300))
{return or__3548__auto____7300;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7602 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7304 = this$;

if(cljs.core.truth_(and__3546__auto____7304))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7304;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____7309 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7309))
{return or__3548__auto____7309;
} else
{var or__3548__auto____7312 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7312))
{return or__3548__auto____7312;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__7603 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7316 = this$;

if(cljs.core.truth_(and__3546__auto____7316))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7316;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7321 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{var or__3548__auto____7324 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7324))
{return or__3548__auto____7324;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7604 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7327 = this$;

if(cljs.core.truth_(and__3546__auto____7327))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7327;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7332 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7332))
{return or__3548__auto____7332;
} else
{var or__3548__auto____7336 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7336))
{return or__3548__auto____7336;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7605 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7339 = this$;

if(cljs.core.truth_(and__3546__auto____7339))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7339;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7343 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7343))
{return or__3548__auto____7343;
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
var _invoke__7606 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7430 = this$;

if(cljs.core.truth_(and__3546__auto____7430))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7430;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7431 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7431))
{return or__3548__auto____7431;
} else
{var or__3548__auto____7432 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7432))
{return or__3548__auto____7432;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7607 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7434 = this$;

if(cljs.core.truth_(and__3546__auto____7434))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7434;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____7450 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7450))
{return or__3548__auto____7450;
} else
{var or__3548__auto____7459 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7459))
{return or__3548__auto____7459;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7608 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7462 = this$;

if(cljs.core.truth_(and__3546__auto____7462))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7462;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7463 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7463))
{return or__3548__auto____7463;
} else
{var or__3548__auto____7464 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7464))
{return or__3548__auto____7464;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7467 = this$;

if(cljs.core.truth_(and__3546__auto____7467))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7467;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7489 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{var or__3548__auto____7490 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7490))
{return or__3548__auto____7490;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7610 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7491 = this$;

if(cljs.core.truth_(and__3546__auto____7491))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7491;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7492 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7492))
{return or__3548__auto____7492;
} else
{var or__3548__auto____7493 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7493))
{return or__3548__auto____7493;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7494 = this$;

if(cljs.core.truth_(and__3546__auto____7494))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7494;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7496 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7496))
{return or__3548__auto____7496;
} else
{var or__3548__auto____7497 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7497))
{return or__3548__auto____7497;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7612 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7500 = this$;

if(cljs.core.truth_(and__3546__auto____7500))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7500;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7504 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7504))
{return or__3548__auto____7504;
} else
{var or__3548__auto____7507 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7507))
{return or__3548__auto____7507;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7509 = this$;

if(cljs.core.truth_(and__3546__auto____7509))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7509;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7510 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7510))
{return or__3548__auto____7510;
} else
{var or__3548__auto____7511 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7511))
{return or__3548__auto____7511;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7514 = this$;

if(cljs.core.truth_(and__3546__auto____7514))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7514;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7516 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7516))
{return or__3548__auto____7516;
} else
{var or__3548__auto____7517 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7517))
{return or__3548__auto____7517;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7532 = this$;

if(cljs.core.truth_(and__3546__auto____7532))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7532;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____7534 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7534))
{return or__3548__auto____7534;
} else
{var or__3548__auto____7584 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7584))
{return or__3548__auto____7584;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7585 = this$;

if(cljs.core.truth_(and__3546__auto____7585))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7585;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7586 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7586))
{return or__3548__auto____7586;
} else
{var or__3548__auto____7587 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7587))
{return or__3548__auto____7587;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7588 = this$;

if(cljs.core.truth_(and__3546__auto____7588))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7588;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7589 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7589))
{return or__3548__auto____7589;
} else
{var or__3548__auto____7590 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7590))
{return or__3548__auto____7590;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7591 = this$;

if(cljs.core.truth_(and__3546__auto____7591))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7591;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7592 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7592))
{return or__3548__auto____7592;
} else
{var or__3548__auto____7593 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7593))
{return or__3548__auto____7593;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7594 = this$;

if(cljs.core.truth_(and__3546__auto____7594))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7594;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7595 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7595))
{return or__3548__auto____7595;
} else
{var or__3548__auto____7596 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7596))
{return or__3548__auto____7596;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7597 = this$;

if(cljs.core.truth_(and__3546__auto____7597))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7597;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7598 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{var or__3548__auto____7599 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7599))
{return or__3548__auto____7599;
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
return _invoke__7600.call(this,this$);
case  2 :
return _invoke__7601.call(this,this$,a);
case  3 :
return _invoke__7602.call(this,this$,a,b);
case  4 :
return _invoke__7603.call(this,this$,a,b,c);
case  5 :
return _invoke__7604.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7605.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7606.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7607.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7608.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7609.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7610.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7611.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7612.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7613.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7643 = coll;

if(cljs.core.truth_(and__3546__auto____7643))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7643;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7644 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7644))
{return or__3548__auto____7644;
} else
{var or__3548__auto____7645 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7645))
{return or__3548__auto____7645;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7651 = coll;

if(cljs.core.truth_(and__3546__auto____7651))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7651;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7653 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7653))
{return or__3548__auto____7653;
} else
{var or__3548__auto____7656 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7656))
{return or__3548__auto____7656;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7658 = coll;

if(cljs.core.truth_(and__3546__auto____7658))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7658;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7681 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7681))
{return or__3548__auto____7681;
} else
{var or__3548__auto____7682 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7682))
{return or__3548__auto____7682;
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
var _nth__7717 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7689 = coll;

if(cljs.core.truth_(and__3546__auto____7689))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7689;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7693 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7693))
{return or__3548__auto____7693;
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
var _nth__7718 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7711 = coll;

if(cljs.core.truth_(and__3546__auto____7711))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7711;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7713 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
} else
{var or__3548__auto____7715 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7715))
{return or__3548__auto____7715;
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
return _nth__7717.call(this,coll,n);
case  3 :
return _nth__7718.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7721 = coll;

if(cljs.core.truth_(and__3546__auto____7721))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____7721;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____7726 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7726))
{return or__3548__auto____7726;
} else
{var or__3548__auto____7728 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____7728))
{return or__3548__auto____7728;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7733 = coll;

if(cljs.core.truth_(and__3546__auto____7733))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____7733;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____7735 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7735))
{return or__3548__auto____7735;
} else
{var or__3548__auto____7740 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7740))
{return or__3548__auto____7740;
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
var _lookup__7760 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7742 = o;

if(cljs.core.truth_(and__3546__auto____7742))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7742;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7749 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7749))
{return or__3548__auto____7749;
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
var _lookup__7761 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7755 = o;

if(cljs.core.truth_(and__3546__auto____7755))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7755;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____7757 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7757))
{return or__3548__auto____7757;
} else
{var or__3548__auto____7759 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7759))
{return or__3548__auto____7759;
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
return _lookup__7760.call(this,o,k);
case  3 :
return _lookup__7761.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7804 = coll;

if(cljs.core.truth_(and__3546__auto____7804))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7804;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____7806 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7806))
{return or__3548__auto____7806;
} else
{var or__3548__auto____7809 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____7809))
{return or__3548__auto____7809;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____7812 = coll;

if(cljs.core.truth_(and__3546__auto____7812))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7812;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7813 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7813))
{return or__3548__auto____7813;
} else
{var or__3548__auto____7814 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____7814))
{return or__3548__auto____7814;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7827 = coll;

if(cljs.core.truth_(and__3546__auto____7827))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7827;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____7830 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7830))
{return or__3548__auto____7830;
} else
{var or__3548__auto____7833 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____7833))
{return or__3548__auto____7833;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____7843 = coll;

if(cljs.core.truth_(and__3546__auto____7843))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7843;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7844 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7844))
{return or__3548__auto____7844;
} else
{var or__3548__auto____7845 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7845))
{return or__3548__auto____7845;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7852 = coll;

if(cljs.core.truth_(and__3546__auto____7852))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7852;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7854 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7854))
{return or__3548__auto____7854;
} else
{var or__3548__auto____7855 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7855))
{return or__3548__auto____7855;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7876 = coll;

if(cljs.core.truth_(and__3546__auto____7876))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7876;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7880 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7880))
{return or__3548__auto____7880;
} else
{var or__3548__auto____7882 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7882))
{return or__3548__auto____7882;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7889 = coll;

if(cljs.core.truth_(and__3546__auto____7889))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7889;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7892 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7892))
{return or__3548__auto____7892;
} else
{var or__3548__auto____7893 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7893))
{return or__3548__auto____7893;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7926 = o;

if(cljs.core.truth_(and__3546__auto____7926))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7926;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7950 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7950))
{return or__3548__auto____7950;
} else
{var or__3548__auto____7952 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7952))
{return or__3548__auto____7952;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7957 = o;

if(cljs.core.truth_(and__3546__auto____7957))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7957;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7961 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7961))
{return or__3548__auto____7961;
} else
{var or__3548__auto____7963 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7963))
{return or__3548__auto____7963;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7969 = o;

if(cljs.core.truth_(and__3546__auto____7969))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7969;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7972 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7972))
{return or__3548__auto____7972;
} else
{var or__3548__auto____7974 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7974))
{return or__3548__auto____7974;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7980 = o;

if(cljs.core.truth_(and__3546__auto____7980))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7980;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7982 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7982))
{return or__3548__auto____7982;
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
var _reduce__8009 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7993 = coll;

if(cljs.core.truth_(and__3546__auto____7993))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7993;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____7995 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7995))
{return or__3548__auto____7995;
} else
{var or__3548__auto____7996 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____7996))
{return or__3548__auto____7996;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8010 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____7998 = coll;

if(cljs.core.truth_(and__3546__auto____7998))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7998;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8002 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8002))
{return or__3548__auto____8002;
} else
{var or__3548__auto____8005 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8005))
{return or__3548__auto____8005;
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
return _reduce__8009.call(this,coll,f);
case  3 :
return _reduce__8010.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____8021 = o;

if(cljs.core.truth_(and__3546__auto____8021))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8021;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8022 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8022))
{return or__3548__auto____8022;
} else
{var or__3548__auto____8023 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8023))
{return or__3548__auto____8023;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8031 = o;

if(cljs.core.truth_(and__3546__auto____8031))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8031;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8033 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8033))
{return or__3548__auto____8033;
} else
{var or__3548__auto____8035 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8035))
{return or__3548__auto____8035;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8042 = o;

if(cljs.core.truth_(and__3546__auto____8042))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8042;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8043 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8043))
{return or__3548__auto____8043;
} else
{var or__3548__auto____8044 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8044))
{return or__3548__auto____8044;
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
if(cljs.core.truth_((function (){var and__3546__auto____8047 = o;

if(cljs.core.truth_(and__3546__auto____8047))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8047;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8050 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8050))
{return or__3548__auto____8050;
} else
{var or__3548__auto____8051 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8051))
{return or__3548__auto____8051;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____8057 = d;

if(cljs.core.truth_(and__3546__auto____8057))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____8057;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____8058 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____8058))
{return or__3548__auto____8058;
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
if(cljs.core.truth_((function (){var and__3546__auto____8071 = this$;

if(cljs.core.truth_(and__3546__auto____8071))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8071;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8072 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8072))
{return or__3548__auto____8072;
} else
{var or__3548__auto____8073 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8073))
{return or__3548__auto____8073;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8076 = this$;

if(cljs.core.truth_(and__3546__auto____8076))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8076;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8078 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8078))
{return or__3548__auto____8078;
} else
{var or__3548__auto____8079 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8079))
{return or__3548__auto____8079;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8081 = this$;

if(cljs.core.truth_(and__3546__auto____8081))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8081;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8083 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8083))
{return or__3548__auto____8083;
} else
{var or__3548__auto____8084 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8084))
{return or__3548__auto____8084;
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
var G__8127 = null;
var G__8127__8128 = (function (o,k){
return null;
});
var G__8127__8129 = (function (o,k,not_found){
return not_found;
});
G__8127 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8127__8128.call(this,o,k);
case  3 :
return G__8127__8129.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8127;
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
var G__8131 = null;
var G__8131__8132 = (function (_,f){
return f.call(null);
});
var G__8131__8133 = (function (_,f,start){
return start;
});
G__8131 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8131__8132.call(this,_,f);
case  3 :
return G__8131__8133.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8131;
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
var G__8161 = null;
var G__8161__8162 = (function (_,n){
return null;
});
var G__8161__8163 = (function (_,n,not_found){
return not_found;
});
G__8161 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8161__8162.call(this,_,n);
case  3 :
return G__8161__8163.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8161;
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
var ci_reduce__8198 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8182 = cljs.core._nth.call(null,cicoll,0);
var n__8183 = 1;

while(true){
if(cljs.core.truth_((n__8183 < cljs.core._count.call(null,cicoll))))
{{
var G__8211 = f.call(null,val__8182,cljs.core._nth.call(null,cicoll,n__8183));
var G__8212 = (n__8183 + 1);
val__8182 = G__8211;
n__8183 = G__8212;
continue;
}
} else
{return val__8182;
}
break;
}
}
});
var ci_reduce__8199 = (function (cicoll,f,val){
var val__8188 = val;
var n__8189 = 0;

while(true){
if(cljs.core.truth_((n__8189 < cljs.core._count.call(null,cicoll))))
{{
var G__8218 = f.call(null,val__8188,cljs.core._nth.call(null,cicoll,n__8189));
var G__8220 = (n__8189 + 1);
val__8188 = G__8218;
n__8189 = G__8220;
continue;
}
} else
{return val__8188;
}
break;
}
});
var ci_reduce__8200 = (function (cicoll,f,val,idx){
var val__8194 = val;
var n__8195 = idx;

while(true){
if(cljs.core.truth_((n__8195 < cljs.core._count.call(null,cicoll))))
{{
var G__8225 = f.call(null,val__8194,cljs.core._nth.call(null,cicoll,n__8195));
var G__8226 = (n__8195 + 1);
val__8194 = G__8225;
n__8195 = G__8226;
continue;
}
} else
{return val__8194;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8198.call(this,cicoll,f);
case  3 :
return ci_reduce__8199.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8200.call(this,cicoll,f,val,idx);
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
var this__8281 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8324 = null;
var G__8324__8325 = (function (_,f){
var this__8284 = this;
return cljs.core.ci_reduce.call(null,this__8284.a,f,(this__8284.a[this__8284.i]),(this__8284.i + 1));
});
var G__8324__8326 = (function (_,f,start){
var this__8286 = this;
return cljs.core.ci_reduce.call(null,this__8286.a,f,start,this__8286.i);
});
G__8324 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8324__8325.call(this,_,f);
case  3 :
return G__8324__8326.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8324;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8287 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8291 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8332 = null;
var G__8332__8333 = (function (coll,n){
var this__8293 = this;
var i__8295 = (n + this__8293.i);

if(cljs.core.truth_((i__8295 < this__8293.a.length)))
{return (this__8293.a[i__8295]);
} else
{return null;
}
});
var G__8332__8334 = (function (coll,n,not_found){
var this__8298 = this;
var i__8304 = (n + this__8298.i);

if(cljs.core.truth_((i__8304 < this__8298.a.length)))
{return (this__8298.a[i__8304]);
} else
{return not_found;
}
});
G__8332 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8332__8333.call(this,coll,n);
case  3 :
return G__8332__8334.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8332;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8305 = this;
return (this__8305.a.length - this__8305.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8311 = this;
return (this__8311.a[this__8311.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8313 = this;
if(cljs.core.truth_(((this__8313.i + 1) < this__8313.a.length)))
{return (new cljs.core.IndexedSeq(this__8313.a,(this__8313.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8316 = this;
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
var G__8363 = null;
var G__8363__8364 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8363__8365 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8363 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8363__8364.call(this,array,f);
case  3 :
return G__8363__8365.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8363;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8367 = null;
var G__8367__8368 = (function (array,k){
return (array[k]);
});
var G__8367__8369 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8367 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8367__8368.call(this,array,k);
case  3 :
return G__8367__8369.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8367;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8429 = null;
var G__8429__8430 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8429__8431 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8429 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8429__8430.call(this,array,n);
case  3 :
return G__8429__8431.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8429;
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
var temp__3698__auto____8436 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8436))
{var s__8437 = temp__3698__auto____8436;

return cljs.core._first.call(null,s__8437);
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
var G__8447 = cljs.core.next.call(null,s);
s = G__8447;
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
var s__8448 = cljs.core.seq.call(null,x);
var n__8449 = 0;

while(true){
if(cljs.core.truth_(s__8448))
{{
var G__8487 = cljs.core.next.call(null,s__8448);
var G__8488 = (n__8449 + 1);
s__8448 = G__8487;
n__8449 = G__8488;
continue;
}
} else
{return n__8449;
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
var conj__8489 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8490 = (function() { 
var G__8492__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8494 = conj.call(null,coll,x);
var G__8548 = cljs.core.first.call(null,xs);
var G__8549 = cljs.core.next.call(null,xs);
coll = G__8494;
x = G__8548;
xs = G__8549;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8492 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8492__delegate.call(this, coll, x, xs);
};
G__8492.cljs$lang$maxFixedArity = 2;
G__8492.cljs$lang$applyTo = (function (arglist__8550){
var coll = cljs.core.first(arglist__8550);
var x = cljs.core.first(cljs.core.next(arglist__8550));
var xs = cljs.core.rest(cljs.core.next(arglist__8550));
return G__8492__delegate.call(this, coll, x, xs);
});
return G__8492;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8489.call(this,coll,x);
default:
return conj__8490.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8490.cljs$lang$applyTo;
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
var nth__8554 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8555 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8554.call(this,coll,n);
case  3 :
return nth__8555.call(this,coll,n,not_found);
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
var get__8557 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__8558 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8557.call(this,o,k);
case  3 :
return get__8558.call(this,o,k,not_found);
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
var assoc__8562 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8563 = (function() { 
var G__8565__delegate = function (coll,k,v,kvs){
while(true){
var ret__8560 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8566 = ret__8560;
var G__8567 = cljs.core.first.call(null,kvs);
var G__8568 = cljs.core.second.call(null,kvs);
var G__8569 = cljs.core.nnext.call(null,kvs);
coll = G__8566;
k = G__8567;
v = G__8568;
kvs = G__8569;
continue;
}
} else
{return ret__8560;
}
break;
}
};
var G__8565 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8565__delegate.call(this, coll, k, v, kvs);
};
G__8565.cljs$lang$maxFixedArity = 3;
G__8565.cljs$lang$applyTo = (function (arglist__8573){
var coll = cljs.core.first(arglist__8573);
var k = cljs.core.first(cljs.core.next(arglist__8573));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8573)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8573)));
return G__8565__delegate.call(this, coll, k, v, kvs);
});
return G__8565;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8562.call(this,coll,k,v);
default:
return assoc__8563.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8563.cljs$lang$applyTo;
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
var dissoc__8586 = (function (coll){
return coll;
});
var dissoc__8587 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8588 = (function() { 
var G__8590__delegate = function (coll,k,ks){
while(true){
var ret__8574 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8591 = ret__8574;
var G__8592 = cljs.core.first.call(null,ks);
var G__8593 = cljs.core.next.call(null,ks);
coll = G__8591;
k = G__8592;
ks = G__8593;
continue;
}
} else
{return ret__8574;
}
break;
}
};
var G__8590 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8590__delegate.call(this, coll, k, ks);
};
G__8590.cljs$lang$maxFixedArity = 2;
G__8590.cljs$lang$applyTo = (function (arglist__8595){
var coll = cljs.core.first(arglist__8595);
var k = cljs.core.first(cljs.core.next(arglist__8595));
var ks = cljs.core.rest(cljs.core.next(arglist__8595));
return G__8590__delegate.call(this, coll, k, ks);
});
return G__8590;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8586.call(this,coll);
case  2 :
return dissoc__8587.call(this,coll,k);
default:
return dissoc__8588.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8588.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8605 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8606 = x__445__auto____8605;

if(cljs.core.truth_(and__3546__auto____8606))
{var and__3546__auto____8607 = x__445__auto____8605.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8607))
{return cljs.core.not.call(null,x__445__auto____8605.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8607;
}
} else
{return and__3546__auto____8606;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8605);
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
var disj__8650 = (function (coll){
return coll;
});
var disj__8651 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8652 = (function() { 
var G__8658__delegate = function (coll,k,ks){
while(true){
var ret__8618 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8659 = ret__8618;
var G__8660 = cljs.core.first.call(null,ks);
var G__8661 = cljs.core.next.call(null,ks);
coll = G__8659;
k = G__8660;
ks = G__8661;
continue;
}
} else
{return ret__8618;
}
break;
}
};
var G__8658 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8658__delegate.call(this, coll, k, ks);
};
G__8658.cljs$lang$maxFixedArity = 2;
G__8658.cljs$lang$applyTo = (function (arglist__8664){
var coll = cljs.core.first(arglist__8664);
var k = cljs.core.first(cljs.core.next(arglist__8664));
var ks = cljs.core.rest(cljs.core.next(arglist__8664));
return G__8658__delegate.call(this, coll, k, ks);
});
return G__8658;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8650.call(this,coll);
case  2 :
return disj__8651.call(this,coll,k);
default:
return disj__8652.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8652.cljs$lang$applyTo;
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
{var x__445__auto____8733 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8734 = x__445__auto____8733;

if(cljs.core.truth_(and__3546__auto____8734))
{var and__3546__auto____8736 = x__445__auto____8733.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8736))
{return cljs.core.not.call(null,x__445__auto____8733.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8736;
}
} else
{return and__3546__auto____8734;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8733);
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
{var x__445__auto____8744 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8746 = x__445__auto____8744;

if(cljs.core.truth_(and__3546__auto____8746))
{var and__3546__auto____8749 = x__445__auto____8744.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8749))
{return cljs.core.not.call(null,x__445__auto____8744.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8749;
}
} else
{return and__3546__auto____8746;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8744);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8752 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8754 = x__445__auto____8752;

if(cljs.core.truth_(and__3546__auto____8754))
{var and__3546__auto____8756 = x__445__auto____8752.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8756))
{return cljs.core.not.call(null,x__445__auto____8752.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8756;
}
} else
{return and__3546__auto____8754;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8752);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8758 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8759 = x__445__auto____8758;

if(cljs.core.truth_(and__3546__auto____8759))
{var and__3546__auto____8761 = x__445__auto____8758.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8761))
{return cljs.core.not.call(null,x__445__auto____8758.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8761;
}
} else
{return and__3546__auto____8759;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8758);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8762 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8763 = x__445__auto____8762;

if(cljs.core.truth_(and__3546__auto____8763))
{var and__3546__auto____8764 = x__445__auto____8762.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8764))
{return cljs.core.not.call(null,x__445__auto____8762.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8764;
}
} else
{return and__3546__auto____8763;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8762);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8768 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8769 = x__445__auto____8768;

if(cljs.core.truth_(and__3546__auto____8769))
{var and__3546__auto____8770 = x__445__auto____8768.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8770))
{return cljs.core.not.call(null,x__445__auto____8768.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8770;
}
} else
{return and__3546__auto____8769;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8768);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8784 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8786 = x__445__auto____8784;

if(cljs.core.truth_(and__3546__auto____8786))
{var and__3546__auto____8787 = x__445__auto____8784.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8787))
{return cljs.core.not.call(null,x__445__auto____8784.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8787;
}
} else
{return and__3546__auto____8786;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8784);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8792 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8792.push(key);
}));
return keys__8792;
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
{var x__445__auto____8804 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8805 = x__445__auto____8804;

if(cljs.core.truth_(and__3546__auto____8805))
{var and__3546__auto____8806 = x__445__auto____8804.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8806))
{return cljs.core.not.call(null,x__445__auto____8804.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8806;
}
} else
{return and__3546__auto____8805;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8804);
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
var and__3546__auto____8823 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8823))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8825 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8825))
{return or__3548__auto____8825;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8823;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8829 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8829))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8829;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8831 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8831))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8831;
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
var and__3546__auto____8838 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8838))
{return (n == n.toFixed());
} else
{return and__3546__auto____8838;
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
if(cljs.core.truth_((function (){var and__3546__auto____8855 = coll;

if(cljs.core.truth_(and__3546__auto____8855))
{var and__3546__auto____8857 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8857))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8857;
}
} else
{return and__3546__auto____8855;
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
var distinct_QMARK___8868 = (function (x){
return true;
});
var distinct_QMARK___8869 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___8870 = (function() { 
var G__8873__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__8863 = cljs.core.set([y,x]);
var xs__8864 = more;

while(true){
var x__8865 = cljs.core.first.call(null,xs__8864);
var etc__8866 = cljs.core.next.call(null,xs__8864);

if(cljs.core.truth_(xs__8864))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__8863,x__8865)))
{return false;
} else
{{
var G__8874 = cljs.core.conj.call(null,s__8863,x__8865);
var G__8875 = etc__8866;
s__8863 = G__8874;
xs__8864 = G__8875;
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
var G__8873 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8873__delegate.call(this, x, y, more);
};
G__8873.cljs$lang$maxFixedArity = 2;
G__8873.cljs$lang$applyTo = (function (arglist__8943){
var x = cljs.core.first(arglist__8943);
var y = cljs.core.first(cljs.core.next(arglist__8943));
var more = cljs.core.rest(cljs.core.next(arglist__8943));
return G__8873__delegate.call(this, x, y, more);
});
return G__8873;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___8868.call(this,x);
case  2 :
return distinct_QMARK___8869.call(this,x,y);
default:
return distinct_QMARK___8870.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___8870.cljs$lang$applyTo;
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
var r__9012 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9012)))
{return r__9012;
} else
{if(cljs.core.truth_(r__9012))
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
var sort_by__9126 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9127 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9126.call(this,keyfn,comp);
case  3 :
return sort_by__9127.call(this,keyfn,comp,coll);
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
var reduce__9135 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9136 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9135.call(this,f,val);
case  3 :
return reduce__9136.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9154 = (function (f,coll){
var temp__3695__auto____9147 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9147))
{var s__9148 = temp__3695__auto____9147;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9148),cljs.core.next.call(null,s__9148));
} else
{return f.call(null);
}
});
var seq_reduce__9155 = (function (f,val,coll){
var val__9151 = val;
var coll__9152 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9152))
{{
var G__9158 = f.call(null,val__9151,cljs.core.first.call(null,coll__9152));
var G__9159 = cljs.core.next.call(null,coll__9152);
val__9151 = G__9158;
coll__9152 = G__9159;
continue;
}
} else
{return val__9151;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9154.call(this,f,val);
case  3 :
return seq_reduce__9155.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9165 = null;
var G__9165__9167 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9165__9168 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9165 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9165__9167.call(this,coll,f);
case  3 :
return G__9165__9168.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9165;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9174 = (function (){
return 0;
});
var _PLUS___9175 = (function (x){
return x;
});
var _PLUS___9176 = (function (x,y){
return (x + y);
});
var _PLUS___9245 = (function() { 
var G__9251__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9251 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9251__delegate.call(this, x, y, more);
};
G__9251.cljs$lang$maxFixedArity = 2;
G__9251.cljs$lang$applyTo = (function (arglist__9254){
var x = cljs.core.first(arglist__9254);
var y = cljs.core.first(cljs.core.next(arglist__9254));
var more = cljs.core.rest(cljs.core.next(arglist__9254));
return G__9251__delegate.call(this, x, y, more);
});
return G__9251;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9174.call(this);
case  1 :
return _PLUS___9175.call(this,x);
case  2 :
return _PLUS___9176.call(this,x,y);
default:
return _PLUS___9245.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9245.cljs$lang$applyTo;
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
var ___9261 = (function (x){
return (- x);
});
var ___9262 = (function (x,y){
return (x - y);
});
var ___9263 = (function() { 
var G__9269__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9269 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9269__delegate.call(this, x, y, more);
};
G__9269.cljs$lang$maxFixedArity = 2;
G__9269.cljs$lang$applyTo = (function (arglist__9274){
var x = cljs.core.first(arglist__9274);
var y = cljs.core.first(cljs.core.next(arglist__9274));
var more = cljs.core.rest(cljs.core.next(arglist__9274));
return G__9269__delegate.call(this, x, y, more);
});
return G__9269;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9261.call(this,x);
case  2 :
return ___9262.call(this,x,y);
default:
return ___9263.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9263.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9284 = (function (){
return 1;
});
var _STAR___9285 = (function (x){
return x;
});
var _STAR___9286 = (function (x,y){
return (x * y);
});
var _STAR___9287 = (function() { 
var G__9290__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9290 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9290__delegate.call(this, x, y, more);
};
G__9290.cljs$lang$maxFixedArity = 2;
G__9290.cljs$lang$applyTo = (function (arglist__9297){
var x = cljs.core.first(arglist__9297);
var y = cljs.core.first(cljs.core.next(arglist__9297));
var more = cljs.core.rest(cljs.core.next(arglist__9297));
return G__9290__delegate.call(this, x, y, more);
});
return G__9290;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9284.call(this);
case  1 :
return _STAR___9285.call(this,x);
case  2 :
return _STAR___9286.call(this,x,y);
default:
return _STAR___9287.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9287.cljs$lang$applyTo;
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
var _SLASH___9312 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9313 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9314 = (function() { 
var G__9320__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9320 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9320__delegate.call(this, x, y, more);
};
G__9320.cljs$lang$maxFixedArity = 2;
G__9320.cljs$lang$applyTo = (function (arglist__9321){
var x = cljs.core.first(arglist__9321);
var y = cljs.core.first(cljs.core.next(arglist__9321));
var more = cljs.core.rest(cljs.core.next(arglist__9321));
return G__9320__delegate.call(this, x, y, more);
});
return G__9320;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9312.call(this,x);
case  2 :
return _SLASH___9313.call(this,x,y);
default:
return _SLASH___9314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9314.cljs$lang$applyTo;
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
var _LT___9323 = (function (x){
return true;
});
var _LT___9324 = (function (x,y){
return (x < y);
});
var _LT___9325 = (function() { 
var G__9327__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9329 = y;
var G__9330 = cljs.core.first.call(null,more);
var G__9331 = cljs.core.next.call(null,more);
x = G__9329;
y = G__9330;
more = G__9331;
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
var G__9327 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9327__delegate.call(this, x, y, more);
};
G__9327.cljs$lang$maxFixedArity = 2;
G__9327.cljs$lang$applyTo = (function (arglist__9332){
var x = cljs.core.first(arglist__9332);
var y = cljs.core.first(cljs.core.next(arglist__9332));
var more = cljs.core.rest(cljs.core.next(arglist__9332));
return G__9327__delegate.call(this, x, y, more);
});
return G__9327;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9323.call(this,x);
case  2 :
return _LT___9324.call(this,x,y);
default:
return _LT___9325.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9325.cljs$lang$applyTo;
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
var _LT__EQ___9339 = (function (x){
return true;
});
var _LT__EQ___9340 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9341 = (function() { 
var G__9343__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9346 = y;
var G__9347 = cljs.core.first.call(null,more);
var G__9348 = cljs.core.next.call(null,more);
x = G__9346;
y = G__9347;
more = G__9348;
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
var G__9343 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9343__delegate.call(this, x, y, more);
};
G__9343.cljs$lang$maxFixedArity = 2;
G__9343.cljs$lang$applyTo = (function (arglist__9349){
var x = cljs.core.first(arglist__9349);
var y = cljs.core.first(cljs.core.next(arglist__9349));
var more = cljs.core.rest(cljs.core.next(arglist__9349));
return G__9343__delegate.call(this, x, y, more);
});
return G__9343;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9339.call(this,x);
case  2 :
return _LT__EQ___9340.call(this,x,y);
default:
return _LT__EQ___9341.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9341.cljs$lang$applyTo;
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
var _GT___9356 = (function (x){
return true;
});
var _GT___9357 = (function (x,y){
return (x > y);
});
var _GT___9358 = (function() { 
var G__9360__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9362 = y;
var G__9363 = cljs.core.first.call(null,more);
var G__9364 = cljs.core.next.call(null,more);
x = G__9362;
y = G__9363;
more = G__9364;
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
var G__9360 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9360__delegate.call(this, x, y, more);
};
G__9360.cljs$lang$maxFixedArity = 2;
G__9360.cljs$lang$applyTo = (function (arglist__9365){
var x = cljs.core.first(arglist__9365);
var y = cljs.core.first(cljs.core.next(arglist__9365));
var more = cljs.core.rest(cljs.core.next(arglist__9365));
return G__9360__delegate.call(this, x, y, more);
});
return G__9360;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___9356.call(this,x);
case  2 :
return _GT___9357.call(this,x,y);
default:
return _GT___9358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___9358.cljs$lang$applyTo;
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
var _GT__EQ___9366 = (function (x){
return true;
});
var _GT__EQ___9367 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9368 = (function() { 
var G__9370__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9373 = y;
var G__9374 = cljs.core.first.call(null,more);
var G__9375 = cljs.core.next.call(null,more);
x = G__9373;
y = G__9374;
more = G__9375;
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
var G__9370 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9370__delegate.call(this, x, y, more);
};
G__9370.cljs$lang$maxFixedArity = 2;
G__9370.cljs$lang$applyTo = (function (arglist__9376){
var x = cljs.core.first(arglist__9376);
var y = cljs.core.first(cljs.core.next(arglist__9376));
var more = cljs.core.rest(cljs.core.next(arglist__9376));
return G__9370__delegate.call(this, x, y, more);
});
return G__9370;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9366.call(this,x);
case  2 :
return _GT__EQ___9367.call(this,x,y);
default:
return _GT__EQ___9368.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9368.cljs$lang$applyTo;
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
var max__9385 = (function (x){
return x;
});
var max__9386 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9387 = (function() { 
var G__9393__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__9393 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9393__delegate.call(this, x, y, more);
};
G__9393.cljs$lang$maxFixedArity = 2;
G__9393.cljs$lang$applyTo = (function (arglist__9461){
var x = cljs.core.first(arglist__9461);
var y = cljs.core.first(cljs.core.next(arglist__9461));
var more = cljs.core.rest(cljs.core.next(arglist__9461));
return G__9393__delegate.call(this, x, y, more);
});
return G__9393;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9385.call(this,x);
case  2 :
return max__9386.call(this,x,y);
default:
return max__9387.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9387.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9498 = (function (x){
return x;
});
var min__9499 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9500 = (function() { 
var G__9502__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9502 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9502__delegate.call(this, x, y, more);
};
G__9502.cljs$lang$maxFixedArity = 2;
G__9502.cljs$lang$applyTo = (function (arglist__9504){
var x = cljs.core.first(arglist__9504);
var y = cljs.core.first(cljs.core.next(arglist__9504));
var more = cljs.core.rest(cljs.core.next(arglist__9504));
return G__9502__delegate.call(this, x, y, more);
});
return G__9502;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9498.call(this,x);
case  2 :
return min__9499.call(this,x,y);
default:
return min__9500.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9500.cljs$lang$applyTo;
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
var rem__9636 = (n % d);

return cljs.core.fix.call(null,((n - rem__9636) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9637 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9637));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9641 = (function (){
return Math.random.call(null);
});
var rand__9642 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9641.call(this);
case  1 :
return rand__9642.call(this,n);
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
var _EQ__EQ___9746 = (function (x){
return true;
});
var _EQ__EQ___9747 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9748 = (function() { 
var G__9754__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9755 = y;
var G__9756 = cljs.core.first.call(null,more);
var G__9757 = cljs.core.next.call(null,more);
x = G__9755;
y = G__9756;
more = G__9757;
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
var G__9754 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9754__delegate.call(this, x, y, more);
};
G__9754.cljs$lang$maxFixedArity = 2;
G__9754.cljs$lang$applyTo = (function (arglist__9760){
var x = cljs.core.first(arglist__9760);
var y = cljs.core.first(cljs.core.next(arglist__9760));
var more = cljs.core.rest(cljs.core.next(arglist__9760));
return G__9754__delegate.call(this, x, y, more);
});
return G__9754;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9746.call(this,x);
case  2 :
return _EQ__EQ___9747.call(this,x,y);
default:
return _EQ__EQ___9748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9748.cljs$lang$applyTo;
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
var n__9776 = n;
var xs__9777 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9779 = xs__9777;

if(cljs.core.truth_(and__3546__auto____9779))
{return (n__9776 > 0);
} else
{return and__3546__auto____9779;
}
})()))
{{
var G__9782 = (n__9776 - 1);
var G__9783 = cljs.core.next.call(null,xs__9777);
n__9776 = G__9782;
xs__9777 = G__9783;
continue;
}
} else
{return xs__9777;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9791 = null;
var G__9791__9792 = (function (coll,n){
var temp__3695__auto____9784 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9784))
{var xs__9785 = temp__3695__auto____9784;

return cljs.core.first.call(null,xs__9785);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9791__9793 = (function (coll,n,not_found){
var temp__3695__auto____9789 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9789))
{var xs__9790 = temp__3695__auto____9789;

return cljs.core.first.call(null,xs__9790);
} else
{return not_found;
}
});
G__9791 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9791__9792.call(this,coll,n);
case  3 :
return G__9791__9793.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9791;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9795 = (function (){
return "";
});
var str_STAR___9796 = (function (x){
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
var str_STAR___9797 = (function() { 
var G__9799__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9800 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9801 = cljs.core.next.call(null,more);
sb = G__9800;
more = G__9801;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9799 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9799__delegate.call(this, x, ys);
};
G__9799.cljs$lang$maxFixedArity = 1;
G__9799.cljs$lang$applyTo = (function (arglist__9802){
var x = cljs.core.first(arglist__9802);
var ys = cljs.core.rest(arglist__9802);
return G__9799__delegate.call(this, x, ys);
});
return G__9799;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9795.call(this);
case  1 :
return str_STAR___9796.call(this,x);
default:
return str_STAR___9797.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9797.cljs$lang$applyTo;
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
var str__9803 = (function (){
return "";
});
var str__9804 = (function (x){
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
var str__9805 = (function() { 
var G__9847__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9847 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9847__delegate.call(this, x, ys);
};
G__9847.cljs$lang$maxFixedArity = 1;
G__9847.cljs$lang$applyTo = (function (arglist__9848){
var x = cljs.core.first(arglist__9848);
var ys = cljs.core.rest(arglist__9848);
return G__9847__delegate.call(this, x, ys);
});
return G__9847;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9803.call(this);
case  1 :
return str__9804.call(this,x);
default:
return str__9805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9805.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9849 = (function (s,start){
return s.substring(start);
});
var subs__9850 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9849.call(this,s,start);
case  3 :
return subs__9850.call(this,s,start,end);
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
var symbol__9864 = (function (name){
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
var symbol__9865 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__9864.call(this,ns);
case  2 :
return symbol__9865.call(this,ns,name);
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
var keyword__9867 = (function (name){
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
var keyword__9868 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9867.call(this,ns);
case  2 :
return keyword__9868.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9870 = cljs.core.seq.call(null,x);
var ys__9871 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9870)))
{return cljs.core.nil_QMARK_.call(null,ys__9871);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9871)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9870),cljs.core.first.call(null,ys__9871))))
{{
var G__9872 = cljs.core.next.call(null,xs__9870);
var G__9873 = cljs.core.next.call(null,ys__9871);
xs__9870 = G__9872;
ys__9871 = G__9873;
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
return cljs.core.reduce.call(null,(function (p1__9874_SHARP_,p2__9875_SHARP_){
return cljs.core.hash_combine.call(null,p1__9874_SHARP_,cljs.core.hash.call(null,p2__9875_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9924__9925 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9924__9925))
{var G__9927__9929 = cljs.core.first.call(null,G__9924__9925);
var vec__9928__9930 = G__9927__9929;
var key_name__9931 = cljs.core.nth.call(null,vec__9928__9930,0,null);
var f__9932 = cljs.core.nth.call(null,vec__9928__9930,1,null);
var G__9924__9933 = G__9924__9925;

var G__9927__9934 = G__9927__9929;
var G__9924__9935 = G__9924__9933;

while(true){
var vec__9936__9937 = G__9927__9934;
var key_name__9938 = cljs.core.nth.call(null,vec__9936__9937,0,null);
var f__9939 = cljs.core.nth.call(null,vec__9936__9937,1,null);
var G__9924__9940 = G__9924__9935;

var str_name__9941 = cljs.core.name.call(null,key_name__9938);

obj[str_name__9941] = f__9939;
var temp__3698__auto____9942 = cljs.core.next.call(null,G__9924__9940);

if(cljs.core.truth_(temp__3698__auto____9942))
{var G__9924__9943 = temp__3698__auto____9942;

{
var G__10018 = cljs.core.first.call(null,G__9924__9943);
var G__10019 = G__9924__9943;
G__9927__9934 = G__10018;
G__9924__9935 = G__10019;
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
var this__10023 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10024 = this;
return (new cljs.core.List(this__10024.meta,o,coll,(this__10024.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10026 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10028 = this;
return this__10028.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10029 = this;
return this__10029.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10030 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10041 = this;
return this__10041.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10043 = this;
return this__10043.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10044 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10047 = this;
return (new cljs.core.List(meta,this__10047.first,this__10047.rest,this__10047.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10049 = this;
return this__10049.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10050 = this;
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
var this__10069 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10070 = this;
return (new cljs.core.List(this__10070.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__10077 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__10078 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__10079 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__10080 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10081 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10082 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10083 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10084 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10085 = this;
return this__10085.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10086 = this;
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
list.cljs$lang$applyTo = (function (arglist__10157){
var items = cljs.core.seq( arglist__10157 );;
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
var this__10164 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10167 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10169 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10170 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10170.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10171 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10172 = this;
return this__10172.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10173 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10173.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10173.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10175 = this;
return this__10175.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10177 = this;
return (new cljs.core.Cons(meta,this__10177.first,this__10177.rest));
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
var G__10212 = null;
var G__10212__10213 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10212__10214 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10212 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10212__10213.call(this,string,f);
case  3 :
return G__10212__10214.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10212;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10218 = null;
var G__10218__10219 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10218__10220 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10218 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10218__10219.call(this,string,k);
case  3 :
return G__10218__10220.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10218;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10224 = null;
var G__10224__10225 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10224__10226 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10224 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10224__10225.call(this,string,n);
case  3 :
return G__10224__10226.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10224;
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
var G__10234 = null;
var G__10234__10235 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10234__10236 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10234 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10234__10235.call(this,this$,coll);
case  3 :
return G__10234__10236.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10234;
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
var x__10246 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10246;
} else
{lazy_seq.x = x__10246.call(null);
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
var this__10262 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10264 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10265 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10272 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10272.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10273 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10274 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10276 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10278 = this;
return this__10278.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10279 = this;
return (new cljs.core.LazySeq(meta,this__10279.realized,this__10279.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10292 = cljs.core.array.call(null);

var s__10311 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10311)))
{ary__10292.push(cljs.core.first.call(null,s__10311));
{
var G__10319 = cljs.core.next.call(null,s__10311);
s__10311 = G__10319;
continue;
}
} else
{return ary__10292;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10322 = s;
var i__10323 = n;
var sum__10325 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10326 = (i__10323 > 0);

if(cljs.core.truth_(and__3546__auto____10326))
{return cljs.core.seq.call(null,s__10322);
} else
{return and__3546__auto____10326;
}
})()))
{{
var G__10330 = cljs.core.next.call(null,s__10322);
var G__10331 = (i__10323 - 1);
var G__10332 = (sum__10325 + 1);
s__10322 = G__10330;
i__10323 = G__10331;
sum__10325 = G__10332;
continue;
}
} else
{return sum__10325;
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
var concat__10358 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10359 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10360 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10346 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10346))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10346),concat.call(null,cljs.core.rest.call(null,s__10346),y));
} else
{return y;
}
})));
});
var concat__10361 = (function() { 
var G__10372__delegate = function (x,y,zs){
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
var G__10372 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10372__delegate.call(this, x, y, zs);
};
G__10372.cljs$lang$maxFixedArity = 2;
G__10372.cljs$lang$applyTo = (function (arglist__10408){
var x = cljs.core.first(arglist__10408);
var y = cljs.core.first(cljs.core.next(arglist__10408));
var zs = cljs.core.rest(cljs.core.next(arglist__10408));
return G__10372__delegate.call(this, x, y, zs);
});
return G__10372;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10358.call(this);
case  1 :
return concat__10359.call(this,x);
case  2 :
return concat__10360.call(this,x,y);
default:
return concat__10361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10361.cljs$lang$applyTo;
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
var list_STAR___10409 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10410 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10411 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10412 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10413 = (function() { 
var G__10415__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10415 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10415__delegate.call(this, a, b, c, d, more);
};
G__10415.cljs$lang$maxFixedArity = 4;
G__10415.cljs$lang$applyTo = (function (arglist__10416){
var a = cljs.core.first(arglist__10416);
var b = cljs.core.first(cljs.core.next(arglist__10416));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10416)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10416))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10416))));
return G__10415__delegate.call(this, a, b, c, d, more);
});
return G__10415;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10409.call(this,a);
case  2 :
return list_STAR___10410.call(this,a,b);
case  3 :
return list_STAR___10411.call(this,a,b,c);
case  4 :
return list_STAR___10412.call(this,a,b,c,d);
default:
return list_STAR___10413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10413.cljs$lang$applyTo;
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
var apply__10511 = (function (f,args){
var fixed_arity__10417 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10417 + 1)) <= fixed_arity__10417)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10513 = (function (f,x,args){
var arglist__10418 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10419 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10418,fixed_arity__10419) <= fixed_arity__10419)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10418));
} else
{return f.cljs$lang$applyTo(arglist__10418);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10418));
}
});
var apply__10515 = (function (f,x,y,args){
var arglist__10503 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10505 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10503,fixed_arity__10505) <= fixed_arity__10505)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10503));
} else
{return f.cljs$lang$applyTo(arglist__10503);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10503));
}
});
var apply__10517 = (function (f,x,y,z,args){
var arglist__10506 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10507 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10506,fixed_arity__10507) <= fixed_arity__10507)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10506));
} else
{return f.cljs$lang$applyTo(arglist__10506);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10506));
}
});
var apply__10519 = (function() { 
var G__10524__delegate = function (f,a,b,c,d,args){
var arglist__10508 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10509 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10508,fixed_arity__10509) <= fixed_arity__10509)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10508));
} else
{return f.cljs$lang$applyTo(arglist__10508);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10508));
}
};
var G__10524 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10524__delegate.call(this, f, a, b, c, d, args);
};
G__10524.cljs$lang$maxFixedArity = 5;
G__10524.cljs$lang$applyTo = (function (arglist__10526){
var f = cljs.core.first(arglist__10526);
var a = cljs.core.first(cljs.core.next(arglist__10526));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10526)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10526))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10526)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10526)))));
return G__10524__delegate.call(this, f, a, b, c, d, args);
});
return G__10524;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10511.call(this,f,a);
case  3 :
return apply__10513.call(this,f,a,b);
case  4 :
return apply__10515.call(this,f,a,b,c);
case  5 :
return apply__10517.call(this,f,a,b,c,d);
default:
return apply__10519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10519.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10533){
var obj = cljs.core.first(arglist__10533);
var f = cljs.core.first(cljs.core.next(arglist__10533));
var args = cljs.core.rest(cljs.core.next(arglist__10533));
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
var not_EQ___10536 = (function (x){
return false;
});
var not_EQ___10537 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10538 = (function() { 
var G__10540__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10540 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10540__delegate.call(this, x, y, more);
};
G__10540.cljs$lang$maxFixedArity = 2;
G__10540.cljs$lang$applyTo = (function (arglist__10547){
var x = cljs.core.first(arglist__10547);
var y = cljs.core.first(cljs.core.next(arglist__10547));
var more = cljs.core.rest(cljs.core.next(arglist__10547));
return G__10540__delegate.call(this, x, y, more);
});
return G__10540;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10536.call(this,x);
case  2 :
return not_EQ___10537.call(this,x,y);
default:
return not_EQ___10538.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10538.cljs$lang$applyTo;
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
var G__10549 = pred;
var G__10550 = cljs.core.next.call(null,coll);
pred = G__10549;
coll = G__10550;
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
{var or__3548__auto____10715 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10715))
{return or__3548__auto____10715;
} else
{{
var G__10721 = pred;
var G__10722 = cljs.core.next.call(null,coll);
pred = G__10721;
coll = G__10722;
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
var G__10778 = null;
var G__10778__10779 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10778__10780 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10778__10781 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10778__10782 = (function() { 
var G__10818__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10818 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10818__delegate.call(this, x, y, zs);
};
G__10818.cljs$lang$maxFixedArity = 2;
G__10818.cljs$lang$applyTo = (function (arglist__10821){
var x = cljs.core.first(arglist__10821);
var y = cljs.core.first(cljs.core.next(arglist__10821));
var zs = cljs.core.rest(cljs.core.next(arglist__10821));
return G__10818__delegate.call(this, x, y, zs);
});
return G__10818;
})()
;
G__10778 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10778__10779.call(this);
case  1 :
return G__10778__10780.call(this,x);
case  2 :
return G__10778__10781.call(this,x,y);
default:
return G__10778__10782.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10778.cljs$lang$maxFixedArity = 2;
G__10778.cljs$lang$applyTo = G__10778__10782.cljs$lang$applyTo;
return G__10778;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10845__delegate = function (args){
return x;
};
var G__10845 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10845__delegate.call(this, args);
};
G__10845.cljs$lang$maxFixedArity = 0;
G__10845.cljs$lang$applyTo = (function (arglist__10846){
var args = cljs.core.seq( arglist__10846 );;
return G__10845__delegate.call(this, args);
});
return G__10845;
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
var comp__10920 = (function (){
return cljs.core.identity;
});
var comp__10922 = (function (f){
return f;
});
var comp__10924 = (function (f,g){
return (function() {
var G__10931 = null;
var G__10931__10932 = (function (){
return f.call(null,g.call(null));
});
var G__10931__10933 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10931__10935 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10931__10936 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10931__10937 = (function() { 
var G__10944__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10944 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10944__delegate.call(this, x, y, z, args);
};
G__10944.cljs$lang$maxFixedArity = 3;
G__10944.cljs$lang$applyTo = (function (arglist__11020){
var x = cljs.core.first(arglist__11020);
var y = cljs.core.first(cljs.core.next(arglist__11020));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11020)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11020)));
return G__10944__delegate.call(this, x, y, z, args);
});
return G__10944;
})()
;
G__10931 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10931__10932.call(this);
case  1 :
return G__10931__10933.call(this,x);
case  2 :
return G__10931__10935.call(this,x,y);
case  3 :
return G__10931__10936.call(this,x,y,z);
default:
return G__10931__10937.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10931.cljs$lang$maxFixedArity = 3;
G__10931.cljs$lang$applyTo = G__10931__10937.cljs$lang$applyTo;
return G__10931;
})()
});
var comp__10925 = (function (f,g,h){
return (function() {
var G__11023 = null;
var G__11023__11026 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__11023__11027 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__11023__11028 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__11023__11029 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__11023__11030 = (function() { 
var G__11033__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__11033 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11033__delegate.call(this, x, y, z, args);
};
G__11033.cljs$lang$maxFixedArity = 3;
G__11033.cljs$lang$applyTo = (function (arglist__11035){
var x = cljs.core.first(arglist__11035);
var y = cljs.core.first(cljs.core.next(arglist__11035));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11035)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11035)));
return G__11033__delegate.call(this, x, y, z, args);
});
return G__11033;
})()
;
G__11023 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__11023__11026.call(this);
case  1 :
return G__11023__11027.call(this,x);
case  2 :
return G__11023__11028.call(this,x,y);
case  3 :
return G__11023__11029.call(this,x,y,z);
default:
return G__11023__11030.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11023.cljs$lang$maxFixedArity = 3;
G__11023.cljs$lang$applyTo = G__11023__11030.cljs$lang$applyTo;
return G__11023;
})()
});
var comp__10927 = (function() { 
var G__11037__delegate = function (f1,f2,f3,fs){
var fs__10899 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__11039__delegate = function (args){
var ret__10903 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10899),args);
var fs__10905 = cljs.core.next.call(null,fs__10899);

while(true){
if(cljs.core.truth_(fs__10905))
{{
var G__11045 = cljs.core.first.call(null,fs__10905).call(null,ret__10903);
var G__11046 = cljs.core.next.call(null,fs__10905);
ret__10903 = G__11045;
fs__10905 = G__11046;
continue;
}
} else
{return ret__10903;
}
break;
}
};
var G__11039 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11039__delegate.call(this, args);
};
G__11039.cljs$lang$maxFixedArity = 0;
G__11039.cljs$lang$applyTo = (function (arglist__11047){
var args = cljs.core.seq( arglist__11047 );;
return G__11039__delegate.call(this, args);
});
return G__11039;
})()
;
};
var G__11037 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11037__delegate.call(this, f1, f2, f3, fs);
};
G__11037.cljs$lang$maxFixedArity = 3;
G__11037.cljs$lang$applyTo = (function (arglist__11048){
var f1 = cljs.core.first(arglist__11048);
var f2 = cljs.core.first(cljs.core.next(arglist__11048));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11048)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11048)));
return G__11037__delegate.call(this, f1, f2, f3, fs);
});
return G__11037;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10920.call(this);
case  1 :
return comp__10922.call(this,f1);
case  2 :
return comp__10924.call(this,f1,f2);
case  3 :
return comp__10925.call(this,f1,f2,f3);
default:
return comp__10927.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10927.cljs$lang$applyTo;
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
var partial__11080 = (function (f,arg1){
return (function() { 
var G__11087__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__11087 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11087__delegate.call(this, args);
};
G__11087.cljs$lang$maxFixedArity = 0;
G__11087.cljs$lang$applyTo = (function (arglist__11090){
var args = cljs.core.seq( arglist__11090 );;
return G__11087__delegate.call(this, args);
});
return G__11087;
})()
;
});
var partial__11081 = (function (f,arg1,arg2){
return (function() { 
var G__11092__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__11092 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11092__delegate.call(this, args);
};
G__11092.cljs$lang$maxFixedArity = 0;
G__11092.cljs$lang$applyTo = (function (arglist__11096){
var args = cljs.core.seq( arglist__11096 );;
return G__11092__delegate.call(this, args);
});
return G__11092;
})()
;
});
var partial__11083 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__11098__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__11098 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11098__delegate.call(this, args);
};
G__11098.cljs$lang$maxFixedArity = 0;
G__11098.cljs$lang$applyTo = (function (arglist__11100){
var args = cljs.core.seq( arglist__11100 );;
return G__11098__delegate.call(this, args);
});
return G__11098;
})()
;
});
var partial__11084 = (function() { 
var G__11103__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__11104__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__11104 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__11104__delegate.call(this, args);
};
G__11104.cljs$lang$maxFixedArity = 0;
G__11104.cljs$lang$applyTo = (function (arglist__11117){
var args = cljs.core.seq( arglist__11117 );;
return G__11104__delegate.call(this, args);
});
return G__11104;
})()
;
};
var G__11103 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11103__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__11103.cljs$lang$maxFixedArity = 4;
G__11103.cljs$lang$applyTo = (function (arglist__11120){
var f = cljs.core.first(arglist__11120);
var arg1 = cljs.core.first(cljs.core.next(arglist__11120));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11120)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11120))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11120))));
return G__11103__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__11103;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__11080.call(this,f,arg1);
case  3 :
return partial__11081.call(this,f,arg1,arg2);
case  4 :
return partial__11083.call(this,f,arg1,arg2,arg3);
default:
return partial__11084.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__11084.cljs$lang$applyTo;
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
var fnil__11158 = (function (f,x){
return (function() {
var G__11163 = null;
var G__11163__11164 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__11163__11165 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__11163__11166 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__11163__11167 = (function() { 
var G__11171__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__11171 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11171__delegate.call(this, a, b, c, ds);
};
G__11171.cljs$lang$maxFixedArity = 3;
G__11171.cljs$lang$applyTo = (function (arglist__11173){
var a = cljs.core.first(arglist__11173);
var b = cljs.core.first(cljs.core.next(arglist__11173));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11173)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11173)));
return G__11171__delegate.call(this, a, b, c, ds);
});
return G__11171;
})()
;
G__11163 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__11163__11164.call(this,a);
case  2 :
return G__11163__11165.call(this,a,b);
case  3 :
return G__11163__11166.call(this,a,b,c);
default:
return G__11163__11167.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11163.cljs$lang$maxFixedArity = 3;
G__11163.cljs$lang$applyTo = G__11163__11167.cljs$lang$applyTo;
return G__11163;
})()
});
var fnil__11159 = (function (f,x,y){
return (function() {
var G__11187 = null;
var G__11187__11194 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11187__11195 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__11187__11196 = (function() { 
var G__11198__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__11198 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11198__delegate.call(this, a, b, c, ds);
};
G__11198.cljs$lang$maxFixedArity = 3;
G__11198.cljs$lang$applyTo = (function (arglist__11199){
var a = cljs.core.first(arglist__11199);
var b = cljs.core.first(cljs.core.next(arglist__11199));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11199)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11199)));
return G__11198__delegate.call(this, a, b, c, ds);
});
return G__11198;
})()
;
G__11187 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11187__11194.call(this,a,b);
case  3 :
return G__11187__11195.call(this,a,b,c);
default:
return G__11187__11196.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11187.cljs$lang$maxFixedArity = 3;
G__11187.cljs$lang$applyTo = G__11187__11196.cljs$lang$applyTo;
return G__11187;
})()
});
var fnil__11160 = (function (f,x,y,z){
return (function() {
var G__11200 = null;
var G__11200__11201 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__11200__11202 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__11200__11203 = (function() { 
var G__11206__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__11206 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11206__delegate.call(this, a, b, c, ds);
};
G__11206.cljs$lang$maxFixedArity = 3;
G__11206.cljs$lang$applyTo = (function (arglist__11208){
var a = cljs.core.first(arglist__11208);
var b = cljs.core.first(cljs.core.next(arglist__11208));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11208)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11208)));
return G__11206__delegate.call(this, a, b, c, ds);
});
return G__11206;
})()
;
G__11200 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__11200__11201.call(this,a,b);
case  3 :
return G__11200__11202.call(this,a,b,c);
default:
return G__11200__11203.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__11200.cljs$lang$maxFixedArity = 3;
G__11200.cljs$lang$applyTo = G__11200__11203.cljs$lang$applyTo;
return G__11200;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__11158.call(this,f,x);
case  3 :
return fnil__11159.call(this,f,x,y);
case  4 :
return fnil__11160.call(this,f,x,y,z);
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
var mapi__11229 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11225 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11225))
{var s__11226 = temp__3698__auto____11225;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__11226)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11226)));
} else
{return null;
}
})));
});

return mapi__11229.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11247 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11247))
{var s__11292 = temp__3698__auto____11247;

var x__11294 = f.call(null,cljs.core.first.call(null,s__11292));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11294)))
{return keep.call(null,f,cljs.core.rest.call(null,s__11292));
} else
{return cljs.core.cons.call(null,x__11294,keep.call(null,f,cljs.core.rest.call(null,s__11292)));
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
var keepi__11386 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11378 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11378))
{var s__11380 = temp__3698__auto____11378;

var x__11382 = f.call(null,idx,cljs.core.first.call(null,s__11380));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11382)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11380));
} else
{return cljs.core.cons.call(null,x__11382,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11380)));
}
} else
{return null;
}
})));
});

return keepi__11386.call(null,0,coll);
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
var every_pred__11512 = (function (p){
return (function() {
var ep1 = null;
var ep1__11517 = (function (){
return true;
});
var ep1__11519 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11520 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11421 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11421))
{return p.call(null,y);
} else
{return and__3546__auto____11421;
}
})());
});
var ep1__11521 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11422 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11422))
{var and__3546__auto____11423 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11423))
{return p.call(null,z);
} else
{return and__3546__auto____11423;
}
} else
{return and__3546__auto____11422;
}
})());
});
var ep1__11522 = (function() { 
var G__11525__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11425 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11425))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11425;
}
})());
};
var G__11525 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11525__delegate.call(this, x, y, z, args);
};
G__11525.cljs$lang$maxFixedArity = 3;
G__11525.cljs$lang$applyTo = (function (arglist__11533){
var x = cljs.core.first(arglist__11533);
var y = cljs.core.first(cljs.core.next(arglist__11533));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11533)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11533)));
return G__11525__delegate.call(this, x, y, z, args);
});
return G__11525;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11517.call(this);
case  1 :
return ep1__11519.call(this,x);
case  2 :
return ep1__11520.call(this,x,y);
case  3 :
return ep1__11521.call(this,x,y,z);
default:
return ep1__11522.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11522.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11513 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11538 = (function (){
return true;
});
var ep2__11539 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11427 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11427))
{return p2.call(null,x);
} else
{return and__3546__auto____11427;
}
})());
});
var ep2__11540 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11429 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11429))
{var and__3546__auto____11438 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11438))
{var and__3546__auto____11439 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11439))
{return p2.call(null,y);
} else
{return and__3546__auto____11439;
}
} else
{return and__3546__auto____11438;
}
} else
{return and__3546__auto____11429;
}
})());
});
var ep2__11541 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11441 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11441))
{var and__3546__auto____11444 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11444))
{var and__3546__auto____11445 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11445))
{var and__3546__auto____11446 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11446))
{var and__3546__auto____11447 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11447))
{return p2.call(null,z);
} else
{return and__3546__auto____11447;
}
} else
{return and__3546__auto____11446;
}
} else
{return and__3546__auto____11445;
}
} else
{return and__3546__auto____11444;
}
} else
{return and__3546__auto____11441;
}
})());
});
var ep2__11543 = (function() { 
var G__11546__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11448 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11448))
{return cljs.core.every_QMARK_.call(null,(function (p1__11358_SHARP_){
var and__3546__auto____11449 = p1.call(null,p1__11358_SHARP_);

if(cljs.core.truth_(and__3546__auto____11449))
{return p2.call(null,p1__11358_SHARP_);
} else
{return and__3546__auto____11449;
}
}),args);
} else
{return and__3546__auto____11448;
}
})());
};
var G__11546 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11546__delegate.call(this, x, y, z, args);
};
G__11546.cljs$lang$maxFixedArity = 3;
G__11546.cljs$lang$applyTo = (function (arglist__11548){
var x = cljs.core.first(arglist__11548);
var y = cljs.core.first(cljs.core.next(arglist__11548));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11548)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11548)));
return G__11546__delegate.call(this, x, y, z, args);
});
return G__11546;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11538.call(this);
case  1 :
return ep2__11539.call(this,x);
case  2 :
return ep2__11540.call(this,x,y);
case  3 :
return ep2__11541.call(this,x,y,z);
default:
return ep2__11543.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11543.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11514 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11550 = (function (){
return true;
});
var ep3__11553 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11451 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11451))
{var and__3546__auto____11452 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11452))
{return p3.call(null,x);
} else
{return and__3546__auto____11452;
}
} else
{return and__3546__auto____11451;
}
})());
});
var ep3__11555 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11456 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11456))
{var and__3546__auto____11457 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11457))
{var and__3546__auto____11458 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11458))
{var and__3546__auto____11460 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11460))
{var and__3546__auto____11467 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11467))
{return p3.call(null,y);
} else
{return and__3546__auto____11467;
}
} else
{return and__3546__auto____11460;
}
} else
{return and__3546__auto____11458;
}
} else
{return and__3546__auto____11457;
}
} else
{return and__3546__auto____11456;
}
})());
});
var ep3__11557 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11476 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11476))
{var and__3546__auto____11477 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11477))
{var and__3546__auto____11478 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11478))
{var and__3546__auto____11479 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11479))
{var and__3546__auto____11480 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11480))
{var and__3546__auto____11482 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11482))
{var and__3546__auto____11483 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11483))
{var and__3546__auto____11484 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11484))
{return p3.call(null,z);
} else
{return and__3546__auto____11484;
}
} else
{return and__3546__auto____11483;
}
} else
{return and__3546__auto____11482;
}
} else
{return and__3546__auto____11480;
}
} else
{return and__3546__auto____11479;
}
} else
{return and__3546__auto____11478;
}
} else
{return and__3546__auto____11477;
}
} else
{return and__3546__auto____11476;
}
})());
});
var ep3__11560 = (function() { 
var G__11564__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11485 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11485))
{return cljs.core.every_QMARK_.call(null,(function (p1__11360_SHARP_){
var and__3546__auto____11491 = p1.call(null,p1__11360_SHARP_);

if(cljs.core.truth_(and__3546__auto____11491))
{var and__3546__auto____11498 = p2.call(null,p1__11360_SHARP_);

if(cljs.core.truth_(and__3546__auto____11498))
{return p3.call(null,p1__11360_SHARP_);
} else
{return and__3546__auto____11498;
}
} else
{return and__3546__auto____11491;
}
}),args);
} else
{return and__3546__auto____11485;
}
})());
};
var G__11564 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11564__delegate.call(this, x, y, z, args);
};
G__11564.cljs$lang$maxFixedArity = 3;
G__11564.cljs$lang$applyTo = (function (arglist__11567){
var x = cljs.core.first(arglist__11567);
var y = cljs.core.first(cljs.core.next(arglist__11567));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11567)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11567)));
return G__11564__delegate.call(this, x, y, z, args);
});
return G__11564;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11550.call(this);
case  1 :
return ep3__11553.call(this,x);
case  2 :
return ep3__11555.call(this,x,y);
case  3 :
return ep3__11557.call(this,x,y,z);
default:
return ep3__11560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11560.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11515 = (function() { 
var G__11568__delegate = function (p1,p2,p3,ps){
var ps__11499 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11569 = (function (){
return true;
});
var epn__11570 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__11368_SHARP_){
return p1__11368_SHARP_.call(null,x);
}),ps__11499);
});
var epn__11571 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__11369_SHARP_){
var and__3546__auto____11502 = p1__11369_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11502))
{return p1__11369_SHARP_.call(null,y);
} else
{return and__3546__auto____11502;
}
}),ps__11499);
});
var epn__11572 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__11371_SHARP_){
var and__3546__auto____11503 = p1__11371_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11503))
{var and__3546__auto____11510 = p1__11371_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11510))
{return p1__11371_SHARP_.call(null,z);
} else
{return and__3546__auto____11510;
}
} else
{return and__3546__auto____11503;
}
}),ps__11499);
});
var epn__11573 = (function() { 
var G__11582__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11511 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11511))
{return cljs.core.every_QMARK_.call(null,(function (p1__11372_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__11372_SHARP_,args);
}),ps__11499);
} else
{return and__3546__auto____11511;
}
})());
};
var G__11582 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11582__delegate.call(this, x, y, z, args);
};
G__11582.cljs$lang$maxFixedArity = 3;
G__11582.cljs$lang$applyTo = (function (arglist__11586){
var x = cljs.core.first(arglist__11586);
var y = cljs.core.first(cljs.core.next(arglist__11586));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11586)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11586)));
return G__11582__delegate.call(this, x, y, z, args);
});
return G__11582;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11569.call(this);
case  1 :
return epn__11570.call(this,x);
case  2 :
return epn__11571.call(this,x,y);
case  3 :
return epn__11572.call(this,x,y,z);
default:
return epn__11573.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11573.cljs$lang$applyTo;
return epn;
})()
};
var G__11568 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11568__delegate.call(this, p1, p2, p3, ps);
};
G__11568.cljs$lang$maxFixedArity = 3;
G__11568.cljs$lang$applyTo = (function (arglist__11592){
var p1 = cljs.core.first(arglist__11592);
var p2 = cljs.core.first(cljs.core.next(arglist__11592));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11592)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11592)));
return G__11568__delegate.call(this, p1, p2, p3, ps);
});
return G__11568;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11512.call(this,p1);
case  2 :
return every_pred__11513.call(this,p1,p2);
case  3 :
return every_pred__11514.call(this,p1,p2,p3);
default:
return every_pred__11515.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11515.cljs$lang$applyTo;
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
var some_fn__11765 = (function (p){
return (function() {
var sp1 = null;
var sp1__11770 = (function (){
return null;
});
var sp1__11771 = (function (x){
return p.call(null,x);
});
var sp1__11772 = (function (x,y){
var or__3548__auto____11599 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11599))
{return or__3548__auto____11599;
} else
{return p.call(null,y);
}
});
var sp1__11773 = (function (x,y,z){
var or__3548__auto____11600 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11600))
{return or__3548__auto____11600;
} else
{var or__3548__auto____11602 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11602))
{return or__3548__auto____11602;
} else
{return p.call(null,z);
}
}
});
var sp1__11774 = (function() { 
var G__11777__delegate = function (x,y,z,args){
var or__3548__auto____11607 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11607))
{return or__3548__auto____11607;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11777 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11777__delegate.call(this, x, y, z, args);
};
G__11777.cljs$lang$maxFixedArity = 3;
G__11777.cljs$lang$applyTo = (function (arglist__11779){
var x = cljs.core.first(arglist__11779);
var y = cljs.core.first(cljs.core.next(arglist__11779));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11779)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11779)));
return G__11777__delegate.call(this, x, y, z, args);
});
return G__11777;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11770.call(this);
case  1 :
return sp1__11771.call(this,x);
case  2 :
return sp1__11772.call(this,x,y);
case  3 :
return sp1__11773.call(this,x,y,z);
default:
return sp1__11774.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11774.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11766 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11780 = (function (){
return null;
});
var sp2__11781 = (function (x){
var or__3548__auto____11608 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11608))
{return or__3548__auto____11608;
} else
{return p2.call(null,x);
}
});
var sp2__11782 = (function (x,y){
var or__3548__auto____11692 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11692))
{return or__3548__auto____11692;
} else
{var or__3548__auto____11694 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11694))
{return or__3548__auto____11694;
} else
{var or__3548__auto____11695 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11695))
{return or__3548__auto____11695;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11783 = (function (x,y,z){
var or__3548__auto____11696 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11696))
{return or__3548__auto____11696;
} else
{var or__3548__auto____11697 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11697))
{return or__3548__auto____11697;
} else
{var or__3548__auto____11700 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11700))
{return or__3548__auto____11700;
} else
{var or__3548__auto____11701 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11701))
{return or__3548__auto____11701;
} else
{var or__3548__auto____11702 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11702))
{return or__3548__auto____11702;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11784 = (function() { 
var G__11789__delegate = function (x,y,z,args){
var or__3548__auto____11705 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11705))
{return or__3548__auto____11705;
} else
{return cljs.core.some.call(null,(function (p1__11405_SHARP_){
var or__3548__auto____11708 = p1.call(null,p1__11405_SHARP_);

if(cljs.core.truth_(or__3548__auto____11708))
{return or__3548__auto____11708;
} else
{return p2.call(null,p1__11405_SHARP_);
}
}),args);
}
};
var G__11789 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11789__delegate.call(this, x, y, z, args);
};
G__11789.cljs$lang$maxFixedArity = 3;
G__11789.cljs$lang$applyTo = (function (arglist__11790){
var x = cljs.core.first(arglist__11790);
var y = cljs.core.first(cljs.core.next(arglist__11790));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11790)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11790)));
return G__11789__delegate.call(this, x, y, z, args);
});
return G__11789;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11780.call(this);
case  1 :
return sp2__11781.call(this,x);
case  2 :
return sp2__11782.call(this,x,y);
case  3 :
return sp2__11783.call(this,x,y,z);
default:
return sp2__11784.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11784.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11767 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11791 = (function (){
return null;
});
var sp3__11793 = (function (x){
var or__3548__auto____11711 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11711))
{return or__3548__auto____11711;
} else
{var or__3548__auto____11717 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11717))
{return or__3548__auto____11717;
} else
{return p3.call(null,x);
}
}
});
var sp3__11794 = (function (x,y){
var or__3548__auto____11724 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11724))
{return or__3548__auto____11724;
} else
{var or__3548__auto____11726 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11726))
{return or__3548__auto____11726;
} else
{var or__3548__auto____11727 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11727))
{return or__3548__auto____11727;
} else
{var or__3548__auto____11728 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11728))
{return or__3548__auto____11728;
} else
{var or__3548__auto____11729 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11729))
{return or__3548__auto____11729;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__11795 = (function (x,y,z){
var or__3548__auto____11732 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11732))
{return or__3548__auto____11732;
} else
{var or__3548__auto____11733 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11733))
{return or__3548__auto____11733;
} else
{var or__3548__auto____11734 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11734))
{return or__3548__auto____11734;
} else
{var or__3548__auto____11735 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11735))
{return or__3548__auto____11735;
} else
{var or__3548__auto____11738 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11738))
{return or__3548__auto____11738;
} else
{var or__3548__auto____11739 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11739))
{return or__3548__auto____11739;
} else
{var or__3548__auto____11741 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11741))
{return or__3548__auto____11741;
} else
{var or__3548__auto____11744 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11744))
{return or__3548__auto____11744;
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
var sp3__11796 = (function() { 
var G__11836__delegate = function (x,y,z,args){
var or__3548__auto____11748 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11748))
{return or__3548__auto____11748;
} else
{return cljs.core.some.call(null,(function (p1__11406_SHARP_){
var or__3548__auto____11749 = p1.call(null,p1__11406_SHARP_);

if(cljs.core.truth_(or__3548__auto____11749))
{return or__3548__auto____11749;
} else
{var or__3548__auto____11751 = p2.call(null,p1__11406_SHARP_);

if(cljs.core.truth_(or__3548__auto____11751))
{return or__3548__auto____11751;
} else
{return p3.call(null,p1__11406_SHARP_);
}
}
}),args);
}
};
var G__11836 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11836__delegate.call(this, x, y, z, args);
};
G__11836.cljs$lang$maxFixedArity = 3;
G__11836.cljs$lang$applyTo = (function (arglist__11841){
var x = cljs.core.first(arglist__11841);
var y = cljs.core.first(cljs.core.next(arglist__11841));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11841)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11841)));
return G__11836__delegate.call(this, x, y, z, args);
});
return G__11836;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11791.call(this);
case  1 :
return sp3__11793.call(this,x);
case  2 :
return sp3__11794.call(this,x,y);
case  3 :
return sp3__11795.call(this,x,y,z);
default:
return sp3__11796.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11796.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11768 = (function() { 
var G__11844__delegate = function (p1,p2,p3,ps){
var ps__11754 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11846 = (function (){
return null;
});
var spn__11847 = (function (x){
return cljs.core.some.call(null,(function (p1__11407_SHARP_){
return p1__11407_SHARP_.call(null,x);
}),ps__11754);
});
var spn__11848 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11413_SHARP_){
var or__3548__auto____11755 = p1__11413_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11755))
{return or__3548__auto____11755;
} else
{return p1__11413_SHARP_.call(null,y);
}
}),ps__11754);
});
var spn__11849 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11414_SHARP_){
var or__3548__auto____11756 = p1__11414_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11756))
{return or__3548__auto____11756;
} else
{var or__3548__auto____11757 = p1__11414_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11757))
{return or__3548__auto____11757;
} else
{return p1__11414_SHARP_.call(null,z);
}
}
}),ps__11754);
});
var spn__11850 = (function() { 
var G__11938__delegate = function (x,y,z,args){
var or__3548__auto____11761 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11761))
{return or__3548__auto____11761;
} else
{return cljs.core.some.call(null,(function (p1__11415_SHARP_){
return cljs.core.some.call(null,p1__11415_SHARP_,args);
}),ps__11754);
}
};
var G__11938 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11938__delegate.call(this, x, y, z, args);
};
G__11938.cljs$lang$maxFixedArity = 3;
G__11938.cljs$lang$applyTo = (function (arglist__11940){
var x = cljs.core.first(arglist__11940);
var y = cljs.core.first(cljs.core.next(arglist__11940));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11940)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11940)));
return G__11938__delegate.call(this, x, y, z, args);
});
return G__11938;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11846.call(this);
case  1 :
return spn__11847.call(this,x);
case  2 :
return spn__11848.call(this,x,y);
case  3 :
return spn__11849.call(this,x,y,z);
default:
return spn__11850.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11850.cljs$lang$applyTo;
return spn;
})()
};
var G__11844 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11844__delegate.call(this, p1, p2, p3, ps);
};
G__11844.cljs$lang$maxFixedArity = 3;
G__11844.cljs$lang$applyTo = (function (arglist__11987){
var p1 = cljs.core.first(arglist__11987);
var p2 = cljs.core.first(cljs.core.next(arglist__11987));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11987)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11987)));
return G__11844__delegate.call(this, p1, p2, p3, ps);
});
return G__11844;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11765.call(this,p1);
case  2 :
return some_fn__11766.call(this,p1,p2);
case  3 :
return some_fn__11767.call(this,p1,p2,p3);
default:
return some_fn__11768.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11768.cljs$lang$applyTo;
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
var map__12025 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11989 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11989))
{var s__11991 = temp__3698__auto____11989;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11991)),map.call(null,f,cljs.core.rest.call(null,s__11991)));
} else
{return null;
}
})));
});
var map__12026 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11994 = cljs.core.seq.call(null,c1);
var s2__11995 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11998 = s1__11994;

if(cljs.core.truth_(and__3546__auto____11998))
{return s2__11995;
} else
{return and__3546__auto____11998;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11994),cljs.core.first.call(null,s2__11995)),map.call(null,f,cljs.core.rest.call(null,s1__11994),cljs.core.rest.call(null,s2__11995)));
} else
{return null;
}
})));
});
var map__12027 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12001 = cljs.core.seq.call(null,c1);
var s2__12002 = cljs.core.seq.call(null,c2);
var s3__12004 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____12006 = s1__12001;

if(cljs.core.truth_(and__3546__auto____12006))
{var and__3546__auto____12007 = s2__12002;

if(cljs.core.truth_(and__3546__auto____12007))
{return s3__12004;
} else
{return and__3546__auto____12007;
}
} else
{return and__3546__auto____12006;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__12001),cljs.core.first.call(null,s2__12002),cljs.core.first.call(null,s3__12004)),map.call(null,f,cljs.core.rest.call(null,s1__12001),cljs.core.rest.call(null,s2__12002),cljs.core.rest.call(null,s3__12004)));
} else
{return null;
}
})));
});
var map__12028 = (function() { 
var G__12107__delegate = function (f,c1,c2,c3,colls){
var step__12014 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12011 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12011)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__12011),step.call(null,map.call(null,cljs.core.rest,ss__12011)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11596_SHARP_){
return cljs.core.apply.call(null,f,p1__11596_SHARP_);
}),step__12014.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__12107 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__12107__delegate.call(this, f, c1, c2, c3, colls);
};
G__12107.cljs$lang$maxFixedArity = 4;
G__12107.cljs$lang$applyTo = (function (arglist__12111){
var f = cljs.core.first(arglist__12111);
var c1 = cljs.core.first(cljs.core.next(arglist__12111));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12111)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12111))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__12111))));
return G__12107__delegate.call(this, f, c1, c2, c3, colls);
});
return G__12107;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__12025.call(this,f,c1);
case  3 :
return map__12026.call(this,f,c1,c2);
case  4 :
return map__12027.call(this,f,c1,c2,c3);
default:
return map__12028.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__12028.cljs$lang$applyTo;
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
{var temp__3698__auto____12117 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12117))
{var s__12118 = temp__3698__auto____12117;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__12118),take.call(null,(n - 1),cljs.core.rest.call(null,s__12118)));
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
var step__12122 = (function (n,coll){
while(true){
var s__12120 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12121 = (n > 0);

if(cljs.core.truth_(and__3546__auto____12121))
{return s__12120;
} else
{return and__3546__auto____12121;
}
})()))
{{
var G__12168 = (n - 1);
var G__12169 = cljs.core.rest.call(null,s__12120);
n = G__12168;
coll = G__12169;
continue;
}
} else
{return s__12120;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12122.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__12176 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__12177 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__12176.call(this,n);
case  2 :
return drop_last__12177.call(this,n,s);
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
var s__12179 = cljs.core.seq.call(null,coll);
var lead__12180 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__12180))
{{
var G__12181 = cljs.core.next.call(null,s__12179);
var G__12182 = cljs.core.next.call(null,lead__12180);
s__12179 = G__12181;
lead__12180 = G__12182;
continue;
}
} else
{return s__12179;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__12286 = (function (pred,coll){
while(true){
var s__12184 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____12185 = s__12184;

if(cljs.core.truth_(and__3546__auto____12185))
{return pred.call(null,cljs.core.first.call(null,s__12184));
} else
{return and__3546__auto____12185;
}
})()))
{{
var G__12290 = pred;
var G__12291 = cljs.core.rest.call(null,s__12184);
pred = G__12290;
coll = G__12291;
continue;
}
} else
{return s__12184;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__12286.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12300 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12300))
{var s__12301 = temp__3698__auto____12300;

return cljs.core.concat.call(null,s__12301,cycle.call(null,s__12301));
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
var repeat__12306 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__12308 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__12306.call(this,n);
case  2 :
return repeat__12308.call(this,n,x);
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
var interleave__12358 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__12319 = cljs.core.seq.call(null,c1);
var s2__12320 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____12321 = s1__12319;

if(cljs.core.truth_(and__3546__auto____12321))
{return s2__12320;
} else
{return and__3546__auto____12321;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__12319),cljs.core.cons.call(null,cljs.core.first.call(null,s2__12320),interleave.call(null,cljs.core.rest.call(null,s1__12319),cljs.core.rest.call(null,s2__12320))));
} else
{return null;
}
})));
});
var interleave__12359 = (function() { 
var G__12384__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__12324 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__12324)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__12324),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__12324)));
} else
{return null;
}
})));
};
var G__12384 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12384__delegate.call(this, c1, c2, colls);
};
G__12384.cljs$lang$maxFixedArity = 2;
G__12384.cljs$lang$applyTo = (function (arglist__12388){
var c1 = cljs.core.first(arglist__12388);
var c2 = cljs.core.first(cljs.core.next(arglist__12388));
var colls = cljs.core.rest(cljs.core.next(arglist__12388));
return G__12384__delegate.call(this, c1, c2, colls);
});
return G__12384;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__12358.call(this,c1,c2);
default:
return interleave__12359.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__12359.cljs$lang$applyTo;
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
var cat__12406 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____12401 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____12401))
{var coll__12403 = temp__3695__auto____12401;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__12403),cat.call(null,cljs.core.rest.call(null,coll__12403),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__12406.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__12412 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12413 = (function() { 
var G__12415__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12415 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12415__delegate.call(this, f, coll, colls);
};
G__12415.cljs$lang$maxFixedArity = 2;
G__12415.cljs$lang$applyTo = (function (arglist__12416){
var f = cljs.core.first(arglist__12416);
var coll = cljs.core.first(cljs.core.next(arglist__12416));
var colls = cljs.core.rest(cljs.core.next(arglist__12416));
return G__12415__delegate.call(this, f, coll, colls);
});
return G__12415;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12412.call(this,f,coll);
default:
return mapcat__12413.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12413.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12418 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12418))
{var s__12420 = temp__3698__auto____12418;

var f__12421 = cljs.core.first.call(null,s__12420);
var r__12422 = cljs.core.rest.call(null,s__12420);

if(cljs.core.truth_(pred.call(null,f__12421)))
{return cljs.core.cons.call(null,f__12421,filter.call(null,pred,r__12422));
} else
{return filter.call(null,pred,r__12422);
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
var walk__12432 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12432.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12429_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12429_SHARP_));
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
var partition__12478 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12479 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12453 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12453))
{var s__12454 = temp__3698__auto____12453;

var p__12457 = cljs.core.take.call(null,n,s__12454);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12457))))
{return cljs.core.cons.call(null,p__12457,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12454)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12480 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12462 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12462))
{var s__12463 = temp__3698__auto____12462;

var p__12465 = cljs.core.take.call(null,n,s__12463);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12465))))
{return cljs.core.cons.call(null,p__12465,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12463)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12465,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12478.call(this,n,step);
case  3 :
return partition__12479.call(this,n,step,pad);
case  4 :
return partition__12480.call(this,n,step,pad,coll);
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
var get_in__12515 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12519 = (function (m,ks,not_found){
var sentinel__12507 = cljs.core.lookup_sentinel;
var m__12508 = m;
var ks__12510 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12510))
{var m__12512 = cljs.core.get.call(null,m__12508,cljs.core.first.call(null,ks__12510),sentinel__12507);

if(cljs.core.truth_((sentinel__12507 === m__12512)))
{return not_found;
} else
{{
var G__12523 = sentinel__12507;
var G__12524 = m__12512;
var G__12525 = cljs.core.next.call(null,ks__12510);
sentinel__12507 = G__12523;
m__12508 = G__12524;
ks__12510 = G__12525;
continue;
}
}
} else
{return m__12508;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12515.call(this,m,ks);
case  3 :
return get_in__12519.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12535,v){
var vec__12536__12537 = p__12535;
var k__12538 = cljs.core.nth.call(null,vec__12536__12537,0,null);
var ks__12539 = cljs.core.nthnext.call(null,vec__12536__12537,1);

if(cljs.core.truth_(ks__12539))
{return cljs.core.assoc.call(null,m,k__12538,assoc_in.call(null,cljs.core.get.call(null,m,k__12538),ks__12539,v));
} else
{return cljs.core.assoc.call(null,m,k__12538,v);
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
var update_in__delegate = function (m,p__12552,f,args){
var vec__12553__12554 = p__12552;
var k__12555 = cljs.core.nth.call(null,vec__12553__12554,0,null);
var ks__12556 = cljs.core.nthnext.call(null,vec__12553__12554,1);

if(cljs.core.truth_(ks__12556))
{return cljs.core.assoc.call(null,m,k__12555,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12555),ks__12556,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12555,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12555),args));
}
};
var update_in = function (m,p__12552,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__12552, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__12563){
var m = cljs.core.first(arglist__12563);
var p__12552 = cljs.core.first(cljs.core.next(arglist__12563));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12563)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12563)));
return update_in__delegate.call(this, m, p__12552, f, args);
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
var this__12570 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12638 = null;
var G__12638__12639 = (function (coll,k){
var this__12574 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12638__12640 = (function (coll,k,not_found){
var this__12576 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12638 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12638__12639.call(this,coll,k);
case  3 :
return G__12638__12640.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12638;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12578 = this;
var new_array__12580 = cljs.core.aclone.call(null,this__12578.array);

(new_array__12580[k] = v);
return (new cljs.core.Vector(this__12578.meta,new_array__12580));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12650 = null;
var G__12650__12651 = (function (coll,k){
var this__12583 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12650__12652 = (function (coll,k,not_found){
var this__12585 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12650 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12650__12651.call(this,coll,k);
case  3 :
return G__12650__12652.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12650;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12588 = this;
var new_array__12590 = cljs.core.aclone.call(null,this__12588.array);

new_array__12590.push(o);
return (new cljs.core.Vector(this__12588.meta,new_array__12590));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12659 = null;
var G__12659__12660 = (function (v,f){
var this__12591 = this;
return cljs.core.ci_reduce.call(null,this__12591.array,f);
});
var G__12659__12661 = (function (v,f,start){
var this__12592 = this;
return cljs.core.ci_reduce.call(null,this__12592.array,f,start);
});
G__12659 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12659__12660.call(this,v,f);
case  3 :
return G__12659__12661.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12659;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12594 = this;
if(cljs.core.truth_((this__12594.array.length > 0)))
{var vector_seq__12605 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12594.array.length)))
{return cljs.core.cons.call(null,(this__12594.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12605.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12607 = this;
return this__12607.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12609 = this;
var count__12611 = this__12609.array.length;

if(cljs.core.truth_((count__12611 > 0)))
{return (this__12609.array[(count__12611 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12613 = this;
if(cljs.core.truth_((this__12613.array.length > 0)))
{var new_array__12614 = cljs.core.aclone.call(null,this__12613.array);

new_array__12614.pop();
return (new cljs.core.Vector(this__12613.meta,new_array__12614));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12620 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12621 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12623 = this;
return (new cljs.core.Vector(meta,this__12623.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12625 = this;
return this__12625.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12684 = null;
var G__12684__12687 = (function (coll,n){
var this__12627 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12629 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12629))
{return (n < this__12627.array.length);
} else
{return and__3546__auto____12629;
}
})()))
{return (this__12627.array[n]);
} else
{return null;
}
});
var G__12684__12688 = (function (coll,n,not_found){
var this__12631 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12633 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12633))
{return (n < this__12631.array.length);
} else
{return and__3546__auto____12633;
}
})()))
{return (this__12631.array[n]);
} else
{return not_found;
}
});
G__12684 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12684__12687.call(this,coll,n);
case  3 :
return G__12684__12688.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12684;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12636 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12636.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12724){
var args = cljs.core.seq( arglist__12724 );;
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
var this__12737 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12804 = null;
var G__12804__12805 = (function (coll,k){
var this__12741 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12804__12806 = (function (coll,k,not_found){
var this__12742 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12804 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12804__12805.call(this,coll,k);
case  3 :
return G__12804__12806.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12804;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12743 = this;
var v_pos__12745 = (this__12743.start + key);

return (new cljs.core.Subvec(this__12743.meta,cljs.core._assoc.call(null,this__12743.v,v_pos__12745,val),this__12743.start,((this__12743.end > (v_pos__12745 + 1)) ? this__12743.end : (v_pos__12745 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12813 = null;
var G__12813__12814 = (function (coll,k){
var this__12747 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12813__12815 = (function (coll,k,not_found){
var this__12749 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12813 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12813__12814.call(this,coll,k);
case  3 :
return G__12813__12815.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12813;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12751 = this;
return (new cljs.core.Subvec(this__12751.meta,cljs.core._assoc_n.call(null,this__12751.v,this__12751.end,o),this__12751.start,(this__12751.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12820 = null;
var G__12820__12822 = (function (coll,f){
var this__12752 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12820__12823 = (function (coll,f,start){
var this__12757 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12820 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12820__12822.call(this,coll,f);
case  3 :
return G__12820__12823.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12820;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12760 = this;
var subvec_seq__12767 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12760.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12760.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12767.call(null,this__12760.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12768 = this;
return (this__12768.end - this__12768.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12770 = this;
return cljs.core._nth.call(null,this__12770.v,(this__12770.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12772 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12772.start,this__12772.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12772.meta,this__12772.v,this__12772.start,(this__12772.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12775 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12780 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12783 = this;
return (new cljs.core.Subvec(meta,this__12783.v,this__12783.start,this__12783.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12785 = this;
return this__12785.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12892 = null;
var G__12892__12893 = (function (coll,n){
var this__12786 = this;
return cljs.core._nth.call(null,this__12786.v,(this__12786.start + n));
});
var G__12892__12894 = (function (coll,n,not_found){
var this__12788 = this;
return cljs.core._nth.call(null,this__12788.v,(this__12788.start + n),not_found);
});
G__12892 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12892__12893.call(this,coll,n);
case  3 :
return G__12892__12894.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12892;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12789 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12789.meta);
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
var subvec__12919 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12920 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12919.call(this,v,start);
case  3 :
return subvec__12920.call(this,v,start,end);
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
var this__12929 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12930 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12932 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12936 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12936.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12939 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12940 = this;
return cljs.core._first.call(null,this__12940.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12943 = this;
var temp__3695__auto____12944 = cljs.core.next.call(null,this__12943.front);

if(cljs.core.truth_(temp__3695__auto____12944))
{var f1__12945 = temp__3695__auto____12944;

return (new cljs.core.PersistentQueueSeq(this__12943.meta,f1__12945,this__12943.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12943.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12943.meta,this__12943.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12946 = this;
return this__12946.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12947 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12947.front,this__12947.rear));
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
var this__12971 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12972 = this;
if(cljs.core.truth_(this__12972.front))
{return (new cljs.core.PersistentQueue(this__12972.meta,(this__12972.count + 1),this__12972.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12974 = this__12972.rear;

if(cljs.core.truth_(or__3548__auto____12974))
{return or__3548__auto____12974;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12972.meta,(this__12972.count + 1),cljs.core.conj.call(null,this__12972.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12977 = this;
var rear__12979 = cljs.core.seq.call(null,this__12977.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12981 = this__12977.front;

if(cljs.core.truth_(or__3548__auto____12981))
{return or__3548__auto____12981;
} else
{return rear__12979;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12977.front,cljs.core.seq.call(null,rear__12979)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12983 = this;
return this__12983.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12985 = this;
return cljs.core._first.call(null,this__12985.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12987 = this;
if(cljs.core.truth_(this__12987.front))
{var temp__3695__auto____12991 = cljs.core.next.call(null,this__12987.front);

if(cljs.core.truth_(temp__3695__auto____12991))
{var f1__12992 = temp__3695__auto____12991;

return (new cljs.core.PersistentQueue(this__12987.meta,(this__12987.count - 1),f1__12992,this__12987.rear));
} else
{return (new cljs.core.PersistentQueue(this__12987.meta,(this__12987.count - 1),cljs.core.seq.call(null,this__12987.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__13030 = this;
return cljs.core.first.call(null,this__13030.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__13033 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13035 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13080 = this;
return (new cljs.core.PersistentQueue(meta,this__13080.count,this__13080.front,this__13080.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13081 = this;
return this__13081.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13082 = this;
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
var this__13106 = this;
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
var len__13156 = array.length;

var i__13158 = 0;

while(true){
if(cljs.core.truth_((i__13158 < len__13156)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__13158]))))
{return i__13158;
} else
{{
var G__13161 = (i__13158 + incr);
i__13158 = G__13161;
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
var obj_map_contains_key_QMARK___13165 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___13166 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____13164 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13164))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13164;
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
return obj_map_contains_key_QMARK___13165.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___13166.call(this,k,strobj,true_val,false_val);
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
var this__13181 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13295 = null;
var G__13295__13296 = (function (coll,k){
var this__13182 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13295__13297 = (function (coll,k,not_found){
var this__13183 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13183.strobj,(this__13183.strobj[k]),not_found);
});
G__13295 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13295__13296.call(this,coll,k);
case  3 :
return G__13295__13297.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13295;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13186 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__13189 = goog.object.clone.call(null,this__13186.strobj);
var overwrite_QMARK___13190 = new_strobj__13189.hasOwnProperty(k);

(new_strobj__13189[k] = v);
if(cljs.core.truth_(overwrite_QMARK___13190))
{return (new cljs.core.ObjMap(this__13186.meta,this__13186.keys,new_strobj__13189));
} else
{var new_keys__13193 = cljs.core.aclone.call(null,this__13186.keys);

new_keys__13193.push(k);
return (new cljs.core.ObjMap(this__13186.meta,new_keys__13193,new_strobj__13189));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__13186.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13196 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__13196.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__13310 = null;
var G__13310__13311 = (function (coll,k){
var this__13199 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13310__13312 = (function (coll,k,not_found){
var this__13200 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13310 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13310__13311.call(this,coll,k);
case  3 :
return G__13310__13312.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13310;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13202 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13206 = this;
if(cljs.core.truth_((this__13206.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__13171_SHARP_){
return cljs.core.vector.call(null,p1__13171_SHARP_,(this__13206.strobj[p1__13171_SHARP_]));
}),this__13206.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13208 = this;
return this__13208.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13211 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13212 = this;
return (new cljs.core.ObjMap(meta,this__13212.keys,this__13212.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13213 = this;
return this__13213.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13218 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__13218.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13219 = this;
if(cljs.core.truth_((function (){var and__3546__auto____13223 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____13223))
{return this__13219.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____13223;
}
})()))
{var new_keys__13284 = cljs.core.aclone.call(null,this__13219.keys);
var new_strobj__13285 = goog.object.clone.call(null,this__13219.strobj);

new_keys__13284.splice(cljs.core.scan_array.call(null,1,k,new_keys__13284),1);
cljs.core.js_delete.call(null,new_strobj__13285,k);
return (new cljs.core.ObjMap(this__13219.meta,new_keys__13284,new_strobj__13285));
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
var this__13363 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13484 = null;
var G__13484__13485 = (function (coll,k){
var this__13366 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__13484__13486 = (function (coll,k,not_found){
var this__13369 = this;
var bucket__13371 = (this__13369.hashobj[cljs.core.hash.call(null,k)]);
var i__13372 = (cljs.core.truth_(bucket__13371)?cljs.core.scan_array.call(null,2,k,bucket__13371):null);

if(cljs.core.truth_(i__13372))
{return (bucket__13371[(i__13372 + 1)]);
} else
{return not_found;
}
});
G__13484 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13484__13485.call(this,coll,k);
case  3 :
return G__13484__13486.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13484;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__13384 = this;
var h__13386 = cljs.core.hash.call(null,k);
var bucket__13387 = (this__13384.hashobj[h__13386]);

if(cljs.core.truth_(bucket__13387))
{var new_bucket__13389 = cljs.core.aclone.call(null,bucket__13387);
var new_hashobj__13390 = goog.object.clone.call(null,this__13384.hashobj);

(new_hashobj__13390[h__13386] = new_bucket__13389);
var temp__3695__auto____13392 = cljs.core.scan_array.call(null,2,k,new_bucket__13389);

if(cljs.core.truth_(temp__3695__auto____13392))
{var i__13394 = temp__3695__auto____13392;

(new_bucket__13389[(i__13394 + 1)] = v);
return (new cljs.core.HashMap(this__13384.meta,this__13384.count,new_hashobj__13390));
} else
{new_bucket__13389.push(k,v);
return (new cljs.core.HashMap(this__13384.meta,(this__13384.count + 1),new_hashobj__13390));
}
} else
{var new_hashobj__13397 = goog.object.clone.call(null,this__13384.hashobj);

(new_hashobj__13397[h__13386] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__13384.meta,(this__13384.count + 1),new_hashobj__13397));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__13399 = this;
var bucket__13401 = (this__13399.hashobj[cljs.core.hash.call(null,k)]);
var i__13403 = (cljs.core.truth_(bucket__13401)?cljs.core.scan_array.call(null,2,k,bucket__13401):null);

if(cljs.core.truth_(i__13403))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13492 = null;
var G__13492__13493 = (function (coll,k){
var this__13405 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13492__13494 = (function (coll,k,not_found){
var this__13406 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13492 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13492__13493.call(this,coll,k);
case  3 :
return G__13492__13494.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13492;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__13410 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13413 = this;
if(cljs.core.truth_((this__13413.count > 0)))
{var hashes__13416 = cljs.core.js_keys.call(null,this__13413.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__13347_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__13413.hashobj[p1__13347_SHARP_])));
}),hashes__13416);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13418 = this;
return this__13418.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13420 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13423 = this;
return (new cljs.core.HashMap(meta,this__13423.count,this__13423.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13426 = this;
return this__13426.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13431 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__13431.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__13453 = this;
var h__13475 = cljs.core.hash.call(null,k);
var bucket__13476 = (this__13453.hashobj[h__13475]);
var i__13477 = (cljs.core.truth_(bucket__13476)?cljs.core.scan_array.call(null,2,k,bucket__13476):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__13477)))
{return coll;
} else
{var new_hashobj__13478 = goog.object.clone.call(null,this__13453.hashobj);

if(cljs.core.truth_((3 > bucket__13476.length)))
{cljs.core.js_delete.call(null,new_hashobj__13478,h__13475);
} else
{var new_bucket__13479 = cljs.core.aclone.call(null,bucket__13476);

new_bucket__13479.splice(i__13477,2);
(new_hashobj__13478[h__13475] = new_bucket__13479);
}
return (new cljs.core.HashMap(this__13453.meta,(this__13453.count - 1),new_hashobj__13478));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13525 = ks.length;

var i__13526 = 0;
var out__13527 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13526 < len__13525)))
{{
var G__13532 = (i__13526 + 1);
var G__13533 = cljs.core.assoc.call(null,out__13527,(ks[i__13526]),(vs[i__13526]));
i__13526 = G__13532;
out__13527 = G__13533;
continue;
}
} else
{return out__13527;
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
var in$__13535 = cljs.core.seq.call(null,keyvals);
var out__13536 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13535))
{{
var G__13543 = cljs.core.nnext.call(null,in$__13535);
var G__13545 = cljs.core.assoc.call(null,out__13536,cljs.core.first.call(null,in$__13535),cljs.core.second.call(null,in$__13535));
in$__13535 = G__13543;
out__13536 = G__13545;
continue;
}
} else
{return out__13536;
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
hash_map.cljs$lang$applyTo = (function (arglist__13546){
var keyvals = cljs.core.seq( arglist__13546 );;
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
{return cljs.core.reduce.call(null,(function (p1__13549_SHARP_,p2__13551_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13557 = p1__13549_SHARP_;

if(cljs.core.truth_(or__3548__auto____13557))
{return or__3548__auto____13557;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13551_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13590){
var maps = cljs.core.seq( arglist__13590 );;
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
{var merge_entry__13595 = (function (m,e){
var k__13593 = cljs.core.first.call(null,e);
var v__13594 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13593)))
{return cljs.core.assoc.call(null,m,k__13593,f.call(null,cljs.core.get.call(null,m,k__13593),v__13594));
} else
{return cljs.core.assoc.call(null,m,k__13593,v__13594);
}
});
var merge2__13597 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13595,(function (){var or__3548__auto____13596 = m1;

if(cljs.core.truth_(or__3548__auto____13596))
{return or__3548__auto____13596;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13597,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13624){
var f = cljs.core.first(arglist__13624);
var maps = cljs.core.rest(arglist__13624);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13638 = cljs.core.ObjMap.fromObject([],{});
var keys__13639 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13639))
{var key__13642 = cljs.core.first.call(null,keys__13639);
var entry__13643 = cljs.core.get.call(null,map,key__13642,"﷐'user/not-found");

{
var G__13646 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13643,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13638,key__13642,entry__13643):ret__13638);
var G__13648 = cljs.core.next.call(null,keys__13639);
ret__13638 = G__13646;
keys__13639 = G__13648;
continue;
}
} else
{return ret__13638;
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
var this__13656 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13714 = null;
var G__13714__13715 = (function (coll,v){
var this__13657 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13714__13716 = (function (coll,v,not_found){
var this__13659 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13659.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13714 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13714__13715.call(this,coll,v);
case  3 :
return G__13714__13716.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13714;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13771 = null;
var G__13771__13772 = (function (coll,k){
var this__13660 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13771__13773 = (function (coll,k,not_found){
var this__13661 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13771 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13771__13772.call(this,coll,k);
case  3 :
return G__13771__13773.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13771;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13663 = this;
return (new cljs.core.Set(this__13663.meta,cljs.core.assoc.call(null,this__13663.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13665 = this;
return cljs.core.keys.call(null,this__13665.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13670 = this;
return (new cljs.core.Set(this__13670.meta,cljs.core.dissoc.call(null,this__13670.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13682 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13684 = this;
var and__3546__auto____13689 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13689))
{var and__3546__auto____13692 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13692))
{return cljs.core.every_QMARK_.call(null,(function (p1__13633_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13633_SHARP_);
}),other);
} else
{return and__3546__auto____13692;
}
} else
{return and__3546__auto____13689;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13700 = this;
return (new cljs.core.Set(meta,this__13700.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13703 = this;
return this__13703.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13704 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13704.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13804 = cljs.core.seq.call(null,coll);
var out__13805 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13804))))
{{
var G__13808 = cljs.core.rest.call(null,in$__13804);
var G__13809 = cljs.core.conj.call(null,out__13805,cljs.core.first.call(null,in$__13804));
in$__13804 = G__13808;
out__13805 = G__13809;
continue;
}
} else
{return out__13805;
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
{var n__13817 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13818 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13818))
{var e__13819 = temp__3695__auto____13818;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13819));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13817,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13795_SHARP_){
var temp__3695__auto____13821 = cljs.core.find.call(null,smap,p1__13795_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13821))
{var e__13822 = temp__3695__auto____13821;

return cljs.core.second.call(null,e__13822);
} else
{return p1__13795_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13847 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13834,seen){
while(true){
var vec__13836__13837 = p__13834;
var f__13838 = cljs.core.nth.call(null,vec__13836__13837,0,null);
var xs__13840 = vec__13836__13837;

var temp__3698__auto____13842 = cljs.core.seq.call(null,xs__13840);

if(cljs.core.truth_(temp__3698__auto____13842))
{var s__13843 = temp__3698__auto____13842;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13838)))
{{
var G__13851 = cljs.core.rest.call(null,s__13843);
var G__13852 = seen;
p__13834 = G__13851;
seen = G__13852;
continue;
}
} else
{return cljs.core.cons.call(null,f__13838,step.call(null,cljs.core.rest.call(null,s__13843),cljs.core.conj.call(null,seen,f__13838)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13847.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13858 = cljs.core.Vector.fromArray([]);
var s__13859 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13859)))
{{
var G__13864 = cljs.core.conj.call(null,ret__13858,cljs.core.first.call(null,s__13859));
var G__13865 = cljs.core.next.call(null,s__13859);
ret__13858 = G__13864;
s__13859 = G__13865;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13858);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13872 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13872))
{return or__3548__auto____13872;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13875 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13875 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13875 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13888 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13888))
{return or__3548__auto____13888;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13889 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13889 > -1)))
{return cljs.core.subs.call(null,x,2,i__13889);
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
var map__13898 = cljs.core.ObjMap.fromObject([],{});
var ks__13899 = cljs.core.seq.call(null,keys);
var vs__13901 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13905 = ks__13899;

if(cljs.core.truth_(and__3546__auto____13905))
{return vs__13901;
} else
{return and__3546__auto____13905;
}
})()))
{{
var G__13911 = cljs.core.assoc.call(null,map__13898,cljs.core.first.call(null,ks__13899),cljs.core.first.call(null,vs__13901));
var G__13913 = cljs.core.next.call(null,ks__13899);
var G__13914 = cljs.core.next.call(null,vs__13901);
map__13898 = G__13911;
ks__13899 = G__13913;
vs__13901 = G__13914;
continue;
}
} else
{return map__13898;
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
var max_key__13920 = (function (k,x){
return x;
});
var max_key__13921 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13923 = (function() { 
var G__13930__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13896_SHARP_,p2__13897_SHARP_){
return max_key.call(null,k,p1__13896_SHARP_,p2__13897_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13930 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13930__delegate.call(this, k, x, y, more);
};
G__13930.cljs$lang$maxFixedArity = 3;
G__13930.cljs$lang$applyTo = (function (arglist__13931){
var k = cljs.core.first(arglist__13931);
var x = cljs.core.first(cljs.core.next(arglist__13931));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13931)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13931)));
return G__13930__delegate.call(this, k, x, y, more);
});
return G__13930;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13920.call(this,k,x);
case  3 :
return max_key__13921.call(this,k,x,y);
default:
return max_key__13923.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13923.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13940 = (function (k,x){
return x;
});
var min_key__13941 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13942 = (function() { 
var G__13946__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13916_SHARP_,p2__13917_SHARP_){
return min_key.call(null,k,p1__13916_SHARP_,p2__13917_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13946 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13946__delegate.call(this, k, x, y, more);
};
G__13946.cljs$lang$maxFixedArity = 3;
G__13946.cljs$lang$applyTo = (function (arglist__13947){
var k = cljs.core.first(arglist__13947);
var x = cljs.core.first(cljs.core.next(arglist__13947));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13947)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13947)));
return G__13946__delegate.call(this, k, x, y, more);
});
return G__13946;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13940.call(this,k,x);
case  3 :
return min_key__13941.call(this,k,x,y);
default:
return min_key__13942.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13942.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13960 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13961 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13953 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13953))
{var s__13954 = temp__3698__auto____13953;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13954),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13954)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13960.call(this,n,step);
case  3 :
return partition_all__13961.call(this,n,step,coll);
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
var temp__3698__auto____13982 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13982))
{var s__13983 = temp__3698__auto____13982;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13983))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13983),take_while.call(null,pred,cljs.core.rest.call(null,s__13983)));
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
var this__14057 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__14059 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__14158 = null;
var G__14158__14160 = (function (rng,f){
var this__14060 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__14158__14161 = (function (rng,f,s){
var this__14061 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__14158 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__14158__14160.call(this,rng,f);
case  3 :
return G__14158__14161.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14158;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__14062 = this;
var comp__14063 = (cljs.core.truth_((this__14062.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__14063.call(null,this__14062.start,this__14062.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__14064 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__14064.end - this__14064.start) / this__14064.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__14113 = this;
return this__14113.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__14116 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__14116.meta,(this__14116.start + this__14116.step),this__14116.end,this__14116.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__14126 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__14127 = this;
return (new cljs.core.Range(meta,this__14127.start,this__14127.end,this__14127.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__14130 = this;
return this__14130.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__14175 = null;
var G__14175__14176 = (function (rng,n){
var this__14135 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14135.start + (n * this__14135.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14140 = (this__14135.start > this__14135.end);

if(cljs.core.truth_(and__3546__auto____14140))
{return cljs.core._EQ_.call(null,this__14135.step,0);
} else
{return and__3546__auto____14140;
}
})()))
{return this__14135.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__14175__14177 = (function (rng,n,not_found){
var this__14142 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__14142.start + (n * this__14142.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____14153 = (this__14142.start > this__14142.end);

if(cljs.core.truth_(and__3546__auto____14153))
{return cljs.core._EQ_.call(null,this__14142.step,0);
} else
{return and__3546__auto____14153;
}
})()))
{return this__14142.start;
} else
{return not_found;
}
}
});
G__14175 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__14175__14176.call(this,rng,n);
case  3 :
return G__14175__14177.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__14175;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__14154 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__14154.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__14200 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__14201 = (function (end){
return range.call(null,0,end,1);
});
var range__14202 = (function (start,end){
return range.call(null,start,end,1);
});
var range__14204 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__14200.call(this);
case  1 :
return range__14201.call(this,start);
case  2 :
return range__14202.call(this,start,end);
case  3 :
return range__14204.call(this,start,end,step);
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
var temp__3698__auto____14213 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14213))
{var s__14215 = temp__3698__auto____14213;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__14215),take_nth.call(null,n,cljs.core.drop.call(null,n,s__14215)));
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
var temp__3698__auto____14230 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14230))
{var s__14231 = temp__3698__auto____14230;

var fst__14232 = cljs.core.first.call(null,s__14231);
var fv__14233 = f.call(null,fst__14232);
var run__14235 = cljs.core.cons.call(null,fst__14232,cljs.core.take_while.call(null,(function (p1__14225_SHARP_){
return cljs.core._EQ_.call(null,fv__14233,f.call(null,p1__14225_SHARP_));
}),cljs.core.next.call(null,s__14231)));

return cljs.core.cons.call(null,run__14235,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__14235),s__14231))));
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
var reductions__14270 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____14263 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____14263))
{var s__14264 = temp__3695__auto____14263;

return reductions.call(null,f,cljs.core.first.call(null,s__14264),cljs.core.rest.call(null,s__14264));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__14271 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____14266 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____14266))
{var s__14267 = temp__3698__auto____14266;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__14267)),cljs.core.rest.call(null,s__14267));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__14270.call(this,f,init);
case  3 :
return reductions__14271.call(this,f,init,coll);
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
var juxt__14295 = (function (f){
return (function() {
var G__14302 = null;
var G__14302__14304 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__14302__14305 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__14302__14306 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__14302__14307 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__14302__14308 = (function() { 
var G__14312__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__14312 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14312__delegate.call(this, x, y, z, args);
};
G__14312.cljs$lang$maxFixedArity = 3;
G__14312.cljs$lang$applyTo = (function (arglist__14313){
var x = cljs.core.first(arglist__14313);
var y = cljs.core.first(cljs.core.next(arglist__14313));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14313)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14313)));
return G__14312__delegate.call(this, x, y, z, args);
});
return G__14312;
})()
;
G__14302 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14302__14304.call(this);
case  1 :
return G__14302__14305.call(this,x);
case  2 :
return G__14302__14306.call(this,x,y);
case  3 :
return G__14302__14307.call(this,x,y,z);
default:
return G__14302__14308.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14302.cljs$lang$maxFixedArity = 3;
G__14302.cljs$lang$applyTo = G__14302__14308.cljs$lang$applyTo;
return G__14302;
})()
});
var juxt__14296 = (function (f,g){
return (function() {
var G__14317 = null;
var G__14317__14319 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__14317__14320 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__14317__14321 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__14317__14322 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__14317__14323 = (function() { 
var G__14326__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14326 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14326__delegate.call(this, x, y, z, args);
};
G__14326.cljs$lang$maxFixedArity = 3;
G__14326.cljs$lang$applyTo = (function (arglist__14327){
var x = cljs.core.first(arglist__14327);
var y = cljs.core.first(cljs.core.next(arglist__14327));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14327)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14327)));
return G__14326__delegate.call(this, x, y, z, args);
});
return G__14326;
})()
;
G__14317 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14317__14319.call(this);
case  1 :
return G__14317__14320.call(this,x);
case  2 :
return G__14317__14321.call(this,x,y);
case  3 :
return G__14317__14322.call(this,x,y,z);
default:
return G__14317__14323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14317.cljs$lang$maxFixedArity = 3;
G__14317.cljs$lang$applyTo = G__14317__14323.cljs$lang$applyTo;
return G__14317;
})()
});
var juxt__14297 = (function (f,g,h){
return (function() {
var G__14329 = null;
var G__14329__14330 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14329__14331 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14329__14332 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14329__14333 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14329__14334 = (function() { 
var G__14336__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14336 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14336__delegate.call(this, x, y, z, args);
};
G__14336.cljs$lang$maxFixedArity = 3;
G__14336.cljs$lang$applyTo = (function (arglist__14337){
var x = cljs.core.first(arglist__14337);
var y = cljs.core.first(cljs.core.next(arglist__14337));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14337)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14337)));
return G__14336__delegate.call(this, x, y, z, args);
});
return G__14336;
})()
;
G__14329 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14329__14330.call(this);
case  1 :
return G__14329__14331.call(this,x);
case  2 :
return G__14329__14332.call(this,x,y);
case  3 :
return G__14329__14333.call(this,x,y,z);
default:
return G__14329__14334.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14329.cljs$lang$maxFixedArity = 3;
G__14329.cljs$lang$applyTo = G__14329__14334.cljs$lang$applyTo;
return G__14329;
})()
});
var juxt__14298 = (function() { 
var G__14338__delegate = function (f,g,h,fs){
var fs__14289 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14339 = null;
var G__14339__14340 = (function (){
return cljs.core.reduce.call(null,(function (p1__14248_SHARP_,p2__14249_SHARP_){
return cljs.core.conj.call(null,p1__14248_SHARP_,p2__14249_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__14289);
});
var G__14339__14341 = (function (x){
return cljs.core.reduce.call(null,(function (p1__14250_SHARP_,p2__14251_SHARP_){
return cljs.core.conj.call(null,p1__14250_SHARP_,p2__14251_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__14289);
});
var G__14339__14342 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__14253_SHARP_,p2__14254_SHARP_){
return cljs.core.conj.call(null,p1__14253_SHARP_,p2__14254_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__14289);
});
var G__14339__14343 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__14255_SHARP_,p2__14256_SHARP_){
return cljs.core.conj.call(null,p1__14255_SHARP_,p2__14256_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__14289);
});
var G__14339__14344 = (function() { 
var G__14356__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__14257_SHARP_,p2__14258_SHARP_){
return cljs.core.conj.call(null,p1__14257_SHARP_,cljs.core.apply.call(null,p2__14258_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__14289);
};
var G__14356 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14356__delegate.call(this, x, y, z, args);
};
G__14356.cljs$lang$maxFixedArity = 3;
G__14356.cljs$lang$applyTo = (function (arglist__14362){
var x = cljs.core.first(arglist__14362);
var y = cljs.core.first(cljs.core.next(arglist__14362));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14362)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14362)));
return G__14356__delegate.call(this, x, y, z, args);
});
return G__14356;
})()
;
G__14339 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14339__14340.call(this);
case  1 :
return G__14339__14341.call(this,x);
case  2 :
return G__14339__14342.call(this,x,y);
case  3 :
return G__14339__14343.call(this,x,y,z);
default:
return G__14339__14344.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14339.cljs$lang$maxFixedArity = 3;
G__14339.cljs$lang$applyTo = G__14339__14344.cljs$lang$applyTo;
return G__14339;
})()
};
var G__14338 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14338__delegate.call(this, f, g, h, fs);
};
G__14338.cljs$lang$maxFixedArity = 3;
G__14338.cljs$lang$applyTo = (function (arglist__14367){
var f = cljs.core.first(arglist__14367);
var g = cljs.core.first(cljs.core.next(arglist__14367));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14367)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14367)));
return G__14338__delegate.call(this, f, g, h, fs);
});
return G__14338;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__14295.call(this,f);
case  2 :
return juxt__14296.call(this,f,g);
case  3 :
return juxt__14297.call(this,f,g,h);
default:
return juxt__14298.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__14298.cljs$lang$applyTo;
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
var dorun__14369 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14373 = cljs.core.next.call(null,coll);
coll = G__14373;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14370 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14368 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14368))
{return (n > 0);
} else
{return and__3546__auto____14368;
}
})()))
{{
var G__14377 = (n - 1);
var G__14378 = cljs.core.next.call(null,coll);
n = G__14377;
coll = G__14378;
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
return dorun__14369.call(this,n);
case  2 :
return dorun__14370.call(this,n,coll);
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
var doall__14388 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14389 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14388.call(this,n);
case  2 :
return doall__14389.call(this,n,coll);
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
var matches__14393 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14393),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14393),1)))
{return cljs.core.first.call(null,matches__14393);
} else
{return cljs.core.vec.call(null,matches__14393);
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
var matches__14398 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14398)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14398),1)))
{return cljs.core.first.call(null,matches__14398);
} else
{return cljs.core.vec.call(null,matches__14398);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14410 = cljs.core.re_find.call(null,re,s);
var match_idx__14412 = s.search(re);
var match_str__14414 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14410))?cljs.core.first.call(null,match_data__14410):match_data__14410);
var post_match__14415 = cljs.core.subs.call(null,s,(match_idx__14412 + cljs.core.count.call(null,match_str__14414)));

if(cljs.core.truth_(match_data__14410))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14410,re_seq.call(null,re,post_match__14415));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14424_SHARP_){
return print_one.call(null,p1__14424_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____14433 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3546__auto____14433))
{var and__3546__auto____14542 = (function (){var x__445__auto____14434 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14436 = x__445__auto____14434;

if(cljs.core.truth_(and__3546__auto____14436))
{var and__3546__auto____14539 = x__445__auto____14434.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14539))
{return cljs.core.not.call(null,x__445__auto____14434.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14539;
}
} else
{return and__3546__auto____14436;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14434);
}
})();

if(cljs.core.truth_(and__3546__auto____14542))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14542;
}
} else
{return and__3546__auto____14433;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14545 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14546 = x__445__auto____14545;

if(cljs.core.truth_(and__3546__auto____14546))
{var and__3546__auto____14547 = x__445__auto____14545.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14547))
{return cljs.core.not.call(null,x__445__auto____14545.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14547;
}
} else
{return and__3546__auto____14546;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14545);
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
var first_obj__14557 = cljs.core.first.call(null,objs);
var sb__14558 = (new goog.string.StringBuffer());

var G__14559__14560 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14559__14560))
{var obj__14561 = cljs.core.first.call(null,G__14559__14560);
var G__14559__14562 = G__14559__14560;

while(true){
if(cljs.core.truth_((obj__14561 === first_obj__14557)))
{} else
{sb__14558.append(" ");
}
var G__14563__14566 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14561,opts));

if(cljs.core.truth_(G__14563__14566))
{var string__14567 = cljs.core.first.call(null,G__14563__14566);
var G__14563__14568 = G__14563__14566;

while(true){
sb__14558.append(string__14567);
var temp__3698__auto____14569 = cljs.core.next.call(null,G__14563__14568);

if(cljs.core.truth_(temp__3698__auto____14569))
{var G__14563__14570 = temp__3698__auto____14569;

{
var G__14583 = cljs.core.first.call(null,G__14563__14570);
var G__14584 = G__14563__14570;
string__14567 = G__14583;
G__14563__14568 = G__14584;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14571 = cljs.core.next.call(null,G__14559__14562);

if(cljs.core.truth_(temp__3698__auto____14571))
{var G__14559__14572 = temp__3698__auto____14571;

{
var G__14585 = cljs.core.first.call(null,G__14559__14572);
var G__14586 = G__14559__14572;
obj__14561 = G__14585;
G__14559__14562 = G__14586;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14558);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14590 = cljs.core.first.call(null,objs);

var G__14591__14592 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14591__14592))
{var obj__14594 = cljs.core.first.call(null,G__14591__14592);
var G__14591__14595 = G__14591__14592;

while(true){
if(cljs.core.truth_((obj__14594 === first_obj__14590)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14596__14598 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14594,opts));

if(cljs.core.truth_(G__14596__14598))
{var string__14599 = cljs.core.first.call(null,G__14596__14598);
var G__14596__14600 = G__14596__14598;

while(true){
cljs.core.string_print.call(null,string__14599);
var temp__3698__auto____14601 = cljs.core.next.call(null,G__14596__14600);

if(cljs.core.truth_(temp__3698__auto____14601))
{var G__14596__14602 = temp__3698__auto____14601;

{
var G__14619 = cljs.core.first.call(null,G__14596__14602);
var G__14620 = G__14596__14602;
string__14599 = G__14619;
G__14596__14600 = G__14620;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14604 = cljs.core.next.call(null,G__14591__14595);

if(cljs.core.truth_(temp__3698__auto____14604))
{var G__14591__14606 = temp__3698__auto____14604;

{
var G__14628 = cljs.core.first.call(null,G__14591__14606);
var G__14629 = G__14591__14606;
obj__14594 = G__14628;
G__14591__14595 = G__14629;
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
pr_str.cljs$lang$applyTo = (function (arglist__14657){
var objs = cljs.core.seq( arglist__14657 );;
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
pr.cljs$lang$applyTo = (function (arglist__14660){
var objs = cljs.core.seq( arglist__14660 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14664){
var objs = cljs.core.seq( arglist__14664 );;
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
println.cljs$lang$applyTo = (function (arglist__14665){
var objs = cljs.core.seq( arglist__14665 );;
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
prn.cljs$lang$applyTo = (function (arglist__14671){
var objs = cljs.core.seq( arglist__14671 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14675 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14675,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14678 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14678))
{var nspc__14679 = temp__3698__auto____14678;

return cljs.core.str.call(null,nspc__14679,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14683 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14683))
{var nspc__14684 = temp__3698__auto____14683;

return cljs.core.str.call(null,nspc__14684,"/");
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
var pr_pair__14707 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14707,"{",", ","}",opts,coll);
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
var this__14739 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14742 = this;
var G__14743__14744 = cljs.core.seq.call(null,this__14742.watches);

if(cljs.core.truth_(G__14743__14744))
{var G__14747__14749 = cljs.core.first.call(null,G__14743__14744);
var vec__14748__14750 = G__14747__14749;
var key__14751 = cljs.core.nth.call(null,vec__14748__14750,0,null);
var f__14752 = cljs.core.nth.call(null,vec__14748__14750,1,null);
var G__14743__14753 = G__14743__14744;

var G__14747__14754 = G__14747__14749;
var G__14743__14755 = G__14743__14753;

while(true){
var vec__14756__14757 = G__14747__14754;
var key__14758 = cljs.core.nth.call(null,vec__14756__14757,0,null);
var f__14759 = cljs.core.nth.call(null,vec__14756__14757,1,null);
var G__14743__14760 = G__14743__14755;

f__14759.call(null,key__14758,this$,oldval,newval);
var temp__3698__auto____14761 = cljs.core.next.call(null,G__14743__14760);

if(cljs.core.truth_(temp__3698__auto____14761))
{var G__14743__14762 = temp__3698__auto____14761;

{
var G__14770 = cljs.core.first.call(null,G__14743__14762);
var G__14771 = G__14743__14762;
G__14747__14754 = G__14770;
G__14743__14755 = G__14771;
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
var this__14763 = this;
return this$.watches = cljs.core.assoc.call(null,this__14763.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14764 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14764.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14765 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14765.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14766 = this;
return this__14766.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14767 = this;
return this__14767.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14768 = this;
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
var atom__14789 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14790 = (function() { 
var G__14792__delegate = function (x,p__14779){
var map__14781__14782 = p__14779;
var map__14781__14784 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14781__14782))?cljs.core.apply.call(null,cljs.core.hash_map,map__14781__14782):map__14781__14782);
var validator__14785 = cljs.core.get.call(null,map__14781__14784,"﷐'validator");
var meta__14786 = cljs.core.get.call(null,map__14781__14784,"﷐'meta");

return (new cljs.core.Atom(x,meta__14786,validator__14785,null));
};
var G__14792 = function (x,var_args){
var p__14779 = null;
if (goog.isDef(var_args)) {
  p__14779 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14792__delegate.call(this, x, p__14779);
};
G__14792.cljs$lang$maxFixedArity = 1;
G__14792.cljs$lang$applyTo = (function (arglist__14795){
var x = cljs.core.first(arglist__14795);
var p__14779 = cljs.core.rest(arglist__14795);
return G__14792__delegate.call(this, x, p__14779);
});
return G__14792;
})()
;
atom = function(x,var_args){
var p__14779 = var_args;
switch(arguments.length){
case  1 :
return atom__14789.call(this,x);
default:
return atom__14790.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14790.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14852 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14852))
{var validate__14853 = temp__3698__auto____14852;

if(cljs.core.truth_(validate__14853.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14857 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14857,new_value);
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
var swap_BANG___14862 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14863 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14864 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14865 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14866 = (function() { 
var G__14868__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14868 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14868__delegate.call(this, a, f, x, y, z, more);
};
G__14868.cljs$lang$maxFixedArity = 5;
G__14868.cljs$lang$applyTo = (function (arglist__14870){
var a = cljs.core.first(arglist__14870);
var f = cljs.core.first(cljs.core.next(arglist__14870));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14870)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14870))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14870)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14870)))));
return G__14868__delegate.call(this, a, f, x, y, z, more);
});
return G__14868;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14862.call(this,a,f);
case  3 :
return swap_BANG___14863.call(this,a,f,x);
case  4 :
return swap_BANG___14864.call(this,a,f,x,y);
case  5 :
return swap_BANG___14865.call(this,a,f,x,y,z);
default:
return swap_BANG___14866.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14866.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14992){
var iref = cljs.core.first(arglist__14992);
var f = cljs.core.first(cljs.core.next(arglist__14992));
var args = cljs.core.rest(cljs.core.next(arglist__14992));
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
var this__15006 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__15006.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__15008 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__15008.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__15008.state,this__15008.f);
}
return cljs.core.deref.call(null,this__15008.state);
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
delay.cljs$lang$applyTo = (function (arglist__15016){
var body = cljs.core.seq( arglist__15016 );;
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
var map__15123__15127 = options;
var map__15123__15128 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__15123__15127))?cljs.core.apply.call(null,cljs.core.hash_map,map__15123__15127):map__15123__15127);
var keywordize_keys__15129 = cljs.core.get.call(null,map__15123__15128,"﷐'keywordize-keys");
var keyfn__15130 = (cljs.core.truth_(keywordize_keys__15129)?cljs.core.keyword:cljs.core.str);
var f__15206 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____15202 = (function iter__15134(s__15135){
return (new cljs.core.LazySeq(null,false,(function (){
var s__15135__15197 = s__15135;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__15135__15197)))
{var k__15199 = cljs.core.first.call(null,s__15135__15197);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__15130.call(null,k__15199),thisfn.call(null,(x[k__15199]))]),iter__15134.call(null,cljs.core.rest.call(null,s__15135__15197)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____15202.call(null,cljs.core.js_keys.call(null,x));
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

return f__15206.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__15207){
var x = cljs.core.first(arglist__15207);
var options = cljs.core.rest(arglist__15207);
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
var mem__15209 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__15216__delegate = function (args){
var temp__3695__auto____15210 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__15209),args);

if(cljs.core.truth_(temp__3695__auto____15210))
{var v__15211 = temp__3695__auto____15210;

return v__15211;
} else
{var ret__15212 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__15209,cljs.core.assoc,args,ret__15212);
return ret__15212;
}
};
var G__15216 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__15216__delegate.call(this, args);
};
G__15216.cljs$lang$maxFixedArity = 0;
G__15216.cljs$lang$applyTo = (function (arglist__15221){
var args = cljs.core.seq( arglist__15221 );;
return G__15216__delegate.call(this, args);
});
return G__15216;
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
var trampoline__15227 = (function (f){
while(true){
var ret__15222 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__15222)))
{{
var G__15231 = ret__15222;
f = G__15231;
continue;
}
} else
{return ret__15222;
}
break;
}
});
var trampoline__15229 = (function() { 
var G__15232__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__15232 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15232__delegate.call(this, f, args);
};
G__15232.cljs$lang$maxFixedArity = 1;
G__15232.cljs$lang$applyTo = (function (arglist__15235){
var f = cljs.core.first(arglist__15235);
var args = cljs.core.rest(arglist__15235);
return G__15232__delegate.call(this, f, args);
});
return G__15232;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__15227.call(this,f);
default:
return trampoline__15229.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__15229.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__15255 = (function (){
return rand.call(null,1);
});
var rand__15256 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__15255.call(this);
case  1 :
return rand__15256.call(this,n);
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
var k__15270 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__15270,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__15270,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___15303 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___15304 = (function (h,child,parent){
var or__3548__auto____15293 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____15293))
{return or__3548__auto____15293;
} else
{var or__3548__auto____15295 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____15295))
{return or__3548__auto____15295;
} else
{var and__3546__auto____15297 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____15297))
{var and__3546__auto____15298 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____15298))
{var and__3546__auto____15299 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____15299))
{var ret__15300 = true;
var i__15301 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____15302 = cljs.core.not.call(null,ret__15300);

if(cljs.core.truth_(or__3548__auto____15302))
{return or__3548__auto____15302;
} else
{return cljs.core._EQ_.call(null,i__15301,cljs.core.count.call(null,parent));
}
})()))
{return ret__15300;
} else
{{
var G__15306 = isa_QMARK_.call(null,h,child.call(null,i__15301),parent.call(null,i__15301));
var G__15307 = (i__15301 + 1);
ret__15300 = G__15306;
i__15301 = G__15307;
continue;
}
}
break;
}
} else
{return and__3546__auto____15299;
}
} else
{return and__3546__auto____15298;
}
} else
{return and__3546__auto____15297;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___15303.call(this,h,child);
case  3 :
return isa_QMARK___15304.call(this,h,child,parent);
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
var parents__15312 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__15313 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__15312.call(this,h);
case  2 :
return parents__15313.call(this,h,tag);
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
var ancestors__15322 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__15323 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__15322.call(this,h);
case  2 :
return ancestors__15323.call(this,h,tag);
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
var descendants__15330 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__15331 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__15330.call(this,h);
case  2 :
return descendants__15331.call(this,h,tag);
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
var derive__15359 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__15360 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__15344 = "﷐'parents".call(null,h);
var td__15346 = "﷐'descendants".call(null,h);
var ta__15347 = "﷐'ancestors".call(null,h);
var tf__15350 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____15355 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__15344.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15347.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__15347.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__15344,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__15350.call(null,"﷐'ancestors".call(null,h),tag,td__15346,parent,ta__15347),"﷐'descendants":tf__15350.call(null,"﷐'descendants".call(null,h),parent,ta__15347,tag,td__15346)});
})());

if(cljs.core.truth_(or__3548__auto____15355))
{return or__3548__auto____15355;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__15359.call(this,h,tag);
case  3 :
return derive__15360.call(this,h,tag,parent);
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
var underive__15379 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__15380 = (function (h,tag,parent){
var parentMap__15374 = "﷐'parents".call(null,h);
var childsParents__15376 = (cljs.core.truth_(parentMap__15374.call(null,tag))?cljs.core.disj.call(null,parentMap__15374.call(null,tag),parent):cljs.core.set([]));
var newParents__15377 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__15376))?cljs.core.assoc.call(null,parentMap__15374,tag,childsParents__15376):cljs.core.dissoc.call(null,parentMap__15374,tag));
var deriv_seq__15378 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__15335_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__15335_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__15335_SHARP_),cljs.core.second.call(null,p1__15335_SHARP_)));
}),cljs.core.seq.call(null,newParents__15377)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__15374.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__15336_SHARP_,p2__15337_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__15336_SHARP_,p2__15337_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__15378));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__15379.call(this,h,tag);
case  3 :
return underive__15380.call(this,h,tag,parent);
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
var xprefs__15384 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____15386 = (cljs.core.truth_((function (){var and__3546__auto____15385 = xprefs__15384;

if(cljs.core.truth_(and__3546__auto____15385))
{return xprefs__15384.call(null,y);
} else
{return and__3546__auto____15385;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____15386))
{return or__3548__auto____15386;
} else
{var or__3548__auto____15388 = (function (){var ps__15387 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15387) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__15387),prefer_table)))
{} else
{}
{
var G__15391 = cljs.core.rest.call(null,ps__15387);
ps__15387 = G__15391;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15388))
{return or__3548__auto____15388;
} else
{var or__3548__auto____15390 = (function (){var ps__15389 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__15389) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__15389),y,prefer_table)))
{} else
{}
{
var G__15393 = cljs.core.rest.call(null,ps__15389);
ps__15389 = G__15393;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____15390))
{return or__3548__auto____15390;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15397 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15397))
{return or__3548__auto____15397;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15410 = cljs.core.reduce.call(null,(function (be,p__15402){
var vec__15403__15404 = p__15402;
var k__15405 = cljs.core.nth.call(null,vec__15403__15404,0,null);
var ___15406 = cljs.core.nth.call(null,vec__15403__15404,1,null);
var e__15407 = vec__15403__15404;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15405)))
{var be2__15409 = (cljs.core.truth_((function (){var or__3548__auto____15408 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15408))
{return or__3548__auto____15408;
} else
{return cljs.core.dominates.call(null,k__15405,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15407:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15409),k__15405,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15405," and ",cljs.core.first.call(null,be2__15409),", and neither is preferred")));
}
return be2__15409;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15410))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15410));
return cljs.core.second.call(null,best_entry__15410);
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
if(cljs.core.truth_((function (){var and__3546__auto____15414 = mf;

if(cljs.core.truth_(and__3546__auto____15414))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15414;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15415 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15415))
{return or__3548__auto____15415;
} else
{var or__3548__auto____15416 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15416))
{return or__3548__auto____15416;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15417 = mf;

if(cljs.core.truth_(and__3546__auto____15417))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15417;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15420 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15420))
{return or__3548__auto____15420;
} else
{var or__3548__auto____15424 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15424))
{return or__3548__auto____15424;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15426 = mf;

if(cljs.core.truth_(and__3546__auto____15426))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15426;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15427 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15427))
{return or__3548__auto____15427;
} else
{var or__3548__auto____15428 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15428))
{return or__3548__auto____15428;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15431 = mf;

if(cljs.core.truth_(and__3546__auto____15431))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15431;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15435 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15435))
{return or__3548__auto____15435;
} else
{var or__3548__auto____15438 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15438))
{return or__3548__auto____15438;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15441 = mf;

if(cljs.core.truth_(and__3546__auto____15441))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15441;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15444 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15444))
{return or__3548__auto____15444;
} else
{var or__3548__auto____15445 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15445))
{return or__3548__auto____15445;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15448 = mf;

if(cljs.core.truth_(and__3546__auto____15448))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15448;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15450 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15450))
{return or__3548__auto____15450;
} else
{var or__3548__auto____15452 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15452))
{return or__3548__auto____15452;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15456 = mf;

if(cljs.core.truth_(and__3546__auto____15456))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15456;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15457 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15457))
{return or__3548__auto____15457;
} else
{var or__3548__auto____15458 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15458))
{return or__3548__auto____15458;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15460 = mf;

if(cljs.core.truth_(and__3546__auto____15460))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15460;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15462 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15462))
{return or__3548__auto____15462;
} else
{var or__3548__auto____15464 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15464))
{return or__3548__auto____15464;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15489 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15490 = cljs.core._get_method.call(null,mf,dispatch_val__15489);

if(cljs.core.truth_(target_fn__15490))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15489)));
}
return cljs.core.apply.call(null,target_fn__15490,args);
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
var this__15502 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15505 = this;
cljs.core.swap_BANG_.call(null,this__15505.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15505.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15505.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15505.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15508 = this;
cljs.core.swap_BANG_.call(null,this__15508.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15508.method_cache,this__15508.method_table,this__15508.cached_hierarchy,this__15508.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15517 = this;
cljs.core.swap_BANG_.call(null,this__15517.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15517.method_cache,this__15517.method_table,this__15517.cached_hierarchy,this__15517.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15518 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15518.cached_hierarchy),cljs.core.deref.call(null,this__15518.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15518.method_cache,this__15518.method_table,this__15518.cached_hierarchy,this__15518.hierarchy);
}
var temp__3695__auto____15521 = cljs.core.deref.call(null,this__15518.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15521))
{var target_fn__15523 = temp__3695__auto____15521;

return target_fn__15523;
} else
{var temp__3695__auto____15525 = cljs.core.find_and_cache_best_method.call(null,this__15518.name,dispatch_val,this__15518.hierarchy,this__15518.method_table,this__15518.prefer_table,this__15518.method_cache,this__15518.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15525))
{var target_fn__15527 = temp__3695__auto____15525;

return target_fn__15527;
} else
{return cljs.core.deref.call(null,this__15518.method_table).call(null,this__15518.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15530 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15530.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15530.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15530.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15530.method_cache,this__15530.method_table,this__15530.cached_hierarchy,this__15530.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15533 = this;
return cljs.core.deref.call(null,this__15533.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15534 = this;
return cljs.core.deref.call(null,this__15534.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15535 = this;
return cljs.core.do_dispatch.call(null,mf,this__15535.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15546__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15546 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15546__delegate.call(this, _, args);
};
G__15546.cljs$lang$maxFixedArity = 1;
G__15546.cljs$lang$applyTo = (function (arglist__15547){
var _ = cljs.core.first(arglist__15547);
var args = cljs.core.rest(arglist__15547);
return G__15546__delegate.call(this, _, args);
});
return G__15546;
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
