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
var _invoke__7602 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____7296 = this$;

if(cljs.core.truth_(and__3546__auto____7296))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7296;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____7298 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7298))
{return or__3548__auto____7298;
} else
{var or__3548__auto____7299 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7299))
{return or__3548__auto____7299;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__7603 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____7301 = this$;

if(cljs.core.truth_(and__3546__auto____7301))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7301;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____7303 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7303))
{return or__3548__auto____7303;
} else
{var or__3548__auto____7304 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7304))
{return or__3548__auto____7304;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__7604 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____7305 = this$;

if(cljs.core.truth_(and__3546__auto____7305))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7305;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
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
})().call(null,this$,a,b);
}
});
var _invoke__7605 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____7310 = this$;

if(cljs.core.truth_(and__3546__auto____7310))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7310;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____7313 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7313))
{return or__3548__auto____7313;
} else
{var or__3548__auto____7315 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7315))
{return or__3548__auto____7315;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__7606 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____7319 = this$;

if(cljs.core.truth_(and__3546__auto____7319))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7319;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____7321 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7321))
{return or__3548__auto____7321;
} else
{var or__3548__auto____7375 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7375))
{return or__3548__auto____7375;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__7607 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____7378 = this$;

if(cljs.core.truth_(and__3546__auto____7378))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7378;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____7382 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7382))
{return or__3548__auto____7382;
} else
{var or__3548__auto____7384 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7384))
{return or__3548__auto____7384;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__7608 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____7387 = this$;

if(cljs.core.truth_(and__3546__auto____7387))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7387;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____7392 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7392))
{return or__3548__auto____7392;
} else
{var or__3548__auto____7394 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7394))
{return or__3548__auto____7394;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__7609 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____7397 = this$;

if(cljs.core.truth_(and__3546__auto____7397))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7397;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
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
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__7610 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____7413 = this$;

if(cljs.core.truth_(and__3546__auto____7413))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7413;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____7416 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7416))
{return or__3548__auto____7416;
} else
{var or__3548__auto____7418 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7418))
{return or__3548__auto____7418;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__7611 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____7421 = this$;

if(cljs.core.truth_(and__3546__auto____7421))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7421;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____7428 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7428))
{return or__3548__auto____7428;
} else
{var or__3548__auto____7429 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7429))
{return or__3548__auto____7429;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__7612 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____7431 = this$;

if(cljs.core.truth_(and__3546__auto____7431))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7431;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____7456 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7456))
{return or__3548__auto____7456;
} else
{var or__3548__auto____7457 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7457))
{return or__3548__auto____7457;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__7613 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____7459 = this$;

if(cljs.core.truth_(and__3546__auto____7459))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7459;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____7467 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7467))
{return or__3548__auto____7467;
} else
{var or__3548__auto____7468 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7468))
{return or__3548__auto____7468;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__7614 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____7472 = this$;

if(cljs.core.truth_(and__3546__auto____7472))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7472;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____7474 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7474))
{return or__3548__auto____7474;
} else
{var or__3548__auto____7475 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7475))
{return or__3548__auto____7475;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__7615 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____7477 = this$;

if(cljs.core.truth_(and__3546__auto____7477))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7477;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____7479 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7479))
{return or__3548__auto____7479;
} else
{var or__3548__auto____7481 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7481))
{return or__3548__auto____7481;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__7616 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____7486 = this$;

if(cljs.core.truth_(and__3546__auto____7486))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7486;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____7488 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7488))
{return or__3548__auto____7488;
} else
{var or__3548__auto____7489 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7489))
{return or__3548__auto____7489;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__7617 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____7492 = this$;

if(cljs.core.truth_(and__3546__auto____7492))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7492;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
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
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__7618 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____7528 = this$;

if(cljs.core.truth_(and__3546__auto____7528))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7528;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____7537 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7537))
{return or__3548__auto____7537;
} else
{var or__3548__auto____7539 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7539))
{return or__3548__auto____7539;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__7619 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____7542 = this$;

if(cljs.core.truth_(and__3546__auto____7542))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7542;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____7545 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7545))
{return or__3548__auto____7545;
} else
{var or__3548__auto____7546 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7546))
{return or__3548__auto____7546;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__7620 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____7549 = this$;

if(cljs.core.truth_(and__3546__auto____7549))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7549;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____7555 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7555))
{return or__3548__auto____7555;
} else
{var or__3548__auto____7556 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7556))
{return or__3548__auto____7556;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__7621 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____7559 = this$;

if(cljs.core.truth_(and__3546__auto____7559))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7559;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____7561 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7561))
{return or__3548__auto____7561;
} else
{var or__3548__auto____7598 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7598))
{return or__3548__auto____7598;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__7622 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____7599 = this$;

if(cljs.core.truth_(and__3546__auto____7599))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____7599;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____7600 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____7600))
{return or__3548__auto____7600;
} else
{var or__3548__auto____7601 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____7601))
{return or__3548__auto____7601;
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
return _invoke__7602.call(this,this$);
case  2 :
return _invoke__7603.call(this,this$,a);
case  3 :
return _invoke__7604.call(this,this$,a,b);
case  4 :
return _invoke__7605.call(this,this$,a,b,c);
case  5 :
return _invoke__7606.call(this,this$,a,b,c,d);
case  6 :
return _invoke__7607.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__7608.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__7609.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__7610.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__7611.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__7612.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__7613.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__7614.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__7615.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__7616.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__7617.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__7618.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__7619.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__7620.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__7621.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__7622.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7692 = coll;

if(cljs.core.truth_(and__3546__auto____7692))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____7692;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____7694 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7694))
{return or__3548__auto____7694;
} else
{var or__3548__auto____7696 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____7696))
{return or__3548__auto____7696;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7702 = coll;

if(cljs.core.truth_(and__3546__auto____7702))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____7702;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____7704 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7704))
{return or__3548__auto____7704;
} else
{var or__3548__auto____7706 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____7706))
{return or__3548__auto____7706;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____7711 = coll;

if(cljs.core.truth_(and__3546__auto____7711))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____7711;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____7712 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7712))
{return or__3548__auto____7712;
} else
{var or__3548__auto____7713 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____7713))
{return or__3548__auto____7713;
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
var _nth__7726 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____7717 = coll;

if(cljs.core.truth_(and__3546__auto____7717))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7717;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____7719 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7719))
{return or__3548__auto____7719;
} else
{var or__3548__auto____7721 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7721))
{return or__3548__auto____7721;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__7727 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7723 = coll;

if(cljs.core.truth_(and__3546__auto____7723))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____7723;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____7724 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7724))
{return or__3548__auto____7724;
} else
{var or__3548__auto____7725 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____7725))
{return or__3548__auto____7725;
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
return _nth__7726.call(this,coll,n);
case  3 :
return _nth__7727.call(this,coll,n,not_found);
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
{return (function (){var or__3548__auto____7789 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7789))
{return or__3548__auto____7789;
} else
{var or__3548__auto____7791 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____7791))
{return or__3548__auto____7791;
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
var _lookup__7814 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____7800 = o;

if(cljs.core.truth_(and__3546__auto____7800))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7800;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____7804 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7804))
{return or__3548__auto____7804;
} else
{var or__3548__auto____7805 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____7805))
{return or__3548__auto____7805;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__7816 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____7808 = o;

if(cljs.core.truth_(and__3546__auto____7808))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____7808;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
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
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__7814.call(this,o,k);
case  3 :
return _lookup__7816.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____7822 = coll;

if(cljs.core.truth_(and__3546__auto____7822))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____7822;
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
if(cljs.core.truth_((function (){var and__3546__auto____7840 = coll;

if(cljs.core.truth_(and__3546__auto____7840))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____7840;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____7842 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7842))
{return or__3548__auto____7842;
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
if(cljs.core.truth_((function (){var and__3546__auto____7854 = coll;

if(cljs.core.truth_(and__3546__auto____7854))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____7854;
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
if(cljs.core.truth_((function (){var and__3546__auto____7862 = coll;

if(cljs.core.truth_(and__3546__auto____7862))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____7862;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____7863 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7863))
{return or__3548__auto____7863;
} else
{var or__3548__auto____7864 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____7864))
{return or__3548__auto____7864;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7896 = coll;

if(cljs.core.truth_(and__3546__auto____7896))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____7896;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____7897 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7897))
{return or__3548__auto____7897;
} else
{var or__3548__auto____7898 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____7898))
{return or__3548__auto____7898;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____7899 = coll;

if(cljs.core.truth_(and__3546__auto____7899))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____7899;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____7902 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7902))
{return or__3548__auto____7902;
} else
{var or__3548__auto____7903 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____7903))
{return or__3548__auto____7903;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____7916 = coll;

if(cljs.core.truth_(and__3546__auto____7916))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____7916;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____7918 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____7918))
{return or__3548__auto____7918;
} else
{var or__3548__auto____7919 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____7919))
{return or__3548__auto____7919;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____7921 = o;

if(cljs.core.truth_(and__3546__auto____7921))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____7921;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____7924 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7924))
{return or__3548__auto____7924;
} else
{var or__3548__auto____7925 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____7925))
{return or__3548__auto____7925;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____7930 = o;

if(cljs.core.truth_(and__3546__auto____7930))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____7930;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____7931 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7931))
{return or__3548__auto____7931;
} else
{var or__3548__auto____7932 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____7932))
{return or__3548__auto____7932;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____7936 = o;

if(cljs.core.truth_(and__3546__auto____7936))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____7936;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____7938 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7938))
{return or__3548__auto____7938;
} else
{var or__3548__auto____7939 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____7939))
{return or__3548__auto____7939;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____7943 = o;

if(cljs.core.truth_(and__3546__auto____7943))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____7943;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____7945 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____7945))
{return or__3548__auto____7945;
} else
{var or__3548__auto____7947 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____7947))
{return or__3548__auto____7947;
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
var _reduce__8008 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____7994 = coll;

if(cljs.core.truth_(and__3546__auto____7994))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____7994;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____8000 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8000))
{return or__3548__auto____8000;
} else
{var or__3548__auto____8001 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____8001))
{return or__3548__auto____8001;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__8010 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____8003 = coll;

if(cljs.core.truth_(and__3546__auto____8003))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____8003;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____8006 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____8006))
{return or__3548__auto____8006;
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
return _reduce__8008.call(this,coll,f);
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
if(cljs.core.truth_((function (){var and__3546__auto____8014 = o;

if(cljs.core.truth_(and__3546__auto____8014))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____8014;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____8015 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8015))
{return or__3548__auto____8015;
} else
{var or__3548__auto____8016 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____8016))
{return or__3548__auto____8016;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____8018 = o;

if(cljs.core.truth_(and__3546__auto____8018))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____8018;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____8029 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8029))
{return or__3548__auto____8029;
} else
{var or__3548__auto____8030 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____8030))
{return or__3548__auto____8030;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____8035 = o;

if(cljs.core.truth_(and__3546__auto____8035))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____8035;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____8036 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8036))
{return or__3548__auto____8036;
} else
{var or__3548__auto____8037 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____8037))
{return or__3548__auto____8037;
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
if(cljs.core.truth_((function (){var and__3546__auto____8044 = o;

if(cljs.core.truth_(and__3546__auto____8044))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____8044;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____8045 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____8045))
{return or__3548__auto____8045;
} else
{var or__3548__auto____8047 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____8047))
{return or__3548__auto____8047;
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
if(cljs.core.truth_((function (){var and__3546__auto____8115 = this$;

if(cljs.core.truth_(and__3546__auto____8115))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____8115;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____8117 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8117))
{return or__3548__auto____8117;
} else
{var or__3548__auto____8119 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____8119))
{return or__3548__auto____8119;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____8121 = this$;

if(cljs.core.truth_(and__3546__auto____8121))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____8121;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____8123 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8123))
{return or__3548__auto____8123;
} else
{var or__3548__auto____8124 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8124))
{return or__3548__auto____8124;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____8129 = this$;

if(cljs.core.truth_(and__3546__auto____8129))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____8129;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____8131 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____8131))
{return or__3548__auto____8131;
} else
{var or__3548__auto____8132 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____8132))
{return or__3548__auto____8132;
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
var G__8187 = null;
var G__8187__8189 = (function (o,k){
return null;
});
var G__8187__8190 = (function (o,k,not_found){
return not_found;
});
G__8187 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__8187__8189.call(this,o,k);
case  3 :
return G__8187__8190.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8187;
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
var G__8203 = null;
var G__8203__8204 = (function (_,n){
return null;
});
var G__8203__8205 = (function (_,n,not_found){
return not_found;
});
G__8203 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__8203__8204.call(this,_,n);
case  3 :
return G__8203__8205.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8203;
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
var ci_reduce__8227 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__8213 = cljs.core._nth.call(null,cicoll,0);
var n__8214 = 1;

while(true){
if(cljs.core.truth_((n__8214 < cljs.core._count.call(null,cicoll))))
{{
var G__8233 = f.call(null,val__8213,cljs.core._nth.call(null,cicoll,n__8214));
var G__8234 = (n__8214 + 1);
val__8213 = G__8233;
n__8214 = G__8234;
continue;
}
} else
{return val__8213;
}
break;
}
}
});
var ci_reduce__8228 = (function (cicoll,f,val){
var val__8219 = val;
var n__8220 = 0;

while(true){
if(cljs.core.truth_((n__8220 < cljs.core._count.call(null,cicoll))))
{{
var G__8235 = f.call(null,val__8219,cljs.core._nth.call(null,cicoll,n__8220));
var G__8236 = (n__8220 + 1);
val__8219 = G__8235;
n__8220 = G__8236;
continue;
}
} else
{return val__8219;
}
break;
}
});
var ci_reduce__8229 = (function (cicoll,f,val,idx){
var val__8223 = val;
var n__8224 = idx;

while(true){
if(cljs.core.truth_((n__8224 < cljs.core._count.call(null,cicoll))))
{{
var G__8237 = f.call(null,val__8223,cljs.core._nth.call(null,cicoll,n__8224));
var G__8238 = (n__8224 + 1);
val__8223 = G__8237;
n__8224 = G__8238;
continue;
}
} else
{return val__8223;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__8227.call(this,cicoll,f);
case  3 :
return ci_reduce__8228.call(this,cicoll,f,val);
case  4 :
return ci_reduce__8229.call(this,cicoll,f,val,idx);
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
var this__8252 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__8290 = null;
var G__8290__8291 = (function (_,f){
var this__8254 = this;
return cljs.core.ci_reduce.call(null,this__8254.a,f,(this__8254.a[this__8254.i]),(this__8254.i + 1));
});
var G__8290__8292 = (function (_,f,start){
var this__8256 = this;
return cljs.core.ci_reduce.call(null,this__8256.a,f,start,this__8256.i);
});
G__8290 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__8290__8291.call(this,_,f);
case  3 :
return G__8290__8292.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8290;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__8258 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__8260 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__8373 = null;
var G__8373__8374 = (function (coll,n){
var this__8262 = this;
var i__8271 = (n + this__8262.i);

if(cljs.core.truth_((i__8271 < this__8262.a.length)))
{return (this__8262.a[i__8271]);
} else
{return null;
}
});
var G__8373__8375 = (function (coll,n,not_found){
var this__8272 = this;
var i__8277 = (n + this__8272.i);

if(cljs.core.truth_((i__8277 < this__8272.a.length)))
{return (this__8272.a[i__8277]);
} else
{return not_found;
}
});
G__8373 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__8373__8374.call(this,coll,n);
case  3 :
return G__8373__8375.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8373;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__8278 = this;
return (this__8278.a.length - this__8278.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__8279 = this;
return (this__8279.a[this__8279.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__8280 = this;
if(cljs.core.truth_(((this__8280.i + 1) < this__8280.a.length)))
{return (new cljs.core.IndexedSeq(this__8280.a,(this__8280.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__8281 = this;
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
var G__8379 = null;
var G__8379__8380 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__8379__8381 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__8379 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__8379__8380.call(this,array,f);
case  3 :
return G__8379__8381.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8379;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__8386 = null;
var G__8386__8387 = (function (array,k){
return (array[k]);
});
var G__8386__8388 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__8386 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__8386__8387.call(this,array,k);
case  3 :
return G__8386__8388.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8386;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__8392 = null;
var G__8392__8393 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__8392__8394 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__8392 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__8392__8393.call(this,array,n);
case  3 :
return G__8392__8394.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__8392;
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
var temp__3698__auto____8412 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____8412))
{var s__8414 = temp__3698__auto____8412;

return cljs.core._first.call(null,s__8414);
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
var G__8492 = cljs.core.next.call(null,s);
s = G__8492;
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
var s__8495 = cljs.core.seq.call(null,x);
var n__8502 = 0;

while(true){
if(cljs.core.truth_(s__8495))
{{
var G__8514 = cljs.core.next.call(null,s__8495);
var G__8515 = (n__8502 + 1);
s__8495 = G__8514;
n__8502 = G__8515;
continue;
}
} else
{return n__8502;
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
var conj__8525 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__8526 = (function() { 
var G__8529__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__8533 = conj.call(null,coll,x);
var G__8534 = cljs.core.first.call(null,xs);
var G__8535 = cljs.core.next.call(null,xs);
coll = G__8533;
x = G__8534;
xs = G__8535;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__8529 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8529__delegate.call(this, coll, x, xs);
};
G__8529.cljs$lang$maxFixedArity = 2;
G__8529.cljs$lang$applyTo = (function (arglist__8538){
var coll = cljs.core.first(arglist__8538);
var x = cljs.core.first(cljs.core.next(arglist__8538));
var xs = cljs.core.rest(cljs.core.next(arglist__8538));
return G__8529__delegate.call(this, coll, x, xs);
});
return G__8529;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__8525.call(this,coll,x);
default:
return conj__8526.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__8526.cljs$lang$applyTo;
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
var nth__8549 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__8550 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__8549.call(this,coll,n);
case  3 :
return nth__8550.call(this,coll,n,not_found);
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
var get__8567 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__8557.call(this,o,k);
case  3 :
return get__8567.call(this,o,k,not_found);
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
var assoc__8643 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__8644 = (function() { 
var G__8646__delegate = function (coll,k,v,kvs){
while(true){
var ret__8598 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__8647 = ret__8598;
var G__8648 = cljs.core.first.call(null,kvs);
var G__8649 = cljs.core.second.call(null,kvs);
var G__8650 = cljs.core.nnext.call(null,kvs);
coll = G__8647;
k = G__8648;
v = G__8649;
kvs = G__8650;
continue;
}
} else
{return ret__8598;
}
break;
}
};
var G__8646 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__8646__delegate.call(this, coll, k, v, kvs);
};
G__8646.cljs$lang$maxFixedArity = 3;
G__8646.cljs$lang$applyTo = (function (arglist__8651){
var coll = cljs.core.first(arglist__8651);
var k = cljs.core.first(cljs.core.next(arglist__8651));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__8651)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__8651)));
return G__8646__delegate.call(this, coll, k, v, kvs);
});
return G__8646;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__8643.call(this,coll,k,v);
default:
return assoc__8644.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__8644.cljs$lang$applyTo;
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
var dissoc__8657 = (function (coll){
return coll;
});
var dissoc__8658 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__8659 = (function() { 
var G__8662__delegate = function (coll,k,ks){
while(true){
var ret__8653 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8663 = ret__8653;
var G__8664 = cljs.core.first.call(null,ks);
var G__8665 = cljs.core.next.call(null,ks);
coll = G__8663;
k = G__8664;
ks = G__8665;
continue;
}
} else
{return ret__8653;
}
break;
}
};
var G__8662 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8662__delegate.call(this, coll, k, ks);
};
G__8662.cljs$lang$maxFixedArity = 2;
G__8662.cljs$lang$applyTo = (function (arglist__8666){
var coll = cljs.core.first(arglist__8666);
var k = cljs.core.first(cljs.core.next(arglist__8666));
var ks = cljs.core.rest(cljs.core.next(arglist__8666));
return G__8662__delegate.call(this, coll, k, ks);
});
return G__8662;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__8657.call(this,coll);
case  2 :
return dissoc__8658.call(this,coll,k);
default:
return dissoc__8659.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__8659.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__445__auto____8685 = o;

if(cljs.core.truth_((function (){var and__3546__auto____8689 = x__445__auto____8685;

if(cljs.core.truth_(and__3546__auto____8689))
{var and__3546__auto____8691 = x__445__auto____8685.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____8691))
{return cljs.core.not.call(null,x__445__auto____8685.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____8691;
}
} else
{return and__3546__auto____8689;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____8685);
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
var disj__8710 = (function (coll){
return coll;
});
var disj__8711 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__8712 = (function() { 
var G__8714__delegate = function (coll,k,ks){
while(true){
var ret__8705 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__8715 = ret__8705;
var G__8717 = cljs.core.first.call(null,ks);
var G__8719 = cljs.core.next.call(null,ks);
coll = G__8715;
k = G__8717;
ks = G__8719;
continue;
}
} else
{return ret__8705;
}
break;
}
};
var G__8714 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__8714__delegate.call(this, coll, k, ks);
};
G__8714.cljs$lang$maxFixedArity = 2;
G__8714.cljs$lang$applyTo = (function (arglist__8721){
var coll = cljs.core.first(arglist__8721);
var k = cljs.core.first(cljs.core.next(arglist__8721));
var ks = cljs.core.rest(cljs.core.next(arglist__8721));
return G__8714__delegate.call(this, coll, k, ks);
});
return G__8714;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__8710.call(this,coll);
case  2 :
return disj__8711.call(this,coll,k);
default:
return disj__8712.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__8712.cljs$lang$applyTo;
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
{var x__445__auto____8737 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8738 = x__445__auto____8737;

if(cljs.core.truth_(and__3546__auto____8738))
{var and__3546__auto____8740 = x__445__auto____8737.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____8740))
{return cljs.core.not.call(null,x__445__auto____8737.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____8740;
}
} else
{return and__3546__auto____8738;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__445__auto____8737);
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
{var x__445__auto____8760 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8796 = x__445__auto____8760;

if(cljs.core.truth_(and__3546__auto____8796))
{var and__3546__auto____8803 = x__445__auto____8760.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____8803))
{return cljs.core.not.call(null,x__445__auto____8760.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____8803;
}
} else
{return and__3546__auto____8796;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__445__auto____8760);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__445__auto____8811 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8812 = x__445__auto____8811;

if(cljs.core.truth_(and__3546__auto____8812))
{var and__3546__auto____8817 = x__445__auto____8811.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____8817))
{return cljs.core.not.call(null,x__445__auto____8811.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____8817;
}
} else
{return and__3546__auto____8812;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__445__auto____8811);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__445__auto____8821 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8822 = x__445__auto____8821;

if(cljs.core.truth_(and__3546__auto____8822))
{var and__3546__auto____8823 = x__445__auto____8821.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____8823))
{return cljs.core.not.call(null,x__445__auto____8821.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____8823;
}
} else
{return and__3546__auto____8822;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__445__auto____8821);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__445__auto____8830 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8831 = x__445__auto____8830;

if(cljs.core.truth_(and__3546__auto____8831))
{var and__3546__auto____8832 = x__445__auto____8830.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____8832))
{return cljs.core.not.call(null,x__445__auto____8830.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____8832;
}
} else
{return and__3546__auto____8831;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__445__auto____8830);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__445__auto____8839 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8892 = x__445__auto____8839;

if(cljs.core.truth_(and__3546__auto____8892))
{var and__3546__auto____8894 = x__445__auto____8839.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____8894))
{return cljs.core.not.call(null,x__445__auto____8839.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____8894;
}
} else
{return and__3546__auto____8892;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__445__auto____8839);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__445__auto____8903 = x;

if(cljs.core.truth_((function (){var and__3546__auto____8904 = x__445__auto____8903;

if(cljs.core.truth_(and__3546__auto____8904))
{var and__3546__auto____8906 = x__445__auto____8903.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____8906))
{return cljs.core.not.call(null,x__445__auto____8903.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____8906;
}
} else
{return and__3546__auto____8904;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__445__auto____8903);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__8910 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__8910.push(key);
}));
return keys__8910;
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
{var x__445__auto____8936 = s;

if(cljs.core.truth_((function (){var and__3546__auto____8937 = x__445__auto____8936;

if(cljs.core.truth_(and__3546__auto____8937))
{var and__3546__auto____8938 = x__445__auto____8936.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____8938))
{return cljs.core.not.call(null,x__445__auto____8936.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____8938;
}
} else
{return and__3546__auto____8937;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__445__auto____8936);
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
var and__3546__auto____8950 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8950))
{return cljs.core.not.call(null,(function (){var or__3548__auto____8953 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3548__auto____8953))
{return or__3548__auto____8953;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3546__auto____8950;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____8955 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8955))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3546__auto____8955;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____8958 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____8958))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3546__auto____8958;
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
var and__3546__auto____8961 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____8961))
{return (n == n.toFixed());
} else
{return and__3546__auto____8961;
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
if(cljs.core.truth_((function (){var and__3546__auto____8988 = coll;

if(cljs.core.truth_(and__3546__auto____8988))
{var and__3546__auto____8990 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____8990))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____8990;
}
} else
{return and__3546__auto____8988;
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
var distinct_QMARK___9040 = (function (x){
return true;
});
var distinct_QMARK___9041 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___9042 = (function() { 
var G__9044__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__9031 = cljs.core.set([y,x]);
var xs__9032 = more;

while(true){
var x__9033 = cljs.core.first.call(null,xs__9032);
var etc__9037 = cljs.core.next.call(null,xs__9032);

if(cljs.core.truth_(xs__9032))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__9031,x__9033)))
{return false;
} else
{{
var G__9045 = cljs.core.conj.call(null,s__9031,x__9033);
var G__9046 = etc__9037;
s__9031 = G__9045;
xs__9032 = G__9046;
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
var G__9044 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9044__delegate.call(this, x, y, more);
};
G__9044.cljs$lang$maxFixedArity = 2;
G__9044.cljs$lang$applyTo = (function (arglist__9051){
var x = cljs.core.first(arglist__9051);
var y = cljs.core.first(cljs.core.next(arglist__9051));
var more = cljs.core.rest(cljs.core.next(arglist__9051));
return G__9044__delegate.call(this, x, y, more);
});
return G__9044;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___9040.call(this,x);
case  2 :
return distinct_QMARK___9041.call(this,x,y);
default:
return distinct_QMARK___9042.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___9042.cljs$lang$applyTo;
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
var r__9057 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__9057)))
{return r__9057;
} else
{if(cljs.core.truth_(r__9057))
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
var sort__9143 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__9144 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__9063 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__9063,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__9063);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__9143.call(this,comp);
case  2 :
return sort__9144.call(this,comp,coll);
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
var sort_by__9159 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__9160 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__9159.call(this,keyfn,comp);
case  3 :
return sort_by__9160.call(this,keyfn,comp,coll);
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
var reduce__9171 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__9172 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__9171.call(this,f,val);
case  3 :
return reduce__9172.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__9179 = (function (f,coll){
var temp__3695__auto____9175 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____9175))
{var s__9176 = temp__3695__auto____9175;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__9176),cljs.core.next.call(null,s__9176));
} else
{return f.call(null);
}
});
var seq_reduce__9180 = (function (f,val,coll){
var val__9177 = val;
var coll__9178 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__9178))
{{
var G__9182 = f.call(null,val__9177,cljs.core.first.call(null,coll__9178));
var G__9183 = cljs.core.next.call(null,coll__9178);
val__9177 = G__9182;
coll__9178 = G__9183;
continue;
}
} else
{return val__9177;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__9179.call(this,f,val);
case  3 :
return seq_reduce__9180.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__9184 = null;
var G__9184__9185 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__9184__9186 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__9184 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__9184__9185.call(this,coll,f);
case  3 :
return G__9184__9186.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9184;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___9197 = (function (){
return 0;
});
var _PLUS___9198 = (function (x){
return x;
});
var _PLUS___9199 = (function (x,y){
return (x + y);
});
var _PLUS___9200 = (function() { 
var G__9202__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__9202 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9202__delegate.call(this, x, y, more);
};
G__9202.cljs$lang$maxFixedArity = 2;
G__9202.cljs$lang$applyTo = (function (arglist__9203){
var x = cljs.core.first(arglist__9203);
var y = cljs.core.first(cljs.core.next(arglist__9203));
var more = cljs.core.rest(cljs.core.next(arglist__9203));
return G__9202__delegate.call(this, x, y, more);
});
return G__9202;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___9197.call(this);
case  1 :
return _PLUS___9198.call(this,x);
case  2 :
return _PLUS___9199.call(this,x,y);
default:
return _PLUS___9200.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___9200.cljs$lang$applyTo;
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
var ___9209 = (function (x){
return (- x);
});
var ___9210 = (function (x,y){
return (x - y);
});
var ___9211 = (function() { 
var G__9214__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__9214 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9214__delegate.call(this, x, y, more);
};
G__9214.cljs$lang$maxFixedArity = 2;
G__9214.cljs$lang$applyTo = (function (arglist__9215){
var x = cljs.core.first(arglist__9215);
var y = cljs.core.first(cljs.core.next(arglist__9215));
var more = cljs.core.rest(cljs.core.next(arglist__9215));
return G__9214__delegate.call(this, x, y, more);
});
return G__9214;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___9209.call(this,x);
case  2 :
return ___9210.call(this,x,y);
default:
return ___9211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___9211.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___9220 = (function (){
return 1;
});
var _STAR___9221 = (function (x){
return x;
});
var _STAR___9222 = (function (x,y){
return (x * y);
});
var _STAR___9223 = (function() { 
var G__9226__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__9226 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9226__delegate.call(this, x, y, more);
};
G__9226.cljs$lang$maxFixedArity = 2;
G__9226.cljs$lang$applyTo = (function (arglist__9228){
var x = cljs.core.first(arglist__9228);
var y = cljs.core.first(cljs.core.next(arglist__9228));
var more = cljs.core.rest(cljs.core.next(arglist__9228));
return G__9226__delegate.call(this, x, y, more);
});
return G__9226;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___9220.call(this);
case  1 :
return _STAR___9221.call(this,x);
case  2 :
return _STAR___9222.call(this,x,y);
default:
return _STAR___9223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___9223.cljs$lang$applyTo;
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
var _SLASH___9229 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___9230 = (function (x,y){
return _SLASH_.call(null,x,y);
});
var _SLASH___9231 = (function() { 
var G__9233__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__9233 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9233__delegate.call(this, x, y, more);
};
G__9233.cljs$lang$maxFixedArity = 2;
G__9233.cljs$lang$applyTo = (function (arglist__9234){
var x = cljs.core.first(arglist__9234);
var y = cljs.core.first(cljs.core.next(arglist__9234));
var more = cljs.core.rest(cljs.core.next(arglist__9234));
return G__9233__delegate.call(this, x, y, more);
});
return G__9233;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___9229.call(this,x);
case  2 :
return _SLASH___9230.call(this,x,y);
default:
return _SLASH___9231.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___9231.cljs$lang$applyTo;
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
var _LT___9237 = (function (x){
return true;
});
var _LT___9238 = (function (x,y){
return (x < y);
});
var _LT___9239 = (function() { 
var G__9241__delegate = function (x,y,more){
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
var G__9241 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9241__delegate.call(this, x, y, more);
};
G__9241.cljs$lang$maxFixedArity = 2;
G__9241.cljs$lang$applyTo = (function (arglist__9310){
var x = cljs.core.first(arglist__9310);
var y = cljs.core.first(cljs.core.next(arglist__9310));
var more = cljs.core.rest(cljs.core.next(arglist__9310));
return G__9241__delegate.call(this, x, y, more);
});
return G__9241;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___9237.call(this,x);
case  2 :
return _LT___9238.call(this,x,y);
default:
return _LT___9239.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___9239.cljs$lang$applyTo;
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
var _LT__EQ___9313 = (function (x){
return true;
});
var _LT__EQ___9316 = (function (x,y){
return (x <= y);
});
var _LT__EQ___9318 = (function() { 
var G__9320__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9322 = y;
var G__9323 = cljs.core.first.call(null,more);
var G__9324 = cljs.core.next.call(null,more);
x = G__9322;
y = G__9323;
more = G__9324;
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
var G__9320 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9320__delegate.call(this, x, y, more);
};
G__9320.cljs$lang$maxFixedArity = 2;
G__9320.cljs$lang$applyTo = (function (arglist__9330){
var x = cljs.core.first(arglist__9330);
var y = cljs.core.first(cljs.core.next(arglist__9330));
var more = cljs.core.rest(cljs.core.next(arglist__9330));
return G__9320__delegate.call(this, x, y, more);
});
return G__9320;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___9313.call(this,x);
case  2 :
return _LT__EQ___9316.call(this,x,y);
default:
return _LT__EQ___9318.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___9318.cljs$lang$applyTo;
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
var G__9345__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9349 = y;
var G__9350 = cljs.core.first.call(null,more);
var G__9351 = cljs.core.next.call(null,more);
x = G__9349;
y = G__9350;
more = G__9351;
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
var G__9345 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9345__delegate.call(this, x, y, more);
};
G__9345.cljs$lang$maxFixedArity = 2;
G__9345.cljs$lang$applyTo = (function (arglist__9353){
var x = cljs.core.first(arglist__9353);
var y = cljs.core.first(cljs.core.next(arglist__9353));
var more = cljs.core.rest(cljs.core.next(arglist__9353));
return G__9345__delegate.call(this, x, y, more);
});
return G__9345;
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
var _GT__EQ___9354 = (function (x){
return true;
});
var _GT__EQ___9356 = (function (x,y){
return (x >= y);
});
var _GT__EQ___9358 = (function() { 
var G__9362__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9364 = y;
var G__9365 = cljs.core.first.call(null,more);
var G__9366 = cljs.core.next.call(null,more);
x = G__9364;
y = G__9365;
more = G__9366;
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
G__9362.cljs$lang$applyTo = (function (arglist__9370){
var x = cljs.core.first(arglist__9370);
var y = cljs.core.first(cljs.core.next(arglist__9370));
var more = cljs.core.rest(cljs.core.next(arglist__9370));
return G__9362__delegate.call(this, x, y, more);
});
return G__9362;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___9354.call(this,x);
case  2 :
return _GT__EQ___9356.call(this,x,y);
default:
return _GT__EQ___9358.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___9358.cljs$lang$applyTo;
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
var max__9381 = (function (x){
return x;
});
var max__9382 = (function (x,y){
return ((x > y) ? x : y);
});
var max__9383 = (function() { 
var G__9391__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
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
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__9381.call(this,x);
case  2 :
return max__9382.call(this,x,y);
default:
return max__9383.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__9383.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__9400 = (function (x){
return x;
});
var min__9401 = (function (x,y){
return ((x < y) ? x : y);
});
var min__9402 = (function() { 
var G__9405__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__9405 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9405__delegate.call(this, x, y, more);
};
G__9405.cljs$lang$maxFixedArity = 2;
G__9405.cljs$lang$applyTo = (function (arglist__9409){
var x = cljs.core.first(arglist__9409);
var y = cljs.core.first(cljs.core.next(arglist__9409));
var more = cljs.core.rest(cljs.core.next(arglist__9409));
return G__9405__delegate.call(this, x, y, more);
});
return G__9405;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__9400.call(this,x);
case  2 :
return min__9401.call(this,x,y);
default:
return min__9402.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__9402.cljs$lang$applyTo;
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
var rem__9420 = (n % d);

return cljs.core.fix.call(null,((n - rem__9420) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__9489 = cljs.core.quot.call(null,n,d);

return (n - (d * q__9489));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__9490 = (function (){
return Math.random.call(null);
});
var rand__9491 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__9490.call(this);
case  1 :
return rand__9491.call(this,n);
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
var _EQ__EQ___9527 = (function (x){
return true;
});
var _EQ__EQ___9528 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___9529 = (function() { 
var G__9531__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__9532 = y;
var G__9533 = cljs.core.first.call(null,more);
var G__9534 = cljs.core.next.call(null,more);
x = G__9532;
y = G__9533;
more = G__9534;
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
var G__9531 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__9531__delegate.call(this, x, y, more);
};
G__9531.cljs$lang$maxFixedArity = 2;
G__9531.cljs$lang$applyTo = (function (arglist__9536){
var x = cljs.core.first(arglist__9536);
var y = cljs.core.first(cljs.core.next(arglist__9536));
var more = cljs.core.rest(cljs.core.next(arglist__9536));
return G__9531__delegate.call(this, x, y, more);
});
return G__9531;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___9527.call(this,x);
case  2 :
return _EQ__EQ___9528.call(this,x,y);
default:
return _EQ__EQ___9529.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___9529.cljs$lang$applyTo;
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
var n__9551 = n;
var xs__9552 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____9554 = xs__9552;

if(cljs.core.truth_(and__3546__auto____9554))
{return (n__9551 > 0);
} else
{return and__3546__auto____9554;
}
})()))
{{
var G__9558 = (n__9551 - 1);
var G__9559 = cljs.core.next.call(null,xs__9552);
n__9551 = G__9558;
xs__9552 = G__9559;
continue;
}
} else
{return xs__9552;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__9564 = null;
var G__9564__9565 = (function (coll,n){
var temp__3695__auto____9560 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9560))
{var xs__9561 = temp__3695__auto____9560;

return cljs.core.first.call(null,xs__9561);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__9564__9566 = (function (coll,n,not_found){
var temp__3695__auto____9562 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____9562))
{var xs__9563 = temp__3695__auto____9562;

return cljs.core.first.call(null,xs__9563);
} else
{return not_found;
}
});
G__9564 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__9564__9565.call(this,coll,n);
case  3 :
return G__9564__9566.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__9564;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___9568 = (function (){
return "";
});
var str_STAR___9569 = (function (x){
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
var str_STAR___9570 = (function() { 
var G__9572__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__9573 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__9574 = cljs.core.next.call(null,more);
sb = G__9573;
more = G__9574;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__9572 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9572__delegate.call(this, x, ys);
};
G__9572.cljs$lang$maxFixedArity = 1;
G__9572.cljs$lang$applyTo = (function (arglist__9575){
var x = cljs.core.first(arglist__9575);
var ys = cljs.core.rest(arglist__9575);
return G__9572__delegate.call(this, x, ys);
});
return G__9572;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___9568.call(this);
case  1 :
return str_STAR___9569.call(this,x);
default:
return str_STAR___9570.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___9570.cljs$lang$applyTo;
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
var str__9576 = (function (){
return "";
});
var str__9577 = (function (x){
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
var str__9578 = (function() { 
var G__9580__delegate = function (x,ys){
return cljs.core.apply.call(null,cljs.core.str_STAR_,x,ys);
};
var G__9580 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__9580__delegate.call(this, x, ys);
};
G__9580.cljs$lang$maxFixedArity = 1;
G__9580.cljs$lang$applyTo = (function (arglist__9585){
var x = cljs.core.first(arglist__9585);
var ys = cljs.core.rest(arglist__9585);
return G__9580__delegate.call(this, x, ys);
});
return G__9580;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__9576.call(this);
case  1 :
return str__9577.call(this,x);
default:
return str__9578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__9578.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__9591 = (function (s,start){
return s.substring(start);
});
var subs__9592 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__9591.call(this,s,start);
case  3 :
return subs__9592.call(this,s,start,end);
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
var keyword__9609 = (function (name){
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
var keyword__9611 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__9609.call(this,ns);
case  2 :
return keyword__9611.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__9615 = cljs.core.seq.call(null,x);
var ys__9617 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__9615)))
{return cljs.core.nil_QMARK_.call(null,ys__9617);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__9617)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__9615),cljs.core.first.call(null,ys__9617))))
{{
var G__9627 = cljs.core.next.call(null,xs__9615);
var G__9628 = cljs.core.next.call(null,ys__9617);
xs__9615 = G__9627;
ys__9617 = G__9628;
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
return cljs.core.reduce.call(null,(function (p1__9629_SHARP_,p2__9630_SHARP_){
return cljs.core.hash_combine.call(null,p1__9629_SHARP_,cljs.core.hash.call(null,p2__9630_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__9639__9640 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__9639__9640))
{var G__9643__9645 = cljs.core.first.call(null,G__9639__9640);
var vec__9644__9646 = G__9643__9645;
var key_name__9647 = cljs.core.nth.call(null,vec__9644__9646,0,null);
var f__9650 = cljs.core.nth.call(null,vec__9644__9646,1,null);
var G__9639__9653 = G__9639__9640;

var G__9643__9654 = G__9643__9645;
var G__9639__9655 = G__9639__9653;

while(true){
var vec__9656__9657 = G__9643__9654;
var key_name__9658 = cljs.core.nth.call(null,vec__9656__9657,0,null);
var f__9659 = cljs.core.nth.call(null,vec__9656__9657,1,null);
var G__9639__9660 = G__9639__9655;

var str_name__9777 = cljs.core.name.call(null,key_name__9658);

obj[str_name__9777] = f__9659;
var temp__3698__auto____9778 = cljs.core.next.call(null,G__9639__9660);

if(cljs.core.truth_(temp__3698__auto____9778))
{var G__9639__9779 = temp__3698__auto____9778;

{
var G__9860 = cljs.core.first.call(null,G__9639__9779);
var G__9861 = G__9639__9779;
G__9643__9654 = G__9860;
G__9639__9655 = G__9861;
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
var this__9901 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9903 = this;
return (new cljs.core.List(this__9903.meta,o,coll,(this__9903.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9905 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9907 = this;
return this__9907.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9908 = this;
return this__9908.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9909 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__9910 = this;
return this__9910.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__9911 = this;
return this__9911.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__9912 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__9913 = this;
return (new cljs.core.List(meta,this__9913.first,this__9913.rest,this__9913.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__9927 = this;
return this__9927.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__9932 = this;
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
var this__9963 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__9964 = this;
return (new cljs.core.List(this__9964.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__9966 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__9997 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__9998 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__9999 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10001 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10002 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10003 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10004 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10009 = this;
return this__10009.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10018 = this;
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
list.cljs$lang$applyTo = (function (arglist__10027){
var items = cljs.core.seq( arglist__10027 );;
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
var this__10031 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10032 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10033 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10034 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10034.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10119 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10121 = this;
return this__10121.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10122 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__10122.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__10122.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10123 = this;
return this__10123.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10124 = this;
return (new cljs.core.Cons(meta,this__10124.first,this__10124.rest));
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
var G__10155 = null;
var G__10155__10156 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__10155__10157 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__10155 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__10155__10156.call(this,string,f);
case  3 :
return G__10155__10157.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10155;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__10197 = null;
var G__10197__10198 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__10197__10199 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__10197 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__10197__10198.call(this,string,k);
case  3 :
return G__10197__10199.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10197;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__10232 = null;
var G__10232__10233 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__10232__10234 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__10232 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__10232__10233.call(this,string,n);
case  3 :
return G__10232__10234.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10232;
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
var G__10330 = null;
var G__10330__10331 = (function (this$,coll){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString());
});
var G__10330__10332 = (function (this$,coll,not_found){
this$ = this;
return cljs.core.get.call(null,coll,this$.toString(),not_found);
});
G__10330 = function(this$,coll,not_found){
switch(arguments.length){
case  2 :
return G__10330__10331.call(this,this$,coll);
case  3 :
return G__10330__10332.call(this,this$,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__10330;
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
var x__10355 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__10355;
} else
{lazy_seq.x = x__10355.call(null);
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
var this__10368 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__10371 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__10374 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__10375 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__10375.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__10376 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__10377 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__10378 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__10380 = this;
return this__10380.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__10382 = this;
return (new cljs.core.LazySeq(meta,this__10382.realized,this__10382.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__10466 = cljs.core.array.call(null);

var s__10467 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__10467)))
{ary__10466.push(cljs.core.first.call(null,s__10467));
{
var G__10473 = cljs.core.next.call(null,s__10467);
s__10467 = G__10473;
continue;
}
} else
{return ary__10466;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__10475 = s;
var i__10476 = n;
var sum__10477 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____10479 = (i__10476 > 0);

if(cljs.core.truth_(and__3546__auto____10479))
{return cljs.core.seq.call(null,s__10475);
} else
{return and__3546__auto____10479;
}
})()))
{{
var G__10482 = cljs.core.next.call(null,s__10475);
var G__10483 = (i__10476 - 1);
var G__10484 = (sum__10477 + 1);
s__10475 = G__10482;
i__10476 = G__10483;
sum__10477 = G__10484;
continue;
}
} else
{return sum__10477;
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
var concat__10507 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__10508 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__10509 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__10497 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__10497))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__10497),concat.call(null,cljs.core.rest.call(null,s__10497),y));
} else
{return y;
}
})));
});
var concat__10510 = (function() { 
var G__10527__delegate = function (x,y,zs){
var cat__10503 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__10500 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__10500))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__10500),cat.call(null,cljs.core.rest.call(null,xys__10500),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__10503.call(null,concat.call(null,x,y),zs);
};
var G__10527 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10527__delegate.call(this, x, y, zs);
};
G__10527.cljs$lang$maxFixedArity = 2;
G__10527.cljs$lang$applyTo = (function (arglist__10535){
var x = cljs.core.first(arglist__10535);
var y = cljs.core.first(cljs.core.next(arglist__10535));
var zs = cljs.core.rest(cljs.core.next(arglist__10535));
return G__10527__delegate.call(this, x, y, zs);
});
return G__10527;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__10507.call(this);
case  1 :
return concat__10508.call(this,x);
case  2 :
return concat__10509.call(this,x,y);
default:
return concat__10510.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__10510.cljs$lang$applyTo;
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
var list_STAR___10542 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___10543 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___10544 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___10545 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___10546 = (function() { 
var G__10561__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__10561 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10561__delegate.call(this, a, b, c, d, more);
};
G__10561.cljs$lang$maxFixedArity = 4;
G__10561.cljs$lang$applyTo = (function (arglist__10563){
var a = cljs.core.first(arglist__10563);
var b = cljs.core.first(cljs.core.next(arglist__10563));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10563)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10563))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10563))));
return G__10561__delegate.call(this, a, b, c, d, more);
});
return G__10561;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___10542.call(this,a);
case  2 :
return list_STAR___10543.call(this,a,b);
case  3 :
return list_STAR___10544.call(this,a,b,c);
case  4 :
return list_STAR___10545.call(this,a,b,c,d);
default:
return list_STAR___10546.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___10546.cljs$lang$applyTo;
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
var apply__10585 = (function (f,args){
var fixed_arity__10565 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__10565 + 1)) <= fixed_arity__10565)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__10586 = (function (f,x,args){
var arglist__10576 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__10577 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10576,fixed_arity__10577) <= fixed_arity__10577)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10576));
} else
{return f.cljs$lang$applyTo(arglist__10576);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10576));
}
});
var apply__10587 = (function (f,x,y,args){
var arglist__10578 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__10579 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10578,fixed_arity__10579) <= fixed_arity__10579)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10578));
} else
{return f.cljs$lang$applyTo(arglist__10578);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10578));
}
});
var apply__10588 = (function (f,x,y,z,args){
var arglist__10580 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__10582 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10580,fixed_arity__10582) <= fixed_arity__10582)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10580));
} else
{return f.cljs$lang$applyTo(arglist__10580);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10580));
}
});
var apply__10589 = (function() { 
var G__10598__delegate = function (f,a,b,c,d,args){
var arglist__10583 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__10584 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__10583,fixed_arity__10584) <= fixed_arity__10584)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__10583));
} else
{return f.cljs$lang$applyTo(arglist__10583);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__10583));
}
};
var G__10598 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__10598__delegate.call(this, f, a, b, c, d, args);
};
G__10598.cljs$lang$maxFixedArity = 5;
G__10598.cljs$lang$applyTo = (function (arglist__10599){
var f = cljs.core.first(arglist__10599);
var a = cljs.core.first(cljs.core.next(arglist__10599));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10599)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10599))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10599)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10599)))));
return G__10598__delegate.call(this, f, a, b, c, d, args);
});
return G__10598;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__10585.call(this,f,a);
case  3 :
return apply__10586.call(this,f,a,b);
case  4 :
return apply__10587.call(this,f,a,b,c);
case  5 :
return apply__10588.call(this,f,a,b,c,d);
default:
return apply__10589.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__10589.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__10602){
var obj = cljs.core.first(arglist__10602);
var f = cljs.core.first(cljs.core.next(arglist__10602));
var args = cljs.core.rest(cljs.core.next(arglist__10602));
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
var not_EQ___10603 = (function (x){
return false;
});
var not_EQ___10604 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___10605 = (function() { 
var G__10607__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__10607 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10607__delegate.call(this, x, y, more);
};
G__10607.cljs$lang$maxFixedArity = 2;
G__10607.cljs$lang$applyTo = (function (arglist__10609){
var x = cljs.core.first(arglist__10609);
var y = cljs.core.first(cljs.core.next(arglist__10609));
var more = cljs.core.rest(cljs.core.next(arglist__10609));
return G__10607__delegate.call(this, x, y, more);
});
return G__10607;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___10603.call(this,x);
case  2 :
return not_EQ___10604.call(this,x,y);
default:
return not_EQ___10605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___10605.cljs$lang$applyTo;
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
var G__10618 = pred;
var G__10619 = cljs.core.next.call(null,coll);
pred = G__10618;
coll = G__10619;
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
{var or__3548__auto____10626 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____10626))
{return or__3548__auto____10626;
} else
{{
var G__10627 = pred;
var G__10628 = cljs.core.next.call(null,coll);
pred = G__10627;
coll = G__10628;
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
var G__10638 = null;
var G__10638__10639 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__10638__10640 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__10638__10641 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__10638__10642 = (function() { 
var G__10645__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__10645 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__10645__delegate.call(this, x, y, zs);
};
G__10645.cljs$lang$maxFixedArity = 2;
G__10645.cljs$lang$applyTo = (function (arglist__10649){
var x = cljs.core.first(arglist__10649);
var y = cljs.core.first(cljs.core.next(arglist__10649));
var zs = cljs.core.rest(cljs.core.next(arglist__10649));
return G__10645__delegate.call(this, x, y, zs);
});
return G__10645;
})()
;
G__10638 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__10638__10639.call(this);
case  1 :
return G__10638__10640.call(this,x);
case  2 :
return G__10638__10641.call(this,x,y);
default:
return G__10638__10642.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10638.cljs$lang$maxFixedArity = 2;
G__10638.cljs$lang$applyTo = G__10638__10642.cljs$lang$applyTo;
return G__10638;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__10658__delegate = function (args){
return x;
};
var G__10658 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10658__delegate.call(this, args);
};
G__10658.cljs$lang$maxFixedArity = 0;
G__10658.cljs$lang$applyTo = (function (arglist__10660){
var args = cljs.core.seq( arglist__10660 );;
return G__10658__delegate.call(this, args);
});
return G__10658;
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
var comp__10715 = (function (){
return cljs.core.identity;
});
var comp__10716 = (function (f){
return f;
});
var comp__10717 = (function (f,g){
return (function() {
var G__10723 = null;
var G__10723__10724 = (function (){
return f.call(null,g.call(null));
});
var G__10723__10725 = (function (x){
return f.call(null,g.call(null,x));
});
var G__10723__10726 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__10723__10727 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__10723__10728 = (function() { 
var G__10735__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__10735 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10735__delegate.call(this, x, y, z, args);
};
G__10735.cljs$lang$maxFixedArity = 3;
G__10735.cljs$lang$applyTo = (function (arglist__10744){
var x = cljs.core.first(arglist__10744);
var y = cljs.core.first(cljs.core.next(arglist__10744));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10744)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10744)));
return G__10735__delegate.call(this, x, y, z, args);
});
return G__10735;
})()
;
G__10723 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10723__10724.call(this);
case  1 :
return G__10723__10725.call(this,x);
case  2 :
return G__10723__10726.call(this,x,y);
case  3 :
return G__10723__10727.call(this,x,y,z);
default:
return G__10723__10728.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10723.cljs$lang$maxFixedArity = 3;
G__10723.cljs$lang$applyTo = G__10723__10728.cljs$lang$applyTo;
return G__10723;
})()
});
var comp__10718 = (function (f,g,h){
return (function() {
var G__10776 = null;
var G__10776__10777 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__10776__10778 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__10776__10779 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__10776__10780 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__10776__10781 = (function() { 
var G__10784__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__10784 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10784__delegate.call(this, x, y, z, args);
};
G__10784.cljs$lang$maxFixedArity = 3;
G__10784.cljs$lang$applyTo = (function (arglist__10787){
var x = cljs.core.first(arglist__10787);
var y = cljs.core.first(cljs.core.next(arglist__10787));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10787)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10787)));
return G__10784__delegate.call(this, x, y, z, args);
});
return G__10784;
})()
;
G__10776 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__10776__10777.call(this);
case  1 :
return G__10776__10778.call(this,x);
case  2 :
return G__10776__10779.call(this,x,y);
case  3 :
return G__10776__10780.call(this,x,y,z);
default:
return G__10776__10781.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10776.cljs$lang$maxFixedArity = 3;
G__10776.cljs$lang$applyTo = G__10776__10781.cljs$lang$applyTo;
return G__10776;
})()
});
var comp__10719 = (function() { 
var G__10790__delegate = function (f1,f2,f3,fs){
var fs__10684 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__10792__delegate = function (args){
var ret__10694 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__10684),args);
var fs__10695 = cljs.core.next.call(null,fs__10684);

while(true){
if(cljs.core.truth_(fs__10695))
{{
var G__10795 = cljs.core.first.call(null,fs__10695).call(null,ret__10694);
var G__10796 = cljs.core.next.call(null,fs__10695);
ret__10694 = G__10795;
fs__10695 = G__10796;
continue;
}
} else
{return ret__10694;
}
break;
}
};
var G__10792 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10792__delegate.call(this, args);
};
G__10792.cljs$lang$maxFixedArity = 0;
G__10792.cljs$lang$applyTo = (function (arglist__10802){
var args = cljs.core.seq( arglist__10802 );;
return G__10792__delegate.call(this, args);
});
return G__10792;
})()
;
};
var G__10790 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10790__delegate.call(this, f1, f2, f3, fs);
};
G__10790.cljs$lang$maxFixedArity = 3;
G__10790.cljs$lang$applyTo = (function (arglist__10803){
var f1 = cljs.core.first(arglist__10803);
var f2 = cljs.core.first(cljs.core.next(arglist__10803));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10803)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10803)));
return G__10790__delegate.call(this, f1, f2, f3, fs);
});
return G__10790;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__10715.call(this);
case  1 :
return comp__10716.call(this,f1);
case  2 :
return comp__10717.call(this,f1,f2);
case  3 :
return comp__10718.call(this,f1,f2,f3);
default:
return comp__10719.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__10719.cljs$lang$applyTo;
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
var partial__10829 = (function (f,arg1){
return (function() { 
var G__10834__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__10834 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10834__delegate.call(this, args);
};
G__10834.cljs$lang$maxFixedArity = 0;
G__10834.cljs$lang$applyTo = (function (arglist__10837){
var args = cljs.core.seq( arglist__10837 );;
return G__10834__delegate.call(this, args);
});
return G__10834;
})()
;
});
var partial__10830 = (function (f,arg1,arg2){
return (function() { 
var G__10838__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__10838 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10838__delegate.call(this, args);
};
G__10838.cljs$lang$maxFixedArity = 0;
G__10838.cljs$lang$applyTo = (function (arglist__10842){
var args = cljs.core.seq( arglist__10842 );;
return G__10838__delegate.call(this, args);
});
return G__10838;
})()
;
});
var partial__10831 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__10844__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__10844 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10844__delegate.call(this, args);
};
G__10844.cljs$lang$maxFixedArity = 0;
G__10844.cljs$lang$applyTo = (function (arglist__10846){
var args = cljs.core.seq( arglist__10846 );;
return G__10844__delegate.call(this, args);
});
return G__10844;
})()
;
});
var partial__10832 = (function() { 
var G__10848__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__10850__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__10850 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__10850__delegate.call(this, args);
};
G__10850.cljs$lang$maxFixedArity = 0;
G__10850.cljs$lang$applyTo = (function (arglist__10851){
var args = cljs.core.seq( arglist__10851 );;
return G__10850__delegate.call(this, args);
});
return G__10850;
})()
;
};
var G__10848 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__10848__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__10848.cljs$lang$maxFixedArity = 4;
G__10848.cljs$lang$applyTo = (function (arglist__10853){
var f = cljs.core.first(arglist__10853);
var arg1 = cljs.core.first(cljs.core.next(arglist__10853));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10853)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10853))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__10853))));
return G__10848__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__10848;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__10829.call(this,f,arg1);
case  3 :
return partial__10830.call(this,f,arg1,arg2);
case  4 :
return partial__10831.call(this,f,arg1,arg2,arg3);
default:
return partial__10832.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__10832.cljs$lang$applyTo;
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
var fnil__10878 = (function (f,x){
return (function() {
var G__10890 = null;
var G__10890__10891 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__10890__10892 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__10890__10893 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__10890__10894 = (function() { 
var G__10903__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__10903 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10903__delegate.call(this, a, b, c, ds);
};
G__10903.cljs$lang$maxFixedArity = 3;
G__10903.cljs$lang$applyTo = (function (arglist__10904){
var a = cljs.core.first(arglist__10904);
var b = cljs.core.first(cljs.core.next(arglist__10904));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10904)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10904)));
return G__10903__delegate.call(this, a, b, c, ds);
});
return G__10903;
})()
;
G__10890 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__10890__10891.call(this,a);
case  2 :
return G__10890__10892.call(this,a,b);
case  3 :
return G__10890__10893.call(this,a,b,c);
default:
return G__10890__10894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10890.cljs$lang$maxFixedArity = 3;
G__10890.cljs$lang$applyTo = G__10890__10894.cljs$lang$applyTo;
return G__10890;
})()
});
var fnil__10879 = (function (f,x,y){
return (function() {
var G__10905 = null;
var G__10905__10907 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10905__10908 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__10905__10909 = (function() { 
var G__10911__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__10911 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10911__delegate.call(this, a, b, c, ds);
};
G__10911.cljs$lang$maxFixedArity = 3;
G__10911.cljs$lang$applyTo = (function (arglist__10912){
var a = cljs.core.first(arglist__10912);
var b = cljs.core.first(cljs.core.next(arglist__10912));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10912)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10912)));
return G__10911__delegate.call(this, a, b, c, ds);
});
return G__10911;
})()
;
G__10905 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10905__10907.call(this,a,b);
case  3 :
return G__10905__10908.call(this,a,b,c);
default:
return G__10905__10909.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10905.cljs$lang$maxFixedArity = 3;
G__10905.cljs$lang$applyTo = G__10905__10909.cljs$lang$applyTo;
return G__10905;
})()
});
var fnil__10881 = (function (f,x,y,z){
return (function() {
var G__10914 = null;
var G__10914__10915 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__10914__10916 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__10914__10917 = (function() { 
var G__10920__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__10920 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__10920__delegate.call(this, a, b, c, ds);
};
G__10920.cljs$lang$maxFixedArity = 3;
G__10920.cljs$lang$applyTo = (function (arglist__10922){
var a = cljs.core.first(arglist__10922);
var b = cljs.core.first(cljs.core.next(arglist__10922));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__10922)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__10922)));
return G__10920__delegate.call(this, a, b, c, ds);
});
return G__10920;
})()
;
G__10914 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__10914__10915.call(this,a,b);
case  3 :
return G__10914__10916.call(this,a,b,c);
default:
return G__10914__10917.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__10914.cljs$lang$maxFixedArity = 3;
G__10914.cljs$lang$applyTo = G__10914__10917.cljs$lang$applyTo;
return G__10914;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__10878.call(this,f,x);
case  3 :
return fnil__10879.call(this,f,x,y);
case  4 :
return fnil__10881.call(this,f,x,y,z);
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
var mapi__10933 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10930 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10930))
{var s__10931 = temp__3698__auto____10930;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__10931)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__10931)));
} else
{return null;
}
})));
});

return mapi__10933.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____10937 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____10937))
{var s__10939 = temp__3698__auto____10937;

var x__10941 = f.call(null,cljs.core.first.call(null,s__10939));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__10941)))
{return keep.call(null,f,cljs.core.rest.call(null,s__10939));
} else
{return cljs.core.cons.call(null,x__10941,keep.call(null,f,cljs.core.rest.call(null,s__10939)));
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
var keepi__11025 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11014 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11014))
{var s__11015 = temp__3698__auto____11014;

var x__11017 = f.call(null,idx,cljs.core.first.call(null,s__11015));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__11017)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11015));
} else
{return cljs.core.cons.call(null,x__11017,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__11015)));
}
} else
{return null;
}
})));
});

return keepi__11025.call(null,0,coll);
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
var every_pred__11180 = (function (p){
return (function() {
var ep1 = null;
var ep1__11186 = (function (){
return true;
});
var ep1__11187 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__11188 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11065 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11065))
{return p.call(null,y);
} else
{return and__3546__auto____11065;
}
})());
});
var ep1__11189 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11068 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____11068))
{var and__3546__auto____11071 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____11071))
{return p.call(null,z);
} else
{return and__3546__auto____11071;
}
} else
{return and__3546__auto____11068;
}
})());
});
var ep1__11190 = (function() { 
var G__11209__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11073 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11073))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____11073;
}
})());
};
var G__11209 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11209__delegate.call(this, x, y, z, args);
};
G__11209.cljs$lang$maxFixedArity = 3;
G__11209.cljs$lang$applyTo = (function (arglist__11216){
var x = cljs.core.first(arglist__11216);
var y = cljs.core.first(cljs.core.next(arglist__11216));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11216)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11216)));
return G__11209__delegate.call(this, x, y, z, args);
});
return G__11209;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__11186.call(this);
case  1 :
return ep1__11187.call(this,x);
case  2 :
return ep1__11188.call(this,x,y);
case  3 :
return ep1__11189.call(this,x,y,z);
default:
return ep1__11190.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__11190.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__11181 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__11219 = (function (){
return true;
});
var ep2__11220 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11076 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11076))
{return p2.call(null,x);
} else
{return and__3546__auto____11076;
}
})());
});
var ep2__11221 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11079 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11079))
{var and__3546__auto____11081 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11081))
{var and__3546__auto____11082 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11082))
{return p2.call(null,y);
} else
{return and__3546__auto____11082;
}
} else
{return and__3546__auto____11081;
}
} else
{return and__3546__auto____11079;
}
})());
});
var ep2__11222 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11085 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11085))
{var and__3546__auto____11087 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11087))
{var and__3546__auto____11089 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11089))
{var and__3546__auto____11092 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11092))
{var and__3546__auto____11096 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11096))
{return p2.call(null,z);
} else
{return and__3546__auto____11096;
}
} else
{return and__3546__auto____11092;
}
} else
{return and__3546__auto____11089;
}
} else
{return and__3546__auto____11087;
}
} else
{return and__3546__auto____11085;
}
})());
});
var ep2__11223 = (function() { 
var G__11246__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11099 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11099))
{return cljs.core.every_QMARK_.call(null,(function (p1__10961_SHARP_){
var and__3546__auto____11100 = p1.call(null,p1__10961_SHARP_);

if(cljs.core.truth_(and__3546__auto____11100))
{return p2.call(null,p1__10961_SHARP_);
} else
{return and__3546__auto____11100;
}
}),args);
} else
{return and__3546__auto____11099;
}
})());
};
var G__11246 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11246__delegate.call(this, x, y, z, args);
};
G__11246.cljs$lang$maxFixedArity = 3;
G__11246.cljs$lang$applyTo = (function (arglist__11262){
var x = cljs.core.first(arglist__11262);
var y = cljs.core.first(cljs.core.next(arglist__11262));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11262)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11262)));
return G__11246__delegate.call(this, x, y, z, args);
});
return G__11246;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__11219.call(this);
case  1 :
return ep2__11220.call(this,x);
case  2 :
return ep2__11221.call(this,x,y);
case  3 :
return ep2__11222.call(this,x,y,z);
default:
return ep2__11223.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__11223.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__11182 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__11264 = (function (){
return true;
});
var ep3__11265 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11104 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11104))
{var and__3546__auto____11105 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11105))
{return p3.call(null,x);
} else
{return and__3546__auto____11105;
}
} else
{return and__3546__auto____11104;
}
})());
});
var ep3__11266 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11108 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11108))
{var and__3546__auto____11110 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11110))
{var and__3546__auto____11113 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11113))
{var and__3546__auto____11116 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11116))
{var and__3546__auto____11118 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11118))
{return p3.call(null,y);
} else
{return and__3546__auto____11118;
}
} else
{return and__3546__auto____11116;
}
} else
{return and__3546__auto____11113;
}
} else
{return and__3546__auto____11110;
}
} else
{return and__3546__auto____11108;
}
})());
});
var ep3__11267 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11120 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____11120))
{var and__3546__auto____11122 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____11122))
{var and__3546__auto____11125 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____11125))
{var and__3546__auto____11127 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____11127))
{var and__3546__auto____11129 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____11129))
{var and__3546__auto____11131 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____11131))
{var and__3546__auto____11132 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____11132))
{var and__3546__auto____11133 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____11133))
{return p3.call(null,z);
} else
{return and__3546__auto____11133;
}
} else
{return and__3546__auto____11132;
}
} else
{return and__3546__auto____11131;
}
} else
{return and__3546__auto____11129;
}
} else
{return and__3546__auto____11127;
}
} else
{return and__3546__auto____11125;
}
} else
{return and__3546__auto____11122;
}
} else
{return and__3546__auto____11120;
}
})());
});
var ep3__11269 = (function() { 
var G__11295__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11135 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11135))
{return cljs.core.every_QMARK_.call(null,(function (p1__10964_SHARP_){
var and__3546__auto____11136 = p1.call(null,p1__10964_SHARP_);

if(cljs.core.truth_(and__3546__auto____11136))
{var and__3546__auto____11137 = p2.call(null,p1__10964_SHARP_);

if(cljs.core.truth_(and__3546__auto____11137))
{return p3.call(null,p1__10964_SHARP_);
} else
{return and__3546__auto____11137;
}
} else
{return and__3546__auto____11136;
}
}),args);
} else
{return and__3546__auto____11135;
}
})());
};
var G__11295 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11295__delegate.call(this, x, y, z, args);
};
G__11295.cljs$lang$maxFixedArity = 3;
G__11295.cljs$lang$applyTo = (function (arglist__11305){
var x = cljs.core.first(arglist__11305);
var y = cljs.core.first(cljs.core.next(arglist__11305));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11305)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11305)));
return G__11295__delegate.call(this, x, y, z, args);
});
return G__11295;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__11264.call(this);
case  1 :
return ep3__11265.call(this,x);
case  2 :
return ep3__11266.call(this,x,y);
case  3 :
return ep3__11267.call(this,x,y,z);
default:
return ep3__11269.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__11269.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__11183 = (function() { 
var G__11307__delegate = function (p1,p2,p3,ps){
var ps__11138 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__11310 = (function (){
return true;
});
var epn__11311 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__10965_SHARP_){
return p1__10965_SHARP_.call(null,x);
}),ps__11138);
});
var epn__11312 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__10966_SHARP_){
var and__3546__auto____11142 = p1__10966_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11142))
{return p1__10966_SHARP_.call(null,y);
} else
{return and__3546__auto____11142;
}
}),ps__11138);
});
var epn__11313 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__10967_SHARP_){
var and__3546__auto____11146 = p1__10967_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____11146))
{var and__3546__auto____11147 = p1__10967_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____11147))
{return p1__10967_SHARP_.call(null,z);
} else
{return and__3546__auto____11147;
}
} else
{return and__3546__auto____11146;
}
}),ps__11138);
});
var epn__11314 = (function() { 
var G__11318__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____11148 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____11148))
{return cljs.core.every_QMARK_.call(null,(function (p1__10970_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__10970_SHARP_,args);
}),ps__11138);
} else
{return and__3546__auto____11148;
}
})());
};
var G__11318 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11318__delegate.call(this, x, y, z, args);
};
G__11318.cljs$lang$maxFixedArity = 3;
G__11318.cljs$lang$applyTo = (function (arglist__11328){
var x = cljs.core.first(arglist__11328);
var y = cljs.core.first(cljs.core.next(arglist__11328));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11328)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11328)));
return G__11318__delegate.call(this, x, y, z, args);
});
return G__11318;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__11310.call(this);
case  1 :
return epn__11311.call(this,x);
case  2 :
return epn__11312.call(this,x,y);
case  3 :
return epn__11313.call(this,x,y,z);
default:
return epn__11314.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__11314.cljs$lang$applyTo;
return epn;
})()
};
var G__11307 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11307__delegate.call(this, p1, p2, p3, ps);
};
G__11307.cljs$lang$maxFixedArity = 3;
G__11307.cljs$lang$applyTo = (function (arglist__11329){
var p1 = cljs.core.first(arglist__11329);
var p2 = cljs.core.first(cljs.core.next(arglist__11329));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11329)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11329)));
return G__11307__delegate.call(this, p1, p2, p3, ps);
});
return G__11307;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__11180.call(this,p1);
case  2 :
return every_pred__11181.call(this,p1,p2);
case  3 :
return every_pred__11182.call(this,p1,p2,p3);
default:
return every_pred__11183.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__11183.cljs$lang$applyTo;
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
var some_fn__11460 = (function (p){
return (function() {
var sp1 = null;
var sp1__11466 = (function (){
return null;
});
var sp1__11467 = (function (x){
return p.call(null,x);
});
var sp1__11468 = (function (x,y){
var or__3548__auto____11357 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11357))
{return or__3548__auto____11357;
} else
{return p.call(null,y);
}
});
var sp1__11469 = (function (x,y,z){
var or__3548__auto____11360 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____11360))
{return or__3548__auto____11360;
} else
{var or__3548__auto____11366 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____11366))
{return or__3548__auto____11366;
} else
{return p.call(null,z);
}
}
});
var sp1__11470 = (function() { 
var G__11482__delegate = function (x,y,z,args){
var or__3548__auto____11384 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11384))
{return or__3548__auto____11384;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__11482 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11482__delegate.call(this, x, y, z, args);
};
G__11482.cljs$lang$maxFixedArity = 3;
G__11482.cljs$lang$applyTo = (function (arglist__11484){
var x = cljs.core.first(arglist__11484);
var y = cljs.core.first(cljs.core.next(arglist__11484));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11484)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11484)));
return G__11482__delegate.call(this, x, y, z, args);
});
return G__11482;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__11466.call(this);
case  1 :
return sp1__11467.call(this,x);
case  2 :
return sp1__11468.call(this,x,y);
case  3 :
return sp1__11469.call(this,x,y,z);
default:
return sp1__11470.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__11470.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__11461 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__11487 = (function (){
return null;
});
var sp2__11488 = (function (x){
var or__3548__auto____11387 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11387))
{return or__3548__auto____11387;
} else
{return p2.call(null,x);
}
});
var sp2__11489 = (function (x,y){
var or__3548__auto____11394 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11394))
{return or__3548__auto____11394;
} else
{var or__3548__auto____11395 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11395))
{return or__3548__auto____11395;
} else
{var or__3548__auto____11396 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11396))
{return or__3548__auto____11396;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__11490 = (function (x,y,z){
var or__3548__auto____11398 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11398))
{return or__3548__auto____11398;
} else
{var or__3548__auto____11400 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11400))
{return or__3548__auto____11400;
} else
{var or__3548__auto____11401 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11401))
{return or__3548__auto____11401;
} else
{var or__3548__auto____11403 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11403))
{return or__3548__auto____11403;
} else
{var or__3548__auto____11404 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11404))
{return or__3548__auto____11404;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__11491 = (function() { 
var G__11502__delegate = function (x,y,z,args){
var or__3548__auto____11405 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11405))
{return or__3548__auto____11405;
} else
{return cljs.core.some.call(null,(function (p1__11057_SHARP_){
var or__3548__auto____11406 = p1.call(null,p1__11057_SHARP_);

if(cljs.core.truth_(or__3548__auto____11406))
{return or__3548__auto____11406;
} else
{return p2.call(null,p1__11057_SHARP_);
}
}),args);
}
};
var G__11502 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11502__delegate.call(this, x, y, z, args);
};
G__11502.cljs$lang$maxFixedArity = 3;
G__11502.cljs$lang$applyTo = (function (arglist__11508){
var x = cljs.core.first(arglist__11508);
var y = cljs.core.first(cljs.core.next(arglist__11508));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11508)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11508)));
return G__11502__delegate.call(this, x, y, z, args);
});
return G__11502;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__11487.call(this);
case  1 :
return sp2__11488.call(this,x);
case  2 :
return sp2__11489.call(this,x,y);
case  3 :
return sp2__11490.call(this,x,y,z);
default:
return sp2__11491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__11491.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__11462 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__11515 = (function (){
return null;
});
var sp3__11516 = (function (x){
var or__3548__auto____11408 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11408))
{return or__3548__auto____11408;
} else
{var or__3548__auto____11409 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11409))
{return or__3548__auto____11409;
} else
{return p3.call(null,x);
}
}
});
var sp3__11517 = (function (x,y){
var or__3548__auto____11411 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11411))
{return or__3548__auto____11411;
} else
{var or__3548__auto____11413 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11413))
{return or__3548__auto____11413;
} else
{var or__3548__auto____11416 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11416))
{return or__3548__auto____11416;
} else
{var or__3548__auto____11419 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11419))
{return or__3548__auto____11419;
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
var sp3__11518 = (function (x,y,z){
var or__3548__auto____11426 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____11426))
{return or__3548__auto____11426;
} else
{var or__3548__auto____11427 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____11427))
{return or__3548__auto____11427;
} else
{var or__3548__auto____11428 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____11428))
{return or__3548__auto____11428;
} else
{var or__3548__auto____11429 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____11429))
{return or__3548__auto____11429;
} else
{var or__3548__auto____11430 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____11430))
{return or__3548__auto____11430;
} else
{var or__3548__auto____11432 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____11432))
{return or__3548__auto____11432;
} else
{var or__3548__auto____11433 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____11433))
{return or__3548__auto____11433;
} else
{var or__3548__auto____11434 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____11434))
{return or__3548__auto____11434;
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
var sp3__11519 = (function() { 
var G__11549__delegate = function (x,y,z,args){
var or__3548__auto____11439 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11439))
{return or__3548__auto____11439;
} else
{return cljs.core.some.call(null,(function (p1__11058_SHARP_){
var or__3548__auto____11444 = p1.call(null,p1__11058_SHARP_);

if(cljs.core.truth_(or__3548__auto____11444))
{return or__3548__auto____11444;
} else
{var or__3548__auto____11445 = p2.call(null,p1__11058_SHARP_);

if(cljs.core.truth_(or__3548__auto____11445))
{return or__3548__auto____11445;
} else
{return p3.call(null,p1__11058_SHARP_);
}
}
}),args);
}
};
var G__11549 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11549__delegate.call(this, x, y, z, args);
};
G__11549.cljs$lang$maxFixedArity = 3;
G__11549.cljs$lang$applyTo = (function (arglist__11558){
var x = cljs.core.first(arglist__11558);
var y = cljs.core.first(cljs.core.next(arglist__11558));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11558)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11558)));
return G__11549__delegate.call(this, x, y, z, args);
});
return G__11549;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__11515.call(this);
case  1 :
return sp3__11516.call(this,x);
case  2 :
return sp3__11517.call(this,x,y);
case  3 :
return sp3__11518.call(this,x,y,z);
default:
return sp3__11519.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__11519.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__11463 = (function() { 
var G__11561__delegate = function (p1,p2,p3,ps){
var ps__11446 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__11563 = (function (){
return null;
});
var spn__11564 = (function (x){
return cljs.core.some.call(null,(function (p1__11061_SHARP_){
return p1__11061_SHARP_.call(null,x);
}),ps__11446);
});
var spn__11565 = (function (x,y){
return cljs.core.some.call(null,(function (p1__11062_SHARP_){
var or__3548__auto____11452 = p1__11062_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11452))
{return or__3548__auto____11452;
} else
{return p1__11062_SHARP_.call(null,y);
}
}),ps__11446);
});
var spn__11566 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__11063_SHARP_){
var or__3548__auto____11455 = p1__11063_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____11455))
{return or__3548__auto____11455;
} else
{var or__3548__auto____11457 = p1__11063_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____11457))
{return or__3548__auto____11457;
} else
{return p1__11063_SHARP_.call(null,z);
}
}
}),ps__11446);
});
var spn__11568 = (function() { 
var G__11613__delegate = function (x,y,z,args){
var or__3548__auto____11459 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____11459))
{return or__3548__auto____11459;
} else
{return cljs.core.some.call(null,(function (p1__11064_SHARP_){
return cljs.core.some.call(null,p1__11064_SHARP_,args);
}),ps__11446);
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
G__11613.cljs$lang$applyTo = (function (arglist__11623){
var x = cljs.core.first(arglist__11623);
var y = cljs.core.first(cljs.core.next(arglist__11623));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11623)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11623)));
return G__11613__delegate.call(this, x, y, z, args);
});
return G__11613;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__11563.call(this);
case  1 :
return spn__11564.call(this,x);
case  2 :
return spn__11565.call(this,x,y);
case  3 :
return spn__11566.call(this,x,y,z);
default:
return spn__11568.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__11568.cljs$lang$applyTo;
return spn;
})()
};
var G__11561 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__11561__delegate.call(this, p1, p2, p3, ps);
};
G__11561.cljs$lang$maxFixedArity = 3;
G__11561.cljs$lang$applyTo = (function (arglist__11624){
var p1 = cljs.core.first(arglist__11624);
var p2 = cljs.core.first(cljs.core.next(arglist__11624));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11624)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__11624)));
return G__11561__delegate.call(this, p1, p2, p3, ps);
});
return G__11561;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__11460.call(this,p1);
case  2 :
return some_fn__11461.call(this,p1,p2);
case  3 :
return some_fn__11462.call(this,p1,p2,p3);
default:
return some_fn__11463.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__11463.cljs$lang$applyTo;
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
var map__11742 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11668 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11668))
{var s__11669 = temp__3698__auto____11668;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__11669)),map.call(null,f,cljs.core.rest.call(null,s__11669)));
} else
{return null;
}
})));
});
var map__11743 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11683 = cljs.core.seq.call(null,c1);
var s2__11684 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11685 = s1__11683;

if(cljs.core.truth_(and__3546__auto____11685))
{return s2__11684;
} else
{return and__3546__auto____11685;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11683),cljs.core.first.call(null,s2__11684)),map.call(null,f,cljs.core.rest.call(null,s1__11683),cljs.core.rest.call(null,s2__11684)));
} else
{return null;
}
})));
});
var map__11744 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11690 = cljs.core.seq.call(null,c1);
var s2__11692 = cljs.core.seq.call(null,c2);
var s3__11693 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____11694 = s1__11690;

if(cljs.core.truth_(and__3546__auto____11694))
{var and__3546__auto____11695 = s2__11692;

if(cljs.core.truth_(and__3546__auto____11695))
{return s3__11693;
} else
{return and__3546__auto____11695;
}
} else
{return and__3546__auto____11694;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__11690),cljs.core.first.call(null,s2__11692),cljs.core.first.call(null,s3__11693)),map.call(null,f,cljs.core.rest.call(null,s1__11690),cljs.core.rest.call(null,s2__11692),cljs.core.rest.call(null,s3__11693)));
} else
{return null;
}
})));
});
var map__11745 = (function() { 
var G__11772__delegate = function (f,c1,c2,c3,colls){
var step__11725 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11698 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11698)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__11698),step.call(null,map.call(null,cljs.core.rest,ss__11698)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__11351_SHARP_){
return cljs.core.apply.call(null,f,p1__11351_SHARP_);
}),step__11725.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__11772 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__11772__delegate.call(this, f, c1, c2, c3, colls);
};
G__11772.cljs$lang$maxFixedArity = 4;
G__11772.cljs$lang$applyTo = (function (arglist__11784){
var f = cljs.core.first(arglist__11784);
var c1 = cljs.core.first(cljs.core.next(arglist__11784));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__11784)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11784))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__11784))));
return G__11772__delegate.call(this, f, c1, c2, c3, colls);
});
return G__11772;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__11742.call(this,f,c1);
case  3 :
return map__11743.call(this,f,c1,c2);
case  4 :
return map__11744.call(this,f,c1,c2,c3);
default:
return map__11745.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__11745.cljs$lang$applyTo;
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
{var temp__3698__auto____11793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11793))
{var s__11794 = temp__3698__auto____11793;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__11794),take.call(null,(n - 1),cljs.core.rest.call(null,s__11794)));
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
var step__11816 = (function (n,coll){
while(true){
var s__11811 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11813 = (n > 0);

if(cljs.core.truth_(and__3546__auto____11813))
{return s__11811;
} else
{return and__3546__auto____11813;
}
})()))
{{
var G__11826 = (n - 1);
var G__11829 = cljs.core.rest.call(null,s__11811);
n = G__11826;
coll = G__11829;
continue;
}
} else
{return s__11811;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11816.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__11860 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__11862 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__11860.call(this,n);
case  2 :
return drop_last__11862.call(this,n,s);
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
var s__11873 = cljs.core.seq.call(null,coll);
var lead__11874 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__11874))
{{
var G__11876 = cljs.core.next.call(null,s__11873);
var G__11877 = cljs.core.next.call(null,lead__11874);
s__11873 = G__11876;
lead__11874 = G__11877;
continue;
}
} else
{return s__11873;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__11890 = (function (pred,coll){
while(true){
var s__11882 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____11883 = s__11882;

if(cljs.core.truth_(and__3546__auto____11883))
{return pred.call(null,cljs.core.first.call(null,s__11882));
} else
{return and__3546__auto____11883;
}
})()))
{{
var G__11897 = pred;
var G__11898 = cljs.core.rest.call(null,s__11882);
pred = G__11897;
coll = G__11898;
continue;
}
} else
{return s__11882;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__11890.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____11902 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____11902))
{var s__11903 = temp__3698__auto____11902;

return cljs.core.concat.call(null,s__11903,cycle.call(null,s__11903));
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
var repeat__11916 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__11917 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__11916.call(this,n);
case  2 :
return repeat__11917.call(this,n,x);
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
var repeatedly__11934 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__11935 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__11934.call(this,n);
case  2 :
return repeatedly__11935.call(this,n,f);
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
var interleave__11973 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__11954 = cljs.core.seq.call(null,c1);
var s2__11956 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____11959 = s1__11954;

if(cljs.core.truth_(and__3546__auto____11959))
{return s2__11956;
} else
{return and__3546__auto____11959;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__11954),cljs.core.cons.call(null,cljs.core.first.call(null,s2__11956),interleave.call(null,cljs.core.rest.call(null,s1__11954),cljs.core.rest.call(null,s2__11956))));
} else
{return null;
}
})));
});
var interleave__11974 = (function() { 
var G__11981__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__11964 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__11964)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__11964),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__11964)));
} else
{return null;
}
})));
};
var G__11981 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__11981__delegate.call(this, c1, c2, colls);
};
G__11981.cljs$lang$maxFixedArity = 2;
G__11981.cljs$lang$applyTo = (function (arglist__11983){
var c1 = cljs.core.first(arglist__11983);
var c2 = cljs.core.first(cljs.core.next(arglist__11983));
var colls = cljs.core.rest(cljs.core.next(arglist__11983));
return G__11981__delegate.call(this, c1, c2, colls);
});
return G__11981;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__11973.call(this,c1,c2);
default:
return interleave__11974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__11974.cljs$lang$applyTo;
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
var temp__3695__auto____11994 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____11994))
{var coll__11995 = temp__3695__auto____11994;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__11995),cat.call(null,cljs.core.rest.call(null,coll__11995),colls));
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
var mapcat__12017 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__12018 = (function() { 
var G__12022__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__12022 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12022__delegate.call(this, f, coll, colls);
};
G__12022.cljs$lang$maxFixedArity = 2;
G__12022.cljs$lang$applyTo = (function (arglist__12023){
var f = cljs.core.first(arglist__12023);
var coll = cljs.core.first(cljs.core.next(arglist__12023));
var colls = cljs.core.rest(cljs.core.next(arglist__12023));
return G__12022__delegate.call(this, f, coll, colls);
});
return G__12022;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__12017.call(this,f,coll);
default:
return mapcat__12018.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__12018.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12024 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12024))
{var s__12025 = temp__3698__auto____12024;

var f__12026 = cljs.core.first.call(null,s__12025);
var r__12029 = cljs.core.rest.call(null,s__12025);

if(cljs.core.truth_(pred.call(null,f__12026)))
{return cljs.core.cons.call(null,f__12026,filter.call(null,pred,r__12029));
} else
{return filter.call(null,pred,r__12029);
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
var walk__12046 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__12046.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__12041_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__12041_SHARP_));
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
var partition__12099 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__12101 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12079 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12079))
{var s__12080 = temp__3698__auto____12079;

var p__12081 = cljs.core.take.call(null,n,s__12080);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12081))))
{return cljs.core.cons.call(null,p__12081,partition.call(null,n,step,cljs.core.drop.call(null,step,s__12080)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__12103 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____12085 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____12085))
{var s__12087 = temp__3698__auto____12085;

var p__12088 = cljs.core.take.call(null,n,s__12087);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__12088))))
{return cljs.core.cons.call(null,p__12088,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__12087)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__12088,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__12099.call(this,n,step);
case  3 :
return partition__12101.call(this,n,step,pad);
case  4 :
return partition__12103.call(this,n,step,pad,coll);
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
var get_in__12129 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__12130 = (function (m,ks,not_found){
var sentinel__12121 = cljs.core.lookup_sentinel;
var m__12122 = m;
var ks__12123 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__12123))
{var m__12124 = cljs.core.get.call(null,m__12122,cljs.core.first.call(null,ks__12123),sentinel__12121);

if(cljs.core.truth_((sentinel__12121 === m__12124)))
{return not_found;
} else
{{
var G__12134 = sentinel__12121;
var G__12136 = m__12124;
var G__12138 = cljs.core.next.call(null,ks__12123);
sentinel__12121 = G__12134;
m__12122 = G__12136;
ks__12123 = G__12138;
continue;
}
}
} else
{return m__12122;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__12129.call(this,m,ks);
case  3 :
return get_in__12130.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__12139,v){
var vec__12142__12143 = p__12139;
var k__12145 = cljs.core.nth.call(null,vec__12142__12143,0,null);
var ks__12146 = cljs.core.nthnext.call(null,vec__12142__12143,1);

if(cljs.core.truth_(ks__12146))
{return cljs.core.assoc.call(null,m,k__12145,assoc_in.call(null,cljs.core.get.call(null,m,k__12145),ks__12146,v));
} else
{return cljs.core.assoc.call(null,m,k__12145,v);
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
var vec__12157__12159 = p__12156;
var k__12160 = cljs.core.nth.call(null,vec__12157__12159,0,null);
var ks__12161 = cljs.core.nthnext.call(null,vec__12157__12159,1);

if(cljs.core.truth_(ks__12161))
{return cljs.core.assoc.call(null,m,k__12160,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__12160),ks__12161,f,args));
} else
{return cljs.core.assoc.call(null,m,k__12160,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__12160),args));
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
update_in.cljs$lang$applyTo = (function (arglist__12173){
var m = cljs.core.first(arglist__12173);
var p__12156 = cljs.core.first(cljs.core.next(arglist__12173));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__12173)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__12173)));
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
var this__12180 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12243 = null;
var G__12243__12244 = (function (coll,k){
var this__12181 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12243__12245 = (function (coll,k,not_found){
var this__12182 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12243 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12243__12244.call(this,coll,k);
case  3 :
return G__12243__12245.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12243;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12183 = this;
var new_array__12184 = cljs.core.aclone.call(null,this__12183.array);

(new_array__12184[k] = v);
return (new cljs.core.Vector(this__12183.meta,new_array__12184));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__12247 = null;
var G__12247__12249 = (function (coll,k){
var this__12185 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12247__12250 = (function (coll,k,not_found){
var this__12186 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12247 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12247__12249.call(this,coll,k);
case  3 :
return G__12247__12250.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12247;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12187 = this;
var new_array__12188 = cljs.core.aclone.call(null,this__12187.array);

new_array__12188.push(o);
return (new cljs.core.Vector(this__12187.meta,new_array__12188));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__12255 = null;
var G__12255__12258 = (function (v,f){
var this__12190 = this;
return cljs.core.ci_reduce.call(null,this__12190.array,f);
});
var G__12255__12259 = (function (v,f,start){
var this__12192 = this;
return cljs.core.ci_reduce.call(null,this__12192.array,f,start);
});
G__12255 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__12255__12258.call(this,v,f);
case  3 :
return G__12255__12259.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12255;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12194 = this;
if(cljs.core.truth_((this__12194.array.length > 0)))
{var vector_seq__12201 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__12194.array.length)))
{return cljs.core.cons.call(null,(this__12194.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__12201.call(null,0);
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
var this__12207 = this;
var count__12209 = this__12207.array.length;

if(cljs.core.truth_((count__12209 > 0)))
{return (this__12207.array[(count__12209 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12212 = this;
if(cljs.core.truth_((this__12212.array.length > 0)))
{var new_array__12214 = cljs.core.aclone.call(null,this__12212.array);

new_array__12214.pop();
return (new cljs.core.Vector(this__12212.meta,new_array__12214));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12215 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12219 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12221 = this;
return (new cljs.core.Vector(meta,this__12221.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12223 = this;
return this__12223.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12280 = null;
var G__12280__12281 = (function (coll,n){
var this__12226 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12229 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12229))
{return (n < this__12226.array.length);
} else
{return and__3546__auto____12229;
}
})()))
{return (this__12226.array[n]);
} else
{return null;
}
});
var G__12280__12282 = (function (coll,n,not_found){
var this__12231 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12236 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____12236))
{return (n < this__12231.array.length);
} else
{return and__3546__auto____12236;
}
})()))
{return (this__12231.array[n]);
} else
{return not_found;
}
});
G__12280 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12280__12281.call(this,coll,n);
case  3 :
return G__12280__12282.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12280;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12238 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12238.meta);
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
vector.cljs$lang$applyTo = (function (arglist__12309){
var args = cljs.core.seq( arglist__12309 );;
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
var this__12324 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12385 = null;
var G__12385__12386 = (function (coll,k){
var this__12327 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__12385__12387 = (function (coll,k,not_found){
var this__12329 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__12385 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12385__12386.call(this,coll,k);
case  3 :
return G__12385__12387.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12385;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__12331 = this;
var v_pos__12332 = (this__12331.start + key);

return (new cljs.core.Subvec(this__12331.meta,cljs.core._assoc.call(null,this__12331.v,v_pos__12332,val),this__12331.start,((this__12331.end > (v_pos__12332 + 1)) ? this__12331.end : (v_pos__12332 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__12390 = null;
var G__12390__12391 = (function (coll,k){
var this__12334 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12390__12392 = (function (coll,k,not_found){
var this__12338 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12390 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12390__12391.call(this,coll,k);
case  3 :
return G__12390__12392.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12390;
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
var G__12402 = null;
var G__12402__12403 = (function (coll,f){
var this__12343 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__12402__12404 = (function (coll,f,start){
var this__12344 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__12402 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__12402__12403.call(this,coll,f);
case  3 :
return G__12402__12404.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12402;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12346 = this;
var subvec_seq__12347 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__12346.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__12346.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__12347.call(null,this__12346.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12348 = this;
return (this__12348.end - this__12348.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12349 = this;
return cljs.core._nth.call(null,this__12349.v,(this__12349.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12350 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__12350.start,this__12350.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__12350.meta,this__12350.v,this__12350.start,(this__12350.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__12355 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12361 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12366 = this;
return (new cljs.core.Subvec(meta,this__12366.v,this__12366.start,this__12366.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12369 = this;
return this__12369.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__12411 = null;
var G__12411__12412 = (function (coll,n){
var this__12370 = this;
return cljs.core._nth.call(null,this__12370.v,(this__12370.start + n));
});
var G__12411__12413 = (function (coll,n,not_found){
var this__12372 = this;
return cljs.core._nth.call(null,this__12372.v,(this__12372.start + n),not_found);
});
G__12411 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__12411__12412.call(this,coll,n);
case  3 :
return G__12411__12413.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12411;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12380 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__12380.meta);
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
var subvec__12416 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__12417 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__12416.call(this,v,start);
case  3 :
return subvec__12417.call(this,v,start,end);
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
var this__12435 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__12436 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12441 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12444 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__12444.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12447 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12449 = this;
return cljs.core._first.call(null,this__12449.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12450 = this;
var temp__3695__auto____12455 = cljs.core.next.call(null,this__12450.front);

if(cljs.core.truth_(temp__3695__auto____12455))
{var f1__12460 = temp__3695__auto____12455;

return (new cljs.core.PersistentQueueSeq(this__12450.meta,f1__12460,this__12450.rear));
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__12450.rear)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__12450.meta,this__12450.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12492 = this;
return this__12492.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12494 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__12494.front,this__12494.rear));
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
var this__12527 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__12529 = this;
if(cljs.core.truth_(this__12529.front))
{return (new cljs.core.PersistentQueue(this__12529.meta,(this__12529.count + 1),this__12529.front,cljs.core.conj.call(null,(function (){var or__3548__auto____12535 = this__12529.rear;

if(cljs.core.truth_(or__3548__auto____12535))
{return or__3548__auto____12535;
} else
{return cljs.core.Vector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__12529.meta,(this__12529.count + 1),cljs.core.conj.call(null,this__12529.front,o),cljs.core.Vector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12541 = this;
var rear__12543 = cljs.core.seq.call(null,this__12541.rear);

if(cljs.core.truth_((function (){var or__3548__auto____12545 = this__12541.front;

if(cljs.core.truth_(or__3548__auto____12545))
{return or__3548__auto____12545;
} else
{return rear__12543;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__12541.front,cljs.core.seq.call(null,rear__12543)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12551 = this;
return this__12551.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__12556 = this;
return cljs.core._first.call(null,this__12556.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__12559 = this;
if(cljs.core.truth_(this__12559.front))
{var temp__3695__auto____12560 = cljs.core.next.call(null,this__12559.front);

if(cljs.core.truth_(temp__3695__auto____12560))
{var f1__12562 = temp__3695__auto____12560;

return (new cljs.core.PersistentQueue(this__12559.meta,(this__12559.count - 1),f1__12562,this__12559.rear));
} else
{return (new cljs.core.PersistentQueue(this__12559.meta,(this__12559.count - 1),cljs.core.seq.call(null,this__12559.rear),cljs.core.Vector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__12573 = this;
return cljs.core.first.call(null,this__12573.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__12574 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12575 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12581 = this;
return (new cljs.core.PersistentQueue(meta,this__12581.count,this__12581.front,this__12581.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12587 = this;
return this__12587.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12590 = this;
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
var this__12620 = this;
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
var len__12642 = array.length;

var i__12644 = 0;

while(true){
if(cljs.core.truth_((i__12644 < len__12642)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__12644]))))
{return i__12644;
} else
{{
var G__12651 = (i__12644 + incr);
i__12644 = G__12651;
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
var obj_map_contains_key_QMARK___12659 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___12660 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____12657 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12657))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12657;
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
return obj_map_contains_key_QMARK___12659.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___12660.call(this,k,strobj,true_val,false_val);
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
var this__12675 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12824 = null;
var G__12824__12825 = (function (coll,k){
var this__12678 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12824__12826 = (function (coll,k,not_found){
var this__12679 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12679.strobj,(this__12679.strobj[k]),not_found);
});
G__12824 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12824__12825.call(this,coll,k);
case  3 :
return G__12824__12826.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12824;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12682 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__12687 = goog.object.clone.call(null,this__12682.strobj);
var overwrite_QMARK___12688 = new_strobj__12687.hasOwnProperty(k);

(new_strobj__12687[k] = v);
if(cljs.core.truth_(overwrite_QMARK___12688))
{return (new cljs.core.ObjMap(this__12682.meta,this__12682.keys,new_strobj__12687));
} else
{var new_keys__12690 = cljs.core.aclone.call(null,this__12682.keys);

new_keys__12690.push(k);
return (new cljs.core.ObjMap(this__12682.meta,new_keys__12690,new_strobj__12687));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__12682.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12698 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__12698.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__12835 = null;
var G__12835__12837 = (function (coll,k){
var this__12700 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__12835__12838 = (function (coll,k,not_found){
var this__12701 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__12835 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12835__12837.call(this,coll,k);
case  3 :
return G__12835__12838.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12835;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12708 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__12710 = this;
if(cljs.core.truth_((this__12710.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__12665_SHARP_){
return cljs.core.vector.call(null,p1__12665_SHARP_,(this__12710.strobj[p1__12665_SHARP_]));
}),this__12710.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12721 = this;
return this__12721.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12724 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12728 = this;
return (new cljs.core.ObjMap(meta,this__12728.keys,this__12728.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12730 = this;
return this__12730.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12734 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__12734.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12736 = this;
if(cljs.core.truth_((function (){var and__3546__auto____12815 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____12815))
{return this__12736.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____12815;
}
})()))
{var new_keys__12818 = cljs.core.aclone.call(null,this__12736.keys);
var new_strobj__12819 = goog.object.clone.call(null,this__12736.strobj);

new_keys__12818.splice(cljs.core.scan_array.call(null,1,k,new_keys__12818),1);
cljs.core.js_delete.call(null,new_strobj__12819,k);
return (new cljs.core.ObjMap(this__12736.meta,new_keys__12818,new_strobj__12819));
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
var this__12878 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__12988 = null;
var G__12988__12990 = (function (coll,k){
var this__12879 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__12988__12991 = (function (coll,k,not_found){
var this__12880 = this;
var bucket__12881 = (this__12880.hashobj[cljs.core.hash.call(null,k)]);
var i__12892 = (cljs.core.truth_(bucket__12881)?cljs.core.scan_array.call(null,2,k,bucket__12881):null);

if(cljs.core.truth_(i__12892))
{return (bucket__12881[(i__12892 + 1)]);
} else
{return not_found;
}
});
G__12988 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__12988__12990.call(this,coll,k);
case  3 :
return G__12988__12991.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__12988;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__12895 = this;
var h__12896 = cljs.core.hash.call(null,k);
var bucket__12898 = (this__12895.hashobj[h__12896]);

if(cljs.core.truth_(bucket__12898))
{var new_bucket__12899 = cljs.core.aclone.call(null,bucket__12898);
var new_hashobj__12900 = goog.object.clone.call(null,this__12895.hashobj);

(new_hashobj__12900[h__12896] = new_bucket__12899);
var temp__3695__auto____12902 = cljs.core.scan_array.call(null,2,k,new_bucket__12899);

if(cljs.core.truth_(temp__3695__auto____12902))
{var i__12903 = temp__3695__auto____12902;

(new_bucket__12899[(i__12903 + 1)] = v);
return (new cljs.core.HashMap(this__12895.meta,this__12895.count,new_hashobj__12900));
} else
{new_bucket__12899.push(k,v);
return (new cljs.core.HashMap(this__12895.meta,(this__12895.count + 1),new_hashobj__12900));
}
} else
{var new_hashobj__12907 = goog.object.clone.call(null,this__12895.hashobj);

(new_hashobj__12907[h__12896] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__12895.meta,(this__12895.count + 1),new_hashobj__12907));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__12909 = this;
var bucket__12911 = (this__12909.hashobj[cljs.core.hash.call(null,k)]);
var i__12913 = (cljs.core.truth_(bucket__12911)?cljs.core.scan_array.call(null,2,k,bucket__12911):null);

if(cljs.core.truth_(i__12913))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__13006 = null;
var G__13006__13008 = (function (coll,k){
var this__12915 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13006__13009 = (function (coll,k,not_found){
var this__12916 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13006 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13006__13008.call(this,coll,k);
case  3 :
return G__13006__13009.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13006;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__12919 = this;
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
{var hashes__12962 = cljs.core.js_keys.call(null,this__12923.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__12861_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__12923.hashobj[p1__12861_SHARP_])));
}),hashes__12962);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__12966 = this;
return this__12966.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__12968 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__12971 = this;
return (new cljs.core.HashMap(meta,this__12971.count,this__12971.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__12973 = this;
return this__12973.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__12975 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__12975.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__12976 = this;
var h__12978 = cljs.core.hash.call(null,k);
var bucket__12979 = (this__12976.hashobj[h__12978]);
var i__12980 = (cljs.core.truth_(bucket__12979)?cljs.core.scan_array.call(null,2,k,bucket__12979):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__12980)))
{return coll;
} else
{var new_hashobj__12982 = goog.object.clone.call(null,this__12976.hashobj);

if(cljs.core.truth_((3 > bucket__12979.length)))
{cljs.core.js_delete.call(null,new_hashobj__12982,h__12978);
} else
{var new_bucket__12984 = cljs.core.aclone.call(null,bucket__12979);

new_bucket__12984.splice(i__12980,2);
(new_hashobj__12982[h__12978] = new_bucket__12984);
}
return (new cljs.core.HashMap(this__12976.meta,(this__12976.count - 1),new_hashobj__12982));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__13043 = ks.length;

var i__13045 = 0;
var out__13047 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__13045 < len__13043)))
{{
var G__13054 = (i__13045 + 1);
var G__13055 = cljs.core.assoc.call(null,out__13047,(ks[i__13045]),(vs[i__13045]));
i__13045 = G__13054;
out__13047 = G__13055;
continue;
}
} else
{return out__13047;
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
var in$__13056 = cljs.core.seq.call(null,keyvals);
var out__13057 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__13056))
{{
var G__13058 = cljs.core.nnext.call(null,in$__13056);
var G__13059 = cljs.core.assoc.call(null,out__13057,cljs.core.first.call(null,in$__13056),cljs.core.second.call(null,in$__13056));
in$__13056 = G__13058;
out__13057 = G__13059;
continue;
}
} else
{return out__13057;
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
hash_map.cljs$lang$applyTo = (function (arglist__13060){
var keyvals = cljs.core.seq( arglist__13060 );;
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
{return cljs.core.reduce.call(null,(function (p1__13061_SHARP_,p2__13062_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____13066 = p1__13061_SHARP_;

if(cljs.core.truth_(or__3548__auto____13066))
{return or__3548__auto____13066;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__13062_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__13073){
var maps = cljs.core.seq( arglist__13073 );;
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
{var merge_entry__13077 = (function (m,e){
var k__13075 = cljs.core.first.call(null,e);
var v__13076 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__13075)))
{return cljs.core.assoc.call(null,m,k__13075,f.call(null,cljs.core.get.call(null,m,k__13075),v__13076));
} else
{return cljs.core.assoc.call(null,m,k__13075,v__13076);
}
});
var merge2__13079 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__13077,(function (){var or__3548__auto____13078 = m1;

if(cljs.core.truth_(or__3548__auto____13078))
{return or__3548__auto____13078;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__13079,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__13161){
var f = cljs.core.first(arglist__13161);
var maps = cljs.core.rest(arglist__13161);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__13192 = cljs.core.ObjMap.fromObject([],{});
var keys__13196 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__13196))
{var key__13197 = cljs.core.first.call(null,keys__13196);
var entry__13198 = cljs.core.get.call(null,map,key__13197,"﷐'user/not-found");

{
var G__13199 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__13198,"﷐'user/not-found"))?cljs.core.assoc.call(null,ret__13192,key__13197,entry__13198):ret__13192);
var G__13200 = cljs.core.next.call(null,keys__13196);
ret__13192 = G__13199;
keys__13196 = G__13200;
continue;
}
} else
{return ret__13192;
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
var this__13267 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__13301 = null;
var G__13301__13302 = (function (coll,v){
var this__13268 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__13301__13303 = (function (coll,v,not_found){
var this__13269 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__13269.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__13301 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__13301__13302.call(this,coll,v);
case  3 :
return G__13301__13303.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13301;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__13307 = null;
var G__13307__13308 = (function (coll,k){
var this__13271 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k);
});
var G__13307__13309 = (function (coll,k,not_found){
var this__13274 = this;
coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__13307 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__13307__13308.call(this,coll,k);
case  3 :
return G__13307__13309.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13307;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__13278 = this;
return (new cljs.core.Set(this__13278.meta,cljs.core.assoc.call(null,this__13278.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__13279 = this;
return cljs.core.keys.call(null,this__13279.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__13280 = this;
return (new cljs.core.Set(this__13280.meta,cljs.core.dissoc.call(null,this__13280.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__13282 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__13283 = this;
var and__3546__auto____13284 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____13284))
{var and__3546__auto____13285 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____13285))
{return cljs.core.every_QMARK_.call(null,(function (p1__13190_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__13190_SHARP_);
}),other);
} else
{return and__3546__auto____13285;
}
} else
{return and__3546__auto____13284;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__13286 = this;
return (new cljs.core.Set(meta,this__13286.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__13289 = this;
return this__13289.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__13291 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__13291.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__13332 = cljs.core.seq.call(null,coll);
var out__13333 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__13332))))
{{
var G__13337 = cljs.core.rest.call(null,in$__13332);
var G__13338 = cljs.core.conj.call(null,out__13333,cljs.core.first.call(null,in$__13332));
in$__13332 = G__13337;
out__13333 = G__13338;
continue;
}
} else
{return out__13333;
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
{var n__13343 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____13345 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____13345))
{var e__13347 = temp__3695__auto____13345;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__13347));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__13343,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__13330_SHARP_){
var temp__3695__auto____13349 = cljs.core.find.call(null,smap,p1__13330_SHARP_);

if(cljs.core.truth_(temp__3695__auto____13349))
{var e__13350 = temp__3695__auto____13349;

return cljs.core.second.call(null,e__13350);
} else
{return p1__13330_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__13374 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__13362,seen){
while(true){
var vec__13363__13364 = p__13362;
var f__13366 = cljs.core.nth.call(null,vec__13363__13364,0,null);
var xs__13368 = vec__13363__13364;

var temp__3698__auto____13369 = cljs.core.seq.call(null,xs__13368);

if(cljs.core.truth_(temp__3698__auto____13369))
{var s__13370 = temp__3698__auto____13369;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__13366)))
{{
var G__13383 = cljs.core.rest.call(null,s__13370);
var G__13384 = seen;
p__13362 = G__13383;
seen = G__13384;
continue;
}
} else
{return cljs.core.cons.call(null,f__13366,step.call(null,cljs.core.rest.call(null,s__13370),cljs.core.conj.call(null,seen,f__13366)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__13374.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__13386 = cljs.core.Vector.fromArray([]);
var s__13388 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__13388)))
{{
var G__13391 = cljs.core.conj.call(null,ret__13386,cljs.core.first.call(null,s__13388));
var G__13392 = cljs.core.next.call(null,s__13388);
ret__13386 = G__13391;
s__13388 = G__13392;
continue;
}
} else
{return cljs.core.seq.call(null,ret__13386);
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
{if(cljs.core.truth_((function (){var or__3548__auto____13402 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13402))
{return or__3548__auto____13402;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13405 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13405 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__13405 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____13418 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____13418))
{return or__3548__auto____13418;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__13422 = x.lastIndexOf("/");

if(cljs.core.truth_((i__13422 > -1)))
{return cljs.core.subs.call(null,x,2,i__13422);
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
var map__13431 = cljs.core.ObjMap.fromObject([],{});
var ks__13433 = cljs.core.seq.call(null,keys);
var vs__13434 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____13436 = ks__13433;

if(cljs.core.truth_(and__3546__auto____13436))
{return vs__13434;
} else
{return and__3546__auto____13436;
}
})()))
{{
var G__13439 = cljs.core.assoc.call(null,map__13431,cljs.core.first.call(null,ks__13433),cljs.core.first.call(null,vs__13434));
var G__13440 = cljs.core.next.call(null,ks__13433);
var G__13441 = cljs.core.next.call(null,vs__13434);
map__13431 = G__13439;
ks__13433 = G__13440;
vs__13434 = G__13441;
continue;
}
} else
{return map__13431;
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
var max_key__13453 = (function (k,x){
return x;
});
var max_key__13454 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__13455 = (function() { 
var G__13459__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13429_SHARP_,p2__13430_SHARP_){
return max_key.call(null,k,p1__13429_SHARP_,p2__13430_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__13459 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13459__delegate.call(this, k, x, y, more);
};
G__13459.cljs$lang$maxFixedArity = 3;
G__13459.cljs$lang$applyTo = (function (arglist__13464){
var k = cljs.core.first(arglist__13464);
var x = cljs.core.first(cljs.core.next(arglist__13464));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13464)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13464)));
return G__13459__delegate.call(this, k, x, y, more);
});
return G__13459;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__13453.call(this,k,x);
case  3 :
return max_key__13454.call(this,k,x,y);
default:
return max_key__13455.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__13455.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__13474 = (function (k,x){
return x;
});
var min_key__13475 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__13476 = (function() { 
var G__13484__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__13444_SHARP_,p2__13445_SHARP_){
return min_key.call(null,k,p1__13444_SHARP_,p2__13445_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__13484 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13484__delegate.call(this, k, x, y, more);
};
G__13484.cljs$lang$maxFixedArity = 3;
G__13484.cljs$lang$applyTo = (function (arglist__13489){
var k = cljs.core.first(arglist__13489);
var x = cljs.core.first(cljs.core.next(arglist__13489));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13489)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13489)));
return G__13484__delegate.call(this, k, x, y, more);
});
return G__13484;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__13474.call(this,k,x);
case  3 :
return min_key__13475.call(this,k,x,y);
default:
return min_key__13476.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__13476.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__13515 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__13517 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13509 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13509))
{var s__13512 = temp__3698__auto____13509;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__13512),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__13512)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__13515.call(this,n,step);
case  3 :
return partition_all__13517.call(this,n,step,coll);
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
var temp__3698__auto____13534 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13534))
{var s__13535 = temp__3698__auto____13534;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__13535))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__13535),take_while.call(null,pred,cljs.core.rest.call(null,s__13535)));
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
var this__13556 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__13561 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__13668 = null;
var G__13668__13669 = (function (rng,f){
var this__13565 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__13668__13670 = (function (rng,f,s){
var this__13570 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__13668 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__13668__13669.call(this,rng,f);
case  3 :
return G__13668__13670.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13668;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__13574 = this;
var comp__13577 = (cljs.core.truth_((this__13574.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__13577.call(null,this__13574.start,this__13574.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__13580 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__13580.end - this__13580.start) / this__13580.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__13583 = this;
return this__13583.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__13587 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__13587.meta,(this__13587.start + this__13587.step),this__13587.end,this__13587.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__13591 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__13592 = this;
return (new cljs.core.Range(meta,this__13592.start,this__13592.end,this__13592.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__13595 = this;
return this__13595.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__13770 = null;
var G__13770__13771 = (function (rng,n){
var this__13656 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13656.start + (n * this__13656.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13658 = (this__13656.start > this__13656.end);

if(cljs.core.truth_(and__3546__auto____13658))
{return cljs.core._EQ_.call(null,this__13656.step,0);
} else
{return and__3546__auto____13658;
}
})()))
{return this__13656.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__13770__13772 = (function (rng,n,not_found){
var this__13662 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__13662.start + (n * this__13662.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____13663 = (this__13662.start > this__13662.end);

if(cljs.core.truth_(and__3546__auto____13663))
{return cljs.core._EQ_.call(null,this__13662.step,0);
} else
{return and__3546__auto____13663;
}
})()))
{return this__13662.start;
} else
{return not_found;
}
}
});
G__13770 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__13770__13771.call(this,rng,n);
case  3 :
return G__13770__13772.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__13770;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__13667 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__13667.meta);
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
var temp__3698__auto____13809 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13809))
{var s__13812 = temp__3698__auto____13809;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__13812),take_nth.call(null,n,cljs.core.drop.call(null,n,s__13812)));
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
var temp__3698__auto____13824 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13824))
{var s__13825 = temp__3698__auto____13824;

var fst__13826 = cljs.core.first.call(null,s__13825);
var fv__13829 = f.call(null,fst__13826);
var run__13831 = cljs.core.cons.call(null,fst__13826,cljs.core.take_while.call(null,(function (p1__13819_SHARP_){
return cljs.core._EQ_.call(null,fv__13829,f.call(null,p1__13819_SHARP_));
}),cljs.core.next.call(null,s__13825)));

return cljs.core.cons.call(null,run__13831,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__13831),s__13825))));
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
var reductions__13916 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____13874 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____13874))
{var s__13878 = temp__3695__auto____13874;

return reductions.call(null,f,cljs.core.first.call(null,s__13878),cljs.core.rest.call(null,s__13878));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__13917 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____13914 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____13914))
{var s__13915 = temp__3698__auto____13914;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__13915)),cljs.core.rest.call(null,s__13915));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__13916.call(this,f,init);
case  3 :
return reductions__13917.call(this,f,init,coll);
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
var juxt__13950 = (function (f){
return (function() {
var G__13958 = null;
var G__13958__13960 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__13958__13961 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__13958__13962 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__13958__13964 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__13958__13965 = (function() { 
var G__13975__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__13975 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__13975__delegate.call(this, x, y, z, args);
};
G__13975.cljs$lang$maxFixedArity = 3;
G__13975.cljs$lang$applyTo = (function (arglist__13976){
var x = cljs.core.first(arglist__13976);
var y = cljs.core.first(cljs.core.next(arglist__13976));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__13976)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__13976)));
return G__13975__delegate.call(this, x, y, z, args);
});
return G__13975;
})()
;
G__13958 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13958__13960.call(this);
case  1 :
return G__13958__13961.call(this,x);
case  2 :
return G__13958__13962.call(this,x,y);
case  3 :
return G__13958__13964.call(this,x,y,z);
default:
return G__13958__13965.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13958.cljs$lang$maxFixedArity = 3;
G__13958.cljs$lang$applyTo = G__13958__13965.cljs$lang$applyTo;
return G__13958;
})()
});
var juxt__13951 = (function (f,g){
return (function() {
var G__13979 = null;
var G__13979__13980 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__13979__13981 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__13979__13983 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__13979__13985 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__13979__13987 = (function() { 
var G__14024__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__14024 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14024__delegate.call(this, x, y, z, args);
};
G__14024.cljs$lang$maxFixedArity = 3;
G__14024.cljs$lang$applyTo = (function (arglist__14092){
var x = cljs.core.first(arglist__14092);
var y = cljs.core.first(cljs.core.next(arglist__14092));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14092)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14092)));
return G__14024__delegate.call(this, x, y, z, args);
});
return G__14024;
})()
;
G__13979 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__13979__13980.call(this);
case  1 :
return G__13979__13981.call(this,x);
case  2 :
return G__13979__13983.call(this,x,y);
case  3 :
return G__13979__13985.call(this,x,y,z);
default:
return G__13979__13987.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__13979.cljs$lang$maxFixedArity = 3;
G__13979.cljs$lang$applyTo = G__13979__13987.cljs$lang$applyTo;
return G__13979;
})()
});
var juxt__13952 = (function (f,g,h){
return (function() {
var G__14093 = null;
var G__14093__14094 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__14093__14095 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__14093__14096 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__14093__14097 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__14093__14098 = (function() { 
var G__14100__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__14100 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14100__delegate.call(this, x, y, z, args);
};
G__14100.cljs$lang$maxFixedArity = 3;
G__14100.cljs$lang$applyTo = (function (arglist__14101){
var x = cljs.core.first(arglist__14101);
var y = cljs.core.first(cljs.core.next(arglist__14101));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14101)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14101)));
return G__14100__delegate.call(this, x, y, z, args);
});
return G__14100;
})()
;
G__14093 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14093__14094.call(this);
case  1 :
return G__14093__14095.call(this,x);
case  2 :
return G__14093__14096.call(this,x,y);
case  3 :
return G__14093__14097.call(this,x,y,z);
default:
return G__14093__14098.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14093.cljs$lang$maxFixedArity = 3;
G__14093.cljs$lang$applyTo = G__14093__14098.cljs$lang$applyTo;
return G__14093;
})()
});
var juxt__13953 = (function() { 
var G__14102__delegate = function (f,g,h,fs){
var fs__13935 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__14103 = null;
var G__14103__14104 = (function (){
return cljs.core.reduce.call(null,(function (p1__13856_SHARP_,p2__13857_SHARP_){
return cljs.core.conj.call(null,p1__13856_SHARP_,p2__13857_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14103__14105 = (function (x){
return cljs.core.reduce.call(null,(function (p1__13858_SHARP_,p2__13859_SHARP_){
return cljs.core.conj.call(null,p1__13858_SHARP_,p2__13859_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14103__14106 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__13860_SHARP_,p2__13861_SHARP_){
return cljs.core.conj.call(null,p1__13860_SHARP_,p2__13861_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14103__14107 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__13863_SHARP_,p2__13865_SHARP_){
return cljs.core.conj.call(null,p1__13863_SHARP_,p2__13865_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__13935);
});
var G__14103__14108 = (function() { 
var G__14118__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__13867_SHARP_,p2__13868_SHARP_){
return cljs.core.conj.call(null,p1__13867_SHARP_,cljs.core.apply.call(null,p2__13868_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__13935);
};
var G__14118 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14118__delegate.call(this, x, y, z, args);
};
G__14118.cljs$lang$maxFixedArity = 3;
G__14118.cljs$lang$applyTo = (function (arglist__14125){
var x = cljs.core.first(arglist__14125);
var y = cljs.core.first(cljs.core.next(arglist__14125));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14125)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14125)));
return G__14118__delegate.call(this, x, y, z, args);
});
return G__14118;
})()
;
G__14103 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__14103__14104.call(this);
case  1 :
return G__14103__14105.call(this,x);
case  2 :
return G__14103__14106.call(this,x,y);
case  3 :
return G__14103__14107.call(this,x,y,z);
default:
return G__14103__14108.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__14103.cljs$lang$maxFixedArity = 3;
G__14103.cljs$lang$applyTo = G__14103__14108.cljs$lang$applyTo;
return G__14103;
})()
};
var G__14102 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__14102__delegate.call(this, f, g, h, fs);
};
G__14102.cljs$lang$maxFixedArity = 3;
G__14102.cljs$lang$applyTo = (function (arglist__14126){
var f = cljs.core.first(arglist__14126);
var g = cljs.core.first(cljs.core.next(arglist__14126));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14126)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__14126)));
return G__14102__delegate.call(this, f, g, h, fs);
});
return G__14102;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__13950.call(this,f);
case  2 :
return juxt__13951.call(this,f,g);
case  3 :
return juxt__13952.call(this,f,g,h);
default:
return juxt__13953.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__13953.cljs$lang$applyTo;
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
var dorun__14137 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__14140 = cljs.core.next.call(null,coll);
coll = G__14140;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__14138 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____14133 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____14133))
{return (n > 0);
} else
{return and__3546__auto____14133;
}
})()))
{{
var G__14141 = (n - 1);
var G__14142 = cljs.core.next.call(null,coll);
n = G__14141;
coll = G__14142;
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
return dorun__14137.call(this,n);
case  2 :
return dorun__14138.call(this,n,coll);
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
var doall__14143 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__14144 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__14143.call(this,n);
case  2 :
return doall__14144.call(this,n,coll);
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
var matches__14146 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__14146),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14146),1)))
{return cljs.core.first.call(null,matches__14146);
} else
{return cljs.core.vec.call(null,matches__14146);
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
var matches__14148 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__14148)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__14148),1)))
{return cljs.core.first.call(null,matches__14148);
} else
{return cljs.core.vec.call(null,matches__14148);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__14165 = cljs.core.re_find.call(null,re,s);
var match_idx__14167 = s.search(re);
var match_str__14168 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__14165))?cljs.core.first.call(null,match_data__14165):match_data__14165);
var post_match__14170 = cljs.core.subs.call(null,s,(match_idx__14167 + cljs.core.count.call(null,match_str__14168)));

if(cljs.core.truth_(match_data__14165))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__14165,re_seq.call(null,re,post_match__14170));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__14185_SHARP_){
return print_one.call(null,p1__14185_SHARP_,opts);
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
{var and__3546__auto____14214 = (function (){var x__445__auto____14209 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14211 = x__445__auto____14209;

if(cljs.core.truth_(and__3546__auto____14211))
{var and__3546__auto____14212 = x__445__auto____14209.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____14212))
{return cljs.core.not.call(null,x__445__auto____14209.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____14212;
}
} else
{return and__3546__auto____14211;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__445__auto____14209);
}
})();

if(cljs.core.truth_(and__3546__auto____14214))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____14214;
}
} else
{return and__3546__auto____14208;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__445__auto____14216 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____14219 = x__445__auto____14216;

if(cljs.core.truth_(and__3546__auto____14219))
{var and__3546__auto____14220 = x__445__auto____14216.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____14220))
{return cljs.core.not.call(null,x__445__auto____14216.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____14220;
}
} else
{return and__3546__auto____14219;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__445__auto____14216);
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
var first_obj__14223 = cljs.core.first.call(null,objs);
var sb__14224 = (new goog.string.StringBuffer());

var G__14225__14226 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14225__14226))
{var obj__14227 = cljs.core.first.call(null,G__14225__14226);
var G__14225__14228 = G__14225__14226;

while(true){
if(cljs.core.truth_((obj__14227 === first_obj__14223)))
{} else
{sb__14224.append(" ");
}
var G__14230__14231 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14227,opts));

if(cljs.core.truth_(G__14230__14231))
{var string__14232 = cljs.core.first.call(null,G__14230__14231);
var G__14230__14233 = G__14230__14231;

while(true){
sb__14224.append(string__14232);
var temp__3698__auto____14234 = cljs.core.next.call(null,G__14230__14233);

if(cljs.core.truth_(temp__3698__auto____14234))
{var G__14230__14235 = temp__3698__auto____14234;

{
var G__14242 = cljs.core.first.call(null,G__14230__14235);
var G__14243 = G__14230__14235;
string__14232 = G__14242;
G__14230__14233 = G__14243;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14237 = cljs.core.next.call(null,G__14225__14228);

if(cljs.core.truth_(temp__3698__auto____14237))
{var G__14225__14238 = temp__3698__auto____14237;

{
var G__14244 = cljs.core.first.call(null,G__14225__14238);
var G__14245 = G__14225__14238;
obj__14227 = G__14244;
G__14225__14228 = G__14245;
continue;
}
} else
{}
break;
}
} else
{}
return cljs.core.str.call(null,sb__14224);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__14247 = cljs.core.first.call(null,objs);

var G__14248__14249 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__14248__14249))
{var obj__14253 = cljs.core.first.call(null,G__14248__14249);
var G__14248__14254 = G__14248__14249;

while(true){
if(cljs.core.truth_((obj__14253 === first_obj__14247)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__14256__14257 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__14253,opts));

if(cljs.core.truth_(G__14256__14257))
{var string__14280 = cljs.core.first.call(null,G__14256__14257);
var G__14256__14281 = G__14256__14257;

while(true){
cljs.core.string_print.call(null,string__14280);
var temp__3698__auto____14282 = cljs.core.next.call(null,G__14256__14281);

if(cljs.core.truth_(temp__3698__auto____14282))
{var G__14256__14283 = temp__3698__auto____14282;

{
var G__14292 = cljs.core.first.call(null,G__14256__14283);
var G__14293 = G__14256__14283;
string__14280 = G__14292;
G__14256__14281 = G__14293;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____14284 = cljs.core.next.call(null,G__14248__14254);

if(cljs.core.truth_(temp__3698__auto____14284))
{var G__14248__14290 = temp__3698__auto____14284;

{
var G__14295 = cljs.core.first.call(null,G__14248__14290);
var G__14296 = G__14248__14290;
obj__14253 = G__14295;
G__14248__14254 = G__14296;
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
pr_str.cljs$lang$applyTo = (function (arglist__14303){
var objs = cljs.core.seq( arglist__14303 );;
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
pr.cljs$lang$applyTo = (function (arglist__14304){
var objs = cljs.core.seq( arglist__14304 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__14305){
var objs = cljs.core.seq( arglist__14305 );;
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
println.cljs$lang$applyTo = (function (arglist__14306){
var objs = cljs.core.seq( arglist__14306 );;
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
prn.cljs$lang$applyTo = (function (arglist__14307){
var objs = cljs.core.seq( arglist__14307 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__14449 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14449,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____14450 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14450))
{var nspc__14451 = temp__3698__auto____14450;

return cljs.core.str.call(null,nspc__14451,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____14452 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____14452))
{var nspc__14453 = temp__3698__auto____14452;

return cljs.core.str.call(null,nspc__14453,"/");
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
var pr_pair__14454 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__14454,"{",", ","}",opts,coll);
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
var this__14522 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__14524 = this;
var G__14526__14527 = cljs.core.seq.call(null,this__14524.watches);

if(cljs.core.truth_(G__14526__14527))
{var G__14529__14531 = cljs.core.first.call(null,G__14526__14527);
var vec__14530__14532 = G__14529__14531;
var key__14533 = cljs.core.nth.call(null,vec__14530__14532,0,null);
var f__14534 = cljs.core.nth.call(null,vec__14530__14532,1,null);
var G__14526__14535 = G__14526__14527;

var G__14529__14536 = G__14529__14531;
var G__14526__14537 = G__14526__14535;

while(true){
var vec__14538__14539 = G__14529__14536;
var key__14540 = cljs.core.nth.call(null,vec__14538__14539,0,null);
var f__14541 = cljs.core.nth.call(null,vec__14538__14539,1,null);
var G__14526__14542 = G__14526__14537;

f__14541.call(null,key__14540,this$,oldval,newval);
var temp__3698__auto____14543 = cljs.core.next.call(null,G__14526__14542);

if(cljs.core.truth_(temp__3698__auto____14543))
{var G__14526__14544 = temp__3698__auto____14543;

{
var G__14562 = cljs.core.first.call(null,G__14526__14544);
var G__14563 = G__14526__14544;
G__14529__14536 = G__14562;
G__14526__14537 = G__14563;
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
var this__14545 = this;
return this$.watches = cljs.core.assoc.call(null,this__14545.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__14548 = this;
return this$.watches = cljs.core.dissoc.call(null,this__14548.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__14551 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__14551.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__14554 = this;
return this__14554.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14555 = this;
return this__14555.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__14556 = this;
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
var atom__14573 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__14574 = (function() { 
var G__14576__delegate = function (x,p__14567){
var map__14568__14569 = p__14567;
var map__14568__14570 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14568__14569))?cljs.core.apply.call(null,cljs.core.hash_map,map__14568__14569):map__14568__14569);
var validator__14571 = cljs.core.get.call(null,map__14568__14570,"﷐'validator");
var meta__14572 = cljs.core.get.call(null,map__14568__14570,"﷐'meta");

return (new cljs.core.Atom(x,meta__14572,validator__14571,null));
};
var G__14576 = function (x,var_args){
var p__14567 = null;
if (goog.isDef(var_args)) {
  p__14567 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14576__delegate.call(this, x, p__14567);
};
G__14576.cljs$lang$maxFixedArity = 1;
G__14576.cljs$lang$applyTo = (function (arglist__14580){
var x = cljs.core.first(arglist__14580);
var p__14567 = cljs.core.rest(arglist__14580);
return G__14576__delegate.call(this, x, p__14567);
});
return G__14576;
})()
;
atom = function(x,var_args){
var p__14567 = var_args;
switch(arguments.length){
case  1 :
return atom__14573.call(this,x);
default:
return atom__14574.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__14574.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____14582 = a.validator;

if(cljs.core.truth_(temp__3698__auto____14582))
{var validate__14583 = temp__3698__auto____14582;

if(cljs.core.truth_(validate__14583.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'validate","﷑'new-value"),cljs.core.hash_map("﷐'line",3061))))));
}
} else
{}
var old_value__14584 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__14584,new_value);
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
var swap_BANG___14590 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___14591 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___14592 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___14593 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___14594 = (function() { 
var G__14597__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__14597 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__14597__delegate.call(this, a, f, x, y, z, more);
};
G__14597.cljs$lang$maxFixedArity = 5;
G__14597.cljs$lang$applyTo = (function (arglist__14598){
var a = cljs.core.first(arglist__14598);
var f = cljs.core.first(cljs.core.next(arglist__14598));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__14598)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14598))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14598)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__14598)))));
return G__14597__delegate.call(this, a, f, x, y, z, more);
});
return G__14597;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___14590.call(this,a,f);
case  3 :
return swap_BANG___14591.call(this,a,f,x);
case  4 :
return swap_BANG___14592.call(this,a,f,x,y);
case  5 :
return swap_BANG___14593.call(this,a,f,x,y,z);
default:
return swap_BANG___14594.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___14594.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__14602){
var iref = cljs.core.first(arglist__14602);
var f = cljs.core.first(cljs.core.next(arglist__14602));
var args = cljs.core.rest(cljs.core.next(arglist__14602));
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
var gensym__14606 = (function (){
return gensym.call(null,"G__");
});
var gensym__14607 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__14606.call(this);
case  1 :
return gensym__14607.call(this,prefix_string);
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
var this__14625 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__14625.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__14626 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__14626.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__14626.state,this__14626.f);
}
return cljs.core.deref.call(null,this__14626.state);
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
delay.cljs$lang$applyTo = (function (arglist__14679){
var body = cljs.core.seq( arglist__14679 );;
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
var map__14691__14692 = options;
var map__14691__14693 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14691__14692))?cljs.core.apply.call(null,cljs.core.hash_map,map__14691__14692):map__14691__14692);
var keywordize_keys__14694 = cljs.core.get.call(null,map__14691__14693,"﷐'keywordize-keys");
var keyfn__14695 = (cljs.core.truth_(keywordize_keys__14694)?cljs.core.keyword:cljs.core.str);
var f__14726 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__509__auto____14723 = (function iter__14701(s__14702){
return (new cljs.core.LazySeq(null,false,(function (){
var s__14702__14712 = s__14702;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__14702__14712)))
{var k__14719 = cljs.core.first.call(null,s__14702__14712);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__14695.call(null,k__14719),thisfn.call(null,(x[k__14719]))]),iter__14701.call(null,cljs.core.rest.call(null,s__14702__14712)));
} else
{return null;
}
break;
}
})));
});

return iter__509__auto____14723.call(null,cljs.core.js_keys.call(null,x));
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

return f__14726.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__14737){
var x = cljs.core.first(arglist__14737);
var options = cljs.core.rest(arglist__14737);
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
var mem__14742 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__14759__delegate = function (args){
var temp__3695__auto____14746 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__14742),args);

if(cljs.core.truth_(temp__3695__auto____14746))
{var v__14747 = temp__3695__auto____14746;

return v__14747;
} else
{var ret__14751 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__14742,cljs.core.assoc,args,ret__14751);
return ret__14751;
}
};
var G__14759 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__14759__delegate.call(this, args);
};
G__14759.cljs$lang$maxFixedArity = 0;
G__14759.cljs$lang$applyTo = (function (arglist__14762){
var args = cljs.core.seq( arglist__14762 );;
return G__14759__delegate.call(this, args);
});
return G__14759;
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
var trampoline__14793 = (function (f){
while(true){
var ret__14763 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__14763)))
{{
var G__14796 = ret__14763;
f = G__14796;
continue;
}
} else
{return ret__14763;
}
break;
}
});
var trampoline__14794 = (function() { 
var G__14797__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__14797 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__14797__delegate.call(this, f, args);
};
G__14797.cljs$lang$maxFixedArity = 1;
G__14797.cljs$lang$applyTo = (function (arglist__14798){
var f = cljs.core.first(arglist__14798);
var args = cljs.core.rest(arglist__14798);
return G__14797__delegate.call(this, f, args);
});
return G__14797;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__14793.call(this,f);
default:
return trampoline__14794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__14794.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__14799 = (function (){
return rand.call(null,1);
});
var rand__14800 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__14799.call(this);
case  1 :
return rand__14800.call(this,n);
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
var k__14802 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__14802,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__14802,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___14811 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___14812 = (function (h,child,parent){
var or__3548__auto____14803 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____14803))
{return or__3548__auto____14803;
} else
{var or__3548__auto____14804 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____14804))
{return or__3548__auto____14804;
} else
{var and__3546__auto____14805 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____14805))
{var and__3546__auto____14806 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____14806))
{var and__3546__auto____14807 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____14807))
{var ret__14808 = true;
var i__14809 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____14810 = cljs.core.not.call(null,ret__14808);

if(cljs.core.truth_(or__3548__auto____14810))
{return or__3548__auto____14810;
} else
{return cljs.core._EQ_.call(null,i__14809,cljs.core.count.call(null,parent));
}
})()))
{return ret__14808;
} else
{{
var G__14814 = isa_QMARK_.call(null,h,child.call(null,i__14809),parent.call(null,i__14809));
var G__14815 = (i__14809 + 1);
ret__14808 = G__14814;
i__14809 = G__14815;
continue;
}
}
break;
}
} else
{return and__3546__auto____14807;
}
} else
{return and__3546__auto____14806;
}
} else
{return and__3546__auto____14805;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___14811.call(this,h,child);
case  3 :
return isa_QMARK___14812.call(this,h,child,parent);
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
var parents__14816 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__14817 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__14816.call(this,h);
case  2 :
return parents__14817.call(this,h,tag);
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
var ancestors__14893 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__14894 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__14893.call(this,h);
case  2 :
return ancestors__14894.call(this,h,tag);
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
var descendants__14899 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__14900 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__14899.call(this,h);
case  2 :
return descendants__14900.call(this,h,tag);
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
var derive__14932 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'namespace","﷑'parent"),cljs.core.hash_map("﷐'line",3353))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__14933 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("﷑'not=","﷑'tag","﷑'parent"),cljs.core.hash_map("﷐'line",3357))))));
}
var tp__14917 = "﷐'parents".call(null,h);
var td__14918 = "﷐'descendants".call(null,h);
var ta__14920 = "﷐'ancestors".call(null,h);
var tf__14924 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____14930 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__14917.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14920.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__14920.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__14917,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__14924.call(null,"﷐'ancestors".call(null,h),tag,td__14918,parent,ta__14920),"﷐'descendants":tf__14924.call(null,"﷐'descendants".call(null,h),parent,ta__14920,tag,td__14918)});
})());

if(cljs.core.truth_(or__3548__auto____14930))
{return or__3548__auto____14930;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__14932.call(this,h,tag);
case  3 :
return derive__14933.call(this,h,tag,parent);
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
var underive__14954 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__14955 = (function (h,tag,parent){
var parentMap__14941 = "﷐'parents".call(null,h);
var childsParents__14943 = (cljs.core.truth_(parentMap__14941.call(null,tag))?cljs.core.disj.call(null,parentMap__14941.call(null,tag),parent):cljs.core.set([]));
var newParents__14945 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__14943))?cljs.core.assoc.call(null,parentMap__14941,tag,childsParents__14943):cljs.core.dissoc.call(null,parentMap__14941,tag));
var deriv_seq__14947 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__14902_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__14902_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__14902_SHARP_),cljs.core.second.call(null,p1__14902_SHARP_)));
}),cljs.core.seq.call(null,newParents__14945)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__14941.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__14903_SHARP_,p2__14904_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__14903_SHARP_,p2__14904_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__14947));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__14954.call(this,h,tag);
case  3 :
return underive__14955.call(this,h,tag,parent);
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
var xprefs__14974 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____14976 = (cljs.core.truth_((function (){var and__3546__auto____14975 = xprefs__14974;

if(cljs.core.truth_(and__3546__auto____14975))
{return xprefs__14974.call(null,y);
} else
{return and__3546__auto____14975;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____14976))
{return or__3548__auto____14976;
} else
{var or__3548__auto____14978 = (function (){var ps__14977 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14977) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__14977),prefer_table)))
{} else
{}
{
var G__14983 = cljs.core.rest.call(null,ps__14977);
ps__14977 = G__14983;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14978))
{return or__3548__auto____14978;
} else
{var or__3548__auto____14980 = (function (){var ps__14979 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__14979) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__14979),y,prefer_table)))
{} else
{}
{
var G__14992 = cljs.core.rest.call(null,ps__14979);
ps__14979 = G__14992;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____14980))
{return or__3548__auto____14980;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____15051 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____15051))
{return or__3548__auto____15051;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__15063 = cljs.core.reduce.call(null,(function (be,p__15055){
var vec__15056__15057 = p__15055;
var k__15058 = cljs.core.nth.call(null,vec__15056__15057,0,null);
var ___15059 = cljs.core.nth.call(null,vec__15056__15057,1,null);
var e__15060 = vec__15056__15057;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__15058)))
{var be2__15062 = (cljs.core.truth_((function (){var or__3548__auto____15061 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3548__auto____15061))
{return or__3548__auto____15061;
} else
{return cljs.core.dominates.call(null,k__15058,cljs.core.first.call(null,be),prefer_table);
}
})())?e__15060:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__15062),k__15058,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__15058," and ",cljs.core.first.call(null,be2__15062),", and neither is preferred")));
}
return be2__15062;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__15063))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__15063));
return cljs.core.second.call(null,best_entry__15063);
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
if(cljs.core.truth_((function (){var and__3546__auto____15073 = mf;

if(cljs.core.truth_(and__3546__auto____15073))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____15073;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____15080 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15080))
{return or__3548__auto____15080;
} else
{var or__3548__auto____15081 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____15081))
{return or__3548__auto____15081;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____15084 = mf;

if(cljs.core.truth_(and__3546__auto____15084))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____15084;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____15087 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15087))
{return or__3548__auto____15087;
} else
{var or__3548__auto____15088 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____15088))
{return or__3548__auto____15088;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15089 = mf;

if(cljs.core.truth_(and__3546__auto____15089))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____15089;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15090 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15090))
{return or__3548__auto____15090;
} else
{var or__3548__auto____15091 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____15091))
{return or__3548__auto____15091;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____15092 = mf;

if(cljs.core.truth_(and__3546__auto____15092))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____15092;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____15093 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15093))
{return or__3548__auto____15093;
} else
{var or__3548__auto____15094 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____15094))
{return or__3548__auto____15094;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____15095 = mf;

if(cljs.core.truth_(and__3546__auto____15095))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____15095;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____15097 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15097))
{return or__3548__auto____15097;
} else
{var or__3548__auto____15099 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____15099))
{return or__3548__auto____15099;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15101 = mf;

if(cljs.core.truth_(and__3546__auto____15101))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____15101;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____15103 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15103))
{return or__3548__auto____15103;
} else
{var or__3548__auto____15105 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____15105))
{return or__3548__auto____15105;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____15109 = mf;

if(cljs.core.truth_(and__3546__auto____15109))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____15109;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____15113 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15113))
{return or__3548__auto____15113;
} else
{var or__3548__auto____15115 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____15115))
{return or__3548__auto____15115;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____15121 = mf;

if(cljs.core.truth_(and__3546__auto____15121))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____15121;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____15123 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____15123))
{return or__3548__auto____15123;
} else
{var or__3548__auto____15169 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____15169))
{return or__3548__auto____15169;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__15181 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__15182 = cljs.core._get_method.call(null,mf,dispatch_val__15181);

if(cljs.core.truth_(target_fn__15182))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__15181)));
}
return cljs.core.apply.call(null,target_fn__15182,args);
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
var this__15183 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__15184 = this;
cljs.core.swap_BANG_.call(null,this__15184.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15184.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15184.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__15184.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__15185 = this;
cljs.core.swap_BANG_.call(null,this__15185.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__15185.method_cache,this__15185.method_table,this__15185.cached_hierarchy,this__15185.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__15186 = this;
cljs.core.swap_BANG_.call(null,this__15186.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__15186.method_cache,this__15186.method_table,this__15186.cached_hierarchy,this__15186.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__15187 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__15187.cached_hierarchy),cljs.core.deref.call(null,this__15187.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__15187.method_cache,this__15187.method_table,this__15187.cached_hierarchy,this__15187.hierarchy);
}
var temp__3695__auto____15188 = cljs.core.deref.call(null,this__15187.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____15188))
{var target_fn__15189 = temp__3695__auto____15188;

return target_fn__15189;
} else
{var temp__3695__auto____15190 = cljs.core.find_and_cache_best_method.call(null,this__15187.name,dispatch_val,this__15187.hierarchy,this__15187.method_table,this__15187.prefer_table,this__15187.method_cache,this__15187.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____15190))
{var target_fn__15191 = temp__3695__auto____15190;

return target_fn__15191;
} else
{return cljs.core.deref.call(null,this__15187.method_table).call(null,this__15187.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__15194 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__15194.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__15194.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__15194.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__15194.method_cache,this__15194.method_table,this__15194.cached_hierarchy,this__15194.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__15195 = this;
return cljs.core.deref.call(null,this__15195.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__15196 = this;
return cljs.core.deref.call(null,this__15196.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__15198 = this;
return cljs.core.do_dispatch.call(null,mf,this__15198.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__15280__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__15280 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__15280__delegate.call(this, _, args);
};
G__15280.cljs$lang$maxFixedArity = 1;
G__15280.cljs$lang$applyTo = (function (arglist__15281){
var _ = cljs.core.first(arglist__15281);
var args = cljs.core.rest(arglist__15281);
return G__15280__delegate.call(this, _, args);
});
return G__15280;
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
